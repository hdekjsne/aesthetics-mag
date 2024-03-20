import * as sass from 'sass';

const compiled = await sass.compileAsync('./src/style.scss');
console.log('i\'ve compiled');
Bun.write('./public/style.css', compiled.css);
