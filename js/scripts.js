function change_nav(_id) {
	let node = document.querySelector('#right_section');
	for (i = 0; i < node.childNodes.length; i++) {
		child = node.childNodes[i];
        if(child.nodeName == 'DIV') {
            document.getElementById(child.id).style.display = 'none';
        }
	}
	document.getElementById(_id).style.display = 'block';
}