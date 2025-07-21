import {describe, it, expect} from 'vitest';
import {
    add,
    subtract,
    conditionalCalc,
    multiConditionCalc,
    switchCalc,
    ternaryMax,
    earlyReturnCalc,
} from './bar';

describe('bar.tsの単体テスト', () => {
    it('add関数のテスト', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-3, 5)).toBe(2);
    });

    it('subtract関数のテスト', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(0, 1)).toBe(-1);
    });

    describe('conditionalCalc関数のテスト（単純条件）', () => {
        it('aが0以上の場合', () => {
            expect(conditionalCalc(2, 3)).toBe(5);
            expect(conditionalCalc(0, 3)).toBe(3); // a=0 の境界値
        });
        it('aが負の場合', () => {
            expect(conditionalCalc(-2, 3)).toBe(-5);
        });
    });

    describe('multiConditionCalc関数のテスト（複数条件）', () => {
        it('a, b ともに正', () => {
            expect(multiConditionCalc(1, 2, -1)).toBe(3);
        });
        it('c が正のケース', () => {
            expect(multiConditionCalc(-1, 2, 3)).toBe(5);
            expect(multiConditionCalc(0, -2, 5)).toBe(3);
        });
        it('いずれの条件にも当てはまらない場合', () => {
            expect(multiConditionCalc(-1, -1, 0)).toBe(-(-1 - -1));
            expect(multiConditionCalc(1, -3, -2)).toBe(-(1 - -3));
        });
    });

    describe('switchCalc関数のテスト（switch文）', () => {
        it('keyが"foo"の場合', () => {
            expect(switchCalc('foo')).toBe('FOO');
        });
        it('keyが"bar"の場合', () => {
            expect(switchCalc('bar')).toBe('BAR');
        });
        it('それ以外の場合', () => {
            expect(switchCalc('baz')).toBe('UNKNOWN');
            expect(switchCalc('')).toBe('UNKNOWN');
        });
    });

    describe('ternaryMax関数のテスト（三項演算子）', () => {
        it('aが最大', () => {
            expect(ternaryMax(5, 3, 1)).toBe(5);
        });
        it('bが最大', () => {
            expect(ternaryMax(3, 7, 1)).toBe(7);
        });
        it('cが最大', () => {
            expect(ternaryMax(1, 4, 9)).toBe(9);
        });
        it('複数が同じ値の場合', () => {
            expect(ternaryMax(5, 5, 5)).toBe(5);
            expect(ternaryMax(5, 5, 3)).toBe(5);
        });
    });

    describe('earlyReturnCalc関数のテスト（早期return）', () => {
        it('負数が含まれている場合は0を返す', () => {
            expect(earlyReturnCalc(-1, 5)).toBe(0);
            expect(earlyReturnCalc(5, -2)).toBe(0);
            expect(earlyReturnCalc(-1, -2)).toBe(0);
        });
        it('どちらも負数でない場合は加算結果を返す', () => {
            expect(earlyReturnCalc(1, 2)).toBe(3);
            expect(earlyReturnCalc(0, 3)).toBe(3);
        });
    });
});
