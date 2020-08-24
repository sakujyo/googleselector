function rewrite() {
//var a = []
let f = (n) => {
    if (n.tabIndex > -1) {
        //a.push(n);
        //console.log(`${n.tagName}: ${n.tabIndex}`);
		n.tabIndex = -1;
    }
    for (const e of n.childNodes) {
        f(e);
    }
}
f(document.body);
var elements = []
for (const e of document.body.getElementsByTagName('h3')) {
	e.tabIndex = 0;
	elements.push(e);
}
document.getElementsByClassName('gLFyf gsfi')[0].tabIndex = 0;
for (const e of document.getElementsByClassName('G0iuSb')) {
	e.tabIndex = 0;
}
//document.getElementsByClassName('G0iuSb')[0].tabIndex = 0;
//document.getElementsByClassName('G0iuSb')[1].tabIndex = 0;

	for (const el of elements) {
		el.addEventListener('focus', (e) => {
			let f = (e) => { if (e.tagName == 'BODY') { return 0; } else { return e.offsetTop + f(e.offsetParent); }}
			let renderHeight = window.innerHeight;
			let rh = renderHeight / 2;
			let y = f(e.target) + e.target.offsetHeight / 2;
			window.scrollTo(0, y - rh);
		});
	}

}
rewrite();
