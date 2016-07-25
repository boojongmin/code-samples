```shell
npm install --save-dev webpack-dev-server
```

npm WARN saveError ENOENT: no such file or directory, open '/Users/james.boo/package.json'
/Users/james.boo
+-- grunt@1.0.1
+-- gulp@3.9.1
+-- UNMET PEER DEPENDENCY webpack@>=1.3.0 <3
`-- webpack-dev-server@1.14.1
  +-- compression@1.6.2
  | +-- accepts@1.3.3
  | | `-- negotiator@0.6.1
  | +-- bytes@2.3.0
  | +-- compressible@2.0.8
  | +-- on-headers@1.0.1
  | `-- vary@1.1.0
  +-- connect-history-api-fallback@1.1.0
  +-- express@4.14.0
  | +-- accepts@1.3.3
  | | `-- negotiator@0.6.1
  | +-- array-flatten@1.1.1
  | +-- content-disposition@0.5.1
  | +-- content-type@1.0.2
  | +-- cookie@0.3.1
  | +-- cookie-signature@1.0.6
  | +-- encodeurl@1.0.1
  | +-- finalhandler@0.5.0
  | +-- merge-descriptors@1.0.1
  | +-- methods@1.1.2
  | +-- path-to-regexp@0.1.7
  | +-- proxy-addr@1.1.2
  | | +-- forwarded@0.1.0
  | | `-- ipaddr.js@1.1.1
  | +-- range-parser@1.2.0
  | +-- send@0.14.1
  | | +-- http-errors@1.5.0
  | | | `-- setprototypeof@1.0.1
  | | `-- mime@1.3.4
  | +-- serve-static@1.11.1
  | `-- type-is@1.6.13
  |   `-- media-typer@0.3.0
  +-- optimist@0.6.1
  | +-- minimist@0.0.10
  | `-- wordwrap@0.0.3
  +-- sockjs@0.3.17
  | +-- faye-websocket@0.10.0
  | | `-- websocket-driver@0.6.5
  | |   `-- websocket-extensions@0.1.1
  | `-- uuid@2.0.2
  +-- sockjs-client@1.1.1
  | +-- eventsource@0.1.6
  | | `-- original@1.0.0
  | |   `-- url-parse@1.0.5
  | +-- faye-websocket@0.11.0
  | +-- json3@3.3.2
  | `-- url-parse@1.1.1
  |   `-- querystringify@0.0.3
  +-- stream-cache@0.0.2
  +-- supports-color@3.1.2
  | `-- has-flag@1.0.0
  +-- UNMET PEER DEPENDENCY webpack@1 || ^2.1.0-beta
  `-- webpack-dev-middleware@1.6.1
    +-- memory-fs@0.3.0
    | +-- errno@0.1.4
    | | `-- prr@0.0.0
    | `-- readable-stream@2.1.4
    |   `-- isarray@1.0.0
    `-- mime@1.3.4

npm WARN enoent ENOENT: no such file or directory, open '/Users/james.boo/package.json'
npm WARN webpack-dev-server@1.14.1 requires a peer of webpack@>=1.3.0 <3 but none was installed.
npm WARN webpack-dev-middleware@1.6.1 requires a peer of webpack@1 || ^2.1.0-beta but none was installed.
npm WARN james.boo No description
npm WARN james.boo No repository field.
npm WARN james.boo No README data
npm WARN james.boo No license field.


```shell
 npm start
```

> 00.webpack@1.0.0 start /Users/james.boo/dev/workspace/idea_kakao/code-samples/pro-react/stduy-code/00.webpack
> webpack-dev-server --progress
                                                                                                                                                                70% 1/1 build moduleshttp://localhost:8080/
webpack result is served from /
content is served from ./public
404s will fallback to /index.html                                                                                                        Hash: 842cf1957ea3205b5272
Version: webpack 1.13.1
Time: 614ms
    Asset    Size  Chunks             Chunk Names
bundle.js  616 kB       0  [emitted]  main
chunk    {0} bundle.js (main) 215 kB [rendered]
    [0] multi main 40 bytes {0} [built]
    [1] (webpack)-dev-server/client?http://localhost:8080 2.67 kB {0} [built]
    [2] ./~/url/url.js 22.3 kB {0} [built]
    [3] ./~/url/~/punycode/punycode.js 14.6 kB {0} [built]
    [4] (webpack)/buildin/module.js 251 bytes {0} [built]
    [5] ./~/querystring/index.js 127 bytes {0} [built]
    [6] ./~/querystring/decode.js 2.4 kB {0} [built]
    [7] ./~/querystring/encode.js 2.09 kB {0} [built]
    [8] ./~/sockjs-client/lib/entry.js 244 bytes {0} [built]
    [9] ./~/sockjs-client/lib/transport-list.js 613 bytes {0} [built]
   [10] ./~/sockjs-client/lib/transport/websocket.js 2.71 kB {0} [built]
   [11] ./~/process/browser.js 2.82 kB {0} [built]
   [12] ./~/sockjs-client/lib/utils/event.js 2 kB {0} [built]
   [13] ./~/sockjs-client/lib/utils/random.js 746 bytes {0} [built]
   [14] ./~/sockjs-client/lib/utils/browser-crypto.js 438 bytes {0} [built]
   [15] ./~/sockjs-client/lib/utils/url.js 975 bytes {0} [built]
   [16] ./~/url-parse/index.js 8.09 kB {0} [built]
   [17] ./~/requires-port/index.js 753 bytes {0} [built]
   [18] ./~/url-parse/lolcation.js 1.58 kB {0} [built]
   [19] ./~/querystringify/index.js 1.3 kB {0} [built]
   [20] ./~/debug/browser.js 3.76 kB {0} [built]
   [21] ./~/debug/debug.js 4.1 kB {0} [built]
   [22] ./~/ms/index.js 2.33 kB {0} [built]
   [23] ./~/inherits/inherits_browser.js 672 bytes {0} [built]
   [24] ./~/sockjs-client/lib/event/emitter.js 1.27 kB {0} [built]
   [25] ./~/sockjs-client/lib/event/eventtarget.js 1.85 kB {0} [built]
   [26] ./~/sockjs-client/lib/transport/browser/websocket.js 172 bytes {0} [built]
   [27] ./~/sockjs-client/lib/transport/xhr-streaming.js 1.25 kB {0} [built]
   [28] ./~/sockjs-client/lib/transport/lib/ajax-based.js 1.31 kB {0} [built]
   [29] ./~/sockjs-client/lib/transport/lib/sender-receiver.js 1.15 kB {0} [built]
   [30] ./~/sockjs-client/lib/transport/lib/buffered-sender.js 2.3 kB {0} [built]
   [31] ./~/sockjs-client/lib/transport/lib/polling.js 1.32 kB {0} [built]
   [32] ./~/sockjs-client/lib/transport/receiver/xhr.js 1.58 kB {0} [built]
   [33] ./~/sockjs-client/lib/transport/sender/xhr-cors.js 343 bytes {0} [built]
   [34] ./~/sockjs-client/lib/transport/browser/abstract-xhr.js 4.8 kB {0} [built]
   [35] ./~/sockjs-client/lib/transport/sender/xhr-local.js 352 bytes {0} [built]
   [36] ./~/sockjs-client/lib/utils/browser.js 560 bytes {0} [built]
   [37] ./~/sockjs-client/lib/transport/xdr-streaming.js 984 bytes {0} [built]
   [38] ./~/sockjs-client/lib/transport/sender/xdr.js 2.46 kB {0} [built]
   [39] ./~/sockjs-client/lib/transport/eventsource.js 766 bytes {0} [built]
   [40] ./~/sockjs-client/lib/transport/receiver/eventsource.js 1.58 kB {0} [built]
   [41] ./~/sockjs-client/lib/transport/browser/eventsource.js 37 bytes {0} [built]
   [42] ./~/sockjs-client/lib/transport/lib/iframe-wrap.js 981 bytes {0} [built]
   [43] ./~/sockjs-client/lib/transport/iframe.js 3.83 kB {0} [built]
   [44] ./~/json3/lib/json3.js 43.3 kB {0} [built]
   [45] (webpack)/buildin/amd-options.js 43 bytes {0} [built]
   [46] ./~/sockjs-client/lib/version.js 26 bytes {0} [built]
   [47] ./~/sockjs-client/lib/utils/iframe.js 5.06 kB {0} [built]
   [48] ./~/sockjs-client/lib/utils/object.js 532 bytes {0} [built]
   [49] ./~/sockjs-client/lib/transport/htmlfile.js 710 bytes {0} [built]
   [50] ./~/sockjs-client/lib/transport/receiver/htmlfile.js 2.2 kB {0} [built]
   [51] ./~/sockjs-client/lib/transport/xhr-polling.js 894 bytes {0} [built]
   [52] ./~/sockjs-client/lib/transport/xdr-polling.js 712 bytes {0} [built]
   [53] ./~/sockjs-client/lib/transport/jsonp-polling.js 1.02 kB {0} [built]
   [54] ./~/sockjs-client/lib/transport/receiver/jsonp.js 5.57 kB {0} [built]
   [55] ./~/sockjs-client/lib/transport/sender/jsonp.js 2.46 kB {0} [built]
   [56] ./~/sockjs-client/lib/main.js 11.9 kB {0} [built]
   [57] ./~/sockjs-client/lib/shims.js 18.2 kB {0} [built]
   [58] ./~/sockjs-client/lib/utils/escape.js 2.31 kB {0} [built]
   [59] ./~/sockjs-client/lib/utils/transport.js 1.35 kB {0} [built]
   [60] ./~/sockjs-client/lib/utils/log.js 450 bytes {0} [built]
   [61] ./~/sockjs-client/lib/event/event.js 477 bytes {0} [built]
   [62] ./~/sockjs-client/lib/location.js 177 bytes {0} [built]
   [63] ./~/sockjs-client/lib/event/close.js 295 bytes {0} [built]
   [64] ./~/sockjs-client/lib/event/trans-message.js 292 bytes {0} [built]
   [65] ./~/sockjs-client/lib/info-receiver.js 2.22 kB {0} [built]
   [66] ./~/sockjs-client/lib/transport/sender/xhr-fake.js 456 bytes {0} [built]
   [67] ./~/sockjs-client/lib/info-iframe.js 1.52 kB {0} [built]
   [68] ./~/sockjs-client/lib/info-iframe-receiver.js 791 bytes {0} [built]
   [69] ./~/sockjs-client/lib/info-ajax.js 1.03 kB {0} [built]
   [70] ./~/sockjs-client/lib/iframe-bootstrap.js 2.9 kB {0} [built]
   [71] ./~/sockjs-client/lib/facade.js 723 bytes {0} [built]
   [72] ./~/strip-ansi/index.js 161 bytes {0} [built]
   [73] ./~/ansi-regex/index.js 135 bytes {0} [built]
   [74] ./app/main.js 95 bytes {0} [built]
   [75] ./app/Greeter.js 148 bytes {0} [built]
webpack: bundle is now VALID.


    http://localhost:8080 웹브라우저에서 열기

    app/Greeter.js 수정
```javascript
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = 'test -> browser reload after script modify';
    return greet;
};
```

webpack: bundle is now INVALID.                                                                                                            Hash: 594c37aae9feb1bbd7fc
Version: webpack 1.13.1
Time: 183ms
    Asset    Size  Chunks             Chunk Names
bundle.js  616 kB       0  [emitted]  main
chunk    {0} bundle.js (main) 215 kB [rendered]
   [75] ./app/Greeter.js 161 bytes {0} [built]
     + 75 hidden modules
webpack: bundle is now VALID.
webpack: bundle is now INVALID.                                                                                                            Hash: 842cf1957ea3205b5272
Version: webpack 1.13.1
Time: 40ms
    Asset    Size  Chunks             Chunk Names
bundle.js  616 kB       0  [emitted]  main
chunk    {0} bundle.js (main) 215 kB [rendered]
   [75] ./app/Greeter.js 148 bytes {0} [built]
     + 75 hidden modules
webpack: bundle is now VALID.
