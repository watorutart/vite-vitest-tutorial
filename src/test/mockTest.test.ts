import { vi, describe, it, expect } from 'vitest';

// fetchをモック化
globalThis.fetch = vi.fn().mockResolvedValue({
  json: () => Promise.resolve({ message: '成功' })
} as unknown as Response);

describe('APIのテスト', () => {
  it('fetchが正しく動作する', async () => {
    const response = await fetch('https://api.example.com');
    const data = await response.json();

    expect(data.message).toBe('成功');
  });
});