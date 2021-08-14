//get the nodes

var nrMaxHundred = document.getElementById('max100');

var toPutAnswerTwo = document.getElementById('nr2');

//answers


// var ansTwo = getRandomInt(100);
// console.log(ansTwo);

//onClick functions

function guessOne(){
    var ansOne = Math.floor(Math.random() * (10 - 0)) + 0;
    console.log(ansOne);
    var toPutAnswerOne = document.getElementById('nr1');
    var nrMaxten = document.getElementById('maxTen').value;
        while(true){
            
            if ( nrMaxten ==  ansOne){
                toPutAnswerOne.innerHTML = "ok ";
                break;
            } else {
                toPutAnswerOne.innerHTML = "not ok ";
                var nrMaxten = document.getElementById('maxTen').value;

        
            }
        }
}

// function guessOne(){
//     var nrMaxten = document.getElementById('maxTen').value;
//     var toPutAnswerOne = document.getElementById('nr1');

//     var ansOne = Math.floor(Math.random() * (10 - 0)) + 0;
//     console.log(ansOne);

//     // while(nrMaxten !=  ansOne){
//     //     toPutAnswerOne.innerHTML = "nope ";
//     // }


//     if ( nrMaxten ==  ansOne){
//         toPutAnswerOne.innerHTML = "ok ";
//     } else {
//         toPutAnswerOne.innerHTML = "not ok ";

//     }
// };

// function guessTwo(){

// }