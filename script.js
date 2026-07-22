let memory = { cleverness: 0, courage: 0, humor: 0 };

function updateScore() {
  const total = memory.cleverness + memory.courage + memory.humor;
  document.getElementById('clever-val').textContent = memory.cleverness;
  document.getElementById('courage-val').textContent = memory.courage;
  document.getElementById('humor-val').textContent = memory.humor;
  document.getElementById('total-val').textContent = total;
}

const storyData = {
  start: {
    text: "You stand at the entrance of the mystical forest. Four ancient paths await your footsteps. Which will you walk?",
    input: false,
    choices: [
      { text: "🌲 Left into Misty Woods", next: "mist1" },
      { text: "🌊 Right along Sparkling River", next: "river1" },
      { text: "🦇 Forward into Dark Cave", next: "cave1" },
      { text: "👁️ Observe Surroundings", next: "observe1" }
    ]
  },

  // LEFT PATH - Misty Woods
  mist1: { text: "Riddle 1: I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", input: true, check: (i) => i.toLowerCase().includes("echo") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "mist2" }) : { text: "❌ Incorrect! The correct answer was: Echo.", next: "mist2" } },
  mist2: { text: "Riddle 2: I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", input: true, check: (i) => i.toLowerCase().includes("map") ? (memory.cleverness += 2, updateScore(), { text: "✨ Nice!", next: "mist3" }) : { text: "❌ Incorrect! The correct answer was: Map.", next: "mist3" } },
  mist3: { text: "Riddle 3: The more you take, the more you leave behind. What am I?", input: true, check: (i) => i.toLowerCase().includes("foot") ? (memory.cleverness += 1, memory.courage += 1, updateScore(), { text: "✨ Brilliant!", next: "mist4" }) : { text: "❌ Incorrect! The correct answer was: Footsteps.", next: "mist4" } },
  mist4: { text: "Riddle 4: I have keys but no doors. I have space, but no room. You can enter, but you can't go outside. What am I?", input: true, check: (i) => i.toLowerCase().includes("piano") || i.toLowerCase().includes("keyboard") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "mist5" }) : { text: "❌ Incorrect! The correct answer was: Piano or Keyboard.", next: "mist5" } },
  mist5: { text: "Riddle 5: What has a heart that doesn’t beat?", input: true, check: (i) => i.toLowerCase().includes("artichoke") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "mist6" }) : { text: "❌ Incorrect! The correct answer was: Artichoke.", next: "mist6" } },
  mist6: { text: "Riddle 6: What comes once in a minute, twice in a moment, but never in a thousand years?", input: true, check: (i) => i.toLowerCase().includes("m") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "mist7" }) : { text: "❌ Incorrect! The correct answer was: The letter 'M'.", next: "mist7" } },
  mist7: { text: "Riddle 7: What has one eye, but cannot see?", input: true, check: (i) => i.toLowerCase().includes("needle") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "mist8" }) : { text: "❌ Incorrect! The correct answer was: Needle.", next: "mist8" } },
  mist8: { text: "Riddle 8: I am always hungry, I must always be fed. The finger I touch will soon turn red. What am I?", input: true, check: (i) => i.toLowerCase().includes("fire") ? (memory.cleverness += 1, memory.courage += 1, updateScore(), { text: "✨ Brilliant!", next: "mist9" }) : { text: "❌ Incorrect! The correct answer was: Fire.", next: "mist9" } },
  mist9: { text: "Riddle 9: What has a neck but no head?", input: true, check: (i) => i.toLowerCase().includes("bottle") ? (memory.cleverness += 1, updateScore(), { text: "✨ Correct!", next: "mist10" }) : { text: "❌ Incorrect! The correct answer was: Bottle.", next: "mist10" } },
  mist10: { text: "Riddle 10: What has many teeth, but cannot bite?", input: true, check: (i) => i.toLowerCase().includes("comb") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "forestDeep" }) : { text: "❌ Incorrect! The correct answer was: Comb.", next: "forestDeep" } },

  // RIGHT PATH - Sparkling River
  river1: { text: "Riddle 1: I’m tall when young, and short when old. What am I?", input: true, check: (i) => i.toLowerCase().includes("candle") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "river2" }) : { text: "❌ Incorrect! The correct answer was: Candle.", next: "river2" } },
  river2: { text: "Riddle 2: What has keys but no locks?", input: true, check: (i) => i.toLowerCase().includes("piano") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "river3" }) : { text: "❌ Incorrect! The correct answer was: Piano.", next: "river3" } },
  river3: { text: "Riddle 3: I go up but never come down. What am I?", input: true, check: (i) => i.toLowerCase().includes("age") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "river4" }) : { text: "❌ Incorrect! The correct answer was: Age.", next: "river4" } },
  river4: { text: "Riddle 4: The more you take away from me, the bigger I become. What am I?", input: true, check: (i) => i.toLowerCase().includes("hole") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "river5" }) : { text: "❌ Incorrect! The correct answer was: Hole.", next: "river5" } },
  river5: { text: "Riddle 5: I have branches, but no fruit, trunk, or leaves. What am I?", input: true, check: (i) => i.toLowerCase().includes("bank") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "river6" }) : { text: "❌ Incorrect! The correct answer was: Bank.", next: "river6" } },
  river6: { text: "Riddle 6: I’m found in socks, scarves, and mittens; often in the paws of playful kittens. What am I?", input: true, check: (i) => i.toLowerCase().includes("yarn") ? (memory.cleverness += 1, updateScore(), { text: "✨ Correct!", next: "river7" }) : { text: "❌ Incorrect! The correct answer was: Yarn.", next: "river7" } },
  river7: { text: "Riddle 7: What has an eye but cannot see?", input: true, check: (i) => i.toLowerCase().includes("needle") ? (memory.cleverness += 1, updateScore(), { text: "✨ Correct!", next: "river8" }) : { text: "❌ Incorrect! The correct answer was: Needle.", next: "river8" } },
  river8: { text: "Riddle 8: The more you have of me, the less you see. What am I?", input: true, check: (i) => i.toLowerCase().includes("darkness") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "river9" }) : { text: "❌ Incorrect! The correct answer was: Darkness.", next: "river9" } },
  river9: { text: "Riddle 9: I can be cracked, made, told, and played. What am I?", input: true, check: (i) => i.toLowerCase().includes("joke") ? (memory.humor += 2, updateScore(), { text: "✨ Correct!", next: "river10" }) : { text: "❌ Incorrect! The correct answer was: Joke.", next: "river10" } },
  river10: { text: "Riddle 10: I fly without wings. I cry without eyes. What am I?", input: true, check: (i) => i.toLowerCase().includes("cloud") ? (memory.cleverness += 1, updateScore(), { text: "✨ Yes!", next: "forestDeep" }) : { text: "❌ Incorrect! The correct answer was: Cloud.", next: "forestDeep" } },

  // FORWARD PATH - Dark Cave
  cave1: { text: "Riddle 1: I’m full of holes but can hold water. What am I?", input: true, check: (i) => i.toLowerCase().includes("sponge") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "cave2" }) : { text: "❌ Incorrect! The correct answer was: Sponge.", next: "cave2" } },
  cave2: { text: "Riddle 2: The more you take from me, the bigger I get. What am I?", input: true, check: (i) => i.toLowerCase().includes("hole") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "cave3" }) : { text: "❌ Incorrect! The correct answer was: Hole.", next: "cave3" } },
  cave3: { text: "Riddle 3: I can run but never walk, have a mouth but never talk. What am I?", input: true, check: (i) => i.toLowerCase().includes("river") ? (memory.cleverness += 1, memory.courage += 1, updateScore(), { text: "✨ Correct!", next: "cave4" }) : { text: "❌ Incorrect! The correct answer was: River.", next: "cave4" } },
  cave4: { text: "Riddle 4: What can travel around the world while staying in a corner?", input: true, check: (i) => i.toLowerCase().includes("stamp") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "cave5" }) : { text: "❌ Incorrect! The correct answer was: Stamp.", next: "cave5" } },
  cave5: { text: "Riddle 5: I am not alive, but I grow. I don’t have lungs, but I need air. What am I?", input: true, check: (i) => i.toLowerCase().includes("fire") ? (memory.cleverness += 1, memory.courage += 1, updateScore(), { text: "✨ Correct!", next: "cave6" }) : { text: "❌ Incorrect! The correct answer was: Fire.", next: "cave6" } },
  cave6: { text: "Riddle 6: I am always in front of you but can’t be seen. What am I?", input: true, check: (i) => i.toLowerCase().includes("future") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "cave7" }) : { text: "❌ Incorrect! The correct answer was: Future.", next: "cave7" } },
  cave7: { text: "Riddle 7: The more you take, the more I leave behind. What am I?", input: true, check: (i) => i.toLowerCase().includes("footsteps") ? (memory.cleverness += 1, memory.courage += 1, updateScore(), { text: "✨ Correct!", next: "cave8" }) : { text: "❌ Incorrect! The correct answer was: Footsteps.", next: "cave8" } },
  cave8: { text: "Riddle 8: I am light as a feather, yet the strongest man cannot hold me for long. What am I?", input: true, check: (i) => i.toLowerCase().includes("breath") ? (memory.cleverness += 1, updateScore(), { text: "✨ Yes!", next: "cave9" }) : { text: "❌ Incorrect! The correct answer was: Breath.", next: "cave9" } },
  cave9: { text: "Riddle 9: What comes down but never goes up?", input: true, check: (i) => i.toLowerCase().includes("rain") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "cave10" }) : { text: "❌ Incorrect! The correct answer was: Rain.", next: "cave10" } },
  cave10: { text: "Riddle 10: I am cracked, made, told, and played. What am I?", input: true, check: (i) => i.toLowerCase().includes("joke") ? (memory.humor += 2, updateScore(), { text: "✨ Yes!", next: "forestDeep" }) : { text: "❌ Incorrect! The correct answer was: Joke.", next: "forestDeep" } },

  // OBSERVE PATH - Observation + Humor
  observe1: { text: "Riddle 1: What has a face and two hands but no arms?", input: true, check: (i) => i.toLowerCase().includes("clock") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "observe2" }) : { text: "❌ Incorrect! The correct answer was: Clock.", next: "observe2" } },
  observe2: { text: "Riddle 2: I’m always in water but never get wet. What am I?", input: true, check: (i) => i.toLowerCase().includes("reflection") ? (memory.cleverness += 1, updateScore(), { text: "✨ Yes!", next: "observe3" }) : { text: "❌ Incorrect! The correct answer was: Reflection.", next: "observe3" } },
  observe3: { text: "Riddle 3: What has cities but no houses, forests but no trees, rivers but no water?", input: true, check: (i) => i.toLowerCase().includes("map") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "observe4" }) : { text: "❌ Incorrect! The correct answer was: Map.", next: "observe4" } },
  observe4: { text: "Riddle 4: What has a head, a tail, is brown, and has no legs?", input: true, check: (i) => i.toLowerCase().includes("penny") ? (memory.cleverness += 1, updateScore(), { text: "✨ Yes!", next: "observe5" }) : { text: "❌ Incorrect! The correct answer was: Penny.", next: "observe5" } },
  observe5: { text: "Riddle 5: I’m light as a feather, yet the strongest man cannot hold me. What am I?", input: true, check: (i) => i.toLowerCase().includes("breath") ? (memory.cleverness += 1, updateScore(), { text: "✨ Correct!", next: "observe6" }) : { text: "❌ Incorrect! The correct answer was: Breath.", next: "observe6" } },
  observe6: { text: "Riddle 6: I can be cracked, told, made, and played. What am I?", input: true, check: (i) => i.toLowerCase().includes("joke") ? (memory.humor += 2, updateScore(), { text: "✨ Yes!", next: "observe7" }) : { text: "❌ Incorrect! The correct answer was: Joke.", next: "observe7" } },
  observe7: { text: "Riddle 7: What comes down but never goes up?", input: true, check: (i) => i.toLowerCase().includes("rain") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "observe8" }) : { text: "❌ Incorrect! The correct answer was: Rain.", next: "observe8" } },
  observe8: { text: "Riddle 8: What has hands but can’t clap?", input: true, check: (i) => i.toLowerCase().includes("clock") ? (memory.cleverness += 1, updateScore(), { text: "✨ Yes!", next: "observe9" }) : { text: "❌ Incorrect! The correct answer was: Clock.", next: "observe9" } },
  observe9: { text: "Riddle 9: What can fill a room but takes up no space?", input: true, check: (i) => i.toLowerCase().includes("light") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "observe10" }) : { text: "❌ Incorrect! The correct answer was: Light.", next: "observe10" } },
  observe10: { text: "Riddle 10: I have teeth but cannot bite. What am I?", input: true, check: (i) => i.toLowerCase().includes("comb") ? (memory.cleverness += 2, updateScore(), { text: "✨ Yes!", next: "forestDeep" }) : { text: "❌ Incorrect! The correct answer was: Comb.", next: "forestDeep" } },

  // COMMON FINAL
  forestDeep: {
    text: "You arrive deep at the ancient tree. Three enchanted doors stand before you: Gold, Silver, and Wood.",
    input: false,
    choices: [
      { text: "🥇 Open Gold Door", next: "goldDoor" },
      { text: "🥈 Open Silver Door", next: "silverDoor" },
      { text: "🪵 Open Wooden Door", next: "woodDoor" },
      { text: "🔄 Restart Quest", next: "start" }
    ]
  },
  goldDoor: { text: "A slumbering Dragon guards a mound of gold. Do you dare steal or leave?", input: false, choices: [{ text: "🗡️ Steal Gold", next: "endingGoldSteal" }, { text: "🚶 Leave Safely", next: "endingGoldLeave" }] },
  endingGoldSteal: { text: "You stealthily escape with an ancient coin! (Courage +2)", result: () => { memory.courage += 2; updateScore(); return "🎉 Path Complete: You are a Bold Wanderer!"; } },
  endingGoldLeave: { text: "You walk away peacefully, respecting the dragon's territory. (Cleverness +1)", result: () => { memory.cleverness += 1; updateScore(); return "🎉 Path Complete: You are a Wise Wanderer!"; } },
  silverDoor: { text: "An enchanted mirror asks: 'I am gained through journey and time, making you smarter. What am I?'", input: true, check: (i) => i.toLowerCase().includes("experience") || i.toLowerCase().includes("wisdom") ? (memory.cleverness += 2, updateScore(), { text: "✨ Correct!", next: "endingSilver" }) : { text: "❌ Incorrect! The answer was Experience.", next: "endingSilver" } },
  endingSilver: { text: "The mirror glows as you exit into enlightenment.", result: () => "🎉 Path Complete: You have gained True Enlightenment!" },
  woodDoor: { text: "A modest wooden chest sits in the center of the room. Open or leave?", input: false, choices: [{ text: "📦 Open Chest", next: "endingWoodOpen" }, { text: "🚶 Leave It", next: "endingWoodLeave" }] },
  endingWoodOpen: { text: "Inside, you find a small glowing gem! (Cleverness +1, Courage +1)", result: () => { memory.cleverness += 1; memory.courage += 1; updateScore(); return "🎉 Path Complete: You found a Hidden Gem!"; } },
  endingWoodLeave: { text: "You leave the chest undisturbed.", result: () => "🎉 Path Complete: You leave with an undisturbed heart." }
};

const storyDiv = document.getElementById('story');
const choicesDiv = document.getElementById('choices');
const resultDiv = document.getElementById('result');

function showStory(nodeKey) {
  const node = storyData[nodeKey];
  storyDiv.textContent = node.text;
  choicesDiv.innerHTML = '';
  resultDiv.textContent = '';

  if (node.input) {
    const inputBox = document.createElement('input');
    inputBox.type = "text";
    inputBox.placeholder = "Type your answer here...";
    
    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Submit Answer";
    
    const handleSubmit = () => {
      if (!inputBox.value.trim()) return;
      const result = node.check(inputBox.value);
      resultDiv.textContent = result.text;
      setTimeout(() => showStory(result.next), 1500);
    };

    submitBtn.onclick = handleSubmit;
    inputBox.onkeydown = (e) => { if (e.key === "Enter") handleSubmit(); };

    choicesDiv.appendChild(inputBox);
    choicesDiv.appendChild(submitBtn);
  } else if (node.choices) {
    node.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.textContent = choice.text;
      btn.onclick = () => showStory(choice.next);
      choicesDiv.appendChild(btn);
    });
  } else if (node.result) {
    resultDiv.textContent = node.result();
    const restartBtn = document.createElement('button');
    restartBtn.textContent = "🔄 Begin A New Path";
    restartBtn.onclick = () => { memory = { cleverness: 0, courage: 0, humor: 0 }; updateScore(); showStory('start'); };
    choicesDiv.appendChild(restartBtn);
  }
}

updateScore();
showStory('start');