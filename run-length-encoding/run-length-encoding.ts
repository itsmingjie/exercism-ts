export default class RunLengthEncoding {
  static encode = (s: string) => {
    const arr = s.split(/(?!$)/u);
    arr.push(""); // dummy to trigger one more iteration
    let prev = arr[0] || null;
    let counter = 1;
    let res = [];

    for (let i = 1; i < arr.length; i++) {
      const cur = arr[i];

      // determine counting sequence
      if (prev !== cur) {
        if (counter !== 1) res.push(counter);

        res.push(prev);
        counter = 1;
      } else {
        counter++;
      }

      prev = cur;
    }

    return res.join("");
  };

  static decode = (s: string) => {
    const arr = s.split(/(?!$)/u);
    if (arr.length === 0) return "";
    let counter = "";
    let res = "";

    for (let i = 0; i < arr.length; i++) {
      const cur = arr[i];

      if (isNumber(cur)) {
        counter += cur;
      } else {
        // print repeat
        res += counter !== "" ? cur.repeat(Number(counter)) : cur;
        counter = ""
      }
    }

    return res;
  };
}

// detect spaces as well
const isNumber = (s: string) => s !== " " && !isNaN(Number(s));
