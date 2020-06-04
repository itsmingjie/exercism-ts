class Anagram {

  private alphabet :number[];
  private host :string;
  private hostSorted :string;

  constructor(host :string) {
      this.alphabet = new Array(26).fill(0)
      this.host = host
      this.hostSorted = this.arrangeLetter(host)
  }

  matches = (...arr:string[]) => arr.filter(w => this.matchWord(w))

  private matchWord = (str:string) :boolean => {

    if (this.host == str.toLowerCase())
      return false;

    return this.hostSorted == this.arrangeLetter(str)

  }

  private arrangeLetter = (str :string) => {
    return str.toLowerCase().split("").sort().join("")
  }
}

export default Anagram