function Sprite(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.draw = function (xCanvas, yCanvas) {
    context.drawImage(
      img,
      this.x,
      this.y,
      this.width,
      this.height,
      xCanvas,
      yCanvas,
      this.width,
      this.height
    );
  };
}

let spriteBackgroundHome = new Sprite(1295, 840, 600, 600),
  spriteButtonAnubis = new Sprite(360, 150, 280, 70),
  spriteButtonAthena = new Sprite(360, 299, 280, 70),
  spriteButtonWukong = new Sprite(353, 428, 290, 100),
  spriteBackgroundAnubis = new Sprite(0, 840, 600, 600),
  spriteFloor = new Sprite(0, 750, 698, 50),
  spriteAnubis = [
    new Sprite(5, 665, 60, 74),
    new Sprite(75, 665, 60, 74),
    new Sprite(150, 665, 60, 74),
    new Sprite(220, 665, 60, 74),
  ],
  spriteBonusAnubis = [
    new Sprite(85, 575, 55, 77),
    new Sprite(165, 575, 50, 77),
    new Sprite(240, 575, 50, 77),
  ],
  spriteObsAnubis = [
    new Sprite(305, 580, 70, 150),
    new Sprite(410, 610, 70, 120),
    new Sprite(510, 650, 70, 80),
  ],
  spriteBackgroundAthena = new Sprite(648, 840, 600, 600),
  spriteBonusAthena = [
    new Sprite(997, 655, 43, 55),
    new Sprite(1127, 655, 48, 57),
    new Sprite(1190, 655, 55, 60),
  ],
  spriteAthena = [
    new Sprite(655, 732, 88, 87),
    new Sprite(765, 732, 88, 87),
    new Sprite(865, 732, 88, 87),
    new Sprite(970, 732, 88, 87),
  ],
  spriteObsUpAthena = new Sprite(27, 60, 130, 478),
  spriteObsDownAthena = new Sprite(192, 60, 130, 478);
