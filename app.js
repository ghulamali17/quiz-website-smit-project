let data = [
  {
    question: "What is the capital of Pakistan?",
    options: ["a) Karachi", "b) Islamabad", "c) Lahore", "d) Rawalpindi"],
    answer: "b) Islamabad",
  },
  {
    question: "Who is the founder of Pakistan?",
    options: [
      "a) Allama Iqbal",
      "b) Liaquat Ali Khan",
      "c) Muhammad Ali Jinnah",
      "d) Sir Syed Ahmed Khan",
    ],
    answer: "c) Muhammad Ali Jinnah",
  },
  {
    question: "What is the national language of Pakistan?",
    options: ["a) Punjabi", "b) Urdu", "c) Sindhi", "d) Pashto"],
    answer: "b) Urdu",
  },
  {
    question: "Which is the national animal of Pakistan?",
    options: ["a) Markhor", "b) Snow Leopard", "c) Bengal Tiger", "d) Lion"],
    answer: "a) Markhor",
  },
  {
    question: "Which is the largest province of Pakistan by area?",
    options: [
      "a) Punjab",
      "b) Sindh",
      "c) Balochistan",
      "d) Khyber Pakhtunkhwa",
    ],
    answer: "c) Balochistan",
  },
  {
    question: "Which river is called the lifeline of Pakistan?",
    options: ["a) Ravi", "b) Chenab", "c) Indus", "d) Jhelum"],
    answer: "c) Indus",
  },
  {
    question: "What is the national sport of Pakistan?",
    options: ["a) Cricket", "b) Hockey", "c) Football", "d) Squash"],
    answer: "b) Hockey",
  },
  {
    question: "Which city is known as the 'City of Lights' in Pakistan?",
    options: ["a) Karachi", "b) Lahore", "c) Islamabad", "d) Faisalabad"],
    answer: "a) Karachi",
  },
  {
    question: "What is the currency of Pakistan?",
    options: ["a) Rupee", "b) Dollar", "c) Pound", "d) Taka"],
    answer: "a) Rupee",
  },
  {
    question: "Which mountain range is home to K2 in Pakistan?",
    options: ["a) Himalayas", "b) Hindu Kush", "c) Karakoram", "d) Suleiman"],
    answer: "c) Karakoram",
  },
  {
    question: "Which year did Pakistan become an independent country?",
    options: ["a) 1945", "b) 1947", "c) 1948", "d) 1950"],
    answer: "b) 1947",
  },
  {
    question: "What is the national flower of Pakistan?",
    options: ["a) Jasmine", "b) Rose", "c) Sunflower", "d) Lotus"],
    answer: "a) Jasmine",
  },
  {
    question: "What is the national anthem of Pakistan called?",
    options: [
      "a) Pakistan Zindabad",
      "b) Qaumi Tarana",
      "c) Watan Hamara",
      "d) Pak Sarzameen",
    ],
    answer: "b) Qaumi Tarana",
  },
  {
    question: "Which city is known as the 'Manchester of Pakistan'?",
    options: ["a) Faisalabad", "b) Karachi", "c) Lahore", "d) Sialkot"],
    answer: "a) Faisalabad",
  },
  {
    question: "Which desert is located in Pakistan?",
    options: [
      "a) Thar Desert",
      "b) Sahara Desert",
      "c) Gobi Desert",
      "d) Kalahari Desert",
    ],
    answer: "a) Thar Desert",
  },
  {
    question: "Who was the first Prime Minister of Pakistan?",
    options: [
      "a) Muhammad Ali Jinnah",
      "b) Liaquat Ali Khan",
      "c) Ayub Khan",
      "d) Zulfikar Ali Bhutto",
    ],
    answer: "b) Liaquat Ali Khan",
  },
  {
    question: "Which sea is to the south of Pakistan?",
    options: [
      "a) Arabian Sea",
      "b) Red Sea",
      "c) Mediterranean Sea",
      "d) Caspian Sea",
    ],
    answer: "a) Arabian Sea",
  },
  {
    question: "What is the highest civilian award in Pakistan?",
    options: [
      "a) Nishan-e-Haider",
      "b) Nishan-e-Pakistan",
      "c) Sitara-e-Shujaat",
      "d) Hilal-e-Imtiaz",
    ],
    answer: "b) Nishan-e-Pakistan",
  },
  {
    question: "Which city is famous for its 'Badshahi Mosque'?",
    options: ["a) Lahore", "b) Karachi", "c) Islamabad", "d) Multan"],
    answer: "a) Lahore",
  },
  {
    question: "Which is the largest dam in Pakistan?",
    options: ["a) Mangla Dam", "b) Tarbela Dam", "c) Warsak Dam", "d) Hub Dam"],
    answer: "b) Tarbela Dam",
  },
];

let questionEle = document.querySelector(".questionEle");
let optionDiv = document.querySelector(".optionDiv");
let nextBtn = document.querySelector(".next-btn");

let count = 0;
let score = 0;

function showQuestion() {
  const currQuestion = data[count];
  questionEle.innerHTML = `${count + 1}. ${currQuestion.question}`;

  optionDiv.innerHTML = "";
  for (let i = 0; i < currQuestion.options.length; i++) {
    const option = document.createElement("button");
    option.classList.add("question-btn");
    option.textContent = currQuestion.options[i];

    option.addEventListener("click", (e) => {
      if (e.target.textContent === currQuestion.answer) {
        e.target.style.backgroundColor = "green";
        e.target.style.color = "white";
        score++;
      } else {
        e.target.style.backgroundColor = "red";
        e.target.style.color = "white";
      }

      const buttons = optionDiv.querySelectorAll("button");
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].disabled = true;
      }
    });

    optionDiv.appendChild(option);
  }
}

function nextQuestion() {
  count++;
  if (count < data.length) {
    showQuestion();
  } else {
    let result = document.querySelector(".result");
    result.innerHTML = `You answered ${score} out of 20 questions correctly!`;
  }
}

function reset() {
  location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  showQuestion();
});
