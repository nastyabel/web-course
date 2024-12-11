import { getRandomAnime, sendLike } from './api.js';

const renderAnime = (anime) => {
    const container = document.querySelector('#anime-container');
    container.innerHTML = '';
    const animeHTML = `
        <div class="anime">
            <h2>${anime.title}</h2>
            <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}" />
            <p><strong>Type:</strong> ${anime.type}</p>
            <p><strong>Episodes:</strong> ${anime.episodes}</p>
            <p><strong>Duration:</strong> ${anime.duration}</p>
            <p><strong>Synopsis:</strong> ${anime.synopsis}</p>
            <div class="actions">
                <button class="like-button" data-id="${anime.mal_id}">👍 Лайк</button>
            </div>
        </div>
    `;
    container.innerHTML = animeHTML;

    const likeButton = container.querySelector('.like-button');
    likeButton.addEventListener('click', () => {
        const id = likeButton.getAttribute('data-id');
        sendLike(id);
    });
};

export const fetchAndRenderAnime = async () => {
    const anime = await getRandomAnime();
    renderAnime(anime);
};
