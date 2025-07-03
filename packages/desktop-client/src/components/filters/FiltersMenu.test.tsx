import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { GenericInput } from '@desktop-client/components/util/GenericInput';
import { TestProvider } from '@desktop-client/redux/mock';

// Mock the form dependencies
vi.mock('../../hooks/useDateFormat', () => ({
  useDateFormat: () => 'MM/dd/yyyy',
}));

vi.mock('../../hooks/useCategories', () => ({
  useCategories: () => ({ grouped: [] }),
}));

vi.mock('../../hooks/useReports', () => ({
  useReports: () => ({ data: [] }),
}));

vi.mock('../../redux', () => ({
  useSelector: vi.fn(() => []),
}));

describe('GenericInput onEnter behavior', () => {
  const defaultProps = {
    field: 'notes',
    type: 'string',
    value: '',
    onChange: vi.fn(),
    onEnter: vi.fn(),
  };

  function renderGenericInput(props = {}) {
    return render(
      <TestProvider>
        <GenericInput {...defaultProps} {...props} />
      </TestProvider>,
    );
  }

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('onEnter callback is called when Enter is pressed in string input', async () => {
    const onChange = vi.fn();
    const onEnter = vi.fn();

    renderGenericInput({
      onChange,
      onEnter,
      type: 'string',
      field: 'notes',
    });

    const input = screen.getByRole('textbox');

    // Type some text
    await userEvent.type(input, '#test #example');

    // Press Enter
    await userEvent.type(input, '{Enter}');

    // Verify onEnter was called with the input value
    expect(onEnter).toHaveBeenCalledWith('#test #example', expect.any(Object));
  });

  test('onEnter works for date month input', async () => {
    const onChange = vi.fn();
    const onEnter = vi.fn();

    renderGenericInput({
      onChange,
      onEnter,
      type: 'date',
      field: 'date',
      subfield: 'month',
    });

    const input = screen.getByRole('textbox');

    // Type a month value
    await userEvent.type(input, '2023-12');

    // Press Enter
    await userEvent.type(input, '{Enter}');

    // Verify onEnter was called
    expect(onEnter).toHaveBeenCalledWith('2023-12', expect.any(Object));
  });
});
