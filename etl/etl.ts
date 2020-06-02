const transform = (oldSet :{[key: number]: string[]}) => {

    const newSet:{[key: string]: number} = {};

    for (let key in oldSet) {

        let arr :string[] = oldSet[key]
        let value :number = parseInt(key)

        // assign new values
        arr.forEach(letter => {
            newSet[letter.toLowerCase()] = value
        });

    }

    return newSet
}

export default transform