import { DivConnector } from "./div-connector";


export class Game {
	#session
	#frame
	#gameGrid
	constructor(session) {
		this.#session = session;
	}
	
	start(main) {
		this.#frame = main;
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
		).then(response => response.json())
		.then(data => {
			data.size = Number(data.size);
			data.level = Number(data.level);
			this.#build(data)
		});
	}
	
	
	#build (settings){
		this.#frame.innerHTML = settings.view;
		const { size } = settings
		this.#gameGrid = []
		const gameView = document.querySelector('#game-grid')
		for (let y = 0; y < size; y++) {
			this.#gameGrid.push([])
			for (let x = 0; x < size; x++) {
				const cell = new DivConnector(document.createElement('div'))
				cell.addClass('cell')
				cell.setProp('x', x)
				cell.setProp('y', y)
				gameView.append(cell.getElement())
				
				cell.getElement().onclick = (e) => this.#interract(cell, e)
				this.#gameGrid[y].push(cell)
			}
		}
		
		const grid = gameView
		grid.style.display = "grid"
		grid.style.width = "fit-content"
		grid.style.gridTemplateColumns = `repeat(${size}, auto)`
		grid.style.gridAutoFlow = "row"
	}
	
	#interract (cell, e) {
		e.preventDefault()
		e.stopImmediatePropagation();
		e.stopPropagation();
		console.log(cell.getProps())
	}
}