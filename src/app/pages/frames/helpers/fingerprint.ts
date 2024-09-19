import { load, murmurX64Hash128 } from '@fingerprintjs/fingerprintjs';

export class Fingerprint {
  static _fpPromise: ReturnType<typeof load> | null = null;

  static init() {
    Fingerprint._fpPromise = load();
  }

  static async get() {
    if (!Fingerprint._fpPromise) {
      throw Error('Fingerprint is not initialized');
    }
    const fp = await Fingerprint._fpPromise;
    return fp.get();
  }

  static async getVisitorId() {
    return (await Fingerprint.get()).visitorId;
  }

  static x64Hash128 = murmurX64Hash128;
}
