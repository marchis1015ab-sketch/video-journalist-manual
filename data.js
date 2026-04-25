const SOURCE_DATA = JSON.parse(`{"players":["김대호","김민성","김성민","김안수","김예준","김은성","김지훈","김진광","김진우","박민혁","박인서","박재현","서복현","서봉원","오승렬","유규열","이근평","이도성","이민섭","이상엽","이승환","이완근","이재성","이종원","이학진","임인수","장민창","전영희","정원석","정해성","주문철","최대환","최민우","최효일","한재혁"],"historicalBatters":{"김대호":{"G":11,"PA":25,"AB":19,"H":4,"HR":0,"BB":4,"HBP":2,"TB":4,"RBI":5,"R":7,"SB":1,"SO":11,"GIDP":1},"김민성":{"G":36,"PA":106,"AB":83,"H":22,"HR":0,"BB":12,"HBP":9,"TB":34,"RBI":18,"R":30,"SB":9,"SO":41,"GIDP":0},"김성민":{"G":44,"PA":131,"AB":109,"H":21,"HR":0,"BB":17,"HBP":5,"TB":23,"RBI":15,"R":29,"SB":25,"SO":39,"GIDP":0},"김예준":{"G":13,"PA":45,"AB":38,"H":14,"HR":1,"BB":5,"HBP":0,"TB":22,"RBI":20,"R":12,"SB":5,"SO":4,"GIDP":0},"김안수":{"G":3,"PA":5,"AB":4,"H":0,"HR":0,"BB":1,"HBP":0,"TB":0,"RBI":0,"R":1,"SB":0,"SO":2,"GIDP":0},"김은성":{"G":7,"PA":13,"AB":7,"H":1,"HR":0,"BB":4,"HBP":2,"TB":1,"RBI":1,"R":0,"SB":0,"SO":3,"GIDP":0},"김지훈":{"G":67,"PA":192,"AB":157,"H":56,"HR":0,"BB":34,"HBP":0,"TB":74,"RBI":66,"R":53,"SB":28,"SO":26,"GIDP":3},"김진광":{"G":72,"PA":204,"AB":167,"H":69,"HR":1,"BB":31,"HBP":3,"TB":88,"RBI":53,"R":85,"SB":52,"SO":44,"GIDP":1},"김진우":{"G":70,"PA":227,"AB":188,"H":86,"HR":0,"BB":37,"HBP":1,"TB":96,"RBI":50,"R":93,"SB":72,"SO":19,"GIDP":1},"박민혁":{"G":28,"PA":84,"AB":70,"H":31,"HR":0,"BB":15,"HBP":0,"TB":39,"RBI":27,"R":26,"SB":15,"SO":10,"GIDP":2},"박인서":{"G":26,"PA":76,"AB":52,"H":16,"HR":0,"BB":17,"HBP":3,"TB":19,"RBI":21,"R":17,"SB":5,"SO":17,"GIDP":0},"박재현":{"G":57,"PA":182,"AB":127,"H":73,"HR":0,"BB":42,"HBP":7,"TB":101,"RBI":61,"R":89,"SB":45,"SO":6,"GIDP":0},"서복현":{"G":1,"PA":2,"AB":1,"H":1,"HR":0,"BB":1,"HBP":0,"TB":2,"RBI":1,"R":0,"SB":0,"SO":0,"GIDP":0},"서봉원":{"G":34,"PA":92,"AB":85,"H":32,"HR":0,"BB":3,"HBP":4,"TB":40,"RBI":25,"R":25,"SB":16,"SO":28,"GIDP":1},"오승렬":{"G":48,"PA":131,"AB":117,"H":48,"HR":0,"BB":11,"HBP":3,"TB":49,"RBI":25,"R":41,"SB":48,"SO":18,"GIDP":1},"유규열":{"G":52,"PA":136,"AB":110,"H":44,"HR":0,"BB":18,"HBP":4,"TB":52,"RBI":32,"R":41,"SB":26,"SO":25,"GIDP":1},"이근평":{"G":3,"PA":3,"AB":3,"H":0,"HR":0,"BB":0,"HBP":0,"TB":0,"RBI":0,"R":0,"SB":0,"SO":2,"GIDP":0},"이도성":{"G":3,"PA":11,"AB":10,"H":7,"HR":1,"BB":1,"HBP":0,"TB":13,"RBI":10,"R":7,"SB":5,"SO":0,"GIDP":0},"이민섭":{"G":4,"PA":11,"AB":8,"H":0,"HR":0,"BB":3,"HBP":0,"TB":0,"RBI":1,"R":2,"SB":0,"SO":6,"GIDP":1},"이상엽":{"G":4,"PA":8,"AB":6,"H":0,"HR":0,"BB":1,"HBP":1,"TB":0,"RBI":1,"R":1,"SB":0,"SO":5,"GIDP":0},"이승환":{"G":8,"PA":24,"AB":19,"H":3,"HR":0,"BB":3,"HBP":2,"TB":3,"RBI":3,"R":3,"SB":0,"SO":9,"GIDP":0},"이완근":{"G":15,"PA":39,"AB":35,"H":24,"HR":1,"BB":2,"HBP":0,"TB":32,"RBI":24,"R":17,"SB":13,"SO":3,"GIDP":0},"이재성":{"G":35,"PA":95,"AB":74,"H":23,"HR":0,"BB":20,"HBP":2,"TB":23,"RBI":20,"R":28,"SB":22,"SO":22,"GIDP":0},"이종원":{"G":34,"PA":118,"AB":103,"H":48,"HR":0,"BB":12,"HBP":3,"TB":60,"RBI":31,"R":51,"SB":30,"SO":13,"GIDP":1},"이학진":{"G":56,"PA":170,"AB":141,"H":59,"HR":0,"BB":23,"HBP":4,"TB":67,"RBI":46,"R":44,"SB":28,"SO":7,"GIDP":2},"임인수":{"G":8,"PA":15,"AB":11,"H":5,"HR":0,"BB":3,"HBP":1,"TB":7,"RBI":6,"R":4,"SB":0,"SO":3,"GIDP":0},"장민창":{"G":3,"PA":7,"AB":5,"H":0,"HR":0,"BB":2,"HBP":0,"TB":0,"RBI":1,"R":0,"SB":1,"SO":1,"GIDP":0},"전영희":{"G":11,"PA":31,"AB":24,"H":11,"HR":0,"BB":3,"HBP":4,"TB":15,"RBI":11,"R":13,"SB":8,"SO":4,"GIDP":0},"정원석":{"G":1,"PA":2,"AB":2,"H":0,"HR":0,"BB":0,"HBP":0,"TB":0,"RBI":0,"R":0,"SB":0,"SO":0,"GIDP":1},"정해성":{"G":2,"PA":5,"AB":5,"H":0,"HR":0,"BB":0,"HBP":0,"TB":0,"RBI":1,"R":0,"SB":0,"SO":4,"GIDP":0},"주문철":{"G":9,"PA":22,"AB":19,"H":4,"HR":0,"BB":1,"HBP":2,"TB":4,"RBI":7,"R":5,"SB":2,"SO":3,"GIDP":1},"최대환":{"G":32,"PA":92,"AB":68,"H":10,"HR":0,"BB":18,"HBP":10,"TB":10,"RBI":7,"R":17,"SB":14,"SO":30,"GIDP":0},"최민우":{"G":3,"PA":9,"AB":3,"H":1,"HR":0,"BB":3,"HBP":3,"TB":1,"RBI":0,"R":6,"SB":0,"SO":2,"GIDP":0},"한재혁":{"G":12,"PA":41,"AB":34,"H":15,"HR":0,"BB":5,"HBP":2,"TB":23,"RBI":9,"R":15,"SB":4,"SO":7,"GIDP":0}},"historicalPitchers":{"김예준":{"G":2,"IP":2.6666666666666665,"BF":27,"H":10,"HR":0,"BB":9,"HBP":0,"SO":1,"R":12,"ER":8},"김진광":{"G":2,"IP":2.6666666666666665,"BF":14,"H":0,"HR":0,"BB":3,"HBP":2,"SO":4,"R":4,"ER":2},"박재현":{"G":11,"IP":18.333333333333336,"BF":132,"H":38,"HR":2,"BB":35,"HBP":3,"SO":26,"R":55,"ER":37},"오승렬":{"G":33,"IP":86.66666666666667,"BF":753,"H":274,"HR":10,"BB":161,"HBP":24,"SO":55,"R":337,"ER":248},"이완근":{"G":3,"IP":6,"BF":45,"H":6,"HR":0,"BB":16,"HBP":3,"SO":8,"R":16,"ER":8},"이학진":{"G":55,"IP":221.66666666666669,"BF":1481,"H":574,"HR":8,"BB":96,"HBP":59,"SO":231,"R":521,"ER":332},"임인수":{"G":4,"IP":2.666666666666667,"BF":42,"H":13,"HR":2,"BB":16,"HBP":2,"SO":7,"R":31,"ER":21},"최효일":{"G":1,"IP":1,"BF":19,"H":6,"HR":0,"BB":8,"HBP":1,"SO":0,"R":13,"ER":8}}}`);

const PLAYERS = SOURCE_DATA.players;
const BATTER_KEYS = ["G", "PA", "AB", "H", "HR", "BB", "HBP", "TB", "RBI", "R", "SB", "SO", "GIDP"];
const PITCHER_KEYS = ["G", "IP", "BF", "H", "HR", "BB", "HBP", "SO", "R", "ER"];
const STORAGE_KEYS = {
  batters: "season2026Batters",
  pitchers: "season2026Pitchers",
};

function createEmptyStatLine(keys) {
  const entry = {};
  keys.forEach((key) => {
    entry[key] = 0;
  });
  return entry;
}

function createEmptyBatterStats() {
  return createEmptyStatLine(BATTER_KEYS);
}

function createEmptyPitcherStats() {
  return createEmptyStatLine(PITCHER_KEYS);
}

function cloneStatLine(source, keys) {
  const entry = {};
  keys.forEach((key) => {
    const value = Number(source?.[key] ?? 0);
    entry[key] = Number.isFinite(value) ? value : 0;
  });
  return entry;
}

function buildCollection(factory) {
  const collection = {};
  PLAYERS.forEach((player) => {
    collection[player] = factory();
  });
  return collection;
}

function loadStoredSeason(storageKey, keys, factory) {
  const base = buildCollection(factory);

  if (typeof localStorage === "undefined") {
    return base;
  }

  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return base;
    }

    const parsed = JSON.parse(raw);
    PLAYERS.forEach((player) => {
      keys.forEach((key) => {
        const value = Number(parsed?.[player]?.[key] ?? 0);
        base[player][key] = Number.isFinite(value) ? value : 0;
      });
    });
  } catch (error) {
    console.warn(`[records] failed to load ${storageKey}`, error);
  }

  return base;
}

function saveSeasonData() {
  if (typeof localStorage === "undefined") {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEYS.batters, JSON.stringify(season2026Batters));
    localStorage.setItem(STORAGE_KEYS.pitchers, JSON.stringify(season2026Pitchers));
  } catch (error) {
    console.warn("[records] failed to save season data", error);
  }
}

const historicalBatters = buildCollection(createEmptyBatterStats);
PLAYERS.forEach((player) => {
  historicalBatters[player] = cloneStatLine(SOURCE_DATA.historicalBatters[player], BATTER_KEYS);
});

const historicalPitchers = buildCollection(createEmptyPitcherStats);
PLAYERS.forEach((player) => {
  historicalPitchers[player] = cloneStatLine(SOURCE_DATA.historicalPitchers[player], PITCHER_KEYS);
});

let season2026Batters = loadStoredSeason(STORAGE_KEYS.batters, BATTER_KEYS, createEmptyBatterStats);
let season2026Pitchers = loadStoredSeason(STORAGE_KEYS.pitchers, PITCHER_KEYS, createEmptyPitcherStats);
