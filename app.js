let ans1 = document.querySelector('#ansbtn1');
let ans2 = document.querySelector('#ansbtn2');
let ans3 = document.querySelector('#ansbtn3');
let ans4 = document.querySelector('#ansbtn4');
let answers = document.querySelectorAll('.ans');
let correct = document.querySelectorAll('#correct');
let count = 0;
let img = document.querySelector('#img');
let incorrect = document.querySelectorAll('#ansbtn');
let isGameFinished = false;
let nextbtn = document.querySelector('#next');
let page = 0;
let score = 0;
let totalScore = document.querySelector('h2');
let quest = document.querySelector('h1');
let whiteDivs = () => {
    answers[0].style.backgroundColor = 'white';
    answers[1].style.backgroundColor = 'white';
    answers[2].style.backgroundColor = 'white';
    answers[3].style.backgroundColor = 'white';
}

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
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png',
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

let checkAnswer = (e, buttonID) => {
    let buttonList = ['ansbtn1', 'ansbtn2', 'ansbtn3', 'ansbtn4']
    totalScore.style.visibility = 'visible';
    if (isGameFinished == true) {
        return
    } else {
        buttonList.forEach(btn => {
            if (e.target.id == `ansbtn${buttonID}` && btn == `ansbtn${buttonID}` && count < 1 && page < 9) {
                e.target.style.backgroundColor = '#00FF00'
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                isGameFinished = true
                count++
                totalScore.innerText = `Score: ${score +=1}`
            } else if (e.target.id !== `ansbtn${buttonID}` && e.target.id == btn && count < 1 && page < 9) {
                e.target.style.backgroundColor = '#ff2400'
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                isGameFinished = true
                count++
                totalScore.innerText = `Score: ${score}`
            } else if (e.target.id == `ansbtn${buttonID}` && btn == `ansbtn${buttonID}` && count < 1 && page === 9) {
                e.target.style.backgroundColor = '#00FF00'
                isGameFinished = true
                count++
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                nextbtn.innerText = `Your score is ${score}/10!`
            } else if (e.target.id !== `ansbtn${buttonID}` && e.target.id == btn && count < 1 && page === 9) {
                e.target.style.backgroundColor = 'red'
                isGameFinished = true
                count++
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                nextbtn.innerText = `Your score is ${score}/10!`
                }
            } 
        )
    }
}

if (page < 9) {
document.addEventListener('click', (e) => {
    let buttonID = qImgURL[page].buttonID;
    checkAnswer(e, buttonID);
    }
)

document.addEventListener('click', (e) => {
    isGameFinished = false;
        if (e.target.id == 'next') {
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
        }
        document.addEventListener('click', (e) => {
            let buttonID = qImgURL[page].buttonID;
            checkAnswer(e, buttonID);
            }
        )

    }   
)
}


//TO DO 
    //STOP QUESTIONS AT 9
