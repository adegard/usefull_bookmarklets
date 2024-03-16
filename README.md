# Usefull bookmarklets



**Speedread Bookmarklet**

Just create a new bookmark and make the text below (starting with javascript:) the URL of the bookmark.  

```
javascript:(function(){function e(a,b){var c=document.createElement("div");if(a)for(var d in a)c.style[d]=a[d];b&&b.appendChild(c);return c}function m(a,b){for(;a.lastChild;)a.removeChild(a.lastChild);a.appendChild(document.createTextNode(b))}function w(){l();document.removeEventListener("keypress",x);document.removeEventListener("keydown",y);document.body.removeChild(n)}function y(a){var b=D[a.keyCode];b&&(a.stopPropagation(),a.preventDefault(),b())}function x(a){var b=z[a.charCode];b&&(a.stopPropagation(),a.preventDefault(),b())}function q(a){if(0<=a&&a<c.length){m(E,c[a]);F.style.width=(0==a?0:100*a/(c.length-1))+"%25";var b=60*(c.length-a-1)/d+.5,e=parseInt(b/60),b=parseInt(b%2560);m(G,e+":"+(10>b?"0"+b:b)+" remaining")}h=a}function A(){h+1<c.length?q(h+1):l()}function p(a){d=a;m(H,d+" WPM");null!==f&&(l(),r())}function r(){null===f&&(f=setInterval(A,6E4/d))}function l(){null!==f&&(clearInterval(f),f=null)}function B(){null===f?r():l()}function I(){null===f?A():l()}function J(){if(0<h){for(var a=h-1;0<a&&!c[a-1].match(C);)--a;q(a)}}function K(){if(h+1<c.length){for(var a=h+1;a+1<c.length&&!c[a-1].match(C);)++a;q(a)}}function L(){if(4E3>d){for(var a=25;20*a<=d;)a*=2;p(d+a)}}function M(){if(25<d){for(var a=25;20*a<d;)a*=2;p(d-a)}}var C=/[.?!]['"\u2019\u201d)]?$/,N=/\s+|\u2014/,t={position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:1E3},O={background:"black",opacity:.5,position:"absolute",left:0,right:0,top:0,bottom:0,zIndex:-1},g={background:"white",display:"table",width:"70%25",height:"70%25",position:"absolute",left:"15%25",right:"15%25",top:"15%25",bottom:"15%25"},u={font:"64pt sans-serif",color:"#444",display:"table-cell",textAlign:"center",verticalAlign:"middle"},P={position:"absolute",left:"0px",right:"0px",bottom:"0px",background:"#eef",height:"8pt"},v={position:"absolute",left:"0px",top:"0px",bottom:"0px",background:"#44f",width:"0%25"},Q={position:"absolute",top:"1em",right:"1em",font:"12pt%20sans-serif",color:"#888"},R={position:"absolute",bottom:"12pt",left:"1em",font:"12pt%20sans-serif",color:"#888"},k={position:"absolute",bottom:"12pt",right:"1em",font:"12pt%20sans-serif",color:"#888"},c=function(a){return%20a.split(N).filter(function(a){return!!a})}(getSelection().toString()),h=-1,d=0,f=null;if(0===c.length)alert("No%20text%20selected!");else{var%20n=e(t),t=e(O,n),g=e(g,n),E=e(u,g),u=e(P,g),F=e(v,u),H=e(Q,g),v=e(R,g),G=e(k,g);m(v,c.length+"%20words");for(var%20D={27:w,37:J,39:K},z={32:B,43:L,45:M,46:I},k=0;10>k;++k)z[48+k]=p.bind(null,0<k?100*k:1E3);p(500);t.addEventListener("click",w);g.addEventListener("click",B);document.body.appendChild(n);document.addEventListener("keydown",y);document.addEventListener("keypress",x);r()}})();
```

**Bookmarklet to get JS panel with other Bookmarklets**

Just create a new bookmark and make the text below (starting with javascript:) the URL of the bookmark.  

```
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://adegard.github.io/markdown-cv/media/commandpanel.js' })();
```

**Bookmarklet to clip webpages to google docs**

(modified version of: https://gist.github.com/jbrown123/4c768495b21b03d5529f26ccd83bf69f)

Just create a new bookmark and make the text below (starting with javascript:) the URL of the bookmark.  Note that you will need to replace the "YOUR FOLDER ID HERE" string with the actual google docs folder ID you want to use. 

Copy the text below into your bookmark URL (be sure to substitute your folder ID):

```
javascript:(function(){var folder="YOUR FOLDER ID HERE"; var text=""; if(window.getSelection){text=window.getSelection().toString();}else if(document.selection && document.selection.type!="Control"){text=document.selection.createRange().text;}if(prompt("Press Ctrl+C, Enter", "Tags: \n\n"+location.href+"\n\n"+document.title+"\n\n"+text)) window.open('https://docs.google.com/document/create?usp=drive_web&folder='+folder+'&title='+encodeURIComponent(document.title))})()
```
**Password Generator**

see https://stackoverflow.com/questions/1497481/javascript-password-generator#1497512


```
javascript:(
  function(){
  const regx = new RegExp(/\d/, "g");
    prompt('Here is your shiny new random string:', 
      window.crypto.getRandomValues(new BigUint64Array(4)).reduce(
(prev, curr, index) => (
        !index ? prev : prev.toString(36)
    ) + (
        index % 2 ? curr.toString(36).toUpperCase().replace(regx, key => ".,:;-_()=*".charAt(key)) : curr.toString(36)
    )
      ).split('').sort(() => 128 -
        window.crypto.getRandomValues(new Uint8Array(1))[0]
      ).join('')
    );
  }
)();
```



**Remove Paywall**

Usefull url substitution, in order to read payed articles.

Copy the text below into your bookmark URL (be sure to substitute your folder ID):

```
javascript:(function()%7Bvar%20url%20%3D%20encodeURI(window.location.href)%3B%0Avar%20cleanedUrl%20%3D%20%22https%3A%2F%2F12ft.io%2F%22%20%2B%20url%3B%0Awindow.open(cleanedUrl%2C%22_self%22)%3B%7D)()%3B
```

**Google Drive Search**

For a fast way to search Google Drive files, the simple Google Drive bookmarklet just prompts you for the search term. The Google Drive page will then display in your tab with the results. It works exactly like the search box, if you have one, in your toolbar. But, if you want to save some space by removing that search box, you can use this Google Drive  Search bookmarklet instead.


Add <a href="javascript:q = - + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); if (!q) q = prompt('Search terms? ... ', ''); if (q!=null) location='https://drive.google.com/drive/search?q=' + escape(q).replace(/ /g, '+'); void 0;">this</a> to your bookmarks:

```
javascript:q = - + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); if (!q) q = prompt("Search terms? ... ", ""); if (q!=null) location="https://drive.google.com/drive/search?q=" + escape(q).replace(/ /g, "+"); void 0

```

**Gmail This**

For emailing a link to the page you are currently viewing, the Gmail This bookmarklet is ideal. If you are logged in to Google, you will receive a pop-up of your Gmail. The page title is in the subject line and the URL is within the body of the email.

All other Gmail features you are used to seeing are there for formatting, attachments, and your “from” email selection. This is just a quick way to send the URL of a page.

Add this to your bookmarks:

```
javascript:popw='';Q='';x=document;y=window;if(x.selection)%20{Q=x.selection.createRange().text;}%20else%20if%20(y.getSelection)%20{Q=y.getSelection();}%20else%20if%20(x.getSelection)%20{Q=x.getSelection();}popw%20=%20y.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su='%20+%20escape(document.title)%20+%20'&body='%20+%20escape(Q)%20+%20escape('       ->     ')%20+%20escape(location.href)%20+%20'&zx=RANDOMCRAP&shva=1&disablechatbrowsercheck=1&ui=1','gmailForm','scrollbars=yes,width=680,height=510,top=175,left=75,status=no,resizable=yes');if%20(!document.all)%20T%20=%20setTimeout('popw.focus()',50);void(0);
```

modified version of following page
https://www.makeuseof.com/tag/10-ingenious-bookmarklets-to-make-you-a-google-power-user/


**QR This**

Add this to your bookmarks:
```
javascript:(function()%7Bvar%20url%20%3D%20encodeURI(window.location.href)%3Bvar%20GoogleQrUrl%20%3D%20%22https%3A%2F%2Fchart.googleapis.com%2Fchart%3Fcht%3Dqr%26chl%3D%22%20%2B%20url%20%2B%20%22%26chs%3D400x400%22%3Bwindow.open(GoogleQrUrl%2C%20'_blank')%7D)()
```

 Append external js with following and minify it eg https://www.toptal.com/developers/javascript-minifier/

```
javascript: (function() {
    var js = document.body.appendChild(document.createElement("script"));
    js.onerror = function() {
        alert("Sorry, the script could not be loaded.")
    };
    js.src = "js_URL"
})();
```
**NightView**


```
javascript:(function () { var css = 'html {-webkit-filter: invert(100%);' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: invert(100%); } img {-webkit-filter: invert(100%);' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: invert(100%); } video {-webkit-filter: invert(100%);' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: invert(100%); } html { background-color: transparent; }'; var head = document.getElementsByTagName('head')[0]; var style = document.createElement('style'); if (!window.counter) { window.counter = 1; } else { window.counter++; if (window.counter % 2 == 0) { var css = 'html{-webkit-filter:invert(0%);-moz-filter:invert(0%);-o-filter:invert(0%);-ms-filter:invert(0%);}img{-webkit-filter:invert(0%);-moz-filter:invert(0%);-o-filter:invert(0%);-ms-filter:invert(0%);}video{-webkit-filter:invert(0%);-moz-filter:invert(0%);-o-filter:invert(0%);-ms-filter:invert(0%);}html{background-color:transparent;}' } } style.type = 'text/css'; if (style.styleSheet) { style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); document.body.style.backgroundColor='#111'; }());
```

**Clip webpages to google docs, in specific Drive folder*


Just create a new bookmark and make the text below (starting with javascript:) the URL of the bookmark.  Note that you will need to replace the "YOUR FOLDER ID HERE" string with the actual google docs folder ID you want to use. 

Copy the text below into your bookmark URL (be sure to substitute your folder ID):

```
javascript:(function(){var folder="YOUR FOLDER ID HERE"; var text=""; if(window.getSelection){text=window.getSelection().toString();}else if(document.selection && document.selection.type!="Control"){text=document.selection.createRange().text;}if(prompt("Press Ctrl+C, Enter", "Tags: \n\n"+location.href+"\n\n"+document.title+"\n\n"+text)) window.open('https://docs.google.com/document/create?usp=drive_web&folder='+folder+'&title='+encodeURIComponent(document.title))})()
```


**Pipe it**
 
 (note: on Firefox you can use this extension: https://github.com/TeamPiped/Piped-Redirects)


Want to watch Youtube videos on Piped (Kavn Rocks)?
Use this bookmarlet to open it without ads and trackigng:

```
javascript:(function()%7By%20%3D%20window%3B%0Avar%20url%20%3D%20location.href%3B%0Avar%20regExp%20%3D%20%2F%5E.*((youtu.be%5C%2F)%7C(v%5C%2F)%7C(%5C%2Fu%5C%2F%5Cw%5C%2F)%7C(embed%5C%2F)%7C(watch%5C%3F))%5C%3F%3Fv%3F%3D%3F(%5B%5E%23%26%3F%5D*).*%2F%3B%0Avar%20match%20%3D%20url.match(regExp)%3B%0Avar%20videoid%20%3D%20(match%20%26%26%20match%5B7%5D.length%20%3D%3D%2011)%20%3F%20match%5B7%5D%20%3A%20false%3B%0Apopw%20%20%3D%20%20y.open('https%3A%2F%2Fpiped.kavin.rocks%2Fwatch%3Fv%3D'%20%2B%20videoid%2C%20'pipedit'%2C%20'location%3D0%2Ctitlebar%3D0%2Ctoolbar%3D0%2Cstatus%3D0%2Cwidth%3D680%2Cheight%3D510%2Cresizable%3D0%2Cscrollbars%3D0')%3B%0Aif%20(!document.all)%20T%20%3D%20%20setTimeout('popw.focus()'%2C%2050)%3B%0Avoid(0)%3B%7D)()%3B
```
Equivalent to the following JS:

```
y = window;
var url = location.href;
var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
var match = url.match(regExp);
var videoid = (match && match[7].length == 11) ? match[7] : false;
popw  =  y.open('https://piped.kavin.rocks/watch?v=' + videoid, 'pipedit', 'location=0,titlebar=0,toolbar=0,status=0,width=680,height=510,resizable=0,scrollbars=0');
if (!document.all) T =  setTimeout('popw.focus()', 50);
void(0);

```

**Blum (Bookmarks popover)** - variation based of https://blummy.com
The libray has been simplified and put inside this repository: https://cdn.rawgit.com/adegard/usefull_bookmarklets/main/blum2.js

```
javascript:(function()%7Bjavascript%3A%20%3B(function()%20%7Bvar%20l%2C%20s%2C%20d%20%3D%20document%2Ci%2C%20a%20%3D%20function(o)%20%7Bd.body.appendChild(o)%7D%3Bif%20(d.getElementById('blummy'))%20return%20Blummy.close()%3Bs%20%3D%20d.createElement('script')%3Bs.type%20%3D%20'text%2Fjavascript'%3Bs.src%20%3D%20'https%3A%2F%2Fraw.githubusercontent.com%2Fadegard%2Fusefull_bookmarklets%2Fmain%2Fblum2.js'%3Ba(s)%7D)()%7D)()
```
which is identical to:
```
javascript: ;
(function() {
    var l, s, d = document,
        i, a = function(o) {
            d.body.appendChild(o)
        };
    if (d.getElementById('blummy')) return Blummy.close();
    s = d.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://raw.githubusercontent.com/adegard/usefull_bookmarklets/main/blum2.js';
    a(s)
})();
```

**Speak It**

Selected text TTS

```
javascript:(function()%7Bvar%20e%3Dnew%20SpeechSynthesisUtterance(window.getSelection())%3B%20speechSynthesis.speak(e)%3B%7D)()%3B
```


**Readibility**

Terminal style
https://github.com/anoved/mcreadability

```
javascript:(function(){readConvertLinksToFootnotes=true;readStyle='style-terminal';readSize='size-medium';readMargin='margin-medium';mcr_script=document.createElement('SCRIPT');mcr_script.type='text/javascript';mcr_script.src='//anoved.github.io/mcreadability/readability.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(mcr_script);mcr_stylesheet=document.createElement('LINK');mcr_stylesheet.rel='stylesheet';mcr_stylesheet.href='//anoved.github.io/mcreadability/mcreadability.css';mcr_stylesheet.type='text/css';mcr_stylesheet.media='all';document.getElementsByTagName('head')[0].appendChild(mcr_stylesheet);s=document.createElement('SCRIPT');s.type='text/javascript';s.src='//anoved.github.io/mcreadability/scroll-converter.js';if (s.addEventListener) {s.addEventListener('load',function(){scrollConverter.activate();});} else if (s.readyState) {s.onreadystatechange = function(){scrollConverter.activate();};} else {s.onload = function(){scrollConverter.activate();};};document.getElementsByTagName('head')[0].appendChild(s);})();
```
**Other links:**

https://codepen.io/bookmarklets/pen/NobJbq

https://caiorss.github.io/bookmarklets


