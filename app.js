const state = {
  menu: "team",
  teamYear: "2022",
  playerYear: "2022",
  playerType: "hitter",
  rankType: "hitter",
};

const hitterColumns = [
  { label: "이름", key: "name" },
  { label: "등번호", key: "number" },
  { label: "포지션", key: "pos" },
  { label: "게임수", key: "g" },
  { label: "타석", key: "pa" },
  { label: "타수", key: "ab" },
  { label: "총안타", key: "h" },
  { label: "안타", key: "h1" },
  { label: "2루타", key: "d2" },
  { label: "3루타", key: "d3" },
  { label: "홈런", key: "hr" },
  { label: "루타", key: "tb" },
  { label: "타점", key: "rbi" },
  { label: "득점", key: "r" },
  { label: "도루", key: "sb" },
  { label: "도루실패", key: "cs" },
  { label: "희생타", key: "sh" },
  { label: "희생플라이", key: "sf" },
  { label: "볼넷", key: "bb" },
  { label: "사구", key: "hbp" },
  { label: "사사구", key: "bbhbp" },
  { label: "삼진", key: "so" },
  { label: "병살", key: "dp" },
  { label: "AVG", key: "avg" },
  { label: "출루율OBP", key: "obp" },
  { label: "장타율SLG", key: "slg" },
  { label: "OPS", key: "ops" },
];

const pitcherColumns = [
  { label: "이름", key: "name" },
  { label: "등번호", key: "number" },
  { label: "출장", key: "g" },
  { label: "선발", key: "gs" },
  { label: "구원", key: "gr" },
  { label: "승", key: "w" },
  { label: "패", key: "l" },
  { label: "세", key: "sv" },
  { label: "홀드", key: "hld" },
  { label: "이닝", key: "ipDisplay" },
  { label: "타자", key: "bf" },
  { label: "타수", key: "ab" },
  { label: "피안타", key: "h" },
  { label: "피홈런", key: "hr" },
  { label: "희생타", key: "sh" },
  { label: "희생플라이", key: "sf" },
  { label: "볼넷", key: "bb" },
  { label: "사구", key: "hbp" },
  { label: "사사구", key: "bbhbp" },
  { label: "삼진", key: "so" },
  { label: "폭투", key: "wp" },
  { label: "보크", key: "bk" },
  { label: "실점", key: "r" },
  { label: "자책점", key: "er" },
  { label: "승률", key: "winPct" },
  { label: "ERA", key: "era" },
  { label: "BB/7", key: "bb7" },
  { label: "K/7", key: "k7" },
  { label: "WHIP", key: "whip" },
  { label: "피안타율", key: "baa" },
];

const player2022Overrides = {
  "김성민": {
    name: "김성민",
    number: 40,
    pos: "CF",
    g: 1,
    pa: 3,
    ab: 2,
    h: 0,
    h1: 0,
    d2: 0,
    d3: 0,
    hr: 0,
    tb: 0,
    rbi: 0,
    r: 1,
    sb: 2,
    cs: 0,
    so: 1,
    bb: 1,
    hbp: 0,
    bbhbp: 1,
    sh: 0,
    sf: 0,
    dp: 1,
    avg: 0.000,
    obp: 0.333,
    slg: 0.000,
    ops: 0.333,
  },
  "김안수": {
    name: "김안수",
    number: 17,
    pos: "2B",
    g: 1,
    pa: 3,
    ab: 2,
    h: 0,
    h1: 0,
    d2: 0,
    d3: 0,
    hr: 0,
    tb: 0,
    rbi: 1,
    r: 0,
    sb: 0,
    cs: 0,
    so: 0,
    bb: 0,
    hbp: 0,
    bbhbp: 0,
    sh: 0,
    sf: 0,
    dp: 2,
    avg: 0.000,
    obp: 0.333,
    slg: 0.000,
    ops: 0.333,
  },
};

const pitcherYearExtras = {
  "2022": {
    "오승렬": { wp: 0, bk: 0 },
    "이완근": { wp: 0, bk: 0 },
    "이학진": { wp: 0, bk: 0 },
    "임인수": { wp: 0, bk: 0 },
    "최효일": { wp: 0, bk: 0 },
  },
  "2023": {
    "김진광": { wp: 0, bk: 0 },
    "오승렬": { wp: 0, bk: 0 },
    "이학진": { wp: 0, bk: 0 },
  },
  "2024": {
    "김예준": { wp: 0, bk: 0 },
    "김진광": { wp: 0, bk: 0 },
    "박재현": { wp: 0, bk: 0 },
    "오승렬": { wp: 2, bk: 0 },
    "이학진": { wp: 6, bk: 0 },
  },
  "2025": {
    "김예준": { wp: 0, bk: 0 },
    "박재현": { wp: 1, bk: 0 },
    "오승렬": { wp: 1, bk: 1 },
    "이학진": { wp: 6, bk: 0 },
  },
};

function getHistoricalBatterRows(year) {
  if (
    typeof SOURCE_DATA === "undefined" ||
    !SOURCE_DATA.historicalBattersByYear ||
    !SOURCE_DATA.historicalBattersByYear[year]
  ) {
    return [];
  }

  return SOURCE_DATA.historicalBattersByYear[year];
}

function getHistoricalPitcherRows(year) {
  if (
    typeof SOURCE_DATA === "undefined" ||
    !SOURCE_DATA.historicalPitchersByYear ||
    !SOURCE_DATA.historicalPitchersByYear[year]
  ) {
    return [];
  }

  return SOURCE_DATA.historicalPitchersByYear[year];
}

function safeNumber(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
}

function formatRate(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return "0.000";
  }
  return numeric.toFixed(3);
}

function formatMetric(value, digits) {
  if (value === "#DIV/0!") {
    return value;
  }
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return "";
  }
  return numeric.toFixed(digits);
}

function formatWinPct(wins, losses) {
  const total = safeNumber(wins) + safeNumber(losses);
  if (!total) {
    return "0.000";
  }
  return (safeNumber(wins) / total).toFixed(3);
}

function formatFractionalInnings(value) {
  if (typeof value === "string") {
    return value;
  }

  const outs = Math.round(safeNumber(value) * 3);
  const whole = Math.floor(outs / 3);
  const remainder = outs % 3;

  if (remainder === 0) {
    return String(whole);
  }
  if (whole === 0) {
    return remainder === 1 ? "1/3" : "2/3";
  }
  return remainder === 1 ? `${whole} 1/3` : `${whole} 2/3`;
}

function calcPitcherEra(er, ip) {
  const innings = safeNumber(ip);
  if (!innings) {
    return "#DIV/0!";
  }
  return ((safeNumber(er) * 9) / innings).toFixed(2);
}

function calcPitcherRate(numerator, ip) {
  const innings = safeNumber(ip);
  if (!innings) {
    return "#DIV/0!";
  }
  return ((safeNumber(numerator) * 7) / innings).toFixed(3);
}

function calcPitcherWhip(hits, walks, ip) {
  const innings = safeNumber(ip);
  if (!innings) {
    return "#DIV/0!";
  }
  return ((safeNumber(hits) + safeNumber(walks)) / innings).toFixed(3);
}

function calcPitcherBaa(hits, atBats) {
  const denominator = safeNumber(atBats);
  if (!denominator) {
    return "#DIV/0!";
  }
  return (safeNumber(hits) / denominator).toFixed(3);
}

function toHitterRow(row) {
  const ab = safeNumber(row.AB);
  const h = safeNumber(row.H);
  const bb = safeNumber(row.BB);
  const hbp = safeNumber(row.HBP);
  const sf = safeNumber(row.SF);
  const tb = safeNumber(row.TB);
  const obpDenominator = ab + bb + hbp + sf;
  const obp = obpDenominator ? (h + bb + hbp) / obpDenominator : 0;
  const slg = ab ? tb / ab : 0;

  return {
    name: row.player,
    number: row.number === "" ? "" : Number(row.number),
    pos: row.position || row.hand || "",
    g: safeNumber(row.G),
    pa: safeNumber(row.PA),
    ab,
    h,
    h1: safeNumber(row.H1),
    d2: safeNumber(row.D2),
    d3: safeNumber(row.D3),
    hr: safeNumber(row.HR),
    tb,
    rbi: safeNumber(row.RBI),
    r: safeNumber(row.R),
    sb: safeNumber(row.SB),
    cs: safeNumber(row.CS),
    sh: safeNumber(row.SH),
    sf,
    bb,
    hbp,
    bbhbp: safeNumber(row.BBHBP),
    so: safeNumber(row.SO),
    dp: safeNumber(row.GIDP),
    avg: formatRate(ab ? h / ab : 0),
    obp: formatRate(obp),
    slg: formatRate(slg),
    ops: formatRate(obp + slg),
  };
}

function toPitcherRow(year, row) {
  const extras = pitcherYearExtras[year]?.[row.player] || { wp: 0, bk: 0 };
  const ip = safeNumber(row.IP);
  const hits = safeNumber(row.H);
  const walks = safeNumber(row.BB);
  const atBats = safeNumber(row.AB);

  return {
    name: row.player,
    number: row.number || "",
    g: safeNumber(row.G),
    gs: safeNumber(row.GS),
    gr: safeNumber(row.GR),
    w: safeNumber(row.W),
    l: safeNumber(row.L),
    sv: safeNumber(row.SV),
    hld: safeNumber(row.HLD),
    ip,
    ipDisplay: formatFractionalInnings(ip),
    bf: safeNumber(row.BF),
    ab: atBats,
    h: hits,
    hr: safeNumber(row.HR),
    sh: safeNumber(row.SH),
    sf: safeNumber(row.SF),
    bb: walks,
    hbp: safeNumber(row.HBP),
    bbhbp: safeNumber(row.BBHBP),
    so: safeNumber(row.SO),
    wp: safeNumber(extras.wp),
    bk: safeNumber(extras.bk),
    r: safeNumber(row.R),
    er: safeNumber(row.ER),
    winPct: formatWinPct(row.W, row.L),
    era: calcPitcherEra(row.ER, ip),
    bb7: calcPitcherRate(row.BB, ip),
    k7: calcPitcherRate(row.SO, ip),
    whip: calcPitcherWhip(hits, walks, ip),
    baa: calcPitcherBaa(hits, atBats),
  };
}

function buildHitterYearData(year) {
  return getHistoricalBatterRows(year).map((row) => {
    const base = toHitterRow(row);
    const override = year === "2022" ? player2022Overrides[base.name] : null;
    return override ? { ...base, ...override, avg: formatRate(override.avg), obp: formatRate(override.obp), slg: formatRate(override.slg), ops: formatRate(override.ops) } : base;
  });
}

function buildPitcherTotalRow(rows) {
  const totals = rows.reduce((acc, row) => {
    acc.g += safeNumber(row.g);
    acc.gs += safeNumber(row.gs);
    acc.gr += safeNumber(row.gr);
    acc.w += safeNumber(row.w);
    acc.l += safeNumber(row.l);
    acc.sv += safeNumber(row.sv);
    acc.hld += safeNumber(row.hld);
    acc.ip += safeNumber(row.ip);
    acc.bf += safeNumber(row.bf);
    acc.ab += safeNumber(row.ab);
    acc.h += safeNumber(row.h);
    acc.hr += safeNumber(row.hr);
    acc.sh += safeNumber(row.sh);
    acc.sf += safeNumber(row.sf);
    acc.bb += safeNumber(row.bb);
    acc.hbp += safeNumber(row.hbp);
    acc.bbhbp += safeNumber(row.bbhbp);
    acc.so += safeNumber(row.so);
    acc.wp += safeNumber(row.wp);
    acc.bk += safeNumber(row.bk);
    acc.r += safeNumber(row.r);
    acc.er += safeNumber(row.er);
    return acc;
  }, {
    g: 0, gs: 0, gr: 0, w: 0, l: 0, sv: 0, hld: 0, ip: 0, bf: 0, ab: 0, h: 0,
    hr: 0, sh: 0, sf: 0, bb: 0, hbp: 0, bbhbp: 0, so: 0, wp: 0, bk: 0, r: 0, er: 0,
  });

  return {
    name: "",
    number: "",
    isTotal: true,
    ...totals,
    ipDisplay: formatFractionalInnings(totals.ip),
    winPct: formatWinPct(totals.w, totals.l),
    era: calcPitcherEra(totals.er, totals.ip),
    bb7: calcPitcherRate(totals.bb, totals.ip),
    k7: calcPitcherRate(totals.so, totals.ip),
    whip: calcPitcherWhip(totals.h, totals.bb, totals.ip),
    baa: calcPitcherBaa(totals.h, totals.ab),
  };
}

function buildPitcherYearData(year) {
  const rows = getHistoricalPitcherRows(year).map((row) => toPitcherRow(year, row));
  if (!rows.length) {
    return rows;
  }
  return [...rows, buildPitcherTotalRow(rows)];
}

const player2022 = buildHitterYearData("2022");
const player2023 = buildHitterYearData("2023");
const player2024 = buildHitterYearData("2024");
const player2025 = buildHitterYearData("2025");

const pitcher2022 = buildPitcherYearData("2022");
const pitcher2023 = buildPitcherYearData("2023");
const pitcher2024 = buildPitcherYearData("2024");
const pitcher2025 = buildPitcherYearData("2025");

const hitterDataByYear = {
  "2022": player2022,
  "2023": player2023,
  "2024": player2024,
  "2025": player2025,
};

const pitcherDataByYear = {
  "2022": pitcher2022,
  "2023": pitcher2023,
  "2024": pitcher2024,
  "2025": pitcher2025,
};

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

function bindPlayerTypeTabs() {
  document.querySelectorAll(".player-type-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.playerType === state.playerType);
    button.addEventListener("click", () => {
      state.playerType = button.dataset.playerType;
      renderPlayerYear(state.playerYear);
      setActiveMenu();
    });
  });
}

function renderPlayerShell(year, subtitle) {
  const container = document.getElementById("page-container");
  const template = document.getElementById("player-stats-template").innerHTML;
  container.innerHTML = template;

  document.getElementById("player-stats-title").textContent = `선수기록 ${year}`;
  document.getElementById("player-stats-subtitle").textContent = subtitle;

  bindPlayerTypeTabs();
}

function renderStatsTable({ title, subtitle, columns, rows }) {
  renderPlayerShell(title, subtitle);
  const tableWrap = document.querySelector(".table-wrap");

  if (!rows.length) {
    tableWrap.innerHTML = `
      <div class="placeholder-panel">
        <p>${subtitle}은(는) 아직 입력되지 않았습니다.</p>
      </div>
    `;
    return;
  }

  const headerHtml = columns.map((column) => `<th>${column.label}</th>`).join("");
  const rowsHtml = rows.map((row) => {
    const rowClass = row.isTotal ? " class=\"is-total\"" : "";
    const cells = columns.map((column, index) => {
      let value = row[column.key];
      if (row.isTotal && index === 0 && (value === "" || value == null)) {
        value = "합계";
      }
      if (value == null) {
        value = "";
      }
      return `<td>${value}</td>`;
    }).join("");
    return `<tr${rowClass}>${cells}</tr>`;
  }).join("");

  tableWrap.innerHTML = `
    <table class="stats-table">
      <thead>
        <tr>${headerHtml}</tr>
      </thead>
      <tbody>${rowsHtml}</tbody>
    </table>
  `;
}

function renderPlayerStats(year, type = "hitter") {
  if (type === "pitcher") {
    renderStatsTable({
      title: year,
      subtitle: `${year}년 투수 기록`,
      columns: pitcherColumns,
      rows: pitcherDataByYear[year] || [],
    });
    return;
  }

  renderStatsTable({
    title: year,
    subtitle: `${year}년 타자 기록`,
    columns: hitterColumns,
    rows: hitterDataByYear[year] || [],
  });
}

function renderTeamYear(year) {
  renderPlaceholder(`팀기록 ${year}`, `${year}년 팀기록 영역입니다.`);
}

function renderPlayerYear(year) {
  renderPlayerStats(year, state.playerType);
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
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.addEventListener("click", () => {
      const parent = el.closest(".submenu").dataset.submenu;

      if (parent === "team") {
        state.menu = "team";
        state.teamYear = el.dataset.year;
      }

      if (parent === "player") {
        state.menu = "player";
        state.playerYear = el.dataset.year;
        state.playerType = "hitter";
      }

      renderCurrentPage();
    });
  });
}

function initRankClicks() {
  document.querySelectorAll("[data-type]").forEach((el) => {
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
