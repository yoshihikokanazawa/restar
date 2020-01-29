jQuery(function($){

	$(window).on('load',function(){
		var th=$('#mv-slide ul');
		var len=$('#mv-slide ul li').length;
		//var autoPlayTime=[5000,7000,5000,5000,5000,10000]; //動画の秒数-2000（フェードスピード）
		var autoPlayTime=[5000,7000,10000]; //動画の秒数-2000（フェードスピード）
		var index=0;
		var id;
		var $current;
		var $currentTemp;

		//
		//初期設定
		$('#mv-slide ul').on('init',function(slick){
			autoPlay();
			resizePlayer(th, th.find('iframe'), 16/9);
			function autoPlay(){
				clearTimeout(id);
				id=setTimeout(function(){
					if(index++>len-1)index=0;
					$(slick.target).slick('slickGoTo',index,false);
					autoPlay();
				},autoPlayTime[index]);
			}
		//
		//フェード前、カレントスライド動画再生
		}).on("beforeChange", function(event, currentSlick, nextSlick) {
			$current = $('#mv-slide > ul .slick-list li').eq(index);
			playPauseVideo($current,"play");
		//
		//フェード後、前のスライド動画停止
		}).on("afterChange", function(event, currentSlick) {
			playPauseVideo($currentTemp,'pause');
			$currentTemp = $current;
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


