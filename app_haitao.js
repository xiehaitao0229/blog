/**
 * Created by XieHaitao on 2017/4/3.
 */
 //  引包
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var coolieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var user = require('./routes/admin/user'); //  管理员登录页面
var admin = require('./routes/admin/admin');  // 管理员操作页面
var admin = require('./routes/admin/cats');  // 分类操作
var admin = require('./routes/admin/posts');  // 文章操作
var admin = require('./routes/admin/tags');  // 标签操作
var app = express();

//  设置cookie值
app.use(session({
    secret: 'blog', //用它来对session cookie签名，防止篡改
    resave: false,
    saveUninitialized: true,//saveUninitialized - 强制将未初始化的session存储。当新建了一个session且未设定属性或值时，它就处于  未初始化状态。在设定一个cookie前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的。（默认：true）
    cookie: {}
}))

// view engine setup渲染模板格式设置
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
// 渲染模板文件格式设置为.html
// app.engine('html', require('ejs').__express);
// app.set('view engine', 'html');



app.listen(3000);