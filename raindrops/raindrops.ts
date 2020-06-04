class Raindrops {
  convert = (n: number): string => {
    let res: string = "";

    if (n % 3 == 0) res += "Pling";
    if (n % 5 == 0) res += "Plang";
    if (n % 7 == 0) res += "Plong";
    if (res == "") return n + "";

    return res;
  };
}

export default Raindrops;
