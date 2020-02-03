jQuery(function($){
	var index=0;
	var len=0;
	var intervalId;
	var timeoutId;
	var IMAGE_AUTOPLAYSPEED=3000;
	var FADE_SPEED=2000;
	var $target;


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
			resizePlayer($target, $target.find('iframe'), 16/9);
			//resizePlayer($th, $th.find('iframe'), 16/9);
			start();
		//
		//フェード前
		}).on("beforeChange", function(event, currentSlick, nextSlick) {
			setTimeout(function(){
				beforeChange();
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
	スライダースタート
	////////////////////////////////////////////////////////////////////*/
	function start(){
		$('#mv-slide .slick-slider .slick-list .slick-track li .img').each(function(i){
			if($(this).hasClass('video'))
				setLoadVideo($(this));
			else
				$(this).addClass('img-loaded');
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

		var id=setInterval(function(){
			if($('#mv-slide .slick-slider .slick-list .slick-track li').eq(index).find('.img').hasClass('img-loaded')){
				if(index!=0)
					$target.slick('slickGoTo',index,false);
				else
				 beforeChange();
				clearInterval(id);
			}
		},30);
	}

	function beforeChange(){
		var $th=$target.find('li.slick-current');
		index=$target.find('li').index($th);//$target.find('li.slick-current'))
		clearTimeout(timeoutId);
		clearInterval(intervalId);
		//var $th=$('#mv-slide .slick-slider .slick-list .slick-track li').eq(index);
		if($th.find('.img').hasClass('video'))
			showVideo();
		else
			showImage();
	}
	/*////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////*/
	/*
	function sliderGoto(n){
		index=n;
		beforeChange();
	}
	*/
	function sliderNext(){
		var n=index;
		n++;
		if(n>=len)n=0;
		if(!$('#mv-slide .slick-slider .slick-list .slick-track li').eq(n).find('.img').hasClass('img-loaded'))
			beforeChange();
		else
			$target.slick('slickGoTo',n,false);
	}
	/*////////////////////////////////////////////////////////////////////
	画像・動画各種の表示とNEXT切替機能
	////////////////////////////////////////////////////////////////////*/
	function showImage(){
		clearTimeout(timeoutId);
		timeoutId=setTimeout(function(){
			sliderNext();
		},IMAGE_AUTOPLAYSPEED);
	}
	function showVideo(){
		var $video=$('#mv-slide .slick-slider .slick-list .slick-track li').eq(index).find('.img video');
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


