class Words {
  count = (str: string): Map<string, number> => {
    let counter: Map<string, number> = new Map<string, number>();
    let arr = str.replace("\n", " ").replace("\t", " ").split(" ");

    arr.forEach((w) => {
      w = w.toLowerCase().trim();

      if (w !== "") {
        let current = counter.get(w) || 0;
        counter.set(w, current + 1);
      }
    });

    return counter;
  };
}

export default Words;
