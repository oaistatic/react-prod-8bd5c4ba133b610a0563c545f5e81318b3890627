import{c as ee,r as m,u as te,j as re}from"./2340486e-iyoyluj31h1sa6y8.js";import{u as se}from"./91969468-ghecm5qe8n6120vt.js";import{l as ae}from"./f8d34c7f-j1iwht3vha9qz3pu.js";import{c as ne,h as ie}from"./9e6b8179-b3gnpjjfluuofouq.js";import{mN as oe}from"./1a7ebd5f-l5ppx10xc56cf5jj.js";import{i as ce,M as Y,E as de}from"./8d846022-fvcinwjsfonoaybi.js";import{C as le}from"./4d271a7b-iowjtpv7swr03yfc.js";import{aM as K}from"./4813494d-htxz26hq9jzes4ww.js";import"./52047a56-c6tycu9vi241quy4.js";import"./1bc04b52-nnnogrsod2wre25x.js";import"./3509739a-kk1we877bogtg9fe.js";import"./e1a66d2b-hzpfr9kgidly4afb.js";import"./84983163-gan1f9ordoegunfq.js";import"./7517017f-efd9iwaiway92n98.js";const ue="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";function me({source:r,theme:e}){const s=encodeURIComponent(r);return`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: transparent;
      }

      #diagram {
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        box-sizing: border-box;
      }

      #diagram > svg {
        max-width: 100%;
        max-height: 100%;
      }

      pre {
        margin: 0;
        padding: 16px;
        white-space: pre-wrap;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 12px;
      }
    </style>
    <script src="${ue}"><\/script>
  </head>
  <body>
    <div id="diagram"></div>
    <script>
      (() => {
        const container = document.getElementById("diagram");
        if (!container) return;

        const showError = (message) => {
          container.innerHTML = "<pre>" + message + "</pre>";
        };

        if (
          typeof window.mermaid?.initialize !== "function" ||
          typeof window.mermaid?.parse !== "function" ||
          typeof window.mermaid?.render !== "function"
        ) {
          showError("Mermaid runtime failed to load.");
          return;
        }

        let source;
        try {
          source = decodeURIComponent(${JSON.stringify(s)});
        } catch (error) {
          showError("Invalid Mermaid source.");
          console.error(error);
          return;
        }

        window.mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          suppressErrorRendering: true,
          theme: ${JSON.stringify(e)},
          darkMode: ${JSON.stringify(e==="dark")},
          flowchart: { useMaxWidth: false },
          sequence: { useMaxWidth: false },
          gantt: { useMaxWidth: false },
          journey: { useMaxWidth: false },
          class: { useMaxWidth: false },
          state: { useMaxWidth: false },
          er: { useMaxWidth: false },
          pie: { useMaxWidth: false },
          quadrantChart: { useMaxWidth: false },
          xyChart: { useMaxWidth: false },
          requirement: { useMaxWidth: false },
          mindmap: { useMaxWidth: false },
          kanban: { useMaxWidth: false },
          timeline: { useMaxWidth: false },
          gitGraph: { useMaxWidth: false },
          c4: { useMaxWidth: false },
          sankey: { useMaxWidth: false },
          block: { useMaxWidth: false },
          packet: { useMaxWidth: false },
          architecture: { useMaxWidth: false },
          radar: { useMaxWidth: false },
        });

        const renderId = "mermaid-diagram-" + Math.random().toString(36).slice(2);

        Promise.resolve(window.mermaid.parse(source, { suppressErrors: true }))
          .then((parseResult) => {
            if (parseResult === false) {
              throw new Error("Invalid Mermaid source");
            }
            return window.mermaid.render(renderId, source);
          })
          .then((renderResult) => {
            const svgMarkup =
              typeof renderResult === "string"
                ? renderResult
                : renderResult?.svg;
            if (!svgMarkup) {
              throw new Error("Invalid Mermaid SVG output");
            }
            container.innerHTML = svgMarkup;
          })
          .catch((error) => {
            showError("Unable to render Mermaid diagram.");
            console.error(error);
          });
      })();
    <\/script>
  </body>
</html>`}const fe="https://cdn.jsdelivr.net/npm/vega@5/build/vega.min.js",ge="https://cdn.jsdelivr.net/npm/vega-lite@5/build/vega-lite.min.js",pe="https://cdn.jsdelivr.net/npm/vega-embed@6/build/vega-embed.min.js";function he({spec:r,mode:e}){const s=encodeURIComponent(r);return`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: white;
      }

      #vis {
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        box-sizing: border-box;
      }

      #vis > .vega-embed {
        max-width: 100%;
        max-height: 100%;
      }

      #vis svg,
      #vis canvas {
        max-width: 100%;
        max-height: 100%;
      }

      pre {
        margin: 0;
        padding: 16px;
        white-space: pre-wrap;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 12px;
      }
    </style>
    <script src="${fe}"><\/script>
    <script src="${ge}"><\/script>
    <script src="${pe}"><\/script>
  </head>
  <body>
    <div id="vis"></div>
    <script>
      (() => {
        const container = document.getElementById("vis");
        if (!container) return;

        const showError = (message) => {
          container.innerHTML = "<pre>" + message + "</pre>";
        };

        if (typeof window.vegaEmbed !== "function") {
          showError("Vega runtime failed to load.");
          return;
        }

        let spec;
        try {
          spec = JSON.parse(decodeURIComponent(${JSON.stringify(s)}));
        } catch (error) {
          showError("Invalid Vega spec JSON.");
          console.error(error);
          return;
        }

        const mode = ${JSON.stringify(e)};
        const schemaByMode = {
          vega: "https://vega.github.io/schema/vega/v5.json",
          "vega-lite": "https://vega.github.io/schema/vega-lite/v5.json",
        };

        if (
          spec &&
          typeof spec === "object" &&
          !Object.prototype.hasOwnProperty.call(spec, "$schema")
        ) {
          spec.$schema = schemaByMode[mode];
        }

        window
          .vegaEmbed("#vis", spec, {
            mode,
            actions: false,
            renderer: "svg",
          })
          .catch((error) => {
            showError("Unable to render Vega chart.");
            console.error(error);
          });
      })();
    <\/script>
  </body>
</html>`}const ve=/%%\{[\s\S]*?\}%%/g,we=/(?:["']securityLevel["']|securityLevel)\s*:/i;function Me(r){let e=!1;const s=r.replace(ve,t=>(we.test(t)&&(e=!0),""));if(e)throw new Error("Invalid Mermaid source");const i=s.trim();if(!i)throw new Error("Invalid Mermaid source");return i}function xe(r){const e=r.trim().toLowerCase();if(!e)return e;const s=oe[e];return s?.previewLanguage??s?.language??e}function ye({code:r,language:e,theme:s="light"}){const i=e.trim().toLowerCase(),t=xe(e);if(i==="svg"||(t==="html"||t==="xml"||t==="")&&ie(r))return{code:ne({svgMarkup:r}),language:"html"};if(t==="vega"||t==="vega-lite")return{code:he({spec:r,mode:t}),language:"html"};if(t==="mermaid"){const c=Me(r);return{code:me({source:c,theme:s==="dark"?"dark":"neutral"}),language:"html"}}if(ce(t))return{code:r,language:t};throw new Error(`Unsupported sandbox execution language: ${e}`)}function Ue(r){"use forget";const e=ee.c(46),{id:s,code:i,language:t,isCodeEdited:A,analyticsContext:c,showAnimation:H,onReadyChange:n,captureConsoleMessages:B,onConsoleMessagesChange:d,ref:Q}=r,f=A===void 0?!1:A,V=H===void 0?!0:H,g=B===void 0?!1:B,E=m.useRef(null),p=m.useRef(0);let b;e[0]===Symbol.for("react.memo_cache_sentinel")?(b=[],e[0]=b):b=e[0];const C=m.useRef(b),l=`${t}\0${i}`;let R;e[1]!==i||e[2]!==t?(R=ye({code:i,language:t}),e[1]=i,e[2]=t,e[3]=R):R=e[3];const{code:h,language:v}=R,[X,J]=m.useState(null),S=X===l;let L,I;e[4]!==S||e[5]!==n?(L=()=>{n?.(S)},I=[S,n],e[4]=S,e[5]=n,e[6]=L,e[7]=I):(L=e[6],I=e[7]),m.useEffect(L,I);const Z=se();let T,k;e[8]===Symbol.for("react.memo_cache_sentinel")?(T=()=>({focus:()=>{E.current?.focus()},captureScreenshotDataUrl:async()=>(await E.current?.screenshot())?.imageBase64??null,clearCapturedConsoleMessages:()=>{C.current=[]}}),k=[],e[8]=T,e[9]=k):(T=e[8],k=e[9]),m.useImperativeHandle(Q,T,k);let P;e[10]!==c||e[11]!==g||e[12]!==h||e[13]!==v||e[14]!==f||e[15]!==t||e[16]!==d||e[17]!==n||e[18]!==l?(P=()=>{p.current=p.current+1;const U=p.current;let z=!1,D=!1;const y=()=>p.current===U,j=a=>{D||!y()||(D=!0,ae({outcome:a,language:t,isCodeEdited:f,analyticsContext:c}),a==="failure"&&n?.(!1,"failure"))},q=()=>{y()&&!z&&(z=!0,J(l))},F=a=>{!g||d==null||!y()||(C.current=a,d(a))};C.current=[],F([]),(async()=>{const a=E.current?.evalAsync({code:h,language:v});if(a)for(;;){const u=await a.next();if(u.done){if(!y())break;D||j(z?"success":"failure");break}y()&&(F([...C.current,u.value]),u.value.type===Y.ENVIRONMENT_STATUS&&u.value.status===de.RUNNING_CODE&&(q(),(t==="html"||t==="react"||t==="threejs")&&j("success")),u.value.type===Y.RUN_COMPLETE&&(j(u.value.wasFatalError?"failure":"success"),u.value.wasFatalError||q()))}})().catch(a=>{y()&&(a instanceof DOMException&&a.name==="AbortError"||j("failure"))})},e[10]=c,e[11]=g,e[12]=h,e[13]=v,e[14]=f,e[15]=t,e[16]=d,e[17]=n,e[18]=l,e[19]=P):P=e[19];const o=K(P);let N;e[20]!==o?(N=()=>{J(null),o()},e[20]=o,e[21]=N):N=e[21];const $=K(N);let W;e[22]!==o?(W=()=>{const U=E.current;return o(),()=>{p.current=p.current+1,U?.stop()}},e[22]=o,e[23]=W):W=e[23];let _;e[24]!==c||e[25]!==g||e[26]!==h||e[27]!==v||e[28]!==f||e[29]!==t||e[30]!==d||e[31]!==n||e[32]!==l||e[33]!==o?(_=[c,g,h,v,f,t,d,n,l,o],e[24]=c,e[25]=g,e[26]=h,e[27]=v,e[28]=f,e[29]=t,e[30]=d,e[31]=n,e[32]=l,e[33]=o,e[34]=_):_=e[34],m.useEffect(W,_);const w=te();let M;e[35]!==w?(M=w.formatMessage({id:"c107cH",defaultMessage:"Preview"}),e[35]=w,e[36]=M):M=e[36];const G=!Z;let x;e[37]!==w?(x=w.formatMessage({id:"GE4AJf",defaultMessage:"Network requests in canvas are disabled for your workspace. Contact your admin to enable this feature."}),e[37]=w,e[38]=x):x=e[38];let O;return e[39]!==s||e[40]!==$||e[41]!==V||e[42]!==M||e[43]!==G||e[44]!==x?(O=re.jsx(le,{id:s,title:M,visuallyHidden:!1,disableNetworkRequests:G,networkAccessDeniedMessage:x,enableTransition:!1,enableAnimation:V,iframeTabIndex:0,onRetryCodeRun:$,ref:E}),e[39]=s,e[40]=$,e[41]=V,e[42]=M,e[43]=G,e[44]=x,e[45]=O):O=e[45],O}export{Ue as CodeBlockWebPreview};
//# sourceMappingURL=d02014d5-hz01hks0bunpmauv.js.map
