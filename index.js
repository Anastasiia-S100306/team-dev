import{i as d,a as E,S as w,N as v,P as h,T as A,A as R,b as D}from"./assets/vendor-CLpypK-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("js-burger-toggle"),t=document.getElementById("js-nav-menu"),s=document.body,o=document.querySelectorAll(".header__menu-link, .header__btn");if(!e||!t)return;function n(){const c=e.classList.toggle("active");t.classList.toggle("active"),s.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",c),e.setAttribute("aria-label",c?"Закрити меню навігації":"Відкрити меню навігації")}function a(){t.classList.contains("active")&&(e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("no-scroll"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Відкрити меню навігації"))}e.addEventListener("click",n),o.forEach(c=>{c.addEventListener("click",a)}),window.addEventListener("keydown",c=>{c.key==="Escape"&&a()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&a()})});const S="https://deserts-store.b.goit.study/api";function H(){document.querySelector(".loader-backdrop").classList.remove("is-hidden")}function j(){document.querySelector(".loader-backdrop").classList.add("is-hidden")}let k=null;const u=document.getElementById("overlay2"),_=document.getElementById("closeContactBtn"),F=document.getElementById("submitOrderBtn");function z(e){k=e._id,document.getElementById("nameInput").value="",document.getElementById("phoneInput").value="",document.getElementById("commentInput").value="",document.getElementById("orderForm").style.display="block",document.getElementById("successMsg").style.display="none",u.classList.add("active"),document.body.style.overflow="hidden",document.addEventListener("keydown",B)}function m(){u.classList.remove("active"),document.body.style.overflow="",document.removeEventListener("keydown",B)}function B(e){e.key==="Escape"&&m()}u.addEventListener("click",e=>{e.target===u&&m()});_.addEventListener("click",m);F.addEventListener("click",N);async function N(){const e=document.getElementById("nameInput"),t=document.getElementById("phoneInput"),s=document.getElementById("commentInput");let o=!0;if([e,t,s].forEach(n=>{n.value.trim()?n.classList.remove("error"):(n.classList.add("error"),o=!1)}),!o){d.warning({title:"Увага!",message:"Будь ласка, заповніть всі поля форми.",position:"topRight",timeout:3e3});return}try{await E.post(`${S}/orders`,{name:e.value.trim(),phone:t.value.trim(),comment:s.value.trim(),dessertId:k}),d.success({title:"Успішно!",message:"Ваше замовлення прийнято. Ми зателефонуємо вам найближчим часом.",position:"topRight",timeout:4e3}),m()}catch{d.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight",timeout:4e3})}}let y=null;const b=document.querySelector(".modal-dessert"),V=document.querySelector(".dessert-close"),U=document.querySelector(".dessert-order-btn");function Q(){b.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",I)}function f(){b.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",I)}async function M(e){y=e;try{H();const t=await K(e);y=t,W(t),Q()}catch{d.error({title:"Упс!",message:"Не вдалося завантажити інформацію. Спробуйте пізніше!",position:"topRight",timeout:4e3,transitionIn:"bounceInLeft",theme:"dark",backgroundColor:"#f19898",titleColor:"#080c0c",messageColor:"#080c0c",iconColor:"#080c0c"})}finally{j()}}V.addEventListener("click",f);function I(e){e.key==="Escape"&&f()}b.addEventListener("click",e=>{e.target.classList.contains("dessert-overlay")&&f()});U.addEventListener("click",()=>{f(),z(y)});async function K(e){return(await E.get(`${S}/desserts/${e}`)).data}function W(e){document.querySelector(".dessert-img").src=e.image,document.querySelector(".dessert-img").alt=e.name,document.querySelector(".dessert-title").textContent=e.name,document.querySelector(".dessert-price").textContent=`${e.price} грн`,document.querySelector(".dessert-description").textContent=e.description,document.querySelector(".dessert-ingredients").innerHTML=`<span class="dessert-ingredients-title">Склад</span>: ${e.composition}`,document.querySelector(".dessert-rating").innerHTML=G(e.rate)}function G(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="modal-stars">
      ${'<span class="modal-star modal-star-full">★</span>'.repeat(s)}
      ${o?'<span class="modal-star modal-star-half">★</span>':""}
      ${'<span class="modal-star modal-star-empty">★</span>'.repeat(n)}
    </div>
  `}const g=document.getElementById("popular-list");async function J(){try{const e=await fetch("https://deserts-store.b.goit.study/api/desserts?page=1&limit=8&type=popular");if(!e.ok)throw new Error(`Помилка: ${e.status}`);return(await e.json()).desserts||[]}catch(e){return console.error("Помилка API:",e),[]}}function X(e){var t;return`
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
  `}function Y(){new w(".popular-swiper",{modules:[v,h],slidesPerView:1,spaceBetween:20,pagination:{el:".popular-pagination",clickable:!0},navigation:{nextEl:".popular-next-btn",prevEl:".popular-prev-btn"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}})}function Z(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}M(s)}async function ee(){const e=await J();e.length!==0&&g&&(g.innerHTML=e.map(X).join(""),g.addEventListener("click",Z),Y())}ee();const r={sweetiesList:document.querySelector(".sweeties-list"),loadMoreBtn:document.querySelector(".sweeties-load-more-btn"),categoriesBox:document.querySelector(".sweeties-categories"),categorySelect:document.querySelector(".sweeties-select")},i={page:1,limit:8,totalItems:0,isLoading:!1,category:"all"};async function $(e={}){const t=new URLSearchParams({page:i.page,limit:i.limit,...e}),s=await fetch(`https://deserts-store.b.goit.study/api/desserts?${t}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}async function te(){const e=await fetch("https://deserts-store.b.goit.study/api/categories");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}function se({_id:e,name:t,description:s,price:o,category:n,image:a}){return`
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
  `}function C(e,t=!1){if(!r.sweetiesList)return;const s=e.map(se).join("");if(t){r.sweetiesList.insertAdjacentHTML("beforeend",s);return}r.sweetiesList.innerHTML=s}function ne(e,t=!1){return`
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
  `}function re(e){if(!r.categoriesBox)return;const s=`
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
  `+e.map(o=>ne(o)).join("");r.categoriesBox.innerHTML=s}function oe(e){if(!r.categorySelect)return;const t=['<option value="all" selected>Всі десерти</option>',...e.map(s=>`<option value="${s._id}">${s.name}</option>`)];r.categorySelect.innerHTML=t.join(""),r.categorySelect.tomselect&&r.categorySelect.tomselect.destroy(),ae()}function ae(){if(!r.categorySelect)return;const e=new A(r.categorySelect,{create:!1,allowEmptyOption:!1,controlInput:null,maxOptions:20,dropdownClass:"ts-dropdown sweeties-ts-dropdown"});e.on("change",()=>{setTimeout(()=>{e.blur()},0)})}function ie(){return r.sweetiesList?r.sweetiesList.children.length:0}function q(){if(!r.loadMoreBtn)return;if(ie()>=i.totalItems){r.loadMoreBtn.style.display="none";return}r.loadMoreBtn.style.display="block",r.loadMoreBtn.disabled=!1}function p(e){r.loadMoreBtn&&(r.loadMoreBtn.disabled=e,r.loadMoreBtn.textContent=e?"Завантаження...":"Завантажити ще")}async function ce(){try{const e=await te();re(e),oe(e)}catch(e){console.error("Failed to load categories:",e)}}async function L(){try{i.page=1,i.isLoading=!0,p(!0);const e=await $(x());i.totalItems=e.totalItems??0,C(e.desserts??[]),q()}catch(e){console.error("Failed to load initial desserts:",e)}finally{i.isLoading=!1,p(!1)}}async function le(){if(!i.isLoading)try{i.page+=1,i.isLoading=!0,p(!0);const e=await $(x());C(e.desserts??[],!0),q()}catch(e){console.error("Failed to load more desserts:",e),i.page-=1}finally{i.isLoading=!1,p(!1)}}function x(){const e={};return i.category!=="all"&&(e.category=i.category),e}async function de(e){const t=e.target;t.type==="radio"&&(i.category=t.value,await L())}async function ue(e){i.category=e.target.value,await L()}function pe(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}M(s)}function me(){ce(),L(),r.loadMoreBtn&&r.loadMoreBtn.addEventListener("click",le),r.categoriesBox&&r.categoriesBox.addEventListener("change",de),r.categorySelect&&r.categorySelect.addEventListener("change",ue),r.sweetiesList&&r.sweetiesList.addEventListener("click",pe)}me();let l=null;const P=window.matchMedia("(min-width: 768px)");P.addEventListener("change",O);function O(e){e.matches?l||(l=new w(".about-us-swiper",{modules:[v,h,R],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev"},pagination:{el:".about-us-swiper .swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{delay:3e3},keyboard:!0})):l&&(l.destroy(!0,!0),l=null)}O(P);const T=document.querySelector(".reviews-list"),fe="https://deserts-store.b.goit.study/api";async function ge(){const e=await fetch(`${fe}/feedbacks`);if(!e.ok)throw new Error("Failed to fetch feedbacks");return e.json()}function ye(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="reviews-rating rating" aria-label="Рейтинг ${t} з 5">
      ${'<span class="reviews-star reviews-star-full">★</span>'.repeat(s)}
      ${o?'<span class="reviews-star reviews-star-half">★</span>':""}
      ${'<span class="reviews-star reviews-star-empty">★</span>'.repeat(n)}
    </div>
  `}function we(e){const t=e.rating||e.rate||5,s=e.text||e.review||e.comment||e.message||e.description||e.descr||e.feedback||"",o=e.name||e.author||e.user||"Користувач";return`
    <li class="swiper-slide reviews-card">
      ${ye(t)}

      <p class="reviews-card-text">
        "${s}"
      </p>

      <h3 class="reviews-card-name">
        ${o}
      </h3>
    </li>
  `}function ve(e){T.innerHTML=e.map(we).join("")}function he(){new w(".reviews-swiper",{modules:[v,h],slidesPerView:1,spaceBetween:16,grabCursor:!0,watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},pagination:{el:".reviews-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1158:{slidesPerView:3,spaceBetween:32}}})}async function be(){try{const e=await ge();console.log(e);const t=Array.isArray(e)?e:e.feedbacks;if(!t)throw new Error("Feedbacks not found");const s=t.slice(0,10);ve(s),he()}catch(e){console.error(e),T.innerHTML=`
      <li class="reviews-error">
        Не вдалося завантажити відгуки. Спробуйте пізніше.
      </li>
    `}}be();new D(".accordion-container");const Le=document.querySelector(".accordion-container");Le.addEventListener("click",Ee);function Ee(e){const t=e.target.closest(".ac-trigger");if(!t)return;const s=t.querySelector(".ac-icon");if(!s)return;document.querySelectorAll(".ac-icon").forEach(n=>{n!==s&&n.classList.remove("onMove")}),s.classList.toggle("onMove")}
//# sourceMappingURL=index.js.map
