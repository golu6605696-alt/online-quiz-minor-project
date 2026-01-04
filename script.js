const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "None of these"
    ],
    answer: 0
  },
  {
    question: "Which language is used for web styling?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: 1
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: 3
  },
  {
    question: "Which symbol is used for JS comments?",
    options: ["<!-- -->", "//", "**", "##"],
    answer: 1
  },
  {
    question: "JavaScript was developed by?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function startQuiz() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  selectedOption = null;
  const q = quizData[currentQuestion];

  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "w-full border px-4 py-2 rounded hover:bg-blue-100";
    btn.onclick = () => selectOption(btn, index);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(button, index) {
  document
    .querySelectorAll("#options button")
    .forEach(btn => btn.classList.remove("selected"));

  button.classList.add("selected");
  selectedOption = index;
}

function nextQuestion() {
  if (selectedOption === null) {
    alert("Please select an option");
    return;
  }

  if (selectedOption === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");
  document.getElementById("score").innerText =
   "Your Score:" + score + "/"+ quizData.length;
}