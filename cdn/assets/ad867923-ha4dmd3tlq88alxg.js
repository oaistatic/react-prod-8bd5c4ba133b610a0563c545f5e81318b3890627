import{e as De,c as C,r as v,j as h,o as ne,v as A,u as j,Q as je,l as de}from"./2340486e-iyoyluj31h1sa6y8.js";import{i as Be,m as ze,C as Re,W as qe,a as Ge}from"./de0b88d8-b1kj01owj43v23he.js";import{fP as ke,Iy as Ae,p2 as Q,pc as We,bM as He,dr as Ee,bc as K,cG as V,cE as D,my as ue,Iz as fe,eG as Ke,eL as Qe,jm as Ye,IA as we,Fz as Xe,nZ as Ze,xI as oe,IB as ie,xJ as ae,d7 as k,cA as P,da as Je,eu as et,cI as G,yA as he,cz as pe,dB as ve,vp as W,k8 as tt,cF as st,yu as nt,n as ot,dM as it,gN as at,jY as rt,kg as ct,IC as lt,nU as dt,po as Ne,pk as ut,e as me,ad as B,pi as Me,c7 as re,nP as ft,qG as be,ev as mt,rr as gt}from"./4813494d-htxz26hq9jzes4ww.js";import{tu as T,vm as Fe,zg as ht,hP as pt,Ke as ce,ga as le,gb as vt,ts as Mt,zd as bt,um as z,yU as Oe,yT as Ve,Kf as St,z0 as Ue,aa as Se,ao as Ce,ja as Ct,jb as _t,Kg as yt,zb as It,Kh as Y,zf as $e,Ki as H,Es as Tt,nF as xt,zc as Rt,nG as kt,z9 as At,zj as Et,zh as wt,z1 as Nt,yY as Ft,yX as X,Kj as Ot,Kk as Vt}from"./1a7ebd5f-l5ppx10xc56cf5jj.js";import{d as _e,e as U,h as Ut,m as ye,t as Ie,r as Z,a as Pe,b as Te,i as xe,c as $t,u as Pt}from"./67a11bc6-5cb947ca2y3heg7m.js";import{M as Lt}from"./6ee9bd33-jx0ng4ynoyiwt6vj.js";import{C as Dt,S as jt}from"./8aa57a25-gmwcqpspv26w7jlo.js";import{B as Bt,G as zt,u as qt}from"./4dbd7b28-hmoelqswuazsgj6a.js";import{M as Gt,a as Wt,S as Ht}from"./eee4e59e-h3m4eq6o05hqz0cu.js";import"./b9ebfa06-gwq5jgmcbtv2fsxw.js";import"./dd441551-jz7qr1iwzyvjyagd.js";import"./d4fd05ef-gg8rxx03a8tb9ya9.js";import"./f6f4f1b2-c4br18g2z7qakld3.js";import"./1bc04b52-k86x6c9bqprbf6wx.js";import"./1bc04b52-h1em0bjkpkjv8ykw.js";import"./1bc04b52-jl41yoi26gynh5lb.js";import"./1bc04b52-dgiyz1aoa545wjv2.js";import"./1bc04b52-hnu6g21afx0au4ng.js";function Kt(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[n,i]of t)if(!Object.is(i,e.get(n)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!1;for(const n of s)if(!Object.prototype.hasOwnProperty.call(e,n)||!Object.is(t[n],e[n]))return!1;return!0}const{useRef:Qt}=De;function Le(t){const e=Qt();return s=>{const n=t(s);return Kt(e.current,n)?e.current:e.current=n}}function Yt(t){return t===ht.LOST}const Xt=t=>{"use forget";const e=C.c(13),{clientThreadId:s}=t,n=ke(s),i=T(Zt),{voiceName:o}=Fe(),[a,r]=v.useState(!1),{connectionState:c,voiceConnectionQuality:d,hasConnectedOnce:l}=T(Le(Jt)),f=Ae();let u;e[0]!==s||e[1]!==n||e[2]!==i||e[3]!==o?(u=async()=>{pt(We.Retry),r(!0),await ce(async()=>{const x=He(()=>Ee(K(s)).id),R={conversation_id:n,eventSource:"lost_connection_hint_message",voice_mode:i,voice:o,clientThreadId:s,gizmo_id:V.getGizmoId(D(s)),requested_default_model:x,skipCacheReason:"lost-connection-retry",forceDisconnect:!0};await le({type:"STOP",reason:vt.Failed}),await le({type:"START",args:R})},es,()=>{r(!1)})},e[0]=s,e[1]=n,e[2]=i,e[3]=o,e[4]=u):u=e[4];const m=u;let g;e[5]===Symbol.for("react.memo_cache_sentinel")?(g=h.jsx(ne,{id:"QaPbww",defaultMessage:"Lost connection."}),e[5]=g):g=e[5];let p;e[6]===Symbol.for("react.memo_cache_sentinel")?(p=h.jsx("strong",{children:h.jsx(ne,{id:"oyHr3m",defaultMessage:"Retry"})}),e[6]=p):p=e[6];let M;e[7]!==m?(M=h.jsxs("div",{className:"inline-flex items-center",children:[g,h.jsx("button",{onClick:m,className:"ms-1",children:p})]}),e[7]=m,e[8]=M):M=e[8];const b=M;let S;e:{if(!l||a||f){S=!1;break e}else if(c!==Q.Connected){S=!0;break e}else if(Yt(d)){S=!0;break e}S=!1}const y=S;let _,I;return e[9]!==y||e[10]!==b?(_=()=>{y?_e.set({id:A(),hintMessage:b,modalMessage:null}):_e.set(U)},I=[y,b],e[9]=y,e[10]=b,e[11]=_,e[12]=I):(_=e[11],I=e[12]),v.useEffect(_,I),null};function Zt(t){return t.voiceMode}function Jt(t){return{connectionState:t.server.connectionState,voiceConnectionQuality:t.server.voiceConnectionQuality,hasConnectedOnce:t.hasConnectedOnce}}function es(t){const e=t instanceof Error?t.message:String(t);ue.voiceMode.error({error:e,eventSource:"lost_connection_hint_message"})}const ts=()=>{"use forget";const t=C.c(10),e=j(),{type:s,granted:n}=fe();let i;t[0]===Symbol.for("react.memo_cache_sentinel")?(i=Qe()&&Ke,t[0]=i):i=t[0];const o=i,a=s==="requested"&&!n;let r;t[1]!==e?(r=e.formatMessage(J.hint),t[1]=e,t[2]=r):r=t[2];const c=r;let d;t[3]!==c?(d=o?h.jsxs("a",{href:"ms-settings:privacy-microphone",className:Ut,children:[c,h.jsx(Ye,{className:"icon-sm ms-1"})]}):c,t[3]=c,t[4]=d):d=t[4];const l=d;let f,u;return t[5]!==l||t[6]!==e||t[7]!==a?(f=()=>{a?ye.set({id:A(),hintMessage:l,modalMessage:{title:e.formatMessage(J.title),description_markdown:e.formatMessage(J.description_markdown),buttons:[]}}):ye.set(U)},u=[a,e,l],t[5]=l,t[6]=e,t[7]=a,t[8]=f,t[9]=u):(f=t[8],u=t[9]),v.useEffect(f,u),null},J={hint:{id:"micMessages.hint",defaultMessage:"Enable microphone access in Settings",description:"Hint to the user to manually enable microphone access for voice mode"},title:{id:"micMessages.title",defaultMessage:"Microphone access required",description:"Title for modal that informs the user that microphone access is required for voice mode"},description_markdown:{id:"micMessages.description_markdown",defaultMessage:"To use Voice, you'll need to enable your microphone and try again.",description:"Description for modal that informs the user that microphone access is required for voice mode"}},ss=()=>{"use forget";const t=C.c(8),e=T(ns);let s;if(e){let a;t[0]===Symbol.for("react.memo_cache_sentinel")?(a=h.jsx(Lt,{className:"icon-sm me-1"}),t[0]=a):a=t[0];let r;t[1]!==e.text?(r=h.jsxs("div",{className:"flex items-center",children:[a,e.text]}),t[1]=e.text,t[2]=r):r=t[2],s=r}else s=null;const n=s;let i;t[3]!==n?(i=()=>{n?Ie.set({id:A(),hintMessage:n,modalMessage:null}):Ie.set(U)},t[3]=n,t[4]=i):i=t[4];let o;return t[5]!==n||t[6]!==e?(o=[e,n],t[5]=n,t[6]=e,t[7]=o):o=t[7],v.useEffect(i,o),null};function ns(t){return t.server.toolUpdate}const os=()=>{"use forget";const t=C.c(8),e=T(is);let s;t[0]!==e?.rate_limit_message?(s=e?.rate_limit_message??{},t[0]=e?.rate_limit_message,t[1]=s):s=t[1];const{reaching_limit_disclosure:n,exceed_limit_message:i}=s;let o,a;t[2]!==n?(o=()=>{if(n){const d=Z().hintMessage;if(n.hint===d)return;Z.set({id:A(),hintMessage:n.hint,modalMessage:{title:n.title,description_markdown:n.message_markdown,buttons:n.buttons}})}else Z.set(U)},a=[n],t[2]=n,t[3]=o,t[4]=a):(o=t[3],a=t[4]),v.useEffect(o,a);let r,c;return t[5]!==i?(r=()=>{if(i){Pe.set({id:A(),hintMessage:i.title,modalMessage:{title:i.title,description_markdown:i.description_markdown,buttons:i.buttons}});const d=i.buttons.some(as),l=i.buttons.some(rs);ue.rateLimitReached.success({upgrade_to_plus:d,upgrade_to_pro:l})}},c=[i],t[5]=i,t[6]=r,t[7]=c):(r=t[6],c=t[7]),v.useEffect(r,c),null};function is(t){return t.server.usage}function as(t){return t.action==="upgrade_to_plus"}function rs(t){return t.action==="upgrade_to_pro"}const cs=()=>{"use forget";const t=C.c(9),e=Mt();let s;t[0]!==e?.default_voice_mode||t[1]!==e?.modes?(s=e?.modes.find(l=>l.mode===e?.default_voice_mode),t[0]=e?.default_voice_mode,t[1]=e?.modes,t[2]=s):s=t[2];const n=s,i=n?.disclosure_message,o=n?.info_message;let a,r;t[3]!==i?(a=()=>{i?Te.set({id:A(),hintMessage:i.hint,modalMessage:{title:i.title,description_markdown:i.message_markdown,buttons:i.buttons}}):Te.set(U)},r=[i],t[3]=i,t[4]=a,t[5]=r):(a=t[4],r=t[5]),v.useEffect(a,r);let c,d;return t[6]!==o?(c=()=>{o?xe.set({id:A(),hintMessage:o.title,modalMessage:{title:o.title,description_markdown:o.message_markdown,buttons:o.buttons}}):xe.set(U)},d=[o],t[6]=o,t[7]=c,t[8]=d):(c=t[7],d=t[8]),v.useEffect(c,d),null},ls=t=>{"use forget";const e=C.c(12),{clientThreadId:s}=t;let n;e[0]===Symbol.for("react.memo_cache_sentinel")?(n=[],e[0]=n):n=e[0],v.useEffect(us,n);let i;e[1]!==s?(i=h.jsx(Xt,{clientThreadId:s}),e[1]=s,e[2]=i):i=e[2];let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=h.jsx(ts,{}),e[3]=o):o=e[3];let a;e[4]!==s?(a=!1,e[4]=s,e[5]=a):a=e[5];let r,c,d;e[6]===Symbol.for("react.memo_cache_sentinel")?(r=h.jsx(ss,{}),c=h.jsx(os,{}),d=h.jsx(cs,{}),e[6]=r,e[7]=c,e[8]=d):(r=e[6],c=e[7],d=e[8]);let l;return e[9]!==i||e[10]!==a?(l=h.jsxs(h.Fragment,{children:[i,o,a,r,c,d]}),e[9]=i,e[10]=a,e[11]=l):l=e[11],l};function ds(){$t()}function us(){return ds}const fs=()=>{"use forget";const t=C.c(12),{permissionsRequested:e,requestMicrophonePermissions:s,userDeclinedMicrophonePermissions:n,microphoneAvailable:i,microphoneLabel:o}=bt(),{active:a,forceMuted:r}=T(Le(ms));let c,d;t[0]!==a||t[1]!==r||t[2]!==i||t[3]!==o||t[4]!==e||t[5]!==n?(c=()=>{e&&we.set({type:"requested",granted:i,active:a,forceMuted:r,label:!n&&o?o:""})},d=[n,i,o,e,a,r],t[0]=a,t[1]=r,t[2]=i,t[3]=o,t[4]=e,t[5]=n,t[6]=c,t[7]=d):(c=t[6],d=t[7]),v.useEffect(c,d);const l=v.useRef(!1);let f,u;t[8]!==s?(f=()=>{l.current||(l.current=!0,s())},u=[s],t[8]=s,t[9]=f,t[10]=u):(f=t[9],u=t[10]),v.useEffect(f,u);let m;return t[11]===Symbol.for("react.memo_cache_sentinel")?(m=[],t[11]=m):m=t[11],v.useEffect(hs,m),null};function ms(t){return{active:!!t.dev.room?.localParticipant.isMicrophoneEnabled,forceMuted:!!t.dev.room?.localParticipant.isMicrophoneForceMuted}}function gs(){we.set({type:"unrequested",granted:!1,active:!1,forceMuted:!1,label:""})}function hs(){return gs}const ps="/cdn/assets/hangup_0db-gkj9zamd.ogg";let F=null;function vs(){try{F?(F.pause(),F.currentTime=0):(F=new Audio(ps),F.volume=1),F.play()}catch(t){z.debug("Failed to play hangup sound",t)}}function Ms(){const t=Oe(),{room:e}=Ve();return async s=>{e&&await St({room:e,voiceStore:t,event:{type:Ze.RelayMessage,payload:{type:Xe.RelayMessage,message:s}}})}}function bs({clientThreadId:t,parentMessageId:e,prependMessages:s,promptMessage:n,appendMessages:i,seedMessageId:o,intl:a}){const r=t.startsWith("WEB:"),c=new _s({clientThreadId:t,isHistoryAndTrainingDisabled:!1,isFirstCompletionInThread:r,queryClient:new je,isProjectEnabledForGizmo:!1,seedMessageId:o,intl:a});c.startOrContinueConversation({parentMessageId:e,prependMessages:s,promptMessage:n,appendMessages:i}),oe.set(c),ie.set(!1)}function Ss(){Ue(()=>{oe()?.endCompletion(),oe.set(null),ae.set(null)})}const Cs=500;function ee({requestedParentId:t,fallbackParentId:e,tree:s,context:n,messageId:i}){if(t&&s.containsNodeOrMessageId(t))return t;if(s.containsNodeOrMessageId(e))return e;if(s.containsNodeOrMessageId(s.rootId))return s.rootId;const o=s.nodes[0]?.id;if(o&&s.containsNodeOrMessageId(o))return o;z.error("VoiceCompletionRequest unable to resolve parent node id",{context:n,messageId:i,requestedParentId:t,fallbackParentId:e,rootId:s.rootId})}class _s{messageIdsReceived=[];fullChatMessageStreaming=!1;clientThreadId;isHistoryAndTrainingDisabled;isFirstCompletionInThread;queryClient;isProjectEnabledForGizmo;intl;messagesToUpdate={};allIncompleteMessageIds=new Set;responseThreadId;treatCompletionAsAsync=!1;placeholderNodeId;constructor({clientThreadId:e,isHistoryAndTrainingDisabled:s,isFirstCompletionInThread:n,queryClient:i,isProjectEnabledForGizmo:o,seedMessageId:a,intl:r}){this.clientThreadId=e,this.isHistoryAndTrainingDisabled=s,this.isFirstCompletionInThread=n,this.queryClient=i,this.isProjectEnabledForGizmo=o,this.messageIdsReceived=a?[a]:[],this.intl=r}scrollToIfUserMessage(e){e.author.role===k.User&&Ue(()=>{P(this.clientThreadId,s=>{s.scrollToMessageId=e.id})},Cs)}handleMessage({message:e,conversationId:s}){this.messageIdsReceived.includes(e.id)||this.messageIdsReceived.push(e.id);const n=this.messageIdsReceived.indexOf(e.id);if(n!==-1&&e.metadata){const i=e.metadata.parent_id,o=n>0?this.messageIdsReceived[n-1]:void 0;!i&&o&&(e.metadata.parent_id=o)}if(e.author.role===k.User&&e.content.content_type===Je.MultimodalText&&e.content.parts.length===0&&(e.content.parts=[{content_type:et.AudioTranscription,text:this.intl.formatMessage({id:"voice-completion-request.transcribing",defaultMessage:"Transcribing…"}),direction:"in"}]),this.scrollToIfUserMessage(e),V.getTree(D(s)).containsNodeOrMessageId(e.id)){this.messagesToUpdate[e.id]=e,this.debouncedUpdateExistingMessages();return}this.debouncedUpdateExistingMessages.flush(),P(this.clientThreadId,i=>{G.updateTree(i,(o,a)=>{const r={requestId:e.id};e.status!=="in_progress"?r.completionSampleFinishTime=Date.now():this.allIncompleteMessageIds.add(e.id);const c={...e,clientMetadata:r},d=e.metadata?.parent_id;if(d){const l=ee({requestedParentId:d,fallbackParentId:a,tree:o,context:"stream",messageId:e.id});if(!l)return;if(this.placeholderNodeId&&o.containsNodeOrMessageId(this.placeholderNodeId)&&o.getParent(this.placeholderNodeId).id===o.getNodeByIdOrMessageId(l).id)if(he(c)){o.prependNode(this.placeholderNodeId,c);return}else o.deleteNode(this.placeholderNodeId),this.placeholderNodeId=void 0;return o.addMessageNode(l,c)}else{const l=o.findFirst(f=>f.message.author.role!==k.Root&&!he(f.message));if(l)o.prependNode(l.id,c);else return o.addMessageNode(a,c)}})})}beginAssistantResponse(){Se.set(K(this.clientThreadId),!0),Ce(this.clientThreadId,{source:ve.CLIENT,value:pe.STREAMING},{path:"voice_begin_assistant_response"}),ie.set(!0)}addOptimisticUserMessages({parentMessageId:e,promptMessage:s}){this.beginAssistantResponse(),this.messageIdsReceived.push(s.id),P(this.clientThreadId,n=>{G.updateTree(n,(i,o)=>{if(e){const r=ee({requestedParentId:e,fallbackParentId:o,tree:i,context:"optimistic",messageId:s.id});r&&(o=r)}return s&&(r=>{i.containsNodeOrMessageId(r.id)||(r.clientMetadata=W(r.clientMetadata),o=i.addOptimisticMessageNode(o,r))})(s),o})})}startOrContinueConversation({parentMessageId:e,prependMessages:s,promptMessage:n,appendMessages:i}){P(this.clientThreadId,o=>{G.updateTree(o,(a,r)=>{if(e){const c=ee({requestedParentId:e,fallbackParentId:r,tree:a,context:"optimistic",messageId:n?.id??"start_or_continue"});c&&(r=c)}if(s)for(const c of s)c.clientMetadata=W(c.clientMetadata),r=a.addOptimisticMessageNode(r,c);if(n&&(n.clientMetadata=W(n.clientMetadata),r=a.addOptimisticMessageNode(r,n)),i)for(const c of i)c.clientMetadata=W(c.clientMetadata),r=a.addOptimisticMessageNode(r,c);return r})})}endAssistantResponse(){Se.set(K(this.clientThreadId),!1),Ce(this.clientThreadId,{source:ve.CLIENT,value:pe.UNREAD},{path:"voice_end_assistant_response"}),ie.set(!1)}handleConversationUpdate(e){if(this.responseThreadId===void 0){const s=e;this.responseThreadId=s;const n=tt(this.clientThreadId),i=st(this.clientThreadId)!==s;if(z.debug("Init new thread",{isNewClientThread:n,responseHasServerThreadId:i}),n&&i&&nt(this.clientThreadId,s),this.isFirstCompletionInThread){const o=D(this.clientThreadId);!this.isHistoryAndTrainingDisabled&&Ct(o?.mode)&&ot()&&(it(this.queryClient,V.getGizmoId(o)),o?.disableConversationNavigation||_t(at,this.queryClient,s,this.isProjectEnabledForGizmo))}}}handleResponse(e){const s=e.message.author,n=e.message.status;(s.role===k.Assistant||s.role===k.Tool)&&(n==="in_progress"&&!this.fullChatMessageStreaming?(this.fullChatMessageStreaming=!0,this.beginAssistantResponse()):n!=="in_progress"&&this.fullChatMessageStreaming&&(this.fullChatMessageStreaming=!1,this.endAssistantResponse())),this.responseThreadId===void 0&&e.conversationId&&this.handleConversationUpdate(e.conversationId),(s.role===k.Assistant||s.role===k.User)&&n==="finished_successfully"&&!this.fullChatMessageStreaming?(this.fullChatMessageStreaming=!0,this.beginAssistantResponse(),this.handleMessage({message:e.message,conversationId:this.clientThreadId}),this.fullChatMessageStreaming=!1,this.endAssistantResponse()):this.handleMessage({message:e.message,conversationId:this.clientThreadId})}debouncedUpdateExistingMessages=rt(()=>{const e=Object.values(this.messagesToUpdate);e.length!==0&&(P(this.clientThreadId,s=>{G.updateTree(s,n=>{for(const i of e)n.updateNodeMessage(i.id,i),i.status!=="in_progress"&&(n.updateNodeMetadata(i.id,{completionSampleFinishTime:Date.now()}),this.allIncompleteMessageIds.delete(i.id))})}),this.messagesToUpdate={})},50,{leading:!0,maxWait:50});endCompletion(){this.fullChatMessageStreaming&&this.endAssistantResponse()}}const ys=t=>{"use forget";const e=C.c(21),{clientThreadId:s}=t,n=yt(),i=Oe(),o=j(),a=T(Is),{room:r}=Ve();let c;e[0]!==s?(c={conversationId:s},e[0]=s,e[1]=c):c=e[1];const d=It(c),l=ct(),f=T(Ts),u=Ms(),m=lt();let g,p;e[2]!==s||e[3]!==o||e[4]!==n||e[5]!==i?(g=()=>{const _=dt();if(n?.command.type==="START"){const I=n.command.oldConversationId;if(I&&I===s||(_.surfaceToStart.end(),_.startToMicRequest.start(),!Y(n.id)))return;$e.set(n.command.args),i.setState(R=>(R.isVoiceModeActive=!0,R.conversationId=s,R)),Ne.set(!0);const x=V.getCurrentNode(D(s))?.message?.id;bs({clientThreadId:s,seedMessageId:x,intl:o}),H(n.id)}},p=[s,o,n,i],e[2]=s,e[3]=o,e[4]=n,e[5]=i,e[6]=g,e[7]=p):(g=e[6],p=e[7]),v.useEffect(g,p);let M,b;e[8]!==d||e[9]!==l||e[10]!==n?(M=()=>{if(n?.command.type==="STOP"&&Y(n.id)){if(!l)return H(n.id);ut.set(!0);const _=n.command.reason;ce(async()=>{await d(_)},xs,()=>{Ss(),vs(),Tt(),H(n.id)})}},b=[d,l,n],e[8]=d,e[9]=l,e[10]=n,e[11]=M,e[12]=b):(M=e[11],b=e[12]),v.useEffect(M,b);let S,y;return e[13]!==a||e[14]!==n||e[15]!==u||e[16]!==f||e[17]!==r||e[18]!==m?(S=()=>{if(n?.command.type!=="RELAY")return;const _=m;if(!(a===Q.Connected)||!f||!r||!_||!Y(n.id))return;const{id:x,command:R}=n,{message:E,parentMessageId:$}=R;ce(async()=>{_.addOptimisticUserMessages({parentMessageId:$,promptMessage:E}),await u(E)},Rs,()=>{H(x)})},y=[a,n,u,f,r,m],e[13]=a,e[14]=n,e[15]=u,e[16]=f,e[17]=r,e[18]=m,e[19]=S,e[20]=y):(S=e[19],y=e[20]),v.useEffect(S,y),null};function Is(t){return t.server.connectionState}function Ts(t){return t.server.relayReady}function xs(t){z.error("Error exiting voice state",t)}function Rs(t){z.error("Error relaying message",t)}const ks=t=>{"use forget";const e=C.c(13),{clientThreadId:s}=t,{startVoiceMode:n}=xt(),i=ke(s),o=v.useRef(!1),{granted:a}=fe(),r=Rt(),{voiceName:c}=Fe();let d;e[0]!==s?(d=K(s),e[0]=s,e[1]=d):d=e[1];const l=d;let f;e[2]!==l?(f=()=>Ee(l).id,e[2]=l,e[3]=f):f=e[3];const u=me(f);let m,g;return e[4]!==s||e[5]!==a||e[6]!==u||e[7]!==i||e[8]!==n||e[9]!==r||e[10]!==c?(m=()=>{if(!o.current&&a){o.current=!0;const p=D(s);let M;r!==void 0?(M=r,$e.set(void 0)):(M=kt({serverThreadId:i,parentMessageId:V.getCurrentNode(p)?.id,isAdvancedMode:!0,eventSource:"integrated_ux_composer_speech_button",clientThreadId:s,gizmoId:V.getGizmoId(p)}),ue.voiceSessionStarted.click({voice:c}),M.requested_default_model=u??void 0),n(M)}},g=[s,a,u,i,n,r,c],e[4]=s,e[5]=a,e[6]=u,e[7]=i,e[8]=n,e[9]=r,e[10]=c,e[11]=m,e[12]=g):(m=e[11],g=e[12]),v.useEffect(m,g),null};class ge{#n;#a;#e;#o=[];#i={};#t;#s;static#r="BlorbUniformsObject";constructor(e,s){this.#e=e;const n=e.getUniformBlockIndex(s,ge.#r),i=e.getActiveUniformBlockParameter(s,n,e.UNIFORM_BLOCK_DATA_SIZE);this.#t=e.createBuffer(),e.bindBuffer(e.UNIFORM_BUFFER,this.#t),e.bufferData(e.UNIFORM_BUFFER,i,e.DYNAMIC_DRAW);const o=0;e.bindBufferBase(e.UNIFORM_BUFFER,o,this.#t),e.uniformBlockBinding(s,n,o);const a=e.getActiveUniformBlockParameter(s,n,e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);this.#o=[],this.#i={};for(let r=0;r<a.length;r++){const c=a[r];if(c==null)continue;const d=e.getActiveUniform(s,c);if(!d)throw new Error("No uniformInfo for index "+c);let l=d.name;l=l.replace(/\[0\]$/,"");const f=e.getActiveUniforms(s,[c],e.UNIFORM_OFFSET),u=Array.isArray(f)&&f.length>0?f[0]:0;this.#o.push(l),this.#i[l]=u}this.#s=new ArrayBuffer(i),this.#n=new Float32Array(this.#s),this.#a=new Int32Array(this.#s)}setVariablesAndRender(e){for(const s of this.#o){const[,n]=s.split("."),o=this.#i[s]/4,a=e[n];typeof a=="number"?this.#n[o]=a:typeof a=="boolean"?this.#a[o]=a?1:0:Array.isArray(a)&&this.#n.set(a,o)}this.#e.bindBuffer(this.#e.UNIFORM_BUFFER,this.#t),this.#e.bufferSubData(this.#e.UNIFORM_BUFFER,0,this.#s),this.#e.drawArrays(this.#e.TRIANGLE_STRIP,0,6)}}var As=`#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)

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

/* ----------------------- Utilities actually used ----------------------- */

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) * (1.0 - t) * exp(-E * 2.0 * t) * t * 10.0;
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) k = 0.000001;
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

/* --------------------------- Active states ----------------------------- */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isWhiteForeground
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
  vec4 color = vec4(isWhiteForeground ? vec3(1.0) : vec3(0.0), alpha);
  sdf.color = mix(sdf.color, color, args.amount);

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
  const int barCount = 4;

  float totalSpan = args.mainRadius * 1.9;
  float slotWidth = totalSpan / float(barCount);
  float gapRatio = clamp(0.35, 0.0, 0.9);
  float baseBarHalfWidth = slotWidth * (1.0 - gapRatio) * 0.5;

  for (int i = 0; i < barCount; i++) {
    float f = (float(i) + 0.5) / float(barCount);

    float w = baseBarHalfWidth;
    float h = w;

    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );

    vec2 pos = vec2(f - 0.5, 0.0) * totalSpan;
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

/* ------------------------------ I/O & UBO ------------------------------ */

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float speakTimestamp;
  vec4 avgMag;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isWhiteForeground;
} ubo; 

/* -------------------------------- main --------------------------------- */

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
  args.amount = 1.0;
  args.duration = ubo.time - ubo.speakTimestamp;

  
  SDFArgs idleArgs = args;
  idleArgs.amount = 1.0;
  sdf = applyIdleState(sdf, idleArgs, ubo.isWhiteForeground);

  float silenceDuration = ubo.time - ubo.silenceTimestamp;
  sdf = applySpeakState(
    sdf,
    args,
    ubo.avgMag,
    ubo.silenceAmount,
    silenceDuration
  );

  float clampingTolerance = 0.0075 / max(ubo.screenScaleFactor, 0.0001);
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`,Es=`#version 300 es

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
}`;const ws=[300,300];function Ns({className:t,staticConfig:e,onDynamicConfigSetterReady:s,onRenderComplete:n}){"use no forget";const i=v.useRef(performance.now()/1e3),o=v.useRef({viewport:ws,time:i.current}).current,a=v.useRef(void 0),r=v.useRef({...o,...e,speakTimestamp:0,avgMag:[0,0,0,0],silenceAmount:0,silenceTimestamp:0}),c=v.useCallback(l=>{r.current={...o,...e,...l},a.current=l},[o,e]);v.useEffect(()=>{a.current&&(r.current={...o,...e,...a.current})},[e,o]),v.useEffect(()=>{s(c)},[s,c]);const d=l=>{o.viewport=[l.width,l.height]};return v.useEffect(()=>{const l=setInterval(()=>{o.time=performance.now()/1e3},Bt);return()=>clearInterval(l)},[o]),h.jsx(zt,{className:B("flex items-center justify-center",t),variablesRef:r,onViewportUpdate:d,onGlAvailable:void 0,onCanvasSizeUpdate:void 0,onRenderComplete:n,scale:1,GLUniformsSetter:ge,vert:Es,frag:As})}const Fs=1.4,Os={bands:4,loPass:0,hiPass:400},Vs=t=>{"use forget";const e=C.c(12),{className:s}=t,[n,i]=v.useState(void 0),{getTracks:o}=At();let a;e[0]!==o?(a=o([Et.Microphone]).find(Us),e[0]=o,e[1]=a):a=e[1];const c=qt(a?.track,Os);let d;e[2]!==c?(d=c.map($s),e[2]=c,e[3]=d):d=e[3];const l=d,f=Ps;let u,m;e[4]!==l||e[5]!==n?(u=()=>{n&&n({speakTimestamp:0,avgMag:l,silenceAmount:0,silenceTimestamp:0})},m=[l,n],e[4]=l,e[5]=n,e[6]=u,e[7]=m):(u=e[6],m=e[7]),v.useEffect(u,m);let g;e[8]===Symbol.for("react.memo_cache_sentinel")?(g={screenScaleFactor:window.devicePixelRatio,isWhiteForeground:!0},e[8]=g):g=e[8];const p=g;let M;e[9]===Symbol.for("react.memo_cache_sentinel")?(M=y=>{i(()=>y)},e[9]=M):M=e[9];const b=M;let S;return e[10]!==s?(S=h.jsx(Ns,{className:s,staticConfig:p,onDynamicConfigSetterReady:b,onRenderComplete:f}),e[10]=s,e[11]=S):S=e[11],S};function Us(t){return t.origin==="local"}function $s(t){return t*Fs}function Ps(){Be()||ze()}const L={buttonLayout:"rounded-full overflow-hidden h-9 px-3",buttonContents:"flex flex-row items-center justify-center gap-2",buttonColors:"hover:opacity-80 font-semibold transition-colors transition-width duration-500 ease-in-out",loadingColor:"bg-token-icon-primary text-token-text-inverted px-0",loadedColor:"bg-token-bg-accent-static text-token-text-inverted-static"},Ls=()=>{},Ds=t=>{"use forget";const e=C.c(7),{className:s,Icon:n}=t;let i;e[0]!==s?(i=B(s,"relative"),e[0]=s,e[1]=i):i=e[1];let o;e[2]!==n?(o=h.jsx(n,{className:"absolute start-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2"}),e[2]=n,e[3]=o):o=e[3];let a;return e[4]!==i||e[5]!==o?(a=h.jsx("div",{className:i,children:o}),e[4]=i,e[5]=o,e[6]=a):a=e[6],a},js=()=>{const[t,e]=v.useState(!0),s=T(i=>i.server.connectionState===Q.Connected),n=T(i=>i.server.remoteState===Me.Listening||i.server.remoteState===Me.Speaking);return v.useEffect(()=>{s&&n&&t?e(!1):s||e(!0)},[s,n,t]),t},Bs=t=>{"use forget";const e=C.c(23),{onClick:s}=t,n=js(),i=j(),o=Ae(),r=me(zs)?.id!=null,[c,d]=v.useState(!1),l=Ls();let f,u;o?(f=re,u=O.endingVoiceSessionLabel):n&&!r?(f=c?Dt:re,u=O.cancelLoadingAriaLabel):(f=Vs,u=O.endVoiceAriaLabel);let m;e[0]!==f?(m=h.jsx(Ds,{Icon:f,className:"h-3 w-3"}),e[0]=f,e[1]=m):m=e[1];let g;e[2]!==u||e[3]!==m?(g=[m,u],e[2]=u,e[3]=m,e[4]=g):g=e[4];const[p,M]=g;let b;o?b=O.endingVoiceSessionLabel:n&&!r?b=O.cancelLoadingButtonLabel:b=O.endVoiceButtonLabel;const S=b,y=n||o;let _,I;e[5]===Symbol.for("react.memo_cache_sentinel")?(_=()=>d(!0),I=()=>d(!1),e[5]=_,e[6]=I):(_=e[5],I=e[6]);let x;e[7]!==M||e[8]!==i?(x=i.formatMessage(M),e[7]=M,e[8]=i,e[9]=x):x=e[9];const R=y&&L.loadingColor,E=!y&&L.loadedColor,$=!y&&l;let w;e[10]!==R||e[11]!==E||e[12]!==$?(w=B(L.buttonLayout,L.buttonContents,L.buttonColors,R,E,$),e[10]=R,e[11]=E,e[12]=$,e[13]=w):w=e[13];let N;e[14]!==S?(N=h.jsx(ne,{...S}),e[14]=S,e[15]=N):N=e[15];let q;return e[16]!==p||e[17]!==o||e[18]!==s||e[19]!==w||e[20]!==N||e[21]!==x?(q=h.jsxs("button",{onMouseOver:_,onMouseOut:I,"aria-label":x,type:"button",className:w,onClick:s,disabled:o,children:[p,N]}),e[16]=p,e[17]=o,e[18]=s,e[19]=w,e[20]=N,e[21]=x,e[22]=q):q=e[22],q},O=de({endVoiceButtonLabel:{id:"integratedux.endVoiceMode",defaultMessage:"End"},cancelLoadingButtonLabel:{id:"integratedux.cancelLoading",defaultMessage:"Cancel"},endVoiceAriaLabel:{id:"integratedux.endVoiceAriaLabel",defaultMessage:"End Voice"},cancelLoadingAriaLabel:{id:"integratedux.cancelLoadingAria",defaultMessage:"Cancel loading"},endingVoiceSessionLabel:{id:"integratedux.endingVoiceSession",defaultMessage:"Ending…"}});function zs(){return Pe()}const qs={ON:{colorClass:"bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10",sizeClass:"!h-9 !w-9 !min-h-9 touch:!min-h-9",iconColorClass:void 0},OFF:{colorClass:"bg-red-500/10 hover:bg-red-500/15 active:bg-red-500/20 dark:bg-red-500/10 dark:hover:bg-red-500/15 dark:active:bg-red-500/20",sizeClass:"!h-9 !w-9 !min-h-9 touch:!min-h-9",iconColorClass:"text-danger"}},Gs={ON:{colorClass:"bg-gray-900 hover:bg-gray-800 active:bg-gray-700",sizeClass:"!h-9 !w-9 !min-h-9 touch:!min-h-9",iconColorClass:"text-token-main-surface-primary hover:text-token-text-inverted"},OFF:{colorClass:"bg-black/5 hover:bg-black/10 active:bg-black/20 dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-white/5 dark:active:bg-white/10",sizeClass:"!h-9 !w-9 !min-h-9 touch:!min-h-9",iconColorClass:"hover:text-token-text-inverted"}},Ws=t=>{"use forget";const e=C.c(15),{disabled:s,onClick:n,microphoneLabel:i,microphoneActive:o,microphoneForceMuted:a}=t,r=j(),c=o?Gt:Wt,{colorClass:d,sizeClass:l,iconColorClass:f}=qs[o?"ON":"OFF"];let u;e[0]!==r||e[1]!==o||e[2]!==a?(u=a?r.formatMessage(te.microphoneMuted):o?r.formatMessage(te.microphoneOff):r.formatMessage(te.microphoneOn),e[0]=r,e[1]=o,e[2]=a,e[3]=u):u=e[3];const m=u;let g;e[4]!==d||e[5]!==l?(g=B(d,l),e[4]=d,e[5]=l,e[6]=g):g=e[6];let p;return e[7]!==c||e[8]!==s||e[9]!==f||e[10]!==i||e[11]!==n||e[12]!==m||e[13]!==g?(p=h.jsx(Re,{"aria-label":m,onClick:n,icon:c,iconSize:"icon-md",disabled:s,className:g,iconColor:f,tooltipPrimaryLabel:m,tooltipSecondaryLabel:i}),e[7]=c,e[8]=s,e[9]=f,e[10]=i,e[11]=n,e[12]=m,e[13]=g,e[14]=p):p=e[14],p},te=de({microphoneMuted:{id:"integrated-ux.mute-button.microphone-muted",defaultMessage:"Microphone muted in system settings / hardware switch"},microphoneOff:{id:"integrated-ux.mute-button.microphone-off",defaultMessage:"Turn off microphone"},microphoneOn:{id:"integrated-ux.mute-button.microphone-on",defaultMessage:"Turn on microphone"}}),Hs=()=>{"use forget";const t=C.c(6),{isMuting:e,toggleMute:s}=wt(),{disconnectPending:n}=Nt(),{forceMuted:i,active:o,label:a,granted:r}=fe(),c=e||n||i||!r,d=r&&o;let l;return t[0]!==i||t[1]!==a||t[2]!==c||t[3]!==d||t[4]!==s?(l=h.jsx(Ws,{disabled:c,onClick:s,microphoneActive:d,microphoneForceMuted:i,microphoneLabel:a}),t[0]=i,t[1]=a,t[2]=c,t[3]=d,t[4]=s,t[5]=l):l=t[5],l},Ks=t=>{"use forget";const e=C.c(14),{waiting:s,started:n,onClick:i}=t,o=j();let a;e[0]!==o||e[1]!==n||e[2]!==s?(a=s?o.formatMessage(se.screensharePending):n?o.formatMessage(se.screenshareOn):o.formatMessage(se.screenshareOff),e[0]=o,e[1]=n,e[2]=s,e[3]=a):a=e[3];const r=a,{colorClass:c,sizeClass:d,iconColorClass:l}=Gs[n?"ON":"OFF"],f=s?re:n?Ht:jt;let u;e[4]!==c||e[5]!==d?(u=B(c,d),e[4]=c,e[5]=d,e[6]=u):u=e[6];let m;return e[7]!==f||e[8]!==l||e[9]!==i||e[10]!==r||e[11]!==u||e[12]!==s?(m=h.jsx(Re,{"aria-label":r,onClick:i,disabled:s,icon:f,iconSize:"icon-md",className:u,iconColor:l}),e[7]=f,e[8]=l,e[9]=i,e[10]=r,e[11]=u,e[12]=s,e[13]=m):m=e[13],m},se=de({screenshareOff:{id:"integrated-ux.screenshare-button.screenshare-off",defaultMessage:"Activate screenshare"},screenshareOn:{id:"integrated-ux.screenshare-button.screenshare-on",defaultMessage:"Turn off screenshare"},screensharePending:{id:"integrated-ux.screenshare-button.pending",defaultMessage:"Pending screenshare activation"}}),Qs=()=>{"use forget";const t=C.c(7),{screenshareTrackState:e,toggleScreenShare:s}=Ft();let n;t[0]===Symbol.for("react.memo_cache_sentinel")?(n=[X.Starting,X.Stopping],t[0]=n):n=t[0];const i=n.includes(e),o=e===X.Started;let a;t[1]!==s?(a=()=>s("ControlButton"),t[1]=s,t[2]=a):a=t[2];let r;return t[3]!==o||t[4]!==a||t[5]!==i?(r=h.jsx(Ks,{waiting:i,started:o,onClick:a}),t[3]=o,t[4]=a,t[5]=i,t[6]=r):r=t[6],r},Ys=t=>{"use forget";const e=C.c(15),{onComposerSubmit:s}=t,n=Pt(),i=ft();let o;e[0]!==i?(o=()=>gt(i),e[0]=i,e[1]=o):o=e[1];const a=!me(o),r=be(mt.hasUploadInProgress),c=be(Xs),d=a||r||c,l=T(Zs);let f;e[2]!==l||e[3]!==n?(f=async()=>{const M=await Ot({connectionState:l,isLimitExceeded:n});le({type:"STOP",reason:M})},e[2]=l,e[3]=n,e[4]=f):f=e[4];const u=f;let m;e[5]!==d?(m=!d&&h.jsxs(h.Fragment,{children:[h.jsx(qe,{capability:"screenshare",children:h.jsx(Qs,{})}),h.jsx(Hs,{})]}),e[5]=d,e[6]=m):m=e[6];let g;e[7]!==i||e[8]!==d||e[9]!==u||e[10]!==s?(g=d?h.jsx(Vt,{onSubmit:s,composerController:i,isStreaming:!1,isDisabled:!1,showSpinner:!1}):h.jsx(Bs,{onClick:u}),e[7]=i,e[8]=d,e[9]=u,e[10]=s,e[11]=g):g=e[11];let p;return e[12]!==m||e[13]!==g?(p=h.jsxs("div",{className:"flex flex-row gap-2",children:[m,g]}),e[12]=m,e[13]=g,e[14]=p):p=e[14],p};function Xs(t){return t.files.length>0}function Zs(t){return t.server.connectionState}const Cn=t=>{"use forget";const e=C.c(23),{clientThreadId:s,isFocused:n,onComposerSubmit:i}=t,o=T(Js),a=T(en),r=T(tn);let c,d;e[0]!==o?(c=()=>{Ne.set(o)},d=[o],e[0]=o,e[1]=c,e[2]=d):(c=e[1],d=e[2]),v.useEffect(c,d);let l,f;e[3]!==a||e[4]!==r||e[5]!==o?(l=()=>{o&&!a?ae.set(Q.Connecting):ae.set(r)},f=[a,r,o],e[3]=a,e[4]=r,e[5]=o,e[6]=l,e[7]=f):(l=e[6],f=e[7]),v.useEffect(l,f);let u,m;e[8]!==s?(u=h.jsx(ys,{clientThreadId:s}),m=h.jsx(ks,{clientThreadId:s}),e[8]=s,e[9]=u,e[10]=m):(u=e[9],m=e[10]);let g;e[11]===Symbol.for("react.memo_cache_sentinel")?(g=h.jsx(fs,{}),e[11]=g):g=e[11];let p;e[12]!==s?(p=h.jsx(ls,{clientThreadId:s}),e[12]=s,e[13]=p):p=e[13];let M;e[14]!==s||e[15]!==n||e[16]!==i?(M=h.jsx(Ys,{clientThreadId:s,composerIsFocused:n,onComposerSubmit:i}),e[14]=s,e[15]=n,e[16]=i,e[17]=M):M=e[17];let b;return e[18]!==u||e[19]!==m||e[20]!==p||e[21]!==M?(b=h.jsxs(Ge,{executors:u,children:[m,g,p,M]}),e[18]=u,e[19]=m,e[20]=p,e[21]=M,e[22]=b):b=e[22],b};function Js(t){return t.isVoiceModeActive}function en(t){return t.hasConnectedOnce}function tn(t){return t.server.remoteState}export{Cn as SpeechActiveContainer};
//# sourceMappingURL=ad867923-ha4dmd3tlq88alxg.js.map
