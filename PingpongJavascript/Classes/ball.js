'use strict'
import Base from "./base.js";
export default class Ball extends Base {
    constructor(canvas_id, radius, vel_x, vel_y, pos_x, pos_y, color) {
        super(canvas_id);
        this.radius = radius;
        this.vel_x = vel_x;
        this.vel_y = vel_y;
        this.speed = Math.sqrt(Math.pow(this.vel_x, 2) + Math.pow(this.vel_y, 2));
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.color = color;
    }

    handle_event(events) {
        this.pos_x += this.vel_x;
        this.pos_y += this.vel_y;
    }

    handle_collision() {
        // Treffer venstre vegg
        if ((this.pos_x - this.radius) <= 0 && this.vel_x < 0) {
            this.vel_x *= -1;
            this.pos_x = this.radius;
            
        }
        // Treffer høyre vegg
        if ((this.pos_x + this.radius) >= this.canvas.width && this.vel_x > 0) {
            this.pos_x = this.canvas.width - this.radius;
            this.vel_x *= -1;
        }
        // Treffer øverste vegg
        if ((this.pos_y - this.radius) <= 0 && this.vel_y < 0) {
            this.pos_y = this.radius;
            this.vel_y *= -1;
            
        }
        // Treffer nederste vegg
        if ((this.pos_y + this.radius) >= this.canvas.height && this.vel_y > 0) {
            this.vel_y *= -1;
            this.pos_y = this.canvas.height - this.radius;
            
        }
    }
    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.pos_x, this.pos_y, this.radius, 0, Math.PI*2, false);
        this.ctx.fill();
    }
}