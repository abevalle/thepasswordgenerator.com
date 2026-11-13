const RANGE = 2 ** 32;

// Uniform integer in [0, max) from the Web Crypto CSPRNG. Rejection sampling
// avoids the bias a plain `value % max` would introduce.
export function randomInt(max: number): number {
    if (!Number.isInteger(max) || max <= 0 || max > RANGE) {
        throw new RangeError(`randomInt: max must be an integer in 1..2^32, got ${max}`);
    }
    const limit = RANGE - (RANGE % max);
    const buf = new Uint32Array(1);
    do {
        crypto.getRandomValues(buf);
    } while (buf[0] >= limit);
    return buf[0] % max;
}
