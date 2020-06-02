class Bob {
  hey(order: string) {
    if (isQuestion(order) && isAllCaps(order)) return "Calm down, I know what I\'m doing!"
    else if (isEmpty(order)) return "Fine. Be that way!";
    else if (isQuestion(order)) return "Sure.";
    else if (isAllCaps(order)) return "Whoa, chill out!";
    else return "Whatever.";
  }
}

const isAllCaps = (str: string): boolean => str.match(/[a-z]/i) != null && str === str.toUpperCase()
const isEmpty = (str: string): boolean => str.trim().length == 0;
const isQuestion = (str: string): boolean => str.trim().charAt(str.trim().length - 1) == "?"

export default Bob;
