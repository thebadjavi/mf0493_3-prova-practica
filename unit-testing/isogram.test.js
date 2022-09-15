import {it, expect, describe} from 'vitest';
import { isIsogram } from './isogram';
/*
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/
describe('isogram', () => {
    it('should return true for Dermatoglyphics', () => {
        expect(isIsogram('Dermatoglyphics')).toBe(true);
    });
    it('should return false for aba', () => {
        expect(isIsogram('aba')).toBe(false);
    });
    it('should return false for moOse', () => {
        expect(isIsogram('moOse')).toBe(false);
    });
});
