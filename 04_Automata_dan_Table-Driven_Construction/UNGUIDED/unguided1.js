const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let state = "START";

function gameLoop() {
    console.log("Current State:", state);
    readline.question("Enter Command: ", (command) => {
        command = command.toUpperCase();
        
        switch (state) {
            case "START":
                if (command === "PLAY") state = "PLAYING";
                else if (command === "EXIT") {
                    console.log("Exiting game...");
                    readline.close();
                    return;
                }
                break;
            case "PLAYING":
                if (command === "LOSE") state = "GAME OVER";
                else if (command === "EXIT") {
                    console.log("Exiting game...");
                    readline.close();
                    return;
                }
                break;
            case "GAME OVER":
                if (command === "RESTART") state = "START";
                else if (command === "EXIT") {
                    console.log("Exiting game...");
                    readline.close();
                    return;
                }
                break;
        }
        gameLoop();
    });
}

console.log("Game started. Type PLAY to start playing.");
gameLoop();