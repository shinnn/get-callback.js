/*!
 * get-callback | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-callback.js
*/

window.getCallback = function getCallback(args) {
  if (args.length === 0) {
    throw new Error('More than one argument is required.');
  }

  var maybeCb = args[args.length - 1];

  if (typeof maybeCb !== 'function') {
    throw new Error('The last argument should be a callback function.');
  }

  return maybeCb;
};
