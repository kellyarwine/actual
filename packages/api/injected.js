/**
 * Dependency injection pattern for the send function.
 *
 * This pattern allows the API methods to use a `send` function before the actual
 * implementation is available. It works this way because:
 *
 * 1. **Initialization order**: The API methods (methods.ts) can be imported and
 *    defined before the main bundle is loaded and initialized.
 *
 * 2. **Testability**: Tests can inject mock implementations by calling override()
 *    with a test double, allowing isolated unit testing.
 *
 * 3. **Decoupling**: Methods don't need to directly import the bundle, reducing
 *    circular dependencies and making the code more modular.
 *
 * The flow is: methods.ts imports this module → init() calls override() with
 * the real implementation → subsequent calls to send() use the injected function.
 */

export let send;

export function override(sendImplementation) {
  send = sendImplementation;
}
