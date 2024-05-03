const myTextarea = document.getElementById('myTextarea');

window.onload = function() {
    const storedText = localStorage.getItem('autosave_text');
    if (storedText) {
        myTextarea.value = storedText;
    }
};

myTextarea.addEventListener('input', function() {
    localStorage.setItem('autosave_text', myTextarea.value);
});

function changeTheme(theme) {
    const body = document.body;
    const container = document.getElementById('themeContainer');

    if (theme === 'dark') {
        body.classList.add('dark'); 
        container.style.backgroundColor = '#333';
        container.style.color = '#fff'; 
    } else {
        body.classList.remove('dark'); 
        container.style.backgroundColor = '#fff'; 
        container.style.color = '#333'; 
    }
}