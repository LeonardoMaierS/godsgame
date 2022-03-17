let obstacles = {
  obs: [],
  timeInsert: 0,
  insertObsAnubis: function () {
    const randon = Math.floor(Math.random() * 3);
    const heightObs = randon === 0 ? 140 : randon === 1 ? 110 : 70;

    this.obs.push({
      x: width,
      y: floor.y - heightObs,
      width: 50,
      sprite: spriteObsAnubis[randon],
    });

    this.timeInsert = 35 + Math.floor(30 * Math.random());
  },
  insertObsAthena: function () {
    const randon = Math.floor(150 * Math.random());

    this.obs.push({
      x: width,
      y: floor.y - 100 - randon,
      width: 120,
      spriteDown: spriteObsDownAthena,
      spriteUp: spriteObsUpAthena,
    });

    this.timeInsert = 70;
  },
  update: function () {
    if (this.timeInsert === 0) {
      if (anubis.play) this.insertObsAnubis();
      if (athena.play) this.insertObsAthena();
    } else {
      this.timeInsert--;
    }

    if (anubis.play) this.updateAnubis();
    if (athena.play) this.updateAthena();
  },
  updateAnubis: function () {
    for (let i = 0, j = this.obs.length; i < j; i++) {
      const obstacles = this.obs[i];
      obstacles.x -= velocity;

      if (
        obstacles.x <= god.x + god.width &&
        god.x <= obstacles.x + obstacles.width &&
        obstacles.y <= god.y + god.height
      ) {
        this.deadGod("anubis");
      } else if (obstacles.x === 0) {
        god.score++;
      } else if (obstacles.x < -obstacles.width) {
        this.obs.splice(i, 1);
        i--;
        j--;
      }
    }
  },
  updateAthena: function () {
    for (let i = 0, j = this.obs.length; i < j; i++) {
      const obstacles = this.obs[i];
      this.obs[i].x -= velocity;

      if (
        (god.x < obstacles.x + obstacles.width &&
          god.x + god.width > obstacles.x &&
          god.y + god.height > obstacles.y) ||
        (god.x < obstacles.x + obstacles.width &&
          god.x + god.width > obstacles.x &&
          god.y + god.height < obstacles.y - 230) ||
        god.y > 600 ||
        god.height + god.y < -100
      ) {
        this.deadGod("athena");
      } else if (obstacles.x == 0) {
        god.score++;
      } else if (obstacles.x < -obstacles.width) {
        this.obs.splice(i, 1);
        i--;
        j--;
      }
    }
  },
  clearObstacles: function () {
    this.obs = [];
  },
  deadGod: function (god) {
    [god].play = false;
    [god].dead = true;
    currentState = states.lose;
    soundDead.play();
  },
  draw: function () {
    shadowOn();
    for (let i = 0, j = this.obs.length; i < j; i++) {
      if (anubis.play) {
        this.obs[i].sprite.draw(this.obs[i].x, this.obs[i].y);
      }

      if (athena.play) {
        this.obs[i].spriteDown.draw(this.obs[i].x, this.obs[i].y);
        this.obs[i].spriteUp.draw(this.obs[i].x, this.obs[i].y - 700);
      }
    }
    shadowOff();
  },
};
