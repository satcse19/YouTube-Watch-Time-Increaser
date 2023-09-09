(function (_0x3ed5d4, _0x71a2f9) {
  const _0x2b74b3 = _0x39a9,
    _0x3b0cc1 = _0x3ed5d4();
  while (!![]) {
    try {
      const _0x2679d9 =
        parseInt(_0x2b74b3(0xb5)) / 0x1 +
        parseInt(_0x2b74b3(0xc6)) / 0x2 +
        -parseInt(_0x2b74b3(0xc2)) / 0x3 +
        (-parseInt(_0x2b74b3(0xb6)) / 0x4) * (parseInt(_0x2b74b3(0xb9)) / 0x5) +
        (parseInt(_0x2b74b3(0xb4)) / 0x6) * (parseInt(_0x2b74b3(0xc5)) / 0x7) +
        (parseInt(_0x2b74b3(0xbc)) / 0x8) * (-parseInt(_0x2b74b3(0xbf)) / 0x9) +
        parseInt(_0x2b74b3(0xb3)) / 0xa;
      if (_0x2679d9 === _0x71a2f9) break;
      else _0x3b0cc1["push"](_0x3b0cc1["shift"]());
    } catch (_0x5aa72b) {
      _0x3b0cc1["push"](_0x3b0cc1["shift"]());
    }
  }
})(_0x53bd, 0xa0ed2);
function createAndLoadIframes() {
  const _0x1ec960 = _0x39a9,
    _0x56ff8c = parseInt(
      document["getElementById"](_0x1ec960(0xc0))[_0x1ec960(0xbd)]
    ),
    _0x167f69 = document[_0x1ec960(0xc9)](_0x1ec960(0xc1))[_0x1ec960(0xbd)],
    _0x575c56 = document[_0x1ec960(0xc9)]("iframeContainer");
  _0x575c56[_0x1ec960(0xb1)] = "";
  if (_0x167f69[_0x1ec960(0xc3)]() === "") return alert(_0x1ec960(0xb2)), ![];
  for (let _0x3b944c = 0x0; _0x3b944c < _0x56ff8c; _0x3b944c++) {
    const _0x31bfff = document["createElement"]("iframe");
    _0x31bfff[_0x1ec960(0xb0)]("id", _0x1ec960(0xbb) + _0x3b944c),
      _0x31bfff[_0x1ec960(0xb0)]("width", _0x1ec960(0xb7)),
      _0x31bfff[_0x1ec960(0xb0)](_0x1ec960(0xc7), "300"),
      _0x31bfff["setAttribute"]("allowfullscreen", _0x1ec960(0xc4)),
      _0x31bfff[_0x1ec960(0xb0)](_0x1ec960(0xc8), _0x1ec960(0xba)),
      (_0x31bfff[_0x1ec960(0xb8)] =
        "https://www.youtube.com/embed/" +
        extractYouTubeVideoID(_0x167f69) +
        "?autoplay=1&start=0"),
      _0x575c56["appendChild"](_0x31bfff);
  }
  return ![];
}
function _0x53bd() {
  const _0x338b84 = [
    "getElementById",
    "setAttribute",
    "innerHTML",
    "Please\x20enter\x20a\x20valid\x20YouTube\x20video\x20URL",
    "15855060PGhIrm",
    "18CiReXW",
    "9276pdZhyD",
    "1904732BZPQdt",
    "400",
    "src",
    "5PSSMvW",
    "autoplay;\x20encrypted-media",
    "iframe",
    "72TrGCOP",
    "value",
    "match",
    "1037349ApRPuC",
    "iframeCount",
    "videoUrl",
    "2620950zohgSx",
    "trim",
    "true",
    "1743931GFAlRo",
    "1408310nbxNjw",
    "height",
    "allow",
  ];
  _0x53bd = function () {
    return _0x338b84;
  };
  return _0x53bd();
}
function _0x39a9(_0x2959b5, _0x180b43) {
  const _0x53bd59 = _0x53bd();
  return (
    (_0x39a9 = function (_0x39a9c4, _0x1ed965) {
      _0x39a9c4 = _0x39a9c4 - 0xb0;
      let _0x25bc6e = _0x53bd59[_0x39a9c4];
      return _0x25bc6e;
    }),
    _0x39a9(_0x2959b5, _0x180b43)
  );
}
function extractYouTubeVideoID(_0x4e9830) {
  const _0x13aa6c = _0x39a9,
    _0x3caf5d = _0x4e9830[_0x13aa6c(0xbe)](/(?:\/|v=)([a-zA-Z0-9_-]{11})/);
  return _0x3caf5d ? _0x3caf5d[0x1] : "";
}
