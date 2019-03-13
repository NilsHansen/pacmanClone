// Define our level:
var level = [];
level[0] = [
	[3,1,1,1,1,1,1,1,1,1,1,1,1,4,3,1,1,1,1,1,1,1,1,1,1,1,1,4],
	[2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,0,3,1,1,4,0,3,1,1,1,4,0,2,2,0,3,1,1,1,4,0,3,1,1,4,0,2],
	[2,8,2,9,9,2,0,2,9,9,9,2,0,2,2,0,2,9,9,9,2,0,2,9,9,2,8,2],
	[2,0,6,1,1,5,0,6,1,1,1,5,0,6,5,0,6,1,1,1,5,0,6,1,1,5,0,2],
	[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,0,3,1,1,4,0,3,4,0,3,1,1,1,1,1,1,4,0,3,4,0,3,1,1,4,0,2],
	[2,0,6,1,1,5,0,2,2,0,6,1,1,4,3,1,1,5,0,2,2,0,6,1,1,5,0,2],
	[2,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,2],
	[6,1,1,1,1,4,0,2,6,1,1,4,9,2,2,9,3,1,1,5,2,0,3,1,1,1,1,5],
	[9,9,9,9,9,2,0,2,3,1,1,5,9,6,5,9,6,1,1,4,2,0,2,9,9,9,9,9],
	[9,9,9,9,9,2,0,2,2,9,9,9,9,9,9,9,9,9,9,2,2,0,2,9,9,9,9,9],
	[9,9,9,9,9,2,0,2,2,9,9,9,9,9,9,9,9,9,9,2,2,0,2,9,9,9,9,9],
	[1,1,1,1,1,5,0,6,5,9,9,9,9,9,9,9,9,9,9,6,5,0,6,1,1,1,1,1],
	[7,9,9,9,9,9,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,9,9,9,9,7],
	[1,1,1,1,1,4,0,3,4,9,9,9,9,9,9,9,9,9,9,3,4,0,3,1,1,1,1,1],
	[9,9,9,9,9,2,0,2,2,9,9,9,9,9,9,9,9,9,9,2,2,0,2,9,9,9,9,9],
	[9,9,9,9,9,2,0,2,2,9,9,9,9,9,9,9,9,9,9,2,2,0,2,9,9,9,9,9],
	[9,9,9,9,9,2,0,2,2,9,3,1,1,1,1,1,1,4,9,2,2,0,2,9,9,9,9,9],
	[3,1,1,1,1,5,0,6,5,9,6,1,1,4,3,1,1,5,9,6,5,0,6,1,1,1,1,4],
	[2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,0,3,1,1,4,0,3,1,1,1,4,0,2,2,0,3,1,1,1,4,0,3,1,1,4,0,2],
	[2,0,6,1,4,2,0,6,1,1,1,5,0,6,5,0,6,1,1,1,5,0,2,3,1,5,0,2],
	[2,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,2],
	[6,1,4,0,2,2,0,3,4,0,3,1,1,1,1,1,1,4,0,3,4,0,2,2,0,3,1,5],
	[3,1,5,0,6,5,0,2,2,0,6,1,1,4,3,1,1,5,0,2,2,0,6,5,0,6,1,4],
	[2,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,2],
	[2,0,3,1,1,1,1,5,6,1,1,4,0,2,2,0,3,1,1,5,6,1,1,1,1,4,0,2],
	[2,0,6,1,1,1,1,1,1,1,1,5,0,6,5,0,6,1,1,1,1,1,1,1,1,5,0,2],
	[2,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,2],
	[6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5]
];

// Globale variablen:
var playGround = document.getElementById("gameField");
var objects = [];
objects["pacman"] = {top: 27, left: 27, cur_movement: null};
objects["blinky"] = {top: 378, left: 324, cur_movement: null, move_cnt: 0, ghost: false};
objects["clyde"] = {top: 378, left: 405, cur_movement: null, move_cnt: 0, ghost: false};
objects["inky"] = {top: 432, left: 324, cur_movement: null, move_cnt: 0, ghost: false};
objects["pinky"] = {top: 432, left: 405, cur_movement: null, move_cnt: 0, ghost: false};

var tileSize = 27;

// Create the playground:
var tbl = document.createElement("table");
tbl.cellSpacing = 0;
tbl.cellPadding = 0;

for(var y=0;y<level[0].length;y++) {
	var tr = tbl.insertRow(y);
	for(x=0;x<level[0][y].length;x++) {
		var td = tr.insertCell(x);
		var val = level[0][y][x];
		td.style.backgroundImage = "url(images/rand/"+val+".png)";
		td.className = (val == 0 || val >= 7 ? "walkable" : "nowalk");
		if(val == 0) td.className += " pill";
		if(val == 7) td.className += " portal";
		if(val == 8) td.className += " megapill";
	}
}
playGround.appendChild(tbl);

// Create the characters:
for(var k in objects) {
	var tmp = document.createElement("img");
	tmp.id = k;
	tmp.style.top = objects[k].top+"px";
	tmp.style.left = objects[k].left+"px";
	tmp.src = "images/"+k+".png";
	tmp.className = (k == "pacman" ? "pacman" : "ghost");
	playGround.appendChild(tmp);
}

//increasePoints(0);

function drehePacman(richtung) {
	var pcmimg = document.getElementById("pacman");

	pcmimg.style.transform = "rotate(0deg)";
	switch(richtung) {
		case "oben":
		case "norden":
		case "north":
		case "up":
			pcmimg.style.transform = "rotate(-90deg)";
		break;

		case "rechts":
		case "osten":
		case "east":
		case "right":
			pcmimg.style.transform = "rotate(0deg)";
		break;

		case "runter":
		case "sueden":
		case "south":
		case "down":
			pcmimg.style.transform = "rotate(90deg)";
		break;

		case "links":
		case "westen":
		case "west":
		case "left":
			pcmimg.style.transform = "rotate(180deg)";
		break;
	}
}

function getElementAtPoint(x, y, elem) {
	if(typeof elem == "undefined")
		elem = playGround;

	var n_x = (elem.offsetLeft+1) + x;
	var n_y = (elem.offsetTop+1) + y;

	return document.elementFromPoint(n_x,n_y);
}

function increasePoints(points) {
	gamePoints += points;
	document.getElementById("gamePoints").innerHTML = gamePoints;
}