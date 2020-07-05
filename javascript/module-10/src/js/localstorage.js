import { Theme, refs, darkOn } from './themeSwitch';

const applyTheme = () => {
  localStorage.clear();
  refs.switchRef.checked = true;
  darkOn();
};

try {
  const preloadTheme = localStorage.getItem('theme') === Theme.DARK;
  if (preloadTheme) applyTheme();
} catch (err) {
  console.error('Set state error: ', err);
}
