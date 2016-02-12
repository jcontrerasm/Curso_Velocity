$(document).ready(function() {

	/* EFECTO PROPIO
	========================================================== */

	function efecto (){
		$("#form , .form-group , h3").velocity(
		{
			translateY : [0 , 500],
			opacity: [1 , 0]
		} , {
			duration: 800,
			display: 'block',
			delay: 0,
			easing: [70 , 8]
		});
		
		$("#form").velocity('reverse' , {
			delay: 1000,
			display: 'none'
		});
	}

	$("#efecto1").click(efecto);

	/* EFECTO VELOCITY UI
	========================================================== */
	
	$("#efecto2").click(function(event) {
		//$("#form").velocity('transition.bounceUpIn' , { duration: 1000 });
		$("#form , .form-group , h3").velocity('transition.swoopIn' , { duration: 1000 , stagger: 1000 });
		$("#form").velocity('reverse', { delay: 5000 });
	});


	//Velocity Source : https://github.com/julianshapiro/velocity
	//Velocity UI : http://julian.com/research/velocity/#uiPack


});
