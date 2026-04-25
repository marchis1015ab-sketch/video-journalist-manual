const PAGE_CONFIG = [
  { id: "team-2026", title: "2026 팀 기록", buttonLabel: "2026 팀 기록" },
  { id: "batting-2026", title: "2026 타자 기록", buttonLabel: "2026 타자 기록" },
  { id: "pitching-2026", title: "2026 투수 기록", buttonLabel: "2026 투수 기록" },
  { id: "career-batting", title: "타자 통산 기록", buttonLabel: "타자 통산" },
  { id: "career-pitching", title: "투수 통산 기록", buttonLabel: "투수 통산" },
  { id: "ranking-batting", title: "타자 통산 순위", buttonLabel: "타자 순위" },
  { id: "ranking-pitching", title: "투수 통산 순위", buttonLabel: "투수 순위" },
];

const collator = new Intl.Collator("ko");
const state = {
  activePageId: PAGE_CONFIG[0].id,
  pageElements: new Map(),
};

const pageButtons = document.getElementById("pageButtons");
const pageContainer = document.getElementById("pageContainer");
const batterForm = document.getElementById("batterForm");
const pitcherForm = document.getElementById("pitcherForm");
const batterPlayer = document.getElementById("batterPlayer");
const pitcherPlayer = document.getElementById("pitcherPlayer");
const statusMessage = document.getElementById("statusMessage");

const batterColumns = [
  { key: "player", label: "선수명", align: "left" },
  { key: "G", label: "경기", align: "right" },
  { key: "PA", label: "타석", align: "right" },
  { key: "AB", label: "타수", align: "right" },
  { key: "H", label: "안타", align: "right" },
  { key: "HR", label: "홈런", align: "right" },
  { key: "BB", label: "볼넷", align: "right" },
  { key: "HBP", label: "사구", align: "right" },
  { key: "TB", label: "루타", align: "right" },
  { key: "RBI", label: "타점", align: "right" },
  { key: "R", label: "득점", align: "right" },
  { key: "SB", label: "도루", align: "right" },
  { key: "SO", label: "삼진", align: "right" },
  { key: "GIDP", label: "병살", align: "right" },
  { key: "AVG", label: "타율", align: "right", format: formatRate3 },
  { key: "OBP", label: "출루율", align: "right", format: formatRate3 },
  { key: "SLG", label: "장타율", align: "right", format: formatRate3 },
  { key: "OPS", label: "OPS", align: "right", format: formatRate3 },
];

const pitcherColumns = [
  { key: "player", label: "선수명", align: "left" },
  { key: "G", label: "등판", align: "right" },
  { key: "IP", label: "이닝", align: "right", format: formatPitchingInnings },
  { key: "BF", label: "타자", align: "right" },
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

initialize();

function initialize() {
  populatePlayerSelects();
  renderNavigation();
  renderPageShell();
  bindForms();
  renderAllPages();
  setActivePage(state.activePageId);
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
    button.textContent = page.buttonLabel;
    button.addEventListener("click", () => setActivePage(page.id));
    pageButtons.appendChild(button);
    state.pageElements.set(page.id, { button });
  });
}

function renderPageShell() {
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
  batterForm.addEventListener("submit", handleBatterSubmit);
  pitcherForm.addEventListener("submit", handlePitcherSubmit);
}

function handleBatterSubmit(event) {
  event.preventDefault();

  const form = new FormData(batterForm);
  const player = String(form.get("player") || "").trim();
  if (!player) {
    showStatus("선수를 선택해야 합니다.", true);
    return;
  }

  const gameStats = {};
  const fields = BATTER_KEYS.filter((key) => key !== "G");

  for (const field of fields) {
    const value = Number(form.get(field) ?? 0);
    if (!Number.isFinite(value) || value < 0) {
      showStatus("타자 기록은 0 이상의 숫자만 입력할 수 있습니다.", true);
      return;
    }
    gameStats[field] = value;
  }

  addBatterGame(player, gameStats);
  saveSeasonData();
  resetFormValues(batterForm);
  renderAllPages();
  setActivePage("batting-2026");
  showStatus(`${player} 타자 기록이 저장되었습니다.`);
}

function handlePitcherSubmit(event) {
  event.preventDefault();

  const form = new FormData(pitcherForm);
  const player = String(form.get("player") || "").trim();
  if (!player) {
    showStatus("선수를 선택해야 합니다.", true);
    return;
  }

  const innings = parseInningsInput(form.get("IP"));
  if (!Number.isFinite(innings) || innings < 0) {
    showStatus("이닝 입력값을 확인해야 합니다.", true);
    return;
  }

  const gameStats = { IP: innings };
  const fields = PITCHER_KEYS.filter((key) => !["G", "IP"].includes(key));

  for (const field of fields) {
    const value = Number(form.get(field) ?? 0);
    if (!Number.isFinite(value) || value < 0) {
      showStatus("투수 기록은 0 이상의 숫자만 입력할 수 있습니다.", true);
      return;
    }
    gameStats[field] = value;
  }

  addPitcherGame(player, gameStats);
  saveSeasonData();
  resetFormValues(pitcherForm);
  renderAllPages();
  setActivePage("pitching-2026");
  showStatus(`${player} 투수 기록이 저장되었습니다.`);
}

function resetFormValues(form) {
  form.reset();
  form.querySelectorAll("input[type='number']").forEach((input) => {
    input.value = "0";
  });
  form.querySelectorAll("input[type='text']").forEach((input) => {
    input.value = "0";
  });
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

  BATTER_KEYS.forEach((key) => {
    if (key === "G") {
      return;
    }
    season2026Batters[player][key] += Number(gameStats[key] ?? 0);
  });
}

function addPitcherGame(player, gameStats) {
  ensureSeasonPitcher(player);
  season2026Pitchers[player].G += 1;

  PITCHER_KEYS.forEach((key) => {
    if (key === "G") {
      return;
    }

    if (key === "IP") {
      season2026Pitchers[player].IP = normalizeInnings(season2026Pitchers[player].IP + Number(gameStats.IP ?? 0));
      return;
    }

    season2026Pitchers[player][key] += Number(gameStats[key] ?? 0);
  });
}

function ensureSeasonBatter(player) {
  if (!season2026Batters[player]) {
    season2026Batters[player] = createEmptyBatterStats();
  }
}

function ensureSeasonPitcher(player) {
  if (!season2026Pitchers[player]) {
    season2026Pitchers[player] = createEmptyPitcherStats();
  }
}

function getCareerBatter(player) {
  return combineStatLines(historicalBatters[player], season2026Batters[player], BATTER_KEYS);
}

function getCareerPitcher(player) {
  return combineStatLines(historicalPitchers[player], season2026Pitchers[player], PITCHER_KEYS);
}

function renderAllPages() {
  PAGE_CONFIG.forEach((page) => {
    const body = state.pageElements.get(page.id).body;
    body.innerHTML = renderPageContent(page.id);
  });
}

function renderPageContent(pageId) {
  switch (pageId) {
    case "team-2026":
      return renderTeamPage();
    case "batting-2026":
      return renderTableBlock("2026 타자 누적", batterColumns, getSeasonBatterRows());
    case "pitching-2026":
      return renderTableBlock("2026 투수 누적", pitcherColumns, getSeasonPitcherRows());
    case "career-batting":
      return renderTableBlock("타자 통산 기록", batterColumns, getCareerBatterRows());
    case "career-pitching":
      return renderTableBlock("투수 통산 기록", pitcherColumns, getCareerPitcherRows());
    case "ranking-batting":
      return renderTableBlock("타자 통산 OPS 순위", getBatterRankingColumns(), rankBatters(getCareerBatterRows()));
    case "ranking-pitching":
      return renderTableBlock("투수 통산 ERA 순위", getPitcherRankingColumns(), rankPitchers(getCareerPitcherRows()));
    default:
      return `<div class="page-empty">표시할 페이지가 없습니다.</div>`;
  }
}

function renderTeamPage() {
  const seasonBatters = getSeasonBatterRows();
  const seasonPitchers = getSeasonPitcherRows();
  const activeBatters = seasonBatters.filter((row) => hasBatterActivity(row)).length;
  const activePitchers = seasonPitchers.filter((row) => hasPitcherActivity(row)).length;
  const teamBatting = createBatterRow("팀 합계", sumCollection(season2026Batters, BATTER_KEYS));
  const teamPitching = createPitcherRow("팀 합계", sumCollection(season2026Pitchers, PITCHER_KEYS));

  return `
    <div class="summary-strip">
      <div class="summary-item">입력된 타자<strong>${formatInteger(activeBatters)}명</strong></div>
      <div class="summary-item">입력된 투수<strong>${formatInteger(activePitchers)}명</strong></div>
      <div class="summary-item">타자 누적 경기<strong>${formatInteger(teamBatting.G)}</strong></div>
      <div class="summary-item">투수 누적 등판<strong>${formatInteger(teamPitching.G)}</strong></div>
    </div>
    <div class="summary-grid">
      ${renderTableBlock("2026 팀 타격 누적", getTeamBattingColumns(), [teamBatting])}
      ${renderTableBlock("2026 팀 투구 누적", getTeamPitchingColumns(), [teamPitching])}
    </div>
  `;
}

function getSeasonBatterRows() {
  return PLAYERS
    .map((player) => createBatterRow(player, season2026Batters[player]))
    .sort((a, b) => b.PA - a.PA || b.H - a.H || collator.compare(a.player, b.player));
}

function getSeasonPitcherRows() {
  return PLAYERS
    .map((player) => createPitcherRow(player, season2026Pitchers[player]))
    .sort((a, b) => b.IP - a.IP || b.SO - a.SO || collator.compare(a.player, b.player));
}

function getCareerBatterRows() {
  return PLAYERS
    .map((player) => createBatterRow(player, getCareerBatter(player)))
    .sort((a, b) => b.PA - a.PA || b.H - a.H || collator.compare(a.player, b.player));
}

function getCareerPitcherRows() {
  return PLAYERS
    .map((player) => createPitcherRow(player, getCareerPitcher(player)))
    .sort((a, b) => b.IP - a.IP || b.SO - a.SO || collator.compare(a.player, b.player));
}

function rankBatters(rows) {
  return rows
    .filter((row) => row.PA > 0)
    .sort((a, b) => b.OPS - a.OPS || b.OBP - a.OBP || b.AVG - a.AVG || b.H - a.H || collator.compare(a.player, b.player))
    .map((row, index) => ({ ...row, rank: index + 1 }));
}

function rankPitchers(rows) {
  return rows
    .filter((row) => row.IP > 0)
    .sort((a, b) => rowEraForRank(a) - rowEraForRank(b) || a.WHIP - b.WHIP || b.SO - a.SO || collator.compare(a.player, b.player))
    .map((row, index) => ({ ...row, rank: index + 1 }));
}

function rowEraForRank(row) {
  return row.IP > 0 ? row.ERA : Number.POSITIVE_INFINITY;
}

function createBatterRow(player, stats) {
  const line = {};
  BATTER_KEYS.forEach((key) => {
    line[key] = Number(stats?.[key] ?? 0);
  });
  return { player, ...line, ...calcBatting(line) };
}

function createPitcherRow(player, stats) {
  const line = {};
  PITCHER_KEYS.forEach((key) => {
    line[key] = key === "IP" ? normalizeInnings(Number(stats?.[key] ?? 0)) : Number(stats?.[key] ?? 0);
  });
  return { player, ...line, ...calcPitching(line) };
}

function hasBatterActivity(row) {
  return row.PA > 0 || row.AB > 0 || row.H > 0 || row.BB > 0;
}

function hasPitcherActivity(row) {
  return row.IP > 0 || row.BF > 0 || row.SO > 0;
}

function getTeamBattingColumns() {
  return [
    { key: "player", label: "구분", align: "left" },
    { key: "PA", label: "타석", align: "right" },
    { key: "AB", label: "타수", align: "right" },
    { key: "H", label: "안타", align: "right" },
    { key: "HR", label: "홈런", align: "right" },
    { key: "BB", label: "볼넷", align: "right" },
    { key: "HBP", label: "사구", align: "right" },
    { key: "TB", label: "루타", align: "right" },
    { key: "RBI", label: "타점", align: "right" },
    { key: "R", label: "득점", align: "right" },
    { key: "SB", label: "도루", align: "right" },
    { key: "SO", label: "삼진", align: "right" },
    { key: "AVG", label: "타율", align: "right", format: formatRate3 },
    { key: "OBP", label: "출루율", align: "right", format: formatRate3 },
    { key: "SLG", label: "장타율", align: "right", format: formatRate3 },
    { key: "OPS", label: "OPS", align: "right", format: formatRate3 },
  ];
}

function getTeamPitchingColumns() {
  return [
    { key: "player", label: "구분", align: "left" },
    { key: "IP", label: "이닝", align: "right", format: formatPitchingInnings },
    { key: "BF", label: "타자", align: "right" },
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
}

function getBatterRankingColumns() {
  return [{ key: "rank", label: "순위", align: "right" }, ...batterColumns];
}

function getPitcherRankingColumns() {
  return [{ key: "rank", label: "순위", align: "right" }, ...pitcherColumns];
}

function renderTableBlock(title, columns, rows) {
  if (!rows.length) {
    return `
      <section class="table-block">
        <h3>${escapeHtml(title)}</h3>
        <div class="page-empty">표시할 기록이 없습니다.</div>
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
          const raw = row[column.key];
          const value = column.format ? column.format(raw) : formatCellValue(raw);
          return `<td class="${alignClass(column.align)}">${escapeHtml(value)}</td>`;
        })
        .join("");

      return `<tr>${cells}</tr>`;
    })
    .join("");

  return `
    <section class="table-block">
      <h3>${escapeHtml(title)}</h3>
      <div class="table-scroll">
        <table class="records-table">
          <thead><tr>${header}</tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </section>
  `;
}

function alignClass(align) {
  return align === "left" ? "align-left" : align === "center" ? "align-center" : "align-right";
}

function formatCellValue(value) {
  if (typeof value === "number") {
    return formatInteger(value);
  }

  if (value == null) {
    return "";
  }

  return String(value);
}

function formatInteger(value) {
  return Number(value || 0).toLocaleString("ko-KR");
}

function formatRate3(value) {
  return Number(value || 0).toFixed(3);
}

function formatRate2(value) {
  return Number(value || 0).toFixed(2);
}

function formatPitchingInnings(value) {
  return formatInnings(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
