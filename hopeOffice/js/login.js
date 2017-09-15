var login = {
  init:function(){
    this.goLogin();
    this.getCode();
  },
  code:'',
  createCode:function(){ 
    login.code = ""; 
    var codeLength = 4;//验证码的长度 
    var checkCode = $('.getCode'); 
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
    'S','T','U','V','W','X','Y','Z');//随机数 
    for(var i = 0; i < codeLength; i++) {//循环操作 
    var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35） 
    login.code += random[index];//根据索引取得随机数加到code上 
    } 
    checkCode.val(login.code);//把code值赋给验证码
  },
  getCode:function(){
      $('.getCode').click(function(){
        login.createCode();
        $(this).css({letterSpacing:10+'px'});
      })
  },
  //校验验证码 
  validate:function (){ 
    var inputCode = $('.code').val().toUpperCase(); //取得输入的验证码并转化为大写 
    if(inputCode.length <= 0) { //若输入的验证码长度为0 
    alert("请输入验证码！"); //则弹出请输入验证码 
    } 
    else if(inputCode != login.code ) { //若输入的验证码与产生的验证码不一致时 
    $('.err').show().text('验证码输入错误') //则弹出验证码输入错误 
    login.createCode();//刷新验证码 
    $('.code').val = "";//清空文本框 
    }
    else { //输入正确时 
      return true;
    } 
  },
  reg:/^1[3|4|5|7|8][0-9]{9}$/,
  goLogin:function(){
    $('.entry').click(function(){
      var tel = $('.user').val();
      
      if (login.reg.test(tel)&&login.validate()) {
       
        if($('[name="remember"]').is(':checked')) {
          $('.user').val();
        }
        $.ajax({
          url:'',
          type:'',
          dataType:'',
          data:{

          },
          success:function(data){
            if (data.status==1) {
              location.href="index.html";
            }else{
              $('.err').show().text(data.msg);
            }
          },
          error:function(err){
   
          }
        })
      }
    })
  }
}