// Bootstrap.
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Menu.
function disableOverflow()
{
  const button = document.getElementById("main-menu-icon");

  if (button.classList.contains('collapsed')) {
    document.body.style.overflowY = '';
  } else {
    document.body.style.overflowY = 'hidden';
  }
}

// highlight.js
hljs.highlightAll();
hljs.initLineNumbersOnLoad();
hljs.addPlugin(new CopyButtonPlugin());
