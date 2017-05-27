var config = {
    width: 800,
    height: 600,
    renderer: Phaser.AUTO,
    antialias: true,
    multiTexture: true,
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

game.clearBeforeRender = false;

function preload() {
  game.load.atlas('atlas', 'assets/5-Cards.png', 'assets/5-Cards.json');
  game.renderer.setTexturePriority(['atlas']);
}

var rickroll;
var emp;

function create() {
  game.stage.backgroundColor = '#404040';
  rickroll = game.add.sprite(250, 128, 'atlas');
  rickroll.frameName = 'rickroll.png';
  emp = game.add.sprite(64, 64, 'atlas');
  emp.frameName = 'emp.png';
}
