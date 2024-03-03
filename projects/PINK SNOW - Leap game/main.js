const snowGame = document.getElementById("snow-game");
const snowGameLevel = document.getElementById("snow-game-level");
const snowGameLevelMarker = document.getElementById("snow-game-level-marker");
const clickLayer = document.getElementById("click-layer");
const startScreen = document.getElementById("start");
const scoreScreen = document.getElementById("score");
const fullscreen = document.getElementById("fullscreen");

const rhythm = 300;
let width = 30;
let lifes = 2;
let z = 0;
let position = [];
let time = -1;
let currentLevel = 0;
let score = 0;
let rocks = [];
const levels = [
  [
    "--o--",
    "-----",
    "-----",
    "-----",
    "--xxx",
    "-----",
    "----x",
    "xx---",
    "-----",
    "x----",
    "-----",
    "xxx--",
    "-----",
    "-----",
    "x----",
    "-----",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "-----",
    "--x-x",
    "-----",
    "x--xx",
    "-----",
    "----x",
    "xx---",
    "-----",
    "---xx",
    "-----",
    "-----",
    "-xxxx",
    "-----",
    "-----",
    "xxx--",
    "-----",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "----x",
    "-----",
    "xx-xx",
    "--xx-",
    "x--xx",
    "-----",
    "xxxx-",
    "xx---",
    "-----",
    "---xx",
    "--xx-",
    "-----",
    "xxxx-",
    "-----",
    "---ll",
    "x----",
    "---xx",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "-----",
    "xx-xx",
    "--xx-",
    "x--xx",
    "-----",
    "xxxx-",
    "xx---",
    "xx---",
    "---xx",
    "--xxx",
    "-xxl-",
    "xxxx-",
    "-----",
    "---xx",
    "x--ll",
    "---xx",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "xxxx-",
    "---ll",
    "xx--x",
    "-----",
    "x--xx",
    "-----",
    "xxx--",
    "ll---",
    "xx-xx",
    "-----",
    "--xxx",
    "-----",
    "xxxx-",
    "-----",
    "-xxxx",
    "xl---",
    "---xx",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "xx--x",
    "ll---",
    "xxx--",
    "----x",
    "x--xx",
    "----x",
    "xxx--",
    "----x",
    "--xxx",
    "--llx",
    "--xxx",
    "----x",
    "xxx--",
    "llx--",
    "x---x",
    "x--x-",
    "--x-x",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "xx--x",
    "ll---",
    "x-xxx",
    "----x",
    "x--xx",
    "----x",
    "xxxx-",
    "----x",
    "-xxxx",
    "--llx",
    "--xxx",
    "----x",
    "xxxx-",
    "llx--",
    "x-x-x",
    "x--x-",
    "--x-x",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "ll-ll",
    "ll---",
    "-----",
    "-llll",
    "---ll",
    "x--ll",
    "----x",
    "xll-x",
    "----x",
    "x-lll",
    "-----",
    "--llx",
    "--llx",
    "-----",
    "-----",
    "lllx-",
    "llx--",
    "-----",
    "x-llx",
    "x--x-",
    "--l-x",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "--xxx",
    "ll---",
    "-----",
    "x-lll",
    "---ll",
    "x--ll",
    "--xxx",
    "x---x",
    "----x",
    "xxl--",
    "-----",
    "--llx",
    "--llx",
    "-----",
    "-----",
    "l--x-",
    "llx--",
    "-----",
    "x---x",
    "x--x-",
    "--l-x",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "---xx",
    "-----",
    "-----",
    "-xlll",
    "x--ll",
    "x--ll",
    "-xxxx",
    "x---x",
    "--xxx",
    "-xxxx",
    "x---x",
    "--xxx",
    "x---x",
    "xxl--",
    "-----",
    "--llx",
    "x-llx",
    "xx---",
    "-----",
    "l--x-",
    "llx--",
    "-----",
    "-----",
    "-----",
    "llll-",
    "x---x",
    "x--x-",
    "--l-x",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "x-x-x",
    "-----",
    "-x-x-",
    "x-x-x",
    "-x-x-",
    "-x-x-",
    "x-x-x",
    "-x-x-",
    "-x-x-",
    "x-x-x",
    "-x-x-",
    "-----",
    "-x-x-",
    "x-x-x",
    "-----",
    "-----",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "x-x-x",
    "-----",
    "-x-xl",
    "x-xlx",
    "-x-x-",
    "-x-x-",
    "x-x-x",
    "lx-x-",
    "lx-x-",
    "xlx-x",
    "lx-x-",
    "l----",
    "-x-xl",
    "x-x-x",
    "---ll",
    "---ll",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "-----",
    "x---x",
    "-x-xl",
    "x-xlx",
    "-x-x-",
    "-x-x-",
    "x-x--",
    "-x-x-",
    "-x-x-",
    "--x-x",
    "---x-",
    "lx-x-",
    "xl---",
    "lx-x-",
    "---xl",
    "x-x-x",
    "---ll",
    "---ll",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "-----",
    "x-x-x",
    "-x-xl",
    "x-xlx",
    "-x-x-",
    "-x-x-",
    "x-x-x",
    "lx-x-",
    "lx-x-",
    "xlx-x",
    "lx-x-",
    "-x-xl",
    "x-xlx",
    "-x-x-",
    "-x-x-",
    "x-x-x",
    "lx-x-",
    "lx-x-",
    "xlx-x",
    "lx-x-",
    "-x-xl",
    "x-x-x",
    "---ll",
    "---ll",
    "eeeee"
  ],
  ["--o--", "-----", "-----", "ll-ll", "eeeee"],
  [
    "l-o--",
    "-l---",
    "--l--",
    "l--l-",
    "-l--l",
    "--l--",
    "---l-",
    "----l",
    "eeeee"
  ],
  [
    "l-o-x",
    "-l-x-",
    "--l--",
    "lx-l-",
    "xl--l",
    "--l-x",
    "---l-",
    "--x-l",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "xxxx-",
    "-----",
    "-xxxx",
    "-----",
    "xxxx-",
    "-----",
    "-xxxx",
    "-----",
    "xxxx-",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "-llll",
    "-----",
    "llll-",
    "-----",
    "-llll",
    "-----",
    "llll-",
    "-----",
    "-----",
    "eeeee"
  ],
  [
    "--o--",
    "-----",
    "-----",
    "-----",
    "xxx--",
    "-xxxx",
    "x--xx",
    "--xxx",
    "llll-",
    "x-xxx",
    "llll-",
    "x-xxx",
    "-xx--",
    "x-xxx",
    "-xx--",
    "x-xxx",
    "-xx--",
    "eeeee"
  ],
  [
    "xxoxx",
    "ll-ll",
    "xx-xx",
    "ll-ll",
    "xx-xx",
    "ll-ll",
    "xx-xx",
    "ll-ll",
    "xx-xx",
    "ll-ll",
    "xx-xx",
    "ll-ll",
    "xx-xx",
    "ll-ll",
    "xx-xx",
    "ll-ll",
    "xx-xx",
    "ll-ll",
    "eeeee"
  ]
];

let intervalId;

const player = document.createElement("div");
player.classList.add("snow-game__player");

const positionPlayer = (x, y) => {
  position = [x, y];
  setPlayerData();
};

const setPlayerData = () => {
  player.style = `--top: ${position[1]}; --left: ${position[0]}; --lifes: ${lifes}`;
};

const buildLevel = () => {
  clearInterval(intervalId);
  if (currentLevel === levels.length) {
    scoreScreen.classList.remove("snow-game__score--hidden");
    scoreScreen.innerHTML = `Score: ${score}`;
    return;
  }
  snowGameLevel.innerHTML = "";
  lifes = 2;
  time = -1;
  rocks = [];
  snowGameLevelMarker.innerHTML = currentLevel;
  const level = levels[currentLevel];

  document.body.style = `--cell: ${width / level[0].length}rem`;

  level.forEach((row, rowIndex) => {
    const cells = row.split("");
    cells.forEach((cell, cellIndex) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("snow-game__cell");
      if (cell === "o") {
        positionPlayer(cellIndex, rowIndex);
      } else if (cell === "x") {
        rocks.push([cellIndex, rowIndex, "rock"]);
        newDiv.classList.add("snow-game__cell--rock");
      } else if (cell === "l") {
        rocks.push([cellIndex, rowIndex, "lava"]);
        newDiv.classList.add("snow-game__cell--lava");
      } else if (cell === "e") {
        newDiv.classList.add("snow-game__cell--end");
      }
      snowGameLevel.appendChild(newDiv);
    });
    snowGameLevel.appendChild(player);
  });
  // The snow starts rolling
  intervalId = setInterval(() => {
    time++;
    snowGame.style = `--time: ${time};`;
    positionPlayer(position[0], position[1] + 1);
    const collisions = rocks.filter(
      (rock) => rock[0] === position[0] && rock[1] === position[1] - 1
    );

    if (lifes <= 0) {
      buildLevel();
    } else if (position[1] === levels[currentLevel].length) {
      currentLevel = currentLevel + 1;
      score = score + lifes;
      buildLevel();
    } else if (collisions.length && z === 0) {
      if (collisions[0][2] === "rock") {
        lifes = lifes - 1;
      } else if (collisions[0][2] === "lava") {
        lifes = lifes - 2;
      }
      setPlayerData();
    }
  }, rhythm);
};

buildLevel();

const jump = () => {
  if (z === 0) {
    z = 1;
    player.classList.add("snow-game__player--jump");
    setTimeout(() => {
      setTimeout(() => (z = 0), rhythm);
      player.classList.remove("snow-game__player--jump");
    }, rhythm);
  }
};

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    positionPlayer(
      Math.min(position[0] + 1, levels[currentLevel][0].length - 1),
      position[1]
    );
  } else if (event.key === "ArrowLeft") {
    positionPlayer(Math.max(position[0] - 1, 0), position[1]);
  } else if (event.key === "ArrowUp") {
    jump();
  }
});

fullscreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});

startScreen.addEventListener("click", () => {
  startScreen.classList.add("snow-game__start--hidden");
});

clickLayer.addEventListener("click", (event) => {
  if (event.clientY < window.innerHeight / 3) {
    jump();
  } else if (event.clientX < window.innerWidth / 2) {
    positionPlayer(Math.max(position[0] - 1, 0), position[1]);
  } else {
    positionPlayer(
      Math.min(position[0] + 1, levels[currentLevel][0].length - 1),
      position[1]
    );
  }
});
