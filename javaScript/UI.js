export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
    }
    draw(context){
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        let ptsRestants = 20 - this.game.score;
        if (ptsRestants < 0) {ptsRestants = ': Hot dog'}
        // Objectif 
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillText('Points restant avant boost ' + ptsRestants, 20, 50)
        // Score
        context.fillText('Score: ' + this.game.score, 20, 80);
        // Time
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 110)
        
        //game over messages 
        if (this.game.gameOver){
            context.textAlign = 'center';

            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            if(this.game.score > 75){
            context.fillText('Bien joué !', this.game.width * 0.5, this.game.height * 0.5 - 20);

            context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
            context.fillText('Une légende est née ...', this.game.width * 0.5, this.game.height * 0.5 + 20);

            context.fillText('Raffraichis la page pour rejouer !', this.game.width * 0.5, this.game.height * 0.5 + 70);
            
            } else {
                context.fillText('Raté !!!!!!!', this.game.width * 0.5, this.game.height * 0.5 - 20);

                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('Oses-tu retenter ta chance ??', this.game.width * 0.5, this.game.height * 0.5 + 20);
                
                context.fillText('Raffraischis la page pour rejouer !', this.game.width * 0.5, this.game.height * 0.5 + 70);
            }
            
            
        }
        context.restore();
    }
}