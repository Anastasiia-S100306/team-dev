import{S as c,N as l,P as d,A as m}from"./assets/vendor-t7WttOuz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("js-burger-toggle"),s=document.getElementById("js-nav-menu"),r=document.body,a=document.querySelectorAll(".header__menu-link, .header__btn");if(!e||!s)return;function t(){const i=e.classList.toggle("active");s.classList.toggle("active"),r.classList.toggle("no-scroll"),e.setAttribute("aria-expanded",i),e.setAttribute("aria-label",i?"Закрити меню навігації":"Відкрити меню навігації")}function n(){s.classList.contains("active")&&(e.classList.remove("active"),s.classList.remove("active"),r.classList.remove("no-scroll"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Відкрити меню навігації"))}e.addEventListener("click",t),a.forEach(i=>{i.addEventListener("click",n)}),window.addEventListener("keydown",i=>{i.key==="Escape"&&n()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&n()})});let o=null;const u=window.matchMedia("(min-width: 768px)");u.addEventListener("change",f);function f(e){e.matches?o||(o=new c(".swiper",{modules:[l,d,m],slidesPerView:2,spaceBetween:24,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},autoplay:{delay:3e3},keyboard:!0})):o&&(o.destroy(!0,!0),o=null)}f(u);const p=document.querySelector(".reviews-list"),w="https://deserts-store.b.goit.study/api";async function v(){const e=await fetch(`${w}/feedbacks`);if(!e.ok)throw new Error("Failed to fetch feedbacks");return e.json()}function g(e){const s=Math.round(Number(e)*2)/2,r=Math.floor(s),a=s%1!==0,t=5-r-(a?1:0);return`
    <div class="reviews-rating rating" aria-label="Рейтинг ${s} з 5">
      ${'<span class="reviews-star reviews-star-full">★</span>'.repeat(r)}
      ${a?'<span class="reviews-star reviews-star-half">★</span>':""}
      ${'<span class="reviews-star reviews-star-empty">★</span>'.repeat(t)}
    </div>
  `}function y(e){const s=e.rating||e.rate||5,r=e.text||e.review||e.comment||e.message||e.description||e.descr||e.feedback||"",a=e.name||e.author||e.user||"Користувач";return`
    <li class="swiper-slide reviews-card">
      ${g(s)}

      <p class="reviews-card-text">
        "${r}"
      </p>

      <h3 class="reviews-card-name">
        ${a}
      </h3>
    </li>
  `}function b(e){p.innerHTML=e.map(y).join("")}function h(){new c(".reviews-swiper",{modules:[l,d],slidesPerView:1,spaceBetween:16,grabCursor:!0,watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},pagination:{el:".reviews-pagination",clickable:!0},breakpoints:{768:{slidesPerView:3,spaceBetween:16},1158:{slidesPerView:3,spaceBetween:24}}})}async function L(){try{const e=await v();console.log(e);const s=Array.isArray(e)?e:e.feedbacks;if(!s)throw new Error("Feedbacks not found");const r=s.slice(0,10);b(r),h()}catch(e){console.error(e),p.innerHTML=`
      <li class="reviews-error">
        Не вдалося завантажити відгуки. Спробуйте пізніше.
      </li>
    `}}L();function E(){document.getElementById("overlay1").classList.remove("active"),document.body.style.overflow=""}function k(){document.getElementById("overlay2").classList.remove("active"),document.body.style.overflow=""}document.addEventListener("keydown",e=>{e.key==="Escape"&&(E(),k())});
//# sourceMappingURL=index.js.map
