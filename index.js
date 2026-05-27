import{a as $,i as q,S as b,N as S,P as E,T as Q,A as K,b as W}from"./assets/vendor-CLpypK-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("js-burger-toggle"),t=document.getElementById("js-nav-menu"),s=document.body,o=document.querySelectorAll(".header__menu-link, .header__btn");if(!e||!t)return;function n(){const c=e.classList.toggle("active");t.classList.toggle("active"),s.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",c),e.setAttribute("aria-label",c?"Закрити меню навігації":"Відкрити меню навігації")}function i(){t.classList.contains("active")&&(e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("no-scroll"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Відкрити меню навігації"))}e.addEventListener("click",n),o.forEach(c=>{c.addEventListener("click",i)}),window.addEventListener("keydown",c=>{c.key==="Escape"&&i()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&i()})});const C="https://deserts-store.b.goit.study/api";function G(){document.querySelector(".loader-backdrop").classList.remove("is-hidden")}function J(){document.querySelector(".loader-backdrop").classList.add("is-hidden")}let I=null;const g=document.getElementById("overlay2"),X=document.getElementById("closeContactBtn"),l=document.getElementById("orderForm"),x=document.getElementById("successMsg"),d=document.getElementById("nameInput"),m=document.getElementById("phoneInput"),f=document.getElementById("commentInput");function p(e,t){const s=e.id.replace("Input",""),o=document.getElementById("group-"+s);t?(e.classList.add("is-invalid"),o==null||o.classList.add("has-error")):(e.classList.remove("is-invalid"),o==null||o.classList.remove("has-error"))}function Y(){[d,m,f].forEach(e=>p(e,!1))}[d,m,f].forEach(e=>{e.addEventListener("input",()=>p(e,!1))});function Z(e){return/^(\+?38)?0\d{9}$/.test(e.replace(/[\s\-()+]/g,""))}function ee(){let e=!0;return d.value.trim()||(p(d,!0),e=!1),Z(m.value.trim())||(p(m,!0),e=!1),f.value.trim()||(p(f,!0),e=!1),e}function te(e){I=e._id,l.reset(),Y(),l.style.display="block",x.style.display="none",g.classList.add("active"),document.body.style.overflow="hidden",d.focus(),document.addEventListener("keydown",P)}function k(){g.classList.remove("active"),document.body.style.overflow="",document.removeEventListener("keydown",P)}function P(e){e.key==="Escape"&&k()}g.addEventListener("click",e=>{e.target===g&&k()});X.addEventListener("click",k);l.addEventListener("submit",async e=>{if(e.preventDefault(),!ee()){const s=l.querySelector(".is-invalid");s==null||s.focus();return}const t=l.querySelector('[type="submit"]');t.disabled=!0;try{await $.post(`${C}/orders`,{name:d.value.trim(),phone:m.value.trim(),comment:f.value.trim(),dessertId:I}),l.style.display="none",x.style.display="block"}catch{q.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight",timeout:4e3})}finally{t.disabled=!1}});let L=null;const w=document.querySelector(".modal-dessert"),T=document.querySelector(".dessert-close"),A=document.querySelector(".dessert-order-btn");function se(){w.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",D),T.addEventListener("click",y),w.addEventListener("click",R),A.addEventListener("click",O)}function y(){w.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",D),T.removeEventListener("click",y),w.removeEventListener("click",R),A.removeEventListener("click",O)}function O(){y(),te(L)}async function H(e){document.querySelector(".dessert-img").src="",document.querySelector(".dessert-img").alt="",document.querySelector(".dessert-title").textContent="",document.querySelector(".dessert-price").textContent="",document.querySelector(".dessert-description").textContent="",document.querySelector(".dessert-ingredients").innerHTML="",document.querySelector(".dessert-rating").innerHTML="",L=null;try{G();const t=await re(e);L=t,ne(t),se()}catch{q.error({title:"Упс!",message:"Не вдалося завантажити інформацію. Спробуйте пізніше!",position:"topRight",timeout:4e3,transitionIn:"bounceInLeft",theme:"dark",backgroundColor:"#f19898",titleColor:"#080c0c",messageColor:"#080c0c",iconColor:"#080c0c"})}finally{J()}}function D(e){e.key==="Escape"&&y()}function R(e){e.target.classList.contains("dessert-overlay")&&y()}async function re(e){return(await $.get(`${C}/desserts/${e}`)).data}function ne(e){document.querySelector(".dessert-img").src=e.image,document.querySelector(".dessert-img").alt=e.name,document.querySelector(".dessert-title").textContent=e.name,document.querySelector(".dessert-price").textContent=`${e.price} грн`,document.querySelector(".dessert-description").textContent=e.description,document.querySelector(".dessert-ingredients").innerHTML=`<span class="dessert-ingredients-title">Склад</span>: ${e.composition}`,document.querySelector(".dessert-rating").innerHTML=oe(e.rate)}function oe(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="modal-stars">
      ${'<span class="modal-star modal-star-full">★</span>'.repeat(s)}
      ${o?'<span class="modal-star modal-star-half">★</span>':""}
      ${'<span class="modal-star modal-star-empty">★</span>'.repeat(n)}
    </div>
  `}const h=document.getElementById("popular-list");async function ae(){try{const e=await fetch("https://deserts-store.b.goit.study/api/desserts?page=1&limit=8&type=popular");if(!e.ok)throw new Error(`Помилка: ${e.status}`);return(await e.json()).desserts||[]}catch(e){return console.error("Помилка API:",e),[]}}function ie(e){var t;return`
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
  `}function ce(){new b(".popular-swiper",{modules:[S,E],slidesPerView:1,spaceBetween:20,pagination:{el:".popular-pagination",clickable:!0},navigation:{nextEl:".popular-next-btn",prevEl:".popular-prev-btn"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}})}function le(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}H(s)}async function de(){const e=await ae();e.length!==0&&h&&(h.innerHTML=e.map(ie).join(""),h.addEventListener("click",le),ce())}de();const r={sweetiesList:document.querySelector(".sweeties-list"),loadMoreBtn:document.querySelector(".sweeties-load-more-btn"),categoriesBox:document.querySelector(".sweeties-categories"),categorySelect:document.querySelector(".sweeties-select")},a={page:1,limit:8,totalItems:0,isLoading:!1,category:"all"};async function j(e={}){const t=new URLSearchParams({page:a.page,limit:a.limit,...e}),s=await fetch(`https://deserts-store.b.goit.study/api/desserts?${t}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}async function ue(){const e=await fetch("https://deserts-store.b.goit.study/api/categories");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}function pe({_id:e,name:t,description:s,price:o,category:n,image:i}){return`
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
  `}function _(e,t=!1){if(!r.sweetiesList)return;const s=e.map(pe).join("");if(t){r.sweetiesList.insertAdjacentHTML("beforeend",s);return}r.sweetiesList.innerHTML=s}function me(e,t=!1){return`
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
  `+e.map(o=>me(o)).join("");r.categoriesBox.innerHTML=s}function ye(e){if(!r.categorySelect)return;const t=[`<option value="all" ${a.category==="all"?"selected":""}>Всі десерти</option>`,...e.map(s=>`<option value="${s._id}" ${a.category===s._id?"selected":""}>${s.name}</option>`)];r.categorySelect.innerHTML=t.join(""),r.categorySelect.tomselect&&r.categorySelect.tomselect.destroy(),ge()}function ge(){if(!r.categorySelect)return;const e=new Q(r.categorySelect,{create:!1,allowEmptyOption:!1,controlInput:null,maxOptions:20,dropdownClass:"ts-dropdown sweeties-ts-dropdown"});e.on("change",()=>{setTimeout(()=>{e.blur()},0)})}function we(){return r.sweetiesList?r.sweetiesList.children.length:0}function F(){if(!r.loadMoreBtn)return;if(we()>=a.totalItems){r.loadMoreBtn.style.display="none";return}r.loadMoreBtn.style.display="block",r.loadMoreBtn.disabled=!1}function v(e){r.loadMoreBtn&&(r.loadMoreBtn.disabled=e,r.loadMoreBtn.textContent=e?"Завантаження...":"Завантажити ще")}async function ve(){try{const e=await ue();fe(e),ye(e),M()}catch(e){console.error("Failed to load categories:",e)}}async function B(){try{a.page=1,a.isLoading=!0,v(!0);const e=await j(V());a.totalItems=e.totalItems??0,_(e.desserts??[]),F()}catch(e){console.error("Failed to load initial desserts:",e)}finally{a.isLoading=!1,v(!1)}}async function he(){if(!a.isLoading)try{a.page+=1,a.isLoading=!0,v(!0);const e=await j(V());_(e.desserts??[],!0),F()}catch(e){console.error("Failed to load more desserts:",e),a.page-=1}finally{a.isLoading=!1,v(!1)}}function V(){const e={};return a.category!=="all"&&(e.category=a.category),e}async function Le(e){const t=e.target;t.type==="radio"&&(a.category=t.value,M(),await B())}async function be(e){a.category=e.target.value,M(),await B()}function M(){if(r.categoriesBox){const e=r.categoriesBox.querySelector(`input[name="dessert-category"][value="${a.category}"]`);e&&(e.checked=!0)}r.categorySelect&&(r.categorySelect.value=a.category,r.categorySelect.tomselect&&r.categorySelect.tomselect.setValue(a.category,!0))}function Se(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}H(s)}function Ee(){ve(),B(),r.loadMoreBtn&&r.loadMoreBtn.addEventListener("click",he),r.categoriesBox&&r.categoriesBox.addEventListener("change",Le),r.categorySelect&&r.categorySelect.addEventListener("change",be),r.sweetiesList&&r.sweetiesList.addEventListener("click",Se)}Ee();let u=null;const z=window.matchMedia("(min-width: 768px)");z.addEventListener("change",N);function N(e){e.matches?u||(u=new b(".about-us-swiper",{modules:[S,E,K],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev"},pagination:{el:".about-us-swiper .swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{delay:3e3},keyboard:!0})):u&&(u.destroy(!0,!0),u=null)}N(z);const U=document.querySelector(".reviews-list"),ke="https://deserts-store.b.goit.study/api";async function Be(){const e=await fetch(`${ke}/feedbacks`);if(!e.ok)throw new Error("Failed to fetch feedbacks");return e.json()}function Me(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),o=t%1!==0,n=5-s-(o?1:0);return`
    <div class="reviews-rating rating" aria-label="Рейтинг ${t} з 5">
      ${'<span class="reviews-star reviews-star-full">★</span>'.repeat(s)}
      ${o?'<span class="reviews-star reviews-star-half">★</span>':""}
      ${'<span class="reviews-star reviews-star-empty">★</span>'.repeat(n)}
    </div>
  `}function $e(e){const t=e.rating||e.rate||5,s=e.text||e.review||e.comment||e.message||e.description||e.descr||e.feedback||"",o=e.name||e.author||e.user||"Користувач";return`
    <li class="swiper-slide reviews-card">
      ${Me(t)}

      <p class="reviews-card-text">
        "${s}"
      </p>

      <h3 class="reviews-card-name">
        ${o}
      </h3>
    </li>
  `}function qe(e){U.innerHTML=e.map($e).join("")}function Ce(){new b(".reviews-swiper",{modules:[S,E],slidesPerView:1,spaceBetween:16,grabCursor:!0,watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},pagination:{el:".reviews-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1158:{slidesPerView:3,spaceBetween:32}}})}async function Ie(){try{const e=await Be();console.log(e);const t=Array.isArray(e)?e:e.feedbacks;if(!t)throw new Error("Feedbacks not found");const s=t.slice(0,10);qe(s),Ce()}catch(e){console.error(e),U.innerHTML=`
      <li class="reviews-error">
        Не вдалося завантажити відгуки. Спробуйте пізніше.
      </li>
    `}}Ie();new W(".accordion-container");const xe=document.querySelector(".accordion-container");xe.addEventListener("click",Pe);function Pe(e){const t=e.target.closest(".ac-trigger");if(!t)return;const s=t.querySelector(".ac-icon");if(!s)return;document.querySelectorAll(".ac-icon").forEach(n=>{n!==s&&n.classList.remove("onMove")}),s.classList.toggle("onMove")}
//# sourceMappingURL=index.js.map
