const readline = require('readline-sync')
const moment = require('moment')
const delay = require('delay');
require('colors')


const main = () => new Promise(async () => {

    console.log(`(${moment().format('HH:mm:ss')}) Creating Spotify Account!`.yellow)

    var register = 1
    if(register == 1){
        console.log(`(${moment().format('HH:mm:ss')}) okelur@gmail.com Created!`.green)
    }else{
        console.log(`(${moment().format('HH:mm:ss')}) okelur@gmail.com Failed!`.red)
    }
    await delay(3000)

    console.log(`(${moment().format('HH:mm:ss')}) Trying to Login!`.yellow)

    await delay(3000)
    console.log(`(${moment().format('HH:mm:ss')}) Login Success!`.yellow)

    console.log(`(${moment().format('HH:mm:ss')}) Input Your Credit Card!`.yellow)
    var num = readline.question('[?] Number : ', { hideEchoBack: true })
    var mn = readline.question('[?] Month : ')
    var yr = readline.question('[?] Year : ')
    var cv = readline.question('[?] Cvv : ')

    await delay(5000)
    console.log(`(${moment().format('HH:mm:ss')}) Payment in Progress...Please Wait!`.yellow)


    await delay(5000)
    console.log(`(${moment().format('HH:mm:ss')}) Payment success!`.green)
    console.log(`(${moment().format('HH:mm:ss')}) Getting Invite Link!`.yellow)

    await delay(5000)

    console.log(`(${moment().format('HH:mm:ss')}) Invite Link: https://google.com`.green)
})

main()
