const WORKBOOK_FILE_CANDIDATES = ["player-records.xlsx"];

const PAGE_DEFINITIONS = [
  { id: "team-2026", buttonLabel: "2026 팀 기록", title: "2026 팀 기록" },
  { id: "batting-2026", buttonLabel: "2026 타자", title: "2026년 타자 기록" },
  { id: "pitching-2026", buttonLabel: "2026 투수", title: "2026년 투수 기록" },
  { id: "career-batting", buttonLabel: "타자 통산", title: "타자 통산기록" },
  { id: "career-pitching", buttonLabel: "투수 통산", title: "투수 통산기록" },
  { id: "ranking-batting", buttonLabel: "타자 순위", title: "타자 통산 순위" },
  { id: "ranking-pitching", buttonLabel: "투수 순위", title: "투수 통산 순위" },
  { id: "batting-2022", buttonLabel: "2022 타자", title: "2022년 타자 기록" },
  { id: "batting-2023", buttonLabel: "2023 타자", title: "2023년 타자 기록" },
  { id: "batting-2024", buttonLabel: "2024 타자", title: "2024년 타자 기록" },
  { id: "batting-2025", buttonLabel: "2025 타자", title: "2025년 타자 기록" },
  { id: "pitching-2022", buttonLabel: "2022 투수", title: "2022년 투수 기록" },
  { id: "pitching-2023", buttonLabel: "2023 투수", title: "2023년 투수 기록" },
  { id: "pitching-2024", buttonLabel: "2024 투수", title: "2024년 투수 기록" },
  { id: "pitching-2025", buttonLabel: "2025 투수", title: "2025년 투수 기록" },
];

const PAGE_RANGES = {
  "team-2026": {
    sections: [
      { title: "2026 타자 팀 기록", sheetName: "타자", rangeA1: "DK1:EL30", stickyRows: 2 },
      { title: "2026 투수 팀 기록", sheetName: "투수", rangeA1: "A42:AD53", stickyRows: 2 },
    ],
  },
  "batting-2026": {
    sections: [
      { title: "2026년 타자 기록", sheetName: "타자", rangeA1: "DK1:EL30", stickyRows: 2 },
    ],
  },
  "pitching-2026": {
    sections: [
      { title: "2026년 투수 기록", sheetName: "투수", rangeA1: "A42:AD53", stickyRows: 2 },
    ],
  },
  "career-batting": {
    sections: [
      { title: "타자 통산기록", sheetName: "타자", rangeA1: "BK79:CO116", stickyRows: 3 },
    ],
  },
  "career-pitching": {
    sections: [
      { title: "투수 통산기록", sheetName: "투수", rangeA1: "A14:AE26", stickyRows: 3 },
    ],
  },
  "ranking-batting": {
    sections: [
      { title: "타자 통산 순위", sheetName: "타자", rangeA1: "BI40:CO77", stickyRows: 4 },
    ],
  },
  "ranking-pitching": {
    sections: [
      { title: "투수 통산 순위", sheetName: "투수", rangeA1: "A30:BG40", stickyRows: 1 },
    ],
  },
  "batting-2022": {
    sections: [
      { title: "2022년 타자 기록", sheetName: "타자", rangeA1: "A1:AB30", stickyRows: 2 },
    ],
  },
  "batting-2023": {
    sections: [
      { title: "2023년 타자 기록", sheetName: "타자", rangeA1: "AD1:BC30", stickyRows: 2 },
    ],
  },
  "batting-2024": {
    sections: [
      { title: "2024년 타자 기록", sheetName: "타자", rangeA1: "BE1:CF30", stickyRows: 2 },
    ],
  },
  "batting-2025": {
    sections: [
      { title: "2025년 타자 기록", sheetName: "타자", rangeA1: "CH1:DI30", stickyRows: 2 },
    ],
  },
  "pitching-2022": {
    sections: [
      { title: "2022년 투수 기록", sheetName: "투수", rangeA1: "A1:AD12", stickyRows: 2 },
    ],
  },
  "pitching-2023": {
    sections: [
      { title: "2023년 투수 기록", sheetName: "투수", rangeA1: "AE1:BG12", stickyRows: 2 },
    ],
  },
  "pitching-2024": {
    sections: [
      { title: "2024년 투수 기록", sheetName: "투수", rangeA1: "BH1:CJ12", stickyRows: 2 },
    ],
  },
  "pitching-2025": {
    sections: [
      { title: "2025년 투수 기록", sheetName: "투수", rangeA1: "CK1:DN12", stickyRows: 2 },
    ],
  },
};

const state = {
  activePageId: PAGE_DEFINITIONS[0].id,
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
    const workbook = await loadWorkbook();
    console.log("[records] SheetNames:", workbook.SheetNames);
    renderAllPages(workbook);
    setActivePage(state.activePageId);
  } catch (error) {
    console.error("[records] 엑셀 로드 실패:", error);
    showGlobalMessage("player-records.xlsx 파일을 불러오지 못했습니다.");
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

async function loadWorkbook() {
  let lastError = null;

  for (const path of WORKBOOK_FILE_CANDIDATES) {
    try {
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
    } catch (error) {
      lastError = error;
      console.warn(`[records] workbook load failed for "${path}"`, error);
    }
  }

  throw lastError ?? new Error("Workbook file not found.");
}

function renderAllPages(workbook) {
  PAGE_DEFINITIONS.forEach((page) => {
    const content = state.pageElements.get(page.id)?.content;
    const config = PAGE_RANGES[page.id];

    if (!content) {
      return;
    }

    content.replaceChildren();

    if (!config || !Array.isArray(config.sections) || config.sections.length === 0) {
      content.appendChild(createEmptyMessage("페이지 범위 설정이 없습니다."));
      console.warn(`[records] ${page.id} PAGE_RANGES 설정이 없습니다.`);
      return;
    }

    config.sections.forEach((sectionConfig) => {
      content.appendChild(renderRangeSection(page, sectionConfig, workbook));
    });
  });
}

function renderRangeSection(page, sectionConfig, workbook) {
  const wrapper = document.createElement("section");
  wrapper.className = "range-section";

  if (sectionConfig.title) {
    const heading = document.createElement("h3");
    heading.className = "range-title";
    heading.textContent = sectionConfig.title;
    wrapper.appendChild(heading);
  }

  const preview = getRangePreview(workbook, sectionConfig);
  logRangePreview(page, sectionConfig, preview);

  if (preview.error) {
    wrapper.appendChild(createEmptyMessage(preview.error));
    return wrapper;
  }

  if (!preview.rows.length || !preview.rows.some((row) => row.some((cell) => cell.text !== ""))) {
    console.warn(
      `[records] ${page.title} 범위가 비어 있습니다: ${sectionConfig.sheetName} ${sectionConfig.rangeA1}`
    );
    wrapper.appendChild(createEmptyMessage("범위를 확인하세요. 현재 구역이 비어 있습니다."));
    return wrapper;
  }

  wrapper.appendChild(buildTable(preview.rows, preview.merges, sectionConfig.stickyRows ?? 1));
  return wrapper;
}

function getRangePreview(workbook, sectionConfig) {
  if (!sectionConfig.rangeA1) {
    return {
      error: `PAGE_RANGES에서 ${sectionConfig.sheetName} 범위를 입력하세요.`,
      startCell: "",
      endCell: "",
      values: [],
      rows: [],
      merges: [],
    };
  }

  const sheet = workbook.Sheets[sectionConfig.sheetName];
  if (!sheet) {
    return {
      error: `시트를 찾지 못했습니다: ${sectionConfig.sheetName}`,
      startCell: sectionConfig.rangeA1.split(":")[0] ?? sectionConfig.rangeA1,
      endCell: sectionConfig.rangeA1.split(":")[1] ?? sectionConfig.rangeA1,
      values: [],
      rows: [],
      merges: [],
    };
  }

  const decoded = XLSX.utils.decode_range(sectionConfig.rangeA1);
  const rows = [];

  for (let rowIndex = decoded.s.r; rowIndex <= decoded.e.r; rowIndex += 1) {
    const row = [];
    for (let columnIndex = decoded.s.c; columnIndex <= decoded.e.c; columnIndex += 1) {
      const address = XLSX.utils.encode_cell({ r: rowIndex, c: columnIndex });
      row.push({
        address,
        text: stringifyCell(sheet[address]?.w ?? sheet[address]?.v ?? ""),
      });
    }
    rows.push(row);
  }

  const trimmed = trimRangeRowsAndColumns(rows, decoded);
  const merges = extractMerges(sheet["!merges"] ?? [], trimmed.range);
  const previewValues = trimmed.rows
    .slice(0, 3)
    .map((row) => row.slice(0, 6).map((cell) => cell.text).filter((value) => value !== "").join(" | "))
    .filter((line) => line !== "");

  return {
    error: null,
    startCell: XLSX.utils.encode_cell(trimmed.range.s),
    endCell: XLSX.utils.encode_cell(trimmed.range.e),
    values: previewValues,
    rows: trimmed.rows,
    merges,
  };
}

function trimRangeRowsAndColumns(rows, sourceRange) {
  const meaningfulRows = rows
    .map((row, index) => row.some((cell) => cell.text !== "") ? index : -1)
    .filter((index) => index >= 0);

  if (meaningfulRows.length === 0) {
    return {
      rows: [],
      range: sourceRange,
    };
  }

  const columnCount = rows.reduce((max, row) => Math.max(max, row.length), 0);
  const meaningfulColumns = [];

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
    const hasValue = rows.some((row) => row[columnIndex]?.text !== "");
    if (hasValue) {
      meaningfulColumns.push(columnIndex);
    }
  }

  const rowStartOffset = meaningfulRows[0];
  const rowEndOffset = meaningfulRows[meaningfulRows.length - 1];
  const colStartOffset = meaningfulColumns[0];
  const colEndOffset = meaningfulColumns[meaningfulColumns.length - 1];

  return {
    rows: rows
      .slice(rowStartOffset, rowEndOffset + 1)
      .map((row) => row.slice(colStartOffset, colEndOffset + 1)),
    range: {
      s: {
        r: sourceRange.s.r + rowStartOffset,
        c: sourceRange.s.c + colStartOffset,
      },
      e: {
        r: sourceRange.s.r + rowEndOffset,
        c: sourceRange.s.c + colEndOffset,
      },
    },
  };
}

function extractMerges(mergeRanges, trimmedRange) {
  const merges = [];

  mergeRanges.forEach((merge) => {
    const intersectStartRow = Math.max(merge.s.r, trimmedRange.s.r);
    const intersectEndRow = Math.min(merge.e.r, trimmedRange.e.r);
    const intersectStartCol = Math.max(merge.s.c, trimmedRange.s.c);
    const intersectEndCol = Math.min(merge.e.c, trimmedRange.e.c);

    if (intersectStartRow > intersectEndRow || intersectStartCol > intersectEndCol) {
      return;
    }

    if (merge.s.r < trimmedRange.s.r || merge.s.c < trimmedRange.s.c) {
      return;
    }

    merges.push({
      row: merge.s.r - trimmedRange.s.r,
      col: merge.s.c - trimmedRange.s.c,
      rowspan: intersectEndRow - merge.s.r + 1,
      colspan: intersectEndCol - merge.s.c + 1,
    });
  });

  return merges;
}

function buildTable(rows, merges, stickyRows) {
  const mergeLookup = new Map();
  const coveredCells = new Set();

  merges.forEach((merge) => {
    mergeLookup.set(`${merge.row}:${merge.col}`, merge);

    for (let rowOffset = 0; rowOffset < merge.rowspan; rowOffset += 1) {
      for (let colOffset = 0; colOffset < merge.colspan; colOffset += 1) {
        if (rowOffset === 0 && colOffset === 0) {
          continue;
        }

        coveredCells.add(`${merge.row + rowOffset}:${merge.col + colOffset}`);
      }
    }
  });

  const wrap = document.createElement("div");
  wrap.className = "table-wrap";

  const table = document.createElement("table");
  table.className = "sheet-table";
  const tbody = document.createElement("tbody");

  rows.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    if (rowIndex < stickyRows) {
      tr.className = "sticky-row";
    }

    row.forEach((cell, columnIndex) => {
      const key = `${rowIndex}:${columnIndex}`;
      if (coveredCells.has(key)) {
        return;
      }

      const merge = mergeLookup.get(key);
      const element = document.createElement(rowIndex < stickyRows ? "th" : "td");
      element.textContent = cell.text;

      if (rowIndex < stickyRows) {
        element.classList.add("cell-sticky");
        element.style.setProperty("--sticky-top", `${rowIndex * 45}px`);
        element.scope = "col";
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
  wrap.appendChild(table);
  return wrap;
}

function logRangePreview(page, sectionConfig, preview) {
  const label = `${page.title} / ${sectionConfig.title || sectionConfig.sheetName}`;

  if (preview.error) {
    console.warn(
      `[records] ${label} preview failed`,
      {
        sheetName: sectionConfig.sheetName,
        startCell: sectionConfig.rangeA1.split(":")[0] ?? "",
        endCell: sectionConfig.rangeA1.split(":")[1] ?? "",
        previewValues: [],
        error: preview.error,
      }
    );
    return;
  }

  console.log(
    `[records] ${label}`,
    {
      sheetName: sectionConfig.sheetName,
      startCell: preview.startCell,
      endCell: preview.endCell,
      previewValues: preview.values,
    }
  );
}

function createEmptyMessage(message) {
  const empty = document.createElement("div");
  empty.className = "page-empty";
  empty.textContent = message;
  return empty;
}

function renderLoadFailure() {
  PAGE_DEFINITIONS.forEach((page) => {
    const content = state.pageElements.get(page.id)?.content;
    if (!content) {
      return;
    }

    content.replaceChildren(createEmptyMessage("player-records.xlsx 파일을 불러오지 못했습니다."));
  });
}

function stringifyCell(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value);
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
