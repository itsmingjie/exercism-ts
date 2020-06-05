class PerfectNumbers {
  static classify = (n: number): string => {
    if (n <= 0)
      throw new Error("Classification is only possible for natural numbers.");
    const sum = factorsOf(n).reduce((acc, v) => acc + v, 0);

    if (sum == n) return "perfect";
    else if (sum > n) return "abundant";
    else return "deficient";
  };
}

const factorsOf = (n: number): number[] => {
  const f: number[] = [];

  for (let i = 0; i <= n / 2; i++) {
    if (n % i === 0) f.push(i);
  }

  return f;
};

export default PerfectNumbers;
