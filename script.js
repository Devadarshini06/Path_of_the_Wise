/* =========================================================
   PATH OF THE WISE
   Interactive Quest Engine
   ========================================================= */


/* =========================================================
   GAME STATE
   ========================================================= */

let memory = {
  cleverness: 0,
  courage: 0,
  humor: 0
};

let currentNode = "start";
let questionCount = 0;
let totalQuestions = 0;
let isProcessing = false;


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const storyDiv = document.getElementById("story");
const choicesDiv = document.getElementById("choices");
const resultDiv = document.getElementById("result");

const cleverVal = document.getElementById("clever-val");
const courageVal = document.getElementById("courage-val");
const humorVal = document.getElementById("humor-val");
const totalVal = document.getElementById("total-val");

const pathName = document.getElementById("path-name");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

const storyIcon = document.getElementById("story-icon");
const storyLabel = document.getElementById("story-label");

const storyCard = document.querySelector(".story-card");


/* =========================================================
   PATH INFORMATION
   ========================================================= */

const pathInfo = {

  start: {
    name: "The Beginning",
    icon: "🌿",
    label: "THE QUEST BEGINS"
  },

  mist: {
    name: "Misty Woods",
    icon: "🌲",
    label: "THE PATH OF CLEVERNESS"
  },

  river: {
    name: "Sparkling River",
    icon: "🌊",
    label: "THE PATH OF DISCOVERY"
  },

  cave: {
    name: "Dark Cave",
    icon: "🦇",
    label: "THE PATH OF COURAGE"
  },

  observe: {
    name: "The Watcher's Path",
    icon: "👁️",
    label: "THE PATH OF OBSERVATION"
  },

  final: {
    name: "The Ancient Tree",
    icon: "🌳",
    label: "THE FINAL TRIAL"
  },

  gold: {
    name: "The Golden Door",
    icon: "🐉",
    label: "THE DRAGON'S CHAMBER"
  },

  silver: {
    name: "The Silver Door",
    icon: "🔮",
    label: "THE MIRROR OF WISDOM"
  },

  wood: {
    name: "The Wooden Door",
    icon: "🪵",
    label: "THE HIDDEN CHAMBER"
  }

};


/* =========================================================
   SCORE UPDATE
   ========================================================= */

function updateScore() {

  const total =
    memory.cleverness +
    memory.courage +
    memory.humor;

  cleverVal.textContent = memory.cleverness;
  courageVal.textContent = memory.courage;
  humorVal.textContent = memory.humor;
  totalVal.textContent = total;

}


/* =========================================================
   RESET GAME
   ========================================================= */

function resetGame() {

  memory = {
    cleverness: 0,
    courage: 0,
    humor: 0
  };

  currentNode = "start";
  questionCount = 0;
  isProcessing = false;

  updateScore();

  showStory("start");
}


/* =========================================================
   ANSWER NORMALIZATION
   ========================================================= */

function normalizeAnswer(answer) {

  return answer
    .toLowerCase()
    .trim()
    .replace(/[.,!?'"`]/g, "")
    .replace(/\s+/g, " ");

}


/* =========================================================
   ANSWER MATCHING
   ========================================================= */

function answerMatches(answer, acceptedAnswers) {

  const normalized = normalizeAnswer(answer);

  return acceptedAnswers.some((accepted) => {

    const expected = normalizeAnswer(accepted);

    return (
      normalized === expected ||
      normalized.includes(expected)
    );

  });

}


/* =========================================================
   STORY DATA
   ========================================================= */

const storyData = {

  /* -------------------------------------------------------
     START
     ------------------------------------------------------- */

  start: {

    text:
      "You stand at the entrance of the mystical forest. Four ancient paths await your footsteps. Which will you walk?",

    type: "choice",

    choices: [

      {
        text: "🌲 Left — Enter the Misty Woods",
        next: "mist1"
      },

      {
        text: "🌊 Right — Follow the Sparkling River",
        next: "river1"
      },

      {
        text: "🦇 Forward — Enter the Dark Cave",
        next: "cave1"
      },

      {
        text: "👁️ Observe — Study Your Surroundings",
        next: "observe1"
      }

    ]

  },


  /* =======================================================
     MISTY WOODS
     ======================================================= */

  mist1: {
    text:
      "Riddle 1: I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    input: true,
    answers: ["echo"],
    reward: { cleverness: 2 },
    next: "mist2"
  },

  mist2: {
    text:
      "Riddle 2: I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    input: true,
    answers: ["map", "a map"],
    reward: { cleverness: 2 },
    next: "mist3"
  },

  mist3: {
    text:
      "Riddle 3: The more you take, the more you leave behind. What am I?",
    input: true,
    answers: ["footsteps", "footstep"],
    reward: {
      cleverness: 1,
      courage: 1
    },
    next: "mist4"
  },

  mist4: {
    text:
      "Riddle 4: I have keys but no doors. I have space, but no room. You can enter, but you can't go outside. What am I?",
    input: true,
    answers: ["keyboard", "a keyboard"],
    reward: { cleverness: 2 },
    next: "mist5"
  },

  mist5: {
    text:
      "Riddle 5: What has a heart that doesn’t beat?",
    input: true,
    answers: ["artichoke", "an artichoke"],
    reward: { cleverness: 2 },
    next: "mist6"
  },

  mist6: {
    text:
      "Riddle 6: What comes once in a minute, twice in a moment, but never in a thousand years?",
    input: true,
    answers: ["m", "the letter m", "letter m"],
    reward: { cleverness: 2 },
    next: "mist7"
  },

  mist7: {
    text:
      "Riddle 7: What has one eye, but cannot see?",
    input: true,
    answers: ["needle", "a needle"],
    reward: { cleverness: 2 },
    next: "mist8"
  },

  mist8: {
    text:
      "Riddle 8: I am always hungry, I must always be fed. The finger I touch will soon turn red. What am I?",
    input: true,
    answers: ["fire", "a fire"],
    reward: {
      cleverness: 1,
      courage: 1
    },
    next: "mist9"
  },

  mist9: {
    text:
      "Riddle 9: What has a neck but no head?",
    input: true,
    answers: ["bottle", "a bottle"],
    reward: { cleverness: 1 },
    next: "mist10"
  },

  mist10: {
    text:
      "Riddle 10: What has many teeth, but cannot bite?",
    input: true,
    answers: ["comb", "a comb"],
    reward: { cleverness: 2 },
    next: "forestDeep"
  },


  /* =======================================================
     SPARKLING RIVER
     ======================================================= */

  river1: {
    text:
      "Riddle 1: I’m tall when young, and short when old. What am I?",
    input: true,
    answers: ["candle", "a candle"],
    reward: { cleverness: 2 },
    next: "river2"
  },

  river2: {
    text:
      "Riddle 2: What has keys but no locks?",
    input: true,
    answers: ["piano", "a piano"],
    reward: { cleverness: 2 },
    next: "river3"
  },

  river3: {
    text:
      "Riddle 3: I go up but never come down. What am I?",
    input: true,
    answers: ["age", "your age"],
    reward: { cleverness: 2 },
    next: "river4"
  },

  river4: {
    text:
      "Riddle 4: The more you take away from me, the bigger I become. What am I?",
    input: true,
    answers: ["hole", "a hole"],
    reward: { cleverness: 2 },
    next: "river5"
  },

  river5: {
    text:
      "Riddle 5: I have branches, but no fruit, trunk, or leaves. What am I?",
    input: true,
    answers: ["bank", "a bank"],
    reward: { cleverness: 2 },
    next: "river6"
  },

  river6: {
    text:
      "Riddle 6: I’m found in socks, scarves, and mittens; often in the paws of playful kittens. What am I?",
    input: true,
    answers: ["yarn", "some yarn"],
    reward: { cleverness: 1 },
    next: "river7"
  },

  river7: {
    text:
      "Riddle 7: What has an eye but cannot see?",
    input: true,
    answers: ["needle", "a needle"],
    reward: { cleverness: 1 },
    next: "river8"
  },

  river8: {
    text:
      "Riddle 8: The more you have of me, the less you see. What am I?",
    input: true,
    answers: ["darkness", "the darkness"],
    reward: { cleverness: 2 },
    next: "river9"
  },

  river9: {
    text:
      "Riddle 9: I can be cracked, made, told, and played. What am I?",
    input: true,
    answers: ["joke", "a joke"],
    reward: { humor: 2 },
    next: "river10"
  },

  river10: {
    text:
      "Riddle 10: I fly without wings. I cry without eyes. What am I?",
    input: true,
    answers: ["cloud", "a cloud"],
    reward: { cleverness: 1 },
    next: "forestDeep"
  },


  /* =======================================================
     DARK CAVE
     ======================================================= */

  cave1: {
    text:
      "Riddle 1: I’m full of holes but can hold water. What am I?",
    input: true,
    answers: ["sponge", "a sponge"],
    reward: { cleverness: 2 },
    next: "cave2"
  },

  cave2: {
    text:
      "Riddle 2: The more you take from me, the bigger I get. What am I?",
    input: true,
    answers: ["hole", "a hole"],
    reward: { cleverness: 2 },
    next: "cave3"
  },

  cave3: {
    text:
      "Riddle 3: I can run but never walk, have a mouth but never talk. What am I?",
    input: true,
    answers: ["river", "a river"],
    reward: {
      cleverness: 1,
      courage: 1
    },
    next: "cave4"
  },

  cave4: {
    text:
      "Riddle 4: What can travel around the world while staying in a corner?",
    input: true,
    answers: ["stamp", "a stamp"],
    reward: { cleverness: 2 },
    next: "cave5"
  },

  cave5: {
    text:
      "Riddle 5: I am not alive, but I grow. I don’t have lungs, but I need air. What am I?",
    input: true,
    answers: ["fire", "a fire"],
    reward: {
      cleverness: 1,
      courage: 1
    },
    next: "cave6"
  },

  cave6: {
    text:
      "Riddle 6: I am always in front of you but can’t be seen. What am I?",
    input: true,
    answers: ["future", "the future"],
    reward: { cleverness: 2 },
    next: "cave7"
  },

  cave7: {
    text:
      "Riddle 7: The more you take, the more I leave behind. What am I?",
    input: true,
    answers: ["footsteps", "footstep"],
    reward: {
      cleverness: 1,
      courage: 1
    },
    next: "cave8"
  },

  cave8: {
    text:
      "Riddle 8: I am light as a feather, yet the strongest man cannot hold me for long. What am I?",
    input: true,
    answers: ["breath", "your breath"],
    reward: { cleverness: 1 },
    next: "cave9"
  },

  cave9: {
    text:
      "Riddle 9: What comes down but never goes up?",
    input: true,
    answers: ["rain", "the rain"],
    reward: { cleverness: 2 },
    next: "cave10"
  },

  cave10: {
    text:
      "Riddle 10: I am cracked, made, told, and played. What am I?",
    input: true,
    answers: ["joke", "a joke"],
    reward: { humor: 2 },
    next: "forestDeep"
  },


  /* =======================================================
     OBSERVATION PATH
     ======================================================= */

  observe1: {
    text:
      "Riddle 1: What has a face and two hands but no arms?",
    input: true,
    answers: ["clock", "a clock"],
    reward: { cleverness: 2 },
    next: "observe2"
  },

  observe2: {
    text:
      "Riddle 2: I’m always in water but never get wet. What am I?",
    input: true,
    answers: ["reflection", "a reflection"],
    reward: { cleverness: 1 },
    next: "observe3"
  },

  observe3: {
    text:
      "Riddle 3: What has cities but no houses, forests but no trees, rivers but no water?",
    input: true,
    answers: ["map", "a map"],
    reward: { cleverness: 2 },
    next: "observe4"
  },

  observe4: {
    text:
      "Riddle 4: What has a head, a tail, is brown, and has no legs?",
    input: true,
    answers: ["penny", "a penny"],
    reward: { cleverness: 1 },
    next: "observe5"
  },

  observe5: {
    text:
      "Riddle 5: I’m light as a feather, yet the strongest man cannot hold me. What am I?",
    input: true,
    answers: ["breath", "your breath"],
    reward: { cleverness: 1 },
    next: "observe6"
  },

  observe6: {
    text:
      "Riddle 6: I can be cracked, told, made, and played. What am I?",
    input: true,
    answers: ["joke", "a joke"],
    reward: { humor: 2 },
    next: "observe7"
  },

  observe7: {
    text:
      "Riddle 7: What comes down but never goes up?",
    input: true,
    answers: ["rain", "the rain"],
    reward: { cleverness: 2 },
    next: "observe8"
  },

  observe8: {
    text:
      "Riddle 8: What has hands but can’t clap?",
    input: true,
    answers: ["clock", "a clock"],
    reward: { cleverness: 1 },
    next: "observe9"
  },

  observe9: {
    text:
      "Riddle 9: What can fill a room but takes up no space?",
    input: true,
    answers: ["light", "the light"],
    reward: { cleverness: 2 },
    next: "observe10"
  },

  observe10: {
    text:
      "Riddle 10: I have teeth but cannot bite. What am I?",
    input: true,
    answers: ["comb", "a comb"],
    reward: { cleverness: 2 },
    next: "forestDeep"
  },


  /* =======================================================
     FINAL FOREST
     ======================================================= */

  forestDeep: {

    text:
      "You arrive beneath an ancient tree whose roots disappear into the earth. Three enchanted doors stand before you. Each promises a different destiny.",

    type: "choice",

    choices: [

      {
        text: "🥇 Enter the Golden Door",
        next: "goldDoor"
      },

      {
        text: "🥈 Enter the Silver Door",
        next: "silverDoor"
      },

      {
        text: "🪵 Enter the Wooden Door",
        next: "woodDoor"
      },

      {
        text: "🔄 Begin Again",
        next: "start",
        reset: true
      }

    ]

  },


  /* =======================================================
     GOLD DOOR
     ======================================================= */

  goldDoor: {

    text:
      "A slumbering dragon guards a mound of ancient gold. One glowing coin rests within reach. Do you dare take it—or leave the treasure untouched?",

    type: "choice",

    choices: [

      {
        text: "🗡️ Risk Everything — Steal the Gold",
        next: "endingGoldSteal"
      },

      {
        text: "🚶 Walk Away — Respect the Dragon",
        next: "endingGoldLeave"
      }

    ]

  },

  endingGoldSteal: {

    text:
      "You move silently through the dragon's chamber and escape with an ancient coin. Your daring choice echoes through the forest.",

    ending:
      "🎉 You are a Bold Wanderer!",

    reward: {
      courage: 2
    }

  },

  endingGoldLeave: {

    text:
      "You lower your hand and leave the treasure untouched. The dragon continues its peaceful sleep, and the forest recognizes your wisdom.",

    ending:
      "🎉 You are a Wise Wanderer!",

    reward: {
      cleverness: 1
    }

  },


  /* =======================================================
     SILVER DOOR
     ======================================================= */

  silverDoor: {

    text:
      "An enchanted mirror rises from the darkness. It asks: “I am gained through journey and time, making you smarter. What am I?”",

    input: true,

    answers: [
      "experience",
      "wisdom",
      "life experience",
      "experience and wisdom"
    ],

    reward: {
      cleverness: 2
    },

    next: "endingSilver"

  },

  endingSilver: {

    text:
      "The mirror glows brighter with every lesson you have learned. As it fades, a peaceful light surrounds you.",

    ending:
      "🎉 You have gained True Enlightenment!"

  },


  /* =======================================================
     WOODEN DOOR
     ======================================================= */

  woodDoor: {

    text:
      "A modest wooden chest sits in the center of a quiet chamber. It radiates a faint golden glow. Do you open it?",

    type: "choice",

    choices: [

      {
        text: "📦 Open the Mysterious Chest",
        next: "endingWoodOpen"
      },

      {
        text: "🚶 Leave It Undisturbed",
        next: "endingWoodLeave"
      }

    ]

  },

  endingWoodOpen: {

    text:
      "Inside the chest, you discover a small glowing gem. It feels warm against your palm, as if it has been waiting for you.",

    ending:
      "🎉 You discovered the Hidden Gem!",

    reward: {
      cleverness: 1,
      courage: 1
    }

  },

  endingWoodLeave: {

    text:
      "You leave the chest exactly as you found it. Sometimes wisdom lies not in what you take, but in what you choose to leave behind.",

    ending:
      "🎉 You leave with an undisturbed heart."

  }

};


/* =========================================================
   CALCULATE TOTAL QUESTIONS
   ========================================================= */

function calculateQuestionCount() {

  totalQuestions = Object.keys(storyData)
    .filter((key) => storyData[key].input)
    .length;

}

calculateQuestionCount();


/* =========================================================
   GET PATH
   ========================================================= */

function getPathInfo(nodeKey) {

  if (nodeKey.startsWith("mist")) {
    return pathInfo.mist;
  }

  if (nodeKey.startsWith("river")) {
    return pathInfo.river;
  }

  if (nodeKey.startsWith("cave")) {
    return pathInfo.cave;
  }

  if (nodeKey.startsWith("observe")) {
    return pathInfo.observe;
  }

  if (
    nodeKey === "forestDeep"
  ) {
    return pathInfo.final;
  }

  if (
    nodeKey === "goldDoor" ||
    nodeKey === "endingGoldSteal" ||
    nodeKey === "endingGoldLeave"
  ) {
    return pathInfo.gold;
  }

  if (
    nodeKey === "silverDoor" ||
    nodeKey === "endingSilver"
  ) {
    return pathInfo.silver;
  }

  if (
    nodeKey === "woodDoor" ||
    nodeKey === "endingWoodOpen" ||
    nodeKey === "endingWoodLeave"
  ) {
    return pathInfo.wood;
  }

  return pathInfo.start;

}


/* =========================================================
   UPDATE PATH UI
   ========================================================= */

function updatePathUI(nodeKey) {

  const info = getPathInfo(nodeKey);

  pathName.textContent = info.name;

  storyIcon.textContent = info.icon;

  storyLabel.textContent = info.label;

}


/* =========================================================
   UPDATE PROGRESS
   ========================================================= */

function updateProgress(nodeKey) {

  if (nodeKey === "start") {

    progressBar.style.width = "0%";

    progressText.textContent = "Ready to begin";

    return;

  }

  if (
    nodeKey === "forestDeep" ||
    nodeKey.includes("Door") ||
    nodeKey.includes("ending")
  ) {

    progressBar.style.width = "100%";

    progressText.textContent = "Final Trial";

    return;

  }

  const pathPrefix =
    nodeKey.match(/^[a-z]+/)?.[0];

  const number =
    parseInt(nodeKey.match(/\d+/)?.[0] || "1");

  if (
    ["mist", "river", "cave", "observe"].includes(pathPrefix)
  ) {

    const percentage =
      Math.min(
        95,
        ((number - 1) / 10) * 100
      );

    progressBar.style.width = `${percentage}%`;

    progressText.textContent =
      `Riddle ${number} of 10`;

    return;

  }

  progressBar.style.width = "100%";

  progressText.textContent = "Complete";

}


/* =========================================================
   APPLY REWARDS
   ========================================================= */

function applyReward(reward) {

  if (!reward) {
    return;
  }

  Object.keys(reward).forEach((stat) => {

    if (memory[stat] !== undefined) {

      memory[stat] += reward[stat];

    }

  });

  updateScore();

}


/* =========================================================
   REWARD MESSAGE
   ========================================================= */

function getRewardMessage(reward) {

  if (!reward) {
    return "";
  }

  const messages = [];

  if (reward.cleverness) {
    messages.push(`Cleverness +${reward.cleverness}`);
  }

  if (reward.courage) {
    messages.push(`Courage +${reward.courage}`);
  }

  if (reward.humor) {
    messages.push(`Humor +${reward.humor}`);
  }

  return messages.join(" • ");

}


/* =========================================================
   SHOW STORY
   ========================================================= */

function showStory(nodeKey) {

  const node = storyData[nodeKey];

  if (!node) {
    console.error(`Story node "${nodeKey}" does not exist.`);
    return;
  }

  currentNode = nodeKey;

  isProcessing = false;

  updatePathUI(nodeKey);
  updateProgress(nodeKey);

  storyDiv.textContent = node.text;

  choicesDiv.innerHTML = "";

  resultDiv.textContent = "";

  resultDiv.className = "result";

  storyCard.classList.remove("ending-card");

  /* -------------------------------------------------------
     RESET
     ------------------------------------------------------- */

  if (node.reset) {
    resetGame();
    return;
  }


  /* -------------------------------------------------------
     ENDING
     ------------------------------------------------------- */

  if (node.ending) {

    storyCard.classList.add("ending-card");

    storyLabel.textContent = "YOUR DESTINY";

    storyIcon.textContent = "🏆";

    storyDiv.innerHTML = `
      <div class="ending-title">
        ${node.ending}
      </div>

      <div class="ending-description">
        ${node.text}
      </div>
    `;

    if (node.reward) {

      applyReward(node.reward);

      const rewardMessage =
        getRewardMessage(node.reward);

      resultDiv.textContent =
        `✦ ${rewardMessage}`;

      resultDiv.classList.add("success");

    }

    const restartBtn =
      document.createElement("button");

    restartBtn.textContent =
      "🔄 Begin a New Journey";

    restartBtn.onclick = resetGame;

    choicesDiv.appendChild(restartBtn);

    return;
  }


  /* -------------------------------------------------------
     INPUT RIDDLE
     ------------------------------------------------------- */

  if (node.input) {

    questionCount++;

    const inputBox =
      document.createElement("input");

    inputBox.type = "text";

    inputBox.placeholder =
      "Enter your answer...";

    inputBox.autocomplete = "off";

    inputBox.setAttribute(
      "aria-label",
      "Your answer"
    );


    const submitBtn =
      document.createElement("button");

    submitBtn.textContent =
      "✦ Submit Answer";


    const handleSubmit = () => {

      if (isProcessing) {
        return;
      }

      const answer =
        inputBox.value.trim();

      if (!answer) {

        resultDiv.textContent =
          "Please enter an answer before continuing.";

        resultDiv.className =
          "result error";

        inputBox.focus();

        return;
      }

      isProcessing = true;

      inputBox.disabled = true;

      submitBtn.disabled = true;


      const correct =
        answerMatches(
          answer,
          node.answers
        );


      if (correct) {

        applyReward(node.reward);

        const rewardMessage =
          getRewardMessage(node.reward);

        resultDiv.textContent =
          rewardMessage
            ? `✨ Correct! ${rewardMessage}`
            : "✨ Correct!";

        resultDiv.className =
          "result success";

      } else {

        resultDiv.textContent =
          "❌ Not quite. The correct answer was revealed to you.";

        resultDiv.className =
          "result error";

      }


      const continueBtn =
        document.createElement("button");

      continueBtn.textContent =
        correct
          ? "Continue the Journey →"
          : "Continue →";

      continueBtn.style.marginTop =
        "12px";

      continueBtn.onclick = () => {

        showStory(node.next);

      };

      choicesDiv.appendChild(
        continueBtn
      );

    };


    submitBtn.onclick =
      handleSubmit;


    inputBox.addEventListener(
      "keydown",
      (event) => {

        if (event.key === "Enter") {
          handleSubmit();
        }

      }
    );


    choicesDiv.appendChild(
      inputBox
    );

    choicesDiv.appendChild(
      submitBtn
    );

    setTimeout(() => {
      inputBox.focus();
    }, 100);

    return;
  }


  /* -------------------------------------------------------
     CHOICES
     ------------------------------------------------------- */

  if (node.choices) {

    node.choices.forEach(
      (choice) => {

        const button =
          document.createElement("button");

        button.textContent =
          choice.text;

        button.onclick = () => {

          if (choice.reset) {

            resetGame();

            return;

          }

          showStory(
            choice.next
          );

        };

        choicesDiv.appendChild(
          button
        );

      }
    );

  }

}


/* =========================================================
   INITIALIZE
   ========================================================= */

updateScore();

showStory("start");