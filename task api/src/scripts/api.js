export const getRandomAnime = async () => {
    try {
        const response = await fetch('https://api.jikan.moe/v4/random/anime');
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return data.data;
    } catch (error) {
        console.error('Не получилось найти аниме:', error);
        return null;
    }
};

export const sendLike = async (animeId) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            animeId: animeId,
            reaction: 'like'
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data);
    }
    
    return data;
};