'use strict'
import Base from "./base.js";
export default class Score extends Base {
    constructor(canvas_id, color, line_width) {
        super(canvas_id);
        this.player1 = 0;
        this.player2 = 0;
        this.color = color;
        this.line_width = line_width;
    }

    player1_add_score() {
        this.player1 += 1;
    }

    player2_add_score() {
        this.player2 += 1;
    }
    
    reset() {
        this.player1 = 0;
        this.player2 = 0;
    }
    
    handle_event(events) {
        return;
    }

    handle_collision() {
        return;
    }
    
    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.player1, (this.canvas.width/2) - 80, 50);
        this.ctx.fillText(this.player2, (this.canvas.width/2) + 50, 50);
        this.ctx.fillRect((this.canvas.width / 2) - (this.line_width/2), 0, this.line_width, this.canvas.height);
    }
}