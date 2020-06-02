class Squares {

    public squareOfSum :number
    public sumOfSquares :number
    public difference :number

    constructor (n :number) {
        //square of sum
        this.squareOfSum = Math.pow((1 + n) * n / 2, 2)
        
        this.sumOfSquares = 0;
        //sum of squares 
        for (let i = 1; i <= n; i++)
            this.sumOfSquares += Math.pow(i, 2);

        // diff
        this.difference = this.squareOfSum - this.sumOfSquares
    }
 
}

export default Squares