// Slick custum v 0.1
//
// 動画の自動再生昨日追加 
//
jQuery(function($){
	var orgSlick = $.fn.slick;
	$.fn.slick = function() {
		var th=this;
		th.on('init',function(slick){
			setTimeout(function(){
				th.slick('slickPlay');
			},3000);
			slick = $(slick.currentTarget);
			// 動画スライドの再生(1枚目のスライドが動画である場合)
			setTimeout(function(){
				playPauseVideo(slick,"play");
			}, 1000);
			// iframeの埋め込み動画の表示サイズと位置を決定
			resizePlayer(th, th.find('iframe'), 16/9);
		}).on("beforeChange", function(event, slick) {
			slick = $(slick.$slider);
			// 現在の動画スライドに対して一時停止させる(カレントが動画スライドである場合)
			playPauseVideo(slick,"pause");
		}).on("afterChange", function(event, slick) {
			slick = $(slick.$slider);
			// 現在の動画スライドに対して再生を開始(カレントが動画スライドである場合)
			playPauseVideo(slick,"play");
		});
		var result = orgSlick.apply(th, arguments);
		return result;
	};

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
	function playPauseVideo(slick, control){
		var currentSlide, slideType, startTime, player, video;
	 
		// 現在のスライドを取得
		currentSlide = slick.find(".slick-current");
		// 現在のスライドのclass属性に指定の値から2番目のセレクタ(スライドのタイプ)を取得
		if(currentSlide.find('video').length>0){
			slideType='video';
		}else{
			slideType='image';
		}
		
		// iframeオブジェクトを取得
		player = currentSlide.find("iframe").get(0);
		// 再生開始位置(data-video-start)を取得(vimeoのみ)
		startTime = currentSlide.data("video-start");

		if (slideType === "video") {
			// 現在のスライドがvideoの場合
			video = currentSlide.find("video").get(0);
			if (video != null) {
				if (control === "play"){
					// 再生
					video.play();
				} else {
					// 一時停止
					video.pause();
				}
			}
		}
	}

});
