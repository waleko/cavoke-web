/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(t,e){var i=t(window);function a(){return new Date(Date.UTC.apply(Date,arguments))}function s(){var t=new Date;return a(t.getFullYear(),t.getMonth(),t.getDate())}function n(t){return function(){return this[t].apply(this,arguments)}}var r,h=(r={get:function(t){return this.slice(t)[0]},contains:function(t){for(var e=t&&t.valueOf(),i=0,a=this.length;i<a;i++)if(this[i].valueOf()===e)return i;return-1},remove:function(t){this.splice(t,1)},replace:function(e){e&&(t.isArray(e)||(e=[e]),this.clear(),this.push.apply(this,e))},clear:function(){this.splice(0)},copy:function(){var t=new h;return t.replace(this),t}},function(){var e=[];return e.push.apply(e,arguments),t.extend(e,r),e}),o=function(e,i){this.dates=new h,this.viewDate=s(),this.focusDate=null,this._process_options(i),this.element=t(e),this.isInline=!1,this.isInput=this.element.is("input"),this.component=!!this.element.is(".date")&&this.element.find(".add-on, .input-group-addon, .btn"),this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=t(f.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot th.today").attr("colspan",function(t,e){return parseInt(e)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};o.prototype={constructor:o,_process_options:function(e){this._o=t.extend({},this._o,e);var i=this.o=t.extend({},this._o),a=i.language;switch(p[a]||(a=a.split("-")[0],p[a]||(a=c.language)),i.language=a,i.startView){case 2:case"decade":i.startView=2;break;case 1:case"year":i.startView=1;break;default:i.startView=0}switch(i.minViewMode){case 1:case"months":i.minViewMode=1;break;case 2:case"years":i.minViewMode=2;break;default:i.minViewMode=0}i.startView=Math.max(i.startView,i.minViewMode),!0!==i.multidate&&(i.multidate=Number(i.multidate)||!1,!1!==i.multidate?i.multidate=Math.max(0,i.multidate):i.multidate=1),i.multidateSeparator=String(i.multidateSeparator),i.weekStart%=7,i.weekEnd=(i.weekStart+6)%7;var s=f.parseFormat(i.format);i.startDate!==-1/0&&(i.startDate?i.startDate instanceof Date?i.startDate=this._local_to_utc(this._zero_time(i.startDate)):i.startDate=f.parseDate(i.startDate,s,i.language):i.startDate=-1/0),i.endDate!==1/0&&(i.endDate?i.endDate instanceof Date?i.endDate=this._local_to_utc(this._zero_time(i.endDate)):i.endDate=f.parseDate(i.endDate,s,i.language):i.endDate=1/0),i.daysOfWeekDisabled=i.daysOfWeekDisabled||[],t.isArray(i.daysOfWeekDisabled)||(i.daysOfWeekDisabled=i.daysOfWeekDisabled.split(/[,\s]*/)),i.daysOfWeekDisabled=t.map(i.daysOfWeekDisabled,function(t){return parseInt(t,10)});var n=String(i.orientation).toLowerCase().split(/\s+/g),r=i.orientation.toLowerCase();if(n=t.grep(n,function(t){return/^auto|left|right|top|bottom$/.test(t)}),i.orientation={x:"auto",y:"auto"},r&&"auto"!==r)if(1===n.length)switch(n[0]){case"top":case"bottom":i.orientation.y=n[0];break;case"left":case"right":i.orientation.x=n[0]}else r=t.grep(n,function(t){return/^left|right$/.test(t)}),i.orientation.x=r[0]||"auto",r=t.grep(n,function(t){return/^top|bottom$/.test(t)}),i.orientation.y=r[0]||"auto";else;},_events:[],_secondaryEvents:[],_applyEvents:function(t){for(var e,i,a,s=0;s<t.length;s++)e=t[s][0],2===t[s].length?(i=void 0,a=t[s][1]):3===t[s].length&&(i=t[s][1],a=t[s][2]),e.on(a,i)},_unapplyEvents:function(t){for(var e,i,a,s=0;s<t.length;s++)e=t[s][0],2===t[s].length?(a=void 0,i=t[s][1]):3===t[s].length&&(a=t[s][1],i=t[s][2]),e.off(i,a)},_buildEvents:function(){this.isInput?this._events=[[this.element,{focus:t.proxy(this.show,this),keyup:t.proxy(function(e){-1===t.inArray(e.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:t.proxy(this.keydown,this)}]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),{focus:t.proxy(this.show,this),keyup:t.proxy(function(e){-1===t.inArray(e.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:t.proxy(this.keydown,this)}],[this.component,{click:t.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:t.proxy(this.show,this)}]],this._events.push([this.element,"*",{blur:t.proxy(function(t){this._focused_from=t.target},this)}],[this.element,{blur:t.proxy(function(t){this._focused_from=t.target},this)}]),this._secondaryEvents=[[this.picker,{click:t.proxy(this.click,this)}],[t(window),{resize:t.proxy(this.place,this)}],[t(document),{"mousedown touchstart":t.proxy(function(t){this.element.is(t.target)||this.element.find(t.target).length||this.picker.is(t.target)||this.picker.find(t.target).length||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(e,i){var a=i||this.dates.get(-1),s=this._utc_to_local(a);this.element.trigger({type:e,date:s,dates:t.map(this.dates,this._utc_to_local),format:t.proxy(function(t,e){0===arguments.length?(t=this.dates.length-1,e=this.o.format):"string"==typeof t&&(e=t,t=this.dates.length-1),e=e||this.o.format;var i=this.dates.get(t);return f.formatDate(i,e,this.o.language)},this)})},show:function(){this.isInline||this.picker.appendTo("body"),this.picker.show(),this.place(),this._attachSecondaryEvents(),this._trigger("show")},hide:function(){this.isInline||this.picker.is(":visible")&&(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"))},remove:function(){this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date},_utc_to_local:function(t){return t&&new Date(t.getTime()+6e4*t.getTimezoneOffset())},_local_to_utc:function(t){return t&&new Date(t.getTime()-6e4*t.getTimezoneOffset())},_zero_time:function(t){return t&&new Date(t.getFullYear(),t.getMonth(),t.getDate())},_zero_utc_time:function(t){return t&&new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()))},getDates:function(){return t.map(this.dates,this._utc_to_local)},getUTCDates:function(){return t.map(this.dates,function(t){return new Date(t)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){return new Date(this.dates.get(-1))},setDates:function(){var e=t.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,e),this._trigger("changeDate"),this.setValue()},setUTCDates:function(){var e=t.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,t.map(e,this._utc_to_local)),this._trigger("changeDate"),this.setValue()},setDate:n("setDates"),setUTCDate:n("setUTCDates"),setValue:function(){var t=this.getFormattedDate();this.isInput?this.element.val(t).change():this.component&&this.element.find("input").val(t).change()},getFormattedDate:function(e){void 0===e&&(e=this.o.format);var i=this.o.language;return t.map(this.dates,function(t){return f.formatDate(t,e,i)}).join(this.o.multidateSeparator)},setStartDate:function(t){this._process_options({startDate:t}),this.update(),this.updateNavArrows()},setEndDate:function(t){this._process_options({endDate:t}),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(t){this._process_options({daysOfWeekDisabled:t}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var e=this.picker.outerWidth(),a=this.picker.outerHeight(),s=i.width(),n=i.height(),r=i.scrollTop(),h=parseInt(this.element.parents().filter(function(){return"auto"!==t(this).css("z-index")}).first().css("z-index"))+10,o=this.component?this.component.parent().offset():this.element.offset(),d=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),l=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),c=o.left,u=o.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(c-=e-l)):(this.picker.addClass("datepicker-orient-left"),o.left<0?c-=o.left-10:o.left+e>s&&(c=s-e-10));var p,f,g=this.o.orientation.y;"auto"===g&&(p=-r+o.top-a,f=r+n-(o.top+d+a),g=Math.max(p,f)===f?"top":"bottom"),this.picker.addClass("datepicker-orient-"+g),"top"===g?u+=d:u-=a+parseInt(this.picker.css("padding-top")),this.picker.css({top:u,left:c,zIndex:h})}},_allow_update:!0,update:function(){if(this._allow_update){var e=this.dates.copy(),i=[],a=!1;arguments.length?(t.each(arguments,t.proxy(function(t,e){e instanceof Date&&(e=this._local_to_utc(e)),i.push(e)},this)),a=!0):(i=(i=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val())&&this.o.multidate?i.split(this.o.multidateSeparator):[i],delete this.element.data().date),i=t.map(i,t.proxy(function(t){return f.parseDate(t,this.o.format,this.o.language)},this)),i=t.grep(i,t.proxy(function(t){return t<this.o.startDate||t>this.o.endDate||!t},this),!0),this.dates.replace(i),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate&&(this.viewDate=new Date(this.o.endDate)),a?this.setValue():i.length&&String(e)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&e.length&&this._trigger("clearDate"),this.fill()}},fillDow:function(){var t=this.o.weekStart,e="<tr>";if(this.o.calendarWeeks){var i='<th class="cw">&nbsp;</th>';e+=i,this.picker.find(".datepicker-days thead tr:first-child").prepend(i)}for(;t<this.o.weekStart+7;)e+='<th class="dow">'+p[this.o.language].daysMin[t++%7]+"</th>";e+="</tr>",this.picker.find(".datepicker-days thead").append(e)},fillMonths:function(){for(var t="",e=0;e<12;)t+='<span class="month">'+p[this.o.language].monthsShort[e++]+"</span>";this.picker.find(".datepicker-months td").html(t)},setRange:function(e){e&&e.length?this.range=t.map(e,function(t){return t.valueOf()}):delete this.range,this.fill()},getClassNames:function(e){var i=[],a=this.viewDate.getUTCFullYear(),s=this.viewDate.getUTCMonth(),n=new Date;return e.getUTCFullYear()<a||e.getUTCFullYear()===a&&e.getUTCMonth()<s?i.push("old"):(e.getUTCFullYear()>a||e.getUTCFullYear()===a&&e.getUTCMonth()>s)&&i.push("new"),this.focusDate&&e.valueOf()===this.focusDate.valueOf()&&i.push("focused"),this.o.todayHighlight&&e.getUTCFullYear()===n.getFullYear()&&e.getUTCMonth()===n.getMonth()&&e.getUTCDate()===n.getDate()&&i.push("today"),-1!==this.dates.contains(e)&&i.push("active"),(e.valueOf()<this.o.startDate||e.valueOf()>this.o.endDate||-1!==t.inArray(e.getUTCDay(),this.o.daysOfWeekDisabled))&&i.push("disabled"),this.range&&(e>this.range[0]&&e<this.range[this.range.length-1]&&i.push("range"),-1!==t.inArray(e.valueOf(),this.range)&&i.push("selected")),i},fill:function(){var e,i=new Date(this.viewDate),s=i.getUTCFullYear(),n=i.getUTCMonth(),r=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,h=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,o=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,d=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,l=p[this.o.language].today||p.en.today||"",c=p[this.o.language].clear||p.en.clear||"";this.picker.find(".datepicker-days thead th.datepicker-switch").text(p[this.o.language].months[n]+" "+s),this.picker.find("tfoot th.today").text(l).toggle(!1!==this.o.todayBtn),this.picker.find("tfoot th.clear").text(c).toggle(!1!==this.o.clearBtn),this.updateNavArrows(),this.fillMonths();var u=a(s,n-1,28),g=f.getDaysInMonth(u.getUTCFullYear(),u.getUTCMonth());u.setUTCDate(g),u.setUTCDate(g-(u.getUTCDay()-this.o.weekStart+7)%7);var v=new Date(u);v.setUTCDate(v.getUTCDate()+42),v=v.valueOf();for(var D,m=[];u.valueOf()<v;){if(u.getUTCDay()===this.o.weekStart&&(m.push("<tr>"),this.o.calendarWeeks)){var y=new Date(+u+(this.o.weekStart-u.getUTCDay()-7)%7*864e5),w=new Date(Number(y)+(11-y.getUTCDay())%7*864e5),k=new Date(Number(k=a(w.getUTCFullYear(),0,1))+(11-k.getUTCDay())%7*864e5),_=(w-k)/864e5/7+1;m.push('<td class="cw">'+_+"</td>")}if((D=this.getClassNames(u)).push("day"),this.o.beforeShowDay!==t.noop){var C=this.o.beforeShowDay(this._utc_to_local(u));void 0===C?C={}:"boolean"==typeof C?C={enabled:C}:"string"==typeof C&&(C={classes:C}),!1===C.enabled&&D.push("disabled"),C.classes&&(D=D.concat(C.classes.split(/\s+/))),C.tooltip&&(e=C.tooltip)}D=t.unique(D),m.push('<td class="'+D.join(" ")+'"'+(e?' title="'+e+'"':"")+">"+u.getUTCDate()+"</td>"),u.getUTCDay()===this.o.weekEnd&&m.push("</tr>"),u.setUTCDate(u.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(m.join(""));var T=this.picker.find(".datepicker-months").find("th:eq(1)").text(s).end().find("span").removeClass("active");t.each(this.dates,function(t,e){e.getUTCFullYear()===s&&T.eq(e.getUTCMonth()).addClass("active")}),(s<r||s>o)&&T.addClass("disabled"),s===r&&T.slice(0,h).addClass("disabled"),s===o&&T.slice(d+1).addClass("disabled"),m="",s=10*parseInt(s/10,10);var b=this.picker.find(".datepicker-years").find("th:eq(1)").text(s+"-"+(s+9)).end().find("td");s-=1;for(var U,M=t.map(this.dates,function(t){return t.getUTCFullYear()}),x=-1;x<11;x++)U=["year"],-1===x?U.push("old"):10===x&&U.push("new"),-1!==t.inArray(s,M)&&U.push("active"),(s<r||s>o)&&U.push("disabled"),m+='<span class="'+U.join(" ")+'">'+s+"</span>",s+=1;b.html(m)},updateNavArrows:function(){if(this._allow_update){var t=new Date(this.viewDate),e=t.getUTCFullYear(),i=t.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-1/0&&e<=this.o.startDate.getUTCFullYear()&&i<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()&&i>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-1/0&&e<=this.o.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&e>=this.o.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(e){e.preventDefault();var i,s,n,r=t(e.target).closest("span, td, th");if(1===r.length)switch(r[0].nodeName.toLowerCase()){case"th":switch(r[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var h=f.modes[this.viewMode].navStep*("prev"===r[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,h),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,h),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var o=new Date;o=a(o.getFullYear(),o.getMonth(),o.getDate(),0,0,0),this.showMode(-2);var d="linked"===this.o.todayBtn?null:"view";this._setDate(o,d);break;case"clear":var l;this.isInput?l=this.element:this.component&&(l=this.element.find("input")),l&&l.val("").change(),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()}break;case"span":r.is(".disabled")||(this.viewDate.setUTCDate(1),r.is(".month")?(n=1,s=r.parent().find("span").index(r),i=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(s),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(a(i,s,n))):(n=1,s=0,i=parseInt(r.text(),10)||0,this.viewDate.setUTCFullYear(i),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(a(i,s,n))),this.showMode(-1),this.fill());break;case"td":r.is(".day")&&!r.is(".disabled")&&(n=parseInt(r.text(),10)||1,i=this.viewDate.getUTCFullYear(),s=this.viewDate.getUTCMonth(),r.is(".old")?0===s?(s=11,i-=1):s-=1:r.is(".new")&&(11===s?(s=0,i+=1):s+=1),this._setDate(a(i,s,n)))}this.picker.is(":visible")&&this._focused_from&&t(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(t){var e=this.dates.contains(t);if(t?-1!==e?this.dates.remove(e):this.dates.push(t):this.dates.clear(),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(t,e){var i;e&&"date"!==e||this._toggle_multidate(t&&new Date(t)),e&&"view"!==e||(this.viewDate=t&&new Date(t)),this.fill(),this.setValue(),this._trigger("changeDate"),this.isInput?i=this.element:this.component&&(i=this.element.find("input")),i&&i.change(),!this.o.autoclose||e&&"date"!==e||this.hide()},moveMonth:function(t,e){if(t){if(!e)return t;var i,a,s=new Date(t.valueOf()),n=s.getUTCDate(),r=s.getUTCMonth(),h=Math.abs(e);if(e=e>0?1:-1,1===h)a=-1===e?function(){return s.getUTCMonth()===r}:function(){return s.getUTCMonth()!==i},i=r+e,s.setUTCMonth(i),(i<0||i>11)&&(i=(i+12)%12);else{for(var o=0;o<h;o++)s=this.moveMonth(s,e);i=s.getUTCMonth(),s.setUTCDate(n),a=function(){return i!==s.getUTCMonth()}}for(;a();)s.setUTCDate(--n),s.setUTCMonth(i);return s}},moveYear:function(t,e){return this.moveMonth(t,12*e)},dateWithinRange:function(t){return t>=this.o.startDate&&t<=this.o.endDate},keydown:function(t){if(this.picker.is(":not(:visible)"))27===t.keyCode&&this.show();else{var e,i,a,n,r=!1,h=this.focusDate||this.viewDate;switch(t.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),t.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;e=37===t.keyCode?-1:1,t.ctrlKey?(i=this.moveYear(this.dates.get(-1)||s(),e),a=this.moveYear(h,e),this._trigger("changeYear",this.viewDate)):t.shiftKey?(i=this.moveMonth(this.dates.get(-1)||s(),e),a=this.moveMonth(h,e),this._trigger("changeMonth",this.viewDate)):((i=new Date(this.dates.get(-1)||s())).setUTCDate(i.getUTCDate()+e),(a=new Date(h)).setUTCDate(h.getUTCDate()+e)),this.dateWithinRange(i)&&(this.focusDate=this.viewDate=a,this.setValue(),this.fill(),t.preventDefault());break;case 38:case 40:if(!this.o.keyboardNavigation)break;e=38===t.keyCode?-1:1,t.ctrlKey?(i=this.moveYear(this.dates.get(-1)||s(),e),a=this.moveYear(h,e),this._trigger("changeYear",this.viewDate)):t.shiftKey?(i=this.moveMonth(this.dates.get(-1)||s(),e),a=this.moveMonth(h,e),this._trigger("changeMonth",this.viewDate)):((i=new Date(this.dates.get(-1)||s())).setUTCDate(i.getUTCDate()+7*e),(a=new Date(h)).setUTCDate(h.getUTCDate()+7*e)),this.dateWithinRange(i)&&(this.focusDate=this.viewDate=a,this.setValue(),this.fill(),t.preventDefault());break;case 32:break;case 13:h=this.focusDate||this.dates.get(-1)||this.viewDate,this._toggle_multidate(h),r=!0,this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(t.preventDefault(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}if(r)this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.isInput?n=this.element:this.component&&(n=this.element.find("input")),n&&n.change()}},showMode:function(t){t&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+t))),this.picker.find(">div").hide().filter(".datepicker-"+f.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var d=function(e,i){this.element=t(e),this.inputs=t.map(i.inputs,function(t){return t.jquery?t[0]:t}),delete i.inputs,t(this.inputs).datepicker(i).bind("changeDate",t.proxy(this.dateUpdated,this)),this.pickers=t.map(this.inputs,function(e){return t(e).data("datepicker")}),this.updateDates()};d.prototype={updateDates:function(){this.dates=t.map(this.pickers,function(t){return t.getUTCDate()}),this.updateRanges()},updateRanges:function(){var e=t.map(this.dates,function(t){return t.valueOf()});t.each(this.pickers,function(t,i){i.setRange(e)})},dateUpdated:function(e){if(!this.updating){this.updating=!0;var i=t(e.target).data("datepicker").getUTCDate(),a=t.inArray(e.target,this.inputs),s=this.inputs.length;if(-1!==a){if(t.each(this.pickers,function(t,e){e.getUTCDate()||e.setUTCDate(i)}),i<this.dates[a])for(;a>=0&&i<this.dates[a];)this.pickers[a--].setUTCDate(i);else if(i>this.dates[a])for(;a<s&&i>this.dates[a];)this.pickers[a++].setUTCDate(i);this.updateDates(),delete this.updating}}},remove:function(){t.map(this.pickers,function(t){t.remove()}),delete this.element.data().datepicker}};var l=t.fn.datepicker;t.fn.datepicker=function(e){var i,a=Array.apply(null,arguments);return a.shift(),this.each(function(){var s=t(this),n=s.data("datepicker"),r="object"==typeof e&&e;if(!n){var h=function(e,i){var a=t(e).data(),s={},n=new RegExp("^"+i.toLowerCase()+"([A-Z])");function r(t,e){return e.toLowerCase()}for(var h in i=new RegExp("^"+i.toLowerCase()),a)i.test(h)&&(s[h.replace(n,r)]=a[h]);return s}(this,"date"),l=function(e){var i={};if(p[e]||(e=e.split("-")[0],p[e])){var a=p[e];return t.each(u,function(t,e){e in a&&(i[e]=a[e])}),i}}(t.extend({},c,h,r).language),f=t.extend({},c,l,h,r);if(s.is(".input-daterange")||f.inputs){var g={inputs:f.inputs||s.find("input").toArray()};s.data("datepicker",n=new d(this,t.extend(f,g)))}else s.data("datepicker",n=new o(this,f))}if("string"==typeof e&&"function"==typeof n[e]&&void 0!==(i=n[e].apply(n,a)))return!1}),void 0!==i?i:this};var c=t.fn.datepicker.defaults={autoclose:!1,beforeShowDay:t.noop,calendarWeeks:!1,clearBtn:!1,daysOfWeekDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0},u=t.fn.datepicker.locale_opts=["format","rtl","weekStart"];t.fn.datepicker.Constructor=o;var p=t.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},f={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},getDaysInMonth:function(t,e){return[31,f.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(t){var e=t.replace(this.validParts,"\0").split("\0"),i=t.match(this.validParts);if(!e||!e.length||!i||0===i.length)throw new Error("Invalid date format.");return{separators:e,parts:i}},parseDate:function(e,i,s){if(e){if(e instanceof Date)return e;"string"==typeof i&&(i=f.parseFormat(i));var n,r,h,d=/([\-+]\d+)([dmwy])/,l=e.match(/([\-+]\d+)([dmwy])/g);if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)){for(e=new Date,h=0;h<l.length;h++)switch(n=d.exec(l[h]),r=parseInt(n[1]),n[2]){case"d":e.setUTCDate(e.getUTCDate()+r);break;case"m":e=o.prototype.moveMonth.call(o.prototype,e,r);break;case"w":e.setUTCDate(e.getUTCDate()+7*r);break;case"y":e=o.prototype.moveYear.call(o.prototype,e,r)}return a(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),0,0,0)}l=e&&e.match(this.nonpunctuation)||[],e=new Date;var c,u,g={},v=["yyyy","yy","M","MM","m","mm","d","dd"],D={yyyy:function(t,e){return t.setUTCFullYear(e)},yy:function(t,e){return t.setUTCFullYear(2e3+e)},m:function(t,e){if(isNaN(t))return t;for(e-=1;e<0;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!==e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}};D.M=D.MM=D.mm=D.m,D.dd=D.d,e=a(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0);var m=i.parts.slice();if(l.length!==m.length&&(m=t(m).filter(function(e,i){return-1!==t.inArray(i,v)}).toArray()),l.length===m.length){var y,w,k;for(h=0,y=m.length;h<y;h++){if(c=parseInt(l[h],10),n=m[h],isNaN(c))switch(n){case"MM":u=t(p[s].months).filter(_),c=t.inArray(u[0],p[s].months)+1;break;case"M":u=t(p[s].monthsShort).filter(_),c=t.inArray(u[0],p[s].monthsShort)+1}g[n]=c}for(h=0;h<v.length;h++)(k=v[h])in g&&!isNaN(g[k])&&(w=new Date(e),D[k](w,g[k]),isNaN(w)||(e=w))}return e}function _(){var t=this.slice(0,l[h].length);return t===l[h].slice(0,t.length)}},formatDate:function(e,i,a){if(!e)return"";"string"==typeof i&&(i=f.parseFormat(i));var s={d:e.getUTCDate(),D:p[a].daysShort[e.getUTCDay()],DD:p[a].days[e.getUTCDay()],m:e.getUTCMonth()+1,M:p[a].monthsShort[e.getUTCMonth()],MM:p[a].months[e.getUTCMonth()],yy:e.getUTCFullYear().toString().substring(2),yyyy:e.getUTCFullYear()};s.dd=(s.d<10?"0":"")+s.d,s.mm=(s.m<10?"0":"")+s.m,e=[];for(var n=t.extend([],i.separators),r=0,h=i.parts.length;r<=h;r++)n.length&&e.push(n.shift()),e.push(s[i.parts[r]]);return e.join("")},headTemplate:'<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};f.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+f.headTemplate+"<tbody></tbody>"+f.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+f.headTemplate+f.contTemplate+f.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+f.headTemplate+f.contTemplate+f.footTemplate+"</table></div></div>",t.fn.datepicker.DPGlobal=f,t.fn.datepicker.noConflict=function(){return t.fn.datepicker=l,this},t(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(e){var i=t(this);i.data("datepicker")||(e.preventDefault(),i.datepicker("show"))}),t(function(){t('[data-provide="datepicker-inline"]').datepicker()})}(window.jQuery);
