"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = require("cheerio");
var fetch_1 = require("@libs/fetch");
var filterInputs_1 = require("@libs/filterInputs");
var NovelUpdates = /** @class */ (function () {
    function NovelUpdates() {
        this.id = 'novelupdates';
        this.name = 'Novel Updates';
        this.version = '0.7.14';
        this.icon = 'src/en/novelupdates/icon.png';
        this.customCSS = 'src/en/novelupdates/customCSS.css';
        this.site = 'https://www.novelupdates.com/';
        this.filters = {
            sort: {
                label: 'Sort Results By',
                value: 'sdate',
                options: [
                    { label: 'Last Updated', value: 'sdate' },
                    { label: 'Rating', value: 'srate' },
                    { label: 'Rank', value: 'srank' },
                    { label: 'Reviews', value: 'sreview' },
                    { label: 'Chapters', value: 'srel' },
                    { label: 'Title', value: 'abc' },
                    { label: 'Readers', value: 'sread' },
                    { label: 'Frequency', value: 'sfrel' },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            order: {
                label: 'Order',
                value: 'desc',
                options: [
                    { label: 'Descending', value: 'desc' },
                    { label: 'Ascending', value: 'asc' },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            storyStatus: {
                label: 'Story Status (Translation)',
                value: '',
                options: [
                    { label: 'All', value: '' },
                    { label: 'Completed', value: '2' },
                    { label: 'Ongoing', value: '3' },
                    { label: 'Hiatus', value: '4' },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            language: {
                label: 'Language',
                value: [],
                options: [
                    { label: 'Chinese', value: '495' },
                    { label: 'Filipino', value: '9181' },
                    { label: 'Indonesian', value: '9179' },
                    { label: 'Japanese', value: '496' },
                    { label: 'Khmer', value: '18657' },
                    { label: 'Korean', value: '497' },
                    { label: 'Malaysian', value: '9183' },
                    { label: 'Thai', value: '9954' },
                    { label: 'Vietnamese', value: '9177' },
                ],
                type: filterInputs_1.FilterTypes.CheckboxGroup,
            },
            novelType: {
                label: 'Novel Type',
                value: [],
                options: [
                    { label: 'Light Novel', value: '2443' },
                    { label: 'Published Novel', value: '26874' },
                    { label: 'Web Novel', value: '2444' },
                ],
                type: filterInputs_1.FilterTypes.CheckboxGroup,
            },
            genre_operator: {
                label: 'Genre (And/Or)',
                value: 'and',
                options: [
                    { label: 'And', value: 'and' },
                    { label: 'Or', value: 'or' },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            genres: {
                label: 'Genres',
                type: filterInputs_1.FilterTypes.ExcludableCheckboxGroup,
                value: {
                    include: [],
                    exclude: [],
                },
                options: [
                    { label: 'Action', value: '8' },
                    { label: 'Adult', value: '280' },
                    { label: 'Adventure', value: '13' },
                    { label: 'Comedy', value: '17' },
                    { label: 'Drama', value: '9' },
                    { label: 'Ecchi', value: '292' },
                    { label: 'Fantasy', value: '5' },
                    { label: 'Gender Bender', value: '168' },
                    { label: 'Harem', value: '3' },
                    { label: 'Historical', value: '330' },
                    { label: 'Horror', value: '343' },
                    { label: 'Josei', value: '324' },
                    { label: 'Martial Arts', value: '14' },
                    { label: 'Mature', value: '4' },
                    { label: 'Mecha', value: '10' },
                    { label: 'Mystery', value: '245' },
                    { label: 'Psychoical', value: '486' },
                    { label: 'Romance', value: '15' },
                    { label: 'School Life', value: '6' },
                    { label: 'Sci-fi', value: '11' },
                    { label: 'Seinen', value: '18' },
                    { label: 'Shoujo', value: '157' },
                    { label: 'Shoujo Ai', value: '851' },
                    { label: 'Shounen', value: '12' },
                    { label: 'Shounen Ai', value: '1692' },
                    { label: 'Slice of Life', value: '7' },
                    { label: 'Smut', value: '281' },
                    { label: 'Sports', value: '1357' },
                    { label: 'Supernatural', value: '16' },
                    { label: 'Tragedy', value: '132' },
                    { label: 'Wuxia', value: '479' },
                    { label: 'Xianxia', value: '480' },
                    { label: 'Xuanhuan', value: '3954' },
                    { label: 'Yaoi', value: '560' },
                    { label: 'Yuri', value: '922' },
                ],
            },
            reading_list_operator: {
                label: 'Reading List (Include/Exclude)',
                value: 'include',
                options: [
                    { label: 'Include', value: 'include' },
                    { label: 'Exclude', value: 'exclude' },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            reading_lists: {
                label: 'Reading Lists',
                value: [],
                options: [{ label: 'All Reading Lists', value: '-1' }],
                type: filterInputs_1.FilterTypes.CheckboxGroup,
            },
        };
    }
    NovelUpdates.prototype.parseNovels = function (loadedCheerio) {
        var _this = this;
        var novels = [];
        loadedCheerio('div.search_main_box_nu').each(function (idx, ele) {
            var novelCover = loadedCheerio(ele).find('img').attr('src');
            var novelName = loadedCheerio(ele).find('.search_title > a').text();
            var novelUrl = loadedCheerio(ele)
                .find('.search_title > a')
                .attr('href');
            if (!novelUrl)
                return;
            var novel = {
                name: novelName,
                cover: novelCover,
                path: novelUrl.replace(_this.site, ''),
            };
            novels.push(novel);
        });
        return novels;
    };
    NovelUpdates.prototype.popularNovels = function (page_1, _a) {
        return __awaiter(this, arguments, void 0, function (page, _b) {
            var link, result, body, loadedCheerio;
            var _c, _d, _e, _f, _g, _h;
            var showLatestNovels = _b.showLatestNovels, filters = _b.filters;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        link = "".concat(this.site);
                        if ((filters === null || filters === void 0 ? void 0 : filters.language.value.length) ||
                            (filters === null || filters === void 0 ? void 0 : filters.novelType.value.length) ||
                            ((_c = filters === null || filters === void 0 ? void 0 : filters.genres.value.include) === null || _c === void 0 ? void 0 : _c.length) ||
                            ((_d = filters === null || filters === void 0 ? void 0 : filters.genres.value.exclude) === null || _d === void 0 ? void 0 : _d.length) ||
                            (filters === null || filters === void 0 ? void 0 : filters.reading_lists.value.length) ||
                            (filters === null || filters === void 0 ? void 0 : filters.storyStatus.value) !== '') {
                            link += 'series-finder/?sf=1';
                            if (filters === null || filters === void 0 ? void 0 : filters.language.value.length) {
                                link += '&org=' + filters.language.value.join(',');
                            }
                            if (filters === null || filters === void 0 ? void 0 : filters.novelType.value.length) {
                                link += '&nt=' + filters.novelType.value.join(',');
                            }
                            if ((_e = filters === null || filters === void 0 ? void 0 : filters.genres.value.include) === null || _e === void 0 ? void 0 : _e.length) {
                                link += '&gi=' + filters.genres.value.include.join(',');
                            }
                            if ((_f = filters === null || filters === void 0 ? void 0 : filters.genres.value.exclude) === null || _f === void 0 ? void 0 : _f.length) {
                                link += '&ge=' + filters.genres.value.exclude.join(',');
                            }
                            if (((_g = filters === null || filters === void 0 ? void 0 : filters.genres.value.include) === null || _g === void 0 ? void 0 : _g.length) ||
                                ((_h = filters === null || filters === void 0 ? void 0 : filters.genres.value.exclude) === null || _h === void 0 ? void 0 : _h.length)) {
                                link += '&mgi=' + filters.genre_operator.value;
                            }
                            if (filters === null || filters === void 0 ? void 0 : filters.reading_lists.value.length) {
                                link += '&hd=' + (filters === null || filters === void 0 ? void 0 : filters.reading_lists.value.join(','));
                                link += '&mRLi=' + (filters === null || filters === void 0 ? void 0 : filters.reading_list_operator.value);
                            }
                            if (filters === null || filters === void 0 ? void 0 : filters.storyStatus.value.length) {
                                link += '&ss=' + filters.storyStatus.value;
                            }
                            link += '&sort=' + (filters === null || filters === void 0 ? void 0 : filters.sort.value);
                            link += '&order=' + (filters === null || filters === void 0 ? void 0 : filters.order.value);
                        }
                        else if (showLatestNovels) {
                            link += 'latest-series/?st=1';
                        }
                        else {
                            link += 'series-ranking/?rank=week';
                        }
                        link += '&pg=' + page;
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(link)];
                    case 1:
                        result = _j.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        body = _j.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        return [2 /*return*/, this.parseNovels(loadedCheerio)];
                }
            });
        });
    };
    NovelUpdates.prototype.parseNovel = function (novelPath) {
        return __awaiter(this, void 0, void 0, function () {
            var url, result, body, loadedCheerio, novel, type, summary, chapter, novelId, formData, link, text, nameReplacements;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.site + novelPath;
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(url)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        body = _a.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        novel = {
                            path: novelPath,
                            name: loadedCheerio('.seriestitlenu').text() || 'Untitled',
                            cover: loadedCheerio('.wpb_wrapper img').attr('src'),
                            chapters: [],
                        };
                        novel.author = loadedCheerio('#authtag')
                            .map(function (i, el) { return loadedCheerio(el).text().trim(); })
                            .toArray()
                            .join(', ');
                        novel.genres = loadedCheerio('#seriesgenre')
                            .children('a')
                            .map(function (i, el) { return loadedCheerio(el).text(); })
                            .toArray()
                            .join(',');
                        novel.status = loadedCheerio('#editstatus').text().includes('Ongoing')
                            ? 'Ongoing'
                            : 'Completed';
                        type = loadedCheerio('#showtype').text().trim();
                        summary = loadedCheerio('#editdescription').text().trim();
                        novel.summary = summary + "\n\nType: ".concat(type);
                        chapter = [];
                        novelId = loadedCheerio('input#mypostid').attr('value');
                        formData = new FormData();
                        formData.append('action', 'nd_getchapters');
                        formData.append('mygrr', '0');
                        formData.append('mypostid', novelId);
                        link = "".concat(this.site, "wp-admin/admin-ajax.php");
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(link, {
                                method: 'POST',
                                body: formData,
                            }).then(function (data) { return data.text(); })];
                    case 3:
                        text = _a.sent();
                        loadedCheerio = (0, cheerio_1.load)(text);
                        nameReplacements = {
                            'v': 'volume ',
                            'c': ' chapter ',
                            'part': 'part ',
                            'ss': 'SS',
                        };
                        loadedCheerio('li.sp_li_chp').each(function (i, el) {
                            var chapterName = loadedCheerio(el).text();
                            for (var name_1 in nameReplacements) {
                                chapterName = chapterName.replace(name_1, nameReplacements[name_1]);
                            }
                            chapterName = chapterName.replace(/\b\w/g, function (l) { return l.toUpperCase(); }).trim();
                            var chapterUrl = 'https:' + loadedCheerio(el).find('a').first().next().attr('href');
                            chapter.push({
                                name: chapterName,
                                path: chapterUrl.replace(_this.site, ''),
                            });
                        });
                        novel.chapters = chapter.reverse();
                        return [2 /*return*/, novel];
                }
            });
        });
    };
    NovelUpdates.prototype.getLocation = function (href) {
        var match = href.match(/^(https?:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
        return match && "".concat(match[1], "//").concat(match[3]);
    };
    NovelUpdates.prototype.getChapterBody = function (loadedCheerio, domain, url) {
        return __awaiter(this, void 0, void 0, function () {
            var bloatElements, chapterTitle, chapterContent, chapterText, unwanted, targetDomain, _a, titleElement_asura, chapterCheerio_darkstar_1, url_genesis, json_genesis, nodes_genesis, data_genesis, content_genesis, footnotes_genesis, chapterId_greenz, url_greenz, json_greenz, chapterString_helscans_1, bloatAttributes_1, link_infinite, result_infinite, body_infinite, matchResult_kofi, titleElement_mirilu, chapterCheerio_novelworld_1, parts, link_raei, json_raei, titleElement_raei, displayedDiv_snow, loadedCheerioSnow_1, titleElement_snow, chapterID_redox, url_redox, ageVerification_skydemon, link_syringe, result_syringe, body_syringe, titleElement_syringe, scriptContent_wetried, jsonString_wetried, chapterId_yoru, link_yoru, json_yoru, titleElement_zetro;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        bloatElements = [];
                        chapterTitle = '';
                        chapterContent = '';
                        chapterText = '';
                        unwanted = ['app', 'blogspot', 'casper', 'wordpress', 'www'];
                        targetDomain = domain.find(function (d) { return !unwanted.includes(d); });
                        _a = targetDomain;
                        switch (_a) {
                            case 'anotivereads': return [3 /*break*/, 1];
                            case 'arcanetranslations': return [3 /*break*/, 2];
                            case 'asuratls': return [3 /*break*/, 3];
                            case 'daoist': return [3 /*break*/, 4];
                            case 'darkstartranslations': return [3 /*break*/, 5];
                            case 'fictionread': return [3 /*break*/, 6];
                            case 'genesistudio': return [3 /*break*/, 7];
                            case 'greenztl': return [3 /*break*/, 9];
                            case 'helscans': return [3 /*break*/, 11];
                            case 'hiraethtranslation': return [3 /*break*/, 12];
                            case 'hostednovel': return [3 /*break*/, 13];
                            case 'infinitenoveltranslations': return [3 /*break*/, 14];
                            case 'inoveltranslation': return [3 /*break*/, 18];
                            case 'isotls': return [3 /*break*/, 19];
                            case 'ko-fi': return [3 /*break*/, 20];
                            case 'mirilu': return [3 /*break*/, 21];
                            case 'novelplex': return [3 /*break*/, 22];
                            case 'novelworldtranslations': return [3 /*break*/, 23];
                            case 'raeitranslations': return [3 /*break*/, 24];
                            case 'rainofsnow': return [3 /*break*/, 26];
                            case 'readingpia': return [3 /*break*/, 27];
                            case 'redoxtranslation': return [3 /*break*/, 28];
                            case 'sacredtexttranslations': return [3 /*break*/, 30];
                            case 'scribblehub': return [3 /*break*/, 31];
                            case 'skydemonorder': return [3 /*break*/, 32];
                            case 'stabbingwithasyringe': return [3 /*break*/, 33];
                            case 'tinytranslation': return [3 /*break*/, 37];
                            case 'tumblr': return [3 /*break*/, 38];
                            case 'wattpad': return [3 /*break*/, 39];
                            case 'webnovel': return [3 /*break*/, 40];
                            case 'wetriedtls': return [3 /*break*/, 41];
                            case 'wuxiaworld': return [3 /*break*/, 42];
                            case 'yoru': return [3 /*break*/, 43];
                            case 'zetrotranslation': return [3 /*break*/, 46];
                        }
                        return [3 /*break*/, 47];
                    case 1:
                        chapterTitle =
                            loadedCheerio('#comic-nav-name').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('#spliced-comic').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 2:
                        bloatElements = ['.bottomnav'];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterTitle = loadedCheerio('.epwrapper .cat-series').first().text();
                        loadedCheerio('.entry-content div, .entry-content span').each(function (_, element) {
                            var el = loadedCheerio(element);
                            var style = el.attr('style');
                            if (!style)
                                return; // Skip elements without inline styles
                            if (/border:.*#00219b/.test(style)) {
                                el.removeAttr('style').addClass('arcane_box_blue'); // Blue box
                            }
                            else if (/border:.*white/.test(style)) {
                                el.removeAttr('style').addClass('arcane_box_white'); // White box
                            }
                            else if (style.includes('text-transform: uppercase') &&
                                /text-shadow:.*blue/.test(style)) {
                                el.removeAttr('style').addClass('arcane_title_blue'); // Blue title
                            }
                            else if (/text-shadow:.*blue/.test(style)) {
                                el.removeAttr('style').addClass('arcane_text_blue'); // Blue text
                            }
                            else if (/text-shadow:.*lightyellow/.test(style)) {
                                el.removeAttr('style').addClass('arcane_text_lightyellow'); // Lightyellow text
                            }
                            else if (/color:.*#ff00ff/.test(style)) {
                                el.removeAttr('style').addClass('arcane_text_pink'); // Pink text
                            }
                        });
                        chapterContent = loadedCheerio('.entry-content').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 3:
                        titleElement_asura = loadedCheerio('.post-body div b').first();
                        chapterTitle = titleElement_asura.text() || 'Title not found';
                        titleElement_asura.remove();
                        chapterContent = loadedCheerio('.post-body').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 4:
                        chapterTitle =
                            loadedCheerio('.chapter__title').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('.chapter__content').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 5:
                        chapterTitle =
                            loadedCheerio('ol.breadcrumb li').last().text().trim() ||
                                'Title not found';
                        chapterContent = loadedCheerio('.text-left').html();
                        chapterCheerio_darkstar_1 = (0, cheerio_1.load)(chapterContent);
                        // Add an empty row (extra <br>) after each <br> element
                        chapterCheerio_darkstar_1('br').each(function (_, el) {
                            chapterCheerio_darkstar_1(el).after('<br>'); // Add one more <br> for an empty row
                        });
                        // Get the updated content
                        chapterContent = chapterCheerio_darkstar_1.html();
                        // Combine the title and the updated content into the final chapter text
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 6:
                        bloatElements = [
                            '.content > style',
                            '.highlight-ad-container',
                            '.meaning',
                            '.word',
                        ];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterTitle =
                            loadedCheerio('.title-image span').first().text() ||
                                'Title not found';
                        loadedCheerio('.content')
                            .children()
                            .each(function (_, ele) {
                            var _a;
                            if ((_a = loadedCheerio(ele).attr('id')) === null || _a === void 0 ? void 0 : _a.includes('Chaptertitle-info')) {
                                loadedCheerio(ele).remove();
                                return false;
                            }
                        });
                        chapterContent = loadedCheerio('.content').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 7:
                        url_genesis = "".concat(url, "/__data.json?x-sveltekit-invalidated=001");
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(url_genesis).then(function (r) { return r.json(); })];
                    case 8:
                        json_genesis = _d.sent();
                        nodes_genesis = json_genesis.nodes;
                        data_genesis = nodes_genesis
                            .filter(function (node) { return node.type === 'data'; })
                            .map(function (node) { return node.data; })[0];
                        content_genesis = data_genesis[19];
                        footnotes_genesis = data_genesis[data_genesis[0].footnotes];
                        chapterText = (_b = content_genesis + footnotes_genesis) !== null && _b !== void 0 ? _b : '';
                        return [3 /*break*/, 47];
                    case 9:
                        chapterId_greenz = url.split('/').pop();
                        url_greenz = "https://api.greenztl.com/api//chapters/".concat(chapterId_greenz);
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(url_greenz).then(function (r) { return r.json(); })];
                    case 10:
                        json_greenz = _d.sent();
                        chapterText = json_greenz.currentChapter.content;
                        return [3 /*break*/, 47];
                    case 11:
                        chapterTitle =
                            loadedCheerio('.entry-title-main').first().text() ||
                                'Title not found';
                        chapterString_helscans_1 = 'Chapter ' + chapterTitle.split('Chapter')[1].trim();
                        loadedCheerio('#readerarea.rdminimal')
                            .children()
                            .each(function (_, ele) {
                            var elementText = loadedCheerio(ele).text();
                            if (elementText.includes(chapterString_helscans_1)) {
                                chapterTitle = elementText;
                                loadedCheerio(ele).remove();
                                return false;
                            }
                        });
                        chapterContent = loadedCheerio('#readerarea.rdminimal').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 12:
                        bloatAttributes_1 = [
                            'data-lazy-srcset',
                            'data-lazy-src',
                            'data-lazy-sizes',
                            'data-ll-status',
                        ];
                        // Iterate over each selector for images that may have these attributes
                        ['img.entered', 'img.lazyloaded'].forEach(function (selector) {
                            loadedCheerio(selector).each(function () {
                                var _this = this;
                                // Loop through the attributes and remove them from the image
                                bloatAttributes_1.forEach(function (attr) {
                                    loadedCheerio(_this).removeAttr(attr); // Remove specified attribute
                                });
                                // Optionally, remove the class if you want
                                loadedCheerio(this).removeClass('entered lazyloaded'); // Remove class if needed
                            });
                        });
                        chapterTitle =
                            loadedCheerio('li.active').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('.text-left').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 13:
                        chapterTitle =
                            loadedCheerio('#chapter-title').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('#chapter-content').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 14:
                        link_infinite = loadedCheerio('article > p > a')
                            .first()
                            .attr('href');
                        if (!link_infinite) return [3 /*break*/, 17];
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(link_infinite)];
                    case 15:
                        result_infinite = _d.sent();
                        return [4 /*yield*/, result_infinite.text()];
                    case 16:
                        body_infinite = _d.sent();
                        loadedCheerio = (0, cheerio_1.load)(body_infinite);
                        _d.label = 17;
                    case 17:
                        chapterContent = loadedCheerio('.hentry').html();
                        chapterTitle =
                            loadedCheerio('.page-entry-title').text() || 'Title not found';
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 18:
                        bloatElements = ['header', 'section'];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterText = loadedCheerio('.styles_content__JHK8G').html();
                        return [3 /*break*/, 47];
                    case 19:
                        bloatElements = [
                            'footer',
                            'header',
                            'nav',
                            '.ezoic-ad',
                            '.ezoic-adpicker-ad',
                            '.ezoic-videopicker-video',
                        ];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterTitle =
                            loadedCheerio('head title').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('main article').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 20:
                        matchResult_kofi = (_c = loadedCheerio('script:contains("shadowDom.innerHTML")')
                            .html()) === null || _c === void 0 ? void 0 : _c.match(/shadowDom\.innerHTML \+= '(<div.*?)';/);
                        if (matchResult_kofi && matchResult_kofi[1]) {
                            chapterText = matchResult_kofi[1];
                        }
                        else {
                            chapterText = '';
                        }
                        return [3 /*break*/, 47];
                    case 21:
                        bloatElements = ['#jp-post-flair'];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        titleElement_mirilu = loadedCheerio('.entry-content p strong').first();
                        chapterTitle = titleElement_mirilu.text() || 'Title not found';
                        titleElement_mirilu.remove();
                        chapterContent = loadedCheerio('.entry-content').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 22:
                        bloatElements = ['.passingthrough_adreminder'];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterTitle =
                            loadedCheerio('.halChap--jud').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('.halChap--kontenInner ').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 23:
                        bloatElements = ['.separator img'];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        loadedCheerio('.entry-content a')
                            .filter(function (_, el) {
                            var _a;
                            return (((_a = loadedCheerio(el)
                                .attr('href')) === null || _a === void 0 ? void 0 : _a.includes('https://novelworldtranslations.blogspot.com')) ||
                                false);
                        })
                            .each(function (_, el) {
                            loadedCheerio(el).parent().remove();
                        });
                        chapterTitle =
                            loadedCheerio('.entry-title').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('.entry-content')
                            .html()
                            .replace(/&nbsp;/g, '')
                            .replace(/\n/g, '<br>');
                        chapterCheerio_novelworld_1 = (0, cheerio_1.load)(chapterContent);
                        chapterCheerio_novelworld_1('span, p, div').each(function (_, el) {
                            if (chapterCheerio_novelworld_1(el).text().trim() === '') {
                                chapterCheerio_novelworld_1(el).remove();
                            }
                        });
                        chapterContent = chapterCheerio_novelworld_1.html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 24:
                        parts = url.split('/');
                        link_raei = "".concat(parts[0], "//api.").concat(parts[2], "/api/chapters/single?id=").concat(parts[3], "&num=").concat(parts[4]);
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(link_raei).then(function (r) { return r.json(); })];
                    case 25:
                        json_raei = _d.sent();
                        titleElement_raei = "Chapter ".concat(json_raei.currentChapter.chapTag);
                        chapterTitle = json_raei.currentChapter.chapTitle
                            ? "".concat(titleElement_raei, " - ").concat(json_raei.currentChapter.chapTitle)
                            : titleElement_raei;
                        chapterContent = [
                            json_raei.novelHead,
                            "<br><hr><br>",
                            json_raei.currentChapter.body,
                            "<br><hr><br>Translator's Note:<br>",
                            json_raei.currentChapter.note,
                        ].join('');
                        chapterContent = chapterContent.replace(/\n/g, '<br>');
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 26:
                        displayedDiv_snow = loadedCheerio('.bb-item').filter(function () {
                            return loadedCheerio(this).css('display') === 'block';
                        });
                        loadedCheerioSnow_1 = (0, cheerio_1.load)(displayedDiv_snow.html());
                        bloatElements = [
                            '.responsivevoice-button',
                            '.zoomdesc-cont p img',
                            '.zoomdesc-cont p noscript',
                        ];
                        bloatElements.forEach(function (tag) { return loadedCheerioSnow_1(tag).remove(); });
                        chapterContent = loadedCheerioSnow_1('.zoomdesc-cont').html();
                        titleElement_snow = loadedCheerioSnow_1('.scroller h2').first();
                        if (titleElement_snow.length) {
                            chapterTitle = titleElement_snow.text() || 'Title not found';
                            titleElement_snow.remove();
                            chapterContent = loadedCheerioSnow_1('.zoomdesc-cont').html();
                            if (chapterTitle && chapterContent) {
                                chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                            }
                        }
                        else if (chapterContent) {
                            chapterText = chapterContent;
                        }
                        return [3 /*break*/, 47];
                    case 27:
                        bloatElements = ['.ezoic-ad', '.ezoic-adpicker-ad', '.ez-video-wrap'];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterText = loadedCheerio('.chapter-body').html() || 'Text not found';
                        return [3 /*break*/, 47];
                    case 28:
                        chapterID_redox = url.split('/').pop();
                        chapterTitle = "Chapter ".concat(chapterID_redox);
                        url_redox = "".concat(url.split('chapter')[0], "txt/").concat(chapterID_redox, ".txt");
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(url_redox)
                                .then(function (r) { return r.text(); })
                                .then(function (text) {
                                // Split text into sentences based on newline characters
                                var sentences_redox = text.split('\n');
                                // Process each sentence individually
                                var formattedSentences_redox = sentences_redox.map(function (sentence) {
                                    // Check if the sentence contains "<hr>"
                                    if (sentence.includes('{break}')) {
                                        // Create a centered sentence with three stars
                                        return '<br> <p>****</p>';
                                    }
                                    else {
                                        // Replace text enclosed within ** with <strong> tags
                                        sentence = sentence.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                                        // Replace text enclosed within ++ with <em> tags
                                        sentence = sentence.replace(/\+\+(.*?)\+\+/g, '<em>$1</em>');
                                        return sentence;
                                    }
                                });
                                // Join the formatted sentences back together with newline characters
                                return formattedSentences_redox.join('<br>');
                            })];
                    case 29:
                        chapterContent = _d.sent();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 30:
                        bloatElements = [
                            '.entry-content blockquote',
                            '.entry-content div',
                            '.reaction-buttons',
                        ];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterTitle =
                            loadedCheerio('.entry-title').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('.entry-content').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 31:
                        bloatElements = ['.wi_authornotes'];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterTitle =
                            loadedCheerio('.chapter-title').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('.chp_raw').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 32:
                        ageVerification_skydemon = loadedCheerio('main')
                            .text()
                            .toLowerCase();
                        if (ageVerification_skydemon.includes('age verification required')) {
                            throw new Error('Age verification required, please open in webview.');
                        }
                        chapterTitle = "".concat(loadedCheerio('header .font-medium.text-sm').first().text().trim());
                        chapterContent = loadedCheerio('#startContainer + * > *')
                            .first()
                            .html();
                        if (!chapterContent) {
                            chapterContent = "".concat(loadedCheerio('#chapter-body').html(), "<hr><br>There could be missing content, please check in webview.");
                        }
                        if (chapterTitle) {
                            chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        }
                        else {
                            chapterText = chapterContent;
                        }
                        return [3 /*break*/, 47];
                    case 33:
                        link_syringe = loadedCheerio('.entry-content a').attr('href');
                        if (!link_syringe) return [3 /*break*/, 36];
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(link_syringe)];
                    case 34:
                        result_syringe = _d.sent();
                        return [4 /*yield*/, result_syringe.text()];
                    case 35:
                        body_syringe = _d.sent();
                        loadedCheerio = (0, cheerio_1.load)(body_syringe);
                        _d.label = 36;
                    case 36:
                        bloatElements = [
                            '.has-inline-color',
                            '.wp-block-buttons',
                            '.wpcnt',
                            '#jp-post-flair',
                        ];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterContent = loadedCheerio('.entry-content').html();
                        titleElement_syringe = loadedCheerio('.entry-content h3').first();
                        if (titleElement_syringe.length) {
                            chapterTitle = titleElement_syringe.text();
                            titleElement_syringe.remove();
                            chapterContent = loadedCheerio('.entry-content').html();
                        }
                        else {
                            chapterTitle = 'Title not found';
                        }
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 37:
                        bloatElements = [
                            '.content noscript',
                            '.google_translate_element',
                            '.navigate',
                            '.post-views',
                            'br',
                        ];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterTitle =
                            loadedCheerio('.title-content').first().text() || 'Title not found';
                        loadedCheerio('.title-content').first().remove();
                        chapterContent = loadedCheerio('.content').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 38:
                        chapterText = loadedCheerio('.post').html() || 'Text not found';
                        return [3 /*break*/, 47];
                    case 39:
                        chapterTitle = loadedCheerio('.h2').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('.part-content pre').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 40:
                        chapterTitle =
                            loadedCheerio('.cha-tit .pr .dib').first().text() ||
                                'Title not found';
                        chapterContent = loadedCheerio('.cha-words').html();
                        if (!chapterContent) {
                            chapterContent = loadedCheerio('._content').html();
                        }
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 41:
                        scriptContent_wetried = loadedCheerio('script:contains("p dir=")').html() ||
                            loadedCheerio('script:contains("u003c")').html();
                        if (scriptContent_wetried) {
                            jsonString_wetried = scriptContent_wetried.slice(scriptContent_wetried.indexOf('.push(') + '.push('.length, scriptContent_wetried.lastIndexOf(')'));
                            chapterText = JSON.parse(jsonString_wetried)[1];
                        }
                        return [3 /*break*/, 47];
                    case 42:
                        bloatElements = ['.MuiLink-root'];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterTitle =
                            loadedCheerio('h4 span').first().text() || 'Title not found';
                        chapterContent = loadedCheerio('.chapter-content').html();
                        chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        return [3 /*break*/, 47];
                    case 43:
                        chapterId_yoru = url.split('/').pop();
                        link_yoru = "https://pxp-main-531j.onrender.com/api/v1/book_chapters/".concat(chapterId_yoru, "/content");
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(link_yoru).then(function (r) { return r.json(); })];
                    case 44:
                        json_yoru = _d.sent();
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(json_yoru).then(function (r) { return r.text(); })];
                    case 45:
                        chapterText = _d.sent();
                        return [3 /*break*/, 47];
                    case 46:
                        bloatElements = ['hr', 'p:contains("\u00a0")'];
                        bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                        chapterContent = loadedCheerio('.text-left').html();
                        titleElement_zetro = loadedCheerio('.text-left h2').first();
                        if (titleElement_zetro.length) {
                            chapterTitle = titleElement_zetro.text() || 'Title not found';
                            titleElement_zetro.remove();
                            chapterContent = loadedCheerio('.text-left').html();
                            chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        }
                        else if (chapterContent) {
                            chapterTitle =
                                loadedCheerio('.active').first().text() || 'Title not found';
                            chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                        }
                        return [3 /*break*/, 47];
                    case 47: return [2 /*return*/, chapterText];
                }
            });
        });
    };
    NovelUpdates.prototype.parseChapter = function (chapterPath) {
        return __awaiter(this, void 0, void 0, function () {
            var bloatElements, chapterTitle, chapterContent, chapterText, result, body, url, domain, loadedCheerio, title, blogspotSources, blogspotKeywords, isBlogspot, wordpressSources, wordpressKeywords, isWordPress, manualWordPress, outliers, chapterSubtitle, tags, chapterCheerio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bloatElements = [];
                        chapterTitle = '';
                        chapterContent = '';
                        chapterText = '';
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(this.site + chapterPath)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        body = _a.sent();
                        url = result.url;
                        domain = url.toLowerCase().split('/')[2].split('.');
                        loadedCheerio = (0, cheerio_1.load)(body);
                        title = loadedCheerio('title').text().toLowerCase().trim();
                        if (title == 'bot verification' ||
                            title == 'just a moment...' ||
                            title == 'redirecting...' ||
                            title == 'un instant...' ||
                            title == 'you are being redirected...') {
                            throw new Error('Captcha error, please open in webview.');
                        }
                        if (!result.ok) {
                            /**
                             * Check if the chapter url is wrong or the site is genuinely down
                             */
                            throw new Error("Could not reach site (".concat(result.status, "), try to open in webview."));
                        }
                        blogspotSources = [
                            loadedCheerio('meta[name="google-adsense-platform-domain"]').attr('content'),
                            loadedCheerio('meta[name="generator"]').attr('content'),
                        ];
                        blogspotKeywords = ['blogspot', 'blogger'];
                        isBlogspot = blogspotSources.some(function (source) {
                            return source &&
                                blogspotKeywords.some(function (keyword) {
                                    return source.toLowerCase().includes(keyword);
                                });
                        });
                        wordpressSources = [
                            loadedCheerio('#dcl_comments-js-extra').html(),
                            loadedCheerio('meta[name="generator"]').attr('content'),
                            loadedCheerio('.powered-by').text(),
                            loadedCheerio('footer').text(),
                        ];
                        wordpressKeywords = ['wordpress', 'site kit by google'];
                        isWordPress = wordpressSources.some(function (source) {
                            return source &&
                                wordpressKeywords.some(function (keyword) {
                                    return source.toLowerCase().includes(keyword);
                                });
                        });
                        manualWordPress = ['etherreads', 'soafp'];
                        if (!isWordPress && domain.find(function (wp) { return manualWordPress.includes(wp); })) {
                            isWordPress = true;
                        }
                        outliers = [
                            'anotivereads',
                            'arcanetranslations',
                            'asuratls',
                            'darkstartranslations',
                            'fictionread',
                            'helscans',
                            'infinitenoveltranslations',
                            'mirilu',
                            'novelworldtranslations',
                            'sacredtexttranslations',
                            'stabbingwithasyringe',
                            'tinytranslation',
                            'zetrotranslation',
                        ];
                        if (domain.find(function (d) { return outliers.includes(d); })) {
                            isWordPress = false;
                            isBlogspot = false;
                        }
                        if (!(!isWordPress && !isBlogspot)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getChapterBody(loadedCheerio, domain, url)];
                    case 3:
                        chapterText = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (isBlogspot) {
                            bloatElements = [
                                '.button-container',
                                '.ChapterNav',
                                '.ch-bottom',
                                '.separator',
                            ];
                            bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                            chapterTitle =
                                loadedCheerio('.entry-title').first().text() ||
                                    loadedCheerio('.post-title').first().text() ||
                                    'Title not found';
                            chapterContent =
                                loadedCheerio('.content-post').html() ||
                                    loadedCheerio('.entry-content').html() ||
                                    loadedCheerio('.post-body').html();
                            if (chapterTitle && chapterContent) {
                                chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                            }
                        }
                        else if (isWordPress) {
                            bloatElements = [
                                '.ad',
                                '.author-avatar',
                                '.chapter-warning',
                                '.entry-meta',
                                '.ezoic-ad',
                                '.mb-center',
                                '.modern-footnotes-footnote__note',
                                '.patreon-widget',
                                '.post-cats',
                                '.pre-bar',
                                '.sharedaddy',
                                '.sidebar',
                                '.swg-button-v2-light',
                                '.wp-block-buttons',
                                '.wp-block-image',
                                '.wp-dark-mode-switcher',
                                '.wp-next-post-navi',
                                '#hpk',
                                '#jp-post-flair',
                                '#textbox',
                            ];
                            bloatElements.forEach(function (tag) { return loadedCheerio(tag).remove(); });
                            chapterTitle =
                                loadedCheerio('.entry-title').first().text() ||
                                    loadedCheerio('.entry-title-main').first().text() ||
                                    loadedCheerio('.chapter__title').first().text() ||
                                    loadedCheerio('.sp-title').first().text() ||
                                    loadedCheerio('.title-content').first().text() ||
                                    loadedCheerio('.wp-block-post-title').first().text() ||
                                    loadedCheerio('.title_story').first().text() ||
                                    loadedCheerio('.active').first().text() ||
                                    loadedCheerio('head title').first().text() ||
                                    loadedCheerio('h1.leading-none ~ h2').first().text() ||
                                    'Title not found';
                            chapterSubtitle = loadedCheerio('.cat-series').first().text() ||
                                loadedCheerio('h1.leading-none ~ span').first().text() ||
                                '';
                            if (chapterSubtitle) {
                                chapterTitle = chapterSubtitle;
                            }
                            chapterContent =
                                loadedCheerio('.rdminimal').html() ||
                                    loadedCheerio('.entry-content').html() ||
                                    loadedCheerio('.chapter__content').html() ||
                                    loadedCheerio('.prevent-select').html() ||
                                    loadedCheerio('.text_story').html() ||
                                    loadedCheerio('.contenta').html() ||
                                    loadedCheerio('.single_post').html() ||
                                    loadedCheerio('.post-entry').html() ||
                                    loadedCheerio('.main-content').html() ||
                                    loadedCheerio('.post-content').html() ||
                                    loadedCheerio('.content').html() ||
                                    loadedCheerio('.page-body').html() ||
                                    loadedCheerio('.td-page-content').html() ||
                                    loadedCheerio('.reader-content').html() ||
                                    loadedCheerio('#content').html() ||
                                    loadedCheerio('#the-content').html() ||
                                    loadedCheerio('article.post').html();
                            if (chapterTitle && chapterContent) {
                                chapterText = "<h2>".concat(chapterTitle, "</h2><hr><br>").concat(chapterContent);
                            }
                        }
                        _a.label = 5;
                    case 5:
                        if (!chapterText) {
                            tags = ['nav', 'header', 'footer', '.hidden'];
                            tags.map(function (tag) { return loadedCheerio(tag).remove(); });
                            chapterText = loadedCheerio('body').html() || 'Text not found';
                        }
                        if (chapterText) {
                            /**
                             * Convert relative urls to absolute
                             */
                            chapterText = chapterText.replace(/href="\//g, "href=\"".concat(this.getLocation(result.url), "/"));
                        }
                        chapterCheerio = (0, cheerio_1.load)(chapterText);
                        // Remove unwanted elements
                        chapterCheerio('noscript').remove();
                        // Process the images
                        chapterCheerio('img').each(function (i, el) {
                            var $el = chapterCheerio(el);
                            // Prioritize data-lazy-src or src for the main src attribute
                            var imgSrc = $el.attr('data-lazy-src') || $el.attr('src');
                            if (imgSrc) {
                                $el.attr('src', imgSrc); // Set the src value
                            }
                            // Prioritize data-lazy-srcset or srcset for the srcset attribute
                            var imgSrcset = $el.attr('data-lazy-srcset') || $el.attr('srcset');
                            if (imgSrcset) {
                                $el.attr('srcset', imgSrcset); // Set the srcset value
                            }
                            // Remove lazy-loading classes
                            $el.removeClass('lazyloaded');
                        });
                        // Extract the updated HTML
                        chapterText = chapterCheerio.html();
                        return [2 /*return*/, chapterText];
                }
            });
        });
    };
    NovelUpdates.prototype.searchNovels = function (searchTerm, page) {
        return __awaiter(this, void 0, void 0, function () {
            var splits, longestSearchTerm, url, result, body, loadedCheerio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        splits = searchTerm.split('*');
                        longestSearchTerm = splits.reduce(function (a, b) { return (a.length > b.length ? a : b); }, '');
                        searchTerm = longestSearchTerm.replace(/[‘’]/g, "'").replace(/\s+/g, '+');
                        url = "".concat(this.site, "series-finder/?sf=1&sh=").concat(searchTerm, "&sort=srank&order=asc&pg=").concat(page);
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(url)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        body = _a.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        return [2 /*return*/, this.parseNovels(loadedCheerio)];
                }
            });
        });
    };
    return NovelUpdates;
}());
exports.default = new NovelUpdates();
