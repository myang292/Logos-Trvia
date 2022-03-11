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
let questionCount = 1;
let blackButtons = () => {
    answers[0].style.backgroundColor = 'black';
    answers[1].style.backgroundColor = 'black';
    answers[2].style.backgroundColor = 'black';
    answers[3].style.backgroundColor = 'black';
}

const qImgURL = [
    {
        imgURL: 'https://i.insider.com/500851a2ecad04bd32000001?width=600&format=jpeg&auto=webp',
        choices: [`Frito Lay's`, 'Fritos', `Lay's`, 'Ruffles'],
        answer: 2,
        buttonID: 3
    },
    {
        imgURL: 'https://ih1.redbubble.net/image.1094052976.4989/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg',
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
        imgURL: 'https://p3y6v9e6.stackpathcdn.com/wp-content/uploads/zikoko/2020/08/BMW.jpg',
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
        imgURL: 'https://1000logos.net/wp-content/uploads/2017/05/Color-PlayStation-Logo.jpg',
        choices: ['Gamecube', 'Xbox', 'Playstation', 'Gameboy Color'],
        answer: 2,
        buttonID: 3
    }, 
    {
        imgURL: 'https://www.pngitem.com/pimgs/m/17-171077_mcdonalds-logo-brand-png-clip-art-t-logo.png',
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


//NIK HELPED WITH LOGIC
let checkAnswer = (e, buttonID) => {
    let buttonList = ['ansbtn1', 'ansbtn2', 'ansbtn3', 'ansbtn4']
    totalScore.style.visibility = 'visible';
    if (isGameFinished == true) {
        return
    } else {
        buttonList.forEach(btn => {
            if (e.target.id == `ansbtn${buttonID}` && btn == `ansbtn${buttonID}` && count < 1 && page < 9) {
                e.target.style.backgroundColor = '#7fe960'
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                isGameFinished = true
                count++
                totalScore.innerText = `Score: ${score +=1}`
            } else if (e.target.id !== `ansbtn${buttonID}` && e.target.id == btn && count < 1 && page < 9) {
                e.target.style.backgroundColor = '#e05656'
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                isGameFinished = true
                count++
                totalScore.innerText = `Score: ${score}`
            } else if (e.target.id == `ansbtn${buttonID}` && btn == `ansbtn${buttonID}` && count < 1 && page === 9) {
                e.target.style.backgroundColor = '#7fe960'
                isGameFinished = true
                count++
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                nextbtn.style.color = 'black'
                nextbtn.innerText = `Your score is ${score}/10!`
                nextbtn.style.backgroundColor = '#7cff01'
            } else if (e.target.id !== `ansbtn${buttonID}` && e.target.id == btn && count < 1 && page === 9) {
                e.target.style.backgroundColor = '#e05656'
                isGameFinished = true
                count++
                nextbtn.style.display = 'center'
                nextbtn.style.visibility = 'visible'
                nextbtn.style.color = 'black'
                nextbtn.innerText = `Your score is ${score}/10!`
                nextbtn.style.backgroundColor = '#7cff01'
                }
            } 
        )
    }
}

// PETER HELPED ME WITH LOGIC
if (page < 9) {
document.addEventListener('click', (e) => {
    let buttonID = qImgURL[page].buttonID;
    checkAnswer(e, buttonID);
    }
)

document.addEventListener('click', (e) => {
    isGameFinished = false;
        if (e.target.id == 'next') {
            page++;
            img.src = qImgURL[page].imgURL;
            ans1.innerText = qImgURL[page].choices[0];
            ans2.innerText = qImgURL[page].choices[1];
            ans3.innerText = qImgURL[page].choices[2];
            ans4.innerText = qImgURL[page].choices[3]; 
            nextbtn.style.visibility = 'hidden';
            blackButtons();
            count = 0;
            quest.innerText = `Question ${questionCount += 1}`
        }
        document.addEventListener('click', (e) => {
            let buttonID = qImgURL[page].buttonID;
            checkAnswer(e, buttonID);
            }
        )

    }   
)
}


