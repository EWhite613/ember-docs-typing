var http = require('http');
var fs = require('fs');
var path = require('path');
var request = require('sync-request');
var exec = require('sync-exec');

var options = {
    'headers': {
        'user-agent': 'ciena-frost',
        'Authorization': 'token ' + process.env.ghToken
    }
};

var res = request('GET', 'https://api.github.com/repos/emberjs/ember.js/releases?page=1', options);
var pageCounter = 1;
var body = JSON.parse(res.getBody());
while (body.length >= 1) {
    body.forEach(function(tag) {

        if (tag.tag_name.match(/^v[0-9]+\.[0-9]+\.[0-9]+$/i)) {
            console.log(tag.tag_name)
            console.log(exec('git checkout tags/' + tag.tag_name, {
                cwd: '/ember.js'
            }))
            console.log('Current Working directory')
            console.log(process.cwd())
            console.log(exec('yuidoc ember.js/ -o emberDocs/' + tag.tag_name))
        }
    })
    pageCounter++
    var res = request('GET', 'https://api.github.com/repos/emberjs/ember.js/releases?page=' + pageCounter, options);

    var body = JSON.parse(res.getBody());
}