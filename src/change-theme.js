const refs = {
    body: document.querySelector('body'),
    switchEl: document.querySelector('#theme-switch-toggle'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switchEl.addEventListener('change', onSwichClick)
refs.switchEl.addEventListener('change', localStorageSaveTheme)

function onSwichClick(e) {
const check = e.target.checked

    if (check) {
        refs.body.classList.add(Theme.DARK)
        refs.body.classList.remove(Theme.LIGHT)
    }
    else {
        refs.body.classList.remove(Theme.DARK)
        refs.body.classList.add(Theme.LIGHT)
    }
};

function localStorageSaveTheme (e) {
   const check = e.target.checked

    if (check) {
        localStorage.setItem('theme', Theme.DARK)  
    }
    else {
        localStorage.removeItem('theme', Theme.DARK)
        localStorage.setItem('theme', Theme.LIGHT) 
    }
}

function SaveSelectedTheme() {
    const localStorageItem = localStorage.getItem('theme')

    if (localStorageItem === Theme.DARK) {
        refs.body.classList.add(Theme.DARK);
        refs.switchEl.checked = true;
    }

}
SaveSelectedTheme();