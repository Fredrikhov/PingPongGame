'use strict'
export default class Base {
    constructor(canvas_id,color,width,height) {
        this.canvas = document.getElementById(canvas_id);
        this.ctx = this.canvas.getContext('2d');
        this.color = color;
        this.width = width;
        this.height = height;
    }
    // render the background
    render() {
        
        this.ctx.fillStyle = this.color;  
        this.ctx.fillRect(0,0,this.width, this.height);
    }
}