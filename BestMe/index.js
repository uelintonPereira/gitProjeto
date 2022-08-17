const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push( data.toString().trim())
    if(answers.length < questions.length){
      ask(answers.length)
    }else{
        process.exit()
    }   
})

process.on('exit', () => {
    console.log(`
    Bacana Uelinton!
    
    O que voce aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e voce poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}

    
    Voce Ajudou ${answers[3]} pessoas hoje!

    Volte amanha para novas reflexões!    
    `)
})