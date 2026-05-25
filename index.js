import{T as M,S as f,N as p,P as w,A as S}from"./assets/vendor-D0Gu3XxZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("js-burger-toggle"),t=document.getElementById("js-nav-menu"),s=document.body,i=document.querySelectorAll(".header__menu-link, .header__btn");if(!e||!t)return;function o(){const c=e.classList.toggle("active");t.classList.toggle("active"),s.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",c),e.setAttribute("aria-label",c?"Закрити меню навігації":"Відкрити меню навігації")}function n(){t.classList.contains("active")&&(e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("no-scroll"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Відкрити меню навігації"))}e.addEventListener("click",o),i.forEach(c=>{c.addEventListener("click",n)}),window.addEventListener("keydown",c=>{c.key==="Escape"&&n()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&n()})});const r={sweetiesList:document.querySelector(".sweeties-list"),loadMoreBtn:document.querySelector(".sweeties-load-more-btn"),categoriesBox:document.querySelector(".sweeties-categories"),categorySelect:document.querySelector(".sweeties-select")},a={page:1,limit:8,totalItems:0,isLoading:!1,category:"all"};async function g(e={}){const t=new URLSearchParams({page:a.page,limit:a.limit,...e}),s=await fetch(`https://deserts-store.b.goit.study/api/desserts?${t}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}async function k(){const e=await fetch("https://deserts-store.b.goit.study/api/categories");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}function B({_id:e,name:t,description:s,price:i,category:o,image:n}){return`
    <li class="sweeties-card" data-id="${e}">
      <img
        class="sweeties-card-image"
        src="${n}"
        alt="${t}"
        width="303"
        height="228"
        loading="lazy"
      />

      <div class="sweeties-card-text">
        <p class="sweeties-card-category">${o.name}</p>
        <h3 class="sweeties-card-title">${t}</h3>
        <p class="sweeties-card-description">${s}</p>

        <div class="sweeties-card-bottom">
          <p class="sweeties-card-price">${i} грн</p>

          <button class="sweeties-card-btn" type="button" data-id="${e}" aria-label="Open dessert details">
          <svg width="24" height="24"><use href="/img/sprite.svg#icon-arrow_outward"></use></svg>
          </button>
        </div>
      </div>
    </li>
  `}function y(e,t=!1){if(!r.sweetiesList)return;const s=e.map(B).join("");if(t){r.sweetiesList.insertAdjacentHTML("beforeend",s);return}r.sweetiesList.innerHTML=s}function E(e,t=!1){return`
    <label>
      <input
        class="visually-hidden"
        type="radio"
        name="dessert-category"
        value="${e._id}"
        ${t?"checked":""}
      />
      <span class="sweeties-category-name">${e.name}</span>
    </label>
  `}function $(e){if(!r.categoriesBox)return;const s=`
    <label>
      <input
        class="visually-hidden"
        type="radio"
        name="dessert-category"
        value="all"
        checked
      />
      <span class="sweeties-category-name">Всі десерти</span>
    </label>
  `+e.map(i=>E(i)).join("");r.categoriesBox.innerHTML=s}function D(e){if(!r.categorySelect)return;const t=['<option value="all" selected>Всі десерти</option>',...e.map(s=>`<option value="${s._id}">${s.name}</option>`)];r.categorySelect.innerHTML=t.join(""),r.categorySelect.tomselect&&r.categorySelect.tomselect.destroy(),C()}function C(){r.categorySelect&&new M(r.categorySelect,{create:!1,allowEmptyOption:!1,controlInput:null,maxOptions:20,dropdownClass:"ts-dropdown sweeties-ts-dropdown"})}function x(){return r.sweetiesList?r.sweetiesList.children.length:0}function m(){if(!r.loadMoreBtn)return;if(x()>=a.totalItems){r.loadMoreBtn.style.display="none";return}r.loadMoreBtn.style.display="block",r.loadMoreBtn.disabled=!1}function d(e){r.loadMoreBtn&&(r.loadMoreBtn.disabled=e,r.loadMoreBtn.textContent=e?"Завантаження...":"Завантажити ще")}async function P(){try{const e=await k();$(e),D(e)}catch(e){console.error("Failed to load categories:",e)}console.log()}async function u(){try{a.page=1,a.isLoading=!0,d(!0);const e=await g(h());a.totalItems=e.totalItems??0,y(e.desserts??[]),m()}catch(e){console.error("Failed to load initial desserts:",e)}finally{a.isLoading=!1,d(!1)}}async function T(){if(!a.isLoading)try{a.page+=1,a.isLoading=!0,d(!0);const e=await g(h());y(e.desserts??[],!0),m()}catch(e){console.error("Failed to load more desserts:",e),a.page-=1}finally{a.isLoading=!1,d(!1)}}function h(){const e={};return a.category!=="all"&&(e.category=a.category),e}async function I(e){const t=e.target;t.type==="radio"&&(a.category=t.value,await u())}async function A(e){a.category=e.target.value,await u()}function O(e){console.log("click fired");const t=e.target.closest(".sweeties-card-btn");if(console.log("burtton:",t),!t)return;const s=t.dataset.id;console.log("dessertId:",s),typeof window.openDessertModal=="function"?window.openDessertModal(s):console.warn("openDessertModal function is not defined")}function j(){P(),u(),r.loadMoreBtn&&r.loadMoreBtn.addEventListener("click",T),r.categoriesBox&&r.categoriesBox.addEventListener("change",I),r.categorySelect&&r.categorySelect.addEventListener("change",A),r.sweetiesList&&r.sweetiesList.addEventListener("click",O)}async function H(e){const t=await fetch(`https://deserts-store.b.goit.study/api/desserts/${e}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}async function F(e){if(!e){console.warn("Dessert id is missing");return}try{const t=await H(e);if(typeof window.openDessertModalWithData=="function"){window.openDessertModalWithData(t);return}if(typeof window.renderDessertModal=="function"&&typeof window.showDessertModal=="function"){window.renderDessertModal(t),window.showDessertModal();return}console.warn("Modal API is not connected. Expected window.openDessertModalWithData(dessert) or window.renderDessertModal(dessert) + window.showDessertModal().")}catch(t){console.error("Failed to load dessert by id:",t)}}window.openDessertModal=F;j();let l=null;const v=window.matchMedia("(min-width: 768px)");v.addEventListener("change",b);function b(e){e.matches?l||(l=new f(".swiper",{modules:[p,w,S],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{delay:3e3},keyboard:!0})):l&&(l.destroy(!0,!0),l=null)}b(v);const L=document.querySelector(".reviews-list"),R="https://deserts-store.b.goit.study/api";async function q(){const e=await fetch(`${R}/feedbacks`);if(!e.ok)throw new Error("Failed to fetch feedbacks");return e.json()}function _(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),i=t%1!==0,o=5-s-(i?1:0);return`
    <div class="reviews-rating rating" aria-label="Рейтинг ${t} з 5">
      ${'<span class="reviews-star reviews-star-full">★</span>'.repeat(s)}
      ${i?'<span class="reviews-star reviews-star-half">★</span>':""}
      ${'<span class="reviews-star reviews-star-empty">★</span>'.repeat(o)}
    </div>
  `}function N(e){const t=e.rating||e.rate||5,s=e.text||e.review||e.comment||e.message||e.description||e.descr||e.feedback||"",i=e.name||e.author||e.user||"Користувач";return`
    <li class="swiper-slide reviews-card">
      ${_(t)}

      <p class="reviews-card-text">
        "${s}"
      </p>

      <h3 class="reviews-card-name">
        ${i}
      </h3>
    </li>
  `}function V(e){L.innerHTML=e.map(N).join("")}function W(){new f(".reviews-swiper",{modules:[p,w],slidesPerView:1,spaceBetween:16,grabCursor:!0,watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},pagination:{el:".reviews-pagination",clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1158:{slidesPerView:3,spaceBetween:32}}})}async function z(){try{const e=await q();console.log(e);const t=Array.isArray(e)?e:e.feedbacks;if(!t)throw new Error("Feedbacks not found");const s=t.slice(0,10);V(s),W()}catch(e){console.error(e),L.innerHTML=`
      <li class="reviews-error">
        Не вдалося завантажити відгуки. Спробуйте пізніше.
      </li>
    `}}z();
//# sourceMappingURL=index.js.map
