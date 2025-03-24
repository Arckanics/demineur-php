import { SessionManager } from "./localstorageSession";
import { Game } from "./game";

export const settingsSetup = (main) => {
	const frame = main
	const inputs = [...frame.querySelectorAll('select')];
	const start = frame.querySelector('#start-game');
	
	
	start.onclick = (e) => {
		e.preventDefault();
		e.stopImmediatePropagation();
		e.stopPropagation();
		const settings = {}

		inputs.map(i => {
			const name = i.name
			settings[name] = i.value
		})

		const session = new SessionManager();
		session.setSession()
		session.setProperty('settings', JSON.stringify(settings));
		console.log('click')
		new Game(session).start();
	}
}