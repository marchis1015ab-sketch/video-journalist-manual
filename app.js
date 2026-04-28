const state = {
  menu: "team",
  teamYear: "2022",
  playerYear: "2022",
  playerType: "hitter",
  totalType: "hitter",
  rankType: "hitter",
};

const CAREER_YEARS = ["2022", "2023", "2024", "2025"];
const TEAM_YEARS = ["2022", "2023", "2024", "2025", "2026"];
const GAME_STORAGE_KEYS = {
  records: "watchdogs_game_records_v1",
  records2026: "jtbc_watchdogs_2026_game_records_v1",
  batterLogs: "watchdogs_player_game_logs_v1",
  pitcherLogs: "watchdogs_pitcher_game_logs_v1",
  drafts: "watchdogs_team_import_drafts_v1",
  registeredPlayers: "watchdogs_registered_players_v1",
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
  { label: "출루율", key: "obp" },
  { label: "장타율", key: "slg" },
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

const careerHitterColumns = [
  { label: "이름", key: "name" },
  { label: "경기수", key: "g" },
  { label: "타석", key: "pa" },
  { label: "타수", key: "ab" },
  { label: "안타", key: "h" },
  { label: "2루타", key: "d2" },
  { label: "3루타", key: "d3" },
  { label: "홈런", key: "hr" },
  { label: "루타", key: "tb" },
  { label: "타점", key: "rbi" },
  { label: "득점", key: "r" },
  { label: "도루", key: "sb" },
  { label: "도루실패", key: "cs" },
  { label: "볼넷", key: "bb" },
  { label: "사구", key: "hbp" },
  { label: "사사구", key: "bbhbp" },
  { label: "삼진", key: "so" },
  { label: "병살", key: "dp" },
  { label: "AVG", key: "avg" },
  { label: "출루율", key: "obp" },
  { label: "장타율", key: "slg" },
  { label: "OPS", key: "ops" },
  { label: "RC", key: "rc" },
  { label: "RC/18", key: "rc18" },
  { label: "XR", key: "xr" },
];

const careerPitcherColumns = [
  { label: "이름", key: "name" },
  { label: "경기", key: "g" },
  { label: "선발", key: "gs" },
  { label: "구원", key: "gr" },
  { label: "승", key: "w" },
  { label: "패", key: "l" },
  { label: "세이브", key: "sv" },
  { label: "홀드", key: "hld" },
  { label: "이닝", key: "ipDisplay" },
  { label: "타자", key: "bf" },
  { label: "타수", key: "ab" },
  { label: "피안타", key: "h" },
  { label: "피홈런", key: "hr" },
  { label: "볼넷", key: "bb" },
  { label: "사구", key: "hbp" },
  { label: "삼진", key: "so" },
  { label: "실점", key: "r" },
  { label: "자책", key: "er" },
  { label: "ERA", key: "era" },
  { label: "WHIP", key: "whip" },
];

const teamRecordColumns = [
  { label: "날짜", key: "date" },
  { label: "상대팀", key: "opponent" },
  { label: "결과", key: "result" },
  { label: "득점", key: "scoreFor" },
  { label: "실점", key: "scoreAgainst" },
  { label: "안타", key: "hits" },
  { label: "2루타", key: "doubles" },
  { label: "3루타", key: "triples" },
  { label: "홈런", key: "homeRuns" },
  { label: "타점", key: "rbi" },
  { label: "득점권", key: "risp" },
  { label: "도루", key: "stolenBases" },
  { label: "볼넷", key: "walks" },
  { label: "삼진", key: "strikeouts" },
  { label: "실책", key: "errors" },
  { label: "비고", key: "notes" },
];

const gameLogBatterColumns = [
  { label: "날짜", key: "date" },
  { label: "상대팀", key: "opponent" },
  { label: "선수명", key: "player" },
  { label: "타석", key: "pa" },
  { label: "타수", key: "ab" },
  { label: "안타", key: "h" },
  { label: "2루타", key: "d2" },
  { label: "3루타", key: "d3" },
  { label: "홈런", key: "hr" },
  { label: "타점", key: "rbi" },
  { label: "득점", key: "r" },
  { label: "도루", key: "sb" },
  { label: "볼넷", key: "bb" },
  { label: "사구", key: "hbp" },
  { label: "삼진", key: "so" },
  { label: "희생플라이", key: "sf" },
  { label: "희생번트", key: "sh" },
  { label: "타율", key: "avg" },
  { label: "출루율", key: "obp" },
  { label: "장타율", key: "slg" },
  { label: "OPS", key: "ops" },
];

const gameLogPitcherColumns = [
  { label: "날짜", key: "date" },
  { label: "상대팀", key: "opponent" },
  { label: "선수명", key: "player" },
  { label: "이닝", key: "ipDisplay" },
  { label: "피안타", key: "h" },
  { label: "피홈런", key: "hr" },
  { label: "볼넷", key: "bb" },
  { label: "사구", key: "hbp" },
  { label: "탈삼진", key: "so" },
  { label: "실점", key: "r" },
  { label: "자책", key: "er" },
  { label: "승", key: "w" },
  { label: "패", key: "l" },
  { label: "세이브", key: "sv" },
  { label: "홀드", key: "hld" },
  { label: "평균자책", key: "era" },
];

const hitterRankConfigs = [
  { key: "g", label: "경기수" },
  { key: "pa", label: "타석" },
  { key: "ab", label: "타수" },
  { key: "h", label: "총안타" },
  { key: "h1", label: "안타" },
  { key: "d2", label: "2루타" },
  { key: "d3", label: "3루타" },
  { key: "hr", label: "홈런" },
  { key: "tb", label: "루타" },
  { key: "rbi", label: "타점" },
  { key: "r", label: "득점" },
  { key: "sb", label: "도루" },
  { key: "cs", label: "도루실패" },
  { key: "bb", label: "볼넷" },
  { key: "hbp", label: "사구" },
  { key: "bbhbp", label: "사사구" },
  { key: "so", label: "삼진" },
  { key: "dp", label: "병살" },
  { key: "avg", label: "AVG", separateQualification: true },
  { key: "obp", label: "출루율", separateQualification: true },
  { key: "slg", label: "장타율", separateQualification: true },
  { key: "ops", label: "OPS", separateQualification: true },
  { key: "rc", label: "RC", qualificationHighlight: true },
  { key: "rc18", label: "RC/18", qualificationHighlight: true },
  { key: "xr", label: "XR", qualificationHighlight: true },
];

const pitcherRankConfigs = [
  { key: "g", label: "출장" },
  { key: "gs", label: "선발" },
  { key: "gr", label: "구원" },
  { key: "w", label: "승" },
  { key: "l", label: "패" },
  { key: "sv", label: "세이브" },
  { key: "hld", label: "홀드" },
  { key: "ip", label: "이닝", displayKey: "ipDisplay" },
  { key: "bf", label: "타자" },
  { key: "ab", label: "타수" },
  { key: "h", label: "피안타" },
  { key: "hr", label: "피홈런" },
  { key: "bb", label: "볼넷" },
  { key: "hbp", label: "사구" },
  { key: "so", label: "삼진" },
  { key: "r", label: "실점" },
  { key: "er", label: "자책점" },
  { key: "winPct", label: "승률" },
  { key: "era", label: "ERA", lowerIsBetter: true },
  { key: "ra7", label: "RA7", lowerIsBetter: true },
  { key: "bb7", label: "BB/7", lowerIsBetter: true },
  { key: "k7", label: "K/7" },
  { key: "whip", label: "WHIP", lowerIsBetter: true },
  { key: "baa", label: "피안타율", lowerIsBetter: true },
];

["winPct", "era", "ra7", "bb7", "k7", "whip", "baa"].forEach((key) => {
  const target = pitcherRankConfigs.find((config) => config.key === key);
  if (target) {
    target.separateQualification = true;
  }
});

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
    avg: "0.000",
    obp: "0.333",
    slg: "0.000",
    ops: "0.333",
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
    avg: "0.000",
    obp: "0.333",
    slg: "0.000",
    ops: "0.333",
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

const HITTER_YEAR_REQUIRED_PLAYERS = {
  "2022": ["정원석", "주문철", "최대환"],
  "2023": ["최대환"],
  "2024": ["최대환", "한재혁", "강준형", "정병건"],
  "2025": ["정해성", "최민우"],
};

const EXCLUDE_FROM_CAREER_BATTERS = ["강준형", "정병건"];
let teamImportDrafts = {};
const teamPageNotices = {};
const expandedTeamRecordIds = new Set();

let gameRecords = loadStoredJsonArray(GAME_STORAGE_KEYS.records);
let playerGameLogs = loadStoredJsonArray(GAME_STORAGE_KEYS.batterLogs);
let pitcherGameLogs = loadStoredJsonArray(GAME_STORAGE_KEYS.pitcherLogs);
let registeredPlayers = loadStoredJsonArray(GAME_STORAGE_KEYS.registeredPlayers);
teamImportDrafts = loadStoredJsonObject(GAME_STORAGE_KEYS.drafts);

function safeNumberLocal(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
}

function loadStoredJsonArray(storageKey) {
  if (typeof localStorage === "undefined") {
    return [];
  }

  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("[watchdogs] 저장 데이터 로드 실패:", storageKey, error);
    return [];
  }
}

function loadStoredJsonObject(storageKey) {
  if (typeof localStorage === "undefined") {
    return {};
  }

  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch (error) {
    console.warn("[watchdogs] 객체 데이터 로드 실패:", storageKey, error);
    return {};
  }
}

function saveStoredJsonArray(storageKey, value) {
  if (typeof localStorage === "undefined") {
    return;
  }

  try {
    localStorage.setItem(storageKey, JSON.stringify(value));
  } catch (error) {
    console.warn("[watchdogs] 저장 데이터 저장 실패:", storageKey, error);
  }
}

function saveStoredJsonObject(storageKey, value) {
  if (typeof localStorage === "undefined") {
    return;
  }

  try {
    localStorage.setItem(storageKey, JSON.stringify(value));
  } catch (error) {
    console.warn("[watchdogs] 객체 데이터 저장 실패:", storageKey, error);
  }
}

function persistGameStorage() {
  saveStoredJsonArray(GAME_STORAGE_KEYS.records, gameRecords);
  saveStoredJsonArray(
    GAME_STORAGE_KEYS.records2026,
    gameRecords.filter((record) => String(record.year) === "2026")
  );
  saveStoredJsonArray(GAME_STORAGE_KEYS.batterLogs, playerGameLogs);
  saveStoredJsonArray(GAME_STORAGE_KEYS.pitcherLogs, pitcherGameLogs);
}

function persistTeamImportDrafts() {
  saveStoredJsonObject(GAME_STORAGE_KEYS.drafts, teamImportDrafts);
}

function persistRegisteredPlayers() {
  const uniquePlayers = Array.from(new Set((registeredPlayers || []).map((name) => normalizePlayerName(name)).filter(Boolean)));
  registeredPlayers = uniquePlayers;
  saveStoredJsonArray(GAME_STORAGE_KEYS.registeredPlayers, uniquePlayers);
}

function formatDecimal(value, digits = 3) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return "0".padEnd(digits + 2, "0");
  }
  return numeric.toFixed(digits);
}

function formatEraOrWhip(value, digits = 2) {
  if (value === "#DIV/0!") {
    return value;
  }
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return "#DIV/0!";
  }
  return numeric.toFixed(digits);
}

function formatWinPct(wins, losses) {
  const total = safeNumberLocal(wins) + safeNumberLocal(losses);
  if (!total) {
    return "0.000";
  }
  return (safeNumberLocal(wins) / total).toFixed(3);
}

function formatFractionalInnings(value) {
  const numeric = safeNumberLocal(value);
  const outs = Math.round(numeric * 3);
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

function sortNamesKo(names) {
  return [...names].sort((left, right) => String(left || "").localeCompare(String(right || ""), "ko"));
}

function sortHitterYearNames(year, names) {
  const sorted = sortNamesKo(names);

  if (year !== "2024") {
    return sorted;
  }

  const pinned = ["강준형", "정병건"];
  const base = sorted.filter((name) => !pinned.includes(name));
  const tail = pinned.filter((name) => sorted.includes(name));
  return [...base, ...tail];
}

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

function findPlayerMeta(type, name) {
  const rowGetter = type === "pitcher" ? getHistoricalPitcherRows : getHistoricalBatterRows;

  for (const year of CAREER_YEARS) {
    const row = rowGetter(year).find((entry) => entry.player === name);
    if (row) {
      return row;
    }
  }

  return null;
}

function getDisplayPlayersForYear(type, year) {
  const names = new Set();
  const rows = type === "pitcher" ? getHistoricalPitcherRows(year) : getHistoricalBatterRows(year);

  rows.forEach((row) => {
    if (row.player) {
      names.add(row.player);
    }
  });

  if (type === "hitter") {
    if (typeof PLAYERS !== "undefined") {
      PLAYERS.forEach((name) => names.add(name));
    }
    (HITTER_YEAR_REQUIRED_PLAYERS[year] || []).forEach((name) => names.add(name));
  }

  return type === "hitter" ? sortHitterYearNames(year, names) : sortNamesKo(names);
}

function getAllPlayersFromYearlyData(type) {
  const names = new Set();

  CAREER_YEARS.forEach((year) => {
    getDisplayPlayersForYear(type, year).forEach((name) => names.add(name));
  });

  return sortNamesKo(names);
}

function getPlayerStatus(name) {
  if (typeof PLAYER_STATUS_MAP === "undefined") {
    return "active";
  }
  return PLAYER_STATUS_MAP[name] || "active";
}

function getCareerPlayerOrder(type) {
  if (typeof SOURCE_DATA === "undefined") {
    return [];
  }

  const source =
    type === "pitcher"
      ? SOURCE_DATA.historicalCareerPitchers
      : SOURCE_DATA.historicalCareerBatters;

  return source ? Object.keys(source) : [];
}

function mergeCareerPlayerOrder(type, accumulator) {
  const baseOrder = getCareerPlayerOrder(type);
  const ordered = baseOrder.filter((name) => accumulator.has(name));
  const extras = Array.from(accumulator.keys()).filter((name) => !baseOrder.includes(name));
  return [...ordered, ...extras];
}

function toHitterRow(row) {
  const stats = {
    AB: safeNumberLocal(row.AB),
    H: safeNumberLocal(row.H),
    H1: safeNumberLocal(row.H1),
    D2: safeNumberLocal(row.D2),
    D3: safeNumberLocal(row.D3),
    HR: safeNumberLocal(row.HR),
    TB: safeNumberLocal(row.TB),
    BB: safeNumberLocal(row.BB),
    HBP: safeNumberLocal(row.HBP),
    BBHBP: safeNumberLocal(row.BBHBP),
    SH: safeNumberLocal(row.SH),
    SF: safeNumberLocal(row.SF),
    SB: safeNumberLocal(row.SB),
    CS: safeNumberLocal(row.CS),
    SO: safeNumberLocal(row.SO),
    GIDP: safeNumberLocal(row.GIDP),
  };
  const calculated = calcBatting(stats);

  return {
    name: row.player,
    number: row.number === "" ? "" : Number(row.number),
    pos: row.position || row.hand || "",
    g: safeNumberLocal(row.G),
    pa: safeNumberLocal(row.PA),
    ab: stats.AB,
    h: stats.H,
    h1: calculated.H1,
    d2: stats.D2,
    d3: stats.D3,
    hr: stats.HR,
    tb: calculated.TB,
    rbi: safeNumberLocal(row.RBI),
    r: safeNumberLocal(row.R),
    sb: stats.SB,
    cs: stats.CS,
    sh: stats.SH,
    sf: stats.SF,
    bb: stats.BB,
    hbp: stats.HBP,
    bbhbp: calculated.BBHBP,
    so: stats.SO,
    dp: stats.GIDP,
    avg: formatDecimal(calculated.AVG),
    obp: formatDecimal(calculated.OBP),
    slg: formatDecimal(calculated.SLG),
    ops: formatDecimal(calculated.OPS),
    status: getPlayerStatus(row.player),
  };
}

function toPitcherSeasonRow(year, row) {
  const extras = pitcherYearExtras[year]?.[row.player] || { wp: 0, bk: 0 };
  const pitching = calcPitching({
    IP: safeNumberLocal(row.IP),
    ER: safeNumberLocal(row.ER),
    H: safeNumberLocal(row.H),
    BB: safeNumberLocal(row.BB),
  });

  const innings = safeNumberLocal(row.IP);
  const hits = safeNumberLocal(row.H);
  const walks = safeNumberLocal(row.BB);
  const strikeouts = safeNumberLocal(row.SO);
  const atBats = safeNumberLocal(row.AB);

  const bb7 = innings ? ((walks * 7) / innings).toFixed(3) : "#DIV/0!";
  const k7 = innings ? ((strikeouts * 7) / innings).toFixed(3) : "#DIV/0!";
  const baa = atBats ? (hits / atBats).toFixed(3) : "#DIV/0!";

  return {
    name: row.player,
    number: row.number || "",
    g: safeNumberLocal(row.G),
    gs: safeNumberLocal(row.GS),
    gr: safeNumberLocal(row.GR),
    w: safeNumberLocal(row.W),
    l: safeNumberLocal(row.L),
    sv: safeNumberLocal(row.SV),
    hld: safeNumberLocal(row.HLD),
    ip: innings,
    ipDisplay: formatFractionalInnings(innings),
    bf: safeNumberLocal(row.BF),
    ab: atBats,
    h: hits,
    hr: safeNumberLocal(row.HR),
    sh: safeNumberLocal(row.SH),
    sf: safeNumberLocal(row.SF),
    bb: walks,
    hbp: safeNumberLocal(row.HBP),
    bbhbp: safeNumberLocal(row.BBHBP),
    so: strikeouts,
    wp: safeNumberLocal(extras.wp),
    bk: safeNumberLocal(extras.bk),
    r: safeNumberLocal(row.R),
    er: safeNumberLocal(row.ER),
    winPct: formatWinPct(row.W, row.L),
    era: innings ? formatEraOrWhip(pitching.ERA, 2) : "#DIV/0!",
    bb7,
    k7,
    whip: innings ? formatEraOrWhip(pitching.WHIP, 2) : "#DIV/0!",
    baa,
    status: getPlayerStatus(row.player),
  };
}

function createEmptyHitterDisplayRow(name) {
  const meta = findPlayerMeta("hitter", name);

  return {
    name,
    number: meta && meta.number !== "" && meta.number != null ? Number(meta.number) : "",
    pos: meta ? meta.position || meta.hand || "" : "",
    g: 0,
    pa: 0,
    ab: 0,
    h: 0,
    h1: 0,
    d2: 0,
    d3: 0,
    hr: 0,
    tb: 0,
    rbi: 0,
    r: 0,
    sb: 0,
    cs: 0,
    sh: 0,
    sf: 0,
    bb: 0,
    hbp: 0,
    bbhbp: 0,
    so: 0,
    dp: 0,
    avg: "0.000",
    obp: "0.000",
    slg: "0.000",
    ops: "0.000",
    status: getPlayerStatus(name),
  };
}

function buildHitterYearData(year) {
  const yearRows = new Map(getHistoricalBatterRows(year).map((row) => [row.player, row]));

  return getDisplayPlayersForYear("hitter", year).map((name) => {
    const sourceRow = yearRows.get(name);
    const base = sourceRow ? toHitterRow(sourceRow) : createEmptyHitterDisplayRow(name);
    const override = year === "2022" ? player2022Overrides[base.name] : null;
    return override ? { ...base, ...override, status: getPlayerStatus(base.name) } : base;
  });
}

function buildPitcherTotalRow(rows) {
  const totals = rows.reduce(
    (acc, row) => {
      acc.g += safeNumberLocal(row.g);
      acc.gs += safeNumberLocal(row.gs);
      acc.gr += safeNumberLocal(row.gr);
      acc.w += safeNumberLocal(row.w);
      acc.l += safeNumberLocal(row.l);
      acc.sv += safeNumberLocal(row.sv);
      acc.hld += safeNumberLocal(row.hld);
      acc.ip += safeNumberLocal(row.ip);
      acc.bf += safeNumberLocal(row.bf);
      acc.ab += safeNumberLocal(row.ab);
      acc.h += safeNumberLocal(row.h);
      acc.hr += safeNumberLocal(row.hr);
      acc.sh += safeNumberLocal(row.sh);
      acc.sf += safeNumberLocal(row.sf);
      acc.bb += safeNumberLocal(row.bb);
      acc.hbp += safeNumberLocal(row.hbp);
      acc.bbhbp += safeNumberLocal(row.bbhbp);
      acc.so += safeNumberLocal(row.so);
      acc.wp += safeNumberLocal(row.wp);
      acc.bk += safeNumberLocal(row.bk);
      acc.r += safeNumberLocal(row.r);
      acc.er += safeNumberLocal(row.er);
      return acc;
    },
    {
      g: 0,
      gs: 0,
      gr: 0,
      w: 0,
      l: 0,
      sv: 0,
      hld: 0,
      ip: 0,
      bf: 0,
      ab: 0,
      h: 0,
      hr: 0,
      sh: 0,
      sf: 0,
      bb: 0,
      hbp: 0,
      bbhbp: 0,
      so: 0,
      wp: 0,
      bk: 0,
      r: 0,
      er: 0,
    }
  );

  const pitching = calcPitching({
    IP: totals.ip,
    ER: totals.er,
    H: totals.h,
    BB: totals.bb,
  });

  return {
    name: "",
    number: "",
    isTotal: true,
    ...totals,
    ipDisplay: formatFractionalInnings(totals.ip),
    winPct: formatWinPct(totals.w, totals.l),
    era: formatEraOrWhip(pitching.ERA, 2),
    bb7: totals.ip ? ((totals.bb * 7) / totals.ip).toFixed(3) : "#DIV/0!",
    k7: totals.ip ? ((totals.so * 7) / totals.ip).toFixed(3) : "#DIV/0!",
    whip: formatEraOrWhip(pitching.WHIP, 2),
    baa: totals.ab ? (totals.h / totals.ab).toFixed(3) : "#DIV/0!",
  };
}

function buildPitcherYearData(year) {
  const rows = getHistoricalPitcherRows(year).map((row) => toPitcherSeasonRow(year, row));
  return rows.length ? [...rows, buildPitcherTotalRow(rows)] : rows;
}

function buildCareerHitterData() {
  const players = Array.from(
    new Set([...getAllPlayersFromYearlyData("hitter"), ...playerGameLogs.map((entry) => entry.player)])
  ).filter(
    (name) => !EXCLUDE_FROM_CAREER_BATTERS.includes(name)
  );

  return players.map((name) => {
    const totals = {
      G: 0,
      PA: 0,
      AB: 0,
      H: 0,
      H1: 0,
      D2: 0,
      D3: 0,
      HR: 0,
      TB: 0,
      RBI: 0,
      R: 0,
      SB: 0,
      CS: 0,
      BB: 0,
      HBP: 0,
      BBHBP: 0,
      SO: 0,
      GIDP: 0,
      SH: 0,
      SF: 0,
    };

    CAREER_YEARS.forEach((year) => {
      const row = (hitterDataByYear[year] || []).find((entry) => entry.name === name) || createEmptyHitterDisplayRow(name);
      totals.G += safeNumberLocal(row.g);
      totals.PA += safeNumberLocal(row.pa);
      totals.AB += safeNumberLocal(row.ab);
      totals.H += safeNumberLocal(row.h);
      totals.H1 += safeNumberLocal(row.h1);
      totals.D2 += safeNumberLocal(row.d2);
      totals.D3 += safeNumberLocal(row.d3);
      totals.HR += safeNumberLocal(row.hr);
      totals.TB += safeNumberLocal(row.tb);
      totals.RBI += safeNumberLocal(row.rbi);
      totals.R += safeNumberLocal(row.r);
      totals.SB += safeNumberLocal(row.sb);
      totals.CS += safeNumberLocal(row.cs);
      totals.BB += safeNumberLocal(row.bb);
      totals.HBP += safeNumberLocal(row.hbp);
      totals.BBHBP += safeNumberLocal(row.bbhbp);
      totals.SO += safeNumberLocal(row.so);
      totals.GIDP += safeNumberLocal(row.dp);
      totals.SH += safeNumberLocal(row.sh);
      totals.SF += safeNumberLocal(row.sf);
    });

    playerGameLogs
      .filter((entry) => entry.player === name)
      .forEach((entry) => {
        totals.G += 1;
        totals.PA += safeNumberLocal(entry.pa);
        totals.AB += safeNumberLocal(entry.ab);
        totals.H += safeNumberLocal(entry.h);
        totals.H1 += Math.max(
          0,
          safeNumberLocal(entry.h) - safeNumberLocal(entry.d2) - safeNumberLocal(entry.d3) - safeNumberLocal(entry.hr)
        );
        totals.D2 += safeNumberLocal(entry.d2);
        totals.D3 += safeNumberLocal(entry.d3);
        totals.HR += safeNumberLocal(entry.hr);
        totals.TB += safeNumberLocal(entry.tb);
        totals.RBI += safeNumberLocal(entry.rbi);
        totals.R += safeNumberLocal(entry.r);
        totals.SB += safeNumberLocal(entry.sb);
        totals.BB += safeNumberLocal(entry.bb);
        totals.HBP += safeNumberLocal(entry.hbp);
        totals.BBHBP += safeNumberLocal(entry.bb) + safeNumberLocal(entry.hbp);
        totals.SO += safeNumberLocal(entry.so);
        totals.SH += safeNumberLocal(entry.sh);
        totals.SF += safeNumberLocal(entry.sf);
      });

    const calculated = calcBatting(totals);
    return {
      name,
      g: totals.G,
      pa: totals.PA,
      ab: totals.AB,
      h: totals.H,
      h1: totals.H1,
      d2: totals.D2,
      d3: totals.D3,
      hr: totals.HR,
      tb: calculated.TB,
      rbi: totals.RBI,
      r: totals.R,
      sb: totals.SB,
      cs: totals.CS,
      bb: totals.BB,
      hbp: totals.HBP,
      bbhbp: calculated.BBHBP,
      so: totals.SO,
      dp: totals.GIDP,
      avg: formatDecimal(calculated.AVG),
      obp: formatDecimal(calculated.OBP),
      slg: formatDecimal(calculated.SLG),
      ops: formatDecimal(calculated.OPS),
      rc: formatDecimal(calculated.RC),
      rc18: formatDecimal(calculated.RC18),
      xr: formatDecimal(calculated.XR),
      status: getPlayerStatus(name),
    };
  });
}

function buildCareerPitcherData() {
  const players = Array.from(
    new Set([...getAllPlayersFromYearlyData("pitcher"), ...pitcherGameLogs.map((entry) => entry.player)])
  );

  return players.map((name) => {
    const totals = {
      G: 0,
      GS: 0,
      GR: 0,
      W: 0,
      L: 0,
      SV: 0,
      HLD: 0,
      IP: 0,
      BF: 0,
      AB: 0,
      H: 0,
      HR: 0,
      BB: 0,
      HBP: 0,
      SO: 0,
      R: 0,
      ER: 0,
    };

    CAREER_YEARS.forEach((year) => {
      const row = (pitcherDataByYear[year] || []).find((entry) => entry.name === name);
      if (!row || row.isTotal) {
        return;
      }

      totals.G += safeNumberLocal(row.g);
      totals.GS += safeNumberLocal(row.gs);
      totals.GR += safeNumberLocal(row.gr);
      totals.W += safeNumberLocal(row.w);
      totals.L += safeNumberLocal(row.l);
      totals.SV += safeNumberLocal(row.sv);
      totals.HLD += safeNumberLocal(row.hld);
      totals.IP += safeNumberLocal(row.ip);
      totals.BF += safeNumberLocal(row.bf);
      totals.AB += safeNumberLocal(row.ab);
      totals.H += safeNumberLocal(row.h);
      totals.HR += safeNumberLocal(row.hr);
      totals.BB += safeNumberLocal(row.bb);
      totals.HBP += safeNumberLocal(row.hbp);
      totals.SO += safeNumberLocal(row.so);
      totals.R += safeNumberLocal(row.r);
      totals.ER += safeNumberLocal(row.er);
    });

    pitcherGameLogs
      .filter((entry) => entry.player === name)
      .forEach((entry) => {
        totals.G += 1;
        totals.IP += safeNumberLocal(entry.ip);
        totals.BF += safeNumberLocal(entry.bf);
        totals.AB += safeNumberLocal(entry.ab);
        totals.H += safeNumberLocal(entry.h);
        totals.HR += safeNumberLocal(entry.hr);
        totals.BB += safeNumberLocal(entry.bb);
        totals.HBP += safeNumberLocal(entry.hbp);
        totals.SO += safeNumberLocal(entry.so);
        totals.R += safeNumberLocal(entry.r);
        totals.ER += safeNumberLocal(entry.er);
        totals.W += safeNumberLocal(entry.w);
        totals.L += safeNumberLocal(entry.l);
        totals.SV += safeNumberLocal(entry.sv);
        totals.HLD += safeNumberLocal(entry.hld);
      });

    const calculated = calcPitching(totals);
    return {
      name,
      g: totals.G,
      gs: totals.GS,
      gr: totals.GR,
      w: totals.W,
      l: totals.L,
      sv: totals.SV,
      hld: totals.HLD,
      ip: totals.IP,
      ipDisplay: formatFractionalInnings(totals.IP),
      bf: totals.BF,
      ab: totals.AB,
      h: totals.H,
      hr: totals.HR,
      bb: totals.BB,
      hbp: totals.HBP,
      so: totals.SO,
      r: totals.R,
      er: totals.ER,
      winPct: formatWinPct(totals.W, totals.L),
      era: totals.IP ? formatEraOrWhip(calculated.ERA, 2) : "#DIV/0!",
      ra7: totals.IP ? formatEraOrWhip((totals.R * 7) / totals.IP, 2) : "#DIV/0!",
      bb7: totals.IP ? ((totals.BB * 7) / totals.IP).toFixed(3) : "#DIV/0!",
      k7: totals.IP ? ((totals.SO * 7) / totals.IP).toFixed(3) : "#DIV/0!",
      whip: totals.IP ? formatEraOrWhip(calculated.WHIP, 2) : "#DIV/0!",
      baa: totals.AB ? (totals.H / totals.AB).toFixed(3) : "#DIV/0!",
      status: getPlayerStatus(name),
    };
  });
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

let careerHitters2022To2025 = [];
let careerPitchers2022To2025 = [];

function recalculateCareerStatsFromGameLogs() {
  careerHitters2022To2025 = buildCareerHitterData();
  careerPitchers2022To2025 = buildCareerPitcherData();
}

recalculateCareerStatsFromGameLogs();

function sortRowsByName(rows) {
  return [...rows].sort((left, right) =>
    String(left.name || "").localeCompare(String(right.name || ""), "ko")
  );
}

function getVisibleHitterRows(year) {
  return (hitterDataByYear[year] || []).filter((row) => safeNumberLocal(row.g) > 0);
}

function getVisibleCareerHitterRows() {
  return careerHitters2022To2025.filter((row) => safeNumberLocal(row.g) > 0);
}

function getCareerTeamGames() {
  const historicalGames = CAREER_YEARS.reduce((total, year) => {
    const hitterMax = (hitterDataByYear[year] || []).reduce(
      (max, row) => Math.max(max, safeNumberLocal(row.g)),
      0
    );
    const pitcherMax = (pitcherDataByYear[year] || []).reduce(
      (max, row) => (row.isTotal ? max : Math.max(max, safeNumberLocal(row.g))),
      0
    );

    return total + Math.max(hitterMax, pitcherMax);
  }, 0);

  const importedGames = gameRecords.length;
  return historicalGames + importedGames;
}

function formatBaseballRate(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return ".000";
  }

  const fixed = numeric.toFixed(3);
  return fixed.startsWith("0.") ? fixed.slice(1) : fixed;
}

function formatRecordDate(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }

  const match = text.match(/(\d{4})[.\-/](\d{1,2})[.\-/](\d{1,2})/);
  if (match) {
    const [, year, month, day] = match;
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  return text;
}

function getSimpleHash(value) {
  return Array.from(String(value || "")).reduce((hash, char) => {
    return (hash * 31 + char.charCodeAt(0)) >>> 0;
  }, 7);
}

function formatDateForDisplay(value) {
  const normalized = formatRecordDate(value);
  if (!normalized) {
    return "-";
  }
  return normalized.replaceAll("-", ".");
}

function normalizeHeaderKey(value) {
  return String(value || "")
    .replace(/\s+/g, "")
    .replace(/[()·,:/]/g, "")
    .toLowerCase();
}

function normalizePlayerName(name) {
  return String(name || "").replace(/\s+/g, "").trim();
}

function normalizeComparablePlayerName(name) {
  return normalizePlayerName(name).replace(/[^가-힣A-Za-z]/g, "");
}

function findKnownPlayerMatch(name, extraPlayers = []) {
  const comparable = normalizeComparablePlayerName(name);
  if (!comparable) {
    return "";
  }

  const knownPlayers = getKnownPlayers(extraPlayers);
  const exact = knownPlayers.find((player) => normalizeComparablePlayerName(player) === comparable);
  if (exact) {
    return exact;
  }

  return knownPlayers.find((player) => comparable.includes(normalizeComparablePlayerName(player)) || normalizeComparablePlayerName(player).includes(comparable)) || "";
}

function getKnownPlayers(extraPlayers = []) {
  return Array.from(
    new Set(
      [...(Array.isArray(PLAYERS) ? PLAYERS : []), ...(registeredPlayers || []), ...(extraPlayers || [])]
        .map((name) => normalizePlayerName(name))
        .filter(Boolean)
    )
  );
}

function hasKnownPlayer(name, extraPlayers = []) {
  return getKnownPlayers(extraPlayers).includes(normalizePlayerName(name));
}

function ensureRegisteredPlayer(name) {
  const normalized = normalizePlayerName(name);
  if (!normalized || hasKnownPlayer(normalized)) {
    return normalized;
  }

  registeredPlayers = [...(registeredPlayers || []), normalized];
  persistRegisteredPlayers();
  return normalized;
}

function createEmptyTeamBattingSummary() {
  return {
    hits: 0,
    doubles: 0,
    triples: 0,
    homeRuns: 0,
    rbi: 0,
    risp: "",
    stolenBases: 0,
    walks: 0,
    strikeouts: 0,
    errors: 0,
    notes: "",
  };
}

function createEmptyNormalizedRecord(year = state.teamYear) {
  return {
    id: "",
    year,
    date: "",
    gameTitle: "",
    opponent: "",
    result: "",
    scoreFor: 0,
    scoreAgainst: 0,
    sourceUrl: "",
    sourceText: "",
    teamBattingSummary: createEmptyTeamBattingSummary(),
    playerBattingRows: [],
    pitcherRows: [],
    unmatchedPlayers: [],
    matchingMap: {},
    createdAt: "",
    updatedAt: "",
  };
}

function createEmptyTeamImportDraft(year = state.teamYear, seed = {}) {
  const sourceUrl = String(seed.sourceUrl || "").trim();
  const rawText = String(seed.rawText || seed.sourceText || "").trim();
  const pendingRegisteredPlayers = Array.isArray(seed.pendingRegisteredPlayers)
    ? seed.pendingRegisteredPlayers.map((name) => normalizePlayerName(name)).filter(Boolean)
    : [];
  const baseRecord = seed.record
    ? normalizeGameRecord(seed.record, {
        year,
        sourceUrl,
        sourceText: rawText,
        matchingMap: seed.record.matchingMap || seed.matchingMap || {},
        additionalPlayers: pendingRegisteredPlayers,
        createdAt: seed.record.createdAt,
      })
    : createEmptyNormalizedRecord(year);

  return {
    year: String(year),
    sourceUrl,
    rawText,
    parsedSourceUrl: String(seed.parsedSourceUrl ?? (seed.record ? sourceUrl : "")).trim(),
    parsedRawText: String(seed.parsedRawText ?? (seed.record ? rawText : "")).trim(),
    pendingRegisteredPlayers,
    warnings: Array.isArray(seed.warnings) ? seed.warnings : [],
    record: baseRecord,
    originalPreview: rawText,
    updatedAt: seed.updatedAt || new Date().toISOString(),
  };
}

function extractPlayerNameFromLine(line, extraPlayers = []) {
  const source = String(line || "");
  const candidates = getKnownPlayers(extraPlayers).sort((left, right) => right.length - left.length);

  for (const player of candidates) {
    const comparablePlayer = normalizeComparablePlayerName(player);
    if (!comparablePlayer) {
      continue;
    }

    const comparableSource = normalizeComparablePlayerName(source);
    if (!comparableSource.includes(comparablePlayer)) {
      continue;
    }

    const directIndex = source.indexOf(player);
    if (directIndex >= 0) {
      const remaining = `${source.slice(0, directIndex)} ${source.slice(directIndex + player.length)}`.replace(/\s+/g, " ").trim();
      return { player, remaining };
    }

    const stripped = source.replace(/[^\w가-힣\s./:-]/g, " ");
    const strippedIndex = stripped.indexOf(player);
    if (strippedIndex >= 0) {
      const remaining = `${stripped.slice(0, strippedIndex)} ${stripped.slice(strippedIndex + player.length)}`.replace(/\s+/g, " ").trim();
      return { player, remaining };
    }
  }

  return { player: "", remaining: source.trim() };
}

function getTeamImportDraft(year) {
  const stored = teamImportDrafts[String(year)];
  if (!stored) {
    return createEmptyTeamImportDraft(year);
  }
  return createEmptyTeamImportDraft(year, stored);
}

function saveTeamImportDraft(year, draft) {
  teamImportDrafts[String(year)] = createEmptyTeamImportDraft(year, draft);
  persistTeamImportDrafts();
}

function clearTeamImportDraft(year) {
  delete teamImportDrafts[String(year)];
  persistTeamImportDrafts();
}

function splitPlainTextRow(line) {
  const normalizedLine = String(line || "").replace(/\u00a0/g, " ").trim();
  const extractedPlayer = extractPlayerNameFromLine(normalizedLine);
  if (extractedPlayer.player) {
    const numericTokens = extractedPlayer.remaining
      .split(/\s+/)
      .map((token) => token.trim())
      .filter(Boolean);
    if (numericTokens.length >= 4) {
      return [extractedPlayer.player, ...numericTokens];
    }
  }

  if (normalizedLine.includes("\t")) {
    return normalizedLine.split("\t").map((cell) => cell.trim());
  }

  if (normalizedLine.includes("|")) {
    return normalizedLine
      .split("|")
      .map((cell) => cell.trim());
  }

  return normalizedLine
    .split(/\s{2,}/)
    .map((cell) => cell.trim())
    .filter((cell) => cell !== "");
}

function matrixFromTableElement(table) {
  return Array.from(table.querySelectorAll("tr"))
    .map((row) =>
      Array.from(row.querySelectorAll("th,td"))
        .map((cell) => cell.textContent.replace(/\s+/g, " ").trim())
    )
    .filter((row) => row.some((cell) => cell !== ""));
}

function extractTableBlocksFromHtml(rawText) {
  if (typeof DOMParser === "undefined") {
    return [];
  }

  try {
    const doc = new DOMParser().parseFromString(rawText, "text/html");
    return Array.from(doc.querySelectorAll("table"))
      .map((table) => matrixFromTableElement(table))
      .filter((rows) => rows.length);
  } catch (error) {
    console.warn("[watchdogs] HTML 테이블 파싱 실패:", error);
    return [];
  }
}

function extractTableBlocksFromText(rawText) {
  const blocks = [];
  const lines = String(rawText || "")
    .split(/\r?\n/)
    .map((line) => line.trimEnd());

  let current = [];
  lines.forEach((line) => {
    if (!line.trim()) {
      if (current.length) {
        blocks.push(current);
        current = [];
      }
      return;
    }

    const cells = splitPlainTextRow(line);
    if (cells.length >= 2) {
      current.push(cells);
    } else if (current.length) {
      blocks.push(current);
      current = [];
    }
  });

  if (current.length) {
    blocks.push(current);
  }

  return blocks;
}

function findBestHeaderIndex(matrix, aliases) {
  let bestIndex = -1;
  let bestScore = 0;

  matrix.forEach((row, rowIndex) => {
    const normalized = row.map((cell) => normalizeHeaderKey(cell));
    const score = aliases.reduce((count, alias) => count + (normalized.includes(alias) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestIndex = rowIndex;
    }
  });

  return bestScore >= 2 ? bestIndex : -1;
}

function buildRowObject(header, row) {
  const record = {};
  header.forEach((key, index) => {
    record[key] = row[index] ?? "";
  });
  return record;
}

function getCellValue(row, aliases) {
  for (const alias of aliases) {
    if (row[alias] != null && row[alias] !== "") {
      return row[alias];
    }
  }
  return "";
}

function parseIntegerCell(value) {
  const numeric = Number(String(value || "").replace(/,/g, "").trim());
  return Number.isFinite(numeric) ? numeric : 0;
}

function parseStrictCountCell(value) {
  const text = String(value ?? "").replace(/,/g, "").trim();
  if (!text) {
    return { value: 0, suspicious: false, raw: text };
  }

  if (/^-?\d+$/.test(text)) {
    const numeric = Number(text);
    return {
      value: Number.isFinite(numeric) && numeric >= 0 ? numeric : 0,
      suspicious: numeric < 0,
      raw: text,
    };
  }

  if (/^-?(?:\d+\.\d+|\.\d+)$/.test(text)) {
    return { value: 0, suspicious: true, raw: text, reason: "decimal" };
  }

  return { value: 0, suspicious: true, raw: text, reason: "invalid" };
}

function parseCountValue(value) {
  return parseStrictCountCell(value).value;
}

function parseInningCell(value) {
  const text = String(value || "")
    .replace(/\u2153/g, " 1/3")
    .replace(/\u2154/g, " 2/3")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) {
    return 0;
  }

  if (/[⅓⅔]/.test(text)) {
    return parseInningCell(text.replace("⅓", " 1/3").replace("⅔", " 2/3"));
  }

  if (/^\d+\.\d$/.test(text)) {
    const [whole, remainder] = text.split(".");
    if (remainder === "1") {
      return parseIntegerCell(whole) + 1 / 3;
    }
    if (remainder === "2") {
      return parseIntegerCell(whole) + 2 / 3;
    }
  }

  if (text.includes(" ")) {
    const [whole, fraction] = text.split(" ");
    const base = parseIntegerCell(whole);
    if (fraction === "1/3") {
      return base + 1 / 3;
    }
    if (fraction === "2/3") {
      return base + 2 / 3;
    }
  }

  if (/^\d+\s*\/\s*3$/.test(text)) {
    const [num] = text.split("/");
    return parseIntegerCell(num) / 3;
  }

  return safeNumberLocal(text);
}

function isSummaryName(name) {
  const normalized = normalizePlayerName(name);
  return ["합계", "총계", "계", "team", "팀"].includes(normalized.toLowerCase()) || normalized === "";
}

function deriveBattingDisplayStats(row) {
  const calculated = calcBatting({
    AB: row.ab,
    H: row.h,
    H1: Math.max(0, row.h - row.d2 - row.d3 - row.hr),
    D2: row.d2,
    D3: row.d3,
    HR: row.hr,
    TB: row.tb,
    BB: row.bb,
    HBP: row.hbp,
    SH: row.sh,
    SF: row.sf,
    SB: row.sb,
    CS: 0,
    SO: row.so,
    GIDP: 0,
  });

  return {
    avg: formatDecimal(calculated.AVG),
    obp: formatDecimal(calculated.OBP),
    slg: formatDecimal(calculated.SLG),
    ops: formatDecimal(calculated.OPS),
    tb: calculated.TB,
  };
}

function derivePitchingDisplayStats(row) {
  const calculated = calcPitching({
    IP: row.ip,
    ER: row.er,
    H: row.h,
    BB: row.bb,
  });

  return {
    era: row.ip ? formatEraOrWhip(calculated.ERA, 2) : "#DIV/0!",
  };
}

function parseBatterSlotLabel(label, extraPlayers = []) {
  const raw = String(label || "").trim();
  const battingOrderMatch = raw.match(/^(\d+)/);
  const battingOrder = battingOrderMatch ? parseIntegerCell(battingOrderMatch[1]) : 0;
  const numberMatch = raw.match(/\((\d+)\)/);
  const number = numberMatch ? parseIntegerCell(numberMatch[1]) : "";
  const withoutOrder = raw.replace(/^\d+/, "");
  const withoutNumber = withoutOrder.replace(/\(\d+\)/g, "").trim();
  const matchedPlayer = findKnownPlayerMatch(withoutNumber, extraPlayers) || extractPlayerNameFromLine(withoutNumber, extraPlayers).player || normalizePlayerName(withoutNumber);
  const position = sanitizeDraftText(withoutNumber.replace(matchedPlayer, ""));

  return {
    battingOrder,
    position,
    player: matchedPlayer,
    originalPlayer: matchedPlayer || normalizePlayerName(withoutNumber),
    number,
  };
}

function parsePitcherLabel(label, extraPlayers = []) {
  const raw = String(label || "").trim();
  const numberMatch = raw.match(/\((\d+)\)/);
  const number = numberMatch ? parseIntegerCell(numberMatch[1]) : "";
  const cleaned = raw.replace(/\(\d+\)/g, "").trim();
  const matchedPlayer = findKnownPlayerMatch(cleaned, extraPlayers) || extractPlayerNameFromLine(cleaned, extraPlayers).player || normalizePlayerName(cleaned);
  return {
    player: matchedPlayer,
    originalPlayer: matchedPlayer || normalizePlayerName(cleaned),
    number,
  };
}

function normalizePitcherResultText(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "-";
  }
  if (text.includes("승")) {
    return "승";
  }
  if (text.includes("패")) {
    return "패";
  }
  return "-";
}

function cleanPlayerName(name) {
  return String(name || "").replace(/\(\d+\)/g, "").trim();
}

function normalizePitchCount(value) {
  const text = String(value ?? "").trim();
  if (!text || text === "0" || text === "-") {
    return "-";
  }
  return /^\d+$/.test(text) ? text : "-";
}

function normalizePitcherRow(row) {
  const source = Array.isArray(row) ? row : [];
  const clean = Array.from({ length: 19 }, (_, index) => {
    const value = source[index];
    const text = String(value ?? "").trim();
    return text || "-";
  });

  clean[0] = cleanPlayerName(clean[0]);
  clean[1] = normalizePitcherResultText(clean[1]);
  clean[16] = normalizePitchCount(clean[16]);

  return clean;
}

function splitGameLogTokens(text) {
  const normalized = String(text || "")
    .replace(/\u00a0/g, " ")
    .replace(/[→]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized || normalized === "-" || normalized === " " || normalized === "대수비") {
    return [];
  }

  const roughTokens = normalized
    .split(/[,\n;/]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  return roughTokens.flatMap((token) => {
    if (token.includes(" ") && !/^\d+\s*(?:1\/3|2\/3)$/.test(token)) {
      return token.split(/\s+/).map((part) => part.trim()).filter(Boolean);
    }
    return [token];
  });
}

function applyBatterEventToken(acc, token) {
  const text = normalizePlayerName(token);
  if (!text) {
    return;
  }

  if (/대수비/.test(text)) {
    return;
  }

  if (/도루/.test(text) && !/(안|홈런|2|3|삼진|땅|플|4구|사구|희번|희타|희플|병살)/.test(text)) {
    acc.sb += 1;
    return;
  }

  if (/폭투|포일/.test(text)) {
    return;
  }

  if (/주자아웃/.test(text)) {
    acc.outs += 1;
    return;
  }

  if (/\d.*R$|땅R|야선|선택수비|FC/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.outs += 1;
    return;
  }

  if (/희번|희타/.test(text)) {
    acc.pa += 1;
    acc.sh += 1;
    acc.outs += 1;
    return;
  }

  if (/희플/.test(text)) {
    acc.pa += 1;
    acc.sf += 1;
    acc.outs += 1;
    return;
  }

  if (/4구/.test(text)) {
    acc.pa += 1;
    acc.bb += 1;
    return;
  }

  if (/사구/.test(text)) {
    acc.pa += 1;
    acc.hbp += 1;
    return;
  }

  if (/낫아웃-/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.so += 1;
    return;
  }

  if (/낫아웃/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.so += 1;
    acc.outs += 1;
    return;
  }

  if (/병살/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.dp += 1;
    acc.outs += 2;
    return;
  }

  if (/삼진/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.so += 1;
    acc.outs += 1;
    return;
  }

  if (/홈런|HR|홈인/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.h += 1;
    acc.hr += 1;
    return;
  }

  if (/3루|3$/.test(text) && /안|선|중|우|좌|내|인/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.h += 1;
    acc.d3 += 1;
    return;
  }

  if (/2루|2$/.test(text) && /안|선|중|우|좌|내|인/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.h += 1;
    acc.d2 += 1;
    return;
  }

  if (/안/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.h += 1;
    return;
  }

  if (/실책|E\d*/i.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    return;
  }

  if (/땅|플|뜬|직|파울|비|라인/.test(text)) {
    acc.pa += 1;
    acc.ab += 1;
    acc.outs += 1;
    return;
  }

  acc.unknown.push(text);
}

function parseGameOneBattingEventRows(matrix) {
  const headerIndex = findBestHeaderIndex(matrix, ["선수", "1", "2", "3", "타수", "안타"]);
  if (headerIndex === -1) {
    return [];
  }

  const header = matrix[headerIndex].map((cell) => String(cell || "").trim());
  const normalizedHeader = header.map((cell) => normalizeHeaderKey(cell));
  const inningIndexes = normalizedHeader
    .map((cell, index) => (/^\d+$/.test(cell) ? index : -1))
    .filter((index) => index >= 0);

  const nameIndex = normalizedHeader.findIndex((cell) => cell === normalizeHeaderKey("선수") || cell === normalizeHeaderKey("선수명")) >= 0
    ? normalizedHeader.findIndex((cell) => cell === normalizeHeaderKey("선수") || cell === normalizeHeaderKey("선수명"))
    : 0;
  const abIndex = normalizedHeader.findIndex((cell) => cell === normalizeHeaderKey("타수") || cell === "ab");
  const hIndex = normalizedHeader.findIndex((cell) => cell === normalizeHeaderKey("안타") || cell === normalizeHeaderKey("총안타") || cell === "h");
  const rbiIndex = normalizedHeader.findIndex((cell) => cell === normalizeHeaderKey("타점") || cell === "rbi");
  const rIndex = normalizedHeader.findIndex((cell) => cell === normalizeHeaderKey("득점") || cell === "r");
  const sbIndex = normalizedHeader.findIndex((cell) => cell === normalizeHeaderKey("도루") || cell === "sb");
  const fallbackAbIndex = header.length - 7;
  const fallbackHIndex = header.length - 6;
  const fallbackRbiIndex = header.length - 5;
  const fallbackRIndex = header.length - 4;
  const fallbackSbIndex = header.length - 3;
  const resolvedAbIndex = abIndex >= 0 ? abIndex : fallbackAbIndex;
  const resolvedHIndex = hIndex >= 0 ? hIndex : fallbackHIndex;
  const resolvedRbiIndex = rbiIndex >= 0 ? rbiIndex : fallbackRbiIndex;
  const resolvedRIndex = rIndex >= 0 ? rIndex : fallbackRIndex;
  const resolvedSbIndex = sbIndex >= 0 ? sbIndex : fallbackSbIndex;

  if (inningIndexes.length < 3 || resolvedAbIndex < 0 || resolvedHIndex < 0) {
    return [];
  }

  const rows = [];
  matrix.slice(headerIndex + 1).forEach((cells) => {
    const rawName = String(cells[nameIndex] || "").trim();
    if (!rawName || isSummaryName(rawName)) {
      return;
    }

    const slot = parseBatterSlotLabel(rawName);
    if (!slot.player) {
      return;
    }

    const eventTotals = {
      pa: 0,
      ab: 0,
      h: 0,
      d2: 0,
      d3: 0,
      hr: 0,
      bb: 0,
      hbp: 0,
      so: 0,
      sh: 0,
      sf: 0,
      sb: 0,
      dp: 0,
      outs: 0,
      unknown: [],
    };

    inningIndexes.forEach((columnIndex) => {
      splitGameLogTokens(cells[columnIndex]).forEach((token) => applyBatterEventToken(eventTotals, token));
    });

    const summaryAb = parseStrictCountCell(cells[resolvedAbIndex]);
    const summaryH = parseStrictCountCell(cells[resolvedHIndex]);
    const summaryRbi = resolvedRbiIndex >= 0 ? parseStrictCountCell(cells[resolvedRbiIndex]) : { value: 0, suspicious: false };
    const summaryR = resolvedRIndex >= 0 ? parseStrictCountCell(cells[resolvedRIndex]) : { value: 0, suspicious: false };
    const summarySb = resolvedSbIndex >= 0 ? parseStrictCountCell(cells[resolvedSbIndex]) : { value: 0, suspicious: false };

    const flaggedFields = [];
    if (summaryAb.suspicious) flaggedFields.push("타수");
    if (summaryH.suspicious) flaggedFields.push("안타");
    if (summaryRbi.suspicious) flaggedFields.push("타점");
    if (summaryR.suspicious) flaggedFields.push("득점");
    if (summarySb.suspicious) flaggedFields.push("도루");
    if (eventTotals.unknown.length) flaggedFields.push(`미해석 이벤트:${eventTotals.unknown.join("/")}`);
    if (summaryAb.value !== eventTotals.ab) flaggedFields.push("타수 요약 불일치");
    if (summaryH.value !== eventTotals.h) flaggedFields.push("안타 요약 불일치");
    if (summarySb.value !== eventTotals.sb) flaggedFields.push("도루 요약 불일치");

    const display = deriveBattingDisplayStats({
      ...eventTotals,
      tb: Math.max(0, eventTotals.h - eventTotals.d2 - eventTotals.d3 - eventTotals.hr) + eventTotals.d2 * 2 + eventTotals.d3 * 3 + eventTotals.hr * 4,
    });

    rows.push({
      player: slot.player,
      originalPlayer: slot.originalPlayer,
      battingOrder: slot.battingOrder,
      pos: slot.position,
      number: slot.number,
      pa: eventTotals.pa,
      ab: eventTotals.ab,
      h: eventTotals.h,
      d2: eventTotals.d2,
      d3: eventTotals.d3,
      hr: eventTotals.hr,
      tb: display.tb,
      rbi: summaryRbi.value,
      r: summaryR.value,
      sb: summarySb.value,
      bb: eventTotals.bb,
      hbp: eventTotals.hbp,
      so: eventTotals.so,
      sf: eventTotals.sf,
      sh: eventTotals.sh,
      avg: display.avg,
      obp: display.obp,
      slg: display.slg,
      ops: display.ops,
      _draftFlags: flaggedFields,
    });
  });

  return rows;
}

function parseBattingRowsFromMatrix(matrix) {
  const eventRows = parseGameOneBattingEventRows(matrix);
  if (eventRows.length) {
    return eventRows;
  }

  const headerIndex = findBestHeaderIndex(matrix, ["선수", "선수명", "이름", "타석", "타수", "안타"]);
  if (headerIndex === -1) {
    return [];
  }

  const header = matrix[headerIndex].map((cell) => normalizeHeaderKey(cell));
  const dataRows = matrix.slice(headerIndex + 1);
  const rows = [];

  dataRows.forEach((cells) => {
    const row = buildRowObject(header, cells);
    const slot = parseBatterSlotLabel(getCellValue(row, ["선수명", "선수", "이름"]));
    const name = normalizePlayerName(slot.originalPlayer || slot.player);
    if (isSummaryName(name)) {
      return;
    }

    const flaggedFields = [];
    const parseCountField = (aliases, fieldName) => {
      const parsed = parseStrictCountCell(getCellValue(row, aliases));
      if (parsed.suspicious) {
        flaggedFields.push(fieldName);
      }
      return parsed.value;
    };
    const parsed = {
      player: slot.player || findKnownPlayerMatch(name) || name,
      originalPlayer: slot.originalPlayer || name,
      battingOrder: slot.battingOrder,
      pos: slot.position,
      number: slot.number,
      pa: parseCountField(["타석", "pa"], "타석"),
      ab: parseCountField(["타수", "ab"], "타수"),
      h: parseCountField(["총안타", "안타", "h"], "안타"),
      d2: parseCountField(["2루타", "2b"], "2루타"),
      d3: parseCountField(["3루타", "3b"], "3루타"),
      hr: parseCountField(["홈런", "hr"], "홈런"),
      rbi: parseCountField(["타점", "rbi"], "타점"),
      r: parseCountField(["득점", "r"], "득점"),
      sb: parseCountField(["도루", "sb"], "도루"),
      bb: parseCountField(["볼넷", "bb"], "볼넷"),
      hbp: parseCountField(["사구", "hbp"], "사구"),
      so: parseCountField(["삼진", "so"], "삼진"),
      sf: parseCountField(["희생플라이", "희플", "sf"], "희생플라이"),
      sh: parseCountField(["희생번트", "희생타", "희타", "sh"], "희생번트"),
      tb: parseCountField(["루타", "tb"], "루타"),
    };

    const display = deriveBattingDisplayStats(parsed);
    rows.push({
      ...parsed,
      tb: parsed.tb || display.tb,
      avg: display.avg,
      obp: display.obp,
      slg: display.slg,
      ops: display.ops,
      _draftFlags: flaggedFields,
    });
  });

  return rows;
}

function parsePitcherRowsFromMatrix(matrix) {
  const headerIndex = findBestHeaderIndex(matrix, ["선수", "선수명", "이름", "이닝", "피안타", "탈삼진"]);
  if (headerIndex === -1) {
    return [];
  }

  const header = matrix[headerIndex].map((cell) => normalizeHeaderKey(cell));
  const dataRows = matrix.slice(headerIndex + 1);
  const rows = [];
  const nameIndex = header.findIndex((cell) => cell === normalizeHeaderKey("선수") || cell === normalizeHeaderKey("선수명") || cell === normalizeHeaderKey("이름")) >= 0
    ? header.findIndex((cell) => cell === normalizeHeaderKey("선수") || cell === normalizeHeaderKey("선수명") || cell === normalizeHeaderKey("이름"))
    : 0;
  const resultIndex = header.findIndex((cell) => cell === normalizeHeaderKey("결과") || cell === "wls") >= 0
    ? header.findIndex((cell) => cell === normalizeHeaderKey("결과") || cell === "wls")
    : 1;
  const inningIndex = header.findIndex((cell) => cell === normalizeHeaderKey("이닝") || cell === "ip") >= 0
    ? header.findIndex((cell) => cell === normalizeHeaderKey("이닝") || cell === "ip")
    : 2;
  const bfIndex = header.findIndex((cell) => cell === normalizeHeaderKey("타자") || cell === normalizeHeaderKey("상대타자") || cell === "bf");
  const abIndex = header.findIndex((cell) => cell === normalizeHeaderKey("타수") || cell === "ab");
  const hIndex = header.findIndex((cell) => cell === normalizeHeaderKey("피안타") || cell === normalizeHeaderKey("안타") || cell === "h");
  const hrIndex = header.findIndex((cell) => cell === normalizeHeaderKey("피홈런") || cell === "hr");
  const bbIndex = header.findIndex((cell) => cell === normalizeHeaderKey("볼넷") || cell === "bb");
  const hbpIndex = header.findIndex((cell) => cell === normalizeHeaderKey("사구") || cell === "hbp");
  const soIndex = header.findIndex((cell) => cell === normalizeHeaderKey("탈삼진") || cell === normalizeHeaderKey("삼진") || cell === "so");
  const rIndex = header.findIndex((cell) => cell === normalizeHeaderKey("실점") || cell === "r");
  const erIndex = header.findIndex((cell) => cell === normalizeHeaderKey("자책") || cell === normalizeHeaderKey("자책점") || cell === "er");

  dataRows.forEach((cells) => {
    const row = buildRowObject(header, cells);
    const pitcherLabel = parsePitcherLabel(cells[nameIndex] ?? getCellValue(row, ["선수명", "선수", "이름"]));
    const name = normalizePlayerName(pitcherLabel.originalPlayer || pitcherLabel.player);
    if (isSummaryName(name)) {
      return;
    }

    const resultText = String(cells[resultIndex] ?? getCellValue(row, ["결과", "wls", "비고"])).trim();
    const flaggedFields = [];
    const parseCountField = (aliases, fieldName) => {
      const parsed = parseStrictCountCell(getCellValue(row, aliases));
      if (parsed.suspicious) {
        flaggedFields.push(fieldName);
      }
      return parsed.value;
    };
    const parseDirectCount = (value, fieldName) => {
      const parsed = parseStrictCountCell(value);
      if (parsed.suspicious) {
        flaggedFields.push(fieldName);
      }
      return parsed.value;
    };
    const parsed = {
      player: pitcherLabel.player || findKnownPlayerMatch(name) || name,
      originalPlayer: pitcherLabel.originalPlayer || name,
      number: pitcherLabel.number,
      ip: parseInningCell(cells[inningIndex] ?? getCellValue(row, ["이닝", "ip"])),
      bf: parseDirectCount(cells[bfIndex] ?? getCellValue(row, ["타자", "상대타자", "bf"]), "타자"),
      ab: parseDirectCount(cells[abIndex] ?? getCellValue(row, ["타수", "ab"]), "타수"),
      h: parseDirectCount(cells[hIndex] ?? getCellValue(row, ["피안타", "안타", "h"]), "피안타"),
      hr: parseDirectCount(cells[hrIndex] ?? getCellValue(row, ["피홈런", "hr"]), "피홈런"),
      bb: parseDirectCount(cells[bbIndex] ?? getCellValue(row, ["볼넷", "bb"]), "볼넷"),
      hbp: parseDirectCount(cells[hbpIndex] ?? getCellValue(row, ["사구", "hbp"]), "사구"),
      so: parseDirectCount(cells[soIndex] ?? getCellValue(row, ["탈삼진", "삼진", "so"]), "탈삼진"),
      r: parseDirectCount(cells[rIndex] ?? getCellValue(row, ["실점", "r"]), "실점"),
      er: parseDirectCount(cells[erIndex] ?? getCellValue(row, ["자책", "자책점", "er"]), "자책"),
      w: parseCountField(["승", "w"], "승") || (resultText.includes("승") ? 1 : 0),
      l: parseCountField(["패", "l"], "패") || (resultText.includes("패") ? 1 : 0),
      sv: parseCountField(["세이브", "세", "sv"], "세이브") || (resultText.includes("세") ? 1 : 0),
      hld: parseCountField(["홀드", "hld"], "홀드") || (resultText.includes("홀") ? 1 : 0),
      resultText,
    };

    rows.push({
      ...parsed,
      era: derivePitchingDisplayStats(parsed).era,
      _draftFlags: flaggedFields,
    });
  });

  return rows;
}

function parsePitcherRowsFromMatrix(matrix) {
  const headerIndex = findBestHeaderIndex(matrix, ["선수", "선수명", "이름", "이닝", "피안타", "삼진"]);
  if (headerIndex === -1) {
    return [];
  }

  const header = matrix[headerIndex].map((cell) => normalizeHeaderKey(cell));
  const dataRows = matrix.slice(headerIndex + 1);
  const rows = [];
  const nameIndex =
    header.findIndex((cell) => cell === normalizeHeaderKey("선수") || cell === normalizeHeaderKey("선수명") || cell === normalizeHeaderKey("이름")) >= 0
      ? header.findIndex((cell) => cell === normalizeHeaderKey("선수") || cell === normalizeHeaderKey("선수명") || cell === normalizeHeaderKey("이름"))
      : 0;
  const resultIndex =
    header.findIndex((cell) => cell === normalizeHeaderKey("결과") || cell === "wls") >= 0
      ? header.findIndex((cell) => cell === normalizeHeaderKey("결과") || cell === "wls")
      : 1;
  const inningIndex =
    header.findIndex((cell) => cell === normalizeHeaderKey("이닝") || cell === "ip") >= 0
      ? header.findIndex((cell) => cell === normalizeHeaderKey("이닝") || cell === "ip")
      : 2;
  const bfIndex = header.findIndex((cell) => cell === normalizeHeaderKey("타자") || cell === normalizeHeaderKey("상대타자") || cell === "bf");
  const abIndex = header.findIndex((cell) => cell === normalizeHeaderKey("타수") || cell === "ab");
  const hIndex = header.findIndex((cell) => cell === normalizeHeaderKey("피안타") || cell === normalizeHeaderKey("안타") || cell === "h");
  const hrIndex = header.findIndex((cell) => cell === normalizeHeaderKey("피홈런") || cell === "hr");
  const shIndex = header.findIndex((cell) => cell === normalizeHeaderKey("희타") || cell === "sh");
  const sfIndex = header.findIndex((cell) => cell === normalizeHeaderKey("희비") || cell === normalizeHeaderKey("희생플라이") || cell === "sf");
  const bbIndex = header.findIndex((cell) => cell === normalizeHeaderKey("볼넷") || cell === "bb");
  const hbpIndex = header.findIndex((cell) => cell === normalizeHeaderKey("사구") || cell === "hbp");
  const soIndex = header.findIndex((cell) => cell === normalizeHeaderKey("삼진") || cell === normalizeHeaderKey("탈삼진") || cell === "so");
  const wpIndex = header.findIndex((cell) => cell === normalizeHeaderKey("폭투") || cell === "wp");
  const bkIndex = header.findIndex((cell) => cell === normalizeHeaderKey("보크") || cell === "bk");
  const rIndex = header.findIndex((cell) => cell === normalizeHeaderKey("실점") || cell === "r");
  const erIndex = header.findIndex((cell) => cell === normalizeHeaderKey("자책점") || cell === normalizeHeaderKey("자책") || cell === "er");

  dataRows.forEach((cells) => {
    const normalizedCells = normalizePitcherRow(cells);
    const row = buildRowObject(header, cells);
    const getFixedOrHeaderCell = (fixedIndex, detectedIndex, aliases) => {
      const fixedValue = normalizedCells[fixedIndex];
      if (fixedValue != null && String(fixedValue).trim() !== "" && String(fixedValue).trim() !== "-") {
        return fixedValue;
      }
      if (detectedIndex >= 0) {
        const detectedValue = cells[detectedIndex];
        if (detectedValue != null && String(detectedValue).trim() !== "") {
          return detectedValue;
        }
      }
      return getCellValue(row, aliases);
    };

    const pitcherLabel = parsePitcherLabel(normalizedCells[0] || getFixedOrHeaderCell(0, nameIndex, ["선수명", "선수", "이름"]));
    const name = normalizePlayerName(pitcherLabel.originalPlayer || pitcherLabel.player);
    if (isSummaryName(name)) {
      return;
    }

    const rawResultText = String(normalizedCells[1] || getFixedOrHeaderCell(1, resultIndex, ["결과", "wls", "비고"]) || "").trim();
    const resultText = normalizePitcherResultText(rawResultText);
    const flaggedFields = [];
    const parseCountField = (aliases, fieldName) => {
      const parsed = parseStrictCountCell(getCellValue(row, aliases));
      if (parsed.suspicious) {
        flaggedFields.push(fieldName);
      }
      return parsed.value;
    };
    const parseDirectCount = (value, fieldName) => {
      const parsed = parseStrictCountCell(value);
      if (parsed.suspicious) {
        flaggedFields.push(fieldName);
      }
      return parsed.value;
    };

    const parsed = {
      player: pitcherLabel.player || findKnownPlayerMatch(name) || name,
      originalPlayer: cleanPlayerName(pitcherLabel.originalPlayer || name),
      number: pitcherLabel.number,
      resultText,
      ip: parseInningCell(getFixedOrHeaderCell(2, inningIndex, ["이닝", "ip"])),
      bf: parseDirectCount(getFixedOrHeaderCell(3, bfIndex, ["타자", "상대타자", "bf"]), "타자"),
      ab: parseDirectCount(getFixedOrHeaderCell(4, abIndex, ["타수", "ab"]), "타수"),
      h: parseDirectCount(getFixedOrHeaderCell(5, hIndex, ["피안타", "안타", "h"]), "피안타"),
      hr: parseDirectCount(getFixedOrHeaderCell(6, hrIndex, ["피홈런", "hr"]), "피홈런"),
      sh: parseDirectCount(getFixedOrHeaderCell(7, shIndex, ["희타", "sh"]), "희타"),
      sf: parseDirectCount(getFixedOrHeaderCell(8, sfIndex, ["희비", "희생플라이", "sf"]), "희비"),
      bb: parseDirectCount(getFixedOrHeaderCell(9, bbIndex, ["볼넷", "bb"]), "볼넷"),
      hbp: parseDirectCount(getFixedOrHeaderCell(10, hbpIndex, ["사구", "hbp"]), "사구"),
      so: parseDirectCount(getFixedOrHeaderCell(11, soIndex, ["삼진", "탈삼진", "so"]), "삼진"),
      wp: parseDirectCount(getFixedOrHeaderCell(12, wpIndex, ["폭투", "wp"]), "폭투"),
      bk: parseDirectCount(getFixedOrHeaderCell(13, bkIndex, ["보크", "bk"]), "보크"),
      r: parseDirectCount(getFixedOrHeaderCell(14, rIndex, ["실점", "r"]), "실점"),
      er: parseDirectCount(getFixedOrHeaderCell(15, erIndex, ["자책점", "자책", "er"]), "자책점"),
      pitchCount: normalizePitchCount(normalizedCells[16]),
      w: parseCountField(["승", "w"], "승") || (resultText === "승" ? 1 : 0),
      l: parseCountField(["패", "l"], "패") || (resultText === "패" ? 1 : 0),
      sv: parseCountField(["세이브", "세", "sv"], "세이브"),
      hld: parseCountField(["홀드", "hld"], "홀드"),
    };

    if (Array.isArray(cells) && cells.length !== 19) {
      flaggedFields.push("컬럼 보정");
    }
    if (/^\d+$/.test(rawResultText)) {
      flaggedFields.push("결과 열 숫자 유입");
    }
    if (rawResultText && !/^(승|패|-)$/.test(rawResultText)) {
      flaggedFields.push("결과 확인");
    }

    rows.push({
      ...parsed,
      era: derivePitchingDisplayStats(parsed).era,
      _draftFlags: flaggedFields,
    });
  });

  return rows;
}

function extractMetaFromRawText(rawText) {
  const rawLines = String(rawText || "")
    .split(/\r?\n/)
    .map((line) => line.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean);
  const text = String(rawText || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const dateMatch = text.match(/(20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2})/);
  const scoreMatch = text.match(/(\d+)\s*[:\-]\s*(\d+)/);
  const opponentMatch = text.match(/(?:vs\.?|상대|상대팀)\s*[:：]?\s*([가-힣A-Za-z0-9\s]+)/i);
  const titleLine = rawLines.find((line) => /경기|vs|대|라운드|정규시즌|포스트시즌/i.test(line)) || rawLines[0] || "";

  return {
    date: dateMatch ? formatRecordDate(dateMatch[1]) : "",
    opponent: opponentMatch ? opponentMatch[1].trim() : "",
    scoreFor: scoreMatch ? parseIntegerCell(scoreMatch[1]) : 0,
    scoreAgainst: scoreMatch ? parseIntegerCell(scoreMatch[2]) : 0,
    gameTitle: titleLine,
  };
}

function parseGameOneHtmlOrText(rawText) {
  const htmlBlocks = /<table/i.test(String(rawText || "")) ? extractTableBlocksFromHtml(rawText) : [];
  const textBlocks = extractTableBlocksFromText(rawText);
  const blocks = htmlBlocks.length ? [...htmlBlocks, ...textBlocks] : [...textBlocks, ...htmlBlocks];
  const parsed = {
    rawText: String(rawText || ""),
    meta: extractMetaFromRawText(rawText),
    battingRows: [],
    pitcherRows: [],
    teamBattingSummary: createEmptyTeamBattingSummary(),
    warnings: [],
  };

  blocks.forEach((block) => {
    if (!parsed.battingRows.length) {
      const battingRows = parseBattingRowsFromMatrix(block);
      if (battingRows.length) {
        parsed.battingRows = battingRows;
        return;
      }
    }

    if (!parsed.pitcherRows.length) {
      const pitcherRows = parsePitcherRowsFromMatrix(block);
      if (pitcherRows.length) {
        parsed.pitcherRows = pitcherRows;
      }
    }
  });

  if (!parsed.battingRows.length) {
    parsed.warnings.push("타격기록 표를 찾지 못했습니다. 표 원문을 다시 붙여넣어 주세요.");
  }

  if (!parsed.pitcherRows.length) {
    parsed.warnings.push("투수기록 표를 찾지 못했습니다. 필요하면 원문에 투수기록 표도 함께 붙여넣어 주세요.");
  }

  return parsed;
}

async function fetchGameSourceFromUrl(sourceUrl) {
  const url = String(sourceUrl || "").trim();
  if (!url) {
    throw new Error("게임원 경기결과 URL을 먼저 입력해 주세요.");
  }

  const response = await fetch(url, {
    method: "GET",
    credentials: "omit",
    headers: {
      Accept: "text/html,application/xhtml+xml",
    },
  });

  if (!response.ok) {
    throw new Error(`게임원 페이지 응답이 올바르지 않습니다. (${response.status})`);
  }

  return response.text();
}

function buildTeamDraftFromSource(year, sourceUrl, rawText, existingDraft = {}) {
  const parsed = parseGameOneHtmlOrText(rawText);
  const record = normalizeGameRecord(parsed, {
    year,
    sourceUrl,
    sourceText: rawText,
    additionalPlayers: existingDraft.pendingRegisteredPlayers || [],
  });

  return {
    sourceUrl,
    rawText,
    parsedSourceUrl: sourceUrl,
    parsedRawText: rawText,
    warnings: parsed.warnings,
    pendingRegisteredPlayers: existingDraft.pendingRegisteredPlayers || [],
    record,
  };
}

function normalizeMatchingMap(record, matchingMap = {}, additionalPlayers = []) {
  const nextMap = { ...matchingMap };
  const unmatchedNames = new Set();

  [...record.playerBattingRows, ...record.pitcherRows].forEach((row) => {
    const original = normalizePlayerName(row.originalPlayer || row.player);
    if (!original) {
      return;
    }
    const explicitMapped = normalizePlayerName(row.player);
    const mapped = normalizePlayerName(nextMap[original] ?? explicitMapped);
    if (!mapped || !hasKnownPlayer(mapped, additionalPlayers)) {
      unmatchedNames.add(original);
    } else {
      nextMap[original] = mapped;
    }
  });

  return {
    matchingMap: nextMap,
    unmatchedPlayers: Array.from(unmatchedNames).sort((a, b) => a.localeCompare(b, "ko")),
  };
}

function computeResult(scoreFor, scoreAgainst) {
  if (scoreFor > scoreAgainst) {
    return "승";
  }
  if (scoreFor < scoreAgainst) {
    return "패";
  }
  return "무";
}

function summarizeTeamBatting(rows, fallback = {}) {
  const summary = createEmptyTeamBattingSummary();
  rows.forEach((row) => {
    summary.hits += safeNumberLocal(row.h);
    summary.doubles += safeNumberLocal(row.d2);
    summary.triples += safeNumberLocal(row.d3);
    summary.homeRuns += safeNumberLocal(row.hr);
    summary.rbi += safeNumberLocal(row.rbi);
    summary.stolenBases += safeNumberLocal(row.sb);
    summary.walks += safeNumberLocal(row.bb);
    summary.strikeouts += safeNumberLocal(row.so);
  });

  return {
    ...summary,
    risp: fallback.risp ?? summary.risp,
    errors: safeNumberLocal(fallback.errors),
    notes: fallback.notes || "",
  };
}

function buildGameRecordId(record) {
  const sourceTextHash = getSimpleHash(record.sourceText || "");
  let base = String(record.sourceUrl || "").trim();

  if (!base) {
    const identityParts = [record.year, record.date, record.opponent]
      .map((value) => String(value || "").trim())
      .filter(Boolean);

    base = identityParts.length >= 3
      ? identityParts.join("|")
      : `${record.year}|${record.date}|${record.opponent}|${record.scoreFor}|${record.scoreAgainst}|${sourceTextHash}`;
  }

  base = base.toLowerCase();
  return `game-${base.replace(/[^a-z0-9가-힣]+/gi, "-")}`;
}

function normalizeGameRecord(parsed, options = {}) {
  const year = String(options.year || parsed?.meta?.date?.slice(0, 4) || state.teamYear || "2026");
  const rawRows = parsed?.battingRows || parsed?.playerBattingRows || [];
  const rawPitchers = parsed?.pitcherRows || [];
  const sourceUrl = String(options.sourceUrl || parsed?.sourceUrl || "").trim();
  const sourceText = String(options.sourceText || parsed?.rawText || parsed?.sourceText || "").trim();

  const mappedBatters = rawRows.map((row) => {
    const originalPlayer = normalizePlayerName(row.originalPlayer || row.player);
    const mappedPlayer = normalizePlayerName(options.matchingMap?.[originalPlayer] || row.player);
    const display = deriveBattingDisplayStats({
      ...row,
      player: mappedPlayer,
    });
    return {
      originalPlayer: cleanPlayerName(originalPlayer),
      player: mappedPlayer,
      battingOrder: safeNumberLocal(row.battingOrder),
      pos: row.pos || row.position || "",
      number: row.number ?? "",
      pa: safeNumberLocal(row.pa),
      ab: safeNumberLocal(row.ab),
      h: safeNumberLocal(row.h),
      d2: safeNumberLocal(row.d2),
      d3: safeNumberLocal(row.d3),
      hr: safeNumberLocal(row.hr),
      tb: safeNumberLocal(row.tb) || display.tb,
      rbi: safeNumberLocal(row.rbi),
      r: safeNumberLocal(row.r),
      sb: safeNumberLocal(row.sb),
      bb: safeNumberLocal(row.bb),
      hbp: safeNumberLocal(row.hbp),
      so: safeNumberLocal(row.so),
      sf: safeNumberLocal(row.sf),
      sh: safeNumberLocal(row.sh),
      avg: row.avg || display.avg,
      obp: row.obp || display.obp,
      slg: row.slg || display.slg,
      ops: row.ops || display.ops,
      _draftFlags: Array.isArray(row._draftFlags) ? [...row._draftFlags] : [],
    };
  });

  const mappedPitchers = rawPitchers.map((row) => {
    const originalPlayer = cleanPlayerName(normalizePlayerName(row.originalPlayer || row.player));
    const mappedPlayer = cleanPlayerName(normalizePlayerName(options.matchingMap?.[originalPlayer] || row.player));
    return {
      originalPlayer,
      player: mappedPlayer,
      number: row.number ?? "",
      resultText: normalizePitcherResultText(row.resultText || row.result || ""),
      ip: parseInningCell(row.ip),
      ipDisplay: formatFractionalInnings(parseInningCell(row.ip)),
      bf: safeNumberLocal(row.bf),
      ab: safeNumberLocal(row.ab),
      h: safeNumberLocal(row.h),
      hr: safeNumberLocal(row.hr),
      bb: safeNumberLocal(row.bb),
      hbp: safeNumberLocal(row.hbp),
      so: safeNumberLocal(row.so),
      r: safeNumberLocal(row.r),
      er: safeNumberLocal(row.er),
      w: safeNumberLocal(row.w),
      l: safeNumberLocal(row.l),
      sv: safeNumberLocal(row.sv),
      hld: safeNumberLocal(row.hld),
      pitchCount: normalizePitchCount(row.pitchCount ?? row.pitches ?? row.np),
      era: row.era || derivePitchingDisplayStats({ ...row, ip: parseInningCell(row.ip) }).era,
      _draftFlags: Array.isArray(row._draftFlags) ? [...row._draftFlags] : [],
    };
  });

  const record = {
    id: "",
    year,
    date: formatRecordDate(options.date || parsed?.meta?.date || parsed?.date || ""),
    gameTitle: String(options.gameTitle || parsed?.meta?.gameTitle || parsed?.gameTitle || "").trim(),
    opponent: String(options.opponent || parsed?.meta?.opponent || parsed?.opponent || "").trim(),
    scoreFor: safeNumberLocal(options.scoreFor ?? parsed?.meta?.scoreFor ?? parsed?.scoreFor ?? 0),
    scoreAgainst: safeNumberLocal(options.scoreAgainst ?? parsed?.meta?.scoreAgainst ?? parsed?.scoreAgainst ?? 0),
    result: String(options.result || parsed?.result || "").trim(),
    sourceUrl,
    sourceText,
    teamBattingSummary: summarizeTeamBatting(
      mappedBatters,
      options.teamBattingSummary || parsed?.teamBattingSummary || {}
    ),
    playerBattingRows: mappedBatters,
    pitcherRows: mappedPitchers,
    matchingMap: options.matchingMap || parsed?.matchingMap || {},
    unmatchedPlayers: [],
    createdAt: options.createdAt || parsed?.createdAt || "",
    updatedAt: new Date().toISOString(),
  };

  record.result = record.result || computeResult(record.scoreFor, record.scoreAgainst);
  record.id = buildGameRecordId(record);

  const matching = normalizeMatchingMap(record, record.matchingMap, options.additionalPlayers || []);
  record.matchingMap = matching.matchingMap;
  record.unmatchedPlayers = matching.unmatchedPlayers;

  return record;
}

function getExistingGameRecord(record) {
  return gameRecords.find((entry) => entry.id === record.id) || null;
}

function removeGameLogsByGameId(gameId) {
  playerGameLogs = playerGameLogs.filter((entry) => entry.gameId !== gameId);
  pitcherGameLogs = pitcherGameLogs.filter((entry) => entry.gameId !== gameId);
}

function upsertPlayerGameLogs(record) {
  removeGameLogsByGameId(record.id);
  const logs = record.playerBattingRows.map((row) => ({
    gameId: record.id,
    year: record.year,
    date: record.date,
    opponent: record.opponent,
    player: row.player,
    pa: row.pa,
    ab: row.ab,
    h: row.h,
    d2: row.d2,
    d3: row.d3,
    hr: row.hr,
    tb: row.tb,
    rbi: row.rbi,
    r: row.r,
    sb: row.sb,
    bb: row.bb,
    hbp: row.hbp,
    so: row.so,
    sf: row.sf,
    sh: row.sh,
  }));
  playerGameLogs = [...playerGameLogs, ...logs];
}

function upsertPitcherGameLogs(record) {
  const logs = record.pitcherRows.map((row) => ({
    gameId: record.id,
    year: record.year,
    date: record.date,
    opponent: record.opponent,
    player: row.player,
    ip: row.ip,
    bf: row.bf,
    ab: row.ab,
    h: row.h,
    hr: row.hr,
    bb: row.bb,
    hbp: row.hbp,
    so: row.so,
    r: row.r,
    er: row.er,
    w: row.w,
    l: row.l,
    sv: row.sv,
    hld: row.hld,
  }));
  pitcherGameLogs = [...pitcherGameLogs, ...logs];
}

function saveGameRecord(record, options = {}) {
  if (!isEditableYear(record.year)) {
    return {
      saved: false,
      readOnly: true,
      record,
    };
  }

  const existing = getExistingGameRecord(record);
  if (existing && !options.overwrite) {
    return {
      saved: false,
      duplicated: true,
      record: existing,
    };
  }

  const now = new Date().toISOString();
  const nextRecord = {
    ...record,
    createdAt: existing?.createdAt || record.createdAt || now,
    updatedAt: now,
  };

  gameRecords = gameRecords.filter((entry) => entry.id !== nextRecord.id);
  gameRecords.push(nextRecord);
  gameRecords.sort((left, right) => String(right.date).localeCompare(String(left.date)));

  upsertPlayerGameLogs(nextRecord);
  upsertPitcherGameLogs(nextRecord);
  persistGameStorage();

  return {
    saved: true,
    duplicated: Boolean(existing),
    record: nextRecord,
  };
}

function removeGameRecord(gameId) {
  const record = gameRecords.find((entry) => entry.id === gameId);
  if (!record || !isEditableYear(record.year)) {
    return false;
  }

  gameRecords = gameRecords.filter((entry) => entry.id !== gameId);
  removeGameLogsByGameId(gameId);
  persistGameStorage();
  return true;
}

function getAppliedGameHistory(year) {
  return getTeamRecordsByYear(year);
}

function sanitizeDraftInteger(value) {
  return parseStrictCountCell(value).value;
}

function sanitizeDraftText(value) {
  return String(value ?? "").trim();
}

function isWholeNumberValue(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) && Number.isInteger(numeric);
}

function getBatterDraftIssues(row) {
  const issues = [];
  if (!sanitizeDraftText(row.originalPlayer || row.player)) {
    issues.push("선수명 없음");
  }
  if (!sanitizeDraftText(row.player)) {
    issues.push("매칭 필요");
  }
  if (!isWholeNumberValue(row.pa) || !isWholeNumberValue(row.ab) || !isWholeNumberValue(row.h) || !isWholeNumberValue(row.bb) || !isWholeNumberValue(row.hbp)) {
    issues.push("정수 확인");
  }
  if (row._draftFlags?.length) {
    issues.push(`${row._draftFlags.join(", ")} 값 확인`);
  }
  if (safeNumberLocal(row.ab) > safeNumberLocal(row.pa)) {
    issues.push("타수>타석");
  }
  if (safeNumberLocal(row.h) > safeNumberLocal(row.ab)) {
    issues.push("안타>타수");
  }
  if (safeNumberLocal(row.d2) + safeNumberLocal(row.d3) + safeNumberLocal(row.hr) > safeNumberLocal(row.h)) {
    issues.push("장타 합계 확인");
  }
  return issues;
}

function getPitcherDraftIssues(row) {
  const issues = [];
  if (!sanitizeDraftText(row.originalPlayer || row.player)) {
    issues.push("선수명 없음");
  }
  if (!sanitizeDraftText(row.player)) {
    issues.push("매칭 필요");
  }
  if (!isWholeNumberValue(row.bf) || !isWholeNumberValue(row.ab) || !isWholeNumberValue(row.h) || !isWholeNumberValue(row.bb) || !isWholeNumberValue(row.hbp)) {
    issues.push("정수 확인");
  }
  if (row._draftFlags?.length) {
    issues.push(`${row._draftFlags.join(", ")} 값 확인`);
  }
  if (safeNumberLocal(row.h) > safeNumberLocal(row.ab) && safeNumberLocal(row.ab) > 0) {
    issues.push("피안타>타수");
  }
  return issues;
}

function getPitcherDraftIssues(row) {
  const issues = [];
  if (!sanitizeDraftText(row.originalPlayer || row.player)) {
    issues.push("선수명 없음");
  }
  if (!sanitizeDraftText(row.player)) {
    issues.push("매칭 필요");
  }
  if (!isWholeNumberValue(row.bf) || !isWholeNumberValue(row.ab) || !isWholeNumberValue(row.h) || !isWholeNumberValue(row.bb) || !isWholeNumberValue(row.hbp)) {
    issues.push("정수 확인");
  }
  if (!/^(승|패|-)$/.test(sanitizeDraftText(row.resultText || "-") || "-")) {
    issues.push("결과 확인");
  }
  if (row._draftFlags?.length) {
    issues.push(`${row._draftFlags.join(", ")} 값 확인`);
  }
  if (safeNumberLocal(row.h) > safeNumberLocal(row.ab) && safeNumberLocal(row.ab) > 0) {
    issues.push("피안타>타수");
  }
  return issues;
}

function getDraftRecordIssues(record) {
  const issues = [];
  if (!sanitizeDraftText(record.date)) {
    issues.push({ level: "warning", text: "경기 날짜를 확인해 주세요." });
  }
  if (!sanitizeDraftText(record.opponent)) {
    issues.push({ level: "warning", text: "상대팀을 확인해 주세요." });
  }
  if (!sanitizeDraftText(record.gameTitle)) {
    issues.push({ level: "info", text: "경기명은 비어 있어도 저장할 수 있지만 확인해 두는 것이 좋습니다." });
  }
  if (record.unmatchedPlayers?.length) {
    issues.push({ level: "warning", text: `매칭되지 않은 선수 ${record.unmatchedPlayers.length}명이 있습니다.` });
  }
  if (!record.playerBattingRows.length && !record.pitcherRows.length) {
    issues.push({ level: "warning", text: "타자/투수 기록이 모두 비어 있습니다." });
  }

  record.playerBattingRows.forEach((row) => {
    const rowIssues = getBatterDraftIssues(row);
    if (rowIssues.length) {
      issues.push({ level: "warning", text: `${row.originalPlayer || row.player}: ${rowIssues.join(", ")}` });
    }
  });

  record.pitcherRows.forEach((row) => {
    const rowIssues = getPitcherDraftIssues(row);
    if (rowIssues.length) {
      issues.push({ level: "warning", text: `${row.originalPlayer || row.player}: ${rowIssues.join(", ")}` });
    }
  });

  return issues;
}

function renderDraftIssueSummary(record, warnings = []) {
  const issues = [...warnings.map((text) => ({ level: "warning", text })), ...getDraftRecordIssues(record)];
  if (!issues.length) {
    return `
      <div class="team-import-review ok">
        <h4>검토 결과</h4>
        <p>현재 확인된 누락/의심 항목이 없습니다. 내용을 다시 확인한 뒤 통산 반영을 진행할 수 있습니다.</p>
      </div>
    `;
  }

  return `
    <div class="team-import-review">
      <h4>검토 필요 항목</h4>
      <ul>
        ${issues.map((issue) => `<li class="${issue.level === "info" ? "info" : "warning"}">${escapeHtml(issue.text)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function getRankingGuideStats() {
  const rows = getVisibleCareerHitterRows();
  const totals = rows.reduce(
    (acc, row) => {
      acc.h += safeNumberLocal(row.h);
      acc.ab += safeNumberLocal(row.ab);
      acc.bb += safeNumberLocal(row.bb);
      acc.hbp += safeNumberLocal(row.hbp);
      acc.sf += safeNumberLocal(row.sf);
      acc.tb += safeNumberLocal(row.tb);
      return acc;
    },
    {
      h: 0,
      ab: 0,
      bb: 0,
      hbp: 0,
      sf: 0,
      tb: 0,
    }
  );

  const teamGames = getCareerTeamGames();
  const requiredPA = Math.ceil(teamGames * 1.5);
  const requiredIP = 2;
  const avg = totals.ab ? totals.h / totals.ab : 0;
  const obpDenominator = totals.ab + totals.bb + totals.hbp + totals.sf;
  const obp = obpDenominator ? (totals.h + totals.bb + totals.hbp) / obpDenominator : 0;
  const slg = totals.ab ? totals.tb / totals.ab : 0;
  const ops = obp + slg;

  return {
    teamGames,
    requiredPA,
    requiredIP,
    avg: formatBaseballRate(avg),
    obp: formatBaseballRate(obp),
    slg: formatBaseballRate(slg),
    ops: formatBaseballRate(ops),
  };
}

function isQualifiedBatter(row) {
  return safeNumberLocal(row.pa) >= getRankingGuideStats().requiredPA;
}

function isQualifiedPitcher(row) {
  return safeNumberLocal(row.ip) >= getRankingGuideStats().requiredIP;
}

function renderRankingTeamAverage() {
  const guide = getRankingGuideStats();
  const withLeadingZero = (value) => {
    const text = String(value ?? ".000");
    return text.startsWith(".") ? `0${text}` : text;
  };

  return `
    <section class="ranking-summary" aria-label="팀평균">
      <h3>팀평균</h3>
      <p>타율 ${withLeadingZero(guide.avg)} / 출루율 ${withLeadingZero(guide.obp)} / 장타율 ${withLeadingZero(guide.slg)} / OPS ${withLeadingZero(guide.ops)}</p>
    </section>
  `;
}

function renderRankingGuide() {
  const guide = getRankingGuideStats();

  return `
    <section class="ranking-guide" aria-label="통산순위 기준 안내">
      <div class="ranking-guide-header">
        <h3>통산순위 기준 안내</h3>
        <p>통산순위는 기존 통산값에 저장된 경기 로그를 합산한 데이터 기준으로 계산합니다.</p>
      </div>
      <div class="ranking-guide-grid">
        <article class="ranking-guide-card">
          <h4>기준 계산</h4>
          <ul class="ranking-guide-list">
            <li>팀 총 경기 수: ${guide.teamGames}경기</li>
            <li>규정타석: 팀 경기 수 × 2.7 = ${guide.requiredPA}타석</li>
            <li>규정이닝: 팀 경기 수 × 1.0 = ${guide.requiredIP}이닝</li>
            <li>팀 평균 AVG ${guide.avg} · OBP ${guide.obp} · SLG ${guide.slg} · OPS ${guide.ops}</li>
          </ul>
        </article>
        <article class="ranking-guide-card">
          <h4>지표 설명</h4>
          <ul class="ranking-guide-list">
            <li>RC: Runs Created. 타자의 출루와 장타 생산력을 바탕으로 득점 기여도를 추정한 지표입니다.</li>
            <li>RC/18: 18아웃 기준 RC 환산값입니다. 경기당 생산력을 비교하기 쉽게 만든 보정 지표입니다.</li>
            <li>XR: Extrapolated Runs. 안타, 장타, 볼넷 등 공격 이벤트별 가중치를 적용해 예상 득점 생산력을 계산한 지표입니다.</li>
          </ul>
        </article>
      </div>
    </section>
  `;
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

  document.querySelectorAll('.submenu[data-submenu="total"] [data-total-type]').forEach((item) => {
    item.classList.toggle("active", state.menu === "total" && item.dataset.totalType === state.totalType);
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

function createTableMarkup(columns, rows) {
  const headerHtml = columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("");
  const rowsHtml = rows
    .map((row) => {
      const classNames = [];
      if (row.isTotal) {
        classNames.push("is-total");
      }
      if (row.status === "retired" || row.status === "injured") {
        classNames.push(row.status);
      }

      const cells = columns
        .map((column, index) => {
          let value = row[column.key];
          if (row.isTotal && index === 0 && (value === "" || value == null)) {
            value = "합계";
          }
          if (value == null) {
            value = "";
          }
          return `<td>${escapeHtml(value)}</td>`;
        })
        .join("");

      const classAttr = classNames.length ? ` class="${classNames.join(" ")}"` : "";
      return `<tr${classAttr}>${cells}</tr>`;
    })
    .join("");

  return `
    <table class="stats-table">
      <thead>
        <tr>${headerHtml}</tr>
      </thead>
      <tbody>${rowsHtml}</tbody>
    </table>
  `;
}

function getRankingSnapshotKey(type, statKey) {
  return `recordSystem.v3.rankSnapshot.${type}.${statKey}`;
}

function loadRankingSnapshot(type, statKey) {
  if (typeof localStorage === "undefined") {
    return null;
  }

  try {
    const raw = localStorage.getItem(getRankingSnapshotKey(type, statKey));
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn("순위 snapshot 로드 실패:", type, statKey, error);
    return null;
  }
}

function saveRankingSnapshot(type, rankingsByStat) {
  if (typeof localStorage === "undefined") {
    return;
  }

  Object.entries(rankingsByStat).forEach(([statKey, snapshot]) => {
    try {
      localStorage.setItem(getRankingSnapshotKey(type, statKey), JSON.stringify(snapshot));
    } catch (error) {
      console.warn("순위 snapshot 저장 실패:", type, statKey, error);
    }
  });
}

function compareRankChange(currentRank, previousRank) {
  if (!previousRank || previousRank === currentRank) {
    return { symbol: "—", text: "변동없음", className: "same" };
  }

  if (currentRank < previousRank) {
    return { symbol: "▲", text: "상승", className: "up" };
  }

  return { symbol: "▼", text: "하강", className: "down" };
}

function normalizeRankingValue(value) {
  if (value === "" || value == null || value === "#DIV/0!") {
    return null;
  }

  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function sortRankingRows(rows, config) {
  return [...rows].sort((left, right) => {
    const leftValue = normalizeRankingValue(left[config.key]);
    const rightValue = normalizeRankingValue(right[config.key]);

    if (leftValue == null && rightValue == null) {
      return String(left.name || "").localeCompare(String(right.name || ""), "ko");
    }
    if (leftValue == null) {
      return 1;
    }
    if (rightValue == null) {
      return -1;
    }
    if (leftValue === rightValue) {
      return String(left.name || "").localeCompare(String(right.name || ""), "ko");
    }

    return config.lowerIsBetter ? leftValue - rightValue : rightValue - leftValue;
  });
}

function createSeparatorEntry(kind, label) {
  return {
    type: "separator",
    separatorKind: kind,
    label,
  };
}

function buildCompetitiveRankEntries(rows, config, options = {}) {
  const sortedRows = sortRankingRows(rows, config);
  const entries = [];
  let previousValue = null;
  let previousRank = 0;
  const rankOffset = options.rankOffset || 0;

  sortedRows.forEach((row, index) => {
    const currentValue = normalizeRankingValue(row[config.key]);
    const localRank = index === 0 || currentValue !== previousValue ? index + 1 : previousRank - rankOffset;
    const rank = localRank + rankOffset;
    const qualified = typeof options.qualified === "function" ? options.qualified(row) : options.qualified;
    const underQualified =
      typeof options.underQualified === "function" ? options.underQualified(row) : options.underQualified;

    entries.push({
      type: "player",
      rank,
      rankDisplay: String(rank),
      snapshotRank: rank,
      name: row.name,
      value: row[config.displayKey || config.key],
      status: row.status || "active",
      qualified,
      highlightQualified: options.highlightQualified && qualified,
      underQualified,
    });

    previousValue = currentValue;
    previousRank = rank;
  });

  return entries;
}

function insertTopTenSeparator(entries) {
  const rankedEntries = entries.filter((entry) => entry.type === "player" && typeof entry.rank === "number");
  const lastTopTenIndex = rankedEntries.reduce((lastIndex, entry, index) => {
    return entry.rank <= 10 ? index : lastIndex;
  }, -1);

  if (lastTopTenIndex === -1 || lastTopTenIndex === rankedEntries.length - 1) {
    return entries;
  }

  const actualIndex = entries.findIndex(
    (entry, index) =>
      entry.type === "player" &&
      entry.name === rankedEntries[lastTopTenIndex].name &&
      entries.slice(0, index + 1).filter((candidate) => candidate.type === "player").length === lastTopTenIndex + 1
  );

  if (actualIndex === -1) {
    return entries;
  }

  const cloned = [...entries];
  cloned.splice(actualIndex + 1, 0, createSeparatorEntry("top-ten-divider", "10위권 구분선"));
  return cloned;
}

function buildRankingEntries(rows, config, type) {
  if (type === "hitter" && config.separateQualification) {
    const qualifiedRows = rows.filter((row) => isQualifiedBatter(row));
    const underQualifiedRows = rows.filter((row) => !isQualifiedBatter(row));

    const qualifiedEntries = buildCompetitiveRankEntries(qualifiedRows, config, { qualified: true });
    const lastQualifiedRank = qualifiedEntries.length
      ? qualifiedEntries[qualifiedEntries.length - 1].rank
      : 0;
    const underQualifiedEntries = buildCompetitiveRankEntries(underQualifiedRows, config, {
      qualified: false,
      underQualified: true,
      rankOffset: lastQualifiedRank,
    });

    if (!underQualifiedEntries.length) {
      return insertTopTenSeparator(qualifiedEntries);
    }

    return insertTopTenSeparator([
      ...qualifiedEntries,
      createSeparatorEntry("qualification-divider", "규정타석 미달"),
      ...underQualifiedEntries,
    ]);
  }

  const rankedEntries = buildCompetitiveRankEntries(rows, config, {
    qualified: type === "hitter" ? isQualifiedBatter : undefined,
    highlightQualified: type === "hitter" && config.qualificationHighlight,
    underQualified: false,
  }).map((entry) => {
    if (type === "hitter" && config.qualificationHighlight) {
      const qualified = isQualifiedBatter(rows.find((row) => row.name === entry.name) || {});
      return {
        ...entry,
        qualified,
        highlightQualified: qualified,
        underQualified: !qualified,
      };
    }
    return entry;
  });

  return insertTopTenSeparator(rankedEntries);
}

function createRankingTableMarkup(entries, changes) {
  const rowsHtml = entries
    .map((entry) => {
      if (entry.type === "separator") {
        return `
          <tr class="${entry.separatorKind}">
            <td colspan="4">${entry.label}</td>
          </tr>
        `;
      }

      const classNames = [];
      if (entry.status === "retired" || entry.status === "injured") {
        classNames.push(entry.status);
      }
      if (entry.highlightQualified) {
        classNames.push("qualified-highlight");
      }
      if (entry.underQualified) {
        classNames.push("under-qualified");
      }

      const change = changes[entry.name] || { symbol: "—", text: "변동없음", className: "same" };
      const classAttr = classNames.length ? ` class="${classNames.join(" ")}"` : "";

      return `
        <tr${classAttr}>
          <td class="rank-col">${entry.rankDisplay ?? entry.rank ?? ""}</td>
          <td class="name-col">${entry.name}</td>
          <td class="value-col">${entry.value == null ? "" : entry.value}</td>
          <td class="change-col"><span class="rank-change ${change.className}" aria-label="${change.text}">${change.symbol}</span></td>
        </tr>
      `;
    })
    .join("");

  return `
    <table class="stats-table ranking-table">
      <thead>
        <tr>
          <th class="rank-col">순위</th>
          <th class="name-col">선수</th>
          <th class="value-col">수치</th>
          <th class="change-col">변동</th>
        </tr>
      </thead>
      <tbody>${rowsHtml}</tbody>
    </table>
  `;
}

function renderStatsTable({ year, subtitle, columns, rows }) {
  renderPlayerShell(year, subtitle);
  const tableWrap = document.querySelector(".table-wrap");

  if (!rows.length) {
    tableWrap.innerHTML = `
      <div class="placeholder-panel">
        <p>${subtitle}은(는) 아직 입력되지 않았습니다.</p>
      </div>
    `;
    return;
  }

  tableWrap.innerHTML = createTableMarkup(columns, rows);
}

function renderCareerPage(type) {
  const isPitcher = type === "pitcher";
  const title = isPitcher ? "투수 통산" : "타자 통산";
  const rows = sortRowsByName(
    isPitcher ? careerPitchers2022To2025 : getVisibleCareerHitterRows()
  );
  const columns = isPitcher ? careerPitcherColumns : careerHitterColumns;
  const container = document.getElementById("page-container");
  container.innerHTML = `
    <section class="page career-page">
      <div class="page-header">
        <h2>${title}</h2>
        <p>기존 통산값에 저장된 경기 로그를 합산해 다시 계산한 통산표입니다.</p>
      </div>
      <section class="career-section">
        <div class="career-header">
          <h3>${title}</h3>
        </div>
        <div class="table-wrap" id="career-table-wrap"></div>
      </section>
    </section>
  `;

  document.getElementById("career-table-wrap").innerHTML = createTableMarkup(columns, rows);
}

function renderPlayerStats(year, type = "hitter") {
  if (type === "pitcher") {
    renderStatsTable({
      year,
      subtitle: `${year}년 투수 기록`,
      columns: pitcherColumns,
      rows: pitcherDataByYear[year] || [],
    });
    return;
  }

  renderStatsTable({
    year,
    subtitle: `${year}년 타자 기록`,
    columns: hitterColumns,
    rows: getVisibleHitterRows(year),
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getTeamRecordsByYear(year) {
  return gameRecords
    .filter((record) => String(record.year) === String(year))
    .sort((left, right) => String(right.date).localeCompare(String(left.date)));
}

function buildTeamRecordRow(record) {
  const summary = record.teamBattingSummary || createEmptyTeamBattingSummary();
  return {
    ...summary,
    date: formatDateForDisplay(record.date),
    opponent: record.opponent || "-",
    result: record.result || computeResult(record.scoreFor, record.scoreAgainst),
    scoreFor: safeNumberLocal(record.scoreFor),
    scoreAgainst: safeNumberLocal(record.scoreAgainst),
  };
}

function buildGameLogDetailRows(record, type) {
  if (type === "pitcher") {
    return (record.pitcherRows || []).map((row) => ({
      ...row,
      date: formatDateForDisplay(record.date),
      opponent: record.opponent,
      ipDisplay: row.ipDisplay || formatFractionalInnings(row.ip),
      era: row.era || derivePitchingDisplayStats(row).era,
    }));
  }

  return (record.playerBattingRows || []).map((row) => ({
    ...row,
    date: formatDateForDisplay(record.date),
    opponent: record.opponent,
    avg: row.avg || deriveBattingDisplayStats(row).avg,
    obp: row.obp || deriveBattingDisplayStats(row).obp,
    slg: row.slg || deriveBattingDisplayStats(row).slg,
    ops: row.ops || deriveBattingDisplayStats(row).ops,
  }));
}

function renderGameRecordDetail(record) {
  const batterRows = buildGameLogDetailRows(record, "batter");
  const pitcherRows = buildGameLogDetailRows(record, "pitcher");
  const sourceUrl = record.sourceUrl
    ? `<a href="${escapeHtml(record.sourceUrl)}" target="_blank" rel="noreferrer">원본 주소</a>`
    : `<span>원본 주소 없음</span>`;

  return `
    <div class="team-record-detail">
      <div class="team-record-detail-meta">
        <span>경기명 ${escapeHtml(record.gameTitle || "-")}</span>
        <span>${sourceUrl}</span>
        <span>원문 보관 ${record.sourceText ? "완료" : "없음"}</span>
      </div>
      <div class="team-record-detail-grid">
        <section class="team-detail-block">
          <h4>선수 타격기록</h4>
          <div class="table-wrap">
            ${batterRows.length ? createTableMarkup(gameLogBatterColumns, batterRows) : `<div class="placeholder-panel"><p>저장된 타격기록이 없습니다.</p></div>`}
          </div>
        </section>
        <section class="team-detail-block">
          <h4>투수기록</h4>
          <div class="table-wrap">
            ${pitcherRows.length ? createTableMarkup(gameLogPitcherColumns, pitcherRows) : `<div class="placeholder-panel"><p>저장된 투수기록이 없습니다.</p></div>`}
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderTeamRecordTable(year) {
  const records = getTeamRecordsByYear(year);
  if (!records.length) {
    return `
      <div class="placeholder-panel">
        <h2>${year}년 팀기록</h2>
        <p>${isEditableYear(year) ? "아직 저장된 경기 기록이 없습니다. 게임원 URL과 표 원문으로 첫 경기를 저장해 주세요." : "표시할 고정 팀기록이 없습니다."}</p>
      </div>
    `;
  }

  const desktopRows = records
    .map((record) => {
      const row = buildTeamRecordRow(record);
      const expanded = expandedTeamRecordIds.has(record.id);
      return `
        <tr class="team-summary-row" data-game-id="${record.id}">
          <td><button class="team-toggle" type="button" data-toggle-game="${record.id}">${expanded ? "접기" : "상세"}</button> ${row.date}</td>
          <td>${escapeHtml(row.opponent)}</td>
          <td>${row.result}</td>
          <td>${row.scoreFor}</td>
          <td>${row.scoreAgainst}</td>
          <td>${row.hits}</td>
          <td>${row.doubles}</td>
          <td>${row.triples}</td>
          <td>${row.homeRuns}</td>
          <td>${row.rbi}</td>
          <td>${escapeHtml(row.risp || "-")}</td>
          <td>${row.stolenBases}</td>
          <td>${row.walks}</td>
          <td>${row.strikeouts}</td>
          <td>${row.errors}</td>
          <td>${escapeHtml(row.notes || "")}</td>
        </tr>
        ${
          expanded
            ? `<tr class="team-detail-row"><td colspan="${teamRecordColumns.length}">${renderGameRecordDetail(record)}</td></tr>`
            : ""
        }
      `;
    })
    .join("");

  const mobileCards = records
    .map((record) => {
      const row = buildTeamRecordRow(record);
      return `
        <details class="team-record-card">
          <summary>
            <strong>${row.date}</strong>
            <span>${escapeHtml(row.opponent)} · ${row.result} · ${row.scoreFor}:${row.scoreAgainst}</span>
          </summary>
          <div class="team-record-card-body">
            <dl class="team-record-card-grid">
              <div><dt>안타</dt><dd>${row.hits}</dd></div>
              <div><dt>2루타</dt><dd>${row.doubles}</dd></div>
              <div><dt>3루타</dt><dd>${row.triples}</dd></div>
              <div><dt>홈런</dt><dd>${row.homeRuns}</dd></div>
              <div><dt>타점</dt><dd>${row.rbi}</dd></div>
              <div><dt>득점권</dt><dd>${escapeHtml(row.risp || "-")}</dd></div>
              <div><dt>도루</dt><dd>${row.stolenBases}</dd></div>
              <div><dt>볼넷</dt><dd>${row.walks}</dd></div>
              <div><dt>삼진</dt><dd>${row.strikeouts}</dd></div>
              <div><dt>실책</dt><dd>${row.errors}</dd></div>
            </dl>
            ${renderGameRecordDetail(record)}
          </div>
        </details>
      `;
    })
    .join("");

  return `
    <div class="team-record-desktop">
      <div class="table-wrap">
        <table class="stats-table team-record-table">
          <thead>
            <tr>${teamRecordColumns.map((column) => `<th>${column.label}</th>`).join("")}</tr>
          </thead>
          <tbody>${desktopRows}</tbody>
        </table>
      </div>
    </div>
    <div class="team-record-mobile">
      ${mobileCards}
    </div>
  `;
}

function buildMatchingOptions(selected, extraPlayers = []) {
  return [
    `<option value="">선수 선택</option>`,
    ...getKnownPlayers(extraPlayers).map((player) => `<option value="${escapeHtml(player)}"${player === selected ? " selected" : ""}>${player}</option>`),
  ].join("");
}

function isEditableYear(year) {
  return Number(year) === 2026;
}

function renderDraftSourceView(year, draft) {
  if (!draft.rawText && !draft.sourceUrl) {
    return "";
  }

  return `
    <section class="team-import-source">
      <div class="team-import-preview-header">
        <h3>원본 보기</h3>
        <p>붙여넣은 원문은 자동 파싱 결과와 별도로 그대로 보관됩니다.</p>
      </div>
      <div class="team-import-source-meta">
        <span>URL: ${draft.sourceUrl ? `<a href="${escapeHtml(draft.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(draft.sourceUrl)}</a>` : "없음"}</span>
        <span>원문 길이: ${String(draft.rawText || "").length}자</span>
      </div>
      <textarea id="team-raw-preview-${year}" class="team-source-viewer" rows="10" readonly>${escapeHtml(draft.rawText || "")}</textarea>
    </section>
  `;
}

function renderDraftMatchControls(year, rowType, rowIndex, originalName, selectedName, draft) {
  const normalizedOriginal = normalizePlayerName(originalName);
  const additionalPlayers = draft?.pendingRegisteredPlayers || [];
  const autoMatch = hasKnownPlayer(normalizedOriginal, additionalPlayers) ? normalizedOriginal : "";

  return `
    <div class="team-match-controls">
      <select data-player-match="${escapeHtml(normalizedOriginal)}" data-row-type="${rowType}" data-row-index="${rowIndex}">
        ${buildMatchingOptions(selectedName, additionalPlayers)}
      </select>
      <div class="team-inline-actions">
        <button type="button" data-match-edit="${rowType}:${rowIndex}">수정</button>
        <button type="button" data-match-reset="${rowType}:${rowIndex}" data-auto-match="${escapeHtml(autoMatch)}">초기화</button>
        <button type="button" data-match-clear="${rowType}:${rowIndex}">미매칭으로 되돌리기</button>
        <button type="button" data-match-register="${rowType}:${rowIndex}" data-original-name="${escapeHtml(normalizedOriginal)}">신규 등록</button>
      </div>
    </div>
  `;
}

function renderEditableBatterDraftTable(year, record, draft) {
  const rowsHtml = (record.playerBattingRows || [])
    .map((row, index) => {
      const issues = getBatterDraftIssues(row);
      const className = issues.length ? "needs-review" : "";
      const displayStats = deriveBattingDisplayStats(row);
      return `
        <tr class="${className}" data-batter-row="${index}">
          <td>${escapeHtml(row.originalPlayer || row.player || "")}</td>
          <td><input data-batter-field="battingOrder" data-row-index="${index}" type="number" min="1" step="1" value="${safeNumberLocal(row.battingOrder)}"></td>
          <td><input data-batter-field="pos" data-row-index="${index}" type="text" value="${escapeHtml(row.pos || "")}"></td>
          <td><input data-batter-field="number" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.number)}"></td>
          <td>${renderDraftMatchControls(year, "batter", index, row.originalPlayer || row.player, row.player, draft)}</td>
          <td><input data-batter-field="pa" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.pa)}"></td>
          <td><input data-batter-field="ab" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.ab)}"></td>
          <td><input data-batter-field="h" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.h)}"></td>
          <td><input data-batter-field="d2" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.d2)}"></td>
          <td><input data-batter-field="d3" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.d3)}"></td>
          <td><input data-batter-field="hr" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.hr)}"></td>
          <td><input data-batter-field="rbi" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.rbi)}"></td>
          <td><input data-batter-field="r" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.r)}"></td>
          <td><input data-batter-field="sb" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.sb)}"></td>
          <td><input data-batter-field="bb" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.bb)}"></td>
          <td><input data-batter-field="hbp" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.hbp)}"></td>
          <td><input data-batter-field="so" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.so)}"></td>
          <td><input data-batter-field="sf" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.sf)}"></td>
          <td><input data-batter-field="sh" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.sh)}"></td>
          <td>${displayStats.avg}</td>
          <td>${displayStats.obp}</td>
          <td>${displayStats.slg}</td>
          <td>${displayStats.ops}</td>
          <td>${issues.length ? `<span class="draft-issue-badge">확인 필요</span>` : `<span class="draft-ok-badge">확인 완료</span>`}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <div class="table-wrap">
      <table class="stats-table draft-edit-table">
        <thead>
          <tr>
            <th>원본 선수명</th>
            <th>타순</th>
            <th>포지션</th>
            <th>등번호</th>
            <th>매칭 선수명</th>
            <th>타석</th>
            <th>타수</th>
            <th>안타</th>
            <th>2루타</th>
            <th>3루타</th>
            <th>홈런</th>
            <th>타점</th>
            <th>득점</th>
            <th>도루</th>
            <th>볼넷</th>
            <th>사구</th>
            <th>삼진</th>
            <th>희생플라이</th>
            <th>희생번트</th>
            <th>AVG</th>
            <th>OBP</th>
            <th>SLG</th>
            <th>OPS</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>${rowsHtml || `<tr><td colspan="24">자동 변환된 타자 기록이 없습니다.</td></tr>`}</tbody>
      </table>
    </div>
  `;
}

function renderEditablePitcherDraftTable(year, record, draft) {
  const rowsHtml = (record.pitcherRows || [])
    .map((row, index) => {
      const issues = getPitcherDraftIssues(row);
      const className = issues.length ? "needs-review" : "";
      const displayStats = derivePitchingDisplayStats(row);
      return `
        <tr class="${className}" data-pitcher-row="${index}">
          <td>${escapeHtml(row.originalPlayer || row.player || "")}</td>
          <td><input data-pitcher-field="number" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.number)}"></td>
          <td>${renderDraftMatchControls(year, "pitcher", index, row.originalPlayer || row.player, row.player, draft)}</td>
          <td><input data-pitcher-field="resultText" data-row-index="${index}" type="text" value="${escapeHtml(row.resultText || "")}"></td>
          <td><input data-pitcher-field="ip" data-row-index="${index}" type="text" value="${escapeHtml(row.ipDisplay || formatFractionalInnings(row.ip))}"></td>
          <td><input data-pitcher-field="bf" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.bf)}"></td>
          <td><input data-pitcher-field="ab" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.ab)}"></td>
          <td><input data-pitcher-field="h" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.h)}"></td>
          <td><input data-pitcher-field="hr" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.hr)}"></td>
          <td><input data-pitcher-field="bb" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.bb)}"></td>
          <td><input data-pitcher-field="hbp" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.hbp)}"></td>
          <td><input data-pitcher-field="so" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.so)}"></td>
          <td><input data-pitcher-field="r" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.r)}"></td>
          <td><input data-pitcher-field="er" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.er)}"></td>
          <td><input data-pitcher-field="w" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.w)}"></td>
          <td><input data-pitcher-field="l" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.l)}"></td>
          <td><input data-pitcher-field="sv" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.sv)}"></td>
          <td><input data-pitcher-field="hld" data-row-index="${index}" type="number" min="0" step="1" value="${safeNumberLocal(row.hld)}"></td>
          <td><input data-pitcher-field="pitchCount" data-row-index="${index}" type="text" value="${escapeHtml(normalizePitchCount(row.pitchCount))}"></td>
          <td>${displayStats.era}</td>
          <td>${issues.length ? `<span class="draft-issue-badge">확인 필요</span>` : `<span class="draft-ok-badge">확인 완료</span>`}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <div class="table-wrap">
      <table class="stats-table draft-edit-table">
        <thead>
          <tr>
            <th>원본 선수명</th>
            <th>등번호</th>
            <th>매칭 선수명</th>
            <th>결과</th>
            <th>이닝</th>
            <th>타자</th>
            <th>타수</th>
            <th>피안타</th>
            <th>피홈런</th>
            <th>볼넷</th>
            <th>사구</th>
            <th>탈삼진</th>
            <th>실점</th>
            <th>자책</th>
            <th>승</th>
            <th>패</th>
            <th>세이브</th>
            <th>홀드</th>
            <th>투구수</th>
            <th>ERA</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>${rowsHtml || `<tr><td colspan="21">자동 변환된 투수 기록이 없습니다.</td></tr>`}</tbody>
      </table>
    </div>
  `;
}

function renderAppliedHistory(year) {
  if (!isEditableYear(year)) {
    return "";
  }

  const records = getAppliedGameHistory(year);
  return `
    <section class="team-history-panel">
      <div class="team-import-preview-header">
        <h3>반영 이력</h3>
        <p>이미 통산에 반영된 경기입니다. 필요하면 경기 단위로 취소할 수 있습니다.</p>
      </div>
      ${
        records.length
          ? `<div class="team-history-list">
              ${records
                .map(
                  (record) => `
                    <div class="team-history-item">
                      <div>
                        <strong>${escapeHtml(formatDateForDisplay(record.date))}</strong>
                        <span>${escapeHtml(record.opponent || "-")} · ${safeNumberLocal(record.scoreFor)}:${safeNumberLocal(record.scoreAgainst)}</span>
                      </div>
                      <div class="team-inline-actions">
                        <button type="button" data-edit-game="${record.id}">수정 불러오기</button>
                        <button type="button" data-undo-game="${record.id}">이번 경기 반영 취소</button>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>`
          : `<div class="placeholder-panel"><p>아직 통산에 반영된 2026 경기 기록이 없습니다.</p></div>`
      }
    </section>
  `;
}

function renderTeamImportPreview(year) {
  const draft = getTeamImportDraft(year);
  if (!draft?.record || (!draft.record.playerBattingRows.length && !draft.record.pitcherRows.length && !draft.rawText)) {
    return "";
  }

  const record = draft.record;
  const duplicate = getExistingGameRecord(record);

  return `
    <section class="team-import-preview">
      <div class="team-import-preview-header">
        <h3>자동 변환 초안 확인</h3>
        <p>${duplicate ? "이미 반영된 경기입니다. 다시 반영하면 기존 경기 기록을 덮어씁니다." : "자동 파싱 결과는 초안입니다. 매칭과 기록을 직접 수정한 뒤 통산 반영을 진행해 주세요."}</p>
      </div>
      <div class="team-edit-grid">
        <label><span>경기 날짜</span><input id="team-record-date-${year}" type="date" value="${escapeHtml(record.date)}"></label>
        <label><span>경기명</span><input id="team-record-title-${year}" type="text" value="${escapeHtml(record.gameTitle || "")}" placeholder="예: 정규시즌 3차전"></label>
        <label><span>상대팀</span><input id="team-record-opponent-${year}" type="text" value="${escapeHtml(record.opponent)}" placeholder="상대팀"></label>
        <label><span>득점</span><input id="team-record-score-for-${year}" type="number" min="0" value="${safeNumberLocal(record.scoreFor)}"></label>
        <label><span>실점</span><input id="team-record-score-against-${year}" type="number" min="0" value="${safeNumberLocal(record.scoreAgainst)}"></label>
        <label><span>득점권</span><input id="team-record-risp-${year}" type="text" value="${escapeHtml(record.teamBattingSummary?.risp || "")}" placeholder="예: 7타수 3안타"></label>
        <label><span>실책</span><input id="team-record-errors-${year}" type="number" min="0" value="${safeNumberLocal(record.teamBattingSummary?.errors)}"></label>
        <label class="team-edit-wide"><span>비고</span><input id="team-record-notes-${year}" type="text" value="${escapeHtml(record.teamBattingSummary?.notes || "")}" placeholder="비고"></label>
      </div>
      ${renderDraftSourceView(year, draft)}
      ${renderDraftIssueSummary(record, draft.warnings)}
      <div class="team-import-preview-tables">
        <section class="team-detail-block">
          <h4>선수 타격기록 초안</h4>
          ${renderEditableBatterDraftTable(year, record, draft)}
        </section>
        <section class="team-detail-block">
          <h4>투수기록 초안</h4>
          ${renderEditablePitcherDraftTable(year, record, draft)}
        </section>
      </div>
      <div class="team-import-actions">
        <button id="team-save-button-${year}" data-action="save-2026-game-record" data-year="${year}" type="button">${duplicate ? "2026 경기 기록 덮어쓰기 저장" : "2026 경기 기록으로 저장"}</button>
        <button id="team-clear-draft-button-${year}" type="button" class="secondary">초안 삭제</button>
      </div>
    </section>
  `;
}

function collectTeamDraftFromInputs(year) {
  const draft = getTeamImportDraft(year);
  if (!draft?.record) {
    return null;
  }

  const currentSourceUrl = document.getElementById(`team-url-input-${year}`)?.value?.trim() || draft.sourceUrl || "";
  const currentRawText = document.getElementById(`team-raw-input-${year}`)?.value || draft.rawText || "";
  const matchingMap = { ...(draft.record.matchingMap || {}) };
  document.querySelectorAll("[data-player-match]").forEach((select) => {
    if (select.value) {
      matchingMap[select.dataset.playerMatch] = select.value;
    } else {
      delete matchingMap[select.dataset.playerMatch];
    }
  });

  const batterRows = Array.from(document.querySelectorAll("[data-batter-row]")).map((rowElement, index) => {
    const originalPlayer = sanitizeDraftText(
      draft.record.playerBattingRows[index]?.originalPlayer || draft.record.playerBattingRows[index]?.player || ""
    );
    const mappedPlayer = sanitizeDraftText(
      rowElement.querySelector(`[data-row-type="batter"][data-row-index="${index}"]`)?.value || matchingMap[originalPlayer] || ""
    );
    const flaggedFields = [];
    const numericValue = (field, label) => {
      const parsed = parseStrictCountCell(
        rowElement.querySelector(`[data-batter-field="${field}"][data-row-index="${index}"]`)?.value
      );
      if (parsed.suspicious) {
        flaggedFields.push(label);
      }
      return parsed.value;
    };
    const row = {
      originalPlayer,
      player: mappedPlayer,
      battingOrder: numericValue("battingOrder", "타순"),
      pos: sanitizeDraftText(rowElement.querySelector(`[data-batter-field="pos"][data-row-index="${index}"]`)?.value),
      number: numericValue("number", "등번호"),
      pa: numericValue("pa", "타석"),
      ab: numericValue("ab", "타수"),
      h: numericValue("h", "안타"),
      d2: numericValue("d2", "2루타"),
      d3: numericValue("d3", "3루타"),
      hr: numericValue("hr", "홈런"),
      rbi: numericValue("rbi", "타점"),
      r: numericValue("r", "득점"),
      sb: numericValue("sb", "도루"),
      bb: numericValue("bb", "볼넷"),
      hbp: numericValue("hbp", "사구"),
      so: numericValue("so", "삼진"),
      sf: numericValue("sf", "희생플라이"),
      sh: numericValue("sh", "희생번트"),
    };
    const display = deriveBattingDisplayStats({
      ...row,
      tb: Math.max(0, row.h - row.d2 - row.d3 - row.hr) + row.d2 * 2 + row.d3 * 3 + row.hr * 4,
    });
    return {
      ...row,
      tb: display.tb,
      avg: display.avg,
      obp: display.obp,
      slg: display.slg,
      ops: display.ops,
      _draftFlags: flaggedFields,
    };
  });

  const pitcherRows = Array.from(document.querySelectorAll("[data-pitcher-row]")).map((rowElement, index) => {
    const originalPlayer = sanitizeDraftText(
      draft.record.pitcherRows[index]?.originalPlayer || draft.record.pitcherRows[index]?.player || ""
    );
    const mappedPlayer = cleanPlayerName(sanitizeDraftText(
      rowElement.querySelector(`[data-row-type="pitcher"][data-row-index="${index}"]`)?.value || matchingMap[originalPlayer] || ""
    ));
    const flaggedFields = [];
    const numericValue = (field, label) => {
      const parsed = parseStrictCountCell(
        rowElement.querySelector(`[data-pitcher-field="${field}"][data-row-index="${index}"]`)?.value
      );
      if (parsed.suspicious) {
        flaggedFields.push(label);
      }
      return parsed.value;
    };
    const rawIp = sanitizeDraftText(
      rowElement.querySelector(`[data-pitcher-field="ip"][data-row-index="${index}"]`)?.value
    );
    const ip = parseInningCell(rawIp);
    const display = derivePitchingDisplayStats({ ip, er: numericValue("er"), h: numericValue("h"), bb: numericValue("bb") });
    return {
      originalPlayer,
      player: mappedPlayer,
      number: numericValue("number", "등번호"),
      resultText: normalizePitcherResultText(sanitizeDraftText(
        rowElement.querySelector(`[data-pitcher-field="resultText"][data-row-index="${index}"]`)?.value
      )),
      ip,
      ipDisplay: rawIp || formatFractionalInnings(ip),
      bf: numericValue("bf", "타자"),
      ab: numericValue("ab", "타수"),
      h: numericValue("h", "피안타"),
      hr: numericValue("hr", "피홈런"),
      bb: numericValue("bb", "볼넷"),
      hbp: numericValue("hbp", "사구"),
      so: numericValue("so", "탈삼진"),
      r: numericValue("r", "실점"),
      er: numericValue("er", "자책"),
      w: numericValue("w", "승"),
      l: numericValue("l", "패"),
      sv: numericValue("sv", "세이브"),
      hld: numericValue("hld", "홀드"),
      pitchCount: normalizePitchCount(
        rowElement.querySelector(`[data-pitcher-field="pitchCount"][data-row-index="${index}"]`)?.value
      ),
      era: display.era,
      _draftFlags: flaggedFields,
    };
  });

  return normalizeGameRecord(
    {
      ...draft.record,
      sourceUrl: currentSourceUrl,
      sourceText: currentRawText,
      rawText: currentRawText,
      playerBattingRows: batterRows,
      pitcherRows,
      teamBattingSummary: {
        ...(draft.record.teamBattingSummary || createEmptyTeamBattingSummary()),
        risp: document.getElementById(`team-record-risp-${year}`)?.value || "",
        errors: document.getElementById(`team-record-errors-${year}`)?.value || 0,
        notes: document.getElementById(`team-record-notes-${year}`)?.value || "",
      },
    },
    {
      year,
      sourceUrl: currentSourceUrl,
      sourceText: currentRawText,
      date: document.getElementById(`team-record-date-${year}`)?.value || draft.record.date,
      gameTitle: document.getElementById(`team-record-title-${year}`)?.value || draft.record.gameTitle || "",
      opponent: document.getElementById(`team-record-opponent-${year}`)?.value || draft.record.opponent,
      scoreFor: document.getElementById(`team-record-score-for-${year}`)?.value || draft.record.scoreFor,
      scoreAgainst: document.getElementById(`team-record-score-against-${year}`)?.value || draft.record.scoreAgainst,
      teamBattingSummary: {
        ...(draft.record.teamBattingSummary || createEmptyTeamBattingSummary()),
        risp: document.getElementById(`team-record-risp-${year}`)?.value || "",
        errors: document.getElementById(`team-record-errors-${year}`)?.value || 0,
        notes: document.getElementById(`team-record-notes-${year}`)?.value || "",
      },
      matchingMap,
      additionalPlayers: draft.pendingRegisteredPlayers || [],
      createdAt: draft.record.createdAt,
    }
  );
}

function refreshAfter2026Save(year = "2026") {
  recalculateCareerStatsFromGameLogs();

  if (typeof renderTeamYear === "function") {
    renderTeamYear(String(year));
  }
  if (typeof renderPlayerYear === "function") {
    renderPlayerYear("2026");
  }
  if (typeof renderCareerPage === "function") {
    renderCareerPage(state.totalType || "hitter");
  }
  if (typeof renderCareerRanking === "function") {
    renderCareerRanking();
  }
  if (typeof renderCurrentPage === "function") {
    renderCurrentPage();
  }
}

function save2026GameRecord(year = "2026") {
  try {
    const targetYear = String(year || "2026");
    const record = collectTeamDraftFromInputs(targetYear);
    if (!record) {
      teamPageNotices[targetYear] = "2026 경기 기록 저장 중 오류가 발생했습니다.";
      console.error("[watchdogs] save2026GameRecord: draft record missing");
      renderTeamYear(targetYear);
      return false;
    }

    const currentSourceUrl = document.getElementById(`team-url-input-${targetYear}`)?.value?.trim() || "";
    const currentRawText = document.getElementById(`team-raw-input-${targetYear}`)?.value || "";
    const draft = getTeamImportDraft(targetYear);

    if (draft && (currentSourceUrl !== (draft.parsedSourceUrl || "") || currentRawText !== (draft.parsedRawText || ""))) {
      const reparsed = parseGameOneHtmlOrText(currentRawText);
      const refreshedRecord = normalizeGameRecord(reparsed, {
        year: targetYear,
        sourceUrl: currentSourceUrl,
        sourceText: currentRawText,
        additionalPlayers: draft.pendingRegisteredPlayers || [],
      });
      saveTeamImportDraft(targetYear, {
        sourceUrl: currentSourceUrl,
        rawText: currentRawText,
        parsedSourceUrl: currentSourceUrl,
        parsedRawText: currentRawText,
        warnings: reparsed.warnings,
        pendingRegisteredPlayers: draft.pendingRegisteredPlayers || [],
        record: refreshedRecord,
      });
      teamPageNotices[targetYear] = "URL 또는 표 원문이 변경되어 미리보기를 갱신했습니다. 내용을 확인한 뒤 다시 저장해 주세요.";
      renderTeamYear(targetYear);
      return false;
    }

    if (!record.date || !String(record.opponent || "").trim()) {
      teamPageNotices[targetYear] = "경기 날짜와 상대팀을 먼저 입력해 주세요.";
      renderTeamYear(targetYear);
      return false;
    }

    if (!String(record.sourceUrl || "").trim()) {
      teamPageNotices[targetYear] = "게임원 경기결과 URL을 먼저 입력해 주세요.";
      renderTeamYear(targetYear);
      return false;
    }

    if (!record.playerBattingRows.length && !record.pitcherRows.length) {
      teamPageNotices[targetYear] = "저장할 선수 기록이 없습니다. 표 원문을 확인해 주세요.";
      renderTeamYear(targetYear);
      return false;
    }

    if (record.unmatchedPlayers.length) {
      saveTeamImportDraft(targetYear, {
        ...draft,
        record,
      });
      teamPageNotices[targetYear] = "저장 전에 모든 선수명을 기존 선수와 매칭해 주세요.";
      renderTeamYear(targetYear);
      return false;
    }

    const result = saveGameRecord(record, { overwrite: Boolean(getExistingGameRecord(record)) });
    if (!result.saved) {
      teamPageNotices[targetYear] = result.readOnly
        ? "과거 시즌은 수정할 수 없습니다."
        : "이미 저장된 경기입니다. 확인 후 다시 저장해 주세요.";
      console.error("[watchdogs] save2026GameRecord: saveGameRecord rejected", result);
      renderTeamYear(targetYear);
      return false;
    }

    (draft?.pendingRegisteredPlayers || []).forEach((name) => ensureRegisteredPlayer(name));
    clearTeamImportDraft(targetYear);
    teamPageNotices[targetYear] = "2026 경기 기록이 저장되었습니다.";
    refreshAfter2026Save(targetYear);
    console.log("[watchdogs] 2026 game record saved", {
      id: result.record?.id || record.id,
      duplicated: result.duplicated,
      year: targetYear,
      date: record.date,
      opponent: record.opponent,
    });
    if (typeof window !== "undefined" && typeof window.alert === "function") {
      window.alert("2026 경기 기록이 저장되었습니다.");
    }
    return true;
  } catch (error) {
    console.error("[watchdogs] 2026 경기 기록 저장 중 오류", error);
    teamPageNotices[String(year || "2026")] = "2026 경기 기록 저장 중 오류가 발생했습니다.";
    if (typeof renderTeamYear === "function") {
      renderTeamYear(String(year || "2026"));
    }
    if (typeof window !== "undefined" && typeof window.alert === "function") {
      window.alert("2026 경기 기록 저장 중 오류가 발생했습니다.");
    }
    return false;
  }
}

function bindTeamYearActions(year) {
  if (isEditableYear(year)) {
    const persistDraftFromDom = () => {
      const existingDraft = getTeamImportDraft(year);
      const hasPreview =
        Boolean(existingDraft.record?.playerBattingRows?.length) ||
        Boolean(existingDraft.record?.pitcherRows?.length) ||
        Boolean(existingDraft.record?.date) ||
        Boolean(existingDraft.record?.opponent);

      if (hasPreview) {
        const record = collectTeamDraftFromInputs(year);
        if (record) {
          saveTeamImportDraft(year, {
            ...existingDraft,
            sourceUrl: document.getElementById(`team-url-input-${year}`)?.value?.trim() || existingDraft.sourceUrl || "",
            rawText: document.getElementById(`team-raw-input-${year}`)?.value || existingDraft.rawText || "",
            record,
            warnings: existingDraft.warnings || [],
            parsedSourceUrl: existingDraft.parsedSourceUrl || "",
            parsedRawText: existingDraft.parsedRawText || "",
          });
        }
        return;
      }

      saveTeamImportDraft(year, {
        ...existingDraft,
        sourceUrl: document.getElementById(`team-url-input-${year}`)?.value?.trim() || "",
        rawText: document.getElementById(`team-raw-input-${year}`)?.value || "",
        parsedSourceUrl: existingDraft.parsedSourceUrl || "",
        parsedRawText: existingDraft.parsedRawText || "",
      });
    };

    document.getElementById(`team-url-fetch-button-${year}`)?.addEventListener("click", async () => {
      const sourceUrl = document.getElementById(`team-url-input-${year}`)?.value?.trim() || "";
      const currentRawText = document.getElementById(`team-raw-input-${year}`)?.value || "";
      const existingDraft = getTeamImportDraft(year);
      if (!sourceUrl) {
        teamPageNotices[year] = "게임원 경기결과 URL을 먼저 입력해 주세요.";
        renderTeamYear(year);
        return;
      }

      saveTeamImportDraft(year, {
        ...existingDraft,
        sourceUrl,
        rawText: currentRawText,
      });
      teamPageNotices[year] = "게임원 URL에서 기록을 불러오는 중입니다...";
      renderTeamYear(year);

      try {
        const rawText = await fetchGameSourceFromUrl(sourceUrl);
        saveTeamImportDraft(year, buildTeamDraftFromSource(year, sourceUrl, rawText, existingDraft));
        teamPageNotices[year] = "게임원 URL에서 기록을 불러왔습니다. 초안을 확인해 주세요.";
        renderTeamYear(year);
      } catch (error) {
        saveTeamImportDraft(year, {
          ...existingDraft,
          sourceUrl,
          rawText: currentRawText || existingDraft.rawText || "",
        });
        teamPageNotices[year] = `URL 자동 불러오기에 실패했습니다. ${error?.message || "브라우저 보안(CORS) 또는 페이지 접근 제한일 수 있습니다."} 표 원문 붙여넣기로 이어서 진행해 주세요.`;
        renderTeamYear(year);
      }
    });

    document.getElementById(`team-parse-button-${year}`)?.addEventListener("click", () => {
      const sourceUrl = document.getElementById(`team-url-input-${year}`)?.value?.trim() || "";
      const rawText = document.getElementById(`team-raw-input-${year}`)?.value || "";
      const existingDraft = getTeamImportDraft(year);
      if (!rawText.trim()) {
        teamPageNotices[year] = sourceUrl
          ? "표 원문이 비어 있습니다. URL 자동 불러오기를 먼저 시도하거나, 표 원문을 붙여넣어 주세요."
          : "게임원 URL 자동 불러오기 또는 표 원문 붙여넣기 중 하나가 필요합니다.";
        renderTeamYear(year);
        return;
      }
      saveTeamImportDraft(year, buildTeamDraftFromSource(year, sourceUrl, rawText, existingDraft));
      teamPageNotices[year] = "";
      renderTeamYear(year);
    });

    document.getElementById(`team-save-button-${year}`)?.addEventListener("click", () => {
      const record = collectTeamDraftFromInputs(year);
      if (!record) {
        return;
      }

      const currentSourceUrl = document.getElementById(`team-url-input-${year}`)?.value?.trim() || "";
      const currentRawText = document.getElementById(`team-raw-input-${year}`)?.value || "";
      const draft = getTeamImportDraft(year);
      if (draft && (currentSourceUrl !== (draft.parsedSourceUrl || "") || currentRawText !== (draft.parsedRawText || ""))) {
        const reparsed = parseGameOneHtmlOrText(currentRawText);
        const refreshedRecord = normalizeGameRecord(reparsed, {
          year,
          sourceUrl: currentSourceUrl,
          sourceText: currentRawText,
          additionalPlayers: draft.pendingRegisteredPlayers || [],
        });
        saveTeamImportDraft(year, {
          sourceUrl: currentSourceUrl,
          rawText: currentRawText,
          parsedSourceUrl: currentSourceUrl,
          parsedRawText: currentRawText,
          warnings: reparsed.warnings,
          pendingRegisteredPlayers: draft.pendingRegisteredPlayers || [],
          record: refreshedRecord,
        });
        teamPageNotices[year] = "URL 또는 표 원문이 변경되어 미리보기를 갱신했습니다. 내용을 확인한 뒤 다시 저장해 주세요.";
        renderTeamYear(year);
        return;
      }

      if (!record.date || !String(record.opponent || "").trim()) {
        teamPageNotices[year] = "경기 날짜와 상대팀은 반드시 입력해 주세요.";
        renderTeamYear(year);
        return;
      }

      if (!String(record.sourceUrl || "").trim()) {
        teamPageNotices[year] = "게임원 경기결과 URL을 함께 입력해 주세요.";
        renderTeamYear(year);
        return;
      }

      if (!record.playerBattingRows.length && !record.pitcherRows.length) {
        teamPageNotices[year] = "저장할 선수 기록이 없습니다. 표 원문을 확인해 주세요.";
        renderTeamYear(year);
        return;
      }

      if (record.unmatchedPlayers.length) {
        saveTeamImportDraft(year, {
          ...draft,
          record,
        });
        teamPageNotices[year] = "저장 전에 모든 선수명을 기존 선수와 매칭해 주세요.";
        renderTeamYear(year);
        return;
      }

      const result = saveGameRecord(record, { overwrite: Boolean(getExistingGameRecord(record)) });
      if (!result.saved) {
        teamPageNotices[year] = result.readOnly
          ? "과거 시즌은 수정할 수 없습니다."
          : "이미 저장된 경기입니다. 확인 후 다시 저장해 주세요.";
        renderTeamYear(year);
        return;
      }

      recalculateCareerStatsFromGameLogs();
      (draft.pendingRegisteredPlayers || []).forEach((name) => ensureRegisteredPlayer(name));
      teamPageNotices[year] = result.duplicated ? "기존 경기 기록을 덮어썼습니다." : "경기 기록을 저장했습니다.";
      clearTeamImportDraft(year);
      renderTeamYear(year);
    });

    document.getElementById(`team-clear-draft-button-${year}`)?.addEventListener("click", () => {
      clearTeamImportDraft(year);
      teamPageNotices[year] = "작성 중인 초안을 삭제했습니다.";
      renderTeamYear(year);
    });

    document.querySelectorAll("[data-player-match]").forEach((select) => {
      select.addEventListener("change", () => {
        const record = collectTeamDraftFromInputs(year);
        if (!record) {
          return;
        }
        saveTeamImportDraft(year, {
          ...getTeamImportDraft(year),
          record,
        });
        renderTeamYear(year);
      });
    });

    document.querySelectorAll("[data-match-edit]").forEach((button) => {
      button.addEventListener("click", () => {
        const [rowType, rowIndex] = String(button.dataset.matchEdit || "").split(":");
        document
          .querySelector(`[data-row-type="${rowType}"][data-row-index="${rowIndex}"]`)
          ?.focus();
      });
    });

    document.querySelectorAll("[data-match-reset]").forEach((button) => {
      button.addEventListener("click", () => {
        const [rowType, rowIndex] = String(button.dataset.matchReset || "").split(":");
        const select = document.querySelector(`[data-row-type="${rowType}"][data-row-index="${rowIndex}"]`);
        if (!select) {
          return;
        }
        select.value = button.dataset.autoMatch || "";
        const record = collectTeamDraftFromInputs(year);
        if (record) {
          saveTeamImportDraft(year, { ...getTeamImportDraft(year), record });
          renderTeamYear(year);
        }
      });
    });

    document.querySelectorAll("[data-match-clear]").forEach((button) => {
      button.addEventListener("click", () => {
        const [rowType, rowIndex] = String(button.dataset.matchClear || "").split(":");
        const select = document.querySelector(`[data-row-type="${rowType}"][data-row-index="${rowIndex}"]`);
        if (!select) {
          return;
        }
        select.value = "";
        const record = collectTeamDraftFromInputs(year);
        if (record) {
          saveTeamImportDraft(year, { ...getTeamImportDraft(year), record });
          renderTeamYear(year);
        }
      });
    });

    document.querySelectorAll("[data-match-register]").forEach((button) => {
      button.addEventListener("click", () => {
        const originalName = normalizePlayerName(button.dataset.originalName || "");
        const draftState = getTeamImportDraft(year);
        const [rowType, rowIndex] = String(button.dataset.matchRegister || "").split(":");
        const select = document.querySelector(`[data-row-type="${rowType}"][data-row-index="${rowIndex}"]`);
        if (!select || !originalName) {
          return;
        }
        const pendingRegisteredPlayers = Array.from(new Set([...(draftState.pendingRegisteredPlayers || []), originalName]));
        select.innerHTML = buildMatchingOptions(originalName, pendingRegisteredPlayers);
        select.value = originalName;
        const record = collectTeamDraftFromInputs(year);
        if (record) {
          saveTeamImportDraft(year, { ...draftState, pendingRegisteredPlayers, record });
          teamPageNotices[year] = `${originalName} 선수를 신규 등록 후보로 추가했습니다. 내용을 확인한 뒤 통산 반영을 진행해 주세요.`;
          renderTeamYear(year);
        }
      });
    });

    document.querySelectorAll(
      [
        "[data-batter-field]",
        "[data-pitcher-field]",
        `#team-url-input-${year}`,
        `#team-raw-input-${year}`,
        `#team-record-date-${year}`,
        `#team-record-title-${year}`,
        `#team-record-opponent-${year}`,
        `#team-record-score-for-${year}`,
        `#team-record-score-against-${year}`,
        `#team-record-risp-${year}`,
        `#team-record-errors-${year}`,
        `#team-record-notes-${year}`,
      ].join(", ")
    ).forEach((input) => {
      input.addEventListener("input", persistDraftFromDom);
      input.addEventListener("change", persistDraftFromDom);
    });
  }

  document.querySelectorAll("[data-edit-game]").forEach((button) => {
    button.addEventListener("click", () => {
      const gameId = button.dataset.editGame;
      const record = gameRecords.find((entry) => entry.id === gameId);
      if (!record) {
        return;
      }

      saveTeamImportDraft(year, {
        sourceUrl: record.sourceUrl || "",
        rawText: record.sourceText || "",
        parsedSourceUrl: record.sourceUrl || "",
        parsedRawText: record.sourceText || "",
        record,
        warnings: [],
      });
      teamPageNotices[year] = "저장된 경기 기록을 초안으로 불러왔습니다. 수정 후 다시 저장하면 덮어쓰기 됩니다.";
      renderTeamYear(year);
    });
  });

  document.querySelectorAll("[data-undo-game]").forEach((button) => {
    button.addEventListener("click", () => {
      const gameId = button.dataset.undoGame;
      const target = gameRecords.find((entry) => entry.id === gameId);
      if (!target) {
        return;
      }
      const approved = typeof window !== "undefined" && typeof window.confirm === "function"
        ? window.confirm(`${formatDateForDisplay(target.date)} ${target.opponent} 경기 반영을 취소할까요?`)
        : true;
      if (!approved) {
        return;
      }

      if (removeGameRecord(gameId)) {
        recalculateCareerStatsFromGameLogs();
        teamPageNotices[year] = "선택한 경기 반영을 취소했습니다.";
        renderTeamYear(year);
      }
    });
  });

  document.querySelectorAll("[data-toggle-game]").forEach((button) => {
    button.addEventListener("click", () => {
      const gameId = button.dataset.toggleGame;
      if (expandedTeamRecordIds.has(gameId)) {
        expandedTeamRecordIds.delete(gameId);
      } else {
        expandedTeamRecordIds.add(gameId);
      }
      renderTeamYear(year);
    });
  });
}

function renderTeamYear(year) {
  const container = document.getElementById("page-container");
  const editable = isEditableYear(year);
  const notice = teamPageNotices[year]
    ? `<div class="team-notice">${escapeHtml(teamPageNotices[year])}</div>`
    : "";
  const draft = getTeamImportDraft(year);

  container.innerHTML = `
    <section class="page team-page">
      <div class="page-header">
        <h2>팀기록 ${year}</h2>
        <p>${editable ? "게임원 기록은 자동 반영이 아니라 초안 생성까지만 진행됩니다. 원본 확인과 수정 후 통산 반영을 진행해 주세요." : "과거 시즌은 고정 데이터만 조회할 수 있습니다."}</p>
      </div>
      ${notice || (!editable ? `<div class="team-notice">2022~2025 시즌은 기록 보존용 데이터로 수정할 수 없습니다.</div>` : "")}
      ${
        editable
          ? `
      <section class="team-import-panel">
        <div class="team-import-header">
          <h3>게임원 기록 붙여넣기</h3>
          <p>먼저 게임원 URL 자동 불러오기를 시도하고, 실패하면 표 원문 붙여넣기로 초안을 만들 수 있습니다.</p>
        </div>
        <div class="team-import-form">
          <label class="team-edit-wide">
            <span>게임원 경기결과 URL</span>
            <input id="team-url-input-${year}" type="url" placeholder="https://..." value="${escapeHtml(draft?.sourceUrl || "")}">
          </label>
          <label class="team-edit-wide">
            <span>경기결과 표 원문 붙여넣기</span>
            <textarea id="team-raw-input-${year}" rows="10" placeholder="게임원 경기결과 페이지에서 표 영역을 복사해 붙여넣어 주세요.">${escapeHtml(draft?.rawText || "")}</textarea>
          </label>
          <div class="team-import-actions">
            <button id="team-url-fetch-button-${year}" type="button">URL 자동 불러오기 시도</button>
            <button id="team-parse-button-${year}" type="button">기록표 생성</button>
          </div>
        </div>
        ${renderTeamImportPreview(year)}
      </section>
      ${renderAppliedHistory(year)}
      `
          : ""
      }
      <section class="career-section">
        <div class="career-header">
          <h3>${year}년 경기 누적</h3>
        </div>
        ${renderTeamRecordTable(year)}
      </section>
    </section>
  `;

  bindTeamYearActions(year);
}

function renderPlayerYear(year) {
  renderPlayerStats(year, state.playerType);
}

function renderTotal() {
  renderCareerPage(state.totalType);
}

function renderCareerRanking() {
  renderRank(state.rankType);
}

function renderRankingGuide() {
  const guide = getRankingGuideStats();

  return `
    <section class="ranking-guide" aria-label="통산순위 기준 안내">
      <div class="ranking-guide-header">
        <h3>통산순위 기준 안내</h3>
        <p>통산순위는 통산기록 누적 원자료를 기준으로 계산하며, 2026 경기 저장분도 같은 방식으로 자동 합산됩니다.</p>
      </div>
      <div class="ranking-guide-grid">
        <article class="ranking-guide-card">
          <h4>기준 계산</h4>
          <ul class="ranking-guide-list">
            <li>팀 총 경기 수: ${guide.teamGames}경기</li>
            <li>타자 규정타석: 팀 경기 수 × 1.5 = ${guide.requiredPA}타석</li>
            <li>투수 규정이닝: 고정 ${guide.requiredIP}이닝</li>
          </ul>
        </article>
        <article class="ranking-guide-card">
          <h4>지표 설명</h4>
          <ul class="ranking-guide-list">
            <li>RC: Runs Created. 타자의 출루와 장타 생산력을 바탕으로 득점 기여도를 추정한 지표입니다.</li>
            <li>RC/18: 18아웃 기준 RC 환산값입니다. 경기당 생산력을 비교하기 쉽게 만든 보정 지표입니다.</li>
            <li>XR: Extrapolated Runs. 안타, 장타, 볼넷 등 공격 이벤트별 가중치를 적용해 예상 득점 생산력을 계산한 지표입니다.</li>
          </ul>
        </article>
      </div>
    </section>
  `;
}

function buildRankingEntries(rows, config, type) {
  const qualificationChecker =
    type === "hitter"
      ? isQualifiedBatter
      : type === "pitcher" && config.separateQualification
        ? isQualifiedPitcher
        : null;

  if (qualificationChecker && config.separateQualification) {
    const qualifiedRows = rows.filter((row) => qualificationChecker(row));
    const underQualifiedRows = rows.filter((row) => !qualificationChecker(row));

    const qualifiedEntries = buildCompetitiveRankEntries(qualifiedRows, config, { qualified: true });
    const lastQualifiedRank = qualifiedEntries.length ? qualifiedEntries[qualifiedEntries.length - 1].rank : 0;
    const underQualifiedEntries = buildCompetitiveRankEntries(underQualifiedRows, config, {
      qualified: false,
      underQualified: true,
      rankOffset: lastQualifiedRank,
    });

    if (!underQualifiedEntries.length) {
      return insertTopTenSeparator(qualifiedEntries);
    }

    return insertTopTenSeparator([
      ...qualifiedEntries,
      createSeparatorEntry("qualification-divider", type === "pitcher" ? "규정이닝 미달" : "규정타석 미달"),
      ...underQualifiedEntries,
    ]);
  }

  const rankedEntries = buildCompetitiveRankEntries(rows, config, {
    qualified: qualificationChecker || undefined,
    highlightQualified:
      (type === "hitter" && config.qualificationHighlight) ||
      (type === "pitcher" && config.qualificationHighlight),
    underQualified: false,
  }).map((entry) => {
    if (((type === "hitter") || (type === "pitcher")) && config.qualificationHighlight && qualificationChecker) {
      const targetRow = rows.find((row) => row.name === entry.name) || {};
      const qualified = qualificationChecker(targetRow);
      return {
        ...entry,
        qualified,
        highlightQualified: qualified,
        underQualified: !qualified,
      };
    }
    return entry;
  });

  return insertTopTenSeparator(rankedEntries);
}

function renderRank(type) {
  const isPitcher = type === "pitcher";
  const label = isPitcher ? "투수" : "타자";
  const rows = isPitcher ? careerPitchers2022To2025 : getVisibleCareerHitterRows();
  const configs = isPitcher ? pitcherRankConfigs : hitterRankConfigs;
  const snapshots = {};

  const blocksHtml = configs
    .map((config) => {
      const previousSnapshot = loadRankingSnapshot(type, config.key) || {};
      const entries = buildRankingEntries(rows, config, type);
      const currentSnapshot = {};
      const changes = {};

      entries.forEach((entry) => {
        if (entry.type !== "player" || entry.snapshotRank == null) {
          return;
        }
        currentSnapshot[entry.name] = entry.snapshotRank;
        changes[entry.name] = compareRankChange(entry.snapshotRank, previousSnapshot[entry.name]);
      });

      snapshots[config.key] = currentSnapshot;

      return `
        <section class="ranking-card">
          <h3>${config.label}</h3>
          <div class="table-wrap">
            ${createRankingTableMarkup(entries, changes)}
          </div>
        </section>
      `;
    })
    .join("");

  const container = document.getElementById("page-container");
  container.innerHTML = `
    <section class="page ranking-page">
      <div class="page-header">
        <h2>통산순위 ${label}</h2>
        <p>기존 통산값과 저장된 경기 로그를 합산한 통산기록표 기준 항목별 순위입니다.</p>
      </div>
      ${renderRankingGuide()}
      ${renderRankingTeamAverage()}
      <div class="ranking-grid">
        ${blocksHtml}
      </div>
    </section>
  `;

  saveRankingSnapshot(type, snapshots);
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

  renderCareerRanking();
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

function initTotalClicks() {
  document.querySelectorAll("[data-total-type]").forEach((el) => {
    el.addEventListener("click", () => {
      state.menu = "total";
      state.totalType = el.dataset.totalType;
      renderCurrentPage();
    });
  });
}

function bindGlobalSaveDelegation() {
  document.addEventListener(
    "click",
    (event) => {
      const saveButton = event.target.closest('[data-action="save-2026-game-record"]');
      if (!saveButton) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      if (typeof event.stopImmediatePropagation === "function") {
        event.stopImmediatePropagation();
      }

      const year = saveButton.dataset.year || "2026";
      saveButton.disabled = false;
      save2026GameRecord(year);
    },
    true
  );
}

document.addEventListener("DOMContentLoaded", () => {
  initMenuClicks();
  initYearClicks();
  initTotalClicks();
  initRankClicks();
  bindGlobalSaveDelegation();
  renderCurrentPage();
});
