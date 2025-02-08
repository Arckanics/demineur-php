

export class Game {
	#session
	constructor(session) {
		this.#session = session;
	}
	
	start() {
		const header = new Headers();
		header.set('Accept', 'application/json');
		header.set('Content-Type', 'application/json');
		const gameSession = {
			"demineur-session-id": this.#session.getSession(),
			"demineur-settings": this.#session.getProperty('settings'),
		};
		fetch(
			'demineur/begin',
			{
				method: "POST",
				headers: header,
				body: JSON.stringify(gameSession)
			}
		)
	}
}