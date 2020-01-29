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
<h1 class="ttl2">会社概要</h1>
<ul class="breadcrumbs">
<li><a href="/">HOME</a></li>
<li><a href="/company/">会社情報</a></li>
<li>会社概要</li>
</ul>
</div>
</article>





<article id="company-overview">
<h4 class="ttl-navy">会社概要</h4>

<div class="company-overview-detail">
<ul>
<li><p class="ttl">商　号</p><p class="txt">株式会社レスターホールディングス（英文名：Restar Holdings Corporation）</p></li>
<li><p class="ttl">代表者</p><p class="txt"><span class="post1">代表取締役会長兼CEO</span>　<span class="ie11-other">今野 <?php include(ROOT.'/company/kunihiro.php');?></span><span class="ie11"><img src="/common/img/konnokunihiro.png" alt="今野 邦廣"></span><br>
<span class="post2">代表取締役社長兼COO</span>　栗田 伸樹</p></li>
<li><p class="ttl">事業内容</p><p class="txt">グループの経営戦略策定、事業間シナジーの創出、およびグループ各社の経営管理、業務支援</p></li>
<li><p class="ttl">本社所在地</p><p class="txt">〒140-0002<br class="pc-space">東京都品川区東品川3-6-5<br>
TEL: 03-3458-4618</p></li>
<li><p class="ttl">営業開始日</p><p class="txt">2019年4月1日</p></li>
<li><p class="ttl">資本金</p><p class="txt">43億83百万円</p></li>
<li><p class="ttl">決算期</p><p class="txt">3月</p></li>
</ul>
</div>
</article>
<!-- company-overview -->




<article id="company-officers">
<h4 class="ttl-navy">役員一覧</h4>

<div class="company-officers-detail">
<ul>
<li><p class="ttl">代表取締役会長兼CEO</p><p class="txt"><span class="ie11-other">今野 <?php include(ROOT.'/company/kunihiro.php');?></span><span class="ie11"><img src="/common/img/konnokunihiro.png" alt="今野 邦廣"></span>（こんの くにひろ）</p></li>
<li><p class="ttl">代表取締役社長兼COO</p><p class="txt">栗田 伸樹（くりた のぶき）</p></li>
<li><p class="ttl">取締役</p><p class="txt">三好 林太郎 （みよし りんたろう）</p></li>
<li><p class="ttl">取締役</p><p class="txt">原田 宜 （はらだ よしみ）</p></li>
<li><p class="ttl">取締役</p><p class="txt">矢島 浩 （やじま ひろし）</p></li>
<li><p class="ttl">取締役</p><p class="txt">稲葉 俊彦 （いなば としひこ）</p></li>
<li><p class="ttl">取締役（常勤監査等委員）</p><p class="txt">成瀬 達一 （なるせ たついち）</p></li>
<li><p class="ttl">取締役（常勤監査等委員）</p><p class="txt">朝香 友治 （あさか ともはる）</p></li>
<li><p class="ttl">取締役（監査等委員）</p><p class="txt">松山 遙 （まつやま はるか）</p></li>
<li><p class="ttl">取締役（監査等委員）</p><p class="txt">戸川 清 （とがわ きよし）</p></li>
<li><p class="ttl">取締役（監査等委員）</p><p class="txt">手塚 仙夫 （てづか せんお）</p></li>
<li><p class="ttl">取締役（監査等委員）</p><p class="txt">坂倉 裕司（さかくら ゆうじ）</p></li>
</ul>
</div>
</article>
<!-- company-officers -->




<article id="access">
<h4 class="ttl-navy">アクセス</h4>

<div class="access-detail">
<div class="gmap">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.481221030795!2d139.74523741621732!3d35.61586148020958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a6dd8137c83%3A0xd591106d3447f750!2z44CSMTQwLTAwMDIg5p2x5Lqs6YO95ZOB5bed5Yy65p2x5ZOB5bed77yT5LiB55uu77yW4oiS77yV!5e0!3m2!1sja!2sjp!4v1576113637620!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>
<ul class="time-required">
<li>JR・京急線「品川駅」より都営バス10分<span>高輪口西口） 2番乗り場 品93 大井競馬場行 東品川三丁目下車すぐ</span><span>港南口東口） 3番乗り場 品91 八潮パークタウン行 東品川三丁目下車すぐ</span></li>
<li>京急線 「新馬場駅」南口下車 徒歩10分、「青物横丁駅」下車 徒歩13分</li>
<li>りんかい線 「品川シーサイド駅」下車 徒歩10分</li>
</ul>
</div>
</article>
<!-- access -->




</main>
<?php
require(ROOT.'footer.php');
?>
