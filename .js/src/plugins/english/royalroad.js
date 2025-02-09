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
var htmlparser2_1 = require("htmlparser2");
var fetch_1 = require("@libs/fetch");
var filterInputs_1 = require("@libs/filterInputs");
var novelStatus_1 = require("@libs/novelStatus");
var RoyalRoad = /** @class */ (function () {
    function RoyalRoad() {
        this.id = 'royalroad';
        this.name = 'Royal Road';
        this.version = '2.1.2';
        this.icon = 'src/en/royalroad/icon.png';
        this.site = 'https://www.royalroad.com/';
        this.filters = {
            'keyword': {
                'type': filterInputs_1.FilterTypes.TextInput,
                'label': 'Keyword (title or description)',
                'value': '',
            },
            'author': {
                'type': filterInputs_1.FilterTypes.TextInput,
                'label': 'Author',
                'value': '',
            },
            'genres': {
                'type': filterInputs_1.FilterTypes.ExcludableCheckboxGroup,
                'label': 'Genres',
                'value': {
                    'include': [],
                    'exclude': [],
                },
                'options': [
                    {
                        'label': 'Action',
                        'value': 'action',
                    },
                    {
                        'label': 'Adventure',
                        'value': 'adventure',
                    },
                    {
                        'label': 'Comedy',
                        'value': 'comedy',
                    },
                    {
                        'label': 'Contemporary',
                        'value': 'contemporary',
                    },
                    {
                        'label': 'Drama',
                        'value': 'drama',
                    },
                    {
                        'label': 'Fantasy',
                        'value': 'fantasy',
                    },
                    {
                        'label': 'Historical',
                        'value': 'historical',
                    },
                    {
                        'label': 'Horror',
                        'value': 'horror',
                    },
                    {
                        'label': 'Mystery',
                        'value': 'mystery',
                    },
                    {
                        'label': 'Psychological',
                        'value': 'psychological',
                    },
                    {
                        'label': 'Romance',
                        'value': 'romance',
                    },
                    {
                        'label': 'Satire',
                        'value': 'satire',
                    },
                    {
                        'label': 'Sci-fi',
                        'value': 'sci_fi',
                    },
                    {
                        'label': 'Short Story',
                        'value': 'one_shot',
                    },
                    {
                        'label': 'Tragedy',
                        'value': 'tragedy',
                    },
                ],
            },
            'tags': {
                'type': filterInputs_1.FilterTypes.ExcludableCheckboxGroup,
                'label': 'Tags',
                'value': {
                    'include': [],
                    'exclude': [],
                },
                'options': [
                    {
                        'label': 'Anti-Hero Lead',
                        'value': 'anti-hero_lead',
                    },
                    {
                        'label': 'Artificial Intelligence',
                        'value': 'artificial_intelligence',
                    },
                    {
                        'label': 'Attractive Lead',
                        'value': 'attractive_lead',
                    },
                    {
                        'label': 'Cyberpunk',
                        'value': 'cyberpunk',
                    },
                    {
                        'label': 'Dungeon',
                        'value': 'dungeon',
                    },
                    {
                        'label': 'Dystopia',
                        'value': 'dystopia',
                    },
                    {
                        'label': 'Female Lead',
                        'value': 'female_lead',
                    },
                    {
                        'label': 'First Contact',
                        'value': 'first_contact',
                    },
                    {
                        'label': 'GameLit',
                        'value': 'gamelit',
                    },
                    {
                        'label': 'Gender Bender',
                        'value': 'gender_bender',
                    },
                    {
                        'label': 'Genetically Engineered',
                        'value': 'genetically_engineered ',
                    },
                    {
                        'label': 'Grimdark',
                        'value': 'grimdark',
                    },
                    {
                        'label': 'Hard Sci-fi',
                        'value': 'hard_sci-fi',
                    },
                    {
                        'label': 'Harem',
                        'value': 'harem',
                    },
                    {
                        'label': 'High Fantasy',
                        'value': 'high_fantasy',
                    },
                    {
                        'label': 'LitRPG',
                        'value': 'litrpg',
                    },
                    {
                        'label': 'Low Fantasy',
                        'value': 'low_fantasy',
                    },
                    {
                        'label': 'Magic',
                        'value': 'magic',
                    },
                    {
                        'label': 'Male Lead',
                        'value': 'male_lead',
                    },
                    {
                        'label': 'Martial Arts',
                        'value': 'martial_arts',
                    },
                    {
                        'label': 'Multiple Lead Characters',
                        'value': 'multiple_lead',
                    },
                    {
                        'label': 'Mythos',
                        'value': 'mythos',
                    },
                    {
                        'label': 'Non-Human Lead',
                        'value': 'non-human_lead',
                    },
                    {
                        'label': 'Portal Fantasy / Isekai',
                        'value': 'summoned_hero',
                    },
                    {
                        'label': 'Post Apocalyptic',
                        'value': 'post_apocalyptic',
                    },
                    {
                        'label': 'Progression',
                        'value': 'progression',
                    },
                    {
                        'label': 'Reader Interactive',
                        'value': 'reader_interactive',
                    },
                    {
                        'label': 'Reincarnation',
                        'value': 'reincarnation',
                    },
                    {
                        'label': 'Ruling Class',
                        'value': 'ruling_class',
                    },
                    {
                        'label': 'School Life',
                        'value': 'school_life',
                    },
                    {
                        'label': 'Secret Identity',
                        'value': 'secret_identity',
                    },
                    {
                        'label': 'Slice of Life',
                        'value': 'slice_of_life',
                    },
                    {
                        'label': 'Soft Sci-fi',
                        'value': 'soft_sci-fi',
                    },
                    {
                        'label': 'Space Opera',
                        'value': 'space_opera',
                    },
                    {
                        'label': 'Sports',
                        'value': 'sports',
                    },
                    {
                        'label': 'Steampunk',
                        'value': 'steampunk',
                    },
                    {
                        'label': 'Strategy',
                        'value': 'strategy',
                    },
                    {
                        'label': 'Strong Lead',
                        'value': 'strong_lead',
                    },
                    {
                        'label': 'Super Heroes',
                        'value': 'super_heroes',
                    },
                    {
                        'label': 'Supernatural',
                        'value': 'supernatural',
                    },
                    {
                        'label': 'Technologically Engineered',
                        'value': 'technologically_engineered',
                    },
                    {
                        'label': 'Time Loop',
                        'value': 'loop',
                    },
                    {
                        'label': 'Time Travel',
                        'value': 'time_travel',
                    },
                    {
                        'label': 'Urban Fantasy',
                        'value': 'urban_fantasy',
                    },
                    {
                        'label': 'Villainous Lead',
                        'value': 'villainous_lead',
                    },
                    {
                        'label': 'Virtual Reality',
                        'value': 'virtual_reality',
                    },
                    {
                        'label': 'War and Military',
                        'value': 'war_and_military',
                    },
                    {
                        'label': 'Wuxia',
                        'value': 'wuxia',
                    },
                    {
                        'label': 'Xianxia',
                        'value': 'xianxia',
                    },
                ],
            },
            'content_warnings': {
                'type': filterInputs_1.FilterTypes.ExcludableCheckboxGroup,
                'label': 'Content Warnings',
                'value': {
                    'include': [],
                    'exclude': [],
                },
                'options': [
                    {
                        'label': 'Profanity',
                        'value': 'profanity',
                    },
                    {
                        'label': 'Sexual Content',
                        'value': 'sexuality',
                    },
                    {
                        'label': 'Graphic Violence',
                        'value': 'graphic_violence',
                    },
                    {
                        'label': 'Sensitive Content',
                        'value': 'sensitive',
                    },
                    {
                        'label': 'AI-Assisted Content',
                        'value': 'ai_assisted',
                    },
                    {
                        'label': 'AI-Generated Content',
                        'value': 'ai_generated',
                    },
                ],
            },
            'minPages': {
                'type': filterInputs_1.FilterTypes.TextInput,
                'label': 'Min Pages',
                'value': '0',
            },
            'maxPages': {
                'type': filterInputs_1.FilterTypes.TextInput,
                'label': 'Max Pages',
                'value': '20000',
            },
            'minRating': {
                'type': filterInputs_1.FilterTypes.TextInput,
                'label': 'Min Rating (0.0 - 5.0)',
                'value': '0.0',
            },
            'maxRating': {
                'type': filterInputs_1.FilterTypes.TextInput,
                'label': 'Max Rating (0.0 - 5.0)',
                'value': '5.0',
            },
            'status': {
                'type': filterInputs_1.FilterTypes.Picker,
                'label': 'Status',
                'value': 'ALL',
                'options': [
                    {
                        'label': 'All',
                        'value': 'ALL',
                    },
                    {
                        'label': 'Completed',
                        'value': 'COMPLETED',
                    },
                    {
                        'label': 'Dropped',
                        'value': 'DROPPED',
                    },
                    {
                        'label': 'Ongoing',
                        'value': 'ONGOING',
                    },
                    {
                        'label': 'Hiatus',
                        'value': 'HIATUS',
                    },
                    {
                        'label': 'Stub',
                        'value': 'STUB',
                    },
                ],
            },
            'orderBy': {
                'type': filterInputs_1.FilterTypes.Picker,
                'label': 'Order by',
                'value': 'relevance',
                'options': [
                    {
                        'label': 'Relevance',
                        'value': 'relevance',
                    },
                    {
                        'label': 'Popularity',
                        'value': 'popularity',
                    },
                    {
                        'label': 'Average Rating',
                        'value': 'rating',
                    },
                    {
                        'label': 'Last Update',
                        'value': 'last_update',
                    },
                    {
                        'label': 'Release Date',
                        'value': 'release_date',
                    },
                    {
                        'label': 'Followers',
                        'value': 'followers',
                    },
                    {
                        'label': 'Number of Pages',
                        'value': 'length',
                    },
                    {
                        'label': 'Views',
                        'value': 'views',
                    },
                    {
                        'label': 'Title',
                        'value': 'title',
                    },
                    {
                        'label': 'Author',
                        'value': 'author',
                    },
                ],
            },
            'dir': {
                'type': filterInputs_1.FilterTypes.Picker,
                'label': 'Direction',
                'value': 'desc',
                'options': [
                    {
                        'label': 'Ascending',
                        'value': 'asc',
                    },
                    {
                        'label': 'Descending',
                        'value': 'desc',
                    },
                ],
            },
            'type': {
                'type': filterInputs_1.FilterTypes.Picker,
                'label': 'Type',
                'value': 'ALL',
                'options': [
                    {
                        'label': 'All',
                        'value': 'ALL',
                    },
                    {
                        'label': 'Fan Fiction',
                        'value': 'fanfiction',
                    },
                    {
                        'label': 'Original',
                        'value': 'original',
                    },
                ],
            },
        };
    }
    RoyalRoad.prototype.parseNovels = function (html) {
        var novels = [];
        var tempNovel = {};
        tempNovel.name = '';
        var isParsingNovel = false;
        var isNovelName = false;
        var parser = new htmlparser2_1.Parser({
            onopentag: function (name, attribs) {
                var _a, _b;
                if ((_a = attribs['class']) === null || _a === void 0 ? void 0 : _a.includes('fiction-list-item')) {
                    isParsingNovel = true;
                }
                if (isParsingNovel) {
                    if (name === 'a' && ((_b = attribs['class']) === null || _b === void 0 ? void 0 : _b.includes('bold'))) {
                        tempNovel.path = attribs['href'].slice(1);
                        isNovelName = true;
                    }
                    if (name === 'img') {
                        tempNovel.cover = attribs['src'];
                    }
                    if (tempNovel.path && tempNovel.name) {
                        novels.push(tempNovel);
                        tempNovel = {};
                        tempNovel.name = '';
                    }
                }
            },
            ontext: function (data) {
                if (isNovelName) {
                    tempNovel.name += data;
                }
            },
            onclosetag: function (name) {
                if (name === 'h2') {
                    isNovelName = false;
                    isParsingNovel = false;
                }
            },
        });
        parser.write(html);
        parser.end();
        return novels;
    };
    RoyalRoad.prototype.popularNovels = function (page_1, _a) {
        return __awaiter(this, arguments, void 0, function (page, _b) {
            var link, key, _i, _c, include, _d, _e, exclude, body;
            var filters = _b.filters, showLatestNovels = _b.showLatestNovels;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        link = "".concat(this.site, "fictions/search");
                        link += "?page=".concat(page);
                        if (!filters)
                            filters = this.filters || {};
                        if (showLatestNovels)
                            link += '&orderBy=last_update';
                        for (key in filters) {
                            if (filters[key].value === '')
                                continue;
                            if (key === 'genres' || key === 'tags' || key === 'content_warnings') {
                                if (filters[key].value.include)
                                    for (_i = 0, _c = filters[key].value.include; _i < _c.length; _i++) {
                                        include = _c[_i];
                                        link += "&tagsAdd=".concat(include);
                                    }
                                if (filters[key].value.exclude)
                                    for (_d = 0, _e = filters[key].value.exclude; _d < _e.length; _d++) {
                                        exclude = _e[_d];
                                        link += "&tagsRemove=".concat(exclude);
                                    }
                            }
                            else if (typeof filters[key] === 'object')
                                link += "&".concat(key, "=").concat(filters[key].value);
                        }
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(link).then(function (r) { return r.text(); })];
                    case 1:
                        body = _f.sent();
                        return [2 /*return*/, this.parseNovels(body)];
                }
            });
        });
    };
    RoyalRoad.prototype.parseNovel = function (novelPath) {
        return __awaiter(this, void 0, void 0, function () {
            var result, html, novel, isNovelName, isAuthorName, isDescription, isH4, isSpan, isTags, isGenres, genreArray, isFooter, isScript, chapterJson, volumeJson, parser, chapter;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, fetch_1.fetchApi)(this.site + novelPath)];
                    case 1:
                        result = _b.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        html = _b.sent();
                        novel = {
                            path: novelPath,
                            name: '',
                            summary: '',
                            chapters: [],
                        };
                        isNovelName = false;
                        isAuthorName = false;
                        isDescription = false;
                        isH4 = false;
                        isSpan = 0;
                        isTags = false;
                        isGenres = false;
                        genreArray = [];
                        isFooter = false;
                        isScript = false;
                        chapterJson = [];
                        volumeJson = [];
                        parser = new htmlparser2_1.Parser({
                            onopentag: function (name, attribs) {
                                var _a, _b, _c;
                                if (name === 'img' && ((_a = attribs['class']) === null || _a === void 0 ? void 0 : _a.includes('thumbnail'))) {
                                    novel.cover = attribs['src'];
                                }
                                if (name === 'span' && ((_b = attribs['class']) === null || _b === void 0 ? void 0 : _b.includes('label-sm'))) {
                                    isSpan++;
                                }
                                if (name === 'span' && ((_c = attribs['class']) === null || _c === void 0 ? void 0 : _c.includes('tags'))) {
                                    isTags = true;
                                }
                            },
                            onopentagname: function (name) {
                                if (name === 'h1') {
                                    isNovelName = true;
                                }
                                if (isH4 && name === 'a') {
                                    isAuthorName = true;
                                }
                                if (isTags && name === 'a') {
                                    isGenres = true;
                                }
                                if (name === 'label') {
                                    isDescription = false;
                                    isTags = false;
                                }
                                if (isFooter && name === 'script') {
                                    isScript = true;
                                }
                            },
                            onattribute: function (name, value) {
                                if (name === 'class' && value === 'description') {
                                    isDescription = true;
                                }
                                if (name === 'class' && value === 'page-footer footer') {
                                    isFooter = true;
                                }
                            },
                            ontext: function (data) {
                                if (isNovelName) {
                                    novel.name = novel.name + data;
                                }
                                if (isAuthorName) {
                                    novel.author = data;
                                    isAuthorName = false;
                                }
                                if (isDescription) {
                                    novel.summary += data;
                                }
                                if (isSpan === 2) {
                                    novel.status = data.trim();
                                    isSpan++;
                                }
                                if (isGenres) {
                                    genreArray.push(data);
                                }
                                if (isScript) {
                                    if (data.includes('window.chapters =')) {
                                        chapterJson = JSON.parse(data.match(/window.chapters = (.+])(?=;)/)[1]);
                                        volumeJson = JSON.parse(data.match(/window.volumes = (.+])(?=;)/)[1]);
                                    }
                                }
                            },
                            onclosetag: function (name) {
                                if (name === 'h1') {
                                    isNovelName = false;
                                    isH4 = true;
                                }
                                if (name === 'h4') {
                                    isH4 = false;
                                }
                                if (name === 'a') {
                                    isGenres = false;
                                }
                                if (name === 'script') {
                                    isScript = false;
                                }
                                if (name === 'body') {
                                    isFooter = false;
                                }
                            },
                        });
                        parser.write(html);
                        parser.end();
                        novel.summary = (_a = novel.summary) === null || _a === void 0 ? void 0 : _a.trim();
                        novel.genres = genreArray.join(', ');
                        switch (novel.status) {
                            case 'ONGOING':
                                novel.status = novelStatus_1.NovelStatus.Ongoing;
                                break;
                            case 'HIATUS':
                                novel.status = novelStatus_1.NovelStatus.OnHiatus;
                                break;
                            case 'COMPLETED':
                                novel.status = novelStatus_1.NovelStatus.Completed;
                                break;
                            default:
                                novel.status = novelStatus_1.NovelStatus.Unknown;
                        }
                        chapter = chapterJson.map(function (chapter) {
                            var matchingVolume = volumeJson.find(function (volume) { return volume.id === chapter.volumeId; });
                            return {
                                name: chapter.title,
                                path: chapter.url.slice(1),
                                releaseTime: chapter.date,
                                chapterNumber: chapter === null || chapter === void 0 ? void 0 : chapter.order,
                                page: matchingVolume === null || matchingVolume === void 0 ? void 0 : matchingVolume.title,
                            };
                        });
                        novel.chapters = chapter;
                        return [2 /*return*/, novel];
                }
            });
        });
    };
    RoyalRoad.prototype.parseChapter = function (chapterPath) {
        return __awaiter(this, void 0, void 0, function () {
            var result, html, parts, regexPatterns, extractContent, cleanup, chapterText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, fetch_1.fetchApi)(this.site + chapterPath)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        html = _a.sent();
                        parts = [];
                        regexPatterns = [
                            /<style>\n\s+.(.+?){[^]+?display: none;/,
                            /(<div class="portlet solid author-note-portlet"[^]+?)<div class="margin-bottom-20/,
                            /(<div class="chapter-inner chapter-content"[^]+?)<div class="portlet light t-center-3/,
                            /(<\/div>\s+<div class="portlet solid author-note-portlet"[^]+?)<div class="row margin-bottom-10/,
                        ];
                        extractContent = function (patterns) {
                            patterns.forEach(function (regex) {
                                var _a;
                                var match = (_a = html.match(regex)) === null || _a === void 0 ? void 0 : _a[1];
                                if (match)
                                    parts.push(match);
                            });
                        };
                        extractContent(regexPatterns);
                        cleanup = new RegExp("<p class=\"".concat(parts[0], ".+?</p>"), 'g');
                        chapterText = parts.slice(1).join('<hr>');
                        return [2 /*return*/, chapterText
                                .replace(cleanup, '')
                                .replace(/<p class="[^><]+>/g, '<p>')];
                }
            });
        });
    };
    RoyalRoad.prototype.searchNovels = function (searchTerm, page) {
        return __awaiter(this, void 0, void 0, function () {
            var searchUrl, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchUrl = "".concat(this.site, "fictions/search?page=").concat(page, "&title=").concat(searchTerm);
                        return [4 /*yield*/, (0, fetch_1.fetchApi)(searchUrl).then(function (r) { return r.text(); })];
                    case 1:
                        body = _a.sent();
                        return [2 /*return*/, this.parseNovels(body)];
                }
            });
        });
    };
    return RoyalRoad;
}());
exports.default = new RoyalRoad();
