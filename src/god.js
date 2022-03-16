let god = {
  x: 50,
  y: -100,
  width: 30,
  height: 70,
  gravity: 2,
  velocity: 0,
  forceJump: 20,
  numberJumps: 0,
  score: 0,
  sprite: 1,
  timeSprite: 1000,
  update: function () {
    this.y += this.velocity;

    if (
      anubis.play &&
      this.y > floor.y - this.height &&
      currentState !== states.lose
    ) {
      this.y = floor.y - this.height;
      this.numberJumps = 0;
      this.velocity = 0;
    }

    if (anubis.play || currentState === states.lose) {
      this.velocity += this.gravity;
    }
    if (athena.play || currentState === states.lose) {
      this.velocity += 2;
    }

    if (this.timeSprite === 0) this.draw();
    else this.timeSprite--;
  },
  jump: function () {
    if (this.numberJumps < maxJumpAnubis || athena.play) {
      soundJump.play();
      this.velocity = anubis.play ? -25 : -20;
      this.numberJumps++;
    }
  },
  draw: function () {
    shadowOn();
    this.timeSprite = 1000;
    this.sprite = this.sprite + 1;

    if (anubis.play || anubis.dead) {
      if (this.sprite < 20)
        spriteAnubis[0].draw(this.x, this.y, this.width, this.height);
      else if (this.sprite < 40)
        spriteAnubis[1].draw(this.x, this.y, this.width, this.height);
      else if (this.sprite < 60)
        spriteAnubis[2].draw(this.x, this.y, this.width, this.height);
      else if (this.sprite < 80) {
        spriteAnubis[3].draw(this.x, this.y, this.width, this.height);
      } else {
        spriteAnubis[0].draw(this.x, this.y, this.width, this.height);
        this.sprite = 0;
      }
    }

    if (athena.play || athena.dead) {
      if (this.sprite < 20)
        spriteAthena[0].draw(this.x, this.y, this.width, this.height);
      else if (this.sprite < 40)
        spriteAthena[1].draw(this.x, this.y, this.width, this.height);
      else if (this.sprite < 60)
        spriteAthena[2].draw(this.x, this.y, this.width, this.height);
      else if (this.sprite < 80)
        spriteAthena[3].draw(this.x, this.y, this.width, this.height);
      else {
        spriteAthena[0].draw(this.x, this.y, this.width, this.height);
        this.sprite = 0;
      }
    }

    shadowOff();
  },
  reset: function () {
    if (this.score > record) {
      localStorage.setItem("record", this.score);
      record = this.score;
    }

    this.y = -100;
    this.score = 0;
    this.velocity = 0;
    this.x = 50;
    this.gravity = 2;
    this.velocity = 0;
    this.forceJump = 20;
    this.numberJumps = 0;
  },
};
