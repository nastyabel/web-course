import { fetchAndRenderAnime } from './anime.js';
document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderAnime();
    
    const refreshButton = document.querySelector('#refresh-anime');
    refreshButton.addEventListener('click', fetchAndRenderAnime);
});
