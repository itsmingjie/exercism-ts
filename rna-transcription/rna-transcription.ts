class Transcriptor {
  toRna(strand: string) {
    const DNA = "ATCG";
    const RNA = "UAGC";

    let res = "";

    for (var i = 0; i < strand.length; i++) {
      const cur = DNA.indexOf(strand.charAt(i))

      if (cur < 0)
        throw new Error("Invalid input DNA.")
      else
        res += RNA.charAt(cur)
    }

    return res;
  }
}

export default Transcriptor;
