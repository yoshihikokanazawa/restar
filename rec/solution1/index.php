<!doctype html>
<html lang="ja" class="h-rec h-product">
<?php
define(ROOT,str_replace($_SERVER['SCRIPT_NAME'],'',$_SERVER['SCRIPT_FILENAME']).'/');
/*$js='./js/top.js';*/
/*$css='./css/top.css';*/
require(ROOT.'header_rec.php');
?>
<main>




<article id="mv-sub">
<img src="/rec/solution1/img/mv-product-camera-monitoring.jpg" alt="">
<div class="mv-inner">
<p class="ttl1"><span class="en">CAMERA MONITORING SYSTEM</span><span class="jp">カメラモニタリングシステム</span></p>
</div>
</article>




<article id="ttl-box">
<div class="ttl-box-inner">
<h1 class="ttl2">システム</h1>
<ul class="breadcrumbs">
<li><a href="/rec/">HOME</a></li>
<li>システム</li>
</ul>
</div>
</article>




<article class="product-intro">
<h1 class="intro-ttl">電子ミラー・カメラモニタリングシステム<br class="pc">開発支援用プラットフォーム</h1>
<p class="product-img"><img src="/rec/solution1/img/product-camera-monitoring-intro.jpg" alt=""></p>
</article>
<!-- product-intro -->




<article id="product-camera-monitoring-detail">
<p class="lead">車もミラーレスの時代へ<br>映像システム全域におけるトータルシステムをご提案いたします</p>
<div>
<img src="/rec/solution1/img/product-camera-monitoring-detail1.jpg" alt="">
<img src="/rec/solution1/img/product-camera-monitoring-detail2.jpg" alt="">
<img src="/rec/solution1/img/product-camera-monitoring-detail3.jpg" alt="">
<img src="/rec/solution1/img/product-camera-monitoring-detail4.jpg" alt="">
<img src="/rec/solution1/img/product-camera-monitoring-detail5.jpg" alt="">
</div>
<p class="txt">ソニー㈱がCCDイメージセンサーの量産を開始したのが1980年。<br>
以来、イメージセンサーは、ビデオカメラから始まり、監視カメラ、DSC、スマートフォンへと、搭載アプリケーションは広がりました。<br>
また民生機器に限らず、リアビューカメラ、ADAS用途と自動車への搭載も進んでおります。<br>
<br>
<br>
電子の「眼」を自動車に。<br>
レスターエレクトロニクスは、イメージセンサーに留まらず、これまでに液晶ディスプレイ、SoC、ASSP等、多くの映像ソリューションをお客様のデザインに提供してきました。<br>
<br>
今後加速する車のミラーレス化＝電子ミラー化時代に対応する開発支援プラットフォームを提供いたします。</p>
</article>
<!-- product-camera-monitoring-detail -->




<article id="product-camera-monitoring-parts">
<h2 class="ttl-navy">特徴</h2>
<div>
<dl>
<dt>カメラボード</dt>
<dd>
・最大1920 × 1080（FHD)／60fps動作<br>
・ソニー製車載用CMOSイメージセンサ IMX390を採用<br>
<strong>HDRとLEDフリッカ抑制の両立を実現</strong></dd>
<dt>モニタ</dt>
<dd>
<p><span>・中央モニタ</span><span>：1920 × 720（HD)／60fps表示<br>：1画面／2画面分割／3画面分割 表示切替</span></p>
<p><span>・左右モニタ</span><span>：1280 × 720(HD)／60fps表示<br>：電子PAN／Tilt 機能搭載</span></p>
・評価用モニタ接続）HDMI出力オプションボードを提供<br>
<strong>中央に評価用モニタを接続する場合<br class="pc">
最大1920（FHD)/60fps表示が可能</strong></dd>
<dt>拡張ポート</dt>
<dd>・撮像結果を拡張ボードへ転送可能<br>
<strong>画像認識を搭載するボードに接続し、<br class="pc">認識機能の評価が可能（右図*1）</strong></dd>
</dl>
<p><img src="/rec/solution1/img/product-camera-monitoring-parts.jpg" alt=""></p>
</div>
</article>
<!-- product-camera-monitoring-parts -->




<article id="product-camera-monitoring-kit">
<h2 class="ttl-navy">電子ミラー・カメラモニタリングシステム<br class="pc-space">開発支援用プラットフォーム</h2>
<img src="/rec/solution1/img/product-camera-monitoring-kit.jpg" alt="">
<div class="frm">
<h3>AI画像認識搭載カメラモニタリングシステム　デモ映像</h3>
<div class="movie"><div class="movie-inner"><video></video></div></div>
</div>
</article>
<!-- product-camera-monitoring-kit -->




<article id="product-camera-monitoring-spec">
<h2 class="ttl-navy">仕様</h2>

<section>
<h3 class="sq">メインボード</h3>
<p><span><img src="/rec/solution1/img/product-camera-monitoring-spec1.jpg" alt=""></span></p>
<div>
<dl>
<dt>Power</dt>
<dd>DC12V 単一電源</dd>
<dt>FPGA</dt>
<dd>Xilinx Zynq UltraScale + MPSoC ZU5EV</dd>
<dt>Memory</dt>
<dd>DDR4 × 64bit<br>Flash ROM QSPIx8</dd>
<dt>CIS I/F</dt>
<dd>GVIF2シリアル伝送(MIPI変換) × 3ch</dd>
<dt>Video I/F</dt>
<dd>GVIF2シリアル伝送(LVDS変換) × 3ch</dd>
<dt>外部Host I/F</dt>
<dd>UART(USB変換)</dd>
<dt>拡張 I/F</dt>
<dd>PCI express Gen2 ×4</dd>
<dt>Debug用 I/F</dt>
<dd>JTAG</dd>
<dt>設定保存</dt>
<dd>microSD - Card</dd>
</dl>
</div>
</section>

<section>
<h3 class="sq">カメラボード</h3>
<p><span><img src="/rec/solution1/img/product-camera-monitoring-spec2.jpg" alt=""></span></p>
<div>
<dl>
<dt>LENS Mount</dt>
<dd>M12</dd>
<dt>Image Sensor : <br>
IMX390CQV</dt>
<dd>1/2.7型 2.45M pixel<br>
FHD1080p / 60fps (AD10bit)<br>
HDR機能 及び LEDフリッカ抑制</dd>
</dl>
</div>
</section>

<section>
<h3 class="sq">モニタ</h3>
<p><span><img src="/rec/solution1/img/product-camera-monitoring-spec3.jpg" alt=""></span></p>
<div>
<dl>
<dt>Centor Monitor</dt>
<dd>12.3 inch<br>
1920 × 720 ( FHD) / 60fps</dd>
<dt>Side Monitor ×2</dt>
<dd>6.92 inch<br>1280 × 720 (HD) / 60fps</dd>
</dl>
</div>
</section>

<section>
<h3 class="sq">その他</h3>
<p></p>
<div>
<dl>
<dt>ケーブル</dt>
<dd>0.5m &amp; 5m</dd>
<dt>オプションボード</dt>
<dd>HDMI変換出力 デイジーチェーン接続</dd>
</dl>
</div>
</section>

</article>
<!-- product-camera-monitoring-spec -->




<article id="product-contact">
<p class="lead">製品のデモやご購入についてのご相談は、下記のお問い合わせフォームよりお問い合わせください。</p>
<div class="btns">
<p class="btn"><a href="/contact/product/">お問い合わせ</a></p><!--
<p class="btn"><a href="" target="_blank">メーカーサイト</a></p>-->
</div>
</article>
<!-- product-contact -->




</main>
<?php
require(ROOT.'footer_rec.php');
?>
