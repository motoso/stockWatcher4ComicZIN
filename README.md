# What's this?
A quite simple Chrome Extension to watch stocks on [COMIC ZIN](http://www.comiczin.jp/) web page.

# Installation
Chromeの設定 > 拡張機能からインストールする．この際，デベロッパーモードである必要がある．  

# How to Use
オプションページのテキストボックスに監視したいURLを入力すると，core.jsの`delay_seconds`で指定された秒数ごとにページを監視する．URLは改行することで任意の数だけ入れることができる．

## Note
現状の実装では最後の行は改行しないようにしてください．
