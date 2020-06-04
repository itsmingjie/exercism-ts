class Hamming {

    compute = (a:string, b:string):number => {

        if (a.length != b.length)
            throw new Error("DNA strands must be of equal length.")

        let ham = 0

        for (let i = 0; i < a.length; i++) {
            if (a.charAt(i) != b.charAt(i))
                ham++
        }

        return ham
    }

}

export default Hamming