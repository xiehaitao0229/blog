/**
 * Created by XieHaitao on 2017/4/3.
 */
 //  ����
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var coolieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var user = require('./routes/admin/user'); //  ����Ա��¼ҳ��
var admin = require('./routes/admin/admin');  // ����Ա����ҳ��
var admin = require('./routes/admin/cats');  // �������
var admin = require('./routes/admin/posts');  // ���²���
var admin = require('./routes/admin/tags');  // ��ǩ����
var app = express();

//  ����cookieֵ
app.use(session({
    secret: 'blog', //��������session cookieǩ������ֹ�۸�
    resave: false,
    saveUninitialized: true,//saveUninitialized - ǿ�ƽ�δ��ʼ����session�洢�����½���һ��session��δ�趨���Ի�ֵʱ�����ʹ���  δ��ʼ��״̬�����趨һ��cookieǰ������ڵ�½��֤���������˴洢ѹ����Ȩ�޿������а����ġ���Ĭ�ϣ�true��
    cookie: {}
}))

// view engine setup��Ⱦģ���ʽ����
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
// ��Ⱦģ���ļ���ʽ����Ϊ.html
// app.engine('html', require('ejs').__express);
// app.set('view engine', 'html');



app.listen(3000);