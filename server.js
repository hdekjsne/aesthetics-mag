export const server = Bun.serve({
	async fetch(req) {
		if (server.upgrade(req)) {
			return;
		}
		if (/js$/.test(req.url)) {
			const file = await Bun.file('./dist/index.js');
			return new Response(file, {
				headers: { 'Content-Type': 'text/javascript' }
			});
		} else if (/css$/.test(req.url)) {
			const file = await Bun.file('./dist/style.css');
			return new Response(file, {
				headers: { 'Content-Type': 'text/css' }
			});
		} else {
			const file = await Bun.file('./index.html');
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
