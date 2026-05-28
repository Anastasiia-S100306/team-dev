import{a as q,i as I,S,N as E,P as k,T as K,A as W,b as G}from"./assets/vendor-CLpypK-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("js-burger-toggle"),t=document.getElementById("js-nav-menu"),s=document.body,o=document.querySelectorAll(".header__menu-link, .header__btn");if(!e||!t)return;function n(){const c=e.classList.toggle("active");t.classList.toggle("active"),s.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",c),e.setAttribute("aria-label",c?"Закрити меню навігації":"Відкрити меню навігації")}function i(){t.classList.contains("active")&&(e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("no-scroll"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Відкрити меню навігації"))}e.addEventListener("click",n),o.forEach(c=>{c.addEventListener("click",i)}),window.addEventListener("keydown",c=>{c.key==="Escape"&&i()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&i()})});const C="https://deserts-store.b.goit.study/api";function J(){document.querySelector(".loader-backdrop").classList.remove("is-hidden")}function X(){document.querySelector(".loader-backdrop").classList.add("is-hidden")}let x=null;const w=document.getElementById("overlay2"),g=document.getElementById("closeContactBtn"),l=document.getElementById("orderForm"),P=document.getElementById("successMsg"),p=document.getElementById("nameInput"),m=document.getElementById("phoneInput"),f=document.getElementById("commentInput");function u(e,t){const s=e.id.replace("Input",""),o=document.getElementById("group-"+s);t?(e.classList.add("is-invalid"),o==null||o.classList.add("has-error")):(e.classList.remove("is-invalid"),o==null||o.classList.remove("has-error"))}function Y(){[p,m,f].forEach(e=>u(e,!1))}[p,m,f].forEach(e=>{e.addEventListener("input",()=>u(e,!1))});function Z(e){return/^(\+?38)?0\d{9}$/.test(e.replace(/[\s\-()+]/g,""))}function ee(){let e=!0;return p.value.trim()||(u(p,!0),e=!1),Z(m.value.trim())||(u(m,!0),e=!1),f.value.trim()||(u(f,!0),e=!1),e}function te(e){x=e._id,l.reset(),Y(),l.style.display="block",P.style.display="none",w.classList.add("active"),document.body.style.overflow="hidden",g==null||g.focus(),document.addEventListener("keydown",T)}function M(){w.classList.remove("active"),document.body.style.overflow="",document.removeEventListener("keydown",T)}function T(e){e.key==="Escape"&&M()}w.addEventListener("click",e=>{e.target===w&&M()});g.addEventListener("click",M);l.addEventListener("submit",async e=>{if(e.preventDefault(),!ee()){const s=l.querySelector(".is-invalid");s==null||s.focus();return}const t=l.querySelector('[type="submit"]');t.disabled=!0;try{await q.post(`${C}/orders`,{name:p.value.trim(),phone:m.value.trim(),comment:f.value.trim(),dessertId:x}),l.style.display="none",P.style.display="block"}catch{I.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight",timeout:4e3})}finally{t.disabled=!1}});let b=null;const v=document.querySelector(".modal-dessert"),A=document.querySelector(".dessert-close"),O=document.querySelector(".dessert-order-btn");function se(){v.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",R),A.addEventListener("click",y),v.addEventListener("click",j),O.addEventListener("click",H)}function y(){v.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",R),A.removeEventListener("click",y),v.removeEventListener("click",j),O.removeEventListener("click",H)}function H(){y(),te(b)}async function D(e){document.querySelector(".dessert-img").src="",document.querySelector(".dessert-img").alt="",document.querySelector(".dessert-title").textContent="",document.querySelector(".dessert-price").textContent="",document.querySelector(".dessert-description").textContent="",document.querySelector(".dessert-ingredients").innerHTML="",document.querySelector(".dessert-rating").innerHTML="",b=null;try{J();const t=await re(e);b=t,ne(t),se()}catch{I.error({title:"Упс!",message:"Не вдалося завантажити інформацію. Спробуйте пізніше!",position:"topRight",timeout:4e3,transitionIn:"bounceInLeft",theme:"dark",backgroundColor:"#f19898",titleColor:"#080c0c",messageColor:"#080c0c",iconColor:"#080c0c"})}finally{X()}}function R(e){e.key==="Escape"&&y()}function j(e){e.target.classList.contains("dessert-overlay")&&y()}async function re(e){return(await q.get(`${C}/desserts/${e}`)).data}function ne(e){document.querySelector(".dessert-img").src=e.image,document.querySelector(".dessert-img").alt=e.name,document.querySelector(".dessert-title").textContent=e.name,document.querySelector(".dessert-price").textContent=`${e.price} грн`,document.querySelector(".dessert-description").textContent=e.description,document.querySelector(".dessert-ingredients").innerHTML=`<span class="dessert-ingredients-title">Склад</span>: ${e.composition}`,document.querySelector(".dessert-rating").innerHTML=oe(e.rate)}function oe(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="modal-stars">
      ${'<span class="modal-star modal-star-full">★</span>'.repeat(s)}
      ${o?'<span class="modal-star modal-star-half">★</span>':""}
      ${'<span class="modal-star modal-star-empty">★</span>'.repeat(n)}
    </div>
  `}const L=document.getElementById("popular-list");async function ae(){try{const e=await fetch("https://deserts-store.b.goit.study/api/desserts?page=1&limit=8&type=popular");if(!e.ok)throw new Error(`Помилка: ${e.status}`);return(await e.json()).desserts||[]}catch(e){return console.error("Помилка API:",e),[]}}function ie(e){var t;return`
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
  `}function ce(){new S(".popular-swiper",{modules:[E,k],slidesPerView:1,spaceBetween:20,pagination:{el:".popular-pagination",clickable:!0},navigation:{nextEl:".popular-next-btn",prevEl:".popular-prev-btn"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}})}function le(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}D(s)}async function de(){const e=await ae();e.length!==0&&L&&(L.innerHTML=e.map(ie).join(""),L.addEventListener("click",le),ce())}de();const r={sweetiesList:document.querySelector(".sweeties-list"),loadMoreBtn:document.querySelector(".sweeties-load-more-btn"),categoriesBox:document.querySelector(".sweeties-categories"),categorySelect:document.querySelector(".sweeties-select")},a={page:1,limit:8,totalItems:0,isLoading:!1,category:"all"};async function _(e={}){const t=new URLSearchParams({page:a.page,limit:a.limit,...e}),s=await fetch(`https://deserts-store.b.goit.study/api/desserts?${t}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}async function ue(){const e=await fetch("https://deserts-store.b.goit.study/api/categories");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}function pe({_id:e,name:t,description:s,price:o,category:n,image:i}){return`
    <li class="sweeties-card" data-id="${e}">
      <img
        class="sweeties-card-image"
        src="${i}"
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
  `}function F(e,t=!1){if(!r.sweetiesList)return;const s=e.map(pe).join("");if(t){r.sweetiesList.insertAdjacentHTML("beforeend",s);return}r.sweetiesList.innerHTML=s}function me(e,t=!1){return`
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
  `}function fe(e){if(!r.categoriesBox)return;const s=`
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
  `+e.map(o=>me(o)).join("");r.categoriesBox.innerHTML=s}function ye(e){if(!r.categorySelect)return;const t=[`<option value="all" ${a.category==="all"?"selected":""}>Всі десерти</option>`,...e.map(s=>`<option value="${s._id}" ${a.category===s._id?"selected":""}>${s.name}</option>`)];r.categorySelect.innerHTML=t.join(""),r.categorySelect.tomselect&&r.categorySelect.tomselect.destroy(),ge()}function ge(){if(!r.categorySelect)return;const e=new K(r.categorySelect,{create:!1,allowEmptyOption:!1,controlInput:null,maxOptions:20,dropdownClass:"ts-dropdown sweeties-ts-dropdown"});e.on("change",()=>{setTimeout(()=>{e.blur()},0)})}function we(){return r.sweetiesList?r.sweetiesList.children.length:0}function V(){if(!r.loadMoreBtn)return;if(we()>=a.totalItems){r.loadMoreBtn.style.display="none";return}r.loadMoreBtn.style.display="block",r.loadMoreBtn.disabled=!1}function h(e){r.loadMoreBtn&&(r.loadMoreBtn.disabled=e,r.loadMoreBtn.textContent=e?"Завантаження...":"Завантажити ще")}async function ve(){try{const e=await ue();fe(e),ye(e),$()}catch(e){console.error("Failed to load categories:",e)}}async function B(){try{a.page=1,a.isLoading=!0,h(!0);const e=await _(z());a.totalItems=e.totalItems??0,F(e.desserts??[]),V()}catch(e){console.error("Failed to load initial desserts:",e)}finally{a.isLoading=!1,h(!1)}}async function he(){if(!a.isLoading)try{a.page+=1,a.isLoading=!0,h(!0);const e=await _(z());F(e.desserts??[],!0),V()}catch(e){console.error("Failed to load more desserts:",e),a.page-=1}finally{a.isLoading=!1,h(!1)}}function z(){const e={};return a.category!=="all"&&(e.category=a.category),e}async function Le(e){const t=e.target;t.type==="radio"&&(a.category=t.value,$(),await B())}async function be(e){a.category=e.target.value,$(),await B()}function $(){if(r.categoriesBox){const e=r.categoriesBox.querySelector(`input[name="dessert-category"][value="${a.category}"]`);e&&(e.checked=!0)}r.categorySelect&&(r.categorySelect.value=a.category,r.categorySelect.tomselect&&r.categorySelect.tomselect.setValue(a.category,!0))}function Se(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}D(s)}function Ee(){ve(),B(),r.loadMoreBtn&&r.loadMoreBtn.addEventListener("click",he),r.categoriesBox&&r.categoriesBox.addEventListener("change",Le),r.categorySelect&&r.categorySelect.addEventListener("change",be),r.sweetiesList&&r.sweetiesList.addEventListener("click",Se)}Ee();let d=null;const N=window.matchMedia("(min-width: 768px)");N.addEventListener("change",U);function U(e){e.matches?d||(d=new S(".about-us-swiper",{modules:[E,k,W],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev"},pagination:{el:".about-us-swiper .swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{delay:3e3},keyboard:!0})):d&&(d.destroy(!0,!0),d=null)}U(N);const Q=document.querySelector(".reviews-list"),ke="https://deserts-store.b.goit.study/api";async function Me(){const e=await fetch(`${ke}/feedbacks`);if(!e.ok)throw new Error("Failed to fetch feedbacks");return e.json()}function Be(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="reviews-rating rating" aria-label="Рейтинг ${t} з 5">
      ${'<span class="reviews-star reviews-star-full">★</span>'.repeat(s)}
      ${o?'<span class="reviews-star reviews-star-half">★</span>':""}
      ${'<span class="reviews-star reviews-star-empty">★</span>'.repeat(n)}
    </div>
  `}function $e(e){const t=e.rating||e.rate||5,s=e.text||e.review||e.comment||e.message||e.description||e.descr||e.feedback||"",o=e.name||e.author||e.user||"Користувач";return`
    <li class="swiper-slide reviews-card">
      ${Be(t)}

      <p class="reviews-card-text">
        "${s}"
      </p>

      <h3 class="reviews-card-name">
        ${o}
      </h3>
    </li>
  `}function qe(e){Q.innerHTML=e.map($e).join("")}function Ie(){new S(".reviews-swiper",{modules:[E,k],slidesPerView:1,spaceBetween:16,grabCursor:!0,watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},pagination:{el:".reviews-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1158:{slidesPerView:3,spaceBetween:32}}})}async function Ce(){try{const e=await Me();console.log(e);const t=Array.isArray(e)?e:e.feedbacks;if(!t)throw new Error("Feedbacks not found");const s=t.slice(0,10);qe(s),Ie()}catch(e){console.error(e),Q.innerHTML=`
      <li class="reviews-error">
        Не вдалося завантажити відгуки. Спробуйте пізніше.
      </li>
    `}}Ce();new G(".accordion-container");const xe=document.querySelector(".accordion-container");xe.addEventListener("click",Pe);function Pe(e){const t=e.target.closest(".ac-trigger");if(!t)return;const s=t.querySelector(".ac-icon");if(!s)return;document.querySelectorAll(".ac-icon").forEach(n=>{n!==s&&n.classList.remove("onMove")}),s.classList.toggle("onMove")}
//# sourceMappingURL=index.js.map
