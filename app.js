
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
let page = 0;
let totalScore = document.querySelector('h2')

// console.log(totalScore)

let isGameFinished = false;

const qImgURL = [
    {
        imgURL: 'https://i.insider.com/500851a2ecad04bd32000001?width=600&format=jpeg&auto=webp',
        choices: ['Frito Lay', 'Fritos', 'Lay', 'Ruffles'],
        answer: 2,
        buttonID: 3
    },
    {
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wikipedia-logo-blank.png',
        choices: ['Wikipedia', 'Wiki Commons', 'Wiki How', 'Wiki Fandom'],
        answer: 0,
        buttonID: 1
    },
    {
        imgURL: 'http://2.bp.blogspot.com/--DHkNIsSurk/UcD11IDiW1I/AAAAAAAAACo/01q1ErjNVKo/s1600/RGB_Blue_Type_Tile_Only_0.jpg',
        choices: ['Papa Johns', 'Pizza Hut', 'Little Caesars', "Domino's"],
        answer: 3,
        buttonID: 4
    },
    {
        imgURL: 'https://www.jetpunk.com/img/user-photo-library/e5/e5ba85bd17-450.png',
        choices: ['Acura', 'Rolls Royce', 'Subaru', 'BMW'],
        answer: 3,
        buttonID: 4
    }, 
    {
        imgURL: 'https://www.youthdownloads.com/triviamaker/wp-content/themes/stratusx-child/template/upload/RHlKygOiPXblbnhioWL7WzJSBd42/20210924163248012548686/275C1Q2.png',
        choices: ['TGIF', 'Benihana', 'Olive Garden', 'Walburger'],
        answer: 0,
        buttonID: 1
    }, 
    {
        imgURL: 'https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1583509126/shape/mentalfloss/619387-transmit_startups-3.jpg?itok=rNVphTUJ',
        choices: ['TikTok', 'Instagram', 'Tumblr', 'Facebook'],
        answer: 1,
        buttonID: 2
    }, 
    {
        imgURL: 'https://i.insider.com/50083a75eab8eaba3000000c?width=600&format=jpeg&auto=webp',
        choices: ['FedEx', 'Amazon', 'USPS', 'UPS'],
        answer: 3,
        buttonID: 4
    }, 
    {
        imgURL: 'https://www.jetpunk.com/img/user-photo-library/42/42711cbcde-450.png',
        choices: ['Gamecube', 'Xbox', 'Playstation', 'Gameboy Color'],
        answer: 2,
        buttonID: 3
    }, 
    {
        imgURL: 'http://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svgv',
        choices: ['McDonalds', 'Burger King', 'Five Guys', "Arby's"],
        answer: 0,
        buttonID: 1
    }, 
    {
        imgURL: 'https://i.insider.com/50083a8ceab8ea3e31000006?width=750&format=jpeg&auto=webp',
        choices: ['Arthur', 'Reading Rainbow', 'Sesame Street', 'Dragon Tails'],
        answer: 2,
        buttonID: 3
    },
]

ansbtn1.innerText = qImgURL[page].choices[0];
ansbtn2.innerText = qImgURL[page].choices[1];
ansbtn3.innerText = qImgURL[page].choices[2];
ansbtn4.innerText = qImgURL[page].choices[3];

//NIK HELP
let count = 0;
let checkAnswer = (e, buttonID) => {
    let buttonList = ['ansbtn1', 'ansbtn2', 'ansbtn3', 'ansbtn4']
    totalScore.style.visibility = 'visible';
    if (isGameFinished == true) {
        return
    } else {
        buttonList.forEach(btn => {
            if (e.target.id == `ansbtn${buttonID}` && btn == `ansbtn${buttonID}` && count < 1) {
                console.log(btn)
                e.target.style.backgroundColor = 'green' 
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                isGameFinished = true
                count++
                // console.log('is game finished?', isGameFinished)
            } else if (e.target.id !== `ansbtn${buttonID}` && e.target.id == btn && count < 1) {
                console.log(btn)
                e.target.style.backgroundColor = 'red'
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                isGameFinished = true
                count++
                }
            } 
        )
    
        

        // console.log('not finished yet')
        // if (e.target.id == 'ansbtn2') {
        //     e.target.style.backgroundColor = 'green' 
        //     nextbtn.style.display = 'center'
        //     nextbtn.style.visibility = 'visible'
        //     isGameFinished = true
            // console.log('correct!', isGameFinished)
        // } else if (e.target.id == 'ansbtn1' || e.target.id == 'ansbtn3' || e.target.id == 'ansbtn4') {
        //     e.target.style.backgroundColor = 'red'
        //     nextbtn.style.display = 'center'
        //     nextbtn.style.visibility = 'visible'
        //     isGameFinished = true
            // correct.style.visibility = 'hidden'
            // console.log('false!', isGameFinished)
            // console.log(e.style.id)
        // }
    }
}

document.addEventListener('click', (e) => {
    let buttonID = qImgURL[page].buttonID;
    checkAnswer(e, buttonID);
    }
)

document.addEventListener('click', (e) => {
    isGameFinished = false;
        if (e.target.id == 'next') {
            // document.addEventListener('click', (e2) => {
            console.log(page)
//PETER HELPED ME WITH page++
            page++;
            img.src = qImgURL[page].imgURL;
            ans1.innerText = qImgURL[page].choices[0];
            ans2.innerText = qImgURL[page].choices[1];
            ans3.innerText = qImgURL[page].choices[2];
            ans4.innerText = qImgURL[page].choices[3]; 
            nextbtn.style.visibility = 'hidden';
            whiteDivs();
            count = 0;
            // console.log(correctAnswer);
            // checkAnswer(e, buttonID);
            // document.addEventListener('click', (e) => {
            //     let correctAnswer = qImgURL[page].answer;
            //     let buttonID = qImgURL[page].buttonID;
            //     checkAnswer(e, buttonID);
            //     }
            // )
            // }
            // )
        }

        document.addEventListener('click', (e) => {
            let buttonID = qImgURL[page].buttonID;
            checkAnswer(e, buttonID);
            }
        )

    }   
)

let score = 0


//TO DO 
    //STOP QUESTIONS AT 9
