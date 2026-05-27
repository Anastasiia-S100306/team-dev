import{i as u,a as S,S as v,N as h,P as L,T as j,A as _,b as F}from"./assets/vendor-CLpypK-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("js-burger-toggle"),t=document.getElementById("js-nav-menu"),s=document.body,o=document.querySelectorAll(".header__menu-link, .header__btn");if(!e||!t)return;function n(){const c=e.classList.toggle("active");t.classList.toggle("active"),s.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",c),e.setAttribute("aria-label",c?"Закрити меню навігації":"Відкрити меню навігації")}function a(){t.classList.contains("active")&&(e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("no-scroll"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Відкрити меню навігації"))}e.addEventListener("click",n),o.forEach(c=>{c.addEventListener("click",a)}),window.addEventListener("keydown",c=>{c.key==="Escape"&&a()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&a()})});const E="https://deserts-store.b.goit.study/api";function z(){document.querySelector(".loader-backdrop").classList.remove("is-hidden")}function N(){document.querySelector(".loader-backdrop").classList.add("is-hidden")}let k=null;const p=document.getElementById("overlay2"),V=document.getElementById("closeContactBtn"),U=document.getElementById("submitOrderBtn");function Q(e){k=e._id,document.getElementById("nameInput").value="",document.getElementById("phoneInput").value="",document.getElementById("commentInput").value="",document.getElementById("orderForm").style.display="block",document.getElementById("successMsg").style.display="none",p.classList.add("active"),document.body.style.overflow="hidden",document.addEventListener("keydown",B)}function f(){p.classList.remove("active"),document.body.style.overflow="",document.removeEventListener("keydown",B)}function B(e){e.key==="Escape"&&f()}p.addEventListener("click",e=>{e.target===p&&f()});V.addEventListener("click",f);U.addEventListener("click",K);async function K(){const e=document.getElementById("nameInput"),t=document.getElementById("phoneInput"),s=document.getElementById("commentInput");let o=!0;if([e,t,s].forEach(n=>{n.value.trim()?n.classList.remove("error"):(n.classList.add("error"),o=!1)}),!o){u.warning({title:"Увага!",message:"Будь ласка, заповніть всі поля форми.",position:"topRight",timeout:3e3});return}try{await S.post(`${E}/orders`,{name:e.value.trim(),phone:t.value.trim(),comment:s.value.trim(),dessertId:k}),u.success({title:"Успішно!",message:"Ваше замовлення прийнято. Ми зателефонуємо вам найближчим часом.",position:"topRight",timeout:4e3}),f()}catch{u.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight",timeout:4e3})}}let w=null;const m=document.querySelector(".modal-dessert"),M=document.querySelector(".dessert-close"),I=document.querySelector(".dessert-order-btn");function W(){m.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",q),M.addEventListener("click",d),m.addEventListener("click",x),I.addEventListener("click",$)}function d(){m.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",q),M.removeEventListener("click",d),m.removeEventListener("click",x),I.removeEventListener("click",$)}function $(){d(),Q(w)}async function C(e){document.querySelector(".dessert-img").src="",document.querySelector(".dessert-img").alt="",document.querySelector(".dessert-title").textContent="",document.querySelector(".dessert-price").textContent="",document.querySelector(".dessert-description").textContent="",document.querySelector(".dessert-ingredients").innerHTML="",document.querySelector(".dessert-rating").innerHTML="",w=null;try{z();const t=await G(e);w=t,J(t),W()}catch{u.error({title:"Упс!",message:"Не вдалося завантажити інформацію. Спробуйте пізніше!",position:"topRight",timeout:4e3,transitionIn:"bounceInLeft",theme:"dark",backgroundColor:"#f19898",titleColor:"#080c0c",messageColor:"#080c0c",iconColor:"#080c0c"})}finally{N()}}function q(e){e.key==="Escape"&&d()}function x(e){e.target.classList.contains("dessert-overlay")&&d()}async function G(e){return(await S.get(`${E}/desserts/${e}`)).data}function J(e){document.querySelector(".dessert-img").src=e.image,document.querySelector(".dessert-img").alt=e.name,document.querySelector(".dessert-title").textContent=e.name,document.querySelector(".dessert-price").textContent=`${e.price} грн`,document.querySelector(".dessert-description").textContent=e.description,document.querySelector(".dessert-ingredients").innerHTML=`<span class="dessert-ingredients-title">Склад</span>: ${e.composition}`,document.querySelector(".dessert-rating").innerHTML=X(e.rate)}function X(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="modal-stars">
      ${'<span class="modal-star modal-star-full">★</span>'.repeat(s)}
      ${o?'<span class="modal-star modal-star-half">★</span>':""}
      ${'<span class="modal-star modal-star-empty">★</span>'.repeat(n)}
    </div>
  `}const y=document.getElementById("popular-list");async function Y(){try{const e=await fetch("https://deserts-store.b.goit.study/api/desserts?page=1&limit=8&type=popular");if(!e.ok)throw new Error(`Помилка: ${e.status}`);return(await e.json()).desserts||[]}catch(e){return console.error("Помилка API:",e),[]}}function Z(e){var t;return`
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
  `}function ee(){new v(".popular-swiper",{modules:[h,L],slidesPerView:1,spaceBetween:20,pagination:{el:".popular-pagination",clickable:!0},navigation:{nextEl:".popular-next-btn",prevEl:".popular-prev-btn"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}})}function te(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}C(s)}async function se(){const e=await Y();e.length!==0&&y&&(y.innerHTML=e.map(Z).join(""),y.addEventListener("click",te),ee())}se();const r={sweetiesList:document.querySelector(".sweeties-list"),loadMoreBtn:document.querySelector(".sweeties-load-more-btn"),categoriesBox:document.querySelector(".sweeties-categories"),categorySelect:document.querySelector(".sweeties-select")},i={page:1,limit:8,totalItems:0,isLoading:!1,category:"all"};async function P(e={}){const t=new URLSearchParams({page:i.page,limit:i.limit,...e}),s=await fetch(`https://deserts-store.b.goit.study/api/desserts?${t}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}async function ne(){const e=await fetch("https://deserts-store.b.goit.study/api/categories");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}function re({_id:e,name:t,description:s,price:o,category:n,image:a}){return`
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
  `}function T(e,t=!1){if(!r.sweetiesList)return;const s=e.map(re).join("");if(t){r.sweetiesList.insertAdjacentHTML("beforeend",s);return}r.sweetiesList.innerHTML=s}function oe(e,t=!1){return`
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
  `}function ae(e){if(!r.categoriesBox)return;const s=`
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
  `+e.map(o=>oe(o)).join("");r.categoriesBox.innerHTML=s}function ie(e){if(!r.categorySelect)return;const t=['<option value="all" selected>Всі десерти</option>',...e.map(s=>`<option value="${s._id}">${s.name}</option>`)];r.categorySelect.innerHTML=t.join(""),r.categorySelect.tomselect&&r.categorySelect.tomselect.destroy(),ce()}function ce(){if(!r.categorySelect)return;const e=new j(r.categorySelect,{create:!1,allowEmptyOption:!1,controlInput:null,maxOptions:20,dropdownClass:"ts-dropdown sweeties-ts-dropdown"});e.on("change",()=>{setTimeout(()=>{e.blur()},0)})}function le(){return r.sweetiesList?r.sweetiesList.children.length:0}function O(){if(!r.loadMoreBtn)return;if(le()>=i.totalItems){r.loadMoreBtn.style.display="none";return}r.loadMoreBtn.style.display="block",r.loadMoreBtn.disabled=!1}function g(e){r.loadMoreBtn&&(r.loadMoreBtn.disabled=e,r.loadMoreBtn.textContent=e?"Завантаження...":"Завантажити ще")}async function de(){try{const e=await ne();ae(e),ie(e)}catch(e){console.error("Failed to load categories:",e)}}async function b(){try{i.page=1,i.isLoading=!0,g(!0);const e=await P(A());i.totalItems=e.totalItems??0,T(e.desserts??[]),O()}catch(e){console.error("Failed to load initial desserts:",e)}finally{i.isLoading=!1,g(!1)}}async function ue(){if(!i.isLoading)try{i.page+=1,i.isLoading=!0,g(!0);const e=await P(A());T(e.desserts??[],!0),O()}catch(e){console.error("Failed to load more desserts:",e),i.page-=1}finally{i.isLoading=!1,g(!1)}}function A(){const e={};return i.category!=="all"&&(e.category=i.category),e}async function pe(e){const t=e.target;t.type==="radio"&&(i.category=t.value,await b())}async function me(e){i.category=e.target.value,await b()}function ge(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}C(s)}function fe(){de(),b(),r.loadMoreBtn&&r.loadMoreBtn.addEventListener("click",ue),r.categoriesBox&&r.categoriesBox.addEventListener("change",pe),r.categorySelect&&r.categorySelect.addEventListener("change",me),r.sweetiesList&&r.sweetiesList.addEventListener("click",ge)}fe();let l=null;const H=window.matchMedia("(min-width: 768px)");H.addEventListener("change",R);function R(e){e.matches?l||(l=new v(".about-us-swiper",{modules:[h,L,_],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev"},pagination:{el:".about-us-swiper .swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{delay:3e3},keyboard:!0})):l&&(l.destroy(!0,!0),l=null)}R(H);const D=document.querySelector(".reviews-list"),ye="https://deserts-store.b.goit.study/api";async function we(){const e=await fetch(`${ye}/feedbacks`);if(!e.ok)throw new Error("Failed to fetch feedbacks");return e.json()}function ve(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="reviews-rating rating" aria-label="Рейтинг ${t} з 5">
      ${'<span class="reviews-star reviews-star-full">★</span>'.repeat(s)}
      ${o?'<span class="reviews-star reviews-star-half">★</span>':""}
      ${'<span class="reviews-star reviews-star-empty">★</span>'.repeat(n)}
    </div>
  `}function he(e){const t=e.rating||e.rate||5,s=e.text||e.review||e.comment||e.message||e.description||e.descr||e.feedback||"",o=e.name||e.author||e.user||"Користувач";return`
    <li class="swiper-slide reviews-card">
      ${ve(t)}

      <p class="reviews-card-text">
        "${s}"
      </p>

      <h3 class="reviews-card-name">
        ${o}
      </h3>
    </li>
  `}function Le(e){D.innerHTML=e.map(he).join("")}function be(){new v(".reviews-swiper",{modules:[h,L],slidesPerView:1,spaceBetween:16,grabCursor:!0,watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},pagination:{el:".reviews-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1158:{slidesPerView:3,spaceBetween:32}}})}async function Se(){try{const e=await we();console.log(e);const t=Array.isArray(e)?e:e.feedbacks;if(!t)throw new Error("Feedbacks not found");const s=t.slice(0,10);Le(s),be()}catch(e){console.error(e),D.innerHTML=`
      <li class="reviews-error">
        Не вдалося завантажити відгуки. Спробуйте пізніше.
      </li>
    `}}Se();new F(".accordion-container");const Ee=document.querySelector(".accordion-container");Ee.addEventListener("click",ke);function ke(e){const t=e.target.closest(".ac-trigger");if(!t)return;const s=t.querySelector(".ac-icon");if(!s)return;document.querySelectorAll(".ac-icon").forEach(n=>{n!==s&&n.classList.remove("onMove")}),s.classList.toggle("onMove")}
//# sourceMappingURL=index.js.map
