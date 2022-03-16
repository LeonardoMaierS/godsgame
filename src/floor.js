let floor = {
  y: 550,
  x: 10,
  update: function () {
    this.x -= velocity;

    if (this.x < -300) this.x += 300;
  },
  draw: function () {
    if (anubis.play) {
      spriteFloor.draw(this.x, this.y);
      spriteFloor.draw(this.x - 101 + spriteFloor.width, this.y);
    }
  },
  reset: function () {
    this.x = 10;
  },
};
