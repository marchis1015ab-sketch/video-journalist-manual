const state = {
  menu: "team",
  teamYear: "2022",
  playerYear: "2022",
  rankType: "hitter",
};

const player2022Overrides = {
  김성민: {
    name: "김성민",
    number: 40,
    pos: "CF",
    g: 1,
    pa: 3,
    ab: 2,
    h: 0,
    d2: 0,
    d3: 0,
    hr: 0,
    rbi: 0,
    r: 1,
    sb: 2,
    so: 1,
    bb: 1,
    hbp: 0,
    sh: 0,
    sf: 0,
    dp: 1,
    err: 1,
    avg: 0.000,
    obp: 0.333,
    slg: 0.000,
    ops: 0.333,
  },
  김안수: {
    name: "김안수",
    number: 17,
    pos: "2B",
    g: 1,
    pa: 3,
    ab: 2,
    h: 0,
    d2: 0,
    d3: 0,
    hr: 0,
    rbi: 1,
    r: 0,
    sb: 0,
    so: 0,
    bb: 0,
    hbp: 0,
    sh: 0,
    sf: 0,
    dp: 2,
    err: 1,
    avg: 0.000,
    obp: 0.333,
    slg: 0.000,
    ops: 0.333,
  },
};

function formatRate(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return "0.000";
  }
  return numeric.toFixed(3);
}

function toPlayer2022Row(row) {
  const ab = Number(row.AB || 0);
  const h = Number(row.H || 0);
  const bb = Number(row.BB || 0);
  const hbp = Number(row.HBP || 0);
  const sf = Number(row.SF || 0);
  const tb = Number(row.TB || 0);
  const obpDenominator = ab + bb + hbp + sf;
  const obp = obpDenominator ? (h + bb + hbp) / obpDenominator : 0;
  const slg = ab ? tb / ab : 0;

  return {
    name: row.player,
    number: row.number === "" ? "" : Number(row.number),
    pos: row.position || "",
    g: Number(row.G || 0),
    pa: Number(row.PA || 0),
    ab,
    h,
    d2: Number(row.D2 || 0),
    d3: Number(row.D3 || 0),
    hr: Number(row.HR || 0),
    rbi: Number(row.RBI || 0),
    r: Number(row.R || 0),
    sb: Number(row.SB || 0),
    so: Number(row.SO || 0),
    bb,
    hbp,
    sh: Number(row.SH || 0),
    sf,
    dp: Number(row.GIDP || 0),
    err: row.ERR ?? row.E ?? "",
    avg: ab ? h / ab : 0,
    obp,
    slg,
    ops: obp + slg,
  };
}

function getPlayer2022Data() {
  const sourceRows =
    typeof SOURCE_DATA !== "undefined" &&
    SOURCE_DATA.historicalBattersByYear &&
    SOURCE_DATA.historicalBattersByYear["2022"]
      ? SOURCE_DATA.historicalBattersByYear["2022"]
      : [];
  return sourceRows.map((row) => {
    const base = toPlayer2022Row(row);
    const override = player2022Overrides[base.name];
    return override ? override : base;
  });
}

function setActiveMenu() {
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.menu === state.menu);
  });

  document.querySelectorAll('.submenu[data-submenu="team"] [data-year]').forEach((item) => {
    item.classList.toggle("active", state.menu === "team" && item.dataset.year === state.teamYear);
  });

  document.querySelectorAll('.submenu[data-submenu="player"] [data-year]').forEach((item) => {
    item.classList.toggle("active", state.menu === "player" && item.dataset.year === state.playerYear);
  });

  document.querySelectorAll('.submenu[data-submenu="rank"] [data-type]').forEach((item) => {
    item.classList.toggle("active", state.menu === "rank" && item.dataset.type === state.rankType);
  });
}

function renderPlaceholder(title, message) {
  const container = document.getElementById("page-container");
  container.innerHTML = `
    <section class="placeholder-panel">
      <h2>${title}</h2>
      <p>${message}</p>
    </section>
  `;
}

function renderPlayer2022() {
  const container = document.getElementById("page-container");
  const template = document.getElementById("player-2022-template").innerHTML;
  container.innerHTML = template;

  const tbody = document.getElementById("player-2022-body");
  const player2022 = getPlayer2022Data();

  player2022.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.number}</td>
      <td>${p.pos}</td>
      <td>${p.g}</td>
      <td>${p.pa}</td>
      <td>${p.ab}</td>
      <td>${p.h}</td>
      <td>${p.d2}</td>
      <td>${p.d3}</td>
      <td>${p.hr}</td>
      <td>${p.rbi}</td>
      <td>${p.r}</td>
      <td>${p.sb}</td>
      <td>${p.so}</td>
      <td>${p.bb}</td>
      <td>${p.hbp}</td>
      <td>${p.sh}</td>
      <td>${p.sf}</td>
      <td>${p.dp}</td>
      <td>${p.err}</td>
      <td>${formatRate(p.avg)}</td>
      <td>${formatRate(p.obp)}</td>
      <td>${formatRate(p.slg)}</td>
      <td>${formatRate(p.ops)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderTeamYear(year) {
  renderPlaceholder(`팀기록 ${year}`, `${year}년 팀기록 영역입니다.`);
}

function renderPlayerYear(year) {
  if (year === "2022") {
    renderPlayer2022();
    return;
  }
  renderPlaceholder(`선수기록 ${year}`, `${year}년 선수기록 영역입니다.`);
}

function renderTotal() {
  renderPlaceholder("통산기록", "통산기록 영역입니다.");
}

function renderRank(type) {
  const label = type === "hitter" ? "타자" : "투수";
  renderPlaceholder(`통산순위 ${label}`, `통산순위 - ${label} 영역입니다.`);
}

function renderCurrentPage() {
  setActiveMenu();

  if (state.menu === "team") {
    renderTeamYear(state.teamYear);
    return;
  }

  if (state.menu === "player") {
    renderPlayerYear(state.playerYear);
    return;
  }

  if (state.menu === "total") {
    renderTotal();
    return;
  }

  renderRank(state.rankType);
}

function initMenuClicks() {
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      state.menu = item.dataset.menu;
      renderCurrentPage();
    });
  });
}

function initYearClicks() {
  document.querySelectorAll('[data-year="2022"], [data-year="2023"], [data-year="2024"], [data-year="2025"], [data-year="2026"]').forEach((el) => {
    el.addEventListener("click", () => {
      const parent = el.closest(".submenu").dataset.submenu;

      if (parent === "team") {
        state.menu = "team";
        state.teamYear = el.dataset.year;
      }

      if (parent === "player") {
        state.menu = "player";
        state.playerYear = el.dataset.year;
      }

      renderCurrentPage();
    });
  });
}

function initRankClicks() {
  document.querySelectorAll('[data-type="hitter"], [data-type="pitcher"]').forEach((el) => {
    el.addEventListener("click", () => {
      state.menu = "rank";
      state.rankType = el.dataset.type;
      renderCurrentPage();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMenuClicks();
  initYearClicks();
  initRankClicks();
  renderCurrentPage();
});
