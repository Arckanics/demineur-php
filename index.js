import { settingsSetup } from "./js/settings";

const initDemineurGame = async () => {
	const container = document.querySelector("#demineur-game-settings-form");
	
	settingsSetup(container);
};


initDemineurGame();