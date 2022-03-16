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
javascript:popw='';Q='';x=document;y=window;if(x.selection)%20{Q=x.selection.createRange().text;}%20else%20if%20(y.getSelection)%20{Q=y.getSelection();}%20else%20if%20(x.getSelection)%20{Q=x.getSelection();}popw%20=%20y.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su='%20+%20escape(document.title)%20+%20'&body='%20+%20escape(Q)%20+%20escape('n')%20+%20escape(location.href)%20+%20'&zx=RANDOMCRAP&shva=1&disablechatbrowsercheck=1&ui=1','gmailForm','scrollbars=yes,width=680,height=510,top=175,left=75,status=no,resizable=yes');if%20(!document.all)%20T%20=%20setTimeout('popw.focus()',50);void(0);
```
