const content = document.getElementById("content");

function renderPage(page) {
  content.innerHTML = `<h2>${page}</h2>`;
}

function initNav() {
  const buttons = document.querySelectorAll("#nav button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = btn.dataset.page;
      console.log("click:", page);
      renderPage(page);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderPage("team2026");
});
