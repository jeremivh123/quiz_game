var questionEl = document.querySelector("#question");
var answerButtons = document.querySelector("#answer-btns");
var answer1 = document.querySelector(".btn1");
var answer2 = document.querySelector(".btn2");
var answer3 = document.querySelector(".btn3");
var answer4 = document.querySelector(".btn4");
var questionContainerEl = document.getElementById("question-container");
var startButton = document.getElementById("start-btn");


numCorrect = 0;
numWrong = 0;

startButton.addEventListener('click', startGame)

function startGame(){
console.log("Started");
startButton.classList.add('hide');
questionContainerEl.classList.remove("hide");
nextQuestion();
}
function nextQuestion(){
    showQuestion();
}
function showQuestion(){
   
questionEl.innerText =  question1.question
selectAnswer();
}
function selectAnswer(){
    answer1.innerText = 2;
    answer1.addEventListener('click', function(){
        numWrong++
    });
    answer2.innerText = 4;
    answer2.addEventListener('click',function(){
        numCorrect++
    });
    answer3.innerText = 7;
    answer3.addEventListener('click',function(){
        numWrong++
    });
    answer4.innerText = 8;
    answer4.addEventListener('click',function(){
        numWrong++
    });
    answerButtons.addEventListener('click',function(){
        questionEl.innerText = question2.question
        selectAnswer2();
        console.log(numWrong);
        console.log(numCorrect);
        
    })

}

function selectAnswer2(){
    answer1.innerText = 25;
    answer1.addEventListener('click',function(){
        numWrong++
    });
    answer2.innerText = 20;
    answer2.addEventListener('click',function(){
        numWrong++
        
    });
    answer3.innerText = 35;
    answer3.addEventListener('click',function(){
        numWrong++
        
    });
    answer4.innerText = 30;
    answer4.addEventListener('click',function(){
        numCorrect++
        
    });
    answerButtons.addEventListener('click',function(){
        questionEl.innerText = question3.question
        selectAnswer3();
        console.log(numWrong);
        console.log(numCorrect);

    })

}
function selectAnswer3(){
    answer1.innerText = 24;
    answer1.addEventListener('click',function(){
        numCorrect++
    });
    answer2.innerText = 18;
    answer2.addEventListener('click',function(){
        numWrong++
    });
    answer3.innerText = 16;
    answer3.addEventListener('click',function(){
        numWrong++
    });
    answer4.innerText = 32;
    answer4.addEventListener('click',function(){
        numWrong++
    });
    answerButtons.addEventListener('click',function(){
        questionEl.innerText = question4.question
        selectAnswer4();
        console.log(numWrong);
        console.log(numCorrect);
    })

}
function selectAnswer4(){
    answer1.innerText = 40;
    answer1.addEventListener('click',function(){
        numWrong++
    });
    answer2.innerText = 25;
    answer2.addEventListener('click',function(){
        numWrong++
    });
    answer3.innerText = 50;
    answer3.addEventListener('click',function(){
        numWrong++
    });
    answer4.innerText = 45;
    answer4.addEventListener('click',function(){
        numCorrect++
    });
    answerButtons.addEventListener('click',function(){
        questionEl.innerText = question5.question
        selectAnswer5();
        console.log(numWrong);
        console.log(numCorrect);
    })

}

function selectAnswer5(){
    answer1.innerText = 65;
    answer1.addEventListener('click',function(){
        numWrong++
    });
    answer2.innerText = 150;
    answer2.addEventListener('click',function(){
        numWrong++
    });
    answer3.innerText = 100;
    answer3.addEventListener('click',function(){
        numCorrect++
    });
    answer4.innerText = 95;
    answer4.addEventListener('click',function(){
        numWrong++
    });
    answerButtons.addEventListener('click',function(){
        questionEl.innerText = "end game"
        console.log(numWrong);
        console.log(numCorrect);
        endGame();
    })

}

function endGame(){
    answerButtons.classList.add('hide');
    answerButtons.innerText = "Correct = " + numCorrect + " " + "Wrong = " + numWrong ;
}

var question1 = {
    question: "What is 2 x 2?",
    answer: 4,
}

var question2 = {
    question: "What is 5 x 6?",
    answer: 30,
}

var question3 = {
    question: "What is 3 x 8?",
    answer: 24,
}

var question4 = {
    question: "What is 5 x 9?",
    answer: 45,
}


var question5 = {
    question: "What is 20 x 5?",
    answer: 100,
}




