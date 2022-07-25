import  readline from 'readline-sync'
import calculator from './packages/calculator.js'

console.log('-----------------------------------------------------')
console.log('Initing calculator...')
console.log('Calculator initiated!')

while (true) {

    let action = String

    while (true) {
        console.log('-----------------------------------------------------')
        action = String(readline.question('Action[sum/sub/mul/div/pot/exit]: '))

        if (action == 'sum' || action == 'sub' || action == 'mul' || action == 'div' || action == 'pot' || action == 'exit') {
            break
        }
    }

    if (action == 'exit') {
        console.log('-----------------------------------------------------')
        console.log('Exiting...')
        break
    }

    console.log('-----------------------------------------------------')
    let n1 = Number(readline.question('Num1: '))
    let n2 = Number(readline.question('Num2: '))

    if (action === 'sum') {
        let sumResult = calculator.sum(n1,n2)
        console.log('-----------------------------------------------------')
        console.log(`Resultado da soma: ${sumResult}`)
    } 
    
    else if (action === 'sub') {
        let subResult = calculator.sub(n1,n2)
        console.log('-----------------------------------------------------')
        console.log(`Resultado da subtração: ${subResult}`)
    }

    else if (action === 'mul') {
        let mulResult = calculator.mul(n1,n2)
        console.log('-----------------------------------------------------')
        console.log(`Resultado da multiplicação: ${mulResult}`)
    }

    else if (action === 'div') {
        let divResult = calculator.div(n1,n2)
        console.log('-----------------------------------------------------')
        console.log(`Resultado da divisão: ${divResult}`)
    }

    else if (action === 'pot') {
        let potResult = calculator.pot(n1,n2)
        console.log('-----------------------------------------------------')
        console.log(`Resultado da potência: ${potResult}`)
    }
}