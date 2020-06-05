const D = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const R = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

class RomanNumerals {

  // recursively solve for roman numerals
  static roman(n: number): string {
    const i = D.findIndex(e => e <= n)

    if (i != -1) {
      const s = R[i]
      return s + this.roman(n - D[i])
    } else {
      return ""
    }
  }
}

export default RomanNumerals
