window.onload = function() {
		
	var oUsername1 = document.getElementById('username1');
	var oVerifyUserNameMsg = document.getElementById('verifyUserNameMsg');

	
	/*
	验证用户名
	get
		guestbook/index.php
			m : index
			a : verifyUserName
			username : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	oUsername1.onblur = function() { 
		ajax('get', 'guestbook/index.php', 'm=index&a=verifyUserName&username=' + this.value, function(data) {
			var d = JSON.parse(data);
			oVerifyUserNameMsg.innerHTML = d.message;
			if (d.code) {
				oVerifyUserNameMsg.style.color = 'red';
			} else {
				oVerifyUserNameMsg.style.color = 'green';
			}
		});
	}
	

		/*
	用户注册
	get/post
		guestbook/index.php
			m : index
			a : reg
			username : 要注册的用户名
			password : 注册的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	var oPassword1 = document.getElementById('password1');
	var oRegBtn = document.getElementById('btnReg');
	oRegBtn.onclick = function() {
		ajax('post', 'guestbook/index.php', 'm=index&a=reg&username='+oUsername1.value+'&password=' + oPassword1.value, function(data) {
			var d = JSON.parse(data);
			console.log(d)
			alert(d.message);
			
		});
	}
}