class Game {
    constructor() {
        this.version = "0.0.1";

        this.fpsLimit = 30;
        this.gameFrame = 0;
        this.frameCount = 0;

        this.points = 0;
        this.pointsPerClick = 1;
        this.clickValueCost = 50;
        this.clickValueLevel = 0;
    
    }

    saveGame() {
        let gameData = JSON.stringify(this);
        localStorage.setItem("gameData", gameData);
        console.log("saved");
    }

    loadGame() {
        let gameData = localStorage.getItem("gameData");
        let savedGame = JSON.parse(gameData);
        Object.assign(this, savedGame);
        console.log(this);
        console.log("loaded");
    }
}