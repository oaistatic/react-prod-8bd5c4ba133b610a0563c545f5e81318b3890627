import{r as l,j as c,o as T,u as X,l as En,c as $n}from"./2340486e-iyoyluj31h1sa6y8.js";import{bN as Zn,my as Z,z1 as Jn,kz as Xn,o2 as Qn,DS as ne,bD as ee,b0 as Nn,L as xn,E as te,ad as z,au as U,c7 as An,rp as oe,n as ae,cG as yn,cE as Sn,jK as se,aY as ie,c0 as re,c3 as le,c2 as ce,pc as ue,pl as de,ri as fe,D as me,b3 as J,r$ as ge,hV as ve,_ as pe}from"./4813494d-htxz26hq9jzes4ww.js";import{Eq as Pn,os as be,Er as Ln,zk as he,vm as xe,yU as Ae,nW as ye,nF as Se,hM as Ce,tu as we,hL as q,lW as Fe,hP as Me,ga as De,Es as Te,Et as Re,e9 as ke}from"./1a7ebd5f-l5ppx10xc56cf5jj.js";import{u as Q,B as O,G as Ie}from"./4dbd7b28-hmoelqswuazsgj6a.js";const _e=2,Ee=({viewport:e,canvasSize:n,shouldMeasurePerf:t,source:r})=>{const o=l.useRef({}),d=l.useCallback(s=>{const u=s.getExtension("WEBGL_debug_renderer_info");u&&(o.current.vendor=s.getParameter(u.UNMASKED_VENDOR_WEBGL),o.current.renderer=s.getParameter(u.UNMASKED_RENDERER_WEBGL))},[]);return l.useEffect(()=>{const s={vendor:o.current.vendor??"(unavailable)",renderer:o.current.renderer??"(unavailable)",width:e[0],height:e[1],canvasWidth:n[0],canvasHeight:n[1],dpr:window.devicePixelRatio,source:r};!Zn(s,o.current)&&t&&(o.current=s,Pn(_e).then(a=>{Z.bloop.performance({...s,fps:a})}))},[n,t,e,r]),d},Ne=.25,Pe=3,Cn=28,G=55,K=200,wn=1.1,Le=({viewport:e,initialScale:n,shouldCalibrate:t})=>{const[r,o]=l.useState(n),d=l.useRef(void 0),s=l.useRef(void 0),u=l.useRef(void 0),a=l.useRef("down"),f=l.useCallback(()=>{const i=a.current==="up"?Pe:Ne;Pn(i).then(v=>{if(v<Cn){a.current="down";const m=Math.max(v,1),b=Math.sqrt(m/Cn);o(g=>g*b),s.current=window.setTimeout(f,K)}else if(u.current){const m=v>=G,b=v>=u.current*wn;if(m||b)a.current="up",o(g=>g*wn),s.current=window.setTimeout(f,K);else if(v<G){a.current="down";const g=Math.sqrt(v/G);o(x=>x*g)}}u.current=v})},[]);return l.useEffect(()=>{const[i,v]=e,[m,b]=d.current??[];return t&&(m!==i||b!==v)&&(d.current=e,clearTimeout(s.current),o(n),s.current=window.setTimeout(f,K)),()=>{clearTimeout(s.current)}},[t,f,n,e]),r};var ze=Math.max;function Ue(e){if(!(e&&e.length))return[];var n=0;return e=Jn(e,function(t){if(be(t))return n=ze(t.length,n),!0}),Xn(n,function(t){return Qn(e,ne(t))})}var Y=ee(Ue);const nn=240,zn=2048,Un=new Array(nn).fill(0),Be=e=>{const n=Q(e,{bands:nn,updateInterval:O,loPass:0,hiPass:400,analyserOptions:{fftSize:zn}});return n.length===0?Un:n},en=e=>{const{magnitudes:n,binCount:t,gainMultiplier:r}=e;if(n.length===0)return new Array(t).fill(0);const o=Math.ceil(n.length/t),d=[];for(let s=0;s<n.length;s+=o){const u=Math.min(s+o,n.length),a=n.slice(s,u).sort((m,b)=>m-b),f=Math.floor(a.length/2);let i;a.length%2===0?i=(a[f-1]+a[f])/2:i=a[f],i=Math.abs(i),i*=r;const v=i/(i+1);d.push(v)}return d},Bn=(e,n)=>{const t=n.sampleRate,r=e.length,o=n.bandCount,d=n.binCount,s=n.gainMultipliers;if(s.length!==o)throw new Error("gainMultipliers must have length equal to bandCount");const u=r*2,a=t/u,f=e.map((g,x)=>x*a),i=20,v=t/2,m=new Array(o+1).fill(0).map((g,x)=>i*Math.pow(v/i,x/o)),b=new Array(o).fill(null).map(()=>[]);for(let g=0;g<f.length;g+=1)for(let x=0;x<o;x+=1)if(f[g]>=m[x]&&f[g]<m[x+1]){b[x].push(e[g]);break}for(let g=0;g<o;g+=1){const x=b[g],S=s[g];b[g]=en({magnitudes:x,binCount:d,gainMultiplier:S})}return b},Fn=60,On=48e3,Oe=1,Ve=2,je=40,He=2;function Mn({time:e,timeConstant:n}){return 1-Math.exp(-e/n)}function Dn(e,n){const t=n[1]-n[0];return n[0]+e*t}const $=e=>{if(!Array.isArray(e)||e.length!==2||typeof e[0]!="number"||typeof e[1]!="number")throw new Error("zip failed - received a value that is not a [number, number] tuple")},We=e=>{const{prevAudioData:n,prevCumulativeAudioData:t,deltaTimeS:r,audioDataRaw:o}=e,d=o.map(m=>m*r*Fn*Oe),s=Mn({time:r,timeConstant:Ve}),u=Y(n,d).map(m=>($(m),Dn(s,m))),a=o.map(m=>m*r*Fn*je),f=Y(t,a).map(m=>($(m),m[0]+m[1])),i=Mn({time:r,timeConstant:He}),v=Y(t,f).map(m=>($(m),Dn(i,m)));return{audioData:u,cumulativeAudioData:v}},mt=(e,n)=>{const t=Be(e),r=Bn(t,{sampleRate:On,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),o=en({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:r,cumulativeMagnitude:o}},qe="/cdn/assets/noise-watercolor-m3j88gni.webp",Ge={src:qe};let Vn;const B=new window.Image;B.crossOrigin="anonymous";B.src=Ge.src;B.onload=()=>{Vn=B};var Ke=`#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)
#define NUM_OCTAVES (4)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

float triangle(float t, float p) {
  return 2.0 * abs(t / p - floor(t / p + 0.5));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float silkySmooth(float t, float k) {
  return atan(k * sin((t - 0.5) * pi)) / atan(k) * 0.5 + 0.5;
}

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float fixedSpring(float t, float d) {
  float s = mix(
    1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t),
    1.0,
    scaled(0.0, 1.0, t)
  );
  return s * (1.0 - t) + t;
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) *
  (1.0 - t) *
  exp(-2.71828182846 * 2.0 * t) *
  t *
  10.0;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random(ivec2 st) {
  return random(vec2(st));
}

float random(float p) {
  return random(vec2(p));
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float sdArc(vec2 p, vec2 sca, vec2 scb, float ra, float rb) {
  p *= mat2(sca.x, sca.y, -sca.y, sca.x);
  p.x = abs(p.x);
  return scb.y * p.x > scb.x * p.y
    ? length(p - ra * scb) - rb
    : abs(length(p) - ra) - rb;
}

float arc(vec2 st, float startAngle, float length, float radius, float width) {
  return sdArc(
    st,
    vec2(sin(startAngle), cos(startAngle)),
    vec2(sin(length), cos(length)),
    radius,
    width
  );
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, s, -s, c);
  return m * v;
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend) {
  
  return max(base + blend - vec3(1.0), vec3(0.0));
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend, float opacity) {
  return blendLinearBurn_13_5(base, blend) * opacity + base * (1.0 - opacity);
}

vec4 permute(vec4 x) {
  return mod((x * 34.0 + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(vec4(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4(0.0), gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(vec4(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4(0.0), gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
    vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))
  );
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
    vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))
  );
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(
    vec4(n000, n100, n010, n110),
    vec4(n001, n101, n011, n111),
    fade_xyz.z
  );
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

/**
 * End new code for colored orb
 */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isDarkMode /**
 * new bool
 */
) {
  float midRadius = 0.12; 
  float maxRadius = 0.3; 
  float t1 = 1.0; 
  float gamma = 3.0; 
  float omega = pi / 2.0; 

  
  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    
    float t_prime = args.time / t1;
    
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    
    float adjustedTime = args.time - t1;
    
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  
  float distance = length(args.st) - radius;

  
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha);

  
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applyIdleStateLegacy(ColoredSDF sdf, SDFArgs args, bool isDarkMode) {
  float connectedLinearAnimation = scaled(0.0, 2.0, args.duration);
  float connectedAnimation = fixedSpring(connectedLinearAnimation, 0.96);
  float circleSize =
    mix(
      pow(scaled(0.0, 3.0, args.time), 2.0) * 0.75 + 0.1,
      1.0,
      connectedAnimation
    ) *
    0.33;
  vec2 rotatedCoords = rotate(
    args.st,
    -args.time * pi -
      connectedAnimation * pi * 2.0 -
      pi * 2.0 * 5.0 * silkySmooth(scaled(0.0, 5.0, args.time), 2.0)
  );

  float strokeWidth = mix(circleSize / 2.0, circleSize, connectedAnimation);
  float connecting = abs(length(args.st) - circleSize) - strokeWidth;

  float connected = length(args.st) - circleSize;
  float idleDist = mix(connecting, connected, connectedAnimation);

  float d = min(sdf.distance, idleDist);
  sdf.distance = mix(sdf.distance, d, args.amount);
  float angle = atan(rotatedCoords.y, rotatedCoords.x);
  float alpha = mix(
    min(1.0, scaled(-pi, pi, angle)),
    1.0,
    connectedLinearAnimation
  );

  float spinningCircleDist =
    length(
      rotatedCoords -
        vec2(-mix(circleSize, strokeWidth, connectedAnimation), 0.0)
    ) -
    strokeWidth;

  alpha = min(
    1.0,
    max(
      alpha,
      smoothstep(0.005, 0.0, spinningCircleDist) + connectedAnimation * 4.0
    )
  );

  sdf.color = mix(
    sdf.color,
    vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha),
    args.amount
  );
  return sdf;
}

ColoredSDF applyListenState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  float listenTimestamp, /* new */
  float touchDownTimestamp, /* new */
  float touchUpTimestamp, /* new */
  bool fadeBloopWhileListening /* new */
) {
  float breathingSequence = sin(args.time) * 0.5 + 0.5;
  float entryAnimation = fixedSpring(scaled(0.0, 3.0, args.duration), 0.9);

  float touch =
    fixedSpring(scaled(0.0, 1.0, args.time - touchDownTimestamp), 0.99) -
    fixedSpring(scaled(0.0, 0.8, args.time - touchUpTimestamp), 1.0);

  float listenAnimation = clamp(
    spring(scaled(0.0, 0.9, args.duration), 1.0),
    0.0,
    1.0
  );
  float radius = 0.0;
  float smoothlevel = micLevel;
  float l1 = smoothlevel;
  radius = 0.38 + l1 * 0.05 + breathingSequence * 0.03;
  radius *= 1.0 - (1.0 - entryAnimation) * 0.25;

  float ring = 10000.0;

  
  if (touch > 0.0) {
    touch = min(touch, listenAnimation); 
    float arcWidth = radius * 0.1;

    
    radius -= touch * arcWidth * 2.3;
    
    radius = min(
      radius,
      mix(radius, args.mainRadius - arcWidth * 2.3 - l1 * 0.01, touch)
    );

    float startAngle = 0.0;
    float arcLengthTouch =
      smoothstep(0.04, 1.0, touch) * pi * (1.0 - arcWidth / 3.0 / radius);

    float arcLength = 0.0;
    float radiusTouch =
      radius * fixedSpring(scaled(0.0, 1.0, args.duration), 1.0) * args.amount +
      l1 * 0.01;

    radiusTouch +=
      arcWidth * 1.3 * mix(-1.0, 1.0, smoothstep(0.0, 0.12, touch));

    float ringRadius = 0.0;
    arcLength = arcLengthTouch;
    ringRadius = radiusTouch;
    startAngle = pi / 2.0 - (args.time - touchDownTimestamp) / 2.0;

    ring = arc(args.st, startAngle, arcLength, ringRadius, arcWidth); 
  }

  float d = length(args.st) - radius;

  d = min(d, ring);

  sdf.distance = mix(sdf.distance, d, args.amount);

  if (fadeBloopWhileListening) {
    
    sdf.color.a = mix(
      sdf.color.a,
      mix(1.0, 1.0 - l1 * 0.6, listenAnimation),
      args.amount
    );
  } else {
    sdf.color.a = 1.0;
  }

  return sdf;
}

ColoredSDF applyThinkState(ColoredSDF sdf, SDFArgs args) {
  float d = 1000.0; 
  int count = 5; 
  float entryAnimation = spring(scaled(0.0, 1.0, args.duration), 1.0);

  float thinkingDotEntryAnimation = spring(
    scaled(0.1, 1.1, args.duration),
    1.0
  );
  float thinkingDotRadius =
    mix(0.2, 0.06, thinkingDotEntryAnimation) * args.amount;

  
  args.st.x -= thinkingDotRadius * 0.5 * thinkingDotEntryAnimation;

  for (int i = 0; i < count; i++) {
    float f = float(float(i) + 0.5) / float(count); 
    float a =
      -f * pi * 2.0 +
      args.time / 3.0 +
      spring(scaled(0.0, 10.0, args.duration), 1.0) * pi / 2.0;
    float ringRadi = args.mainRadius * 0.45 * entryAnimation;

    
    ringRadi -=
      (sin(
        entryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 3.0 -
          silkySmooth(args.time / 4.0, 2.0) * pi * 1.0
      ) *
        0.5 +
        0.5) *
      args.mainRadius *
      0.1;

    vec2 pos = vec2(cos(a), sin(a)) * ringRadi;
    float dd = length(args.st - pos) - args.mainRadius * 0.5;

    
    d = opSmoothUnion(
      d,
      dd,
      0.03 * scaled(0.0, 10.0, args.duration) + 0.8 * (1.0 - entryAnimation)
    );

    
    float dotAngle = f * pi * 2.0;
    float dotRingRadius =
      (sin(
        thinkingDotEntryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 0.1 * pi * 4.0
      ) *
        0.5 +
        0.5) *
      thinkingDotRadius *
      0.3;
    vec2 dotPos =
      vec2(-args.mainRadius, args.mainRadius) * 0.8 * thinkingDotEntryAnimation;
    vec2 dotOffset =
      vec2(cos(dotAngle + args.time), sin(dotAngle + args.time)) *
      dotRingRadius;
    float dotD = length(args.st - dotPos - dotOffset) - thinkingDotRadius * 0.8;
    d = opSmoothUnion(
      d,
      dotD,
      (1.0 - min(thinkingDotEntryAnimation, args.amount)) * thinkingDotRadius
    );
  }
  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  int barCount = 4;
  for (int i = 0; i < barCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.44;
    float h = w;

    
    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0); 
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));

  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applyListenAndSpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  vec4 avgMag,
  vec4 cumulativeAudio,
  int binCount,
  vec3 bloopColorMain,
  vec3 bloopColorLow,
  vec3 bloopColorMid,
  vec3 bloopColorHigh,
  sampler2D uTextureNoise,
  bool listening,
  bool isAdvancedBloop
) {
  float entryAnimation = fixedSpring(scaled(0.0, 2.0, args.duration), 0.92);

  
  
  float radius =
    (listening ? 0.37 : 0.43) * (1.0 - (1.0 - entryAnimation) * 0.25) +
    micLevel * 0.065;

  
  
  
  float maxDisplacement = 0.01;

  
  float oscillationPeriod = 4.0;
  
  float displacementOffset =
    maxDisplacement * sin(2.0 * pi / oscillationPeriod * args.time);
  
  vec2 adjusted_st = args.st - vec2(0.0, displacementOffset);

  
  if (!isAdvancedBloop) {
    sdf.color = mix(sdf.color, vec4(bloopColorMain, 1.0), args.amount);
    sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);
    return sdf;
  }

  
  
  vec4 uAudioAverage = avgMag;
  vec4 uCumulativeAudio = cumulativeAudio;

  
  float scaleFactor = 1.0 / (2.0 * radius);
  vec2 uv = adjusted_st * scaleFactor + 0.5;
  uv.y = 1.0 - uv.y;

  
  float noiseScale = 1.25; 
  float windSpeed = 0.075; 
  float warpPower = 0.19; 
  float waterColorNoiseScale = 18.0; 
  float waterColorNoiseStrength = 0.01; 
  float textureNoiseScale = 1.0; 
  float textureNoiseStrength = 0.08; 
  float verticalOffset = 0.09; 
  float waveSpread = 1.0; 
  float layer1Amplitude = 1.0; 
  float layer1Frequency = 1.0; 
  float layer2Amplitude = 1.0; 
  float layer2Frequency = 1.0; 
  float layer3Amplitude = 1.0; 
  float layer3Frequency = 1.0; 
  float fbmStrength = 1.0; 
  float fbmPowerDamping = 0.55; 
  float overallSoundScale = 1.0; 
  float blurRadius = 1.0;
  float timescale = 1.0;

  
  float time = args.time * timescale * 0.85;

  vec3 sinOffsets = vec3(
    uCumulativeAudio.x * 0.15 * overallSoundScale,
    -uCumulativeAudio.y * 0.5 * overallSoundScale,
    uCumulativeAudio.z * 1.5 * overallSoundScale
  );
  verticalOffset += 1.0 - waveSpread;

  
  float noiseX = cnoise(
    vec3(
      uv * 1.0 + vec2(0.0, 74.8572),
      (time + uCumulativeAudio.x * 0.05 * overallSoundScale) * 0.3
    )
  );
  float noiseY = cnoise(
    vec3(
      uv * 1.0 + vec2(203.91282, 10.0),
      (time + uCumulativeAudio.z * 0.05 * overallSoundScale) * 0.3
    )
  );

  uv += vec2(noiseX * 2.0, noiseY) * warpPower;

  
  float noiseA =
    cnoise(vec3(uv * waterColorNoiseScale + vec2(344.91282, 0.0), time * 0.3)) +
    cnoise(
      vec3(uv * waterColorNoiseScale * 2.2 + vec2(723.937, 0.0), time * 0.4)
    ) *
      0.5;
  uv += noiseA * waterColorNoiseStrength;
  uv.y -= verticalOffset;

  
  vec2 textureUv = uv * textureNoiseScale;
  float textureSampleR0 = texture(uTextureNoise, textureUv).r;
  float textureSampleG0 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp0 =
    mix(
      textureSampleR0 - 0.5,
      textureSampleG0 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(63.861 + uCumulativeAudio.x * 0.05, 368.937);
  float textureSampleR1 = texture(uTextureNoise, textureUv).r;
  float textureSampleG1 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp1 =
    mix(
      textureSampleR1 - 0.5,
      textureSampleG1 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(272.861, 829.937 + uCumulativeAudio.y * 0.1);
  textureUv += vec2(180.302 - uCumulativeAudio.z * 0.1, 819.871);
  float textureSampleR3 = texture(uTextureNoise, textureUv).r;
  float textureSampleG3 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp3 =
    mix(
      textureSampleR3 - 0.5,
      textureSampleG3 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  uv += textureNoiseDisp0;

  
  vec2 st = uv * noiseScale;

  vec2 q = vec2(0.0);
  q.x = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.a * 0.175 * overallSoundScale)
  );
  q.y = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.x * 0.136 * overallSoundScale)
  );

  vec2 r = vec2(0.0);
  r.x = fbm(
    st +
      1.0 * q +
      vec2(0.3, 9.2) +
      0.15 * (time + uCumulativeAudio.y * 0.234 * overallSoundScale)
  );
  r.y = fbm(
    st +
      1.0 * q +
      vec2(8.3, 0.8) +
      0.126 * (time + uCumulativeAudio.z * 0.165 * overallSoundScale)
  );

  float f = fbm(st + r - q);
  float fullFbm = (f + 0.6 * f * f + 0.7 * f + 0.5) * 0.5;
  fullFbm = pow(fullFbm, fbmPowerDamping);
  fullFbm *= fbmStrength;

  
  blurRadius = blurRadius * 1.5;
  vec2 snUv =
    (uv + vec2((fullFbm - 0.5) * 1.2) + vec2(0.0, 0.025) + textureNoiseDisp0) *
    vec2(layer1Frequency, 1.0);
  float sn =
    noise(
      snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)
    ) *
    2.0 *
    layer1Amplitude;
  float sn2 = smoothstep(
    sn - 1.2 * blurRadius,
    sn + 1.2 * blurRadius,
    (snUv.y - 0.5 * waveSpread) *
      (5.0 - uAudioAverage.x * 0.1 * overallSoundScale * 0.5) +
      0.5
  );

  vec2 snUvBis =
    (uv + vec2((fullFbm - 0.5) * 0.85) + vec2(0.0, 0.025) + textureNoiseDisp1) *
    vec2(layer2Frequency, 1.0);
  float snBis =
    noise(
      snUvBis * 4.0 +
        vec2(
          sin(sinOffsets.y * 0.15) * 2.4 + 293.0,
          time * 1.0 + sinOffsets.y * 0.5
        )
    ) *
    2.0 *
    layer2Amplitude;
  float sn2Bis = smoothstep(
    snBis - (0.9 + uAudioAverage.y * 0.4 * overallSoundScale) * blurRadius,
    snBis + (0.9 + uAudioAverage.y * 0.8 * overallSoundScale) * blurRadius,
    (snUvBis.y - 0.6 * waveSpread) * (5.0 - uAudioAverage.y * 0.75) + 0.5
  );

  vec2 snUvThird =
    (uv + vec2((fullFbm - 0.5) * 1.1) + textureNoiseDisp3) *
    vec2(layer3Frequency, 1.0);
  float snThird =
    noise(
      snUvThird * 6.0 +
        vec2(
          sin(sinOffsets.z * 0.1) * 2.4 + 153.0,
          time * 1.2 + sinOffsets.z * 0.8
        )
    ) *
    2.0 *
    layer3Amplitude;
  float sn2Third = smoothstep(
    snThird - 0.7 * blurRadius,
    snThird + 0.7 * blurRadius,
    (snUvThird.y - 0.9 * waveSpread) * 6.0 + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  
  vec3 sinColor;
  sinColor = blendLinearBurn_13_5(bloopColorMain, bloopColorLow, 1.0 - sn2);
  sinColor = blendLinearBurn_13_5(
    sinColor,
    mix(bloopColorMain, bloopColorMid, 1.0 - sn2Bis),
    sn2
  );
  sinColor = mix(
    sinColor,
    mix(bloopColorMain, bloopColorHigh, 1.0 - sn2Third),
    sn2 * sn2Bis
  );

  
  sdf.color = mix(sdf.color, vec4(sinColor, 1), args.amount);

  
  sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);

  return sdf;
}

float micSdf(vec2 st, float muted) {
  float d = 100.0;
  float strokeWidth = 0.03;
  vec2 elementSize = vec2(0.12, 0.26);
  vec2 elementPos = vec2(0.0, elementSize.y * 0.585);
  float element = sdRoundedBox(
    st - elementPos,
    elementSize,
    vec4(min(elementSize.x, elementSize.y))
  );
  element = element - strokeWidth;
  d = min(d, element);

  vec2 standSize = elementSize * 2.2;
  vec2 standPos = vec2(elementPos.x, elementPos.y - 0.05);
  st.y += 0.08;
  float ta = -pi / 2.0; 
  float tb = pi / 2.0; 
  float w = 0.0;
  float stand = sdArc(
    st - standPos,
    vec2(sin(ta), cos(ta)),
    vec2(sin(tb), cos(tb)),
    standSize.x,
    w
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(standSize.x, 0.06), vec2(standSize.x, 0.0))
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(-standSize.x, 0.06), vec2(-standSize.x, 0.0))
  );

  float foot = sdSegment(
    st - standPos,
    vec2(0.0, -standSize.x),
    vec2(0.0, -standSize.x * 1.66)
  );
  foot = min(
    foot,
    sdSegment(
      st - standPos,
      vec2(-standSize.x * 0.68, -standSize.x * 1.66),
      vec2(standSize.x * 0.68, -standSize.x * 1.66)
    )
  );
  stand = min(stand, foot);

  d = min(d, abs(stand) - strokeWidth);

  return d;
}

ColoredSDF applyBottomAlignedBarsAndMicState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float micLevel,
  bool isDarkMode
) {
  float d = 1000.0;
  int barCount = 5;
  int loopCount = barCount;
  if (args.amount == 0.0) {
    loopCount = 1; 
  }
  for (int i = 0; i < loopCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.42;
    float h = w;

    
    float entryDuration = 1.8;
    float entryAnimation =
      fixedSpring(scaled(0.0, entryDuration, args.duration), 0.94) *
      args.amount;
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.x *= entryAnimation;

    if (i == 0) {
      float micScale = mix(6.0 - micLevel * 2.0, 6.0, args.amount);
      float yOffset = w * 2.0;
      d =
        micSdf(
          (args.st - pos + vec2(-w * 0.15 * args.amount, yOffset)) * micScale,
          1.0 - args.amount
        ) /
        micScale;
    } else {
      
      h += avgMag[i - 1] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1) * 0.7;
      h = mix(w, h, smoothstep(0.8, 1.0, entryAnimation));

      float bubbleInDur = 0.5;
      float bubbleOutDur = 0.4;

      
      float bubbleEffect =
        fixedSpring(
          scaled(
            f / 4.0,
            f / 4.0 + bubbleInDur,
            args.duration - entryDuration / 8.0
          ),
          1.0
        ) *
        pow(
          1.0 -
            scaled(
              f / 8.0 + bubbleInDur / 8.0,
              f / 4.0 + bubbleInDur / 8.0 + bubbleOutDur,
              args.duration - entryDuration / 8.0
            ),
          2.0
        );

      h += bubbleEffect * min(h, w);

      
      w *= args.amount;
      h *= args.amount;

      h = min(h, 0.23); 

      pos.y -= 0.25;
      pos.y += h;
      pos.y += bubbleEffect * w * 0.5;

      float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
      d = min(d, dd);
    }
  }

  sdf.distance = d; 
  sdf.color = mix(
    sdf.color,
    isDarkMode
      ? vec4(1.0)
      : vec4(0.0, 0.0, 0.0, 1.0),
    args.amount
  );
  return sdf;
}

ColoredSDF applyHaltState(ColoredSDF sdf, SDFArgs args) {
  
  float radius = mix(
    0.4,
    mix(0.4, 0.45, args.amount),
    sin(args.time * 0.25) * 0.5 + 0.5
  );
  float strokeWidth = mix(radius / 2.0, 0.02, args.amount);

  
  radius -= strokeWidth;

  radius *= mix(0.7, 1.0, args.amount);
  float circle = abs(length(args.st) - radius) - strokeWidth;

  sdf.distance = mix(sdf.distance, circle, args.amount);
  sdf.color.a = mix(sdf.color.a, pow(0.8, 2.2), scaled(0.5, 1.0, args.amount));
  return sdf;
}

vec3 blendNormal(vec3 base, vec3 blend) {
  return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
  return blendNormal(base, blend) * opacity + base * (1.0 - opacity);
}

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float micLevel;
  float touchDownTimestamp;
  float touchUpTimestamp;
  float stateListen;
  float listenTimestamp;
  float stateThink;
  float thinkTimestamp;
  float stateSpeak;
  float speakTimestamp;
  float readyTimestamp;
  float stateHalt;
  float haltTimestamp;
  float stateFailedToConnect;
  float failedToConnectTimestamp;
  vec4 avgMag;
  vec4 cumulativeAudio;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isDarkMode;
  bool fadeBloopWhileListening;
  bool isNewBloop;
  bool isAdvancedBloop;
  vec3 bloopColorMain;
  vec3 bloopColorLow;
  vec3 bloopColorMid;
  vec3 bloopColorHigh;
} ubo; 

uniform sampler2D uTextureNoise; 

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;

  SDFArgs idleArgs = args;
  SDFArgs listenArgs = args;
  SDFArgs thinkArgs = args;
  SDFArgs speakArgs = args;
  SDFArgs haltArgs = args;
  SDFArgs failedToConnectArgs = args;

  idleArgs.amount = 1.0;
  listenArgs.amount = ubo.stateListen;
  thinkArgs.amount = ubo.stateThink;
  speakArgs.amount = ubo.stateSpeak;
  haltArgs.amount = ubo.stateHalt;
  failedToConnectArgs.amount = ubo.stateFailedToConnect;

  idleArgs.duration = ubo.time - ubo.readyTimestamp;
  listenArgs.duration = ubo.time - ubo.listenTimestamp;
  thinkArgs.duration = ubo.time - ubo.thinkTimestamp;
  speakArgs.duration = ubo.time - ubo.speakTimestamp;
  haltArgs.duration = ubo.time - ubo.haltTimestamp;
  failedToConnectArgs.duration = ubo.time - ubo.failedToConnectTimestamp;

  if (ubo.isNewBloop) {
    sdf = applyIdleState(sdf, idleArgs, ubo.isDarkMode);
  } else {
    sdf = applyIdleStateLegacy(sdf, idleArgs, ubo.isDarkMode);
  }

  if (failedToConnectArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, failedToConnectArgs);
  }

  if (listenArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      if (speakArgs.amount > 0.0) {
        listenArgs.amount = 1.0;
      }

      
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        true,
        ubo.isAdvancedBloop
      );
    } else {
      sdf = applyListenState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.listenTimestamp,
        ubo.touchDownTimestamp,
        ubo.touchUpTimestamp,
        ubo.fadeBloopWhileListening
      );
    }
  }

  if (thinkArgs.amount > 0.0) {
    sdf = applyThinkState(sdf, thinkArgs);
  }

  if (speakArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        speakArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        false,
        ubo.isAdvancedBloop
      );
    } else {
      float silenceDuration = ubo.time - ubo.silenceTimestamp;
      sdf = applySpeakState(
        sdf,
        speakArgs,
        ubo.avgMag,
        ubo.silenceAmount,
        silenceDuration
      );
    }
  }

  if (haltArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, haltArgs);
  }

  float clampingTolerance = 0.0075 / ubo.screenScaleFactor;
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  if (!ubo.isNewBloop) {
    alpha *= scaled(0.0, 1.0, ubo.time);
  }
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`,Ye=`#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`;class tn{#o;#i;#n;#a=[];#s={};#e;#t;static#r="BlorbUniformsObject";constructor(n,t){this.#n=n;const r=n.getUniformBlockIndex(t,tn.#r),o=n.getActiveUniformBlockParameter(t,r,n.UNIFORM_BLOCK_DATA_SIZE);this.#e=n.createBuffer(),n.bindBuffer(n.UNIFORM_BUFFER,this.#e),n.bufferData(n.UNIFORM_BUFFER,o,n.DYNAMIC_DRAW);const d=0;n.bindBufferBase(n.UNIFORM_BUFFER,d,this.#e),n.uniformBlockBinding(t,r,d);const s=n.getActiveUniformBlockParameter(t,r,n.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);this.#a=[],this.#s={};for(let u=0;u<s.length;u++){const a=s[u],f=n.getActiveUniform(t,a);if(!f)throw new Error("No uniformInfo for index "+a);let i=f.name;i=i.replace(/\[0\]$/,"");const v=n.getActiveUniforms(t,[a],n.UNIFORM_OFFSET)[0];this.#a.push(i),this.#s[i]=v}this.#t=new ArrayBuffer(o),this.#o=new Float32Array(this.#t),this.#i=new Int32Array(this.#t)}setVariablesAndRender(n){for(const t of this.#a){const[,r]=t.split("."),d=this.#s[t]/4,s=n[r];typeof s=="number"?this.#o[d]=s:typeof s=="boolean"?this.#i[d]=s?1:0:Array.isArray(s)&&this.#o.set(s,d)}this.#n.bindBuffer(this.#n.UNIFORM_BUFFER,this.#e),this.#n.bufferSubData(this.#n.UNIFORM_BUFFER,0,this.#t),this.#n.drawArrays(this.#n.TRIANGLE_STRIP,0,6)}}function p(e){const n=e.replace("#",""),t=parseInt(n.substring(0,2),16)/255,r=parseInt(n.substring(2,4),16)/255,o=parseInt(n.substring(4,6),16)/255;return new Float32Array([t,r,o])}const P={BLUE:{bloopColorMain:p("#DCF7FF"),bloopColorLow:p("#0181FE"),bloopColorMid:p("#A4EFFF"),bloopColorHigh:p("#FFFDEF")},DARK_BLUE:{bloopColorMain:p("#DAF5FF"),bloopColorLow:p("#0066CC"),bloopColorMid:p("#2EC6F5"),bloopColorHigh:p("#72EAF5")},GREYSCALE:{bloopColorMain:p("#D7D7D7"),bloopColorLow:p("#303030"),bloopColorMid:p("#989898"),bloopColorHigh:p("#FFFFFF")},WHITE:{bloopColorMain:p("#FFFFFF"),bloopColorLow:p("#FFFFFF"),bloopColorMid:p("#FFFFFF"),bloopColorHigh:p("#FFFFFF")},BLACK:{bloopColorMain:p("#000000"),bloopColorLow:p("#000000"),bloopColorMid:p("#000000"),bloopColorHigh:p("#000000")},ANGSTY_BLACK:{bloopColorMain:p("#494949"),bloopColorLow:p("#000000"),bloopColorMid:p("#7F7F7F"),bloopColorHigh:p("#696969")},HELLO_TIBOR:{bloopColorMain:p("#FFE987"),bloopColorLow:p("#E58B28"),bloopColorMid:p("#FB7256"),bloopColorHigh:p("#F3FDFE")}},$e=({isAdvanced:e,overrideColor:n})=>{const t=Nn();return n&&P[n]?P[n]:e?P.BLUE:t?P.WHITE:P.BLACK},Ze=()=>Ln().some(n=>n.voice==="shade"),Tn=te.JumpToShade,Je=()=>{const e=xn.getItem(Tn)==="true",n=l.useCallback(()=>{xn.setItem(Tn,"true")},[]);return{alreadyTriggered:e,setAlreadyTriggered:n}};function Xe(){let e=null,n,t=0;const r=350;let o;const d=(u,a,f)=>u+(a-u)*f,s=(u,a)=>{if(u.length!==a.length)return!1;for(let f=0;f<u.length;f++)if(u[f]!==a[f])return!1;return!0};return function(a){const f=performance.now();if(!e)return n={bloopColorMain:new Float32Array(a.bloopColorMain),bloopColorLow:new Float32Array(a.bloopColorLow),bloopColorMid:new Float32Array(a.bloopColorMid),bloopColorHigh:new Float32Array(a.bloopColorHigh)},e={bloopColorMain:new Float32Array(a.bloopColorMain),bloopColorLow:new Float32Array(a.bloopColorLow),bloopColorMid:new Float32Array(a.bloopColorMid),bloopColorHigh:new Float32Array(a.bloopColorHigh)},t=f,o=n,o;let i=!1;const v=["bloopColorMain","bloopColorLow","bloopColorMid","bloopColorHigh"];for(const g of v)if(!s(a[g],e[g])){i=!0;break}i&&(n={bloopColorMain:new Float32Array(o.bloopColorMain),bloopColorLow:new Float32Array(o.bloopColorLow),bloopColorMid:new Float32Array(o.bloopColorMid),bloopColorHigh:new Float32Array(o.bloopColorHigh)},t=f,e={bloopColorMain:new Float32Array(a.bloopColorMain),bloopColorLow:new Float32Array(a.bloopColorLow),bloopColorMid:new Float32Array(a.bloopColorMid),bloopColorHigh:new Float32Array(a.bloopColorHigh)});let m=(f-t)/r;m>1&&(m=1);const b={bloopColorMain:new Float32Array(n.bloopColorMain.length),bloopColorLow:new Float32Array(n.bloopColorLow.length),bloopColorMid:new Float32Array(n.bloopColorMid.length),bloopColorHigh:new Float32Array(n.bloopColorHigh.length)};for(const g of v){const x=n[g].length;for(let S=0;S<x;S++){const w=n[g][S],F=a[g][S];b[g][S]=d(w,F,m)}}return o=b,b}}const Rn=[300,300],Qe={bands:4,loPass:0,hiPass:400},nt=e=>{const n=Q(e,{bands:nn,updateInterval:O,loPass:0,hiPass:400,analyserOptions:{fftSize:zn}});return n.length===0?Un:n},et=(e,n)=>{const t=nt(e),r=Bn(t,{sampleRate:On,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),o=en({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:r,cumulativeMagnitude:o}},tt=e=>{const[n,t]=l.useState({audioData:[0,0,0,0],cumulativeAudioData:[0,0,0,0]}),r=l.useRef([0,0,0,0]),o=l.useRef(void 0),d=l.useRef(performance.now()),{bandMagnitudes:s,cumulativeMagnitude:u}=et(e,{bands:3,bins:1,gainMultipliers:[10,1,1]});r.current=[...s,u].flat();const a=l.useCallback(()=>{const f=performance.now(),i=(f-d.current)/1e3;d.current=f;const v=r.current,{audioData:m,cumulativeAudioData:b}=n,g=We({deltaTimeS:i,audioDataRaw:v,prevAudioData:m,prevCumulativeAudioData:b});t(g)},[n]);return l.useEffect(()=>(o.current||(o.current=window.setInterval(a,O)),()=>{clearInterval(o.current),o.current=void 0}),[a]),n},kn=Promise.resolve();function jn({url:e,readyToPlay:n}){const t=l.useRef(void 0),r=l.useRef(kn);return l.useEffect(()=>(t.current||(t.current=document.createElement("audio")),()=>{r.current.then(()=>{t.current&&(t.current.pause(),t.current.removeAttribute("src"),t.current.remove(),r.current=kn)})}),[]),l.useEffect(()=>{e&&t.current&&t.current.src!==e&&n&&r.current.then(()=>{t.current&&(t.current.crossOrigin="anonymous",t.current.src=e,r.current=t.current.play())})},[n,e]),t.current}function ot({className:e,url:n}){const[t,r]=l.useState(!1),o=jn({url:n,readyToPlay:t}),d=Q(o,Qe),s=l.useMemo(()=>[0,0,0,0],[]);return c.jsx(Hn,{className:e,isAdvanced:!1,avgMag:d,cumulativeAudioData:s,onRenderComplete:()=>r(!0)})}function at({className:e,url:n,overrideColor:t}){const[r,o]=l.useState(!1),d=jn({url:n,readyToPlay:r}),s=tt(d),{audioData:u,cumulativeAudioData:a}=s;return c.jsx(Hn,{className:e,isAdvanced:!0,overrideColor:t,avgMag:u,cumulativeAudioData:a,onRenderComplete:()=>o(!0)})}const Hn=({className:e,avgMag:n,cumulativeAudioData:t,isAdvanced:r,overrideColor:o,onRenderComplete:d})=>{const s=Nn(),u=l.useMemo(()=>performance.now()/1e3,[]),a=l.useMemo(()=>performance.now()/1e3,[]),f=l.useRef(void 0),i=l.useRef(Xe()),[v,m]=l.useState(Rn),{canvasSizeRef:b,handleCanvasSizeUpdate:g}=he(Rn),x=l.useCallback(D=>{m([D.width,D.height])},[]),[S,w]=l.useState(performance.now()/1e3);l.useEffect(()=>{const D=setInterval(()=>{w(performance.now()/1e3)},O);return()=>clearInterval(D)},[]);const F=$e({isAdvanced:r,overrideColor:o}),R=i.current(F),h=Ee({viewport:v,canvasSize:b.current,shouldMeasurePerf:!0,source:"VoicePicker"}),M=Le({shouldCalibrate:!0,viewport:v,initialScale:1});return f.current={time:S,micLevel:0,stateListen:0,listenTimestamp:0,stateThink:0,thinkTimestamp:0,stateSpeak:1,speakTimestamp:a,readyTimestamp:u,stateHalt:0,haltTimestamp:0,touchDownTimestamp:0,touchUpTimestamp:0,stateFailedToConnect:0,failedToConnectTimestamp:0,avgMag:n,cumulativeAudio:t,isNewBloop:!0,isAdvancedBloop:r,bloopColorMain:Array.from(R.bloopColorMain),bloopColorLow:Array.from(R.bloopColorLow),bloopColorMid:Array.from(R.bloopColorMid),bloopColorHigh:Array.from(R.bloopColorHigh),isDarkMode:s,screenScaleFactor:window.devicePixelRatio,viewport:v,silenceAmount:0,silenceTimestamp:0,fadeBloopWhileListening:!1},c.jsx(Ie,{className:z("flex items-center justify-center",e),variablesRef:f,onViewportUpdate:x,onRenderComplete:d,textureImage:Vn,textureName:"uTextureNoise",onGlAvailable:h,onCanvasSizeUpdate:g,scale:M,GLUniformsSetter:tn,vert:Ye,frag:Ke})};function st({isUnauthenticated:e,loading:n,handleLoginClick:t,handleCancelClick:r,handleConfirmClick:o,selectedVoice:d,currentVoiceName:s,cameFromNux:u}){const a="w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold";return e?c.jsxs(c.Fragment,{children:[c.jsx(U,{className:a,onClick:t,children:n?c.jsx(An,{}):c.jsx(T,{id:"IRALWH",defaultMessage:"Log in"})}),c.jsx(U,{className:z(a,"text-black dark:text-white"),color:"ghost",onClick:r,children:c.jsx(T,{id:"8fumUc",defaultMessage:"Back to chat"})})]}):c.jsxs(c.Fragment,{children:[c.jsx(U,{className:z(a),onClick:o,children:n?c.jsx(An,{}):d?.voice===s&&!u?c.jsx(T,{id:"MyKAgb",defaultMessage:"Done"}):c.jsx(T,{id:"7+3LaJ",defaultMessage:"Start new chat"})}),c.jsx(U,{className:z(a,"text-black dark:text-white"),color:"ghost",onClick:r,children:c.jsx(T,{id:"dUn4Wd",defaultMessage:"Cancel"})})]})}const In={offscreenLeft:{x:"-24rem",opacity:0},left:{x:"-12rem",opacity:.5},center:{x:"0",opacity:1},right:{x:"12rem",opacity:.5},offscreenRight:{x:"24rem",opacity:0}};function it({conversationId:e,onClose:n,cameFromNux:t=!1,initialVoiceName:r}){const o=X(),d=oe(),s=!ae(),{voiceName:u}=xe(),a=Ae(),f=ye(),i=Ln(),[v,m]=l.useState(!1),b=yn.getGizmoId(Sn(e)),[g,x]=l.useState(!1),[S,w]=l.useState(!1);l.useEffect(()=>{requestAnimationFrame(()=>x(!0))},[]);const[F,R]=l.useState(!1),[h,M]=l.useState(null);l.useEffect(()=>{if(i.length>0){const A=i.findIndex(C=>C.voice===(r||u));A>=0?M(A):M(2),R(!0)}},[i,u,r]);const D=h!=null?(h-2+i.length)%i.length:0,k=h!=null?(h-1+i.length)%i.length:1,I=h!=null?(h+1)%i.length:3,on=h!=null?(h+2)%i.length:4,y=i[h??0],an=i[D],sn=i[k],rn=i[I],ln=i[on],_=Ze(),{alreadyTriggered:cn,setAlreadyTriggered:V}=Je();l.useEffect(()=>{if(_&&!cn){const A=i.findIndex(C=>C.voice==="shade");A!==-1&&(M(A),V())}return()=>{_&&V()}},[_,cn,i,M,V]);const Wn=l.useMemo(()=>{if(_&&y?.voice==="shade")return"ANGSTY_BLACK"},[y?.voice,_]),j=l.useRef(!1),E=A=>{j.current=!0,M(A)};l.useEffect(()=>{y==null||!j.current||(j.current=!1,se(o.formatMessage(rt.selectedVoiceAnnouncement,{name:y.name,description:y.description}),{id:"voice-picker-selection",interrupt:"pending",priority:"normal"}))},[o,y]);const{stopVoiceMode:un,startVoiceMode:dn}=Se({requestMicPermissions:t}),{setValue:fn}=Ce(ie.VoiceName),qn=we(A=>A.voiceMode),H=t&&!b?"advanced":qn,Gn=l.useCallback(()=>{w(!t),f(()=>{const A=h!=null?i[h]?.voice:i[0]?.voice;sessionStorage.setItem("selectedVoiceName",A),re({fallbackScreenHint:"login",callback:C=>{le({provider:C,location:"Voice Picker Page"},ce.ACCESS_FLOW_ENTRY_POINT_VOICE_PICKER_PAGE)},skipLoginModal:!1})},q)},[t,f,h,i]),Kn=l.useCallback(async()=>{w(!t),f(async()=>{m(!0);const A=h!=null?i[h]?.voice:i[0]?.voice;if(t||A!==u){t||Z.voiceSelected.click({action:"changed",voice:A}),fn(A),await un(),Fe("/");try{Me(ue.ModalVoicePicker),t?d?(De({type:"START"}),Te(),de({showVoiceNuxFullPage:!1})):a.setState(C=>{C.isVoiceModeActive=!0}):await dn({conversation_id:void 0,eventSource:"voice_picker",voice_mode:H,voice:A,clientThreadId:fe(),gizmo_id:yn.getGizmoId(Sn(e)),skipCacheReason:"user-switched-voice"})}catch(C){me.addError(`Failed to start voice mode after voice picker: ${C}`,{protocol:"transceiver"})}}else Z.voiceSelected.click({action:"kept",voice:u});m(!1),n()},q)},[t,h,i,u,n,fn,un,d,a,dn,H,e,f]),Yn=()=>{w(!0),f(n,q)};Re({setSelectedVoiceIndex:E,prevVoiceIndex:k,nextVoiceIndex:I});const[mn,gn]=l.useState(!1),N=l.useRef(null),vn=l.useId(),W=l.useRef(null),pn=l.useRef(!1);l.useEffect(()=>{!F||h==null||pn.current||W.current==null||(pn.current=!0,W.current.focus())},[F,h]),l.useEffect(()=>()=>{N.current!=null&&clearTimeout(N.current)},[]);const bn=A=>{A==="prev"?E(k):A==="next"&&E(I),gn(!0),N.current!=null&&clearTimeout(N.current),N.current=setTimeout(()=>{gn(!1)},175)},hn=l.useMemo(()=>({className:"h-max min-h-bloop w-max min-w-bloop",url:y?.preview_url}),[y?.preview_url]);return!F||h==null?c.jsx("div",{className:"bg-token-main-surface-primary fixed start-0 top-0 z-50 flex h-full w-full"}):c.jsxs("div",{className:`fixed start-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-800 ${g&&!S?"opacity-100":"opacity-0"}`,children:[c.jsx("h1",{id:vn,className:"mt-36 mb-8 text-3xl font-semibold",children:s?c.jsx(T,{id:"P4GR/e",defaultMessage:"Try voice mode for free"}):c.jsx(T,{id:"2whyE9",defaultMessage:"Choose a voice"})}),c.jsx("div",{className:"flex h-full w-full items-center justify-center",children:y?t&&!b||H==="advanced"?c.jsx(at,{...hn,overrideColor:Wn}):c.jsx(ot,{...hn}):null}),c.jsx("div",{className:"mb-8 flex items-center justify-between text-center",children:c.jsxs("div",{className:"relative flex h-24 w-48",role:"radiogroup","aria-labelledby":vn,children:[c.jsx(L,{voice:an,variant:"offscreenLeft",voiceIndex:D,voiceCount:i.length},an?.name),c.jsx(L,{voice:sn,variant:"left",onClick:()=>E(k),voiceIndex:k,voiceCount:i.length},sn?.name),c.jsx(_n,{direction:"prev",onClick:()=>bn("prev"),isFading:mn}),c.jsx(L,{voice:y,variant:"center",isSelected:!0,voiceIndex:h,voiceCount:i.length,elementRef:W},y?.name),c.jsx(_n,{direction:"next",onClick:()=>bn("next"),isFading:mn}),c.jsx(L,{voice:rn,variant:"right",onClick:()=>E(I),voiceIndex:I,voiceCount:i.length},rn?.name),c.jsx(L,{voice:ln,variant:"offscreenRight",voiceIndex:on,voiceCount:i.length},ln?.name),c.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-52 transform bg-linear-to-r from-[var(--main-surface-background)] to-transparent"}),c.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-52 transform bg-linear-to-l from-[var(--main-surface-background)] to-transparent"}),c.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-96 transform bg-white dark:bg-gray-800"}),c.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-96 transform bg-white dark:bg-gray-800"})]})}),c.jsx("div",{className:"mb-36 flex flex-col space-y-3",children:c.jsx(st,{isUnauthenticated:s,loading:v,handleLoginClick:Gn,handleCancelClick:Yn,handleConfirmClick:Kn,selectedVoice:y,currentVoiceName:u,cameFromNux:t})})]})}function L({voice:e,isSelected:n=!1,variant:t,onClick:r,voiceIndex:o,voiceCount:d,elementRef:s}){const u=l.useId(),a=l.useId(),f=t==="offscreenLeft"||t==="offscreenRight";return f||!n&&r==null?c.jsxs(J.div,{"aria-hidden":f||void 0,className:"absolute flex w-48 flex-col items-center justify-center select-none",variants:In,animate:t,initial:t,transition:{duration:.25,ease:"easeInOut"},children:[c.jsx("p",{className:`text-lg ${t==="center"?"font-semibold":""}`,children:e?.name}),c.jsx("p",{className:"text-sm text-gray-600 dark:text-[var(--text-secondary)]",children:e?.description})]}):c.jsxs(J.button,{type:"button",onClick:r,role:"radio","aria-checked":n,"aria-labelledby":u,"aria-describedby":a,"aria-posinset":o+1,"aria-setsize":d,className:"absolute flex w-48 flex-col items-center justify-center select-none",ref:s,variants:In,animate:t,initial:t,transition:{duration:.25,ease:"easeInOut"},children:[c.jsx("p",{id:u,className:`text-lg ${t==="center"?"font-semibold":""}`,children:e?.name}),c.jsx("p",{id:a,className:"text-sm text-gray-600 dark:text-[var(--text-secondary)]",children:e?.description})]})}function _n({direction:e,onClick:n,isFading:t}){const r=e==="prev"?ge:ke,o=X(),d=e==="prev"?o.formatMessage({id:"ajuz05",defaultMessage:"Previous voice"}):o.formatMessage({id:"Dr8wrw",defaultMessage:"Next voice"});return c.jsx("button",{className:z("absolute top-2 z-50 transition-opacity duration-175",e==="prev"?"-start-4":"-end-4",t?"opacity-20":"opacity-100"),onClick:n,"aria-label":d,children:c.jsx(r,{className:"text-token-text-quaternary hover:text-token-text-secondary h-6 w-6"})})}const rt=En({selectedVoiceAnnouncement:{id:"voicePicker.selectedVoiceAnnouncement",defaultMessage:"Selected voice: {name}. {description}"}});function gt(e){"use forget";const n=$n.c(12),t=X(),r=e.isOpen,o=e.onClose;let d;n[0]!==t?(d=t.formatMessage(lt.title),n[0]=t,n[1]=d):d=n[1];let s;n[2]!==e.cameFromNux||n[3]!==e.conversationId||n[4]!==e.initialVoiceName||n[5]!==e.onClose?(s=c.jsx(ve,{children:c.jsx(J.div,{children:c.jsx(it,{conversationId:e.conversationId,onClose:e.onClose,cameFromNux:e.cameFromNux,initialVoiceName:e.initialVoiceName})})}),n[2]=e.cameFromNux,n[3]=e.conversationId,n[4]=e.initialVoiceName,n[5]=e.onClose,n[6]=s):s=n[6];let u;return n[7]!==e.isOpen||n[8]!==e.onClose||n[9]!==d||n[10]!==s?(u=c.jsx(pe,{testId:"modal-voice-picker",isOpen:r,onClose:o,type:"success",size:"fullscreen",title:d,visuallyHiddenHeader:!0,children:s}),n[7]=e.isOpen,n[8]=e.onClose,n[9]=d,n[10]=s,n[11]=u):u=n[11],u}const lt=En({title:{id:"voicePickerModal.title",defaultMessage:"Voice picker"}});export{tn as B,gt as V,$e as a,Ee as b,Le as c,Ke as d,Ze as e,Je as f,Vn as n,We as s,mt as u,Ye as v};
//# sourceMappingURL=f40d6676-mnt2dhppmac9ic1a.js.map
