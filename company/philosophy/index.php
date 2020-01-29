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
<h1 class="ttl2">経営理念</h1>
<ul class="breadcrumbs">
<li><a href="/">HOME</a></li>
<li><a href="/company/">会社情報</a></li>
<li>経営理念</li>
</ul>
</div>
</article>




<article id="company-philosophy">

<section>
<h2><span class="en">Mission</span><span class="jp">ミッション</span></h2>
<p>情報と技術で、新しい価値、サービスを創造•提供し、<br class="pc">社会の発展に貢献します</p>
</section>

<section>
<h2><span class="en">Vision</span><span class="jp">ビジョン</span></h2>
<p>あらゆるニーズに対応できる<br>エレクトロニクス総合商社を目指します</p>
<p>世界•社会貢献•共創と革新</p>
</section>

<section>
<h2><span class="en">Values</span><span class="jp">バリュー</span></h2>
<p>多様な考えを受け入れ、共創を通じて、新しい文化や価値を創り出します</p>
<p>常に高い目標を掲げて、革新的な発想と情熱で、挑戦し続けます</p>
<p>活躍の場を世界へと広げ、持続可能な社会の発展に貢献します</p>
</section>

</article>
<!-- company-philosophy -->




</main>
<?php
require(ROOT.'footer.php');
?>
