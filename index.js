import{a as d,S as p,i as l}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="57589880-91d2feb9d1ddc011e9b4ff177",y="https://pixabay.com/api/";function h(i){return d.get(y,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>(console.log("response",r.data),r.data))}const u=document.querySelector(".gallery"),a=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(){u.innerHTML=""}function v(){a&&a.classList.add("is-visible")}function q(){a&&a.classList.remove("is-visible")}function P(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${t}</p>
            <p class="info-item"><b>Views</b> ${s}</p>
            <p class="info-item"><b>Comments</b> ${f}</p>
            <p class="info-item"><b>Downloads</b> ${m}</p>
          </div>
        </li>
      `).join("");u.innerHTML=r,b.refresh()}const c=document.querySelector(".form");c.addEventListener("submit",i=>{i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(r===""){l.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}L(),v(),h(r).then(o=>{if(o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}P(o.hits)}).catch(()=>{l.error({title:"Error",message:"",position:"topRight"})}).finally(()=>{q(),c.reset()})});
//# sourceMappingURL=index.js.map
