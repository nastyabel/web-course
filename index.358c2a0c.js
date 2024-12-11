const t=async()=>{try{let t=await fetch("https://api.jikan.moe/v4/random/anime"),e=await t.json();if(!t.ok)throw Error(`\u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430}: ${t.status}`);return e.data}catch(t){return console.error("Не получилось найти аниме:",t),null}},e=async t=>{let e=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({animeId:t,reaction:"like"})}),n=await e.json();if(!e.ok)throw Error(n);return n},n=t=>{let n=document.querySelector("#anime-container");n.innerHTML="";let o=`
        <div class="anime">
            <h2>${t.title}</h2>
            <img src="${t.images.jpg.large_image_url}" alt="${t.title}" />
            <p><strong>Type:</strong> ${t.type}</p>
            <p><strong>Episodes:</strong> ${t.episodes}</p>
            <p><strong>Duration:</strong> ${t.duration}</p>
            <p><strong>Synopsis:</strong> ${t.synopsis}</p>
            <div class="actions">
                <button class="like-button" data-id="${t.mal_id}">\u{1F44D} \u{41B}\u{430}\u{439}\u{43A}</button>
            </div>
        </div>
    `;n.innerHTML=o;let i=n.querySelector(".like-button");i.addEventListener("click",()=>{e(i.getAttribute("data-id"))})},o=async()=>{n(await t())};document.addEventListener("DOMContentLoaded",()=>{o(),document.querySelector("#refresh-anime").addEventListener("click",o)});
//# sourceMappingURL=index.358c2a0c.js.map
