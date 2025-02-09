var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,a){function s(t){try{c(r.next(t))}catch(t){a(t)}}function o(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}c((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=o(0),s.throw=o(1),s.return=o(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),r=require("cheerio"),i=function(){function i(){this.id="yuukitls",this.name="Yuuki Tls",this.icon="src/es/yuukitls/icon.png",this.site="https://yuukitls.com/",this.version="1.0.0"}return i.prototype.popularNovels=function(){return t(this,void 0,void 0,(function(){var t,i,a,s=this;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(this.site)];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),i=(0,r.load)(t),a=[],i(".quadmenu-navbar-collapse ul li:nth-child(2)").find("li").each((function(t,e){var n=i(e).text().replace(/[\s\n]+/g," "),r=i(e).find("img").attr("src"),o=i(e).find("a").attr("href");if(o){var c={name:n,cover:r,path:o.replace(s.site,"")};a.push(c)}})),[2,a]}}))}))},i.prototype.parseNovel=function(i){return t(this,void 0,void 0,(function(){var t,a,s,o,c,u=this;return e(this,(function(e){switch(e.label){case 0:return t=this.site+i,[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return a=e.sent(),s=(0,r.load)(a),(o={path:i,name:s("h1.entry-title").text().replace(/[\t\n]/g,"").trim()}).cover=s('img[loading="lazy"]').attr("src"),s(".entry-content").find("div").each((function(){s(this).text().includes("Escritor:")&&(o.author=s(this).text().replace("Escritor: ","").trim()),s(this).text().includes("Género:")&&(o.genres=s(this).text().replace(/Género: |\s/g,"")),s(this).text().includes("Sinopsis:")&&(o.summary=s(this).next().text())})),c=[],s(".entry-content").find("li").length?s(".entry-content").find("li").each((function(t,e){var n=s(e).find("a").attr("href");if(n&&n.includes(u.site)){var r={name:s(e).text(),releaseTime:null,path:n.replace(u.site,"")};c.push(r)}})):s(".entry-content").find("p").each((function(t,e){var n=s(e).find("a").attr("href");if(n&&n.includes(u.site)){var r={name:s(e).text(),releaseTime:null,path:n.replace(u.site,"")};c.push(r)}})),o.chapters=c,[2,o]}}))}))},i.prototype.parseChapter=function(i){return t(this,void 0,void 0,(function(){var t,a,s;return e(this,(function(e){switch(e.label){case 0:return t=this.site+i,[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return a=e.sent(),s=(0,r.load)(a),[2,s(".entry-content").html()||""]}}))}))},i.prototype.searchNovels=function(i){return t(this,void 0,void 0,(function(){var t,a,s,o=this;return e(this,(function(e){switch(e.label){case 0:return i=i.toLowerCase(),[4,(0,n.fetchApi)(this.site)];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),a=(0,r.load)(t),s=[],a(".menu-item-2869").find(".menu-item.menu-item-type-post_type.menu-item-object-post").each((function(t,e){var n=a(e).text(),r=a(e).find("img").attr("src"),i=a(e).find("a").attr("href");if(i){var c={name:n,cover:r,path:i.replace(o.site,"")};s.push(c)}})),[2,s=s.filter((function(t){return t.name.toLowerCase().includes(i)}))]}}))}))},i}();exports.default=new i;