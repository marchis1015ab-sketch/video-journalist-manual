const WORKBOOK_FILE = "player-records.xlsx";

const PAGE_ORDER = [
  "team-2026",
  "batting-2026",
  "pitching-2026",
  "career-batting",
  "career-pitching",
  "ranking-batting",
  "ranking-pitching",
  "batting-2022",
  "batting-2023",
  "batting-2024",
  "batting-2025",
  "pitching-2022",
  "pitching-2023",
  "pitching-2024",
  "pitching-2025",
];

const PAGE_CONFIG = {
  "team-2026": {
    pageTitle: "2026 팀 기록",
    sheetName: "타자",
    candidateSheets: ["타자", "투수"],
    detectKeywords: ["26 시즌", "26시즌", "팀", "전적", "승패", "득점", "실점", "경기", "결과"],
    requiredHeaders: ["경기", "승", "패"],
    fallbackRange: "",
    stickyRows: 2,
  },
  "batting-2026": {
    pageTitle: "2026년 타자 기록",
    sheetName: "타자",
    detectKeywords: ["26시즌", "전반기"],
    requiredHeaders: ["이름", "타석", "타수", "총안타", "타점", "득점", "도루", "삼진", "AVG", "출루율OBP", "장타율SLG", "OPS"],
    fallbackRange: "DK1:EL30",
    stickyRows: 2,
  },
  "pitching-2026": {
    pageTitle: "2026년 투수 기록",
    sheetName: "투수",
    detectKeywords: ["26 시즌", "26시즌"],
    requiredHeaders: ["이름", "출장", "선발", "구원", "승", "패", "세", "홀드", "이닝", "삼진", "ERA", "WHIP"],
    fallbackRange: "A42:AD53",
    stickyRows: 2,
  },
  "career-batting": {
    pageTitle: "타자 통산기록",
    sheetName: "타자",
    detectKeywords: ["2022~2025"],
    requiredHeaders: ["등번호", "이름", "게임수", "타석", "타수", "총안타", "AVG", "OPS", "RC", "RC/18", "XR"],
    fallbackRange: "BK79:CO116",
    stickyRows: 3,
  },
  "career-pitching": {
    pageTitle: "투수 통산기록",
    sheetName: "투수",
    detectKeywords: ["2022~2024"],
    requiredHeaders: ["출장", "선발", "구원", "승", "패", "세", "홀드", "이닝", "삼진", "ERA", "RA7", "WHIP"],
    fallbackRange: "A14:AE26",
    stickyRows: 3,
  },
  "ranking-batting": {
    pageTitle: "타자 통산 순위",
    sheetName: "타자",
    detectKeywords: ["순위", "RC", "RC/18", "XR", "규정타석"],
    requiredHeaders: ["순위", "게임수", "타석", "타수", "총안타", "AVG", "OPS", "RC", "RC/18", "XR"],
    fallbackRange: "AJ43:CO77",
    stickyRows: 1,
  },
  "ranking-pitching": {
    pageTitle: "투수 통산 순위",
    sheetName: "투수",
    detectKeywords: ["출장 100", "삼진 250", "ERA", "WHIP"],
    requiredHeaders: ["출장", "승", "패", "세", "이닝", "삼진", "ERA", "RA7", "BB/7", "K/7", "WHIP"],
    fallbackRange: "A30:BG40",
    stickyRows: 1,
  },
  "batting-2022": {
    pageTitle: "2022년 타자 기록",
    sheetName: "타자",
    detectKeywords: ["2022년", "전+후반기"],
    requiredHeaders: ["이름", "등번호", "포지션", "타석", "타수", "총안타", "타점", "득점", "도루", "삼진", "AVG", "출루율OBP", "장타율SLG"],
    fallbackRange: "A1:AB30",
    stickyRows: 2,
  },
  "batting-2023": {
    pageTitle: "2023년 타자 기록",
    sheetName: "타자",
    detectKeywords: ["2023년", "전+후반기"],
    requiredHeaders: ["이름", "게임수", "타석", "타수", "총안타", "타점", "득점", "도루", "삼진", "AVG", "출루율OBP", "장타율SLG", "OPS"],
    fallbackRange: "AD1:BC30",
    stickyRows: 2,
  },
  "batting-2024": {
    pageTitle: "2024년 타자 기록",
    sheetName: "타자",
    detectKeywords: ["2024", "전+후반기"],
    requiredHeaders: ["이름", "등번호", "게임수", "타석", "타수", "총안타", "타점", "득점", "도루", "삼진", "AVG", "출루율OBP", "장타율SLG", "OPS"],
    fallbackRange: "BE1:CF30",
    stickyRows: 2,
  },
  "batting-2025": {
    pageTitle: "2025년 타자 기록",
    sheetName: "타자",
    detectKeywords: ["2025", "전+후반기"],
    requiredHeaders: ["이름", "등번호", "게임수", "타석", "타수", "총안타", "타점", "득점", "도루", "삼진", "AVG", "출루율OBP", "장타율SLG", "OPS"],
    fallbackRange: "CH1:DI30",
    stickyRows: 2,
  },
  "pitching-2022": {
    pageTitle: "2022년 투수 기록",
    sheetName: "투수",
    detectKeywords: ["2022년", "전반기", "후반기"],
    requiredHeaders: ["이름", "등번호", "출장", "선발", "구원", "승", "패", "세", "홀드", "이닝", "삼진", "ERA", "WHIP"],
    fallbackRange: "A1:AD12",
    stickyRows: 2,
  },
  "pitching-2023": {
    pageTitle: "2023년 투수 기록",
    sheetName: "투수",
    detectKeywords: ["2023년", "전반기", "후반기"],
    requiredHeaders: ["이름", "출장", "선발", "구원", "승", "패", "세", "홀드", "이닝", "삼진", "ERA", "WHIP"],
    fallbackRange: "AE1:BG12",
    stickyRows: 2,
  },
  "pitching-2024": {
    pageTitle: "2024년 투수 기록",
    sheetName: "투수",
    detectKeywords: ["2024", "시즌"],
    requiredHeaders: ["이름", "출장", "선발", "구원", "승", "패", "세", "홀드", "이닝", "삼진", "ERA", "WHIP"],
    fallbackRange: "BH1:CJ12",
    stickyRows: 2,
  },
  "pitching-2025": {
    pageTitle: "2025년 투수 기록",
    sheetName: "투수",
    detectKeywords: ["2025", "시즌"],
    requiredHeaders: ["이름", "출장", "선발", "구원", "승", "패", "세", "홀드", "이닝", "삼진", "ERA", "WHIP"],
    fallbackRange: "CK1:DN12",
    stickyRows: 2,
  },
};

const state = {
  activePageId: PAGE_ORDER[0],
  pageElements: new Map(),
};

const pageButtons = document.getElementById("pageButtons");
const pageContainer = document.getElementById("pageContainer");
const globalMessage = document.getElementById("globalMessage");

initialize();

async function initialize() {
  renderLayout();

  if (!window.XLSX) {
    showGlobalMessage("SheetJS 라이브러리를 불러오지 못했습니다.");
    return;
  }

  try {
    const workbook = await loadWorkbook(WORKBOOK_FILE);
    console.log("[records] SheetNames:", workbook.SheetNames);

    const sheetModels = Object.fromEntries(
      workbook.SheetNames.map((sheetName) => [sheetName, createSheetModel(workbook.Sheets[sheetName], sheetName)])
    );

    renderPages(sheetModels);
    setActivePage(state.activePageId);
  } catch (error) {
    console.error("[records] workbook load failed:", error);
    showGlobalMessage("player-records.xlsx 파일을 불러오지 못했습니다.");
    renderLoadFailure();
  }
}

function renderLayout() {
  const buttonFragment = document.createDocumentFragment();
  const sectionFragment = document.createDocumentFragment();

  PAGE_ORDER.forEach((pageId) => {
    const config = PAGE_CONFIG[pageId];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "page-button";
    button.textContent = toButtonLabel(config.pageTitle);
    button.dataset.pageId = pageId;
    button.addEventListener("click", () => setActivePage(pageId));
    buttonFragment.appendChild(button);

    const section = document.createElement("section");
    section.className = "page-section";
    section.id = pageId;

    const title = document.createElement("h2");
    title.className = "page-title";
    title.textContent = config.pageTitle;

    const content = document.createElement("div");
    content.className = "page-content";

    section.appendChild(title);
    section.appendChild(content);
    sectionFragment.appendChild(section);

    state.pageElements.set(pageId, { button, section, content });
  });

  pageButtons.appendChild(buttonFragment);
  pageContainer.appendChild(sectionFragment);
}

async function loadWorkbook(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const buffer = await response.arrayBuffer();
  console.log(`[records] workbook loaded from "${path}"`);
  return XLSX.read(buffer, {
    type: "array",
    cellNF: false,
    cellHTML: false,
    cellStyles: false,
  });
}

function createSheetModel(sheet, sheetName) {
  const decoded = XLSX.utils.decode_range(sheet["!ref"] || "A1:A1");
  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    raw: false,
    blankrows: true,
    defval: "",
  });
  const columnCount = Math.max(decoded.e.c + 1, rows.reduce((max, row) => Math.max(max, row.length), 0));
  const grid = [];

  for (let rowIndex = 0; rowIndex <= decoded.e.r; rowIndex += 1) {
    const source = rows[rowIndex] || [];
    const row = [];

    for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
      const address = XLSX.utils.encode_cell({ r: rowIndex, c: columnIndex });
      const cell = sheet[address];
      row.push({
        address,
        text: stringifyCell(cell?.w ?? cell?.v ?? source[columnIndex] ?? ""),
      });
    }

    grid.push(row);
  }

  return {
    sheetName,
    sheet,
    grid,
    merges: sheet["!merges"] ?? [],
    maxRow: grid.length - 1,
    maxCol: columnCount - 1,
  };
}

function renderPages(sheetModels) {
  PAGE_ORDER.forEach((pageId) => {
    const config = PAGE_CONFIG[pageId];
    const content = state.pageElements.get(pageId)?.content;
    if (!content) {
      return;
    }

    content.replaceChildren();
    const resolved = resolvePageRange(config, sheetModels);

    if (!resolved.ok) {
      const empty = createEmptyMessage(resolved.message);
      content.appendChild(empty);
      return;
    }

    content.appendChild(renderResolvedTable(config, resolved, sheetModels[resolved.sheetName]));
  });
}

function resolvePageRange(config, sheetModels) {
  const candidateSheets = [...new Set([...(config.candidateSheets || []), config.sheetName])].filter(Boolean);
  const keywordCandidates = [];
  const detectedCandidates = [];

  candidateSheets.forEach((sheetName) => {
    const model = sheetModels[sheetName];
    if (!model) {
      return;
    }

    const keywords = collectKeywordCells(model, config.detectKeywords);
    keywordCandidates.push(...keywords.map((entry) => ({ sheetName, ...entry })));

    const candidate = detectRangeForConfig(model, config);
    if (candidate) {
      detectedCandidates.push(candidate);
    }
  });

  const bestDetected = detectedCandidates.sort((left, right) => right.score - left.score)[0] || null;
  const fallback = parseFallbackRange(config);

  if (bestDetected) {
    const range = fallback && fallback.sheetName === bestDetected.sheetName
      ? unionRanges(bestDetected.range, fallback.range)
      : bestDetected.range;

    logResolvedRange(config, bestDetected.sheetName, range, bestDetected.headerRow, bestDetected.source, bestDetected.previewValues);
    return {
      ok: true,
      sheetName: bestDetected.sheetName,
      range,
      stickyRows: Math.max(config.stickyRows || 1, (bestDetected.headerRow - range.s.r) + 1),
    };
  }

  if (fallback) {
    logResolvedRange(config, fallback.sheetName, fallback.range, fallback.range.s.r, "fallback", previewRange(sheetModels[fallback.sheetName], fallback.range));
    return {
      ok: true,
      sheetName: fallback.sheetName,
      range: fallback.range,
      stickyRows: config.stickyRows || 1,
    };
  }

  console.warn(`[records] ${config.pageTitle}: 범위 매핑 필요`, keywordCandidates.slice(0, 30));
  return {
    ok: false,
    message: "범위 매핑 필요",
  };
}

function detectRangeForConfig(model, config) {
  const headerRows = findHeaderRows(model, config.requiredHeaders);
  if (headerRows.length === 0) {
    return null;
  }

  const fallback = parseFallbackRange(config);
  const fallbackHeaderRow = fallback ? fallback.range.s.r + ((config.stickyRows || 1) - 1) : null;
  const candidates = headerRows.map((header) => {
    const startRow = findStartRow(model, header.rowIndex, config.detectKeywords, config.pageTitle);
    const startCol = findStartCol(model, startRow, header.rowIndex);
    const endCol = findEndCol(model, startRow, header.rowIndex);
    const endRow = findEndRow(model, header.rowIndex, startCol, endCol, config.detectKeywords);
    const range = {
      s: { r: startRow, c: startCol },
      e: { r: endRow, c: endCol },
    };
    const nearbyText = collectNearbyText(model, header.rowIndex, 5);
    const keywordHits = countKeywordHits(nearbyText, config.detectKeywords);
    const distanceBonus = fallbackHeaderRow === null ? 0 : Math.max(0, 12 - Math.abs(fallbackHeaderRow - header.rowIndex));

    return {
      sheetName: model.sheetName,
      score: header.matchedHeaders.length * 18 + keywordHits * 22 + distanceBonus,
      range,
      headerRow: header.rowIndex,
      source: "detected",
      previewValues: previewRange(model, range),
    };
  });

  return candidates.sort((left, right) => right.score - left.score)[0] || null;
}

function findHeaderRows(model, requiredHeaders) {
  const normalizedHeaders = requiredHeaders.map(normalizeText);
  const matches = [];

  for (let rowIndex = 0; rowIndex <= model.maxRow; rowIndex += 1) {
    const row = model.grid[rowIndex];
    const matchedHeaders = [];

    normalizedHeaders.forEach((header) => {
      const found = row.findIndex((cell) => normalizeText(cell.text).includes(header));
      if (found >= 0) {
        matchedHeaders.push({ header, columnIndex: found });
      }
    });

    if (matchedHeaders.length >= Math.max(3, normalizedHeaders.length - 2)) {
      matches.push({
        rowIndex,
        matchedHeaders,
      });
    }
  }

  return matches;
}

function collectNearbyText(model, rowIndex, distance) {
  const parts = [];
  const start = Math.max(0, rowIndex - distance);
  const end = Math.min(model.maxRow, rowIndex + 1);

  for (let current = start; current <= end; current += 1) {
    const rowText = model.grid[current]
      .map((cell) => cell.text.trim())
      .filter(Boolean)
      .join(" ");

    if (rowText) {
      parts.push(rowText);
    }
  }

  return normalizeText(parts.join(" "));
}

function countKeywordHits(text, keywords) {
  return keywords.reduce((count, keyword) => {
    const normalized = normalizeText(keyword);
    return normalized && text.includes(normalized) ? count + 1 : count;
  }, 0);
}

function findStartRow(model, headerRow, detectKeywords, pageTitle) {
  let startRow = headerRow;

  for (let rowIndex = Math.max(0, headerRow - 6); rowIndex <= headerRow; rowIndex += 1) {
    const rowText = normalizeText(
      model.grid[rowIndex]
        .map((cell) => cell.text)
        .filter(Boolean)
        .join(" ")
    );

    if (countKeywordHits(rowText, detectKeywords) > 0 || rowText.includes(normalizeText(pageTitle))) {
      startRow = rowIndex;
      break;
    }
  }

  return startRow;
}

function findStartCol(model, startRow, headerRow) {
  let startCol = model.maxCol;

  for (let rowIndex = startRow; rowIndex <= Math.min(model.maxRow, headerRow + 3); rowIndex += 1) {
    const first = model.grid[rowIndex].findIndex((cell) => cell.text !== "");
    if (first >= 0) {
      startCol = Math.min(startCol, first);
    }
  }

  return startCol === model.maxCol ? 0 : startCol;
}

function findEndCol(model, startRow, headerRow) {
  let endCol = 0;

  for (let rowIndex = startRow; rowIndex <= Math.min(model.maxRow, headerRow + 3); rowIndex += 1) {
    const row = model.grid[rowIndex];
    for (let columnIndex = row.length - 1; columnIndex >= 0; columnIndex -= 1) {
      if (row[columnIndex].text !== "") {
        endCol = Math.max(endCol, columnIndex);
        break;
      }
    }
  }

  return endCol;
}

function findEndRow(model, headerRow, startCol, endCol, detectKeywords) {
  let lastDataRow = headerRow;
  let blankCount = 0;

  for (let rowIndex = headerRow + 1; rowIndex <= model.maxRow; rowIndex += 1) {
    const slice = model.grid[rowIndex].slice(startCol, endCol + 1);
    const hasValue = slice.some((cell) => cell.text !== "");
    const rowText = normalizeText(slice.map((cell) => cell.text).join(" "));

    if (hasValue) {
      lastDataRow = rowIndex;
      blankCount = 0;
      continue;
    }

    if (countKeywordHits(rowText, detectKeywords) > 0) {
      break;
    }

    blankCount += 1;
    if (blankCount >= 2) {
      break;
    }
  }

  return lastDataRow;
}

function parseFallbackRange(config) {
  if (!config.fallbackRange) {
    return null;
  }

  return {
    sheetName: config.sheetName,
    range: XLSX.utils.decode_range(config.fallbackRange),
  };
}

function unionRanges(left, right) {
  return {
    s: {
      r: Math.min(left.s.r, right.s.r),
      c: Math.min(left.s.c, right.s.c),
    },
    e: {
      r: Math.max(left.e.r, right.e.r),
      c: Math.max(left.e.c, right.e.c),
    },
  };
}

function previewRange(model, range) {
  if (!model) {
    return [];
  }

  const values = [];
  for (let rowIndex = range.s.r; rowIndex <= Math.min(range.e.r, range.s.r + 2); rowIndex += 1) {
    const row = model.grid[rowIndex]
      .slice(range.s.c, Math.min(range.e.c, range.s.c + 7) + 1)
      .map((cell) => cell.text)
      .filter(Boolean)
      .join(" | ");

    if (row) {
      values.push(row);
    }
  }

  return values;
}

function collectKeywordCells(model, keywords) {
  const found = [];
  const normalizedKeywords = keywords.map(normalizeText);

  for (let rowIndex = 0; rowIndex <= model.maxRow; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex <= model.maxCol; columnIndex += 1) {
      const cell = model.grid[rowIndex][columnIndex];
      const normalized = normalizeText(cell.text);
      if (!normalized) {
        continue;
      }

      if (normalizedKeywords.some((keyword) => keyword && normalized.includes(keyword))) {
        found.push({
          address: cell.address,
          value: cell.text,
        });
      }
    }
  }

  return found;
}

function renderResolvedTable(config, resolved, model) {
  const section = document.createElement("section");
  section.className = "range-section";

  const extracted = extractRange(model, resolved.range);
  const tableScroll = buildTable(extracted.rows, extracted.merges, resolved.stickyRows);
  section.appendChild(tableScroll);
  return section;
}

function extractRange(model, range) {
  const rows = [];
  for (let rowIndex = range.s.r; rowIndex <= range.e.r; rowIndex += 1) {
    rows.push(model.grid[rowIndex].slice(range.s.c, range.e.c + 1).map((cell) => ({ ...cell })));
  }

  const trimmed = trimOuterBlankEdges(rows, range);
  return {
    rows: trimmed.rows,
    merges: extractRelativeMerges(model.merges, trimmed.range),
  };
}

function trimOuterBlankEdges(rows, range) {
  const nonEmptyRows = rows
    .map((row, index) => row.some((cell) => cell.text !== "") ? index : -1)
    .filter((index) => index >= 0);

  if (nonEmptyRows.length === 0) {
    return { rows: [], range };
  }

  const columnCount = rows[0]?.length || 0;
  const nonEmptyCols = [];

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
    if (rows.some((row) => row[columnIndex]?.text !== "")) {
      nonEmptyCols.push(columnIndex);
    }
  }

  const rowStart = nonEmptyRows[0];
  const rowEnd = nonEmptyRows[nonEmptyRows.length - 1];
  const colStart = nonEmptyCols[0];
  const colEnd = nonEmptyCols[nonEmptyCols.length - 1];

  return {
    rows: rows.slice(rowStart, rowEnd + 1).map((row) => row.slice(colStart, colEnd + 1)),
    range: {
      s: { r: range.s.r + rowStart, c: range.s.c + colStart },
      e: { r: range.s.r + rowEnd, c: range.s.c + colEnd },
    },
  };
}

function extractRelativeMerges(merges, range) {
  const results = [];

  merges.forEach((merge) => {
    if (
      merge.s.r < range.s.r ||
      merge.s.c < range.s.c ||
      merge.e.r > range.e.r ||
      merge.e.c > range.e.c
    ) {
      return;
    }

    results.push({
      row: merge.s.r - range.s.r,
      col: merge.s.c - range.s.c,
      rowspan: (merge.e.r - merge.s.r) + 1,
      colspan: (merge.e.c - merge.s.c) + 1,
    });
  });

  return results;
}

function buildTable(rows, merges, stickyRows) {
  const scroll = document.createElement("div");
  scroll.className = "table-scroll";

  const table = document.createElement("table");
  table.className = "sheet-table";
  const tbody = document.createElement("tbody");
  const mergeMap = new Map();
  const covered = new Set();
  const headerRowIndex = detectHeaderRowIndex(rows, stickyRows);
  const columnAlignments = inferColumnAlignments(rows, headerRowIndex);

  merges.forEach((merge) => {
    mergeMap.set(`${merge.row}:${merge.col}`, merge);
    for (let rowOffset = 0; rowOffset < merge.rowspan; rowOffset += 1) {
      for (let colOffset = 0; colOffset < merge.colspan; colOffset += 1) {
        if (rowOffset === 0 && colOffset === 0) {
          continue;
        }
        covered.add(`${merge.row + rowOffset}:${merge.col + colOffset}`);
      }
    }
  });

  rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");

    row.forEach((cell, columnIndex) => {
      const cellKey = `${rowIndex}:${columnIndex}`;
      if (covered.has(cellKey)) {
        return;
      }

      const isStickyRow = rowIndex < stickyRows;
      const element = document.createElement(isStickyRow ? "th" : "td");
      const merge = mergeMap.get(cellKey);

      element.textContent = cell.text;
      element.classList.add(columnAlignments[columnIndex] || "align-left");

      if (isStickyRow) {
        element.classList.add("cell-sticky-top");
        element.style.setProperty("--sticky-top", `${rowIndex * 46}px`);
      }

      if (columnIndex === 0) {
        element.classList.add("cell-sticky-left");
        if (isStickyRow) {
          element.classList.add("cell-sticky-corner");
        }
      }

      if (merge) {
        if (merge.colspan > 1) {
          element.colSpan = merge.colspan;
        }
        if (merge.rowspan > 1) {
          element.rowSpan = merge.rowspan;
        }
      }

      tr.appendChild(element);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  scroll.appendChild(table);
  return scroll;
}

function detectHeaderRowIndex(rows, stickyRows) {
  let bestIndex = Math.min(stickyRows - 1, rows.length - 1);
  let bestScore = -1;

  for (let rowIndex = 0; rowIndex < Math.min(stickyRows, rows.length); rowIndex += 1) {
    const row = rows[rowIndex];
    const score = row.filter((cell) => cell.text !== "").length;
    if (score > bestScore) {
      bestIndex = rowIndex;
      bestScore = score;
    }
  }

  return bestIndex;
}

function inferColumnAlignments(rows, headerRowIndex) {
  const header = rows[headerRowIndex] || [];
  const alignments = [];

  for (let columnIndex = 0; columnIndex < header.length; columnIndex += 1) {
    const headerText = header[columnIndex]?.text || "";
    const normalizedHeader = normalizeText(headerText);
    const bodyValues = rows
      .slice(headerRowIndex + 1)
      .map((row) => row[columnIndex]?.text || "")
      .filter(Boolean);

    if (columnIndex === 0 || /이름|선수|포지션|부문|구분/.test(headerText)) {
      alignments.push("align-left");
      continue;
    }

    const numericCount = bodyValues.filter(isNumericLike).length;
    if (bodyValues.length > 0 && numericCount / bodyValues.length >= 0.7) {
      alignments.push("align-right");
      continue;
    }

    if (/순위|번호|등번호|승|패|세|홀드|게임수|출장|선발|구원/.test(headerText) || normalizedHeader.length <= 3) {
      alignments.push("align-center");
      continue;
    }

    alignments.push("align-left");
  }

  return alignments;
}

function logResolvedRange(config, sheetName, range, headerRow, source, previewValues) {
  console.log(`[records] ${config.pageTitle}`, {
    sheetName,
    startRow: range.s.r + 1,
    endRow: range.e.r + 1,
    startCol: XLSX.utils.encode_col(range.s.c),
    endCol: XLSX.utils.encode_col(range.e.c),
    headerRow: headerRow + 1,
    source,
    previewValues,
  });
}

function renderLoadFailure() {
  PAGE_ORDER.forEach((pageId) => {
    const content = state.pageElements.get(pageId)?.content;
    if (!content) {
      return;
    }

    content.replaceChildren(createEmptyMessage("player-records.xlsx 파일을 불러오지 못했습니다."));
  });
}

function createEmptyMessage(message) {
  const empty = document.createElement("div");
  empty.className = "page-empty";
  empty.textContent = message;
  return empty;
}

function toButtonLabel(pageTitle) {
  return pageTitle
    .replace("년 ", " ")
    .replace(" 기록", "")
    .replace("통산기록", "통산")
    .replace("통산 순위", "순위");
}

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[()\-_[\]{}.:/]/g, "");
}

function stringifyCell(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value);
}

function isNumericLike(value) {
  if (value === "" || value === "#DIV/0!") {
    return true;
  }

  return !Number.isNaN(Number(String(value).replace(/,/g, "")));
}

function setActivePage(pageId) {
  state.activePageId = pageId;

  state.pageElements.forEach(({ button, section }, currentPageId) => {
    const isActive = currentPageId === pageId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    section.classList.toggle("is-active", isActive);
  });
}

function showGlobalMessage(message) {
  globalMessage.hidden = false;
  globalMessage.textContent = message;
}
