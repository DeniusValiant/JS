var initValue = true;

function Prom() {
   var myPromise = new Promise(function (resolved, rejected) {

        if (initValue) {
            return setTimeout(() => { resolved("Wait for response from server: Resolved");},10000);
        }
        else {
            return setTimeout(() => { rejected("Wait for response from server: Rejected");}, 10000);
        }
    });

    return myPromise;
}

console.log("Task1 executed");

console.log("Task2 executed");

function Executed(t)
{
    console.log(t);
}

function NotExecuted(t)
{
    console.log(t);
}

Prom().then(
    function(t){
        Executed(t);
    }).catch(function(t) {NotExecuted(t);});