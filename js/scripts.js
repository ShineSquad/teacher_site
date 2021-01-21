function change_nav(_id) {
	let node = document.querySelector('#right_section');
	for (i = 0; i < node.childNodes.length; i++) {
		child = node.childNodes[i];
        if(child.nodeName == 'DIV') {
            document.getElementById(child.id).style.display = 'none';
        }
	}
	document.getElementById(_id).style.display = 'flex';
	if (innerWidth <= 1200) {
		menu.checked = false;
		menu.onchange();
	}
}

var menu = document.querySelector('.check_menu');
menu.onchange = () => {
	let nav = document.querySelector('.high_res'),
		section = document.querySelector('#left_section'),
		title = document.querySelector('.menu_title'),
		node_title = document.querySelector('.low_res');
  	if (menu.checked) {
  		nav.style.display = 'flex';
		section.style.height = '100vh';
		document.body.style.overflow = 'hidden';
		title.style.display = 'none';
		node_title.style.justifyContent = 'flex-end';
  	} else {
  		nav.style.display = 'none';
		section.style.height = 'auto';
		document.body.style.overflow = 'auto';
		title.style.display = 'block';
		node_title.style.justifyContent = 'space-between';
  	}
};
