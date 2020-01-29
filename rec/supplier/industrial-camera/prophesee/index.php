<!doctype html>
<html lang="ja" class="h-rec h-supplier h-product">
<?php
define(ROOT,str_replace($_SERVER['SCRIPT_NAME'],'',$_SERVER['SCRIPT_FILENAME']).'/');
/*$js='./js/top.js';*/
/*$css='./css/top.css';*/
require(ROOT.'header_rec.php');
?>
<main class="industrial-camera">




<article id="mv-sub">
<img src="/rec/supplier/industrial-camera/img/mv.jpg" alt="">
<div class="mv-inner">
<p class="ttl1"><span class="en">SUPPLIER</span><span class="jp">取り扱いメーカー</span></p>
</div>
</article>




<article id="ttl-box">
<div class="ttl-box-inner">
<p class="ttl2">取り扱いメーカー</p>
<ul class="breadcrumbs">
<li><a href="/rec/">HOME</a></li>
<li><a href="/rec/supplier/">取り扱いメーカー</a></li>
<li><a href="/rec/supplier/industrial-camera/">産業用カメラ</a></li>
<li>PROPHESEE</li>
</ul>
</div>
</article>




<article id="product-intro-prophesee" class="product-intro">
<p class="intro-logo"><img src="/rec/supplier/industrial-camera/prophesee/img/intro-logo.png" alt="PROPHESEE METAVISION FOR MACHINES"></p>
<p class="intro-product"><img src="/rec/supplier/industrial-camera/prophesee/img/intro-profuct.jpg" alt=""></p>
<h1 class="intro-ttl">マシンビジョンに革命を起こす PROPHESEE製イベントセンサ</h1>
<p class="intro-lead">PROPHESEEはフランスに本社をおくベンチャー企業で、事象変化部分のみを捉える唯一無二のセンシングデバイスを提供しています。<br>
人間がなぜ多くの視覚的情報を瞬時に処理できるのかと言う点に着目し、視神経、脳神経の働きに基づいて開発されたイベントセンサです。<br>
これまでのイメージセンサとは大きく異なり、画像のためのデータではなく、画像処理のためのデータを出力します。<br>
<br>
<strong>これにより今後のマシンビジョンに大きな革命を起こします。</strong>
</p>
</article>
<!-- product-intro-prophesee -->




<article id="product-visionsensor">
<h2 class="ttl-navy">特許技術のVision Sensor</h2>
<p class="product-lead sq">フレームベース画像処理から事象変化（イベント）センシングへ<br class="pc">全画素が個々に制御されており、画素に変化が（受光量の変化）あった時、その画素のみ出力されます。</p>
<div class="frm"><img src="/rec/supplier/industrial-camera/prophesee/img/visionsensor.png" alt="出力タイミング：フレートベース
出力画素：全画素
通常のイメージセンサ出力（イメージ）

同じ場面をPROPHESEEセンサで撮る

出力タイミング：イベント（光量変化）発生時
出力画素：イベント発生画素のみ

PROPHESEEのイベントセンサ出力（イメージ）"></div>

<h3 class="ttl-horizontal-line">データ比較 <span>(出力データ比較）</span></h3>

<div class="frm">
<div class="video"><img src="/common/img/video.png" alt=""></div>
<dl>
<dt>通常イメージセンサ（左）</dt>
<dd>・米粒（動態）以外も出力される<br>・米粒が高速のため映像がブレてカウントできない</dd>
<dt>PROPHESEEセンサ（右）</dt>
<dd>・米粒以外の非動態については出力されない<br>・画素単位での制御のため高速であっても捉える</dd>
</dl>
<ul>
<li class="sq">センサからのデータが少ない（通常のイメージセンサのデータ10～1000分の１ ）</li>
<li class="sq">出力データも少なく超低消費電力</li>
<li class="sq">データが少ないため後段の処理も軽減されて最高効率のコンピュテーションを実現</li>
<li class="sq">変化点となるエッジを捉え続けるため機械学習にも最適</li>
</ul>
</div>

<h3 class="ttl-horizontal-line">アーク溶接</h3>

<div class="frm">
<div class="video"><img src="/common/img/video.png" alt=""></div>
<div class="info">高輝度なものも火の粉の飛び散り方も確認できすますので、溶接技術基準が作れます。</div>
</div>

<h3 class="ttl-horizontal-line">動態管理</h3>

<div class="frm">
<div class="video"><img src="/common/img/video.png" alt=""></div>
<div class="video"><img src="/common/img/video.png" alt=""></div>
<div class="info-tracking">トラッキング：出力データがそのままオプティカルフローとして使えます</div>
</div>

</article>
<!-- product-visionsensor -->




<article id="product-solution">
<h2 class="ttl-navy">ソリューションとしてご提案</h2>
<p class="product-lead sq">これまでにないセンサのため後段の処理など含めてトータルでご提案できるよう弊社ではPROPHESEEを含めて<br class="pc">共創パートナーを作っておりますので、お客様のご要望に合わせてご提案させて頂きます。</p>

<div class="frm">
<img src="/rec/supplier/industrial-camera/prophesee/img/solution.png" alt="PROPHESEE METAVISION FOR MACHINES
H/W・モジュールベンダ
AIベンダ

RECTAR

Server
Platform"></div>

<h3 class="ttl-horizontal-line">検討アプリケーション</h3>

<section>
<h4 class="sq">産機系検査装置</h4>
<ul>
<li>振動検知・AGV・高速個数カウンタ・高速移動速度計測・侵入防止センサ・流量計・異物混入・キズ検知</li>
<li>形状計測・データ測定・自動ドア（人の導線検知）・道路標識、工事現場表示・パチンコ玉計測</li>
<li>行動監視（予測）・速度計測（スピードガン）・セキュリティ（倉庫、駐車場）・見守りシステム（看護、介護）</li>
</ul>
</section>

<section>
<h4 class="sq">車載系</h4>
<ul>
<li>自動運転（距離センサ、移動物検出、ブレーキ、障害物回避）・ドラレコ　・ADAS　・駐輪補助　・ステレオカメラ</li>
<li>高速SLAM・ドライバモニタ（視線トラッキング）　・車室内モニタ　・ドライバ認証・盗難防止（駐車場監視）</li>
</ul>
</section>

<section>
<h4 class="sq">農業、酪農、牧場</h4>
<ul>
<li>害獣検知・畜舎、動物園の獣舎監視・ドローン監視・動物行動パータン検知</li>
</ul>
</section>

</article>
<!-- product-solution -->




<article id="product-contact">
<p class="lead">製品のデモやご購入についてのご相談は、下記のお問い合わせフォームよりお問い合わせください。</p>
<div class="btns">
<p class="btn"><a href="/contact/product/">お問い合わせ</a></p>
<p class="btn"><a href="https://www.prophesee.ai/" target="_blank">メーカーサイト</a></p>
</div>
</article>
<!-- product-contact -->




</main>
<?php
require(ROOT.'footer_rec.php');
?>
