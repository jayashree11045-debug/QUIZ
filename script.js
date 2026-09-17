

const questions = [
    {
        question: "Who is known as the 'God of Cricket'?",
        options: [
            "Virat Kohli",
            "Sachin Tendulkar",
            "MS Dhoni",
            "Kapil Dev"
        ],
        answer: 1
    },

    {
        question: "Who captained India when they won the 1983 Cricket World Cup?",
        options: [
            "Sunil Gavaskar",
            "Kapil Dev",
            "Ravi Shastri",
            "Mohinder Amarnath"
        ],
        answer: 1
    },

    {
        question: "Who was the captain of India when India won the 2011 Cricket World Cup?",
        options: [
            "Virat Kohli",
            "Sourav Ganguly",
            "MS Dhoni",
            "Rohit Sharma"
        ],
        answer: 2
    },

    {
        question: "Which Indian batsman is famous for the nickname 'Hitman'?",
        options: [
            "Rohit Sharma",
            "Shikhar Dhawan",
            "Virender Sehwag",
            "KL Rahul"
        ],
        answer: 0
    },

    {
        question: "Who was the first Indian to score a double century in ODI cricket?",
        options: [
            "Sachin Tendulkar",
            "Virender Sehwag",
            "Rohit Sharma",
            "MS Dhoni"
        ],
        answer: 0
    },

    {
        question: "Which Indian spinner is popularly known as 'The Turbanator'?",
        options: [
            "Ravichandran Ashwin",
            "Harbhajan Singh",
            "Anil Kumble",
            "Ravindra Jadeja"
        ],
        answer: 1
    },

    {
        question: "Who is the highest wicket-taker for India in Test cricket?",
        options: [
            "Kapil Dev",
            "Anil Kumble",
            "Harbhajan Singh",
            "Ravichandran Ashwin"
        ],
        answer: 1
    },

    {
        question: "Which Indian cricketer is famous for the nickname 'Captain Cool'?",
        options: [
            "Virat Kohli",
            "Sourav Ganguly",
            "MS Dhoni",
            "Rahul Dravid"
        ],
        answer: 2
    },

    {
        question: "What is the name of India's domestic first-class cricket tournament?",
        options: [
            "Vijay Hazare Trophy",
            "Ranji Trophy",
            "Duleep Trophy",
            "Irani Cup"
        ],
        answer: 1
    },

    {
        question: "Which Indian batsman is known as 'The Wall'?",
        options: [
            "Rahul Dravid",
            "VVS Laxman",
            "Sunil Gavaskar",
            "Sourav Ganguly"
        ],
        answer: 0
    },

    {
        question: "Which stadium is commonly known as India's largest cricket stadium?",
        options: [
            "Wankhede Stadium",
            "Eden Gardens",
            "Narendra Modi Stadium",
            "M. Chinnaswamy Stadium"
        ],
        answer: 2
    },

    {
        question: "Who was the first Indian batsman to score 10,000 Test runs?",
        options: [
            "Sachin Tendulkar",
            "Sunil Gavaskar",
            "Rahul Dravid",
            "Virat Kohli"
        ],
        answer: 1
    },

    {
        question: "Which Indian player is famous for the helicopter shot?",
        options: [
            "MS Dhoni",
            "Rohit Sharma",
            "Virat Kohli",
            "Yuvraj Singh"
        ],
        answer: 0
    },

    {
        question: "Who won the inaugural ICC T20 World Cup in 2007?",
        options: [
            "Australia",
            "India",
            "Pakistan",
            "Sri Lanka"
        ],
        answer: 1
    },

    {
        question: "Which Indian cricketer hit six sixes in an over in the 2007 T20 World Cup?",
        options: [
            "Yuvraj Singh",
            "MS Dhoni",
            "Rohit Sharma",
            "Virender Sehwag"
        ],
        answer: 0
    },

    {
        question: "Which Indian batsman is known for the nickname 'King Kohli'?",
        options: [
            "Rohit Sharma",
            "Virat Kohli",
            "KL Rahul",
            "Shreyas Iyer"
        ],
        answer: 1
    },

    {
        question: "Which Indian bowler has been one of India's leading Test spinners?",
        options: [
            "Jasprit Bumrah",
            "Mohammed Shami",
            "Ravichandran Ashwin",
            "Mohammed Siraj"
        ],
        answer: 2
    },

    {
        question: "Which Indian player is famous for his left-handed batting and all-round ability?",
        options: [
            "Ravindra Jadeja",
            "Jasprit Bumrah",
            "Kuldeep Yadav",
            "Mohammed Siraj"
        ],
        answer: 0
    },

    {
        question: "Which city is home to Wankhede Stadium?",
        options: [
            "Delhi",
            "Mumbai",
            "Chennai",
            "Kolkata"
        ],
        answer: 1
    },

    {
        question: "Which Indian batsman is nicknamed 'Gabbar'?",
        options: [
            "Shikhar Dhawan",
            "Rohit Sharma",
            "Suryakumar Yadav",
            "Ajinkya Rahane"
        ],
        answer: 0
    }
];



let username = "";



function startQuiz() {

    const nameInput = document.getElementById("username");
    const error = document.getElementById("loginError");

    username = nameInput.value.trim();

    if (username === "") {
        error.textContent = "Please enter your name.";
        return;
    }

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";

    document.getElementById("welcomeUser").textContent =
        "Welcome, " + username + "! Answer all 20 questions.";

    loadQuestions();
}



function loadQuestions() {

    const quizForm = document.getElementById("quizForm");

    quizForm.innerHTML = "";

    questions.forEach((q, index) => {

        const questionCard = document.createElement("div");

        questionCard.className = "question-card";

        let optionsHTML = "";

        q.options.forEach((option, optionIndex) => {

            optionsHTML += `
                <label class="option">
                    <input
                        type="radio"
                        name="question${index}"
                        value="${optionIndex}"
                    >
                    ${option}
                </label>
            `;

        });

        questionCard.innerHTML = `
            <div class="question-number">
                Question ${index + 1}
            </div>

            <div class="question-text">
                ${q.question}
            </div>

            ${optionsHTML}
        `;

        quizForm.appendChild(questionCard);
    });

    updateProgress();
}




function submitQuiz() {

    let score = 0;
    let unanswered = 0;

    questions.forEach((q, index) => {

        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (!selected) {
            unanswered++;
        } else {

            const selectedAnswer = Number(selected.value);

            if (selectedAnswer === q.answer) {
                score++;
            }
        }
    });

    if (unanswered > 0) {

        const confirmSubmit = confirm(
            "You have " + unanswered +
            " unanswered question(s). Do you want to submit?"
        );

        if (!confirmSubmit) {
            return;
        }
    }

    showResult(score);
}



function showResult(score) {

    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "flex";

    document.getElementById("resultUser").textContent =
        "Well done, " + username + "!";

    document.getElementById("finalScore").textContent = score;

    const percentage = (score / questions.length) * 100;

    document.getElementById("percentage").textContent =
        "Your score: " + percentage + "%";

    let message = "";

    if (score >= 18) {
        message = "🏆 Excellent! You are a true cricket expert!";
    }
    else if (score >= 14) {
        message = "🔥 Great job! You know Indian cricket very well!";
    }
    else if (score >= 10) {
        message = "👏 Good effort! Keep learning about cricket!";
    }
    else if (score >= 5) {
        message = "🏏 Nice try! A little more cricket knowledge will help!";
    }
    else {
        message = "📚 Keep practicing! You can improve your score!";
    }

    document.getElementById("resultMessage").textContent = message;
}



function restartQuiz() {

    document.getElementById("resultPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";

    document.getElementById("username").value = "";
    document.getElementById("loginError").textContent = "";

}




function updateProgress() {

    const progress = document.getElementById("progressBar");

    progress.style.width = "100%";
}
