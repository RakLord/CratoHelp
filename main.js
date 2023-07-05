
let game;
let dataDisplays = {};


$(document).ready(function() {
    init();
    tick();
});

function init() {

    game = new Game();
    dataDisplays.points = $("#points-display");
    dataDisplays.pointsPerClick = $("#points-per-click-display");
    dataDisplays.clickValueLevel = $("#click-value-level-display");
    dataDisplays.clickValueCost = $("#click-value-cost-display");

    const btnPointIncrease = $("#btn-point-increase");
    const btnClickValue = $("#btn-click-value");
    
    const btnSave = $("#btn-save");
    const btnLoad = $("#btn-load");

    btnSave.click(function() {
        game.saveGame();
    });

    btnLoad.click(function() {
        game.loadGame();
    });

	btnPointIncrease.click(function() {
		game.points += game.pointsPerClick;
	});

    btnClickValue.click(function() {
        if (game.points > game.clickValueCost) {
            game.points -= game.clickValueCost;
            game.pointsPerClick += 1;
            game.clickValueCost *= 1.5;
            game.clickValueLevel += 1;
        }
    })
}

function updateData(dataDisplays, game) {
    dataDisplays.points.html(game.points);
    dataDisplays.pointsPerClick.html("+"+game.pointsPerClick);
    dataDisplays.clickValueLevel.html(game.clickValueLevel);
    dataDisplays.clickValueCost.html(game.clickValueCost);
}

function tick() {
    game.frameCount++;

    if (game.frameCount >= 60 / game.fpsLimit) {  // Runs every 60 frames
        game.gameFrame++;

        updateData(dataDisplays, game);

        game.frameCount = 0;
    }
    requestAnimationFrame(tick);
}