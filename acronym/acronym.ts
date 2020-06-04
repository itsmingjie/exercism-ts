export default class Acronym {
  public static parse(phrase: string): string {
    return (phrase.match(/[A-Z]+[a-z]*|[a-z]+/g) || []).reduce((cum, c) => cum + c.substring(0, 1).toUpperCase(), "");
  }
}
