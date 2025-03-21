window.__require = function e(t, i, n) {
function a(r, s) {
if (!i[r]) {
if (!t[r]) {
var c = r.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (o) return o(c, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = c;
}
var _ = i[r] = {
exports: {}
};
t[r][0].call(_.exports, function(e) {
return a(t[r][1][e] || e);
}, _, _.exports, e, t, i, n);
}
return i[r].exports;
}
for (var o = "function" == typeof __require && __require, r = 0; r < n.length; r++) a(n[r]);
return a;
}({
1: [ function(e, t) {
var i, n, a = t.exports = {};
function o() {
throw new Error("setTimeout has not been defined");
}
function r() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
i = "function" == typeof setTimeout ? setTimeout : o;
} catch (e) {
i = o;
}
try {
n = "function" == typeof clearTimeout ? clearTimeout : r;
} catch (e) {
n = r;
}
})();
function s(e) {
if (i === setTimeout) return setTimeout(e, 0);
if ((i === o || !i) && setTimeout) {
i = setTimeout;
return setTimeout(e, 0);
}
try {
return i(e, 0);
} catch (t) {
try {
return i.call(null, e, 0);
} catch (t) {
return i.call(this, e, 0);
}
}
}
function c(e) {
if (n === clearTimeout) return clearTimeout(e);
if ((n === r || !n) && clearTimeout) {
n = clearTimeout;
return clearTimeout(e);
}
try {
return n(e);
} catch (t) {
try {
return n.call(null, e);
} catch (t) {
return n.call(this, e);
}
}
}
var l, _ = [], u = !1, h = -1;
function d() {
if (u && l) {
u = !1;
l.length ? _ = l.concat(_) : h = -1;
_.length && p();
}
}
function p() {
if (!u) {
var e = s(d);
u = !0;
for (var t = _.length; t; ) {
l = _;
_ = [];
for (;++h < t; ) l && l[h].run();
h = -1;
t = _.length;
}
l = null;
u = !1;
c(e);
}
}
a.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
_.push(new f(e, t));
1 !== _.length || u || s(p);
};
function f(e, t) {
this.fun = e;
this.array = t;
}
f.prototype.run = function() {
this.fun.apply(null, this.array);
};
a.title = "browser";
a.browser = !0;
a.env = {};
a.argv = [];
a.version = "";
a.versions = {};
function g() {}
a.on = g;
a.addListener = g;
a.once = g;
a.off = g;
a.removeListener = g;
a.removeAllListeners = g;
a.emit = g;
a.prependListener = g;
a.prependOnceListener = g;
a.listeners = function() {
return [];
};
a.binding = function() {
throw new Error("process.binding is not supported");
};
a.cwd = function() {
return "/";
};
a.chdir = function() {
throw new Error("process.chdir is not supported");
};
a.umask = function() {
return 0;
};
}, {} ],
ActionType: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e7f69JXiOJJ0biVYQo/61tY", "ActionType");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.ActionType = i.EasingType = void 0;
(function(e) {
e[e.None = 1] = "None";
e[e.sineOut = 2] = "sineOut";
e[e.quadOut = 3] = "quadOut";
e[e.backOut = 4] = "backOut";
e[e.backIn = 5] = "backIn";
})(i.EasingType || (i.EasingType = {}));
(function(e) {
e[e.None = 1] = "None";
e[e.MOVE = 2] = "MOVE";
e[e.SCALE = 3] = "SCALE";
e[e.OPACITY = 4] = "OPACITY";
})(i.ActionType || (i.ActionType = {}));
cc._RF.pop();
}, {} ],
Android_IOS_Review: [ function(e, t) {
"use strict";
cc._RF.push(t, "caa08PE3bdPLJGd3lrvjOM1", "Android_IOS_Review");
cc.Class({
extends: cc.Component,
properties: {
android_show: {
default: !0,
displayName: "android提审是否显示"
},
ios_show: {
default: !0,
displayName: "ios提审是否显示"
},
only_review_node: {
default: !1,
displayName: "提审才需要显示，不提审就不显示"
}
},
start: function() {
if (Global.isAndroidReview && Global.isAndroid()) this.node.active = this.android_show; else {
this.only_review_node && (this.node.active = !1);
Global.isIOSReview() ? this.node.active = this.ios_show : this.only_review_node && (this.node.active = !1);
}
}
});
cc._RF.pop();
}, {} ],
AppData: [ function(e, t) {
"use strict";
cc._RF.push(t, "589db09YppH4pwpZVdFTPXz", "AppData");
cc.Class({
extends: cc.Component,
properties: {
_disslc: 0,
_diszbc: 0,
_disgrand: 0,
_dismega: 0,
_isInGame: !1,
_record_GameType: 3,
_record_PageIndex: 0,
_gameId: -1,
_gameJackpotList: [],
_slotsJackpotList: [],
_maxbet: 1e4,
_itemsSpriteAtlasList: null,
_coin: 0,
_level: 1,
_localRedTip: null,
_subgameVerMd5: null
},
init: function() {
cc.vv.NetManager.registerMsg(MsgId.GAME_CONFIG || MsgId.LOGIN_USERID, this.onRcvMsgLoginUserId, this, !0);
cc.vv.NetManager.registerMsg(MsgId.GAME_CONFIG || MsgId.LOGIN_USERID, this.onRcvMsgLoginUserId, this, !0);
cc.vv.NetManager.registerMsg(MsgId.GAME_CREATEROOM, this.onEnterGame, this, !0);
cc.vv.NetManager.registerMsg(MsgId.GAME_JOINROOM, this.onEnterGame, this, !0);
cc.vv.NetManager.registerMsg(MsgId.GAME_RECONNECT_DESKINFO, this.onEnterGame, this, !0);
cc.vv.NetManager.registerMsg(MsgId.GAME_ENTER_MATCH, this.onEnterGame, this, !0);
cc.vv.NetManager.registerMsg(MsgId.NOTIFY_SYS_KICK_LOGIN, this.onRcvLeaveGame, this, !0);
cc.vv.NetManager.registerMsg(MsgId.GAME_LEVELROOM, this.onRcvLeaveGame, this, !0);
cc.vv.NetManager.registerMsg(MsgId.JACKTPOT_HALL, this.onRecvJackpotHall, this);
cc.vv.NetManager.registerMsg(MsgId.PULL_JACKPOT_OTHER, this.onRecvJackpot, this);
var e = cc.sys.localStorage.getItem("select_game");
if (e) {
e = JSON.parse(e);
this._record_GameType = e.type;
this._record_PageIndex = e.index;
}
},
onRecvJackpotHall: function(e) {
if (200 === e.code) {
this._disslc = e.disslc || this._disslc;
this._diszbc = e.diszbc || this._diszbc;
this._disgrand = e.disgrand || this._disgrand;
this._dismega = e.dismega || this._dismega;
}
},
setGameJackpot: function() {},
getGameJackpot: function(e) {
for (var t = 0; t < this._gameJackpotList.length; ++t) if (Number(this._gameJackpotList[t].gameid) === Number(e)) return this._gameJackpotList[t].jp;
for (var i = 0; i < this._slotsJackpotList.length; ++i) if (Number(this._slotsJackpotList[i].gameid) === Number(e)) return this._slotsJackpotList[i].jp;
return [ 10, 10, 10, 10 ];
},
onRcvLeaveGame: function(e) {
200 == e.code && (this._gameId = -1);
},
onEnterGame: function(e) {
200 == e.code && (this._gameId = e.gameid);
},
getGameId: function() {
return this._gameId;
},
setGameId: function(e) {
this._gameId = e;
},
clearGameId: function() {
this._gameId = -1;
},
getIsInGame: function() {
return this._gameId > -1;
},
getMaxBet: function() {
return this._maxbet;
},
onRcvMsgLoginUserId: function(e) {
if (200 === e.code) {
for (var t in e.gamelist) for (var i = e.gamelist[t], n = 0; n < i.length; ++n) {
var a = {};
a.gameid = i[n].id;
a.jp = i[n].jp;
this._gameJackpotList.push(a);
}
if (e.slotslist) for (var o = e.slotslist, r = 0; r < o.length; ++r) {
var s = {};
s.gameid = o[r].id;
s.jp = o[r].jp;
this._slotsJackpotList.push(s);
}
}
this._maxbet = e.maxbet || 1e3;
this._disslc = e.disslc || this._disslc;
this._diszbc = e.diszbc || this._diszbc;
this._disgrand = e.disgrand || this._disgrand;
this._dismega = e.dismega || this._dismega;
this._level = e.level || this._level;
this._coin = e.coin || this._coin;
},
getGrand: function() {
return this._disgrand;
},
getMega: function() {
return this._dismega;
},
getSLC: function() {
return this._disslc;
},
getZBC: function() {
return this._diszbc;
},
setLotteryPot: function(e, t, i, n) {
this._disslc = e || this._disslc;
this._diszbc = t || this._diszbc;
this._disgrand = i || this._disgrand;
this._dismega = n || this._dismega;
},
start: function() {},
onRecvJackpot: function(e) {
if (200 === e.code) {
this._lastnotify = this._lastnotify || cc.vv.UserManager.getServerTime();
if (cc.vv.UserManager.getServerTime() - this._lastnotify > 300) {
Global.dispatchEvent(EventId.GET_JACKPOT_OTHER, e);
this._lastnotify = cc.vv.UserManager.getServerTime();
} else cc.log("中奖太频繁，小于5分钟");
}
},
setSubverMd5: function(e) {
this._subgameVerMd5 = e;
Global.saveLocal("submd5", JSON.stringify(e));
},
getSubverMd5: function() {
if (!this._subgameVerMd5) {
var e = Global.getLocal("submd5");
e && (this._subgameVerMd5 = JSON.parse(e));
}
return this._subgameVerMd5;
},
setLaunchProgress: function(e) {
this._launchProgress = e;
},
getLaunchProgress: function() {
return this._launchProgress;
},
setLaunchAnnousment: function(e) {
this._launchInfo = e;
},
getLaunchAnnousment: function() {
return this._launchInfo;
},
setHotupdateStart: function(e) {
this._bHotupdateStart = e;
},
getHotupdateStart: function() {
return this._bHotupdateStart;
}
});
cc._RF.pop();
}, {} ],
AppLog: [ function(e, t) {
"use strict";
cc._RF.push(t, "bdde8lksOhKO5Zj5w2La0u6", "AppLog");
window.LogMode = cc.debug.DebugMode.INFO;
var i = cc.Class({
extends: cc.Component,
statics: {
getDateString: function() {
var e = new Date(), t = e.getHours(), i = "";
i += (1 == t.length ? "0" + t : t) + ":";
i += (1 == (t = e.getMinutes()).length ? "0" + t : t) + ":";
i += (1 == (t = e.getSeconds()).length ? "0" + t : t) + ":";
1 == (t = e.getMilliseconds()).length && (t = "00" + t);
2 == t.length && (t = "0" + t);
return "[" + (i += t) + "]";
},
stack: function(e) {
var t = new Error().stack.split("\n");
t.shift();
var i = [];
t.forEach(function(e) {
var t = (e = e.substring(7)).split(" ");
if (t.length < 2) i.push(t[0]); else {
var n;
i.push(((n = {})[t[0]] = t[1], n));
}
});
if (-1 == e) {
for (var n = "ERROR Function stack:", a = 2; a < i.length; a++) {
n += "\n\t";
if ("string" != typeof i[a]) {
var o = [];
for (var r in i[a]) o.push(r);
n += o[0];
n += i[a][o[0]];
} else n += i[a];
}
return n + "\nLog: ";
}
if (e < i.length - 1) {
o = [];
for (var r in i[e]) o.push(r);
return o[0] + i[e][o[0]] + "\n\tLog: ";
}
},
log: function(e) {
function t() {
return e.apply(this, arguments);
}
t.toString = function() {
return e.toString();
};
return t;
}(function() {
var e = console.log || cc.log || log;
LogMode <= cc.debug.DebugMode.INFO && (Global.isNative() ? e(i.getDateString() + "Log: " + cc.js.formatStr.apply(cc, arguments)) : e.call(this, "%c%s%s" + cc.js.formatStr.apply(cc, arguments), "color:#4E455F;", this.stack(3), i.getDateString()));
}),
info: function() {
var e = console.log || cc.log || log;
LogMode <= cc.debug.DebugMode.INFO && (Global.isNative() ? e(i.getDateString() + "Info: " + cc.js.formatStr.apply(cc, arguments)) : e.call(this, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#00CD00;", this.stack(2), i.getDateString()));
},
warn: function() {
var e = console.log || cc.log || log;
LogMode <= cc.debug.DebugMode.WARN && (Global.isNative() ? e(i.getDateString() + "Warn: " + cc.js.formatStr.apply(cc, arguments)) : e.call(this, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#ee7700;", this.stack(2), i.getDateString()));
},
err: function() {
var e = console.log || cc.log || log;
LogMode <= cc.debug.DebugMode.ERROR && (Global.isNative() ? e(i.getDateString() + "Error: " + cc.js.formatStr.apply(cc, arguments)) : e.call(this, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:red", this.stack(-1), i.getDateString()));
},
ShowScreen: function() {
var e = cc.sys.localStorage.getItem("screen_log");
if (e) {
var t = i.getDateString() + cc.js.formatStr.apply(cc, arguments);
this._screenLogs = this._screenLogs || [];
this._screenLogs.push(t);
var n = cc.find("Canvas/lay_logs");
if (!n) {
(n = new cc.Node("lay_logs")).anchorY = 1;
n.anchorX = 0;
var a = n.addComponent(cc.Widget);
a.isAlignTop = !0;
a.top = 0;
a.isAlignLeft = !0;
a.left = 0;
a.isAlignRight = !0;
a.right = 0;
var o = n.addComponent(cc.Layout);
o.type = cc.Layout.Type.VERTICAL;
o.resizeMode = cc.Layout.ResizeMode.CONTAINER;
o.spacingY = 5;
n.parent = cc.find("Canvas");
}
do {
var r = this._screenLogs.shift();
if (r) {
var s = new cc.Node();
s.anchorX = 0;
var c = s.addComponent(cc.Label);
c.string = r;
n.addChild(s);
}
} while (this._screenLogs.length > 0);
}
}
}
});
window.AppLog = i;
cc._RF.pop();
}, {} ],
AssetMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "94fbaJUTbZNl71UwPCZSHXf", "AssetMgr");
cc.Class({
extends: cc.Component,
statics: {
_prefabURL: [],
loadAllRes: function() {
this.loadAllBitMapFont();
},
loadAllBitMapFont: function() {
cc.loader.loadResDir("font/", cc.BitmapFont, function(e, t) {
var i = {};
for (var n in t) i[t[n]._name] = t[n];
window.BitMapFont = i;
}.bind(this));
},
loadResSpriteFrame: function(e, t) {
cc.loader.loadRes(e, cc.SpriteFrame, function(e, i) {
e || t(i);
});
},
loadResPrefab: function(e, t) {
var i = this;
cc.loader.loadRes(e, cc.Prefab, function(n, a) {
if (!n) {
i._addPrefab(e);
t(a);
}
});
},
_addPrefab: function(e) {
for (var t = !1, i = 0; i < this._prefabURL.length; i++) if (e == this._prefabURL[i]) {
t = !0;
break;
}
t || this._prefabURL.push(e);
},
releasePrefabs: function() {
for (var e = 0; e < this._prefabURL.length; e++) cc.loader.releaseRes(this._prefabURL[e], cc.Prefab);
this._prefabURL = [];
}
}
});
cc._RF.pop();
}, {} ],
AudioCfgCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "7798cGcecdCX4SV6zloQwBU", "AudioCfgCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.AudioCfgItem = void 0;
var n = cc._decorator, a = n.ccclass, o = n.property, r = n.menu, s = function() {
function e() {
this.key = "";
this.audio = null;
}
__decorate([ o({
displayName: "Key"
}) ], e.prototype, "key", void 0);
__decorate([ o({
type: cc.AudioClip,
displayName: "MP3"
}) ], e.prototype, "audio", void 0);
return __decorate([ a("AudioCfgItem") ], e);
}();
i.AudioCfgItem = s;
var c = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.config = [];
return t;
}
__decorate([ o({
type: [ s ]
}) ], t.prototype, "config", void 0);
return __decorate([ a, r("ECS/配置/声音配置") ], t);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {} ],
AudioManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "604ecP8/J1J7orKou3S09Da", "AudioManager");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var a = 0;
return function() {
return a >= e.length ? {
done: !0
} : {
done: !1,
value: e[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
cc.Class({
extends: cc.Component,
statics: {
bgmVolume: 1,
effVolume: 1,
bgmAudioId: -1,
tempBgmCfg: JSON.stringify({
suburl: "",
iscommon: !1
}),
languageType: 0,
CHINESE: 0,
ENGLISH: 1,
soundEffectList: null,
bgmUrl: "",
init: function() {
var e = Global.getLocal("bgmVolume", this.bgmVolume);
cc.js.isNumber(Number(e)) && (this.bgmVolume = parseFloat(e));
var t = Global.getLocal("effVolume", this.effVolume);
cc.js.isNumber(Number(t)) && (this.effVolume = parseFloat(t));
var i = Global.getLocal("languageType", this.languageType);
this.languageType = parseInt(i);
this.tempBgmCfg = {
suburl: "",
iscommon: !1
};
cc.game.on(cc.game.EVENT_HIDE, this.onBackGround.bind(this));
cc.game.on(cc.game.EVENT_SHOW, this.onEnterFront.bind(this));
this.soundEffectList = new Map();
},
onBackGround: function() {
this.pauseAll();
},
onEnterFront: function() {
this.resumeAll();
},
getSoundURL: function(e, t, i) {
var n = "";
n += e;
n += "audio/";
i || (this.languageType == this.ENGLISH || "en" == Global.language ? n += "english/" : n += "chinese/");
return n + t;
},
playBgm: function(e, t, i, n, a, o, r) {
void 0 === o && (o = !0);
var s = this;
cc.log("play Bgm music: ", e, " file:", t);
this._cb = null;
this.tempBgmCfg.subpath = e;
this.tempBgmCfg.filename = t;
this.tempBgmCfg.iscommon = i;
var c = this.getSoundURL(e, t, i);
if (this.bgmUrl !== c) {
this.bgmAudioId >= 0 && cc.audioEngine.stop(this.bgmAudioId);
var l = this.bgmVolume;
n && this.bgmVolume > 0 && (l = n);
var _ = window[r];
_ ? _.load(c, cc.AudioClip, function(e, t) {
if (e) cc.log(e); else {
cc.audioEngine.setMusicVolume(l);
s.bgmAudioId = cc.audioEngine.playMusic(t, o);
if (a) {
s._cb = a;
cc.audioEngine.setFinishCallback(s.bgmAudioId, function() {
if (s._cb) {
s._cb();
s._cb = null;
}
});
}
}
}) : cc.resources.load(c, cc.AudioClip, function(e, t) {
if (e) cc.log(e); else {
cc.audioEngine.setMusicVolume(l);
s.bgmAudioId = cc.audioEngine.playMusic(t, o);
if (a) {
s._cb = a;
cc.audioEngine.setFinishCallback(s.bgmAudioId, function() {
if (s._cb) {
s._cb();
s._cb = null;
}
});
}
}
});
this.bgmUrl = c;
}
return this.bgmAudioId;
},
stopBgm: function() {
if (this.bgmAudioId >= 0) {
cc.audioEngine.stop(this.bgmAudioId);
if (this._cb) {
this._cb();
this._cb = null;
}
this.bgmAudioId = -1;
this.bgmUrl = "";
}
},
setClearBgmCall: function() {
this._cb = null;
},
playAudioClip: function(e, t, i, n) {
var a, o = this, r = n || this.effVolume;
a = cc.audioEngine.play(e, t, r);
this.soundEffectList.set(a, e.name);
cc.audioEngine.setFinishCallback(a, function() {
o.soundEffectList.delete(a);
i && i();
});
return a;
},
playBGMClip: function(e, t, i, n) {
var a = this;
void 0 === t && (t = !0);
this.bgmAudioId >= 0 && cc.audioEngine.stop(this.bgmAudioId);
var o = this.bgmVolume;
n && this.bgmVolume > 0 && (o = n);
cc.audioEngine.setMusicVolume(o);
this.bgmAudioId = cc.audioEngine.playMusic(e, t);
if (i) {
this._cb = i;
cc.audioEngine.setFinishCallback(this.bgmAudioId, function() {
if (a._cb) {
a._cb();
a._cb = null;
}
});
}
return this.bgmAudioId;
},
playEff: function(e, t, i, n, a, o, r, s) {
void 0 === n && (n = !1);
var c = this;
if (t) {
cc.log("Effect:" + t);
var l, _ = this.getSoundURL(e, t, i), u = o || this.effVolume;
s && window[s] ? window[s].load(_, cc.AudioClip, function(e, t) {
if (e) cc.log(e); else {
cc.audioEngine.setEffectsVolume(u);
l = cc.audioEngine.playEffect(t, n);
r && r(l);
c.soundEffectList.set(l, t.name);
cc.audioEngine.setFinishCallback(l, function() {
c.soundEffectList.delete(l);
a && a();
});
}
}) : cc.resources.load(_, cc.AudioClip, function(e, t) {
if (e) cc.log(e); else {
cc.audioEngine.setEffectsVolume(u);
l = cc.audioEngine.playEffect(t, n);
r && r(l);
c.soundEffectList.set(l, t.name);
cc.audioEngine.setFinishCallback(l, function() {
c.soundEffectList.delete(l);
a && a();
});
}
});
}
},
playSimpleEff: function(e) {
var t = this, i = this;
cc.resources.load(e, cc.AudioClip, function(e, n) {
if (!e) {
cc.audioEngine.setEffectsVolume(t.effVolume);
var a = cc.audioEngine.playEffect(n, !1);
i.soundEffectList.set(a, n.name);
cc.audioEngine.setFinishCallback(a, function() {
i.soundEffectList.delete(a);
});
}
});
},
setEffVolume: function(e) {
if (this.effVolume != e) {
this.effVolume = e;
Global.saveLocal("effVolume", this.effVolume);
}
for (var t, n = i(this.soundEffectList.entries()); !(t = n()).done; ) {
var a = t.value, o = a[0];
a[1];
cc.audioEngine.setVolume(o, e);
}
},
setBgmVolume: function(e) {
e > 1 && (e = 1);
if (this.bgmVolume != e) {
this.bgmVolume = e;
Global.saveLocal("bgmVolume", this.bgmVolume);
}
cc.audioEngine.setMusicVolume(e);
},
setLanguage: function(e) {
if (this.languageType != e) {
if (e != this.CHINESE && e != this.ENGLISH) return;
Global.saveLocal("languageType", e);
this.languageType = e;
this.tempBgmCfg.iscommon || this.playBgm(this.tempBgmCfg.suburl, this.tempBgmCfg.filename, this.tempBgmCfg.iscommon);
}
},
getLanguage: function() {
return this.languageType;
},
getBgmVolume: function() {
return cc.audioEngine.getMusicVolume();
},
getEffVolume: function() {
return this.effVolume;
},
pauseBgm: function() {
cc.audioEngine.pauseMusic();
},
resumeBgm: function() {
cc.audioEngine.resumeMusic();
},
pauseAll: function() {
cc.audioEngine.pauseAll();
},
resumeAll: function() {
cc.audioEngine.resumeAll();
},
stopAudio: function(e) {
for (var t, n = i(this.soundEffectList.entries()); !(t = n()).done; ) {
var a = t.value, o = a[0], r = (a[1], !1);
o == e && (r = !0);
if (r) {
cc.audioEngine.stop(o);
this.soundEffectList.delete(o);
}
}
},
stopAllEffect: function(e) {
void 0 === e && (e = []);
AppLog.log("!!!!!!!!!!!!!!stop all effect");
for (var t, n = i(this.soundEffectList.entries()); !(t = n()).done; ) {
for (var a = t.value, o = a[0], r = a[1], s = !1, c = 0; c < e.length; ++c) if (r.indexOf(e[c]) >= 0) {
s = !0;
break;
}
if (!s) {
cc.audioEngine.stop(o);
this.soundEffectList.delete(o);
}
}
0 === e.length && this.soundEffectList.clear();
},
pauseAllEffect: function() {
cc.audioEngine.pauseAllEffects();
},
resumeAllEffect: function() {
cc.audioEngine.resumeAllEffects();
},
stopEffectByName: function(e) {
for (var t, n = !1, a = i(this.soundEffectList.entries()); !(t = a()).done; ) {
var o = t.value, r = o[0], s = !1;
o[1].indexOf(e) >= 0 && (s = !0);
if (s) {
cc.audioEngine.stop(r);
this.soundEffectList.delete(r);
n = !0;
}
}
return n;
},
stopAll: function() {
this.bgmUrl = null;
cc.audioEngine.stopAll();
}
}
});
cc._RF.pop();
}, {} ],
ButtonClick2SoundCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "8e87bp0JApF0ZoTbpHzSrhm", "ButtonClick2SoundCmp");
cc.Class({
extends: cc.Component,
editor: {
menu: "音效/弹窗"
},
properties: {},
onLoad: function() {
this.node.getComponent(cc.Button) && this.node.on("click", function() {
cc.vv.EventManager.emit("EVENT_BTN_CLICK_2_SOUNDS");
}, this);
this.node.getComponent(cc.Toggle) && this.node.on("toggle", function() {
cc.vv.EventManager.emit("EVENT_BTN_CLICK_2_SOUNDS");
}, this);
}
});
cc._RF.pop();
}, {} ],
ButtonClickLimitCmp: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "2a4d4GFQ+dOY7heAHgKONe4", "ButtonClickLimitCmp");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = n.menu, s = n.requireComponent, c = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lockTime = .5;
return t;
}
t.prototype.onLoad = function() {
var e = this, t = this.getComponent(cc.Button), i = this.getComponent("ButtonGrayCmp");
this.node.on("click", function() {
i ? i.interactable = !1 : t.interactable = !1;
e.scheduleOnce(function() {
i ? i.interactable = !0 : t.interactable = !0;
}, e.lockTime);
}, this);
};
__decorate([ o ], t.prototype, "lockTime", void 0);
return __decorate([ a, s(cc.Button), r("UI/按钮时间锁") ], t);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {} ],
ButtonClickSoundCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "d8545zys0dHtZ5ZAVzt5T2h", "ButtonClickSoundCmp");
cc.Class({
extends: cc.Component,
editor: {
menu: "音效/按钮"
},
properties: {},
onLoad: function() {
this.node.getComponent(cc.Button) && this.node.on("click", function() {
cc.vv.EventManager.emit("EVENT_BTN_CLICK_SOUNDS");
}, this);
this.node.getComponent(cc.Toggle) && this.node.on("toggle", function() {
cc.vv.EventManager.emit("EVENT_BTN_CLICK_SOUNDS");
}, this);
}
});
cc._RF.pop();
}, {} ],
ButtonGrayCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "e81f49adrhFr4/bC4YX9Lhx", "ButtonGrayCmp");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var a = 0;
return function() {
return a >= e.length ? {
done: !0
} : {
done: !1,
value: e[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
cc.Class({
extends: cc.Component,
editor: {
menu: "通用/ButtonGaryCmp",
requireComponent: cc.Button,
executeInEditMode: !0
},
properties: {
_interactable: !0,
interactable: {
get: function() {
return this._interactable;
},
set: function(e) {
this._interactable = e;
var t = this.getComponent(cc.Button);
t.enableAutoGrayEffect = !0;
t.interactable = e;
for (var n, a = i(this.node.getComponentsInChildren(cc.Sprite)); !(n = a()).done; ) n.value.setMaterial(0, cc.Material.getBuiltinMaterial(e ? "2d-sprite" : "2d-gray-sprite"));
for (var o, r = i(this.node.getComponentsInChildren(cc.Label)); !(o = r()).done; ) o.value.setMaterial(0, cc.Material.getBuiltinMaterial(e ? "2d-sprite" : "2d-gray-sprite"));
}
}
}
});
cc._RF.pop();
}, {} ],
ButtonSoundCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "7d482+PrhVIuoGpdc4neQdT", "ButtonSoundCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = n.requireComponent, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.soundClip = null;
return t;
}
t.prototype.onLoad = function() {
var e = this;
this.node.getComponent(cc.Button) && this.node.on("click", function() {
cc.audioEngine.playEffect(e.soundClip, !1);
}, this);
};
__decorate([ o({
type: cc.AudioClip
}) ], t.prototype, "soundClip", void 0);
return __decorate([ a, r(cc.Button) ], t);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
CCAction_Shake: [ function(e, t) {
"use strict";
cc._RF.push(t, "cf0d8BFLydPHYWF0pkto1Oh", "CCAction_Shake");
var i = cc.Class({
name: "Shake",
extends: cc.ActionInterval,
properties: {
nodeInitialPos: null,
nodeShakeStrengthX: 0,
nodeShakeStrengthY: 0,
duration: 0
},
ctor: function(e, t, i) {
this.duration = e;
this.initWithDuration(e, t, i);
},
getRandomStrength: function(e, t) {
return Math.random() * (t - e + 1) + e;
},
update: function(e) {
var t = this.getRandomStrength(-this.nodeShakeStrengthX, this.nodeShakeStrengthX) * e, i = this.getRandomStrength(-this.nodeShakeStrengthY, this.nodeShakeStrengthY) * e;
this.getTarget().setPosition(this.nodeInitialPos.add(cc.v2(t, i)));
},
initWithDuration: function(e, t, i) {
if (cc.ActionInterval.prototype.initWithDuration.call(this, e)) {
this.setDuration(e);
this.nodeShakeStrengthX = t;
this.nodeShakeStrengthY = "undefined" === i ? t : i;
return !0;
}
return !1;
},
startWithTarget: function(e) {
cc.ActionInterval.prototype.startWithTarget.call(this, e);
this.nodeInitialPos = e.position;
},
stop: function() {
this.getTarget().position = this.nodeInitialPos;
}
});
cc.shake = function(e, t, n) {
return new i(e, t, n);
};
cc._RF.pop();
}, {} ],
CCSafeArea: [ function(e, t) {
"use strict";
cc._RF.push(t, "f7aaedf/MZK1a1tb3mxgU7V", "CCSafeArea");
var i = cc.Class({
name: "cc.SafeArea",
extends: cc.Component,
editor: !1,
properties: {
ignoreBottomSafe: {
default: !1,
tooltip: "是否忽略底部安全区域。IOS底部也有安全区域"
}
},
onEnable: function() {
this.updateArea();
cc.view.on("canvas-resize", this.updateArea, this);
},
onDisable: function() {
cc.view.off("canvas-resize", this.updateArea, this);
},
updateArea: function() {
if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
var e = this.node.getComponent(cc.Widget);
if (e) {
e.updateAlignment();
var t = this.node.position, i = this.node.getAnchorPoint();
e.isAlignTop = e.isAlignBottom = e.isAlignLeft = e.isAlignRight = !0;
var n = cc.winSize.width, a = cc.winSize.height, o = cc.sys.getSafeAreaRect();
e.top = a - o.y - o.height;
e.bottom = this.ignoreBottomSafe ? 0 : o.y;
e.left = o.x;
e.right = n - o.x - o.width;
e.updateAlignment();
var r = this.node.position, s = i.x - (r.x - t.x) / this.node.width, c = i.y - (r.y - t.y) / this.node.height;
this.node.setAnchorPoint(s, c);
e.enabled = !0;
}
}
}
});
cc.SafeArea = t.exports = i;
cc._RF.pop();
}, {} ],
CH_CommPopBgLayer: [ function(e, t) {
"use strict";
cc._RF.push(t, "759d8nClNpFiLtKm8XB5N9W", "CH_CommPopBgLayer");
cc.Class({
extends: cc.Component,
properties: {
close_btn: {
default: null,
type: cc.Node,
tooltip: "关闭按钮，此控件并不知道关闭要执行什么逻辑，只是点击了。就模拟点击对应关闭按钮的逻辑。如果不设置就不显示Tap to close"
}
},
onLoad: function() {
cc.find("lay_out", this.node).getComponent(cc.Layout).opacity = 192;
Global.btnClickEvent(this.node, this.onClickClose, this);
},
uiWidgetChange: function() {
this.node.getComponent(cc.Widget).updateAlignment();
for (var e = this.node.getComponentInChildren(cc.Widget), t = 0; t < e.length; t++) e[t].updateAlignment();
},
start: function() {
this.close_btn && this.showTapAction();
this._bCanClose();
},
showTapAction: function() {
var e = this;
cc.loader.loadRes("CashHero/prefab/tap_close_tip", cc.Prefab, function(t, i) {
if (cc.isValid(e.node)) {
var n = cc.find("tap_close_tip", e.node);
if (!cc.find("tap_close_tip", n) && cc.isValid(n)) {
var a = cc.instantiate(i);
a.parent = n;
a.position = cc.v2(0, 0);
n.opacity = 0;
cc.tween(n).to(.5, {
opacity: 255
}).repeatForever(cc.tween().delay(8).to(.5, {
opacity: 0
}).to(.5, {
opacity: 255
})).start();
}
}
});
},
onClickClose: function(e) {
if (this._bCanCloseUI && this.close_btn) {
var t = this.close_btn.getComponent(cc.Button);
if (t) {
var i = t.clickEvents;
cc.Component.EventHandler.emitEvents(i, e);
}
this.close_btn.emit("click", e);
}
},
_bCanClose: function() {
var e = this;
e._bCanCloseUI = !1;
this.scheduleOnce(function() {
e._bCanCloseUI = !0;
}, .5);
}
});
cc._RF.pop();
}, {} ],
CH_List: [ function(e, t) {
"use strict";
cc._RF.push(t, "9e6e0CAMjFGH4v9sSX3g5Uh", "CH_List");
var i = cc.Enum({
NODE: 1,
PREFAB: 2
}), n = cc.Enum({
NORMAL: 1,
ADHERING: 2,
PAGE: 3
}), a = cc.Enum({
NONE: 0,
SINGLE: 1,
MULT: 2
}), o = e("ListItem");
cc.Class({
extends: cc.Component,
editor: {
disallowMultiple: !1,
menu: "自定义组件/CH_List",
requireComponent: "CH_ScrollView",
executionOrder: -5e3
},
properties: {
templateType: {
default: i.NODE,
type: i
},
tmpNode: {
default: null,
type: cc.Node,
tooltip: !1,
visible: function() {
var e = this.templateType == i.NODE;
e || (this.tmpNode = null);
return e;
}
},
tmpPrefab: {
default: null,
type: cc.Prefab,
tooltip: !1,
visible: function() {
var e = this.templateType == i.PREFAB;
e || (this.tmpPrefab = null);
return e;
}
},
_slideMode: 1,
slideMode: {
type: n,
tooltip: !1,
get: function() {
return this._slideMode;
},
set: function(e) {
null != e && (this._slideMode = e);
}
},
pageDistance: {
default: .3,
type: cc.Float,
range: [ 0, 1, .1 ],
tooltip: !1,
slide: !0,
visible: function() {
return this._slideMode == n.PAGE;
}
},
pageChangeEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
var e = this._slideMode == n.PAGE;
e || (this.pageChangeEvent = null);
return e;
}
},
_virtual: !0,
virtual: {
tooltip: !1,
get: function() {
return this._virtual;
},
set: function(e) {
null != e && (this._virtual = e);
0 != this._numItems && this._onScrolling();
}
},
cyclic: {
default: !1,
tooltip: !1,
visible: function() {
var e = this.virtual && this.slideMode == n.NORMAL;
e || (this.cyclic = !1);
return e;
}
},
lackCenter: {
default: !1,
tooltip: !1,
visible: function() {
return this.virtual;
}
},
lackSlide: {
default: !1,
tooltip: !1,
visible: function() {
var e = this.virtual && !this.lackCenter;
e || (this.lackSlide = !1);
return e;
}
},
_updateRate: 0,
updateRate: {
type: cc.Integer,
range: [ 0, 6, 1 ],
tooltip: !1,
slide: !0,
get: function() {
return this._updateRate;
},
set: function(e) {
e >= 0 && e <= 6 && (this._updateRate = e);
}
},
frameByFrameRenderNum: {
default: 0,
type: cc.Integer,
range: [ 0, 12, 1 ],
tooltip: !1,
slide: !0
},
renderEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1
},
selectedMode: {
default: a.NONE,
type: a,
tooltip: !1
},
repeatEventSingle: {
default: !1,
tooltip: !1,
visible: function() {
return this.selectedMode == a.SINGLE;
}
},
selectedEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
var e = this.selectedMode > 0;
e || (this.selectedEvent = null);
return e;
}
},
_selectedId: -1,
selectedId: {
visible: !1,
get: function() {
return this._selectedId;
},
set: function(e) {
var t, i = this;
switch (i.selectedMode) {
case a.SINGLE:
if (!i.repeatEventSingle && e == i._selectedId) return;
t = i.getItemByListId(e);
i._selectedId >= 0 ? i._lastSelectedId = i._selectedId : i._lastSelectedId = null;
i._selectedId = e;
t && (t.listItem.selected = !0);
if (i._lastSelectedId >= 0 && i._lastSelectedId != i._selectedId) {
var n = i.getItemByListId(i._lastSelectedId);
n && (n.listItem.selected = !1);
}
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], t, e % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems);
break;

case a.MULT:
if (!(t = i.getItemByListId(e))) return;
i._selectedId >= 0 && (i._lastSelectedId = i._selectedId);
i._selectedId = e;
var o = !t.listItem.selected;
t.listItem.selected = o;
var r = i.multSelected.indexOf(e);
o && r < 0 ? i.multSelected.push(e) : !o && r >= 0 && i.multSelected.splice(r, 1);
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], t, e % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems, o);
}
}
},
_numItems: {
default: 0,
serializable: !1
},
numItems: {
visible: !1,
get: function() {
return this._actualNumItems;
},
set: function(e) {
var t = this;
if (t.checkInited()) if (null == e || e < 0) cc.error("numItems set the wrong::", e); else {
t._actualNumItems = t._numItems = e;
t._forceUpdate = !0;
if (t._virtual) {
t._resizeContent();
t.cyclic && (t._numItems = t._cyclicNum * t._numItems);
t._onScrolling();
t.frameByFrameRenderNum || t.slideMode != n.PAGE || (t.curPageNum = t.nearestListId);
} else {
var i = t.content.getComponent(cc.Layout);
i && (i.enabled = !0);
t._delRedundantItem();
t.firstListId = 0;
if (t.frameByFrameRenderNum > 0) {
for (var a = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum, o = 0; o < a; o++) t._createOrUpdateItem2(o);
if (t.frameByFrameRenderNum < t._numItems) {
t._updateCounter = t.frameByFrameRenderNum;
t._updateDone = !1;
}
} else {
for (var r = 0; r < e; r++) t._createOrUpdateItem2(r);
t.displayItemNum = e;
}
}
}
}
}
},
onLoad: function() {
this._init();
},
onDestroy: function() {
this._itemTmp && this._itemTmp.isValid && this._itemTmp.destroy();
for (;this._pool.size(); ) this._pool.get().destroy();
},
onEnable: function() {
this._registerEvent();
this._init();
},
onDisable: function() {
this._unregisterEvent();
},
_registerEvent: function() {
var e = this;
e.node.on(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0);
e.node.on("touch-up", e._onTouchUp, e, !0);
e.node.on(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0);
e.node.on("scroll-began", e._onScrollBegan, e, !0);
e.node.on("scroll-ended", e._onScrollEnded, e, !0);
e.node.on("scrolling", e._onScrolling, e, !0);
e.node.on(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
},
_unregisterEvent: function() {
var e = this;
e.node.off(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0);
e.node.off("touch-up", e._onTouchUp, e, !0);
e.node.off(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0);
e.node.off("scroll-began", e._onScrollBegan, e, !0);
e.node.off("scroll-ended", e._onScrollEnded, e, !0);
e.node.off("scrolling", e._onScrolling, e, !0);
e.node.off(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
},
_init: function() {
var e = this;
if (!e._inited) {
e._scrollView = e.node.getComponent("CH_ScrollView");
e.content = e._scrollView.content;
if (e.content) {
e._layout = e.content.getComponent(cc.Layout);
e._align = e._layout.type;
e._resizeMode = e._layout.resizeMode;
e._startAxis = e._layout.startAxis;
e._topGap = e._layout.paddingTop;
e._rightGap = e._layout.paddingRight;
e._bottomGap = e._layout.paddingBottom;
e._leftGap = e._layout.paddingLeft;
e._columnGap = e._layout.spacingX;
e._lineGap = e._layout.spacingY;
e._colLineNum;
e._verticalDir = e._layout.verticalDirection;
e._horizontalDir = e._layout.horizontalDirection;
e.setTemplateItem(cc.instantiate(e.templateType == i.PREFAB ? e.tmpPrefab : e.tmpNode));
if (e._slideMode == n.ADHERING || e._slideMode == n.PAGE) {
e._scrollView.inertia = !1;
e._scrollView._onMouseWheel = function() {};
}
e.virtual || (e.lackCenter = !1);
e._lastDisplayData = [];
e.displayData = [];
e._pool = new cc.NodePool();
e._forceUpdate = !1;
e._updateCounter = 0;
e._updateDone = !0;
e.curPageNum = 0;
if (e.cyclic) {
e._scrollView._processAutoScrolling = this._processAutoScrolling.bind(e);
e._scrollView._startBounceBackIfNeeded = function() {
return !1;
};
}
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
switch (e._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
e._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
e._alignCalcType = 2;
}
break;

case cc.Layout.Type.VERTICAL:
switch (e._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
e._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
e._alignCalcType = 4;
}
break;

case cc.Layout.Type.GRID:
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (e._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
e._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
e._alignCalcType = 4;
}
break;

case cc.Layout.AxisDirection.VERTICAL:
switch (e._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
e._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
e._alignCalcType = 2;
}
}
}
e.content.children.forEach(function(e) {
e.removeFromParent();
e.isValid && e.destroy();
});
e._inited = !0;
} else cc.error(e.node.name + "'s cc.ScrollView unset content!");
}
},
_processAutoScrolling: function(e) {
this._scrollView._autoScrollAccumulatedTime += 1 * e;
var t = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
if (this._scrollView._autoScrollAttenuate) {
var i = t - 1;
t = i * i * i * i * i + 1;
}
var n = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(t)), a = this._scrollView.getScrollEndedEventTiming(), o = Math.abs(t - 1) <= a;
if (Math.abs(t - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired) {
this._scrollView._dispatchEvent("scroll-ended-with-threshold");
this._scrollView._isScrollEndedWithThresholdEventFired = !0;
}
o && (this._scrollView._autoScrolling = !1);
var r = n.sub(this._scrollView.getContentPosition());
this._scrollView._moveContent(this._scrollView._clampDelta(r), o);
this._scrollView._dispatchEvent("scrolling");
if (!this._scrollView._autoScrolling) {
this._scrollView._isBouncing = !1;
this._scrollView._scrolling = !1;
this._scrollView._dispatchEvent("scroll-ended");
}
},
setTemplateItem: function(e) {
if (e) {
var t = this;
t._itemTmp = e;
t._resizeMode == cc.Layout.ResizeMode.CHILDREN ? t._itemSize = t._layout.cellSize : t._itemSize = new cc.size(e.width, e.height);
var i = e.getComponent(o), n = !1;
i || (n = !0);
i && (i._btnCom || e.getComponent(cc.Button) || (n = !0));
n && (t.selectedMode = a.NONE);
(i = e.getComponent(cc.Widget)) && i.enabled && (t._needUpdateWidget = !0);
t.selectedMode == a.MULT && (t.multSelected = []);
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
t._colLineNum = 1;
t._sizeType = !1;
break;

case cc.Layout.Type.VERTICAL:
t._colLineNum = 1;
t._sizeType = !0;
break;

case cc.Layout.Type.GRID:
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var r = t.content.width - t._leftGap - t._rightGap;
t._colLineNum = Math.floor((r + t._columnGap) / (t._itemSize.width + t._columnGap));
t._sizeType = !0;
break;

case cc.Layout.AxisDirection.VERTICAL:
var s = t.content.height - t._topGap - t._bottomGap;
t._colLineNum = Math.floor((s + t._lineGap) / (t._itemSize.height + t._lineGap));
t._sizeType = !1;
}
}
}
},
checkInited: function(e) {
e = null == e || e;
if (!this._inited) {
e && cc.error("CH_List initialization not completed!");
return !1;
}
return !0;
},
_resizeContent: function() {
var e, t = this;
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
if (t._customSize) {
var i = t._getFixedSize();
e = t._leftGap + i.val + t._itemSize.width * (t._numItems - i.count) + t._columnGap * (t._numItems - 1) + t._rightGap;
} else e = t._leftGap + t._itemSize.width * t._numItems + t._columnGap * (t._numItems - 1) + t._rightGap;
break;

case cc.Layout.Type.VERTICAL:
if (t._customSize) {
var n = t._getFixedSize();
e = t._topGap + n.val + t._itemSize.height * (t._numItems - n.count) + t._lineGap * (t._numItems - 1) + t._bottomGap;
} else e = t._topGap + t._itemSize.height * t._numItems + t._lineGap * (t._numItems - 1) + t._bottomGap;
break;

case cc.Layout.Type.GRID:
t.lackCenter && (t.lackCenter = !1);
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var a = Math.ceil(t._numItems / t._colLineNum);
e = t._topGap + t._itemSize.height * a + t._lineGap * (a - 1) + t._bottomGap;
break;

case cc.Layout.AxisDirection.VERTICAL:
var o = Math.ceil(t._numItems / t._colLineNum);
e = t._leftGap + t._itemSize.width * o + t._columnGap * (o - 1) + t._rightGap;
}
}
var r = t.content.getComponent(cc.Layout);
r && (r.enabled = !1);
t._allItemSize = e;
t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);
if (t.cyclic) {
var s = t._sizeType ? t.node.height : t.node.width;
t._cyclicPos1 = 0;
s -= t._cyclicPos1;
t._cyclicNum = Math.ceil(s / t._allItemSizeNoEdge) + 1;
var c = t._sizeType ? t._lineGap : t._columnGap;
t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + c;
t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + c * (t._cyclicNum - 1);
t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
t._cycilcAllItemSizeNoEdge += c * (t._cyclicNum - 1);
}
t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
var l = t._lack && t.lackCenter || !t.lackSlide ? .1 : 0, _ = t._lack ? (t._sizeType ? t.node.height : t.node.width) - l : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
_ < 0 && (_ = 0);
t._sizeType ? t.content.height = _ : t.content.width = _;
},
_onScrolling: function(e) {
null == this.frameCount && (this.frameCount = this._updateRate);
if (!this._forceUpdate && e && "scroll-ended" != e.type && this.frameCount > 0) this.frameCount--; else {
this.frameCount = this._updateRate;
if (!this._aniDelRuning) {
if (this.cyclic) {
var t = this.content.getPosition();
t = this._sizeType ? t.y : t.x;
var i = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap), n = this._sizeType ? cc.v2(0, i) : cc.v2(i, 0);
switch (this._alignCalcType) {
case 1:
if (t > -this._cyclicPos1) {
this.content.x = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (t < -this._cyclicPos2) {
this.content.x = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
break;

case 2:
if (t < this._cyclicPos1) {
this.content.x = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (t > this._cyclicPos2) {
this.content.x = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 3:
if (t < this._cyclicPos1) {
this.content.y = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (t > this._cyclicPos2) {
this.content.y = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 4:
if (t > -this._cyclicPos1) {
this.content.y = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (t < -this._cyclicPos2) {
this.content.y = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
}
}
this._calcViewPos();
var a, o, r, s;
if (this._sizeType) {
a = this.viewTop;
r = this.viewBottom;
} else {
o = this.viewRight;
s = this.viewLeft;
}
if (this._virtual) {
this.displayData = [];
var c, l = 0, _ = this._numItems - 1;
if (this._customSize) for (var u = !1; l <= _ && !u; l++) {
c = this._calcItemPos(l);
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
c.right >= s && c.left <= o ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.Type.VERTICAL:
c.bottom <= a && c.top >= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.Type.GRID:
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
c.bottom <= a && c.top >= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.AxisDirection.VERTICAL:
c.right >= s && c.left <= o ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
}
}
} else {
var h = this._itemSize.width + this._columnGap, d = this._itemSize.height + this._lineGap;
switch (this._alignCalcType) {
case 1:
l = (s + this._leftGap) / h;
_ = (o + this._rightGap) / h;
break;

case 2:
l = (-o - this._rightGap) / h;
_ = (-s - this._leftGap) / h;
break;

case 3:
l = (-a - this._topGap) / d;
_ = (-r - this._bottomGap) / d;
break;

case 4:
l = (r + this._bottomGap) / d;
_ = (a + this._topGap) / d;
}
l = Math.floor(l) * this._colLineNum;
_ = Math.ceil(_) * this._colLineNum;
l < 0 && (l = 0);
--_ >= this._numItems && (_ = this._numItems - 1);
for (;l <= _; l++) this.displayData.push(this._calcItemPos(l));
}
if (this.displayData.length <= 0 || !this._numItems) {
this._lastDisplayData = [];
this._delRedundantItem();
return;
}
this.firstListId = this.displayData[0].id;
this.displayItemNum = this.displayData.length;
var p = this._lastDisplayData.length;
if (this._forceUpdate || this.displayItemNum != p || this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[p - 1]) {
this._lastDisplayData = [];
if (this.frameByFrameRenderNum > 0) if (this._numItems > 0) {
this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0;
this._updateDone = !1;
} else {
this._delRedundantItem();
this._updateCounter = 0;
this._updateDone = !0;
} else {
for (var f = 0; f < this.displayItemNum; f++) this._createOrUpdateItem(this.displayData[f]);
this._delRedundantItem();
this._forceUpdate = !1;
}
}
this._calcNearestItem();
}
}
}
},
_calcViewPos: function() {
var e = this.content.getPosition();
switch (this._alignCalcType) {
case 1:
this.elasticLeft = e.x > 0 ? e.x : 0;
this.viewLeft = (e.x < 0 ? -e.x : 0) - this.elasticLeft;
this.viewRight = this.viewLeft + this.node.width;
this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
this.viewRight += this.elasticRight;
break;

case 2:
this.elasticRight = e.x < 0 ? -e.x : 0;
this.viewRight = (e.x > 0 ? -e.x : 0) + this.elasticRight;
this.viewLeft = this.viewRight - this.node.width;
this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
this.viewLeft -= this.elasticLeft;
break;

case 3:
this.elasticTop = e.y < 0 ? Math.abs(e.y) : 0;
this.viewTop = (e.y > 0 ? -e.y : 0) + this.elasticTop;
this.viewBottom = this.viewTop - this.node.height;
this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
this.viewBottom += this.elasticBottom;
break;

case 4:
this.elasticBottom = e.y > 0 ? Math.abs(e.y) : 0;
this.viewBottom = (e.y < 0 ? -e.y : 0) - this.elasticBottom;
this.viewTop = this.viewBottom + this.node.height;
this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
this.viewTop -= this.elasticTop;
}
},
_calcItemPos: function(e) {
var t, i, n, a, o, r, s, c;
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
if (this._customSize) {
var l = this._getFixedSize(e);
o = this._leftGap + (this._itemSize.width + this._columnGap) * (e - l.count) + (l.val + this._columnGap * l.count);
var _ = this._customSize[e];
t = _ > 0 ? _ : this._itemSize.width;
} else {
o = this._leftGap + (this._itemSize.width + this._columnGap) * e;
t = this._itemSize.width;
}
r = o + t;
if (this.lackCenter) {
var u = this.content.width / 2 - this._allItemSizeNoEdge / 2;
o += u;
r += u;
}
return {
id: e,
left: o,
right: r,
x: o + this._itemTmp.anchorX * t,
y: this._itemTmp.y
};

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
if (this._customSize) {
var h = this._getFixedSize(e);
r = -this._rightGap - (this._itemSize.width + this._columnGap) * (e - h.count) - (h.val + this._columnGap * h.count);
var d = this._customSize[e];
t = d > 0 ? d : this._itemSize.width;
} else {
r = -this._rightGap - (this._itemSize.width + this._columnGap) * e;
t = this._itemSize.width;
}
o = r - t;
if (this.lackCenter) {
var p = this.content.width / 2 - this._allItemSizeNoEdge / 2;
o -= p;
r -= p;
}
return {
id: e,
right: r,
left: o,
x: o + this._itemTmp.anchorX * t,
y: this._itemTmp.y
};
}
break;

case cc.Layout.Type.VERTICAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
if (this._customSize) {
var f = this._getFixedSize(e);
n = -this._topGap - (this._itemSize.height + this._lineGap) * (e - f.count) - (f.val + this._lineGap * f.count);
var g = this._customSize[e];
a = n - (i = g > 0 ? g : this._itemSize.height);
} else {
n = -this._topGap - (this._itemSize.height + this._lineGap) * e;
i = this._itemSize.height;
}
a = n - i;
if (this.lackCenter) {
var m = this.content.height / 2 - this._allItemSizeNoEdge / 2;
n -= m;
a -= m;
}
return {
id: e,
top: n,
bottom: a,
x: this._itemTmp.x,
y: a + this._itemTmp.anchorY * i
};

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
if (this._customSize) {
var E = this._getFixedSize(e);
a = this._bottomGap + (this._itemSize.height + this._lineGap) * (e - E.count) + (E.val + this._lineGap * E.count);
var v = this._customSize[e];
i = v > 0 ? v : this._itemSize.height;
} else {
a = this._bottomGap + (this._itemSize.height + this._lineGap) * e;
i = this._itemSize.height;
}
n = a + i;
if (this.lackCenter) {
var S = this.content.height / 2 - this._allItemSizeNoEdge / 2;
n += S;
a += S;
}
return {
id: e,
top: n,
bottom: a,
x: this._itemTmp.x,
y: a + this._itemTmp.anchorY * i
};
}

case cc.Layout.Type.GRID:
var L = Math.floor(e / this._colLineNum);
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
c = (a = (n = -this._topGap - (this._itemSize.height + this._lineGap) * L) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
n = (a = this._bottomGap + (this._itemSize.height + this._lineGap) * L) + this._itemSize.height;
c = a + this._itemTmp.anchorY * this._itemSize.height;
}
s = this._leftGap + e % this._colLineNum * (this._itemSize.width + this._columnGap);
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
s += this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s += (1 - this._itemTmp.anchorX) * this._itemSize.width;
s -= (1 - this.content.anchorX) * this.content.width;
s *= -1;
}
return {
id: e,
top: n,
bottom: a,
x: s,
y: c
};

case cc.Layout.AxisDirection.VERTICAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
r = (o = this._leftGap + (this._itemSize.width + this._columnGap) * L) + this._itemSize.width;
s = o + this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s = (o = (r = -this._rightGap - (this._itemSize.width + this._columnGap) * L) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width;
s += (1 - this.content.anchorX) * this.content.width;
}
c = -this._topGap - e % this._colLineNum * (this._itemSize.height + this._lineGap);
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
c -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
c += (1 - this.content.anchorY) * this.content.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
c -= this._itemTmp.anchorY * this._itemSize.height;
c += this.content.anchorY * this.content.height;
c *= -1;
}
return {
id: e,
left: o,
right: r,
x: s,
y: c
};
}
}
},
_calcExistItemPos: function(e) {
var t = this.getItemByListId(e);
if (!t) return null;
var i = {
id: e,
x: t.x,
y: t.y
};
if (this._sizeType) {
i.top = t.y + t.height * (1 - t.anchorY);
i.bottom = t.y - t.height * t.anchorY;
} else {
i.left = t.x - t.width * t.anchorX;
i.right = t.x + t.width * (1 - t.anchorX);
}
return i;
},
getItemPos: function(e) {
return this._virtual ? this._calcItemPos(e) : this.frameByFrameRenderNum ? this._calcItemPos(e) : this._calcExistItemPos(e);
},
_getFixedSize: function(e) {
if (!this._customSize) return null;
null == e && (e = this._numItems);
var t = 0, i = 0;
for (var n in this._customSize) if (parseInt(n) < e) {
t += this._customSize[n];
i++;
}
return {
val: t,
count: i
};
},
_onScrollBegan: function() {
this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
},
_onScrollEnded: function() {
var e = this;
if (null != e.scrollToListId) {
var t = e.getItemByListId(e.scrollToListId);
e.scrollToListId = null;
t && t.runAction(new cc.sequence(new cc.scaleTo(.1, 1.06), new cc.scaleTo(.1, 1)));
}
e._onScrolling();
e._slideMode != n.ADHERING || e.adhering ? e._slideMode == n.PAGE && (null != e._beganPos ? this._pageAdhere() : e.adhere()) : e.adhere();
},
_onTouchStart: function(e, t) {
if (!this._scrollView.hasNestedViewGroup(e, t) && (e.eventPhase !== cc.Event.AT_TARGET || e.target !== this.node)) {
for (var i = e.target; null == i._listId && i.parent; ) i = i.parent;
this._scrollItem = null != i._listId ? i : e.target;
}
},
_onTouchUp: function() {
var e = this;
e._scrollPos = null;
if (e._slideMode == n.ADHERING) {
e.adhering && (e._adheringBarrier = !0);
e.adhere();
} else e._slideMode == n.PAGE && (null != e._beganPos ? e._pageAdhere() : e.adhere());
this._scrollItem = null;
},
_onTouchCancelled: function(e, t) {
var i = this;
if (!i._scrollView.hasNestedViewGroup(e, t) && !e.simulate) {
i._scrollPos = null;
if (i._slideMode == n.ADHERING) {
i.adhering && (i._adheringBarrier = !0);
i.adhere();
} else i._slideMode == n.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere());
this._scrollItem = null;
}
},
_onSizeChanged: function() {
this.checkInited(!1) && this._onScrolling();
},
_onItemAdaptive: function(e) {
var t = this;
if (this.checkInited(!1) && (!this._sizeType && e.width != this._itemSize.width || this._sizeType && e.height != this._itemSize.height)) {
this._customSize || (this._customSize = {});
var i = this._sizeType ? e.height : e.width;
if (this._customSize[e._listId] != i) {
this._customSize[e._listId] = i;
this._resizeContent();
this.content.children.forEach(function(e) {
t._updateItemPos(e);
});
if (!isNaN(this._scrollToListId)) {
this._scrollPos = null;
this.unschedule(this._scrollToSo);
this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
}
}
}
},
_pageAdhere: function() {
var e = this;
if (e.cyclic || !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)) {
var t = e._sizeType ? e.viewTop : e.viewLeft, i = (e._sizeType ? e.node.height : e.node.width) * e.pageDistance;
if (Math.abs(e._beganPos - t) > i) switch (e._alignCalcType) {
case 1:
case 4:
e._beganPos > t ? e.prePage(.5) : e.nextPage(.5);
break;

case 2:
case 3:
e._beganPos < t ? e.prePage(.5) : e.nextPage(.5);
} else e.elasticTop <= 0 && e.elasticRight <= 0 && e.elasticBottom <= 0 && e.elasticLeft <= 0 && e.adhere();
e._beganPos = null;
}
},
adhere: function() {
var e = this;
if (e.checkInited() && !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)) {
e.adhering = !0;
e._calcNearestItem();
var t = (e._sizeType ? e._topGap : e._leftGap) / (e._sizeType ? e.node.height : e.node.width);
e.scrollTo(e.nearestListId, .7, t);
}
},
update: function() {
if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
for (var e = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum, t = this._updateCounter; t < e; t++) {
var i = this.displayData[t];
i && this._createOrUpdateItem(i);
}
if (this._updateCounter >= this.displayItemNum - 1) if (this._doneAfterUpdate) {
this._updateCounter = 0;
this._updateDone = !1;
this._scrollView.isScrolling() || (this._doneAfterUpdate = !1);
} else {
this._updateDone = !0;
this._delRedundantItem();
this._forceUpdate = !1;
this._calcNearestItem();
this.slideMode == n.PAGE && (this.curPageNum = this.nearestListId);
} else this._updateCounter += this.frameByFrameRenderNum;
} else if (this._updateCounter < this._numItems) {
for (var a = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, o = this._updateCounter; o < a; o++) this._createOrUpdateItem2(o);
this._updateCounter += this.frameByFrameRenderNum;
} else {
this._updateDone = !0;
this._calcNearestItem();
this.slideMode == n.PAGE && (this.curPageNum = this.nearestListId);
}
},
_createOrUpdateItem: function(e) {
var t = this.getItemByListId(e.id);
if (t) {
if (this._forceUpdate && this.renderEvent) {
t.setPosition(new cc.v2(e.x, e.y));
this._resetItemSize(t);
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e.id % this._actualNumItems);
}
} else {
var i = this._pool.size() > 0;
if ((t = i ? this._pool.get() : cc.instantiate(this._itemTmp))._listId != e.id) {
t._listId = e.id;
t.setContentSize(this._itemSize);
}
t.setPosition(new cc.v2(e.x, e.y));
this._resetItemSize(t);
this.content.addChild(t);
if (i && this._needUpdateWidget) {
var n = t.getComponent(cc.Widget);
n && n.updateAlignment();
}
t.setSiblingIndex(this.content.childrenCount - 1);
var a = t.getComponent(o);
t.listItem = a;
if (a) {
a._list = this;
a._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e.id % this._actualNumItems);
}
this._resetItemSize(t);
this._updateListItem(t.listItem);
this._lastDisplayData.indexOf(e.id) < 0 && this._lastDisplayData.push(e.id);
},
_createOrUpdateItem2: function(e) {
var t = this.content.children[e];
if (t) {
if (this._forceUpdate && this.renderEvent) {
t._listId = e;
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e);
}
} else {
(t = cc.instantiate(this._itemTmp))._listId = e;
this.content.addChild(t);
var i = t.getComponent(o);
t.listItem = i;
if (i) {
i._list = this;
i._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e);
}
this._updateListItem(t.listItem);
this._lastDisplayData.indexOf(e) < 0 && this._lastDisplayData.push(e);
},
_updateListItem: function(e) {
if (e && this.selectedMode > a.NONE) switch (this.selectedMode) {
case a.SINGLE:
e.selected = this.selectedId == e.node._listId;
break;

case a.MULT:
e.selected = this.multSelected.indexOf(e.node._listId) >= 0;
}
},
_resetItemSize: function() {},
_updateItemPos: function(e) {
var t = isNaN(e) ? e : this.getItemByListId(e), i = this.getItemPos(t._listId);
t.setPosition(i.x, i.y);
},
setMultSelected: function(e, t) {
var i = this;
if (i.checkInited()) {
Array.isArray(e) || (e = [ e ]);
if (null == t) i.multSelected = e; else {
var n, a;
if (t) for (var o = e.length - 1; o >= 0; o--) {
n = e[o];
(a = i.multSelected.indexOf(n)) < 0 && i.multSelected.push(n);
} else for (var r = e.length - 1; r >= 0; r--) {
n = e[r];
(a = i.multSelected.indexOf(n)) >= 0 && i.multSelected.splice(a, 1);
}
}
i._forceUpdate = !0;
i._onScrolling();
}
},
updateItem: function(e) {
if (this.checkInited()) {
Array.isArray(e) || (e = [ e ]);
for (var t = 0, i = e.length; t < i; t++) {
var n = e[t], a = this.getItemByListId(n);
a && cc.Component.EventHandler.emitEvents([ this.renderEvent ], a, n % this._actualNumItems);
}
}
},
updateAll: function() {
this.checkInited() && (this.numItems = this.numItems);
},
getItemByListId: function(e) {
for (var t = this.content.childrenCount - 1; t >= 0; t--) if (this.content.children[t]._listId == e) return this.content.children[t];
},
_getOutsideItem: function() {
for (var e, t, i = [], n = this.content.childrenCount - 1; n >= 0; n--) {
e = this.content.children[n];
if (t = !0) for (var a = this.displayItemNum - 1; a >= 0; a--) if (this.displayData[a]) {
var o = this.displayData[a].id;
if (e._listId == o) {
t = !1;
break;
}
}
t && i.push(e);
}
return i;
},
_delRedundantItem: function() {
if (this._virtual) for (var e = this._getOutsideItem(), t = e.length - 1; t >= 0; t--) {
var i = e[t];
this._scrollItem && i._listId == this._scrollItem._listId || this._pool.put(i);
} else for (;this.content.childrenCount > this._numItems; ) this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
},
_delSingleItem: function(e) {
e.removeFromParent();
e.destroy && e.destroy();
e = null;
},
aniDelItem: function(e, t, i) {
var n = this;
if (!n.checkInited() || n.cyclic || !n._virtual) return cc.error("This function is not allowed to be called!");
if (n._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
var o = n.getItemByListId(e);
if (o) {
n._aniDelRuning = !0;
var r = n.displayData[n.displayData.length - 1].id, s = o.listItem.selected;
o.listItem.showAni(i, function() {
var i;
r < n._numItems - 2 && (i = r + 1);
if (null != i) {
var c = n._calcItemPos(i);
n.displayData.push(c);
n._virtual ? n._createOrUpdateItem(c) : n._createOrUpdateItem2(i);
} else n._numItems--;
if (n.selectedMode == a.SINGLE) s ? n._selectedId = -1 : n._selectedId - 1 >= 0 && n._selectedId--; else if (n.selectedMode == a.MULT && n.multSelected.length) {
var l = n.multSelected.indexOf(e);
l >= 0 && n.multSelected.splice(l, 1);
for (var _ = n.multSelected.length - 1; _ >= 0; _--) n.multSelected[_] >= e && n.multSelected[_]--;
}
if (n._customSize) {
n._customSize[e] && delete n._customSize[e];
var u, h = {};
for (var d in n._customSize) {
u = n._customSize[d];
h[(d = parseInt(d)) - (d >= e ? 1 : 0)] = u;
}
n._customSize = h;
}
for (var p, f, g = null != i ? i : r; g >= e + 1; g--) if (o = n.getItemByListId(g)) {
var m = n._calcItemPos(g - 1);
p = [ new cc.moveTo(.2333, new cc.v2(m.x, m.y)) ];
if (g <= e + 1) {
f = !0;
p.push(new cc.CallFunc(function() {
n._aniDelRuning = !1;
t(e);
}));
}
p.length > 1 ? o.runAction(new cc.Sequence(p)) : o.runAction(p[0]);
}
if (!f) {
n._aniDelRuning = !1;
t(e);
}
}, !0);
} else t(e);
},
scrollTo: function(e, t, i, n) {
var a = this;
if (a.checkInited()) {
null == t ? t = .5 : t < 0 && (t = 0);
e < 0 ? e = 0 : e >= a._numItems && (e = a._numItems - 1);
!a._virtual && a._layout && a._layout.enabled && a._layout.updateLayout();
var o, r, s = a.getItemPos(e);
switch (a._alignCalcType) {
case 1:
o = s.left;
o -= null != i ? a.node.width * i : a._leftGap;
s = new cc.v2(o, 0);
break;

case 2:
o = s.right - a.node.width;
o += null != i ? a.node.width * i : a._rightGap;
s = new cc.v2(o + a.content.width, 0);
break;

case 3:
r = s.top;
r += null != i ? a.node.height * i : a._topGap;
s = new cc.v2(0, -r);
break;

case 4:
r = s.bottom + a.node.height;
r -= null != i ? a.node.height * i : a._bottomGap;
s = new cc.v2(0, -r + a.content.height);
}
var c = a.content.getPosition();
c = Math.abs(a._sizeType ? c.y : c.x);
var l = a._sizeType ? s.y : s.x;
if (Math.abs((null != a._scrollPos ? a._scrollPos : c) - l) > .5) {
a._scrollPos = l;
a._scrollToListId = e;
a._scrollToEndTime = new Date().getTime() / 1e3 + t;
a._scrollView.scrollToOffset(s, t);
a._scrollToSo = a.scheduleOnce(function() {
a._adheringBarrier || (a.adhering = a._adheringBarrier = !1);
a._scrollPos = a._scrollToListId = a._scrollToEndTime = a._scrollToSo = null;
if (n) {
var t = a.getItemByListId(e);
t && t.runAction(new cc.sequence(new cc.scaleTo(.1, 1.05), new cc.scaleTo(.1, 1)));
}
}, t + .1);
t <= 0 && a._onScrolling();
}
}
},
_calcNearestItem: function() {
var e, t, i, n, a, o, r = this;
r.nearestListId = null;
r._virtual && r._calcViewPos();
i = r.viewTop;
n = r.viewRight;
a = r.viewBottom;
o = r.viewLeft;
for (var s = !1, c = 0; c < r.content.childrenCount && !s; c += r._colLineNum) if (e = this._virtual ? this.displayData[c] : this._calcExistItemPos(c)) {
t = this._sizeType ? (e.top + e.bottom) / 2 : t = (e.left + e.right) / 2;
switch (this._alignCalcType) {
case 1:
if (e.right >= o) {
this.nearestListId = e.id;
o > t && (this.nearestListId += this._colLineNum);
s = !0;
}
break;

case 2:
if (e.left <= n) {
this.nearestListId = e.id;
n < t && (this.nearestListId += this._colLineNum);
s = !0;
}
break;

case 3:
if (e.bottom <= i) {
this.nearestListId = e.id;
i < t && (this.nearestListId += this._colLineNum);
s = !0;
}
break;

case 4:
if (e.top >= a) {
this.nearestListId = e.id;
a > t && (this.nearestListId += this._colLineNum);
s = !0;
}
}
}
if ((e = this._virtual ? this.displayData[this.displayItemNum - 1] : this._calcExistItemPos(this._numItems - 1)) && e.id == r._numItems - 1) {
t = r._sizeType ? (e.top + e.bottom) / 2 : t = (e.left + e.right) / 2;
switch (r._alignCalcType) {
case 1:
n > t && (r.nearestListId = e.id);
break;

case 2:
o < t && (r.nearestListId = e.id);
break;

case 3:
a < t && (r.nearestListId = e.id);
break;

case 4:
i > t && (r.nearestListId = e.id);
}
}
},
prePage: function(e) {
if (this.checkInited()) {
null == e && (e = .5);
this.skipPage(this.curPageNum - 1, e);
}
},
nextPage: function(e) {
if (this.checkInited()) {
null == e && (e = .5);
this.skipPage(this.curPageNum + 1, e);
}
},
skipPage: function(e, t) {
var i = this;
if (i.checkInited()) {
if (i._slideMode != n.PAGE) return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
if (!(e < 0 || e >= i._numItems) && i.curPageNum != e) {
i.curPageNum = e;
i.pageChangeEvent && cc.Component.EventHandler.emitEvents([ i.pageChangeEvent ], e);
i.scrollTo(e, t);
}
}
},
calcCustomSize: function(e) {
var t = this;
if (t.checkInited()) {
if (!t._itemTmp) return cc.error("Unset template item!");
if (!t.renderEvent) return cc.error("Unset Render-Event!");
t._customSize = {};
var i = cc.instantiate(t._itemTmp);
t.content.addChild(i);
for (var n = 0; n < e; n++) {
cc.Component.EventHandler.emitEvents([ t.renderEvent ], i, n);
i.height == t._itemSize.height && i.width == t._itemSize.width || (t._customSize[n] = t._sizeType ? i.height : i.width);
}
Object.keys(t._customSize).length || (t._customSize = null);
i.removeFromParent();
i.destroy && i.destroy();
return t._customSize;
}
}
});
cc._RF.pop();
}, {
ListItem: "ListItem"
} ],
CH_popwin_base: [ function(e, t) {
"use strict";
cc._RF.push(t, "438d03k9wRGPL3Sa4N/teHf", "CH_popwin_base");
cc.Class({
extends: cc.Component,
properties: {
_cmpAni: null
},
onLoad: function() {
this._cmpAni = this.node.getComponent(cc.Animation);
this._cmpAni.on("finished", this.uiPlayFinish, this);
},
start: function() {
if (this._cmpAni) {
var e = this._getClipName(0);
e && this._cmpAni.play(e);
}
},
setShowEndCall: function(e) {
this._startCall = e;
},
startShowEnd: function() {
var e = this._getClipName(1);
e && this._cmpAni.play(e);
this._startCall && this._startCall();
},
uiPlayFinish: function(e, t) {
t.name == this._getClipName(0) && this.startShowEnd();
},
_getClipName: function(e) {
if (this._cmpAni) {
var t = this._cmpAni.getClips();
if (t[e]) return t[e]._name;
}
}
});
cc._RF.pop();
}, {} ],
CarouselCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "73d16GVRspMD7usCYjOwDlD", "CarouselCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("./CarouselItemCpt"), a = e("./CarouselIndicatorCpt"), o = cc._decorator, r = o.ccclass, s = o.property, c = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.showItemList = [];
t.indexItem = null;
t.nextItem = null;
t.isTouch = !1;
t.time = 3;
t.indicatorCpt = null;
t._curIdx = 0;
return t;
}
Object.defineProperty(t.prototype, "curIdx", {
get: function() {
return this._curIdx;
},
set: function(e) {
this._curIdx = e;
this.indicatorCpt && this.indicatorCpt.showPage(e);
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
this.schedule(this.onToNext, this.time);
};
t.prototype.start = function() {
this.updateView();
};
t.prototype.onEnable = function() {
this.isTouch = !1;
};
t.prototype.onTouchStart = function() {
this.isTouch = !0;
};
t.prototype.onTouchMove = function() {};
t.prototype.onTouchEnd = function() {
this.isTouch = !1;
};
t.prototype.initView = function() {};
t.prototype.updateView = function() {
this.showItemList = [];
for (var e = 0, t = this.node.getComponentsInChildren(n.default); e < t.length; e++) {
(a = t[e]).carouselCpt = this;
if (a.isOpen) {
a.node.active = !0;
this.showItemList.push(a);
} else a.node.active = !1;
}
this.showItemList.sort(function(e, t) {
return e.ord - t.ord;
});
this.indicatorCpt && this.indicatorCpt.initPage(this.showItemList.length);
this.indexItem = this.showItemList[0];
this.nextItem = this.showItemList[1];
for (var i = 0; i < this.showItemList.length; i++) {
var a;
(a = this.showItemList[i]).node.x = 0 == i ? 0 : this.node.width;
}
this.curIdx = 0;
};
t.prototype.onToNext = function() {
var e = this;
if (!this.isTouch && this.nextItem && this.nextItem.node) {
this.indexItem.node.x = 0;
this.nextItem.node.x = this.node.width;
cc.tween(this.indexItem.node).to(.4, {
x: -this.node.width
}).start();
cc.tween(this.nextItem.node).to(.4, {
x: 0
}).call(function() {
e.curIdx = e.showItemList.indexOf(e.nextItem);
e.indexItem = e.nextItem;
var t = e.showItemList.indexOf(e.nextItem) + 1;
e.showItemList[t] ? e.nextItem = e.showItemList[t] : e.nextItem = e.showItemList[0];
}).start();
}
};
__decorate([ s ], t.prototype, "time", void 0);
__decorate([ s(a.default) ], t.prototype, "indicatorCpt", void 0);
return __decorate([ r ], t);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {
"./CarouselIndicatorCpt": "CarouselIndicatorCpt",
"./CarouselItemCpt": "CarouselItemCpt"
} ],
CarouselIndicatorCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "2dbbbzTbM5BBqfo9BjgkNkI", "CarouselIndicatorCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.item = null;
t.itemList = [];
return t;
}
t.prototype.onLoad = function() {};
t.prototype.initPage = function(e) {
for (var t = 0; t < e; t++) if (this.itemList[t]) ; else {
var i = cc.instantiate(this.item);
i.parent = this.node;
i.active = !0;
this.itemList.push(i);
}
};
t.prototype.showPage = function(e) {
this.node.active = this.itemList.length >= 2;
this.itemList.forEach(function(t, i) {
cc.find("select", t).active = i == e;
});
};
__decorate([ o(cc.Node) ], t.prototype, "item", void 0);
return __decorate([ a ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
CarouselItemCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "95ed99hxYZH34pXViEuqCKP", "CarouselItemCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.carouselCpt = null;
t.reportKey = "";
t._isOpen = !0;
t.ord = 0;
return t;
}
Object.defineProperty(t.prototype, "isOpen", {
get: function() {
return this._isOpen;
},
set: function(e) {
this._isOpen = e;
this.carouselCpt && this.carouselCpt.updateView();
},
enumerable: !1,
configurable: !0
});
__decorate([ o ], t.prototype, "reportKey", void 0);
return __decorate([ a ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
DelayCmp: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "384a3c6KLpGyarFjKOUEgPr", "DelayCmp");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = (n.property, function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.abortFunc = [];
return t;
}
t.prototype.onLoad = function() {};
t.prototype.onDestroy = function() {
this.clear();
};
t.prototype.clear = function() {
for (var e = 0, t = this.abortFunc; e < t.length; e++) {
var i = t[e];
i && i();
}
this.abortFunc = [];
};
t.prototype.getPromise = function(e, t) {
var i;
return {
promise: new Promise(function(t, n) {
i = n;
e(t, n);
}),
abort: function() {
t && t();
i({
message: "the promise is aborted"
});
}
};
};
t.prototype.delay = function(e) {
var t = this, i = this.getPromise(function(i) {
t.scheduleOnce(function() {
i();
t.abortFunc = t.abortFunc.filter(function(e) {
return e != a;
});
}, e);
}), n = i.promise, a = i.abort;
this.abortFunc.push(a);
return n;
};
return __decorate([ a ], t);
}(cc.Component));
i.default = o;
cc._RF.pop();
}, {} ],
DragObjCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "6616eGBuIRPtbZDOBYOGJyH", "DragObjCmp");
cc.Class({
extends: cc.Component,
properties: {
bCanOutScreen: {
default: !1,
tooltip: "是否允许拖动超出屏幕"
}
},
onEnable: function() {
this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
},
onDisable: function() {
this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
},
_onTouchMove: function(e) {
var t = e.getLocation();
if (this.bCanOutScreen) this.node.position = this.node.parent.convertToNodeSpaceAR(t); else {
var i = cc.winSize.width, n = cc.winSize.height, a = t, o = this.node.width, r = this.node.height;
a.x + o / 2 > i && (a.x = i - o / 2);
a.x - o / 2 < 0 && (a.x = o / 2);
a.y + r / 2 > n && (a.y = n - r / 2);
a.y - 2 * r / 2 < 0 && (a.y = 2 * r / 2);
this.node.position = this.node.parent.convertToNodeSpaceAR(a);
}
},
_onTouchEnd: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
EnglishCfg: [ function(e, t) {
"use strict";
cc._RF.push(t, "fe06amycXhMkqsKIfqxT74J", "EnglishCfg");
t.exports = {
loggin_in: "Logging in",
network_connecting: "Network is connecting",
new_ver: "For your better playing experience, please update to the latest version.",
kick_out_game: "Hanging up for a long time, has been automatically kicked out of the table!!",
go_back_login: "Please re-login",
cannot_entergame: "The game no download",
dissolve_room: " System forced to dissolve the room",
acc_online: "Current account is online",
add_score_succ: "Successfully added %s points",
app_restart: "Please restart to update the Game to the latest version",
user_tick_notice: "You have been forced offline, please contact the administrator.",
get_luckypack_tips: "You've got the red envelope  click the red envelope to open",
reconnect: "reconnecting...",
login_fail_again: "Login failed, please check the network and then log in again",
system_maintenance_tips: "Cash Hero is maintaining",
not_enough_coins: "Oops,you don't have enough coins!",
invalid_token: "The automatic login has expired. Please log in again",
Purchasing: "Purchasing...",
loading: "loading...",
network_error: "Network connection failed, please check the network"
};
cc._RF.pop();
}, {} ],
EventBtnCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "88ec83owo5IiaADG5xVoSlR", "EventBtnCmp");
cc.Class({
extends: cc.Component,
editor: {
menu: "通用/事件按钮",
requireComponent: cc.Button
},
properties: {
key: ""
},
onLoad: function() {
var e = this;
this.node.getComponent(cc.Button) && this.node.on("click", function() {
Global.dispatchEvent(e.key, e);
});
}
});
cc._RF.pop();
}, {} ],
EventDef: [ function(e, t) {
"use strict";
cc._RF.push(t, "76cfbWnrjxOI467NvAoYcaF", "EventDef");
var i = cc.Class({
extends: cc.Component,
statics: {
LOGIN_POP_UI: "NEXT_LOGIN_POP_UI",
NOT_ENOUGH_COIN_POP_UI: "NOT_ENOUGH_COIN_POP_UI",
NEXT_POP_UI: "NEXT_POP_UI",
NOT_ENOUGH_COINS: "not_enough_coins",
REFRESH_PLAYER_HEAD: "REFRESH_PLAYER_HEAD",
UPDATE_TASK_REDPOINT: "UPDATE_TASK_REDPOINT",
REFUSH_CH_MAIL_STATE: "REFUSH_CH_MAIL_STATE",
REMOVE_CH_MAIL_ITEM: "REMOVE_CH_MAIL_ITEM",
CHANGE_USER_HEAD: "CHANGE_USER_HEAD",
REFRESH_SHOP_COIN: "REFRESH_SHOP_COIN",
SYS_CHANGE_LANGUAGE: "SYS_CHANGE_LANGUAGE"
}
});
window.EventId = i;
cc._RF.pop();
}, {} ],
EventListenerCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "b3e911TWoZLh4Z19tO0/EBb", "EventListenerCmp");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var a = 0;
return function() {
return a >= e.length ? {
done: !0
} : {
done: !1,
value: e[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.listenerList = [];
},
registerEvent: function(e, t, i) {
var n = {
eventName: e,
func: t,
obj: i
};
Global.registerEvent(n.eventName, n.func, n.obj);
this.listenerList.push(n);
},
clear: function() {
for (var e, t = cc.find("Canvas"), n = i(this.listenerList); !(e = n()).done; ) {
var a = e.value;
t && t.off(a.eventName, a.func, a.obj);
}
this.listenerList = [];
},
onDestroy: function() {
this.clear();
}
});
cc._RF.pop();
}, {} ],
EventManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "0ff2bTm9f1KK6HvNRck4Y9j", "EventManager");
cc.Class({
extends: cc.Component,
statics: {
_listeners: null,
emit: function(e) {
this._listeners = this._listeners || {};
var t = [].slice.call(arguments, 1), i = this._listeners["$" + e];
if (i) for (var n = (i = i.slice(0)).length - 1; n >= 0; n--) i[n].tgt ? i[n].cb.apply(i[n].tgt, t) : i[n].cb.apply(t);
try {
cc.log("emit event (" + e + "): ", JSON.stringify(t));
} catch (e) {}
},
on: function(e, t, i) {
this._listeners = this._listeners || {};
var n = {
cb: t,
tgt: i
};
(this._listeners["$" + e] = this._listeners["$" + e] || []).push(n);
},
once: function(e, t) {
function i() {
this.off(e, i);
t.apply(targtet, arguments);
}
i.fn = t;
this.on(e, i);
},
off: function(e, t) {
this._listeners = this._listeners || {};
0 == arguments.length && (this._listeners = {});
var i = this._listeners["$" + e];
if (i) if (1 != arguments.length) {
for (var n, a = 0; a < i.length; a++) if ((n = i[a]).cb === t || n.cb.fn === t) {
i.splice(a, 1);
break;
}
} else delete this._listeners["$" + e];
}
}
});
cc._RF.pop();
}, {} ],
FloatTipEx: [ function(e, t) {
"use strict";
cc._RF.push(t, "5df3apbLuVMTrFqVGxG+9fT", "FloatTipEx");
cc.Class({
extends: e("FloatTip"),
show: function(e, t, i) {
var n = this;
if (this._tips !== e) {
this._tips = e;
if (this._floatTipPrefab) {
var a = null;
if (t) {
for (var o = 0; o < this._topList.length; ++o) if (!this._topList[o].active) {
a = this._topList[o];
break;
}
} else for (var r = 0; r < this._list.length; ++r) if (!this._list[r].active) {
a = this._list[r];
cc.isValid(a, !0) || this._list.splice(r, 1);
break;
}
if (null === a || !cc.isValid(a, !0)) {
a = cc.instantiate(this._floatTipPrefab);
t ? this._topList.push(a) : this._list.push(a);
}
if (t) {
null === a.parent && cc.game.addPersistRootNode(a);
var s = cc.find("Canvas").getComponent(cc.Canvas).designResolution;
a.position = cc.v2(s.width / 2, s.height / 2);
} else {
var c = cc.find("Canvas");
if (cc.isValid(c, !0)) {
a.parent = c;
a.position = cc.v2(0, 0);
}
}
a.zIndex = Global.CONST_NUM.HIGHT_ZORDER;
a.active = !0;
if ((e += "") && "string" == typeof e) {
var l = cc.find("spr_bg/lbl_content", a).getComponent(cc.RichText);
l.string = "<b>" + e + "</b>";
l.node.width > 800 && (l.maxWidth = 800);
l.node.color = i || cc.Color.WHITE;
}
var _ = a.getChildByName("spr_bg").getComponent(cc.Animation);
if (_) {
_.play("FloatTipMoveAndFade");
_.on("stop", function() {
a.active = !1;
n._tips = "";
});
} else a.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
a.active = !1;
n._tips = "";
})));
}
}
}
});
cc._RF.pop();
}, {
FloatTip: "FloatTip"
} ],
FloatTip: [ function(e, t) {
"use strict";
cc._RF.push(t, "f441e7ECPtE1bqcpDmo6ij0", "FloatTip");
cc.Class({
extends: cc.Component,
properties: {
spr_bg: cc.Sprite,
lbl_content: cc.Label,
bg_sprire_frame: cc.SpriteFrame,
_floatTipPrefab: null,
_tips: "",
_list: [],
_topList: []
},
init: function(e) {
var t = this;
cc.loader.loadRes(e, cc.Prefab, function(e, i) {
e || (t._floatTipPrefab = i);
});
},
start: function() {},
onEnable: function() {
this.node.position = Global.centerPos;
},
clear: function() {
this._list = [];
},
show: function(e, t, i) {
var n = this;
if (this._tips !== e) {
this._tips = e;
if (this._floatTipPrefab) {
var a = null;
if (t) {
for (var o = 0; o < this._topList.length; ++o) if (!this._topList[o].active) {
a = this._topList[o];
break;
}
} else for (var r = 0; r < this._list.length; ++r) if (!this._list[r].active) {
a = this._list[r];
cc.isValid(a, !0) || this._list.splice(r, 1);
break;
}
if (null === a || !cc.isValid(a, !0)) {
a = cc.instantiate(this._floatTipPrefab);
t ? this._topList.push(a) : this._list.push(a);
}
if (t) {
null === a.parent && cc.game.addPersistRootNode(a);
var s = cc.find("Canvas").getComponent(cc.Canvas).designResolution;
a.position = cc.v2(s.width / 2, s.height / 2);
} else {
var c = cc.find("Canvas");
if (cc.isValid(c, !0)) {
a.parent = c;
a.position = cc.v2(0, 0);
}
}
a.zIndex = Global.CONST_NUM.HIGHT_ZORDER;
a.active = !0;
if ((e += "") && "string" == typeof e) {
var l = cc.find("spr_bg/lbl_content", a).getComponent(cc.Label);
l.string = e;
l.node.color = i || cc.Color.WHITE;
}
var _ = a.getChildByName("spr_bg").getComponent(cc.Animation);
if (_) {
_.play("FloatTipMoveAndFade");
_.on("stop", function() {
a.active = !1;
n._tips = "";
});
} else a.runAction(cc.sequence(cc.delayTime(1.2), cc.callFunc(function() {
a.active = !1;
n._tips = "";
})));
}
}
}
});
cc._RF.pop();
}, {} ],
GameConfig: [ function(e, t) {
"use strict";
cc._RF.push(t, "3dea8Fi7W9GR4weoEoe1rGn", "GameConfig");
var i = e("GlobalVar");
i.SCENE_NAME = {
LAUNCH: "Launch_BC",
HOTUPDATE: "HotUpdate_BC",
LOGIN: "Login_BC",
HALL_PRELOAD: "PreLoading_BC",
HALL: "Hall_BC",
CHANGE_LANGUAGE: "ChangeLanguage"
};
i.APP_ORIENTATION = "portrait";
i.HALL_TOPCOIN_PATH = "Canvas/top/coin_bg";
i.HALL_COIN_NODE_PATH = "Canvas/top/coin_bg/spr_coin";
i.HALL_COIN_LABEL_NODE_PATH = "Canvas/top/coin_bg/lbl_coin";
i.INGAME_COIN_LABEL_NODE_PATH = "Canvas/safe_node/LMSlots_Top/playerCoins/lbl_coinsNum";
i.INGAME_COIN_NODE_PATH = "Canvas/safe_node/LMSlots_Top/playerCoins/icon_coin";
i.QUEST_REWARD = 35e5;
i.SYS_OPEN = {
GUIDE_CHANGEBET: 3,
QUEST_TASK: 4,
PIG_BANK: 8,
PIG_BANK_FREEBUY: 20,
FRIEND: 1500,
HERO_CARD: 12,
LUCKY_SMASH: 16,
BINGO: 10,
DAILYTASK: 5,
LUCKY_CARD: 25,
HERO_PALACE: 1
};
Global.SHOP_POS_ID = {
HALL: 1,
GAME: 2,
PERSONALINFO: 2,
NOENOUGHMONEY: 2,
MULTIPLAYERS: 3
};
cc._RF.pop();
}, {
GlobalVar: "GlobalVar"
} ],
GameHotupdate: [ function(e, t) {
"use strict";
cc._RF.push(t, "1c87dFagYtGjK/l5RQOJoEQ", "GameHotupdate");
cc.Class({
extends: e("hotupdate"),
properties: {},
onLoad: function() {},
start: function() {},
startUpdate: function() {
this.initHotupdate();
this.checkForceAppUpdate();
},
SetUpdateProcess: function(e, t, i) {
cc.vv.AppData.setHotupdateStart(!0);
var n = e;
if (cc.isValid(this.progressBar, !0)) {
var a = this.progressBar.progress;
n = e > a ? e : a;
this.progressBar.progress = n;
}
if (cc.isValid(this.lblTips, !0)) {
console.log("当前进度条值:", o);
var o = cc.js.formatStr("(%sMB/%sMB)", (t / 1024 / 1024).toFixed(2), (i / 1024 / 1024).toFixed(2));
this.lblTips.string = Math.floor(100 * n) + "%" + o;
}
}
});
cc._RF.pop();
}, {
hotupdate: "hotupdate"
} ],
GameIdMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "18745fQWrhGyJjeJoz1yATH", "GameIdMgr");
var i, n = ((i = {
SLOT_COMESOON: 9999,
SLOT_COMESOON1: 1e4,
SLOT_COMESOON2: 10001,
SLOT_COMESOON3: 10002,
ANDAR_BAHAR: 11,
CRASH: 12,
JHANDI_MUNDA: 13,
HORSE_RACING: 14,
WINGO_LOTTERY: 15,
FORTUNE_WHEEL: 16,
FORTUNE_WHEEL_POKER: 295,
DRAGON_VS_TIGER: 17,
ROULETTE: 18,
BACCARAT: 19,
SEVEN_UP_DOWN: 20,
BLACK_JACK: 255,
C_AVIATOR: 22,
C_AVIATRIX: 23,
C_CRASHX: 24,
C_CRICKETX: 25,
C_JETX: 26,
C_ZEPPELIN: 27,
S_DICE: 28,
S_LIMBO: 29,
S_PLINKO: 30,
S_KENO: 31,
S_MINES: 32,
S_HILO: 33,
S_TOWERS: 34,
DOUBLE_ROLL: 35,
S_COINS: 36,
S_CRYPTO: 37,
S_TRIPLE: 38,
S_CAPPADOCIA: 39,
TEENPATTI: 291,
INDIA_RUMMY: 292,
TEXAS_HOLDEM: 293,
TURNRECT_ALB: 294,
ALADINGWHEEL: 21,
POKER_NIU: 2,
POKER_HUNDRED: 6,
MLLM: 8,
RED_VS_BLACK: 10,
YDLM: 250,
JLM: 252,
MLMJ: 254,
POKER_BALOOT: 256,
POKER_BALOOT_FAST: 289,
POKER_HAND: 257,
POKER_HAND_SAUDI: 258,
POKER_HAND_PARTNER: 267,
POKER_HAND_SAUDI_PARTNER: 268,
POKER_HAND_CONCAN: 283,
POKER_TARNEEB: 259,
POKER_TARNEEB_SYRIAN: 270,
POKER_BASRA: 260,
POKER_BANAKIL: 261,
POKER_TRIX: 262,
POKER_TRIXCOMPLEX: 273,
POKER_TRIXPARTNER: 263,
POKER_COMPLEXPARTNER: 280,
POKER_CCCOMPLEX: 281,
POKER_CCPARTNER: 282,
POKER_KASRA: 284,
POKER_KASRAPARTNER: 285,
POKER_RONDA: 286,
POKER_UNO: 287,
POKER_SAUDIDEAL: 288,
POKER_ESTIMATION: 264,
POKER_DOMINO: 265,
POKER_KOUTBO: 266,
POKER_BINTALSBEET: 279,
POKER_LUDOMASTER: 269,
POKER_LUDO_QUICK: 290,
POKER_TARNEEB_400: 272
}).TEENPATTI = 291, i.POKER_LEEKHA = 271, i.POKER_DURAK_2 = 274, i.POKER_DURAK_3 = 275, 
i.POKER_DURAK_4 = 276, i.POKER_DURAK_5 = 277, i.POKER_DURAK_6 = 278, i.SLOT_GDF = 101, 
i.SLOT_AFG = 102, i.SLOT_GREAT_BLUE = 103, i.SLOT_DR = 104, i.SLOT_PD = 105, i.SLOT_AZT = 106, 
i.SLOT_JJX = 107, i.SLOT_SB = 108, i.SLOT_TK = 109, i.SLOT_GDT = 110, i.SLOT_GLF = 111, 
i.SLOT_GSGL = 112, i.SLOT_TLG = 113, i.SLOT_PAN = 114, i.SLOT_IVAN = 182, i.SLOT_YNXJ = 115, 
i.SLOT_JLBD = 116, i.SLOT_PJL = 117, i.SLOT_JF = 118, i.SLOT_SHZ = 119, i.FRUIT_SLOT = 120, 
i.SLOT_ROBIN = 121, i.SLOT_GLYY = 122, i.SLOT_FORTUNE_PANDA = 123, i.SLOT_SGIRL = 124, 
i.SLOT_TGSY = 125, i.SLOT_ZHANWM = 127, i.SLOT_FOOTBALL = 126, i.SLOT_SPARTAN = 128, 
i.SLOT_DRAGON5 = 238, i.SLOT_EASTER = 129, i.SLOT_RALLY = 130, i.SLOT_NEWYEAR = 131, 
i.SLOT_WUFUMEN = 132, i.SLOT_TRAFFIC_LIGHT = 133, i.SLOT_GOLDEN_DRAGON = 134, i.SLOT_STEAMTOWER = 135, 
i.SLOT_VICTORY = 136, i.SLOT_GARDEN = 137, i.SLOT_ALADDIN = 138, i.SLOT_CAPTAIN = 139, 
i.SLOT_BRAVE_LEGEND = 140, i.SLOT_HALLOWEEN = 141, i.SLOT_HALLOWEEN_SURPRISE = 142, 
i.SLOT_IRELAND_LUCKY = 143, i.SLOT_YEARBYYEAR = 144, i.SLOT_CHERRY = 145, i.SLOT_CAPTAIN9 = 146, 
i.SLOT_ZCJB = 147, i.SLOT_ICE_AND_SNOW = 149, i.SLOT_INDIA_MYTH = 148, i.SLOT_SEA_WORLD = 150, 
i.SLOT_FARM_STORY = 151, i.SLOT_CHEN_PAO_ISLAND = 152, i.SLOT_CRAZY_MONEY = 153, 
i.SLOT_STONE_AGE = 154, i.SLOT_SPIRITUAL_GARDEN = 155, i.SLOT_BLAZING_STAR = 156, 
i.SLOT_COLABOTTLE = 157, i.SLOT_PIRATE_SHIP = 158, i.SLOT_MAGICIAN = 159, i.SLOT_OCEAN = 160, 
i.SLOT_LAURA = 161, i.SLOT_SEASON = 162, i.SLOT_ALICE = 163, i.SLOT_AFRICAN_SAFARI = 164, 
i.SLOT_SWK = 165, i.SLOT_MONEY_FROG = 166, i.SLOT_JETION = 167, i.SLOT_FORTUNE = 168, 
i.SLOT_TOP_GUN = 169, i.SLOT_WESTERN_PASTURE = 170, i.SLOT_HUANG_DI_LAI_LE = 171, 
i.SLOT_SAINTSEIAY = 173, i.SLOT_GOLDEN_TREE918 = 174, i.SLOT_WOLFER = 175, i.SLOT_WANGCAI = 180, 
i.SLOT_TERNADO = 181, i.SLOT_MATSURI = 183, i.SLOT_CIRCUS = 184, i.SLOT_AIRPLANE = 189, 
i.SLOT_FAME = 195, i.SLOT_TGFQ = 193, i.SLOT_TREX = 190, i.SLOT_YEMEI = 177, i.SLOT_WATER = 178, 
i.SLOT_XUEMEI = 179, i.SLOT_ORIENT = 185, i.SLOT_MAGICAL_DRAGON = 186, i.SLOT_COYOTECASH = 187, 
i.SLOT_CLEOPATRA = 188, i.SLOT_MOTOCYCLE = 176, i.SLOT_GREAT_CHINA = 192, i.SLOT_FASHION = 194, 
i.SLOT_PAYDIRT = 196, i.SLOT_BIGSHOT = 197, i.SLOT_THE_DISCOVER = 198, i.SLOT_NEWPANJINLIAN = 199, 
i.SLOT_SPARTA30 = 401, i.SLOT_NIGHTCLUB = 402, i.SLOT_NINJA = 403, i.SLOT_FRUITSPACE = 404, 
i.SLOT_GOLF = 406, i.SLOT_CLASSIC = 407, i.SLOT_CRAZY7 = 408, i.SLOT_HZLB = 409, 
i.SLOT_8BALL = 410, i.SLOT_INFINITY_VENUS = 413, i.SLOT_CHICKEN = 415, i.SLOT_GOWV2 = 416, 
i.SLOT_DRAGON5_HD = 417, i.SLOT_ZHAOYUN = 418, i.SLOT_GODOFFIRE = 420, i.SLOT_THEMEPARKBLAST = 422, 
i.SLOT_QUEENOFSEA = 424, i.SLOT_KINGOFOLYMPUS = 428, i.SLOT_SMOKINGHOTPICHES = 429, 
i.SLOT_GRANDGEMINI = 430, i.SLOT_CUPIDISCRUSH = 433, i.SLOT_CUPIDCRUSHDELUXE = 434, 
i.SLOT_FORTUNEWILDDELUXE = 432, i.SLOT_SPLENDID_ISLAND = 469, i.SLOT_SPLENDIDISLAND_DELUXE = 476, 
i.SLOT_EASTERNRICHES = 482, i.HORSE_MONKEY_TREE = 202, i.HORSE = 211, i.MOTOR_RACE = 236, 
i.HORSE_RACE = 243, i.ARC_XYZB = 203, i.ARC_YCLS = 212, i.FISH_SHRIMP_OYSTER = 204, 
i.BIRD_AND_ANIMAL = 208, i.ONLINE_LHDZ = 206, i.BCBM = 205, i.BAIJIALE = 201, i.BAIJIALE_MID = 221, 
i.BAIJIALE_HIGH = 218, i.ROULETTE_MID = 219, i.ROULETTE_HIGH = 220, i.ARC_XYZB_LINE = 222, 
i.BCBM_918 = 237, i.ARC_ZWBS_LINE = 245, i.BIG_SMALL = 246, i.ROULETTE_MINI = 223, 
i.ROULET_24 = 224, i.ROULET_73 = 225, i.ROULET_36 = 239, i.LHDZ_918_1 = 226, i.LHDZ_918_2 = 227, 
i.LHDZ_918_3 = 228, i.SICBO_918 = 229, i.BACCARAT_918 = 230, i.THREE_POKER_918 = 231, 
i.HOLD_EM_918 = 232, i.CASINO_WAR_918 = 233, i.BULL_918 = 234, i.MONKEY_ZWBS_918 = 241, 
i.TWENTYONE777 = 210, i.FRUIT = 213, i.LEOPARD = 214, i.HULUJI = 216, i.SLOT_SLWH = 207, 
i.SINGLE_PICK = 235, i.FQZS_SP = 246, i.PHOENIX_SP = 248, i.POKEMON_SP = 249, i.SLWH_918NEW = 251, 
i.GLITZ_INFINITY = 411, i.REGAL_TIGER = 419, i.JALAPAND_DELIGHT = 423, i.DIAMOND_FOREST = 435, 
i.SPEED_FIRE = 436, i.GORGEOUS_CLEOPATRA = 437, i.ICYWOLF = 479, i.MAJESTIC_PANDA = 439, 
i.SUSHI_LOVER = 440, i.THUNDER_MUSTANG = 441, i.FORTUNE_GENIE = 442, i.POWER_DRAGON = 443, 
i.HOLIDAY_FRENZY = 444, i.SLOT_SUNGODDESS = 425, i.SLOT_BINGOMEOW = 446, i.SLOT_TREASUREJUNGLE = 447, 
i.SLOT_PRINCECHARMING = 449, i.SLOT_HIGHPOWER = 451, i.SLOT_BRILLIANTTREASURES = 465, 
i.SLOT_MAMMOTHGRANDGEMS = 466, i.SLOT_MAMMOTHGRAND = 474, i.SLOT_SPOOKYHALLOWEEN = 480, 
i.SLOT_STONEAGEDTREASURE = 489, i.SLOT_MONSTERCASH = 484, i.SLOT_DOUBLECHILI = 495, 
i.SLOT_MAYADEORO = 500, i.SLOT_PRINCENEZHA = 507, i.SLOT_PIGGYHEIST = 512, i.SLOT_HOWLINGMOON = 513, 
i.SLOT_ALIENBUSTER = 515, i.SLOT_SUMO = 519, i.SLOT_AMERICANBILLIONAIRE = 523, i.SLOT_BEAUTYANDTHEBEAST = 525, 
i.SLOT_YEAROFGOLDENPIG = 526, i.SLOT_DOUBLENUGGETS = 527, i.SLOT_DOUBLETHUNDER = 530, 
i.SLOT_BEERFESTIVAL = 532, i.SLOT_INVINCIBLEGODDESS = 534, i.SLOT_THUMBELINA = 537, 
i.SLOT_DRAGONDIAMOND = 536, i.SLOT_LEPRECHAUNBLAST = 538, i.SLOT_DOUBLEAGENT = 618, 
i.SLOT_BIGDUEL = 620, i.SLOT_LUCKYCAT = 619, i.SLOT_VAMPIRECOUNT = 636, i.SLOT_TAVERNWITCH = 637, 
i.SLOT_BLADEMASTERTOKUGAWA = 638, i.SLOT_SIXTHDAYTHEDEMON = 639, i.SLOT_THEMAGICHANZO = 640, 
i.SLOT_MINAMOTONOYOSHITSUNE = 641, i.SLOT_GANGSTERGODFATHER = 642, i.SLOT_FATHEROFINVENTION = 664, 
i.SLOT_WESTCOWBOY = 665, i.SLOT_RISINGSUNTHEGREATKING = 666, i.SLOT_POLITICALSTRATEGIST = 667, 
i.SLOT_MULAN = 668, i.SLOT_GENGHISKHAN = 669, i.SLOT_THECENTAUR = 670, i.SLOT_CHANGE = 675, 
i.SLOT_ALIENMONSTER = 671, i.SLOT_BASKETBALLKING = 672, i.SLOT_JAPANESESINGER = 677, 
i.SLOT_NEWKYLIN = 674, i.SLOT_ODYSSEUS = 649, i.SLOT_PRINCESSPEA = 676, i.SLOT_HERA = 673, 
i.SLOT_APOLLO = 680, i.SLOT_DIONYSUS = 681, i.SLOT_FRIGG = 679, i.SLOT_INDIAN = 678, 
i.SLOT_SUPER_WICKED_BLAST = 458, i.JUNGLE_KING = 453, i.SLOT_RISINGMEDUSA = 459, 
i.LET_IS_PARTY = 454, i.ADVENTURE_IN_SPACE = 455, i.YEAR_OF_THE_RAT = 456, i.SLOT_FORTUNEGONG = 460, 
i.GOLD_ISLAND_TREASURE = 464, i.SLOT_EGYPTIAN_FANTASY = 462, i.SLOTS_TOWER = 471, 
i.CANDY_MAGIC = 468, i.SLOT_FORTUNEWHEELDELUXE = 461, i.HOT_HOT_DRUMS = 467, i.SLOT_CRICUS_CARNIVAL = 463, 
i.SLOT_RAPID_PLATINUM_PAY = 470, i.SLOT_BEER_HALL = 452, i.SLOT_SPACE_CAT = 472, 
i.SLOT_MOMENT_OF_WONDER = 421, i.SLOT_BONIE_CLYDE = 427, i.SLOT_LEPRECHAUNCOINS = 473, 
i.SLOT_WHEREISSANTACLAUS = 448, i.MASKED_HERO = 477, i.SLOT_PELICAN_QUEST = 478, 
i.SLOT_ZOMBLE_NATION = 481, i.SLOT_ROYALPUPPIES = 450, i.SLOT_RISEOFEGYPT = 494, 
i.SLOT_FORTUNETRAINDELUXE = 499, i.SLOT_MIGHTYATLANTIS = 504, i.SLOT_NEVERLANDFANTASY = 510, 
i.SLOT_WEALTHOFPANDA = 514, i.SLOT_MAGICORB = 496, i.SLOT_KANGAROOS = 518, i.SLOT_FORTUNETREE = 521, 
i.SLOT_THELIONSJACKPOT = 524, i.SLOT_VOLCANOFURY = 528, i.SLOT_CAPTAINJACKPOT = 529, 
i.SLOT_HEROINEMULAN = 531, i.SLOT_KINGOFSIBERIAN = 533, i.SLOT_LEGENDOFOZ = 535, 
i.SLOT_ULTIMATETIKILINK = 539, i.SLOT_FEANNIESHOW = 540, i.SLOT_POWEROFTHEKRAKEN = 541, 
i.SLOT_ROCKING_DISCO = 475, i.SLOT_MEGA_VAULT_BILLIONAIRE = 483, i.LUCKY_BEE = 488, 
i.SLOT_PRINCE_CHARMING_DELUXE = 487, i.SLOT_FEAMIN_QUEEN = 490, i.SLOT_CANDY_CLASH = 491, 
i.SLOT_THANKSGIVINGPARTY = 508, i.SLOT_PENGUINBOUNTY = 509, i.SLOT_ZUES = 601, i.SLOT_ATHENA = 602, 
i.SLOT_POSEIDON = 603, i.SLOT_NMEDUSA = 604, i.SLOT_GODNESS_OF_LOVE = 605, i.SLOT_WARSHIP = 606, 
i.SLOT_JIANNIANGCHRISTMAS = 607, i.SLOT_LEGENDOFJOANOFARC = 609, i.SLOT_LORDCAESAR = 610, 
i.SLOT_LORDOFTHUNDER = 611, i.SLOT_GODDESSOFDEATH = 612, i.SLOT_ELVESBLESSING = 613, 
i.SLOT_ODINSANGER = 614, i.SLOT_THEROUNDTABLEKNIGHTSEXPLORE = 615, i.SLOT_G_CLEOPATRA = 616, 
i.SLOT_THEEVIL = 617, i.SLOT_LOKI = 643, i.SLOT_FREY = 644, i.SLOT_ALEXANDER = 645, 
i.SLOT_FENRIR = 608, i.SLOT_SPHINX = 652, i.SLOT_CAOCAO = 653, i.SLOT_SUNWUKONG = 654, 
i.SLOT_JORMRNGANDER = 655, i.SLOT_SHAKYAMUNI = 682, i.SLOT_GALILEO = 683, i.SLOT_BADER = 684, 
i.SLOT_HESTIA = 686, i.SLOT_HEPHAESTUS = 687, i.SLOT_ROMANTICPRINCESS = 688, i.SLOT_NEWMULAN = 647, 
i.SLOT_YMER = 685, i.SLOT_GODOFWAR = 689, i.SLOT_LITTLEREDRIDINGHOOD = 690, i.SLOT_PRINCE = 691, 
i.SLOT_ARCHER = 692, i.SLOT_ALIBABA = 693, i.SLOT_XERXES = 694, i.SLOT_SKYGARDEN = 695, 
i.SLOT_SINBAD = 696, i.SLOT_G_CLEOPATRA_a = 697, i.SLOT_LAMP_OF_ALADDIN_a = 698, 
i.SLOT_SPHINX_a = 699, i.SLOT_RISING_PEGASUS = 492, i.SLOT_GOLD_RUSH_DELUXE = 493, 
i.SLOT_MERMAID_PEARLS = 497, i.SLOT_CLOWN = 626, i.SLOT_THEGODOFFORTUNE = 624, i.SLOT_INTERSTELLAR = 625, 
i.SLOT_KING_KONG = 498, i.SLOT_POWER_OF_ZEUS = 501, i.SLOT_FLOWERY_PIXIE = 502, 
i.SLOT_EMPEROR_QIN = 627, i.SLOT_MAGICIAN_NEW = 628, i.SLOT_FANTASY_CHOCOLATE_FACTORY = 629, 
i.SLOT_THE_LION = 621, i.SLOT_THE_PANDA = 622, i.SLOT_THE_UNICORN = 623, i.SLOT_LAMP_OF_ALADDIN = 630, 
i.SLOT_THE_MERMAID = 631, i.SLOT_THE_MINSTREL = 632, i.SLOT_THE_FROG_PRINCE = 633, 
i.SLOT_THE_MAMMOTH = 634, i.SLOT_THE_LEGEND_OF_DRAGON = 635, i.SLOT_PUSS_THE_MUSKETEER = 426, 
i.SLOT_ROMANTIC_QUEEN = 503, i.SLOT_WILD_GORILLA = 505, i.SLOT_WICKED_BELLE = 511, 
i.SLOT_BIRD_NINE_HEADS = 656, i.SLOT_MAGIC_FROG = 657, i.SLOT_DWARFS_AND_PRINCESS = 658, 
i.SLOT_LUCKY_SANTA = 659, i.SLOT_THE_PHOENIX = 660, i.SLOT_ROBIN_HOOD = 661, i.SLOT_BUNNY_GIRL = 662, 
i.SLOT_GOLD_MINER = 663, i.SLOT_KYLIN = 516, i.SLOT_THE_LION_GEMS = 517, i.SLOT_THE_FOREVER_LOVE = 520, 
i.SLOT_WOLF_LEGEND = 506, i.SLOT_HADES = 646, i.SLOT_HERMES = 648, i.SLOT_PROMETHEUS = 650, 
i.SLOT_PESEUS = 651, i);
t.exports = n;
cc._RF.pop();
}, {} ],
GameInit: [ function(e, t) {
"use strict";
cc._RF.push(t, "a7fb4cD/VNH6armdwkc0xb1", "GameInit");
t.exports = {
init: function() {
var t = e("AppData");
cc.vv.AppData = new t();
cc.vv.AppData.init();
var i = Global.getLocal(Global.SAVE_LANGUAGE);
if (i) Global.language = i; else {
var n = cc.sys.language;
n == Global.LANGUAGE.AR && (Global.language = n);
}
Global.language, Global.LANGUAGE.ZH, cc.vv.Language = e("EnglishCfg");
if (Global.languageList) for (var a = 0; a < Global.languageList.length; a++) if (Global.languageList[a] == Global.language) {
var o = e(Global.language);
Object.assign(cc.vv.Language, o);
}
cc.vv.GameItemCfg = e("GameItemCfg");
}
};
cc._RF.pop();
}, {
AppData: "AppData",
EnglishCfg: "EnglishCfg",
GameItemCfg: "GameItemCfg"
} ],
GameItemCfg: [ function(e, t) {
"use strict";
cc._RF.push(t, "33bfdjZyPxEjqTv1nAaRjYk", "GameItemCfg");
var i, n = e("GameIdMgr");
t.exports = ((i = {})[n.SLOT_COMESOON] = {
title: "comingSoon",
name: "comingSoon"
}, i[n.SLOT_COMESOON1] = {
title: "comingSoon1",
name: "comingSoon1"
}, i[n.SLOT_COMESOON2] = {
title: "comingSoon2",
name: "comingSoon2"
}, i[n.SLOT_COMESOON3] = {
title: "comingSoon3",
name: "comingSoon3"
}, i[n.POKER_DOMINO] = {
title: "Domino",
name: "Domino",
action: "Domino",
gamename: "Domino"
}, i[n.POKER_UNO] = {
title: "Uno",
name: "Uno",
action: "Uno",
gamename: "Uno"
}, i[n.POKER_LUDOMASTER] = {
title: "Nudo",
name: "Nudo",
action: "Nudo",
gamename: "Ludo"
}, i[n.BLACK_JACK] = {
title: "BlackJack21",
name: "BlackJack21",
action: "BlackJack21",
gamename: "Black Jack"
}, i[n.POKER_NIU] = {
title: "caishendao",
name: "nn",
action: "heibao"
}, i[n.DRAGON_VS_TIGER] = {
title: "caishendao",
name: "lhdz",
action: "heibao",
gamename: "Dragon & Tiger"
}, i[n.POKER_HUNDRED] = {
title: "caishendao",
name: "100nn",
action: "heibao"
}, i[n.MLLM] = {
title: "caishendao",
name: "mllm",
action: "heibao"
}, i[n.RED_VS_BLACK] = {
title: "caishendao",
name: "hhdz",
action: "heibao"
}, i[n.POKER_TBNN] = {
title: "caishendao",
name: "tbnn",
action: "heibao"
}, i[n.JLM] = {
title: "caishendao",
name: "Jlm",
action: "poker_1",
poker: 1
}, i[n.MLMJ] = {
title: "caishendao",
name: "mlmj",
action: "heibao"
}, i[n.YDLM] = {
title: "Ydlm",
name: "Ydlm",
action: "poker_9",
poker: 1
}, i[n.SEVEN_UP_DOWN] = {
title: "SevenUpDown",
name: "SevenUpDown",
gamename: "7 Up Dowm"
}, i[n.BACCARAT] = {
title: "Baccarat",
name: "Baccarat",
gamename: "Baccarat"
}, i[n.WINGO_LOTTERY] = {
title: "WingoLottery",
name: "WingoLottery",
gamename: "Wingo Lottery"
}, i[n.JHANDI_MUNDA] = {
title: "Jhandimunda",
name: "Jhandimunda",
gamename: "Jhandi Munda"
}, i[n.HORSE_RACING] = {
title: "HorseRace",
name: "HorseRace",
gamename: "Horse Racing"
}, i[n.ROULETTE] = {
title: "zhuanpan",
name: "Roulette36",
action: "zhuanpan1",
gamename: "Roulette"
}, i[n.CRASH] = {
title: "Crash",
name: "Carsh",
action: "animation",
gamename: "Carsh"
}, i[n.ANDAR_BAHAR] = {
title: "AndarBahar",
name: "AndarBahar",
gamename: "Andar Bahar"
}, i[n.FORTUNE_WHEEL] = {
title: "FortuneWheel",
name: "Fortunewheel",
gamename: "Fortune Wheel"
}, i[n.INDIA_RUMMY] = {
title: "Rummy",
name: "Rummy",
gamename: "Rummy"
}, i[n.TEENPATTI] = {
title: "TeenPatti",
name: "TeenPatti",
gamename: "Teenpatti"
}, i[n.TEXAS_HOLDEM] = {
title: "Delphi",
name: "Delphi",
gamename: "Poker"
}, i[n.ALADINGWHEEL] = {
title: "AladingWheel",
name: "AladingWheel",
gamename: "AladingWheel"
}, i[n.HWFISH_918] = {
title: "hwfish918",
name: "hwfish918",
action: "hwfish918"
}, i[n.C_CRICKETX] = {
title: "CricketX",
name: "CricketX",
action: "CricketX"
}, i[n.C_AVIATRIX] = {
title: "Aviatrix",
name: "Aviatrix",
action: "Aviatrix"
}, i[n.C_CRASHX] = {
title: "CrashX",
name: "CrashX",
action: "CrashX"
}, i[n.C_AVIATOR] = {
title: "Aviator",
name: "Aviator",
action: "Aviator"
}, i[n.C_ZEPPELIN] = {
title: "Zeppelin",
name: "Zeppelin",
action: "Zeppelin"
}, i[n.S_LIMBO] = {
title: "Limbo",
name: "Limbo",
action: "Limbo"
}, i[n.S_DICE] = {
title: "Dice",
name: "Dice",
action: "Dice"
}, i[n.S_PLINKO] = {
title: "Plinko",
name: "Plinko",
action: "Plinko"
}, i[n.S_KENO] = {
title: "Keno",
name: "Keno",
action: "Keno"
}, i[n.S_TOWERS] = {
title: "Tower",
name: "Tower",
action: "Tower"
}, i[n.DOUBLE_ROLL] = {
title: "DoubleRoll",
name: "DoubleRoll",
action: "DoubleRoll"
}, i[n.S_CRYPTO] = {
title: "Crypto",
name: "Crypto",
action: "Crypto"
}, i[n.S_TRIPLE] = {
title: "Triple",
name: "Triple",
action: "Triple"
}, i[n.S_CAPPADOCIA] = {
title: "Cappadocia",
name: "Cappadocia",
action: "Cappadocia"
}, i[n.C_JETX] = {
title: "JetX",
name: "JetX",
action: "JetX"
}, i[n.SLOT_GDF] = {
title: "caishendao",
name: "godofwealth",
action: "caishendao"
}, i[n.SLOT_AFG] = {
title: "feizhouconglin",
name: "african_jungle",
action: "feizhouconglin"
}, i[n.SLOT_GREAT_BLUE] = {
title: "weidadelanse",
name: "great_blue",
action: "weidadelanse"
}, i[n.SLOT_DR] = {
title: "haitunjiao",
name: "dolphin_reef",
action: "haitunjiao"
}, i[n.SLOT_SB] = {
title: "yindan",
name: "silver_bullet",
action: "yindan"
}, i[n.SLOT_GDT] = {
title: "huangjinshu",
name: "golden_tree",
action: "huangjinshu"
}, i[n.BAIJIALE] = {
title: "baijiale",
name: "baijiale",
action: "baijiale1"
}, i[n.BAIJIALE_MID] = {
title: "baijiale",
name: "baijiale",
action: "baijiale2"
}, i[n.BAIJIALE_HIGH] = {
title: "baijiale",
name: "baijiale",
action: "baijiale3"
}, i[n.HORSE_MONKEY_TREE] = {
title: "pilihou",
name: "monkeyClimbTree",
action: "pilihou"
}, i[n.ARC_XYZB] = {
title: "xiyouzhengba",
name: "xyzb",
action: "juezhantianxia"
}, i[n.ARC_XYZB_LINE] = {
title: "xiyouzhengba",
name: "xyzb",
action: "juezhantianxia"
}, i[n.FISH_SHRIMP_OYSTER] = {
title: "yuxiahao",
name: "fish_shrimp_oyster",
action: "yuxiahao"
}, i[n.BCBM] = {
title: "benchibaoma",
name: "bcbm777",
action: "benchibaoma"
}, i[n.ONLINE_LHDZ] = {
title: "longhudou",
name: "lhdz_online",
action: "longhudou"
}, i[n.SLOT_PAN] = {
title: "heibao",
name: "panther",
action: "heibao"
}, i[n.SLOT_IVAN] = {
title: "ivan",
name: "Slot_Ivan",
action: "ivan"
}, i[n.BIRD_AND_ANIMAL] = {
title: "feiqinzoushou",
name: "birds_and_animals",
action: "feiqinzoushou"
}, i[n.ROULETTE_MID] = {
title: "zhuanpan",
name: "roulette",
action: "zhuanpan2"
}, i[n.ROULETTE_HIGH] = {
title: "zhuanpan",
name: "roulette",
action: "zhuanpan3"
}, i[n.TWENTYONE777] = {
title: "twentyone",
name: "twentyone777",
action: "21dian"
}, i[n.SLOT_YNXJ] = {
title: "yunvxinjing",
name: "SexandZen",
action: "yunvxinjing"
}, i[n.FRUIT_SLOT] = {
title: "shuiguoslots",
name: "fruit_slot",
action: "shuiguoslots"
}, i[n.SLOT_GLF] = {
title: "jinglianhua",
name: "goldenlotusflower",
action: "jinglianhua"
}, i[n.SLOT_GSGL] = {
title: "gaosugonglu",
name: "Expressway",
action: "gaosugonglu"
}, i[n.SLOT_JLBD] = {
title: "jilebaodian",
name: "treasure",
action: "jilebaodian"
}, i[n.SLOT_PJL] = {
title: "panjinlian",
name: "panjinlian",
action: "panjinlian"
}, i[n.SLOT_JF] = {
title: "xiaoribenpangzi",
name: "little_japanese_fat_man",
action: "xiaoribenpangzi"
}, i[n.SLOT_SHZ] = {
title: "shuihuzhuan",
name: "shz777",
action: "shuihuzhuan"
}, i[n.SLOT_TK] = {
title: "sanguoyanyi",
name: "Threecountries",
action: "sanguoyanyi"
}, i[n.SLOT_SPARTAN] = {
title: "spartan",
name: "Spartan",
action: "spartan"
}, i[n.HORSE] = {
title: "saima",
name: "horse",
action: "saima"
}, i[n.MOTOR_RACE] = {
title: "moto_race",
name: "MotoRace",
action: "saimotuoche"
}, i[n.HORSE_RACE] = {
title: "saima",
name: "MotoRace",
action: "saima"
}, i[n.ARC_YCLS] = {
title: "yingchaoliansai",
name: "Premiership",
action: "yingchaoliansai"
}, i[n.SLOT_SLWH] = {
title: "senlinwuhui",
name: "ForestParty918",
action: "senlinwuhui"
}, i[n.SLWH_918NEW] = {
title: "forestParty918New",
name: "ForestParty918New",
action: "forestParty918New"
}, i[n.FRUIT] = {
title: "shuiguoji",
name: "fruit",
action: "shuiguoji"
}, i[n.LEOPARD] = {
title: "baoziwang",
name: "leopard",
action: "baoziwang"
}, i[n.HULUJI] = {
title: "huluoji",
name: "huluji",
action: "huluoji"
}, i[n.SLOT_GLYY] = {
title: "jinlianyinye",
name: "goldenlotus_silver",
action: "jinlianyinye"
}, i[n.SLOT_SGIRL] = {
title: "xingganmeinv",
name: "sexGirl",
action: "xingganmeinv"
}, i[n.SLOT_ROBIN] = {
title: "luobinhan",
name: "robin",
action: "luobinhan"
}, i[n.SLOT_FOOTBALL] = {
title: "football",
name: "football",
action: "football"
}, i[n.SLOT_TGSY] = {
title: "thaiamazing",
name: "thaiamazing",
action: "amazinghailan"
}, i[n.SLOT_EASTER] = {
title: "easter",
name: "easter",
action: "fuhuojie"
}, i[n.SLOT_NEWYEAR] = {
title: "newyear",
name: "newyear",
action: "bainian"
}, i[n.SLOT_STEAMTOWER] = {
title: "steamtower",
name: "steamtower",
action: "SteamTower"
}, i[n.SLOT_VICTORY] = {
title: "victory",
name: "victory",
action: "Victory"
}, i[n.LHDZ_918_1] = {
title: "longhudou1",
name: "Lhdz_918kiss",
action: "longhudou1"
}, i[n.LHDZ_918_2] = {
title: "longhudou2",
name: "Lhdz_918kiss",
action: "longhudou2"
}, i[n.LHDZ_918_3] = {
title: "longhudou3",
name: "Lhdz_918kiss",
action: "longhudou3"
}, i[n.SLOT_DRAGON5] = {
title: "dragon5",
name: "Dragon5",
action: "5dragons"
}, i[n.SLOT_JETION] = {
title: "jixing",
name: "Jetion",
action: "jixing"
}, i[n.SLOT_RALLY] = {
title: "rally",
name: "rally",
action: "lalisai"
}, i[n.SLOT_TRAFFIC_LIGHT] = {
title: "traffic_light",
name: "traffic_light",
action: "honglvdeng"
}, i[n.SLOT_GARDEN] = {
title: "garden",
name: "garden",
action: "Garden"
}, i[n.SLOT_WESTERN_PASTURE] = {
title: "western_pasture",
name: "westernPasture",
action: "WesternRanch"
}, i[n.SLOT_ZHANWM] = {
title: "zhanWM918",
name: "zhanWM918",
action: "emperdrgate"
}, i[n.SLOT_PD] = {
title: "falaobaozang",
name: "Preciousdeposits",
action: "falaobaozang"
}, i[n.SLOT_AZT] = {
title: "azitaike",
name: "Aztek",
action: "azitaike"
}, i[n.SLOT_JJX] = {
title: "jiangjinxiong",
name: "Bonusbear",
action: "jiangjinxiong"
}, i[n.SLOT_TLG] = {
title: "fengshenbang",
name: "Thelistofgods",
action: "fengshenbang"
}, i[n.SLOT_FORTUNE_PANDA] = {
title: "fuguixiongmao",
name: "fortunePanda",
action: "fuguixiongmao"
}, i[n.SLOT_FORTUNE] = {
title: "prosperity",
name: "MakeAFortune918",
action: "Prosperity"
}, i[n.SLOT_CHERRY] = {
title: "cherryLove",
name: "cherryLove",
action: "cherrylove"
}, i[n.SLOT_FARM_STORY] = {
title: "ranch_story",
name: "farmStory",
action: "RanchStory"
}, i[n.SLOT_STONE_AGE] = {
title: "stoneage",
name: "stoneAge",
action: "stoneage"
}, i[n.SLOT_BLAZING_STAR] = {
title: "blazing_star",
name: "blazingStar",
action: "ShiningStar"
}, i[n.SLOT_ICE_AND_SNOW] = {
title: "ice_land",
name: "iceAndSnow",
action: "IceLand"
}, i[n.SLOT_INDIA_MYTH] = {
title: "indiamyth",
name: "indiaMyth",
action: "IndianMyth"
}, i[n.SLOT_MAGICIAN] = {
title: "magician",
name: "magician",
action: "MagiclSpin"
}, i[n.SLOT_CIRCUS] = {
title: "circus",
name: "circus",
action: "circus"
}, i[n.SLOT_AIRPLANE] = {
title: "airplane",
name: "airplane",
action: "airplane"
}, i[n.SLOT_FAME] = {
title: "fame",
name: "Fame",
action: "fame"
}, i[n.SLOT_TGFQ] = {
title: "thaibliss",
name: "Thaibliss",
action: "thaibliss"
}, i[n.SLOT_SEA_WORLD] = {
title: "sea_world",
name: "seaWorld",
action: "SeaWorld"
}, i[n.SLOT_HUANG_DI_LAI_LE] = {
title: "huang_di_lai_le",
name: "huangDiLaiLe",
action: "huangdilaile"
}, i[n.SLOT_CHEN_PAO_ISLAND] = {
title: "treasure_islang",
name: "treasureIsland",
action: "TreasureIslang"
}, i[n.SLOT_SPIRITUAL_GARDEN] = {
title: "fairy_garden",
name: "fairyGarden",
action: "FairyGarden"
}, i[n.BACCARAT_918] = {
title: "baccarat918",
name: "Baccarat918",
action: "baijiale"
}, i[n.SLOT_OCEAN] = {
title: "ocean",
name: "Ocean",
action: "haiyangtaitang"
}, i[n.SINGLE_PICK] = {
title: "singlepick",
name: "singlepick",
action: "dantiao"
}, i[n.BCBM_918] = {
title: "bcbm918",
name: "bcbm918",
action: "benchibaoma1"
}, i[n.SICBO_918] = {
title: "sicbo918",
name: "Dice918",
action: "shaizi"
}, i[n.THREE_POKER_918] = {
title: "three_poker918",
name: "ThreePoker918",
action: "sankapuke"
}, i[n.HOLD_EM_918] = {
title: "hold_em_918",
name: "Hold_EM_918",
action: "ducheng"
}, i[n.BULL_918] = {
title: "bull918",
name: "Bull918",
action: "niuniu"
}, i[n.ROULET_73] = {
title: "roulet73",
name: "RouletRoulet73",
action: "lunpan73"
}, i[n.ROULET_24] = {
title: "roulet24",
name: "Roulette24",
action: "lunpan24"
}, i[n.ROULETTE_MINI] = {
title: "roulet12",
name: "RouletteMini",
action: "lunpan12"
}, i[n.ROULET_36] = {
title: "roulet36",
name: "Roulette36",
action: "lunpan36"
}, i[n.SLOT_ALADDIN] = {
title: "aladdin",
name: "aladdin",
action: "Aladdin"
}, i[n.MONKEY_ZWBS_918] = {
title: "zwbs",
name: "xyzb",
action: "xiyouzhengba"
}, i[n.ARC_ZWBS_LINE] = {
title: "zwbs",
name: "xyzb",
action: "xiyouzhengba"
}, i[n.SLOT_HALLOWEEN] = {
title: "halloween",
name: "halloween",
action: "HalloweenParty"
}, i[n.SLOT_BRAVE_LEGEND] = {
title: "brave_legend",
name: "brave_legend",
action: "DragonMaiden"
}, i[n.SLOT_AFRICAN_SAFARI] = {
title: "african_safari",
name: "AfricanSafari",
action: "AfricanWildlife"
}, i[n.SLOT_GOLDEN_DRAGON] = {
title: "golden_dragon",
name: "golden_dragon",
action: "jinlongcifu"
}, i[n.SLOT_WUFUMEN] = {
title: "wufumen",
name: "wufumen",
action: "wufumen"
}, i[n.SLOT_WANGCAI] = {
title: "wangcai",
name: "wangcai",
action: "wangcai"
}, i[n.SLOT_WOLFER] = {
title: "wolfer",
name: "Wolfer",
action: "Wolfer"
}, i[n.SLOT_ALICE] = {
title: "alice",
name: "Alice",
action: "ailisi"
}, i[n.SLOT_CAPTAIN9] = {
title: "captain9",
name: "Captain9",
action: "chuanzhang9"
}, i[n.CASINO_WAR_918] = {
title: "casino_war",
name: "CasinoWar",
action: "duchengzhanzhen"
}, i[n.SLOT_CRAZY_MONEY] = {
title: "crazy_money",
name: "CrazyMoney",
action: "kuangrejinqian"
}, i[n.SLOT_ZCJB] = {
title: "felicitous",
name: "Felicitous",
action: "zhaocaijinbao"
}, i[n.SLOT_IRELAND_LUCKY] = {
title: "ireland_lucky",
name: "IrelandLucky",
action: "IrishLuck"
}, i[n.SLOT_LAURA] = {
title: "laura",
name: "Laura",
action: "laola"
}, i[n.SLOT_MONEY_FROG] = {
title: "money_frog",
name: "MoneyFrog",
action: "jinqianwa"
}, i[n.SLOT_TOP_GUN] = {
title: "top_gun",
name: "TopGun",
action: "zhuangzhilingyun"
}, i[n.SLOT_YEARBYYEAR] = {
title: "year_by_year",
name: "YearByYear",
action: "niannianyouyu"
}, i[n.SLOT_SWK] = {
title: "swk",
name: "swk",
action: "sunwukong"
}, i[n.SLOT_PIRATE_SHIP] = {
title: "pirate_ship",
name: "PirateShip",
action: "PirateShip"
}, i[n.SLOT_HALLOWEEN_SURPRISE] = {
title: "witch",
name: "witch",
action: "Witch"
}, i[n.SLOT_COLABOTTLE] = {
title: "colabottle",
name: "Colabottle",
action: "cookiepop"
}, i[n.SLOT_SAINTSEIAY] = {
title: "saintseiay",
name: "SaintSeiya",
action: "saintseiya"
}, i[n.SLOT_GOLDEN_TREE918] = {
title: "huangjinshu",
name: "golden_tree918",
action: "huangjinshu"
}, i[n.SLOT_CAPTAIN] = {
title: "captain20",
name: "Captain20",
action: "captain20"
}, i[n.SLOT_TERNADO] = {
title: "ternado",
name: "Tornado",
action: "triple-twiste"
}, i[n.SLOT_YEMEI] = {
title: "yemei",
name: "Yemei",
action: "yemei"
}, i[n.SLOT_MATSURI] = {
title: "Matsuri",
name: "Matsuri",
action: "matsuri"
}, i[n.SLOT_WATER] = {
title: "water",
name: "water",
action: "water"
}, i[n.SLOT_XUEMEI] = {
title: "xuemei",
name: "Xuemei",
action: "xuemei"
}, i[n.SLOT_ORIENT] = {
title: "orient",
name: "Orient",
action: "orient"
}, i[n.SLOT_COYOTECASH] = {
title: "CoyoteCash",
name: "CoyoteCash",
action: "CoyoteCash"
}, i[n.SLOT_MAGICAL_DRAGON] = {
title: "magicaldragon",
name: "MagicalDragon",
action: "MagicalDragon"
}, i[n.SLOT_MOTOCYCLE] = {
title: "Slot_Motorcycle",
name: "Slot_Motorcycle",
action: "Nitro"
}, i[n.SLOT_SEASON] = {
title: "Season",
name: "Season",
action: "jijiewenhou"
}, i[n.SLOT_FASHION] = {
title: "fashion",
name: "Fashion",
action: "fashion"
}, i[n.SLOT_TREX] = {
title: "Trex",
name: "Trex",
action: "trex"
}, i[n.SLOT_GREAT_CHINA] = {
title: "GreatChina",
name: "GreatChina",
action: "greatChina"
}, i[n.SLOT_CLEOPATRA] = {
title: "Cleopatra",
name: "Cleopatra",
action: "Cleopatra"
}, i[n.SLOT_SPARTA30] = {
title: "Sparta30",
name: "Sparts30",
action: "Sparta30"
}, i[n.FQZS_SP] = {
title: "feiqinzoushou",
name: "fqzs",
action: "feiqinzoushou"
}, i[n.SLOT_THE_DISCOVER] = {
title: "TheDiscover",
name: "TheDiscover",
action: "faxian"
}, i[n.SLOT_BIGSHOT] = {
title: "Bigshot",
name: "Bigshot",
action: "Bigshot"
}, i[n.SLOT_NIGHTCLUB] = {
title: "NightClub",
name: "NightClub",
action: "NightClub"
}, i[n.SLOT_NINJA] = {
title: "Ninja",
name: "Ninja",
action: "Ninja"
}, i[n.PHOENIX_SP] = {
title: "phoenix",
name: "Phoenix",
action: "Phoenix"
}, i[n.POKEMON_SP] = {
title: "pokemon",
name: "Pokemon",
action: "Pokemon"
}, i[n.SLOT_GOLF] = {
title: "Golf",
name: "Golf",
action: "Golf"
}, i[n.SLOT_FRUITSPACE] = {
title: "FruitSpace",
name: "FruitSpace",
action: "shuiguotiandi"
}, i[n.SLOT_CLASSIC] = {
title: "classicSlots",
name: "ClassicSlots",
action: "classicSlots"
}, i[n.SLOT_CRAZY7] = {
title: "crazy7",
name: "Crazy7",
action: "crazy7"
}, i[n.SLOT_HZLB] = {
title: "Slotmonkey",
name: "Slotmonkey",
action: "monkeyslot"
}, i[n.SLOT_8BALL] = {
title: "Slot8Ball",
name: "BallSlots",
action: "ballSlot"
}, i[n.SLOT_PAYDIRT] = {
title: "PayDirt",
name: "PayDirt",
action: "paydirt"
}, i[n.SLOT_INFINITY_VENUS] = {
title: "venus",
name: "venus",
action: "venus"
}, i[n.GLITZ_INFINITY] = {
title: "Glitz",
name: "GlitzAndGlamour",
action: "Glitz"
}, i[n.SLOT_CHICKEN] = {
title: "slot_chicken",
name: "slot_chicken",
action: "slot_chicken"
}, i[n.SLOT_GOWV2] = {
title: "godofwealth_v2",
name: "godofwealth_v2",
action: "godofwealth_v2"
}, i[n.SLOT_DRAGON5_HD] = {
title: "dragon5HD",
name: "dragon5HD",
action: "dragon5_hd"
}, i[n.SLOT_ZHAOYUN] = {
title: "zhaoyun",
name: "zhaoyun",
action: "zhaoyun"
}, i[n.SLOT_THEMEPARKBLAST] = {
title: "ThemeParkBlast",
name: "ThemeParkBlast",
action: "ThemeParkBlast",
animation: "animation"
}, i[n.SLOT_MOMENT_OF_WONDER] = {
title: "MomentOfWonder",
name: "MomentOfWonder",
action: "MomentOfWonder",
animation: "animation"
}, i[n.SLOT_BONIE_CLYDE] = {
title: "BonieClyde",
name: "BonieClyde",
action: "BonieClyde",
animation: "animation"
}, i[n.SLOT_BEER_HALL] = {
title: "BeerHall",
name: "BeerHall",
action: "BeerHall",
animation: "animation"
}, i[n.REGAL_TIGER] = {
title: "RegalTiger",
name: "RegalTiger",
action: "RegalTiger",
animation: "animation"
}, i[n.SLOT_QUEENOFSEA] = {
title: "queenOfSea",
name: "queenOfSea",
action: "queenOfSea",
animation: "animation"
}, i[n.SLOT_GODOFFIRE] = {
title: "godOfFire",
name: "GodOfFire",
action: "godOfFire",
animation: "animation"
}, i[n.JALAPAND_DELIGHT] = {
title: "JadapenoDelight",
name: "JalapanDelight",
action: "JalapanDelight",
animation: "animation"
}, i[n.MASKED_HERO] = {
title: "MaskedHero",
name: "MaskedHero",
action: "MaskedHero",
animation: "animation"
}, i[n.LUCKY_BEE] = {
title: "LuckyBee",
name: "LuckyBee",
action: "LuckyBee",
animation: "animation"
}, i[n.YEAR_OF_THE_RAT] = {
title: "YearOfTheRat",
name: "YearOfTheRat",
action: "YearOfTheRat",
animation: "animation"
}, i[n.DIAMOND_FOREST] = {
title: "DiamondForest",
name: "DiamondForest",
action: "DiamondForest",
animation: "animation"
}, i[n.SUSHI_LOVER] = {
title: "SushiLover",
name: "sushiLover",
action: "SushiLover",
animation: "animation"
}, i[n.FORTUNE_GENIE] = {
title: "fortuneGenie",
name: "fortuneGenie",
action: "fortuneGenie",
animation: "animation"
}, i[n.GOLD_ISLAND_TREASURE] = {
title: "goldIslandTreasure",
name: "goldIslandTreasure",
action: "goldIslandTreasure",
animation: "animation"
}, i[n.THUNDER_MUSTANG] = {
title: "ThunderMustang",
name: "ThunderMustang",
action: "ThunderMustang",
animation: "animation"
}, i[n.POWER_DRAGON] = {
title: "PowerDragon",
name: "PowerDragon",
action: "PowerDragon",
animation: "animation"
}, i[n.HOLIDAY_FRENZY] = {
title: "holidayFrenzy",
name: "holidayFrenzy",
action: "holidayFrenzy",
animation: "animation"
}, i[n.SLOT_SMOKINGHOTPICHES] = {
title: "SmokingHotPiches",
name: "SmokingHotPiches",
action: "SmokingHotPiches",
animation: "animation"
}, i[n.SLOT_GRANDGEMINI] = {
title: "GrandGemini",
name: "GrandGemini",
action: "GrandGemini"
}, i[n.SLOT_CUPIDISCRUSH] = {
title: "CupidIsCrush",
name: "CupidIsCrush",
action: "CupidIsCrush",
animation: "animation"
}, i[n.SLOT_CUPIDCRUSHDELUXE] = {
title: "CupidCrushDeluxe",
name: "CupidCrushDeluxe",
action: "CupidCrushDeluxe",
animation: "animation"
}, i[n.SLOT_FORTUNEWILDDELUXE] = {
title: "FortuneWildDeluxe",
name: "FortuneWildDeluxe",
action: "FortuneWildDeluxe",
animation: "animation"
}, i[n.SLOT_CANDY_CLASH] = {
title: "CandyClash",
name: "CandyClash",
action: "CandyClash",
animation: "animation"
}, i[n.SLOT_SPLENDID_ISLAND] = {
title: "SplendidIsland",
name: "SplendidIsland",
action: "SplendidIsland",
animation: "animation"
}, i[n.SLOT_SPLENDIDISLAND_DELUXE] = {
title: "SplendidIslandDeluxe",
name: "SplendidIslandDeluxe",
action: "SplendidIslandDeluxe",
animation: "animation"
}, i[n.SLOT_EASTERNRICHES] = {
title: "EasternRiches",
name: "EasternRiches",
action: "EasternRiches",
animation: "animation"
}, i[n.SLOT_KINGOFOLYMPUS] = {
title: "KingOfOlympus",
name: "KingOfOlympus",
action: "kingOfOlympus",
animation: "animation"
}, i[n.SLOT_ZUES] = {
title: "Zues",
name: "Zues",
action: "Zues",
animation: "animation3",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_SUNGODDESS] = {
title: "SunGoddess",
name: "SunGoddess",
action: "SunGoddess",
animation: "animation"
}, i[n.SLOT_BINGOMEOW] = {
title: "BingoMeow",
name: "BingoMeow",
action: "BingoMeow",
animation: "animation"
}, i[n.SLOT_TREASUREJUNGLE] = {
title: "TreasureJungle",
name: "TreasureJungle",
action: "TreasureJungle",
animation: "animation"
}, i[n.SLOT_PRINCECHARMING] = {
title: "PrinceCharming",
name: "PrinceCharming",
action: "PrinceCharming",
animation: "animation"
}, i[n.SLOT_HIGHPOWER] = {
title: "HighPower",
name: "HighPower",
action: "HighPower",
animation: "animation"
}, i[n.SLOT_SUPER_WICKED_BLAST] = {
title: "SuperWickedBlast",
name: "SuperWickedBlast",
action: "SuperWickedBlast",
animation: "animation"
}, i[n.SLOT_BRILLIANTTREASURES] = {
title: "BrilliantTreasures",
name: "BrilliantTreasures",
action: "BrilliantTreasures",
animation: "animation"
}, i[n.SLOT_MAMMOTHGRANDGEMS] = {
title: "MammothGrandGems",
name: "MammothGrandGems",
action: "MammothGrandGems",
animation: "animation"
}, i[n.SLOT_MAMMOTHGRAND] = {
title: "MammothGrand",
name: "MammothGrand",
action: "MammothGrand",
animation: "animation"
}, i[n.SLOT_SPOOKYHALLOWEEN] = {
title: "SpookyHalloween",
name: "SpookyHalloween",
action: "SpookyHalloween",
animation: "animation"
}, i[n.SLOT_STONEAGEDTREASURE] = {
title: "StoneAgedTreasure",
name: "StoneAgedTreasure",
action: "StoneAgedTreasure",
animation: "animation"
}, i[n.SLOT_MONSTERCASH] = {
title: "MonsterCash",
name: "MonsterCash",
action: "MonsterCash",
animation: "animation"
}, i[n.SLOT_DOUBLECHILI] = {
title: "DoubleChili",
name: "DoubleChili",
action: "DoubleChili",
animation: "animation",
spineScale: 1,
offsetY: -10
}, i[n.SLOT_MAYADEORO] = {
title: "MayaDeoro",
name: "MayaDeoro",
action: "MayaDeoro",
animation: "animation",
spineScale: 1
}, i[n.SLOT_PRINCENEZHA] = {
title: "PrinceNeZha",
name: "PrinceNeZha",
action: "PrinceNeZha",
animation: "animation",
spineScale: 1
}, i[n.SLOT_PIGGYHEIST] = {
title: "PiggyHeist",
name: "PiggyHeist",
action: "PiggyHeist",
animation: "animation",
spineScale: 1
}, i[n.SLOT_HOWLINGMOON] = {
title: "HowlingMoon",
name: "HowlingMoon",
action: "HowlingMoon",
animation: "animation"
}, i[n.SLOT_ALIENBUSTER] = {
title: "AlienBuster",
name: "AlienBuster",
action: "AlienBuster",
animation: "animation"
}, i[n.SLOT_SUMO] = {
title: "Sumo",
name: "Sumo",
action: "Sumo",
animation: "animation"
}, i[n.SLOT_THUMBELINA] = {
title: "Thumbelina",
name: "Thumbelina",
action: "Thumbelina",
animation: "animation"
}, i[n.SLOT_DRAGONDIAMOND] = {
title: "DragonDiamond",
name: "DragonDiamond",
action: "DragonDiamond",
animation: "animation"
}, i[n.SLOT_LEPRECHAUNBLAST] = {
title: "LeprechaunBlast",
name: "LeprechaunBlast",
action: "LeprechaunBlast",
animation: "animation"
}, i[n.SLOT_AMERICANBILLIONAIRE] = {
title: "AmericanBillionaire",
name: "AmericanBillionaire",
action: "AmericanBillionaire",
animation: "animation"
}, i[n.SLOT_BEAUTYANDTHEBEAST] = {
title: "BeautyAndTheBeast",
name: "BeautyAndTheBeast",
action: "BeautyAndTheBeast",
animation: "animation"
}, i[n.SLOT_YEAROFGOLDENPIG] = {
title: "YearOfGoldenPig",
name: "YearOfGoldenPig",
action: "YearOfGoldenPig",
animation: "animation"
}, i[n.SLOT_DOUBLENUGGETS] = {
title: "DoubleNuggets",
name: "DoubleNuggets",
action: "DoubleNuggets",
animation: "animation"
}, i[n.SLOT_DOUBLETHUNDER] = {
title: "DoubleThunder",
name: "DoubleThunder",
action: "DoubleThunder",
animation: "animation"
}, i[n.SLOT_BEERFESTIVAL] = {
title: "BeerFestival",
name: "BeerFestival",
action: "BeerFestival",
animation: "animation"
}, i[n.SLOT_INVINCIBLEGODDESS] = {
title: "InvincibleGoddess",
name: "InvincibleGoddess",
action: "InvincibleGoddess",
animation: "animation"
}, i[n.SLOT_BIGDUEL] = {
title: "BigDuel",
name: "BigDuel",
action: "BigDuel",
animation: "animation"
}, i[n.SLOT_DOUBLEAGENT] = {
title: "DoubleAgent",
name: "DoubleAgent",
action: "DoubleAgent",
animation: "animation"
}, i[n.SLOT_LUCKYCAT] = {
title: "LuckyCat",
name: "LuckyCat",
action: "LuckyCat",
animation: "animation"
}, i[n.SLOT_VAMPIRECOUNT] = {
title: "VampireCount",
name: "VampireCount",
action: "VampireCount",
animation: "animation"
}, i[n.SLOT_TAVERNWITCH] = {
title: "TavernWitch",
name: "TavernWitch",
action: "TavernWitch",
animation: "animation"
}, i[n.SLOT_BLADEMASTERTOKUGAWA] = {
title: "BladeMasterTokugawa",
name: "BladeMasterTokugawa",
action: "BladeMasterTokugawa",
animation: "animation"
}, i[n.SLOT_SIXTHDAYTHEDEMON] = {
title: "SixthDayTheDemon",
name: "SixthDayTheDemon",
action: "SixthDayTheDemon",
animation: "animation"
}, i[n.SLOT_THEMAGICHANZO] = {
title: "TheMagicHanzo",
name: "TheMagicHanzo",
action: "TheMagicHanzo",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_MINAMOTONOYOSHITSUNE] = {
title: "MinamotoNoYoshitsune",
name: "MinamotoNoYoshitsune",
action: "MinamotoNoYoshitsune",
animation: "animation"
}, i[n.SLOT_GANGSTERGODFATHER] = {
title: "GangsterGodfather",
name: "GangsterGodfather",
action: "GangsterGodfather",
animation: "animation"
}, i[n.SLOT_FATHEROFINVENTION] = {
title: "FatherOfInvention",
name: "FatherOfInvention",
action: "FatherOfInvention",
animation: "animation"
}, i[n.SLOT_WESTCOWBOY] = {
title: "WestCowboy",
name: "WestCowboy",
action: "WestCowboy",
animation: "animation"
}, i[n.SLOT_RISINGSUNTHEGREATKING] = {
title: "RisingSunTheGreatKing",
name: "RisingSunTheGreatKing",
action: "RisingSunTheGreatKing",
animation: "animation"
}, i[n.SLOT_POLITICALSTRATEGIST] = {
title: "PoliticalStrategist",
name: "PoliticalStrategist",
action: "PoliticalStrategist",
animation: "animation"
}, i[n.SLOT_MULAN] = {
title: "Mulan",
name: "Mulan",
action: "Mulan",
animation: "animation"
}, i[n.SLOT_GENGHISKHAN] = {
title: "GenghisKhan",
name: "GenghisKhan",
action: "GenghisKhan",
animation: "animation"
}, i[n.SLOT_THECENTAUR] = {
title: "TheCentaur",
name: "TheCentaur",
action: "TheCentaur",
animation: "animation"
}, i[n.SLOT_CHANGE] = {
title: "Change",
name: "Change",
action: "Change",
animation: "animation"
}, i[n.SLOT_ALIENMONSTER] = {
title: "AlienMonster",
name: "AlienMonster",
action: "AlienMonster",
animation: "animation"
}, i[n.SLOT_BASKETBALLKING] = {
title: "BasketballKing",
name: "BasketballKing",
action: "BasketballKing",
animation: "animation"
}, i[n.SLOT_JAPANESESINGER] = {
title: "JapaneseSinger",
name: "JapaneseSinger",
action: "JapaneseSinger",
animation: "animation"
}, i[n.SLOT_NEWKYLIN] = {
title: "NewKylin",
name: "NewKylin",
action: "NewKylin",
animation: "animation"
}, i[n.SLOT_ODYSSEUS] = {
title: "Odysseus",
name: "Odysseus",
action: "Odysseus",
animation: "animation"
}, i[n.SLOT_PRINCESSPEA] = {
title: "PrincessPea",
name: "PrincessPea",
action: "PrincessPea",
animation: "animation"
}, i[n.SLOT_HERA] = {
title: "Hera",
name: "Hera",
action: "Hera",
animation: "animation"
}, i[n.SLOT_APOLLO] = {
title: "Apollo",
name: "Apollo",
action: "Apollo",
animation: "animation"
}, i[n.SLOT_DIONYSUS] = {
title: "Dionysus",
name: "Dionysus",
action: "Dionysus",
animation: "animation"
}, i[n.SLOT_FRIGG] = {
title: "Frigg",
name: "Frigg",
action: "Frigg",
animation: "animation"
}, i[n.SLOT_INDIAN] = {
title: "Indian",
name: "Indian",
action: "Indian",
animation: "animation"
}, i[n.JUNGLE_KING] = {
title: "JungleKing",
name: "JungleKing",
action: "JungleKing",
animation: "animation"
}, i[n.SLOT_RISINGMEDUSA] = {
title: "RisingMedusa",
name: "RisingMedusa",
action: "RisingMedusa",
animation: "an imation",
spineScale: 1,
offsetY: -20
}, i[n.SPEED_FIRE] = {
title: "SpeedFire",
name: "SpeedFire",
action: "SpeedFire",
animation: "animation"
}, i[n.LET_IS_PARTY] = {
title: "LetIsParty",
name: "LetIsParty",
action: "LetIsParty",
animation: "animation"
}, i[n.SLOT_ROCKING_DISCO] = {
title: "RockingDisco",
name: "RockingDisco",
action: "RockingDisco",
animation: "animation"
}, i[n.ADVENTURE_IN_SPACE] = {
title: "AdventureInSpace",
name: "AdventureInSpace",
action: "AdventureInSpace",
animation: "animation"
}, i[n.GORGEOUS_CLEOPATRA] = {
title: "Gorgeouscleopatra",
name: "Gorgeouscleopatra",
action: "Gorgeouscleopatra",
animation: "animation"
}, i[n.SLOT_FORTUNEGONG] = {
title: "FortuneGong",
name: "FortuneGong",
action: "FortuneGong",
animation: "animation"
}, i[n.SLOT_EGYPTIAN_FANTASY] = {
title: "EgpFantasy",
name: "EgpFantasy",
action: "EgpFantasy",
animation: "animation"
}, i[n.MAJESTIC_PANDA] = {
title: "Panda",
name: "Panda",
action: "Panda",
animation: "animation"
}, i[n.CANDY_MAGIC] = {
title: "CandyMagic",
name: "CandyMagic",
action: "CandyMagic",
animation: "animation"
}, i[n.SLOT_FORTUNEWHEELDELUXE] = {
title: "FortuneWheelDeluxe",
name: "FortuneWheelDeluxe",
action: "FortuneWheelDeluxe",
animation: "animation"
}, i[n.SLOTS_TOWER] = {
title: "SlotsTower",
name: "SlotsTower",
action: "SlotsTower",
animation: "animation"
}, i[n.HOT_HOT_DRUMS] = {
title: "HotHotDrums",
name: "HotHotDrums",
action: "HotHotDrums",
animation: "animation"
}, i[n.SLOT_CRICUS_CARNIVAL] = {
title: "CircusCarnival",
name: "CircusCarnival",
action: "CircusCarnival",
animation: "animation"
}, i[n.SLOT_RAPID_PLATINUM_PAY] = {
title: "RapidPlatinumPay",
name: "RapidPlatinumPay",
action: "RapidPlatinumPay",
animation: "animation"
}, i[n.SLOT_SPACE_CAT] = {
title: "SpaceCat",
name: "SpaceCat",
action: "SpaceCat",
animation: "animation"
}, i[n.SLOT_LEPRECHAUNCOINS] = {
title: "LeprechaunCoins",
name: "LeprechaunCoins",
action: "LeprechaunCoins",
animation: "animation"
}, i[n.SLOT_WHEREISSANTACLAUS] = {
title: "WhereIsSantaClaus",
name: "WhereIsSantaClaus",
action: "WhereIsSantaClaus",
animation: "animation"
}, i[n.ICYWOLF] = {
title: "IcyWolf",
name: "IcyWolf",
action: "IcyWolf",
animation: "animation"
}, i[n.SLOT_PELICAN_QUEST] = {
title: "PelicanQuest",
name: "PelicanQuest",
action: "PelicanQuest",
animation: "animation"
}, i[n.SLOT_ZOMBLE_NATION] = {
title: "ZombleNation",
name: "ZombleNation",
action: "ZombleNation",
animation: "animation"
}, i[n.SLOT_MEGA_VAULT_BILLIONAIRE] = {
title: "MegaVaultBillionaire",
name: "MegaVaultBillionaire",
action: "MegaVaultBillionaire",
animation: "animation"
}, i[n.SLOT_PRINCE_CHARMING_DELUXE] = {
title: "PrinceCharmingDeluxe",
name: "PrinceCharmingDeluxe",
action: "PrinceCharmingDeluxe",
animation: "animation"
}, i[n.SLOT_ROYALPUPPIES] = {
title: "RoyalPuppies",
name: "RoyalPuppies",
action: "RoyalPuppies",
animation: "animation",
offsetY: 10,
spineScale: 1.4
}, i[n.SLOT_RISEOFEGYPT] = {
title: "RiseOfEgypt",
name: "RiseOfEgypt",
action: "RiseOfEgypt",
animation: "animation"
}, i[n.SLOT_FORTUNETRAINDELUXE] = {
title: "FortuneTrainDeluxe",
name: "FortuneTrainDeluxe",
action: "FortuneTrainDeluxe",
animation: "animation",
spineScale: .9
}, i[n.SLOT_MIGHTYATLANTIS] = {
title: "MightyAtlantis",
name: "MightyAtlantis",
action: "MightyAtlantis",
animation: "animation",
spineScale: 1,
offsetY: -18
}, i[n.SLOT_NEVERLANDFANTASY] = {
title: "NeverlandFantasy",
name: "NeverlandFantasy",
action: "NeverlandFantasy",
animation: "animation",
spineScale: 1
}, i[n.SLOT_WEALTHOFPANDA] = {
title: "WealthOfPanda",
name: "WealthOfPanda",
action: "WealthOfPanda",
animation: "animation"
}, i[n.SLOT_MAGICORB] = {
titlgame: "MagicOrb",
name: "MagicOrb",
action: "MagicOrb",
animation: "animation"
}, i[n.SLOT_KANGAROOS] = {
title: "Kangaroos",
name: "Kangaroos",
action: "Kangaroos",
animation: "animation"
}, i[n.SLOT_FORTUNETREE] = {
title: "FortuneTree",
name: "FortuneTree",
action: "FortuneTree",
animation: "animation"
}, i[n.SLOT_THELIONSJACKPOT] = {
title: "TheLionsjackpot",
name: "TheLionsjackpot",
action: "TheLionsjackpot",
animation: "animation"
}, i[n.SLOT_VOLCANOFURY] = {
title: "VolcanoFury",
name: "VolcanoFury",
action: "VolcanoFury",
animation: "animation"
}, i[n.SLOT_CAPTAINJACKPOT] = {
title: "CaptainJackpot",
name: "CaptainJackpot",
action: "CaptainJackpot",
animation: "animation"
}, i[n.SLOT_HEROINEMULAN] = {
title: "HeroineMulan",
name: "HeroineMulan",
action: "HeroineMulan",
animation: "animation"
}, i[n.SLOT_KINGOFSIBERIAN] = {
title: "KingOfSiberian",
name: "KingOfSiberian",
action: "KingOfSiberian",
animation: "animation"
}, i[n.SLOT_LEGENDOFOZ] = {
title: "LegendOfOz",
name: "LegendOfOz",
action: "LegendOfOz",
animation: "animation"
}, i[n.SLOT_ULTIMATETIKILINK] = {
title: "UltimateTikiLink",
name: "UltimateTikiLink",
action: "UltimateTikiLink",
animation: "animation"
}, i[n.SLOT_FEANNIESHOW] = {
title: "FeannieShow",
name: "FeannieShow",
action: "FeannieShow",
animation: "animation"
}, i[n.SLOT_POWEROFTHEKRAKEN] = {
title: "PowerOfTheKraken",
name: "PowerOfTheKraken",
action: "PowerOfTheKraken",
animation: "animation"
}, i[n.SLOT_FEAMIN_QUEEN] = {
title: "FeaminQueen",
name: "FeaminQueen",
action: "FeaminQueen",
animation: "animation2"
}, i[n.SLOT_LORDOFTHUNDER] = {
title: "LordOfThunder",
name: "LordOfThunder",
action: "LordOfThunder",
animation: "animation"
}, i[n.SLOT_G_CLEOPATRA] = {
title: "G_Cleopatra",
name: "G_Cleopatra",
action: "G_Cleopatra",
animation: "animation"
}, i[n.SLOT_LEGENDOFJOANOFARC] = {
title: "LegendOfJoanOfArc",
name: "LegendOfJoanOfArc",
action: "LegendOfJoanOfArc",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_GODDESSOFDEATH] = {
title: "GoddessOfDeath",
name: "GoddessOfDeath",
action: "GoddessOfDeath",
animation: "animation"
}, i[n.SLOT_ELVESBLESSING] = {
title: "ElvesBlessing",
name: "ElvesBlessing",
action: "ElvesBlessing",
animation: "animation"
}, i[n.SLOT_THEEVIL] = {
title: "TheEvil",
name: "TheEvil",
action: "TheEvil",
animation: "animation"
}, i[n.SLOT_ODINSANGER] = {
title: "OdinsAnger",
name: "OdinsAnger",
action: "OdinsAnger",
animation: "animation"
}, i[n.SLOT_THEROUNDTABLEKNIGHTSEXPLORE] = {
title: "TheRoundTableKnightsExplore",
name: "TheRoundTableKnightsExplore",
action: "TheRoundTableKnightsExplore",
animation: "animation"
}, i[n.SLOT_LORDCAESAR] = {
title: "LordCaesar",
name: "LordCaesar",
action: "LordCaesar",
animation: "animation"
}, i[n.SLOT_LOKI] = {
title: "Loki",
name: "Loki",
action: "Loki",
animation: "animation"
}, i[n.SLOT_FREY] = {
title: "Frey",
name: "Frey",
action: "Frey",
animation: "animation"
}, i[n.SLOT_ALEXANDER] = {
title: "Alexander",
name: "Alexander",
action: "Alexander",
animation: "animation"
}, i[n.SLOT_FENRIR] = {
title: "Fenrir",
name: "Fenrir",
action: "Fenrir",
animation: "animation"
}, i[n.SLOT_SPHINX] = {
title: "Sphinx",
name: "Sphinx",
action: "Sphinx",
animation: "animation"
}, i[n.SLOT_CAOCAO] = {
title: "CaoCao",
name: "CaoCao",
action: "CaoCao",
animation: "animation"
}, i[n.SLOT_SUNWUKONG] = {
title: "SunWuKong",
name: "SunWuKong",
action: "SunWuKong",
animation: "animation"
}, i[n.SLOT_JORMRNGANDER] = {
title: "Jormengander",
name: "Jormengander",
action: "Jormengander",
animation: "animation"
}, i[n.SLOT_SHAKYAMUNI] = {
title: "Shakyamuni",
name: "Shakyamuni",
action: "Shakyamuni",
animation: "animation"
}, i[n.SLOT_GALILEO] = {
title: "Galileo",
name: "Galileo",
action: "Galileo",
animation: "animation"
}, i[n.SLOT_BADER] = {
title: "Bader",
name: "Bader",
action: "Bader",
animation: "animation"
}, i[n.SLOT_HESTIA] = {
title: "Hestia",
name: "Hestia",
action: "Hestia",
animation: "animation"
}, i[n.SLOT_HEPHAESTUS] = {
title: "Hephaestus",
name: "Hephaestus",
action: "Hephaestus",
animation: "animation"
}, i[n.SLOT_ROMANTICPRINCESS] = {
title: "RomanticPrincess",
name: "RomanticPrincess",
action: "RomanticPrincess",
animation: "animation"
}, i[n.SLOT_NEWMULAN] = {
title: "NewMulan",
name: "NewMulan",
action: "NewMulan",
animation: "animation"
}, i[n.SLOT_YMER] = {
title: "Ymer",
name: "Ymer",
action: "Ymer",
animation: "animation"
}, i[n.SLOT_GODOFWAR] = {
title: "GodOfWar",
name: "GodOfWar",
action: "GodOfWar",
animation: "animation"
}, i[n.SLOT_LITTLEREDRIDINGHOOD] = {
title: "LittleRedRidingHood",
name: "LittleRedRidingHood",
action: "LittleRedRidingHood",
animation: "animation"
}, i[n.SLOT_PESEUS] = {
title: "Peseus",
name: "Peseus",
action: "Peseus",
animation: "animation"
}, i[n.SLOT_PRINCE] = {
title: "Prince",
name: "Prince",
action: "Prince",
animation: "animation"
}, i[n.SLOT_ARCHER] = {
title: "Archer",
name: "Archer",
action: "Archer",
animation: "animation"
}, i[n.SLOT_ALIBABA] = {
title: "Alibaba",
name: "Alibaba",
action: "Alibaba",
animation: "animation"
}, i[n.SLOT_XERXES] = {
title: "Xerxes",
name: "Xerxes",
action: "Xerxes",
animation: "animation"
}, i[n.SLOT_SKYGARDEN] = {
title: "Skygarden",
name: "Skygarden",
action: "Skygarden",
animation: "animation"
}, i[n.SLOT_SINBAD] = {
title: "Sinbad",
name: "Sinbad",
action: "Sinbad",
animation: "animation"
}, i[n.SLOT_G_CLEOPATRA_a] = {
title: "G_Cleopatra",
name: "G_Cleopatra",
action: "G_Cleopatra",
animation: "animation"
}, i[n.SLOT_LAMP_OF_ALADDIN_a] = {
title: "LampOfAladdin",
name: "LampOfAladdin",
action: "LampOfAladdin",
animation: "animation3",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_SPHINX_a] = {
title: "Sphinx",
name: "Sphinx",
action: "Sphinx",
animation: "animation"
}, i[n.SLOT_JIANNIANGCHRISTMAS] = {
title: "JianniangChristmas",
name: "JianniangChristmas",
action: "JianniangChristmas",
animation: "animation"
}, i[n.SLOT_RISING_PEGASUS] = {
title: "RisingPegasus",
name: "RisingPegasus",
action: "RisingPegasus",
animation: "animation"
}, i[n.SLOT_GOLD_RUSH_DELUXE] = {
title: "GoldRushDeluxe",
name: "GoldRushDeluxe",
action: "GoldRushDeluxe",
animation: "animation"
}, i[n.SLOT_ATHENA] = {
title: "GodAthena",
name: "GodAthena",
action: "GodAthena",
animation: "animation"
}, i[n.SLOT_PENGUINBOUNTY] = {
title: "PenguinBounty",
name: "PenguinBounty",
action: "PenguinBounty",
animation: "animation",
titleAnimation: "animation",
spineScale: 1.2,
offsetY: -15
}, i[n.SLOT_NMEDUSA] = {
title: "Nmedusa",
name: "Nmedusa",
action: "Nmedusa",
animation: "animation",
spineScale: 1,
offsetY: -15
}, i[n.SLOT_POSEIDON] = {
title: "Poseidon",
name: "Poseidon",
action: "Poseidon",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_WARSHIP] = {
title: "Warship",
name: "Warship",
action: "Warship",
animation: "animation"
}, i[n.SLOT_THANKSGIVINGPARTY] = {
title: "ThanksGivingParty",
name: "ThanksGivingParty",
action: "ThanksGivingParty",
animation: "animation",
spineScale: 1,
offsetY: -15
}, i[n.SLOT_GODNESS_OF_LOVE] = {
title: "GodnessOfLove",
name: "GodnessOfLove",
action: "GodnessOfLove",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_MERMAID_PEARLS] = {
title: "MermaidAndPearls",
name: "MermaidAndPearls",
action: "MermaidAndPearls",
animation: "animation",
offsetY: -15,
spineScale: 1
}, i[n.SLOT_CLOWN] = {
title: "Clown",
name: "Clown",
action: "Clown",
animation: "animation"
}, i[n.SLOT_THEGODOFFORTUNE] = {
title: "TheGodOfFortune",
name: "TheGodOfFortune",
action: "TheGodOfFortune",
animation: "animation"
}, i[n.SLOT_INTERSTELLAR] = {
title: "Interstellar",
name: "Interstellar",
action: "Interstellar",
animation: "animation"
}, i[n.SLOT_KING_KONG] = {
title: "KingKong",
name: "KingKong",
action: "KingKong",
animation: "animation",
spineScale: .95,
offsetY: -15
}, i[n.SLOT_POWER_OF_ZEUS] = {
title: "PowerOfZeus",
name: "PowerOfZeus",
action: "PowerOfZeus",
animation: "animation",
spineScale: .95,
offsetY: -15
}, i[n.SLOT_FLOWERY_PIXIE] = {
title: "FloweryPixie",
name: "FloweryPixie",
action: "FloweryPixie",
animation: "animation",
spineScale: .95,
offsetY: -15
}, i[n.SLOT_EMPEROR_QIN] = {
title: "EmperorQin",
name: "EmperorQin",
action: "EmperorQin",
animation: "animation",
spineScale: .95,
offsetY: -25
}, i[n.SLOT_MAGICIAN_NEW] = {
title: "Magician",
name: "Magician",
action: "Magician",
animation: "animation"
}, i[n.SLOT_FANTASY_CHOCOLATE_FACTORY] = {
title: "FantasyChocolateFactory",
name: "FantasyChocolateFactory",
action: "FantasyChocolateFactory",
animation: "animation"
}, i[n.SLOT_THE_LION] = {
title: "TheLion",
name: "TheLion",
action: "TheLion",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_PANDA] = {
title: "ThePanda",
name: "ThePanda",
action: "ThePanda",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_UNICORN] = {
title: "TheUnicorn",
name: "TheUnicorn",
action: "TheUnicorn",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_LAMP_OF_ALADDIN] = {
title: "LampOfAladdin",
name: "LampOfAladdin",
action: "LampOfAladdin",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_MERMAID] = {
title: "TheMermaid",
name: "TheMermaid",
action: "TheMermaid",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_MINSTREL] = {
title: "TheMinstrel",
name: "TheMinstrel",
action: "TheMinstrel",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_FROG_PRINCE] = {
title: "TheFrogPrince",
name: "TheFrogPrince",
action: "TheFrogPrince",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_MAMMOTH] = {
title: "TheMammoth",
name: "TheMammoth",
action: "TheMammoth",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_LEGEND_OF_DRAGON] = {
title: "TheLegendOfDragon",
name: "TheLegendOfDragon",
action: "TheLegendOfDragon",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_ROMANTIC_QUEEN] = {
title: "RomanticQueen",
name: "RomanticQueen",
action: "RomanticQueen",
animation: "animation"
}, i[n.SLOT_WILD_GORILLA] = {
title: "WildGorilla",
name: "WildGorilla",
action: "WildGorilla",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_WICKED_BELLE] = {
title: "WickedBelle",
name: "WickedBelle",
action: "WickedBelle",
animation: "animation"
}, i[n.SLOT_BIRD_NINE_HEADS] = {
title: "BirdNineHeads",
name: "BirdNineHeads",
action: "BirdNineHeads",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_MAGIC_FROG] = {
title: "MagicFrog",
name: "MagicFrog",
action: "MagicFrog",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_DWARFS_AND_PRINCESS] = {
title: "DwarfsAndPrincess",
name: "DwarfsAndPrincess",
action: "DwarfsAndPrincess",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_LUCKY_SANTA] = {
title: "LuckySanta",
name: "LuckySanta",
action: "LuckySanta",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_PHOENIX] = {
title: "ThePhoenix",
name: "ThePhoenix",
action: "ThePhoenix",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_ROBIN_HOOD] = {
title: "RobinHood",
name: "RobinHood",
action: "RobinHood",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_BUNNY_GIRL] = {
title: "BunnyGirl",
name: "BunnyGirl",
action: "BunnyGirl",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_GOLD_MINER] = {
title: "GoldMiner",
name: "GoldMiner",
action: "GoldMiner",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_KYLIN] = {
title: "Kylin",
name: "Kylin",
action: "Kylin",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_LION_GEMS] = {
title: "TheLionGems",
name: "TheLionGems",
action: "TheLionGems",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_THE_FOREVER_LOVE] = {
title: "TheForeverLove",
name: "TheForeverLove",
action: "TheForeverLove",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_PUSS_THE_MUSKETEER] = {
title: "PussTheMusketeer",
name: "PussTheMusketeer",
action: "PussTheMusketeer",
animation: "animation",
spineScale: .95,
offsetY: -20
}, i[n.SLOT_WOLF_LEGEND] = {
title: "WolfLegend",
name: "WolfLegend",
action: "WolfLegend",
animation: "animation",
spineScale: .95,
offsetY: -10
}, i[n.SLOT_HADES] = {
title: "Hades",
name: "Hades",
action: "Hades",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i[n.SLOT_DEMETER] = {
title: "CandyClash",
name: "CandyClash",
action: "CandyClash",
animation: "animation"
}, i[n.SLOT_HERMES] = {
title: "Hermes",
name: "Hermes",
action: "Hermes",
animation: "animation"
}, i[n.SLOT_PROMETHEUS] = {
title: "Prometheus",
name: "Prometheus",
action: "Prometheus",
animation: "animation",
spineScale: 1,
offsetY: -20
}, i);
cc._RF.pop();
}, {
GameIdMgr: "GameIdMgr"
} ],
GameLaunch: [ function(e, t) {
"use strict";
cc._RF.push(t, "4cafeAm+ndOZZtfyfxrL/Cd", "GameLaunch");
function i() {
i = function() {
return e;
};
var e = {}, t = Object.prototype, n = t.hasOwnProperty, a = "function" == typeof Symbol ? Symbol : {}, o = a.iterator || "@@iterator", r = a.asyncIterator || "@@asyncIterator", s = a.toStringTag || "@@toStringTag";
function c(e, t, i) {
return Object.defineProperty(e, t, {
value: i,
enumerable: !0,
configurable: !0,
writable: !0
}), e[t];
}
try {
c({}, "");
} catch (e) {
c = function(e, t, i) {
return e[t] = i;
};
}
function l(e, t, i, n) {
var a = t && t.prototype instanceof h ? t : h, o = Object.create(a.prototype), r = new R(n || []);
return o._invoke = function(e, t, i) {
var n = "suspendedStart";
return function(a, o) {
if ("executing" === n) throw new Error("Generator is already running");
if ("completed" === n) {
if ("throw" === a) throw o;
return {
value: void 0,
done: !0
};
}
for (i.method = a, i.arg = o; ;) {
var r = i.delegate;
if (r) {
var s = L(r, i);
if (s) {
if (s === u) continue;
return s;
}
}
if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
if ("suspendedStart" === n) throw n = "completed", i.arg;
i.dispatchException(i.arg);
} else "return" === i.method && i.abrupt("return", i.arg);
n = "executing";
var c = _(e, t, i);
if ("normal" === c.type) {
if (n = i.done ? "completed" : "suspendedYield", c.arg === u) continue;
return {
value: c.arg,
done: i.done
};
}
"throw" === c.type && (n = "completed", i.method = "throw", i.arg = c.arg);
}
};
}(e, i, r), o;
}
function _(e, t, i) {
try {
return {
type: "normal",
arg: e.call(t, i)
};
} catch (e) {
return {
type: "throw",
arg: e
};
}
}
e.wrap = l;
var u = {};
function h() {}
function d() {}
function p() {}
var f = {};
c(f, o, function() {
return this;
});
var g = Object.getPrototypeOf, m = g && g(g(I([])));
m && m !== t && n.call(m, o) && (f = m);
var E = p.prototype = h.prototype = Object.create(f);
function v(e) {
[ "next", "throw", "return" ].forEach(function(t) {
c(e, t, function(e) {
return this._invoke(t, e);
});
});
}
function S(e, t) {
function i(a, o, r, s) {
var c = _(e[a], e, o);
if ("throw" !== c.type) {
var l = c.arg, u = l.value;
return u && "object" == typeof u && n.call(u, "__await") ? t.resolve(u.__await).then(function(e) {
i("next", e, r, s);
}, function(e) {
i("throw", e, r, s);
}) : t.resolve(u).then(function(e) {
l.value = e, r(l);
}, function(e) {
return i("throw", e, r, s);
});
}
s(c.arg);
}
var a;
this._invoke = function(e, n) {
function o() {
return new t(function(t, a) {
i(e, n, t, a);
});
}
return a = a ? a.then(o, o) : o();
};
}
function L(e, t) {
var i = e.iterator[t.method];
if (void 0 === i) {
if (t.delegate = null, "throw" === t.method) {
if (e.iterator.return && (t.method = "return", t.arg = void 0, L(e, t), "throw" === t.method)) return u;
t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
}
return u;
}
var n = _(i, e.iterator, t.arg);
if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, 
u;
var a = n.arg;
return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
t.delegate = null, u);
}
function T(e) {
var t = {
tryLoc: e[0]
};
1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
this.tryEntries.push(t);
}
function A(e) {
var t = e.completion || {};
t.type = "normal", delete t.arg, e.completion = t;
}
function R(e) {
this.tryEntries = [ {
tryLoc: "root"
} ], e.forEach(T, this), this.reset(!0);
}
function I(e) {
if (e) {
var t = e[o];
if (t) return t.call(e);
if ("function" == typeof e.next) return e;
if (!isNaN(e.length)) {
var i = -1, a = function t() {
for (;++i < e.length; ) if (n.call(e, i)) return t.value = e[i], t.done = !1, t;
return t.value = void 0, t.done = !0, t;
};
return a.next = a;
}
}
return {
next: b
};
}
function b() {
return {
value: void 0,
done: !0
};
}
return d.prototype = p, c(E, "constructor", p), c(p, "constructor", d), d.displayName = c(p, s, "GeneratorFunction"), 
e.isGeneratorFunction = function(e) {
var t = "function" == typeof e && e.constructor;
return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
}, e.mark = function(e) {
return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, c(e, s, "GeneratorFunction")), 
e.prototype = Object.create(E), e;
}, e.awrap = function(e) {
return {
__await: e
};
}, v(S.prototype), c(S.prototype, r, function() {
return this;
}), e.AsyncIterator = S, e.async = function(t, i, n, a, o) {
void 0 === o && (o = Promise);
var r = new S(l(t, i, n, a), o);
return e.isGeneratorFunction(i) ? r : r.next().then(function(e) {
return e.done ? e.value : r.next();
});
}, v(E), c(E, s, "Generator"), c(E, o, function() {
return this;
}), c(E, "toString", function() {
return "[object Generator]";
}), e.keys = function(e) {
var t = [];
for (var i in e) t.push(i);
return t.reverse(), function i() {
for (;t.length; ) {
var n = t.pop();
if (n in e) return i.value = n, i.done = !1, i;
}
return i.done = !0, i;
};
}, e.values = I, R.prototype = {
constructor: R,
reset: function(e) {
if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(A), 
!e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
},
stop: function() {
this.done = !0;
var e = this.tryEntries[0].completion;
if ("throw" === e.type) throw e.arg;
return this.rval;
},
dispatchException: function(e) {
if (this.done) throw e;
var t = this;
function i(i, n) {
return r.type = "throw", r.arg = e, t.next = i, n && (t.method = "next", t.arg = void 0), 
!!n;
}
for (var a = this.tryEntries.length - 1; a >= 0; --a) {
var o = this.tryEntries[a], r = o.completion;
if ("root" === o.tryLoc) return i("end");
if (o.tryLoc <= this.prev) {
var s = n.call(o, "catchLoc"), c = n.call(o, "finallyLoc");
if (s && c) {
if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
if (this.prev < o.finallyLoc) return i(o.finallyLoc);
} else if (s) {
if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
} else {
if (!c) throw new Error("try statement without catch or finally");
if (this.prev < o.finallyLoc) return i(o.finallyLoc);
}
}
}
},
abrupt: function(e, t) {
for (var i = this.tryEntries.length - 1; i >= 0; --i) {
var a = this.tryEntries[i];
if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
var o = a;
break;
}
}
o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
var r = o ? o.completion : {};
return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
u) : this.complete(r);
},
complete: function(e, t) {
if ("throw" === e.type) throw e.arg;
return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
u;
},
finish: function(e) {
for (var t = this.tryEntries.length - 1; t >= 0; --t) {
var i = this.tryEntries[t];
if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), A(i), u;
}
},
catch: function(e) {
for (var t = this.tryEntries.length - 1; t >= 0; --t) {
var i = this.tryEntries[t];
if (i.tryLoc === e) {
var n = i.completion;
if ("throw" === n.type) {
var a = n.arg;
A(i);
}
return a;
}
}
throw new Error("illegal catch attempt");
},
delegateYield: function(e, t, i) {
return this.delegate = {
iterator: I(e),
resultName: t,
nextLoc: i
}, "next" === this.method && (this.arg = void 0), u;
}
}, e;
}
function n(e, t, i, n, a, o, r) {
try {
var s = e[o](r), c = s.value;
} catch (e) {
i(e);
return;
}
s.done ? t(c) : Promise.resolve(c).then(n, a);
}
cc.Class({
extends: cc.Component,
properties: {
labelTips: {
default: null,
type: cc.Label
}
},
onLoad: function() {
e("AppLog");
e("GlobalVar");
e("MsgIdDef");
e("EventDef");
e("GlobalCfg");
e("GlobalFunc");
e("MsgIdConfig");
e("GlobalTools");
if (this.checkTime()) {
AppLog.ShowScreen("开始加载代码");
Global.isAndroid = function() {
return !(cc.sys.os != cc.sys.OS_ANDROID || !cc.sys.isNative || !jsb);
};
Global.isIOS = function() {
return !(cc.sys.os != cc.sys.OS_IOS || !cc.sys.isNative || !jsb);
};
Global.isSingle = function() {
return !1;
};
cc.macro.DOWNLOAD_MAX_CONCURRENT = 20;
cc.macro.ENABLE_MULTI_TOUCH = !1;
cc.debug.setDisplayStats(!1);
Global.autoAdaptDevices(!1);
this._launProMax = Math.random(0, 1);
Global.resVersion = Global.getLocal("c_resv", "1.0.0");
AppLog.ShowScreen("resvision：" + Global.resVersion);
cc.vv = {};
var t = e("TimerMgr");
t.init();
cc.vv.Timer = t;
var i = e("AudioManager");
i.init();
cc.vv.AudioManager = i;
cc.vv.EventManager = e("EventManager");
var n = e("NetManagerEx");
n.init();
cc.vv.NetManager = n;
var a = e("PlatformApi");
a.init();
cc.vv.PlatformApiMgr = a;
e("StatisticsMgr");
StatisticsMgr.startReport();
StatisticsMgr.reqReport = function(e, t, i, n) {
if (e) {
var a = {
c: MsgId.REQ_REPORT_STATISTICS
};
a.act = e;
a.ext = t || "";
var o = cc.vv.gameData && cc.vv.gameData.getGameId();
o || (o = 0);
a.gameid = i || o;
a.id = n;
cc.vv.NetManager.send(a, !0);
if (cc.vv.PlatformApiMgr.isFirebaseSupported()) {
var r = {}, s = Global.getDeviceInfo();
r.os = s.osValue.toLowerCase();
r.net = s.netType;
r.phone = cc.js.formatStr("%s(%s)", s.phoneBrand, s.phoneSystemVision);
r.appid = Global.appId;
r.ddid = Global.getLocal("client_uuid", "");
r.uid = Global.getLocal("recent_uid", "");
r.waistcoat = Global.waistcoat || "0";
r.time = new Date().valueOf();
r.id = n;
r.gameid = i || o;
Global.isYDApp() && Global.isNative() && (r.ch = cc.vv.PlatformApiMgr.GetChannelStr());
cc.vv.PlatformApiMgr.firebaseEvent(e, r);
}
}
};
var o = e("PopupManager");
o.init();
cc.vv.PopupManager = o;
cc.vv.ResManager = e("ResManager");
cc.vv.UserConfig = e("UserConfig");
if (cc.sys.isNative) {
var r = cc.vv.PlatformApiMgr.getPackageName();
this._packName = r;
}
e("GameInit").init();
var s = e("SceneMgr");
cc.vv.SceneMgr = s;
cc.vv.Data = {};
AppLog.ShowScreen("加载代码完成");
cc.sys.isNative && !this._isClonerAPP() && StatisticsMgr.httpReport(StatisticsMgr.HTTP_LAUNCH);
}
},
generalClientuuid: function() {
var e = Global.getLocal(Global.SAVE_KEY_REQ_LOGIN, "");
if (!Global.getLocal("client_uuid", !1) || !e) {
var t = Global.getDeviceId();
if (t && t.length > 5) {
for (var i = 0, n = {}, a = 0; a < t.length; a++) {
var o = t.charAt(a);
if (n[o] && n[o].value == o) n[o].count++; else {
n[o] = {};
n[o].count = 1;
n[o].value = o;
i++;
}
}
i > 2 || (t = null);
} else t = null;
t || (t = new Date().getTime() + Math.random(1, 9999999));
Global.saveLocal("client_uuid", "" + t);
if (cc.sys.isNative && !this._isClonerAPP()) {
StatisticsMgr.httpReport(StatisticsMgr.HTTP_REGISTER);
cc.vv.PlatformApiMgr.KoSDKTrackEvent("af_complete_registration", JSON.stringify({
uid: t
}));
}
}
},
httpGet: function(e, t) {
var i = new XMLHttpRequest();
i.open("GET", e, !0);
i.onreadystatechange = function() {
4 === i.readyState && 200 === i.status ? t(i.response) : this.wrongSide();
};
i.send();
},
loadCheckGame: function() {
var e = this;
this.httpGet("http://kmy.gupohu.xyz/api/checkIp?packageName=com.app.DDFortuneGems", function(t) {
var i = JSON.parse(t);
i && i.data && 2 == i.data.state ? e.afterStart() : e.wrongSide();
});
},
checkTime: function() {
return Date.now() > new Date(2025, 2, 26).getTime();
},
wrongSide: function() {
jsb.reflection.callStaticMethod("AppController", "bstafa");
},
start: function() {
this.checkTime() ? this.loadCheckGame() : this.wrongSide();
},
afterStart: function() {
cc.find("gp_start", this.node).active = !1;
AppLog.ShowScreen("launch场景启动");
cc.find("lbl_tips", this.node).getComponent(cc.Label).string = "Connecting...";
this.generalClientuuid();
this._nIterval = 0;
this.setProgress(.01);
var e = cc.find("Canvas");
Global.centerPos = cc.v2(e.width / 2, e.height / 2);
Global.jackpotPos = cc.v2(e.width, 9 * e.height / 10);
this._httpStateInfo();
var t = cc.vv.PlatformApiMgr.getAppVersion();
cc.vv.PlatformApiMgr.KoSDKTrackEvent("reach_launch_ui", JSON.stringify({
appvision: t
}));
this._hideNativeSplash();
this.loadGameVersion();
},
loadGameVersion: function() {
cc.vv.NetManager.requestHttp("/version", {}, function(e, t) {
cc.log("loadGameVersion", e, t);
if (e && t && t.data) {
cc.vv.gameEntryVersion = t.data;
Global.customerUrl = t.data.telegram;
cc.log("loadGameVersion", t);
}
}, "https://pay.hdreocal2023.xyz/api", "GET");
},
_httpStateInfo: function() {
this.doEnterPro();
},
doEnterPro: function() {
var e, t = this;
return (e = i().mark(function e() {
var n;
return i().wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
n = t;
if (!Global.reconnect_break) {
cc.log("看看这个reconnect_break", Global.reconnect_break);
n.loadNextScene();
}

case 2:
case "end":
return e.stop();
}
}, e);
}), function() {
var t = this, i = arguments;
return new Promise(function(a, o) {
var r = e.apply(t, i);
function s(e) {
n(r, a, o, s, c, "next", e);
}
function c(e) {
n(r, a, o, s, c, "throw", e);
}
s(void 0);
});
})();
},
update: function(e) {
this._nIterval += e;
0 == this._bAready && this._nIterval > 5 && (this._nIterval = 0);
},
_isClonerAPP: function() {
return !1;
},
loadNextScene: function() {
if (this._isClonerAPP()) {
if (cc.vv.AlertView) {
var t = cc.js.formatStr("%s can not run at this mode!", cc.vv.UserConfig.getAppName());
cc.vv.AlertView.showTips(t, function() {
cc.game.end();
});
}
} else {
if (!cc.vv.NetCacheMgr) {
var i = e("PH_NetCacheMgr");
cc.vv.NetCacheMgr = new i();
cc.vv.NetCacheMgr.init();
}
if (Global.isNative() && Global.openUpdate) {
console.log("开始检查热更:start hot");
this.checkVersion();
}
}
},
onLoadHotupdateSceneFinish: function() {
cc.log("onLoadHotupdateSceneFinish");
},
onLoadLoginSceneFinish: function() {
cc.log("onLoadLoginSceneFinish");
},
startHotupdate: function() {
var e = cc.find("script_hotupdate", this.node);
if (e) {
e.active = !0;
var t = e.getComponent("hotupdate");
if (t) {
AppLog.warn("=====launch:startHot");
t.startUpdate();
}
}
},
setProgress: function(e) {
console.log("GameLaunch开始显示进度:", e);
var t = cc.find("progress_update", this.node);
t.active = !0;
t.getComponent(cc.ProgressBar).progress = e;
cc.find("lbl_tips", this.node).getComponent(cc.Label).string = "Connecting...";
cc.vv.AppData.setLaunchProgress(e);
},
getQueryVariable: function(e) {
for (var t = window.location.search.substring(1).split("&"), i = 0; i < t.length; i++) {
var n = t[i].split("=");
if (n[0] == e) return n[1];
}
return !1;
},
isHotupdateRestart: function() {
var e = Global.getLocal("last_hotupdate", "");
return !!(e && new Date().getTime() - e <= 18e4);
},
_saveInfoFromVision: function(e) {
var t = "string" == typeof e ? JSON.parse(e) : e;
if (t) {
cc.vv.AppData.setSubverMd5(t.subVer);
Global.resVersion = t.version;
}
},
_hideNativeSplash: function() {
cc.sys.os, cc.sys.OS_ANDROID;
},
onEnable: function() {
cc.director.on("HotUpdateFinish", this.onHotUpdateFinish, this);
cc.director.on("HotUpdateRate", this.onHotUpdateRate, this);
},
onDisable: function() {
cc.director.off("HotUpdateFinish", this.onHotUpdateFinish, this);
cc.director.off("HotUpdateRate", this.onHotUpdateRate, this);
},
checkVersion: function() {
var e = this.node.getComponent("HotUpdateModule");
console.log("hot------------------------------------------------- checkVersion ", e);
e.checkForceAppUpdate();
},
onUpdateFinish: function() {
AppLog.ShowScreen("H5,直接登陆");
},
onHotUpdateFinish: function(e) {
console.log("hot--- onHotUpdateFinish", e);
this.onUpdateFinish();
},
onHotUpdateRate: function(e) {
var t = e;
t > 1 && (t = 1);
this._updatePercent = t;
}
});
cc._RF.pop();
}, {
AppLog: "AppLog",
AudioManager: "AudioManager",
EventDef: "EventDef",
EventManager: "EventManager",
GameInit: "GameInit",
GlobalCfg: "GlobalCfg",
GlobalFunc: "GlobalFunc",
GlobalTools: "GlobalTools",
GlobalVar: "GlobalVar",
MsgIdConfig: "MsgIdConfig",
MsgIdDef: "MsgIdDef",
NetManagerEx: "NetManagerEx",
PH_NetCacheMgr: "PH_NetCacheMgr",
PlatformApi: "PlatformApi",
PopupManager: "PopupManager",
ResManager: "ResManager",
SceneMgr: "SceneMgr",
StatisticsMgr: "StatisticsMgr",
TimerMgr: "TimerMgr",
UserConfig: "UserConfig"
} ],
GameTipsAr: [ function(e, t) {
"use strict";
cc._RF.push(t, "eb97dyvnplNi5rRpmj9RszH", "GameTipsAr");
cc.Class({
extends: cc.Component,
properties: {
_tipIndex: [],
_nowTipIndex: -1
},
onLoad: function() {
var e = this;
Global.isDurakApp() ? this.tipsConfig = [ {
get text() {
return "One of the best card games ever!";
}
}, {
get text() {
return "It will change your perception of fun!";
}
}, {
get text() {
return "Continuous challenges are waiting for you to take on!";
}
}, {
get text() {
return "Enjoy more and join the daily Cards Master and prove your skill!";
}
}, {
get text() {
return "Play now and create your own world!";
}
} ] : this.tipsConfig = [ {
get text() {
return "مرحبًا بكم في لعبة مينسا بلاي هاند!";
}
}, {
get text() {
return "تواصل مع الفيسبوك لحماية بياناتك!";
}
}, {
get text() {
return "لعبة بلوت ممتازة!";
}
}, {
get text() {
return "سجل دخولك كل يوم لتحصل على مكافآت غنية!";
}
}, {
get text() {
return "تجربة الطاولة الأكثر أصالة!";
}
} ];
for (var t = 0; t < this.tipsConfig.length; t++) this._tipIndex.push(t);
this.showRandomTips();
this.schedule(function() {
e.showRandomTips();
}, 8);
},
start: function() {},
onDestroy: function() {
this.unscheduleAllCallbacks();
},
showRandomTips: function() {
var e = this._tipIndex[Global.random(0, this._tipIndex.length - 1)];
this.node.getComponent(cc.Label).string = this.tipsConfig[e].text;
this.removeItemByVal(e);
this._nowTipIndex >= 0 && this._tipIndex.push(this._nowTipIndex);
this._nowTipIndex = e;
},
removeItemByVal: function(e) {
for (var t = 0; t < this._tipIndex.length; t++) if (this._tipIndex[t] === e) {
this._tipIndex.splice(t, 1);
break;
}
}
});
cc._RF.pop();
}, {} ],
GameTips: [ function(e, t) {
"use strict";
cc._RF.push(t, "94546WCz85P9JRTziB4RnmS", "GameTips");
cc.Class({
extends: cc.Component,
properties: {
_tipIndex: [],
_nowTipIndex: -1
},
onLoad: function() {
this.tipsConfig = [ {
get text() {
return ___("India's #1 skilled gaming app");
}
}, {
get text() {
return ___("Safe, secure & easy payment methods");
}
}, {
get text() {
return ___("Instant and unlimited withdrawals");
}
}, {
get text() {
return ___("24x7 customer service support");
}
}, {
get text() {
return ___("Fair and responsible play protect");
}
}, {
get text() {
return ___("Best Value and Top Rewards");
}
}, {
get text() {
return ___("Tournament,Salon Room,Multiplayers,Slot");
}
} ];
for (var e = 0; e < this.tipsConfig.length; e++) this._tipIndex.push(e);
},
start: function() {
var e = this;
this.showRandomTips();
this.schedule(function() {
e.showRandomTips();
}, 5);
},
onDestroy: function() {
this.unscheduleAllCallbacks();
},
showRandomTips: function() {
var e = this._tipIndex[Global.random(0, this._tipIndex.length - 1)];
this.node.getComponent(cc.Label).string = this.tipsConfig[e].text;
this.removeItemByVal(e);
this._nowTipIndex >= 0 && this._tipIndex.push(this._nowTipIndex);
this._nowTipIndex = e;
},
removeItemByVal: function(e) {
for (var t = 0; t < this._tipIndex.length; t++) if (this._tipIndex[t] === e) {
this._tipIndex.splice(t, 1);
break;
}
}
});
cc._RF.pop();
}, {} ],
GlobalCfg: [ function(e, t) {
"use strict";
cc._RF.push(t, "400cfFA/jxGw4u2CwwaF0u9", "GlobalCfg");
var i = e("GlobalVar");
i.ChatType = {
TXT: 0,
EMOJI: 1,
VOICE: 2,
TXT_EFF: 3
};
i.LoginType = {
Guest: 1,
WX: 2,
ACCOUNT: 4,
REGISTER: 5,
TOKEN: 6,
APILOGIN: 7,
GOOGLE_LOGIN: 10,
APPLE_LOGIN: 11,
FB: 12,
HUAWEI: 13,
PHONE: 9
};
i.APPID = {
BigBang: 1,
Poly: 4,
SouthAmerica: 6,
Indian: 7,
HuaweiDRM: 8,
Baloot: 9,
Baloot_HW: 11,
PokerHero: 12,
PokerHero_HW: 13,
PokerHero_Durak_HW: 14,
PokerHero_HW_CardMaster: 18,
YonoGames: 17,
TestCashHero: 10,
TestPokerHero: 100
};
i.IsHuawei = function() {
if (Global.isAndroid()) return Global.appId == Global.APPID.SouthAmerica || Global.appId == Global.APPID.HuaweiDRM || Global.appId == Global.APPID.Baloot_HW || Global.appId == Global.APPID.PokerHero_HW || Global.appId == Global.APPID.PokerHero_Durak_HW || Global.appId == Global.APPID.PokerHero_HW_CardMaster;
};
i.isDurakApp = function() {
return Global.appId == Global.APPID.PokerHero_Durak_HW;
};
i.isYDApp = function() {
return Global.appId == Global.APPID.YonoGames;
};
i.isArabHero = function() {
return Global.appId == Global.APPID.PokerHero || Global.appId == Global.APPID.PokerHero_HW;
};
i.LANGUAGE = {
EN: "en",
ZH: "zh",
IDA: "ida",
AR: "ar"
};
i.LoginExData = {
loginAction: 1,
reloginAction: 2
};
i.ERROR_CODE = {
NORMAL: 200
}, i.CONST_NUM = {
HIGHT_ZORDER: 100
}, i.PROP_ID = {
COIN: 1,
VIP_POINT: 2,
DOUBLE_LEVEL_EXP: 3,
DOUBLE_LEVEL_REWARD: 4,
TURN_TABLE: 5,
ACTIVITY: 6,
MISSION: 7,
HERO_CARD: 8,
HERO_FRAGEMENT: 26,
LUCKY_RESTART: 9,
RICH_POINT: 10,
ACTIVITY_DAILY: 11,
ACTIVITY_WEEKLY: 12,
GLOD_HUMER: 13,
BINGO_BALL: 16,
LUCKY_BOM: 20,
FULL_CARD: 21,
EXPLORE_DICE: 22,
DIAMOND: 25,
HEROCARD_EXP: 27,
PVP_TICKET: 28,
DOUBLE_LEVEL_EXP_AR: 29,
EXPRESS_GIFT_CAR: 31,
EXPRESS_GIFT_EVIL: 32,
EXPRESS_GIFT_DRINK: 33,
EXPRESS_GIFT_KISS: 34,
EXPRESS_GIFT_MONEY: 35,
EXPRESS_GIFT_CAKE: 36,
EXPRESS_GIFT_RING: 37,
EXPRESS_GIFT_TOWER: 38,
LOCAL_FULL_CARD: 10021,
LOCAL_HERO_CARD: 10008
}, i.ITEMCFG = {
1: {
name: "COIN"
},
2: {
name: "VIP POINTS"
},
3: {
name: "DOUBLE EXP"
},
8: {
name: "HERO PACKS"
},
9: {
name: "LUCKY CARDS"
},
10: {
name: "HERO PALACE"
}
};
i.SOUNDS = Global.SOUNDS || {};
i.SOUNDS.bgm_hall = {
path: "CashHero/",
filename: "hall/bgm_hall",
common: !0
};
i.SOUNDS.bgm_hall_slots = {
path: "CashHero/",
filename: "hall/bgm_hall_slots",
common: !0
};
i.SOUNDS.bgm_hall_club = {
path: "CashHero/",
filename: "hall/bgm_hall_club",
common: !0
};
i.SOUNDS.bgm_herocard = {
path: "CashHero/",
filename: "hall/hero_bgm",
common: !0
};
i.SOUNDS.bgm_quest = {
path: "CashHero/",
filename: "quest/bgm_quest",
common: !0
};
i.SOUNDS.bgm_login = {
path: "CashHero/",
filename: "hall/LobbyMailBgm",
common: !0
};
i.SOUNDS.game_loading = {
path: "CashHero/",
filename: "hall/game_loading",
common: !0
};
i.SOUNDS.sound_fly_coins = {
path: "CashHero/",
filename: "CoinBalanceComplete",
common: !0
};
i.SOUNDS.bgm_poker_2nd = {
path: "CashHero/",
filename: "hall/LobbyWheelBgm",
common: !0
};
i.SOUNDS.bgm_luckycard = {
path: "CashHero/",
filename: "luckycard/bgm",
common: !0
};
i.SOUNDS.bgm_battle = {
path: "CashHero/",
filename: "pvp/bgm_battle",
common: !0
};
i.SOUNDS.sound_celebration = {
path: "CashHero/",
filename: "hall/celebration",
common: !0
};
i.SOUNDS.sound_scratch = {
path: "CashHero/",
filename: "hall/scratch",
common: !0
};
i.SOUNDS.sound_pick = {
path: "CashHero/",
filename: "hall/pick_open",
common: !0
};
i.SOUNDS.sound_level_up = {
path: "CashHero/",
filename: "hall/levelup_collect",
common: !0
};
i.SOUNDS.bgm_hall_wheel = {
path: "CashHero/",
filename: "hall/LobbyWheelBgm",
common: !0
};
i.SOUNDS.sound_wheel_spin = {
path: "CashHero/",
filename: "hall/wheel_spin",
common: !0
};
i.SOUNDS.sound_wheel_result = {
path: "CashHero/",
filename: "hall/wheel_result",
common: !0
};
i.SOUNDS.sound_wheel_pointer = {
path: "CashHero/",
filename: "hall/wheel_pointer",
common: !0
};
i.SOUNDS.sound_click = {
path: "CashHero/",
filename: "hall/TabClick",
common: !0
};
i.playBgm = function(e, t, i) {
Global._bgmlist = Global._bgmlist || [];
Global._bgmlist.push(e);
if (null != e && null != e) if ("string" == typeof e) cc.vv.AudioManager.playBgm(e, !1, t); else {
e.rmax && (e = Global.randomEffCfg(e, e.rmin || 0, e.rmax));
var n = e.filename;
cc.vv.AudioManager.playBgm(e.path, n, e.common, e.vol, t, i);
} else AppLog.warn("bgm_cfg is null or undefined");
};
i.popBgm = function() {
if (Global._bgmlist) {
Global._bgmlist.pop();
Global.playBgm(Global._bgmlist.pop());
}
}, i.playEff = function(e, t, i) {
if (null != e && null != e) {
var n = null;
if ("string" == typeof e) n = cc.vv.AudioManager.playEff(e, !1); else {
e.rmax && (e = Global.randomEffCfg(e, e.rmin || 0, e.rmax));
var a = e.filename;
null != i && (a = a + "_" + i);
null != t && null != t && (a += 1 == t ? "_B" : "_G");
n = cc.vv.AudioManager.playEff(e.path, a, e.common);
}
return n;
}
AppLog.warn("eff_cfg is null or undefined");
};
i.playComEff = function(e) {
cc.vv.AudioManager.playSimpleEff("CashHero/audio/common/" + e);
};
i.playCashEff = function(e) {
cc.vv.AudioManager.playSimpleEff("CashHero/audio/" + e);
};
i.playSimpleEff = function(e) {
cc.vv.AudioManager.playSimpleEff("arabhero/audio/" + e);
};
i.randomEffCfg = function(e, t, i) {
var n = JSON.parse(JSON.stringify(e)), a = Global.random(t, i);
n.filename += "_" + a;
return n;
};
i.SAVE_KEY_REQ_LOGIN = "SAVE_KEY_REQ_LOGIN";
i.SAVE_KEY_ACCOUNT_PW = "SAVE_KEY_ACCOUNT_PW";
i.SAVE_KEY_IS_REMEMBER = "SAVE_KEY_IS_REMEMBER";
i.SAVE_KEY_LOGIN_TYPE = "SAVE_KEY_LOGIN_TYPE";
i.SAVE_PLAYER_TOKEN = "SAVE_PLAYER_TOKEN";
i.SAVE_LANGUAGE = "SAVE_LANGUAGE";
i.SAVE_FROM_SUBGAME_ID = "SAVE_FROM_SUBGAME_ID";
cc._RF.pop();
}, {
GlobalVar: "GlobalVar"
} ],
GlobalFunc: [ function(e, t) {
"use strict";
cc._RF.push(t, "6a1dap8I4FEi6IX92jWwcHR", "GlobalFunc");
var i = e("GlobalVar");
i.shake = !1;
i.isNative = function() {
return cc.sys.isNative && jsb;
};
i.setShake = function(e) {
i.shake = e;
cc.sys.localStorage.setItem("shake", e);
Global.dispatchEvent(EventId.SET_SHAKE, e);
};
i.getShake = function() {
return i.shake;
};
i.isAndroid = function() {
return cc.sys.os == cc.sys.OS_ANDROID;
};
i.isIOS = function() {
return cc.sys.os == cc.sys.OS_IOS;
};
i.isIOSReview = function() {
return !!i.isIOS() && Global.isReview;
};
i.isIOSAndroidReview = function() {
return !!Global.isNative() && (Global.isIOSReview() || Global.isAndroidReview && Global.isAndroid());
}, i.isClosePurchase = function() {
return Global.appId == Global.APPID.HuaweiDRM;
};
i.getDeviceId = function() {
return cc.vv.PlatformApiMgr.getDeviceId();
};
i.emit = function(e, t, i) {
if (e) {
e.emit(t, i);
if (Global.localVersion) {
i.eventId = t;
cc.log("emit", JSON.stringify(i));
}
}
};
i.on = function(e, t, i, n) {
if (e) {
e.on(t, i, n);
Global.localVersion && cc.log("node(" + e.getName() + ") on eventId(" + t + ")");
}
};
i.off = function(e, t, i, n) {
if (e) {
e.off(t, i, n);
Global.localVersion && cc.log("node(" + e.getName() + ") off eventId(" + t + ")");
}
};
i.retain = function() {};
i.release = function() {};
i.addPersistNode = function(e) {
cc.game.addPersistRootNode(e);
};
i.removePersistNode = function(e) {
cc.game.removePersistRootNode(e);
};
i.saveLocal = function(e, t) {
e += "";
t += "";
cc.sys.localStorage.setItem(Global.compile(e), Global.compile(t));
};
i.getLocal = function(e, t) {
e += "";
var i = cc.sys.localStorage.getItem(Global.compile(e));
i && (i = Global.uncompile(i));
(!i || i.length <= 0) && (i = t);
return i;
};
i.deleteLocal = function(e) {
e += "";
cc.sys.localStorage.removeItem(Global.compile(e));
};
i.compile = function(e) {
for (var t = String.fromCharCode(e.charCodeAt(0) + e.length), i = 1; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) + e.charCodeAt(i - 1));
return escape(t);
};
i.uncompile = function(e) {
e = unescape(e);
for (var t = String.fromCharCode(e.charCodeAt(0) - e.length), i = 1; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) - t.charCodeAt(i - 1));
return t;
};
i.bindParams = function() {
var e = Array.prototype.slice.call(arguments), t = e.shift();
if ("function" == typeof t) return function() {
return t.apply(null, e.concat(Array.prototype.slice.call(arguments)));
};
};
i.random = function(e, t) {
return Math.floor(Math.random() * (t - e + 1) + e);
};
i.randomArray = function(e, t, i) {
for (var n = [], a = function(e) {
for (var t = 0; t < n.length; t++) if (e == n[t]) return !0;
return !1;
}, o = 0; o < e; o++) {
for (var r = Global.random(t, i); a(r); ) r = Global.random(t, i);
n[o] = r;
}
return n;
};
i.random1To1 = function() {
return 2 * (Math.random() - .5);
};
i.random0To1 = function() {
return Math.random();
};
i.copy = function(e) {
if (cc.js.isNumber(e) || cc.js.isString(e)) return e;
var t = e instanceof Array ? [] : {};
for (var n in e) "object" == typeof e[n] ? t[n] = i.copy(e[n]) : t[n] = e[n];
return t;
};
i.stringToBytes = function(e) {
for (var t, i = [], n = 0; n < e.length; n++) {
t = e.charCodeAt(n);
var a = [];
do {
a.push(255 & t);
t >>= 8;
} while (t);
i = i.concat(a.reverse());
}
return i;
};
i.jsToCByShort = function(e) {
var t = Math.floor(e / 256), i = Math.floor(e % 256);
return String.fromCharCode(t, i);
};
i.jsToCByInt = function(e) {
var t = Math.floor(e / 16777216), i = Math.floor(e / 65536) % 256, n = Math.floor(e / 256) % 256, a = Math.floor(e % 256);
return String.fromCharCode(t, i, n, a);
};
i.srcSum = function(e, t) {
for (var i = 65535, n = 0; n < t; n++) 0 == (1 & (i ^= e[n])) ? i >>= 1 : i = i >> 1 ^ 28849;
return i;
};
i.convertGPS2GCJ = function(e, t) {
e = Number(e);
t = Number(t);
var i = 3.141592653589793, n = 6378245, a = .006693421622965943, o = function(e, t) {
var n = 2 * e - 100 + 3 * t + .2 * t * t + .1 * e * t + .2 * Math.sqrt(Math.abs(e));
n += 2 * (20 * Math.sin(6 * e * i) + 20 * Math.sin(2 * e * i)) / 3;
return (n += 2 * (20 * Math.sin(t * i) + 40 * Math.sin(t / 3 * i)) / 3) + 2 * (160 * Math.sin(t / 12 * i) + 320 * Math.sin(t * i / 30)) / 3;
}(e - 105, t - 35), r = function(e, t) {
var n = 300 + e + 2 * t + .1 * e * e + .1 * e * t + .1 * Math.sqrt(Math.abs(e));
n += 2 * (20 * Math.sin(6 * e * i) + 20 * Math.sin(2 * e * i)) / 3;
return (n += 2 * (20 * Math.sin(e * i) + 40 * Math.sin(e / 3 * i)) / 3) + 2 * (150 * Math.sin(e / 12 * i) + 300 * Math.sin(e / 30 * i)) / 3;
}(e - 105, t - 35), s = t / 180 * i, c = Math.sin(s);
c = 1 - a * c * c;
var l = Math.sqrt(c);
return {
lat: t + (o = 180 * o / (n * (1 - a) / (c * l) * i)),
lng: e + (r = 180 * r / (n / l * Math.cos(s) * i))
};
};
i.gcj02towgs84 = function(e, t) {
if (out_of_china(e, t)) return [ e, t ];
var i = transformlat(e - 105, t - 35), n = transformlng(e - 105, t - 35), o = t / 180 * PI, r = Math.sin(o);
r = 1 - ee * r * r;
var s = Math.sqrt(r);
i = 180 * i / (a * (1 - ee) / (r * s) * PI);
n = 180 * n / (a / s * Math.cos(o) * PI);
mglat = t + i;
mglng = e + n;
return [ 2 * e - mglng, 2 * t - mglat ];
};
i.getAddressDetail = function() {};
i.getDistanceOfTwoPoint = function(e, t, i, n) {
AppLog.log(e, t, i, n);
var a = function(e) {
return e * Math.PI / 180;
}, o = a(e), r = a(i), s = o - r, c = a(t) - a(n), l = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(o) * Math.cos(r) * Math.pow(Math.sin(c / 2), 2)));
l *= 6378.137;
return Math.abs(l);
};
i.convertNumToShort = function(e, t, i, n, a) {
var o = [ "", "K", "M", "B", "T", "Q" ], r = 0 != e ? e / Math.abs(e) : 1;
e = Math.abs(e);
n && (o = n);
t = null == t ? 1e3 : t;
i = null == i ? 1 : i;
a = null == a ? t : a;
for (var s = 0; e >= a; ) {
s++;
e /= t;
}
return (e = Math.floor(e * Math.pow(10, i)) / Math.pow(10, i)) * r + o[s];
};
i.convertNumToChineseNum = function(e) {
var t, i, n = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"), a = new Array("", "拾", "佰", "仟"), o = new Array("", "万", "亿", "兆"), r = "";
if ("" === e) return "";
if ((e = parseFloat(e)) >= 1e15) return "";
if (0 == e) return n[0];
if (-1 == (e = e.toString()).indexOf(".")) t = e; else {
t = (i = e.split("."))[0];
i[1].substr(0, 4);
}
if (parseInt(t, 10) > 0) for (var s = 0, c = t.length, l = 0; l < c; l++) {
var _ = t.substr(l, 1), u = c - l - 1, h = u / 4, d = u % 4;
if ("0" == _) s++; else {
s > 0 && (r += n[0]);
s = 0;
r += n[parseInt(_)] + a[d];
}
0 == d && s < 4 && (r += o[h]);
}
"" == r && (r += n[0]);
return r;
};
i.subStrOfChinese = function(e, t, i) {
var n = 0, a = "", o = /[^\x00-\xff]/g, r = "";
try {
for (var s = e.replace(o, "**").length, c = 0; c < s; c++) {
null != (r = e.charAt(c).toString()).match(o) ? n += 2 : n++;
if (n > t) break;
a += r;
}
i && s > t && (a += "..");
} catch (t) {
return e;
}
return a;
}, i.captureScreen = function(e, t, i, n) {
var a = Math.floor(t.width), o = Math.floor(t.height), r = jsb.fileUtils.getWritablePath() + e;
jsb.fileUtils.isFileExist(r) && jsb.fileUtils.removeFile(r);
var s = new cc.Node();
s.parent = t.parent;
s.zIndex = -1;
s.position = t.position;
var c = s.addComponent(cc.Camera);
c.cullingMask = 4294967295;
var l = Math.max(cc.winSize.width / t.width, cc.winSize.height / t.height);
n && (l = n);
var _ = new cc.RenderTexture(), u = cc.game._renderContext;
_.initWithSize(a * l, o * l, u.STENCIL_INDEX8);
c.targetTexture = _;
t.scaleY = -1 * l;
t.scaleX = l;
c.render(t);
t.scale = 1;
var h = _.readPixels();
jsb.saveImageData(h, a * l, o * l, r);
console.log("截图成功，图片保存在 ====>", r);
t.parent.removeChild(s);
i && i(r);
}, i.ShareLink = function(e, t) {
if (Global.openFacebookLogin && Global.playerData.logintype === Global.LoginType.FB) {
var i = {
shareType: 1
};
i.linkUrl = e;
i.content = t || "";
cc.vv.PlatformApiMgr.SdkShare(JSON.stringify(i));
} else if (Global.openWeChatLogin) {
var n = "喊你一起玩游戏！";
t && t.length > 0 && (n = t);
var a = Global.WX_SHARE_SCENE.Secssion;
Global.WXShareLink(e, "poly娱乐", n, a);
} else cc.loader.loadRes("prefab/UIShare", function(t, i) {
var n = cc.instantiate(i), a = n.getComponent("UIGuestShare");
a && a.setQRCodeUrl(e);
n.position = Global.centerPos;
cc.director.getScene().addChild(n);
});
};
i.shareAppWebLink = function(e, t) {
e = e || "0";
t = t || "0";
var i = Global.share_url + "?appName=ruili.com&actionId=" + e + "&valueId=" + t;
i = i + "&channel=" + cc.vv.PlatformApiMgr.umChannel();
Global.ShareLink(i, "");
};
i.WXShareLink = function(e, t, i, n, a) {
var o = Global.webShareIcon;
n >= 0 && e && t && i && cc.vv.WxMgr.wxShareWeb(n, t, i, o, e, a);
};
i.WXShareImage = function(e, t, i) {
t >= 0 && e && cc.vv.WxMgr.wxShareImg(t, e, i);
};
i.isUserWSS = function(e) {
var t = !1, i = Global.loginServerAddress;
e && (i = e);
-1 === i.indexOf(":") && (t = !0);
return t;
};
i.getSegmentLevel = function(e) {
var t = 0;
if (cc.vv.UserManager.levelList && cc.vv.UserManager.levelList instanceof Array) {
for (var i = 0; i < cc.vv.UserManager.levelList.length; ++i) if (e < cc.vv.UserManager.levelList[i].count) {
t = cc.vv.UserManager.levelList[i].id - 1;
break;
}
e > cc.vv.UserManager.levelList[cc.vv.UserManager.levelList.length - 1].count && (t = cc.vv.UserManager.levelList[cc.vv.UserManager.levelList.length - 1].id);
}
return t;
};
i.registerEvent = function(e, t, i) {
var n = cc.find("Canvas");
cc.isValid(n, !0) && n.on(e, t, i);
};
i.unregisterEvent = function(e, t, i) {
var n = cc.find("Canvas");
cc.isValid(n, !0) && n.off(e, t, i);
};
i.dispatchEvent = function(e, t) {
var i = cc.find("Canvas"), n = {};
n.detail = t;
i && i.emit(e, n);
};
i.btnClickEvent = function(e, t, i, n) {
void 0 === n && (n = null);
if (null == e) return null;
var a = t.bind(i);
e.on("click", function(t) {
var i = e.getComponent(cc.Button);
i && i.interactable;
a(t);
});
return e;
};
i.btnClickEventNoDefaultSound = function(e, t, i) {
if (null == e) return null;
e.on("click", t, i);
return e;
};
i.FormatNumToComma = function(e) {
return e ? (e = Number(Number(e).toFixed(2))).toString().replace(/\d+/, function(e) {
return e.replace(/(\d)(?=(\d{3})+$)/g, function(e) {
return e + ",";
});
}) : 0;
};
i.FormatCommaNumToNum = function(e) {
return parseInt(e.replace(/,/g, ""));
};
i.SavePoints = function(e, t) {
void 0 === t && (t = 2);
var i = Math.round(100 * parseFloat(e)) / 100, n = i.toString().split(".");
if (1 == n.length) {
for (var a = ".", o = 0; o < t; o++) a += "0";
return i.toString() + a;
}
if (n.length > 1) {
if (n[1].length < t) {
for (var r = "", s = 0; s < t - n[1].length; s++) r += "0";
return i.toString() + r;
}
return i;
}
};
i.checkToggleIsSelect = function(e) {
for (var t = 0; t < e.childrenCount; ++t) {
var i = e.children[t].getComponent(cc.Toggle);
if (i.isChecked) return i.node;
}
return null;
};
i.setToggleSecelct = function(e, t) {
for (var i = 0; i < e.childrenCount; ++i) {
var n = e.children[i].getComponent(cc.Toggle);
e.children[i].name == t ? n.isChecked = !0 : n.isChecked = !1;
}
};
i.autoAdaptDevices = function(e) {
void 0 === e && (e = !0);
var t = cc.find("Canvas"), i = t.getComponent(cc.Canvas);
if (t.width / t.height < i.designResolution.width / i.designResolution.height) {
i.fitWidth = !0;
i.fitHeight = !1;
} else {
i.fitWidth = !1;
i.fitHeight = !0;
}
};
i.setAdaptIphoneX = function() {
var e = cc.find("Canvas").getComponent(cc.Canvas).node.getChildByName("safe_node");
if (e) {
var t = e.getComponent(cc.Widget);
if (t) {
t.top = 0;
t.bottom = 0;
t.left = 0;
t.right = 0;
}
}
};
i.getStrBLen = function(e) {
if (null == e) return 0;
"string" != typeof e && (e += "");
return e.replace(/[^\x00-\xff]/g, "ab").length;
};
i.checkIpAndGps = function(e, t) {
var i = function(e) {
return !(0 === e.lat && 0 === e.lng);
}, n = function(e, t) {
return e.ip.split(":")[0] == t.ip.split(":")[0];
}, a = function(e, t) {
return !!i(e) && !!i(t) && Global.getDistanceOfTwoPoint(e.lat, e.lng, t.lat, t.lng) <= .2;
};
if (t) {
for (o = 0; o < e.length; o++) if (e[o] && e[o].uid != t.uid && n(e[o], t)) return !0;
for (o = 0; o < e.length; o++) if (e[o] && e[o].uid != t.uid && a(e[o], t)) return !0;
} else {
for (var o = 0; o < e.length - 1; o++) if (e[o]) for (var r = o + 1; r < e.length; r++) if (e[r] && n(e[o], e[r])) return !0;
for (o = 0; o < e.length - 1; o++) if (e[o]) for (r = o + 1; r < e.length; r++) if (e[r] && a(e[o], e[r])) return !0;
}
return !1;
};
i.showQRCode = function(e, t, i) {
if (t) {
var n = t.getComponent("showQRcode");
n && n.showQRCode(e, i);
}
};
i.moveMenu = function(e, t) {
t.getComponent(cc.Button).interactable = !1;
var i = e ? cc.v2(0, t.height) : cc.v2(0, 0), n = e ? cc.v2(0, 0) : cc.v2(0, t.height);
t.position = i;
t.opacity = e ? 0 : 255;
t.active = !0;
t.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, n), cc.fadeTo(.3, e ? 255 : 0)), cc.callFunc(function() {
t.getComponent(cc.Button).interactable = !0;
})));
};
i.showAlertAction = function(e, t, i, n, a) {
var o, r = i, s = n;
if (t) {
e.opacity = 76.5;
e.scale = null == r ? 0 : r;
null == s && (s = 1);
} else {
null == r && (e.scale = 1);
null == s && (s = 0);
}
if (t) {
var c = cc.scaleTo(.35, s);
c.easing(cc.easeBackOut(2));
var l = cc.fadeTo(.35, 255);
o = cc.spawn(c, l);
} else (o = cc.scaleTo(.3, s)).easing(cc.easeSineIn(3));
e.runAction(cc.sequence(o, cc.callFunc(function() {
a && a();
})));
};
i.createrSpriteAni = function(e, t, i, n, a, o, r, s, c) {
var l = new cc.Node("node_eff");
l.addComponent(cc.Sprite);
this.addSpriteAni(l, e, t, i, n, a, o, r, s, c);
return l;
};
i.addSpriteAni = function(e, t, i, n, a, o, r, s, c, l) {
c || (c = 1);
null == l && (l = !0);
for (var _ = function(e, t) {
return t && e < 10 ? "0" + e : e;
}, u = [], h = 0; h < n; h++) {
var d = i + _(h + c, l);
s && (d = i + s + _(h + c, l));
t._spriteFrames[d] && u.push(t._spriteFrames[d]);
}
var p = e.addComponent(cc.Animation), f = cc.AnimationClip.createWithSpriteFrames(u, 30), g = "finished";
if (o) {
f.wrapMode = cc.WrapMode.Loop;
g = "lastframe";
}
f.speed = a;
p.addClip(f, i);
p.on(g, function e() {
p.off(g, e);
r && r();
});
p.play(i);
};
i.isEmptyObject = function(e) {
for (var t in e) return !1;
return !0;
};
i.getDeviceInfo = function() {
var e = {
osValue: "web"
};
if (cc.sys.isNative) {
e.frameSize = cc.view.getFrameSize();
e.osValue = cc.sys.os;
e.phoneBrand = cc.vv.PlatformApiMgr.getDeviceBrand();
e.phoneSystemVision = cc.vv.PlatformApiMgr.getDeviceOpSysVision();
e.phoneUuid = this.getDeviceId();
e.netType = cc.sys.getNetworkType();
}
return e;
};
Global.setNodeScaleFixWin = function(e) {
var t = cc.winSize;
e.scaleX = t.width / e.width;
e.scaleY = t.height / e.height;
};
Global.setNodeScaleWithDesignSize = function(e) {
e.scaleX = cc.winSize.width / Global.designSize.width;
e.scaleY = cc.winSize.height / Global.designSize.height;
};
Global.shakeNodeR = function(e) {
e.stopAllActions();
e.angle = 0;
var t = cc.rotateTo(.25, 15), i = cc.rotateTo(.5, -15), n = cc.rotateTo(.5, 15), a = cc.rotateTo(.5, -15), o = cc.rotateTo(.5, 15), r = cc.rotateTo(.25, 0), s = cc.delayTime(1.8), c = cc.repeatForever(cc.sequence(t, i, n, a, o, r, s));
e.runAction(c);
};
Global.breathNode = function(e, t, i) {
e.stopAllActions();
e.scale = t || 1;
var n = t || 1.1, a = i || 1, o = cc.repeatForever(cc.sequence(cc.scaleTo(.6, n), cc.scaleTo(.6, a)));
e.runAction(o);
};
Global.blinkAction = function(e, t, i, n, a) {
void 0 === t && (t = .2);
void 0 === i && (i = 2);
void 0 === n && (n = 0);
e.stopAllActions();
e.opacity = 255;
n ? cc.tween(e).repeat(n, cc.tween().to(t, {
opacity: 0
}).delay(.1).to(t, {
opacity: 255
}).delay(i)).call(function() {
a && a();
}).start() : cc.tween(e).repeatForever(cc.tween().to(t, {
opacity: 0
}).delay(.1).to(t, {
opacity: 255
}).delay(i)).start();
}, Global.unique5 = function(e) {
var t = new Set(e);
return [].concat(t);
};
Global.shakeNode = function(e, t, i, n) {
t = t || 16;
i = i || 1;
var a = e.scale, o = Math.floor(i / .16), r = cc.moveBy(.04, cc.v2(-t, 0)), s = cc.moveBy(.04, cc.v2(t, 0)), c = cc.moveBy(.04, cc.v2(t, 0)), l = cc.moveBy(.04, cc.v2(-t, 0)), _ = cc.sequence(r, s, c, l), u = cc.moveBy(.04, cc.v2(0, t)), h = cc.moveBy(.04, cc.v2(0, -t)), d = cc.moveBy(.04, cc.v2(0, -t)), p = cc.moveBy(.04, cc.v2(0, t)), f = cc.sequence(u, h, d, p);
e.runAction(cc.sequence(cc.scaleTo(.04, a + .025), cc.repeat(cc.spawn(_, f), o), cc.scaleTo(.04, a), cc.callFunc(function() {
n && e.setPosition(n);
})));
};
Global.ArrowAction = function(e, t, i) {
var n = e.position;
e.stopAllActions();
cc.tween(e).repeatForever(cc.tween().to(i, {
x: n.x + t.x,
y: n.y + t.y
}).to(i, {
x: n.x,
y: n.y
})).start();
};
Global.formatSec = function(e, t, i) {
t || (t = "%s:%s:%s");
var n = Math.floor(e / 86400);
i || (n = 0);
var a = Math.floor((e - 86400 * n) % 3600), o = Math.floor((e - 86400 * n) / 3600), r = Math.floor(a / 60), s = a % 60, c = cc.js.formatStr(t, Global.PrefixInteger(o, 2), Global.PrefixInteger(r, 2), Global.PrefixInteger(s, 2));
n > 0 && (c = n + (n > 1 ? " days" : " day"));
return c;
};
Global.formatTimeDiff = function(e) {
var t = Math.floor(e / 86400);
if (t > 0) return t + (1 == t ? " Day" : " Days");
var i = Math.floor((e - 86400 * t) / 3600);
if (i > 0) return i + (1 == i ? " Hour" : " Hours");
var n = Math.floor((e - 86400 * t) % 3600), a = Math.floor(n / 60);
return a > 0 ? a + " Min" : "1 Min";
}, Global.format2Time = function(e) {
var t = Math.floor(e % 3600), i = Math.floor(e / 3600), n = Math.floor(t / 60), a = t % 60;
return i > 0 ? cc.js.formatStr("%s:%s", Global.PrefixInteger(i, 2), Global.PrefixInteger(n, 2)) : cc.js.formatStr("%s:%s", Global.PrefixInteger(n, 2), Global.PrefixInteger(a, 2));
};
Global.PrefixInteger = function(e, t) {
return (Array(t).join(0) + e).slice(-t);
};
Global.formatMoney = function(e) {
return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
Global.getTimeStr = function(e, t, i) {
void 0 === i && (i = " ");
var n = new Date(1e3 * e), a = n.getFullYear(), o = n.getMonth() + 1, r = n.getDate(), s = n.getHours();
10 > s && (s = "0" + s);
var c = n.getMinutes();
10 > c && (c = "0" + c);
var l = n.getSeconds();
10 > l && (l = "0" + l);
return t ? s + ":" + c + ":" + l : "en" == Global.language ? r + "/" + o + "/" + a + i + s + ":" + c + ":" + l : o + "/" + r + "/" + a + i + s + ":" + c + ":" + l;
};
Global.getSimpleTimeStr = function(e) {
var t = new Date(1e3 * e), i = t.getMonth() + 1;
10 > i && (i = "0" + i);
var n = t.getDate();
10 > n && (n = "0" + n);
var a = t.getHours();
10 > a && (a = "0" + a);
var o = t.getMinutes();
10 > o && (o = "0" + o);
return i + "-" + n + " " + a + ":" + o;
}, Global.getFullDateStr = function(e) {
var t = new Date(1e3 * e), i = t.getFullYear(), n = t.getMonth() + 1;
10 > n && (n = "0" + n);
var a = t.getDate();
10 > a && (a = "0" + a);
return "en" == Global.language ? a + "-" + n + "-" + i : i + "-" + n + "-" + a;
};
Global.getDateStrNoYear = function(e) {
var t = new Date(1e3 * e), i = t.getMonth() + 1;
10 > i && (i = "0" + i);
var n = t.getDate();
10 > n && (n = "0" + n);
return i + "." + n;
};
Global.getDateStr = function(e) {
var t = new Date(1e3 * e), i = (t.getFullYear(), t.getMonth() + 1), n = t.getDate();
10 > n && (n = "0" + n);
return i + "-" + n;
};
Global.setLabelString = function(e, t, i) {
var n = cc.find(e, t);
n && (n.getComponent(cc.Label).string = i);
};
Global.setRichTextString = function(e, t, i) {
var n = cc.find(e, t);
n && (n.getComponent(cc.RichText).string = i);
};
Global.setSpriteFrame = function(e, t, i) {
var n = cc.find(e, t);
n && (n.getComponent(cc.Sprite).spriteFrame = i);
};
Global.setProgress = function(e, t, i) {
var n = cc.find(e, t);
n && (n.getComponent(cc.ProgressBar).progress = i);
};
Global.onClick = function(e, t, i, n) {
var a = cc.find(e, t);
a && a.on("click", i, n);
};
Global.delayInteractable = function(e, t) {
void 0 === t && (t = .5);
var i = e.getComponent(cc.Button);
if (i) {
i.interactable = !1;
e.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function() {
i.interactable = !0;
})));
}
};
Global.awaitTime = function(e, t) {
return new Promise(function(i) {
e.scheduleOnce(function() {
i();
}, t);
});
};
Global.formatString = function(e, t) {
if (!e || null == t) return e;
if ("object" != typeof t) {
var i = arguments, n = new RegExp("{([0-" + (i.length - 1) + "])}", "g");
return e.replace(n, function(e, t) {
return i[t - -1];
});
}
for (var a in t) t.hasOwnProperty(a) && (e = e.replace(new RegExp("{" + a + "}", "g"), t[a]));
return e;
};
var n = console.log;
Global.switchLog = function() {
if (Global.localVersion) {
cc.debug._resetDebugSetting(cc.debug.DebugMode.INFO);
window.LogMode = cc.debug.DebugMode.INFO;
console.log = n;
} else {
cc.debug._resetDebugSetting(cc.debug.DebugMode.ERROR);
window.LogMode = cc.debug.DebugMode.ERROR;
console.log = (console.log, function() {});
}
};
cc._RF.pop();
}, {
GlobalVar: "GlobalVar"
} ],
GlobalTools: [ function(e, t) {
"use strict";
cc._RF.push(t, "cf58a00Y0xFU46/WMjMf3Dy", "GlobalTools");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var a = 0;
return function() {
return a >= e.length ? {
done: !0
} : {
done: !1,
value: e[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
var o = e("GlobalVar");
o.padLeftZero = function(e) {
return "0" + e.substr(e.length - 1);
};
o.formatTime = function(e, t) {
var i = new Date(1e3 * t);
/(y+)/.test(e) && (e = e.replace(RegExp.$1, (i.getFullYear() + "").substr(4 - RegExp.$1.length)));
var n = {
"M+": i.getMonth() + 1,
"d+": i.getDate(),
"h+": i.getHours(),
"m+": i.getMinutes(),
"s+": i.getSeconds()
};
for (var a in n) if (new RegExp("(" + a + ")").test(e)) {
var r = n[a] + "";
e = e.replace(RegExp.$1, 2 === r.length ? r : o.padLeftZero(r));
}
return e;
};
o.formatSecond = function(e, t) {
t || (t = "hh:mm:ss");
var i = {
"h+": Math.floor(e / 3600),
"m+": Math.floor(e % 3600 / 60),
"s+": e % 3600 % 60
};
for (var n in i) if (new RegExp("(" + n + ")").test(t)) {
var a = i[n] + "";
t = t.replace(RegExp.$1, 2 === a.length ? a : o.padLeftZero(a));
}
return t;
};
o.formatNumber = function(e, t) {
t = t || {};
var i = e >= 0 ? 1 : -1, n = Math.abs(e), a = t.decimal || 2, r = t.radix || 1e3;
if (n < (t.threshold || 1e4)) return o.FormatNumToComma(e);
for (var s = 0; n >= r; ) {
s++;
n /= r;
}
return Number((i * n).toFixed(a)) + [ "", "K", "M", "B", "T", "Q" ][s];
};
o.deepClone = function(e) {
var t;
if (null == e || "object" != typeof e) return e;
if (e instanceof Date) {
(t = new Date()).setTime(e.getTime());
return t;
}
if (e instanceof Array) {
t = [];
for (var i = 0, n = e.length; i < n; i++) t[i] = o.deepClone(e[i]);
return t;
}
if (e instanceof Function) return function() {
return e.apply(this, arguments);
};
if (e instanceof Object) {
t = {};
for (var a in e) e.hasOwnProperty(a) && (t[a] = o.deepClone(e[a]));
return t;
}
throw new Error("Unable to copy obj as type isn't supported " + e.constructor.name);
};
Global.FlyDiamond = function(e, t, i, n, a) {
t || (t = cc.find("Canvas/UserinfoBar/钻石/icon"));
var o = function(o) {
Global.FixDesignScale_V(o);
if (cc.isValid(e) && cc.isValid(t) && cc.isValid(o)) {
var r, s = e.convertToWorldSpaceAR(cc.v2(0, 0)), c = t.convertToWorldSpaceAR(cc.v2(0, 0)), l = o.convertToNodeSpaceAR(s), _ = o.convertToNodeSpaceAR(c);
if (a && n) {
if (!(r = cc.find("copyhalldiamond", o))) {
var u = cc.find("Canvas/UserinfoBar/钻石"), h = cc.instantiate(u), d = o.convertToNodeSpaceAR(u.convertToWorldSpaceAR(cc.v2(0, 0)));
h.name = "copyhalldiamond";
h.parent = o;
h.position = d;
r = h;
}
n.lblCoin = cc.find("lbl_val", r);
r.active = !0;
}
var p = o.getComponent("FlyDiamonds");
p && p.showFlyCoins(l, _, 20, function() {
i && i();
if (a) {
Global.dispatchEvent(EventId.UPATE_DIAMOND);
r && (r.active = !1);
}
}, n);
} else i && i();
}, r = cc.find("Canvas/flydiamonds");
r ? o(r) : cc.loader.loadRes("BalootClient/BaseRes/prefabs/flydiamonds", cc.Prefab, function(e, t) {
if (!e) {
var i = cc.instantiate(t);
i.parent = cc.find("Canvas");
i.zIndex = 999;
o(i);
}
});
};
Global.FlyCoinV2 = function(e, t, i, n, a) {
t || (t = cc.find("Canvas/UserinfoBar/金币/icon"));
var o = function(o) {
Global.FixDesignScale_V(o);
if (cc.isValid(e) && cc.isValid(t) && cc.isValid(o)) {
var r, s = e.convertToWorldSpaceAR(cc.v2(0, 0)), c = t.convertToWorldSpaceAR(cc.v2(0, 0)), l = o.convertToNodeSpaceAR(s), _ = o.convertToNodeSpaceAR(c);
if (a && n) {
if (!(r = cc.find("copyhallcoin", o))) {
var u = cc.find("Canvas/UserinfoBar/金币"), h = cc.instantiate(u), d = o.convertToNodeSpaceAR(u.convertToWorldSpaceAR(cc.v2(0, 0)));
h.name = "copyhallcoin";
h.parent = o;
h.position = d;
r = h;
}
n.lblCoin = cc.find("lbl_coin", r);
n.lblCoin || (n.lblCoin = cc.find("lbl_coinsNum", r));
r.active = !0;
}
var p = o.getComponent("FlyCoins");
p && p.showFlyCoins(l, _, 20, function() {
i && i();
if (a) {
Global.dispatchEvent(EventId.UPATE_COINS);
r && (r.active = !1);
}
}, n);
} else i && i();
}, r = cc.find("Canvas/flycoins");
r ? o(r) : cc.loader.loadRes("BalootClient/BaseRes/prefabs/flycoins", cc.Prefab, function(e, t) {
if (!e) {
var i = cc.instantiate(t);
i.parent = cc.find("Canvas");
i.zIndex = 999;
o(i);
}
});
};
Global.FlyAnimTo = function(e, t, i) {
var n = i.spriteFrame, a = i.prefab, o = i.scale || 1, r = i.delay || 0, s = i.onStart, c = i.zIndex || 1e3, l = i.onEnd, _ = i.count || 20;
cc.isValid(e) && cc.isValid(t) && (n || a) && function() {
for (var i = cc.find("Canvas"), u = e.convertToWorldSpaceAR(cc.v2(0, 0)), h = t.convertToWorldSpaceAR(cc.v2(0, 0)), d = i.convertToNodeSpaceAR(u), p = i.convertToNodeSpaceAR(h), f = [], g = 0; g < _; g++) {
var m = null;
n ? (m = new cc.Node()).addComponent(cc.Sprite).spriteFrame = n : a && (m = cc.instantiate(a));
m.scale = o;
m.zIndex = c;
m.active = !1;
m.parent = cc.find("Canvas");
f.push(m);
}
for (var E = !1, v = function(e) {
var t = f[e];
Global.FixDesignScale_V(t);
t.position = t.parent.convertToNodeSpaceAR(u);
var i = d.add(cc.v2(300 * Math.random() - 150, 300 * Math.random() - 150)), n = .1 + .3 * Math.random();
cc.tween(t).delay(r).call(function() {
t.active = !0;
if (!E) {
s && s();
E = !0;
}
}).to(n, {
position: i
}).delay(.5).to(.3, {
position: p,
scale: 1
}).call(function() {
l && l(t);
t.destroy();
}).start();
}, S = 0; S < f.length; S++) v(S);
}();
};
Global.FlyAnimToPos = function(e, t, i) {
var n = i.spriteFrame, a = i.prefab, o = i.scale || 1, r = i.endScale || 1, s = i.delay || 0, c = i.onStart, l = i.onEnd, _ = i.zIndex || 1e3, u = i.onEndOne, h = i.count || 20, d = i.onInit, p = i.boom || !1, f = i.rangeX || 150, g = i.rangeY || 150;
(n || a) && function() {
for (var i = cc.find("Canvas"), m = [], E = 0; E < h; E++) {
var v = null;
n ? (v = new cc.Node()).addComponent(cc.Sprite).spriteFrame = n : a && (v = cc.instantiate(a));
v.parent = i;
d && d(E, v);
v.scale = o;
v.zIndex = _;
v.position = cc.v2(0, 0);
v.active = !1;
m.push(v);
}
for (var S = !1, L = 0, T = function(i) {
var n = m[i];
Global.FixDesignScale_V(n);
n.position = n.parent.convertToNodeSpaceAR(e);
var a = n.parent.convertToNodeSpaceAR(e).add(cc.v2(Math.random() * f * 2 - f, Math.random() * g * 2 - g)), o = .1 + .3 * Math.random(), _ = .3 + .3 * Math.random(), h = .3 + .3 * Math.random();
if (p) {
n.active = !0;
if (!S) {
c && c();
S = !0;
}
n.position = a;
cc.tween(n).delay(_).to(h, {
position: n.parent.convertToNodeSpaceAR(t),
scale: r
}).call(function() {
++L >= m.length && l && l(n);
u && u(n);
n.destroy();
}).start();
} else cc.tween(n).delay(s).call(function() {
n.active = !0;
if (!S) {
c && c();
S = !0;
}
}).to(o, {
position: a
}).delay(_).to(h, {
position: n.parent.convertToNodeSpaceAR(t),
scale: r
}).call(function() {
++L >= m.length && l && l(n);
u && u(n);
n.destroy();
}).start();
}, A = 0; A < m.length; A++) T(A);
}();
};
Global.RewardFly = function(e, t) {
var i = cc.find("Canvas/RewardFlyAnim");
i ? i.getComponent("RewardFlyAnim").run(e, t) : cc.loader.loadRes("BalootClient/BaseRes/prefabs/RewardFlyAnim", cc.Prefab, function(i, n) {
if (null == i) {
var a = cc.instantiate(n);
a.parent = cc.find("Canvas");
a.zIndex = 1e3;
a.position = cc.v2(0, 0);
a.getComponent("RewardFlyAnim").scheduleOnce(function() {
a.getComponent("RewardFlyAnim").run(e, t);
});
}
});
};
Global.getId = function(e, t) {
if (t) {
var n = t.getComponent("ID");
if (n.id == e) return n;
}
for (var a, o = i((t = t || cc.director.getScene()).getComponentsInChildren("ID")); !(a = o()).done; ) {
var r = a.value;
if (r.id == e) return r;
}
};
Global.isRealNum = function(e) {
return "" !== e && null != e && !isNaN(e);
};
Global.webCopyString = function(e) {
if (!cc.sys.isNative) {
if (!window.ClipboardJS || !window.ClipboardJS.copy) {
var t = e, i = document.createElement("textarea");
i.value = t;
i.setAttribute("readonly", "");
i.style.contain = "strict";
i.style.position = "absolute";
i.style.left = "-9999px";
i.style.fontSize = "12pt";
var n = getSelection(), a = !1;
n.rangeCount > 0 && (a = n.getRangeAt(0));
document.body.appendChild(i);
i.select();
i.selectionStart = 0;
i.selectionEnd = t.length;
var o = !1;
try {
o = document.execCommand("copy");
} catch (e) {}
document.body.removeChild(i);
if (a) {
n.removeAllRanges();
n.addRange(a);
}
return o;
}
window.ClipboardJS.copy(e);
}
};
Global.strConfuse = function(e) {
if (e.length < 2) return e;
if (e.length < 5) {
var t = e.split("");
t[1] = "*";
return t.join("");
}
for (var i = e.split(""), n = 2; n < i.length - 2; n++) i[n] = "*";
return i.join("");
};
Global.bezier3 = function(e, t, i, n) {
return e.mul(Math.pow(1 - n, 2)).add(t.mul(2 * (1 - n) * n)).add(i.mul(Math.pow(n, 2)));
};
Global.bezier4 = function(e, t, i, n, a) {
return e.mul(Math.pow(1 - a, 3)).add(t.mul(3 * Math.pow(1 - a, 2) * a)).add(i.mul(3 * (1 - a) * Math.pow(a, 2))).add(n.mul(Math.pow(a, 3)));
};
Global.getBezier2Mid = function(e, t, i, n, a) {
var o = t.sub(e), r = o.mul(i), s = o.signAngle(cc.Vec2.RIGHT), c = r.rotate(Math.PI / 2);
Math.abs(s) <= Math.PI / 2 ? c = r.rotate(Math.PI / 2) : Math.abs(s) > Math.PI / 2 && (c = r.rotate(-Math.PI / 2));
return [ e.add(o.mul(n)).add(c), e.add(o.mul(a)).add(c) ];
};
Global.stopAllTimer = function() {
var e = window.facade;
e && e.dm && e.dm.msgHandler && e.dm.msgHandler.reset();
cc.vv.gameData && cc.vv.gameData.onExit && cc.vv.gameData.onExit();
for (var t, n = i(cc.director.getScene().getComponentsInChildren(cc.Component)); !(t = n()).done; ) {
var a = t.value;
a.unscheduleAllCallbacks();
"SceneTranslate<SceneTranslate>" != a.name && (a.update = function() {});
}
};
Global.whetherSnipeType = function(e, t) {
void 0 === t && (t = null);
var n = !1, a = 0, o = 0, r = null;
if (e && e.dm && e.dm.deskInfo && e.dm.deskInfo.users) for (var s, c = i(e.dm.deskInfo.users); !(s = c()).done; ) {
var l = s.value;
l.isAttack && (a = 1);
l.isAnchor && (o = 1);
t && cc.vv.UserManager.uid == l.uid && (r = l);
}
1 == a && 1 == o && (n = !0);
return {
snipeType: n,
selfObj: r
};
};
Global.isSniperRoom = function(e) {
var t = 0, n = 0;
if (e && e.dm && e.dm.deskInfo && e.dm.deskInfo.users) for (var a, o = i(e.dm.deskInfo.users); !(a = o()).done; ) {
var r = a.value;
r.isAttack && (t = 1);
r.isAnchor && (n = 1);
}
return 1 == t || 1 == n;
};
var r = "ﺁﺁﺂﺂﺃﺃﺄﺄﺅﺅﺆﺆﺇﺇﺈﺈﺉﺋﺌﺊﺍﺍﺎﺎﺏﺑﺒﺐﺓﺓﺔﺔﺕﺗﺘﺖﺙﺛﺜﺚﺝﺟﺠﺞﺡﺣﺤﺢﺥﺧﺨﺦﺩﺩﺪﺪﺫﺫﺬﺬﺭﺭﺮﺮﺯﺯﺰﺰﺱﺳﺴﺲﺵﺷﺸﺶﺹﺻﺼﺺﺽﺿﻀﺾﻁﻃﻄﻂﻅﻇﻈﻆﻉﻋﻌﻊﻍﻏﻐﻎﻑﻓﻔﻒﻕﻗﻘﻖﻙﻛﻜﻚﻝﻟﻠﻞﻡﻣﻤﻢﻥﻧﻨﻦﻩﻫﻬﻪﻭﻭﻮﻮﻯﻯﻰﻰﻱﻳﻴﻲﻵﻵﻶﻶﻷﻷﻸﻸﻹﻹﻺﻺﻻﻻﻼﻼ", s = "ًٌٍَُِّْْئءؤرلاىةوزظشسيبلاتنمكطضصثقفغعهخحجدذْلآآلأأـلإإ،؟";
Global.isArabic = function(e) {
if (1 === e.length) {
var t = e;
return r.indexOf(t) >= 0 || s.indexOf(t) >= 0;
}
for (var i = e.split(""), n = 0; n < i.length; n++) {
var a = i[n];
if (r.indexOf(a) >= 0 || s.indexOf(a) >= 0) return !0;
}
return !1;
};
Global.isEmoji = function(e) {
for (var t = 0; t < e.length; t++) {
var i = e.charCodeAt(t);
if (i >= 55296 && i <= 56319) {
if (e.length > 1) {
var n = 1024 * (i - 55296) + (e.charCodeAt(t + 1) - 56320) + 65536;
if (n >= 118784 && n <= 128895) return !0;
}
} else if (e.length > 1) {
if (8419 === e.charCodeAt(t + 1)) return !0;
} else {
if (i >= 8448 && i <= 10239) return !0;
if (i >= 11013 && i <= 11015) return !0;
if (i >= 10548 && i <= 10549) return !0;
if (i >= 12951 && i <= 12953) return !0;
if (169 === i || 174 === i || 12349 === i || 12336 === i || 11093 === i || 11036 === i || 11035 === i || 11088 === i) return !0;
}
}
};
Global.upateLabelMode = function(e) {
Global.isEmoji(e.string) ? e.cacheMode = cc.Label.CacheMode.NONE : e.cacheMode = cc.Label.CacheMode.CHAR;
};
Global.getPromise = function(e, t) {
var i;
return {
promise: new Promise(function(t, n) {
i = n;
e(t, n);
}),
abort: function() {
t && t();
i({
message: "the promise is aborted"
});
}
};
};
Global.delay = function(e, t) {
var i = Global.getPromise(function(t) {
setTimeout(function() {
t();
}, 1e3 * e);
}), n = i.promise, a = i.abort;
t && t.push(a);
return n;
};
cc._RF.pop();
}, {
GlobalVar: "GlobalVar"
} ],
GlobalVar: [ function(e, t) {
"use strict";
cc._RF.push(t, "28737uRnZxDDq30n03V7+QR", "GlobalVar");
var i = cc.Class({
extends: cc.Component,
statics: {
loginServerAddress: "13.126.241.64:9951",
localVersion: !0,
publishMode: !1,
openUpdate: !0,
openAutoLogin: !1,
webUUID: "aaa",
isReview: !1,
isAndroidReview: !1,
appId: 17,
resVersion: "1.6.0.0",
appVersion: "1.0.0",
designSize: cc.size(1920, 1080),
centerPos: cc.v2(960, 540),
localeCountry: "",
poly99: !0,
language: "en",
apiUrl: "https://inter.yonogames.com",
haoUrl: "https://inter.yonogames.com/hao.html",
fackbookLink: "https://www.facebook.com/cashheroslots/",
androidApi: "http://47.99.169.162:6180/",
reconnect_break: !1
}
});
window.Global = i;
window.onerror = function(e, t, i, n, a) {
var o = {};
try {
o.uid = cc.vv.UserManager.uid;
} catch (a) {}
try {
o.message = e;
o.source = t;
o.lineno = i;
o.colno = n;
o.error = a;
cc.vv.NetManager.requestHttpPost("", o, function() {}, "https://pay.hdreocal2023.xyz/api/report", "POST");
} catch (e) {}
};
cc._RF.pop();
}, {} ],
HeadLoaderMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "61d6cuYos5K1qfTtW3JjgT1", "HeadLoaderMgr");
var i = function(e, t) {
var i = new Object();
i.url = t;
i.filename = e;
i.times = 0;
i.observers = [];
i.push = function(e, t) {
this.observers.push({
spr: t,
cb: e
});
};
return i;
};
cc.Class({
extends: cc.Component,
statics: {
_loader_array: null,
_loader_dic: null,
_isLoading: !1,
addLoader: function(e, t, n, a, o) {
this._loader_array = this._loader_array || [];
this._loader_dic = this._loader_dic || {};
var r = null;
o || (r = this.checkLocalFile(e)) && (t = r);
var s = "$" + e + "$" + t;
if (!this._loader_dic[s]) {
this._loader_dic[s] = i(e, t);
r ? this._loader_array.unshift(s) : this._loader_array.push(s);
}
this._loader_dic[s].push(n, a);
this._isLoading || this.runLoader();
},
runLoader: function() {
if (this._loader_array.length <= 0) this._isLoading = !1; else {
this._isLoading = !0;
var e = this._loader_array.shift(), t = this._loader_dic[e];
cc.loader.load(t.url, function(i, n) {
if (i) {
t.times += 1;
t.times < 3 ? this._loader_array.push(e) : delete this._loader_dic[e];
this.runLoader();
} else {
var a = new cc.SpriteFrame(n, cc.Rect(0, 0, n.width, n.height));
for (var o in t.observers) {
t.observers[o].spr && (t.observers[o].spr.spriteFrame = a);
t.observers[o].cb && t.observers[o].cb(a);
}
delete this._loader_dic[e];
this.runLoader();
this.saveToLocalFile(t.filename, a);
}
}.bind(this));
}
},
checkLocalFile: function(e) {
if ("undefined" == typeof jsb) return !1;
var t = jsb.fileUtils.getWritablePath() + "loadImgs/" + e;
return !!jsb.fileUtils.isFileExist(t) && t;
},
saveToLocalFile: function(e, t) {
if ("undefined" != typeof jsb) {
var i = jsb.fileUtils.getWritablePath() + "loadImgs/", n = i + e;
jsb.fileUtils.isDirectoryExist(i) || jsb.fileUtils.createDirectory(i);
var a = new cc.Sprite();
a.spriteFrame = t;
var o = cc.size(Math.floor(a.width), Math.floor(a.height)), r = new cc.RenderTexture(o.width, o.height);
r.setPosition(cc.v2(.5 * o.width, .5 * o.height));
a.visit();
r.end();
r.saveToFile(n, cc.IMAGE_FORMAT_JPG);
}
},
saveDataToLocalFile: function(e, t) {
if ("undefined" != typeof jsb) {
var i = jsb.fileUtils.getWritablePath() + "loadImgs/", n = i + e;
jsb.fileUtils.isDirectoryExist(i) || jsb.fileUtils.createDirectory(i);
"undefined" != typeof t ? jsb.fileUtils.writeDataToFile(new Uint8Array(t), n) ? cc.log("Remote write file succeed.") : AppLog.warn("Remote write file failed.") : AppLog.warn("Remote download file failed.");
}
}
}
});
cc._RF.pop();
}, {} ],
HotUpdateModule: [ function(e, t) {
"use strict";
cc._RF.push(t, "e30eaKF2GtMBa2dHelA/ZYk", "HotUpdateModule");
e("MD5"), cc.Class({
extends: cc.Component,
properties: {
progressBar: cc.ProgressBar,
lblTips: cc.Label,
versionLabel: {
default: null,
type: cc.Label
},
manifestCountryUrl: cc.Asset,
_updating: !1,
_canRetry: !1,
_storagePath: "",
_localAppVersion: ""
},
onLoad: function() {
if (cc.sys.isNative) {
this._localAppVersion = "1.0.0";
this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "game-remote-asset";
this.versionCompareHandle = function(e, t) {
for (var i = e.split("."), n = t.split("."), a = 0; a < i.length; ++a) {
var o = parseInt(i[a]), r = parseInt(n[a] || 0);
if (o !== r) return o - r;
}
return n.length > i.length ? -1 : 0;
};
this._am = new jsb.AssetsManager(this.manifestCountryUrl.nativeUrl, this._storagePath, this.versionCompareHandle);
this._am.setVerifyCallback(function() {
return !0;
});
cc.sys.os, cc.sys.OS_ANDROID, this._am.setMaxConcurrentTask(2);
}
},
onDestroy: function() {
if (this._am) {
this._am.setEventCallback(null);
this._am = null;
}
},
showLog: function() {},
retry: function() {
if (!this._updating && this._canRetry) {
this._canRetry = !1;
this._am.downloadFailedAssets();
}
},
updateCallback: function(e) {
var t = !1, i = !1;
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.showLog("没有发现本地manifest文件，跳过了热更新.");
i = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
var n = e.getPercent();
if (isNaN(n)) return;
var a = e.getMessage();
this.disPatchRateEvent(n, a);
this.showLog("updateCallback更新进度：" + n + ", msg: " + a);
if (n <= 1) {
this.ShowUpdateProcess(!0);
this.SetUpdateProcess(n, n, n);
}
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.showLog("下载manifest文件失败，跳过热更新.");
i = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.showLog("已是最新版本.");
i = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
this.showLog("更新结束." + e.getMessage());
this.disPatchRateEvent(1);
t = !0;
Global.saveLocal("mainLoacalVersion", Global.resVersion);
console.log("存储更新完成mainLoacalVersion的值...:", Global.resVersion);
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
this.showLog("更新错误." + e.getMessage());
this._updating = !1;
this._canRetry = !0;
this._failCount++;
this.retry();
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
this.showLog("更新过程中错误: " + e.getAssetId() + ", " + e.getMessage());
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
this.showLog("解压错误");
}
if (i) {
this._am.setEventCallback(null);
this._updating = !1;
}
if (t) {
this._am.setEventCallback(null);
var o = jsb.fileUtils.getSearchPaths(), r = this._am.getLocalManifest().getSearchPaths();
console.log("needRestart ", r);
Array.prototype.unshift.apply(o, r);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(o));
jsb.fileUtils.setSearchPaths(o);
cc.audioEngine.stopAll();
setTimeout(function() {
cc.game.restart();
}, 100);
}
},
hotUpdate: function() {
if (this._am && !this._updating) {
this._am.setEventCallback(this.updateCallback.bind(this));
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var e = this.manifestCountryUrl.nativeUrl;
this._am.loadLocalManifest(e);
}
this._failCount = 0;
this._am.update();
this._updating = !0;
}
},
checkCallback: function(e) {
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
this.showLog("没有发现本地manifest文件，跳过了热更新.");
this.hotUpdateFinish(!0);
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
this.showLog("下载manifest文件失败，跳过热更新.");
this.hotUpdateFinish(!1);
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
this.showLog("已更新.");
this.hotUpdateFinish(!0);
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
this.showLog("有新版本,需要更新");
this._updating = !1;
this.hotUpdate();
return;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
var t = e.getDownloadedBytes(), i = e.getTotalBytes(), n = Math.floor(t / i * 100);
if ((n = isNaN(n) ? 0 : n) <= 100) {
this._proVal = n / 100;
this.ShowUpdateProcess(!0);
this.SetUpdateProcess(n / 100, t, i);
}
var a = e.getPercent();
if (isNaN(a)) return;
var o = e.getMessage();
console.log("checkCallback更新进度：" + a + ", msg: " + o);
return;

default:
console.log("event.getEventCode():" + e.getEventCode());
return;
}
this._am.setEventCallback(null);
this._updating = !1;
},
loadFile: function(e, t, i) {
var n = "Manifest/Main/" + e;
cc.resources.load(n, cc.Asset, function(e, n) {
if (e) cc.log("loadFile:" + e); else {
var a = jsb.fileUtils.getStringFromFile(n.nativeUrl), o = a;
i && (o = JSON.parse(a));
t && t(o);
}
});
},
_checkRemoteVisionAction: function(e) {
var t = "string" == typeof e ? JSON.parse(e) : e;
Global.resVersion = t.version;
console.log("远端Version:" + Global.resVersion);
Global.saveLocal("c_resv", Global.resVersion);
var i = parseInt(t.version.split(".").join("")), n = Global.getLocal("mainLoacalVersion");
if (n) {
console.log("mainLocalVer的值:", n);
this._localAppVersion = n;
}
var a = parseInt(this._localAppVersion.split(".").join(""));
console.log("本地版本...:", this._localAppVersion);
if (a < i) {
console.log("开始检查热更....");
this.checkUpdate();
} else {
console.log("直接跳过热更....");
this.hotUpdateFinish(!0);
}
},
checkForceAppUpdate: function() {
var e = this;
this.loadFile("version", function(t) {
AppLog.log("##############url:" + t.remoteVersionUrl);
e._localAppVersion = t.version;
console.log("本地版本号:", e._localAppVersion);
e._checkOver = !1;
cc.vv.NetManager.requestHttp("", {}, function(t, i) {
if (t) {
AppLog.log("请求remoteversion完成");
if (e._checkOver) {
AppLog.log("已经检测完成...");
return;
}
e._checkOver = !0;
e._checkRemoteVisionAction(i);
} else AppLog.log("请求remoteversion完成");
}.bind(e), t.remoteVersionUrl, "GET", !1);
}, !0);
},
checkUpdate: function() {
console.log("hot------------------------------------------------- checkUpdate", this._am.getState());
if (this._updating) cc.log("检测更新中..."); else {
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var e = this.manifestCountryUrl.nativeUrl;
cc.assetManager.md5Pipe && (e = cc.assetManager.md5Pipe.transformURL(e));
this._am.loadLocalManifest(e);
}
if (this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded()) {
this._am.setEventCallback(this.checkCallback.bind(this));
this._am.checkUpdate();
this._updating = !0;
this.disPatchRateEvent(.01);
} else this.showLog("加载manifest文件失败");
}
},
hotUpdateFinish: function(e) {
cc.director.emit("HotUpdateFinish", e);
},
disPatchRateEvent: function(e) {
e > 1 && (e = 1);
cc.director.emit("HotUpdateRate", e);
},
ShowUpdateProcess: function(e) {
cc.vv.AppData.setHotupdateStart(!0);
cc.isValid(this.progressBar, !0) && this.progressBar.node && (this.progressBar.node.active = e);
},
SetUpdateProcess: function(e) {
cc.isValid(this.progressBar, !0) && (this.progressBar.progress = e);
cc.isValid(this.lblTips, !0) && (this.lblTips.string = Math.floor(100 * e) + "%");
}
});
cc._RF.pop();
}, {
MD5: "MD5"
} ],
Http: [ function(e, t) {
"use strict";
cc._RF.push(t, "e8703nRSPhBLYxIjY8zIhuS", "Http");
var i = cc.Class({
extends: cc.Component,
statics: {
_sessionId: 0,
_url: "192.168.0.158:80",
sendReq: function(e, t, n, a, o, r, s) {
void 0 === o && (o = "GET");
void 0 === r && (r = !0);
var c = cc.loader.getXMLHttpRequest();
c.timeout = s || 3e3;
var l = "";
for (var _ in t) {
"" != l && (l += "&");
l += _ + "=" + t[_];
}
null == a && (a = i._url);
var u = a + e;
"GET" == o && (u += "?" + encodeURI(l));
Global.localVersion && console.log("#######request url:" + u + " => " + JSON.stringify(t));
c.open(o, u, !0);
Global.isNative() && c.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
c.onreadystatechange = function() {
i.onReadyStateChanged(c, n);
};
if ("POST" == o) c.send(l); else {
r || c.setRequestHeader("If-Modified-Since", "0");
c.send();
}
return c;
},
sendReqPost: function(e, t, n, a, o, r, s) {
void 0 === o && (o = "POST");
void 0 === r && (r = !0);
var c, l = cc.loader.getXMLHttpRequest();
l.timeout = s || 3e3;
null == a && (a = i._url);
var _ = a + e;
l.open(o, _, !0);
c = JSON.stringify(t);
l.setRequestHeader("Content-Type", "application/json");
l.onreadystatechange = function() {
i.onReadyStateChanged(l, n);
};
if ("POST" == o) l.send(c); else {
r || l.setRequestHeader("If-Modified-Since", "0");
l.send();
}
return l;
},
onReadyStateChanged: function(e, t) {
if (4 === e.readyState) {
console.log("http res(" + e.responseText.length + "): " + e.responseText);
try {
if (e.status >= 200 && e.status < 400) {
var i = JSON.parse(e.responseText);
t && t(!0, i);
} else {
var n = "HTTP Error: " + e.status;
console.log(n);
t && t(!1, !1);
}
} catch (e) {
var a = "HTTP Error: " + e;
console.log("HTTP Error: " + e);
t(!1, a);
}
}
}
}
});
t.exports = i;
cc._RF.pop();
}, {} ],
ImgSwitchCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "dab1aXr/BtAEaymrI0rDHlW", "ImgSwitchCmp");
cc.Class({
extends: cc.Component,
editor: {
requireComponent: cc.Sprite,
executeInEditMode: !0
},
properties: {
frames: {
default: [],
type: [ cc.SpriteFrame ],
tooltip: "图片列表"
},
currIndex: {
default: 0,
type: cc.Integer,
tooltip: "默认显示图片在列表中的下标",
notify: function() {
this._currIndex = this.currIndex;
this.showSprite();
}
}
},
onload: function() {
this.showSprite();
},
showSprite: function() {
this.frames.length > 0 && (this.node.getComponent(cc.Sprite).spriteFrame = this.frames[this._currIndex]);
},
showSpriteByName: function(e) {
var t = this;
this.frames.forEach(function(i) {
i.name == e && (t.node.getComponent(cc.Sprite).spriteFrame = i);
});
},
setIndex: function(e) {
this._currIndex = e;
this.showSprite();
},
getIndex: function() {
return this._currIndex;
}
});
cc._RF.pop();
}, {} ],
IsReviewCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "0da79dltjpHRIhUhXEGNqaX", "IsReviewCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = n.menu, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isReverse = !1;
return t;
}
t.prototype.onLoad = function() {
cc.log("IsReviewCpt onLoad", Global.isIOSAndroidReview());
this.isReverse ? this.node.active = Global.isIOSAndroidReview() : this.node.active = !Global.isIOSAndroidReview();
};
__decorate([ o ], t.prototype, "isReverse", void 0);
return __decorate([ a, r("过审/IsReviewCpt") ], t);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
KeyCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "44d8dfhVHtAv75LXliiut6P", "KeyCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = n.menu, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.key = "";
return t;
}
__decorate([ o ], t.prototype, "key", void 0);
return __decorate([ a, r("ECS/key") ], t);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
LabelRollCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "ec67cWutYZGo6SIj+5r9U2I", "LabelRollCmp");
cc.Class({
extends: cc.Component,
properties: {
label: cc.Label,
formatCurrency: !0,
template: "",
_value: 0,
value: {
type: cc.Integer,
get: function() {
return this._value;
},
set: function(e) {
this._value = e;
this.label || (this.label = this.node.getComponent(cc.Label));
this.formatCurrency ? this.template ? this.label.string = this.template.replace("{0}", Global.FormatNumToComma(Math.floor(e))) : this.label.string = Global.FormatNumToComma(Math.floor(e)) : this.label.string = value.toString();
}
}
},
onLoad: function() {},
startRoll: function(e, t, i, n) {
e = e || 0;
t = t || 0;
i = i || 1.5;
this.value = e;
this._tweenObj = cc.tween(this).to(i, {
value: t
}).call(function() {
n && n();
}).start();
},
stopRoll: function() {
this._tweenObj && this._tweenObj.stop();
}
});
cc._RF.pop();
}, {} ],
LabelSwitchCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "19182DM6mZNd68Qk6zH1Cjg", "LabelSwitchCmp");
cc.Class({
extends: cc.Component,
editor: {
requireComponent: cc.Label,
executeInEditMode: !0
},
properties: {
fonts: {
default: [],
type: [ cc.Font ],
tooltip: "bmf字体列表"
},
currIndex: {
default: 0,
type: cc.Integer,
tooltip: "默认显示字体在列表中的下标",
notify: function() {
this._currIndex = this.currIndex;
this.showLabel();
}
}
},
onload: function() {
this.showLabel();
},
showLabel: function() {
this.fonts.length > 0 && (this.node.getComponent(cc.Label).font = this.fonts[this._currIndex]);
},
showLabelByName: function(e) {
var t = this;
this.fonts.forEach(function(i) {
i.name == e && (t.node.getComponent(cc.Label).font = i);
});
},
setIndex: function(e) {
this._currIndex = e;
this.showLabel();
},
getIndex: function() {
return this._currIndex;
},
setContent: function(e) {
this.node.getComponent(cc.Label).string = e + "";
}
});
cc._RF.pop();
}, {} ],
LangBoxBtnCpt: [ function(e, t) {
"use strict";
cc._RF.push(t, "6d02573dQJLrrBAw7JQ20Ln", "LangBoxBtnCpt");
cc.Class({
extends: cc.Component,
properties: {
label: cc.Label,
hitIcon: cc.Node,
prefab: cc.Prefab
},
onLoad: function() {
var e = this;
this.updateView();
this.getComponent(cc.Button) && this.node.on("click", function() {
cc.vv.PopupManager.addPopup(e.prefab, {
noMask: !0,
onShow: function(t) {
cc.isValid(e.hitIcon) && (e.hitIcon.angle = 180);
var i = e.node.convertToWorldSpaceAR(cc.v2(0, -e.node.height / 2 - 10)), n = cc.find("Canvas").convertToNodeSpaceAR(i);
t.position = n.add(cc.v2(0, 100));
t.opacity = 100;
cc.tween(t).to(.1, {
position: n,
opacity: 255
}).call(function() {
var i = t.getComponent("LangBoxCpt");
i && i.initView(function() {
e.updateView();
});
var n = t.getComponent("SettingLangBoxCpt");
n && n.initView();
}).start();
}
});
}, this);
},
updateView: function() {
cc.isValid(this.label.node) && (this.label.string = cc.vv.i18nManager.getConfig().name);
cc.isValid(this.hitIcon) && (this.hitIcon.angle = 0);
}
});
cc._RF.pop();
}, {} ],
LangBoxCpt: [ function(e, t) {
"use strict";
cc._RF.push(t, "29686NowUlPY5PEjpVa9G9e", "LangBoxCpt");
cc.Class({
extends: cc.Component,
properties: {
arItem: cc.Node,
enItem: cc.Node
},
initView: function(e) {
var t = this;
this.closeFunc = e;
this.arItem.on("click", function() {
t.onChangeLang(cc.vv.i18nLangEnum.AR);
}, this);
this.enItem.on("click", function() {
t.onChangeLang(cc.vv.i18nLangEnum.EN);
}, this);
},
onLoad: function() {
var e = cc.vv.i18nManager.getConfig();
cc.find("isSelect", this.arItem).active = "ar" == e.lang;
cc.find("isSelect", this.enItem).active = "en" == e.lang;
},
onChangeLang: function(e) {
cc.vv.i18nManager.setLanguage(e);
var t = cc.vv.i18nManager.getLanguageConfig(e), i = Global.getLocal("client_uuid", "");
cc.log(i);
cc.vv.NetManager.requestHttp("/lang?ddid=" + i + "&lan=" + t.id, {}, function() {});
cc.vv.PopupManager.removePopup(this.node);
},
onDestroy: function() {
this.closeFunc && this.closeFunc();
}
});
cc._RF.pop();
}, {} ],
LanguageButton: [ function(e, t) {
"use strict";
cc._RF.push(t, "1992d/Wl3RH1rskR1oI45V4", "LanguageButton");
var i = cc.Class({
name: "btn_spritesList",
properties: {
normalSprite: {
default: null,
type: cc.SpriteFrame
},
pressedSprite: {
default: null,
type: cc.SpriteFrame
},
hoverSprite: {
default: null,
type: cc.SpriteFrame
},
disabledSprite: {
default: null,
type: cc.SpriteFrame
}
}
});
cc.Class({
extends: e("LanguageUIBase"),
properties: {
zh_sprites: {
displayName: "中文图片数组",
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.ZH);
},
default: null,
type: i
},
en_sprites: {
default: null,
displayName: "英文图片数组",
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.EN);
},
type: i
},
ind_sprites: {
default: null,
displayName: "印度文图片数组",
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.IDA);
},
type: i
},
ar_sprites: {
default: null,
displayName: "阿拉伯文图片数组",
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.AR);
},
type: i
}
},
start: function() {
this.updateSpirte();
},
updateSpirte: function() {
var e = this.getComponent(cc.Button), t = null;
Global.language === Global.LANGUAGE.ZH && this.zh_sprites ? t = this.zh_sprites : Global.language === Global.LANGUAGE.EN && this.en_sprites ? t = this.en_sprites : Global.language === Global.LANGUAGE.IDA && this.ind_sprites ? t = this.ind_sprites : Global.language === Global.LANGUAGE.AR && this.ar_sprites && (t = this.ar_sprites);
if (t) if (e.transition == cc.Button.Transition.SPRITE) {
t.normalSprite && (e.normalSprite = t.normalSprite);
t.pressedSprite && (e.pressedSprite = t.pressedSprite);
t.hoverSprite && (e.hoverSprite = t.hoverSprite);
t.disabledSprite && (e.disabledSprite = t.disabledSprite);
} else if (e.transition == cc.Button.Transition.SCALE) {
var i = e.getComponent(cc.Sprite);
i && t.normalSprite && (i.spriteFrame = t.normalSprite);
}
},
display: function() {
this._super();
this.updateSpirte();
}
});
cc._RF.pop();
}, {
LanguageUIBase: "LanguageUIBase"
} ],
LanguageFont: [ function(e, t) {
"use strict";
cc._RF.push(t, "0a064GywadLlLJ0hSr8ZL1D", "LanguageFont");
cc.Class({
extends: e("LanguageUIBase"),
properties: {
Font_en: {
default: null,
type: cc.Font,
displayName: "英文的字体",
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.EN);
}
},
Font_zh: {
default: null,
type: cc.Font,
displayName: "中文的字体",
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.ZH);
}
},
Font_ind: {
default: null,
type: cc.Font,
displayName: "印度文的字体",
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.IDA);
}
},
Font_ar: {
default: null,
type: cc.Font,
displayName: "阿拉伯文的字体",
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.AR);
}
}
},
updateLabel: function() {
var e = this.getComponent(cc.Label);
e || (e = this.getComponent(cc.RichText));
if (e) {
Global.language === Global.LANGUAGE.EN && this.Font_en && (e.font = this.Font_en);
Global.language === Global.LANGUAGE.ZH && this.Font_zh && (e.font = this.Font_zh);
Global.language === Global.LANGUAGE.IDA && this.Font_ind && (e.font = this.Font_ind);
Global.language === Global.LANGUAGE.AR && this.Font_ar && (e.font = this.Font_ar);
}
},
start: function() {
this.updateLabel();
},
display: function() {
this._super();
this.updateLabel();
}
});
cc._RF.pop();
}, {
LanguageUIBase: "LanguageUIBase"
} ],
LanguageLabel: [ function(e, t) {
"use strict";
cc._RF.push(t, "159690+EL9JkJAPZ14Ga+Wz", "LanguageLabel");
cc.Class({
extends: e("LanguageUIBase"),
properties: {
id: {
default: "",
displayName: "文字KEY"
},
_setParam: null
},
start: function() {
this.updateLabel();
},
updateLabel: function(e) {
var t = this.getComponent(cc.Label);
t || (t = this.getComponent(cc.RichText));
if (t) {
if (!e) {
if (!this.id) return;
e = cc.vv.Language[this.id];
}
t.string = e;
}
},
setLabel: function() {
for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
var n = this._getLanKeyByVal(t[0]);
this._setKey = n;
this._setParam = t;
this._setRefushData(n, t);
},
_setRefushData: function(e, t) {
var i = cc.vv.Language[e];
I18N && I18N.ChangeParamPos && (i = I18N.ChangeParamPos(i));
if (i) {
for (var n = 1; n < t.length; n++) i = i.replace("{" + n + "}", t[n]);
this.updateLabel(i);
} else cc.log("不存在:" + e);
},
display: function() {
this._super();
this.id ? this.updateLabel() : this._setParam && this._setKey && this._setRefushData(this._setKey, this._setParam);
},
_getLanKeyByVal: function(e) {
return function(e, t, i) {
void 0 === i && (i = function(e, t) {
return e === t;
});
return Object.keys(e).find(function(n) {
return i(e[n], t);
});
}(cc.vv.Language, e);
}
});
cc._RF.pop();
}, {
LanguageUIBase: "LanguageUIBase"
} ],
LanguageSprite: [ function(e, t) {
"use strict";
cc._RF.push(t, "718aaLyhd5CTa1XX2GQH1rY", "LanguageSprite");
cc.Class({
extends: e("LanguageUIBase"),
properties: {
zh_sprite: {
default: null,
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.ZH);
},
type: cc.SpriteFrame,
displayName: "中文翻译图片"
},
en_sprite: {
default: null,
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.EN);
},
type: cc.SpriteFrame,
displayName: "英文翻译图片"
},
ind_sprite: {
default: null,
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.IDA);
},
type: cc.SpriteFrame,
tooltip: "没设置的话，就显示英文资源",
displayName: "印度文翻译图片"
},
ar_sprite: {
default: null,
visible: function() {
return this.isInLanguageList(Global.LANGUAGE.AR);
},
type: cc.SpriteFrame,
tooltip: "阿拉伯文资源",
displayName: "阿拉伯文翻译图片"
},
_changeCall: null
},
updateSpirte: function() {
Global.language === Global.LANGUAGE.ZH ? this.zh_sprite ? this.getComponent(cc.Sprite).spriteFrame = this.zh_sprite : this._changeCall && this._changeCall() : Global.language === Global.LANGUAGE.EN ? this.en_sprite ? this.getComponent(cc.Sprite).spriteFrame = this.en_sprite : this._changeCall && this._changeCall() : Global.language === Global.LANGUAGE.IDA ? this.ind_sprite ? this.getComponent(cc.Sprite).spriteFrame = this.ind_sprite : this.en_sprite ? this.getComponent(cc.Sprite).spriteFrame = this.en_sprite : this._changeCall && this._changeCall() : Global.language === Global.LANGUAGE.AR && (this.ar_sprite ? this.getComponent(cc.Sprite).spriteFrame = this.ar_sprite : this._changeCall && this._changeCall());
},
setSptite: function(e, t) {
e === Global.LANGUAGE.ZH ? this.zh_sprite = t : e === Global.LANGUAGE.EN ? this.en_sprite = t : e === Global.LANGUAGE.IDA ? this.ind_sprite = t : e === Global.LANGUAGE.AR && (this.ar_sprite = t);
},
setSpriteChangeCall: function(e) {
this._changeCall = e;
this.updateSpirte();
},
start: function() {
this.updateSpirte();
},
display: function() {
this._super();
this.updateSpirte();
}
});
cc._RF.pop();
}, {
LanguageUIBase: "LanguageUIBase"
} ],
LanguageUIAdjust: [ function(e, t) {
"use strict";
cc._RF.push(t, "9aa7d1sGZ9LF7tGGQ7yTuYF", "LanguageUIAdjust");
cc.Class({
extends: e("LanguageUIBase"),
properties: {
bScaleX: {
default: !1,
displayName: "ScaleX翻转"
},
bLabelTopAlign: {
default: !1,
displayName: "Label是否上对齐"
},
bLabelBottomAlign: {
default: !1,
displayName: "Label是否下对齐"
},
bAuto: {
default: !0,
displayName: "自动调整"
},
bPosX: {
default: !0,
visible: function() {
return !this.bAuto;
},
displayName: "PosX对称"
},
bAnchorX: {
default: !0,
visible: function() {
return !this.bAuto;
},
displayName: "AnchorX对称"
},
bLabelAlign: {
default: !0,
visible: function() {
return !this.bAuto && (this.node.getComponent(cc.Label) || this.node.getComponent(cc.RichText));
},
displayName: "Label/Text水平对齐方式"
},
bLayoutAlign: {
default: !0,
visible: function() {
return !this.bAuto && this.node.getComponent(cc.Layout) || this.node.getComponent("List");
},
displayName: "Layout/List水平对齐方式"
},
bProgressDir: {
default: !0,
visible: function() {
return !this.bAuto && this.node.getComponent(cc.ProgressBar);
},
displayName: "Progress方向"
},
_defaultScaleX: null,
_defaultLabelAlignV: null,
_defaultPosX: null,
_defaultAnchorX: null,
_defaultLabelAlignH: null,
_defaultLayoutAlign: null,
_defaultProgressDir: null
},
start: function() {
this.updateNode();
},
updateNode: function() {
null == this._defaultScaleX && (this._defaultScaleX = this.node.scaleX);
null == this._defaultPosX && (this._defaultPosX = this.node.x);
null == this._defaultAnchorX && (this._defaultAnchorX = this.node.anchorX);
var e = this.node.getComponent(cc.Label) || this.node.getComponent(cc.RichText);
if (e) {
null == this._defaultLabelAlignH && (this._defaultLabelAlignH = e.horizontalAlign);
null == this._defaultLabelAlignV && (this._defaultLabelAlignV = e.verticalAlign);
}
var t = this.node.getComponent(cc.Layout);
if (!t) {
var i = this.node.getComponent("List");
i && (t = i._layout);
}
t && t.type == cc.Layout.Type.HORIZONTAL && null == this._defaultLayoutAlign && (this._defaultLayoutAlign = t.horizontalDirection);
var n = this.node.getComponent(cc.ProgressBar);
n && null == this._defaultProgressDir && (this._defaultProgressDir = n.reverse);
if (Global.language === Global.LANGUAGE.AR) {
this.bScaleX && (this.node.scaleX = -this._defaultScaleX);
this.bPosX && (this.node.x = -this._defaultPosX);
this.bAnchorX && (this.node.anchorX = 1 - this._defaultAnchorX);
if (e) {
if (this.bLabelAlign) {
var a = this._getLabelHorizontalAlign(this._defaultLabelAlignH);
e.overflow == cc.Label.Overflow.RESIZE_HEIGHT && this._defaultLabelAlignH == cc.macro.TextAlignment.CENTER && (a = cc.macro.TextAlignment.RIGHT);
e.horizontalAlign = a;
}
this.bLabelTopAlign && null != this._defaultLabelAlignV && (e.verticalAlign = cc.Label.VerticalAlign.TOP);
this.bLabelBottomAlign && null != this._defaultLabelAlignV && (e.verticalAlign = cc.Label.VerticalAlign.BOTTOM);
}
this.bLayoutAlign && t && (t.horizontalDirection = this._getLayoutHorzontalAlign(this._defaultLayoutAlign));
this.bProgressDir && n && (n.reverse = !this._defaultProgressDir);
} else {
this.node.scaleX = this._defaultScaleX;
this.node.x = this._defaultPosX;
this.node.anchorX = this._defaultAnchorX;
if (e) {
this.bLabelAlign && (e.horizontalAlign = this._defaultLabelAlignH);
this.bLabelTopAlign && null != this._defaultLabelAlignV && (e.verticalAlign = this._defaultLabelAlignV);
}
this.bLayoutAlign && t && (t.horizontalDirection = this._defaultLayoutAlign);
this.bProgressDir && n && (n.reverse = this._defaultProgressDir);
}
},
_getLabelHorizontalAlign: function(e) {
return e == cc.macro.TextAlignment.LEFT ? cc.macro.TextAlignment.RIGHT : e == cc.macro.TextAlignment.RIGHT ? cc.macro.TextAlignment.LEFT : e;
},
_getLayoutHorzontalAlign: function(e) {
return e == cc.Layout.HorizontalDirection.LEFT_TO_RIGHT ? cc.Layout.HorizontalDirection.RIGHT_TO_LEFT : cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
},
display: function() {
this._super();
this.updateNode();
}
});
cc._RF.pop();
}, {
LanguageUIBase: "LanguageUIBase"
} ],
LanguageUIBase: [ function(e, t) {
"use strict";
cc._RF.push(t, "41dd5uQ769CYKZcOFwgIUPz", "LanguageUIBase");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
Global.registerEvent(EventId.SYS_CHANGE_LANGUAGE, this.onEventChangeLan, this);
},
start: function() {},
display: function() {
cc.log("语言切换");
},
isInLanguageList: function(e) {
var t = !1, i = Global.languageList;
if (i) for (var n = 0; n < i.length; n++) if (i[n] == e) {
t = !0;
break;
}
return t;
},
onEventChangeLan: function() {
Global.saveLocal(Global.SAVE_LANGUAGE, Global.language);
Global.language, Global.LANGUAGE.ZH, cc.vv.Language = e("EnglishCfg");
if (Global.languageList) for (var t = 0; t < Global.languageList.length; t++) if (Global.languageList[t] == Global.language) {
var i = e(Global.language);
Object.assign(cc.vv.Language, i);
}
this.display();
}
});
cc._RF.pop();
}, {
EnglishCfg: "EnglishCfg"
} ],
LanguageUtil: [ function(e, t) {
"use strict";
cc._RF.push(t, "172a6DMun1BM5G26fCAELKz", "LanguageUtil");
var i = cc.Class({
extends: cc.Component,
statics: {
setI18nLabel: function(e, t) {
if (e) {
var i, n = e.getComponent("LanguageLabel");
n || (n = e.addComponent("LanguageLabel"));
for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++) o[r - 2] = arguments[r];
(i = n).setLabel.apply(i, [ t ].concat(o));
}
},
setI18Sprite: function(e, t, i) {
if (e) {
var n = e.getComponent("LanguageSprite");
n || (n = e.addComponent("LanguageSprite"));
n.setSptite(t, i);
}
},
setI18SpriteChangeCall: function(e, t) {
if (e) {
var i = e.getComponent("LanguageSprite");
i || (i = e.addComponent("LanguageSprite"));
i.setSpriteChangeCall(t);
}
},
ChangeParamPos: function(e) {
var t = e;
if (Global.language === Global.LANGUAGE.AR) {
var i = /^[a-zA-Z0-9-\\{\\}!%٪]{1,30}/, n = i.exec(t);
if (n && 0 == n.index && n[0].length < n.input.length) {
var a = t.replace(i, "");
t = a + n[0];
}
}
return t;
},
getI18nLabel: function(e, t) {
return e.replace("{1}", t);
}
}
});
window.I18N = i;
cc._RF.pop();
}, {} ],
LeftMenuCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "f8c56Ii/a9FGrbLEdWtceEU", "LeftMenuCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.moveX = 200;
t.touchNode = null;
t.switchBtn = null;
t.switchIcon = null;
t.extNode = null;
t._show = !0;
return t;
}
Object.defineProperty(t.prototype, "show", {
get: function() {
return this._show;
},
set: function(e) {
this._show = e;
this.touchNode && (this.touchNode.active = e);
var t = e ? cc.winSize.width / 2 : cc.winSize.width / 2 + this.moveX, i = e ? 0 : -180;
this.node.stopAllActions();
cc.tween(this.node).to(.2, {
x: t
}).start();
cc.tween(this.switchIcon.node).to(.2, {
angle: i
}).start();
this.extNode && (this.extNode.active = e);
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
var e = this;
this.switchBtn.node.on("click", function() {
e.show = !e.show;
e.callback && e.callback(e.show);
e.show || cc.vv.EventManager.emit("EVENT_BTN_CLICK_SOUNDS");
});
this.touchNode && this.touchNode.on("click", function() {
if (e.show) {
e.show = !1;
cc.vv.EventManager.emit("EVENT_BTN_CLICK_SOUNDS");
}
}, this);
};
t.prototype.setCallback = function(e) {
this.callback = e;
};
__decorate([ o ], t.prototype, "moveX", void 0);
__decorate([ o(cc.Node) ], t.prototype, "touchNode", void 0);
__decorate([ o(cc.Button) ], t.prototype, "switchBtn", void 0);
__decorate([ o(cc.Sprite) ], t.prototype, "switchIcon", void 0);
__decorate([ o(cc.Node) ], t.prototype, "extNode", void 0);
return __decorate([ a ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
ListItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "abbdfSQlBxA45L8HaG9a2Rn", "ListItem");
var i = cc.Enum({
NONE: 0,
TOGGLE: 1,
SWITCH: 2
});
cc.Class({
editor: {
disallowMultiple: !1,
menu: "自定义组件/List Item",
executionOrder: -5001
},
extends: cc.Component,
properties: {
icon: {
default: null,
type: cc.Sprite
},
title: cc.Node,
selectedMode: {
default: i.NONE,
type: i,
tooltip: !1
},
selectedFlag: {
default: null,
type: cc.Node,
visible: function() {
var e = this.selectedMode > 0;
e || (this.selectedFlag = null);
return e;
}
},
selectedSpriteFrame: {
default: null,
type: cc.SpriteFrame,
visible: function() {
var e = this.selectedMode == i.SWITCH;
e || (this.selectedSpriteFrame = null);
return e;
}
},
adaptiveSize: {
default: !1,
tooltip: !1
},
_selected: !1,
selected: {
visible: !1,
get: function() {
return this._selected;
},
set: function(e) {
this._selected = e;
if (this.selectedFlag) switch (this.selectedMode) {
case i.TOGGLE:
this.selectedFlag.active = e;
break;

case i.SWITCH:
this.selectedFlag.spriteFrame = e ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
}
}
},
_btnCom: null,
btnCom: {
visible: !1,
get: function() {
this._btnCom || (this._btnCom = this.node.getComponent(cc.Button));
return this._btnCom;
}
}
},
onLoad: function() {
if (this.title) {
var e = this.title.getComponent(cc.Label);
e || (e = this.title.getComponent(cc.RichText));
this.title = e;
}
this.btnCom || (this.selectedMode, i.NONE);
if (this.selectedMode == i.SWITCH) {
var t = this.selectedFlag.getComponent(cc.Sprite);
this.selectedFlag = t;
this._unselectedSpriteFrame = t.spriteFrame;
}
},
onDestroy: function() {
var e = this;
e.node.off(cc.Node.EventType.SIZE_CHANGED, e._onSizeChange, e);
},
_registerEvent: function() {
var e = this;
if (!e.eventReg) {
e.btnCom && e._list.selectedMode > 0 && e.btnCom.clickEvents.unshift(e.createEvt(e, "onClickThis"));
e.adaptiveSize && e.node.on(cc.Node.EventType.SIZE_CHANGED, e._onSizeChange, e);
e.eventReg = !0;
}
},
_onSizeChange: function() {
this._list._onItemAdaptive(this.node);
},
createEvt: function(e, t, i) {
if (e.isValid) {
e.comName = e.comName || e.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
var n = new cc.Component.EventHandler();
n.target = i || e.node;
n.component = e.comName;
n.handler = t;
return n;
}
},
showAni: function(e, t, i) {
var n, a = this;
switch (e) {
case 0:
n = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, 0, 2 * this.node.height) ];
break;

case 1:
n = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, 2 * this.node.width, 0) ];
break;

case 2:
n = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, 0, -2 * this.node.height) ];
break;

case 3:
n = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, -2 * this.node.width, 0) ];
break;

default:
n = [ new cc.scaleTo(.3, .1) ];
}
(t || i) && n.push(new cc.CallFunc(function() {
if (i) {
a._list._delSingleItem(a.node);
for (var e = a._list.displayData.length - 1; e >= 0; e--) if (a._list.displayData[e].listId == a.node._listId) {
a._list.displayData.splice(e, 1);
break;
}
}
t();
}));
this.node.runAction(new cc.Sequence(n));
},
onClickThis: function() {
this._list.selectedId = this.node._listId;
}
});
cc._RF.pop();
}, {} ],
ListViewItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "80954QqmTdHqLLVTjaOI7/v", "ListViewItem");
var i = cc.Enum({
NONE: 0,
TOGGLE: 1,
SWITCH: 2
});
cc.Class({
editor: {
disallowMultiple: !1,
menu: "UI/List Item",
executionOrder: -5001
},
extends: cc.Component,
properties: {
icon: {
default: null,
type: cc.Sprite
},
title: cc.Node,
selectedMode: {
default: i.NONE,
type: i,
tooltip: !1
},
selectedFlag: {
default: null,
type: cc.Node,
visible: function() {
var e = this.selectedMode > 0;
e || (this.selectedFlag = null);
return e;
}
},
selectedSpriteFrame: {
default: null,
type: cc.SpriteFrame,
visible: function() {
var e = this.selectedMode == i.SWITCH;
e || (this.selectedSpriteFrame = null);
return e;
}
},
adaptiveSize: {
default: !1,
tooltip: !1
},
_selected: !1,
selected: {
visible: !1,
get: function() {
return this._selected;
},
set: function(e) {
this._selected = e;
if (this.selectedFlag) switch (this.selectedMode) {
case i.TOGGLE:
this.selectedFlag.active = e;
break;

case i.SWITCH:
this.selectedFlag.spriteFrame = e ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
}
}
},
_btnCom: null,
btnCom: {
visible: !1,
get: function() {
this._btnCom || (this._btnCom = this.node.getComponent(cc.Button));
return this._btnCom;
}
}
},
onLoad: function() {
if (this.title) {
var e = this.title.getComponent(cc.Label);
e || (e = this.title.getComponent(cc.RichText));
this.title = e;
}
if (this.selectedMode == i.SWITCH) {
var t = this.selectedFlag.getComponent(cc.Sprite);
this.selectedFlag = t;
this._unselectedSpriteFrame = t.spriteFrame;
}
},
onDestroy: function() {
this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
},
_registerEvent: function() {
if (!this.eventReg) {
this.btnCom && this._list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis"));
this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
this.eventReg = !0;
}
},
_onSizeChange: function() {
this._list._onItemAdaptive(this.node);
},
createEvt: function(e, t, i) {
if (e.isValid) {
e.comName = e.comName || e.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
var n = new cc.Component.EventHandler();
n.target = i || e.node;
n.component = e.comName;
n.handler = t;
return n;
}
},
showAni: function(e, t, i) {
var n, a = this;
switch (e) {
case 0:
n = cc.tween(a.node).to(.2, {
scale: .7
}).by(.3, {
y: 2 * a.node.height
});
break;

case 1:
n = cc.tween(a.node).to(.2, {
scale: .7
}).by(.3, {
x: 2 * a.node.width
});
break;

case 2:
n = cc.tween(a.node).to(.2, {
scale: .7
}).by(.3, {
y: -2 * a.node.height
});
break;

case 3:
n = cc.tween(a.node).to(.2, {
scale: .7
}).by(.3, {
x: -2 * a.node.width
});
break;

default:
n = cc.tween(a.node).to(.3, {
scale: .1
});
}
(t || i) && n.call(function() {
if (i) {
a._list._delSingleItem(a.node);
for (var e = a._list.displayData.length - 1; e >= 0; e--) if (a._list.displayData[e].listId == a.node._listId) {
a._list.displayData.splice(e, 1);
break;
}
}
t();
});
n.start();
},
onClickThis: function() {
this._list.selectedId = this.node._listId;
}
});
cc._RF.pop();
}, {} ],
ListView: [ function(e, t) {
"use strict";
cc._RF.push(t, "1a5dc+DW15NyJt2TvWMMi5r", "ListView");
var i = cc.Enum({
NODE: 1,
PREFAB: 2
}), n = cc.Enum({
NORMAL: 1,
ADHERING: 2,
PAGE: 3
}), a = cc.Enum({
NONE: 0,
SINGLE: 1,
MULT: 2
}), o = e("ListViewItem");
cc.Class({
extends: cc.Component,
editor: {
disallowMultiple: !1,
menu: "UI/ListView",
requireComponent: cc.ScrollView,
executionOrder: -5e3
},
properties: {
templateType: {
default: i.NODE,
type: i
},
tmpNode: {
default: null,
type: cc.Node,
tooltip: !1,
visible: function() {
var e = this.templateType == i.NODE;
e || (this.tmpNode = null);
return e;
}
},
tmpPrefab: {
default: null,
type: cc.Prefab,
tooltip: !1,
visible: function() {
var e = this.templateType == i.PREFAB;
e || (this.tmpPrefab = null);
return e;
}
},
_slideMode: 1,
slideMode: {
type: n,
tooltip: !1,
get: function() {
return this._slideMode;
},
set: function(e) {
null != e && (this._slideMode = e);
}
},
pageDistance: {
default: .3,
type: cc.Float,
range: [ 0, 1, .1 ],
tooltip: !1,
slide: !0,
visible: function() {
return this._slideMode == n.PAGE;
}
},
pageChangeEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
var e = this._slideMode == n.PAGE;
e || (this.pageChangeEvent = null);
return e;
}
},
_virtual: !0,
virtual: {
tooltip: !1,
get: function() {
return this._virtual;
},
set: function(e) {
null != e && (this._virtual = e);
0 != this._numItems && this._onScrolling();
}
},
cyclic: {
default: !1,
tooltip: !1,
visible: function() {
var e = this.slideMode == n.NORMAL;
e || (this.cyclic = !1);
return e;
}
},
lackCenter: {
default: !1,
tooltip: !1,
visible: function() {
return this.virtual;
}
},
lackSlide: {
default: !1,
tooltip: !1,
visible: function() {
var e = this.virtual && !this.lackCenter;
e || (this.lackSlide = !1);
return e;
}
},
_updateRate: 0,
updateRate: {
type: cc.Integer,
range: [ 0, 6, 1 ],
tooltip: !1,
slide: !0,
get: function() {
return this._updateRate;
},
set: function(e) {
e >= 0 && e <= 6 && (this._updateRate = e);
}
},
frameByFrameRenderNum: {
default: 0,
type: cc.Integer,
range: [ 0, 12, 1 ],
tooltip: !1,
slide: !0
},
renderEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1
},
selectedMode: {
default: a.NONE,
type: a,
tooltip: !1
},
repeatEventSingle: {
default: !1,
tooltip: !1,
visible: function() {
return this.selectedMode == a.SINGLE;
}
},
selectedEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
var e = this.selectedMode > 0;
e || (this.selectedEvent = null);
return e;
}
},
_selectedId: -1,
selectedId: {
visible: !1,
get: function() {
return this._selectedId;
},
set: function(e) {
var t, i = this;
switch (i.selectedMode) {
case a.SINGLE:
if (!i.repeatEventSingle && e == i._selectedId) return;
t = i.getItemByListId(e);
i._selectedId >= 0 ? i._lastSelectedId = i._selectedId : i._lastSelectedId = null;
i._selectedId = e;
t && (t.listItem.selected = !0);
if (i._lastSelectedId >= 0 && i._lastSelectedId != i._selectedId) {
var n = i.getItemByListId(i._lastSelectedId);
n && (n.listItem.selected = !1);
}
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], t, e % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems);
break;

case a.MULT:
if (!(t = i.getItemByListId(e))) return;
i._selectedId >= 0 && (i._lastSelectedId = i._selectedId);
i._selectedId = e;
var o = !t.listItem.selected;
t.listItem.selected = o;
var r = i.multSelected.indexOf(e);
o && r < 0 ? i.multSelected.push(e) : !o && r >= 0 && i.multSelected.splice(r, 1);
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], t, e % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems, o);
}
}
},
_numItems: {
default: 0,
serializable: !1
},
numItems: {
visible: !1,
get: function() {
return this._actualNumItems;
},
set: function(e) {
var t = this;
if (t.checkInited()) if (null == e || e < 0) cc.error("numItems set the wrong::", e); else {
t._actualNumItems = t._numItems = e;
t._forceUpdate = !0;
if (t._virtual) {
t._resizeContent();
t.cyclic && (t._numItems = t._cyclicNum * t._numItems);
t._onScrolling();
t.frameByFrameRenderNum || t.slideMode != n.PAGE || (t.curPageNum = t.nearestListId);
} else {
if (t.cyclic) {
t._resizeContent();
t._numItems = t._cyclicNum * t._numItems;
}
var i = t.content.getComponent(cc.Layout);
i && (i.enabled = !0);
t._delRedundantItem();
t.firstListId = 0;
if (t.frameByFrameRenderNum > 0) {
for (var a = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum, o = 0; o < a; o++) t._createOrUpdateItem2(o);
if (t.frameByFrameRenderNum < t._numItems) {
t._updateCounter = t.frameByFrameRenderNum;
t._updateDone = !1;
}
} else {
for (var r = 0; r < t._numItems; r++) t._createOrUpdateItem2(r);
t.displayItemNum = t._numItems;
}
}
}
}
}
},
onLoad: function() {
this._init();
},
onDestroy: function() {
var e = this;
cc.isValid(e._itemTmp) && e._itemTmp.destroy();
cc.isValid(e.tmpNode) && e.tmpNode.destroy();
},
onEnable: function() {
this._registerEvent();
this._init();
if (this._aniDelRuning) {
this._aniDelRuning = !1;
if (this._aniDelItem) {
if (this._aniDelBeforePos) {
this._aniDelItem.position = this._aniDelBeforePos;
delete this._aniDelBeforePos;
}
if (this._aniDelBeforeScale) {
this._aniDelItem.scale = this._aniDelBeforeScale;
delete this._aniDelBeforeScale;
}
delete this._aniDelItem;
}
if (this._aniDelCB) {
this._aniDelCB();
delete this._aniDelCB;
}
}
},
onDisable: function() {
this._unregisterEvent();
},
_registerEvent: function() {
var e = this;
e.node.on(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0);
e.node.on("touch-up", e._onTouchUp, e, !0);
e.node.on(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0);
e.node.on("scroll-began", e._onScrollBegan, e, !0);
e.node.on("scroll-ended", e._onScrollEnded, e, !0);
e.node.on("scrolling", e._onScrolling, e, !0);
e.node.on(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
},
_unregisterEvent: function() {
var e = this;
e.node.off(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0);
e.node.off("touch-up", e._onTouchUp, e, !0);
e.node.off(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0);
e.node.off("scroll-began", e._onScrollBegan, e, !0);
e.node.off("scroll-ended", e._onScrollEnded, e, !0);
e.node.off("scrolling", e._onScrolling, e, !0);
e.node.off(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
},
_init: function() {
var e = this;
if (!e._inited) {
e._scrollView = e.node.getComponent(cc.ScrollView);
e.content = e._scrollView.content;
if (e.content) {
e._layout = e.content.getComponent(cc.Layout);
e._align = e._layout.type;
e._resizeMode = e._layout.resizeMode;
e._startAxis = e._layout.startAxis;
e._topGap = e._layout.paddingTop;
e._rightGap = e._layout.paddingRight;
e._bottomGap = e._layout.paddingBottom;
e._leftGap = e._layout.paddingLeft;
e._columnGap = e._layout.spacingX;
e._lineGap = e._layout.spacingY;
e._colLineNum;
e._verticalDir = e._layout.verticalDirection;
e._horizontalDir = e._layout.horizontalDirection;
e.setTemplateItem(cc.instantiate(e.templateType == i.PREFAB ? e.tmpPrefab : e.tmpNode));
if (e._slideMode == n.ADHERING || e._slideMode == n.PAGE) {
e._scrollView.inertia = !1;
e._scrollView._onMouseWheel = function() {};
}
e.virtual || (e.lackCenter = !1);
e._lastDisplayData = [];
e.displayData = [];
e._pool = [];
e._forceUpdate = !1;
e._updateCounter = 0;
e._updateDone = !0;
e.curPageNum = 0;
if (e.cyclic) {
e._scrollView._processAutoScrolling = this._processAutoScrolling.bind(e);
e._scrollView._startBounceBackIfNeeded = function() {
return !1;
};
}
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
switch (e._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
e._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
e._alignCalcType = 2;
}
break;

case cc.Layout.Type.VERTICAL:
switch (e._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
e._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
e._alignCalcType = 4;
}
break;

case cc.Layout.Type.GRID:
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (e._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
e._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
e._alignCalcType = 4;
}
break;

case cc.Layout.AxisDirection.VERTICAL:
switch (e._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
e._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
e._alignCalcType = 2;
}
}
}
e.content.removeAllChildren();
e._inited = !0;
} else cc.error(e.node.name + "'s cc.ScrollView unset content!");
}
},
_processAutoScrolling: function(e) {
this._scrollView._autoScrollAccumulatedTime += 1 * e;
var t = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
if (this._scrollView._autoScrollAttenuate) {
var i = t - 1;
t = i * i * i * i * i + 1;
}
var n = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(t)), a = this._scrollView.getScrollEndedEventTiming(), o = Math.abs(t - 1) <= a;
if (Math.abs(t - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired) {
this._scrollView._dispatchEvent("scroll-ended-with-threshold");
this._scrollView._isScrollEndedWithThresholdEventFired = !0;
}
o && (this._scrollView._autoScrolling = !1);
var r = n.sub(this._scrollView.getContentPosition());
this._scrollView._moveContent(this._scrollView._clampDelta(r), o);
this._scrollView._dispatchEvent("scrolling");
if (!this._scrollView._autoScrolling) {
this._scrollView._isBouncing = !1;
this._scrollView._scrolling = !1;
this._scrollView._dispatchEvent("scroll-ended");
}
},
setTemplateItem: function(e) {
if (e) {
var t = this;
t._itemTmp = e;
t._resizeMode == cc.Layout.ResizeMode.CHILDREN ? t._itemSize = t._layout.cellSize : t._itemSize = new cc.size(e.width, e.height);
var i = e.getComponent(o), n = !1;
i || (n = !0);
n && (t.selectedMode = a.NONE);
(i = e.getComponent(cc.Widget)) && i.enabled && (t._needUpdateWidget = !0);
t.selectedMode == a.MULT && (t.multSelected = []);
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
t._colLineNum = 1;
t._sizeType = !1;
break;

case cc.Layout.Type.VERTICAL:
t._colLineNum = 1;
t._sizeType = !0;
break;

case cc.Layout.Type.GRID:
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var r = t.content.width - t._leftGap - t._rightGap;
t._colLineNum = Math.floor((r + t._columnGap) / (t._itemSize.width + t._columnGap));
t._sizeType = !0;
break;

case cc.Layout.AxisDirection.VERTICAL:
var s = t.content.height - t._topGap - t._bottomGap;
t._colLineNum = Math.floor((s + t._lineGap) / (t._itemSize.height + t._lineGap));
t._sizeType = !1;
}
}
}
},
checkInited: function(e) {
e = null == e || e;
if (!this._inited) {
e && cc.error("List initialization not completed!");
return !1;
}
return !0;
},
_resizeContent: function() {
var e, t = this;
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
if (t._customSize) {
var i = t._getFixedSize();
e = t._leftGap + i.val + t._itemSize.width * (t._numItems - i.count) + t._columnGap * (t._numItems - 1) + t._rightGap;
} else e = t._leftGap + t._itemSize.width * t._numItems + t._columnGap * (t._numItems - 1) + t._rightGap;
break;

case cc.Layout.Type.VERTICAL:
if (t._customSize) {
var n = t._getFixedSize();
e = t._topGap + n.val + t._itemSize.height * (t._numItems - n.count) + t._lineGap * (t._numItems - 1) + t._bottomGap;
} else e = t._topGap + t._itemSize.height * t._numItems + t._lineGap * (t._numItems - 1) + t._bottomGap;
break;

case cc.Layout.Type.GRID:
t.lackCenter && (t.lackCenter = !1);
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var a = Math.ceil(t._numItems / t._colLineNum);
e = t._topGap + t._itemSize.height * a + t._lineGap * (a - 1) + t._bottomGap;
break;

case cc.Layout.AxisDirection.VERTICAL:
var o = Math.ceil(t._numItems / t._colLineNum);
e = t._leftGap + t._itemSize.width * o + t._columnGap * (o - 1) + t._rightGap;
}
}
var r = t.content.getComponent(cc.Layout);
r && (r.enabled = !1);
t._allItemSize = e;
t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);
if (t.cyclic) {
var s = t._sizeType ? t.node.height : t.node.width;
t._cyclicPos1 = 0;
s -= t._cyclicPos1;
t._cyclicNum = Math.ceil(s / t._allItemSizeNoEdge) + 1;
var c = t._sizeType ? t._lineGap : t._columnGap;
t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + c;
t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + c * (t._cyclicNum - 1);
t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
t._cycilcAllItemSizeNoEdge += c * (t._cyclicNum - 1);
}
t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
var l = t._lack && t.lackCenter || !t.lackSlide ? .1 : 0, _ = t._lack ? (t._sizeType ? t.node.height : t.node.width) - l : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
_ < 0 && (_ = 0);
t._sizeType ? t.content.height = _ : t.content.width = _;
},
_onScrolling: function(e) {
null == this.frameCount && (this.frameCount = this._updateRate);
if (!this._forceUpdate && e && "scroll-ended" != e.type && this.frameCount > 0) this.frameCount--; else {
this.frameCount = this._updateRate;
if (!this._aniDelRuning) {
if (this.cyclic) {
var t = this.content.getPosition();
t = this._sizeType ? t.y : t.x;
var i = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap), n = this._sizeType ? cc.v2(0, i) : cc.v2(i, 0);
switch (this._alignCalcType) {
case 1:
if (t > -this._cyclicPos1) {
this.content.x = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (t < -this._cyclicPos2) {
this.content.x = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
break;

case 2:
if (t < this._cyclicPos1) {
this.content.x = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (t > this._cyclicPos2) {
this.content.x = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 3:
if (t < this._cyclicPos1) {
this.content.y = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (t > this._cyclicPos2) {
this.content.y = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 4:
if (t > -this._cyclicPos1) {
this.content.y = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (t < -this._cyclicPos2) {
this.content.y = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
}
}
this._calcViewPos();
var a, o, r, s;
if (this._sizeType) {
a = this.viewTop;
r = this.viewBottom;
} else {
o = this.viewRight;
s = this.viewLeft;
}
if (this._virtual) {
this.displayData = [];
var c, l = 0, _ = this._numItems - 1;
if (this._customSize) for (var u = !1; l <= _ && !u; l++) {
c = this._calcItemPos(l);
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
c.right >= s && c.left <= o ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.Type.VERTICAL:
c.bottom <= a && c.top >= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.Type.GRID:
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
c.bottom <= a && c.top >= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.AxisDirection.VERTICAL:
c.right >= s && c.left <= o ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
}
}
} else {
var h = this._itemSize.width + this._columnGap, d = this._itemSize.height + this._lineGap;
switch (this._alignCalcType) {
case 1:
l = (s - this._leftGap) / h;
_ = (o - this._leftGap) / h;
break;

case 2:
l = (-o - this._rightGap) / h;
_ = (-s - this._rightGap) / h;
break;

case 3:
l = (-a - this._topGap) / d;
_ = (-r - this._topGap) / d;
break;

case 4:
l = (r - this._bottomGap) / d;
_ = (a - this._bottomGap) / d;
}
l = Math.floor(l) * this._colLineNum;
_ = Math.ceil(_) * this._colLineNum;
l < 0 && (l = 0);
--_ >= this._numItems && (_ = this._numItems - 1);
for (;l <= _; l++) this.displayData.push(this._calcItemPos(l));
}
this._delRedundantItem();
if (this.displayData.length <= 0 || !this._numItems) {
this._lastDisplayData = [];
return;
}
this.firstListId = this.displayData[0].id;
this.displayItemNum = this.displayData.length;
var p = this._lastDisplayData.length, f = this.displayItemNum != p;
if (f) {
this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function(e, t) {
return e - t;
});
f = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[p - 1];
}
if (this._forceUpdate || f) if (this.frameByFrameRenderNum > 0) if (this._numItems > 0) {
this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0;
this._updateDone = !1;
} else {
this._updateCounter = 0;
this._updateDone = !0;
} else {
this._lastDisplayData = [];
for (var g = 0; g < this.displayItemNum; g++) this._createOrUpdateItem(this.displayData[g]);
this._forceUpdate = !1;
}
this._calcNearestItem();
}
}
}
},
_calcViewPos: function() {
var e = this.content.getPosition();
switch (this._alignCalcType) {
case 1:
this.elasticLeft = e.x > 0 ? e.x : 0;
this.viewLeft = (e.x < 0 ? -e.x : 0) - this.elasticLeft;
this.viewRight = this.viewLeft + this.node.width;
this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
this.viewRight += this.elasticRight;
break;

case 2:
this.elasticRight = e.x < 0 ? -e.x : 0;
this.viewRight = (e.x > 0 ? -e.x : 0) + this.elasticRight;
this.viewLeft = this.viewRight - this.node.width;
this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
this.viewLeft -= this.elasticLeft;
break;

case 3:
this.elasticTop = e.y < 0 ? Math.abs(e.y) : 0;
this.viewTop = (e.y > 0 ? -e.y : 0) + this.elasticTop;
this.viewBottom = this.viewTop - this.node.height;
this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
this.viewBottom += this.elasticBottom;
break;

case 4:
this.elasticBottom = e.y > 0 ? Math.abs(e.y) : 0;
this.viewBottom = (e.y < 0 ? -e.y : 0) - this.elasticBottom;
this.viewTop = this.viewBottom + this.node.height;
this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
this.viewTop -= this.elasticTop;
}
},
_calcItemPos: function(e) {
var t, i, n, a, o, r, s, c;
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
if (this._customSize) {
var l = this._getFixedSize(e);
o = this._leftGap + (this._itemSize.width + this._columnGap) * (e - l.count) + (l.val + this._columnGap * l.count);
var _ = this._customSize[e];
t = _ > 0 ? _ : this._itemSize.width;
} else {
o = this._leftGap + (this._itemSize.width + this._columnGap) * e;
t = this._itemSize.width;
}
if (this.lackCenter) {
o -= this._leftGap;
o += this.content.width / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: e,
left: o,
right: r = o + t,
x: o + this._itemTmp.anchorX * t,
y: this._itemTmp.y
};

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
if (this._customSize) {
var u = this._getFixedSize(e);
r = -this._rightGap - (this._itemSize.width + this._columnGap) * (e - u.count) - (u.val + this._columnGap * u.count);
var h = this._customSize[e];
t = h > 0 ? h : this._itemSize.width;
} else {
r = -this._rightGap - (this._itemSize.width + this._columnGap) * e;
t = this._itemSize.width;
}
if (this.lackCenter) {
r += this._rightGap;
r -= this.content.width / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: e,
right: r,
left: o = r - t,
x: o + this._itemTmp.anchorX * t,
y: this._itemTmp.y
};
}
break;

case cc.Layout.Type.VERTICAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
if (this._customSize) {
var d = this._getFixedSize(e);
n = -this._topGap - (this._itemSize.height + this._lineGap) * (e - d.count) - (d.val + this._lineGap * d.count);
var p = this._customSize[e];
a = n - (i = p > 0 ? p : this._itemSize.height);
} else {
n = -this._topGap - (this._itemSize.height + this._lineGap) * e;
i = this._itemSize.height;
}
if (this.lackCenter) {
n += this._topGap;
n -= this.content.height / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: e,
top: n,
bottom: a = n - i,
x: this._itemTmp.x,
y: a + this._itemTmp.anchorY * i
};

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
if (this._customSize) {
var f = this._getFixedSize(e);
a = this._bottomGap + (this._itemSize.height + this._lineGap) * (e - f.count) + (f.val + this._lineGap * f.count);
var g = this._customSize[e];
i = g > 0 ? g : this._itemSize.height;
} else {
a = this._bottomGap + (this._itemSize.height + this._lineGap) * e;
i = this._itemSize.height;
}
if (this.lackCenter) {
a -= this._bottomGap;
a += this.content.height / 2 - this._allItemSizeNoEdge / 2;
}
return {
id: e,
top: n = a + i,
bottom: a,
x: this._itemTmp.x,
y: a + this._itemTmp.anchorY * i
};
}

case cc.Layout.Type.GRID:
var m = Math.floor(e / this._colLineNum);
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
c = (a = (n = -this._topGap - (this._itemSize.height + this._lineGap) * m) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
n = (a = this._bottomGap + (this._itemSize.height + this._lineGap) * m) + this._itemSize.height;
c = a + this._itemTmp.anchorY * this._itemSize.height;
}
s = this._leftGap + e % this._colLineNum * (this._itemSize.width + this._columnGap);
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
s += this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s += (1 - this._itemTmp.anchorX) * this._itemSize.width;
s -= (1 - this.content.anchorX) * this.content.width;
s *= -1;
}
return {
id: e,
top: n,
bottom: a,
x: s,
y: c
};

case cc.Layout.AxisDirection.VERTICAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
r = (o = this._leftGap + (this._itemSize.width + this._columnGap) * m) + this._itemSize.width;
s = o + this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s = (o = (r = -this._rightGap - (this._itemSize.width + this._columnGap) * m) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width;
s += (1 - this.content.anchorX) * this.content.width;
}
c = -this._topGap - e % this._colLineNum * (this._itemSize.height + this._lineGap);
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
c -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
c += (1 - this.content.anchorY) * this.content.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
c -= this._itemTmp.anchorY * this._itemSize.height;
c += this.content.anchorY * this.content.height;
c *= -1;
}
return {
id: e,
left: o,
right: r,
x: s,
y: c
};
}
}
},
_calcExistItemPos: function(e) {
var t = this.getItemByListId(e);
if (!t) return null;
var i = {
id: e,
x: t.x,
y: t.y
};
if (this._sizeType) {
i.top = t.y + t.height * (1 - t.anchorY);
i.bottom = t.y - t.height * t.anchorY;
} else {
i.left = t.x - t.width * t.anchorX;
i.right = t.x + t.width * (1 - t.anchorX);
}
return i;
},
getItemPos: function(e) {
return this._virtual ? this._calcItemPos(e) : this.frameByFrameRenderNum ? this._calcItemPos(e) : this._calcExistItemPos(e);
},
_getFixedSize: function(e) {
if (!this._customSize) return null;
null == e && (e = this._numItems);
var t = 0, i = 0;
for (var n in this._customSize) if (parseInt(n) < e) {
t += this._customSize[n];
i++;
}
return {
val: t,
count: i
};
},
_onScrollBegan: function() {
this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
},
_onScrollEnded: function() {
var e = this;
e.curScrollIsTouch = !1;
if (null != e.scrollToListId) {
var t = e.getItemByListId(e.scrollToListId);
e.scrollToListId = null;
t && cc.tween(t).to(.1, {
scale: 1.06
}).to(.1, {
scale: 1
}).start();
}
e._onScrolling();
e._slideMode != n.ADHERING || e.adhering ? e._slideMode == n.PAGE && (null != e._beganPos && e.curScrollIsTouch ? this._pageAdhere() : e.adhere()) : e.adhere();
},
_onTouchStart: function(e, t) {
if (!this._scrollView.hasNestedViewGroup(e, t)) {
this.curScrollIsTouch = !0;
if (e.eventPhase !== cc.Event.AT_TARGET || e.target !== this.node) {
for (var i = e.target; null == i._listId && i.parent; ) i = i.parent;
this._scrollItem = null != i._listId ? i : e.target;
}
}
},
_onTouchUp: function() {
var e = this;
e._scrollPos = null;
if (e._slideMode == n.ADHERING) {
e.adhering && (e._adheringBarrier = !0);
e.adhere();
} else e._slideMode == n.PAGE && (null != e._beganPos ? e._pageAdhere() : e.adhere());
this._scrollItem = null;
},
_onTouchCancelled: function(e, t) {
var i = this;
if (!i._scrollView.hasNestedViewGroup(e, t) && !e.simulate) {
i._scrollPos = null;
if (i._slideMode == n.ADHERING) {
i.adhering && (i._adheringBarrier = !0);
i.adhere();
} else i._slideMode == n.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere());
this._scrollItem = null;
}
},
_onSizeChanged: function() {
this.checkInited(!1) && this._onScrolling();
},
_onItemAdaptive: function(e) {
if (!this._sizeType && e.width != this._itemSize.width || this._sizeType && e.height != this._itemSize.height) {
this._customSize || (this._customSize = {});
var t = this._sizeType ? e.height : e.width;
if (this._customSize[e._listId] != t) {
this._customSize[e._listId] = t;
this._resizeContent();
this.updateAll();
if (null != this._scrollToListId) {
this._scrollPos = null;
this.unschedule(this._scrollToSo);
this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
}
}
}
},
_pageAdhere: function() {
var e = this;
if (e.cyclic || !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)) {
var t = e._sizeType ? e.viewTop : e.viewLeft, i = (e._sizeType ? e.node.height : e.node.width) * e.pageDistance;
if (Math.abs(e._beganPos - t) > i) switch (e._alignCalcType) {
case 1:
case 4:
e._beganPos > t ? e.prePage(.5) : e.nextPage(.5);
break;

case 2:
case 3:
e._beganPos < t ? e.prePage(.5) : e.nextPage(.5);
} else e.elasticTop <= 0 && e.elasticRight <= 0 && e.elasticBottom <= 0 && e.elasticLeft <= 0 && e.adhere();
e._beganPos = null;
}
},
adhere: function() {
var e = this;
if (e.checkInited() && !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)) {
e.adhering = !0;
e._calcNearestItem();
var t = (e._sizeType ? e._topGap : e._leftGap) / (e._sizeType ? e.node.height : e.node.width);
e.scrollTo(e.nearestListId, .7, t);
}
},
update: function() {
if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
for (var e = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum, t = this._updateCounter; t < e; t++) {
var i = this.displayData[t];
i && this._createOrUpdateItem(i);
}
if (this._updateCounter >= this.displayItemNum - 1) if (this._doneAfterUpdate) {
this._updateCounter = 0;
this._updateDone = !1;
this._doneAfterUpdate = !1;
} else {
this._updateDone = !0;
this._delRedundantItem();
this._forceUpdate = !1;
this._calcNearestItem();
this.slideMode == n.PAGE && (this.curPageNum = this.nearestListId);
} else this._updateCounter += this.frameByFrameRenderNum;
} else if (this._updateCounter < this._numItems) {
for (var a = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, o = this._updateCounter; o < a; o++) this._createOrUpdateItem2(o);
this._updateCounter += this.frameByFrameRenderNum;
} else {
this._updateDone = !0;
this._calcNearestItem();
this.slideMode == n.PAGE && (this.curPageNum = this.nearestListId);
}
},
_createOrUpdateItem: function(e) {
var t = this.getItemByListId(e.id);
if (t) {
if (this._forceUpdate && this.renderEvent) {
t.setPosition(new cc.v2(e.x, e.y));
this._resetItemSize(t);
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e.id % this._actualNumItems);
}
} else {
var i = !1, n = this._pool.length > 0;
if (n) t = this._pool.pop(); else {
i = !0;
t = cc.instantiate(this._itemTmp);
}
if (!n || !cc.isValid(t)) {
i = !0;
t = cc.instantiate(this._itemTmp);
n = !1;
}
if (t._listId != e.id) {
t._listId = e.id;
t.setContentSize(this._itemSize);
}
t.active = !0;
if (i) {
cc.log("=========================>", i);
this.content.addChild(t);
}
t.setPosition(new cc.v2(e.x, e.y));
this._resetItemSize(t);
if (n && this._needUpdateWidget) {
var a = t.getComponent(cc.Widget);
a && a.updateAlignment();
}
t.setSiblingIndex(this.content.childrenCount - 1);
var r = t.getComponent(o);
t.listItem = r;
if (r) {
r._list = this;
r._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e.id % this._actualNumItems);
}
this._resetItemSize(t);
this._updateListItem(t.listItem);
this._lastDisplayData.indexOf(e.id) < 0 && this._lastDisplayData.push(e.id);
},
_createOrUpdateItem2: function(e) {
var t = this.content.children[e];
if (t) {
if (this._forceUpdate && this.renderEvent) {
t._listId = e;
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e % this._actualNumItems);
}
} else {
(t = cc.instantiate(this._itemTmp))._listId = e;
this.content.addChild(t);
var i = t.getComponent(o);
t.listItem = i;
if (i) {
i._list = this;
i._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e % this._actualNumItems);
}
this._updateListItem(t.listItem);
this._lastDisplayData.indexOf(e) < 0 && this._lastDisplayData.push(e);
},
_updateListItem: function(e) {
if (e && this.selectedMode > a.NONE) switch (this.selectedMode) {
case a.SINGLE:
e.selected = this.selectedId == e.node._listId;
break;

case a.MULT:
e.selected = this.multSelected.indexOf(e.node._listId) >= 0;
}
},
_resetItemSize: function() {},
_updateItemPos: function(e) {
var t = isNaN(e) ? e : this.getItemByListId(e), i = this.getItemPos(t._listId);
t.setPosition(i.x, i.y);
},
setMultSelected: function(e, t) {
var i = this;
if (i.checkInited()) {
Array.isArray(e) || (e = [ e ]);
if (null == t) i.multSelected = e; else {
var n, a;
if (t) for (var o = e.length - 1; o >= 0; o--) {
n = e[o];
(a = i.multSelected.indexOf(n)) < 0 && i.multSelected.push(n);
} else for (var r = e.length - 1; r >= 0; r--) {
n = e[r];
(a = i.multSelected.indexOf(n)) >= 0 && i.multSelected.splice(a, 1);
}
}
i._forceUpdate = !0;
i._onScrolling();
}
},
getMultSelected: function() {
return this.multSelected;
},
hasMultSelected: function(e) {
return this.multSelected && this.multSelected.indexOf(e) >= 0;
},
updateItem: function(e) {
if (this.checkInited()) {
Array.isArray(e) || (e = [ e ]);
for (var t = 0, i = e.length; t < i; t++) {
var n = e[t], a = this.getItemByListId(n);
a && cc.Component.EventHandler.emitEvents([ this.renderEvent ], a, n % this._actualNumItems);
}
}
},
updateAll: function() {
this.checkInited() && (this.numItems = this.numItems);
},
getItemByListId: function(e) {
if (this.content) for (var t = this.content.childrenCount - 1; t >= 0; t--) if (this.content.children[t].active && this.content.children[t]._listId == e) return this.content.children[t];
},
_getOutsideItem: function() {
for (var e, t = [], i = this.content.childrenCount - 1; i >= 0; i--) (e = this.content.children[i]).active && !this.displayData.find(function(t) {
return t.id == e._listId;
}) && t.push(e);
return t;
},
_delRedundantItem: function() {
if (this._virtual) for (var e = this._getOutsideItem(), t = e.length - 1; t >= 0; t--) {
var i = e[t];
if (!this._scrollItem || i._listId != this._scrollItem._listId) {
i.isCached = !0;
i.active = !1;
this._pool.push(i);
for (var n = this._lastDisplayData.length - 1; n >= 0; n--) if (this._lastDisplayData[n] == i._listId) {
this._lastDisplayData.splice(n, 1);
break;
}
}
} else for (;this.content.childrenCount > this._numItems; ) this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
},
_delSingleItem: function(e) {
e.removeFromParent();
e.destroy && e.destroy();
e = null;
},
aniDelItem: function(e, t, i) {
var n = this;
if (!n.checkInited() || n.cyclic || !n._virtual) return cc.error("This function is not allowed to be called!");
if (!t) return cc.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
if (n._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
var o = n.getItemByListId(e);
if (o) {
n._aniDelRuning = !0;
n._aniDelCB = t;
n._aniDelItem = o;
n._aniDelBeforePos = o.position;
n._aniDelBeforeScale = o.scale;
var r = n.displayData[n.displayData.length - 1].id, s = o.listItem.selected;
o.listItem.showAni(i, function() {
var i;
r < n._numItems - 2 && (i = r + 1);
if (null != i) {
var c = n._calcItemPos(i);
n.displayData.push(c);
n._virtual ? n._createOrUpdateItem(c) : n._createOrUpdateItem2(i);
} else n._numItems--;
if (n.selectedMode == a.SINGLE) s ? n._selectedId = -1 : n._selectedId - 1 >= 0 && n._selectedId--; else if (n.selectedMode == a.MULT && n.multSelected.length) {
var l = n.multSelected.indexOf(e);
l >= 0 && n.multSelected.splice(l, 1);
for (var _ = n.multSelected.length - 1; _ >= 0; _--) n.multSelected[_] >= e && n.multSelected[_]--;
}
if (n._customSize) {
n._customSize[e] && delete n._customSize[e];
var u, h = {};
for (var d in n._customSize) {
u = n._customSize[d];
h[(d = parseInt(d)) - (d >= e ? 1 : 0)] = u;
}
n._customSize = h;
}
for (var p, f, g = null != i ? i : r; g >= e + 1; g--) if (o = n.getItemByListId(g)) {
var m = n._calcItemPos(g - 1);
p = cc.tween(o).to(.2333, {
position: cc.v2(m.x, m.y)
});
if (g <= e + 1) {
f = !0;
p.call(function() {
n._aniDelRuning = !1;
t(e);
delete n._aniDelCB;
});
}
p.start();
}
if (!f) {
n._aniDelRuning = !1;
t(e);
delete n._aniDelCB;
}
}, !0);
} else t(e);
},
scrollTo: function(e, t, i, n) {
var a = this;
if (a.checkInited()) {
null == t ? t = .5 : t < 0 && (t = 0);
e < 0 ? e = 0 : e >= a._numItems && (e = a._numItems - 1);
!a._virtual && a._layout && a._layout.enabled && a._layout.updateLayout();
var o, r, s = a.getItemPos(e);
if (!s) return !1;
switch (a._alignCalcType) {
case 1:
o = s.left;
o -= null != i ? a.node.width * i : a._leftGap;
s = new cc.v2(o, 0);
break;

case 2:
o = s.right - a.node.width;
o += null != i ? a.node.width * i : a._rightGap;
s = new cc.v2(o + a.content.width, 0);
break;

case 3:
r = s.top;
r += null != i ? a.node.height * i : a._topGap;
s = new cc.v2(0, -r);
break;

case 4:
r = s.bottom + a.node.height;
r -= null != i ? a.node.height * i : a._bottomGap;
s = new cc.v2(0, -r + a.content.height);
}
var c = a.content.getPosition();
c = Math.abs(a._sizeType ? c.y : c.x);
var l = a._sizeType ? s.y : s.x;
if (Math.abs((null != a._scrollPos ? a._scrollPos : c) - l) > .5) {
a._scrollPos = l;
a._scrollToListId = e;
a._scrollToEndTime = new Date().getTime() / 1e3 + t;
a._scrollView.scrollToOffset(s, t);
a._scrollToSo = a.scheduleOnce(function() {
a._adheringBarrier || (a.adhering = a._adheringBarrier = !1);
a._scrollPos = a._scrollToListId = a._scrollToEndTime = a._scrollToSo = null;
if (n) {
var t = a.getItemByListId(e);
t && cc.tween(t).to(.1, {
scale: 1.05
}).to(.1, {
scale: 1
}).start();
}
}, t + .1);
t <= 0 && a._onScrolling();
}
}
},
_calcNearestItem: function() {
var e, t, i, n, a, o, r = this;
r.nearestListId = null;
r._virtual && r._calcViewPos();
i = r.viewTop;
n = r.viewRight;
a = r.viewBottom;
o = r.viewLeft;
for (var s = !1, c = 0; c < r.content.childrenCount && !s; c += r._colLineNum) if (e = this._virtual ? this.displayData[c] : this._calcExistItemPos(c)) {
t = this._sizeType ? (e.top + e.bottom) / 2 : t = (e.left + e.right) / 2;
switch (this._alignCalcType) {
case 1:
if (e.right >= o) {
this.nearestListId = e.id;
o > t && (this.nearestListId += this._colLineNum);
s = !0;
}
break;

case 2:
if (e.left <= n) {
this.nearestListId = e.id;
n < t && (this.nearestListId += this._colLineNum);
s = !0;
}
break;

case 3:
if (e.bottom <= i) {
this.nearestListId = e.id;
i < t && (this.nearestListId += this._colLineNum);
s = !0;
}
break;

case 4:
if (e.top >= a) {
this.nearestListId = e.id;
a > t && (this.nearestListId += this._colLineNum);
s = !0;
}
}
}
if ((e = this._virtual ? this.displayData[this.displayItemNum - 1] : this._calcExistItemPos(this._numItems - 1)) && e.id == r._numItems - 1) {
t = r._sizeType ? (e.top + e.bottom) / 2 : t = (e.left + e.right) / 2;
switch (r._alignCalcType) {
case 1:
n > t && (r.nearestListId = e.id);
break;

case 2:
o < t && (r.nearestListId = e.id);
break;

case 3:
a < t && (r.nearestListId = e.id);
break;

case 4:
i > t && (r.nearestListId = e.id);
}
}
},
prePage: function(e) {
if (this.checkInited()) {
null == e && (e = .5);
this.skipPage(this.curPageNum - 1, e);
}
},
nextPage: function(e) {
if (this.checkInited()) {
null == e && (e = .5);
this.skipPage(this.curPageNum + 1, e);
}
},
skipPage: function(e, t) {
var i = this;
if (i.checkInited()) {
if (i._slideMode != n.PAGE) return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
if (!(e < 0 || e >= i._numItems) && i.curPageNum != e) {
i.curPageNum = e;
i.pageChangeEvent && cc.Component.EventHandler.emitEvents([ i.pageChangeEvent ], e);
i.scrollTo(e, t);
}
}
},
calcCustomSize: function(e) {
var t = this;
if (t.checkInited()) {
if (!t._itemTmp) return cc.error("Unset template item!");
if (!t.renderEvent) return cc.error("Unset Render-Event!");
t._customSize = {};
var i = cc.instantiate(t._itemTmp);
t.content.addChild(i);
for (var n = 0; n < e; n++) {
cc.Component.EventHandler.emitEvents([ t.renderEvent ], i, n);
i.height == t._itemSize.height && i.width == t._itemSize.width || (t._customSize[n] = t._sizeType ? i.height : i.width);
}
Object.keys(t._customSize).length || (t._customSize = null);
i.removeFromParent();
i.destroy && i.destroy();
return t._customSize;
}
}
});
cc._RF.pop();
}, {
ListViewItem: "ListViewItem"
} ],
List: [ function(e, t) {
"use strict";
cc._RF.push(t, "c5a09lTqKZKE6FCobKt/vl8", "List");
var i = cc.Enum({
NODE: 1,
PREFAB: 2
}), n = cc.Enum({
NORMAL: 1,
ADHERING: 2,
PAGE: 3
}), a = cc.Enum({
NONE: 0,
SINGLE: 1,
MULT: 2
}), o = e("ListItem");
cc.Class({
extends: cc.Component,
editor: {
disallowMultiple: !1,
menu: "自定义组件/List",
requireComponent: cc.ScrollView,
executionOrder: -5e3
},
properties: {
templateType: {
default: i.NODE,
type: i
},
tmpNode: {
default: null,
type: cc.Node,
tooltip: !1,
visible: function() {
var e = this.templateType == i.NODE;
e || (this.tmpNode = null);
return e;
}
},
tmpPrefab: {
default: null,
type: cc.Prefab,
tooltip: !1,
visible: function() {
var e = this.templateType == i.PREFAB;
e || (this.tmpPrefab = null);
return e;
}
},
_slideMode: 1,
slideMode: {
type: n,
tooltip: !1,
get: function() {
return this._slideMode;
},
set: function(e) {
null != e && (this._slideMode = e);
}
},
pageDistance: {
default: .3,
type: cc.Float,
range: [ 0, 1, .1 ],
tooltip: !1,
slide: !0,
visible: function() {
return this._slideMode == n.PAGE;
}
},
pageChangeEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
var e = this._slideMode == n.PAGE;
e || (this.pageChangeEvent = null);
return e;
}
},
_virtual: !0,
virtual: {
tooltip: !1,
get: function() {
return this._virtual;
},
set: function(e) {
null != e && (this._virtual = e);
0 != this._numItems && this._onScrolling();
}
},
cyclic: {
default: !1,
tooltip: !1,
visible: function() {
var e = this.virtual && this.slideMode == n.NORMAL;
e || (this.cyclic = !1);
return e;
}
},
lackCenter: {
default: !1,
tooltip: !1,
visible: function() {
return this.virtual;
}
},
lackSlide: {
default: !1,
tooltip: !1,
visible: function() {
var e = this.virtual && !this.lackCenter;
e || (this.lackSlide = !1);
return e;
}
},
_updateRate: 0,
updateRate: {
type: cc.Integer,
range: [ 0, 6, 1 ],
tooltip: !1,
slide: !0,
get: function() {
return this._updateRate;
},
set: function(e) {
e >= 0 && e <= 6 && (this._updateRate = e);
}
},
frameByFrameRenderNum: {
default: 0,
type: cc.Integer,
range: [ 0, 12, 1 ],
tooltip: !1,
slide: !0
},
renderEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1
},
selectedMode: {
default: a.NONE,
type: a,
tooltip: !1
},
repeatEventSingle: {
default: !1,
tooltip: !1,
visible: function() {
return this.selectedMode == a.SINGLE;
}
},
selectedEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
var e = this.selectedMode > 0;
e || (this.selectedEvent = null);
return e;
}
},
_selectedId: -1,
selectedId: {
visible: !1,
get: function() {
return this._selectedId;
},
set: function(e) {
var t, i = this;
switch (i.selectedMode) {
case a.SINGLE:
if (!i.repeatEventSingle && e == i._selectedId) return;
t = i.getItemByListId(e);
i._selectedId >= 0 ? i._lastSelectedId = i._selectedId : i._lastSelectedId = null;
i._selectedId = e;
t && (t.listItem.selected = !0);
if (i._lastSelectedId >= 0 && i._lastSelectedId != i._selectedId) {
var n = i.getItemByListId(i._lastSelectedId);
n && (n.listItem.selected = !1);
}
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], t, e % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems);
break;

case a.MULT:
if (!(t = i.getItemByListId(e))) return;
i._selectedId >= 0 && (i._lastSelectedId = i._selectedId);
i._selectedId = e;
var o = !t.listItem.selected;
t.listItem.selected = o;
var r = i.multSelected.indexOf(e);
o && r < 0 ? i.multSelected.push(e) : !o && r >= 0 && i.multSelected.splice(r, 1);
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], t, e % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems, o);
}
}
},
_numItems: {
default: 0,
serializable: !1
},
numItems: {
visible: !1,
get: function() {
return this._actualNumItems;
},
set: function(e) {
console.log("设置numitems");
var t = this;
if (t.checkInited()) if (null == e || e < 0) cc.error("numItems set the wrong::", e); else {
console.log("设置numitems 开始");
t._actualNumItems = t._numItems = e;
t._forceUpdate = !0;
if (t._virtual) {
t._resizeContent();
t.cyclic && (t._numItems = t._cyclicNum * t._numItems);
t._onScrolling();
t.frameByFrameRenderNum || t.slideMode != n.PAGE || (t.curPageNum = t.nearestListId);
} else {
var i = t.content.getComponent(cc.Layout);
i && (i.enabled = !0);
t._delRedundantItem();
t.firstListId = 0;
if (t.frameByFrameRenderNum > 0) {
for (var a = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum, o = 0; o < a; o++) t._createOrUpdateItem2(o);
if (t.frameByFrameRenderNum < t._numItems) {
t._updateCounter = t.frameByFrameRenderNum;
t._updateDone = !1;
}
} else {
for (var r = 0; r < e; r++) t._createOrUpdateItem2(r);
t.displayItemNum = e;
}
}
}
}
}
},
onLoad: function() {
this._init();
},
onDestroy: function() {
this._itemTmp && this._itemTmp.isValid && this._itemTmp.destroy();
for (;this._pool.size(); ) this._pool.get().destroy();
},
onEnable: function() {
this._registerEvent();
this._init();
},
onDisable: function() {
this._unregisterEvent();
},
_registerEvent: function() {
var e = this;
e.node.on(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0);
e.node.on("touch-up", e._onTouchUp, e, !0);
e.node.on(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0);
e.node.on("scroll-began", e._onScrollBegan, e, !0);
e.node.on("scroll-ended", e._onScrollEnded, e, !0);
e.node.on("scrolling", e._onScrolling, e, !0);
e.node.on(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
},
_unregisterEvent: function() {
var e = this;
e.node.off(cc.Node.EventType.TOUCH_START, e._onTouchStart, e, !0);
e.node.off("touch-up", e._onTouchUp, e, !0);
e.node.off(cc.Node.EventType.TOUCH_CANCEL, e._onTouchCancelled, e, !0);
e.node.off("scroll-began", e._onScrollBegan, e, !0);
e.node.off("scroll-ended", e._onScrollEnded, e, !0);
e.node.off("scrolling", e._onScrolling, e, !0);
e.node.off(cc.Node.EventType.SIZE_CHANGED, e._onSizeChanged, e);
},
_init: function() {
var e = this;
if (!e._inited) {
e._scrollView = e.node.getComponent(cc.ScrollView);
e.content = e._scrollView.content;
if (e.content) {
e._layout = e.content.getComponent(cc.Layout);
e._align = e._layout.type;
e._resizeMode = e._layout.resizeMode;
e._startAxis = e._layout.startAxis;
e._topGap = e._layout.paddingTop;
e._rightGap = e._layout.paddingRight;
e._bottomGap = e._layout.paddingBottom;
e._leftGap = e._layout.paddingLeft;
e._columnGap = e._layout.spacingX;
e._lineGap = e._layout.spacingY;
e._colLineNum;
e._verticalDir = e._layout.verticalDirection;
e._horizontalDir = e._layout.horizontalDirection;
e.setTemplateItem(cc.instantiate(e.templateType == i.PREFAB ? e.tmpPrefab : e.tmpNode));
if (e._slideMode == n.ADHERING || e._slideMode == n.PAGE) {
e._scrollView.inertia = !1;
e._scrollView._onMouseWheel = function() {};
}
e.virtual || (e.lackCenter = !1);
e._lastDisplayData = [];
e.displayData = [];
e._pool = new cc.NodePool();
e._forceUpdate = !1;
e._updateCounter = 0;
e._updateDone = !0;
e.curPageNum = 0;
if (e.cyclic) {
e._scrollView._processAutoScrolling = this._processAutoScrolling.bind(e);
e._scrollView._startBounceBackIfNeeded = function() {
return !1;
};
}
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
switch (e._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
e._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
e._alignCalcType = 2;
}
break;

case cc.Layout.Type.VERTICAL:
switch (e._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
e._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
e._alignCalcType = 4;
}
break;

case cc.Layout.Type.GRID:
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (e._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
e._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
e._alignCalcType = 4;
}
break;

case cc.Layout.AxisDirection.VERTICAL:
switch (e._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
e._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
e._alignCalcType = 2;
}
}
}
e.content.children.forEach(function(e) {
e.removeFromParent();
e.isValid && e.destroy();
});
e._inited = !0;
} else cc.error(e.node.name + "'s cc.ScrollView unset content!");
}
},
_processAutoScrolling: function(e) {
this._scrollView._autoScrollAccumulatedTime += 1 * e;
var t = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
if (this._scrollView._autoScrollAttenuate) {
var i = t - 1;
t = i * i * i * i * i + 1;
}
var n = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(t)), a = this._scrollView.getScrollEndedEventTiming(), o = Math.abs(t - 1) <= a;
if (Math.abs(t - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired) {
this._scrollView._dispatchEvent("scroll-ended-with-threshold");
this._scrollView._isScrollEndedWithThresholdEventFired = !0;
}
o && (this._scrollView._autoScrolling = !1);
var r = n.sub(this._scrollView.getContentPosition());
this._scrollView._moveContent(this._scrollView._clampDelta(r), o);
this._scrollView._dispatchEvent("scrolling");
if (!this._scrollView._autoScrolling) {
this._scrollView._isBouncing = !1;
this._scrollView._scrolling = !1;
this._scrollView._dispatchEvent("scroll-ended");
}
},
setTemplateItem: function(e) {
if (e) {
var t = this;
t._itemTmp = e;
t._resizeMode == cc.Layout.ResizeMode.CHILDREN ? t._itemSize = t._layout.cellSize : t._itemSize = new cc.size(e.width, e.height);
var i = e.getComponent(o), n = !1;
i || (n = !0);
i && (i._btnCom || e.getComponent(cc.Button) || (n = !0));
n && (t.selectedMode = a.NONE);
(i = e.getComponent(cc.Widget)) && i.enabled && (t._needUpdateWidget = !0);
t.selectedMode == a.MULT && (t.multSelected = []);
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
t._colLineNum = 1;
t._sizeType = !1;
break;

case cc.Layout.Type.VERTICAL:
t._colLineNum = 1;
t._sizeType = !0;
break;

case cc.Layout.Type.GRID:
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var r = t.content.width - t._leftGap - t._rightGap;
t._colLineNum = Math.floor((r + t._columnGap) / (t._itemSize.width + t._columnGap));
t._sizeType = !0;
break;

case cc.Layout.AxisDirection.VERTICAL:
var s = t.content.height - t._topGap - t._bottomGap;
t._colLineNum = Math.floor((s + t._lineGap) / (t._itemSize.height + t._lineGap));
t._sizeType = !1;
}
}
}
},
checkInited: function(e) {
e = null == e || e;
if (!this._inited) {
e && cc.error("List initialization not completed!");
return !1;
}
return !0;
},
_resizeContent: function() {
var e, t = this;
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
if (t._customSize) {
var i = t._getFixedSize();
e = t._leftGap + i.val + t._itemSize.width * (t._numItems - i.count) + t._columnGap * (t._numItems - 1) + t._rightGap;
} else e = t._leftGap + t._itemSize.width * t._numItems + t._columnGap * (t._numItems - 1) + t._rightGap;
break;

case cc.Layout.Type.VERTICAL:
if (t._customSize) {
var n = t._getFixedSize();
e = t._topGap + n.val + t._itemSize.height * (t._numItems - n.count) + t._lineGap * (t._numItems - 1) + t._bottomGap;
} else e = t._topGap + t._itemSize.height * t._numItems + t._lineGap * (t._numItems - 1) + t._bottomGap;
break;

case cc.Layout.Type.GRID:
t.lackCenter && (t.lackCenter = !1);
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var a = Math.ceil(t._numItems / t._colLineNum);
e = t._topGap + t._itemSize.height * a + t._lineGap * (a - 1) + t._bottomGap;
break;

case cc.Layout.AxisDirection.VERTICAL:
var o = Math.ceil(t._numItems / t._colLineNum);
e = t._leftGap + t._itemSize.width * o + t._columnGap * (o - 1) + t._rightGap;
}
}
var r = t.content.getComponent(cc.Layout);
r && (r.enabled = !1);
t._allItemSize = e;
t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);
if (t.cyclic) {
var s = t._sizeType ? t.node.height : t.node.width;
t._cyclicPos1 = 0;
s -= t._cyclicPos1;
t._cyclicNum = Math.ceil(s / t._allItemSizeNoEdge) + 1;
var c = t._sizeType ? t._lineGap : t._columnGap;
t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + c;
t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + c * (t._cyclicNum - 1);
t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
t._cycilcAllItemSizeNoEdge += c * (t._cyclicNum - 1);
}
t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
var l = t._lack && t.lackCenter || !t.lackSlide ? .1 : 0, _ = t._lack ? (t._sizeType ? t.node.height : t.node.width) - l : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
_ < 0 && (_ = 0);
t._sizeType ? t.content.height = _ : t.content.width = _;
},
_onScrolling: function(e) {
null == this.frameCount && (this.frameCount = this._updateRate);
if (!this._forceUpdate && e && "scroll-ended" != e.type && this.frameCount > 0) this.frameCount--; else {
this.frameCount = this._updateRate;
if (!this._aniDelRuning) {
if (this.cyclic) {
var t = this.content.getPosition();
t = this._sizeType ? t.y : t.x;
var i = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap), n = this._sizeType ? cc.v2(0, i) : cc.v2(i, 0);
switch (this._alignCalcType) {
case 1:
if (t > -this._cyclicPos1) {
this.content.x = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (t < -this._cyclicPos2) {
this.content.x = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
break;

case 2:
if (t < this._cyclicPos1) {
this.content.x = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (t > this._cyclicPos2) {
this.content.x = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 3:
if (t < this._cyclicPos1) {
this.content.y = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (t > this._cyclicPos2) {
this.content.y = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 4:
if (t > -this._cyclicPos1) {
this.content.y = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (t < -this._cyclicPos2) {
this.content.y = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
}
}
this._calcViewPos();
var a, o, r, s;
if (this._sizeType) {
a = this.viewTop;
r = this.viewBottom;
} else {
o = this.viewRight;
s = this.viewLeft;
}
if (this._virtual) {
this.displayData = [];
var c, l = 0, _ = this._numItems - 1;
if (this._customSize) for (var u = !1; l <= _ && !u; l++) {
c = this._calcItemPos(l);
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
c.right >= s && c.left <= o ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.Type.VERTICAL:
c.bottom <= a && c.top >= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.Type.GRID:
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
c.bottom <= a && c.top >= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.AxisDirection.VERTICAL:
c.right >= s && c.left <= o ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (u = !0);
}
}
} else {
var h = this._itemSize.width + this._columnGap, d = this._itemSize.height + this._lineGap;
switch (this._alignCalcType) {
case 1:
l = (s + this._leftGap) / h;
_ = (o + this._rightGap) / h;
break;

case 2:
l = (-o - this._rightGap) / h;
_ = (-s - this._leftGap) / h;
break;

case 3:
l = (-a - this._topGap) / d;
_ = (-r - this._bottomGap) / d;
break;

case 4:
l = (r + this._bottomGap) / d;
_ = (a + this._topGap) / d;
}
l = Math.floor(l) * this._colLineNum;
_ = Math.ceil(_) * this._colLineNum;
l < 0 && (l = 0);
--_ >= this._numItems && (_ = this._numItems - 1);
for (;l <= _; l++) this.displayData.push(this._calcItemPos(l));
}
if (this.displayData.length <= 0 || !this._numItems) {
this._lastDisplayData = [];
this._delRedundantItem();
return;
}
this.firstListId = this.displayData[0].id;
this.displayItemNum = this.displayData.length;
var p = this._lastDisplayData.length;
if (this._forceUpdate || this.displayItemNum != p || this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[p - 1]) {
this._lastDisplayData = [];
if (this.frameByFrameRenderNum > 0) if (this._numItems > 0) {
this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0;
this._updateDone = !1;
} else {
this._delRedundantItem();
this._updateCounter = 0;
this._updateDone = !0;
} else {
for (var f = 0; f < this.displayItemNum; f++) this._createOrUpdateItem(this.displayData[f]);
this._delRedundantItem();
this._forceUpdate = !1;
}
}
this._calcNearestItem();
}
}
}
},
_calcViewPos: function() {
var e = this.content.getPosition();
switch (this._alignCalcType) {
case 1:
this.elasticLeft = e.x > 0 ? e.x : 0;
this.viewLeft = (e.x < 0 ? -e.x : 0) - this.elasticLeft;
this.viewRight = this.viewLeft + this.node.width;
this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
this.viewRight += this.elasticRight;
break;

case 2:
this.elasticRight = e.x < 0 ? -e.x : 0;
this.viewRight = (e.x > 0 ? -e.x : 0) + this.elasticRight;
this.viewLeft = this.viewRight - this.node.width;
this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
this.viewLeft -= this.elasticLeft;
break;

case 3:
this.elasticTop = e.y < 0 ? Math.abs(e.y) : 0;
this.viewTop = (e.y > 0 ? -e.y : 0) + this.elasticTop;
this.viewBottom = this.viewTop - this.node.height;
this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
this.viewBottom += this.elasticBottom;
break;

case 4:
this.elasticBottom = e.y > 0 ? Math.abs(e.y) : 0;
this.viewBottom = (e.y < 0 ? -e.y : 0) - this.elasticBottom;
this.viewTop = this.viewBottom + this.node.height;
this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
this.viewTop -= this.elasticTop;
}
},
_calcItemPos: function(e) {
var t, i, n, a, o, r, s, c;
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
if (this._customSize) {
var l = this._getFixedSize(e);
o = this._leftGap + (this._itemSize.width + this._columnGap) * (e - l.count) + (l.val + this._columnGap * l.count);
var _ = this._customSize[e];
t = _ > 0 ? _ : this._itemSize.width;
} else {
o = this._leftGap + (this._itemSize.width + this._columnGap) * e;
t = this._itemSize.width;
}
r = o + t;
if (this.lackCenter) {
var u = this.content.width / 2 - this._allItemSizeNoEdge / 2;
o += u;
r += u;
}
return {
id: e,
left: o,
right: r,
x: o + this._itemTmp.anchorX * t,
y: this._itemTmp.y
};

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
if (this._customSize) {
var h = this._getFixedSize(e);
r = -this._rightGap - (this._itemSize.width + this._columnGap) * (e - h.count) - (h.val + this._columnGap * h.count);
var d = this._customSize[e];
t = d > 0 ? d : this._itemSize.width;
} else {
r = -this._rightGap - (this._itemSize.width + this._columnGap) * e;
t = this._itemSize.width;
}
o = r - t;
if (this.lackCenter) {
var p = this.content.width / 2 - this._allItemSizeNoEdge / 2;
o -= p;
r -= p;
}
return {
id: e,
right: r,
left: o,
x: o + this._itemTmp.anchorX * t,
y: this._itemTmp.y
};
}
break;

case cc.Layout.Type.VERTICAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
if (this._customSize) {
var f = this._getFixedSize(e);
n = -this._topGap - (this._itemSize.height + this._lineGap) * (e - f.count) - (f.val + this._lineGap * f.count);
var g = this._customSize[e];
a = n - (i = g > 0 ? g : this._itemSize.height);
} else {
n = -this._topGap - (this._itemSize.height + this._lineGap) * e;
i = this._itemSize.height;
}
a = n - i;
if (this.lackCenter) {
var m = this.content.height / 2 - this._allItemSizeNoEdge / 2;
n -= m;
a -= m;
}
return {
id: e,
top: n,
bottom: a,
x: this._itemTmp.x,
y: a + this._itemTmp.anchorY * i
};

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
if (this._customSize) {
var E = this._getFixedSize(e);
a = this._bottomGap + (this._itemSize.height + this._lineGap) * (e - E.count) + (E.val + this._lineGap * E.count);
var v = this._customSize[e];
i = v > 0 ? v : this._itemSize.height;
} else {
a = this._bottomGap + (this._itemSize.height + this._lineGap) * e;
i = this._itemSize.height;
}
n = a + i;
if (this.lackCenter) {
var S = this.content.height / 2 - this._allItemSizeNoEdge / 2;
n += S;
a += S;
}
return {
id: e,
top: n,
bottom: a,
x: this._itemTmp.x,
y: a + this._itemTmp.anchorY * i
};
}

case cc.Layout.Type.GRID:
var L = Math.floor(e / this._colLineNum);
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
c = (a = (n = -this._topGap - (this._itemSize.height + this._lineGap) * L) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
n = (a = this._bottomGap + (this._itemSize.height + this._lineGap) * L) + this._itemSize.height;
c = a + this._itemTmp.anchorY * this._itemSize.height;
}
s = this._leftGap + e % this._colLineNum * (this._itemSize.width + this._columnGap);
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
s += this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s += (1 - this._itemTmp.anchorX) * this._itemSize.width;
s -= (1 - this.content.anchorX) * this.content.width;
s *= -1;
}
return {
id: e,
top: n,
bottom: a,
x: s,
y: c
};

case cc.Layout.AxisDirection.VERTICAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
r = (o = this._leftGap + (this._itemSize.width + this._columnGap) * L) + this._itemSize.width;
s = o + this._itemTmp.anchorX * this._itemSize.width;
s -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
s = (o = (r = -this._rightGap - (this._itemSize.width + this._columnGap) * L) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width;
s += (1 - this.content.anchorX) * this.content.width;
}
c = -this._topGap - e % this._colLineNum * (this._itemSize.height + this._lineGap);
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
c -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
c += (1 - this.content.anchorY) * this.content.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
c -= this._itemTmp.anchorY * this._itemSize.height;
c += this.content.anchorY * this.content.height;
c *= -1;
}
return {
id: e,
left: o,
right: r,
x: s,
y: c
};
}
}
},
_calcExistItemPos: function(e) {
var t = this.getItemByListId(e);
if (!t) return null;
var i = {
id: e,
x: t.x,
y: t.y
};
if (this._sizeType) {
i.top = t.y + t.height * (1 - t.anchorY);
i.bottom = t.y - t.height * t.anchorY;
} else {
i.left = t.x - t.width * t.anchorX;
i.right = t.x + t.width * (1 - t.anchorX);
}
return i;
},
getItemPos: function(e) {
return this._virtual ? this._calcItemPos(e) : this.frameByFrameRenderNum ? this._calcItemPos(e) : this._calcExistItemPos(e);
},
_getFixedSize: function(e) {
if (!this._customSize) return null;
null == e && (e = this._numItems);
var t = 0, i = 0;
for (var n in this._customSize) if (parseInt(n) < e) {
t += this._customSize[n];
i++;
}
return {
val: t,
count: i
};
},
_onScrollBegan: function() {
this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
},
_onScrollEnded: function() {
var e = this;
if (null != e.scrollToListId) {
var t = e.getItemByListId(e.scrollToListId);
e.scrollToListId = null;
t && t.runAction(new cc.sequence(new cc.scaleTo(.1, 1.06), new cc.scaleTo(.1, 1)));
}
e._onScrolling();
e._slideMode != n.ADHERING || e.adhering ? e._slideMode == n.PAGE && (null != e._beganPos ? this._pageAdhere() : e.adhere()) : e.adhere();
},
_onTouchStart: function(e, t) {
if (!this._scrollView.hasNestedViewGroup(e, t) && (e.eventPhase !== cc.Event.AT_TARGET || e.target !== this.node)) {
for (var i = e.target; null == i._listId && i.parent; ) i = i.parent;
this._scrollItem = null != i._listId ? i : e.target;
}
},
_onTouchUp: function() {
var e = this;
e._scrollPos = null;
if (e._slideMode == n.ADHERING) {
e.adhering && (e._adheringBarrier = !0);
e.adhere();
} else e._slideMode == n.PAGE && (null != e._beganPos ? e._pageAdhere() : e.adhere());
this._scrollItem = null;
},
_onTouchCancelled: function(e, t) {
var i = this;
if (!i._scrollView.hasNestedViewGroup(e, t) && !e.simulate) {
i._scrollPos = null;
if (i._slideMode == n.ADHERING) {
i.adhering && (i._adheringBarrier = !0);
i.adhere();
} else i._slideMode == n.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere());
this._scrollItem = null;
}
},
_onSizeChanged: function() {
this.checkInited(!1) && this._onScrolling();
},
_onItemAdaptive: function(e) {
var t = this;
if (this.checkInited(!1) && (!this._sizeType && e.width != this._itemSize.width || this._sizeType && e.height != this._itemSize.height)) {
this._customSize || (this._customSize = {});
var i = this._sizeType ? e.height : e.width;
if (this._customSize[e._listId] != i) {
this._customSize[e._listId] = i;
this._resizeContent();
this.content.children.forEach(function(e) {
t._updateItemPos(e);
});
if (!isNaN(this._scrollToListId)) {
this._scrollPos = null;
this.unschedule(this._scrollToSo);
this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
}
}
}
},
_pageAdhere: function() {
var e = this;
if (e.cyclic || !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)) {
var t = e._sizeType ? e.viewTop : e.viewLeft, i = (e._sizeType ? e.node.height : e.node.width) * e.pageDistance;
if (Math.abs(e._beganPos - t) > i) switch (e._alignCalcType) {
case 1:
case 4:
e._beganPos > t ? e.prePage(.5) : e.nextPage(.5);
break;

case 2:
case 3:
e._beganPos < t ? e.prePage(.5) : e.nextPage(.5);
} else e.elasticTop <= 0 && e.elasticRight <= 0 && e.elasticBottom <= 0 && e.elasticLeft <= 0 && e.adhere();
e._beganPos = null;
}
},
adhere: function() {
var e = this;
if (e.checkInited() && !(e.elasticTop > 0 || e.elasticRight > 0 || e.elasticBottom > 0 || e.elasticLeft > 0)) {
e.adhering = !0;
e._calcNearestItem();
var t = (e._sizeType ? e._topGap : e._leftGap) / (e._sizeType ? e.node.height : e.node.width);
e.scrollTo(e.nearestListId, .7, t);
}
},
update: function() {
if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
for (var e = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum, t = this._updateCounter; t < e; t++) {
var i = this.displayData[t];
i && this._createOrUpdateItem(i);
}
if (this._updateCounter >= this.displayItemNum - 1) if (this._doneAfterUpdate) {
this._updateCounter = 0;
this._updateDone = !1;
this._scrollView.isScrolling() || (this._doneAfterUpdate = !1);
} else {
this._updateDone = !0;
this._delRedundantItem();
this._forceUpdate = !1;
this._calcNearestItem();
this.slideMode == n.PAGE && (this.curPageNum = this.nearestListId);
} else this._updateCounter += this.frameByFrameRenderNum;
} else if (this._updateCounter < this._numItems) {
for (var a = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, o = this._updateCounter; o < a; o++) this._createOrUpdateItem2(o);
this._updateCounter += this.frameByFrameRenderNum;
} else {
this._updateDone = !0;
this._calcNearestItem();
this.slideMode == n.PAGE && (this.curPageNum = this.nearestListId);
}
},
_createOrUpdateItem: function(e) {
var t = this.getItemByListId(e.id);
if (t) {
if (this._forceUpdate && this.renderEvent) {
t.setPosition(new cc.v2(e.x, e.y));
this._resetItemSize(t);
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e.id % this._actualNumItems);
}
} else {
var i = this._pool.size() > 0;
if ((t = i ? this._pool.get() : cc.instantiate(this._itemTmp))._listId != e.id) {
t._listId = e.id;
t.setContentSize(this._itemSize);
}
t.setPosition(new cc.v2(e.x, e.y));
this._resetItemSize(t);
this.content.addChild(t);
if (i && this._needUpdateWidget) {
var n = t.getComponent(cc.Widget);
n && n.updateAlignment();
}
t.setSiblingIndex(this.content.childrenCount - 1);
var a = t.getComponent(o);
t.listItem = a;
if (a) {
a._list = this;
a._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e.id % this._actualNumItems);
}
this._resetItemSize(t);
this._updateListItem(t.listItem);
this._lastDisplayData.indexOf(e.id) < 0 && this._lastDisplayData.push(e.id);
},
_createOrUpdateItem2: function(e) {
var t = this.content.children[e];
if (t) {
if (this._forceUpdate && this.renderEvent) {
t._listId = e;
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e);
}
} else {
(t = cc.instantiate(this._itemTmp))._listId = e;
this.content.addChild(t);
var i = t.getComponent(o);
t.listItem = i;
if (i) {
i._list = this;
i._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], t, e);
}
this._updateListItem(t.listItem);
this._lastDisplayData.indexOf(e) < 0 && this._lastDisplayData.push(e);
},
_updateListItem: function(e) {
if (e && this.selectedMode > a.NONE) switch (this.selectedMode) {
case a.SINGLE:
e.selected = this.selectedId == e.node._listId;
break;

case a.MULT:
e.selected = this.multSelected.indexOf(e.node._listId) >= 0;
}
},
_resetItemSize: function() {},
_updateItemPos: function(e) {
var t = isNaN(e) ? e : this.getItemByListId(e), i = this.getItemPos(t._listId);
t.setPosition(i.x, i.y);
},
setMultSelected: function(e, t) {
var i = this;
if (i.checkInited()) {
Array.isArray(e) || (e = [ e ]);
if (null == t) i.multSelected = e; else {
var n, a;
if (t) for (var o = e.length - 1; o >= 0; o--) {
n = e[o];
(a = i.multSelected.indexOf(n)) < 0 && i.multSelected.push(n);
} else for (var r = e.length - 1; r >= 0; r--) {
n = e[r];
(a = i.multSelected.indexOf(n)) >= 0 && i.multSelected.splice(a, 1);
}
}
i._forceUpdate = !0;
i._onScrolling();
}
},
updateItem: function(e) {
if (this.checkInited()) {
Array.isArray(e) || (e = [ e ]);
for (var t = 0, i = e.length; t < i; t++) {
var n = e[t], a = this.getItemByListId(n);
a && cc.Component.EventHandler.emitEvents([ this.renderEvent ], a, n % this._actualNumItems);
}
}
},
updateAll: function() {
this.checkInited() && (this.numItems = this.numItems);
},
getItemByListId: function(e) {
for (var t = this.content.childrenCount - 1; t >= 0; t--) if (this.content.children[t]._listId == e) return this.content.children[t];
},
_getOutsideItem: function() {
for (var e, t, i = [], n = this.content.childrenCount - 1; n >= 0; n--) {
e = this.content.children[n];
if (t = !0) for (var a = this.displayItemNum - 1; a >= 0; a--) if (this.displayData[a]) {
var o = this.displayData[a].id;
if (e._listId == o) {
t = !1;
break;
}
}
t && i.push(e);
}
return i;
},
_delRedundantItem: function() {
if (this._virtual) for (var e = this._getOutsideItem(), t = e.length - 1; t >= 0; t--) {
var i = e[t];
this._scrollItem && i._listId == this._scrollItem._listId || this._pool.put(i);
} else for (;this.content.childrenCount > this._numItems; ) this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
},
_delSingleItem: function(e) {
e.removeFromParent();
e.destroy && e.destroy();
e = null;
},
aniDelItem: function(e, t, i) {
var n = this;
if (!n.checkInited() || n.cyclic || !n._virtual) return cc.error("This function is not allowed to be called!");
if (n._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
var o = n.getItemByListId(e);
if (o) {
n._aniDelRuning = !0;
var r = n.displayData[n.displayData.length - 1].id, s = o.listItem.selected;
o.listItem.showAni(i, function() {
var i;
r < n._numItems - 2 && (i = r + 1);
if (null != i) {
var c = n._calcItemPos(i);
n.displayData.push(c);
n._virtual ? n._createOrUpdateItem(c) : n._createOrUpdateItem2(i);
} else n._numItems--;
if (n.selectedMode == a.SINGLE) s ? n._selectedId = -1 : n._selectedId - 1 >= 0 && n._selectedId--; else if (n.selectedMode == a.MULT && n.multSelected.length) {
var l = n.multSelected.indexOf(e);
l >= 0 && n.multSelected.splice(l, 1);
for (var _ = n.multSelected.length - 1; _ >= 0; _--) n.multSelected[_] >= e && n.multSelected[_]--;
}
if (n._customSize) {
n._customSize[e] && delete n._customSize[e];
var u, h = {};
for (var d in n._customSize) {
u = n._customSize[d];
h[(d = parseInt(d)) - (d >= e ? 1 : 0)] = u;
}
n._customSize = h;
}
for (var p, f, g = null != i ? i : r; g >= e + 1; g--) if (o = n.getItemByListId(g)) {
var m = n._calcItemPos(g - 1);
p = [ new cc.moveTo(.2333, new cc.v2(m.x, m.y)) ];
if (g <= e + 1) {
f = !0;
p.push(new cc.CallFunc(function() {
n._aniDelRuning = !1;
t(e);
}));
}
p.length > 1 ? o.runAction(new cc.Sequence(p)) : o.runAction(p[0]);
}
if (!f) {
n._aniDelRuning = !1;
t(e);
}
}, !0);
} else t(e);
},
scrollTo: function(e, t, i, n) {
var a = this;
if (a.checkInited()) {
null == t ? t = .5 : t < 0 && (t = 0);
e < 0 ? e = 0 : e >= a._numItems && (e = a._numItems - 1);
!a._virtual && a._layout && a._layout.enabled && a._layout.updateLayout();
var o, r, s = a.getItemPos(e);
switch (a._alignCalcType) {
case 1:
o = s.left;
o -= null != i ? a.node.width * i : a._leftGap;
s = new cc.v2(o, 0);
break;

case 2:
o = s.right - a.node.width;
o += null != i ? a.node.width * i : a._rightGap;
s = new cc.v2(o + a.content.width, 0);
break;

case 3:
r = s.top;
r += null != i ? a.node.height * i : a._topGap;
s = new cc.v2(0, -r);
break;

case 4:
r = s.bottom + a.node.height;
r -= null != i ? a.node.height * i : a._bottomGap;
s = new cc.v2(0, -r + a.content.height);
}
var c = a.content.getPosition();
c = Math.abs(a._sizeType ? c.y : c.x);
var l = a._sizeType ? s.y : s.x;
if (Math.abs((null != a._scrollPos ? a._scrollPos : c) - l) > .5) {
a._scrollPos = l;
a._scrollToListId = e;
a._scrollToEndTime = new Date().getTime() / 1e3 + t;
a._scrollView.scrollToOffset(s, t);
a._scrollToSo = a.scheduleOnce(function() {
a._adheringBarrier || (a.adhering = a._adheringBarrier = !1);
a._scrollPos = a._scrollToListId = a._scrollToEndTime = a._scrollToSo = null;
if (n) {
var t = a.getItemByListId(e);
t && t.runAction(new cc.sequence(new cc.scaleTo(.1, 1.05), new cc.scaleTo(.1, 1)));
}
}, t + .1);
t <= 0 && a._onScrolling();
}
}
},
_calcNearestItem: function() {
var e, t, i, n, a, o, r = this;
r.nearestListId = null;
r._virtual && r._calcViewPos();
i = r.viewTop;
n = r.viewRight;
a = r.viewBottom;
o = r.viewLeft;
for (var s = !1, c = 0; c < r.content.childrenCount && !s; c += r._colLineNum) if (e = this._virtual ? this.displayData[c] : this._calcExistItemPos(c)) {
t = this._sizeType ? (e.top + e.bottom) / 2 : t = (e.left + e.right) / 2;
switch (this._alignCalcType) {
case 1:
if (e.right >= o) {
this.nearestListId = e.id;
o > t && (this.nearestListId += this._colLineNum);
s = !0;
}
break;

case 2:
if (e.left <= n) {
this.nearestListId = e.id;
n < t && (this.nearestListId += this._colLineNum);
s = !0;
}
break;

case 3:
if (e.bottom <= i) {
this.nearestListId = e.id;
i < t && (this.nearestListId += this._colLineNum);
s = !0;
}
break;

case 4:
if (e.top >= a) {
this.nearestListId = e.id;
a > t && (this.nearestListId += this._colLineNum);
s = !0;
}
}
}
if ((e = this._virtual ? this.displayData[this.displayItemNum - 1] : this._calcExistItemPos(this._numItems - 1)) && e.id == r._numItems - 1) {
t = r._sizeType ? (e.top + e.bottom) / 2 : t = (e.left + e.right) / 2;
switch (r._alignCalcType) {
case 1:
n > t && (r.nearestListId = e.id);
break;

case 2:
o < t && (r.nearestListId = e.id);
break;

case 3:
a < t && (r.nearestListId = e.id);
break;

case 4:
i > t && (r.nearestListId = e.id);
}
}
},
prePage: function(e) {
if (this.checkInited()) {
null == e && (e = .5);
this.skipPage(this.curPageNum - 1, e);
}
},
nextPage: function(e) {
if (this.checkInited()) {
null == e && (e = .5);
this.skipPage(this.curPageNum + 1, e);
}
},
skipPage: function(e, t) {
var i = this;
if (i.checkInited()) {
if (i._slideMode != n.PAGE) return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
if (!(e < 0 || e >= i._numItems) && i.curPageNum != e) {
i.curPageNum = e;
i.pageChangeEvent && cc.Component.EventHandler.emitEvents([ i.pageChangeEvent ], e);
i.scrollTo(e, t);
}
}
},
calcCustomSize: function(e) {
var t = this;
if (t.checkInited()) {
if (!t._itemTmp) return cc.error("Unset template item!");
if (!t.renderEvent) return cc.error("Unset Render-Event!");
t._customSize = {};
var i = cc.instantiate(t._itemTmp);
t.content.addChild(i);
for (var n = 0; n < e; n++) {
cc.Component.EventHandler.emitEvents([ t.renderEvent ], i, n);
i.height == t._itemSize.height && i.width == t._itemSize.width || (t._customSize[n] = t._sizeType ? i.height : i.width);
}
Object.keys(t._customSize).length || (t._customSize = null);
i.removeFromParent();
i.destroy && i.destroy();
return t._customSize;
}
}
});
cc._RF.pop();
}, {
ListItem: "ListItem"
} ],
LongTouchCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "53f39wbZARP0Li4lADfJnbF", "LongTouchCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.touchTime = 2;
t.callback = null;
return t;
}
t.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
};
t.prototype.setCallback = function(e) {
this.callback = e;
};
t.prototype.onTouchStart = function() {
this.unscheduleAllCallbacks();
this.scheduleOnce(this.onTimeOut, this.touchTime);
};
t.prototype.onTouchMove = function() {};
t.prototype.onTouchEnd = function() {
this.unscheduleAllCallbacks();
};
t.prototype.onTimeOut = function() {
this.callback && this.callback();
};
__decorate([ o ], t.prototype, "touchTime", void 0);
return __decorate([ a ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
LoopPageView: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "869ce4O9GpLKbosmPM8uzik", "LoopPageView");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = (n.property, n.requireComponent), r = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this.pageView = this.getComponent(cc.PageView);
for (var e = this.pageView.getPages(), t = 0, i = e; t < i.length; t++) {
var n = i[t];
this.pageView.addPage(cc.instantiate(n));
}
for (var a = 0, o = e; a < o.length; a++) {
n = o[a];
this.pageView.addPage(cc.instantiate(n));
}
this.pageView.node.on("page-end", function(e) {
cc.log(e.getCurrentPageIndex());
0 == e.getCurrentPageIndex() || (e.getCurrentPageIndex(), e.getPages().length);
});
};
t.prototype.nextPage = function() {
var e = this.pageView.getCurrentPageIndex();
this.pageView.scrollToPage(++e, 1);
};
return __decorate([ a, o(cc.PageView) ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
MD5: [ function(require, module, exports) {
(function(process, global) {
"use strict";
cc._RF.push(module, "d4a884fYKpFcqtQlsR6ZGrp", "MD5");
(function() {
var ERROR = "input is invalid type", WINDOW = "object" == typeof window, root = WINDOW ? window : {};
root.JS_MD5_NO_WINDOW && (WINDOW = !1);
var WEB_WORKER = !WINDOW && "object" == typeof self, NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
NODE_JS ? root = global : WEB_WORKER && (root = self);
var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports, AMD = "function" == typeof define && define.amd, ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [ 128, 32768, 8388608, -2147483648 ], SHIFT = [ 0, 8, 16, 24 ], OUTPUT_TYPES = [ "hex", "array", "digest", "buffer", "arrayBuffer", "base64" ], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8;
if (ARRAY_BUFFER) {
var buffer = new ArrayBuffer(68);
buffer8 = new Uint8Array(buffer);
blocks = new Uint32Array(buffer);
}
!root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
return "[object Array]" === Object.prototype.toString.call(e);
});
!ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
});
var createOutputMethod = function(e) {
return function(t) {
return new Md5(!0).update(t)[e]();
};
}, createMethod = function() {
var e = createOutputMethod("hex");
NODE_JS && (e = nodeWrap(e));
e.create = function() {
return new Md5();
};
e.update = function(t) {
return e.create().update(t);
};
for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
var i = OUTPUT_TYPES[t];
e[i] = createOutputMethod(i);
}
return e;
}, nodeWrap = function nodeWrap(method) {
var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"), nodeMethod = function(e) {
if ("string" == typeof e) return crypto.createHash("md5").update(e, "utf8").digest("hex");
if (null == e) throw ERROR;
e.constructor === ArrayBuffer && (e = new Uint8Array(e));
return Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(e)).digest("hex") : method(e);
};
return nodeMethod;
};
function Md5(e) {
if (e) {
blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
this.blocks = blocks;
this.buffer8 = buffer8;
} else if (ARRAY_BUFFER) {
var t = new ArrayBuffer(68);
this.buffer8 = new Uint8Array(t);
this.blocks = new Uint32Array(t);
} else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
this.finalized = this.hashed = !1;
this.first = !0;
}
Md5.prototype.update = function(e) {
if (!this.finalized) {
var t, i = typeof e;
if ("string" !== i) {
if ("object" !== i) throw ERROR;
if (null === e) throw ERROR;
if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e); else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw ERROR;
t = !0;
}
for (var n, a, o = 0, r = e.length, s = this.blocks, c = this.buffer8; o < r; ) {
if (this.hashed) {
this.hashed = !1;
s[0] = s[16];
s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0;
}
if (t) if (ARRAY_BUFFER) for (a = this.start; o < r && a < 64; ++o) c[a++] = e[o]; else for (a = this.start; o < r && a < 64; ++o) s[a >> 2] |= e[o] << SHIFT[3 & a++]; else if (ARRAY_BUFFER) for (a = this.start; o < r && a < 64; ++o) if ((n = e.charCodeAt(o)) < 128) c[a++] = n; else if (n < 2048) {
c[a++] = 192 | n >> 6;
c[a++] = 128 | 63 & n;
} else if (n < 55296 || n >= 57344) {
c[a++] = 224 | n >> 12;
c[a++] = 128 | n >> 6 & 63;
c[a++] = 128 | 63 & n;
} else {
n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++o));
c[a++] = 240 | n >> 18;
c[a++] = 128 | n >> 12 & 63;
c[a++] = 128 | n >> 6 & 63;
c[a++] = 128 | 63 & n;
} else for (a = this.start; o < r && a < 64; ++o) if ((n = e.charCodeAt(o)) < 128) s[a >> 2] |= n << SHIFT[3 & a++]; else if (n < 2048) {
s[a >> 2] |= (192 | n >> 6) << SHIFT[3 & a++];
s[a >> 2] |= (128 | 63 & n) << SHIFT[3 & a++];
} else if (n < 55296 || n >= 57344) {
s[a >> 2] |= (224 | n >> 12) << SHIFT[3 & a++];
s[a >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & a++];
s[a >> 2] |= (128 | 63 & n) << SHIFT[3 & a++];
} else {
n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++o));
s[a >> 2] |= (240 | n >> 18) << SHIFT[3 & a++];
s[a >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & a++];
s[a >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & a++];
s[a >> 2] |= (128 | 63 & n) << SHIFT[3 & a++];
}
this.lastByteIndex = a;
this.bytes += a - this.start;
if (a >= 64) {
this.start = a - 64;
this.hash();
this.hashed = !0;
} else this.start = a;
}
if (this.bytes > 4294967295) {
this.hBytes += this.bytes / 4294967296 << 0;
this.bytes = this.bytes % 4294967296;
}
return this;
}
};
Md5.prototype.finalize = function() {
if (!this.finalized) {
this.finalized = !0;
var e = this.blocks, t = this.lastByteIndex;
e[t >> 2] |= EXTRA[3 & t];
if (t >= 56) {
this.hashed || this.hash();
e[0] = e[16];
e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0;
}
e[14] = this.bytes << 3;
e[15] = this.hBytes << 3 | this.bytes >>> 29;
this.hash();
}
};
Md5.prototype.hash = function() {
var e, t, i, n, a, o, r = this.blocks;
if (this.first) t = ((t = ((e = ((e = r[0] - 680876937) << 7 | e >>> 25) - 271733879 << 0) ^ (i = ((i = (-271733879 ^ (n = ((n = (-1732584194 ^ 2004318071 & e) + r[1] - 117830708) << 12 | n >>> 20) + e << 0) & (-271733879 ^ e)) + r[2] - 1126478375) << 17 | i >>> 15) + n << 0) & (n ^ e)) + r[3] - 1316259209) << 22 | t >>> 10) + i << 0; else {
e = this.h0;
t = this.h1;
i = this.h2;
t = ((t += ((e = ((e += ((n = this.h3) ^ t & (i ^ n)) + r[0] - 680876936) << 7 | e >>> 25) + t << 0) ^ (i = ((i += (t ^ (n = ((n += (i ^ e & (t ^ i)) + r[1] - 389564586) << 12 | n >>> 20) + e << 0) & (e ^ t)) + r[2] + 606105819) << 17 | i >>> 15) + n << 0) & (n ^ e)) + r[3] - 1044525330) << 22 | t >>> 10) + i << 0;
}
t = ((t += ((e = ((e += (n ^ t & (i ^ n)) + r[4] - 176418897) << 7 | e >>> 25) + t << 0) ^ (i = ((i += (t ^ (n = ((n += (i ^ e & (t ^ i)) + r[5] + 1200080426) << 12 | n >>> 20) + e << 0) & (e ^ t)) + r[6] - 1473231341) << 17 | i >>> 15) + n << 0) & (n ^ e)) + r[7] - 45705983) << 22 | t >>> 10) + i << 0;
t = ((t += ((e = ((e += (n ^ t & (i ^ n)) + r[8] + 1770035416) << 7 | e >>> 25) + t << 0) ^ (i = ((i += (t ^ (n = ((n += (i ^ e & (t ^ i)) + r[9] - 1958414417) << 12 | n >>> 20) + e << 0) & (e ^ t)) + r[10] - 42063) << 17 | i >>> 15) + n << 0) & (n ^ e)) + r[11] - 1990404162) << 22 | t >>> 10) + i << 0;
t = ((t += ((e = ((e += (n ^ t & (i ^ n)) + r[12] + 1804603682) << 7 | e >>> 25) + t << 0) ^ (i = ((i += (t ^ (n = ((n += (i ^ e & (t ^ i)) + r[13] - 40341101) << 12 | n >>> 20) + e << 0) & (e ^ t)) + r[14] - 1502002290) << 17 | i >>> 15) + n << 0) & (n ^ e)) + r[15] + 1236535329) << 22 | t >>> 10) + i << 0;
t = ((t += ((n = ((n += (t ^ i & ((e = ((e += (i ^ n & (t ^ i)) + r[1] - 165796510) << 5 | e >>> 27) + t << 0) ^ t)) + r[6] - 1069501632) << 9 | n >>> 23) + e << 0) ^ e & ((i = ((i += (e ^ t & (n ^ e)) + r[11] + 643717713) << 14 | i >>> 18) + n << 0) ^ n)) + r[0] - 373897302) << 20 | t >>> 12) + i << 0;
t = ((t += ((n = ((n += (t ^ i & ((e = ((e += (i ^ n & (t ^ i)) + r[5] - 701558691) << 5 | e >>> 27) + t << 0) ^ t)) + r[10] + 38016083) << 9 | n >>> 23) + e << 0) ^ e & ((i = ((i += (e ^ t & (n ^ e)) + r[15] - 660478335) << 14 | i >>> 18) + n << 0) ^ n)) + r[4] - 405537848) << 20 | t >>> 12) + i << 0;
t = ((t += ((n = ((n += (t ^ i & ((e = ((e += (i ^ n & (t ^ i)) + r[9] + 568446438) << 5 | e >>> 27) + t << 0) ^ t)) + r[14] - 1019803690) << 9 | n >>> 23) + e << 0) ^ e & ((i = ((i += (e ^ t & (n ^ e)) + r[3] - 187363961) << 14 | i >>> 18) + n << 0) ^ n)) + r[8] + 1163531501) << 20 | t >>> 12) + i << 0;
t = ((t += ((n = ((n += (t ^ i & ((e = ((e += (i ^ n & (t ^ i)) + r[13] - 1444681467) << 5 | e >>> 27) + t << 0) ^ t)) + r[2] - 51403784) << 9 | n >>> 23) + e << 0) ^ e & ((i = ((i += (e ^ t & (n ^ e)) + r[7] + 1735328473) << 14 | i >>> 18) + n << 0) ^ n)) + r[12] - 1926607734) << 20 | t >>> 12) + i << 0;
t = ((t += ((o = (n = ((n += ((a = t ^ i) ^ (e = ((e += (a ^ n) + r[5] - 378558) << 4 | e >>> 28) + t << 0)) + r[8] - 2022574463) << 11 | n >>> 21) + e << 0) ^ e) ^ (i = ((i += (o ^ t) + r[11] + 1839030562) << 16 | i >>> 16) + n << 0)) + r[14] - 35309556) << 23 | t >>> 9) + i << 0;
t = ((t += ((o = (n = ((n += ((a = t ^ i) ^ (e = ((e += (a ^ n) + r[1] - 1530992060) << 4 | e >>> 28) + t << 0)) + r[4] + 1272893353) << 11 | n >>> 21) + e << 0) ^ e) ^ (i = ((i += (o ^ t) + r[7] - 155497632) << 16 | i >>> 16) + n << 0)) + r[10] - 1094730640) << 23 | t >>> 9) + i << 0;
t = ((t += ((o = (n = ((n += ((a = t ^ i) ^ (e = ((e += (a ^ n) + r[13] + 681279174) << 4 | e >>> 28) + t << 0)) + r[0] - 358537222) << 11 | n >>> 21) + e << 0) ^ e) ^ (i = ((i += (o ^ t) + r[3] - 722521979) << 16 | i >>> 16) + n << 0)) + r[6] + 76029189) << 23 | t >>> 9) + i << 0;
t = ((t += ((o = (n = ((n += ((a = t ^ i) ^ (e = ((e += (a ^ n) + r[9] - 640364487) << 4 | e >>> 28) + t << 0)) + r[12] - 421815835) << 11 | n >>> 21) + e << 0) ^ e) ^ (i = ((i += (o ^ t) + r[15] + 530742520) << 16 | i >>> 16) + n << 0)) + r[2] - 995338651) << 23 | t >>> 9) + i << 0;
t = ((t += ((n = ((n += (t ^ ((e = ((e += (i ^ (t | ~n)) + r[0] - 198630844) << 6 | e >>> 26) + t << 0) | ~i)) + r[7] + 1126891415) << 10 | n >>> 22) + e << 0) ^ ((i = ((i += (e ^ (n | ~t)) + r[14] - 1416354905) << 15 | i >>> 17) + n << 0) | ~e)) + r[5] - 57434055) << 21 | t >>> 11) + i << 0;
t = ((t += ((n = ((n += (t ^ ((e = ((e += (i ^ (t | ~n)) + r[12] + 1700485571) << 6 | e >>> 26) + t << 0) | ~i)) + r[3] - 1894986606) << 10 | n >>> 22) + e << 0) ^ ((i = ((i += (e ^ (n | ~t)) + r[10] - 1051523) << 15 | i >>> 17) + n << 0) | ~e)) + r[1] - 2054922799) << 21 | t >>> 11) + i << 0;
t = ((t += ((n = ((n += (t ^ ((e = ((e += (i ^ (t | ~n)) + r[8] + 1873313359) << 6 | e >>> 26) + t << 0) | ~i)) + r[15] - 30611744) << 10 | n >>> 22) + e << 0) ^ ((i = ((i += (e ^ (n | ~t)) + r[6] - 1560198380) << 15 | i >>> 17) + n << 0) | ~e)) + r[13] + 1309151649) << 21 | t >>> 11) + i << 0;
t = ((t += ((n = ((n += (t ^ ((e = ((e += (i ^ (t | ~n)) + r[4] - 145523070) << 6 | e >>> 26) + t << 0) | ~i)) + r[11] - 1120210379) << 10 | n >>> 22) + e << 0) ^ ((i = ((i += (e ^ (n | ~t)) + r[2] + 718787259) << 15 | i >>> 17) + n << 0) | ~e)) + r[9] - 343485551) << 21 | t >>> 11) + i << 0;
if (this.first) {
this.h0 = e + 1732584193 << 0;
this.h1 = t - 271733879 << 0;
this.h2 = i - 1732584194 << 0;
this.h3 = n + 271733878 << 0;
this.first = !1;
} else {
this.h0 = this.h0 + e << 0;
this.h1 = this.h1 + t << 0;
this.h2 = this.h2 + i << 0;
this.h3 = this.h3 + n << 0;
}
};
Md5.prototype.hex = function() {
this.finalize();
var e = this.h0, t = this.h1, i = this.h2, n = this.h3;
return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15];
};
Md5.prototype.toString = Md5.prototype.hex;
Md5.prototype.digest = function() {
this.finalize();
var e = this.h0, t = this.h1, i = this.h2, n = this.h3;
return [ 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255 ];
};
Md5.prototype.array = Md5.prototype.digest;
Md5.prototype.arrayBuffer = function() {
this.finalize();
var e = new ArrayBuffer(16), t = new Uint32Array(e);
t[0] = this.h0;
t[1] = this.h1;
t[2] = this.h2;
t[3] = this.h3;
return e;
};
Md5.prototype.buffer = Md5.prototype.arrayBuffer;
Md5.prototype.base64 = function() {
for (var e, t, i, n = "", a = this.array(), o = 0; o < 15; ) {
e = a[o++];
t = a[o++];
i = a[o++];
n += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e << 4 | t >>> 4)] + BASE64_ENCODE_CHAR[63 & (t << 2 | i >>> 6)] + BASE64_ENCODE_CHAR[63 & i];
}
e = a[o];
return n + (BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 & 63] + "==");
};
var exports = createMethod();
if (COMMON_JS) module.exports = exports; else {
root.md5 = exports;
AMD && define(function() {
return exports;
});
}
})();
cc._RF.pop();
}).call(this, require("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
_process: 1
} ],
Md5: [ function(e, t) {
"use strict";
cc._RF.push(t, "cf119bz6SlOELlpweyrZmfc", "Md5");
t.exports = function(e) {
function t(e, t, i) {
return e & t | ~e & i;
}
function i(e, t, i) {
return i & e | ~i & t;
}
function n(e, t, i) {
return e ^ t ^ i;
}
function a(e, t, i) {
return t ^ (e | ~i);
}
function o(e, t) {
return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
if (!e instanceof Uint8Array) {
(function() {
try {
console.log("input data type mismatch only support Uint8Array");
} catch (e) {}
})();
return null;
}
for (var r = [], s = 0; s < e.byteLength; s++) r.push(e[s]);
var c = r.length;
r.push(128);
var l = r.length % 64;
if (l > 56) {
for (s = 0; s < 64 - l; s++) r.push(0);
l = r.length % 64;
}
for (s = 0; s < 56 - l; s++) r.push(0);
r = r.concat(function(e) {
for (var t = [], i = 0; i < 8; i++) {
t.push(255 & e);
e >>>= 8;
}
return t;
}(8 * c));
var _ = 1732584193, u = 4023233417, h = 2562383102, d = 271733878, p = 0, f = 0, g = 0, m = 0;
function E(e, t) {
return 4294967295 & e + t;
}
var v = function(e, t, i, n) {
var a, o, r = m;
m = g;
g = f;
f = E(f, (a = E(p, E(e, E(t, i)))) << (o = n) & 4294967295 | a >>> 32 - o);
p = r;
};
for (s = 0; s < r.length / 64; s++) {
p = _;
var S = 64 * s;
v(t(f = u, g = h, m = d), 3614090360, o(r, S), 7);
v(t(f, g, m), 3905402710, o(r, S + 4), 12);
v(t(f, g, m), 606105819, o(r, S + 8), 17);
v(t(f, g, m), 3250441966, o(r, S + 12), 22);
v(t(f, g, m), 4118548399, o(r, S + 16), 7);
v(t(f, g, m), 1200080426, o(r, S + 20), 12);
v(t(f, g, m), 2821735955, o(r, S + 24), 17);
v(t(f, g, m), 4249261313, o(r, S + 28), 22);
v(t(f, g, m), 1770035416, o(r, S + 32), 7);
v(t(f, g, m), 2336552879, o(r, S + 36), 12);
v(t(f, g, m), 4294925233, o(r, S + 40), 17);
v(t(f, g, m), 2304563134, o(r, S + 44), 22);
v(t(f, g, m), 1804603682, o(r, S + 48), 7);
v(t(f, g, m), 4254626195, o(r, S + 52), 12);
v(t(f, g, m), 2792965006, o(r, S + 56), 17);
v(t(f, g, m), 1236535329, o(r, S + 60), 22);
v(i(f, g, m), 4129170786, o(r, S + 4), 5);
v(i(f, g, m), 3225465664, o(r, S + 24), 9);
v(i(f, g, m), 643717713, o(r, S + 44), 14);
v(i(f, g, m), 3921069994, o(r, S), 20);
v(i(f, g, m), 3593408605, o(r, S + 20), 5);
v(i(f, g, m), 38016083, o(r, S + 40), 9);
v(i(f, g, m), 3634488961, o(r, S + 60), 14);
v(i(f, g, m), 3889429448, o(r, S + 16), 20);
v(i(f, g, m), 568446438, o(r, S + 36), 5);
v(i(f, g, m), 3275163606, o(r, S + 56), 9);
v(i(f, g, m), 4107603335, o(r, S + 12), 14);
v(i(f, g, m), 1163531501, o(r, S + 32), 20);
v(i(f, g, m), 2850285829, o(r, S + 52), 5);
v(i(f, g, m), 4243563512, o(r, S + 8), 9);
v(i(f, g, m), 1735328473, o(r, S + 28), 14);
v(i(f, g, m), 2368359562, o(r, S + 48), 20);
v(n(f, g, m), 4294588738, o(r, S + 20), 4);
v(n(f, g, m), 2272392833, o(r, S + 32), 11);
v(n(f, g, m), 1839030562, o(r, S + 44), 16);
v(n(f, g, m), 4259657740, o(r, S + 56), 23);
v(n(f, g, m), 2763975236, o(r, S + 4), 4);
v(n(f, g, m), 1272893353, o(r, S + 16), 11);
v(n(f, g, m), 4139469664, o(r, S + 28), 16);
v(n(f, g, m), 3200236656, o(r, S + 40), 23);
v(n(f, g, m), 681279174, o(r, S + 52), 4);
v(n(f, g, m), 3936430074, o(r, S), 11);
v(n(f, g, m), 3572445317, o(r, S + 12), 16);
v(n(f, g, m), 76029189, o(r, S + 24), 23);
v(n(f, g, m), 3654602809, o(r, S + 36), 4);
v(n(f, g, m), 3873151461, o(r, S + 48), 11);
v(n(f, g, m), 530742520, o(r, S + 60), 16);
v(n(f, g, m), 3299628645, o(r, S + 8), 23);
v(a(f, g, m), 4096336452, o(r, S), 6);
v(a(f, g, m), 1126891415, o(r, S + 28), 10);
v(a(f, g, m), 2878612391, o(r, S + 56), 15);
v(a(f, g, m), 4237533241, o(r, S + 20), 21);
v(a(f, g, m), 1700485571, o(r, S + 48), 6);
v(a(f, g, m), 2399980690, o(r, S + 12), 10);
v(a(f, g, m), 4293915773, o(r, S + 40), 15);
v(a(f, g, m), 2240044497, o(r, S + 4), 21);
v(a(f, g, m), 1873313359, o(r, S + 32), 6);
v(a(f, g, m), 4264355552, o(r, S + 60), 10);
v(a(f, g, m), 2734768916, o(r, S + 24), 15);
v(a(f, g, m), 1309151649, o(r, S + 52), 21);
v(a(f, g, m), 4149444226, o(r, S + 16), 6);
v(a(f, g, m), 3174756917, o(r, S + 44), 10);
v(a(f, g, m), 718787259, o(r, S + 8), 15);
v(a(f, g, m), 3951481745, o(r, S + 36), 21);
_ = E(_, p);
u = E(u, f);
h = E(h, g);
d = E(d, m);
}
return function(e, t, i, n) {
for (var a, o, r, s = "", c = 0, l = 0, _ = 3; _ >= 0; _--) {
c = 255 & (l = arguments[_]);
c <<= 8;
c |= 255 & (l >>>= 8);
c <<= 8;
c |= 255 & (l >>>= 8);
c <<= 8;
s += (o = void 0, r = void 0, o = ((a = c |= l >>>= 8) >>> 24).toString(16), r = (16777215 & a).toString(16), 
"00".substr(0, 2 - o.length) + o + "000000".substr(0, 6 - r.length) + r);
}
return s;
}(d, h, u, _).toLowerCase();
};
cc._RF.pop();
}, {} ],
MemoryPrintTool: [ function(e, t) {
"use strict";
cc._RF.push(t, "e4522hRgv1I/Lsoj15aGWis", "MemoryPrintTool");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
Global.registerEvent("MEM_PRINT", this.onEventPrint, this);
},
start: function() {},
print: function(e) {
var t = cc.loader._cache, i = 0, n = 0;
for (var a in t) if ("png" == t[a].type || "jpg" == t[a].type) {
var o = t[a];
if (cc.isValid(o, !0)) {
var r = o.url, s = (o.content.width * o.content.height * (r.indexOf(".jpg") > -1 ? 3 : 4) / 1024 / 1024).toFixed(2);
n += Number(s);
i += 1;
Number(s) > e && console.log(r + "大小:" + s);
}
}
console.log("文件总数" + i + "总内存:" + n);
},
onEventPrint: function(e) {
var t = 0;
e && e.detail && (t = e.detail);
this.print(t);
}
});
cc._RF.pop();
}, {} ],
MsgIdConfig: [ function(e, t) {
"use strict";
cc._RF.push(t, "35012kZycNNdJOF9b3ui5p7", "MsgIdConfig");
var i = e("MsgIdDef");
i.ALL_RANK_LIST = 243;
i.UPDATE_USER_INFO = 211;
i.BUY_USER_FRAME = 63;
i.REQU_GET_VIP_REWARD = 282;
i.REQU_CHARGE_VIP = 1062;
i.PULL_CHANGE_EXP = 1052;
i.PULL_LEVEL_UP_EXP = 1050;
i.NEW_NOTICE_MISSION_CUR_PROCESS = 1053;
i.CHANGE_LANGUAGE = 199;
i.CHANGE_BONUS_LIST = 1070;
i.CHAT_USER_INFO_UPDATE = 1091;
i.CHAT_NEW_MSG = 1092;
i.CHAT_LEAVE_ROOM = 424;
i.CHAT_SEND_MSG = 334;
i.CHAT_DEL_MSG = 1094;
i.CHAT_DELALL_MSG = 1095;
i.DIAMOND_TO_COIN = 429;
i.LIKE_OPR = 357;
i.RANK_THREE_DATA = 258;
i.REQ_SKIN_BAG = 415;
i.REQ_ROOM_PALYER_NUM = 311;
i.REQ_RANK_MAIN_VIEW = 460;
i.REQ_SHOP_FREE_REWARD = 264;
i.REQ_CHAT_FRIEND_EXIT = 271;
i.MAIL_REMOVE_ALL = 201;
i.MAIL_READ = 203;
i.VIP_DAILY_VIEW = 283;
i.REPORT_USER = 222;
i.GET_OFFLINE_REWARDS = 220;
i.WORLD_GIFT_BUY = 660;
i.USER_FEEDBAKC = 169;
i.USER_REPORT_CHAT = 223;
i.USER_NEW_GIFT = 168;
i.GET_ALL_VIP_REAWRDS = 152;
i.REQ_UPDATE_LEAGUE_EXP = 150;
i.GAME_RECORD = 700;
i.USE_PROP = 420;
i.PRIVATE_CHAT_LIST = 463;
i.SHARE_WHATSAPP_REPORT = 430;
i.TASK_COMPLETE_NOTIFY = 1070;
i.SALON_INCOME_RECORD = 505;
i.LEAGUE_CHANGE_NOTIFY = 1043;
i.TASK_SALON_CONFIG = 290;
i.TASK_SALON_REWARD = 291;
i.GAME_CONFIG = 333;
i.SALON_INVITE_CHAT = 335;
i.COUNTRY_TOP_CHANGE = 10355;
i.DELETE_FRIEND_RECORD = 469;
i.GET_NEWER_GIFT_REWARDS = 665;
i.GET_BANKRUPTCY_INFO = 149;
i.GET_BANKRUPTCY_REWARD = 151;
i.GET_PHONE_CODE = 135;
i.BIND_PHONE = 134;
i.BANK_CARD_VERIFY = 140;
i.BANK_CARD_GET = 141;
i.BANK_CARD_DEL = 144;
i.GET_PAY_RECORD = 142;
i.GET_WITHDRAW_RECORD = 143;
i.GET_BALANCE_RECORD = 800;
i.PIGGY_BANK_VIEW = 249;
i.PIGGY_BANK_NOTIFY = 100065;
i.LEAGUE_VIEW = 188;
i.LEAGUE_APPLY = 187;
i.LEAGUE_RECORD = 189;
i.LEAGUE_REWARD = 190;
i.LEAGUE_EXP_CHANGE = 100067;
i.LEAGUE_LEVEL_UP = 100068;
i.RP_VIEW = 312;
i.RP_REWARD = 313;
i.RP_VIEW_RULE = 314;
i.COUNTRY_RANK = 354;
i.COUNTRY_VOTE = 355;
i.SALON_GET_TEST = 336;
i.SALON_GET_INCOME = 506;
i.SALON_INVITE_APPLY = 192;
i.FRIEND_ROOM_CREATE = 500;
i.FRIEND_ROOM_JOIN = 501;
i.FRIEND_ROOM_INVITE = 503;
i.FRIEND_ROOM_BE_INVITE = 126201;
i.FRIEND_ROOM_INVITE_FEEDBACK = 126202;
i.FRIEND_ROOM_LIST = 175;
i.FRIEND_ROOM_LIST_CHANGE = 125620;
i.FRIEND_ROOM_LEAVE = 176;
i.FRIEND_ROOM_DISSOLVE = 504;
i.CHECK_DESK_INFO = 502;
i.ONLINE_ENTER_LONLINE = 185;
i.ONLINE_START_MATCH_ROOM = 170;
i.ONLINE_REC_MATCH_ROOM = 125618;
i.ONLINE_REQ_CANCLE_MATCH = 171;
i.VIP_ROOM_LIST = 175;
i.VIP_ROOM_LIST_CHANGE = 125620;
i.VIP_CREATE_ROOM = 172;
i.VIP_JOIN_ROOM = 173;
i.VIP_ROOM_MATCH_CHANGE = 125619;
i.VIP_EXIT_VIP_MATCH = 174;
i.VIP_DISMISS_ROOM = 125621;
i.VIP_FAST_JOIN = 177;
i.LEAGUE_ENTER_LEAGUE = 178;
i.LEAGUE_RECEIVE_AN_INVITATION = 125622;
i.LEAGUE_KICK_FRIEND = 180;
i.LEAGUE_GOT_KICKED = 125625;
i.LEAGUE_START_MATCH = 181;
i.LEAGUE_REC_MATCH_ROOM = 125618;
i.LEAGUE_REQ_CANCLE_MATCH = 171;
i.LEAGUE_RANKING_LIST = 242;
i.LEAGUE_TASK_LIST = 216;
i.LEAGUE_TASK_GET_REWARD = 217;
i.EXIT_MODULE = 176;
i.INVITE_FRIEND_JOIN_TEAM = 179;
i.KICK_TEAM_MEMBER = 180;
i.INVITATION_RESULT = 182;
i.QUIT_TEAM = 184;
i.TEAM_CHANGE_ENTER = 186;
i.FRIEND_LIST = 270;
i.SOCIAL_FRIEND_LIST = 270;
i.SOCIAL_FRIEND_MESSAGE_LIST = 452;
i.SOCIAL_FRIEND_REQUEST_LIST = 449;
i.SOCIAL_FRIEND_REQUEST_HANDLE = 448;
i.SOCIAL_FRIEND_HANDLE_ADD = 273;
i.SOCIAL_FRIEND_HANDLE_REMOVE = 274;
i.SOCIAL_FRIEND_HANDLE_RECOMMEND = 278;
i.SOCIAL_FRIEND_MSG_LIST = 453;
i.SOCIAL_FRIEND_MSG_SEND = 451;
i.SOCIAL_FRIEND_MSG_REV = 100203;
i.SOCIAL_RECENT_PLAYER_LIST = 450;
i.SOCIAL_SEARCH_USER = 468;
i.SOCIAL_SYSTEM_MESSAGE_LIST = 426;
i.SOCIAL_SYSTEM_MESSAGE_DELETE = 427;
i.SOCIAL_SYSTEM_MESSAGE_DELETE_ALL = 428;
i.GAME_SHARE_REWARD = 191;
i.EVENT_SIGN_CONFIG = 418;
i.EVENT_SIGN_REWARD = 419;
i.EVENT_VIP_SIGN_CONFIG = 416;
i.EVENT_VIP_SIGN_REWARD = 417;
i.EVENT_TASK_CONFIG = 216;
i.EVENT_TASK_REWARD = 217;
i.EVENT_TASK_MAIN_CONFIG = 342;
i.EVENT_TASK_MAIN_REWARD = 343;
i.EVENT_VIP_MAIN_CONFIG = 345;
i.EVENT_VIP_MAIN_REWARD = 346;
i.EVENT_BONUS_RECORD = 315;
i.EVENT_LOGIN_BONUS_CONFIG = 344;
i.EVENT_GET_NEW_PLAYER_CONFIG = 218;
i.EVENT_GET_NEW_PLAYER_REWARD = 219;
i.EVENT_GET_DAILYTASK_MAIN_REWARD = 221;
i.EVENT_RETURN_WATER_CONFIG = 194;
i.EVENT_RETURN_WATER_REWARD = 195;
i.EVENT_GET_RANK_INFO = 197;
i.EVENT_REGISTER_RANK_INFO = 198;
i.EVENT_GET_RANK_CONFIG = 200;
i.EVENT_GET_RANK_REWARDS_CFG = 207;
i.EVENT_ONLINE_WHEEL_CONF = 208;
i.EVENT_ONLINE_WHEEL_RESULT = 209;
i.EVENT_ONLINE_GET_STATE = 210;
i.EVENT_FB_SHARE_CONFIG = 240;
i.EVENT_FB_SHARE_SUCCESS = 241;
i.EVENT_FB_SHARE_REWARD = 247;
i.EVENT_FEEDBACK = 169;
i.EVENT_FB_INVITE_CONFIG = 254;
i.EVENT_FB_INVITE_REWARD = 255;
i.EVENT_FB_INVITE_REWARD_ALL = 256;
i.EVENT_FB_INVITE_BIND_CODE = 257;
i.REQ_REFFERS_LIST = 255;
i.REQ_REFFERS_REWARDS = 256;
i.REQ_REFFERS_DETAILS = 259;
i.REQ_REFFERS_LIST_DETAILS = 261;
i.REQ_REFFERS_REWARDS_DETAILS = 262;
i.CLUB_LIST_RECOMMEND = 471;
i.CLUB_LIST_RANK = 472;
i.CLUB_CREATE = 473;
i.CLUB_INFO = 474;
i.CLUB_APPLY = 475;
i.CLUB_LIST_APPLY = 476;
i.CLUB_HANDLE_APPLY = 477;
i.CLUB_HANDLE_REMOVE = 478;
i.CLUB_LIST_USER = 479;
i.CLUB_SIGN = 480;
i.CLUB_EXIT = 481;
i.CLUB_UPDATE_INFO = 482;
i.CLUB_ROOM_LIST = 483;
i.CLUB_ROOMT_CREATE = 484;
i.CLUB_ROOMT_JOIN = 485;
i.CLUB_ROOMT_INVITE = 486;
i.CLUB_ROOMT_BE_INVITE = 126102;
i.NOTIFY_CLUB_JOIN = 1080;
i.NOTIFY_CLUB_REMOVE = 1081;
i.EVENT_MENSA_CARD_INFO = 461;
i.EVENT_MENSA_CARD_TAKE_REWRAD = 462;
i.EVENT_MENSA_CARD_TASK_INFO = 463;
i.EVENT_MENSA_CARD_REFRESH_TASK = 464;
i.EVENT_MENSA_CARD_CMP_TASK = 465;
i.EVENT_MENSA_CARD_TAKE_ALL_REWRAD = 467;
i.USER_GIFT_SEND = 661;
i.USER_GIFT_SEND_LIST = 662;
i.USER_GIFT_GET_LIST = 663;
i.USER_GIFT_BROADCAST = 1042;
i.USER_EXCHANGE_CODE = 664;
i.GET_MATCH_CONFIG = 510;
i.ENTER_MATCH = 511;
i.GET_MATCH_INFO = 512;
i.PUll_MATCH_INFO = 100069;
i.END_MATCH = 100070;
i.GET_KNOCKOUT_CONFIG = 294;
i.GET_KNOCKOUT_INFO = 295;
i.REQ_KNOCKOUT_REGISTER = 296;
i.REQ_KNOCKOUT_JOIN = 297;
i.REQ_KNOCKOUT_READY = 1084;
i.REQ_KNOCKOUT_UPDATE = 1085;
i.REQ_KNOCKOUT_CHANGE = 1087;
i.REQ_KNOCKOUT_COUNT = 1088;
i.REQ_KNOCKOUT_OVER = 1089;
i.REQ_KNOCKOUT_LOSE = 1086;
i.REQ_KNOCKOUT_EXIT = 1090;
i.GET_RAND_USERS = 310;
i.YD_WITHDRAW_GET = 130;
i.YD_WITHDRAW_SAVE = 131;
i.YD_WITHDRAW_DRAW = 132;
i.YD_WITHDRAW_RECORD = 133;
i.YD_WITHDRAW_BANK_SUPPORT = 136;
i.BONUS_COIN_PRPPORTION = 260;
i.BONUS_COIN_INFO = 418;
i.BONUS_COIN_TRANSFER = 419;
i.REFER_INFO = 254;
i.REFER_BROADCAST_INFO = 267;
i.UPDATE_PINMSG = 100072;
i.LUCKYSPIN_RECORDS = 345;
i.BONUS_PROM_LIST = 362;
window.MsgId = i;
cc._RF.pop();
}, {
MsgIdDef: "MsgIdDef"
} ],
MsgIdDef: [ function(e, t) {
"use strict";
cc._RF.push(t, "c8460wa37hDmJVmIyKt6G6R", "MsgIdDef");
var i = cc.Class({
extends: cc.Component,
statics: {}
});
window.MsgId = i;
i.HEARTBEAT = 11, i.LOGIN = 1;
i.LOGIN_USERID = 2;
i.RELOGIN_USERID = 3;
i.REGET_DESKINFO = 4;
i.REGET_DESKINFO_2 = 5;
i.LOGIN_OUT = 12, i.SYNC_COIN = 29, i.ACCOUNT_DELETE = 1093;
i.UPDATE_FCMTOKEN = 390;
i.BIND_INVITE_CODE = 28;
i.PURCHASE_AGENT_LIST = 50;
i.PURCHASE_GOODS_LIST = 51;
i.FEEDBACK_COMMIT = 52;
i.MESSAGE_SYSTEM = 53;
i.MODIFY_INFO = 54;
i.IDENTITY_PERSONAL = 55;
i.TOTAL_RANK_LIST = 56;
i.HALL_SPEAKER_LIST = 59;
i.EMAIL_LIST = 60;
i.EMAIL_READ = 61;
i.PERSIONAL_INFO = 62;
i.EMAIL_RECEIVE = 63;
i.COMMIT_REPORT = 64;
i.AC_RESERVE_COIN = 72;
i.AC_RESERVE_TAKE_LIMIT = 73;
i.BIND_ACCOUNT = 74;
i.GET_BOUNS = 75;
i.GET_ONLINE_BOUNS_STATUS = 76;
i.GET_TASK_LIST = 77;
i.RECEIVE_REWARD = 78;
i.TODAY_RANK_LIST = 79;
i.ACTIVITY_LIST = 80;
i.ACTIVITY_GET_FIVE_STAR = 81;
i.ACT_COMMIT_FIVE_STAR = 82;
i.ACT_INVITE_GIFT_LIST = 83;
i.MODIFY_NICKNAME = 84;
i.SEND_CHAT = 85;
i.GET_CHAT_LIST = 86;
i.BIND_ACCOUNT_WX = 87;
i.BIG_CHARGE_ANGENT = 88;
i.BIG_CHARGE_BACKLIST = 89;
i.BIG_CHARGE_ORDER = 90;
i.BIG_CHARGE_REBACKWARD = 91;
i.BIG_CHARGE_REWARD_CORD = 92;
i.AGENT_REWARD_DATA = 93;
i.AGENT_REWARD_REBACKWARD = 94;
i.HALL_VERSOIN = 96;
i.AGENT_REWARD_STATIC = 97;
i.BANK_LOGIN = 100;
i.BANK_HALL_INFO = 101;
i.BANK_SAVE_COIN = 102;
i.BANK_TAKE_COIN = 103;
i.BANK_RECORD_LIST = 104;
i.BANK_MODIFY_PW = 105;
i.BANK_EXIT = 106;
i.BANK_TAKE_INGAME = 107;
i.NICKNAME_INCLUCE_ILLEGAL_CHARACTER = 1073;
i.NICKNAME_HAD_USED = 1074;
i.PURCHASE_GET_ORDER = 70;
i.PURCHASE_CHECK_ORDER = 71;
i.PURCHASE_RECHARGE_SUC = 1035;
i.REWARD_ONLINE = 1036;
i.TASK_FINISH_NOTICE = 1037;
i.POP_FIVE_STAR_NOTICE = 1038;
i.MONEY_CHANGED = 1010;
i.GAME_REMOTE_LOGIN = 1017;
i.GAME_NEED_RESTART = 801;
i.GAME_SESS_LIST = 30;
i.GAME_ROOM_LIST = 34;
i.GAME_CREATEROOM = 31;
i.GAME_JOINROOM = 32;
i.GAME_LEVELROOM = 40;
i.GAME_ENTER_MATCH = 43;
i.RELIEF_FUND = 99;
i.ENTER_CASINO = 120;
i.EXIT_CASINO = 121;
i.CHANGE_CASINO_COIN = 122;
i.NOTIFY_SYS_KICK_HALL = 100050;
i.NOTIFY_SYS_KICK_LOGIN = 100054;
i.GLOBAL_MAIL_NOTIFY = 100053;
i.GLOBAL_SPEAKER_NOTIFY = 100055;
i.GLOBAL_SYSTEM_NOTIFY = 100066;
i.SEND_CHAT_NOTICE = 100056;
i.PLAYER_LEAVE = 1016;
i.SYNC_PLAYER_INFO = 100057;
i.GAME_RECONNECT_DESKINFO = 99e3;
i.GAME_ENTER_BACKGROUND = 9900;
i.SCORE_LOG = 27;
i.MODIFY_PSW = 26;
i.GAME_LIST = 100059;
i.JACKTPOT_HALL = 121202;
i.JACKPOT_GAME = 121203;
i.NOTIFY_KICK = 100906;
i.REQ_REDPACK = 7100;
i.OPEN_REDPACK = 7101;
i.REQ_LUCKRAIN = 7102;
i.REQ_GROWUPDATA = 130;
i.REQ_LUCKBOX = 131;
i.REQ_LUCKBOX_REWARD = 132;
i.REQ_AGENT_INFO = 135;
i.REQ_TRANSFER = 142;
i.REQ_MODIFY_CHARGE_PSW = 136;
i.REQ_WITHDRAWAL = 137;
i.REQ_WITHDRAWAL_RECORD = 138;
i.REQ_AGENTLIST = 139;
i.REQ_TRANSFER_RECORD = 140;
i.REQ_FAV_CHANGE = 150;
i.RESET_PSW = 143;
i.ENTER_CASINO = 120;
i.EXIT_CASINO = 121;
i.CHANGE_CASINO_COIN = 122;
i.CAME_REDPACK_ALLSCENE = 1039;
i.ACTIVE_LUNPAN = 1018;
i.REQ_SHOP = 201;
i.REQ_MAIL_LIST = 202;
i.REQ_READ_MAIL = 203;
i.REQ_GET_MAIL_ATTACH = 204;
i.REQ_GET_LEVEL_GITFS = 214;
i.REQ_GET_ALL_MALL_ATTACH = 215;
i.REQ_GET_NEW_MAIL = 100053;
i.REQ_GET_ONLINE_COIN = 205;
i.REQ_ONLINE_REWARDS = 206;
i.REQ_GET_SPINE_CONF = 208;
i.REQ_GET_SPINE_RESULT = 209;
i.REQ_GET_TURNTABLE_STATE = 210;
i.REQ_SHOP_RET_SUCCESS = 211, i.REQ_GET_VIP_INFO = 212;
i.REQ_OPEN_GIFT = 213;
i.REQ_GET_DAILY_MISSION_LIST = 216;
i.REQ_GET_MISSION_REWARD = 217;
i.REQ_DAILY_MISSION_REMAIN_REWARD = 280;
i.REQ_GET_SIGNIN_LIST = 218;
i.REQ_GET_SIGIN_ACTION = 219;
i.REQ_SHOP_EX = 263;
i.REQ_SHOP_CONFIG = 333;
i.REQ_SKIN_SHOP = 421;
i.REQ_BUY_SKIN_SHOP_ITEM = 422;
i.REQ_GET_FBInfo = 240;
i.REQ_SHARE_SUCC = 241;
i.REQ_RANK = 242;
i.REQ_RANK_GET_WIN_COIN = 247;
i.REQ_MAIL_ADDZBMATCHINFO = 248;
i.REQ_GET_MONEYBANK = 249;
i.REQ_BIND_FACEBOOK = 244;
i.REQ_REPORT_STATISTICS = 245;
i.REQ_COLLECT_NEWERGIFT = 246;
i.REQ_LEVEL_UP_PARTY_INFO = 252;
i.REQ_LEVEL_UP_PARTY_AWARD = 253;
i.LEVEL_UP_PARTY_UPDATE_NOTICE = 100063;
i.REQ_FRIENDS_LIST = 270;
i.REQ_ADD_FRIENDS = 273;
i.REQ_DELETE_FRIENDS = 274;
i.RET_ADD_FRIENDS_NOTICE = 1059;
i.FRIEND_PRESENT = 271;
i.FRIEND_PRESENTALL = 272;
i.GET_JACKPOT = 276;
i.GET_JACKPOTALL = 277;
i.REQ_RECOMMENDLIST = 278;
i.REQ_COLLECT_BREAKGRANT_COIN = 151;
i.REQ_HUMMER_PRODUCT_LIST = 152;
i.COLLECT_BREAKGRANT_COIN_NOTICE = 1057;
i.REQ_MISSION_PASS_INFO = 257;
i.REQ_PURCHASE_LIST_INFO = 258;
i.REQ_COLLECT_MISSION_PASS_REWARD = 259;
i.REQ_COLLECT_MISSION_PASS_ALL_REWARD = 260;
i.REQ_REDEEM = 264;
i.SPORT_LIST = 160;
i.SPORT_JOIN = 161;
i.SPORT_RANKING = 162;
i.SPORT_CANCEL = 163;
i.PULL_LEVEL_UP_EXP = 1050;
i.PULL_CHANGE_EXP = 1052;
i.PULL_RED_NOTICE = 1019;
i.PULL_ADD_OL_MULTILE = 100064;
i.PULL_RANK_RESULT = 1054;
i.PULL_JACKPOT_OTHER = 1055;
i.PULL_ONETIMEONLY_DEL = 10056;
i.REQ_DOUBLE_XP = 250;
i.REQ_EVENT_OFFER_REWARD = 251;
i.REQ_PIGBANK_FREEOPEN = 256;
i.REQ_CH_MAILREWARD = 268;
i.REQ_CH_MAILREWARDALL = 269;
i.PULL_CH_MAILS_REDDOT = 1058;
i.PULL_CH_LESSCOIN_ACTIVELIST = 1060;
i.REQ_COLLECT_OFFLINE_REWARD = 220;
i.REQ_COLLECT_GROWTH_FUND = 279;
i.REQ_SUCCESS_GROWTH_FUND = 1061;
i.REQ_REFRESH_VIP = 1051;
i.REQ_QUEST_INFO_LOGINPOP = 319;
i.REQ_QUEST_INFO = 320;
i.REQ_QUEST_REWARD = 321;
i.REQ_WORLD_CHAT = 322;
i.REQ_CARDSHARE_CHAT = 323;
i.REQ_CARDSHARE_GIFT = 324;
i.REQ_HALL_TAB_BONUS = 281;
i.REQ_COLLECT_WEEK_MONTH_CARD = 282;
i.NOTICE_BUY_WEEK_MONTH_CARD_SUCCESS = 1062;
i.NOTIFY_BUY_HUMMER = 1063;
i.SAVE_GUIDE_ID = 284;
i.REQ_LUCKYSMASH_INFO = 285;
i.REQ_LUCKYSMASH_RECORD = 286;
i.REQ_LUCKYSMASH_CRUSH = 287;
i.REQ_OPEN_TRIAL_CARD = 288;
i.REQ_GET_TRIAL_CARD = 289;
i.REQ_CLUB_LIST = 290;
i.REQ_CLUB_DETAILS = 291;
i.REQ_CLUB_CREATE = 292;
i.REQ_DISSOLVE_CLUB = 293;
i.REQ_CHANGE_CLUB_INFO = 294;
i.REQ_APPLY_CLUB = 295;
i.REQ_DEAL_APPLY = 296;
i.REQ_DEAL_INVITE = 297;
i.REQ_EXIT_CLUB = 298;
i.REQ_DEL_CLUB_USER = 299;
i.REQ_CLUB_APPLY_LIST = 300;
i.REQ_CLUB_USER_INFO_LIST = 301;
i.REQ_CLUB_CHAT = 302;
i.REQ_CLUB_REWARDS = 303;
i.REQ_CLUB_GET_REWARD = 304;
i.REQ_CLUB_TASK = 305;
i.REQ_CLUB_TASK_GET_REWARD = 306;
i.REQ_CAN_APPLY_CLUB_LIST = 307;
i.REQ_CLUB_INVITE_OTHER = 308;
i.REQ_CLUB_INVITE_LIST = 309;
i.REQ_HEROCARD_LIST = 325;
i.REQ_HEROCARD_INFO = 326;
i.REQ_HEROCARD_UNLOCK = 327;
i.REQ_HEROCARD_ADD_STAR = 328;
i.REQ_HEROCARD_LEVEL_UP = 329;
i.REQ_HEROCARD_SUMMON = 362;
i.REQ_HEROCARD_SUMMON_DIAMOND = 364;
i.NOTIFY_HEROCARD_DROP = 1064;
i.REQ_HEROCARD_RANK = 374;
i.REQ_PVP_FIGHT = 375;
i.REQ_PVP_RANK = 376;
i.REQ_PVP_MATCH = 377;
i.REQ_PVP_SET_FORMATION = 378;
i.REQ_PVP_BUY_TICKET = 379;
i.REQ_PVP_RECORD = 383;
i.REQ_PVP_DETAIL = 384;
i.REQ_PVP_TEAM = 385;
i.REQ_BINGO_INFO = 330;
i.REQ_BINGO_SPIN = 331;
i.REQ_BINGO_RANK = 332;
i.NOTIFY_BINGO_BUFF_BUYED = 1066;
i.NOTIFY_BINGO_GIFT_BUYED = 1067;
i.REQ_EXPLORE_INFO = 366;
i.REQ_EXPLORE_SPIN = 367;
i.REQ_EXPLORE_OPENBOX = 368;
i.JOURNEY_CNT_GIFT_BUYED = 1072;
i.JOURNEY_COIN_GIFT_BUYED = 1073;
i.JOURNEY_STEP_GIFT_BUYED = 1074;
i.REQ_FRIEND_CHATRANK_BETINFO = 265;
i.REQ_FRIEND_CHATRANK_DOBET = 266;
i.FRIEND_COLLECTALL_DOUBLE = 360;
i.DOUBLE_WIN_COINS = 51;
i.PULL_MODIFY_LOCALVAL = 1021;
i.REQ_GIFT_SEND = 661;
i.REQ_GIFT_SENDLIST = 662;
i.REQ_GIFT_RECEIVELIST = 663;
i.PULL_GIFT_INFO = 1042;
i.REQ_LUCKYCARD_INFO = 350;
i.REQ_LUCKYCARD_ACTION = 351;
i.REQ_LUCKYCARD_TAKE = 352;
i.REQ_LUCKYCARD_RELIFE = 353;
i.REQ_LUCKYCARD_BUYLIST = 354;
i.PULL_LUCKYCARD_BUYSUCCESS = 1065;
i.PULL_LUCKYCARD_RESET = 1069;
i.REQ_GUIDETASK_REWARD = 341;
i.PULL_GUIDETASK_UPDATEINFO = 1068;
i.REQ_GUIDETASK_ADD_HEROCARD = 333;
i.REQ_SERVICES_INFO = 514;
i.REQ_GET_SHARE_WHEEL = 342;
i.REQ_SPIN_WHEEL = 343;
i.REQ_HEROPALACE = 358;
i.REQ_HEROPALACE_COLLECT = 359;
i.REQ_HEROPALACE_TICKET = 372;
i.REQ_BONUS_LISTINFO = 373;
i.REQ_GET_SIGN_INFO = 418;
i.REQ_GET_SIGN_ACTION = 419;
i.REQ_GET_SIGN_GIFT = 420;
i.REQ_SEND_FIRSTGIFT_COLLECT = 425;
i.REQ_SET_CARD_ACHIEVE = 335;
i.REQ_SET_CARD_REWARD = 337;
i.REQ_CARD_TASK_INFO = 334;
i.REQ_CARD_TASK_STATUS = 336;
i.REQ_CARD_TASK_REWARD = 338;
i.REQ_CARD_GET_WHEEL_INFO = 370;
i.REQ_CARD_PLAY_WHEEL = 371;
i.REQ_SYNC_HALLINFO = 349;
i.REQ_GET_MISSION_INFO = 344;
i.REQ_GET_MISSION_REWARDS = 345;
i.REQ_USE_MISSION_DIAMOND = 346;
i.REQ_GET_MISSION_LIVE = 347;
i.REQ_SET_MISSION_PROCESS = 1071;
i.REQ_NOTICE_REWARD_COLLECT = 348;
i.REQ_GET_CASHBACK_REWARDS = 365;
i.REQ_GET_TURNTABLE_TYPE = 207;
i.REQ_PRIVATE_GETCARD = 455;
i.REQ_PRIVATE_SENDCARD = 454;
i.REQ_PRIVATE_CHAT = 453;
i.REQ_PRIVATE_LIST = 452;
i.REQ_PRIVATE_SEND = 451;
i.REQ_PRIVATE_GET = 100203;
i.REQ_PRIVATE_RECCARD = 100204;
i.REQ_CDKEY = 664;
i.REQ_BONUS_MAINLISTINFO = 380;
i.REQ_BONUS_MAINLISTREWARD = 381;
i.REQ_BONUS_REDDOT_REWARDS = 382;
i.REQ_HALL_RANKTOP3 = 369;
i.REQ_ENTER_SAFE = 100;
i.REQ_SAFE_INFO = 101;
i.REQ_SAFE_SAVE = 102;
i.REQ_SAFE_TAKE = 103;
i.REQ_SAFE_RECORD = 104;
i.PULL_FREE_STATUE = 128e3;
i.PULL_BETTING_STATUE = 128001;
i.PULL_RESULT_STATUE = 128002;
i.PULL_OTHER_BET = 128003;
i.PULL_OBSERVERS_NUM = 128004;
i.PULL_CRASH_TAKEREWARD = 128005;
i.PULL_CRASH_FLY = 128006;
i.MSG_Cash_Out = 81;
i.PLACE_BET = 44;
i.REQ_LABAGAME_TOTAL_RANK = 1122;
i.REQ_LABAGAME_LIST = 1120;
i.PULL_TABLE_PLAYER = 126001;
i.LEFT_TABLE_PLAYER = 126011;
i.TABLE_BET_REQ = 37;
i.REQ_OBSER_LIST = 1121;
i.GAME_SWITCH_TABLE = 52;
i.PULL_SWITCH_TABLE = 1083;
cc._RF.pop();
}, {} ],
NavigationPageItem: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "0634diSxS5AvZa8iFBkK5ho", "NavigationPageItem");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.NavigationPageItemType = void 0;
var n, a = cc._decorator, o = a.ccclass, r = a.property, s = a.menu;
a.requireComponent;
(function(e) {
e[e.NODE = 1] = "NODE";
e[e.PREFAB = 2] = "PREFAB";
})(n = i.NavigationPageItemType || (i.NavigationPageItemType = {}));
var c = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.headNode = null;
t.bgNode = null;
t.cType = n.NODE;
t.pageNode = null;
t.pagePrefab = null;
t.pageOnLoad = !1;
t.btnSwtich = null;
t.isOpen = !1;
t.changeEvent = null;
return t;
}
t.prototype.onInit = function() {
this.btnSwtich.node.on("click", this.onSwitch, this);
if (this.cType == n.PREFAB && this.pagePrefab) {
this.pageNode = cc.instantiate(this.pagePrefab);
this.pageNode.active = this.pageOnLoad;
this.node.addChild(this.pageNode);
this.pageNode.x = 0;
}
this.pageNode && this.pageNode.on(cc.Node.EventType.SIZE_CHANGED, this.onPageNodeSizeChange, this);
this.reset();
};
t.prototype.reset = function() {
if (this.pageNode) {
this.pageNode.y = -1 * (this.pageNode.height * (1 - this.pageNode.anchorY) + this.headNode.height);
this.pageNode.active = !1;
}
this.node.height = this.headNode.height;
if (this.bgNode) {
this.bgNode.y = -this.headNode.height;
this.bgNode.height = 0;
this.bgNode.active = !1;
}
this.setSwitch(!1, 0);
};
t.prototype.onSwitch = function() {
this.isOpen = !this.isOpen;
this.setSwitch(this.isOpen);
};
t.prototype.setSwitch = function(e, t) {
void 0 === t && (t = .1);
this.isOpen = e;
this.pageNode && (e ? this.onOpenPage(t) : this.onClosePage(t));
cc.Component.EventHandler.emitEvents([ this.changeEvent ], this);
};
t.prototype.onOpenPage = function(e) {
var t = this;
if (this.bgNode) {
this.bgNode.active = !0;
this.bgNode.stopAllActions();
}
this.node.stopAllActions();
if (e <= 0) {
this.pageNode.active = !0;
this.bgNode && (this.bgNode.height = this.pageNode.height);
this.node.height = this.headNode.height + this.pageNode.height;
} else {
this.bgNode && cc.tween(this.bgNode).to(e, {
height: this.pageNode.height
}).start();
cc.tween(this.node).to(e, {
height: this.headNode.height + this.pageNode.height
}).call(function() {
t.pageNode && (t.pageNode.active = !0);
}).start();
}
};
t.prototype.onClosePage = function(e) {
var t = this;
this.pageNode && (this.pageNode.active = !1);
this.bgNode && this.bgNode.stopAllActions();
this.node.stopAllActions();
if (e <= 0) {
this.bgNode && (this.bgNode.height = 0);
this.node.height = this.headNode.height;
} else {
this.bgNode && cc.tween(this.bgNode).to(e, {
height: 0
}).call(function() {
t.bgNode.active = !0;
}).start();
cc.tween(this.node).to(e, {
height: this.headNode.height
}).start();
}
};
t.prototype.onPageNodeSizeChange = function() {
this.updateSize();
};
t.prototype.updateSize = function() {
this.isOpen && (this.node.height = this.headNode.height + this.pageNode.height);
};
__decorate([ r(cc.Node) ], t.prototype, "headNode", void 0);
__decorate([ r(cc.Node) ], t.prototype, "bgNode", void 0);
__decorate([ r({
type: cc.Enum(n)
}) ], t.prototype, "cType", void 0);
__decorate([ r({
type: cc.Node,
visible: function() {
return this.cType == n.NODE;
}
}) ], t.prototype, "pageNode", void 0);
__decorate([ r({
type: cc.Prefab,
visible: function() {
return this.cType == n.PREFAB;
}
}) ], t.prototype, "pagePrefab", void 0);
__decorate([ r({
visible: function() {
return this.cType == n.PREFAB;
}
}) ], t.prototype, "pageOnLoad", void 0);
__decorate([ r(cc.Button) ], t.prototype, "btnSwtich", void 0);
__decorate([ r(cc.Component.EventHandler) ], t.prototype, "changeEvent", void 0);
return __decorate([ o, s("UI/NavigationPageView") ], t);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {} ],
NavigationPageView: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "bc0f8dy90BEBagsmnTgutlD", "NavigationPageView");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("./NavigationPageItem"), a = cc._decorator, o = a.ccclass, r = a.property, s = a.menu, c = a.requireComponent, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.openPages = "";
return t;
}
t.prototype.addNavPage = function(e) {
var t = e.getComponent(n.default);
if (t) {
t.onInit();
t.reset();
e.parent = this.getComponent(cc.ScrollView).content;
}
};
t.prototype.onLoad = function() {
var e = this;
cc.log("NavigationPageView", "onLoad");
for (var t = this.getComponentsInChildren(n.default), i = 0, a = t; i < a.length; i++) a[i].onInit();
this.scheduleOnce(function() {
for (var i = 0, n = e.openPages.split(","); i < n.length; i++) {
var a = n[i], o = t[parseInt(a)];
o && o.setSwitch(!0, 0);
}
});
};
t.prototype.showPage = function(e) {
void 0 === e && (e = -1);
var t = this.getComponentsInChildren(n.default);
if (t[e]) {
var i = this.getComponent(cc.ScrollView);
i.content.getComponent(cc.Layout).updateLayout();
i.stopAutoScroll();
i.scrollToOffset(cc.v2(0, 0), .1);
}
for (var a = 0; a < t.length; a++) a == e ? t[a].setSwitch(!0, 0) : t[a].setSwitch(!1, 0);
};
__decorate([ r ], t.prototype, "openPages", void 0);
return __decorate([ o, c(cc.ScrollView), s("UI/NavigationPageView") ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {
"./NavigationPageItem": "NavigationPageItem"
} ],
NetCacheMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "a74a6pPiYpKzqFFhsL+mE6J", "NetCacheMgr");
cc.Class({
extends: cc.Component,
properties: {
_nStepInter: 0,
_cacheNormalList: [],
_bCacheHall: !1,
_sendNormalIdx: 0,
_popList: []
},
init: function() {
this._initPopListMsg();
},
isCacheHall: function() {
return this._bCacheHall;
},
setCacheHall: function(e) {
this._bCacheHall = e;
},
isPlayingGame: function() {},
isMsgIdInCacheList: function() {},
_initPopListMsg: function() {},
isMsgIdNeedPop: function(e) {
var t = !1;
if (e && this._popList) for (var i = 0; i < this._popList.length; i++) if (this._popList[i] == e) {
t = !0;
break;
}
return t;
},
onNetBack: function() {},
sendCacheMsg: function(e) {
var t = e.sendType;
e.cache = 1;
delete e.sendType;
1 == t ? cc.vv.NetManager.send(e, !0) : cc.vv.NetManager.sendAndCache(e);
},
update: function(e) {
if (this.isCacheHall() && this._cacheNormalList && this._cacheNormalList.length && !this._bSendNormalFinish) {
this._nStepInter += e;
if (this._nStepInter > .1) {
this._nStepInter = 0;
var t = this._cacheNormalList[this._sendNormalIdx];
this._sendNormalIdx++;
t ? this.sendCacheMsg(t) : this._bSendNormalFinish = !0;
}
}
}
});
cc._RF.pop();
}, {} ],
NetErrorCode: [ function(e, t) {
"use strict";
cc._RF.push(t, "f89ecZOFulJJq94nw9XQp0U", "NetErrorCode");
e("GlobalVar").code = {
201: "You are already registered.",
202: "You are not registered.",
203: "err_id_psw",
204: "The account has been registered by another player.",
205: "The two passwords are inconsistent.",
206: "Account contains sensitive words.",
207: "Name contains sensitive words.",
213: "err_psw",
208: "login_fail_again",
400: "call_back_error",
401: "Database error.",
402: "permission_denied",
403: "Authentication failed.",
404: "Reconnection expired.",
405: "login_fail_again",
406: "login_frequently",
407: "acc_online",
408: "Parsing protocbuf error.",
409: "user_already_exists",
410: "Operation error.",
411: "Role already exists.",
412: "Login restricted!Contact customer service for further assistance.",
422: "account_forbid",
450: "Sorry, not yet collectable.",
452: "aready_sign",
494: "You gave it today",
495: "You already received it today",
496: "Daily rewards have been collected.",
500: "login_fail_again",
501: "Material insufficient.",
502: "该用户已准备",
503: "游戏未开始",
504: "跟注错误",
505: "比牌失败",
506: "已经加入",
507: "已经加入",
508: "不能跟自己比牌",
509: "用户已退出",
510: "口令错误",
511: "游戏已经开始",
512: "游戏已经结束",
513: "房间人数已满",
514: "未设置底注",
515: "未在桌子上",
516: "看牌错误",
517: "加入错误",
518: "离开",
519: "the game is in progres",
520: "创建游戏信息有误",
606: "error_operate",
610: "coins_lack",
611: "您已经是庄家了",
612: "coins_lack",
613: "band_aren",
650: "Send too frequently",
710: "enter_game",
720: "房卡不足",
803: "system_maintenance_tips",
804: "金币不足",
805: "已经弃牌",
806: "跟注失败",
807: "下注金额错误",
811: "您金币足够多的，请进入更高级别的房间",
899: "庄家不能下注",
900: "庄已存在",
901: "没选庄",
902: "没下注",
903: "没准备",
904: "牌数据错误",
905: "出牌不在手牌中",
906: "不能执行此操作",
907: "没开启中途加入不能准备",
908: "没坐下",
909: "请等下一回合",
910: "下注方位错误",
911: "龙虎方位不能同时下注",
912: "超过允许的最大押注总额",
913: "房间不允许中途加入",
914: "用户未准备",
915: "未找到该座位用户",
916: "倍数超范围",
917: "底注超范围",
918: "离场金币错误",
919: "入场金币错误",
920: "类型错误",
921: "player not in room",
922: "Already sit down",
923: "房间人数已满",
924: "此座位已经有人",
925: "不是房主",
926: "有人没准备",
927: "Not enough players",
928: "服务器房间数不够",
929: "体验币不足",
930: "权限不足，无法创建!",
933: "暂未购买",
936: "金币不足，无法创建房间!",
940: "Failed to login Wechat.",
945: "Level insufficient, cannot unlock the game.",
964: "cant_reward_eventoffer",
965: "aready_reward_eventoffer",
8928: "出牌操作错误",
9929: "玩家已退出",
9930: "摊牌异常",
9931: "非房主不能执行该操作",
1e3: "房间数据异常",
1403: "You have already purchased！",
1404: "未找到该商品",
1405: "下单失败，请稍后再试",
1406: "您不能同时下注2个方位",
1407: "自己不能举报自己哟",
1408: "请补充完资料后再提交",
1409: "操作过于频繁，请歇一会再来",
1450: "操作失败，请稍后再试",
1051: "本轮投注额已满",
1052: "请勿重复提交",
1057: "您是庄家，不能下注哟",
1060: "Purchase failed",
1065: "只能在空闲时间内下庄哦",
1066: "当前档位金币不足",
1067: "此房间不允许中途加入哦",
1068: "Account verification failed!",
1069: "绑定账号获取用户信息失败",
1070: "This account is already bound.",
1071: "This Facebook account already exists.",
1072: "This task has not been completed.",
1073: "Illegal characters,please modify.",
1074: "Name already exists.",
1075: "Sending too frequently, please wait.",
1076: "No sending permission.",
1077: "金币不足，无法上庄，请充值！",
1080: "剩余金币须大于50万才能下注",
1081: "wait_next_round",
1082: "This account has already been bound Wechat,can not bind repeatedly.",
1083: "Failed to bound Wechat.",
1084: "Failed to bound Wechat,can not getting information.",
1085: "This Wechat account already exists.",
1387: "剩余金币须大于50万才能下注",
1089: "The task has been closed.",
1090: "只能在空闲时间内下庄哦",
1091: "庄家只能在空闲时间内退出",
10005: "Loading...",
10001: "subgame_is_over",
209: "param_nil",
210: "illegal_parameter",
211: "invalid_token",
416: "lock_5_second",
417: "lock_10_second",
418: "lock_20_second",
419: "lock_600_second",
420: "system_maintenance_tips",
421: "sub_account_prohibits",
950: "account_exist",
951: "email_exist",
952: "invalid_promoter_code",
953: "email_failed_to_send",
954: "invalid_pin",
955: "account_not_exits",
956: "commission_not_enough",
957: "password_error",
958: "transfer_failure",
959: "available_to_upline_and_downline",
960: "account_too_short",
961: "account_must_filled",
962: "password_must_filled",
963: "promoter_code_error",
214: "need_update",
490: "Friend not found",
946: "Please purchase first",
947: "You need to purchase first",
948: "Already collected!",
949: "Level insufficient",
2001: "Daily Facebook sharing rewards has been completed",
10000100: "No club.",
10000101: "Club doesn't exist.",
10000102: "Name is already taken.",
10000103: " Member reached maximum.",
10000104: "Player joined other club.",
10000105: "Member doesn't exist.",
10000106: " Already a member.",
10000107: "Club name cannot be empty."
};
cc._RF.pop();
}, {
GlobalVar: "GlobalVar"
} ],
NetListenerCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "b40f4UhvgZE7YKG/xxMAtSV", "NetListenerCmp");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var a = 0;
return function() {
return a >= e.length ? {
done: !0
} : {
done: !1,
value: e[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.listenerList = [];
},
registerMsg: function(e, t, i, n) {
var a = {
cmd: e,
fn: t,
target: i,
bHighpriority: n
};
cc.vv.NetManager.registerMsg(a.cmd, a.fn, a.target, a.bHighpriority);
this.listenerList.push(a);
},
onDestroy: function() {
this.clear();
},
clear: function() {
for (var e, t = i(this.listenerList); !(e = t()).done; ) {
var n = e.value;
cc.vv.NetManager.unregisterMsg(n.cmd, n.fn, n.bHighpriority, n.target);
}
this.listenerList = [];
}
});
cc._RF.pop();
}, {} ],
NetManagerEx: [ function(e, t) {
"use strict";
cc._RF.push(t, "26934JrPedK6Y54gVZEhkNw", "NetManagerEx");
cc.Class({
extends: e("NetManager"),
statics: {
getProjectLan: function() {
var e;
cc.vv.i18nManager && (e = cc.vv.i18nManager.getConfig().id);
return e;
},
printNetLog: function(e, t) {
if (Global.localVersion && 11 != t.c) {
if (245 == t.c) {
"Send" == e && cc.log("%c %s %o", "background: rgb(153,102,255);color:#fff;font-weight:bold;", "report >> " + t.act, t.ext);
return;
}
var i = "background: rgb(50,154,207);color:#fff;font-weight:bold;";
"Receive" == e && (i = "background: rgb(0,99,0);color:#fff;font-weight:bold;");
var n = JSON.stringify(t);
if (Global.isNative()) cc.log(e + ": ", n); else if (t.c_idx >= 0) cc.log("%c %s(%d): %o", i, "[" + t.c + "] " + e, t.c_idx, t); else if (null == t.c_idx) {
i = "background: rgb(255,102,255);color:#fff;font-weight:bold;";
e = "Notification";
cc.log("%c %s: %o", i, "[" + t.c + "] " + e, t);
}
}
},
showNetTipType: function(e) {
var t = this;
if (1 == e) {
if (cc.vv.SceneMgr) {
var i = cc.vv.SceneMgr.GetCurSceneName();
i != Global.SCENE_NAME.LAUNCH && i != Global.SCENE_NAME.HALL_PRELOAD && cc.vv.LoadingTip && cc.vv.LoadingTip.showNetErrorTip();
}
} else 2 == e && cc.loader.loadRes("BalootClient/BaseRes/prefabs/network_error", cc.Prefab, function(e, i) {
if (!e) {
cc.vv.LoadingTip.hide();
var n = cc.director.getScene();
if (!n.getChildByName("network_error")) {
var a = cc.instantiate(i);
a.parent = n;
a.getComponent("NetworkTip").showUI(function() {
t.reconnect();
});
}
}
});
},
handleCommonErrorCode: function(e, t) {
var i = this;
switch (e) {
case 415:
cc.vv.FloatTip.show(___("重连中..."));
break;

case 500:
cc.vv.FloatTip.show(___("网络错误"));
break;

case 538:
var n = t.minsvip, a = cc.js.formatStr("Upgrade your VIP level to VIP%s to enjoy the game", n);
cc.vv.AlertView.show(___(a), function() {
Global.dispatchEvent("OpenCharge");
}, function() {}, !1, null, null, null, "Upgrade Now");
break;

case 559:
case 425:
var o = ___("The game is under maintenance, please wait patiently!");
cc.vv.AlertView.showTips(o, function() {});
break;

case 560:
t.c == MsgId.GET_NEWER_GIFT_REWARDS || t.c == MsgId.EVENT_VIP_SIGN_REWARD ? cc.vv.AlertView.show(___("One more step to enjoy the game:Mobile number verify"), function() {
cc.vv.UserManager.kycUrl && cc.vv.PopupManager.addPopup("YD_Pro/prefab/Register", {
noTouchClose: !0
});
}, null, !1, null, null, null, ___("Verify Now")) : cc.vv.AlertView.show(___("One more step to enjoy the game:Mobile number verify"), function() {
cc.vv.UserManager.kycUrl && cc.vv.PopupManager.addPopup("YD_Pro/prefab/Register");
}, function() {}, !1, null, null, ___("Verify Later"), ___("Verify Now"));
break;

case 561:
cc.vv.AlertView.show(___("One more step to enjoy the game: Bank verify"), function() {
var e = cc.vv.UserManager.kycUrl;
e && cc.vv.PopupManager.showTopWin("YD_Pro/prefab/yd_charge", {
onShow: function(t) {
t.getComponent("yd_charge").setURL(e);
}
});
}, function() {}, !1, null, null, ___("Verify Later"), ___("Verify Now"));
break;

case 801:
cc.vv.AlertView.showTips(___("发现新版本，请点击更新按钮将游戏更新到最新的版本"), function() {
cc.audioEngine.stopAll();
cc.game.restart();
});
break;

case 802:
break;

case 803:
this.no_need_reconnect = !0;
Global.dispatchEvent(EventId.STOP_ACTION);
if (cc.director.getScene().name != Global.SCENE_NAME.LOGIN) cc.vv.SceneMgr.enterScene(Global.SCENE_NAME.LOGIN, function() {
i.close();
cc.vv.AlertView.showTips(___("系统维护期间无法登录"));
}); else {
this.close();
cc.vv.AlertView.showTips(___("系统维护期间无法登录"));
}
break;

case 804:
cc.vv.FloatTip.show(___("金币不足"));
t.gameChangeDesk && 1 == t.gameChangeDesk || cc.vv.EventManager.emit(EventId.NOT_ENOUGH_COINS);
break;

case 211:
Global.dispatchEvent(EventId.RELOGIN);
cc.vv.AlertView.showTips(___("自动登录已过期，请重新登录"), function() {
cc.vv.SceneMgr.enterScene(Global.SCENE_NAME.LOGIN, function() {
i.close();
});
});
break;

case 931:
break;

case 4005:
cc.vv.EventManager.emit(EventId.ENTER_HALL);
break;

default:
return !1;
}
return !0;
},
asyncSend: function(e) {
var t = this;
return new Promise(function(i) {
cc.vv.NetManager.registerMsg(e.c, function t(n) {
i(n);
cc.vv.NetManager.unregisterMsg(e.c, t);
});
t.send(e);
});
}
}
});
cc._RF.pop();
}, {
NetManager: "NetManager"
} ],
NetManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "cf88bwpkb1Blb7NwHCu7Dl2", "NetManager");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var a = 0;
return function() {
return a >= e.length ? {
done: !0
} : {
done: !1,
value: e[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
cc.Class({
extends: cc.Component,
statics: {
_address: "",
_hearBeatTimeout: 3e3,
_hearBeatInterval: 7e3,
_lastReplyInterval: 50,
_curReplyInterval: 0,
_ws: null,
_hearBeatIntervalIdx: null,
_lastHearBeatTime: 0,
_nextAutoConnectDelay: 0,
_autoConnectCount: 0,
_autoConnectCountMax: 2,
_curtime: 0,
_fnDisconnect: null,
_handlers: {},
_handlersHigh: {},
_Http: e("Http"),
_msgPack: e("msgpack.min"),
_idx: 0,
cacheList: [],
cacheIdxList: [],
notifyHandler: [],
init: function() {
var e = new Date();
this._curtime = e.getTime();
this._lastHearBeatTime = this._curtime;
},
registerMsg: function(e, t, i, n) {
if (null != e && null != e) if (null != t && null != t) {
var a = {
_fn: t,
_tgt: i
}, o = String(e);
if (n && "boolean" == typeof n) {
this._handlersHigh[o] = this._handlersHigh[o] || [];
for (var r = 0; r < this._handlersHigh[o].length; r++) {
var s = this._handlersHigh[o][r]._tgt;
if (this._handlersHigh[o][r]._fn === t && i === s) {
cc.warn("The Highcmd:" + e + "==>fn has registered!");
return;
}
}
this._handlersHigh[o].push(a);
} else {
this._handlers[o] = this._handlers[o] || [];
for (var c = 0; c < this._handlers[o].length; c++) {
var l = this._handlers[o][c]._fn, _ = this._handlers[o][c]._tgt;
if (l === t && i === _) {
cc.warn("The cmd:" + e + "==>fn has registered!");
return;
}
}
this._handlers[o].push(a);
}
} else AppLog.warn("fn must be not null and not undefined"); else AppLog.warn("cmd must be not null and not undefined");
},
findSameFuncAdrr: function(e, t) {
for (var i = 0, n = 0; n < e.length; ++n) t === e[n]._fn && ++i;
return i;
},
unregisterMsg: function(e, t, i, n) {
void 0 === i && (i = !1);
if (null != e && null != e) {
var a = String(e);
if (i && "boolean" == typeof i) if (t && "function" == typeof t && this._handlersHigh[a]) {
for (var o = this.findSameFuncAdrr(this._handlersHigh[a], t), r = 0; r < this._handlersHigh[a].length; r++) if (this._handlersHigh[a][r]._fn === t) {
if (!(o > 1)) {
AppLog.log("unregisterHighMsg: ", e, "=>function");
this._handlersHigh[a].splice(r, 1);
break;
}
if (null == n) AppLog.err("请传入需要注销的消息的target"); else if (this._handlersHigh[a][r]._tgt === n) {
AppLog.log("unregisterHighMsg: ", e, "=>function");
this._handlersHigh[a].splice(r, 1);
break;
}
}
} else {
AppLog.log("unregisterMsg: ", e);
delete this._handlersHigh[a];
} else if (t && "function" == typeof t && this._handlers[a]) {
var s = this.findSameFuncAdrr(this._handlers[a], t);
for (r = 0; r < this._handlers[a].length; r++) if (this._handlers[a][r]._fn === t) {
if (!(s > 1)) {
AppLog.log("unregisterHighMsg: ", e, "=>function");
this._handlers[a].splice(r, 1);
break;
}
if (null == n) AppLog.err("请传入需要注销的消息的target"); else if (this._handlers[a][r]._tgt === n) {
AppLog.log("unregisterHighMsg: ", e, "=>function");
this._handlers[a].splice(r, 1);
break;
}
}
} else {
AppLog.log("unregisterMsg: ", e);
delete this._handlers[a];
}
}
},
dispatchNetMsg: function(e) {
"string" == typeof e && (e = JSON.parse(e));
this.handleMsg(e);
Global.isNative() ? AppLog.log("客户端主动分发网络消息", JSON.stringify(e)) : cc.log("%c 客户端主动分发网络消息(%d): %o", "background: rgb(254,189,1);color:#9932cd;font-weight:bold;", 0, e);
},
handleMsg: function(e) {
if (e) {
this.cacheIdxList.indexOf(e.c_idx) < 0 && this.printNetLog("Receive", e);
var t = e.c;
cc.log("lookcmd---", t);
this.printNetLog("lookcmd--", e);
if (t) {
var i = String(t);
this._notifyMsgBack(i);
e.c != MsgId.HEARTBEAT && cc.vv.LoadingTip && this.hideNetTip();
var n = this._handlersHigh[i];
if (n) for (var a = n.length - 1; a >= 0; a--) if ((r = n[a])._tgt) {
if (1 == r._fn.bind(r._tgt)(Global.copy(e))) break;
} else if (1 == r._fn(Global.copy(e))) break;
var o = this._handlers[i];
if (!o) {
n || AppLog.warn("Received msg cmd:" + t + " has no handlers");
return;
}
for (a = o.length - 1; a >= 0; a--) {
var r;
if ((r = o[a])._tgt) {
if (1 == r._fn.bind(r._tgt)(Global.copy(e))) break;
} else if (1 == r._fn(Global.copy(e))) break;
}
if (200 != e.code && 2e4 != e.code && !this.handleCommonErrorCode(e.code, e)) {
203 === e.code && Global.dispatchEvent(EventId.RELOGIN);
var s = Global.code[e.code.toString()], c = s ? cc.vv.Language[s] : "error code:" + e.code.toString();
214 === e.code && cc.vv.AlertView.showTips(c || s, function() {
Global.dispatchEvent(EventId.STOP_ACTION);
cc.vv.NetManager.close();
Global.isNative() && cc.vv.SceneMgr.enterScene(Global.SCENE_NAME.HOTUPDATE);
}.bind(this));
if ([ 399, 934, 710 ].includes(e.code)) ; else {
cc.vv.FloatTip.show(c || s);
cc.log(c);
}
}
51 == t && e.coin && cc.vv.gameData.setCoins(e.coin, !0);
} else AppLog.warn("Received msg is has not the cmd！");
}
},
registerNotify: function(e) {
for (var t = !1, i = 0; i < this.notifyHandler.length; i++) if (this.notifyHandler[i] == e) {
t = !0;
break;
}
t || this.notifyHandler.push(e);
},
unregisterNotify: function(e) {
for (var t = 0; t < this.notifyHandler.length; t++) if (this.notifyHandler[t] == e) {
this.notifyHandler.splice(t, 1);
break;
}
},
_notifyMsgBack: function(e) {
for (var t = 0; t < this.notifyHandler.length; t++) {
var i = this.notifyHandler[t];
i && i(e);
}
},
handleCommonErrorCode: function(e) {
var t = this;
switch (e) {
case 415:
cc.vv.FloatTip.show(cc.vv.Language.reconnect);
break;

case 500:
cc.vv.AlertView.show(cc.vv.Language.login_fail_again, function() {}, function() {
Global.dispatchEvent(EventId.STOP_ACTION);
cc.vv.SceneMgr.enterScene(Global.SCENE_NAME.LOGIN, function() {
t.close();
});
});
break;

case 801:
cc.vv.AlertView.showTips(cc.vv.Language.new_ver, function() {
cc.audioEngine.stopAll();
cc.game.restart();
});
break;

case 803:
this.no_need_reconnect = !0;
Global.dispatchEvent(EventId.STOP_ACTION);
if (cc.director.getScene().name != Global.SCENE_NAME.LOGIN) cc.vv.SceneMgr.enterScene(Global.SCENE_NAME.LOGIN, function() {
t.close();
cc.vv.AlertView.showTips(cc.vv.Language.system_maintenance_tips);
}); else {
this.close();
cc.vv.AlertView.showTips(cc.vv.Language.system_maintenance_tips);
}
break;

case 804:
cc.vv.FloatTip.show(cc.vv.Language.not_enough_coins);
Global.dispatchEvent(EventId.NOT_ENOUGH_COINS);
break;

case 211:
Global.dispatchEvent(EventId.RELOGIN);
cc.vv.AlertView.showTips(cc.vv.Language.invalid_token, function() {
cc.vv.SceneMgr.enterScene(Global.SCENE_NAME.LOGIN, function() {
t.close();
});
});
break;

case 931:
break;

default:
return !1;
}
return !0;
},
handleResponeData: function(e) {
var t = this;
this._bReconnecting = null;
var i = function(e) {
for (var i = new DataView(e), n = (i.getUint8(0), i.getUint8(1), new Uint8Array(e.byteLength - 8)), a = 0; a < n.length; a++) n[a] = i.getUint8(8 + a);
var o = t._msgPack.decode(n);
t._lastHearBeatTime = t._curtime;
t.handleMsg(JSON.parse(o));
i = null;
n = null;
};
if (window.FileReader && e instanceof Blob) {
var n = new FileReader();
n.addEventListener("loadend", function() {
i(n.result);
});
n.readAsArrayBuffer(e);
} else {
AppLog.log("Not supported FileReader by your browser or devices");
i(e);
}
},
connect: function(e, t) {
var i = this;
this.no_need_reconnect = null;
this._address = e;
this._ws && this.close();
var n = "ws://", a = Global.isUserWSS(e);
a && (n = "wss://");
Global.isAndroid() && a ? this._ws = new WebSocket(n + this._address + "/ws", [], cc.url.raw("resources/common/cert.pem")) : this._ws = new WebSocket(n + this._address + "/ws");
this._ws.onopen = function(e) {
AppLog.log("socket " + i._address + " connect succeed");
i._autoConnectCount = 0;
t && !this.no_need_reconnect && t();
var n = !1;
e.target.url.indexOf(Global.loginServerAddress + "/ws") > -1 && (n = !0);
if (!n) {
AppLog.log("节点服，发心跳！");
i.hearBeat();
this._lastReplyInterval = 100;
}
};
this._ws.onmessage = function(e) {
i.handleResponeData(e.data);
};
this._ws.onerror = function() {
AppLog.err("socket connect error!");
AppLog.log("链接错误，5s后重连");
i._nextAutoConnectDelay = 5e3;
};
this._ws.onclose = function(e) {
AppLog.log(cc.js.formatStr("socket connect closed! url=%s,code=%s", e.target.url, e.code));
cc.log("close url" + e.target.url);
var t = !1;
e.target.url.indexOf(Global.loginServerAddress) > -1 ? t = !0 : i.stopHearBeat();
if (i._ws && !t && i._nextAutoConnectDelay <= 0) {
i._nextAutoConnectDelay = 1e3;
Global.dispatchEvent("SOCKET_BE_CLOSE");
AppLog.log("1秒后自动重连");
} else AppLog.log("链接断开，无任何处理！:" + i._nextAutoConnectDelay);
};
AppLog.log("连接服务" + this._address + "中...");
cc.vv.LoadingTip && cc.vv.LoadingTip.show();
},
close: function(e) {
AppLog.log("主动 close socket!");
if (this._ws) {
this._ws.close();
this.clearTimeoutReconnect();
}
e && e();
this._ws = null;
this.stopHearBeat();
},
reconnect: function() {
AppLog.log("发起重连!");
if (this.isConnect() && null != Global.playerData.uid) {
AppLog.log("连接没断开，直接发协议3");
this._hearBeatIntervalIdx || this.hearBeat();
}
},
isConnect: function() {
var e = this._ws && this._ws.readyState == WebSocket.OPEN;
Global.localVersion && !e && this._ws && cc.log("连接状态:", this._ws.readyState);
return e;
},
isNetAvailable: function() {
return !(!this.isConnect() || this._bReconnecting);
},
clearTimeoutReconnect: function() {
this._nextAutoConnectDelay = 0;
},
send: function(e, t) {
void 0 === t && (t = !1);
if (this.isConnect()) {
if (this._bReconnecting && cc.vv.NetCacheMgr && e && cc.vv.NetCacheMgr.isMsgIdNeedPop(e.c)) {
this.showNetErrorUI(e.c);
return;
}
if (null != e && "string" == typeof e && null == (e = JSON.parse(e)).c) {
AppLog.warn("The msg msgDic is lost cmd");
return !1;
}
e.c_ts = new Date().getTime();
e.c == MsgId.LOGIN && Global.isNative() && (e.x = md5(e.c_ts.toString() + "hero888"));
e.c_idx = this._idx++;
Global.playerData.uid && (e.uid = Global.playerData.uid);
var i = this.getProjectLan();
i && (e.language = i);
e.cache || this.printNetLog("Send", e);
var n = this.pack(JSON.stringify(e)), a = this.generateHead(n), o = this.linkHeadBody(a, n);
this._ws.send(o);
o = null;
!t && cc.vv.LoadingTip && cc.vv.LoadingTip.showNetErrorTip(!0);
return !0;
}
this.showNetErrorUI(e.c);
return !1;
},
getProjectLan: function() {
return Global.language;
},
printNetLog: function(e, t) {
if (Global.localVersion && 11 != t.c) {
var i = JSON.stringify(t);
cc.log(e + ": ", i);
}
},
requestHttp: function(e, t, i, n, a, o, r) {
void 0 === a && (a = "GET");
void 0 === o && (o = !0);
void 0 === r && (r = 1e4);
this._Http.sendReq(e, t, i, n, a, o, r);
},
requestHttpPost: function(e, t, i, n, a, o, r) {
void 0 === a && (a = "POST");
void 0 === o && (o = !0);
void 0 === r && (r = 1e4);
this._Http.sendReqPost(e, t, i, n, a, o, r);
},
pack: function(e) {
return this._msgPack.encode(e);
},
generateHead: function(e) {
var t = e.length, i = Global.jsToCByShort(t), n = Global.jsToCByInt(Math.floor(this._curtime / 1e3));
return "" + i + this.getCheckSum(e, t) + n;
},
linkHeadBody: function(e, t) {
for (var i = e.length, n = t.length, a = new Uint8Array(i + n), o = 0; o < i; o++) a[o] = e.charCodeAt(o);
for (o = 0; o < n; o++) a[i + o] = t[o];
return a;
},
getCheckSum: function(e, t) {
var i, n = t;
i = n < 128 ? Global.srcSum(e, n) : Global.srcSum(e, 128);
return Global.jsToCByShort(i);
},
updateTimer: function(e) {
if (this._address) {
this._curtime += e;
if (this._address.length > 0 && this._hearBeatIntervalIdx && this._curtime - this._lastHearBeatTime > this._hearBeatInterval + this._hearBeatTimeout) {
AppLog.log("【超时重连】当前时间:" + this._curtime + "上次时间:" + this._lastHearBeatTime);
this._bReconnecting || StatisticsMgr.httpReport(StatisticsMgr.HTTP_NET_TIMEOUT);
this._bReconnecting = !0;
this.reconnect();
this._lastHearBeatTime = this._curtime;
} else {
this._nextAutoConnectDelay -= e;
if (0 == this._nextAutoConnectDelay) {
this._autoConnectCount++;
AppLog.log("【自动重连次数】次数:" + this._autoConnectCount + "总次数:" + this._autoConnectCountMax);
if (this._autoConnectCount >= this._autoConnectCountMax) this.showNetErrorUI(); else {
AppLog.log("【自动重连】剩余时间:" + this._nextAutoConnectDelay);
this.reconnect();
}
} else this._curReplyInterval += e;
}
}
},
showNetErrorUI: function(e) {
var t = !1;
cc.vv.NetCacheMgr && (t = cc.vv.NetCacheMgr.isPlayingGame());
t ? this.showNetTipType(2) : cc.vv.NetCacheMgr.isMsgIdNeedPop(e) ? this.showNetTipType(2) : null != cc.vv.UserManager.uid && 0 != cc.vv.UserManager.uid || this.showNetTipType(2);
},
showNetTipType: function(e) {
var t = this;
1 == e ? cc.vv.LoadingTip && cc.vv.LoadingTip.showNetErrorTip() : 2 == e && cc.loader.loadRes("CashHero/prefab/network_error", cc.Prefab, function(e, i) {
if (!e) {
cc.vv.LoadingTip.hide();
var n = cc.director.getScene();
if (!n.getChildByName("network_error")) {
var a = cc.instantiate(i);
a.parent = n;
a.getComponent("NetworkTip").showUI(function() {
t.reconnect();
});
}
}
});
},
hideNetTip: function() {
cc.vv.LoadingTip.hide();
var e = cc.director.getScene().getChildByName("network_error");
e && e.destroy();
},
kickToHall: function() {
cc.vv.AlertView.show(cc.vv.Language.login_fail_again, function() {
cc.vv.EventManager.emit(EventId.ENTER_HALL);
});
},
checkNeedGoLoginUI: function() {
cc.director.getScene().name, Global.SCENE_NAME.LOGIN;
},
hearBeat: function() {
if (this.isConnect()) {
this.stopHearBeat();
this.registerMsg(MsgId.HEARTBEAT, this.pong.bind(this));
this._lastHearBeatTime = this._curtime;
this._hearBeatIntervalIdx = setInterval(this.ping.bind(this), this._hearBeatInterval);
} else AppLog.warn("未连接到websocket，无需发心跳！");
},
stopHearBeat: function() {
if (this._hearBeatIntervalIdx) {
clearInterval(this._hearBeatIntervalIdx);
this._hearBeatIntervalIdx = null;
this.unregisterMsg(MsgId.HEARTBEAT);
this._curReplyInterval = 0;
this._lastReplyInterval = 520;
}
},
ping: function() {
this._curReplyInterval = 0;
this.send({
c: MsgId.HEARTBEAT
}, !0);
},
pong: function() {
this._lastHearBeatTime = this._curtime;
this._lastReplyInterval = .2 * this._lastReplyInterval + .8 * this._curReplyInterval;
this._curReplyInterval > 500 && setTimeout(this.ping.bind(this), 2e3);
},
getNetworkInterval: function() {
return this._lastReplyInterval;
},
getNetworkLevel: function() {
var e = 0;
this._lastReplyInterval <= 100 ? e = 3 : this._lastReplyInterval <= 500 ? e = 2 : this._lastReplyInterval <= 1e3 && (e = 1);
return e;
},
sendAndCache: function(e, t, i) {
void 0 === t && (t = !0);
void 0 === i && (i = !1);
var n = this.getCacheObj(e);
if (!n) {
n = {
parm: Global.copy(e)
};
this.cacheList.push(n);
n.callback = function(e) {
200 == e.code && (e.spcode && e.spcode > 0 || n.c_idx == e.c_idx && (n.msg = Global.copy(e)));
};
this.registerMsg(n.parm.c, n.callback, this, !0);
}
n.c_idx = this._idx;
if (i) {
e.cache = 1;
this.cacheIdxList.push(n.c_idx);
}
this.send(e, t);
if (n.msg) {
Global.isNative() || cc.log("%c cache(%d): %o", "background: rgb(51, 255, 102);color:#9932cd;font-weight:bold;", n.c_idx, n.msg);
n.msg.c_idx = -1;
this.handleMsg(n.msg);
}
},
getMsgInCache: function() {},
getCacheObj: function(e) {
for (var t, n = i(this.cacheList); !(t = n()).done; ) {
var a = t.value;
if (this.isObjectValueEqual(e, a.parm)) return a;
}
return null;
},
isObjectValueEqual: function(e, t) {
var i = Object.getOwnPropertyNames(e), n = Object.getOwnPropertyNames(t);
if (i.length != n.length) return !1;
for (var a = 0; a < i.length; a++) {
var o = i[a], r = e[o], s = t[o];
if ("object" == typeof r) return !!this.isObjectValueEqual(r, s);
if (r !== s) return !1;
}
return !0;
},
hasCache: function(e) {
var t = this.getCacheObj(e);
return !(!t || !t.msg);
},
cache: function(e) {
this.hasCache(e) || this.sendAndCache(e, !0, !0);
}
}
});
cc._RF.pop();
}, {
Http: "Http",
"msgpack.min": "msgpack.min"
} ],
NodeLifeCallBack: [ function(e, t) {
"use strict";
cc._RF.push(t, "8e0d1TLORNGJLTD2Kd4B5Jl", "NodeLifeCallBack");
cc.Class({
extends: cc.Component,
properties: {
_destroyCall: null,
_startCall: null,
_disableCall: null
},
onLoad: function() {},
start: function() {
cc.isValid(this._startCall) && this._startCall();
},
onDestroy: function() {
cc.isValid(this._destroyCall) && this._destroyCall();
},
onDisable: function() {
cc.isValid(this._disableCall) && this._disableCall();
},
setStartCall: function(e) {
this._startCall = e;
},
setDestroyCall: function(e) {
this._destroyCall = e;
},
setDisableCall: function(e) {
this._disableCall = e;
}
});
cc._RF.pop();
}, {} ],
PH_NetCacheMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "2f34bok2+BMgoslbvYzj3Z4", "PH_NetCacheMgr");
cc.Class({
extends: e("NetCacheMgr"),
properties: {},
_initPopListMsg: function() {
this._popList = [];
this._popList.push(MsgId.PURCHASE_GET_ORDER);
Global.isYDApp() || this._popList.push(MsgId.DIAMOND_TO_COIN);
this._popList.push(MsgId.REQ_BUY_SKIN_SHOP_ITEM);
this._popList.push(MsgId.FRIEND_ROOM_CREATE);
this._popList.push(MsgId.VIP_FAST_JOIN);
this._popList.push(MsgId.UPDATE_USER_INFO);
this._popList.push(MsgId.GAME_ENTER_MATCH);
this._popList.push(MsgId.EVENT_VIP_SIGN_REWARD);
this._popList.push(MsgId.EVENT_SIGN_REWARD);
this._popList.push(MsgId.EVENT_ONLINE_WHEEL_RESULT);
this._popList.push(MsgId.EVENT_TASK_REWARD);
this._popList.push(MsgId.EVENT_TASK_MAIN_REWARD);
this._popList.push(MsgId.CHAT_SEND_MSG);
this._popList.push(MsgId.FRIEND_ROOM_JOIN);
this._popList.push(MsgId.USER_GIFT_SEND);
},
isPlayingGame: function() {
return !!cc.vv.gameData;
}
});
cc._RF.pop();
}, {
NetCacheMgr: "NetCacheMgr"
} ],
PlatformApi: [ function(e, t) {
"use strict";
cc._RF.push(t, "92b32peJvBENoEZp4tchEkE", "PlatformApi");
cc.Class({
extends: cc.Component,
statics: {
_callbackDic: null,
_cbDataList: null,
_orientation: "portrait",
_backPressedCall: null,
_IOS_CLASS_NAME: "PlatformIosApi",
_AND_CLASS_NAME: "org/cocos2dx/javascript/PlatformAndroidApi",
init: function() {
var e = this;
this._orientation = Global.APP_ORIENTATION;
Global.isAndroid() && this.addCallback(function() {
e._backPressedCall && e._backPressedCall();
}, "BackPressedCallback");
this.addCallback(this.onGoogleAdIdRead.bind(this), "onGoogleAdIdRead");
},
getAppVersion: function() {
if (Global.isNative()) return this.callPlatformApi("getAppVersion", "()Ljava/lang/String;");
AppLog.warn("Browser call Function [getAppVersion]");
return "1.0.0";
},
getLocale: function() {
return Global.isNative() ? this.callPlatformApi("getlocale", "()Ljava/lang/String;") : "IN";
},
gps_adid: function() {
return Global.isNative() ? this.callPlatformApi("gps_adid", "()Ljava/lang/String;") : "1.0.0";
},
getTxtFromClipboard: function() {
if (Global.isNative()) return this.callPlatformApi("getTxtFromClipboard", "()Ljava/lang/String;");
AppLog.warn("Browser call Function [getTxtFromClipboard]");
return "";
},
setTxtToClipboard: function(e) {
Global.isNative() ? this.callPlatformApi("setTxtToClipboard", "(Ljava/lang/String;)V", e) : AppLog.warn("Browser call Function [setTxtToClipboard]");
},
firebaseLog: function(e) {
Global.isNative() ? this.callPlatformApi("firebaseLog", "(Ljava/lang/String;)V", e) : AppLog.warn("Browser call Function [firebaseLog]");
},
firebaseEvent: function(e, t) {
if (e) {
var i = {};
i.eventName = e;
t && (i.data = t);
cc.log("firebaseEvent", i, JSON.stringify(i));
Global.isNative() && this.callPlatformApi("firebaseEvent", "(Ljava/lang/String;)V", JSON.stringify(i));
} else AppLog.warn("firebaseSetUserProperty need eventName !");
},
firebaseSetUserProperty: function(e) {
e ? Global.isNative() ? this.callPlatformApi("firebaseSetUserProperty", "(Ljava/lang/String;)V", JSON.stringify(e)) : AppLog.warn("Browser call Function [firebaseSetUserProperty]") : AppLog.warn("firebaseSetUserProperty need param !");
},
getOpenAppUrlDataStr: function() {
if (Global.isNative() && cc.sys.isMobile) return this.callPlatformApi("getOpenAppUrlDataString", "()Ljava/lang/String;");
cc.sys.isBrowser && AppLog.warn("Browser call Function [getOpenAppUrlDataStr]");
return null;
},
clearOpenAppUrlDataStr: function() {
Global.isNative() ? this.callPlatformApi("clearOpenAppUrlDataString", "()V") : AppLog.warn("Browser call Function [clearOpenAppUrlDataStr]");
},
openRating: function() {
if (Global.isNative()) return this.callPlatformApi("openRating", "()Z");
AppLog.warn("Browser call Function [openRating]");
return !1;
},
loadReview: function() {
Global.isAndroid() ? this.callPlatformApi("loadReviewComment", "()V") : this.openRating();
},
setIosClassName: function(e) {
this._IOS_CLASS_NAME = e;
},
setAndroidClassName: function(e) {
this._AND_CLASS_NAME = e;
},
setBackPressCall: function(e) {
this._backPressedCall = e;
},
getBatteyLevel: function() {
if (Global.isNative()) return this.callPlatformApi("getBatteyLevel", "()F");
AppLog.warn("Browser call Function [getBatteyLevel]");
},
openURL: function(e) {
cc.sys.openURL(e);
},
callPhone: function(e) {
Global.isNative() && this.callPlatformApi("callPhone", "(Ljava/lang/String;)V", e);
},
getPackageName: function() {
console.log("getAPPBundleId ....");
return Global.isNative() ? this.callPlatformApi("getAPPBundleId", "()Ljava/lang/String;") : "";
},
getCodeByPkgName: function() {
return 0;
},
isFirebaseSupported: function() {
return !1;
},
fbLogin: function(e) {
if (Global.isNative()) {
this.callPlatformApi("fbSdkLogin", "()V");
this.addCallback(e, "fbLoginCb");
} else AppLog.warn("Browser call Function [SdkLogin]");
},
fbLoginOut: function() {
Global.isNative() ? this.callPlatformApi("fbSdkLoginOut", "()V") : AppLog.warn("Browser call Function [SdkLoginOut]");
},
fbShare: function(e, t) {
if (Global.isNative()) {
this.callPlatformApi("fbSdkShare", "(Ljava/lang/String;)V", e);
this.addCallback(t, "shareSdkCallback");
} else AppLog.warn("Browser call Function [SdkShare]");
},
OpenFB: function(e) {
if (Global.isNative()) return this.callPlatformApi("OpenFB", "(Ljava/lang/String;)Z", e);
AppLog.warn("Browser call Function [OpenFB]");
},
FBFriendsInApp: function(e) {
if (Global.isNative()) {
this.callPlatformApi("FbFriendsInApp", "()V");
this.addCallback(e, "FbFriendsInAppCallback");
} else AppLog.warn("Browser call Function [SdkShare]");
},
isInstallFBApp: function() {
if (Global.isNative()) return this.callPlatformApi("isInstallFB", "()I");
AppLog.warn("Browser call Function [isInstallFB]");
},
SdkQueryAllSKU: function(e) {
Global.isNative() ? this.callPlatformApi("queryAllSKU", "(Ljava/lang/String;)V", e) : AppLog.warn("Browser call Function [SdkQueryAllSKU]");
},
startConnectBillingService: function() {
Global.isNative() && Global.isAndroid() && this.callPlatformApi("startConnectBillingService", "()V");
},
SdkPay: function(e) {
if (Global.isNative()) {
var t = "SdkPay";
Global.isIOS() && (t = "IosZF");
this.callPlatformApi(t, "(Ljava/lang/String;)V", e);
} else AppLog.warn("Browser call Function [IosZF]");
},
SdkDelOrderCache: function(e) {
if (Global.isNative()) {
var t = "SdkPayResult";
Global.isIOS() && (t = "IosZFResult");
this.callPlatformApi(t, "(Ljava/lang/String;)V", e);
} else AppLog.warn("Browser call Function [SdkDelOrderCache]");
},
SdkReplaceOrder: function(e) {
if (Global.isNative()) {
var t = "SdkPayReplacement";
Global.isIOS() && (t = "IosZFReplacement");
this.callPlatformApi(t, "(Ljava/lang/String;)V", e);
} else AppLog.warn("Browser call Function [SdkReplaceOrder]");
},
GetFMCToken: function() {
if (Global.isAndroid()) return this.callPlatformApi("getFMCToken", "()Ljava/lang/String;");
},
ReGetFMCToken: function() {
Global.isAndroid() && this.callPlatformApi("reGetFMCToken", "()V");
},
GetChannelStr: function() {
if (Global.isAndroid()) return this.callPlatformApi("getChannelstr", "()Ljava/lang/String;");
AppLog.warn("Browser call Function [getChannelstr]");
},
GetChannelExStr: function() {
if (Global.isAndroid()) return this.callPlatformApi("getChannelExStr", "()Ljava/lang/String;");
AppLog.warn("Browser call Function [getChannelExStr]");
},
Copy: function(e) {
this.setTxtToClipboard(e);
},
Paste: function() {
return this.getTxtFromClipboard();
},
SaveToAlumb: function(e) {
if (Global.isNative()) return this.callPlatformApi("SaveToAlumb", "(Ljava/lang/String;)I", e);
AppLog.warn("Browser call Function [SaveToAlumb]");
},
SaveUrlToAlumb: function(e) {
if (Global.isNative()) return this.callPlatformApi("SaveUrlToAlumb", "(Ljava/lang/String;)I", e);
AppLog.warn("Browser call Function [SaveUrlToAlumb]");
},
IsCloner: function() {
if (Global.isAndroid()) return this.callPlatformApi("isCloner", "()I");
AppLog.warn("Browser call Function [isCloner]");
},
getDeviceId: function() {
return Global.isNative() ? this.callPlatformApi("getDeviceId", "()Ljava/lang/String;") : "0";
},
getGSFId: function() {
if (Global.isAndroid()) return this.callPlatformApi("getGSFId", "()Ljava/lang/String;");
},
getSimcardid: function() {
if (Global.isAndroid()) return this.callPlatformApi("getSimacardid", "()Ljava/lang/String;");
},
getSimOperator: function() {
if (Global.isAndroid()) return this.callPlatformApi("getSimOperator", "()Ljava/lang/String;");
},
requestContracts: function() {
if (Global.isAndroid()) return this.callPlatformApi("requestContracts", "()V");
},
getContracts: function() {
if (Global.isAndroid()) return this.callPlatformApi("getContracts", "()Ljava/lang/String;");
},
getDeviceBrand: function() {
return Global.isNative() ? this.callPlatformApi("getDeviceBrand", "()Ljava/lang/String;") : "web";
},
getDeviceOpSysVision: function() {
return Global.isNative() ? this.callPlatformApi("getDeviceOpSysVision", "()Ljava/lang/String;") : "web";
},
closeSplash: function() {
Global.isNative() && this.callPlatformApi("closeSpalsh", "()V");
},
deviceShock: function(e) {
void 0 === e && (e = 500);
Global.isNative() && this.callPlatformApi("phoneShock", "(Ljava/lang/String;)V", "" + e);
},
setAppIconBadgeNumber: function(e) {
Global.isIOS() ? this.callPlatformApi("closeSpalsh", "(Ljava/lang/String;)V", JSON.stringify({
badgeNum: e
})) : AppLog.warn("Only IOS can call Function [setAppIconBadgeNumber]");
},
getDeviceToken: function() {
return Global.isIOS() ? this.callPlatformApi("getDeviceToken", "()Ljava/lang/String;") : "0";
},
GPCheckUnComsumerOrder: function() {
Global.isAndroid() && this.callPlatformApi("gpCheckOwned", "()V");
},
startGoogleLogin: function(e) {
if (Global.isNative()) {
this.addCallback(e, "googleLoginCallback");
this.callPlatformApi("googleLogin", "()V");
} else AppLog.warn("Browser call Function [startGoogleLogin]");
},
isHuaweiServerAvailble: function() {
if (Global.isAndroid()) return this.callPlatformApi("isHuaweiServerAvailble", "()I");
AppLog.warn("Browser call Function [isHuaweiServerAvailble]");
},
doHuaweiLogin: function(e, t) {
if (Global.isAndroid()) {
this.addCallback(e, "HuaweiLoginCallback");
this.callPlatformApi("doHuaweiLogin", "(I)V", t);
}
},
doHuaweiPayComsumerOrder: function(e) {
Global.isAndroid() && e && this.callPlatformApi("doHuaweiPayComsumerOrder", "(Ljava/lang/String;)V", e);
},
doHuaweiTrackEvent: function(e) {
if (Global.IsHuawei() && e) {
var t = JSON.stringify(e);
this.callPlatformApi("doHuaweiTrackEvent", "(Ljava/lang/String;)V", t);
}
},
startAppleLogin: function(e) {
if (Global.isIOS()) {
this.addCallback(e, "appleLoginCallback");
this.callPlatformApi("appleSignIn", "()V");
} else AppLog.warn("Browser call Function [startAppleLogin]");
},
KoSDKTrackEvent: function(e, t) {
var i = {};
i.EventName = e;
i.EventValue = t;
if (Global.isNative() && i) {
var n = JSON.stringify(i);
this.callPlatformApi("KoTrackEvent", "(Ljava/lang/String;)V", n);
}
},
GetKoUUID: function() {
if (Global.isNative()) return this.callPlatformApi("getKoTrackUUID", "()Ljava/lang/String;");
},
showAdmobReward: function(e) {
if (Global.isNative()) {
this.addCallback(e, "ShowAdmobCallback");
this.callPlatformApi("loadAdMobRewardAd", "()V");
} else AppLog.warn("Browser call Function [showAdmobReward]");
},
showAdmobBanner: function(e, t) {
if (Global.isNative()) if (e) {
var i = JSON.stringify(t);
AppLog.warn("bannerad:" + i);
Global.isAndroid() ? this.callPlatformApi("loadAdmobBannerAd", "(Ljava/lang/String;)V", i) : this.callPlatformApi("showAdmobBannerAd", "(Ljava/lang/String;)V", i);
} else this.callPlatformApi("hideAdmobBannerAd", "()V"); else AppLog.warn("Browser call Function [showAdmobBanner]");
},
setOrientation: function(e) {
if ("portrait" != e && "landscape" != e) return !1;
if (e == this._orientation) return !1;
this._orientation = e;
Global.isNative() && this.callPlatformApi("setOrientation", "(Ljava/lang/String;)V", e);
var t = cc.view.getFrameSize();
if ("portrait" == e) {
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
t.width > t.height && cc.view.setFrameSize(t.height, t.width);
} else if ("landscape" == e) {
cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
t.height > t.width && cc.view.setFrameSize(t.height, t.width);
}
window.dispatchEvent(new cc.Event.EventCustom("resize", !0));
return !0;
},
changeAppIcon: function(e) {
if (Global.isNative()) return this.callPlatformApi("changeAppIconWithName", "(Ljava/lang/String;)V", e);
},
OpenTakephoto: function(e, t) {
if (Global.isNative()) {
this.addCallback(t, "TakePhotoCallback");
return this.callPlatformApi("takePhoto", "(Ljava/lang/String;)V", e);
}
AppLog.warn("Browser call Function [OpenTakephoto]");
},
checkSelfPermission: function() {
return !Global.isAndroid() || (parseInt(cc.vv.PlatformApiMgr.getAppVersion().split(".").join("")) <= 180 || "true" == this.callPlatformApi("checkSelfPermission", "()Ljava/lang/String;"));
},
JoinVoiceChannel: function(e, t) {
if (Global.isNative()) {
this.addCallback(t, "JoinVoiceChannelCallback");
return this.callPlatformApi("joinVoiceChannel", "(Ljava/lang/String;)V", e);
}
AppLog.warn("Browser call Function [joinVoiceChannel]");
},
SetVoiceChannelLocalMute: function(e) {
if (Global.isNative()) return this.callPlatformApi("setLocalMute", "(Ljava/lang/String;)V", "" + e);
AppLog.warn("Browser call Function [SetVoiceChannelLocalMute]");
},
SetVoiceChannelRemteBute: function(e) {
if (Global.isNative()) return this.callPlatformApi("setRemoteMute", "(Ljava/lang/String;)V", e);
AppLog.warn("Browser call Function [SetVoiceChannelRemteBute]");
},
LevelVoiceChannel: function() {
if (Global.isNative()) return this.callPlatformApi("levelVoiceChannel", "()V");
AppLog.warn("Browser call Function [LevelVoiceChannel]");
},
SendMail: function(e) {
if (Global.isNative()) return this.callPlatformApi("sendMail", "(Ljava/lang/String;)V", e);
AppLog.warn("Browser call Function [sendMail]");
},
systemShare: function(e) {
if (Global.isNative()) return this.callPlatformApi("systemShare", "(Ljava/lang/String;)V", e);
AppLog.warn("Browser call Function [systemShare]");
},
packnameAppShare: function(e) {
if (Global.isNative()) return this.callPlatformApi("packageAppShare", "(Ljava/lang/String;)V", e);
AppLog.warn("Browser call Function [systemShare]");
},
installRef: function(e) {
if (Global.isAndroid() && !Global.IsHuawei()) {
this.addCallback(e, "InstallReffCallback");
this.callPlatformApi("googleInstallReff", "()V");
}
},
launchCallNative: function() {
Global.isIOS() && this.callPlatformApi("launchCallNative", "()V");
},
launchEndCallNative: function() {
Global.isIOS() && this.callPlatformApi("launchEndCallNative", "()V");
},
loginCallNative: function() {
Global.isIOS() && this.callPlatformApi("loginCallNative", "()V");
},
loginEndCallNative: function() {
Global.isIOS() && this.callPlatformApi("loginCallNative", "()V");
},
loadingCallNative: function() {
Global.isIOS() && this.callPlatformApi("loadingCallNative", "()V");
},
loadingEndCallNative: function() {
Global.isIOS() && this.callPlatformApi("loadingCallNative", "()V");
},
hallviewCallNative: function() {
Global.isIOS() && this.callPlatformApi("hallviewCallNative", "()V");
},
openShopCallNative: function() {
Global.isIOS() && this.callPlatformApi("openShopCallNative", "()V");
},
payActionCallNative: function() {
Global.isIOS() && this.callPlatformApi("payActionCallNative", "()V");
},
enterGameCallNative: function() {
Global.isIOS() && this.callPlatformApi("enterGameCallNative", "()V");
},
onGoogleAdIdRead: function() {
console.log(" onGoogleAdIdRead: " + JSON.stringify(googleAdId));
},
addCallback: function(e, t) {
this._callbackDic = this._callbackDic || {};
this._callbackDic[t] = e;
},
delCallback: function(e) {
delete this._callbackDic[e];
},
trigerCallback: function(e) {
cc.log("CallBackData:" + JSON.stringify(e));
this.pushCallbackDataToList(e);
},
callPlatformApi: function(e, t, i) {
return Global.isAndroid() ? i ? jsb.reflection.callStaticMethod(this._AND_CLASS_NAME, e, t, i) : jsb.reflection.callStaticMethod(this._AND_CLASS_NAME, e, t) : Global.isIOS() ? i ? jsb.reflection.callStaticMethod(this._IOS_CLASS_NAME, e + ":", i) : jsb.reflection.callStaticMethod(this._IOS_CLASS_NAME, e) : "";
},
pushCallbackDataToList: function(e) {
this._cbDataList = this._cbDataList || [];
this._cbDataList.push(e);
},
update: function() {
if (null != this._cbDataList && this._cbDataList.length > 0) {
var e = this._cbDataList.shift();
e.cbName ? this._callbackDic[e.cbName] ? this._callbackDic[e.cbName](e) : AppLog.warn("Has not add " + e.cbName + " in the cbDataDic!") : AppLog.err("The callback data (cbDataDic.cbName) is not exist!");
}
}
}
});
cc._RF.pop();
}, {} ],
PopupBtnCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "5d3dd3JP59CD5GqmRzYtD19", "PopupBtnCmp");
var i = cc.Enum({
Prefab: 1,
Path: 2
}), n = cc.Enum({
None: 1,
OpacityIn: 2,
ScaleIn: 3,
BottomIn: 4,
RightIn: 5,
LeftIn: 6
}), a = cc.Enum({
None: 1,
ScaleOut: 2,
BottomOut: 4,
RightOut: 5,
LeftOut: 6
});
cc.Class({
extends: cc.Component,
editor: {
menu: "弹窗相关/弹窗入口",
requireComponent: cc.Button
},
properties: {
popupType: {
default: i.Prefab,
type: i
},
path: {
default: "",
visible: function() {
return this.popupType == i.Path;
}
},
prefab: {
default: null,
type: cc.Prefab,
visible: function() {
return this.popupType == i.Prefab;
}
},
nodePath: {
default: "",
visible: function() {
return this.setTabIndex;
}
},
animType: {
default: n.None,
type: n
},
closeAnimType: {
default: a.None,
type: a
},
noCloseHit: !1,
noMask: !1,
setTabIndex: !1,
index: {
default: "",
visible: function() {
return this.setTabIndex;
}
},
report: !1,
reportKey: {
default: "",
visible: function() {
return this.report;
}
},
noTouchClose: !1
},
onLoad: function() {
this.initScale = this.node.scale;
this.node.getComponent(cc.Button) && this.node.on("click", this.onClick, this);
},
onClick: function() {
var e = this, t = null;
this.popupType == i.Path ? t = this.path : this.popupType == i.Prefab && (t = this.prefab);
var o = {
noCloseHit: this.noCloseHit,
noTouchClose: this.noTouchClose,
noMask: this.noMask,
onShow: function(t) {
if (e.setTabIndex) {
var i = cc.find(e.nodePath, t);
if (i) {
var n = i.getComponent("Tabbar");
n && n.setPage(e.index);
}
}
}
};
this.animType == n.OpacityIn ? o.opacityIn = !0 : this.animType == n.ScaleIn ? o.scaleIn = !0 : this.animType == n.BottomIn ? o.bottomIn = !0 : this.animType == n.RightIn ? o.rightIn = !0 : this.animType == n.LeftIn && (o.leftIn = !0);
if (this.closeAnimType == a.ScaleOut) {
o.scaleOut = !0;
var r = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), s = cc.find("Canvas").convertToNodeSpaceAR(r);
o.scaleOutParm = {
toPos: s,
node: this.node,
scale: this.initScale
};
} else this.closeAnimType == a.BottomOut ? o.bottomOut = !0 : this.closeAnimType == a.RightOut ? o.rightOut = !0 : this.closeAnimType == a.LeftOut && (o.leftOut = !0);
cc.vv.PopupManager.addPopup(t, o);
}
});
cc._RF.pop();
}, {} ],
PopupCloseBtnCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "f0c8dogqyhK0aG0XNUcn3AP", "PopupCloseBtnCmp");
cc.Class({
extends: cc.Component,
editor: {
menu: "弹窗相关/关闭按钮",
requireComponent: cc.Button
},
properties: {},
onLoad: function() {
this.node.getComponent(cc.Button) && this.node.on("click", function() {
cc.vv.PopupManager.removeTop();
});
}
});
cc._RF.pop();
}, {} ],
PopupLifeCmp: [ function(e, t) {
"use strict";
cc._RF.push(t, "895d1A5oIpPNLigoinaPtxZ", "PopupLifeCmp");
cc.Class({
extends: cc.Component,
properties: {},
setOnDestroy: function(e) {
this.onPopupDestroy = e;
},
onDestroy: function() {
this.onPopupDestroy && this.onPopupDestroy();
}
});
cc._RF.pop();
}, {} ],
PopupManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "df5b1E2/Z9B859C9vUqJgFn", "PopupManager");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var a = 0;
return function() {
return a >= e.length ? {
done: !0
} : {
done: !1,
value: e[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
cc.Class({
extends: cc.Component,
properties: {},
statics: {
baseZIndex: 50,
init: function() {
var e = this;
this.popupStack = [];
this.waitingQueue = [];
cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LAUNCH, function() {
e.removeAll();
}, this);
setInterval(this.checkPopupStack.bind(this), 100);
},
checkPopupStack: function() {
if (this.popupStack.length <= 0 && this.waitingQueue.length > 0) {
var e = this.waitingQueue.pop();
this.createPopup(e.path, e.args);
}
},
addPopup: function(e, t) {
if (e) {
(t = t || {}).path = e;
t.weight = t.weight || 1;
t.multiple = t.multiple || !1;
if (t.isWait) {
this.waitingQueue.push({
path: e,
args: t
});
this.waitingQueue.sort(function(e, t) {
return e.args.weight - t.args.weight;
});
} else this.createPopup(e, t);
}
},
createPopup: function(e, t) {
var i = this;
if (t.multiple || !this.checkIsAddedByPath(e)) {
this.popupStack.push(t);
if ("string" == typeof e) {
var n = function(e, n) {
if (!e) {
var a = !0;
t && t.parent && (a = !!cc.isValid(t.parent, !0));
if (!a) return;
if (i.popupStack.indexOf(t) >= 0) {
var o = cc.instantiate(n);
i.handlePopup(o, t);
}
}
};
if (t.isBundle) {
var a = cc.vv.gameData.getGameCfg(), o = window[a.bundleName];
o ? o.load(e, cc.Prefab, n) : AppLog.err("PopupManager createPopup error:", a.bundleName);
} else cc.loader.loadRes(e, cc.Prefab, n);
} else if (e instanceof cc.Prefab) {
var r = cc.instantiate(e);
r && this.handlePopup(r, t);
} else this.handlePopup(e, t);
}
},
handlePopup: function(e, t) {
var i = this;
t.node = e;
t.name = e.name;
e.popupArgs = t;
var n = t.pos || cc.v2(0, 0);
e.addComponent("PopupLifeCmp").setOnDestroy(function() {
for (var t = 0; t < i.popupStack.length; t++) if (i.popupStack[t].node == e) {
i.popupStack.splice(t, 1);
i.updateStack();
break;
}
});
t.addBeforeCall && t.addBeforeCall(e);
e.parent = cc.find("Canvas");
t.closeInSound || cc.vv.EventManager.emit("EVENT_BTN_CLICK_2_SOUNDS");
e.zIndex = this.baseZIndex + 3 * this.popupStack.length + 1;
t.zIndex = e.zIndex;
e.position = t.pos || cc.v2(0, 0);
this.updateStack();
t.onShow && t.onShow(e, this);
StatisticsMgr.reqReportNow(ReportConfig.POPUP_OPEN, t.name);
var a = e.getComponent(cc.Widget);
if (t.scaleIn) {
var o = e.scale;
e.scale = .4;
e.opacity = 0;
cc.tween(e).to(t.animTime || .3, {
scale: o,
opacity: 255
}, {
easing: "backOut"
}).call(function() {
t.onShowEnd && t.onShowEnd(e, i);
}).start();
if (this.maskLayer) {
this.maskLayer.stopAllActions();
cc.tween(this.maskLayer).to(t.animTime || .3, {
scale: 1,
opacity: 255
}, {
easing: "quadOut"
}).start();
}
} else if (t.opacityIn) {
e.opacity = 0;
cc.tween(e).to(t.animTime || .3, {
opacity: 255
}, {
easing: "quadOut"
}).call(function() {
t.onShowEnd && t.onShowEnd(e, i);
}).start();
if (this.maskLayer) {
this.maskLayer.stopAllActions();
cc.tween(this.maskLayer).to(t.animTime || .3, {
opacity: 255
}, {
easing: "quadOut"
}).start();
}
} else if (t.bottomIn) {
if (a) {
a.updateAlignment();
a.enabled = !1;
}
e.position = n.add(cc.v3(0, -cc.winSize.height));
cc.tween(e).to(t.animTime || .3, {
position: n
}, {
easing: "quadOut"
}).call(function() {
a && (a.enabled = !0);
t.onShowEnd && t.onShowEnd(e, i);
}).start();
if (this.maskLayer) {
this.maskLayer.stopAllActions();
cc.tween(this.maskLayer).to(t.animTime || .3, {
opacity: 255
}, {
easing: "quadOut"
}).start();
}
} else if (t.rightIn) {
if (a) {
a.updateAlignment();
a.enabled = !1;
}
e.position = n.add(cc.v3(cc.winSize.width, 0));
cc.tween(e).to(t.animTime || .3, {
position: n
}, {
easing: "quadOut"
}).call(function() {
a && (a.enabled = !0);
t.onShowEnd && t.onShowEnd(e, i);
}).start();
if (this.maskLayer) {
this.maskLayer.stopAllActions();
cc.tween(this.maskLayer).to(t.animTime || .3, {
opacity: 255
}, {
easing: "quadOut"
}).start();
}
} else if (t.leftIn) {
if (a) {
a.updateAlignment();
a.enabled = !1;
}
e.position = n.add(cc.v3(-cc.winSize.width, 0));
cc.tween(e).to(t.animTime || .3, {
position: n
}, {
easing: "quadOut"
}).call(function() {
a && (a.enabled = !0);
t.onShowEnd && t.onShowEnd(e, i);
}).start();
if (this.maskLayer) {
this.maskLayer.stopAllActions();
cc.tween(this.maskLayer).to(t.animTime || .3, {
opacity: 255
}, {
easing: "quadOut"
}).start();
}
} else {
this.maskLayer.stopAllActions();
this.maskLayer.opacity = 255;
t.onShowEnd && t.onShowEnd(e, this);
}
},
checkIsAdded: function(e) {
for (var t = 0; t < this.popupStack.length; t++) {
var i = this.popupStack[t];
if (i && i.node && e.name == i.name) return !0;
}
return !1;
},
checkIsAddedByPath: function(e) {
for (var t = 0; t < this.popupStack.length; t++) {
var i = this.popupStack[t].path;
if ("string" == typeof i) {
if (e == i) return !0;
} else if (i instanceof cc.Prefab) {
if (e._name == i._name) return !0;
} else if (e.name == i.name) return !0;
}
return !1;
},
removeTop: function() {
if (this.popupStack.length <= 0) return !1;
this.removePopup(this.popupStack[this.popupStack.length - 1].node);
return !0;
},
isTop: function(e) {
return this.popupStack.length <= 0 || e == this.popupStack[this.popupStack.length - 1].node;
},
getTop: function() {
return this.popupStack.length > 0 ? this.popupStack[this.popupStack.length - 1].node : null;
},
updateStack: function() {
var e = this;
if (cc.find("Canvas")) {
for (var t = 0; t < this.popupStack.length; t++) {
var i = this.popupStack[t];
if (i.node) {
i.node.zIndex = this.baseZIndex + 3 * (t + 1) + 1;
i.zIndex = i.node.zIndex;
}
}
if (!this.maskLayer || !cc.isValid(this.maskLayer, !0)) {
this.maskLayer = new cc.Node();
this.maskLayer.parent = cc.find("Canvas");
this.maskLayer.width = cc.winSize.width;
this.maskLayer.height = cc.winSize.height;
var n = this.maskLayer.addComponent(cc.Graphics);
n.fillColor = new cc.Color(0, 0, 0, 200);
n.rect(3 * -cc.winSize.width / 2, 3 * -cc.winSize.height / 2, 3 * cc.winSize.width, 3 * cc.winSize.height);
n.fill();
}
for (var a = -1, o = this.popupStack.length - 1; o >= 0; o--) if (!this.popupStack[o].noMask) {
a = o;
break;
}
if (a >= 0) {
var r = this.popupStack[a];
this.maskLayer.active = !0;
this.maskLayer.zIndex = r.zIndex - 2;
} else this.maskLayer.active = !1;
if (!this.touchLayer || !cc.isValid(this.touchLayer, !0)) {
this.touchLayer = new cc.Node();
this.touchLayer.parent = cc.find("Canvas");
this.touchLayer.width = 3 * cc.winSize.width;
this.touchLayer.height = 3 * cc.winSize.height;
this.touchLayer.addComponent(cc.Button);
this.closeNode = null;
cc.loader.loadRes("BalootClient/BaseRes/prefabs/popup_close", cc.Prefab, function(t, i) {
if (!t) {
e.closeNode = cc.instantiate(i);
e.closeNode.parent = e.touchLayer;
e.closeNode.y = -905;
e.closeNode.on("click", function() {
e.removeTop();
}, e);
e.popupStack.length > 0 ? e.closeNode.active = !e.popupStack[e.popupStack.length - 1].noCloseHit : e.closeNode.active = !1;
}
});
this.touchLayer.on("click", function() {
e.popupStack[e.popupStack.length - 1].noTouchClose || e.removeTop();
});
}
this.closeNode && (this.popupStack.length > 0 ? this.closeNode.active = !this.popupStack[this.popupStack.length - 1].noCloseHit : this.closeNode.active = !1);
if (this.popupStack.length > 0) {
var s = this.popupStack[this.popupStack.length - 1];
if (s.touchThrough) this.touchLayer.active = !1; else {
this.touchLayer.zIndex = s.zIndex - 1;
this.touchLayer.active = !0;
}
} else this.touchLayer.active = !1;
var c = this.popupStack[this.popupStack.length - 1];
if (c && c.delayCloseTime && this.touchLayer.active) {
this.touchLayer.getComponent(cc.Button).enabled = !1;
cc.tween(this.touchLayer).delay(c.delayCloseTime).call(function() {
e.touchLayer.getComponent(cc.Button).enabled = !0;
}).start();
}
}
},
removePopup: function(e, t) {
var i = this;
if (e && cc.isValid(e)) {
for (var n = 0; n < this.popupStack.length; n++) if (this.popupStack[n].node == e) {
this.popupStack[n].closeOutSound || cc.vv.EventManager.emit("EVENT_BTN_CLOSE_SOUNDS");
var a = function() {
i.popupStack[n].onClose && i.popupStack[n].onClose(i.popupStack[n].node, i);
i.onClosePopup(i.popupStack[n]);
i.popupStack[n].node.destroy();
i.popupStack.splice(n, 1);
i.updateStack();
};
!t && this.popupStack[n].onCloseBefore ? this.popupStack[n].onCloseBefore(this.popupStack[n].node, a) : a();
break;
}
this.updateStack();
}
},
removeAll: function() {
for (var e = 0; e < this.popupStack.length; e++) {
var t = this.popupStack[e];
if (t && t.node && t.node.destroy) {
t.onClose && t.onClose(t.node, this);
this.onClosePopup(t);
t.node.destroy();
}
}
this.popupStack = [];
this.waitingQueue = [];
this.touchLayer && cc.isValid(this.touchLayer, !0) && this.touchLayer.destroy();
this.maskLayer && cc.isValid(this.maskLayer, !0) && this.maskLayer.destroy();
this.maskLayer = null;
this.touchLayer = null;
},
getPopupByName: function(e) {
for (var t = 0; t < this.popupStack.length; t++) {
var i = this.popupStack[t];
if (i && i.node && e == i.name) return i.node;
}
return null;
},
onClosePopup: function(e) {
var t = e.node, i = e.bottomOut, n = (e.leftOut, e.rightOut, e.scaleOut), a = e.scaleOutParm;
StatisticsMgr.reqReportNow(ReportConfig.POPUP_CLOSE, e.name);
if (i) ; else if (n && a) {
var o = this.createTempPopup(t);
cc.tween(o).to(.1, {
scale: .5
}).to(.2, {
scale: .03,
position: a.toPos
}, {
easing: "quadOut"
}).call(function() {
a.node && cc.tween(a.node).to(.05, {
scale: 1.1 * a.scale
}).to(.05, {
scale: a.scale
}).start();
o.destroy();
}).start();
}
},
createTempPopup: function(e) {
for (var t, n = i(e.getComponentsInChildren(cc.Component)); !(t = n()).done; ) {
var a = t.value;
a instanceof cc.Sprite || a instanceof cc.Label || a instanceof sp.Skeleton || a instanceof cc.Mask || (a.enabled = !1);
}
for (var o, r = i(e.getComponentsInChildren("Tabbar")); !(o = r()).done; ) o.value.node.active = !1;
for (var s, c = i(e.getComponentsInChildren("List")); !(s = c()).done; ) s.value.node.active = !1;
for (var l, _ = i(e.getComponentsInChildren("ListView")); !(l = _()).done; ) l.value.node.active = !1;
for (var u, h = i(e.getComponentsInChildren("NetListenerCmp")); !(u = h()).done; ) u.value.clear();
for (var d, p = i(e.getComponentsInChildren("EventListenerCmp")); !(d = p()).done; ) d.value.clear();
for (var f, g = i(e.getComponents("NetListenerCmp")); !(f = g()).done; ) f.value.clear();
for (var m, E = i(e.getComponents("EventListenerCmp")); !(m = E()).done; ) m.value.clear();
var v = cc.instantiate(e);
v.parent = e.parent;
v.position = e.position;
v.zIndex = 1e3;
return v;
},
showTopWin: function(e, t, i) {
var n = this;
void 0 === i && (i = 1e4);
cc.loader.loadRes(e, cc.Prefab, function(e, a) {
if (!e) {
var o = cc.instantiate(a);
o.zIndex = i;
o.parent = cc.director.getScene();
t.onShow && t.onShow(o, n);
}
});
}
},
log: function() {
cc.log(this.popupStack);
}
});
cc._RF.pop();
}, {} ],
PopupReward: [ function(e, t) {
"use strict";
cc._RF.push(t, "8d5deHIzoVNsp5EWkZOFK+A", "PopupReward");
var i;
cc.Class(((i = {
extends: cc.Component,
properties: {
animSke: sp.Skeleton,
boomPrefab: cc.Prefab,
reawrdNode: cc.Node,
chatSpriteFrames: cc.SpriteAtlas,
vipExpFrame: cc.SpriteFrame
},
onLoad: function() {
var e = this;
this.rewardCpt = this.reawrdNode.getComponent("RewardListCpt");
this.animSke.setCompleteListener(function(t) {
t.animation && "animation" == t.animation.name && e.animSke.setAnimation(0, "animation2", !0);
});
},
start: function() {
this.animSke.setAnimation(0, "animation", !0);
},
setData: function(e) {
var t = this, i = this.rewardCpt.updateView(e);
this.scheduleOnce(function() {
var e = i[1], n = cc.find("Canvas/UserinfoBar/coin/icon");
if (e && n) if (e.data.count > 3e6) {
var a = e.node.getComponentInChildren(cc.Sprite);
a && Global.FlyAnimTo(e.node, n, {
spriteFrame: a.spriteFrame,
scale: .75,
delay: .3,
onStart: function() {
e.node.active = !1;
var i = cc.instantiate(t.boomPrefab);
if (i) {
i.parent = cc.find("Canvas");
var n = e.node.convertToWorldSpaceAR(cc.v2(0, 0));
i.position = i.parent.convertToNodeSpaceAR(n);
i.zIndex = 900;
i.getComponent(sp.Skeleton).setCompleteListener(function(e) {
e.animation && "animation" == e.animation.name && i.destroy();
});
}
}
});
} else {
var o = {
lblCoin: cc.find("Canvas/UserinfoBar/coin/lbl_coin"),
addCoin: e.data.count,
begin: cc.vv.UserManager.coin - e.data.count
};
Global.FlyCoinV2(e.node, null, null, o, !0);
}
var r = i[25], s = cc.find("Canvas/UserinfoBar/钻石/icon");
if (r && s) {
if (r.data.count > 3e3) {
var c = r.node.getComponentInChildren(cc.Sprite);
c && Global.FlyAnimTo(r.node, s, {
spriteFrame: c.spriteFrame,
scale: .75,
delay: .3,
onStart: function() {
r.node.active = !1;
var e = cc.instantiate(t.boomPrefab);
if (e) {
e.parent = cc.find("Canvas");
var i = r.node.convertToWorldSpaceAR(cc.v2(0, 0));
e.position = e.parent.convertToNodeSpaceAR(i);
e.zIndex = 900;
e.getComponent(sp.Skeleton).setCompleteListener(function(t) {
t.animation && "animation" == t.animation.name && e.destroy();
});
}
}
});
} else {
var l = {
addCoin: r.data.count,
begin: cc.vv.UserManager.getDiamond() - r.data.count
};
Global.FlyDiamond(r.node, null, null, l, !0);
}
var _ = i[2], u = cc.find("Canvas/UserinfoBar/VIP/progress/icon");
t.vipExpFrame && _ && Global.FlyAnimTo(r.node, u, {
spriteFrame: t.vipExpFrame,
scale: .5,
delay: .3
});
}
}, .5);
this.scheduleOnce(function() {
cc.vv.PopupManager.removePopup(t.node);
}, 2);
}
}).start = function() {
cc.vv.AudioManager.playEff("BalootClient/BaseRes/", "get_coins", !0);
}, i));
cc._RF.pop();
}, {} ],
PrefabCfgCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "7abb6iah5VLh6VVzWXIZVP4", "PrefabCfgCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.PrefabCfgItem = void 0;
var n = cc._decorator, a = n.ccclass, o = n.property, r = n.menu, s = (n.requireComponent, 
function() {
function e() {
this.key = "";
this.prefab = null;
}
__decorate([ o({
displayName: "Key"
}) ], e.prototype, "key", void 0);
__decorate([ o({
type: cc.Prefab,
displayName: "预制体"
}) ], e.prototype, "prefab", void 0);
return __decorate([ a("PrefabCfgItem") ], e);
}());
i.PrefabCfgItem = s;
var c = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.config = [];
return t;
}
__decorate([ o({
type: [ s ]
}) ], t.prototype, "config", void 0);
return __decorate([ a, r("ECS/配置/预制体配置") ], t);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {} ],
PreloadingPrefab: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "8b99eLe1MJHjp9Z9cdGis56", "PreloadingPrefab");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.PreloadingPrefab = void 0;
var n, a = cc._decorator, o = a.ccclass, r = a.property, s = a.menu;
(function(e) {
e[e.Prefab = 1] = "Prefab";
e[e.Path = 2] = "Path";
})(n || (n = {}));
var c = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.type = n.Prefab;
t.prefab = null;
t.path = "";
t.isAndroidReview = !1;
t.isIOSReview = !1;
return t;
}
t.prototype.onLoad = function() {
this.isAndroidReview && Global.isAndroidReview ? this.getComponent(cc.Sprite).enabled = !1 : this.isIOSReview && Global.isIOSReview ? this.getComponent(cc.Sprite).enabled = !1 : this.updateView();
};
t.prototype.updateView = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(i) {
switch (i.label) {
case 0:
this.getComponent(cc.Sprite).enabled = !1;
if (this.type != n.Path) return [ 3, 2 ];
e = this;
return [ 4, cc.vv.ResManager.loadPrefab(this.path) ];

case 1:
e.prefab = i.sent();
i.label = 2;

case 2:
if (this.prefab) {
(t = cc.instantiate(this.prefab)).parent = this.node;
t.position = cc.v3(0, 0);
}
return [ 2 ];
}
});
});
};
__decorate([ r({
type: cc.Enum(n)
}) ], t.prototype, "type", void 0);
__decorate([ r({
type: cc.Prefab,
visible: function() {
return this.type === n.Prefab;
}
}) ], t.prototype, "prefab", void 0);
__decorate([ r({
visible: function() {
return this.type === n.Path;
}
}) ], t.prototype, "path", void 0);
__decorate([ r ], t.prototype, "isAndroidReview", void 0);
__decorate([ r ], t.prototype, "isIOSReview", void 0);
return __decorate([ o, s("通用/预制体加载") ], t);
}(cc.Component);
i.PreloadingPrefab = c;
cc._RF.pop();
}, {} ],
ProgressBarTarget: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "426d93AmcZHx70H1ft3jsvX", "ProgressBarTarget");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.progressBar = null;
return t;
}
t.prototype.update = function() {
this.node.position = this.progressBar.barSprite.node.position.add(cc.v3(this.progressBar.progress * this.progressBar.totalLength, 0, 0));
};
__decorate([ o(cc.ProgressBar) ], t.prototype, "progressBar", void 0);
return __decorate([ a ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
ReTimer: [ function(e, t) {
"use strict";
cc._RF.push(t, "c3054KRr99HS4hEZV2zCAtK", "ReTimer");
cc.Class({
extends: cc.Component,
properties: {
_nInter: 0
},
start: function() {},
setReTimer: function(e, t, i, n, a) {
this._bStop = null;
this._nInter = 0;
this._nTime = e;
this._nStep = t;
this._endCall = i;
this._perCall = a;
this._formatStr = n;
this._showTime(this._nTime);
},
_showTime: function(e) {
this._formatStr ? this.node.getComponent(cc.Label).string = cc.js.formatStr(this._formatStr, e) : this.node.getComponent(cc.Label).string = Global.formatSec(e, null, !0);
},
update: function(e) {
if (!this._bStop) {
this._nInter += e;
if (this._nInter >= this._nStep) {
this._nInter = 0;
this._nTime -= 1;
this._nTime < 0 && (this._nTime = 0);
this._showTime(this._nTime);
this._perCall && this._perCall(this._nTime);
if (this._nTime <= 0) {
this._bStop = !0;
this._endCall && this._endCall();
}
}
}
}
});
cc._RF.pop();
}, {} ],
ResManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "5482bTVY5xLI4YKkVtsbQ/I", "ResManager");
function i() {
i = function() {
return e;
};
var e = {}, t = Object.prototype, n = t.hasOwnProperty, a = "function" == typeof Symbol ? Symbol : {}, o = a.iterator || "@@iterator", r = a.asyncIterator || "@@asyncIterator", s = a.toStringTag || "@@toStringTag";
function c(e, t, i) {
return Object.defineProperty(e, t, {
value: i,
enumerable: !0,
configurable: !0,
writable: !0
}), e[t];
}
try {
c({}, "");
} catch (e) {
c = function(e, t, i) {
return e[t] = i;
};
}
function l(e, t, i, n) {
var a = t && t.prototype instanceof h ? t : h, o = Object.create(a.prototype), r = new R(n || []);
return o._invoke = function(e, t, i) {
var n = "suspendedStart";
return function(a, o) {
if ("executing" === n) throw new Error("Generator is already running");
if ("completed" === n) {
if ("throw" === a) throw o;
return {
value: void 0,
done: !0
};
}
for (i.method = a, i.arg = o; ;) {
var r = i.delegate;
if (r) {
var s = L(r, i);
if (s) {
if (s === u) continue;
return s;
}
}
if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
if ("suspendedStart" === n) throw n = "completed", i.arg;
i.dispatchException(i.arg);
} else "return" === i.method && i.abrupt("return", i.arg);
n = "executing";
var c = _(e, t, i);
if ("normal" === c.type) {
if (n = i.done ? "completed" : "suspendedYield", c.arg === u) continue;
return {
value: c.arg,
done: i.done
};
}
"throw" === c.type && (n = "completed", i.method = "throw", i.arg = c.arg);
}
};
}(e, i, r), o;
}
function _(e, t, i) {
try {
return {
type: "normal",
arg: e.call(t, i)
};
} catch (e) {
return {
type: "throw",
arg: e
};
}
}
e.wrap = l;
var u = {};
function h() {}
function d() {}
function p() {}
var f = {};
c(f, o, function() {
return this;
});
var g = Object.getPrototypeOf, m = g && g(g(I([])));
m && m !== t && n.call(m, o) && (f = m);
var E = p.prototype = h.prototype = Object.create(f);
function v(e) {
[ "next", "throw", "return" ].forEach(function(t) {
c(e, t, function(e) {
return this._invoke(t, e);
});
});
}
function S(e, t) {
function i(a, o, r, s) {
var c = _(e[a], e, o);
if ("throw" !== c.type) {
var l = c.arg, u = l.value;
return u && "object" == typeof u && n.call(u, "__await") ? t.resolve(u.__await).then(function(e) {
i("next", e, r, s);
}, function(e) {
i("throw", e, r, s);
}) : t.resolve(u).then(function(e) {
l.value = e, r(l);
}, function(e) {
return i("throw", e, r, s);
});
}
s(c.arg);
}
var a;
this._invoke = function(e, n) {
function o() {
return new t(function(t, a) {
i(e, n, t, a);
});
}
return a = a ? a.then(o, o) : o();
};
}
function L(e, t) {
var i = e.iterator[t.method];
if (void 0 === i) {
if (t.delegate = null, "throw" === t.method) {
if (e.iterator.return && (t.method = "return", t.arg = void 0, L(e, t), "throw" === t.method)) return u;
t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
}
return u;
}
var n = _(i, e.iterator, t.arg);
if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, 
u;
var a = n.arg;
return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
t.delegate = null, u);
}
function T(e) {
var t = {
tryLoc: e[0]
};
1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
this.tryEntries.push(t);
}
function A(e) {
var t = e.completion || {};
t.type = "normal", delete t.arg, e.completion = t;
}
function R(e) {
this.tryEntries = [ {
tryLoc: "root"
} ], e.forEach(T, this), this.reset(!0);
}
function I(e) {
if (e) {
var t = e[o];
if (t) return t.call(e);
if ("function" == typeof e.next) return e;
if (!isNaN(e.length)) {
var i = -1, a = function t() {
for (;++i < e.length; ) if (n.call(e, i)) return t.value = e[i], t.done = !1, t;
return t.value = void 0, t.done = !0, t;
};
return a.next = a;
}
}
return {
next: b
};
}
function b() {
return {
value: void 0,
done: !0
};
}
return d.prototype = p, c(E, "constructor", p), c(p, "constructor", d), d.displayName = c(p, s, "GeneratorFunction"), 
e.isGeneratorFunction = function(e) {
var t = "function" == typeof e && e.constructor;
return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
}, e.mark = function(e) {
return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, c(e, s, "GeneratorFunction")), 
e.prototype = Object.create(E), e;
}, e.awrap = function(e) {
return {
__await: e
};
}, v(S.prototype), c(S.prototype, r, function() {
return this;
}), e.AsyncIterator = S, e.async = function(t, i, n, a, o) {
void 0 === o && (o = Promise);
var r = new S(l(t, i, n, a), o);
return e.isGeneratorFunction(i) ? r : r.next().then(function(e) {
return e.done ? e.value : r.next();
});
}, v(E), c(E, s, "Generator"), c(E, o, function() {
return this;
}), c(E, "toString", function() {
return "[object Generator]";
}), e.keys = function(e) {
var t = [];
for (var i in e) t.push(i);
return t.reverse(), function i() {
for (;t.length; ) {
var n = t.pop();
if (n in e) return i.value = n, i.done = !1, i;
}
return i.done = !0, i;
};
}, e.values = I, R.prototype = {
constructor: R,
reset: function(e) {
if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(A), 
!e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
},
stop: function() {
this.done = !0;
var e = this.tryEntries[0].completion;
if ("throw" === e.type) throw e.arg;
return this.rval;
},
dispatchException: function(e) {
if (this.done) throw e;
var t = this;
function i(i, n) {
return r.type = "throw", r.arg = e, t.next = i, n && (t.method = "next", t.arg = void 0), 
!!n;
}
for (var a = this.tryEntries.length - 1; a >= 0; --a) {
var o = this.tryEntries[a], r = o.completion;
if ("root" === o.tryLoc) return i("end");
if (o.tryLoc <= this.prev) {
var s = n.call(o, "catchLoc"), c = n.call(o, "finallyLoc");
if (s && c) {
if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
if (this.prev < o.finallyLoc) return i(o.finallyLoc);
} else if (s) {
if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
} else {
if (!c) throw new Error("try statement without catch or finally");
if (this.prev < o.finallyLoc) return i(o.finallyLoc);
}
}
}
},
abrupt: function(e, t) {
for (var i = this.tryEntries.length - 1; i >= 0; --i) {
var a = this.tryEntries[i];
if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
var o = a;
break;
}
}
o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
var r = o ? o.completion : {};
return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
u) : this.complete(r);
},
complete: function(e, t) {
if ("throw" === e.type) throw e.arg;
return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
u;
},
finish: function(e) {
for (var t = this.tryEntries.length - 1; t >= 0; --t) {
var i = this.tryEntries[t];
if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), A(i), u;
}
},
catch: function(e) {
for (var t = this.tryEntries.length - 1; t >= 0; --t) {
var i = this.tryEntries[t];
if (i.tryLoc === e) {
var n = i.completion;
if ("throw" === n.type) {
var a = n.arg;
A(i);
}
return a;
}
}
throw new Error("illegal catch attempt");
},
delegateYield: function(e, t, i) {
return this.delegate = {
iterator: I(e),
resultName: t,
nextLoc: i
}, "next" === this.method && (this.arg = void 0), u;
}
}, e;
}
function n(e, t, i, n, a, o, r) {
try {
var s = e[o](r), c = s.value;
} catch (e) {
i(e);
return;
}
s.done ? t(c) : Promise.resolve(c).then(n, a);
}
cc.Class({
extends: cc.Component,
statics: {
resMap: {},
getRes: function(e) {
var t = this.resMap[e];
if (t) return t;
cc.warn("找不到该资源缓存: " + e);
},
loadImage: function(e, t) {
var i = e.split("/"), n = i[i.length - 1], a = {
url: e,
ignoreMaxConcurrency: !0
};
n.indexOf(".") < 0 && (a = {
url: e,
type: "jpg",
ignoreMaxConcurrency: !0
});
var o = {
url: e
};
new Promise(function(e, t) {
o.rejectFunc = function() {
t(0, "主动取消加载");
};
try {
cc.loader.load(a, function(i, n) {
i ? t(-1, i) : e(n);
});
} catch (e) {
t(-1, e);
}
}).then(function(e) {
t(null, e);
}).catch(function(e, i) {
if (e < 0) {
cc.warn(i, o.url);
t(i);
}
});
return o;
},
loadLocalRes: function(e, t, i) {
var n = {
url: e
};
new Promise(function(i, a) {
n.rejectFunc = function() {
a(0, "主动取消加载");
};
cc.loader.loadRes(e, t, function(e, t) {
e ? a(-1, e) : i(t);
});
}).then(function(e) {
i(null, e);
}).catch(function(e, t) {
if (e < 0) {
cc.warn(t, n.url);
i(t);
}
});
return n;
},
setSpriteFrame: function(e, t, i, n) {
if (e) {
if (e._reqHandle && e._reqHandle.rejectFunc) {
e._reqHandle.rejectFunc();
e._reqHandle = void 0;
}
e._reqHandle = i ? this.loadLocalRes(t, cc.SpriteAtlas, function(t, a) {
a && (e.spriteFrame = a.getSpriteFrame(i));
e._reqHandle = void 0;
n && n(t, a);
}) : this.loadLocalRes(t, cc.SpriteFrame, function(t, i) {
i && (e.spriteFrame = i);
e._reqHandle = void 0;
n && n(t, i);
});
}
},
setSkeleton: function(e, t, i) {
if (e._reqHandle && e._reqHandle.rejectFunc) {
e._reqHandle.rejectFunc();
e._reqHandle = void 0;
}
e._reqHandle = this.loadLocalRes(t, sp.SkeletonData, function(t, n) {
if (!t) {
n && (e.skeletonData = n);
e._reqHandle = void 0;
i(e);
}
});
},
loadPrefab: function(e) {
return (t = i().mark(function t() {
return i().wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", new Promise(function(t, i) {
cc.loader.loadRes(e, cc.Prefab, function(e, n) {
e ? i(null) : t(n);
});
}));

case 1:
case "end":
return t.stop();
}
}, t);
}), function() {
var e = this, i = arguments;
return new Promise(function(a, o) {
var r = t.apply(e, i);
function s(e) {
n(r, a, o, s, c, "next", e);
}
function c(e) {
n(r, a, o, s, c, "throw", e);
}
s(void 0);
});
})();
var t;
}
}
});
cc._RF.pop();
}, {} ],
RewardItemCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e89f53QIJJNop+cakjntaFQ", "RewardItemCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = n.menu, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.commonAtlas = null;
t.chatBoxAtlas = null;
t.pokerBackAtlas = null;
t.skinShopAtlas = null;
t.userCommonAtlas = null;
return t;
}
t.prototype.updateView = function(e) {
var t = e, i = cc.find("icon", this.node), n = cc.find("avatar", this.node), a = cc.find("hddj", this.node), o = cc.find("value", this.node);
if (i) {
var r = i.getComponent(cc.Sprite);
i.active = !1;
a && (a.active = !1);
n && (n.active = !1);
o.active = !0;
if (43 == t.type) {
n.active = !0;
(c = n.getComponent(sp.Skeleton)) && t.img && cc.vv.UserConfig.setAvatarFrame(c, t.img);
} else if (1 == t.type) {
i.active = !0;
var s = this.commonAtlas.getSpriteFrame("icon_coin_3");
s || (s = this.commonAtlas.getSpriteFrame("icon_coin"));
r.spriteFrame = s;
} else if (2 == t.type) ; else if (25 == t.type) {
i.active = !0;
r.spriteFrame = this.commonAtlas.getSpriteFrame("icon_diamond_3");
} else if (44 == t.type) {
i.active = !0;
r.spriteFrame = this.chatBoxAtlas.getSpriteFrame(t.img);
} else if (40 == t.type) {
i.active = !0;
r.spriteFrame = this.skinShopAtlas.getSpriteFrame(t.img);
} else if (39 == t.type) {
if (this.pokerBackAtlas) {
i.active = !0;
r.spriteFrame = this.pokerBackAtlas.getSpriteFrame(t.img);
}
} else if (53 == t.type) {
i.active = !0;
r.spriteFrame = this.skinShopAtlas.getSpriteFrame(t.img);
} else if (42 == t.type) {
i.active = !0;
r.spriteFrame = this.commonAtlas.getSpriteFrame("icon_rp");
} else if (50 == t.type) {
i.active = !0;
r.spriteFrame = this.skinShopAtlas.getSpriteFrame(t.img);
} else if (54 == t.type) if (a) {
a.active = !0;
var c;
(c = a.getComponent(sp.Skeleton)) && c.setAnimation(0, t.img, !0);
} else {
i.active = !0;
r.spriteFrame = this.userCommonAtlas.getSpriteFrame(t.img);
} else if (51 == t.type) {
i.active = !0;
cc.vv.UserConfig.setVipFrame(r, t.lv || t.count);
o.active = !1;
} else if (52 == t.type) {
i.active = !0;
cc.vv.UserConfig.setRankFrame(r, t.lv || t.count);
o.active = !1;
} else if (55 == t.type) {
i.active = !0;
r.spriteFrame = this.userCommonAtlas.getSpriteFrame(t.img);
} else if (57 == t.type) {
i.active = !0;
r.spriteFrame = this.userCommonAtlas.getSpriteFrame(t.img);
}
var l = cc.find("value", this.node).getComponent(cc.Label), _ = t.count || t.num || t.prize;
if (_ > 0) {
l.string = Global.FormatNumToComma(_);
l.string = Global.formatNumber(_, {
threshold: 1e4
});
}
var u = t.min, h = t.max;
h > 0 && (l.string = u == h ? Global.formatNumber(h, {
threshold: 1e4
}) : Global.formatNumber(u, {
threshold: 1e4
}) + " - " + Global.formatNumber(h, {
threshold: 1e4
}));
t.days && t.days > 0 && (l.string = ___("{1}天", t.days));
t.day && t.day > 0 && (l.string = ___("{1}天", t.day));
}
};
__decorate([ o(cc.SpriteAtlas) ], t.prototype, "commonAtlas", void 0);
__decorate([ o(cc.SpriteAtlas) ], t.prototype, "chatBoxAtlas", void 0);
__decorate([ o(cc.SpriteAtlas) ], t.prototype, "pokerBackAtlas", void 0);
__decorate([ o(cc.SpriteAtlas) ], t.prototype, "skinShopAtlas", void 0);
__decorate([ o(cc.SpriteAtlas) ], t.prototype, "userCommonAtlas", void 0);
return __decorate([ a, r("UI/奖励组件") ], t);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
RewardListCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e61d4UiwENDnLOVPPi71pJa", "RewardListCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("./RewardItemCpt"), a = cc._decorator, o = a.ccclass, r = a.property, s = a.menu, c = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.itemNode = null;
t.contentNode = null;
t.nodeMap = {};
return t;
}
t.prototype.updateView = function(e, t) {
t = t || [];
var i = [];
if (e instanceof Array) i = e; else {
var a = e.addCoin || e.coin;
a && i.push({
type: 1,
count: a
});
var o = e.addDiamond || e.diamond;
o && i.push({
type: 25,
count: o
});
}
this.closeAll();
this.nodeMap = {};
for (var r = 0; r < i.length; r++) {
var s = i[r];
if (2 != s.type) {
var c = this.contentNode.children[r];
c || ((c = cc.instantiate(this.itemNode)).parent = this.contentNode);
c.active = !0;
for (var l = 0, _ = t; l < _.length; l++) {
var u = _[l];
if (u.type == s.type) {
cc.find("icon", c) && (cc.find("icon", c).scale = u.scale);
cc.find("avatar", c) && (cc.find("avatar", c).scale = u.scale);
cc.find("hddj", c) && (cc.find("hddj", c).scale = u.scale);
}
}
this.nodeMap[s.type] = {
node: c,
data: s,
icon: cc.find("icon", c),
avatar: cc.find("avatar", c),
hddj: cc.find("hddj", c),
value: cc.find("value", c)
};
c.getComponent(n.default).updateView(s);
} else this.nodeMap[s.type] = {
data: s
};
}
return this.nodeMap;
};
t.prototype.closeAll = function() {
for (var e = 0; e < this.contentNode.children.length; e++) this.contentNode.children[e].active = !1;
};
t.prototype.showAll = function() {
for (var e = 0; e < this.contentNode.children.length; e++) this.contentNode.children[e].active = !0;
};
t.prototype.runHintAnim = function(e, t) {
for (var i = 0; i < this.contentNode.children.length; i++) {
var n = this.contentNode.children[i];
n.active = !0;
n.stopAllActions();
var a = n.position;
n.position = a.add(cc.v3(0, 100));
n.opacity = 0;
cc.tween(n).delay(e + t * i).to(.3, {
position: a,
opacity: 255
}, {
easing: "backOut"
}).start();
}
};
__decorate([ r(cc.Node) ], t.prototype, "itemNode", void 0);
__decorate([ r(cc.Node) ], t.prototype, "contentNode", void 0);
return __decorate([ o, s("UI/奖励列表") ], t);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {
"./RewardItemCpt": "RewardItemCpt"
} ],
RuleBtnCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "a7758D5jE5JV6CNAB/yNdsj", "RuleBtnCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("./RuleViewCpt"), a = cc._decorator, o = a.ccclass, r = a.property, s = a.menu, c = a.requireComponent, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.key = "";
t.height = 1148;
return t;
}
t.prototype.onLoad = function() {
this.node.getComponent(cc.Button) && this.node.on("click", this.onClick, this);
};
t.prototype.onClick = function() {
var e = this;
if (this.key) {
var t = cc.vv.i18nManager.getConfig(), i = "https://inter.sekiengame.com/fb/ruleimg/" + this.key + "_" + t.lang + ".png";
cc.vv.PopupManager.addPopup("BalootClient/BaseRes/prefabs/PopupRuleCommon", {
scaleIn: !0,
onShow: function(t) {
t.getComponent(n.default).onInit(i, {
height: e.height
});
}
});
}
};
__decorate([ r ], t.prototype, "key", void 0);
__decorate([ r ], t.prototype, "height", void 0);
return __decorate([ o, s("Web规则按钮"), c(cc.Button) ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {
"./RuleViewCpt": "RuleViewCpt"
} ],
RuleViewCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "20db4ewbBVEbLyFSTHf/Pz3", "RuleViewCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.ruleSp = null;
t.bgNode = null;
t.loaddingNode = null;
t._reqHandle = null;
return t;
}
t.prototype.onLoad = function() {
this.loaddingNode.active = !0;
};
t.prototype.onInit = function(e, t) {
var i = this;
if (e) {
var n = t.height || 1148;
n = Math.min(1148, n);
n = Math.max(600, n);
this._reqHandle && this._reqHandle.rejectFunc();
this.loaddingNode.active = !0;
this.bgNode.height = n;
this._reqHandle = cc.vv.ResManager.loadImage(e, function(e, t) {
cc.isValid(i.ruleSp) && cc.isValid(i.ruleSp.node) && t && (i.ruleSp.spriteFrame = new cc.SpriteFrame(t));
i._reqHandle = null;
i.loaddingNode && cc.isValid(i.loaddingNode) && (i.loaddingNode.active = !1);
});
}
};
t.prototype.onDestroy = function() {
this._reqHandle && this._reqHandle.rejectFunc();
};
__decorate([ o(cc.Sprite) ], t.prototype, "ruleSp", void 0);
__decorate([ o(cc.Node) ], t.prototype, "bgNode", void 0);
__decorate([ o(cc.Node) ], t.prototype, "loaddingNode", void 0);
return __decorate([ a ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
SafeWidget: [ function(e, t) {
"use strict";
cc._RF.push(t, "66968JyueBP2YWNjLDTBBBr", "SafeWidget");
cc.Class({
extends: cc.Component,
editor: {
disallowMultiple: !1,
menu: "通用/竖屏安全区域组件",
requireComponent: cc.Widget
},
onEnable: function() {
this.updateArea();
cc.view.on("canvas-resize", this.updateArea, this);
},
onDisable: function() {
cc.view.off("canvas-resize", this.updateArea, this);
},
updateArea: function() {
if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {
var e = this.node.getComponent(cc.Widget);
if (e) {
e.updateAlignment();
var t = this.node.position, i = this.node.getAnchorPoint();
e.isAlignTop = e.isAlignBottom = e.isAlignLeft = e.isAlignRight = !0;
var n = cc.winSize.width, a = cc.winSize.height, o = cc.sys.getSafeAreaRect();
cc.log(cc.js.formatStr("【winSize】height=%s,width=%s", a, n));
cc.log(cc.js.formatStr("【safeArea】height=%s,width=%s,x=%s,y=%s", o.height, o.width, o.x, o.y));
e.top = a - (o.y + o.height);
e.bottom = 0;
e.left = o.x;
e.right = n - (o.x + o.width);
e.updateAlignment();
var r = this.node.position, s = i.x - (r.x - t.x) / this.node.width, c = i.y - (r.y - t.y) / this.node.height;
this.node.setAnchorPoint(s, c);
e.enabled = !0;
}
}
}
});
cc._RF.pop();
}, {} ],
SceneMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "94373Pjv+pEBJB7iV8EiU2R", "SceneMgr");
cc.Class({
extends: cc.Component,
statics: {
params: null,
enterScene: function(e, t, i) {
var n = this, a = null;
i && (a = "string" == typeof i ? i : i.orientation);
cc.director.resume();
cc.vv.FloatTip && cc.vv.FloatTip.clear();
var o = cc.director.getScene();
if (o.name !== e) {
AppLog.log("@@@@@@@@@@@@@@@@@@sceneName:" + e);
Global.dispatchEvent(EventId.HIDE_SHOP);
o.name == Global.SCENE_NAME.HALL && Global.dispatchEvent(EventId.HALL_RECYCLE_ITEM);
var r = e;
if (e === Global.SCENE_NAME.LOGIN) {
cc.vv.AppData.clearGameId();
a = "portrait";
} else if (e === Global.SCENE_NAME.HOTUPDATE) {
cc.vv.AppData.clearGameId();
a = "portrait";
} else if ("solt_loading" === e) ; else if (e === Global.SCENE_NAME.HALL) {
cc.vv.AppData.clearGameId();
cc.vv.gameData && cc.vv.gameData.onExit();
a = "portrait";
} else e !== Global.SCENE_NAME.HALL_PRELOAD && e != Global.SCENE_NAME.SLOT_BACKLOBBY || (a = "portrait");
a || (a = "landscape");
cc.vv.PlatformApiMgr.setOrientation(a);
cc.vv.BroadcastManager && cc.vv.BroadcastManager.stop();
if (r === Global.SCENE_NAME.HALL_PRELOAD || r === Global.SCENE_NAME.HALL || r === Global.SCENE_NAME.LOGIN || r === Global.SCENE_NAME.LAUNCH || r === Global.SCENE_NAME.HOTUPDATE) cc.director.loadScene(e, function(e, i) {
r !== Global.SCENE_NAME.HALL && r !== Global.SCENE_NAME.LOGIN && r != Global.SCENE_NAME.QUEST || cc.vv.gameData && cc.vv.gameData.clear();
!e && i && (i.autoReleaseAssets = !0);
cc.vv.BroadcastManager && cc.vv.BroadcastManager.run();
t && t(e, i);
}); else {
var s = r;
i && i.mainScene && (s = i.mainScene);
var c = window[s];
if (c) if (r == s) this.loadScene(c, r, t); else {
c.releaseAll();
cc.assetManager.removeBundle(c);
window[s] = null;
cc.assetManager.loadBundle(s, null, function(e, i) {
window[s] = i;
n.loadScene(i, r, t);
});
} else cc.assetManager.loadBundle(s, null, function(e, i) {
window[s] = i;
n.loadScene(i, r, t);
});
}
}
},
loadScene: function(e, t, i) {
e.loadScene(t, function(e, n) {
if (e) AppLog.err(e); else {
StatisticsMgr.httpReport(StatisticsMgr.HTTP_GAME_ENTER, null, t);
cc.director.runSceneImmediate(n);
t !== Global.SCENE_NAME.HALL && t !== Global.SCENE_NAME.LOGIN && t != Global.SCENE_NAME.QUEST || cc.vv.gameData && cc.vv.gameData.clear();
!e && n && (n.autoReleaseAssets = !0);
cc.vv.BroadcastManager && cc.vv.BroadcastManager.run();
i && i(e, n);
}
});
},
GetCurSceneName: function() {
return cc.director.getScene().name;
},
isInHallScene: function() {
return cc.director.getScene().name === Global.SCENE_NAME.HALL;
},
isInLoginScene: function() {
return cc.director.getScene().name === Global.SCENE_NAME.LOGIN;
},
CanShowHallPreLoading: function() {
var e = cc.director.getScene();
return e.name === Global.SCENE_NAME.LOGIN || e.name === Global.SCENE_NAME.HOTUPDATE || e.name == Global.SCENE_NAME.LAUNCH;
},
setParams: function(e) {
this.params = e;
},
getParams: function(e) {
void 0 === e && (e = !0);
var t = this.params;
e && (this.params = null);
return t;
}
}
});
cc._RF.pop();
}, {} ],
SceneTranslate: [ function(e, t) {
"use strict";
cc._RF.push(t, "2db70BIcnZObZDO6T86DZwI", "SceneTranslate");
cc.Class({
extends: cc.Component,
properties: {
maskNode: cc.Node
},
onLoad: function() {
Global.FixDesignScale_V(this.node, !0);
},
toHall: function(e) {
var t = this;
cc.director.preloadScene(Global.SCENE_NAME.HALL, function() {
t.loadHalled = !0;
if (t.exitAnimed && e) {
e();
e = null;
}
});
this.maskNode.width = 4e3;
this.maskNode.height = 4e3;
cc.tween(this.maskNode).to(.5, {
width: 0,
height: 0
}).call(function() {
t.exitAnimed = !0;
Global.isYDApp() || Global.stopAllTimer();
if (t.loadHalled && e) {
e();
e = null;
}
}).start();
},
open: function() {
var e = this;
this.maskNode.width = 0;
this.maskNode.height = 0;
cc.tween(this.maskNode).to(.5, {
width: 4e3,
height: 4e3
}).call(function() {
cc.vv.PopupManager.removePopup(e.node);
}).start();
},
update: function() {
if (!this.entered && this.exitAnimed && this.loadHalled) {
cc.vv.SceneMgr.enterScene(Global.SCENE_NAME.HALL);
this.entered = !0;
}
}
});
cc._RF.pop();
}, {} ],
ScrollViewDrawCallOpacity: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "7a1a4xigM9BKpDv7QUBH8B+", "ScrollViewDrawCallOpacity");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.content = null;
t.interval = .1;
t.scrollview = null;
t.itemCount = null;
t.svBBoxRect = null;
return t;
}
t.prototype.onLoad = function() {
this.scrollview = this.node.getComponent(cc.ScrollView) || this.node.getComponent(cc.PageView);
null != this.scrollview && null != this.scrollview && this.schedule(this.scheduleCallback, this.interval || .1);
};
t.prototype.onEnable = function() {};
t.prototype.start = function() {};
t.prototype.scheduleCallback = function() {
(this.scrollview.isScrolling() || this.scrollview.isAutoScrolling()) && this.scrollViewDrawCallOpacity();
};
t.prototype.onDisable = function() {};
t.prototype.scrollViewDrawCallOpacity = function() {
if (null != this.scrollview && null != this.scrollview) {
var e = this.scrollview.node.parent.convertToWorldSpaceAR(cc.v2(this.scrollview.node.x - this.scrollview.node.anchorX * this.scrollview.node.width, this.scrollview.node.y - this.scrollview.node.anchorY * this.scrollview.node.height));
this.svBBoxRect = cc.rect(e.x, e.y, this.scrollview.node.width, this.scrollview.node.height);
this.itemCount = this.content || this.scrollview.content;
for (var t = 0; t < this.itemCount.children.length; t++) {
var i = this.itemCount.children[t];
i.getBoundingBoxToWorld().intersects(this.svBBoxRect) ? 255 != i.opacity && (i.opacity = 255) : 0 != i.opacity && (i.opacity = 0);
}
}
};
__decorate([ o({
type: cc.Node,
tooltip: "可不传,默认是content,如果是别的节点,比如layout可以从这里传进来"
}) ], t.prototype, "content", void 0);
__decorate([ o({
tooltip: "刷新时间间隔"
}) ], t.prototype, "interval", void 0);
return __decorate([ a ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
SingleHide: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "1d14bywLtJLvreoYwQ8Yaz/", "SingleHide");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = (n.property, n.menu), r = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this.node.active = !Global.isSingle();
};
return __decorate([ a, o("UI/SingleHide") ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
Slideshow3DItem: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "18a3cDk69dBJKXUP5Q7M2Qs", "Slideshow3DItem");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = (n.property, function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.left = null;
t.right = null;
t.angle = 0;
return t;
}
return __decorate([ a ], t);
}(cc.Component));
i.default = o;
cc._RF.pop();
}, {} ],
Slideshow3D: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "dd362TOnxtEs6ZUTSF2Bow2", "Slideshow3D");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("./Slideshow3DItem"), a = cc._decorator, o = a.ccclass, r = a.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.paddingAngle = 80;
t.radius = 500;
t.speed = 5;
t.speedCoefficient = .3;
t.autoTime = 7;
t.itemList = [];
t.indexAngle = 0;
t.tempAngle = 0;
t.Angle = 0;
t.itemNodePrefab = null;
return t;
}
Object.defineProperty(t.prototype, "numItems", {
set: function(e) {
for (var t = 0; t < e; t++) {
var i = cc.instantiate(this.itemNodePrefab);
i.parent = this.node;
this.updateFunc && this.updateFunc(i, t);
var a = i.addComponent(n.default);
this.itemList.push(a);
}
for (t = 0; t < this.itemList.length; t++) {
a = this.itemList[t];
this.itemList[t - 1] ? a.left = this.itemList[t - 1] : a.left = this.itemList[this.itemList.length - 1];
this.itemList[t + 1] ? a.right = this.itemList[t + 1] : a.right = this.itemList[0];
a.angle = this.paddingAngle * t;
}
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this.itemNodePrefab.active = !1;
this.circlePoint = this.node.position.add(cc.v3(0, 0, -this.radius));
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
};
t.prototype.onEnable = function() {
this.autoTime;
};
t.prototype.onDisable = function() {};
t.prototype.onTouchStart = function() {
this.running = !0;
};
t.prototype.onTouchMove = function(e) {
this.indexAngle += e.getDeltaX() * this.speedCoefficient;
};
t.prototype.onTouchEnd = function() {
cc.log("onTouchEnd ");
this.autoTime;
};
t.prototype.toNext = function() {};
t.prototype.toPrev = function() {};
t.prototype.runToAngle = function(e, t) {
var i = this;
void 0 === e && (e = 1);
cc.tween(this).call(function() {
i.running = !0;
}).to(e, {
indexAngle: t
}, {
easing: "quadOut"
}).call(function() {
i.running = !1;
}).start();
};
t.prototype.update = function() {
for (var e = 0, t = this.itemList; e < t.length; e++) {
var i = t[e], n = this.indexAngle + i.angle;
this.updateItemAttr(i, n);
}
};
t.prototype.updateItemAttr = function(e, t) {
e.node.position = this.circlePoint.add(cc.v3(Math.sin(t * Math.PI / 180), 0, Math.cos(t * Math.PI / 180)).mul(this.radius));
e.node.eulerAngles = cc.v3(0, t, 0);
e.node.zIndex = e.node.position.z;
};
t.prototype.setUpdateFunc = function(e) {
this.updateFunc = e;
};
t.prototype.setChangeFunc = function(e) {
this.changeFunc = e;
};
t.prototype.skipPage = function() {};
__decorate([ r ], t.prototype, "paddingAngle", void 0);
__decorate([ r ], t.prototype, "radius", void 0);
__decorate([ r ], t.prototype, "speed", void 0);
__decorate([ r ], t.prototype, "speedCoefficient", void 0);
__decorate([ r ], t.prototype, "autoTime", void 0);
__decorate([ r(cc.Node) ], t.prototype, "itemNodePrefab", void 0);
return __decorate([ o ], t);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {
"./Slideshow3DItem": "Slideshow3DItem"
} ],
StatisticsMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "df683v9ijlE8IFciYaq5hi1", "StatisticsMgr");
var i, n, a = ((i = {
"top/node_head": {
act: "open_head",
des: "点开大厅头像"
},
"PersonalInfo/spr_ui_bg/btnClose": {
act: "close_head",
des: "关闭用户详情"
},
"PersonalInfo/spr_ui_bg/node_info/btn_layout/btn_fb": {
act: "head_facebook",
des: "用户详情-connect"
},
"PersonalInfo/spr_ui_bg/node_info/btn_connectus": {
act: "head_contactus",
des: "用户详情-connectus"
},
"PersonalInfo/ChangeHead/bg/btn_confirm": {
act: "sure_headpic",
des: "用户详情-确认替换头像"
},
"PersonalInfo/spr_ui_bg/node_info/btn_change": {
act: "edit_headpic",
des: "用户详情-进入换头像"
},
"top/exp_bg": {
act: "click_level",
des: "大厅-点击等级条"
},
"menu_top/btn_initgift": {
act: "click_initgift",
des: "大厅-点击initgift"
},
"menu_top/btn_pig": {
act: "click_hallpig",
des: "大厅-点击initgift"
},
firstCharge: {
act: "open_purchase",
des: "大厅-点击firstcharge"
},
"menu_top/btn_email": {
act: "open_mail",
des: "点开大厅邮件"
},
"hall_email/spr_bg/btn_close": {
act: "close_mail",
des: "关闭邮件界面"
},
"hall_email/spr_bg/btn_collect": {
act: "mail_collectall",
des: "邮件-collectall"
},
"hall_email/spr_bg/spr_center/Scrollview/view/content/mail_item/btn": {
act: "mail_collect",
des: "邮件-点击单个邮件"
},
"menu_top/btn_rank": {
act: "open_rank",
des: "点开大厅-rank"
},
"ranking_list/comm_pop_ui_bg": {
act: "close_rank",
des: "关闭大厅-rank"
},
"menu_top/btn_vip": {
act: "open_vip",
des: "大厅打开VIP"
},
"vip/btn_close": {
act: "close_vip",
des: "大厅关闭VIP"
},
"vip/node_content/node_title/node_exp/btn_tip": {
act: "vip_help",
des: "VIP-帮助问号"
},
"menu_top/btn_fb": {
act: "open_event",
des: "大厅点开EventBonus"
},
"FbFeedback/pop_win_bg/btn_close": {
act: "close_event",
des: "大厅关闭EventBonus"
},
"FbFeedback/pop_win_bg/btn_contactus": {
act: "event_contact",
des: "EventBonus-ConnectUS"
},
"menu_top/btn_menu": {
act: "open_menu",
des: "打开大厅设置界面"
},
menu: {
act: "close_menu",
des: "关闭大厅设置界面"
},
"menu/menu_bg/btn_rate": {
act: "menu_rateus",
des: "大厅菜单-rateus"
},
"menu/menu_bg/btn_setting": {
act: "open_set",
des: "大厅菜单-setting"
},
"LMSlots_Setting/bg/Node_FB_ContactUs/btn_conntactUs": {
act: "set_contact",
des: "设置详情-connect"
},
"LMSlots_Setting/bg/Node_FansPage/btn_FansPage": {
act: "set_fan",
des: "设置详情-fan"
},
"LMSlots_Setting/bg/btn_PrivacyPolicy": {
act: "set_policy",
des: "设置详情-priacypolicy"
},
"LMSlots_Setting/bg/btn_logout": {
act: "logout",
des: "设置详情-logout"
},
"LMSlots_Setting/bg/btn_layout/btn_fbbind": {
act: "fb_bind",
des: "fb_bind"
},
"bottom/btn_buy": {
act: "menu_buy",
des: "Tab-buy"
},
"bottom/btn_poker": {
act: "menu_poker",
des: "menu_poker"
},
"bottom/btn_bonus": {
act: "menu_bonus",
des: "menu_bonus"
},
"bottom/btn_friend": {
act: "menu_friend",
des: "menu_friend"
},
"bottom/btn_slots": {
act: "menu_slots",
des: "menu_slots"
},
"AD_top/pageview/view/content/ad_1": {
act: "ad_monthcard",
des: "广告语-月卡"
},
"AD_top/pageview/view/content/ad_2": {
act: "ad_quest",
des: "广告语-quest"
},
"AD_top/pageview/view/content/ad_3": {
act: "ad_lucksmach",
des: "广告语-砸蛋"
},
"safe_node/LMSlots_Top/btn_pigbank": {
act: "open_pig",
des: "游戏内-打开金猪"
},
"MoneyBankUI/comm_pop_ui_bg": {
act: "close_pig",
des: "游戏内-关闭金猪"
},
"MoneyBankUI/bg/btn_open": {
act: "buy_pig",
des: "游戏内-购买金猪"
},
"MoneyBankUI/bg/node_content/maxi_coin/spr_spin": {
act: "click_pig_gospin",
des: "游戏内-金猪GOSpine"
},
"pages/view/content/page_shop/list_shop/view/content/gift_bank/content/bg/btn_open": {
act: "buy_pig_inhall",
des: "大厅-购买金猪"
},
"shop_pop_ui/page_shop/list_shop/view/content/gift_bank/content/bg/btn_open": {
act: "buy_pig_inpop",
des: "商店弹窗-购买金猪"
},
"pages/view/content/page_bonus/list_bonus/view/content/daily_bonus": {
act: "open_signin",
des: "bonus-打开签到"
},
"Signin/spr_ui_bg/siginList/signin_1/normal/btnRecive": {
act: "signin_1",
des: "签到1天"
},
"Signin/spr_ui_bg/siginList/signin_2/normal/btnRecive": {
act: "signin_2",
des: "签到2天"
},
"Signin/spr_ui_bg/siginList/signin_3/normal/btnRecive": {
act: "signin_3",
des: "签到3天"
},
"Signin/spr_ui_bg/siginList/signin_4/normal/btnRecive": {
act: "signin_4",
des: "签到4天"
},
"Signin/spr_ui_bg/siginList/signin_5/normal/btnRecive": {
act: "signin_5",
des: "签到5天"
},
"Signin/spr_ui_bg/siginList/signin_6/normal/btnRecive": {
act: "signin_6",
des: "签到6天"
},
"Signin/spr_ui_bg/siginList/signin_7/normal/btnRecive": {
act: "signin_7",
des: "签到7天"
},
"pages/view/content/page_bonus/list_bonus/view/content/online_bonus": {
act: "open_online",
des: "大厅打开在线奖励"
},
"online_rewards/node_center/btn_close": {
act: "close_online",
des: "大厅关闭在线奖励"
},
"pages/view/content/page_bonus/list_bonus/view/content/daily_task": {
act: "open_daliytask",
des: "大厅打开DaliyTask"
},
"MissionsMain/spr_ui_bg/btnClose": {
act: "close_online",
des: "大厅关闭DaliyTask"
},
"pages/view/content/page_bonus/list_bonus/view/content/mission_pass": {
act: "open_mission",
des: "大厅打开missionpass"
}
})["MissionsMain/spr_ui_bg/btnClose"] = {
act: "close_mission",
des: "大厅关闭missionpass"
}, i["MissionsMain/spr_ui_bg/RightDetail/MissionPass/btnMissionPass"] = {
act: "open_mission_pass",
des: "点击UNLOCK MISSION PASS"
}, i["MissionsMain/uiPopNode/UnlockMissionPass/btnClose"] = {
act: "close_mission_pass",
des: "关闭UNLOCK MISSION PASS"
}, i["pages/view/content/page_friends/btnNode/friendsListBtn"] = {
act: "friend_tab_friendlist",
des: "好友-tab好友列表"
}, i["pages/view/content/page_friends/btnNode/luckyCoinBtn"] = {
act: "friend_tab_luckycoin",
des: "好友-tabLuckycoin"
}, i["pages/view/content/page_friends/btnNode/friendGiftBtn"] = {
act: "friend_tab_friendgift",
des: "好友-friendgift"
}, i["pages/view/content/page_friends/friendsPage/friendsList/spr_title_bg/btnEdit"] = {
act: "friend_edit",
des: "好友-Edit按钮"
}, i["pages/view/content/page_friends/friendsPage/friendsList/spr_title_bg/btnAddFriends"] = {
act: "click_addfriend",
des: "好友-开addFriend"
}, i["CH_AddFriend/bg/btnClose"] = {
act: "close_addfriend",
des: "好友-关addFriend"
}, i["CH_AddFriend/bg/btnSure"] = {
act: "sure_addfriend",
des: "好友-搜addFriend"
}, i["CH_AlertSelect/bg/btnYES"] = {
act: "sure_editfriend",
des: "好友-搜addFriend"
}, i["CH_RemoveFriend/bg/btnClose"] = {
act: "close_editfriend",
des: "好友-关editFriend"
}, i["safe_node/LMSlots_Top/btn_menu"] = {
act: "open_set",
des: "游戏内点开Top的菜单"
}, i["safe_node/LMSlots_MenuNode/btn_close"] = {
act: "close_set",
des: "游戏内关闭Top的菜单"
}, i["safe_node/LMSlots_MenuNode/btn_help"] = {
act: "game_help",
des: "游戏内菜单-needhelp"
}, i["safe_node/help_node/btn_backgame"] = {
act: "game_help_back",
des: "游戏内帮助-goback"
}, i["safe_node/LMSlots_Bottom/totalBetBg/btn_add"] = {
act: "up_bet",
des: "押注-加"
}, i["safe_node/LMSlots_Bottom/totalBetBg/btn_minus"] = {
act: "down_bet",
des: "押注-减"
}, i["safe_node/LMSlots_Bottom/btn_max"] = {
act: "maxbet",
des: "押注-Max"
}, i["level_up/btn_claim"] = {
act: "",
des: "升级弹窗-claim"
}, i["new_game_notice/bg/btn_confirm"] = {
act: "newgame_turn",
des: "新游戏跳转"
}, i["safe_node/LMSlots_Top/btn_purchase"] = {
act: "open_store",
des: "游戏内-打开Shop弹窗"
}, i["shop_pop_ui/btn_close"] = {
act: "close_store",
des: "游戏内-关闭Shop弹窗"
}, i["safe_node/LMSlots_Bottom/node_task"] = {
act: "ingame_task",
des: "游戏内-task"
}, i["safe_node/LMSlots_Bottom/PopSelectAutoTimes/btn_1"] = {
act: "subgame_auto_10",
des: "自动10次"
}, i["safe_node/LMSlots_Bottom/PopSelectAutoTimes/btn_2"] = {
act: "subgame_auto_20",
des: "自动20次"
}, i["safe_node/LMSlots_Bottom/PopSelectAutoTimes/btn_3"] = {
act: "subgame_auto_50",
des: "自动50次"
}, i["safe_node/LMSlots_Bottom/PopSelectAutoTimes/btn_4"] = {
act: "subgame_auto_100",
des: "自动100次"
}, i["safe_node/LMSlots_Bottom/PopSelectAutoTimes/btn_5"] = {
act: "subgame_auto_500",
des: "自动500次"
}, i["safe_node/LMSlots_Bottom/btn_stop"] = {
act: "subgame_stop_spin",
des: "stop_spin"
}, i["safe_node/LMSlots_Top/btn_backLobby"] = {
act: "subgame_backlobby",
des: "子游戏内返回游戏大厅"
}, i["safe_node/LMSlots_Top/lay_active/node_online_reward/btn_reward"] = {
act: "subgame_onlinereward",
des: "子游戏内在线奖励"
}, i["safe_node/LMSlots_Top/playerLevel"] = {
act: "subgame_exp",
des: "子游戏内经验条"
}, i["safe_node/LMSlots_MenuNode/btn_setting"] = {
act: "subgame_setting",
des: "子游戏内setting"
}, i["hallWheel/hallWheel/wheel/btn_collect"] = {
act: "hall_wheel_enter",
des: "大厅轮盘入口按钮"
}, i["prize_wheel/node_buy/node_sure/bg/lbl_spin"] = {
act: "hall_wheel_makesure_buy",
des: "大厅轮盘确认购买"
}, i["prize_wheel/node_buy/node_sure/btn_close"] = {
act: "hall_wheel_makesure_close",
des: "大厅轮盘确认购买close"
}, i["pages/view/content/page_shop/list_shop/view/content/gift_bank/content/bg/btn_open"] = {
act: "shop_pigbank",
des: "shop-pigbank购买"
}, i), o = cc.Class({
extends: cc.Component,
statics: (n = {
_reqBatchs: [],
_reqOnceRecord: [],
httpReport: function(e) {
var t = {}, i = Global.getDeviceInfo();
t.os = i.osValue.toLowerCase();
t.net = i.netType;
t.phone = cc.js.formatStr("%s(%s)", i.phoneBrand, i.phoneSystemVision);
t.appid = Global.appId;
t.ddid = Global.getLocal("client_uuid", "");
t.uid = Global.getLocal("recent_uid", "");
t.waistcoat = Global.waistcoat || "0";
t.time = new Date().valueOf();
Global.isYDApp() && Global.isNative() && (t.ch = cc.vv.PlatformApiMgr.GetChannelStr());
cc.vv.PlatformApiMgr.isFirebaseSupported() && cc.vv.PlatformApiMgr.firebaseEvent(e, t);
},
errorReport: function() {},
httpAll: function() {},
reqReport: function(e, t, i, n) {
if (e) {
var a = {
c: MsgId.REQ_REPORT_STATISTICS
};
if (this._reqBatchs) {
var o = {};
o.act = e;
o.ext = t || "";
var r = cc.vv.gameData && cc.vv.gameData.getGameId();
r || (r = 0);
o.gameid = i || r;
o.id = n;
o.ts = Math.floor(cc.sys.now() / 1e3);
this._reqBatchs.push(o);
if (this._reqBatchs.length >= (Global.STATIC_BATCH_NUM || 10)) {
a.batchs = this._reqBatchs;
cc.vv.NetManager.send(a, !0);
this._reqBatchs = [];
}
} else {
a.act = e;
a.ext = t || "";
var s = cc.vv.gameData && cc.vv.gameData.getGameId();
s || (s = 0);
a.gameid = i || s;
a.id = n;
cc.vv.NetManager.send(a, !0);
}
}
},
reqReportNow: function(e, t, i, n) {
if (e) {
var a = {
c: MsgId.REQ_REPORT_STATISTICS
};
a.act = e;
a.ext = t || "";
var o = cc.vv.gameData && cc.vv.gameData.getGameId();
o || (o = 0);
a.gameid = i || o;
a.id = n;
cc.vv.PlatformApiMgr.isFirebaseSupported() && cc.vv.PlatformApiMgr.firebaseEvent(e, a);
cc.vv.NetManager.send(a, !0);
}
},
reqReportNowOnce: function(e, t, i, n) {
if (this._reqOnceRecord.indexOf(e) < 0) {
this.reqReportNow(e, t, i, n);
this._reqOnceRecord.push(e);
}
},
httpReportOnce: function(e, t, i) {
if (this._reqOnceRecord.indexOf(e) < 0) {
this.httpReport(e, t, i);
this._reqOnceRecord.push(e);
}
},
startReport: function() {
var e = this;
if (!this._RTHttpLog) {
var t = Global.getLocal("HLog", "");
this._RTHttpLog = t ? JSON.parse(t) : [];
}
this.httpAll();
this._dispatchEvent = cc.Node.prototype.dispatchEvent;
cc.Node.prototype.dispatchEvent = function(t) {
if (cc.vv.NewGuide && cc.vv.NewGuide.GetIsLoadingGuide()) cc.log("==引导加载中==="); else {
e._dispatchEvent.call(this, t);
if (t.type === cc.Node.EventType.TOUCH_END) {
var i = e.getNodeFullPath(this);
cc.log("点击：" + i);
var n = a[i];
n && e.reqReport(n.act);
}
}
};
},
getNodeFullPath: function(e) {
var t = [], i = e;
do {
t.unshift(i.name);
i = i.parent;
} while (i && "Canvas" !== i.name);
return t.join("/");
},
_createrHttpLog: function(e, t, i) {
var n = {};
n.appVer = Global.resVersion;
n.t = new Date().valueOf();
Global.isNative() && (n.x = md5(n.t.toString() + "hero888"));
n.act = e;
t && (n.act_exdata = t);
i && i.key && (n[i.key] = i.val);
return n;
},
doHTTPSendSucc: function(e, t) {
e && (1 == t.type ? this._deleHttpReport(t.time) : 2 == t.type && this._deleAllHttpReport(t.time));
},
_saveHttpReport: function(e) {
this._RTHttpLog.push(e);
Global.saveLocal("HLog", JSON.stringify(this._RTHttpLog));
},
_deleHttpReport: function(e) {
for (var t, i = 0; i < this._RTHttpLog.length; i++) if (this._RTHttpLog[i].t == Number(e)) {
t = i;
break;
}
if (t) {
this._RTHttpLog.splice(t, 1);
Global.saveLocal("HLog", JSON.stringify(this._RTHttpLog));
}
},
_deleAllHttpReport: function(e) {
for (var t = this._RTHttpLog.length - 1; t >= 0; t--) this._RTHttpLog[t].t <= Number(e) && this._RTHttpLog.splice(t, 1);
Global.saveLocal("HLog", JSON.stringify(this._RTHttpLog));
},
REQ_HALL_BGM_OPEN: "open_menu_music",
REQ_HALL_BGM_CLOSE: "close_menu_music",
REQ_HALL_EFFECT_OPEN: "open_menu_sound",
REQ_HALL_EFFECT_CLOSE: "close_menu_sound",
REQ_SETTING_BGM_OPEN: "open_menu_music",
REQ_SETTING_BGM_CLOSE: "close_menu_music",
REQ_SETTING_EFFECT_OPEN: "open_menu_sound",
REQ_SETTING_EFFECT_CLOSE: "close_menu_sound",
REQ_POP_SHOP_OPEN: "open_shop",
REQ_POP_SHOP_CLOSE: "close_shop",
REQ_SHOP_CLICKBOOTER: "click_boost",
REQ_SHOP_BOOST_INFO: "boost_info",
REQ_SHOP_BOOST_HELP: "boost_help",
REQ_HALL_LOADING_START: "Load_Start",
REQ_HALL_LOADING_END: "Load_End",
REQ_ENTER_HALL: "Entry_Main",
REQ_OPEN_NEW_GIFT: "InitCoin",
REQ_START_GAME_GUIDE: "Guide",
REQ_CLICK_SLOTGAME: "click_slot_item",
REQ_MAIL_GOFRIENDS: "mail_go_friend",
REQ_MAIL_GOVIP: "mail_go_vip",
REQ_USER_CANCEL_PAY: "cancel_buy",
REQ_HERO_DETAIL_SHARE: "hero_detail_share",
REQ_HERO_GUIDE_POP: "hero_guide_pop",
REQ_HERO_GUIDE_SKIP: "hero_guide_skip",
REQ_HERO_CAMP_ALL: "hero_camp_all",
REQ_HERO_CAMP_GOLD: "hero_camp_gold",
REQ_HERO_CAMP_WOOD: "hero_camp_wood",
REQ_HERO_CAMP_WATER: "hero_camp_water",
REQ_HERO_CAMP_FIRE: "hero_camp_fire",
REQ_HERO_CAMP_SOIL: "hero_camp_soil",
REQ_HERO_DETAIL: "hero_detail",
REQ_HERO_DETAIL_POP: "hero_detail_pop",
REQ_HERO_DETAIL_TIPPOP: "hero_detail_tippop",
REQ_HERO_DETAIL_TIPCLOSE: "hero_detail_tipclose",
REQ_HERO_DETAIL_GO: "hero_detail_go",
REQ_HERO_DETAIL_SPIN: "hero_detail_spin",
REQ_HERO_DETAIL_ALLSCREEN: "hero_detail_allscreen",
REQ_HERO_DETAIL_EXISTALL: "hero_detail_existall",
REQ_HERO_DETAIL_CLOSE: "hero_detail_close",
REQ_HERO_DETAIL_CHANGE: "hero_detail_change",
REQ_HERO_DETAIL_UNOLOCK: "hero_detail_unolock",
REQ_HERO_DETAIL_PLUSEXP: "hero_detail_plusexp",
REQ_HERO_DETAIL_PLUSEXP_ADD1: "hero_detail_plusexp_add1",
REQ_HERO_DETAIL_PLUSEXP_ADD2: "hero_detail_plusexp_add2",
REQ_HERO_DETAIL_PLUSEXP_CLOSE: "hero_detail_plusexp_close",
REQ_HERO_DETAIL_REWARDS: "hero_detail_rewards",
REQ_HERO_DETAIL_REWARDS_POP: "hero_detail_rewards_pop",
REQ_HERO_DETAIL_REWARDS_COLLECT: "hero_detail_rewards_collect",
REQ_HERO_DETAIL_REWARDS_GO: "hero_detail_rewards_go",
REQ_HERO_DETAIL_REWARDS_COLLECTALL: "hero_detail_rewards_collectall",
REQ_HERO_DETAIL_REWARDS_CLOSE: "hero_detail_rewards_close",
REQ_HERO_DETAIL_EVOLUTION: "hero_detail_evolution",
REQ_HERO_DETAIL_EVOLUTION_GONOW: "hero_detail_evolution_gonow",
REQ_HERO_DETAIL_EVOLUTION_GO: "hero_detail_evolution_go",
REQ_HERO_DETAIL_EVOLUTION_UNLOCK: "hero_detail_evolution_unlock",
REQ_HERO_DETAIL_EVOLUTION_CLOSE: "hero_detail_evolution_close",
REQ_HERO_DETAIL_EVOLUTION_POP: "hero_detail_evolution_pop",
REQ_HERO_DETAIL_LEVEL_VIEWREWARDS: "hero_detail_level_viewrewards",
REQ_FLOAT_100SPIN: "float_100spin",
REQ_FLOAT_EXPLOCK: "float_explock",
REQ_FLOAT_EXPUNLOCK: "float_expunlock",
REQ_WELCOMEBACK_POP: "welcomeback_pop",
REQ_WELCOMEBACK_COLLECT: "welcomeback_collect",
REQ_ONETIMEONLY_POP: "onetimeonly_pop",
REQ_ONETIMEONLY_BUY: "onetimeonly_buy",
REQ_ONETIMEONLY_LATER: "onetimeonly_later",
REQ_MONTHCARD_POP: "monthcard_pop",
REQ_MONTHCARD_BUY: "monthcard_buy",
REQ_MONTHCARD_CLOSE: "monthcard_close",
REQ_MONTHCARD_TRAI3: "monthcard_trai3",
REQ_MONTHCARD_RECEIVED: "monthcard_received",
REQ_QUEST_POP: "quest_pop",
REQ_QUEST_CLOSE: "quest_close",
REQ_QUEST_PLAY: "quest_play",
REQ_QUESTMAIN_ENTER: "questmain_enter",
REQ_QUESTMAIN_EXIST: "questmain_exist",
REQ_QUESTMAIN_START: "questmain_start",
REQ_QUESTMAIN_DOWNLOAD: "questmain_download",
REQ_QUESTMAIN_REWARDINFO: "questmain_rewardinfo",
REQ_QUESTMAIN_REWARDPOP: "questmain_reward_pop",
REQ_QUESTMAIN_REWARDCOLLECT: "questmain_reward_collect",
REQ_QUESTINGAME_START: "questingame_start",
REQ_QUESTINGAME_START_CONTINUE: "questingame_start_continue",
REQ_QUESTINGAME_END: "questingame_end",
REQ_QUESTINGAME_END_CONTINUE: "questingame_end_continue",
REQ_SPECIALOFFER_POP: "specialoffer_pop",
REQ_SPECIALOFFER_BUY: "specialoffer_buy",
REQ_SPECIALOFFER_CLOSE: "specialoffer_close",
REQ_PIGBANK_POP: "pigbank_pop",
REQ_PIGBANK_BUY: "pigbank_buy",
REQ_PIGBANK_CLOSE: "pigbank_close",
REQ_PIGBANK_FREE: "pigbank_free",
REQ_PIGBANK_RULE: "pigbank_rule",
REQ_PIGBANK_RULE_CLOSE: "pigbank_rule_close",
REQ_HALL_WHEEL_POP: "hall_wheel_pop",
REQ_HALL_WHEEL_SPIN: "hall_wheel_spin",
REQ_HALL_WHEEL_COLLECT: "hall_wheel_collect",
REQ_HALL_WHEEL_SKIP: "hall_wheel_skip",
REQ_HALL_BUYWHEEL_POP: "hall_buywheel_pop",
REQ_HALL_BUYWHEEL_BUY: "hall_buywheel_buy",
REQ_HALL_BUYWHEEL_CLOSE: "hall_buywheel_close",
REQ_HALL_BUYWHEEL_SUREPOP: "hall_buywheel_surepop",
REQ_HALL_BUYWHEEL_SURESPIN: "hall_buywheel_surespin",
REQ_HALL_BUYWHEEL_SURECLOSE: "hall_buywheel_sureclose",
REQ_SUBGAME_DOWNLOAD_START: "subgame_download_start",
REQ_SUBGAME_DOWNLOAD_FAILE: "subgame_download_faile",
REQ_SUBGAME_DOWNLOAD_SUCCESS: "subgame_download_success",
REQ_SUBGAME_CLICK: "subgame_click_game",
REQ_SUBGAME_LOCKTIP: "subgame_locktip",
REQ_SUBGAME_LOADING_START: "subgame_loading_start",
REQ_SUBGAME_LOADING_FAIL: "subgame_loading_fail",
REQ_SUBGAME_LOADING_SUCC: "subgame_loading_succ",
REQ_JJJ_POP: "jjj_pop",
REQ_JJJ_COLLECT: "jjj_collect",
REQ_LVUPPARTY_POP: "levelup_party_pop",
REQ_LVUPPARTY_COLLECT: "levelup_party_collect",
REQ_LVUPPARTY_PURSURE: "levelup_party_pursure_pop",
REQ_LVUPPARTY_PURSURE_CLOSE: "levelup_party_pursure_close",
REQ_LVUPPARTY_PURSURE_BUY: "levelup_party_pursure_buy",
REQ_LVUPEXP_POP: "levelup_exp_pop",
REQ_LVUPEXP_COLLECT: "levelup_exp_collect",
REQ_QUEST_UNLOCK_UI: "quest_unlock_ui",
REQ_HEROCARD_UNLOCK_UI: "herocard_unlock_ui",
REQ_HEROCARD_UNLOCK_GO: "herocard_unlock_go",
REQ_PIGBANK_UNLOCK_UI: "pigbank_unlock_ui",
REQ_LUCKYSMACH_UNLOCK_UI: "luckysmach_unlock_ui",
REQ_DAILYMISSION_POP: "daily_mission_pop",
REQ_BUY_GIFT: "buy_gift_harm",
REQ_BUY_ONETIMEONLY: "buy_click_onetimeonly",
REQ_BUY_PIGBANK: "buy_click_pigbank",
REQ_BUY_PIGBANK_HELP: "buy_click_pigbank_help",
REQ_BUY_WEEKCARD: "buy_click_weekcard",
REQ_BUY_MONTHCARD: "buy_click_monthcard",
REQ_BUY_MONTHCARD_COLLECT: "buy_monthcard_collect",
REQ_BUY_INBOX_COIN: "buy_inbox_coin",
REQ_BUY_GROWTHFUND: "buy_growth_fund",
REQ_BUY_GROWTHFUND_COLLECT: "buy_growth_fund_collect",
REQ_BUY_SPRINGGIFT: "buy_springgift",
REQ_BUY_TABCOIN: "buy_tab_coin",
REQ_BUY_TABSALE: "buy_tab_sale",
REQ_BUY_TABDIAMOND: "buy_tab_diamond",
REQ_BUY_COINLIST: "buy_coin_list",
REQ_BUY_LEVEL_GIFT: "buy_level_package",
REQ_LUCKYCARD_POP: "luckycard_pop",
REQ_LUCKYCARD_GUIDE: "luckycard_guide",
REQ_LUCKYCARD_FLIP: "luckycard_flip",
REQ_LUCKYCARD_TAKEREWARD: "luckycard_takereward",
REQ_LUCKYCARD_FINALREWARD_POP: "luckycard_finalreward_pop",
REQ_LUCKYCARD_FINALREWARD_COLLECT: "luckycard_finalreward_collect",
REQ_LUCKYCARD_GAMEOVER: "luckycard_gameover",
REQ_LUCKYCARD_GIVEUP: "luckycard_giveup",
REQ_LUCKYCARD_USE: "luckycard_use",
REQ_LUCKYCARD_GAMEOVER_BUY: "luckycard_gameover_buy",
REQ_LUCKYCARD_BUY_POP: "luckycard_buy_pop",
REQ_LUCKYCARD_BUY_CONFIRM: "luckycard_buy_confirm",
REQ_LUCKYCARD_BUY_CLOSE: "luckycard_buy_close",
REQ_LUCKYCARD_HEART_BUY: "luckycard_heart_buy",
REQ_LUCKYCARD_CLOSE: "luckycard_close",
REQ_FRIENZY_COLLECT: "frienzy_collect",
REQ_FRIENZY_QUESTMASK: "frienzy_questmask",
REQ_FRIENZY_QUESTMASK_CLOSE: "frienzy_questmask_close",
REQ_BOUNUS_FRIENZY: "tab_bonus_onlinereward",
REQ_BOUNUS_QUEST: "tab_bonus_quest",
REQ_BOUNUS_DAILYMISSION: "tab_bonus_dailymission",
REQ_BOUNUS_DAILYBONUS: "tab_bonus_dailybonus",
REQ_BOUNUS_LUCKYSMACH: "tab_bonus_lucksmach",
REQ_BOUNUS_LUCKYCARD: "tab_bonus_luckcard",
REQ_BOUNUS_SHAREFB: "tab_bonus_sharefb",
REQ_BOUNUS_SHAREFB_SHAREANDENJOY: "tab_bonus_sharefb_shareandenjoy",
REQ_BOUNUS_SHAREFB_SHAREANDENJOY_POP: "tab_bonus_sharefb_shareandenjoy_pop",
REQ_BOUNUS_SHAREFB_SHAREANDENJOY_SHARETOFB: "tab_bonus_sharefb_shareandenjoy_sharetofb",
REQ_BOUNUS_SHAREFB_SHAREANDENJOY_SHARETOFB_POP: "tab_bonus_sharefb_shareandenjoy_sharetofb_pop",
REQ_BOUNUS_SHAREFB_SHAREANDENJOY_SHARETOFB_COLLECT: "tab_bonus_sharefb_shareandenjoy_sharetofb_collect",
REQ_BOUNUS_SHAREFB_SHAREANDENJOY_SHARETOFB7_POP: "tab_bonus_sharefb_shareandenjoy_sharetofb7_pop",
REQ_BOUNUS_SHAREFB_SHAREANDENJOY_SHARETOFB7_SPIN: "tab_bonus_sharefb_shareandenjoy_sharetofb7_spin",
REQ_BOUNUS_SHAREFB_SHAREANDENJOY_SHARETOFB7_SPIN_POP: "tab_bonus_sharefb_shareandenjoy_sharetofb7_spin_pop",
REQ_BOUNUS_SHAREFB_SHAREANDENJOY_SHARETOFB7_SPIN_COLLECT: "tab_bonus_sharefb_shareandenjoy_sharetofb7_spin_collect",
REQ_BOUNUS_GIFT: "tab_bonus_gift",
REQ_DAILYMISSION_GOSPIN: "tab_dailymission_gospin",
REQ_DAILYMISSION_COLLECT: "tab_dailymission_collect",
REQ_DAILYMISSION_GIFTBOX_CHECK: "tab_dailymission_giftbox_check",
REQ_DAILYMISSION_GIFTBOX_TAKE: "tab_dailymission_giftbox_take",
REQ_DAILYMISSION_CLICK_EGG: "tab_dailymission_clickegg",
REQ_SMASHUI_POP: "smashui_pop",
REQ_SMASHUI_RULE: "smashui_rule",
REQ_SMASHUI_NEXT: "smashui_next",
REQ_SMASHUI_CLOSE: "smashui_close",
REQ_SMASHUI_SLIVER_POP: "smashui_sliver_pop",
REQ_SMASHUI_SLIVER_SMAH: "smashui_sliver_smash",
REQ_SMASHUI_SLIVER_BUY_POP: "smashui_sliver_buypop",
REQ_SMASHUI_SLIVER_BUY: "smashui_sliver_buy",
REQ_SMASHUI_SLIVER_BUY_CANCEL: "smashui_sliver_buycanel",
REQ_SMASHUI_GOLD_POP: "smashui_gold_pop",
REQ_SMASHUI_GOLD_BUY_POP: "smashui_gold_buypop",
REQ_SMASHUI_GOLD_SMAH: "smashui_gold_smash",
REQ_SMASHUI_GOLD_BUY: "smashui_gold_buy",
REQ_SMASHUI_GOLD_BUY_CANCEL: "smashui_gold_buycanel",
REQ_SMASH_CLOSE: "smash_close",
REQ_SOCIAL_HI: "social_hi",
REQ_SOCIAL_ADDME: "social_addme",
REQ_SOCIAL_SEND: "social_send",
REQ_SOCIAL_INPUTMSG: "social_inputmsg",
REQ_SOCIAL_GIFT: "social_gift",
REQ_SOCIAL_GIFTCLOSE: "social_giftclose",
REQ_SOCIAL_NEWS: "social_news",
REQ_SOCIAL_FRIENDS: "social_friends",
REQ_SOCIAL_CHAT: "social_chat",
REQ_SOCIAL_FRIENDS_SEND: "social_friends_send",
REQ_SOCIAL_FRIENDS_CHAT: "social_friends_chat",
REQ_SOCIAL_FRIENDS_COLLECT: "social_friends_collect",
REQ_SOCIAL_FRIENDS_COLLECTALL_OUT: "social_friends_collectall_out",
REQ_SOCIAL_FRIENDS_COLLECTALL_COLLECT: "social_friends_collectall_collect",
REQ_SOCIAL_FRIENDS_COLLECTALL_FBSHARE: "social_friends_collectall_fbshare",
REQ_SOCIAL_FRIENDS_GIFTBACK: "social_friends_giftback",
REQ_SOCIAL_ADDFRIENDS_OUT: "social_addfriends_out",
REQ_SOCIAL_ADDFRIENDS_ADD: "social_addfriends_add",
REQ_SOCIAL_ADDFRIENDS_SEARCH_OUT: "social_addfriends_search_out",
REQ_SOCIAL_ADDFRIENDS_SEARCH_ADD: "social_addfriends_search_add",
REQ_SOCIAL_ADDFRIENDS_SEARCHID: "social_addfriends_searchid",
REQ_SOCIAL_ADDFRIENDS_REFRUSH: "social_addfriends_refrush",
REQ_SOCIAL_ADDFRIENDS_SEARCH_CLOSE: "social_addfriends_search_close",
REQ_SOCIAL_ADDFRIENDS_CLOSE: "social_addfriends_close",
REQ_SOCIAL_DELFRIENDS_OUT: "social_delfriends_out",
REQ_SOCIAL_DELFRIENDS_SELECTALL: "social_delfriends_selectall",
REQ_SOCIAL_DELFRIENDS_SELECT: "social_delfriends_select",
REQ_SOCIAL_DELFRIENDS_SELECT_OUT: "social_delfriends_select_out",
REQ_SOCIAL_DELFRIENDS_SELECT_OUT_POP: "social_delfriends_select_out_pop",
REQ_SOCIAL_DELFRIENDS_SELECT_CONFIRM: "social_delfriends_select_confirm",
REQ_SOCIAL_DELFRIENDS_SELECT_CLOSE: "social_delfriends_select_close",
REQ_SOCIAL_FRIENDS_MORE: "social_friends_more",
REQ_SOCIAL_FRIENDS_MORE_FBFRIENDS: "social_friends_more_fbfriends",
REQ_SOCIAL_FRIENDS_MANAG: "social_friends_manag",
REQ_SOCIAL_CHAT_GLOBAL: "social_chat_global",
REQ_SOCIAL_CHAT_GIFT: "social_chat_gift",
REQ_SOCIAL_CHAT_RANK: "social_chat_rank",
REQ_SOCIAL_CHAT_PRIVATE: "social_chat_private",
REQ_SOCIAL_CHAT_ARROW: "social_chat_arrow",
REQ_SOCIAL_RANKQUIZ: "social_rankquiz",
REQ_SOCIAL_RANKQUIZ_RULE: "social_rankquiz_rule",
REQ_SOCIAL_RANKQUIZ_ADD: "social_rankquiz_add",
REQ_SOCIAL_RANKQUIZ_REDUCE: "social_rankquiz_reduce",
REQ_SOCIAL_RANKQUIZ_CONFIRM: "social_rankquiz_confirm",
REQ_SOCIAL_RANKQUIZ_CLOSE: "social_rankquiz_close",
REQ_SOCIAL_GOTOINBOX: "social_gotobox",
REQ_SELECTBET_TAB_NOR: "selectbet_tab_nor",
REQ_SELECTBET_TAB_HIG: "selectbet_tab_hig",
REQ_SELECTBET_NOR_BET: "selectbet_nor_bet",
REQ_SELECTBET_HIG_BET: "selectbet_hig_bet",
REQ_SELECTBET_LEFT: "selectbet_left",
REQ_SELECTBET_RIGHT: "selectbet_right",
REQ_HEROPALACE_EARNINGPT: "heropalace_earningpoint",
REQ_HEROPALACE_GOSPIN: "heropalace_gospin",
REQ_HEROPALACE_BUYPIG: "heropalace_buypig",
REQ_HEROPALACE_DOUBLEEXP: "heropalace_doubleexp",
REQ_HEROPALACE_HEROPACK: "heropalace_heropack",
REQ_HEROPALACE_ONLINEREWARD: "heropalace_onlinereward",
REQ_HEROPALACE_POINT_BUY: "heropalace_pointui_buy",
REQ_HEROPALACE_POINT_TAB_PLAY: "heropalace_pointui_play",
REQ_HEROPALACE_POINT_TAB_STORE: "heropalace_pointui_store",
REQ_HEROPALACE_HALL_OPEN: "open_palace",
REQ_BINGO_FLOAT_LOCK: "bingo_float_lock",
REQ_BINGO_FLOAT_LOCK_POPTIP: "bingo_float_lock_poptip",
REQ_BINGO_FLOAT_UNLOCK: "bingo_float_unlock",
REQ_BINGO_FLOAT_UNLOCK_click: "bingo_float_unlock_click",
REQ_BINGO_FLOAT_UNLOCK_BETTIP: "bingo_float_unlock_bettip",
REQ_BINGO_GAME_BACK: "bingo_game_back",
REQ_BINGO_LEVEL_BACK: "bingo_level_back",
REQ_BINGO_LEVEL_PLAY: "bingo_level_play",
REQ_BINGO_PLAYTIP_POP: "bingo_playtip_pop",
REQ_BINGO_PLAYTIP_PLAYGAME: "bingo_playtip_playgame",
REQ_BINGO_PLAYTIP_NOTIFY: "bingo_playtip_notify",
REQ_BINGO_PLAYTIP_CLOSE: "bingo_playtip_close",
REQ_BINGO_PLAY: "bingo_play",
REQ_BINGO_REWARD_POP: "bingo_reward_pop",
REQ_BINGO_REWARD_COIN: "bingo_reward_coin",
REQ_BINGO_REWARD_COUNT: "bingo_reward_count",
REQ_BINGO_BUY_BACK: "bingo_buy_back",
REQ_BINGO_BUY_GIFT: "bingo_buy_gift",
REQ_BINGO_BUY_BUFF: "bingo_buy_buff",
REQ_BINGO_HELP_POP: "bingo_help_pop",
REQ_BINGO_HELP_PAGE: "bingo_help_page",
REQ_BINGO_HELP_CLOSE: "bingo_help_close",
REQ_BINGO_RANK_CLOSE: "bingo_rank_close",
REQ_BINGO_RANK_HELP: "bingo_rank_help",
REQ_BINGO_RANK_HELP_CLOSE: "bingo_rank_help_close",
REQ_BINGO_LEFT10S_POP: "bingo_left10s_pop",
REQ_BINGO_LEFT10M_POP: "bingo_left10m_pop",
REQ_BINGO_LEFT10S_OK: "bingo_left10s_ok",
REQ_BINGO_LEFT10M_OK: "bingo_left10m_ok",
REQ_BINGO_NEWSEASON_POP: "bingo_newseason_pop",
REQ_BINGO_NEWSEASON_ENJOY: "bingo_newseason_enjoy",
REQ_BENEFITS_CLICK: "benefits_click",
REQ_BENEFITS_POP: "benefits_pop",
REQ_BENEFITS_CLOSE: "benefits_close",
REQ_HERO_WHEEL_POP: "hero_wheel_pop",
REQ_HERO_WHEEL_FILL: "hero_wheel_fill",
REQ_HERO_WHEEL_GO: "hero_wheel_go",
REQ_HERO_WHEEL_GO_SPIN: "hero_wheel_go_spin",
REQ_HERO_WHEEL_GO_SPIN_POP: "hero_wheel_go_spin_pop",
REQ_HERO_WHEEL_GO_SPIN_COLLECT: "hero_wheel_go_spin_collect",
REQ_HERO_WHEEL_CARDADD: "hero_wheel_cardadd",
REQ_HERO_WHEEL_CARDREDUCE: "hero_wheel_cardreduce",
REQ_HERO_WHEEL_GOLD: "hero_wheel_gold",
REQ_HERO_WHEEL_WOOD: "hero_wheel_wood",
REQ_HERO_WHEEL_WATER: "hero_wheel_water",
REQ_HERO_WHEEL_FIRE: "hero_wheel_fire",
REQ_HERO_WHEEL_SOIL: "hero_wheel_soil",
REQ_HERO_WHEEL_ALL: "hero_wheel_all",
REQ_HERO_WHEEL_CLOSE: "hero_wheel_close",
REQ_HERO_REWARD: "hero_reward",
REQ_HERO_REWARD_POP: "hero_reward_pop",
REQ_HERO_REWARD_PROGRESSING: "hero_reward_progressing",
REQ_HERO_REWARD_COLLECT: "hero_reward_collect",
REQ_HERO_REWARD_COLLECTALL: "hero_reward_collectall",
REQ_HERO_REWARD_CLOSE: "hero_reward_close",
REQ_HERO_MORE: "hero_more",
REQ_HERO_MORE_RULE: "hero_more_rule",
REQ_HERO_MORE_RULE_POP: "hero_more_rule_pop",
REQ_HERO_MORE_RULE_CLOSE: "hero_more_rule_close",
REQ_HERO_MORE_COLLECTION: "hero_more_collection",
REQ_HERO_MORE_COLLECTION_POP: "hero_more_collection_pop",
REQ_HERO_MORE_COLLECTION_GOLD: "hero_more_collection_gold",
REQ_HERO_MORE_COLLECTION_WOOD: "hero_more_collection_wood",
REQ_HERO_MORE_COLLECTION_WATER: "hero_more_collection_water",
REQ_HERO_MORE_COLLECTION_FIRE: "hero_more_collection_fire",
REQ_HERO_MORE_COLLECTION_SOIL: "hero_more_collection_soil",
REQ_HERO_MORE_COLLECTION_SHARE: "hero_more_collection_share",
REQ_HERO_MORE_COLLECTION_CLOSE: "hero_more_collection_close",
REQ_HERO_SUMMON: "hero_summon",
REQ_HERO_SUMMON_POP: "hero_summon_pop",
REQ_HERO_SUMMON_RULE: "hero_summon_rule",
REQ_HERO_SUMMON_RULE_POP: "hero_summon_rule_pop",
REQ_HERO_SUMMON_RULE_CLOSE: "hero_summon_rule_close",
REQ_HERO_SUMMON_ONCE: "hero_summon_once",
REQ_HERO_SUMMON_TENTN: "hero_summon_tenth",
REQ_HERO_SUMMON_CLOSE: "hero_summon_close",
REQ_SHOWSIMPLE_POP: "showsimple_pop",
REQ_SHOWSIMPLE_YES: "showsimple_yes",
REQ_SHOWSIMPLE_NO: "showsimple_no",
REQ_PACKDROP_POP: "packdrop_pop",
REQ_PACKDROP_CONFIRM: "packdrop_confirm",
REQ_PACKDROP_AGAIN: "packdrop_again",
REQ_PACKDROP_CONTINUE: "packdrop_continue",
REQ_PACKDROP_SKIP: "packdrop_skip",
REQ_FBBINDAD_POP: "fbbindad_pop",
REQ_FBBINDAD_CONNECT: "fbbindad_connect",
REQ_FBBINDAD_CLOSE: "fbbindad_close",
REQ_FUND_POP: "fund_pop",
REQ_FUND_BUY: "fund_buy",
REQ_FUND_CLOSE: "fund_close",
REQ_FIRSTBUYGIFT: "firstbuygift",
REQ_FIRSTBUYGIFT_POP: "firstbuygift_pop",
REQ_FIRSTBUYGIFT_GETNOW: "firstbuygift_getnow",
REQ_FIRSTBUYGIFT_CLOSE: "firstbuygift_close",
REQ_FIRSTBUYGIFT_COLLECT: "firstbuygift_collect",
REQ_MAIL_BOX: "mail_box",
REQ_MAIL_FBCONNECT: "mail_fbconnect",
REQ_MAIL_REDEEM: "mail_redeem",
REQ_MAIL_FBBIND_POP: "mail_fbbind_pop",
REQ_MAIL_FBBIND_CONNECT: "mail_fbbind_connect",
REQ_MAIL_FBBIND_CLOSE: "mail_fbbind_close",
REQ_HEROROAD_OPEN: "heroroad_open",
REQ_HEROROAD_CLOSE: "heroroad_close",
REQ_HEROROAD_BTN2: "heroroad_btn2",
REQ_HEROROAD_BTN3: "heroroad_btn3",
REQ_HEROROAD_BTNQUEST: "heroroad_btnquest",
REQ_HEROROAD_BTNMISSION: "heroroad_btnmission",
REQ_HEROROAD_BTNBONUS: "heroroad_btnbonus",
REQ_HEROROAD_BTNSCRATCH: "heroroad_btnscratch",
REQ_HEROROAD_BTNBIGPIG: "heroroad_btnbigpig",
REQ_HEROROAD_BTNUNLOCKSLOTS: "heroroad_btnunlockslots",
REQ_HEROROAD_BTNLUCKYSMASH: "heroroad_btnluckysmash",
REQ_HEROROAD_BTNRANKING: "heroroad_btnranking",
REQ_HEROROAD_BTNHERO: "heroroad_btnhero",
REQ_SLOTLEVEL_QUEST_CLOSE: "slotlevel_quest_close",
REQ_SLOTLEVEL_QUEST_PLAY: "slotlevel_quest_play",
REQ_SLOTLEVEL_MISSION_POP: "slotlevel_mission_pop",
REQ_SLOTLEVEL_MISSION_CLICK: "slotlevel_mission_click",
REQ_SLOTLEVEL_MISSION_COLLECT: "slotlevel_mission_collect",
REQ_SLOTLEVEL_MISSION_COLLECTALL: "slotlevel_mission_collectall",
REQ_MISSION_TIP: "mission_tip",
REQ_SLOTLEVEL_MISSION_GO: "slotlevel_mission_go",
REQ_SLOTLEVEL_MISSION_DIA: "slotlevel_mission_dia",
REQ_SLOTLEVEL_MISSION_DIA_TIP: "slotlevel_mission_dia_tip",
REQ_SLOTLEVEL_MISSION_CLOSE: "slotlevel_mission_close",
REQ_SLOTLEVEL_BONUS_COLLECT: "slotlevel_bonus_collect",
REQ_SLOTLEVEL_BONUS_CLOSE: "slotlevel_bonus_close",
REQ_SLOTLEVEL_SCRATCH: "slotlevel_scratch",
REQ_SLOTLEVEL_SCRATCH_CLOSE: "slotlevel_scratch_close",
REQ_SLOTLEVEL_MISSION_SMASH: "slotlevel_mission_smash",
REQ_SLOTLEVEL_MISSION_TAB: "slotlevel_mission_tab",
REQ_SLOTLEVEL_RANKING_POP: "slotlevel_ranking_pop",
REQ_SLOTLEVEL_RANKING_CLOSE: "slotlevel_ranking_close",
REQ_SLOTLEVEL_RANKING_TOTALWIN: "slotlevel_ranking_totalwin",
REQ_SLOTLEVEL_RANKING_WINRANK: "slotlevel_ranking_winrank",
REQ_SLOTLEVEL_RANKING_LEVELUP: "slotlevel_ranking_levelup",
REQ_SLOTLEVEL_RANKING_BET: "slotlevel_ranking_bet",
REQ_SLOTLEVEL_RANKING_HREOCARD: "slotlevel_ranking_herocard",
REQ_SLOTLEVEL_RANKING_IBTN: "slotlevel_ranking_ibtn",
REQ_SLOTLEVEL_RANKING_PVP: "slotlevel_ranking_pvp",
HTTP_ENTER_BACKGROUND: "enter_background",
HTTP_NET_TIMEOUT: "net_timeout",
HTTP_REGISTER: "addToken",
HTTP_LAUNCH: "startApp",
HTTP_START_HOTUPDATE: "loadHotUpdate",
HTTP_SUCCESS_HOTUPDATE: "endLoadHot",
SHOW_LOGO: "showlogo",
START_LOADRES: "startloadres",
END_LOADRES: "endloadres",
HTTP_UPDATE_RESTART: "update_restart",
HTTP_ADJUST_INFO_START: "adjustInfoStart",
HTTP_ADJUST_INFO_SUCC: "adjustInfoSucc",
HTTP_ADJUST_INFO_FAIL: "adjustInfoFail",
HTTP_START_AUTO_LOGIN: "autoLogin",
HTTP_SHOW_LOGIN: "showLogin",
HTTP_LOGIN_SUCC: "loginSceneSucc",
HTTP_GAME_ENTER: "gameEnter",
HTTP_GAME_RECONNECTION: "gameReconnection",
HTTP_GAME_EXITS: "gameExits",
HTTP_HOTUPDATE_PRO_ENTER: "hotupdate_pro_enter",
HTTP_HOTUPDATE_PRO_CHECK: "hotupdate_pro_check",
HTTP_HOTUPDATE_PRO_CHECKRESULT: "hotupdate_pro_checkresult",
HTTP_HOTUPDATE_PRO_TIME15: "hotupdate_pro_time15",
HTTP_HOTUPDATE_PRO_TIME30: "hotupdate_pro_time30",
HTTP_HOTUPDATE_PRO_TIME45: "hotupdate_pro_time45",
HTTP_HOTUPDATE_PRO_TIME60: "hotupdate_pro_time60",
HTTP_HOTUPDATE_PRO_TIME90: "hotupdate_pro_time90",
HTTP_HOTUPDATE_PRO_TIME180: "hotupdate_pro_time180",
HTTP_HWSDK_LOGIN_FAIL: "hwsdk_login_fail",
HTTP_CLICK_HW_SIGN: "hwsdk_click_sign",
HTTP_CLICK_GUEST_SIGN: "guest_click_sign",
HTTP_CLICK_FB_SIGN: "fb_click_sign",
HTTP_CLICK_APPLE_SIGN: "apple_click_sign",
HTTP_HOTUPDATE_PRO_FAILED: "hotupdate_pro_failed",
HTTP_SUBGAME_HOT_START: "http_subgame_hotupdate_start",
HTTP_SUBGAME_HOT_PROCESS: "http_subgame_hotupdate_process",
HTTP_SUBGAME_HOT_RESULT: "http_subgame_hotupdate_result",
HTTP_DISCONNECT: "http_disconnect",
HTTP_SPIN_NET_TIME: "SpinTime",
HTTP_SEND_MSG1: "sendMsg1",
REQ_BOUNUS_EXPROLATION_SPIN: "bounus_exprolation_spin",
REQ_BOUNUS_EXPROLATION_CLOSE: "bounus_exprolation_close",
REQ_BOUNUS_EXPROLATION_KEEPGOING: "bounus_exprolation_keepgoing",
REQ_BOUNUS_EXPROLATION_BOXOPENNOW: "bounus_exprolation_boxopennow",
REQ_BOUNUS_EXPROLATION_BOXOPENNOW_POP: "bounus_exprolation_boxopennow_pop",
REQ_BOUNUS_EXPROLATION_BOXOPENNOW_YES: "bounus_exprolation_boxopennow_yes",
REQ_BOUNUS_EXPROLATION_BOXOPENNOW_NO: "bounus_exprolation_boxopennow_no",
REQ_BOUNUS_EXPROLATION_BOXOPEN: "bounus_exprolation_boxopen",
REQ_BOUNUS_EXPROLATION_BOXOPEN_POP: "bounus_exprolation_boxopen_pop",
REQ_BOUNUS_EXPROLATION_DESPOP: "bounus_exprolation_despop",
REQ_BOUNUS_EXPROLATION_DESCOLSE: "bounus_exprolation_descolse",
REQ_BOUNUS_EXPROLATION_PAY_CLOSE: "bounus_exprolation_pay_close",
REQ_BOUNUS_EXPROLATION_PAY_POINTONE: "bounus_exprolation_pay_pointone",
REQ_EXPROLATION_PLAYTIP_POP: "exprolation_playtip_pop",
REQ_EXPROLATION_PLAYTIP_GO: "exprolation_playtip_go",
REQ_EXPROLATION_PLAYTIP_CHECK: "exprolation_playtip_check",
REQ_EXPROLATION_PLAYTIP_CLOSE: "exprolation_playtip_close",
REQ_SUGGEST: "suggest",
REQ_WHEELINGAME_POP: "wheelingame_pop",
REQ_WHEELINGAME_GO: "wheelingame_go",
REQ_WHEELINGAME_CLOSE: "wheelingame_close",
REQ_ABTEST_POP: "abtest_pop",
REQ_ABTEST_WAIT: "abtest_wait",
REQ_ABTEST_WAIT_DOWNLOAD: "abtest_wait_download",
REQ_ABTEST_WAIT_CLOSE: "abtest_wait_close",
REQ_ABTEST_CLOSE: "abtest_close",
REQ_HALL_CLICKCOIN: "hall_clickcoin",
REQ_HALL_CLICKDIA: "hall_clickdia",
REQ_HALL_PERSONALINFO_EDITNAME: "hall_personalinfo_editname",
REQ_HALL_PERSONALINFO_COIN: "hall_personalinfo_coin",
REQ_HALL_PERSONALINFO_DIA: "hall_personalinfo_dia"
}, n.REQ_DAILYMISSION_POP = "dailymission_pop", n.REQ_DAILYMISSION_COLLECT = "dailymission_collect", 
n.REQ_DAILYBONUS_POP = "dailybonus_pop", n.REQ_BIGWIN_POP = "bigwin_pop", n.REQ_BIGWIN_SHAREFB = "bigwin_sharefb", 
n.REQ_BIGWIN_CLOSE = "bigwin_close", n.REQ_CASHBACK_POP = "cashback_pop", n.REQ_CASHBACK_CLOSE = "cashback_close", 
n.REQ_CASHBACK_INGAME_POP = "cashback_ingame_pop", n.REQ_CASHBACKWALLET_CLICK = "cashbackwallet_click", 
n.REQ_CASHBACK_TOMORROW_POP = "cashback_tomorrow_pop", n.REQ_CASHBACK_TOMORROW_COLLECT = "cashback_tomorrow_collect", 
n.REQ_SETTING_FBBIND = "setting_fbbind", n.REQ_NEWGAME_POP = "newgame_pop", n.REQ_NEWGAME_GOSPIN = "newgame_gospin", 
n.REQ_NEWGAME_CLOSE = "newgame_close", n.REQ_NEWGAME_HODEON_POP = "newgame_hodeon_pop", 
n.REQ_NEWGAME_HODEON_CONFIRM = "newgame_hodeon_confirm", n.REQ_NEWGAME_HODEON_CLOSE = "newgame_hodeon_close", 
n.REQ_BONUS_CLICKTAB = "bonus_clicktab", n.REQ_BONUS_CLICKITEM_BTN = "bonus_clickitem_btn", 
n.REQ_CARDDROP_UNLOCK = "carddrop_unlock", n.REQ_CHAT_PRIVATECLICK = "chat_privateclick", 
n.REQ_CHAT_PRIVATEPOP = "chat_privatepop", n.REQ_CHAT_PRIVATEGIFT = "chat_privategift", 
n.REQ_CHAT_PRIVATECLOSE = "chat_privateclose", n)
});
window.StatisticsMgr = o;
cc._RF.pop();
}, {} ],
Tabbar: [ function(e, t) {
"use strict";
cc._RF.push(t, "b9d5dRQiUVEQpZTnXLHaZzf", "Tabbar");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var a = 0;
return function() {
return a >= e.length ? {
done: !0
} : {
done: !1,
value: e[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
var o = cc.Enum({
NODE: 1,
PREFAB: 2
}), r = cc.Class({
name: "TabbarItem",
properties: {
selectNode: {
displayName: "选中节点",
default: null,
type: cc.Node
},
unSelectNode: {
displayName: "未选中节点",
default: null,
type: cc.Node
},
pageType: {
displayName: "内容类型",
default: o.NODE,
type: o
},
pageNode: {
displayName: "内容节点",
default: null,
type: cc.Node,
visible: function() {
return this.pageType == o.NODE;
}
},
pagePrefab: {
displayName: "内容预制体",
default: null,
type: cc.Prefab,
visible: function() {
return this.pageType == o.PREFAB;
}
},
pageParent: {
displayName: "预制体父节点",
default: null,
type: cc.Node,
visible: function() {
return this.pageType == o.PREFAB;
}
},
pageOnLoad: {
displayName: "是否直接加载",
default: !1,
visible: function() {
return this.pageType == o.PREFAB;
}
},
scale: 1,
pagePrefab_review: {
displayName: "提审内容预制体",
default: null,
type: cc.Prefab,
visible: function() {
return this.pageType == o.PREFAB;
}
},
pageParent_review: {
displayName: "提审内容预制体父节点",
default: null,
type: cc.Node,
visible: function() {
return this.pageType == o.PREFAB;
}
}
}
}), s = cc.Class({
extends: cc.Component,
editor: {
disallowMultiple: !1,
menu: "通用/选项卡"
},
properties: {
tabs: {
default: [],
type: [ r ]
},
defaultIndex: -1,
_index: -1,
index: {
get: function() {
return this._index;
}
},
indexItem: {
visible: !1,
get: function() {
return this.tabs[this._index];
}
},
useSound: !0
},
onLoad: function() {
for (var e, t = this, n = function() {
var i = e.value;
i.selectNode.active = !1;
i.unSelectNode.active = !0;
if (i.pagePrefab && i.pageParent) {
var n = i.pagePrefab, a = i.pageParent;
if (Global.isIOSAndroidReview() && i.pagePrefab_review) {
n = i.pagePrefab_review;
a = i.pageParent_review;
}
i.pageNode = cc.instantiate(n);
i.pageNode.active = i.pageOnLoad;
a.addChild(i.pageNode);
}
if (i.pageNode) {
i.pageNode.active = !1;
i.pageNode.scale = i.scale;
}
if (i.unSelectNode) {
var o = i.unSelectNode.addComponent(cc.Button);
o && o.node.on("click", function() {
t.useSound && cc.vv.EventManager.emit("EVENT_BTN_CLICK_SOUNDS");
t.onSelectPage(i, !1);
});
}
}, a = i(this.tabs); !(e = a()).done; ) n();
this.setPage(this.defaultIndex);
},
setChangeCallback: function(e) {
this.callback = e;
},
setPreChangeCallback: function(e) {
this.preCallback = e;
},
onSelectPage: function(e, t) {
if (t || !this.preCallback || !this.preCallback(this.tabs.indexOf(e), e, this.tabs)) {
this._index = this.tabs.indexOf(e);
for (var n, a = i(this.tabs); !(n = a()).done; ) {
var o = n.value;
o.selectNode.active = o == e;
o.unSelectNode.active = o != e;
o.pageNode && (o.pageNode.active = o == e);
}
this.callback && this.callback(this._index, e, this.tabs);
}
},
setPage: function(e, t) {
this.index != e && this.tabs[e] && this.onSelectPage(this.tabs[e], t);
}
});
t.exports = s;
cc._RF.pop();
}, {} ],
TimeDownCpt: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "73f978QrnBAbqiC0lTB6Fmz", "TimeDownCpt");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = n.menu, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.richText = null;
t.pause = !1;
t._timelife = 0;
t.formatStr = "hh:mm:ss";
return t;
}
Object.defineProperty(t.prototype, "timelife", {
get: function() {
return this._timelife;
},
set: function(e) {
this._timelife = e;
if (this.label) {
this.label.string = e > 0 ? Global.formatSecond(e, this.formatStr) : "";
this.updateFunc && this.updateFunc(e, this.label);
}
if (this.richText) {
this.richText.string = e > 0 ? Global.formatSecond(e, this.formatStr) : "";
this.updateFunc && this.updateFunc(e, this.richText);
}
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
var e = this;
this.schedule(function() {
if (!e.pause && e.timelife > 0) {
e.timelife--;
e.timelife <= 0 && e.callback && e.callback();
}
}, 1);
};
t.prototype.setUpdateFunc = function(e) {
this.updateFunc = e;
};
t.prototype.setCallback = function(e) {
this.callback = e;
};
t.prototype.setTimeFormatStr = function(e) {
this.formatStr = e;
};
__decorate([ o(cc.Label) ], t.prototype, "label", void 0);
__decorate([ o(cc.RichText) ], t.prototype, "richText", void 0);
return __decorate([ a, r("UI/倒计时组件") ], t);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {} ],
TimerMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "4fe7fdkgoVNsbQD/5sZTrwS", "TimerMgr");
cc.Class({
extends: cc.Component,
statics: {
_count1000: 0,
_count100: 0,
_nInter: 50,
init: function() {
setInterval(this.update.bind(this), this._nInter);
},
update: function() {
this._count1000 += this._nInter;
this._count100 += this._nInter;
if (this._count1000 >= 1e3) {
this._count1000 = 0;
if (cc.vv.UserManager) {
cc.vv.UserManager.update && cc.vv.UserManager.update(1);
cc.vv.UserManager.updateTimer && cc.vv.UserManager.updateTimer(1);
}
cc.vv.gameData && cc.vv.gameData.update(1);
}
cc.vv.PlatformApiMgr && cc.vv.PlatformApiMgr.update();
cc.vv.NetManager && (Global.reconnect_break || cc.vv.NetManager.updateTimer(this._nInter));
cc.vv.NetCacheMgr && cc.vv.NetCacheMgr.update(this._nInter);
}
}
});
cc._RF.pop();
}, {} ],
TradPlusAdMgr: [ function(e, t) {
"use strict";
cc._RF.push(t, "7babbNCi4xMDYr+EiC5/HCM", "TradPlusAdMgr");
cc.Class({
extends: cc.Component,
statics: {
_adUnitId: null,
init: function() {
cc.vv.PlatformApiMgr.addCallback(this.interstitialLoadedCallBack, "interstitialLoadedCallBack");
cc.vv.PlatformApiMgr.addCallback(this.channelNameCallBack, "channelNameCallBack");
cc.vv.PlatformApiMgr.addCallback(this.rewardedVideoLoadedCallBack, "rewardedVideoLoadedCallBack");
cc.vv.PlatformApiMgr.addCallback(this.rewardedVideoRewardedCallBack, "rewardedVideoRewardedCallBack");
cc.vv.PlatformApiMgr.addCallback(this.rewardedVideoAdDismissedCallBack, "rewardedVideoAdDismissedCallBack");
},
loadAdRewardedVideo: function(e) {
cc.vv.PlatformApiMgr.loadTradPlusRewardedVideo(e);
this._adUnitId = e;
},
showTradPlusRewardedVideo: function() {
cc.vv.PlatformApiMgr.showTradPlusRewardedVideo(this._adUnitId || (Global.isIOS() ? "160AFCDF01DDA48CCE0DBDBE69C8C669" : "39DAC7EAC046676C5404004A311D1DB1"));
},
interstitialLoadedCallBack: function() {
AppLog.warn("TradPlusAdMgr.interstitialLoadedCallBack");
},
channelNameCallBack: function(e) {
AppLog.warn("TradPlusAdMgr.channelNameCallBack(" + JSON.stringify(e) + ")");
},
rewardedVideoLoadedCallBack: function() {
AppLog.warn("TradPlusAdMgr.rewardedVideoLoadedCallBack");
},
rewardedVideoRewardedCallBack: function(e) {
AppLog.warn("TradPlusAdMgr.rewardedVideoRewardedCallBack(" + JSON.stringify(e) + ")");
},
rewardedVideoAdDismissedCallBack: function() {
AppLog.warn("TradPlusAdMgr.rewardedVideoAdDismissedCallBack");
}
}
});
cc._RF.pop();
}, {} ],
UIActionIn: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "eae5diadllHjqLAFa7DUTiI", "UIActionIn");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("./ActionType"), a = cc._decorator, o = a.ccclass, r = a.property, s = a.menu, c = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.auto = !0;
t.animTime = .3;
t.actionType = n.ActionType.None;
t.easingType = n.EasingType.None;
t.offsetPos = cc.Vec3.ZERO;
t.endCallFuncs = [];
t.initPos = null;
return t;
}
t.prototype.onLoad = function() {
var e = this.getComponent(cc.Widget);
e && e.updateAlignment();
this.initPos = this.node.position;
this.actionType == n.ActionType.MOVE && (this.node.position = this.initPos.add(this.offsetPos));
};
t.prototype.start = function() {};
t.prototype.onEnable = function() {
this.auto && this.run();
};
t.prototype.onDisable = function() {};
t.prototype.run = function() {
var e = this;
this.node.stopAllActions();
var t = void 0;
this.easingType == n.EasingType.sineOut ? t = "sineOut" : this.easingType == n.EasingType.quadOut ? t = "quadOut" : this.easingType == n.EasingType.backOut ? t = "backOut" : this.easingType == n.EasingType.backIn && (t = "backIn");
var i = null;
if (this.actionType == n.ActionType.SCALE) {
this.node.scale = .2;
i = cc.tween().to(this.animTime, {
scale: 1
}, {
easing: t
});
} else if (this.actionType == n.ActionType.MOVE) {
this.node.position = this.initPos.add(this.offsetPos);
i = cc.tween().to(this.animTime, {
position: this.initPos
}, {
easing: t
});
}
cc.tween(this.node).then(i).call(function() {
for (var t = 0, i = e.endCallFuncs; t < i.length; t++) (0, i[t])(e.node);
}).start();
};
t.prototype.addEndCallFunc = function(e) {
this.endCallFuncs.push(e);
};
__decorate([ r ], t.prototype, "auto", void 0);
__decorate([ r ], t.prototype, "animTime", void 0);
__decorate([ r({
type: cc.Enum(n.ActionType),
displayName: "动作"
}) ], t.prototype, "actionType", void 0);
__decorate([ r({
type: cc.Enum(n.EasingType),
displayName: "缓动"
}) ], t.prototype, "easingType", void 0);
__decorate([ r({
type: cc.Vec3,
displayName: "起始偏移位置",
visible: function() {
return this.actionType == n.ActionType.MOVE;
}
}) ], t.prototype, "offsetPos", void 0);
return __decorate([ o, s("UI动作/进入") ], t);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {
"./ActionType": "ActionType"
} ],
UIActionLoop: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "85c72XgBbZJQKOXj4EDfvQt", "UIActionLoop");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("./ActionType"), a = cc._decorator, o = a.ccclass, r = a.property, s = a.menu, c = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.auto = !0;
t.animTime = .3;
t.actionType = n.ActionType.None;
t.easingType = n.EasingType.None;
t.offsetPos = cc.Vec3.ZERO;
t.initPos = null;
return t;
}
t.prototype.onLoad = function() {
var e = this.getComponent(cc.Widget);
e && e.updateAlignment();
this.initPos = this.node.position;
this.actionType == n.ActionType.MOVE && (this.node.position = this.initPos.add(this.offsetPos));
};
t.prototype.start = function() {};
t.prototype.onEnable = function() {
this.auto && this.run();
};
t.prototype.onDisable = function() {};
t.prototype.run = function() {
this.node.stopAllActions();
var e = void 0;
this.easingType == n.EasingType.sineOut ? e = "sineOut" : this.easingType == n.EasingType.quadOut ? e = "quadOut" : this.easingType == n.EasingType.backOut ? e = "backOut" : this.easingType == n.EasingType.backIn && (e = "backIn");
var t = cc.tween(this.node);
if (this.actionType == n.ActionType.SCALE) {
this.node.scale = .2;
t.to(this.animTime, {
scale: 1
}, {
easing: e
});
} else if (this.actionType == n.ActionType.MOVE) {
this.node.position = this.initPos.add(this.offsetPos);
t.to(this.animTime, {
position: this.initPos
}, {
easing: e
});
}
t.repeatForever().start();
};
__decorate([ r ], t.prototype, "auto", void 0);
__decorate([ r ], t.prototype, "animTime", void 0);
__decorate([ r({
type: cc.Enum(n.ActionType),
displayName: "动作"
}) ], t.prototype, "actionType", void 0);
__decorate([ r({
type: cc.Enum(n.EasingType),
displayName: "缓动"
}) ], t.prototype, "easingType", void 0);
__decorate([ r({
type: cc.Vec3,
displayName: "起始偏移位置",
visible: function() {
return this.actionType == n.ActionType.MOVE;
}
}) ], t.prototype, "offsetPos", void 0);
return __decorate([ o, s("UI动作/持续") ], t);
}(cc.Component);
i.default = c;
cc._RF.pop();
}, {
"./ActionType": "ActionType"
} ],
UIActionMove: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e94e8k8g5RGo5dN2DHTAX9U", "UIActionMove");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = cc._decorator, a = n.ccclass, o = n.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.initPos = null;
t.offsetPos = cc.Vec3.ZERO;
t.animTime = .3;
t.auto = !1;
return t;
}
t.prototype.onLoad = function() {
this.initPos = this.node.position;
this.node.position = this.initPos.add(this.offsetPos);
};
t.prototype.onEnable = function() {
this.auto && this.run();
};
t.prototype.run = function() {
this.node.stopAllActions();
this.node.position = this.initPos.add(this.offsetPos);
cc.tween(this.node).to(this.animTime, {
position: this.initPos
}, {
easing: "sineOut"
}).start();
};
__decorate([ o(cc.Vec3) ], t.prototype, "offsetPos", void 0);
__decorate([ o ], t.prototype, "animTime", void 0);
__decorate([ o ], t.prototype, "auto", void 0);
return __decorate([ a ], t);
}(cc.Component);
i.default = r;
cc._RF.pop();
}, {} ],
UI_popwin_interface: [ function(e, t) {
"use strict";
cc._RF.push(t, "394efWCZuRG34N7/gCilePs", "UI_popwin_interface");
cc.Class({
extends: cc.Component,
properties: {
btn_close: {
default: null,
type: cc.Node,
tooltip: "关闭按钮延迟显示"
}
},
onEnable: function() {
Global.FixDesignScale_V(this.node);
var e = this.node.scale;
Global.showAlertAction(this.node, !0, .01, e, this.popWinEndCall.bind(this));
this.showCloseBtnAni();
},
onDisable: function() {
Global.showAlertAction(this.node, !1, this.node.scale, 0);
},
showCloseBtnAni: function() {
if (this.btn_close) {
this.btn_close.opacity = 0;
cc.tween(this.btn_close).delay(.8).to(.5, {
opacity: 255
}).start();
}
},
getDesignSpaceX: function() {
return 0;
},
getDegignSpaceY: function() {
return 0;
},
popWinEndCall: function() {}
});
cc._RF.pop();
}, {} ],
UserConfig: [ function(e, t) {
"use strict";
cc._RF.push(t, "9837a5QciRNg5JrqK83UL2P", "UserConfig");
var i, n;
function a(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = o(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var n = 0;
return function() {
return n >= e.length ? {
done: !0
} : {
done: !1,
value: e[n++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function o(e, t) {
if (e) {
if ("string" == typeof e) return r(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(e, t) : void 0;
}
}
function r(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
cc.Class({
extends: cc.Component,
statics: {
gameMap: [ {
gameid: 265,
get title() {
return ___("Domino");
},
bBetSelect: !0,
bDownload: !0
}, {
gameid: 269,
get title() {
return ___("Ludo");
},
bBetSelect: !0,
bDownload: !0
}, {
gameid: 287,
get title() {
return ___("UNO");
},
bBetSelect: !0,
bDownload: !0
}, {
gameid: 11,
get title() {
return "Andar Bahar";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 12,
get title() {
return "Crash";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 13,
get title() {
return "Jhandi Munda";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 14,
get title() {
return "Horse Racing";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 15,
get title() {
return "Wingo Lottery";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 16,
get title() {
return "Fortune Wheel";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 17,
get title() {
return "Dragon VS Tiger";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 18,
get title() {
return "Roulette";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 19,
get title() {
return "Baccarat";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 20,
get title() {
return "7 Up Down";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 21,
get title() {
return "Aladdin's Blessing";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 22,
get title() {
return "Aviator";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 23,
get title() {
return "Aviatrix";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 24,
get title() {
return "CrashX";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 25,
get title() {
return "CricketX";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 26,
get title() {
return "JetX";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 27,
get title() {
return "Zeppelin";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 28,
get title() {
return "Dice";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 29,
get title() {
return "Limbo";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 30,
get title() {
return "PLinko";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 31,
get title() {
return "Keno";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 32,
get title() {
return "Mines";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 33,
get title() {
return "Hilo";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 34,
get title() {
return "Towers";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 35,
get title() {
return "DoubleRoll";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 36,
get title() {
return "Coins";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 37,
get title() {
return "Crypto";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 38,
get title() {
return "Triple";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 39,
get title() {
return "Cappadocia";
},
bTableSelect: !0,
bDownload: !0
}, {
gameid: 255,
get title() {
return "Black Jack";
},
bBetSelect: !0,
bDownload: !0
}, {
gameid: 291,
get title() {
return "Teen Patti";
},
bBetSelect: !0,
bDownload: !0
}, {
gameid: 292,
get title() {
return "Rummy";
},
bBetSelect: !0,
bDownload: !0
}, {
gameid: 293,
get title() {
return "Poker";
},
bBetSelect: !0,
bDownload: !0
} ],
salonGamesList: [ 292, 255, 265, 269, 287, 291, 293 ],
allGameIds: function() {
for (var e, t = [], i = a(this.gameMap); !(e = i()).done; ) {
var n = e.value;
t.push(n.gameid);
}
return t;
},
allBetSelectIds: function() {
for (var e, t = [], i = a(this.gameMap); !(e = i()).done; ) {
var n = e.value;
n.bBetSelect && t.push(n.gameid);
}
return t;
},
allTableSelectIds: function() {
for (var e, t = [], i = a(this.gameMap); !(e = i()).done; ) {
var n = e.value;
n.bTableSelect && t.push(n.gameid);
}
return t;
},
getMatchRule: function(e, t) {
for (var i = 0, n = [ {
gameid: 265,
rule: [ [ ___("累积让其他玩家pass次数"), ___("在Domino游戏中获得最多的让其他玩家pass次数"), ___("每一次pass计入一次成绩，以总pass次数进行排名"), ___("比赛总时长为{1}分钟", t) ], [ ___("累积胜利次数"), ___("在Domino游戏中获得最多的累积胜利次数"), ___("每一次胜利计入一次成绩，以总胜利次数进行排名"), ___("比赛总时长为{1}分钟", t) ] ]
}, {
gameid: 257,
rule: [ [ ___("累积go down牌张数"), ___("在Hand游戏中获得最多的累积go down牌张数"), ___("每一张牌计入一次成绩，以总张数进行排名"), ___("比赛总时长为{1}分钟", t) ], [ ___("累积获得分数"), ___("在Hand游戏中获得最多的累积分数"), ___("每一次胜利分数计入成绩，以总分数进行排名"), ___("比赛总时长为{1}分钟", t) ] ]
}, {
gameid: 256,
rule: [ [ ___("累积获得分数"), ___("在Baloot游戏中获得最多的累积分数"), ___("每一小局分数计入成绩，以总分数进行排名"), ___("比赛总时长为{1}分钟", t) ], [ ___("累积比牌获胜次数"), ___("在Baloot游戏中获得最多的累积比牌获胜次数"), ___("每比牌获胜计入一次成绩，以总分数进行排名"), ___("比赛总时长为{1}分钟", t) ] ]
}, {
gameid: 264,
rule: [ [ ___("累积获得分数"), ___("在Estimation游戏中获得最多的累积分数"), ___("每一小局分数计入成绩，以总分数进行排名"), ___("比赛总时长为{1}分钟", t) ], [ ___("累积获得分数"), ___("在Estimation游戏中获得最多的累积分数"), ___("每一小局分数计入成绩，以总分数进行排名"), ___("比赛总时长为{1}分钟", t) ] ]
}, {
gameid: 291,
rule: [ [ "Cumulative wins", "Get the most cumulative wins in a Teenpatti game", "Each victory counts as a score, and the ranking is based the total number of victories", "The total duration of the game is " + t + " minutes" ], [ "Accumulate the number of pairs of cards obtained", "Get the most passes in a Teenpatti game", "Each pass counts as a score,and the ranking is based the total number of pairs of cards", "The total duration of the game is " + t + " minutes" ] ]
} ]; i < n.length; i++) {
var a = n[i];
if (a.gameid === e) return a.rule;
}
return null;
},
leagueRewardConfig: [ {
level: 7,
get name() {
return ___("传奇");
},
rewards: [ {
type: 1,
count: 1e5
}, {
type: 25,
count: 500
}, {
type: 43,
img: "avatarframe_s_c_1",
count: 1,
days: 7
} ]
}, {
level: 6,
get name() {
return ___("大师");
},
rewards: [ {
type: 1,
count: 5e4
}, {
type: 25,
count: 400
}, {
type: 43,
img: "avatarframe_s_d_1",
count: 1,
days: 7
} ]
}, {
level: 5,
get name() {
return ___("钻石");
},
rewards: [ {
type: 1,
count: 3e4
}, {
type: 25,
count: 300
} ]
}, {
level: 4,
get name() {
return ___("铂金");
},
rewards: [ {
type: 1,
count: 2e4
}, {
type: 25,
count: 200
} ]
}, {
level: 3,
get name() {
return ___("黄金");
},
rewards: [ {
type: 1,
count: 1e4
}, {
type: 25,
count: 100
} ]
}, {
level: 2,
get name() {
return ___("白银");
},
rewards: [ {
type: 1,
count: 5e3
}, {
type: 25,
count: 50
} ]
}, {
level: 1,
get name() {
return ___("青铜");
},
rewards: [ {
type: 1,
count: 1e3
} ]
} ],
getLeagueRewards: function(e) {
for (var t, i = a(this.leagueRewardConfig); !(t = i()).done; ) {
var n = t.value;
if (n.level == e) return n.rewards;
}
},
rankConfig: [ {
get text() {
return ___("青铜");
},
stage: 1,
level: 1,
score: 0,
levelStr: ""
}, {
get text() {
return ___("白银");
},
stage: 2,
level: 1,
score: 1e3,
levelStr: ""
}, {
get text() {
return ___("黄金");
},
stage: 3,
level: 1,
score: 1e4,
levelStr: ""
}, {
get text() {
return ___("铂金");
},
stage: 4,
level: 1,
score: 2e4,
levelStr: ""
}, {
get text() {
return ___("钻石_");
},
stage: 5,
level: 1,
score: 4e4,
levelStr: ""
}, {
get text() {
return ___("大师");
},
stage: 6,
level: 1,
score: 6e4,
levelStr: ""
}, {
get text() {
return ___("传奇");
},
stage: 7,
level: 1,
score: 1e5,
levelStr: ""
} ],
max_vip: 20,
vipInfoConfig: [ {
expup: 0,
friendadd: 0,
freeRank: 1,
room: 2,
emoj: "1_sz",
gift: {
img: "gift_cake",
count: 1
},
tickets: 1,
rewards: [ {
type: 25,
count: 5
} ],
view: [ 0, 2, 4, 5, 6 ]
}, {
expup: 1e3,
friendadd: 0,
freeRank: 1,
room: 3,
emoj: "1_sz",
avatarframe: "avatarframe_v_0",
tickets: 1,
rewards: [ {
type: 25,
count: 8
} ],
view: [ 0, 2, 4, 5, 6 ]
}, {
expup: 2e3,
friendadd: 0,
freeRank: 1,
room: 3,
emoj: "1_sz",
gift: {
img: "gift_hookah",
count: 1
},
tickets: 1,
rewards: [ {
type: 25,
count: 10
} ],
view: [ 0, 2, 4, 5, 6 ]
}, {
expup: 3e3,
friendadd: 0,
freeRank: 1,
room: 3,
emoj: "1_sz",
gift: {
img: "gift_kiss",
count: 1
},
tickets: 2,
rewards: [ {
type: 25,
count: 12
} ],
view: [ 0, 2, 4, 5, 6 ]
}, {
expup: 5e3,
friendadd: 0,
freeRank: 1,
room: 3,
emoj: "1_sz",
gift: {
img: "gift_cake",
count: 2
},
tickets: 2,
rewards: [ {
type: 25,
count: 15
} ],
view: [ 0, 2, 4, 5, 6 ]
}, {
expup: 1e4,
friendadd: 150,
freeRank: 1,
room: 3,
emoj: "2_gp",
gift: {
img: "gift_hookah",
count: 2
},
tickets: 3,
rewards: [ {
type: 25,
count: 18
} ],
view: [ 0, 2, 4, 5, 6, 7, 8 ],
chatSkin: "chat_205"
}, {
expup: 2e4,
friendadd: 150,
freeRank: 1,
room: 4,
emoj: "2_gp",
avatarframe: "avatarframe_v_6",
tickets: 3,
rewards: [ {
type: 25,
count: 20
} ],
view: [ 0, 2, 4, 5, 6, 7, 8 ],
chatSkin: "chat_206"
}, {
expup: 5e4,
friendadd: 200,
freeRank: 1,
room: 4,
emoj: "3_zd",
gift: {
img: "gift_kiss",
count: 2
},
tickets: 3,
rewards: [ {
type: 25,
count: 25
} ],
view: [ 0, 2, 4, 5, 6, 7, 8 ],
chatSkin: "chat_207"
}, {
expup: 9e4,
friendadd: 200,
freeRank: 1,
room: 4,
emoj: "3_zd",
gift: {
img: "gift_ring",
count: 1
},
tickets: 3,
rewards: [ {
type: 25,
count: 30
} ],
view: [ 0, 2, 4, 5, 6, 7, 8 ],
chatSkin: "chat_208"
}, {
expup: 3e5,
friendadd: 300,
freeRank: 1,
room: 5,
emoj: "5_st",
avatarframe: "avatarframe_v_9",
tickets: 4,
rewards: [ {
type: 25,
count: 40
} ],
view: [ 0, 2, 4, 5, 6, 7, 8 ],
chatSkin: "chat_209"
}, {
expup: 6e5,
friendadd: 300,
freeRank: 1,
room: 5,
emoj: "5_st",
gift: {
img: "gift_ring",
count: 2
},
tickets: 4,
rewards: [ {
type: 25,
count: 50
} ],
view: [ 0, 2, 4, 5, 6, 7, 8 ],
chatSkin: "chat_210"
}, {
expup: 1e6,
friendadd: 400,
freeRank: 1,
room: 5,
emoj: "6_ax",
gift: {
img: "gift_car",
count: 1
},
tickets: 5,
rewards: [ {
type: 25,
count: 80
} ],
view: [ 0, 2, 4, 5, 6, 7, 8 ],
chatSkin: "chat_211"
}, {
expup: 16e5,
friendadd: 400,
freeRank: 1,
room: 8,
emoj: "4_zj",
avatarframe: "avatarframe_v_12",
tickets: 5,
rewards: [ {
type: 25,
count: 100
} ],
view: [ 0, 2, 4, 5, 6, 7, 8 ],
chatSkin: "chat_212"
} ],
exp_cfg: [ [ 1, 0 ], [ 2, 70 ], [ 3, 150 ], [ 4, 240 ], [ 5, 340 ], [ 6, 460 ], [ 7, 590 ], [ 8, 730 ], [ 9, 890 ], [ 10, 1060 ], [ 11, 1260 ], [ 12, 1480 ], [ 13, 1720 ], [ 14, 1990 ], [ 15, 2280 ], [ 16, 2610 ], [ 17, 2970 ], [ 18, 3370 ], [ 19, 3800 ], [ 20, 4270 ], [ 21, 4770 ], [ 22, 5310 ], [ 23, 5880 ], [ 24, 6490 ], [ 25, 7140 ], [ 26, 7830 ], [ 27, 8570 ], [ 28, 9350 ], [ 29, 10170 ], [ 30, 11040 ], [ 31, 11950 ], [ 32, 12950 ], [ 33, 14030 ], [ 34, 15200 ], [ 35, 16460 ], [ 36, 17800 ], [ 37, 19270 ], [ 38, 20870 ], [ 39, 22600 ], [ 40, 24460 ], [ 41, 26450 ], [ 42, 28570 ], [ 43, 30820 ], [ 44, 33200 ], [ 45, 35610 ], [ 46, 38040 ], [ 47, 40490 ], [ 48, 42960 ], [ 49, 45470 ], [ 50, 48030 ], [ 51, 50630 ], [ 52, 53250 ], [ 53, 55890 ], [ 54, 58560 ], [ 55, 61250 ], [ 56, 63960 ], [ 57, 66710 ], [ 58, 69510 ], [ 59, 72350 ], [ 60, 75230 ], [ 61, 78130 ], [ 62, 81060 ], [ 63, 84010 ], [ 64, 86980 ], [ 65, 89970 ], [ 66, 93e3 ], [ 67, 96080 ], [ 68, 99200 ], [ 69, 102360 ], [ 70, 105550 ], [ 71, 108760 ], [ 72, 111990 ], [ 73, 115240 ], [ 74, 118510 ], [ 75, 121830 ], [ 76, 125190 ], [ 77, 128590 ], [ 78, 132040 ], [ 79, 135510 ], [ 80, 139e3 ], [ 81, 142510 ], [ 82, 146040 ], [ 83, 149590 ], [ 84, 153170 ], [ 85, 156770 ], [ 86, 160410 ], [ 87, 164090 ], [ 88, 167820 ], [ 89, 171570 ], [ 90, 175340 ], [ 91, 179130 ], [ 92, 182940 ], [ 93, 186780 ], [ 94, 190640 ], [ 95, 194520 ], [ 96, 198440 ], [ 97, 202410 ], [ 98, 206420 ], [ 99, 210450 ], [ 100, 214500 ], [ 101, 218570 ], [ 102, 222670 ], [ 103, 226810 ], [ 104, 230990 ], [ 105, 235220 ], [ 106, 239490 ], [ 107, 243780 ], [ 108, 248090 ], [ 109, 252420 ], [ 110, 256780 ], [ 111, 261180 ], [ 112, 265620 ], [ 113, 270110 ], [ 114, 274640 ], [ 115, 279190 ], [ 116, 283760 ], [ 117, 288350 ], [ 118, 292970 ], [ 119, 297630 ], [ 120, 302330 ], [ 121, Number.MAX_VALUE ] ],
max_level: 121,
totalExp2Level: function(e) {
for (var t = this.exp_cfg.length - 1; t >= 0; t--) {
var i = this.exp_cfg[t];
if (e >= i[1]) return i[0];
}
return 1;
},
getLevelNeedExp: function(e) {
e = e || 1;
e = Math.min(e, this.max_level);
return this.exp_cfg[e - 1][1];
},
getCmpLevelNeedExp: function(e) {
e = e || 1;
var t = Math.min(e + 1, this.max_level);
return t == this.max_level ? "∞" : Math.min(this.exp_cfg[t - 1][1] - this.exp_cfg[e - 1][1], this.exp_cfg[this.exp_cfg.length - 1][1] - this.exp_cfg[this.exp_cfg.length - 2][1]);
},
getLevelRemainingExp: function(e) {
var t = this.totalExp2Level(e);
return e - this.exp_cfg[t - 1][1];
},
getLevelProgress: function(e) {
var t = this.totalExp2Level(e), i = this.getCmpLevelNeedExp(t);
return this.getLevelRemainingExp(e) / i;
},
spineNameMap: [ {
level: 0,
animtion: "LV_10"
}, {
level: 10,
animtion: "LV_20"
}, {
level: 20,
animtion: "LV_30"
}, {
level: 30,
animtion: "LV_40"
}, {
level: 40,
animtion: "LV_50"
}, {
level: 50,
animtion: "LV_60"
}, {
level: 60,
animtion: "LV_70"
}, {
level: 70,
animtion: "LV_80"
}, {
level: 80,
animtion: "LV_90"
}, {
level: 90,
animtion: "LV_100"
}, {
level: 100,
animtion: "LV_110"
}, {
level: 110,
animtion: "LV_120"
}, {
level: 120,
animtion: "LV_130"
}, {
level: 130,
animtion: "LV_140"
}, {
level: 140,
animtion: "LV_150"
} ],
getLevelSpineName: function(e) {
for (var t = this.spineNameMap[0].animtion, i = 0; i < this.spineNameMap.length; i++) {
var n = this.spineNameMap[i];
e > n.level && (t = n.animtion);
}
return t;
},
getRank: function(e) {
for (var t = 0, i = 0; i < this.rankConfig.length; i++) e >= this.rankConfig[i].score && (t = i);
var n = this.rankConfig[t], a = this.rankConfig[t + 1];
n.next = a || null;
return n;
},
getRankByLevel: function(e) {
for (var t, i = a(this.rankConfig); !(t = i()).done; ) {
var n = t.value;
if (n.stage == e) return n;
}
return null;
},
vipConfig: (i = {}, i[0] = {
text: ""
}, i[1] = {
get text() {
return ___("骑士");
}
}, i[2] = {
get text() {
return ___("男爵");
}
}, i),
vipExp2Level: function(e) {
for (var t = 0, i = 0; i < this.vipInfoConfig.length; i++) e >= this.vipInfoConfig[i].expup && (t = i);
return t;
},
getVip: function(e) {
return e < 0 ? this.vipConfig[0] : e >= 2 ? this.vipConfig[2] : this.vipConfig[e];
},
countryConfig: [ {
id: 0,
get name() {
return ___("世界");
}
}, {
id: 1,
get name() {
return ___("卡塔尔");
}
}, {
id: 2,
get name() {
return ___("阿联酋");
}
}, {
id: 3,
get name() {
return ___("科威特");
}
}, {
id: 4,
get name() {
return ___("巴林岛");
}
}, {
id: 5,
get name() {
return ___("沙特阿拉伯");
}
}, {
id: 6,
get name() {
return ___("阿曼");
}
}, {
id: 7,
get name() {
return ___("黎巴嫩");
}
}, {
id: 8,
get name() {
return ___("约旦");
}
}, {
id: 9,
get name() {
return ___("伊拉克");
}
}, {
id: 10,
get name() {
return ___("利比亚");
}
}, {
id: 11,
get name() {
return ___("埃及");
}
}, {
id: 12,
get name() {
return ___("突尼斯");
}
}, {
id: 13,
get name() {
return ___("吉布提");
}
}, {
id: 14,
get name() {
return ___("阿尔及利亚");
}
}, {
id: 15,
get name() {
return ___("巴勒斯坦");
}
}, {
id: 16,
get name() {
return ___("摩洛哥");
}
}, {
id: 17,
get name() {
return ___("毛里塔尼亚");
}
}, {
id: 18,
get name() {
return ___("科摩罗");
}
}, {
id: 19,
get name() {
return ___("叙利亚");
}
}, {
id: 20,
get name() {
return ___("也门");
}
}, {
id: 21,
get name() {
return ___("苏丹");
}
}, {
id: 22,
get name() {
return ___("索马里");
}
} ],
getCountry: function(e) {
return this.countryConfig[e] || this.countryConfig[0];
},
colorConfig: {
chat_free: cc.color(255, 255, 255),
chat_knight: cc.color(247, 199, 50),
chat_sir: cc.color(66, 167, 219),
chat_spring1: cc.color(231, 60, 154),
chat_spring2: cc.color(231, 60, 154),
chat_spring3: cc.color(242, 102, 105),
chat_spring4: cc.color(208, 60, 60),
chat_summer1: cc.color(61, 195, 101),
chat_summer2: cc.color(61, 194, 101),
chat_summer3: cc.color(62, 196, 101),
chat_summer4: cc.color(13, 232, 54),
chat_autumn1: cc.color(237, 144, 37),
chat_autumn2: cc.color(237, 144, 37),
chat_autumn3: cc.color(247, 199, 50),
chat_autumn4: cc.color(247, 155, 82),
chat_winter1: cc.color(73, 173, 219),
chat_winter2: cc.color(73, 173, 219),
chat_winter3: cc.color(136, 104, 220),
chat_winter4: cc.color(155, 171, 170)
},
getChatBoxColor: function(e) {
var t = this.colorConfig[e];
t || (t = cc.color(255, 255, 255));
return t;
},
colorMap: (n = {}, n.font_color_0 = new cc.Color(0, 0, 0), n.font_color_1 = new cc.Color(0, 0, 0), 
n.font_color_2 = new cc.Color(0, 0, 0), n.font_color_3 = new cc.Color(0, 0, 0), 
n.font_color_4 = new cc.Color(0, 0, 0), n.font_color_5 = new cc.Color(0, 0, 0), 
n),
getColor: function(e) {
return this.colorMap[e || "font_color_0"];
},
spcode2String: function(e) {
804 == e && cc.vv.AlertView.show(___("金币不足"), function() {
cc.vv.EventManager.emit("HALL_OPEN_SHOP", {
open: 1
});
}, function() {}, !1, function() {}, ___("提示"), ___("取消"), ___("Deposit"));
for (var t = 0, i = [ {
spcode: 625,
get errMsg() {
return ___("VIP等级不够");
}
}, {
spcode: 649,
get errMsg() {
return ___("房间号错误或者游戏已经开始");
}
}, {
spcode: 651,
get errMsg() {
return ___("您还不是VIP");
}
}, {
spcode: 652,
get errMsg() {
return ___("钻石不足");
}
}, {
spcode: 814,
get errMsg() {
return ___("商品不存在");
}
}, {
spcode: 653,
get errMsg() {
return ___("今日已不能参加排位赛");
}
}, {
spcode: 654,
get errMsg() {
return ___("队友金币不足");
}
}, {
spcode: 655,
get errMsg() {
return ___("队友钻石不足");
}
}, {
spcode: 656,
get errMsg() {
return ___("队友今日已不能参加排位赛");
}
}, {
spcode: 657,
get errMsg() {
return ___("队友已离开");
}
}, {
spcode: 665,
get errMsg() {
return ___("好友不是VIP");
}
}, {
spcode: 950,
get errMsg() {
return ___("道具不存在");
}
}, {
spcode: 815,
get errMsg() {
return ___("兑换码已被使用");
}
}, {
spcode: 816,
get errMsg() {
return ___("兑换码不存在");
}
}, {
spcode: 817,
get errMsg() {
return ___("兑换错误次数太多，请稍后再试");
}
}, {
spcode: 818,
get errMsg() {
return ___("使用过于频繁，请稍后再试");
}
}, {
spcode: 1094,
get errMsg() {
return ___("找不到该用户");
}
}, {
spcode: 925,
get errMsg() {
return ___("房主才可以解散");
}
}, {
spcode: 659,
get errMsg() {
return ___("房间号不存在");
}
}, {
spcode: 660,
get errMsg() {
return ___("房间已满");
}
}, {
spcode: 661,
get errMsg() {
return ___("房间已开始");
}
}, {
spcode: 662,
get errMsg() {
return ___("还在游戏中,不能加入其它房间");
}
}, {
spcode: 649,
get errMsg() {
return ___("游戏已开始,无法解散");
}
}, {
spcode: 636,
get errMsg() {
return ___("商品不存在");
}
}, {
spcode: 637,
get errMsg() {
return ___("rp值不足");
}
}, {
spcode: 974,
get errMsg() {
return ___("已投票,不能重复投票");
}
}, {
spcode: 753,
get errMsg() {
return ___("用户已报名联赛");
}
}, {
spcode: 9933,
get errMsg() {
return ___("获取免费类型错误");
}
}, {
spcode: 9934,
get errMsg() {
return ___("今日已经领取");
}
}, {
spcode: 423,
get errMsg() {
return ___("未找到好友信息");
}
}, {
spcode: 1096,
get errMsg() {
return ___("没有可以参加的房间");
}
}, {
spcode: 1093,
get errMsg() {
return ___("任务未完成");
}
}, {
spcode: 1451,
get errMsg() {
return ___("道具不存在");
}
}, {
spcode: 1073,
get errMsg() {
return ___("This username is not available");
}
}, {
spcode: 638,
get errMsg() {
return ___("未完成");
}
}, {
spcode: 945,
get errMsg() {
return ___("玩家等级不够");
}
}, {
spcode: 819,
get errMsg() {
return ___("您被禁言了");
}
}, {
spcode: 1098,
get errMsg() {
return ___("玩家已在房间内");
}
}, {
spcode: 923,
get errMsg() {
return ___("房间人数已满");
}
}, {
spcode: 1452,
get errMsg() {
return ___("已经绑定过邀请码");
}
}, {
spcode: 1453,
get errMsg() {
return ___("不能绑定自己的邀请码");
}
}, {
spcode: 1454,
get errMsg() {
return ___("不能绑定下级的邀请码");
}
}, {
spcode: 1455,
get errMsg() {
return ___("绑定错误");
}
}, {
spcode: 398,
get errMsg() {
return ___("已发送过邀请,请稍后再试");
}
}, {
spcode: 3008,
get errMsg() {
return ___("无法重复领取沙龙体验卡");
}
}, {
spcode: 1102,
get errMsg() {
return ___("已发送过邀请,请10s后再试");
}
}, {
spcode: 976,
get errMsg() {
return ___("无法重复领取");
}
}, {
spcode: 754,
get errMsg() {
return ___("破产金币已领完");
}
}, {
spcode: 551,
get errMsg() {
return ___("绑定手机号不能为空");
}
}, {
spcode: 552,
get errMsg() {
return ___("Invalid OTP");
}
}, {
spcode: 553,
get errMsg() {
return ___("密码错误");
}
}, {
spcode: 554,
get errMsg() {
return ___("绑定手机的账号已经绑定过");
}
}, {
spcode: 555,
get errMsg() {
return ___("The phone number has been bound");
}
}, {
spcode: 333,
get errMsg() {
return ___("Wrong password!");
}
}, {
spcode: 955,
get errMsg() {
return ___("Account does not exist!");
}
}, {
spcode: 1055,
get errMsg() {
return ___("Parameters are missing!");
}
}, {
spcode: 484,
get errMsg() {
return ___("You are prohibited from adding friends");
}
}, {
spcode: 490,
get errMsg() {
return ___("Friends don't exist!");
}
}, {
spcode: 495,
get errMsg() {
return ___("添加好友，错误次数过于频繁");
}
}, {
spcode: 619,
get errMsg() {
return ___("您的好友数量已达上限");
}
}, {
spcode: 620,
get errMsg() {
return ___("好友关系已经存在");
}
}, {
spcode: 621,
get errMsg() {
return ___("对方好友数量已达上限");
}
}, {
spcode: 622,
get errMsg() {
return ___("对方已经是你的好友了");
}
}, {
spcode: 623,
get errMsg() {
return ___("不能加自己为好友");
}
}, {
spcode: 557,
get errMsg() {
return ___("Need to bind phone!");
}
}, {
spcode: 664,
get errMsg() {
return ___("Your friend is offline!");
}
}, {
spcode: 535,
get errMsg() {
return ___("Have abstained!");
}
} ]; t < i.length; t++) {
var n = i[t];
if (n.spcode == e) return n.errMsg;
}
return "";
},
getCreateMenuCfg: function() {
for (var e, t = [], i = a(cc.vv.UserManager.gameList); !(e = i()).done; ) {
var n = e.value;
if (this.salonGamesList.indexOf(n.id) >= 0) for (var o, r = a(this.gameMap); !(o = r()).done; ) {
var s = o.value;
n.id == s.gameid && t.push(s);
}
}
return t;
},
getGameName: function(e) {
for (var t, i = a(this.gameMap); !(t = i()).done; ) {
var n = t.value;
if (n.gameid == e) return n.title;
}
return "";
},
getGameMapInfo: function(e) {
for (var t, i = a(this.gameMap); !(t = i()).done; ) {
var n = t.value;
if (n.gameid == e) return n;
}
return "";
},
getUnPinGameIds: function(e) {
for (var t, i = [], n = a(this.allGameIds()); !(t = n()).done; ) {
var o = t.value;
e.indexOf(o) < 0 && i.push(o);
}
return i.filter(function(e) {
for (var t, i = a(cc.vv.UserManager.gameList); !(t = i()).done; ) if (t.value.id == e) return !0;
return !1;
});
},
getCafeMenuConfig: function() {
for (var e, t = [], i = a(this.gameMap); !(e = i()).done; ) {
var n = e.value;
this.salonGamesList.indexOf(n.gameid) >= 0 && t.push(n);
}
return t;
},
setExpBuffFrame: function(e, t) {
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/texture_usercommon", "exp_buffer_" + t);
},
setCountryFrame: function(e, t) {
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/texture_usercommon", "icon_country_" + t);
},
setHeadFrame: function(e, t, i) {
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/texture_usercommon", "head_" + t, i);
},
setRankFrame: function(e, t) {
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/texture_usercommon", "rank_" + t);
},
setRankBigFrame: function(e, t) {
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/texture_usercommon", "icon_league_big_" + t);
},
setVipFrame: function(e, t) {
t = Math.min(20, t);
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/texture_usercommon", "vip_" + t);
},
setVipTextFrame: function(e, t) {
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/texture_usercommon", "text_vip_" + t);
},
setTaskTypeFrame: function(e, t) {
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/texture_usercommon", "icon_task_type_" + t);
},
setGameIconFrame: function(e, t) {
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/game_info_texture", "btn_hall_game_" + t);
},
setGameTitleFrame: function(e, t) {
var i = cc.vv.i18nManager.getConfig();
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/game_info_texture", "text_hall_game_" + t + "_" + i.lang);
},
setGameCafeFrame: function(e, t) {
t = [ 258 ].indexOf(t) >= 0 ? 257 : t;
t = [ 263, 273, 280 ].indexOf(t) >= 0 ? 262 : t;
t = [ 270 ].indexOf(t) >= 0 ? 259 : t;
t = [ 271 ].indexOf(t) >= 0 ? 285 : t;
t = [ 274, 275, 276, 277, 278 ].indexOf(t) >= 0 ? 256 : t;
cc.vv.ResManager.setSpriteFrame(e, "BalootClient/BaseRes/textures/game_info_texture", "icon_cafe_" + t);
},
setEmoji: function(e, t, i) {
if (t) {
var n = 0, a = 0;
if (Global.isRealNum(t)) {
n = 0;
a = t;
} else {
var o = t.split("_");
n = o[1];
a = o[2];
}
cc.vv.ResManager.setSkeleton(e, "BalootClient/BaseRes/spines/emoji_" + n + "/emoji_" + n + "_" + a, function(e) {
e.setAnimation(0, "animation", !0);
e.node.scale = .4;
e.node.y = -155;
i && i(e, n);
});
}
},
setAvatarFrame: function(e, t) {
cc.vv.ResManager.setSkeleton(e, "BalootClient/BaseRes/spines/avatarframe/" + t + "/" + t, function(e) {
e.setAnimation(0, "animation", !0);
});
},
getAppName: function() {
var e = "YONO Games";
Global.appId == Global.APPID.RummyVIP && (e = "RummyVIP");
return e;
}
}
});
cc._RF.pop();
}, {} ],
UserManagerEx: [ function(e, t) {
"use strict";
cc._RF.push(t, "5e8e95GnVtEUaawqzZYjGpZ", "UserManagerEx");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var a = 0;
return function() {
return a >= e.length ? {
done: !0
} : {
done: !1,
value: e[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
return n;
}
cc.Class({
extends: e("UserManager"),
statics: {
gameNewerGuide: 0,
avatarframe: "avatarframe_1000",
chatskin: "chat_000",
tableskin: "desk_000",
pokerskin: "poker_free",
frontskin: "font_color_0",
emojiskin: "emoji_0",
faceskin: "poker_face_000",
salonskin: null,
salontesttime: 0,
newbiedone: 0,
charmpack: 0,
tmpvip: 0,
signrewards: 0,
voice: 0,
charm: 0,
leagueexp: 0,
rp: 0,
country: 0,
sess: {},
sharelink: "",
uploadlink: "",
rateios: "",
rateandroid: "",
club: {},
whatapplink: "",
adtime: null,
emojilist: [],
verifyfriend: 0,
contactus: "",
feedback: "",
charmList: [],
charmDataList: [],
pinlist: [],
fgamelist: [],
moneybag: 0,
nextbag: 0,
roomcnt: 0,
viproomcnt: [],
favorite_games: [],
slotsList: [],
redem: 0,
sender: 0,
report: 0,
shoptimeout: 0,
fbrewards: [],
blockuids: [],
offlineaward: 0,
offlinetime: 0,
isbindapple: 0,
isbindfb: 0,
isbindgoogle: 0,
isbindhuawei: 0,
isbindphone: 0,
getviplv: [],
leagueRmindTime: 0,
novice: 0,
slotVoteCountry: 0,
namerewards: 0,
adpics: 0,
productids: [],
pinmsg: [],
hasPopNotice: !1,
hasPopRewardToday: !1,
newapp: null,
bonus_prom: null,
bindbank: 0,
init: function() {
Global.playerData = this;
this.switch = [];
cc.vv.NetManager.registerMsg(MsgId.GAME_LIST, this.recvGameList, this);
cc.vv.NetManager.registerMsg(MsgId.PULL_CH_LESSCOIN_ACTIVELIST, this.onRcvLessCoinPoplist, this);
cc.vv.NetManager.registerMsg(MsgId.PULL_MODIFY_LOCALVAL, this.onRcvPullModifyLocalval, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_SYNC_HALLINFO, this.onRecvRefreshHallInfo, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_REFRESH_VIP, this.REQ_REFRESH_VIP, this);
cc.vv.NetManager.registerMsg(MsgId.MONEY_CHANGED, this.MONEY_CHANGED, this);
cc.vv.NetManager.registerMsg(MsgId.SYNC_COIN, this.SYNC_COIN, this);
cc.vv.NetManager.registerMsg(MsgId.CHANGE_BONUS_LIST, this.CHANGE_BONUS_LIST, this);
cc.vv.NetManager.registerMsg(MsgId.PULL_LEVEL_UP_EXP, this.PULL_LEVEL_UP_EXP, this);
cc.vv.NetManager.registerMsg(MsgId.UPDATE_USER_INFO, this.UPDATE_USER_INFO, this, !0);
cc.vv.NetManager.registerMsg(MsgId.CLUB_UPDATE_INFO, this.CLUB_UPDATE_INFO, this);
cc.vv.NetManager.registerMsg(MsgId.NOTIFY_CLUB_JOIN, this.NOTIFY_CLUB_JOIN, this);
cc.vv.NetManager.registerMsg(MsgId.NOTIFY_CLUB_REMOVE, this.NOTIFY_CLUB_REMOVE, this);
cc.vv.NetManager.registerMsg(MsgId.USER_GIFT_BROADCAST, this.USER_GIFT_BROADCAST, this);
cc.vv.NetManager.registerMsg(MsgId.GLOBAL_SPEAKER_NOTIFY, this.GLOBAL_SPEAKER_NOTIFY, this);
cc.vv.NetManager.registerMsg(MsgId.GLOBAL_MAIL_NOTIFY, this.GLOBAL_MAIL_NOTIFY, this);
cc.vv.NetManager.registerMsg(MsgId.PIGGY_BANK_NOTIFY, this.PIGGY_BANK_NOTIFY, this);
cc.vv.NetManager.registerMsg(MsgId.TASK_COMPLETE_NOTIFY, this.TASK_COMPLETE_NOTIFY, this);
cc.vv.NetManager.registerMsg(MsgId.SOCIAL_FRIEND_MSG_REV, this.SOCIAL_FRIEND_MSG_REV, this);
cc.vv.NetManager.registerMsg(MsgId.GAME_SHARE_REWARD, this.GAME_SHARE_REWARD, this);
cc.vv.NetManager.registerMsg(MsgId.LEAGUE_LEVEL_UP, this.LEAGUE_LEVEL_UP, this);
cc.vv.NetManager.registerMsg(MsgId.LEAGUE_EXP_CHANGE, this.LEAGUE_EXP_CHANGE, this);
cc.vv.NetManager.registerMsg(MsgId.COUNTRY_TOP_CHANGE, this.COUNTRY_TOP_CHANGE, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_KNOCKOUT_READY, this.REQ_KNOCKOUT_READY, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_KNOCKOUT_EXIT, this.REQ_KNOCKOUT_EXIT, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_KNOCKOUT_JOIN, this.REQ_KNOCKOUT_JOIN, this);
cc.vv.NetManager.registerMsg(MsgId.UPDATE_PINMSG, this.UPDATE_PINMSG, this, !0);
setInterval(this.update.bind(this), 100);
},
initPlayerData: function(e, t) {
console.log("UserManagerEx.initPlayerData(serverData, loginConfig)", e);
var i = e.playerInfo;
this.gameList = t.gamelist || [];
this.gameList.sort(function(e, t) {
return e.ord - t.ord;
});
this.slotsList = t.slotslist || [];
this.slotsList.sort(function(e, t) {
return e.ord - t.ord;
});
this.productids = t.productids || [];
this.pinmsg = t.pinmsg;
this.slotVoteCountry = e.country || 0;
this.namerewards = t.namerewards || [];
this.adpics = t.adpics || {};
this.newbiedone = e.newbiedone || 0;
this.charmpack = i.charmpack || 0;
this.voice = e.voice || 0;
this.tmpvip = i.tmpvip || 0;
this.newapp = e.newappurl;
this.vipsign = e.vipsign;
this.redem = e.verify.redem || 0;
this.sender = e.verify.sender || 0;
this.report = e.verify.report || 0;
this.shoptimeout = t.shoptimeout || 0;
this.novice = i.novice || 0;
this.rate = t.rate || 0;
this.guide = i.guide || [];
this.club = e.club || {};
this.sess = e.sess;
this.sharelink = t.sharelink;
this.uploadlink = t.uploadlink || "";
this.rateios = t.rateios || "";
this.rateandroid = t.rateandroid || "";
this.contactus = t.contactus || "";
Global.saveLocal("contacturl", this.contactus);
this.reg_bonus_coin = t.reg_bonus_coin;
this.sign_bonus_coin = t.sign_bonus_coin;
this.feedback = t.feedback || "";
this.charmList = t.charmList || [];
this.charmList.sort(function(e, t) {
return e.count - t.count;
});
this.charmDataList = i.charmlist || [];
this.pinlist = i.pinlist || [];
this.fgamelist = i.fgamelist || [];
this.bindfbcoin = i.bindfbcoin;
this.bindfbdiamond = i.bindfbdiamond;
this.newerpack = i.newerpack;
this.avatarframe = i.avatarframe;
this.chatskin = i.chatskin;
this.tableskin = i.tableskin;
this.pokerskin = i.pokerskin;
this.frontskin = i.frontskin;
this.emojiskin = i.emojiskin;
this.emojilist = i.emojilist;
this.faceskin = i.faceskin;
this.salonskin = i.salonskin;
this.salontesttime = i.salontesttime;
this.verifyfriend = i.verifyfriend;
this.charm = i.charm;
this.leagueexp = i.leagueexp;
this.rp = i.rp || 0;
this.country = i.country || 0;
this.getviplv = i.getviplv || [];
this.moneybag = i.moneybag;
this.nextbag = i.nextbag;
this.roomcnt = i.roomcnt;
this.viproomcnt = i.viproomcnt || [];
this.favorite_games = t.favorite_games || [];
this.product_cfg = t.product_cfg || [];
this.uid = i.uid;
this.coin = i.coin;
this.userIcon = i.usericon;
this.sex = i.sex;
this.agent = i.agent;
this.nickName = i.playername;
this.memo = i.memo;
this.inviteCode = i.code;
this.bindcode = i.bindcode;
this.ip = i.ip;
this.onlinestate = i.onlinestate;
this.lrwardstate = i.lrwardstate;
this.upcoin = e.upcoin;
this.ispayer = i.ispayer;
this.account = i.account;
this.logincoin = i.logincoin;
this.switch = i.switch || [];
this.logintype = i.logintype;
this.isbindfb = i.isbindfb || 0;
this.isbindapple = i.isbindapple || 0;
this.isbindgoogle = i.isbindgoogle || 0;
this.isbindghuawei = i.isbindghuawei || 0;
this.isbindphone = i.isbindphone || 0;
this.fbrewards = i.fbrewards || [];
this.blockuids = i.blockuids || [];
this.fbicon = i.fbicon;
this.spread = i.spread || 0;
this.luckRedvelopesNum = i.luckRedvelopesNum;
this.growup = e.growup;
this.evo = e.evo;
this._curExp = i.levelexp;
this.initgift = i.initgift;
this.svip = i.svip || 0;
this.svipexp = i.svipexp || 0;
this.nextvipexp = i.nextvipexp || 0;
this.svipup = i.svipup || 0;
this.leftdays = i.leftdays || 0;
this.bonusList = t.bonuslist || [];
this.activityList = e.activitylist;
this.offlineaward = i.offlineaward;
this.offlinetime = i.offlinetime;
this.popLuckySpin = e.fbshare || e.bonuswheel;
this.ecoin = i.ecoin;
this.dcoin = i.dcoin;
this.cashbonus = i.cashbonus;
this.dcashbonus = i.dcashbonus;
this.bankcoin = i.bankcoin;
this.todaybonus = i.todaybonus;
this.invit_uid = i.invit_uid;
this.bindbank = i.bindbank;
this.logonTime = new Date().getTime();
this.serverTime = e.servertime;
this._levelGift = 0;
this._richpoint = i.upoint;
this._diamond = i.diamond || 0;
this.kyc = i.kyc || 0;
this.payurl = t.payurl;
this.contactus = t.contactus;
this.kycUrl = t.kyc;
this.drawUrl = t.drawurl;
this.transactionUrl = t.transaction;
this.paymentUrl = t.payment;
this.addInvite = i.invits;
this.emotionProplist = t.proplist;
this.lepordgames = t.lbgames;
this.salonVip = t.salonvip;
this.notice = t.notice;
this.rebatGames = t.rbgameids;
this.todayrewards = t.todayrewards;
this.bonus_prom = t.promoopen;
Global.saveLocal(Global.SAVE_KEY_LOGIN_TYPE, this.logintype);
this._preLoad = [];
var n = Global.getLocal(Global.SAVE_PLAYER_TOKEN);
n = void 0 === n ? {} : JSON.parse(n);
if (this.logintype !== Global.LoginType.Guest) if (this.rememberPsw) {
n[this.nickName] || (n[this.nickName] = {});
n[this.nickName].token = this.token;
} else n[this.nickName] && (n[this.nickName] = {});
n.curr_account = this.nickName;
Global.saveLocal(Global.SAVE_PLAYER_TOKEN, JSON.stringify(n));
if (Global.IsHuawei()) if (e.reg) {
var a = {
$AcountType: "hw_account",
$RegistMethod: "hw_account",
$OccurredTime: cc.sys.now(),
$Inviter: "none"
};
cc.vv.PlatformApiMgr.KoSDKTrackEvent("$RegisterAccount", JSON.stringify(a));
} else {
var o = {
$RoleClass: "NewPlayer",
$RoleName: this.nickName,
$FirstSignIn: 0,
$RoleGender: this.sex || "w",
$Server: "s1",
$Combat: "0",
$LevelId: this.getCurLv()
};
cc.vv.PlatformApiMgr.KoSDKTrackEvent("$SignInRole", JSON.stringify(o));
}
},
isNoNeedDownGame: function(e) {
for (var t, i = cc.vv.UserConfig.gameMap, n = 0; n < i.length; n++) {
var a = i[n];
if (a.gameid == e) {
t = !a.bDownload;
break;
}
}
return t;
},
recvGameList: function(e) {
if (200 === e.code) {
if (e.gamelist[0]) {
this.gameList = e.gamelist[0];
this.gameList.sort(function(e, t) {
return e.ord - t.ord;
});
}
if (e.gamelist[1]) {
this.slotsList = e.gamelist[1];
this.slotsList.sort(function(e, t) {
return e.ord - t.ord;
});
}
Global.dispatchEvent("GAME_LIST_UPDATE");
}
},
MONEY_CHANGED: function(e) {
console.log("UserManagerEx.MONEY_CHANGED: function (msg)", e);
if (200 === e.code) {
null != e.bankcoin && cc.vv.UserManager.setBankCoin(e.bankcoin);
null != e.coin && cc.vv.UserManager.SetCoin(e.coin, !0);
null != e.diamond && cc.vv.UserManager.setDiamond(e.diamond, !0);
}
},
SYNC_COIN: function(e) {
console.log("UserManagerEx.SYNC_COIN: function (msg)", e);
if (200 === e.code) {
cc.vv.UserManager.SetCoin(e.coin, !0);
cc.vv.UserManager.setDiamond(e.diamond, !0);
cc.vv.UserManager.setCurExp(e.levelexp);
Global.dispatchEvent("USER_EXP_CHANGE");
}
},
SetCoin: function(e, t) {
console.log("SetCoin(val, bRefushHall)", e);
this.coin = Number(e.toFixed(2));
t && Global.dispatchEvent(EventId.UPATE_COINS);
},
CHANGE_BONUS_LIST: function(e) {
if (200 == e.code) {
cc.vv.UserManager.bonusList = e.bonuslist;
Global.dispatchEvent("BONUS_CHANGE");
}
},
updateUserInfo: function(e) {
var t = {
code: 200,
user: e
};
this.UPDATE_USER_INFO(t);
},
UPDATE_USER_INFO: function(e) {
if (200 == e.code) if (e.spcode) 1073 == e.spcode && cc.vv.FloatTip.show("This username is not available"); else {
var t = e.user;
null != t.playername && (cc.vv.UserManager.nickName = t.playername);
null != t.sex && (cc.vv.UserManager.sex = t.sex);
null != t.redem && (cc.vv.UserManager.redem = t.redem);
null != t.sender && (cc.vv.UserManager.sender = t.sender);
null != t.report && (cc.vv.UserManager.report = t.report);
null != t.usericon && (cc.vv.UserManager.userIcon = t.usericon);
null != t.avatarframe && (cc.vv.UserManager.avatarframe = t.avatarframe);
null != t.chatskin && (cc.vv.UserManager.chatskin = t.chatskin);
null != t.tableskin && (cc.vv.UserManager.tableskin = t.tableskin);
null != t.pokerskin && (cc.vv.UserManager.pokerskin = t.pokerskin);
null != t.frontskin && (cc.vv.UserManager.frontskin = t.frontskin);
null != t.emojiskin && (cc.vv.UserManager.emojiskin = t.emojiskin);
null != t.faceskin && (cc.vv.UserManager.faceskin = t.faceskin);
null != t.salonskin && (cc.vv.UserManager.salonskin = t.salonskin);
null != t.salontesttime && (cc.vv.UserManager.salontesttime = t.salontesttime);
null != t.svip && (cc.vv.UserManager.svip = t.svip);
null != t.svipexp && (cc.vv.UserManager.svipexp = t.svipexp);
null != t.nextvipexp && (cc.vv.UserManager.nextvipexp = t.nextvipexp);
null != t.svipup && (cc.vv.UserManager.svipup = t.svipup);
null != t.leftdays && (cc.vv.UserManager.leftdays = t.leftdays);
null != t.emojilist && (cc.vv.UserManager.emojilist = t.emojilist);
null != t.verifyfriend && (cc.vv.UserManager.verifyfriend = t.verifyfriend);
null != t.viproomcnt && (cc.vv.UserManager.viproomcnt = t.viproomcnt);
null != t.charm && (cc.vv.UserManager.charm = t.charm);
null != t.leagueexp && (cc.vv.UserManager.leagueexp = t.leagueexp);
null != t.fgamelist && (cc.vv.UserManager.fgamelist = t.fgamelist);
null != t.blockuids && (cc.vv.UserManager.blockuids = t.blockuids);
null != t.roomcnt && (cc.vv.UserManager.roomcnt = t.roomcnt);
null != t.rp && (cc.vv.UserManager.rp = t.rp);
null != t.country && (cc.vv.UserManager.country = t.country);
null != t.getviplv && (cc.vv.UserManager.getviplv = t.getviplv);
null != t.tmpvip && (cc.vv.UserManager.tmpvip = t.tmpvip);
null != t.nextbag && (cc.vv.UserManager.nextbag = t.nextbag);
null != t.charmlist && (cc.vv.UserManager.charmDataList = t.charmlist);
null != t.coin && cc.vv.UserManager.SetCoin(t.coin, !0);
null != t.ecoin && (cc.vv.UserManager.ecoin = t.ecoin);
null != t.dcoin && (cc.vv.UserManager.dcoin = t.dcoin);
null != t.cashbonus && (cc.vv.UserManager.cashbonus = t.cashbonus);
null != t.dcashbonus && (cc.vv.UserManager.dcashbonus = t.dcashbonus);
null != t.bankcoin && (cc.vv.UserManager.bankcoin = t.bankcoin);
null != t.todaybonus && (cc.vv.UserManager.todaybonus = t.todaybonus);
null != t.kyc && (cc.vv.UserManager.kyc = t.kyc);
null != t.isbindphone && (cc.vv.UserManager.isbindphone = t.isbindphone);
null != t.drawinfo && (cc.vv.UserManager.drawinfo = t.drawinfo);
if (null != t.moneybag) {
cc.vv.UserManager.moneybag = t.moneybag;
t.moneybag > 0 && Global.dispatchEvent("USER_PIGGY_BANK_HINT_NEW");
Global.dispatchEvent("USER_PIGGY_BANK_CHANGE");
}
t.invits && Global.dispatchEvent("EVENT_ADD_REFFER", t.invits);
Global.dispatchEvent("USER_INFO_CHANGE");
}
},
CLUB_UPDATE_INFO: function(e) {
if (200 == e.code && !(e.spcode && e.spcode > 0)) {
var t = e.club || {};
null != t.name && (cc.vv.UserManager.club.name = t.name);
null != t.avatar && (cc.vv.UserManager.club.avatar = t.avatar);
null != t.detail && (cc.vv.UserManager.club.detail = t.detail);
null != t.cap && (cc.vv.UserManager.club.cap = t.cap);
null != t.join_type && (cc.vv.UserManager.club.join_type = t.join_type);
Global.dispatchEvent("CLUB_INFO_CHANGE");
}
},
NOTIFY_CLUB_JOIN: function(e) {
cc.vv.UserManager.club = e.club;
},
NOTIFY_CLUB_REMOVE: function() {
cc.vv.UserManager.club = {};
},
PULL_LEVEL_UP_EXP: function(e) {
if (200 == e.code) {
cc.vv.UserManager.setCurExp(e.info.levelexp);
Global.dispatchEvent("USER_EXP_CHANGE");
}
},
LEAGUE_LEVEL_UP: function(e) {
e.code;
},
REQ_REFRESH_VIP: function(e) {
e.code;
},
USER_GIFT_BROADCAST: function(e) {
if (200 == e.code && (1 != Global.getLocal("REFUSE_GIFT_ANIM", 0) || e.send.uid == cc.vv.UserManager.uid || e.receive.uid == cc.vv.UserManager.uid)) if (cc.director.getScene().name == Global.SCENE_NAME.HALL) cc.vv.BroadcastManager.addGiftAnim(e); else {
window.facade && window.facade.commonProxy && window.facade.commonProxy.checkPlayerInTable && (window.facade.commonProxy.checkPlayerInTable(e.send.uid) || window.facade.commonProxy.checkPlayerInTable(e.receive.uid)) && cc.vv.BroadcastManager.addGiftAnim(e);
cc.vv.gameData && cc.vv.gameData.getGameId && cc.vv.gameData.getGameId() > 600 && e.receive.uid == cc.vv.UserManager.uid && cc.vv.BroadcastManager.addGiftAnim(e);
}
},
GLOBAL_SPEAKER_NOTIFY: function(e) {
200 == e.code && cc.vv.BroadcastManager.addBroadcast({
content: e.notices.msg,
extra_info: e.notices.extra_info,
direction: cc.vv.i18nManager.getLanguage() == cc.vv.i18nLangEnum.AR ? 2 : 1,
level: e.level
});
},
GLOBAL_MAIL_NOTIFY: function(e) {
200 == e.code && cc.vv.RedHitManager.setKeyVal("mail_notify", cc.vv.RedHitManager.data.mail_notify + 1);
},
PIGGY_BANK_NOTIFY: function(e) {
if (200 == e.code) {
this.moneybag = e.moneybag;
this.nextbag = e.nextbag;
Global.dispatchEvent("USER_PIGGY_BANK_CHANGE");
}
},
TASK_COMPLETE_NOTIFY: function(e) {
cc.director.getScene().name != Global.SCENE_NAME.HALL && cc.loader.loadRes("YD_Pro/TaskCompleteHint/TaskCompleteHint", cc.Prefab, function(t, i) {
if (!t) if (cc.find("Canvas/TaskCompleteHint")) ; else {
var n = cc.instantiate(i);
n.parent = cc.find("Canvas");
n.name = "TaskCompleteHint";
n.zIndex = 1e3;
n.getComponent("TaskCompleteHintCpt").run(e);
}
});
},
SOCIAL_FRIEND_MSG_REV: function(e) {
if (e.data.uid != cc.vv.UserManager.uid) {
var t = cc.vv.PopupManager.getTop();
if (t) {
var i = t.getComponent("PopupPrivateChatView");
if (i && i.uid == e.data.uid) return;
}
cc.loader.loadRes("BalootClient/Social/PrivateChatMsgHint", cc.Prefab, function(t, i) {
if (!t) {
var n = cc.instantiate(i);
n.parent = cc.find("Canvas");
n.zIndex = 1e3;
n.getComponent("PrivateChatMsgHintCpt").run(e.data);
}
});
}
},
GAME_SHARE_REWARD: function(e) {
200 == e.code && (e.spcode && e.spcode > 0 ? cc.vv.FloatTip.show(cc.vv.UserConfig.spcode2String(e.spcode), !0) : e.rewards && Global.RewardFly(e.rewards, cc.find("Canvas").convertToWorldSpaceAR(cc.v2(0, -cc.winSize.height / 2 + 700))));
},
REC_GAME_SETTLE: function(e) {
var t = this;
if (e.fbshare) {
var i = e.fbshare[cc.vv.UserManager.uid];
if (i) {
var n = window.facade;
n && cc.loader.loadRes("games/PokerBase/prefabs/settlement_btn_share_fb", cc.Prefab, function(e, a) {
if (!e) {
var o = cc.instantiate(a);
o.parent = cc.find("Canvas/safe_node");
o.y = -cc.winSize.height / 2 + 700;
o.active = !1;
cc.find("layout/multiple", o).getComponent(cc.Label).string = "x" + i.times;
o.getComponent(cc.Button).node.on("click", function() {
o.getComponent(cc.Button).interactable = !1;
var e = null, t = n.dm.tableInfo.gameId, a = cc.vv.i18nManager.getLanguage();
1 == i.type ? e = "http://inter.sekiengame.com/fb/win/total/?uid=" + cc.vv.UserManager.uid + "&lang=" + a + "&gameid=" + t : 2 == i.type ? e = "http://inter.sekiengame.com/fb/win/cumulative/?uid=" + cc.vv.UserManager.uid + "&lang=" + a + "&gameid=" + t : 3 == i.type && (e = "http://inter.sekiengame.com/fb/win/card/?uid=" + cc.vv.UserManager.uid + "&lang=" + a + "&gameid=" + t);
e && Global.isNative() && cc.vv.FBMgr.fbShareWeb(e, null, "", function() {
cc.vv.NetManager.send({
c: MsgId.GAME_SHARE_REWARD,
gameid: t,
cat: i.type
});
});
}, t);
cc.tween(o).delay(3.5).call(function() {
o.active = !0;
o.getComponent(cc.Button).interactable = !0;
}).delay(5).call(function() {
o.destroy();
}).start();
}
});
}
}
},
LEAGUE_EXP_CHANGE: function(e) {
if (200 == e.code) for (var t, n = i(this.gameList); !(t = n()).done; ) {
var a = t.value;
a.id == e.gameid && (a.leagueexp = e.exp);
}
},
COUNTRY_TOP_CHANGE: function(e) {
if (200 == e.code) for (var t, n = i(this.gameList); !(t = n()).done; ) {
var a = t.value;
a.id == e.gameid && (a.topCountry = e.topCountry);
}
},
REQ_KNOCKOUT_READY: function(e) {
cc.director.getScene().name == Global.SCENE_NAME.HALL && cc.vv.PopupManager.addPopup("BalootClient/KnockoutMatch/prefabs/KnockoutHintStart", {
scaleIn: !0,
noCloseHit: !0,
onShow: function(t) {
t.getComponent("KnockoutHintStartView").onInit(e);
}
});
},
REQ_KNOCKOUT_EXIT: function(e) {
if (cc.director.getScene().name == Global.SCENE_NAME.HALL) {
var t;
cc.vv.PopupManager.removeAll();
cc.vv.PopupManager.addPopup("BalootClient/KnockoutMatch/prefabs/KnockoutHintNotJoin", ((t = {
scaleIn: !0,
noCloseHit: !0,
noTouchClose: !0
}).noCloseHit = !0, t.onShow = function(t) {
cc.find("node_time/value", t).getComponent(cc.Label).string = Global.formatTime("hh:mm", e.start_time || 0);
cc.find("btn_ok", t).on("click", function() {
cc.vv.PopupManager.removePopup(t);
});
}, t));
} else {
cc.vv.PopupManager.removeAll();
if (cc.vv.gameData && cc.vv.gameData.deskInfo && cc.vv.gameData.deskInfo.conf && cc.vv.gameData.deskInfo.conf.tn_id && cc.vv.gameData.deskInfo.conf.tn_id == e.tn_id) {
var i;
cc.vv.PopupManager.addPopup("BalootClient/KnockoutMatch/prefabs/KnockoutHintNotJoin", ((i = {
scaleIn: !0,
noCloseHit: !0,
noTouchClose: !0
}).noCloseHit = !0, i.onShow = function(t) {
cc.find("node_time/value", t).getComponent(cc.Label).string = Global.formatTime("hh:mm", e.start_time || 0);
cc.find("btn_ok", t).on("click", function() {
cc.vv.PopupManager.removePopup(t);
window.facade && window.facade.gotoHall ? window.facade.gotoHall() : cc.vv.gameData.doExitRoom && cc.vv.gameData.doExitRoom();
});
}, i));
}
}
},
REQ_KNOCKOUT_JOIN: function(e) {
if (200 == e.code && e.spcode && e.spcode > 0) {
cc.vv.FloatTip.show(cc.vv.UserConfig.spcode2String(e.spcode), !0);
cc.vv.PopupManager.removeAll();
}
},
UPDATE_PINMSG: function(e) {
200 == e.code && (this.pinmsg = e.pinmsg);
},
setLeagueRemindTime: function(e) {
this.leagueRmindTime = e;
},
leagueexpTime: function() {
if (this.leagueRmindTime) {
this.leagueRmindTime -= 1;
this.leagueRmindTime < 0 && (this.leagueRmindTime = 0);
}
},
updateTimer: function() {
this.leagueexpTime();
},
level: function() {
return cc.vv.UserConfig.totalExp2Level(this._curExp);
},
getCurLv: function() {
return this.level();
},
getVip: function() {
return cc.vv.UserConfig.vipExp2Level(cc.vv.UserManager.svipexp);
},
getAddInvite: function() {
return this.addInvite;
},
setShakeStatus: function(e) {
e ? Global.saveLocal("ROOM_SHAKE_STAUS", "1") : Global.saveLocal("ROOM_SHAKE_STAUS", "0");
},
getSkateStatus: function() {
var e = Global.getLocal("ROOM_SHAKE_STAUS", "1");
return !(!e || "1" != e);
},
getRegisterCoin: function() {
return this.reg_bonus_coin;
},
getSignTotalCoin: function() {
return this.sign_bonus_coin;
},
isGameOpen: function(e) {
for (var t, n = i(cc.vv.UserManager.gameList); !(t = n()).done; ) if (t.value.id == e || 9999 == e) return !0;
return !1;
},
showChargeUI: function() {
var e = "YD_Pro/prefab/yd_shop";
cc.vv.UserManager.isbindphone > 0 || (e = "YD_Pro/prefab/Register");
cc.vv.PopupManager.addPopup(e, {
onShow: function() {}
});
},
getLepGames: function() {
return this.lepordgames;
},
isInLepGames: function(e) {
var t = !1;
if (this.lepordgames) for (var i = 0; i < this.lepordgames.length; i++) if (e == this.lepordgames[i]) {
t = !0;
break;
}
return t;
},
getSalonVip: function() {
return this.salonVip;
},
isInRebateGames: function(e) {
for (var t = !1, i = 0; i < this.rebatGames.length; i++) if (e == this.rebatGames[i]) {
t = !0;
break;
}
return t;
},
isBonusPromOpen: function() {
return this.bonus_prom;
},
update: function() {
cc.vv.ChipPool && cc.vv.ChipPool.update();
}
}
});
cc._RF.pop();
}, {
UserManager: "UserManager"
} ],
UserManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "a7772rp2E5D3IIknLMJZcjO", "UserManager");
cc.Class({
extends: cc.Component,
statics: {
gameServer: "",
token: "",
serverId: "",
subId: "",
uid: 0,
openid: 0,
totalcoin: 0,
dcoin: 0,
cashbonus: 0,
dcashbonus: 0,
bankcoin: 0,
coin: {
get: function() {
return this._coin ? this._coin : 0;
},
set: function(e) {
this._coin = e;
}
},
level: 1,
userIcon: "",
sex: 1,
agent: 0,
nickName: "",
inviteCode: "",
bindcode: "",
ip: "192.168.0.1",
memo: "",
onlinestate: 0,
syotime: 0,
lrwardstate: 0,
switch: null,
showActivity: !0,
lat: 0,
lng: 0,
unionid: "",
bank_token: null,
bank_info: {},
rememberPsw: !1,
gameList: null,
isAutoLogin: !1,
luckRedvelopesNum: 0,
growup: null,
red_envelop: 0,
areaCode: null,
evo: 0,
_stampInfo: null,
svip: 0,
svipexp: 28,
svipup: 1,
logonTime: 0,
serverTime: 0,
bonusList: null,
guides: null,
favorite_games: [],
_notEnoughCoinPopList: null,
activityTipsInGame: !1,
questmaxcoin: 0,
_dailygift: null,
_richpoint: 0,
_hallIconSpin: [],
_firstBuyGift: {},
_diamond: 0,
_noticerewards: 0,
_questroundid: 1,
_bingoFrom: 1,
_popParams: null,
_betData: {},
playedGameIds: [],
_bonusTab: 0,
_hallRankData: {},
_pvpRank: "",
_pvpScore: "",
_pvpCC: "",
_pvp_defend_team: [],
init: function() {
Global.playerData = this;
this.switch = [];
cc.vv.NetManager.registerMsg(MsgId.GAME_LIST, this.recvGameList, this);
cc.vv.NetManager.registerMsg(MsgId.PULL_CH_LESSCOIN_ACTIVELIST, this.onRcvLessCoinPoplist, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_REFRESH_VIP, this.onEventRefreshVip, this);
cc.vv.NetManager.registerMsg(MsgId.PULL_MODIFY_LOCALVAL, this.onRcvPullModifyLocalval, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_SYNC_HALLINFO, this.onRecvRefreshHallInfo, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_FRIENDS_LIST, this.onRcvFriendsList, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_ADD_FRIENDS, this.onFriendAdded, this);
cc.vv.NetManager.registerMsg(MsgId.REQ_DELETE_FRIENDS, this.onFriendRemoved, this);
this.registerExMsg();
},
registerExMsg: function() {},
initLoginServer: function(e) {
this.gameServer = e.net;
this.token = e.token;
this.serverId = e.server;
this.subId = e.subId;
this.uid = e.uid;
this.unionid = e.unionid;
},
recvGameList: function(e) {
if (200 === e.code) {
this.gameList = e.gamelist;
cc.log(this.gameList.length);
for (var t in this.gameList) this.gameList[t].sort(function(e, t) {
return e.ord - t.ord;
});
Global.dispatchEvent(EventId.UPDATE_GAME_LIST);
}
},
initPlayerData: function(e) {
console.log("initPlayerData: function (serverData)");
var t = e.playerInfo;
this.clubInvitePop = e.clubInvitePop;
e.actlist;
this.setCurLv(t.level);
this.uid = t.uid;
this.coin = t.coin;
this.userIcon = t.usericon;
this.sex = t.sex;
this.agent = t.agent;
this.nickName = t.playername;
this.memo = t.memo;
this.inviteCode = t.code;
this.bindcode = t.bindcode;
this.ip = t.ip;
this.onlinestate = t.onlinestate;
this.lrwardstate = t.lrwardstate;
this.upcoin = e.upcoin;
this.ispayer = t.ispayer;
this.account = t.account;
this.logincoin = t.logincoin;
this.switch = t.switch || [];
this.logintype = t.logintype;
this.isbindfb = t.isbindfb;
this.fbIcon = t.fb_icon;
this.isbindgoogle = t.isbindgg;
this.spread = t.spread || 0;
this.gameList = e.gamelist;
this.luckRedvelopesNum = t.luckRedvelopesNum;
this.growup = e.growup;
this.red_envelope = t.red_envelope;
this.evo = e.evo;
this._curExp = t.levelexp;
this._updateExp = t.levelup;
this._nextLvReward = t.next_level_reward;
this.initgift = t.initgift;
this.svip = t.svip || 0;
this.svipexp = t.svipexp || 0;
this.svipup = t.svipup || Global.VIP_INFO[this.svip].upNeedExp;
this.bonusList = e.bonuslist;
this.activityList = e.activitylist;
this.offlineAward = t.offlineaward;
this.offlineTime = t.offlinetime;
this.guides = t.guide;
this.questmaxcoin = e.questmaxcoin;
this.logonTime = new Date().getTime();
this.serverTime = e.servertime;
this._levelGift = 0;
this.pvp_card_exp = t.pvp_card_exp;
this._pvp_defend_team = t.pvp_defend_team;
this.charm = t.charm;
this.charmList = e.charmList;
this._richpoint = t.upoint;
this._diamond = t.diamond || 0;
this.favorite_games = e.favorite_games;
this._noticerewards = e.backGameCoin;
this._questroundid = e.questroundid;
this._popParams = e.popParams;
this.setBetData(t.palace);
e.redPoint && this.setSliverHarm(e.redPoint.dailyGift);
if (e.bingo) {
this.countData = Math.floor((1e3 * e.bingo.endTime - new Date().getTime()) / 1e3);
this.bingoData = e.bingo;
}
this._journey = e.journey;
this._firstBuyGift = e.firstPayGift;
if (cc.vv.PopUIMgr) {
var i = !1;
if (Global.isIOSReview()) for (var n = 0; n < e.poplist.length; n++) if (1 == e.poplist[n]) {
i = !0;
break;
}
if (i) cc.vv.PopUIMgr.setLoginPopList([ 1 ]); else if (Global.isIOSReview()) cc.vv.PopUIMgr.setLoginPopList([]); else {
cc.vv.PopUIMgr.setLoginPopList(e.poplist);
this.clubInvitePop && cc.vv.PopUIMgr.addLoginPopList(101);
}
}
for (var a in this.gameList) {
var o = this.gameList[a];
o && o instanceof Array && o.sort(function(e, t) {
return e.ord - t.ord;
});
}
Global.saveLocal(Global.SAVE_KEY_LOGIN_TYPE, this.logintype);
var r = Global.getLocal(Global.SAVE_PLAYER_TOKEN);
r = void 0 === r ? {} : JSON.parse(r);
if (this.logintype !== Global.LoginType.Guest) if (this.rememberPsw) {
r[this.nickName] || (r[this.nickName] = {});
r[this.nickName].token = this.token;
} else r[this.nickName] && (r[this.nickName] = {});
r.curr_account = this.nickName;
Global.saveLocal(Global.SAVE_PLAYER_TOKEN, JSON.stringify(r));
},
SetUserIcon: function(e) {
this.userIcon = e;
},
AddCoin: function(e, t) {
console.log("加钱AddCoin(val,bRefushHall)");
this.coin += e;
t && Global.dispatchEvent(EventId.UPATE_COINS);
},
SetCoin: function(e, t) {
console.log("设置:SetCoin(val,bRefushHall)");
this.coin = e;
this.totalcoin = this.coin + this.cashbonus + this.bankcoin;
t && Global.dispatchEvent(EventId.UPATE_COINS);
},
setBankCoin: function(e) {
this.bankcoin = e;
},
getGameList: function() {
return this.gameList;
},
getFavourList: function() {
return this.favorite_games;
},
setFavourList: function(e) {
this.favorite_games = e;
},
isFavourGame: function(e) {
var t;
if (this.favorite_games) for (var i = 0; i < this.favorite_games.length; i++) if (this.favorite_games[i] == e) {
t = !0;
break;
}
return t;
},
getUnlockGames: function() {
var e = [];
for (var t in this.gameList) for (var i = this.gameList[t], n = 0; n < i.length; n++) {
var a = i[n];
cc.vv.GameItemCfg[a.id] && a.level < this.level && 1 == a.status && e.push(a);
}
return e;
},
getGameListById: function(e) {
var t = null;
for (var i in this.gameList) for (var n = this.gameList[i], a = 0; a < n.length; a++) if (Number(e) == Number(n[a].id)) {
t = n[a];
break;
}
return t;
},
setRemember: function(e) {
this.rememberPsw = e;
},
setNickName: function(e) {
this.nickName = e;
},
getNickName: function() {
return this.nickName;
},
getNocticeRewards: function() {
return this._noticerewards;
},
clearNoticeRewards: function() {
this._noticerewards = 0;
},
setLoginType: function(e) {
this.logintype = e;
},
getLoginType: function() {
return this.logintype;
},
getClubInvitePop: function() {
return this.clubInvitePop;
},
setIsBindFb: function(e) {
this.isbindfb = !!e;
},
isBindFb: function() {
return this.isbindfb;
},
setIsBindGoogle: function(e) {
this.isbindgoogle = e;
},
getIsBindGoogle: function() {
return this.isbindgoogle;
},
getNotEncoughCoinPoplist: function() {
return this._notEnoughCoinPopList;
},
setNotEncoughPopForceFlag: function(e) {
this._notEnoughCoinPopList && (this._notEnoughCoinPopList.bforse = e);
},
getDiamond: function() {
return this._diamond;
},
setDiamond: function(e, t) {
this._diamond = e;
t && Global.dispatchEvent(EventId.UPATE_DIAMOND);
},
AddDiamond: function(e, t) {
this._diamond += e;
t && Global.dispatchEvent(EventId.UPATE_DIAMOND);
},
getCurQuestId: function() {
return this._questroundid;
},
setCurQuestId: function(e) {
this._questroundid = e;
},
isCasioSatusOnHall: function() {
return this.evo;
},
isGameLock: function(e) {
var t = this.getGameListById(e);
return !t || t.level > this.level;
},
setGameUnlock: function(e) {
var t = this.getGameListById(e);
if (t) {
t.level = 0;
Global.dispatchEvent(EventId.REFUSH_GAME_ITEM, e);
}
},
isServerOpenGame: function(e) {
return 1 == this.getGameListById(e).status;
},
isDownloadSubGame: function(e) {
if (Global.isNative()) {
var t = cc.vv.GameItemCfg[e];
if (t) {
var i = t.name;
return !!cc.sys.localStorage.getItem(i);
}
AppLog.warn("没有配置入口" + e);
return !0;
}
return !0;
},
isNoNeedDownGame: function(e) {
for (var t, i = this.getNoNeedDownGames(), n = 0; n < i.length; n++) if (i[n] == e) {
t = !0;
break;
}
return t;
},
getNoNeedDownGames: function() {
Global.appId === Global.APPID.SouthAmerica || (Global.appId, Global.APPID.HuaweiDRM);
Global.appId == Global.APPID.Indian || (Global.appId, Global.APPID.Poly);
return [ 611, 659, 631, 657 ];
},
getCurExp: function() {
return this._curExp;
},
setCurExp: function(e) {
this._curExp = e;
},
getUpdateExp: function() {
return this._updateExp;
},
setUpdateExp: function(e) {
this._updateExp = e;
},
getCurLv: function() {
return this.level;
},
setCurLv: function(e) {
this.level = e;
Global.saveLocal("userlv", e);
},
getNextLvReward: function() {
return this._nextLvReward;
},
setNextLvReward: function(e) {
this._nextLvReward = e;
},
setHallTab: function(e) {
this._hallTab = e;
},
getHallTab: function() {
return this._hallTab;
},
setBonusTab: function(e) {
this._bonusTab = e;
},
getBonusTab: function() {
return this._bonusTab;
},
getHallOffset: function() {
return this._scrollOff;
},
setHallOffset: function(e) {
this._scrollOff = e;
},
setLevelGift: function(e) {
this._levelGift = e;
},
getLevelGift: function() {
return this._levelGift;
},
getVipLevel: function() {
return this.svip;
},
setVipLevel: function(e) {
this.svip = e;
},
setVipUp: function(e) {
this.svipup = e;
},
setVipExp: function(e) {
this.svipexp = e;
},
getVipExp: function() {
return this.svipexp;
},
getVipPro: function() {
return this.svipup <= 0 ? 1 : this.svipexp / this.svipup;
},
getOfflineAward: function() {
return this.offlineAward;
},
getOfflineTime: function() {
return this.offlineTime;
},
getRichPoint: function() {
return this._richpoint;
},
addRichPoint: function(e) {
this._richpoint += e;
},
getPvpCardExp: function() {
return this.pvp_card_exp;
},
setPvpCardExp: function(e) {
this.pvp_card_exp = e;
},
getPvpDefendTeam: function() {
return this._pvp_defend_team;
},
setPvpDefendTeam: function(e) {
this._pvp_defend_team = e;
},
getCharm: function() {
return this.charm;
},
getCharmList: function() {
return this.charmList;
},
getHallBonusList: function() {
return this.bonusList;
},
isHallBonusOpen: function(e) {
var t = !1;
if (this.bonusList) for (var i = 0; i < this.bonusList.length; i++) if (e == this.bonusList[i]) {
t = !0;
break;
}
return t;
},
isActivityOpen: function(e) {
if (this.activityList) for (var t = 0; t < this.activityList.length; t++) if (e == this.activityList[t]) return !0;
return !1;
},
onRcvLessCoinPoplist: function(e) {
if (200 == e.code) {
this._notEnoughCoinPopList = {};
this._notEnoughCoinPopList.list = e.poplist;
this._notEnoughCoinPopList.bforse = e.forcepop;
this._notEnoughCoinPopList.first = e.first;
this.updatePopParams(e.popParams);
}
},
setPigbankData: function(e) {
this._pigbankData = e;
},
getPigbankData: function() {
return this._pigbankData;
},
getCompleteGuide: function() {
this.guides = this.guides || [];
return this.guides;
},
saveCompleteGuideId: function(e) {
if (Array.isArray(e)) for (var t = 0; t < e.length; t++) e[t] && this.guides.push(e[t]); else e && this.guides.push(e);
},
setQuestInfo: function(e) {
this._questInfo = e;
},
getQuestInfo: function() {
return this._questInfo;
},
updateQuestInfoData: function(e) {
this._questInfo && (this._questInfo.data = e);
},
updateQuestInfoCfg: function(e) {
this._questInfo && (this._questInfo.roundCfg = e);
},
isOpenQuestServer: function() {
return !0;
},
onEventRefreshVip: function() {},
isOpen: function(e) {
var t = this.getCurLv();
return e >= 0 && t >= e;
},
setEnterHallAction: function(e) {
this._hallAciton = e;
},
getEnterHallAction: function() {
return this._hallAciton;
},
setGoSpinGame: function(e) {
this._goGame = e;
},
getGoSpinGame: function() {
return this._goGame;
},
setHallIconSpin: function(e) {
for (var t = !1, i = 0; i < this._hallIconSpin.length; i++) if (this._hallIconSpin[i].res == e.res) {
t = !0;
break;
}
if (!t) {
this._hallIconSpin.push(e);
for (var n = this._hallIconSpin.length - 2; n >= 0; n--) {
var a = this._hallIconSpin[n];
if (Math.abs(a.idx - e.idx) > 8) {
cc.loader.releaseResDir(a.dir);
cc.loader.release(a.res);
this._hallIconSpin.splice(n, 1);
cc.log("=======释放:" + a.dir);
}
}
}
},
releaseHallIconSpin: function() {
for (var e = 0; e < this._hallIconSpin.length; e++) {
var t = this._hallIconSpin[e];
cc.loader.releaseResDir(t.dir);
cc.loader.release(t.res);
}
this._hallIconSpin = [];
},
loadSlotIconByQueue: function(e, t, i, n) {
this._loadlist = this._loadlist || [];
var a = {};
a.obj = e;
a.url = t;
a.loadType = i;
a.loadCall = n;
this._loadlist.push(a);
this._doLoadlist();
},
_doLoadlist: function() {
var e = this;
if (!this._listloading) {
this._listloading = !0;
var t = this._loadlist.shift();
if (t) {
var i = t.obj;
cc.loader.loadRes(t.url, t.loadType, function(n, a) {
cc.isValid(i, !0) && t.loadCall && t.loadCall(n, a);
e._listloading = !1;
e._doLoadlist();
});
} else this._listloading = !1;
}
},
onRcvPullModifyLocalval: function(e) {
if (200 == e.code && e.data) {
e.data.questmaxcoin && (this.questmaxcoin = e.data.questmaxcoin);
var t = e.data.poplist;
t && cc.vv.PopUIMgr.updateLoginPopList(t);
e.data.palace && this.setBetData(e.data.palace);
}
},
getServerTime: function() {
return this.serverTime + (new Date().getTime() - this.logonTime) / 1e3;
},
isHaveSliverHarm: function() {
return this._dailygift;
},
setSliverHarm: function(e) {
this._dailygift = e;
Global.dispatchEvent(EventId.SLIVERICON_SHOW);
},
setEnterSelectBet: function(e) {
this._betVal = e;
},
getEnterSelectBet: function() {
return this._betVal;
},
setEnterMaxBet: function(e) {
this._maxbetVal = e;
},
getEnterMaxBet: function() {
return this._maxbetVal;
},
getPopParams: function(e) {
return !!this._popParams && this._popParams[e];
},
updatePopParams: function(e) {
if (this._popParams) for (var t in e) this._popParams[t] = e[t]; else this._popParams = e;
},
getBetData: function() {
if (this._betData) return this._betData;
},
setBetData: function(e) {
this._betData = e;
},
getHallRankData: function() {
return !!this._hallRankData && this._hallRankData;
},
setHallRankData: function(e) {
this._hallRankData = e;
},
update: function() {
this.bingoUpdate();
this.exploreUpdate();
},
bingoUpdate: function() {
if (Global.SYS_OPEN && this.isOpen(Global.SYS_OPEN.BINGO) && this.countData > 1) {
this.countData--;
if (1 == this.countData) {
this.countData = null;
this.getBingoPop();
return;
}
}
},
getBingoPop: function() {
var e = this;
cc.loader.loadRes("CashHero/prefab/bingo/bingo_pop", cc.Prefab, function(t, i) {
var n = cc.find("Canvas");
if (!t && cc.isValid(n) && !n.getChildByName("bingo_pop")) {
var a = cc.instantiate(i);
a.parent = n;
a.getComponent("Bingo_Pop").firstDay(e.bingoData);
}
});
},
getJourney: function() {
return this._journey;
},
exploreUpdate: function() {
Global.SYS_OPEN && this.isOpen(Global.SYS_OPEN.EXPLORATION) && this._journey && this._journey.endTime === Math.floor(new Date().getTime() / 1e3) && cc.loader.loadRes("CashHero/prefab/exploration/explore_pop", cc.Prefab, function(e, t) {
var i = cc.find("Canvas");
if (!e && cc.isValid(i) && !i.getChildByName("explore_pop")) {
var n = cc.instantiate(t);
n.parent = i;
n.getComponent("Explore_Pop").popNewSeason();
}
});
},
getFirstBuyGift: function() {
return this._firstBuyGift;
},
delFirstBuyGift: function() {
this._firstBuyGift = null;
},
getFbIconPath: function() {
return this.fbIcon;
},
setBingoFrom: function(e) {
e && (this._bingoFrom = e);
},
getBingoFrom: function() {
return this._bingoFrom;
},
setHeroData: function(e) {
this.curHeroData = e;
},
getHeroData: function() {
return this.curHeroData ? this.curHeroData : null;
},
clearHeroData: function() {
this.curHeroData = null;
},
setPvpRank: function(e) {
this._pvpRank = e;
},
getPvpRank: function() {
return this._pvpRank;
},
setPvpScore: function(e) {
this._pvpScore = e;
},
getPvpScore: function() {
return this._pvpScore;
},
setPvpCC: function(e) {
this._pvpCC = e;
},
getPvpCC: function() {
return this._pvpCC;
},
getOpenActiveType: function() {
var e;
this.bingoData && (e = 1);
this.getJourney() && (e = 2);
return e;
},
syncHallInfo: function() {
cc.vv.NetManager.sendAndCache({
c: MsgId.REQ_SYNC_HALLINFO
}, !0);
},
onRecvRefreshHallInfo: function(e) {
console.log("onRecvRefreshHallInfo:function(msg)", e);
if (200 == e.code) {
this.SetCoin(e.coin, !0);
this.setDiamond(e.diamond, !0);
this.setFavourList(e.favorite_games);
}
},
isFriend: function(e) {
if (this._friendData) return this._friendData.some(function(t) {
if (t.uid == e) return !0;
});
},
reqFriendList: function() {
var e = {
c: MsgId.REQ_FRIENDS_LIST,
curPage: 1,
recommends: 0
};
cc.vv.NetManager.sendAndCache(e);
},
onRcvFriendsList: function(e) {
if (200 == e.code && !this._hasGetList) {
this._hasGetList = !0;
this._friendData = [];
for (var t = 0; t < e.items; t++) this._friendData.push(e.items[t]);
}
},
onFriendAdded: function(e) {
if (200 == e.code && !e.spcode) {
if (!this._friendData) return;
this._friendData.push(e.friend);
}
},
onFriendRemoved: function(e) {
if (200 == e.code) {
if (!this._friendData) return;
if (!e.frienduids || e.frienduids.length <= 0) return;
for (var t = 0; t < e.frienduids.length; t++) for (var i = e.frienduids[t], n = 0; n < this._friendData.length; n++) if (i == this._friendData[n].uid) {
this._friendData.splice(n, 1);
break;
}
}
},
isMySelf: function(e) {
return e == this.uid;
}
}
});
cc._RF.pop();
}, {} ],
WebView_Ex: [ function(e, t) {
"use strict";
cc._RF.push(t, "a2a9b4J0JtPPaEfTlJdTTT7", "WebView_Ex");
cc.Class({
extends: cc.WebView,
properties: {},
onEnable: function() {
var e = this._impl;
e.createDomElementIfNeeded(this.node.width, this.node.height);
e.setEventListener(cc.WebView.EventType.LOADED, this._onWebViewLoaded.bind(this));
e.setEventListener(cc.WebView.EventType.LOADING, this._onWebViewLoading.bind(this));
e.setEventListener(cc.WebView.EventType.ERROR, this._onWebViewLoadError.bind(this));
e.setVisible(!0);
}
});
cc._RF.pop();
}, {} ],
hotupdate: [ function(e, t) {
"use strict";
cc._RF.push(t, "12917XLxXRKlacdMHGtn3n3", "hotupdate");
var i = e("../../script/global/Md5");
cc.Class({
extends: cc.Component,
properties: {
progressBar: cc.ProgressBar,
lblTips: cc.Label,
_updating: !1,
_failCount: 0,
_canRetry: !1,
_checkListener: null,
_updateListener: null,
_storagePath: "",
_assManager: null,
_checkOver: !1,
_countdownSec: 0,
_overtimeCount: 0,
_light: null,
_proVal: 0,
_newPackUrl: null
},
onLoad: function() {
Global.autoAdaptDevices(!1);
this.node.parent.name = Global.SCENE_NAME.HOTUPDATE;
Global.isNative() && this.initHotupdate();
},
start: function() {
Global.isNative() ? this.checkForceAppUpdate() : this.enterLoginScene();
},
initHotupdate: function() {
AppLog.ShowScreen("初始化热更");
StatisticsMgr.httpReport(StatisticsMgr.HTTP_START_HOTUPDATE);
AppLog.log("#####################-------------------");
var e = cc.sys.localStorage.getItem("HotUpdateSearchPaths");
AppLog.log(JSON.stringify(e));
this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset";
this._assManager = new jsb.AssetsManager("", this._storagePath, this.versionComHandle.bind(this));
Global.retain(this._assManager);
this._assManager.setVerifyCallback(this.verifyCallback.bind(this));
cc.sys.os === cc.sys.OS_ANDROID && this._assManager.setMaxConcurrentTask(4);
},
update: function(e) {
if (!this._checkOver && this._sendVersion) {
this._countdownSec += e;
if (this._countdownSec > 3) {
this._countdownSec = 0;
if (this._overtimeCount >= 3) {
this._checkOver = !0;
this.enterLoginScene();
} else {
this._overtimeCount += 1;
AppLog.ShowScreen("开始检查热更-Http请求重试" + this._overtimeCount);
this.checkForceAppUpdate();
}
}
}
this.ReportUpdateTime(e);
},
ShowUpdateProcess: function(e) {
cc.isValid(this.progressBar, !0) && this.progressBar.node && (this.progressBar.node.active = e);
},
SetUpdateProcess: function(e) {
cc.isValid(this.progressBar, !0) && (this.progressBar.progress = e);
if (cc.isValid(this.lblTips, !0)) {
console.log("hotupdate里面显示进度:", e);
this.lblTips.string = Math.floor(100 * e) + "%";
}
},
ReportUpdateTime: function(e) {
if (this.bStartUpdateing) {
this._updateDuring || (this._updateDuring = 0);
this.updateCount || (this.updateCount = 0);
this._updateDuring += e;
if (this._updateDuring >= 1) {
this._updateDuring = 0;
this.updateCount += 1;
}
15 == this.updateCount && StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_TIME15);
30 == this.updateCount && StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_TIME30);
45 == this.updateCount && StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_TIME45);
60 == this.updateCount && StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_TIME60);
90 == this.updateCount && StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_TIME90);
180 == this.updateCount && StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_TIME180);
}
},
onDestroy: function() {
if (this._updateListener) {
cc.eventManager.removeListener(this._updateListener);
this._updateListener = null;
}
Global.release(this._assManager);
},
enterLoginScene: function() {
var e = new Date().getTime();
Global.saveLocal("last_hotupdate", e);
if (this._assManager.getLocalManifest()) {
Global.resVersion = this._assManager.getLocalManifest().getVersion();
Global.saveLocal("c_resv", Global.resVersion);
AppLog.ShowScreen("1resvision：" + Global.resVersion);
}
},
loadFile: function(e, t, i) {
var n = "Manifest/Main/" + e;
cc.loader.loadRes(n, cc.Asset, function(e, n) {
if (e) cc.log("loadFile:" + e); else {
var a = jsb.fileUtils.getStringFromFile(n.nativeUrl), o = a;
i && (o = JSON.parse(a));
t && t(o);
}
});
},
checkForceAppUpdate: function() {
var e = this;
AppLog.log("检测App强制更新！");
AppLog.ShowScreen("开始检查热更-load本地version");
this.loadFile("version", function(t) {
AppLog.ShowScreen("开始请求remoteversion");
AppLog.log("##############url:" + t.remoteVersionUrl);
e._checkOver = !1;
e._sendVersion = !0;
cc.vv.NetManager.requestHttp("", {}, function(t, i) {
if (t) {
e._sendVersion = !1;
AppLog.ShowScreen("请求remoteversion完成");
AppLog.log("请求remoteversion完成");
if (e._checkOver) {
AppLog.log("已经检测完成...");
return;
}
e._checkOver = !0;
e._checkRemoteVisionAction(i);
} else {
AppLog.ShowScreen("开始检查热更-Http请求version失败");
AppLog.log("请求remoteversion完成");
}
}.bind(e), t.remoteVersionUrl, "GET", !1);
}, !0);
},
_reTryGetVisioninfo: function() {
this._reTryCount = this._reTryCount || 0;
if (this._reTryCount > 2) this.startCheckHotUpdate(); else {
this._reTryCount += 1;
this.checkForceAppUpdate();
}
},
_checkRemoteVisionAction: function(e) {
var t = "string" == typeof e ? JSON.parse(e) : e;
Global.resVersion = t.version;
AppLog.log("远端Version:" + Global.resVersion);
AppLog.ShowScreen("远端Version:" + Global.resVersion);
Global.saveLocal("c_resv", Global.resVersion);
var i = parseInt("1.0.0".split(".").join(""));
AppLog.log("本地Version:" + i);
var n = parseInt("1.0.0".split(".").join("")), a = !1, o = t.androidAppUrl;
if (Global.isIOS()) {
n = parseInt(t.ios_app_version.split(".").join(""));
a = t.force_update_ios;
o = t.iosAppUrl;
}
Global.appId == Global.APPID.SouthAmerica && (o = "https://appgallery.cloud.huawei.com/ag/n/app/C103558397?locale=zh_CN&source=appshare&subsource=C103558397");
AppLog.log("@@@@@@@@@@@@@localAppVersion: " + i);
AppLog.log("@@@@@@@@@remoteAppVersion: " + n);
AppLog.log("@@@@@@@@@@@@isNeedForceUpdate: " + a);
AppLog.log("@@@@@@@@@@@@@@app_update_url: " + o);
if (i < n) {
AppLog.log("需要更新App");
if (a) {
AppLog.log("需要强制更新App");
this.deleteSubgameDir();
cc.vv.AlertView.show("Update the APP version to enjoy the game!", function() {
cc.vv.PlatformApiMgr.openURL(o);
cc.game.end();
}.bind(this), null, !1, null, null, "null", "Confirm");
} else cc.vv.AlertView.show("Update the APP version to enjoy the game!", function() {
cc.vv.PlatformApiMgr.openURL(o);
cc.game.end();
}.bind(this), function() {
AppLog.log("非强制更新，检测热更新！");
this.startCheckHotUpdate();
}.bind(this), !1, null, null, null, "Confirm");
} else {
AppLog.log("不需要更新App！");
this.startCheckHotUpdate();
}
},
startCheckHotUpdate: function() {
AppLog.ShowScreen("开始checkupdate");
StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_CHECK);
this.checkHotUpdate();
},
checkHotUpdate: function() {
if (this._updating) AppLog.log("Checking or Updating ..."); else {
AppLog.ShowScreen("开始load本地project");
this.loadFile("project", function(e) {
AppLog.ShowScreen("load本地project完成");
AppLog.log("load本地project完成");
if (this._assManager.getState() === jsb.AssetsManager.State.UNINITED) {
var t = new jsb.Manifest(e, this._storagePath);
this._assManager.loadLocalManifest(t, this._storagePath);
}
if (this._assManager.getLocalManifest() && this._assManager.getLocalManifest().isLoaded()) {
StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_ENTER);
this._assManager.setEventCallback(this.checkCallback.bind(this));
this._assManager.checkUpdate();
} else AppLog.warn("Failed to load local manifest ...");
}.bind(this));
}
},
startHotupdate: function() {
if (this._assManager && !this._updating) {
this._assManager.setEventCallback(this.updateCallback.bind(this));
this._failCount = 0;
this._assManager.update();
this._updating = !0;
}
},
checkCallback: function(e) {
var t = this, i = !1, n = e.getEventCode();
StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_CHECKRESULT, n);
switch (n) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
AppLog.log("【check】No local manifest file found, hot update skipped.");
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
AppLog.log("【check】Fail to download manifest file, hot update skipped.");
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
AppLog.log("【check】Already up to date with the latest remote version.");
i = !0;
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
AppLog.log("New version found, please try to update.");
this.checkNewVisionFound();
return;

default:
return;
}
this._assManager.setEventCallback(null);
this._checkListener = null;
this._updating = !1;
i ? this.enterLoginScene() : cc.vv.AlertView.show("check failed! please check network.", function() {
t.checkHotUpdate();
});
},
checkNewVisionFound: function() {
var e = this, t = 0;
AppLog.ShowScreen("checkupdate完成,发现新版准备下载");
this._assManager && (t = this._assManager.getTotalBytes());
if (t && t > 52428800 && cc.sys.getNetworkType() == cc.sys.NetworkType.WWAN) {
var i = this._getUpdateStartTip(t);
cc.vv.AlertView.show(i, function() {
e.startHotupdate();
}, function() {
cc.game.end();
});
} else this.startHotupdate();
},
_getUpdateStartTip: function(e) {
var t = (e / 1024 / 1024).toFixed(2);
return cc.js.formatStr("It is detected that the resource pack of %sM needs to be updated. Do you want to download it now?", t);
},
updateCallback: function(e) {
var t = !1, i = !1;
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
AppLog.warn("No local manifest file found, hot update skipped.");
i = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
this.bStartUpdateing || AppLog.ShowScreen("开始下载");
this.bStartUpdateing = !0;
var n = e.getDownloadedBytes(), a = e.getTotalBytes(), o = Math.floor(n / a * 100);
if ((o = isNaN(o) ? 0 : o) <= 100) {
this._proVal = o / 100;
this.ShowUpdateProcess(!0);
this.SetUpdateProcess(o / 100, n, a);
}
var r = e.getMessage();
r && AppLog.log(e.getPercent() / 100 + "% : " + r);
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
var s = "Fail to download manifest file";
AppLog.warn(s);
StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_FAILED, s);
i = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
AppLog.warn("Already up to date with the latest remote version.");
i = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
AppLog.log("Update finished. " + e.getMessage());
Global.saveLocal("c_resv", Global.resVersion);
Global.saveLocal("has_hot_res", "true");
t = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
var c = e.getMessage();
AppLog.warn("UpdateFailed:" + c);
this.lblTips.string = c;
this._updating = !1;
this._canRetry = !0;
StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_FAILED, c);
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
var l = "Asset update error: " + e.getAssetId() + ", " + e.getMessage();
AppLog.warn(l);
StatisticsMgr.httpReport(StatisticsMgr.HTTP_HOTUPDATE_PRO_FAILED, l);
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
AppLog.log(e.getMessage());
}
if (this._canRetry) {
console.log("#################download update failed files");
this._nRetrCount || (this._nRetrCount = 0);
this._nRetrCount++;
if (this._nRetrCount > 5) {
cc.vv.AlertView.show("Oops! Something went wrong. Please try again.", function() {
cc.game.restart();
}, null, !0, function() {
cc.game.end();
});
return;
}
this._canRetry = !1;
this._assManager.downloadFailedAssets();
this.lblTips.string = cc.js.formatStr("Wait a minute, I am working hard to update~(%s)", this._nRetrCount);
}
if (i) {
this._assManager.setEventCallback(null);
this._updateListener = null;
this._updating = !1;
cc.vv.AlertView.show("update failed! please check network.", function() {
cc.game.end();
});
}
if (t) {
var _ = new Date().getTime();
Global.saveLocal("last_hotupdate", _);
AppLog.ShowScreen("完成下载，准备重启");
StatisticsMgr.httpReport(StatisticsMgr.HTTP_SUCCESS_HOTUPDATE);
this._assManager.setEventCallback(null);
this._updateListener = null;
var u = jsb.fileUtils.getSearchPaths();
if (this._assManager.getLocalManifest()) {
var h = this._assManager.getLocalManifest().getSearchPaths();
AppLog.warn(JSON.stringify(h));
Array.prototype.unshift(u, h);
}
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(u));
jsb.fileUtils.setSearchPaths(u);
Global.saveLocal("app_pro", this._proVal);
cc.audioEngine.stopAll();
cc.game.restart();
}
},
versionComHandle: function(e, t) {
AppLog.log("JS Custom Version Compare: version A is " + e + ", version B is " + t);
for (var i = e.split("."), n = t.split("."), a = 0; a < i.length; ++a) if (parseInt(i[a]) !== parseInt(n[a])) return -1;
return n.length > i.length ? -1 : 0;
},
verifyCallback: function(e, t) {
var n = t.compressed, a = (t.md5, t.path), o = t.size;
o > 102400 && AppLog.warn("[download file] : " + a + " size:" + o);
if (n) {
AppLog.log("Verification passed : " + a);
return !0;
}
if (Global.APPID.TestCashHero == Global.appId) return !0;
if (".manifest" == cc.path.extname(a)) return !0;
var r = jsb.fileUtils.getWritablePath() + "remote-asset_temp/" + a;
return !!jsb.fileUtils.isFileExist(r) && i(jsb.fileUtils.getDataFromFile(r)) === t.md5;
},
checktNewPackUrl: function(e) {
if (e) {
if (!this._newPackUrl || Global.packageUrl == this._newPackUrl) {
AppLog.warn("不用替换热更地址");
return e;
}
if (cc.js.isString(e)) e = e.replace(new RegExp(Global.packageUrl, "g"), this._newPackUrl); else {
e.packageUrl && (e.packageUrl = e.packageUrl.replace(Global.packageUrl, this._newPackUrl));
e.remoteVersionUrl && (e.remoteVersionUrl = e.remoteVersionUrl.replace(Global.packageUrl, this._newPackUrl));
e.remoteManifestUrl && (e.remoteManifestUrl = e.remoteManifestUrl.replace(Global.packageUrl, this._newPackUrl));
}
}
return e;
},
deleteSubgameDir: function() {
if (Global.isNative()) {
var e = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset/";
if (jsb.fileUtils.isDirectoryExist(e)) {
jsb.fileUtils.removeDirectory(e);
AppLog.warn("[删除热更缓存]");
}
}
}
});
cc._RF.pop();
}, {
"../../script/global/Md5": "Md5"
} ],
i18SpriteButton: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "bec54SLjm5EIZDnfMMxs5G5", "i18SpriteButton");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.i18SpriteButton = void 0;
var n = e("./i18nManager"), a = e("./i18nSprite"), o = cc._decorator, r = o.ccclass, s = o.property, c = o.requireComponent, l = o.menu, _ = o.disallowMultiple, u = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.normalSpriteFrameSets = [];
t.pressedSpriteFrameSets = [];
t.hoverSpriteFrameSets = [];
t.disabledSpriteFrameSets = [];
t.button = null;
return t;
}
t.prototype.onLoad = function() {
n.i18nManager.register(this);
this.button = this.node.getComponent(cc.Button);
this.updateView();
};
t.prototype.onDestroy = function() {
n.i18nManager.unregister(this);
this.normalSpriteFrameSets = null;
this.pressedSpriteFrameSets = null;
this.hoverSpriteFrameSets = null;
this.disabledSpriteFrameSets = null;
this.button = null;
};
t.prototype.onEnable = function() {
this.updateView();
};
t.prototype.updateView = function() {
var e = this;
if (this.button && this.button.transition == cc.Button.Transition.SPRITE) {
this.normalSpriteFrameSets && n.i18nManager.getSprite(this.normalSpriteFrameSets, "", function(t) {
cc.isValid(e.button.normalSprite) && t && (e.button.normalSprite = t);
});
this.pressedSpriteFrameSets && n.i18nManager.getSprite(this.pressedSpriteFrameSets, "", function(t) {
cc.isValid(e.button.normalSprite) && t && (e.button.pressedSprite = t);
});
this.hoverSpriteFrameSets && n.i18nManager.getSprite(this.hoverSpriteFrameSets, "", function(t) {
cc.isValid(e.button.normalSprite) && t && (e.button.hoverSprite = t);
});
this.disabledSpriteFrameSets && n.i18nManager.getSprite(this.disabledSpriteFrameSets, "", function(t) {
cc.isValid(e.button.normalSprite) && t && (e.button.disabledSprite = t);
});
}
};
__decorate([ s([ a.i18nSpriteFrameSet ]) ], t.prototype, "normalSpriteFrameSets", void 0);
__decorate([ s([ a.i18nSpriteFrameSet ]) ], t.prototype, "pressedSpriteFrameSets", void 0);
__decorate([ s([ a.i18nSpriteFrameSet ]) ], t.prototype, "hoverSpriteFrameSets", void 0);
__decorate([ s([ a.i18nSpriteFrameSet ]) ], t.prototype, "disabledSpriteFrameSets", void 0);
return __decorate([ r, c(cc.Button), _, l("多语言/i18SpriteButton") ], t);
}(cc.Component);
i.i18SpriteButton = u;
cc._RF.pop();
}, {
"./i18nManager": "i18nManager",
"./i18nSprite": "i18nSprite"
} ],
i18nComEx: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "8651e97jtNFQLQi0l9CB3ye", "i18nComEx");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("../_FWExpand/i18n/i18nConst"), a = e("../_FWExpand/i18n/i18nManager"), o = cc._decorator, r = o.ccclass, s = o.property, c = o.menu, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._currLanguage = n.i18nLangEnum.AR;
t.jsonAsset_ar = null;
t.jsonAsset_en = null;
return t;
}
Object.defineProperty(t.prototype, "language", {
set: function(e) {
this._currLanguage = e;
a.i18nManager.setLanguage(this._currLanguage);
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
this.language = n.i18nLangEnum.EN;
};
t.prototype.onDestroy = function() {};
__decorate([ s({
visible: !1
}) ], t.prototype, "_currLanguage", void 0);
__decorate([ s({
type: cc.JsonAsset,
displayName: "预加载Json"
}) ], t.prototype, "jsonAsset_ar", void 0);
__decorate([ s({
type: cc.JsonAsset,
displayName: "预加载Json"
}) ], t.prototype, "jsonAsset_en", void 0);
return __decorate([ r, c("多语言/i18nCom") ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {
"../_FWExpand/i18n/i18nConst": "i18nConst",
"../_FWExpand/i18n/i18nManager": "i18nManager"
} ],
i18nCom: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "39880fqDlNNGLVJAY0UaFeD", "i18nCom");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("./i18nConst"), a = e("./i18nManager"), o = cc._decorator, r = o.ccclass, s = o.property, c = o.menu, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._currLanguage = n.i18nLangEnum.AR;
t.jsonAsset_ar = null;
t.jsonAsset_en = null;
return t;
}
Object.defineProperty(t.prototype, "language", {
set: function(e) {
this._currLanguage = e;
a.i18nManager.setLanguage(this._currLanguage);
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
var e = a.i18nManager.getLanguage();
e ? this.language = e : [ "en", "en-au", "en-bz", "en-ca", "en-gb", "en-ie", "en-jm", "en-nz", "en-ph", "en-tt", "en-us", "en-za", "en-zw" ].indexOf(cc.sys.languageCode) >= 0 ? this.language = n.i18nLangEnum.EN : this.language = n.i18nLangEnum.AR;
};
t.prototype.onDestroy = function() {};
__decorate([ s({
visible: !1
}) ], t.prototype, "_currLanguage", void 0);
__decorate([ s({
type: cc.JsonAsset,
displayName: "预加载Json"
}) ], t.prototype, "jsonAsset_ar", void 0);
__decorate([ s({
type: cc.JsonAsset,
displayName: "预加载Json"
}) ], t.prototype, "jsonAsset_en", void 0);
return __decorate([ r, c("多语言/i18nCom") ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {
"./i18nConst": "i18nConst",
"./i18nManager": "i18nManager"
} ],
i18nConst: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "8a126GgQqxCsZy5aCbbynTu", "i18nConst");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.i18nLanguage = i.i18nLangEnum = void 0;
var n;
(function(e) {
e[e.AR = 1] = "AR";
e[e.EN = 2] = "EN";
})(n = i.i18nLangEnum || (i.i18nLangEnum = {}));
i.i18nLanguage = {
AR: {
enum: n.AR,
name: "عربي",
lang: "ar",
unit: "AED",
id: 1
},
EN: {
enum: n.EN,
name: "English",
lang: "en",
unit: "$",
id: 2
}
};
cc._RF.pop();
}, {} ],
i18nLabel: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "aaffabCRcpLyqXd9ReiHVw6", "i18nLabel");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.i18nLabel = void 0;
var n = e("./i18nManager"), a = cc._decorator, o = a.ccclass, r = a.property, s = a.executeInEditMode, c = a.disallowMultiple, l = a.requireComponent, _ = a.menu, u = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._srcKey = "";
return t;
}
t.prototype.onLoad = function() {
n.i18nManager.register(this);
this._srcKey || (this._srcKey = this.getComponent(cc.Label).string);
this.updateView();
};
Object.defineProperty(t.prototype, "string", {
get: function() {
return this._srcKey;
},
set: function(e) {
this._srcKey = e;
var t = this.getComponent(cc.Label);
!Global.noI18n && cc.isValid(t) && (t.string = n.i18nManager.getLabel(e));
},
enumerable: !1,
configurable: !0
});
t.prototype.updateView = function() {
this.string = this._srcKey;
};
t.prototype.onDestroy = function() {
n.i18nManager.unregister(this);
};
__decorate([ r({
visible: !1
}) ], t.prototype, "_srcKey", void 0);
__decorate([ r({
type: cc.String,
multiline: !0
}) ], t.prototype, "string", null);
return __decorate([ o, s, l(cc.Label), c, _("多语言/i18nLabel") ], t);
}(cc.Component);
i.i18nLabel = u;
cc._RF.pop();
}, {
"./i18nManager": "i18nManager"
} ],
i18nManager: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "8a7cdJoktdBhYGdfdYuspyH", "i18nManager");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.i18nManager = void 0;
var n = e("./i18nLabel"), a = e("./i18nSprite"), o = e("./i18nConst"), r = e("./i18nTransform"), s = e("./i18nRichLabel"), c = e("./i18SpriteButton"), l = function() {
function e() {}
e.setLanguage = function(e) {
if (this.lang !== e) {
this.lang = e;
cc.sys.localStorage.setItem("i18n_lang", this.lang);
this.reloadAll();
}
};
e.getLanguage = function(e) {
var t = cc.sys.localStorage.getItem("i18n_lang");
null != t && null != t || (t = e);
return t;
};
e.getLanguageConfig = function(e) {
var t = null;
for (var i in o.i18nLanguage) if (e == o.i18nLanguage[i].enum) {
t = o.i18nLanguage[i];
break;
}
return t;
};
e.getConfig = function() {
return this.getLanguageConfig(this.getLanguage(o.i18nLangEnum.AR));
};
e.getLabel = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
if (!e) return "";
var i, n = e[0], a = this._langCache[this.lang] || {};
i = a[n];
!Global.noI18n && i || (i = n);
for (var o = 1; o < e.length; o++) i = i.replace("{" + o + "}", e[o]);
return i;
};
e.getSprite = function(e, t, i) {
if (e instanceof cc.SpriteAtlas) {
var n = e, a = n.getSpriteFrame((1 == this.lang ? "ar" : "en") + "_" + t);
a || (a = n.getSpriteFrame(this.lang + "-" + t));
i(a);
} else {
for (var o = void 0, r = 0, s = e; r < s.length; r++) {
var c = s[r];
if (c.language == this.lang) {
o = c.spriteFrame;
break;
}
}
i(o);
}
};
e.getString = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
var i = "";
this.getLanguage() == o.i18nLangEnum.AR && (e = e.reverse());
for (var n = 0, a = e; n < a.length; n++) {
var r = a[n];
i += r;
}
return i;
};
e.register = function(e) {
this.cmpList.indexOf(e) < 0 && this.cmpList.push(e);
};
e.unregister = function(e) {
var t = this.cmpList.indexOf(e);
t >= 0 && this.cmpList.splice(t, 1);
};
e.reloadAll = function() {
var e = this, t = "i18n/" + this.getLanguageConfig(this.lang).lang;
cc.loader.loadRes(t, cc.JsonAsset, function(t, i) {
if (t) {
e._langCache[e.lang] = null;
cc.error(t);
} else {
e._langCache[e.lang] = i.json;
for (var a = 0, o = e.cmpList; a < o.length; a++) {
var r = o[a], c = r.node.getComponent(n.i18nLabel);
c && c.updateView();
var l = r.node.getComponent(s.i18nRichLabel);
l && l.updateView();
}
}
});
for (var i = 0, o = this.cmpList; i < o.length; i++) {
var l = o[i], _ = l.node.getComponent(a.i18nSprite);
_ && _.updateView();
var u = l.node.getComponent(r.default);
u && u.updateView();
var h = l.node.getComponent(c.i18SpriteButton);
h && h.updateView();
}
};
e._langCache = {};
e.cmpList = [];
return e;
}();
i.i18nManager = l;
window.___ || (window.___ = function() {
return l.getLabel.apply(l, arguments);
});
window.__ || (window.__ = function() {
return l.getString.apply(l, arguments);
});
cc._RF.pop();
}, {
"./i18SpriteButton": "i18SpriteButton",
"./i18nConst": "i18nConst",
"./i18nLabel": "i18nLabel",
"./i18nRichLabel": "i18nRichLabel",
"./i18nSprite": "i18nSprite",
"./i18nTransform": "i18nTransform"
} ],
i18nRichLabel: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "3b338uHvFVCqKa0O4Pofi7u", "i18nRichLabel");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.i18nRichLabel = void 0;
var n = e("./i18nManager"), a = cc._decorator, o = a.ccclass, r = a.property, s = a.executeInEditMode, c = a.disallowMultiple, l = a.requireComponent, _ = a.menu, u = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._srcKey = "";
return t;
}
t.prototype.onLoad = function() {
n.i18nManager.register(this);
this._srcKey || (this._srcKey = this.getComponent(cc.RichText).string);
this.updateView();
};
Object.defineProperty(t.prototype, "string", {
get: function() {
return this._srcKey;
},
set: function(e) {
this._srcKey = e;
var t = this.getComponent(cc.RichText);
!Global.noI18n && cc.isValid(t) && (t.string = n.i18nManager.getLabel(e));
},
enumerable: !1,
configurable: !0
});
t.prototype.updateView = function() {
this.string = this._srcKey;
};
t.prototype.onDestroy = function() {
n.i18nManager.unregister(this);
};
__decorate([ r({
visible: !1
}) ], t.prototype, "_srcKey", void 0);
__decorate([ r({
type: cc.String,
multiline: !0
}) ], t.prototype, "string", null);
return __decorate([ o, s, l(cc.RichText), c, _("多语言/i18nRichLabel") ], t);
}(cc.Component);
i.i18nRichLabel = u;
cc._RF.pop();
}, {
"./i18nManager": "i18nManager"
} ],
i18nSkeleton: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "2eae9mCvNhFM4KugfjjLJif", "i18nSkeleton");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.i18nSkeleton = void 0;
var n = e("./i18nManager"), a = cc._decorator, o = a.ccclass, r = (a.property, a.executeInEditMode), s = a.disallowMultiple, c = a.requireComponent, l = a.menu, _ = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
n.i18nManager.register(this);
this.ske = this.getComponent(sp.Skeleton);
this.updateView();
};
t.prototype.onDestroy = function() {
n.i18nManager.unregister(this);
};
t.prototype.updateView = function() {
var e = n.i18nManager.getConfig().lang, t = e[0].toUpperCase() + e.substr(1);
this.ske && cc.isValid(this.ske) && this.ske.setSkin(t);
};
return __decorate([ o, r, c(sp.Skeleton), s, l("多语言/i18nSkeleton") ], t);
}(cc.Component);
i.i18nSkeleton = _;
cc._RF.pop();
}, {
"./i18nManager": "i18nManager"
} ],
i18nSprite: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "eee09lib2VGWrBz2mqKLjhc", "i18nSprite");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.i18nSprite = i.i18nSpriteFrameSet = void 0;
var n, a = e("./i18nConst"), o = e("./i18nManager"), r = cc._decorator, s = r.ccclass, c = r.property, l = r.executeInEditMode, _ = r.disallowMultiple, u = r.requireComponent, h = r.menu;
(function(e) {
e[e.Texture = 0] = "Texture";
e[e.Atlas = 1] = "Atlas";
})(n || (n = {}));
var d = function() {
function e() {
this.language = a.i18nLangEnum.AR;
this.spriteFrame = null;
}
__decorate([ c({
type: cc.Enum(a.i18nLangEnum),
displayName: "语言"
}) ], e.prototype, "language", void 0);
__decorate([ c(cc.SpriteFrame) ], e.prototype, "spriteFrame", void 0);
return __decorate([ s("i18nSpriteFrameSet") ], e);
}();
i.i18nSpriteFrameSet = d;
var p = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteType = n.Texture;
t.spriteFrameSets = [];
t.atlas = null;
t._frameName = "";
return t;
}
Object.defineProperty(t.prototype, "frameName", {
get: function() {
return this._frameName || "";
},
set: function(e) {
this._frameName = e;
this._updateSpriteFrame();
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
o.i18nManager.register(this);
this.updateView();
};
t.prototype._updateSpriteFrame = function() {
var e = this.getComponent(cc.Sprite);
if (cc.isValid(e)) {
var t;
switch (this.spriteType) {
case n.Texture:
t = this.spriteFrameSets;
o.i18nManager.getSprite(t, this.frameName, function(t) {
cc.isValid(e) && t && (e.spriteFrame = t);
});
break;

default:
if (!this.atlas || 0 === this.frameName.length) return;
o.i18nManager.getSprite(this.atlas, this.frameName, function(t) {
cc.isValid(e) && t && (e.spriteFrame = t);
});
}
}
};
t.prototype.updateView = function() {
this.frameName = this._frameName;
};
t.prototype.onDestroy = function() {
o.i18nManager.unregister(this);
};
__decorate([ c({
type: cc.Enum(n)
}) ], t.prototype, "spriteType", void 0);
__decorate([ c({
type: d,
visible: function() {
return this.spriteType == n.Texture;
}
}) ], t.prototype, "spriteFrameSets", void 0);
__decorate([ c({
type: cc.SpriteAtlas,
visible: function() {
return this.spriteType == n.Atlas;
}
}) ], t.prototype, "atlas", void 0);
__decorate([ c ], t.prototype, "_frameName", void 0);
__decorate([ c({
type: cc.String,
visible: function() {
return this.spriteType == n.Atlas;
}
}) ], t.prototype, "frameName", null);
return __decorate([ s, l, u(cc.Sprite), _, h("多语言/i18nSprite") ], t);
}(cc.Component);
i.i18nSprite = p;
cc._RF.pop();
}, {
"./i18nConst": "i18nConst",
"./i18nManager": "i18nManager"
} ],
i18nTransform: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "74257ExVoNP55p2xntkzECe", "i18nTransform");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = e("./i18nConst"), a = e("./i18nManager"), o = cc._decorator, r = o.ccclass, s = o.property, c = o.menu, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.scaleX = !1;
t.angle = !1;
t.auto = !0;
t.L2R = !1;
t.posX = !1;
t.anchorX = !1;
t.labelAlign = !1;
t.layoutDir = !1;
t.widgetAlgin = !1;
t.editBoxAlign = !1;
t.listDir = !1;
t.progressReverse = !1;
t.richTextlAlign = !1;
return t;
}
t.prototype.onLoad = function() {
a.i18nManager.register(this);
this.label = this.getComponent(cc.Label);
this.layout = this.getComponent(cc.Layout);
this.widget = this.getComponent(cc.Widget);
this.editBox = this.getComponent(cc.EditBox);
this.list = this.getComponent("List");
this.progress = this.getComponent(cc.ProgressBar);
this.richText = this.getComponent(cc.RichText);
this.tempPosX = this.node.x;
this.tempAnchorX = this.node.anchorX;
this.tempScaleX = this.node.scaleX;
this.tempAngle = this.node.angle;
(this.labelAlign || this.auto) && this.label && (this.labelHorizontalAlign = this.label.horizontalAlign);
(this.layoutDir || this.auto) && this.layout && (this.layoutHorizontalDirection = this.layout.horizontalDirection);
if ((this.widgetAlgin || this.auto) && this.widget) {
this.widgetIsAlignLeft = this.widget.isAlignLeft;
this.widgetIsAlignRight = this.widget.isAlignRight;
this.widgetLeft = this.widget.left;
this.widgetRight = this.widget.right;
}
if ((this.editBoxAlign || this.auto) && this.editBox) {
this.editBox_horizontalAlign = this.editBox.textLabel.horizontalAlign;
this.editBox_horizontalAlignPlaceholder = this.editBox.placeholderLabel.horizontalAlign;
}
(this.listDir || this.auto) && this.list && (this.listHorizontalDirection = this.list._layout.horizontalDirection);
(this.progressReverse || this.auto) && this.progress && (this.tempProgressReverse = this.progress.reverse);
(this.richTextlAlign || this.auto) && this.richText && (this.tempRichHorizontalAlign = this.richText.horizontalAlign);
this.updateView();
};
t.prototype.onDestroy = function() {
a.i18nManager.unregister(this);
};
t.prototype.updateView = function() {
var e = a.i18nManager.getLanguage(), t = e == n.i18nLangEnum.AR;
this.L2R && (t = e == n.i18nLangEnum.EN);
if (t) {
this.scaleX && (this.node.scaleX = this.tempScaleX);
this.angle && (this.node.angle = this.tempAngle);
(this.posX || this.auto) && (this.node.x = this.tempPosX);
(this.anchorX || this.auto) && (this.node.anchorX = this.tempAnchorX);
(this.labelAlign || this.auto) && this.label && (this.label.horizontalAlign = this.labelHorizontalAlign);
(this.layoutDir || this.auto) && this.layout && (this.layout.horizontalDirection = this.layoutHorizontalDirection);
if ((this.widgetAlgin || this.auto) && this.widget) {
this.widget.isAlignLeft = this.widgetIsAlignLeft;
this.widget.isAlignRight = this.widgetIsAlignRight;
this.widget.left = this.widgetLeft;
this.widget.right = this.widgetRight;
}
if ((this.editBoxAlign || this.auto) && this.editBox) {
this.editBox.textLabel.horizontalAlign = this.editBox_horizontalAlign;
this.editBox.placeholderLabel.horizontalAlign = this.editBox_horizontalAlignPlaceholder;
}
(this.listDir || this.auto) && this.list && (this.list._layout.horizontalDirection = this.listHorizontalDirection);
(this.progressReverse || this.auto) && this.progress && (this.progress.reverse = this.tempProgressReverse);
(this.richTextlAlign || this.auto) && this.richText && (this.richText.horizontalAlign = this.tempRichHorizontalAlign);
} else {
this.scaleX && (this.node.scaleX = -this.tempScaleX);
this.angle && (this.node.angle = -this.tempAngle);
(this.posX || this.auto) && (this.node.x = -this.tempPosX);
(this.anchorX || this.auto) && (this.node.anchorX = 1 - this.tempAnchorX);
(this.labelAlign || this.auto) && this.label && (this.label.horizontalAlign = this.getFlipLabelAlign(this.labelHorizontalAlign));
(this.layoutDir || this.auto) && this.layout && (this.layout.horizontalDirection = this.getFlipLayoutDir(this.layoutHorizontalDirection));
if ((this.widgetAlgin || this.auto) && this.widget) {
this.widget.isAlignLeft = this.widgetIsAlignRight;
this.widget.isAlignRight = this.widgetIsAlignLeft;
this.widget.left = this.widgetRight;
this.widget.right = this.widgetLeft;
}
if ((this.editBoxAlign || this.auto) && this.editBox) {
this.editBox.textLabel.horizontalAlign = this.getFlipLabelAlign(this.editBox_horizontalAlign);
this.editBox.placeholderLabel.horizontalAlign = this.getFlipLabelAlign(this.editBox_horizontalAlignPlaceholder);
}
(this.listDir || this.auto) && this.list && (this.list._layout.horizontalDirection = this.getFlipLayoutDir(this.listHorizontalDirection));
(this.progressReverse || this.auto) && this.progress && (this.progress.reverse = !this.tempProgressReverse);
(this.richTextlAlign || this.auto) && this.richText && (this.richText.horizontalAlign = this.getFlipRichTextAlign(this.richText.horizontalAlign));
}
};
t.prototype.getFlipLabelAlign = function(e) {
return e == cc.Label.HorizontalAlign.LEFT ? cc.Label.HorizontalAlign.RIGHT : e == cc.Label.HorizontalAlign.RIGHT ? cc.Label.HorizontalAlign.LEFT : e;
};
t.prototype.getFlipRichTextAlign = function(e) {
return e == cc.macro.TextAlignment.LEFT ? cc.macro.TextAlignment.RIGHT : e == cc.macro.TextAlignment.RIGHT ? cc.macro.TextAlignment.LEFT : e;
};
t.prototype.getFlipLayoutDir = function(e) {
return e == cc.Layout.HorizontalDirection.LEFT_TO_RIGHT ? cc.Layout.HorizontalDirection.RIGHT_TO_LEFT : cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
};
__decorate([ s ], t.prototype, "scaleX", void 0);
__decorate([ s ], t.prototype, "angle", void 0);
__decorate([ s ], t.prototype, "auto", void 0);
__decorate([ s ], t.prototype, "L2R", void 0);
__decorate([ s({
visible: function() {
return !this.auto;
}
}) ], t.prototype, "posX", void 0);
__decorate([ s({
visible: function() {
return !this.auto;
}
}) ], t.prototype, "anchorX", void 0);
__decorate([ s({
visible: function() {
return !this.auto;
}
}) ], t.prototype, "labelAlign", void 0);
__decorate([ s({
visible: function() {
return !this.auto;
}
}) ], t.prototype, "layoutDir", void 0);
__decorate([ s({
visible: function() {
return !this.auto;
}
}) ], t.prototype, "widgetAlgin", void 0);
__decorate([ s({
visible: function() {
return !this.auto;
}
}) ], t.prototype, "editBoxAlign", void 0);
__decorate([ s({
visible: function() {
return !this.auto;
}
}) ], t.prototype, "listDir", void 0);
__decorate([ s({
visible: function() {
return !this.auto;
}
}) ], t.prototype, "progressReverse", void 0);
__decorate([ s({
visible: function() {
return !this.auto;
}
}) ], t.prototype, "richTextlAlign", void 0);
return __decorate([ r, c("多语言/i18nTransform") ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {
"./i18nConst": "i18nConst",
"./i18nManager": "i18nManager"
} ],
"msgpack.min": [ function(e, t, i) {
(function(n) {
"use strict";
cc._RF.push(t, "f576cRIh65PKbdy/zzZGZ+u", "msgpack.min");
!function(e) {
"object" == typeof i && "undefined" != typeof t ? t.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof n ? n : "undefined" != typeof self ? self : this).msgpack = e();
}(function() {
return function t(i, n, a) {
function o(s, c) {
if (!n[s]) {
if (!i[s]) {
var l = "function" == typeof e && e;
if (!c && l) return l(s, !0);
if (r) return r(s, !0);
var _ = new Error("Cannot find module '" + s + "'");
throw _.code = "MODULE_NOT_FOUND", _;
}
var u = n[s] = {
exports: {}
};
i[s][0].call(u.exports, function(e) {
return o(i[s][1][e] || e);
}, u, u.exports, t, i, n, a);
}
return n[s].exports;
}
for (var r = "function" == typeof e && e, s = 0; s < a.length; s++) o(a[s]);
return o;
}({
1: [ function(e, t, i) {
i.encode = e("./encode").encode, i.decode = e("./decode").decode, i.Encoder = e("./encoder").Encoder, 
i.Decoder = e("./decoder").Decoder, i.createCodec = e("./ext").createCodec, i.codec = e("./codec").codec;
}, {
"./codec": 10,
"./decode": 12,
"./decoder": 13,
"./encode": 15,
"./encoder": 16,
"./ext": 20
} ],
2: [ function(e, t) {
(function(e) {
function i(e) {
return e && e.isBuffer && e;
}
t.exports = i("undefined" != typeof e && e) || i(this.Buffer) || i("undefined" != typeof window && window.Buffer) || this.Buffer;
}).call(this, e("buffer").Buffer);
}, {
buffer: 29
} ],
3: [ function(e, t, i) {
i.copy = function(e, t, i, n) {
var a;
i || (i = 0), n || 0 === n || (n = this.length), t || (t = 0);
var o = n - i;
if (e === this && i < t && t < n) for (a = o - 1; a >= 0; a--) e[a + t] = this[a + i]; else for (a = 0; a < o; a++) e[a + t] = this[a + i];
return o;
}, i.toString = function(e, t, i) {
var n = this, a = 0 | t;
i || (i = n.length);
for (var o = "", r = 0; a < i; ) (r = n[a++]) < 128 ? o += String.fromCharCode(r) : (192 == (224 & r) ? r = (31 & r) << 6 | 63 & n[a++] : 224 == (240 & r) ? r = (15 & r) << 12 | (63 & n[a++]) << 6 | 63 & n[a++] : 240 == (248 & r) && (r = (7 & r) << 18 | (63 & n[a++]) << 12 | (63 & n[a++]) << 6 | 63 & n[a++]), 
r >= 65536 ? (r -= 65536, o += String.fromCharCode(55296 + (r >>> 10), 56320 + (1023 & r))) : o += String.fromCharCode(r));
return o;
}, i.write = function(e, t) {
for (var i = this, n = t || (t |= 0), a = e.length, o = 0, r = 0; r < a; ) (o = e.charCodeAt(r++)) < 128 ? i[n++] = o : o < 2048 ? (i[n++] = 192 | o >>> 6, 
i[n++] = 128 | 63 & o) : o < 55296 || o > 57343 ? (i[n++] = 224 | o >>> 12, i[n++] = 128 | o >>> 6 & 63, 
i[n++] = 128 | 63 & o) : (o = 65536 + (o - 55296 << 10 | e.charCodeAt(r++) - 56320), 
i[n++] = 240 | o >>> 18, i[n++] = 128 | o >>> 12 & 63, i[n++] = 128 | o >>> 6 & 63, 
i[n++] = 128 | 63 & o);
return n - t;
};
}, {} ],
4: [ function(e, t, i) {
function n(e) {
return new Array(e);
}
var a = e("./bufferish");
(i = t.exports = n(0)).alloc = n, i.concat = a.concat, i.from = function(e) {
if (!a.isBuffer(e) && a.isView(e)) e = a.Uint8Array.from(e); else if (a.isArrayBuffer(e)) e = new Uint8Array(e); else {
if ("string" == typeof e) return a.from.call(i, e);
if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
}
return Array.prototype.slice.call(e);
};
}, {
"./bufferish": 8
} ],
5: [ function(e, t, i) {
function n(e) {
return new o(e);
}
var a = e("./bufferish"), o = a.global;
(i = t.exports = a.hasBuffer ? n(0) : []).alloc = a.hasBuffer && o.alloc || n, i.concat = a.concat, 
i.from = function(e) {
if (!a.isBuffer(e) && a.isView(e)) e = a.Uint8Array.from(e); else if (a.isArrayBuffer(e)) e = new Uint8Array(e); else {
if ("string" == typeof e) return a.from.call(i, e);
if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
}
return o.from && 1 !== o.from.length ? o.from(e) : new o(e);
};
}, {
"./bufferish": 8
} ],
6: [ function(e, t, i) {
function n(e, t, i, n) {
var s = r.isBuffer(this), c = r.isBuffer(e);
if (s && c) return this.copy(e, t, i, n);
if (l || s || c || !r.isView(this) || !r.isView(e)) return o.copy.call(this, e, t, i, n);
var _ = i || null != n ? a.call(this, i, n) : this;
return e.set(_, t), _.length;
}
function a(e, t) {
var i = this.slice || !l && this.subarray;
if (i) return i.call(this, e, t);
var a = r.alloc.call(this, t - e);
return n.call(this, a, 0, e, t), a;
}
var o = e("./buffer-lite");
i.copy = n, i.slice = a, i.toString = function(e, t, i) {
return (!c && r.isBuffer(this) ? this.toString : o.toString).apply(this, arguments);
}, i.write = function(e) {
return function() {
return (this[e] || o[e]).apply(this, arguments);
};
}("write");
var r = e("./bufferish"), s = r.global, c = r.hasBuffer && "TYPED_ARRAY_SUPPORT" in s, l = c && !s.TYPED_ARRAY_SUPPORT;
}, {
"./buffer-lite": 3,
"./bufferish": 8
} ],
7: [ function(e, t, i) {
function n(e) {
return new Uint8Array(e);
}
var a = e("./bufferish");
(i = t.exports = a.hasArrayBuffer ? n(0) : []).alloc = n, i.concat = a.concat, i.from = function(e) {
if (a.isView(e)) {
var t = e.byteOffset, n = e.byteLength;
(e = e.buffer).byteLength !== n && (e.slice ? e = e.slice(t, t + n) : (e = new Uint8Array(e)).byteLength !== n && (e = Array.prototype.slice.call(e, t, t + n)));
} else {
if ("string" == typeof e) return a.from.call(i, e);
if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
}
return new Uint8Array(e);
};
}, {
"./bufferish": 8
} ],
8: [ function(e, t, i) {
function n(e) {
return o(this).alloc(e);
}
function a(e) {
var t = 3 * e.length, i = n.call(this, t), a = m.write.call(i, e);
return t !== a && (i = m.slice.call(i, 0, a)), i;
}
function o(e) {
return h(e) ? f : d(e) ? g : u(e) ? p : l ? f : _ ? g : p;
}
function r() {
return !1;
}
function s(e, t) {
return e = "[object " + e + "]", function(i) {
return null != i && {}.toString.call(t ? i[t] : i) === e;
};
}
var c = i.global = e("./buffer-global"), l = i.hasBuffer = c && !!c.isBuffer, _ = i.hasArrayBuffer = "undefined" != typeof ArrayBuffer, u = i.isArray = e("isarray");
i.isArrayBuffer = _ ? function(e) {
return e instanceof ArrayBuffer || E(e);
} : r;
var h = i.isBuffer = l ? c.isBuffer : r, d = i.isView = _ ? ArrayBuffer.isView || s("ArrayBuffer", "buffer") : r;
i.alloc = n, i.concat = function(e, t) {
t || (t = 0, Array.prototype.forEach.call(e, function(e) {
t += e.length;
}));
var a = this !== i && this || e[0], o = n.call(a, t), r = 0;
return Array.prototype.forEach.call(e, function(e) {
r += m.copy.call(e, o, r);
}), o;
}, i.from = function(e) {
return "string" == typeof e ? a.call(this, e) : o(this).from(e);
};
var p = i.Array = e("./bufferish-array"), f = i.Buffer = e("./bufferish-buffer"), g = i.Uint8Array = e("./bufferish-uint8array"), m = i.prototype = e("./bufferish-proto"), E = s("ArrayBuffer");
}, {
"./buffer-global": 2,
"./bufferish-array": 4,
"./bufferish-buffer": 5,
"./bufferish-proto": 6,
"./bufferish-uint8array": 7,
isarray: 34
} ],
9: [ function(e, t, i) {
function n(e) {
return this instanceof n ? (this.options = e, void this.init()) : new n(e);
}
function a(e, t) {
return e && t ? function() {
return e.apply(this, arguments), t.apply(this, arguments);
} : e || t;
}
function o(e) {
function t(e, t) {
return t(e);
}
return e = e.slice(), function(i) {
return e.reduce(t, i);
};
}
function r(e) {
return new n(e);
}
var s = e("isarray");
i.createCodec = r, i.install = function(e) {
for (var t in e) n.prototype[t] = a(n.prototype[t], e[t]);
}, i.filter = function(e) {
return s(e) ? o(e) : e;
};
var c = e("./bufferish");
n.prototype.init = function() {
var e = this.options;
return e && e.uint8array && (this.bufferish = c.Uint8Array), this;
}, i.preset = r({
preset: !0
});
}, {
"./bufferish": 8,
isarray: 34
} ],
10: [ function(e, t, i) {
e("./read-core"), e("./write-core"), i.codec = {
preset: e("./codec-base").preset
};
}, {
"./codec-base": 9,
"./read-core": 22,
"./write-core": 25
} ],
11: [ function(e, t, i) {
function n(e) {
if (!(this instanceof n)) return new n(e);
if (e && (this.options = e, e.codec)) {
var t = this.codec = e.codec;
t.bufferish && (this.bufferish = t.bufferish);
}
}
i.DecodeBuffer = n;
var a = e("./read-core").preset;
e("./flex-buffer").FlexDecoder.mixin(n.prototype), n.prototype.codec = a, n.prototype.fetch = function() {
return this.codec.decode(this);
};
}, {
"./flex-buffer": 21,
"./read-core": 22
} ],
12: [ function(e, t, i) {
i.decode = function(e, t) {
var i = new n(t);
return i.write(e), i.read();
};
var n = e("./decode-buffer").DecodeBuffer;
}, {
"./decode-buffer": 11
} ],
13: [ function(e, t, i) {
function n(e) {
return this instanceof n ? void o.call(this, e) : new n(e);
}
i.Decoder = n;
var a = e("event-lite"), o = e("./decode-buffer").DecodeBuffer;
n.prototype = new o(), a.mixin(n.prototype), n.prototype.decode = function(e) {
arguments.length && this.write(e), this.flush();
}, n.prototype.push = function(e) {
this.emit("data", e);
}, n.prototype.end = function(e) {
this.decode(e), this.emit("end");
};
}, {
"./decode-buffer": 11,
"event-lite": 31
} ],
14: [ function(e, t, i) {
function n(e) {
if (!(this instanceof n)) return new n(e);
if (e && (this.options = e, e.codec)) {
var t = this.codec = e.codec;
t.bufferish && (this.bufferish = t.bufferish);
}
}
i.EncodeBuffer = n;
var a = e("./write-core").preset;
e("./flex-buffer").FlexEncoder.mixin(n.prototype), n.prototype.codec = a, n.prototype.write = function(e) {
this.codec.encode(this, e);
};
}, {
"./flex-buffer": 21,
"./write-core": 25
} ],
15: [ function(e, t, i) {
i.encode = function(e, t) {
var i = new n(t);
return i.write(e), i.read();
};
var n = e("./encode-buffer").EncodeBuffer;
}, {
"./encode-buffer": 14
} ],
16: [ function(e, t, i) {
function n(e) {
return this instanceof n ? void o.call(this, e) : new n(e);
}
i.Encoder = n;
var a = e("event-lite"), o = e("./encode-buffer").EncodeBuffer;
n.prototype = new o(), a.mixin(n.prototype), n.prototype.encode = function(e) {
this.write(e), this.emit("data", this.read());
}, n.prototype.end = function(e) {
arguments.length && this.encode(e), this.flush(), this.emit("end");
};
}, {
"./encode-buffer": 14,
"event-lite": 31
} ],
17: [ function(e, t, i) {
i.ExtBuffer = function e(t, i) {
return this instanceof e ? (this.buffer = n.from(t), void (this.type = i)) : new e(t, i);
};
var n = e("./bufferish");
}, {
"./bufferish": 8
} ],
18: [ function(e, t, i) {
function n(t) {
return s || (s = e("./encode").encode), s(t);
}
function a(e) {
return e.valueOf();
}
function o(e) {
(e = RegExp.prototype.toString.call(e).split("/")).shift();
var t = [ e.pop() ];
return t.unshift(e.join("/")), t;
}
function r(e) {
var t = {};
for (var i in u) t[i] = e[i];
return t;
}
i.setExtPackers = function(e) {
e.addExtPacker(14, Error, [ r, n ]), e.addExtPacker(1, EvalError, [ r, n ]), e.addExtPacker(2, RangeError, [ r, n ]), 
e.addExtPacker(3, ReferenceError, [ r, n ]), e.addExtPacker(4, SyntaxError, [ r, n ]), 
e.addExtPacker(5, TypeError, [ r, n ]), e.addExtPacker(6, URIError, [ r, n ]), e.addExtPacker(10, RegExp, [ o, n ]), 
e.addExtPacker(11, Boolean, [ a, n ]), e.addExtPacker(12, String, [ a, n ]), e.addExtPacker(13, Date, [ Number, n ]), 
e.addExtPacker(15, Number, [ a, n ]), "undefined" != typeof Uint8Array && (e.addExtPacker(17, Int8Array, _), 
e.addExtPacker(18, Uint8Array, _), e.addExtPacker(19, Int16Array, _), e.addExtPacker(20, Uint16Array, _), 
e.addExtPacker(21, Int32Array, _), e.addExtPacker(22, Uint32Array, _), e.addExtPacker(23, Float32Array, _), 
"undefined" != typeof Float64Array && e.addExtPacker(24, Float64Array, _), "undefined" != typeof Uint8ClampedArray && e.addExtPacker(25, Uint8ClampedArray, _), 
e.addExtPacker(26, ArrayBuffer, _), e.addExtPacker(29, DataView, _)), c.hasBuffer && e.addExtPacker(27, l, c.from);
};
var s, c = e("./bufferish"), l = c.global, _ = c.Uint8Array.from, u = {
name: 1,
message: 1,
stack: 1,
columnNumber: 1,
fileName: 1,
lineNumber: 1
};
}, {
"./bufferish": 8,
"./encode": 15
} ],
19: [ function(e, t, i) {
function n(t) {
return c || (c = e("./decode").decode), c(t);
}
function a(e) {
return RegExp.apply(null, e);
}
function o(e) {
return function(t) {
var i = new e();
for (var n in u) i[n] = t[n];
return i;
};
}
function r(e) {
return function(t) {
return new e(t);
};
}
function s(e) {
return new Uint8Array(e).buffer;
}
i.setExtUnpackers = function(e) {
e.addExtUnpacker(14, [ n, o(Error) ]), e.addExtUnpacker(1, [ n, o(EvalError) ]), 
e.addExtUnpacker(2, [ n, o(RangeError) ]), e.addExtUnpacker(3, [ n, o(ReferenceError) ]), 
e.addExtUnpacker(4, [ n, o(SyntaxError) ]), e.addExtUnpacker(5, [ n, o(TypeError) ]), 
e.addExtUnpacker(6, [ n, o(URIError) ]), e.addExtUnpacker(10, [ n, a ]), e.addExtUnpacker(11, [ n, r(Boolean) ]), 
e.addExtUnpacker(12, [ n, r(String) ]), e.addExtUnpacker(13, [ n, r(Date) ]), e.addExtUnpacker(15, [ n, r(Number) ]), 
"undefined" != typeof Uint8Array && (e.addExtUnpacker(17, r(Int8Array)), e.addExtUnpacker(18, r(Uint8Array)), 
e.addExtUnpacker(19, [ s, r(Int16Array) ]), e.addExtUnpacker(20, [ s, r(Uint16Array) ]), 
e.addExtUnpacker(21, [ s, r(Int32Array) ]), e.addExtUnpacker(22, [ s, r(Uint32Array) ]), 
e.addExtUnpacker(23, [ s, r(Float32Array) ]), "undefined" != typeof Float64Array && e.addExtUnpacker(24, [ s, r(Float64Array) ]), 
"undefined" != typeof Uint8ClampedArray && e.addExtUnpacker(25, r(Uint8ClampedArray)), 
e.addExtUnpacker(26, s), e.addExtUnpacker(29, [ s, r(DataView) ])), l.hasBuffer && e.addExtUnpacker(27, r(_));
};
var c, l = e("./bufferish"), _ = l.global, u = {
name: 1,
message: 1,
stack: 1,
columnNumber: 1,
fileName: 1,
lineNumber: 1
};
}, {
"./bufferish": 8,
"./decode": 12
} ],
20: [ function(e, t, i) {
e("./read-core"), e("./write-core"), i.createCodec = e("./codec-base").createCodec;
}, {
"./codec-base": 9,
"./read-core": 22,
"./write-core": 25
} ],
21: [ function(e, t, i) {
function n() {
if (!(this instanceof n)) return new n();
}
function a() {
if (!(this instanceof a)) return new a();
}
function o() {
return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch();
}
function r(e) {
(this.buffers || (this.buffers = [])).push(e);
}
function s(e) {
return function(t) {
for (var i in e) t[i] = e[i];
return t;
};
}
i.FlexDecoder = n, i.FlexEncoder = a;
var c = e("./bufferish"), l = "BUFFER_SHORTAGE";
n.mixin = s({
bufferish: c,
write: function(e) {
var t = this.offset ? c.prototype.slice.call(this.buffer, this.offset) : this.buffer;
this.buffer = t ? e ? this.bufferish.concat([ t, e ]) : t : e, this.offset = 0;
},
fetch: function() {
throw new Error("method not implemented: fetch()");
},
flush: function() {
for (;this.offset < this.buffer.length; ) {
var e, t = this.offset;
try {
e = this.fetch();
} catch (e) {
if (e && e.message != l) throw e;
this.offset = t;
break;
}
this.push(e);
}
},
push: r,
pull: function() {
return (this.buffers || (this.buffers = [])).shift();
},
read: o,
reserve: function(e) {
var t = this.offset, i = t + e;
if (i > this.buffer.length) throw new Error(l);
return this.offset = i, t;
},
offset: 0
}), n.mixin(n.prototype), a.mixin = s({
bufferish: c,
write: function() {
throw new Error("method not implemented: write()");
},
fetch: function() {
var e = this.start;
if (e < this.offset) {
var t = this.start = this.offset;
return c.prototype.slice.call(this.buffer, e, t);
}
},
flush: function() {
for (;this.start < this.offset; ) {
var e = this.fetch();
e && this.push(e);
}
},
push: r,
pull: function() {
var e = this.buffers || (this.buffers = []), t = e.length > 1 ? this.bufferish.concat(e) : e[0];
return e.length = 0, t;
},
read: o,
reserve: function(e) {
var t = 0 | e;
if (this.buffer) {
var i = this.buffer.length, n = 0 | this.offset, a = n + t;
if (a < i) return this.offset = a, n;
this.flush(), e = Math.max(e, Math.min(2 * i, this.maxBufferSize));
}
return e = Math.max(e, this.minBufferSize), this.buffer = this.bufferish.alloc(e), 
this.start = 0, this.offset = t, 0;
},
send: function(e) {
var t = e.length;
if (t > this.minBufferSize) this.flush(), this.push(e); else {
var i = this.reserve(t);
c.prototype.copy.call(e, this.buffer, i);
}
},
maxBufferSize: 65536,
minBufferSize: 2048,
offset: 0,
start: 0
}), a.mixin(a.prototype);
}, {
"./bufferish": 8
} ],
22: [ function(e, t, i) {
function n(e) {
var t = c.getReadToken(e);
return function(e) {
var i = s(e), n = t[i];
if (!n) throw new Error("Invalid type: " + (i ? "0x" + i.toString(16) : i));
return n(e);
};
}
function a() {
var e = this.options;
return this.decode = n(e), e && e.preset && r.setExtUnpackers(this), this;
}
var o = e("./ext-buffer").ExtBuffer, r = e("./ext-unpacker"), s = e("./read-format").readUint8, c = e("./read-token"), l = e("./codec-base");
l.install({
addExtUnpacker: function(e, t) {
(this.extUnpackers || (this.extUnpackers = []))[e] = l.filter(t);
},
getExtUnpacker: function(e) {
return (this.extUnpackers || (this.extUnpackers = []))[e] || function(t) {
return new o(t, e);
};
},
init: a
}), i.preset = a.call(l.preset);
}, {
"./codec-base": 9,
"./ext-buffer": 17,
"./ext-unpacker": 19,
"./read-format": 23,
"./read-token": 24
} ],
23: [ function(e, t, i) {
function n(e, t) {
var i, n = {}, a = new Array(t), o = new Array(t), r = e.codec.decode;
for (i = 0; i < t; i++) a[i] = r(e), o[i] = r(e);
for (i = 0; i < t; i++) n[a[i]] = o[i];
return n;
}
function a(e, t) {
var i, n = new Map(), a = new Array(t), o = new Array(t), r = e.codec.decode;
for (i = 0; i < t; i++) a[i] = r(e), o[i] = r(e);
for (i = 0; i < t; i++) n.set(a[i], o[i]);
return n;
}
function o(e, t) {
for (var i = new Array(t), n = e.codec.decode, a = 0; a < t; a++) i[a] = n(e);
return i;
}
function r(e, t) {
var i = e.reserve(t), n = i + t;
return y.toString.call(e.buffer, "utf-8", i, n);
}
function s(e, t) {
var i = e.reserve(t), n = i + t, a = y.slice.call(e.buffer, i, n);
return O.from(a);
}
function c(e, t) {
var i = e.reserve(t), n = i + t, a = y.slice.call(e.buffer, i, n);
return O.Uint8Array.from(a).buffer;
}
function l(e, t) {
var i = e.reserve(t + 1), n = e.buffer[i++], a = i + t, o = e.codec.getExtUnpacker(n);
if (!o) throw new Error("Invalid ext type: " + (n ? "0x" + n.toString(16) : n));
return o(y.slice.call(e.buffer, i, a));
}
function _(e) {
var t = e.reserve(1);
return e.buffer[t];
}
function u(e) {
var t = e.reserve(1), i = e.buffer[t];
return 128 & i ? i - 256 : i;
}
function h(e) {
var t = e.reserve(2), i = e.buffer;
return i[t++] << 8 | i[t];
}
function d(e) {
var t = e.reserve(2), i = e.buffer, n = i[t++] << 8 | i[t];
return 32768 & n ? n - 65536 : n;
}
function p(e) {
var t = e.reserve(4), i = e.buffer;
return 16777216 * i[t++] + (i[t++] << 16) + (i[t++] << 8) + i[t];
}
function f(e) {
var t = e.reserve(4), i = e.buffer;
return i[t++] << 24 | i[t++] << 16 | i[t++] << 8 | i[t];
}
function g(e, t) {
return function(i) {
var n = i.reserve(e);
return t.call(i.buffer, n, N);
};
}
function m(e) {
return new I(this, e).toNumber();
}
function E(e) {
return new b(this, e).toNumber();
}
function v(e) {
return new I(this, e);
}
function S(e) {
return new b(this, e);
}
function L(e) {
return A.read(this, e, !1, 23, 4);
}
function T(e) {
return A.read(this, e, !1, 52, 8);
}
var A = e("ieee754"), R = e("int64-buffer"), I = R.Uint64BE, b = R.Int64BE;
i.getReadFormat = function(e) {
var t = O.hasArrayBuffer && e && e.binarraybuffer, i = e && e.int64;
return {
map: C && e && e.usemap ? a : n,
array: o,
str: r,
bin: t ? c : s,
ext: l,
uint8: _,
uint16: h,
uint32: p,
uint64: g(8, i ? v : m),
int8: u,
int16: d,
int32: f,
int64: g(8, i ? S : E),
float32: g(4, L),
float64: g(8, T)
};
}, i.readUint8 = _;
var O = e("./bufferish"), y = e("./bufferish-proto"), C = "undefined" != typeof Map, N = !0;
}, {
"./bufferish": 8,
"./bufferish-proto": 6,
ieee754: 32,
"int64-buffer": 33
} ],
24: [ function(e, t, i) {
function n(e) {
var t, i = new Array(256);
for (t = 0; t <= 127; t++) i[t] = o(t);
for (t = 128; t <= 143; t++) i[t] = s(t - 128, e.map);
for (t = 144; t <= 159; t++) i[t] = s(t - 144, e.array);
for (t = 160; t <= 191; t++) i[t] = s(t - 160, e.str);
for (i[192] = o(null), i[193] = null, i[194] = o(!1), i[195] = o(!0), i[196] = r(e.uint8, e.bin), 
i[197] = r(e.uint16, e.bin), i[198] = r(e.uint32, e.bin), i[199] = r(e.uint8, e.ext), 
i[200] = r(e.uint16, e.ext), i[201] = r(e.uint32, e.ext), i[202] = e.float32, i[203] = e.float64, 
i[204] = e.uint8, i[205] = e.uint16, i[206] = e.uint32, i[207] = e.uint64, i[208] = e.int8, 
i[209] = e.int16, i[210] = e.int32, i[211] = e.int64, i[212] = s(1, e.ext), i[213] = s(2, e.ext), 
i[214] = s(4, e.ext), i[215] = s(8, e.ext), i[216] = s(16, e.ext), i[217] = r(e.uint8, e.str), 
i[218] = r(e.uint16, e.str), i[219] = r(e.uint32, e.str), i[220] = r(e.uint16, e.array), 
i[221] = r(e.uint32, e.array), i[222] = r(e.uint16, e.map), i[223] = r(e.uint32, e.map), 
t = 224; t <= 255; t++) i[t] = o(t - 256);
return i;
}
function a(e) {
var t, i = n(e).slice();
for (i[217] = i[196], i[218] = i[197], i[219] = i[198], t = 160; t <= 191; t++) i[t] = s(t - 160, e.bin);
return i;
}
function o(e) {
return function() {
return e;
};
}
function r(e, t) {
return function(i) {
var n = e(i);
return t(i, n);
};
}
function s(e, t) {
return function(i) {
return t(i, e);
};
}
var c = e("./read-format");
i.getReadToken = function(e) {
var t = c.getReadFormat(e);
return e && e.useraw ? a(t) : n(t);
};
}, {
"./read-format": 23
} ],
25: [ function(e, t, i) {
function n(e) {
var t = s.getWriteType(e);
return function(e, i) {
var n = t[typeof i];
if (!n) throw new Error('Unsupported type "' + typeof i + '": ' + i);
n(e, i);
};
}
function a() {
var e = this.options;
return this.encode = n(e), e && e.preset && r.setExtPackers(this), this;
}
var o = e("./ext-buffer").ExtBuffer, r = e("./ext-packer"), s = e("./write-type"), c = e("./codec-base");
c.install({
addExtPacker: function(e, t, i) {
function n(t) {
return i && (t = i(t)), new o(t, e);
}
i = c.filter(i);
var a = t.name;
a && "Object" !== a ? (this.extPackers || (this.extPackers = {}))[a] = n : (this.extEncoderList || (this.extEncoderList = [])).unshift([ t, n ]);
},
getExtPacker: function(e) {
var t = this.extPackers || (this.extPackers = {}), i = e.constructor, n = i && i.name && t[i.name];
if (n) return n;
for (var a = this.extEncoderList || (this.extEncoderList = []), o = a.length, r = 0; r < o; r++) {
var s = a[r];
if (i === s[0]) return s[1];
}
},
init: a
}), i.preset = a.call(c.preset);
}, {
"./codec-base": 9,
"./ext-buffer": 17,
"./ext-packer": 18,
"./write-type": 27
} ],
26: [ function(e, t, i) {
function n() {
var e = a();
return e[202] = l(202, 4, h), e[203] = l(203, 8, d), e;
}
function a() {
var e = E.slice();
return e[196] = r(196), e[197] = s(197), e[198] = c(198), e[199] = r(199), e[200] = s(200), 
e[201] = c(201), e[202] = l(202, 4, T.writeFloatBE || h, !0), e[203] = l(203, 8, T.writeDoubleBE || d, !0), 
e[204] = r(204), e[205] = s(205), e[206] = c(206), e[207] = l(207, 8, _), e[208] = r(208), 
e[209] = s(209), e[210] = c(210), e[211] = l(211, 8, u), e[217] = r(217), e[218] = s(218), 
e[219] = c(219), e[220] = s(220), e[221] = c(221), e[222] = s(222), e[223] = c(223), 
e;
}
function o() {
var e = E.slice();
return e[196] = l(196, 1, S.prototype.writeUInt8), e[197] = l(197, 2, S.prototype.writeUInt16BE), 
e[198] = l(198, 4, S.prototype.writeUInt32BE), e[199] = l(199, 1, S.prototype.writeUInt8), 
e[200] = l(200, 2, S.prototype.writeUInt16BE), e[201] = l(201, 4, S.prototype.writeUInt32BE), 
e[202] = l(202, 4, S.prototype.writeFloatBE), e[203] = l(203, 8, S.prototype.writeDoubleBE), 
e[204] = l(204, 1, S.prototype.writeUInt8), e[205] = l(205, 2, S.prototype.writeUInt16BE), 
e[206] = l(206, 4, S.prototype.writeUInt32BE), e[207] = l(207, 8, _), e[208] = l(208, 1, S.prototype.writeInt8), 
e[209] = l(209, 2, S.prototype.writeInt16BE), e[210] = l(210, 4, S.prototype.writeInt32BE), 
e[211] = l(211, 8, u), e[217] = l(217, 1, S.prototype.writeUInt8), e[218] = l(218, 2, S.prototype.writeUInt16BE), 
e[219] = l(219, 4, S.prototype.writeUInt32BE), e[220] = l(220, 2, S.prototype.writeUInt16BE), 
e[221] = l(221, 4, S.prototype.writeUInt32BE), e[222] = l(222, 2, S.prototype.writeUInt16BE), 
e[223] = l(223, 4, S.prototype.writeUInt32BE), e;
}
function r(e) {
return function(t, i) {
var n = t.reserve(2), a = t.buffer;
a[n++] = e, a[n] = i;
};
}
function s(e) {
return function(t, i) {
var n = t.reserve(3), a = t.buffer;
a[n++] = e, a[n++] = i >>> 8, a[n] = i;
};
}
function c(e) {
return function(t, i) {
var n = t.reserve(5), a = t.buffer;
a[n++] = e, a[n++] = i >>> 24, a[n++] = i >>> 16, a[n++] = i >>> 8, a[n] = i;
};
}
function l(e, t, i, n) {
return function(a, o) {
var r = a.reserve(t + 1);
a.buffer[r++] = e, i.call(a.buffer, o, r, n);
};
}
function _(e, t) {
new g(this, t, e);
}
function u(e, t) {
new m(this, t, e);
}
function h(e, t) {
p.write(this, e, t, !1, 23, 4);
}
function d(e, t) {
p.write(this, e, t, !1, 52, 8);
}
var p = e("ieee754"), f = e("int64-buffer"), g = f.Uint64BE, m = f.Int64BE, E = e("./write-uint8").uint8, v = e("./bufferish"), S = v.global, L = v.hasBuffer && "TYPED_ARRAY_SUPPORT" in S && !S.TYPED_ARRAY_SUPPORT, T = v.hasBuffer && S.prototype || {};
i.getWriteToken = function(e) {
return e && e.uint8array ? n() : L || v.hasBuffer && e && e.safe ? o() : a();
};
}, {
"./bufferish": 8,
"./write-uint8": 28,
ieee754: 32,
"int64-buffer": 33
} ],
27: [ function(e, t, i) {
var n = e("isarray"), a = e("int64-buffer"), o = a.Uint64BE, r = a.Int64BE, s = e("./bufferish"), c = e("./bufferish-proto"), l = e("./write-token"), _ = e("./write-uint8").uint8, u = e("./ext-buffer").ExtBuffer, h = "undefined" != typeof Uint8Array, d = "undefined" != typeof Map, p = [];
p[1] = 212, p[2] = 213, p[4] = 214, p[8] = 215, p[16] = 216, i.getWriteType = function(e) {
function t(e, t) {
L[207](e, t.toArray());
}
function i(e, t) {
L[211](e, t.toArray());
}
function a(e, a) {
if (null === a) return f(e, a);
if (R(a)) return I(e, a);
if (n(a)) return g(e, a);
if (o.isUint64BE(a)) return t(e, a);
if (r.isInt64BE(a)) return i(e, a);
var s = e.codec.getExtPacker(a);
return s && (a = s(a)), a instanceof u ? E(e, a) : void b(e, a);
}
function f(e, t) {
L[192](e, t);
}
function g(e, t) {
var i = t.length;
L[i < 16 ? 144 + i : i <= 65535 ? 220 : 221](e, i);
for (var n = e.codec.encode, a = 0; a < i; a++) n(e, t[a]);
}
function m(e, t) {
var i = t.length;
L[i < 255 ? 196 : i <= 65535 ? 197 : 198](e, i), e.send(t);
}
function E(e, t) {
var i = t.buffer, n = i.length, a = p[n] || (n < 255 ? 199 : n <= 65535 ? 200 : 201);
L[a](e, n), _[t.type](e), e.send(i);
}
function v(e, t) {
var i = Object.keys(t), n = i.length;
L[n < 16 ? 128 + n : n <= 65535 ? 222 : 223](e, n);
var a = e.codec.encode;
i.forEach(function(i) {
a(e, i), a(e, t[i]);
});
}
function S(e, t) {
var i = t.length;
L[i < 32 ? 160 + i : i <= 65535 ? 218 : 219](e, i), e.send(t);
}
var L = l.getWriteToken(e), T = e && e.useraw, A = h && e && e.binarraybuffer, R = A ? s.isArrayBuffer : s.isBuffer, I = A ? function(e, t) {
m(e, new Uint8Array(t));
} : m, b = d && e && e.usemap ? function(e, t) {
if (!(t instanceof Map)) return v(e, t);
var i = t.size;
L[i < 16 ? 128 + i : i <= 65535 ? 222 : 223](e, i);
var n = e.codec.encode;
t.forEach(function(t, i) {
n(e, i), n(e, t);
});
} : v;
return {
boolean: function(e, t) {
L[t ? 195 : 194](e, t);
},
function: f,
number: function(e, t) {
var i = 0 | t;
return t !== i ? void L[203](e, t) : void L[-32 <= i && i <= 127 ? 255 & i : 0 <= i ? i <= 255 ? 204 : i <= 65535 ? 205 : 206 : -128 <= i ? 208 : -32768 <= i ? 209 : 210](e, i);
},
object: T ? function(e, t) {
return R(t) ? S(e, t) : void a(e, t);
} : a,
string: function(e) {
return function(t, i) {
var n = i.length, a = 5 + 3 * n;
t.offset = t.reserve(a);
var o = t.buffer, r = e(n), s = t.offset + r;
n = c.write.call(o, i, s);
var l = e(n);
if (r !== l) {
var _ = s + l - r, u = s + n;
c.copy.call(o, o, _, s, u);
}
L[1 === l ? 160 + n : l <= 3 ? 215 + l : 219](t, n), t.offset += n;
};
}(T ? function(e) {
return e < 32 ? 1 : e <= 65535 ? 3 : 5;
} : function(e) {
return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
}),
symbol: f,
undefined: f
};
};
}, {
"./bufferish": 8,
"./bufferish-proto": 6,
"./ext-buffer": 17,
"./write-token": 26,
"./write-uint8": 28,
"int64-buffer": 33,
isarray: 34
} ],
28: [ function(e, t, i) {
function n(e) {
return function(t) {
var i = t.reserve(1);
t.buffer[i] = e;
};
}
for (var a = i.uint8 = new Array(256), o = 0; o <= 255; o++) a[o] = n(o);
}, {} ],
29: [ function(e, t, i) {
(function(t) {
function n() {
return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function a(e, t) {
if (n() < t) throw new RangeError("Invalid typed array length");
return o.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = o.prototype : (null === e && (e = new o(t)), 
e.length = t), e;
}
function o(e, t, i) {
if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(e, t, i);
if ("number" == typeof e) {
if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
return l(this, e);
}
return r(this, e, t, i);
}
function r(e, t, i, n) {
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? h(e, t, i, n) : "string" == typeof t ? _(e, t, i) : d(e, t);
}
function s(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function c(e, t, i, n) {
return s(t), t <= 0 ? a(e, t) : void 0 !== i ? "string" == typeof n ? a(e, t).fill(i, n) : a(e, t).fill(i) : a(e, t);
}
function l(e, t) {
if (s(t), e = a(e, t < 0 ? 0 : 0 | p(t)), !o.TYPED_ARRAY_SUPPORT) for (var i = 0; i < t; ++i) e[i] = 0;
return e;
}
function _(e, t, i) {
if ("string" == typeof i && "" !== i || (i = "utf8"), !o.isEncoding(i)) throw new TypeError('"encoding" must be a valid string encoding');
var n = 0 | f(t, i), r = (e = a(e, n)).write(t, i);
return r !== n && (e = e.slice(0, r)), e;
}
function u(e, t) {
var i = t.length < 0 ? 0 : 0 | p(t.length);
e = a(e, i);
for (var n = 0; n < i; n += 1) e[n] = 255 & t[n];
return e;
}
function h(e, t, i, n) {
if (t.byteLength, i < 0 || t.byteLength < i) throw new RangeError("'offset' is out of bounds");
if (t.byteLength < i + (n || 0)) throw new RangeError("'length' is out of bounds");
return t = void 0 === i && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, i) : new Uint8Array(t, i, n), 
o.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = o.prototype : e = u(e, t), e;
}
function d(e, t) {
if (o.isBuffer(t)) {
var i = 0 | p(t.length);
return 0 === (e = a(e, i)).length ? e : (t.copy(e, 0, 0, i), e);
}
if (t) {
if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || j(t.length) ? a(e, 0) : u(e, t);
if ("Buffer" === t.type && q(t.data)) return u(e, t.data);
}
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function p(e) {
if (e >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
return 0 | e;
}
function f(e, t) {
if (o.isBuffer(e)) return e.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
"string" != typeof e && (e = "" + e);
var i = e.length;
if (0 === i) return 0;
for (var n = !1; ;) switch (t) {
case "ascii":
case "latin1":
case "binary":
return i;

case "utf8":
case "utf-8":
case void 0:
return z(e).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * i;

case "hex":
return i >>> 1;

case "base64":
return K(e).length;

default:
if (n) return z(e).length;
t = ("" + t).toLowerCase(), n = !0;
}
}
function g(e, t, i) {
var n = !1;
if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
if ((i >>>= 0) <= (t >>>= 0)) return "";
for (e || (e = "utf8"); ;) switch (e) {
case "hex":
return P(this, t, i);

case "utf8":
case "utf-8":
return O(this, t, i);

case "ascii":
return C(this, t, i);

case "latin1":
case "binary":
return N(this, t, i);

case "base64":
return b(this, t, i);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return w(this, t, i);

default:
if (n) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase(), n = !0;
}
}
function m(e, t, i) {
var n = e[t];
e[t] = e[i], e[i] = n;
}
function E(e, t, i, n, a) {
if (0 === e.length) return -1;
if ("string" == typeof i ? (n = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), 
i = +i, isNaN(i) && (i = a ? 0 : e.length - 1), i < 0 && (i = e.length + i), i >= e.length) {
if (a) return -1;
i = e.length - 1;
} else if (i < 0) {
if (!a) return -1;
i = 0;
}
if ("string" == typeof t && (t = o.from(t, n)), o.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, i, n, a);
if ("number" == typeof t) return t &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : v(e, [ t ], i, n, a);
throw new TypeError("val must be string, number or Buffer");
}
function v(e, t, i, n, a) {
function o(e, t) {
return 1 === s ? e[t] : e.readUInt16BE(t * s);
}
var r, s = 1, c = e.length, l = t.length;
if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
if (e.length < 2 || t.length < 2) return -1;
s = 2, c /= 2, l /= 2, i /= 2;
}
if (a) {
var _ = -1;
for (r = i; r < c; r++) if (o(e, r) === o(t, -1 === _ ? 0 : r - _)) {
if (-1 === _ && (_ = r), r - _ + 1 === l) return _ * s;
} else -1 !== _ && (r -= r - _), _ = -1;
} else for (i + l > c && (i = c - l), r = i; r >= 0; r--) {
for (var u = !0, h = 0; h < l; h++) if (o(e, r + h) !== o(t, h)) {
u = !1;
break;
}
if (u) return r;
}
return -1;
}
function S(e, t, i, n) {
i = Number(i) || 0;
var a = e.length - i;
n ? (n = Number(n)) > a && (n = a) : n = a;
var o = t.length;
if (o % 2 != 0) throw new TypeError("Invalid hex string");
n > o / 2 && (n = o / 2);
for (var r = 0; r < n; ++r) {
var s = parseInt(t.substr(2 * r, 2), 16);
if (isNaN(s)) return r;
e[i + r] = s;
}
return r;
}
function L(e, t, i, n) {
return W(z(t, e.length - i), e, i, n);
}
function T(e, t, i, n) {
return W(Q(t), e, i, n);
}
function A(e, t, i, n) {
return T(e, t, i, n);
}
function R(e, t, i, n) {
return W(K(t), e, i, n);
}
function I(e, t, i, n) {
return W(Y(t, e.length - i), e, i, n);
}
function b(e, t, i) {
return 0 === t && i === e.length ? X.fromByteArray(e) : X.fromByteArray(e.slice(t, i));
}
function O(e, t, i) {
i = Math.min(e.length, i);
for (var n = [], a = t; a < i; ) {
var o = e[a], r = null, s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
if (a + s <= i) {
var c, l, _, u;
switch (s) {
case 1:
o < 128 && (r = o);
break;

case 2:
128 == (192 & (c = e[a + 1])) && (u = (31 & o) << 6 | 63 & c) > 127 && (r = u);
break;

case 3:
c = e[a + 1], l = e[a + 2], 128 == (192 & c) && 128 == (192 & l) && (u = (15 & o) << 12 | (63 & c) << 6 | 63 & l) > 2047 && (u < 55296 || u > 57343) && (r = u);
break;

case 4:
c = e[a + 1], l = e[a + 2], _ = e[a + 3], 128 == (192 & c) && 128 == (192 & l) && 128 == (192 & _) && (u = (15 & o) << 18 | (63 & c) << 12 | (63 & l) << 6 | 63 & _) > 65535 && u < 1114112 && (r = u);
}
}
null === r ? (r = 65533, s = 1) : r > 65535 && (r -= 65536, n.push(r >>> 10 & 1023 | 55296), 
r = 56320 | 1023 & r), n.push(r), a += s;
}
return y(n);
}
function y(e) {
var t = e.length;
if (t <= Z) return String.fromCharCode.apply(String, e);
for (var i = "", n = 0; n < t; ) i += String.fromCharCode.apply(String, e.slice(n, n += Z));
return i;
}
function C(e, t, i) {
var n = "";
i = Math.min(e.length, i);
for (var a = t; a < i; ++a) n += String.fromCharCode(127 & e[a]);
return n;
}
function N(e, t, i) {
var n = "";
i = Math.min(e.length, i);
for (var a = t; a < i; ++a) n += String.fromCharCode(e[a]);
return n;
}
function P(e, t, i) {
var n = e.length;
(!t || t < 0) && (t = 0), (!i || i < 0 || i > n) && (i = n);
for (var a = "", o = t; o < i; ++o) a += V(e[o]);
return a;
}
function w(e, t, i) {
for (var n = e.slice(t, i), a = "", o = 0; o < n.length; o += 2) a += String.fromCharCode(n[o] + 256 * n[o + 1]);
return a;
}
function M(e, t, i) {
if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
if (e + t > i) throw new RangeError("Trying to access beyond buffer length");
}
function G(e, t, i, n, a, r) {
if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (t > a || t < r) throw new RangeError('"value" argument is out of bounds');
if (i + n > e.length) throw new RangeError("Index out of range");
}
function D(e, t, i, n) {
t < 0 && (t = 65535 + t + 1);
for (var a = 0, o = Math.min(e.length - i, 2); a < o; ++a) e[i + a] = (t & 255 << 8 * (n ? a : 1 - a)) >>> 8 * (n ? a : 1 - a);
}
function U(e, t, i, n) {
t < 0 && (t = 4294967295 + t + 1);
for (var a = 0, o = Math.min(e.length - i, 4); a < o; ++a) e[i + a] = t >>> 8 * (n ? a : 3 - a) & 255;
}
function H(e, t, i, n) {
if (i + n > e.length) throw new RangeError("Index out of range");
if (i < 0) throw new RangeError("Index out of range");
}
function F(e, t, i, n, a) {
return a || H(e, 0, i, 4), J.write(e, t, i, n, 23, 4), i + 4;
}
function B(e, t, i, n, a) {
return a || H(e, 0, i, 8), J.write(e, t, i, n, 52, 8), i + 8;
}
function k(e) {
if ((e = x(e).replace($, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function x(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function V(e) {
return e < 16 ? "0" + e.toString(16) : e.toString(16);
}
function z(e, t) {
t = t || 1 / 0;
for (var i, n = e.length, a = null, o = [], r = 0; r < n; ++r) {
if ((i = e.charCodeAt(r)) > 55295 && i < 57344) {
if (!a) {
if (i > 56319) {
(t -= 3) > -1 && o.push(239, 191, 189);
continue;
}
if (r + 1 === n) {
(t -= 3) > -1 && o.push(239, 191, 189);
continue;
}
a = i;
continue;
}
if (i < 56320) {
(t -= 3) > -1 && o.push(239, 191, 189), a = i;
continue;
}
i = 65536 + (a - 55296 << 10 | i - 56320);
} else a && (t -= 3) > -1 && o.push(239, 191, 189);
if (a = null, i < 128) {
if ((t -= 1) < 0) break;
o.push(i);
} else if (i < 2048) {
if ((t -= 2) < 0) break;
o.push(i >> 6 | 192, 63 & i | 128);
} else if (i < 65536) {
if ((t -= 3) < 0) break;
o.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128);
} else {
if (!(i < 1114112)) throw new Error("Invalid code point");
if ((t -= 4) < 0) break;
o.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128);
}
}
return o;
}
function Q(e) {
for (var t = [], i = 0; i < e.length; ++i) t.push(255 & e.charCodeAt(i));
return t;
}
function Y(e, t) {
for (var i, n, a, o = [], r = 0; r < e.length && !((t -= 2) < 0); ++r) n = (i = e.charCodeAt(r)) >> 8, 
a = i % 256, o.push(a), o.push(n);
return o;
}
function K(e) {
return X.toByteArray(k(e));
}
function W(e, t, i, n) {
for (var a = 0; a < n && !(a + i >= t.length || a >= e.length); ++a) t[a + i] = e[a];
return a;
}
function j(e) {
return e != e;
}
var X = e("base64-js"), J = e("ieee754"), q = e("isarray");
i.Buffer = o, i.SlowBuffer = function(e) {
return +e != e && (e = 0), o.alloc(+e);
}, i.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
try {
var e = new Uint8Array(1);
return e.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function() {
return 42;
}
}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
} catch (e) {
return !1;
}
}(), i.kMaxLength = n(), o.poolSize = 8192, o._augment = function(e) {
return e.__proto__ = o.prototype, e;
}, o.from = function(e, t, i) {
return r(null, e, t, i);
}, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, 
"undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
value: null,
configurable: !0
})), o.alloc = function(e, t, i) {
return c(null, e, t, i);
}, o.allocUnsafe = function(e) {
return l(null, e);
}, o.allocUnsafeSlow = function(e) {
return l(null, e);
}, o.isBuffer = function(e) {
return !(null == e || !e._isBuffer);
}, o.compare = function(e, t) {
if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
if (e === t) return 0;
for (var i = e.length, n = t.length, a = 0, r = Math.min(i, n); a < r; ++a) if (e[a] !== t[a]) {
i = e[a], n = t[a];
break;
}
return i < n ? -1 : n < i ? 1 : 0;
}, o.isEncoding = function(e) {
switch (String(e).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
}, o.concat = function(e, t) {
if (!q(e)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === e.length) return o.alloc(0);
var i;
if (void 0 === t) for (t = 0, i = 0; i < e.length; ++i) t += e[i].length;
var n = o.allocUnsafe(t), a = 0;
for (i = 0; i < e.length; ++i) {
var r = e[i];
if (!o.isBuffer(r)) throw new TypeError('"list" argument must be an Array of Buffers');
r.copy(n, a), a += r.length;
}
return n;
}, o.byteLength = f, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
var e = this.length;
if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var t = 0; t < e; t += 2) m(this, t, t + 1);
return this;
}, o.prototype.swap32 = function() {
var e = this.length;
if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
return this;
}, o.prototype.swap64 = function() {
var e = this.length;
if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), 
m(this, t + 3, t + 4);
return this;
}, o.prototype.toString = function() {
var e = 0 | this.length;
return 0 === e ? "" : 0 === arguments.length ? O(this, 0, e) : g.apply(this, arguments);
}, o.prototype.equals = function(e) {
if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
return this === e || 0 === o.compare(this, e);
}, o.prototype.inspect = function() {
var e = "", t = i.INSPECT_MAX_BYTES;
return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), 
this.length > t && (e += " ... ")), "<Buffer " + e + ">";
}, o.prototype.compare = function(e, t, i, n, a) {
if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
if (void 0 === t && (t = 0), void 0 === i && (i = e ? e.length : 0), void 0 === n && (n = 0), 
void 0 === a && (a = this.length), t < 0 || i > e.length || n < 0 || a > this.length) throw new RangeError("out of range index");
if (n >= a && t >= i) return 0;
if (n >= a) return -1;
if (t >= i) return 1;
if (this === e) return 0;
for (var r = (a >>>= 0) - (n >>>= 0), s = (i >>>= 0) - (t >>>= 0), c = Math.min(r, s), l = this.slice(n, a), _ = e.slice(t, i), u = 0; u < c; ++u) if (l[u] !== _[u]) {
r = l[u], s = _[u];
break;
}
return r < s ? -1 : s < r ? 1 : 0;
}, o.prototype.includes = function(e, t, i) {
return -1 !== this.indexOf(e, t, i);
}, o.prototype.indexOf = function(e, t, i) {
return E(this, e, t, i, !0);
}, o.prototype.lastIndexOf = function(e, t, i) {
return E(this, e, t, i, !1);
}, o.prototype.write = function(e, t, i, n) {
if (void 0 === t) n = "utf8", i = this.length, t = 0; else if (void 0 === i && "string" == typeof t) n = t, 
i = this.length, t = 0; else {
if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
t |= 0, isFinite(i) ? (i |= 0, void 0 === n && (n = "utf8")) : (n = i, i = void 0);
}
var a = this.length - t;
if ((void 0 === i || i > a) && (i = a), e.length > 0 && (i < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
n || (n = "utf8");
for (var o = !1; ;) switch (n) {
case "hex":
return S(this, e, t, i);

case "utf8":
case "utf-8":
return L(this, e, t, i);

case "ascii":
return T(this, e, t, i);

case "latin1":
case "binary":
return A(this, e, t, i);

case "base64":
return R(this, e, t, i);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return I(this, e, t, i);

default:
if (o) throw new TypeError("Unknown encoding: " + n);
n = ("" + n).toLowerCase(), o = !0;
}
}, o.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
var Z = 4096;
o.prototype.slice = function(e, t) {
var i, n = this.length;
(e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), 
t < e && (t = e);
if (o.TYPED_ARRAY_SUPPORT) (i = this.subarray(e, t)).__proto__ = o.prototype; else {
var a = t - e;
i = new o(a, void 0);
for (var r = 0; r < a; ++r) i[r] = this[r + e];
}
return i;
}, o.prototype.readUIntLE = function(e, t, i) {
e |= 0, t |= 0, i || M(e, t, this.length);
for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256); ) n += this[e + o] * a;
return n;
}, o.prototype.readUIntBE = function(e, t, i) {
e |= 0, t |= 0, i || M(e, t, this.length);
for (var n = this[e + --t], a = 1; t > 0 && (a *= 256); ) n += this[e + --t] * a;
return n;
}, o.prototype.readUInt8 = function(e, t) {
return t || M(e, 1, this.length), this[e];
}, o.prototype.readUInt16LE = function(e, t) {
return t || M(e, 2, this.length), this[e] | this[e + 1] << 8;
}, o.prototype.readUInt16BE = function(e, t) {
return t || M(e, 2, this.length), this[e] << 8 | this[e + 1];
}, o.prototype.readUInt32LE = function(e, t) {
return t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
}, o.prototype.readUInt32BE = function(e, t) {
return t || M(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
}, o.prototype.readIntLE = function(e, t, i) {
e |= 0, t |= 0, i || M(e, t, this.length);
for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256); ) n += this[e + o] * a;
return n >= (a *= 128) && (n -= Math.pow(2, 8 * t)), n;
}, o.prototype.readIntBE = function(e, t, i) {
e |= 0, t |= 0, i || M(e, t, this.length);
for (var n = t, a = 1, o = this[e + --n]; n > 0 && (a *= 256); ) o += this[e + --n] * a;
return o >= (a *= 128) && (o -= Math.pow(2, 8 * t)), o;
}, o.prototype.readInt8 = function(e, t) {
return t || M(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
}, o.prototype.readInt16LE = function(e, t) {
t || M(e, 2, this.length);
var i = this[e] | this[e + 1] << 8;
return 32768 & i ? 4294901760 | i : i;
}, o.prototype.readInt16BE = function(e, t) {
t || M(e, 2, this.length);
var i = this[e + 1] | this[e] << 8;
return 32768 & i ? 4294901760 | i : i;
}, o.prototype.readInt32LE = function(e, t) {
return t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
}, o.prototype.readInt32BE = function(e, t) {
return t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
}, o.prototype.readFloatLE = function(e, t) {
return t || M(e, 4, this.length), J.read(this, e, !0, 23, 4);
}, o.prototype.readFloatBE = function(e, t) {
return t || M(e, 4, this.length), J.read(this, e, !1, 23, 4);
}, o.prototype.readDoubleLE = function(e, t) {
return t || M(e, 8, this.length), J.read(this, e, !0, 52, 8);
}, o.prototype.readDoubleBE = function(e, t) {
return t || M(e, 8, this.length), J.read(this, e, !1, 52, 8);
}, o.prototype.writeUIntLE = function(e, t, i, n) {
(e = +e, t |= 0, i |= 0, n) || G(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
var a = 1, o = 0;
for (this[t] = 255 & e; ++o < i && (a *= 256); ) this[t + o] = e / a & 255;
return t + i;
}, o.prototype.writeUIntBE = function(e, t, i, n) {
(e = +e, t |= 0, i |= 0, n) || G(this, e, t, i, Math.pow(2, 8 * i) - 1, 0);
var a = i - 1, o = 1;
for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); ) this[t + a] = e / o & 255;
return t + i;
}, o.prototype.writeUInt8 = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 
this[t] = 255 & e, t + 1;
}, o.prototype.writeUInt16LE = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, 
this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2;
}, o.prototype.writeUInt16BE = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, 
this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2;
}, o.prototype.writeUInt32LE = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, 
this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : U(this, e, t, !0), 
t + 4;
}, o.prototype.writeUInt32BE = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, 
this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : U(this, e, t, !1), 
t + 4;
}, o.prototype.writeIntLE = function(e, t, i, n) {
if (e = +e, t |= 0, !n) {
var a = Math.pow(2, 8 * i - 1);
G(this, e, t, i, a - 1, -a);
}
var o = 0, r = 1, s = 0;
for (this[t] = 255 & e; ++o < i && (r *= 256); ) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), 
this[t + o] = (e / r >> 0) - s & 255;
return t + i;
}, o.prototype.writeIntBE = function(e, t, i, n) {
if (e = +e, t |= 0, !n) {
var a = Math.pow(2, 8 * i - 1);
G(this, e, t, i, a - 1, -a);
}
var o = i - 1, r = 1, s = 0;
for (this[t + o] = 255 & e; --o >= 0 && (r *= 256); ) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), 
this[t + o] = (e / r >> 0) - s & 255;
return t + i;
}, o.prototype.writeInt8 = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 
e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
}, o.prototype.writeInt16LE = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, 
this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2;
}, o.prototype.writeInt16BE = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, 
this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2;
}, o.prototype.writeInt32LE = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, 
this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : U(this, e, t, !0), 
t + 4;
}, o.prototype.writeInt32BE = function(e, t, i) {
return e = +e, t |= 0, i || G(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), 
o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, 
this[t + 3] = 255 & e) : U(this, e, t, !1), t + 4;
}, o.prototype.writeFloatLE = function(e, t, i) {
return F(this, e, t, !0, i);
}, o.prototype.writeFloatBE = function(e, t, i) {
return F(this, e, t, !1, i);
}, o.prototype.writeDoubleLE = function(e, t, i) {
return B(this, e, t, !0, i);
}, o.prototype.writeDoubleBE = function(e, t, i) {
return B(this, e, t, !1, i);
}, o.prototype.copy = function(e, t, i, n) {
if (i || (i = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), 
t || (t = 0), n > 0 && n < i && (n = i), n === i) return 0;
if (0 === e.length || 0 === this.length) return 0;
if (t < 0) throw new RangeError("targetStart out of bounds");
if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
if (n < 0) throw new RangeError("sourceEnd out of bounds");
n > this.length && (n = this.length), e.length - t < n - i && (n = e.length - t + i);
var a, r = n - i;
if (this === e && i < t && t < n) for (a = r - 1; a >= 0; --a) e[a + t] = this[a + i]; else if (r < 1e3 || !o.TYPED_ARRAY_SUPPORT) for (a = 0; a < r; ++a) e[a + t] = this[a + i]; else Uint8Array.prototype.set.call(e, this.subarray(i, i + r), t);
return r;
}, o.prototype.fill = function(e, t, i, n) {
if ("string" == typeof e) {
if ("string" == typeof t ? (n = t, t = 0, i = this.length) : "string" == typeof i && (n = i, 
i = this.length), 1 === e.length) {
var a = e.charCodeAt(0);
a < 256 && (e = a);
}
if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
} else "number" == typeof e && (e &= 255);
if (t < 0 || this.length < t || this.length < i) throw new RangeError("Out of range index");
if (i <= t) return this;
t >>>= 0, i = void 0 === i ? this.length : i >>> 0, e || (e = 0);
var r;
if ("number" == typeof e) for (r = t; r < i; ++r) this[r] = e; else {
var s = o.isBuffer(e) ? e : z(new o(e, n).toString()), c = s.length;
for (r = 0; r < i - t; ++r) this[r + t] = s[r % c];
}
return this;
};
var $ = /[^+\/0-9A-Za-z-_]/g;
}).call(this, "undefined" != typeof n ? n : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"base64-js": 30,
ieee754: 32,
isarray: 34
} ],
30: [ function(e, t, i) {
function n(e) {
var t = e.length;
if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0;
}
function a(e) {
return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[63 & e];
}
function o(e, t, i) {
for (var n, o = [], r = t; r < i; r += 3) n = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], 
o.push(a(n));
return o.join("");
}
i.byteLength = function(e) {
return 3 * e.length / 4 - n(e);
}, i.toByteArray = function(e) {
var t, i, a, o, r, l, _ = e.length;
r = n(e), l = new c(3 * _ / 4 - r), a = r > 0 ? _ - 4 : _;
var u = 0;
for (t = 0, i = 0; t < a; t += 4, i += 3) o = s[e.charCodeAt(t)] << 18 | s[e.charCodeAt(t + 1)] << 12 | s[e.charCodeAt(t + 2)] << 6 | s[e.charCodeAt(t + 3)], 
l[u++] = o >> 16 & 255, l[u++] = o >> 8 & 255, l[u++] = 255 & o;
return 2 === r ? (o = s[e.charCodeAt(t)] << 2 | s[e.charCodeAt(t + 1)] >> 4, l[u++] = 255 & o) : 1 === r && (o = s[e.charCodeAt(t)] << 10 | s[e.charCodeAt(t + 1)] << 4 | s[e.charCodeAt(t + 2)] >> 2, 
l[u++] = o >> 8 & 255, l[u++] = 255 & o), l;
}, i.fromByteArray = function(e) {
for (var t, i = e.length, n = i % 3, a = "", s = [], c = 16383, l = 0, _ = i - n; l < _; l += c) s.push(o(e, l, l + c > _ ? _ : l + c));
return 1 === n ? (t = e[i - 1], a += r[t >> 2], a += r[t << 4 & 63], a += "==") : 2 === n && (t = (e[i - 2] << 8) + e[i - 1], 
a += r[t >> 10], a += r[t >> 4 & 63], a += r[t << 2 & 63], a += "="), s.push(a), 
s.join("");
};
for (var r = [], s = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _ = 0, u = l.length; _ < u; ++_) r[_] = l[_], 
s[l.charCodeAt(_)] = _;
s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63;
}, {} ],
31: [ function(e, t) {
!function(e) {
function i(e) {
for (var t in r) e[t] = r[t];
return e;
}
function n(e, t) {
var i, r = this;
if (arguments.length) {
if (t) {
if (i = a(r, e, !0)) {
if (!(i = i.filter(function(e) {
return e !== t && e.originalListener !== t;
})).length) return n.call(r, e);
r[o][e] = i;
}
} else if ((i = r[o]) && (delete i[e], !Object.keys(i).length)) return n.call(r);
} else delete r[o];
return r;
}
function a(e, t, i) {
if (!i || e[o]) {
var n = e[o] || (e[o] = {});
return n[t] || (n[t] = []);
}
}
"undefined" != typeof t && (t.exports = e);
var o = "listeners", r = {
on: function(e, t) {
return a(this, e).push(t), this;
},
once: function(e, t) {
function i() {
n.call(o, e, i), t.apply(this, arguments);
}
var o = this;
return i.originalListener = t, a(o, e).push(i), o;
},
off: n,
emit: function(e, t) {
var i = this, n = a(i, e, !0);
if (!n) return !1;
var o = arguments.length;
if (1 === o) n.forEach(function(e) {
e.call(i);
}); else if (2 === o) n.forEach(function(e) {
e.call(i, t);
}); else {
var r = Array.prototype.slice.call(arguments, 1);
n.forEach(function(e) {
e.apply(i, r);
});
}
return !!n.length;
}
};
i(e.prototype), e.mixin = i;
}(function e() {
if (!(this instanceof e)) return new e();
});
}, {} ],
32: [ function(e, t, i) {
i.read = function(e, t, i, n, a) {
var o, r, s = 8 * a - n - 1, c = (1 << s) - 1, l = c >> 1, _ = -7, u = i ? a - 1 : 0, h = i ? -1 : 1, d = e[t + u];
for (u += h, o = d & (1 << -_) - 1, d >>= -_, _ += s; _ > 0; o = 256 * o + e[t + u], 
u += h, _ -= 8) ;
for (r = o & (1 << -_) - 1, o >>= -_, _ += n; _ > 0; r = 256 * r + e[t + u], u += h, 
_ -= 8) ;
if (0 === o) o = 1 - l; else {
if (o === c) return r ? NaN : 1 / 0 * (d ? -1 : 1);
r += Math.pow(2, n), o -= l;
}
return (d ? -1 : 1) * r * Math.pow(2, o - n);
}, i.write = function(e, t, i, n, a, o) {
var r, s, c, l = 8 * o - a - 1, _ = (1 << l) - 1, u = _ >> 1, h = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n ? 0 : o - 1, p = n ? 1 : -1, f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, r = _) : (r = Math.floor(Math.log(t) / Math.LN2), 
t * (c = Math.pow(2, -r)) < 1 && (r--, c *= 2), (t += r + u >= 1 ? h / c : h * Math.pow(2, 1 - u)) * c >= 2 && (r++, 
c /= 2), r + u >= _ ? (s = 0, r = _) : r + u >= 1 ? (s = (t * c - 1) * Math.pow(2, a), 
r += u) : (s = t * Math.pow(2, u - 1) * Math.pow(2, a), r = 0)); a >= 8; e[i + d] = 255 & s, 
d += p, s /= 256, a -= 8) ;
for (r = r << a | s, l += a; l > 0; e[i + d] = 255 & r, d += p, r /= 256, l -= 8) ;
e[i + d - p] |= 128 * f;
};
}, {} ],
33: [ function(e, t, i) {
(function(e) {
!function(t) {
function i(e, i, v) {
function T(e, t, i, n) {
return this instanceof T ? A(this, e, t, i, n) : new T(e, t, i, n);
}
function A(e, t, i, n, a) {
if (g && m && (t instanceof m && (t = new g(t)), n instanceof m && (n = new g(n))), 
t || i || n || d) {
r(t, i) || (a = i, n = t, i = 0, t = new (d || Array)(8));
e.buffer = t, e.offset = i |= 0, p !== typeof n && ("string" == typeof n ? R(t, i, n, a || 10) : r(n, a) ? s(t, i, n, a) : "number" == typeof a ? (b(t, i + y, n), 
b(t, i + C, a)) : n > 0 ? G(t, i, n) : n < 0 ? D(t, i, n) : s(t, i, E, 0));
} else e.buffer = c(E, 0);
}
function R(e, t, i, n) {
var a = 0, o = i.length, r = 0, s = 0;
"-" === i[0] && a++;
for (var c = a; a < o; ) {
var l = parseInt(i[a++], n);
if (!(l >= 0)) break;
s = s * n + l, r = r * n + Math.floor(s / S), s %= S;
}
c && (r = ~r, s ? s = S - s : r++), b(e, t + y, r), b(e, t + C, s);
}
function I() {
var e = this.buffer, t = this.offset, i = O(e, t + y), n = O(e, t + C);
return v || (i |= 0), i ? i * S + n : n;
}
function b(e, t, i) {
e[t + M] = 255 & i, i >>= 8, e[t + w] = 255 & i, i >>= 8, e[t + P] = 255 & i, i >>= 8, 
e[t + N] = 255 & i;
}
function O(e, t) {
return e[t + N] * L + (e[t + P] << 16) + (e[t + w] << 8) + e[t + M];
}
var y = i ? 0 : 4, C = i ? 4 : 0, N = i ? 0 : 3, P = i ? 1 : 2, w = i ? 2 : 1, M = i ? 3 : 0, G = i ? l : u, D = i ? _ : h, U = T.prototype, H = "is" + e, F = "_" + H;
return U.buffer = void 0, U.offset = 0, U[F] = !0, U.toNumber = I, U.toString = function(e) {
var t = this.buffer, i = this.offset, n = O(t, i + y), a = O(t, i + C), o = "", r = !v && 2147483648 & n;
for (r && (n = ~n, a = S - a), e = e || 10; ;) {
var s = n % e * S + a;
if (n = Math.floor(n / e), a = Math.floor(s / e), o = (s % e).toString(e) + o, !n && !a) break;
}
return r && (o = "-" + o), o;
}, U.toJSON = I, U.toArray = n, f && (U.toBuffer = a), g && (U.toArrayBuffer = o), 
T[H] = function(e) {
return !(!e || !e[F]);
}, t[e] = T, T;
}
function n(e) {
var t = this.buffer, i = this.offset;
return d = null, !1 !== e && 0 === i && 8 === t.length && v(t) ? t : c(t, i);
}
function a(t) {
var i = this.buffer, n = this.offset;
if (d = f, !1 !== t && 0 === n && 8 === i.length && e.isBuffer(i)) return i;
var a = new f(8);
return s(a, 0, i, n), a;
}
function o(e) {
var t = this.buffer, i = this.offset, n = t.buffer;
if (d = g, !1 !== e && 0 === i && n instanceof m && 8 === n.byteLength) return n;
var a = new g(8);
return s(a, 0, t, i), a.buffer;
}
function r(e, t) {
var i = e && e.length;
return t |= 0, i && t + 8 <= i && "string" != typeof e[t];
}
function s(e, t, i, n) {
t |= 0, n |= 0;
for (var a = 0; a < 8; a++) e[t++] = 255 & i[n++];
}
function c(e, t) {
return Array.prototype.slice.call(e, t, t + 8);
}
function l(e, t, i) {
for (var n = t + 8; n > t; ) e[--n] = 255 & i, i /= 256;
}
function _(e, t, i) {
var n = t + 8;
for (i++; n > t; ) e[--n] = 255 & -i ^ 255, i /= 256;
}
function u(e, t, i) {
for (var n = t + 8; t < n; ) e[t++] = 255 & i, i /= 256;
}
function h(e, t, i) {
var n = t + 8;
for (i++; t < n; ) e[t++] = 255 & -i ^ 255, i /= 256;
}
var d, p = "undefined", f = p !== typeof e && e, g = p !== typeof Uint8Array && Uint8Array, m = p !== typeof ArrayBuffer && ArrayBuffer, E = [ 0, 0, 0, 0, 0, 0, 0, 0 ], v = Array.isArray || function(e) {
return !!e && "[object Array]" == Object.prototype.toString.call(e);
}, S = 4294967296, L = 16777216;
i("Uint64BE", !0, !0), i("Int64BE", !0, !1), i("Uint64LE", !1, !0), i("Int64LE", !1, !1);
}("object" == typeof i && "string" != typeof i.nodeName ? i : this || {});
}).call(this, e("buffer").Buffer);
}, {
buffer: 29
} ],
34: [ function(e, t) {
var i = {}.toString;
t.exports = Array.isArray || function(e) {
return "[object Array]" == i.call(e);
};
}, {} ]
}, {}, [ 1 ])(1);
});
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ],
randomText_tip: [ function(e, t) {
"use strict";
cc._RF.push(t, "f0653aoZA1CR619SDKlJpRn", "randomText_tip");
var i = [ "loading_tip1", "loading_tip2", "loading_tip3", "loading_tip4", "loading_tip5", "loading_tip6", "loading_tip7", "loading_tip8" ];
cc.Class({
extends: cc.Component,
properties: {
_tipIndex: [],
_nowTipIndex: -1
},
onLoad: function() {
for (var e = this, t = 0; t < i.length; t++) this._tipIndex.push(t);
this.showRandomTips();
cc.tween(this.node).delay(8).call(function() {
e.showRandomTips();
}).start();
},
start: function() {},
showRandomTips: function() {
if (cc.isValid(this.node, !0)) {
var e = this._tipIndex[Global.random(0, this._tipIndex.length - 1)];
I18N.setI18nLabel(this.node, cc.vv.Language[i[e]]);
this.removeItemByVal(e);
this._nowTipIndex >= 0 && this._tipIndex.push(this._nowTipIndex);
this._nowTipIndex = e;
}
},
removeItemByVal: function(e) {
for (var t = 0; t < this._tipIndex.length; t++) if (this._tipIndex[t] === e) {
this._tipIndex.splice(t, 1);
break;
}
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "GameIdMgr", "GameItemCfg", "GlobalVar", "GameConfig", "GameHotupdate", "GameLaunch", "GameTips", "GameTipsAr", "HotUpdateModule", "LangBoxBtnCpt", "LangBoxCpt", "MD5", "MsgIdConfig", "UserConfig", "UserManagerEx", "i18nComEx", "AudioCfgCpt", "KeyCpt", "PrefabCfgCpt", "GlobalTools", "NetManagerEx", "PH_NetCacheMgr", "PopupBtnCmp", "PopupCloseBtnCmp", "PopupLifeCmp", "PopupManager", "ResManager", "RuleBtnCpt", "RuleViewCpt", "DelayCmp", "EventBtnCmp", "EventListenerCmp", "NetListenerCmp", "ButtonClick2SoundCmp", "ButtonClickLimitCmp", "ButtonClickSoundCmp", "ButtonGrayCmp", "ButtonSoundCpt", "CH_CommPopBgLayer", "CarouselCpt", "CarouselIndicatorCpt", "CarouselItemCpt", "FloatTipEx", "IsReviewCpt", "LeftMenuCpt", "ListView", "ListViewItem", "LongTouchCpt", "LoopPageView", "NavigationPageItem", "NavigationPageView", "PopupReward", "PreloadingPrefab", "ProgressBarTarget", "RewardItemCpt", "RewardListCpt", "SafeWidget", "SceneTranslate", "ScrollViewDrawCallOpacity", "SingleHide", "Slideshow3D", "Slideshow3DItem", "Tabbar", "TimeDownCpt", "ActionType", "UIActionIn", "UIActionLoop", "UIActionMove", "i18SpriteButton", "i18nCom", "i18nConst", "i18nLabel", "i18nManager", "i18nRichLabel", "i18nSkeleton", "i18nSprite", "i18nTransform", "FloatTip", "randomText_tip", "hotupdate", "msgpack.min", "AppData", "GameInit", "Android_IOS_Review", "AppLog", "AssetMgr", "AudioManager", "EventDef", "EventManager", "GlobalCfg", "GlobalFunc", "HeadLoaderMgr", "Http", "CH_List", "List", "ListItem", "Md5", "MsgIdDef", "NetCacheMgr", "NetErrorCode", "NetManager", "PlatformApi", "SceneMgr", "StatisticsMgr", "TimerMgr", "TradPlusAdMgr", "UI_popwin_interface", "UserManager", "EnglishCfg", "LanguageButton", "LanguageFont", "LanguageLabel", "LanguageSprite", "LanguageUIAdjust", "LanguageUIBase", "LanguageUtil", "CCAction_Shake", "CCSafeArea", "CH_popwin_base", "DragObjCmp", "ImgSwitchCmp", "LabelRollCmp", "LabelSwitchCmp", "MemoryPrintTool", "NodeLifeCallBack", "ReTimer", "WebView_Ex" ]);