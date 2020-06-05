class DiffieHellman {
  private p: number;
  private g: number;

  constructor(p: number, g: number) {
    if (!this.isPrime(p) || !this.isPrime(g))
      throw new Error("p & g must be prime");

    this.p = p
    this.g = g
  }

  getPublicKeyFromPrivateKey = (k: number): number => {
    if (k >= this.p || k <= 1)
        throw new Error("The private key must be less than or equal to p")

    return Math.pow(this.g, k) % this.p
  }

  getSharedSecret = (priv: number, pub: number) => {
    return Math.pow(pub, priv) % this.p
  }

  private isPrime = (n: number) => {
    if (n <= 0) return false;

    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  };
}

export default DiffieHellman;
