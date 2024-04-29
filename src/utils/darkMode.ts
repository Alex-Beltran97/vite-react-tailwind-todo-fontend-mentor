// On page load or when changing themes, best to add inline in `head` to avoid FOUC

const themeExist = ('theme' in localStorage);
const themeIsDark = localStorage.theme === 'dark';
const globalIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches && !themeExist;

const hasThemeAndIsDark = themeExist && themeIsDark;

if (hasThemeAndIsDark || globalIsDark) {
  document.documentElement.classList.add('dark');
  localStorage.theme = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light';
}