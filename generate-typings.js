var fs = require('fs');
var path = require('path');
var exec = require('sync-exec');

var mkdirSync = function (path) {
  try {
    fs.mkdirSync(path);
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}

var releases = fs.readdirSync('emberDocs');


releases.forEach(function (release) {
    var content = fs.readFileSync('emberDocs/' + release + '/data.json')
    fs.writeFileSync('ember.d.ts/docs.json',content)
    process.chdir('ember.d.ts/');
    console.log(exec('node generate.js'))
    process.chdir('../');
    mkdirSync('emberTypings/' + release) 
    content = fs.readFileSync('ember.d.ts/ember.d.ts')
    fs.writeFileSync('emberTypings/' + release + '/ember.d.ts',content)
})