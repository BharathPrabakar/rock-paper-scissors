window.alert("Welcome to RPS!!");

const istatus = window.confirm("Are you Ready!👍");

let hcount = 0;
let mcount = 0;

const options = ['Rock','Paper','Scissor'];

while(istatus) {

    const moption = Math.ceil(Math.random()*3);

    const hoption = Number(window.prompt("1 for Rock\n2 for Paper\n3 for Scissor\n4 to exit"));

    if(hoption>4 || hoption<1) {
        window.alert("Wrong Option");
        continue;
    }

    if(hoption == 4) {
        window.alert("Thankyou for Playing!\nYour score : "+hcount+"\nMy score : "+mcount+`\n${mcount==hcount?"It's tie":mcount>hcount?"I am the Winner!!":"You are the Winner!!"}`);
        break;
    }

    /*
        rock 1
        paper 2
        scissor 3

        if both equal -> tie

        scissor cuts paper roles rock distroyes scissor -> circle.
    */

    if(moption == hoption) {
        window.alert("Tie!!");
        continue;
    }

    if(moption == 1 && hoption == 3 || moption == 2 && hoption == 1 || moption == 3 && hoption == 2) {
        mcount++;
        window.alert("I am "+options[moption-1]+"\nYou are "+options[hoption-1]+"\nWow!! I got the score😃");
    }
    else {
        hcount++;
        window.alert("I am "+options[moption-1]+"\nYou are "+options[hoption-1]+"\nWow!! You got the score😃");
    }

}