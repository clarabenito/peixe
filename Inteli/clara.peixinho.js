var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

var peixinho; 

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/baiacu.png');
    this.load.image('concha', 'assets/conchapng.png'); // Corrigido aqui
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(700, 100, 'logo').setScale(0.5);
    peixinho = this.add.image(400, 300, 'peixe').setScale(0.5);
    this.add.image(200, 500, 'concha').setScale(0.3); // Corrigido aqui
}

function update() {
    peixinho.x = this.input.activePointer.x;
    peixinho.y = this.input.activePointer.y;
}

