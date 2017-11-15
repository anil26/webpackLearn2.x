import _ from 'lodash';
import printMe from './print.js';
import { cube } from './maths.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
//  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
element.innerHTML = [
    'Hello webpack!',
   '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  // Lodash, currently included via a script, is required for this line to work
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
if (module.hot) {
 module.hot.accept('./print.js', function() {
   console.log('Accepting the updated printMe module!');
   printMe();
 })
}
