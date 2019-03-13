var gameInterval = setInterval(mainLoop, 1000 / 15);
var gameRunning = 1;
var gamePoints = 0;
var gameMode = 0;

document.addEventListener('keydown', function(event) {
	if(event.which === 38) {
		objects["pacman"].cur_movement = "up";
	}
	if(event.which === 40) {
		objects["pacman"].cur_movement = "down";
	}
	if(event.which === 37) {
		objects["pacman"].cur_movement = "left";
	}
	if(event.which === 39) {
		objects["pacman"].cur_movement = "right";
	}
});

document.addEventListener('keyup', function(event) {
	objects["pacman"].cur_movement = null;
});

// Game Loop:
function mainLoop() {
	if(!is_gameEnded()) {
		moveGhosts();
		movePacman();
	} else {
		endGame();
	}
}

function is_gameEnded() {
	if(gameRunning == 0)
		return true;

	if(gameMode == 0) {
		for(var k in objects) {
			if(k != "pacman") {
				if(objects[k].top == objects["pacman"].top && objects[k].left == objects["pacman"].left)
					return true;
			}
		}
	}

	return false;
}

function endGame() {
	clearInterval(gameInterval);
	alert("VERLOREN!!!!");
}

function movePacman() {
	if(objects["pacman"].cur_movement !== null) {
		drehePacman(objects["pacman"].cur_movement);
		move("pacman",objects["pacman"].cur_movement);
	}
}

function moveingGhost(ghostName) {	
	var directions = ["up","down","left","right"];
	var direction = directions[Math.floor(Math.random() * directions.length)];

	var elem = document.getElementById(ghostName);
	if(objects[ghostName].ghost){
		var tmp = elem.src.replace(ghostName+".png","ghost.png");
		elem.src = tmp;
	}
	if(!objects[ghostName].ghost && elem.src.indexOf("ghost.png") > 0) {
		var tmp = elem.src.replace("ghost.png",ghostName+".png");
		elem.src = tmp;
	}


	if(objects[ghostName].cur_movement !== null) {
		if(objects[ghostName].move_cnt <= 7) {
			direction = objects[ghostName].cur_movement;
			objects[ghostName].move_cnt++;
		} else {
			objects[ghostName].move_cnt = 0;
			if(Math.floor(Math.random()*2) % 2 == 0) {
				direction = findPacman(ghostName);
				if(objects[ghostName].ghost)
					direction = directions[Math.floor(Math.random() * directions.length)];
			}
		}
	}

	if(move(ghostName, direction))
		objects[ghostName].cur_movement = direction;
	else
		objects[ghostName].cur_movement = null;
}

function findPacman(ghostName) {
	var diff_top = objects[ghostName].top - objects["pacman"].top;
	var diff_left = objects[ghostName].left - objects["pacman"].left;

	var v_left = diff_left;
	var v_top = diff_top;

	if(v_left < 0)
		v_left = v_left*-1;
	if(v_top < 0)
		v_top = v_top*-1;

	if(v_left > v_top) {
		if(diff_left < 0)
			return "right";
		else
			return "left";
	} else {
		if(diff_top < 0)
			return "down";
		else
			return "up";
	}
}

function move(object, direction) {
	if(typeof object == "string")
		object = document.getElementById(object);

	var new_x = parseInt(object.style.left);
	var new_y = parseInt(object.style.top);

	if(direction == "down")
		new_y += tileSize;
	if(direction == "up")
		new_y -= tileSize;
	if(direction == "left")
		new_x -= tileSize;
	if(direction == "right")
		new_x += tileSize;

	var tmp = getElementAtPoint(new_x, new_y);

	if(tmp.className.substring(9) == "portal" && object.id == "pacman") {
		tmp.classList.remove("portal");
		jumpToPortal(tmp, object);

		return true;
	}

	if(checkIfMoveOK(tmp, object)) {
		final_move(object, new_x, new_y);
		return true;
	}

	return false;
}

function jumpToPortal(curTile, object) {
	var allPortals = document.getElementsByClassName("portal");
	var rand = Math.floor(Math.random() * allPortals.length);
	var new_x = allPortals[rand].offsetLeft;
	var new_y = allPortals[rand].offsetTop;
	final_move(object, new_x, new_y);

	curTile.classList.add("portal");
}

function final_move(object, x, y) {
	object.style.left = x+"px";
	object.style.top = y+"px";
	objects[object.id].top = y;
	objects[object.id].left = x;
}

function checkIfMoveOK(toTile, cur_obj) {
	if((toTile.className == "ghost" && cur_obj.id == "pacman") || (toTile.className == "pacman" && cur_obj.className == "ghost")) {
		if(!objects[toTile.id].ghost)
			gameRunning = 0;
		else {
			if(toTile.className == "ghost" && cur_obj.id == "pacman") {
				increasePoints(100);
				objects[toTile.id].ghost = false;
				final_move(toTile, 378, 402);
			}
		}
	}

	if(toTile.classList.contains("pill") && cur_obj.id == "pacman") {
		increasePoints(10);
		var tmp = toTile.style.backgroundImage.replace(/0\.png/,"9.png");
		toTile.style.backgroundImage = tmp;
		toTile.classList.remove("pill");
	}

	if(toTile.classList.contains("megapill") && cur_obj.id == "pacman") {
		increasePoints(50);
		setGameMode(1);
	}
	
	if(toTile.className.substring(0,8) == "walkable")
		return true;

	return false;
}

function setGameMode(mode) {
	if(mode == 1) {
		for(k in objects) {
			if(k != "pacman") {
				objects[k].ghost = true;
			}
		}
	}

	gameMode = mode;
}

function moveGhosts() {
	moveingGhost("blinky");
	moveingGhost("inky");
	moveingGhost("clyde");
	moveingGhost("pinky");
}