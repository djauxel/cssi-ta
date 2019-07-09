// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Array of size 10 (0 - 9)
const positiveResponses = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes"
];

// Array of size 5 (0 - 4)
const negativeResponses = ["Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

// Array of size 6 (0 - 5)
const nonCommittalResponses = ["Reply hazy",
    "Try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
];

function responseTypeChance (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function answerTypeChance (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const magicBall = document.getElementById('ball');
const answer = document.getElementById('answer');
magicBall.addEventListener('click', (event) =>{
    responseType = responseTypeChance(0, 2);
    if (responseType === 0) { // positivte response
        answerIndex = answerTypeChance(0, positiveResponses.length - 1);
        console.log('POS: ' + answerIndex);
        answer.innerText = positiveResponses[answerIndex];
        magicBall.style.backgroundColor = 'lightgreen';
        
    } else if (responseType === 1) { // negative response
        answerIndex = answerTypeChance(0, negativeResponses.length - 1);
        console.log('NEG: ' + answerIndex);
        answer.innerText = negativeResponses[answerIndex];
        magicBall.style.backgroundColor = 'red';

    } else if(responseType === 2) { // non-committal responses
        answerIndex = answerTypeChance(0, nonCommittalResponses.length - 1);
        console.log('NON: ' + answerIndex);
        answer.innerText = nonCommittalResponses[answerIndex];
        magicBall.style.backgroundColor = 'darkorchid';

    } else {
        console.log('This shouldn\'t have happened');
    }
});