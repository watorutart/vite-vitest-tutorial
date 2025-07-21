export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

/**
 * 数値が0以上なら add を呼び出し、負なら subtract を呼び出す
 * （単純条件 - if文）
 */
export function conditionalCalc(a: number, b: number): number {
    if (a >= 0) {
        return add(a, b);
    } else {
        return subtract(a, b);
    }
}

/**
 * 数値 a, b, c を受け取り、以下のルールで加算する
 * - a と b が両方とも正なら a + b
 * - そうでなく、c が正なら b + c
 * - 上記以外はすべて subtract(a, b)
 * （複数条件 - if-else複数）
 */
export function multiConditionCalc(a: number, b: number, c: number): number {
    if (a > 0 && b > 0) {
        return add(a, b);
    } else if (c > 0) {
        return add(b, c);
    } else {
        return subtract(a, b);
    }
}

/**
 * 与えられた文字列 key の値によって異なる文字列を返す
 * （switch文）
 */
export function switchCalc(key: string): string {
    switch (key) {
        case 'foo':
            return 'FOO';
        case 'bar':
            return 'BAR';
        default:
            return 'UNKNOWN';
    }
}

/**
 * 3つの数値の中で最大の値を返す
 * 三項演算子を使用
 * （三項演算子）
 */
export function ternaryMax(a: number, b: number, c: number): number {
    // a と b の大きい方を firstMax とし、そこから c と比較
    const firstMax = a > b ? a : b;
    return c > firstMax ? c : firstMax;
}

/**
 * 早期returnを利用し、何かしらの条件を満たせばその場で終了
 * 引数が負数なら 0 を返す。それ以外の場合は加算結果を返す。
 * （早期return）
 */
export function earlyReturnCalc(a: number, b: number): number {
    if (a < 0 || b < 0) {
        return 0; // 早期return
    }
    return add(a, b);
}
