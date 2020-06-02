class ProteinTranslation {
    static proteins(rna :string) {
        const rnaArr = rna.match(/.{1,3}/g) || []
        const proteins:string[] = [];

        rnaArr.some(seq => {
            switch (seq) {
                case "AUG":
                    proteins.push("Methionine")
                    break;
                case "UUU":
                case "UUC":
                    proteins.push('Phenylalanine')
                    break;
                case "UUA":
                case "UUG":
                    proteins.push("Leucine")
                    break;
                case "UCU":
                case "UCC":
                case "UCA":
                case "UCG":
                    proteins.push("Serine")
                    break;
                case "UAU":
                case "UAC":
                    proteins.push("Tyrosine")
                    break;
                case "UGU":
                case "UGC":
                    proteins.push("Cysteine")
                    break;
                case "UGG":
                    proteins.push("Tryptophan")
                    break;
                case "UGA":
                case "UAG":
                case "UAA":
                    // kill switch & for
                    return true
            }
        });

        return proteins
    }
}

export default ProteinTranslation
