import { plugin } from "bun";
import sass from 'sass';

plugin({
	name: 'sass',
	setup(build) {
		build.onLoad({ filter: /\.scss$/ }, async (args) => {
			const raw = Bun.file(args.path);
      const result = await sass.compileStringAsync(raw);
      return {
        contents: result.css.toString(),
        loader: "css"
      };
    });
	},
});
