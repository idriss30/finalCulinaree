(()=>{"use strict";var e,n={5579:(e,n,t)=>{function r(e,n,t,r,c,a,i){try{var o=e[a](i),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var i=e.apply(n,t);function o(e){r(i,c,a,o,s,"next",e)}function s(e){r(i,c,a,o,s,"throw",e)}o(void 0)}))}}t(2222),t(7042),t(9554),t(1539),t(4747),t(1038),t(8783),t(8309),t(8674),t(5666);var a=t(9669),i=["apiKey=fb17311e451246b9b70d522b4f8b9f24","apiKey=0cfb6535d28c44879dae76efd79b0b58","apiKey=01fcd559977e4a8a80501c02ae1c5ac0"],o=function(){return Math.floor(3*Math.random())},s={navLinks:document.getElementsByClassName("nav__link"),generateJoke:document.querySelector(".joke__button"),randomRecipeContainer:document.querySelector(".randomRecipe__section__container"),searchForm:document.querySelector(".search__form"),searchField:document.getElementById("search_input"),searchSection:document.querySelector(".search__section"),jokeSection:document.querySelector(".joke__section"),guideSection:document.querySelector(".guide__section"),loader:document.querySelector(".loading"),firstArticle:document.querySelector(".avocado__guide"),firstArticleLink:document.querySelector(".one"),emergencyArticle:document.querySelector(".emergency__article"),emergencyArticleLink:document.querySelector(".two"),articleButtons:document.getElementsByClassName("article__button-back"),resultSection:document.querySelector(".search__result__section"),resultContainer:document.querySelector(".container"),recipeFirstPage:document.querySelector(".first-page"),recipeSecondPage:document.querySelector(".second-page"),recipeThirdPage:document.querySelector(".third-page"),recipeLastPage:document.querySelector(".fourth-page"),selectedRecipe:document.querySelectorAll(".selected"),singleRecipeDisplay:document.querySelector(".selected__recipe")},l=function(){var e=c(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get(n+t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=c(regeneratorRuntime.mark((function e(){var n,t,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o(),e.next=3,l("https://api.spoonacular.com/recipes/random?number=20&",i[n]);case 3:if((t=e.sent).error)alert(t.error);else for(r=0;r<t.data.recipes.length;r++)c="https://spoonacular.com/recipeImages/".concat(t.data.recipes[r].id,"-556x370.jpg")||0,s.randomRecipeContainer.insertAdjacentHTML("beforeEnd",' <div class="single__recipe selected"  id= '.concat(t.data.recipes[r].id,">\n            <span>").concat(t.data.recipes[r].title,"</span>\n            <img src= ").concat(c," loading='lazy' alt= ").concat(t.data.recipes[r].title,"/>\n          </div>"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();window.onload=c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),e.next=3,u();case 3:case"end":return e.stop()}}),e)})));var d=function(){window.scrollTo(0,0)};function p(){s.guideSection.style.display="none",s.jokeSection.style.display="none",s.searchSection.style.display="none",s.randomRecipeContainer.style.display="none",s.singleRecipeDisplay.style.display="none"}function f(){s.guideSection.style.display="block",s.jokeSection.style.display="block",s.randomRecipeContainer.style.display="grid",s.searchSection.style.display="block",s.loader.style.display="none"}var y=[];function m(e){return g.apply(this,arguments)}function g(){return(g=c(regeneratorRuntime.mark((function e(n){var t,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",r=o(),e.prev=2,e.next=5,l("https://api.spoonacular.com/recipes/complexSearch?query=".concat(n,"&number=100&"),i[r]);case 5:if(404!==(c=e.sent).status){e.next=11;break}return t="404",e.abrupt("return",t);case 11:if(200!==c.status){e.next=14;break}return c.data.results.forEach((function(e){y.push(e)})),e.abrupt("return",y);case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(2),e.abrupt("return",t="404");case 19:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)}function v(e){switch(s.resultContainer.innerHTML="",e){case"one":y.slice(0,25).forEach((function(e){s.resultContainer.insertAdjacentHTML("beforeend",' <div class="search__result-recipe selected" id= '.concat(e.id,">\n                <span>").concat(e.title,"</span>\n                 \n                <img src= ").concat(e.image," loading='lazy' alt= ").concat(e.title,"/>\n               \n           </div>"))}));break;case"two":y.slice(25,50).forEach((function(e){s.resultContainer.insertAdjacentHTML("beforeend",' <div class="search__result-recipe selected" id= '.concat(e.id,'">\n                <span>').concat(e.title,"</span>\n                \n                <img src= ").concat(e.image," loading='lazy' alt= ").concat(e.title,"/>\n              \n           </div>"))}));break;case"three":y.slice(50,75).forEach((function(e){s.resultContainer.insertAdjacentHTML("beforeend",' <div class="search__result-recipe selected"  id= '.concat(e.id,">\n                <span>").concat(e.title,"</span>\n            \n                <img src= ").concat(e.image," loading='lazy' alt= ").concat(e.title,"/>\n              \n           </div>"))}));break;case"four":y.slice(75,99).forEach((function(e){s.resultContainer.insertAdjacentHTML("beforeend",' <div class="search__result-recipe selected" id= '.concat(e.id,">\n                <span>").concat(e.title,"</span>\n               \n                <img src= ").concat(e.image," loading='lazy' alt= ").concat(e.title,"/>\n               \n           </div>"))}))}}function h(e){e.slice(0,25).forEach((function(e){var n=e.image||"https://spoonacular.com/images/spoonacular-logo-b.svg";s.resultContainer.insertAdjacentHTML("beforeend",'\n       <div class="search__result-recipe selected"  id= '.concat(e.id,">\n       <span>").concat(e.title,"</span>\n          \n            <img src= ").concat(n," loading='lazy' alt= ").concat(e.title,"/>\n         \n       </div>\n    "))}))}function b(e){if(e.preventDefault(),"div"===e.target.parentElement.tagName.toLowerCase())return function(e){return k.apply(this,arguments)}(e.target.parentElement.id)}function k(){return(k=c(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),s.resultContainer.style.display="none",s.loader.style.display="block",s.resultSection.style.display="none",e.prev=4,r=o(),e.next=8,l("https://api.spoonacular.com/recipes/".concat(n,"/information?includeNutrition=false&"),i[r]);case 8:t=e.sent,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(4),f(),e.abrupt("return",alert(e.t0));case 15:s.loader.style.display="none",s.singleRecipeDisplay.style.display="block",_(t.data),w(t.data.extendedIngredients),S(t.data.summary);case 20:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function _(e){var n=document.querySelector(".selected__presentation");n.children.length>0&&(n.innerHTML=""),n.insertAdjacentHTML("beforeend","<p>".concat(e.title,'</p>\n    <img src ="').concat(e.image,'" alt= "').concat(e.title,'"/>\n    <span>Serving : ').concat(e.servings,"</span>\n    <span>ReadyInMinutes ").concat(e.readyInMinutes,"</span>\n   "))}function S(e){var n=document.querySelector(".selected__summary");n.hasChildNodes()&&(n.innerHTML=""),n.innerHTML="<p>".concat(e,"</p>")}function w(e){var n=document.querySelector(".selected__ingredients");n.hasChildNodes()&&(n.innerHTML=""),e.forEach((function(e){n.insertAdjacentHTML("beforeend",'\n      <div>\n      <img src = "https://spoonacular.com/cdn/ingredients_100x100/'.concat(e.image,'" alt = "').concat(e.name,'"/>\n      <span> ').concat(e.original,"</span>\n      </div>\n    "))}))}s.searchForm.addEventListener("submit",function(){var e=c(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),p(),s.loader.style.display="block",e.next=5,m(s.searchField.value);case 5:t=e.sent,s.searchForm.reset(),s.loader.style.display="none","404"===t?(f(),alert("error with your request")):(s.resultSection.style.display="block",h(t));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),s.generateJoke.addEventListener("click",function(){var e=c(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t=o(),e.next=4,l("https://api.spoonacular.com/food/jokes/random?&",i[t]);case 4:(r=e.sent).error?alert(r.error):document.querySelector("q").textContent=r.data.text;case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),"none"!==s.guideSection.style.display&&Array.from(s.articleButtons).forEach((function(e){e.addEventListener("click",(function(){s.emergencyArticle.style.display="none",s.firstArticle.style.display="none",s.resultSection.style.display="none",f(),d(),y=[]}))})),s.firstArticleLink.addEventListener("click",(function(){p(),s.firstArticle.style.display="block",d()})),s.emergencyArticleLink.addEventListener("click",(function(){p(),s.emergencyArticle.style.display="block",d()})),s.recipeFirstPage.addEventListener("click",(function(){v("one"),d()})),s.recipeSecondPage.addEventListener("click",(function(){v("two"),d()})),s.recipeThirdPage.addEventListener("click",(function(){v("three"),d()})),s.recipeLastPage.addEventListener("click",(function(){v("four"),d()})),Array.from(s.navLinks).forEach((function(e){e.addEventListener("click",function(){var e=c(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y=[],n.preventDefault(),p(),s.emergencyArticle.style.display="none",s.firstArticle.style.display="none",s.loader.style.display="block",s.resultContainer.style.display="grid",e.next=9,m(n.target.id);case 9:t=e.sent,s.loader.style.display="none","404"===t?(f(),alert("can't find your recipes")):(s.resultSection.style.display="block",h(t));case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())})),s.randomRecipeContainer.addEventListener("click",(function(e){return b(e)})),s.resultContainer.addEventListener("click",(function(e){return b(e)}))}},t={};function r(e){var c=t[e];if(void 0!==c)return c.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,e=[],r.O=(n,t,c,a)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,c,a]=e[u],o=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(o=!1,a<i&&(i=a));if(o){e.splice(u--,1);var l=c();void 0!==l&&(n=l)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,c,a]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={826:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var c,a,[i,o,s]=t,l=0;if(i.some((n=>0!==e[n]))){for(c in o)r.o(o,c)&&(r.m[c]=o[c]);if(s)var u=s(r)}for(n&&n(t);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;return r.O(u)},t=self.webpackChunkculinaree=self.webpackChunkculinaree||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var c=r.O(void 0,[384],(()=>r(5579)));c=r.O(c)})();
//# sourceMappingURL=index.bundle.js.map