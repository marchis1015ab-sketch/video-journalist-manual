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
  batterLogs: "watchdogs_player_game_logs_v1",
  pitcherLogs: "watchdogs_pitcher_game_logs_v1",
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
const teamImportDrafts = {};
const teamPageNotices = {};
const expandedTeamRecordIds = new Set();

let gameRecords = loadStoredJsonArray(GAME_STORAGE_KEYS.records);
let playerGameLogs = loadStoredJsonArray(GAME_STORAGE_KEYS.batterLogs);
let pitcherGameLogs = loadStoredJsonArray(GAME_STORAGE_KEYS.pitcherLogs);

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

function persistGameStorage() {
  saveStoredJsonArray(GAME_STORAGE_KEYS.records, gameRecords);
  saveStoredJsonArray(GAME_STORAGE_KEYS.batterLogs, playerGameLogs);
  saveStoredJsonArray(GAME_STORAGE_KEYS.pitcherLogs, pitcherGameLogs);
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

function splitPlainTextRow(line) {
  if (line.includes("\t")) {
    return line.split("\t").map((cell) => cell.trim()).filter((cell) => cell !== "");
  }

  if (line.includes("|")) {
    return line
      .split("|")
      .map((cell) => cell.trim())
      .filter((cell) => cell !== "");
  }

  return line
    .split(/\s{2,}/)
    .map((cell) => cell.trim())
    .filter((cell) => cell !== "");
}

function matrixFromTableElement(table) {
  return Array.from(table.querySelectorAll("tr"))
    .map((row) =>
      Array.from(row.querySelectorAll("th,td"))
        .map((cell) => cell.textContent.replace(/\s+/g, " ").trim())
        .filter((cell) => cell !== "")
    )
    .filter((row) => row.length);
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

function parseInningCell(value) {
  const text = String(value || "").trim();
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

function parseBattingRowsFromMatrix(matrix) {
  const headerIndex = findBestHeaderIndex(matrix, ["선수", "선수명", "이름", "타석", "타수", "안타"]);
  if (headerIndex === -1) {
    return [];
  }

  const header = matrix[headerIndex].map((cell) => normalizeHeaderKey(cell));
  const dataRows = matrix.slice(headerIndex + 1);
  const rows = [];

  dataRows.forEach((cells) => {
    const row = buildRowObject(header, cells);
    const name = normalizePlayerName(getCellValue(row, ["선수명", "선수", "이름"]));
    if (isSummaryName(name)) {
      return;
    }

    const parsed = {
      player: name,
      pa: parseIntegerCell(getCellValue(row, ["타석", "pa"])),
      ab: parseIntegerCell(getCellValue(row, ["타수", "ab"])),
      h: parseIntegerCell(getCellValue(row, ["총안타", "안타", "h"])),
      d2: parseIntegerCell(getCellValue(row, ["2루타", "2b"])),
      d3: parseIntegerCell(getCellValue(row, ["3루타", "3b"])),
      hr: parseIntegerCell(getCellValue(row, ["홈런", "hr"])),
      rbi: parseIntegerCell(getCellValue(row, ["타점", "rbi"])),
      r: parseIntegerCell(getCellValue(row, ["득점", "r"])),
      sb: parseIntegerCell(getCellValue(row, ["도루", "sb"])),
      bb: parseIntegerCell(getCellValue(row, ["볼넷", "bb"])),
      hbp: parseIntegerCell(getCellValue(row, ["사구", "hbp"])),
      so: parseIntegerCell(getCellValue(row, ["삼진", "so"])),
      sf: parseIntegerCell(getCellValue(row, ["희생플라이", "희플", "sf"])),
      sh: parseIntegerCell(getCellValue(row, ["희생번트", "희생타", "희타", "sh"])),
      tb: parseIntegerCell(getCellValue(row, ["루타", "tb"])),
    };

    const display = deriveBattingDisplayStats(parsed);
    rows.push({
      ...parsed,
      tb: parsed.tb || display.tb,
      avg: display.avg,
      obp: display.obp,
      slg: display.slg,
      ops: display.ops,
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

  dataRows.forEach((cells) => {
    const row = buildRowObject(header, cells);
    const name = normalizePlayerName(getCellValue(row, ["선수명", "선수", "이름"]));
    if (isSummaryName(name)) {
      return;
    }

    const resultText = String(getCellValue(row, ["결과", "wls", "비고"])).trim();
    const parsed = {
      player: name,
      ip: parseInningCell(getCellValue(row, ["이닝", "ip"])),
      bf: parseIntegerCell(getCellValue(row, ["타자", "상대타자", "bf"])),
      ab: parseIntegerCell(getCellValue(row, ["타수", "ab"])),
      h: parseIntegerCell(getCellValue(row, ["피안타", "안타", "h"])),
      hr: parseIntegerCell(getCellValue(row, ["피홈런", "hr"])),
      bb: parseIntegerCell(getCellValue(row, ["볼넷", "bb"])),
      hbp: parseIntegerCell(getCellValue(row, ["사구", "hbp"])),
      so: parseIntegerCell(getCellValue(row, ["탈삼진", "삼진", "so"])),
      r: parseIntegerCell(getCellValue(row, ["실점", "r"])),
      er: parseIntegerCell(getCellValue(row, ["자책", "자책점", "er"])),
      w: parseIntegerCell(getCellValue(row, ["승", "w"])) || (resultText.includes("승") ? 1 : 0),
      l: parseIntegerCell(getCellValue(row, ["패", "l"])) || (resultText.includes("패") ? 1 : 0),
      sv: parseIntegerCell(getCellValue(row, ["세이브", "세", "sv"])) || (resultText.includes("세") ? 1 : 0),
      hld: parseIntegerCell(getCellValue(row, ["홀드", "hld"])) || (resultText.includes("홀") ? 1 : 0),
    };

    rows.push({
      ...parsed,
      era: derivePitchingDisplayStats(parsed).era,
    });
  });

  return rows;
}

function extractMetaFromRawText(rawText) {
  const text = String(rawText || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const dateMatch = text.match(/(20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2})/);
  const scoreMatch = text.match(/(\d+)\s*[:\-]\s*(\d+)/);
  const opponentMatch = text.match(/(?:vs\.?|상대|상대팀)\s*[:：]?\s*([가-힣A-Za-z0-9\s]+)/i);

  return {
    date: dateMatch ? formatRecordDate(dateMatch[1]) : "",
    opponent: opponentMatch ? opponentMatch[1].trim() : "",
    scoreFor: scoreMatch ? parseIntegerCell(scoreMatch[1]) : 0,
    scoreAgainst: scoreMatch ? parseIntegerCell(scoreMatch[2]) : 0,
  };
}

function parseGameOneHtmlOrText(rawText) {
  const htmlBlocks = /<table/i.test(String(rawText || "")) ? extractTableBlocksFromHtml(rawText) : [];
  const textBlocks = extractTableBlocksFromText(rawText);
  const blocks = [...htmlBlocks, ...textBlocks];
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

function normalizeMatchingMap(record, matchingMap = {}) {
  const nextMap = { ...matchingMap };
  const unmatchedNames = new Set();

  [...record.playerBattingRows, ...record.pitcherRows].forEach((row) => {
    const original = normalizePlayerName(row.originalPlayer || row.player);
    if (!original) {
      return;
    }
    const mapped = normalizePlayerName(nextMap[original] || original);
    if (!PLAYERS.includes(mapped)) {
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
      originalPlayer,
      player: mappedPlayer,
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
    };
  });

  const mappedPitchers = rawPitchers.map((row) => {
    const originalPlayer = normalizePlayerName(row.originalPlayer || row.player);
    const mappedPlayer = normalizePlayerName(options.matchingMap?.[originalPlayer] || row.player);
    return {
      originalPlayer,
      player: mappedPlayer,
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
      era: row.era || derivePitchingDisplayStats({ ...row, ip: parseInningCell(row.ip) }).era,
    };
  });

  const record = {
    id: "",
    year,
    date: formatRecordDate(options.date || parsed?.meta?.date || parsed?.date || ""),
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

  const matching = normalizeMatchingMap(record, record.matchingMap);
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
  const requiredPA = Math.ceil(teamGames * 2.7);
  const requiredIP = teamGames * 1.0;
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
        <p>${isEditableYear(year) ? "아직 저장된 경기 기록이 없습니다. 직접 입력으로 첫 경기를 저장해 주세요." : "표시할 고정 팀기록이 없습니다."}</p>
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

function buildMatchingOptions(selected) {
  return [
    `<option value="">선수 선택</option>`,
    ...PLAYERS.map((player) => `<option value="${escapeHtml(player)}"${player === selected ? " selected" : ""}>${player}</option>`),
  ].join("");
}

function isEditableYear(year) {
  return String(year) === "2026";
}

function parseManualRows(rawText, type) {
  const htmlBlocks = /<table/i.test(String(rawText || "")) ? extractTableBlocksFromHtml(rawText) : [];
  const textBlocks = extractTableBlocksFromText(rawText);
  const blocks = [...htmlBlocks, ...textBlocks];

  for (const block of blocks) {
    const rows = type === "pitcher" ? parsePitcherRowsFromMatrix(block) : parseBattingRowsFromMatrix(block);
    if (rows.length) {
      return rows;
    }
  }

  return [];
}

function getTeamDraftFormData(year) {
  const draft = teamImportDrafts[year];
  return (
    draft?.formData || {
      date: "",
      opponent: "",
      scoreFor: "",
      scoreAgainst: "",
      risp: "",
      errors: "",
      notes: "",
      batterRaw: "",
      pitcherRaw: "",
    }
  );
}

function buildTeamDraftFromInputs(year) {
  const previousDraft = teamImportDrafts[year];
  const formData = {
    date: document.getElementById(`team-record-date-${year}`)?.value || "",
    opponent: document.getElementById(`team-record-opponent-${year}`)?.value || "",
    scoreFor: document.getElementById(`team-record-score-for-${year}`)?.value || "",
    scoreAgainst: document.getElementById(`team-record-score-against-${year}`)?.value || "",
    risp: document.getElementById(`team-record-risp-${year}`)?.value || "",
    errors: document.getElementById(`team-record-errors-${year}`)?.value || "",
    notes: document.getElementById(`team-record-notes-${year}`)?.value || "",
    batterRaw: document.getElementById(`team-record-batter-raw-${year}`)?.value || "",
    pitcherRaw: document.getElementById(`team-record-pitcher-raw-${year}`)?.value || "",
  };

  const matchingMap = { ...(previousDraft?.record?.matchingMap || {}) };
  document.querySelectorAll("[data-player-match]").forEach((select) => {
    if (select.value) {
      matchingMap[select.dataset.playerMatch] = select.value;
    }
  });

  const battingRows = parseManualRows(formData.batterRaw, "batter");
  const pitcherRows = parseManualRows(formData.pitcherRaw, "pitcher");
  const warnings = [];

  if (!battingRows.length) {
    warnings.push("선수 타격기록 입력값을 확인해 주세요.");
  }
  if (!pitcherRows.length) {
    warnings.push("투수기록 입력값을 확인해 주세요.");
  }

  const rawSource = [formData.batterRaw, formData.pitcherRaw].filter(Boolean).join("\n\n");
  const record = normalizeGameRecord(
    {
      battingRows,
      pitcherRows,
      sourceText: rawSource,
      teamBattingSummary: {
        risp: formData.risp,
        errors: formData.errors,
        notes: formData.notes,
      },
    },
    {
      year,
      date: formData.date,
      opponent: formData.opponent,
      scoreFor: formData.scoreFor,
      scoreAgainst: formData.scoreAgainst,
      sourceText: rawSource,
      matchingMap,
      teamBattingSummary: {
        risp: formData.risp,
        errors: formData.errors,
        notes: formData.notes,
      },
      createdAt: previousDraft?.record?.createdAt,
    }
  );

  return {
    formData,
    warnings,
    record,
  };
}

function renderTeamMatchingSection(year) {
  const draft = teamImportDrafts[year];
  const unmatchedPlayers = draft?.record?.unmatchedPlayers || [];
  if (!unmatchedPlayers.length) {
    return "";
  }

  return `
    <section class="team-match-panel">
      <h3>선수명 매칭 필요</h3>
      <div class="team-match-grid">
        ${unmatchedPlayers
          .map((name) => `
            <label class="team-match-item">
              <span>${escapeHtml(name)}</span>
              <select data-player-match="${escapeHtml(name)}">
                ${buildMatchingOptions(draft.record.matchingMap?.[name] || "")}
              </select>
            </label>
          `)
          .join("")}
      </div>
    </section>
  `;
}

function renderTeamEntrySection(year) {
  if (!isEditableYear(year)) {
    return `
      <section class="team-readonly-panel">
        <h3>고정 데이터</h3>
        <p>2022~2025 시즌은 기록 보존용 데이터로 수정할 수 없습니다.</p>
      </section>
    `;
  }

  const draft = teamImportDrafts[year];
  const formData = getTeamDraftFormData(year);
  const duplicate = draft?.record ? getExistingGameRecord(draft.record) : null;
  const hasUnmatched = Boolean(draft?.record?.unmatchedPlayers?.length);

  return `
    <section class="team-entry-panel">
      <div class="team-entry-header">
        <h3>2026 경기 직접 입력</h3>
        <p>게임원 URL 없이 날짜, 상대팀, 스코어와 선수별 기록을 직접 입력해 저장합니다.</p>
      </div>
      <div class="team-form-grid">
        <label><span>경기 날짜</span><input id="team-record-date-${year}" type="date" value="${escapeHtml(formData.date)}"></label>
        <label><span>상대팀</span><input id="team-record-opponent-${year}" type="text" value="${escapeHtml(formData.opponent)}" placeholder="상대팀"></label>
        <label><span>득점</span><input id="team-record-score-for-${year}" type="number" min="0" value="${escapeHtml(formData.scoreFor)}"></label>
        <label><span>실점</span><input id="team-record-score-against-${year}" type="number" min="0" value="${escapeHtml(formData.scoreAgainst)}"></label>
        <label><span>득점권</span><input id="team-record-risp-${year}" type="text" value="${escapeHtml(formData.risp)}" placeholder="예: 7타수 3안타"></label>
        <label><span>실책</span><input id="team-record-errors-${year}" type="number" min="0" value="${escapeHtml(formData.errors)}"></label>
        <label class="team-form-wide"><span>비고</span><input id="team-record-notes-${year}" type="text" value="${escapeHtml(formData.notes)}" placeholder="비고"></label>
        <label class="team-form-wide">
          <span>선수 타격기록 입력</span>
          <textarea id="team-record-batter-raw-${year}" rows="8" placeholder="선수	타석	타수	안타	2루타	3루타	홈런	타점	득점	도루	볼넷	사구	삼진	희생플라이	희생번트">${escapeHtml(formData.batterRaw)}</textarea>
        </label>
        <label class="team-form-wide">
          <span>투수기록 입력</span>
          <textarea id="team-record-pitcher-raw-${year}" rows="8" placeholder="선수	이닝	타자	타수	피안타	피홈런	볼넷	사구	탈삼진	실점	자책	결과">${escapeHtml(formData.pitcherRaw)}</textarea>
        </label>
      </div>
      ${draft?.warnings?.length ? `<div class="team-form-warnings">${draft.warnings.map((warning) => `<p>${escapeHtml(warning)}</p>`).join("")}</div>` : ""}
      ${renderTeamMatchingSection(year)}
      <div class="team-entry-actions">
        <button id="team-save-button-${year}" type="button"${hasUnmatched ? " disabled" : ""}>${duplicate ? "덮어쓰기 저장" : "경기 저장"}</button>
      </div>
    </section>
  `;
}

function bindTeamYearActions(year) {
  if (isEditableYear(year)) {
    document.getElementById(`team-save-button-${year}`)?.addEventListener("click", () => {
      const draft = buildTeamDraftFromInputs(year);
      teamImportDrafts[year] = draft;

      if (!draft.formData.date || !draft.formData.opponent.trim()) {
        teamPageNotices[year] = "경기 날짜와 상대팀은 반드시 입력해 주세요.";
        renderTeamYear(year);
        return;
      }

      if (!draft.record.playerBattingRows.length && !draft.record.pitcherRows.length) {
        teamPageNotices[year] = "저장할 선수 기록이 없습니다. 타격기록 또는 투수기록을 입력해 주세요.";
        renderTeamYear(year);
        return;
      }

      if (draft.record.unmatchedPlayers.length) {
        teamPageNotices[year] = "저장 전에 모든 선수명을 기존 선수와 매칭해 주세요.";
        renderTeamYear(year);
        return;
      }

      const result = saveGameRecord(draft.record, { overwrite: Boolean(getExistingGameRecord(draft.record)) });
      if (!result.saved) {
        teamPageNotices[year] = result.readOnly
          ? "과거 시즌은 수정할 수 없습니다."
          : "이미 저장된 경기입니다. 확인 후 다시 저장해 주세요.";
        renderTeamYear(year);
        return;
      }

      recalculateCareerStatsFromGameLogs();
      teamPageNotices[year] = result.duplicated ? "기존 경기 기록을 덮어썼습니다." : "경기 기록을 저장했습니다.";
      delete teamImportDrafts[year];
      renderTeamYear(year);
    });

    document.querySelectorAll("[data-player-match]").forEach((select) => {
      select.addEventListener("change", () => {
        const draft = buildTeamDraftFromInputs(year);
        teamImportDrafts[year] = draft;
        renderTeamYear(year);
      });
    });
  }

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
  const notice =
    teamPageNotices[year] ||
    (!editable ? "2022~2025 시즌은 기록 보존용 데이터로 수정할 수 없습니다." : "");

  container.innerHTML = `
    <section class="page team-page">
      <div class="page-header">
        <h2>팀기록 ${year}</h2>
        <p>${editable ? "2026 시즌은 직접 입력 방식으로 경기 기록을 저장하고 통산에 반영합니다." : "과거 시즌은 고정 데이터만 조회할 수 있습니다."}</p>
      </div>
      ${notice ? `<div class="team-notice">${escapeHtml(notice)}</div>` : ""}
      ${renderTeamEntrySection(year)}
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

document.addEventListener("DOMContentLoaded", () => {
  initMenuClicks();
  initYearClicks();
  initTotalClicks();
  initRankClicks();
  renderCurrentPage();
});
