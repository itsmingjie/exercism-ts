const db: { [key: string]: boolean } = {};
const L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default class RobotName {
  name: string;

  constructor() {
    this.name = this.genName();
  }

  private getLetter = () => L[Math.floor(Math.random() * 26)];

  private getNumber = () => Math.floor(Math.random() * 900) + 100;

  genName = (): string => {
    let n: string;

    do {
      n = this.getLetter() + this.getLetter() + this.getNumber();
    } while (db[n]);

    db[n] = true;

    this.name = n;

    return n;
  };

  resetName = () => {
      this.name = this.genName()
  }
}
