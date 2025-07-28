// Callback Hell = Situation in JavaScript where callbacks
//                 are nested within other callbacks to the
//                 degree where the code is asynchronous functions.
//                 Use Promises + async/await to avoid Callback Hell

//                 4 is acceeptable for callback but 5 is something not
function task1(callback){
    setTimeout(() =>{
        console.log("Task 1 ccomplete")
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() =>{
        console.log("Task 2 ccomplete")
        callback();
    }, 1000);
}

function task3(callback){
    setTimeout(() =>{
        console.log("Task 3 ccomplete")
        callback();
    }, 3000);
}

function task4(callback){
    setTimeout(() =>{
        console.log("Task 4 ccomplete")
        callback();
    }, 1500);
}

task1(() => {
    task2(() =>{
        task3(() =>{
            task4(() =>{
                console.log("all task are complete"); 
            }
            );
        });
    });
});

