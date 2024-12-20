const initTime = Date.now();

addEventListener('load', () => {
    const loadingTime = Date.now() - initTime;
    const loadingContent = document.querySelector('#loading-time');
    loadingContent.textContent = "Загружен за " + loadingTime + " мс";
});
