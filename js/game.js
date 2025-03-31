import { DivConnector } from "./div-connector";


export class Game {
	#session
	#frame
	#gameGrid
	constructor(session) {
		this.#session = session;
	}
	
	#jsonHeader() {
		const header = new Headers();
		header.set('Accept', 'application/json');
		header.set('Content-Type', 'application/json');
		return header;
	}
	
	start(main) {
		this.#frame = main;
		const header = this.#jsonHeader();
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
				cell.getElement().oncontextmenu = (e) => this.#interract(cell, e)
				this.#gameGrid[y].push(cell)
			}
		}
		
		const grid = gameView
		grid.style.display = "grid"
		grid.style.width = "fit-content"
		grid.style.gridAutoFlow = "row"
		grid.style.gridTemplateColumns = `repeat(${size}, auto)`
		
	}
	
	#interract (cell, e) {
		e.preventDefault()
		e.stopImmediatePropagation();
		e.stopPropagation();
		const body = {... cell.getProps() }
		body.action = e.type === "click" ? "open" : "mark";
		const gameSession = {
			"demineur-session-id": this.#session.getSession(),
			"demineur-interracted": body
		}
		const header = this.#jsonHeader()
		fetch('/demineur/update', {
			headers: header,
			method: 'PUT',
			body: JSON.stringify(gameSession)
		}).then(response => response.json())
		.then(data => {
			const { matrix } = data
			
			//
			// const size = Number(data.size)
			//
			// for (let y = 0; y < size; y++) {
			// 	for (let x = 0; x < size; x++) {
			// 		cell = matrix[y][x]
			// 		const HTMLCell = this.#gameGrid[y][x]
			// 		if (cell.opened === true) {
			// 			const txt = cell.neighboringMines > 0 ? cell.neighboringMines : ''
			// 			HTMLCell.text(txt)
			// 			HTMLCell.getElement().style.backgroundColor = "rgba(0,185,41,0.4)"
			// 		} else {
			// 			HTMLCell.text('')
			// 			HTMLCell.getElement().style.backgroundColor = ""
			// 		}
			//
			// 		if (cell.isMarked) {
			// 			HTMLCell.getElement().style.backgroundColor = "rgba(185,83,0,0.4)"
			// 		}
			// 	}
			// }
			
			
			matrix.map($case => {
				const cell = this.#gameGrid[$case.case.y][$case.case.x]
				const txt = $case.neighboringMines > 0 ? $case.neighboringMines : ''
				cell.setProp('opened', $case.opened)
				cell.setProp('marked', $case.isMarked)
				if ($case.opened) {
					cell.text(txt)
				}
			})
		})
	}
	
	
}