export const server = Bun.serve({
	async fetch(req) {
		if (server.upgrade(req)) {
			return;
		}
		if (/js$/.test(req.url)) {
			const file = await Bun.file('./public/index.js');
			return new Response(file, {
				headers: { 'Content-Type': 'text/javascript' }
			});
		} else if (/jsx$/.test(req.url)) {
			const file = Bun.file('./public/reference.js');
			return new Response(file, {
				headers: { 'Content-Type': 'text/javascript' }
			});
		} else if (/css$/.test(req.url)) {
			const file = await Bun.file('./public/style.css');
			return new Response(file, {
				headers: { 'Content-Type': 'text/css' }
			});
		} else if (/jpe?g$/.test(req.url)) {
			const pathToFile = req.url.split('/').slice(3);
			const file = Bun.file('./' + pathToFile.join('/'));
			return new Response(file, {
				headers: { 'Content-Type': 'image/jpeg' }
			});
		}
		else {
			const file = await Bun.file('./public/index.html');
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
