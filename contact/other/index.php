<!doctype html>
<html lang="ja" class="h-rhd h-contact">
<?php
define(ROOT,str_replace($_SERVER['SCRIPT_NAME'],'',$_SERVER['SCRIPT_FILENAME']).'/');
/*$js='./js/top.js';*/
/*$css='./css/top.css';*/
require(ROOT.'header.php');
?>
<main>




<article id="mv-sub">
<img src="/common/img/mv-gray.png" alt="">
<div class="mv-inner">
<p class="ttl1"><span class="en">CONTACT</span><span class="jp">お問い合わせ</span></p>
</div>
</article>




<article id="ttl-box">
<div class="ttl-box-inner">
<h1 class="ttl2">その他について お問い合わせ</h1>
<ul class="breadcrumbs">
<li><a href="/">HOME</a></li>
<li><a href="/contact/">お問い合わせ</a></li>
<li>その他について</li>
</ul>
</div>
</article>




<article id="contact-other-form" class="mailform">
<ul class="flow">
<li>入力フォーム</li><li>入力確認</li><li>入力完了</li>
</ul>


<form action="./confirm/">
<dl>
<dt>タイトル<span class="any">任意</span></dt><dd><input type="text" placeholder=""></dd>
<dt>メッセージ<span class="require">必須</span></dt><dd><textarea rows="10" cols="10"></textarea></dd>
<dt>お名前<span class="require">必須</span></dt><dd><input type="text"></dd>
<dt>法人名／部署名<span class="any">任意</span></dt><dd><input type="text"></dd>
<dt>電話番号<span class="require">必須</span></dt><dd><input type="text"></dd>
<dt>メールアドレス<span class="require">必須</span></dt><dd><input type="text"></dd>
</dl>

<div class="consent">
<p>個人情報保護方針への同意</p>
<a href="/privacy/" target="_blank">個人情報保護方針</a>
<label><input type="checkbox">上記内容に同意する</label>
</div>

<div class="btns">
<p><input type="submit" value="確認する"></p>
<p><input type="reset" value="クリア"></p>
</div>
</form>


</article>
<!-- contact-other-form -->




</main>
<?php
require(ROOT.'footer.php');
?>
