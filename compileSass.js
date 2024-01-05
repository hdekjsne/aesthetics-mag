import * as sass from 'sass';

const compiled = await sass.compileAsync('./src/style.scss');
//console.log(compiled.css);
Bun.write('./dist/style.css', compiled.css);
