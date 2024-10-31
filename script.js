function Quiz(qustions) {
    this.score = 0;
    this.qustions = qustions;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};
function Question(text, choices, answer) {
    this.text = text;
    this.choices = coices;
    this.answer = answer;
}

Quiz.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};
var QuizUI = {
    displayNext: function () {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
    displayChoices: function() {
        var choices = quiz.getCurrentQuestion().choices;

        for(var i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },
    displayScore: function() {
        var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "/ 5 </h2>";
        this.populateIdWithHTML("quiz", gameOverHTML);
    },

    populateIdWithHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    guessHandler: function(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },

    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + i;
        this.populateIdWithHTML("progree", "Question" + currentQuestionNumber + "of" + quiz.question.length);
    }
};

//create questions
var questions = [
    new Question("which planet has the most moons?", ["Jupitar", "Uranus", "Saturn", "Mars"], "Saturn"),
    new Question("What country has won the most world cups?", ["Brazil", "Argentina", "England", "France"], "Brazil"),
    new Question("How many bones are in the human ear?", ["8", "14", "5", "3"], "3"),
    new Question("Which Netflix show had the most streaming views in 2021?", ["The witcher", "Arcane", "League of legends", "Squid Game"], "Squid Game"),
    new Question("What is the fourth letter in th Greek alphabet?", ["Zeta", "Delta", "Alpha", "Epsilon"], "Delta")
];

//create quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();