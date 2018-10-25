let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc; //переменные для хранения позиции каждой клетки корабля
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess; //номер текущей попытки (число, кот. вводит юзер)
let hits = 0; //кол-во попаданий
let guesses = 0; //кол-во попыток
let isSunk = false; //потоплен корабль - да/нет

while (isSunk == false){
    guess = prompt('Ready, aim, fire! (enter a number 0-6):');

    if (guess < 0 || guess > 6){
        alert('Please enter a valid cell number!');
    } else{
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3){
            alert('HIT!');
            hits = hits + 1;

            if (hits == 3){
                isSunk = true;
                alert('You sank my battleship!');
            };
        } else {
            alert('MISS');
        }
    };
};

var stats = 'You took ' + guesses + " guesses to sink the battleship, " +
'which means your shooting accuracy was ' + (3/guesses);
alert(stats);

console.log(guesses);
