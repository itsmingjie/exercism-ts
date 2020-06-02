class Gigasecond {

    private moment :number
    private gs :number = Math.pow(10, 12)

    constructor (moment :Date) {
        this.moment = moment.valueOf() 
    }

    date = () :Date => {
        return new Date(this.moment + this.gs)
    }

}

export default Gigasecond