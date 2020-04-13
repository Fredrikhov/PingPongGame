'use strict'
import Base from "./base.js"
export default class Paddle extends Base {
    constructor(canvas_id, width, height, vel_y, pos_x, pos_y, color, up, down) {
        super(canvas_id);
        this.width = width;
        this.height = height;
        this.vel_y = vel_y;
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.color = color;
        this.up = up;
        this.down = down;
    }

    handle_event(events) {
        if (events[this.up]) {
            this.pos_y -= this.vel_y;
        }
        if (events[this.down]) {
            this.pos_y += this.vel_y;
        }
    }

    handle_collision() {
        if (this.pos_y <= 0) {
            this.pos_y = 0;
        }
       if ((this.pos_y + this.height) >= this.canvas.height) {
            this.pos_y = this.canvas.height - this.height;
        }
    }

    render() {
        this.ctx.fillStyle = this.color;  
        this.ctx.fillRect(this.pos_x, this.pos_y, this.width, this.height);  
    }
}