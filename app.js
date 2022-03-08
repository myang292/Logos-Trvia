
let correct = document.querySelectorAll('#correct');
let incorrect = document.querySelectorAll('#ansbtn')
let nextbtn = document.querySelector('#next')
const NextPage = () => {

}
// let stopEvent = document.removeEventListener('click', handler, false)

// document.addEventListener('click', (e)) => {
//     if (e.target.class = 'ans') {

//     }
// }

document.addEventListener('click', (e) => {
    if (e.target.id == 'correct') {
        e.target.style.backgroundColor = 'green' 
        nextbtn.style.display = 'center'
        nextbtn.style.visibility = 'visible'
        // incorrect.disabled = true
    } else if (e.target.id == 'ansbtn') {
        e.target.style.backgroundColor = 'red'
        nextbtn.style.display = 'center'
        nextbtn.style.visibility = 'visible'
        // correct.style.visibility = 'hidden'
    };
    
}
)



// let body = document.querySelector('#ansbtn')
// console.log(body.innerText)



//use for loop (i++ for questions etc)
// const questions = [
//     {
//         question: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wikipedia-logo-blank.png',
//         answer: {
//             a: ''
//             b: ''
//             c: ''
//         },
//         correctAnswer: ''
//     },
//     {
//         question: '',
//         answer: {
//             a: ''
//             b: ''
//             c: ''
//         },
//         correctAnswer: ''
//     },
//     {
//         question: '',
//         answer: {
//             a: ''
//             b: ''
//             c: ''
//         },
//         correctAnswer: ''
//     },
//     {
//         question: '',
//         answer: {
//             a: ''
//             b: ''
//             c: ''
//         },
//         correctAnswer: ''
//     },
//     {
//         question: '',
//         answer: {
//             a: ''
//             b: ''
//             c: ''
//         },
//         correctAnswer: ''
//     },
//     {
//         question: '',
//         answer: {
//             a: ''
//             b: ''
//             c: ''
//         },
//         correctAnswer: ''
//     },
//     {
//         question: '',
//         answer: {
//             a: ''
//             b: ''
//             c: ''
//         },
//         correctAnswer: ''
//     },
//     {
//         question: '',
//         answer: {
//             a: ''
//             b: ''
//             c: ''
//         },
//         correctAnswer: ''
//     },
//     {
//         question: '',
//         answer: {
//             a: ''
//             b: ''
//             c: ''
//         },
//         correctAnswer: ''
//     },

//     }
// ]