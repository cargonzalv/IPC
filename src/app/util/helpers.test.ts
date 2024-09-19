import { getPropertyByPath } from './helpers';

describe('getPropertyByPath', () => {
  it('should return the value at the specified path', () => {
    const obj = { a: { b: { c: 42 } } };
    const result = getPropertyByPath(obj, 'a.b.c', 'default');
    expect(result).toBe(42);
  });

  it('should return the default value if the path does not exist', () => {
    const obj = { a: { b: { c: 42 } } };
    const result = getPropertyByPath(obj, 'a.b.d', 'default');
    expect(result).toBe('default');
  });

  it('should return the default value if the object is null or undefined', () => {
    const obj = null;
    const result = getPropertyByPath(obj, 'a.b.c', 'default');
    expect(result).toBe('default');
  });

  it('should return the default value if any part of the path is undefined', () => {
    const obj = { a: { b: undefined } };
    const result = getPropertyByPath(obj, 'a.b.c', 'default');
    expect(result).toBe('default');
  });

  it('should return the default value if the path is an empty string', () => {
    const obj = { a: { b: { c: 42 } } };
    const result = getPropertyByPath(obj, '', 'default');
    expect(result).toBe('default');
  });

  it('should handle a single level path', () => {
    const obj = { a: 42 };
    const result = getPropertyByPath(obj, 'a', 'default');
    expect(result).toBe(42);
  });

  it('should handle non-string keys in the path', () => {
    const obj = { a: { 1: { c: 42 } } };
    const result = getPropertyByPath(obj, 'a.1.c', 'default');
    expect(result).toBe(42);
  });
});
