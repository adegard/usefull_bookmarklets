# Usefull bookmarklets

 Google Drive Search

For a fast way to search Google Drive files, the simple Google Drive bookmarklet just prompts you for the search term. The Google Drive page will then display in your tab with the results. It works exactly like the search box, if you have one, in your toolbar. But, if you want to save some space by removing that search box, you can use this Google Drive  Search bookmarklet instead.

Add this to your bookmarks:

```
javascript:q = - + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); if (!q) q = prompt("Search terms? ... ", ""); if (q!=null) location="https://drive.google.com/drive/search?q=" + escape(q).replace(/ /g, "+"); void 0

```
