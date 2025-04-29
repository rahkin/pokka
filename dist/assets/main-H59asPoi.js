import{g as et,i as di,j as b,u as Ui,k as Td,l as wd,C as Id,m as $g,n as iu,o as qg,Q as zg,p as Wg,W as Gg,R as Hg,q as Kg,r as Qg}from"./web3-vendor-oifE5Ieh.js";import{a as Yg,R as Qn,r as Te,L as Js,d as Xg,e as js,B as Jg}from"./react-vendor-BQcf0bnJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var ia={},ou=Yg;ia.createRoot=ou.createRoot,ia.hydrateRoot=ou.hydrateRoot;var ce="-ms-",Gr="-moz-",ne="-webkit-",Ad="comm",Bi="rule",Qa="decl",Zg="@import",Cd="@keyframes",e_="@layer",Sd=Math.abs,Ya=String.fromCharCode,oa=Object.assign;function t_(n,e){return Se(n,0)^45?(((e<<2^Se(n,0))<<2^Se(n,1))<<2^Se(n,2))<<2^Se(n,3):0}function Rd(n){return n.trim()}function St(n,e){return(n=e.exec(n))?n[0]:n}function G(n,e,t){return n.replace(e,t)}function Zs(n,e,t){return n.indexOf(e,t)}function Se(n,e){return n.charCodeAt(e)|0}function Yn(n,e,t){return n.slice(e,t)}function pt(n){return n.length}function bd(n){return n.length}function jr(n,e){return e.push(n),n}function n_(n,e){return n.map(e).join("")}function au(n,e){return n.filter(function(t){return!St(t,e)})}var ji=1,Xn=1,Pd=0,nt=0,_e=0,dr="";function $i(n,e,t,r,s,i,a,l){return{value:n,root:e,parent:t,type:r,props:s,children:i,line:ji,column:Xn,length:a,return:"",siblings:l}}function jt(n,e){return oa($i("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Ln(n){for(;n.root;)n=jt(n.root,{children:[n]});jr(n,n.siblings)}function r_(){return _e}function s_(){return _e=nt>0?Se(dr,--nt):0,Xn--,_e===10&&(Xn=1,ji--),_e}function ct(){return _e=nt<Pd?Se(dr,nt++):0,Xn++,_e===10&&(Xn=1,ji++),_e}function vn(){return Se(dr,nt)}function ei(){return nt}function qi(n,e){return Yn(dr,n,e)}function aa(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i_(n){return ji=Xn=1,Pd=pt(dr=n),nt=0,[]}function o_(n){return dr="",n}function Lo(n){return Rd(qi(nt-1,la(n===91?n+2:n===40?n+1:n)))}function a_(n){for(;(_e=vn())&&_e<33;)ct();return aa(n)>2||aa(_e)>3?"":" "}function l_(n,e){for(;--e&&ct()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return qi(n,ei()+(e<6&&vn()==32&&ct()==32))}function la(n){for(;ct();)switch(_e){case n:return nt;case 34:case 39:n!==34&&n!==39&&la(_e);break;case 40:n===41&&la(n);break;case 92:ct();break}return nt}function c_(n,e){for(;ct()&&n+_e!==57;)if(n+_e===84&&vn()===47)break;return"/*"+qi(e,nt-1)+"*"+Ya(n===47?n:ct())}function u_(n){for(;!aa(vn());)ct();return qi(n,nt)}function h_(n){return o_(ti("",null,null,null,[""],n=i_(n),0,[0],n))}function ti(n,e,t,r,s,i,a,l,u){for(var h=0,f=0,p=a,_=0,I=0,R=0,N=1,D=1,B=1,L=0,F="",W=s,ie=i,$=r,E=F;D;)switch(R=L,L=ct()){case 40:if(R!=108&&Se(E,p-1)==58){Zs(E+=G(Lo(L),"&","&\f"),"&\f",Sd(h?l[h-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:E+=Lo(L);break;case 9:case 10:case 13:case 32:E+=a_(R);break;case 92:E+=l_(ei()-1,7);continue;case 47:switch(vn()){case 42:case 47:jr(d_(c_(ct(),ei()),e,t,u),u);break;default:E+="/"}break;case 123*N:l[h++]=pt(E)*B;case 125*N:case 59:case 0:switch(L){case 0:case 125:D=0;case 59+f:B==-1&&(E=G(E,/\f/g,"")),I>0&&pt(E)-p&&jr(I>32?cu(E+";",r,t,p-1,u):cu(G(E," ","")+";",r,t,p-2,u),u);break;case 59:E+=";";default:if(jr($=lu(E,e,t,h,f,s,l,F,W=[],ie=[],p,i),i),L===123)if(f===0)ti(E,e,$,$,W,i,p,l,ie);else switch(_===99&&Se(E,3)===110?100:_){case 100:case 108:case 109:case 115:ti(n,$,$,r&&jr(lu(n,$,$,0,0,s,l,F,s,W=[],p,ie),ie),s,ie,p,l,r?W:ie);break;default:ti(E,$,$,$,[""],ie,0,l,ie)}}h=f=I=0,N=B=1,F=E="",p=a;break;case 58:p=1+pt(E),I=R;default:if(N<1){if(L==123)--N;else if(L==125&&N++==0&&s_()==125)continue}switch(E+=Ya(L),L*N){case 38:B=f>0?1:(E+="\f",-1);break;case 44:l[h++]=(pt(E)-1)*B,B=1;break;case 64:vn()===45&&(E+=Lo(ct())),_=vn(),f=p=pt(F=E+=u_(ei())),L++;break;case 45:R===45&&pt(E)==2&&(N=0)}}return i}function lu(n,e,t,r,s,i,a,l,u,h,f,p){for(var _=s-1,I=s===0?i:[""],R=bd(I),N=0,D=0,B=0;N<r;++N)for(var L=0,F=Yn(n,_+1,_=Sd(D=a[N])),W=n;L<R;++L)(W=Rd(D>0?I[L]+" "+F:G(F,/&\f/g,I[L])))&&(u[B++]=W);return $i(n,e,t,s===0?Bi:l,u,h,f,p)}function d_(n,e,t,r){return $i(n,e,t,Ad,Ya(r_()),Yn(n,2,-2),0,r)}function cu(n,e,t,r,s){return $i(n,e,t,Qa,Yn(n,0,r),Yn(n,r+1,-1),r,s)}function kd(n,e,t){switch(t_(n,e)){case 5103:return ne+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+n+n;case 4789:return Gr+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+n+Gr+n+ce+n+n;case 5936:switch(Se(n,e+11)){case 114:return ne+n+ce+G(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ne+n+ce+G(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ne+n+ce+G(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ne+n+ce+n+n;case 6165:return ne+n+ce+"flex-"+n+n;case 5187:return ne+n+G(n,/(\w+).+(:[^]+)/,ne+"box-$1$2"+ce+"flex-$1$2")+n;case 5443:return ne+n+ce+"flex-item-"+G(n,/flex-|-self/g,"")+(St(n,/flex-|baseline/)?"":ce+"grid-row-"+G(n,/flex-|-self/g,""))+n;case 4675:return ne+n+ce+"flex-line-pack"+G(n,/align-content|flex-|-self/g,"")+n;case 5548:return ne+n+ce+G(n,"shrink","negative")+n;case 5292:return ne+n+ce+G(n,"basis","preferred-size")+n;case 6060:return ne+"box-"+G(n,"-grow","")+ne+n+ce+G(n,"grow","positive")+n;case 4554:return ne+G(n,/([^-])(transform)/g,"$1"+ne+"$2")+n;case 6187:return G(G(G(n,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),n,"")+n;case 5495:case 3959:return G(n,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return G(G(n,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+n+n;case 4200:if(!St(n,/flex-|baseline/))return ce+"grid-column-align"+Yn(n,e)+n;break;case 2592:case 3360:return ce+G(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,s){return e=s,St(r.props,/grid-\w+-end/)})?~Zs(n+(t=t[e].value),"span",0)?n:ce+G(n,"-start","")+n+ce+"grid-row-span:"+(~Zs(t,"span",0)?St(t,/\d+/):+St(t,/\d+/)-+St(n,/\d+/))+";":ce+G(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return St(r.props,/grid-\w+-start/)})?n:ce+G(G(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return G(n,/(.+)-inline(.+)/,ne+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pt(n)-1-e>6)switch(Se(n,e+1)){case 109:if(Se(n,e+4)!==45)break;case 102:return G(n,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+Gr+(Se(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Zs(n,"stretch",0)?kd(G(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return G(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,i,a,l,u,h){return ce+s+":"+i+h+(a?ce+s+"-span:"+(l?u:+u-+i)+h:"")+n});case 4949:if(Se(n,e+6)===121)return G(n,":",":"+ne)+n;break;case 6444:switch(Se(n,Se(n,14)===45?18:11)){case 120:return G(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+(Se(n,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+ce+"$2box$3")+n;case 100:return G(n,":",":"+ce)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(n,"scroll-","scroll-snap-")+n}return n}function fi(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function f_(n,e,t,r){switch(n.type){case e_:if(n.children.length)break;case Zg:case Qa:return n.return=n.return||n.value;case Ad:return"";case Cd:return n.return=n.value+"{"+fi(n.children,r)+"}";case Bi:if(!pt(n.value=n.props.join(",")))return""}return pt(t=fi(n.children,r))?n.return=n.value+"{"+t+"}":""}function p_(n){var e=bd(n);return function(t,r,s,i){for(var a="",l=0;l<e;l++)a+=n[l](t,r,s,i)||"";return a}}function m_(n){return function(e){e.root||(e=e.return)&&n(e)}}function g_(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Qa:n.return=kd(n.value,n.length,t);return;case Cd:return fi([jt(n,{value:G(n.value,"@","@"+ne)})],r);case Bi:if(n.length)return n_(t=n.props,function(s){switch(St(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ln(jt(n,{props:[G(s,/:(read-\w+)/,":"+Gr+"$1")]})),Ln(jt(n,{props:[s]})),oa(n,{props:au(t,r)});break;case"::placeholder":Ln(jt(n,{props:[G(s,/:(plac\w+)/,":"+ne+"input-$1")]})),Ln(jt(n,{props:[G(s,/:(plac\w+)/,":"+Gr+"$1")]})),Ln(jt(n,{props:[G(s,/:(plac\w+)/,ce+"input-$1")]})),Ln(jt(n,{props:[s]})),oa(n,{props:au(t,r)});break}return""})}}var __={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ye={},Jn=typeof process<"u"&&Ye!==void 0&&(Ye.REACT_APP_SC_ATTR||Ye.SC_ATTR)||"data-styled",Nd="active",Dd="data-styled-version",zi="6.1.17",Xa=`/*!sc*/
`,pi=typeof window<"u"&&"HTMLElement"in window,y_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ye.REACT_APP_SC_DISABLE_SPEEDY!==""?Ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ye!==void 0&&Ye.SC_DISABLE_SPEEDY!==void 0&&Ye.SC_DISABLE_SPEEDY!==""&&Ye.SC_DISABLE_SPEEDY!=="false"&&Ye.SC_DISABLE_SPEEDY),Wi=Object.freeze([]),Zn=Object.freeze({});function v_(n,e,t){return t===void 0&&(t=Zn),n.theme!==t.theme&&n.theme||e||t.theme}var xd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),E_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,T_=/(^-|-$)/g;function uu(n){return n.replace(E_,"-").replace(T_,"")}var w_=/(a)(d)/gi,$s=52,hu=function(n){return String.fromCharCode(n+(n>25?39:97))};function ca(n){var e,t="";for(e=Math.abs(n);e>$s;e=e/$s|0)t=hu(e%$s)+t;return(hu(e%$s)+t).replace(w_,"$1-$2")}var Fo,Vd=5381,qn=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Od=function(n){return qn(Vd,n)};function I_(n){return ca(Od(n)>>>0)}function A_(n){return n.displayName||n.name||"Component"}function Uo(n){return typeof n=="string"&&!0}var Md=typeof Symbol=="function"&&Symbol.for,Ld=Md?Symbol.for("react.memo"):60115,C_=Md?Symbol.for("react.forward_ref"):60112,S_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},R_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b_=((Fo={})[C_]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fo[Ld]=Fd,Fo);function du(n){return("type"in(e=n)&&e.type.$$typeof)===Ld?Fd:"$$typeof"in n?b_[n.$$typeof]:S_;var e}var P_=Object.defineProperty,k_=Object.getOwnPropertyNames,fu=Object.getOwnPropertySymbols,N_=Object.getOwnPropertyDescriptor,D_=Object.getPrototypeOf,pu=Object.prototype;function Ud(n,e,t){if(typeof e!="string"){if(pu){var r=D_(e);r&&r!==pu&&Ud(n,r,t)}var s=k_(e);fu&&(s=s.concat(fu(e)));for(var i=du(n),a=du(e),l=0;l<s.length;++l){var u=s[l];if(!(u in R_||t&&t[u]||a&&u in a||i&&u in i)){var h=N_(e,u);try{P_(n,u,h)}catch{}}}}return n}function er(n){return typeof n=="function"}function Ja(n){return typeof n=="object"&&"styledComponentId"in n}function gn(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function mu(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function ts(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ua(n,e,t){if(t===void 0&&(t=!1),!t&&!ts(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=ua(n[r],e[r]);else if(ts(e))for(var r in e)n[r]=ua(n[r],e[r]);return n}function Za(n,e){Object.defineProperty(n,"toString",{value:e})}function ps(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var x_=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,i=s;e>=i;)if((i<<=1)<0)throw ps(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=s;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(e+1),u=(a=0,t.length);a<u;a++)this.tag.insertRule(l,t[a])&&(this.groupSizes[e]++,l++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),s=r+t;this.groupSizes[e]=0;for(var i=r;i<s;i++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],s=this.indexOfGroup(e),i=s+r,a=s;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(Xa);return t},n}(),ni=new Map,mi=new Map,ri=1,qs=function(n){if(ni.has(n))return ni.get(n);for(;mi.has(ri);)ri++;var e=ri++;return ni.set(n,e),mi.set(e,n),e},V_=function(n,e){ri=e+1,ni.set(n,e),mi.set(e,n)},O_="style[".concat(Jn,"][").concat(Dd,'="').concat(zi,'"]'),M_=new RegExp("^".concat(Jn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),L_=function(n,e,t){for(var r,s=t.split(","),i=0,a=s.length;i<a;i++)(r=s[i])&&n.registerName(e,r)},F_=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Xa),s=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var u=l.match(M_);if(u){var h=0|parseInt(u[1],10),f=u[2];h!==0&&(V_(f,h),L_(n,f,u[3]),n.getTag().insertRules(h,s)),s.length=0}else s.push(l)}}},gu=function(n){for(var e=document.querySelectorAll(O_),t=0,r=e.length;t<r;t++){var s=e[t];s&&s.getAttribute(Jn)!==Nd&&(F_(n,s),s.parentNode&&s.parentNode.removeChild(s))}};function U_(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bd=function(n){var e=document.head,t=n||e,r=document.createElement("style"),s=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Jn,"]")));return u[u.length-1]}(t),i=s!==void 0?s.nextSibling:null;r.setAttribute(Jn,Nd),r.setAttribute(Dd,zi);var a=U_();return a&&r.setAttribute("nonce",a),t.insertBefore(r,i),r},B_=function(){function n(e){this.element=Bd(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,s=0,i=r.length;s<i;s++){var a=r[s];if(a.ownerNode===t)return a}throw ps(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),j_=function(){function n(e){this.element=Bd(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),$_=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),_u=pi,q_={isServer:!pi,useCSSOMInjection:!y_},jd=function(){function n(e,t,r){e===void 0&&(e=Zn),t===void 0&&(t={});var s=this;this.options=et(et({},q_),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&pi&&_u&&(_u=!1,gu(this)),Za(this,function(){return function(i){for(var a=i.getTag(),l=a.length,u="",h=function(p){var _=function(B){return mi.get(B)}(p);if(_===void 0)return"continue";var I=i.names.get(_),R=a.getGroup(p);if(I===void 0||!I.size||R.length===0)return"continue";var N="".concat(Jn,".g").concat(p,'[id="').concat(_,'"]'),D="";I!==void 0&&I.forEach(function(B){B.length>0&&(D+="".concat(B,","))}),u+="".concat(R).concat(N,'{content:"').concat(D,'"}').concat(Xa)},f=0;f<l;f++)h(f);return u}(s)})}return n.registerId=function(e){return qs(e)},n.prototype.rehydrate=function(){!this.server&&pi&&gu(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(et(et({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,s=t.target;return t.isServer?new $_(s):r?new B_(s):new j_(s)}(this.options),new x_(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(qs(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(qs(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(qs(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),z_=/&/g,W_=/^\s*\/\/.*$/gm;function $d(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=$d(t.children,e)),t})}function G_(n){var e,t,r,s=Zn,i=s.options,a=i===void 0?Zn:i,l=s.plugins,u=l===void 0?Wi:l,h=function(_,I,R){return R.startsWith(t)&&R.endsWith(t)&&R.replaceAll(t,"").length>0?".".concat(e):_},f=u.slice();f.push(function(_){_.type===Bi&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(z_,t).replace(r,h))}),a.prefix&&f.push(g_),f.push(f_);var p=function(_,I,R,N){I===void 0&&(I=""),R===void 0&&(R=""),N===void 0&&(N="&"),e=N,t=I,r=new RegExp("\\".concat(t,"\\b"),"g");var D=_.replace(W_,""),B=h_(R||I?"".concat(R," ").concat(I," { ").concat(D," }"):D);a.namespace&&(B=$d(B,a.namespace));var L=[];return fi(B,p_(f.concat(m_(function(F){return L.push(F)})))),L};return p.hash=u.length?u.reduce(function(_,I){return I.name||ps(15),qn(_,I.name)},Vd).toString():"",p}var H_=new jd,ha=G_(),qd=Qn.createContext({shouldForwardProp:void 0,styleSheet:H_,stylis:ha});qd.Consumer;Qn.createContext(void 0);function yu(){return Te.useContext(qd)}var K_=function(){function n(e,t){var r=this;this.inject=function(s,i){i===void 0&&(i=ha);var a=r.name+i.hash;s.hasNameForId(r.id,a)||s.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Za(this,function(){throw ps(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=ha),this.name+e.hash},n}(),Q_=function(n){return n>="A"&&n<="Z"};function vu(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;Q_(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var zd=function(n){return n==null||n===!1||n===""},Wd=function(n){var e,t,r=[];for(var s in n){var i=n[s];n.hasOwnProperty(s)&&!zd(i)&&(Array.isArray(i)&&i.isCss||er(i)?r.push("".concat(vu(s),":"),i,";"):ts(i)?r.push.apply(r,di(di(["".concat(s," {")],Wd(i),!1),["}"],!1)):r.push("".concat(vu(s),": ").concat((e=s,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in __||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function En(n,e,t,r){if(zd(n))return[];if(Ja(n))return[".".concat(n.styledComponentId)];if(er(n)){if(!er(i=n)||i.prototype&&i.prototype.isReactComponent||!e)return[n];var s=n(e);return En(s,e,t,r)}var i;return n instanceof K_?t?(n.inject(t,r),[n.getName(r)]):[n]:ts(n)?Wd(n):Array.isArray(n)?Array.prototype.concat.apply(Wi,n.map(function(a){return En(a,e,t,r)})):[n.toString()]}function Y_(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(er(t)&&!Ja(t))return!1}return!0}var X_=Od(zi),J_=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Y_(e),this.componentId=t,this.baseHash=qn(X_,t),this.baseStyle=r,jd.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))s=gn(s,this.staticRulesId);else{var i=mu(En(this.rules,e,t,r)),a=ca(qn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,l)}s=gn(s,a),this.staticRulesId=a}else{for(var u=qn(this.baseHash,r.hash),h="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")h+=p;else if(p){var _=mu(En(p,e,t,r));u=qn(u,_+f),h+=_}}if(h){var I=ca(u>>>0);t.hasNameForId(this.componentId,I)||t.insertRules(this.componentId,I,r(h,".".concat(I),void 0,this.componentId)),s=gn(s,I)}}return s},n}(),Gd=Qn.createContext(void 0);Gd.Consumer;var Bo={};function Z_(n,e,t){var r=Ja(n),s=n,i=!Uo(n),a=e.attrs,l=a===void 0?Wi:a,u=e.componentId,h=u===void 0?function(W,ie){var $=typeof W!="string"?"sc":uu(W);Bo[$]=(Bo[$]||0)+1;var E="".concat($,"-").concat(I_(zi+$+Bo[$]));return ie?"".concat(ie,"-").concat(E):E}(e.displayName,e.parentComponentId):u,f=e.displayName,p=f===void 0?function(W){return Uo(W)?"styled.".concat(W):"Styled(".concat(A_(W),")")}(n):f,_=e.displayName&&e.componentId?"".concat(uu(e.displayName),"-").concat(e.componentId):e.componentId||h,I=r&&s.attrs?s.attrs.concat(l).filter(Boolean):l,R=e.shouldForwardProp;if(r&&s.shouldForwardProp){var N=s.shouldForwardProp;if(e.shouldForwardProp){var D=e.shouldForwardProp;R=function(W,ie){return N(W,ie)&&D(W,ie)}}else R=N}var B=new J_(t,_,r?s.componentStyle:void 0);function L(W,ie){return function($,E,g){var v=$.attrs,T=$.componentStyle,w=$.defaultProps,C=$.foldedComponentIds,y=$.styledComponentId,st=$.target,sn=Qn.useContext(Gd),po=yu(),vt=$.shouldForwardProp||po.shouldForwardProp,Mt=v_(E,sn,w)||Zn,Ke=function(dt,ln,Et){for(var cn,Tt=et(et({},ln),{className:void 0,theme:Et}),Lt=0;Lt<dt.length;Lt+=1){var wt=er(cn=dt[Lt])?cn(Tt):cn;for(var Je in wt)Tt[Je]=Je==="className"?gn(Tt[Je],wt[Je]):Je==="style"?et(et({},Tt[Je]),wt[Je]):wt[Je]}return ln.className&&(Tt.className=gn(Tt.className,ln.className)),Tt}(v,E,Mt),on=Ke.as||st,an={};for(var Pe in Ke)Ke[Pe]===void 0||Pe[0]==="$"||Pe==="as"||Pe==="theme"&&Ke.theme===Mt||(Pe==="forwardedAs"?an.as=Ke.forwardedAs:vt&&!vt(Pe,on)||(an[Pe]=Ke[Pe]));var Ee=function(dt,ln){var Et=yu(),cn=dt.generateAndInjectStyles(ln,Et.styleSheet,Et.stylis);return cn}(T,Ke),Ir=gn(C,y);return Ee&&(Ir+=" "+Ee),Ke.className&&(Ir+=" "+Ke.className),an[Uo(on)&&!xd.has(on)?"class":"className"]=Ir,g&&(an.ref=g),Te.createElement(on,an)}(F,W,ie)}L.displayName=p;var F=Qn.forwardRef(L);return F.attrs=I,F.componentStyle=B,F.displayName=p,F.shouldForwardProp=R,F.foldedComponentIds=r?gn(s.foldedComponentIds,s.styledComponentId):"",F.styledComponentId=_,F.target=r?s.target:n,Object.defineProperty(F,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=r?function(ie){for(var $=[],E=1;E<arguments.length;E++)$[E-1]=arguments[E];for(var g=0,v=$;g<v.length;g++)ua(ie,v[g],!0);return ie}({},s.defaultProps,W):W}}),Za(F,function(){return".".concat(F.styledComponentId)}),i&&Ud(F,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),F}function Eu(n,e){for(var t=[n[0]],r=0,s=e.length;r<s;r+=1)t.push(e[r],n[r+1]);return t}var Tu=function(n){return Object.assign(n,{isCss:!0})};function ey(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(er(n)||ts(n))return Tu(En(Eu(Wi,di([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?En(r):Tu(En(Eu(r,e)))}function da(n,e,t){if(t===void 0&&(t=Zn),!e)throw ps(1,e);var r=function(s){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return n(e,t,ey.apply(void 0,di([s],i,!1)))};return r.attrs=function(s){return da(n,e,et(et({},t),{attrs:Array.prototype.concat(t.attrs,s).filter(Boolean)}))},r.withConfig=function(s){return da(n,e,et(et({},t),s))},r}var Hd=function(n){return da(Z_,n)},K=Hd;xd.forEach(function(n){K[n]=Hd(n)});const ty=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,si=K.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(0, 240, 255, 0.4);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(0, 240, 255, 0.3);
  }

  h2 {
    color: var(--pokka-cyan);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`,ny=K(si)`
  opacity: 0.7;
`,jo=K(Js)`
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  color: var(--pokka-cyan);
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 1px solid var(--pokka-cyan);

  &:hover {
    background: rgba(0, 240, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
  }
`,Kd=()=>b.jsxs(ty,{children:[b.jsxs(si,{children:[b.jsx("img",{src:"/assets/images/pokka_header.png",alt:"PokkaMan"}),b.jsx("h2",{children:"PokkaMan"}),b.jsx("p",{children:"Guide Pokka through the maze, collect dots, and avoid ghosts in this classic arcade-style game!"}),b.jsx(jo,{to:"/games/pokka-man",children:"Play Now"})]}),b.jsxs(si,{children:[b.jsx("img",{src:"/assets/images/pokka_header.png",alt:"Pokka's Falling Blocks"}),b.jsx("h2",{children:"Pokka's Falling Blocks"}),b.jsx("p",{children:"Stack and clear blocks in this addictive puzzle game. How high can you score?"}),b.jsx(jo,{to:"/games/falling-blocks",children:"Play Now"})]}),b.jsxs(si,{children:[b.jsx("img",{src:"/assets/images/pokka_header.png",alt:"Pokka's Snakes"}),b.jsx("h2",{children:"Pokka's Snakes"}),b.jsx("p",{children:"A modern take on the classic snake game with 3D graphics, power-ups, and special effects!"}),b.jsx(jo,{to:"/games/snakes",children:"Play Now"})]}),b.jsxs(ny,{children:[b.jsx("img",{src:"/assets/images/pokka_header.png",alt:"Coming Soon"}),b.jsx("h2",{children:"More Games Coming Soon!"}),b.jsx("p",{children:"Stay tuned for more exciting games coming to Pokka's Arcade Hub."})]})]});/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sy=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),wu=n=>{const e=sy(n);return e.charAt(0).toUpperCase()+e.slice(1)},Qd=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim(),iy=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Te.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:a,...l},u)=>Te.createElement("svg",{ref:u,...oy,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Qd("lucide",s),...!i&&!iy(l)&&{"aria-hidden":"true"},...l},[...a.map(([h,f])=>Te.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=(n,e)=>{const t=Te.forwardRef(({className:r,...s},i)=>Te.createElement(ay,{ref:i,iconNode:e,className:Qd(`lucide-${ry(wu(n))}`,`lucide-${n}`,r),...s}));return t.displayName=wu(n),t};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],cy=el("circle-alert",ly);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],hy=el("refresh-cw",uy);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Iu=el("trending-up",dy),Au="fc7dd8de2b984300bf9ec1338d19641e",fy="https://newsapi.org/v2/everything",py=["Binance","BNB Chain","PancakeSwap","DeFi on BNB","Web3 gaming on BNB","AIAI Society","blockchain","cryptocurrency","crypto","DeFi","Web3"],my=["coindesk.com","cointelegraph.com","theblock.co","decrypt.co","cryptonews.com","binance.com"],gy=async(n,e=3)=>{for(let t=0;t<e;t++)try{const r=await fetch(n,{headers:{Accept:"application/json","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"}});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return r}catch(r){if(t===e-1)throw r;await new Promise(s=>setTimeout(s,1e3*(t+1)))}throw new Error("Max retries reached")},_y=async()=>{try{const n=py.join(" OR "),e=my.join(","),r=await(await gy(`${fy}?q=${encodeURIComponent(n)}&domains=${encodeURIComponent(e)}&sortBy=publishedAt&language=en&pageSize=20&apiKey=${Au}`)).json();if(!r.articles||r.articles.length===0)throw new Error("No articles found");return r.articles.map(i=>({title:i.title,link:i.url,description:i.description,pubDate:i.publishedAt})).sort((i,a)=>new Date(a.pubDate).getTime()-new Date(i.pubDate).getTime())}catch(n){return console.error("Error fetching news:",n),[{title:"Binance Launches New Web3 Gaming Platform",link:"https://example.com",description:"Binance announces new gaming platform on BNB Chain",pubDate:new Date().toISOString()},{title:"PancakeSwap V3 Goes Live on BNB Chain",link:"https://example.com",description:"Major upgrade brings new features to DeFi on BNB",pubDate:new Date().toISOString()},{title:"AIAI Society Partners with Binance",link:"https://example.com",description:"New partnership aims to boost Web3 gaming on BNB",pubDate:new Date().toISOString()}]}},yy=K.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'One Little Font', sans-serif;
`,vy=K.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--pokka-white);
    font-family: 'One Little Font', sans-serif;
  }

  p {
    font-size: 1.2rem;
    color: var(--pokka-cyan);
    font-family: 'One Little Font', sans-serif;
  }
`,Ey=K.p`
  color: var(--pokka-orange) !important;
  font-style: italic;
  margin-top: 1rem;
  font-family: 'One Little Font', sans-serif;
`,Ty=K.section`
  margin: 4rem 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;

  h2 {
    color: var(--pokka-cyan);
    font-size: 2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: 'One Little Font', sans-serif;
  }
`,wy=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Iy=K.article`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  font-family: 'One Little Font', sans-serif;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 1rem;
    font-family: 'One Little Font', sans-serif;

    a {
      color: var(--pokka-cyan);
      text-decoration: none;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  p {
    color: var(--pokka-white);
    margin-bottom: 1rem;
    font-family: 'One Little Font', sans-serif;
  }

  time {
    color: var(--pokka-orange);
    font-size: 0.9rem;
    font-family: 'One Little Font', sans-serif;
  }
`,Ay=K.section`
  margin: 4rem 0;

  h2 {
    color: var(--pokka-cyan);
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-family: 'One Little Font', sans-serif;
  }
`,Cy=K.section`
  margin: 4rem 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;

  h2 {
    color: var(--pokka-cyan);
    font-size: 2rem;
    margin-bottom: 2rem;
    font-family: 'One Little Font', sans-serif;
  }
`,Sy=K.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,$o=K.div`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  font-family: 'One Little Font', sans-serif;

  h3 {
    color: var(--pokka-cyan);
    margin-bottom: 1rem;
    font-family: 'One Little Font', sans-serif;
  }

  .value {
    font-size: 1.5rem;
    color: var(--pokka-white);
    margin-bottom: 0.5rem;
    font-family: 'One Little Font', sans-serif;
  }

  .trend {
    color: var(--pokka-orange);
    font-size: 0.9rem;
    font-family: 'One Little Font', sans-serif;
  }
`,Ry=K.section`
  margin: 4rem 0;
  padding: 4rem;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(255, 107, 53, 0.1));
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;
  text-align: center;

  h2 {
    color: var(--pokka-cyan);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'One Little Font', sans-serif;
  }

  p {
    color: var(--pokka-white);
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-family: 'One Little Font', sans-serif;
  }
`,by=K.footer`
  margin-top: 4rem;
  padding: 2rem;
  text-align: center;
  color: var(--pokka-white);
  opacity: 0.7;
  font-family: 'One Little Font', sans-serif;
`,Py=K.button`
  background: none;
  border: none;
  color: var(--pokka-cyan);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.3s ease;
  font-family: 'One Little Font', sans-serif;

  &:hover {
    transform: rotate(180deg);
  }
`,ky=()=>{const[n,e]=Te.useState([]),[t,r]=Te.useState(!0),[s,i]=Te.useState(6),a=async()=>{r(!0);try{const u=await _y();e(u),i(6)}catch(u){console.error("Error fetching news:",u),e([{title:"Binance Launches New Web3 Gaming Platform",link:"https://example.com",description:"Binance announces new gaming platform on BNB Chain",pubDate:"2024-03-15"},{title:"PancakeSwap V3 Goes Live on BNB Chain",link:"https://example.com",description:"Major upgrade brings new features to DeFi on BNB",pubDate:"2024-03-14"},{title:"AIAI Society Partners with Binance",link:"https://example.com",description:"New partnership aims to boost Web3 gaming on BNB",pubDate:"2024-03-13"}]),i(6)}finally{r(!1)}};Te.useEffect(()=>{a()},[]);const l=()=>{i(u=>u+6)};return b.jsxs(yy,{children:[b.jsxs(vy,{children:[b.jsx("h1",{children:"Welcome to Pokka's Arcade Hub"}),b.jsx("p",{children:"Play exciting games and earn rewards!"}),b.jsx(Ey,{children:"Note: Not all games are optimized for mobile devices. For the best experience, please play on desktop."})]}),b.jsxs(Ty,{children:[b.jsxs("h2",{children:["☕ Morning Coffee News",b.jsx(Py,{onClick:a,disabled:t,children:b.jsx(hy,{size:20})})]}),b.jsx(wy,{children:t?b.jsx("p",{children:"Loading news..."}):n.slice(0,s).map((u,h)=>b.jsxs(Iy,{children:[b.jsx("h3",{children:b.jsx("a",{href:u.link,target:"_blank",rel:"noopener noreferrer",children:u.title})}),b.jsx("p",{children:u.description}),b.jsx("time",{children:new Date(u.pubDate).toLocaleDateString()})]},h))}),!t&&s<n.length&&b.jsx("div",{style:{textAlign:"center",marginTop:"2rem"},children:b.jsx("button",{onClick:l,style:{background:"var(--pokka-cyan)",color:"black",border:"none",borderRadius:"8px",padding:"0.75rem 2rem",fontSize:"1.1rem",fontFamily:"'One Little Font', sans-serif",fontWeight:"bold",cursor:"pointer",transition:"background 0.2s"},children:"Show More"})})]}),b.jsxs(Cy,{children:[b.jsx("h2",{children:"📈 Crypto Dashboard"}),b.jsxs(Sy,{children:[b.jsxs($o,{children:[b.jsx("h3",{children:"$AIAI"}),b.jsx("div",{className:"value",children:"$0.000123"}),b.jsxs("div",{className:"trend",children:[b.jsx(Iu,{size:16})," +2.5% (24h)"]})]}),b.jsxs($o,{children:[b.jsx("h3",{children:"$POKKA"}),b.jsx("div",{className:"value",children:"$0.000456"}),b.jsxs("div",{className:"trend",children:[b.jsx(Iu,{size:16})," +1.8% (24h)"]})]}),b.jsxs($o,{children:[b.jsx("h3",{children:"BNB Gas"}),b.jsx("div",{className:"value",children:"5 Gwei"}),b.jsxs("div",{className:"trend",children:[b.jsx(cy,{size:16})," Low"]})]})]})]}),b.jsxs(Ry,{children:[b.jsx("h2",{children:"🚀 Ready to Train Your Own AI Twin?"}),b.jsx("p",{children:"Let Pokka handle your memes, posts, and even your own memecoin."}),b.jsx("a",{href:"https://aiai.now/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"1rem 2rem",background:"var(--pokka-cyan)",color:"black",textDecoration:"none",borderRadius:"8px",fontSize:"1.2rem",fontWeight:"bold",transition:"all 0.3s ease"},onMouseOver:u=>{u.currentTarget.style.transform="translateY(-2px)",u.currentTarget.style.boxShadow="0 0 20px rgba(0, 240, 255, 0.4)"},onMouseOut:u=>{u.currentTarget.style.transform="translateY(0)",u.currentTarget.style.boxShadow="none"},children:"Create My Twin Now"})]}),b.jsxs(Ay,{children:[b.jsx("h2",{children:"Featured Games"}),b.jsx(Kd,{})]}),b.jsx(by,{children:"Made with ❤️ by Pokka & AIAI Society · Follow @Pokka_AIAI"})]})},Ny=K.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Dy=K.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--pokka-white);
  }

  p {
    font-size: 1.2rem;
    color: var(--pokka-cyan);
  }
`,Cu=()=>b.jsxs(Ny,{children:[b.jsxs(Dy,{children:[b.jsx("h1",{children:"All Games"}),b.jsx("p",{children:"Choose a game to start playing and earning rewards!"})]}),b.jsx(Kd,{})]}),Yd=[{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],type:"function",stateMutability:"view"}],xy=()=>{};var Su={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(n,e){if(!n)throw fr(e)},fr=function(n){return new Error("Firebase Database ("+Xd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Vy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,I=h&63;u||(I=64,a||(_=64)),r.push(t[f],t[p],t[_],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Oy;const _=i<<2|l>>4;if(r.push(_),h!==64){const I=l<<4&240|h>>2;if(r.push(I),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Oy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zd=function(n){const e=Jd(n);return tl.encodeByteArray(e,!0)},gi=function(n){return Zd(n).replace(/\./g,"")},fa=function(n){try{return tl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n){return ef(void 0,n)}function ef(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ly(t)||(n[t]=ef(n[t],e[t]));return n}function Ly(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=()=>Fy().__FIREBASE_DEFAULTS__,By=()=>{if(typeof process>"u"||typeof Su>"u")return;const n=Su.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fa(n[1]);return e&&JSON.parse(e)},nl=()=>{try{return xy()||Uy()||By()||jy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$y=n=>{var e,t;return(t=(e=nl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},tf=n=>{const e=$y(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nf=()=>{var n;return(n=nl())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gi(JSON.stringify(t)),gi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function of(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sf())}function qy(){var n;const e=(n=nl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wy(){return Xd.NODE_ADMIN===!0}function Gy(){return!qy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hy(){try{return typeof indexedDB=="object"}catch{return!1}}function Ky(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="FirebaseError";class pr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Qy,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,af.prototype.create)}}class af{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Yy(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new pr(s,l,r)}}function Yy(n,e){return n.replace(Xy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n){return JSON.parse(n)}function Ne(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=ns(fa(i[0])||""),t=ns(fa(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},Jy=function(n){const e=lf(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Zy=function(n){const e=lf(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function tr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ru(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _i(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function rs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(bu(i)&&bu(a)){if(!rs(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function bu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)r[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const _=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(_<<1|_>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],a=this.chain_[2],l=this.chain_[3],u=this.chain_[4],h,f;for(let p=0;p<80;p++){p<40?p<20?(h=l^i&(a^l),f=1518500249):(h=i^a^l,f=1859775393):p<60?(h=i&a|l&(i|a),f=2400959708):(h=i^a^l,f=3395469782);const _=(s<<5|s>>>27)+h+u+f+r[p]&4294967295;u=l,l=a,a=(i<<30|i>>>2)&4294967295,i=s,s=_}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(i),a=0;break}}else for(;s<t;)if(i[a]=e[s],++a,++s,a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function nv(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,V(r<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(r)-56320;s=65536+(i<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Gi=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n){return n&&n._delegate?n._delegate:n}class nr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rl;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ov(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iv(n){return n===pn?void 0:n}function ov(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const lv={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},cv=Y.INFO,uv={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},hv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=uv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=cv,this._logHandler=hv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const dv=(n,e)=>e.some(t=>n instanceof t);let Pu,ku;function fv(){return Pu||(Pu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pv(){return ku||(ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cf=new WeakMap,pa=new WeakMap,uf=new WeakMap,qo=new WeakMap,il=new WeakMap;function mv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(qt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cf.set(t,n)}).catch(()=>{}),il.set(e,n),e}function gv(n){if(pa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});pa.set(n,e)}let ma={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||uf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _v(n){ma=n(ma)}function yv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(zo(this),e,...t);return uf.set(r,e.sort?e.sort():[e]),qt(r)}:pv().includes(n)?function(...e){return n.apply(zo(this),e),qt(cf.get(this))}:function(...e){return qt(n.apply(zo(this),e))}}function vv(n){return typeof n=="function"?yv(n):(n instanceof IDBTransaction&&gv(n),dv(n,fv())?new Proxy(n,ma):n)}function qt(n){if(n instanceof IDBRequest)return mv(n);if(qo.has(n))return qo.get(n);const e=vv(n);return e!==n&&(qo.set(n,e),il.set(e,n)),e}const zo=n=>il.get(n);function Ev(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=qt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(qt(a.result),u.oldVersion,u.newVersion,qt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Tv=["get","getKey","getAll","getAllKeys","count"],wv=["put","add","delete","clear"],Wo=new Map;function Nu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wo.get(e))return Wo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=wv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tv.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return Wo.set(e,i),i}_v(n=>({...n,get:(e,t,r)=>Nu(e,t)||n.get(e,t,r),has:(e,t)=>!!Nu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Av(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Av(n){const e=n.getComponent();return e?.type==="VERSION"}const ga="@firebase/app",Du="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new sl("@firebase/app"),Cv="@firebase/app-compat",Sv="@firebase/analytics-compat",Rv="@firebase/analytics",bv="@firebase/app-check-compat",Pv="@firebase/app-check",kv="@firebase/auth",Nv="@firebase/auth-compat",Dv="@firebase/database",xv="@firebase/data-connect",Vv="@firebase/database-compat",Ov="@firebase/functions",Mv="@firebase/functions-compat",Lv="@firebase/installations",Fv="@firebase/installations-compat",Uv="@firebase/messaging",Bv="@firebase/messaging-compat",jv="@firebase/performance",$v="@firebase/performance-compat",qv="@firebase/remote-config",zv="@firebase/remote-config-compat",Wv="@firebase/storage",Gv="@firebase/storage-compat",Hv="@firebase/firestore",Kv="@firebase/vertexai",Qv="@firebase/firestore-compat",Yv="firebase",Xv="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="[DEFAULT]",Jv={[ga]:"fire-core",[Cv]:"fire-core-compat",[Rv]:"fire-analytics",[Sv]:"fire-analytics-compat",[Pv]:"fire-app-check",[bv]:"fire-app-check-compat",[kv]:"fire-auth",[Nv]:"fire-auth-compat",[Dv]:"fire-rtdb",[xv]:"fire-data-connect",[Vv]:"fire-rtdb-compat",[Ov]:"fire-fn",[Mv]:"fire-fn-compat",[Lv]:"fire-iid",[Fv]:"fire-iid-compat",[Uv]:"fire-fcm",[Bv]:"fire-fcm-compat",[jv]:"fire-perf",[$v]:"fire-perf-compat",[qv]:"fire-rc",[zv]:"fire-rc-compat",[Wv]:"fire-gcs",[Gv]:"fire-gcs-compat",[Hv]:"fire-fst",[Qv]:"fire-fst-compat",[Kv]:"fire-vertex","fire-js":"fire-js",[Yv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Map,Zv=new Map,ya=new Map;function xu(n,e){try{n.container.addComponent(e)}catch(t){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ss(n){const e=n.name;if(ya.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;ya.set(e,n);for(const t of yi.values())xu(t,n);for(const t of Zv.values())xu(t,n);return!0}function hf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function df(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new af("app","Firebase",eE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=Xv;function pf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_a,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});if(t||(t=nf()),!t)throw zt.create("no-options");const i=yi.get(s);if(i){if(rs(t,i.options)&&rs(r,i.config))return i;throw zt.create("duplicate-app",{appName:s})}const a=new av(s);for(const u of ya.values())a.addComponent(u);const l=new tE(t,r,a);return yi.set(s,l),l}function mf(n=_a){const e=yi.get(n);if(!e&&n===_a&&nf())return pf();if(!e)throw zt.create("no-app",{appName:n});return e}function Wt(n,e,t){var r;let s=(r=Jv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(l.join(" "));return}ss(new nr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="firebase-heartbeat-database",rE=1,is="firebase-heartbeat-store";let Go=null;function gf(){return Go||(Go=Ev(nE,rE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(is)}catch(t){console.warn(t)}}}}).catch(n=>{throw zt.create("idb-open",{originalErrorMessage:n.message})})),Go}async function sE(n){try{const t=(await gf()).transaction(is),r=await t.objectStore(is).get(_f(n));return await t.done,r}catch(e){if(e instanceof pr)Nt.warn(e.message);else{const t=zt.create("idb-get",{originalErrorMessage:e?.message});Nt.warn(t.message)}}}async function Vu(n,e){try{const r=(await gf()).transaction(is,"readwrite");await r.objectStore(is).put(e,_f(n)),await r.done}catch(t){if(t instanceof pr)Nt.warn(t.message);else{const r=zt.create("idb-set",{originalErrorMessage:t?.message});Nt.warn(r.message)}}}function _f(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=1024,oE=30;class aE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ou();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>oE){const a=uE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ou(),{heartbeatsToSend:r,unsentEntries:s}=lE(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Nt.warn(t),""}}}function Ou(){return new Date().toISOString().substring(0,10)}function lE(n,e=iE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Mu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Mu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class cE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hy()?Ky().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mu(n){return gi(JSON.stringify({version:2,heartbeats:n})).length}function uE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){ss(new nr("platform-logger",e=>new Iv(e),"PRIVATE")),ss(new nr("heartbeat",e=>new aE(e),"PRIVATE")),Wt(ga,Du,n),Wt(ga,Du,"esm2017"),Wt("fire-js","")}hE("");var dE="firebase",fE="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(dE,fE,"app");var Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,yf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function v(){}v.prototype=g.prototype,E.D=g.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,w,C){for(var y=Array(arguments.length-2),st=2;st<arguments.length;st++)y[st-2]=arguments[st];return g.prototype[w].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,v){v||(v=0);var T=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)T[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;16>w;++w)T[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=E.g[0],v=E.g[1],w=E.g[2];var C=E.g[3],y=g+(C^v&(w^C))+T[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=C+(w^g&(v^w))+T[1]+3905402710&4294967295,C=g+(y<<12&4294967295|y>>>20),y=w+(v^C&(g^v))+T[2]+606105819&4294967295,w=C+(y<<17&4294967295|y>>>15),y=v+(g^w&(C^g))+T[3]+3250441966&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(C^v&(w^C))+T[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(w^g&(v^w))+T[5]+1200080426&4294967295,C=g+(y<<12&4294967295|y>>>20),y=w+(v^C&(g^v))+T[6]+2821735955&4294967295,w=C+(y<<17&4294967295|y>>>15),y=v+(g^w&(C^g))+T[7]+4249261313&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(C^v&(w^C))+T[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(w^g&(v^w))+T[9]+2336552879&4294967295,C=g+(y<<12&4294967295|y>>>20),y=w+(v^C&(g^v))+T[10]+4294925233&4294967295,w=C+(y<<17&4294967295|y>>>15),y=v+(g^w&(C^g))+T[11]+2304563134&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(C^v&(w^C))+T[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(w^g&(v^w))+T[13]+4254626195&4294967295,C=g+(y<<12&4294967295|y>>>20),y=w+(v^C&(g^v))+T[14]+2792965006&4294967295,w=C+(y<<17&4294967295|y>>>15),y=v+(g^w&(C^g))+T[15]+1236535329&4294967295,v=w+(y<<22&4294967295|y>>>10),y=g+(w^C&(v^w))+T[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^w&(g^v))+T[6]+3225465664&4294967295,C=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(C^g))+T[11]+643717713&4294967295,w=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(w^C))+T[0]+3921069994&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^C&(v^w))+T[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^w&(g^v))+T[10]+38016083&4294967295,C=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(C^g))+T[15]+3634488961&4294967295,w=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(w^C))+T[4]+3889429448&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^C&(v^w))+T[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^w&(g^v))+T[14]+3275163606&4294967295,C=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(C^g))+T[3]+4107603335&4294967295,w=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(w^C))+T[8]+1163531501&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(w^C&(v^w))+T[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^w&(g^v))+T[2]+4243563512&4294967295,C=g+(y<<9&4294967295|y>>>23),y=w+(g^v&(C^g))+T[7]+1735328473&4294967295,w=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(w^C))+T[12]+2368359562&4294967295,v=w+(y<<20&4294967295|y>>>12),y=g+(v^w^C)+T[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^w)+T[8]+2272392833&4294967295,C=g+(y<<11&4294967295|y>>>21),y=w+(C^g^v)+T[11]+1839030562&4294967295,w=C+(y<<16&4294967295|y>>>16),y=v+(w^C^g)+T[14]+4259657740&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^C)+T[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^w)+T[4]+1272893353&4294967295,C=g+(y<<11&4294967295|y>>>21),y=w+(C^g^v)+T[7]+4139469664&4294967295,w=C+(y<<16&4294967295|y>>>16),y=v+(w^C^g)+T[10]+3200236656&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^C)+T[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^w)+T[0]+3936430074&4294967295,C=g+(y<<11&4294967295|y>>>21),y=w+(C^g^v)+T[3]+3572445317&4294967295,w=C+(y<<16&4294967295|y>>>16),y=v+(w^C^g)+T[6]+76029189&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(v^w^C)+T[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^w)+T[12]+3873151461&4294967295,C=g+(y<<11&4294967295|y>>>21),y=w+(C^g^v)+T[15]+530742520&4294967295,w=C+(y<<16&4294967295|y>>>16),y=v+(w^C^g)+T[2]+3299628645&4294967295,v=w+(y<<23&4294967295|y>>>9),y=g+(w^(v|~C))+T[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~w))+T[7]+1126891415&4294967295,C=g+(y<<10&4294967295|y>>>22),y=w+(g^(C|~v))+T[14]+2878612391&4294967295,w=C+(y<<15&4294967295|y>>>17),y=v+(C^(w|~g))+T[5]+4237533241&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~C))+T[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~w))+T[3]+2399980690&4294967295,C=g+(y<<10&4294967295|y>>>22),y=w+(g^(C|~v))+T[10]+4293915773&4294967295,w=C+(y<<15&4294967295|y>>>17),y=v+(C^(w|~g))+T[1]+2240044497&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~C))+T[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~w))+T[15]+4264355552&4294967295,C=g+(y<<10&4294967295|y>>>22),y=w+(g^(C|~v))+T[6]+2734768916&4294967295,w=C+(y<<15&4294967295|y>>>17),y=v+(C^(w|~g))+T[13]+1309151649&4294967295,v=w+(y<<21&4294967295|y>>>11),y=g+(w^(v|~C))+T[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~w))+T[11]+3174756917&4294967295,C=g+(y<<10&4294967295|y>>>22),y=w+(g^(C|~v))+T[2]+718787259&4294967295,w=C+(y<<15&4294967295|y>>>17),y=v+(C^(w|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var v=g-this.blockSize,T=this.B,w=this.h,C=0;C<g;){if(w==0)for(;C<=v;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<g;)if(T[w++]=E.charCodeAt(C++),w==this.blockSize){s(this,T),w=0;break}}else for(;C<g;)if(T[w++]=E[C++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var v=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=v&255,v/=256;for(this.u(E),E=Array(16),g=v=0;4>g;++g)for(var T=0;32>T;T+=8)E[v++]=this.g[g]>>>T&255;return E};function i(E,g){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=g(E)}function a(E,g){this.h=g;for(var v=[],T=!0,w=E.length-1;0<=w;w--){var C=E[w]|0;T&&C==g||(v[w]=C,T=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?i(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return D(h(-E));for(var g=[],v=1,T=0;E>=v;T++)g[T]=E/v|0,v*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return D(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),T=p,w=0;w<E.length;w+=8){var C=Math.min(8,E.length-w),y=parseInt(E.substring(w,w+C),g);8>C?(C=h(Math.pow(g,C)),T=T.j(C).add(h(y))):(T=T.j(v),T=T.add(h(y)))}return T}var p=u(0),_=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-D(this).m();for(var E=0,g=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(N(this))return"-"+D(this).toString(E);for(var g=h(Math.pow(E,6)),v=this,T="";;){var w=W(v,g).g;v=B(v,w.j(g));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=w,R(v))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function N(E){return E.h==-1}n.l=function(E){return E=B(this,E),N(E)?-1:R(E)?0:1};function D(E){for(var g=E.g.length,v=[],T=0;T<g;T++)v[T]=~E.g[T];return new a(v,~E.h).add(_)}n.abs=function(){return N(this)?D(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],T=0,w=0;w<=g;w++){var C=T+(this.i(w)&65535)+(E.i(w)&65535),y=(C>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);T=y>>>16,C&=65535,y&=65535,v[w]=y<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function B(E,g){return E.add(D(g))}n.j=function(E){if(R(this)||R(E))return p;if(N(this))return N(E)?D(this).j(D(E)):D(D(this).j(E));if(N(E))return D(this.j(D(E)));if(0>this.l(I)&&0>E.l(I))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,v=[],T=0;T<2*g;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<E.g.length;w++){var C=this.i(T)>>>16,y=this.i(T)&65535,st=E.i(w)>>>16,sn=E.i(w)&65535;v[2*T+2*w]+=y*sn,L(v,2*T+2*w),v[2*T+2*w+1]+=C*sn,L(v,2*T+2*w+1),v[2*T+2*w+1]+=y*st,L(v,2*T+2*w+1),v[2*T+2*w+2]+=C*st,L(v,2*T+2*w+2)}for(T=0;T<g;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=g;T<2*g;T++)v[T]=0;return new a(v,0)};function L(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function F(E,g){this.g=E,this.h=g}function W(E,g){if(R(g))throw Error("division by zero");if(R(E))return new F(p,p);if(N(E))return g=W(D(E),g),new F(D(g.g),D(g.h));if(N(g))return g=W(E,D(g)),new F(D(g.g),g.h);if(30<E.g.length){if(N(E)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var v=_,T=g;0>=T.l(E);)v=ie(v),T=ie(T);var w=$(v,1),C=$(T,1);for(T=$(T,2),v=$(v,2);!R(T);){var y=C.add(T);0>=y.l(E)&&(w=w.add(v),C=y),T=$(T,1),v=$(v,1)}return g=B(E,w.j(g)),new F(w,g)}for(w=p;0<=E.l(g);){for(v=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(v),y=C.j(g);N(y)||0<y.l(E);)v-=T,C=h(v),y=C.j(g);R(C)&&(C=_),w=w.add(C),E=B(E,y)}return new F(w,E)}n.A=function(E){return W(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)&E.i(T);return new a(v,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)|E.i(T);return new a(v,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)^E.i(T);return new a(v,this.h^E.h)};function ie(E){for(var g=E.g.length+1,v=[],T=0;T<g;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(v,E.h)}function $(E,g){var v=g>>5;g%=32;for(var T=E.g.length-v,w=[],C=0;C<T;C++)w[C]=0<g?E.i(C+v)>>>g|E.i(C+v+1)<<32-g:E.i(C+v);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Gt=a}).apply(typeof Lu<"u"?Lu:typeof self<"u"?self:typeof window<"u"?window:{});var zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vf,$r,Ef,ii,va,Tf,wf,If;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof zs=="object"&&zs];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],c=c(m),c!=m&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var d=0,m=!1,A={next:function(){if(!m&&d<o.length){var S=d++;return{value:c(S,o[S]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function p(o,c,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function _(o,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function I(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function R(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,A,S){for(var x=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)x[ae-2]=arguments[ae];return c.prototype[A].apply(m,x)}}function N(o){const c=o.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=o[m];return d}return[]}function D(o,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const A=o.length||0,S=m.length||0;o.length=A+S;for(let x=0;x<S;x++)o[A+x]=m[x]}else o.push(m)}}class B{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var ie=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function $(o,c,d){for(const m in o)c.call(d,o[m],m,o)}function E(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function g(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let S=0;S<v.length;S++)d=v[S],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function w(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function C(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Ke;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class st{constructor(){this.h=this.g=null}add(c,d){const m=sn.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var sn=new B(()=>new po,o=>o.reset());class po{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,Mt=!1,Ke=new st,on=()=>{const o=l.Promise.resolve(void 0);vt=()=>{o.then(an)}};var an=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){C(d)}var c=sn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Mt=!1};function Pe(){this.s=this.s,this.C=this.C}Pe.prototype.s=!1,Pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Ir=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function dt(o,c){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(ie){e:{try{W(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ln[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&dt.aa.h.call(this)}}R(dt,Ee);var ln={2:"touch",3:"pen",4:"mouse"};dt.prototype.h=function(){dt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),cn=0;function Tt(o,c,d,m,A){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=A,this.key=++cn,this.da=this.fa=!1}function Lt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function wt(o){this.src=o,this.g={},this.h=0}wt.prototype.add=function(o,c,d,m,A){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var x=mo(o,c,m,A);return-1<x?(c=o[x],d||(c.fa=!1)):(c=new Tt(c,this.src,S,!!m,A),c.fa=d,o.push(c)),c};function Je(o,c){var d=c.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,c,void 0),S;(S=0<=A)&&Array.prototype.splice.call(m,A,1),S&&(Lt(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function mo(o,c,d,m){for(var A=0;A<o.length;++A){var S=o[A];if(!S.da&&S.listener==c&&S.capture==!!d&&S.ha==m)return A}return-1}var go="closure_lm_"+(1e6*Math.random()|0),_o={};function oc(o,c,d,m,A){if(Array.isArray(c)){for(var S=0;S<c.length;S++)oc(o,c[S],d,m,A);return null}return d=cc(d),o&&o[Et]?o.K(c,d,h(m)?!!m.capture:!1,A):fg(o,c,d,!1,m,A)}function fg(o,c,d,m,A,S){if(!c)throw Error("Invalid event type");var x=h(A)?!!A.capture:!!A,ae=vo(o);if(ae||(o[go]=ae=new wt(o)),d=ae.add(c,d,m,x,S),d.proxy)return d;if(m=pg(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Ir||(A=x),A===void 0&&(A=!1),o.addEventListener(c.toString(),m,A);else if(o.attachEvent)o.attachEvent(lc(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function pg(){function o(d){return c.call(o.src,o.listener,d)}const c=mg;return o}function ac(o,c,d,m,A){if(Array.isArray(c))for(var S=0;S<c.length;S++)ac(o,c[S],d,m,A);else m=h(m)?!!m.capture:!!m,d=cc(d),o&&o[Et]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],d=mo(S,d,m,A),-1<d&&(Lt(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=vo(o))&&(c=o.g[c.toString()],o=-1,c&&(o=mo(c,d,m,A)),(d=-1<o?c[o]:null)&&yo(d))}function yo(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Et])Je(c.i,o);else{var d=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(d,m,o.capture):c.detachEvent?c.detachEvent(lc(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=vo(c))?(Je(d,o),d.h==0&&(d.src=null,c[go]=null)):Lt(o)}}}function lc(o){return o in _o?_o[o]:_o[o]="on"+o}function mg(o,c){if(o.da)o=!0;else{c=new dt(c,this);var d=o.listener,m=o.ha||o.src;o.fa&&yo(o),o=d.call(m,c)}return o}function vo(o){return o=o[go],o instanceof wt?o:null}var Eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function cc(o){return typeof o=="function"?o:(o[Eo]||(o[Eo]=function(c){return o.handleEvent(c)}),o[Eo])}function Ve(){Pe.call(this),this.i=new wt(this),this.M=this,this.F=null}R(Ve,Pe),Ve.prototype[Et]=!0,Ve.prototype.removeEventListener=function(o,c,d,m){ac(this,o,c,d,m)};function qe(o,c){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new Ee(c,o);else if(c instanceof Ee)c.target=c.target||o;else{var A=c;c=new Ee(m,o),T(c,A)}if(A=!0,d)for(var S=d.length-1;0<=S;S--){var x=c.g=d[S];A=Cs(x,m,!0,c)&&A}if(x=c.g=o,A=Cs(x,m,!0,c)&&A,A=Cs(x,m,!1,c)&&A,d)for(S=0;S<d.length;S++)x=c.g=d[S],A=Cs(x,m,!1,c)&&A}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],m=0;m<d.length;m++)Lt(d[m]);delete o.g[c],o.h--}}this.F=null},Ve.prototype.K=function(o,c,d,m){return this.i.add(String(o),c,!1,d,m)},Ve.prototype.L=function(o,c,d,m){return this.i.add(String(o),c,!0,d,m)};function Cs(o,c,d,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,S=0;S<c.length;++S){var x=c[S];if(x&&!x.da&&x.capture==d){var ae=x.listener,ke=x.ha||x.src;x.fa&&Je(o.i,x),A=ae.call(ke,m)!==!1&&A}}return A&&!m.defaultPrevented}function uc(o,c,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function hc(o){o.g=uc(()=>{o.g=null,o.i&&(o.i=!1,hc(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class gg extends Pe{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:hc(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ar(o){Pe.call(this),this.h=o,this.g={}}R(Ar,Pe);var dc=[];function fc(o){$(o.g,function(c,d){this.g.hasOwnProperty(d)&&yo(c)},o),o.g={}}Ar.prototype.N=function(){Ar.aa.N.call(this),fc(this)},Ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var To=l.JSON.stringify,_g=l.JSON.parse,yg=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function wo(){}wo.prototype.h=null;function pc(o){return o.h||(o.h=o.i())}function mc(){}var Cr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Io(){Ee.call(this,"d")}R(Io,Ee);function Ao(){Ee.call(this,"c")}R(Ao,Ee);var un={},gc=null;function Ss(){return gc=gc||new Ve}un.La="serverreachability";function _c(o){Ee.call(this,un.La,o)}R(_c,Ee);function Sr(o){const c=Ss();qe(c,new _c(c))}un.STAT_EVENT="statevent";function yc(o,c){Ee.call(this,un.STAT_EVENT,o),this.stat=c}R(yc,Ee);function ze(o){const c=Ss();qe(c,new yc(c,o))}un.Ma="timingevent";function vc(o,c){Ee.call(this,un.Ma,o),this.size=c}R(vc,Ee);function Rr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function br(){this.g=!0}br.prototype.xa=function(){this.g=!1};function vg(o,c,d,m,A,S){o.info(function(){if(o.g)if(S)for(var x="",ae=S.split("&"),ke=0;ke<ae.length;ke++){var te=ae[ke].split("=");if(1<te.length){var Oe=te[0];te=te[1];var Me=Oe.split("_");x=2<=Me.length&&Me[1]=="type"?x+(Oe+"="+te+"&"):x+(Oe+"=redacted&")}}else x=null;else x=S;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+c+`
`+d+`
`+x})}function Eg(o,c,d,m,A,S,x){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+c+`
`+d+`
`+S+" "+x})}function xn(o,c,d,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+wg(o,d)+(m?" "+m:"")})}function Tg(o,c){o.info(function(){return"TIMEOUT: "+c})}br.prototype.info=function(){};function wg(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var x=1;x<A.length;x++)A[x]=""}}}}return To(d)}catch{return c}}var Rs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ec={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Co;function bs(){}R(bs,wo),bs.prototype.g=function(){return new XMLHttpRequest},bs.prototype.i=function(){return{}},Co=new bs;function Ft(o,c,d,m){this.j=o,this.i=c,this.l=d,this.R=m||1,this.U=new Ar(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tc}function Tc(){this.i=null,this.g="",this.h=!1}var wc={},So={};function Ro(o,c,d){o.L=1,o.v=Ds(It(c)),o.m=d,o.P=!0,Ic(o,null)}function Ic(o,c){o.F=Date.now(),Ps(o),o.A=It(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Lc(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Tc,o.g=tu(o.j,d?c:null,!o.m),0<o.O&&(o.M=new gg(_(o.Y,o,o.g),o.O)),c=o.U,d=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(dc[0]=A.toString()),A=dc);for(var S=0;S<A.length;S++){var x=oc(d,A[S],m||c.handleEvent,!1,c.h||c);if(!x)break;c.g[x.key]=x}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Sr(),vg(o.i,o.u,o.A,o.l,o.R,o.m)}Ft.prototype.ca=function(o){o=o.target;const c=this.M;c&&At(o)==3?c.j():this.Y(o)},Ft.prototype.Y=function(o){try{if(o==this.g)e:{const Me=At(this.g);var c=this.g.Ba();const Mn=this.g.Z();if(!(3>Me)&&(Me!=3||this.g&&(this.h.h||this.g.oa()||zc(this.g)))){this.J||Me!=4||c==7||(c==8||0>=Mn?Sr(3):Sr(2)),bo(this);var d=this.g.Z();this.X=d;t:if(Ac(this)){var m=zc(this.g);o="";var A=m.length,S=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Pr(this);var x="";break t}this.h.i=new l.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(S&&c==A-1)});m.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=d==200,Eg(this.i,this.u,this.A,this.l,this.R,Me,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,ke=this.g;if((ae=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(ae)){var te=ae;break t}}te=null}if(d=te)xn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Po(this,d);else{this.o=!1,this.s=3,ze(12),hn(this),Pr(this);break e}}if(this.P){d=!0;let it;for(;!this.J&&this.C<x.length;)if(it=Ig(this,x),it==So){Me==4&&(this.s=4,ze(14),d=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(it==wc){this.s=4,ze(15),xn(this.i,this.l,x,"[Invalid Chunk]"),d=!1;break}else xn(this.i,this.l,it,null),Po(this,it);if(Ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Me!=4||x.length!=0||this.h.h||(this.s=1,ze(16),d=!1),this.o=this.o&&d,!d)xn(this.i,this.l,x,"[Invalid Chunked Response]"),hn(this),Pr(this);else if(0<x.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Oo(Oe),Oe.M=!0,ze(11))}}else xn(this.i,this.l,x,null),Po(this,x);Me==4&&hn(this),this.o&&!this.J&&(Me==4?Xc(this.j,this):(this.o=!1,Ps(this)))}else Bg(this.g),d==400&&0<x.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),hn(this),Pr(this)}}}catch{}finally{}};function Ac(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ig(o,c){var d=o.C,m=c.indexOf(`
`,d);return m==-1?So:(d=Number(c.substring(d,m)),isNaN(d)?wc:(m+=1,m+d>c.length?So:(c=c.slice(m,m+d),o.C=m+d,c)))}Ft.prototype.cancel=function(){this.J=!0,hn(this)};function Ps(o){o.S=Date.now()+o.I,Cc(o,o.I)}function Cc(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Rr(_(o.ba,o),c)}function bo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ft.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Tg(this.i,this.A),this.L!=2&&(Sr(),ze(17)),hn(this),this.s=2,Pr(this)):Cc(this,this.S-o)};function Pr(o){o.j.G==0||o.J||Xc(o.j,o)}function hn(o){bo(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,fc(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Po(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||ko(d.h,o))){if(!o.K&&ko(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Fs(d),Ms(d);else break e;Vo(d),ze(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Rr(_(d.Za,d),6e3));if(1>=bc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fn(d,11)}else if((o.K||d.g==o)&&Fs(d),!L(c))for(A=d.Da.g.parse(c),c=0;c<A.length;c++){let te=A[c];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const Oe=te[3];Oe!=null&&(d.la=Oe,d.j.info("VER="+d.la));const Me=te[4];Me!=null&&(d.Aa=Me,d.j.info("SVER="+d.Aa));const Mn=te[5];Mn!=null&&typeof Mn=="number"&&0<Mn&&(m=1.5*Mn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const it=o.g;if(it){const Bs=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var S=m.h;S.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(No(S,S.h),S.h=null))}if(m.D){const Mo=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;Mo&&(m.ya=Mo,le(m.I,m.D,Mo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var x=o;if(m.qa=eu(m,m.J?m.ia:null,m.W),x.K){Pc(m.h,x);var ae=x,ke=m.L;ke&&(ae.I=ke),ae.B&&(bo(ae),Ps(ae)),m.g=x}else Qc(m);0<d.i.length&&Ls(d)}else te[0]!="stop"&&te[0]!="close"||fn(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?fn(d,7):xo(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}Sr(4)}catch{}}var Ag=class{constructor(o,c){this.g=o,this.map=c}};function Sc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function bc(o){return o.h?1:o.g?o.g.size:0}function ko(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function No(o,c){o.g?o.g.add(c):o.h=c}function Pc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Sc.prototype.cancel=function(){if(this.i=kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function kc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return N(o.i)}function Cg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,m=0;m<d;m++)c.push(o[m]);return c}c=[],d=0;for(m in o)c[d++]=o[m];return c}function Sg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const m in o)c[d++]=m;return c}}}function Nc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=Sg(o),m=Cg(o),A=m.length,S=0;S<A;S++)c.call(void 0,m[S],d&&d[S],o)}var Dc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rg(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),A=null;if(0<=m){var S=o[d].substring(0,m);A=o[d].substring(m+1)}else S=o[d];c(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function dn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof dn){this.h=o.h,ks(this,o.j),this.o=o.o,this.g=o.g,Ns(this,o.s),this.l=o.l;var c=o.i,d=new Dr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),xc(this,d),this.m=o.m}else o&&(c=String(o).match(Dc))?(this.h=!1,ks(this,c[1]||"",!0),this.o=kr(c[2]||""),this.g=kr(c[3]||"",!0),Ns(this,c[4]),this.l=kr(c[5]||"",!0),xc(this,c[6]||"",!0),this.m=kr(c[7]||"")):(this.h=!1,this.i=new Dr(null,this.h))}dn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Nr(c,Vc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Nr(c,Vc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Nr(d,d.charAt(0)=="/"?kg:Pg,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Nr(d,Dg)),o.join("")};function It(o){return new dn(o)}function ks(o,c,d){o.j=d?kr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ns(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function xc(o,c,d){c instanceof Dr?(o.i=c,xg(o.i,o.h)):(d||(c=Nr(c,Ng)),o.i=new Dr(c,o.h))}function le(o,c,d){o.i.set(c,d)}function Ds(o){return le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function kr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Nr(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,bg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function bg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Vc=/[#\/\?@]/g,Pg=/[#\?:]/g,kg=/[#\?]/g,Ng=/[#\?@]/g,Dg=/#/g;function Dr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ut(o){o.g||(o.g=new Map,o.h=0,o.i&&Rg(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Dr.prototype,n.add=function(o,c){Ut(this),this.i=null,o=Vn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Oc(o,c){Ut(o),c=Vn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Mc(o,c){return Ut(o),c=Vn(o,c),o.g.has(c)}n.forEach=function(o,c){Ut(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(c,A,m,this)},this)},this)},n.na=function(){Ut(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const A=o[m];for(let S=0;S<A.length;S++)d.push(c[m])}return d},n.V=function(o){Ut(this);let c=[];if(typeof o=="string")Mc(this,o)&&(c=c.concat(this.g.get(Vn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return Ut(this),this.i=null,o=Vn(this,o),Mc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Lc(o,c,d){Oc(o,c),0<d.length&&(o.i=null,o.g.set(Vn(o,c),N(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const S=encodeURIComponent(String(m)),x=this.V(m);for(m=0;m<x.length;m++){var A=S;x[m]!==""&&(A+="="+encodeURIComponent(String(x[m]))),o.push(A)}}return this.i=o.join("&")};function Vn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function xg(o,c){c&&!o.j&&(Ut(o),o.i=null,o.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(Oc(this,m),Lc(this,A,d))},o)),o.j=c}function Vg(o,c){const d=new br;if(l.Image){const m=new Image;m.onload=I(Bt,d,"TestLoadImage: loaded",!0,c,m),m.onerror=I(Bt,d,"TestLoadImage: error",!1,c,m),m.onabort=I(Bt,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=I(Bt,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function Og(o,c){const d=new br,m=new AbortController,A=setTimeout(()=>{m.abort(),Bt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(S=>{clearTimeout(A),S.ok?Bt(d,"TestPingServer: ok",!0,c):Bt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),Bt(d,"TestPingServer: error",!1,c)})}function Bt(o,c,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Mg(){this.g=new yg}function Lg(o,c,d){const m=d||"";try{Nc(o,function(A,S){let x=A;h(A)&&(x=To(A)),c.push(m+S+"="+encodeURIComponent(x))})}catch(A){throw c.push(m+"type="+encodeURIComponent("_badmap")),A}}function xs(o){this.l=o.Ub||null,this.j=o.eb||!1}R(xs,wo),xs.prototype.g=function(){return new Vs(this.l,this.j)},xs.prototype.i=function(o){return function(){return o}}({});function Vs(o,c){Ve.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Vs,Ve),n=Vs.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Vr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?xr(this):Vr(this),this.readyState==3&&Fc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,xr(this))},n.Qa=function(o){this.g&&(this.response=o,xr(this))},n.ga=function(){this.g&&xr(this)};function xr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Vr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Vr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Uc(o){let c="";return $(o,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Do(o,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Uc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):le(o,c,d))}function pe(o){Ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(pe,Ve);var Fg=/^https?$/i,Ug=["POST","PUT"];n=pe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Co.g(),this.v=this.o?pc(this.o):pc(Co),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){Bc(this,S);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())d.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ug,c,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,x]of d)this.g.setRequestHeader(S,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qc(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Bc(this,S)}};function Bc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,jc(o),Os(o)}function jc(o){o.A||(o.A=!0,qe(o,"complete"),qe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,qe(this,"complete"),qe(this,"abort"),Os(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Os(this,!0)),pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$c(this):this.bb())},n.bb=function(){$c(this)};function $c(o){if(o.h&&typeof a<"u"&&(!o.v[1]||At(o)!=4||o.Z()!=2)){if(o.u&&At(o)==4)uc(o.Ea,0,o);else if(qe(o,"readystatechange"),At(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=x===0){var A=String(o.D).match(Dc)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),m=!Fg.test(A?A.toLowerCase():"")}d=m}if(d)qe(o,"complete"),qe(o,"success");else{o.m=6;try{var S=2<At(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",jc(o)}}finally{Os(o)}}}}function Os(o,c){if(o.g){qc(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||qe(o,"ready");try{d.onreadystatechange=m}catch{}}}function qc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function At(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),_g(c)}};function zc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Bg(o){const c={};o=(o.g&&2<=At(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(L(o[m]))continue;var d=w(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=c[A]||[];c[A]=S,S.push(d)}E(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Or(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Wc(o){this.Aa=0,this.i=[],this.j=new br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Or("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Or("baseRetryDelayMs",5e3,o),this.cb=Or("retryDelaySeedMs",1e4,o),this.Wa=Or("forwardChannelMaxRetries",2,o),this.wa=Or("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Sc(o&&o.concurrentRequestLimit),this.Da=new Mg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wc.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,m){ze(0),this.W=o,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=eu(this,null,this.W),Ls(this)};function xo(o){if(Gc(o),o.G==3){var c=o.U++,d=It(o.I);if(le(d,"SID",o.K),le(d,"RID",c),le(d,"TYPE","terminate"),Mr(o,d),c=new Ft(o,o.j,c),c.L=2,c.v=Ds(It(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=tu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ps(c)}Zc(o)}function Ms(o){o.g&&(Oo(o),o.g.cancel(),o.g=null)}function Gc(o){Ms(o),o.u&&(l.clearTimeout(o.u),o.u=null),Fs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ls(o){if(!Rc(o.h)&&!o.s){o.s=!0;var c=o.Ga;vt||on(),Mt||(vt(),Mt=!0),Ke.add(c,o),o.B=0}}function jg(o,c){return bc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Rr(_(o.Ga,o,c),Jc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new Ft(this,this.j,o);let S=this.o;if(this.S&&(S?(S=g(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Kc(this,A,c),d=It(this.I),le(d,"RID",o),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),Mr(this,d),S&&(this.O?c="headers="+encodeURIComponent(String(Uc(S)))+"&"+c:this.m&&Do(d,this.m,S)),No(this.h,A),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",c),le(d,"SID","null"),A.T=!0,Ro(A,d,null)):Ro(A,d,c),this.G=2}}else this.G==3&&(o?Hc(this,o):this.i.length==0||Rc(this.h)||Hc(this))};function Hc(o,c){var d;c?d=c.l:d=o.U++;const m=It(o.I);le(m,"SID",o.K),le(m,"RID",d),le(m,"AID",o.T),Mr(o,m),o.m&&o.o&&Do(m,o.m,o.o),d=new Ft(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Kc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),No(o.h,d),Ro(d,m,c)}function Mr(o,c){o.H&&$(o.H,function(d,m){le(c,m,d)}),o.l&&Nc({},function(d,m){le(c,m,d)})}function Kc(o,c,d){d=Math.min(o.i.length,d);var m=o.l?_(o.l.Na,o.l,o):null;e:{var A=o.i;let S=-1;for(;;){const x=["count="+d];S==-1?0<d?(S=A[0].g,x.push("ofs="+S)):S=0:x.push("ofs="+S);let ae=!0;for(let ke=0;ke<d;ke++){let te=A[ke].g;const Oe=A[ke].map;if(te-=S,0>te)S=Math.max(0,A[ke].g-100),ae=!1;else try{Lg(Oe,x,"req"+te+"_")}catch{m&&m(Oe)}}if(ae){m=x.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,m}function Qc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;vt||on(),Mt||(vt(),Mt=!0),Ke.add(c,o),o.v=0}}function Vo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Rr(_(o.Fa,o),Jc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Yc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Rr(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),Ms(this),Yc(this))};function Oo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Yc(o){o.g=new Ft(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=It(o.qa);le(c,"RID","rpc"),le(c,"SID",o.K),le(c,"AID",o.T),le(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&le(c,"TO",o.ja),le(c,"TYPE","xmlhttp"),Mr(o,c),o.m&&o.o&&Do(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ds(It(c)),d.m=null,d.P=!0,Ic(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Ms(this),Vo(this),ze(19))};function Fs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Xc(o,c){var d=null;if(o.g==c){Fs(o),Oo(o),o.g=null;var m=2}else if(ko(o.h,c))d=c.D,Pc(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;m=Ss(),qe(m,new vc(m,d)),Ls(o)}else Qc(o);else if(A=c.s,A==3||A==0&&0<c.X||!(m==1&&jg(o,c)||m==2&&Vo(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),A){case 1:fn(o,5);break;case 4:fn(o,10);break;case 3:fn(o,6);break;default:fn(o,2)}}}function Jc(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function fn(o,c){if(o.j.info("Error code "+c),c==2){var d=_(o.fb,o),m=o.Xa;const A=!m;m=new dn(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ks(m,"https"),Ds(m),A?Vg(m.toString(),d):Og(m.toString(),d)}else ze(2);o.G=0,o.l&&o.l.sa(c),Zc(o),Gc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Zc(o){if(o.G=0,o.ka=[],o.l){const c=kc(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function eu(o,c,d){var m=d instanceof dn?It(d):new dn(d);if(m.g!="")c&&(m.g=c+"."+m.g),Ns(m,m.s);else{var A=l.location;m=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var S=new dn(null);m&&ks(S,m),c&&(S.g=c),A&&Ns(S,A),d&&(S.l=d),m=S}return d=o.D,c=o.ya,d&&c&&le(m,d,c),le(m,"VER",o.la),Mr(o,m),m}function tu(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new pe(new xs({eb:d})):new pe(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nu(){}n=nu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Us(){}Us.prototype.g=function(o,c){return new Qe(o,c)};function Qe(o,c){Ve.call(this),this.g=new Wc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!L(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new On(this)}R(Qe,Ve),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){xo(this.g)},Qe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=To(o),o=d);c.i.push(new Ag(c.Ya++,o)),c.G==3&&Ls(c)},Qe.prototype.N=function(){this.g.l=null,delete this.j,xo(this.g),delete this.g,Qe.aa.N.call(this)};function ru(o){Io.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}R(ru,Io);function su(){Ao.call(this),this.status=1}R(su,Ao);function On(o){this.g=o}R(On,nu),On.prototype.ua=function(){qe(this.g,"a")},On.prototype.ta=function(o){qe(this.g,new ru(o))},On.prototype.sa=function(o){qe(this.g,new su)},On.prototype.ra=function(){qe(this.g,"b")},Us.prototype.createWebChannel=Us.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,If=function(){return new Us},wf=function(){return Ss()},Tf=un,va={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rs.NO_ERROR=0,Rs.TIMEOUT=8,Rs.HTTP_ERROR=6,ii=Rs,Ec.COMPLETE="complete",Ef=Ec,mc.EventType=Cr,Cr.OPEN="a",Cr.CLOSE="b",Cr.ERROR="c",Cr.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,$r=mc,pe.prototype.listenOnce=pe.prototype.L,pe.prototype.getLastError=pe.prototype.Ka,pe.prototype.getLastErrorCode=pe.prototype.Ba,pe.prototype.getStatus=pe.prototype.Z,pe.prototype.getResponseJson=pe.prototype.Oa,pe.prototype.getResponseText=pe.prototype.oa,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Ha,vf=pe}).apply(typeof zs<"u"?zs:typeof self<"u"?self:typeof window<"u"?window:{});const Fu="@firebase/firestore",Uu="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new sl("@firebase/firestore");function Un(){return Tn.logLevel}function O(n,...e){if(Tn.logLevel<=Y.DEBUG){const t=e.map(ol);Tn.debug(`Firestore (${mr}): ${n}`,...t)}}function Dt(n,...e){if(Tn.logLevel<=Y.ERROR){const t=e.map(ol);Tn.error(`Firestore (${mr}): ${n}`,...t)}}function rr(n,...e){if(Tn.logLevel<=Y.WARN){const t=e.map(ol);Tn.warn(`Firestore (${mr}): ${n}`,...t)}}function ol(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Af(n,r,t)}function Af(n,e,t){let r=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Dt(r),new Error(r)}function se(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Af(e,s,r)}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Fe.UNAUTHENTICATED))}shutdown(){}}class mE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gE{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){se(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new Cf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class _E{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yE{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new _E(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vE{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,df(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){se(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(se(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=EE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function Ea(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return H(r,s);{const i=Sf(),a=TE(i.encode(ju(n,t)),i.encode(ju(e,t)));return a!==0?a:H(r,s)}}t+=r>65535?2:1}return H(n.length,e.length)}function ju(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function TE(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return H(n[t],e[t]);return H(n.length,e.length)}function sr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=-62135596800,qu=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*qu);return new we(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$u)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qu}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$u;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new we(0,0))}static max(){return new q(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="__name__";class ft{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&j(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ft.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ft?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ft.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const r=ft.isNumericId(e),s=ft.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ft.extractNumericId(e).compare(ft.extractNumericId(t)):Ea(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gt.fromString(e.substring(4,e.length-2))}}class de extends ft{construct(e,t,r){return new de(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new de(t)}static emptyPath(){return new de([])}}const wE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends ft{construct(e,t,r){return new De(e,t,r)}static isValidIdentifier(e){return wE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zu}static keyField(){return new De([zu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new M(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new M(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new M(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(t)}static emptyPath(){return new De([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(de.fromString(e))}static fromName(e){return new U(de.fromString(e).popFirst(5))}static empty(){return new U(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new de(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=-1;function IE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new we(t+1,0):new we(t,r));return new Xt(s,U.empty(),e)}function AE(n){return new Xt(n.readTime,n.key,os)}class Xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xt(q.min(),U.empty(),os)}static max(){return new Xt(q.max(),U.empty(),os)}}function CE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==SE)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function bE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _r(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Hi.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=-1;function Ki(n){return n==null}function vi(n){return n===0&&1/n==-1/0}function PE(n){return typeof n=="number"&&Number.isInteger(n)&&!vi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="";function kE(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Wu(e)),e=NE(n.get(t),e);return Wu(e)}function NE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case bf:t+="";break;default:t+=i}}return t}function Wu(n){return n+bf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Pf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ve=class Ta{constructor(e,t){this.comparator=e,this.root=t||Ht.EMPTY}insert(e,t){return new Ta(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Ta(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ws(this.root,e,this.comparator,!0)}},Ws=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ht=class Ct{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ct.RED,this.left=s??Ct.EMPTY,this.right=i??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ct(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}};Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ht(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hu(this.data.getIterator())}getIteratorFrom(e){return new Hu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class Hu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new at([])}unionWith(e){let t=new Ie(De.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new at(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kf("Invalid base64 string: "+i):i}}(e);return new xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const DE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(se(!!n,39018),typeof n=="string"){let e=0;const t=DE.exec(n);if(se(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?xe.fromBase64String(n):xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="server_timestamp",Df="__type__",xf="__previous_value__",Vf="__local_write_time__";function ll(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Df])===null||t===void 0?void 0:t.stringValue)===Nf}function Qi(n){const e=n.mapValue.fields[xf];return ll(e)?Qi(e):e}function as(n){const e=Jt(n.mapValue.fields[Vf].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t,r,s,i,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}const Ei="(default)";class ls{constructor(e,t){this.projectId=e,this.database=t||Ei}static empty(){return new ls("","")}get isDefaultDatabase(){return this.database===Ei}isEqual(e){return e instanceof ls&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="__type__",VE="__max__",Gs={mapValue:{}},Mf="__vector__",Ti="value";function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ll(n)?4:ME(n)?9007199254740991:OE(n)?10:11:j(28295,{value:n})}function yt(n,e){if(n===e)return!0;const t=en(n);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return as(n).isEqual(as(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Jt(s.timestampValue),l=Jt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Zt(s.bytesValue).isEqual(Zt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=me(s.doubleValue),l=me(i.doubleValue);return a===l?vi(a)===vi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return sr(n.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Gu(a)!==Gu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!yt(a[u],l[u])))return!1;return!0}(n,e);default:return j(52216,{left:n})}}function cs(n,e){return(n.values||[]).find(t=>yt(t,e))!==void 0}function ir(n,e){if(n===e)return 0;const t=en(n),r=en(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=me(i.integerValue||i.doubleValue),u=me(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Ku(n.timestampValue,e.timestampValue);case 4:return Ku(as(n),as(e));case 5:return Ea(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Zt(i),u=Zt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=H(l[h],u[h]);if(f!==0)return f}return H(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=H(me(i.latitude),me(a.latitude));return l!==0?l:H(me(i.longitude),me(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Qu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,h,f;const p=i.fields||{},_=a.fields||{},I=(l=p[Ti])===null||l===void 0?void 0:l.arrayValue,R=(u=_[Ti])===null||u===void 0?void 0:u.arrayValue,N=H(((h=I?.values)===null||h===void 0?void 0:h.length)||0,((f=R?.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Qu(I,R)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Gs.mapValue&&a===Gs.mapValue)return 0;if(i===Gs.mapValue)return 1;if(a===Gs.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const _=Ea(u[p],f[p]);if(_!==0)return _;const I=ir(l[u[p]],h[f[p]]);if(I!==0)return I}return H(u.length,f.length)}(n.mapValue,e.mapValue);default:throw j(23264,{Pe:t})}}function Ku(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=Jt(n),r=Jt(e),s=H(t.seconds,r.seconds);return s!==0?s:H(t.nanos,r.nanos)}function Qu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ir(t[s],r[s]);if(i)return i}return H(t.length,r.length)}function or(n){return wa(n)}function wa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=wa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${wa(t.fields[a])}`;return s+"}"}(n.mapValue):j(61005,{value:n})}function oi(n){switch(en(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qi(n);return e?16+oi(e):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+oi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Rn(r.fields,(i,a)=>{s+=i.length+oi(a)}),s}(n.mapValue);default:throw j(13486,{value:n})}}function Yu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ia(n){return!!n&&"integerValue"in n}function cl(n){return!!n&&"arrayValue"in n}function Xu(n){return!!n&&"nullValue"in n}function Ju(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ai(n){return!!n&&"mapValue"in n}function OE(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Of])===null||t===void 0?void 0:t.stringValue)===Mf}function Hr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Hr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function ME(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===VE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ai(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hr(t)}setAll(e){let t=De.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Hr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ai(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ai(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Rn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ze(Hr(this.value))}}function Lf(n){const e=[];return Rn(n.fields,(t,r)=>{const s=new De([t]);if(ai(r)){const i=Lf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new at(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ue(e,0,q.min(),q.min(),q.min(),Ze.empty(),0)}static newFoundDocument(e,t,r,s){return new Ue(e,1,t,q.min(),r,s,0)}static newNoDocument(e,t){return new Ue(e,2,t,q.min(),q.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new Ue(e,3,t,q.min(),q.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){this.position=e,this.inclusive=t}}function Zu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=ir(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function eh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t="asc"){this.field=e,this.dir=t}}function LE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{}class ye extends Ff{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new UE(e,t,r):t==="array-contains"?new $E(e,r):t==="in"?new qE(e,r):t==="not-in"?new zE(e,r):t==="array-contains-any"?new WE(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new BE(e,r):new jE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ir(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(ir(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Ff{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new ht(e,t)}matches(e){return Uf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Uf(n){return n.op==="and"}function Bf(n){return FE(n)&&Uf(n)}function FE(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function Aa(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+or(n.value);if(Bf(n))return n.filters.map(e=>Aa(e)).join(",");{const e=n.filters.map(t=>Aa(t)).join(",");return`${n.op}(${e})`}}function jf(n,e){return n instanceof ye?function(r,s){return s instanceof ye&&r.op===s.op&&r.field.isEqual(s.field)&&yt(r.value,s.value)}(n,e):n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&jf(a,s.filters[l]),!0):!1}(n,e):void j(19439)}function $f(n){return n instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${or(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map($f).join(" ,")+"}"}(n):"Filter"}class UE extends ye{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class BE extends ye{constructor(e,t){super(e,"in",t),this.keys=qf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jE extends ye{constructor(e,t){super(e,"not-in",t),this.keys=qf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function qf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class $E extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cl(t)&&cs(t.arrayValue,this.value)}}class qE extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cs(this.value.arrayValue,t)}}class zE extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cs(this.value.arrayValue,t)}}class WE extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>cs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function th(n,e=null,t=[],r=[],s=null,i=null,a=null){return new GE(n,e,t,r,s,i,a)}function ul(n){const e=z(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Aa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ki(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>or(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>or(r)).join(",")),e.Ie=t}return e.Ie}function hl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!LE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!eh(n.startAt,e.startAt)&&eh(n.endAt,e.endAt)}function Ca(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function HE(n,e,t,r,s,i,a,l){return new ms(n,e,t,r,s,i,a,l)}function dl(n){return new ms(n)}function nh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zf(n){return n.collectionGroup!==null}function Kr(n){const e=z(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ie(De.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Ii(i,r))}),t.has(De.keyField().canonicalString())||e.Ee.push(new Ii(De.keyField(),r))}return e.Ee}function gt(n){const e=z(n);return e.de||(e.de=KE(e,Kr(n))),e.de}function KE(n,e){if(n.limitType==="F")return th(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ii(s.field,i)});const t=n.endAt?new wi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new wi(n.startAt.position,n.startAt.inclusive):null;return th(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Sa(n,e){const t=n.filters.concat([e]);return new ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ra(n,e,t){return new ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yi(n,e){return hl(gt(n),gt(e))&&n.limitType===e.limitType}function Wf(n){return`${ul(gt(n))}|lt:${n.limitType}`}function Bn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>$f(s)).join(", ")}]`),Ki(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>or(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>or(s)).join(",")),`Target(${r})`}(gt(n))}; limitType=${n.limitType})`}function Xi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Kr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=Zu(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Kr(r),s)||r.endAt&&!function(a,l,u){const h=Zu(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Kr(r),s))}(n,e)}function QE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gf(n){return(e,t)=>{let r=!1;for(const s of Kr(n)){const i=YE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YE(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ir(u,h):j(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Pf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new ve(U.comparator);function xt(){return XE}const Hf=new ve(U.comparator);function qr(...n){let e=Hf;for(const t of n)e=e.insert(t.key,t);return e}function Kf(n){let e=Hf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function _n(){return Qr()}function Qf(){return Qr()}function Qr(){return new bn(n=>n.toString(),(n,e)=>n.isEqual(e))}const JE=new ve(U.comparator),ZE=new Ie(U.comparator);function Q(...n){let e=ZE;for(const t of n)e=e.add(t);return e}const eT=new Ie(H);function tT(){return eT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vi(e)?"-0":e}}function Yf(n){return{integerValue:""+n}}function nT(n,e){return PE(e)?Yf(e):fl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this._=void 0}}function rT(n,e,t){return n instanceof Ai?function(s,i){const a={fields:{[Df]:{stringValue:Nf},[Vf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ll(i)&&(i=Qi(i)),i&&(a.fields[xf]=i),{mapValue:a}}(t,e):n instanceof us?Jf(n,e):n instanceof hs?Zf(n,e):function(s,i){const a=Xf(s,i),l=rh(a)+rh(s.Re);return Ia(a)&&Ia(s.Re)?Yf(l):fl(s.serializer,l)}(n,e)}function sT(n,e,t){return n instanceof us?Jf(n,e):n instanceof hs?Zf(n,e):t}function Xf(n,e){return n instanceof Ci?function(r){return Ia(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ai extends Ji{}class us extends Ji{constructor(e){super(),this.elements=e}}function Jf(n,e){const t=ep(e);for(const r of n.elements)t.some(s=>yt(s,r))||t.push(r);return{arrayValue:{values:t}}}class hs extends Ji{constructor(e){super(),this.elements=e}}function Zf(n,e){let t=ep(e);for(const r of n.elements)t=t.filter(s=>!yt(s,r));return{arrayValue:{values:t}}}class Ci extends Ji{constructor(e,t){super(),this.serializer=e,this.Re=t}}function rh(n){return me(n.integerValue||n.doubleValue)}function ep(n){return cl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function iT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof us&&s instanceof us||r instanceof hs&&s instanceof hs?sr(r.elements,s.elements,yt):r instanceof Ci&&s instanceof Ci?yt(r.Re,s.Re):r instanceof Ai&&s instanceof Ai}(n.transform,e.transform)}class oT{constructor(e,t){this.version=e,this.transformResults=t}}class Pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function li(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zi{}function tp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new rp(n.key,Pt.none()):new gs(n.key,n.data,Pt.none());{const t=n.data,r=Ze.empty();let s=new Ie(De.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Pn(n.key,r,new at(s.toArray()),Pt.none())}}function aT(n,e,t){n instanceof gs?function(s,i,a){const l=s.value.clone(),u=ih(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Pn?function(s,i,a){if(!li(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ih(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(np(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Yr(n,e,t,r){return n instanceof gs?function(i,a,l,u){if(!li(i.precondition,a))return l;const h=i.value.clone(),f=oh(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Pn?function(i,a,l,u){if(!li(i.precondition,a))return l;const h=oh(i.fieldTransforms,u,a),f=a.data;return f.setAll(np(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return li(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function lT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Xf(r.transform,s||null);i!=null&&(t===null&&(t=Ze.empty()),t.set(r.field,i))}return t||null}function sh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&sr(r,s,(i,a)=>iT(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gs extends Zi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pn extends Zi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function np(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ih(n,e,t){const r=new Map;se(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,sT(a,l,t[s]))}return r}function oh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,rT(i,a,e))}return r}class rp extends Zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cT extends Zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Yr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Yr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Qf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=tp(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,(t,r)=>sh(t,r))&&sr(this.baseMutations,e.baseMutations,(t,r)=>sh(t,r))}}class pl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){se(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return JE}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new pl(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,J;function fT(n){switch(n){case k.OK:return j(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function sp(n){if(n===void 0)return Dt("GRPC error has no .code"),k.UNKNOWN;switch(n){case ge.OK:return k.OK;case ge.CANCELLED:return k.CANCELLED;case ge.UNKNOWN:return k.UNKNOWN;case ge.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ge.INTERNAL:return k.INTERNAL;case ge.UNAVAILABLE:return k.UNAVAILABLE;case ge.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ge.NOT_FOUND:return k.NOT_FOUND;case ge.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ge.ABORTED:return k.ABORTED;case ge.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ge.DATA_LOSS:return k.DATA_LOSS;default:return j(39323,{code:n})}}(J=ge||(ge={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=new Gt([4294967295,4294967295],0);function ah(n){const e=Sf().encode(n),t=new yf;return t.update(e),new Uint8Array(t.digest())}function lh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gt([t,r],0),new Gt([s,i],0)]}class ml{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new zr(`Invalid padding: ${t}`);if(r<0)throw new zr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new zr(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Gt.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(Gt.fromNumber(r)));return s.compare(pT)===1&&(s=new Gt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=ah(e),[r,s]=lh(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.be(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ml(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.pe===0)return;const t=ah(e),[r,s]=lh(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,_s.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new eo(q.min(),s,new ve(H),xt(),Q())}}class _s{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new _s(r,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class ip{constructor(e,t){this.targetId=e,this.Ce=t}}class op{constructor(e,t,r=xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ch{constructor(){this.Fe=0,this.Me=uh(),this.xe=xe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Q(),t=Q(),r=Q();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:j(38017,{changeType:i})}}),new _s(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=uh()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,se(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class mT{constructor(e){this.ze=e,this.je=new Map,this.He=xt(),this.Je=Hs(),this.Ye=Hs(),this.Ze=new ve(H)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:j(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Ca(i))if(r===0){const a=new U(i.path);this.tt(t,a,Ue.newNoDocument(a,q.min()))}else se(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const l=this.ct(e),u=l?this.lt(l,e,a):1;if(u!==0){this.st(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Zt(r).toUint8Array()}catch(u){if(u instanceof kf)return rr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ml(a,s,i)}catch(u){return rr(u instanceof zr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,a)=>{const l=this._t(a);if(l){if(i.current&&Ca(l.target)){const u=new U(l.target.path);this.Et(u).has(a)||this.dt(a,u)||this.tt(a,u,Ue.newNoDocument(u,e))}i.Le&&(t.set(a,i.qe()),i.Qe())}});let r=Q();this.Ye.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this._t(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,a)=>a.setReadTime(e));const s=new eo(e,t,this.Ze,this.He,r);return this.He=xt(),this.Je=Hs(),this.Ye=Hs(),this.Ze=new ve(H),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new ch,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Ie(H),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Ie(H),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new ch),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Hs(){return new ve(U.comparator)}function uh(){return new ve(U.comparator)}const gT={asc:"ASCENDING",desc:"DESCENDING"},_T={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yT={and:"AND",or:"OR"};class vT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ba(n,e){return n.useProto3Json||Ki(e)?e:{value:e}}function Si(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ap(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ET(n,e){return Si(n,e.toTimestamp())}function _t(n){return se(!!n,49232),q.fromTimestamp(function(t){const r=Jt(t);return new we(r.seconds,r.nanos)}(n))}function gl(n,e){return Pa(n,e).canonicalString()}function Pa(n,e){const t=function(s){return new de(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function lp(n){const e=de.fromString(n);return se(fp(e),10190,{key:e.toString()}),e}function ka(n,e){return gl(n.databaseId,e.path)}function Ho(n,e){const t=lp(e);if(t.get(1)!==n.databaseId.projectId)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(up(t))}function cp(n,e){return gl(n.databaseId,e)}function TT(n){const e=lp(n);return e.length===4?de.emptyPath():up(e)}function Na(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function up(n){return se(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function hh(n,e,t){return{name:ka(n,e),fields:t.value.mapValue.fields}}function wT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:j(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(se(f===void 0||typeof f=="string",58123),xe.fromBase64String(f||"")):(se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),xe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?k.UNKNOWN:sp(h.code);return new M(f,h.message||"")}(a);t=new op(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ho(n,r.document.name),i=_t(r.document.updateTime),a=r.document.createTime?_t(r.document.createTime):q.min(),l=new Ze({mapValue:{fields:r.document.fields}}),u=Ue.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ci(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ho(n,r.document),i=r.readTime?_t(r.readTime):q.min(),a=Ue.newNoDocument(s,i),l=r.removedTargetIds||[];t=new ci([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ho(n,r.document),i=r.removedTargetIds||[];t=new ci([],i,s,null)}else{if(!("filter"in e))return j(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new dT(s,i),l=r.targetId;t=new ip(l,a)}}return t}function IT(n,e){let t;if(e instanceof gs)t={update:hh(n,e.key,e.value)};else if(e instanceof rp)t={delete:ka(n,e.key)};else if(e instanceof Pn)t={update:hh(n,e.key,e.data),updateMask:DT(e.fieldMask)};else{if(!(e instanceof cT))return j(16599,{ft:e.type});t={verify:ka(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Ai)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof us)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof hs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ci)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw j(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ET(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j(27497)}(n,e.precondition)),t}function AT(n,e){return n&&n.length>0?(se(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?_t(s.updateTime):_t(i);return a.isEqual(q.min())&&(a=_t(i)),new oT(a,s.transformResults||[])}(t,e))):[]}function CT(n,e){return{documents:[cp(n,e.path)]}}function ST(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=cp(n,s);const i=function(h){if(h.length!==0)return dp(ht.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:jn(_.field),direction:PT(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ba(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function RT(n){let e=TT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){se(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const _=hp(p);return _ instanceof ht&&Bf(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(_=>function(R){return new Ii($n(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(_))}(t.orderBy));let l=null;t.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,Ki(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(p){const _=!!p.before,I=p.values||[];return new wi(I,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,I=p.values||[];return new wi(I,_)}(t.endAt)),HE(e,s,a,i,l,"F",u,h)}function bT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=$n(t.unaryFilter.field);return ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$n(t.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$n(t.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$n(t.unaryFilter.field);return ye.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(n):n.fieldFilter!==void 0?function(t){return ye.create($n(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>hp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(t.compositeFilter.op))}(n):j(30097,{filter:n})}function PT(n){return gT[n]}function kT(n){return _T[n]}function NT(n){return yT[n]}function jn(n){return{fieldPath:n.canonicalString()}}function $n(n){return De.fromServerFormat(n.fieldPath)}function dp(n){return n instanceof ye?function(t){if(t.op==="=="){if(Ju(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NAN"}};if(Xu(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ju(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NAN"}};if(Xu(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jn(t.field),op:kT(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(s=>dp(s));return r.length===1?r[0]:{compositeFilter:{op:NT(t.op),filters:r}}}(n):j(54877,{filter:n})}function DT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function fp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,r,s,i=q.min(),a=q.min(),l=xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new $t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.wt=e}}function VT(n){const e=RT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ra(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(){this.yn=new MT}addToCollectionParentIndex(e,t){return this.yn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Xt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class MT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ie(de.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ie(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pp=41943040;class We{static withCacheSize(e){return new We(e,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We.DEFAULT_COLLECTION_PERCENTILE=10,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,We.DEFAULT=new We(pp,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),We.DISABLED=new We(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new ar(0)}static ir(){return new ar(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="LruGarbageCollector",LT=1048576;function ph([n,e],[t,r]){const s=H(n,t);return s===0?H(e,r):s}class FT{constructor(e){this.cr=e,this.buffer=new Ie(ph),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ph(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class UT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){O(fh,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_r(t)?O(fh,"Ignoring IndexedDB error during garbage collection: ",t):await gr(t)}await this.Ir(3e5)})}}class BT{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Hi.le);const r=new FT(t);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Er.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(dh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dh):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let r,s,i,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Un()<=Y.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function jT(n,e){return new BT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.changes=new bn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Yr(r.mutation,s,at.empty(),we.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const s=_n();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=qr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=_n();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=xt();const a=Qr(),l=function(){return Qr()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Pn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Yr(f.mutation,h,f.mutation.getFieldMask(),we.now())):a.set(h.key,at.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new qT(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Qr();let s=new ve((a,l)=>a-l),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||at.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||Q()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Qf();f.forEach(_=>{if(!i.has(_)){const I=tp(t.get(_),r.get(_));I!==null&&p.set(_,I),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(_n());let l=os,u=i;return a.next(h=>P.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,Q())).next(f=>({batchId:l,changes:Kf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let s=qr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=qr();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,u=>{const h=function(p,_){return new ms(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ue.newInvalidDocument(f)))});let l=qr();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Yr(f.mutation,h,at.empty(),we.now()),Xi(t,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return P.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:_t(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(s){return{name:s.name,query:VT(s.bundledQuery),readTime:_t(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.overlays=new ve(U.comparator),this.Or=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=_n();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=_n(),i=t.length+1,a=new U(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ve((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=_n(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=_n(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return P.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new hT(t,r));let i=this.Or.get(t);i===void 0&&(i=Q(),this.Or.set(t,i)),this.Or.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.Nr=new Ie(Ce.Br),this.Lr=new Ie(Ce.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Qr(new Ce(e,t))}$r(e,t){e.forEach(r=>this.removeReference(r,t))}Ur(e){const t=new U(new de([])),r=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.Lr.forEachInRange([r,s],a=>{this.Qr(a),i.push(a.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new U(new de([])),r=new Ce(t,e),s=new Ce(t,e+1);let i=Q();return this.Lr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ce(e,0),r=this.Nr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return U.comparator(e.key,t.key)||H(e.Gr,t.Gr)}static kr(e,t){return H(e.Gr,t.Gr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new Ie(Ce.Br)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new uT(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.zr=this.zr.add(new Ce(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Hr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?al:this.Jn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],a=>{const l=this.jr(a.Gr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(H);return t.forEach(s=>{const i=new Ce(s,0),a=new Ce(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,a],l=>{r=r.add(l.Gr)})}),P.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const a=new Ce(new U(i),0);let l=new Ie(H);return this.zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Gr)),!0)},a),P.resolve(this.Jr(l))}Jr(e){const t=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){se(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return P.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,t){const r=new Ce(t,0),s=this.zr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.Zr=e,this.docs=function(){return new ve(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Zr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(t))}getEntries(e,t){let r=xt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ue.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=xt();const a=t.path,l=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||CE(AE(f),r)<=0||(s.has(f.key)||Xi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){j(9500)}Xr(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new YT(this)}getSize(e){return P.resolve(this.size)}}class YT extends $T{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.persistence=e,this.ei=new bn(t=>ul(t),hl),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ti=0,this.ni=new _l,this.targetCount=0,this.ri=ar.rr()}forEachTarget(e,t){return this.ei.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ti&&(this.ti=t),P.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new ar(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.ar(t),P.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ei.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ei.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ei.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.ni.qr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.ni.$r(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ni.Wr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t){this.ii={},this.overlays={},this.si=new Hi(0),this.oi=!1,this.oi=!0,this._i=new HT,this.referenceDelegate=e(this),this.ai=new XT(this),this.indexManager=new OT,this.remoteDocumentCache=function(s){return new QT(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new xT(t),this.ci=new WT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new GT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ii[e.toKey()];return r||(r=new KT(t,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new JT(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,t){return P.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,t)))}}class JT extends RE{constructor(e){super(),this.currentSequenceNumber=e}}class yl{constructor(e){this.persistence=e,this.Ti=new _l,this.Ii=null}static Ei(e){return new yl(e)}get di(){if(this.Ii)return this.Ii;throw j(60996)}addReference(e,t,r){return this.Ti.addReference(r,t),this.di.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ti.removeReference(r,t),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,r=>{const s=U.fromPath(r);return this.Ai(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return P.or([()=>P.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class Ri{constructor(e,t){this.persistence=e,this.Ri=new bn(r=>kE(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=jT(this,t)}static Ei(e,t){return new Ri(e,t)}li(){}hi(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}Ar(e,t){return P.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,a=>this.gr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),P.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=oi(e.data.value)),t}gr(e,t,r){return P.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.Ri.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ls=r,this.hs=s}static Ps(e,t){let r=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Gy()?8:bE(sf())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Vs(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ZT;return this.fs(e,t,a).next(l=>{if(i.result=l,this.Is)return this.gs(e,t,a,l.size)})}).next(()=>i.result)}gs(e,t,r,s){return r.documentReadCount<this.Es?(Un()<=Y.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Bn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),P.resolve()):(Un()<=Y.DEBUG&&O("QueryEngine","Query:",Bn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Un()<=Y.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Bn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gt(t))):P.resolve())}Rs(e,t){if(nh(t))return P.resolve(null);let r=gt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ra(t,null,"F"),r=gt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Q(...i);return this.As.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ps(t,l);return this.ys(t,h,a,u.readTime)?this.Rs(e,Ra(t,null,"F")):this.ws(e,h,t,u)}))})))}Vs(e,t,r,s){return nh(t)||s.isEqual(q.min())?P.resolve(null):this.As.getDocuments(e,r).next(i=>{const a=this.ps(t,i);return this.ys(t,a,r,s)?P.resolve(null):(Un()<=Y.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bn(t)),this.ws(e,a,t,IE(s,os)).next(l=>l))})}ps(e,t){let r=new Ie(Gf(e));return t.forEach((s,i)=>{Xi(e,i)&&(r=r.add(i))}),r}ys(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,t,r){return Un()<=Y.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Bn(t)),this.As.getDocumentsMatchingQuery(e,t,Xt.min(),r)}ws(e,t,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="LocalStore",tw=3e8;class nw{constructor(e,t,r,s){this.persistence=e,this.bs=t,this.serializer=s,this.Ss=new ve(H),this.Ds=new bn(i=>ul(i),hl),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zT(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function rw(n,e,t,r){return new nw(n,e,t,r)}async function gp(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Fs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=Q();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ms:h,removedBatchIds:a,addedBatchIds:l}))})})}function sw(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,_=p.keys();let I=P.resolve();return _.forEach(R=>{I=I.next(()=>f.getEntry(u,R)).next(N=>{const D=h.docVersions.get(R);se(D!==null,48541),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Q();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function _p(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function iw(n,e){const t=z(n),r=e.snapshotVersion;let s=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Cs.newChangeBuffer({trackRemovals:!0});s=t.Ss;const l=[];e.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;l.push(t.ai.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.ai.addMatchingKeys(i,f.addedDocuments,p)));let I=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(xe.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(p,I),function(N,D,B){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=tw?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(_,I,f)&&l.push(t.ai.updateTargetData(i,I))});let u=xt(),h=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(ow(i,a,e.documentUpdates).next(f=>{u=f.xs,h=f.Os})),!r.isEqual(q.min())){const f=t.ai.getLastRemoteSnapshotVersion(i).next(p=>t.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return P.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ss=s,i))}function ow(n,e,t){let r=Q(),s=Q();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=xt();return t.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):O(El,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{xs:a,Os:s}})}function aw(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=al),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lw(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.ai.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.ai.allocateTargetId(r).next(a=>(s=new $t(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(r.targetId,r),t.Ds.set(e,r.targetId)),r})}async function Da(n,e,t){const r=z(n),s=r.Ss.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_r(a))throw a;O(El,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function mh(n,e,t){const r=z(n);let s=q.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const p=z(u),_=p.Ds.get(f);return _!==void 0?P.resolve(p.Ss.get(_)):p.ai.getTargetData(h,f)}(r,a,gt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.bs.getDocumentsMatchingQuery(a,e,t?s:q.min(),t?i:Q())).next(l=>(cw(r,QE(e),l),{documents:l,Ns:i})))}function cw(n,e,t){let r=n.vs.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.vs.set(e,r)}class gh{constructor(){this.activeTargetIds=tT()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uw{constructor(){this.So=new gh,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,r){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new gh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="ConnectivityMonitor";class yh{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){O(_h,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){O(_h,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks=null;function xa(){return Ks===null?Ks=function(){return 268435456+Math.round(2147483648*Math.random())}():Ks++,"0x"+Ks.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="RestConnection",dw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class fw{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===Ei?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,t,r,s,i){const a=xa(),l=this.$o(e,t.toUriEncodedString());O(Ko,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(u,s,i),this.Ko(e,l,u,r).then(h=>(O(Ko,`Received RPC '${e}' ${a}: `,h),h),h=>{throw rr(Ko,`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Wo(e,t,r,s,i,a){return this.Qo(e,t,r,s,i)}Uo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,t){const r=dw[e];return`${this.Lo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection";class mw extends fw{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,r,s){const i=xa();return new Promise((a,l)=>{const u=new vf;u.setWithCredentials(!0),u.listenOnce(Ef.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ii.NO_ERROR:const f=u.getResponseJson();O(Le,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case ii.TIMEOUT:O(Le,`RPC '${e}' ${i} timed out`),l(new M(k.DEADLINE_EXCEEDED,"Request time out"));break;case ii.HTTP_ERROR:const p=u.getStatus();if(O(Le,`RPC '${e}' ${i} failed with status:`,p,"response text:",u.getResponseText()),p>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_?.error;if(I&&I.status&&I.message){const R=function(D){const B=D.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(B)>=0?B:k.UNKNOWN}(I.status);l(new M(R,I.message))}else l(new M(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new M(k.UNAVAILABLE,"Connection failed."));break;default:j(9055,{s_:e,streamId:i,o_:u.getLastErrorCode(),__:u.getLastError()})}}finally{O(Le,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);O(Le,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",h,r,15)})}a_(e,t,r){const s=xa(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=If(),l=wf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Uo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");O(Le,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=a.createWebChannel(f,u);let _=!1,I=!1;const R=new pw({Go:D=>{I?O(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(_||(O(Le,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),O(Le,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},zo:()=>p.close()}),N=(D,B,L)=>{D.listen(B,F=>{try{L(F)}catch(W){setTimeout(()=>{throw W},0)}})};return N(p,$r.EventType.OPEN,()=>{I||(O(Le,`RPC '${e}' stream ${s} transport opened.`),R.t_())}),N(p,$r.EventType.CLOSE,()=>{I||(I=!0,O(Le,`RPC '${e}' stream ${s} transport closed`),R.r_())}),N(p,$r.EventType.ERROR,D=>{I||(I=!0,rr(Le,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),R.r_(new M(k.UNAVAILABLE,"The operation could not be completed")))}),N(p,$r.EventType.MESSAGE,D=>{var B;if(!I){const L=D.data[0];se(!!L,16349);const F=L,W=F?.error||((B=F[0])===null||B===void 0?void 0:B.error);if(W){O(Le,`RPC '${e}' stream ${s} received error:`,W);const ie=W.status;let $=function(v){const T=ge[v];if(T!==void 0)return sp(T)}(ie),E=W.message;$===void 0&&($=k.INTERNAL,E="Unknown error status: "+ie+" with message "+W.message),I=!0,R.r_(new M($,E)),p.close()}else O(Le,`RPC '${e}' stream ${s} received:`,L),R.i_(L)}}),N(l,Tf.STAT_EVENT,D=>{D.stat===va.PROXY?O(Le,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===va.NOPROXY&&O(Le,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.n_()},0),R}}function Qo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){return new vT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=t,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="PersistentStream";class vp{constructor(e,t,r,s,i,a,l,u){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new yp(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===t&&this.B_(r,s)},r=>{e(()=>{const s=new M(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,t){const r=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return O(vh,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(O(vh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gw extends vp{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=wT(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?_t(a.readTime):q.min()}(e);return this.listener.Q_(t,r)}U_(e){const t={};t.database=Na(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=Ca(u)?{documents:CT(i,u)}:{query:ST(i,u).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ap(i,a.resumeToken);const h=ba(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(q.min())>0){l.readTime=Si(i,a.snapshotVersion.toTimestamp());const h=ba(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=bT(this.serializer,e);r&&(t.labels=r),this.F_(t)}K_(e){const t={};t.database=Na(this.serializer),t.removeTarget=e,this.F_(t)}}class _w extends vp{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=AT(e.writeResults,e.commitTime),r=_t(e.commitTime);return this.listener.j_(r,t)}H_(){const e={};e.database=Na(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>IT(this.serializer,r))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{}class vw extends yw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Qo(e,Pa(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(k.UNKNOWN,i.toString())})}Wo(e,t,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Wo(e,Pa(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(k.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class Ew{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Dt(t),this.ea=!1):O("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="RemoteStore";class Tw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(a=>{r.enqueueAndForget(async()=>{kn(this)&&(O(wn,"Restarting streams for network reachability change."),await async function(u){const h=z(u);h.aa.add(4),await ys(h),h.la.set("Unknown"),h.aa.delete(4),await no(h)}(this))})}),this.la=new Ew(r,s)}}async function no(n){if(kn(n))for(const e of n.ua)await e(!0)}async function ys(n){for(const e of n.ua)await e(!1)}function Ep(n,e){const t=z(n);t._a.has(e.targetId)||(t._a.set(e.targetId,e),Al(t)?Il(t):yr(t).b_()&&wl(t,e))}function Tl(n,e){const t=z(n),r=yr(t);t._a.delete(e),r.b_()&&Tp(t,e),t._a.size===0&&(r.b_()?r.v_():kn(t)&&t.la.set("Unknown"))}function wl(n,e){if(n.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yr(n).U_(e)}function Tp(n,e){n.ha.Ke(e),yr(n).K_(e)}function Il(n){n.ha=new mT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n._a.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),yr(n).start(),n.la.ta()}function Al(n){return kn(n)&&!yr(n).w_()&&n._a.size>0}function kn(n){return z(n).aa.size===0}function wp(n){n.ha=void 0}async function ww(n){n.la.set("Online")}async function Iw(n){n._a.forEach((e,t)=>{wl(n,e)})}async function Aw(n,e){wp(n),Al(n)?(n.la.ia(e),Il(n)):n.la.set("Unknown")}async function Cw(n,e,t){if(n.la.set("Online"),e instanceof op&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s._a.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s._a.delete(l),s.ha.removeTarget(l))}(n,e)}catch(r){O(wn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bi(n,r)}else if(e instanceof ci?n.ha.Xe(e):e instanceof ip?n.ha.ot(e):n.ha.nt(e),!t.isEqual(q.min()))try{const r=await _p(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.ha.It(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=i._a.get(u);if(!f)return;i._a.set(u,f.withResumeToken(xe.EMPTY_BYTE_STRING,f.snapshotVersion)),Tp(i,u);const p=new $t(f.target,u,h,f.sequenceNumber);wl(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){O(wn,"Failed to raise snapshot:",r),await bi(n,r)}}async function bi(n,e,t){if(!_r(e))throw e;n.aa.add(1),await ys(n),n.la.set("Offline"),t||(t=()=>_p(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(wn,"Retrying IndexedDB access"),await t(),n.aa.delete(1),await no(n)})}function Ip(n,e){return e().catch(t=>bi(n,t,e))}async function ro(n){const e=z(n),t=tn(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:al;for(;Sw(e);)try{const s=await aw(e.localStore,r);if(s===null){e.oa.length===0&&t.v_();break}r=s.batchId,Rw(e,s)}catch(s){await bi(e,s)}Ap(e)&&Cp(e)}function Sw(n){return kn(n)&&n.oa.length<10}function Rw(n,e){n.oa.push(e);const t=tn(n);t.b_()&&t.W_&&t.G_(e.mutations)}function Ap(n){return kn(n)&&!tn(n).w_()&&n.oa.length>0}function Cp(n){tn(n).start()}async function bw(n){tn(n).H_()}async function Pw(n){const e=tn(n);for(const t of n.oa)e.G_(t.mutations)}async function kw(n,e,t){const r=n.oa.shift(),s=pl.from(r,e,t);await Ip(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ro(n)}async function Nw(n,e){e&&tn(n).W_&&await async function(r,s){if(function(a){return fT(a)&&a!==k.ABORTED}(s.code)){const i=r.oa.shift();tn(r).D_(),await Ip(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ro(r)}}(n,e),Ap(n)&&Cp(n)}async function Eh(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),O(wn,"RemoteStore received new credentials");const r=kn(t);t.aa.add(3),await ys(t),r&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await no(t)}async function Dw(n,e){const t=z(n);e?(t.aa.delete(2),await no(t)):e||(t.aa.add(2),await ys(t),t.la.set("Unknown"))}function yr(n){return n.Pa||(n.Pa=function(t,r,s){const i=z(t);return i.Y_(),new gw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{jo:ww.bind(null,n),Jo:Iw.bind(null,n),Zo:Aw.bind(null,n),Q_:Cw.bind(null,n)}),n.ua.push(async e=>{e?(n.Pa.D_(),Al(n)?Il(n):n.la.set("Unknown")):(await n.Pa.stop(),wp(n))})),n.Pa}function tn(n){return n.Ta||(n.Ta=function(t,r,s){const i=z(t);return i.Y_(),new _w(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:bw.bind(null,n),Zo:Nw.bind(null,n),z_:Pw.bind(null,n),j_:kw.bind(null,n)}),n.ua.push(async e=>{e?(n.Ta.D_(),await ro(n)):(await n.Ta.stop(),n.oa.length>0&&(O(wn,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Cl(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sl(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),_r(n))return new M(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{static emptySet(e){return new Gn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=qr(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.Ia=new ve(U.comparator)}track(e){const t=e.doc.key,r=this.Ia.get(t);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(t):e.type===1&&r.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):j(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,r)=>{e.push(r)}),e}}class lr{constructor(e,t,r,s,i,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new lr(e,t,Gn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class Vw{constructor(){this.queries=wh(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=wh(),i.forEach((a,l)=>{for(const u of l.Ra)u.onError(r)})})(this,new M(k.ABORTED,"Firestore shutting down"))}}function wh(){return new bn(n=>Wf(n),Yi)}async function Sp(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new xw,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await t.onListen(s,!0);break;case 1:i.Aa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Sl(a,`Initialization of query '${Bn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Ra.push(e),e.ga(t.onlineState),i.Aa&&e.pa(i.Aa)&&Rl(t)}async function Rp(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Ra.indexOf(e);a>=0&&(i.Ra.splice(a,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ow(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Ra)l.pa(s)&&(r=!0);a.Aa=s}}r&&Rl(t)}function Mw(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(t);r.queries.delete(e)}function Rl(n){n.fa.forEach(e=>{e.next()})}var Va,Ih;(Ih=Va||(Va={})).ya="default",Ih.Cache="cache";class bp{constructor(e,t,r){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new lr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const r=t!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Va.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.key=e}}class kp{constructor(e){this.key=e}}class Lw{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Q(),this.mutatedKeys=Q(),this.Ua=Gf(e),this.Ka=new Gn(this.Ua)}get Wa(){return this.qa}Ga(e,t){const r=t?t.za:new Th,s=t?t.Ka:this.Ka;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const _=s.get(f),I=Xi(this.query,p)?p:null,R=!!_&&this.mutatedKeys.has(_.key),N=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;_&&I?_.data.isEqual(I.data)?R!==N&&(r.track({type:3,doc:I}),D=!0):this.ja(_,I)||(r.track({type:2,doc:I}),D=!0,(u&&this.Ua(I,u)>0||h&&this.Ua(I,h)<0)&&(l=!0)):!_&&I?(r.track({type:0,doc:I}),D=!0):_&&!I&&(r.track({type:1,doc:_}),D=!0,(u||h)&&(l=!0)),D&&(I?(a=a.add(I),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ka:a,za:r,ys:l,mutatedKeys:i}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const a=e.za.da();a.sort((f,p)=>function(I,R){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Vt:D})}};return N(I)-N(R)}(f.type,p.type)||this.Ua(f.doc,p.doc)),this.Ha(r),s=s!=null&&s;const l=t&&!s?this.Ja():[],u=this.$a.size===0&&this.current&&!s?1:0,h=u!==this.Qa;return this.Qa=u,a.length!==0||h?{snapshot:new lr(this.query,e.Ka,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:l}:{Ya:l}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Th,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Q(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const t=[];return e.forEach(r=>{this.$a.has(r)||t.push(new kp(r))}),this.$a.forEach(r=>{e.has(r)||t.push(new Pp(r))}),t}Xa(e){this.qa=e.Ns,this.$a=Q();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return lr.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const bl="SyncEngine";class Fw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Uw{constructor(e){this.key=e,this.tu=!1}}class Bw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new bn(l=>Wf(l),Yi),this.iu=new Map,this.su=new Set,this.ou=new ve(U.comparator),this._u=new Map,this.au=new _l,this.uu={},this.cu=new Map,this.lu=ar.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function jw(n,e,t=!0){const r=Mp(n);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await Np(r,e,t,!0),s}async function $w(n,e){const t=Mp(n);await Np(t,e,!0,!1)}async function Np(n,e,t,r){const s=await lw(n.localStore,gt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await qw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ep(n.remoteStore,s),l}async function qw(n,e,t,r,s){n.Pu=(p,_,I)=>async function(N,D,B,L){let F=D.view.Ga(B);F.ys&&(F=await mh(N.localStore,D.query,!1).then(({documents:E})=>D.view.Ga(E,F)));const W=L&&L.targetChanges.get(D.targetId),ie=L&&L.targetMismatches.get(D.targetId)!=null,$=D.view.applyChanges(F,N.isPrimaryClient,W,ie);return Ch(N,D.targetId,$.Ya),$.snapshot}(n,p,_,I);const i=await mh(n.localStore,e,!0),a=new Lw(e,i.Ns),l=a.Ga(i.documents),u=_s.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);Ch(n,t,h.Ya);const f=new Fw(e,t,a);return n.ru.set(e,f),n.iu.has(t)?n.iu.get(t).push(e):n.iu.set(t,[e]),h.snapshot}async function zw(n,e,t){const r=z(n),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(a=>!Yi(a,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Da(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Tl(r.remoteStore,s.targetId),Oa(r,s.targetId)}).catch(gr)):(Oa(r,s.targetId),await Da(r.localStore,s.targetId,!0))}async function Ww(n,e){const t=z(n),r=t.ru.get(e),s=t.iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Tl(t.remoteStore,r.targetId))}async function Gw(n,e,t){const r=Zw(n);try{const s=await function(a,l){const u=z(a),h=we.now(),f=l.reduce((I,R)=>I.add(R.key),Q());let p,_;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=xt(),N=Q();return u.Cs.getEntries(I,f).next(D=>{R=D,R.forEach((B,L)=>{L.isValidDocument()||(N=N.add(B))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,R)).next(D=>{p=D;const B=[];for(const L of l){const F=lT(L,p.get(L.key).overlayedDocument);F!=null&&B.push(new Pn(L.key,F,Lf(F.value.mapValue),Pt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,B,l)}).next(D=>{_=D;const B=D.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(I,D.batchId,B)})}).then(()=>({batchId:_.batchId,changes:Kf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.uu[a.currentUser.toKey()];h||(h=new ve(H)),h=h.insert(l,u),a.uu[a.currentUser.toKey()]=h}(r,s.batchId,t),await vs(r,s.changes),await ro(r.remoteStore)}catch(s){const i=Sl(s,"Failed to persist write");t.reject(i)}}async function Dp(n,e){const t=z(n);try{const r=await iw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t._u.get(i);a&&(se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.tu=!0:s.modifiedDocuments.size>0?se(a.tu,14607):s.removedDocuments.size>0&&(se(a.tu,42227),a.tu=!1))}),await vs(t,r,e)}catch(r){await gr(r)}}function Ah(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ru.forEach((i,a)=>{const l=a.view.ga(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=z(a);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const _ of p.Ra)_.ga(l)&&(h=!0)}),h&&Rl(u)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hw(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r._u.get(e),i=s&&s.key;if(i){let a=new ve(U.comparator);a=a.insert(i,Ue.newNoDocument(i,q.min()));const l=Q().add(i),u=new eo(q.min(),new Map,new ve(H),a,l);await Dp(r,u),r.ou=r.ou.remove(i),r._u.delete(e),Pl(r)}else await Da(r.localStore,e,!1).then(()=>Oa(r,e,t)).catch(gr)}async function Kw(n,e){const t=z(n),r=e.batch.batchId;try{const s=await sw(t.localStore,e);Vp(t,r,null),xp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await vs(t,s)}catch(s){await gr(s)}}async function Qw(n,e,t){const r=z(n);try{const s=await function(a,l){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(se(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Vp(r,e,t),xp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await vs(r,s)}catch(s){await gr(s)}}function xp(n,e){(n.cu.get(e)||[]).forEach(t=>{t.resolve()}),n.cu.delete(e)}function Vp(n,e,t){const r=z(n);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function Oa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.iu.get(e))n.ru.delete(r),t&&n.nu.Tu(r,t);n.iu.delete(e),n.isPrimaryClient&&n.au.Ur(e).forEach(r=>{n.au.containsKey(r)||Op(n,r)})}function Op(n,e){n.su.delete(e.path.canonicalString());const t=n.ou.get(e);t!==null&&(Tl(n.remoteStore,t),n.ou=n.ou.remove(e),n._u.delete(t),Pl(n))}function Ch(n,e,t){for(const r of t)r instanceof Pp?(n.au.addReference(r.key,e),Yw(n,r)):r instanceof kp?(O(bl,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,e),n.au.containsKey(r.key)||Op(n,r.key)):j(19791,{Iu:r})}function Yw(n,e){const t=e.key,r=t.path.canonicalString();n.ou.get(t)||n.su.has(r)||(O(bl,"New document in limbo: "+t),n.su.add(r),Pl(n))}function Pl(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const e=n.su.values().next().value;n.su.delete(e);const t=new U(de.fromString(e)),r=n.lu.next();n._u.set(r,new Uw(t)),n.ou=n.ou.insert(t,r),Ep(n.remoteStore,new $t(gt(dl(t.path)),r,"TargetPurposeLimboResolution",Hi.le))}}async function vs(n,e,t){const r=z(n),s=[],i=[],a=[];r.ru.isEmpty()||(r.ru.forEach((l,u)=>{a.push(r.Pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=vl.Ps(u.targetId,h);i.push(p)}}))}),await Promise.all(a),r.nu.Q_(s),await async function(u,h){const f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>P.forEach(h,_=>P.forEach(_.ls,I=>f.persistence.referenceDelegate.addReference(p,_.targetId,I)).next(()=>P.forEach(_.hs,I=>f.persistence.referenceDelegate.removeReference(p,_.targetId,I)))))}catch(p){if(!_r(p))throw p;O(El,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const I=f.Ss.get(_),R=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(R);f.Ss=f.Ss.insert(_,N)}}}(r.localStore,i))}async function Xw(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){O(bl,"User change. New user:",e.toKey());const r=await gp(t.localStore,e);t.currentUser=e,function(i,a){i.cu.forEach(l=>{l.forEach(u=>{u.reject(new M(k.CANCELLED,a))})}),i.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vs(t,r.Ms)}}function Jw(n,e){const t=z(n),r=t._u.get(e);if(r&&r.tu)return Q().add(r.key);{let s=Q();const i=t.iu.get(e);if(!i)return s;for(const a of i){const l=t.ru.get(a);s=s.unionWith(l.view.Wa)}return s}}function Mp(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hw.bind(null,e),e.nu.Q_=Ow.bind(null,e.eventManager),e.nu.Tu=Mw.bind(null,e.eventManager),e}function Zw(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qw.bind(null,e),e}class Pi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=to(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return rw(this.persistence,new ew,e.initialUser,this.serializer)}Ru(e){return new mp(yl.Ei,this.serializer)}Au(e){return new uw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pi.provider={build:()=>new Pi};class eI extends Pi{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){se(this.persistence.referenceDelegate instanceof Ri,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new UT(r,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?We.withCacheSize(this.cacheSizeBytes):We.DEFAULT;return new mp(r=>Ri.Ei(r,t),this.serializer)}}class Ma{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ah(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xw.bind(null,this.syncEngine),await Dw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Vw}()}createDatastore(e){const t=to(e.databaseInfo.databaseId),r=function(i){return new mw(i)}(e.databaseInfo);return function(i,a,l,u){return new vw(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Tw(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Ah(this.syncEngine,t,0),function(){return yh.C()?new yh:new hw}())}createSyncEngine(e,t){return function(s,i,a,l,u,h,f){const p=new Bw(s,i,a,l,u,h);return f&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=z(s);O(wn,"RemoteStore shutting down."),i.aa.add(5),await ys(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ma.provider={build:()=>new Ma};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="FirestoreClient";class tI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=Rf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{O(nn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O(nn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Sl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yo(n,e){n.asyncQueue.verifyOperationInProgress(),O(nn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Sh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nI(n);O(nn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Eh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Eh(e.remoteStore,s)),n._onlineComponents=e}async function nI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(nn,"Using user provided OfflineComponentProvider");try{await Yo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;rr("Error using user provided cache. Falling back to memory cache: "+t),await Yo(n,new Pi)}}else O(nn,"Using default OfflineComponentProvider"),await Yo(n,new eI(void 0));return n._offlineComponents}async function Fp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(nn,"Using user provided OnlineComponentProvider"),await Sh(n,n._uninitializedComponentsProvider._online)):(O(nn,"Using default OnlineComponentProvider"),await Sh(n,new Ma))),n._onlineComponents}function rI(n){return Fp(n).then(e=>e.syncEngine)}async function Up(n){const e=await Fp(n),t=e.eventManager;return t.onListen=jw.bind(null,e.syncEngine),t.onUnlisten=zw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$w.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ww.bind(null,e.syncEngine),t}function sI(n,e,t={}){const r=new bt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const f=new Lp({next:_=>{f.yu(),a.enqueueAndForget(()=>Rp(i,p));const I=_.docs.has(l);!I&&_.fromCache?h.reject(new M(k.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&_.fromCache&&u&&u.source==="server"?h.reject(new M(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new bp(dl(l.path),f,{includeMetadataChanges:!0,Fa:!0});return Sp(i,p)}(await Up(n),n.asyncQueue,e,t,r)),r.promise}function iI(n,e,t={}){const r=new bt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const f=new Lp({next:_=>{f.yu(),a.enqueueAndForget(()=>Rp(i,p)),_.fromCache&&u.source==="server"?h.reject(new M(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new bp(l,f,{includeMetadataChanges:!0,Fa:!0});return Sp(i,p)}(await Up(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n,e,t){if(!t)throw new M(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oI(n,e,t,r){if(e===!0&&r===!0)throw new M(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bh(n){if(!U.isDocumentKey(n))throw new M(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ph(n){if(U.isDocumentKey(n))throw new M(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function so(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function In(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=so(n);throw new M(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="firestore.googleapis.com",kh=!0;class Nh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$p,this.ssl=kh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:kh;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LT)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class io{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pE;switch(r.type){case"firstParty":return new yE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Rh.get(t);r&&(O("ComponentProvider","Removing Datastore"),Rh.delete(t),r.terminate())}(this),Promise.resolve()}}function aI(n,e,t,r={}){var s;const i=(n=In(n,io))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i.host!==$p&&i.host!==l&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!rs(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Fe.MOCK_USER;else{h=rf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new M(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Fe(p)}n._authCredentials=new mE(new Cf(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vr(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class Kt extends vr{constructor(e,t,r){super(e,t,dl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new U(e))}withConverter(e){return new Kt(this.firestore,e,this._path)}}function lI(n,e,...t){if(n=Yt(n),jp("collection","path",e),n instanceof io){const r=de.fromString(e,...t);return Ph(r),new Kt(n,null,r)}{if(!(n instanceof He||n instanceof Kt))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return Ph(r),new Kt(n.firestore,null,r)}}function Dh(n,e,...t){if(n=Yt(n),arguments.length===1&&(e=Rf.newId()),jp("doc","path",e),n instanceof io){const r=de.fromString(e,...t);return bh(r),new He(n,null,new U(r))}{if(!(n instanceof He||n instanceof Kt))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return bh(r),new He(n.firestore,n instanceof Kt?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="AsyncQueue";class Vh{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new yp(this,"async_queue_retry"),this.ju=()=>{const r=Qo();r&&O(xh,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const t=Qo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=Qo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new bt;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!_r(e))throw e;O(xh,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Dt("INTERNAL UNHANDLED ERROR: ",Oh(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=t,t}enqueueAfterDelay(e,t,r){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const s=Cl.createAndSchedule(this,e,t,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&j(47125,{ec:Oh(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function Oh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class oo extends io{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Vh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vh(e),this._firestoreClient=void 0,await e}}}function cI(n,e){const t=typeof n=="object"?n:mf(),r=typeof n=="string"?n:Ei,s=hf(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tf("firestore");i&&aI(s,...i)}return s}function kl(n){if(n._terminated)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||uI(n),n._firestoreClient}function uI(n){var e,t,r;const s=n._freezeSettings(),i=function(l,u,h,f){return new xE(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Bp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new tI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cr(xe.fromBase64String(e))}catch(t){throw new M(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cr(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=/^__.*__$/;class dI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pn(e,this.data,this.fieldMask,t,this.fieldTransforms):new gs(e,this.data,t,this.fieldTransforms)}}function zp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{oc:n})}}class Vl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return ki(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(zp(this.oc)&&hI.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class fI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||to(e)}dc(e,t,r,s=!1){return new Vl({oc:e,methodName:t,Ec:r,path:De.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wp(n){const e=n._freezeSettings(),t=to(n._databaseId);return new fI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pI(n,e,t,r,s,i={}){const a=n.dc(i.merge||i.mergeFields?2:0,e,t,s);Kp("Data must be an object, but it was:",a,r);const l=Gp(r,a);let u,h;if(i.merge)u=new at(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=gI(e,p,t);if(!a.contains(_))throw new M(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);yI(f,_)||f.push(_)}u=new at(f),h=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=a.fieldTransforms;return new dI(new Ze(l),u,h)}function mI(n,e,t,r=!1){return Ol(t,n.dc(r?4:3,e))}function Ol(n,e){if(Hp(n=Yt(n)))return Kp("Unsupported field value:",e,n),Gp(n,e);if(n instanceof qp)return function(r,s){if(!zp(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Ol(l,s.Pc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=we.fromDate(r);return{timestampValue:Si(s.serializer,i)}}if(r instanceof we){const i=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Si(s.serializer,i)}}if(r instanceof Dl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cr)return{bytesValue:ap(s.serializer,r._byteString)};if(r instanceof He){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Tc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xl)return function(a,l){return{mapValue:{fields:{[Of]:{stringValue:Mf},[Ti]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Tc("VectorValues must only contain numeric values.");return fl(l.serializer,h)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${so(r)}`)}(n,e)}function Gp(n,e){const t={};return Pf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rn(n,(r,s)=>{const i=Ol(s,e.uc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Hp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof we||n instanceof Dl||n instanceof cr||n instanceof He||n instanceof qp||n instanceof xl)}function Kp(n,e,t){if(!Hp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=so(t);throw r==="an object"?e.Tc(n+" a custom object"):e.Tc(n+" "+r)}}function gI(n,e,t){if((e=Yt(e))instanceof Nl)return e._internalPath;if(typeof e=="string")return Qp(n,e);throw ki("Field path arguments must be of type string or ",n,!1,void 0,t)}const _I=new RegExp("[~\\*/\\[\\]]");function Qp(n,e,t){if(e.search(_I)>=0)throw ki(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Nl(...e.split("."))._internalPath}catch{throw ki(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ki(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new M(k.INVALID_ARGUMENT,l+n+u)}function yI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ml("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vI extends Yp{data(){return super.data()}}function Ml(n,e){return typeof e=="string"?Qp(n,e):e instanceof Nl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ll{}class TI extends Ll{}function wI(n,e,...t){let r=[];e instanceof Ll&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Fl).length,l=i.filter(u=>u instanceof ao).length;if(a>1||a>0&&l>0)throw new M(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ao extends TI{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ao(e,t,r)}_apply(e){const t=this._parse(e);return Xp(e._query,t),new vr(e.firestore,e.converter,Sa(e._query,t))}_parse(e){const t=Wp(e.firestore);return function(i,a,l,u,h,f,p){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new M(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Lh(p,f);const R=[];for(const N of p)R.push(Mh(u,i,N));_={arrayValue:{values:R}}}else _=Mh(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Lh(p,f),_=mI(l,a,p,f==="in"||f==="not-in");return ye.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function II(n,e,t){const r=e,s=Ml("where",n);return ao._create(s,r,t)}class Fl extends Ll{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)Xp(a,u),a=Sa(a,u)}(e._query,t),new vr(e.firestore,e.converter,Sa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Mh(n,e,t){if(typeof(t=Yt(t))=="string"){if(t==="")throw new M(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zf(e)&&t.indexOf("/")!==-1)throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(de.fromString(t));if(!U.isDocumentKey(r))throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yu(n,new U(r))}if(t instanceof He)return Yu(n,t._key);throw new M(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${so(t)}.`)}function Lh(n,e){if(!Array.isArray(n)||n.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xp(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new M(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class AI{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Ti].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>me(a.doubleValue));return new xl(i)}convertGeoPoint(e){return new Dl(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Qi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(as(e));default:return null}}convertTimestamp(e){const t=Jt(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=de.fromString(e);se(fp(r),9688,{name:e});const s=new ls(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||Dt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jp extends Yp{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ml("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ui extends Jp{data(e={}){return super.data(e)}}class SI{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Wr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ui(this._firestore,this._userDataWriter,r.key,r,new Wr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new ui(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ui(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:RI(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function RI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n){n=In(n,He);const e=In(n.firestore,oo);return sI(kl(e),n._key).then(t=>DI(e,n,t))}class Zp extends AI{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function PI(n){n=In(n,vr);const e=In(n.firestore,oo),t=kl(e),r=new Zp(e);return EI(n._query),iI(t,n._query).then(s=>new SI(e,r,n,s))}function kI(n,e,t){n=In(n,He);const r=In(n.firestore,oo),s=CI(n.converter,e);return NI(r,[pI(Wp(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Pt.none())])}function NI(n,e){return function(r,s){const i=new bt;return r.asyncQueue.enqueueAndForget(async()=>Gw(await rI(r),s,i)),i.promise}(kl(n),e)}function DI(n,e,t){const r=t.docs.get(e._key),s=new Zp(n);return new Jp(n,s,e._key,r,new Wr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){mr=s})(ff),ss(new nr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new oo(new gE(r.getProvider("auth-internal")),new vE(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new M(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Wt(Fu,Uu,e),Wt(Fu,Uu,"esm2017")})();var Fh={};const Uh="@firebase/database",Bh="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em="";function xI(n){em=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ns(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ot(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new VI(e)}}catch{}return new OI},yn=tm("localStorage"),MI=tm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new sl("@firebase/database"),LI=function(){let n=1;return function(){return n++}}(),nm=function(n){const e=rv(n),t=new tv;t.update(e);const r=t.digest();return tl.encodeByteArray(r)},Es=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Es.apply(null,r):typeof r=="object"?e+=Ne(r):e+=r,e+=" "}return e};let Xr=null,jh=!0;const FI=function(n,e){V(!0,"Can't turn on custom loggers persistently."),Hn.logLevel=Y.VERBOSE,Xr=Hn.log.bind(Hn)},Be=function(...n){if(jh===!0&&(jh=!1,Xr===null&&MI.get("logging_enabled")===!0&&FI()),Xr){const e=Es.apply(null,n);Xr(e)}},Ts=function(n){return function(...e){Be(n,...e)}},La=function(...n){const e="FIREBASE INTERNAL ERROR: "+Es(...n);Hn.error(e)},Vt=function(...n){const e=`FIREBASE FATAL ERROR: ${Es(...n)}`;throw Hn.error(e),new Error(e)},Xe=function(...n){const e="FIREBASE WARNING: "+Es(...n);Hn.warn(e)},UI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rm=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},BI=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ur="[MIN_NAME]",An="[MAX_NAME]",Er=function(n,e){if(n===e)return 0;if(n===ur||e===An)return-1;if(e===ur||n===An)return 1;{const t=$h(n),r=$h(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},jI=function(n,e){return n===e?0:n<e?-1:1},Lr=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ne(e))},Ul=function(n){if(typeof n!="object"||n===null)return Ne(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ne(e[r]),t+=":",t+=Ul(n[e[r]]);return t+="}",t},sm=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function rt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const im=function(n){V(!rm(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,a,l,u;n===0?(i=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=l+r,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(i=0,a=Math.round(n/Math.pow(2,1-r-t))));const h=[];for(u=t;u;u-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)h.push(i%2?1:0),i=Math.floor(i/2);h.push(s?1:0),h.reverse();const f=h.join("");let p="";for(u=0;u<64;u+=8){let _=parseInt(f.substr(u,8),2).toString(16);_.length===1&&(_="0"+_),p=p+_}return p.toLowerCase()},$I=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},zI=new RegExp("^-?(0*)\\d{1,10}$"),WI=-2147483648,GI=2147483647,$h=function(n){if(zI.test(n)){const e=Number(n);if(e>=WI&&e<=GI)return e}return null},ws=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Xe("Exception was thrown by user callback.",t),e},Math.floor(0))}},HI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,df(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class hi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="5",om="v",am="s",lm="r",cm="f",um=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hm="ls",dm="p",Fa="ac",fm="websocket",pm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,r,s,i=!1,a="",l=!1,u=!1,h=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function YI(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gm(n,e,t){V(typeof e=="string","typeof type must == string"),V(typeof t=="object","typeof params must == object");let r;if(e===fm)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===pm)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);YI(n)&&(t.ns=n.namespace);const s=[];return rt(t,(i,a)=>{s.push(i+"="+a)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.counters_={}}incrementCounter(e,t=1){Ot(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return My(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo={},Jo={};function jl(n){const e=n.toString();return Xo[e]||(Xo[e]=new XI),Xo[e]}function JI(n,e){const t=n.toString();return Jo[t]||(Jo[t]=e()),Jo[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ws(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="start",eA="close",tA="pLPCommand",nA="pRTLPCB",_m="id",ym="pw",vm="ser",rA="cb",sA="seg",iA="ts",oA="d",aA="dframe",Em=1870,Tm=30,lA=Em-Tm,cA=25e3,uA=3e4;class zn{constructor(e,t,r,s,i,a,l){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ts(e),this.stats_=jl(t),this.urlFn=u=>(this.appCheckToken&&(u[Fa]=this.appCheckToken),gm(t,pm,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ZI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uA)),BI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $l((...i)=>{const[a,l,u,h,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===qh)this.id=l,this.password=u;else if(a===eA)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...i)=>{const[a,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[qh]="t",r[vm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[rA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[om]=Bl,this.transportSessionId&&(r[am]=this.transportSessionId),this.lastSessionId&&(r[hm]=this.lastSessionId),this.applicationId&&(r[dm]=this.applicationId),this.appCheckToken&&(r[Fa]=this.appCheckToken),typeof location<"u"&&location.hostname&&um.test(location.hostname)&&(r[lm]=cm);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zn.forceAllow_=!0}static forceDisallow(){zn.forceDisallow_=!0}static isAvailable(){return zn.forceAllow_?!0:!zn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$I()&&!qI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ne(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Zd(t),s=sm(r,lA);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[aA]="t",r[_m]=e,r[ym]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ne(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class $l{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LI(),window[tA+this.uniqueCallbackIdentifier]=e,window[nA+this.uniqueCallbackIdentifier]=t,this.myIFrame=$l.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){Be("frame writing exception"),l.stack&&Be(l.stack),Be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_m]=this.myID,e[ym]=this.myPW,e[vm]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tm+r.length<=Em;){const a=this.pendingSegs.shift();r=r+"&"+sA+s+"="+a.seg+"&"+iA+s+"="+a.ts+"&"+oA+s+"="+a.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(cA)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=16384,dA=45e3;let Ni=null;typeof MozWebSocket<"u"?Ni=MozWebSocket:typeof WebSocket<"u"&&(Ni=WebSocket);class ot{constructor(e,t,r,s,i,a,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ts(this.connId),this.stats_=jl(t),this.connURL=ot.connectionURL_(t,a,l,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const a={};return a[om]=Bl,typeof location<"u"&&location.hostname&&um.test(location.hostname)&&(a[lm]=cm),t&&(a[am]=t),r&&(a[hm]=r),s&&(a[Fa]=s),i&&(a[dm]=i),gm(e,fm,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yn.set("previous_websocket_failure",!0);try{let r;Wy(),this.mySock=new Ni(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ni!==null&&!ot.forceDisallow_}static previouslyFailed(){return yn.isInMemoryStorage||yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=ns(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ne(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=sm(t,hA);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{static get ALL_TRANSPORTS(){return[zn,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ot&&ot.isAvailable();let r=t&&!ot.previouslyFailed();if(e.webSocketOnly&&(t||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ot];else{const s=this.transports_=[];for(const i of ds.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=6e4,pA=5e3,mA=10*1024,gA=100*1024,Zo="t",zh="d",_A="s",Wh="r",yA="e",Gh="o",Hh="a",Kh="n",Qh="p",vA="h";class EA{constructor(e,t,r,s,i,a,l,u,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ts("c:"+this.id+":"),this.transportManager_=new ds(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Jr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zo in e){const t=e[Zo];t===Hh?this.upgradeIfSecondaryHealthy_():t===Wh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Gh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Lr("t",e),r=Lr("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Lr("t",e),r=Lr("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Lr(Zo,e);if(zh in e){const r=e[zh];if(t===vA){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Kh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_A?this.onConnectionShutdown_(r):t===Wh?this.onReset_(r):t===yA?La("Server Error: "+r):t===Gh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):La("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Bl!==r&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Jr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){V(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Im{static getInstance(){return new Di}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!of()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=32,Xh=768;class fe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function oe(){return new fe("")}function Z(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function rn(n){return n.pieces_.length-n.pieceNum_}function he(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new fe(n.pieces_,e)}function Am(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function TA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cm(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Sm(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new fe(e,0)}function be(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new fe(t,0)}function X(n){return n.pieceNum_>=n.pieces_.length}function tt(n,e){const t=Z(n),r=Z(e);if(t===null)return e;if(t===r)return tt(he(n),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Rm(n,e){if(rn(n)!==rn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function lt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(rn(n)>rn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class wA{constructor(e,t){this.errorPrefix_=t,this.parts_=Cm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gi(this.parts_[r]);bm(this)}}function IA(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Gi(e),bm(n)}function AA(n){const e=n.parts_.pop();n.byteLength_-=Gi(e),n.parts_.length>0&&(n.byteLength_-=1)}function bm(n){if(n.byteLength_>Xh)throw new Error(n.errorPrefix_+"has a key path longer than "+Xh+" bytes ("+n.byteLength_+").");if(n.parts_.length>Yh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yh+") or object contains a cycle "+mn(n))}function mn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Im{static getInstance(){return new ql}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=1e3,CA=60*5*1e3,Jh=30*1e3,SA=1.3,RA=3e4,bA="server_kill",Zh=3;class kt extends wm{constructor(e,t,r,s,i,a,l,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=kt.nextPersistentConnectionId_++,this.log_=Ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fr,this.maxReconnectDelay_=CA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ql.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Di.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(Ne(i)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new rl,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(a).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},a="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(a,i,l=>{const u=l.d,h=l.s;kt.warnOnListenWarnings_(u,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ot(e,"w")){const r=tr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Jy(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,a=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},a="n";s&&(i.q=r,i.t=s),this.sendRequest(a,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const a={p:t,d:r};i!==void 0&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):La("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RA&&(this.reconnectDelay_=Fr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+kt.nextConnectionId_++,i=this.lastSessionId;let a=!1,l=null;const u=function(){l?l.close():(a=!0,r())},h=function(p){V(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:u,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,_]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);a?Be("getToken() completed but was canceled"):(Be("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=_&&_.token,l=new EA(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,I=>{Xe(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(bA)},i))}catch(p){this.log_("Failed to get token: "+p),a||(this.repoInfo_.nodeAdmin&&Xe(p),u())}}}interrupt(e){Be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ru(this.interruptReasons_)&&(this.reconnectDelay_=Fr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>Ul(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new fe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Be("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zh&&(this.reconnectDelay_=Jh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Be("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+em.replace(/\./g,"-")]=1,of()?e["framework.cordova"]=1:zy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Di.getInstance().currentlyOnline();return Ru(this.interruptReasons_)&&e}}kt.nextPersistentConnectionId_=0;kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ee(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new ee(ur,e),s=new ee(ur,t);return this.compare(r,s)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;class Pm extends lo{static get __EMPTY_NODE(){return Qs}static set __EMPTY_NODE(e){Qs=e}compare(e,t){return Er(e.name,t.name)}isDefinedOn(e){throw fr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ee.MIN}maxPost(){return new ee(An,Qs)}makePost(e,t){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Qs)}toString(){return".key"}}const Kn=new Pm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?r(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Re.RED,this.left=s??Ge.EMPTY_NODE,this.right=i??Ge.EMPTY_NODE}copy(e,t,r,s,i){return new Re(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class PA{copy(e,t,r,s,i){return this}insert(e,t,r){return new Re(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,t=Ge.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ge(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ys(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ys(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ys(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ys(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new PA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(n,e){return Er(n.name,e.name)}function zl(n,e){return Er(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;function NA(n){Ua=n}const km=function(n){return typeof n=="number"?"number:"+im(n):"string:"+n},Nm=function(n){if(n.isLeafNode()){const e=n.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ot(e,".sv"),"Priority must be a string or number.")}else V(n===Ua||n.isEmpty(),"priority of unexpected type.");V(n===Ua||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed;class Ae{static set __childrenNodeConstructor(e){ed=e}static get __childrenNodeConstructor(){return ed}constructor(e,t=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:Z(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Z(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(V(r!==".priority"||rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+km(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=im(this.value_):e+=this.value_,this.lazyHash_=nm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Ae.VALUE_TYPE_ORDER.indexOf(t),i=Ae.VALUE_TYPE_ORDER.indexOf(r);return V(s>=0,"Unknown leaf type: "+t),V(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dm,xm;function DA(n){Dm=n}function xA(n){xm=n}class VA extends lo{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?Er(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(An,new Ae("[PRIORITY-POST]",xm))}makePost(e,t){const r=Dm(e);return new ee(t,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new VA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=Math.log(2);class MA{constructor(e){const t=i=>parseInt(Math.log(i)/OA,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xi=function(n,e,t,r){n.sort(e);const s=function(u,h){const f=h-u;let p,_;if(f===0)return null;if(f===1)return p=n[u],_=t?t(p):p,new Re(_,p.node,Re.BLACK,null,null);{const I=parseInt(f/2,10)+u,R=s(u,I),N=s(I+1,h);return p=n[I],_=t?t(p):p,new Re(_,p.node,Re.BLACK,R,N)}},i=function(u){let h=null,f=null,p=n.length;const _=function(R,N){const D=p-R,B=p;p-=R;const L=s(D+1,B),F=n[D],W=t?t(F):F;I(new Re(W,F.node,N,null,L))},I=function(R){h?(h.left=R,h=R):(f=R,h=R)};for(let R=0;R<u.count;++R){const N=u.nextBitIsOne(),D=Math.pow(2,u.count-(R+1));N?_(D,Re.BLACK):(_(D,Re.BLACK),_(D,Re.RED))}return f},a=new MA(n.length),l=i(a);return new Ge(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;const Fn={};class Rt{static get Default(){return V(Fn&&$e,"ChildrenNode.ts has not been loaded"),ea=ea||new Rt({".priority":Fn},{".priority":$e}),ea}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=tr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ge?t:null}hasIndex(e){return Ot(this.indexSet_,e.toString())}addIndex(e,t){V(e!==Kn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(ee.Wrap);let a=i.getNext();for(;a;)s=s||e.isDefinedOn(a.node),r.push(a),a=i.getNext();let l;s?l=xi(r,e.getCompare()):l=Fn;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const f=Object.assign({},this.indexes_);return f[u]=l,new Rt(f,h)}addToIndexes(e,t){const r=_i(this.indexes_,(s,i)=>{const a=tr(this.indexSet_,i);if(V(a,"Missing index implementation for "+i),s===Fn)if(a.isDefinedOn(e.node)){const l=[],u=t.getIterator(ee.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&l.push(h),h=u.getNext();return l.push(e),xi(l,a.getCompare())}else return Fn;else{const l=t.get(e.name);let u=s;return l&&(u=u.remove(new ee(e.name,l))),u.insert(e,e.node)}});return new Rt(r,this.indexSet_)}removeFromIndexes(e,t){const r=_i(this.indexes_,s=>{if(s===Fn)return s;{const i=t.get(e.name);return i?s.remove(new ee(e.name,i)):s}});return new Rt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur;class re{static get EMPTY_NODE(){return Ur||(Ur=new re(new Ge(zl),null,Rt.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Nm(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ur}updatePriority(e){return this.children_.isEmpty()?this:new re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ur:t}}getChild(e){const t=Z(e);return t===null?this:this.getImmediateChild(t).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(V(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new ee(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const a=s.isEmpty()?Ur:this.priorityNode_;return new re(s,a,i)}}updateChild(e,t){const r=Z(e);if(r===null)return t;{V(Z(e)!==".priority"||rn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(he(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild($e,(a,l)=>{t[a]=l.val(e),r++,i&&re.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):i=!1}),!e&&i&&s<2*r){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+km(this.getPriority().val())+":"),this.forEachChild($e,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":nm(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ee(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ee(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ee(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ee.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Is?-1:0}withIndex(e){if(e===Kn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new re(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Kn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator($e),s=t.getIterator($e);let i=r.getNext(),a=s.getNext();for(;i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=r.getNext(),a=s.getNext()}return i===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Kn?null:this.indexMap_.get(e.toString())}}re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class LA extends re{constructor(){super(new Ge(zl),re.EMPTY_NODE,Rt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return re.EMPTY_NODE}isEmpty(){return!1}}const Is=new LA;Object.defineProperties(ee,{MIN:{value:new ee(ur,re.EMPTY_NODE)},MAX:{value:new ee(An,Is)}});Pm.__EMPTY_NODE=re.EMPTY_NODE;Ae.__childrenNodeConstructor=re;NA(Is);xA(Is);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=!0;function je(n,e=null){if(n===null)return re.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ae(t,je(e))}if(!(n instanceof Array)&&FA){const t=[];let r=!1;if(rt(n,(a,l)=>{if(a.substring(0,1)!=="."){const u=je(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),t.push(new ee(a,u)))}}),t.length===0)return re.EMPTY_NODE;const i=xi(t,kA,a=>a.name,zl);if(r){const a=xi(t,$e.getCompare());return new re(i,je(e),new Rt({".priority":a},{".priority":$e}))}else return new re(i,je(e),Rt.Default)}else{let t=re.EMPTY_NODE;return rt(n,(r,s)=>{if(Ot(n,r)&&r.substring(0,1)!=="."){const i=je(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(je(e))}}DA(je);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA extends lo{constructor(e){super(),this.indexPath_=e,V(!X(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?Er(e.name,t.name):i}makePost(e,t){const r=je(e),s=re.EMPTY_NODE.updateChild(this.indexPath_,r);return new ee(t,s)}maxPost(){const e=re.EMPTY_NODE.updateChild(this.indexPath_,Is);return new ee(An,e)}toString(){return Cm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA extends lo{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Er(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,t){const r=je(e);return new ee(t,r)}toString(){return".value"}}const jA=new BA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n){return{type:"value",snapshotNode:n}}function qA(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function zA(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function td(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function WA(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ur}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:An}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Wl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nd(n){const e={};if(n.isDefault())return e;let t;if(n.index_===$e?t="$priority":n.index_===jA?t="$value":n.index_===Kn?t="$key":(V(n.index_ instanceof UA,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ne(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ne(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ne(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ne(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ne(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function rd(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==$e&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends wm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ts("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const a=Vi.getListenId_(e,r),l={};this.listens_[a]=l;const u=nd(e._queryParams);this.restRequest_(i+".json",u,(h,f)=>{let p=f;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(i,p,!1,r),tr(this.listens_,a)===l){let _;h?h===401?_="permission_denied":_="rest_error:"+h:_="ok",s(_,null)}})}unlisten(e,t){const r=Vi.getListenId_(e,t);delete this.listens_[r]}get(e){const t=nd(e._queryParams),r=e._path.toString(),s=new rl;return this.restRequest_(r+".json",t,(i,a)=>{let l=a;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ev(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=ns(l.responseText)}catch{Xe("Failed to parse JSON response for "+a+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&Xe("Got unsuccessful REST response for "+a+" Status: "+l.status),r(l.status);r=null}},l.open("GET",a,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.rootNode_=re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(){return{value:null,children:new Map}}function Vm(n,e,t){if(X(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Z(e);n.children.has(r)||n.children.set(r,Oi());const s=n.children.get(r);e=he(e),Vm(s,e,t)}}function Ba(n,e,t){n.value!==null?t(e,n.value):HA(n,(r,s)=>{const i=new fe(e.toString()+"/"+r);Ba(s,i,t)})}function HA(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&rt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=10*1e3,QA=30*1e3,YA=5*60*1e3;class XA{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new KA(e);const r=sd+(QA-sd)*Math.random();Jr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;rt(e,(s,i)=>{i>0&&Ot(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),Jr(this.reportStats_.bind(this),Math.floor(Math.random()*2*YA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function Om(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=mt.ACK_USER_WRITE,this.source=Om()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new fe(e));return new Mi(oe(),t,this.revert)}}else return V(Z(this.path)===e,"operationForChild called for unrelated child."),new Mi(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=mt.OVERWRITE}operationForChild(e){return X(this.path)?new Cn(this.source,oe(),this.snap.getImmediateChild(e)):new Cn(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=mt.MERGE}operationForChild(e){if(X(this.path)){const t=this.children.subtree(new fe(e));return t.isEmpty()?null:t.value?new Cn(this.source,oe(),t.value):new fs(this.source,oe(),t)}else return V(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fs(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const t=Z(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function JA(n,e,t,r){const s=[],i=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&i.push(WA(a.childName,a.snapshotNode))}),Br(n,s,"child_removed",e,r,t),Br(n,s,"child_added",e,r,t),Br(n,s,"child_moved",i,r,t),Br(n,s,"child_changed",e,r,t),Br(n,s,"value",e,r,t),s}function Br(n,e,t,r,s,i){const a=r.filter(l=>l.type===t);a.sort((l,u)=>e0(n,l,u)),a.forEach(l=>{const u=ZA(n,l,i);s.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(u,n.query_))})})}function ZA(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function e0(n,e,t){if(e.childName==null||t.childName==null)throw fr("Should only compare child_ events.");const r=new ee(e.childName,e.snapshotNode),s=new ee(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(n,e){return{eventCache:n,serverCache:e}}function Zr(n,e,t,r){return Fm(new Gl(e,t,r),n.serverCache)}function Um(n,e,t,r){return Fm(n.eventCache,new Gl(e,t,r))}function ja(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Sn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;const t0=()=>(ta||(ta=new Ge(jI)),ta);class ue{static fromObject(e){let t=new ue(null);return rt(e,(r,s)=>{t=t.set(new fe(r),s)}),t}constructor(e,t=t0()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:oe(),value:this.value};if(X(e))return null;{const r=Z(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(he(e),t);return i!=null?{path:be(new fe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const t=Z(e),r=this.children.get(t);return r!==null?r.subtree(he(e)):new ue(null)}}set(e,t){if(X(e))return new ue(t,this.children);{const r=Z(e),i=(this.children.get(r)||new ue(null)).set(he(e),t),a=this.children.insert(r,i);return new ue(this.value,a)}}remove(e){if(X(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const t=Z(e),r=this.children.get(t);if(r){const s=r.remove(he(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new ue(null):new ue(this.value,i)}else return this}}get(e){if(X(e))return this.value;{const t=Z(e),r=this.children.get(t);return r?r.get(he(e)):null}}setTree(e,t){if(X(e))return t;{const r=Z(e),i=(this.children.get(r)||new ue(null)).setTree(he(e),t);let a;return i.isEmpty()?a=this.children.remove(r):a=this.children.insert(r,i),new ue(this.value,a)}}fold(e){return this.fold_(oe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(be(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,oe(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(X(e))return null;{const i=Z(e),a=this.children.get(i);return a?a.findOnPath_(he(e),be(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,oe(),t)}foreachOnPath_(e,t,r){if(X(e))return this;{this.value&&r(t,this.value);const s=Z(e),i=this.children.get(s);return i?i.foreachOnPath_(he(e),be(t,s),r):new ue(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(be(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new ue(null))}}function es(n,e,t){if(X(e))return new ut(new ue(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const a=tt(s,e);return i=i.updateChild(a,t),new ut(n.writeTree_.set(s,i))}else{const s=new ue(t),i=n.writeTree_.setTree(e,s);return new ut(i)}}}function id(n,e,t){let r=n;return rt(t,(s,i)=>{r=es(r,be(e,s),i)}),r}function od(n,e){if(X(e))return ut.empty();{const t=n.writeTree_.setTree(e,new ue(null));return new ut(t)}}function $a(n,e){return Nn(n,e)!=null}function Nn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(tt(t.path,e)):null}function ad(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild($e,(r,s)=>{e.push(new ee(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ee(r,s.value))}),e}function Qt(n,e){if(X(e))return n;{const t=Nn(n,e);return t!=null?new ut(new ue(t)):new ut(n.writeTree_.subtree(e))}}function qa(n){return n.writeTree_.isEmpty()}function hr(n,e){return Bm(oe(),n.writeTree_,e)}function Bm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(V(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=Bm(be(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(be(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n,e){return Gm(e,n)}function n0(n,e,t,r,s){V(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=es(n.visibleWrites,e,t)),n.lastWriteId=r}function r0(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function s0(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);V(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&i0(l,r.path)?s=!1:lt(r.path,l.path)&&(i=!0)),a--}if(s){if(i)return o0(n),!0;if(r.snap)n.visibleWrites=od(n.visibleWrites,r.path);else{const l=r.children;rt(l,u=>{n.visibleWrites=od(n.visibleWrites,be(r.path,u))})}return!0}else return!1}function i0(n,e){if(n.snap)return lt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&lt(be(n.path,t),e))return!0;return!1}function o0(n){n.visibleWrites=$m(n.allWrites,a0,oe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function a0(n){return n.visible}function $m(n,e,t){let r=ut.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const a=i.path;let l;if(i.snap)lt(t,a)?(l=tt(t,a),r=es(r,l,i.snap)):lt(a,t)&&(l=tt(a,t),r=es(r,oe(),i.snap.getChild(l)));else if(i.children){if(lt(t,a))l=tt(t,a),r=id(r,l,i.children);else if(lt(a,t))if(l=tt(a,t),X(l))r=id(r,oe(),i.children);else{const u=tr(i.children,Z(l));if(u){const h=u.getChild(he(l));r=es(r,oe(),h)}}}else throw fr("WriteRecord should have .snap or .children")}}return r}function qm(n,e,t,r,s){if(!r&&!s){const i=Nn(n.visibleWrites,e);if(i!=null)return i;{const a=Qt(n.visibleWrites,e);if(qa(a))return t;if(t==null&&!$a(a,oe()))return null;{const l=t||re.EMPTY_NODE;return hr(a,l)}}}else{const i=Qt(n.visibleWrites,e);if(!s&&qa(i))return t;if(!s&&t==null&&!$a(i,oe()))return null;{const a=function(h){return(h.visible||s)&&(!r||!~r.indexOf(h.writeId))&&(lt(h.path,e)||lt(e,h.path))},l=$m(n.allWrites,a,e),u=t||re.EMPTY_NODE;return hr(l,u)}}}function l0(n,e,t){let r=re.EMPTY_NODE;const s=Nn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild($e,(i,a)=>{r=r.updateImmediateChild(i,a)}),r;if(t){const i=Qt(n.visibleWrites,e);return t.forEachChild($e,(a,l)=>{const u=hr(Qt(i,new fe(a)),l);r=r.updateImmediateChild(a,u)}),ad(i).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}else{const i=Qt(n.visibleWrites,e);return ad(i).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}}function c0(n,e,t,r,s){V(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=be(e,t);if($a(n.visibleWrites,i))return null;{const a=Qt(n.visibleWrites,i);return qa(a)?s.getChild(t):hr(a,s.getChild(t))}}function u0(n,e,t,r){const s=be(e,t),i=Nn(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const a=Qt(n.visibleWrites,s);return hr(a,r.getNode().getImmediateChild(t))}else return null}function h0(n,e){return Nn(n.visibleWrites,e)}function d0(n,e,t,r,s,i,a){let l;const u=Qt(n.visibleWrites,e),h=Nn(u,oe());if(h!=null)l=h;else if(t!=null)l=hr(u,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=a.getCompare(),_=i?l.getReverseIteratorFrom(r,a):l.getIteratorFrom(r,a);let I=_.getNext();for(;I&&f.length<s;)p(I,r)!==0&&f.push(I),I=_.getNext();return f}else return[]}function f0(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function za(n,e,t,r){return qm(n.writeTree,n.treePath,e,t,r)}function zm(n,e){return l0(n.writeTree,n.treePath,e)}function ld(n,e,t,r){return c0(n.writeTree,n.treePath,e,t,r)}function Li(n,e){return h0(n.writeTree,be(n.treePath,e))}function p0(n,e,t,r,s,i){return d0(n.writeTree,n.treePath,e,t,r,s,i)}function Hl(n,e,t){return u0(n.writeTree,n.treePath,e,t)}function Wm(n,e){return Gm(be(n.treePath,e),n.writeTree)}function Gm(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;V(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),V(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,td(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,zA(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,qA(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,td(r,e.snapshotNode,s.oldSnap));else throw fr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Hm=new g0;class Kl{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Gl(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hl(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sn(this.viewCache_),i=p0(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}function _0(n,e){V(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function y0(n,e,t,r,s){const i=new m0;let a,l;if(t.type===mt.OVERWRITE){const h=t;h.source.fromUser?a=Wa(n,e,h.path,h.snap,r,s,i):(V(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!X(h.path),a=Fi(n,e,h.path,h.snap,r,s,l,i))}else if(t.type===mt.MERGE){const h=t;h.source.fromUser?a=E0(n,e,h.path,h.children,r,s,i):(V(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),a=Ga(n,e,h.path,h.children,r,s,l,i))}else if(t.type===mt.ACK_USER_WRITE){const h=t;h.revert?a=I0(n,e,h.path,r,s,i):a=T0(n,e,h.path,h.affectedTree,r,s,i)}else if(t.type===mt.LISTEN_COMPLETE)a=w0(n,e,t.path,r,i);else throw fr("Unknown operation type: "+t.type);const u=i.getChanges();return v0(e,a,u),{viewCache:a,changes:u}}function v0(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=ja(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push($A(ja(e)))}}function Km(n,e,t,r,s,i){const a=e.eventCache;if(Li(r,t)!=null)return e;{let l,u;if(X(t))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Sn(e),f=h instanceof re?h:re.EMPTY_NODE,p=zm(r,f);l=n.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const h=za(r,Sn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const h=Z(t);if(h===".priority"){V(rn(t)===1,"Can't have a priority with additional path components");const f=a.getNode();u=e.serverCache.getNode();const p=ld(r,t,f,u);p!=null?l=n.filter.updatePriority(f,p):l=a.getNode()}else{const f=he(t);let p;if(a.isCompleteForChild(h)){u=e.serverCache.getNode();const _=ld(r,t,a.getNode(),u);_!=null?p=a.getNode().getImmediateChild(h).updateChild(f,_):p=a.getNode().getImmediateChild(h)}else p=Hl(r,h,e.serverCache);p!=null?l=n.filter.updateChild(a.getNode(),h,p,f,s,i):l=a.getNode()}}return Zr(e,l,a.isFullyInitialized()||X(t),n.filter.filtersNodes())}}function Fi(n,e,t,r,s,i,a,l){const u=e.serverCache;let h;const f=a?n.filter:n.filter.getIndexedFilter();if(X(t))h=f.updateFullNode(u.getNode(),r,null);else if(f.filtersNodes()&&!u.isFiltered()){const I=u.getNode().updateChild(t,r);h=f.updateFullNode(u.getNode(),I,null)}else{const I=Z(t);if(!u.isCompleteForPath(t)&&rn(t)>1)return e;const R=he(t),D=u.getNode().getImmediateChild(I).updateChild(R,r);I===".priority"?h=f.updatePriority(u.getNode(),D):h=f.updateChild(u.getNode(),I,D,R,Hm,null)}const p=Um(e,h,u.isFullyInitialized()||X(t),f.filtersNodes()),_=new Kl(s,p,i);return Km(n,p,t,s,_,l)}function Wa(n,e,t,r,s,i,a){const l=e.eventCache;let u,h;const f=new Kl(s,e,i);if(X(t))h=n.filter.updateFullNode(e.eventCache.getNode(),r,a),u=Zr(e,h,!0,n.filter.filtersNodes());else{const p=Z(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),r),u=Zr(e,h,l.isFullyInitialized(),l.isFiltered());else{const _=he(t),I=l.getNode().getImmediateChild(p);let R;if(X(_))R=r;else{const N=f.getCompleteChild(p);N!=null?Am(_)===".priority"&&N.getChild(Sm(_)).isEmpty()?R=N:R=N.updateChild(_,r):R=re.EMPTY_NODE}if(I.equals(R))u=e;else{const N=n.filter.updateChild(l.getNode(),p,R,_,f,a);u=Zr(e,N,l.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function cd(n,e){return n.eventCache.isCompleteForChild(e)}function E0(n,e,t,r,s,i,a){let l=e;return r.foreach((u,h)=>{const f=be(t,u);cd(e,Z(f))&&(l=Wa(n,l,f,h,s,i,a))}),r.foreach((u,h)=>{const f=be(t,u);cd(e,Z(f))||(l=Wa(n,l,f,h,s,i,a))}),l}function ud(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ga(n,e,t,r,s,i,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;X(t)?h=r:h=new ue(null).setTree(t,r);const f=e.serverCache.getNode();return h.children.inorderTraversal((p,_)=>{if(f.hasChild(p)){const I=e.serverCache.getNode().getImmediateChild(p),R=ud(n,I,_);u=Fi(n,u,new fe(p),R,s,i,a,l)}}),h.children.inorderTraversal((p,_)=>{const I=!e.serverCache.isCompleteForChild(p)&&_.value===null;if(!f.hasChild(p)&&!I){const R=e.serverCache.getNode().getImmediateChild(p),N=ud(n,R,_);u=Fi(n,u,new fe(p),N,s,i,a,l)}}),u}function T0(n,e,t,r,s,i,a){if(Li(s,t)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(X(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return Fi(n,e,t,u.getNode().getChild(t),s,i,l,a);if(X(t)){let h=new ue(null);return u.getNode().forEachChild(Kn,(f,p)=>{h=h.set(new fe(f),p)}),Ga(n,e,t,h,s,i,l,a)}else return e}else{let h=new ue(null);return r.foreach((f,p)=>{const _=be(t,f);u.isCompleteForPath(_)&&(h=h.set(f,u.getNode().getChild(_)))}),Ga(n,e,t,h,s,i,l,a)}}function w0(n,e,t,r,s){const i=e.serverCache,a=Um(e,i.getNode(),i.isFullyInitialized()||X(t),i.isFiltered());return Km(n,a,t,r,Hm,s)}function I0(n,e,t,r,s,i){let a;if(Li(r,t)!=null)return e;{const l=new Kl(r,e,s),u=e.eventCache.getNode();let h;if(X(t)||Z(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=za(r,Sn(e));else{const p=e.serverCache.getNode();V(p instanceof re,"serverChildren would be complete if leaf node"),f=zm(r,p)}f=f,h=n.filter.updateFullNode(u,f,i)}else{const f=Z(t);let p=Hl(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=u.getImmediateChild(f)),p!=null?h=n.filter.updateChild(u,f,p,he(t),l,i):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(u,f,re.EMPTY_NODE,he(t),l,i):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=za(r,Sn(e)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,i)))}return a=e.serverCache.isFullyInitialized()||Li(r,oe())!=null,Zr(e,h,a,n.filter.filtersNodes())}}function A0(n,e){const t=Sn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!X(e)&&!t.getImmediateChild(Z(e)).isEmpty())?t.getChild(e):null}function hd(n,e,t,r){e.type===mt.MERGE&&e.source.queryId!==null&&(V(Sn(n.viewCache_),"We should always have a full cache before handling merges"),V(ja(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=y0(n.processor_,s,e,t,r);return _0(n.processor_,i.viewCache),V(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,C0(n,i.changes,i.viewCache.eventCache.getNode())}function C0(n,e,t,r){const s=n.eventRegistrations_;return JA(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;function S0(n){V(!dd,"__referenceConstructor has already been defined"),dd=n}function Ql(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return V(i!=null,"SyncTree gave us an op for an invalid query."),hd(i,e,t,r)}else{let i=[];for(const a of n.views.values())i=i.concat(hd(a,e,t,r));return i}}function Yl(n,e){let t=null;for(const r of n.views.values())t=t||A0(r,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;function R0(n){V(!fd,"__referenceConstructor has already been defined"),fd=n}class pd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=f0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function b0(n,e,t,r,s){return n0(n.pendingWriteTree_,e,t,r,s),s?uo(n,new Cn(Om(),e,t)):[]}function Wn(n,e,t=!1){const r=r0(n.pendingWriteTree_,e);if(s0(n.pendingWriteTree_,e)){let i=new ue(null);return r.snap!=null?i=i.set(oe(),!0):rt(r.children,a=>{i=i.set(new fe(a),!0)}),uo(n,new Mi(r.path,i,t))}else return[]}function co(n,e,t){return uo(n,new Cn(Mm(),e,t))}function P0(n,e,t){const r=ue.fromObject(t);return uo(n,new fs(Mm(),e,r))}function k0(n,e,t,r){const s=Jm(n,r);if(s!=null){const i=Zm(s),a=i.path,l=i.queryId,u=tt(a,e),h=new Cn(Lm(l),u,t);return eg(n,a,h)}else return[]}function N0(n,e,t,r){const s=Jm(n,r);if(s){const i=Zm(s),a=i.path,l=i.queryId,u=tt(a,e),h=ue.fromObject(t),f=new fs(Lm(l),u,h);return eg(n,a,f)}else return[]}function Qm(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(a,l)=>{const u=tt(a,e),h=Yl(l,u);if(h)return h});return qm(s,e,i,t,!0)}function uo(n,e){return Ym(e,n.syncPointTree_,null,jm(n.pendingWriteTree_,oe()))}function Ym(n,e,t,r){if(X(n.path))return Xm(n,e,t,r);{const s=e.get(oe());t==null&&s!=null&&(t=Yl(s,oe()));let i=[];const a=Z(n.path),l=n.operationForChild(a),u=e.children.get(a);if(u&&l){const h=t?t.getImmediateChild(a):null,f=Wm(r,a);i=i.concat(Ym(l,u,h,f))}return s&&(i=i.concat(Ql(s,n,r,t))),i}}function Xm(n,e,t,r){const s=e.get(oe());t==null&&s!=null&&(t=Yl(s,oe()));let i=[];return e.children.inorderTraversal((a,l)=>{const u=t?t.getImmediateChild(a):null,h=Wm(r,a),f=n.operationForChild(a);f&&(i=i.concat(Xm(f,l,u,h)))}),s&&(i=i.concat(Ql(s,n,r,t))),i}function Jm(n,e){return n.tagToQueryMap.get(e)}function Zm(n){const e=n.indexOf("$");return V(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new fe(n.substr(0,e))}}function eg(n,e,t){const r=n.syncPointTree_.get(e);V(r,"Missing sync point for query tag that we're tracking");const s=jm(n.pendingWriteTree_,e);return Ql(r,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Xl(t)}node(){return this.node_}}class Jl{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=be(this.path_,e);return new Jl(this.syncTree_,t)}node(){return Qm(this.syncTree_,this.path_)}}const D0=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},md=function(n,e,t){if(!n||typeof n!="object")return n;if(V(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return x0(n[".sv"],e,t);if(typeof n[".sv"]=="object")return V0(n[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},x0=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:V(!1,"Unexpected server value: "+n)}},V0=function(n,e,t){n.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&V(!1,"Unexpected increment value: "+r);const s=e.node();if(V(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const a=s.getValue();return typeof a!="number"?r:a+r},O0=function(n,e,t,r){return Zl(e,new Jl(t,n),r)},M0=function(n,e,t){return Zl(n,new Xl(e),t)};function Zl(n,e,t){const r=n.getPriority().val(),s=md(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const a=n,l=md(a.getValue(),e,t);return l!==a.getValue()||s!==a.getPriority().val()?new Ae(l,je(s)):n}else{const a=n;return i=a,s!==a.getPriority().val()&&(i=i.updatePriority(new Ae(s))),a.forEachChild($e,(l,u)=>{const h=Zl(u,e.getImmediateChild(l),t);h!==u&&(i=i.updateImmediateChild(l,h))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function tc(n,e){let t=e instanceof fe?e:new fe(e),r=n,s=Z(t);for(;s!==null;){const i=tr(r.node.children,s)||{children:{},childCount:0};r=new ec(s,r,i),t=he(t),s=Z(t)}return r}function Tr(n){return n.node.value}function tg(n,e){n.node.value=e,Ha(n)}function ng(n){return n.node.childCount>0}function L0(n){return Tr(n)===void 0&&!ng(n)}function ho(n,e){rt(n.node.children,(t,r)=>{e(new ec(t,n,r))})}function rg(n,e,t,r){t&&e(n),ho(n,s=>{rg(s,e,!0)})}function F0(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function As(n){return new fe(n.parent===null?n.name:As(n.parent)+"/"+n.name)}function Ha(n){n.parent!==null&&U0(n.parent,n.name,n)}function U0(n,e,t){const r=L0(t),s=Ot(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Ha(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ha(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=/[\[\].#$\/\u0000-\u001F\u007F]/,j0=/[\[\].#$\u0000-\u001F\u007F]/,na=10*1024*1024,sg=function(n){return typeof n=="string"&&n.length!==0&&!B0.test(n)},$0=function(n){return typeof n=="string"&&n.length!==0&&!j0.test(n)},q0=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$0(n)},ig=function(n,e,t){const r=t instanceof fe?new wA(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+mn(r));if(typeof e=="function")throw new Error(n+"contains a function "+mn(r)+" with contents = "+e.toString());if(rm(e))throw new Error(n+"contains "+e.toString()+" "+mn(r));if(typeof e=="string"&&e.length>na/3&&Gi(e)>na)throw new Error(n+"contains a string greater than "+na+" utf8 bytes "+mn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(rt(e,(a,l)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(i=!0,!sg(a)))throw new Error(n+" contains an invalid key ("+a+") "+mn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IA(r,a),ig(n,l,r),AA(r)}),s&&i)throw new Error(n+' contains ".value" child '+mn(r)+" in addition to actual children.")}},z0=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!q0(t))throw new Error(nv(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function G0(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!Rm(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function Dn(n,e,t){G0(n,t),H0(n,r=>lt(r,e)||lt(e,r))}function H0(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(K0(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function K0(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Xr&&Be("event: "+t.toString()),ws(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="repo_interrupt",Y0=25;class X0{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new W0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oi(),this.transactionQueueTree_=new ec,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function J0(n,e,t){if(n.stats_=jl(n.repoInfo_),n.forceRestClient_||HI())n.server_=new Vi(n.repoInfo_,(r,s,i,a)=>{gd(n,r,s,i,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>_d(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new kt(n.repoInfo_,e,(r,s,i,a)=>{gd(n,r,s,i,a)},r=>{_d(n,r)},r=>{eC(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=JI(n.repoInfo_,()=>new XA(n.stats_,n.server_)),n.infoData_=new GA,n.infoSyncTree_=new pd({startListening:(r,s,i,a)=>{let l=[];const u=n.infoData_.getNode(r._path);return u.isEmpty()||(l=co(n.infoSyncTree_,r._path,u),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),nc(n,"connected",!1),n.serverSyncTree_=new pd({startListening:(r,s,i,a)=>(n.server_.listen(r,i,s,(l,u)=>{const h=a(l,u);Dn(n.eventQueue_,r._path,h)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function Z0(n){const t=n.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function og(n){return D0({timestamp:Z0(n)})}function gd(n,e,t,r,s){n.dataUpdateCount++;const i=new fe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(r){const u=_i(t,h=>je(h));a=N0(n.serverSyncTree_,i,u,s)}else{const u=je(t);a=k0(n.serverSyncTree_,i,u,s)}else if(r){const u=_i(t,h=>je(h));a=P0(n.serverSyncTree_,i,u)}else{const u=je(t);a=co(n.serverSyncTree_,i,u)}let l=i;a.length>0&&(l=sc(n,i)),Dn(n.eventQueue_,l,a)}function _d(n,e){nc(n,"connected",e),e===!1&&nC(n)}function eC(n,e){rt(e,(t,r)=>{nc(n,t,r)})}function nc(n,e,t){const r=new fe("/.info/"+e),s=je(t);n.infoData_.updateSnapshot(r,s);const i=co(n.infoSyncTree_,r,s);Dn(n.eventQueue_,r,i)}function tC(n){return n.nextWriteId_++}function nC(n){ag(n,"onDisconnectEvents");const e=og(n),t=Oi();Ba(n.onDisconnect_,oe(),(s,i)=>{const a=O0(s,i,n.serverSyncTree_,e);Vm(t,s,a)});let r=[];Ba(t,oe(),(s,i)=>{r=r.concat(co(n.serverSyncTree_,s,i));const a=oC(n,s);sc(n,a)}),n.onDisconnect_=Oi(),Dn(n.eventQueue_,oe(),r)}function rC(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Q0)}function ag(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Be(t,...e)}function lg(n,e,t){return Qm(n.serverSyncTree_,e,t)||re.EMPTY_NODE}function rc(n,e=n.transactionQueueTree_){if(e||fo(n,e),Tr(e)){const t=ug(n,e);V(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&sC(n,As(e),t)}else ng(e)&&ho(e,t=>{rc(n,t)})}function sC(n,e,t){const r=t.map(h=>h.currentWriteId),s=lg(n,e,r);let i=s;const a=s.hash();for(let h=0;h<t.length;h++){const f=t[h];V(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=tt(e,f.path);i=i.updateChild(p,f.currentOutputSnapshotRaw)}const l=i.val(!0),u=e;n.server_.put(u.toString(),l,h=>{ag(n,"transaction put response",{path:u.toString(),status:h});let f=[];if(h==="ok"){const p=[];for(let _=0;_<t.length;_++)t[_].status=2,f=f.concat(Wn(n.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&p.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();fo(n,tc(n.transactionQueueTree_,e)),rc(n,n.transactionQueueTree_),Dn(n.eventQueue_,e,f);for(let _=0;_<p.length;_++)ws(p[_])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Xe("transaction at "+u.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}sc(n,e)}},a)}function sc(n,e){const t=cg(n,e),r=As(t),s=ug(n,t);return iC(n,s,r),r}function iC(n,e,t){if(e.length===0)return;const r=[];let s=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],h=tt(t,u.path);let f=!1,p;if(V(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,p=u.abortReason,s=s.concat(Wn(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=Y0)f=!0,p="maxretry",s=s.concat(Wn(n.serverSyncTree_,u.currentWriteId,!0));else{const _=lg(n,u.path,a);u.currentInputSnapshot=_;const I=e[l].update(_.val());if(I!==void 0){ig("transaction failed: Data returned ",I,u.path);let R=je(I);typeof I=="object"&&I!=null&&Ot(I,".priority")||(R=R.updatePriority(_.getPriority()));const D=u.currentWriteId,B=og(n),L=M0(R,_,B);u.currentOutputSnapshotRaw=R,u.currentOutputSnapshotResolved=L,u.currentWriteId=tC(n),a.splice(a.indexOf(D),1),s=s.concat(b0(n.serverSyncTree_,u.path,L,u.currentWriteId,u.applyLocally)),s=s.concat(Wn(n.serverSyncTree_,D,!0))}else f=!0,p="nodata",s=s.concat(Wn(n.serverSyncTree_,u.currentWriteId,!0))}Dn(n.eventQueue_,t,s),s=[],f&&(e[l].status=2,function(_){setTimeout(_,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(p),!1,null))))}fo(n,n.transactionQueueTree_);for(let l=0;l<r.length;l++)ws(r[l]);rc(n,n.transactionQueueTree_)}function cg(n,e){let t,r=n.transactionQueueTree_;for(t=Z(e);t!==null&&Tr(r)===void 0;)r=tc(r,t),e=he(e),t=Z(e);return r}function ug(n,e){const t=[];return hg(n,e,t),t.sort((r,s)=>r.order-s.order),t}function hg(n,e,t){const r=Tr(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);ho(e,s=>{hg(n,s,t)})}function fo(n,e){const t=Tr(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,tg(e,t.length>0?t:void 0)}ho(e,r=>{fo(n,r)})}function oC(n,e){const t=As(cg(n,e)),r=tc(n.transactionQueueTree_,e);return F0(r,s=>{ra(n,s)}),ra(n,r),rg(r,s=>{ra(n,s)}),t}function ra(n,e){const t=Tr(e);if(t){const r=[];let s=[],i=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(V(i===a-1,"All SENT items should be at beginning of queue."),i=a,t[a].status=3,t[a].abortReason="set"):(V(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat(Wn(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&r.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));i===-1?tg(e,void 0):t.length=i+1,Dn(n.eventQueue_,As(e),s);for(let a=0;a<r.length;a++)ws(r[a])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function lC(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Xe(`Invalid query segment '${t}' in query '${n}'`)}return e}const yd=function(n,e){const t=cC(n),r=t.namespace;t.domain==="firebase.com"&&Vt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||UI();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new mm(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new fe(t.pathString)}},cC=function(n){let e="",t="",r="",s="",i="",a=!0,l="https",u=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(s=aC(n.substring(f,p)));const _=lC(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(a=l==="https"||l==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const I=e.slice(0,h);if(I.toLowerCase()==="localhost")t="localhost";else if(I.split(".").length<=2)t=I;else{const R=e.indexOf(".");r=e.substring(0,R).toLowerCase(),t=e.substring(R+1),i=r}"ns"in _&&(i=_.ns)}return{host:e,port:u,domain:t,subdomain:r,secure:a,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return X(this._path)?null:Am(this._path)}get ref(){return new wr(this._repo,this._path)}get _queryIdentifier(){const e=rd(this._queryParams),t=Ul(e);return t==="{}"?"default":t}get _queryObject(){return rd(this._queryParams)}isEqual(e){if(e=Yt(e),!(e instanceof ic))return!1;const t=this._repo===e._repo,r=Rm(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+TA(this._path)}}class wr extends ic{constructor(e,t){super(e,t,new Wl,!1)}get parent(){const e=Sm(this._path);return e===null?null:new wr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}S0(wr);R0(wr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="FIREBASE_DATABASE_EMULATOR_HOST",Ka={};let hC=!1;function dC(n,e,t,r){n.repoInfo_=new mm(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function fC(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||Vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Be("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=yd(i,s),l=a.repoInfo,u;typeof process<"u"&&Fh&&(u=Fh[uC]),u?(i=`http://${u}?ns=${l.namespace}`,a=yd(i,s),l=a.repoInfo):a.repoInfo.secure;const h=new QI(n.name,n.options,e);z0("Invalid Firebase Database URL",a),X(a.path)||Vt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=mC(l,n,h,new KI(n,t));return new gC(f,n)}function pC(n,e){const t=Ka[e];(!t||t[n.key]!==n)&&Vt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),rC(n),delete t[n.key]}function mC(n,e,t,r){let s=Ka[e.name];s||(s={},Ka[e.name]=s);let i=s[n.toURLString()];return i&&Vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new X0(n,hC,t,r),s[n.toURLString()]=i,i}class gC{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(J0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wr(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vt("Cannot call "+e+" on a deleted database.")}}function _C(n=mf(),e){const t=hf(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=tf("database");r&&yC(t,...r)}return t}function yC(n,e,t,r={}){n=Yt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&rs(r,i.repoInfo_.emulatorOptions))return;Vt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new hi(hi.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:rf(r.mockUserToken,n.app.options.projectId);a=new hi(l)}dC(i,s,r,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n){xI(ff),ss(new nr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return fC(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),Wt(Uh,Bh,n),Wt(Uh,Bh,"esm2017")}kt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};kt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};vC();const EC={apiKey:"AIzaSyDBBn5omSPOFAY2Hi1hUpOWd2pS4CXb7VM",authDomain:"pokka-76f7b.firebaseapp.com",projectId:"pokka-76f7b",storageBucket:"pokka-76f7b.appspot.com",messagingSenderId:"160359478699",appId:"1:160359478699:web:b58a068ee5597ff56f4eee",databaseURL:"https://pokka-76f7b-default-rtdb.asia-southeast1.firebasedatabase.app/"},dg=pf(EC),sa=cI(dg);_C(dg);const TC=()=>{const{address:n}=Ui(),[e,t]=Te.useState(null),[r,s]=Te.useState(!0),[i,a]=Te.useState(null);Te.useEffect(()=>{(async()=>{if(!n){t(null),s(!1);return}try{const p=await bI(Dh(sa,"usernames",n));p.exists()?t(p.data().username):t(null)}catch(p){console.error("Error fetching username:",p),a("Failed to fetch username")}finally{s(!1)}})()},[n]);const l=f=>f?f.length<3?"Username must be at least 3 characters long":f.length>20?"Username must be at most 20 characters long":/^[a-zA-Z0-9_]+$/.test(f)?null:"Username can only contain letters, numbers, and underscores":"Username is required",u=async f=>{try{const p=l(f);if(p)throw new Error(p);const _=wI(lI(sa,"usernames"),II("username","==",f.toLowerCase()));return(await PI(_)).empty}catch(p){throw console.error("Error checking username availability:",p),p}};return{username:e,isLoading:r,error:i,setUsername:async f=>{if(!n)throw new Error("No wallet connected");try{const p=l(f);if(p)throw new Error(p);if(!await u(f))throw new Error("Username already taken");await kI(Dh(sa,"usernames",n),{username:f.toLowerCase(),address:n,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),t(f)}catch(p){throw console.error("Error setting username:",p),a(p instanceof Error?p.message:"Failed to set username"),p}},checkUsernameAvailable:u,validateUsername:l}};function wC(){const{address:n}=Ui(),{username:e,setUsername:t,checkUsernameAvailable:r}=TC(),[s,i]=Te.useState(!1),[a,l]=Te.useState(""),[u,h]=Te.useState(null),[f,p]=Te.useState(!1);let _="0.00";const{data:I}=Td({address:"0xb82f36fb31bF0Be873879C031DE4150d40AfDda9",abi:Yd,functionName:"balanceOf",args:[n],query:{enabled:!!n}});I&&(_=wd(I,18));const R=async()=>{if(!a.trim()){h("Please enter a username");return}try{if(p(!0),h(null),!await r(a)){h("Username is already taken");return}await t(a),i(!1)}catch(N){h(N instanceof Error?N.message:"Failed to set username")}finally{p(!1)}};return b.jsxs(IC,{children:[b.jsx("h2",{children:"Your Profile"}),b.jsxs(Xs,{children:[b.jsx("h3",{children:"Username"}),s?b.jsxs(RC,{children:[b.jsx(kC,{type:"text",placeholder:"Enter username",value:a,onChange:N=>l(N.target.value),maxLength:20}),u&&b.jsx(DC,{children:u}),b.jsxs(NC,{children:[b.jsx(vd,{variant:"secondary",onClick:()=>i(!1),children:"Cancel"}),b.jsx(vd,{onClick:R,disabled:f||!a.trim(),children:f?"Checking...":"Save"})]})]}):b.jsxs(bC,{children:[b.jsx("span",{children:e||"No username set"}),b.jsx(PC,{onClick:()=>{l(e||""),i(!0)},children:e?"Change Username":"Set Username"})]})]}),b.jsxs(Xs,{children:[b.jsx("h3",{children:"Wallet Address"}),b.jsx(AC,{children:n||"Not connected"})]}),b.jsxs(Xs,{children:[b.jsx("h3",{children:"POKKA Balance"}),b.jsxs(CC,{children:[_," POKKA"]})]}),b.jsxs(Xs,{children:[b.jsx("h3",{children:"Get More POKKA"}),b.jsx(SC,{href:"https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0xb82f36fb31bF0Be873879C031DE4150d40AfDda9",target:"_blank",rel:"noopener noreferrer",children:"Trade on PancakeSwap"})]})]})}const IC=K.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    color: var(--pokka-cyan);
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`,Xs=K.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;

  h3 {
    color: var(--pokka-orange);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,AC=K.div`
  font-family: monospace;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 8px;
  word-break: break-all;
`,CC=K.div`
  font-size: 2rem;
  color: var(--pokka-cyan);
`,SC=K.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  color: var(--pokka-cyan);
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 1px solid var(--pokka-cyan);

  &:hover {
    background: rgba(0, 240, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
  }
`,RC=K.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,bC=K.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: var(--pokka-cyan);
`,PC=K.button`
  background: transparent;
  color: var(--pokka-orange);
  border: none;
  font-family: 'One Little Font', sans-serif;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`,kC=K.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--pokka-cyan);
  border-radius: 6px;
  color: var(--pokka-white);
  font-family: 'One Little Font', sans-serif;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--pokka-orange);
  }
`,NC=K.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,vd=K.button`
  background: ${n=>n.variant==="secondary"?"transparent":"var(--pokka-cyan)"};
  color: ${n=>n.variant==="secondary"?"var(--pokka-cyan)":"black"};
  border: 2px solid var(--pokka-cyan);
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-family: 'One Little Font', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,DC=K.p`
  color: var(--pokka-orange);
  margin-top: 0.5rem;
  text-align: center;
`,xC=K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 2rem;
  text-align: center;
  padding: 2rem;
`,VC=K.h2`
  color: var(--pokka-cyan);
  font-size: 2rem;
  margin-bottom: 1rem;
`,OC=K.p`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
`,MC=({children:n})=>{const{address:e}=Ui();return e?b.jsx(b.Fragment,{children:n}):b.jsxs(xC,{children:[b.jsx(VC,{children:"Connect Your Wallet"}),b.jsx(OC,{children:"Connect your wallet to access Pokka Games and compete for high scores!"}),b.jsx(Id,{})]})};function LC(n){const{data:e}=Td({address:"0xb82f36fb31bF0Be873879C031DE4150d40AfDda9",abi:Yd,functionName:"balanceOf",args:[n],query:{enabled:!!n}});return e?wd(e,18):"0.00"}const FC=K.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a1a;
  border-bottom: 1px solid #333;
`,UC=K.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #0cf;
    }
  }
`,Ed=K.button`
  background: #333;
  border: 1px solid #0cf;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: inherit;
  font-size: 1rem;

  &:hover {
    background: #444;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`,BC=K.span`
  color: #0cf;
  margin-right: 0.5rem;
`,jC=()=>{const{address:n}=Ui(),e=LC(n);return b.jsxs(FC,{children:[b.jsxs(UC,{children:[b.jsx(Js,{to:"/",children:"Home"}),b.jsx(Js,{to:"/games",children:"Games"}),b.jsx(Js,{to:"/profile",children:"Profile"})]}),b.jsx(Id.Custom,{children:({account:t,chain:r,openAccountModal:s,openConnectModal:i,mounted:a})=>{const l=a,u=l&&t&&r;return b.jsx("div",{...!l&&{"aria-hidden":!0,style:{opacity:0,pointerEvents:"none",userSelect:"none"}},children:u?b.jsxs(Ed,{onClick:s,children:[t.ensAvatar&&b.jsx("img",{src:t.ensAvatar,alt:t.displayName}),b.jsxs(BC,{children:[Number(e).toFixed(2)," POKKA"]}),t.displayName]}):b.jsx(Ed,{onClick:i,children:"Connect Wallet"})})}})]})},$C="5d64ede87e7217f25b3f1fc4b04f451b",qC=$g({appName:"Pokka Games",projectId:$C,chains:[iu],transports:{[iu.id]:qg()}}),zC=new zg;function WC(){return b.jsx(Wg,{client:zC,children:b.jsx(Gg,{config:qC,children:b.jsx(Hg,{theme:Kg({accentColor:"#00f0ff",accentColorForeground:"black"}),children:b.jsxs("div",{className:"app",children:[b.jsx(jC,{}),b.jsx(MC,{children:b.jsxs(Xg,{children:[b.jsx(js,{path:"/",element:b.jsx(ky,{})}),b.jsx(js,{path:"/games",element:b.jsx(Cu,{})}),b.jsx(js,{path:"/games/:gameId",element:b.jsx(Cu,{})}),b.jsx(js,{path:"/profile",element:b.jsx(wC,{})})]})})]})})})})}ia.createRoot(document.getElementById("root")).render(b.jsx(Qn.StrictMode,{children:b.jsx(Jg,{children:b.jsx(WC,{})})}));const YC=Object.freeze(Object.defineProperty({__proto__:null,default:Qg},Symbol.toStringTag,{value:"Module"}));export{YC as e};
