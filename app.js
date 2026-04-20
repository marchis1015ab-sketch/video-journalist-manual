// Page interactions for the public field manual.
document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("#navMenu");
  const navLinks = Array.from(document.querySelectorAll(".nav-menu a"));
  const sections = Array.from(document.querySelectorAll("[data-nav-section]"));
  const keyModeToggle = document.querySelector("#keyModeToggle");
  const printButton = document.querySelector("#printButton");
  const toTopButton = document.querySelector("#toTop");
  const filterButtons = Array.from(document.querySelectorAll("[data-equipment-filter]"));
  const equipmentCards = Array.from(document.querySelectorAll("[data-equipment-type]"));

  const workItems = [
    ["일반근무", "통상 주간 근무로 일상 취재, 리포트 촬영, 정례 브리핑 대응을 중심으로 합니다."],
    ["조근", "이른 시간대 근무로 아침 뉴스, 새벽 이동, 출근길 현장, 오전 브리핑에 대응합니다."],
    ["연장", "기본 근무 이후 돌발 상황, 추가 촬영, 현장 대기, 후속 인터뷰를 담당합니다."],
    ["석근", "오후부터 야간까지 저녁 뉴스, 야간 현장, 마감 직전 영상 확보에 대응합니다."],
    ["철야", "사건, 재난, 선거, 대형 이슈에 장시간 대응하며 안전과 전원, 교대 기준을 함께 확인합니다.", true],
    ["당일 출장", "당일 복귀를 전제로 외부 지역 핵심 장면을 우선 확보하고 송출 가능성을 점검합니다."],
    ["출장", "1박 이상 일정에서는 숙박, 배터리, 백업 매체, 통신 환경을 사전에 준비합니다."],
    ["해외 출장", "비자, 통관, 전원 규격, 통신망, 안전 계획까지 촬영 외 조건을 함께 관리합니다.", true]
  ];

  function getNavOffset() {
    return nav ? nav.getBoundingClientRect().height + 14 : 0;
  }

  function closeMobileMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  function scrollToTarget(target) {
    const top = target.getBoundingClientRect().top + window.scrollY - getNavOffset();
    window.scrollTo({ top, behavior: "smooth" });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      closeMobileMenu();
      scrollToTarget(target);
      history.replaceState(null, "", id);
    });
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const activeLink = navLinks.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
      navLinks.forEach((link) => link.classList.toggle("is-active", link === activeLink));
    });
  }, {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0.01
  });

  sections.forEach((section) => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.08
  });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  if (keyModeToggle) {
    keyModeToggle.addEventListener("click", () => {
      const isPressed = keyModeToggle.getAttribute("aria-pressed") === "true";
      keyModeToggle.setAttribute("aria-pressed", String(!isPressed));
      keyModeToggle.textContent = isPressed ? "핵심만 보기" : "전체 보기";
      body.classList.toggle("key-mode", !isPressed);
    });
  }

  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }

  if (toTopButton) {
    toTopButton.addEventListener("click", () => scrollToTarget(document.querySelector("#top")));
    window.addEventListener("scroll", () => {
      toTopButton.classList.toggle("is-visible", window.scrollY > 640);
    }, { passive: true });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.equipmentFilter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      equipmentCards.forEach((card) => {
        card.classList.toggle("is-hidden", filter !== "all" && card.dataset.equipmentType !== filter);
      });
    });
  });

  const accordionRoot = document.querySelector("[data-accordion-group]");
  if (accordionRoot) {
    accordionRoot.innerHTML = workItems.map(([title, text, accent], index) => `
      <article class="accordion-item${accent ? " is-accent" : ""}">
        <button type="button" id="work-accordion-${index}" aria-expanded="false" aria-controls="work-panel-${index}">${title}</button>
        <div class="accordion-panel" id="work-panel-${index}" role="region" aria-labelledby="work-accordion-${index}">
          <div><p>${text}</p></div>
        </div>
      </article>
    `).join("");

    accordionRoot.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      const item = button.closest(".accordion-item");
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
});
