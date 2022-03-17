(function _tabs() {
  const tabs = document.querySelector('.tabs');
  if (!tabs) return;
  const tabsControl = tabs.querySelector('.tabs__control');
  const tabContentList = [...tabs.querySelectorAll('.tabs__tab')];
  const tabBtnList = [...tabs.querySelectorAll('[data-target]')];

  tabContentList[0].classList.add('active');
  tabBtnList[0].classList.add('active');

  tabsControl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-target]');
    const targetContent = btn?.dataset.target;
    if (!targetContent) return;

    tabBtnList.find((el) => el.classList.contains('active'))?.classList.remove('active');
    btn.classList.add('active');

    tabContentList.forEach((tab) => {
      if (tab.id === targetContent) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  });
}());
