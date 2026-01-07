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
  showElementById("footer-section");
}

function bdToHomeButton() {
  hideElementById("roaming-header");
  hideElementById("bangladeshi-header");
  hideElementById("bd-menu");
  hideElementById("footer-section");
  showElementById("home-section");
  
}

function panAsianMenu() {
  hideElementById("home-section");
  showElementById("roaming-header");
  showElementById("footer-section");
}

