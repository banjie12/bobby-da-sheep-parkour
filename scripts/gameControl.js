import { graphics } from "./graphics.js"

//Game control object
const gameControl = {
    //Delta time
    lastTime: performance.now(),
    deltaTime: null,

    //Main tick function
    tick: function() {
        //Calculate delta time
        const time = performance.now();
        this.deltaTime = (time - this.lastTime) / 1000;
        this.lastTime = time;

        //Call all other ticks

        //Loop
        requestAnimationFrame(this.tick);
    }
};