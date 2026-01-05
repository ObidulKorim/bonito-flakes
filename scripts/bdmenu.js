function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function bangladeshiMenu() {
  hideElementById("home-section");
  showElementById("roaming-header");
  showElementById("bangladeshi-header");
  showElementById("bd-menu");
}
