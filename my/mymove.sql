SET NAMES UTF8;
DROP DATABASE IF EXISTS tx;
CREATE DATABASE tx CHARSET=UTF8;
USE tx;
CREATE TABLE tx_user(
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname VARCHAR(10),
  upwd  VARCHAR(20),
  phone  VARCHAR(11) NOT NULL UNIQUE,
  email  VARCHAR(20)
);

CREATE TABLE tx_th_pic(
 pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 pic    VARCHAR(64),
 pname  VARCHAR(64)
);
 
INSERT INTO tx_th_pic VALUES(1,'img/heyu.jpg','新时装：鹤羽鸣鸢展示，带有永久饰件');
INSERT INTO tx_th_pic VALUES(2,'img/changjian.jpg','新武器：辉长石剑、辉长石长刀展示');
INSERT INTO tx_th_pic VALUES(3,'img/mojing.jpg','新饰件：墨之彩镜，内含表情“扶眼镜”');
INSERT INTO tx_th_pic VALUES(4,'img/zhenshou.jpg','新珍兽：签到赠送双人水陆空歌扇萦风');
INSERT INTO tx_th_pic VALUES(5,'img/taohua.jpg','新珍兽：开学元灵返还“桃花落”展示');
INSERT INTO tx_th_pic VALUES(6,'img/moran.jpg','新时装：漫卷诗书礼包得时装楼台会展示');







