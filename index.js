import{a as I,i as P,S as M,N as B,P as $,T as J,A as X,b as Y}from"./assets/vendor-CLpypK-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("js-burger-toggle"),t=document.getElementById("js-nav-menu"),s=document.body,a=document.querySelectorAll(".header__menu-link, .header__btn");if(!e||!t)return;function n(){const c=e.classList.toggle("active");t.classList.toggle("active"),s.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",c),e.setAttribute("aria-label",c?"Закрити меню навігації":"Відкрити меню навігації")}function i(){t.classList.contains("active")&&(e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("no-scroll"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Відкрити меню навігації"))}e.addEventListener("click",n),a.forEach(c=>{c.addEventListener("click",i)}),window.addEventListener("keydown",c=>{c.key==="Escape"&&i()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&i()})});const L="https://deserts-store.b.goit.study/api",o={page:1,limit:8,totalItems:0,isLoading:!1,category:"all"};function Z(){document.querySelector(".loader-backdrop").classList.remove("is-hidden")}function ee(){document.querySelector(".loader-backdrop").classList.add("is-hidden")}let T=null;const v=document.getElementById("overlay2"),y=document.getElementById("closeContactBtn"),m=document.getElementById("orderForm"),A=document.getElementById("successMsg"),l=document.getElementById("nameInput"),d=document.getElementById("phoneInput"),u=document.getElementById("commentInput");function S(e,t){const s=e.closest(".form-group"),a=s==null?void 0:s.querySelector(".error-text");e.classList.add("is-invalid"),e.classList.remove("is-valid"),e.setAttribute("aria-invalid","true"),s==null||s.classList.add("has-error"),a&&(a.textContent=t)}function p(e){const t=e.closest(".form-group"),s=t==null?void 0:t.querySelector(".error-text");e.classList.remove("is-invalid"),e.removeAttribute("aria-invalid"),t==null||t.classList.remove("has-error"),s&&(s.textContent="")}function te(){[l,d,u].forEach(e=>{e.classList.remove("is-valid"),p(e)})}[l,d,u].forEach(e=>{e.addEventListener("input",()=>{const t=e.value.trim();if(t===""){e.classList.remove("is-valid"),p(e);return}e===l&&(t.length>=2&&t.length<=48?(p(e),e.classList.add("is-valid")):e.classList.remove("is-valid")),e===d&&(O(t)?(p(e),e.classList.add("is-valid")):e.classList.remove("is-valid")),e===u&&(t.length>=2&&t.length<=256?(p(e),e.classList.add("is-valid")):e.classList.remove("is-valid"))})});l.addEventListener("blur",b);d.addEventListener("blur",b);u.addEventListener("blur",b);function O(e){return/^\d{12}$/.test(e.trim())}function b(){let e=!0;const t=l.value.trim(),s=d.value.trim(),a=u.value.trim();return t.length<2||t.length>48?(S(l,"Ім'я повинно містити від 2 до 48 символів"),e=!1):(l.classList.add("is-valid"),p(l)),O(s)?(d.classList.add("is-valid"),p(d)):(S(d,"Номер телефону повинен містити 12 цифр"),e=!1),a.length<2||a.length>256?(S(u,"Коментар повинен містити від 2 до 256 символів"),e=!1):(u.classList.add("is-valid"),p(u)),e}function se(e){T=e._id,m.reset(),te(),m.style.display="block",A.style.display="none",v.classList.add("active"),document.body.style.overflow="hidden",y==null||y.focus(),document.addEventListener("keydown",H)}function q(){v.classList.remove("active"),document.body.style.overflow="",document.removeEventListener("keydown",H)}function H(e){e.key==="Escape"&&q()}v.addEventListener("click",e=>{e.target===v&&q()});y.addEventListener("click",q);m.addEventListener("submit",async e=>{if(e.preventDefault(),!b()){const s=m.querySelector(".is-invalid");s==null||s.focus();return}const t=m.querySelector('[type="submit"]');t.disabled=!0;try{await I.post(`${L}/orders`,{name:l.value.trim(),phone:d.value.trim(),comment:u.value.trim(),dessertId:T}),m.style.display="none",A.style.display="block"}catch{P.error({title:"Помилка!",message:"Не вдалося відправити замовлення. Спробуйте пізніше.",position:"topRight",timeout:4e3})}finally{t.disabled=!1}});let k=null;const w=document.querySelector(".modal-dessert"),D=document.querySelector(".dessert-close"),R=document.querySelector(".dessert-order-btn");function re(){w.classList.remove("is-hidden"),document.body.style.overflow="hidden",document.addEventListener("keydown",_),D.addEventListener("click",g),w.addEventListener("click",F),R.addEventListener("click",j)}function g(){w.classList.add("is-hidden"),document.body.style.overflow="",document.removeEventListener("keydown",_),D.removeEventListener("click",g),w.removeEventListener("click",F),R.removeEventListener("click",j)}function j(){g(),se(k)}async function V(e){document.querySelector(".dessert-img").src="",document.querySelector(".dessert-img").alt="",document.querySelector(".dessert-title").textContent="",document.querySelector(".dessert-price").textContent="",document.querySelector(".dessert-description").textContent="",document.querySelector(".dessert-ingredients").innerHTML="",document.querySelector(".dessert-rating").innerHTML="",k=null;try{Z();const t=await ne(e);k=t,ae(t),re()}catch{P.error({title:"Упс!",message:"Не вдалося завантажити інформацію. Спробуйте пізніше!",position:"topRight",timeout:4e3,transitionIn:"bounceInLeft",theme:"dark",backgroundColor:"#f19898",titleColor:"#080c0c",messageColor:"#080c0c",iconColor:"#080c0c"})}finally{ee()}}function _(e){e.key==="Escape"&&g()}function F(e){e.target.classList.contains("dessert-overlay")&&g()}async function ne(e){return(await I.get(`${L}/desserts/${e}`)).data}function ae(e){document.querySelector(".dessert-img").src=e.image,document.querySelector(".dessert-img").alt=e.name,document.querySelector(".dessert-title").textContent=e.name,document.querySelector(".dessert-price").textContent=`${e.price} грн`,document.querySelector(".dessert-description").textContent=e.description,document.querySelector(".dessert-ingredients").innerHTML=`<span class="dessert-ingredients-title">Склад</span>: ${e.composition}`,document.querySelector(".dessert-rating").innerHTML=oe(e.rate)}function oe(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),a=t%1!==0,n=5-s-(a?1:0);return`
    <div class="modal-stars">
      ${'<span class="modal-star modal-star-full">★</span>'.repeat(s)}
      ${a?'<span class="modal-star modal-star-half">★</span>':""}
      ${'<span class="modal-star modal-star-empty">★</span>'.repeat(n)}
    </div>
  `}const E=document.getElementById("popular-list");async function ie(){try{const e=await fetch("https://deserts-store.b.goit.study/api/desserts?page=1&limit=8&type=popular");if(!e.ok)throw new Error(`Помилка: ${e.status}`);return(await e.json()).desserts||[]}catch(e){return console.error("Помилка API:",e),[]}}function ce(e){var t;return`
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
  `}function le(){new M(".popular-swiper",{modules:[B,$],slidesPerView:1,spaceBetween:20,pagination:{el:".popular-pagination",clickable:!0},navigation:{nextEl:".popular-next-btn",prevEl:".popular-prev-btn"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:3,spaceBetween:24}}})}function de(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}V(s)}async function ue(){const e=await ie();e.length!==0&&E&&(E.innerHTML=e.map(ce).join(""),E.addEventListener("click",de),le())}ue();const r={sweetiesList:document.querySelector(".sweeties-list"),loadMoreBtn:document.querySelector(".sweeties-load-more-btn"),categoriesBox:document.querySelector(".sweeties-categories"),categorySelect:document.querySelector(".sweeties-select")};async function z(e={}){const t=new URLSearchParams({page:o.page,limit:o.limit,...e}),s=await fetch(`${L}/desserts?${t}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return s.json()}async function pe(){const e=await fetch(`${L}/categories`);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}function me({_id:e,name:t,description:s,price:a,category:n,image:i}){return`
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
          <p class="sweeties-card-price">${a} грн</p>
          <button class="sweeties-card-btn" type="button" data-id="${e}" aria-label="Відкрити деталі десерту">
            <svg id="icon-arrow_outward" width="32" height="32" viewBox="0 0 32 32">
              <path d="M21.72 10.4l-12.795 12.804c-0.202 0.209-0.484 0.339-0.797 0.339-0.001 0-0.002 0-0.003 0h0c-0.001 0-0.002 0-0.004 0-0.311 0-0.591-0.133-0.786-0.346l-0.001-0.001c-0.213-0.201-0.345-0.485-0.347-0.8v-0q0-0.452 0.347-0.8l12.795-12.793h-11.267c-0.008 0-0.017 0-0.027 0-0.308 0-0.587-0.126-0.788-0.33l-0-0c-0.203-0.201-0.328-0.479-0.328-0.787 0-0.009 0-0.019 0-0.028l-0 0.001q0-0.483 0.328-0.805c0.202-0.2 0.481-0.324 0.788-0.324 0.010 0 0.020 0 0.029 0l-0.001-0h14q0.48 0 0.808 0.328c0.202 0.199 0.327 0.475 0.327 0.78 0 0.010-0 0.020-0 0.030l0-0.001v14q0 0.48-0.328 0.808c-0.201 0.203-0.479 0.328-0.787 0.328-0.009 0-0.019-0-0.028-0l0.001 0c-0.010 0-0.021 0-0.032 0-0.306 0-0.583-0.126-0.781-0.328l-0-0c-0.2-0.2-0.324-0.477-0.324-0.783 0-0.009 0-0.018 0-0.027l-0 0.001z"></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `}function N(e,t=!1){if(!r.sweetiesList)return;const s=e.map(me).join("");if(t){r.sweetiesList.insertAdjacentHTML("beforeend",s);return}r.sweetiesList.innerHTML=s}function fe(e,t=!1){return`
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
  `}function ge(e){if(!r.categoriesBox)return;const s=`
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
  `+e.map(a=>fe(a)).join("");r.categoriesBox.innerHTML=s}function ye(e){if(!r.categorySelect)return;const t=[`<option value="all" ${o.category==="all"?"selected":""}>Всі десерти</option>`,...e.map(s=>`<option value="${s._id}" ${o.category===s._id?"selected":""}>${s.name}</option>`)];r.categorySelect.innerHTML=t.join(""),r.categorySelect.tomselect&&r.categorySelect.tomselect.destroy(),ve()}function ve(){r.categorySelect&&(r.categorySelect.tomselect=new J(r.categorySelect,{create:!1,allowEmptyOption:!1,controlInput:null,maxOptions:20,dropdownClass:"ts-dropdown sweeties-ts-dropdown"}),r.categorySelect.tomselect.on("change",()=>{setTimeout(()=>{r.categorySelect.tomselect.blur()},0)}))}function U(){const e={};return o.category!=="all"&&(e.category=o.category),e}function we(){return r.sweetiesList?r.sweetiesList.children.length:0}function Q(){if(!r.loadMoreBtn)return;if(we()>=o.totalItems){r.loadMoreBtn.style.display="none";return}r.loadMoreBtn.style.display="block",r.loadMoreBtn.disabled=!1}function h(e){r.loadMoreBtn&&(r.loadMoreBtn.disabled=e,r.loadMoreBtn.textContent=e?"Завантаження...":"Завантажити ще")}async function he(){try{const e=await pe();ge(e),ye(e),x()}catch(e){console.error("Failed to load categories:",e)}}async function C(){try{o.page=1,o.isLoading=!0,h(!0);const e=await z(U());o.totalItems=e.totalItems??0,N(e.desserts??[]),Q()}catch(e){console.error("Failed to load initial desserts:",e)}finally{o.isLoading=!1,h(!1)}}async function Le(){if(!o.isLoading)try{o.page+=1,o.isLoading=!0,h(!0);const e=await z(U());N(e.desserts??[],!0),Q()}catch(e){console.error("Failed to load more desserts:",e),o.page-=1}finally{o.isLoading=!1,h(!1)}}async function be(e){const t=e.target;t.type==="radio"&&(o.category=t.value,x(),await C())}async function Se(e){o.category=e.target.value,x(),await C()}function x(){if(r.categoriesBox){const e=r.categoriesBox.querySelector(`input[name="dessert-category"][value="${o.category}"]`);e&&(e.checked=!0)}r.categorySelect&&(r.categorySelect.value=o.category,r.categorySelect.tomselect&&r.categorySelect.tomselect.setValue(o.category,!0))}function Ee(e){const t=e.target.closest(".sweeties-card-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn("Dessert id is missing on button");return}V(s)}async function ke(){await he(),await C(),r.loadMoreBtn&&r.loadMoreBtn.addEventListener("click",Le),r.categoriesBox&&r.categoriesBox.addEventListener("change",be),r.categorySelect&&r.categorySelect.addEventListener("change",Se),r.sweetiesList&&r.sweetiesList.addEventListener("click",Ee)}ke();let f=null;const K=window.matchMedia("(min-width: 768px)");K.addEventListener("change",W);function W(e){e.matches?f||(f=new M(".about-us-swiper",{modules:[B,$,X],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-container .swiper-button-next",prevEl:".swiper-container .swiper-button-prev"},pagination:{el:".about-us-swiper .swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{delay:3e3},keyboard:!0})):f&&(f.destroy(!0,!0),f=null)}W(K);const G=document.querySelector(".reviews-list"),Me="https://deserts-store.b.goit.study/api";async function Be(){const e=await fetch(`${Me}/feedbacks`);if(!e.ok)throw new Error("Failed to fetch feedbacks");return e.json()}function $e(e){const t=Math.round(Number(e)*2)/2,s=Math.floor(t),a=t%1!==0,n=5-s-(a?1:0);return`
    <div class="reviews-rating rating" aria-label="Рейтинг ${t} з 5">
      ${'<span class="reviews-star reviews-star-full">★</span>'.repeat(s)}
      ${a?'<span class="reviews-star reviews-star-half">★</span>':""}
      ${'<span class="reviews-star reviews-star-empty">★</span>'.repeat(n)}
    </div>
  `}function qe(e){const t=e.rating||e.rate||5,s=e.text||e.review||e.comment||e.message||e.description||e.descr||e.feedback||"",a=e.name||e.author||e.user||"Користувач";return`
    <li class="swiper-slide reviews-card">
      ${$e(t)}

      <p class="reviews-card-text">
        "${s}"
      </p>

      <h3 class="reviews-card-name">
        ${a}
      </h3>
    </li>
  `}function Ce(e){G.innerHTML=e.map(qe).join("")}function xe(){new M(".reviews-swiper",{modules:[B,$],slidesPerView:1,spaceBetween:16,grabCursor:!0,watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},pagination:{el:".reviews-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1158:{slidesPerView:3,spaceBetween:32}}})}async function Ie(){try{const e=await Be();console.log(e);const t=Array.isArray(e)?e:e.feedbacks;if(!t)throw new Error("Feedbacks not found");const s=t.slice(0,10);Ce(s),xe()}catch(e){console.error(e),G.innerHTML=`
      <li class="reviews-error">
        Не вдалося завантажити відгуки. Спробуйте пізніше.
      </li>
    `}}Ie();new Y(".accordion-container");const Pe=document.querySelector(".accordion-container");Pe.addEventListener("click",Te);function Te(e){const t=e.target.closest(".ac-trigger");if(!t)return;const s=t.querySelector(".ac-icon");if(!s)return;document.querySelectorAll(".ac-icon").forEach(n=>{n!==s&&n.classList.remove("onMove")}),s.classList.toggle("onMove")}
//# sourceMappingURL=index.js.map
