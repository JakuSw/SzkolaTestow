module.exports = class BowlingGame{
    constructor(){
        this.score = 0;
        this.tableOfPoints = [];
    }

    getScore(){
        let positionInTableOfFrames = 0;
        for (let i = 0; i < 10; i++) {
            if(this.isSpare(positionInTableOfFrames)){
                this.score += 10 + this.tableOfPoints[positionInTableOfFrames+2];
                positionInTableOfFrames += 2;
            }else if (this.isStrike(positionInTableOfFrames)) {
                this.score += 10 + this.tableOfPoints[positionInTableOfFrames + 1] + this.tableOfPoints[positionInTableOfFrames + 2];
                positionInTableOfFrames++;
            }else{
                let firstThrow = isNaN(this.tableOfPoints[positionInTableOfFrames]) ? 0 : this.tableOfPoints[positionInTableOfFrames];
                let secondThrow = isNaN(this.tableOfPoints[positionInTableOfFrames + 1]) ? 0 : this.tableOfPoints[positionInTableOfFrames + 1];
                this.score += firstThrow + secondThrow;
                positionInTableOfFrames += 2;
            }       
        }
        return this.score;
    }

    roll(pins){
        this.tableOfPoints.push(pins);
    }

    isSpare(index){
        return this.tableOfPoints[index] + this.tableOfPoints[index + 1] == 10;
    }

    isStrike(index){
        return this.tableOfPoints[index] == 10;
    }


}