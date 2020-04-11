'use strict'
export default class Game  {
    constructor(score,ball,player1, player2) {
        this.score = score;
        this.ball = ball;
        this.player1 = player1;
        this.player2 = player2;
        this.turn = undefined;
    }

    apply_rules(paddle) {
       if (this.turn == undefined) {
            this.turn = paddle;
        }
        
        if (this._ball_and_paddle_intersects(paddle) && this.turn == paddle) {
            this._ball_calculate_angle(paddle);
            this.turn = this.turn == this.player1 ? this.player2 : this.player1;
        }
    }
    apply_score() {
        if ((this.ball.pos_x - this.ball.radius) <= 0) {
            this.score.player2_add_score();
            //sthis.reset_positions();
        }
        if ((this.ball.pos_x + this.ball.radius) >= this.ball.canvas.width) {
            this.score.player1_add_score();
            //this.reset_positions();
        }
    }
    
    reset_positions() {
        this.turn = undefined;
        this._reset_player_position(this.player1);
        this._reset_player_position(this.player2);
        this.ball.pos_x = this.ball.canvas.width / 2;
        this.ball.pos_y = this.ball.canvas.height / 2;
        // Hva er dette?
        this.ball.vel_x = this.ball.speed * Math.sign(this.ball.vel_x) * -1;
        this.ball.vel_y = 0;
    }
    
    _reset_player_position(player) {
        player.pos_y = (player.canvas.height/2) - (player.height/2) 
    }

    _ball_and_paddle_intersects(paddle) {
        var discriminant_x = Math.abs(this.ball.pos_x - (paddle.pos_x + (paddle.width/2)));
        var discriminant_y = Math.abs(this.ball.pos_y - (paddle.pos_y + (paddle.height/2)));

        if (discriminant_x > ((paddle.width/2) + this.ball.radius)) {
            console.log("venstre");
            return false;
        }
        if (discriminant_y > ((paddle.height/2) + this.ball.radius)) {
            console.log("høyre");
            return false;
        }
       if (discriminant_x >= paddle.width/2) {
            console.log("1");
            return true;
        }
        if (discriminant_y >= paddle.height/2) {
            console.log("2");
            return true;
        }
        return (Math.pow(discriminant_x - (paddle.width/2), 2) + Math.pow(discriminant_y - (paddle.height/2), 2)) >= Math.pow(this.ball.radius, 2);
    }

    _ball_calculate_angle(paddle) {
        let angle = (((this.ball.pos_y - paddle.pos_y) - paddle.height/2) / (paddle.height/2));
        
        this.ball.vel_x = this.ball.speed * Math.cos(angle) *-Math.sign(this.ball.vel_x);
        this.ball.vel_y = this.ball.speed * Math.sin(angle);
    }
}