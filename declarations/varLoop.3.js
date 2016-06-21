'use strict';

let messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];

const cat = {
    thoughts: [],
    think(msj) {
        this.thoughts.push(msj);
    },
    mindReader() {
        setTimeout(() => 
            console.log(this.thoughts),
        10);
    }
};

for (let i = 0; i < messages.length; i++) {
    setTimeout(() => 
        cat.think(messages[i]), 
    1);
}

cat.mindReader();