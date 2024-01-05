export const server = Bun.serve({
	async fetch(req) {
		if (/js$/.test(req.url)) {
			console.log(req.url);
			const file = await Bun.file('./dist/index.js');
			if (server.upgrade(req)) {
				return;
			}
			return new Response(file, {
				headers: { 'Content-Type': 'text/javascript' }
			});
		} else {
			const file = await Bun.file('./index.html');
			if (server.upgrade(req)) {
				console.log('upgraded ws');
				return;
			}
			return new Response(file, {
				headers: { 'Content-Type': 'text/html' }
			});	
		}
	},
	websocket: {
		message(ws, message) {
			ws.send(message);
		}
	}
});
