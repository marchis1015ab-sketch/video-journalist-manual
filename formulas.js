function roundTo(value, digits = 3) {
  const factor = 10 ** digits;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
}

function safeNumber(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
}

function normalizeInnings(value) {
  const numeric = safeNumber(value);
  if (numeric <= 0) {
    return 0;
  }

  const outs = Math.round(numeric * 3);
  return outs / 3;
}

function parseInningsInput(raw) {
  const text = String(raw ?? "").trim();
  if (!text) {
    return 0;
  }

  if (!text.includes(".")) {
    return normalizeInnings(safeNumber(text));
  }

  const [wholeText, remainderText = "0"] = text.split(".");
  const whole = safeNumber(wholeText);
  if (whole < 0) {
    return 0;
  }

  if (remainderText === "" || remainderText === "0") {
    return whole;
  }

  if (remainderText === "1") {
    return whole + 1 / 3;
  }

  if (remainderText === "2") {
    return whole + 2 / 3;
  }

  return normalizeInnings(safeNumber(text));
}

function formatInnings(value) {
  const outs = Math.max(0, Math.round(safeNumber(value) * 3));
  const whole = Math.floor(outs / 3);
  const remainder = outs % 3;
  return remainder === 0 ? String(whole) : `${whole}.${remainder}`;
}

function getSingles(stats) {
  if (safeNumber(stats.H1) > 0) {
    return safeNumber(stats.H1);
  }
  return Math.max(0, safeNumber(stats.H) - safeNumber(stats.D2) - safeNumber(stats.D3) - safeNumber(stats.HR));
}

function getTotalBases(stats) {
  if (safeNumber(stats.TB) > 0) {
    return safeNumber(stats.TB);
  }
  return (
    getSingles(stats) +
    safeNumber(stats.D2) * 2 +
    safeNumber(stats.D3) * 3 +
    safeNumber(stats.HR) * 4
  );
}

function calcBatting(stats) {
  const atBats = safeNumber(stats.AB);
  const hits = safeNumber(stats.H);
  const doubles = safeNumber(stats.D2);
  const triples = safeNumber(stats.D3);
  const homeRuns = safeNumber(stats.HR);
  const singles = getSingles(stats);
  const walks = safeNumber(stats.BB);
  const hitByPitch = safeNumber(stats.HBP);
  const sacHits = safeNumber(stats.SH);
  const sacFlies = safeNumber(stats.SF);
  const stolenBases = safeNumber(stats.SB);
  const caughtStealing = safeNumber(stats.CS);
  const strikeouts = safeNumber(stats.SO);
  const gidp = safeNumber(stats.GIDP);
  const totalBases = getTotalBases(stats);

  const avg = atBats ? hits / atBats : 0;
  const obpDenominator = atBats + walks + hitByPitch + sacFlies;
  const obp = obpDenominator ? (hits + walks + hitByPitch) / obpDenominator : 0;
  const slg = atBats ? totalBases / atBats : 0;
  const ops = obp + slg;

  const rcDenominator = atBats + walks;
  const rc = rcDenominator ? ((hits + walks) * totalBases) / rcDenominator : 0;
  const outs = Math.max(0, atBats - hits + sacHits + sacFlies);
  const rc18 = outs ? (rc * 18) / outs : 0;

  const xr =
    (0.5 * singles) +
    (0.72 * doubles) +
    (1.04 * triples) +
    (1.44 * homeRuns) +
    (0.34 * (walks + hitByPitch)) +
    (0.25 * stolenBases) -
    (0.6 * caughtStealing) -
    (0.09 * Math.max(0, atBats - hits - strikeouts)) -
    (0.098 * strikeouts) -
    (0.37 * gidp) +
    (0.37 * sacHits) +
    (0.04 * sacFlies);

  return {
    AVG: roundTo(avg, 3),
    OBP: roundTo(obp, 3),
    SLG: roundTo(slg, 3),
    OPS: roundTo(ops, 3),
    RC: roundTo(rc, 3),
    RC18: roundTo(rc18, 3),
    XR: roundTo(xr, 3),
    BBHBP: safeNumber(stats.BBHBP) || walks + hitByPitch,
    TB: totalBases,
    H1: singles,
  };
}

function calcPitching(stats) {
  const innings = normalizeInnings(stats.IP);
  const earnedRuns = safeNumber(stats.ER);
  const hits = safeNumber(stats.H);
  const walks = safeNumber(stats.BB);
  const era = innings ? (earnedRuns * 9) / innings : 0;
  const whip = innings ? (hits + walks) / innings : 0;

  return {
    ERA: roundTo(era, 2),
    WHIP: roundTo(whip, 2),
    IP: innings,
  };
}

function cloneStatLine(source, keys) {
  const result = {};
  keys.forEach((key) => {
    result[key] = safeNumber(source?.[key]);
  });
  return result;
}

function combineStatLines(base, current, keys) {
  const combined = {};
  keys.forEach((key) => {
    combined[key] = safeNumber(base?.[key]) + safeNumber(current?.[key]);
  });
  return combined;
}

function sumRows(rows, keys) {
  const total = {};
  keys.forEach((key) => {
    total[key] = 0;
  });

  rows.forEach((row) => {
    keys.forEach((key) => {
      total[key] += safeNumber(row?.[key]);
    });
  });

  return total;
}
