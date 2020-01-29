<!doctype html>
<html lang="ja" class="h-rdc h-supplier">
<?php
define(ROOT,str_replace($_SERVER['SCRIPT_NAME'],'',$_SERVER['SCRIPT_FILENAME']).'/');
/*$js='./js/top.js';*/
/*$css='./css/top.css';*/
require(ROOT.'header_rdc.php');
?>
<main class="rdc-supplier">




<article id="mv-sub">
<img src="/rdc/img/mv-rdc-supplier.jpg" alt="">
<div class="mv-inner">
<p class="ttl1"><span class="en">SUPPLIER</span><span class="jp">取り扱いメーカー</span></p>
</div>
</article>




<article id="ttl-box">
<div class="ttl-box-inner">
<h1 class="ttl2">取り扱いメーカー</h1>
<ul class="breadcrumbs">
<li><a href="/rdc/">HOME</a></li>
<li>取り扱いメーカー</li>
</ul>
</div>
</article>





<article id="rdc-supplier-top" class="supplier-top">
<ul>
<li><a href="/rdc/supplier/semiconductor/">
<p class="img"><img src="/rdc/supplier/img/rdc-supplier-list1.jpg" alt=""></p>
<p class="txt"><span>半導体</span></p>
</a></li>
<!--<li><a href="/rdc/supplier/electronic/">
<p class="img"><img src="/rdc/supplier/img/rdc-supplier-list2.jpg" alt=""></p>
<p class="txt"><span>電子部品</span></p>
</a></li>-->
</ul>
</article>
<!-- rdc-supplier -->




</main>
<?php
require(ROOT.'footer_rdc.php');
?>
