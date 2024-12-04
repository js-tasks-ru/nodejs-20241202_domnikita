export default function sum(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('Arguments must be finite numbers');
  }

  return a + b;
}
