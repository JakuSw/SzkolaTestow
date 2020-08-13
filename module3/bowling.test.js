const BowlingGame = require('./bowling')

describe('Bowlimg game test', () =>{

    var game;

    beforeEach(() => {
        game = new BowlingGame();
    });

    test('Should return zero when zero rolled', () => {
        rollGivenTimes(0,20);
        expect(game.getScore()).toBe(0);
    });

    test('Should return 1 when one rolled', () => {
        game.roll(1);
        rollGivenTimes(0,19);
        expect(game.getScore()).toBe(1);
    });

    test('Should return 20 when one rolled 20 times', () => {
        rollGivenTimes(1,20)
        expect(game.getScore()).toBe(20);
    });

    test('Should return correct score when spare during game', () => {
        game.roll(7);
        game.roll(3);
        game.roll(4)
        game.roll(2);
        rollGivenTimes(0,16);
        expect(game.getScore()).toBe(20);
    });
    
    test('Should return correct score when strike during game', () => {
        game.roll(10);
        game.roll(3);
        game.roll(6);
        rollGivenTimes(0,16);
        expect(game.getScore()).toBe(28);
    });


    test('Should return 300 when all throws are strike', () => {
        rollGivenTimes(10,12);
        expect(game.getScore()).toBe(300);
    });

    function rollGivenTimes(pinsRolled, numberOfThrows){
        for(i=0; i<numberOfThrows; i++){ 
            game.roll(pinsRolled);
        }
    }
});