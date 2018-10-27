var ziptree = require('./index');

var root;
for (var i = 0; i < 10; i++) {
    root = ziptree.insert(Math.floor(Math.random() * 100),root);

}

console.log(root);