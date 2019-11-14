const inquirer = require('inquirer')
const chalk = require('chalk')
const log = console.log
const clear = console.clear

const failure = chalk.bold.red
const warning = chalk.bold.yellow
const blue = chalk.bold.blue
const white = chalk.bold.white

const main = async () => {
    let nameChoices = ["Marvolo", "Leroux", "Bernard", "Tioboid", "Aurelian", "Ignatius", "Cyrillus"]
    let name = nameChoices[Math.floor(Math.random() * nameChoices.length)]

    let weaponChoices = ["Longsword", "Battle Axe", "War Hammer", "Mace", "Morning Star", "War Scythe", "Flail", "Longbow", "Crossbow"]
    let weaponOne = weaponChoices[Math.floor(Math.random() * nameChoices.length)]
    weaponChoices.splice(weaponChoices.indexOf(weaponOne), 1)
    let weaponTwo = weaponChoices[Math.floor(Math.random() * nameChoices.length)]
    weaponChoices.splice(weaponChoices.indexOf(weaponTwo), 1)
    let weaponThree = weaponChoices[Math.floor(Math.random() * nameChoices.length)]
    let weapon

    let enemyChoices = ["goblins", "jackals", "ogres", "trolls", "skeleton soldiers"]
    let enemy = enemyChoices[Math.floor(Math.random() * enemyChoices.length)]
    let enemyAttack = {
        "goblins" : "stabs you",
        "jackals" : "bites you",
        "ogres" : "hits you with its club",
        "trolls" : "maul you",
        "skeleton soldiers" : "slices you with its swords"
    }

    let direction
    let numHit

    clear()

    questionOne = await inquirer.prompt({
        type: 'input',
        name: 'character',
        message: "You have just awoken from a deep sleep. Can you remember your name? "+ warning("(y/n)")
    })
    if(questionOne.character == 'y'){
    name = await inquirer.prompt({
            type: 'input',
            name: 'character',
            message: 'What is your name?'
        })
        name = name.character
        clear()
    }else{
        clear()
        log(white("Well, then we will call you " + blue(name) + "."))
    }

    questionTwo = await inquirer.prompt({
        type: 'input',
        name: 'character',
        message: "The situation is grim indeed, " + blue(name) + ". The world needs a hero, and you're the only one free today. Are you up to the challenge? " + warning("(y/n)")
    })
    if(questionTwo.character == 'y'){
        clear()
        log(white("That is wonderful. For a second there, I thought you might say no."))
    }else{
        clear()
        log("Well, then go back to sleep!")
    }

    questionThree = await inquirer.prompt({
        type: 'input',
        name: 'character',
        message: "You step outside and find three weapons on your doorstep. What kind of neighborhood is this? Anyways... You should probably grab one. Things might get dicey. Do you want the " + weaponOne + ", " + weaponTwo + ", " + weaponThree + "? " + warning("(" + weaponOne + ", " + weaponTwo + ", " + weaponThree + ")") 
    })
    if(questionThree.character == weaponOne ||questionThree.character == weaponTwo || questionThree.character == weaponThree){
        weapon = questionThree.character
        clear()
    }else{
        clear()
        log(white("Well, since you don't know how to type, you eneded up with a stick. I can see this is going to be a long adventure with you..."))
        weapon = "Stick"
    }

    questionFour = await inquirer.prompt({
        type: 'input',
        name: 'character',
        message: "It's time to hit the road. We can head east or west. The decision is yours. What'll it be " + blue(name) + "? " + warning("(east/west)") 
    })
    if(questionFour.character == "east" || questionFour.character == "west"){
        direction = questionFour.character
        clear()
        log(white("Good choice. I guess there's just as much a chance of getting killed going that way, as there is going the other way."))
    }else{
        let arr = ["east", "west"]
        direction = Math.floor(Math.random() * arr.length)
        clear()
        log(white("Dude, I said east or west. I guess we'll be going " + arr[direction] + "."))
    }

    if(direction == "east"){
        questionFive = await inquirer.prompt({
            type: 'input',
            name: 'character',
            message: "You walk for a while on the eastern road. There are strange vapors seeping from the ground, and eerie noises fill the air. Do you keep going? "+ warning("(y/n)")
        })
        if(questionFive.character == 'y'){
            clear()
            log(white("I'm proud of you " + blue(name) +". I thought you'd tuck tail and run. I'm actually going to be a little sad if you end up dead."))
        }else if(questionFive.character == 'n'){
            clear()
            log(white("I couldn't be more dissapointed in you " + blue(name) +". I thought you were tough. Maybe the western road will be lined with daisies and popsicles. You turn around and start heading in the opposite direction."))
            direction = 'west'
        }else{
            clear()
            log(white("Since you can't make a decision, one is made for you. You will continue."))
        }
    }else{
        questionSix = await inquirer.prompt({
            type: 'input',
            name: 'character',
            message: "You walk for a while on the western road. It's actually a pretty pleasant walk. The only problem is that a very strange smell is starting to make you nauseous. I hope that's not something dead... Keep going? "+ warning("(y/n)") 
        })
        if(questionSix.character == 'y'){
            clear()
            log(white("I'm proud of you " + blue(name) +". I thought you'd tuck tail and run. I'm actually going to be a little sad if you end up dead."))
        }else if(questionSix.character == 'n'){
            clear()
            log(white("I couldn't be more dissapointed in you " + blue(name) +". I thought you were tough. Maybe the eastern road will be lined with daisies and popsicles. You turn around and start heading in the opposite direction."))
            direction = 'east'
        }else{
            clear()
            log(white("Since you can't make a decision, one is made for you. You will continue."))
        }
    }

    questionSeven = await inquirer.prompt({
        type: 'input',
        name: 'character',
        message: "You keep walking for a while, and you notice that the hairs on the back of your neck start to raise. You are a perceptive one, " + blue(name) + ". Out of nowhere, three " + failure(enemy) + " appear. Awwwwww snap! Here we go. Do you use your " + weapon + "? "+ warning("(y/n)") 
    })
    if(questionSeven.character == "y"){
        clear()
        log(white("You calm yourself. You focus. You ready your " + weapon + ". Then you go berserk!"))
        numHit = Math.floor(Math.random() * 3)
    }else if(questionSeven.character == "n"){
        clear()
        log(white("Ooo... Bad choice. You got mauled to death by the " + failure(enemy) + "."))
    }else{
        log(white("The risk of a wrong decision is desirable to indecision. You got ripped to pieces by the " + failure(enemy) + "."))
    }

    if(numHit == 0){
        log(white("Wow. Your ineptitude at battle is seriously breathtaking. You didn't hit a single one of them. I'm just going to cut to the chase here, YOU DIED!"))
    }else if(numHit == 1){
        log(white("Well, you didn't completely blow it. You hit and killed one of them. Three minus one equals two, though. The one closest to you " + enemyAttack[enemy] + "."))
        questionEight = await inquirer.prompt({
            type: 'input',
            name: 'character',
            message: "Do you want to try your luck again and attack the remaining two? "+ warning("(y/n)") 
        })
        if(questionEight.character == 'y'){
            numHit = Math.floor(Math.random * 3)
            if(numHit == 2){
                clear()
                log(white("Wow! I haven't seen fighting like that in a while! Your " + weapon + " made easy work of the remaining two. Maybe you really are cut out to be a warrior."))
            }else if(numHit == 1){
                clear()
                log(white("The good news - You hit one of them. The bad news- It's too little too late. The other one " + enemyAttack[enemy] + " to death. See ya kid."))
            }else{
                clear()
                log(white("You whiffed, got nada, came up with a big ole goose egg. Do I even need to say it? YOU DIED!"))
            }
        }else{
            clear()
            log(white("Bad choice, kid. You ended up being the " + failure(enemy) + "'s lunch."))
        }
    }else if (numHit == 2){
        log(white("Wow. You hit two out of three. Not bad. The only bad news, the remaining " + failure(enemy) + " " + enemyAttack[enemy] + "."))
        questionNine = await inquirer.prompt({
            type: 'input',
            name: 'character',
            message: "Do you want to use your " + weapon + " on it? "+ warning("(y/n)") 
        })
        if(questionNine.character == 'y'){
            numHit = Math.floor(Math.random() * 2)
            if(numHit == 1){
                clear()
                log(white("Great job " + blue(name) + ". You sent that it to join it's friends in hell! We might make a warrior out of you yet!"))
            }else{
                clear()
                log(white("Ooo.. You missed. Valiant effort, but since we are not playing horseshoes or throwing hand grenades, close doesn't count. YOU DIED!"))
            }
        }else{
            log(white("Bad choice, kid. You ended up being the " + failure(enemy) + "'s lunch."))
        }
    }else{
        clear()
        log(white("Holy crap! You absolutely decimated all three " + failure(enemy) + "! That was quite impressive, " + blue(name) + ". Maybe you are cut out to be a warrior after all. I give you my blessing to continue on this path."))
    }
}
main()