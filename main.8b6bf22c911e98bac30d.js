(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Crqd:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){return'<div class="loader-inner">\r\n    <h1 class="loader">404 Not found</h1>\r\n    <div class="lds-spinner">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n    </div>\r\n</div>'},useData:!0})},KFyD:function(e,t,n){},L1EO:function(e,t,n){},Q16g:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){return'<div class="container">\r\n    <div class="input-wrapper container">\r\n        <div class="form-wrapper">\r\n            <form action="#" class="search-form container">\r\n                <input class="input" type="text" name="query" placeholder="Write movie name and click Enter" />\r\n            </form>\r\n            <p class="wrong-input-notification"></p>\r\n        </div>\r\n    </div>\r\n    <section class="gallery container library library-content">\r\n        <ul id="gallery-list-id" class="gallery-list library-gallery"></ul>\r\n        <div id="counter" class="btn_wrapper display-none">\r\n            <button type="button" data-counter="decrement" class="prev-next not-visible">\r\n                Prev\r\n            </button>\r\n            <span id="value" class="value" value="1">1</span>\r\n            <button type="button" data-counter="increment" class="prev-next">\r\n                Next\r\n            </button>\r\n        </div>\r\n    </section>'},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("KFyD"),n("lmye"),n("WB5j"),n("SgDD");var a=function(e){e.results.map((function(e){return null===e.backdrop_path?e.backdrop_path="https://image.freepik.com/free-photo/_39155-43.jpg":e.backdrop_path="https://image.tmdb.org/t/p/w500"+e.backdrop_path}))},l=n("komC"),r=n.n(l);n("RtS0"),n("3dw1");var o=function(){var e=document.querySelector(".up-btn-link"),t=new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting?e.classList.add("up-btn-hidden"):e.classList.remove("up-btn-hidden")}))}),{rootMargin:"100px"}),n=document.querySelector(".header");t.observe(n),e.addEventListener("click",(function(t){window.scrollTo(0,0),e.classList.add("up-btn-hidden")}))};var i=function(e){var t=r()(e);document.querySelector(".gallery-list").insertAdjacentHTML("beforeend",t),o()},s=(n("JBxO"),n("FdtR"),"faafef79ea4c171e4623351b880cc7ac"),c={searchQuery:"",page:1,fetchFilms:function(e){e=this.searchQuery;var t="https://api.themoviedb.org/3/search/movie?api_key="+s+"&query="+this.searchQuery+"&page="+this.page,n="https://api.themoviedb.org/3/movie/popular?api_key="+s+"&language=en-US&page="+this.page;return fetch(e?t:n).then((function(e){return e.json()}))},resetPage:function(){this.page=1},incrementPage:function(){this.page+=1},decrementPage:function(){this.page-=1},get pageStatus(){return this.page},set pageStatus(e){this.page=e},get query(){return this.searchQuery},set query(e){this.searchQuery=e}},u=[];function d(){var e=document.querySelector("button[data-counter='increment']"),t=document.querySelector("button[data-counter='decrement']"),n=document.getElementById("value");e.addEventListener("click",(function(){c.incrementPage(),c.fetchFilms().then((function(l){u=l.results,document.querySelector(".gallery-list").innerHTML="",a(l),i(l.results),n.textContent=c.pageStatus,window.history.pushState("","","filmoteka?query="+c.query+"&page="+c.pageStatus),c.pageStatus<l.total_pages&&e.classList.remove("not-visible"),c.pageStatus===l.total_pages&&e.classList.add("not-visible"),c.pageStatus>1&&t.classList.remove("not-visible")})).catch((function(e){return console.log(e)}))})),t.addEventListener("click",(function(){c.decrementPage(),c.fetchFilms().then((function(l){u=l.results,document.querySelector(".gallery-list").innerHTML="",a(l),i(l.results),n.textContent=c.pageStatus,window.history.pushState("","","filmoteka?query="+c.query+"&page="+c.pageStatus),1===c.pageStatus&&(e.classList.remove("visible"),t.classList.add("not-visible")),c.pageStatus<l.total_pages&&(e.classList.add("visible"),e.classList.remove("not-visible"))})).catch((function(e){return console.log(e)}))}))}var m=document.querySelector(".home-wrapper-js"),p=document.querySelector(".library-wrapper-js");m.addEventListener("click",(function(){m.classList.add("active"),p.classList.remove("active"),localStorage.setItem("focusedLinkOnHomepage","home")})),p.addEventListener("click",(function(){m.classList.remove("active"),p.classList.add("active"),localStorage.setItem("focusedLinkOnHomepage","library")}));var f=function(){"library"===localStorage.getItem("focusedLinkOnHomepage")&&(p.classList.add("active"),m.classList.remove("active"))},v=(n("IlJM"),n("7PPK")),g=n("Q16g"),h=n.n(g),y=n("t6Gq"),b=n.n(y),_=n("RsQm"),S=n.n(_),q=n("fbSS"),k=n.n(q);var L=function(){var e=document.querySelector(".watch-js"),t=document.querySelector(".queue-js");e.classList.toggle("is-active"),t.classList.toggle("is-active")},w=(n("uQK7"),n("Xlt+"),n("QJ3N"));n("bzha"),n("zrP5"),n("voa7"),n("/191");var O=function(e){Object(w.info)({title:e,delay:1e3})},T=function(e){var t,n=[],a=function(e){localStorage.hasOwnProperty(e)||localStorage.setItem(e,JSON.stringify(n))};a("filmsWatched"),a("filmsQueue");var l={ToWatchedButtonRef:document.getElementById("js-button-to-watched"),ToQueueButtonRef:document.getElementById("js-button-to-queue")},r=function(e,t){e.target.textContent=t},o=function(e){if(JSON.parse(localStorage.getItem("filmsWatched")).find((function(t){return t.id===e.id}))){var n=(t=JSON.parse(localStorage.getItem("filmsWatched"))).find((function(t){return t.id===e.id}));t.splice(t.indexOf(n),1),localStorage.setItem("filmsWatched",JSON.stringify(t))}},i=function(e){var n=JSON.parse(localStorage.getItem("filmsQueue")).find((function(t){return t.id===e.id}));n&&((t=JSON.parse(localStorage.getItem("filmsQueue"))).splice(t.indexOf(n),1),localStorage.setItem("filmsQueue",JSON.stringify(t)))},s=function(n){if(!n.target.classList.contains("AddedToWatched"))return O("Added to watched !"),void function(n){r(n,"Remove from watched"),n.target.classList.add("AddedToWatched"),(t=JSON.parse(localStorage.getItem("filmsWatched"))).push(e),localStorage.setItem("filmsWatched",JSON.stringify(t))}(n);O("Removed from watched !"),function(t){r(t,"Add to watched"),t.target.classList.remove("AddedToWatched"),o(e)}(n)},c=function(n){if(!n.target.classList.contains("AddedToQueue"))return O("Added to queue !"),void function(n){r(n,"Remove from queue"),n.target.classList.add("AddedToQueue"),(t=JSON.parse(localStorage.getItem("filmsQueue"))).push(e),localStorage.setItem("filmsQueue",JSON.stringify(t))}(n);O("Removed from queue !"),function(t){r(t,"Add to queue"),t.target.classList.remove("AddedToQueue"),i(e)}(n)};!function(e){if(!JSON.parse(localStorage.getItem("filmsWatched")).find((function(t){return t.id===e.id})))return l.ToWatchedButtonRef.textContent="Add to watched",void l.ToWatchedButtonRef.classList.remove("AddedToWatched");l.ToWatchedButtonRef.textContent="Remove from watched",l.ToWatchedButtonRef.classList.add("AddedToWatched")}(e),function(e){if(!JSON.parse(localStorage.getItem("filmsQueue")).find((function(t){return t.id===e.id})))return l.ToQueueButtonRef.textContent="Add to queue",void l.ToQueueButtonRef.classList.remove("AddedToQueue");l.ToQueueButtonRef.textContent="Remove from queue",l.ToQueueButtonRef.classList.add("AddedToQueue")}(e),l.ToWatchedButtonRef.addEventListener("click",(function(e){return s(e)})),l.ToQueueButtonRef.addEventListener("click",(function(e){return c(e)}))},Q=n("Crqd"),x=n.n(Q);var j=document.querySelector(".main-js"),I=JSON.parse(localStorage.getItem("filmsWatched")),W=JSON.parse(localStorage.getItem("filmsQueue"));function A(){var e=h()();j.innerHTML=e}function P(){I=JSON.parse(localStorage.getItem("filmsWatched"));var e=document.querySelector(".library"),t=S()(I);e.innerHTML=t}function J(){W=JSON.parse(localStorage.getItem("filmsQueue"));var e=document.querySelector(".library"),t=S()(W);e.innerHTML=t}function R(e){var t=e.release_date.slice(0,4),n=k()(e);j.innerHTML="",j.insertAdjacentHTML("afterbegin",n),document.querySelector(".year").textContent=t}Object(v.a)().get("/filmoteka",(function(e,t){A(),document.querySelector(".search-form").addEventListener("submit",N),c.query&&(c.query=e.query.query,c.pageStatus=e.query.page),c.query="",c.pageStatus=1,E(),d(),e.stop()})).get("/library",(function(e,t){var n;n=b()(),j.innerHTML=n,function(){var e=document.querySelector(".watch-js"),t=document.querySelector(".queue-js");if("watch"===localStorage.getItem("focused"))return e.classList.add("is-active"),t.classList.remove("is-active"),void P();e.classList.remove("is-active"),t.classList.add("is-active"),J()}(),e.stop()})).get("/library/watch",(function(e,t){localStorage.setItem("focused","watch"),L(),P(),e.stop()})).get("/library/queue",(function(e,t){localStorage.setItem("focused","queue"),L(),J(),e.stop()})).get("/:title",(function(e,t){!function(e){var t=e.replaceAll("%20"," ");if(C&&u){if(1===c.pageStatus){var n=C.find((function(e){return e.title===t}));return R(n),void T(n)}if(c.pageStatus>1){var a=u.find((function(e){return e.title===t}));R(a),T(a)}}}(e.get("title")),e.stop()})).get("/404",(function(e,t){var n,a;n=document.querySelector(".main-js"),a=x()(),n.insertAdjacentHTML("beforeend",a),e.stop()})).run();var C=[];function E(){var e=document.querySelector(".wrong-input-notification"),t=document.querySelector("#counter"),n=document.querySelector("button[data-counter='increment']");c.fetchFilms().then((function(l){if(C=l.results,a(l),l.results.map((function(e){e.release_date=e.release_date.slice(0,4)})),i(l.results),t.classList.remove("display-none"),window.history.pushState("","","filmoteka?query="+c.query+"&page="+c.pageStatus),e.textContent="",0===l.total_results&!t.classList.contains("display-none"))return t.classList.add("display-none"),void(e.textContent="We have no found films for you :(");1!==l.total_pages?t.classList.remove("display-none"):n.classList.add("not-visible")})).catch((function(e){return console.log(e)}))}function N(e){e.preventDefault();var t=document.querySelector(".gallery-list"),n=document.querySelector("#counter"),a=document.querySelector("button[data-counter='increment']"),l=document.querySelector(".wrong-input-notification"),r=e.currentTarget;if(c.query=r.elements.query.value.trim(),window.history.pushState("","","filmoteka?query="+c.query+"&page="+c.pageStatus),""===c.searchQuery)return l.textContent="The field is empty. Please type your query",void n.classList.add("display-none");if(c.resetPage(),1===c.pageStatus&a.classList.contains("not-visible")&&(a.classList.remove("not-visible"),a.classList.add("visible")),c.resetPage){var o=document.getElementById("value"),i=document.querySelector("button[data-counter='decrement']");o.textContent=c.page,i.classList.remove("visible"),i.classList.add("not-visible")}t.innerHTML=" ",E(),r.reset()}A(),d(),f(),document.querySelector(".search-form").addEventListener("submit",N);n("c/W4")},RsQm:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,l){var r,o=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="library-gallery__item">\r\n        <a href="/'+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:i)===s?r.call(o,{name:"title",hash:{},data:l,loc:{start:{line:4,column:18},end:{line:4,column:27}}}):r)+'">\r\n            <img class="library-gallery__image" src="'+c(typeof(r=null!=(r=u(n,"backdrop_path")||(null!=t?u(t,"backdrop_path"):t))?r:i)===s?r.call(o,{name:"backdrop_path",hash:{},data:l,loc:{start:{line:5,column:53},end:{line:5,column:70}}}):r)+'" alt="'+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:i)===s?r.call(o,{name:"title",hash:{},data:l,loc:{start:{line:5,column:77},end:{line:5,column:86}}}):r)+' poster">\r\n            <p class="library-gallery__rating">'+c(typeof(r=null!=(r=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?r:i)===s?r.call(o,{name:"vote_average",hash:{},data:l,loc:{start:{line:6,column:47},end:{line:6,column:63}}}):r)+'</p>\r\n            <p class="library-gallery__name">'+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:i)===s?r.call(o,{name:"title",hash:{},data:l,loc:{start:{line:7,column:45},end:{line:7,column:54}}}):r)+'<span class="gallery-item__date">('+c(typeof(r=null!=(r=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?r:i)===s?r.call(o,{name:"release_date",hash:{},data:l,loc:{start:{line:7,column:88},end:{line:7,column:104}}}):r)+")</span></p>\r\n        </a>\r\n    </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var r;return'<ul class="library-gallery">\r\n'+(null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:2,column:4},end:{line:10,column:13}}}))?r:"")+"</ul>"},useData:!0})},"c/W4":function(e,t,n){},fbSS:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var r,o=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<section class="details-section">\r\n    <div class="details">\r\n        <div class="details__image-block">\r\n            <img src="https://image.tmdb.org/t/p/w500'+c(typeof(r=null!=(r=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?r:i)===s?r.call(o,{name:"poster_path",hash:{},data:l,loc:{start:{line:4,column:53},end:{line:4,column:68}}}):r)+'" alt="'+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:i)===s?r.call(o,{name:"title",hash:{},data:l,loc:{start:{line:4,column:75},end:{line:4,column:84}}}):r)+' poster"\r\n                class="details__image-block-image">\r\n        </div>\r\n        <div class="details__info-block">\r\n            <h2 class="details__info-block-title">'+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:i)===s?r.call(o,{name:"title",hash:{},data:l,loc:{start:{line:8,column:50},end:{line:8,column:59}}}):r)+' (<span class="year"></span>)</h2>\r\n            <ul class="details__info-block-list">\r\n                <li class="details__info-block-list-item">\r\n                    <p class="details__info-block-list-item-name">vote/votes</p>\r\n                    <p class="details__info-block-list-item-value">'+c(typeof(r=null!=(r=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?r:i)===s?r.call(o,{name:"vote_average",hash:{},data:l,loc:{start:{line:12,column:67},end:{line:12,column:83}}}):r)+"/"+c(typeof(r=null!=(r=u(n,"vote_count")||(null!=t?u(t,"vote_count"):t))?r:i)===s?r.call(o,{name:"vote_count",hash:{},data:l,loc:{start:{line:12,column:84},end:{line:12,column:98}}}):r)+'</p>\r\n                </li>\r\n\r\n                <li class="details__info-block-list-item">\r\n                    <p class="details__info-block-list-item-name">popularity</p>\r\n                    <p class="details__info-block-list-item-value">'+c(typeof(r=null!=(r=u(n,"popularity")||(null!=t?u(t,"popularity"):t))?r:i)===s?r.call(o,{name:"popularity",hash:{},data:l,loc:{start:{line:17,column:67},end:{line:17,column:81}}}):r)+'</p>\r\n                </li>\r\n\r\n                <li class="details__info-block-list-item">\r\n                    <p class="details__info-block-list-item-name">Original title</p>\r\n                    <p class="details__info-block-list-item-value">'+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:i)===s?r.call(o,{name:"title",hash:{},data:l,loc:{start:{line:22,column:67},end:{line:22,column:76}}}):r)+'</p>\r\n                </li>\r\n\r\n            </ul>\r\n\r\n            <h3 class="details__info-block-title">About</h3>\r\n            <p class="details__info-block-about-description">'+c(typeof(r=null!=(r=u(n,"overview")||(null!=t?u(t,"overview"):t))?r:i)===s?r.call(o,{name:"overview",hash:{},data:l,loc:{start:{line:28,column:61},end:{line:28,column:73}}}):r)+'</p>\r\n            <div class="details__info-block-button-block">\r\n                <button\r\n                    class="details__info-block-button-block-button details__info-block-button-block-button-to-watched"\r\n                    id="js-button-to-watched">Add\r\n                    to watched</button>\r\n\r\n                <button class="details__info-block-button-block-button details__info-block-button-block-button-to-queue"\r\n                    id="js-button-to-queue">Add\r\n                    to queue</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>'},useData:!0})},komC:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,l){var r,o=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="gallery-item library-gallery__item">\r\n        <a href="/'+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:i)===s?r.call(o,{name:"title",hash:{},data:l,loc:{start:{line:3,column:18},end:{line:3,column:27}}}):r)+'"><img src="'+c(typeof(r=null!=(r=u(n,"backdrop_path")||(null!=t?u(t,"backdrop_path"):t))?r:i)===s?r.call(o,{name:"backdrop_path",hash:{},data:l,loc:{start:{line:3,column:39},end:{line:3,column:56}}}):r)+'" alt="'+c(typeof(r=null!=(r=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?r:i)===s?r.call(o,{name:"original_title",hash:{},data:l,loc:{start:{line:3,column:63},end:{line:3,column:81}}}):r)+'"\r\n                        class="gallery-item__image library-gallery__image" width="" height="" /></a>\r\n        <p class="gallery-item__name library-gallery__name">'+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:i)===s?r.call(o,{name:"title",hash:{},data:l,loc:{start:{line:5,column:60},end:{line:5,column:69}}}):r)+'<span class="gallery-item__date">\r\n                        ('+c(typeof(r=null!=(r=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?r:i)===s?r.call(o,{name:"release_date",hash:{},data:l,loc:{start:{line:6,column:25},end:{line:6,column:41}}}):r)+')</span></p>\r\n        <p class="gallery-item__rating library-gallery__rating">'+c(typeof(r=null!=(r=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?r:i)===s?r.call(o,{name:"vote_average",hash:{},data:l,loc:{start:{line:7,column:64},end:{line:7,column:80}}}):r)+"</p>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:9,column:9}}}))?r:""},useData:!0})},t6Gq:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,l){return'<section class="watch-queue">\r\n    <ul class="watch-queue-link">\r\n        <li>\r\n            <a href="/library/watch" class="watch-queue-link__item watch-js is-active">Watched</a>\r\n        </li>\r\n        <li>\r\n            <a href="/library/queue" class="watch-queue-link__item queue-js">Queue</a>\r\n        </li>\r\n    </ul>\r\n\r\n</section>\r\n\r\n<section class="library">\r\n</section>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.8b6bf22c911e98bac30d.js.map