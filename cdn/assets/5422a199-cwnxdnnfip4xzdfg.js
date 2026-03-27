const r=/^data:(image\/[^;,]+)(?:;[^,]*)?,/;function a(t){if(typeof t!="string")return null;const n=t.match(r);return n?{mimeType:n[1],dataUrl:t}:null}function e(t){return a(t)!=null}export{e as i};
//# sourceMappingURL=5422a199-cwnxdnnfip4xzdfg.js.map
