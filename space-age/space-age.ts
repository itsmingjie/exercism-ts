class SpaceAge {

    public seconds: number;

    constructor(seconds:number) {
        this.seconds = seconds
    }

    onEarth = (): number => this.round(this.seconds / 31557600)
    onMercury = (): number => this.round(this.onEarth() / 0.2408467)
    onVenus = (): number => this.round(this.onEarth() / 0.61519726)
    onMars = (): number => this.round(this.onEarth() / 1.8808158)
    onJupiter = (): number => this.round(this.onEarth() / 11.862615)
    onSaturn = (): number => this.round(this.onEarth() / 29.447498)
    onUranus = (): number => this.round(this.onEarth() / 84.016846)
    onNeptune = (): number => this.round(this.onEarth() / 164.79132)

    round = (from:number) :number => parseFloat(from.toFixed(2))

}

export default SpaceAge;
