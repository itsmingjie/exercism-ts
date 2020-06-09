export default class Clock {

    // Cheating with built in "Date" to solve wrapping
    // Alternatively store the entire thing in minutes
    private date: Date

    constructor(h: number, m?: number) {
        this.date = new Date(0, 0, 0, h, m || 0)
    }

    private getHour = () => this.date.getHours()
    private getMinute = () => this.date.getMinutes()

    plus = (m: number) => new Clock(this.getHour(), this.getMinute() + m)
    minus = (m: number) => new Clock(this.getHour(), this.getMinute() - m)
    equals = (c: Clock) => this.getHour() === c.getHour() && this.getMinute() === c.getMinute()
    toString = () => this.getHour().toString().padStart(2, '0') + ":" + this.getMinute().toString().padStart(2, '0')
    
}