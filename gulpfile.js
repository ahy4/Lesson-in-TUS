var gulp = require('gulp');
// var replace = require('gulp-replace');
var fs = require('fs-extra');
var path = require('path');
var Promise = require('bluebird');

gulp.task("build", function () {
  walk('./local-edit', function (fp) {
    if (fp.match(/(.*)(?:\.([^.]+$))/)[2] === "md") {
      writeMd(fp);
    }
  });
});

function writeMd(fp) {
  var readPath = fp;
  var writePath = fp.replace('local-edit', 'publish');
  fs.mkdirsSync(writePath.split("/").slice(0, -1).join("/"));
  fs.readFile(readPath, 'utf8', function (err, text) {
    var cleanMd = replaceToImage(text);
    fs.writeFile(writePath, cleanMd, function (err) {
      if (!err) {
        console.log('making '+fp+': success!');
      } else {
        console.error('making '+fp+': failure')
      }
    });
  });
}

function replaceToImage(text) {
  var texs = (text.match(/\$([^$]*)\$/g)||[]).map(function (incompleteTex) {
    console.log(incompleteTex);
    var tex = incompleteTex.match(/\$([^$]*)\$/)[1];
    var query = escape(tex);
    return {
      original: incompleteTex.match(/\$([^$]*)\$/)[0],
      imageMd: '<img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20'+query+'">',
    };
  });
  texs.forEach(function (o) {
    // if (typeof o.original === "undefined") return;
    text = text.replace(o.original, o.imageMd);
  });
  return text;
}


function walk(p, fileCallback) {
  fs.readdir(p, function(err, files) {
    if (err) return console.log("Receive err:" + err);
    files.forEach(function(f) {
      var fp = path.join(p, f);
      if(fs.statSync(fp).isDirectory()) {
        walk(fp, fileCallback);
      } else {
        fileCallback(fp);
      }
    });
  });
};


// 使う方
// walk(dir, function(path) {
//   console.log(path); // ファイル１つ受信
// });
