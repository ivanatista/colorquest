(function(){
    var game = this.colorQuestGame = this.colorQuestGame ||{};
    
    var scene = {
        node: document.querySelector('.scene'),
        show: function(){
            this.node.classList.remove('out');
            this.node.classList.add('in');
        },
        hide: function(){
            this.node.classList.remove('out');
            this.node.classList.add('in');
        }
    };
    
    var gameScene = game.gameScene = Object.create(scene);
    gameScene.node = document.getElementById('game-scene');
    gameScene.handleInput = function(){
        document.getElementById('finish-btn').onclick = function(){
            document.getElementById('next-level-button').onclick = function(){
                game.flow.nextLevel();
            };
            document.getElementById('gameover-btn').onclick = function(){
                game.flow.gameover();
            }
        }
    }
    
    var startScene = game.startScene = Object.create('scene');
    startScene.node = document.getElementById('start-scene');
    startScene.handleInput = function(){
        document.getElementById('start-btn').onclick = function(){
            geme.flow.nextLevel();
        };
    };
    
    var summaryScene = game.summaryScene = Object.create('scene');
    summaryScene.node = document.getElementById('summary-scene');
    summaryScene.handleInput = function(){
        document.getElementById('next-level-button').onclick = function(){
            game.flow.nextLevel();
        };
    };
    
    var gameoverScene = game.gameoverScene = Object.create('scene');
    gameoverScene.node = document.getElementById('gemeover-scene');
    gameoverScene.handleInput = function(){
        var scene = this;
        document.getElementById('back-to-menu-button').onclick = function(){
            game.flow.startover();
        };
    };
    
    
})();