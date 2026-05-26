import{i as E,a as B,T as $,S as g,N as m,P as y,A as C,b as q}from"./assets/vendor-BE70wdfj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("js-burger-toggle"),t=document.getElementById("js-nav-menu"),s=document.body,o=document.querySelectorAll(".header__menu-link, .header__btn");if(!e||!t)return;function n(){const c=e.classList.toggle("active");t.classList.toggle("active"),s.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",c),e.setAttribute("aria-label",c?"Закрити меню навігації":"Відкрити меню навігації")}function a(){t.classList.contains("active")&&(e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("no-scroll"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Відкрити меню навігації"))}e.addEventListener("click",n),o.forEach(c=>{c.addEventListener("click",a)}),window.addEventListener("keydown",c=>{c.key==="Escape"&&a()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&a()})});const x="https://deserts-store.b.goit.study/api";function I(){document.querySelector(".loader-backdrop").classList.remove("is-hidden")}function T(){document.querySelector(".loader-backdrop").classList.add("is-hidden")}const p=document.querySelector(".modal-dessert"),P=document.querySelector(".dessert-close"),A=document.querySelector(".dessert-order-btn");function O(){p.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",w)}function u(){p.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",w)}async function H(e){try{I();const t=await R(e);j(t),O()}catch{E.error({title:"Упс!",message:"Не вдалося завантажити інформацію. Спробуйте пізніше!",position:"topRight",timeout:4e3,transitionIn:"bounceInLeft",theme:"dark",backgroundColor:"#f19898",titleColor:"#080c0c",messageColor:"#080c0c",iconColor:"#080c0c"})}finally{T()}}P.addEventListener("click",u);function w(e){e.key==="Escape"&&u()}p.addEventListener("click",e=>{e.target.classList.contains("dessert-overlay")&&u()});A.addEventListener("click",()=>{u()});async function R(e){return(await B.get(`${x}/desserts/${e}`)).data}function j(e){document.querySelector(".dessert-img").src=e.image,document.querySelector(".dessert-img").alt=e.name,document.querySelector(".dessert-title").textContent=e.name,document.querySelector(".dessert-price").textContent=`${e.price} грн`,document.querySelector(".dessert-description").textContent=e.description,document.querySelector(".dessert-ingredients").innerHTML=`<span class="dessert-ingredients-title">Склад</span>: ${e.composition}`,document.querySelector(".dessert-rating").innerHTML=D(e.rate)}function D(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="modal-stars">
      ${'<span class="modal-star modal-star-full">★</span>'.repeat(s)}
      ${o?'<span class="modal-star modal-star-half">★</span>':""}
      ${'<span class="modal-star modal-star-empty">★</span>'.repeat(n)}
    </div>
  `}const r={sweetiesList:document.querySelector(".sweeties-list"),loadMoreBtn:document.querySelector(".sweeties-load-more-btn"),categoriesBox:document.querySelector(".sweeties-categories"),categorySelect:document.querySelector(".sweeties-select")},i={page:1,limit:8,totalItems:0,isLoading:!1,category:"all"};async function h(e={}){const t=new URLSearchParams({page:i.page,limit:i.limit,...e}),s=await fetch(`https://deserts-store.b.goit.study/api/desserts?${t}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}async function F(){const e=await fetch("https://deserts-store.b.goit.study/api/categories");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}function _({_id:e,name:t,description:s,price:o,category:n,image:a}){return`
    <li class="sweeties-card" data-id="${e}">
      <img
        class="sweeties-card-image"
        src="${a}"
        alt="${t}"
        width="303"
        height="228"
        loading="lazy"
      />

      <div class="sweeties-card-text">
        <p class="sweeties-card-category">${n.name}</p>
        <h3 class="sweeties-card-title">${t}</h3>
        <p class="sweeties-card-description">${s}</p>

        <div class="sweeties-card-bottom">
          <p class="sweeties-card-price">${o} грн</p>

          <button class="sweeties-card-btn" type="button" data-id="${e}" aria-label="Open dessert details">
          <svg id="icon-arrow_outward" width="32" height="32" viewBox="0 0 32 32" x="432" y="0">
<path d="M21.72 10.4l-12.795 12.804c-0.202 0.209-0.484 0.339-0.797 0.339-0.001 0-0.002 0-0.003 0h0c-0.001 0-0.002 0-0.004 0-0.311 0-0.591-0.133-0.786-0.346l-0.001-0.001c-0.213-0.201-0.345-0.485-0.347-0.8v-0q0-0.452 0.347-0.8l12.795-12.793h-11.267c-0.008 0-0.017 0-0.027 0-0.308 0-0.587-0.126-0.788-0.33l-0-0c-0.203-0.201-0.328-0.479-0.328-0.787 0-0.009 0-0.019 0-0.028l-0 0.001q0-0.483 0.328-0.805c0.202-0.2 0.481-0.324 0.788-0.324 0.010 0 0.020 0 0.029 0l-0.001-0h14q0.48 0 0.808 0.328c0.202 0.199 0.327 0.475 0.327 0.78 0 0.010-0 0.020-0 0.030l0-0.001v14q0 0.48-0.328 0.808c-0.201 0.203-0.479 0.328-0.787 0.328-0.009 0-0.019-0-0.028-0l0.001 0c-0.010 0-0.021 0-0.032 0-0.306 0-0.583-0.126-0.781-0.328l-0-0c-0.2-0.2-0.324-0.477-0.324-0.783 0-0.009 0-0.018 0-0.027l-0 0.001z"></path>
</svg>
          </button>
        </div>
      </div>
    </li>
  `}function v(e,t=!1){if(!r.sweetiesList)return;const s=e.map(_).join("");if(t){r.sweetiesList.insertAdjacentHTML("beforeend",s);return}r.sweetiesList.innerHTML=s}function N(e,t=!1){return`
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
  `}function z(e){if(!r.categoriesBox)return;const s=`
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
  `+e.map(o=>N(o)).join("");r.categoriesBox.innerHTML=s}function V(e){if(!r.categorySelect)return;const t=['<option value="all" selected>Всі десерти</option>',...e.map(s=>`<option value="${s._id}">${s.name}</option>`)];r.categorySelect.innerHTML=t.join(""),r.categorySelect.tomselect&&r.categorySelect.tomselect.destroy(),U()}function U(){r.categorySelect&&new $(r.categorySelect,{create:!1,allowEmptyOption:!1,controlInput:null,maxOptions:20,dropdownClass:"ts-dropdown sweeties-ts-dropdown"})}function Q(){return r.sweetiesList?r.sweetiesList.children.length:0}function L(){if(!r.loadMoreBtn)return;if(Q()>=i.totalItems){r.loadMoreBtn.style.display="none";return}r.loadMoreBtn.style.display="block",r.loadMoreBtn.disabled=!1}function d(e){r.loadMoreBtn&&(r.loadMoreBtn.disabled=e,r.loadMoreBtn.textContent=e?"Завантаження...":"Завантажити ще")}async function K(){try{const e=await F();z(e),V(e)}catch(e){console.error("Failed to load categories:",e)}}async function f(){try{i.page=1,i.isLoading=!0,d(!0);const e=await h(b());i.totalItems=e.totalItems??0,v(e.desserts??[]),L()}catch(e){console.error("Failed to load initial desserts:",e)}finally{i.isLoading=!1,d(!1)}}async function W(){if(!i.isLoading)try{i.page+=1,i.isLoading=!0,d(!0);const e=await h(b());v(e.desserts??[],!0),L()}catch(e){console.error("Failed to load more desserts:",e),i.page-=1}finally{i.isLoading=!1,d(!1)}}function b(){const e={};return i.category!=="all"&&(e.category=i.category),e}async function G(e){const t=e.target;t.type==="radio"&&(i.category=t.value,await f())}async function J(e){i.category=e.target.value,await f()}function X(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}H(s)}function Y(){K(),f(),r.loadMoreBtn&&r.loadMoreBtn.addEventListener("click",W),r.categoriesBox&&r.categoriesBox.addEventListener("change",G),r.categorySelect&&r.categorySelect.addEventListener("change",J),r.sweetiesList&&r.sweetiesList.addEventListener("click",X)}Y();let l=null;const S=window.matchMedia("(min-width: 768px)");S.addEventListener("change",M);function M(e){e.matches?l||(l=new g(".swiper",{modules:[m,y,C],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{delay:3e3},keyboard:!0})):l&&(l.destroy(!0,!0),l=null)}M(S);const k=document.querySelector(".reviews-list"),Z="https://deserts-store.b.goit.study/api";async function ee(){const e=await fetch(`${Z}/feedbacks`);if(!e.ok)throw new Error("Failed to fetch feedbacks");return e.json()}function te(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="reviews-rating rating" aria-label="Рейтинг ${t} з 5">
      ${'<span class="reviews-star reviews-star-full">★</span>'.repeat(s)}
      ${o?'<span class="reviews-star reviews-star-half">★</span>':""}
      ${'<span class="reviews-star reviews-star-empty">★</span>'.repeat(n)}
    </div>
  `}function se(e){const t=e.rating||e.rate||5,s=e.text||e.review||e.comment||e.message||e.description||e.descr||e.feedback||"",o=e.name||e.author||e.user||"Користувач";return`
    <li class="swiper-slide reviews-card">
      ${te(t)}

      <p class="reviews-card-text">
        "${s}"
      </p>

      <h3 class="reviews-card-name">
        ${o}
      </h3>
    </li>
  `}function re(e){k.innerHTML=e.map(se).join("")}function ne(){new g(".reviews-swiper",{modules:[m,y],slidesPerView:1,spaceBetween:16,grabCursor:!0,watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},pagination:{el:".reviews-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1158:{slidesPerView:3,spaceBetween:32}}})}async function oe(){try{const e=await ee();console.log(e);const t=Array.isArray(e)?e:e.feedbacks;if(!t)throw new Error("Feedbacks not found");const s=t.slice(0,10);re(s),ne()}catch(e){console.error(e),k.innerHTML=`
      <li class="reviews-error">
        Не вдалося завантажити відгуки. Спробуйте пізніше.
      </li>
    `}}oe();new q(".accordion-container");const ae=document.querySelector(".accordion-container");ae.addEventListener("click",ie);function ie(e){const t=e.target.closest(".ac-trigger");if(!t)return;const s=t.querySelector(".ac-icon");if(!s)return;document.querySelectorAll(".ac-icon").forEach(n=>{n!==s&&n.classList.remove("onMove")}),s.classList.toggle("onMove")}
//# sourceMappingURL=index.js.map
