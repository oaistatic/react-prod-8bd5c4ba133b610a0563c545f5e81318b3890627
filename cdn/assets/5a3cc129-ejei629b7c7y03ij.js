import{g as U,s as q,a as V,b as Z,q as j,p as H,_ as o,l as w,c as J,E as K,I as Q,L as X,d as Y,y as ee,F as te}from"./0cee873e-2bhvbpi6wkgxm7af.js";import{p as ae}from"./21d2934c-nxegmsw6ohn9ql6r.js";import{p as re}from"./80fce97c-lxrs2qhf1qdwbi0g.js";import"./aa214ea3-mewgt9ra7uf34uug.js";import{d as G}from"./404fcfb3-h4d3wzdy3nmn6y91.js";import{o as ie}from"./8a4ba318-icb6f27hecaxunne.js";import{d as oe}from"./558211ed-hp3eu5sv1pox83ts.js";import"./2340486e-iyoyluj31h1sa6y8.js";import"./4813494d-htxz26hq9jzes4ww.js";import"./1a7ebd5f-l5ppx10xc56cf5jj.js";import"./3e64cc41-gc5mo088m8hqml4y.js";import"./74bc9fb5-lpkvfmw854cstwi7.js";import"./eacba67c-b98w6wd0lsf6dfjz.js";import"./60be9861-jv37m17kgqijvkrn.js";import"./dfc3376b-i58zyaevp14xxbgt.js";import"./1f6fa6f6-frgxkeyzu3nd034k.js";import"./4dd72076-ojrbs1nx4e4b3all.js";import"./4c7e98bf-eokw4yzhhqoho1vj.js";import"./473287f8-nkco7wh9dijykesu.js";import"./bb54068a-r109lneo6fsdnd69.js";var se=te.pie,D={sections:new Map,showData:!1},g=D.sections,C=D.showData,le=structuredClone(se),ne=o(()=>structuredClone(le),"getConfig"),ce=o(()=>{g=new Map,C=D.showData,ee()},"clear"),pe=o(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),de=o(()=>g,"getSections"),ge=o(e=>{C=e},"setShowData"),me=o(()=>C,"getShowData"),W={getConfig:ne,clear:ce,setDiagramTitle:H,getDiagramTitle:j,setAccTitle:Z,getAccTitle:V,setAccDescription:q,getAccDescription:U,addSection:pe,getSections:de,setShowData:ge,getShowData:me},ue=o((e,a)=>{ae(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),fe={parse:o(async e=>{const a=await re("pie",e);w.debug(a),ue(a,W)},"parse")},he=o(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ve=he,Se=o(e=>{const a=[...e.values()].reduce((r,s)=>r+s,0),y=[...e.entries()].map(([r,s])=>({label:r,value:s})).filter(r=>r.value/a*100>=1).sort((r,s)=>s.value-r.value);return oe().value(r=>r.value)(y)},"createPieArcs"),xe=o((e,a,y,$)=>{w.debug(`rendering pie chart
`+e);const r=$.db,s=J(),T=K(r.getConfig(),s.pie),A=40,l=18,p=4,c=450,m=c,u=Q(a),n=u.append("g");n.attr("transform","translate("+m/2+","+c/2+")");const{themeVariables:i}=s;let[b]=X(i.pieOuterStrokeWidth);b??=2;const E=T.textPosition,d=Math.min(m,c)/2-A,I=G().innerRadius(0).outerRadius(d),L=G().innerRadius(d*E).outerRadius(d*E);n.append("circle").attr("cx",0).attr("cy",0).attr("r",d+b/2).attr("class","pieOuterCircle");const f=r.getSections(),M=Se(f),O=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let h=0;f.forEach(t=>{h+=t});const _=M.filter(t=>(t.data.value/h*100).toFixed(0)!=="0"),v=ie(O);n.selectAll("mySlices").data(_).enter().append("path").attr("d",I).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(_).enter().append("text").text(t=>(t.data.value/h*100).toFixed(0)+"%").attr("transform",t=>"translate("+L.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const k=[...f.entries()].map(([t,x])=>({label:t,value:x})),S=n.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,x)=>{const z=l+p,R=z*k.length/2,N=12*l,B=x*z-R;return"translate("+N+","+B+")"});S.append("rect").attr("width",l).attr("height",l).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),S.append("text").attr("x",l+p).attr("y",l-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const P=Math.max(...S.selectAll("text").nodes().map(t=>t?.getBoundingClientRect().width??0)),F=m+A+l+p+P;u.attr("viewBox",`0 0 ${F} ${c}`),Y(u,c,F,T.useMaxWidth)},"draw"),we={draw:xe},Ne={parser:fe,db:W,renderer:we,styles:ve};export{Ne as diagram};
//# sourceMappingURL=5a3cc129-ejei629b7c7y03ij.js.map
