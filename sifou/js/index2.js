var images = $(".banner2 > li"),
			len = images .length,
			currenIndex = 0,nextIndex = 1,timer=null;
			//pages = $("")
		
		function move() {
			$(".banner2 > li2").eq(currenIndex).fadeOut(0);
			$(".banner2 > li2").eq(nextIndex).fadeIn(0);

			$("#pages2 > i").eq(currenIndex).removeClass("curr");
			$("#pages2 > i").eq(nextIndex).addClass("curr");

			currenIndex = nextIndex;
			nextIndex++;

			if (nextIndex >= len)
				nextIndex = 0;
		}
		//move();
		timer = setInterval(move,3000);

		//鼠标移入移出
		$("#banner2").mouseenter(function(e){
			clearInterval(timer);
		})
		$("#banner2").mouseleave(function(e){
			timer = setInterval(move,3000);
		})

	

		//左右轮播
	var slide = $("#plate div"),
		length = slide.length,
		curr  =  1,next = 2,time = null;
	
		function move2(){
			//for(let i = 0;i<length;i++){
				
				//console.log(_left);
				//
				for(let i = 0;i<length;i++){
					var  _left = parseInt($("#plate div").eq(i).css("left"))-400;
					$("#plate div").eq(i).animate({left:_left},1000);
				}
				
				
				$("#plate div").eq(curr).removeClass("bigger");
				$("#plate div").eq(next).addClass("bigger");
				curr = next;
				next++;
				//console.log(curr);
			//}
				if(curr>=length-1){
					for(let i = 0;i<length;i++){
						var  _left = parseInt($("#plate div").eq(i).css("left"))+2000;
						$("#plate div").eq(i).animate({left:_left},0);

					}
					curr = 1;
					next = 2;
				}
				//console.log("1111");
			}
		
		//move2();

		time = setInterval(move2,2000);

		
