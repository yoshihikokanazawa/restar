<!doctype html>
<html lang="ja" class="h-rec h-supplier">
<?php
define(ROOT,str_replace($_SERVER['SCRIPT_NAME'],'',$_SERVER['SCRIPT_FILENAME']).'/');
/*$js='./js/top.js';*/
/*$css='./css/top.css';*/
require(ROOT.'header_rec.php');
?>
<main>




<article id="mv-sub">
<img src="/rec/img/mv-rec-supplier.jpg" alt="">
<div class="mv-inner">
<p class="ttl1"><span class="en">SUPPLIER</span><span class="jp">取り扱いメーカー</span></p>
</div>
</article>




<article id="ttl-box">
<div class="ttl-box-inner">
<h1 class="ttl2">取り扱いメーカー</h1>
<ul class="breadcrumbs">
<li><a href="/rec/">HOME</a></li>
<li>取り扱いメーカー</li>
</ul>
</div>
</article>




<article id="rec-supplier-top" class="supplier-top">
<ul>
<li><a href="/rec/supplier/semiconductor/">
<p class="img"><img src="/rec/supplier/img/supplier-list1.jpg" alt=""></p>
<p class="txt"><span>半導体</span></p>
</a></li>
<li><a href="/rec/supplier/electronic/">
<p class="img"><img src="/rec/supplier/img/supplier-list2.jpg" alt=""></p>
<p class="txt"><span>電子部品</span></p>
</a></li>
<li><a href="/rec/supplier/embedded-board/">
<p class="img"><img src="/rec/supplier/img/supplier-list3.jpg" alt=""></p>
<p class="txt"><span>エンべデットボード</span></p>
</a></li>
<li><a href="/rec/supplier/industrial-camera/">
<p class="img"><img src="/rec/supplier/img/supplier-list4.jpg" alt=""></p>
<p class="txt"><span>産業用カメラ</span></p>
</a></li>
<li><a href="/rec/supplier/material/">
<p class="img"><img src="/rec/supplier/img/supplier-list5.jpg" alt=""></p>
<p class="txt"><span>マテリアル</span></p>
</a></li>
<li><a href="/rec/supplier/industrial-drone/">
<p class="img"><img src="/rec/supplier/img/supplier-list6.jpg" alt=""></p>
<p class="txt"><span>産業用ドローン</span></p>
</a></li>
</ul>
</article>
<!-- rec-supplier-top -->




</main>
<?php
require(ROOT.'footer_rec.php');
?>
