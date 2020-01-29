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
<h1 class="ttl2">会社情報</h1>
<ul class="breadcrumbs">
<li><a href="/">HOME</a></li>
<li>会社情報</li>
</ul>
</div>
</article>





<article id="company-top-list">
<div class="img-list">

<section>
<h2 class="list-ttl">Greeting</h2>
<a href="/company/message/"><img src="/company/img/company-top-list-greeting.jpg" alt=""><p>ごあいさつ</p></a>
<p class="list-txt">会長兼CEOの<span class="ie11-other">今野 <?php include(ROOT.'/company/kunihiro.php');?></span><span class="ie11"><img src="/common/img/konnokunihiro.png" alt="今野 邦廣"></span>と社長兼COOの栗田伸樹より、皆様へのごあいさつです。</p>
</section>

<section>
<h2 class="list-ttl">Management Philosophy</h2>
<a href="/company/philosophy/"><img src="/company/img/company-top-list-philosophy.jpg" alt=""><p>経営理念</p></a>
<p class="list-txt">レスターホールディングスが掲げる経営理念と社是をご紹介します。</p>
</section>

<section>
<h2 class="list-ttl">Company Profile</h2>
<a href="/company/outline/"><img src="/company/img/company-top-list-outline.jpg" alt=""><p>会社概要</p></a>
<p class="list-txt">事業内容や所在地などの基本情報、役員一覧、アクセス情報をご案内します。</p>
</section>

<section>
<h2 class="list-ttl">Company History</h2>
<a href="/company/history/"><img src="/company/img/company-top-list-history.jpg" alt=""><p>会社沿革</p></a>
<p class="list-txt">レスターホールディングス設立までの道のりを、グループ史としてご紹介します。</p>
</section>

<section>
<h2 class="list-ttl">Group's Business Activities</h2>
<a href="/company/group/"><img src="/company/img/company-top-list-group.jpg?200116" alt=""><p>グループ事業領域</p></a>
<p class="list-txt">グループの多様な事業領域をご紹介します。</p>
</section>

<section>
<h2 class="list-ttl">Code of Conduct</h2>
<a href="/company/kihan/"><img src="/company/img/company-top-list-kihan.jpg" alt=""><p>行動規範</p></a>
<p class="list-txt">レスターホールディングスの行動規範を掲載します。</p>
</section>


</div>
</article>
<!-- company-top-list -->




</main>
<?php
require(ROOT.'footer.php');
?>
