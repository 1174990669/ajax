<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
	array('title'=>'德国女总理默克尔滑雪时摔倒 骨盆断裂','date'=>'2017-1-6'),
	array('title'=>'中日驻英外交官撰文互称对方国家为"伏地魔"','date'=>'2017-1-6'),	array('title'=>'中日驻英外交官撰文互称对方国家为"伏地魔"','date'=>'2017-1-6'),	array('title'=>'中日驻英外交官撰文互称对方国家为"伏地魔"','date'=>'2017-1-6'),	array('title'=>'中日驻英外交官撰文互称对方国家为"伏地魔"','date'=>'2017-1-6'),	array('title'=>'中日驻英外交官撰文互称对方国家为"伏地魔"','date'=>'2017-1-6'),	array('title'=>'中日驻英外交官撰文互称对方国家为"伏地魔"','date'=>'2017-1-6'),	array('title'=>'中日驻英外交官撰文互称对方国家为"伏地魔"','date'=>'2017-1-6'),
);

echo json_encode($news);
