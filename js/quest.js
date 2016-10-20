(function(){
    var game = this.colorQuestGame = this.colorQuestGame || {};
    
    //level data
    var questLevels = [
        [[5, 6], [3]],
        [[6], [1,2]],
        [[5,6]],
        [[3], [1,2], [4]],
        [[1,2], [3], [4], [5,6]],        
    ];
    // quest model definition
    // quest is a kind of composition, the difference is that quest is specifically used as the question 
    //for player to give the answer.
    // so it comes with comparing logic.
    var Quest = game.Quest = (function(){
        function Quest(level){
            var questData = questLevels[level];
            this.data = questData;
        }
        Quest.prototype = new game.Composition();
        // extends the Quest prototype from Composition.
        return Quest;
    })();
})();