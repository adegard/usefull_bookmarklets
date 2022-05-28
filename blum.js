
// variation of original https://blummy.com/blummy.js
var Blummy = {
	init: function() {
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "https://blummy.com/blummy.css?user=anon&87";
		var rootNode = document.documentElement.childNodes[0];
		if ( '#comment' === rootNode.nodeName ) {
			rootNode = rootNode.nextSibling;
		}
		rootNode.appendChild(link);
		this.div = document.createElement("div");
		this.div.className = "blummy";
		var op = 95;
		this.div.style.opacity = op/100;
		this.div.style.filter = 'alpha(opacity=' + op + ')';

div = document.createElement('div');
div.id = '__blummy_1_part';
div.style.top = '10px';
div.style.left = '5px';
div.style.zIndex = 1;
a = document.createElement('a');
a.href = 'javascript:void(Blummy.toggle(1))';
a.title = '           url  \' + ((location.href.length > 50) ? location.href.substr(0, 50) + \'...\' : location.href) + \'       title         tags         notes                    ';
a.innerHTML = '';
if (document.all) {
a.innerHTML += '<img src="https://blummy.com/icon.php?id=1" alt="del.icio.us" style="margin-right: 3px; width: 16px; height: 16px" />';
} else {
a.innerHTML += '<img src="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP8AAADd3d0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMDAwMDAwAAAAAAAAAAAwMDAwMDAwMAAAAAAAAAAAMDAwMDAwMDAAAAAAAAAAADAwMDAwMDAwAAAAAAAAAAAwMDAwMDAwMAAAAAAAAAAAMDAwMDAwMDAAAAAAAAAAADAwMDAwMDAwAAAAAAAAAAAwMDAwMDAwMBAQEBAQEBAQICAgICAgICAQEBAQEBAQECAgICAgICAgEBAQEBAQEBAgICAgICAgIBAQEBAQEBAQICAgICAgICAQEBAQEBAQECAgICAgICAgEBAQEBAQEBAgICAgICAgIBAQEBAQEBAQICAgICAgICAQEBAQEBAQECAgICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" alt="del.icio.us" style="margin-right: 3px; width: 16px; height: 16px" />';
}a.innerHTML += 'del.icio.us';
div.appendChild(a);
this.div.appendChild(div);
div = document.createElement('div');
div.id = '__blummy_1';
div.style.top = '10px';
div.style.left = '5px';
div.style.zIndex = 2;
div.style.display = 'none';
a = document.createElement('a');
a.href ='javascript:void(Blummy.toggle(1))';
a.innerHTML = '';
if (document.all) {
a.innerHTML += '<img src="https://blummy.com/icon.php?id=1" alt="del.icio.us" style="margin-right: 3px; width: 16px; height: 16px" />';
} else {
a.innerHTML += '<img src="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP8AAADd3d0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMDAwMDAwAAAAAAAAAAAwMDAwMDAwMAAAAAAAAAAAMDAwMDAwMDAAAAAAAAAAADAwMDAwMDAwAAAAAAAAAAAwMDAwMDAwMAAAAAAAAAAAMDAwMDAwMDAAAAAAAAAAADAwMDAwMDAwAAAAAAAAAAAwMDAwMDAwMBAQEBAQEBAQICAgICAgICAQEBAQEBAQECAgICAgICAgEBAQEBAQEBAgICAgICAgIBAQEBAQEBAQICAgICAgICAQEBAQEBAQECAgICAgICAgEBAQEBAQEBAgICAgICAgIBAQEBAQEBAQICAgICAgICAQEBAQEBAQECAgICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" alt="del.icio.us" style="margin-right: 3px; width: 16px; height: 16px" />';
}a.innerHTML += 'del.icio.us';
div.appendChild(a);
div.innerHTML += '<br />';
div2 = document.createElement('div');
div2.style.backgroundColor = '#fff';
div2.style.border = '1px solid #28d524';
div2.style.width = '300px';
div2.innerHTML = '<form action="http://del.icio.us/post" target="_blank" onsubmit="if (Blummy.settings.close_blummlet) Blummy.close()">  <input type="hidden" name="jump" value="doclose" class="hidden" />  <table>  <tr><td>url</td><td>' + ((location.href.length > 50) ? location.href.substr(0, 50) + '...' : location.href) + '<input type="hidden" name="url" value="' + location.href + '" style="display: none" /></td></tr>  <tr><td>title</td><td><input type="text" name="description" value="' + document.title + '" class="text" /></td></tr>  <tr><td>tags</td><td><input type="text" name="tags" value="" class="text" /></td></tr>  <tr><td>notes</td><td><input type="text" name="extended" value="" class="text" /></td></tr>  <tr><td></td><td><input type="submit" value="store"/></td></tr>  </table>  </form>';
div.appendChild(div2);
this.div.appendChild(div);
div = document.createElement('div');
div.id = '__blummy_2_part';
div.className = 'part';
div.style.top = '30px';
div.style.left = '5px';
div.style.zIndex = 1;

div.style.width = '128px';
div.style.height = '17px';


a = document.createElement('a');
a.href = 'http://www.bandnews.org';
a.title = 'http://www.bandnews.org';
a.onmousedown = Blummy.storeSelection;
a.onclick = Blummy.close;
a.innerHTML = '';
if (document.all) {
a.innerHTML += '<img src="https://blummy.com/icon.php?id=8" alt="Bandnews.org" style="margin-right: 3px; width: 16px; height: 16px" />';
} else {
a.innerHTML += '<img src="data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAADW5+oAAACxAJxmAAAAANQAsMrPAAAA7QAAAG8AAACyANXn6gDV5ukAADJgAK/KzgDV5+kAAADuAAAzYAAAM2EAwerzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBANDQ0DBwcBAQkOEBAQEBAQEA0NDQ0NDQ0BBxAKEBAQEBAQEA4NBQ0LCw8HBxAQEBAQEBAPCQgIDAgOEA8BBxAQEBAQDgsLCwsLDhAPEAYQDw8KDw4ADAwMCAoKEBAQEA4QEBAQDg8OCg8QEBAQEBAOEBAQEAwMCQAAEBAQEBAQDxAQEBAJDQ0NCBAQEBAQEA8QEBAKDAgIDAAPEBAQEA4QDxAQDwkCCQIJDhAQEBAQEBAQEA4MDAkMDAoQEBAQEBAQEBAODw4KDgoPEBAQEBAQEBAQCgsECwsLDhAQEBAQEBAQEBAPDg4PDxAQEBAQEBAQEBAQEBAPEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" alt="Bandnews.org" style="margin-right: 3px; width: 16px; height: 16px" />';
}a.innerHTML += 'Bandnews.org';
div.appendChild(a);
this.div.appendChild(div);
div = document.createElement('div');
div.id = '__blummy_9_part';
div.className = 'part';
div.style.top = '90px';
div.style.left = '180px';
div.style.zIndex = 1;

div.style.width = '142px';
div.style.height = '20px';

a = document.createElement('a');
a.href = 'javascript:r=\"\";q=Blummy.getSelection();if (document.referrer) r=document.referrer;if (typeof(_ref)!= \"undefined\") r=_ref;Blummy.href(\"http://blogmarks.net/my/new.php\" +\"?title=\" + encodeURIComponent( document.title )+\"&url=\" + encodeURIComponent( location.href )+\"&summary=\" + encodeURIComponent( q )+\"&via=\" + encodeURIComponent( r ));';
a.title = 'javascript:r=\"\";q=Blummy.getSelection();if (document.referrer) r=document.referrer;if (typeof(_ref)!= \"undefined\") r=_ref;Blummy.href(\"http://blogmarks.net/my/new.php\" +\"?title=\" + encodeURIComponent( document.title )+\"&url=\" + encodeURIComponent( location.href )+\"&summary=\" + encodeURIComponent( q )+\"&via=\" + encodeURIComponent( r ));';
a.onmousedown = Blummy.storeSelection;
a.onclick = Blummy.close;
a.innerHTML = '';
if (document.all) {
a.innerHTML += '<img src="https://blummy.com/icon.php?id=9" alt="Add Blogmarks.net" style="margin-right: 3px; width: 16px; height: 16px" />';
} else {
a.innerHTML += '<img src="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AA/jfgBTU1MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAICAgIAAAAAAAAAAAAAAAACAgICAgIAAAAAAAAAAAAAAgICAgICAgIAAAAAAAAAAAICAgICAgICAgIAAAAAAAACAgICAgICAgICAAAAAAAAAgICAgICAgICAgAAAAAAAAICAgICAgICAAAAAAAAAAACAgICAgIDAwAAAAAAAAAAAgICAgMDAwMDAwAAAAAAAAICAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMAAAAAAAAAAAMDAwMDAwAAAAAAAAAAAAADAwMDAAAAAAAAAAAAAAAAAwMAAAAAAAAAAAAAAOf/AADh/wAA4H8AAOAfAADgBwAA4AcAAOAHAADgHwAA4B8AAOAHAADgBwAA4AcAAOAfAADgfwAA4f8AAOf/AAA=" alt="Add Blogmarks.net" style="margin-right: 3px; width: 16px; height: 16px" />';
}a.innerHTML += 'Add Blogmarks.net';
div.appendChild(a);
this.div.appendChild(div);
div = document.createElement('div');
div.id = '__blummy_13_part';
div.className = 'part';
div.style.top = '90px';
div.style.left = '10px';
div.style.zIndex = 1;

div.style.width = '51px';
div.style.height = '18px';

a = document.createElement('a');
a.href = 'javascript:domain=location.host.replace(/^(.*?)\\.?([a-z0-9-]+.[a-z]+)$/, \'$2\');Blummy.href(\"http://dnsstuff.com/tools/whois.ch?ip=\" + domain)';
a.title = 'javascript:domain=location.host.replace(/^(.*?)\\.?([a-z0-9-]+.[a-z]+)$/, \'$2\');Blummy.href(\"http://dnsstuff.com/tools/whois.ch?ip=\" + domain)';
a.onmousedown = Blummy.storeSelection;
a.onclick = Blummy.close;
a.innerHTML = '';
a.innerHTML += 'Whois';
div.appendChild(a);
this.div.appendChild(div);
div = document.createElement('div');
div.id = '__blummy_14_part';
div.className = 'part';
div.style.top = '70px';
div.style.left = '180px';
div.style.zIndex = 1;

div.style.width = '138px';
div.style.height = '24px';

a = document.createElement('a');
a.href = 'javascript:Blummy.href(\'http://www.bloglines.com/sub/\'+location.href)';
a.title = 'javascript:Blummy.href(\'http://www.bloglines.com/sub/\'+location.href)';
a.onmousedown = Blummy.storeSelection;
a.onclick = Blummy.close;
a.innerHTML = '';
if (document.all) {
a.innerHTML += '<img src="https://blummy.com/icon.php?id=14" alt="Sub with Bloglines" style="margin-right: 3px; width: 16px; height: 16px" />';
} else {
a.innerHTML += '<img src="data:image/x-icon;base64," alt="Sub with Bloglines" style="margin-right: 3px; width: 16px; height: 16px" />';
}a.innerHTML += 'Sub with Bloglines';
div.appendChild(a);
this.div.appendChild(div);
div = document.createElement('div');
div.id = '__blummy_15_part';
div.className = 'part';
div.style.top = '50px';
div.style.left = '180px';
div.style.zIndex = 1;

div.style.width = '147px';
div.style.height = '23px';

a = document.createElement('a');
a.href = 'javascript:Blummy.href(\'http://rojo.com/add-subscription/?resource=\'+location.href)';
a.title = 'javascript:Blummy.href(\'http://rojo.com/add-subscription/?resource=\'+location.href)';
a.onmousedown = Blummy.storeSelection;
a.onclick = Blummy.close;
a.innerHTML = '';
if (document.all) {
a.innerHTML += '<img src="https://blummy.com/icon.php?id=15" alt="Subscribe with Rojo" style="margin-right: 3px; width: 16px; height: 16px" />';
} else {
a.innerHTML += '<img src="data:image/x-icon;base64," alt="Subscribe with Rojo" style="margin-right: 3px; width: 16px; height: 16px" />';
}a.innerHTML += 'Subscribe with Rojo';
div.appendChild(a);
this.div.appendChild(div);
var div, div2, img, a;
div = document.createElement('div');
div.className = 'copyright';
div.innerHTML = 'this is <a class="blummyhome" href="https://blummy.com/">blummy</a> (<a class="blummygrey" href="https://blummy.com/config.php?user=anon">config</a>) | &copy; <a class="blummygrey" style="text-decoration: none" href="https://alexander.kirk.at/">a.kirk</a> 2006 | user <b>anon</b>';

var a = document.createElement('a');
a.className = 'blummygrey';
a.href = 'javascript:void(Blummy.close())';
a.innerHTML = 'close';


this.div.appendChild(div);

div = document.createElement('div');
div.className = 'close';
div.style.right = "2px";
div.style.top = "0px";
div.appendChild(a);
this.div.appendChild(div);
this.div.style.height = '130px';
this.div.style.width = '362px';
this.div.id = 'blummy';
var w = (document.all) ? document.body.offsetWidth : window.innerWidth;
this.div.style.left = Math.floor((w - 362) * 10 / 100) + 'px';

		if (document.all) {
			document.documentElement.childNodes[1].appendChild(this.div);
		} else {
			document.documentElement.appendChild(this.div);
		}
		var l = document.getElementById('loadingblummy');
		if (!l) l = document.getElementById('l_blm');
		if (l) {
			l.style.display = 'none';
		}
		this.show();		this.show_message();
					},	
	scrollPos: function() {
		if (document.all) {
			return document.body.scrollTop;
		} else {
			return window.pageYOffset;
		}
	},
	
	show_message: function() {
		var i = Math.floor(Math.random() * this.messages.length + 0.5);
		if (i == 0 || 'anon' == 'anon') {
			return;
		}
		div = document.createElement('div');
		div.id = '__blummy_msg';
		div.style.top = '115px';
		div.style.width = '352px';
		div.style.left = '5px';
		div.style.zIndex = 1;
		div.className = "blummymsg";
		div.style.backgroundColor = "#fff";
		var m = this.messages[i-1];
		m += ' ciao ';
		div.innerHTML = m;
		this.div.appendChild(div);
	},
	show: function() {
		var el = document.getElementById(this.div.id);
		el.style.display = "block";
		if ((document.all && !window.opera)
		|| (document.all && window.opera && window.opera.version() < 9)) {
			p = this.scrollPos();
			if (this.pos != p) {
				el.style.top = p + "px";
				this.posWiki();
				this.pos = p;
			}
			if (!this.scrollInterval) this.scrollInterval = window.setInterval("Blummy.show()", 1000);
		} else {
			//el.style.top = 0;
			el.style.position = "fixed";
		}
	},
	wikiPos: 0,
	showWiki: function(pos) {
		var d = document.getElementById("blummy_wiki");
		if (d) {
			if (pos && this.wikiPos != pos) {
				this.wikiPos = pos;
				this.posWiki();
			} else {
				d.style.display = (d.style.display != "block") ? "block" : "none";
			}

		} else {
			d = document.createElement("div");
			d.id = "blummy_wiki";
			d.innerHTML = '<iframe src="https://blummy.com/wiki.php"></iframe>';
			d.className = "blummy";
			d.style.backgroundColor = this.div.style.backgroundColor;
			d.style.opacity = this.div.style.opacity;
			d.style.filter = this.div.style.filter;
			d.style.height = this.div.style.height;
			if (document.all) {
				document.documentElement.childNodes[1].appendChild(d);
			} else {
				document.documentElement.appendChild(d);
			}
			d.style.display = "block";
			if (pos) {
				this.wikiPos = pos;
			}
			this.posWiki();
		}
	},
	posWiki: function() {
		var d = document.getElementById("blummy_wiki");
		if (!d) { return false; }
		if (document.all
		|| (document.all && window.opera && window.opera.version() < 9)) {
			d.style.position = "absolute";
		} else {
			d.style.position = "fixed";
		}
		d.style.borderLeft = "1px solid #28d524";
		d.style.borderRight = "1px solid #28d524";
		switch(this.wikiPos) {
			case 1: // left
				d.style.width = "200px";
				d.style.height = this.div.style.height;
				d.style.top = 0;
				d.style.left = (parseInt(this.div.style.left) - parseInt(d.style.width) - 1) + "px";
				d.style.borderRight = 0;
				break;
			case 2: // bottom
				d.style.width = this.div.style.width;
				d.style.height = "80px";
				d.style.top = (parseInt(this.div.style.height) + 1) + "px";
				d.style.left = this.div.style.left;
				break;
			case 3: // right
				d.style.width = "200px";
				d.style.height = this.div.style.height;
				d.style.top = 0;
				d.style.left = (parseInt(this.div.style.left) + parseInt(this.div.style.width) + 2) + "px";
				d.style.borderLeft = 0;
				break;
			default:
				d.style.display = "none";
		}
		d.firstChild.style.width = d.style.width;
		d.firstChild.style.height = d.style.height;
	},
	close: function() {
		if (this != Blummy) {
		        return Blummy.close();
		}
		var d = document.getElementById(this.div.id);
		var w = document.getElementById("blummy_wiki");
		if (d.style.display != "none") {
			window.clearInterval(this.scrollInterval);
			if (w) w.style.display = 'none';
			d.style.display = "none";
			this.pos = -1;
			this.scrollInterval = null;
		} else {
			this.show();
			if (w) w.style.display = 'block';
			
		}
	},
	storeSelection: function() {
		if (window.getSelection) {
			s = window.getSelection();
		} else if (document.getSelection) {
			s = document.getSelection();
		} else if (document.selection) {
			s = document.selection.createRange().text;
		}
		document.getElementById("blummy").setAttribute('selection', s);
		return true;
	},
	getSelection: function(question) {
		s = document.getElementById("blummy").getAttribute('selection');
		if (s == '') {
			if (typeof(question) != 'undefined' && question != '') {
				s = prompt(question, '');
			}
		}
		return s;
	},
	href: function(url) {
				location.href = url;
			},
	toggle: function(id) {
		part = document.getElementById("__blummy_" + id + "_part");
		x = document.getElementById("__blummy_" + id);
		if (part.style.display == "none") {
			part.style.display = "block";
			x.style.display = "none";
		} else {
			part.style.display = "none";
			x.style.display = "block";
		}
	},
	a: function(href, onclick) {
		a = document.createElement("a");
		a.setAttribute("href", href);
		a.setAttribute("onclick", onclick);
		return a;
	},
	selection: '',
	scrollInterval: null,
	pos: -1
};
Blummy.init();

