# Usefull bookmarklets

 Google Drive Search

For a fast way to search Google Drive files, the simple Google Drive bookmarklet just prompts you for the search term. The Google Drive page will then display in your tab with the results. It works exactly like the search box, if you have one, in your toolbar. But, if you want to save some space by removing that search box, you can use this Google Drive  Search bookmarklet instead.

Add this to your bookmarks:

```
javascript:q = - + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); if (!q) q = prompt("Search terms? ... ", ""); if (q!=null) location="https://drive.google.com/drive/search?q=" + escape(q).replace(/ /g, "+"); void 0

```
 Gmail This

For emailing a link to the page you are currently viewing, the Gmail This bookmarklet is ideal. If you are logged in to Google, you will receive a pop-up of your Gmail. The page title is in the subject line and the URL is within the body of the email.

All other Gmail features you are used to seeing are there for formatting, attachments, and your “from” email selection. This is just a quick way to send the URL of a page.

Add this to your bookmarks:

```
javascript:popw='';Q='';x=document;y=window;if(x.selection)%20{Q=x.selection.createRange().text;}%20else%20if%20(y.getSelection)%20{Q=y.getSelection();}%20else%20if%20(x.getSelection)%20{Q=x.getSelection();}popw%20=%20y.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su='%20+%20escape(document.title)%20+%20'&body='%20+%20escape(Q)%20+%20escape('       ->     ')%20+%20escape(location.href)%20+%20'&zx=RANDOMCRAP&shva=1&disablechatbrowsercheck=1&ui=1','gmailForm','scrollbars=yes,width=680,height=510,top=175,left=75,status=no,resizable=yes');if%20(!document.all)%20T%20=%20setTimeout('popw.focus()',50);void(0);
```

modified version of following page
https://www.makeuseof.com/tag/10-ingenious-bookmarklets-to-make-you-a-google-power-user/


 QR This

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
  NightView


```
javascript:(function () { var css = 'html {-webkit-filter: invert(100%);' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: invert(100%); } img {-webkit-filter: invert(100%);' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: invert(100%); } video {-webkit-filter: invert(100%);' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: invert(100%); } html { background-color: transparent; }'; var head = document.getElementsByTagName('head')[0]; var style = document.createElement('style'); if (!window.counter) { window.counter = 1; } else { window.counter++; if (window.counter % 2 == 0) { var css = 'html{-webkit-filter:invert(0%);-moz-filter:invert(0%);-o-filter:invert(0%);-ms-filter:invert(0%);}img{-webkit-filter:invert(0%);-moz-filter:invert(0%);-o-filter:invert(0%);-ms-filter:invert(0%);}video{-webkit-filter:invert(0%);-moz-filter:invert(0%);-o-filter:invert(0%);-ms-filter:invert(0%);}html{background-color:transparent;}' } } style.type = 'text/css'; if (style.styleSheet) { style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); document.body.style.backgroundColor='#111'; }());
```

 Bookmarklet to clip webpages to google docs


Just create a new bookmark and make the text below (starting with javascript:) the URL of the bookmark.  Note that you will need to replace the "YOUR FOLDER ID HERE" string with the actual google docs folder ID you want to use. 

Copy the text below into your bookmark URL (be sure to substitute your folder ID):

```
javascript:(function(){var folder="YOUR FOLDER ID HERE"; var text=""; if(window.getSelection){text=window.getSelection().toString();}else if(document.selection && document.selection.type!="Control"){text=document.selection.createRange().text;}if(prompt("Press Ctrl+C, Enter", "Tags: \n\n"+location.href+"\n\n"+document.title+"\n\n"+text)) window.open('https://docs.google.com/document/create?usp=drive_web&folder='+folder+'&title='+encodeURIComponent(document.title))})()
```
