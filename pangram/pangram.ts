class Pangram {

    private str:string
    private alphabet:boolean[] = []

    constructor(str:string) {
        this.str = str

        // fill array
        for (let i = 0; i < 26; i++) {
            this.alphabet[i] = false;
        }
    }

    isPangram = () :boolean => {

        this.str.split('').forEach((c) => {
            const index = c.toLowerCase().charCodeAt(0) - 97

            // ignore all other ascii chars (prevent extre length in array)
            if (index < 26)
                this.alphabet[index] = true
        })

        for (const s of this.alphabet) {
            if (!s)
                return false
        }

        return true
    }

}

export default Pangram