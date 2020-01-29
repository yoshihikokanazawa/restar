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
<h1 class="ttl2">採用について お問い合わせ</h1>
<ul class="breadcrumbs">
<li><a href="/">HOME</a></li>
<li><a href="/contact/">お問い合わせ</a></li>
<li>採用について</li>
</ul>
</div>
</article>




<article id="contact-recruit-form" class="mailform">
<ul class="flow">
<li>入力フォーム</li><li>入力確認</li><li>入力完了</li>
</ul>

<div class="mailform-thanks">
<div class="mailform-thanks-frm">
<h2>お問い合わせ完了</h2>
<p>お問い合わせを受け付けました。お問い合わせ窓口では、ご指定のメールアドレス宛への迅速な回答を心がけておりますが、お問い合わせ内容によりましては回答までにお時間をいただく場合、または回答自体できかねる場合もございますのでご了承ください。</p>
</div>
<div class="btns">
<p><a href="/">トップページへ戻る</a></p>
</div>
</div>
<!-- mailform-thanks -->

</article>
<!-- contact-recruit-form -->




</main>
<?php
require(ROOT.'footer.php');
?>
