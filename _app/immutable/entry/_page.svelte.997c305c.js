var mu=Object.defineProperty;var gu=(r,e,t)=>e in r?mu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var hi=(r,e,t)=>(gu(r,typeof e!="symbol"?e+"":e,t),t);import{J as ka,K as yt,L as Ln,t as Rr,M as Vn,S as wt,i as Mt,s as St,C as In,D as Nn,E as kn,F as On,g as de,d as ge,I as Et,y as Ue,z as Be,A as Ve,B as Ge,k as fc,l as hc,m as dc,h as $e,n as pc,b as lt,N as _u,O as di,v as Dn,f as Pn,P as vu,o as mc,Q as Hs,w as Ai,R as Ci,T as ar,a as At,c as Ct,U as or,V as vt,W as bu,e as zt,X as so,Y as ao,Z as xu,_ as Ms,$ as Ss,H as qt,a0 as Oa,a1 as yu,a2 as wu}from"../chunks/index.a7b66f06.js";import{d as Mu,w as Zt,r as Su}from"../chunks/index.c13b939e.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fa="148",Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tu=0,oo=1,Eu=2,gc=1,_c=2,Er=3,li=0,Tn=1,Ts=2,Yr=3,oi=0,Qi=1,lo=2,co=3,uo=4,Au=5,Ki=100,Cu=101,Lu=102,fo=103,ho=104,Du=200,Pu=201,Ru=202,Iu=203,vc=204,bc=205,Nu=206,ku=207,Ou=208,Fu=209,zu=210,Uu=0,Bu=1,Vu=2,Ea=3,Gu=4,Hu=5,Wu=6,ju=7,Es=0,qu=1,Xu=2,Bn=0,Yu=1,Zu=2,Ku=3,xc=4,Ju=5,yc=300,er=301,tr=302,Aa=303,Ca=304,As=306,yi=1e3,ln=1001,La=1002,Yt=1003,po=1004,Ws=1005,an=1006,Qu=1007,Ti=1008,Ei=1009,$u=1010,ef=1011,wc=1012,tf=1013,wi=1014,ai=1015,Ir=1016,nf=1017,rf=1018,$i=1020,sf=1021,af=1022,Mn=1023,of=1024,lf=1025,Mi=1026,nr=1027,cf=1028,uf=1029,ff=1030,hf=1031,df=1033,js=33776,qs=33777,Xs=33778,Ys=33779,mo=35840,go=35841,_o=35842,vo=35843,pf=36196,bo=37492,xo=37496,yo=37808,wo=37809,Mo=37810,So=37811,To=37812,Eo=37813,Ao=37814,Co=37815,Lo=37816,Do=37817,Po=37818,Ro=37819,Io=37820,No=37821,ko=36492,_s=2300,vs=2301,Zs=2302,Oo=2400,Fo=2401,zo=2402,mf=2500,ci=3e3,gt=3001,gf=3200,_f=3201,za=0,vf=1,Fn="srgb",Nr="srgb-linear",Ks=7680,bf=519,Uo=35044,Bo="300 es",Da=1035;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vo=1234567;const Lr=Math.PI/180,kr=180/Math.PI;function ui(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[r&255]+$t[r>>8&255]+$t[r>>16&255]+$t[r>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function on(r,e,t){return Math.max(e,Math.min(t,r))}function Ua(r,e){return(r%e+e)%e}function xf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function yf(r,e,t){return r!==e?(t-r)/(e-r):0}function Dr(r,e,t){return(1-t)*r+t*e}function wf(r,e,t,n){return Dr(r,e,1-Math.exp(-t*n))}function Mf(r,e=1){return e-Math.abs(Ua(r,e*2)-e)}function Sf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Tf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ef(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Af(r,e){return r+Math.random()*(e-r)}function Cf(r){return r*(.5-Math.random())}function Lf(r){r!==void 0&&(Vo=r);let e=Vo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Df(r){return r*Lr}function Pf(r){return r*kr}function Pa(r){return(r&r-1)===0&&r!==0}function Mc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function bs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ar(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var _r=Object.freeze({__proto__:null,DEG2RAD:Lr,RAD2DEG:kr,generateUUID:ui,clamp:on,euclideanModulo:Ua,mapLinear:xf,inverseLerp:yf,lerp:Dr,damp:wf,pingpong:Mf,smoothstep:Sf,smootherstep:Tf,randInt:Ef,randFloat:Af,randFloatSpread:Cf,seededRandom:Lf,degToRad:Df,radToDeg:Pf,isPowerOfTwo:Pa,ceilPowerOfTwo:Mc,floorPowerOfTwo:bs,setQuaternionFromProperEuler:Rf,normalize:mn,denormalize:Ar});class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bn{constructor(){bn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],v=i[6],S=i[1],y=i[4],M=i[7],A=i[2],D=i[5],z=i[8];return s[0]=a*d+o*S+l*A,s[3]=a*p+o*y+l*D,s[6]=a*v+o*M+l*z,s[1]=c*d+u*S+h*A,s[4]=c*p+u*y+h*D,s[7]=c*v+u*M+h*z,s[2]=f*d+m*S+g*A,s[5]=f*p+m*y+g*D,s[8]=f*v+m*M+g*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*a)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-o*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new bn;function Sc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Or(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ms(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Qs={[Fn]:{[Nr]:Si},[Nr]:{[Fn]:ms}},rn={legacyMode:!0,get workingColorSpace(){return Nr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Qs[e]&&Qs[e][t]!==void 0){const n=Qs[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={r:0,g:0,b:0},En={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function $s(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Kr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rn.workingColorSpace){return this.r=e,this.g=t,this.b=n,rn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rn.workingColorSpace){if(e=Ua(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=$s(a,s,e+1/3),this.g=$s(a,s,e),this.b=$s(a,s,e-1/3)}return rn.toWorkingColorSpace(this,i),this}setStyle(e,t=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,rn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,rn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,rn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,rn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Fn){const n=Tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return rn.fromWorkingColorSpace(Kr(this,Vt),e),on(Vt.r*255,0,255)<<16^on(Vt.g*255,0,255)<<8^on(Vt.b*255,0,255)<<0}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(Kr(this,Vt),t);const n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(Kr(this,Vt),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Fn){return rn.fromWorkingColorSpace(Kr(this,Vt),e),e!==Fn?`color(${e} ${Vt.r} ${Vt.g} ${Vt.b})`:`rgb(${Vt.r*255|0},${Vt.g*255|0},${Vt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(En),En.h+=e,En.s+=t,En.l+=n,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(Zr);const n=Dr(En.h,Zr.h,t),i=Dr(En.s,Zr.s,t),s=Dr(En.l,Zr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ye.NAMES=Tc;let ki;class Ec{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Or("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ac{constructor(e=null){this.isSource=!0,this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ea(i[a].image)):s.push(ea(i[a]))}else s=ea(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ec.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let If=0;class cn extends Li{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=ln,i=ln,s=an,a=Ti,o=Mn,l=Ei,c=cn.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=ui(),this.name="",this.source=new Ac(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=yc;cn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(m+1)/2,A=(v+1)/2,D=(u+f)/4,z=(h+d)/4,b=(g+p)/4;return y>M&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=D/n,s=z/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=D/i,s=b/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=z/s,i=b/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-d)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gn extends Li{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ac(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cc extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nf extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],d=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-o;const v=l*f+c*m+u*g+h*d,S=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const A=Math.sqrt(y),D=Math.atan2(A,v*S);p=Math.sin(p*D)/A,o=Math.sin(o*D)/A}const M=o*S;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,h=h*p+d*M,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-o*m,e[t+2]=c*g+u*m+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new B,Go=new Hn;class zr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)pi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(pi)}else n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox),na.applyMatrix4(e.matrixWorld),this.union(na);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),Jr.subVectors(this.max,vr),Oi.subVectors(e.a,vr),Fi.subVectors(e.b,vr),zi.subVectors(e.c,vr),ti.subVectors(Fi,Oi),ni.subVectors(zi,Fi),mi.subVectors(Oi,zi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-mi.z,mi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,mi.z,0,-mi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-mi.y,mi.x,0];return!ia(t,Oi,Fi,zi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,Oi,Fi,zi,Jr))?!1:(Qr.crossVectors(ti,ni),t=[Qr.x,Qr.y,Qr.z],ia(t,Oi,Fi,zi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return pi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new B,new B,new B,new B,new B,new B,new B,new B],pi=new B,na=new zr,Oi=new B,Fi=new B,zi=new B,ti=new B,ni=new B,mi=new B,vr=new B,Jr=new B,Qr=new B,gi=new B;function ia(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){gi.fromArray(r,s);const o=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kf=new zr,br=new B,ra=new B;class Cs{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(br,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(ra)),this.expandByPoint(br.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new B,sa=new B,$r=new B,ii=new B,aa=new B,es=new B,oa=new B;class Ba{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.direction).multiplyScalar(t).add(this.origin),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sa.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(sa);const s=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=ii.dot(this.direction),l=-ii.dot($r),c=ii.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy($r).multiplyScalar(f).add(sa),m}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,i,s){aa.subVectors(t,e),es.subVectors(n,e),oa.crossVectors(aa,es);let a=this.direction.dot(oa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(es.crossVectors(ii,es));if(l<0)return null;const c=o*this.direction.dot(aa.cross(ii));if(c<0||l+c>a)return null;const u=-o*ii.dot(oa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,h,f,m,g,d,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=f,v[3]=m,v[7]=g,v[11]=d,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,g=o*u,d=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-d*c,t[9]=-o*l,t[2]=d-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f+d*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=d+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f-d*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=d-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=o*u,d=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,Ff)}lookAt(e,t,n){const i=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),ri.crossVectors(n,_n),ri.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),ri.crossVectors(n,_n)),ri.normalize(),ts.crossVectors(_n,ri),i[0]=ri.x,i[4]=ts.x,i[8]=_n.x,i[1]=ri.y,i[5]=ts.y,i[9]=_n.y,i[2]=ri.z,i[6]=ts.z,i[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],v=n[14],S=n[3],y=n[7],M=n[11],A=n[15],D=i[0],z=i[4],b=i[8],I=i[12],L=i[1],X=i[5],Q=i[9],H=i[13],V=i[2],F=i[6],U=i[10],$=i[14],Y=i[3],re=i[7],te=i[11],P=i[15];return s[0]=a*D+o*L+l*V+c*Y,s[4]=a*z+o*X+l*F+c*re,s[8]=a*b+o*Q+l*U+c*te,s[12]=a*I+o*H+l*$+c*P,s[1]=u*D+h*L+f*V+m*Y,s[5]=u*z+h*X+f*F+m*re,s[9]=u*b+h*Q+f*U+m*te,s[13]=u*I+h*H+f*$+m*P,s[2]=g*D+d*L+p*V+v*Y,s[6]=g*z+d*X+p*F+v*re,s[10]=g*b+d*Q+p*U+v*te,s[14]=g*I+d*H+p*$+v*P,s[3]=S*D+y*L+M*V+A*Y,s[7]=S*z+y*X+M*F+A*re,s[11]=S*b+y*Q+M*U+A*te,s[15]=S*I+y*H+M*$+A*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],v=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*m-n*l*m)+d*(+t*l*m-t*c*f+s*a*f-i*a*m+i*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+v*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],v=e[15],S=h*p*c-d*f*c+d*l*m-o*p*m-h*l*v+o*f*v,y=g*f*c-u*p*c-g*l*m+a*p*m+u*l*v-a*f*v,M=u*d*c-g*h*c+g*o*m-a*d*m-u*o*v+a*h*v,A=g*h*l-u*d*l-g*o*f+a*d*f+u*o*p-a*h*p,D=t*S+n*y+i*M+s*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=S*z,e[1]=(d*f*s-h*p*s-d*i*m+n*p*m+h*i*v-n*f*v)*z,e[2]=(o*p*s-d*l*s+d*i*c-n*p*c-o*i*v+n*l*v)*z,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*m-n*l*m)*z,e[4]=y*z,e[5]=(u*p*s-g*f*s+g*i*m-t*p*m-u*i*v+t*f*v)*z,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*v-t*l*v)*z,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*m+t*l*m)*z,e[8]=M*z,e[9]=(g*h*s-u*d*s-g*n*m+t*d*m+u*n*v-t*h*v)*z,e[10]=(a*d*s-g*o*s+g*n*c-t*d*c-a*n*v+t*o*v)*z,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*z,e[12]=A*z,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*p+t*h*p)*z,e[14]=(g*o*i-a*d*i-g*n*l+t*d*l+a*n*p-t*o*p)*z,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,g=s*h,d=a*u,p=a*h,v=o*h,S=l*c,y=l*u,M=l*h,A=n.x,D=n.y,z=n.z;return i[0]=(1-(d+v))*A,i[1]=(m+M)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(m-M)*D,i[5]=(1-(f+v))*D,i[6]=(p+S)*D,i[7]=0,i[8]=(g+y)*z,i[9]=(p-S)*z,i[10]=(1-(f+d))*z,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ui.set(i[0],i[1],i[2]).length();const a=Ui.set(i[4],i[5],i[6]).length(),o=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const c=1/s,u=1/a,h=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,f=(n+i)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new B,An=new Ke,Of=new B(0,0,0),Ff=new B(1,1,1),ri=new B,ts=new B,_n=new B,Ho=new Ke,Wo=new Hn;class Ur{constructor(e=0,t=0,n=0,i=Ur.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ho,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ur.DefaultOrder="XYZ";Ur.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zf=0;const jo=new B,Bi=new Hn,Kn=new Ke,ns=new B,xr=new B,Uf=new B,Bf=new Hn,qo=new B(1,0,0),Xo=new B(0,1,0),Yo=new B(0,0,1),Vf={type:"added"},Zo={type:"removed"};class Lt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DefaultUp.clone();const e=new B,t=new Ur,n=new Hn,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new bn}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Lt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Lt.DefaultMatrixWorldAutoUpdate,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(Xo,e)}rotateZ(e){return this.rotateOnAxis(Yo,e)}translateOnAxis(e,t){return jo.copy(e).applyQuaternion(this.quaternion),this.position.add(jo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(Xo,e)}translateZ(e){return this.translateOnAxis(Yo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(xr,ns,this.up):Kn.lookAt(ns,xr,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Zo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DefaultUp=new B(0,1,0);Lt.DefaultMatrixAutoUpdate=!0;Lt.DefaultMatrixWorldAutoUpdate=!0;const Cn=new B,Jn=new B,la=new B,Qn=new B,Vi=new B,Gi=new B,Ko=new B,ca=new B,ua=new B,fa=new B;class ei{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Cn.subVectors(i,t),Jn.subVectors(n,t),la.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(Jn),l=Cn.dot(la),c=Jn.dot(Jn),u=Jn.dot(la),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn),Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Qn),l.set(0,0),l.addScaledVector(s,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),Jn.subVectors(e,t),Cn.cross(Jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Cn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ei.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Vi.subVectors(i,n),Gi.subVectors(s,n),ca.subVectors(e,n);const l=Vi.dot(ca),c=Gi.dot(ca);if(l<=0&&c<=0)return t.copy(n);ua.subVectors(e,i);const u=Vi.dot(ua),h=Gi.dot(ua);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Vi,a);fa.subVectors(e,s);const m=Vi.dot(fa),g=Gi.dot(fa);if(g>=0&&m<=g)return t.copy(s);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gi,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Ko.subVectors(s,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Ko,o);const v=1/(p+d+f);return a=d*v,o=f*v,t.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gf=0;class Di extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Qi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=vc,this.blendDst=bc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ir extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new B,is=new je;class xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lc extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dc extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hf=0;const wn=new Ke,ha=new Lt,Hi=new B,vn=new zr,yr=new zr,jt=new B;class gn extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?Dc:Lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new bn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(vn.min,yr.min),vn.expandByPoint(jt),jt.addVectors(vn.max,yr.max),vn.expandByPoint(jt)):(vn.expandByPoint(yr.min),vn.expandByPoint(yr.max))}vn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),jt.add(Hi)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<o;L++)c[L]=new B,u[L]=new B;const h=new B,f=new B,m=new B,g=new je,d=new je,p=new je,v=new B,S=new B;function y(L,X,Q){h.fromArray(i,L*3),f.fromArray(i,X*3),m.fromArray(i,Q*3),g.fromArray(a,L*2),d.fromArray(a,X*2),p.fromArray(a,Q*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const H=1/(d.x*p.y-p.x*d.y);isFinite(H)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(H),S.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(H),c[L].add(v),c[X].add(v),c[Q].add(v),u[L].add(S),u[X].add(S),u[Q].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let L=0,X=M.length;L<X;++L){const Q=M[L],H=Q.start,V=Q.count;for(let F=H,U=H+V;F<U;F+=3)y(n[F+0],n[F+1],n[F+2])}const A=new B,D=new B,z=new B,b=new B;function I(L){z.fromArray(s,L*3),b.copy(z);const X=c[L];A.copy(X),A.sub(z.multiplyScalar(z.dot(X))).normalize(),D.crossVectors(b,X);const H=D.dot(u[L])<0?-1:1;l[L*4]=A.x,l[L*4+1]=A.y,l[L*4+2]=A.z,l[L*4+3]=H}for(let L=0,X=M.length;L<X;++L){const Q=M[L],H=Q.start,V=Q.count;for(let F=H,U=H+V;F<U;F+=3)I(n[F+0]),I(n[F+1]),I(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){o.isInterleavedBufferAttribute?m=l[d]*o.data.stride+o.offset:m=l[d]*u;for(let v=0;v<u;v++)f[g++]=c[m++]}return new xn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jo=new Ke,Wi=new Ba,da=new Cs,wr=new B,Mr=new B,Sr=new B,pa=new B,rs=new B,ss=new je,as=new je,os=new je,ma=new B,ls=new B;let en=class extends Lt{constructor(e=new gn,t=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(pa.fromBufferAttribute(h,e),a?rs.addScaledVector(pa,u):rs.addScaledVector(pa.sub(t),u))}t.add(rs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),e.ray.intersectsSphere(da)===!1)||(Jo.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Jo),n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],v=Math.max(d.start,f.start),S=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let y=v,M=S;y<M;y+=3){const A=o.getX(y),D=o.getX(y+1),z=o.getX(y+2);a=cs(this,p,e,Wi,c,u,A,D,z),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const v=o.getX(d),S=o.getX(d+1),y=o.getX(d+2);a=cs(this,i,e,Wi,c,u,v,S,y),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],v=Math.max(d.start,f.start),S=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let y=v,M=S;y<M;y+=3){const A=y,D=y+1,z=y+2;a=cs(this,p,e,Wi,c,u,A,D,z),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const v=d,S=d+1,y=d+2;a=cs(this,i,e,Wi,c,u,v,S,y),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}};function Wf(r,e,t,n,i,s,a,o){let l;if(e.side===Tn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===li,o),l===null)return null;ls.copy(o),ls.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:r}}function cs(r,e,t,n,i,s,a,o,l){r.getVertexPosition(a,wr),r.getVertexPosition(o,Mr),r.getVertexPosition(l,Sr);const c=Wf(r,e,t,n,wr,Mr,Sr,ma);if(c){i&&(ss.fromBufferAttribute(i,a),as.fromBufferAttribute(i,o),os.fromBufferAttribute(i,l),c.uv=ei.getUV(ma,wr,Mr,Sr,ss,as,os,new je)),s&&(ss.fromBufferAttribute(s,a),as.fromBufferAttribute(s,o),os.fromBufferAttribute(s,l),c.uv2=ei.getUV(ma,wr,Mr,Sr,ss,as,os,new je));const u={a,b:o,c:l,normal:new B,materialIndex:0};ei.getNormal(wr,Mr,Sr,u.normal),c.face=u}return c}class lr extends gn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function g(d,p,v,S,y,M,A,D,z,b,I){const L=M/z,X=A/b,Q=M/2,H=A/2,V=D/2,F=z+1,U=b+1;let $=0,Y=0;const re=new B;for(let te=0;te<U;te++){const P=te*X-H;for(let q=0;q<F;q++){const ne=q*L-Q;re[d]=ne*S,re[p]=P*y,re[v]=V,c.push(re.x,re.y,re.z),re[d]=0,re[p]=0,re[v]=D>0?1:-1,u.push(re.x,re.y,re.z),h.push(q/z),h.push(1-te/b),$+=1}}for(let te=0;te<b;te++)for(let P=0;P<z;P++){const q=f+P+F*te,ne=f+P+F*(te+1),J=f+(P+1)+F*(te+1),ee=f+(P+1)+F*te;l.push(q,ne,ee),l.push(ne,J,ee),Y+=6}o.addGroup(m,Y,I),m+=Y,f+=$}}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(r){const e={};for(let t=0;t<r.length;t++){const n=rr(r[t]);for(const i in n)e[i]=n[i]}return e}function jf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Pc(r){return r.getRenderTarget()===null&&r.outputEncoding===gt?Fn:Nr}const Rc={clone:rr,merge:sn};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ga extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Ga{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,qi=1;class Yf extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Kt(ji,qi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Kt(ji,qi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Kt(ji,qi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Kt(ji,qi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Kt(ji,qi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Kt(ji,qi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Bn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ic extends cn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zf extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ic(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new lr(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:oi});s.uniforms.tEquirect.value=t;const a=new en(i,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=an),new Yf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ga=new B,Kf=new B,Jf=new bn;class vi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ga.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jf.getNormalMatrix(e),i=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Cs,us=new B;class Ls{constructor(e=new vi,t=new vi,n=new vi,i=new vi,s=new vi,a=new vi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],v=n[13],S=n[14],y=n[15];return t[0].setComponents(o-i,h-l,d-f,y-p).normalize(),t[1].setComponents(o+i,h+l,d+f,y+p).normalize(),t[2].setComponents(o+s,h+c,d+m,y+v).normalize(),t[3].setComponents(o-s,h-c,d-m,y-v).normalize(),t[4].setComponents(o-a,h-u,d-g,y-S).normalize(),t[5].setComponents(o+a,h+u,d+g,y+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(us.x=i.normal.x>0?e.max.x:e.min.x,us.y=i.normal.y>0?e.max.y:e.min.y,us.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Qf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Ds extends gn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,m=[],g=[],d=[],p=[];for(let v=0;v<u;v++){const S=v*f-a;for(let y=0;y<c;y++){const M=y*h-s;g.push(M,-S,0),d.push(0,0,1),p.push(y/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<o;S++){const y=S+c*v,M=S+c*(v+1),A=S+1+c*(v+1),D=S+1+c*v;m.push(y,M,D),m.push(M,A,D)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2))}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}var $f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh="vec3 transformed = vec3( position );",ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,lh=`#ifdef USE_IRIDESCENCE
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
#endif`,ch=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
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
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vh=`#define PI 3.141592653589793
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
}`,bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Th="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ah=`#ifdef USE_ENVMAP
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
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oh=`#ifdef USE_GRADIENTMAP
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
}`,Fh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
material.diffuseColor = diffuseColor.rgb;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Yh=`struct PhysicalMaterial {
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
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
}`,Zh=`
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
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
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
#endif`,ud=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
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
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,dd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Id=`float getShadowMask() {
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
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vd=`#ifndef saturate
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
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
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
#endif`,Wd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Xd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ip=`#include <common>
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
}`,rp=`#if DEPTH_PACKING == 3200
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
}`,sp=`#define DISTANCE
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
}`,ap=`#define DISTANCE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
}`,dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,mp=`#define MATCAP
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
}`,gp=`#define MATCAP
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
}`,_p=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,bp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,xp=`#define PHONG
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
#include <uv2_pars_fragment>
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
}`,yp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
}`,Mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,Sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,Tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lp=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Qe={alphamap_fragment:$f,alphamap_pars_fragment:eh,alphatest_fragment:th,alphatest_pars_fragment:nh,aomap_fragment:ih,aomap_pars_fragment:rh,begin_vertex:sh,beginnormal_vertex:ah,bsdfs:oh,iridescence_fragment:lh,bumpmap_pars_fragment:ch,clipping_planes_fragment:uh,clipping_planes_pars_fragment:fh,clipping_planes_pars_vertex:hh,clipping_planes_vertex:dh,color_fragment:ph,color_pars_fragment:mh,color_pars_vertex:gh,color_vertex:_h,common:vh,cube_uv_reflection_fragment:bh,defaultnormal_vertex:xh,displacementmap_pars_vertex:yh,displacementmap_vertex:wh,emissivemap_fragment:Mh,emissivemap_pars_fragment:Sh,encodings_fragment:Th,encodings_pars_fragment:Eh,envmap_fragment:Ah,envmap_common_pars_fragment:Ch,envmap_pars_fragment:Lh,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Gh,envmap_vertex:Ph,fog_vertex:Rh,fog_pars_vertex:Ih,fog_fragment:Nh,fog_pars_fragment:kh,gradientmap_pars_fragment:Oh,lightmap_fragment:Fh,lightmap_pars_fragment:zh,lights_lambert_fragment:Uh,lights_lambert_pars_fragment:Bh,lights_pars_begin:Vh,lights_toon_fragment:Hh,lights_toon_pars_fragment:Wh,lights_phong_fragment:jh,lights_phong_pars_fragment:qh,lights_physical_fragment:Xh,lights_physical_pars_fragment:Yh,lights_fragment_begin:Zh,lights_fragment_maps:Kh,lights_fragment_end:Jh,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:td,map_fragment:nd,map_pars_fragment:id,map_particle_fragment:rd,map_particle_pars_fragment:sd,metalnessmap_fragment:ad,metalnessmap_pars_fragment:od,morphcolor_vertex:ld,morphnormal_vertex:cd,morphtarget_pars_vertex:ud,morphtarget_vertex:fd,normal_fragment_begin:hd,normal_fragment_maps:dd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:gd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:vd,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:xd,iridescence_pars_fragment:yd,output_fragment:wd,packing:Md,premultiplied_alpha_fragment:Sd,project_vertex:Td,dithering_fragment:Ed,dithering_pars_fragment:Ad,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Dd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Id,skinbase_vertex:Nd,skinning_pars_vertex:kd,skinning_vertex:Od,skinnormal_vertex:Fd,specularmap_fragment:zd,specularmap_pars_fragment:Ud,tonemapping_fragment:Bd,tonemapping_pars_fragment:Vd,transmission_fragment:Gd,transmission_pars_fragment:Hd,uv_pars_fragment:Wd,uv_pars_vertex:jd,uv_vertex:qd,uv2_pars_fragment:Xd,uv2_pars_vertex:Yd,uv2_vertex:Zd,worldpos_vertex:Kd,background_vert:Jd,background_frag:Qd,backgroundCube_vert:$d,backgroundCube_frag:ep,cube_vert:tp,cube_frag:np,depth_vert:ip,depth_frag:rp,distanceRGBA_vert:sp,distanceRGBA_frag:ap,equirect_vert:op,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:up,meshbasic_vert:fp,meshbasic_frag:hp,meshlambert_vert:dp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:_p,meshnormal_frag:vp,meshphong_vert:bp,meshphong_frag:xp,meshphysical_vert:yp,meshphysical_frag:wp,meshtoon_vert:Mp,meshtoon_frag:Sp,points_vert:Tp,points_frag:Ep,shadow_vert:Ap,shadow_frag:Cp,sprite_vert:Lp,sprite_frag:Dp},be={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new bn},uv2Transform:{value:new bn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bn}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bn}}},zn={basic:{uniforms:sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:sn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:sn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:sn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:sn([be.points,be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:sn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:sn([be.common,be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:sn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:sn([be.sprite,be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new bn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:sn([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:sn([be.lights,be.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};zn.physical={uniforms:sn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new je(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const fs={r:0,b:0,g:0};function Pp(r,e,t,n,i,s,a){const o=new Ye(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(p,v){let S=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y));const M=r.xr,A=M.getSession&&M.getSession();A&&A.environmentBlendMode==="additive"&&(y=null),y===null?d(o,l):y&&y.isColor&&(d(y,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===As)?(u===void 0&&(u=new en(new lr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:rr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,z,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=y.encoding!==gt,(h!==y||f!==y.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new en(new Ds(2,2),new Rn({name:"BackgroundMaterial",uniforms:rr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=y.encoding!==gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,v){p.getRGB(fs,Pc(r)),n.buffers.color.setClear(fs.r,fs.g,fs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(o,l)},render:g}}function Rp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(V,F,U,$,Y){let re=!1;if(a){const te=d($,U,F);c!==te&&(c=te,m(c.object)),re=v(V,$,U,Y),re&&S(V,$,U,Y)}else{const te=F.wireframe===!0;(c.geometry!==$.id||c.program!==U.id||c.wireframe!==te)&&(c.geometry=$.id,c.program=U.id,c.wireframe=te,re=!0)}Y!==null&&t.update(Y,34963),(re||u)&&(u=!1,b(V,F,U,$),Y!==null&&r.bindBuffer(34963,t.get(Y).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(V){return n.isWebGL2?r.bindVertexArray(V):s.bindVertexArrayOES(V)}function g(V){return n.isWebGL2?r.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function d(V,F,U){const $=U.wireframe===!0;let Y=o[V.id];Y===void 0&&(Y={},o[V.id]=Y);let re=Y[F.id];re===void 0&&(re={},Y[F.id]=re);let te=re[$];return te===void 0&&(te=p(f()),re[$]=te),te}function p(V){const F=[],U=[],$=[];for(let Y=0;Y<i;Y++)F[Y]=0,U[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:$,object:V,attributes:{},index:null}}function v(V,F,U,$){const Y=c.attributes,re=F.attributes;let te=0;const P=U.getAttributes();for(const q in P)if(P[q].location>=0){const J=Y[q];let ee=re[q];if(ee===void 0&&(q==="instanceMatrix"&&V.instanceMatrix&&(ee=V.instanceMatrix),q==="instanceColor"&&V.instanceColor&&(ee=V.instanceColor)),J===void 0||J.attribute!==ee||ee&&J.data!==ee.data)return!0;te++}return c.attributesNum!==te||c.index!==$}function S(V,F,U,$){const Y={},re=F.attributes;let te=0;const P=U.getAttributes();for(const q in P)if(P[q].location>=0){let J=re[q];J===void 0&&(q==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),q==="instanceColor"&&V.instanceColor&&(J=V.instanceColor));const ee={};ee.attribute=J,J&&J.data&&(ee.data=J.data),Y[q]=ee,te++}c.attributes=Y,c.attributesNum=te,c.index=$}function y(){const V=c.newAttributes;for(let F=0,U=V.length;F<U;F++)V[F]=0}function M(V){A(V,0)}function A(V,F){const U=c.newAttributes,$=c.enabledAttributes,Y=c.attributeDivisors;U[V]=1,$[V]===0&&(r.enableVertexAttribArray(V),$[V]=1),Y[V]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,F),Y[V]=F)}function D(){const V=c.newAttributes,F=c.enabledAttributes;for(let U=0,$=F.length;U<$;U++)F[U]!==V[U]&&(r.disableVertexAttribArray(U),F[U]=0)}function z(V,F,U,$,Y,re){n.isWebGL2===!0&&(U===5124||U===5125)?r.vertexAttribIPointer(V,F,U,Y,re):r.vertexAttribPointer(V,F,U,$,Y,re)}function b(V,F,U,$){if(n.isWebGL2===!1&&(V.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Y=$.attributes,re=U.getAttributes(),te=F.defaultAttributeValues;for(const P in re){const q=re[P];if(q.location>=0){let ne=Y[P];if(ne===void 0&&(P==="instanceMatrix"&&V.instanceMatrix&&(ne=V.instanceMatrix),P==="instanceColor"&&V.instanceColor&&(ne=V.instanceColor)),ne!==void 0){const J=ne.normalized,ee=ne.itemSize,k=t.get(ne);if(k===void 0)continue;const le=k.buffer,me=k.type,Ce=k.bytesPerElement;if(ne.isInterleavedBufferAttribute){const ye=ne.data,nt=ye.stride,qe=ne.offset;if(ye.isInstancedInterleavedBuffer){for(let ze=0;ze<q.locationSize;ze++)A(q.location+ze,ye.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ze=0;ze<q.locationSize;ze++)M(q.location+ze);r.bindBuffer(34962,le);for(let ze=0;ze<q.locationSize;ze++)z(q.location+ze,ee/q.locationSize,me,J,nt*Ce,(qe+ee/q.locationSize*ze)*Ce)}else{if(ne.isInstancedBufferAttribute){for(let ye=0;ye<q.locationSize;ye++)A(q.location+ye,ne.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<q.locationSize;ye++)M(q.location+ye);r.bindBuffer(34962,le);for(let ye=0;ye<q.locationSize;ye++)z(q.location+ye,ee/q.locationSize,me,J,ee*Ce,ee/q.locationSize*ye*Ce)}}else if(te!==void 0){const J=te[P];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(q.location,J);break;case 3:r.vertexAttrib3fv(q.location,J);break;case 4:r.vertexAttrib4fv(q.location,J);break;default:r.vertexAttrib1fv(q.location,J)}}}}D()}function I(){Q();for(const V in o){const F=o[V];for(const U in F){const $=F[U];for(const Y in $)g($[Y].object),delete $[Y];delete F[U]}delete o[V]}}function L(V){if(o[V.id]===void 0)return;const F=o[V.id];for(const U in F){const $=F[U];for(const Y in $)g($[Y].object),delete $[Y];delete F[U]}delete o[V.id]}function X(V){for(const F in o){const U=o[F];if(U[V.id]===void 0)continue;const $=U[V.id];for(const Y in $)g($[Y].object),delete $[Y];delete U[V.id]}}function Q(){H(),u=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:H,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:X,initAttributes:y,enableAttribute:M,disableUnusedAttributes:D}}function Ip(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Np(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),p=r.getParameter(36347),v=r.getParameter(36348),S=r.getParameter(36349),y=f>0,M=a||e.has("OES_texture_float"),A=y&&M,D=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:D}}function kp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new vi,o=new bn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,v=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,y=S*4;let M=v.clippingState||null;l.value=M,M=u(g,f,y,m);for(let A=0;A!==y;++A)M[A]=t[A];v.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const v=m+d*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<v)&&(p=new Float32Array(v));for(let y=0,M=m;y!==d;++y,M+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Op(r){let e=new WeakMap;function t(a,o){return o===Aa?a.mapping=er:o===Ca&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Aa||o===Ca)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zf(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Br extends Ga{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Qo=[.125,.215,.35,.446,.526,.582],xi=20,_a=new Br,$o=new Ye;let va=null;const bi=(1+Math.sqrt(5))/2,Yi=1/bi,el=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,bi,Yi),new B(0,bi,-Yi),new B(Yi,0,bi),new B(-Yi,0,bi),new B(bi,Yi,0),new B(-bi,Yi,0)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){va=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va),e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Ir,format:Mn,encoding:ci,depthBuffer:!1},i=nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(s)),this._blurMaterial=zp(s,e,t)}return i}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,i){const o=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($o),u.toneMapping=Bn,u.autoClear=!1;const m=new ir({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new en(new lr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy($o),d=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):S===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const y=this._cubeSize;hs(i,S*y,v>2?y:0,y,y),u.setRenderTarget(i),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===er||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,_a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=el[(i-1)%el.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xi-1),d=s/g,p=isFinite(s)?1+Math.floor(u*d):xi;p>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);const v=[];let S=0;for(let z=0;z<xi;++z){const b=z/d,I=Math.exp(-b*b/2);v.push(I),z===0?S+=I:z<p&&(S+=2*I)}for(let z=0;z<v.length;z++)v[z]=v[z]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const M=this._sizeLods[i],A=3*M*(i>y-Ji?i-y+Ji:0),D=4*(this._cubeSize-M);hs(t,A,D,3*M,2*M),l.setRenderTarget(t),l.render(h,_a)}}function Fp(r){const e=[],t=[],n=[];let i=r;const s=r-Ji+1+Qo.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ji?l=Qo[a-r+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,v=1,S=new Float32Array(d*g*m),y=new Float32Array(p*g*m),M=new Float32Array(v*g*m);for(let D=0;D<m;D++){const z=D%3*2/3-1,b=D>2?0:-1,I=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];S.set(I,d*g*D),y.set(f,p*g*D);const L=[D,D,D,D,D,D];M.set(L,v*g*D)}const A=new gn;A.setAttribute("position",new xn(S,d)),A.setAttribute("uv",new xn(y,p)),A.setAttribute("faceIndex",new xn(M,v)),e.push(A),i>Ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nl(r,e,t){const n=new Gn(r,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function zp(r,e,t){const n=new Float32Array(xi),i=new B(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function il(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function rl(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ha(){return`

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
	`}function Up(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Aa||l===Ca,u=l===er||l===tr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new tl(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new tl(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Bp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vp(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,v=d.length;p<v;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let y=0,M=S.length;y<M;y+=3){const A=S[y+0],D=S[y+1],z=S[y+2];f.push(A,D,D,z,z,A)}}else{const S=g.array;d=g.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const A=y+0,D=y+1,z=y+2;f.push(A,D,D,z,z,A)}}const p=new(Sc(f)?Dc:Lc)(f,1);p.version=d;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Gp(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,o,f*l),t.update(m,s,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,o,f*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Hp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wp(r,e){return r[0]-e[0]}function jp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function qp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==d){let F=function(){H.dispose(),s.delete(u),u.removeEventListener("dispose",F)};p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],z=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let I=0;y===!0&&(I=1),M===!0&&(I=2),A===!0&&(I=3);let L=u.attributes.position.count*I,X=1;L>e.maxTextureSize&&(X=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const Q=new Float32Array(L*X*4*d),H=new Cc(Q,L,X,d);H.type=ai,H.needsUpdate=!0;const V=I*4;for(let U=0;U<d;U++){const $=D[U],Y=z[U],re=b[U],te=L*X*4*U;for(let P=0;P<$.count;P++){const q=P*V;y===!0&&(a.fromBufferAttribute($,P),Q[te+q+0]=a.x,Q[te+q+1]=a.y,Q[te+q+2]=a.z,Q[te+q+3]=0),M===!0&&(a.fromBufferAttribute(Y,P),Q[te+q+4]=a.x,Q[te+q+5]=a.y,Q[te+q+6]=a.z,Q[te+q+7]=0),A===!0&&(a.fromBufferAttribute(re,P),Q[te+q+8]=a.x,Q[te+q+9]=a.y,Q[te+q+10]=a.z,Q[te+q+11]=re.itemSize===4?a.w:1)}}p={count:d,texture:H,size:new je(L,X)},s.set(u,p),u.addEventListener("dispose",F)}let v=0;for(let y=0;y<m.length;y++)v+=m[y];const S=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let M=0;M<g;M++)d[M]=[M,0];n[u.id]=d}for(let M=0;M<g;M++){const A=d[M];A[0]=M,A[1]=m[M]}d.sort(jp);for(let M=0;M<8;M++)M<g&&d[M][1]?(o[M][0]=d[M][0],o[M][1]=d[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Wp);const p=u.morphAttributes.position,v=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const A=o[M],D=A[0],z=A[1];D!==Number.MAX_SAFE_INTEGER&&z?(p&&u.getAttribute("morphTarget"+M)!==p[D]&&u.setAttribute("morphTarget"+M,p[D]),v&&u.getAttribute("morphNormal"+M)!==v[D]&&u.setAttribute("morphNormal"+M,v[D]),i[M]=z,S+=z):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),v&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Xp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const kc=new cn,Oc=new Cc,Fc=new Nf,zc=new Ic,sl=[],al=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function cr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=sl[i];if(s===void 0&&(s=new Float32Array(i),sl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ps(r,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Yp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2fv(this.addr,e),Ht(t,e)}}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;r.uniform3fv(this.addr,e),Ht(t,e)}}function Jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4fv(this.addr,e),Ht(t,e)}}function Qp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;cl.set(n),r.uniformMatrix2fv(this.addr,!1,cl),Ht(t,n)}}function $p(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;ll.set(n),r.uniformMatrix3fv(this.addr,!1,ll),Ht(t,n)}}function em(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;ol.set(n),r.uniformMatrix4fv(this.addr,!1,ol),Ht(t,n)}}function tm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function nm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2iv(this.addr,e),Ht(t,e)}}function im(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3iv(this.addr,e),Ht(t,e)}}function rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4iv(this.addr,e),Ht(t,e)}}function sm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2uiv(this.addr,e),Ht(t,e)}}function om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3uiv(this.addr,e),Ht(t,e)}}function lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4uiv(this.addr,e),Ht(t,e)}}function cm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||kc,i)}function um(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fc,i)}function fm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zc,i)}function hm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Oc,i)}function dm(r){switch(r){case 5126:return Yp;case 35664:return Zp;case 35665:return Kp;case 35666:return Jp;case 35674:return Qp;case 35675:return $p;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return sm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return hm}}function pm(r,e){r.uniform1fv(this.addr,e)}function mm(r,e){const t=cr(e,this.size,2);r.uniform2fv(this.addr,t)}function gm(r,e){const t=cr(e,this.size,3);r.uniform3fv(this.addr,t)}function _m(r,e){const t=cr(e,this.size,4);r.uniform4fv(this.addr,t)}function vm(r,e){const t=cr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bm(r,e){const t=cr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function xm(r,e){const t=cr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ym(r,e){r.uniform1iv(this.addr,e)}function wm(r,e){r.uniform2iv(this.addr,e)}function Mm(r,e){r.uniform3iv(this.addr,e)}function Sm(r,e){r.uniform4iv(this.addr,e)}function Tm(r,e){r.uniform1uiv(this.addr,e)}function Em(r,e){r.uniform2uiv(this.addr,e)}function Am(r,e){r.uniform3uiv(this.addr,e)}function Cm(r,e){r.uniform4uiv(this.addr,e)}function Lm(r,e,t){const n=this.cache,i=e.length,s=Ps(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||kc,s[a])}function Dm(r,e,t){const n=this.cache,i=e.length,s=Ps(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Fc,s[a])}function Pm(r,e,t){const n=this.cache,i=e.length,s=Ps(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||zc,s[a])}function Rm(r,e,t){const n=this.cache,i=e.length,s=Ps(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Oc,s[a])}function Im(r){switch(r){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return vm;case 35675:return bm;case 35676:return xm;case 5124:case 35670:return ym;case 35667:case 35671:return wm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return Tm;case 36294:return Em;case 36295:return Am;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Rm}}class Nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dm(t.type)}}class km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Im(t.type)}}class Om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function ul(r,e){r.seq.push(e),r.map[e.id]=e}function Fm(r,e,t){const n=r.name,i=n.length;for(ba.lastIndex=0;;){const s=ba.exec(n),a=ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ul(t,c===void 0?new Nm(o,r,e):new km(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Om(o),ul(t,h)),t=h}}}class gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Fm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function fl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let zm=0;function Um(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Bm(r){switch(r){case ci:return["Linear","( value )"];case gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function hl(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Um(r.getShaderSource(e),a)}else return i}function Vm(r,e){const t=Bm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gm(r,e){let t;switch(e){case Yu:t="Linear";break;case Zu:t="Reinhard";break;case Ku:t="OptimizedCineon";break;case xc:t="ACESFilmic";break;case Ju:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cr).join(`
`)}function Wm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Cr(r){return r!==""}function dl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(r){return r.replace(qm,Xm)}function Xm(r,e){const t=Qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ra(t)}const Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(r){return r.replace(Ym,Zm)}function Zm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Km(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function Jm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function $m(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Es:e="ENVMAP_BLENDING_MULTIPLY";break;case qu:e="ENVMAP_BLENDING_MIX";break;case Xu:e="ENVMAP_BLENDING_ADD";break}return e}function eg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tg(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Km(t),c=Jm(t),u=Qm(t),h=$m(t),f=eg(t),m=t.isWebGL2?"":Hm(t),g=Wm(s),d=i.createProgram();let p,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Cr).join(`
`),p.length>0&&(p+=`
`),v=[m,g].filter(Cr).join(`
`),v.length>0&&(v+=`
`)):(p=[gl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),v=[m,gl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.encodings_pars_fragment,Vm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Ra(a),a=dl(a,t),a=pl(a,t),o=Ra(o),o=dl(o,t),o=pl(o,t),a=ml(a),o=ml(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=S+p+a,M=S+v+o,A=fl(i,35633,y),D=fl(i,35632,M);if(i.attachShader(d,A),i.attachShader(d,D),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const I=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(A).trim(),X=i.getShaderInfoLog(D).trim();let Q=!0,H=!0;if(i.getProgramParameter(d,35714)===!1){Q=!1;const V=hl(i,A,"vertex"),F=hl(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+I+`
`+V+`
`+F)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||X==="")&&(H=!1);H&&(this.diagnostics={runnable:Q,programLog:I,vertexShader:{log:L,prefix:p},fragmentShader:{log:X,prefix:v}})}i.deleteShader(A),i.deleteShader(D);let z;this.getUniforms=function(){return z===void 0&&(z=new gs(i,d)),z};let b;return this.getAttributes=function(){return b===void 0&&(b=jm(i,d)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=zm++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=A,this.fragmentShader=D,this}let ng=0;class ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rg(e),t.set(e,n)),n}}class rg{constructor(e){this.id=ng++,this.code=e,this.usedTimes=0}}function sg(r,e,t,n,i,s,a){const o=new Va,l=new ig,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b,I,L,X,Q){const H=X.fog,V=Q.geometry,F=b.isMeshStandardMaterial?X.environment:null,U=(b.isMeshStandardMaterial?t:e).get(b.envMap||F),$=U&&U.mapping===As?U.image.height:null,Y=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=re!==void 0?re.length:0;let P=0;V.morphAttributes.position!==void 0&&(P=1),V.morphAttributes.normal!==void 0&&(P=2),V.morphAttributes.color!==void 0&&(P=3);let q,ne,J,ee;if(Y){const nt=zn[Y];q=nt.vertexShader,ne=nt.fragmentShader}else q=b.vertexShader,ne=b.fragmentShader,l.update(b),J=l.getVertexShaderID(b),ee=l.getFragmentShaderID(b);const k=r.getRenderTarget(),le=b.alphaTest>0,me=b.clearcoat>0,Ce=b.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:b.type,vertexShader:q,fragmentShader:ne,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:k===null?r.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:ci,map:!!b.map,matcap:!!b.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:$,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===vf,tangentSpaceNormalMap:b.normalMapType===za,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===gt,clearcoat:me,clearcoatMap:me&&!!b.clearcoatMap,clearcoatRoughnessMap:me&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!b.clearcoatNormalMap,iridescence:Ce,iridescenceMap:Ce&&!!b.iridescenceMap,iridescenceThicknessMap:Ce&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Qi,alphaMap:!!b.alphaMap,alphaTest:le,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!V.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!H,useFog:b.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:P,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Bn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ts,flipSided:b.side===Tn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)I.push(L),I.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(v(I,b),S(I,b),I.push(r.outputEncoding)),I.push(b.customProgramCacheKey),I.join()}function v(b,I){b.push(I.precision),b.push(I.outputEncoding),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.combine),b.push(I.vertexUvs),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function S(b,I){o.disableAll(),I.isWebGL2&&o.enable(0),I.supportsVertexTextures&&o.enable(1),I.instancing&&o.enable(2),I.instancingColor&&o.enable(3),I.map&&o.enable(4),I.matcap&&o.enable(5),I.envMap&&o.enable(6),I.lightMap&&o.enable(7),I.aoMap&&o.enable(8),I.emissiveMap&&o.enable(9),I.bumpMap&&o.enable(10),I.normalMap&&o.enable(11),I.objectSpaceNormalMap&&o.enable(12),I.tangentSpaceNormalMap&&o.enable(13),I.clearcoat&&o.enable(14),I.clearcoatMap&&o.enable(15),I.clearcoatRoughnessMap&&o.enable(16),I.clearcoatNormalMap&&o.enable(17),I.iridescence&&o.enable(18),I.iridescenceMap&&o.enable(19),I.iridescenceThicknessMap&&o.enable(20),I.displacementMap&&o.enable(21),I.specularMap&&o.enable(22),I.roughnessMap&&o.enable(23),I.metalnessMap&&o.enable(24),I.gradientMap&&o.enable(25),I.alphaMap&&o.enable(26),I.alphaTest&&o.enable(27),I.vertexColors&&o.enable(28),I.vertexAlphas&&o.enable(29),I.vertexUvs&&o.enable(30),I.vertexTangents&&o.enable(31),I.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.skinning&&o.enable(4),I.morphTargets&&o.enable(5),I.morphNormals&&o.enable(6),I.morphColors&&o.enable(7),I.premultipliedAlpha&&o.enable(8),I.shadowMapEnabled&&o.enable(9),I.physicallyCorrectLights&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.specularIntensityMap&&o.enable(15),I.specularColorMap&&o.enable(16),I.transmission&&o.enable(17),I.transmissionMap&&o.enable(18),I.thicknessMap&&o.enable(19),I.sheen&&o.enable(20),I.sheenColorMap&&o.enable(21),I.sheenRoughnessMap&&o.enable(22),I.decodeVideoTexture&&o.enable(23),I.opaque&&o.enable(24),b.push(o.mask)}function y(b){const I=g[b.type];let L;if(I){const X=zn[I];L=Rc.clone(X.uniforms)}else L=b.uniforms;return L}function M(b,I){let L;for(let X=0,Q=c.length;X<Q;X++){const H=c[X];if(H.cacheKey===I){L=H,++L.usedTimes;break}}return L===void 0&&(L=new tg(r,I,b,s),c.push(L)),L}function A(b){if(--b.usedTimes===0){const I=c.indexOf(b);c[I]=c[c.length-1],c.pop(),b.destroy()}}function D(b){l.remove(b)}function z(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:A,releaseShaderCache:D,programs:c,dispose:z}}function ag(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function og(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _l(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},r[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=m,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=d,v.group=p),e++,v}function o(h,f,m,g,d,p){const v=a(h,f,m,g,d,p);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function l(h,f,m,g,d,p){const v=a(h,f,m,g,d,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function c(h,f){t.length>1&&t.sort(h||og),n.length>1&&n.sort(f||_l),i.length>1&&i.sort(f||_l)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function lg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new vl,r.set(n,[a])):i>=s.length?(a=new vl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function cg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function ug(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fg=0;function hg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dg(r,e){const t=new cg,n=ug(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new B);const s=new B,a=new Ke,o=new Ke;function l(u,h){let f=0,m=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let d=0,p=0,v=0,S=0,y=0,M=0,A=0,D=0,z=0,b=0;u.sort(hg);const I=h!==!0?Math.PI:1;for(let X=0,Q=u.length;X<Q;X++){const H=u[X],V=H.color,F=H.intensity,U=H.distance,$=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=V.r*F*I,m+=V.g*F*I,g+=V.b*F*I;else if(H.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(H.sh.coefficients[Y],F);else if(H.isDirectionalLight){const Y=t.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity*I),H.castShadow){const re=H.shadow,te=n.get(H);te.shadowBias=re.bias,te.shadowNormalBias=re.normalBias,te.shadowRadius=re.radius,te.shadowMapSize=re.mapSize,i.directionalShadow[d]=te,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=H.shadow.matrix,M++}i.directional[d]=Y,d++}else if(H.isSpotLight){const Y=t.get(H);Y.position.setFromMatrixPosition(H.matrixWorld),Y.color.copy(V).multiplyScalar(F*I),Y.distance=U,Y.coneCos=Math.cos(H.angle),Y.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Y.decay=H.decay,i.spot[v]=Y;const re=H.shadow;if(H.map&&(i.spotLightMap[z]=H.map,z++,re.updateMatrices(H),H.castShadow&&b++),i.spotLightMatrix[v]=re.matrix,H.castShadow){const te=n.get(H);te.shadowBias=re.bias,te.shadowNormalBias=re.normalBias,te.shadowRadius=re.radius,te.shadowMapSize=re.mapSize,i.spotShadow[v]=te,i.spotShadowMap[v]=$,D++}v++}else if(H.isRectAreaLight){const Y=t.get(H);Y.color.copy(V).multiplyScalar(F),Y.halfWidth.set(H.width*.5,0,0),Y.halfHeight.set(0,H.height*.5,0),i.rectArea[S]=Y,S++}else if(H.isPointLight){const Y=t.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity*I),Y.distance=H.distance,Y.decay=H.decay,H.castShadow){const re=H.shadow,te=n.get(H);te.shadowBias=re.bias,te.shadowNormalBias=re.normalBias,te.shadowRadius=re.radius,te.shadowMapSize=re.mapSize,te.shadowCameraNear=re.camera.near,te.shadowCameraFar=re.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=H.shadow.matrix,A++}i.point[p]=Y,p++}else if(H.isHemisphereLight){const Y=t.get(H);Y.skyColor.copy(H.color).multiplyScalar(F*I),Y.groundColor.copy(H.groundColor).multiplyScalar(F*I),i.hemi[y]=Y,y++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==S||L.hemiLength!==y||L.numDirectionalShadows!==M||L.numPointShadows!==A||L.numSpotShadows!==D||L.numSpotMaps!==z)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=S,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=D+z-b,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=b,L.directionalLength=d,L.pointLength=p,L.spotLength=v,L.rectAreaLength=S,L.hemiLength=y,L.numDirectionalShadows=M,L.numPointShadows=A,L.numSpotShadows=D,L.numSpotMaps=z,i.version=fg++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const v=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const M=u[S];if(M.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(v),f++}else if(M.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(v),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(v),g++}else if(M.isRectAreaLight){const A=i.rectArea[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(v),o.identity(),a.copy(M.matrixWorld),a.premultiply(v),o.extractRotation(a),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),d++}else if(M.isPointLight){const A=i.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(v),m++}else if(M.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:i}}function bl(r,e){const t=new dg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function pg(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new bl(r,e),t.set(s,[l])):a>=o.length?(l=new bl(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Uc extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mg extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
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
}`;function vg(r,e,t){let n=new Ls;const i=new je,s=new je,a=new _t,o=new Uc({depthPacking:_f}),l=new mg,c={},u=t.maxTextureSize,h={0:Tn,1:li,2:Ts},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:gg,fragmentShader:_g}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new en(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc,this.render=function(M,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const z=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),L=r.state;L.setBlending(oi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let X=0,Q=M.length;X<Q;X++){const H=M[X],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const F=V.getFrameExtents();if(i.multiply(F),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/F.x),i.x=s.x*F.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/F.y),i.y=s.y*F.y,V.mapSize.y=s.y)),V.map===null){const $=this.type!==Er?{minFilter:Yt,magFilter:Yt}:{};V.map=new Gn(i.x,i.y,$),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const U=V.getViewportCount();for(let $=0;$<U;$++){const Y=V.getViewport($);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),L.viewport(a),V.updateMatrices(H,$),n=V.getFrustum(),y(A,D,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===Er&&v(V,D),V.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(z,b,I)};function v(M,A){const D=e.update(d);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Gn(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(A,null,D,f,d,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(A,null,D,m,d,null)}function S(M,A,D,z,b,I){let L=null;const X=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(X!==void 0)L=X;else if(L=D.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Q=L.uuid,H=A.uuid;let V=c[Q];V===void 0&&(V={},c[Q]=V);let F=V[H];F===void 0&&(F=L.clone(),V[H]=F),L=F}return L.visible=A.visible,L.wireframe=A.wireframe,I===Er?L.side=A.shadowSide!==null?A.shadowSide:A.side:L.side=A.shadowSide!==null?A.shadowSide:h[A.side],L.alphaMap=A.alphaMap,L.alphaTest=A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,D.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(D.matrixWorld),L.nearDistance=z,L.farDistance=b),L}function y(M,A,D,z,b){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Er)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const X=e.update(M),Q=M.material;if(Array.isArray(Q)){const H=X.groups;for(let V=0,F=H.length;V<F;V++){const U=H[V],$=Q[U.materialIndex];if($&&$.visible){const Y=S(M,$,z,D.near,D.far,b);r.renderBufferDirect(D,null,X,Y,M,U)}}}else if(Q.visible){const H=S(M,Q,z,D.near,D.far,b);r.renderBufferDirect(D,null,X,H,M,null)}}const L=M.children;for(let X=0,Q=L.length;X<Q;X++)y(L[X],A,D,z,b)}}function bg(r,e,t){const n=t.isWebGL2;function i(){let G=!1;const se=new _t;let he=null;const Te=new _t(0,0,0,0);return{setMask:function(Ne){he!==Ne&&!G&&(r.colorMask(Ne,Ne,Ne,Ne),he=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,ut,Ot,Ut,jn){jn===!0&&(Ne*=Ut,ut*=Ut,Ot*=Ut),se.set(Ne,ut,Ot,Ut),Te.equals(se)===!1&&(r.clearColor(Ne,ut,Ot,Ut),Te.copy(se))},reset:function(){G=!1,he=null,Te.set(-1,0,0,0)}}}function s(){let G=!1,se=null,he=null,Te=null;return{setTest:function(Ne){Ne?le(2929):me(2929)},setMask:function(Ne){se!==Ne&&!G&&(r.depthMask(Ne),se=Ne)},setFunc:function(Ne){if(he!==Ne){switch(Ne){case Uu:r.depthFunc(512);break;case Bu:r.depthFunc(519);break;case Vu:r.depthFunc(513);break;case Ea:r.depthFunc(515);break;case Gu:r.depthFunc(514);break;case Hu:r.depthFunc(518);break;case Wu:r.depthFunc(516);break;case ju:r.depthFunc(517);break;default:r.depthFunc(515)}he=Ne}},setLocked:function(Ne){G=Ne},setClear:function(Ne){Te!==Ne&&(r.clearDepth(Ne),Te=Ne)},reset:function(){G=!1,se=null,he=null,Te=null}}}function a(){let G=!1,se=null,he=null,Te=null,Ne=null,ut=null,Ot=null,Ut=null,jn=null;return{setTest:function(st){G||(st?le(2960):me(2960))},setMask:function(st){se!==st&&!G&&(r.stencilMask(st),se=st)},setFunc:function(st,yn,fn){(he!==st||Te!==yn||Ne!==fn)&&(r.stencilFunc(st,yn,fn),he=st,Te=yn,Ne=fn)},setOp:function(st,yn,fn){(ut!==st||Ot!==yn||Ut!==fn)&&(r.stencilOp(st,yn,fn),ut=st,Ot=yn,Ut=fn)},setLocked:function(st){G=st},setClear:function(st){jn!==st&&(r.clearStencil(st),jn=st)},reset:function(){G=!1,se=null,he=null,Te=null,Ne=null,ut=null,Ot=null,Ut=null,jn=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,v=!1,S=null,y=null,M=null,A=null,D=null,z=null,b=null,I=!1,L=null,X=null,Q=null,H=null,V=null;const F=r.getParameter(35661);let U=!1,$=0;const Y=r.getParameter(7938);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),U=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),U=$>=2);let re=null,te={};const P=r.getParameter(3088),q=r.getParameter(2978),ne=new _t().fromArray(P),J=new _t().fromArray(q);function ee(G,se,he){const Te=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(G,Ne),r.texParameteri(G,10241,9728),r.texParameteri(G,10240,9728);for(let ut=0;ut<he;ut++)r.texImage2D(se+ut,0,6408,1,1,0,6408,5121,Te);return Ne}const k={};k[3553]=ee(3553,3553,1),k[34067]=ee(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),le(2929),l.setFunc(Ea),ue(!1),it(oo),le(2884),It(oi);function le(G){f[G]!==!0&&(r.enable(G),f[G]=!0)}function me(G){f[G]!==!1&&(r.disable(G),f[G]=!1)}function Ce(G,se){return m[G]!==se?(r.bindFramebuffer(G,se),m[G]=se,n&&(G===36009&&(m[36160]=se),G===36160&&(m[36009]=se)),!0):!1}function ye(G,se){let he=d,Te=!1;if(G)if(he=g.get(se),he===void 0&&(he=[],g.set(se,he)),G.isWebGLMultipleRenderTargets){const Ne=G.texture;if(he.length!==Ne.length||he[0]!==36064){for(let ut=0,Ot=Ne.length;ut<Ot;ut++)he[ut]=36064+ut;he.length=Ne.length,Te=!0}}else he[0]!==36064&&(he[0]=36064,Te=!0);else he[0]!==1029&&(he[0]=1029,Te=!0);Te&&(t.isWebGL2?r.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function nt(G){return p!==G?(r.useProgram(G),p=G,!0):!1}const qe={[Ki]:32774,[Cu]:32778,[Lu]:32779};if(n)qe[fo]=32775,qe[ho]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(qe[fo]=G.MIN_EXT,qe[ho]=G.MAX_EXT)}const ze={[Du]:0,[Pu]:1,[Ru]:768,[vc]:770,[zu]:776,[Ou]:774,[Nu]:772,[Iu]:769,[bc]:771,[Fu]:775,[ku]:773};function It(G,se,he,Te,Ne,ut,Ot,Ut){if(G===oi){v===!0&&(me(3042),v=!1);return}if(v===!1&&(le(3042),v=!0),G!==Au){if(G!==S||Ut!==I){if((y!==Ki||D!==Ki)&&(r.blendEquation(32774),y=Ki,D=Ki),Ut)switch(G){case Qi:r.blendFuncSeparate(1,771,1,771);break;case lo:r.blendFunc(1,1);break;case co:r.blendFuncSeparate(0,769,0,1);break;case uo:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Qi:r.blendFuncSeparate(770,771,1,771);break;case lo:r.blendFunc(770,1);break;case co:r.blendFuncSeparate(0,769,0,1);break;case uo:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,A=null,z=null,b=null,S=G,I=Ut}return}Ne=Ne||se,ut=ut||he,Ot=Ot||Te,(se!==y||Ne!==D)&&(r.blendEquationSeparate(qe[se],qe[Ne]),y=se,D=Ne),(he!==M||Te!==A||ut!==z||Ot!==b)&&(r.blendFuncSeparate(ze[he],ze[Te],ze[ut],ze[Ot]),M=he,A=Te,z=ut,b=Ot),S=G,I=!1}function Dt(G,se){G.side===Ts?me(2884):le(2884);let he=G.side===Tn;se&&(he=!he),ue(he),G.blending===Qi&&G.transparent===!1?It(oi):It(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);const Te=G.stencilWrite;c.setTest(Te),Te&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),dt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?le(32926):me(32926)}function ue(G){L!==G&&(G?r.frontFace(2304):r.frontFace(2305),L=G)}function it(G){G!==Tu?(le(2884),G!==X&&(G===oo?r.cullFace(1029):G===Eu?r.cullFace(1028):r.cullFace(1032))):me(2884),X=G}function bt(G){G!==Q&&(U&&r.lineWidth(G),Q=G)}function dt(G,se,he){G?(le(32823),(H!==se||V!==he)&&(r.polygonOffset(se,he),H=se,V=he)):me(32823)}function tn(G){G?le(3089):me(3089)}function Jt(G){G===void 0&&(G=33984+F-1),re!==G&&(r.activeTexture(G),re=G)}function N(G,se,he){he===void 0&&(re===null?he=33984+F-1:he=re);let Te=te[he];Te===void 0&&(Te={type:void 0,texture:void 0},te[he]=Te),(Te.type!==G||Te.texture!==se)&&(re!==he&&(r.activeTexture(he),re=he),r.bindTexture(G,se||k[G]),Te.type=G,Te.texture=se)}function C(){const G=te[re];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ie(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function W(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(G){ne.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),ne.copy(G))}function De(G){J.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function et(G,se){let he=h.get(se);he===void 0&&(he=new WeakMap,h.set(se,he));let Te=he.get(G);Te===void 0&&(Te=r.getUniformBlockIndex(se,G.name),he.set(G,Te))}function rt(G,se){const Te=h.get(se).get(G);u.get(se)!==Te&&(r.uniformBlockBinding(se,Te,G.__bindingPointIndex),u.set(se,Te))}function pt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},re=null,te={},m={},g=new WeakMap,d=[],p=null,v=!1,S=null,y=null,M=null,A=null,D=null,z=null,b=null,I=!1,L=null,X=null,Q=null,H=null,V=null,ne.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:le,disable:me,bindFramebuffer:Ce,drawBuffers:ye,useProgram:nt,setBlending:It,setMaterial:Dt,setFlipSided:ue,setCullFace:it,setLineWidth:bt,setPolygonOffset:dt,setScissorTest:tn,activeTexture:Jt,bindTexture:N,unbindTexture:C,compressedTexImage2D:ie,compressedTexImage3D:pe,texImage2D:Ee,texImage3D:we,updateUBOMapping:et,uniformBlockBinding:rt,texStorage2D:W,texStorage3D:Se,texSubImage2D:_e,texSubImage3D:xe,compressedTexSubImage2D:He,compressedTexSubImage3D:O,scissor:Re,viewport:De,reset:pt}}function xg(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,C){return v?new OffscreenCanvas(N,C):Or("canvas")}function y(N,C,ie,pe){let _e=1;if((N.width>pe||N.height>pe)&&(_e=pe/Math.max(N.width,N.height)),_e<1||C===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const xe=C?bs:Math.floor,He=xe(_e*N.width),O=xe(_e*N.height);d===void 0&&(d=S(He,O));const W=ie?S(He,O):d;return W.width=He,W.height=O,W.getContext("2d").drawImage(N,0,0,He,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+He+"x"+O+")."),W}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function M(N){return Pa(N.width)&&Pa(N.height)}function A(N){return o?!1:N.wrapS!==ln||N.wrapT!==ln||N.minFilter!==Yt&&N.minFilter!==an}function D(N,C){return N.generateMipmaps&&C&&N.minFilter!==Yt&&N.minFilter!==an}function z(N){r.generateMipmap(N)}function b(N,C,ie,pe,_e=!1){if(o===!1)return C;if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let xe=C;return C===6403&&(ie===5126&&(xe=33326),ie===5131&&(xe=33325),ie===5121&&(xe=33321)),C===33319&&(ie===5126&&(xe=33328),ie===5131&&(xe=33327),ie===5121&&(xe=33323)),C===6408&&(ie===5126&&(xe=34836),ie===5131&&(xe=34842),ie===5121&&(xe=pe===gt&&_e===!1?35907:32856),ie===32819&&(xe=32854),ie===32820&&(xe=32855)),(xe===33325||xe===33326||xe===33327||xe===33328||xe===34842||xe===34836)&&e.get("EXT_color_buffer_float"),xe}function I(N,C,ie){return D(N,ie)===!0||N.isFramebufferTexture&&N.minFilter!==Yt&&N.minFilter!==an?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function L(N){return N===Yt||N===po||N===Ws?9728:9729}function X(N){const C=N.target;C.removeEventListener("dispose",X),H(C),C.isVideoTexture&&g.delete(C)}function Q(N){const C=N.target;C.removeEventListener("dispose",Q),F(C)}function H(N){const C=n.get(N);if(C.__webglInit===void 0)return;const ie=N.source,pe=p.get(ie);if(pe){const _e=pe[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&V(N),Object.keys(pe).length===0&&p.delete(ie)}n.remove(N)}function V(N){const C=n.get(N);r.deleteTexture(C.__webglTexture);const ie=N.source,pe=p.get(ie);delete pe[C.__cacheKey],a.memory.textures--}function F(N){const C=N.texture,ie=n.get(N),pe=n.get(C);if(pe.__webglTexture!==void 0&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)r.deleteFramebuffer(ie.__webglFramebuffer[_e]),ie.__webglDepthbuffer&&r.deleteRenderbuffer(ie.__webglDepthbuffer[_e]);else{if(r.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&r.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let _e=0;_e<ie.__webglColorRenderbuffer.length;_e++)ie.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(ie.__webglColorRenderbuffer[_e]);ie.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let _e=0,xe=C.length;_e<xe;_e++){const He=n.get(C[_e]);He.__webglTexture&&(r.deleteTexture(He.__webglTexture),a.memory.textures--),n.remove(C[_e])}n.remove(C),n.remove(N)}let U=0;function $(){U=0}function Y(){const N=U;return N>=l&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l),U+=1,N}function re(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.encoding),C.join()}function te(N,C){const ie=n.get(N);if(N.isVideoTexture&&tn(N),N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){const pe=N.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(ie,N,C);return}}t.bindTexture(3553,ie.__webglTexture,33984+C)}function P(N,C){const ie=n.get(N);if(N.version>0&&ie.__version!==N.version){me(ie,N,C);return}t.bindTexture(35866,ie.__webglTexture,33984+C)}function q(N,C){const ie=n.get(N);if(N.version>0&&ie.__version!==N.version){me(ie,N,C);return}t.bindTexture(32879,ie.__webglTexture,33984+C)}function ne(N,C){const ie=n.get(N);if(N.version>0&&ie.__version!==N.version){Ce(ie,N,C);return}t.bindTexture(34067,ie.__webglTexture,33984+C)}const J={[yi]:10497,[ln]:33071,[La]:33648},ee={[Yt]:9728,[po]:9984,[Ws]:9986,[an]:9729,[Qu]:9985,[Ti]:9987};function k(N,C,ie){if(ie?(r.texParameteri(N,10242,J[C.wrapS]),r.texParameteri(N,10243,J[C.wrapT]),(N===32879||N===35866)&&r.texParameteri(N,32882,J[C.wrapR]),r.texParameteri(N,10240,ee[C.magFilter]),r.texParameteri(N,10241,ee[C.minFilter])):(r.texParameteri(N,10242,33071),r.texParameteri(N,10243,33071),(N===32879||N===35866)&&r.texParameteri(N,32882,33071),(C.wrapS!==ln||C.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(N,10240,L(C.magFilter)),r.texParameteri(N,10241,L(C.minFilter)),C.minFilter!==Yt&&C.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Yt||C.minFilter!==Ws&&C.minFilter!==Ti||C.type===ai&&e.has("OES_texture_float_linear")===!1||o===!1&&C.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(r.texParameterf(N,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function le(N,C){let ie=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",X));const pe=C.source;let _e=p.get(pe);_e===void 0&&(_e={},p.set(pe,_e));const xe=re(C);if(xe!==N.__cacheKey){_e[xe]===void 0&&(_e[xe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,ie=!0),_e[xe].usedTimes++;const He=_e[N.__cacheKey];He!==void 0&&(_e[N.__cacheKey].usedTimes--,He.usedTimes===0&&V(C)),N.__cacheKey=xe,N.__webglTexture=_e[xe].texture}return ie}function me(N,C,ie){let pe=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(pe=35866),C.isData3DTexture&&(pe=32879);const _e=le(N,C),xe=C.source;t.bindTexture(pe,N.__webglTexture,33984+ie);const He=n.get(xe);if(xe.version!==He.__version||_e===!0){t.activeTexture(33984+ie),r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);const O=A(C)&&M(C.image)===!1;let W=y(C.image,O,!1,u);W=Jt(C,W);const Se=M(W)||o,Ee=s.convert(C.format,C.encoding);let we=s.convert(C.type),Re=b(C.internalFormat,Ee,we,C.encoding,C.isVideoTexture);k(pe,C,Se);let De;const et=C.mipmaps,rt=o&&C.isVideoTexture!==!0,pt=He.__version===void 0||_e===!0,G=I(C,W,Se);if(C.isDepthTexture)Re=6402,o?C.type===ai?Re=36012:C.type===wi?Re=33190:C.type===$i?Re=35056:Re=33189:C.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Mi&&Re===6402&&C.type!==wc&&C.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=wi,we=s.convert(C.type)),C.format===nr&&Re===6402&&(Re=34041,C.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=$i,we=s.convert(C.type))),pt&&(rt?t.texStorage2D(3553,1,Re,W.width,W.height):t.texImage2D(3553,0,Re,W.width,W.height,0,Ee,we,null));else if(C.isDataTexture)if(et.length>0&&Se){rt&&pt&&t.texStorage2D(3553,G,Re,et[0].width,et[0].height);for(let se=0,he=et.length;se<he;se++)De=et[se],rt?t.texSubImage2D(3553,se,0,0,De.width,De.height,Ee,we,De.data):t.texImage2D(3553,se,Re,De.width,De.height,0,Ee,we,De.data);C.generateMipmaps=!1}else rt?(pt&&t.texStorage2D(3553,G,Re,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,Ee,we,W.data)):t.texImage2D(3553,0,Re,W.width,W.height,0,Ee,we,W.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){rt&&pt&&t.texStorage3D(35866,G,Re,et[0].width,et[0].height,W.depth);for(let se=0,he=et.length;se<he;se++)De=et[se],C.format!==Mn?Ee!==null?rt?t.compressedTexSubImage3D(35866,se,0,0,0,De.width,De.height,W.depth,Ee,De.data,0,0):t.compressedTexImage3D(35866,se,Re,De.width,De.height,W.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(35866,se,0,0,0,De.width,De.height,W.depth,Ee,we,De.data):t.texImage3D(35866,se,Re,De.width,De.height,W.depth,0,Ee,we,De.data)}else{rt&&pt&&t.texStorage2D(3553,G,Re,et[0].width,et[0].height);for(let se=0,he=et.length;se<he;se++)De=et[se],C.format!==Mn?Ee!==null?rt?t.compressedTexSubImage2D(3553,se,0,0,De.width,De.height,Ee,De.data):t.compressedTexImage2D(3553,se,Re,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(3553,se,0,0,De.width,De.height,Ee,we,De.data):t.texImage2D(3553,se,Re,De.width,De.height,0,Ee,we,De.data)}else if(C.isDataArrayTexture)rt?(pt&&t.texStorage3D(35866,G,Re,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,Ee,we,W.data)):t.texImage3D(35866,0,Re,W.width,W.height,W.depth,0,Ee,we,W.data);else if(C.isData3DTexture)rt?(pt&&t.texStorage3D(32879,G,Re,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,Ee,we,W.data)):t.texImage3D(32879,0,Re,W.width,W.height,W.depth,0,Ee,we,W.data);else if(C.isFramebufferTexture){if(pt)if(rt)t.texStorage2D(3553,G,Re,W.width,W.height);else{let se=W.width,he=W.height;for(let Te=0;Te<G;Te++)t.texImage2D(3553,Te,Re,se,he,0,Ee,we,null),se>>=1,he>>=1}}else if(et.length>0&&Se){rt&&pt&&t.texStorage2D(3553,G,Re,et[0].width,et[0].height);for(let se=0,he=et.length;se<he;se++)De=et[se],rt?t.texSubImage2D(3553,se,0,0,Ee,we,De):t.texImage2D(3553,se,Re,Ee,we,De);C.generateMipmaps=!1}else rt?(pt&&t.texStorage2D(3553,G,Re,W.width,W.height),t.texSubImage2D(3553,0,0,0,Ee,we,W)):t.texImage2D(3553,0,Re,Ee,we,W);D(C,Se)&&z(pe),He.__version=xe.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Ce(N,C,ie){if(C.image.length!==6)return;const pe=le(N,C),_e=C.source;t.bindTexture(34067,N.__webglTexture,33984+ie);const xe=n.get(_e);if(_e.version!==xe.__version||pe===!0){t.activeTexture(33984+ie),r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);const He=C.isCompressedTexture||C.image[0].isCompressedTexture,O=C.image[0]&&C.image[0].isDataTexture,W=[];for(let se=0;se<6;se++)!He&&!O?W[se]=y(C.image[se],!1,!0,c):W[se]=O?C.image[se].image:C.image[se],W[se]=Jt(C,W[se]);const Se=W[0],Ee=M(Se)||o,we=s.convert(C.format,C.encoding),Re=s.convert(C.type),De=b(C.internalFormat,we,Re,C.encoding),et=o&&C.isVideoTexture!==!0,rt=xe.__version===void 0||pe===!0;let pt=I(C,Se,Ee);k(34067,C,Ee);let G;if(He){et&&rt&&t.texStorage2D(34067,pt,De,Se.width,Se.height);for(let se=0;se<6;se++){G=W[se].mipmaps;for(let he=0;he<G.length;he++){const Te=G[he];C.format!==Mn?we!==null?et?t.compressedTexSubImage2D(34069+se,he,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(34069+se,he,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(34069+se,he,0,0,Te.width,Te.height,we,Re,Te.data):t.texImage2D(34069+se,he,De,Te.width,Te.height,0,we,Re,Te.data)}}}else{G=C.mipmaps,et&&rt&&(G.length>0&&pt++,t.texStorage2D(34067,pt,De,W[0].width,W[0].height));for(let se=0;se<6;se++)if(O){et?t.texSubImage2D(34069+se,0,0,0,W[se].width,W[se].height,we,Re,W[se].data):t.texImage2D(34069+se,0,De,W[se].width,W[se].height,0,we,Re,W[se].data);for(let he=0;he<G.length;he++){const Ne=G[he].image[se].image;et?t.texSubImage2D(34069+se,he+1,0,0,Ne.width,Ne.height,we,Re,Ne.data):t.texImage2D(34069+se,he+1,De,Ne.width,Ne.height,0,we,Re,Ne.data)}}else{et?t.texSubImage2D(34069+se,0,0,0,we,Re,W[se]):t.texImage2D(34069+se,0,De,we,Re,W[se]);for(let he=0;he<G.length;he++){const Te=G[he];et?t.texSubImage2D(34069+se,he+1,0,0,we,Re,Te.image[se]):t.texImage2D(34069+se,he+1,De,we,Re,Te.image[se])}}}D(C,Ee)&&z(34067),xe.__version=_e.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function ye(N,C,ie,pe,_e){const xe=s.convert(ie.format,ie.encoding),He=s.convert(ie.type),O=b(ie.internalFormat,xe,He,ie.encoding);n.get(C).__hasExternalTextures||(_e===32879||_e===35866?t.texImage3D(_e,0,O,C.width,C.height,C.depth,0,xe,He,null):t.texImage2D(_e,0,O,C.width,C.height,0,xe,He,null)),t.bindFramebuffer(36160,N),dt(C)?f.framebufferTexture2DMultisampleEXT(36160,pe,_e,n.get(ie).__webglTexture,0,bt(C)):(_e===3553||_e>=34069&&_e<=34074)&&r.framebufferTexture2D(36160,pe,_e,n.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function nt(N,C,ie){if(r.bindRenderbuffer(36161,N),C.depthBuffer&&!C.stencilBuffer){let pe=33189;if(ie||dt(C)){const _e=C.depthTexture;_e&&_e.isDepthTexture&&(_e.type===ai?pe=36012:_e.type===wi&&(pe=33190));const xe=bt(C);dt(C)?f.renderbufferStorageMultisampleEXT(36161,xe,pe,C.width,C.height):r.renderbufferStorageMultisample(36161,xe,pe,C.width,C.height)}else r.renderbufferStorage(36161,pe,C.width,C.height);r.framebufferRenderbuffer(36160,36096,36161,N)}else if(C.depthBuffer&&C.stencilBuffer){const pe=bt(C);ie&&dt(C)===!1?r.renderbufferStorageMultisample(36161,pe,35056,C.width,C.height):dt(C)?f.renderbufferStorageMultisampleEXT(36161,pe,35056,C.width,C.height):r.renderbufferStorage(36161,34041,C.width,C.height),r.framebufferRenderbuffer(36160,33306,36161,N)}else{const pe=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let _e=0;_e<pe.length;_e++){const xe=pe[_e],He=s.convert(xe.format,xe.encoding),O=s.convert(xe.type),W=b(xe.internalFormat,He,O,xe.encoding),Se=bt(C);ie&&dt(C)===!1?r.renderbufferStorageMultisample(36161,Se,W,C.width,C.height):dt(C)?f.renderbufferStorageMultisampleEXT(36161,Se,W,C.width,C.height):r.renderbufferStorage(36161,W,C.width,C.height)}}r.bindRenderbuffer(36161,null)}function qe(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),te(C.depthTexture,0);const pe=n.get(C.depthTexture).__webglTexture,_e=bt(C);if(C.depthTexture.format===Mi)dt(C)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,pe,0,_e):r.framebufferTexture2D(36160,36096,3553,pe,0);else if(C.depthTexture.format===nr)dt(C)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,pe,0,_e):r.framebufferTexture2D(36160,33306,3553,pe,0);else throw new Error("Unknown depthTexture format")}function ze(N){const C=n.get(N),ie=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");qe(C.__webglFramebuffer,N)}else if(ie){C.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(36160,C.__webglFramebuffer[pe]),C.__webglDepthbuffer[pe]=r.createRenderbuffer(),nt(C.__webglDepthbuffer[pe],N,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),nt(C.__webglDepthbuffer,N,!1);t.bindFramebuffer(36160,null)}function It(N,C,ie){const pe=n.get(N);C!==void 0&&ye(pe.__webglFramebuffer,N,N.texture,36064,3553),ie!==void 0&&ze(N)}function Dt(N){const C=N.texture,ie=n.get(N),pe=n.get(C);N.addEventListener("dispose",Q),N.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=C.version,a.memory.textures++);const _e=N.isWebGLCubeRenderTarget===!0,xe=N.isWebGLMultipleRenderTargets===!0,He=M(N)||o;if(_e){ie.__webglFramebuffer=[];for(let O=0;O<6;O++)ie.__webglFramebuffer[O]=r.createFramebuffer()}else{if(ie.__webglFramebuffer=r.createFramebuffer(),xe)if(i.drawBuffers){const O=N.texture;for(let W=0,Se=O.length;W<Se;W++){const Ee=n.get(O[W]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&N.samples>0&&dt(N)===!1){const O=xe?C:[C];ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer);for(let W=0;W<O.length;W++){const Se=O[W];ie.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(36161,ie.__webglColorRenderbuffer[W]);const Ee=s.convert(Se.format,Se.encoding),we=s.convert(Se.type),Re=b(Se.internalFormat,Ee,we,Se.encoding,N.isXRRenderTarget===!0),De=bt(N);r.renderbufferStorageMultisample(36161,De,Re,N.width,N.height),r.framebufferRenderbuffer(36160,36064+W,36161,ie.__webglColorRenderbuffer[W])}r.bindRenderbuffer(36161,null),N.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(ie.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(36160,null)}}if(_e){t.bindTexture(34067,pe.__webglTexture),k(34067,C,He);for(let O=0;O<6;O++)ye(ie.__webglFramebuffer[O],N,C,36064,34069+O);D(C,He)&&z(34067),t.unbindTexture()}else if(xe){const O=N.texture;for(let W=0,Se=O.length;W<Se;W++){const Ee=O[W],we=n.get(Ee);t.bindTexture(3553,we.__webglTexture),k(3553,Ee,He),ye(ie.__webglFramebuffer,N,Ee,36064+W,3553),D(Ee,He)&&z(3553)}t.unbindTexture()}else{let O=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(o?O=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(O,pe.__webglTexture),k(O,C,He),ye(ie.__webglFramebuffer,N,C,36064,O),D(C,He)&&z(O),t.unbindTexture()}N.depthBuffer&&ze(N)}function ue(N){const C=M(N)||o,ie=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let pe=0,_e=ie.length;pe<_e;pe++){const xe=ie[pe];if(D(xe,C)){const He=N.isWebGLCubeRenderTarget?34067:3553,O=n.get(xe).__webglTexture;t.bindTexture(He,O),z(He),t.unbindTexture()}}}function it(N){if(o&&N.samples>0&&dt(N)===!1){const C=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ie=N.width,pe=N.height;let _e=16384;const xe=[],He=N.stencilBuffer?33306:36096,O=n.get(N),W=N.isWebGLMultipleRenderTargets===!0;if(W)for(let Se=0;Se<C.length;Se++)t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,O.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,O.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,O.__webglFramebuffer);for(let Se=0;Se<C.length;Se++){xe.push(36064+Se),N.depthBuffer&&xe.push(He);const Ee=O.__ignoreDepthValues!==void 0?O.__ignoreDepthValues:!1;if(Ee===!1&&(N.depthBuffer&&(_e|=256),N.stencilBuffer&&(_e|=1024)),W&&r.framebufferRenderbuffer(36008,36064,36161,O.__webglColorRenderbuffer[Se]),Ee===!0&&(r.invalidateFramebuffer(36008,[He]),r.invalidateFramebuffer(36009,[He])),W){const we=n.get(C[Se]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,we,0)}r.blitFramebuffer(0,0,ie,pe,0,0,ie,pe,_e,9728),m&&r.invalidateFramebuffer(36008,xe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),W)for(let Se=0;Se<C.length;Se++){t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,O.__webglColorRenderbuffer[Se]);const Ee=n.get(C[Se]).__webglTexture;t.bindFramebuffer(36160,O.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,Ee,0)}t.bindFramebuffer(36009,O.__webglMultisampledFramebuffer)}}function bt(N){return Math.min(h,N.samples)}function dt(N){const C=n.get(N);return o&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function tn(N){const C=a.render.frame;g.get(N)!==C&&(g.set(N,C),N.update())}function Jt(N,C){const ie=N.encoding,pe=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Da||ie!==ci&&(ie===gt?o===!1?e.has("EXT_sRGB")===!0&&pe===Mn?(N.format=Da,N.minFilter=an,N.generateMipmaps=!1):C=Ec.sRGBToLinear(C):(pe!==Mn||_e!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ie)),C}this.allocateTextureUnit=Y,this.resetTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=P,this.setTexture3D=q,this.setTextureCube=ne,this.rebindTextures=It,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=dt}function yg(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Ei)return 5121;if(s===nf)return 32819;if(s===rf)return 32820;if(s===$u)return 5120;if(s===ef)return 5122;if(s===wc)return 5123;if(s===tf)return 5124;if(s===wi)return 5125;if(s===ai)return 5126;if(s===Ir)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===sf)return 6406;if(s===Mn)return 6408;if(s===of)return 6409;if(s===lf)return 6410;if(s===Mi)return 6402;if(s===nr)return 34041;if(s===af)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Da)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===cf)return 6403;if(s===uf)return 36244;if(s===ff)return 33319;if(s===hf)return 33320;if(s===df)return 36249;if(s===js||s===qs||s===Xs||s===Ys)if(a===gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mo||s===go||s===_o||s===vo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===go)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_o)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bo||s===xo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===bo)return a===gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===xo)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yo||s===wo||s===Mo||s===So||s===To||s===Eo||s===Ao||s===Co||s===Lo||s===Do||s===Po||s===Ro||s===Io||s===No)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===yo)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wo)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mo)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===So)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===To)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Eo)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ao)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Co)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lo)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Do)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Po)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ro)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Io)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===No)return a===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ko)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ko)return a===gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$i?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class wg extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Un=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Mg={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),v=this._getHandJoint(c,d);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Sg extends cn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Mi,u!==Mi&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mi&&(n=wi),n===void 0&&u===nr&&(n=$i),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1}}class Tg extends Li{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const v=[],S=[],y=new Set,M=new Map,A=new Kt;A.layers.enable(1),A.viewport=new _t;const D=new Kt;D.layers.enable(2),D.viewport=new _t;const z=[A,D],b=new wg;b.layers.enable(1),b.layers.enable(2);let I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let q=v[P];return q===void 0&&(q=new xa,v[P]=q),q.getTargetRaySpace()},this.getControllerGrip=function(P){let q=v[P];return q===void 0&&(q=new xa,v[P]=q),q.getGripSpace()},this.getHand=function(P){let q=v[P];return q===void 0&&(q=new xa,v[P]=q),q.getHandSpace()};function X(P){const q=S.indexOf(P.inputSource);if(q===-1)return;const ne=v[q];ne!==void 0&&ne.dispatchEvent({type:P.type,data:P.inputSource})}function Q(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",H);for(let P=0;P<v.length;P++){const q=S[P];q!==null&&(S[P]=null,v[P].disconnect(q))}I=null,L=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:f}),p=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Ei,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let q=null,ne=null,J=null;g.depth&&(J=g.stencil?35056:33190,q=g.stencil?nr:Mi,ne=g.stencil?$i:wi);const ee={colorFormat:32856,depthFormat:J,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ee),i.updateRenderState({layers:[h]}),p=new Gn(h.textureWidth,h.textureHeight,{format:Mn,type:Ei,depthTexture:new Sg(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const k=e.properties.get(p);k.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(P){for(let q=0;q<P.removed.length;q++){const ne=P.removed[q],J=S.indexOf(ne);J>=0&&(S[J]=null,v[J].disconnect(ne))}for(let q=0;q<P.added.length;q++){const ne=P.added[q];let J=S.indexOf(ne);if(J===-1){for(let k=0;k<v.length;k++)if(k>=S.length){S.push(ne),J=k;break}else if(S[k]===null){S[k]=ne,J=k;break}if(J===-1)break}const ee=v[J];ee&&ee.connect(ne)}}const V=new B,F=new B;function U(P,q,ne){V.setFromMatrixPosition(q.matrixWorld),F.setFromMatrixPosition(ne.matrixWorld);const J=V.distanceTo(F),ee=q.projectionMatrix.elements,k=ne.projectionMatrix.elements,le=ee[14]/(ee[10]-1),me=ee[14]/(ee[10]+1),Ce=(ee[9]+1)/ee[5],ye=(ee[9]-1)/ee[5],nt=(ee[8]-1)/ee[0],qe=(k[8]+1)/k[0],ze=le*nt,It=le*qe,Dt=J/(-nt+qe),ue=Dt*-nt;q.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(ue),P.translateZ(Dt),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const it=le+Dt,bt=me+Dt,dt=ze-ue,tn=It+(J-ue),Jt=Ce*me/bt*it,N=ye*me/bt*it;P.projectionMatrix.makePerspective(dt,tn,Jt,N,it,bt)}function $(P,q){q===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(q.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;b.near=D.near=A.near=P.near,b.far=D.far=A.far=P.far,(I!==b.near||L!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,L=b.far);const q=P.parent,ne=b.cameras;$(b,q);for(let ee=0;ee<ne.length;ee++)$(ne[ee],q);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),P.matrix.copy(b.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);const J=P.children;for(let ee=0,k=J.length;ee<k;ee++)J[ee].updateMatrixWorld(!0);ne.length===2?U(b,A,D):b.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(P){h!==null&&(h.fixedFoveation=P),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=P)},this.getPlanes=function(){return y};let Y=null;function re(P,q){if(c=q.getViewerPose(l||a),m=q,c!==null){const ne=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let J=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,J=!0);for(let ee=0;ee<ne.length;ee++){const k=ne[ee];let le=null;if(f!==null)le=f.getViewport(k);else{const Ce=u.getViewSubImage(h,k);le=Ce.viewport,ee===0&&(e.setRenderTargetTextures(p,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(p))}let me=z[ee];me===void 0&&(me=new Kt,me.layers.enable(ee),me.viewport=new _t,z[ee]=me),me.matrix.fromArray(k.transform.matrix),me.projectionMatrix.fromArray(k.projectionMatrix),me.viewport.set(le.x,le.y,le.width,le.height),ee===0&&b.matrix.copy(me.matrix),J===!0&&b.cameras.push(me)}}for(let ne=0;ne<v.length;ne++){const J=S[ne],ee=v[ne];J!==null&&ee!==void 0&&ee.update(J,q,l||a)}if(Y&&Y(P,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ne=null;for(const J of y)q.detectedPlanes.has(J)||(ne===null&&(ne=[]),ne.push(J));if(ne!==null)for(const J of ne)y.delete(J),M.delete(J),n.dispatchEvent({type:"planeremoved",data:J});for(const J of q.detectedPlanes)if(!y.has(J))y.add(J),M.set(J,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:J});else{const ee=M.get(J);J.lastChangedTime>ee&&(M.set(J,J.lastChangedTime),n.dispatchEvent({type:"planechanged",data:J}))}}m=null}const te=new Nc;te.setAnimationLoop(re),this.setAnimationLoop=function(P){Y=P},this.dispose=function(){}}}function Eg(r,e){function t(d,p){p.color.getRGB(d.fogColor.value,Pc(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,v,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,y)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,v,S):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Tn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Tn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const M=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uv2Transform.value.copy(y.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,v,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*v,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,v){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Tn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ag(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function c(S,y){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",p));const A=y.program;n.updateUBOMapping(S,A);const D=e.render.frame;s[S.id]!==D&&(f(S),s[S.id]=D)}function u(S){const y=h();S.__bindingPointIndex=y;const M=r.createBuffer(),A=S.__size,D=S.usage;return r.bindBuffer(35345,M),r.bufferData(35345,A,D),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],M=S.uniforms,A=S.__cache;r.bindBuffer(35345,y);for(let D=0,z=M.length;D<z;D++){const b=M[D];if(m(b,D,A)===!0){const I=b.__offset,L=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let Q=0;Q<L.length;Q++){const H=L[Q],V=d(H);typeof H=="number"?(b.__data[0]=H,r.bufferSubData(35345,I+X,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=H.elements[0],b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=H.elements[0],b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=H.elements[0]):(H.toArray(b.__data,X),X+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,I,b.__data)}}r.bindBuffer(35345,null)}function m(S,y,M){const A=S.value;if(M[y]===void 0){if(typeof A=="number")M[y]=A;else{const D=Array.isArray(A)?A:[A],z=[];for(let b=0;b<D.length;b++)z.push(D[b].clone());M[y]=z}return!0}else if(typeof A=="number"){if(M[y]!==A)return M[y]=A,!0}else{const D=Array.isArray(M[y])?M[y]:[M[y]],z=Array.isArray(A)?A:[A];for(let b=0;b<D.length;b++){const I=D[b];if(I.equals(z[b])===!1)return I.copy(z[b]),!0}}return!1}function g(S){const y=S.uniforms;let M=0;const A=16;let D=0;for(let z=0,b=y.length;z<b;z++){const I=y[z],L={boundary:0,storage:0},X=Array.isArray(I.value)?I.value:[I.value];for(let Q=0,H=X.length;Q<H;Q++){const V=X[Q],F=d(V);L.boundary+=F.boundary,L.storage+=F.storage}if(I.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,z>0){D=M%A;const Q=A-D;D!==0&&Q-L.boundary<0&&(M+=A-D,I.__offset=M)}M+=L.storage}return D=M%A,D>0&&(M+=A-D),S.__size=M,S.__cache={},this}function d(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function v(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:v}}function Cg(){const r=Or("canvas");return r.style.display="block",r}function Bc(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Cg(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ci,this.physicallyCorrectLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const d=this;let p=!1,v=0,S=0,y=null,M=-1,A=null;const D=new _t,z=new _t;let b=null,I=e.width,L=e.height,X=1,Q=null,H=null;const V=new _t(0,0,I,L),F=new _t(0,0,I,L);let U=!1;const $=new Ls;let Y=!1,re=!1,te=null;const P=new Ke,q=new je,ne=new B,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return y===null?X:1}let k=t;function le(R,Z){for(let ae=0;ae<R.length;ae++){const j=R[ae],ce=e.getContext(j,Z);if(ce!==null)return ce}return null}try{const R={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fa}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",et,!1),k===null){const Z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&Z.shift(),k=le(Z,R),k===null)throw le(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let me,Ce,ye,nt,qe,ze,It,Dt,ue,it,bt,dt,tn,Jt,N,C,ie,pe,_e,xe,He,O,W,Se;function Ee(){me=new Bp(k),Ce=new Np(k,me,r),me.init(Ce),O=new yg(k,me,Ce),ye=new bg(k,me,Ce),nt=new Hp,qe=new ag,ze=new xg(k,me,ye,qe,Ce,O,nt),It=new Op(d),Dt=new Up(d),ue=new Qf(k,Ce),W=new Rp(k,me,ue,Ce),it=new Vp(k,ue,nt,W),bt=new Xp(k,it,ue,nt),_e=new qp(k,Ce,ze),C=new kp(qe),dt=new sg(d,It,Dt,me,Ce,W,C),tn=new Eg(d,qe),Jt=new lg,N=new pg(me,Ce),pe=new Pp(d,It,Dt,ye,bt,u,a),ie=new vg(d,bt,Ce),Se=new Ag(k,nt,Ce,ye),xe=new Ip(k,me,nt,Ce),He=new Gp(k,me,nt,Ce),nt.programs=dt.programs,d.capabilities=Ce,d.extensions=me,d.properties=qe,d.renderLists=Jt,d.shadowMap=ie,d.state=ye,d.info=nt}Ee();const we=new Tg(d,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(I,L,!1))},this.getSize=function(R){return R.set(I,L)},this.setSize=function(R,Z,ae){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,L=Z,e.width=Math.floor(R*X),e.height=Math.floor(Z*X),ae!==!1&&(e.style.width=R+"px",e.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(I*X,L*X).floor()},this.setDrawingBufferSize=function(R,Z,ae){I=R,L=Z,X=ae,e.width=Math.floor(R*ae),e.height=Math.floor(Z*ae),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(V)},this.setViewport=function(R,Z,ae,j){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,Z,ae,j),ye.viewport(D.copy(V).multiplyScalar(X).floor())},this.getScissor=function(R){return R.copy(F)},this.setScissor=function(R,Z,ae,j){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,Z,ae,j),ye.scissor(z.copy(F).multiplyScalar(X).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(R){ye.setScissorTest(U=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(R=!0,Z=!0,ae=!0){let j=0;R&&(j|=16384),Z&&(j|=256),ae&&(j|=1024),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Jt.dispose(),N.dispose(),qe.dispose(),It.dispose(),Dt.dispose(),bt.dispose(),W.dispose(),Se.dispose(),dt.dispose(),we.dispose(),we.removeEventListener("sessionstart",Te),we.removeEventListener("sessionend",Ne),te&&(te.dispose(),te=null),ut.stop()};function Re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const R=nt.autoReset,Z=ie.enabled,ae=ie.autoUpdate,j=ie.needsUpdate,ce=ie.type;Ee(),nt.autoReset=R,ie.enabled=Z,ie.autoUpdate=ae,ie.needsUpdate=j,ie.type=ce}function et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const Z=R.target;Z.removeEventListener("dispose",rt),pt(Z)}function pt(R){G(R),qe.remove(R)}function G(R){const Z=qe.get(R).programs;Z!==void 0&&(Z.forEach(function(ae){dt.releaseProgram(ae)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ae,j,ce,Oe){Z===null&&(Z=J);const Xe=ce.isMesh&&ce.matrixWorld.determinant()<0,Ze=zs(R,Z,ae,j,ce);ye.setMaterial(j,Xe);let Je=ae.index,ct=1;j.wireframe===!0&&(Je=it.getWireframeAttribute(ae),ct=2);const at=ae.drawRange,ot=ae.attributes.position;let Nt=at.start*ct,nn=(at.start+at.count)*ct;Oe!==null&&(Nt=Math.max(Nt,Oe.start*ct),nn=Math.min(nn,(Oe.start+Oe.count)*ct)),Je!==null?(Nt=Math.max(Nt,0),nn=Math.min(nn,Je.count)):ot!=null&&(Nt=Math.max(Nt,0),nn=Math.min(nn,ot.count));const Pt=nn-Nt;if(Pt<0||Pt===1/0)return;W.setup(ce,j,Ze,ae,Je);let hn,Tt=xe;if(Je!==null&&(hn=ue.get(Je),Tt=He,Tt.setIndex(hn)),ce.isMesh)j.wireframe===!0?(ye.setLineWidth(j.wireframeLinewidth*ee()),Tt.setMode(1)):Tt.setMode(4);else if(ce.isLine){let tt=j.linewidth;tt===void 0&&(tt=1),ye.setLineWidth(tt*ee()),ce.isLineSegments?Tt.setMode(1):ce.isLineLoop?Tt.setMode(2):Tt.setMode(3)}else ce.isPoints?Tt.setMode(0):ce.isSprite&&Tt.setMode(4);if(ce.isInstancedMesh)Tt.renderInstances(Nt,Pt,ce.count);else if(ae.isInstancedBufferGeometry){const tt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,pr=Math.min(ae.instanceCount,tt);Tt.renderInstances(Nt,Pt,pr)}else Tt.render(Nt,Pt)},this.compile=function(R,Z){function ae(j,ce,Oe){j.transparent===!0&&j.side===Yr?(j.side=Tn,j.needsUpdate=!0,fn(j,ce,Oe),j.side=li,j.needsUpdate=!0,fn(j,ce,Oe),j.side=Yr):fn(j,ce,Oe)}f=N.get(R),f.init(),g.push(f),R.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),f.setupLights(d.physicallyCorrectLights),R.traverse(function(j){const ce=j.material;if(ce)if(Array.isArray(ce))for(let Oe=0;Oe<ce.length;Oe++){const Xe=ce[Oe];ae(Xe,R,j)}else ae(ce,R,j)}),g.pop(),f=null};let se=null;function he(R){se&&se(R)}function Te(){ut.stop()}function Ne(){ut.start()}const ut=new Nc;ut.setAnimationLoop(he),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(R){se=R,we.setAnimationLoop(R),R===null?ut.stop():ut.start()},we.addEventListener("sessionstart",Te),we.addEventListener("sessionend",Ne),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Z),Z=we.getCamera()),R.isScene===!0&&R.onBeforeRender(d,R,Z,y),f=N.get(R,g.length),f.init(),g.push(f),P.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$.setFromProjectionMatrix(P),re=this.localClippingEnabled,Y=C.init(this.clippingPlanes,re,Z),h=Jt.get(R,m.length),h.init(),m.push(h),Ot(R,Z,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(Q,H),Y===!0&&C.beginShadows();const ae=f.state.shadowsArray;if(ie.render(ae,R,Z),Y===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(h,R),f.setupLights(d.physicallyCorrectLights),Z.isArrayCamera){const j=Z.cameras;for(let ce=0,Oe=j.length;ce<Oe;ce++){const Xe=j[ce];Ut(h,R,Xe,Xe.viewport)}}else Ut(h,R,Z);y!==null&&(ze.updateMultisampleRenderTarget(y),ze.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(d,R,Z),W.resetDefaultState(),M=-1,A=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ot(R,Z,ae,j){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){j&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(P);const Xe=bt.update(R),Ze=R.material;Ze.visible&&h.push(R,Xe,Ze,ae,ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==nt.render.frame&&(R.skeleton.update(),R.skeleton.frame=nt.render.frame),!R.frustumCulled||$.intersectsObject(R))){j&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(P);const Xe=bt.update(R),Ze=R.material;if(Array.isArray(Ze)){const Je=Xe.groups;for(let ct=0,at=Je.length;ct<at;ct++){const ot=Je[ct],Nt=Ze[ot.materialIndex];Nt&&Nt.visible&&h.push(R,Xe,Nt,ae,ne.z,ot)}}else Ze.visible&&h.push(R,Xe,Ze,ae,ne.z,null)}}const Oe=R.children;for(let Xe=0,Ze=Oe.length;Xe<Ze;Xe++)Ot(Oe[Xe],Z,ae,j)}function Ut(R,Z,ae,j){const ce=R.opaque,Oe=R.transmissive,Xe=R.transparent;f.setupLightsView(ae),Oe.length>0&&jn(ce,Z,ae),j&&ye.viewport(D.copy(j)),ce.length>0&&st(ce,Z,ae),Oe.length>0&&st(Oe,Z,ae),Xe.length>0&&st(Xe,Z,ae),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function jn(R,Z,ae){const j=Ce.isWebGL2;te===null&&(te=new Gn(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Ir:Ei,minFilter:Ti,samples:j&&s===!0?4:0})),d.getDrawingBufferSize(q),j?te.setSize(q.x,q.y):te.setSize(bs(q.x),bs(q.y));const ce=d.getRenderTarget();d.setRenderTarget(te),d.clear();const Oe=d.toneMapping;d.toneMapping=Bn,st(R,Z,ae),d.toneMapping=Oe,ze.updateMultisampleRenderTarget(te),ze.updateRenderTargetMipmap(te),d.setRenderTarget(ce)}function st(R,Z,ae){const j=Z.isScene===!0?Z.overrideMaterial:null;for(let ce=0,Oe=R.length;ce<Oe;ce++){const Xe=R[ce],Ze=Xe.object,Je=Xe.geometry,ct=j===null?Xe.material:j,at=Xe.group;Ze.layers.test(ae.layers)&&yn(Ze,Z,ae,Je,ct,at)}}function yn(R,Z,ae,j,ce,Oe){R.onBeforeRender(d,Z,ae,j,ce,Oe),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ce.onBeforeRender(d,Z,ae,j,R,Oe),ce.transparent===!0&&ce.side===Yr?(ce.side=Tn,ce.needsUpdate=!0,d.renderBufferDirect(ae,Z,j,ce,R,Oe),ce.side=li,ce.needsUpdate=!0,d.renderBufferDirect(ae,Z,j,ce,R,Oe),ce.side=Yr):d.renderBufferDirect(ae,Z,j,ce,R,Oe),R.onAfterRender(d,Z,ae,j,ce,Oe)}function fn(R,Z,ae){Z.isScene!==!0&&(Z=J);const j=qe.get(R),ce=f.state.lights,Oe=f.state.shadowsArray,Xe=ce.state.version,Ze=dt.getParameters(R,ce.state,Oe,Z,ae),Je=dt.getProgramCacheKey(Ze);let ct=j.programs;j.environment=R.isMeshStandardMaterial?Z.environment:null,j.fog=Z.fog,j.envMap=(R.isMeshStandardMaterial?Dt:It).get(R.envMap||j.environment),ct===void 0&&(R.addEventListener("dispose",rt),ct=new Map,j.programs=ct);let at=ct.get(Je);if(at!==void 0){if(j.currentProgram===at&&j.lightsStateVersion===Xe)return Vr(R,Ze),at}else Ze.uniforms=dt.getUniforms(R),R.onBuild(ae,Ze,d),R.onBeforeCompile(Ze,d),at=dt.acquireProgram(Ze,Je),ct.set(Je,at),j.uniforms=Ze.uniforms;const ot=j.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ot.clippingPlanes=C.uniform),Vr(R,Ze),j.needsLights=Bs(R),j.lightsStateVersion=Xe,j.needsLights&&(ot.ambientLightColor.value=ce.state.ambient,ot.lightProbe.value=ce.state.probe,ot.directionalLights.value=ce.state.directional,ot.directionalLightShadows.value=ce.state.directionalShadow,ot.spotLights.value=ce.state.spot,ot.spotLightShadows.value=ce.state.spotShadow,ot.rectAreaLights.value=ce.state.rectArea,ot.ltc_1.value=ce.state.rectAreaLTC1,ot.ltc_2.value=ce.state.rectAreaLTC2,ot.pointLights.value=ce.state.point,ot.pointLightShadows.value=ce.state.pointShadow,ot.hemisphereLights.value=ce.state.hemi,ot.directionalShadowMap.value=ce.state.directionalShadowMap,ot.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ot.spotShadowMap.value=ce.state.spotShadowMap,ot.spotLightMatrix.value=ce.state.spotLightMatrix,ot.spotLightMap.value=ce.state.spotLightMap,ot.pointShadowMap.value=ce.state.pointShadowMap,ot.pointShadowMatrix.value=ce.state.pointShadowMatrix);const Nt=at.getUniforms(),nn=gs.seqWithValue(Nt.seq,ot);return j.currentProgram=at,j.uniformsList=nn,at}function Vr(R,Z){const ae=qe.get(R);ae.outputEncoding=Z.outputEncoding,ae.instancing=Z.instancing,ae.skinning=Z.skinning,ae.morphTargets=Z.morphTargets,ae.morphNormals=Z.morphNormals,ae.morphColors=Z.morphColors,ae.morphTargetsCount=Z.morphTargetsCount,ae.numClippingPlanes=Z.numClippingPlanes,ae.numIntersection=Z.numClipIntersection,ae.vertexAlphas=Z.vertexAlphas,ae.vertexTangents=Z.vertexTangents,ae.toneMapping=Z.toneMapping}function zs(R,Z,ae,j,ce){Z.isScene!==!0&&(Z=J),ze.resetTextureUnits();const Oe=Z.fog,Xe=j.isMeshStandardMaterial?Z.environment:null,Ze=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ci,Je=(j.isMeshStandardMaterial?Dt:It).get(j.envMap||Xe),ct=j.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,at=!!j.normalMap&&!!ae.attributes.tangent,ot=!!ae.morphAttributes.position,Nt=!!ae.morphAttributes.normal,nn=!!ae.morphAttributes.color,Pt=j.toneMapped?d.toneMapping:Bn,hn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Tt=hn!==void 0?hn.length:0,tt=qe.get(j),pr=f.state.lights;if(Y===!0&&(re===!0||R!==A)){const Qt=R===A&&j.id===M;C.setState(j,R,Qt)}let kt=!1;j.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==pr.state.version||tt.outputEncoding!==Ze||ce.isInstancedMesh&&tt.instancing===!1||!ce.isInstancedMesh&&tt.instancing===!0||ce.isSkinnedMesh&&tt.skinning===!1||!ce.isSkinnedMesh&&tt.skinning===!0||tt.envMap!==Je||j.fog===!0&&tt.fog!==Oe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==C.numPlanes||tt.numIntersection!==C.numIntersection)||tt.vertexAlphas!==ct||tt.vertexTangents!==at||tt.morphTargets!==ot||tt.morphNormals!==Nt||tt.morphColors!==nn||tt.toneMapping!==Pt||Ce.isWebGL2===!0&&tt.morphTargetsCount!==Tt)&&(kt=!0):(kt=!0,tt.__version=j.version);let qn=tt.currentProgram;kt===!0&&(qn=fn(j,Z,ce));let Gr=!1,fi=!1,Pi=!1;const Wt=qn.getUniforms(),dn=tt.uniforms;if(ye.useProgram(qn.program)&&(Gr=!0,fi=!0,Pi=!0),j.id!==M&&(M=j.id,fi=!0),Gr||A!==R){if(Wt.setValue(k,"projectionMatrix",R.projectionMatrix),Ce.logarithmicDepthBuffer&&Wt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),A!==R&&(A=R,fi=!0,Pi=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const Qt=Wt.map.cameraPosition;Qt!==void 0&&Qt.setValue(k,ne.setFromMatrixPosition(R.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Wt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||ce.isSkinnedMesh)&&Wt.setValue(k,"viewMatrix",R.matrixWorldInverse)}if(ce.isSkinnedMesh){Wt.setOptional(k,ce,"bindMatrix"),Wt.setOptional(k,ce,"bindMatrixInverse");const Qt=ce.skeleton;Qt&&(Ce.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),Wt.setValue(k,"boneTexture",Qt.boneTexture,ze),Wt.setValue(k,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mr=ae.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0&&Ce.isWebGL2===!0)&&_e.update(ce,ae,j,qn),(fi||tt.receiveShadow!==ce.receiveShadow)&&(tt.receiveShadow=ce.receiveShadow,Wt.setValue(k,"receiveShadow",ce.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(dn.envMap.value=Je,dn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),fi&&(Wt.setValue(k,"toneMappingExposure",d.toneMappingExposure),tt.needsLights&&Us(dn,Pi),Oe&&j.fog===!0&&tn.refreshFogUniforms(dn,Oe),tn.refreshMaterialUniforms(dn,j,X,L,te),gs.upload(k,tt.uniformsList,dn,ze)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(gs.upload(k,tt.uniformsList,dn,ze),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Wt.setValue(k,"center",ce.center),Wt.setValue(k,"modelViewMatrix",ce.modelViewMatrix),Wt.setValue(k,"normalMatrix",ce.normalMatrix),Wt.setValue(k,"modelMatrix",ce.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Qt=j.uniformsGroups;for(let gr=0,Hr=Qt.length;gr<Hr;gr++)if(Ce.isWebGL2){const Wr=Qt[gr];Se.update(Wr,qn),Se.bind(Wr,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function Us(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Bs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,Z,ae){qe.get(R.texture).__webglTexture=Z,qe.get(R.depthTexture).__webglTexture=ae;const j=qe.get(R);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=ae===void 0,j.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Z){const ae=qe.get(R);ae.__webglFramebuffer=Z,ae.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,ae=0){y=R,v=Z,S=ae;let j=!0,ce=null,Oe=!1,Xe=!1;if(R){const Je=qe.get(R);Je.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),j=!1):Je.__webglFramebuffer===void 0?ze.setupRenderTarget(R):Je.__hasExternalTextures&&ze.rebindTextures(R,qe.get(R.texture).__webglTexture,qe.get(R.depthTexture).__webglTexture);const ct=R.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Xe=!0);const at=qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ce=at[Z],Oe=!0):Ce.isWebGL2&&R.samples>0&&ze.useMultisampledRTT(R)===!1?ce=qe.get(R).__webglMultisampledFramebuffer:ce=at,D.copy(R.viewport),z.copy(R.scissor),b=R.scissorTest}else D.copy(V).multiplyScalar(X).floor(),z.copy(F).multiplyScalar(X).floor(),b=U;if(ye.bindFramebuffer(36160,ce)&&Ce.drawBuffers&&j&&ye.drawBuffers(R,ce),ye.viewport(D),ye.scissor(z),ye.setScissorTest(b),Oe){const Je=qe.get(R.texture);k.framebufferTexture2D(36160,36064,34069+Z,Je.__webglTexture,ae)}else if(Xe){const Je=qe.get(R.texture),ct=Z||0;k.framebufferTextureLayer(36160,36064,Je.__webglTexture,ae||0,ct)}M=-1},this.readRenderTargetPixels=function(R,Z,ae,j,ce,Oe,Xe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze){ye.bindFramebuffer(36160,Ze);try{const Je=R.texture,ct=Je.format,at=Je.type;if(ct!==Mn&&O.convert(ct)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=at===Ir&&(me.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&me.has("EXT_color_buffer_float"));if(at!==Ei&&O.convert(at)!==k.getParameter(35738)&&!(at===ai&&(Ce.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-j&&ae>=0&&ae<=R.height-ce&&k.readPixels(Z,ae,j,ce,O.convert(ct),O.convert(at),Oe)}finally{const Je=y!==null?qe.get(y).__webglFramebuffer:null;ye.bindFramebuffer(36160,Je)}}},this.copyFramebufferToTexture=function(R,Z,ae=0){const j=Math.pow(2,-ae),ce=Math.floor(Z.image.width*j),Oe=Math.floor(Z.image.height*j);ze.setTexture2D(Z,0),k.copyTexSubImage2D(3553,ae,0,0,R.x,R.y,ce,Oe),ye.unbindTexture()},this.copyTextureToTexture=function(R,Z,ae,j=0){const ce=Z.image.width,Oe=Z.image.height,Xe=O.convert(ae.format),Ze=O.convert(ae.type);ze.setTexture2D(ae,0),k.pixelStorei(37440,ae.flipY),k.pixelStorei(37441,ae.premultiplyAlpha),k.pixelStorei(3317,ae.unpackAlignment),Z.isDataTexture?k.texSubImage2D(3553,j,R.x,R.y,ce,Oe,Xe,Ze,Z.image.data):Z.isCompressedTexture?k.compressedTexSubImage2D(3553,j,R.x,R.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Xe,Z.mipmaps[0].data):k.texSubImage2D(3553,j,R.x,R.y,Xe,Ze,Z.image),j===0&&ae.generateMipmaps&&k.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,ae,j,ce=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=R.max.x-R.min.x+1,Xe=R.max.y-R.min.y+1,Ze=R.max.z-R.min.z+1,Je=O.convert(j.format),ct=O.convert(j.type);let at;if(j.isData3DTexture)ze.setTexture3D(j,0),at=32879;else if(j.isDataArrayTexture)ze.setTexture2DArray(j,0),at=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,j.flipY),k.pixelStorei(37441,j.premultiplyAlpha),k.pixelStorei(3317,j.unpackAlignment);const ot=k.getParameter(3314),Nt=k.getParameter(32878),nn=k.getParameter(3316),Pt=k.getParameter(3315),hn=k.getParameter(32877),Tt=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;k.pixelStorei(3314,Tt.width),k.pixelStorei(32878,Tt.height),k.pixelStorei(3316,R.min.x),k.pixelStorei(3315,R.min.y),k.pixelStorei(32877,R.min.z),ae.isDataTexture||ae.isData3DTexture?k.texSubImage3D(at,ce,Z.x,Z.y,Z.z,Oe,Xe,Ze,Je,ct,Tt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(at,ce,Z.x,Z.y,Z.z,Oe,Xe,Ze,Je,Tt.data)):k.texSubImage3D(at,ce,Z.x,Z.y,Z.z,Oe,Xe,Ze,Je,ct,Tt),k.pixelStorei(3314,ot),k.pixelStorei(32878,Nt),k.pixelStorei(3316,nn),k.pixelStorei(3315,Pt),k.pixelStorei(32877,hn),ce===0&&j.generateMipmaps&&k.generateMipmap(at),ye.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ze.setTextureCube(R,0):R.isData3DTexture?ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ze.setTexture2DArray(R,0):ze.setTexture2D(R,0),ye.unbindTexture()},this.resetState=function(){v=0,S=0,y=null,ye.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Lg extends Bc{}Lg.prototype.isWebGL1Renderer=!0;class Vc extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const xl=new B,yl=new _t,wl=new _t,Dg=new B,Ml=new Ke;class Pg extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;yl.fromBufferAttribute(i.attributes.skinIndex,e),wl.fromBufferAttribute(i.attributes.skinWeight,e),xl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=wl.getComponent(s);if(a!==0){const o=yl.getComponent(s);Ml.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Dg.copy(xl).applyMatrix4(Ml),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gc extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hc extends cn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Yt,u=Yt,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sl=new Ke,Rg=new Ke;class Wa{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Rg;Sl.multiplyMatrices(o,t[s]),Sl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Wa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Mc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hc(t,e,e,Mn,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Gc),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class xs extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tl=new B,El=new B,Al=new Ke,ya=new Ba,ds=new Cs;class Wc extends Lt{constructor(e=new gn,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Tl.fromBufferAttribute(t,i-1),El.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Tl.distanceTo(El);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(i),ds.radius+=s,e.ray.intersectsSphere(ds)===!1)return;Al.copy(i).invert(),ya.copy(e.ray).applyMatrix4(Al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,u=new B,h=new B,f=new B,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let y=v,M=S-1;y<M;y+=m){const A=g.getX(y),D=g.getX(y+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,D),ya.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let y=v,M=S-1;y<M;y+=m){if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),ya.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Cl=new B,Ll=new B;class jc extends Wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Cl.fromBufferAttribute(t,i),Ll.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cl.distanceTo(Ll);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ja extends gn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],m=[];let g=0;const d=[],p=n/2;let v=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(m,2));function S(){const M=new B,A=new B;let D=0;const z=(t-e)/n;for(let b=0;b<=s;b++){const I=[],L=b/s,X=L*(t-e)+e;for(let Q=0;Q<=i;Q++){const H=Q/i,V=H*l+o,F=Math.sin(V),U=Math.cos(V);A.x=X*F,A.y=-L*n+p,A.z=X*U,h.push(A.x,A.y,A.z),M.set(F,z,U).normalize(),f.push(M.x,M.y,M.z),m.push(H,1-L),I.push(g++)}d.push(I)}for(let b=0;b<i;b++)for(let I=0;I<s;I++){const L=d[I][b],X=d[I+1][b],Q=d[I+1][b+1],H=d[I][b+1];u.push(L,X,H),u.push(X,Q,H),D+=6}c.addGroup(v,D,0),v+=D}function y(M){const A=g,D=new je,z=new B;let b=0;const I=M===!0?e:t,L=M===!0?1:-1;for(let Q=1;Q<=i;Q++)h.push(0,p*L,0),f.push(0,L,0),m.push(.5,.5),g++;const X=g;for(let Q=0;Q<=i;Q++){const V=Q/i*l+o,F=Math.cos(V),U=Math.sin(V);z.x=I*U,z.y=p*L,z.z=I*F,h.push(z.x,z.y,z.z),f.push(0,L,0),D.x=F*.5+.5,D.y=U*.5*L+.5,m.push(D.x,D.y),g++}for(let Q=0;Q<i;Q++){const H=A+Q,V=X+Q;M===!0?u.push(V,V+1,H):u.push(V+1,V,H),b+=3}c.addGroup(v,b,M===!0?1:2),v+=b}}static fromJSON(e){return new ja(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dl extends Di{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qa extends Di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function si(r,e,t){return qc(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function ps(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function qc(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ig(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Xc(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Rs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ng extends Rs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oo,endingEnd:Oo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fo:s=e,o=2*t-n;break;case zo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fo:a=e,l=2*n-t;break;case zo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),d=g*g,p=d*g,v=-f*p+2*f*d-f*g,S=(1+f)*p+(-1.5-2*f)*d+(-.5+f)*g+1,y=(-1-m)*p+(1.5+m)*d+.5*g,M=m*p-m*d;for(let A=0;A!==o;++A)s[A]=v*a[u+A]+S*a[c+A]+y*a[l+A]+M*a[h+A];return s}}class kg extends Rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class Og extends Rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ps(t,this.TimeBufferType),this.values=ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ps(e.times,Array),values:ps(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Og(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ng(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _s:t=this.InterpolantFactoryMethodDiscrete;break;case vs:t=this.InterpolantFactoryMethodLinear;break;case Zs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return vs;case this.InterpolantFactoryMethodSmooth:return Zs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=si(n,s,a),this.values=si(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&qc(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=si(this.times),t=si(this.values),n=this.getValueSize(),i=this.getInterpolation()===Zs,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,m=h+n;for(let g=0;g!==n;++g){const d=t[h+g];if(d!==t[f+g]||d!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[h+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=si(e,0,a),this.values=si(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=si(this.times,0),t=si(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=vs;class ur extends Wn{}ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=_s;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Yc extends Wn{}Yc.prototype.ValueTypeName="color";class ys extends Wn{}ys.prototype.ValueTypeName="number";class Fg extends Rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Hn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class fr extends Wn{InterpolantFactoryMethodLinear(e){return new Fg(this.times,this.values,this.getValueSize(),e)}}fr.prototype.ValueTypeName="quaternion";fr.prototype.DefaultInterpolation=vs;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends Wn{}hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=_s;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends Wn{}sr.prototype.ValueTypeName="vector";class Rl{constructor(e,t=-1,n,i=mf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ug(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Ig(l);l=Pl(l,1,u),c=Pl(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ys(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,m,g,d){if(m.length!==0){const p=[],v=[];Xc(m,p,v,g),p.length!==0&&d.push(new h(f,p,v))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let d=0;d<f[g].morphTargets.length;d++)m[f[g].morphTargets[d]]=-1;for(const d in m){const p=[],v=[];for(let S=0;S!==f[g].morphTargets.length;++S){const y=f[g];p.push(y.time),v.push(y.morphTarget===d?1:0)}i.push(new ys(".morphTargetInfluence["+d+"]",p,v))}l=m.length*a}else{const m=".bones["+t[h].name+"]";n(sr,m+".position",f,"pos",i),n(fr,m+".quaternion",f,"rot",i),n(sr,m+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return Yc;case"quaternion":return fr;case"bool":case"boolean":return ur;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ug(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zg(r.type);if(r.times===void 0){const t=[],n=[];Xc(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ws={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Bg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Zc=new Bg;class dr{constructor(e){this.manager=e!==void 0?e:Zc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const $n={};class Vg extends Error{constructor(e,t){super(e),this.response=t}}class Xa extends dr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ws.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$n[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let d=0;const p=new ReadableStream({start(v){S();function S(){h.read().then(({done:y,value:M})=>{if(y)v.close();else{d+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:m});for(let D=0,z=u.length;D<z;D++){const b=u[D];b.onProgress&&b.onProgress(A)}v.enqueue(M),S()}})}}});return new Response(p)}else throw new Vg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ws.add(e,c);const u=$n[e];delete $n[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=$n[e];if(u===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gg extends dr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ws.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Or("img");function l(){u(),ws.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Hg extends dr{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Hc,o=new Xa(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:ln,a.wrapT=c.wrapT!==void 0?c.wrapT:ln,a.magFilter=c.magFilter!==void 0?c.magFilter:an,a.minFilter=c.minFilter!==void 0?c.minFilter:an,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ti),c.mipmapCount===1&&(a.minFilter=an),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class Ia extends dr{constructor(e){super(e)}load(e,t,n,i){const s=new cn,a=new Gg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Is extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const wa=new Ke,Il=new B,Nl=new B;class Ya{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wg extends Ya{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=kr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kc extends Is{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DefaultUp),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Wg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kl=new Ke,Tr=new B,Ma=new B;class jg extends Ya{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),Ma.copy(n.position),Ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ma),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl)}}class Pr extends Is{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qg extends Ya{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xg extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DefaultUp),this.updateMatrix(),this.target=new Lt,this.shadow=new qg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jc extends Is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $c{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ol(){return(typeof performance>"u"?Date:performance).now()}class Yg{constructor(e,t,n=0,i=1/0){this.ray=new Ba(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Na(e,this,n,t),n.sort(Fl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Na(e[i],this,n,t);return n.sort(Fl),n}}function Fl(r,e){return r.distance-e.distance}function Na(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Na(i[s],e,t,!0)}}class zl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(on(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zg extends jc{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ye(n),i=new Ye(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,m=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const d=f===s?n:i;d.toArray(c,m),m+=3,d.toArray(c,m),m+=3,d.toArray(c,m),m+=3,d.toArray(c,m),m+=3}const u=new gn;u.setAttribute("position",new xt(l,3)),u.setAttribute("color",new xt(c,3));const h=new xs({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Kg extends Ds{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);const Jg={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ns{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Qg=new Br(-1,1,1,-1,0,1),Za=new gn;Za.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3));Za.setAttribute("uv",new xt([0,2,0,0,2,0],2));class $g{constructor(e){this._mesh=new en(Za,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class e_ extends Ns{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rc.clone(e.uniforms),this.material=new Rn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $g(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ul extends Ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class t_ extends Ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class n_{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new je);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Gn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new e_(Jg),this.clock=new $c}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ul!==void 0&&(a instanceof Ul?n=!0:a instanceof t_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eu extends Ns{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ye}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const i_=(r,e,t)=>{r.renderer=new Bc({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new n_(r.renderer),r.composer.addPass(new eu(r.scene,ka(r.camera)))},Bl=(r,e,t)=>{r.renderer&&(e?r.renderer.outputEncoding=ci:r.renderer.outputEncoding=gt,t?r.renderer.toneMapping=Bn:r.renderer.toneMapping=xc)},Vl=(r,e,t)=>{var n,i,s,a,o,l,c,u;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(a=(s=r.renderer).setPixelRatio)==null||a.call(s,t),(l=(o=r.composer).setSize)==null||l.call(o,e.width,e.height),(u=(c=r.composer).setPixelRatio)==null||u.call(c,t))},Gl=(r,e,t)=>{r.renderer&&(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Sn=r=>r.userData,r_=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},tu=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),s_=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,a_=(r,e,t)=>{let n;const i=r.camera.subscribe(c=>n=c);yt(i);let s;const a=r.pointer.subscribe(c=>s=c);yt(a);let o;const l=c=>{var f,m;c.preventDefault();const u=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,r_(r,c);const h=o_(e,s,n);if(u==="pointerdown"&&(o=h?{object:h.object,instanceId:h.instanceId}:null),u==="click"){if(!l_(h,o)){o=null;return}o=null}h&&((m=(f=Sn(h.object)).eventDispatcher)==null||m.call(f,u,{...h,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function o_(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=tu(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function l_(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const c_=(r,e)=>{let t;const n=r.pointerOverCanvas.subscribe(c=>t=c);yt(n);let i;const s=r.camera.subscribe(c=>i=c);yt(s);let a;const o=r.pointer.subscribe(c=>a=c);return yt(o),{raycast:()=>{var h,f,m,g,d,p,v,S;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?tu(e,a,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&s_(e.lastIntersection,u)&&((p=(d=Sn(e.lastIntersection.object)).eventDispatcher)==null||p.call(d,"pointerleave",e.lastIntersection),(S=(v=Sn(u.object)).eventDispatcher)==null||S.call(v,"pointerenter",u)):(g=(m=Sn(u.object)).eventDispatcher)==null||g.call(m,"pointerenter",u):e.lastIntersection&&((f=(h=Sn(e.lastIntersection.object)).eventDispatcher)==null||f.call(h,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},ks=typeof window<"u",u_=r=>{if(!ks)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),yt(()=>{e&&cancelAnimationFrame(e)})},f_=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>(i.order??0)>(s.order??0)?1:-1).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},h_=r=>{r.debugFrameloop&&(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by ↴":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},d_=(r,e,t,n)=>{let i=ka(r.camera);const s=r.camera.subscribe(o=>i=o);yt(s);const{raycast:a}=c_(r,e);u_(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!i||!r.composer||!r.renderer||(f_(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),h_(t),t.frameInvalidated=!1,t.advance=!1))})},p_=()=>{const r=new Kt(75,0,.1,1e3);return Sn(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},m_=r=>{const e=r.size.subscribe(t=>{Sn(ka(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});yt(e)},g_=(r,e,t,n,i,s,a)=>{const o={audioListeners:new Map,addAudioListener:(v,S)=>{if(S=S??"default",o.audioListeners.has(S)){console.warn(`An AudioListener with the id "${S}" has already been added, aborting.`);return}o.audioListeners.set(S,v)},removeAudioListener:v=>{if(v=v??"default",!o.audioListeners.has(v)){console.warn(`No AudioListener with the id "${v}" found, aborting.`);return}o.audioListeners.delete(v)},getAudioListener:v=>{if(v=v??"default",!o.audioListeners.has(v)){console.warn(`No AudioListener with the id "${v}" found, aborting.`);return}return o.audioListeners.get(v)}},l={debugFrameloop:s,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Mu([n,i],([v,S])=>v||S),pointer:Zt(new je),pointerOverCanvas:Zt(!1),clock:new $c,camera:Zt(p_()),scene:new Vc,renderer:void 0,composer:void 0,invalidate:v=>{l.frameInvalidated=!0,l.debugFrameloop&&v&&(l.invalidations[v]=l.invalidations[v]?l.invalidations[v]+1:1)},advance:()=>{l.advance=!0}},u={flat:Zt(e),linear:Zt(r),dpr:Zt(t),setCamera:v=>{c.camera.set(v),c.composer&&(c.composer.passes.forEach(S=>{S instanceof eu&&(S.camera=v)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Yg,lastIntersection:null,addRaycastableObject:v=>{u.raycastableObjects.add(v)},removeRaycastableObject:v=>{u.raycastableObjects.delete(v)},addInteractiveObject:v=>{u.interactiveObjects.add(v)},removeInteractiveObject:v=>{u.interactiveObjects.delete(v)},addPass:v=>{c.composer&&(c.composer.addPass(v),c.invalidate("Canvas: adding pass"))},removePass:v=>{c.composer&&(c.composer.removePass(v),c.invalidate("Canvas: removing pass"))}},h={dispose:async(v=!1)=>{await Rr(),!(!h.shouldDispose&&!v)&&(h.disposableObjects.forEach((S,y)=>{var M;(S===0||v)&&((M=y==null?void 0:y.dispose)==null||M.call(y),h.disposableObjects.delete(y))}),h.shouldDispose=!1)},collectDisposableObjects:(v,S)=>{const y=S??[];return v&&(v!=null&&v.dispose&&typeof v.dispose=="function"&&v.type!=="Scene"&&y.push(v),Object.entries(v).forEach(([M,A])=>{if(M==="parent"||M==="children"||typeof A!="object")return;const D=A;D!=null&&D.dispose&&h.collectDisposableObjects(D,y)})),y},addDisposableObjects:v=>{v.forEach(S=>{const y=h.disposableObjects.get(S);y?h.disposableObjects.set(S,y+1):h.disposableObjects.set(S,1)})},removeDisposableObjects:v=>{v.length!==0&&(v.forEach(S=>{const y=h.disposableObjects.get(S);y&&y>0&&h.disposableObjects.set(S,y-1)}),h.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Ln("threlte",c),Ln("threlte-root",u),Ln("threlte-render-context",l),Ln("threlte-audio-context",o),Ln("threlte-disposal-context",h),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:o,disposalCtx:h,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>h}};function Os(r,e){const t=Zt(r);let n=r;const i=t.subscribe(o=>n=o);return yt(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const un=()=>Vn("threlte");function __(r){let e;const t=r[8].default,n=In(t,r,r[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&Nn(n,t,i,i[7],e?On(t,i[7],s,null):kn(i[7]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}const v_=()=>({onChildMount:Vn("threlte-hierarchical-object-on-mount"),onChildDestroy:Vn("threlte-hierarchical-object-on-destroy")}),nu=()=>Vn("threlte-hierarchical-parent-context");function b_(r,e,t){var v;let n,{$$slots:i={},$$scope:s}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=S=>{o.push(S),t(1,o),l==null||l(S)};let{onChildDestroy:u=void 0}=e;const h=S=>{const y=o.findIndex(M=>M.uuid===S.uuid);y!==-1&&o.splice(y,1),t(1,o),u==null||u(S)},{invalidate:f}=un(),m=nu();Et(r,m,S=>t(6,n=S));let{parent:g=n}=e;const d=v_();a&&((v=d.onChildMount)==null||v.call(d,a),f("HierarchicalObject: object added"));const p=Os(a,(S,y)=>{var M,A;y&&((M=d.onChildDestroy)==null||M.call(d,y),f("HierarchicalObject: object added")),S&&((A=d.onChildMount)==null||A.call(d,S),f("HierarchicalObject: object removed"))});return yt(()=>{var S;a&&((S=d.onChildDestroy)==null||S.call(d,a),f("HierarchicalObject: object removed"))}),Ln("threlte-hierarchical-object-on-mount",c),Ln("threlte-hierarchical-object-on-destroy",h),Ln("threlte-hierarchical-parent-context",p),r.$$set=S=>{"object"in S&&t(3,a=S.object),"children"in S&&t(1,o=S.children),"onChildMount"in S&&t(4,l=S.onChildMount),"onChildDestroy"in S&&t(5,u=S.onChildDestroy),"parent"in S&&t(2,g=S.parent),"$$scope"in S&&t(7,s=S.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,g=n),r.$$.dirty&8&&p.set(a)},[m,o,g,a,l,u,n,s,i]}class x_ extends wt{constructor(e){super(),Mt(this,e,b_,__,St,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function y_(r){let e;const t=r[1].default,n=In(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Nn(n,t,i,i[4],e?On(t,i[4],s,null):kn(i[4]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function w_(r){let e,t;return e=new x_({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[y_]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function M_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const a=l=>s.add(l),o=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,a,o,i]}class Ka extends wt{constructor(e){super(),Mt(this,e,M_,w_,St,{object:0})}}const S_=()=>{const r=Zt({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(a=>e=a);yt(t);let n;const i=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&r.set({width:o,height:l})},s=a=>{n=a,i(),window.addEventListener("resize",i)};return ks?(yt(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function Hl(r){let e,t;return e=new Ka({props:{object:r[0].scene,$$slots:{default:[T_]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function T_(r){let e;const t=r[29].default,n=In(t,r,r[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&Nn(n,t,i,i[33],e?On(t,i[33],s,null):kn(i[33]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function E_(r){let e,t,n,i,s=r[2]&&Hl(r);return{c(){e=fc("canvas"),s&&s.c(),this.h()},l(a){e=hc(a,"CANVAS",{class:!0});var o=dc(e);s&&s.l(o),o.forEach($e),this.h()},h(){pc(e,"class","svelte-o3oskp")},m(a,o){lt(a,e,o),s&&s.m(e,null),r[30](e),t=!0,n||(i=[_u(r[3].call(null,e)),di(e,"click",r[9]),di(e,"contextmenu",r[10]),di(e,"pointerup",r[13]),di(e,"pointerdown",r[11]),di(e,"pointermove",r[12]),di(e,"pointerenter",r[31]),di(e,"pointerleave",r[32])],n=!0)},p(a,o){a[2]?s?(s.p(a,o),o[0]&4&&de(s,1)):(s=Hl(a),s.c(),de(s,1),s.m(e,null)):s&&(Dn(),ge(s,1,1,()=>{s=null}),Pn())},i(a){t||(de(s),t=!0)},o(a){ge(s),t=!1},d(a){a&&$e(e),s&&s.d(),r[30](null),n=!1,vu(i)}}}const Wl=new Set;function A_(r,e,t){let n,i,s,a,{$$slots:o={},$$scope:l}=e,{dpr:c=ks?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:h=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:g=!0}=e,{shadowMapType:d=_c}=e,{size:p=void 0}=e,{rendererParameters:v=void 0}=e,S,y=!1;const M=Zt(p),{parentSize:A,parentSizeAction:D}=S_(),z=g_(h,u,c,M,A,m,f),{getCtx:b,renderCtx:I,disposalCtx:L}=z,{ctx:X,rootCtx:Q,audioCtx:H}=z;m_(X),Wl.add(X.invalidate),yt(()=>{Wl.delete(X.invalidate)});const{size:V,scene:F}=X;Et(r,V,le=>t(26,i=le));const{flat:U,linear:$,dpr:Y}=Q;Et(r,U,le=>t(27,s=le)),Et(r,$,le=>t(28,a=le)),Et(r,Y,le=>t(25,n=le)),Ln("threlte-parent",Zt(F)),mc(()=>{S&&(i_(X,S,v),Bl(X,a,s),Vl(X,i,n),Gl(X,g,d),t(2,y=!0))}),d_(X,Q,I,L);const{onClick:re,onContextMenu:te,onPointerDown:P,onPointerMove:q,onPointerUp:ne}=a_(X,Q,I);yt(()=>{L.dispose(!0)});function J(le){Ai[le?"unshift":"push"](()=>{S=le,t(1,S)})}const ee=()=>b().pointerOverCanvas.set(!0),k=()=>b().pointerOverCanvas.set(!1);return r.$$set=le=>{"dpr"in le&&t(14,c=le.dpr),"flat"in le&&t(15,u=le.flat),"linear"in le&&t(16,h=le.linear),"frameloop"in le&&t(17,f=le.frameloop),"debugFrameloop"in le&&t(18,m=le.debugFrameloop),"shadows"in le&&t(19,g=le.shadows),"shadowMapType"in le&&t(20,d=le.shadowMapType),"size"in le&&t(21,p=le.size),"rendererParameters"in le&&t(22,v=le.rendererParameters),"$$scope"in le&&t(33,l=le.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&M.set(p),r.$$.dirty[0]&65536&&Hs($,a=h,a),r.$$.dirty[0]&32768&&Hs(U,s=u,s),r.$$.dirty[0]&16384&&Hs(Y,n=c,n),r.$$.dirty[0]&402653184&&Bl(b(),a,s),r.$$.dirty[0]&100663296&&Vl(b(),i,n),r.$$.dirty[0]&1572864&&Gl(b(),g,d)},[X,S,y,D,b,V,U,$,Y,re,te,P,q,ne,c,u,h,f,m,g,d,p,v,Q,H,n,i,s,a,o,J,ee,k,l]}class C_ extends wt{constructor(e){super(),Mt(this,e,A_,E_,St,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Ja=()=>Vn("threlte-root"),L_=()=>Vn("threlte-disposal-context");function D_(r){let e;const t=r[9].default,n=In(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Nn(n,t,i,i[8],e?On(t,i[8],s,null):kn(i[8]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}const jl="threlte-disposable-object-context";function P_(r,e,t){let n,i,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=L_();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const m=Vn(jl);Et(r,m,p=>t(7,i=p));const g=Zt(f??i??!0);Et(r,g,p=>t(6,n=p)),Ln(jl,g);let d=n?o(u):[];return l(d),yt(()=>{c(d)}),r.$$set=p=>{"object"in p&&t(2,u=p.object),"dispose"in p&&t(3,f=p.dispose),"$$scope"in p&&t(8,a=p.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&g.set(f??i??!0),r.$$.dirty&116&&u!==h&&(c(d),t(5,d=n?o(u):[]),l(d),t(4,h=u))},[m,g,u,f,h,d,n,i,a,s]}class Fr extends wt{constructor(e){super(),Mt(this,e,P_,D_,St,{object:2,dispose:3})}}function R_(r,e,t){let n,i,{object:s}=e;const a=Os(s);Et(r,a,c=>t(4,i=c));const o=Vn("threlte-layers");Et(r,o,c=>t(3,n=c));const{invalidate:l}=un();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&a.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[a,o,s,n,i]}class I_ extends wt{constructor(e){super(),Mt(this,e,R_,null,St,{object:2})}}const Fs=(r,e)=>{if(!ks)return{start:()=>{},stop:()=>{},started:Su(!1)};const t=Vn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Zt(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},a=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&a(),yt(()=>{s()}),{start:a,stop:s,started:{subscribe:i.subscribe}}},iu=()=>{const r=Zt(!1);return(async()=>{await Rr(),r.set(!0)})(),r};function N_(r,e,t){let n,i,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new B,h=Ci(),{invalidate:f}=un(),m=iu();Et(r,m,y=>t(8,i=y));const g=async()=>{i||await Rr(),h("transform")},d=async()=>{f("TransformableObject: transformed"),await g()};Sn(s).onTransform=d;const{start:p,stop:v}=Fs(async()=>{c&&!l&&c instanceof Lt&&(c.getWorldPosition(u),s.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),S=Os(s);return Et(r,S,y=>t(7,n=y)),r.$$set=y=>{"object"in y&&t(2,s=y.object),"position"in y&&t(3,a=y.position),"scale"in y&&t(4,o=y.scale),"rotation"in y&&t(5,l=y.rotation),"lookAt"in y&&t(6,c=y.lookAt)},r.$$.update=()=>{r.$$.dirty&4&&S.set(s),r.$$.dirty&232&&(a&&(n.position.set(a.x??0,a.y??0,a.z??0),d()),c&&!l&&(c instanceof Lt?p():(v(),n.lookAt(c.x??0,c.y??0,c.z??0),d())),c||v()),r.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set(o.x??1,o.y??1,o.z??1),d()),r.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),d())},[m,S,s,a,o,l,c,n]}class ru extends wt{constructor(e){super(),Mt(this,e,N_,null,St,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function k_(r,e,t){let n,i,s,{object:a}=e,{viewportAware:o=!1}=e;const l=Ci(),{camera:c,invalidate:u}=un();Et(r,c,D=>t(8,s=D));const h=new Ls,f=new Ke,m=D=>D.type==="Mesh",g=new B,d=()=>s?(f.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),h.setFromProjectionMatrix(f),m(a)?h.intersectsObject(a):(a.getWorldPosition(g),h.containsPoint(g))):!0,p=iu();Et(r,p,D=>t(7,i=D));let{inViewport:v=d()}=e;const S=async D=>{D?(i||await Rr(),l("viewportenter",a)):(i||await Rr(),l("viewportleave",a))},{start:y,stop:M,started:A}=Fs(()=>{const D=d();v===void 0?(t(3,v=d()),S(v)):D!==v&&(S(D),t(3,v=D))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Et(r,A,D=>t(6,n=D)),u("ViewportAwareObject"),r.$$set=D=>{"object"in D&&t(4,a=D.object),"viewportAware"in D&&t(5,o=D.viewportAware),"inViewport"in D&&t(3,v=D.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(o&&!n?y():!o&&n&&M())},[c,p,A,v,a,o,n]}class O_ extends wt{constructor(e){super(),Mt(this,e,k_,null,St,{object:4,viewportAware:5,inViewport:3})}}function F_(r){let e;const t=r[14].default,n=In(t,r,r[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&Nn(n,t,i,i[18],e?On(t,i[18],s,null):kn(i[18]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function z_(r){let e,t;return e=new Ka({props:{object:r[1],$$slots:{default:[F_]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function U_(r){let e,t,n,i,s,a,o,l,c;e=new I_({props:{object:r[1]}}),n=new ru({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new Fr({props:{object:r[1],dispose:r[7],$$slots:{default:[z_]},$$scope:{ctx:r}}});function u(f){r[15](f)}let h={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(h.inViewport=r[0]),o=new O_({props:h}),Ai.push(()=>ar(o,"inViewport",u)),o.$on("viewportenter",r[16]),o.$on("viewportleave",r[17]),{c(){Ue(e.$$.fragment),t=At(),Ue(n.$$.fragment),i=At(),Ue(s.$$.fragment),a=At(),Ue(o.$$.fragment)},l(f){Be(e.$$.fragment,f),t=Ct(f),Be(n.$$.fragment,f),i=Ct(f),Be(s.$$.fragment,f),a=Ct(f),Be(o.$$.fragment,f)},m(f,m){Ve(e,f,m),lt(f,t,m),Ve(n,f,m),lt(f,i,m),Ve(s,f,m),lt(f,a,m),Ve(o,f,m),c=!0},p(f,[m]){const g={};m&2&&(g.object=f[1]),e.$set(g);const d={};m&2&&(d.object=f[1]),m&4&&(d.position=f[2]),m&16&&(d.rotation=f[4]),m&8&&(d.scale=f[3]),m&32&&(d.lookAt=f[5]),n.$set(d);const p={};m&2&&(p.object=f[1]),m&128&&(p.dispose=f[7]),m&262146&&(p.$$scope={dirty:m,ctx:f}),s.$set(p);const v={};m&2&&(v.object=f[1]),m&64&&(v.viewportAware=f[6]),!l&&m&1&&(l=!0,v.inViewport=f[0],or(()=>l=!1)),o.$set(v)},i(f){c||(de(e.$$.fragment,f),de(n.$$.fragment,f),de(s.$$.fragment,f),de(o.$$.fragment,f),c=!0)},o(f){ge(e.$$.fragment,f),ge(n.$$.fragment,f),ge(s.$$.fragment,f),ge(o.$$.fragment,f),c=!1},d(f){Ge(e,f),f&&$e(t),Ge(n,f),f&&$e(i),Ge(s,f),f&&$e(a),Ge(o,f)}}}function B_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:d=void 0}=e,{visible:p=void 0}=e,{dispose:v=void 0}=e,{userData:S=void 0}=e;const{invalidate:y}=un(),M=()=>s;function A(b){h=b,t(0,h)}function D(b){vt.call(this,r,b)}function z(b){vt.call(this,r,b)}return r.$$set=b=>{"object"in b&&t(1,s=b.object),"position"in b&&t(2,a=b.position),"scale"in b&&t(3,o=b.scale),"rotation"in b&&t(4,l=b.rotation),"lookAt"in b&&t(5,c=b.lookAt),"viewportAware"in b&&t(6,u=b.viewportAware),"inViewport"in b&&t(0,h=b.inViewport),"castShadow"in b&&t(8,f=b.castShadow),"receiveShadow"in b&&t(9,m=b.receiveShadow),"frustumCulled"in b&&t(10,g=b.frustumCulled),"renderOrder"in b&&t(11,d=b.renderOrder),"visible"in b&&t(12,p=b.visible),"dispose"in b&&t(7,v=b.dispose),"userData"in b&&t(13,S=b.userData),"$$scope"in b&&t(18,i=b.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(p!==void 0&&(M().visible=p),f!==void 0&&(M().castShadow=f),m!==void 0&&(M().receiveShadow=m),g!==void 0&&(M().frustumCulled=g),d!==void 0&&(M().renderOrder=d),S!==void 0&&(M().userData={...M().userData,...S}),y("Object3DInstance: props changed"))},[h,s,a,o,l,c,u,v,f,m,g,d,p,S,n,A,D,z,i]}class Qa extends wt{constructor(e){super(),Mt(this,e,B_,U_,St,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function V_(r){let e;const t=r[17].default,n=In(t,r,r[21],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&Nn(n,t,i,i[21],e?On(t,i[21],s,null):kn(i[21]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function G_(r){let e,t,n;function i(a){r[18](a)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[V_]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new Qa({props:s}),Ai.push(()=>ar(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){Ue(e.$$.fragment)},l(a){Be(e.$$.fragment,a)},m(a,o){Ve(e,a,o),n=!0},p(a,[o]){const l={};o&2&&(l.object=a[1]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&4096&&(l.userData=a[12]),o&8192&&(l.dispose=a[13]),o&2097152&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],or(()=>t=!1)),e.$set(l)},i(a){n||(de(e.$$.fragment,a),n=!0)},o(a){ge(e.$$.fragment,a),n=!1},d(a){Ge(e,a)}}}function H_(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:h=!1}=e,{inViewport:f=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:S=void 0}=e,{dispose:y=void 0}=e,{useCamera:M=!1}=e;const A=Os(a);Et(r,A,L=>t(16,n=L));const{setCamera:D}=Ja();function z(L){f=L,t(0,f)}function b(L){vt.call(this,r,L)}function I(L){vt.call(this,r,L)}return r.$$set=L=>{"camera"in L&&t(1,a=L.camera),"position"in L&&t(2,o=L.position),"scale"in L&&t(3,l=L.scale),"rotation"in L&&t(4,c=L.rotation),"lookAt"in L&&t(5,u=L.lookAt),"viewportAware"in L&&t(6,h=L.viewportAware),"inViewport"in L&&t(0,f=L.inViewport),"castShadow"in L&&t(7,m=L.castShadow),"receiveShadow"in L&&t(8,g=L.receiveShadow),"frustumCulled"in L&&t(9,d=L.frustumCulled),"renderOrder"in L&&t(10,p=L.renderOrder),"visible"in L&&t(11,v=L.visible),"userData"in L&&t(12,S=L.userData),"dispose"in L&&t(13,y=L.dispose),"useCamera"in L&&t(15,M=L.useCamera),"$$scope"in L&&t(21,s=L.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&A.set(a),r.$$.dirty&98304&&M&&D(n)},[f,a,o,l,c,u,h,m,g,d,p,v,S,y,A,M,n,i,z,b,I,s]}class W_ extends wt{constructor(e){super(),Mt(this,e,H_,G_,St,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}const ql=[],$a=(r,e)=>{const t=ql.find(i=>i instanceof r);if(t)return t;const n=e();return ql.push(n),n},Xl={type:"change"},Sa={type:"start"},Yl={type:"end"};let j_=class extends Li{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Jt),this._domElementKeyEvents=O},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xl),n.update(),s=i.NONE},this.update=function(){const O=new B,W=new Hn().setFromUnitVectors(e.up,new B(0,1,0)),Se=W.clone().invert(),Ee=new B,we=new Hn,Re=2*Math.PI;return function(){const et=n.object.position;O.copy(et).sub(n.target),O.applyQuaternion(W),o.setFromVector3(O),n.autoRotate&&s===i.NONE&&I(z()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let rt=n.minAzimuthAngle,pt=n.maxAzimuthAngle;return isFinite(rt)&&isFinite(pt)&&(rt<-Math.PI?rt+=Re:rt>Math.PI&&(rt-=Re),pt<-Math.PI?pt+=Re:pt>Math.PI&&(pt-=Re),rt<=pt?o.theta=Math.max(rt,Math.min(pt,o.theta)):o.theta=o.theta>(rt+pt)/2?Math.max(rt,o.theta):Math.min(pt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),O.setFromSpherical(o),O.applyQuaternion(Se),et.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Ee.distanceToSquared(n.object.position)>a||8*(1-we.dot(n.object.quaternion))>a?(n.dispatchEvent(Xl),Ee.copy(n.object.position),we.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie),n.domElement.removeEventListener("pointerdown",It),n.domElement.removeEventListener("pointercancel",it),n.domElement.removeEventListener("wheel",tn),n.domElement.removeEventListener("pointermove",Dt),n.domElement.removeEventListener("pointerup",ue),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Jt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new zl,l=new zl;let c=1;const u=new B;let h=!1;const f=new je,m=new je,g=new je,d=new je,p=new je,v=new je,S=new je,y=new je,M=new je,A=[],D={};function z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function I(O){l.theta-=O}function L(O){l.phi-=O}const X=function(){const O=new B;return function(Se,Ee){O.setFromMatrixColumn(Ee,0),O.multiplyScalar(-Se),u.add(O)}}(),Q=function(){const O=new B;return function(Se,Ee){n.screenSpacePanning===!0?O.setFromMatrixColumn(Ee,1):(O.setFromMatrixColumn(Ee,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(Se),u.add(O)}}(),H=function(){const O=new B;return function(Se,Ee){const we=n.domElement;if(n.object.isPerspectiveCamera){const Re=n.object.position;O.copy(Re).sub(n.target);let De=O.length();De*=Math.tan(n.object.fov/2*Math.PI/180),X(2*Se*De/we.clientHeight,n.object.matrix),Q(2*Ee*De/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(Se*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),Q(Ee*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(O){n.object.isPerspectiveCamera?c/=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*O)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(O){n.object.isPerspectiveCamera?c*=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/O)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(O){f.set(O.clientX,O.clientY)}function $(O){S.set(O.clientX,O.clientY)}function Y(O){d.set(O.clientX,O.clientY)}function re(O){m.set(O.clientX,O.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const W=n.domElement;I(2*Math.PI*g.x/W.clientHeight),L(2*Math.PI*g.y/W.clientHeight),f.copy(m),n.update()}function te(O){y.set(O.clientX,O.clientY),M.subVectors(y,S),M.y>0?V(b()):M.y<0&&F(b()),S.copy(y),n.update()}function P(O){p.set(O.clientX,O.clientY),v.subVectors(p,d).multiplyScalar(n.panSpeed),H(v.x,v.y),d.copy(p),n.update()}function q(O){O.deltaY<0?F(b()):O.deltaY>0&&V(b()),n.update()}function ne(O){let W=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),W=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),W=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),W=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),W=!0;break}W&&(O.preventDefault(),n.update())}function J(){if(A.length===1)f.set(A[0].pageX,A[0].pageY);else{const O=.5*(A[0].pageX+A[1].pageX),W=.5*(A[0].pageY+A[1].pageY);f.set(O,W)}}function ee(){if(A.length===1)d.set(A[0].pageX,A[0].pageY);else{const O=.5*(A[0].pageX+A[1].pageX),W=.5*(A[0].pageY+A[1].pageY);d.set(O,W)}}function k(){const O=A[0].pageX-A[1].pageX,W=A[0].pageY-A[1].pageY,Se=Math.sqrt(O*O+W*W);S.set(0,Se)}function le(){n.enableZoom&&k(),n.enablePan&&ee()}function me(){n.enableZoom&&k(),n.enableRotate&&J()}function Ce(O){if(A.length==1)m.set(O.pageX,O.pageY);else{const Se=He(O),Ee=.5*(O.pageX+Se.x),we=.5*(O.pageY+Se.y);m.set(Ee,we)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const W=n.domElement;I(2*Math.PI*g.x/W.clientHeight),L(2*Math.PI*g.y/W.clientHeight),f.copy(m)}function ye(O){if(A.length===1)p.set(O.pageX,O.pageY);else{const W=He(O),Se=.5*(O.pageX+W.x),Ee=.5*(O.pageY+W.y);p.set(Se,Ee)}v.subVectors(p,d).multiplyScalar(n.panSpeed),H(v.x,v.y),d.copy(p)}function nt(O){const W=He(O),Se=O.pageX-W.x,Ee=O.pageY-W.y,we=Math.sqrt(Se*Se+Ee*Ee);y.set(0,we),M.set(0,Math.pow(y.y/S.y,n.zoomSpeed)),V(M.y),S.copy(y)}function qe(O){n.enableZoom&&nt(O),n.enablePan&&ye(O)}function ze(O){n.enableZoom&&nt(O),n.enableRotate&&Ce(O)}function It(O){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",Dt),n.domElement.addEventListener("pointerup",ue)),pe(O),O.pointerType==="touch"?N(O):bt(O))}function Dt(O){n.enabled!==!1&&(O.pointerType==="touch"?C(O):dt(O))}function ue(O){_e(O),A.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",Dt),n.domElement.removeEventListener("pointerup",ue)),n.dispatchEvent(Yl),s=i.NONE}function it(O){_e(O)}function bt(O){let W;switch(O.button){case 0:W=n.mouseButtons.LEFT;break;case 1:W=n.mouseButtons.MIDDLE;break;case 2:W=n.mouseButtons.RIGHT;break;default:W=-1}switch(W){case Ii.DOLLY:if(n.enableZoom===!1)return;$(O),s=i.DOLLY;break;case Ii.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;Y(O),s=i.PAN}else{if(n.enableRotate===!1)return;U(O),s=i.ROTATE}break;case Ii.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;U(O),s=i.ROTATE}else{if(n.enablePan===!1)return;Y(O),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Sa)}function dt(O){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;re(O);break;case i.DOLLY:if(n.enableZoom===!1)return;te(O);break;case i.PAN:if(n.enablePan===!1)return;P(O);break}}function tn(O){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(O.preventDefault(),n.dispatchEvent(Sa),q(O),n.dispatchEvent(Yl))}function Jt(O){n.enabled===!1||n.enablePan===!1||ne(O)}function N(O){switch(xe(O),A.length){case 1:switch(n.touches.ONE){case Ni.ROTATE:if(n.enableRotate===!1)return;J(),s=i.TOUCH_ROTATE;break;case Ni.PAN:if(n.enablePan===!1)return;ee(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;le(),s=i.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Sa)}function C(O){switch(xe(O),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(O),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ye(O),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qe(O),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(O),n.update();break;default:s=i.NONE}}function ie(O){n.enabled!==!1&&O.preventDefault()}function pe(O){A.push(O)}function _e(O){delete D[O.pointerId];for(let W=0;W<A.length;W++)if(A[W].pointerId==O.pointerId){A.splice(W,1);return}}function xe(O){let W=D[O.pointerId];W===void 0&&(W=new je,D[O.pointerId]=W),W.set(O.pageX,O.pageY)}function He(O){const W=O.pointerId===A[0].pointerId?A[1]:A[0];return D[W.pointerId]}n.domElement.addEventListener("contextmenu",ie),n.domElement.addEventListener("pointerdown",It),n.domElement.addEventListener("pointercancel",it),n.domElement.addEventListener("wheel",tn,{passive:!1}),this.update()}};function q_(r){let e,t,n,i;return e=new Fr({props:{dispose:r[2],object:r[0]}}),n=new ru({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){Ue(e.$$.fragment),t=At(),Ue(n.$$.fragment)},l(s){Be(e.$$.fragment,s),t=Ct(s),Be(n.$$.fragment,s)},m(s,a){Ve(e,s,a),lt(s,t,a),Ve(n,s,a),i=!0},p(s,a){const o={};a[0]&4&&(o.dispose=s[2]),a[0]&1&&(o.object=s[0]),e.$set(o);const l={};a[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(de(e.$$.fragment,s),de(n.$$.fragment,s),i=!0)},o(s){ge(e.$$.fragment,s),ge(n.$$.fragment,s),i=!1},d(s){Ge(e,s),s&&$e(t),Ge(n,s)}}}function X_(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:a=void 0}=e,{enableDamping:o=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:h=void 0}=e,{keyPanSpeed:f=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:d=void 0}=e,{maxPolarAngle:p=void 0}=e,{maxZoom:v=void 0}=e,{minAzimuthAngle:S=void 0}=e,{minDistance:y=void 0}=e,{minPolarAngle:M=void 0}=e,{minZoom:A=void 0}=e,{mouseButtons:D=void 0}=e,{panSpeed:z=void 0}=e,{rotateSpeed:b=void 0}=e,{screenSpacePanning:I=void 0}=e,{touches:L=void 0}=e,{zoomSpeed:X=void 0}=e,{target:Q=void 0}=e,{dispose:H=void 0}=e;const V=nu();Et(r,V,k=>t(30,n=k));const{renderer:F,invalidate:U}=un();if(!F)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Ga))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const $=Ci(),Y=()=>{U("Orbitcontrols: change event"),$("change")},re=()=>$("start"),te=()=>$("end"),P=new j_(n,F.domElement);Sn(n).orbitControls=P,P.addEventListener("change",Y),P.addEventListener("start",re),P.addEventListener("end",te),yt(()=>{n&&delete Sn(n).orbitControls,P.removeEventListener("change",Y),P.removeEventListener("start",re),P.removeEventListener("end",te)});const{start:q,stop:ne}=Fs(()=>P.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),J=new Lt,ee=()=>{t(0,P.target=J.position,P),P.update(),U("OrbitControls: target changed")};return r.$$set=k=>{"autoRotate"in k&&t(6,i=k.autoRotate),"autoRotateSpeed"in k&&t(7,s=k.autoRotateSpeed),"dampingFactor"in k&&t(8,a=k.dampingFactor),"enableDamping"in k&&t(9,o=k.enableDamping),"enabled"in k&&t(10,l=k.enabled),"enablePan"in k&&t(11,c=k.enablePan),"enableRotate"in k&&t(12,u=k.enableRotate),"enableZoom"in k&&t(13,h=k.enableZoom),"keyPanSpeed"in k&&t(14,f=k.keyPanSpeed),"keys"in k&&t(15,m=k.keys),"maxAzimuthAngle"in k&&t(16,g=k.maxAzimuthAngle),"maxDistance"in k&&t(17,d=k.maxDistance),"maxPolarAngle"in k&&t(18,p=k.maxPolarAngle),"maxZoom"in k&&t(19,v=k.maxZoom),"minAzimuthAngle"in k&&t(20,S=k.minAzimuthAngle),"minDistance"in k&&t(21,y=k.minDistance),"minPolarAngle"in k&&t(22,M=k.minPolarAngle),"minZoom"in k&&t(23,A=k.minZoom),"mouseButtons"in k&&t(24,D=k.mouseButtons),"panSpeed"in k&&t(25,z=k.panSpeed),"rotateSpeed"in k&&t(26,b=k.rotateSpeed),"screenSpacePanning"in k&&t(27,I=k.screenSpacePanning),"touches"in k&&t(28,L=k.touches),"zoomSpeed"in k&&t(29,X=k.zoomSpeed),"target"in k&&t(1,Q=k.target),"dispose"in k&&t(2,H=k.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,P.autoRotate=i,P),s!==void 0&&t(0,P.autoRotateSpeed=s,P),a!==void 0&&t(0,P.dampingFactor=a,P),o!==void 0&&t(0,P.enableDamping=o,P),l!==void 0&&t(0,P.enabled=l,P),c!==void 0&&t(0,P.enablePan=c,P),u!==void 0&&t(0,P.enableRotate=u,P),h!==void 0&&t(0,P.enableZoom=h,P),f!==void 0&&t(0,P.keyPanSpeed=f,P),m!==void 0&&t(0,P.keys=m,P),g!==void 0&&t(0,P.maxAzimuthAngle=g,P),d!==void 0&&t(0,P.maxDistance=d,P),p!==void 0&&t(0,P.maxPolarAngle=p,P),v!==void 0&&t(0,P.maxZoom=v,P),S!==void 0&&t(0,P.minAzimuthAngle=S,P),y!==void 0&&t(0,P.minDistance=y,P),M!==void 0&&t(0,P.minPolarAngle=M,P),A!==void 0&&t(0,P.minZoom=A,P),D!==void 0&&t(0,P.mouseButtons=D,P),z!==void 0&&t(0,P.panSpeed=z,P),b!==void 0&&t(0,P.rotateSpeed=b,P),I!==void 0&&t(0,P.screenSpacePanning=I,P),L!==void 0&&t(0,P.touches=L,P),X!==void 0&&t(0,P.zoomSpeed=X,P),P.update(),U("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||o?q():ne())},[P,Q,H,V,J,ee,i,s,a,o,l,c,u,h,f,m,g,d,p,v,S,y,M,A,D,z,b,I,L,X]}class Y_ extends wt{constructor(e){super(),Mt(this,e,X_,q_,St,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}function Z_(r,e,t){let{object:n}=e,i=n,{interactive:s=!1}=e,{ignorePointer:a=!1}=e;const o=Ci(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:h}=Ja(),{invalidate:f}=un(),m=d=>{h(d),c(d),delete Sn(d).eventDispatcher},g=(d,p,v)=>{Sn(d).eventDispatcher=o,p?(h(d),c(d)):(u(d),v?l(d):c(d))};return yt(()=>{m(n),f("InteractiveObject: object removed")}),r.$$set=d=>{"object"in d&&t(0,n=d.object),"interactive"in d&&t(1,s=d.interactive),"ignorePointer"in d&&t(2,a=d.ignorePointer)},r.$$.update=()=>{r.$$.dirty&15&&(n!==i?(m(i),g(n,a,s),f("InteractiveObject: object changed"),t(3,i=n)):n===i&&(g(n,a,s),f("InteractiveObject: props changed")))},[n,s,a,i]}class K_ extends wt{constructor(e){super(),Mt(this,e,Z_,null,St,{object:0,interactive:1,ignorePointer:2})}}function J_(r){let e;const t=r[16].default,n=In(t,r,r[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&134217728)&&Nn(n,t,i,i[27],e?On(t,i[27],s,null):kn(i[27]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function Q_(r){let e,t,n,i,s;function a(l){r[17](l)}let o={object:r[1],lookAt:r[5],position:r[2],scale:r[3],rotation:r[4],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],visible:r[11],userData:r[12],dispose:r[13],viewportAware:r[6],$$slots:{default:[J_]},$$scope:{ctx:r}};return r[0]!==void 0&&(o.inViewport=r[0]),e=new Qa({props:o}),Ai.push(()=>ar(e,"inViewport",a)),e.$on("viewportenter",r[18]),e.$on("viewportleave",r[19]),i=new K_({props:{object:r[1],interactive:r[14],ignorePointer:r[15]}}),i.$on("click",r[20]),i.$on("contextmenu",r[21]),i.$on("pointerup",r[22]),i.$on("pointerdown",r[23]),i.$on("pointerenter",r[24]),i.$on("pointerleave",r[25]),i.$on("pointermove",r[26]),{c(){Ue(e.$$.fragment),n=At(),Ue(i.$$.fragment)},l(l){Be(e.$$.fragment,l),n=Ct(l),Be(i.$$.fragment,l)},m(l,c){Ve(e,l,c),lt(l,n,c),Ve(i,l,c),s=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],or(()=>t=!1)),e.$set(u);const h={};c&2&&(h.object=l[1]),c&16384&&(h.interactive=l[14]),c&32768&&(h.ignorePointer=l[15]),i.$set(h)},i(l){s||(de(e.$$.fragment,l),de(i.$$.fragment,l),s=!0)},o(l){ge(e.$$.fragment,l),ge(i.$$.fragment,l),s=!1},d(l){Ge(e,l),l&&$e(n),Ge(i,l)}}}function $_(r,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:d=void 0}=e,{visible:p=void 0}=e,{userData:v=void 0}=e,{dispose:S=void 0}=e,{interactive:y=!1}=e,{ignorePointer:M=!1}=e;function A(F){h=F,t(0,h)}function D(F){vt.call(this,r,F)}function z(F){vt.call(this,r,F)}function b(F){vt.call(this,r,F)}function I(F){vt.call(this,r,F)}function L(F){vt.call(this,r,F)}function X(F){vt.call(this,r,F)}function Q(F){vt.call(this,r,F)}function H(F){vt.call(this,r,F)}function V(F){vt.call(this,r,F)}return r.$$set=F=>{"mesh"in F&&t(1,s=F.mesh),"position"in F&&t(2,a=F.position),"scale"in F&&t(3,o=F.scale),"rotation"in F&&t(4,l=F.rotation),"lookAt"in F&&t(5,c=F.lookAt),"viewportAware"in F&&t(6,u=F.viewportAware),"inViewport"in F&&t(0,h=F.inViewport),"castShadow"in F&&t(7,f=F.castShadow),"receiveShadow"in F&&t(8,m=F.receiveShadow),"frustumCulled"in F&&t(9,g=F.frustumCulled),"renderOrder"in F&&t(10,d=F.renderOrder),"visible"in F&&t(11,p=F.visible),"userData"in F&&t(12,v=F.userData),"dispose"in F&&t(13,S=F.dispose),"interactive"in F&&t(14,y=F.interactive),"ignorePointer"in F&&t(15,M=F.ignorePointer),"$$scope"in F&&t(27,i=F.$$scope)},[h,s,a,o,l,c,u,f,m,g,d,p,v,S,y,M,n,A,D,z,b,I,L,X,Q,H,V,i]}class e0 extends wt{constructor(e){super(),Mt(this,e,$_,Q_,St,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function t0(r){let e;const t=r[20].default,n=In(t,r,r[31],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&1)&&Nn(n,t,i,i[31],e?On(t,i[31],s,null):kn(i[31]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function n0(r){let e,t,n,i,s,a,o;e=new Fr({props:{dispose:r[11],object:r[15]}}),n=new Fr({props:{dispose:r[11],object:r[16]}});function l(u){r[21](u)}let c={mesh:r[17],position:r[1],scale:r[2],rotation:r[3],lookAt:r[14],castShadow:r[5],receiveShadow:r[6],frustumCulled:r[7],renderOrder:r[8],visible:r[9],interactive:r[12],ignorePointer:r[13],userData:r[10],dispose:r[11],viewportAware:r[4],$$slots:{default:[t0]},$$scope:{ctx:r}};return r[0]!==void 0&&(c.inViewport=r[0]),s=new e0({props:c}),Ai.push(()=>ar(s,"inViewport",l)),s.$on("click",r[22]),s.$on("contextmenu",r[23]),s.$on("pointerup",r[24]),s.$on("pointerdown",r[25]),s.$on("pointerenter",r[26]),s.$on("pointerleave",r[27]),s.$on("pointermove",r[28]),s.$on("viewportenter",r[29]),s.$on("viewportleave",r[30]),{c(){Ue(e.$$.fragment),t=At(),Ue(n.$$.fragment),i=At(),Ue(s.$$.fragment)},l(u){Be(e.$$.fragment,u),t=Ct(u),Be(n.$$.fragment,u),i=Ct(u),Be(s.$$.fragment,u)},m(u,h){Ve(e,u,h),lt(u,t,h),Ve(n,u,h),lt(u,i,h),Ve(s,u,h),o=!0},p(u,h){const f={};h[0]&2048&&(f.dispose=u[11]),h[0]&32768&&(f.object=u[15]),e.$set(f);const m={};h[0]&2048&&(m.dispose=u[11]),h[0]&65536&&(m.object=u[16]),n.$set(m);const g={};h[0]&2&&(g.position=u[1]),h[0]&4&&(g.scale=u[2]),h[0]&8&&(g.rotation=u[3]),h[0]&16384&&(g.lookAt=u[14]),h[0]&32&&(g.castShadow=u[5]),h[0]&64&&(g.receiveShadow=u[6]),h[0]&128&&(g.frustumCulled=u[7]),h[0]&256&&(g.renderOrder=u[8]),h[0]&512&&(g.visible=u[9]),h[0]&4096&&(g.interactive=u[12]),h[0]&8192&&(g.ignorePointer=u[13]),h[0]&1024&&(g.userData=u[10]),h[0]&2048&&(g.dispose=u[11]),h[0]&16&&(g.viewportAware=u[4]),h[1]&1&&(g.$$scope={dirty:h,ctx:u}),!a&&h[0]&1&&(a=!0,g.inViewport=u[0],or(()=>a=!1)),s.$set(g)},i(u){o||(de(e.$$.fragment,u),de(n.$$.fragment,u),de(s.$$.fragment,u),o=!0)},o(u){ge(e.$$.fragment,u),ge(n.$$.fragment,u),ge(s.$$.fragment,u),o=!1},d(u){Ge(e,u),u&&$e(t),Ge(n,u),u&&$e(i),Ge(s,u)}}}function i0(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:d=void 0}=e,{dispose:p=void 0}=e,{interactive:v=!1}=e,{ignorePointer:S=!1}=e,{lookAt:y=void 0}=e,{geometry:M}=e,{material:A}=e,D=A,z=M;const{invalidate:b}=un(),I=new en(M,A),L=()=>I;function X(P){c=P,t(0,c)}function Q(P){vt.call(this,r,P)}function H(P){vt.call(this,r,P)}function V(P){vt.call(this,r,P)}function F(P){vt.call(this,r,P)}function U(P){vt.call(this,r,P)}function $(P){vt.call(this,r,P)}function Y(P){vt.call(this,r,P)}function re(P){vt.call(this,r,P)}function te(P){vt.call(this,r,P)}return r.$$set=P=>{"position"in P&&t(1,s=P.position),"scale"in P&&t(2,a=P.scale),"rotation"in P&&t(3,o=P.rotation),"viewportAware"in P&&t(4,l=P.viewportAware),"inViewport"in P&&t(0,c=P.inViewport),"castShadow"in P&&t(5,u=P.castShadow),"receiveShadow"in P&&t(6,h=P.receiveShadow),"frustumCulled"in P&&t(7,f=P.frustumCulled),"renderOrder"in P&&t(8,m=P.renderOrder),"visible"in P&&t(9,g=P.visible),"userData"in P&&t(10,d=P.userData),"dispose"in P&&t(11,p=P.dispose),"interactive"in P&&t(12,v=P.interactive),"ignorePointer"in P&&t(13,S=P.ignorePointer),"lookAt"in P&&t(14,y=P.lookAt),"geometry"in P&&t(15,M=P.geometry),"material"in P&&t(16,A=P.material),"$$scope"in P&&t(31,i=P.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&327680&&(A!==D?(L().material=A,b("Mesh: material changed")):b("Mesh: material props changed"),t(18,D=A)),r.$$.dirty[0]&557056&&(M!==z?(L().geometry=M,b("Mesh: geometry changed")):b("Mesh: geometry props changed"),t(19,z=M))},[c,s,a,o,l,u,h,f,m,g,d,p,v,S,y,M,A,I,D,z,n,X,Q,H,V,F,U,$,Y,re,te,i]}class r0 extends wt{constructor(e){super(),Mt(this,e,i0,n0,St,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const su=new Lt;su.scale.set(0,0,0);su.matrix;new Ke().fromArray(new Array(16).fill(0));new Ye(16777215);function s0(r){let e;const t=r[14].default,n=In(t,r,r[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&Nn(n,t,i,i[18],e?On(t,i[18],s,null):kn(i[18]),null)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function a0(r){let e,t,n;function i(a){r[15](a)}let s={object:r[13],position:r[1],scale:r[2],rotation:r[3],lookAt:r[4],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],castShadow:r[6],receiveShadow:r[7],viewportAware:r[5],$$slots:{default:[s0]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new Qa({props:s}),Ai.push(()=>ar(e,"inViewport",i)),e.$on("viewportenter",r[16]),e.$on("viewportleave",r[17]),{c(){Ue(e.$$.fragment)},l(a){Be(e.$$.fragment,a)},m(a,o){Ve(e,a,o),n=!0},p(a,[o]){const l={};o&2&&(l.position=a[1]),o&4&&(l.scale=a[2]),o&8&&(l.rotation=a[3]),o&16&&(l.lookAt=a[4]),o&256&&(l.frustumCulled=a[8]),o&512&&(l.renderOrder=a[9]),o&1024&&(l.visible=a[10]),o&2048&&(l.userData=a[11]),o&4096&&(l.dispose=a[12]),o&64&&(l.castShadow=a[6]),o&128&&(l.receiveShadow=a[7]),o&32&&(l.viewportAware=a[5]),o&262144&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],or(()=>t=!1)),e.$set(l)},i(a){n||(de(e.$$.fragment,a),n=!0)},o(a){ge(e.$$.fragment,a),n=!1},d(a){Ge(e,a)}}}function o0(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{lookAt:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:m=void 0}=e,{renderOrder:g=void 0}=e,{visible:d=void 0}=e,{userData:p=void 0}=e,{dispose:v=void 0}=e;const S=new Un;function y(D){u=D,t(0,u)}function M(D){vt.call(this,r,D)}function A(D){vt.call(this,r,D)}return r.$$set=D=>{"position"in D&&t(1,s=D.position),"scale"in D&&t(2,a=D.scale),"rotation"in D&&t(3,o=D.rotation),"lookAt"in D&&t(4,l=D.lookAt),"viewportAware"in D&&t(5,c=D.viewportAware),"inViewport"in D&&t(0,u=D.inViewport),"castShadow"in D&&t(6,h=D.castShadow),"receiveShadow"in D&&t(7,f=D.receiveShadow),"frustumCulled"in D&&t(8,m=D.frustumCulled),"renderOrder"in D&&t(9,g=D.renderOrder),"visible"in D&&t(10,d=D.visible),"userData"in D&&t(11,p=D.userData),"dispose"in D&&t(12,v=D.dispose),"$$scope"in D&&t(18,i=D.$$scope)},[u,s,a,o,l,c,h,f,m,g,d,p,v,S,n,y,M,A,i]}class l0 extends wt{constructor(e){super(),Mt(this,e,o0,a0,St,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,group:13})}get group(){return this.$$.ctx[13]}}const au=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Ta=Symbol("initialValueBeforeAttach"),c0=()=>{const{invalidate:r}=un();let e=!1,t=Ta,n,i,s;const a=(l,c,u)=>{if(o(),!u){const h=l;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(c,l);else{const{target:h,key:f}=au(c,u);t=h[f],h[f]=l,i=h,s=f}e=!0,r()}},o=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==Ta&&(i[s]=t,t=Ta,i=void 0,s=void 0),e=!1,r())};return yt(()=>{o()}),{update:a}},u0=r=>r&&r.isCamera,ou=r=>r&&r.isOrthographicCamera,lu=r=>r&&r.isPerspectiveCamera,f0=r=>lu(r)||ou(r),h0=()=>{const{invalidate:r,size:e}=un(),{setCamera:t}=Ja();let n,i;yt(()=>{i==null||i()});const s=l=>{n&&(ou(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):lu(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!f0(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!u0(l)||!c||(t(l),r())}}},Zl=r=>!!(r!=null&&r.addEventListener),d0=()=>{const r=Ci(),e=bu(),t=f=>{f!=null&&f.type&&r(f.type,f)},n=(f,m)=>{Zl(f)&&m.forEach(g=>{f.removeEventListener(g,t)})},i=(f,m)=>{Zl(f)&&m.forEach(g=>{f.addEventListener(g,t)})};let s=[],a;const o=Zt([]),l=o.subscribe(f=>{n(a,s),i(a,f),s=f});yt(l);const c=Zt(),u=c.subscribe(f=>{n(a,s),i(f,s),a=f});return yt(u),yt(()=>{n(a,s)}),mc(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:f=>{c.set(f)}}},p0=["$$scope","$$slots","type","args","attach","instance"],m0=["fov","aspect","near","far","left","right","top","bottom","zoom"],g0=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,_0=()=>{const{invalidate:r}=un(),e=new Map,t=(i,s,a,o)=>{var u,h;if(g0(a)){const f=e.get(s);if(f&&f.instance===i&&f.value===a)return;e.set(s,{instance:i,value:a})}const{key:l,target:c}=au(i,s);if(!Array.isArray(a)&&typeof a=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(a);else if(typeof((h=c[l])==null?void 0:h.set)=="function")Array.isArray(a)?c[l].set(...a):c[l].set(a);else{if(c[l]=a,o.manualCamera)return;m0.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,a)=>{for(const o in s)p0.includes(o)||t(i,o,s[o],a),r()}}},v0=r=>({ref:r&1}),Kl=r=>({ref:r[0]}),b0=r=>({ref:r&1}),Jl=r=>({ref:r[0]});function Ql(r){let e,t;return e=new Fr({props:{object:r[0],dispose:r[1]}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function x0(r){let e;const t=r[12].default,n=In(t,r,r[13],Kl);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Nn(n,t,i,i[13],e?On(t,i[13],s,v0):kn(i[13]),Kl)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function y0(r){let e,t;return e=new Ka({props:{object:r[0],$$slots:{default:[w0]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function w0(r){let e;const t=r[12].default,n=In(t,r,r[13],Jl);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Nn(n,t,i,i[13],e?On(t,i[13],s,b0):kn(i[13]),Jl)},i(i){e||(de(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function M0(r){let e=r[4](r[0]),t,n,i,s,a,o,l=e&&Ql(r);const c=[y0,x0],u=[];function h(f,m){return m&1&&(n=null),n==null&&(n=!!f[3](f[0])),n?0:1}return i=h(r,-1),s=u[i]=c[i](r),{c(){l&&l.c(),t=At(),s.c(),a=zt()},l(f){l&&l.l(f),t=Ct(f),s.l(f),a=zt()},m(f,m){l&&l.m(f,m),lt(f,t,m),u[i].m(f,m),lt(f,a,m),o=!0},p(f,[m]){m&1&&(e=f[4](f[0])),e?l?(l.p(f,m),m&1&&de(l,1)):(l=Ql(f),l.c(),de(l,1),l.m(t.parentNode,t)):l&&(Dn(),ge(l,1,1,()=>{l=null}),Pn());let g=i;i=h(f,m),i===g?u[i].p(f,m):(Dn(),ge(u[g],1,1,()=>{u[g]=null}),Pn(),s=u[i],s?s.p(f,m):(s=u[i]=c[i](f),s.c()),de(s,1),s.m(a.parentNode,a))},i(f){o||(de(l),de(s),o=!0)},o(f){ge(l),ge(s),o=!1},d(f){l&&l.d(f),f&&$e(t),u[i].d(f),f&&$e(a)}}}function S0(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=so(e,n),s,{$$slots:a={},$$scope:o}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:m=void 0}=e;const g=Vn("threlte-hierarchical-parent-context");Et(r,g,L=>t(11,s=L));const d=L=>typeof L=="function"&&/^\s*class\s+/.test(L.toString()),p=L=>Array.isArray(L);let{ref:v=d(l)&&p(c)?new l(...c):d(l)?new l:l}=e,S=!1;const y=Zt(v);Ln("threlte-hierarchical-parent-context",y);const M=_0(),A=h0(),D=c0(),z=d0(),b=L=>!!L.isObject3D,I=L=>L.dispose!==void 0;return r.$$set=L=>{e=ao(ao({},e),xu(L)),t(21,i=so(e,n)),"type"in L&&t(5,l=L.type),"args"in L&&t(6,c=L.args),"attach"in L&&t(7,u=L.attach),"manual"in L&&t(8,h=L.manual),"makeDefault"in L&&t(9,f=L.makeDefault),"dispose"in L&&t(1,m=L.dispose),"ref"in L&&t(0,v=L.ref),"$$scope"in L&&t(13,o=L.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(S?t(0,v=d(l)&&p(c)?new l(...c):d(l)?new l:l):t(10,S=!0)),r.$$.dirty&1&&y.set(v),M.updateProps(v,i,{manualCamera:h}),r.$$.dirty&257&&A.update(v,h),r.$$.dirty&513&&A.makeDefaultCamera(v,f),r.$$.dirty&2177&&D.update(v,s,u),r.$$.dirty&1&&z.updateRef(v)},[v,m,g,b,I,l,c,u,h,f,S,s,a,o]}class Xt extends wt{constructor(e){super(),Mt(this,e,S0,M0,St,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function T0(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class $l extends wt{constructor(e){super(),Mt(this,e,T0,null,St,{})}}new Proxy($l,{get(r,e){return r[e]||$l}});$a(Ia,()=>new Ia(Zc));function Zi(r,e="xyz"){var t;if(r.hasAttribute(e)){const n=(t=r.getAttribute(e))==null?void 0:t.split(" ");if(n){const i=[];for(const s of n)i.push(parseFloat(s));return i}}}function E0(r){return r?new Ye(r[0],r[1],r[2]):new Ye("white")}class A0{constructor(e,t=""){hi(this,"filename");hi(this,"name");hi(this,"colors",{});hi(this,"links",{});hi(this,"joints",[]);hi(this,"prefix","");this.filename=e,this.prefix=t}async load(){return fetch(this.filename).then(e=>e.text()).then(e=>new window.DOMParser().parseFromString(e,"text/xml")).then(e=>this.parseRobotXMLNode(e.documentElement))}parseRobotXMLNode(e){const t=e.nodeName;if(t!=="robot")throw new Error(`Invalid URDF: no root node ${t}`);return this.name=e.getAttribute("name"),this.parseColorsFromRobot(e),this.parseLinks(e),this.parseJoints(e),{name:this.name,links:this.links,joints:this.joints}}parseColorsFromRobot(e){const t=e.getElementsByTagName("material");for(let n=0;n<t.length;n++){const i=t[n],s=this.colorFromMaterial(i);s&&(this.colors[s.name]=s.rgba)}}colorFromMaterial(e){if(!e.hasAttribute("name")){console.warn("Found material-tag with name without name inside robot tag!");return}const t=e.getAttribute("name"),n=e.getElementsByTagName("color");if(n.length===0)return;const i=n[0];if(!i.hasAttribute("rgba")){console.warn(`Color tag ${t} does not have expected "rgba" attribute!`);return}return{name:t,rgba:Zi(i,"rgba")}}parseLinks(e){const t=e.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n],s=i.getElementsByTagName("visual"),a={visual:[]};i.hasAttribute("name")&&(a.name=i.getAttribute("name"),this.links[a.name]=a);for(let o=0;o<s.length;o++)a.visual.push(this.parseVisual(s[o]))}}parseVisual(e){let t={};for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"geometry":this.parseGeometry(i,t);break;case"origin":let s=Zi(i);s&&(t.origin_xyz=s);let a=Zi(i,"rpy");a&&(t.origin_rpy=a);break;case"material":const o=i.getElementsByTagName("color");if(o.length>0&&o[0].hasAttribute("rgba"))t.color_rgba=Zi(o[0],"rgba");else if(i.hasAttribute("name")){let l=i.getAttribute("name");t.color_rgba=this.colors[l]}}}return t}parseGeometry(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"mesh":let s=[1,1,1],a=i.getAttribute("scale");if(a){const h=a.split(" ");for(const f in h)s[f]=parseFloat(h[f])}let o=i.getAttribute("filename");o=o.replace("package:/",this.prefix);let l="stl";switch(o.substring(o.length-3)){case"fbx":l="fbx";break;case"obj":l="obj";break;case"stl":l="stl";break;case"dae":l="dae";break;default:throw new Error("Unknown type "+o)}t.geometry={filename:o,type:l,scale:s},t.type="mesh";return;case"cylinder":const c={};i.hasAttribute("length")&&(c.length=parseFloat(i.getAttribute("length"))),i.hasAttribute("radius")&&(c.radius=parseFloat(i.getAttribute("radius"))),t.geometry=c,t.type="cylinder";return;case"box":const u={size:[1,1,1]};if(i.hasAttribute("size")){const f=i.getAttribute("size").split(" ");for(const m in f)u.size[m]=parseFloat(f[m])}t.geometry=u;return}}}parseJoints(e){const t=e.getElementsByTagName("joint");for(let n=0;n<t.length;n++){const i=t[n],s=i.getElementsByTagName("origin");let a=[0,0,0],o=[0,0,0];if(s.length===1){let f=Zi(s[0]);f&&(o=f);let m=Zi(s[0],"rpy");m&&(a=m)}let l;const c=i.getElementsByTagName("parent");if(c.length===1){const f=c[0].getAttribute("link");f&&this.links[f]?l=this.links[f]:l={name:f,visual:[]}}let u;const h=i.getElementsByTagName("child");if(h.length===1){const f=h[0].getAttribute("link");f&&this.links[f]?u=this.links[f]:u={name:f,visual:[]}}if(u&&l){const f={name:i.getAttribute("name")||void 0,origin_rpy:a,origin_xyz:o,parent:l,child:u};this.joints.push(f)}}}getRootJoints(){const e=[];for(const t of this.joints){let n=!0;for(const i of this.joints)if(t.parent.name===i.child.name){n=!1;break}n&&e.push(t)}return console.log(e),e}getChildJoints(e){const t=[];if(!this.joints)return[];for(const n of this.joints)n.parent===e&&t.push(n);return t}}class ec extends Hg{constructor(e){super(e)}parse(e){function t(U){switch(U.image_type){case f:case d:(U.colormap_length>256||U.colormap_size!==24||U.colormap_type!==1)&&console.error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case g:case p:case v:U.colormap_type&&console.error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:console.error("THREE.TGALoader: No data.");default:console.error('THREE.TGALoader: Invalid type "%s".',U.image_type)}(U.width<=0||U.height<=0)&&console.error("THREE.TGALoader: Invalid image size."),U.pixel_size!==8&&U.pixel_size!==16&&U.pixel_size!==24&&U.pixel_size!==32&&console.error('THREE.TGALoader: Invalid pixel size "%s".',U.pixel_size)}function n(U,$,Y,re,te){let P,q;const ne=Y.pixel_size>>3,J=Y.width*Y.height*ne;if($&&(q=te.subarray(re,re+=Y.colormap_length*(Y.colormap_size>>3))),U){P=new Uint8Array(J);let ee,k,le,me=0;const Ce=new Uint8Array(ne);for(;me<J;)if(ee=te[re++],k=(ee&127)+1,ee&128){for(le=0;le<ne;++le)Ce[le]=te[re++];for(le=0;le<k;++le)P.set(Ce,me+le*ne);me+=ne*k}else{for(k*=ne,le=0;le<k;++le)P[me+le]=te[re++];me+=k}}else P=te.subarray(re,re+=$?Y.width*Y.height:J);return{pixel_data:P,palettes:q}}function i(U,$,Y,re,te,P,q,ne,J){const ee=J;let k,le=0,me,Ce;const ye=L.width;for(Ce=$;Ce!==re;Ce+=Y)for(me=te;me!==q;me+=P,le++)k=ne[le],U[(me+ye*Ce)*4+3]=255,U[(me+ye*Ce)*4+2]=ee[k*3+0],U[(me+ye*Ce)*4+1]=ee[k*3+1],U[(me+ye*Ce)*4+0]=ee[k*3+2];return U}function s(U,$,Y,re,te,P,q,ne){let J,ee=0,k,le;const me=L.width;for(le=$;le!==re;le+=Y)for(k=te;k!==q;k+=P,ee+=2)J=ne[ee+0]+(ne[ee+1]<<8),U[(k+me*le)*4+0]=(J&31744)>>7,U[(k+me*le)*4+1]=(J&992)>>2,U[(k+me*le)*4+2]=(J&31)<<3,U[(k+me*le)*4+3]=J&32768?0:255;return U}function a(U,$,Y,re,te,P,q,ne){let J=0,ee,k;const le=L.width;for(k=$;k!==re;k+=Y)for(ee=te;ee!==q;ee+=P,J+=3)U[(ee+le*k)*4+3]=255,U[(ee+le*k)*4+2]=ne[J+0],U[(ee+le*k)*4+1]=ne[J+1],U[(ee+le*k)*4+0]=ne[J+2];return U}function o(U,$,Y,re,te,P,q,ne){let J=0,ee,k;const le=L.width;for(k=$;k!==re;k+=Y)for(ee=te;ee!==q;ee+=P,J+=4)U[(ee+le*k)*4+2]=ne[J+0],U[(ee+le*k)*4+1]=ne[J+1],U[(ee+le*k)*4+0]=ne[J+2],U[(ee+le*k)*4+3]=ne[J+3];return U}function l(U,$,Y,re,te,P,q,ne){let J,ee=0,k,le;const me=L.width;for(le=$;le!==re;le+=Y)for(k=te;k!==q;k+=P,ee++)J=ne[ee],U[(k+me*le)*4+0]=J,U[(k+me*le)*4+1]=J,U[(k+me*le)*4+2]=J,U[(k+me*le)*4+3]=255;return U}function c(U,$,Y,re,te,P,q,ne){let J=0,ee,k;const le=L.width;for(k=$;k!==re;k+=Y)for(ee=te;ee!==q;ee+=P,J+=2)U[(ee+le*k)*4+0]=ne[J+0],U[(ee+le*k)*4+1]=ne[J+0],U[(ee+le*k)*4+2]=ne[J+0],U[(ee+le*k)*4+3]=ne[J+1];return U}function u(U,$,Y,re,te){let P,q,ne,J,ee,k;switch((L.flags&S)>>y){default:case D:P=0,ne=1,ee=$,q=0,J=1,k=Y;break;case M:P=0,ne=1,ee=$,q=Y-1,J=-1,k=-1;break;case z:P=$-1,ne=-1,ee=-1,q=0,J=1,k=Y;break;case A:P=$-1,ne=-1,ee=-1,q=Y-1,J=-1,k=-1;break}if(H)switch(L.pixel_size){case 8:l(U,q,J,k,P,ne,ee,re);break;case 16:c(U,q,J,k,P,ne,ee,re);break;default:console.error("THREE.TGALoader: Format not supported.");break}else switch(L.pixel_size){case 8:i(U,q,J,k,P,ne,ee,re,te);break;case 16:s(U,q,J,k,P,ne,ee,re);break;case 24:a(U,q,J,k,P,ne,ee,re);break;case 32:o(U,q,J,k,P,ne,ee,re);break;default:console.error("THREE.TGALoader: Format not supported.");break}return U}const h=0,f=1,m=2,g=3,d=9,p=10,v=11,S=48,y=4,M=0,A=1,D=2,z=3;e.length<19&&console.error("THREE.TGALoader: Not enough data to contain header.");let b=0;const I=new Uint8Array(e),L={id_length:I[b++],colormap_type:I[b++],image_type:I[b++],colormap_index:I[b++]|I[b++]<<8,colormap_length:I[b++]|I[b++]<<8,colormap_size:I[b++],origin:[I[b++]|I[b++]<<8,I[b++]|I[b++]<<8],width:I[b++]|I[b++]<<8,height:I[b++]|I[b++]<<8,pixel_size:I[b++],flags:I[b++]};t(L),L.id_length+b>e.length&&console.error("THREE.TGALoader: No data."),b+=L.id_length;let X=!1,Q=!1,H=!1;switch(L.image_type){case d:X=!0,Q=!0;break;case f:Q=!0;break;case p:X=!0;break;case m:break;case v:X=!0,H=!0;break;case g:H=!0;break}const V=new Uint8Array(L.width*L.height*4),F=n(X,Q,L,b,I);return u(V,L.width,L.height,F.pixel_data,F.palettes),{data:V,width:L.width,height:L.height,flipY:!0,generateMipmaps:!0,minFilter:Ti}}}class tc extends dr{constructor(e){super(e)}load(e,t,n,i){const s=this,a=s.path===""?Qc.extractUrlBase(e):s.path,o=new Xa(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){function n(x,_){const T=[],w=x.childNodes;for(let E=0,K=w.length;E<K;E++){const oe=w[E];oe.nodeName===_&&T.push(oe)}return T}function i(x){if(x.length===0)return[];const _=x.trim().split(/\s+/),T=new Array(_.length);for(let w=0,E=_.length;w<E;w++)T[w]=_[w];return T}function s(x){if(x.length===0)return[];const _=x.trim().split(/\s+/),T=new Array(_.length);for(let w=0,E=_.length;w<E;w++)T[w]=parseFloat(_[w]);return T}function a(x){if(x.length===0)return[];const _=x.trim().split(/\s+/),T=new Array(_.length);for(let w=0,E=_.length;w<E;w++)T[w]=parseInt(_[w]);return T}function o(x){return x.substring(1)}function l(){return"three_default_"+du++}function c(x){return Object.keys(x).length===0}function u(x){return{unit:h(n(x,"unit")[0]),upAxis:f(n(x,"up_axis")[0])}}function h(x){return x!==void 0&&x.hasAttribute("meter")===!0?parseFloat(x.getAttribute("meter")):1}function f(x){return x!==void 0?x.textContent:"Y_UP"}function m(x,_,T,w){const E=n(x,_)[0];if(E!==void 0){const K=n(E,T);for(let oe=0;oe<K.length;oe++)w(K[oe])}}function g(x,_){for(const T in x){const w=x[T];w.build=_(x[T])}}function d(x,_){return x.build!==void 0||(x.build=_(x)),x.build}function p(x){const _={sources:{},samplers:{},channels:{}};let T=!1;for(let w=0,E=x.childNodes.length;w<E;w++){const K=x.childNodes[w];if(K.nodeType!==1)continue;let oe;switch(K.nodeName){case"source":oe=K.getAttribute("id"),_.sources[oe]=he(K);break;case"sampler":oe=K.getAttribute("id"),_.samplers[oe]=v(K);break;case"channel":oe=K.getAttribute("target"),_.channels[oe]=S(K);break;case"animation":p(K),T=!0;break;default:console.log(K)}}T===!1&&(We.animations[x.getAttribute("id")||_r.generateUUID()]=_)}function v(x){const _={inputs:{}};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"input":const K=o(E.getAttribute("source")),oe=E.getAttribute("semantic");_.inputs[oe]=K;break}}return _}function S(x){const _={};let w=x.getAttribute("target").split("/");const E=w.shift();let K=w.shift();const oe=K.indexOf("(")!==-1,Ae=K.indexOf(".")!==-1;if(Ae)w=K.split("."),K=w.shift(),_.member=w.shift();else if(oe){const ve=K.split("(");K=ve.shift();for(let Me=0;Me<ve.length;Me++)ve[Me]=parseInt(ve[Me].replace(/\)/,""));_.indices=ve}return _.id=E,_.sid=K,_.arraySyntax=oe,_.memberSyntax=Ae,_.sampler=o(x.getAttribute("source")),_}function y(x){const _=[],T=x.channels,w=x.samplers,E=x.sources;for(const K in T)if(T.hasOwnProperty(K)){const oe=T[K],Ae=w[oe.sampler],ve=Ae.inputs.INPUT,Me=Ae.inputs.OUTPUT,Ie=E[ve],fe=E[Me],Pe=A(oe,Ie,fe);L(Pe,_)}return _}function M(x){return d(We.animations[x],y)}function A(x,_,T){const w=We.nodes[x.id],E=dn(w.id),K=w.transforms[x.sid],oe=w.matrix.clone().transpose();let Ae,ve,Me,Ie,fe,Pe;const Le={};switch(K){case"matrix":for(Me=0,Ie=_.array.length;Me<Ie;Me++)if(Ae=_.array[Me],ve=Me*T.stride,Le[Ae]===void 0&&(Le[Ae]={}),x.arraySyntax===!0){const Rt=T.array[ve],mt=x.indices[0]+4*x.indices[1];Le[Ae][mt]=Rt}else for(fe=0,Pe=T.stride;fe<Pe;fe++)Le[Ae][fe]=T.array[ve+fe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break}const Fe=D(Le,oe);return{name:E.uuid,keyframes:Fe}}function D(x,_){const T=[];for(const E in x)T.push({time:parseFloat(E),value:x[E]});T.sort(w);for(let E=0;E<16;E++)X(T,E,_.elements[E]);return T;function w(E,K){return E.time-K.time}}const z=new B,b=new B,I=new Hn;function L(x,_){const T=x.keyframes,w=x.name,E=[],K=[],oe=[],Ae=[];for(let ve=0,Me=T.length;ve<Me;ve++){const Ie=T[ve],fe=Ie.time,Pe=Ie.value;Pt.fromArray(Pe).transpose(),Pt.decompose(z,I,b),E.push(fe),K.push(z.x,z.y,z.z),oe.push(I.x,I.y,I.z,I.w),Ae.push(b.x,b.y,b.z)}return K.length>0&&_.push(new sr(w+".position",E,K)),oe.length>0&&_.push(new fr(w+".quaternion",E,oe)),Ae.length>0&&_.push(new sr(w+".scale",E,Ae)),_}function X(x,_,T){let w,E=!0,K,oe;for(K=0,oe=x.length;K<oe;K++)w=x[K],w.value[_]===void 0?w.value[_]=null:E=!1;if(E===!0)for(K=0,oe=x.length;K<oe;K++)w=x[K],w.value[_]=T;else Q(x,_)}function Q(x,_){let T,w;for(let E=0,K=x.length;E<K;E++){const oe=x[E];if(oe.value[_]===null){if(T=H(x,E,_),w=V(x,E,_),T===null){oe.value[_]=w.value[_];continue}if(w===null){oe.value[_]=T.value[_];continue}F(oe,T,w,_)}}}function H(x,_,T){for(;_>=0;){const w=x[_];if(w.value[T]!==null)return w;_--}return null}function V(x,_,T){for(;_<x.length;){const w=x[_];if(w.value[T]!==null)return w;_++}return null}function F(x,_,T,w){if(T.time-_.time===0){x.value[w]=_.value[w];return}x.value[w]=(x.time-_.time)*(T.value[w]-_.value[w])/(T.time-_.time)+_.value[w]}function U(x){const _={name:x.getAttribute("id")||"default",start:parseFloat(x.getAttribute("start")||0),end:parseFloat(x.getAttribute("end")||0),animations:[]};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"instance_animation":_.animations.push(o(E.getAttribute("url")));break}}We.clips[x.getAttribute("id")]=_}function $(x){const _=[],T=x.name,w=x.end-x.start||-1,E=x.animations;for(let K=0,oe=E.length;K<oe;K++){const Ae=M(E[K]);for(let ve=0,Me=Ae.length;ve<Me;ve++)_.push(Ae[ve])}return new Rl(T,w,_)}function Y(x){return d(We.clips[x],$)}function re(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"skin":_.id=o(E.getAttribute("source")),_.skin=te(E);break;case"morph":_.id=o(E.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}We.controllers[x.getAttribute("id")]=_}function te(x){const _={sources:{}};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=s(E.textContent);break;case"source":const K=E.getAttribute("id");_.sources[K]=he(E);break;case"joints":_.joints=P(E);break;case"vertex_weights":_.vertexWeights=q(E);break}}return _}function P(x){const _={inputs:{}};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"input":const K=E.getAttribute("semantic"),oe=o(E.getAttribute("source"));_.inputs[K]=oe;break}}return _}function q(x){const _={inputs:{}};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"input":const K=E.getAttribute("semantic"),oe=o(E.getAttribute("source")),Ae=parseInt(E.getAttribute("offset"));_.inputs[K]={id:oe,offset:Ae};break;case"vcount":_.vcount=a(E.textContent);break;case"v":_.v=a(E.textContent);break}}return _}function ne(x){const _={id:x.id},T=We.geometries[_.id];return x.skin!==void 0&&(_.skin=J(x.skin),T.sources.skinIndices=_.skin.indices,T.sources.skinWeights=_.skin.weights),_}function J(x){const T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},w=x.sources,E=x.vertexWeights,K=E.vcount,oe=E.v,Ae=E.inputs.JOINT.offset,ve=E.inputs.WEIGHT.offset,Me=x.sources[x.joints.inputs.JOINT],Ie=x.sources[x.joints.inputs.INV_BIND_MATRIX],fe=w[E.inputs.WEIGHT.id].array;let Pe=0,Le,Fe,ke;for(Le=0,ke=K.length;Le<ke;Le++){const mt=K[Le],ft=[];for(Fe=0;Fe<mt;Fe++){const ht=oe[Pe+Ae],Xn=oe[Pe+ve],pn=fe[Xn];ft.push({index:ht,weight:pn}),Pe+=2}for(ft.sort(Rt),Fe=0;Fe<4;Fe++){const ht=ft[Fe];ht!==void 0?(T.indices.array.push(ht.index),T.weights.array.push(ht.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(x.bindShapeMatrix?T.bindMatrix=new Ke().fromArray(x.bindShapeMatrix).transpose():T.bindMatrix=new Ke().identity(),Le=0,ke=Me.array.length;Le<ke;Le++){const mt=Me.array[Le],ft=new Ke().fromArray(Ie.array,Le*Ie.stride).transpose();T.joints.push({name:mt,boneInverse:ft})}return T;function Rt(mt,ft){return ft.weight-mt.weight}}function ee(x){return d(We.controllers[x],ne)}function k(x){const _={init_from:n(x,"init_from")[0].textContent};We.images[x.getAttribute("id")]=_}function le(x){return x.build!==void 0?x.build:x.init_from}function me(x){const _=We.images[x];return _!==void 0?d(_,le):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",x),null)}function Ce(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"profile_COMMON":_.profile=ye(E);break}}We.effects[x.getAttribute("id")]=_}function ye(x){const _={surfaces:{},samplers:{}};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"newparam":nt(E,_);break;case"technique":_.technique=It(E);break;case"extra":_.extra=tn(E);break}}return _}function nt(x,_){const T=x.getAttribute("sid");for(let w=0,E=x.childNodes.length;w<E;w++){const K=x.childNodes[w];if(K.nodeType===1)switch(K.nodeName){case"surface":_.surfaces[T]=qe(K);break;case"sampler2D":_.samplers[T]=ze(K);break}}}function qe(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"init_from":_.init_from=E.textContent;break}}return _}function ze(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"source":_.source=E.textContent;break}}return _}function It(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=E.nodeName,_.parameters=Dt(E);break;case"extra":_.extra=tn(E);break}}return _}function Dt(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[E.nodeName]=ue(E);break;case"transparent":_[E.nodeName]={opaque:E.hasAttribute("opaque")?E.getAttribute("opaque"):"A_ONE",data:ue(E)};break}}return _}function ue(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"color":_[E.nodeName]=s(E.textContent);break;case"float":_[E.nodeName]=parseFloat(E.textContent);break;case"texture":_[E.nodeName]={id:E.getAttribute("texture"),extra:it(E)};break}}return _}function it(x){const _={technique:{}};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"extra":bt(E,_);break}}return _}function bt(x,_){for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"technique":dt(E,_);break}}}function dt(x,_){for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[E.nodeName]=parseFloat(E.textContent);break;case"wrapU":case"wrapV":E.textContent.toUpperCase()==="TRUE"?_.technique[E.nodeName]=1:E.textContent.toUpperCase()==="FALSE"?_.technique[E.nodeName]=0:_.technique[E.nodeName]=parseInt(E.textContent);break;case"bump":_[E.nodeName]=N(E);break}}}function tn(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"technique":_.technique=Jt(E);break}}return _}function Jt(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"double_sided":_[E.nodeName]=parseInt(E.textContent);break;case"bump":_[E.nodeName]=N(E);break}}return _}function N(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"texture":_[E.nodeName]={id:E.getAttribute("texture"),texcoord:E.getAttribute("texcoord"),extra:it(E)};break}}return _}function C(x){return x}function ie(x){return d(We.effects[x],C)}function pe(x){const _={name:x.getAttribute("name")};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"instance_effect":_.url=o(E.getAttribute("url"));break}}We.materials[x.getAttribute("id")]=_}function _e(x){let _,T=x.slice((x.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":_=Gs;break;default:_=no}return _}function xe(x){const _=ie(x.url),T=_.profile.technique;let w;switch(T.type){case"phong":case"blinn":w=new Dl;break;case"lambert":w=new qa;break;default:w=new ir;break}w.name=x.name||"";function E(ve,Me=null){const Ie=_.profile.samplers[ve.id];let fe=null;if(Ie!==void 0){const Pe=_.profile.surfaces[Ie.source];fe=me(Pe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),fe=me(ve.id);if(fe!==null){const Pe=_e(fe);if(Pe!==void 0){const Le=Pe.load(fe),Fe=ve.extra;if(Fe!==void 0&&Fe.technique!==void 0&&c(Fe.technique)===!1){const ke=Fe.technique;Le.wrapS=ke.wrapU?yi:ln,Le.wrapT=ke.wrapV?yi:ln,Le.offset.set(ke.offsetU||0,ke.offsetV||0),Le.repeat.set(ke.repeatU||1,ke.repeatV||1)}else Le.wrapS=yi,Le.wrapT=yi;return Me!==null&&(Le.encoding=Me),Le}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",fe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ve.id),null}const K=T.parameters;for(const ve in K){const Me=K[ve];switch(ve){case"diffuse":Me.color&&w.color.fromArray(Me.color),Me.texture&&(w.map=E(Me.texture,gt));break;case"specular":Me.color&&w.specular&&w.specular.fromArray(Me.color),Me.texture&&(w.specularMap=E(Me.texture));break;case"bump":Me.texture&&(w.normalMap=E(Me.texture));break;case"ambient":Me.texture&&(w.lightMap=E(Me.texture,gt));break;case"shininess":Me.float&&w.shininess&&(w.shininess=Me.float);break;case"emission":Me.color&&w.emissive&&w.emissive.fromArray(Me.color),Me.texture&&(w.emissiveMap=E(Me.texture,gt));break}}w.color.convertSRGBToLinear(),w.specular&&w.specular.convertSRGBToLinear(),w.emissive&&w.emissive.convertSRGBToLinear();let oe=K.transparent,Ae=K.transparency;if(Ae===void 0&&oe&&(Ae={float:1}),oe===void 0&&Ae&&(oe={opaque:"A_ONE",data:{color:[1,1,1,1]}}),oe&&Ae)if(oe.data.texture)w.transparent=!0;else{const ve=oe.data.color;switch(oe.opaque){case"A_ONE":w.opacity=ve[3]*Ae.float;break;case"RGB_ZERO":w.opacity=1-ve[0]*Ae.float;break;case"A_ZERO":w.opacity=1-ve[3]*Ae.float;break;case"RGB_ONE":w.opacity=ve[0]*Ae.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',oe.opaque)}w.opacity<1&&(w.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){const ve=T.extra.technique;for(const Me in ve){const Ie=ve[Me];switch(Me){case"double_sided":w.side=Ie===1?Ts:li;break;case"bump":w.normalMap=E(Ie.texture),w.normalScale=new je(1,1);break}}}return w}function He(x){return d(We.materials[x],xe)}function O(x){const _={name:x.getAttribute("name")};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"optics":_.optics=W(E);break}}We.cameras[x.getAttribute("id")]=_}function W(x){for(let _=0;_<x.childNodes.length;_++){const T=x.childNodes[_];switch(T.nodeName){case"technique_common":return Se(T)}}return{}}function Se(x){const _={};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];switch(w.nodeName){case"perspective":case"orthographic":_.technique=w.nodeName,_.parameters=Ee(w);break}}return _}function Ee(x){const _={};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];switch(w.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[w.nodeName]=parseFloat(w.textContent);break}}return _}function we(x){let _;switch(x.optics.technique){case"perspective":_=new Kt(x.optics.parameters.yfov,x.optics.parameters.aspect_ratio,x.optics.parameters.znear,x.optics.parameters.zfar);break;case"orthographic":let T=x.optics.parameters.ymag,w=x.optics.parameters.xmag;const E=x.optics.parameters.aspect_ratio;w=w===void 0?T*E:w,T=T===void 0?w/E:T,w*=.5,T*=.5,_=new Br(-w,w,T,-T,x.optics.parameters.znear,x.optics.parameters.zfar);break;default:_=new Kt;break}return _.name=x.name||"",_}function Re(x){const _=We.cameras[x];return _!==void 0?d(_,we):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",x),null)}function De(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"technique_common":_=et(E);break}}We.lights[x.getAttribute("id")]=_}function et(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=E.nodeName,_.parameters=rt(E)}}return _}function rt(x){const _={};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"color":const K=s(E.textContent);_.color=new Ye().fromArray(K).convertSRGBToLinear();break;case"falloff_angle":_.falloffAngle=parseFloat(E.textContent);break;case"quadratic_attenuation":const oe=parseFloat(E.textContent);_.distance=oe?Math.sqrt(1/oe):0;break}}return _}function pt(x){let _;switch(x.technique){case"directional":_=new Xg;break;case"point":_=new Pr;break;case"spot":_=new Kc;break;case"ambient":_=new Jc;break}return x.parameters.color&&_.color.copy(x.parameters.color),x.parameters.distance&&(_.distance=x.parameters.distance),_}function G(x){const _=We.lights[x];return _!==void 0?d(_,pt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",x),null)}function se(x){const _={name:x.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=n(x,"mesh")[0];if(T!==void 0){for(let w=0;w<T.childNodes.length;w++){const E=T.childNodes[w];if(E.nodeType!==1)continue;const K=E.getAttribute("id");switch(E.nodeName){case"source":_.sources[K]=he(E);break;case"vertices":_.vertices=Te(E);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",E.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(Ne(E));break;default:console.log(E)}}We.geometries[x.getAttribute("id")]=_}}function he(x){const _={array:[],stride:3};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"float_array":_.array=s(w.textContent);break;case"Name_array":_.array=i(w.textContent);break;case"technique_common":const E=n(w,"accessor")[0];E!==void 0&&(_.stride=parseInt(E.getAttribute("stride")));break}}return _}function Te(x){const _={};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];w.nodeType===1&&(_[w.getAttribute("semantic")]=o(w.getAttribute("source")))}return _}function Ne(x){const _={type:x.nodeName,material:x.getAttribute("material"),count:parseInt(x.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,w=x.childNodes.length;T<w;T++){const E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"input":const K=o(E.getAttribute("source")),oe=E.getAttribute("semantic"),Ae=parseInt(E.getAttribute("offset")),ve=parseInt(E.getAttribute("set")),Me=ve>0?oe+ve:oe;_.inputs[Me]={id:K,offset:Ae},_.stride=Math.max(_.stride,Ae+1),oe==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=a(E.textContent);break;case"p":_.p=a(E.textContent);break}}return _}function ut(x){const _={};for(let T=0;T<x.length;T++){const w=x[T];_[w.type]===void 0&&(_[w.type]=[]),_[w.type].push(w)}return _}function Ot(x){let _=0;for(let T=0,w=x.length;T<w;T++)x[T].hasUV===!0&&_++;_>0&&_<x.length&&(x.uvsNeedsFix=!0)}function Ut(x){const _={},T=x.sources,w=x.vertices,E=x.primitives;if(E.length===0)return{};const K=ut(E);for(const oe in K){const Ae=K[oe];Ot(Ae),_[oe]=jn(Ae,T,w)}return _}function jn(x,_,T){const w={},E={array:[],stride:0},K={array:[],stride:0},oe={array:[],stride:0},Ae={array:[],stride:0},ve={array:[],stride:0},Me={array:[],stride:4},Ie={array:[],stride:4},fe=new gn,Pe=[];let Le=0;for(let Fe=0;Fe<x.length;Fe++){const ke=x[Fe],Rt=ke.inputs;let mt=0;switch(ke.type){case"lines":case"linestrips":mt=ke.count*2;break;case"triangles":mt=ke.count*3;break;case"polylist":for(let ft=0;ft<ke.count;ft++){const ht=ke.vcount[ft];switch(ht){case 3:mt+=3;break;case 4:mt+=6;break;default:mt+=(ht-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",ke.type)}fe.addGroup(Le,mt,Fe),Le+=mt,ke.material&&Pe.push(ke.material);for(const ft in Rt){const ht=Rt[ft];switch(ft){case"VERTEX":for(const Xn in T){const pn=T[Xn];switch(Xn){case"POSITION":const Ri=E.array.length;if(st(ke,_[pn],ht.offset,E.array),E.stride=_[pn].stride,_.skinWeights&&_.skinIndices&&(st(ke,_.skinIndices,ht.offset,Me.array),st(ke,_.skinWeights,ht.offset,Ie.array)),ke.hasUV===!1&&x.uvsNeedsFix===!0){const pu=(E.array.length-Ri)/E.stride;for(let ro=0;ro<pu;ro++)oe.array.push(0,0)}break;case"NORMAL":st(ke,_[pn],ht.offset,K.array),K.stride=_[pn].stride;break;case"COLOR":st(ke,_[pn],ht.offset,ve.array),ve.stride=_[pn].stride;break;case"TEXCOORD":st(ke,_[pn],ht.offset,oe.array),oe.stride=_[pn].stride;break;case"TEXCOORD1":st(ke,_[pn],ht.offset,Ae.array),oe.stride=_[pn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Xn)}}break;case"NORMAL":st(ke,_[ht.id],ht.offset,K.array),K.stride=_[ht.id].stride;break;case"COLOR":st(ke,_[ht.id],ht.offset,ve.array,!0),ve.stride=_[ht.id].stride;break;case"TEXCOORD":st(ke,_[ht.id],ht.offset,oe.array),oe.stride=_[ht.id].stride;break;case"TEXCOORD1":st(ke,_[ht.id],ht.offset,Ae.array),Ae.stride=_[ht.id].stride;break}}}return E.array.length>0&&fe.setAttribute("position",new xt(E.array,E.stride)),K.array.length>0&&fe.setAttribute("normal",new xt(K.array,K.stride)),ve.array.length>0&&fe.setAttribute("color",new xt(ve.array,ve.stride)),oe.array.length>0&&fe.setAttribute("uv",new xt(oe.array,oe.stride)),Ae.array.length>0&&fe.setAttribute("uv2",new xt(Ae.array,Ae.stride)),Me.array.length>0&&fe.setAttribute("skinIndex",new xt(Me.array,Me.stride)),Ie.array.length>0&&fe.setAttribute("skinWeight",new xt(Ie.array,Ie.stride)),w.data=fe,w.type=x[0].type,w.materialKeys=Pe,w}function st(x,_,T,w,E=!1){const K=x.p,oe=x.stride,Ae=x.vcount;function ve(fe){let Pe=K[fe+T]*Ie;const Le=Pe+Ie;for(;Pe<Le;Pe++)w.push(Me[Pe]);if(E){const Fe=w.length-Ie-1;jr.setRGB(w[Fe+0],w[Fe+1],w[Fe+2]).convertSRGBToLinear(),w[Fe+0]=jr.r,w[Fe+1]=jr.g,w[Fe+2]=jr.b}}const Me=_.array,Ie=_.stride;if(x.vcount!==void 0){let fe=0;for(let Pe=0,Le=Ae.length;Pe<Le;Pe++){const Fe=Ae[Pe];if(Fe===4){const ke=fe+oe*0,Rt=fe+oe*1,mt=fe+oe*2,ft=fe+oe*3;ve(ke),ve(Rt),ve(ft),ve(Rt),ve(mt),ve(ft)}else if(Fe===3){const ke=fe+oe*0,Rt=fe+oe*1,mt=fe+oe*2;ve(ke),ve(Rt),ve(mt)}else if(Fe>4)for(let ke=1,Rt=Fe-2;ke<=Rt;ke++){const mt=fe+oe*0,ft=fe+oe*ke,ht=fe+oe*(ke+1);ve(mt),ve(ft),ve(ht)}fe+=oe*Fe}}else for(let fe=0,Pe=K.length;fe<Pe;fe+=oe)ve(fe)}function yn(x){return d(We.geometries[x],Ut)}function fn(x){const _={name:x.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"technique_common":Us(w,_);break}}We.kinematicsModels[x.getAttribute("id")]=_}function Vr(x){return x.build!==void 0?x.build:x}function zs(x){return d(We.kinematicsModels[x],Vr)}function Us(x,_){for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"joint":_.joints[w.getAttribute("sid")]=Bs(w);break;case"link":_.links.push(Z(w));break}}}function Bs(x){let _;for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"prismatic":case"revolute":_=R(w);break}}return _}function R(x){const _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",axis:new B,limits:{min:0,max:0},type:x.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"axis":const E=s(w.textContent);_.axis.fromArray(E);break;case"limits":const K=w.getElementsByTagName("max")[0],oe=w.getElementsByTagName("min")[0];_.limits.max=parseFloat(K.textContent),_.limits.min=parseFloat(oe.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function Z(x){const _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"attachment_full":_.attachments.push(ae(w));break;case"matrix":case"translate":case"rotate":_.transforms.push(j(w));break}}return _}function ae(x){const _={joint:x.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"link":_.links.push(Z(w));break;case"matrix":case"translate":case"rotate":_.transforms.push(j(w));break}}return _}function j(x){const _={type:x.nodeName},T=s(x.textContent);switch(_.type){case"matrix":_.obj=new Ke,_.obj.fromArray(T).transpose();break;case"translate":_.obj=new B,_.obj.fromArray(T);break;case"rotate":_.obj=new B,_.obj.fromArray(T),_.angle=_r.degToRad(T[3]);break}return _}function ce(x){const _={name:x.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"rigid_body":_.rigidBodies[w.getAttribute("name")]={},Oe(w,_.rigidBodies[w.getAttribute("name")]);break}}We.physicsModels[x.getAttribute("id")]=_}function Oe(x,_){for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"technique_common":Xe(w,_);break}}}function Xe(x,_){for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"inertia":_.inertia=s(w.textContent);break;case"mass":_.mass=s(w.textContent)[0];break}}}function Ze(x){const _={bindJointAxis:[]};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"bind_joint_axis":_.bindJointAxis.push(Je(w));break}}We.kinematicsScenes[o(x.getAttribute("url"))]=_}function Je(x){const _={target:x.getAttribute("target").split("/").pop()};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"axis":const E=w.getElementsByTagName("param")[0];_.axis=E.textContent;const K=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=K.substring(0,K.length-1);break}}return _}function ct(x){return x.build!==void 0?x.build:x}function at(x){return d(We.kinematicsScenes[x],ct)}function ot(){const x=Object.keys(We.kinematicsModels)[0],_=Object.keys(We.kinematicsScenes)[0],T=Object.keys(We.visualScenes)[0];if(x===void 0||_===void 0)return;const w=zs(x),E=at(_),K=Hr(T),oe=E.bindJointAxis,Ae={};for(let Ie=0,fe=oe.length;Ie<fe;Ie++){const Pe=oe[Ie],Le=Bt.querySelector('[sid="'+Pe.target+'"]');if(Le){const Fe=Le.parentElement;ve(Pe.jointIndex,Fe)}}function ve(Ie,fe){const Pe=fe.getAttribute("name"),Le=w.joints[Ie];K.traverse(function(Fe){Fe.name===Pe&&(Ae[Ie]={object:Fe,transforms:Nt(fe),joint:Le,position:Le.zeroPosition})})}const Me=new Ke;io={joints:w&&w.joints,getJointValue:function(Ie){const fe=Ae[Ie];if(fe)return fe.position;console.warn("THREE.ColladaLoader: Joint "+Ie+" doesn't exist.")},setJointValue:function(Ie,fe){const Pe=Ae[Ie];if(Pe){const Le=Pe.joint;if(fe>Le.limits.max||fe<Le.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ie+" value "+fe+" outside of limits (min: "+Le.limits.min+", max: "+Le.limits.max+").");else if(Le.static)console.warn("THREE.ColladaLoader: Joint "+Ie+" is static.");else{const Fe=Pe.object,ke=Le.axis,Rt=Pe.transforms;Pt.identity();for(let mt=0;mt<Rt.length;mt++){const ft=Rt[mt];if(ft.sid&&ft.sid.indexOf(Ie)!==-1)switch(Le.type){case"revolute":Pt.multiply(Me.makeRotationAxis(ke,_r.degToRad(fe)));break;case"prismatic":Pt.multiply(Me.makeTranslation(ke.x*fe,ke.y*fe,ke.z*fe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Le.type);break}else switch(ft.type){case"matrix":Pt.multiply(ft.obj);break;case"translate":Pt.multiply(Me.makeTranslation(ft.obj.x,ft.obj.y,ft.obj.z));break;case"scale":Pt.scale(ft.obj);break;case"rotate":Pt.multiply(Me.makeRotationAxis(ft.obj,ft.angle));break}}Fe.matrix.copy(Pt),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Ae[Ie].position=fe}}else console.log("THREE.ColladaLoader: "+Ie+" does not exist.")}}}function Nt(x){const _=[],T=Bt.querySelector('[id="'+x.id+'"]');for(let w=0;w<T.childNodes.length;w++){const E=T.childNodes[w];if(E.nodeType!==1)continue;let K,oe;switch(E.nodeName){case"matrix":K=s(E.textContent);const Ae=new Ke().fromArray(K).transpose();_.push({sid:E.getAttribute("sid"),type:E.nodeName,obj:Ae});break;case"translate":case"scale":K=s(E.textContent),oe=new B().fromArray(K),_.push({sid:E.getAttribute("sid"),type:E.nodeName,obj:oe});break;case"rotate":K=s(E.textContent),oe=new B().fromArray(K);const ve=_r.degToRad(K[3]);_.push({sid:E.getAttribute("sid"),type:E.nodeName,obj:oe,angle:ve});break}}return _}function nn(x){const _=x.getElementsByTagName("node");for(let T=0;T<_.length;T++){const w=_[T];w.hasAttribute("id")===!1&&w.setAttribute("id",l())}}const Pt=new Ke,hn=new B;function Tt(x){const _={name:x.getAttribute("name")||"",type:x.getAttribute("type"),id:x.getAttribute("id"),sid:x.getAttribute("sid"),matrix:new Ke,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];if(w.nodeType!==1)continue;let E;switch(w.nodeName){case"node":_.nodes.push(w.getAttribute("id")),Tt(w);break;case"instance_camera":_.instanceCameras.push(o(w.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(tt(w));break;case"instance_light":_.instanceLights.push(o(w.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(tt(w));break;case"instance_node":_.instanceNodes.push(o(w.getAttribute("url")));break;case"matrix":E=s(w.textContent),_.matrix.multiply(Pt.fromArray(E).transpose()),_.transforms[w.getAttribute("sid")]=w.nodeName;break;case"translate":E=s(w.textContent),hn.fromArray(E),_.matrix.multiply(Pt.makeTranslation(hn.x,hn.y,hn.z)),_.transforms[w.getAttribute("sid")]=w.nodeName;break;case"rotate":E=s(w.textContent);const K=_r.degToRad(E[3]);_.matrix.multiply(Pt.makeRotationAxis(hn.fromArray(E),K)),_.transforms[w.getAttribute("sid")]=w.nodeName;break;case"scale":E=s(w.textContent),_.matrix.scale(hn.fromArray(E)),_.transforms[w.getAttribute("sid")]=w.nodeName;break;case"extra":break;default:console.log(w)}}return Wt(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):We.nodes[_.id]=_,_}function tt(x){const _={id:o(x.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<x.childNodes.length;T++){const w=x.childNodes[T];switch(w.nodeName){case"bind_material":const E=w.getElementsByTagName("instance_material");for(let K=0;K<E.length;K++){const oe=E[K],Ae=oe.getAttribute("symbol"),ve=oe.getAttribute("target");_.materials[Ae]=o(ve)}break;case"skeleton":_.skeletons.push(o(w.textContent));break}}return _}function pr(x,_){const T=[],w=[];let E,K,oe;for(E=0;E<x.length;E++){const Me=x[E];let Ie;if(Wt(Me))Ie=dn(Me),kt(Ie,_,T);else if(gr(Me)){const Pe=We.visualScenes[Me].children;for(let Le=0;Le<Pe.length;Le++){const Fe=Pe[Le];if(Fe.type==="JOINT"){const ke=dn(Fe.id);kt(ke,_,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Me)}for(E=0;E<_.length;E++)for(K=0;K<T.length;K++)if(oe=T[K],oe.bone.name===_[E].name){w[E]=oe,oe.processed=!0;break}for(E=0;E<T.length;E++)oe=T[E],oe.processed===!1&&(w.push(oe),oe.processed=!0);const Ae=[],ve=[];for(E=0;E<w.length;E++)oe=w[E],Ae.push(oe.bone),ve.push(oe.boneInverse);return new Wa(Ae,ve)}function kt(x,_,T){x.traverse(function(w){if(w.isBone===!0){let E;for(let K=0;K<_.length;K++){const oe=_[K];if(oe.name===w.name){E=oe.boneInverse;break}}E===void 0&&(E=new Ke),T.push({bone:w,boneInverse:E,processed:!1})}})}function qn(x){const _=[],T=x.matrix,w=x.nodes,E=x.type,K=x.instanceCameras,oe=x.instanceControllers,Ae=x.instanceLights,ve=x.instanceGeometries,Me=x.instanceNodes;for(let fe=0,Pe=w.length;fe<Pe;fe++)_.push(dn(w[fe]));for(let fe=0,Pe=K.length;fe<Pe;fe++){const Le=Re(K[fe]);Le!==null&&_.push(Le.clone())}for(let fe=0,Pe=oe.length;fe<Pe;fe++){const Le=oe[fe],Fe=ee(Le.id),ke=yn(Fe.id),Rt=Pi(ke,Le.materials),mt=Le.skeletons,ft=Fe.skin.joints,ht=pr(mt,ft);for(let Xn=0,pn=Rt.length;Xn<pn;Xn++){const Ri=Rt[Xn];Ri.isSkinnedMesh&&(Ri.bind(ht,Fe.skin.bindMatrix),Ri.normalizeSkinWeights()),_.push(Ri)}}for(let fe=0,Pe=Ae.length;fe<Pe;fe++){const Le=G(Ae[fe]);Le!==null&&_.push(Le.clone())}for(let fe=0,Pe=ve.length;fe<Pe;fe++){const Le=ve[fe],Fe=yn(Le.id),ke=Pi(Fe,Le.materials);for(let Rt=0,mt=ke.length;Rt<mt;Rt++)_.push(ke[Rt])}for(let fe=0,Pe=Me.length;fe<Pe;fe++)_.push(dn(Me[fe]).clone());let Ie;if(w.length===0&&_.length===1)Ie=_[0];else{Ie=E==="JOINT"?new Gc:new Un;for(let fe=0;fe<_.length;fe++)Ie.add(_[fe])}return Ie.name=E==="JOINT"?x.sid:x.name,Ie.matrix.copy(T),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie}const Gr=new ir({color:16711935});function fi(x,_){const T=[];for(let w=0,E=x.length;w<E;w++){const K=_[x[w]];K===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",x[w]),T.push(Gr)):T.push(He(K))}return T}function Pi(x,_){const T=[];for(const w in x){const E=x[w],K=fi(E.materialKeys,_);if(K.length===0&&(w==="lines"||w==="linestrips"?K.push(new xs):K.push(new Dl)),w==="lines"||w==="linestrips")for(let Me=0,Ie=K.length;Me<Ie;Me++){const fe=K[Me];if(fe.isMeshPhongMaterial===!0||fe.isMeshLambertMaterial===!0){const Pe=new xs;Pe.color.copy(fe.color),Pe.opacity=fe.opacity,Pe.transparent=fe.transparent,K[Me]=Pe}}const oe=E.data.attributes.skinIndex!==void 0,Ae=K.length===1?K[0]:K;let ve;switch(w){case"lines":ve=new jc(E.data,Ae);break;case"linestrips":ve=new Wc(E.data,Ae);break;case"triangles":case"polylist":oe?ve=new Pg(E.data,Ae):ve=new en(E.data,Ae);break}T.push(ve)}return T}function Wt(x){return We.nodes[x]!==void 0}function dn(x){return d(We.nodes[x],qn)}function mr(x){const _={name:x.getAttribute("name"),children:[]};nn(x);const T=n(x,"node");for(let w=0;w<T.length;w++)_.children.push(Tt(T[w]));We.visualScenes[x.getAttribute("id")]=_}function Qt(x){const _=new Un;_.name=x.name;const T=x.children;for(let w=0;w<T.length;w++){const E=T[w];_.add(dn(E.id))}return _}function gr(x){return We.visualScenes[x]!==void 0}function Hr(x){return d(We.visualScenes[x],Qt)}function Wr(x){const _=n(x,"instance_visual_scene")[0];return Hr(o(_.getAttribute("url")))}function uu(){const x=We.clips;if(c(x)===!0){if(c(We.animations)===!1){const _=[];for(const T in We.animations){const w=M(T);for(let E=0,K=w.length;E<K;E++)_.push(w[E])}qr.push(new Rl("default",-1,_))}}else for(const _ in x)qr.push(Y(_))}function fu(x){let _="";const T=[x];for(;T.length;){const w=T.shift();w.nodeType===Node.TEXT_NODE?_+=w.textContent:(_+=`
`,T.push.apply(T,w.childNodes))}return _.trim()}if(e.length===0)return{scene:new Vc};const eo=new DOMParser().parseFromString(e,"application/xml"),Bt=n(eo,"COLLADA")[0],Vs=eo.getElementsByTagName("parsererror")[0];if(Vs!==void 0){const x=n(Vs,"div")[0];let _;return x?_=x.textContent:_=fu(Vs),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}const hu=Bt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",hu);const to=u(n(Bt,"asset")[0]),no=new Ia(this.manager);no.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Gs;ec&&(Gs=new ec(this.manager),Gs.setPath(this.resourcePath||t));const jr=new Ye,qr=[];let io={},du=0;const We={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Bt,"library_animations","animation",p),m(Bt,"library_animation_clips","animation_clip",U),m(Bt,"library_controllers","controller",re),m(Bt,"library_images","image",k),m(Bt,"library_effects","effect",Ce),m(Bt,"library_materials","material",pe),m(Bt,"library_cameras","camera",O),m(Bt,"library_lights","light",De),m(Bt,"library_geometries","geometry",se),m(Bt,"library_nodes","node",Tt),m(Bt,"library_visual_scenes","visual_scene",mr),m(Bt,"library_kinematics_models","kinematics_model",fn),m(Bt,"library_physics_models","physics_model",ce),m(Bt,"scene","instance_kinematics_scene",Ze),g(We.animations,y),g(We.clips,$),g(We.controllers,ne),g(We.images,le),g(We.effects,C),g(We.materials,xe),g(We.cameras,we),g(We.lights,pt),g(We.geometries,Ut),g(We.visualScenes,Qt),uu(),ot();const Xr=Wr(n(Bt,"scene")[0]);return Xr.animations=qr,to.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Xr.rotation.set(-Math.PI/2,0,0)),Xr.scale.multiplyScalar(to.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),qr},kinematics:io,library:We,scene:Xr}}}function C0(r){let e,t=`<!-- include stl: ${r[0]} ${r[2]} -->`,n,i,s;return i=new Xt({props:{type:en,castShadow:!0,receiveShadow:!0,geometry:r[5],scale:r[2],position:r[4],rotation:r[3],$$slots:{default:[L0]},$$scope:{ctx:r}}}),{c(){e=new Ms(!1),n=At(),Ue(i.$$.fragment),this.h()},l(a){e=Ss(a,!1),n=Ct(a),Be(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),lt(a,n,o),Ve(i,a,o),s=!0},p(a,o){(!s||o&5)&&t!==(t=`<!-- include stl: ${a[0]} ${a[2]} -->`)&&e.p(t);const l={};o&4&&(l.scale=a[2]),o&16&&(l.position=a[4]),o&8&&(l.rotation=a[3]),o&2050&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){s||(de(i.$$.fragment,a),s=!0)},o(a){ge(i.$$.fragment,a),s=!1},d(a){a&&e.d(),a&&$e(n),Ge(i,a)}}}function L0(r){let e,t;return e=new Xt({props:{type:qa,color:r[1]}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.color=n[1]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function D0(r){let e,t,n=r[5]&&C0(r);return{c(){n&&n.c(),e=zt()},l(i){n&&n.l(i),e=zt()},m(i,s){n&&n.m(i,s),lt(i,e,s),t=!0},p(i,[s]){i[5]&&n.p(i,s)},i(i){t||(de(n),t=!0)},o(i){ge(n),t=!1},d(i){n&&n.d(i),i&&$e(e)}}}function P0(r,e,t){let{filename:n}=e,{color:i=new Ye("pink")}=e,{scale:s=[1,1,1]}=e,{rotation:a=[1,1,1]}=e,{position:o=[1,1,1]}=e;const l=Ci(),{invalidate:c}=un(),u=$a(tc,()=>new tc);let h;const f=g=>{c("Collada: model loaded"),l("load",g)},m=g=>{console.error(g),l("error")};return r.$$set=g=>{"filename"in g&&t(0,n=g.filename),"color"in g&&t(1,i=g.color),"scale"in g&&t(2,s=g.scale),"rotation"in g&&t(3,a=g.rotation),"position"in g&&t(4,o=g.position)},r.$$.update=()=>{r.$$.dirty&1&&u.load(n,f,void 0,m)},[n,i,s,a,o,h]}class R0 extends wt{constructor(e){super(),Mt(this,e,P0,D0,St,{filename:0,color:1,scale:2,rotation:3,position:4})}}class nc extends dr{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Xa(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const g=[115,111,108,105,100];for(let d=0;d<5;d++)if(n(g,u,d))return!1;return!0}function n(c,u,h){for(let f=0,m=c.length;f<m;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function i(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,m,g,d=!1,p,v,S,y,M;for(let L=0;L<80-10;L++)u.getUint32(L,!1)==1129270351&&u.getUint8(L+4)==82&&u.getUint8(L+5)==61&&(d=!0,p=new Float32Array(h*3*3),v=u.getUint8(L+6)/255,S=u.getUint8(L+7)/255,y=u.getUint8(L+8)/255,M=u.getUint8(L+9)/255);const A=84,D=12*4+2,z=new gn,b=new Float32Array(h*3*3),I=new Float32Array(h*3*3);for(let L=0;L<h;L++){const X=A+L*D,Q=u.getFloat32(X,!0),H=u.getFloat32(X+4,!0),V=u.getFloat32(X+8,!0);if(d){const F=u.getUint16(X+48,!0);F&32768?(f=v,m=S,g=y):(f=(F&31)/31,m=(F>>5&31)/31,g=(F>>10&31)/31)}for(let F=1;F<=3;F++){const U=X+F*12,$=L*3*3+(F-1)*3;b[$]=u.getFloat32(U,!0),b[$+1]=u.getFloat32(U+4,!0),b[$+2]=u.getFloat32(U+8,!0),I[$]=Q,I[$+1]=H,I[$+2]=V,d&&(p[$]=f,p[$+1]=m,p[$+2]=g)}}return z.setAttribute("position",new xn(b,3)),z.setAttribute("normal",new xn(I,3)),d&&(z.setAttribute("color",new xn(p,3)),z.hasColors=!0,z.alpha=M),z}function s(c){const u=new gn,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g;let m=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,d=new RegExp("vertex"+g+g+g,"g"),p=new RegExp("normal"+g+g+g,"g"),v=[],S=[],y=new B;let M,A=0,D=0,z=0;for(;(M=h.exec(c))!==null;){D=z;const b=M[0];for(;(M=f.exec(b))!==null;){let X=0,Q=0;const H=M[0];for(;(M=p.exec(H))!==null;)y.x=parseFloat(M[1]),y.y=parseFloat(M[2]),y.z=parseFloat(M[3]),Q++;for(;(M=d.exec(H))!==null;)v.push(parseFloat(M[1]),parseFloat(M[2]),parseFloat(M[3])),S.push(y.x,y.y,y.z),X++,z++;Q!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),X!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}const I=D,L=z-D;u.addGroup(I,L,A),A++}return u.setAttribute("position",new xt(v,3)),u.setAttribute("normal",new xt(S,3)),u}function a(c){return typeof c!="string"?Qc.decodeText(new Uint8Array(c)):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=o(e);return t(l)?i(l):s(a(e))}}function ic(r){let e,t=`<!-- include stl: ${r[0]} ${r[2]} -->`,n,i,s;return i=new Xt({props:{type:en,castShadow:!0,receiveShadow:!0,geometry:r[5],scale:r[2],position:r[4],rotation:r[3],$$slots:{default:[I0]},$$scope:{ctx:r}}}),{c(){e=new Ms(!1),n=At(),Ue(i.$$.fragment),this.h()},l(a){e=Ss(a,!1),n=Ct(a),Be(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),lt(a,n,o),Ve(i,a,o),s=!0},p(a,o){(!s||o&5)&&t!==(t=`<!-- include stl: ${a[0]} ${a[2]} -->`)&&e.p(t);const l={};o&32&&(l.geometry=a[5]),o&4&&(l.scale=a[2]),o&16&&(l.position=a[4]),o&8&&(l.rotation=a[3]),o&2050&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){s||(de(i.$$.fragment,a),s=!0)},o(a){ge(i.$$.fragment,a),s=!1},d(a){a&&e.d(),a&&$e(n),Ge(i,a)}}}function I0(r){let e,t;return e=new Xt({props:{type:qa,color:r[1]}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.color=n[1]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function N0(r){let e,t,n=r[5]&&ic(r);return{c(){n&&n.c(),e=zt()},l(i){n&&n.l(i),e=zt()},m(i,s){n&&n.m(i,s),lt(i,e,s),t=!0},p(i,[s]){i[5]?n?(n.p(i,s),s&32&&de(n,1)):(n=ic(i),n.c(),de(n,1),n.m(e.parentNode,e)):n&&(Dn(),ge(n,1,1,()=>{n=null}),Pn())},i(i){t||(de(n),t=!0)},o(i){ge(n),t=!1},d(i){n&&n.d(i),i&&$e(e)}}}function k0(r,e,t){let{filename:n}=e,{color:i=new Ye("pink")}=e,{scale:s=[1,1,1]}=e,{rotation:a=[1,1,1]}=e,{position:o=[1,1,1]}=e;const l=Ci(),{invalidate:c}=un(),u=$a(nc,()=>new nc);let h;const f=g=>{h&&l("unload"),t(5,h=g),c("STL: model loaded"),l("load",g)},m=g=>{console.error(g),l("error")};return r.$$set=g=>{"filename"in g&&t(0,n=g.filename),"color"in g&&t(1,i=g.color),"scale"in g&&t(2,s=g.scale),"rotation"in g&&t(3,a=g.rotation),"position"in g&&t(4,o=g.position)},r.$$.update=()=>{r.$$.dirty&1&&u.load(n,f,void 0,m)},[n,i,s,a,o,h]}class O0 extends wt{constructor(e){super(),Mt(this,e,k0,N0,St,{filename:0,color:1,scale:2,rotation:3,position:4})}}function F0(r){let e,t;return e=new Xt({props:{type:en,castShadow:!0,receiveShadow:!0,scale:r[1],position:r[3],rotation:r[4],$$slots:{default:[V0]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.scale=n[1]),i&65&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function z0(r){let e,t,n,i;const s=[H0,G0],a=[];function o(l,c){return l[2].type==="stl"?0:l[2].type==="dae"?1:-1}return~(e=o(r))&&(t=a[e]=s[e](r)),{c(){t&&t.c(),n=zt()},l(l){t&&t.l(l),n=zt()},m(l,c){~e&&a[e].m(l,c),lt(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?~e&&a[e].p(l,c):(t&&(Dn(),ge(a[u],1,1,()=>{a[u]=null}),Pn()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),de(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(de(t),i=!0)},o(l){ge(t),i=!1},d(l){~e&&a[e].d(l),l&&$e(n)}}}function U0(r){let e,t;return e=new Xt({props:{type:lr}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p:qt,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function B0(r){let e,t;return e=new Xt({props:{type:ja}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p:qt,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function V0(r){let e,t,n,i,s;const a=[B0,U0],o=[];function l(c,u){return c[0].type==="cylinder"?0:c[0].type==="box"?1:-1}return~(e=l(r))&&(t=o[e]=a[e](r)),i=new Xt({props:{type:ir,color:r[5]}}),{c(){t&&t.c(),n=At(),Ue(i.$$.fragment)},l(c){t&&t.l(c),n=Ct(c),Be(i.$$.fragment,c)},m(c,u){~e&&o[e].m(c,u),lt(c,n,u),Ve(i,c,u),s=!0},p(c,u){let h=e;e=l(c),e===h?~e&&o[e].p(c,u):(t&&(Dn(),ge(o[h],1,1,()=>{o[h]=null}),Pn()),~e?(t=o[e],t?t.p(c,u):(t=o[e]=a[e](c),t.c()),de(t,1),t.m(n.parentNode,n)):t=null)},i(c){s||(de(t),de(i.$$.fragment,c),s=!0)},o(c){ge(t),ge(i.$$.fragment,c),s=!1},d(c){~e&&o[e].d(c),c&&$e(n),Ge(i,c)}}}function G0(r){let e,t;return e=new R0({props:{filename:r[2].filename,position:r[3],rotation:r[4],color:r[5],scale:r[1]}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.filename=n[2].filename),i&2&&(s.scale=n[1]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function H0(r){let e,t;return e=new O0({props:{filename:r[2].filename,position:r[3],rotation:r[4],color:r[5],scale:r[1]}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.filename=n[2].filename),i&2&&(s.scale=n[1]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function W0(r){let e,t,n,i;const s=[z0,F0],a=[];function o(l,c){return l[0].type==="mesh"?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=zt()},l(l){t.l(l),n=zt()},m(l,c){a[e].m(l,c),lt(l,n,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(Dn(),ge(a[u],1,1,()=>{a[u]=null}),Pn(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),de(t,1),t.m(n.parentNode,n))},i(l){i||(de(t),i=!0)},o(l){ge(t),i=!1},d(l){a[e].d(l),l&&$e(n)}}}function j0(r,e,t){let{visual:n}=e;const i=n.origin_xyz||[0,0,0],s=n.origin_rpy||[0,0,0],a=E0(n.color_rgba);let o=[1,1,1],l;switch(n.type){case"mesh":l=n.geometry,o=l.scale;break}return r.$$set=c=>{"visual"in c&&t(0,n=c.visual)},[n,o,l,i,s,a]}class q0 extends wt{constructor(e){super(),Mt(this,e,j0,W0,St,{visual:0})}}function rc(r,e,t){const n=r.slice();return n[2]=e[t],n}function sc(r,e,t){const n=r.slice();return n[5]=e[t],n}function ac(r){let e,t;return e=new cu({props:{joint:r[5],parser:r[1]}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&3&&(s.joint=n[5]),i&2&&(s.parser=n[1]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function oc(r){let e,t,n,i;e=new q0({props:{visual:r[2]}});let s=r[1].getChildJoints(r[0].child),a=[];for(let l=0;l<s.length;l+=1)a[l]=ac(sc(r,s,l));const o=l=>ge(a[l],1,1,()=>{a[l]=null});return{c(){Ue(e.$$.fragment),t=At();for(let l=0;l<a.length;l+=1)a[l].c();n=zt()},l(l){Be(e.$$.fragment,l),t=Ct(l);for(let c=0;c<a.length;c+=1)a[c].l(l);n=zt()},m(l,c){Ve(e,l,c),lt(l,t,c);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(l,c);lt(l,n,c),i=!0},p(l,c){const u={};if(c&1&&(u.visual=l[2]),e.$set(u),c&3){s=l[1].getChildJoints(l[0].child);let h;for(h=0;h<s.length;h+=1){const f=sc(l,s,h);a[h]?(a[h].p(f,c),de(a[h],1)):(a[h]=ac(f),a[h].c(),de(a[h],1),a[h].m(n.parentNode,n))}for(Dn(),h=s.length;h<a.length;h+=1)o(h);Pn()}},i(l){if(!i){de(e.$$.fragment,l);for(let c=0;c<s.length;c+=1)de(a[c]);i=!0}},o(l){ge(e.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)ge(a[c]);i=!1},d(l){Ge(e,l),l&&$e(t),Oa(a,l),l&&$e(n)}}}function X0(r){let e,t,n=r[0].child.visual,i=[];for(let a=0;a<n.length;a+=1)i[a]=oc(rc(r,n,a));const s=a=>ge(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=zt()},l(a){for(let o=0;o<i.length;o+=1)i[o].l(a);e=zt()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);lt(a,e,o),t=!0},p(a,o){if(o&3){n=a[0].child.visual;let l;for(l=0;l<n.length;l+=1){const c=rc(a,n,l);i[l]?(i[l].p(c,o),de(i[l],1)):(i[l]=oc(c),i[l].c(),de(i[l],1),i[l].m(e.parentNode,e))}for(Dn(),l=n.length;l<i.length;l+=1)s(l);Pn()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)de(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)ge(i[o]);t=!1},d(a){Oa(i,a),a&&$e(e)}}}function Y0(r){let e,t=`<!-- Joint ${r[0].name} -->`,n,i,s;return i=new Xt({props:{type:Un,rotation:r[0].origin_rpy,position:r[0].origin_xyz,$$slots:{default:[X0]},$$scope:{ctx:r}}}),{c(){e=new Ms(!1),n=At(),Ue(i.$$.fragment),this.h()},l(a){e=Ss(a,!1),n=Ct(a),Be(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),lt(a,n,o),Ve(i,a,o),s=!0},p(a,[o]){(!s||o&1)&&t!==(t=`<!-- Joint ${a[0].name} -->`)&&e.p(t);const l={};o&1&&(l.rotation=a[0].origin_rpy),o&1&&(l.position=a[0].origin_xyz),o&259&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){s||(de(i.$$.fragment,a),s=!0)},o(a){ge(i.$$.fragment,a),s=!1},d(a){a&&e.d(),a&&$e(n),Ge(i,a)}}}function Z0(r,e,t){let{joint:n}=e,{parser:i}=e;return r.$$set=s=>{"joint"in s&&t(0,n=s.joint),"parser"in s&&t(1,i=s.parser)},[n,i]}class cu extends wt{constructor(e){super(),Mt(this,e,Z0,Y0,St,{joint:0,parser:1})}}function lc(r,e,t){const n=r.slice();return n[7]=e[t],n}function K0(r){return{c:qt,l:qt,m:qt,p:qt,i:qt,o:qt,d:qt}}function J0(r){let e,t=`<!-- ${r[1]} -->`,n,i,s;return i=new Xt({props:{type:Un,position:r[2],quaternion:r[0],$$slots:{default:[Q0]},$$scope:{ctx:r}}}),{c(){e=new Ms(!1),n=At(),Ue(i.$$.fragment),this.h()},l(a){e=Ss(a,!1),n=Ct(a),Be(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),lt(a,n,o),Ve(i,a,o),s=!0},p(a,o){(!s||o&2)&&t!==(t=`<!-- ${a[1]} -->`)&&e.p(t);const l={};o&4&&(l.position=a[2]),o&1&&(l.quaternion=a[0]),o&1024&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){s||(de(i.$$.fragment,a),s=!0)},o(a){ge(i.$$.fragment,a),s=!1},d(a){a&&e.d(),a&&$e(n),Ge(i,a)}}}function cc(r){let e,t;return e=new cu({props:{joint:r[7],parser:r[3]}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p:qt,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function Q0(r){let e,t,n=r[3].getRootJoints(),i=[];for(let a=0;a<n.length;a+=1)i[a]=cc(lc(r,n,a));const s=a=>ge(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=zt()},l(a){for(let o=0;o<i.length;o+=1)i[o].l(a);e=zt()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);lt(a,e,o),t=!0},p(a,o){if(o&8){n=a[3].getRootJoints();let l;for(l=0;l<n.length;l+=1){const c=lc(a,n,l);i[l]?(i[l].p(c,o),de(i[l],1)):(i[l]=cc(c),i[l].c(),de(i[l],1),i[l].m(e.parentNode,e))}for(Dn(),l=n.length;l<i.length;l+=1)s(l);Pn()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)de(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)ge(i[o]);t=!1},d(a){Oa(i,a),a&&$e(e)}}}function $0(r){return{c:qt,l:qt,m:qt,p:qt,i:qt,o:qt,d:qt}}function ev(r){let e,t,n={ctx:r,current:null,token:null,hasCatch:!1,pending:$0,then:J0,catch:K0,value:6,blocks:[,,,]};return yu(r[4],n),{c(){e=zt(),n.block.c()},l(i){e=zt(),n.block.l(i)},m(i,s){lt(i,e,s),n.block.m(i,n.anchor=s),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[s]){r=i,wu(n,r,s)},i(i){t||(de(n.block),t=!0)},o(i){for(let s=0;s<3;s+=1){const a=n.blocks[s];ge(a)}t=!1},d(i){i&&$e(e),n.block.d(i),n.token=null,n=null}}}function tv(r,e,t){let{filename:n}=e,{position:i=[0,0,0]}=e,{quaternion:s=void 0}=e,a=window.location.href;const o=new A0(`${a}/${n}`,a),l=o.load();if(!s){const c=new Hn;c.setFromAxisAngle(new B(-1,0,0),Math.PI*.5),s=[c.x,c.y,c.z,c.w]}return r.$$set=c=>{"filename"in c&&t(1,n=c.filename),"position"in c&&t(2,i=c.position),"quaternion"in c&&t(0,s=c.quaternion)},[s,n,i,o,l]}class nv extends wt{constructor(e){super(),Mt(this,e,tv,ev,St,{filename:1,position:2,quaternion:0})}}new B;new B;new B;const iv={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},rv={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`},_i=r=>{let e=!1;const t=Zt(r());return{...t,memoize:(...i)=>{if(!e){e=!0;return}t.set(r())}}};function sv(r){let e,t,n,i;return e=new r0({props:{material:r[19],geometry:r[9],renderOrder:r[7],scale:{y:-1},rotation:{x:-Math.PI/2}}}),n=new W_({props:{camera:r[18],useCamera:!1}}),{c(){Ue(e.$$.fragment),t=At(),Ue(n.$$.fragment)},l(s){Be(e.$$.fragment,s),t=Ct(s),Be(n.$$.fragment,s)},m(s,a){Ve(e,s,a),lt(s,t,a),Ve(n,s,a),i=!0},p(s,a){const o={};a[0]&512&&(o.geometry=s[9]),a[0]&128&&(o.renderOrder=s[7]),e.$set(o)},i(s){i||(de(e.$$.fragment,s),de(n.$$.fragment,s),i=!0)},o(s){ge(e.$$.fragment,s),ge(n.$$.fragment,s),i=!1},d(s){Ge(e,s),s&&$e(t),Ge(n,s)}}}function av(r){let e,t,n;function i(a){r[35](a)}let s={rotation:r[10],position:r[1],lookAt:r[2],viewportAware:r[3],castShadow:r[4],receiveShadow:r[5],frustumCulled:r[6],visible:r[8],renderOrder:r[7],$$slots:{default:[sv]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new l0({props:s}),Ai.push(()=>ar(e,"inViewport",i)),e.$on("viewportenter",r[36]),e.$on("viewportleave",r[37]),{c(){Ue(e.$$.fragment)},l(a){Be(e.$$.fragment,a)},m(a,o){Ve(e,a,o),n=!0},p(a,o){const l={};o[0]&1024&&(l.rotation=a[10]),o[0]&2&&(l.position=a[1]),o[0]&4&&(l.lookAt=a[2]),o[0]&8&&(l.viewportAware=a[3]),o[0]&16&&(l.castShadow=a[4]),o[0]&32&&(l.receiveShadow=a[5]),o[0]&64&&(l.frustumCulled=a[6]),o[0]&256&&(l.visible=a[8]),o[0]&128&&(l.renderOrder=a[7]),o[0]&640|o[1]&262144&&(l.$$scope={dirty:o,ctx:a}),!t&&o[0]&1&&(t=!0,l.inViewport=a[0],or(()=>t=!1)),e.$set(l)},i(a){n||(de(e.$$.fragment,a),n=!0)},o(a){ge(e.$$.fragment,a),n=!1},d(a){Ge(e,a)}}}function ov(r,e,t){let n,i,s,a,o,l,c,{position:u=void 0}=e,{rotation:h=void 0}=e,{lookAt:f=void 0}=e,{viewportAware:m=!1}=e,{inViewport:g=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:S=void 0}=e,{visible:y=void 0}=e,{opacity:M=1}=e,{width:A=1}=e,{height:D=1}=e,{blur:z=1}=e,{far:b=10}=e,{smooth:I=!0}=e,{resolution:L=512}=e,{frames:X=1/0}=e,{scale:Q=10}=e,{color:H="#000000"}=e,{depthWrite:V=!1}=e;const{scene:F,renderer:U}=un();if(!U)throw new Error("ContactShadow: WebGLRenderer is undefined, is this component a child of <Canvas>?");const $=_i(()=>A*(Array.isArray(Q)?Q[0]:Q||1));Et(r,$,ue=>t(34,c=ue));const Y=_i(()=>D*(Array.isArray(Q)?Q[1]:Q||1));Et(r,Y,ue=>t(33,l=ue));const re=_i(()=>{const ue=new Gn(L,L);return ue.texture.generateMipmaps=!1,ue.texture.encoding=U.outputEncoding,ue});Et(r,re,ue=>t(44,a=ue));const te=_i(()=>{const ue=new Gn(L,L);return ue.texture.generateMipmaps=!1,ue});Et(r,te,ue=>t(43,s=ue));const P=_i(()=>new Kg(c,l).rotateX(Math.PI/2));Et(r,P,ue=>t(9,i=ue));const q=_i(()=>new en(i));Et(r,q,ue=>t(45,o=ue));const ne=_i(()=>{const ue=new Uc({depthTest:!1,depthWrite:!1});return ue.onBeforeCompile=it=>{it.uniforms={...it.uniforms,uColor:{value:new Ye(H).convertSRGBToLinear()}},it.fragmentShader=`uniform vec3 uColor;
`+it.fragmentShader,it.fragmentShader=it.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),it.fragmentShader=it.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},ue});Et(r,ne,ue=>t(42,n=ue));const J=new Rn({...iv,depthTest:!1}),ee=new Rn({...rv,depthTest:!1}),k=new Br(-c/2,c/2,l/2,-l/2,0,b);k.updateProjectionMatrix();const le=new ir({map:a.texture,transparent:!0,opacity:M,depthWrite:V}),me=ue=>{const it=o;it.visible=!0,it.material=J,J.uniforms.tDiffuse.value=a.texture,J.uniforms.h.value=ue*1/256,U.setRenderTarget(s),U.render(it,k),it.material=ee,ee.uniforms.tDiffuse.value=s.texture,ee.uniforms.v.value=ue*1/256,U.setRenderTarget(a),U.render(it,k),it.visible=!1},Ce=()=>{const ue=F.background;F.background=null;const it=F.overrideMaterial;F.overrideMaterial=n;const bt=U.getClearAlpha();U.setClearAlpha(0),U.setRenderTarget(a),U.render(F,k),F.overrideMaterial=it,me(z),I&&me(z*.4),U.setRenderTarget(null),F.background=ue,U.setClearAlpha(bt)},ye=()=>{Ce()};let nt=0;Fs(()=>{(X===1/0||nt<X)&&(Ce(),nt+=1)}),yt(()=>{a.dispose(),s.dispose(),i.dispose(),n.dispose(),J.dispose(),ee.dispose(),le.dispose()});let qe={...h,x:(h==null?void 0:h.x)??0+Math.PI/2};function ze(ue){g=ue,t(0,g)}function It(ue){vt.call(this,r,ue)}function Dt(ue){vt.call(this,r,ue)}return r.$$set=ue=>{"position"in ue&&t(1,u=ue.position),"rotation"in ue&&t(20,h=ue.rotation),"lookAt"in ue&&t(2,f=ue.lookAt),"viewportAware"in ue&&t(3,m=ue.viewportAware),"inViewport"in ue&&t(0,g=ue.inViewport),"castShadow"in ue&&t(4,d=ue.castShadow),"receiveShadow"in ue&&t(5,p=ue.receiveShadow),"frustumCulled"in ue&&t(6,v=ue.frustumCulled),"renderOrder"in ue&&t(7,S=ue.renderOrder),"visible"in ue&&t(8,y=ue.visible),"opacity"in ue&&t(21,M=ue.opacity),"width"in ue&&t(22,A=ue.width),"height"in ue&&t(23,D=ue.height),"blur"in ue&&t(24,z=ue.blur),"far"in ue&&t(25,b=ue.far),"smooth"in ue&&t(26,I=ue.smooth),"resolution"in ue&&t(27,L=ue.resolution),"frames"in ue&&t(28,X=ue.frames),"scale"in ue&&t(29,Q=ue.scale),"color"in ue&&t(30,H=ue.color),"depthWrite"in ue&&t(31,V=ue.depthWrite)},r.$$.update=()=>{r.$$.dirty[0]&541065216&&$.memoize([A,Q]),r.$$.dirty[0]&545259520&&Y.memoize(D,Q),r.$$.dirty[0]&134217728&&re.memoize(L),r.$$.dirty[0]&134217728&&te.memoize(L),r.$$.dirty[1]&12&&P.memoize(c,l),r.$$.dirty[0]&512&&q.memoize(i),r.$$.dirty[0]&1073741824&&ne.memoize(H),r.$$.dirty[0]&1048576&&t(10,qe={...h,x:(h==null?void 0:h.x)??0+Math.PI/2})},[g,u,f,m,d,p,v,S,y,i,qe,$,Y,re,te,P,q,ne,k,le,h,M,A,D,z,b,I,L,X,Q,H,V,ye,l,c,ze,It,Dt]}class lv extends wt{constructor(e){super(),Mt(this,e,ov,av,St,{position:1,rotation:20,lookAt:2,viewportAware:3,inViewport:0,castShadow:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,opacity:21,width:22,height:23,blur:24,far:25,smooth:26,resolution:27,frames:28,scale:29,color:30,depthWrite:31,refresh:32},null,[-1,-1])}get refresh(){return this.$$.ctx[32]}}function uc(r){let e,t;return e=new lv({props:{scale:r[1]*4,far:r[1],blur:2}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.scale=n[1]*4),i&2&&(s.far=n[1]),e.$set(s)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function cv(r){let e,t,n=r[2]&&uc(r);return{c(){n&&n.c(),e=zt()},l(i){n&&n.l(i),e=zt()},m(i,s){n&&n.m(i,s),lt(i,e,s),t=!0},p(i,s){i[2]?n?(n.p(i,s),s&4&&de(n,1)):(n=uc(i),n.c(),de(n,1),n.m(e.parentNode,e)):n&&(Dn(),ge(n,1,1,()=>{n=null}),Pn())},i(i){t||(de(n),t=!0)},o(i){ge(n),t=!1},d(i){n&&n.d(i),i&&$e(e)}}}function uv(r){let e,t,n,i,s,a,o,l;return e=new Xt({props:{type:Jc,intensity:r[0]/3}}),n=new Xt({props:{type:Kc,penumbra:1,position:[r[8].main[0]*r[1],r[8].main[1]*r[1],r[8].main[2]*r[1]],intensity:r[0]*2,castShadow:r[2],"shadow-bias":r[3],"shadow-normalBias":r[4],"shadow-mapSize":r[5]}}),s=new Xt({props:{type:Pr,position:[r[8].fill[0]*r[1],r[8].fill[1]*r[1],r[8].fill[2]*r[1]],intensity:r[0]}}),o=new Xt({props:{type:Un,position:[0,-r[6]/2-r[7]/2,0],$$slots:{default:[cv]},$$scope:{ctx:r}}}),{c(){Ue(e.$$.fragment),t=At(),Ue(n.$$.fragment),i=At(),Ue(s.$$.fragment),a=At(),Ue(o.$$.fragment)},l(c){Be(e.$$.fragment,c),t=Ct(c),Be(n.$$.fragment,c),i=Ct(c),Be(s.$$.fragment,c),a=Ct(c),Be(o.$$.fragment,c)},m(c,u){Ve(e,c,u),lt(c,t,u),Ve(n,c,u),lt(c,i,u),Ve(s,c,u),lt(c,a,u),Ve(o,c,u),l=!0},p(c,[u]){const h={};u&1&&(h.intensity=c[0]/3),e.$set(h);const f={};u&2&&(f.position=[c[8].main[0]*c[1],c[8].main[1]*c[1],c[8].main[2]*c[1]]),u&1&&(f.intensity=c[0]*2),u&4&&(f.castShadow=c[2]),u&8&&(f["shadow-bias"]=c[3]),u&16&&(f["shadow-normalBias"]=c[4]),u&32&&(f["shadow-mapSize"]=c[5]),n.$set(f);const m={};u&2&&(m.position=[c[8].fill[0]*c[1],c[8].fill[1]*c[1],c[8].fill[2]*c[1]]),u&1&&(m.intensity=c[0]),s.$set(m);const g={};u&192&&(g.position=[0,-c[6]/2-c[7]/2,0]),u&4102&&(g.$$scope={dirty:u,ctx:c}),o.$set(g)},i(c){l||(de(e.$$.fragment,c),de(n.$$.fragment,c),de(s.$$.fragment,c),de(o.$$.fragment,c),l=!0)},o(c){ge(e.$$.fragment,c),ge(n.$$.fragment,c),ge(s.$$.fragment,c),ge(o.$$.fragment,c),l=!1},d(c){Ge(e,c),c&&$e(t),Ge(n,c),c&&$e(i),Ge(s,c),c&&$e(a),Ge(o,c)}}}function fv(r,e,t){let{intensity:n=.5}=e,{radius:i=1}=e,{shadows:s=!0}=e,{preset_name:a="rembrandt"}=e,{shadowBias:o=-1e-4}=e,{normalBias:l=0}=e,{shadowSize:c=1024}=e,{height:u=1}=e,{shadowOffset:h=1}=e;const m={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}}[a];return r.$$set=g=>{"intensity"in g&&t(0,n=g.intensity),"radius"in g&&t(1,i=g.radius),"shadows"in g&&t(2,s=g.shadows),"preset_name"in g&&t(9,a=g.preset_name),"shadowBias"in g&&t(3,o=g.shadowBias),"normalBias"in g&&t(4,l=g.normalBias),"shadowSize"in g&&t(5,c=g.shadowSize),"height"in g&&t(6,u=g.height),"shadowOffset"in g&&t(7,h=g.shadowOffset)},[n,i,s,o,l,c,u,h,m,a]}class hv extends wt{constructor(e){super(),Mt(this,e,fv,uv,St,{intensity:0,radius:1,shadows:2,preset_name:9,shadowBias:3,normalBias:4,shadowSize:5,height:6,shadowOffset:7})}}function dv(r,e,t){let{size:n=10}=e,{divisions:i=10}=e,{position:s=[0,0,0]}=e;const{scene:a,invalidate:o}=un(),l=new Zg(n,i);return l.position.x=s[0],l.position.y=s[1],l.position.z=s[2],a.add(l),yt(()=>{a.remove(l)}),r.$$set=c=>{"size"in c&&t(0,n=c.size),"divisions"in c&&t(1,i=c.divisions),"position"in c&&t(2,s=c.position)},[n,i,s]}class pv extends wt{constructor(e){super(),Mt(this,e,dv,null,St,{size:0,divisions:1,position:2})}}function mv(r){let e,t;return e=new Y_({props:{enableZoom:!0}}),{c(){Ue(e.$$.fragment)},l(n){Be(e.$$.fragment,n)},m(n,i){Ve(e,n,i),t=!0},p:qt,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){Ge(e,n)}}}function gv(r){let e,t,n,i,s,a,o,l,c,u,h,f,m,g;return e=new Xt({props:{type:Pr,color:"white",intensity:.5,position:[0,5,0]}}),n=new Xt({props:{type:Pr,color:"blue",intensity:.5,position:[5,5,0]}}),s=new Xt({props:{type:Pr,color:"yellow",intensity:.5,position:[-5,-5,0]}}),o=new Xt({props:{type:Kt,makeDefault:!0,position:[.6,.6,.6],fov:25,$$slots:{default:[mv,({ref:d})=>({0:d}),({ref:d})=>d?1:0]},$$scope:{ctx:r}}}),c=new hv({}),h=new pv({}),m=new nv({props:{filename:"/turtlebot3_description/turtlebot3_burger.xml"}}),{c(){Ue(e.$$.fragment),t=At(),Ue(n.$$.fragment),i=At(),Ue(s.$$.fragment),a=At(),Ue(o.$$.fragment),l=At(),Ue(c.$$.fragment),u=At(),Ue(h.$$.fragment),f=At(),Ue(m.$$.fragment)},l(d){Be(e.$$.fragment,d),t=Ct(d),Be(n.$$.fragment,d),i=Ct(d),Be(s.$$.fragment,d),a=Ct(d),Be(o.$$.fragment,d),l=Ct(d),Be(c.$$.fragment,d),u=Ct(d),Be(h.$$.fragment,d),f=Ct(d),Be(m.$$.fragment,d)},m(d,p){Ve(e,d,p),lt(d,t,p),Ve(n,d,p),lt(d,i,p),Ve(s,d,p),lt(d,a,p),Ve(o,d,p),lt(d,l,p),Ve(c,d,p),lt(d,u,p),Ve(h,d,p),lt(d,f,p),Ve(m,d,p),g=!0},p(d,p){const v={};p&2&&(v.$$scope={dirty:p,ctx:d}),o.$set(v)},i(d){g||(de(e.$$.fragment,d),de(n.$$.fragment,d),de(s.$$.fragment,d),de(o.$$.fragment,d),de(c.$$.fragment,d),de(h.$$.fragment,d),de(m.$$.fragment,d),g=!0)},o(d){ge(e.$$.fragment,d),ge(n.$$.fragment,d),ge(s.$$.fragment,d),ge(o.$$.fragment,d),ge(c.$$.fragment,d),ge(h.$$.fragment,d),ge(m.$$.fragment,d),g=!1},d(d){Ge(e,d),d&&$e(t),Ge(n,d),d&&$e(i),Ge(s,d),d&&$e(a),Ge(o,d),d&&$e(l),Ge(c,d),d&&$e(u),Ge(h,d),d&&$e(f),Ge(m,d)}}}function _v(r){let e,t,n;return t=new C_({props:{shadows:!0,rendererParameters:{logarithmicDepthBuffer:!0},$$slots:{default:[gv]},$$scope:{ctx:r}}}),{c(){e=fc("div"),Ue(t.$$.fragment),this.h()},l(i){e=hc(i,"DIV",{class:!0});var s=dc(e);Be(t.$$.fragment,s),s.forEach($e),this.h()},h(){pc(e,"class","svelte-ubqgp")},m(i,s){lt(i,e,s),Ve(t,e,null),n=!0},p(i,[s]){const a={};s&2&&(a.$$scope={dirty:s,ctx:i}),t.$set(a)},i(i){n||(de(t.$$.fragment,i),n=!0)},o(i){ge(t.$$.fragment,i),n=!1},d(i){i&&$e(e),Ge(t)}}}class Sv extends wt{constructor(e){super(),Mt(this,e,null,_v,St,{})}}export{Sv as default};
