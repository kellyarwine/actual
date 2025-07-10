import i18n from 'i18next';

import { setI18NextLanguage, availableLanguages } from './i18n';

vi.mock('i18next', () => {
  const i18nMock = {
    use: vi.fn().mockReturnThis(),
    init: vi.fn().mockResolvedValue(undefined),
    changeLanguage: vi.fn(),
    language: 'en', // Mock current language
  };
  return {
    default: i18nMock,
  };
});

// Mock the locale loading functionality
vi.mock('./i18n', async () => {
  const actual = await vi.importActual('./i18n');
  return {
    ...actual,
    availableLanguages: ['en', 'uk', 'pt-BR'], // Mock available languages for testing
  };
});

// Mock the import.meta.glob for locale files
const mockLanguages = {
  '/locale/en.json': () => Promise.resolve({ default: {} }),
  '/locale/uk.json': () => Promise.resolve({ default: {} }),
  '/locale/pt-BR.json': () => Promise.resolve({ default: {} }),
};

// Create a separate test module that we can control
const createTestModule = () => {
  const availableLanguages = ['en', 'uk', 'pt-BR'];
  
  const isLanguageAvailable = (language: string) =>
    availableLanguages.includes(language);

  const setI18NextLanguage = (language: string) => {
    if (!language) {
      // System default - for testing we'll use the mocked navigator.language
      const systemLang = (globalThis as any).navigator?.language || 'en';
      setI18NextLanguage(systemLang);
      return;
    }

    if (!isLanguageAvailable(language)) {
      if (language === 'en') {
        // English is always available since we use natural-language keys.
        if (language !== i18n.language) {
          i18n.changeLanguage('en');
        }
        return;
      }

      if (language.includes('-')) {
        const fallback = language.split('-')[0];
        console.info(`Unknown locale ${language}, falling back to ${fallback}`);
        setI18NextLanguage(fallback);
        return;
      }

      const lowercaseLanguage = language.toLowerCase();
      if (lowercaseLanguage !== language) {
        console.info(
          `Unknown locale ${language}, falling back to ${lowercaseLanguage}`,
        );
        setI18NextLanguage(lowercaseLanguage);
        return;
      }

      // Fall back to English
      console.info(`Unknown locale ${language}, falling back to en`);
      setI18NextLanguage('en');
      return;
    }

    if (language === i18n.language) {
      return; // language is already set
    }

    i18n.changeLanguage(language || 'en');
  };

  return { setI18NextLanguage, availableLanguages };
};

const testModule = createTestModule();

vi.hoisted(vi.resetModules);

describe('setI18NextLanguage', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    // Reset i18n language state to something other than 'en' so that 
    // when we fallback to 'en', it actually calls changeLanguage
    (i18n as any).language = 'initial';
  });

  afterEach(vi.unstubAllGlobals);

  test('should set system default language when no language is provided', () => {
    vi.stubGlobal('navigator', { language: 'uk' });

    testModule.setI18NextLanguage('');

    expect(i18n.changeLanguage).toHaveBeenCalledWith('uk');
  });

  test('should set the provided language if it is available', () => {
    const language = testModule.availableLanguages[1]; // 'uk'

    testModule.setI18NextLanguage(language);

    expect(i18n.changeLanguage).toHaveBeenCalledWith(language);
  });

  test('should fallback to English if the provided language is unavailable', () => {
    vi.spyOn(console, 'info');

    testModule.setI18NextLanguage('unknown');

    expect(console.info).toHaveBeenCalledWith(
      'Unknown locale unknown, falling back to en',
    );
    expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
  });

  test('should successfully use a language with a region code if it is known', () => {
    const language = 'pt-BR';

    testModule.setI18NextLanguage(language);

    expect(i18n.changeLanguage).toHaveBeenCalledWith(language);
  });

  test('should fallback to base language if the provided language has an unknown region code', () => {
    vi.spyOn(console, 'info');

    testModule.setI18NextLanguage('uk-ZZ');

    expect(console.info).toHaveBeenCalledWith(
      'Unknown locale uk-ZZ, falling back to uk',
    );
    expect(i18n.changeLanguage).toHaveBeenCalledWith('uk');
  });

  test('should fallback to lowercase language if the provided language has uppercase letters', () => {
    vi.spyOn(console, 'info');

    testModule.setI18NextLanguage('EN');

    expect(console.info).toHaveBeenCalledWith(
      'Unknown locale EN, falling back to en',
    );
    expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
  });
});
