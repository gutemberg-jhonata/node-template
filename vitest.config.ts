import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    alias: [
      {
        find: '@',
        replacement: 'src'
      }
    ]
  }
});
