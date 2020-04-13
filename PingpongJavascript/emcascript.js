'use strict'
import Base from "./javascript/base.js";
import Ball from "./javascript/ball.js";
import Paddle from "./javascript/paddle.js";
import Game from "./javascript/game.js";
import score from "./javascript/score.js";

window.onload = function(){
    // new base object with single id of canvas
    let game_Ground = new Base("PingPong");

    let events = {};

    let sprites = {
        "game_Base": new Base(game_Ground.canvas.id, 'black', game_Ground.canvas.width, game_Ground.canvas.height),
        "ball": new Ball(game_Ground.canvas.id, 10, 5, 0, 250, 250, 'white'),
        "player1": new Paddle(game_Ground.canvas.id, 10, 100, 5, 5, 0, 'green', 'w', 's'),
        "player2": new Paddle(game_Ground.canvas.id, 10, 100, 5, game_Ground.canvas.width-15, 0, 'blue', 'o', 'l'),
        "score" : new score(game_Ground.canvas.id, 'white', 5),
    };
    
    onkeydown = onkeyup = function(e){
        e = e || event;
        events[e.key] = e.type == 'keydown';
    }
    let game = new Game(sprites.score, sprites.ball, sprites.player1, sprites.player2); 
    
    setInterval(function() {
        for(let s in sprites){
            if(sprites[s].handle_event && sprites[s].handle_collision){
                console.log("true");
            sprites[s].handle_event(events);
            sprites[s].handle_collision();
            sprites[s].render();
            } else{
            sprites[s].render();
            }
        }
        game.apply_rules(sprites.player1);
        game.apply_rules(sprites.player2);
        game.apply_score();
    },1000/60);
}