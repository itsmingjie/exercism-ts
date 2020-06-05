class ArmstrongNumbers {

    static isArmstrongNumber = (n :number): boolean => {
        const arr = [...n.toString()].map(s => Number(s))
        return arr.reduce((acc, x) => acc + Math.pow(x, arr.length), 0) == n
    }

}

export default ArmstrongNumbers