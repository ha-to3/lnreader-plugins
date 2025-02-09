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
var novelStatus_1 = require("@libs/novelStatus");
var ReadNovelFullPlugin = /** @class */ (function () {
    function ReadNovelFullPlugin(metadata) {
        var _a;
        this.id = metadata.id;
        this.name = metadata.sourceName;
        this.icon = "multisrc/readnovelfull/".concat(metadata.id.toLowerCase(), "/icon.png");
        this.site = metadata.sourceSite;
        var versionIncrements = ((_a = metadata.options) === null || _a === void 0 ? void 0 : _a.versionIncrements) || 0;
        this.version = "1.0.".concat(0 + versionIncrements);
        this.options = metadata.options;
    }
    ReadNovelFullPlugin.prototype.getCheerio = function (url, search) {
        return __awaiter(this, void 0, void 0, function () {
            var r, $, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, fetch_1.fetchApi)(url)];
                    case 1:
                        r = _b.sent();
                        if (!r.ok && search != true)
                            throw new Error('Could not reach site (' + r.status + ') try to open in webview.');
                        _a = cheerio_1.load;
                        return [4 /*yield*/, r.text()];
                    case 2:
                        $ = _a.apply(void 0, [_b.sent()]);
                        return [2 /*return*/, $];
                }
            });
        });
    };
    ReadNovelFullPlugin.prototype.parseNovels = function ($) {
        var _this = this;
        var novels = [];
        $('.list-novel > .row, .list-truyen > .row').each(function (i, elem) {
            var novelName = $(elem).find('h3').text();
            var coverUrl = $(elem).find('img').attr('src');
            var novelUrl = _this.site + $(elem).find('a').attr('href');
            if (coverUrl &&
                !(coverUrl.includes('https://') || coverUrl.includes('http://'))) {
                coverUrl = _this.site + coverUrl;
            }
            if (novelUrl && novelName.trim()) {
                novels.push({
                    name: novelName,
                    cover: coverUrl,
                    path: novelUrl.replace(_this.site, ''),
                });
            }
        });
        return novels;
    };
    ReadNovelFullPlugin.prototype.popularNovels = function (pageNo_1, _a) {
        return __awaiter(this, arguments, void 0, function (pageNo, _b) {
            var url, $;
            var filters = _b.filters, showLatestNovels = _b.showLatestNovels;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = this.site +
                            '/' +
                            this.options.popularPage.replace('%%PAGE%%', pageNo.toString());
                        if (!filters)
                            filters = {};
                        if (showLatestNovels) {
                            url =
                                this.site +
                                    '/' +
                                    this.options.latestPage.replace('%%PAGE%%', pageNo.toString());
                        }
                        return [4 /*yield*/, this.getCheerio(url, false)];
                    case 1:
                        $ = _c.sent();
                        return [2 /*return*/, this.parseNovels($)];
                }
            });
        });
    };
    ReadNovelFullPlugin.prototype.parseNovel = function (novelPath) {
        return __awaiter(this, void 0, void 0, function () {
            var $, novel, chapters, novelId, chaptersUrl;
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.getCheerio(this.site + novelPath, false)];
                    case 1:
                        $ = _e.sent();
                        novel = {
                            path: novelPath.replace(this.site, ''),
                            name: 'Untitled',
                        };
                        novel.name = $('h3.title').first().text().trim();
                        novel.cover = $('.book > img').attr('src');
                        if (novel.cover &&
                            !(novel.cover.includes('https://') || novel.cover.includes('http://'))) {
                            novel.cover = this.site + novel.cover;
                        }
                        $('ul.info.info-meta > li, .info > div').each(function () {
                            var detailName = $(this)
                                .find('h3')
                                .first()
                                .text()
                                .toLowerCase()
                                .replace(':', '');
                            var detail = $(this).text().split(':')[1].trim().toLowerCase();
                            switch (detailName) {
                                case 'author':
                                    novel.author = detail;
                                    break;
                                case 'genre':
                                    novel.genres = detail;
                                    break;
                                case 'status':
                                    switch (detail) {
                                        case 'completed':
                                            novel.status = novelStatus_1.NovelStatus.Completed;
                                            break;
                                        case 'ongoing':
                                            novel.status = novelStatus_1.NovelStatus.Ongoing;
                                            break;
                                        case 'hiatus':
                                            novel.status = novelStatus_1.NovelStatus.OnHiatus;
                                            break;
                                        default:
                                            novel.status = novelStatus_1.NovelStatus.Unknown;
                                            break;
                                    }
                                    break;
                            }
                        });
                        novel.summary = $('.desc-text').text();
                        chapters = [];
                        novelId = $('#rating').attr('data-novel-id');
                        if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.ajaxChapterList)) return [3 /*break*/, 3];
                        chaptersUrl = this.site + '/ajax/chapter-archive?novelId=' + novelId;
                        return [4 /*yield*/, this.getCheerio(chaptersUrl, false)];
                    case 2:
                        $ = _e.sent();
                        $('.panel-body')
                            .find('li')
                            .each(function () {
                            var chapterName = $(this).find('a').attr('title') || '';
                            var chapterUrl = $(this).find('a').attr('href') || '';
                            chapters.push({
                                name: chapterName,
                                path: chapterUrl,
                            });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        chapters.push.apply(chapters, this.parsePageChapters($));
                        novel.totalPages = parseInt(((_b = $('ul.pagination > li.last > a').attr('data-page')) !== null && _b !== void 0 ? _b : (_d = (_c = $('ul.pagination > li.last > a')
                            .attr('href')) === null || _c === void 0 ? void 0 : _c.match(/\?page_num=(\d+)/)) === null || _d === void 0 ? void 0 : _d[1]));
                        _e.label = 4;
                    case 4:
                        novel.chapters = chapters;
                        return [2 /*return*/, novel];
                }
            });
        });
    };
    ReadNovelFullPlugin.prototype.parsePageChapters = function ($) {
        var chapters = [];
        $('.list-chapter')
            .find('li')
            .each(function () {
            var chapterName = $(this).find('a').attr('title') || '';
            var chapterUrl = $(this).find('a').attr('href') || '';
            chapters.push({
                name: chapterName,
                path: chapterUrl,
            });
        });
        return chapters;
    };
    ReadNovelFullPlugin.prototype.parsePage = function (novelPath, page) {
        return __awaiter(this, void 0, void 0, function () {
            var $, chapters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCheerio(this.site + novelPath + '?page=' + page, false)];
                    case 1:
                        $ = _a.sent();
                        chapters = this.parsePageChapters($);
                        return [2 /*return*/, {
                                chapters: chapters,
                            }];
                }
            });
        });
    };
    ReadNovelFullPlugin.prototype.parseChapter = function (chapterPath) {
        return __awaiter(this, void 0, void 0, function () {
            var $;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCheerio(this.site + chapterPath, false)];
                    case 1:
                        $ = _a.sent();
                        return [2 /*return*/, $('#chr-content, #chapter-content').html()];
                }
            });
        });
    };
    ReadNovelFullPlugin.prototype.searchNovels = function (searchTerm, page) {
        return __awaiter(this, void 0, void 0, function () {
            var url, $;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = this.site +
                            '/' +
                            ((_a = this.options) === null || _a === void 0 ? void 0 : _a.searchPage.replace('%%SEARCH%%', searchTerm).replace('%%PAGE%%', page.toString()));
                        return [4 /*yield*/, this.getCheerio(url, true)];
                    case 1:
                        $ = _b.sent();
                        return [2 /*return*/, this.parseNovels($)];
                }
            });
        });
    };
    return ReadNovelFullPlugin;
}());
var plugin = new ReadNovelFullPlugin({ "id": "readnovelfull", "sourceSite": "https://readnovelfull.com", "sourceName": "ReadNovelFull", "options": { "versionIncrements": 1, "popularPage": "novel-list/most-popular-novel?page=%%PAGE%%", "latestPage": "novel-list/latest-release-novel?page=%%PAGE%%", "searchPage": "novel-list/search?keyword=%%SEARCH%%&page=%%PAGE%%", "ajax-chapter-list": true } });
exports.default = plugin;
