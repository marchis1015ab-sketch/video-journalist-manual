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
  { key: "avg", label: "AVG" },
  { key: "obp", label: "출루율" },
  { key: "slg", label: "장타율" },
  { key: "ops", label: "OPS" },
  { key: "rc", label: "RC" },
  { key: "rc18", label: "RC/18" },
  { key: "xr", label: "XR" },
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

  return sortNamesKo(names);
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
  const players = getAllPlayersFromYearlyData("hitter");

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

function buildRankingEntries(rows, config) {
  const sortedRows = [...rows].sort((left, right) => {
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

  return sortedRows.map((row, index) => ({
    rank: index + 1,
    name: row.name,
    value: row[config.displayKey || config.key],
    status: row.status || "active",
  }));
}

function createRankingTableMarkup(entries, changes) {
  const rowsHtml = entries
    .map((entry) => {
      const classNames = [];
      if (entry.status === "retired" || entry.status === "injured") {
        classNames.push(entry.status);
      }

      const change = changes[entry.name] || { symbol: "—", text: "변동없음", className: "same" };
      const classAttr = classNames.length ? ` class="${classNames.join(" ")}"` : "";

      return `
        <tr${classAttr}>
          <td>${entry.rank}</td>
          <td>${entry.name}</td>
          <td>${entry.value == null ? "" : entry.value}</td>
          <td><span class="rank-change ${change.className}">${change.text} ${change.symbol}</span></td>
        </tr>
      `;
    })
    .join("");

  return `
    <table class="stats-table ranking-table">
      <thead>
        <tr>
          <th>순위</th>
          <th>선수</th>
          <th>수치</th>
          <th>변동</th>
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
    isPitcher ? careerPitchers2022To2025 : careerHitters2022To2025
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
  renderCareerPage(state.totalType);
}

function renderRank(type) {
  const isPitcher = type === "pitcher";
  const label = isPitcher ? "투수" : "타자";
  const rows = isPitcher ? careerPitchers2022To2025 : careerHitters2022To2025;
  const configs = isPitcher ? pitcherRankConfigs : hitterRankConfigs;
  const snapshots = {};

  const blocksHtml = configs
    .map((config) => {
      const previousSnapshot = loadRankingSnapshot(type, config.key) || {};
      const entries = buildRankingEntries(rows, config);
      const currentSnapshot = {};
      const changes = {};

      entries.forEach((entry) => {
        currentSnapshot[entry.name] = entry.rank;
        changes[entry.name] = compareRankChange(entry.rank, previousSnapshot[entry.name]);
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
