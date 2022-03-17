let bonus = {
  bon: [],
  sprite: 0,
  timeSprite: 1000,
  insertBonusAnubis: function () {
    this.bon.push({
      x: width,
      y: floor.y - 400,
      width: 50,
      sprites: spriteBonusAnubis,
    });
  },
  insertBonusAthena: function () {
    this.bon.push({
      x: width,
      y: 100,
      width: 50,
      sprites: spriteBonusAthena,
    });
  },
  update: function () {
    if (god.score > 0 && god.score % 10 === 0 && this.bon.length === 0) {
      if (anubis.play) this.insertBonusAnubis();
      if (athena.play) this.insertBonusAthena();
    }

    this.bon.forEach((bonus, i) => {
      bonus.x -= velocity;

      if (
        bonus.x <= god.x + god.width &&
        god.x <= bonus.x + bonus.width &&
        bonus.y + 50 >= god.y + god.height
      ) {
        soundBonus.play();
        god.score += 3;
        this.bon.splice(i, 1);
      } else if (bonus.x < -bonus.width) {
        this.bon.splice(i, 1);
      }
    });
  },
  draw: function () {
    shadowOn();
    this.timeSprite = 1000;
    this.sprite = this.sprite + 1;

    this.bon.forEach((bonus) => {
      if (this.sprite < 15) bonus.sprites[0].draw(bonus.x, bonus.y);
      else if (this.sprite < 30) bonus.sprites[1].draw(bonus.x, bonus.y);
      else if (this.sprite < 45) bonus.sprites[2].draw(bonus.x, bonus.y);
      else if (this.sprite < 60) bonus.sprites[1].draw(bonus.x, bonus.y);
      else {
        bonus.sprites[0].draw(bonus.x, bonus.y);
        this.sprite = 0;
      }
    });
    shadowOff();
  },
};
