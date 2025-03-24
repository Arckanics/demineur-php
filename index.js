import { settingsSetup } from "./js/settings";
import { GameRequest } from "./js/game-request";

const initDemineurGame = async ($name) => {
	const container = document.querySelector($name);
	
	
	// installing game in html
	const reqMan = new GameRequest('/demineur')
	
	reqMan.send().then(req => req.text())
	.then(res => {
		container.innerHTML = res;
		settingsSetup(container);
	})
	
	
};


initDemineurGame("#demineur");