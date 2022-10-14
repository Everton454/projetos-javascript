var agora = new Date()
var diasem = agora.getDay()
diasem = 2
//console.log(diasem)


var agora = new Date()
var mensal = agora.getMonth()
console.log(mensal)
switch (mensal) {
        case 0:
        console.log('janeiro')  
                break;
        case 1:
        console.log('fevereiro')
        break
        case 2:
        console.log('março')
        break
        case 3:
        console.log('abril')
        break
        case 4:
        console.log('maio')
        break
        case 5:
        console.log('junho')
        break
        case 6:
        console.log('julho')
        break
        case 7:
        console.log('agosto')
        break
        case 8:
        console.log('setembro')
        break
        case 9:
        console.log('outubro')
        break
        case 10:
        console.log('novembro')
        break
        case 11:
        console.log('dezembro')
        break
        default:
                console.log(' NÃO É UM MÊS DO ANO PALHAÇO ')
                break;
}