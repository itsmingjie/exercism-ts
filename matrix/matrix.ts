class Matrix {
    rows: number[][] = []
    columns: number[][]  = []

    constructor(m: string) {
        this.rows = m.split("\n").map(v => v.split(" ").map(n => Number(n)))
        this.columns = this.rows[0].map(({}, i) => this.rows.map(row => row[i]));
    }
}

export default Matrix
