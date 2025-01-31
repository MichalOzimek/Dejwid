const tabs = document.querySelector(".tabs-component");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleClick(e) {
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  tabButtons.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });
  e.currentTarget.setAttribute("aria-selected", true);
  const { id } = e.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach((button) => button.addEventListener("click", handleClick));
