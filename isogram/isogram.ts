class Isogram {
    static isIsogram(w :string) {
        
        const alphabet :boolean[] = new Array(26).fill(false)
        const letterPattern = /^[a-zA-Z]+$/

        for (let i = 0; i < w.length; i++) {
            if (letterPattern.test(w.charAt(i))) {
                let c :number = charToIndex(w.charAt(i))

                if (alphabet[c]) return false;
    
                alphabet[c] = true;
            }
        }

        return true;
    }

}

const charToIndex = (c :string) :number => c.toLowerCase().charCodeAt(0) - 97

export default Isogram
