function roundTo(value, digits = 3) {
  const factor = 10 ** digits;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
}

function normalizeInnings(value) {
  if (!Number.isFinite(value) || value <= 0) {
    return 0;
  }

  const outs = Math.round(value * 3);
  return outs / 3;
}

function parseInningsInput(raw) {
  const text = String(raw ?? "").trim();
  if (!text) {
    return 0;
  }

  if (!text.includes(".")) {
    const whole = Number(text);
    return Number.isFinite(whole) && whole >= 0 ? normalizeInnings(whole) : 0;
  }

  const [wholeText, remainderText = "0"] = text.split(".");
  const whole = Number(wholeText);
  if (!Number.isFinite(whole) || whole < 0) {
    return 0;
  }

  if (remainderText === "0" || remainderText === "") {
    return whole;
  }

  if (remainderText === "1") {
    return whole + 1 / 3;
  }

  if (remainderText === "2") {
    return whole + 2 / 3;
  }

  const numeric = Number(text);
  return Number.isFinite(numeric) && numeric >= 0 ? normalizeInnings(numeric) : 0;
}

function formatInnings(value) {
  const outs = Math.max(0, Math.round(Number(value || 0) * 3));
  const whole = Math.floor(outs / 3);
  const remainder = outs % 3;
  return remainder === 0 ? String(whole) : `${whole}.${remainder}`;
}

function calcBatting(stats) {
  const atBats = Number(stats.AB ?? 0);
  const hits = Number(stats.H ?? 0);
  const walks = Number(stats.BB ?? 0);
  const hitByPitch = Number(stats.HBP ?? 0);
  const totalBases = Number(stats.TB ?? 0);
  const onBaseDenominator = atBats + walks + hitByPitch;
  const average = atBats ? hits / atBats : 0;
  const onBase = onBaseDenominator ? (hits + walks + hitByPitch) / onBaseDenominator : 0;
  const slugging = atBats ? totalBases / atBats : 0;
  const ops = onBase + slugging;

  return {
    AVG: roundTo(average, 3),
    OBP: roundTo(onBase, 3),
    SLG: roundTo(slugging, 3),
    OPS: roundTo(ops, 3),
  };
}

function calcPitching(stats) {
  const innings = normalizeInnings(Number(stats.IP ?? 0));
  const earnedRuns = Number(stats.ER ?? 0);
  const hits = Number(stats.H ?? 0);
  const walks = Number(stats.BB ?? 0);
  const era = innings ? (earnedRuns * 9) / innings : 0;
  const whip = innings ? (hits + walks) / innings : 0;

  return {
    ERA: roundTo(era, 2),
    WHIP: roundTo(whip, 2),
  };
}

function combineStatLines(base, current, keys) {
  const combined = {};
  keys.forEach((key) => {
    combined[key] = Number(base?.[key] ?? 0) + Number(current?.[key] ?? 0);
  });
  return combined;
}

function sumCollection(collection, keys, players = PLAYERS) {
  const total = {};
  keys.forEach((key) => {
    total[key] = 0;
  });

  players.forEach((player) => {
    keys.forEach((key) => {
      total[key] += Number(collection?.[player]?.[key] ?? 0);
    });
  });

  return total;
}
