import { describe, it, expect } from 'vitest';

// 非同期関数の例
const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('データ取得成功'), 1000);
  });
};

describe('非同期処理のテスト', () => {
  it('fetchData は正しい値を返す', async () => {
    const data = await fetchData();
    expect(data).toBe('データ取得成功');
  });
});