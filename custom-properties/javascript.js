function toggleTheme() {
    let root = document.documentElement;
    let themeName = document.querySelector('.theme-name');
    
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    document.querySelector('.theme-name').textContent = newTheme;
    // console.log(root);
}

let toggle = document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
