var config = {
    type: Phaser.AUTO,
    width: 1920*0.6,
    height: 1326*0.6,
    scene: {
        preload: preload,
        create: create,
        update: update
    }

}

var game = new Phaser.Game(config);
var peixinho;

function preload() {
    this.load.image('Sea', 'assets/Finding Nemo Scenery w characters 2.jpg');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('Tubarão', 'assets/peixes/Tubarão do mal.webp');
    this.load.image('Tubarão_2', 'assets/peixes/Tubarão amigo.png')
    this.load.image('Tartaruga_legal', 'assets/peixes/Tartaruga legal.png')
}
function create() {
    this.add.image(1920*0.6/2, 1326*0.6/2, 'Sea');
    this.add.image(400, 550, 'logo').setScale(0.5);
    this.add.image(1000, 550, 'Tubarão_2').setFlip(true, false).setScale(0.8);
    this.add.image(200, 350, 'Tartaruga_legal').setFlip(true, false).setScale(0.8);
    peixinho = this.add.image(1920, 1326, 'Tubarão');

    peixinho.setFlip(true, false);

}
function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}