var Vcity={};Vcity._m={$:function(t,i){var e,n,s,a=[],c=t.substring(1);if(i=i||document,"string"==typeof t)switch(t.charAt(0)){case"#":return document.getElementById(c);case".":if(i.getElementsByClassName)return i.getElementsByClassName(c);for(e=Vcity._m.$("*",i),n=e.length,s=0;n>s;s++)e[s].className.indexOf(c)>-1&&a.push(e[s]);return a;default:return i.getElementsByTagName(t)}},on:function(t,i,e){t.addEventListener?t.addEventListener(i,e,!1):t.attachEvent("on"+i,e)},getEvent:function(t){return t||window.event},getTarget:function(t){return t.target||t.srcElement},getPos:function(t){var i=document.documentElement.scrollLeft||document.body.scrollLeft,e=document.documentElement.scrollTop||document.body.scrollTop,n=t.getBoundingClientRect();return{top:n.top+e,right:n.right+i,bottom:n.bottom+e,left:n.left+i}},addClass:function(t,i){i&&(i.className=Vcity._m.hasClass(t,i)?i.className:i.className+" "+t)},removeClass:function(t,i){var e=new RegExp("(^|\\s+)"+t+"(\\s+|$)","g");Vcity._m.hasClass(t,i)&&(i.className=e.test(i.className)?i.className.replace(e,""):i.className)},hasClass:function(t,i){return i&&i.className?i.className.indexOf(t)>-1:!1},stopPropagation:function(t){t=t||window.event,t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},trim:function(t){return t.replace(/^\s+|\s+$/g,"")}},Vcity.allCity=["\u767d\u6c9f\u65b0\u57ce|baigouxincheng|bgxc","\u6ee1\u57ce\u53bf|manchengxian|mcx","\u6e05\u82d1\u53bf|qingyuanxian|qyx","\u6d9e\u6c34\u53bf|laishuixian|lsx","\u961c\u5e73\u53bf|fupingxian|fpx","\u5b9a\u5174\u53bf|dingxingxian|dxx","\u9ad8\u9633\u53bf|gaoyangxian|gyx","\u5bb9\u57ce\u53bf|rongchengxian|rcx","\u6d9e\u6e90\u53bf|laiyuanxian|lyx","\u671b\u90fd\u53bf|wangduxian|wdx","\u5b89\u65b0\u53bf|anxinxian|axx","\u6613\u53bf|yixian|yx","\u66f2\u9633\u53bf|quyangxian|qyx","\u8821\u53bf|lixian|lx","\u987a\u5e73\u53bf|shunpingxian|spx","\u535a\u91ce\u53bf|boyexian|byx","\u96c4\u53bf|xiongxian|xx","\u6dbf\u5dde\u5e02|zhuozhoushi|zzs","\u5b89\u56fd\u5e02|anguoshi|ags","\u9ad8\u7891\u5e97\u5e02|gaobeidianshi|gbds","\u5f90\u6c34\u53bf|xushuixian|xsx","\u5b9a\u5dde\u5e02|dingzhoushi|dzs","\u5510\u53bf|tangxian|tx"],Vcity.regEx=/^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i,Vcity.regExChiese=/([\u4E00-\u9FA5\uf900-\ufa2d]+)/,function(){var t,i,e=Vcity.allCity,n=Vcity.regEx,s=/^[a-f]$/i,a=/^[g-k]$/i,c=/^[l-p]$/i,o=/^[q-u]$/i,l=/^[v-z]$/i;if(!Vcity.oCity){Vcity.oCity={hot:{},ABCDEF:{},GHIJK:{},LMNOP:{},QRSTU:{},VWXYZ:{}};for(var y=0,h=e.length;h>y;y++)t=n.exec(e[y]),i=t[3].toUpperCase(),s.test(i)?(Vcity.oCity.ABCDEF[i]||(Vcity.oCity.ABCDEF[i]=[]),Vcity.oCity.ABCDEF[i].push(t[1])):a.test(i)?(Vcity.oCity.GHIJK[i]||(Vcity.oCity.GHIJK[i]=[]),Vcity.oCity.GHIJK[i].push(t[1])):c.test(i)?(Vcity.oCity.LMNOP[i]||(Vcity.oCity.LMNOP[i]=[]),Vcity.oCity.LMNOP[i].push(t[1])):o.test(i)?(Vcity.oCity.QRSTU[i]||(Vcity.oCity.QRSTU[i]=[]),Vcity.oCity.QRSTU[i].push(t[1])):l.test(i)&&(Vcity.oCity.VWXYZ[i]||(Vcity.oCity.VWXYZ[i]=[]),Vcity.oCity.VWXYZ[i].push(t[1])),23>y&&(Vcity.oCity.hot.hot||(Vcity.oCity.hot.hot=[]),Vcity.oCity.hot.hot.push(t[1]))}}(),Vcity._template=['<p class="citytip">\u5168\u90e8\u533a\u53bf(\u652f\u6301\u6c49\u5b57/\u62fc\u97f3)</p>',"<ul>",'<li class="on">\u5168\u90e8\u533a\u53bf</li>',"<li>ABCDEF</li>","<li>GHIJK</li>","<li>LMNOP</li>","<li>QRSTU</li>","<li>VWXYZ</li>","</ul>"],Vcity.CitySelector=function(){this.initialize.apply(this,arguments)},Vcity.CitySelector.prototype={constructor:Vcity.CitySelector,initialize:function(t){var i=t.input;this.input=Vcity._m.$("#"+i),this.inputEvent()},createWarp:function(){var t=Vcity._m.getPos(this.input),i=this.rootDiv=document.createElement("div"),e=this;Vcity._m.on(this.rootDiv,"click",function(t){Vcity._m.stopPropagation(t)}),Vcity._m.on(document,"click",function(t){t=Vcity._m.getEvent(t);var i=Vcity._m.getTarget(t);return i==e.input?!1:(e.cityBox&&Vcity._m.addClass("hide",e.cityBox),e.ul&&Vcity._m.addClass("hide",e.ul),void(e.myIframe&&Vcity._m.addClass("hide",e.myIframe)))}),i.className="citySelector",i.style.position="absolute",i.style.left=t.left+"px",i.style.top=t.bottom+"px",i.style.zIndex=999999;var n=document.all?!0:!1,s=this.isIE6=n&&!window.XMLHttpRequest;if(s){var a=this.myIframe=document.createElement("iframe");a.frameborder="0",a.src="about:blank",a.style.position="absolute",a.style.zIndex="-1",this.rootDiv.appendChild(this.myIframe)}var c=this.cityBox=document.createElement("div");c.className="cityBox",c.id="cityBox",c.innerHTML=Vcity._template.join("");var o=this.hotCity=document.createElement("div");o.className="hotCity",c.appendChild(o),i.appendChild(c),this.createHotCity()},createHotCity:function(){var t,i,e,n,s,a,c,o,l=[],y=(Vcity.regEx,Vcity.oCity);for(a in y){t=this[a]=document.createElement("div"),t.className=a+" cityTab hide",o=[];for(c in y[a])o.push(c),o.sort();for(var h=0,r=o.length;r>h;h++){i=document.createElement("dl"),e=document.createElement("dt"),n=document.createElement("dd"),e.innerHTML="hot"==o[h]?"&nbsp;":o[h],l=[];for(var m=0,u=y[a][o[h]].length;u>m;m++)s='<a href="javascript:">'+y[a][o[h]][m]+"</a>",l.push(s);n.innerHTML=l.join(""),i.appendChild(e),i.appendChild(n),t.appendChild(i)}Vcity._m.removeClass("hide",this.hot),this.hotCity.appendChild(t)}document.body.appendChild(this.rootDiv),this.changeIframe(),this.tabChange(),this.linkEvent()},tabChange:function(){for(var t=Vcity._m.$("li",this.cityBox),i=Vcity._m.$("div",this.hotCity),e=this,n=0,s=t.length;s>n;n++)t[n].index=n,t[n].onclick=function(){for(var n=0;s>n;n++)Vcity._m.removeClass("on",t[n]),Vcity._m.addClass("hide",i[n]);Vcity._m.addClass("on",this),Vcity._m.removeClass("hide",i[this.index]),e.changeIframe()}},linkEvent:function(){for(var t=Vcity._m.$("a",this.hotCity),i=this,e=0,n=t.length;n>e;e++)t[e].onclick=function(){i.input.value=this.innerHTML,Vcity._m.addClass("hide",i.cityBox),Vcity._m.addClass("hide",i.myIframe),getData()}},inputEvent:function(){var t=this;Vcity._m.on(this.input,"click",function(i){i=i||window.event,t.cityBox?t.cityBox&&Vcity._m.hasClass("hide",t.cityBox)&&(!t.ul||t.ul&&Vcity._m.hasClass("hide",t.ul))&&(Vcity._m.removeClass("hide",t.cityBox),Vcity._m.removeClass("hide",t.myIframe),t.changeIframe()):t.createWarp()}),Vcity._m.on(this.input,"focus",function(){t.input.select(),"\u57ce\u5e02\u540d"==t.input.value&&(t.input.value="")}),Vcity._m.on(this.input,"blur",function(){""==t.input.value&&(t.input.value="\u57ce\u5e02\u540d")}),Vcity._m.on(this.input,"keyup",function(i){i=i||window.event;var e=i.keyCode;Vcity._m.addClass("hide",t.cityBox),t.createUl(),Vcity._m.removeClass("hide",t.myIframe),!t.ul||Vcity._m.hasClass("hide",t.ul)||t.isEmpty||t.KeyboardEvent(i,e)})},createUl:function(){var t,i=Vcity._m.trim(this.input.value);if(""!==i){for(var e=new RegExp("^"+i+"|\\|"+i,"gi"),n=[],s=0,a=Vcity.allCity.length;a>s;s++)if(e.test(Vcity.allCity[s])){var c=Vcity.regEx.exec(Vcity.allCity[s]);t=0!==n.length?'<li><b class="cityname">'+c[1]+'</b><b class="cityspell">'+c[2]+"</b></li>":'<li class="on"><b class="cityname">'+c[1]+'</b><b class="cityspell">'+c[2]+"</b></li>",n.push(t)}if(this.isEmpty=!1,0==n.length&&(this.isEmpty=!0,t='<li class="empty">\u5bf9\u4e0d\u8d77\uff0c\u6ca1\u6709\u627e\u5230\u6570\u636e "<em>'+i+'</em>"</li>',n.push(t)),this.ul)this.ul&&Vcity._m.hasClass("hide",this.ul)&&(this.count=0,Vcity._m.removeClass("hide",this.ul));else{var o=this.ul=document.createElement("ul");o.className="cityslide",this.rootDiv&&this.rootDiv.appendChild(o),this.count=0}this.ul.innerHTML=n.join(""),this.changeIframe(),this.liEvent()}else Vcity._m.addClass("hide",this.ul),Vcity._m.removeClass("hide",this.cityBox),Vcity._m.removeClass("hide",this.myIframe),this.changeIframe()},changeIframe:function(){this.isIE6&&(this.myIframe.style.width=this.rootDiv.offsetWidth+"px",this.myIframe.style.height=this.rootDiv.offsetHeight+"px")},KeyboardEvent:function(t,i){var e=Vcity._m.$("li",this.ul),n=e.length;switch(i){case 40:this.count++,this.count>n-1&&(this.count=0);for(var s=0;n>s;s++)Vcity._m.removeClass("on",e[s]);Vcity._m.addClass("on",e[this.count]);break;case 38:for(this.count--,this.count<0&&(this.count=n-1),s=0;n>s;s++)Vcity._m.removeClass("on",e[s]);Vcity._m.addClass("on",e[this.count]);break;case 13:this.input.value=Vcity.regExChiese.exec(e[this.count].innerHTML)[0],Vcity._m.addClass("hide",this.ul),Vcity._m.addClass("hide",this.ul),Vcity._m.addClass("hide",this.myIframe),getData()}},liEvent:function(){for(var t=this,i=Vcity._m.$("li",this.ul),e=0,n=i.length;n>e;e++)Vcity._m.on(i[e],"click",function(i){i=Vcity._m.getEvent(i);var e=Vcity._m.getTarget(i);t.input.value=Vcity.regExChiese.exec(e.innerHTML)[0],Vcity._m.addClass("hide",t.ul),Vcity._m.addClass("hide",t.myIframe)}),Vcity._m.on(i[e],"mouseover",function(t){t=Vcity._m.getEvent(t);var i=Vcity._m.getTarget(t);Vcity._m.addClass("on",i)}),Vcity._m.on(i[e],"mouseout",function(t){t=Vcity._m.getEvent(t);var i=Vcity._m.getTarget(t);Vcity._m.removeClass("on",i)})}};