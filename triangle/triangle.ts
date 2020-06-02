export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind() {
        // utilize a Set to dedupe
        const unique = new Set(this.sides).size

        if (this.isInvalid(this.sides[0], this.sides[1], this.sides[2]))
            throw new Error()

        if (unique == 3)
            return "scalene"
        else if (unique == 2)
            return "isosceles"
        else
            return "equilateral"
    }

    private isInvalid = (a:number, b:number, c:number) :boolean => {
        return (a < 0 || b < 0 || c < 0) || (a + b <= c || a + c <= b || b + c <= a)
    }
}