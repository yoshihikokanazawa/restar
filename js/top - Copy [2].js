jQuery(function($){
	var index=0;
	var len=0;
	var intervalId;
	var timeoutId;
	var IMAGE_INTERVAL_TIME=3000;
	var FADE_INETRVAL_TIME=1000;
	var $target;


	$(window).on('DOMContentLoaded',function(){
		len=$('#mv-slide ul li').length;
		init();
	});


	$(window).on('load',function(){
		var $th=$('#mv-slide ul');
		//var autoPlayTime=[5000,7000,5000,5000,5000,10000]; //動画の秒数-2000（フェードスピード）
		//var autoPlayTime=[5000,7000,10000]; //動画の秒数-2000（フェードスピード）
		//var id;
		//var $current;
		//var $currentTemp;

		//
		//初期設定
		$('#mv-slide ul').on('init',function(slick){
			//autoPlay();
			resizePlayer($th, $th.find('iframe'), 16/9);
			$target=$(slick.target);
			init();
			/*
			function autoPlay(){
				clearTimeout(id);
				id=setTimeout(function(){
					if(index++>len-1)index=0;
					$(slick.target).slick('slickGoTo',index,false);
					autoPlay();
				},autoPlayTime[index]);
			}
			*/
			start();
		//
		//フェード前、カレントスライド動画再生
		}).on("beforeChange", function(event, currentSlick, nextSlick) {
			
			//$(currentSlick.).attr('data-slick-index')
			setTimeout(function(){
				index=$target.find('li').index($target.find('li.slick-current'))
				beforeChange();
			},5);
			/*
			alert(currentSlick.currentSlide);
			alert(nextSlick);
			var s='';
			for(var v in currentSlick){
				s+=v+':'+currentSlick[v]+' / ';
			}
			alert(s);
			index=nextSlick;
			beforeChange();
			*/
			/*
			$current = $('#mv-slide > ul .slick-list li').eq(index);
			playPauseVideo($current,"play");
			*/
		//
		//フェード後、前のスライド動画停止
		}).on("afterChange", function(event, currentSlick) {
			/*
			playPauseVideo($currentTemp,'pause');
			$currentTemp = $current;
			*/
		//
		// Slick開始
		}).slick({
			infinite: true,
			dots: true,
			arrows: false,
			fade:  true,
			speed:2000,
			autoplay: false,
			//autoplaySpeed: 12000,
			pauseOnHover: false,
			swipe: true,
			swipeToSlide: true,
			touchMove: true,
			lazyLoad: "progressive",
		});
		
		

	});
		
	//////////////////////////////////////////////////////////////////////////
	// 初期化
	//////////////////////////////////////////////////////////////////////////
	function init(){
		//len=$('#mv-slide .slick-slider .slick-list .slick-track li').length;
		//len=$('#mv-slide ul li').length;
		$('#mv-slide .slick-slider .slick-list .slick-track li .img').each(function(i){
		//$('#mv-slide ul li .img.video').each(function(){
			if($(this).hasClass('video'))
				setLoadVideo($(this));
			else{
				//(function(n,$th){return function(){
					//setTimeout(function(){
						//$th.addClass('img-loaded');
						$(this).addClass('img-loaded');
					//},n*10000+5000);
				//}})(i,$(this))();
			}
		});
		function setLoadVideo($th){
			var $video=$th.find('video');
			$video.on('loadeddata',loadeddataH);
			$video.trigger('load');
		}
		function loadeddataH(){
			var $th=$(this);
			//setTimeout(function(){
				$th.parents('.img').addClass('img-loaded');
			//},10000);
			$th.parents('.img').append($(this).duration);
		}
	}

	//////////////////////////////////////////////////////////////////////////
	// スライダースタート
	//////////////////////////////////////////////////////////////////////////
	function start(){
		
		var id=setInterval(function(){
			if($('#mv-slide .slick-slider .slick-list .slick-track li').eq(index).find('.img').hasClass('img-loaded')){
				//beforeChange();
				if(index!=0)
					$target.slick('slickGoTo',index,false);
				else
				 beforeChange();
				clearInterval(id);
			}
		},30);
	}

	function beforeChange(){
		clearTimeout(timeoutId);
		clearInterval(intervalId);
		/*
		//
		// -------------------------------------------------
		//
		$('#mv-slide .slick-slider .slick-list .slick-track li').removeClass('slick-current');
		$('#mv-slide .slick-slider .slick-list .slick-track li').eq(index).addClass('slick-current');
		//
		// -------------------------------------------------
		//
		*/
		var $th=$('#mv-slide .slick-slider .slick-list .slick-track li').eq(index);
		if($th.find('.img').hasClass('video'))
			showVideo();
		else
			showImage();
	}
	//////////////////////////////////////////////////////////////////////////
	// 
	//////////////////////////////////////////////////////////////////////////
	function sliderGoto(n){
		index=n;
		beforeChange();
	}
	function sliderNext(){
		var n=index;
		n++;
		if(n>=len)n=0;
		if(!$('#mv-slide .slick-slider .slick-list .slick-track li').eq(n).find('.img').hasClass('img-loaded')){
			beforeChange();
			//n=index;
			//sliderGoto(n);
			//beforeChange();
			//$target.slick('slickGoTo',index,false);
		}else{
			$target.slick('slickGoTo',n,false);
		}
		
	}
	function showImage(){
		clearTimeout(timeoutId);
		timeoutId=setTimeout(function(){
			sliderNext();
		},IMAGE_INTERVAL_TIME);
	}
	function showVideo(){
		var $video=$('#mv-slide .slick-slider .slick-list .slick-track li').eq(index).find('.img video');
		$video[0].currentTime=0;
		$video[0].play();
		clearInterval(intervalId);
		intervalId=setInterval(function(){
			if($video[0].duration-$video[0].currentTime<FADE_INETRVAL_TIME*0.001){
				clearInterval(intervalId);
				sliderNext();
			}
		},30);
	}

	//
	// -------------------------------------------------
	//
	/*
	$('#mv-slide .slick-dots li').each(function(i){
		$(this).on('click',clickH(i));
	});
	function clickH(n){
		return function(){
			sliderGoto(n);
		}
	}
	*/
	//
	// -------------------------------------------------
	//
	
	/*////////////////////////////////////////////////////////////////////
	iframeの埋め込み動画のサイズと位置を調整するための関数
	////////////////////////////////////////////////////////////////////*/
	function resizePlayer(win, iframes, ratio) {
		if (!iframes[0]) return;
		var width = win.width(),
				playerWidth,
				height = win.height(),
				playerHeight,
				ratio = ratio || 16/9;
	 
		iframes.each(function(){
			var current = $(this);
			if (width / ratio < height) {
				playerWidth = Math.ceil(height * ratio);
				current.width(playerWidth).height(height).css({
					left: (width - playerWidth) / 2,
					 top: 0
					});
			} else {
				playerHeight = Math.ceil(width / ratio);
				current.width(width).height(playerHeight).css({
					left: 0,
					top: (height - playerHeight) / 2
				});
			}
		});
	}

	/*////////////////////////////////////////////////////////////////////
	再生／一時停止用の関数
	////////////////////////////////////////////////////////////////////*/
	function playPauseVideo(currentSlide, control){
		if(currentSlide==undefined)return;
		if(currentSlide.find('video').length<=0)return;
		
		// iframeオブジェクトを取得
		//player = currentSlide.find("iframe").get(0);
		//var startTime = currentSlide.data("video-start");		// 再生開始位置(data-video-start)を取得(vimeoのみ)
		var video = currentSlide.find("video").get(0);

		if (video != null) {
			if (control === 'play'){
				// 再生
				video.currentTime = 0;
				video.play();
			} else if (control === 'pause'){
				// 一時停止
				video.pause();
			} else if (control === 'stop'){
				// 停止
				video.pause();
				video.currentTime = 0;
			}
		}
	}

});


