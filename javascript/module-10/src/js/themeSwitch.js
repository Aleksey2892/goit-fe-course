const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switchRef: document.querySelector('.js-switch-input'),
  bodyRef: document.querySelector('body'),
};

const themeSwitchHandler = () => {
  const checkedOn = refs.switchRef.checked;

  checkedOn ? darkOn() : darkOff(); //eslint-disable-line
};

refs.switchRef.addEventListener('change', themeSwitchHandler);

function darkOn() {
  const themeLightActive = refs.bodyRef.classList.contains(Theme.LIGHT);
  const replace = () => refs.bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
  const add = () => refs.bodyRef.classList.add(Theme.DARK);

  themeLightActive ? replace() : add(); //eslint-disable-line
  localStorage.setItem('theme', 'dark-theme');
}

function darkOff() {
  const themeDarkActive = refs.bodyRef.classList.contains(Theme.DARK);
  const replace = () => refs.bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
  const add = () => refs.bodyRef.classList.add(Theme.LIGHT);

  themeDarkActive ? replace() : add(); //eslint-disable-line
  localStorage.clear();
}

export default { Theme, refs, darkOn, darkOff };
