var tree = {
	height: "",
	character: ""
};
var row = "";
var space = " ";

function buildTree (tree) {
	tree.height = document.getElementById("height").value;
	// console.log("height innerHTML:", document.getElementById("height").value);
	tree.character = document.getElementById("character").value;
	for (var i = 1; i <= tree.height ; i+= 1) {
		// console.log("i:", i);
			row += tree.character; 
			space = " ";
			if (i>1) {
				row += tree.character;
			};
		for (var n = tree.height-i; n >= 1; n--) {
			space += " "; 
		};
		console.log("row:", space + row);
	};
	console.log("tree height:", tree.height);
	console.log("tree char.", tree.character);
}


document.getElementById("button").addEventListener("click", buildTree);