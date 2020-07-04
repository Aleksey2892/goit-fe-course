import themeSwitch from './themeSwitch';

try {
  const preloadTheme = localStorage.getItem('theme') === themeSwitch.Theme.DARK;
  const applyTheme = () => {
    localStorage.clear();
    themeSwitch.refs.switchRef.checked = true;
    themeSwitch.darkOn();
  };

  if (preloadTheme) applyTheme();
} catch (err) {
  console.error('Set state error: ', err);
}
