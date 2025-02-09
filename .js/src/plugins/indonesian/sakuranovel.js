var e=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(r,n){function i(e){try{s(l.next(e))}catch(e){n(e)}}function o(e){try{s(l.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}s((l=l.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,l,r,n={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=o(0),i.throw=o(1),i.return=o(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(n=0)),n;)try{if(a=1,l&&(r=2&o[0]?l.return:o[0]?l.throw||((r=l.return)&&r.call(l),0):l.next)&&!(r=r.call(l,o[1])).done)return r;switch(l=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,l=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!(r=n.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){n.label=o[1];break}if(6===o[0]&&n.label<r[1]){n.label=r[1],r=o;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(o);break}r[2]&&n.ops.pop(),n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e],l=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("cheerio"),l=require("@libs/fetch"),r=require("@libs/filterInputs"),n=function(){function n(){this.id="sakura.id",this.name="SakuraNovel",this.icon="src/id/sakuranovel/icon.png",this.site="https://sakuranovel.id/",this.version="1.0.1",this.filters={status:{value:"",label:"Status",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Completed",value:"completed"}],type:r.FilterTypes.Picker},type:{value:"",label:"Type",options:[{label:"All",value:""},{label:"Web Novel",value:"Web+Novel"},{label:"Light Novel",value:"Light+Novel"}],type:r.FilterTypes.Picker},sort:{value:"rating",label:"Order By",options:[{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"},{label:"Rating",value:"rating"}],type:r.FilterTypes.Picker},lang:{value:["china","jepang","korea","unknown"],label:"Country",options:[{label:"China",value:"china"},{label:"Jepang",value:"jepang"},{label:"Korea",value:"korea"},{label:"Unknown",value:"unknown"}],type:r.FilterTypes.CheckboxGroup},genre:{value:[],label:"Genres",options:[{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Drama",value:"drama"},{label:"Ecchi",value:"ecchi"},{label:"Fantasy",value:"fantasy"},{label:"Gender Bender",value:"gender-bender"},{label:"Harem",value:"harem"},{label:"Horror",value:"horror"},{label:"Josei",value:"josei"},{label:"Josei",value:"josei"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Mecha",value:"mecha"},{label:"Mystery",value:"mystery"},{label:"Psychological",value:"psychological"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Shoujo",value:"shoujo"},{label:"Shounen",value:"shounen"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Supernatural",value:"supernatural"},{label:"Tragedy",value:"tragedy"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"}],type:r.FilterTypes.CheckboxGroup}}}return n.prototype.parseNovels=function(e){var t=this,a=[];return e(".flexbox2-item").each((function(l,r){var n=e(r).find(".flexbox2-title span").first().text(),i=e(r).find("img").attr("src"),o=e(r).find(".flexbox2-content > a").attr("href");o&&a.push({name:n,cover:i,path:o.replace(t.site,"")})})),a},n.prototype.popularNovels=function(r,n){return e(this,arguments,void 0,(function(e,r){var n,i,o,s=r.filters;return t(this,(function(t){switch(t.label){case 0:return n="".concat(this.site,"advanced-search/page/").concat(e,"/?title&author&yearx"),n+="&status=".concat(s.status.value),n+="&type=".concat(s.type.value),n+="&order=".concat(s.sort.value),s.lang.value.length&&(n+=s.lang.value.map((function(e){return"&country[]=".concat(e)})).join("")),s.genre.value.length&&(n+=s.genre.value.map((function(e){return"&genre[]=".concat(e)})).join("")),[4,(0,l.fetchApi)(n)];case 1:return[4,t.sent().text()];case 2:return i=t.sent(),o=(0,a.load)(i),[2,this.parseNovels(o)]}}))}))},n.prototype.parseNovel=function(r){return e(this,void 0,void 0,(function(){var e,n,i,o,s,u,c,v,p=this;return t(this,(function(t){switch(t.label){case 0:return[4,(0,l.fetchApi)(this.site+r)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),(n=(0,a.load)(e))(".series-synops div").remove(),(i={path:r,name:n(".series-title h2").text().trim()||"Untitled",cover:n(".series-thumb img").attr("src"),author:n(".series-infolist > li b:contains('Author') +").text().trim(),status:n(".status").text().trim(),summary:n(".series-synops").text().trim(),chapters:[]}).genres=n(".series-genres").children("a").map((function(e,t){return n(t).text()})).toArray().join(","),o=null===(v=null===(c=i.cover)||void 0===c?void 0:c.split("/").pop())||void 0===v?void 0:v.split("-").join(" ").split(".")[0],s=i.name.replace(/\(LN\)|\(WN\)/,"").split(",")[0].trim(),u=[],n(".series-flexright li").each((function(e,t){var a=n(t).find("a span").first().text().replace(s,"").replace(o,"").replace(/Bahasa Indonesia/,"").replace(/\s+/g," ").trim(),l=n(t).find(".date").text().trim().split("/").map((function(e){return Number(e)})),r=n(t).find("a").attr("href");r&&u.push({name:a,releaseTime:new Date(l[2],l[1],l[0]).toISOString(),path:r.replace(p.site,"")})})),i.chapters=u.reverse(),[2,i]}}))}))},n.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,n,i;return t(this,(function(t){switch(t.label){case 0:return[4,(0,l.fetchApi)(this.site+r)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),n=(0,a.load)(e),i=n("div:contains('Daftar Isi') +").find("div:first").attr("class"),n(".".concat(i)).remove(),[2,n("div:contains('Daftar Isi') +").html()||""]}}))}))},n.prototype.searchNovels=function(r,n){return e(this,void 0,void 0,(function(){var e,i,o;return t(this,(function(t){switch(t.label){case 0:return e="".concat(this.site,"page/").concat(n,"/?s=").concat(r),[4,(0,l.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return i=t.sent(),o=(0,a.load)(i),[2,this.parseNovels(o)]}}))}))},n}();exports.default=new n;