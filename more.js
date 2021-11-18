alert("Type anything but 'yes'.");

function loopy(){
    let answer = "";
    do{
        answer = prompt("Are you annoyed yet?");
        if(answer !== "yes"){
            alert("Really, with that shirt?");
            alert("You should be...")
        } else if(answer === "yes"){
            alert("It had to be said!!");
        }
    }while(answer != "yes")
}
