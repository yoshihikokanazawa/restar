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
<img src="/rec/solution3/img/mv-product-agritech.jpg" alt="">
<div class="mv-inner">
<p class="ttl1"><span class="en">Agritech</span><span class="jp">アグリテック</span></p>
</div>
</article>




<article id="ttl-box">
<div class="ttl-box-inner">
<h1 class="ttl2">ソリューション</h1>
<ul class="breadcrumbs">
<li><a href="/rec/">HOME</a></li>
<li>ソリューション</li>
</ul>
</div>
</article>




<article class="product-intro">
<h1 class="intro-ttl">『 Restarグループによる共創ビジネスへの取り組み 』<br>
～　ICT製品の農業への展開　～</h1>
<div class="intro-imglead">
<p class="img"><img src="/rec/solution3/img/product-agritech-intro.jpg" alt=""></p>
<p class="txt">“ 農業向けICT製品は多くの企業が参加しているが農家全般にいきわたっていない？ではなぜ？”<br>
といった単純な疑問から私たちの取組みはスタートしました。<br>
<br>
活動を進める中、私たち日本人が主食とする『米』に着目し、農家様との会話から幾つか課題があることが分かり、その中の一つ、水田の水位監視するためのシステムをRestarグループ、関連会社の技術で製作し水田マネージメントシステムの実証実験を行いました。</p>
</div>
</article>
<!-- product-intro -->




<article id="product-agritech-system">
<h2 class="ttl-navy">水田マネージメントシステム</h2>
<p class="task">課題：水管理は稲の生育、害虫発生を防ぐ重要な作業。毎日の水位監視は大きな負担、作業を軽減したい</p>

<section>
<h3 class="sq">システム提供範囲</h3>
<p><img src="/rec/solution3/img/product-agritech-system-area.jpg" alt="温度・湿度バッテリー残量 センサー / LTE ネットワーク / データ貯蓄 クラウド / データ可視化 Webアプリ / Restar ONE STOP"></p>
</section>

<section>
<h3 class="sq">システム概要</h3>
<p>1.水位、温湿度、バッテリー残量情報をワイヤレスネットワークを使用しクラウドへ情報を蓄積。webアプリケーションで可視化させるシステム<br>
<br>
2.各種アラート（バッテリー残量、水位変動等）を農家様へメールで通知</p>
</section>

<section>
<h3 class="sq">システム構成</h3>
<p><img src="/rec/solution3/img/product-agritech-system-constitution.jpg" alt="水田 <-> Internet <-> IoT Platform Mobile Gates 2 <-> 農家様"></p>
<p>気象データを組合せ水位の増減の要因分析を実施し、水位計測、アラート情報は作業効率を軽減する有効な手段であるということを農家様との共通認識に至り、現在は商用化を目指した具体的な検討をスタートし関係者と日々ミーティングを行っています。</p>
</section>

</article>
<!-- product-agritech-system -->



<article id="product-contact">
<p class="lead">製品のデモやご購入についてのご相談は、下記のお問い合わせフォームよりお問い合わせください。</p>
<div class="btns">
<p class="btn"><a href="/contact/product/">お問い合わせ</a></p>
<p class="btn"><a href="" target="_blank">メーカーサイト</a></p>
</div>
</article>
<!-- product-contact -->




</main>
<?php
require(ROOT.'footer_rec.php');
?>
