export default class GradeSchool {

    private roster: Map<string, string[]>

    constructor () {
        this.roster = new Map<string, string[]>()
    }

    addStudent = (n: string, g: number) => {

        let key = g.toString()

        const arr = this.roster.get(key) || []
        arr.push(n)
        arr.sort()

        this.roster.set(key, arr)
    }

    studentsInGrade = (g: number): string[] => {
        let key = g.toString()
        const grade = this.roster.get(key) || []

        return grade.slice()
    }

    studentRoster = () => {
        return new Map([...this.roster.entries()].sort().map(s => [s[0], s[1].slice()]))
    }

}