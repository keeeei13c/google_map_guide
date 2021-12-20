# 経路案内をURLにする

結論:
`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${value}&travelmode=driving`

説明:

- originにスタート地点指定する
- destination: 目的地
- travelmode: 交通手段
  
入れる値は、住所、座標、場所名などどれでも大丈夫です。

## スタート地点

今回は現在地をスタート地点としているため、現在地を取得する必要があります。
標準のJavaScriptのAPIに備わっているためそちらを使います。
[詳しくはJavascript公式MDNをご確認ください。](https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API)

``` react
 navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
```

## 目的地

お好きな値を入れてください。

## 交通手段

travlemodeは交通手段を指定します。
optionなのでなくても平気です。
modeはdriving,walking,bicycling,transitがあります。
[こちらもGoogle公式Docsをご確認ください。](https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes)

参考記事:
https://qiita.com/hiron2225/items/8d5cd1b6728b4d63434b
https://qiita.com/yukishiba/items/ac6c9dfb4f5a5510744c