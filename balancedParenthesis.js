function balancedParenthesis(string) {
    let openPar = 0
    let closedPar = 0
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "(") {
        openPar += 1
      } else if (string[i] === ")") {
        closedPar += 1
      } else {
        if(openPar === 0 && closedPar === 0) { 
            console.log('There are no parentheses')
            break;
        }
      }
    }
    return openPar === closedPar
  }

console.log(balancedParenthesis('()'))
console.log(balancedParenthesis('(Oh Noes!)('))
console.log(balancedParenthesis("((There's a bonus open parenthesis here)"))
console.log(balancedParenthesis(')'))
console.log(balancedParenthesis('('))
console.log(balancedParenthesis('(This has (too many closes.)))'))
console.log(balancedParenthesis('There are no parentheses here!'))