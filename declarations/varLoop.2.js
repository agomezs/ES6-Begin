'use strict';

var messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];

var cat = {
    thoughts: [],
    think: function (msj) {
        cat.thoughts.push(msj);
    },
    mindReader: function () {
        setTimeout(function() {  
            console.log(cat.thoughts);
        },
        10);
    }
};

for (let i = 0; i < messages.length; i++) {
    setTimeout(function () { 
        cat.think(messages[i]);
    }, 1);
}

cat.mindReader();