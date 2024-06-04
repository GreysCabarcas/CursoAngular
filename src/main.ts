import './style.css'
// import './topics/01-basic-types';
// import './topics/02-object-interface';
// import './topics/04-homework-types.ts';
// import './topics/05-basic-destructuring.ts';
// import './topics/06-function-destructuring.ts';
// import './topics/07-import-export.ts';
 import './topics/08-class.ts';

import { setupCounter } from './counter.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
