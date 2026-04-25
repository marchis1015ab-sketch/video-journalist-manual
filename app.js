const PAGE_DEFINITIONS = [
  {
    id: "team-2026",
    buttonLabel: "2026 팀 기록",
    title: "2026 팀 기록",
    requiredGroups: [["2026"], ["팀", "team"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["타자", "타격", "hitter", "batter", "투수", "pitcher"],
  },
  {
    id: "batting-2026",
    buttonLabel: "2026 타자",
    title: "2026년 타자 기록",
    requiredGroups: [["2026"], ["타자", "타격", "hitter", "batter"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["투수", "pitcher", "팀", "team"],
  },
  {
    id: "pitching-2026",
    buttonLabel: "2026 투수",
    title: "2026년 투수 기록",
    requiredGroups: [["2026"], ["투수", "pitcher"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["타자", "타격", "hitter", "batter", "팀", "team"],
  },
  {
    id: "career-batting",
    buttonLabel: "타자 통산",
    title: "타자 통산기록",
    requiredGroups: [["타자", "타격", "hitter", "batter"], ["통산", "career", "total"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["순위", "rank", "ranking", "투수", "pitcher"],
  },
  {
    id: "career-pitching",
    buttonLabel: "투수 통산",
    title: "투수 통산기록",
    requiredGroups: [["투수", "pitcher"], ["통산", "career", "total"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["순위", "rank", "ranking", "타자", "타격", "hitter", "batter"],
  },
  {
    id: "ranking-batting",
    buttonLabel: "타자 순위",
    title: "타자 통산 순위",
    requiredGroups: [["타자", "타격", "hitter", "batter"], ["통산", "career", "total"], ["순위", "rank", "ranking"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["투수", "pitcher"],
  },
  {
    id: "ranking-pitching",
    buttonLabel: "투수 순위",
    title: "투수 통산 순위",
    requiredGroups: [["투수", "pitcher"], ["통산", "career", "total"], ["순위", "rank", "ranking"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["타자", "타격", "hitter", "batter"],
  },
  {
    id: "batting-2022",
    buttonLabel: "2022 타자",
    title: "2022년 타자 기록",
    requiredGroups: [["2022"], ["타자", "타격", "hitter", "batter"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["투수", "pitcher"],
  },
  {
    id: "batting-2023",
    buttonLabel: "2023 타자",
    title: "2023년 타자 기록",
    requiredGroups: [["2023"], ["타자", "타격", "hitter", "batter"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["투수", "pitcher"],
  },
  {
    id: "batting-2024",
    buttonLabel: "2024 타자",
    title: "2024년 타자 기록",
    requiredGroups: [["2024"], ["타자", "타격", "hitter", "batter"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["투수", "pitcher"],
  },
  {
    id: "batting-2025",
    buttonLabel: "2025 타자",
    title: "2025년 타자 기록",
    requiredGroups: [["2025"], ["타자", "타격", "hitter", "batter"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["투수", "pitcher"],
  },
  {
    id: "pitching-2022",
    buttonLabel: "2022 투수",
    title: "2022년 투수 기록",
    requiredGroups: [["2022"], ["투수", "pitcher"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["타자", "타격", "hitter", "batter"],
  },
  {
    id: "pitching-2023",
    buttonLabel: "2023 투수",
    title: "2023년 투수 기록",
    requiredGroups: [["2023"], ["투수", "pitcher"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["타자", "타격", "hitter", "batter"],
  },
  {
    id: "pitching-2024",
    buttonLabel: "2024 투수",
    title: "2024년 투수 기록",
    requiredGroups: [["2024"], ["투수", "pitcher"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["타자", "타격", "hitter", "batter"],
  },
  {
    id: "pitching-2025",
    buttonLabel: "2025 투수",
    title: "2025년 투수 기록",
    requiredGroups: [["2025"], ["투수", "pitcher"]],
    optionalTerms: ["기록", "성적", "record", "stat"],
    excludeTerms: ["타자", "타격", "hitter", "batter"],
  },
];

const MANUAL_PAGE_MAPPING = {
  "team-2026": null,
  "batting-2026": null,
  "pitching-2026": null,
  "career-batting": {
    sheetName: "2025",
    rangeA1: "A23:O41",
  },
  "career-pitching": null,
  "ranking-batting": {
    sheetName: "2025",
    rangeA1: "A23:O41",
  },
  "ranking-pitching": null,
  "batting-2022": null,
  "batting-2023": null,
  "batting-2024": {
    sheetName: "2024",
    rangeA1: "A1:L25",
  },
  "batting-2025": {
    sheetName: "2025",
    rangeA1: "A1:O20",
  },
  "pitching-2022": null,
  "pitching-2023": null,
  "pitching-2024": null,
  "pitching-2025": null,
};

const state = {
  activePageId: PAGE_DEFINITIONS[0].id,
  pageBindings: new Map(),
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
    const workbook = await loadWorkbook("집계.xlsx");
    console.log("[records] 실제 읽은 시트명 목록:", workbook.SheetNames);

    const candidates = buildCandidates(workbook);
    const bindings = matchPagesToCandidates(PAGE_DEFINITIONS, candidates, workbook);

    state.pageBindings = bindings;
    renderAllPageTables();
    setActivePage(state.activePageId);
  } catch (error) {
    console.error("[records] 집계.xlsx 로드 실패:", error);
    showGlobalMessage("집계.xlsx 파일을 불러오지 못했습니다.");
    renderLoadFailure();
  }
}

function renderLayout() {
  const buttonFragment = document.createDocumentFragment();
  const sectionFragment = document.createDocumentFragment();

  PAGE_DEFINITIONS.forEach((page) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "page-button";
    button.textContent = page.buttonLabel;
    button.dataset.pageId = page.id;
    button.addEventListener("click", () => setActivePage(page.id));
    buttonFragment.appendChild(button);

    const section = document.createElement("section");
    section.className = "page-section";
    section.id = page.id;

    const title = document.createElement("h2");
    title.className = "page-title";
    title.textContent = page.title;

    const content = document.createElement("div");
    content.className = "page-content";

    section.appendChild(title);
    section.appendChild(content);
    sectionFragment.appendChild(section);

    state.pageElements.set(page.id, { button, section, content });
  });

  pageButtons.appendChild(buttonFragment);
  pageContainer.appendChild(sectionFragment);
  setActivePage(state.activePageId);
}

async function loadWorkbook(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const buffer = await response.arrayBuffer();
  return XLSX.read(buffer, {
    type: "array",
    cellNF: false,
    cellHTML: false,
    cellStyles: false,
  });
}

function buildCandidates(workbook) {
  const candidates = [];

  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      raw: false,
      blankrows: true,
      defval: "",
    });

    const grid = normalizeGrid(rows);
    const trimmed = trimOuterEmpty(grid);

    if (!trimmed) {
      console.warn(`[records] 빈 시트는 제외합니다: ${sheetName}`);
      return;
    }

    candidates.push(createCandidate(sheetName, encodeRange(
      trimmed.rowStart,
      trimmed.colStart,
      trimmed.rowEnd,
      trimmed.colEnd
    ), trimmed.data));

    const blocks = splitIntoBlocks(trimmed.data, trimmed.rowStart, trimmed.colStart);
    const usableBlocks = blocks.length > 0 ? blocks : [{
      data: trimmed.data,
      rowStart: trimmed.rowStart,
      rowEnd: trimmed.rowEnd,
      colStart: trimmed.colStart,
      colEnd: trimmed.colEnd,
    }];

    usableBlocks.forEach((block, index) => {
      const rangeA1 = encodeRange(block.rowStart, block.colStart, block.rowEnd, block.colEnd);

      candidates.push(createCandidate(sheetName, rangeA1, block.data, index));
    });
  });

  return candidates;
}

function matchPagesToCandidates(pages, candidates, workbook) {
  const bindings = new Map();
  const usedCandidateKeys = new Set();
  const sheetNames = workbook.SheetNames;
  const candidateSummary = candidates
    .map((candidate) => `${candidate.sheetName}:${candidate.rangeA1}`)
    .join(", ");

  pages.forEach((page) => {
    const manualBinding = getManualBinding(page, workbook, candidates);
    if (manualBinding) {
      bindings.set(page.id, manualBinding);
      usedCandidateKeys.add(manualBinding.key);
      console.log(
        `[records] ${page.title}: 수동 매핑 시트="${manualBinding.sheetName}", 범위="${manualBinding.rangeA1}"`
      );
      return;
    }

    const ranked = candidates
      .map((candidate) => ({
        candidate,
        score: scoreCandidate(page, candidate),
      }))
      .filter((entry) => Number.isFinite(entry.score) && entry.score > 0)
      .sort((left, right) => right.score - left.score);

    let selected = ranked.find((entry) => !usedCandidateKeys.has(entry.candidate.key));
    if (!selected) {
      selected = ranked[0];
    }

    if (!selected) {
      console.warn(
        `[records] "${page.title}"에 맞는 시트/범위를 찾지 못했습니다. 연결 후보를 확인하세요. 시트 목록: ${sheetNames.join(", ")} / 범위 후보: ${candidateSummary}`
      );
      bindings.set(page.id, null);
      return;
    }

    usedCandidateKeys.add(selected.candidate.key);
    bindings.set(page.id, selected.candidate);

    if (selected.score < 100) {
      console.warn(
        `[records] "${page.title}" 자동 매칭 신뢰도가 낮습니다. 선택된 연결: ${selected.candidate.sheetName}:${selected.candidate.rangeA1}`
      );
    }

    console.log(
      `[records] ${page.title}: 시트="${selected.candidate.sheetName}", 범위="${selected.candidate.rangeA1}"`
    );
  });

  return bindings;
}

function getManualBinding(page, workbook, candidates) {
  const mapping = MANUAL_PAGE_MAPPING[page.id];
  if (!mapping) {
    return null;
  }

  if (!workbook.SheetNames.includes(mapping.sheetName)) {
    console.warn(
      `[records] "${page.title}" 수동 매핑 시트가 없습니다: ${mapping.sheetName}`
    );
    return null;
  }

  if (mapping.rangeA1) {
    const manualRangeCandidate = buildManualRangeCandidate(workbook, mapping.sheetName, mapping.rangeA1);
    if (!manualRangeCandidate) {
      console.warn(
        `[records] "${page.title}" 수동 매핑 범위를 읽지 못했습니다: ${mapping.sheetName}:${mapping.rangeA1}`
      );
      return null;
    }

    return manualRangeCandidate;
  }

  const sheetCandidates = candidates.filter((candidate) => candidate.sheetName === mapping.sheetName);
  if (sheetCandidates.length === 0) {
    console.warn(
      `[records] "${page.title}" 수동 매핑 시트 후보를 찾지 못했습니다: ${mapping.sheetName}`
    );
    return null;
  }

  const exactSheetCandidate = sheetCandidates.find((candidate) => candidate.blockIndex === -1);
  return exactSheetCandidate ?? sheetCandidates[0];
}

function buildManualRangeCandidate(workbook, sheetName, rangeA1) {
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) {
    return null;
  }

  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    raw: false,
    blankrows: true,
    defval: "",
    range: rangeA1,
  });
  const grid = normalizeGrid(rows);
  const trimmed = trimOuterEmpty(grid);

  if (!trimmed) {
    return null;
  }

  return createCandidate(sheetName, rangeA1, trimmed.data, -2);
}

function createCandidate(sheetName, rangeA1, data, blockIndex = -1) {
  return {
    key: `${sheetName}::${rangeA1}`,
    sheetName,
    rangeA1,
    blockIndex,
    data,
    normalizedSheetName: normalizeText(sheetName),
    normalizedPreview: normalizeText(flattenPreview(data)),
  };
}

function scoreCandidate(page, candidate) {
  const sheetText = candidate.normalizedSheetName;
  const previewText = candidate.normalizedPreview;
  let score = 0;
  let hitGroups = 0;

  page.requiredGroups.forEach((group, index) => {
    const normalizedTerms = group.map(normalizeText);
    const inSheet = normalizedTerms.some((term) => sheetText.includes(term));
    const inPreview = normalizedTerms.some((term) => previewText.includes(term));

    if (inSheet) {
      score += 70 - (index * 6);
      hitGroups += 1;
      return;
    }

    if (inPreview) {
      score += 34 - (index * 4);
      hitGroups += 1;
    }
  });

  if (hitGroups === 0) {
    return Number.NEGATIVE_INFINITY;
  }

  if (hitGroups < Math.max(1, page.requiredGroups.length - 1)) {
    score -= 50;
  }

  page.optionalTerms.forEach((term) => {
    const normalizedTerm = normalizeText(term);
    if (sheetText.includes(normalizedTerm)) {
      score += 10;
      return;
    }

    if (previewText.includes(normalizedTerm)) {
      score += 4;
    }
  });

  page.excludeTerms.forEach((term) => {
    const normalizedTerm = normalizeText(term);
    if (sheetText.includes(normalizedTerm)) {
      score -= 22;
      return;
    }

    if (previewText.includes(normalizedTerm)) {
      score -= 8;
    }
  });

  if (sheetText === normalizeText(page.title)) {
    score += 120;
  } else if (sheetText.includes(normalizeText(page.buttonLabel))) {
    score += 48;
  }

  score += Math.min(countMeaningfulRows(candidate.data), 10);
  score += Math.min(maxColumns(candidate.data), 10);
  return score;
}

function renderAllPageTables() {
  PAGE_DEFINITIONS.forEach((page) => {
    const target = state.pageElements.get(page.id)?.content;
    const binding = state.pageBindings.get(page.id);

    if (!target) {
      return;
    }

    target.replaceChildren();

    if (!binding) {
      const empty = document.createElement("div");
      empty.className = "page-empty";
      empty.textContent = "표를 찾지 못했습니다. 개발자 도구 콘솔의 경고를 확인하세요.";
      target.appendChild(empty);
      return;
    }

    const rendered = createRenderedTable(binding.data);
    if (rendered.notes.length > 0) {
      const notes = document.createElement("div");
      notes.className = "table-notes";

      rendered.notes.forEach((line) => {
        const note = document.createElement("p");
        note.textContent = line;
        notes.appendChild(note);
      });

      target.appendChild(notes);
    }

    target.appendChild(rendered.tableWrap);
  });
}

function renderLoadFailure() {
  PAGE_DEFINITIONS.forEach((page) => {
    const target = state.pageElements.get(page.id)?.content;
    if (!target) {
      return;
    }

    const empty = document.createElement("div");
    empty.className = "page-empty";
    empty.textContent = "집계.xlsx 파일을 불러오지 못했습니다.";
    target.replaceChildren(empty);
  });
}

function createRenderedTable(data) {
  const notes = [];
  const headerRowIndex = detectHeaderRowIndex(data);
  const noteRows = data.slice(0, headerRowIndex).filter((row) => row.some(isMeaningfulCell));
  const headerRow = data[headerRowIndex] || [];
  const bodyRows = data.slice(headerRowIndex + 1);

  noteRows.forEach((row) => {
    notes.push(
      row
        .filter(isMeaningfulCell)
        .map((cell) => stringifyCell(cell))
        .join(" / ")
    );
  });

  const tableWrap = document.createElement("div");
  tableWrap.className = "table-wrap";

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headerTr = document.createElement("tr");
  headerRow.forEach((cell) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = stringifyCell(cell);
    headerTr.appendChild(th);
  });
  thead.appendChild(headerTr);

  bodyRows.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = stringifyCell(cell);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  tableWrap.appendChild(table);
  return { notes, tableWrap };
}

function detectHeaderRowIndex(data) {
  const searchLimit = Math.min(data.length, 6);
  let bestIndex = 0;
  let bestScore = -1;

  for (let index = 0; index < searchLimit; index += 1) {
    const row = data[index] || [];
    const filled = row.filter(isMeaningfulCell).length;
    const textLike = row.filter((cell) => {
      if (!isMeaningfulCell(cell)) {
        return false;
      }

      return Number.isNaN(Number(String(cell).replace(/,/g, "")));
    }).length;
    const score = (filled * 3) + textLike;

    if (score > bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  }

  return bestIndex;
}

function normalizeGrid(rows) {
  const columnCount = rows.reduce((max, row) => Math.max(max, row.length), 0);
  return rows.map((row) => {
    const normalized = new Array(columnCount).fill("");
    row.forEach((cell, index) => {
      normalized[index] = cell;
    });
    return normalized;
  });
}

function trimOuterEmpty(grid) {
  const nonEmptyRows = grid
    .map((row, index) => row.some(isMeaningfulCell) ? index : -1)
    .filter((index) => index >= 0);

  if (nonEmptyRows.length === 0) {
    return null;
  }

  const nonEmptyCols = [];
  const columnCount = maxColumns(grid);

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
    const hasValue = grid.some((row) => isMeaningfulCell(row[columnIndex]));
    if (hasValue) {
      nonEmptyCols.push(columnIndex);
    }
  }

  if (nonEmptyCols.length === 0) {
    return null;
  }

  const rowStart = nonEmptyRows[0];
  const rowEnd = nonEmptyRows[nonEmptyRows.length - 1];
  const colStart = nonEmptyCols[0];
  const colEnd = nonEmptyCols[nonEmptyCols.length - 1];
  const data = grid
    .slice(rowStart, rowEnd + 1)
    .map((row) => row.slice(colStart, colEnd + 1));

  return {
    data,
    rowStart,
    rowEnd,
    colStart,
    colEnd,
  };
}

function splitIntoBlocks(data, rowOffset, colOffset) {
  const rowIndices = [];
  data.forEach((row, index) => {
    if (row.some(isMeaningfulCell)) {
      rowIndices.push(index);
    }
  });

  const rowGroups = splitByGap(rowIndices, 1);
  const blocks = [];

  rowGroups.forEach((rowGroup) => {
    const [relativeRowStart, relativeRowEnd] = rowGroup;
    const slice = data.slice(relativeRowStart, relativeRowEnd + 1);
    const columnIndices = [];
    const columnCount = maxColumns(slice);

    for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
      const hasValue = slice.some((row) => isMeaningfulCell(row[columnIndex]));
      if (hasValue) {
        columnIndices.push(columnIndex);
      }
    }

    const columnGroups = splitByGap(columnIndices, 1);
    columnGroups.forEach((columnGroup) => {
      const [relativeColStart, relativeColEnd] = columnGroup;
      const blockData = slice.map((row) => row.slice(relativeColStart, relativeColEnd + 1));
      const trimmedBlock = trimOuterEmpty(blockData);

      if (!trimmedBlock) {
        return;
      }

      blocks.push({
        data: trimmedBlock.data,
        rowStart: rowOffset + relativeRowStart + trimmedBlock.rowStart,
        rowEnd: rowOffset + relativeRowStart + trimmedBlock.rowEnd,
        colStart: colOffset + relativeColStart + trimmedBlock.colStart,
        colEnd: colOffset + relativeColStart + trimmedBlock.colEnd,
      });
    });
  });

  return blocks;
}

function splitByGap(indices, minimumGap) {
  if (indices.length === 0) {
    return [];
  }

  const groups = [];
  let start = indices[0];
  let previous = indices[0];

  for (let index = 1; index < indices.length; index += 1) {
    const current = indices[index];
    if ((current - previous) > minimumGap) {
      groups.push([start, previous]);
      start = current;
    }
    previous = current;
  }

  groups.push([start, previous]);
  return groups;
}

function flattenPreview(data) {
  return data
    .slice(0, 8)
    .map((row) => row.slice(0, 12).map(stringifyCell).join(" "))
    .join(" ");
}

function encodeRange(rowStart, colStart, rowEnd, colEnd) {
  return XLSX.utils.encode_range({
    s: { r: rowStart, c: colStart },
    e: { r: rowEnd, c: colEnd },
  });
}

function countMeaningfulRows(data) {
  return data.filter((row) => row.some(isMeaningfulCell)).length;
}

function maxColumns(data) {
  return data.reduce((max, row) => Math.max(max, row.length), 0);
}

function isMeaningfulCell(cell) {
  if (cell === null || cell === undefined) {
    return false;
  }

  if (typeof cell === "string") {
    return cell.trim() !== "";
  }

  return true;
}

function stringifyCell(cell) {
  if (cell === null || cell === undefined) {
    return "";
  }

  return String(cell);
}

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[()\-_[\]{}]/g, "");
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
