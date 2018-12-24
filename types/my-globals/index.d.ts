// Example, empty custom typing for untyped libraries

declare module "my-globals" {
  global {
    interface Window {
      // For example, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE is injected by redux
      // __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
  }
}
