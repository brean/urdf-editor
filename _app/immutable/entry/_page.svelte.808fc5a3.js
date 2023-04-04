var ou=Object.defineProperty;var lu=(s,e,t)=>e in s?ou(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ui=(s,e,t)=>(lu(s,typeof e!="symbol"?e+"":e,t),t);import{J as Sa,K as Pt,L as Sn,t as wa,M as Yn,S as an,i as on,s as ln,C as lr,D as cr,E as ur,F as fr,g as Le,d as Oe,I as wn,y as mt,z as gt,A as _t,B as vt,k as rc,l as sc,m as ac,h as Ct,n as oc,b as Rt,N as cu,O as fi,v as Dn,f as In,P as uu,o as lc,Q as Ds,w as fu,R as Nr,a as Nn,c as Un,T as hu,e as Ht,U as Xa,V as Ya,W as du,X as ms,Y as gs,H as Gt,Z as Ea,_ as pu,$ as mu}from"../chunks/index.68c7eab6.js";import{d as gu,w as Xt,r as _u}from"../chunks/index.ce601521.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="151",Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vu=0,Ka=1,xu=2,cc=1,uc=2,Er=3,Kn=0,sn=1,Ln=2,si=0,$i=1,Za=2,Ja=3,Qa=4,bu=5,Ji=100,Mu=101,yu=102,$a=103,eo=104,Su=200,wu=201,Eu=202,Tu=203,fc=204,hc=205,Au=206,Cu=207,Lu=208,Pu=209,Ru=210,Du=0,Iu=1,Nu=2,da=3,Uu=4,ku=5,Ou=6,Fu=7,_s=0,zu=1,Bu=2,Rn=0,Gu=1,Hu=2,Vu=3,dc=4,Wu=5,pc=300,nr=301,ir=302,pa=303,ma=304,vs=306,vi=1e3,$t=1001,ga=1002,Vt=1003,to=1004,Is=1005,Qt=1006,ju=1007,Mi=1008,yi=1009,qu=1010,Xu=1011,mc=1012,Yu=1013,xi=1014,ii=1015,Pr=1016,Ku=1017,Zu=1018,er=1020,Ju=1021,gn=1023,Qu=1024,$u=1025,bi=1026,rr=1027,ef=1028,tf=1029,nf=1030,rf=1031,sf=1033,Ns=33776,Us=33777,ks=33778,Os=33779,no=35840,io=35841,ro=35842,so=35843,af=36196,ao=37492,oo=37496,lo=37808,co=37809,uo=37810,fo=37811,ho=37812,po=37813,mo=37814,go=37815,_o=37816,vo=37817,xo=37818,bo=37819,Mo=37820,yo=37821,Fs=36492,of=36283,So=36284,wo=36285,Eo=36286,fs=2300,hs=2301,zs=2302,To=2400,Ao=2401,Co=2402,lf=2500,ai=3e3,ft=3001,cf=3200,uf=3201,Aa=0,ff=1,An="srgb",Rr="srgb-linear",gc="display-p3",Bs=7680,hf=519,Lo=35044,Po="300 es",_a=1035;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ro=1234567;const Cr=Math.PI/180,sr=180/Math.PI;function li(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[s&255]+jt[s>>8&255]+jt[s>>16&255]+jt[s>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Yt(s,e,t){return Math.max(e,Math.min(t,s))}function Ca(s,e){return(s%e+e)%e}function df(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function pf(s,e,t){return s!==e?(t-s)/(e-s):0}function Lr(s,e,t){return(1-t)*s+t*e}function mf(s,e,t,n){return Lr(s,e,1-Math.exp(-t*n))}function gf(s,e=1){return e-Math.abs(Ca(s,e*2)-e)}function _f(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function xf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bf(s,e){return s+Math.random()*(e-s)}function Mf(s){return s*(.5-Math.random())}function yf(s){s!==void 0&&(Ro=s);let e=Ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sf(s){return s*Cr}function wf(s){return s*sr}function va(s){return(s&s-1)===0&&s!==0}function _c(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ef(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tr(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xr={DEG2RAD:Cr,RAD2DEG:sr,generateUUID:li,clamp:Yt,euclideanModulo:Ca,mapLinear:df,inverseLerp:pf,lerp:Lr,damp:mf,pingpong:gf,smoothstep:_f,smootherstep:vf,randInt:xf,randFloat:bf,randFloatSpread:Mf,seededRandom:yf,degToRad:Sf,radToDeg:wf,isPowerOfTwo:va,ceilPowerOfTwo:_c,floorPowerOfTwo:vc,setQuaternionFromProperEuler:Ef,normalize:nn,denormalize:Tr};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=i[0],m=i[3],d=i[6],T=i[1],M=i[4],C=i[7],L=i[2],U=i[5],z=i[8];return r[0]=a*x+o*T+l*L,r[3]=a*m+o*M+l*U,r[6]=a*d+o*C+l*z,r[1]=c*x+u*T+h*L,r[4]=c*m+u*M+h*U,r[7]=c*d+u*C+h*z,r[2]=f*x+p*T+g*L,r[5]=f*m+p*M+g*U,r[8]=f*d+p*C+g*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new tt;function xc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Tf=new tt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Af=new tt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Cf(s){return s.convertSRGBToLinear().applyMatrix3(Af)}function Lf(s){return s.applyMatrix3(Tf).convertLinearToSRGB()}const Pf={[Rr]:s=>s,[An]:s=>s.convertSRGBToLinear(),[gc]:Cf},Rf={[Rr]:s=>s,[An]:s=>s.convertLinearToSRGB(),[gc]:Lf},cn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Rr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Pf[e],i=Rf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Ii;class bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Dr("canvas")),Ii.width=e.width,Ii.height=e.height;const n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=tr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Mc{constructor(e=null){this.isSource=!0,this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Vs(i[a].image)):r.push(Vs(i[a]))}else r=Vs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Vs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;class en extends Si{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=$t,i=$t,r=Qt,a=Mi,o=gn,l=yi,c=en.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=li(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=pc;en.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,C=(p+1)/2,L=(d+1)/2,U=(u+f)/4,z=(h+x)/4,I=(g+m)/4;return M>C&&M>L?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=U/n,r=z/n):C>L?C<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(C),n=U/i,r=I/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=z/r,i=I/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oi extends Si{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yc extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class If extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*x,T=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const L=Math.sqrt(M),U=Math.atan2(L,d*T);m=Math.sin(m*U)/L,o=Math.sin(o*U)/L}const C=o*T;if(l=l*m+f*C,c=c*m+p*C,u=u*m+g*C,h=h*m+x*C,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Do.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Do.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new F,Do=new kn;class hr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Hn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Hn)}else i.boundingBox===null&&i.computeBoundingBox(),Ni.copy(i.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),Hr.subVectors(this.max,br),Ui.subVectors(e.a,br),ki.subVectors(e.b,br),Oi.subVectors(e.c,br),Qn.subVectors(ki,Ui),$n.subVectors(Oi,ki),hi.subVectors(Ui,Oi);let t=[0,-Qn.z,Qn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,Qn.z,0,-Qn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-Qn.y,Qn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!js(t,Ui,ki,Oi,Hr)||(t=[1,0,0,0,1,0,0,0,1],!js(t,Ui,ki,Oi,Hr))?!1:(Vr.crossVectors(Qn,$n),t=[Vr.x,Vr.y,Vr.z],js(t,Ui,ki,Oi,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,Ni=new hr,Ui=new F,ki=new F,Oi=new F,Qn=new F,$n=new F,hi=new F,br=new F,Hr=new F,Vr=new F,di=new F;function js(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){di.fromArray(s,r);const o=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Nf=new hr,Mr=new F,qs=new F;class Ur{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(qs)),this.expandByPoint(Mr.copy(e.center).sub(qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new F,Xs=new F,Wr=new F,ei=new F,Ys=new F,jr=new F,Ks=new F;class La{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xs.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Xs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=ei.dot(this.direction),l=-ei.dot(Wr),c=ei.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Xs).addScaledVector(Wr,f),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,r){Ys.subVectors(t,e),jr.subVectors(n,e),Ks.crossVectors(Ys,jr);let a=this.direction.dot(Ks),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(ei,jr));if(l<0)return null;const c=o*this.direction.dot(Ys.cross(ei));if(c<0||l+c>a)return null;const u=-o*ei.dot(Ks);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,u,h,f,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f-x*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uf,e,kf)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ti.crossVectors(n,un),ti.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ti.crossVectors(n,un)),ti.normalize(),qr.crossVectors(un,ti),i[0]=ti.x,i[4]=qr.x,i[8]=un.x,i[1]=ti.y,i[5]=qr.y,i[9]=un.y,i[2]=ti.z,i[6]=qr.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],T=n[3],M=n[7],C=n[11],L=n[15],U=i[0],z=i[4],I=i[8],y=i[12],E=i[1],X=i[5],$=i[9],B=i[13],V=i[2],Y=i[6],H=i[10],ee=i[14],Z=i[3],ne=i[7],le=i[11],K=i[15];return r[0]=a*U+o*E+l*V+c*Z,r[4]=a*z+o*X+l*Y+c*ne,r[8]=a*I+o*$+l*H+c*le,r[12]=a*y+o*B+l*ee+c*K,r[1]=u*U+h*E+f*V+p*Z,r[5]=u*z+h*X+f*Y+p*ne,r[9]=u*I+h*$+f*H+p*le,r[13]=u*y+h*B+f*ee+p*K,r[2]=g*U+x*E+m*V+d*Z,r[6]=g*z+x*X+m*Y+d*ne,r[10]=g*I+x*$+m*H+d*le,r[14]=g*y+x*B+m*ee+d*K,r[3]=T*U+M*E+C*V+L*Z,r[7]=T*z+M*X+C*Y+L*ne,r[11]=T*I+M*$+C*H+L*le,r[15]=T*y+M*B+C*ee+L*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*p-n*l*p)+x*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],T=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,M=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,C=u*x*c-g*h*c+g*o*p-a*x*p-u*o*d+a*h*d,L=g*h*l-u*x*l-g*o*f+a*x*f+u*o*m-a*h*m,U=t*T+n*M+i*C+r*L;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/U;return e[0]=T*z,e[1]=(x*f*r-h*m*r-x*i*p+n*m*p+h*i*d-n*f*d)*z,e[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*d+n*l*d)*z,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*p-n*l*p)*z,e[4]=M*z,e[5]=(u*m*r-g*f*r+g*i*p-t*m*p-u*i*d+t*f*d)*z,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*d-t*l*d)*z,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*p+t*l*p)*z,e[8]=C*z,e[9]=(g*h*r-u*x*r-g*n*p+t*x*p+u*n*d-t*h*d)*z,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*d+t*o*d)*z,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*z,e[12]=L*z,e[13]=(u*x*i-g*h*i+g*n*f-t*x*f-u*n*m+t*h*m)*z,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*m-t*o*m)*z,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,x=a*u,m=a*h,d=o*h,T=l*c,M=l*u,C=l*h,L=n.x,U=n.y,z=n.z;return i[0]=(1-(x+d))*L,i[1]=(p+C)*L,i[2]=(g-M)*L,i[3]=0,i[4]=(p-C)*U,i[5]=(1-(f+d))*U,i[6]=(m+T)*U,i[7]=0,i[8]=(g+M)*z,i[9]=(m-T)*z,i[10]=(1-(f+x))*z,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Fi.set(i[0],i[1],i[2]).length();const a=Fi.set(i[4],i[5],i[6]).length(),o=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],xn.copy(this);const c=1/r,u=1/a,h=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,f=(n+i)*c,p=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fi=new F,xn=new Je,Uf=new F(0,0,0),kf=new F(1,1,1),ti=new F,qr=new F,un=new F,Io=new Je,No=new kn;class xs{constructor(e=0,t=0,n=0,i=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return No.setFromEuler(this),this.setFromQuaternion(No,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Of=0;const Uo=new F,zi=new kn,Wn=new Je,Xr=new F,yr=new F,Ff=new F,zf=new kn,ko=new F(1,0,0),Oo=new F(0,1,0),Fo=new F(0,0,1),Bf={type:"added"},zo={type:"removed"};class yt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new F,t=new xs,n=new kn,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new tt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(ko,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Fo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ko,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(yr,Xr,this.up):Wn.lookAt(Xr,yr,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(Wn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(zo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new F(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new F,jn=new F,Zs=new F,qn=new F,Bi=new F,Gi=new F,Bo=new F,Js=new F,Qs=new F,$s=new F;let Yr=!1;class yn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),jn.subVectors(n,t),Zs.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(jn),l=bn.dot(Zs),c=jn.dot(jn),u=jn.dot(Zs),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,n,i,r,a,o,l){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,qn),l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),jn.subVectors(e,t),bn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),bn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Bi.subVectors(i,n),Gi.subVectors(r,n),Js.subVectors(e,n);const l=Bi.dot(Js),c=Gi.dot(Js);if(l<=0&&c<=0)return t.copy(n);Qs.subVectors(e,i);const u=Bi.dot(Qs),h=Gi.dot(Qs);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Bi,a);$s.subVectors(e,r);const p=Bi.dot($s),g=Gi.dot($s);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Bo.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Bo,o);const d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(Bi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gf=0;class wi extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=li(),this.name="",this.type="Material",this.blending=$i,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fc,this.blendDst=hc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function ea(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=cn.workingColorSpace){return this.r=e,this.g=t,this.b=n,cn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=cn.workingColorSpace){if(e=Ca(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ea(a,r,e+1/3),this.g=ea(a,r,e),this.b=ea(a,r,e-1/3)}return cn.toWorkingColorSpace(this,i),this}setStyle(e,t=An){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,cn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,cn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=Sc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return cn.fromWorkingColorSpace(qt.copy(this),e),Yt(qt.r*255,0,255)<<16^Yt(qt.g*255,0,255)<<8^Yt(qt.b*255,0,255)<<0}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=cn.workingColorSpace){cn.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,r=qt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=cn.workingColorSpace){return cn.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=An){cn.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Mn),Mn.h+=e,Mn.s+=t,Mn.l+=n,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Kr);const n=Lr(Mn.h,Kr.h,t),i=Lr(Mn.s,Kr.s,t),r=Lr(Mn.l,Kr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Qe;Qe.NAMES=Sc;class Ir extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new F,Zr=new We;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class wc extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ec extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hf=0;const mn=new Je,ta=new yt,Hi=new F,fn=new hr,Sr=new hr,Bt=new F;class dn extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xc(e)?Ec:wc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(fn.min,Sr.min),fn.expandByPoint(Bt),Bt.addVectors(fn.max,Sr.max),fn.expandByPoint(Bt)):(fn.expandByPoint(Sr.min),fn.expandByPoint(Sr.max))}fn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),Bt.add(Hi)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<o;E++)c[E]=new F,u[E]=new F;const h=new F,f=new F,p=new F,g=new We,x=new We,m=new We,d=new F,T=new F;function M(E,X,$){h.fromArray(i,E*3),f.fromArray(i,X*3),p.fromArray(i,$*3),g.fromArray(a,E*2),x.fromArray(a,X*2),m.fromArray(a,$*2),f.sub(h),p.sub(h),x.sub(g),m.sub(g);const B=1/(x.x*m.y-m.x*x.y);isFinite(B)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(B),T.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(B),c[E].add(d),c[X].add(d),c[$].add(d),u[E].add(T),u[X].add(T),u[$].add(T))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let E=0,X=C.length;E<X;++E){const $=C[E],B=$.start,V=$.count;for(let Y=B,H=B+V;Y<H;Y+=3)M(n[Y+0],n[Y+1],n[Y+2])}const L=new F,U=new F,z=new F,I=new F;function y(E){z.fromArray(r,E*3),I.copy(z);const X=c[E];L.copy(X),L.sub(z.multiplyScalar(z.dot(X))).normalize(),U.crossVectors(I,X);const B=U.dot(u[E])<0?-1:1;l[E*4]=L.x,l[E*4+1]=L.y,l[E*4+2]=L.z,l[E*4+3]=B}for(let E=0,X=C.length;E<X;++E){const $=C[E],B=$.start,V=$.count;for(let Y=B,H=B+V;Y<H;Y+=3)y(n[Y+0]),y(n[Y+1]),y(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new Je,Tn=new La,Jr=new Ur,Ho=new F,Vi=new F,Wi=new F,ji=new F,na=new F,Qr=new F,$r=new We,es=new We,ts=new We,Vo=new F,Wo=new F,jo=new F,ns=new F,is=new F;class rn extends yt{constructor(e=new dn,t=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(na.fromBufferAttribute(h,e),a?Qr.addScaledVector(na,u):Qr.addScaledVector(na.sub(t),u))}t.add(Qr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Tn.copy(e.ray).recast(e.near),Jr.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Jr,Ho)===null||Tn.origin.distanceToSquared(Ho)>(e.far-e.near)**2))||(Go.copy(r).invert(),Tn.copy(e.ray).applyMatrix4(Go),n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,f=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=i[m.materialIndex],T=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let C=T,L=M;C<L;C+=3){const U=o.getX(C),z=o.getX(C+1),I=o.getX(C+2);a=rs(this,d,e,Tn,c,u,h,U,z,I),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const T=o.getX(m),M=o.getX(m+1),C=o.getX(m+2);a=rs(this,i,e,Tn,c,u,h,T,M,C),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=i[m.materialIndex],T=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let C=T,L=M;C<L;C+=3){const U=C,z=C+1,I=C+2;a=rs(this,d,e,Tn,c,u,h,U,z,I),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const T=m,M=m+1,C=m+2;a=rs(this,i,e,Tn,c,u,h,T,M,C),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Vf(s,e,t,n,i,r,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Kn,o),l===null)return null;is.copy(o),is.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(is);return c<t.near||c>t.far?null:{distance:c,point:is.clone(),object:s}}function rs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Vi),s.getVertexPosition(l,Wi),s.getVertexPosition(c,ji);const u=Vf(s,e,t,n,Vi,Wi,ji,ns);if(u){i&&($r.fromBufferAttribute(i,o),es.fromBufferAttribute(i,l),ts.fromBufferAttribute(i,c),u.uv=yn.getInterpolation(ns,Vi,Wi,ji,$r,es,ts,new We)),r&&($r.fromBufferAttribute(r,o),es.fromBufferAttribute(r,l),ts.fromBufferAttribute(r,c),u.uv2=yn.getInterpolation(ns,Vi,Wi,ji,$r,es,ts,new We)),a&&(Vo.fromBufferAttribute(a,o),Wo.fromBufferAttribute(a,l),jo.fromBufferAttribute(a,c),u.normal=yn.getInterpolation(ns,Vi,Wi,ji,Vo,Wo,jo,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};yn.getNormal(Vi,Wi,ji,h.normal),u.face=h}return u}class dr extends dn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function g(x,m,d,T,M,C,L,U,z,I,y){const E=C/z,X=L/I,$=C/2,B=L/2,V=U/2,Y=z+1,H=I+1;let ee=0,Z=0;const ne=new F;for(let le=0;le<H;le++){const K=le*X-B;for(let ue=0;ue<Y;ue++){const G=ue*E-$;ne[x]=G*T,ne[m]=K*M,ne[d]=V,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[d]=U>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(ue/z),h.push(1-le/I),ee+=1}}for(let le=0;le<I;le++)for(let K=0;K<z;K++){const ue=f+K+Y*le,G=f+K+Y*(le+1),j=f+(K+1)+Y*(le+1),te=f+(K+1)+Y*le;l.push(ue,G,te),l.push(G,j,te),Z+=6}o.addGroup(p,Z,y),p+=Z,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Jt(s){const e={};for(let t=0;t<s.length;t++){const n=ar(s[t]);for(const i in n)e[i]=n[i]}return e}function Wf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Tc(s){return s.getRenderTarget()===null&&s.outputEncoding===ft?An:Rr}const Ac={clone:ar,merge:Jt};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ra extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Ra{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Xi=1;class Xf extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Wt(qi,Xi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Wt(qi,Xi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Wt(qi,Xi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Wt(qi,Xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Wt(qi,Xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Wt(qi,Xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Cc extends en{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yf extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Cc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new dr(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:si});r.uniforms.tEquirect.value=t;const a=new rn(i,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Qt),new Xf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ia=new F,Kf=new F,Zf=new tt;class mi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ia.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zf.getNormalMatrix(e),i=this.coplanarPoint(ia).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Ur,ss=new F;class Da{constructor(e=new mi,t=new mi,n=new mi,i=new mi,r=new mi,a=new mi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],x=n[11],m=n[12],d=n[13],T=n[14],M=n[15];return t[0].setComponents(o-i,h-l,x-f,M-m).normalize(),t[1].setComponents(o+i,h+l,x+f,M+m).normalize(),t[2].setComponents(o+r,h+c,x+p,M+d).normalize(),t[3].setComponents(o-r,h-c,x-p,M-d).normalize(),t[4].setComponents(o-a,h-u,x-g,M-T).normalize(),t[5].setComponents(o+a,h+u,x+g,M+T).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ss.x=i.normal.x>0?e.max.x:e.min.x,ss.y=i.normal.y>0?e.max.y:e.min.y,ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Ia extends dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const T=d*f-a;for(let M=0;M<c;M++){const C=M*h-r;g.push(C,-T,0),x.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const M=T+c*d,C=T+c*(d+1),L=T+1+c*(d+1),U=T+1+c*d;p.push(M,C,U),p.push(C,L,U)}this.setIndex(p),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rh="vec3 transformed = vec3( position );",sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ah=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_h=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Th=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Xh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$h=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,od=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Vd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jd=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$d=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,op=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ze={alphamap_fragment:Qf,alphamap_pars_fragment:$f,alphatest_fragment:eh,alphatest_pars_fragment:th,aomap_fragment:nh,aomap_pars_fragment:ih,begin_vertex:rh,beginnormal_vertex:sh,bsdfs:ah,iridescence_fragment:oh,bumpmap_pars_fragment:lh,clipping_planes_fragment:ch,clipping_planes_pars_fragment:uh,clipping_planes_pars_vertex:fh,clipping_planes_vertex:hh,color_fragment:dh,color_pars_fragment:ph,color_pars_vertex:mh,color_vertex:gh,common:_h,cube_uv_reflection_fragment:vh,defaultnormal_vertex:xh,displacementmap_pars_vertex:bh,displacementmap_vertex:Mh,emissivemap_fragment:yh,emissivemap_pars_fragment:Sh,encodings_fragment:wh,encodings_pars_fragment:Eh,envmap_fragment:Th,envmap_common_pars_fragment:Ah,envmap_pars_fragment:Ch,envmap_pars_vertex:Lh,envmap_physical_pars_fragment:Gh,envmap_vertex:Ph,fog_vertex:Rh,fog_pars_vertex:Dh,fog_fragment:Ih,fog_pars_fragment:Nh,gradientmap_pars_fragment:Uh,lightmap_fragment:kh,lightmap_pars_fragment:Oh,lights_lambert_fragment:Fh,lights_lambert_pars_fragment:zh,lights_pars_begin:Bh,lights_toon_fragment:Hh,lights_toon_pars_fragment:Vh,lights_phong_fragment:Wh,lights_phong_pars_fragment:jh,lights_physical_fragment:qh,lights_physical_pars_fragment:Xh,lights_fragment_begin:Yh,lights_fragment_maps:Kh,lights_fragment_end:Zh,logdepthbuf_fragment:Jh,logdepthbuf_pars_fragment:Qh,logdepthbuf_pars_vertex:$h,logdepthbuf_vertex:ed,map_fragment:td,map_pars_fragment:nd,map_particle_fragment:id,map_particle_pars_fragment:rd,metalnessmap_fragment:sd,metalnessmap_pars_fragment:ad,morphcolor_vertex:od,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:ud,normal_fragment_begin:fd,normal_fragment_maps:hd,normal_pars_fragment:dd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:xd,iridescence_pars_fragment:bd,output_fragment:Md,packing:yd,premultiplied_alpha_fragment:Sd,project_vertex:wd,dithering_fragment:Ed,dithering_pars_fragment:Td,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Cd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Pd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Dd,skinbase_vertex:Id,skinning_pars_vertex:Nd,skinning_vertex:Ud,skinnormal_vertex:kd,specularmap_fragment:Od,specularmap_pars_fragment:Fd,tonemapping_fragment:zd,tonemapping_pars_fragment:Bd,transmission_fragment:Gd,transmission_pars_fragment:Hd,uv_pars_fragment:Vd,uv_pars_vertex:Wd,uv_vertex:jd,worldpos_vertex:qd,background_vert:Xd,background_frag:Yd,backgroundCube_vert:Kd,backgroundCube_frag:Zd,cube_vert:Jd,cube_frag:Qd,depth_vert:$d,depth_frag:ep,distanceRGBA_vert:tp,distanceRGBA_frag:np,equirect_vert:ip,equirect_frag:rp,linedashed_vert:sp,linedashed_frag:ap,meshbasic_vert:op,meshbasic_frag:lp,meshlambert_vert:cp,meshlambert_frag:up,meshmatcap_vert:fp,meshmatcap_frag:hp,meshnormal_vert:dp,meshnormal_frag:pp,meshphong_vert:mp,meshphong_frag:gp,meshphysical_vert:_p,meshphysical_frag:vp,meshtoon_vert:xp,meshtoon_frag:bp,points_vert:Mp,points_frag:yp,shadow_vert:Sp,shadow_frag:wp,sprite_vert:Ep,sprite_frag:Tp},ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaTest:{value:0}}},Cn={basic:{uniforms:Jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Jt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Jt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Jt([ve.points,ve.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Jt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Jt([ve.common,ve.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Jt([ve.sprite,ve.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Jt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Jt([ve.lights,ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Cn.physical={uniforms:Jt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const as={r:0,b:0,g:0};function Ap(s,e,t,n,i,r,a){const o=new Qe(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let T=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M));const C=s.xr,L=C.getSession&&C.getSession();L&&L.environmentBlendMode==="additive"&&(M=null),M===null?x(o,l):M&&M.isColor&&(x(M,1),T=!0),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===vs)?(u===void 0&&(u=new rn(new dr(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:ar(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,z,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=M.encoding!==ft,(h!==M||f!==M.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new rn(new Ia(2,2),new Zn({name:"BackgroundMaterial",uniforms:ar(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=M.encoding!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,d){m.getRGB(as,Tc(s)),n.buffers.color.setClear(as.r,as.g,as.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function Cp(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(V,Y,H,ee,Z){let ne=!1;if(a){const le=x(ee,H,Y);c!==le&&(c=le,p(c.object)),ne=d(V,ee,H,Z),ne&&T(V,ee,H,Z)}else{const le=Y.wireframe===!0;(c.geometry!==ee.id||c.program!==H.id||c.wireframe!==le)&&(c.geometry=ee.id,c.program=H.id,c.wireframe=le,ne=!0)}Z!==null&&t.update(Z,34963),(ne||u)&&(u=!1,I(V,Y,H,ee),Z!==null&&s.bindBuffer(34963,t.get(Z).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(V){return n.isWebGL2?s.bindVertexArray(V):r.bindVertexArrayOES(V)}function g(V){return n.isWebGL2?s.deleteVertexArray(V):r.deleteVertexArrayOES(V)}function x(V,Y,H){const ee=H.wireframe===!0;let Z=o[V.id];Z===void 0&&(Z={},o[V.id]=Z);let ne=Z[Y.id];ne===void 0&&(ne={},Z[Y.id]=ne);let le=ne[ee];return le===void 0&&(le=m(f()),ne[ee]=le),le}function m(V){const Y=[],H=[],ee=[];for(let Z=0;Z<i;Z++)Y[Z]=0,H[Z]=0,ee[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:H,attributeDivisors:ee,object:V,attributes:{},index:null}}function d(V,Y,H,ee){const Z=c.attributes,ne=Y.attributes;let le=0;const K=H.getAttributes();for(const ue in K)if(K[ue].location>=0){const j=Z[ue];let te=ne[ue];if(te===void 0&&(ue==="instanceMatrix"&&V.instanceMatrix&&(te=V.instanceMatrix),ue==="instanceColor"&&V.instanceColor&&(te=V.instanceColor)),j===void 0||j.attribute!==te||te&&j.data!==te.data)return!0;le++}return c.attributesNum!==le||c.index!==ee}function T(V,Y,H,ee){const Z={},ne=Y.attributes;let le=0;const K=H.getAttributes();for(const ue in K)if(K[ue].location>=0){let j=ne[ue];j===void 0&&(ue==="instanceMatrix"&&V.instanceMatrix&&(j=V.instanceMatrix),ue==="instanceColor"&&V.instanceColor&&(j=V.instanceColor));const te={};te.attribute=j,j&&j.data&&(te.data=j.data),Z[ue]=te,le++}c.attributes=Z,c.attributesNum=le,c.index=ee}function M(){const V=c.newAttributes;for(let Y=0,H=V.length;Y<H;Y++)V[Y]=0}function C(V){L(V,0)}function L(V,Y){const H=c.newAttributes,ee=c.enabledAttributes,Z=c.attributeDivisors;H[V]=1,ee[V]===0&&(s.enableVertexAttribArray(V),ee[V]=1),Z[V]!==Y&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Y),Z[V]=Y)}function U(){const V=c.newAttributes,Y=c.enabledAttributes;for(let H=0,ee=Y.length;H<ee;H++)Y[H]!==V[H]&&(s.disableVertexAttribArray(H),Y[H]=0)}function z(V,Y,H,ee,Z,ne){n.isWebGL2===!0&&(H===5124||H===5125)?s.vertexAttribIPointer(V,Y,H,Z,ne):s.vertexAttribPointer(V,Y,H,ee,Z,ne)}function I(V,Y,H,ee){if(n.isWebGL2===!1&&(V.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Z=ee.attributes,ne=H.getAttributes(),le=Y.defaultAttributeValues;for(const K in ne){const ue=ne[K];if(ue.location>=0){let G=Z[K];if(G===void 0&&(K==="instanceMatrix"&&V.instanceMatrix&&(G=V.instanceMatrix),K==="instanceColor"&&V.instanceColor&&(G=V.instanceColor)),G!==void 0){const j=G.normalized,te=G.itemSize,k=t.get(G);if(k===void 0)continue;const D=k.buffer,Me=k.type,Ae=k.bytesPerElement;if(G.isInterleavedBufferAttribute){const me=G.data,Fe=me.stride,it=G.offset;if(me.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ue.locationSize;Ie++)L(ue.location+Ie,me.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ie=0;Ie<ue.locationSize;Ie++)C(ue.location+Ie);s.bindBuffer(34962,D);for(let Ie=0;Ie<ue.locationSize;Ie++)z(ue.location+Ie,te/ue.locationSize,Me,j,Fe*Ae,(it+te/ue.locationSize*Ie)*Ae)}else{if(G.isInstancedBufferAttribute){for(let me=0;me<ue.locationSize;me++)L(ue.location+me,G.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let me=0;me<ue.locationSize;me++)C(ue.location+me);s.bindBuffer(34962,D);for(let me=0;me<ue.locationSize;me++)z(ue.location+me,te/ue.locationSize,Me,j,te*Ae,te/ue.locationSize*me*Ae)}}else if(le!==void 0){const j=le[K];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(ue.location,j);break;case 3:s.vertexAttrib3fv(ue.location,j);break;case 4:s.vertexAttrib4fv(ue.location,j);break;default:s.vertexAttrib1fv(ue.location,j)}}}}U()}function y(){$();for(const V in o){const Y=o[V];for(const H in Y){const ee=Y[H];for(const Z in ee)g(ee[Z].object),delete ee[Z];delete Y[H]}delete o[V]}}function E(V){if(o[V.id]===void 0)return;const Y=o[V.id];for(const H in Y){const ee=Y[H];for(const Z in ee)g(ee[Z].object),delete ee[Z];delete Y[H]}delete o[V.id]}function X(V){for(const Y in o){const H=o[Y];if(H[V.id]===void 0)continue;const ee=H[V.id];for(const Z in ee)g(ee[Z].object),delete ee[Z];delete H[V.id]}}function $(){B(),u=!0,c!==l&&(c=l,p(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:B,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:X,initAttributes:M,enableAttribute:C,disableUnusedAttributes:U}}function Lp(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Pp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(z){if(z==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),x=s.getParameter(34921),m=s.getParameter(36347),d=s.getParameter(36348),T=s.getParameter(36349),M=f>0,C=a||e.has("OES_texture_float"),L=M&&C,U=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:C,floatVertexTextures:L,maxSamples:U}}function Rp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new mi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:n,M=T*4;let C=d.clippingState||null;l.value=C,C=u(g,f,M,p);for(let L=0;L!==M;++L)C[L]=t[L];d.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,C=p;M!==x;++M,C+=4)a.copy(h[M]).applyMatrix4(T,o),a.normal.toArray(m,C),m[C+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Dp(s){let e=new WeakMap;function t(a,o){return o===pa?a.mapping=nr:o===ma&&(a.mapping=ir),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===pa||o===ma)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yf(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class bs extends Ra{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=4,qo=[.125,.215,.35,.446,.526,.582],_i=20,ra=new bs,Xo=new Qe;let sa=null;const gi=(1+Math.sqrt(5))/2,Yi=1/gi,Yo=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,gi,Yi),new F(0,gi,-Yi),new F(Yi,0,gi),new F(-Yi,0,gi),new F(gi,Yi,0),new F(-gi,Yi,0)];class Ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){sa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa),e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Pr,format:gn,encoding:ai,depthBuffer:!1},i=Zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ip(r)),this._blurMaterial=Np(r,e,t)}return i}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,i){const o=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Xo),u.toneMapping=Rn,u.autoClear=!1;const p=new Ir({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new rn(new dr,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Xo),x=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const M=this._cubeSize;os(i,T*M,d>2?M:0,M,M),u.setRenderTarget(i),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===nr||e.mapping===ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new rn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;os(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Yo[(i-1)%Yo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rn(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const d=[];let T=0;for(let z=0;z<_i;++z){const I=z/x,y=Math.exp(-I*I/2);d.push(y),z===0?T+=y:z<m&&(T+=2*y)}for(let z=0;z<d.length;z++)d[z]=d[z]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const C=this._sizeLods[i],L=3*C*(i>M-Qi?i-M+Qi:0),U=4*(this._cubeSize-C);os(t,L,U,3*C,2*C),l.setRenderTarget(t),l.render(h,ra)}}function Ip(s){const e=[],t=[],n=[];let i=s;const r=s-Qi+1+qo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Qi?l=qo[a-s+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,T=new Float32Array(x*g*p),M=new Float32Array(m*g*p),C=new Float32Array(d*g*p);for(let U=0;U<p;U++){const z=U%3*2/3-1,I=U>2?0:-1,y=[z,I,0,z+2/3,I,0,z+2/3,I+1,0,z,I,0,z+2/3,I+1,0,z,I+1,0];T.set(y,x*g*U),M.set(f,m*g*U);const E=[U,U,U,U,U,U];C.set(E,d*g*U)}const L=new dn;L.setAttribute("position",new hn(T,x)),L.setAttribute("uv",new hn(M,m)),L.setAttribute("faceIndex",new hn(C,d)),e.push(L),i>Qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zo(s,e,t){const n=new oi(s,e,t);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Np(s,e,t){const n=new Float32Array(_i),i=new F(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Jo(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Qo(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Up(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===pa||l===ma,u=l===nr||l===ir;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Ko(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ko(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function kp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Op(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let M=0,C=T.length;M<C;M+=3){const L=T[M+0],U=T[M+1],z=T[M+2];f.push(L,U,U,z,z,L)}}else{const T=g.array;x=g.version;for(let M=0,C=T.length/3-1;M<C;M+=3){const L=M+0,U=M+1,z=M+2;f.push(L,U,U,z,z,L)}}const m=new(xc(f)?Ec:wc)(f,1);m.version=x;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fp(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){s.drawElements(r,p,o,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let x,m;if(i)x=s,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](r,p,o,f*l,g),t.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function zp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bp(s,e){return s[0]-e[0]}function Gp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Hp(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let x=r.get(u);if(x===void 0||x.count!==g){let V=function(){$.dispose(),r.delete(u),u.removeEventListener("dispose",V)};x!==void 0&&x.texture.dispose();const T=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let I=0;T===!0&&(I=1),M===!0&&(I=2),C===!0&&(I=3);let y=u.attributes.position.count*I,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const X=new Float32Array(y*E*4*g),$=new yc(X,y,E,g);$.type=ii,$.needsUpdate=!0;const B=I*4;for(let Y=0;Y<g;Y++){const H=L[Y],ee=U[Y],Z=z[Y],ne=y*E*4*Y;for(let le=0;le<H.count;le++){const K=le*B;T===!0&&(a.fromBufferAttribute(H,le),X[ne+K+0]=a.x,X[ne+K+1]=a.y,X[ne+K+2]=a.z,X[ne+K+3]=0),M===!0&&(a.fromBufferAttribute(ee,le),X[ne+K+4]=a.x,X[ne+K+5]=a.y,X[ne+K+6]=a.z,X[ne+K+7]=0),C===!0&&(a.fromBufferAttribute(Z,le),X[ne+K+8]=a.x,X[ne+K+9]=a.y,X[ne+K+10]=a.z,X[ne+K+11]=Z.itemSize===4?a.w:1)}}x={count:g,texture:$,size:new We(y,E)},r.set(u,x),u.addEventListener("dispose",V)}let m=0;for(let T=0;T<f.length;T++)m+=f[T];const d=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",d),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const p=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let M=0;M<p;M++)g[M]=[M,0];n[u.id]=g}for(let M=0;M<p;M++){const C=g[M];C[0]=M,C[1]=f[M]}g.sort(Gp);for(let M=0;M<8;M++)M<p&&g[M][1]?(o[M][0]=g[M][0],o[M][1]=g[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Bp);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let M=0;M<8;M++){const C=o[M],L=C[0],U=C[1];L!==Number.MAX_SAFE_INTEGER&&U?(x&&u.getAttribute("morphTarget"+M)!==x[L]&&u.setAttribute("morphTarget"+M,x[L]),m&&u.getAttribute("morphNormal"+M)!==m[L]&&u.setAttribute("morphNormal"+M,m[L]),i[M]=U,d+=U):(x&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),m&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const T=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Vp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Pc=new en,Rc=new yc,Dc=new If,Ic=new Cc,$o=[],el=[],tl=new Float32Array(16),nl=new Float32Array(9),il=new Float32Array(4);function pr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$o[i];if(r===void 0&&(r=new Float32Array(i),$o[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ms(s,e){let t=el[e];t===void 0&&(t=new Int32Array(e),el[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function Xp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function Yp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(kt(t,n))return;il.set(n),s.uniformMatrix2fv(this.addr,!1,il),Ot(t,n)}}function Kp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(kt(t,n))return;nl.set(n),s.uniformMatrix3fv(this.addr,!1,nl),Ot(t,n)}}function Zp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(kt(t,n))return;tl.set(n),s.uniformMatrix4fv(this.addr,!1,tl),Ot(t,n)}}function Jp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function $p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function tm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function sm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Pc,i)}function am(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dc,i)}function om(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ic,i)}function lm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rc,i)}function cm(s){switch(s){case 5126:return Wp;case 35664:return jp;case 35665:return qp;case 35666:return Xp;case 35674:return Yp;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return Jp;case 35667:case 35671:return Qp;case 35668:case 35672:return $p;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}function um(s,e){s.uniform1fv(this.addr,e)}function fm(s,e){const t=pr(e,this.size,2);s.uniform2fv(this.addr,t)}function hm(s,e){const t=pr(e,this.size,3);s.uniform3fv(this.addr,t)}function dm(s,e){const t=pr(e,this.size,4);s.uniform4fv(this.addr,t)}function pm(s,e){const t=pr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mm(s,e){const t=pr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gm(s,e){const t=pr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _m(s,e){s.uniform1iv(this.addr,e)}function vm(s,e){s.uniform2iv(this.addr,e)}function xm(s,e){s.uniform3iv(this.addr,e)}function bm(s,e){s.uniform4iv(this.addr,e)}function Mm(s,e){s.uniform1uiv(this.addr,e)}function ym(s,e){s.uniform2uiv(this.addr,e)}function Sm(s,e){s.uniform3uiv(this.addr,e)}function wm(s,e){s.uniform4uiv(this.addr,e)}function Em(s,e,t){const n=this.cache,i=e.length,r=Ms(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Pc,r[a])}function Tm(s,e,t){const n=this.cache,i=e.length,r=Ms(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Dc,r[a])}function Am(s,e,t){const n=this.cache,i=e.length,r=Ms(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ic,r[a])}function Cm(s,e,t){const n=this.cache,i=e.length,r=Ms(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Rc,r[a])}function Lm(s){switch(s){case 5126:return um;case 35664:return fm;case 35665:return hm;case 35666:return dm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return bm;case 5125:return Mm;case 36294:return ym;case 36295:return Sm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Cm}}class Pm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=cm(t.type)}}class Rm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Lm(t.type)}}class Dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function rl(s,e){s.seq.push(e),s.map[e.id]=e}function Im(s,e,t){const n=s.name,i=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),a=aa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){rl(t,c===void 0?new Pm(o,s,e):new Rm(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Dm(o),rl(t,h)),t=h}}}class us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Im(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function sl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Nm=0;function Um(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function km(s){switch(s){case ai:return["Linear","( value )"];case ft:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function al(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Um(s.getShaderSource(e),a)}else return i}function Om(s,e){const t=km(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Fm(s,e){let t;switch(e){case Gu:t="Linear";break;case Hu:t="Reinhard";break;case Vu:t="OptimizedCineon";break;case dc:t="ACESFilmic";break;case Wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function Bm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gm(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ar(s){return s!==""}function ol(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ll(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(s){return s.replace(Hm,Vm)}function Vm(s,e){const t=Ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xa(t)}const Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(s){return s.replace(Wm,jm)}function jm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ul(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function Xm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ym(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function Km(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _s:e="ENVMAP_BLENDING_MULTIPLY";break;case zu:e="ENVMAP_BLENDING_MIX";break;case Bu:e="ENVMAP_BLENDING_ADD";break}return e}function Zm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qm(t),c=Xm(t),u=Ym(t),h=Km(t),f=Zm(t),p=t.isWebGL2?"":zm(t),g=Bm(r),x=i.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Ar).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter(Ar).join(`
`),d.length>0&&(d+=`
`)):(m=[ul(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),d=[p,ul(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.encodings_pars_fragment,Om("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=xa(a),a=ol(a,t),a=ll(a,t),o=xa(o),o=ol(o,t),o=ll(o,t),a=cl(a),o=cl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=T+m+a,C=T+d+o,L=sl(i,35633,M),U=sl(i,35632,C);if(i.attachShader(x,L),i.attachShader(x,U),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),s.debug.checkShaderErrors){const y=i.getProgramInfoLog(x).trim(),E=i.getShaderInfoLog(L).trim(),X=i.getShaderInfoLog(U).trim();let $=!0,B=!0;if(i.getProgramParameter(x,35714)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,L,U);else{const V=al(i,L,"vertex"),Y=al(i,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,35715)+`

Program Info Log: `+y+`
`+V+`
`+Y)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(E===""||X==="")&&(B=!1);B&&(this.diagnostics={runnable:$,programLog:y,vertexShader:{log:E,prefix:m},fragmentShader:{log:X,prefix:d}})}i.deleteShader(L),i.deleteShader(U);let z;this.getUniforms=function(){return z===void 0&&(z=new us(i,x)),z};let I;return this.getAttributes=function(){return I===void 0&&(I=Gm(i,x)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=Nm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=U,this}let Qm=0;class $m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eg(e),t.set(e,n)),n}}class eg{constructor(e){this.id=Qm++,this.code=e,this.usedTimes=0}}function tg(s,e,t,n,i,r,a){const o=new Pa,l=new $m,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===1?"uv2":"uv"}function m(y,E,X,$,B){const V=$.fog,Y=B.geometry,H=y.isMeshStandardMaterial?$.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),Z=ee&&ee.mapping===vs?ee.image.height:null,ne=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,K=le!==void 0?le.length:0;let ue=0;Y.morphAttributes.position!==void 0&&(ue=1),Y.morphAttributes.normal!==void 0&&(ue=2),Y.morphAttributes.color!==void 0&&(ue=3);let G,j,te,k;if(ne){const Se=Cn[ne];G=Se.vertexShader,j=Se.fragmentShader}else G=y.vertexShader,j=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),k=l.getFragmentShaderID(y);const D=s.getRenderTarget(),Me=B.isInstancedMesh===!0,Ae=!!y.map,me=!!y.matcap,Fe=!!ee,it=!!y.aoMap,Ie=!!y.lightMap,je=!!y.bumpMap,bt=!!y.normalMap,pt=!!y.displacementMap,St=!!y.emissiveMap,wt=!!y.metalnessMap,nt=!!y.roughnessMap,lt=y.clearcoat>0,Ft=y.iridescence>0,R=y.sheen>0,A=y.transmission>0,ie=lt&&!!y.clearcoatMap,de=lt&&!!y.clearcoatNormalMap,pe=lt&&!!y.clearcoatRoughnessMap,_e=Ft&&!!y.iridescenceMap,N=Ft&&!!y.iridescenceThicknessMap,ce=R&&!!y.sheenColorMap,Q=R&&!!y.sheenRoughnessMap,xe=!!y.specularMap,Ee=!!y.specularColorMap,Pe=!!y.specularIntensityMap,ye=A&&!!y.transmissionMap,Ce=A&&!!y.thicknessMap,He=!!y.gradientMap,Xe=!!y.alphaMap,Mt=y.alphaTest>0,O=!!y.extensions,se=!!Y.attributes.uv2;return{isWebGL2:u,shaderID:ne,shaderName:y.type,vertexShader:G,fragmentShader:j,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:k,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:Me,instancingColor:Me&&B.instanceColor!==null,supportsVertexTextures:f,outputEncoding:D===null?s.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:ai,map:Ae,matcap:me,envMap:Fe,envMapMode:Fe&&ee.mapping,envMapCubeUVHeight:Z,aoMap:it,lightMap:Ie,bumpMap:je,normalMap:bt,displacementMap:f&&pt,emissiveMap:St,normalMapObjectSpace:bt&&y.normalMapType===ff,normalMapTangentSpace:bt&&y.normalMapType===Aa,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&y.map.encoding===ft,metalnessMap:wt,roughnessMap:nt,clearcoat:lt,clearcoatMap:ie,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,iridescence:Ft,iridescenceMap:_e,iridescenceThicknessMap:N,sheen:R,sheenColorMap:ce,sheenRoughnessMap:Q,specularMap:xe,specularColorMap:Ee,specularIntensityMap:Pe,transmission:A,transmissionMap:ye,thicknessMap:Ce,gradientMap:He,opaque:y.transparent===!1&&y.blending===$i,alphaMap:Xe,alphaTest:Mt,combine:y.combine,mapUv:Ae&&x(y.map.channel),aoMapUv:it&&x(y.aoMap.channel),lightMapUv:Ie&&x(y.lightMap.channel),bumpMapUv:je&&x(y.bumpMap.channel),normalMapUv:bt&&x(y.normalMap.channel),displacementMapUv:pt&&x(y.displacementMap.channel),emissiveMapUv:St&&x(y.emissiveMap.channel),metalnessMapUv:wt&&x(y.metalnessMap.channel),roughnessMapUv:nt&&x(y.roughnessMap.channel),clearcoatMapUv:ie&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:N&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Q&&x(y.sheenRoughnessMap.channel),specularMapUv:xe&&x(y.specularMap.channel),specularColorMapUv:Ee&&x(y.specularColorMap.channel),specularIntensityMapUv:Pe&&x(y.specularIntensityMap.channel),transmissionMapUv:ye&&x(y.transmissionMap.channel),thicknessMapUv:Ce&&x(y.thicknessMap.channel),alphaMapUv:Xe&&x(y.alphaMap.channel),vertexTangents:bt&&!!Y.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUvs2:se,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Ae||Xe),fog:!!V,useFog:y.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:Rn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ln,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:O&&y.extensions.derivatives===!0,extensionFragDepth:O&&y.extensions.fragDepth===!0,extensionDrawBuffers:O&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const X in y.defines)E.push(X),E.push(y.defines[X]);return y.isRawShaderMaterial===!1&&(T(E,y),M(E,y),E.push(s.outputEncoding)),E.push(y.customProgramCacheKey),E.join()}function T(y,E){y.push(E.precision),y.push(E.outputEncoding),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUvs2&&o.enable(13),E.vertexTangents&&o.enable(14),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.decodeVideoTexture&&o.enable(17),E.opaque&&o.enable(18),E.pointsUvs&&o.enable(19),y.push(o.mask)}function C(y){const E=g[y.type];let X;if(E){const $=Cn[E];X=Ac.clone($.uniforms)}else X=y.uniforms;return X}function L(y,E){let X;for(let $=0,B=c.length;$<B;$++){const V=c[$];if(V.cacheKey===E){X=V,++X.usedTimes;break}}return X===void 0&&(X=new Jm(s,E,y,r),c.push(X)),X}function U(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function z(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:C,acquireProgram:L,releaseProgram:U,releaseShaderCache:z,programs:c,dispose:I}}function ng(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ig(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,g,x,m){let d=s[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||ig),n.length>1&&n.sort(f||fl),i.length>1&&i.sort(f||fl)}function u(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function rg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new hl,s.set(n,[a])):i>=r.length?(a=new hl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function sg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Qe};break;case"SpotLight":t={position:new F,direction:new F,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function ag(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let og=0;function lg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cg(s,e){const t=new sg,n=ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,a=new Je,o=new Je;function l(u,h){let f=0,p=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let x=0,m=0,d=0,T=0,M=0,C=0,L=0,U=0,z=0,I=0;u.sort(lg);const y=h===!0?Math.PI:1;for(let X=0,$=u.length;X<$;X++){const B=u[X],V=B.color,Y=B.intensity,H=B.distance,ee=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=V.r*Y*y,p+=V.g*Y*y,g+=V.b*Y*y;else if(B.isLightProbe)for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(B.sh.coefficients[Z],Y);else if(B.isDirectionalLight){const Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*y),B.castShadow){const ne=B.shadow,le=n.get(B);le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,i.directionalShadow[x]=le,i.directionalShadowMap[x]=ee,i.directionalShadowMatrix[x]=B.shadow.matrix,C++}i.directional[x]=Z,x++}else if(B.isSpotLight){const Z=t.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(V).multiplyScalar(Y*y),Z.distance=H,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,i.spot[d]=Z;const ne=B.shadow;if(B.map&&(i.spotLightMap[z]=B.map,z++,ne.updateMatrices(B),B.castShadow&&I++),i.spotLightMatrix[d]=ne.matrix,B.castShadow){const le=n.get(B);le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,i.spotShadow[d]=le,i.spotShadowMap[d]=ee,U++}d++}else if(B.isRectAreaLight){const Z=t.get(B);Z.color.copy(V).multiplyScalar(Y),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),i.rectArea[T]=Z,T++}else if(B.isPointLight){const Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*y),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const ne=B.shadow,le=n.get(B);le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,le.shadowCameraNear=ne.camera.near,le.shadowCameraFar=ne.camera.far,i.pointShadow[m]=le,i.pointShadowMap[m]=ee,i.pointShadowMatrix[m]=B.shadow.matrix,L++}i.point[m]=Z,m++}else if(B.isHemisphereLight){const Z=t.get(B);Z.skyColor.copy(B.color).multiplyScalar(Y*y),Z.groundColor.copy(B.groundColor).multiplyScalar(Y*y),i.hemi[M]=Z,M++}}T>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==x||E.pointLength!==m||E.spotLength!==d||E.rectAreaLength!==T||E.hemiLength!==M||E.numDirectionalShadows!==C||E.numPointShadows!==L||E.numSpotShadows!==U||E.numSpotMaps!==z)&&(i.directional.length=x,i.spot.length=d,i.rectArea.length=T,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=U+z-I,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=I,E.directionalLength=x,E.pointLength=m,E.spotLength=d,E.rectAreaLength=T,E.hemiLength=M,E.numDirectionalShadows=C,E.numPointShadows=L,E.numSpotShadows=U,E.numSpotMaps=z,i.version=og++)}function c(u,h){let f=0,p=0,g=0,x=0,m=0;const d=h.matrixWorldInverse;for(let T=0,M=u.length;T<M;T++){const C=u[T];if(C.isDirectionalLight){const L=i.directional[f];L.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),f++}else if(C.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),g++}else if(C.isRectAreaLight){const L=i.rectArea[x];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(d),o.identity(),a.copy(C.matrixWorld),a.premultiply(d),o.extractRotation(a),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),x++}else if(C.isPointLight){const L=i.point[p];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(d),p++}else if(C.isHemisphereLight){const L=i.hemi[m];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function dl(s,e){const t=new cg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ug(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new dl(s,e),t.set(r,[l])):a>=o.length?(l=new dl(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class fg extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hg extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mg(s,e,t){let n=new Da;const i=new We,r=new We,a=new dt,o=new fg({depthPacking:uf}),l=new hg,c={},u=t.maxTextureSize,h={[Kn]:sn,[sn]:Kn,[Ln]:Ln},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:dg,fragmentShader:pg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc,this.render=function(C,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const z=s.getRenderTarget(),I=s.getActiveCubeFace(),y=s.getActiveMipmapLevel(),E=s.state;E.setBlending(si),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let X=0,$=C.length;X<$;X++){const B=C[X],V=B.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Y=V.getFrameExtents();if(i.multiply(Y),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,V.mapSize.y=r.y)),V.map===null){const ee=this.type!==Er?{minFilter:Vt,magFilter:Vt}:{};V.map=new oi(i.x,i.y,ee),V.map.texture.name=B.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const H=V.getViewportCount();for(let ee=0;ee<H;ee++){const Z=V.getViewport(ee);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),E.viewport(a),V.updateMatrices(B,ee),n=V.getFrustum(),M(L,U,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===Er&&d(V,U),V.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(z,I,y)};function d(C,L){const U=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new oi(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,U,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,U,p,x,null)}function T(C,L,U,z){let I=null;const y=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)I=y;else if(I=U.isPointLight===!0?l:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const E=I.uuid,X=L.uuid;let $=c[E];$===void 0&&($={},c[E]=$);let B=$[X];B===void 0&&(B=I.clone(),$[X]=B),I=B}if(I.visible=L.visible,I.wireframe=L.wireframe,z===Er?I.side=L.shadowSide!==null?L.shadowSide:L.side:I.side=L.shadowSide!==null?L.shadowSide:h[L.side],I.alphaMap=L.alphaMap,I.alphaTest=L.alphaTest,I.map=L.map,I.clipShadows=L.clipShadows,I.clippingPlanes=L.clippingPlanes,I.clipIntersection=L.clipIntersection,I.displacementMap=L.displacementMap,I.displacementScale=L.displacementScale,I.displacementBias=L.displacementBias,I.wireframeLinewidth=L.wireframeLinewidth,I.linewidth=L.linewidth,U.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const E=s.properties.get(I);E.light=U}return I}function M(C,L,U,z,I){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&I===Er)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const X=e.update(C),$=C.material;if(Array.isArray($)){const B=X.groups;for(let V=0,Y=B.length;V<Y;V++){const H=B[V],ee=$[H.materialIndex];if(ee&&ee.visible){const Z=T(C,ee,z,I);s.renderBufferDirect(U,null,X,Z,C,H)}}}else if($.visible){const B=T(C,$,z,I);s.renderBufferDirect(U,null,X,B,C,null)}}const E=C.children;for(let X=0,$=E.length;X<$;X++)M(E[X],L,U,z,I)}}function gg(s,e,t){const n=t.isWebGL2;function i(){let O=!1;const se=new dt;let he=null;const Se=new dt(0,0,0,0);return{setMask:function(Ne){he!==Ne&&!O&&(s.colorMask(Ne,Ne,Ne,Ne),he=Ne)},setLocked:function(Ne){O=Ne},setClear:function(Ne,ht,xt,Nt,En){En===!0&&(Ne*=Nt,ht*=Nt,xt*=Nt),se.set(Ne,ht,xt,Nt),Se.equals(se)===!1&&(s.clearColor(Ne,ht,xt,Nt),Se.copy(se))},reset:function(){O=!1,he=null,Se.set(-1,0,0,0)}}}function r(){let O=!1,se=null,he=null,Se=null;return{setTest:function(Ne){Ne?D(2929):Me(2929)},setMask:function(Ne){se!==Ne&&!O&&(s.depthMask(Ne),se=Ne)},setFunc:function(Ne){if(he!==Ne){switch(Ne){case Du:s.depthFunc(512);break;case Iu:s.depthFunc(519);break;case Nu:s.depthFunc(513);break;case da:s.depthFunc(515);break;case Uu:s.depthFunc(514);break;case ku:s.depthFunc(518);break;case Ou:s.depthFunc(516);break;case Fu:s.depthFunc(517);break;default:s.depthFunc(515)}he=Ne}},setLocked:function(Ne){O=Ne},setClear:function(Ne){Se!==Ne&&(s.clearDepth(Ne),Se=Ne)},reset:function(){O=!1,se=null,he=null,Se=null}}}function a(){let O=!1,se=null,he=null,Se=null,Ne=null,ht=null,xt=null,Nt=null,En=null;return{setTest:function(rt){O||(rt?D(2960):Me(2960))},setMask:function(rt){se!==rt&&!O&&(s.stencilMask(rt),se=rt)},setFunc:function(rt,Kt,pn){(he!==rt||Se!==Kt||Ne!==pn)&&(s.stencilFunc(rt,Kt,pn),he=rt,Se=Kt,Ne=pn)},setOp:function(rt,Kt,pn){(ht!==rt||xt!==Kt||Nt!==pn)&&(s.stencilOp(rt,Kt,pn),ht=rt,xt=Kt,Nt=pn)},setLocked:function(rt){O=rt},setClear:function(rt){En!==rt&&(s.clearStencil(rt),En=rt)},reset:function(){O=!1,se=null,he=null,Se=null,Ne=null,ht=null,xt=null,Nt=null,En=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,x=[],m=null,d=!1,T=null,M=null,C=null,L=null,U=null,z=null,I=null,y=!1,E=null,X=null,$=null,B=null,V=null;const Y=s.getParameter(35661);let H=!1,ee=0;const Z=s.getParameter(7938);Z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=ee>=1):Z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=ee>=2);let ne=null,le={};const K=s.getParameter(3088),ue=s.getParameter(2978),G=new dt().fromArray(K),j=new dt().fromArray(ue);function te(O,se,he){const Se=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(O,Ne),s.texParameteri(O,10241,9728),s.texParameteri(O,10240,9728);for(let ht=0;ht<he;ht++)s.texImage2D(se+ht,0,6408,1,1,0,6408,5121,Se);return Ne}const k={};k[3553]=te(3553,3553,1),k[34067]=te(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),D(2929),l.setFunc(da),pt(!1),St(Ka),D(2884),je(si);function D(O){f[O]!==!0&&(s.enable(O),f[O]=!0)}function Me(O){f[O]!==!1&&(s.disable(O),f[O]=!1)}function Ae(O,se){return p[O]!==se?(s.bindFramebuffer(O,se),p[O]=se,n&&(O===36009&&(p[36160]=se),O===36160&&(p[36009]=se)),!0):!1}function me(O,se){let he=x,Se=!1;if(O)if(he=g.get(se),he===void 0&&(he=[],g.set(se,he)),O.isWebGLMultipleRenderTargets){const Ne=O.texture;if(he.length!==Ne.length||he[0]!==36064){for(let ht=0,xt=Ne.length;ht<xt;ht++)he[ht]=36064+ht;he.length=Ne.length,Se=!0}}else he[0]!==36064&&(he[0]=36064,Se=!0);else he[0]!==1029&&(he[0]=1029,Se=!0);Se&&(t.isWebGL2?s.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Fe(O){return m!==O?(s.useProgram(O),m=O,!0):!1}const it={[Ji]:32774,[Mu]:32778,[yu]:32779};if(n)it[$a]=32775,it[eo]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(it[$a]=O.MIN_EXT,it[eo]=O.MAX_EXT)}const Ie={[Su]:0,[wu]:1,[Eu]:768,[fc]:770,[Ru]:776,[Lu]:774,[Au]:772,[Tu]:769,[hc]:771,[Pu]:775,[Cu]:773};function je(O,se,he,Se,Ne,ht,xt,Nt){if(O===si){d===!0&&(Me(3042),d=!1);return}if(d===!1&&(D(3042),d=!0),O!==bu){if(O!==T||Nt!==y){if((M!==Ji||U!==Ji)&&(s.blendEquation(32774),M=Ji,U=Ji),Nt)switch(O){case $i:s.blendFuncSeparate(1,771,1,771);break;case Za:s.blendFunc(1,1);break;case Ja:s.blendFuncSeparate(0,769,0,1);break;case Qa:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case $i:s.blendFuncSeparate(770,771,1,771);break;case Za:s.blendFunc(770,1);break;case Ja:s.blendFuncSeparate(0,769,0,1);break;case Qa:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}C=null,L=null,z=null,I=null,T=O,y=Nt}return}Ne=Ne||se,ht=ht||he,xt=xt||Se,(se!==M||Ne!==U)&&(s.blendEquationSeparate(it[se],it[Ne]),M=se,U=Ne),(he!==C||Se!==L||ht!==z||xt!==I)&&(s.blendFuncSeparate(Ie[he],Ie[Se],Ie[ht],Ie[xt]),C=he,L=Se,z=ht,I=xt),T=O,y=!1}function bt(O,se){O.side===Ln?Me(2884):D(2884);let he=O.side===sn;se&&(he=!he),pt(he),O.blending===$i&&O.transparent===!1?je(si):je(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const Se=O.stencilWrite;c.setTest(Se),Se&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?D(32926):Me(32926)}function pt(O){E!==O&&(O?s.frontFace(2304):s.frontFace(2305),E=O)}function St(O){O!==vu?(D(2884),O!==X&&(O===Ka?s.cullFace(1029):O===xu?s.cullFace(1028):s.cullFace(1032))):Me(2884),X=O}function wt(O){O!==$&&(H&&s.lineWidth(O),$=O)}function nt(O,se,he){O?(D(32823),(B!==se||V!==he)&&(s.polygonOffset(se,he),B=se,V=he)):Me(32823)}function lt(O){O?D(3089):Me(3089)}function Ft(O){O===void 0&&(O=33984+Y-1),ne!==O&&(s.activeTexture(O),ne=O)}function R(O,se,he){he===void 0&&(ne===null?he=33984+Y-1:he=ne);let Se=le[he];Se===void 0&&(Se={type:void 0,texture:void 0},le[he]=Se),(Se.type!==O||Se.texture!==se)&&(ne!==he&&(s.activeTexture(he),ne=he),s.bindTexture(O,se||k[O]),Se.type=O,Se.texture=se)}function A(){const O=le[ne];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(O){G.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),G.copy(O))}function Ce(O){j.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function He(O,se){let he=h.get(se);he===void 0&&(he=new WeakMap,h.set(se,he));let Se=he.get(O);Se===void 0&&(Se=s.getUniformBlockIndex(se,O.name),he.set(O,Se))}function Xe(O,se){const Se=h.get(se).get(O);u.get(se)!==Se&&(s.uniformBlockBinding(se,Se,O.__bindingPointIndex),u.set(se,Se))}function Mt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ne=null,le={},p={},g=new WeakMap,x=[],m=null,d=!1,T=null,M=null,C=null,L=null,U=null,z=null,I=null,y=!1,E=null,X=null,$=null,B=null,V=null,G.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:D,disable:Me,bindFramebuffer:Ae,drawBuffers:me,useProgram:Fe,setBlending:je,setMaterial:bt,setFlipSided:pt,setCullFace:St,setLineWidth:wt,setPolygonOffset:nt,setScissorTest:lt,activeTexture:Ft,bindTexture:R,unbindTexture:A,compressedTexImage2D:ie,compressedTexImage3D:de,texImage2D:Ee,texImage3D:Pe,updateUBOMapping:He,uniformBlockBinding:Xe,texStorage2D:Q,texStorage3D:xe,texSubImage2D:pe,texSubImage3D:_e,compressedTexSubImage2D:N,compressedTexSubImage3D:ce,scissor:ye,viewport:Ce,reset:Mt}}function _g(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,A){return d?new OffscreenCanvas(R,A):Dr("canvas")}function M(R,A,ie,de){let pe=1;if((R.width>de||R.height>de)&&(pe=de/Math.max(R.width,R.height)),pe<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const _e=A?vc:Math.floor,N=_e(pe*R.width),ce=_e(pe*R.height);x===void 0&&(x=T(N,ce));const Q=ie?T(N,ce):x;return Q.width=N,Q.height=ce,Q.getContext("2d").drawImage(R,0,0,N,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+N+"x"+ce+")."),Q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function C(R){return va(R.width)&&va(R.height)}function L(R){return o?!1:R.wrapS!==$t||R.wrapT!==$t||R.minFilter!==Vt&&R.minFilter!==Qt}function U(R,A){return R.generateMipmaps&&A&&R.minFilter!==Vt&&R.minFilter!==Qt}function z(R){s.generateMipmap(R)}function I(R,A,ie,de,pe=!1){if(o===!1)return A;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _e=A;return A===6403&&(ie===5126&&(_e=33326),ie===5131&&(_e=33325),ie===5121&&(_e=33321)),A===33319&&(ie===5126&&(_e=33328),ie===5131&&(_e=33327),ie===5121&&(_e=33323)),A===6408&&(ie===5126&&(_e=34836),ie===5131&&(_e=34842),ie===5121&&(_e=de===ft&&pe===!1?35907:32856),ie===32819&&(_e=32854),ie===32820&&(_e=32855)),(_e===33325||_e===33326||_e===33327||_e===33328||_e===34842||_e===34836)&&e.get("EXT_color_buffer_float"),_e}function y(R,A,ie){return U(R,ie)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==Qt?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function E(R){return R===Vt||R===to||R===Is?9728:9729}function X(R){const A=R.target;A.removeEventListener("dispose",X),B(A),A.isVideoTexture&&g.delete(A)}function $(R){const A=R.target;A.removeEventListener("dispose",$),Y(A)}function B(R){const A=n.get(R);if(A.__webglInit===void 0)return;const ie=R.source,de=m.get(ie);if(de){const pe=de[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&V(R),Object.keys(de).length===0&&m.delete(ie)}n.remove(R)}function V(R){const A=n.get(R);s.deleteTexture(A.__webglTexture);const ie=R.source,de=m.get(ie);delete de[A.__cacheKey],a.memory.textures--}function Y(R){const A=R.texture,ie=n.get(R),de=n.get(A);if(de.__webglTexture!==void 0&&(s.deleteTexture(de.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)s.deleteFramebuffer(ie.__webglFramebuffer[pe]),ie.__webglDepthbuffer&&s.deleteRenderbuffer(ie.__webglDepthbuffer[pe]);else{if(s.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&s.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let pe=0;pe<ie.__webglColorRenderbuffer.length;pe++)ie.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(ie.__webglColorRenderbuffer[pe]);ie.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let pe=0,_e=A.length;pe<_e;pe++){const N=n.get(A[pe]);N.__webglTexture&&(s.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(A[pe])}n.remove(A),n.remove(R)}let H=0;function ee(){H=0}function Z(){const R=H;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),H+=1,R}function ne(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.encoding),A.join()}function le(R,A){const ie=n.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&ie.__version!==R.version){const de=R.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(ie,R,A);return}}t.bindTexture(3553,ie.__webglTexture,33984+A)}function K(R,A){const ie=n.get(R);if(R.version>0&&ie.__version!==R.version){Me(ie,R,A);return}t.bindTexture(35866,ie.__webglTexture,33984+A)}function ue(R,A){const ie=n.get(R);if(R.version>0&&ie.__version!==R.version){Me(ie,R,A);return}t.bindTexture(32879,ie.__webglTexture,33984+A)}function G(R,A){const ie=n.get(R);if(R.version>0&&ie.__version!==R.version){Ae(ie,R,A);return}t.bindTexture(34067,ie.__webglTexture,33984+A)}const j={[vi]:10497,[$t]:33071,[ga]:33648},te={[Vt]:9728,[to]:9984,[Is]:9986,[Qt]:9729,[ju]:9985,[Mi]:9987};function k(R,A,ie){if(ie?(s.texParameteri(R,10242,j[A.wrapS]),s.texParameteri(R,10243,j[A.wrapT]),(R===32879||R===35866)&&s.texParameteri(R,32882,j[A.wrapR]),s.texParameteri(R,10240,te[A.magFilter]),s.texParameteri(R,10241,te[A.minFilter])):(s.texParameteri(R,10242,33071),s.texParameteri(R,10243,33071),(R===32879||R===35866)&&s.texParameteri(R,32882,33071),(A.wrapS!==$t||A.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,10240,E(A.magFilter)),s.texParameteri(R,10241,E(A.minFilter)),A.minFilter!==Vt&&A.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Vt||A.minFilter!==Is&&A.minFilter!==Mi||A.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Pr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(R,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function D(R,A){let ie=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",X));const de=A.source;let pe=m.get(de);pe===void 0&&(pe={},m.set(de,pe));const _e=ne(A);if(_e!==R.__cacheKey){pe[_e]===void 0&&(pe[_e]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,ie=!0),pe[_e].usedTimes++;const N=pe[R.__cacheKey];N!==void 0&&(pe[R.__cacheKey].usedTimes--,N.usedTimes===0&&V(A)),R.__cacheKey=_e,R.__webglTexture=pe[_e].texture}return ie}function Me(R,A,ie){let de=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=35866),A.isData3DTexture&&(de=32879);const pe=D(R,A),_e=A.source;t.bindTexture(de,R.__webglTexture,33984+ie);const N=n.get(_e);if(_e.version!==N.__version||pe===!0){t.activeTexture(33984+ie),s.pixelStorei(37440,A.flipY),s.pixelStorei(37441,A.premultiplyAlpha),s.pixelStorei(3317,A.unpackAlignment),s.pixelStorei(37443,0);const ce=L(A)&&C(A.image)===!1;let Q=M(A.image,ce,!1,u);Q=Ft(A,Q);const xe=C(Q)||o,Ee=r.convert(A.format,A.encoding);let Pe=r.convert(A.type),ye=I(A.internalFormat,Ee,Pe,A.encoding,A.isVideoTexture);k(de,A,xe);let Ce;const He=A.mipmaps,Xe=o&&A.isVideoTexture!==!0,Mt=N.__version===void 0||pe===!0,O=y(A,Q,xe);if(A.isDepthTexture)ye=6402,o?A.type===ii?ye=36012:A.type===xi?ye=33190:A.type===er?ye=35056:ye=33189:A.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===bi&&ye===6402&&A.type!==mc&&A.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=xi,Pe=r.convert(A.type)),A.format===rr&&ye===6402&&(ye=34041,A.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=er,Pe=r.convert(A.type))),Mt&&(Xe?t.texStorage2D(3553,1,ye,Q.width,Q.height):t.texImage2D(3553,0,ye,Q.width,Q.height,0,Ee,Pe,null));else if(A.isDataTexture)if(He.length>0&&xe){Xe&&Mt&&t.texStorage2D(3553,O,ye,He[0].width,He[0].height);for(let se=0,he=He.length;se<he;se++)Ce=He[se],Xe?t.texSubImage2D(3553,se,0,0,Ce.width,Ce.height,Ee,Pe,Ce.data):t.texImage2D(3553,se,ye,Ce.width,Ce.height,0,Ee,Pe,Ce.data);A.generateMipmaps=!1}else Xe?(Mt&&t.texStorage2D(3553,O,ye,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Q.width,Q.height,Ee,Pe,Q.data)):t.texImage2D(3553,0,ye,Q.width,Q.height,0,Ee,Pe,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Xe&&Mt&&t.texStorage3D(35866,O,ye,He[0].width,He[0].height,Q.depth);for(let se=0,he=He.length;se<he;se++)Ce=He[se],A.format!==gn?Ee!==null?Xe?t.compressedTexSubImage3D(35866,se,0,0,0,Ce.width,Ce.height,Q.depth,Ee,Ce.data,0,0):t.compressedTexImage3D(35866,se,ye,Ce.width,Ce.height,Q.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(35866,se,0,0,0,Ce.width,Ce.height,Q.depth,Ee,Pe,Ce.data):t.texImage3D(35866,se,ye,Ce.width,Ce.height,Q.depth,0,Ee,Pe,Ce.data)}else{Xe&&Mt&&t.texStorage2D(3553,O,ye,He[0].width,He[0].height);for(let se=0,he=He.length;se<he;se++)Ce=He[se],A.format!==gn?Ee!==null?Xe?t.compressedTexSubImage2D(3553,se,0,0,Ce.width,Ce.height,Ee,Ce.data):t.compressedTexImage2D(3553,se,ye,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,se,0,0,Ce.width,Ce.height,Ee,Pe,Ce.data):t.texImage2D(3553,se,ye,Ce.width,Ce.height,0,Ee,Pe,Ce.data)}else if(A.isDataArrayTexture)Xe?(Mt&&t.texStorage3D(35866,O,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,Ee,Pe,Q.data)):t.texImage3D(35866,0,ye,Q.width,Q.height,Q.depth,0,Ee,Pe,Q.data);else if(A.isData3DTexture)Xe?(Mt&&t.texStorage3D(32879,O,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,Ee,Pe,Q.data)):t.texImage3D(32879,0,ye,Q.width,Q.height,Q.depth,0,Ee,Pe,Q.data);else if(A.isFramebufferTexture){if(Mt)if(Xe)t.texStorage2D(3553,O,ye,Q.width,Q.height);else{let se=Q.width,he=Q.height;for(let Se=0;Se<O;Se++)t.texImage2D(3553,Se,ye,se,he,0,Ee,Pe,null),se>>=1,he>>=1}}else if(He.length>0&&xe){Xe&&Mt&&t.texStorage2D(3553,O,ye,He[0].width,He[0].height);for(let se=0,he=He.length;se<he;se++)Ce=He[se],Xe?t.texSubImage2D(3553,se,0,0,Ee,Pe,Ce):t.texImage2D(3553,se,ye,Ee,Pe,Ce);A.generateMipmaps=!1}else Xe?(Mt&&t.texStorage2D(3553,O,ye,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Ee,Pe,Q)):t.texImage2D(3553,0,ye,Ee,Pe,Q);U(A,xe)&&z(de),N.__version=_e.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Ae(R,A,ie){if(A.image.length!==6)return;const de=D(R,A),pe=A.source;t.bindTexture(34067,R.__webglTexture,33984+ie);const _e=n.get(pe);if(pe.version!==_e.__version||de===!0){t.activeTexture(33984+ie),s.pixelStorei(37440,A.flipY),s.pixelStorei(37441,A.premultiplyAlpha),s.pixelStorei(3317,A.unpackAlignment),s.pixelStorei(37443,0);const N=A.isCompressedTexture||A.image[0].isCompressedTexture,ce=A.image[0]&&A.image[0].isDataTexture,Q=[];for(let se=0;se<6;se++)!N&&!ce?Q[se]=M(A.image[se],!1,!0,c):Q[se]=ce?A.image[se].image:A.image[se],Q[se]=Ft(A,Q[se]);const xe=Q[0],Ee=C(xe)||o,Pe=r.convert(A.format,A.encoding),ye=r.convert(A.type),Ce=I(A.internalFormat,Pe,ye,A.encoding),He=o&&A.isVideoTexture!==!0,Xe=_e.__version===void 0||de===!0;let Mt=y(A,xe,Ee);k(34067,A,Ee);let O;if(N){He&&Xe&&t.texStorage2D(34067,Mt,Ce,xe.width,xe.height);for(let se=0;se<6;se++){O=Q[se].mipmaps;for(let he=0;he<O.length;he++){const Se=O[he];A.format!==gn?Pe!==null?He?t.compressedTexSubImage2D(34069+se,he,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(34069+se,he,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(34069+se,he,0,0,Se.width,Se.height,Pe,ye,Se.data):t.texImage2D(34069+se,he,Ce,Se.width,Se.height,0,Pe,ye,Se.data)}}}else{O=A.mipmaps,He&&Xe&&(O.length>0&&Mt++,t.texStorage2D(34067,Mt,Ce,Q[0].width,Q[0].height));for(let se=0;se<6;se++)if(ce){He?t.texSubImage2D(34069+se,0,0,0,Q[se].width,Q[se].height,Pe,ye,Q[se].data):t.texImage2D(34069+se,0,Ce,Q[se].width,Q[se].height,0,Pe,ye,Q[se].data);for(let he=0;he<O.length;he++){const Ne=O[he].image[se].image;He?t.texSubImage2D(34069+se,he+1,0,0,Ne.width,Ne.height,Pe,ye,Ne.data):t.texImage2D(34069+se,he+1,Ce,Ne.width,Ne.height,0,Pe,ye,Ne.data)}}else{He?t.texSubImage2D(34069+se,0,0,0,Pe,ye,Q[se]):t.texImage2D(34069+se,0,Ce,Pe,ye,Q[se]);for(let he=0;he<O.length;he++){const Se=O[he];He?t.texSubImage2D(34069+se,he+1,0,0,Pe,ye,Se.image[se]):t.texImage2D(34069+se,he+1,Ce,Pe,ye,Se.image[se])}}}U(A,Ee)&&z(34067),_e.__version=pe.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function me(R,A,ie,de,pe){const _e=r.convert(ie.format,ie.encoding),N=r.convert(ie.type),ce=I(ie.internalFormat,_e,N,ie.encoding);n.get(A).__hasExternalTextures||(pe===32879||pe===35866?t.texImage3D(pe,0,ce,A.width,A.height,A.depth,0,_e,N,null):t.texImage2D(pe,0,ce,A.width,A.height,0,_e,N,null)),t.bindFramebuffer(36160,R),nt(A)?f.framebufferTexture2DMultisampleEXT(36160,de,pe,n.get(ie).__webglTexture,0,wt(A)):(pe===3553||pe>=34069&&pe<=34074)&&s.framebufferTexture2D(36160,de,pe,n.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(R,A,ie){if(s.bindRenderbuffer(36161,R),A.depthBuffer&&!A.stencilBuffer){let de=33189;if(ie||nt(A)){const pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===ii?de=36012:pe.type===xi&&(de=33190));const _e=wt(A);nt(A)?f.renderbufferStorageMultisampleEXT(36161,_e,de,A.width,A.height):s.renderbufferStorageMultisample(36161,_e,de,A.width,A.height)}else s.renderbufferStorage(36161,de,A.width,A.height);s.framebufferRenderbuffer(36160,36096,36161,R)}else if(A.depthBuffer&&A.stencilBuffer){const de=wt(A);ie&&nt(A)===!1?s.renderbufferStorageMultisample(36161,de,35056,A.width,A.height):nt(A)?f.renderbufferStorageMultisampleEXT(36161,de,35056,A.width,A.height):s.renderbufferStorage(36161,34041,A.width,A.height),s.framebufferRenderbuffer(36160,33306,36161,R)}else{const de=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0;pe<de.length;pe++){const _e=de[pe],N=r.convert(_e.format,_e.encoding),ce=r.convert(_e.type),Q=I(_e.internalFormat,N,ce,_e.encoding),xe=wt(A);ie&&nt(A)===!1?s.renderbufferStorageMultisample(36161,xe,Q,A.width,A.height):nt(A)?f.renderbufferStorageMultisampleEXT(36161,xe,Q,A.width,A.height):s.renderbufferStorage(36161,Q,A.width,A.height)}}s.bindRenderbuffer(36161,null)}function it(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),le(A.depthTexture,0);const de=n.get(A.depthTexture).__webglTexture,pe=wt(A);if(A.depthTexture.format===bi)nt(A)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,de,0,pe):s.framebufferTexture2D(36160,36096,3553,de,0);else if(A.depthTexture.format===rr)nt(A)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,de,0,pe):s.framebufferTexture2D(36160,33306,3553,de,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const A=n.get(R),ie=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");it(A.__webglFramebuffer,R)}else if(ie){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(36160,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=s.createRenderbuffer(),Fe(A.__webglDepthbuffer[de],R,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),Fe(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function je(R,A,ie){const de=n.get(R);A!==void 0&&me(de.__webglFramebuffer,R,R.texture,36064,3553),ie!==void 0&&Ie(R)}function bt(R){const A=R.texture,ie=n.get(R),de=n.get(A);R.addEventListener("dispose",$),R.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=A.version,a.memory.textures++);const pe=R.isWebGLCubeRenderTarget===!0,_e=R.isWebGLMultipleRenderTargets===!0,N=C(R)||o;if(pe){ie.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)ie.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(ie.__webglFramebuffer=s.createFramebuffer(),_e)if(i.drawBuffers){const ce=R.texture;for(let Q=0,xe=ce.length;Q<xe;Q++){const Ee=n.get(ce[Q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&nt(R)===!1){const ce=_e?A:[A];ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer);for(let Q=0;Q<ce.length;Q++){const xe=ce[Q];ie.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(36161,ie.__webglColorRenderbuffer[Q]);const Ee=r.convert(xe.format,xe.encoding),Pe=r.convert(xe.type),ye=I(xe.internalFormat,Ee,Pe,xe.encoding,R.isXRRenderTarget===!0),Ce=wt(R);s.renderbufferStorageMultisample(36161,Ce,ye,R.width,R.height),s.framebufferRenderbuffer(36160,36064+Q,36161,ie.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(36161,null),R.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(ie.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}}if(pe){t.bindTexture(34067,de.__webglTexture),k(34067,A,N);for(let ce=0;ce<6;ce++)me(ie.__webglFramebuffer[ce],R,A,36064,34069+ce);U(A,N)&&z(34067),t.unbindTexture()}else if(_e){const ce=R.texture;for(let Q=0,xe=ce.length;Q<xe;Q++){const Ee=ce[Q],Pe=n.get(Ee);t.bindTexture(3553,Pe.__webglTexture),k(3553,Ee,N),me(ie.__webglFramebuffer,R,Ee,36064+Q,3553),U(Ee,N)&&z(3553)}t.unbindTexture()}else{let ce=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ce=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,de.__webglTexture),k(ce,A,N),me(ie.__webglFramebuffer,R,A,36064,ce),U(A,N)&&z(ce),t.unbindTexture()}R.depthBuffer&&Ie(R)}function pt(R){const A=C(R)||o,ie=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let de=0,pe=ie.length;de<pe;de++){const _e=ie[de];if(U(_e,A)){const N=R.isWebGLCubeRenderTarget?34067:3553,ce=n.get(_e).__webglTexture;t.bindTexture(N,ce),z(N),t.unbindTexture()}}}function St(R){if(o&&R.samples>0&&nt(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],ie=R.width,de=R.height;let pe=16384;const _e=[],N=R.stencilBuffer?33306:36096,ce=n.get(R),Q=R.isWebGLMultipleRenderTargets===!0;if(Q)for(let xe=0;xe<A.length;xe++)t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,ce.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ce.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){_e.push(36064+xe),R.depthBuffer&&_e.push(N);const Ee=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ee===!1&&(R.depthBuffer&&(pe|=256),R.stencilBuffer&&(pe|=1024)),Q&&s.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[xe]),Ee===!0&&(s.invalidateFramebuffer(36008,[N]),s.invalidateFramebuffer(36009,[N])),Q){const Pe=n.get(A[xe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Pe,0)}s.blitFramebuffer(0,0,ie,de,0,0,ie,de,pe,9728),p&&s.invalidateFramebuffer(36008,_e)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Q)for(let xe=0;xe<A.length;xe++){t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+xe,36161,ce.__webglColorRenderbuffer[xe]);const Ee=n.get(A[xe]).__webglTexture;t.bindFramebuffer(36160,ce.__webglFramebuffer),s.framebufferTexture2D(36009,36064+xe,3553,Ee,0)}t.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function wt(R){return Math.min(h,R.samples)}function nt(R){const A=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function lt(R){const A=a.render.frame;g.get(R)!==A&&(g.set(R,A),R.update())}function Ft(R,A){const ie=R.encoding,de=R.format,pe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===_a||ie!==ai&&(ie===ft?o===!1?e.has("EXT_sRGB")===!0&&de===gn?(R.format=_a,R.minFilter=Qt,R.generateMipmaps=!1):A=bc.sRGBToLinear(A):(de!==gn||pe!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ie)),A}this.allocateTextureUnit=Z,this.resetTextureUnits=ee,this.setTexture2D=le,this.setTexture2DArray=K,this.setTexture3D=ue,this.setTextureCube=G,this.rebindTextures=je,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=nt}function vg(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===yi)return 5121;if(r===Ku)return 32819;if(r===Zu)return 32820;if(r===qu)return 5120;if(r===Xu)return 5122;if(r===mc)return 5123;if(r===Yu)return 5124;if(r===xi)return 5125;if(r===ii)return 5126;if(r===Pr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ju)return 6406;if(r===gn)return 6408;if(r===Qu)return 6409;if(r===$u)return 6410;if(r===bi)return 6402;if(r===rr)return 34041;if(r===_a)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ef)return 6403;if(r===tf)return 36244;if(r===nf)return 33319;if(r===rf)return 33320;if(r===sf)return 36249;if(r===Ns||r===Us||r===ks||r===Os)if(a===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ns)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ns)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Us)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ks)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Os)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===no||r===io||r===ro||r===so)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===no)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===io)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ro)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===so)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===af)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ao||r===oo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ao)return a===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===oo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lo||r===co||r===uo||r===fo||r===ho||r===po||r===mo||r===go||r===_o||r===vo||r===xo||r===bo||r===Mo||r===yo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===lo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===co)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ho)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===po)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===go)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_o)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yo)return a===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Fs)return a===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===of||r===So||r===wo||r===Eo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Fs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===So)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===er?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class xg extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bg={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mg extends en{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:bi,u!==bi&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bi&&(n=xi),n===void 0&&u===rr&&(n=er),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1}}class yg extends Si{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const x=t.getContextAttributes();let m=null,d=null;const T=[],M=[],C=new Set,L=new Map,U=new Wt;U.layers.enable(1),U.viewport=new dt;const z=new Wt;z.layers.enable(2),z.viewport=new dt;const I=[U,z],y=new xg;y.layers.enable(1),y.layers.enable(2);let E=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=T[G];return j===void 0&&(j=new oa,T[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=T[G];return j===void 0&&(j=new oa,T[G]=j),j.getGripSpace()},this.getHand=function(G){let j=T[G];return j===void 0&&(j=new oa,T[G]=j),j.getHandSpace()};function $(G){const j=M.indexOf(G.inputSource);if(j===-1)return;const te=T[j];te!==void 0&&te.dispatchEvent({type:G.type,data:G.inputSource})}function B(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",V);for(let G=0;G<T.length;G++){const j=M[G];j!==null&&(M[G]=null,T[G].disconnect(j))}E=null,X=null,e.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",B),i.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:p}),d=new oi(p.framebufferWidth,p.framebufferHeight,{format:gn,type:yi,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let j=null,te=null,k=null;x.depth&&(k=x.stencil?35056:33190,j=x.stencil?rr:bi,te=x.stencil?er:xi);const D={colorFormat:32856,depthFormat:k,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(D),i.updateRenderState({layers:[f]}),d=new oi(f.textureWidth,f.textureHeight,{format:gn,type:yi,depthTexture:new Mg(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const Me=e.properties.get(d);Me.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(G){for(let j=0;j<G.removed.length;j++){const te=G.removed[j],k=M.indexOf(te);k>=0&&(M[k]=null,T[k].disconnect(te))}for(let j=0;j<G.added.length;j++){const te=G.added[j];let k=M.indexOf(te);if(k===-1){for(let Me=0;Me<T.length;Me++)if(Me>=M.length){M.push(te),k=Me;break}else if(M[Me]===null){M[Me]=te,k=Me;break}if(k===-1)break}const D=T[k];D&&D.connect(te)}}const Y=new F,H=new F;function ee(G,j,te){Y.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(te.matrixWorld);const k=Y.distanceTo(H),D=j.projectionMatrix.elements,Me=te.projectionMatrix.elements,Ae=D[14]/(D[10]-1),me=D[14]/(D[10]+1),Fe=(D[9]+1)/D[5],it=(D[9]-1)/D[5],Ie=(D[8]-1)/D[0],je=(Me[8]+1)/Me[0],bt=Ae*Ie,pt=Ae*je,St=k/(-Ie+je),wt=St*-Ie;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(wt),G.translateZ(St),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const nt=Ae+St,lt=me+St,Ft=bt-wt,R=pt+(k-wt),A=Fe*me/lt*nt,ie=it*me/lt*nt;G.projectionMatrix.makePerspective(Ft,R,A,ie,nt,lt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Z(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;y.near=z.near=U.near=G.near,y.far=z.far=U.far=G.far,(E!==y.near||X!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,X=y.far);const j=G.parent,te=y.cameras;Z(y,j);for(let k=0;k<te.length;k++)Z(te[k],j);te.length===2?ee(y,U,z):y.projectionMatrix.copy(U.projectionMatrix),ne(G,y,j)};function ne(G,j,te){te===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(te.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const k=G.children;for(let D=0,Me=k.length;D<Me;D++)k[D].updateMatrixWorld(!0);G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=sr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return C};let le=null;function K(G,j){if(u=j.getViewerPose(c||a),g=j,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let k=!1;te.length!==y.cameras.length&&(y.cameras.length=0,k=!0);for(let D=0;D<te.length;D++){const Me=te[D];let Ae=null;if(p!==null)Ae=p.getViewport(Me);else{const Fe=h.getViewSubImage(f,Me);Ae=Fe.viewport,D===0&&(e.setRenderTargetTextures(d,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(d))}let me=I[D];me===void 0&&(me=new Wt,me.layers.enable(D),me.viewport=new dt,I[D]=me),me.matrix.fromArray(Me.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Me.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),D===0&&(y.matrix.copy(me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),k===!0&&y.cameras.push(me)}}for(let te=0;te<T.length;te++){const k=M[te],D=T[te];k!==null&&D!==void 0&&D.update(k,j,c||a)}if(le&&le(G,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let te=null;for(const k of C)j.detectedPlanes.has(k)||(te===null&&(te=[]),te.push(k));if(te!==null)for(const k of te)C.delete(k),L.delete(k),n.dispatchEvent({type:"planeremoved",data:k});for(const k of j.detectedPlanes)if(!C.has(k))C.add(k),L.set(k,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:k});else{const D=L.get(k);k.lastChangedTime>D&&(L.set(k,k.lastChangedTime),n.dispatchEvent({type:"planechanged",data:k}))}}g=null}const ue=new Lc;ue.setAnimationLoop(K),this.setAnimationLoop=function(G){le=G},this.dispose=function(){}}}function Sg(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Tc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,T,M,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,C)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wg(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function l(T,M){const C=M.program;n.uniformBlockBinding(T,C)}function c(T,M){let C=i[T.id];C===void 0&&(g(T),C=u(T),i[T.id]=C,T.addEventListener("dispose",m));const L=M.program;n.updateUBOMapping(T,L);const U=e.render.frame;r[T.id]!==U&&(f(T),r[T.id]=U)}function u(T){const M=h();T.__bindingPointIndex=M;const C=s.createBuffer(),L=T.__size,U=T.usage;return s.bindBuffer(35345,C),s.bufferData(35345,L,U),s.bindBuffer(35345,null),s.bindBufferBase(35345,M,C),C}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=i[T.id],C=T.uniforms,L=T.__cache;s.bindBuffer(35345,M);for(let U=0,z=C.length;U<z;U++){const I=C[U];if(p(I,U,L)===!0){const y=I.__offset,E=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let $=0;$<E.length;$++){const B=E[$],V=x(B);typeof B=="number"?(I.__data[0]=B,s.bufferSubData(35345,y+X,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=B.elements[0],I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=B.elements[0],I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=B.elements[0]):(B.toArray(I.__data,X),X+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,y,I.__data)}}s.bindBuffer(35345,null)}function p(T,M,C){const L=T.value;if(C[M]===void 0){if(typeof L=="number")C[M]=L;else{const U=Array.isArray(L)?L:[L],z=[];for(let I=0;I<U.length;I++)z.push(U[I].clone());C[M]=z}return!0}else if(typeof L=="number"){if(C[M]!==L)return C[M]=L,!0}else{const U=Array.isArray(C[M])?C[M]:[C[M]],z=Array.isArray(L)?L:[L];for(let I=0;I<U.length;I++){const y=U[I];if(y.equals(z[I])===!1)return y.copy(z[I]),!0}}return!1}function g(T){const M=T.uniforms;let C=0;const L=16;let U=0;for(let z=0,I=M.length;z<I;z++){const y=M[z],E={boundary:0,storage:0},X=Array.isArray(y.value)?y.value:[y.value];for(let $=0,B=X.length;$<B;$++){const V=X[$],Y=x(V);E.boundary+=Y.boundary,E.storage+=Y.storage}if(y.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=C,z>0){U=C%L;const $=L-U;U!==0&&$-E.boundary<0&&(C+=L-U,y.__offset=C)}C+=E.storage}return U=C%L,U>0&&(C+=L-U),T.__size=C,T.__cache={},this}function x(T){const M={boundary:0,storage:0};return typeof T=="number"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const C=a.indexOf(M.__bindingPointIndex);a.splice(C,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}function Eg(){const s=Dr("canvas");return s.style.display="block",s}class Nc{constructor(e={}){const{canvas:t=Eg(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=null,g=null;const x=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ai,this.useLegacyLights=!0,this.toneMapping=Rn,this.toneMappingExposure=1;const d=this;let T=!1,M=0,C=0,L=null,U=-1,z=null;const I=new dt,y=new dt;let E=null,X=t.width,$=t.height,B=1,V=null,Y=null;const H=new dt(0,0,X,$),ee=new dt(0,0,X,$);let Z=!1;const ne=new Da;let le=!1,K=!1,ue=null;const G=new Je,j=new F,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return L===null?B:1}let D=n;function Me(P,q){for(let re=0;re<P.length;re++){const W=P[re],oe=t.getContext(W,q);if(oe!==null)return oe}return null}try{const P={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),D===null){const q=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&q.shift(),D=Me(q,P),D===null)throw Me(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ae,me,Fe,it,Ie,je,bt,pt,St,wt,nt,lt,Ft,R,A,ie,de,pe,_e,N,ce,Q,xe,Ee;function Pe(){Ae=new kp(D),me=new Pp(D,Ae,e),Ae.init(me),Q=new vg(D,Ae,me),Fe=new gg(D,Ae,me),it=new zp,Ie=new ng,je=new _g(D,Ae,Fe,Ie,me,Q,it),bt=new Dp(d),pt=new Up(d),St=new Jf(D,me),xe=new Cp(D,Ae,St,me),wt=new Op(D,St,it,xe),nt=new Vp(D,wt,St,it),_e=new Hp(D,me,je),ie=new Rp(Ie),lt=new tg(d,bt,pt,Ae,me,xe,ie),Ft=new Sg(d,Ie),R=new rg,A=new ug(Ae,me),pe=new Ap(d,bt,pt,Fe,nt,f,l),de=new mg(d,nt,me),Ee=new wg(D,it,me,Fe),N=new Lp(D,Ae,it,me),ce=new Fp(D,Ae,it,me),it.programs=lt.programs,d.capabilities=me,d.extensions=Ae,d.properties=Ie,d.renderLists=R,d.shadowMap=de,d.state=Fe,d.info=it}Pe();const ye=new yg(d,D);this.xr=ye,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=Ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(X,$,!1))},this.getSize=function(P){return P.set(X,$)},this.setSize=function(P,q,re=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,$=q,t.width=Math.floor(P*B),t.height=Math.floor(q*B),re===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(X*B,$*B).floor()},this.setDrawingBufferSize=function(P,q,re){X=P,$=q,B=re,t.width=Math.floor(P*re),t.height=Math.floor(q*re),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(H)},this.setViewport=function(P,q,re,W){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,q,re,W),Fe.viewport(I.copy(H).multiplyScalar(B).floor())},this.getScissor=function(P){return P.copy(ee)},this.setScissor=function(P,q,re,W){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,q,re,W),Fe.scissor(y.copy(ee).multiplyScalar(B).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(P){Fe.setScissorTest(Z=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(P=!0,q=!0,re=!0){let W=0;P&&(W|=16384),q&&(W|=256),re&&(W|=1024),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),R.dispose(),A.dispose(),Ie.dispose(),bt.dispose(),pt.dispose(),nt.dispose(),xe.dispose(),Ee.dispose(),lt.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ne),ye.removeEventListener("sessionend",ht),ue&&(ue.dispose(),ue=null),xt.stop()};function Ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=it.autoReset,q=de.enabled,re=de.autoUpdate,W=de.needsUpdate,oe=de.type;Pe(),it.autoReset=P,de.enabled=q,de.autoUpdate=re,de.needsUpdate=W,de.type=oe}function Xe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Mt(P){const q=P.target;q.removeEventListener("dispose",Mt),O(q)}function O(P){se(P),Ie.remove(P)}function se(P){const q=Ie.get(P).programs;q!==void 0&&(q.forEach(function(re){lt.releaseProgram(re)}),P.isShaderMaterial&&lt.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,re,W,oe,ke){q===null&&(q=te);const Ge=oe.isMesh&&oe.matrixWorld.determinant()<0,Ve=Ts(P,q,re,W,oe);Fe.setMaterial(W,Ge);let qe=re.index,Ye=1;W.wireframe===!0&&(qe=wt.getWireframeAttribute(re),Ye=2);const Ke=re.drawRange,$e=re.attributes.position;let ot=Ke.start*Ye,ct=(Ke.start+Ke.count)*Ye;ke!==null&&(ot=Math.max(ot,ke.start*Ye),ct=Math.min(ct,(ke.start+ke.count)*Ye)),qe!==null?(ot=Math.max(ot,0),ct=Math.min(ct,qe.count)):$e!=null&&(ot=Math.max(ot,0),ct=Math.min(ct,$e.count));const zt=ct-ot;if(zt<0||zt===1/0)return;xe.setup(oe,W,Ve,re,qe);let vn,Et=N;if(qe!==null&&(vn=St.get(qe),Et=ce,Et.setIndex(vn)),oe.isMesh)W.wireframe===!0?(Fe.setLineWidth(W.wireframeLinewidth*k()),Et.setMode(1)):Et.setMode(4);else if(oe.isLine){let et=W.linewidth;et===void 0&&(et=1),Fe.setLineWidth(et*k()),oe.isLineSegments?Et.setMode(1):oe.isLineLoop?Et.setMode(2):Et.setMode(3)}else oe.isPoints?Et.setMode(0):oe.isSprite&&Et.setMode(4);if(oe.isInstancedMesh)Et.renderInstances(ot,zt,oe.count);else if(re.isInstancedBufferGeometry){const et=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ti=Math.min(re.instanceCount,et);Et.renderInstances(ot,zt,Ti)}else Et.render(ot,zt)},this.compile=function(P,q){function re(W,oe,ke){W.transparent===!0&&W.side===Ln&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,Ei(W,oe,ke),W.side=Kn,W.needsUpdate=!0,Ei(W,oe,ke),W.side=Ln):Ei(W,oe,ke)}g=A.get(P),g.init(),m.push(g),P.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(d.useLegacyLights),P.traverse(function(W){const oe=W.material;if(oe)if(Array.isArray(oe))for(let ke=0;ke<oe.length;ke++){const Ge=oe[ke];re(Ge,P,W)}else re(oe,P,W)}),m.pop(),g=null};let he=null;function Se(P){he&&he(P)}function Ne(){xt.stop()}function ht(){xt.start()}const xt=new Lc;xt.setAnimationLoop(Se),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(P){he=P,ye.setAnimationLoop(P),P===null?xt.stop():xt.start()},ye.addEventListener("sessionstart",Ne),ye.addEventListener("sessionend",ht),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(q),q=ye.getCamera()),P.isScene===!0&&P.onBeforeRender(d,P,q,L),g=A.get(P,m.length),g.init(),m.push(g),G.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ne.setFromProjectionMatrix(G),K=this.localClippingEnabled,le=ie.init(this.clippingPlanes,K),p=R.get(P,x.length),p.init(),x.push(p),Nt(P,q,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(V,Y),le===!0&&ie.beginShadows();const re=g.state.shadowsArray;if(de.render(re,P,q),le===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(p,P),g.setupLights(d.useLegacyLights),q.isArrayCamera){const W=q.cameras;for(let oe=0,ke=W.length;oe<ke;oe++){const Ge=W[oe];En(p,P,Ge,Ge.viewport)}}else En(p,P,q);L!==null&&(je.updateMultisampleRenderTarget(L),je.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(d,P,q),xe.resetDefaultState(),U=-1,z=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Nt(P,q,re,W){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)re=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ne.intersectsSprite(P)){W&&j.setFromMatrixPosition(P.matrixWorld).applyMatrix4(G);const Ge=nt.update(P),Ve=P.material;Ve.visible&&p.push(P,Ge,Ve,re,j.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==it.render.frame&&(P.skeleton.update(),P.skeleton.frame=it.render.frame),!P.frustumCulled||ne.intersectsObject(P))){W&&j.setFromMatrixPosition(P.matrixWorld).applyMatrix4(G);const Ge=nt.update(P),Ve=P.material;if(Array.isArray(Ve)){const qe=Ge.groups;for(let Ye=0,Ke=qe.length;Ye<Ke;Ye++){const $e=qe[Ye],ot=Ve[$e.materialIndex];ot&&ot.visible&&p.push(P,Ge,ot,re,j.z,$e)}}else Ve.visible&&p.push(P,Ge,Ve,re,j.z,null)}}const ke=P.children;for(let Ge=0,Ve=ke.length;Ge<Ve;Ge++)Nt(ke[Ge],q,re,W)}function En(P,q,re,W){const oe=P.opaque,ke=P.transmissive,Ge=P.transparent;g.setupLightsView(re),le===!0&&ie.setGlobalState(d.clippingPlanes,re),ke.length>0&&rt(oe,ke,q,re),W&&Fe.viewport(I.copy(W)),oe.length>0&&Kt(oe,q,re),ke.length>0&&Kt(ke,q,re),Ge.length>0&&Kt(Ge,q,re),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function rt(P,q,re,W){if(ue===null){const Ve=me.isWebGL2;ue=new oi(1024,1024,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Pr:yi,minFilter:Mi,samples:Ve&&o===!0?4:0})}const oe=d.getRenderTarget();d.setRenderTarget(ue),d.clear();const ke=d.toneMapping;d.toneMapping=Rn,Kt(P,re,W),je.updateMultisampleRenderTarget(ue),je.updateRenderTargetMipmap(ue);let Ge=!1;for(let Ve=0,qe=q.length;Ve<qe;Ve++){const Ye=q[Ve],Ke=Ye.object,$e=Ye.geometry,ot=Ye.material,ct=Ye.group;if(ot.side===Ln&&Ke.layers.test(W.layers)){const zt=ot.side;ot.side=sn,ot.needsUpdate=!0,pn(Ke,re,W,$e,ot,ct),ot.side=zt,ot.needsUpdate=!0,Ge=!0}}Ge===!0&&(je.updateMultisampleRenderTarget(ue),je.updateRenderTargetMipmap(ue)),d.setRenderTarget(oe),d.toneMapping=ke}function Kt(P,q,re){const W=q.isScene===!0?q.overrideMaterial:null;for(let oe=0,ke=P.length;oe<ke;oe++){const Ge=P[oe],Ve=Ge.object,qe=Ge.geometry,Ye=W===null?Ge.material:W,Ke=Ge.group;Ve.layers.test(re.layers)&&pn(Ve,q,re,qe,Ye,Ke)}}function pn(P,q,re,W,oe,ke){P.onBeforeRender(d,q,re,W,oe,ke),P.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),oe.onBeforeRender(d,q,re,W,P,ke),oe.transparent===!0&&oe.side===Ln&&oe.forceSinglePass===!1?(oe.side=sn,oe.needsUpdate=!0,d.renderBufferDirect(re,q,W,oe,P,ke),oe.side=Kn,oe.needsUpdate=!0,d.renderBufferDirect(re,q,W,oe,P,ke),oe.side=Ln):d.renderBufferDirect(re,q,W,oe,P,ke),P.onAfterRender(d,q,re,W,oe,ke)}function Ei(P,q,re){q.isScene!==!0&&(q=te);const W=Ie.get(P),oe=g.state.lights,ke=g.state.shadowsArray,Ge=oe.state.version,Ve=lt.getParameters(P,oe.state,ke,q,re),qe=lt.getProgramCacheKey(Ve);let Ye=W.programs;W.environment=P.isMeshStandardMaterial?q.environment:null,W.fog=q.fog,W.envMap=(P.isMeshStandardMaterial?pt:bt).get(P.envMap||W.environment),Ye===void 0&&(P.addEventListener("dispose",Mt),Ye=new Map,W.programs=Ye);let Ke=Ye.get(qe);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Ge)return kr(P,Ve),Ke}else Ve.uniforms=lt.getUniforms(P),P.onBuild(re,Ve,d),P.onBeforeCompile(Ve,d),Ke=lt.acquireProgram(Ve,qe),Ye.set(qe,Ke),W.uniforms=Ve.uniforms;const $e=W.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&($e.clippingPlanes=ie.uniform),kr(P,Ve),W.needsLights=Cs(P),W.lightsStateVersion=Ge,W.needsLights&&($e.ambientLightColor.value=oe.state.ambient,$e.lightProbe.value=oe.state.probe,$e.directionalLights.value=oe.state.directional,$e.directionalLightShadows.value=oe.state.directionalShadow,$e.spotLights.value=oe.state.spot,$e.spotLightShadows.value=oe.state.spotShadow,$e.rectAreaLights.value=oe.state.rectArea,$e.ltc_1.value=oe.state.rectAreaLTC1,$e.ltc_2.value=oe.state.rectAreaLTC2,$e.pointLights.value=oe.state.point,$e.pointLightShadows.value=oe.state.pointShadow,$e.hemisphereLights.value=oe.state.hemi,$e.directionalShadowMap.value=oe.state.directionalShadowMap,$e.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,$e.spotShadowMap.value=oe.state.spotShadowMap,$e.spotLightMatrix.value=oe.state.spotLightMatrix,$e.spotLightMap.value=oe.state.spotLightMap,$e.pointShadowMap.value=oe.state.pointShadowMap,$e.pointShadowMatrix.value=oe.state.pointShadowMatrix);const ot=Ke.getUniforms(),ct=us.seqWithValue(ot.seq,$e);return W.currentProgram=Ke,W.uniformsList=ct,Ke}function kr(P,q){const re=Ie.get(P);re.outputEncoding=q.outputEncoding,re.instancing=q.instancing,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function Ts(P,q,re,W,oe){q.isScene!==!0&&(q=te),je.resetTextureUnits();const ke=q.fog,Ge=W.isMeshStandardMaterial?q.environment:null,Ve=L===null?d.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:ai,qe=(W.isMeshStandardMaterial?pt:bt).get(W.envMap||Ge),Ye=W.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ke=!!W.normalMap&&!!re.attributes.tangent,$e=!!re.morphAttributes.position,ot=!!re.morphAttributes.normal,ct=!!re.morphAttributes.color,zt=W.toneMapped?d.toneMapping:Rn,vn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Et=vn!==void 0?vn.length:0,et=Ie.get(W),Ti=g.state.lights;if(le===!0&&(K===!0||P!==z)){const Zt=P===z&&W.id===U;ie.setState(W,P,Zt)}let Dt=!1;W.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ti.state.version||et.outputEncoding!==Ve||oe.isInstancedMesh&&et.instancing===!1||!oe.isInstancedMesh&&et.instancing===!0||oe.isSkinnedMesh&&et.skinning===!1||!oe.isSkinnedMesh&&et.skinning===!0||et.envMap!==qe||W.fog===!0&&et.fog!==ke||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ie.numPlanes||et.numIntersection!==ie.numIntersection)||et.vertexAlphas!==Ye||et.vertexTangents!==Ke||et.morphTargets!==$e||et.morphNormals!==ot||et.morphColors!==ct||et.toneMapping!==zt||me.isWebGL2===!0&&et.morphTargetsCount!==Et)&&(Dt=!0):(Dt=!0,et.__version=W.version);let Fn=et.currentProgram;Dt===!0&&(Fn=Ei(W,q,oe));let Or=!1,Jn=!1,Ai=!1;const Lt=Fn.getUniforms(),zn=et.uniforms;if(Fe.useProgram(Fn.program)&&(Or=!0,Jn=!0,Ai=!0),W.id!==U&&(U=W.id,Jn=!0),Or||z!==P){if(Lt.setValue(D,"projectionMatrix",P.projectionMatrix),me.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),z!==P&&(z=P,Jn=!0,Ai=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Zt=Lt.map.cameraPosition;Zt!==void 0&&Zt.setValue(D,j.setFromMatrixPosition(P.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||oe.isSkinnedMesh)&&Lt.setValue(D,"viewMatrix",P.matrixWorldInverse)}if(oe.isSkinnedMesh){Lt.setOptional(D,oe,"bindMatrix"),Lt.setOptional(D,oe,"bindMatrixInverse");const Zt=oe.skeleton;Zt&&(me.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Lt.setValue(D,"boneTexture",Zt.boneTexture,je),Lt.setValue(D,"boneTextureSize",Zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ci=re.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0&&me.isWebGL2===!0)&&_e.update(oe,re,Fn),(Jn||et.receiveShadow!==oe.receiveShadow)&&(et.receiveShadow=oe.receiveShadow,Lt.setValue(D,"receiveShadow",oe.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(zn.envMap.value=qe,zn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Jn&&(Lt.setValue(D,"toneMappingExposure",d.toneMappingExposure),et.needsLights&&As(zn,Ai),ke&&W.fog===!0&&Ft.refreshFogUniforms(zn,ke),Ft.refreshMaterialUniforms(zn,W,B,$,ue),us.upload(D,et.uniformsList,zn,je)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(us.upload(D,et.uniformsList,zn,je),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Lt.setValue(D,"center",oe.center),Lt.setValue(D,"modelViewMatrix",oe.modelViewMatrix),Lt.setValue(D,"normalMatrix",oe.normalMatrix),Lt.setValue(D,"modelMatrix",oe.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Zt=W.uniformsGroups;for(let Li=0,Ls=Zt.length;Li<Ls;Li++)if(me.isWebGL2){const Fr=Zt[Li];Ee.update(Fr,Fn),Ee.bind(Fr,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function As(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function Cs(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,q,re){Ie.get(P.texture).__webglTexture=q,Ie.get(P.depthTexture).__webglTexture=re;const W=Ie.get(P);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=re===void 0,W.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,q){const re=Ie.get(P);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,re=0){L=P,M=q,C=re;let W=!0,oe=null,ke=!1,Ge=!1;if(P){const qe=Ie.get(P);qe.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(36160,null),W=!1):qe.__webglFramebuffer===void 0?je.setupRenderTarget(P):qe.__hasExternalTextures&&je.rebindTextures(P,Ie.get(P.texture).__webglTexture,Ie.get(P.depthTexture).__webglTexture);const Ye=P.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ge=!0);const Ke=Ie.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(oe=Ke[q],ke=!0):me.isWebGL2&&P.samples>0&&je.useMultisampledRTT(P)===!1?oe=Ie.get(P).__webglMultisampledFramebuffer:oe=Ke,I.copy(P.viewport),y.copy(P.scissor),E=P.scissorTest}else I.copy(H).multiplyScalar(B).floor(),y.copy(ee).multiplyScalar(B).floor(),E=Z;if(Fe.bindFramebuffer(36160,oe)&&me.drawBuffers&&W&&Fe.drawBuffers(P,oe),Fe.viewport(I),Fe.scissor(y),Fe.setScissorTest(E),ke){const qe=Ie.get(P.texture);D.framebufferTexture2D(36160,36064,34069+q,qe.__webglTexture,re)}else if(Ge){const qe=Ie.get(P.texture),Ye=q||0;D.framebufferTextureLayer(36160,36064,qe.__webglTexture,re||0,Ye)}U=-1},this.readRenderTargetPixels=function(P,q,re,W,oe,ke,Ge){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ie.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){Fe.bindFramebuffer(36160,Ve);try{const qe=P.texture,Ye=qe.format,Ke=qe.type;if(Ye!==gn&&Q.convert(Ye)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ke===Pr&&(Ae.has("EXT_color_buffer_half_float")||me.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ke!==yi&&Q.convert(Ke)!==D.getParameter(35738)&&!(Ke===ii&&(me.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-W&&re>=0&&re<=P.height-oe&&D.readPixels(q,re,W,oe,Q.convert(Ye),Q.convert(Ke),ke)}finally{const qe=L!==null?Ie.get(L).__webglFramebuffer:null;Fe.bindFramebuffer(36160,qe)}}},this.copyFramebufferToTexture=function(P,q,re=0){const W=Math.pow(2,-re),oe=Math.floor(q.image.width*W),ke=Math.floor(q.image.height*W);je.setTexture2D(q,0),D.copyTexSubImage2D(3553,re,0,0,P.x,P.y,oe,ke),Fe.unbindTexture()},this.copyTextureToTexture=function(P,q,re,W=0){const oe=q.image.width,ke=q.image.height,Ge=Q.convert(re.format),Ve=Q.convert(re.type);je.setTexture2D(re,0),D.pixelStorei(37440,re.flipY),D.pixelStorei(37441,re.premultiplyAlpha),D.pixelStorei(3317,re.unpackAlignment),q.isDataTexture?D.texSubImage2D(3553,W,P.x,P.y,oe,ke,Ge,Ve,q.image.data):q.isCompressedTexture?D.compressedTexSubImage2D(3553,W,P.x,P.y,q.mipmaps[0].width,q.mipmaps[0].height,Ge,q.mipmaps[0].data):D.texSubImage2D(3553,W,P.x,P.y,Ge,Ve,q.image),W===0&&re.generateMipmaps&&D.generateMipmap(3553),Fe.unbindTexture()},this.copyTextureToTexture3D=function(P,q,re,W,oe=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ke=P.max.x-P.min.x+1,Ge=P.max.y-P.min.y+1,Ve=P.max.z-P.min.z+1,qe=Q.convert(W.format),Ye=Q.convert(W.type);let Ke;if(W.isData3DTexture)je.setTexture3D(W,0),Ke=32879;else if(W.isDataArrayTexture)je.setTexture2DArray(W,0),Ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,W.flipY),D.pixelStorei(37441,W.premultiplyAlpha),D.pixelStorei(3317,W.unpackAlignment);const $e=D.getParameter(3314),ot=D.getParameter(32878),ct=D.getParameter(3316),zt=D.getParameter(3315),vn=D.getParameter(32877),Et=re.isCompressedTexture?re.mipmaps[0]:re.image;D.pixelStorei(3314,Et.width),D.pixelStorei(32878,Et.height),D.pixelStorei(3316,P.min.x),D.pixelStorei(3315,P.min.y),D.pixelStorei(32877,P.min.z),re.isDataTexture||re.isData3DTexture?D.texSubImage3D(Ke,oe,q.x,q.y,q.z,ke,Ge,Ve,qe,Ye,Et.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ke,oe,q.x,q.y,q.z,ke,Ge,Ve,qe,Et.data)):D.texSubImage3D(Ke,oe,q.x,q.y,q.z,ke,Ge,Ve,qe,Ye,Et),D.pixelStorei(3314,$e),D.pixelStorei(32878,ot),D.pixelStorei(3316,ct),D.pixelStorei(3315,zt),D.pixelStorei(32877,vn),oe===0&&W.generateMipmaps&&D.generateMipmap(Ke),Fe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?je.setTextureCube(P,0):P.isData3DTexture?je.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?je.setTexture2DArray(P,0):je.setTexture2D(P,0),Fe.unbindTexture()},this.resetState=function(){M=0,C=0,L=null,Fe.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Tg extends Nc{}Tg.prototype.isWebGL1Renderer=!0;class Uc extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const pl=new F,ml=new dt,gl=new dt,Ag=new F,_l=new Je,Ki=new F;class Cg extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ki.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ki),this.boundingBox.expandByPoint(Ki)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ur),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ki.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ki),this.boundingSphere.expandByPoint(Ki)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ml.fromBufferAttribute(i.attributes.skinIndex,e),gl.fromBufferAttribute(i.attributes.skinWeight,e),pl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=gl.getComponent(r);if(a!==0){const o=ml.getComponent(r);_l.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ag.copy(pl).applyMatrix4(_l),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class kc extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Oc extends en{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Vt,u=Vt,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vl=new Je,Lg=new Je;class Ua{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Lg;vl.multiplyMatrices(o,t[r]),vl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ua(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=_c(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Oc(t,e,e,gn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new kc),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ba extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xl=new F,bl=new F,Ml=new Je,la=new La,ls=new Ur;class Fc extends yt{constructor(e=new dn,t=new ba){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xl.fromBufferAttribute(t,i-1),bl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xl.distanceTo(bl);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=r,e.ray.intersectsSphere(ls)===!1)return;Ml.copy(i).invert(),la.copy(e.ray).applyMatrix4(Ml);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,u=new F,h=new F,f=new F,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let M=d,C=T-1;M<C;M+=p){const L=g.getX(M),U=g.getX(M+1);if(c.fromBufferAttribute(m,L),u.fromBufferAttribute(m,U),la.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),T=Math.min(m.count,a.start+a.count);for(let M=d,C=T-1;M<C;M+=p){if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,M+1),la.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const yl=new F,Sl=new F;class Pg extends Fc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)yl.fromBufferAttribute(t,i),Sl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yl.distanceTo(Sl);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ka extends dn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const x=[],m=n/2;let d=0;T(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(p,2));function T(){const C=new F,L=new F;let U=0;const z=(t-e)/n;for(let I=0;I<=r;I++){const y=[],E=I/r,X=E*(t-e)+e;for(let $=0;$<=i;$++){const B=$/i,V=B*l+o,Y=Math.sin(V),H=Math.cos(V);L.x=X*Y,L.y=-E*n+m,L.z=X*H,h.push(L.x,L.y,L.z),C.set(Y,z,H).normalize(),f.push(C.x,C.y,C.z),p.push(B,1-E),y.push(g++)}x.push(y)}for(let I=0;I<i;I++)for(let y=0;y<r;y++){const E=x[y][I],X=x[y+1][I],$=x[y+1][I+1],B=x[y][I+1];u.push(E,X,B),u.push(X,$,B),U+=6}c.addGroup(d,U,0),d+=U}function M(C){const L=g,U=new We,z=new F;let I=0;const y=C===!0?e:t,E=C===!0?1:-1;for(let $=1;$<=i;$++)h.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;const X=g;for(let $=0;$<=i;$++){const V=$/i*l+o,Y=Math.cos(V),H=Math.sin(V);z.x=y*H,z.y=m*E,z.z=y*Y,h.push(z.x,z.y,z.z),f.push(0,E,0),U.x=Y*.5+.5,U.y=H*.5*E+.5,p.push(U.x,U.y),g++}for(let $=0;$<i;$++){const B=L+$,V=X+$;C===!0?u.push(V,V+1,B):u.push(V+1,V,B),I+=3}c.addGroup(d,I,C===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wl extends wi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oa extends wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_s,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ni(s,e,t){return zc(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function cs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function zc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Rg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function El(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Bc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ys{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dg extends ys{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:To,endingEnd:To}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ao:r=e,o=2*t-n;break;case Co:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ao:a=e,l=2*n-t;break;case Co:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,T=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*x+.5*g,C=p*m-p*x;for(let L=0;L!==o;++L)r[L]=d*a[u+L]+T*a[c+L]+M*a[l+L]+C*a[h+L];return r}}class Ig extends ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class Ng extends ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cs(t,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cs(e.times,Array),values:cs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ig(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case zs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return zs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=ni(n,r,a),this.values=ni(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&zc(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ni(this.times),t=ni(this.values),n=this.getValueSize(),i=this.getInterpolation()===zs,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ni(e,0,a),this.values=ni(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=ni(this.times,0),t=ni(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=hs;class mr extends On{}mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=fs;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gc extends On{}Gc.prototype.ValueTypeName="color";class ds extends On{}ds.prototype.ValueTypeName="number";class Ug extends ys{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)kn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class gr extends On{InterpolantFactoryMethodLinear(e){return new Ug(this.times,this.values,this.getValueSize(),e)}}gr.prototype.ValueTypeName="quaternion";gr.prototype.DefaultInterpolation=hs;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends On{}_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=fs;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends On{}or.prototype.ValueTypeName="vector";class Tl{constructor(e,t=-1,n,i=lf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Og(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Rg(l);l=El(l,1,u),c=El(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,x){if(p.length!==0){const m=[],d=[];Bc(p,m,d,g),m.length!==0&&x.push(new h(f,m,d))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(const x in p){const m=[],d=[];for(let T=0;T!==f[g].morphTargets.length;++T){const M=f[g];m.push(M.time),d.push(M.morphTarget===x?1:0)}i.push(new ds(".morphTargetInfluence["+x+"]",m,d))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(or,p+".position",f,"pos",i),n(gr,p+".quaternion",f,"rot",i),n(or,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return Gc;case"quaternion":return gr;case"bool":case"boolean":return mr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Og(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kg(s.type);if(s.times===void 0){const t=[],n=[];Bc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ps={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Fg{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Hc=new Fg;class vr{constructor(e){this.manager=e!==void 0?e:Hc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xn={};class zg extends Error{constructor(e,t){super(e),this.response=t}}class Fa extends vr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ps.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:i});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Xn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let x=0;const m=new ReadableStream({start(d){T();function T(){h.read().then(({done:M,value:C})=>{if(M)d.close();else{x+=C.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let U=0,z=u.length;U<z;U++){const I=u[U];I.onProgress&&I.onProgress(L)}d.enqueue(C),T()}})}}});return new Response(m)}else throw new zg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ps.add(e,c);const u=Xn[e];delete Xn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Xn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bg extends vr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ps.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Dr("img");function l(){u(),ps.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Gg extends vr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Oc,o=new Fa(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:$t,a.wrapT=c.wrapT!==void 0?c.wrapT:$t,a.magFilter=c.magFilter!==void 0?c.magFilter:Qt,a.minFilter=c.minFilter!==void 0?c.minFilter:Qt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Mi),c.mipmapCount===1&&(a.minFilter=Qt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class Ma extends vr{constructor(e){super(e)}load(e,t,n,i){const r=new en,a=new Bg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ss extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ca=new Je,Al=new F,Cl=new F;class za{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hg extends za{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vg extends Ss{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ll=new Je,wr=new F,ua=new F;class Wg extends za{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(wr),ua.copy(n.position),ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-wr.x,-wr.y,-wr.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll)}}class Vc extends Ss{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jg extends za{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qg extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new jg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xg extends Ss{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yg{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Wc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pl(){return(typeof performance>"u"?Date:performance).now()}class Kg{constructor(e,t,n=0,i=1/0){this.ray=new La(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ya(e,this,n,t),n.sort(Rl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ya(e[i],this,n,t);return n.sort(Rl),n}}function Rl(s,e){return s.distance-e.distance}function ya(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)ya(i[r],e,t,!0)}}class Dl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);const Zg={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jg=new bs(-1,1,1,-1,0,1),Ba=new dn;Ba.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3));Ba.setAttribute("uv",new At([0,2,0,0,2,0],2));class Qg{constructor(e){this._mesh=new rn(Ba,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $g extends ws{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ac.clone(e.uniforms),this.material=new Zn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Il extends ws{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class e_ extends ws{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class t_{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new We);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $g(Zg),this.clock=new Wc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Il!==void 0&&(a instanceof Il?n=!0:a instanceof e_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new We);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jc extends ws{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const n_=(s,e,t)=>{s.renderer=new Nc({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),s.composer=new t_(s.renderer),s.composer.addPass(new jc(s.scene,Sa(s.camera)))},Nl=(s,e,t)=>{s.renderer&&(e?s.renderer.outputEncoding=ai:s.renderer.outputEncoding=ft,t?s.renderer.toneMapping=Rn:s.renderer.toneMapping=dc)},Ul=(s,e,t)=>{var n,i,r,a,o,l,c,u;!s.renderer||!s.composer||((i=(n=s.renderer).setSize)==null||i.call(n,e.width,e.height),(a=(r=s.renderer).setPixelRatio)==null||a.call(r,t),(l=(o=s.composer).setSize)==null||l.call(o,e.width,e.height),(u=(c=s.composer).setPixelRatio)==null||u.call(c,t))},kl=(s,e,t)=>{s.renderer&&(s.renderer.shadowMap.enabled=e,s.renderer.shadowMap.type=t)},Pn=s=>s.userData,i_=(s,e)=>{s.pointer.update(t=>s.renderer?t.set(e.offsetX/s.renderer.domElement.clientWidth*2-1,-(e.offsetY/s.renderer.domElement.clientHeight)*2+1):t)},qc=(s,e,t,n)=>(s.raycaster.setFromCamera(e,t),s.raycaster.intersectObjects(n,!1)),r_=(s,e)=>s.object.uuid!==e.object.uuid||s.instanceId!==e.instanceId,s_=(s,e,t)=>{let n;const i=s.camera.subscribe(c=>n=c);Pt(i);let r;const a=s.pointer.subscribe(c=>r=c);Pt(a);let o;const l=c=>{var f,p;c.preventDefault();const u=c.type;s.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,i_(s,c);const h=a_(e,r,n);if(u==="pointerdown"&&(o=h?{object:h.object,instanceId:h.instanceId}:null),u==="click"){if(!o_(h,o)){o=null;return}o=null}h&&((p=(f=Pn(h.object)).eventDispatcher)==null||p.call(f,u,{...h,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function a_(s,e,t){if(s.interactiveObjects.size===0||s.raycastableObjects.size===0)return null;const n=qc(s,e,t,Array.from(s.raycastableObjects));return n.length===0||!s.interactiveObjects.has(n[0].object)?null:n[0]}function o_(s,e){return!s||!e?!1:s.object.uuid===e.object.uuid&&s.instanceId===e.instanceId}const l_=(s,e)=>{let t;const n=s.pointerOverCanvas.subscribe(c=>t=c);Pt(n);let i;const r=s.camera.subscribe(c=>i=c);Pt(r);let a;const o=s.pointer.subscribe(c=>a=c);return Pt(o),{raycast:()=>{var h,f,p,g,x,m,d,T;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?qc(e,a,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&r_(e.lastIntersection,u)&&((m=(x=Pn(e.lastIntersection.object)).eventDispatcher)==null||m.call(x,"pointerleave",e.lastIntersection),(T=(d=Pn(u.object)).eventDispatcher)==null||T.call(d,"pointerenter",u)):(g=(p=Pn(u.object)).eventDispatcher)==null||g.call(p,"pointerenter",u):e.lastIntersection&&((f=(h=Pn(e.lastIntersection.object)).eventDispatcher)==null||f.call(h,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},Es=typeof window<"u",c_=s=>{if(!Es)return;let e;const t=()=>{s(),e=requestAnimationFrame(t)};t(),Pt(()=>{e&&cancelAnimationFrame(e)})},u_=(s,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,r)=>r.order?!0:i,!1),n=s.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,r)=>(i.order??0)>(r.order??0)?1:-1).forEach(i=>i.fn(s,n)):e.frameHandlers.forEach(i=>i.fn(s,n))},f_=s=>{s.debugFrameloop&&(s.frame+=1,console.log(`frame: ${s.frame}${Object.keys(s.invalidations).length>0?", requested by ↴":""}`),Object.keys(s.invalidations).length>0&&console.table(s.invalidations),s.invalidations={})},h_=(s,e,t,n)=>{let i=Sa(s.camera);const r=s.camera.subscribe(o=>i=o);Pt(r);const{raycast:a}=l_(s,e);c_(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!i||!s.composer||!s.renderer||(u_(s,t),s.composer.passes.length>1?s.composer.render():s.renderer.render(s.scene,i),f_(t),t.frameInvalidated=!1,t.advance=!1))})},d_=()=>{const s=new Wt(75,0,.1,1e3);return Pn(s).threlteDefaultCamera=!0,s.position.z=5,s.lookAt(0,0,0),s},p_=s=>{const e=s.size.subscribe(t=>{Pn(Sa(s.camera)).threlteDefaultCamera&&s.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),s.invalidate("Default camera: aspect ratio changed"),i})});Pt(e)},m_=(s,e,t,n,i,r,a)=>{const o={audioListeners:new Map,addAudioListener:(d,T)=>{if(T=T??"default",o.audioListeners.has(T)){console.warn(`An AudioListener with the id "${T}" has already been added, aborting.`);return}o.audioListeners.set(T,d)},removeAudioListener:d=>{if(d=d??"default",!o.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}o.audioListeners.delete(d)},getAudioListener:d=>{if(d=d??"default",!o.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}return o.audioListeners.get(d)}},l={debugFrameloop:r,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:gu([n,i],([d,T])=>d||T),pointer:Xt(new We),pointerOverCanvas:Xt(!1),clock:new Wc,camera:Xt(d_()),scene:new Uc,renderer:void 0,composer:void 0,invalidate:d=>{l.frameInvalidated=!0,l.debugFrameloop&&d&&(l.invalidations[d]=l.invalidations[d]?l.invalidations[d]+1:1)},advance:()=>{l.advance=!0}},u={flat:Xt(e),linear:Xt(s),dpr:Xt(t),setCamera:d=>{c.camera.set(d),c.composer&&(c.composer.passes.forEach(T=>{T instanceof jc&&(T.camera=d)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Kg,lastIntersection:null,addRaycastableObject:d=>{u.raycastableObjects.add(d)},removeRaycastableObject:d=>{u.raycastableObjects.delete(d)},addInteractiveObject:d=>{u.interactiveObjects.add(d)},removeInteractiveObject:d=>{u.interactiveObjects.delete(d)},addPass:d=>{c.composer&&(c.composer.addPass(d),c.invalidate("Canvas: adding pass"))},removePass:d=>{c.composer&&(c.composer.removePass(d),c.invalidate("Canvas: removing pass"))}},h={dispose:async(d=!1)=>{await wa(),!(!h.shouldDispose&&!d)&&(h.disposableObjects.forEach((T,M)=>{var C;(T===0||d)&&((C=M==null?void 0:M.dispose)==null||C.call(M),h.disposableObjects.delete(M))}),h.shouldDispose=!1)},collectDisposableObjects:(d,T)=>{const M=T??[];return d&&(d!=null&&d.dispose&&typeof d.dispose=="function"&&d.type!=="Scene"&&M.push(d),Object.entries(d).forEach(([C,L])=>{if(C==="parent"||C==="children"||typeof L!="object")return;const U=L;U!=null&&U.dispose&&h.collectDisposableObjects(U,M)})),M},addDisposableObjects:d=>{d.forEach(T=>{const M=h.disposableObjects.get(T);M?h.disposableObjects.set(T,M+1):h.disposableObjects.set(T,1)})},removeDisposableObjects:d=>{d.length!==0&&(d.forEach(T=>{const M=h.disposableObjects.get(T);M&&M>0&&h.disposableObjects.set(T,M-1)}),h.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Sn("threlte",c),Sn("threlte-root",u),Sn("threlte-render-context",l),Sn("threlte-audio-context",o),Sn("threlte-disposal-context",h),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:o,disposalCtx:h,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>h}};function Xc(s,e){const t=Xt(s);let n=s;const i=t.subscribe(o=>n=o);return Pt(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const ci=()=>Yn("threlte");function g_(s){let e;const t=s[8].default,n=lr(t,s,s[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&128)&&cr(n,t,i,i[7],e?fr(t,i[7],r,null):ur(i[7]),null)},i(i){e||(Le(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}const __=()=>({onChildMount:Yn("threlte-hierarchical-object-on-mount"),onChildDestroy:Yn("threlte-hierarchical-object-on-destroy")}),Yc=()=>Yn("threlte-hierarchical-parent-context");function v_(s,e,t){var d;let n,{$$slots:i={},$$scope:r}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=T=>{o.push(T),t(1,o),l==null||l(T)};let{onChildDestroy:u=void 0}=e;const h=T=>{const M=o.findIndex(C=>C.uuid===T.uuid);M!==-1&&o.splice(M,1),t(1,o),u==null||u(T)},{invalidate:f}=ci(),p=Yc();wn(s,p,T=>t(6,n=T));let{parent:g=n}=e;const x=__();a&&((d=x.onChildMount)==null||d.call(x,a),f("HierarchicalObject: object added"));const m=Xc(a,(T,M)=>{var C,L;M&&((C=x.onChildDestroy)==null||C.call(x,M),f("HierarchicalObject: object added")),T&&((L=x.onChildMount)==null||L.call(x,T),f("HierarchicalObject: object removed"))});return Pt(()=>{var T;a&&((T=x.onChildDestroy)==null||T.call(x,a),f("HierarchicalObject: object removed"))}),Sn("threlte-hierarchical-object-on-mount",c),Sn("threlte-hierarchical-object-on-destroy",h),Sn("threlte-hierarchical-parent-context",m),s.$$set=T=>{"object"in T&&t(3,a=T.object),"children"in T&&t(1,o=T.children),"onChildMount"in T&&t(4,l=T.onChildMount),"onChildDestroy"in T&&t(5,u=T.onChildDestroy),"parent"in T&&t(2,g=T.parent),"$$scope"in T&&t(7,r=T.$$scope)},s.$$.update=()=>{s.$$.dirty&64&&t(2,g=n),s.$$.dirty&8&&m.set(a)},[p,o,g,a,l,u,n,r,i]}class x_ extends an{constructor(e){super(),on(this,e,v_,g_,ln,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function b_(s){let e;const t=s[1].default,n=lr(t,s,s[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&cr(n,t,i,i[4],e?fr(t,i[4],r,null):ur(i[4]),null)},i(i){e||(Le(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function M_(s){let e,t;return e=new x_({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[b_]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function y_(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const a=l=>r.add(l),o=l=>r.remove(l);return s.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[r,n,a,o,i]}class Kc extends an{constructor(e){super(),on(this,e,y_,M_,ln,{object:0})}}const S_=()=>{const s=Xt({width:0,height:0});let e={width:0,height:0};const t=s.subscribe(a=>e=a);Pt(t);let n;const i=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&s.set({width:o,height:l})},r=a=>{n=a,i(),window.addEventListener("resize",i)};return Es?(Pt(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:r,parentSize:s}):{parentSize:s,parentSizeAction:r}};function Ol(s){let e,t;return e=new Kc({props:{object:s[0].scene,$$slots:{default:[w_]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i[1]&4&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function w_(s){let e;const t=s[29].default,n=lr(t,s,s[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&4)&&cr(n,t,i,i[33],e?fr(t,i[33],r,null):ur(i[33]),null)},i(i){e||(Le(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function E_(s){let e,t,n,i,r=s[2]&&Ol(s);return{c(){e=rc("canvas"),r&&r.c(),this.h()},l(a){e=sc(a,"CANVAS",{class:!0});var o=ac(e);r&&r.l(o),o.forEach(Ct),this.h()},h(){oc(e,"class","svelte-o3oskp")},m(a,o){Rt(a,e,o),r&&r.m(e,null),s[30](e),t=!0,n||(i=[cu(s[3].call(null,e)),fi(e,"click",s[9]),fi(e,"contextmenu",s[10]),fi(e,"pointerup",s[13]),fi(e,"pointerdown",s[11]),fi(e,"pointermove",s[12]),fi(e,"pointerenter",s[31]),fi(e,"pointerleave",s[32])],n=!0)},p(a,o){a[2]?r?(r.p(a,o),o[0]&4&&Le(r,1)):(r=Ol(a),r.c(),Le(r,1),r.m(e,null)):r&&(Dn(),Oe(r,1,1,()=>{r=null}),In())},i(a){t||(Le(r),t=!0)},o(a){Oe(r),t=!1},d(a){a&&Ct(e),r&&r.d(),s[30](null),n=!1,uu(i)}}}const Fl=new Set;function T_(s,e,t){let n,i,r,a,{$$slots:o={},$$scope:l}=e,{dpr:c=Es?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:h=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:g=!0}=e,{shadowMapType:x=uc}=e,{size:m=void 0}=e,{rendererParameters:d=void 0}=e,T,M=!1;const C=Xt(m),{parentSize:L,parentSizeAction:U}=S_(),z=m_(h,u,c,C,L,p,f),{getCtx:I,renderCtx:y,disposalCtx:E}=z,{ctx:X,rootCtx:$,audioCtx:B}=z;p_(X),Fl.add(X.invalidate),Pt(()=>{Fl.delete(X.invalidate)});const{size:V,scene:Y}=X;wn(s,V,D=>t(26,i=D));const{flat:H,linear:ee,dpr:Z}=$;wn(s,H,D=>t(27,r=D)),wn(s,ee,D=>t(28,a=D)),wn(s,Z,D=>t(25,n=D)),Sn("threlte-parent",Xt(Y)),lc(()=>{T&&(n_(X,T,d),Nl(X,a,r),Ul(X,i,n),kl(X,g,x),t(2,M=!0))}),h_(X,$,y,E);const{onClick:ne,onContextMenu:le,onPointerDown:K,onPointerMove:ue,onPointerUp:G}=s_(X,$,y);Pt(()=>{E.dispose(!0)});function j(D){fu[D?"unshift":"push"](()=>{T=D,t(1,T)})}const te=()=>I().pointerOverCanvas.set(!0),k=()=>I().pointerOverCanvas.set(!1);return s.$$set=D=>{"dpr"in D&&t(14,c=D.dpr),"flat"in D&&t(15,u=D.flat),"linear"in D&&t(16,h=D.linear),"frameloop"in D&&t(17,f=D.frameloop),"debugFrameloop"in D&&t(18,p=D.debugFrameloop),"shadows"in D&&t(19,g=D.shadows),"shadowMapType"in D&&t(20,x=D.shadowMapType),"size"in D&&t(21,m=D.size),"rendererParameters"in D&&t(22,d=D.rendererParameters),"$$scope"in D&&t(33,l=D.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&2097152&&C.set(m),s.$$.dirty[0]&65536&&Ds(ee,a=h,a),s.$$.dirty[0]&32768&&Ds(H,r=u,r),s.$$.dirty[0]&16384&&Ds(Z,n=c,n),s.$$.dirty[0]&402653184&&Nl(I(),a,r),s.$$.dirty[0]&100663296&&Ul(I(),i,n),s.$$.dirty[0]&1572864&&kl(I(),g,x)},[X,T,M,U,I,V,H,ee,Z,ne,le,K,ue,G,c,u,h,f,p,g,x,m,d,$,B,n,i,r,a,o,j,te,k,l]}class A_ extends an{constructor(e){super(),on(this,e,T_,E_,ln,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const C_=()=>Yn("threlte-root"),L_=()=>Yn("threlte-disposal-context");function P_(s){let e;const t=s[9].default,n=lr(t,s,s[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&cr(n,t,i,i[8],e?fr(t,i[8],r,null):ur(i[8]),null)},i(i){e||(Le(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}const zl="threlte-disposable-object-context";function R_(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=L_();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const p=Yn(zl);wn(s,p,m=>t(7,i=m));const g=Xt(f??i??!0);wn(s,g,m=>t(6,n=m)),Sn(zl,g);let x=n?o(u):[];return l(x),Pt(()=>{c(x)}),s.$$set=m=>{"object"in m&&t(2,u=m.object),"dispose"in m&&t(3,f=m.dispose),"$$scope"in m&&t(8,a=m.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&g.set(f??i??!0),s.$$.dirty&116&&u!==h&&(c(x),t(5,x=n?o(u):[]),l(x),t(4,h=u))},[p,g,u,f,h,x,n,i,a,r]}class Zc extends an{constructor(e){super(),on(this,e,R_,P_,ln,{object:2,dispose:3})}}const Jc=(s,e)=>{if(!Es)return{start:()=>{},stop:()=>{},started:_u(!1)};const t=Yn("threlte-render-context"),n={fn:s,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Xt(!1),r=()=>{t.frameHandlers.delete(n),i.set(!1)},a=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&a(),Pt(()=>{r()}),{start:a,stop:r,started:{subscribe:i.subscribe}}},D_=()=>{const s=Xt(!1);return(async()=>{await wa(),s.set(!0)})(),s};function I_(s,e,t){let n,i,{object:r}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new F,h=Nr(),{invalidate:f}=ci(),p=D_();wn(s,p,M=>t(8,i=M));const g=async()=>{i||await wa(),h("transform")},x=async()=>{f("TransformableObject: transformed"),await g()};Pn(r).onTransform=x;const{start:m,stop:d}=Jc(async()=>{c&&!l&&c instanceof yt&&(c.getWorldPosition(u),r.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),T=Xc(r);return wn(s,T,M=>t(7,n=M)),s.$$set=M=>{"object"in M&&t(2,r=M.object),"position"in M&&t(3,a=M.position),"scale"in M&&t(4,o=M.scale),"rotation"in M&&t(5,l=M.rotation),"lookAt"in M&&t(6,c=M.lookAt)},s.$$.update=()=>{s.$$.dirty&4&&T.set(r),s.$$.dirty&232&&(a&&(n.position.set(a.x??0,a.y??0,a.z??0),x()),c&&!l&&(c instanceof yt?m():(d(),n.lookAt(c.x??0,c.y??0,c.z??0),x())),c||d()),s.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set(o.x??1,o.y??1,o.z??1),x()),s.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),x())},[p,T,r,a,o,l,c,n]}class N_ extends an{constructor(e){super(),on(this,e,I_,null,ln,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const Bl=[],Ga=(s,e)=>{const t=Bl.find(i=>i instanceof s);if(t)return t;const n=e();return Bl.push(n),n},Gl={type:"change"},fa={type:"start"},Hl={type:"end"};let U_=class extends Si{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",lt),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gl),n.update(),r=i.NONE},this.update=function(){const N=new F,ce=new kn().setFromUnitVectors(e.up,new F(0,1,0)),Q=ce.clone().invert(),xe=new F,Ee=new kn,Pe=2*Math.PI;return function(){const Ce=n.object.position;N.copy(Ce).sub(n.target),N.applyQuaternion(ce),o.setFromVector3(N),n.autoRotate&&r===i.NONE&&y(z()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let He=n.minAzimuthAngle,Xe=n.maxAzimuthAngle;return isFinite(He)&&isFinite(Xe)&&(He<-Math.PI?He+=Pe:He>Math.PI&&(He-=Pe),Xe<-Math.PI?Xe+=Pe:Xe>Math.PI&&(Xe-=Pe),He<=Xe?o.theta=Math.max(He,Math.min(Xe,o.theta)):o.theta=o.theta>(He+Xe)/2?Math.max(He,o.theta):Math.min(Xe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),N.setFromSpherical(o),N.applyQuaternion(Q),Ce.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||xe.distanceToSquared(n.object.position)>a||8*(1-Ee.dot(n.object.quaternion))>a?(n.dispatchEvent(Gl),xe.copy(n.object.position),Ee.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",je),n.domElement.removeEventListener("pointercancel",pt),n.domElement.removeEventListener("wheel",nt),n.domElement.removeEventListener("pointermove",bt),n.domElement.removeEventListener("pointerup",pt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",lt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Dl,l=new Dl;let c=1;const u=new F;let h=!1;const f=new We,p=new We,g=new We,x=new We,m=new We,d=new We,T=new We,M=new We,C=new We,L=[],U={};function z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function y(N){l.theta-=N}function E(N){l.phi-=N}const X=function(){const N=new F;return function(Q,xe){N.setFromMatrixColumn(xe,0),N.multiplyScalar(-Q),u.add(N)}}(),$=function(){const N=new F;return function(Q,xe){n.screenSpacePanning===!0?N.setFromMatrixColumn(xe,1):(N.setFromMatrixColumn(xe,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(Q),u.add(N)}}(),B=function(){const N=new F;return function(Q,xe){const Ee=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;N.copy(Pe).sub(n.target);let ye=N.length();ye*=Math.tan(n.object.fov/2*Math.PI/180),X(2*Q*ye/Ee.clientHeight,n.object.matrix),$(2*xe*ye/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(Q*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),$(xe*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(N){n.object.isPerspectiveCamera?c/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(N){n.object.isPerspectiveCamera?c*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(N){f.set(N.clientX,N.clientY)}function ee(N){T.set(N.clientX,N.clientY)}function Z(N){x.set(N.clientX,N.clientY)}function ne(N){p.set(N.clientX,N.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ce=n.domElement;y(2*Math.PI*g.x/ce.clientHeight),E(2*Math.PI*g.y/ce.clientHeight),f.copy(p),n.update()}function le(N){M.set(N.clientX,N.clientY),C.subVectors(M,T),C.y>0?V(I()):C.y<0&&Y(I()),T.copy(M),n.update()}function K(N){m.set(N.clientX,N.clientY),d.subVectors(m,x).multiplyScalar(n.panSpeed),B(d.x,d.y),x.copy(m),n.update()}function ue(N){N.deltaY<0?Y(I()):N.deltaY>0&&V(I()),n.update()}function G(N){let ce=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ce=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ce=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ce=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ce=!0;break}ce&&(N.preventDefault(),n.update())}function j(){if(L.length===1)f.set(L[0].pageX,L[0].pageY);else{const N=.5*(L[0].pageX+L[1].pageX),ce=.5*(L[0].pageY+L[1].pageY);f.set(N,ce)}}function te(){if(L.length===1)x.set(L[0].pageX,L[0].pageY);else{const N=.5*(L[0].pageX+L[1].pageX),ce=.5*(L[0].pageY+L[1].pageY);x.set(N,ce)}}function k(){const N=L[0].pageX-L[1].pageX,ce=L[0].pageY-L[1].pageY,Q=Math.sqrt(N*N+ce*ce);T.set(0,Q)}function D(){n.enableZoom&&k(),n.enablePan&&te()}function Me(){n.enableZoom&&k(),n.enableRotate&&j()}function Ae(N){if(L.length==1)p.set(N.pageX,N.pageY);else{const Q=_e(N),xe=.5*(N.pageX+Q.x),Ee=.5*(N.pageY+Q.y);p.set(xe,Ee)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const ce=n.domElement;y(2*Math.PI*g.x/ce.clientHeight),E(2*Math.PI*g.y/ce.clientHeight),f.copy(p)}function me(N){if(L.length===1)m.set(N.pageX,N.pageY);else{const ce=_e(N),Q=.5*(N.pageX+ce.x),xe=.5*(N.pageY+ce.y);m.set(Q,xe)}d.subVectors(m,x).multiplyScalar(n.panSpeed),B(d.x,d.y),x.copy(m)}function Fe(N){const ce=_e(N),Q=N.pageX-ce.x,xe=N.pageY-ce.y,Ee=Math.sqrt(Q*Q+xe*xe);M.set(0,Ee),C.set(0,Math.pow(M.y/T.y,n.zoomSpeed)),V(C.y),T.copy(M)}function it(N){n.enableZoom&&Fe(N),n.enablePan&&me(N)}function Ie(N){n.enableZoom&&Fe(N),n.enableRotate&&Ae(N)}function je(N){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",bt),n.domElement.addEventListener("pointerup",pt)),ie(N),N.pointerType==="touch"?Ft(N):St(N))}function bt(N){n.enabled!==!1&&(N.pointerType==="touch"?R(N):wt(N))}function pt(N){de(N),L.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",bt),n.domElement.removeEventListener("pointerup",pt)),n.dispatchEvent(Hl),r=i.NONE}function St(N){let ce;switch(N.button){case 0:ce=n.mouseButtons.LEFT;break;case 1:ce=n.mouseButtons.MIDDLE;break;case 2:ce=n.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case Ri.DOLLY:if(n.enableZoom===!1)return;ee(N),r=i.DOLLY;break;case Ri.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;Z(N),r=i.PAN}else{if(n.enableRotate===!1)return;H(N),r=i.ROTATE}break;case Ri.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;H(N),r=i.ROTATE}else{if(n.enablePan===!1)return;Z(N),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(fa)}function wt(N){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ne(N);break;case i.DOLLY:if(n.enableZoom===!1)return;le(N);break;case i.PAN:if(n.enablePan===!1)return;K(N);break}}function nt(N){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(N.preventDefault(),n.dispatchEvent(fa),ue(N),n.dispatchEvent(Hl))}function lt(N){n.enabled===!1||n.enablePan===!1||G(N)}function Ft(N){switch(pe(N),L.length){case 1:switch(n.touches.ONE){case Di.ROTATE:if(n.enableRotate===!1)return;j(),r=i.TOUCH_ROTATE;break;case Di.PAN:if(n.enablePan===!1)return;te(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(),r=i.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(fa)}function R(N){switch(pe(N),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;me(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(N),n.update();break;default:r=i.NONE}}function A(N){n.enabled!==!1&&N.preventDefault()}function ie(N){L.push(N)}function de(N){delete U[N.pointerId];for(let ce=0;ce<L.length;ce++)if(L[ce].pointerId==N.pointerId){L.splice(ce,1);return}}function pe(N){let ce=U[N.pointerId];ce===void 0&&(ce=new We,U[N.pointerId]=ce),ce.set(N.pageX,N.pageY)}function _e(N){const ce=N.pointerId===L[0].pointerId?L[1]:L[0];return U[ce.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",je),n.domElement.addEventListener("pointercancel",pt),n.domElement.addEventListener("wheel",nt,{passive:!1}),this.update()}};function k_(s){let e,t,n,i;return e=new Zc({props:{dispose:s[2],object:s[0]}}),n=new N_({props:{object:s[4],position:s[1]}}),n.$on("transform",s[5]),{c(){mt(e.$$.fragment),t=Nn(),mt(n.$$.fragment)},l(r){gt(e.$$.fragment,r),t=Un(r),gt(n.$$.fragment,r)},m(r,a){_t(e,r,a),Rt(r,t,a),_t(n,r,a),i=!0},p(r,a){const o={};a[0]&4&&(o.dispose=r[2]),a[0]&1&&(o.object=r[0]),e.$set(o);const l={};a[0]&2&&(l.position=r[1]),n.$set(l)},i(r){i||(Le(e.$$.fragment,r),Le(n.$$.fragment,r),i=!0)},o(r){Oe(e.$$.fragment,r),Oe(n.$$.fragment,r),i=!1},d(r){vt(e,r),r&&Ct(t),vt(n,r)}}}function O_(s,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:a=void 0}=e,{enableDamping:o=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:h=void 0}=e,{keyPanSpeed:f=void 0}=e,{keys:p=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:x=void 0}=e,{maxPolarAngle:m=void 0}=e,{maxZoom:d=void 0}=e,{minAzimuthAngle:T=void 0}=e,{minDistance:M=void 0}=e,{minPolarAngle:C=void 0}=e,{minZoom:L=void 0}=e,{mouseButtons:U=void 0}=e,{panSpeed:z=void 0}=e,{rotateSpeed:I=void 0}=e,{screenSpacePanning:y=void 0}=e,{touches:E=void 0}=e,{zoomSpeed:X=void 0}=e,{target:$=void 0}=e,{dispose:B=void 0}=e;const V=Yc();wn(s,V,k=>t(30,n=k));const{renderer:Y,invalidate:H}=ci();if(!Y)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Ra))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const ee=Nr(),Z=()=>{H("Orbitcontrols: change event"),ee("change")},ne=()=>ee("start"),le=()=>ee("end"),K=new U_(n,Y.domElement);Pn(n).orbitControls=K,K.addEventListener("change",Z),K.addEventListener("start",ne),K.addEventListener("end",le),Pt(()=>{n&&delete Pn(n).orbitControls,K.removeEventListener("change",Z),K.removeEventListener("start",ne),K.removeEventListener("end",le)});const{start:ue,stop:G}=Jc(()=>K.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),j=new yt,te=()=>{t(0,K.target=j.position,K),K.update(),H("OrbitControls: target changed")};return s.$$set=k=>{"autoRotate"in k&&t(6,i=k.autoRotate),"autoRotateSpeed"in k&&t(7,r=k.autoRotateSpeed),"dampingFactor"in k&&t(8,a=k.dampingFactor),"enableDamping"in k&&t(9,o=k.enableDamping),"enabled"in k&&t(10,l=k.enabled),"enablePan"in k&&t(11,c=k.enablePan),"enableRotate"in k&&t(12,u=k.enableRotate),"enableZoom"in k&&t(13,h=k.enableZoom),"keyPanSpeed"in k&&t(14,f=k.keyPanSpeed),"keys"in k&&t(15,p=k.keys),"maxAzimuthAngle"in k&&t(16,g=k.maxAzimuthAngle),"maxDistance"in k&&t(17,x=k.maxDistance),"maxPolarAngle"in k&&t(18,m=k.maxPolarAngle),"maxZoom"in k&&t(19,d=k.maxZoom),"minAzimuthAngle"in k&&t(20,T=k.minAzimuthAngle),"minDistance"in k&&t(21,M=k.minDistance),"minPolarAngle"in k&&t(22,C=k.minPolarAngle),"minZoom"in k&&t(23,L=k.minZoom),"mouseButtons"in k&&t(24,U=k.mouseButtons),"panSpeed"in k&&t(25,z=k.panSpeed),"rotateSpeed"in k&&t(26,I=k.rotateSpeed),"screenSpacePanning"in k&&t(27,y=k.screenSpacePanning),"touches"in k&&t(28,E=k.touches),"zoomSpeed"in k&&t(29,X=k.zoomSpeed),"target"in k&&t(1,$=k.target),"dispose"in k&&t(2,B=k.dispose)},s.$$.update=()=>{s.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,K.autoRotate=i,K),r!==void 0&&t(0,K.autoRotateSpeed=r,K),a!==void 0&&t(0,K.dampingFactor=a,K),o!==void 0&&t(0,K.enableDamping=o,K),l!==void 0&&t(0,K.enabled=l,K),c!==void 0&&t(0,K.enablePan=c,K),u!==void 0&&t(0,K.enableRotate=u,K),h!==void 0&&t(0,K.enableZoom=h,K),f!==void 0&&t(0,K.keyPanSpeed=f,K),p!==void 0&&t(0,K.keys=p,K),g!==void 0&&t(0,K.maxAzimuthAngle=g,K),x!==void 0&&t(0,K.maxDistance=x,K),m!==void 0&&t(0,K.maxPolarAngle=m,K),d!==void 0&&t(0,K.maxZoom=d,K),T!==void 0&&t(0,K.minAzimuthAngle=T,K),M!==void 0&&t(0,K.minDistance=M,K),C!==void 0&&t(0,K.minPolarAngle=C,K),L!==void 0&&t(0,K.minZoom=L,K),U!==void 0&&t(0,K.mouseButtons=U,K),z!==void 0&&t(0,K.panSpeed=z,K),I!==void 0&&t(0,K.rotateSpeed=I,K),y!==void 0&&t(0,K.screenSpacePanning=y,K),E!==void 0&&t(0,K.touches=E,K),X!==void 0&&t(0,K.zoomSpeed=X,K),K.update(),H("OrbitControls: props changed")),s.$$.dirty[0]&576&&(i||o?ue():G())},[K,$,B,V,j,te,i,r,a,o,l,c,u,h,f,p,g,x,m,d,T,M,C,L,U,z,I,y,E,X]}class F_ extends an{constructor(e){super(),on(this,e,O_,k_,ln,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const Qc=new yt;Qc.scale.set(0,0,0);Qc.matrix;new Je().fromArray(new Array(16).fill(0));new Qe(16777215);const $c=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},ha=Symbol("initialValueBeforeAttach"),z_=()=>{const{invalidate:s}=ci();let e=!1,t=ha,n,i,r;const a=(l,c,u)=>{if(o(),!u){const h=l;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(c,l);else{const{target:h,key:f}=$c(c,u);t=h[f],h[f]=l,i=h,r=f}e=!0,s()}},o=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==ha&&(i[r]=t,t=ha,i=void 0,r=void 0),e=!1,s())};return Pt(()=>{o()}),{update:a}},B_=s=>s&&s.isCamera,eu=s=>s&&s.isOrthographicCamera,tu=s=>s&&s.isPerspectiveCamera,G_=s=>tu(s)||eu(s),H_=()=>{const{invalidate:s,size:e}=ci(),{setCamera:t}=C_();let n,i;Pt(()=>{i==null||i()});const r=l=>{n&&(eu(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):tu(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(l,c)=>{if(i==null||i(),c||!G_(l)){n=void 0;return}n=l,i=e.subscribe(r)},makeDefaultCamera:(l,c)=>{!B_(l)||!c||(t(l),s())}}},Vl=s=>!!(s!=null&&s.addEventListener),V_=()=>{const s=Nr(),e=hu(),t=f=>{f!=null&&f.type&&s(f.type,f)},n=(f,p)=>{Vl(f)&&p.forEach(g=>{f.removeEventListener(g,t)})},i=(f,p)=>{Vl(f)&&p.forEach(g=>{f.addEventListener(g,t)})};let r=[],a;const o=Xt([]),l=o.subscribe(f=>{n(a,r),i(a,f),r=f});Pt(l);const c=Xt(),u=c.subscribe(f=>{n(a,r),i(f,r),a=f});return Pt(u),Pt(()=>{n(a,r)}),lc(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:f=>{c.set(f)}}},W_=["$$scope","$$slots","type","args","attach","instance"],j_=["fov","aspect","near","far","left","right","top","bottom","zoom"],q_=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,X_=()=>{const{invalidate:s}=ci(),e=new Map,t=(i,r,a,o)=>{var u,h;if(q_(a)){const f=e.get(r);if(f&&f.instance===i&&f.value===a)return;e.set(r,{instance:i,value:a})}const{key:l,target:c}=$c(i,r);if(!Array.isArray(a)&&typeof a=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(a);else if(typeof((h=c[l])==null?void 0:h.set)=="function")Array.isArray(a)?c[l].set(...a):c[l].set(a);else{if(c[l]=a,o.manualCamera)return;j_.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,r,a)=>{for(const o in r)W_.includes(o)||t(i,o,r[o],a),s()}}},Y_=s=>({ref:s&1}),Wl=s=>({ref:s[0]}),K_=s=>({ref:s&1}),jl=s=>({ref:s[0]});function ql(s){let e,t;return e=new Zc({props:{object:s[0],dispose:s[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.object=n[0]),i&2&&(r.dispose=n[1]),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function Z_(s){let e;const t=s[12].default,n=lr(t,s,s[13],Wl);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&8193)&&cr(n,t,i,i[13],e?fr(t,i[13],r,Y_):ur(i[13]),Wl)},i(i){e||(Le(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function J_(s){let e,t;return e=new Kc({props:{object:s[0],$$slots:{default:[Q_]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.object=n[0]),i&8193&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function Q_(s){let e;const t=s[12].default,n=lr(t,s,s[13],jl);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&8193)&&cr(n,t,i,i[13],e?fr(t,i[13],r,K_):ur(i[13]),jl)},i(i){e||(Le(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function $_(s){let e=s[4](s[0]),t,n,i,r,a,o,l=e&&ql(s);const c=[J_,Z_],u=[];function h(f,p){return p&1&&(n=null),n==null&&(n=!!f[3](f[0])),n?0:1}return i=h(s,-1),r=u[i]=c[i](s),{c(){l&&l.c(),t=Nn(),r.c(),a=Ht()},l(f){l&&l.l(f),t=Un(f),r.l(f),a=Ht()},m(f,p){l&&l.m(f,p),Rt(f,t,p),u[i].m(f,p),Rt(f,a,p),o=!0},p(f,[p]){p&1&&(e=f[4](f[0])),e?l?(l.p(f,p),p&1&&Le(l,1)):(l=ql(f),l.c(),Le(l,1),l.m(t.parentNode,t)):l&&(Dn(),Oe(l,1,1,()=>{l=null}),In());let g=i;i=h(f,p),i===g?u[i].p(f,p):(Dn(),Oe(u[g],1,1,()=>{u[g]=null}),In(),r=u[i],r?r.p(f,p):(r=u[i]=c[i](f),r.c()),Le(r,1),r.m(a.parentNode,a))},i(f){o||(Le(l),Le(r),o=!0)},o(f){Oe(l),Oe(r),o=!1},d(f){l&&l.d(f),f&&Ct(t),u[i].d(f),f&&Ct(a)}}}function e0(s,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=Xa(e,n),r,{$$slots:a={},$$scope:o}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:p=void 0}=e;const g=Yn("threlte-hierarchical-parent-context");wn(s,g,E=>t(11,r=E));const x=E=>typeof E=="function"&&/^\s*class\s+/.test(E.toString()),m=E=>Array.isArray(E);let{ref:d=x(l)&&m(c)?new l(...c):x(l)?new l:l}=e,T=!1;const M=Xt(d);Sn("threlte-hierarchical-parent-context",M);const C=X_(),L=H_(),U=z_(),z=V_(),I=E=>!!E.isObject3D,y=E=>E.dispose!==void 0;return s.$$set=E=>{e=Ya(Ya({},e),du(E)),t(21,i=Xa(e,n)),"type"in E&&t(5,l=E.type),"args"in E&&t(6,c=E.args),"attach"in E&&t(7,u=E.attach),"manual"in E&&t(8,h=E.manual),"makeDefault"in E&&t(9,f=E.makeDefault),"dispose"in E&&t(1,p=E.dispose),"ref"in E&&t(0,d=E.ref),"$$scope"in E&&t(13,o=E.$$scope)},s.$$.update=()=>{s.$$.dirty&1120&&(T?t(0,d=x(l)&&m(c)?new l(...c):x(l)?new l:l):t(10,T=!0)),s.$$.dirty&1&&M.set(d),C.updateProps(d,i,{manualCamera:h}),s.$$.dirty&257&&L.update(d,h),s.$$.dirty&513&&L.makeDefaultCamera(d,f),s.$$.dirty&2177&&U.update(d,r,u),s.$$.dirty&1&&z.updateRef(d)},[d,p,g,I,y,l,c,u,h,f,T,r,a,o]}class _n extends an{constructor(e){super(),on(this,e,e0,$_,ln,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function t0(s){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Xl extends an{constructor(e){super(),on(this,e,t0,null,ln,{})}}new Proxy(Xl,{get(s,e){return s[e]||Xl}});Ga(Ma,()=>new Ma(Hc));function Zi(s,e="xyz"){var t;if(s.hasAttribute(e)){const n=(t=s.getAttribute(e))==null?void 0:t.split(" ");if(n){const i=[];for(const r of n)i.push(parseFloat(r));return i}}}function n0(s){return s?new Qe(s[0],s[1],s[2]):new Qe("white")}class i0{constructor(e,t=""){ui(this,"filename");ui(this,"name");ui(this,"colors",{});ui(this,"links",{});ui(this,"joints",[]);ui(this,"prefix","");this.filename=e,this.prefix=t}async load(){return fetch(this.filename).then(e=>e.text()).then(e=>new window.DOMParser().parseFromString(e,"text/xml")).then(e=>this.parseRobotXMLNode(e.documentElement))}parseRobotXMLNode(e){const t=e.nodeName;if(t!=="robot")throw new Error(`Invalid URDF: no root node ${t}`);return this.name=e.getAttribute("name"),this.parseColorsFromRobot(e),this.parseLinks(e),this.parseJoints(e),{name:this.name,links:this.links,joints:this.joints}}parseColorsFromRobot(e){const t=e.getElementsByTagName("material");for(let n=0;n<t.length;n++){const i=t[n],r=this.colorFromMaterial(i);r&&(this.colors[r.name]=r.rgba)}}colorFromMaterial(e){if(!e.hasAttribute("name")){console.warn("Found material-tag with name without name inside robot tag!");return}const t=e.getAttribute("name"),n=e.getElementsByTagName("color");if(n.length===0)return;const i=n[0];if(!i.hasAttribute("rgba")){console.warn(`Color tag ${t} does not have expected "rgba" attribute!`);return}return{name:t,rgba:Zi(i,"rgba")}}parseLinks(e){const t=e.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n],r=i.getElementsByTagName("visual"),a={visual:[]};i.hasAttribute("name")&&(a.name=i.getAttribute("name"),this.links[a.name]=a);for(let o=0;o<r.length;o++)a.visual.push(this.parseVisual(r[o]))}}parseVisual(e){let t={};for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"geometry":this.parseGeometry(i,t);break;case"origin":let r=Zi(i);r&&(t.origin_xyz=r);let a=Zi(i,"rpy");a&&(t.origin_rpy=a);break;case"material":const o=i.getElementsByTagName("color");if(o.length>0&&o[0].hasAttribute("rgba"))t.color_rgba=Zi(o[0],"rgba");else if(i.hasAttribute("name")){let l=i.getAttribute("name");t.color_rgba=this.colors[l]}}}return t}parseGeometry(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"mesh":let r=[1,1,1],a=i.getAttribute("scale");if(a){const h=a.split(" ");for(const f in h)r[f]=parseFloat(h[f])}let o=i.getAttribute("filename");o=o.replace("package:/",this.prefix);let l="stl";switch(o.substring(o.length-3)){case"fbx":l="fbx";break;case"obj":l="obj";break;case"stl":l="stl";break;case"dae":l="dae";break;default:throw new Error("Unknown type "+o)}t.geometry={filename:o,type:l,scale:r},t.type="mesh";return;case"cylinder":const c={};i.hasAttribute("length")&&(c.length=parseFloat(i.getAttribute("length"))),i.hasAttribute("radius")&&(c.radius=parseFloat(i.getAttribute("radius"))),t.geometry=c,t.type="cylinder";return;case"box":const u={size:[1,1,1]};if(i.hasAttribute("size")){const f=i.getAttribute("size").split(" ");for(const p in f)u.size[p]=parseFloat(f[p])}t.geometry=u;return}}}parseJoints(e){const t=e.getElementsByTagName("joint");for(let n=0;n<t.length;n++){const i=t[n],r=i.getElementsByTagName("origin");let a=[0,0,0],o=[0,0,0];if(r.length===1){let f=Zi(r[0]);f&&(o=f);let p=Zi(r[0],"rpy");p&&(a=p)}let l;const c=i.getElementsByTagName("parent");if(c.length===1){const f=c[0].getAttribute("link");f&&this.links[f]?l=this.links[f]:l={name:f,visual:[]}}let u;const h=i.getElementsByTagName("child");if(h.length===1){const f=h[0].getAttribute("link");f&&this.links[f]?u=this.links[f]:u={name:f,visual:[]}}if(u&&l){const f={name:i.getAttribute("name")||void 0,origin_rpy:a,origin_xyz:o,parent:l,child:u};this.joints.push(f)}}}getRootJoints(){const e=[];for(const t of this.joints){let n=!0;for(const i of this.joints)if(t.parent.name===i.child.name){n=!1;break}n&&e.push(t)}return console.log(e),e}getChildJoints(e){const t=[];if(!this.joints)return[];for(const n of this.joints)n.parent===e&&t.push(n);return t}}class Yl extends Gg{constructor(e){super(e)}parse(e){function t(H){switch(H.image_type){case f:case x:(H.colormap_length>256||H.colormap_size!==24||H.colormap_type!==1)&&console.error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case d:H.colormap_type&&console.error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:console.error("THREE.TGALoader: No data.");default:console.error('THREE.TGALoader: Invalid type "%s".',H.image_type)}(H.width<=0||H.height<=0)&&console.error("THREE.TGALoader: Invalid image size."),H.pixel_size!==8&&H.pixel_size!==16&&H.pixel_size!==24&&H.pixel_size!==32&&console.error('THREE.TGALoader: Invalid pixel size "%s".',H.pixel_size)}function n(H,ee,Z,ne,le){let K,ue;const G=Z.pixel_size>>3,j=Z.width*Z.height*G;if(ee&&(ue=le.subarray(ne,ne+=Z.colormap_length*(Z.colormap_size>>3))),H){K=new Uint8Array(j);let te,k,D,Me=0;const Ae=new Uint8Array(G);for(;Me<j;)if(te=le[ne++],k=(te&127)+1,te&128){for(D=0;D<G;++D)Ae[D]=le[ne++];for(D=0;D<k;++D)K.set(Ae,Me+D*G);Me+=G*k}else{for(k*=G,D=0;D<k;++D)K[Me+D]=le[ne++];Me+=k}}else K=le.subarray(ne,ne+=ee?Z.width*Z.height:j);return{pixel_data:K,palettes:ue}}function i(H,ee,Z,ne,le,K,ue,G,j){const te=j;let k,D=0,Me,Ae;const me=E.width;for(Ae=ee;Ae!==ne;Ae+=Z)for(Me=le;Me!==ue;Me+=K,D++)k=G[D],H[(Me+me*Ae)*4+3]=255,H[(Me+me*Ae)*4+2]=te[k*3+0],H[(Me+me*Ae)*4+1]=te[k*3+1],H[(Me+me*Ae)*4+0]=te[k*3+2];return H}function r(H,ee,Z,ne,le,K,ue,G){let j,te=0,k,D;const Me=E.width;for(D=ee;D!==ne;D+=Z)for(k=le;k!==ue;k+=K,te+=2)j=G[te+0]+(G[te+1]<<8),H[(k+Me*D)*4+0]=(j&31744)>>7,H[(k+Me*D)*4+1]=(j&992)>>2,H[(k+Me*D)*4+2]=(j&31)<<3,H[(k+Me*D)*4+3]=j&32768?0:255;return H}function a(H,ee,Z,ne,le,K,ue,G){let j=0,te,k;const D=E.width;for(k=ee;k!==ne;k+=Z)for(te=le;te!==ue;te+=K,j+=3)H[(te+D*k)*4+3]=255,H[(te+D*k)*4+2]=G[j+0],H[(te+D*k)*4+1]=G[j+1],H[(te+D*k)*4+0]=G[j+2];return H}function o(H,ee,Z,ne,le,K,ue,G){let j=0,te,k;const D=E.width;for(k=ee;k!==ne;k+=Z)for(te=le;te!==ue;te+=K,j+=4)H[(te+D*k)*4+2]=G[j+0],H[(te+D*k)*4+1]=G[j+1],H[(te+D*k)*4+0]=G[j+2],H[(te+D*k)*4+3]=G[j+3];return H}function l(H,ee,Z,ne,le,K,ue,G){let j,te=0,k,D;const Me=E.width;for(D=ee;D!==ne;D+=Z)for(k=le;k!==ue;k+=K,te++)j=G[te],H[(k+Me*D)*4+0]=j,H[(k+Me*D)*4+1]=j,H[(k+Me*D)*4+2]=j,H[(k+Me*D)*4+3]=255;return H}function c(H,ee,Z,ne,le,K,ue,G){let j=0,te,k;const D=E.width;for(k=ee;k!==ne;k+=Z)for(te=le;te!==ue;te+=K,j+=2)H[(te+D*k)*4+0]=G[j+0],H[(te+D*k)*4+1]=G[j+0],H[(te+D*k)*4+2]=G[j+0],H[(te+D*k)*4+3]=G[j+1];return H}function u(H,ee,Z,ne,le){let K,ue,G,j,te,k;switch((E.flags&T)>>M){default:case U:K=0,G=1,te=ee,ue=0,j=1,k=Z;break;case C:K=0,G=1,te=ee,ue=Z-1,j=-1,k=-1;break;case z:K=ee-1,G=-1,te=-1,ue=0,j=1,k=Z;break;case L:K=ee-1,G=-1,te=-1,ue=Z-1,j=-1,k=-1;break}if(B)switch(E.pixel_size){case 8:l(H,ue,j,k,K,G,te,ne);break;case 16:c(H,ue,j,k,K,G,te,ne);break;default:console.error("THREE.TGALoader: Format not supported.");break}else switch(E.pixel_size){case 8:i(H,ue,j,k,K,G,te,ne,le);break;case 16:r(H,ue,j,k,K,G,te,ne);break;case 24:a(H,ue,j,k,K,G,te,ne);break;case 32:o(H,ue,j,k,K,G,te,ne);break;default:console.error("THREE.TGALoader: Format not supported.");break}return H}const h=0,f=1,p=2,g=3,x=9,m=10,d=11,T=48,M=4,C=0,L=1,U=2,z=3;e.length<19&&console.error("THREE.TGALoader: Not enough data to contain header.");let I=0;const y=new Uint8Array(e),E={id_length:y[I++],colormap_type:y[I++],image_type:y[I++],colormap_index:y[I++]|y[I++]<<8,colormap_length:y[I++]|y[I++]<<8,colormap_size:y[I++],origin:[y[I++]|y[I++]<<8,y[I++]|y[I++]<<8],width:y[I++]|y[I++]<<8,height:y[I++]|y[I++]<<8,pixel_size:y[I++],flags:y[I++]};t(E),E.id_length+I>e.length&&console.error("THREE.TGALoader: No data."),I+=E.id_length;let X=!1,$=!1,B=!1;switch(E.image_type){case x:X=!0,$=!0;break;case f:$=!0;break;case m:X=!0;break;case p:break;case d:X=!0,B=!0;break;case g:B=!0;break}const V=new Uint8Array(E.width*E.height*4),Y=n(X,$,E,I,y);return u(V,E.width,E.height,Y.pixel_data,Y.palettes),{data:V,width:E.width,height:E.height,flipY:!0,generateMipmaps:!0,minFilter:Mi}}}class Kl extends vr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=r.path===""?Yg.extractUrlBase(e):r.path,o=new Fa(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){function n(v,_){const S=[],b=v.childNodes;for(let w=0,J=b.length;w<J;w++){const ae=b[w];ae.nodeName===_&&S.push(ae)}return S}function i(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),S=new Array(_.length);for(let b=0,w=_.length;b<w;b++)S[b]=_[b];return S}function r(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),S=new Array(_.length);for(let b=0,w=_.length;b<w;b++)S[b]=parseFloat(_[b]);return S}function a(v){if(v.length===0)return[];const _=v.trim().split(/\s+/),S=new Array(_.length);for(let b=0,w=_.length;b<w;b++)S[b]=parseInt(_[b]);return S}function o(v){return v.substring(1)}function l(){return"three_default_"+su++}function c(v){return Object.keys(v).length===0}function u(v){return{unit:h(n(v,"unit")[0]),upAxis:f(n(v,"up_axis")[0])}}function h(v){return v!==void 0&&v.hasAttribute("meter")===!0?parseFloat(v.getAttribute("meter")):1}function f(v){return v!==void 0?v.textContent:"Y_UP"}function p(v,_,S,b){const w=n(v,_)[0];if(w!==void 0){const J=n(w,S);for(let ae=0;ae<J.length;ae++)b(J[ae])}}function g(v,_){for(const S in v){const b=v[S];b.build=_(v[S])}}function x(v,_){return v.build!==void 0||(v.build=_(v)),v.build}function m(v){const _={sources:{},samplers:{},channels:{}};let S=!1;for(let b=0,w=v.childNodes.length;b<w;b++){const J=v.childNodes[b];if(J.nodeType!==1)continue;let ae;switch(J.nodeName){case"source":ae=J.getAttribute("id"),_.sources[ae]=he(J);break;case"sampler":ae=J.getAttribute("id"),_.samplers[ae]=d(J);break;case"channel":ae=J.getAttribute("target"),_.channels[ae]=T(J);break;case"animation":m(J),S=!0;break;default:console.log(J)}}S===!1&&(Be.animations[v.getAttribute("id")||xr.generateUUID()]=_)}function d(v){const _={inputs:{}};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"input":const J=o(w.getAttribute("source")),ae=w.getAttribute("semantic");_.inputs[ae]=J;break}}return _}function T(v){const _={};let b=v.getAttribute("target").split("/");const w=b.shift();let J=b.shift();const ae=J.indexOf("(")!==-1,we=J.indexOf(".")!==-1;if(we)b=J.split("."),J=b.shift(),_.member=b.shift();else if(ae){const ge=J.split("(");J=ge.shift();for(let be=0;be<ge.length;be++)ge[be]=parseInt(ge[be].replace(/\)/,""));_.indices=ge}return _.id=w,_.sid=J,_.arraySyntax=ae,_.memberSyntax=we,_.sampler=o(v.getAttribute("source")),_}function M(v){const _=[],S=v.channels,b=v.samplers,w=v.sources;for(const J in S)if(S.hasOwnProperty(J)){const ae=S[J],we=b[ae.sampler],ge=we.inputs.INPUT,be=we.inputs.OUTPUT,De=w[ge],fe=w[be],Re=L(ae,De,fe);E(Re,_)}return _}function C(v){return x(Be.animations[v],M)}function L(v,_,S){const b=Be.nodes[v.id],w=Lt(b.id),J=b.transforms[v.sid],ae=b.matrix.clone().transpose();let we,ge,be,De,fe,Re;const Te={};switch(J){case"matrix":for(be=0,De=_.array.length;be<De;be++)if(we=_.array[be],ge=be*S.stride,Te[we]===void 0&&(Te[we]={}),v.arraySyntax===!0){const Tt=S.array[ge],ut=v.indices[0]+4*v.indices[1];Te[we][ut]=Tt}else for(fe=0,Re=S.stride;fe<Re;fe++)Te[we][fe]=S.array[ge+fe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',J);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',J);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',J);break}const ze=U(Te,ae);return{name:w.uuid,keyframes:ze}}function U(v,_){const S=[];for(const w in v)S.push({time:parseFloat(w),value:v[w]});S.sort(b);for(let w=0;w<16;w++)X(S,w,_.elements[w]);return S;function b(w,J){return w.time-J.time}}const z=new F,I=new F,y=new kn;function E(v,_){const S=v.keyframes,b=v.name,w=[],J=[],ae=[],we=[];for(let ge=0,be=S.length;ge<be;ge++){const De=S[ge],fe=De.time,Re=De.value;ct.fromArray(Re).transpose(),ct.decompose(z,y,I),w.push(fe),J.push(z.x,z.y,z.z),ae.push(y.x,y.y,y.z,y.w),we.push(I.x,I.y,I.z)}return J.length>0&&_.push(new or(b+".position",w,J)),ae.length>0&&_.push(new gr(b+".quaternion",w,ae)),we.length>0&&_.push(new or(b+".scale",w,we)),_}function X(v,_,S){let b,w=!0,J,ae;for(J=0,ae=v.length;J<ae;J++)b=v[J],b.value[_]===void 0?b.value[_]=null:w=!1;if(w===!0)for(J=0,ae=v.length;J<ae;J++)b=v[J],b.value[_]=S;else $(v,_)}function $(v,_){let S,b;for(let w=0,J=v.length;w<J;w++){const ae=v[w];if(ae.value[_]===null){if(S=B(v,w,_),b=V(v,w,_),S===null){ae.value[_]=b.value[_];continue}if(b===null){ae.value[_]=S.value[_];continue}Y(ae,S,b,_)}}}function B(v,_,S){for(;_>=0;){const b=v[_];if(b.value[S]!==null)return b;_--}return null}function V(v,_,S){for(;_<v.length;){const b=v[_];if(b.value[S]!==null)return b;_++}return null}function Y(v,_,S,b){if(S.time-_.time===0){v.value[b]=_.value[b];return}v.value[b]=(v.time-_.time)*(S.value[b]-_.value[b])/(S.time-_.time)+_.value[b]}function H(v){const _={name:v.getAttribute("id")||"default",start:parseFloat(v.getAttribute("start")||0),end:parseFloat(v.getAttribute("end")||0),animations:[]};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"instance_animation":_.animations.push(o(w.getAttribute("url")));break}}Be.clips[v.getAttribute("id")]=_}function ee(v){const _=[],S=v.name,b=v.end-v.start||-1,w=v.animations;for(let J=0,ae=w.length;J<ae;J++){const we=C(w[J]);for(let ge=0,be=we.length;ge<be;ge++)_.push(we[ge])}return new Tl(S,b,_)}function Z(v){return x(Be.clips[v],ee)}function ne(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"skin":_.id=o(w.getAttribute("source")),_.skin=le(w);break;case"morph":_.id=o(w.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Be.controllers[v.getAttribute("id")]=_}function le(v){const _={sources:{}};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=r(w.textContent);break;case"source":const J=w.getAttribute("id");_.sources[J]=he(w);break;case"joints":_.joints=K(w);break;case"vertex_weights":_.vertexWeights=ue(w);break}}return _}function K(v){const _={inputs:{}};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"input":const J=w.getAttribute("semantic"),ae=o(w.getAttribute("source"));_.inputs[J]=ae;break}}return _}function ue(v){const _={inputs:{}};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"input":const J=w.getAttribute("semantic"),ae=o(w.getAttribute("source")),we=parseInt(w.getAttribute("offset"));_.inputs[J]={id:ae,offset:we};break;case"vcount":_.vcount=a(w.textContent);break;case"v":_.v=a(w.textContent);break}}return _}function G(v){const _={id:v.id},S=Be.geometries[_.id];return v.skin!==void 0&&(_.skin=j(v.skin),S.sources.skinIndices=_.skin.indices,S.sources.skinWeights=_.skin.weights),_}function j(v){const S={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},b=v.sources,w=v.vertexWeights,J=w.vcount,ae=w.v,we=w.inputs.JOINT.offset,ge=w.inputs.WEIGHT.offset,be=v.sources[v.joints.inputs.JOINT],De=v.sources[v.joints.inputs.INV_BIND_MATRIX],fe=b[w.inputs.WEIGHT.id].array;let Re=0,Te,ze,Ue;for(Te=0,Ue=J.length;Te<Ue;Te++){const ut=J[Te],st=[];for(ze=0;ze<ut;ze++){const at=ae[Re+we],Bn=ae[Re+ge],tn=fe[Bn];st.push({index:at,weight:tn}),Re+=2}for(st.sort(Tt),ze=0;ze<4;ze++){const at=st[ze];at!==void 0?(S.indices.array.push(at.index),S.weights.array.push(at.weight)):(S.indices.array.push(0),S.weights.array.push(0))}}for(v.bindShapeMatrix?S.bindMatrix=new Je().fromArray(v.bindShapeMatrix).transpose():S.bindMatrix=new Je().identity(),Te=0,Ue=be.array.length;Te<Ue;Te++){const ut=be.array[Te],st=new Je().fromArray(De.array,Te*De.stride).transpose();S.joints.push({name:ut,boneInverse:st})}return S;function Tt(ut,st){return st.weight-ut.weight}}function te(v){return x(Be.controllers[v],G)}function k(v){const _={init_from:n(v,"init_from")[0].textContent};Be.images[v.getAttribute("id")]=_}function D(v){return v.build!==void 0?v.build:v.init_from}function Me(v){const _=Be.images[v];return _!==void 0?x(_,D):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",v),null)}function Ae(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"profile_COMMON":_.profile=me(w);break}}Be.effects[v.getAttribute("id")]=_}function me(v){const _={surfaces:{},samplers:{}};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"newparam":Fe(w,_);break;case"technique":_.technique=je(w);break;case"extra":_.extra=lt(w);break}}return _}function Fe(v,_){const S=v.getAttribute("sid");for(let b=0,w=v.childNodes.length;b<w;b++){const J=v.childNodes[b];if(J.nodeType===1)switch(J.nodeName){case"surface":_.surfaces[S]=it(J);break;case"sampler2D":_.samplers[S]=Ie(J);break}}}function it(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"init_from":_.init_from=w.textContent;break}}return _}function Ie(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"source":_.source=w.textContent;break}}return _}function je(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=w.nodeName,_.parameters=bt(w);break;case"extra":_.extra=lt(w);break}}return _}function bt(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[w.nodeName]=pt(w);break;case"transparent":_[w.nodeName]={opaque:w.hasAttribute("opaque")?w.getAttribute("opaque"):"A_ONE",data:pt(w)};break}}return _}function pt(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"color":_[w.nodeName]=r(w.textContent);break;case"float":_[w.nodeName]=parseFloat(w.textContent);break;case"texture":_[w.nodeName]={id:w.getAttribute("texture"),extra:St(w)};break}}return _}function St(v){const _={technique:{}};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"extra":wt(w,_);break}}return _}function wt(v,_){for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"technique":nt(w,_);break}}}function nt(v,_){for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[w.nodeName]=parseFloat(w.textContent);break;case"wrapU":case"wrapV":w.textContent.toUpperCase()==="TRUE"?_.technique[w.nodeName]=1:w.textContent.toUpperCase()==="FALSE"?_.technique[w.nodeName]=0:_.technique[w.nodeName]=parseInt(w.textContent);break;case"bump":_[w.nodeName]=R(w);break}}}function lt(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"technique":_.technique=Ft(w);break}}return _}function Ft(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"double_sided":_[w.nodeName]=parseInt(w.textContent);break;case"bump":_[w.nodeName]=R(w);break}}return _}function R(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"texture":_[w.nodeName]={id:w.getAttribute("texture"),texcoord:w.getAttribute("texcoord"),extra:St(w)};break}}return _}function A(v){return v}function ie(v){return x(Be.effects[v],A)}function de(v){const _={name:v.getAttribute("name")};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"instance_effect":_.url=o(w.getAttribute("url"));break}}Be.materials[v.getAttribute("id")]=_}function pe(v){let _,S=v.slice((v.lastIndexOf(".")-1>>>0)+2);switch(S=S.toLowerCase(),S){case"tga":_=Rs;break;default:_=Wa}return _}function _e(v){const _=ie(v.url),S=_.profile.technique;let b;switch(S.type){case"phong":case"blinn":b=new wl;break;case"lambert":b=new Oa;break;default:b=new Ir;break}b.name=v.name||"";function w(ge,be=null){const De=_.profile.samplers[ge.id];let fe=null;if(De!==void 0){const Re=_.profile.surfaces[De.source];fe=Me(Re.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),fe=Me(ge.id);if(fe!==null){const Re=pe(fe);if(Re!==void 0){const Te=Re.load(fe),ze=ge.extra;if(ze!==void 0&&ze.technique!==void 0&&c(ze.technique)===!1){const Ue=ze.technique;Te.wrapS=Ue.wrapU?vi:$t,Te.wrapT=Ue.wrapV?vi:$t,Te.offset.set(Ue.offsetU||0,Ue.offsetV||0),Te.repeat.set(Ue.repeatU||1,Ue.repeatV||1)}else Te.wrapS=vi,Te.wrapT=vi;return be!==null&&(Te.encoding=be),Te}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",fe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ge.id),null}const J=S.parameters;for(const ge in J){const be=J[ge];switch(ge){case"diffuse":be.color&&b.color.fromArray(be.color),be.texture&&(b.map=w(be.texture,ft));break;case"specular":be.color&&b.specular&&b.specular.fromArray(be.color),be.texture&&(b.specularMap=w(be.texture));break;case"bump":be.texture&&(b.normalMap=w(be.texture));break;case"ambient":be.texture&&(b.lightMap=w(be.texture,ft));break;case"shininess":be.float&&b.shininess&&(b.shininess=be.float);break;case"emission":be.color&&b.emissive&&b.emissive.fromArray(be.color),be.texture&&(b.emissiveMap=w(be.texture,ft));break}}b.color.convertSRGBToLinear(),b.specular&&b.specular.convertSRGBToLinear(),b.emissive&&b.emissive.convertSRGBToLinear();let ae=J.transparent,we=J.transparency;if(we===void 0&&ae&&(we={float:1}),ae===void 0&&we&&(ae={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ae&&we)if(ae.data.texture)b.transparent=!0;else{const ge=ae.data.color;switch(ae.opaque){case"A_ONE":b.opacity=ge[3]*we.float;break;case"RGB_ZERO":b.opacity=1-ge[0]*we.float;break;case"A_ZERO":b.opacity=1-ge[3]*we.float;break;case"RGB_ONE":b.opacity=ge[0]*we.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ae.opaque)}b.opacity<1&&(b.transparent=!0)}if(S.extra!==void 0&&S.extra.technique!==void 0){const ge=S.extra.technique;for(const be in ge){const De=ge[be];switch(be){case"double_sided":b.side=De===1?Ln:Kn;break;case"bump":b.normalMap=w(De.texture),b.normalScale=new We(1,1);break}}}return b}function N(v){return x(Be.materials[v],_e)}function ce(v){const _={name:v.getAttribute("name")};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"optics":_.optics=Q(w);break}}Be.cameras[v.getAttribute("id")]=_}function Q(v){for(let _=0;_<v.childNodes.length;_++){const S=v.childNodes[_];switch(S.nodeName){case"technique_common":return xe(S)}}return{}}function xe(v){const _={};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];switch(b.nodeName){case"perspective":case"orthographic":_.technique=b.nodeName,_.parameters=Ee(b);break}}return _}function Ee(v){const _={};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];switch(b.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[b.nodeName]=parseFloat(b.textContent);break}}return _}function Pe(v){let _;switch(v.optics.technique){case"perspective":_=new Wt(v.optics.parameters.yfov,v.optics.parameters.aspect_ratio,v.optics.parameters.znear,v.optics.parameters.zfar);break;case"orthographic":let S=v.optics.parameters.ymag,b=v.optics.parameters.xmag;const w=v.optics.parameters.aspect_ratio;b=b===void 0?S*w:b,S=S===void 0?b/w:S,b*=.5,S*=.5,_=new bs(-b,b,S,-S,v.optics.parameters.znear,v.optics.parameters.zfar);break;default:_=new Wt;break}return _.name=v.name||"",_}function ye(v){const _=Be.cameras[v];return _!==void 0?x(_,Pe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",v),null)}function Ce(v){let _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"technique_common":_=He(w);break}}Be.lights[v.getAttribute("id")]=_}function He(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=w.nodeName,_.parameters=Xe(w)}}return _}function Xe(v){const _={};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"color":const J=r(w.textContent);_.color=new Qe().fromArray(J).convertSRGBToLinear();break;case"falloff_angle":_.falloffAngle=parseFloat(w.textContent);break;case"quadratic_attenuation":const ae=parseFloat(w.textContent);_.distance=ae?Math.sqrt(1/ae):0;break}}return _}function Mt(v){let _;switch(v.technique){case"directional":_=new qg;break;case"point":_=new Vc;break;case"spot":_=new Vg;break;case"ambient":_=new Xg;break}return v.parameters.color&&_.color.copy(v.parameters.color),v.parameters.distance&&(_.distance=v.parameters.distance),_}function O(v){const _=Be.lights[v];return _!==void 0?x(_,Mt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",v),null)}function se(v){const _={name:v.getAttribute("name"),sources:{},vertices:{},primitives:[]},S=n(v,"mesh")[0];if(S!==void 0){for(let b=0;b<S.childNodes.length;b++){const w=S.childNodes[b];if(w.nodeType!==1)continue;const J=w.getAttribute("id");switch(w.nodeName){case"source":_.sources[J]=he(w);break;case"vertices":_.vertices=Se(w);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",w.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(Ne(w));break;default:console.log(w)}}Be.geometries[v.getAttribute("id")]=_}}function he(v){const _={array:[],stride:3};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"float_array":_.array=r(b.textContent);break;case"Name_array":_.array=i(b.textContent);break;case"technique_common":const w=n(b,"accessor")[0];w!==void 0&&(_.stride=parseInt(w.getAttribute("stride")));break}}return _}function Se(v){const _={};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];b.nodeType===1&&(_[b.getAttribute("semantic")]=o(b.getAttribute("source")))}return _}function Ne(v){const _={type:v.nodeName,material:v.getAttribute("material"),count:parseInt(v.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let S=0,b=v.childNodes.length;S<b;S++){const w=v.childNodes[S];if(w.nodeType===1)switch(w.nodeName){case"input":const J=o(w.getAttribute("source")),ae=w.getAttribute("semantic"),we=parseInt(w.getAttribute("offset")),ge=parseInt(w.getAttribute("set")),be=ge>0?ae+ge:ae;_.inputs[be]={id:J,offset:we},_.stride=Math.max(_.stride,we+1),ae==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=a(w.textContent);break;case"p":_.p=a(w.textContent);break}}return _}function ht(v){const _={};for(let S=0;S<v.length;S++){const b=v[S];_[b.type]===void 0&&(_[b.type]=[]),_[b.type].push(b)}return _}function xt(v){let _=0;for(let S=0,b=v.length;S<b;S++)v[S].hasUV===!0&&_++;_>0&&_<v.length&&(v.uvsNeedsFix=!0)}function Nt(v){const _={},S=v.sources,b=v.vertices,w=v.primitives;if(w.length===0)return{};const J=ht(w);for(const ae in J){const we=J[ae];xt(we),_[ae]=En(we,S,b)}return _}function En(v,_,S){const b={},w={array:[],stride:0},J={array:[],stride:0},ae={array:[],stride:0},we={array:[],stride:0},ge={array:[],stride:0},be={array:[],stride:4},De={array:[],stride:4},fe=new dn,Re=[];let Te=0;for(let ze=0;ze<v.length;ze++){const Ue=v[ze],Tt=Ue.inputs;let ut=0;switch(Ue.type){case"lines":case"linestrips":ut=Ue.count*2;break;case"triangles":ut=Ue.count*3;break;case"polylist":for(let st=0;st<Ue.count;st++){const at=Ue.vcount[st];switch(at){case 3:ut+=3;break;case 4:ut+=6;break;default:ut+=(at-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Ue.type)}fe.addGroup(Te,ut,ze),Te+=ut,Ue.material&&Re.push(Ue.material);for(const st in Tt){const at=Tt[st];switch(st){case"VERTEX":for(const Bn in S){const tn=S[Bn];switch(Bn){case"POSITION":const Pi=w.array.length;if(rt(Ue,_[tn],at.offset,w.array),w.stride=_[tn].stride,_.skinWeights&&_.skinIndices&&(rt(Ue,_.skinIndices,at.offset,be.array),rt(Ue,_.skinWeights,at.offset,De.array)),Ue.hasUV===!1&&v.uvsNeedsFix===!0){const au=(w.array.length-Pi)/w.stride;for(let qa=0;qa<au;qa++)ae.array.push(0,0)}break;case"NORMAL":rt(Ue,_[tn],at.offset,J.array),J.stride=_[tn].stride;break;case"COLOR":rt(Ue,_[tn],at.offset,ge.array),ge.stride=_[tn].stride;break;case"TEXCOORD":rt(Ue,_[tn],at.offset,ae.array),ae.stride=_[tn].stride;break;case"TEXCOORD1":rt(Ue,_[tn],at.offset,we.array),ae.stride=_[tn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Bn)}}break;case"NORMAL":rt(Ue,_[at.id],at.offset,J.array),J.stride=_[at.id].stride;break;case"COLOR":rt(Ue,_[at.id],at.offset,ge.array,!0),ge.stride=_[at.id].stride;break;case"TEXCOORD":rt(Ue,_[at.id],at.offset,ae.array),ae.stride=_[at.id].stride;break;case"TEXCOORD1":rt(Ue,_[at.id],at.offset,we.array),we.stride=_[at.id].stride;break}}}return w.array.length>0&&fe.setAttribute("position",new At(w.array,w.stride)),J.array.length>0&&fe.setAttribute("normal",new At(J.array,J.stride)),ge.array.length>0&&fe.setAttribute("color",new At(ge.array,ge.stride)),ae.array.length>0&&fe.setAttribute("uv",new At(ae.array,ae.stride)),we.array.length>0&&fe.setAttribute("uv2",new At(we.array,we.stride)),be.array.length>0&&fe.setAttribute("skinIndex",new At(be.array,be.stride)),De.array.length>0&&fe.setAttribute("skinWeight",new At(De.array,De.stride)),b.data=fe,b.type=v[0].type,b.materialKeys=Re,b}function rt(v,_,S,b,w=!1){const J=v.p,ae=v.stride,we=v.vcount;function ge(fe){let Re=J[fe+S]*De;const Te=Re+De;for(;Re<Te;Re++)b.push(be[Re]);if(w){const ze=b.length-De-1;zr.setRGB(b[ze+0],b[ze+1],b[ze+2]).convertSRGBToLinear(),b[ze+0]=zr.r,b[ze+1]=zr.g,b[ze+2]=zr.b}}const be=_.array,De=_.stride;if(v.vcount!==void 0){let fe=0;for(let Re=0,Te=we.length;Re<Te;Re++){const ze=we[Re];if(ze===4){const Ue=fe+ae*0,Tt=fe+ae*1,ut=fe+ae*2,st=fe+ae*3;ge(Ue),ge(Tt),ge(st),ge(Tt),ge(ut),ge(st)}else if(ze===3){const Ue=fe+ae*0,Tt=fe+ae*1,ut=fe+ae*2;ge(Ue),ge(Tt),ge(ut)}else if(ze>4)for(let Ue=1,Tt=ze-2;Ue<=Tt;Ue++){const ut=fe+ae*0,st=fe+ae*Ue,at=fe+ae*(Ue+1);ge(ut),ge(st),ge(at)}fe+=ae*ze}}else for(let fe=0,Re=J.length;fe<Re;fe+=ae)ge(fe)}function Kt(v){return x(Be.geometries[v],Nt)}function pn(v){const _={name:v.getAttribute("name")||"",joints:{},links:[]};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"technique_common":Ts(b,_);break}}Be.kinematicsModels[v.getAttribute("id")]=_}function Ei(v){return v.build!==void 0?v.build:v}function kr(v){return x(Be.kinematicsModels[v],Ei)}function Ts(v,_){for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"joint":_.joints[b.getAttribute("sid")]=As(b);break;case"link":_.links.push(P(b));break}}}function As(v){let _;for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"prismatic":case"revolute":_=Cs(b);break}}return _}function Cs(v){const _={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",axis:new F,limits:{min:0,max:0},type:v.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"axis":const w=r(b.textContent);_.axis.fromArray(w);break;case"limits":const J=b.getElementsByTagName("max")[0],ae=b.getElementsByTagName("min")[0];_.limits.max=parseFloat(J.textContent),_.limits.min=parseFloat(ae.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function P(v){const _={sid:v.getAttribute("sid"),name:v.getAttribute("name")||"",attachments:[],transforms:[]};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"attachment_full":_.attachments.push(q(b));break;case"matrix":case"translate":case"rotate":_.transforms.push(re(b));break}}return _}function q(v){const _={joint:v.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"link":_.links.push(P(b));break;case"matrix":case"translate":case"rotate":_.transforms.push(re(b));break}}return _}function re(v){const _={type:v.nodeName},S=r(v.textContent);switch(_.type){case"matrix":_.obj=new Je,_.obj.fromArray(S).transpose();break;case"translate":_.obj=new F,_.obj.fromArray(S);break;case"rotate":_.obj=new F,_.obj.fromArray(S),_.angle=xr.degToRad(S[3]);break}return _}function W(v){const _={name:v.getAttribute("name")||"",rigidBodies:{}};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"rigid_body":_.rigidBodies[b.getAttribute("name")]={},oe(b,_.rigidBodies[b.getAttribute("name")]);break}}Be.physicsModels[v.getAttribute("id")]=_}function oe(v,_){for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"technique_common":ke(b,_);break}}}function ke(v,_){for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"inertia":_.inertia=r(b.textContent);break;case"mass":_.mass=r(b.textContent)[0];break}}}function Ge(v){const _={bindJointAxis:[]};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"bind_joint_axis":_.bindJointAxis.push(Ve(b));break}}Be.kinematicsScenes[o(v.getAttribute("url"))]=_}function Ve(v){const _={target:v.getAttribute("target").split("/").pop()};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"axis":const w=b.getElementsByTagName("param")[0];_.axis=w.textContent;const J=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=J.substring(0,J.length-1);break}}return _}function qe(v){return v.build!==void 0?v.build:v}function Ye(v){return x(Be.kinematicsScenes[v],qe)}function Ke(){const v=Object.keys(Be.kinematicsModels)[0],_=Object.keys(Be.kinematicsScenes)[0],S=Object.keys(Be.visualScenes)[0];if(v===void 0||_===void 0)return;const b=kr(v),w=Ye(_),J=Li(S),ae=w.bindJointAxis,we={};for(let De=0,fe=ae.length;De<fe;De++){const Re=ae[De],Te=Ut.querySelector('[sid="'+Re.target+'"]');if(Te){const ze=Te.parentElement;ge(Re.jointIndex,ze)}}function ge(De,fe){const Re=fe.getAttribute("name"),Te=b.joints[De];J.traverse(function(ze){ze.name===Re&&(we[De]={object:ze,transforms:$e(fe),joint:Te,position:Te.zeroPosition})})}const be=new Je;ja={joints:b&&b.joints,getJointValue:function(De){const fe=we[De];if(fe)return fe.position;console.warn("THREE.ColladaLoader: Joint "+De+" doesn't exist.")},setJointValue:function(De,fe){const Re=we[De];if(Re){const Te=Re.joint;if(fe>Te.limits.max||fe<Te.limits.min)console.warn("THREE.ColladaLoader: Joint "+De+" value "+fe+" outside of limits (min: "+Te.limits.min+", max: "+Te.limits.max+").");else if(Te.static)console.warn("THREE.ColladaLoader: Joint "+De+" is static.");else{const ze=Re.object,Ue=Te.axis,Tt=Re.transforms;ct.identity();for(let ut=0;ut<Tt.length;ut++){const st=Tt[ut];if(st.sid&&st.sid.indexOf(De)!==-1)switch(Te.type){case"revolute":ct.multiply(be.makeRotationAxis(Ue,xr.degToRad(fe)));break;case"prismatic":ct.multiply(be.makeTranslation(Ue.x*fe,Ue.y*fe,Ue.z*fe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Te.type);break}else switch(st.type){case"matrix":ct.multiply(st.obj);break;case"translate":ct.multiply(be.makeTranslation(st.obj.x,st.obj.y,st.obj.z));break;case"scale":ct.scale(st.obj);break;case"rotate":ct.multiply(be.makeRotationAxis(st.obj,st.angle));break}}ze.matrix.copy(ct),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),we[De].position=fe}}else console.log("THREE.ColladaLoader: "+De+" does not exist.")}}}function $e(v){const _=[],S=Ut.querySelector('[id="'+v.id+'"]');for(let b=0;b<S.childNodes.length;b++){const w=S.childNodes[b];if(w.nodeType!==1)continue;let J,ae;switch(w.nodeName){case"matrix":J=r(w.textContent);const we=new Je().fromArray(J).transpose();_.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:we});break;case"translate":case"scale":J=r(w.textContent),ae=new F().fromArray(J),_.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:ae});break;case"rotate":J=r(w.textContent),ae=new F().fromArray(J);const ge=xr.degToRad(J[3]);_.push({sid:w.getAttribute("sid"),type:w.nodeName,obj:ae,angle:ge});break}}return _}function ot(v){const _=v.getElementsByTagName("node");for(let S=0;S<_.length;S++){const b=_[S];b.hasAttribute("id")===!1&&b.setAttribute("id",l())}}const ct=new Je,zt=new F;function vn(v){const _={name:v.getAttribute("name")||"",type:v.getAttribute("type"),id:v.getAttribute("id"),sid:v.getAttribute("sid"),matrix:new Je,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];if(b.nodeType!==1)continue;let w;switch(b.nodeName){case"node":_.nodes.push(b.getAttribute("id")),vn(b);break;case"instance_camera":_.instanceCameras.push(o(b.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(Et(b));break;case"instance_light":_.instanceLights.push(o(b.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(Et(b));break;case"instance_node":_.instanceNodes.push(o(b.getAttribute("url")));break;case"matrix":w=r(b.textContent),_.matrix.multiply(ct.fromArray(w).transpose()),_.transforms[b.getAttribute("sid")]=b.nodeName;break;case"translate":w=r(b.textContent),zt.fromArray(w),_.matrix.multiply(ct.makeTranslation(zt.x,zt.y,zt.z)),_.transforms[b.getAttribute("sid")]=b.nodeName;break;case"rotate":w=r(b.textContent);const J=xr.degToRad(w[3]);_.matrix.multiply(ct.makeRotationAxis(zt.fromArray(w),J)),_.transforms[b.getAttribute("sid")]=b.nodeName;break;case"scale":w=r(b.textContent),_.matrix.scale(zt.fromArray(w)),_.transforms[b.getAttribute("sid")]=b.nodeName;break;case"extra":break;default:console.log(b)}}return Ai(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):Be.nodes[_.id]=_,_}function Et(v){const _={id:o(v.getAttribute("url")),materials:{},skeletons:[]};for(let S=0;S<v.childNodes.length;S++){const b=v.childNodes[S];switch(b.nodeName){case"bind_material":const w=b.getElementsByTagName("instance_material");for(let J=0;J<w.length;J++){const ae=w[J],we=ae.getAttribute("symbol"),ge=ae.getAttribute("target");_.materials[we]=o(ge)}break;case"skeleton":_.skeletons.push(o(b.textContent));break}}return _}function et(v,_){const S=[],b=[];let w,J,ae;for(w=0;w<v.length;w++){const be=v[w];let De;if(Ai(be))De=Lt(be),Ti(De,_,S);else if(Zt(be)){const Re=Be.visualScenes[be].children;for(let Te=0;Te<Re.length;Te++){const ze=Re[Te];if(ze.type==="JOINT"){const Ue=Lt(ze.id);Ti(Ue,_,S)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",be)}for(w=0;w<_.length;w++)for(J=0;J<S.length;J++)if(ae=S[J],ae.bone.name===_[w].name){b[w]=ae,ae.processed=!0;break}for(w=0;w<S.length;w++)ae=S[w],ae.processed===!1&&(b.push(ae),ae.processed=!0);const we=[],ge=[];for(w=0;w<b.length;w++)ae=b[w],we.push(ae.bone),ge.push(ae.boneInverse);return new Ua(we,ge)}function Ti(v,_,S){v.traverse(function(b){if(b.isBone===!0){let w;for(let J=0;J<_.length;J++){const ae=_[J];if(ae.name===b.name){w=ae.boneInverse;break}}w===void 0&&(w=new Je),S.push({bone:b,boneInverse:w,processed:!1})}})}function Dt(v){const _=[],S=v.matrix,b=v.nodes,w=v.type,J=v.instanceCameras,ae=v.instanceControllers,we=v.instanceLights,ge=v.instanceGeometries,be=v.instanceNodes;for(let fe=0,Re=b.length;fe<Re;fe++)_.push(Lt(b[fe]));for(let fe=0,Re=J.length;fe<Re;fe++){const Te=ye(J[fe]);Te!==null&&_.push(Te.clone())}for(let fe=0,Re=ae.length;fe<Re;fe++){const Te=ae[fe],ze=te(Te.id),Ue=Kt(ze.id),Tt=Jn(Ue,Te.materials),ut=Te.skeletons,st=ze.skin.joints,at=et(ut,st);for(let Bn=0,tn=Tt.length;Bn<tn;Bn++){const Pi=Tt[Bn];Pi.isSkinnedMesh&&(Pi.bind(at,ze.skin.bindMatrix),Pi.normalizeSkinWeights()),_.push(Pi)}}for(let fe=0,Re=we.length;fe<Re;fe++){const Te=O(we[fe]);Te!==null&&_.push(Te.clone())}for(let fe=0,Re=ge.length;fe<Re;fe++){const Te=ge[fe],ze=Kt(Te.id),Ue=Jn(ze,Te.materials);for(let Tt=0,ut=Ue.length;Tt<ut;Tt++)_.push(Ue[Tt])}for(let fe=0,Re=be.length;fe<Re;fe++)_.push(Lt(be[fe]).clone());let De;if(b.length===0&&_.length===1)De=_[0];else{De=w==="JOINT"?new kc:new ri;for(let fe=0;fe<_.length;fe++)De.add(_[fe])}return De.name=w==="JOINT"?v.sid:v.name,De.matrix.copy(S),De.matrix.decompose(De.position,De.quaternion,De.scale),De}const Fn=new Ir({color:16711935});function Or(v,_){const S=[];for(let b=0,w=v.length;b<w;b++){const J=_[v[b]];J===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",v[b]),S.push(Fn)):S.push(N(J))}return S}function Jn(v,_){const S=[];for(const b in v){const w=v[b],J=Or(w.materialKeys,_);if(J.length===0&&(b==="lines"||b==="linestrips"?J.push(new ba):J.push(new wl)),b==="lines"||b==="linestrips")for(let be=0,De=J.length;be<De;be++){const fe=J[be];if(fe.isMeshPhongMaterial===!0||fe.isMeshLambertMaterial===!0){const Re=new ba;Re.color.copy(fe.color),Re.opacity=fe.opacity,Re.transparent=fe.transparent,J[be]=Re}}const ae=w.data.attributes.skinIndex!==void 0,we=J.length===1?J[0]:J;let ge;switch(b){case"lines":ge=new Pg(w.data,we);break;case"linestrips":ge=new Fc(w.data,we);break;case"triangles":case"polylist":ae?ge=new Cg(w.data,we):ge=new rn(w.data,we);break}S.push(ge)}return S}function Ai(v){return Be.nodes[v]!==void 0}function Lt(v){return x(Be.nodes[v],Dt)}function zn(v){const _={name:v.getAttribute("name"),children:[]};ot(v);const S=n(v,"node");for(let b=0;b<S.length;b++)_.children.push(vn(S[b]));Be.visualScenes[v.getAttribute("id")]=_}function Ci(v){const _=new ri;_.name=v.name;const S=v.children;for(let b=0;b<S.length;b++){const w=S[b];_.add(Lt(w.id))}return _}function Zt(v){return Be.visualScenes[v]!==void 0}function Li(v){return x(Be.visualScenes[v],Ci)}function Ls(v){const _=n(v,"instance_visual_scene")[0];return Li(o(_.getAttribute("url")))}function Fr(){const v=Be.clips;if(c(v)===!0){if(c(Be.animations)===!1){const _=[];for(const S in Be.animations){const b=C(S);for(let w=0,J=b.length;w<J;w++)_.push(b[w])}Br.push(new Tl("default",-1,_))}}else for(const _ in v)Br.push(Z(_))}function iu(v){let _="";const S=[v];for(;S.length;){const b=S.shift();b.nodeType===Node.TEXT_NODE?_+=b.textContent:(_+=`
`,S.push.apply(S,b.childNodes))}return _.trim()}if(e.length===0)return{scene:new Uc};const Ha=new DOMParser().parseFromString(e,"application/xml"),Ut=n(Ha,"COLLADA")[0],Ps=Ha.getElementsByTagName("parsererror")[0];if(Ps!==void 0){const v=n(Ps,"div")[0];let _;return v?_=v.textContent:_=iu(Ps),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}const ru=Ut.getAttribute("version");console.debug("THREE.ColladaLoader: File version",ru);const Va=u(n(Ut,"asset")[0]),Wa=new Ma(this.manager);Wa.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Rs;Yl&&(Rs=new Yl(this.manager),Rs.setPath(this.resourcePath||t));const zr=new Qe,Br=[];let ja={},su=0;const Be={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(Ut,"library_animations","animation",m),p(Ut,"library_animation_clips","animation_clip",H),p(Ut,"library_controllers","controller",ne),p(Ut,"library_images","image",k),p(Ut,"library_effects","effect",Ae),p(Ut,"library_materials","material",de),p(Ut,"library_cameras","camera",ce),p(Ut,"library_lights","light",Ce),p(Ut,"library_geometries","geometry",se),p(Ut,"library_nodes","node",vn),p(Ut,"library_visual_scenes","visual_scene",zn),p(Ut,"library_kinematics_models","kinematics_model",pn),p(Ut,"library_physics_models","physics_model",W),p(Ut,"scene","instance_kinematics_scene",Ge),g(Be.animations,M),g(Be.clips,ee),g(Be.controllers,G),g(Be.images,D),g(Be.effects,A),g(Be.materials,_e),g(Be.cameras,Pe),g(Be.lights,Mt),g(Be.geometries,Nt),g(Be.visualScenes,Ci),Fr(),Ke();const Gr=Ls(n(Ut,"scene")[0]);return Gr.animations=Br,Va.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Gr.rotation.set(-Math.PI/2,0,0)),Gr.scale.multiplyScalar(Va.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Br},kinematics:ja,library:Be,scene:Gr}}}function r0(s){let e,t=`<!-- include stl: ${s[0]} ${s[2]} -->`,n,i,r;return i=new _n({props:{type:rn,castShadow:!0,receiveShadow:!0,geometry:s[5],scale:s[2],position:s[4],rotation:s[3],$$slots:{default:[s0]},$$scope:{ctx:s}}}),{c(){e=new ms(!1),n=Nn(),mt(i.$$.fragment),this.h()},l(a){e=gs(a,!1),n=Un(a),gt(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),Rt(a,n,o),_t(i,a,o),r=!0},p(a,o){(!r||o&5)&&t!==(t=`<!-- include stl: ${a[0]} ${a[2]} -->`)&&e.p(t);const l={};o&4&&(l.scale=a[2]),o&16&&(l.position=a[4]),o&8&&(l.rotation=a[3]),o&2050&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){r||(Le(i.$$.fragment,a),r=!0)},o(a){Oe(i.$$.fragment,a),r=!1},d(a){a&&e.d(),a&&Ct(n),vt(i,a)}}}function s0(s){let e,t;return e=new _n({props:{type:Oa,color:s[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.color=n[1]),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function a0(s){let e,t,n=s[5]&&r0(s);return{c(){n&&n.c(),e=Ht()},l(i){n&&n.l(i),e=Ht()},m(i,r){n&&n.m(i,r),Rt(i,e,r),t=!0},p(i,[r]){i[5]&&n.p(i,r)},i(i){t||(Le(n),t=!0)},o(i){Oe(n),t=!1},d(i){n&&n.d(i),i&&Ct(e)}}}function o0(s,e,t){let{filename:n}=e,{color:i=new Qe("pink")}=e,{scale:r=[1,1,1]}=e,{rotation:a=[1,1,1]}=e,{position:o=[1,1,1]}=e;const l=Nr(),{invalidate:c}=ci(),u=Ga(Kl,()=>new Kl);let h;const f=g=>{c("Collada: model loaded"),l("load",g)},p=g=>{console.error(g),l("error")};return s.$$set=g=>{"filename"in g&&t(0,n=g.filename),"color"in g&&t(1,i=g.color),"scale"in g&&t(2,r=g.scale),"rotation"in g&&t(3,a=g.rotation),"position"in g&&t(4,o=g.position)},s.$$.update=()=>{s.$$.dirty&1&&u.load(n,f,void 0,p)},[n,i,r,a,o,h]}class l0 extends an{constructor(e){super(),on(this,e,o0,a0,ln,{filename:0,color:1,scale:2,rotation:3,position:4})}}class Zl extends vr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Fa(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const g=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(g,u,x))return!1;return!0}function n(c,u,h){for(let f=0,p=c.length;f<p;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function i(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,p,g,x=!1,m,d,T,M,C;for(let E=0;E<80-10;E++)u.getUint32(E,!1)==1129270351&&u.getUint8(E+4)==82&&u.getUint8(E+5)==61&&(x=!0,m=new Float32Array(h*3*3),d=u.getUint8(E+6)/255,T=u.getUint8(E+7)/255,M=u.getUint8(E+8)/255,C=u.getUint8(E+9)/255);const L=84,U=12*4+2,z=new dn,I=new Float32Array(h*3*3),y=new Float32Array(h*3*3);for(let E=0;E<h;E++){const X=L+E*U,$=u.getFloat32(X,!0),B=u.getFloat32(X+4,!0),V=u.getFloat32(X+8,!0);if(x){const Y=u.getUint16(X+48,!0);Y&32768?(f=d,p=T,g=M):(f=(Y&31)/31,p=(Y>>5&31)/31,g=(Y>>10&31)/31)}for(let Y=1;Y<=3;Y++){const H=X+Y*12,ee=E*3*3+(Y-1)*3;I[ee]=u.getFloat32(H,!0),I[ee+1]=u.getFloat32(H+4,!0),I[ee+2]=u.getFloat32(H+8,!0),y[ee]=$,y[ee+1]=B,y[ee+2]=V,x&&(m[ee]=f,m[ee+1]=p,m[ee+2]=g)}}return z.setAttribute("position",new hn(I,3)),z.setAttribute("normal",new hn(y,3)),x&&(z.setAttribute("color",new hn(m,3)),z.hasColors=!0,z.alpha=C),z}function r(c){const u=new dn,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g;let p=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+g+g+g,"g"),m=new RegExp("normal"+g+g+g,"g"),d=[],T=[],M=new F;let C,L=0,U=0,z=0;for(;(C=h.exec(c))!==null;){U=z;const I=C[0];for(;(C=f.exec(I))!==null;){let X=0,$=0;const B=C[0];for(;(C=m.exec(B))!==null;)M.x=parseFloat(C[1]),M.y=parseFloat(C[2]),M.z=parseFloat(C[3]),$++;for(;(C=x.exec(B))!==null;)d.push(parseFloat(C[1]),parseFloat(C[2]),parseFloat(C[3])),T.push(M.x,M.y,M.z),X++,z++;$!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),X!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const y=U,E=z-U;u.addGroup(y,E,L),L++}return u.setAttribute("position",new At(d,3)),u.setAttribute("normal",new At(T,3)),u}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=o(e);return t(l)?i(l):r(a(e))}}function Jl(s){let e,t=`<!-- include stl: ${s[0]} ${s[2]} -->`,n,i,r;return i=new _n({props:{type:rn,castShadow:!0,receiveShadow:!0,geometry:s[5],scale:s[2],position:s[4],rotation:s[3],$$slots:{default:[c0]},$$scope:{ctx:s}}}),{c(){e=new ms(!1),n=Nn(),mt(i.$$.fragment),this.h()},l(a){e=gs(a,!1),n=Un(a),gt(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),Rt(a,n,o),_t(i,a,o),r=!0},p(a,o){(!r||o&5)&&t!==(t=`<!-- include stl: ${a[0]} ${a[2]} -->`)&&e.p(t);const l={};o&32&&(l.geometry=a[5]),o&4&&(l.scale=a[2]),o&16&&(l.position=a[4]),o&8&&(l.rotation=a[3]),o&2050&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){r||(Le(i.$$.fragment,a),r=!0)},o(a){Oe(i.$$.fragment,a),r=!1},d(a){a&&e.d(),a&&Ct(n),vt(i,a)}}}function c0(s){let e,t;return e=new _n({props:{type:Oa,color:s[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.color=n[1]),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function u0(s){let e,t,n=s[5]&&Jl(s);return{c(){n&&n.c(),e=Ht()},l(i){n&&n.l(i),e=Ht()},m(i,r){n&&n.m(i,r),Rt(i,e,r),t=!0},p(i,[r]){i[5]?n?(n.p(i,r),r&32&&Le(n,1)):(n=Jl(i),n.c(),Le(n,1),n.m(e.parentNode,e)):n&&(Dn(),Oe(n,1,1,()=>{n=null}),In())},i(i){t||(Le(n),t=!0)},o(i){Oe(n),t=!1},d(i){n&&n.d(i),i&&Ct(e)}}}function f0(s,e,t){let{filename:n}=e,{color:i=new Qe("pink")}=e,{scale:r=[1,1,1]}=e,{rotation:a=[1,1,1]}=e,{position:o=[1,1,1]}=e;const l=Nr(),{invalidate:c}=ci(),u=Ga(Zl,()=>new Zl);let h;const f=g=>{h&&l("unload"),t(5,h=g),c("STL: model loaded"),l("load",g)},p=g=>{console.error(g),l("error")};return s.$$set=g=>{"filename"in g&&t(0,n=g.filename),"color"in g&&t(1,i=g.color),"scale"in g&&t(2,r=g.scale),"rotation"in g&&t(3,a=g.rotation),"position"in g&&t(4,o=g.position)},s.$$.update=()=>{s.$$.dirty&1&&u.load(n,f,void 0,p)},[n,i,r,a,o,h]}class h0 extends an{constructor(e){super(),on(this,e,f0,u0,ln,{filename:0,color:1,scale:2,rotation:3,position:4})}}function d0(s){let e,t;return e=new _n({props:{type:rn,castShadow:!0,receiveShadow:!0,scale:s[1],position:s[3],rotation:s[4],$$slots:{default:[_0]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.scale=n[1]),i&65&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function p0(s){let e,t,n,i;const r=[x0,v0],a=[];function o(l,c){return l[2].type==="stl"?0:l[2].type==="dae"?1:-1}return~(e=o(s))&&(t=a[e]=r[e](s)),{c(){t&&t.c(),n=Ht()},l(l){t&&t.l(l),n=Ht()},m(l,c){~e&&a[e].m(l,c),Rt(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?~e&&a[e].p(l,c):(t&&(Dn(),Oe(a[u],1,1,()=>{a[u]=null}),In()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),Le(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(Le(t),i=!0)},o(l){Oe(t),i=!1},d(l){~e&&a[e].d(l),l&&Ct(n)}}}function m0(s){let e,t;return e=new _n({props:{type:dr}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p:Gt,i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function g0(s){let e,t;return e=new _n({props:{type:ka}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p:Gt,i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function _0(s){let e,t,n,i,r;const a=[g0,m0],o=[];function l(c,u){return c[0].type==="cylinder"?0:c[0].type==="box"?1:-1}return~(e=l(s))&&(t=o[e]=a[e](s)),i=new _n({props:{type:Ir,color:s[5]}}),{c(){t&&t.c(),n=Nn(),mt(i.$$.fragment)},l(c){t&&t.l(c),n=Un(c),gt(i.$$.fragment,c)},m(c,u){~e&&o[e].m(c,u),Rt(c,n,u),_t(i,c,u),r=!0},p(c,u){let h=e;e=l(c),e===h?~e&&o[e].p(c,u):(t&&(Dn(),Oe(o[h],1,1,()=>{o[h]=null}),In()),~e?(t=o[e],t?t.p(c,u):(t=o[e]=a[e](c),t.c()),Le(t,1),t.m(n.parentNode,n)):t=null)},i(c){r||(Le(t),Le(i.$$.fragment,c),r=!0)},o(c){Oe(t),Oe(i.$$.fragment,c),r=!1},d(c){~e&&o[e].d(c),c&&Ct(n),vt(i,c)}}}function v0(s){let e,t;return e=new l0({props:{filename:s[2].filename,position:s[3],rotation:s[4],color:s[5],scale:s[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&4&&(r.filename=n[2].filename),i&2&&(r.scale=n[1]),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function x0(s){let e,t;return e=new h0({props:{filename:s[2].filename,position:s[3],rotation:s[4],color:s[5],scale:s[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&4&&(r.filename=n[2].filename),i&2&&(r.scale=n[1]),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function b0(s){let e,t,n,i;const r=[p0,d0],a=[];function o(l,c){return l[0].type==="mesh"?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=Ht()},l(l){t.l(l),n=Ht()},m(l,c){a[e].m(l,c),Rt(l,n,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(Dn(),Oe(a[u],1,1,()=>{a[u]=null}),In(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),Le(t,1),t.m(n.parentNode,n))},i(l){i||(Le(t),i=!0)},o(l){Oe(t),i=!1},d(l){a[e].d(l),l&&Ct(n)}}}function M0(s,e,t){let{visual:n}=e;const i=n.origin_xyz||[0,0,0],r=n.origin_rpy||[0,0,0],a=n0(n.color_rgba);let o=[1,1,1],l;switch(n.type){case"mesh":l=n.geometry,o=l.scale;break}return s.$$set=c=>{"visual"in c&&t(0,n=c.visual)},[n,o,l,i,r,a]}class y0 extends an{constructor(e){super(),on(this,e,M0,b0,ln,{visual:0})}}function Ql(s,e,t){const n=s.slice();return n[2]=e[t],n}function $l(s,e,t){const n=s.slice();return n[5]=e[t],n}function ec(s){let e,t;return e=new nu({props:{joint:s[5],parser:s[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&3&&(r.joint=n[5]),i&2&&(r.parser=n[1]),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function tc(s){let e,t,n,i;e=new y0({props:{visual:s[2]}});let r=s[1].getChildJoints(s[0].child),a=[];for(let l=0;l<r.length;l+=1)a[l]=ec($l(s,r,l));const o=l=>Oe(a[l],1,1,()=>{a[l]=null});return{c(){mt(e.$$.fragment),t=Nn();for(let l=0;l<a.length;l+=1)a[l].c();n=Ht()},l(l){gt(e.$$.fragment,l),t=Un(l);for(let c=0;c<a.length;c+=1)a[c].l(l);n=Ht()},m(l,c){_t(e,l,c),Rt(l,t,c);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(l,c);Rt(l,n,c),i=!0},p(l,c){const u={};if(c&1&&(u.visual=l[2]),e.$set(u),c&3){r=l[1].getChildJoints(l[0].child);let h;for(h=0;h<r.length;h+=1){const f=$l(l,r,h);a[h]?(a[h].p(f,c),Le(a[h],1)):(a[h]=ec(f),a[h].c(),Le(a[h],1),a[h].m(n.parentNode,n))}for(Dn(),h=r.length;h<a.length;h+=1)o(h);In()}},i(l){if(!i){Le(e.$$.fragment,l);for(let c=0;c<r.length;c+=1)Le(a[c]);i=!0}},o(l){Oe(e.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)Oe(a[c]);i=!1},d(l){vt(e,l),l&&Ct(t),Ea(a,l),l&&Ct(n)}}}function S0(s){let e,t,n=s[0].child.visual,i=[];for(let a=0;a<n.length;a+=1)i[a]=tc(Ql(s,n,a));const r=a=>Oe(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Ht()},l(a){for(let o=0;o<i.length;o+=1)i[o].l(a);e=Ht()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);Rt(a,e,o),t=!0},p(a,o){if(o&3){n=a[0].child.visual;let l;for(l=0;l<n.length;l+=1){const c=Ql(a,n,l);i[l]?(i[l].p(c,o),Le(i[l],1)):(i[l]=tc(c),i[l].c(),Le(i[l],1),i[l].m(e.parentNode,e))}for(Dn(),l=n.length;l<i.length;l+=1)r(l);In()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)Le(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)Oe(i[o]);t=!1},d(a){Ea(i,a),a&&Ct(e)}}}function w0(s){let e,t=`<!-- Joint ${s[0].name} -->`,n,i,r;return i=new _n({props:{type:ri,rotation:s[0].origin_rpy,position:s[0].origin_xyz,$$slots:{default:[S0]},$$scope:{ctx:s}}}),{c(){e=new ms(!1),n=Nn(),mt(i.$$.fragment),this.h()},l(a){e=gs(a,!1),n=Un(a),gt(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),Rt(a,n,o),_t(i,a,o),r=!0},p(a,[o]){(!r||o&1)&&t!==(t=`<!-- Joint ${a[0].name} -->`)&&e.p(t);const l={};o&1&&(l.rotation=a[0].origin_rpy),o&1&&(l.position=a[0].origin_xyz),o&259&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){r||(Le(i.$$.fragment,a),r=!0)},o(a){Oe(i.$$.fragment,a),r=!1},d(a){a&&e.d(),a&&Ct(n),vt(i,a)}}}function E0(s,e,t){let{joint:n}=e,{parser:i}=e;return s.$$set=r=>{"joint"in r&&t(0,n=r.joint),"parser"in r&&t(1,i=r.parser)},[n,i]}class nu extends an{constructor(e){super(),on(this,e,E0,w0,ln,{joint:0,parser:1})}}function nc(s,e,t){const n=s.slice();return n[7]=e[t],n}function T0(s){return{c:Gt,l:Gt,m:Gt,p:Gt,i:Gt,o:Gt,d:Gt}}function A0(s){let e,t=`<!-- ${s[1]} -->`,n,i,r;return i=new _n({props:{type:ri,position:s[2],quaternion:s[0],$$slots:{default:[C0]},$$scope:{ctx:s}}}),{c(){e=new ms(!1),n=Nn(),mt(i.$$.fragment),this.h()},l(a){e=gs(a,!1),n=Un(a),gt(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),Rt(a,n,o),_t(i,a,o),r=!0},p(a,o){(!r||o&2)&&t!==(t=`<!-- ${a[1]} -->`)&&e.p(t);const l={};o&4&&(l.position=a[2]),o&1&&(l.quaternion=a[0]),o&1024&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){r||(Le(i.$$.fragment,a),r=!0)},o(a){Oe(i.$$.fragment,a),r=!1},d(a){a&&e.d(),a&&Ct(n),vt(i,a)}}}function ic(s){let e,t;return e=new nu({props:{joint:s[7],parser:s[3]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p:Gt,i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function C0(s){let e,t,n=s[3].getRootJoints(),i=[];for(let a=0;a<n.length;a+=1)i[a]=ic(nc(s,n,a));const r=a=>Oe(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Ht()},l(a){for(let o=0;o<i.length;o+=1)i[o].l(a);e=Ht()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);Rt(a,e,o),t=!0},p(a,o){if(o&8){n=a[3].getRootJoints();let l;for(l=0;l<n.length;l+=1){const c=nc(a,n,l);i[l]?(i[l].p(c,o),Le(i[l],1)):(i[l]=ic(c),i[l].c(),Le(i[l],1),i[l].m(e.parentNode,e))}for(Dn(),l=n.length;l<i.length;l+=1)r(l);In()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)Le(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)Oe(i[o]);t=!1},d(a){Ea(i,a),a&&Ct(e)}}}function L0(s){return{c:Gt,l:Gt,m:Gt,p:Gt,i:Gt,o:Gt,d:Gt}}function P0(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:L0,then:A0,catch:T0,value:6,blocks:[,,,]};return pu(s[4],n),{c(){e=Ht(),n.block.c()},l(i){e=Ht(),n.block.l(i)},m(i,r){Rt(i,e,r),n.block.m(i,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[r]){s=i,mu(n,s,r)},i(i){t||(Le(n.block),t=!0)},o(i){for(let r=0;r<3;r+=1){const a=n.blocks[r];Oe(a)}t=!1},d(i){i&&Ct(e),n.block.d(i),n.token=null,n=null}}}function R0(s,e,t){let{filename:n}=e,{position:i=[0,0,0]}=e,{quaternion:r=void 0}=e,a=window.location.href;const o=new i0(n,a),l=o.load();if(!r){const c=new kn;c.setFromAxisAngle(new F(-1,0,0),Math.PI*.5),r=[c.x,c.y,c.z,c.w]}return s.$$set=c=>{"filename"in c&&t(1,n=c.filename),"position"in c&&t(2,i=c.position),"quaternion"in c&&t(0,r=c.quaternion)},[r,n,i,o,l]}class D0 extends an{constructor(e){super(),on(this,e,R0,P0,ln,{filename:1,position:2,quaternion:0})}}function I0(s){let e,t;return e=new F_({props:{enableZoom:!0}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p:Gt,i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){vt(e,n)}}}function N0(s){let e,t,n,i,r,a;return e=new _n({props:{type:Vc,color:"white",intensity:.5,position:[0,5,0]}}),n=new _n({props:{type:Wt,makeDefault:!0,position:[.6,.6,.6],fov:25,$$slots:{default:[I0,({ref:o})=>({0:o}),({ref:o})=>o?1:0]},$$scope:{ctx:s}}}),r=new D0({props:{filename:"/turtlebot3_description/turtlebot3_burger.xml"}}),{c(){mt(e.$$.fragment),t=Nn(),mt(n.$$.fragment),i=Nn(),mt(r.$$.fragment)},l(o){gt(e.$$.fragment,o),t=Un(o),gt(n.$$.fragment,o),i=Un(o),gt(r.$$.fragment,o)},m(o,l){_t(e,o,l),Rt(o,t,l),_t(n,o,l),Rt(o,i,l),_t(r,o,l),a=!0},p(o,l){const c={};l&2&&(c.$$scope={dirty:l,ctx:o}),n.$set(c)},i(o){a||(Le(e.$$.fragment,o),Le(n.$$.fragment,o),Le(r.$$.fragment,o),a=!0)},o(o){Oe(e.$$.fragment,o),Oe(n.$$.fragment,o),Oe(r.$$.fragment,o),a=!1},d(o){vt(e,o),o&&Ct(t),vt(n,o),o&&Ct(i),vt(r,o)}}}function U0(s){let e,t,n;return t=new A_({props:{shadows:!0,rendererParameters:{logarithmicDepthBuffer:!0},$$slots:{default:[N0]},$$scope:{ctx:s}}}),{c(){e=rc("div"),mt(t.$$.fragment),this.h()},l(i){e=sc(i,"DIV",{class:!0});var r=ac(e);gt(t.$$.fragment,r),r.forEach(Ct),this.h()},h(){oc(e,"class","svelte-ubqgp")},m(i,r){Rt(i,e,r),_t(t,e,null),n=!0},p(i,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:i}),t.$set(a)},i(i){n||(Le(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){i&&Ct(e),vt(t)}}}class B0 extends an{constructor(e){super(),on(this,e,null,U0,ln,{})}}export{B0 as default};
