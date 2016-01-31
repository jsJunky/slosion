var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body><section id="test"></section></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};