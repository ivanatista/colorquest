(function(){
    var game = this.colorQuestGame = this.colorQuestGame || {};
    
    //Definicion del composition model
    //Paquete de patrones juntos
    
    var Composition = game.Composition = (function(){
       function Composition(){
           this.data = [];
       }
        return Composition;
    })();
})();