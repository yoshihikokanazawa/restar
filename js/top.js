jQuery(function($){
	var index=0,
		len=0,
		intervalId,
		timeoutId,
		IMAGE_AUTOPLAYSPEED=3000,
		FADE_SPEED=2000,
		$target,
		$li;

	$(window).on('DOMContentLoaded',function(){
		len=$('#mv-slide ul li').length;
	});

	$(window).on('load',function(){
		init();
	});
		
	/*////////////////////////////////////////////////////////////////////
	初期化
	////////////////////////////////////////////////////////////////////*/
	function init(){
		var $th=$('#mv-slide ul');
		//
		//初期設定
		$('#mv-slide ul').on('init',function(slick){
			$target=$(slick.target);
			$li=$('#mv-slide .slick-slider .slick-list .slick-track li');
			//resizePlayer($th, $th.find('iframe'), 16/9);
			resizePlayer($target, $target.find('iframe'), 16/9);
			preload();
			sliderStart();
		//
		//フェード前
		}).on("beforeChange", function(event, currentSlick, nextSlick) {
			setTimeout(function(){
				intervalStart();
			},3);
		//
		//フェード後
		}).on("afterChange", function(event, currentSlick){
			
		//
		// Slick開始
		}).slick({
			infinite: true,
			dots: true,
			arrows: false,
			fade:  true,
			speed:FADE_SPEED,
			autoplay: false,
			//autoplaySpeed: 12000,
			pauseOnHover: false,
			swipe: true,
			swipeToSlide: true,
			touchMove: true,
			lazyLoad: "progressive",
		});

	}

	/*////////////////////////////////////////////////////////////////////
	
	////////////////////////////////////////////////////////////////////*/
	function preload(){
		$li.find('.img').each(function(i){
			if($(this).hasClass('video'))
				setLoadVideo($(this));
			else
				$(this).addClass('img-loaded');//画像 $(window).on('load'で読込まれているため
		});
		function setLoadVideo($th){
			var $video=$th.find('video');
			$video.on('loadeddata',loadeddataH);
			$video.trigger('load');
		}
		function loadeddataH(){
			var $th=$(this);
			$th.parents('.img').addClass('img-loaded');
			$th.parents('.img').append($(this).duration);
		}
	}
	/*////////////////////////////////////////////////////////////////////
	スライダーSTART
	////////////////////////////////////////////////////////////////////*/
	function sliderStart(){
		var id=setInterval(function(){
			if($li.eq(index).find('.img').hasClass('img-loaded')){
				if(index!=0)
					$target.slick('slickGoTo',index,false);
				else
				 intervalStart();
				clearInterval(id);
			}
		},30);
	}
	/*////////////////////////////////////////////////////////////////////
	スライダーNEXT
	////////////////////////////////////////////////////////////////////*/
	function sliderNext(){
		var n=(index+1)%len;
		if($li.eq(n).find('.img').hasClass('img-loaded'))
			$target.slick('slickGoTo',n,false);
		else
			intervalStart();
	}
	/*////////////////////////////////////////////////////////////////////
	切替インターバルスタート
	////////////////////////////////////////////////////////////////////*/
	function intervalStart(){
		var $th=$target.find('li.slick-current');
		index=$target.find('li').index($th);
		clearTimeout(timeoutId);
		clearInterval(intervalId);
		if($th.find('.img').hasClass('video'))
			intervalVideo();
		else
			intervalImage();
	}
	function intervalImage(){
		clearTimeout(timeoutId);
		timeoutId=setTimeout(function(){
			sliderNext();
		},IMAGE_AUTOPLAYSPEED);
	}
	function intervalVideo(){
		var $video=$li.eq(index).find('.img video');
		$video[0].currentTime=0;
		$video[0].play();
		clearInterval(intervalId);
		intervalId=setInterval(function(){
			if($video[0].duration-$video[0].currentTime<FADE_SPEED*0.001){
				clearInterval(intervalId);
				sliderNext();
			}
		},30);
	}
	
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

});


