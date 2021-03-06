function running() {
  updateStatus();
  draw();

  window.requestAnimationFrame(running);
}

function click(event) {
  const _playGame = () => {
    if (currentState === states.play) {
      currentState = states.playing;
    } else if (currentState === states.playing) {
      god.jump();
    }
  };

  if (currentState === states.play) {
    soundHome.play();
  }

  if (
    anubis.play ||
    (currentState === states.play &&
      event.x > window.innerWidth * 0.35 &&
      event.x < window.innerWidth * 0.65 &&
      event.y > window.innerHeight * 0.48 &&
      event.y < window.innerHeight * 0.55)
  ) {
    soundHome.stop();
    soundPlayAnubis.play();
    anubis.play = true;
    _playGame();
  }

  if (
    athena.play ||
    (currentState === states.play &&
      event.x > window.innerWidth * 0.35 &&
      event.x < window.innerWidth * 0.65 &&
      event.y > window.innerHeight * 0.57 &&
      event.y < window.innerHeight * 0.63)
  ) {
    soundHome.stop();
    soundPlayAthena.play();
    athena.play = true;
    _playGame();
  }

  if (currentState === states.lose && god.y > 10 * height) {
    anubis.play = false;
    athena.play = false;
    wukong.play = false;
    currentState = states.play;

    soundPlayAnubis.stop();
    soundPlayAthena.stop();
    soundHome.play();

    obstacles.clearObstacles();
    god.reset();
    god.update();
  }
}

function updateStatus() {
  floor.update();

  if (currentState === states.playing || currentState === states.lose) {
    god.update();

    if (currentState === states.playing) {
      obstacles.update();
      bonus.update();
    }
  }
}

function draw() {
  if (anubis.play) spriteBackgroundAnubis.draw(0, 0, 600, 600);
  else if (athena.play) spriteBackgroundAthena.draw(0, 0, 600, 600);
  else spriteBackgroundHome.draw(0, 0, 600, 600);

  if (currentState === states.playing) {
    floor.draw();
    bonus.draw();
    obstacles.draw();
  }

  if (currentState === states.play) {
    spriteButtonWukong.draw(width / 2 - 150, height / 2 + 110);

    spriteButtonAthena.draw(width / 2 - 140, height / 2 + 60);

    spriteButtonAnubis.draw(width / 2 - 150, height / 2 - 20);
  } else if (currentState === states.lose) {
    floor.draw();

    // @todo - set background image
    // context.fillStyle = "black";
    // context.fillRect(width / 2 - 50, height / 2 - 50, 100, 100);

    context.save();
    context.translate(width / 2, height / 2);
    context.fillStyle = "#fff";

    shadowOn();
    if (god.score > record) context.fillText("New Record!", -150, -65);
    else context.fillText(`Record: ${record}`, -110, -65);

    context.fillText(`Score: ${god.score}`, god.score < 10 ? -93 : -100, 19);
    shadowOff();

    context.restore();
  }

  god.draw();

  if (currentState === states.playing) {
    shadowOn();
    context.fillStyle = "#fff";
    context.font = "20px Arial";
    context.fillText("Score:", 20, 55);
    context.font = "50px Arial";
    context.fillText(god.score, 80, 55);
    shadowOff();
  }
}

function shadowOn() {
  context.shadowColor = "black";
  context.shadowBlur = 7;
  context.lineWidth = 5;
}

function shadowOff() {
  context.shadowBlur = 0;
  context.lineWidth = 0;
}
