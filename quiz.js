var tree = {
	height: "",
	character: ""
};

function buildTree (tree) {
	tree.height = document.getElementById("height").value;
	// console.log("height innerHTML:", document.getElementById("height").value);
	tree.character = document.getElementById("character").value;
	for (var i = 0; i < tree.height ; i++) {

		for (var n = 0; n < tree.character; n++) {
			
		};
	};
	console.log("tree height:", tree.height);
	console.log("tree char.", tree.character);
}


document.getElementById("button").addEventListener("click", buildTree);