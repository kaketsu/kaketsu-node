var express = require('express');
var router = express.Router();
router.get('/login', function(req, res){
    return res.send('这里将会是登陆页面');
});
router.get('/register', function(req, res){
    return res.send('这里将会是注册页面');
});
// 其他的账户控制器
module.exports = router;