let data = [
  {
    question: "What is the capital of Pakistan?",
    options: ["a) Karachi", "b) Islamabad", "c) Lahore", "d) Rawalpindi"],
    answer: "b",
  },
  {
    question: "Who is the founder of Pakistan?",
    options: [
      "a) Allama Iqbal",
      "b) Liaquat Ali Khan",
      "c) Muhammad Ali Jinnah",
      "d) Sir Syed Ahmed Khan",
    ],
    answer: "c",
  },
  {
    question: "What is the national language of Pakistan?",
    options: ["a) Punjabi", "b) Urdu", "c) Sindhi", "d) Pashto"],
    answer: "b",
  },
  {
    question: "Which is the national animal of Pakistan?",
    options: ["a) Markhor", "b) Snow Leopard", "c) Bengal Tiger", "d) Lion"],
    answer: "a",
  },
  {
    question: "Which is the largest province of Pakistan by area?",
    options: [
      "a) Punjab",
      "b) Sindh",
      "c) Balochistan",
      "d) Khyber Pakhtunkhwa",
    ],
    answer: "c",
  },
  {
    question: "Which river is called the lifeline of Pakistan?",
    options: ["a) Ravi", "b) Chenab", "c) Indus", "d) Jhelum"],
    answer: "c",
  },
  {
    question: "What is the national sport of Pakistan?",
    options: ["a) Cricket", "b) Hockey", "c) Football", "d) Squash"],
    answer: "b",
  },
  {
    question: "Which city is known as the 'City of Lights' in Pakistan?",
    options: ["a) Karachi", "b) Lahore", "c) Islamabad", "d) Faisalabad"],
    answer: "a",
  },
  {
    question: "What is the currency of Pakistan?",
    options: ["a) Rupee", "b) Dollar", "c) Pound", "d) Taka"],
    answer: "a",
  },
  {
    question: "Which mountain range is home to K2 in Pakistan?",
    options: ["a) Himalayas", "b) Hindu Kush", "c) Karakoram", "d) Suleiman"],
    answer: "c",
  },
  {
    question: "Which year did Pakistan become an independent country?",
    options: ["a) 1945", "b) 1947", "c) 1948", "d) 1950"],
    answer: "b",
  },
  {
    question: "What is the national flower of Pakistan?",
    options: ["a) Jasmine", "b) Rose", "c) Sunflower", "d) Lotus"],
    answer: "a",
  },
  {
    question: "What is the national anthem of Pakistan called?",
    options: [
      "a) Pakistan Zindabad",
      "b) Qaumi Tarana",
      "c) Watan Hamara",
      "d) Pak Sarzameen",
    ],
    answer: "b",
  },
  {
    question: "Which city is known as the 'Manchester of Pakistan'?",
    options: ["a) Faisalabad", "b) Karachi", "c) Lahore", "d) Sialkot"],
    answer: "a",
  },
  {
    question: "Which desert is located in Pakistan?",
    options: [
      "a) Thar Desert",
      "b) Sahara Desert",
      "c) Gobi Desert",
      "d) Kalahari Desert",
    ],
    answer: "a",
  },
  {
    question: "Who was the first Prime Minister of Pakistan?",
    options: [
      "a) Muhammad Ali Jinnah",
      "b) Liaquat Ali Khan",
      "c) Ayub Khan",
      "d) Zulfikar Ali Bhutto",
    ],
    answer: "b",
  },
  {
    question: "Which sea is to the south of Pakistan?",
    options: [
      "a) Arabian Sea",
      "b) Red Sea",
      "c) Mediterranean Sea",
      "d) Caspian Sea",
    ],
    answer: "a",
  },
  {
    question: "What is the highest civilian award in Pakistan?",
    options: [
      "a) Nishan-e-Haider",
      "b) Nishan-e-Pakistan",
      "c) Sitara-e-Shujaat",
      "d) Hilal-e-Imtiaz",
    ],
    answer: "b",
  },
  {
    question: "Which city is famous for its 'Badshahi Mosque'?",
    options: ["a) Lahore", "b) Karachi", "c) Islamabad", "d) Multan"],
    answer: "a",
  },
  {
    question: "Which is the largest dam in Pakistan?",
    options: ["a) Mangla Dam", "b) Tarbela Dam", "c) Warsak Dam", "d) Hub Dam"],
    answer: "b",
  },
];

let main = document.querySelector(".main");
let optionDiv = document.querySelector(".optionDiv");
let questionEle = document.querySelector(".questionEle");

let count = 0;

function showQuestion() {
  const currQuestion = data[count];
  questionEle.innerHTML = `${count + 1}. ${currQuestion.question}`;

  optionDiv.innerHTML = "";
  for (let i = 0; i < currQuestion.options.length; i++) {
    const option = document.createElement("p");
    option.textContent = currQuestion.options[i];
    optionDiv.appendChild(option);
  }
}

function nextQuestion() {
  count++;
  if (count >= data.length) {
    alert("End");
    return;
  }
  showQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  showQuestion();
});
