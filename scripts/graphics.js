//Graphics object
const graphics = {
    //Canvas and ctx properties
    canvas: document.getElementById("canvas"),
    ctx: document.getElementById("canvas").getContext("2d"),

    //Canvas tick function
    tick: function() {
        //Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //Call all draws

    },

    //Offsets and scale
    offsetX: 0,
    offsetY: 0,
    scale: 1,

    //World coordinates
    worldWidth: 160,
    worldHeight: 90,

    //Resize function
    resize: function() {
        //Change canvas size to match window size
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        //Reset offsets
        this.offsetX = 0;
        this.offsetY = 0;

        //Calculate offset
        const currentRatio = this.canvas.width / this.canvas.height;
        const neededRatio = this.worldWidth / this.worldHeight;

        if(currentRatio > neededRatio) {
            const newX = this.canvas.height * neededRatio;
            this.offsetX = (this.canvas.x - newX) / 2;
        }
        else if(currentRatio < neededRatio) {
            const newY = this.canvas.width / neededRatio;
            this.offsetY = (this.canvas.y - newY) / 2;
        }

        //Calculate scale
        this.scale = Math.min(
            this.canvas.x / this.worldWidth,
            this.canvas.height / this.worldHeight
        );
    }
};