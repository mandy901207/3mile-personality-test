const personalities = {
  collector: {
    name: "沿途收藏家",
    emoji: "📸",
    tagline: "「來都來了，當然要好好感受這一路。」",
    description: [
      "你在意的不只是有沒有騎完，也在意一路看到了什麼、吃到了什麼、去了哪些地方。",
      "風景、美食、城市特色，甚至某個不起眼的小瞬間，都可能成為你環島裡最值得記住的片段。你很可能就是那個會說「這裡超美」、「這個一定要吃」、「等等這張要拍！」的人。"
    ],
    keywords: ["風景", "體驗", "美食", "故事", "回憶"],
    maxScore: 8
  },
  challenger: {
    name: "熱血挑戰者",
    emoji: "🔥",
    tagline: "「越難，我越想證明自己做得到。要拼 🔥」",
    description: [
      "明明很累、很硬，你卻偏偏更想把它完成。長坡、逆風、最後幾公里雖然痛苦，但也正因為難，才更不想認輸。",
      "聽到「明天那段超硬」，別人可能開始擔心，你反而有點想知道：到底能有多硬？"
    ],
    keywords: ["挑戰", "突破", "不服輸", "毅力", "成就感"],
    maxScore: 10
  },
  teammate: {
    name: "隊伍黏著劑",
    emoji: "🤝",
    tagline: "「去哪裡不是唯一重點，跟誰一起完成才最重要。」",
    description: [
      "環島當然要順利完騎，但真正讓這趟旅程變得特別的，往往是一路陪在身邊的那些人。",
      "你重視夥伴和氣氛，也很容易注意大家的狀況。大家累到不想講話時，你可能就是還能冒出一句話，讓全隊重新笑出來的那個人。"
    ],
    keywords: ["夥伴", "陪伴", "氣氛", "共同回憶", "一起完成"],
    maxScore: 10
  },
  explorer: {
    name: "好奇探險家",
    emoji: "🧭",
    tagline: "「不知道今天會遇到什麼，才是旅程最好玩的地方。」",
    description: [
      "你特別喜歡未知、新鮮感和第一次體驗。每天出發前，都不知道今天會是順風一路飛，還是逆風騎到懷疑人生；是好天氣，還是突然遇上大雨。",
      "這些未知不一定輕鬆，但對你來說，也正因如此，環島才更有意思。"
    ],
    keywords: ["未知", "新鮮感", "第一次", "探索", "驚喜"],
    maxScore: 8
  },
  steady: {
    name: "穩定節奏型",
    emoji: "🛡️",
    tagline: "「不是騎最快，是知道怎麼一路騎到底。」",
    description: [
      "你不會一味硬撐，而是習慣先看清楚狀況，再決定怎麼做。你知道什麼時候該出力、什麼時候該休息，也會留意裝備、體力和接下來的安排。",
      "遇到狀況時，你通常比較不容易慌。你不一定是隊伍裡最顯眼的人，卻常常是讓人覺得「有你在就很可靠」的那一個。"
    ],
    keywords: ["節奏", "規劃", "冷靜", "可靠", "穩穩完成"],
    maxScore: 10
  }
};

const questions = [
  {
    id: "q1",
    type: "single",
    title: "看到前面有個很陡很長的陡坡，你的第一念頭是？",
    options: [
      { id: "a", text: "來啊！都到這裡了，當然要把它騎上去。", scores: { challenger: 2 } },
      { id: "b", text: "先調整呼吸跟節奏，慢慢來，不要前面就爆掉。", scores: { steady: 2 } },
      { id: "c", text: "緊跟著大家，一起撐過去！", scores: { teammate: 2 } },
      { id: "d", text: "算了啦，大不了真的不行就下來牽。", scores: { steady: 1, explorer: 1 } },
      { id: "e", text: "加油加油，撐到上面搞不好風景超值得！", scores: { challenger: 1, collector: 1 } }
    ]
  },
  {
    id: "q2",
    type: "single",
    title: "騎了一整天，今天真的超累，但好不容易來到一個你從沒去過的城市……",
    options: [
      { id: "a", text: "都來了！先找找附近有什麼必吃、必看的。", scores: { collector: 2 } },
      { id: "b", text: "雖然真的很累，但難得來一次，還是想出去看看會遇到什麼。", scores: { explorer: 1, collector: 1 } },
      { id: "c", text: "明天還有路要騎，先整理裝備、補充體力、早點休息。", scores: { steady: 2 } },
      { id: "d", text: "看大家要去哪，有人揪就一起！", scores: { teammate: 2 } }
    ]
  },
  {
    id: "q3",
    type: "single",
    title: "已經騎了很久、真的有點累了，但距離今天的終點只剩最後 5 公里，你會？",
    options: [
      { id: "a", text: "剩 5 公里而已，撐一下直接騎完！", scores: { challenger: 2 } },
      { id: "b", text: "不要急，照現在的節奏穩穩騎完就好。", scores: { steady: 2 } },
      { id: "c", text: "緊跟著前面的夥伴，一起完成比較快。", scores: { teammate: 2 } }
    ]
  },
  {
    id: "q4",
    type: "single",
    title: "騎到一半突然下大雨，原本安排也被打亂了。",
    options: [
      { id: "a", text: "先確認現在的狀況，看看怎麼調整最安全、最合理。", scores: { steady: 2 } },
      { id: "b", text: "好吧，跟原本不一樣，但這種意外好像也是環島的一部分。", scores: { explorer: 2 } },
      { id: "c", text: "先看看大家還好不好，別有人心態先炸掉。", scores: { teammate: 2 } },
      { id: "d", text: "雨而已！安全許可的話，該騎的還是把它騎完。", scores: { challenger: 2 } },
      { id: "e", text: "雖然天氣不太好，但雨中的景色好像也有另一種感覺。", scores: { collector: 1, explorer: 1 } }
    ]
  },
  {
    id: "q5",
    type: "single",
    core: true,
    title: "明天是環島很重要的一天，睡前你比較像哪一種？",
    options: [
      { id: "a", text: "先確認明天路線、裝備、補給，東西整理好再睡。", scores: { steady: 2 }, personality: "steady" },
      { id: "b", text: "看看明天會經過哪裡，有沒有什麼值得期待的風景、美食或地方。", scores: { collector: 2 }, personality: "collector" },
      { id: "c", text: "想著明天又可以跟大家一起騎、一起玩，能和這群人留下回憶最重要。", scores: { teammate: 2 }, personality: "teammate" },
      { id: "d", text: "聽說明天那段超硬？很好，我開始期待了，到底有多硬。", scores: { challenger: 2 }, personality: "challenger" },
      { id: "e", text: "不特別查太多，反而想保留一點『明天會遇到什麼』的驚喜。", scores: { explorer: 2 }, personality: "explorer" }
    ]
  },
  {
    id: "q6",
    type: "single",
    title: "如果只能選，你比較想騎哪一種？",
    options: [
      { id: "a", text: "🌊 一路可以看海、沿途很多地方值得停下來看看的路線。", scores: { collector: 2 } },
      { id: "b", text: "⛰️ 比較硬，但騎完一定超有成就感的路線。", scores: { challenger: 2 } },
      { id: "c", text: "🗺️ 從來沒去過、對沿途幾乎一無所知的路線。", scores: { explorer: 2 } }
    ]
  },
  {
    id: "q7",
    type: "single",
    surveyOnly: true,
    title: "環島四大酷刑，硬要選一個，你寧願遇到哪個？",
    options: [
      { id: "wind", text: "🌬️ 逆風", sub: "每踩一下都覺得有人在把你往後拉。" },
      { id: "climb", text: "⛰️ 連續爬坡", sub: "轉過一個彎，發現：怎麼還有？" },
      { id: "rain", text: "🌧️ 下雨", sub: "全身濕、鞋子濕，連靈魂都快濕了。" },
      { id: "heat", text: "☀️ 高溫曝曬", sub: "一路被太陽烤，感覺自己快變成行動烤肉。" }
    ]
  },
  {
    id: "q8",
    type: "multi",
    surveyOnly: true,
    maxSelect: 3,
    title: "如果真的要去環島，你目前最擔心哪些事情？",
    help: "最多選 3 項",
    options: [
      { id: "stamina", text: "🚴 體力不夠／怕自己騎不完", sub: "擔心長距離騎乘負荷不了。" },
      { id: "soreness", text: "💪 身體酸痛／連續騎很多天吃不消", sub: "例如腿痠、肩頸不舒服，或每天騎完恢復不了。" },
      { id: "schedule", text: "⏰ 團體行程與作息適應", sub: "擔心每天集合、騎乘、休息與活動安排較緊湊，自己不一定適應。" },
      { id: "safety", text: "🚗 騎乘安全", sub: "擔心摔車、車禍、道路車流量大，或對道路騎乘感到害怕。" },
      { id: "alone", text: "👥 沒有認識的人一起參加", sub: "擔心自己一個人報名、融不進團體。" },
      { id: "budget", text: "💰 預算考量", sub: "擔心報名、裝備、車輛或其他相關花費。" },
      { id: "gear", text: "🚲 單車／裝備方面的問題", sub: "例如沒有適合的單車、不知道要準備什麼，或擔心途中車輛故障。" },
      { id: "time", text: "📚 個人時間是否能配合", sub: "擔心訓練、認證與正式環島和課業、打工或其他安排衝突。" },
      { id: "other", text: "✏️ 其他", sub: "有其他顧慮也可以自己填。", allowsText: true }
    ]
  }
];

const state = {
  currentIndex: 0,
  answers: {}
};

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionWrap = document.getElementById("question-wrap");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(el => el.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = questions[state.currentIndex];
  progressText.textContent = `${state.currentIndex + 1} / ${questions.length}`;
  progressBar.style.width = `${((state.currentIndex + 1) / questions.length) * 100}%`;
  backBtn.style.visibility = state.currentIndex === 0 ? "hidden" : "visible";
  nextBtn.textContent = state.currentIndex === questions.length - 1 ? "看結果" : "下一題";

  const saved = state.answers[q.id];
  const optionsHtml = q.options.map(opt => {
    const isMulti = q.type === "multi";
    const selected = isMulti ? (saved?.selected || []).includes(opt.id) : saved?.selected === opt.id;
    return `
      <label class="option ${selected ? "selected" : ""}" data-option-id="${opt.id}">
        <input type="${isMulti ? "checkbox" : "radio"}" name="${q.id}" value="${opt.id}" ${selected ? "checked" : ""} />
        <div>
          <div class="option-title">${opt.text}</div>
          ${opt.sub ? `<div class="option-sub">${opt.sub}</div>` : ""}
        </div>
      </label>`;
  }).join("");

  questionWrap.innerHTML = `
    <div class="question-kicker">Q${state.currentIndex + 1}</div>
    <h2 class="question-title">${q.title}</h2>
    ${q.help ? `<div class="question-help">${q.help}</div>` : ""}
    <div class="option-list">${optionsHtml}</div>
    ${q.type === "multi" ? `<div id="multi-error" class="error-text"></div>` : ""}
    ${q.id === "q8" && saved?.selected?.includes("other") ? `<input id="other-text" class="other-input" type="text" maxlength="100" placeholder="請輸入其他顧慮" value="${escapeHtml(saved.otherText || "")}">` : ""}
  `;

  bindOptionEvents(q);
}

function bindOptionEvents(q) {
  const optionEls = questionWrap.querySelectorAll(".option");
  optionEls.forEach(label => {
    const input = label.querySelector("input");
    input.addEventListener("change", () => {
      if (q.type === "single") {
        state.answers[q.id] = { selected: input.value };
        optionEls.forEach(el => el.classList.remove("selected"));
        label.classList.add("selected");
      } else {
        const checked = [...questionWrap.querySelectorAll('input[type="checkbox"]:checked')].map(el => el.value);
        if (checked.length > q.maxSelect) {
          input.checked = false;
          document.getElementById("multi-error").textContent = `最多只能選 ${q.maxSelect} 項。`;
          return;
        }
        document.getElementById("multi-error").textContent = "";
        state.answers[q.id] = {
          selected: checked,
          otherText: state.answers[q.id]?.otherText || ""
        };
        renderQuestion();
      }
    });
  });

  const otherText = document.getElementById("other-text");
  if (otherText) {
    otherText.addEventListener("input", () => {
      if (!state.answers[q.id]) state.answers[q.id] = { selected: ["other"], otherText: "" };
      state.answers[q.id].otherText = otherText.value;
    });
  }
}

function validateCurrent() {
  const q = questions[state.currentIndex];
  const ans = state.answers[q.id];
  if (!ans || (q.type === "single" && !ans.selected) || (q.type === "multi" && (!ans.selected || ans.selected.length === 0))) {
    alert("請先選擇答案再繼續。");
    return false;
  }
  if (q.id === "q8" && ans.selected.includes("other") && !(ans.otherText || "").trim()) {
    alert("你有勾選『其他』，請再填寫內容。");
    return false;
  }
  return true;
}

function calculateResult() {
  const raw = { collector: 0, challenger: 0, teammate: 0, explorer: 0, steady: 0 };

  questions.filter(q => !q.surveyOnly).forEach(q => {
    const ans = state.answers[q.id];
    const opt = q.options.find(o => o.id === ans?.selected);
    if (!opt || !opt.scores) return;
    Object.entries(opt.scores).forEach(([key, value]) => raw[key] += value);
  });

  const rates = {};
  Object.keys(personalities).forEach(key => {
    rates[key] = raw[key] / personalities[key].maxScore;
  });

  const maxRate = Math.max(...Object.values(rates));
  const leaders = Object.keys(rates).filter(key => Math.abs(rates[key] - maxRate) < 1e-9);

  let finalKey = leaders[0];
  let isTie = leaders.length > 1;

  if (leaders.length > 1) {
    const q5 = questions.find(q => q.id === "q5");
    const q5Answer = state.answers.q5?.selected;
    const q5Option = q5.options.find(o => o.id === q5Answer);
    if (q5Option?.personality && leaders.includes(q5Option.personality)) {
      finalKey = q5Option.personality;
      isTie = false;
    }
  }

  if (isTie) {
    // 目前保留既有第一版的固定順序處理極少數仍同分情況；之後若要做雙人格彩蛋可再更換。
    const fallbackOrder = ["challenger", "collector", "steady", "explorer", "teammate"];
    finalKey = fallbackOrder.find(key => leaders.includes(key)) || leaders[0];
  }

  return { finalKey, raw, rates, leaders, unresolvedTie: isTie };
}

function renderResult() {
  const result = calculateResult();
  const p = personalities[result.finalKey];
  document.getElementById("result-emoji").textContent = p.emoji;
  document.getElementById("result-name").textContent = p.name;
  document.getElementById("result-tagline").textContent = p.tagline;
  document.getElementById("result-description").innerHTML = p.description
    .map(text => `<p>${escapeHtml(text)}</p>`)
    .join("");
  document.getElementById("result-keywords").innerHTML = p.keywords
    .map(keyword => `<span class="keyword">${escapeHtml(keyword)}</span>`)
    .join("");

  console.log("匿名測驗結果（目前尚未送出到雲端）", {
    answers: state.answers,
    result
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.getElementById("start-btn").addEventListener("click", () => {
  state.currentIndex = 0;
  renderQuestion();
  showScreen(quizScreen);
});

backBtn.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (!validateCurrent()) return;
  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  } else {
    renderResult();
    showScreen(resultScreen);
  }
});

document.getElementById("restart-btn").addEventListener("click", () => {
  state.currentIndex = 0;
  state.answers = {};
  renderQuestion();
  showScreen(quizScreen);
});
