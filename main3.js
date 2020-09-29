var img = document.createElement('img');

img.src = require('./untitled.png');
// 如果要正常打包的话需要先将图片资源加载进来，然后再将其作为图片路径添加至图片对象
document.body.appendChild(img);

var img1 = document.createElement('img');

img1.src = require('./index.gif');
// 如果要正常打包的话需要先将图片资源加载进来，然后再将其作为图片路径添加至图片对象
document.body.appendChild(img1);
