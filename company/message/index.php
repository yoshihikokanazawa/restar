<!doctype html>
<html lang="ja" class="h-rhd h-company">
<?php
define(ROOT,str_replace($_SERVER['SCRIPT_NAME'],'',$_SERVER['SCRIPT_FILENAME']).'/');
/*$js='./js/top.js';*/
/*$css='./css/top.css';*/
require(ROOT.'header.php');
?>
<main>




<article id="mv-sub">
<img src="/company/img/mv-company.jpg" alt="">
<div class="mv-inner">
<p class="ttl1"><span class="en">COMPANY</span><span class="jp">会社情報</span></p>
</div>
</article>




<article id="ttl-box">
<div class="ttl-box-inner">
<h1 class="ttl2">ごあいさつ</h1>
<ul class="breadcrumbs">
<li><a href="/">HOME</a></li>
<li><a href="/company/">会社情報</a></li>
<li>ごあいさつ</li>
</ul>
</div>
</article>




<article id="greeting">
<div class="greeting-inner">

<p class="greeting-text">2019年4月１日をもって、株式会社UKC ホールディングスと株式会社バイテックホールディングスは経営統合を実現し、株式会社レスターホールディングスとして新たなスタートを切りました。<br>
<br>
近年、エレクトロニクス業界は、「市場の成熟化、新興企業参入による競争激化」、「ＩｏＴ/ＡＩ/５Ｇの進展」、「取引先のニーズの多様化・高度化」といった大きな環境変化の中にあり、エレクトロニクス商社に求められる役割も著しく変化しております。<br>
<br>
このような環境下、私たちは、「情報と技術で、新しい価値、サービスを創造・提供し、社会の発展に貢献します」という経営理念のもと、多様な事業展開の中で、技術を活用した付加価値の創出、パートナー企業との共創、革新的なサービスの創出、グループ間シナジーやグループ内における人材、ノウハウの相互活用等によって、あらゆるニーズに対応できるエレクトロニクスにおける革新的なプラットフォーマーを目指します。<br>
<br>
また業界の再編において主導的な役割を果たすとともに、世界市場を視野に入れた更なる事業の拡大も推し進め、なお一層の企業価値の向上、社会発展への貢献を図ってまいります。<br>
<br>
私たちは本統合によって大きな変革に向けた第一歩を踏み出しました。これからも、社員一同弛まぬ創意工夫によって日々邁進してまいります。<br>
<br>
今後とも変わらぬご支援、ご鞭撻のほど、よろしくお願い申し上げます。</p>  

<ul class="signature">
<li>
<p class="position">代表取締役会長兼CEO</p>
<p class="name"><span class="ie11-other">今野 <?php include('../kunihiro.php');?></span><span class="ie11"><img src="/common/img/konnokunihiro.png" alt="今野 邦廣"></span></p>
</li>
<li>
<p class="position">代表取締役社長兼COO</p>
<p class="name">栗田 伸樹<!--<img src="img/coo-name.png" alt="栗田 伸樹">--></p>
</li>
</ul>

</div>
</article>
<!-- greeting -->




</main>
<?php
require(ROOT.'footer.php');
?>
