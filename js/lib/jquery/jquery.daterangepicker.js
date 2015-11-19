!function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("moment")):e(jQuery,moment)}(function(e,t){e.dateRangePickerLanguages={"default":{selected:"Selected:",day:"Day",days:"Days",apply:"Close","week-1":"mo","week-2":"tu","week-3":"we","week-4":"th","week-5":"fr","week-6":"sa","week-7":"su","week-number":"W","month-name":["january","february","march","april","may","june","july","august","september","october","november","december"],shortcuts:"Shortcuts","custom-values":"Custom Values",past:"Past",following:"Following",previous:"Previous","prev-week":"Week","prev-month":"Month","prev-year":"Year",next:"Next","next-week":"Week","next-month":"Month","next-year":"Year","less-than":"Date range should not be more than %d days","more-than":"Date range should not be less than %d days","default-more":"Please select a date range longer than %d days","default-single":"Please select a date","default-less":"Please select a date range less than %d days","default-range":"Please select a date range between %d and %d days","default-default":"Please select a date range",time:"Time",hour:"Hour",minute:"Minute"},az:{selected:"Seçildi:",day:" gün",days:" gün",apply:"tətbiq","week-1":"1","week-2":"2","week-3":"3","week-4":"4","week-5":"5","week-6":"6","week-7":"7","month-name":["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"],shortcuts:"Qısayollar",past:"Keçmiş",following:"Növbəti",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Öncəki həftə","prev-month":"Öncəki ay","prev-year":"Öncəki il",next:"&nbsp;&nbsp;&nbsp;","next-week":"Növbəti həftə","next-month":"Növbəti ay","next-year":"Növbəti il","less-than":"Tarix aralığı %d gündən çox olmamalıdır","more-than":"Tarix aralığı %d gündən az olmamalıdır","default-more":"%d gündən çox bir tarix seçin","default-single":"Tarix seçin","default-less":"%d gündən az bir tarix seçin","default-range":"%d və %d gün aralığında tarixlər seçin","default-default":"Tarix aralığı seçin"},cn:{selected:"已选择:",day:"天",days:"天",apply:"确定","week-1":"一","week-2":"二","week-3":"三","week-4":"四","week-5":"五","week-6":"六","week-7":"日","week-number":"周","month-name":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortcuts:"快捷选择",past:"过去",following:"将来",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"上周","prev-month":"上个月","prev-year":"去年",next:"&nbsp;&nbsp;&nbsp;","next-week":"下周","next-month":"下个月","next-year":"明年","less-than":"所选日期范围不能大于%d天","more-than":"所选日期范围不能小于%d天","default-more":"请选择大于%d天的日期范围","default-less":"请选择小于%d天的日期范围","default-range":"请选择%d天到%d天的日期范围","default-single":"请选择一个日期","default-default":"请选择一个日期范围",time:"时间",hour:"小时",minute:"分钟"},cz:{selected:"Vybráno:",day:"Den",days:"Dny",apply:"Zavřít","week-1":"po","week-2":"út","week-3":"st","week-4":"čt","week-5":"pá","week-6":"so","week-7":"ne","month-name":["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],shortcuts:"Zkratky",past:"po",following:"následující",previous:"předchozí","prev-week":"týden","prev-month":"měsíc","prev-year":"rok",next:"další","next-week":"týden","next-month":"měsíc","next-year":"rok","less-than":"Rozsah data by neměl být větší než %d dnů","more-than":"Rozsah data by neměl být menší než %d dnů","default-more":"Prosím zvolte rozsah data větší než %d dnů","default-single":"Prosím zvolte datum","default-less":"Prosím zvolte rozsah data menší než %d dnů","default-range":"Prosím zvolte rozsah data mezi %d a %d dny","default-default":"Prosím zvolte rozsah data"},de:{selected:"Auswahl:",day:"Tag",days:"Tage",apply:"Schließen","week-1":"mo","week-2":"di","week-3":"mi","week-4":"do","week-5":"fr","week-6":"sa","week-7":"so","month-name":["januar","februar","märz","april","mai","juni","juli","august","september","oktober","november","dezember"],shortcuts:"Schnellwahl",past:"Vorherige",following:"Folgende",previous:"Vorherige","prev-week":"Woche","prev-month":"Monat","prev-year":"Jahr",next:"Nächste","next-week":"Woche","next-month":"Monat","next-year":"Jahr","less-than":"Datumsbereich darf nicht größer sein als %d Tage","more-than":"Datumsbereich darf nicht kleiner sein als %d Tage","default-more":"Bitte mindestens %d Tage auswählen","default-single":"Bitte ein Datum auswählen","default-less":"Bitte weniger als %d Tage auswählen","default-range":"Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen","default-default":"Bitte ein Start- und Enddatum auswählen",Time:"Zeit",hour:"Stunde",minute:"Minute"},es:{selected:"Seleccionado:",day:"Dia",days:"Dias",apply:"Cerrar","week-1":"lu","week-2":"ma","week-3":"mi","week-4":"ju","week-5":"vi","week-6":"sa","week-7":"do","month-name":["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],shortcuts:"Accesos directos",past:"Pasado",following:"Siguiente",previous:"Anterior","prev-week":"Semana","prev-month":"Mes","prev-year":"Año",next:"Siguiente","next-week":"Semana","next-month":"Mes","next-year":"Año","less-than":"El rango no deberia ser mayor de %d dias","more-than":"El rango no deberia ser menor de %d dias","default-more":"Por favor selecciona un rango mayor a %d dias","default-single":"Por favor selecciona un dia","default-less":"Por favor selecciona un rango menor a %d dias","default-range":"Por favor selecciona un rango entre %d y %d dias","default-default":"Por favor selecciona un rango de fechas."},fr:{selected:"Sélection:",day:"Jour",days:"Jours",apply:"Fermer","week-1":"lu","week-2":"ma","week-3":"me","week-4":"je","week-5":"ve","week-6":"sa","week-7":"di","month-name":["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortcuts:"Raccourcis",past:"Passé",following:"Suivant",previous:"Précédent","prev-week":"Semaine","prev-month":"Mois","prev-year":"Année",next:"Suivant","next-week":"Semaine","next-month":"Mois","next-year":"Année","less-than":"L'intervalle ne doit pas être supérieure à %d jours","more-than":"L'intervalle ne doit pas être inférieure à %d jours","default-more":"Merci de choisir une intervalle supérieure à %d jours","default-single":"Merci de choisir une date","default-less":"Merci de choisir une intervalle inférieure %d jours","default-range":"Merci de choisir une intervalle comprise entre %d et %d jours","default-default":"Merci de choisir une date"},hu:{selected:"Kiválasztva:",day:"Nap",days:"Nap",apply:"Ok","week-1":"h","week-2":"k","week-3":"sz","week-4":"cs","week-5":"p","week-6":"sz","week-7":"v","month-name":["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],shortcuts:"Gyorsválasztó",past:"Múlt",following:"Következő",previous:"Előző","prev-week":"Hét","prev-month":"Hónap","prev-year":"Év",next:"Következő","next-week":"Hét","next-month":"Hónap","next-year":"Év","less-than":"A kiválasztás nem lehet több %d napnál","more-than":"A kiválasztás nem lehet több %d napnál","default-more":"Válassz ki egy időszakot ami hosszabb mint %d nap","default-single":"Válassz egy napot","default-less":"Válassz ki egy időszakot ami rövidebb mint %d nap","default-range":"Válassz ki egy %d - %d nap hosszú időszakot","default-default":"Válassz ki egy időszakot"},it:{selected:"Selezionati:",day:"Giorno",days:"Giorni",apply:"Chiudi","week-1":"lu","week-2":"ma","week-3":"me","week-4":"gi","week-5":"ve","week-6":"sa","week-7":"do","month-name":["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],shortcuts:"Scorciatoie",past:"Scorso",following:"Successivo",previous:"Precedente","prev-week":"Settimana","prev-month":"Mese","prev-year":"Anno",next:"Prossimo","next-week":"Settimana","next-month":"Mese","next-year":"Anno","less-than":"L'intervallo non dev'essere maggiore di %d giorni","more-than":"L'intervallo non dev'essere minore di %d giorni","default-more":"Seleziona un intervallo maggiore di %d giorni","default-single":"Seleziona una data","default-less":"Seleziona un intervallo minore di %d giorni","default-range":"Seleziona un intervallo compreso tra i %d e i %d giorni","default-default":"Seleziona un intervallo di date"},no:{selected:"Valgt:",day:"Dag",days:"Dager",apply:"Lukk","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lø","week-7":"sø","month-name":["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],shortcuts:"Snarveier","custom-values":"Egendefinerte Verdier",past:"Over",following:"Følger",previous:"Forrige","prev-week":"Uke","prev-month":"Måned","prev-year":"År",next:"Neste","next-week":"Uke","next-month":"Måned","next-year":"År","less-than":"Datoperioden skal ikkje være lengre enn %d dager","more-than":"Datoperioden skal ikkje være kortere enn %d dager","default-more":"Vennligst velg ein datoperiode lengre enn %d dager","default-single":"Vennligst velg ein dato","default-less":"Vennligst velg ein datoperiode mindre enn %d dager","default-range":"Vennligst velg ein datoperiode mellom %d og %d dager","default-default":"Vennligst velg ein datoperiode",time:"Tid",hour:"Time",minute:"Minutter"},nl:{selected:"Geselecteerd:",day:"Dag",days:"Dagen",apply:"Ok","week-1":"ma","week-2":"di","week-3":"wo","week-4":"do","week-5":"vr","week-6":"za","week-7":"zo","month-name":["januari","februari","maart","april","mei","juni","juli","augustus","september","october","november","december"],shortcuts:"Snelkoppelingen","custom-values":"Aangepaste waarden",past:"Verleden",following:"Komend",previous:"Vorige","prev-week":"Week","prev-month":"Maand","prev-year":"Jaar",next:"Volgende","next-week":"Week","next-month":"Maand","next-year":"Jaar","less-than":"Interval moet langer dan %d dagen zijn","more-than":"Interval mag niet minder dan %d dagen zijn","default-more":"Selecteer een interval langer dan %dagen","default-single":"Selecteer een datum","default-less":"Selecteer een interval minder dan %d dagen","default-range":"Selecteer een interval tussen %d en %d dagen","default-default":"Selecteer een interval",time:"Tijd",hour:"Uur",minute:"Minuut"},ru:{selected:"Выбрано:",day:"День",days:"Дней",apply:"Закрыть","week-1":"пн","week-2":"вт","week-3":"ср","week-4":"чт","week-5":"пт","week-6":"сб","week-7":"вс","month-name":["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],shortcuts:"Быстрый выбор",past:"Прошедшие",following:"Следующие",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Неделя","prev-month":"Месяц","prev-year":"Год",next:"&nbsp;&nbsp;&nbsp;","next-week":"Неделя","next-month":"Месяц","next-year":"Год","less-than":"Диапазон не может быть больше %d дней","more-than":"Диапазон не может быть меньше %d дней","default-more":"Пожалуйста выберите диапазон больше %d дней","default-single":"Пожалуйста выберите дату","default-less":"Пожалуйста выберите диапазон меньше %d дней","default-range":"Пожалуйста выберите диапазон между %d и %d днями","default-default":"Пожалуйста выберите диапазон"},pl:{selected:"Wybrany:",day:"Dzień",days:"Dni",apply:"Zamknij","week-1":"pon","week-2":"wt","week-3":"śr","week-4":"czw","week-5":"pt","week-6":"so","week-7":"nd","month-name":["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],shortcuts:"Skróty","custom-values":"Niestandardowe wartości",past:"Przeszłe",following:"Następne",previous:"Poprzednie","prev-week":"tydzień","prev-month":"miesiąc","prev-year":"rok",next:"Następny","next-week":"tydzień","next-month":"miesiąc","next-year":"rok","less-than":"Okres nie powinien być dłuższy niż %d dni","more-than":"Okres nie powinien być krótszy niż  %d ni","default-more":"Wybierz okres dłuższy niż %d dni","default-single":"Wybierz datę","default-less":"Wybierz okres krótszy niż %d dni","default-range":"Wybierz okres trwający od %d do %d dni","default-default":"Wybierz okres",time:"Czas",hour:"Godzina",minute:"Minuta"}},e.fn.dateRangePicker=function(a){function n(t,a){return t.target==a||void 0!=a.childNodes&&e.inArray(t.target,a.childNodes)>=0}function s(){function s(t){var n=e(t).parents("table").hasClass("month2"),s=n?a.month2:a.month1;s=N(s),!a.singleMonth&&!a.singleDate&&!n&&A(s,a.month2)>=0||$(s)||(S(s,n?"month2":"month1"),I())}function i(e){var t=N(a.month1),n=N(a.month2);$(n)||!a.singleDate&&A(t,n)>=0||(S(t,"month1"),S(n,"month2"),Y())}function o(t){var n=e(t).parents("table").hasClass("month2"),s=n?a.month2:a.month1;s=B(s),n&&A(s,a.month1)<=0||$(s)||(S(s,n?"month2":"month1"),I())}function d(e){var t=B(a.month1),n=B(a.month2);$(t)||!a.singleDate&&A(n,t)<=0||(S(n,"month2"),S(t,"month1"),Y())}var u=this;if(e(this).data("date-picker-opened"))return void V();e(this).data("date-picker-opened",!0),X=F().hide(),X.append('<div class="date-range-length-tip"></div>'),X.delegate(".day","mouseleave",function(){X.find(".date-range-length-tip").hide()}),e(a.container).append(X),a.inline?X.addClass("inline-wrapper"):r(),a.alwaysOpen&&X.find(".apply-btn").hide();var m=a.defaultTime?a.defaultTime:new Date;a.lookBehind?(a.startDate&&A(m,a.startDate)<0&&(m=N(t(a.startDate).toDate())),a.endDate&&A(m,a.endDate)>0&&(m=t(a.endDate).toDate()),S(B(m),"month1"),S(m,"month2")):(a.startDate&&A(m,a.startDate)<0&&(m=t(a.startDate).toDate()),a.endDate&&A(N(m),a.endDate)>0&&(m=B(t(a.endDate).toDate())),S(m,"month1"),S(N(m),"month2")),a.singleDate&&(a.startDate&&A(m,a.startDate)<0&&(m=t(a.startDate).toDate()),a.endDate&&A(m,a.endDate)>0&&(m=t(a.endDate).toDate()),S(m,"month1")),a.time.enabled&&(a.startDate&&a.endDate||a.start&&a.end?(j(t(a.start||a.startDate).toDate(),"time1"),j(t(a.end||a.endDate).toDate(),"time2")):(j(m,"time1"),j(m,"time2")));var c="";c=Z(a.singleDate?"default-single":a.minDays&&a.maxDays?"default-range":a.minDays?"default-more":a.maxDays?"default-less":"default-default"),X.find(".default-top").html(c.replace(/\%d/,a.minDays).replace(/\%d/,a.maxDays)),a.singleMonth?X.addClass("single-month"):X.addClass("two-months"),setTimeout(function(){l(),ae=!0},0),X.click(function(e){e.stopPropagation()}),e(document).bind("click.datepicker",function(e){n(e,u[0])||X.is(":visible")&&V()}),X.find(".next").click(function(){a.stickyMonths?i(this):s(this)}),X.find(".prev").click(function(){a.stickyMonths?d(this):o(this)}),X.delegate(".day","click",function(t){g(e(this))}),X.delegate(".day","mouseenter",function(t){b(e(this))}),X.delegate(".week-number","click",function(t){k(e(this))}),X.attr("unselectable","on").css("user-select","none").bind("selectstart",function(e){return e.preventDefault(),!1}),X.find(".apply-btn").click(function(){V();var t=W(new Date(a.start))+a.separator+W(new Date(a.end));e(u).trigger("datepicker-apply",{value:t,date1:new Date(a.start),date2:new Date(a.end)})}),X.find("[custom]").click(function(){var t=e(this).attr("custom");a.start=!1,a.end=!1,X.find(".day.checked").removeClass("checked"),a.setValue.call(se,t),M(),z(!0),Y(),a.autoClose&&V()}),X.find("[shortcut]").click(function(){var t=e(this).attr("shortcut"),n=new Date,s=!1;if(-1!=t.indexOf("day")){var r=parseInt(t.split(",",2)[1],10);s=new Date((new Date).getTime()+864e5*r),n=new Date(n.getTime()+864e5*(r>0?1:-1))}else if(-1!=t.indexOf("week")){var i=-1!=t.indexOf("prev,")?-1:1;if(1==i)var o="monday"==a.startOfWeek?1:0;else var o="monday"==a.startOfWeek?0:6;for(n=new Date(n.getTime()-864e5);n.getDay()!=o;)n=new Date(n.getTime()+864e5*i);s=new Date(n.getTime()+864e5*i*6)}else if(-1!=t.indexOf("month")){var i=-1!=t.indexOf("prev,")?-1:1;s=1==i?N(n):B(n),s.setDate(1),n=N(s),n.setDate(1),n=new Date(n.getTime()-864e5)}else if(-1!=t.indexOf("year")){var i=-1!=t.indexOf("prev,")?-1:1;s=new Date,s.setFullYear(n.getFullYear()+i),s.setMonth(0),s.setDate(1),n.setFullYear(n.getFullYear()+i),n.setMonth(11),n.setDate(31)}else if("custom"==t){var d=e(this).html();if(a.customShortcuts&&a.customShortcuts.length>0)for(var l=0;l<a.customShortcuts.length;l++){var u=a.customShortcuts[l];if(u.name==d){var m=[];m=u.dates.call(),m&&2==m.length&&(s=m[0],n=m[1]),m&&1==m.length&&(movetodate=m[0],S(movetodate,"month1"),S(N(movetodate),"month2"),I());break}}}s&&n&&(T(s,n),M())}),X.find(".time1 input[type=range]").bind("change mousemove",function(t){var a=t.target,n="hour"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0,s="minute"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0;h("time1",n,s)}),X.find(".time2 input[type=range]").bind("change mousemove",function(t){var a=t.target,n="hour"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0,s="minute"==a.name?e(a).val().replace(/^(\d{1})$/,"0$1"):void 0;h("time2",n,s)})}function r(){if(!a.inline){var t=e(ne).offset();if("relative"==e(a.container).css("position")){var n=e(a.container).offset();X.css({top:t.top-n.top+e(ne).outerHeight()+4,left:t.left-n.left})}else X.css({top:4+t.top+e(ne).outerHeight()+parseInt(e("body").css("border-top")||0,10),left:t.left})}}function i(){return X}function o(t){r(),d(),X.slideDown(t,function(){e(ne).trigger("datepicker-opened",{relatedTarget:X})}),e(ne).trigger("datepicker-open",{relatedTarget:X}),I(),l()}function d(){var e=a.getValue.call(se),n=e?e.split(a.separator):"";if(n&&(1==n.length&&a.singleDate||n.length>=2)){var s=a.format;s.match(/Do/)&&(s=s.replace(/Do/,"D"),n[0]=n[0].replace(/(\d+)(th|nd|st)/,"$1"),n.length>=2&&(n[1]=n[1].replace(/(\d+)(th|nd|st)/,"$1"))),ae=!1,n.length>=2?T(t(n[0],s,t.locale(a.language)).toDate(),t(n[1],s,t.locale(a.language)).toDate()):1==n.length&&a.singleDate&&O(t(n[0],s,t.locale(a.language)).toDate()),ae=!0}}function l(){var e=X.find(".gap").css("margin-left");e&&(e=parseInt(e));var t=X.find(".month1").width(),a=X.find(".gap").width()+(e?2*e:0),n=X.find(".month2").width();X.find(".month-wrapper").width(t+a+n)}function u(e,a){X.find("."+e+" input[type=range].hour-range").val(t(a).hours()),X.find("."+e+" input[type=range].minute-range").val(t(a).minutes()),h(e,t(a).format("HH"),t(a).format("mm"))}function m(e,n){a[e]=parseInt(t(parseInt(n)).startOf("day").add(t(a[e+"Time"]).format("HH"),"h").add(t(a[e+"Time"]).format("mm"),"m").valueOf())}function c(){u("time1",a.start),u("time2",a.end)}function h(e,n,s){function r(e,t){var r=t.format("HH"),i=t.format("mm");a[e]=t.startOf("day").add(n||r,"h").add(s||i,"m").valueOf()}switch(n&&X.find("."+e+" .hour-val").text(n),s&&X.find("."+e+" .minute-val").text(s),e){case"time1":a.start&&r("start",t(a.start)),r("startTime",t(a.startTime||t().valueOf()));break;case"time2":a.end&&r("end",t(a.end)),r("endTime",t(a.endTime||t().valueOf()))}M(),z(),Y()}function f(){a.start=!1,a.end=!1,X.find(".day.checked").removeClass("checked"),X.find(".day.last-date-selected").removeClass("last-date-selected"),X.find(".day.first-date-selected").removeClass("first-date-selected"),a.setValue.call(se,""),M(),z(),Y()}function p(e){var n=e;return"week-range"===a.batchMode?n="monday"===a.startOfWeek?t(parseInt(e)).startOf("isoweek").valueOf():t(parseInt(e)).startOf("week").valueOf():"month-range"===a.batchMode&&(n=t(parseInt(e)).startOf("month").valueOf()),n}function v(e){var n=e;return"week-range"===a.batchMode?n="monday"===a.startOfWeek?t(parseInt(e)).endOf("isoweek").valueOf():t(parseInt(e)).endOf("week").valueOf():"month"===a.batchMode&&(n=t(parseInt(e)).endOf("month").valueOf()),n}function g(n){if(!n.hasClass("invalid")){var s=n.attr("time");if(n.addClass("checked"),a.singleDate?(a.start=s,a.end=!1):"week"===a.batchMode?"monday"===a.startOfWeek?(a.start=t(parseInt(s)).startOf("isoweek").valueOf(),a.end=t(parseInt(s)).endOf("isoweek").valueOf()):(a.end=t(parseInt(s)).endOf("week").valueOf(),a.start=t(parseInt(s)).startOf("week").valueOf()):"workweek"===a.batchMode?(a.start=t(parseInt(s)).day(1).valueOf(),a.end=t(parseInt(s)).day(5).valueOf()):"weekend"===a.batchMode?(a.start=t(parseInt(s)).day(6).valueOf(),a.end=t(parseInt(s)).day(7).valueOf()):"month"===a.batchMode?(a.start=t(parseInt(s)).startOf("month").valueOf(),a.end=t(parseInt(s)).endOf("month").valueOf()):a.start&&a.end||!a.start&&!a.end?(a.start=p(s),a.end=!1):a.start&&(a.end=v(s),a.time.enabled&&m("end",a.end)),a.time.enabled&&(a.start&&m("start",a.start),a.end&&m("end",a.end)),!a.singleDate&&a.start&&a.end&&a.start>a.end){var r=a.end;a.end=v(a.start),a.start=p(r),a.time.enabled&&a.swapTime&&c()}a.start=parseInt(a.start),a.end=parseInt(a.end),D(),a.start&&!a.end&&(e(ne).trigger("datepicker-first-date-selected",{date1:new Date(a.start)}),b(n)),w(s),M(),z(),Y(),x()}}function k(e){var n=parseInt(e.attr("data-start-time"),10);if(a.startWeek){X.find(".week-number-selected").removeClass("week-number-selected");var s=new Date(n<a.startWeek?n:a.startWeek),r=new Date(n<a.startWeek?a.startWeek:n);a.startWeek=!1,a.start=t(s).day("monday"==a.startOfWeek?1:0).toDate(),a.end=t(r).day("monday"==a.startOfWeek?7:6).toDate()}else{a.startWeek=n,e.addClass("week-number-selected");var s=new Date(n);a.start=t(s).day("monday"==a.startOfWeek?1:0).toDate(),a.end=t(s).day("monday"==a.startOfWeek?7:6).toDate()}w(),M(),z(),Y(),x()}function y(e){if(e=parseInt(e,10),a.startDate&&L(e,a.startDate)<0)return!1;if(a.endDate&&L(e,a.endDate)>0)return!1;if(a.start&&!a.end&&!a.singleDate){if(a.maxDays>0&&C(e,a.start)>a.maxDays)return!1;if(a.minDays>0&&C(e,a.start)<a.minDays)return!1;if(a.selectForward&&e<a.start)return!1;if(a.selectBackward&&e>a.start)return!1;if(a.beforeShowDay&&"function"==typeof a.beforeShowDay){for(var t=!0,n=e;C(n,a.start)>1;){var s=a.beforeShowDay(new Date(n));if(!s[0]){t=!1;break}n>a.start&&(n-=864e5),n<a.start&&(n+=864e5)}if(!t)return!1}}return!0}function w(){return X.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"),a.start&&!a.end&&X.find(".day.toMonth.valid").each(function(){var t=parseInt(e(this).attr("time"),10);y(t)?e(this).addClass("valid tmp").removeClass("invalid"):e(this).addClass("invalid tmp").removeClass("valid")}),!0}function b(t){var n=parseInt(t.attr("time")),s="";if(t.hasClass("has-tooltip")&&t.attr("data-tooltip"))s='<span style="white-space:nowrap">'+t.attr("data-tooltip")+"</span>";else if(!t.hasClass("invalid"))if(a.singleDate)X.find(".day.hovering").removeClass("hovering"),t.addClass("hovering");else if(X.find(".day").each(function(){var t=parseInt(e(this).attr("time"));a.start,a.end,t==n?e(this).addClass("hovering"):e(this).removeClass("hovering"),a.start&&!a.end&&(a.start<t&&n>=t||a.start>t&&t>=n)?e(this).addClass("hovering"):e(this).removeClass("hovering")}),a.start&&!a.end){var r=C(n,a.start);a.hoveringTooltip&&("function"==typeof a.hoveringTooltip?s=a.hoveringTooltip(r,a.start,n):a.hoveringTooltip===!0&&r>1&&(s=r+" "+Z("days")))}if(s){var i=t.offset(),o=X.offset(),d=i.left-o.left,l=i.top-o.top;d+=t.width()/2;var u=X.find(".date-range-length-tip"),m=u.css({visibility:"hidden",display:"none"}).html(s).width(),c=u.height();d-=m/2,l-=c,setTimeout(function(){u.css({left:d,top:l,display:"block",visibility:"visible"})},10)}else X.find(".date-range-length-tip").hide()}function D(){X.find(".day.hovering").removeClass("hovering"),X.find(".date-range-length-tip").hide()}function x(){a.singleDate===!0?ae&&a.start&&a.autoClose&&V():ae&&a.start&&a.end&&a.autoClose&&V()}function M(){var e=Math.ceil((a.end-a.start)/864e5)+1;a.singleDate?a.start&&!a.end?X.find(".drp_top-bar").removeClass("error").addClass("normal"):X.find(".drp_top-bar").removeClass("error").removeClass("normal"):a.maxDays&&e>a.maxDays?(a.start=!1,a.end=!1,X.find(".day").removeClass("checked"),X.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(Z("less-than").replace("%d",a.maxDays))):a.minDays&&e<a.minDays?(a.start=!1,a.end=!1,X.find(".day").removeClass("checked"),X.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(Z("more-than").replace("%d",a.minDays))):a.start||a.end?X.find(".drp_top-bar").removeClass("error").addClass("normal"):X.find(".drp_top-bar").removeClass("error").removeClass("normal"),a.singleDate&&a.start&&!a.end||!a.singleDate&&a.start&&a.end?X.find(".apply-btn").removeClass("disabled"):X.find(".apply-btn").addClass("disabled"),a.batchMode&&(a.start&&a.startDate&&L(a.start,a.startDate)<0||a.end&&a.endDate&&L(a.end,a.endDate)>0)&&(a.start=!1,a.end=!1,X.find(".day").removeClass("checked"))}function z(t,n){if(X.find(".start-day").html("..."),X.find(".end-day").html("..."),X.find(".selected-days").hide(),a.start&&X.find(".start-day").html(W(new Date(parseInt(a.start)))),a.end&&X.find(".end-day").html(W(new Date(parseInt(a.end)))),a.start&&a.singleDate){X.find(".apply-btn").removeClass("disabled");var s=W(new Date(a.start));a.setValue.call(se,s,W(new Date(a.start)),W(new Date(a.end))),ae&&e(ne).trigger("datepicker-change",{value:s,date1:new Date(a.start)})}else if(a.start&&a.end){X.find(".selected-days").show().find(".selected-days-num").html(C(a.end,a.start)),X.find(".apply-btn").removeClass("disabled");var s=W(new Date(a.start))+a.separator+W(new Date(a.end));a.setValue.call(se,s,W(new Date(a.start)),W(new Date(a.end))),ae&&!n&&e(ne).trigger("datepicker-change",{value:s,date1:new Date(a.start),date2:new Date(a.end)})}else t?X.find(".apply-btn").removeClass("disabled"):X.find(".apply-btn").addClass("disabled")}function C(e,t){return Math.abs(E(e)-E(t))+1}function T(e,t,n){if(e.getTime()>t.getTime()){var s=t;t=e,e=s,s=null}var r=!0;return a.startDate&&L(e,a.startDate)<0&&(r=!1),a.endDate&&L(t,a.endDate)>0&&(r=!1),r?(a.start=e.getTime(),a.end=t.getTime(),a.time.enabled&&(u("time1",e),u("time2",t)),(a.stickyMonths||L(e,t)>0&&0==A(e,t))&&(a.lookBehind?e=B(t):t=N(e)),a.stickyMonths&&A(t,a.endDate)>0&&(e=B(e),t=B(t)),a.stickyMonths||0==A(e,t)&&(a.lookBehind?e=B(t):t=N(e)),S(e,"month1"),S(t,"month2"),I(),M(),z(!1,n),void x()):(S(a.startDate,"month1"),S(N(a.startDate),"month2"),void I())}function O(e){var t=!0;return a.startDate&&L(e,a.startDate)<0&&(t=!1),a.endDate&&L(e,a.endDate)>0&&(t=!1),t?(a.start=e.getTime(),a.time.enabled&&u("time1",e),S(e,"month1"),I(),z(),void x()):void S(a.startDate,"month1")}function Y(){(a.start||a.end)&&(X.find(".day").each(function(){var n=parseInt(e(this).attr("time")),s=a.start,r=a.end;a.time.enabled&&(n=t(n).startOf("day").valueOf(),s=t(s||t().valueOf()).startOf("day").valueOf(),r=t(r||t().valueOf()).startOf("day").valueOf()),a.start&&a.end&&r>=n&&n>=s||a.start&&!a.end&&t(s).format("YYYY-MM-DD")==t(n).format("YYYY-MM-DD")?e(this).addClass("checked"):e(this).removeClass("checked"),a.start&&t(s).format("YYYY-MM-DD")==t(n).format("YYYY-MM-DD")?e(this).addClass("first-date-selected"):e(this).removeClass("first-date-selected"),a.end&&t(r).format("YYYY-MM-DD")==t(n).format("YYYY-MM-DD")?e(this).addClass("last-date-selected"):e(this).removeClass("last-date-selected")}),X.find(".week-number").each(function(){e(this).attr("data-start-time")==a.startWeek&&e(this).addClass("week-number-selected")}))}function S(e,n){e=t(e).toDate();var s=P(e.getMonth());X.find("."+n+" .month-name").html(s+" "+e.getFullYear()),X.find("."+n+" tbody").html(K(e)),a[n]=e,w()}function j(e,t){X.find("."+t).append(R()),u(t,e)}function P(e){return Z("month-name")[e]}function W(e){return t(e).format(a.format)}function I(){Y();var e=parseInt(t(a.month1).format("YYYYMM")),n=parseInt(t(a.month2).format("YYYYMM")),s=Math.abs(e-n),r=s>1&&89!=s;r?X.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility","visible"):X.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility","hidden");var i=X.find("table.month1").height(),o=X.find("table.month2").height();X.find(".gap").height(Math.max(i,o)+10)}function V(){a.alwaysOpen||(e(X).slideUp(a.duration,function(){e(ne).data("date-picker-opened",!1),e(ne).trigger("datepicker-closed",{relatedTarget:X})}),e(ne).trigger("datepicker-close",{relatedTarget:X}))}function A(e,a){var n=parseInt(t(e).format("YYYYMM"))-parseInt(t(a).format("YYYYMM"));return n>0?1:0==n?0:-1}function L(e,a){var n=parseInt(t(e).format("YYYYMMDD"))-parseInt(t(a).format("YYYYMMDD"));return n>0?1:0==n?0:-1}function N(e){return t(e).add(1,"months").toDate()}function B(e){return t(e).add(-1,"months").toDate()}function R(){return"<div>						<span>"+Z("Time")+': <span class="hour-val">00</span>:<span class="minute-val">00</span></span>					</div>					<div class="hour">						<label>'+Z("Hour")+': <input type="range" class="hour-range" name="hour" min="0" max="23"></label>					</div>					<div class="minute">						<label>'+Z("Minute")+': <input type="range" class="minute-range" name="minute" min="0" max="59"></label>					</div>'}function F(){var t='<div class="date-picker-wrapper';a.extraClass&&(t+=" "+a.extraClass+" "),a.singleDate&&(t+=" single-date "),a.showShortcuts||(t+=" no-shortcuts "),a.showTopbar||(t+=" no-topbar "),a.customTopBar&&(t+=" custom-topbar "),t+='">',a.showTopbar&&(t+='<div class="drp_top-bar">',a.customTopBar?("function"==typeof a.customTopBar&&(a.customTopBar=a.customTopBar()),t+='<div class="custom-top">'+a.customTopBar+"</div>"):(t+='<div class="normal-top">							<span style="color:#333">'+Z("selected")+' </span> <b class="start-day">...</b>',a.singleDate||(t+=' <span class="separator-day">'+a.separator+'</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> '+Z("days")+")</i>"),t+="</div>",t+='<div class="error-top">error</div>						<div class="default-top">default</div>'),t+='<button class="ui red mini circular basic disabled icon apply-btn button"><i class="remove icon"></i></button>',t+="</div>");var n=a.showWeekNumbers?6:5;if(t+='<div class="month-wrapper"><table class="month1" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;"><span class="prev"><i class="chevron left icon"></i></span></th><th colspan="'+n+'" class="month-name"></th><th style="width:27px;">'+(a.singleDate||!a.stickyMonths?'<span class="next"><i class="chevron right icon"></i></span>':"")+'</th></tr><tr class="week-name">'+H()+"</thead><tbody></tbody></table>",q()&&(t+='<div class="gap">'+_()+'</div><table class="month2" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;">'+(a.stickyMonths?"":'<span class="prev"><i class="chevron left icon"></i></span>')+'</th><th colspan="'+n+'" class="month-name"></th><th style="width:27px;"><span class="next"><i class="chevron right icon"></i></span></th></tr><tr class="week-name">'+H()+"</thead><tbody></tbody></table>"),t+='<div style="clear:both;height:0;font-size:0;"></div><div class="time"><div class="time1"></div>',a.singleDate||(t+='<div class="time2"></div>'),t+='</div><div style="clear:both;height:0;font-size:0;"></div></div>',t+='<div class="footer">',a.showShortcuts){t+='<div class="shortcuts"><b>'+Z("shortcuts")+"</b>";var s=a.shortcuts;if(s){if(s["prev-days"]&&s["prev-days"].length>0){t+='&nbsp;<span class="prev-days">'+Z("past");for(var r=0;r<s["prev-days"].length;r++){var i=s["prev-days"][r];i+=Z(s["prev-days"][r]>1?"days":"day"),t+=' <a href="javascript:;" shortcut="day,-'+s["prev-days"][r]+'">'+i+"</a>"}t+="</span>"}if(s["next-days"]&&s["next-days"].length>0){t+='&nbsp;<span class="next-days">'+Z("following");for(var r=0;r<s["next-days"].length;r++){var i=s["next-days"][r];i+=Z(s["next-days"][r]>1?"days":"day"),t+=' <a href="javascript:;" shortcut="day,'+s["next-days"][r]+'">'+i+"</a>"}t+="</span>"}if(s.prev&&s.prev.length>0){t+='&nbsp;<span class="prev-buttons">'+Z("previous");for(var r=0;r<s.prev.length;r++){var i=Z("prev-"+s.prev[r]);t+=' <a href="javascript:;" shortcut="prev,'+s.prev[r]+'">'+i+"</a>"}t+="</span>"}if(s.next&&s.next.length>0){t+='&nbsp;<span class="next-buttons">'+Z("next");for(var r=0;r<s.next.length;r++){var i=Z("next-"+s.next[r]);t+=' <a href="javascript:;" shortcut="next,'+s.next[r]+'">'+i+"</a>"}t+="</span>"}}if(a.customShortcuts)for(var r=0;r<a.customShortcuts.length;r++){var o=a.customShortcuts[r];t+='&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">'+o.name+"</a></span>"}t+="</div>"}if(a.showCustomValues&&(t+='<div class="customValues"><b>'+(a.customValueLabel||Z("custom-values"))+"</b>",
a.customValues))for(var r=0;r<a.customValues.length;r++){var d=a.customValues[r];t+='&nbsp;<span class="custom-value"><a href="javascript:;" custom="'+d.value+'">'+d.name+"</a></span>"}return t+="</div></div>",e(t)}function H(){var e=a.showWeekNumbers?"<th>"+Z("week-number")+"</th>":"";return"monday"==a.startOfWeek?e+"<th>"+Z("week-1")+"</th>					<th>"+Z("week-2")+"</th>					<th>"+Z("week-3")+"</th>					<th>"+Z("week-4")+"</th>					<th>"+Z("week-5")+"</th>					<th>"+Z("week-6")+"</th>					<th>"+Z("week-7")+"</th>":e+"<th>"+Z("week-7")+"</th>					<th>"+Z("week-1")+"</th>					<th>"+Z("week-2")+"</th>					<th>"+Z("week-3")+"</th>					<th>"+Z("week-4")+"</th>					<th>"+Z("week-5")+"</th>					<th>"+Z("week-6")+"</th>"}function $(e){var e=t(e);return a.startDate&&e.endOf("month").isBefore(a.startDate)?!0:a.endDate&&e.startOf("month").isAfter(a.endDate)?!0:!1}function _(){for(var e=['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'],t=0;20>t;t++)e.push('<div class="gap-line">					<div class="gap-1"></div>					<div class="gap-2"></div>					<div class="gap-3"></div>				</div>');return e.push("</div>"),e.join("")}function q(){return!a.singleDate&&!a.singleMonth}function J(e,t,a){var n=jQuery.extend(!0,{},e);jQuery.each(t,function(e,t){var s=t(a);for(var r in s)n.hasOwnProperty(r)?n[r]+=s[r]:n[r]=s[r]}),attrString="";for(var s in n)n.hasOwnProperty(s)&&(attrString+=s+'="'+n[s]+'" ');return attrString}function E(e){return Math.floor(G(e)/864e5)}function G(e){return t.isMoment(e)&&(e=e.toDate().getTime()),"object"==typeof e&&e.getTime&&(e=e.getTime()),"string"!=typeof e||e.match(/\d{13}/)||(e=t(e,a.format).toDate().getTime()),e=parseInt(e,10)-60*(new Date).getTimezoneOffset()*1e3}function K(e){var n=[];e.setDate(1);var s=(new Date(e.getTime()-864e5),new Date),r=e.getDay();if(0==r&&"monday"==a.startOfWeek&&(r=7),r>0)for(var i=r;i>0;i--){var o=new Date(e.getTime()-864e5*i),d=y(o.getTime());a.startDate&&L(o,a.startDate)<0&&(d=!1),a.endDate&&L(o,a.endDate)>0&&(d=!1),n.push({date:o,type:"lastMonth",day:o.getDate(),time:o.getTime(),valid:d})}for(var l=e.getMonth(),i=0;40>i;i++){var u=t(e).add(i,"days").toDate(),d=y(u.getTime());a.startDate&&L(u,a.startDate)<0&&(d=!1),a.endDate&&L(u,a.endDate)>0&&(d=!1),n.push({date:u,type:u.getMonth()==l?"toMonth":"nextMonth",day:u.getDate(),time:u.getTime(),valid:d})}for(var m=[],c=0;6>c&&"nextMonth"!=n[7*c].type;c++){m.push("<tr>");for(var o=0;7>o;o++){var h="monday"==a.startOfWeek?o+1:o,u=n[7*c+h],f=t(u.time).format("L")==t(s).format("L");if(u.extraClass="",u.tooltip="",u.valid&&a.beforeShowDay&&"function"==typeof a.beforeShowDay){var p=a.beforeShowDay(t(u.time).toDate());u.valid=p[0],u.extraClass=p[1]||"",u.tooltip=p[2]||"",""!=u.tooltip&&(u.extraClass+=" has-tooltip ")}todayDivAttr={time:u.time,"data-tooltip":u.tooltip,"class":"day "+u.type+" "+u.extraClass+" "+(u.valid?"valid":"invalid")+" "+(f?"real-today":"")},0==o&&a.showWeekNumbers&&m.push('<td><div class="week-number" data-start-time="'+u.time+'">'+a.getWeekNumber(u.date)+"</div></td>"),m.push("<td "+J({},a.dayTdAttrs,u)+"><div "+J(todayDivAttr,a.dayDivAttrs,u)+">"+Q(u.time,u.day)+"</div></td>")}m.push("</tr>")}return m.join("")}function Q(e,t){return a.showDateFilter&&"function"==typeof a.showDateFilter?a.showDateFilter(e,t):t}function U(){if("auto"==a.language){var t=navigator.language?navigator.language:navigator.browserLanguage;if(!t)return e.dateRangePickerLanguages["default"];var t=t.toLowerCase();for(var n in e.dateRangePickerLanguages)if(-1!=t.indexOf(n))return e.dateRangePickerLanguages[n];return e.dateRangePickerLanguages["default"]}return a.language&&a.language in e.dateRangePickerLanguages?e.dateRangePickerLanguages[a.language]:e.dateRangePickerLanguages["default"]}function Z(t){var a=t.toLowerCase(),n=t in te?te[t]:a in te?te[a]:null,s=e.dateRangePickerLanguages["default"];return null==n&&(n=t in s?s[t]:a in s?s[a]:""),n}a||(a={}),a=e.extend(!0,{autoClose:!1,format:"YYYY-MM-DD",separator:" to ",language:"auto",startOfWeek:"sunday",getValue:function(){return e(this).val()},setValue:function(t){e(this).attr("readonly")||e(this).is(":disabled")||t==e(this).val()||e(this).val(t)},startDate:!1,endDate:!1,time:{enabled:!1},minDays:0,maxDays:0,showShortcuts:!1,shortcuts:{},customShortcuts:[],inline:!1,container:"body",alwaysOpen:!1,singleDate:!1,lookBehind:!1,batchMode:!1,duration:200,stickyMonths:!1,dayDivAttrs:[],dayTdAttrs:[],selectForward:!1,selectBackward:!1,applyBtnClass:"",singleMonth:"auto",hoveringTooltip:function(e,t,a){return e>1?e+" "+Z("days"):""},showTopbar:!0,swapTime:!1,showWeekNumbers:!1,getWeekNumber:function(e){return t(e).format("w")}},a),a.start=!1,a.end=!1,a.startWeek=!1,a.isTouchDevice="ontouchstart"in window||navigator.msMaxTouchPoints,a.isTouchDevice&&(a.hoveringTooltip=!1),"auto"==a.singleMonth&&(a.singleMonth=e(window).width()<480),a.singleMonth&&(a.stickyMonths=!1),a.singleDate&&(a.singleMonth=!0),a.showTopbar||(a.autoClose=!0),a.startDate&&"string"==typeof a.startDate&&(a.startDate=t(a.startDate,a.format).toDate()),a.endDate&&"string"==typeof a.endDate&&(a.endDate=t(a.endDate,a.format).toDate());var X,ee,te=U(),ae=!1,ne=this,se=e(ne).get(0);return e(this).unbind(".datepicker").bind("click.datepicker",function(e){var t=X.is(":visible");t||o(a.duration)}).bind("change.datepicker",function(e){d()}).bind("keyup.datepicker",function(){try{clearTimeout(ee)}catch(e){}ee=setTimeout(function(){d()},2e3)}),s.call(this),a.alwaysOpen&&o(0),e(this).data("dateRangePicker",{setDateRange:function(e,n,s){"string"==typeof e&&"string"==typeof n&&(e=t(e,a.format).toDate(),n=t(n,a.format).toDate()),T(e,n,s)},clear:f,close:V,open:o,getDatePicker:i,destroy:function(){e(ne).unbind(".datepicker"),e(ne).data("dateRangePicker",""),e(ne).data("date-picker-opened",null),X.remove(),e(window).unbind("resize.datepicker",r),e(document).unbind("click.datepicker",V)}}),e(window).bind("resize.datepicker",r),this}});