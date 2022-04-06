/*
--------------------------------------------------------
suggest.js - Input Suggest
Version 2.0.2 (Update 2007/07/29)

- onozaty (http://www.enjoyxstudy.com)

Released under the Creative Commons License(Attribution 2.1 Japan):
 http://creativecommons.org/licenses/by/2.1/jp/

For details, see the web site:
 http://www.enjoyxstudy.com/javascript/suggest/

--------------------------------------------------------
*/

if (!Suggest) {
	var Suggest = {};
}
/*-- KeyCodes -----------------------------------------*/
Suggest.Key = {
	TAB:     9,
	RETURN: 13,
	ESC:    27,
	UP:     38,
	DOWN:   40
};

/*-- Utils --------------------------------------------*/
Suggest.copyProperties = function(dest, src) {
	for (var property in src) {
		dest[property] = src[property];
	}
	return dest;
};

/*-- Suggest.Local ------------------------------------*/
Suggest.Local = function() {
	this.initialize.apply(this, arguments);
};
Suggest.Local.prototype = {
	initialize: function(input, suggestArea, candidateList) {

		this.input = this._getElement(input);
		this.suggestArea = this._getElement(suggestArea);
		this.candidateList = candidateList;
		this.oldText = this.getInputText();

		if (arguments[3]) this.setOptions(arguments[3]);

		// reg event
		this._addEvent(this.input, 'focus', this._bind(this.checkLoop));
//		this._addEvent(this.input, 'blur', this._bind(this.inputBlur));

		var keyevent = 'keydown';
		if (window.opera || (navigator.userAgent.indexOf('Gecko') >= 0 && navigator.userAgent.indexOf('KHTML') == -1)) {
			keyevent = 'keypress';
		}
		this._addEvent(this.input, keyevent, this._bindEvent(this.keyEvent));

		// init
		this.suggestArea.style.display = 'none';
		this.clearSuggestArea();
	},

	// options
	interval: 500,
	dispMax: 20,
	listTagName: 'div',
	prefix: false,
	ignoreCase: true,
	highlight: false,
	dispAllKey: false,
	classMouseOver: 'over',
	classSelect: 'select',
	nomuchMsg: '該当する品番はありません',
	hookBeforeSearch: function(){},
	topPosition: 0,
	activate: true,
	lineHeight: 15,
	nomuchHeight: 30,

	setOptions: function(options) {
		Suggest.copyProperties(this, options);
	},

	inputBlur: function() {

		this.changeUnactive();
		this.oldText = this.getInputText();

		if (this.timerId) clearTimeout(this.timerId);
		this.timerId = null;

		setTimeout(this._bind(this.clearSuggestArea), 500);
	},

	checkLoop: function() {
		var text = this.getInputText();
		if (text != this.oldText) {
			this.oldText = text;
			this.search();
		}
		if (this.timerId) clearTimeout(this.timerId);
		this.timerId = setTimeout(this._bind(this.checkLoop), this.interval);
	},

	search: function() {

		// init
		this.clearSuggestArea();

		var text = this.getInputText();

		if (text == '' || text == null) return;

		this.hookBeforeSearch(text);
		var resultList = this._search(text);
		if (resultList != 0) this.createSuggestArea(resultList);
	},

	_search: function(text) {

		var resultList = [];
		var temp;
		this.suggestIndexList = [];

		for (var i = 0, length = this.candidateList.length; i < length; i++) {
			if ((temp = this.isMatch(this.candidateList[i], text)) != null) {
				if (temp.indexOf(',url:') != -1) {
					temp = temp.substring(0,temp.indexOf(',url:'));
				}
				resultList.push(temp);
				this.suggestIndexList.push(i);

				if (this.dispMax != 0 && resultList.length >= this.dispMax) break;
			}
		}
		if (resultList.length == 0) {
//			resultList.push(this.nomuchMsg);
		}
		return resultList;
	},

	isMatch: function(value, pattern) {

		if (value == null) return null;

		pattern = z2h_ascii(pattern);
		var pos = (this.ignoreCase) ?
			value.toLowerCase().indexOf(pattern.toLowerCase())
			: value.indexOf(pattern);

		if ((pos == -1) || (this.prefix && pos != 0)) return null;

		if (this.highlight) {
			return (this._escapeHTML(value.substr(0, pos)) + '<strong>'
							+ this._escapeHTML(value.substr(pos, pattern.length))
							+ '</strong>' + this._escapeHTML(value.substr(pos + pattern.length)));
		} else {
			return this._escapeHTML(value);
		}
	},

	clearSuggestArea: function() {
		this.suggestArea.innerHTML = '';
		this.suggestArea.style.display = 'none';
		this.suggestList = null;
		this.suggestIndexList = null;
		this.activePosition = null;
	},

	createSuggestArea: function(resultList) {

		this.suggestList = [];
		this.inputValueBackup = this.input.value;

		for (var i = 0, length = resultList.length; i < length; i++) {
			var element = document.createElement(this.listTagName);
			element.innerHTML = resultList[i];
			if (resultList[i] == this.nomuchMsg) {
				element.style.height = this.nomuchHeight;
			}
			this.suggestArea.appendChild(element);

			this._addEvent(element, 'click', this._bindEvent(this.listClick, i));
			this._addEvent(element, 'mouseover', this._bindEvent(this.listMouseOver, i));
			this._addEvent(element, 'mouseout', this._bindEvent(this.listMouseOut, i));

			this.suggestList.push(element);
		}
		this.suggestArea.style.display = '';
	},

	getInputText: function() {
		return this.input.value;
	},

	setInputText: function(text) {
		this.input.value = text;
	},

	getUrl: function() {
		return this.input.url;
	},

	setUrl: function(url) {
		this.input.url = url;
	},

	// key event
	keyEvent: function(event) {

		if (!this.timerId) {
			this.timerId = setTimeout(this._bind(this.checkLoop), this.interval);
		}

		if (this.dispAllKey && event.ctrlKey
			&& this.getInputText() == ''
			&& !this.suggestList
			&& event.keyCode == Suggest.Key.DOWN) {
			// dispAll
			this._stopEvent(event);
			this.keyEventDispAll();
		} else if (event.keyCode == Suggest.Key.UP
			|| event.keyCode == Suggest.Key.DOWN) {
			// key move
			if (this.suggestList && this.suggestList.length != 0) {
				this._stopEvent(event);
				this.keyEventMove(event.keyCode);
			}
		} else if (event.keyCode == Suggest.Key.RETURN) {
			// fix
			if (this.suggestList && this.suggestList.length != 0) {
				this._stopEvent(event);
				this.keyEventReturn();
			}
		} else if (event.keyCode == Suggest.Key.ESC) {
			// cancel
			if (this.suggestList && this.suggestList.length != 0) {
				this._stopEvent(event);
				this.keyEventEsc();
			}
		} else {
			this.keyEventOther(event);
		}
	},

	keyEventDispAll: function() {

		// init
		this.clearSuggestArea();

		this.oldText = this.getInputText();

		this.suggestIndexList = [];
		for (var i = 0, length = this.candidateList.length; i < length; i++) {
			this.suggestIndexList.push(i);
		}

		this.createSuggestArea(this.candidateList);
	},

	keyEventMove: function(keyCode) {

		this.changeUnactive();
		var statusStr;
		if (keyCode == Suggest.Key.UP) {
			// up
			if (this.activePosition == null) {
				this.activePosition = this.suggestList.length -1;
				this.topPosition = this.suggestList.length - 8;
				this.suggestArea.scrollTop = this.topPosition * this.lineHeight;
			} else {
				statusStr += "activePosition--,";
				this.activePosition--;
				if (this.activePosition < 0) {
					this.activePosition = null;
					this.input.value = this.inputValueBackup;
					statusStr += "activePosition = null,";
					return;
				} else {
					if (this.activePosition < this.topPosition) {
						this.suggestArea.scrollTop = this.suggestArea.scrollTop - this.lineHeight;
						this.topPosition--;
						statusStr += "topPosition--,";
					}
				}
			}
		} else {
			// down
			if (this.activePosition == null) {
				this.activePosition = 0;
				this.topPosition = 0;
				this.suggestArea.scrollTop = 0;
				statusStr += "activePosition=0,topPosition = 0";
			} else {
				this.activePosition++;
				statusStr += "activePosition++,";
				if (this.activePosition > this.topPosition + 8) {
					this.suggestArea.scrollTop = this.suggestArea.scrollTop + this.lineHeight;
					this.topPosition++;
					statusStr += "topPosition++,";
				}
			}

			if (this.activePosition >= this.suggestList.length) {
				this.activePosition = null;
				this.input.value = this.inputValueBackup;
				statusStr += "activePosition = null,";
				return;
			}
		}
		window.status = this.activePosition + ":" + this.topPosition + "(" + statusStr + ")";
		this.changeActive(this.activePosition);
	},

	keyEventReturn: function() {

		this.clearSuggestArea();
		this.moveEnd();
	},

	keyEventEsc: function() {

		this.clearSuggestArea();
		this.input.value = this.inputValueBackup;
		this.oldText = this.getInputText();

		if (window.opera) setTimeout(this._bind(this.moveEnd), 5);
	},

	keyEventOther: function(event) {},

	changeActive: function(index) {

		this.setStyleActive(this.suggestList[index]);
//		this.setInputText(this.candidateList[this.suggestIndexList[index]]);

		/* コロン「:」以前のテキストのみをコピーする */
		if (this.suggestIndexList.length > 0) {
			var txt = this.candidateList[this.suggestIndexList[index]];
			var pnum = txt.substring(0, txt.indexOf(":"));
			this.setInputText(pnum);
			if (txt.indexOf(",url:") != -1) {
				var url = txt.replace(txt.substring(0, txt.indexOf(",url:") + 5), "");
				this.setUrl(url);
			}
		} else {
			this.clearSuggestArea();
		}

		this.oldText = this.getInputText();
		this.input.focus();
	},

	changeUnactive: function() {

		if (this.suggestList != null
				&& this.suggestList.length > 0
				&& this.activePosition != null) {
			this.setStyleUnactive(this.suggestList[this.activePosition]);
		}
	},

	listClick: function(event, index) {

		this.changeUnactive();
		this.activePosition = index;
		this.changeActive(index);

		this.moveEnd();
//		this.clearSuggestArea();
		setTimeout(this._bind(this.clearSuggestArea), 100);
	},

	listMouseOver: function(event, index) {
		this.setStyleMouseOver(this._getEventElement(event));
	},

	listMouseOut: function(event, index) {

		if (!this.suggestList) return;

		var element = this._getEventElement(event);

		if (index == this.activePosition) {
			this.setStyleActive(element);
		} else {
			this.setStyleUnactive(element);
		}
	},

	setStyleActive: function(element) {
		element.className = this.classSelect;
	},

	setStyleUnactive: function(element) {
		element.className = '';
	},

	setStyleMouseOver: function(element) {
		element.className = this.classMouseOver;
	},

	moveEnd: function() {

		if (this.input.createTextRange) {
			this.input.focus(); // Opera
			var range = this.input.createTextRange();
			range.move('character', this.input.value.length);
			range.select();
		} else if (this.input.setSelectionRange) {
			this.input.setSelectionRange(this.input.value.length, this.input.value.length);
		}

		if (this.activePosition != null) {
			// サジェスト選択肢を選択した場合は、検索せずに直接サマリページに遷移する
			var url = this.linkPattern.replace("##PID##", this.input.value);
			if (this.input.url != undefined) {
				url = this.input.url;

				if (url.lastIndexOf('http', 0) == 0) {
					window.open(url);
				} else {
					window.location.href = url;
				}
				this.input.url = undefined;
			} else {
				window.location.href = url;
			}
		}
	},

	// Utils
	_getElement: function(element) {
		return (typeof element == 'string') ? document.getElementById(element) : element;
	},
	_addEvent: (window.addEventListener ?
		function(element, type, func) {
			element.addEventListener(type, func, false);
		} :
		function(element, type, func) {
			element.attachEvent('on' + type, func);
		}
	),
	_stopEvent: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.returnValue = false;
			event.cancelBubble = true;
		}
	},
	_getEventElement: function(event) {
		return event.target || event.srcElement;
	},
	_bind: function(func) {
		var self = this;
		var args = Array.prototype.slice.call(arguments, 1);
		return function(){ func.apply(self, args); };
	},
	_bindEvent: function(func) {
		var self = this;
		var args = Array.prototype.slice.call(arguments, 1);
		return function(event){ event = event || window.event; func.apply(self, [event].concat(args)); };
	},
	_escapeHTML: function(value) {
		return value;
	}
};

/*-- Suggest.LocalMulti ---------------------------------*/
Suggest.LocalMulti = function() {
	this.initialize.apply(this, arguments);
};
Suggest.copyProperties(Suggest.LocalMulti.prototype, Suggest.Local.prototype);

Suggest.LocalMulti.prototype.delim = ' '; // delimiter

Suggest.LocalMulti.prototype.keyEventReturn = function() {

	this.clearSuggestArea();
	this.input.value += this.delim;
	this.moveEnd();
};

Suggest.LocalMulti.prototype.keyEventOther = function(event) {

	if (event.keyCode == Suggest.Key.TAB) {
		// fix
		if (this.suggestList && this.suggestList.length != 0) {
			this._stopEvent(event);

			if (!this.activePosition) {
				this.activePosition = 0;
				this.changeActive(this.activePosition);
			}

			this.clearSuggestArea();
			this.input.value += this.delim;
			if (window.opera) {
				setTimeout(this._bind(this.moveEnd), 5);
			} else {
				this.moveEnd();
			}
		}
	}
};

Suggest.LocalMulti.prototype.listClick = function(event, index) {

	this.changeUnactive();
	this.activePosition = index;
	this.changeActive(index);

	this.input.value += this.delim;
	this.moveEnd();
};

Suggest.LocalMulti.prototype.getInputText = function() {

	var pos = this.getLastTokenPos();

	if (pos == -1) {
		return this.input.value;
	} else {
		return this.input.value.substr(pos + 1);
	}
};

Suggest.LocalMulti.prototype.setInputText = function(text) {

	var pos = this.getLastTokenPos();

	if (pos == -1) {
		this.input.value = text;
	} else {
		this.input.value = this.input.value.substr(0 , pos + 1) + text;
	}
};

Suggest.LocalMulti.prototype.getLastTokenPos = function() {
	return this.input.value.lastIndexOf(this.delim);
};

function z2h_ascii(src) {
	var str = new String;
	var len = src.length;
	for (var i = 0; i < len; i++) {
		var c = src.charCodeAt(i);
		if (c >= 65281 && c <= 65374 && c != 65340) {
			str += String.fromCharCode(c - 65248);
		} else if (c == 8217) {
			str += String.fromCharCode(39);
		} else if (c == 8221) {
			str += String.fromCharCode(34);
		} else if (c == 12288) {
			str += String.fromCharCode(32);
		} else if (c == 65507) {
			str += String.fromCharCode(126);
		} else if (c == 65509) {
			str += String.fromCharCode(92);
		} else {
			str += src.charAt(i);
		}
	}
	return str;
}

var list;
var sug;
function startSuggest(input, suggest, linkPattern, nomuchMsg) {
	sug = new Suggest.Local(
		input,              // 入力エレメントのID
		suggest,            // 補完候補を表示するエリアのID
		list,               // 補完候補の検索対象となる配列
		// オプション
		{
			dispMax: 0,       // 補完候補として表示する件数(0 なので上限無し)
			interval: 1000,   // 検索を行う周期(ms)
			prefix: false,   // 部分一致で検索
			highlight: true, // 検索に一致した文字の強調表示
			nomuchMsg: nomuchMsg,
			lineHeight: 17,
			nomuchHeight: '2.5em',
			linkPattern: linkPattern,
			getInputText: function() {
				// 3文字以上の入力があった場合のみ補完処理実施
				if (this.input.value.length >= 3) {
					return this.input.value;
				}

				return '';
			}
		});
}

function turnoff_suggest() {
	sug.activate = false;
}

function turnon_suggest() {
	sug.activate = true;
}

