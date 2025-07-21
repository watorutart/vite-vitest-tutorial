import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // グローバルなテストAPIを有効にする
    environment: 'jsdom', // DOM環境を使用
  }
});