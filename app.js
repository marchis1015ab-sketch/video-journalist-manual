const state = {
  menu: "team",
  teamYear: "2022",
  playerYear: "2022",
  playerType: "hitter",
  totalType: "hitter",
  rankType: "hitter",
};

const CAREER_YEARS = ["2022", "2023", "2024", "2025"];

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

function safeNumberLocal(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
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
  const players = getAllPlayersFromYearlyData("hitter").filter(
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
  const players = getAllPlayersFromYearlyData("pitcher");

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

const careerHitters2022To2025 = buildCareerHitterData();
const careerPitchers2022To2025 = buildCareerPitcherData();

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
  return CAREER_YEARS.reduce((total, year) => {
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
}

function formatBaseballRate(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return ".000";
  }

  const fixed = numeric.toFixed(3);
  return fixed.startsWith("0.") ? fixed.slice(1) : fixed;
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
        <p>통산순위는 2022년~2025년 통산기록표를 기준으로 계산하며, 2026 시즌 기록은 포함하지 않습니다.</p>
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
  const headerHtml = columns.map((column) => `<th>${column.label}</th>`).join("");
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
          return `<td>${value}</td>`;
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
        <p>2022년~2025년 기준으로 2026 시즌을 제외해 다시 계산한 통산표입니다.</p>
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

function renderTeamYear(year) {
  renderPlaceholder(`팀기록 ${year}`, `${year}년 팀기록 영역입니다.`);
}

function renderPlayerYear(year) {
  renderPlayerStats(year, state.playerType);
}

function renderTotal() {
  renderCareerPage(state.totalType);
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
        <p>2022년~2025년 통산기록표를 기준으로 계산한 항목별 순위입니다.</p>
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
