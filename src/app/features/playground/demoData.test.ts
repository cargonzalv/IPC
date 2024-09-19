import { Provider } from 'common/interface';
import { buildProvidersMock } from './demoData';

describe('buildProvidersMock', () => {
  it('should return the datalogic provider when "datalogic" is passed', () => {
    const result = buildProvidersMock('datalogic');
    const expected: Provider[] = [{ id: '629e08359e9c3172635b8f07', name: 'datalogic', paymentMethod: 'cash' }];

    expect(result).toEqual(expected);
  });

  it('should return an empty array when "oxxo" is passed', () => {
    const result = buildProvidersMock('oxxo');
    expect(result).toEqual([]);
  });

  it('should return an empty array when no provider is passed', () => {
    const result = buildProvidersMock();
    expect(result).toEqual([]);
  });

  it('should return the datalogic provider when an unknown provider is passed', () => {
    const result = buildProvidersMock('unknown');
    const expected: Provider[] = [{ id: '629e08359e9c3172635b8f07', name: 'datalogic', paymentMethod: 'cash' }];

    expect(result).toEqual(expected);
  });
});
