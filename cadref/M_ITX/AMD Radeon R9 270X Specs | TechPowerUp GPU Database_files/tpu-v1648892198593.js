var TPU=window.TPU||{};!function($,window,document)
{jQuery.fn.sortElementsTPU=(function(){var sort=[].sort;return function(comparator,getSortable){getSortable=getSortable||function(){return this;};var placements=this.map(function(){var sortElement=getSortable.call(this),parentNode=sortElement.parentNode,nextSibling=parentNode.insertBefore(document.createTextNode(''),sortElement.nextSibling);return function(){if(parentNode===this){throw new Error('You can\'t sort elements if any one is a descendant of another.');}
parentNode.insertBefore(this,nextSibling);parentNode.removeChild(nextSibling);};});return sort.call(this,comparator).each(function(i){placements[i].call(getSortable.call(this));});};})();TPU.throttle=function(delay,no_trailing,callback,debounce_mode){var timeout_id,last_exec=0;if(typeof no_trailing!=='boolean'){debounce_mode=callback;callback=no_trailing;no_trailing=undefined;}
function wrapper(){var that=this;var elapsed=+new Date()-last_exec;var args=arguments;function exec(){last_exec=+new Date();callback.apply(that,args);};function clear(){timeout_id=undefined;};if(debounce_mode&&!timeout_id){exec();}
timeout_id&&clearTimeout(timeout_id);if(debounce_mode===undefined&&elapsed>delay){exec();}else if(no_trailing!==true){timeout_id=setTimeout(debounce_mode?clear:exec,debounce_mode===undefined?delay-elapsed:delay);}};if($.guid){wrapper.guid=callback.guid=callback.guid||$.guid++;}
return wrapper;};TPU.debounce=function(delay,at_begin,callback){return callback===undefined?TPU.throttle(delay,at_begin,false):TPU.throttle(delay,callback,at_begin!==false);};TPU.Hotkey=(function(){var listeners=[];return function(key,callback){var keysToCheck={ctrl:false,alt:false,shift:false,key:false,callback:callback};var keys=key.toLowerCase().split('+');$.each(keys,function(i,el){if(el=='ctrl')
keysToCheck.ctrl=true;else if(el=='alt')
keysToCheck.alt=true;else if(el=='shift')
keysToCheck.shift=true;else
keysToCheck.key=el;});listeners.push(keysToCheck);if(listeners.length>1)
return;$(document).on('keydown',function(e){$.each(listeners,function(i,l){if(e.originalEvent.altKey!=l.alt)
return;if(e.originalEvent.shiftKey!=l.shift)
return;if(e.originalEvent.ctrlKey!=l.ctrl)
return;if(e.originalEvent.key.toLowerCase()!=l.key)
return;e.stopPropagation();e.preventDefault();l.callback.apply(this,e);});});};})();}(window.jQuery,window,document);