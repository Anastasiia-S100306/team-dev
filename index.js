import{i as B,a as C,S as f,N as g,P as m,T as q,A as x,b as P}from"./assets/vendor-CLpypK-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("js-burger-toggle"),t=document.getElementById("js-nav-menu"),s=document.body,n=document.querySelectorAll(".header__menu-link, .header__btn");if(!e||!t)return;function a(){const c=e.classList.toggle("active");t.classList.toggle("active"),s.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",c),e.setAttribute("aria-label",c?"Закрити меню навігації":"Відкрити меню навігації")}function o(){t.classList.contains("active")&&(e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("no-scroll"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Відкрити меню навігації"))}e.addEventListener("click",a),n.forEach(c=>{c.addEventListener("click",o)}),window.addEventListener("keydown",c=>{c.key==="Escape"&&o()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&o()})});const I="https://deserts-store.b.goit.study/api";function T(){document.querySelector(".loader-backdrop").classList.remove("is-hidden")}function A(){document.querySelector(".loader-backdrop").classList.add("is-hidden")}const w=document.querySelector(".modal-dessert"),O=document.querySelector(".dessert-close"),H=document.querySelector(".dessert-order-btn");function j(){w.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",v)}function u(){w.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",v)}async function h(e){try{T();const t=await D(e);R(t),j()}catch{B.error({title:"Упс!",message:"Не вдалося завантажити інформацію. Спробуйте пізніше!",position:"topRight",timeout:4e3,transitionIn:"bounceInLeft",theme:"dark",backgroundColor:"#f19898",titleColor:"#080c0c",messageColor:"#080c0c",iconColor:"#080c0c"})}finally{A()}}O.addEventListener("click",u);function v(e){e.key==="Escape"&&u()}w.addEventListener("click",e=>{e.target.classList.contains("dessert-overlay")&&u()});H.addEventListener("click",()=>{u()});async function D(e){return(await C.get(`${I}/desserts/${e}`)).data}function R(e){document.querySelector(".dessert-img").src=e.image,document.querySelector(".dessert-img").alt=e.name,document.querySelector(".dessert-title").textContent=e.name,document.querySelector(".dessert-price").textContent=`${e.price} грн`,document.querySelector(".dessert-description").textContent=e.description,document.querySelector(".dessert-ingredients").innerHTML=`<span class="dessert-ingredients-title">Склад</span>: ${e.composition}`,document.querySelector(".dessert-rating").innerHTML=_(e.rate)}function _(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),n=t%1!==0,a=5-s-(n?1:0);return`
    <div class="modal-stars">
      ${'<span class="modal-star modal-star-full">★</span>'.repeat(s)}
      ${n?'<span class="modal-star modal-star-half">★</span>':""}
      ${'<span class="modal-star modal-star-empty">★</span>'.repeat(a)}
    </div>
  `}const p=document.getElementById("popular-list");async function F(){try{const e=await fetch("https://deserts-store.b.goit.study/api/desserts?page=1&limit=8&type=popular");if(!e.ok)throw new Error(`Помилка: ${e.status}`);return(await e.json()).desserts||[]}catch(e){return console.error("Помилка API:",e),[]}}function z(e){var t;return`
    <li class="swiper-slide">
      <div class="popular-card">
        <img src="${e.image}" alt="${e.name}" class="popular-card-image" />
        <div class="popular-card-text">
          <p class="popular-card-category">${((t=e.category)==null?void 0:t.name)||""}</p>
          <h3 class="popular-card-title">${e.name}</h3>
          <p class="popular-card-description">${e.description}</p>
          <div class="popular-card-bottom">
            <span class="popular-card-price">${e.price} грн</span>
            
            <button type="button" class="sweeties-card-btn" data-id="${e._id}" aria-label="Open dessert details">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path d="M21.72 10.4l-12.795 12.804c-0.202 0.209-0.484 0.339-0.797 0.339-0.001 0-0.002 0-0.003 0h0c-0.001 0-0.002 0-0.004 0-0.311 0-0.591-0.133-0.786-0.346l-0.001-0.001c-0.213-0.201-0.345-0.485-0.347-0.8v-0q0-0.452 0.347-0.8l12.795-12.793h-11.267c-0.008 0-0.017 0-0.027 0-0.308 0-0.587-0.126-0.788-0.33l-0-0c-0.203-0.201-0.328-0.479-0.328-0.787 0-0.009 0-0.019 0-0.028l-0 0.001q0-0.483 0.328-0.805c0.202-0.2 0.481-0.324 0.788-0.324 0.010 0 0.020 0 0.029 0l-0.001-0h14q0.48 0 0.808 0.328c0.202 0.199 0.327 0.475 0.327 0.78 0 0.010-0 0.020-0 0.030l0-0.001v14q0 0.48-0.328 0.808c-0.201 0.203-0.479 0.328-0.787 0.328-0.009 0-0.019-0-0.028-0l0.001 0c-0.010 0-0.021 0-0.032 0-0.306 0-0.583-0.126-0.781-0.328l-0-0c-0.2-0.2-0.324-0.477-0.324-0.783 0-0.009 0-0.018 0-0.027l-0 0.001z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  `}function N(){new f(".popular-swiper",{modules:[g,m],slidesPerView:1,spaceBetween:20,pagination:{el:".popular-pagination",clickable:!0},navigation:{nextEl:".popular-next-btn",prevEl:".popular-prev-btn"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}})}function V(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}h(s)}async function U(){const e=await F();e.length!==0&&p&&(p.innerHTML=e.map(z).join(""),p.addEventListener("click",V),N())}U();const r={sweetiesList:document.querySelector(".sweeties-list"),loadMoreBtn:document.querySelector(".sweeties-load-more-btn"),categoriesBox:document.querySelector(".sweeties-categories"),categorySelect:document.querySelector(".sweeties-select")},i={page:1,limit:8,totalItems:0,isLoading:!1,category:"all"};async function b(e={}){const t=new URLSearchParams({page:i.page,limit:i.limit,...e}),s=await fetch(`https://deserts-store.b.goit.study/api/desserts?${t}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}async function Q(){const e=await fetch("https://deserts-store.b.goit.study/api/categories");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}function K({_id:e,name:t,description:s,price:n,category:a,image:o}){return`
    <li class="sweeties-card" data-id="${e}">
      <img
        class="sweeties-card-image"
        src="${o}"
        alt="${t}"
        width="303"
        height="228"
        loading="lazy"
      />

      <div class="sweeties-card-text">
        <p class="sweeties-card-category">${a.name}</p>
        <h3 class="sweeties-card-title">${t}</h3>
        <p class="sweeties-card-description">${s}</p>

        <div class="sweeties-card-bottom">
          <p class="sweeties-card-price">${n} грн</p>

          <button class="sweeties-card-btn" type="button" data-id="${e}" aria-label="Open dessert details">
          <svg id="icon-arrow_outward" width="32" height="32" viewBox="0 0 32 32" x="432" y="0">
<path d="M21.72 10.4l-12.795 12.804c-0.202 0.209-0.484 0.339-0.797 0.339-0.001 0-0.002 0-0.003 0h0c-0.001 0-0.002 0-0.004 0-0.311 0-0.591-0.133-0.786-0.346l-0.001-0.001c-0.213-0.201-0.345-0.485-0.347-0.8v-0q0-0.452 0.347-0.8l12.795-12.793h-11.267c-0.008 0-0.017 0-0.027 0-0.308 0-0.587-0.126-0.788-0.33l-0-0c-0.203-0.201-0.328-0.479-0.328-0.787 0-0.009 0-0.019 0-0.028l-0 0.001q0-0.483 0.328-0.805c0.202-0.2 0.481-0.324 0.788-0.324 0.010 0 0.020 0 0.029 0l-0.001-0h14q0.48 0 0.808 0.328c0.202 0.199 0.327 0.475 0.327 0.78 0 0.010-0 0.020-0 0.030l0-0.001v14q0 0.48-0.328 0.808c-0.201 0.203-0.479 0.328-0.787 0.328-0.009 0-0.019-0-0.028-0l0.001 0c-0.010 0-0.021 0-0.032 0-0.306 0-0.583-0.126-0.781-0.328l-0-0c-0.2-0.2-0.324-0.477-0.324-0.783 0-0.009 0-0.018 0-0.027l-0 0.001z"></path>
</svg>
          </button>
        </div>
      </div>
    </li>
  `}function L(e,t=!1){if(!r.sweetiesList)return;const s=e.map(K).join("");if(t){r.sweetiesList.insertAdjacentHTML("beforeend",s);return}r.sweetiesList.innerHTML=s}function W(e,t=!1){return`
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
  `}function G(e){if(!r.categoriesBox)return;const s=`
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
  `+e.map(n=>W(n)).join("");r.categoriesBox.innerHTML=s}function J(e){if(!r.categorySelect)return;const t=['<option value="all" selected>Всі десерти</option>',...e.map(s=>`<option value="${s._id}">${s.name}</option>`)];r.categorySelect.innerHTML=t.join(""),r.categorySelect.tomselect&&r.categorySelect.tomselect.destroy(),X()}function X(){r.categorySelect&&new q(r.categorySelect,{create:!1,allowEmptyOption:!1,controlInput:null,maxOptions:20,dropdownClass:"ts-dropdown sweeties-ts-dropdown"})}function Y(){return r.sweetiesList?r.sweetiesList.children.length:0}function S(){if(!r.loadMoreBtn)return;if(Y()>=i.totalItems){r.loadMoreBtn.style.display="none";return}r.loadMoreBtn.style.display="block",r.loadMoreBtn.disabled=!1}function d(e){r.loadMoreBtn&&(r.loadMoreBtn.disabled=e,r.loadMoreBtn.textContent=e?"Завантаження...":"Завантажити ще")}async function Z(){try{const e=await Q();G(e),J(e)}catch(e){console.error("Failed to load categories:",e)}}async function y(){try{i.page=1,i.isLoading=!0,d(!0);const e=await b(k());i.totalItems=e.totalItems??0,L(e.desserts??[]),S()}catch(e){console.error("Failed to load initial desserts:",e)}finally{i.isLoading=!1,d(!1)}}async function ee(){if(!i.isLoading)try{i.page+=1,i.isLoading=!0,d(!0);const e=await b(k());L(e.desserts??[],!0),S()}catch(e){console.error("Failed to load more desserts:",e),i.page-=1}finally{i.isLoading=!1,d(!1)}}function k(){const e={};return i.category!=="all"&&(e.category=i.category),e}async function te(e){const t=e.target;t.type==="radio"&&(i.category=t.value,await y())}async function se(e){i.category=e.target.value,await y()}function re(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}h(s)}function ae(){Z(),y(),r.loadMoreBtn&&r.loadMoreBtn.addEventListener("click",ee),r.categoriesBox&&r.categoriesBox.addEventListener("change",te),r.categorySelect&&r.categorySelect.addEventListener("change",se),r.sweetiesList&&r.sweetiesList.addEventListener("click",re)}ae();let l=null;const M=window.matchMedia("(min-width: 768px)");M.addEventListener("change",E);function E(e){e.matches?l||(l=new f(".about-us-swiper",{modules:[g,m,x],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev"},pagination:{el:".about-us-swiper .swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{delay:3e3},keyboard:!0})):l&&(l.destroy(!0,!0),l=null)}E(M);const $=document.querySelector(".reviews-list"),ne="https://deserts-store.b.goit.study/api";async function oe(){const e=await fetch(`${ne}/feedbacks`);if(!e.ok)throw new Error("Failed to fetch feedbacks");return e.json()}function ie(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),n=t%1!==0,a=5-s-(n?1:0);return`
    <div class="reviews-rating rating" aria-label="Рейтинг ${t} з 5">
      ${'<span class="reviews-star reviews-star-full">★</span>'.repeat(s)}
      ${n?'<span class="reviews-star reviews-star-half">★</span>':""}
      ${'<span class="reviews-star reviews-star-empty">★</span>'.repeat(a)}
    </div>
  `}function ce(e){const t=e.rating||e.rate||5,s=e.text||e.review||e.comment||e.message||e.description||e.descr||e.feedback||"",n=e.name||e.author||e.user||"Користувач";return`
    <li class="swiper-slide reviews-card">
      ${ie(t)}

      <p class="reviews-card-text">
        "${s}"
      </p>

      <h3 class="reviews-card-name">
        ${n}
      </h3>
    </li>
  `}function le(e){$.innerHTML=e.map(ce).join("")}function de(){new f(".reviews-swiper",{modules:[g,m],slidesPerView:1,spaceBetween:16,grabCursor:!0,watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},pagination:{el:".reviews-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1158:{slidesPerView:3,spaceBetween:32}}})}async function ue(){try{const e=await oe();console.log(e);const t=Array.isArray(e)?e:e.feedbacks;if(!t)throw new Error("Feedbacks not found");const s=t.slice(0,10);le(s),de()}catch(e){console.error(e),$.innerHTML=`
      <li class="reviews-error">
        Не вдалося завантажити відгуки. Спробуйте пізніше.
      </li>
    `}}ue();new P(".accordion-container");const pe=document.querySelector(".accordion-container");pe.addEventListener("click",fe);function fe(e){const t=e.target.closest(".ac-trigger");if(!t)return;const s=t.querySelector(".ac-icon");if(!s)return;document.querySelectorAll(".ac-icon").forEach(a=>{a!==s&&a.classList.remove("onMove")}),s.classList.toggle("onMove")}
//# sourceMappingURL=index.js.map
