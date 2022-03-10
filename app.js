
let correct = document.querySelectorAll('#correct');
let incorrect = document.querySelectorAll('#ansbtn');
let nextbtn = document.querySelector('#next');
let img = document.querySelector('#img');
let ans1 = document.querySelector('#ansbtn1')
let ans2 = document.querySelector('#ansbtn2')
let ans3 = document.querySelector('#ansbtn3')
let ans4 = document.querySelector('#ansbtn4')
let quest = document.querySelector('h1')
let answers = document.querySelectorAll('.ans')
let whiteDivs = () => {
    answers[0].style.backgroundColor = 'white';
    answers[1].style.backgroundColor = 'white';
    answers[2].style.backgroundColor = 'white';
    answers[3].style.backgroundColor = 'white';
}

// console.log(answers[1].innerText)

// console.log(answers.style.color)
// let question = 0

// console.log(ans1.innerText)

// function startGame() {
//     img.innerText = imgURL[question].imgURL;
//     ans.forEach(function(ans, i) {
//         ans.innerText = imgURL[question].choices[i];
//         }
//         )
//         console.log(img.innerText)
// }


// const NextPage = () => {};
let isGameFinished = false;


//NIK HELP
let checkAnswer = (e) => {
    // console.log('is game finished?', isGameFinished)
    if (isGameFinished === true) {
        return
    } else {
        // console.log('not finished yet')
        if (e.target.id == 'ansbtn2') {
            e.target.style.backgroundColor = 'green' 
            nextbtn.style.display = 'center'
            nextbtn.style.visibility = 'visible'
            isGameFinished = true
            // console.log('correct!', isGameFinished)
        } else if (e.target.id == 'ansbtn1') {
            e.target.style.backgroundColor = 'red'
            nextbtn.style.display = 'center'
            nextbtn.style.visibility = 'visible'
            isGameFinished = true
            // correct.style.visibility = 'hidden'
            // console.log('false!', isGameFinished)
            // console.log(e.style.id)
        } else if (e.target.id == 'ansbtn3') {
            e.target.style.backgroundColor = 'red'
            nextbtn.style.display = 'center'
            nextbtn.style.visibility = 'visible'
            isGameFinished = true
        } else if (e.target.id == 'ansbtn4') {
            e.target.style.backgroundColor = 'red'
            nextbtn.style.display = 'center'
            nextbtn.style.visibility = 'visible'
            isGameFinished = true
    }
    }
}

document.addEventListener('click', (e) => {
        checkAnswer(e)
    }
)

//use for loop (i++ for questions etc)

document.addEventListener('click', (e) => {
    if (e.target.id == 'next') {
        quest.innerText = 'Question 2'
        img.src = qImgURL[1].imgURL;
        ans1.innerText = qImgURL[1].choices[0];
        ans2.innerText = qImgURL[1].choices[1];
        ans3.innerText = qImgURL[1].choices[2];
        // let ans3 = 'correct';
        ans4.innerText = qImgURL[1].choices[3];
        whiteDivs();
        isGameFinished = true;
    }
}
)

// document.addEventListener('click', (e) => {
//     if (e.target.id == 'next') {
//         quest.innerText = 'Question 3'
//         img.src = qImgURL[2].imgURL;
//         ans1.innerText = qImgURL[2].choices[0];
//         ans2.innerText = qImgURL[2].choices[1];
//         ans3.innerText = qImgURL[2].choices[2];
//         // let ans3 = 'correct';
//         ans4.innerText = qImgURL[2].choices[3];
//         whiteDivs();

        // console.log(ans.style.backgroundColor)

        // console.log(qImgURL[1].choices[0])
        // qImgURL.forEach(function(e) {
            // for (let i=0; i<qImgURL.length; i++) {
            //     qImgURL.forEach(function(e) {
            //         ans.innerText = qImgURL[i].choices[i];
                    // console.log(qImgURL[i].choices[i]
                        
//                     // }
//             }
//         }
// )
// // )

// }
// )


// console.log(qImgURL[0].imgURL)

//DOM = INNER TEXT
let qImgURL = [
    {
        imgURL: 'https://i.insider.com/500851a2ecad04bd32000001?width=600&format=jpeg&auto=webp',
        choices: ['Frito Lay', 'Fritos', 'Lay', 'Ruffles'],
        answer: 3,
    },
    {
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wikipedia-logo-blank.png',
        choices: ['Wikipedia', 'Wiki Commons', 'Wiki How', 'Wiki Fandom'],
        answer: 1,
    },
    {
        imgURL: 'http://2.bp.blogspot.com/--DHkNIsSurk/UcD11IDiW1I/AAAAAAAAACo/01q1ErjNVKo/s1600/RGB_Blue_Type_Tile_Only_0.jpg',
        choices: ['Papa Johns', 'Pizza Hut', 'Little Caesars', "Domino's"],
        answer: 4,
    },
    {
        imgURL: 'https://www.jetpunk.com/img/user-photo-library/e5/e5ba85bd17-450.png',
        choices: ['Acura', 'Rolls Royce', 'Subaru', 'BMW'],
        answer: 4,
    }, 
    {
        imgURL: 'https://www.youthdownloads.com/triviamaker/wp-content/themes/stratusx-child/template/upload/RHlKygOiPXblbnhioWL7WzJSBd42/20210924163248012548686/275C1Q2.png',
        choices: ['TGIF', 'Benihana', 'Olive Garden', 'Walburger'],
        answer: 1,
    }, 
    {
        imgURL: 'https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1583509126/shape/mentalfloss/619387-transmit_startups-3.jpg?itok=rNVphTUJ',
        choices: ['TikTok', 'Instagram', 'Tumblr', 'Facebook'],
        answer: 2,
    }, 
    {
        imgURL: 'https://i.insider.com/50083a75eab8eaba3000000c?width=600&format=jpeg&auto=webp',
        choices: ['FedEx', 'Amazon', 'USPS', 'UPS'],
        answer: 4,
    }, 
    {
        imgURL: 'https://www.jetpunk.com/img/user-photo-library/42/42711cbcde-450.png',
        choices: ['Gamecube', 'Xbox', 'Playstation', 'Gameboy Color'],
        answer: 3,
    }, 
    {
        imgURL: 'http://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svgv',
        choices: ['McDonalds', 'Burger King', 'Five Guys', "Arby's"],
        answer: 1,
    }, 
    {
        imgURL: 'https://i.insider.com/50083a8ceab8ea3e31000006?width=750&format=jpeg&auto=webp',
        choices: ['Arthur', 'Reading Rainbow', 'Sesame Street', 'Dragon Tails'],
        answer: 3,
    },
]

