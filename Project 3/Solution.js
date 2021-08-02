var age = prompt("What is your age?","Yes, you must insert a age");
age = Number(age);

if ( age >= 18 ) {
    document.getElementById('doodles').innerHTML =  " Drive, Vote, Drink and earn your own money.";
} else if ( age < 18 ) {
    document.getElementById('doodles').innerHTML =  " Not much but ok";
} else  {
    document.getElementById('doodles').innerHTML =  " Bro, ages are numbers";
};
