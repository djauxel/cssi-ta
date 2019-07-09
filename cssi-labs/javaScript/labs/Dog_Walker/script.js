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

// Task 1
const dogName1 = "Steve";
const dogType1 = "beagle";

// Complete Task 1 Below
console.log("TASK 1 BELOW");
console.log("I will walk " + dogName1 + " today at 12:00pm");

const dogName2 = "Joe";
const dogType2 = "bulldog";

// Complete Task 2 Below
console.log("TASK 2 BELOW");
if (dogType2 === "corgi") {
    console.log("I will walk " + dogName2 + " today at 12:00pm");
} else {
    console.log("I will walk " + dogName2 + " today at 1:00pm");
}

const dogName3 = "Lola";
const dogType3 = "poodle";

// Complete Task 3 Below
console.log("TASK 3 BELOW");
function advancedSchedule(dogType, dogName) {
    if (dogType === "corgi" || dogType === "beagle") {
        console.log("I will walk " + dogName + " today at 12:00pm");
    } else if (dogType === "bulldog") {
        console.log("I will walk " + dogName + " today at 1:00pm");
    } else {
        console.log("I will walk " + dogName + " today at 2:00pm");
    }
}
advancedSchedule(dogType1, dogName1);
advancedSchedule(dogType2, dogName2);
advancedSchedule(dogType3, dogName3);

// Complete Extension Below
// console.log("EXTENSION BELOW");
// function favoriteDog() {

// }