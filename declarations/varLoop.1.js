'use strict';

var messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];

var cat = {
    thoughts: [],
    think: function (msj) {
        this.thoughts.push(msj);
    },
    mindReader: function () {
        setTimeout(() =>     
            console.log(this.thoughts),
        10);
    }
};

for (var i = 0; i < messages.length; i++) {
    setTimeout(() => 
        cat.think(messages[i]), 
    1);
}

cat.mindReader();