# Usefull bookmarklets



**Speedread Bookmarklet**

Just create a new bookmark and make the text below (starting with javascript:) the URL of the bookmark.  

```
javascript:(function()%7B%20wpm%20%3D%20localStorage.getItem('___aotavnkoyayovfuy_WPM')%20%7C%7C%20250%3B%20let%20gtimeout%20%3D%200%3B%20let%20inner%3B%20let%20outer%3B%20let%20wpmCounter%3B%20let%20setWpm%20%3D%20(dif)%20%3D%3E%20%7B%20wpm%20%2B%3D%20dif%3B%20wpmCounter.innerHTML%20%3D%20wpm%3B%20localStorage.setItem('___aotavnkoyayovfuy_WPM'%2C%20wpm)%3B%20%7D%3B%20document.addEventListener('selectionchange'%2C%20()%20%3D%3E%20%7B%20let%20term%20%3D%20window.getSelection().toString()%3B%20stop()%3B%20if(term.length%20%3C%2010)%7B%20return%3B%20%7D%20if(!outer)%7B%20outer%20%3D%20Array.from(document.getElementsByTagName('body'))%5B0%5D.appendChild(document.createElement('div'))%3B%20inner%20%3D%20outer.appendChild(document.createElement('div'))%3B%20outer.style.position%20%3D%20'fixed'%3B%20outer.style.top%20%3D%20'calc(50%25%20-%2050px)'%3B%20outer.style.margin%20%3D%20'auto'%3B%20outer.style.height%20%3D%20'100px'%3B%20outer.style.minWidth%20%3D%20'800px'%3B%20outer.style.background%20%3D%20'%23f5f5f5'%3B%20outer.style.left%20%3D%20'calc(50%25%20-%20400px)'%3B%20outer.style.fontSize%20%3D%20'70px'%3B%20outer.style.textAlign%20%3D%20'center'%3B%20outer.style.lineHeight%20%3D%20'100px'%3B%20outer.style.flexDirection%20%3D%20'row'%3B%20outer.style.justifyContent%20%3D%20'center'%3B%20outer.style.alignItems%20%3D%20'center'%3B%20outer.style.display%20%3D%20'flex'%3B%20outer.style.borderTop%20%3D%20'3px%20solid'%3B%20outer.style.borderBottom%20%3D%20'3px%20solid'%3B%20outer.style.opacity%20%3D%20'0.97'%3B%20let%20temp%20%3D%20outer.appendChild(document.createElement('div'))%3B%20temp.style.width%20%3D%20'3px'%3B%20temp.style.background%20%3D%20'black'%3B%20temp.style.height%20%3D%20'7px'%3B%20temp.style.position%20%3D%20'absolute'%3B%20temp.style.top%20%3D%20'0px'%3B%20temp.style.left%20%3D%20'50%25'%3B%20temp%20%3D%20outer.appendChild(document.createElement('div'))%3B%20temp.style.width%20%3D%20'3px'%3B%20temp.style.background%20%3D%20'black'%3B%20temp.style.height%20%3D%20'7px'%3B%20temp.style.position%20%3D%20'absolute'%3B%20temp.style.bottom%20%3D%20'0px'%3B%20temp.style.left%20%3D%20'50%25'%3B%20let%20temp1%20%3D%20outer.appendChild(document.createElement('div'))%3B%20temp1.style.position%20%3D%20'absolute'%3B%20temp1.style.left%20%3D%20'10px'%3B%20temp1.style.flexDirection%20%3D%20'row'%3B%20temp1.style.display%20%3D%20'flex'%3B%20temp1.style.alignItems%20%3D%20'center'%3B%20temp1.style.top%20%3D%20'5px'%3B%20temp%20%3D%20temp1.appendChild(document.createElement('button'))%3B%20temp.style.background%20%3D%20'%23eee'%3B%20temp.style.color%20%3D%20'black'%3B%20temp.style.border%20%3D%20'none'%3B%20temp.style.fontSize%20%3D%20'10px'%3B%20temp.innerHTML%20%3D%20'-'%3B%20temp.addEventListener('click'%2C%20()%20%3D%3E%20setWpm(-10))%3B%20wpmCounter%20%3D%20temp1.appendChild(document.createElement('div'))%3B%20wpmCounter.style.fontSize%20%3D%20'10px'%3B%20wpmCounter.style.lineHeight%20%3D%20'10px'%3B%20wpmCounter.style.height%20%3D%20'10px'%3B%20wpmCounter.style.margin%20%3D%20'10px'%3B%20wpmCounter.innerHTML%20%3D%20wpm%3B%20temp%20%3D%20temp1.appendChild(document.createElement('button'))%3B%20temp.style.background%20%3D%20'%23eee'%3B%20temp.style.color%20%3D%20'black'%3B%20temp.style.border%20%3D%20'none'%3B%20temp.style.fontSize%20%3D%20'10px'%3B%20temp.innerHTML%20%3D%20'%2B'%3B%20temp.addEventListener('click'%2C%20()%20%3D%3E%20setWpm(10))%3B%20inner.style.display%20%3D%20'inline-block'%3B%20inner.style.transform%20%3D%20'translate(8%25)'%3B%20inner.innerHTML%20%3D%20'3'%3B%20%7D%20setTimeout(()%20%3D%3E%20inner.innerHTML%20%3D%20'2'%2C%20200)%3B%20setTimeout(()%20%3D%3E%20inner.innerHTML%20%3D%20'1'%2C%20400)%3B%20gtimeout%20%3D%20setTimeout(()%20%3D%3E%20nextWord(term.split('%20').reverse())%2C%20600)%3B%20%7D)%3B%20let%20nextWord%20%3D%20(words)%20%3D%3E%20%7B%20let%20next%20%3D%20words.pop()%3B%20if(next.length%20%3C%203%20%26%26%20words.length%20%26%26%20words%5Bwords.length%20-%201%5D.length%20%3C%206)%7B%20next%20%2B%3D%20'%20'%20%2B%20words.pop()%3B%20%7D%20inner.innerHTML%20%3D%20next%3B%20let%20duration%20%3D%20(1000%20%2F%20(wpm%20%2F%2060))%20*%20((next.length%20%2F%205%20-%201)%20*%200.5%20%2B%201)%3B%20let%20timeout%20%3D%20setTimeout(()%20%3D%3E%20%7B%20if(words.length)%7B%20if(timeout%20!%3D%3D%20gtimeout)%7B%20return%3B%20%7D%20nextWord(words)%3B%20%7D%20else%20%7B%20stop()%3B%20%7D%20%7D%2C%20duration)%3B%20gtimeout%20%3D%20timeout%3B%20%7D%3B%20stop%20%3D%20()%20%3D%3E%20%7B%20clearTimeout(gtimeout)%3B%20gtimeout%20%3D%200%3B%20if(outer)%7B%20try%7B%20Array.from(document.getElementsByTagName('body'))%5B0%5D.removeChild(outer)%3B%20%7D%20catch(e)%7B%7D%20outer%20%3D%20inner%20%3D%20undefined%3B%20%7D%20%7D%3B%7D)()%3B
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


