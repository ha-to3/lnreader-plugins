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
var PawRead = /** @class */ (function () {
    function PawRead() {
        this.id = 'pawread';
        this.name = 'PawRead';
        this.version = '2.0.0';
        this.icon = 'src/en/pawread/icon.png';
        this.site = 'https://m.pawread.com/';
        this.filters = {
            status: {
                value: '',
                label: 'Status',
                options: [
                    { label: 'All', value: '' },
                    { label: 'Completed', value: 'wanjie' },
                    { label: 'Ongoing', value: 'lianzai' },
                    { label: 'Hiatus', value: 'hiatus' },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            lang: {
                value: '',
                label: 'Languages',
                options: [
                    { label: 'All', value: '' },
                    { label: 'Chinese', value: 'chinese' },
                    { label: 'Korean', value: 'korean' },
                    { label: 'Japanese', value: 'japanese' },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            genre: {
                value: '',
                label: 'Genres',
                options: [
                    { label: 'All', value: '' },
                    { label: 'Fantasy', value: 'Fantasy' },
                    { label: 'Action', value: 'Action' },
                    { label: 'Xuanhuan', value: 'Xuanhuan' },
                    { label: 'Romance', value: 'Romance' },
                    { label: 'Comedy', value: 'Comedy' },
                    { label: 'Mystery', value: 'Mystery' },
                    { label: 'Mature', value: 'Mature' },
                    { label: 'Harem', value: 'Harem' },
                    { label: 'Wuxia', value: 'Wuxia' },
                    { label: 'Xianxia', value: 'Xianxia' },
                    { label: 'Tragedy', value: 'Tragedy' },
                    { label: 'Sci-fi', value: 'Scifi' },
                    { label: 'Historical', value: 'Historical' },
                    { label: 'Ecchi', value: 'Ecchi' },
                    { label: 'Adventure', value: 'Adventure' },
                    { label: 'Adult', value: 'Adult' },
                    { label: 'Supernatural', value: 'Supernatural' },
                    { label: 'Psychological', value: 'Psychological' },
                    { label: 'Drama', value: 'Drama' },
                    { label: 'Horror', value: 'Horror' },
                    { label: 'Josei', value: 'Josei' },
                    { label: 'Mecha', value: 'Mecha' },
                    { label: 'Seinen', value: 'Seinen' },
                    { label: 'Shoujo', value: 'Shoujo' },
                    { label: 'Shounen', value: 'Shounen' },
                    { label: 'Smut', value: 'Smut' },
                    { label: 'Yaoi', value: 'Yaoi' },
                    { label: 'Yuri', value: 'Yuri' },
                    { label: 'Martial Arts', value: 'MartialArts' },
                    { label: 'School Life', value: 'SchoolLife' },
                    { label: 'Shoujo Ai', value: 'ShoujoAi' },
                    { label: 'Shounen Ai', value: 'ShounenAi' },
                    { label: 'Slice of Life', value: 'SliceofLife' },
                    { label: 'Gender Bender', value: 'GenderBender' },
                    { label: 'Sports', value: 'Sports' },
                    { label: 'Urban', value: 'Urban' },
                    { label: 'Adventurer', value: 'Adventurer' },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            sort: {
                value: 'click',
                label: 'Sort By',
                options: [
                    { label: 'Time Updated', value: 'update' },
                    { label: 'Time Posted', value: 'post' },
                    { label: 'Clicks', value: 'click' },
                ],
                type: filterInputs_1.FilterTypes.Picker,
            },
            order: {
                value: false,
                label: 'Order ↑ ↓',
                type: filterInputs_1.FilterTypes.Switch,
            },
        };
    }
    PawRead.prototype.parseNovels = function (loadedCheerio) {
        var novels = [];
        loadedCheerio('.list-comic, .itemBox').each(function (idx, ele) {
            var _a;
            loadedCheerio(ele).find('.serialise').remove();
            var novelName = loadedCheerio(ele).find('a').text().trim();
            var novelCover = loadedCheerio(ele).find('img').attr('src');
            var novelUrl = (_a = loadedCheerio(ele).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.slice(1);
            if (!novelUrl)
                return;
            var novel = {
                name: novelName,
                cover: novelCover,
                path: novelUrl,
            };
            novels.push(novel);
        });
        return novels;
    };
    PawRead.prototype.popularNovels = function (page_1, _a) {
        return __awaiter(this, arguments, void 0, function (page, _b) {
            var link, filterValues, body, loadedCheerio;
            var filters = _b.filters;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        link = "".concat(this.site, "list/");
                        filterValues = [
                            filters.status.value,
                            filters.lang.value,
                            filters.genre.value,
                        ];
                        link += filterValues.filter(function (value) { return value !== ''; }).join('-');
                        if (filterValues.some(function (value) { return value !== ''; }))
                            link += '/';
                        if (filters.order.value)
                            link += '-';
                        link += filters.sort.value;
                        link += "/?page=".concat(page);
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(link).then(function (r) { return r.text(); })];
                    case 1:
                        body = _c.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        return [2 /*return*/, this.parseNovels(loadedCheerio)];
                }
            });
        });
    };
    PawRead.prototype.parseNovel = function (novelPath) {
        return __awaiter(this, void 0, void 0, function () {
            var result, body, loadedCheerio, novel, chapter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fetch_1.fetchApi)(this.site + novelPath)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        body = _a.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        novel = {
                            path: novelPath,
                            name: loadedCheerio('#Cover img').attr('title') || 'Untitled',
                            cover: loadedCheerio('#Cover img').attr('src'),
                            author: loadedCheerio('.icon01 <').text().trim(),
                            status: loadedCheerio('.txtItme:first').text().trim(),
                            chapters: [],
                        };
                        novel.summary = loadedCheerio('#full-des')
                            .find('br')
                            .replaceWith('\n')
                            .end()
                            .text()
                            .trim();
                        novel.genres = loadedCheerio('a.btn-default')
                            .map(function (i, el) { return loadedCheerio(el).text().trim(); })
                            .toArray()
                            .join(',');
                        chapter = [];
                        loadedCheerio('.item-box').each(function (idx, ele) {
                            var _a;
                            var smallText = loadedCheerio(ele).find('span:last').text().trim();
                            if (smallText === 'Advanced Chapter')
                                return;
                            var releaseDate = smallText.split('.').map(function (x) { return Number(x); });
                            var chapterName = loadedCheerio(ele).find('span:first').text().trim();
                            var chapterUrl = (_a = loadedCheerio(ele).attr('onclick')) === null || _a === void 0 ? void 0 : _a.match(/\d+/)[0];
                            if (!chapterUrl)
                                return;
                            chapter.push({
                                name: chapterName,
                                path: "".concat(novelPath).concat(chapterUrl, ".html"),
                                releaseTime: new Date(releaseDate[0], releaseDate[1], releaseDate[2]).toISOString(),
                            });
                        });
                        novel.chapters = chapter;
                        return [2 /*return*/, novel];
                }
            });
        });
    };
    PawRead.prototype.parseChapter = function (chapterPath) {
        return __awaiter(this, void 0, void 0, function () {
            var result, body, loadedCheerio, steal, chapterText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fetch_1.fetchApi)(this.site + chapterPath)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        body = _a.sent();
                        loadedCheerio = (0, cheerio_1.load)(body);
                        steal = ['bit.ly', 'tinyurl', 'pawread'];
                        steal.map(function (tag) { return loadedCheerio("p:icontains(".concat(tag, ")")).remove(); });
                        chapterText = loadedCheerio('.main').html() || '';
                        return [2 /*return*/, chapterText];
                }
            });
        });
    };
    PawRead.prototype.searchNovels = function (searchTerm, page) {
        return __awaiter(this, void 0, void 0, function () {
            var searchUrl, result, body, loadedCheerio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchUrl = "".concat(this.site, "search/?keywords=").concat(searchTerm, "&page=").concat(page);
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(searchUrl)];
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
    return PawRead;
}());
exports.default = new PawRead();
