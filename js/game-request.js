export class GameRequest {
	#req;
	#method = 'GET'; // Définit par défaut la méthode HTTP comme GET
	#body;
	#customHeaders = {}
	#headers = { 'X-Requested-With': 'XMLHttpRequest' }; // Ajoute "XMLHttpRequest" : "TRUE" à vos en-têtes
	
	constructor(url) {
		this.#req = url;
	}
	
	setUrl(url) {
		this.#req = url
	}
	setMethod(method) {
		if ([ 'GET', 'POST', 'PUT', 'DELETE' ].includes(method.toUpperCase())) { // Vérifie que la méthode est valide
			this.#method = method.toUpperCase();
		} else {
			throw new Error('Invalid HTTP method');
		}
	}
	
	setBody(body) {
		if (typeof body === 'object' && !(body instanceof Blob)) { // Si l'objet n'est pas un Blob
			try {
				this.#body = JSON.stringify(body); // Essaye de le stringifier en JSON
			} catch (e) {
				console.error('Error when stringifying the body:', e);
			}
		} else if (typeof body === 'boolean') {
			this.#body = body.toString(); // Convertit le booléen en chaîne si celui-ci est un booléen
		} else {
			this.#body = body; // Si ce n'est pas un objet ou un booléen, utilise directement le corps
		}
	}
	
	setHeader(key, value) {
		if (typeof key === 'string' && typeof value === 'string') { // Vérifie que les clés et valeurs sont des chaînes de caractères
			this.#customHeaders[key] = value;
		} else {
			throw new Error('Invalid header');
		}
	}
	
	async send() {
		const mixedHeaders = { ...this.#customHeaders, ...this.#headers };
		
		try {
			return await fetch(this.#req, {
				method: this.#method,
				headers: mixedHeaders,
				body: this.#body || null
			});
		} catch (error) {
			throw error;  // Lever une erreur si quelque chose se passe mal durant la requête
		}
	}
}