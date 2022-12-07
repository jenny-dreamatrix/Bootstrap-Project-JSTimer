/*let ist eine variable, wie var, nur noch besser, wird schneller gelesen
* die variable heißt button und sucht im html dokument nach button type und wählt diese aus*/
let button = document.querySelector("button");

/*wir erstellen eine neue funktion mit dem namen TimerFunction, diese macht folgendes:
* führt die funktion console.log aus*/
function TimerFunction() {
    console.log("Timer has Began!");

    let endOfTimer = Date.parse("Dec 7, 2022 15:30:00");     /*hard coded countdown end point*/

    let nowTime = new Date();   //Getting a copy of the entire date and time from user

    let timeDifference = endOfTimer - nowTime;

    console.log(timeDifference);        //Future End time minus Now Time

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor(timeDifference / (1000 * 60));
    let seconds = Math.floor(timeDifference / 1000);        /*um sekunden anzeigen zu lassen, müssen millisekunden durch 1000 geteilt werden*/
    console.log(seconds + "\n" + minutes + "\n" + hours + "\n" + days); /*variablen in console anzeigen lassen, jede in einer neuen zeile*/
    console.log(days + 'd', hours + 'h', minutes + 'min', seconds + 'sec');

    let dayTime = days;
    let hourTime = hours - days * 24;
    let minuteTime = minutes - hours * 60;
    let secondsTime = seconds - minutes * 60;

    console.log(dayTime, hourTime, minuteTime, secondsTime);

    /*go to html document, search for class timer and then replace what is in there with the following divs that we inject*/
    document.querySelector(".timer").innerHTML =
        '<div>' + dayTime + '</div>' +
        '<div>' + hourTime + '</div>' +
        '<div>' + minuteTime + '</div>' +
        '<div>' + secondsTime + '</div>' ;

}

/*TimerFuntion wird getriggert und ausgeführt*/
TimerFunction();

/*1000-> pro 1 sekunde wird TimerFunction automatisch ausgeführt/getriggert, 
2000 würde alle 2 sek sein*/
setInterval(
    'TimerFunction()',  /*code to be triggered after delay time is up*/
    1000);       /*delay*/


/*addEventListener checkt ob etwas bestimmtes mit dem button passiert, in diesem Fall ob er geclickt wird. jedesmal wenn button geclickt wird, wird TimerFunction getriggert*/
button.addEventListener("click", () => {
    TimerFunction();
})


