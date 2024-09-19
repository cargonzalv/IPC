import { truncateString, truncateStringLength, removeWhiteSpaces, capitalizeString } from './strings';

describe('Utils functions', () => {
  describe('truncateString', () => {
    const testCases = [
      { input: 'Hello, World!', length: 20, expected: 'Hello, World!' },
      {
        input: 'This is a very long string that needs to be truncated.',
        length: 20,
        expected: 'This is a very long ...',
      },
      { input: 'A'.repeat(120), length: truncateStringLength, expected: 'A'.repeat(truncateStringLength) + '...' },
    ];

    testCases.forEach(({ input, length, expected }) => {
      it(`should return ${expected} for input of length ${length}`, () => {
        const result = truncateString(input, length);
        expect(result).toBe(expected);
      });
    });

    it('should use the default truncate length if no length is specified', () => {
      const input = 'A'.repeat(120); // A string longer than truncateStringLength
      const result = truncateString(input);
      expect(result).toBe('A'.repeat(truncateStringLength) + '...');
    });
  });

  describe('removeWhiteSpaces', () => {
    const testCases = [
      { input: '  Hello   World  ', expected: 'HelloWorld' },
      { input: 'HelloWorld', expected: 'HelloWorld' },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input with spaces`, () => {
        const result = removeWhiteSpaces(input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('capitalizeString', () => {
    const testCases = [
      { input: 'hello world', expected: 'Hello world' },
      { input: 'Hello world', expected: 'Hello world' },
      { input: '', expected: '' },
      { input: 'a', expected: 'A' },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for input ${input}`, () => {
        const result = capitalizeString(input);
        expect(result).toBe(expected);
      });
    });
  });
});
