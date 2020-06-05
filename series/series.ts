import { parse } from "path";

class Series {

    public digits: number[];

    constructor(n: string) {
        this.digits = [...n].map(d => parseInt(d))
    }

    slices = (s: number) => {
        const arr = this.digits
        if (s > arr.length)
            throw new Error("Not enough digits")

        const slice: number[][] = []

        for (let i = 0; i < arr.length - s + 1; i++) {
            slice.push(this.digits.slice(i, s + i))
        }

        return slice
    }

}

export default Series