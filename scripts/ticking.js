//Ticking object
export const ticking = {
    //Last time, original time and delta time variables
    lastTime: performance.now(),
    deltaTime: null,
    originalTime: performance.now(),

    //Tick count and tps variable
    tickCount: 0,
    tps: 20,

    //Attempt tick function: checks if a tick should be run, and runs all tick function, otherwise just graphics tick function
    attemptTick: function() {
        //Calculate delta time and last time
        const time = performance.now();
        this.deltaTime = (time - this.lastTime) / 1000;
        this.lastTime = time;

        //Determine if a tick should be run
        if(((time - this.originalTime) / 1000) >= 1000 / this.tps * this.tickCount) {
            //Run all other ticks (except graphics)
        }

        //Run graphics tick
        graphics.tick();

        //Loop
        requestAnimationFrame(this.attemptTick.bind(this));
    }
};