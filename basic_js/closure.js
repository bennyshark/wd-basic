// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(6);
game.decreaseScore(7);
console.log(`The score is ${game.getScore()}pts`);


// ---------------Counter------------

function createCounter(){
    
    let count = 0;

    function increment(){
        count ++;
        console.log(`Count is increased tp ${count}`);
    }

    function getCount(){ 
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

// ----------------Basic----------------
function outer(){

    let message = "Hello";
    function inner(){
        console.log(message);
    }

    inner();
}

message = "gg";

outer();

console.log(message);