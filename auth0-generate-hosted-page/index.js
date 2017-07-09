var fs = require('fs');
var path = require('path');
var htmlPath = path.join(__dirname, "index.html");
var htmlBodyPath = path.join(__dirname, "../auth0-custom-ui/index.html");
var cssPath = path.join(__dirname, "../auth0-custom-ui/css/style.css");
var jsPath = path.join(__dirname, "../auth0-custom-ui/js/index.js");

var htmlFile = fs.readFileSync(htmlPath, 'utf8');
var cssFile = fs.readFileSync(cssPath, 'utf8');
var jsFile = fs.readFileSync(jsPath, 'utf8');
var htmlBodyFile = fs.readFileSync(htmlBodyPath, 'utf8');
var hb = require('handlebars');
var replaceWhiteSpace = htmlBodyFile.replace(/\n/g,'').replace(/  +/g, '');
var htmlBody = replaceWhiteSpace.match(/<section>(.*?)<\/section>/g);

generateHostedPage = function (data) {
  var template = hb.compile(htmlFile);
  var content = data;
  var html = template(data);
  var filename = 'auth0-hosted.html';
  fs.writeFileSync(filename, html);
};

var data = {
	css: cssFile,
	js: jsFile,
	html: htmlBody
}

generateHostedPage(data);