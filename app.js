const PAGE_CONFIG = [
  { id: "team-2026", title: "2026 팀 기록", button: "2026 팀 기록" },
  { id: "batting-2026", title: "2026년 타자 기록", button: "2026 타자" },
  { id: "pitching-2026", title: "2026년 투수 기록", button: "2026 투수" },
  { id: "career-batting", title: "타자 통산기록", button: "타자 통산" },
  { id: "career-pitching", title: "투수 통산기록", button: "투수 통산" },
  { id: "ranking-batting", title: "타자 통산 순위", button: "타자 순위" },
  { id: "ranking-pitching", title: "투수 통산 순위", button: "투수 순위" },
  { id: "batting-2022", title: "2022년 타자 기록", button: "2022 타자" },
  { id: "batting-2023", title: "2023년 타자 기록", button: "2023 타자" },
  { id: "batting-2024", title: "2024년 타자 기록", button: "2024 타자" },
  { id: "batting-2025", title: "2025년 타자 기록", button: "2025 타자" },
  { id: "pitching-2022", title: "2022년 투수 기록", button: "2022 투수" },
  { id: "pitching-2023", title: "2023년 투수 기록", button: "2023 투수" },
  { id: "pitching-2024", title: "2024년 투수 기록", button: "2024 투수" },
  { id: "pitching-2025", title: "2025년 투수 기록", button: "2025 투수" },
];

const BATTER_COLUMNS = [
  { key: "player", label: "이름", align: "left" },
  { key: "G", label: "경기", align: "right" },
  { key: "PA", label: "타석", align: "right" },
  { key: "AB", label: "타수", align: "right" },
  { key: "H", label: "안타", align: "right" },
  { key: "D2", label: "2루타", align: "right" },
  { key: "D3", label: "3루타", align: "right" },
  { key: "HR", label: "홈런", align: "right" },
  { key: "TB", label: "루타", align: "right" },
  { key: "RBI", label: "타점", align: "right" },
  { key: "R", label: "득점", align: "right" },
  { key: "SB", label: "도루", align: "right" },
  { key: "BB", label: "볼넷", align: "right" },
  { key: "HBP", label: "사구", align: "right" },
  { key: "BBHBP", label: "사사구", align: "right" },
  { key: "SO", label: "삼진", align: "right" },
  { key: "GIDP", label: "병살", align: "right" },
  { key: "AVG", label: "타율", align: "right", format: formatRate3 },
  { key: "OBP", label: "출루율", align: "right", format: formatRate3 },
  { key: "SLG", label: "장타율", align: "right", format: formatRate3 },
  { key: "OPS", label: "OPS", align: "right", format: formatRate3 },
  { key: "RC", label: "RC", align: "right", format: formatRate3 },
  { key: "RC18", label: "RC/18", align: "right", format: formatRate3 },
  { key: "XR", label: "XR", align: "right", format: formatRate3 },
];

const PITCHER_COLUMNS = [
  { key: "player", label: "이름", align: "left" },
  { key: "G", label: "경기", align: "right" },
  { key: "IP", label: "이닝", align: "right", format: formatPitchingInnings },
  { key: "W", label: "승", align: "right" },
  { key: "L", label: "패", align: "right" },
  { key: "SV", label: "세이브", align: "right" },
  { key: "HLD", label: "홀드", align: "right" },
  { key: "BF", label: "타자", align: "right" },
  { key: "AB", label: "타수", align: "right" },
  { key: "H", label: "피안타", align: "right" },
  { key: "HR", label: "피홈런", align: "right" },
  { key: "BB", label: "볼넷", align: "right" },
  { key: "HBP", label: "사구", align: "right" },
  { key: "SO", label: "삼진", align: "right" },
  { key: "R", label: "실점", align: "right" },
  { key: "ER", label: "자책", align: "right" },
  { key: "ERA", label: "ERA", align: "right", format: formatRate2 },
  { key: "WHIP", label: "WHIP", align: "right", format: formatRate2 },
];

const TEAM_SUMMARY_COLUMNS = [
  { key: "games", label: "경기수", align: "right" },
  { key: "wins", label: "승", align: "right" },
  { key: "losses", label: "패", align: "right" },
  { key: "draws", label: "무", align: "right" },
  { key: "runsScored", label: "득점", align: "right" },
  { key: "runsAllowed", label: "실점", align: "right" },
  { key: "winPct", label: "승률", align: "right", format: formatRate3 },
];

const TEAM_RESULTS_COLUMNS = [
  { key: "date", label: "경기일", align: "left" },
  { key: "opponent", label: "상대팀", align: "left" },
  { key: "resultLabel", label: "결과", align: "center" },
  { key: "score", label: "스코어", align: "center" },
  { key: "note", label: "비고", align: "left" },
];

const BATTER_RANKINGS = [
  { title: "타율 순위", key: "AVG", descending: true, minFilter: (row) => row.AB > 0, format: formatRate3 },
  { title: "안타 순위", key: "H", descending: true, minFilter: (row) => row.H > 0, format: formatInteger },
  { title: "홈런 순위", key: "HR", descending: true, minFilter: (row) => row.HR > 0, format: formatInteger },
  { title: "타점 순위", key: "RBI", descending: true, minFilter: (row) => row.RBI > 0, format: formatInteger },
  { title: "득점 순위", key: "R", descending: true, minFilter: (row) => row.R > 0, format: formatInteger },
  { title: "도루 순위", key: "SB", descending: true, minFilter: (row) => row.SB > 0, format: formatInteger },
  { title: "OPS 순위", key: "OPS", descending: true, minFilter: (row) => row.PA > 0, format: formatRate3 },
  { title: "RC 순위", key: "RC", descending: true, minFilter: (row) => row.PA > 0, format: formatRate3 },
  { title: "XR 순위", key: "XR", descending: true, minFilter: (row) => row.PA > 0, format: formatRate3 },
];

const PITCHER_RANKINGS = [
  { title: "ERA 순위", key: "ERA", descending: false, minFilter: (row) => row.IP > 0, format: formatRate2 },
  { title: "WHIP 순위", key: "WHIP", descending: false, minFilter: (row) => row.IP > 0, format: formatRate2 },
  { title: "승 순위", key: "W", descending: true, minFilter: (row) => row.W > 0, format: formatInteger },
  { title: "세이브 순위", key: "SV", descending: true, minFilter: (row) => row.SV > 0, format: formatInteger },
  { title: "홀드 순위", key: "HLD", descending: true, minFilter: (row) => row.HLD > 0, format: formatInteger },
  { title: "삼진 순위", key: "SO", descending: true, minFilter: (row) => row.SO > 0, format: formatInteger },
  { title: "이닝 순위", key: "IP", descending: true, minFilter: (row) => row.IP > 0, format: formatPitchingInnings },
];

const collator = new Intl.Collator("ko");
const state = {
  activePageId: PAGE_CONFIG[0].id,
  pageElements: new Map(),
};

const pageButtons = document.getElementById("pageButtons");
const pageContainer = document.getElementById("pageContainer");
const teamForm = document.getElementById("teamForm");
const batterForm = document.getElementById("batterForm");
const pitcherForm = document.getElementById("pitcherForm");
const batterPlayer = document.getElementById("batterPlayer");
const pitcherPlayer = document.getElementById("pitcherPlayer");
const statusMessage = document.getElementById("statusMessage");

initialize();

function initialize() {
  populatePlayerSelects();
  renderNavigation();
  renderPageSections();
  bindForms();
  renderAllPages();
  setActivePage(state.activePageId);
  showStatus("2026 시즌은 0에서 시작하며 입력 즉시 저장됩니다.");
}

function populatePlayerSelects() {
  const options = PLAYERS
    .slice()
    .sort((a, b) => collator.compare(a, b))
    .map((player) => `<option value="${escapeHtml(player)}">${escapeHtml(player)}</option>`)
    .join("");

  batterPlayer.innerHTML = options;
  pitcherPlayer.innerHTML = options;
}

function renderNavigation() {
  PAGE_CONFIG.forEach((page) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "page-button";
    button.textContent = page.button;
    button.addEventListener("click", () => setActivePage(page.id));
    pageButtons.appendChild(button);
    state.pageElements.set(page.id, { button });
  });
}

function renderPageSections() {
  const fragment = document.createDocumentFragment();

  PAGE_CONFIG.forEach((page) => {
    const section = document.createElement("section");
    section.className = "page-section";
    section.id = page.id;

    const title = document.createElement("h2");
    title.className = "page-title";
    title.textContent = page.title;

    const body = document.createElement("div");
    body.className = "page-body";

    section.appendChild(title);
    section.appendChild(body);
    fragment.appendChild(section);

    const pageState = state.pageElements.get(page.id);
    pageState.section = section;
    pageState.body = body;
  });

  pageContainer.appendChild(fragment);
}

function bindForms() {
  teamForm.addEventListener("submit", handleTeamSubmit);
  batterForm.addEventListener("submit", handleBatterSubmit);
  pitcherForm.addEventListener("submit", handlePitcherSubmit);
}

function handleTeamSubmit(event) {
  event.preventDefault();
  const formData = new FormData(teamForm);
  const runsScored = safeNumber(formData.get("runsScored"));
  const runsAllowed = safeNumber(formData.get("runsAllowed"));
  const result = String(formData.get("result") || "W");

  if (runsScored < 0 || runsAllowed < 0) {
    showStatus("팀 기록 값은 0 이상이어야 합니다.", true);
    return;
  }

  season2026Team.games += 1;
  season2026Team.runsScored += runsScored;
  season2026Team.runsAllowed += runsAllowed;

  if (result === "W") season2026Team.wins += 1;
  if (result === "L") season2026Team.losses += 1;
  if (result === "D") season2026Team.draws += 1;

  season2026Team.results.unshift({
    date: String(formData.get("date") || "").trim(),
    opponent: String(formData.get("opponent") || "").trim(),
    result,
    resultLabel: result === "W" ? "승" : result === "L" ? "패" : "무",
    runsScored,
    runsAllowed,
    score: `${runsScored} - ${runsAllowed}`,
    note: String(formData.get("note") || "").trim(),
  });

  saveAllData();
  teamForm.reset();
  teamForm.querySelectorAll("input[type='number']").forEach((input) => { input.value = "0"; });
  renderAllPages();
  setActivePage("team-2026");
  showStatus("2026 팀 경기 기록이 저장되었습니다.");
}

function handleBatterSubmit(event) {
  event.preventDefault();
  const formData = new FormData(batterForm);
  const player = String(formData.get("player") || "").trim();
  if (!player) {
    showStatus("타자 선수를 선택해야 합니다.", true);
    return;
  }

  const gameStats = {
    PA: safeNumber(formData.get("PA")),
    AB: safeNumber(formData.get("AB")),
    H: safeNumber(formData.get("H")),
    D2: safeNumber(formData.get("D2")),
    D3: safeNumber(formData.get("D3")),
    HR: safeNumber(formData.get("HR")),
    RBI: safeNumber(formData.get("RBI")),
    R: safeNumber(formData.get("R")),
    SB: safeNumber(formData.get("SB")),
    CS: safeNumber(formData.get("CS")),
    BB: safeNumber(formData.get("BB")),
    HBP: safeNumber(formData.get("HBP")),
    SH: safeNumber(formData.get("SH")),
    SF: safeNumber(formData.get("SF")),
    SO: safeNumber(formData.get("SO")),
    GIDP: safeNumber(formData.get("GIDP")),
  };

  if (Object.values(gameStats).some((value) => value < 0)) {
    showStatus("타자 기록 값은 0 이상이어야 합니다.", true);
    return;
  }

  if (gameStats.H < gameStats.D2 + gameStats.D3 + gameStats.HR) {
    showStatus("총안타는 2루타, 3루타, 홈런 합보다 작을 수 없습니다.", true);
    return;
  }

  if (gameStats.PA < gameStats.AB) {
    showStatus("타석은 타수보다 작을 수 없습니다.", true);
    return;
  }

  addBatterGame(player, gameStats);
  saveAllData();
  resetRecordForm(batterForm);
  renderAllPages();
  setActivePage("batting-2026");
  showStatus(`${player}의 2026 타자 기록이 저장되었습니다.`);
}

function handlePitcherSubmit(event) {
  event.preventDefault();
  const formData = new FormData(pitcherForm);
  const player = String(formData.get("player") || "").trim();
  if (!player) {
    showStatus("투수 선수를 선택해야 합니다.", true);
    return;
  }

  const gameStats = {
    IP: parseInningsInput(formData.get("IP")),
    W: safeNumber(formData.get("W")),
    L: safeNumber(formData.get("L")),
    SV: safeNumber(formData.get("SV")),
    HLD: safeNumber(formData.get("HLD")),
    BF: safeNumber(formData.get("BF")),
    AB: safeNumber(formData.get("AB")),
    H: safeNumber(formData.get("H")),
    HR: safeNumber(formData.get("HR")),
    BB: safeNumber(formData.get("BB")),
    HBP: safeNumber(formData.get("HBP")),
    SO: safeNumber(formData.get("SO")),
    R: safeNumber(formData.get("R")),
    ER: safeNumber(formData.get("ER")),
  };

  if (Object.values(gameStats).some((value) => value < 0)) {
    showStatus("투수 기록 값은 0 이상이어야 합니다.", true);
    return;
  }

  addPitcherGame(player, gameStats);
  saveAllData();
  resetRecordForm(pitcherForm);
  renderAllPages();
  setActivePage("pitching-2026");
  showStatus(`${player}의 2026 투수 기록이 저장되었습니다.`);
}

function resetRecordForm(form) {
  form.reset();
  form.querySelectorAll("input[type='number']").forEach((input) => { input.value = "0"; });
  form.querySelectorAll("input[type='text']").forEach((input) => { input.value = "0"; });
}

function showStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("is-error", isError);
}

function setActivePage(pageId) {
  state.activePageId = pageId;
  PAGE_CONFIG.forEach((page) => {
    const pageState = state.pageElements.get(page.id);
    pageState.button.classList.toggle("is-active", page.id === pageId);
    pageState.section.classList.toggle("is-active", page.id === pageId);
  });
}

function addBatterGame(player, gameStats) {
  ensureSeasonBatter(player);
  season2026Batters[player].G += 1;
  season2026Batters[player].PA += gameStats.PA;
  season2026Batters[player].AB += gameStats.AB;
  season2026Batters[player].H += gameStats.H;
  season2026Batters[player].D2 += gameStats.D2;
  season2026Batters[player].D3 += gameStats.D3;
  season2026Batters[player].HR += gameStats.HR;
  season2026Batters[player].RBI += gameStats.RBI;
  season2026Batters[player].R += gameStats.R;
  season2026Batters[player].SB += gameStats.SB;
  season2026Batters[player].CS += gameStats.CS;
  season2026Batters[player].BB += gameStats.BB;
  season2026Batters[player].HBP += gameStats.HBP;
  season2026Batters[player].SH += gameStats.SH;
  season2026Batters[player].SF += gameStats.SF;
  season2026Batters[player].SO += gameStats.SO;
  season2026Batters[player].GIDP += gameStats.GIDP;
  season2026Batters[player].H1 += Math.max(0, gameStats.H - gameStats.D2 - gameStats.D3 - gameStats.HR);
  season2026Batters[player].BBHBP += gameStats.BB + gameStats.HBP;
  season2026Batters[player].TB += (
    Math.max(0, gameStats.H - gameStats.D2 - gameStats.D3 - gameStats.HR) +
    (gameStats.D2 * 2) +
    (gameStats.D3 * 3) +
    (gameStats.HR * 4)
  );
}

function addPitcherGame(player, gameStats) {
  ensureSeasonPitcher(player);
  season2026Pitchers[player].G += 1;
  season2026Pitchers[player].W += gameStats.W;
  season2026Pitchers[player].L += gameStats.L;
  season2026Pitchers[player].SV += gameStats.SV;
  season2026Pitchers[player].HLD += gameStats.HLD;
  season2026Pitchers[player].IP = normalizeInnings(season2026Pitchers[player].IP + gameStats.IP);
  season2026Pitchers[player].BF += gameStats.BF;
  season2026Pitchers[player].AB += gameStats.AB;
  season2026Pitchers[player].H += gameStats.H;
  season2026Pitchers[player].HR += gameStats.HR;
  season2026Pitchers[player].BB += gameStats.BB;
  season2026Pitchers[player].HBP += gameStats.HBP;
  season2026Pitchers[player].BBHBP += gameStats.BB + gameStats.HBP;
  season2026Pitchers[player].SO += gameStats.SO;
  season2026Pitchers[player].R += gameStats.R;
  season2026Pitchers[player].ER += gameStats.ER;
}

function renderAllPages() {
  PAGE_CONFIG.forEach((page) => {
    const body = state.pageElements.get(page.id).body;
    body.innerHTML = renderPage(page.id);
  });
}

function renderPage(pageId) {
  switch (pageId) {
    case "team-2026":
      return renderTeamPage();
    case "batting-2026":
      return renderTableSheet("2026년 타자 기록", BATTER_COLUMNS, getSeasonBatterRows(), { empty: "2026 타자 기록이 아직 없습니다." });
    case "pitching-2026":
      return renderTableSheet("2026년 투수 기록", PITCHER_COLUMNS, getSeasonPitcherRows(), { empty: "2026 투수 기록이 아직 없습니다." });
    case "career-batting":
      return renderTableSheet("타자 통산기록", BATTER_COLUMNS, getCareerBatterRows(), { empty: "표시할 통산 타자 기록이 없습니다." });
    case "career-pitching":
      return renderTableSheet("투수 통산기록", PITCHER_COLUMNS, getCareerPitcherRows(), { empty: "표시할 통산 투수 기록이 없습니다." });
    case "ranking-batting":
      return renderRankingPage(getCareerBatterRows(), BATTER_RANKINGS);
    case "ranking-pitching":
      return renderRankingPage(getCareerPitcherRows(), PITCHER_RANKINGS);
    case "batting-2022":
      return renderTableSheet("2022년 타자 기록", BATTER_COLUMNS, getHistoricalBatterRows("2022"), { empty: "2022 타자 기록이 없습니다." });
    case "batting-2023":
      return renderTableSheet("2023년 타자 기록", BATTER_COLUMNS, getHistoricalBatterRows("2023"), { empty: "2023 타자 기록이 없습니다." });
    case "batting-2024":
      return renderTableSheet("2024년 타자 기록", BATTER_COLUMNS, getHistoricalBatterRows("2024"), { empty: "2024 타자 기록이 없습니다." });
    case "batting-2025":
      return renderTableSheet("2025년 타자 기록", BATTER_COLUMNS, getHistoricalBatterRows("2025"), { empty: "2025 타자 기록이 없습니다." });
    case "pitching-2022":
      return renderTableSheet("2022년 투수 기록", PITCHER_COLUMNS, getHistoricalPitcherRows("2022"), { empty: "2022 투수 기록이 없습니다." });
    case "pitching-2023":
      return renderTableSheet("2023년 투수 기록", PITCHER_COLUMNS, getHistoricalPitcherRows("2023"), { empty: "2023 투수 기록이 없습니다." });
    case "pitching-2024":
      return renderTableSheet("2024년 투수 기록", PITCHER_COLUMNS, getHistoricalPitcherRows("2024"), { empty: "2024 투수 기록이 없습니다." });
    case "pitching-2025":
      return renderTableSheet("2025년 투수 기록", PITCHER_COLUMNS, getHistoricalPitcherRows("2025"), { empty: "2025 투수 기록이 없습니다." });
    default:
      return `<div class="empty-panel">표시할 페이지가 없습니다.</div>`;
  }
}

function renderTeamPage() {
  const teamRow = getTeamSummaryRow();
  const gameRows = season2026Team.results.map((item) => ({
    date: item.date || "-",
    opponent: item.opponent || "-",
    resultLabel: item.resultLabel || "-",
    score: item.score || "-",
    note: item.note || "",
  }));

  return `
    <div class="summary-board">
      <div class="summary-item">경기수<strong>${formatInteger(teamRow.games)}</strong></div>
      <div class="summary-item">승패무<strong>${formatInteger(teamRow.wins)}-${formatInteger(teamRow.losses)}-${formatInteger(teamRow.draws)}</strong></div>
      <div class="summary-item">득실점<strong>${formatInteger(teamRow.runsScored)} / ${formatInteger(teamRow.runsAllowed)}</strong></div>
      <div class="summary-item">승률<strong>${formatRate3(teamRow.winPct)}</strong></div>
    </div>
    ${renderTableSheet("2026 팀 요약", TEAM_SUMMARY_COLUMNS, [teamRow], { empty: "팀 요약이 없습니다." })}
    ${renderTableSheet("2026 경기별 결과", TEAM_RESULTS_COLUMNS, gameRows, { empty: "입력된 팀 경기 결과가 없습니다." })}
  `;
}

function renderRankingPage(rows, rankingConfig) {
  const blocks = rankingConfig.map((config) => renderRankingBlock(rows, config)).join("");
  return `<div class="ranking-grid">${blocks}</div>`;
}

function renderRankingBlock(rows, config) {
  const ranked = rows
    .filter((row) => config.minFilter(row))
    .slice()
    .sort((left, right) => compareForRank(left, right, config.key, config.descending))
    .map((row, index) => ({
      rank: index + 1,
      player: row.player,
      value: config.format(row[config.key]),
    }));

  return renderTableSheet(config.title, [
    { key: "rank", label: "순위", align: "right" },
    { key: "player", label: "이름", align: "left" },
    { key: "value", label: "기록", align: "right" },
  ], ranked, { empty: "해당 기록이 없습니다." });
}

function compareForRank(left, right, key, descending) {
  const leftValue = safeNumber(left[key]);
  const rightValue = safeNumber(right[key]);
  if (leftValue === rightValue) {
    return collator.compare(left.player, right.player);
  }
  return descending ? rightValue - leftValue : leftValue - rightValue;
}

function renderTableSheet(title, columns, rows, options = {}) {
  if (!rows.length) {
    return `
      <section class="table-sheet">
        <h3 class="table-title">${escapeHtml(title)}</h3>
        <div class="empty-panel">${escapeHtml(options.empty || "표시할 데이터가 없습니다.")}</div>
      </section>
    `;
  }

  const header = columns
    .map((column) => `<th class="${alignClass(column.align)}">${escapeHtml(column.label)}</th>`)
    .join("");

  const body = rows
    .map((row) => {
      const cells = columns
        .map((column) => {
          const rawValue = row[column.key];
          const value = column.format ? column.format(rawValue) : formatCellValue(rawValue);
          return `<td class="${alignClass(column.align)}">${escapeHtml(value)}</td>`;
        })
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");

  return `
    <section class="table-sheet">
      <h3 class="table-title">${escapeHtml(title)}</h3>
      <div class="table-scroll">
        <table class="records-table">
          <thead><tr>${header}</tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </section>
  `;
}

function getHistoricalBatterRows(year) {
  return (historicalBattersByYear[year] || []).map(toBatterRow);
}

function getHistoricalPitcherRows(year) {
  return (historicalPitchersByYear[year] || []).map(toPitcherRow);
}

function getSeasonBatterRows() {
  return PLAYERS
    .map((player) => toBatterRow({ player, ...season2026Batters[player] }))
    .sort(sortBatters);
}

function getSeasonPitcherRows() {
  return PLAYERS
    .map((player) => toPitcherRow({ player, ...season2026Pitchers[player] }))
    .sort(sortPitchers);
}

function getCareerBatterRows() {
  return PLAYERS
    .map((player) => toBatterRow({ player, ...combineStatLines(historicalCareerBatters[player], season2026Batters[player], BATTER_STAT_KEYS) }))
    .sort(sortBatters);
}

function getCareerPitcherRows() {
  return PLAYERS
    .map((player) => toPitcherRow({ player, ...combineStatLines(historicalCareerPitchers[player], season2026Pitchers[player], PITCHER_STAT_KEYS) }))
    .sort(sortPitchers);
}

function toBatterRow(source) {
  const base = cloneStatLine(source, BATTER_STAT_KEYS);
  const derived = calcBatting(base);
  return {
    player: source.player || "",
    ...base,
    ...derived,
  };
}

function toPitcherRow(source) {
  const base = cloneStatLine(source, PITCHER_STAT_KEYS);
  const derived = calcPitching(base);
  return {
    player: source.player || "",
    ...base,
    ...derived,
  };
}

function getTeamSummaryRow() {
  const decisionGames = season2026Team.wins + season2026Team.losses;
  return {
    games: season2026Team.games,
    wins: season2026Team.wins,
    losses: season2026Team.losses,
    draws: season2026Team.draws,
    runsScored: season2026Team.runsScored,
    runsAllowed: season2026Team.runsAllowed,
    winPct: decisionGames ? season2026Team.wins / decisionGames : 0,
  };
}

function sortBatters(left, right) {
  return (
    right.PA - left.PA ||
    right.H - left.H ||
    right.OPS - left.OPS ||
    collator.compare(left.player, right.player)
  );
}

function sortPitchers(left, right) {
  return (
    right.IP - left.IP ||
    right.SO - left.SO ||
    left.ERA - right.ERA ||
    collator.compare(left.player, right.player)
  );
}

function formatCellValue(value) {
  if (typeof value === "number") {
    return Number.isInteger(value) ? formatInteger(value) : String(value);
  }
  if (value == null || value === "") {
    return "-";
  }
  return String(value);
}

function alignClass(align) {
  return align === "left" ? "align-left" : align === "center" ? "align-center" : "align-right";
}

function formatInteger(value) {
  return safeNumber(value).toLocaleString("ko-KR");
}

function formatRate3(value) {
  return safeNumber(value).toFixed(3);
}

function formatRate2(value) {
  return safeNumber(value).toFixed(2);
}

function formatPitchingInnings(value) {
  return formatInnings(value);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
