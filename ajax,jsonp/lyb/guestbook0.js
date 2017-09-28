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
	oUsername1.onblur = function() {   //失去焦点
		ajax('get', 'guestbook/index.php', 'm=index&a=verifyUserName&username=' + this.value, function(data) {
			//alert(data);
			var d = JSON.parse(data);
			console.log(d)
			
			oVerifyUserNameMsg.innerHTML = d.message;
			
			if (d.code) {
				oVerifyUserNameMsg.style.color = 'red';
			} else {
				oVerifyUserNameMsg.style.color = 'green';
			}
		});
	}
	
}