var Mf=Object.defineProperty;var Af=(r,e,t)=>e in r?Mf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ni=(r,e,t)=>(Af(r,typeof e!="symbol"?e+"":e,t),t);import{J as Do,K as At,L as kt,t as hs,M as qt,S as xt,i as St,s as mt,C as un,D as fn,E as dn,F as hn,g as pe,d as me,I as Rt,y as Pe,z as Ue,A as ke,B as Ne,k as Zi,l as Ji,m as Qi,h as Oe,n as da,b as Xe,N as Xi,O as Vn,v as xn,f as Sn,P as ha,o as Ur,Q as Pa,w as Rn,R as $i,T as er,a as It,c as Dt,U as tr,V as Et,W as zr,e as nt,X as qn,Y as tn,Z as Br,_ as nr,$ as ir,H as Tt,a0 as Ro,a1 as Ef,a2 as Tf,a3 as il,a4 as cs,a5 as Gr,a6 as ra,x as Ir,a7 as Qn,q as Cf,r as Lf,a8 as If,G as Df,a9 as sa,aa as vu}from"../chunks/index.0766f3e4.js";import{j as Rf,w as rn,r as Pf}from"../chunks/singletons.457a5250.js";import{p as kf}from"../chunks/stores.b2255d5d.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="148",lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nf=0,rl=1,Ff=2,bu=1,yu=2,as=3,Li=0,jn=1,pa=2,Ds=3,Ti=0,Cr=1,sl=2,al=3,ol=4,Of=5,Er=100,Uf=101,zf=102,ll=103,cl=104,Bf=200,Gf=201,Vf=202,Hf=203,xu=204,Su=205,Wf=206,jf=207,qf=208,Xf=209,Yf=210,Kf=0,Zf=1,Jf=2,yo=3,Qf=4,$f=5,ed=6,td=7,ma=0,nd=1,id=2,ni=0,rd=1,sd=2,ad=3,wu=4,od=5,Mu=300,Dr=301,Rr=302,xo=303,So=304,ga=306,Hi=1e3,bn=1001,wo=1002,nn=1003,ul=1004,ka=1005,_n=1006,ld=1007,Yi=1008,Ki=1009,cd=1010,ud=1011,Au=1012,fd=1013,Wi=1014,Ei=1015,ps=1016,dd=1017,hd=1018,Lr=1020,pd=1021,md=1022,Hn=1023,gd=1024,_d=1025,ji=1026,Pr=1027,vd=1028,bd=1029,yd=1030,xd=1031,Sd=1033,Na=33776,Fa=33777,Oa=33778,Ua=33779,fl=35840,dl=35841,hl=35842,pl=35843,wd=36196,ml=37492,gl=37496,_l=37808,vl=37809,bl=37810,yl=37811,xl=37812,Sl=37813,wl=37814,Ml=37815,Al=37816,El=37817,Tl=37818,Cl=37819,Ll=37820,Il=37821,Dl=36492,aa=2300,oa=2301,za=2302,Rl=2400,Pl=2401,kl=2402,Md=2500,Ii=3e3,Mt=3001,Ad=3200,Ed=3201,ko=0,Td=1,$n="srgb",ms="srgb-linear",Ba=7680,Cd=519,Nl=35044,Fl="300 es",Mo=1035;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ol=1234567;const us=Math.PI/180,gs=180/Math.PI;function Ri(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function vn(r,e,t){return Math.max(e,Math.min(t,r))}function No(r,e){return(r%e+e)%e}function Ld(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Id(r,e,t){return r!==e?(t-r)/(e-r):0}function fs(r,e,t){return(1-t)*r+t*e}function Dd(r,e,t,n){return fs(r,e,1-Math.exp(-t*n))}function Rd(r,e=1){return e-Math.abs(No(r,e*2)-e)}function Pd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Nd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Fd(r,e){return r+Math.random()*(e-r)}function Od(r){return r*(.5-Math.random())}function Ud(r){r!==void 0&&(Ol=r);let e=Ol+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zd(r){return r*us}function Bd(r){return r*gs}function Ao(r){return(r&r-1)===0&&r!==0}function Eu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function la(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Gd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*m,a*c);break;case"YXY":r.set(l*m,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function os(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Jr=Object.freeze({__proto__:null,DEG2RAD:us,RAD2DEG:gs,generateUUID:Ri,clamp:vn,euclideanModulo:No,mapLinear:Ld,inverseLerp:Id,lerp:fs,damp:Dd,pingpong:Rd,smoothstep:Pd,smootherstep:kd,randInt:Nd,randFloat:Fd,randFloatSpread:Od,seededRandom:Ud,degToRad:zd,radToDeg:Bd,isPowerOfTwo:Ao,ceilPowerOfTwo:Eu,floorPowerOfTwo:la,setQuaternionFromProperEuler:Gd,normalize:Dn,denormalize:os});class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class On{constructor(){On.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],h=i[0],p=i[3],_=i[6],x=i[1],S=i[4],w=i[7],M=i[2],C=i[5],G=i[8];return s[0]=o*h+a*x+l*M,s[3]=o*p+a*S+l*C,s[6]=o*_+a*w+l*G,s[1]=c*h+u*x+f*M,s[4]=c*p+u*S+f*C,s[7]=c*_+u*w+f*G,s[2]=d*h+m*x+g*M,s[5]=d*p+m*S+g*C,s[8]=d*_+m*w+g*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return e[0]=f*h,e[1]=(i*c-u*n)*h,e[2]=(a*n-i*o)*h,e[3]=d*h,e[4]=(u*t-i*l)*h,e[5]=(i*s-a*t)*h,e[6]=m*h,e[7]=(n*l-c*t)*h,e[8]=(o*t-n*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new On;function Tu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function na(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Va={[$n]:{[ms]:qi},[ms]:{[$n]:na}},mn={legacyMode:!0,get workingColorSpace(){return ms},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Va[e]&&Va[e][t]!==void 0){const n=Va[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kt={r:0,g:0,b:0},Xn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Ha(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ps(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mn.workingColorSpace){return this.r=e,this.g=t,this.b=n,mn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mn.workingColorSpace){if(e=No(e,1),t=vn(t,0,1),n=vn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ha(o,s,e+1/3),this.g=Ha(o,s,e),this.b=Ha(o,s,e-1/3)}return mn.toWorkingColorSpace(this,i),this}setStyle(e,t=$n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,mn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,mn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,mn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,mn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=$n){const n=Cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return mn.fromWorkingColorSpace(Ps(this,Kt),e),vn(Kt.r*255,0,255)<<16^vn(Kt.g*255,0,255)<<8^vn(Kt.b*255,0,255)<<0}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mn.workingColorSpace){mn.fromWorkingColorSpace(Ps(this,Kt),t);const n=Kt.r,i=Kt.g,s=Kt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mn.workingColorSpace){return mn.fromWorkingColorSpace(Ps(this,Kt),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=$n){return mn.fromWorkingColorSpace(Ps(this,Kt),e),e!==$n?`color(${e} ${Kt.r} ${Kt.g} ${Kt.b})`:`rgb(${Kt.r*255|0},${Kt.g*255|0},${Kt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Xn),Xn.h+=e,Xn.s+=t,Xn.l+=n,this.setHSL(Xn.h,Xn.s,Xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Rs);const n=fs(Xn.h,Rs.h,t),i=fs(Xn.s,Rs.s,t),s=fs(Xn.l,Rs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}$e.NAMES=Cu;let ur;class Lu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=_s("canvas")),ur.width=e.width,ur.height=e.height;const n=ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Iu{constructor(e=null){this.isSource=!0,this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wa(i[o].image)):s.push(Wa(i[o]))}else s=Wa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vd=0;class yn extends rr{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=bn,i=bn,s=_n,o=Yi,a=Hn,l=Ki,c=yn.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ri(),this.name="",this.source=new Iu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new On,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Mu;yn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],h=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,w=(m+1)/2,M=(_+1)/2,C=(u+d)/4,G=(f+h)/4,v=(g+p)/4;return S>w&&S>M?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=G/n):w>M?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=C/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=G/s,i=v/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-h)/x,this.z=(d-u)/x,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ii extends rr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Du extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hd extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=h;return}if(f!==h||l!==d||c!==m||u!==g){let p=1-a;const _=l*d+c*m+u*g+f*h,x=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const M=Math.sqrt(S),C=Math.atan2(M,_*x);p=Math.sin(p*C)/M,a=Math.sin(a*C)/M}const w=a*x;if(l=l*p+d*w,c=c*p+m*w,u=u*p+g*w,f=f*p+h*w,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-a*m,e[t+2]=c*g+u*m+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+u*-a-f*-o,this.y=u*l+d*-o+f*-s-c*-a,this.z=f*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new H,Ul=new ri;class bs{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Fi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fi)}else n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox),qa.applyMatrix4(e.matrixWorld),this.union(qa);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),ks.subVectors(this.max,Qr),fr.subVectors(e.a,Qr),dr.subVectors(e.b,Qr),hr.subVectors(e.c,Qr),bi.subVectors(dr,fr),yi.subVectors(hr,dr),Oi.subVectors(fr,hr);let t=[0,-bi.z,bi.y,0,-yi.z,yi.y,0,-Oi.z,Oi.y,bi.z,0,-bi.x,yi.z,0,-yi.x,Oi.z,0,-Oi.x,-bi.y,bi.x,0,-yi.y,yi.x,0,-Oi.y,Oi.x,0];return!Xa(t,fr,dr,hr,ks)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,fr,dr,hr,ks))?!1:(Ns.crossVectors(bi,yi),t=[Ns.x,Ns.y,Ns.z],Xa(t,fr,dr,hr,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new H,new H,new H,new H,new H,new H,new H,new H],Fi=new H,qa=new bs,fr=new H,dr=new H,hr=new H,bi=new H,yi=new H,Oi=new H,Qr=new H,ks=new H,Ns=new H,Ui=new H;function Xa(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ui.fromArray(r,s);const a=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Wd=new bs,$r=new H,Ya=new H;class _a{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Ya)),this.expandByPoint($r.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new H,Ka=new H,Fs=new H,xi=new H,Za=new H,Os=new H,Ja=new H;class Fo{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.direction).multiplyScalar(t).add(this.origin),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ka.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Ka);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fs),a=xi.dot(this.direction),l=-xi.dot(Fs),c=xi.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const h=1/u;f*=h,d*=h,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Fs).multiplyScalar(d).add(Ka),m}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,s){Za.subVectors(t,e),Os.subVectors(n,e),Ja.crossVectors(Za,Os);let o=this.direction.dot(Ja),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);const l=a*this.direction.dot(Os.crossVectors(xi,Os));if(l<0)return null;const c=a*this.direction.dot(Za.cross(xi));if(c<0||l+c>o)return null;const u=-a*xi.dot(Ja);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,d,m,g,h,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=h,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/pr.setFromMatrixColumn(e,0).length(),s=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,h=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-h*c,t[9]=-a*l,t[2]=h-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d+h*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=h+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d-h*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=h-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,h=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+h,t[1]=l*f,t[5]=h*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,h=a*c;t[0]=l*u,t[4]=h-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,h=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+h,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,qd)}lookAt(e,t,n){const i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Si.crossVectors(n,Nn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Si.crossVectors(n,Nn)),Si.normalize(),Us.crossVectors(Nn,Si),i[0]=Si.x,i[4]=Us.x,i[8]=Nn.x,i[1]=Si.y,i[5]=Us.y,i[9]=Nn.y,i[2]=Si.z,i[6]=Us.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],h=n[6],p=n[10],_=n[14],x=n[3],S=n[7],w=n[11],M=n[15],C=i[0],G=i[4],v=i[8],D=i[12],L=i[1],j=i[5],K=i[9],V=i[13],U=i[2],O=i[6],B=i[10],J=i[14],X=i[3],re=i[7],ne=i[11],R=i[15];return s[0]=o*C+a*L+l*U+c*X,s[4]=o*G+a*j+l*O+c*re,s[8]=o*v+a*K+l*B+c*ne,s[12]=o*D+a*V+l*J+c*R,s[1]=u*C+f*L+d*U+m*X,s[5]=u*G+f*j+d*O+m*re,s[9]=u*v+f*K+d*B+m*ne,s[13]=u*D+f*V+d*J+m*R,s[2]=g*C+h*L+p*U+_*X,s[6]=g*G+h*j+p*O+_*re,s[10]=g*v+h*K+p*B+_*ne,s[14]=g*D+h*V+p*J+_*R,s[3]=x*C+S*L+w*U+M*X,s[7]=x*G+S*j+w*O+M*re,s[11]=x*v+S*K+w*B+M*ne,s[15]=x*D+S*V+w*J+M*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],h=e[7],p=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*m-n*l*m)+h*(+t*l*m-t*c*d+s*o*d-i*o*m+i*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],h=e[13],p=e[14],_=e[15],x=f*p*c-h*d*c+h*l*m-a*p*m-f*l*_+a*d*_,S=g*d*c-u*p*c-g*l*m+o*p*m+u*l*_-o*d*_,w=u*h*c-g*f*c+g*a*m-o*h*m-u*a*_+o*f*_,M=g*f*l-u*h*l-g*a*d+o*h*d+u*a*p-o*f*p,C=t*x+n*S+i*w+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/C;return e[0]=x*G,e[1]=(h*d*s-f*p*s-h*i*m+n*p*m+f*i*_-n*d*_)*G,e[2]=(a*p*s-h*l*s+h*i*c-n*p*c-a*i*_+n*l*_)*G,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*m-n*l*m)*G,e[4]=S*G,e[5]=(u*p*s-g*d*s+g*i*m-t*p*m-u*i*_+t*d*_)*G,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*_-t*l*_)*G,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*m+t*l*m)*G,e[8]=w*G,e[9]=(g*f*s-u*h*s-g*n*m+t*h*m+u*n*_-t*f*_)*G,e[10]=(o*h*s-g*a*s+g*n*c-t*h*c-o*n*_+t*a*_)*G,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*m-t*a*m)*G,e[12]=M*G,e[13]=(u*h*i-g*f*i+g*n*d-t*h*d-u*n*p+t*f*p)*G,e[14]=(g*a*i-o*h*i-g*n*l+t*h*l+o*n*p-t*a*p)*G,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*G,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,g=s*f,h=o*u,p=o*f,_=a*f,x=l*c,S=l*u,w=l*f,M=n.x,C=n.y,G=n.z;return i[0]=(1-(h+_))*M,i[1]=(m+w)*M,i[2]=(g-S)*M,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(d+_))*C,i[6]=(p+x)*C,i[7]=0,i[8]=(g+S)*G,i[9]=(p-x)*G,i[10]=(1-(d+h))*G,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=pr.set(i[0],i[1],i[2]).length();const o=pr.set(i[4],i[5],i[6]).length(),a=pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);const c=1/s,u=1/o,f=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,d=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pr=new H,Yn=new tt,jd=new H(0,0,0),qd=new H(1,1,1),Si=new H,Us=new H,Nn=new H,zl=new tt,Bl=new ri;class ys{constructor(e=0,t=0,n=0,i=ys.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ys.DefaultOrder="XYZ";ys.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xd=0;const Gl=new H,mr=new ri,fi=new tt,zs=new H,es=new H,Yd=new H,Kd=new ri,Vl=new H(1,0,0),Hl=new H(0,1,0),Wl=new H(0,0,1),Zd={type:"added"},jl={type:"removed"};class Ft extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DefaultUp.clone();const e=new H,t=new ys,n=new ri,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new On}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Ft.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ft.DefaultMatrixWorldAutoUpdate,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(Hl,e)}rotateZ(e){return this.rotateOnAxis(Wl,e)}translateOnAxis(e,t){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(Hl,e)}translateZ(e){return this.translateOnAxis(Wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(es,zs,this.up):fi.lookAt(zs,es,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),mr.setFromRotationMatrix(fi),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(jl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ft.DefaultUp=new H(0,1,0);Ft.DefaultMatrixAutoUpdate=!0;Ft.DefaultMatrixWorldAutoUpdate=!0;const Kn=new H,di=new H,Qa=new H,hi=new H,gr=new H,_r=new H,ql=new H,$a=new H,eo=new H,to=new H;class _i{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Kn.subVectors(i,t),di.subVectors(n,t),Qa.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(di),l=Kn.dot(Qa),c=di.dot(di),u=di.dot(Qa),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,hi),l.set(0,0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),di.subVectors(e,t),Kn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Kn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return _i.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;gr.subVectors(i,n),_r.subVectors(s,n),$a.subVectors(e,n);const l=gr.dot($a),c=_r.dot($a);if(l<=0&&c<=0)return t.copy(n);eo.subVectors(e,i);const u=gr.dot(eo),f=_r.dot(eo);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(gr,o);to.subVectors(e,s);const m=gr.dot(to),g=_r.dot(to);if(g>=0&&m<=g)return t.copy(s);const h=m*c-l*g;if(h<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(_r,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return ql.subVectors(s,i),a=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(ql,a);const _=1/(p+h+d);return o=h*_,a=d*_,t.copy(n).addScaledVector(gr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Jd=0;class sr extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Cr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xu,this.blendDst=Su,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kr extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new H,Bs=new Ze;class Un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),i=Dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),i=Dn(i,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ru extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pu extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qd=0;const Bn=new tt,no=new Ft,vr=new H,Fn=new bs,ts=new bs,$t=new H;class Pn extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?Pu:Ru)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new On().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Fn.min,ts.min),Fn.expandByPoint($t),$t.addVectors(Fn.max,ts.max),Fn.expandByPoint($t)):(Fn.expandByPoint(ts.min),Fn.expandByPoint(ts.max))}Fn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),$t.add(vr)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<a;L++)c[L]=new H,u[L]=new H;const f=new H,d=new H,m=new H,g=new Ze,h=new Ze,p=new Ze,_=new H,x=new H;function S(L,j,K){f.fromArray(i,L*3),d.fromArray(i,j*3),m.fromArray(i,K*3),g.fromArray(o,L*2),h.fromArray(o,j*2),p.fromArray(o,K*2),d.sub(f),m.sub(f),h.sub(g),p.sub(g);const V=1/(h.x*p.y-p.x*h.y);isFinite(V)&&(_.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(V),x.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(V),c[L].add(_),c[j].add(_),c[K].add(_),u[L].add(x),u[j].add(x),u[K].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let L=0,j=w.length;L<j;++L){const K=w[L],V=K.start,U=K.count;for(let O=V,B=V+U;O<B;O+=3)S(n[O+0],n[O+1],n[O+2])}const M=new H,C=new H,G=new H,v=new H;function D(L){G.fromArray(s,L*3),v.copy(G);const j=c[L];M.copy(j),M.sub(G.multiplyScalar(G.dot(j))).normalize(),C.crossVectors(v,j);const V=C.dot(u[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=V}for(let L=0,j=w.length;L<j;++L){const K=w[L],V=K.start,U=K.count;for(let O=V,B=V+U;O<B;O+=3)D(n[O+0]),D(n[O+1]),D(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,h),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(h,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new Un(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new tt,br=new Fo,io=new _a,ns=new H,is=new H,rs=new H,ro=new H,Gs=new H,Vs=new Ze,Hs=new Ze,Ws=new Ze,so=new H,js=new H;let cn=class extends Ft{constructor(e=new Pn,t=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ro.fromBufferAttribute(f,e),o?Gs.addScaledVector(ro,u):Gs.addScaledVector(ro.sub(t),u))}t.add(Gs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(s),e.ray.intersectsSphere(io)===!1)||(Xl.copy(s).invert(),br.copy(e.ray).applyMatrix4(Xl),n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const h=f[m],p=i[h.materialIndex],_=Math.max(h.start,d.start),x=Math.min(a.count,Math.min(h.start+h.count,d.start+d.count));for(let S=_,w=x;S<w;S+=3){const M=a.getX(S),C=a.getX(S+1),G=a.getX(S+2);o=qs(this,p,e,br,c,u,M,C,G),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let h=m,p=g;h<p;h+=3){const _=a.getX(h),x=a.getX(h+1),S=a.getX(h+2);o=qs(this,i,e,br,c,u,_,x,S),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const h=f[m],p=i[h.materialIndex],_=Math.max(h.start,d.start),x=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let S=_,w=x;S<w;S+=3){const M=S,C=S+1,G=S+2;o=qs(this,p,e,br,c,u,M,C,G),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let h=m,p=g;h<p;h+=3){const _=h,x=h+1,S=h+2;o=qs(this,i,e,br,c,u,_,x,S),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}};function $d(r,e,t,n,i,s,o,a){let l;if(e.side===jn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Li,a),l===null)return null;js.copy(a),js.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:r}}function qs(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,ns),r.getVertexPosition(a,is),r.getVertexPosition(l,rs);const c=$d(r,e,t,n,ns,is,rs,so);if(c){i&&(Vs.fromBufferAttribute(i,o),Hs.fromBufferAttribute(i,a),Ws.fromBufferAttribute(i,l),c.uv=_i.getUV(so,ns,is,rs,Vs,Hs,Ws,new Ze)),s&&(Vs.fromBufferAttribute(s,o),Hs.fromBufferAttribute(s,a),Ws.fromBufferAttribute(s,l),c.uv2=_i.getUV(so,ns,is,rs,Vs,Hs,Ws,new Ze));const u={a:o,b:a,c:l,normal:new H,materialIndex:0};_i.getNormal(ns,is,rs,u.normal),c.face=u}return c}class Vr extends Pn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(f,2));function g(h,p,_,x,S,w,M,C,G,v,D){const L=w/G,j=M/v,K=w/2,V=M/2,U=C/2,O=G+1,B=v+1;let J=0,X=0;const re=new H;for(let ne=0;ne<B;ne++){const R=ne*j-V;for(let q=0;q<O;q++){const ie=q*L-K;re[h]=ie*x,re[p]=R*S,re[_]=U,c.push(re.x,re.y,re.z),re[h]=0,re[p]=0,re[_]=C>0?1:-1,u.push(re.x,re.y,re.z),f.push(q/G),f.push(1-ne/v),J+=1}}for(let ne=0;ne<v;ne++)for(let R=0;R<G;R++){const q=d+R+O*ne,ie=d+R+O*(ne+1),Q=d+(R+1)+O*(ne+1),te=d+(R+1)+O*ne;l.push(q,ie,te),l.push(ie,Q,te),X+=6}a.addGroup(m,X,D),m+=X,d+=J}}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gn(r){const e={};for(let t=0;t<r.length;t++){const n=Nr(r[t]);for(const i in n)e[i]=n[i]}return e}function eh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ku(r){return r.getRenderTarget()===null&&r.outputEncoding===Mt?$n:ms}const Nu={clone:Nr,merge:gn};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=eh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uo extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends Uo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yr=-90,xr=1;class ih extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new sn(yr,xr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new sn(yr,xr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new sn(yr,xr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new sn(yr,xr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new sn(yr,xr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new sn(yr,xr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=ni,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Fu extends yn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rh extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vr(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Ti});s.uniforms.tEquirect.value=t;const o=new cn(i,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=_n),new ih(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ao=new H,sh=new H,ah=new On;class Bi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ao.subVectors(n,t).cross(sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ah.getNormalMatrix(e),i=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new _a,Xs=new H;class va{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,s=new Bi,o=new Bi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],m=n[9],g=n[10],h=n[11],p=n[12],_=n[13],x=n[14],S=n[15];return t[0].setComponents(a-i,f-l,h-d,S-p).normalize(),t[1].setComponents(a+i,f+l,h+d,S+p).normalize(),t[2].setComponents(a+s,f+c,h+m,S+_).normalize(),t[3].setComponents(a-s,f-c,h-m,S-_).normalize(),t[4].setComponents(a-o,f-u,h-g,S-x).normalize(),t[5].setComponents(a+o,f+u,h+g,S+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xs.x=i.normal.x>0?e.max.x:e.min.x,Xs.y=i.normal.y>0?e.max.y:e.min.y,Xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ou(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function oh(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;r.bindBuffer(f,c),m.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class ba extends Pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,m=[],g=[],h=[],p=[];for(let _=0;_<u;_++){const x=_*d-o;for(let S=0;S<c;S++){const w=S*f-s;g.push(w,-x,0),h.push(0,0,1),p.push(S/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const S=x+c*_,w=x+c*(_+1),M=x+1+c*(_+1),C=x+1+c*_;m.push(S,w,C),m.push(w,M,C)}this.setIndex(m),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2))}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}var lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ph="vec3 transformed = vec3( position );",mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,_h=`#ifdef USE_IRIDESCENCE
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
#endif`,vh=`#ifdef USE_BUMPMAP
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
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Th=`#define PI 3.141592653589793
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
}`,Ch=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
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
#endif`,Gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jh=`#ifdef USE_GRADIENTMAP
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
}`,qh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zh=`uniform bool receiveShadow;
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
#endif`,Jh=`#if defined( USE_ENVMAP )
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
#endif`,Qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
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
}`,rp=`
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Sp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vp=`float getShadowMask() {
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
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,em=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,tm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,nm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,im=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,rm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dm=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,pm=`#define DISTANCE
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
}`,mm=`#define DISTANCE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,xm=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,Am=`#define MATCAP
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
}`,Em=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Cm=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Im=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Rm=`#define TOON
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
}`,Pm=`#define TOON
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
}`,km=`uniform float size;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Um=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,rt={alphamap_fragment:lh,alphamap_pars_fragment:ch,alphatest_fragment:uh,alphatest_pars_fragment:fh,aomap_fragment:dh,aomap_pars_fragment:hh,begin_vertex:ph,beginnormal_vertex:mh,bsdfs:gh,iridescence_fragment:_h,bumpmap_pars_fragment:vh,clipping_planes_fragment:bh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Sh,color_fragment:wh,color_pars_fragment:Mh,color_pars_vertex:Ah,color_vertex:Eh,common:Th,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:Lh,displacementmap_pars_vertex:Ih,displacementmap_vertex:Dh,emissivemap_fragment:Rh,emissivemap_pars_fragment:Ph,encodings_fragment:kh,encodings_pars_fragment:Nh,envmap_fragment:Fh,envmap_common_pars_fragment:Oh,envmap_pars_fragment:Uh,envmap_pars_vertex:zh,envmap_physical_pars_fragment:Jh,envmap_vertex:Bh,fog_vertex:Gh,fog_pars_vertex:Vh,fog_fragment:Hh,fog_pars_fragment:Wh,gradientmap_pars_fragment:jh,lightmap_fragment:qh,lightmap_pars_fragment:Xh,lights_lambert_fragment:Yh,lights_lambert_pars_fragment:Kh,lights_pars_begin:Zh,lights_toon_fragment:Qh,lights_toon_pars_fragment:$h,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:rp,lights_fragment_maps:sp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:up,map_fragment:fp,map_pars_fragment:dp,map_particle_fragment:hp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphcolor_vertex:_p,morphnormal_vertex:vp,morphtarget_pars_vertex:bp,morphtarget_vertex:yp,normal_fragment_begin:xp,normal_fragment_maps:Sp,normal_pars_fragment:wp,normal_pars_vertex:Mp,normal_vertex:Ap,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Ip,output_fragment:Dp,packing:Rp,premultiplied_alpha_fragment:Pp,project_vertex:kp,dithering_fragment:Np,dithering_pars_fragment:Fp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Bp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Vp,skinbase_vertex:Hp,skinning_pars_vertex:Wp,skinning_vertex:jp,skinnormal_vertex:qp,specularmap_fragment:Xp,specularmap_pars_fragment:Yp,tonemapping_fragment:Kp,tonemapping_pars_fragment:Zp,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:$p,uv_pars_vertex:em,uv_vertex:tm,uv2_pars_fragment:nm,uv2_pars_vertex:im,uv2_vertex:rm,worldpos_vertex:sm,background_vert:am,background_frag:om,backgroundCube_vert:lm,backgroundCube_frag:cm,cube_vert:um,cube_frag:fm,depth_vert:dm,depth_frag:hm,distanceRGBA_vert:pm,distanceRGBA_frag:mm,equirect_vert:gm,equirect_frag:_m,linedashed_vert:vm,linedashed_frag:bm,meshbasic_vert:ym,meshbasic_frag:xm,meshlambert_vert:Sm,meshlambert_frag:wm,meshmatcap_vert:Mm,meshmatcap_frag:Am,meshnormal_vert:Em,meshnormal_frag:Tm,meshphong_vert:Cm,meshphong_frag:Lm,meshphysical_vert:Im,meshphysical_frag:Dm,meshtoon_vert:Rm,meshtoon_frag:Pm,points_vert:km,points_frag:Nm,shadow_vert:Fm,shadow_frag:Om,sprite_vert:Um,sprite_frag:zm},Ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new On},uv2Transform:{value:new On},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new On}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new On}}},ei={basic:{uniforms:gn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:gn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:gn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:gn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:gn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:gn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:gn([Ae.points,Ae.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:gn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:gn([Ae.common,Ae.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:gn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:gn([Ae.sprite,Ae.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new On},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:gn([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:gn([Ae.lights,Ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ei.physical={uniforms:gn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Ys={r:0,b:0,g:0};function Bm(r,e,t,n,i,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function g(p,_){let x=!1,S=_.isScene===!0?_.background:null;S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S));const w=r.xr,M=w.getSession&&w.getSession();M&&M.environmentBlendMode==="additive"&&(S=null),S===null?h(a,l):S&&S.isColor&&(h(S,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ga)?(u===void 0&&(u=new cn(new Vr(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Nr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,G,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=S.encoding!==Mt,(f!==S||d!==S.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new cn(new ba(2,2),new Zn({name:"BackgroundMaterial",uniforms:Nr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=S.encoding!==Mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function h(p,_){p.getRGB(Ys,ku(r)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:g}}function Gm(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(U,O,B,J,X){let re=!1;if(o){const ne=h(J,B,O);c!==ne&&(c=ne,m(c.object)),re=_(U,J,B,X),re&&x(U,J,B,X)}else{const ne=O.wireframe===!0;(c.geometry!==J.id||c.program!==B.id||c.wireframe!==ne)&&(c.geometry=J.id,c.program=B.id,c.wireframe=ne,re=!0)}X!==null&&t.update(X,34963),(re||u)&&(u=!1,v(U,O,B,J),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function h(U,O,B){const J=B.wireframe===!0;let X=a[U.id];X===void 0&&(X={},a[U.id]=X);let re=X[O.id];re===void 0&&(re={},X[O.id]=re);let ne=re[J];return ne===void 0&&(ne=p(d()),re[J]=ne),ne}function p(U){const O=[],B=[],J=[];for(let X=0;X<i;X++)O[X]=0,B[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:J,object:U,attributes:{},index:null}}function _(U,O,B,J){const X=c.attributes,re=O.attributes;let ne=0;const R=B.getAttributes();for(const q in R)if(R[q].location>=0){const Q=X[q];let te=re[q];if(te===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),Q===void 0||Q.attribute!==te||te&&Q.data!==te.data)return!0;ne++}return c.attributesNum!==ne||c.index!==J}function x(U,O,B,J){const X={},re=O.attributes;let ne=0;const R=B.getAttributes();for(const q in R)if(R[q].location>=0){let Q=re[q];Q===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor));const te={};te.attribute=Q,Q&&Q.data&&(te.data=Q.data),X[q]=te,ne++}c.attributes=X,c.attributesNum=ne,c.index=J}function S(){const U=c.newAttributes;for(let O=0,B=U.length;O<B;O++)U[O]=0}function w(U){M(U,0)}function M(U,O){const B=c.newAttributes,J=c.enabledAttributes,X=c.attributeDivisors;B[U]=1,J[U]===0&&(r.enableVertexAttribArray(U),J[U]=1),X[U]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,O),X[U]=O)}function C(){const U=c.newAttributes,O=c.enabledAttributes;for(let B=0,J=O.length;B<J;B++)O[B]!==U[B]&&(r.disableVertexAttribArray(B),O[B]=0)}function G(U,O,B,J,X,re){n.isWebGL2===!0&&(B===5124||B===5125)?r.vertexAttribIPointer(U,O,B,X,re):r.vertexAttribPointer(U,O,B,J,X,re)}function v(U,O,B,J){if(n.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const X=J.attributes,re=B.getAttributes(),ne=O.defaultAttributeValues;for(const R in re){const q=re[R];if(q.location>=0){let ie=X[R];if(ie===void 0&&(R==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),R==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){const Q=ie.normalized,te=ie.itemSize,F=t.get(ie);if(F===void 0)continue;const ae=F.buffer,be=F.type,Le=F.bytesPerElement;if(ie.isInterleavedBufferAttribute){const we=ie.data,Qe=we.stride,He=ie.offset;if(we.isInstancedInterleavedBuffer){for(let Ee=0;Ee<q.locationSize;Ee++)M(q.location+Ee,we.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)w(q.location+Ee);r.bindBuffer(34962,ae);for(let Ee=0;Ee<q.locationSize;Ee++)G(q.location+Ee,te/q.locationSize,be,Q,Qe*Le,(He+te/q.locationSize*Ee)*Le)}else{if(ie.isInstancedBufferAttribute){for(let we=0;we<q.locationSize;we++)M(q.location+we,ie.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<q.locationSize;we++)w(q.location+we);r.bindBuffer(34962,ae);for(let we=0;we<q.locationSize;we++)G(q.location+we,te/q.locationSize,be,Q,te*Le,te/q.locationSize*we*Le)}}else if(ne!==void 0){const Q=ne[R];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(q.location,Q);break;case 3:r.vertexAttrib3fv(q.location,Q);break;case 4:r.vertexAttrib4fv(q.location,Q);break;default:r.vertexAttrib1fv(q.location,Q)}}}}C()}function D(){K();for(const U in a){const O=a[U];for(const B in O){const J=O[B];for(const X in J)g(J[X].object),delete J[X];delete O[B]}delete a[U]}}function L(U){if(a[U.id]===void 0)return;const O=a[U.id];for(const B in O){const J=O[B];for(const X in J)g(J[X].object),delete J[X];delete O[B]}delete a[U.id]}function j(U){for(const O in a){const B=a[O];if(B[U.id]===void 0)continue;const J=B[U.id];for(const X in J)g(J[X].object),delete J[X];delete B[U.id]}}function K(){V(),u=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:V,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:j,initAttributes:S,enableAttribute:w,disableUnusedAttributes:C}}function Vm(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Hm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(G){if(G==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),h=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),x=r.getParameter(36349),S=d>0,w=o||e.has("OES_texture_float"),M=S&&w,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:C}}function Wm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Bi,a=new On,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const g=f.length!==0||d||n!==0||i;return i=d,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,m){const g=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,S=x*4;let w=_.clippingState||null;l.value=w,w=u(g,d,S,m);for(let M=0;M!==S;++M)w[M]=t[M];_.clippingState=w,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,g){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,g!==!0||p===null){const _=m+h*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<_)&&(p=new Float32Array(_));for(let S=0,w=m;S!==h;++S,w+=4)o.copy(f[S]).applyMatrix4(x,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function jm(r){let e=new WeakMap;function t(o,a){return a===xo?o.mapping=Dr:a===So&&(o.mapping=Rr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xo||a===So)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rh(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xs extends Uo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=4,Yl=[.125,.215,.35,.446,.526,.582],Vi=20,oo=new xs,Kl=new $e;let lo=null;const Gi=(1+Math.sqrt(5))/2,wr=1/Gi,Zl=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Gi,wr),new H(0,Gi,-wr),new H(wr,0,Gi),new H(-wr,0,Gi),new H(Gi,wr,0),new H(-Gi,wr,0)];class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo),e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:ps,format:Hn,encoding:Ii,depthBuffer:!1},i=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(s)),this._blurMaterial=Xm(s,e,t)}return i}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,i){const a=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Kl),u.toneMapping=ni,u.autoClear=!1;const m=new kr({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),g=new cn(new Vr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Kl),h=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):x===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const S=this._cubeSize;Ks(i,x*S,_>2?S:0,S,S),u.setRenderTarget(i),h&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Dr||e.mapping===Rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ks(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Zl[(i-1)%Zl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new cn(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),h=s/g,p=isFinite(s)?1+Math.floor(u*h):Vi;p>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const _=[];let x=0;for(let G=0;G<Vi;++G){const v=G/h,D=Math.exp(-v*v/2);_.push(D),G===0?x+=D:G<p&&(x+=2*D)}for(let G=0;G<_.length;G++)_[G]=_[G]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const w=this._sizeLods[i],M=3*w*(i>S-Tr?i-S+Tr:0),C=4*(this._cubeSize-w);Ks(t,M,C,3*w,2*w),l.setRenderTarget(t),l.render(f,oo)}}function qm(r){const e=[],t=[],n=[];let i=r;const s=r-Tr+1+Yl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Tr?l=Yl[o-r+Tr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,h=3,p=2,_=1,x=new Float32Array(h*g*m),S=new Float32Array(p*g*m),w=new Float32Array(_*g*m);for(let C=0;C<m;C++){const G=C%3*2/3-1,v=C>2?0:-1,D=[G,v,0,G+2/3,v,0,G+2/3,v+1,0,G,v,0,G+2/3,v+1,0,G,v+1,0];x.set(D,h*g*C),S.set(d,p*g*C);const L=[C,C,C,C,C,C];w.set(L,_*g*C)}const M=new Pn;M.setAttribute("position",new Un(x,h)),M.setAttribute("uv",new Un(S,p)),M.setAttribute("faceIndex",new Un(w,_)),e.push(M),i>Tr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ql(r,e,t){const n=new ii(r,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Xm(r,e,t){const n=new Float32Array(Vi),i=new H(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function $l(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ec(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function Ym(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xo||l===So,u=l===Dr||l===Rr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Jl(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Jl(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Km(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zm(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const m=f.morphAttributes;for(const g in m){const h=m[g];for(let p=0,_=h.length;p<_;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let h=0;if(m!==null){const x=m.array;h=m.version;for(let S=0,w=x.length;S<w;S+=3){const M=x[S+0],C=x[S+1],G=x[S+2];d.push(M,C,C,G,G,M)}}else{const x=g.array;h=g.version;for(let S=0,w=x.length/3-1;S<w;S+=3){const M=S+0,C=S+1,G=S+2;d.push(M,C,C,G,G,M)}}const p=new(Tu(d)?Pu:Ru)(d,1);p.version=h;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Jm(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*l),t.update(m,s,1)}function f(d,m,g){if(g===0)return;let h,p;if(i)h=r,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Qm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $m(r,e){return r[0]-e[0]}function eg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function tg(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==h){let O=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],G=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let D=0;S===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let L=u.attributes.position.count*D,j=1;L>e.maxTextureSize&&(j=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const K=new Float32Array(L*j*4*h),V=new Du(K,L,j,h);V.type=Ei,V.needsUpdate=!0;const U=D*4;for(let B=0;B<h;B++){const J=C[B],X=G[B],re=v[B],ne=L*j*4*B;for(let R=0;R<J.count;R++){const q=R*U;S===!0&&(o.fromBufferAttribute(J,R),K[ne+q+0]=o.x,K[ne+q+1]=o.y,K[ne+q+2]=o.z,K[ne+q+3]=0),w===!0&&(o.fromBufferAttribute(X,R),K[ne+q+4]=o.x,K[ne+q+5]=o.y,K[ne+q+6]=o.z,K[ne+q+7]=0),M===!0&&(o.fromBufferAttribute(re,R),K[ne+q+8]=o.x,K[ne+q+9]=o.y,K[ne+q+10]=o.z,K[ne+q+11]=re.itemSize===4?o.w:1)}}p={count:h,texture:V,size:new Ze(L,j)},s.set(u,p),u.addEventListener("dispose",O)}let _=0;for(let S=0;S<m.length;S++)_+=m[S];const x=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==g){h=[];for(let w=0;w<g;w++)h[w]=[w,0];n[u.id]=h}for(let w=0;w<g;w++){const M=h[w];M[0]=w,M[1]=m[w]}h.sort(eg);for(let w=0;w<8;w++)w<g&&h[w][1]?(a[w][0]=h[w][0],a[w][1]=h[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort($m);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const M=a[w],C=M[0],G=M[1];C!==Number.MAX_SAFE_INTEGER&&G?(p&&u.getAttribute("morphTarget"+w)!==p[C]&&u.setAttribute("morphTarget"+w,p[C]),_&&u.getAttribute("morphNormal"+w)!==_[C]&&u.setAttribute("morphNormal"+w,_[C]),i[w]=G,x+=G):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),_&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),i[w]=0)}const S=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function ng(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Uu=new yn,zu=new Du,Bu=new Hd,Gu=new Fu,tc=[],nc=[],ic=new Float32Array(16),rc=new Float32Array(9),sc=new Float32Array(4);function Hr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=tc[i];if(s===void 0&&(s=new Float32Array(i),tc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ya(r,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ig(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function og(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;sc.set(n),r.uniformMatrix2fv(this.addr,!1,sc),Jt(t,n)}}function lg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;rc.set(n),r.uniformMatrix3fv(this.addr,!1,rc),Jt(t,n)}}function cg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;ic.set(n),r.uniformMatrix4fv(this.addr,!1,ic),Jt(t,n)}}function ug(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function pg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function _g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function vg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Uu,i)}function bg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bu,i)}function yg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gu,i)}function xg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zu,i)}function Sg(r){switch(r){case 5126:return ig;case 35664:return rg;case 35665:return sg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return hg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return xg}}function wg(r,e){r.uniform1fv(this.addr,e)}function Mg(r,e){const t=Hr(e,this.size,2);r.uniform2fv(this.addr,t)}function Ag(r,e){const t=Hr(e,this.size,3);r.uniform3fv(this.addr,t)}function Eg(r,e){const t=Hr(e,this.size,4);r.uniform4fv(this.addr,t)}function Tg(r,e){const t=Hr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Cg(r,e){const t=Hr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Lg(r,e){const t=Hr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ig(r,e){r.uniform1iv(this.addr,e)}function Dg(r,e){r.uniform2iv(this.addr,e)}function Rg(r,e){r.uniform3iv(this.addr,e)}function Pg(r,e){r.uniform4iv(this.addr,e)}function kg(r,e){r.uniform1uiv(this.addr,e)}function Ng(r,e){r.uniform2uiv(this.addr,e)}function Fg(r,e){r.uniform3uiv(this.addr,e)}function Og(r,e){r.uniform4uiv(this.addr,e)}function Ug(r,e,t){const n=this.cache,i=e.length,s=ya(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Uu,s[o])}function zg(r,e,t){const n=this.cache,i=e.length,s=ya(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bu,s[o])}function Bg(r,e,t){const n=this.cache,i=e.length,s=ya(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Gu,s[o])}function Gg(r,e,t){const n=this.cache,i=e.length,s=ya(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zu,s[o])}function Vg(r){switch(r){case 5126:return wg;case 35664:return Mg;case 35665:return Ag;case 35666:return Eg;case 35674:return Tg;case 35675:return Cg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return kg;case 36294:return Ng;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Sg(t.type)}}class Wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Vg(t.type)}}class jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const co=/(\w+)(\])?(\[|\.)?/g;function ac(r,e){r.seq.push(e),r.map[e.id]=e}function qg(r,e,t){const n=r.name,i=n.length;for(co.lastIndex=0;;){const s=co.exec(n),o=co.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ac(t,c===void 0?new Hg(a,r,e):new Wg(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new jg(a),ac(t,f)),t=f}}}class ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);qg(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function oc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Xg=0;function Yg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Kg(r){switch(r){case Ii:return["Linear","( value )"];case Mt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function lc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Yg(r.getShaderSource(e),o)}else return i}function Zg(r,e){const t=Kg(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Jg(r,e){let t;switch(e){case rd:t="Linear";break;case sd:t="Reinhard";break;case ad:t="OptimizedCineon";break;case wu:t="ACESFilmic";break;case od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function $g(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e_(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ls(r){return r!==""}function cc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(r){return r.replace(t_,n_)}function n_(r,e){const t=rt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Eo(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(r){return r.replace(i_,r_)}function r_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===as&&(e="SHADOWMAP_TYPE_VSM"),e}function a_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Dr:case Rr:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function l_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ma:e="ENVMAP_BLENDING_MULTIPLY";break;case nd:e="ENVMAP_BLENDING_MIX";break;case id:e="ENVMAP_BLENDING_ADD";break}return e}function c_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function u_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=s_(t),c=a_(t),u=o_(t),f=l_(t),d=c_(t),m=t.isWebGL2?"":Qg(t),g=$g(s),h=i.createProgram();let p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(ls).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(ls).join(`
`),_.length>0&&(_+=`
`)):(p=[dc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),_=[m,dc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?rt.tonemapping_pars_fragment:"",t.toneMapping!==ni?Jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.encodings_pars_fragment,Zg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),o=Eo(o),o=cc(o,t),o=uc(o,t),a=Eo(a),a=cc(a,t),a=uc(a,t),o=fc(o),a=fc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=x+p+o,w=x+_+a,M=oc(i,35633,S),C=oc(i,35632,w);if(i.attachShader(h,M),i.attachShader(h,C),t.index0AttributeName!==void 0?i.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),r.debug.checkShaderErrors){const D=i.getProgramInfoLog(h).trim(),L=i.getShaderInfoLog(M).trim(),j=i.getShaderInfoLog(C).trim();let K=!0,V=!0;if(i.getProgramParameter(h,35714)===!1){K=!1;const U=lc(i,M,"vertex"),O=lc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+D+`
`+U+`
`+O)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||j==="")&&(V=!1);V&&(this.diagnostics={runnable:K,programLog:D,vertexShader:{log:L,prefix:p},fragmentShader:{log:j,prefix:_}})}i.deleteShader(M),i.deleteShader(C);let G;this.getUniforms=function(){return G===void 0&&(G=new ia(i,h)),G};let v;return this.getAttributes=function(){return v===void 0&&(v=e_(i,h)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=C,this}let f_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new h_(e),t.set(e,n)),n}}class h_{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}}function p_(r,e,t,n,i,s,o){const a=new Oo,l=new d_,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v,D,L,j,K){const V=j.fog,U=K.geometry,O=v.isMeshStandardMaterial?j.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||O),J=B&&B.mapping===ga?B.image.height:null,X=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const re=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ne=re!==void 0?re.length:0;let R=0;U.morphAttributes.position!==void 0&&(R=1),U.morphAttributes.normal!==void 0&&(R=2),U.morphAttributes.color!==void 0&&(R=3);let q,ie,Q,te;if(X){const Qe=ei[X];q=Qe.vertexShader,ie=Qe.fragmentShader}else q=v.vertexShader,ie=v.fragmentShader,l.update(v),Q=l.getVertexShaderID(v),te=l.getFragmentShaderID(v);const F=r.getRenderTarget(),ae=v.alphaTest>0,be=v.clearcoat>0,Le=v.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:v.type,vertexShader:q,fragmentShader:ie,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:F===null?r.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:Ii,map:!!v.map,matcap:!!v.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:J,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Td,tangentSpaceNormalMap:v.normalMapType===ko,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Mt,clearcoat:be,clearcoatMap:be&&!!v.clearcoatMap,clearcoatRoughnessMap:be&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!v.clearcoatNormalMap,iridescence:Le,iridescenceMap:Le&&!!v.iridescenceMap,iridescenceThicknessMap:Le&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Cr,alphaMap:!!v.alphaMap,alphaTest:ae,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!U.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!V,useFog:v.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:R,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:ni,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pa,flipSided:v.side===jn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const D=[];if(v.shaderID?D.push(v.shaderID):(D.push(v.customVertexShaderID),D.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)D.push(L),D.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(D,v),x(D,v),D.push(r.outputEncoding)),D.push(v.customProgramCacheKey),D.join()}function _(v,D){v.push(D.precision),v.push(D.outputEncoding),v.push(D.envMapMode),v.push(D.envMapCubeUVHeight),v.push(D.combine),v.push(D.vertexUvs),v.push(D.fogExp2),v.push(D.sizeAttenuation),v.push(D.morphTargetsCount),v.push(D.morphAttributeCount),v.push(D.numDirLights),v.push(D.numPointLights),v.push(D.numSpotLights),v.push(D.numSpotLightMaps),v.push(D.numHemiLights),v.push(D.numRectAreaLights),v.push(D.numDirLightShadows),v.push(D.numPointLightShadows),v.push(D.numSpotLightShadows),v.push(D.numSpotLightShadowsWithMaps),v.push(D.shadowMapType),v.push(D.toneMapping),v.push(D.numClippingPlanes),v.push(D.numClipIntersection),v.push(D.depthPacking)}function x(v,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.map&&a.enable(4),D.matcap&&a.enable(5),D.envMap&&a.enable(6),D.lightMap&&a.enable(7),D.aoMap&&a.enable(8),D.emissiveMap&&a.enable(9),D.bumpMap&&a.enable(10),D.normalMap&&a.enable(11),D.objectSpaceNormalMap&&a.enable(12),D.tangentSpaceNormalMap&&a.enable(13),D.clearcoat&&a.enable(14),D.clearcoatMap&&a.enable(15),D.clearcoatRoughnessMap&&a.enable(16),D.clearcoatNormalMap&&a.enable(17),D.iridescence&&a.enable(18),D.iridescenceMap&&a.enable(19),D.iridescenceThicknessMap&&a.enable(20),D.displacementMap&&a.enable(21),D.specularMap&&a.enable(22),D.roughnessMap&&a.enable(23),D.metalnessMap&&a.enable(24),D.gradientMap&&a.enable(25),D.alphaMap&&a.enable(26),D.alphaTest&&a.enable(27),D.vertexColors&&a.enable(28),D.vertexAlphas&&a.enable(29),D.vertexUvs&&a.enable(30),D.vertexTangents&&a.enable(31),D.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.physicallyCorrectLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.specularIntensityMap&&a.enable(15),D.specularColorMap&&a.enable(16),D.transmission&&a.enable(17),D.transmissionMap&&a.enable(18),D.thicknessMap&&a.enable(19),D.sheen&&a.enable(20),D.sheenColorMap&&a.enable(21),D.sheenRoughnessMap&&a.enable(22),D.decodeVideoTexture&&a.enable(23),D.opaque&&a.enable(24),v.push(a.mask)}function S(v){const D=g[v.type];let L;if(D){const j=ei[D];L=Nu.clone(j.uniforms)}else L=v.uniforms;return L}function w(v,D){let L;for(let j=0,K=c.length;j<K;j++){const V=c[j];if(V.cacheKey===D){L=V,++L.usedTimes;break}}return L===void 0&&(L=new u_(r,D,v,s),c.push(L)),L}function M(v){if(--v.usedTimes===0){const D=c.indexOf(v);c[D]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function G(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:G}}function m_(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function g_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function hc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,g,h,p){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:h,group:p},r[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=h,_.group=p),e++,_}function a(f,d,m,g,h,p){const _=o(f,d,m,g,h,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,d,m,g,h,p){const _=o(f,d,m,g,h,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,d){t.length>1&&t.sort(f||g_),n.length>1&&n.sort(d||hc),i.length>1&&i.sort(d||hc)}function u(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function __(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new pc,r.set(n,[o])):i>=s.length?(o=new pc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function v_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function b_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let y_=0;function x_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function S_(r,e){const t=new v_,n=b_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new H);const s=new H,o=new tt,a=new tt;function l(u,f){let d=0,m=0,g=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let h=0,p=0,_=0,x=0,S=0,w=0,M=0,C=0,G=0,v=0;u.sort(x_);const D=f!==!0?Math.PI:1;for(let j=0,K=u.length;j<K;j++){const V=u[j],U=V.color,O=V.intensity,B=V.distance,J=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)d+=U.r*O*D,m+=U.g*O*D,g+=U.b*O*D;else if(V.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(V.sh.coefficients[X],O);else if(V.isDirectionalLight){const X=t.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity*D),V.castShadow){const re=V.shadow,ne=n.get(V);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,i.directionalShadow[h]=ne,i.directionalShadowMap[h]=J,i.directionalShadowMatrix[h]=V.shadow.matrix,w++}i.directional[h]=X,h++}else if(V.isSpotLight){const X=t.get(V);X.position.setFromMatrixPosition(V.matrixWorld),X.color.copy(U).multiplyScalar(O*D),X.distance=B,X.coneCos=Math.cos(V.angle),X.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),X.decay=V.decay,i.spot[_]=X;const re=V.shadow;if(V.map&&(i.spotLightMap[G]=V.map,G++,re.updateMatrices(V),V.castShadow&&v++),i.spotLightMatrix[_]=re.matrix,V.castShadow){const ne=n.get(V);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,i.spotShadow[_]=ne,i.spotShadowMap[_]=J,C++}_++}else if(V.isRectAreaLight){const X=t.get(V);X.color.copy(U).multiplyScalar(O),X.halfWidth.set(V.width*.5,0,0),X.halfHeight.set(0,V.height*.5,0),i.rectArea[x]=X,x++}else if(V.isPointLight){const X=t.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity*D),X.distance=V.distance,X.decay=V.decay,V.castShadow){const re=V.shadow,ne=n.get(V);ne.shadowBias=re.bias,ne.shadowNormalBias=re.normalBias,ne.shadowRadius=re.radius,ne.shadowMapSize=re.mapSize,ne.shadowCameraNear=re.camera.near,ne.shadowCameraFar=re.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=V.shadow.matrix,M++}i.point[p]=X,p++}else if(V.isHemisphereLight){const X=t.get(V);X.skyColor.copy(V.color).multiplyScalar(O*D),X.groundColor.copy(V.groundColor).multiplyScalar(O*D),i.hemi[S]=X,S++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==x||L.hemiLength!==S||L.numDirectionalShadows!==w||L.numPointShadows!==M||L.numSpotShadows!==C||L.numSpotMaps!==G)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=x,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+G-v,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=v,L.directionalLength=h,L.pointLength=p,L.spotLength=_,L.rectAreaLength=x,L.hemiLength=S,L.numDirectionalShadows=w,L.numPointShadows=M,L.numSpotShadows=C,L.numSpotMaps=G,i.version=y_++)}function c(u,f){let d=0,m=0,g=0,h=0,p=0;const _=f.matrixWorldInverse;for(let x=0,S=u.length;x<S;x++){const w=u[x];if(w.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),d++}else if(w.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const M=i.rectArea[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(w.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(w.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function mc(r,e){const t=new S_(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function w_(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new mc(r,e),t.set(s,[l])):o>=a.length?(l=new mc(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Vu extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M_ extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`;function T_(r,e,t){let n=new va;const i=new Ze,s=new Ze,o=new Ct,a=new Vu({depthPacking:Ed}),l=new M_,c={},u=t.maxTextureSize,f={0:jn,1:Li,2:pa},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:A_,fragmentShader:E_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new cn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu,this.render=function(w,M,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const G=r.getRenderTarget(),v=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Ti),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let j=0,K=w.length;j<K;j++){const V=w[j],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const O=U.getFrameExtents();if(i.multiply(O),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/O.x),i.x=s.x*O.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/O.y),i.y=s.y*O.y,U.mapSize.y=s.y)),U.map===null){const J=this.type!==as?{minFilter:nn,magFilter:nn}:{};U.map=new ii(i.x,i.y,J),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const B=U.getViewportCount();for(let J=0;J<B;J++){const X=U.getViewport(J);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),L.viewport(o),U.updateMatrices(V,J),n=U.getFrustum(),S(M,C,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===as&&_(U,C),U.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(G,v,D)};function _(w,M){const C=e.update(h);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ii(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(M,null,C,d,h,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(M,null,C,m,h,null)}function x(w,M,C,G,v,D){let L=null;const j=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(j!==void 0)L=j;else if(L=C.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const K=L.uuid,V=M.uuid;let U=c[K];U===void 0&&(U={},c[K]=U);let O=U[V];O===void 0&&(O=L.clone(),U[V]=O),L=O}return L.visible=M.visible,L.wireframe=M.wireframe,D===as?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:f[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,C.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(C.matrixWorld),L.nearDistance=G,L.farDistance=v),L}function S(w,M,C,G,v){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===as)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const j=e.update(w),K=w.material;if(Array.isArray(K)){const V=j.groups;for(let U=0,O=V.length;U<O;U++){const B=V[U],J=K[B.materialIndex];if(J&&J.visible){const X=x(w,J,G,C.near,C.far,v);r.renderBufferDirect(C,null,j,X,w,B)}}}else if(K.visible){const V=x(w,K,G,C.near,C.far,v);r.renderBufferDirect(C,null,j,V,w,null)}}const L=w.children;for(let j=0,K=L.length;j<K;j++)S(L[j],M,C,G,v)}}function C_(r,e,t){const n=t.isWebGL2;function i(){let W=!1;const le=new Ct;let ve=null;const Ce=new Ct(0,0,0,0);return{setMask:function(Ve){ve!==Ve&&!W&&(r.colorMask(Ve,Ve,Ve,Ve),ve=Ve)},setLocked:function(Ve){W=Ve},setClear:function(Ve,gt,Wt,Xt,ai){ai===!0&&(Ve*=Xt,gt*=Xt,Wt*=Xt),le.set(Ve,gt,Wt,Xt),Ce.equals(le)===!1&&(r.clearColor(Ve,gt,Wt,Xt),Ce.copy(le))},reset:function(){W=!1,ve=null,Ce.set(-1,0,0,0)}}}function s(){let W=!1,le=null,ve=null,Ce=null;return{setTest:function(Ve){Ve?ae(2929):be(2929)},setMask:function(Ve){le!==Ve&&!W&&(r.depthMask(Ve),le=Ve)},setFunc:function(Ve){if(ve!==Ve){switch(Ve){case Kf:r.depthFunc(512);break;case Zf:r.depthFunc(519);break;case Jf:r.depthFunc(513);break;case yo:r.depthFunc(515);break;case Qf:r.depthFunc(514);break;case $f:r.depthFunc(518);break;case ed:r.depthFunc(516);break;case td:r.depthFunc(517);break;default:r.depthFunc(515)}ve=Ve}},setLocked:function(Ve){W=Ve},setClear:function(Ve){Ce!==Ve&&(r.clearDepth(Ve),Ce=Ve)},reset:function(){W=!1,le=null,ve=null,Ce=null}}}function o(){let W=!1,le=null,ve=null,Ce=null,Ve=null,gt=null,Wt=null,Xt=null,ai=null;return{setTest:function(ut){W||(ut?ae(2960):be(2960))},setMask:function(ut){le!==ut&&!W&&(r.stencilMask(ut),le=ut)},setFunc:function(ut,zn,En){(ve!==ut||Ce!==zn||Ve!==En)&&(r.stencilFunc(ut,zn,En),ve=ut,Ce=zn,Ve=En)},setOp:function(ut,zn,En){(gt!==ut||Wt!==zn||Xt!==En)&&(r.stencilOp(ut,zn,En),gt=ut,Wt=zn,Xt=En)},setLocked:function(ut){W=ut},setClear:function(ut){ai!==ut&&(r.clearStencil(ut),ai=ut)},reset:function(){W=!1,le=null,ve=null,Ce=null,Ve=null,gt=null,Wt=null,Xt=null,ai=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,h=[],p=null,_=!1,x=null,S=null,w=null,M=null,C=null,G=null,v=null,D=!1,L=null,j=null,K=null,V=null,U=null;const O=r.getParameter(35661);let B=!1,J=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=J>=2);let re=null,ne={};const R=r.getParameter(3088),q=r.getParameter(2978),ie=new Ct().fromArray(R),Q=new Ct().fromArray(q);function te(W,le,ve){const Ce=new Uint8Array(4),Ve=r.createTexture();r.bindTexture(W,Ve),r.texParameteri(W,10241,9728),r.texParameteri(W,10240,9728);for(let gt=0;gt<ve;gt++)r.texImage2D(le+gt,0,6408,1,1,0,6408,5121,Ce);return Ve}const F={};F[3553]=te(3553,3553,1),F[34067]=te(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ae(2929),l.setFunc(yo),ee(!1),We(rl),ae(2884),Lt(Ti);function ae(W){d[W]!==!0&&(r.enable(W),d[W]=!0)}function be(W){d[W]!==!1&&(r.disable(W),d[W]=!1)}function Le(W,le){return m[W]!==le?(r.bindFramebuffer(W,le),m[W]=le,n&&(W===36009&&(m[36160]=le),W===36160&&(m[36009]=le)),!0):!1}function we(W,le){let ve=h,Ce=!1;if(W)if(ve=g.get(le),ve===void 0&&(ve=[],g.set(le,ve)),W.isWebGLMultipleRenderTargets){const Ve=W.texture;if(ve.length!==Ve.length||ve[0]!==36064){for(let gt=0,Wt=Ve.length;gt<Wt;gt++)ve[gt]=36064+gt;ve.length=Ve.length,Ce=!0}}else ve[0]!==36064&&(ve[0]=36064,Ce=!0);else ve[0]!==1029&&(ve[0]=1029,Ce=!0);Ce&&(t.isWebGL2?r.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Qe(W){return p!==W?(r.useProgram(W),p=W,!0):!1}const He={[Er]:32774,[Uf]:32778,[zf]:32779};if(n)He[ll]=32775,He[cl]=32776;else{const W=e.get("EXT_blend_minmax");W!==null&&(He[ll]=W.MIN_EXT,He[cl]=W.MAX_EXT)}const Ee={[Bf]:0,[Gf]:1,[Vf]:768,[xu]:770,[Yf]:776,[qf]:774,[Wf]:772,[Hf]:769,[Su]:771,[Xf]:775,[jf]:773};function Lt(W,le,ve,Ce,Ve,gt,Wt,Xt){if(W===Ti){_===!0&&(be(3042),_=!1);return}if(_===!1&&(ae(3042),_=!0),W!==Of){if(W!==x||Xt!==D){if((S!==Er||C!==Er)&&(r.blendEquation(32774),S=Er,C=Er),Xt)switch(W){case Cr:r.blendFuncSeparate(1,771,1,771);break;case sl:r.blendFunc(1,1);break;case al:r.blendFuncSeparate(0,769,0,1);break;case ol:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Cr:r.blendFuncSeparate(770,771,1,771);break;case sl:r.blendFunc(770,1);break;case al:r.blendFuncSeparate(0,769,0,1);break;case ol:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}w=null,M=null,G=null,v=null,x=W,D=Xt}return}Ve=Ve||le,gt=gt||ve,Wt=Wt||Ce,(le!==S||Ve!==C)&&(r.blendEquationSeparate(He[le],He[Ve]),S=le,C=Ve),(ve!==w||Ce!==M||gt!==G||Wt!==v)&&(r.blendFuncSeparate(Ee[ve],Ee[Ce],Ee[gt],Ee[Wt]),w=ve,M=Ce,G=gt,v=Wt),x=W,D=!1}function de(W,le){W.side===pa?be(2884):ae(2884);let ve=W.side===jn;le&&(ve=!ve),ee(ve),W.blending===Cr&&W.transparent===!1?Lt(Ti):Lt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);const Ce=W.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),lt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ae(32926):be(32926)}function ee(W){L!==W&&(W?r.frontFace(2304):r.frontFace(2305),L=W)}function We(W){W!==Nf?(ae(2884),W!==j&&(W===rl?r.cullFace(1029):W===Ff?r.cullFace(1028):r.cullFace(1032))):be(2884),j=W}function bt(W){W!==K&&(B&&r.lineWidth(W),K=W)}function lt(W,le,ve){W?(ae(32823),(V!==le||U!==ve)&&(r.polygonOffset(le,ve),V=le,U=ve)):be(32823)}function Gt(W){W?ae(3089):be(3089)}function Ot(W){W===void 0&&(W=33984+O-1),re!==W&&(r.activeTexture(W),re=W)}function N(W,le,ve){ve===void 0&&(re===null?ve=33984+O-1:ve=re);let Ce=ne[ve];Ce===void 0&&(Ce={type:void 0,texture:void 0},ne[ve]=Ce),(Ce.type!==W||Ce.texture!==le)&&(re!==ve&&(r.activeTexture(ve),re=ve),r.bindTexture(W,le||F[W]),Ce.type=W,Ce.texture=le)}function I(){const W=ne[re];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function se(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function z(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function k(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function oe(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(W){ie.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ie.copy(W))}function Fe(W){Q.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function st(W,le){let ve=f.get(le);ve===void 0&&(ve=new WeakMap,f.set(le,ve));let Ce=ve.get(W);Ce===void 0&&(Ce=r.getUniformBlockIndex(le,W.name),ve.set(W,Ce))}function ct(W,le){const Ce=f.get(le).get(W);u.get(le)!==Ce&&(r.uniformBlockBinding(le,Ce,W.__bindingPointIndex),u.set(le,Ce))}function yt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},re=null,ne={},m={},g=new WeakMap,h=[],p=null,_=!1,x=null,S=null,w=null,M=null,C=null,G=null,v=null,D=!1,L=null,j=null,K=null,V=null,U=null,ie.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ae,disable:be,bindFramebuffer:Le,drawBuffers:we,useProgram:Qe,setBlending:Lt,setMaterial:de,setFlipSided:ee,setCullFace:We,setLineWidth:bt,setPolygonOffset:lt,setScissorTest:Gt,activeTexture:Ot,bindTexture:N,unbindTexture:I,compressedTexImage2D:se,compressedTexImage3D:ye,texImage2D:ce,texImage3D:_e,updateUBOMapping:st,uniformBlockBinding:ct,texStorage2D:k,texStorage3D:oe,texSubImage2D:xe,texSubImage3D:Me,compressedTexSubImage2D:ze,compressedTexSubImage3D:z,scissor:De,viewport:Fe,reset:yt}}function L_(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,I){return _?new OffscreenCanvas(N,I):_s("canvas")}function S(N,I,se,ye){let xe=1;if((N.width>ye||N.height>ye)&&(xe=ye/Math.max(N.width,N.height)),xe<1||I===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Me=I?la:Math.floor,ze=Me(xe*N.width),z=Me(xe*N.height);h===void 0&&(h=x(ze,z));const k=se?x(ze,z):h;return k.width=ze,k.height=z,k.getContext("2d").drawImage(N,0,0,ze,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+ze+"x"+z+")."),k}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function w(N){return Ao(N.width)&&Ao(N.height)}function M(N){return a?!1:N.wrapS!==bn||N.wrapT!==bn||N.minFilter!==nn&&N.minFilter!==_n}function C(N,I){return N.generateMipmaps&&I&&N.minFilter!==nn&&N.minFilter!==_n}function G(N){r.generateMipmap(N)}function v(N,I,se,ye,xe=!1){if(a===!1)return I;if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Me=I;return I===6403&&(se===5126&&(Me=33326),se===5131&&(Me=33325),se===5121&&(Me=33321)),I===33319&&(se===5126&&(Me=33328),se===5131&&(Me=33327),se===5121&&(Me=33323)),I===6408&&(se===5126&&(Me=34836),se===5131&&(Me=34842),se===5121&&(Me=ye===Mt&&xe===!1?35907:32856),se===32819&&(Me=32854),se===32820&&(Me=32855)),(Me===33325||Me===33326||Me===33327||Me===33328||Me===34842||Me===34836)&&e.get("EXT_color_buffer_float"),Me}function D(N,I,se){return C(N,se)===!0||N.isFramebufferTexture&&N.minFilter!==nn&&N.minFilter!==_n?Math.log2(Math.max(I.width,I.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?I.mipmaps.length:1}function L(N){return N===nn||N===ul||N===ka?9728:9729}function j(N){const I=N.target;I.removeEventListener("dispose",j),V(I),I.isVideoTexture&&g.delete(I)}function K(N){const I=N.target;I.removeEventListener("dispose",K),O(I)}function V(N){const I=n.get(N);if(I.__webglInit===void 0)return;const se=N.source,ye=p.get(se);if(ye){const xe=ye[I.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&U(N),Object.keys(ye).length===0&&p.delete(se)}n.remove(N)}function U(N){const I=n.get(N);r.deleteTexture(I.__webglTexture);const se=N.source,ye=p.get(se);delete ye[I.__cacheKey],o.memory.textures--}function O(N){const I=N.texture,se=n.get(N),ye=n.get(I);if(ye.__webglTexture!==void 0&&(r.deleteTexture(ye.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)r.deleteFramebuffer(se.__webglFramebuffer[xe]),se.__webglDepthbuffer&&r.deleteRenderbuffer(se.__webglDepthbuffer[xe]);else{if(r.deleteFramebuffer(se.__webglFramebuffer),se.__webglDepthbuffer&&r.deleteRenderbuffer(se.__webglDepthbuffer),se.__webglMultisampledFramebuffer&&r.deleteFramebuffer(se.__webglMultisampledFramebuffer),se.__webglColorRenderbuffer)for(let xe=0;xe<se.__webglColorRenderbuffer.length;xe++)se.__webglColorRenderbuffer[xe]&&r.deleteRenderbuffer(se.__webglColorRenderbuffer[xe]);se.__webglDepthRenderbuffer&&r.deleteRenderbuffer(se.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let xe=0,Me=I.length;xe<Me;xe++){const ze=n.get(I[xe]);ze.__webglTexture&&(r.deleteTexture(ze.__webglTexture),o.memory.textures--),n.remove(I[xe])}n.remove(I),n.remove(N)}let B=0;function J(){B=0}function X(){const N=B;return N>=l&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l),B+=1,N}function re(N){const I=[];return I.push(N.wrapS),I.push(N.wrapT),I.push(N.wrapR||0),I.push(N.magFilter),I.push(N.minFilter),I.push(N.anisotropy),I.push(N.internalFormat),I.push(N.format),I.push(N.type),I.push(N.generateMipmaps),I.push(N.premultiplyAlpha),I.push(N.flipY),I.push(N.unpackAlignment),I.push(N.encoding),I.join()}function ne(N,I){const se=n.get(N);if(N.isVideoTexture&&Gt(N),N.isRenderTargetTexture===!1&&N.version>0&&se.__version!==N.version){const ye=N.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(se,N,I);return}}t.bindTexture(3553,se.__webglTexture,33984+I)}function R(N,I){const se=n.get(N);if(N.version>0&&se.__version!==N.version){be(se,N,I);return}t.bindTexture(35866,se.__webglTexture,33984+I)}function q(N,I){const se=n.get(N);if(N.version>0&&se.__version!==N.version){be(se,N,I);return}t.bindTexture(32879,se.__webglTexture,33984+I)}function ie(N,I){const se=n.get(N);if(N.version>0&&se.__version!==N.version){Le(se,N,I);return}t.bindTexture(34067,se.__webglTexture,33984+I)}const Q={[Hi]:10497,[bn]:33071,[wo]:33648},te={[nn]:9728,[ul]:9984,[ka]:9986,[_n]:9729,[ld]:9985,[Yi]:9987};function F(N,I,se){if(se?(r.texParameteri(N,10242,Q[I.wrapS]),r.texParameteri(N,10243,Q[I.wrapT]),(N===32879||N===35866)&&r.texParameteri(N,32882,Q[I.wrapR]),r.texParameteri(N,10240,te[I.magFilter]),r.texParameteri(N,10241,te[I.minFilter])):(r.texParameteri(N,10242,33071),r.texParameteri(N,10243,33071),(N===32879||N===35866)&&r.texParameteri(N,32882,33071),(I.wrapS!==bn||I.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(N,10240,L(I.magFilter)),r.texParameteri(N,10241,L(I.minFilter)),I.minFilter!==nn&&I.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(I.magFilter===nn||I.minFilter!==ka&&I.minFilter!==Yi||I.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&I.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(r.texParameterf(N,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function ae(N,I){let se=!1;N.__webglInit===void 0&&(N.__webglInit=!0,I.addEventListener("dispose",j));const ye=I.source;let xe=p.get(ye);xe===void 0&&(xe={},p.set(ye,xe));const Me=re(I);if(Me!==N.__cacheKey){xe[Me]===void 0&&(xe[Me]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,se=!0),xe[Me].usedTimes++;const ze=xe[N.__cacheKey];ze!==void 0&&(xe[N.__cacheKey].usedTimes--,ze.usedTimes===0&&U(I)),N.__cacheKey=Me,N.__webglTexture=xe[Me].texture}return se}function be(N,I,se){let ye=3553;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ye=35866),I.isData3DTexture&&(ye=32879);const xe=ae(N,I),Me=I.source;t.bindTexture(ye,N.__webglTexture,33984+se);const ze=n.get(Me);if(Me.version!==ze.__version||xe===!0){t.activeTexture(33984+se),r.pixelStorei(37440,I.flipY),r.pixelStorei(37441,I.premultiplyAlpha),r.pixelStorei(3317,I.unpackAlignment),r.pixelStorei(37443,0);const z=M(I)&&w(I.image)===!1;let k=S(I.image,z,!1,u);k=Ot(I,k);const oe=w(k)||a,ce=s.convert(I.format,I.encoding);let _e=s.convert(I.type),De=v(I.internalFormat,ce,_e,I.encoding,I.isVideoTexture);F(ye,I,oe);let Fe;const st=I.mipmaps,ct=a&&I.isVideoTexture!==!0,yt=ze.__version===void 0||xe===!0,W=D(I,k,oe);if(I.isDepthTexture)De=6402,a?I.type===Ei?De=36012:I.type===Wi?De=33190:I.type===Lr?De=35056:De=33189:I.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===ji&&De===6402&&I.type!==Au&&I.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Wi,_e=s.convert(I.type)),I.format===Pr&&De===6402&&(De=34041,I.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=Lr,_e=s.convert(I.type))),yt&&(ct?t.texStorage2D(3553,1,De,k.width,k.height):t.texImage2D(3553,0,De,k.width,k.height,0,ce,_e,null));else if(I.isDataTexture)if(st.length>0&&oe){ct&&yt&&t.texStorage2D(3553,W,De,st[0].width,st[0].height);for(let le=0,ve=st.length;le<ve;le++)Fe=st[le],ct?t.texSubImage2D(3553,le,0,0,Fe.width,Fe.height,ce,_e,Fe.data):t.texImage2D(3553,le,De,Fe.width,Fe.height,0,ce,_e,Fe.data);I.generateMipmaps=!1}else ct?(yt&&t.texStorage2D(3553,W,De,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,ce,_e,k.data)):t.texImage2D(3553,0,De,k.width,k.height,0,ce,_e,k.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ct&&yt&&t.texStorage3D(35866,W,De,st[0].width,st[0].height,k.depth);for(let le=0,ve=st.length;le<ve;le++)Fe=st[le],I.format!==Hn?ce!==null?ct?t.compressedTexSubImage3D(35866,le,0,0,0,Fe.width,Fe.height,k.depth,ce,Fe.data,0,0):t.compressedTexImage3D(35866,le,De,Fe.width,Fe.height,k.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(35866,le,0,0,0,Fe.width,Fe.height,k.depth,ce,_e,Fe.data):t.texImage3D(35866,le,De,Fe.width,Fe.height,k.depth,0,ce,_e,Fe.data)}else{ct&&yt&&t.texStorage2D(3553,W,De,st[0].width,st[0].height);for(let le=0,ve=st.length;le<ve;le++)Fe=st[le],I.format!==Hn?ce!==null?ct?t.compressedTexSubImage2D(3553,le,0,0,Fe.width,Fe.height,ce,Fe.data):t.compressedTexImage2D(3553,le,De,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(3553,le,0,0,Fe.width,Fe.height,ce,_e,Fe.data):t.texImage2D(3553,le,De,Fe.width,Fe.height,0,ce,_e,Fe.data)}else if(I.isDataArrayTexture)ct?(yt&&t.texStorage3D(35866,W,De,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,ce,_e,k.data)):t.texImage3D(35866,0,De,k.width,k.height,k.depth,0,ce,_e,k.data);else if(I.isData3DTexture)ct?(yt&&t.texStorage3D(32879,W,De,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,ce,_e,k.data)):t.texImage3D(32879,0,De,k.width,k.height,k.depth,0,ce,_e,k.data);else if(I.isFramebufferTexture){if(yt)if(ct)t.texStorage2D(3553,W,De,k.width,k.height);else{let le=k.width,ve=k.height;for(let Ce=0;Ce<W;Ce++)t.texImage2D(3553,Ce,De,le,ve,0,ce,_e,null),le>>=1,ve>>=1}}else if(st.length>0&&oe){ct&&yt&&t.texStorage2D(3553,W,De,st[0].width,st[0].height);for(let le=0,ve=st.length;le<ve;le++)Fe=st[le],ct?t.texSubImage2D(3553,le,0,0,ce,_e,Fe):t.texImage2D(3553,le,De,ce,_e,Fe);I.generateMipmaps=!1}else ct?(yt&&t.texStorage2D(3553,W,De,k.width,k.height),t.texSubImage2D(3553,0,0,0,ce,_e,k)):t.texImage2D(3553,0,De,ce,_e,k);C(I,oe)&&G(ye),ze.__version=Me.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function Le(N,I,se){if(I.image.length!==6)return;const ye=ae(N,I),xe=I.source;t.bindTexture(34067,N.__webglTexture,33984+se);const Me=n.get(xe);if(xe.version!==Me.__version||ye===!0){t.activeTexture(33984+se),r.pixelStorei(37440,I.flipY),r.pixelStorei(37441,I.premultiplyAlpha),r.pixelStorei(3317,I.unpackAlignment),r.pixelStorei(37443,0);const ze=I.isCompressedTexture||I.image[0].isCompressedTexture,z=I.image[0]&&I.image[0].isDataTexture,k=[];for(let le=0;le<6;le++)!ze&&!z?k[le]=S(I.image[le],!1,!0,c):k[le]=z?I.image[le].image:I.image[le],k[le]=Ot(I,k[le]);const oe=k[0],ce=w(oe)||a,_e=s.convert(I.format,I.encoding),De=s.convert(I.type),Fe=v(I.internalFormat,_e,De,I.encoding),st=a&&I.isVideoTexture!==!0,ct=Me.__version===void 0||ye===!0;let yt=D(I,oe,ce);F(34067,I,ce);let W;if(ze){st&&ct&&t.texStorage2D(34067,yt,Fe,oe.width,oe.height);for(let le=0;le<6;le++){W=k[le].mipmaps;for(let ve=0;ve<W.length;ve++){const Ce=W[ve];I.format!==Hn?_e!==null?st?t.compressedTexSubImage2D(34069+le,ve,0,0,Ce.width,Ce.height,_e,Ce.data):t.compressedTexImage2D(34069+le,ve,Fe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(34069+le,ve,0,0,Ce.width,Ce.height,_e,De,Ce.data):t.texImage2D(34069+le,ve,Fe,Ce.width,Ce.height,0,_e,De,Ce.data)}}}else{W=I.mipmaps,st&&ct&&(W.length>0&&yt++,t.texStorage2D(34067,yt,Fe,k[0].width,k[0].height));for(let le=0;le<6;le++)if(z){st?t.texSubImage2D(34069+le,0,0,0,k[le].width,k[le].height,_e,De,k[le].data):t.texImage2D(34069+le,0,Fe,k[le].width,k[le].height,0,_e,De,k[le].data);for(let ve=0;ve<W.length;ve++){const Ve=W[ve].image[le].image;st?t.texSubImage2D(34069+le,ve+1,0,0,Ve.width,Ve.height,_e,De,Ve.data):t.texImage2D(34069+le,ve+1,Fe,Ve.width,Ve.height,0,_e,De,Ve.data)}}else{st?t.texSubImage2D(34069+le,0,0,0,_e,De,k[le]):t.texImage2D(34069+le,0,Fe,_e,De,k[le]);for(let ve=0;ve<W.length;ve++){const Ce=W[ve];st?t.texSubImage2D(34069+le,ve+1,0,0,_e,De,Ce.image[le]):t.texImage2D(34069+le,ve+1,Fe,_e,De,Ce.image[le])}}}C(I,ce)&&G(34067),Me.__version=xe.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function we(N,I,se,ye,xe){const Me=s.convert(se.format,se.encoding),ze=s.convert(se.type),z=v(se.internalFormat,Me,ze,se.encoding);n.get(I).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,z,I.width,I.height,I.depth,0,Me,ze,null):t.texImage2D(xe,0,z,I.width,I.height,0,Me,ze,null)),t.bindFramebuffer(36160,N),lt(I)?d.framebufferTexture2DMultisampleEXT(36160,ye,xe,n.get(se).__webglTexture,0,bt(I)):(xe===3553||xe>=34069&&xe<=34074)&&r.framebufferTexture2D(36160,ye,xe,n.get(se).__webglTexture,0),t.bindFramebuffer(36160,null)}function Qe(N,I,se){if(r.bindRenderbuffer(36161,N),I.depthBuffer&&!I.stencilBuffer){let ye=33189;if(se||lt(I)){const xe=I.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Ei?ye=36012:xe.type===Wi&&(ye=33190));const Me=bt(I);lt(I)?d.renderbufferStorageMultisampleEXT(36161,Me,ye,I.width,I.height):r.renderbufferStorageMultisample(36161,Me,ye,I.width,I.height)}else r.renderbufferStorage(36161,ye,I.width,I.height);r.framebufferRenderbuffer(36160,36096,36161,N)}else if(I.depthBuffer&&I.stencilBuffer){const ye=bt(I);se&&lt(I)===!1?r.renderbufferStorageMultisample(36161,ye,35056,I.width,I.height):lt(I)?d.renderbufferStorageMultisampleEXT(36161,ye,35056,I.width,I.height):r.renderbufferStorage(36161,34041,I.width,I.height),r.framebufferRenderbuffer(36160,33306,36161,N)}else{const ye=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let xe=0;xe<ye.length;xe++){const Me=ye[xe],ze=s.convert(Me.format,Me.encoding),z=s.convert(Me.type),k=v(Me.internalFormat,ze,z,Me.encoding),oe=bt(I);se&&lt(I)===!1?r.renderbufferStorageMultisample(36161,oe,k,I.width,I.height):lt(I)?d.renderbufferStorageMultisampleEXT(36161,oe,k,I.width,I.height):r.renderbufferStorage(36161,k,I.width,I.height)}}r.bindRenderbuffer(36161,null)}function He(N,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,N),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),ne(I.depthTexture,0);const ye=n.get(I.depthTexture).__webglTexture,xe=bt(I);if(I.depthTexture.format===ji)lt(I)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ye,0,xe):r.framebufferTexture2D(36160,36096,3553,ye,0);else if(I.depthTexture.format===Pr)lt(I)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ye,0,xe):r.framebufferTexture2D(36160,33306,3553,ye,0);else throw new Error("Unknown depthTexture format")}function Ee(N){const I=n.get(N),se=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!I.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");He(I.__webglFramebuffer,N)}else if(se){I.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(36160,I.__webglFramebuffer[ye]),I.__webglDepthbuffer[ye]=r.createRenderbuffer(),Qe(I.__webglDepthbuffer[ye],N,!1)}else t.bindFramebuffer(36160,I.__webglFramebuffer),I.__webglDepthbuffer=r.createRenderbuffer(),Qe(I.__webglDepthbuffer,N,!1);t.bindFramebuffer(36160,null)}function Lt(N,I,se){const ye=n.get(N);I!==void 0&&we(ye.__webglFramebuffer,N,N.texture,36064,3553),se!==void 0&&Ee(N)}function de(N){const I=N.texture,se=n.get(N),ye=n.get(I);N.addEventListener("dispose",K),N.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture()),ye.__version=I.version,o.memory.textures++);const xe=N.isWebGLCubeRenderTarget===!0,Me=N.isWebGLMultipleRenderTargets===!0,ze=w(N)||a;if(xe){se.__webglFramebuffer=[];for(let z=0;z<6;z++)se.__webglFramebuffer[z]=r.createFramebuffer()}else{if(se.__webglFramebuffer=r.createFramebuffer(),Me)if(i.drawBuffers){const z=N.texture;for(let k=0,oe=z.length;k<oe;k++){const ce=n.get(z[k]);ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&lt(N)===!1){const z=Me?I:[I];se.__webglMultisampledFramebuffer=r.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer);for(let k=0;k<z.length;k++){const oe=z[k];se.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(36161,se.__webglColorRenderbuffer[k]);const ce=s.convert(oe.format,oe.encoding),_e=s.convert(oe.type),De=v(oe.internalFormat,ce,_e,oe.encoding,N.isXRRenderTarget===!0),Fe=bt(N);r.renderbufferStorageMultisample(36161,Fe,De,N.width,N.height),r.framebufferRenderbuffer(36160,36064+k,36161,se.__webglColorRenderbuffer[k])}r.bindRenderbuffer(36161,null),N.depthBuffer&&(se.__webglDepthRenderbuffer=r.createRenderbuffer(),Qe(se.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(36160,null)}}if(xe){t.bindTexture(34067,ye.__webglTexture),F(34067,I,ze);for(let z=0;z<6;z++)we(se.__webglFramebuffer[z],N,I,36064,34069+z);C(I,ze)&&G(34067),t.unbindTexture()}else if(Me){const z=N.texture;for(let k=0,oe=z.length;k<oe;k++){const ce=z[k],_e=n.get(ce);t.bindTexture(3553,_e.__webglTexture),F(3553,ce,ze),we(se.__webglFramebuffer,N,ce,36064+k,3553),C(ce,ze)&&G(3553)}t.unbindTexture()}else{let z=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?z=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,ye.__webglTexture),F(z,I,ze),we(se.__webglFramebuffer,N,I,36064,z),C(I,ze)&&G(z),t.unbindTexture()}N.depthBuffer&&Ee(N)}function ee(N){const I=w(N)||a,se=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ye=0,xe=se.length;ye<xe;ye++){const Me=se[ye];if(C(Me,I)){const ze=N.isWebGLCubeRenderTarget?34067:3553,z=n.get(Me).__webglTexture;t.bindTexture(ze,z),G(ze),t.unbindTexture()}}}function We(N){if(a&&N.samples>0&&lt(N)===!1){const I=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],se=N.width,ye=N.height;let xe=16384;const Me=[],ze=N.stencilBuffer?33306:36096,z=n.get(N),k=N.isWebGLMultipleRenderTargets===!0;if(k)for(let oe=0;oe<I.length;oe++)t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,z.__webglFramebuffer),r.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,z.__webglFramebuffer);for(let oe=0;oe<I.length;oe++){Me.push(36064+oe),N.depthBuffer&&Me.push(ze);const ce=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(ce===!1&&(N.depthBuffer&&(xe|=256),N.stencilBuffer&&(xe|=1024)),k&&r.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[oe]),ce===!0&&(r.invalidateFramebuffer(36008,[ze]),r.invalidateFramebuffer(36009,[ze])),k){const _e=n.get(I[oe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,_e,0)}r.blitFramebuffer(0,0,se,ye,0,0,se,ye,xe,9728),m&&r.invalidateFramebuffer(36008,Me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let oe=0;oe<I.length;oe++){t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+oe,36161,z.__webglColorRenderbuffer[oe]);const ce=n.get(I[oe]).__webglTexture;t.bindFramebuffer(36160,z.__webglFramebuffer),r.framebufferTexture2D(36009,36064+oe,3553,ce,0)}t.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function bt(N){return Math.min(f,N.samples)}function lt(N){const I=n.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Gt(N){const I=o.render.frame;g.get(N)!==I&&(g.set(N,I),N.update())}function Ot(N,I){const se=N.encoding,ye=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Mo||se!==Ii&&(se===Mt?a===!1?e.has("EXT_sRGB")===!0&&ye===Hn?(N.format=Mo,N.minFilter=_n,N.generateMipmaps=!1):I=Lu.sRGBToLinear(I):(ye!==Hn||xe!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",se)),I}this.allocateTextureUnit=X,this.resetTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=R,this.setTexture3D=q,this.setTextureCube=ie,this.rebindTextures=Lt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=we,this.useMultisampledRTT=lt}function I_(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Ki)return 5121;if(s===dd)return 32819;if(s===hd)return 32820;if(s===cd)return 5120;if(s===ud)return 5122;if(s===Au)return 5123;if(s===fd)return 5124;if(s===Wi)return 5125;if(s===Ei)return 5126;if(s===ps)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===pd)return 6406;if(s===Hn)return 6408;if(s===gd)return 6409;if(s===_d)return 6410;if(s===ji)return 6402;if(s===Pr)return 34041;if(s===md)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Mo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vd)return 6403;if(s===bd)return 36244;if(s===yd)return 33319;if(s===xd)return 33320;if(s===Sd)return 36249;if(s===Na||s===Fa||s===Oa||s===Ua)if(o===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Na)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Na)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fl||s===dl||s===hl||s===pl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===fl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ml||s===gl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ml)return o===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===gl)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_l||s===vl||s===bl||s===yl||s===xl||s===Sl||s===wl||s===Ml||s===Al||s===El||s===Tl||s===Cl||s===Ll||s===Il)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===_l)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vl)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bl)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yl)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xl)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sl)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wl)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ml)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Al)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===El)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tl)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cl)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ll)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Il)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Dl)return o===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Lr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class D_ extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let ti=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}};const R_={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,n),_=this._getHandJoint(c,h);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class P_ extends yn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:ji,u!==ji&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ji&&(n=Wi),n===void 0&&u===Pr&&(n=Lr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1}}class k_ extends rr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const g=t.getContextAttributes();let h=null,p=null;const _=[],x=[],S=new Set,w=new Map,M=new sn;M.layers.enable(1),M.viewport=new Ct;const C=new sn;C.layers.enable(2),C.viewport=new Ct;const G=[M,C],v=new D_;v.layers.enable(1),v.layers.enable(2);let D=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let q=_[R];return q===void 0&&(q=new uo,_[R]=q),q.getTargetRaySpace()},this.getControllerGrip=function(R){let q=_[R];return q===void 0&&(q=new uo,_[R]=q),q.getGripSpace()},this.getHand=function(R){let q=_[R];return q===void 0&&(q=new uo,_[R]=q),q.getHandSpace()};function j(R){const q=x.indexOf(R.inputSource);if(q===-1)return;const ie=_[q];ie!==void 0&&ie.dispatchEvent({type:R.type,data:R.inputSource})}function K(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",V);for(let R=0;R<_.length;R++){const q=x[R];q!==null&&(x[R]=null,_[R].disconnect(q))}D=null,L=null,e.setRenderTarget(h),d=null,f=null,u=null,i=null,p=null,ne.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",K),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:d}),p=new ii(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:Ki,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let q=null,ie=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,q=g.stencil?Pr:ji,ie=g.stencil?Lr:Wi);const te={colorFormat:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(te),i.updateRenderState({layers:[f]}),p=new ii(f.textureWidth,f.textureHeight,{format:Hn,type:Ki,depthTexture:new P_(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const F=e.properties.get(p);F.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(R){for(let q=0;q<R.removed.length;q++){const ie=R.removed[q],Q=x.indexOf(ie);Q>=0&&(x[Q]=null,_[Q].disconnect(ie))}for(let q=0;q<R.added.length;q++){const ie=R.added[q];let Q=x.indexOf(ie);if(Q===-1){for(let F=0;F<_.length;F++)if(F>=x.length){x.push(ie),Q=F;break}else if(x[F]===null){x[F]=ie,Q=F;break}if(Q===-1)break}const te=_[Q];te&&te.connect(ie)}}const U=new H,O=new H;function B(R,q,ie){U.setFromMatrixPosition(q.matrixWorld),O.setFromMatrixPosition(ie.matrixWorld);const Q=U.distanceTo(O),te=q.projectionMatrix.elements,F=ie.projectionMatrix.elements,ae=te[14]/(te[10]-1),be=te[14]/(te[10]+1),Le=(te[9]+1)/te[5],we=(te[9]-1)/te[5],Qe=(te[8]-1)/te[0],He=(F[8]+1)/F[0],Ee=ae*Qe,Lt=ae*He,de=Q/(-Qe+He),ee=de*-Qe;q.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(ee),R.translateZ(de),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const We=ae+de,bt=be+de,lt=Ee-ee,Gt=Lt+(Q-ee),Ot=Le*be/bt*We,N=we*be/bt*We;R.projectionMatrix.makePerspective(lt,Gt,Ot,N,We,bt)}function J(R,q){q===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(q.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;v.near=C.near=M.near=R.near,v.far=C.far=M.far=R.far,(D!==v.near||L!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,L=v.far);const q=R.parent,ie=v.cameras;J(v,q);for(let te=0;te<ie.length;te++)J(ie[te],q);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),R.matrix.copy(v.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);const Q=R.children;for(let te=0,F=Q.length;te<F;te++)Q[te].updateMatrixWorld(!0);ie.length===2?B(v,M,C):v.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(R){f!==null&&(f.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)},this.getPlanes=function(){return S};let X=null;function re(R,q){if(c=q.getViewerPose(l||o),m=q,c!==null){const ie=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Q=!1;ie.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let te=0;te<ie.length;te++){const F=ie[te];let ae=null;if(d!==null)ae=d.getViewport(F);else{const Le=u.getViewSubImage(f,F);ae=Le.viewport,te===0&&(e.setRenderTargetTextures(p,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let be=G[te];be===void 0&&(be=new sn,be.layers.enable(te),be.viewport=new Ct,G[te]=be),be.matrix.fromArray(F.transform.matrix),be.projectionMatrix.fromArray(F.projectionMatrix),be.viewport.set(ae.x,ae.y,ae.width,ae.height),te===0&&v.matrix.copy(be.matrix),Q===!0&&v.cameras.push(be)}}for(let ie=0;ie<_.length;ie++){const Q=x[ie],te=_[ie];Q!==null&&te!==void 0&&te.update(Q,q,l||o)}if(X&&X(R,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let ie=null;for(const Q of S)q.detectedPlanes.has(Q)||(ie===null&&(ie=[]),ie.push(Q));if(ie!==null)for(const Q of ie)S.delete(Q),w.delete(Q),n.dispatchEvent({type:"planeremoved",data:Q});for(const Q of q.detectedPlanes)if(!S.has(Q))S.add(Q),w.set(Q,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Q});else{const te=w.get(Q);Q.lastChangedTime>te&&(w.set(Q,Q.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Q}))}}m=null}const ne=new Ou;ne.setAnimationLoop(re),this.setAnimationLoop=function(R){X=R},this.dispose=function(){}}}function N_(r,e){function t(h,p){p.color.getRGB(h.fogColor.value,ku(r)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function n(h,p,_,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(h,p):p.isMeshToonMaterial?(i(h,p),u(h,p)):p.isMeshPhongMaterial?(i(h,p),c(h,p)):p.isMeshStandardMaterial?(i(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,S)):p.isMeshMatcapMaterial?(i(h,p),m(h,p)):p.isMeshDepthMaterial?i(h,p):p.isMeshDistanceMaterial?(i(h,p),g(h,p)):p.isMeshNormalMaterial?i(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,_,x):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===jn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===jn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(h.envMap.value=_,h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const w=r.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),h.uv2Transform.value.copy(S.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,_,x){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*_,h.scale.value=x*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),h.uvTransform.value.copy(S.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,_){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===jn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function g(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function F_(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(x,S){const w=S.program;n.uniformBlockBinding(x,w)}function c(x,S){let w=i[x.id];w===void 0&&(g(x),w=u(x),i[x.id]=w,x.addEventListener("dispose",p));const M=S.program;n.updateUBOMapping(x,M);const C=e.render.frame;s[x.id]!==C&&(d(x),s[x.id]=C)}function u(x){const S=f();x.__bindingPointIndex=S;const w=r.createBuffer(),M=x.__size,C=x.usage;return r.bindBuffer(35345,w),r.bufferData(35345,M,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,w),w}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=i[x.id],w=x.uniforms,M=x.__cache;r.bindBuffer(35345,S);for(let C=0,G=w.length;C<G;C++){const v=w[C];if(m(v,C,M)===!0){const D=v.__offset,L=Array.isArray(v.value)?v.value:[v.value];let j=0;for(let K=0;K<L.length;K++){const V=L[K],U=h(V);typeof V=="number"?(v.__data[0]=V,r.bufferSubData(35345,D+j,v.__data)):V.isMatrix3?(v.__data[0]=V.elements[0],v.__data[1]=V.elements[1],v.__data[2]=V.elements[2],v.__data[3]=V.elements[0],v.__data[4]=V.elements[3],v.__data[5]=V.elements[4],v.__data[6]=V.elements[5],v.__data[7]=V.elements[0],v.__data[8]=V.elements[6],v.__data[9]=V.elements[7],v.__data[10]=V.elements[8],v.__data[11]=V.elements[0]):(V.toArray(v.__data,j),j+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,D,v.__data)}}r.bindBuffer(35345,null)}function m(x,S,w){const M=x.value;if(w[S]===void 0){if(typeof M=="number")w[S]=M;else{const C=Array.isArray(M)?M:[M],G=[];for(let v=0;v<C.length;v++)G.push(C[v].clone());w[S]=G}return!0}else if(typeof M=="number"){if(w[S]!==M)return w[S]=M,!0}else{const C=Array.isArray(w[S])?w[S]:[w[S]],G=Array.isArray(M)?M:[M];for(let v=0;v<C.length;v++){const D=C[v];if(D.equals(G[v])===!1)return D.copy(G[v]),!0}}return!1}function g(x){const S=x.uniforms;let w=0;const M=16;let C=0;for(let G=0,v=S.length;G<v;G++){const D=S[G],L={boundary:0,storage:0},j=Array.isArray(D.value)?D.value:[D.value];for(let K=0,V=j.length;K<V;K++){const U=j[K],O=h(U);L.boundary+=O.boundary,L.storage+=O.storage}if(D.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,G>0){C=w%M;const K=M-C;C!==0&&K-L.boundary<0&&(w+=M-C,D.__offset=w)}w+=L.storage}return C=w%M,C>0&&(w+=M-C),x.__size=w,x.__cache={},this}function h(x){const S={boundary:0,storage:0};return typeof x=="number"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function p(x){const S=x.target;S.removeEventListener("dispose",p);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function _(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function O_(){const r=_s("canvas");return r.style.display="block",r}function Hu(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:O_(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ii,this.physicallyCorrectLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const h=this;let p=!1,_=0,x=0,S=null,w=-1,M=null;const C=new Ct,G=new Ct;let v=null,D=e.width,L=e.height,j=1,K=null,V=null;const U=new Ct(0,0,D,L),O=new Ct(0,0,D,L);let B=!1;const J=new va;let X=!1,re=!1,ne=null;const R=new tt,q=new Ze,ie=new H,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return S===null?j:1}let F=t;function ae(P,Z){for(let ue=0;ue<P.length;ue++){const Y=P[ue],he=e.getContext(Y,Z);if(he!==null)return he}return null}try{const P={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Po}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",st,!1),F===null){const Z=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&Z.shift(),F=ae(Z,P),F===null)throw ae(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let be,Le,we,Qe,He,Ee,Lt,de,ee,We,bt,lt,Gt,Ot,N,I,se,ye,xe,Me,ze,z,k,oe;function ce(){be=new Km(F),Le=new Hm(F,be,r),be.init(Le),z=new I_(F,be,Le),we=new C_(F,be,Le),Qe=new Qm,He=new m_,Ee=new L_(F,be,we,He,Le,z,Qe),Lt=new jm(h),de=new Ym(h),ee=new oh(F,Le),k=new Gm(F,be,ee,Le),We=new Zm(F,ee,Qe,k),bt=new ng(F,We,ee,Qe),xe=new tg(F,Le,Ee),I=new Wm(He),lt=new p_(h,Lt,de,be,Le,k,I),Gt=new N_(h,He),Ot=new __,N=new w_(be,Le),ye=new Bm(h,Lt,de,we,bt,u,o),se=new T_(h,bt,Le),oe=new F_(F,Qe,Le,we),Me=new Vm(F,be,Qe,Le),ze=new Jm(F,be,Qe,Le),Qe.programs=lt.programs,h.capabilities=Le,h.extensions=be,h.properties=He,h.renderLists=Ot,h.shadowMap=se,h.state=we,h.info=Qe}ce();const _e=new k_(h,F);this.xr=_e,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=be.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=be.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(D,L,!1))},this.getSize=function(P){return P.set(D,L)},this.setSize=function(P,Z,ue){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,L=Z,e.width=Math.floor(P*j),e.height=Math.floor(Z*j),ue!==!1&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(D*j,L*j).floor()},this.setDrawingBufferSize=function(P,Z,ue){D=P,L=Z,j=ue,e.width=Math.floor(P*ue),e.height=Math.floor(Z*ue),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(U)},this.setViewport=function(P,Z,ue,Y){P.isVector4?U.set(P.x,P.y,P.z,P.w):U.set(P,Z,ue,Y),we.viewport(C.copy(U).multiplyScalar(j).floor())},this.getScissor=function(P){return P.copy(O)},this.setScissor=function(P,Z,ue,Y){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,Z,ue,Y),we.scissor(G.copy(O).multiplyScalar(j).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(P){we.setScissorTest(B=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(P=!0,Z=!0,ue=!0){let Y=0;P&&(Y|=16384),Z&&(Y|=256),ue&&(Y|=1024),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Ot.dispose(),N.dispose(),He.dispose(),Lt.dispose(),de.dispose(),bt.dispose(),k.dispose(),oe.dispose(),lt.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Ce),_e.removeEventListener("sessionend",Ve),ne&&(ne.dispose(),ne=null),gt.stop()};function De(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const P=Qe.autoReset,Z=se.enabled,ue=se.autoUpdate,Y=se.needsUpdate,he=se.type;ce(),Qe.autoReset=P,se.enabled=Z,se.autoUpdate=ue,se.needsUpdate=Y,se.type=he}function st(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ct(P){const Z=P.target;Z.removeEventListener("dispose",ct),yt(Z)}function yt(P){W(P),He.remove(P)}function W(P){const Z=He.get(P).programs;Z!==void 0&&(Z.forEach(function(ue){lt.releaseProgram(ue)}),P.isShaderMaterial&&lt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,ue,Y,he,qe){Z===null&&(Z=Q);const Je=he.isMesh&&he.matrixWorld.determinant()<0,et=Ca(P,Z,ue,Y,he);we.setMaterial(Y,Je);let it=ue.index,ht=1;Y.wireframe===!0&&(it=We.getWireframeAttribute(ue),ht=2);const ft=ue.drawRange,dt=ue.attributes.position;let Bt=ft.start*ht,pn=(ft.start+ft.count)*ht;qe!==null&&(Bt=Math.max(Bt,qe.start*ht),pn=Math.min(pn,(qe.start+qe.count)*ht)),it!==null?(Bt=Math.max(Bt,0),pn=Math.min(pn,it.count)):dt!=null&&(Bt=Math.max(Bt,0),pn=Math.min(pn,dt.count));const Ut=pn-Bt;if(Ut<0||Ut===1/0)return;k.setup(he,Y,et,ue,it);let Tn,Nt=Me;if(it!==null&&(Tn=ee.get(it),Nt=ze,Nt.setIndex(Tn)),he.isMesh)Y.wireframe===!0?(we.setLineWidth(Y.wireframeLinewidth*te()),Nt.setMode(1)):Nt.setMode(4);else if(he.isLine){let at=Y.linewidth;at===void 0&&(at=1),we.setLineWidth(at*te()),he.isLineSegments?Nt.setMode(1):he.isLineLoop?Nt.setMode(2):Nt.setMode(3)}else he.isPoints?Nt.setMode(0):he.isSprite&&Nt.setMode(4);if(he.isInstancedMesh)Nt.renderInstances(Bt,Ut,he.count);else if(ue.isInstancedBufferGeometry){const at=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Yr=Math.min(ue.instanceCount,at);Nt.renderInstances(Bt,Ut,Yr)}else Nt.render(Bt,Ut)},this.compile=function(P,Z){function ue(Y,he,qe){Y.transparent===!0&&Y.side===Ds?(Y.side=jn,Y.needsUpdate=!0,En(Y,he,qe),Y.side=Li,Y.needsUpdate=!0,En(Y,he,qe),Y.side=Ds):En(Y,he,qe)}d=N.get(P),d.init(),g.push(d),P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Z.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights(h.physicallyCorrectLights),P.traverse(function(Y){const he=Y.material;if(he)if(Array.isArray(he))for(let qe=0;qe<he.length;qe++){const Je=he[qe];ue(Je,P,Y)}else ue(he,P,Y)}),g.pop(),d=null};let le=null;function ve(P){le&&le(P)}function Ce(){gt.stop()}function Ve(){gt.start()}const gt=new Ou;gt.setAnimationLoop(ve),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(P){le=P,_e.setAnimationLoop(P),P===null?gt.stop():gt.start()},_e.addEventListener("sessionstart",Ce),_e.addEventListener("sessionend",Ve),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(Z),Z=_e.getCamera()),P.isScene===!0&&P.onBeforeRender(h,P,Z,S),d=N.get(P,g.length),d.init(),g.push(d),R.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),J.setFromProjectionMatrix(R),re=this.localClippingEnabled,X=I.init(this.clippingPlanes,re,Z),f=Ot.get(P,m.length),f.init(),m.push(f),Wt(P,Z,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(K,V),X===!0&&I.beginShadows();const ue=d.state.shadowsArray;if(se.render(ue,P,Z),X===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),ye.render(f,P),d.setupLights(h.physicallyCorrectLights),Z.isArrayCamera){const Y=Z.cameras;for(let he=0,qe=Y.length;he<qe;he++){const Je=Y[he];Xt(f,P,Je,Je.viewport)}}else Xt(f,P,Z);S!==null&&(Ee.updateMultisampleRenderTarget(S),Ee.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(h,P,Z),k.resetDefaultState(),w=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Wt(P,Z,ue,Y){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)ue=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||J.intersectsSprite(P)){Y&&ie.setFromMatrixPosition(P.matrixWorld).applyMatrix4(R);const Je=bt.update(P),et=P.material;et.visible&&f.push(P,Je,et,ue,ie.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Qe.render.frame&&(P.skeleton.update(),P.skeleton.frame=Qe.render.frame),!P.frustumCulled||J.intersectsObject(P))){Y&&ie.setFromMatrixPosition(P.matrixWorld).applyMatrix4(R);const Je=bt.update(P),et=P.material;if(Array.isArray(et)){const it=Je.groups;for(let ht=0,ft=it.length;ht<ft;ht++){const dt=it[ht],Bt=et[dt.materialIndex];Bt&&Bt.visible&&f.push(P,Je,Bt,ue,ie.z,dt)}}else et.visible&&f.push(P,Je,et,ue,ie.z,null)}}const qe=P.children;for(let Je=0,et=qe.length;Je<et;Je++)Wt(qe[Je],Z,ue,Y)}function Xt(P,Z,ue,Y){const he=P.opaque,qe=P.transmissive,Je=P.transparent;d.setupLightsView(ue),qe.length>0&&ai(he,Z,ue),Y&&we.viewport(C.copy(Y)),he.length>0&&ut(he,Z,ue),qe.length>0&&ut(qe,Z,ue),Je.length>0&&ut(Je,Z,ue),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ai(P,Z,ue){const Y=Le.isWebGL2;ne===null&&(ne=new ii(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?ps:Ki,minFilter:Yi,samples:Y&&s===!0?4:0})),h.getDrawingBufferSize(q),Y?ne.setSize(q.x,q.y):ne.setSize(la(q.x),la(q.y));const he=h.getRenderTarget();h.setRenderTarget(ne),h.clear();const qe=h.toneMapping;h.toneMapping=ni,ut(P,Z,ue),h.toneMapping=qe,Ee.updateMultisampleRenderTarget(ne),Ee.updateRenderTargetMipmap(ne),h.setRenderTarget(he)}function ut(P,Z,ue){const Y=Z.isScene===!0?Z.overrideMaterial:null;for(let he=0,qe=P.length;he<qe;he++){const Je=P[he],et=Je.object,it=Je.geometry,ht=Y===null?Je.material:Y,ft=Je.group;et.layers.test(ue.layers)&&zn(et,Z,ue,it,ht,ft)}}function zn(P,Z,ue,Y,he,qe){P.onBeforeRender(h,Z,ue,Y,he,qe),P.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),he.onBeforeRender(h,Z,ue,Y,P,qe),he.transparent===!0&&he.side===Ds?(he.side=jn,he.needsUpdate=!0,h.renderBufferDirect(ue,Z,Y,he,P,qe),he.side=Li,he.needsUpdate=!0,h.renderBufferDirect(ue,Z,Y,he,P,qe),he.side=Ds):h.renderBufferDirect(ue,Z,Y,he,P,qe),P.onAfterRender(h,Z,ue,Y,he,qe)}function En(P,Z,ue){Z.isScene!==!0&&(Z=Q);const Y=He.get(P),he=d.state.lights,qe=d.state.shadowsArray,Je=he.state.version,et=lt.getParameters(P,he.state,qe,Z,ue),it=lt.getProgramCacheKey(et);let ht=Y.programs;Y.environment=P.isMeshStandardMaterial?Z.environment:null,Y.fog=Z.fog,Y.envMap=(P.isMeshStandardMaterial?de:Lt).get(P.envMap||Y.environment),ht===void 0&&(P.addEventListener("dispose",ct),ht=new Map,Y.programs=ht);let ft=ht.get(it);if(ft!==void 0){if(Y.currentProgram===ft&&Y.lightsStateVersion===Je)return Ms(P,et),ft}else et.uniforms=lt.getUniforms(P),P.onBuild(ue,et,h),P.onBeforeCompile(et,h),ft=lt.acquireProgram(et,it),ht.set(it,ft),Y.uniforms=et.uniforms;const dt=Y.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(dt.clippingPlanes=I.uniform),Ms(P,et),Y.needsLights=Ia(P),Y.lightsStateVersion=Je,Y.needsLights&&(dt.ambientLightColor.value=he.state.ambient,dt.lightProbe.value=he.state.probe,dt.directionalLights.value=he.state.directional,dt.directionalLightShadows.value=he.state.directionalShadow,dt.spotLights.value=he.state.spot,dt.spotLightShadows.value=he.state.spotShadow,dt.rectAreaLights.value=he.state.rectArea,dt.ltc_1.value=he.state.rectAreaLTC1,dt.ltc_2.value=he.state.rectAreaLTC2,dt.pointLights.value=he.state.point,dt.pointLightShadows.value=he.state.pointShadow,dt.hemisphereLights.value=he.state.hemi,dt.directionalShadowMap.value=he.state.directionalShadowMap,dt.directionalShadowMatrix.value=he.state.directionalShadowMatrix,dt.spotShadowMap.value=he.state.spotShadowMap,dt.spotLightMatrix.value=he.state.spotLightMatrix,dt.spotLightMap.value=he.state.spotLightMap,dt.pointShadowMap.value=he.state.pointShadowMap,dt.pointShadowMatrix.value=he.state.pointShadowMatrix);const Bt=ft.getUniforms(),pn=ia.seqWithValue(Bt.seq,dt);return Y.currentProgram=ft,Y.uniformsList=pn,ft}function Ms(P,Z){const ue=He.get(P);ue.outputEncoding=Z.outputEncoding,ue.instancing=Z.instancing,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function Ca(P,Z,ue,Y,he){Z.isScene!==!0&&(Z=Q),Ee.resetTextureUnits();const qe=Z.fog,Je=Y.isMeshStandardMaterial?Z.environment:null,et=S===null?h.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Ii,it=(Y.isMeshStandardMaterial?de:Lt).get(Y.envMap||Je),ht=Y.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ft=!!Y.normalMap&&!!ue.attributes.tangent,dt=!!ue.morphAttributes.position,Bt=!!ue.morphAttributes.normal,pn=!!ue.morphAttributes.color,Ut=Y.toneMapped?h.toneMapping:ni,Tn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Nt=Tn!==void 0?Tn.length:0,at=He.get(Y),Yr=d.state.lights;if(X===!0&&(re===!0||P!==M)){const an=P===M&&Y.id===w;I.setState(Y,P,an)}let Vt=!1;Y.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Yr.state.version||at.outputEncoding!==et||he.isInstancedMesh&&at.instancing===!1||!he.isInstancedMesh&&at.instancing===!0||he.isSkinnedMesh&&at.skinning===!1||!he.isSkinnedMesh&&at.skinning===!0||at.envMap!==it||Y.fog===!0&&at.fog!==qe||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==I.numPlanes||at.numIntersection!==I.numIntersection)||at.vertexAlphas!==ht||at.vertexTangents!==ft||at.morphTargets!==dt||at.morphNormals!==Bt||at.morphColors!==pn||at.toneMapping!==Ut||Le.isWebGL2===!0&&at.morphTargetsCount!==Nt)&&(Vt=!0):(Vt=!0,at.__version=Y.version);let oi=at.currentProgram;Vt===!0&&(oi=En(Y,Z,he));let As=!1,ki=!1,ar=!1;const Qt=oi.getUniforms(),Cn=at.uniforms;if(we.useProgram(oi.program)&&(As=!0,ki=!0,ar=!0),Y.id!==w&&(w=Y.id,ki=!0),As||M!==P){if(Qt.setValue(F,"projectionMatrix",P.projectionMatrix),Le.logarithmicDepthBuffer&&Qt.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),M!==P&&(M=P,ki=!0,ar=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const an=Qt.map.cameraPosition;an!==void 0&&an.setValue(F,ie.setFromMatrixPosition(P.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Qt.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||he.isSkinnedMesh)&&Qt.setValue(F,"viewMatrix",P.matrixWorldInverse)}if(he.isSkinnedMesh){Qt.setOptional(F,he,"bindMatrix"),Qt.setOptional(F,he,"bindMatrixInverse");const an=he.skeleton;an&&(Le.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Qt.setValue(F,"boneTexture",an.boneTexture,Ee),Qt.setValue(F,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Kr=ue.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0&&Le.isWebGL2===!0)&&xe.update(he,ue,Y,oi),(ki||at.receiveShadow!==he.receiveShadow)&&(at.receiveShadow=he.receiveShadow,Qt.setValue(F,"receiveShadow",he.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Cn.envMap.value=it,Cn.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),ki&&(Qt.setValue(F,"toneMappingExposure",h.toneMappingExposure),at.needsLights&&La(Cn,ar),qe&&Y.fog===!0&&Gt.refreshFogUniforms(Cn,qe),Gt.refreshMaterialUniforms(Cn,Y,j,L,ne),ia.upload(F,at.uniformsList,Cn,Ee)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ia.upload(F,at.uniformsList,Cn,Ee),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Qt.setValue(F,"center",he.center),Qt.setValue(F,"modelViewMatrix",he.modelViewMatrix),Qt.setValue(F,"normalMatrix",he.normalMatrix),Qt.setValue(F,"modelMatrix",he.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const an=Y.uniformsGroups;for(let Zr=0,Es=an.length;Zr<Es;Zr++)if(Le.isWebGL2){const Ts=an[Zr];oe.update(Ts,oi),oe.bind(Ts,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function La(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Ia(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,Z,ue){He.get(P.texture).__webglTexture=Z,He.get(P.depthTexture).__webglTexture=ue;const Y=He.get(P);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=ue===void 0,Y.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Z){const ue=He.get(P);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,ue=0){S=P,_=Z,x=ue;let Y=!0,he=null,qe=!1,Je=!1;if(P){const it=He.get(P);it.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(36160,null),Y=!1):it.__webglFramebuffer===void 0?Ee.setupRenderTarget(P):it.__hasExternalTextures&&Ee.rebindTextures(P,He.get(P.texture).__webglTexture,He.get(P.depthTexture).__webglTexture);const ht=P.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Je=!0);const ft=He.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(he=ft[Z],qe=!0):Le.isWebGL2&&P.samples>0&&Ee.useMultisampledRTT(P)===!1?he=He.get(P).__webglMultisampledFramebuffer:he=ft,C.copy(P.viewport),G.copy(P.scissor),v=P.scissorTest}else C.copy(U).multiplyScalar(j).floor(),G.copy(O).multiplyScalar(j).floor(),v=B;if(we.bindFramebuffer(36160,he)&&Le.drawBuffers&&Y&&we.drawBuffers(P,he),we.viewport(C),we.scissor(G),we.setScissorTest(v),qe){const it=He.get(P.texture);F.framebufferTexture2D(36160,36064,34069+Z,it.__webglTexture,ue)}else if(Je){const it=He.get(P.texture),ht=Z||0;F.framebufferTextureLayer(36160,36064,it.__webglTexture,ue||0,ht)}w=-1},this.readRenderTargetPixels=function(P,Z,ue,Y,he,qe,Je){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=He.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Je!==void 0&&(et=et[Je]),et){we.bindFramebuffer(36160,et);try{const it=P.texture,ht=it.format,ft=it.type;if(ht!==Hn&&z.convert(ht)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const dt=ft===ps&&(be.has("EXT_color_buffer_half_float")||Le.isWebGL2&&be.has("EXT_color_buffer_float"));if(ft!==Ki&&z.convert(ft)!==F.getParameter(35738)&&!(ft===Ei&&(Le.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-Y&&ue>=0&&ue<=P.height-he&&F.readPixels(Z,ue,Y,he,z.convert(ht),z.convert(ft),qe)}finally{const it=S!==null?He.get(S).__webglFramebuffer:null;we.bindFramebuffer(36160,it)}}},this.copyFramebufferToTexture=function(P,Z,ue=0){const Y=Math.pow(2,-ue),he=Math.floor(Z.image.width*Y),qe=Math.floor(Z.image.height*Y);Ee.setTexture2D(Z,0),F.copyTexSubImage2D(3553,ue,0,0,P.x,P.y,he,qe),we.unbindTexture()},this.copyTextureToTexture=function(P,Z,ue,Y=0){const he=Z.image.width,qe=Z.image.height,Je=z.convert(ue.format),et=z.convert(ue.type);Ee.setTexture2D(ue,0),F.pixelStorei(37440,ue.flipY),F.pixelStorei(37441,ue.premultiplyAlpha),F.pixelStorei(3317,ue.unpackAlignment),Z.isDataTexture?F.texSubImage2D(3553,Y,P.x,P.y,he,qe,Je,et,Z.image.data):Z.isCompressedTexture?F.compressedTexSubImage2D(3553,Y,P.x,P.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Je,Z.mipmaps[0].data):F.texSubImage2D(3553,Y,P.x,P.y,Je,et,Z.image),Y===0&&ue.generateMipmaps&&F.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,ue,Y,he=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const qe=P.max.x-P.min.x+1,Je=P.max.y-P.min.y+1,et=P.max.z-P.min.z+1,it=z.convert(Y.format),ht=z.convert(Y.type);let ft;if(Y.isData3DTexture)Ee.setTexture3D(Y,0),ft=32879;else if(Y.isDataArrayTexture)Ee.setTexture2DArray(Y,0),ft=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,Y.flipY),F.pixelStorei(37441,Y.premultiplyAlpha),F.pixelStorei(3317,Y.unpackAlignment);const dt=F.getParameter(3314),Bt=F.getParameter(32878),pn=F.getParameter(3316),Ut=F.getParameter(3315),Tn=F.getParameter(32877),Nt=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;F.pixelStorei(3314,Nt.width),F.pixelStorei(32878,Nt.height),F.pixelStorei(3316,P.min.x),F.pixelStorei(3315,P.min.y),F.pixelStorei(32877,P.min.z),ue.isDataTexture||ue.isData3DTexture?F.texSubImage3D(ft,he,Z.x,Z.y,Z.z,qe,Je,et,it,ht,Nt.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ft,he,Z.x,Z.y,Z.z,qe,Je,et,it,Nt.data)):F.texSubImage3D(ft,he,Z.x,Z.y,Z.z,qe,Je,et,it,ht,Nt),F.pixelStorei(3314,dt),F.pixelStorei(32878,Bt),F.pixelStorei(3316,pn),F.pixelStorei(3315,Ut),F.pixelStorei(32877,Tn),he===0&&Y.generateMipmaps&&F.generateMipmap(ft),we.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ee.setTextureCube(P,0):P.isData3DTexture?Ee.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ee.setTexture2DArray(P,0):Ee.setTexture2D(P,0),we.unbindTexture()},this.resetState=function(){_=0,x=0,S=null,we.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class U_ extends Hu{}U_.prototype.isWebGL1Renderer=!0;class Wu extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const gc=new H,_c=new Ct,vc=new Ct,z_=new H,bc=new tt;class B_ extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new tt,this.bindMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;_c.fromBufferAttribute(i.attributes.skinIndex,e),vc.fromBufferAttribute(i.attributes.skinWeight,e),gc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=vc.getComponent(s);if(o!==0){const a=_c.getComponent(s);bc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(z_.copy(gc).applyMatrix4(bc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ju extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qu extends yn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=nn,u=nn,f,d){super(null,o,a,l,c,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yc=new tt,G_=new tt;class Bo{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:G_;yc.multiplyMatrices(a,t[s]),yc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Bo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Eu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qu(t,e,e,Hn,Ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ju),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ca extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new H,Sc=new H,wc=new tt,fo=new Fo,Zs=new _a;class Xu extends Ft{constructor(e=new Pn,t=new ca){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)xc.fromBufferAttribute(t,i-1),Sc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xc.distanceTo(Sc);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=s,e.ray.intersectsSphere(Zs)===!1)return;wc.copy(i).invert(),fo.copy(e.ray).applyMatrix4(wc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,u=new H,f=new H,d=new H,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let S=_,w=x-1;S<w;S+=m){const M=g.getX(S),C=g.getX(S+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,C),fo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let S=_,w=x-1;S<w;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),fo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Mc=new H,Ac=new H;class Yu extends Xu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Mc.fromBufferAttribute(t,i),Ac.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mc.distanceTo(Ac);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Go extends Pn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],d=[],m=[];let g=0;const h=[],p=n/2;let _=0;x(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(m,2));function x(){const w=new H,M=new H;let C=0;const G=(t-e)/n;for(let v=0;v<=s;v++){const D=[],L=v/s,j=L*(t-e)+e;for(let K=0;K<=i;K++){const V=K/i,U=V*l+a,O=Math.sin(U),B=Math.cos(U);M.x=j*O,M.y=-L*n+p,M.z=j*B,f.push(M.x,M.y,M.z),w.set(O,G,B).normalize(),d.push(w.x,w.y,w.z),m.push(V,1-L),D.push(g++)}h.push(D)}for(let v=0;v<i;v++)for(let D=0;D<s;D++){const L=h[D][v],j=h[D+1][v],K=h[D+1][v+1],V=h[D][v+1];u.push(L,j,V),u.push(j,K,V),C+=6}c.addGroup(_,C,0),_+=C}function S(w){const M=g,C=new Ze,G=new H;let v=0;const D=w===!0?e:t,L=w===!0?1:-1;for(let K=1;K<=i;K++)f.push(0,p*L,0),d.push(0,L,0),m.push(.5,.5),g++;const j=g;for(let K=0;K<=i;K++){const U=K/i*l+a,O=Math.cos(U),B=Math.sin(U);G.x=D*B,G.y=p*L,G.z=D*O,f.push(G.x,G.y,G.z),d.push(0,L,0),C.x=O*.5+.5,C.y=B*.5*L+.5,m.push(C.x,C.y),g++}for(let K=0;K<i;K++){const V=M+K,U=j+K;w===!0?u.push(U,U+1,V):u.push(U+1,U,V),v+=3}c.addGroup(_,v,w===!0?1:2),_+=v}}static fromJSON(e){return new Go(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ec extends sr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ko,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vo extends sr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ko,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function wi(r,e,t){return Ku(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Js(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ku(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function V_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Zu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class xa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class H_ extends xa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pl:s=e,a=2*t-n;break;case kl:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pl:o=e,l=2*n-t;break;case kl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),h=g*g,p=h*g,_=-d*p+2*d*h-d*g,x=(1+d)*p+(-1.5-2*d)*h+(-.5+d)*g+1,S=(-1-m)*p+(1.5+m)*h+.5*g,w=m*p-m*h;for(let M=0;M!==a;++M)s[M]=_*o[u+M]+x*o[c+M]+S*o[l+M]+w*o[f+M];return s}}class W_ extends xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}}class j_ extends xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new j_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new W_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new H_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case aa:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=wi(n,s,o),this.values=wi(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ku(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=wi(this.times),t=wi(this.values),n=this.getValueSize(),i=this.getInterpolation()===za,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const f=a*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){const h=t[f+g];if(h!==t[d+g]||h!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=wi(e,0,o),this.values=wi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=wi(this.times,0),t=wi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=oa;class Wr extends si{}Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=aa;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ju extends si{}Ju.prototype.ValueTypeName="color";class ua extends si{}ua.prototype.ValueTypeName="number";class q_ extends xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ri.slerpFlat(s,0,o,c-a,o,c,l);return s}}class jr extends si{InterpolantFactoryMethodLinear(e){return new q_(this.times,this.values,this.getValueSize(),e)}}jr.prototype.ValueTypeName="quaternion";jr.prototype.DefaultInterpolation=oa;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends si{}qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=aa;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fr extends si{}Fr.prototype.ValueTypeName="vector";class Cc{constructor(e,t=-1,n,i=Md){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Y_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(si.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=V_(l);l=Tc(l,1,u),c=Tc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ua(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=i[f];d||(i[f]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,m,g,h){if(m.length!==0){const p=[],_=[];Zu(m,p,_,g),p.length!==0&&h.push(new f(d,p,_))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let h=0;h<d[g].morphTargets.length;h++)m[d[g].morphTargets[h]]=-1;for(const h in m){const p=[],_=[];for(let x=0;x!==d[g].morphTargets.length;++x){const S=d[g];p.push(S.time),_.push(S.morphTarget===h?1:0)}i.push(new ua(".morphTargetInfluence["+h+"]",p,_))}l=m.length*o}else{const m=".bones["+t[f].name+"]";n(Fr,m+".position",d,"pos",i),n(jr,m+".quaternion",d,"rot",i),n(Fr,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function X_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ua;case"vector":case"vector2":case"vector3":case"vector4":return Fr;case"color":return Ju;case"quaternion":return jr;case"bool":case"boolean":return Wr;case"string":return qr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Y_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=X_(r.type);if(r.times===void 0){const t=[],n=[];Zu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class K_{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Qu=new K_;class Xr{constructor(e){this.manager=e!==void 0?e:Qu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const pi={};class Z_ extends Error{constructor(e,t){super(e),this.response=t}}class Ho extends Xr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fa.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=pi[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let h=0;const p=new ReadableStream({start(_){x();function x(){f.read().then(({done:S,value:w})=>{if(S)_.close();else{h+=w.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:h,total:m});for(let C=0,G=u.length;C<G;C++){const v=u[C];v.onProgress&&v.onProgress(M)}_.enqueue(w),x()}})}}});return new Response(p)}else throw new Z_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{fa.add(e,c);const u=pi[e];delete pi[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class J_ extends Xr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_s("img");function l(){u(),fa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Q_ extends Xr{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new qu,a=new Ho(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:bn,o.wrapT=c.wrapT!==void 0?c.wrapT:bn,o.magFilter=c.magFilter!==void 0?c.magFilter:_n,o.minFilter=c.minFilter!==void 0?c.minFilter:_n,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Yi),c.mipmapCount===1&&(o.minFilter=_n),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,i),o}}class To extends Xr{constructor(e){super(e)}load(e,t,n,i){const s=new yn,o=new J_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Sa extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ho=new tt,Lc=new H,Ic=new H;class Wo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ic),t.updateMatrixWorld(),ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $_ extends Wo{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $u extends Sa{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DefaultUp),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new $_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dc=new tt,ss=new H,po=new H;class e0 extends Wo{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ss.setFromMatrixPosition(e.matrixWorld),n.position.copy(ss),po.copy(n.position),po.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(po),n.updateMatrixWorld(),i.makeTranslation(-ss.x,-ss.y,-ss.z),Dc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc)}}class ds extends Sa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new e0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class t0 extends Wo{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n0 extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DefaultUp),this.updateMatrix(),this.target=new Ft,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ef extends Sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tf{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class nf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rc(){return(typeof performance>"u"?Date:performance).now()}class i0{constructor(e,t,n=0,i=1/0){this.ray=new Fo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Co(e,this,n,t),n.sort(Pc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Co(e[i],this,n,t);return n.sort(Pc),n}}function Pc(r,e){return r.distance-e.distance}function Co(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Co(i[s],e,t,!0)}}class kc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class r0 extends Yu{constructor(e=10,t=10,n=4473924,i=8947848){n=new $e(n),i=new $e(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,m=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const h=d===s?n:i;h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3}const u=new Pn;u.setAttribute("position",new Pt(l,3)),u.setAttribute("color",new Pt(c,3));const f=new ca({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class s0 extends ba{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);const a0={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wa{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const o0=new xs(-1,1,1,-1,0,1),jo=new Pn;jo.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3));jo.setAttribute("uv",new Pt([0,2,0,0,2,0],2));class l0{constructor(e){this._mesh=new cn(jo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class c0 extends wa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Nu.clone(e.uniforms),this.material=new Zn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new l0(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nc extends wa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class u0 extends wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class f0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ze);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new c0(a0),this.clock=new nf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(o instanceof Nc?n=!0:o instanceof u0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rf extends wa{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const d0=(r,e,t)=>{r.renderer=new Hu({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new f0(r.renderer),r.composer.addPass(new rf(r.scene,Do(r.camera)))},Fc=(r,e,t)=>{r.renderer&&(e?r.renderer.outputEncoding=Ii:r.renderer.outputEncoding=Mt,t?r.renderer.toneMapping=ni:r.renderer.toneMapping=wu)},Oc=(r,e,t)=>{var n,i,s,o,a,l,c,u;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(l=(a=r.composer).setSize)==null||l.call(a,e.width,e.height),(u=(c=r.composer).setPixelRatio)==null||u.call(c,t))},Uc=(r,e,t)=>{r.renderer&&(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Wn=r=>r.userData,h0=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},sf=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),p0=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,m0=(r,e,t)=>{let n;const i=r.camera.subscribe(c=>n=c);At(i);let s;const o=r.pointer.subscribe(c=>s=c);At(o);let a;const l=c=>{var d,m;c.preventDefault();const u=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,h0(r,c);const f=g0(e,s,n);if(u==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!_0(f,a)){a=null;return}a=null}f&&((m=(d=Wn(f.object)).eventDispatcher)==null||m.call(d,u,{...f,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function g0(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=sf(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function _0(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const v0=(r,e)=>{let t;const n=r.pointerOverCanvas.subscribe(c=>t=c);At(n);let i;const s=r.camera.subscribe(c=>i=c);At(s);let o;const a=r.pointer.subscribe(c=>o=c);return At(a),{raycast:()=>{var f,d,m,g,h,p,_,x;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?sf(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&p0(e.lastIntersection,u)&&((p=(h=Wn(e.lastIntersection.object)).eventDispatcher)==null||p.call(h,"pointerleave",e.lastIntersection),(x=(_=Wn(u.object)).eventDispatcher)==null||x.call(_,"pointerenter",u)):(g=(m=Wn(u.object)).eventDispatcher)==null||g.call(m,"pointerenter",u):e.lastIntersection&&((d=(f=Wn(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},Ma=typeof window<"u",b0=r=>{if(!Ma)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),At(()=>{e&&cancelAnimationFrame(e)})},y0=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>(i.order??0)>(s.order??0)?1:-1).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},x0=r=>{r.debugFrameloop&&(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by ↴":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},S0=(r,e,t,n)=>{let i=Do(r.camera);const s=r.camera.subscribe(a=>i=a);At(s);const{raycast:o}=v0(r,e);b0(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(y0(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),x0(t),t.frameInvalidated=!1,t.advance=!1))})},w0=()=>{const r=new sn(75,0,.1,1e3);return Wn(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},M0=r=>{const e=r.size.subscribe(t=>{Wn(Do(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});At(e)},A0=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(_,x)=>{if(x=x??"default",a.audioListeners.has(x)){console.warn(`An AudioListener with the id "${x}" has already been added, aborting.`);return}a.audioListeners.set(x,_)},removeAudioListener:_=>{if(_=_??"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}a.audioListeners.delete(_)},getAudioListener:_=>{if(_=_??"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}return a.audioListeners.get(_)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Rf([n,i],([_,x])=>_||x),pointer:rn(new Ze),pointerOverCanvas:rn(!1),clock:new nf,camera:rn(w0()),scene:new Wu,renderer:void 0,composer:void 0,invalidate:_=>{l.frameInvalidated=!0,l.debugFrameloop&&_&&(l.invalidations[_]=l.invalidations[_]?l.invalidations[_]+1:1)},advance:()=>{l.advance=!0}},u={flat:rn(e),linear:rn(r),dpr:rn(t),setCamera:_=>{c.camera.set(_),c.composer&&(c.composer.passes.forEach(x=>{x instanceof rf&&(x.camera=_)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new i0,lastIntersection:null,addRaycastableObject:_=>{u.raycastableObjects.add(_)},removeRaycastableObject:_=>{u.raycastableObjects.delete(_)},addInteractiveObject:_=>{u.interactiveObjects.add(_)},removeInteractiveObject:_=>{u.interactiveObjects.delete(_)},addPass:_=>{c.composer&&(c.composer.addPass(_),c.invalidate("Canvas: adding pass"))},removePass:_=>{c.composer&&(c.composer.removePass(_),c.invalidate("Canvas: removing pass"))}},f={dispose:async(_=!1)=>{await hs(),!(!f.shouldDispose&&!_)&&(f.disposableObjects.forEach((x,S)=>{var w;(x===0||_)&&((w=S==null?void 0:S.dispose)==null||w.call(S),f.disposableObjects.delete(S))}),f.shouldDispose=!1)},collectDisposableObjects:(_,x)=>{const S=x??[];return _&&(_!=null&&_.dispose&&typeof _.dispose=="function"&&_.type!=="Scene"&&S.push(_),Object.entries(_).forEach(([w,M])=>{if(w==="parent"||w==="children"||typeof M!="object")return;const C=M;C!=null&&C.dispose&&f.collectDisposableObjects(C,S)})),S},addDisposableObjects:_=>{_.forEach(x=>{const S=f.disposableObjects.get(x);S?f.disposableObjects.set(x,S+1):f.disposableObjects.set(x,1)})},removeDisposableObjects:_=>{_.length!==0&&(_.forEach(x=>{const S=f.disposableObjects.get(x);S&&S>0&&f.disposableObjects.set(x,S-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return kt("threlte",c),kt("threlte-root",u),kt("threlte-render-context",l),kt("threlte-audio-context",a),kt("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function Aa(r,e){const t=rn(r);let n=r;const i=t.subscribe(a=>n=a);return At(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const wn=()=>qt("threlte");function E0(r){let e;const t=r[8].default,n=un(t,r,r[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&fn(n,t,i,i[7],e?hn(t,i[7],s,null):dn(i[7]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}const T0=()=>({onChildMount:qt("threlte-hierarchical-object-on-mount"),onChildDestroy:qt("threlte-hierarchical-object-on-destroy")}),af=()=>qt("threlte-hierarchical-parent-context");function C0(r,e,t){var _;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=x=>{a.push(x),t(1,a),l==null||l(x)};let{onChildDestroy:u=void 0}=e;const f=x=>{const S=a.findIndex(w=>w.uuid===x.uuid);S!==-1&&a.splice(S,1),t(1,a),u==null||u(x)},{invalidate:d}=wn(),m=af();Rt(r,m,x=>t(6,n=x));let{parent:g=n}=e;const h=T0();o&&((_=h.onChildMount)==null||_.call(h,o),d("HierarchicalObject: object added"));const p=Aa(o,(x,S)=>{var w,M;S&&((w=h.onChildDestroy)==null||w.call(h,S),d("HierarchicalObject: object added")),x&&((M=h.onChildMount)==null||M.call(h,x),d("HierarchicalObject: object removed"))});return At(()=>{var x;o&&((x=h.onChildDestroy)==null||x.call(h,o),d("HierarchicalObject: object removed"))}),kt("threlte-hierarchical-object-on-mount",c),kt("threlte-hierarchical-object-on-destroy",f),kt("threlte-hierarchical-parent-context",p),r.$$set=x=>{"object"in x&&t(3,o=x.object),"children"in x&&t(1,a=x.children),"onChildMount"in x&&t(4,l=x.onChildMount),"onChildDestroy"in x&&t(5,u=x.onChildDestroy),"parent"in x&&t(2,g=x.parent),"$$scope"in x&&t(7,s=x.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,g=n),r.$$.dirty&8&&p.set(o)},[m,a,g,o,l,u,n,s,i]}class L0 extends xt{constructor(e){super(),St(this,e,C0,E0,mt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function I0(r){let e;const t=r[1].default,n=un(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&fn(n,t,i,i[4],e?hn(t,i[4],s,null):dn(i[4]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function D0(r){let e,t;return e=new L0({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[I0]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function R0(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,o,a,i]}class qo extends xt{constructor(e){super(),St(this,e,R0,D0,mt,{object:0})}}const P0=()=>{const r=rn({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);At(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&r.set({width:a,height:l})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return Ma?(At(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function zc(r){let e,t;return e=new qo({props:{object:r[0].scene,$$slots:{default:[k0]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function k0(r){let e;const t=r[29].default,n=un(t,r,r[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&fn(n,t,i,i[33],e?hn(t,i[33],s,null):dn(i[33]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function N0(r){let e,t,n,i,s=r[2]&&zc(r);return{c(){e=Zi("canvas"),s&&s.c(),this.h()},l(o){e=Ji(o,"CANVAS",{class:!0});var a=Qi(e);s&&s.l(a),a.forEach(Oe),this.h()},h(){da(e,"class","svelte-o3oskp")},m(o,a){Xe(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[Xi(r[3].call(null,e)),Vn(e,"click",r[9]),Vn(e,"contextmenu",r[10]),Vn(e,"pointerup",r[13]),Vn(e,"pointerdown",r[11]),Vn(e,"pointermove",r[12]),Vn(e,"pointerenter",r[31]),Vn(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&pe(s,1)):(s=zc(o),s.c(),pe(s,1),s.m(e,null)):s&&(xn(),me(s,1,1,()=>{s=null}),Sn())},i(o){t||(pe(s),t=!0)},o(o){me(s),t=!1},d(o){o&&Oe(e),s&&s.d(),r[30](null),n=!1,ha(i)}}}const Bc=new Set;function F0(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=Ma?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:d="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:g=!0}=e,{shadowMapType:h=yu}=e,{size:p=void 0}=e,{rendererParameters:_=void 0}=e,x,S=!1;const w=rn(p),{parentSize:M,parentSizeAction:C}=P0(),G=A0(f,u,c,w,M,m,d),{getCtx:v,renderCtx:D,disposalCtx:L}=G,{ctx:j,rootCtx:K,audioCtx:V}=G;M0(j),Bc.add(j.invalidate),At(()=>{Bc.delete(j.invalidate)});const{size:U,scene:O}=j;Rt(r,U,ae=>t(26,i=ae));const{flat:B,linear:J,dpr:X}=K;Rt(r,B,ae=>t(27,s=ae)),Rt(r,J,ae=>t(28,o=ae)),Rt(r,X,ae=>t(25,n=ae)),kt("threlte-parent",rn(O)),Ur(()=>{x&&(d0(j,x,_),Fc(j,o,s),Oc(j,i,n),Uc(j,g,h),t(2,S=!0))}),S0(j,K,D,L);const{onClick:re,onContextMenu:ne,onPointerDown:R,onPointerMove:q,onPointerUp:ie}=m0(j,K,D);At(()=>{L.dispose(!0)});function Q(ae){Rn[ae?"unshift":"push"](()=>{x=ae,t(1,x)})}const te=()=>v().pointerOverCanvas.set(!0),F=()=>v().pointerOverCanvas.set(!1);return r.$$set=ae=>{"dpr"in ae&&t(14,c=ae.dpr),"flat"in ae&&t(15,u=ae.flat),"linear"in ae&&t(16,f=ae.linear),"frameloop"in ae&&t(17,d=ae.frameloop),"debugFrameloop"in ae&&t(18,m=ae.debugFrameloop),"shadows"in ae&&t(19,g=ae.shadows),"shadowMapType"in ae&&t(20,h=ae.shadowMapType),"size"in ae&&t(21,p=ae.size),"rendererParameters"in ae&&t(22,_=ae.rendererParameters),"$$scope"in ae&&t(33,l=ae.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&w.set(p),r.$$.dirty[0]&65536&&Pa(J,o=f,o),r.$$.dirty[0]&32768&&Pa(B,s=u,s),r.$$.dirty[0]&16384&&Pa(X,n=c,n),r.$$.dirty[0]&402653184&&Fc(v(),o,s),r.$$.dirty[0]&100663296&&Oc(v(),i,n),r.$$.dirty[0]&1572864&&Uc(v(),g,h)},[j,x,S,C,v,U,B,J,X,re,ne,R,q,ie,c,u,f,d,m,g,h,p,_,K,V,n,i,s,o,a,Q,te,F,l]}class O0 extends xt{constructor(e){super(),St(this,e,F0,N0,mt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Xo=()=>qt("threlte-root"),U0=()=>qt("threlte-disposal-context");function z0(r){let e;const t=r[9].default,n=un(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&fn(n,t,i,i[8],e?hn(t,i[8],s,null):dn(i[8]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}const Gc="threlte-disposable-object-context";function B0(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=U0();let{object:u=void 0}=e,f=u,{dispose:d=void 0}=e;const m=qt(Gc);Rt(r,m,p=>t(7,i=p));const g=rn(d??i??!0);Rt(r,g,p=>t(6,n=p)),kt(Gc,g);let h=n?a(u):[];return l(h),At(()=>{c(h)}),r.$$set=p=>{"object"in p&&t(2,u=p.object),"dispose"in p&&t(3,d=p.dispose),"$$scope"in p&&t(8,o=p.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&g.set(d??i??!0),r.$$.dirty&116&&u!==f&&(c(h),t(5,h=n?a(u):[]),l(h),t(4,f=u))},[m,g,u,d,f,h,n,i,o,s]}class vs extends xt{constructor(e){super(),St(this,e,B0,z0,mt,{object:2,dispose:3})}}function G0(r,e,t){let n,i,{object:s}=e;const o=Aa(s);Rt(r,o,c=>t(4,i=c));const a=qt("threlte-layers");Rt(r,a,c=>t(3,n=c));const{invalidate:l}=wn();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&o.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,a,s,n,i]}class V0 extends xt{constructor(e){super(),St(this,e,G0,null,mt,{object:2})}}const Ea=(r,e)=>{if(!Ma)return{start:()=>{},stop:()=>{},started:Pf(!1)};const t=qt("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=rn(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),At(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},of=()=>{const r=rn(!1);return(async()=>{await hs(),r.set(!0)})(),r};function H0(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new H,f=$i(),{invalidate:d}=wn(),m=of();Rt(r,m,S=>t(8,i=S));const g=async()=>{i||await hs(),f("transform")},h=async()=>{d("TransformableObject: transformed"),await g()};Wn(s).onTransform=h;const{start:p,stop:_}=Ea(async()=>{c&&!l&&c instanceof Ft&&(c.getWorldPosition(u),s.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),x=Aa(s);return Rt(r,x,S=>t(7,n=S)),r.$$set=S=>{"object"in S&&t(2,s=S.object),"position"in S&&t(3,o=S.position),"scale"in S&&t(4,a=S.scale),"rotation"in S&&t(5,l=S.rotation),"lookAt"in S&&t(6,c=S.lookAt)},r.$$.update=()=>{r.$$.dirty&4&&x.set(s),r.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),h()),c&&!l&&(c instanceof Ft?p():(_(),n.lookAt(c.x??0,c.y??0,c.z??0),h())),c||_()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),h()),r.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),h())},[m,x,s,o,a,l,c,n]}class lf extends xt{constructor(e){super(),St(this,e,H0,null,mt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function W0(r,e,t){let n,i,s,{object:o}=e,{viewportAware:a=!1}=e;const l=$i(),{camera:c,invalidate:u}=wn();Rt(r,c,C=>t(8,s=C));const f=new va,d=new tt,m=C=>C.type==="Mesh",g=new H,h=()=>s?(d.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),f.setFromProjectionMatrix(d),m(o)?f.intersectsObject(o):(o.getWorldPosition(g),f.containsPoint(g))):!0,p=of();Rt(r,p,C=>t(7,i=C));let{inViewport:_=h()}=e;const x=async C=>{C?(i||await hs(),l("viewportenter",o)):(i||await hs(),l("viewportleave",o))},{start:S,stop:w,started:M}=Ea(()=>{const C=h();_===void 0?(t(3,_=h()),x(_)):C!==_&&(x(C),t(3,_=C))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Rt(r,M,C=>t(6,n=C)),u("ViewportAwareObject"),r.$$set=C=>{"object"in C&&t(4,o=C.object),"viewportAware"in C&&t(5,a=C.viewportAware),"inViewport"in C&&t(3,_=C.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(a&&!n?S():!a&&n&&w())},[c,p,M,_,o,a,n]}class j0 extends xt{constructor(e){super(),St(this,e,W0,null,mt,{object:4,viewportAware:5,inViewport:3})}}function q0(r){let e;const t=r[14].default,n=un(t,r,r[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&fn(n,t,i,i[18],e?hn(t,i[18],s,null):dn(i[18]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function X0(r){let e,t;return e=new qo({props:{object:r[1],$$slots:{default:[q0]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Y0(r){let e,t,n,i,s,o,a,l,c;e=new V0({props:{object:r[1]}}),n=new lf({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new vs({props:{object:r[1],dispose:r[7],$$slots:{default:[X0]},$$scope:{ctx:r}}});function u(d){r[15](d)}let f={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(f.inViewport=r[0]),a=new j0({props:f}),Rn.push(()=>er(a,"inViewport",u)),a.$on("viewportenter",r[16]),a.$on("viewportleave",r[17]),{c(){Pe(e.$$.fragment),t=It(),Pe(n.$$.fragment),i=It(),Pe(s.$$.fragment),o=It(),Pe(a.$$.fragment)},l(d){Ue(e.$$.fragment,d),t=Dt(d),Ue(n.$$.fragment,d),i=Dt(d),Ue(s.$$.fragment,d),o=Dt(d),Ue(a.$$.fragment,d)},m(d,m){ke(e,d,m),Xe(d,t,m),ke(n,d,m),Xe(d,i,m),ke(s,d,m),Xe(d,o,m),ke(a,d,m),c=!0},p(d,[m]){const g={};m&2&&(g.object=d[1]),e.$set(g);const h={};m&2&&(h.object=d[1]),m&4&&(h.position=d[2]),m&16&&(h.rotation=d[4]),m&8&&(h.scale=d[3]),m&32&&(h.lookAt=d[5]),n.$set(h);const p={};m&2&&(p.object=d[1]),m&128&&(p.dispose=d[7]),m&262146&&(p.$$scope={dirty:m,ctx:d}),s.$set(p);const _={};m&2&&(_.object=d[1]),m&64&&(_.viewportAware=d[6]),!l&&m&1&&(l=!0,_.inViewport=d[0],tr(()=>l=!1)),a.$set(_)},i(d){c||(pe(e.$$.fragment,d),pe(n.$$.fragment,d),pe(s.$$.fragment,d),pe(a.$$.fragment,d),c=!0)},o(d){me(e.$$.fragment,d),me(n.$$.fragment,d),me(s.$$.fragment,d),me(a.$$.fragment,d),c=!1},d(d){Ne(e,d),d&&Oe(t),Ne(n,d),d&&Oe(i),Ne(s,d),d&&Oe(o),Ne(a,d)}}}function K0(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:h=void 0}=e,{visible:p=void 0}=e,{dispose:_=void 0}=e,{userData:x=void 0}=e;const{invalidate:S}=wn(),w=()=>s;function M(v){f=v,t(0,f)}function C(v){Et.call(this,r,v)}function G(v){Et.call(this,r,v)}return r.$$set=v=>{"object"in v&&t(1,s=v.object),"position"in v&&t(2,o=v.position),"scale"in v&&t(3,a=v.scale),"rotation"in v&&t(4,l=v.rotation),"lookAt"in v&&t(5,c=v.lookAt),"viewportAware"in v&&t(6,u=v.viewportAware),"inViewport"in v&&t(0,f=v.inViewport),"castShadow"in v&&t(8,d=v.castShadow),"receiveShadow"in v&&t(9,m=v.receiveShadow),"frustumCulled"in v&&t(10,g=v.frustumCulled),"renderOrder"in v&&t(11,h=v.renderOrder),"visible"in v&&t(12,p=v.visible),"dispose"in v&&t(7,_=v.dispose),"userData"in v&&t(13,x=v.userData),"$$scope"in v&&t(18,i=v.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(p!==void 0&&(w().visible=p),d!==void 0&&(w().castShadow=d),m!==void 0&&(w().receiveShadow=m),g!==void 0&&(w().frustumCulled=g),h!==void 0&&(w().renderOrder=h),x!==void 0&&(w().userData={...w().userData,...x}),S("Object3DInstance: props changed"))},[f,s,o,a,l,c,u,_,d,m,g,h,p,x,n,M,C,G,i]}class Yo extends xt{constructor(e){super(),St(this,e,K0,Y0,mt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function Z0(r){let e;const t=r[17].default,n=un(t,r,r[21],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&fn(n,t,i,i[21],e?hn(t,i[21],s,null):dn(i[21]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function J0(r){let e,t,n;function i(o){r[18](o)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[Z0]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new Yo({props:s}),Rn.push(()=>er(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){Pe(e.$$.fragment)},l(o){Ue(e.$$.fragment,o)},m(o,a){ke(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],tr(()=>t=!1)),e.$set(l)},i(o){n||(pe(e.$$.fragment,o),n=!0)},o(o){me(e.$$.fragment,o),n=!1},d(o){Ne(e,o)}}}function Q0(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:_=void 0}=e,{userData:x=void 0}=e,{dispose:S=void 0}=e,{useCamera:w=!1}=e;const M=Aa(o);Rt(r,M,L=>t(16,n=L));const{setCamera:C}=Xo();function G(L){d=L,t(0,d)}function v(L){Et.call(this,r,L)}function D(L){Et.call(this,r,L)}return r.$$set=L=>{"camera"in L&&t(1,o=L.camera),"position"in L&&t(2,a=L.position),"scale"in L&&t(3,l=L.scale),"rotation"in L&&t(4,c=L.rotation),"lookAt"in L&&t(5,u=L.lookAt),"viewportAware"in L&&t(6,f=L.viewportAware),"inViewport"in L&&t(0,d=L.inViewport),"castShadow"in L&&t(7,m=L.castShadow),"receiveShadow"in L&&t(8,g=L.receiveShadow),"frustumCulled"in L&&t(9,h=L.frustumCulled),"renderOrder"in L&&t(10,p=L.renderOrder),"visible"in L&&t(11,_=L.visible),"userData"in L&&t(12,x=L.userData),"dispose"in L&&t(13,S=L.dispose),"useCamera"in L&&t(15,w=L.useCamera),"$$scope"in L&&t(21,s=L.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&M.set(o),r.$$.dirty&98304&&w&&C(n)},[d,o,a,l,c,u,f,m,g,h,p,_,x,S,M,w,n,i,G,v,D,s]}class $0 extends xt{constructor(e){super(),St(this,e,Q0,J0,mt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}const Vc=[],Ko=(r,e)=>{const t=Vc.find(i=>i instanceof r);if(t)return t;const n=e();return Vc.push(n),n},Hc={type:"change"},mo={type:"start"},Wc={type:"end"};let ev=class extends rr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",Ot),this._domElementKeyEvents=z},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Hc),n.update(),s=i.NONE},this.update=function(){const z=new H,k=new ri().setFromUnitVectors(e.up,new H(0,1,0)),oe=k.clone().invert(),ce=new H,_e=new ri,De=2*Math.PI;return function(){const st=n.object.position;z.copy(st).sub(n.target),z.applyQuaternion(k),a.setFromVector3(z),n.autoRotate&&s===i.NONE&&D(G()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ct=n.minAzimuthAngle,yt=n.maxAzimuthAngle;return isFinite(ct)&&isFinite(yt)&&(ct<-Math.PI?ct+=De:ct>Math.PI&&(ct-=De),yt<-Math.PI?yt+=De:yt>Math.PI&&(yt-=De),ct<=yt?a.theta=Math.max(ct,Math.min(yt,a.theta)):a.theta=a.theta>(ct+yt)/2?Math.max(ct,a.theta):Math.min(yt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),z.setFromSpherical(a),z.applyQuaternion(oe),st.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ce.distanceToSquared(n.object.position)>o||8*(1-_e.dot(n.object.quaternion))>o?(n.dispatchEvent(Hc),ce.copy(n.object.position),_e.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",se),n.domElement.removeEventListener("pointerdown",Lt),n.domElement.removeEventListener("pointercancel",We),n.domElement.removeEventListener("wheel",Gt),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",ee),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ot)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new kc,l=new kc;let c=1;const u=new H;let f=!1;const d=new Ze,m=new Ze,g=new Ze,h=new Ze,p=new Ze,_=new Ze,x=new Ze,S=new Ze,w=new Ze,M=[],C={};function G(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function D(z){l.theta-=z}function L(z){l.phi-=z}const j=function(){const z=new H;return function(oe,ce){z.setFromMatrixColumn(ce,0),z.multiplyScalar(-oe),u.add(z)}}(),K=function(){const z=new H;return function(oe,ce){n.screenSpacePanning===!0?z.setFromMatrixColumn(ce,1):(z.setFromMatrixColumn(ce,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(oe),u.add(z)}}(),V=function(){const z=new H;return function(oe,ce){const _e=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;z.copy(De).sub(n.target);let Fe=z.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),j(2*oe*Fe/_e.clientHeight,n.object.matrix),K(2*ce*Fe/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(oe*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),K(ce*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(z){n.object.isPerspectiveCamera?c/=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*z)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(z){n.object.isPerspectiveCamera?c*=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/z)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(z){d.set(z.clientX,z.clientY)}function J(z){x.set(z.clientX,z.clientY)}function X(z){h.set(z.clientX,z.clientY)}function re(z){m.set(z.clientX,z.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const k=n.domElement;D(2*Math.PI*g.x/k.clientHeight),L(2*Math.PI*g.y/k.clientHeight),d.copy(m),n.update()}function ne(z){S.set(z.clientX,z.clientY),w.subVectors(S,x),w.y>0?U(v()):w.y<0&&O(v()),x.copy(S),n.update()}function R(z){p.set(z.clientX,z.clientY),_.subVectors(p,h).multiplyScalar(n.panSpeed),V(_.x,_.y),h.copy(p),n.update()}function q(z){z.deltaY<0?O(v()):z.deltaY>0&&U(v()),n.update()}function ie(z){let k=!1;switch(z.code){case n.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),k=!0;break}k&&(z.preventDefault(),n.update())}function Q(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const z=.5*(M[0].pageX+M[1].pageX),k=.5*(M[0].pageY+M[1].pageY);d.set(z,k)}}function te(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const z=.5*(M[0].pageX+M[1].pageX),k=.5*(M[0].pageY+M[1].pageY);h.set(z,k)}}function F(){const z=M[0].pageX-M[1].pageX,k=M[0].pageY-M[1].pageY,oe=Math.sqrt(z*z+k*k);x.set(0,oe)}function ae(){n.enableZoom&&F(),n.enablePan&&te()}function be(){n.enableZoom&&F(),n.enableRotate&&Q()}function Le(z){if(M.length==1)m.set(z.pageX,z.pageY);else{const oe=ze(z),ce=.5*(z.pageX+oe.x),_e=.5*(z.pageY+oe.y);m.set(ce,_e)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const k=n.domElement;D(2*Math.PI*g.x/k.clientHeight),L(2*Math.PI*g.y/k.clientHeight),d.copy(m)}function we(z){if(M.length===1)p.set(z.pageX,z.pageY);else{const k=ze(z),oe=.5*(z.pageX+k.x),ce=.5*(z.pageY+k.y);p.set(oe,ce)}_.subVectors(p,h).multiplyScalar(n.panSpeed),V(_.x,_.y),h.copy(p)}function Qe(z){const k=ze(z),oe=z.pageX-k.x,ce=z.pageY-k.y,_e=Math.sqrt(oe*oe+ce*ce);S.set(0,_e),w.set(0,Math.pow(S.y/x.y,n.zoomSpeed)),U(w.y),x.copy(S)}function He(z){n.enableZoom&&Qe(z),n.enablePan&&we(z)}function Ee(z){n.enableZoom&&Qe(z),n.enableRotate&&Le(z)}function Lt(z){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",de),n.domElement.addEventListener("pointerup",ee)),ye(z),z.pointerType==="touch"?N(z):bt(z))}function de(z){n.enabled!==!1&&(z.pointerType==="touch"?I(z):lt(z))}function ee(z){xe(z),M.length===0&&(n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",ee)),n.dispatchEvent(Wc),s=i.NONE}function We(z){xe(z)}function bt(z){let k;switch(z.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case lr.DOLLY:if(n.enableZoom===!1)return;J(z),s=i.DOLLY;break;case lr.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;X(z),s=i.PAN}else{if(n.enableRotate===!1)return;B(z),s=i.ROTATE}break;case lr.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;B(z),s=i.ROTATE}else{if(n.enablePan===!1)return;X(z),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(mo)}function lt(z){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;re(z);break;case i.DOLLY:if(n.enableZoom===!1)return;ne(z);break;case i.PAN:if(n.enablePan===!1)return;R(z);break}}function Gt(z){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(z.preventDefault(),n.dispatchEvent(mo),q(z),n.dispatchEvent(Wc))}function Ot(z){n.enabled===!1||n.enablePan===!1||ie(z)}function N(z){switch(Me(z),M.length){case 1:switch(n.touches.ONE){case cr.ROTATE:if(n.enableRotate===!1)return;Q(),s=i.TOUCH_ROTATE;break;case cr.PAN:if(n.enablePan===!1)return;te(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case cr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ae(),s=i.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(mo)}function I(z){switch(Me(z),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Le(z),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;we(z),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(z),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(z),n.update();break;default:s=i.NONE}}function se(z){n.enabled!==!1&&z.preventDefault()}function ye(z){M.push(z)}function xe(z){delete C[z.pointerId];for(let k=0;k<M.length;k++)if(M[k].pointerId==z.pointerId){M.splice(k,1);return}}function Me(z){let k=C[z.pointerId];k===void 0&&(k=new Ze,C[z.pointerId]=k),k.set(z.pageX,z.pageY)}function ze(z){const k=z.pointerId===M[0].pointerId?M[1]:M[0];return C[k.pointerId]}n.domElement.addEventListener("contextmenu",se),n.domElement.addEventListener("pointerdown",Lt),n.domElement.addEventListener("pointercancel",We),n.domElement.addEventListener("wheel",Gt,{passive:!1}),this.update()}};function tv(r){let e,t,n,i;return e=new vs({props:{dispose:r[2],object:r[0]}}),n=new lf({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){Pe(e.$$.fragment),t=It(),Pe(n.$$.fragment)},l(s){Ue(e.$$.fragment,s),t=Dt(s),Ue(n.$$.fragment,s)},m(s,o){ke(e,s,o),Xe(s,t,o),ke(n,s,o),i=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const l={};o[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(pe(e.$$.fragment,s),pe(n.$$.fragment,s),i=!0)},o(s){me(e.$$.fragment,s),me(n.$$.fragment,s),i=!1},d(s){Ne(e,s),s&&Oe(t),Ne(n,s)}}}function nv(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:d=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:h=void 0}=e,{maxPolarAngle:p=void 0}=e,{maxZoom:_=void 0}=e,{minAzimuthAngle:x=void 0}=e,{minDistance:S=void 0}=e,{minPolarAngle:w=void 0}=e,{minZoom:M=void 0}=e,{mouseButtons:C=void 0}=e,{panSpeed:G=void 0}=e,{rotateSpeed:v=void 0}=e,{screenSpacePanning:D=void 0}=e,{touches:L=void 0}=e,{zoomSpeed:j=void 0}=e,{target:K=void 0}=e,{dispose:V=void 0}=e;const U=af();Rt(r,U,F=>t(30,n=F));const{renderer:O,invalidate:B}=wn();if(!O)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Uo))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const J=$i(),X=()=>{B("Orbitcontrols: change event"),J("change")},re=()=>J("start"),ne=()=>J("end"),R=new ev(n,O.domElement);Wn(n).orbitControls=R,R.addEventListener("change",X),R.addEventListener("start",re),R.addEventListener("end",ne),At(()=>{n&&delete Wn(n).orbitControls,R.removeEventListener("change",X),R.removeEventListener("start",re),R.removeEventListener("end",ne)});const{start:q,stop:ie}=Ea(()=>R.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),Q=new Ft,te=()=>{t(0,R.target=Q.position,R),R.update(),B("OrbitControls: target changed")};return r.$$set=F=>{"autoRotate"in F&&t(6,i=F.autoRotate),"autoRotateSpeed"in F&&t(7,s=F.autoRotateSpeed),"dampingFactor"in F&&t(8,o=F.dampingFactor),"enableDamping"in F&&t(9,a=F.enableDamping),"enabled"in F&&t(10,l=F.enabled),"enablePan"in F&&t(11,c=F.enablePan),"enableRotate"in F&&t(12,u=F.enableRotate),"enableZoom"in F&&t(13,f=F.enableZoom),"keyPanSpeed"in F&&t(14,d=F.keyPanSpeed),"keys"in F&&t(15,m=F.keys),"maxAzimuthAngle"in F&&t(16,g=F.maxAzimuthAngle),"maxDistance"in F&&t(17,h=F.maxDistance),"maxPolarAngle"in F&&t(18,p=F.maxPolarAngle),"maxZoom"in F&&t(19,_=F.maxZoom),"minAzimuthAngle"in F&&t(20,x=F.minAzimuthAngle),"minDistance"in F&&t(21,S=F.minDistance),"minPolarAngle"in F&&t(22,w=F.minPolarAngle),"minZoom"in F&&t(23,M=F.minZoom),"mouseButtons"in F&&t(24,C=F.mouseButtons),"panSpeed"in F&&t(25,G=F.panSpeed),"rotateSpeed"in F&&t(26,v=F.rotateSpeed),"screenSpacePanning"in F&&t(27,D=F.screenSpacePanning),"touches"in F&&t(28,L=F.touches),"zoomSpeed"in F&&t(29,j=F.zoomSpeed),"target"in F&&t(1,K=F.target),"dispose"in F&&t(2,V=F.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,R.autoRotate=i,R),s!==void 0&&t(0,R.autoRotateSpeed=s,R),o!==void 0&&t(0,R.dampingFactor=o,R),a!==void 0&&t(0,R.enableDamping=a,R),l!==void 0&&t(0,R.enabled=l,R),c!==void 0&&t(0,R.enablePan=c,R),u!==void 0&&t(0,R.enableRotate=u,R),f!==void 0&&t(0,R.enableZoom=f,R),d!==void 0&&t(0,R.keyPanSpeed=d,R),m!==void 0&&t(0,R.keys=m,R),g!==void 0&&t(0,R.maxAzimuthAngle=g,R),h!==void 0&&t(0,R.maxDistance=h,R),p!==void 0&&t(0,R.maxPolarAngle=p,R),_!==void 0&&t(0,R.maxZoom=_,R),x!==void 0&&t(0,R.minAzimuthAngle=x,R),S!==void 0&&t(0,R.minDistance=S,R),w!==void 0&&t(0,R.minPolarAngle=w,R),M!==void 0&&t(0,R.minZoom=M,R),C!==void 0&&t(0,R.mouseButtons=C,R),G!==void 0&&t(0,R.panSpeed=G,R),v!==void 0&&t(0,R.rotateSpeed=v,R),D!==void 0&&t(0,R.screenSpacePanning=D,R),L!==void 0&&t(0,R.touches=L,R),j!==void 0&&t(0,R.zoomSpeed=j,R),R.update(),B("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||a?q():ie())},[R,K,V,U,Q,te,i,s,o,a,l,c,u,f,d,m,g,h,p,_,x,S,w,M,C,G,v,D,L,j]}class iv extends xt{constructor(e){super(),St(this,e,nv,tv,mt,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}function rv(r,e,t){let{object:n}=e,i=n,{interactive:s=!1}=e,{ignorePointer:o=!1}=e;const a=$i(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=Xo(),{invalidate:d}=wn(),m=h=>{f(h),c(h),delete Wn(h).eventDispatcher},g=(h,p,_)=>{Wn(h).eventDispatcher=a,p?(f(h),c(h)):(u(h),_?l(h):c(h))};return At(()=>{m(n),d("InteractiveObject: object removed")}),r.$$set=h=>{"object"in h&&t(0,n=h.object),"interactive"in h&&t(1,s=h.interactive),"ignorePointer"in h&&t(2,o=h.ignorePointer)},r.$$.update=()=>{r.$$.dirty&15&&(n!==i?(m(i),g(n,o,s),d("InteractiveObject: object changed"),t(3,i=n)):n===i&&(g(n,o,s),d("InteractiveObject: props changed")))},[n,s,o,i]}class sv extends xt{constructor(e){super(),St(this,e,rv,null,mt,{object:0,interactive:1,ignorePointer:2})}}function av(r){let e;const t=r[16].default,n=un(t,r,r[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&134217728)&&fn(n,t,i,i[27],e?hn(t,i[27],s,null):dn(i[27]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function ov(r){let e,t,n,i,s;function o(l){r[17](l)}let a={object:r[1],lookAt:r[5],position:r[2],scale:r[3],rotation:r[4],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],visible:r[11],userData:r[12],dispose:r[13],viewportAware:r[6],$$slots:{default:[av]},$$scope:{ctx:r}};return r[0]!==void 0&&(a.inViewport=r[0]),e=new Yo({props:a}),Rn.push(()=>er(e,"inViewport",o)),e.$on("viewportenter",r[18]),e.$on("viewportleave",r[19]),i=new sv({props:{object:r[1],interactive:r[14],ignorePointer:r[15]}}),i.$on("click",r[20]),i.$on("contextmenu",r[21]),i.$on("pointerup",r[22]),i.$on("pointerdown",r[23]),i.$on("pointerenter",r[24]),i.$on("pointerleave",r[25]),i.$on("pointermove",r[26]),{c(){Pe(e.$$.fragment),n=It(),Pe(i.$$.fragment)},l(l){Ue(e.$$.fragment,l),n=Dt(l),Ue(i.$$.fragment,l)},m(l,c){ke(e,l,c),Xe(l,n,c),ke(i,l,c),s=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],tr(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){s||(pe(e.$$.fragment,l),pe(i.$$.fragment,l),s=!0)},o(l){me(e.$$.fragment,l),me(i.$$.fragment,l),s=!1},d(l){Ne(e,l),l&&Oe(n),Ne(i,l)}}}function lv(r,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:h=void 0}=e,{visible:p=void 0}=e,{userData:_=void 0}=e,{dispose:x=void 0}=e,{interactive:S=!1}=e,{ignorePointer:w=!1}=e;function M(O){f=O,t(0,f)}function C(O){Et.call(this,r,O)}function G(O){Et.call(this,r,O)}function v(O){Et.call(this,r,O)}function D(O){Et.call(this,r,O)}function L(O){Et.call(this,r,O)}function j(O){Et.call(this,r,O)}function K(O){Et.call(this,r,O)}function V(O){Et.call(this,r,O)}function U(O){Et.call(this,r,O)}return r.$$set=O=>{"mesh"in O&&t(1,s=O.mesh),"position"in O&&t(2,o=O.position),"scale"in O&&t(3,a=O.scale),"rotation"in O&&t(4,l=O.rotation),"lookAt"in O&&t(5,c=O.lookAt),"viewportAware"in O&&t(6,u=O.viewportAware),"inViewport"in O&&t(0,f=O.inViewport),"castShadow"in O&&t(7,d=O.castShadow),"receiveShadow"in O&&t(8,m=O.receiveShadow),"frustumCulled"in O&&t(9,g=O.frustumCulled),"renderOrder"in O&&t(10,h=O.renderOrder),"visible"in O&&t(11,p=O.visible),"userData"in O&&t(12,_=O.userData),"dispose"in O&&t(13,x=O.dispose),"interactive"in O&&t(14,S=O.interactive),"ignorePointer"in O&&t(15,w=O.ignorePointer),"$$scope"in O&&t(27,i=O.$$scope)},[f,s,o,a,l,c,u,d,m,g,h,p,_,x,S,w,n,M,C,G,v,D,L,j,K,V,U,i]}class cv extends xt{constructor(e){super(),St(this,e,lv,ov,mt,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function uv(r){let e;const t=r[20].default,n=un(t,r,r[31],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&1)&&fn(n,t,i,i[31],e?hn(t,i[31],s,null):dn(i[31]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function fv(r){let e,t,n,i,s,o,a;e=new vs({props:{dispose:r[11],object:r[15]}}),n=new vs({props:{dispose:r[11],object:r[16]}});function l(u){r[21](u)}let c={mesh:r[17],position:r[1],scale:r[2],rotation:r[3],lookAt:r[14],castShadow:r[5],receiveShadow:r[6],frustumCulled:r[7],renderOrder:r[8],visible:r[9],interactive:r[12],ignorePointer:r[13],userData:r[10],dispose:r[11],viewportAware:r[4],$$slots:{default:[uv]},$$scope:{ctx:r}};return r[0]!==void 0&&(c.inViewport=r[0]),s=new cv({props:c}),Rn.push(()=>er(s,"inViewport",l)),s.$on("click",r[22]),s.$on("contextmenu",r[23]),s.$on("pointerup",r[24]),s.$on("pointerdown",r[25]),s.$on("pointerenter",r[26]),s.$on("pointerleave",r[27]),s.$on("pointermove",r[28]),s.$on("viewportenter",r[29]),s.$on("viewportleave",r[30]),{c(){Pe(e.$$.fragment),t=It(),Pe(n.$$.fragment),i=It(),Pe(s.$$.fragment)},l(u){Ue(e.$$.fragment,u),t=Dt(u),Ue(n.$$.fragment,u),i=Dt(u),Ue(s.$$.fragment,u)},m(u,f){ke(e,u,f),Xe(u,t,f),ke(n,u,f),Xe(u,i,f),ke(s,u,f),a=!0},p(u,f){const d={};f[0]&2048&&(d.dispose=u[11]),f[0]&32768&&(d.object=u[15]),e.$set(d);const m={};f[0]&2048&&(m.dispose=u[11]),f[0]&65536&&(m.object=u[16]),n.$set(m);const g={};f[0]&2&&(g.position=u[1]),f[0]&4&&(g.scale=u[2]),f[0]&8&&(g.rotation=u[3]),f[0]&16384&&(g.lookAt=u[14]),f[0]&32&&(g.castShadow=u[5]),f[0]&64&&(g.receiveShadow=u[6]),f[0]&128&&(g.frustumCulled=u[7]),f[0]&256&&(g.renderOrder=u[8]),f[0]&512&&(g.visible=u[9]),f[0]&4096&&(g.interactive=u[12]),f[0]&8192&&(g.ignorePointer=u[13]),f[0]&1024&&(g.userData=u[10]),f[0]&2048&&(g.dispose=u[11]),f[0]&16&&(g.viewportAware=u[4]),f[1]&1&&(g.$$scope={dirty:f,ctx:u}),!o&&f[0]&1&&(o=!0,g.inViewport=u[0],tr(()=>o=!1)),s.$set(g)},i(u){a||(pe(e.$$.fragment,u),pe(n.$$.fragment,u),pe(s.$$.fragment,u),a=!0)},o(u){me(e.$$.fragment,u),me(n.$$.fragment,u),me(s.$$.fragment,u),a=!1},d(u){Ne(e,u),u&&Oe(t),Ne(n,u),u&&Oe(i),Ne(s,u)}}}function dv(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:h=void 0}=e,{dispose:p=void 0}=e,{interactive:_=!1}=e,{ignorePointer:x=!1}=e,{lookAt:S=void 0}=e,{geometry:w}=e,{material:M}=e,C=M,G=w;const{invalidate:v}=wn(),D=new cn(w,M),L=()=>D;function j(R){c=R,t(0,c)}function K(R){Et.call(this,r,R)}function V(R){Et.call(this,r,R)}function U(R){Et.call(this,r,R)}function O(R){Et.call(this,r,R)}function B(R){Et.call(this,r,R)}function J(R){Et.call(this,r,R)}function X(R){Et.call(this,r,R)}function re(R){Et.call(this,r,R)}function ne(R){Et.call(this,r,R)}return r.$$set=R=>{"position"in R&&t(1,s=R.position),"scale"in R&&t(2,o=R.scale),"rotation"in R&&t(3,a=R.rotation),"viewportAware"in R&&t(4,l=R.viewportAware),"inViewport"in R&&t(0,c=R.inViewport),"castShadow"in R&&t(5,u=R.castShadow),"receiveShadow"in R&&t(6,f=R.receiveShadow),"frustumCulled"in R&&t(7,d=R.frustumCulled),"renderOrder"in R&&t(8,m=R.renderOrder),"visible"in R&&t(9,g=R.visible),"userData"in R&&t(10,h=R.userData),"dispose"in R&&t(11,p=R.dispose),"interactive"in R&&t(12,_=R.interactive),"ignorePointer"in R&&t(13,x=R.ignorePointer),"lookAt"in R&&t(14,S=R.lookAt),"geometry"in R&&t(15,w=R.geometry),"material"in R&&t(16,M=R.material),"$$scope"in R&&t(31,i=R.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&327680&&(M!==C?(L().material=M,v("Mesh: material changed")):v("Mesh: material props changed"),t(18,C=M)),r.$$.dirty[0]&557056&&(w!==G?(L().geometry=w,v("Mesh: geometry changed")):v("Mesh: geometry props changed"),t(19,G=w))},[c,s,o,a,l,u,f,d,m,g,h,p,_,x,S,w,M,D,C,G,n,j,K,V,U,O,B,J,X,re,ne,i]}class hv extends xt{constructor(e){super(),St(this,e,dv,fv,mt,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const cf=new Ft;cf.scale.set(0,0,0);cf.matrix;new tt().fromArray(new Array(16).fill(0));new $e(16777215);function pv(r){let e;const t=r[14].default,n=un(t,r,r[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&fn(n,t,i,i[18],e?hn(t,i[18],s,null):dn(i[18]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function mv(r){let e,t,n;function i(o){r[15](o)}let s={object:r[13],position:r[1],scale:r[2],rotation:r[3],lookAt:r[4],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],castShadow:r[6],receiveShadow:r[7],viewportAware:r[5],$$slots:{default:[pv]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new Yo({props:s}),Rn.push(()=>er(e,"inViewport",i)),e.$on("viewportenter",r[16]),e.$on("viewportleave",r[17]),{c(){Pe(e.$$.fragment)},l(o){Ue(e.$$.fragment,o)},m(o,a){ke(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.position=o[1]),a&4&&(l.scale=o[2]),a&8&&(l.rotation=o[3]),a&16&&(l.lookAt=o[4]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&32&&(l.viewportAware=o[5]),a&262144&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],tr(()=>t=!1)),e.$set(l)},i(o){n||(pe(e.$$.fragment,o),n=!0)},o(o){me(e.$$.fragment,o),n=!1},d(o){Ne(e,o)}}}function gv(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:m=void 0}=e,{renderOrder:g=void 0}=e,{visible:h=void 0}=e,{userData:p=void 0}=e,{dispose:_=void 0}=e;const x=new ti;function S(C){u=C,t(0,u)}function w(C){Et.call(this,r,C)}function M(C){Et.call(this,r,C)}return r.$$set=C=>{"position"in C&&t(1,s=C.position),"scale"in C&&t(2,o=C.scale),"rotation"in C&&t(3,a=C.rotation),"lookAt"in C&&t(4,l=C.lookAt),"viewportAware"in C&&t(5,c=C.viewportAware),"inViewport"in C&&t(0,u=C.inViewport),"castShadow"in C&&t(6,f=C.castShadow),"receiveShadow"in C&&t(7,d=C.receiveShadow),"frustumCulled"in C&&t(8,m=C.frustumCulled),"renderOrder"in C&&t(9,g=C.renderOrder),"visible"in C&&t(10,h=C.visible),"userData"in C&&t(11,p=C.userData),"dispose"in C&&t(12,_=C.dispose),"$$scope"in C&&t(18,i=C.$$scope)},[u,s,o,a,l,c,f,d,m,g,h,p,_,x,n,S,w,M,i]}class _v extends xt{constructor(e){super(),St(this,e,gv,mv,mt,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,group:13})}get group(){return this.$$.ctx[13]}}const uf=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},go=Symbol("initialValueBeforeAttach"),vv=()=>{const{invalidate:r}=wn();let e=!1,t=go,n,i,s;const o=(l,c,u)=>{if(a(),!u){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(c,l);else{const{target:f,key:d}=uf(c,u);t=f[d],f[d]=l,i=f,s=d}e=!0,r()}},a=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==go&&(i[s]=t,t=go,i=void 0,s=void 0),e=!1,r())};return At(()=>{a()}),{update:o}},bv=r=>r&&r.isCamera,ff=r=>r&&r.isOrthographicCamera,df=r=>r&&r.isPerspectiveCamera,yv=r=>df(r)||ff(r),xv=()=>{const{invalidate:r,size:e}=wn(),{setCamera:t}=Xo();let n,i;At(()=>{i==null||i()});const s=l=>{n&&(ff(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):df(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!yv(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!bv(l)||!c||(t(l),r())}}},jc=r=>!!(r!=null&&r.addEventListener),Sv=()=>{const r=$i(),e=zr(),t=d=>{d!=null&&d.type&&r(d.type,d)},n=(d,m)=>{jc(d)&&m.forEach(g=>{d.removeEventListener(g,t)})},i=(d,m)=>{jc(d)&&m.forEach(g=>{d.addEventListener(g,t)})};let s=[],o;const a=rn([]),l=a.subscribe(d=>{n(o,s),i(o,d),s=d});At(l);const c=rn(),u=c.subscribe(d=>{n(o,s),i(d,s),o=d});return At(u),At(()=>{n(o,s)}),Ur(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:d=>{c.set(d)}}},wv=["$$scope","$$slots","type","args","attach","instance"],Mv=["fov","aspect","near","far","left","right","top","bottom","zoom"],Av=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Ev=()=>{const{invalidate:r}=wn(),e=new Map,t=(i,s,o,a)=>{var u,f;if(Av(o)){const d=e.get(s);if(d&&d.instance===i&&d.value===o)return;e.set(s,{instance:i,value:o})}const{key:l,target:c}=uf(i,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(o);else if(typeof((f=c[l])==null?void 0:f.set)=="function")Array.isArray(o)?c[l].set(...o):c[l].set(o);else{if(c[l]=o,a.manualCamera)return;Mv.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,o)=>{for(const a in s)wv.includes(a)||t(i,a,s[a],o),r()}}},Tv=r=>({ref:r&1}),qc=r=>({ref:r[0]}),Cv=r=>({ref:r&1}),Xc=r=>({ref:r[0]});function Yc(r){let e,t;return e=new vs({props:{object:r[0],dispose:r[1]}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Lv(r){let e;const t=r[12].default,n=un(t,r,r[13],qc);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&fn(n,t,i,i[13],e?hn(t,i[13],s,Tv):dn(i[13]),qc)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function Iv(r){let e,t;return e=new qo({props:{object:r[0],$$slots:{default:[Dv]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Dv(r){let e;const t=r[12].default,n=un(t,r,r[13],Xc);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&fn(n,t,i,i[13],e?hn(t,i[13],s,Cv):dn(i[13]),Xc)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function Rv(r){let e=r[4](r[0]),t,n,i,s,o,a,l=e&&Yc(r);const c=[Iv,Lv],u=[];function f(d,m){return m&1&&(n=null),n==null&&(n=!!d[3](d[0])),n?0:1}return i=f(r,-1),s=u[i]=c[i](r),{c(){l&&l.c(),t=It(),s.c(),o=nt()},l(d){l&&l.l(d),t=Dt(d),s.l(d),o=nt()},m(d,m){l&&l.m(d,m),Xe(d,t,m),u[i].m(d,m),Xe(d,o,m),a=!0},p(d,[m]){m&1&&(e=d[4](d[0])),e?l?(l.p(d,m),m&1&&pe(l,1)):(l=Yc(d),l.c(),pe(l,1),l.m(t.parentNode,t)):l&&(xn(),me(l,1,1,()=>{l=null}),Sn());let g=i;i=f(d,m),i===g?u[i].p(d,m):(xn(),me(u[g],1,1,()=>{u[g]=null}),Sn(),s=u[i],s?s.p(d,m):(s=u[i]=c[i](d),s.c()),pe(s,1),s.m(o.parentNode,o))},i(d){a||(pe(l),pe(s),a=!0)},o(d){me(l),me(s),a=!1},d(d){l&&l.d(d),d&&Oe(t),u[i].d(d),d&&Oe(o)}}}function Pv(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=qn(e,n),s,{$$slots:o={},$$scope:a}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:f=void 0}=e,{makeDefault:d=void 0}=e,{dispose:m=void 0}=e;const g=qt("threlte-hierarchical-parent-context");Rt(r,g,L=>t(11,s=L));const h=L=>typeof L=="function"&&/^\s*class\s+/.test(L.toString()),p=L=>Array.isArray(L);let{ref:_=h(l)&&p(c)?new l(...c):h(l)?new l:l}=e,x=!1;const S=rn(_);kt("threlte-hierarchical-parent-context",S);const w=Ev(),M=xv(),C=vv(),G=Sv(),v=L=>!!L.isObject3D,D=L=>L.dispose!==void 0;return r.$$set=L=>{e=tn(tn({},e),Br(L)),t(21,i=qn(e,n)),"type"in L&&t(5,l=L.type),"args"in L&&t(6,c=L.args),"attach"in L&&t(7,u=L.attach),"manual"in L&&t(8,f=L.manual),"makeDefault"in L&&t(9,d=L.makeDefault),"dispose"in L&&t(1,m=L.dispose),"ref"in L&&t(0,_=L.ref),"$$scope"in L&&t(13,a=L.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(x?t(0,_=h(l)&&p(c)?new l(...c):h(l)?new l:l):t(10,x=!0)),r.$$.dirty&1&&S.set(_),w.updateProps(_,i,{manualCamera:f}),r.$$.dirty&257&&M.update(_,f),r.$$.dirty&513&&M.makeDefaultCamera(_,d),r.$$.dirty&2177&&C.update(_,s,u),r.$$.dirty&1&&G.updateRef(_)},[_,m,g,v,D,l,c,u,f,d,x,s,o,a]}class en extends xt{constructor(e){super(),St(this,e,Pv,Rv,mt,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function kv(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Kc extends xt{constructor(e){super(),St(this,e,kv,null,mt,{})}}new Proxy(Kc,{get(r,e){return r[e]||Kc}});Ko(To,()=>new To(Qu));function Mr(r,e="xyz"){var t;if(r.hasAttribute(e)){const n=(t=r.getAttribute(e))==null?void 0:t.split(" ");if(n){const i=[];for(const s of n)i.push(parseFloat(s));return i}}}function Nv(r){return r?new $e(r[0],r[1],r[2]):new $e("white")}class Zc extends Q_{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case d:case h:(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)&&console.error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case g:case p:case _:B.colormap_type&&console.error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case f:console.error("THREE.TGALoader: No data.");default:console.error('THREE.TGALoader: Invalid type "%s".',B.image_type)}(B.width<=0||B.height<=0)&&console.error("THREE.TGALoader: Invalid image size."),B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32&&console.error('THREE.TGALoader: Invalid pixel size "%s".',B.pixel_size)}function n(B,J,X,re,ne){let R,q;const ie=X.pixel_size>>3,Q=X.width*X.height*ie;if(J&&(q=ne.subarray(re,re+=X.colormap_length*(X.colormap_size>>3))),B){R=new Uint8Array(Q);let te,F,ae,be=0;const Le=new Uint8Array(ie);for(;be<Q;)if(te=ne[re++],F=(te&127)+1,te&128){for(ae=0;ae<ie;++ae)Le[ae]=ne[re++];for(ae=0;ae<F;++ae)R.set(Le,be+ae*ie);be+=ie*F}else{for(F*=ie,ae=0;ae<F;++ae)R[be+ae]=ne[re++];be+=F}}else R=ne.subarray(re,re+=J?X.width*X.height:Q);return{pixel_data:R,palettes:q}}function i(B,J,X,re,ne,R,q,ie,Q){const te=Q;let F,ae=0,be,Le;const we=L.width;for(Le=J;Le!==re;Le+=X)for(be=ne;be!==q;be+=R,ae++)F=ie[ae],B[(be+we*Le)*4+3]=255,B[(be+we*Le)*4+2]=te[F*3+0],B[(be+we*Le)*4+1]=te[F*3+1],B[(be+we*Le)*4+0]=te[F*3+2];return B}function s(B,J,X,re,ne,R,q,ie){let Q,te=0,F,ae;const be=L.width;for(ae=J;ae!==re;ae+=X)for(F=ne;F!==q;F+=R,te+=2)Q=ie[te+0]+(ie[te+1]<<8),B[(F+be*ae)*4+0]=(Q&31744)>>7,B[(F+be*ae)*4+1]=(Q&992)>>2,B[(F+be*ae)*4+2]=(Q&31)<<3,B[(F+be*ae)*4+3]=Q&32768?0:255;return B}function o(B,J,X,re,ne,R,q,ie){let Q=0,te,F;const ae=L.width;for(F=J;F!==re;F+=X)for(te=ne;te!==q;te+=R,Q+=3)B[(te+ae*F)*4+3]=255,B[(te+ae*F)*4+2]=ie[Q+0],B[(te+ae*F)*4+1]=ie[Q+1],B[(te+ae*F)*4+0]=ie[Q+2];return B}function a(B,J,X,re,ne,R,q,ie){let Q=0,te,F;const ae=L.width;for(F=J;F!==re;F+=X)for(te=ne;te!==q;te+=R,Q+=4)B[(te+ae*F)*4+2]=ie[Q+0],B[(te+ae*F)*4+1]=ie[Q+1],B[(te+ae*F)*4+0]=ie[Q+2],B[(te+ae*F)*4+3]=ie[Q+3];return B}function l(B,J,X,re,ne,R,q,ie){let Q,te=0,F,ae;const be=L.width;for(ae=J;ae!==re;ae+=X)for(F=ne;F!==q;F+=R,te++)Q=ie[te],B[(F+be*ae)*4+0]=Q,B[(F+be*ae)*4+1]=Q,B[(F+be*ae)*4+2]=Q,B[(F+be*ae)*4+3]=255;return B}function c(B,J,X,re,ne,R,q,ie){let Q=0,te,F;const ae=L.width;for(F=J;F!==re;F+=X)for(te=ne;te!==q;te+=R,Q+=2)B[(te+ae*F)*4+0]=ie[Q+0],B[(te+ae*F)*4+1]=ie[Q+0],B[(te+ae*F)*4+2]=ie[Q+0],B[(te+ae*F)*4+3]=ie[Q+1];return B}function u(B,J,X,re,ne){let R,q,ie,Q,te,F;switch((L.flags&x)>>S){default:case C:R=0,ie=1,te=J,q=0,Q=1,F=X;break;case w:R=0,ie=1,te=J,q=X-1,Q=-1,F=-1;break;case G:R=J-1,ie=-1,te=-1,q=0,Q=1,F=X;break;case M:R=J-1,ie=-1,te=-1,q=X-1,Q=-1,F=-1;break}if(V)switch(L.pixel_size){case 8:l(B,q,Q,F,R,ie,te,re);break;case 16:c(B,q,Q,F,R,ie,te,re);break;default:console.error("THREE.TGALoader: Format not supported.");break}else switch(L.pixel_size){case 8:i(B,q,Q,F,R,ie,te,re,ne);break;case 16:s(B,q,Q,F,R,ie,te,re);break;case 24:o(B,q,Q,F,R,ie,te,re);break;case 32:a(B,q,Q,F,R,ie,te,re);break;default:console.error("THREE.TGALoader: Format not supported.");break}return B}const f=0,d=1,m=2,g=3,h=9,p=10,_=11,x=48,S=4,w=0,M=1,C=2,G=3;e.length<19&&console.error("THREE.TGALoader: Not enough data to contain header.");let v=0;const D=new Uint8Array(e),L={id_length:D[v++],colormap_type:D[v++],image_type:D[v++],colormap_index:D[v++]|D[v++]<<8,colormap_length:D[v++]|D[v++]<<8,colormap_size:D[v++],origin:[D[v++]|D[v++]<<8,D[v++]|D[v++]<<8],width:D[v++]|D[v++]<<8,height:D[v++]|D[v++]<<8,pixel_size:D[v++],flags:D[v++]};t(L),L.id_length+v>e.length&&console.error("THREE.TGALoader: No data."),v+=L.id_length;let j=!1,K=!1,V=!1;switch(L.image_type){case h:j=!0,K=!0;break;case d:K=!0;break;case p:j=!0;break;case m:break;case _:j=!0,V=!0;break;case g:V=!0;break}const U=new Uint8Array(L.width*L.height*4),O=n(j,K,L,v,D);return u(U,L.width,L.height,O.pixel_data,O.palettes),{data:U,width:L.width,height:L.height,flipY:!0,generateMipmaps:!0,minFilter:Yi}}}class Jc extends Xr{constructor(e){super(e)}load(e,t,n,i){const s=this,o=s.path===""?tf.extractUrlBase(e):s.path,a=new Ho(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){function n(y,b){const E=[],A=y.childNodes;for(let T=0,$=A.length;T<$;T++){const fe=A[T];fe.nodeName===b&&E.push(fe)}return E}function i(y){if(y.length===0)return[];const b=y.trim().split(/\s+/),E=new Array(b.length);for(let A=0,T=b.length;A<T;A++)E[A]=b[A];return E}function s(y){if(y.length===0)return[];const b=y.trim().split(/\s+/),E=new Array(b.length);for(let A=0,T=b.length;A<T;A++)E[A]=parseFloat(b[A]);return E}function o(y){if(y.length===0)return[];const b=y.trim().split(/\s+/),E=new Array(b.length);for(let A=0,T=b.length;A<T;A++)E[A]=parseInt(b[A]);return E}function a(y){return y.substring(1)}function l(){return"three_default_"+Sf++}function c(y){return Object.keys(y).length===0}function u(y){return{unit:f(n(y,"unit")[0]),upAxis:d(n(y,"up_axis")[0])}}function f(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function d(y){return y!==void 0?y.textContent:"Y_UP"}function m(y,b,E,A){const T=n(y,b)[0];if(T!==void 0){const $=n(T,E);for(let fe=0;fe<$.length;fe++)A($[fe])}}function g(y,b){for(const E in y){const A=y[E];A.build=b(y[E])}}function h(y,b){return y.build!==void 0||(y.build=b(y)),y.build}function p(y){const b={sources:{},samplers:{},channels:{}};let E=!1;for(let A=0,T=y.childNodes.length;A<T;A++){const $=y.childNodes[A];if($.nodeType!==1)continue;let fe;switch($.nodeName){case"source":fe=$.getAttribute("id"),b.sources[fe]=ve($);break;case"sampler":fe=$.getAttribute("id"),b.samplers[fe]=_($);break;case"channel":fe=$.getAttribute("target"),b.channels[fe]=x($);break;case"animation":p($),E=!0;break;default:console.log($)}}E===!1&&(Ke.animations[y.getAttribute("id")||Jr.generateUUID()]=b)}function _(y){const b={inputs:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"input":const $=a(T.getAttribute("source")),fe=T.getAttribute("semantic");b.inputs[fe]=$;break}}return b}function x(y){const b={};let A=y.getAttribute("target").split("/");const T=A.shift();let $=A.shift();const fe=$.indexOf("(")!==-1,Ie=$.indexOf(".")!==-1;if(Ie)A=$.split("."),$=A.shift(),b.member=A.shift();else if(fe){const Se=$.split("(");$=Se.shift();for(let Te=0;Te<Se.length;Te++)Se[Te]=parseInt(Se[Te].replace(/\)/,""));b.indices=Se}return b.id=T,b.sid=$,b.arraySyntax=fe,b.memberSyntax=Ie,b.sampler=a(y.getAttribute("source")),b}function S(y){const b=[],E=y.channels,A=y.samplers,T=y.sources;for(const $ in E)if(E.hasOwnProperty($)){const fe=E[$],Ie=A[fe.sampler],Se=Ie.inputs.INPUT,Te=Ie.inputs.OUTPUT,Ge=T[Se],ge=T[Te],Be=M(fe,Ge,ge);L(Be,b)}return b}function w(y){return h(Ke.animations[y],S)}function M(y,b,E){const A=Ke.nodes[y.id],T=Cn(A.id),$=A.transforms[y.sid],fe=A.matrix.clone().transpose();let Ie,Se,Te,Ge,ge,Be;const Re={};switch($){case"matrix":for(Te=0,Ge=b.array.length;Te<Ge;Te++)if(Ie=b.array[Te],Se=Te*E.stride,Re[Ie]===void 0&&(Re[Ie]={}),y.arraySyntax===!0){const zt=E.array[Se],wt=y.indices[0]+4*y.indices[1];Re[Ie][wt]=zt}else for(ge=0,Be=E.stride;ge<Be;ge++)Re[Ie][ge]=E.array[Se+ge];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break}const Ye=C(Re,fe);return{name:T.uuid,keyframes:Ye}}function C(y,b){const E=[];for(const T in y)E.push({time:parseFloat(T),value:y[T]});E.sort(A);for(let T=0;T<16;T++)j(E,T,b.elements[T]);return E;function A(T,$){return T.time-$.time}}const G=new H,v=new H,D=new ri;function L(y,b){const E=y.keyframes,A=y.name,T=[],$=[],fe=[],Ie=[];for(let Se=0,Te=E.length;Se<Te;Se++){const Ge=E[Se],ge=Ge.time,Be=Ge.value;Ut.fromArray(Be).transpose(),Ut.decompose(G,D,v),T.push(ge),$.push(G.x,G.y,G.z),fe.push(D.x,D.y,D.z,D.w),Ie.push(v.x,v.y,v.z)}return $.length>0&&b.push(new Fr(A+".position",T,$)),fe.length>0&&b.push(new jr(A+".quaternion",T,fe)),Ie.length>0&&b.push(new Fr(A+".scale",T,Ie)),b}function j(y,b,E){let A,T=!0,$,fe;for($=0,fe=y.length;$<fe;$++)A=y[$],A.value[b]===void 0?A.value[b]=null:T=!1;if(T===!0)for($=0,fe=y.length;$<fe;$++)A=y[$],A.value[b]=E;else K(y,b)}function K(y,b){let E,A;for(let T=0,$=y.length;T<$;T++){const fe=y[T];if(fe.value[b]===null){if(E=V(y,T,b),A=U(y,T,b),E===null){fe.value[b]=A.value[b];continue}if(A===null){fe.value[b]=E.value[b];continue}O(fe,E,A,b)}}}function V(y,b,E){for(;b>=0;){const A=y[b];if(A.value[E]!==null)return A;b--}return null}function U(y,b,E){for(;b<y.length;){const A=y[b];if(A.value[E]!==null)return A;b++}return null}function O(y,b,E,A){if(E.time-b.time===0){y.value[A]=b.value[A];return}y.value[A]=(y.time-b.time)*(E.value[A]-b.value[A])/(E.time-b.time)+b.value[A]}function B(y){const b={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"instance_animation":b.animations.push(a(T.getAttribute("url")));break}}Ke.clips[y.getAttribute("id")]=b}function J(y){const b=[],E=y.name,A=y.end-y.start||-1,T=y.animations;for(let $=0,fe=T.length;$<fe;$++){const Ie=w(T[$]);for(let Se=0,Te=Ie.length;Se<Te;Se++)b.push(Ie[Se])}return new Cc(E,A,b)}function X(y){return h(Ke.clips[y],J)}function re(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"skin":b.id=a(T.getAttribute("source")),b.skin=ne(T);break;case"morph":b.id=a(T.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Ke.controllers[y.getAttribute("id")]=b}function ne(y){const b={sources:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"bind_shape_matrix":b.bindShapeMatrix=s(T.textContent);break;case"source":const $=T.getAttribute("id");b.sources[$]=ve(T);break;case"joints":b.joints=R(T);break;case"vertex_weights":b.vertexWeights=q(T);break}}return b}function R(y){const b={inputs:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"input":const $=T.getAttribute("semantic"),fe=a(T.getAttribute("source"));b.inputs[$]=fe;break}}return b}function q(y){const b={inputs:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"input":const $=T.getAttribute("semantic"),fe=a(T.getAttribute("source")),Ie=parseInt(T.getAttribute("offset"));b.inputs[$]={id:fe,offset:Ie};break;case"vcount":b.vcount=o(T.textContent);break;case"v":b.v=o(T.textContent);break}}return b}function ie(y){const b={id:y.id},E=Ke.geometries[b.id];return y.skin!==void 0&&(b.skin=Q(y.skin),E.sources.skinIndices=b.skin.indices,E.sources.skinWeights=b.skin.weights),b}function Q(y){const E={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},A=y.sources,T=y.vertexWeights,$=T.vcount,fe=T.v,Ie=T.inputs.JOINT.offset,Se=T.inputs.WEIGHT.offset,Te=y.sources[y.joints.inputs.JOINT],Ge=y.sources[y.joints.inputs.INV_BIND_MATRIX],ge=A[T.inputs.WEIGHT.id].array;let Be=0,Re,Ye,je;for(Re=0,je=$.length;Re<je;Re++){const wt=$[Re],_t=[];for(Ye=0;Ye<wt;Ye++){const vt=fe[Be+Ie],li=fe[Be+Se],Ln=ge[li];_t.push({index:vt,weight:Ln}),Be+=2}for(_t.sort(zt),Ye=0;Ye<4;Ye++){const vt=_t[Ye];vt!==void 0?(E.indices.array.push(vt.index),E.weights.array.push(vt.weight)):(E.indices.array.push(0),E.weights.array.push(0))}}for(y.bindShapeMatrix?E.bindMatrix=new tt().fromArray(y.bindShapeMatrix).transpose():E.bindMatrix=new tt().identity(),Re=0,je=Te.array.length;Re<je;Re++){const wt=Te.array[Re],_t=new tt().fromArray(Ge.array,Re*Ge.stride).transpose();E.joints.push({name:wt,boneInverse:_t})}return E;function zt(wt,_t){return _t.weight-wt.weight}}function te(y){return h(Ke.controllers[y],ie)}function F(y){const b={init_from:n(y,"init_from")[0].textContent};Ke.images[y.getAttribute("id")]=b}function ae(y){return y.build!==void 0?y.build:y.init_from}function be(y){const b=Ke.images[y];return b!==void 0?h(b,ae):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function Le(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"profile_COMMON":b.profile=we(T);break}}Ke.effects[y.getAttribute("id")]=b}function we(y){const b={surfaces:{},samplers:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"newparam":Qe(T,b);break;case"technique":b.technique=Lt(T);break;case"extra":b.extra=Gt(T);break}}return b}function Qe(y,b){const E=y.getAttribute("sid");for(let A=0,T=y.childNodes.length;A<T;A++){const $=y.childNodes[A];if($.nodeType===1)switch($.nodeName){case"surface":b.surfaces[E]=He($);break;case"sampler2D":b.samplers[E]=Ee($);break}}}function He(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"init_from":b.init_from=T.textContent;break}}return b}function Ee(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"source":b.source=T.textContent;break}}return b}function Lt(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"constant":case"lambert":case"blinn":case"phong":b.type=T.nodeName,b.parameters=de(T);break;case"extra":b.extra=Gt(T);break}}return b}function de(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":b[T.nodeName]=ee(T);break;case"transparent":b[T.nodeName]={opaque:T.hasAttribute("opaque")?T.getAttribute("opaque"):"A_ONE",data:ee(T)};break}}return b}function ee(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"color":b[T.nodeName]=s(T.textContent);break;case"float":b[T.nodeName]=parseFloat(T.textContent);break;case"texture":b[T.nodeName]={id:T.getAttribute("texture"),extra:We(T)};break}}return b}function We(y){const b={technique:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"extra":bt(T,b);break}}return b}function bt(y,b){for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"technique":lt(T,b);break}}}function lt(y,b){for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":b.technique[T.nodeName]=parseFloat(T.textContent);break;case"wrapU":case"wrapV":T.textContent.toUpperCase()==="TRUE"?b.technique[T.nodeName]=1:T.textContent.toUpperCase()==="FALSE"?b.technique[T.nodeName]=0:b.technique[T.nodeName]=parseInt(T.textContent);break;case"bump":b[T.nodeName]=N(T);break}}}function Gt(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"technique":b.technique=Ot(T);break}}return b}function Ot(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"double_sided":b[T.nodeName]=parseInt(T.textContent);break;case"bump":b[T.nodeName]=N(T);break}}return b}function N(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"texture":b[T.nodeName]={id:T.getAttribute("texture"),texcoord:T.getAttribute("texcoord"),extra:We(T)};break}}return b}function I(y){return y}function se(y){return h(Ke.effects[y],I)}function ye(y){const b={name:y.getAttribute("name")};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"instance_effect":b.url=a(T.getAttribute("url"));break}}Ke.materials[y.getAttribute("id")]=b}function xe(y){let b,E=y.slice((y.lastIndexOf(".")-1>>>0)+2);switch(E=E.toLowerCase(),E){case"tga":b=Ra;break;default:b=el}return b}function Me(y){const b=se(y.url),E=b.profile.technique;let A;switch(E.type){case"phong":case"blinn":A=new Ec;break;case"lambert":A=new Vo;break;default:A=new kr;break}A.name=y.name||"";function T(Se,Te=null){const Ge=b.profile.samplers[Se.id];let ge=null;if(Ge!==void 0){const Be=b.profile.surfaces[Ge.source];ge=be(Be.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ge=be(Se.id);if(ge!==null){const Be=xe(ge);if(Be!==void 0){const Re=Be.load(ge),Ye=Se.extra;if(Ye!==void 0&&Ye.technique!==void 0&&c(Ye.technique)===!1){const je=Ye.technique;Re.wrapS=je.wrapU?Hi:bn,Re.wrapT=je.wrapV?Hi:bn,Re.offset.set(je.offsetU||0,je.offsetV||0),Re.repeat.set(je.repeatU||1,je.repeatV||1)}else Re.wrapS=Hi,Re.wrapT=Hi;return Te!==null&&(Re.encoding=Te),Re}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ge),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Se.id),null}const $=E.parameters;for(const Se in $){const Te=$[Se];switch(Se){case"diffuse":Te.color&&A.color.fromArray(Te.color),Te.texture&&(A.map=T(Te.texture,Mt));break;case"specular":Te.color&&A.specular&&A.specular.fromArray(Te.color),Te.texture&&(A.specularMap=T(Te.texture));break;case"bump":Te.texture&&(A.normalMap=T(Te.texture));break;case"ambient":Te.texture&&(A.lightMap=T(Te.texture,Mt));break;case"shininess":Te.float&&A.shininess&&(A.shininess=Te.float);break;case"emission":Te.color&&A.emissive&&A.emissive.fromArray(Te.color),Te.texture&&(A.emissiveMap=T(Te.texture,Mt));break}}A.color.convertSRGBToLinear(),A.specular&&A.specular.convertSRGBToLinear(),A.emissive&&A.emissive.convertSRGBToLinear();let fe=$.transparent,Ie=$.transparency;if(Ie===void 0&&fe&&(Ie={float:1}),fe===void 0&&Ie&&(fe={opaque:"A_ONE",data:{color:[1,1,1,1]}}),fe&&Ie)if(fe.data.texture)A.transparent=!0;else{const Se=fe.data.color;switch(fe.opaque){case"A_ONE":A.opacity=Se[3]*Ie.float;break;case"RGB_ZERO":A.opacity=1-Se[0]*Ie.float;break;case"A_ZERO":A.opacity=1-Se[3]*Ie.float;break;case"RGB_ONE":A.opacity=Se[0]*Ie.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',fe.opaque)}A.opacity<1&&(A.transparent=!0)}if(E.extra!==void 0&&E.extra.technique!==void 0){const Se=E.extra.technique;for(const Te in Se){const Ge=Se[Te];switch(Te){case"double_sided":A.side=Ge===1?pa:Li;break;case"bump":A.normalMap=T(Ge.texture),A.normalScale=new Ze(1,1);break}}}return A}function ze(y){return h(Ke.materials[y],Me)}function z(y){const b={name:y.getAttribute("name")};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"optics":b.optics=k(T);break}}Ke.cameras[y.getAttribute("id")]=b}function k(y){for(let b=0;b<y.childNodes.length;b++){const E=y.childNodes[b];switch(E.nodeName){case"technique_common":return oe(E)}}return{}}function oe(y){const b={};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];switch(A.nodeName){case"perspective":case"orthographic":b.technique=A.nodeName,b.parameters=ce(A);break}}return b}function ce(y){const b={};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];switch(A.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":b[A.nodeName]=parseFloat(A.textContent);break}}return b}function _e(y){let b;switch(y.optics.technique){case"perspective":b=new sn(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let E=y.optics.parameters.ymag,A=y.optics.parameters.xmag;const T=y.optics.parameters.aspect_ratio;A=A===void 0?E*T:A,E=E===void 0?A/T:E,A*=.5,E*=.5,b=new xs(-A,A,E,-E,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:b=new sn;break}return b.name=y.name||"",b}function De(y){const b=Ke.cameras[y];return b!==void 0?h(b,_e):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function Fe(y){let b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"technique_common":b=st(T);break}}Ke.lights[y.getAttribute("id")]=b}function st(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"directional":case"point":case"spot":case"ambient":b.technique=T.nodeName,b.parameters=ct(T)}}return b}function ct(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"color":const $=s(T.textContent);b.color=new $e().fromArray($).convertSRGBToLinear();break;case"falloff_angle":b.falloffAngle=parseFloat(T.textContent);break;case"quadratic_attenuation":const fe=parseFloat(T.textContent);b.distance=fe?Math.sqrt(1/fe):0;break}}return b}function yt(y){let b;switch(y.technique){case"directional":b=new n0;break;case"point":b=new ds;break;case"spot":b=new $u;break;case"ambient":b=new ef;break}return y.parameters.color&&b.color.copy(y.parameters.color),y.parameters.distance&&(b.distance=y.parameters.distance),b}function W(y){const b=Ke.lights[y];return b!==void 0?h(b,yt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function le(y){const b={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},E=n(y,"mesh")[0];if(E!==void 0){for(let A=0;A<E.childNodes.length;A++){const T=E.childNodes[A];if(T.nodeType!==1)continue;const $=T.getAttribute("id");switch(T.nodeName){case"source":b.sources[$]=ve(T);break;case"vertices":b.vertices=Ce(T);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",T.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":b.primitives.push(Ve(T));break;default:console.log(T)}}Ke.geometries[y.getAttribute("id")]=b}}function ve(y){const b={array:[],stride:3};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"float_array":b.array=s(A.textContent);break;case"Name_array":b.array=i(A.textContent);break;case"technique_common":const T=n(A,"accessor")[0];T!==void 0&&(b.stride=parseInt(T.getAttribute("stride")));break}}return b}function Ce(y){const b={};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];A.nodeType===1&&(b[A.getAttribute("semantic")]=a(A.getAttribute("source")))}return b}function Ve(y){const b={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"input":const $=a(T.getAttribute("source")),fe=T.getAttribute("semantic"),Ie=parseInt(T.getAttribute("offset")),Se=parseInt(T.getAttribute("set")),Te=Se>0?fe+Se:fe;b.inputs[Te]={id:$,offset:Ie},b.stride=Math.max(b.stride,Ie+1),fe==="TEXCOORD"&&(b.hasUV=!0);break;case"vcount":b.vcount=o(T.textContent);break;case"p":b.p=o(T.textContent);break}}return b}function gt(y){const b={};for(let E=0;E<y.length;E++){const A=y[E];b[A.type]===void 0&&(b[A.type]=[]),b[A.type].push(A)}return b}function Wt(y){let b=0;for(let E=0,A=y.length;E<A;E++)y[E].hasUV===!0&&b++;b>0&&b<y.length&&(y.uvsNeedsFix=!0)}function Xt(y){const b={},E=y.sources,A=y.vertices,T=y.primitives;if(T.length===0)return{};const $=gt(T);for(const fe in $){const Ie=$[fe];Wt(Ie),b[fe]=ai(Ie,E,A)}return b}function ai(y,b,E){const A={},T={array:[],stride:0},$={array:[],stride:0},fe={array:[],stride:0},Ie={array:[],stride:0},Se={array:[],stride:0},Te={array:[],stride:4},Ge={array:[],stride:4},ge=new Pn,Be=[];let Re=0;for(let Ye=0;Ye<y.length;Ye++){const je=y[Ye],zt=je.inputs;let wt=0;switch(je.type){case"lines":case"linestrips":wt=je.count*2;break;case"triangles":wt=je.count*3;break;case"polylist":for(let _t=0;_t<je.count;_t++){const vt=je.vcount[_t];switch(vt){case 3:wt+=3;break;case 4:wt+=6;break;default:wt+=(vt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",je.type)}ge.addGroup(Re,wt,Ye),Re+=wt,je.material&&Be.push(je.material);for(const _t in zt){const vt=zt[_t];switch(_t){case"VERTEX":for(const li in E){const Ln=E[li];switch(li){case"POSITION":const or=T.array.length;if(ut(je,b[Ln],vt.offset,T.array),T.stride=b[Ln].stride,b.skinWeights&&b.skinIndices&&(ut(je,b.skinIndices,vt.offset,Te.array),ut(je,b.skinWeights,vt.offset,Ge.array)),je.hasUV===!1&&y.uvsNeedsFix===!0){const wf=(T.array.length-or)/T.stride;for(let nl=0;nl<wf;nl++)fe.array.push(0,0)}break;case"NORMAL":ut(je,b[Ln],vt.offset,$.array),$.stride=b[Ln].stride;break;case"COLOR":ut(je,b[Ln],vt.offset,Se.array),Se.stride=b[Ln].stride;break;case"TEXCOORD":ut(je,b[Ln],vt.offset,fe.array),fe.stride=b[Ln].stride;break;case"TEXCOORD1":ut(je,b[Ln],vt.offset,Ie.array),fe.stride=b[Ln].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',li)}}break;case"NORMAL":ut(je,b[vt.id],vt.offset,$.array),$.stride=b[vt.id].stride;break;case"COLOR":ut(je,b[vt.id],vt.offset,Se.array,!0),Se.stride=b[vt.id].stride;break;case"TEXCOORD":ut(je,b[vt.id],vt.offset,fe.array),fe.stride=b[vt.id].stride;break;case"TEXCOORD1":ut(je,b[vt.id],vt.offset,Ie.array),Ie.stride=b[vt.id].stride;break}}}return T.array.length>0&&ge.setAttribute("position",new Pt(T.array,T.stride)),$.array.length>0&&ge.setAttribute("normal",new Pt($.array,$.stride)),Se.array.length>0&&ge.setAttribute("color",new Pt(Se.array,Se.stride)),fe.array.length>0&&ge.setAttribute("uv",new Pt(fe.array,fe.stride)),Ie.array.length>0&&ge.setAttribute("uv2",new Pt(Ie.array,Ie.stride)),Te.array.length>0&&ge.setAttribute("skinIndex",new Pt(Te.array,Te.stride)),Ge.array.length>0&&ge.setAttribute("skinWeight",new Pt(Ge.array,Ge.stride)),A.data=ge,A.type=y[0].type,A.materialKeys=Be,A}function ut(y,b,E,A,T=!1){const $=y.p,fe=y.stride,Ie=y.vcount;function Se(ge){let Be=$[ge+E]*Ge;const Re=Be+Ge;for(;Be<Re;Be++)A.push(Te[Be]);if(T){const Ye=A.length-Ge-1;Cs.setRGB(A[Ye+0],A[Ye+1],A[Ye+2]).convertSRGBToLinear(),A[Ye+0]=Cs.r,A[Ye+1]=Cs.g,A[Ye+2]=Cs.b}}const Te=b.array,Ge=b.stride;if(y.vcount!==void 0){let ge=0;for(let Be=0,Re=Ie.length;Be<Re;Be++){const Ye=Ie[Be];if(Ye===4){const je=ge+fe*0,zt=ge+fe*1,wt=ge+fe*2,_t=ge+fe*3;Se(je),Se(zt),Se(_t),Se(zt),Se(wt),Se(_t)}else if(Ye===3){const je=ge+fe*0,zt=ge+fe*1,wt=ge+fe*2;Se(je),Se(zt),Se(wt)}else if(Ye>4)for(let je=1,zt=Ye-2;je<=zt;je++){const wt=ge+fe*0,_t=ge+fe*je,vt=ge+fe*(je+1);Se(wt),Se(_t),Se(vt)}ge+=fe*Ye}}else for(let ge=0,Be=$.length;ge<Be;ge+=fe)Se(ge)}function zn(y){return h(Ke.geometries[y],Xt)}function En(y){const b={name:y.getAttribute("name")||"",joints:{},links:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"technique_common":La(A,b);break}}Ke.kinematicsModels[y.getAttribute("id")]=b}function Ms(y){return y.build!==void 0?y.build:y}function Ca(y){return h(Ke.kinematicsModels[y],Ms)}function La(y,b){for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"joint":b.joints[A.getAttribute("sid")]=Ia(A);break;case"link":b.links.push(Z(A));break}}}function Ia(y){let b;for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"prismatic":case"revolute":b=P(A);break}}return b}function P(y){const b={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new H,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"axis":const T=s(A.textContent);b.axis.fromArray(T);break;case"limits":const $=A.getElementsByTagName("max")[0],fe=A.getElementsByTagName("min")[0];b.limits.max=parseFloat($.textContent),b.limits.min=parseFloat(fe.textContent);break}}return b.limits.min>=b.limits.max&&(b.static=!0),b.middlePosition=(b.limits.min+b.limits.max)/2,b}function Z(y){const b={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"attachment_full":b.attachments.push(ue(A));break;case"matrix":case"translate":case"rotate":b.transforms.push(Y(A));break}}return b}function ue(y){const b={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"link":b.links.push(Z(A));break;case"matrix":case"translate":case"rotate":b.transforms.push(Y(A));break}}return b}function Y(y){const b={type:y.nodeName},E=s(y.textContent);switch(b.type){case"matrix":b.obj=new tt,b.obj.fromArray(E).transpose();break;case"translate":b.obj=new H,b.obj.fromArray(E);break;case"rotate":b.obj=new H,b.obj.fromArray(E),b.angle=Jr.degToRad(E[3]);break}return b}function he(y){const b={name:y.getAttribute("name")||"",rigidBodies:{}};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"rigid_body":b.rigidBodies[A.getAttribute("name")]={},qe(A,b.rigidBodies[A.getAttribute("name")]);break}}Ke.physicsModels[y.getAttribute("id")]=b}function qe(y,b){for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Je(A,b);break}}}function Je(y,b){for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"inertia":b.inertia=s(A.textContent);break;case"mass":b.mass=s(A.textContent)[0];break}}}function et(y){const b={bindJointAxis:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"bind_joint_axis":b.bindJointAxis.push(it(A));break}}Ke.kinematicsScenes[a(y.getAttribute("url"))]=b}function it(y){const b={target:y.getAttribute("target").split("/").pop()};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"axis":const T=A.getElementsByTagName("param")[0];b.axis=T.textContent;const $=b.axis.split("inst_").pop().split("axis")[0];b.jointIndex=$.substring(0,$.length-1);break}}return b}function ht(y){return y.build!==void 0?y.build:y}function ft(y){return h(Ke.kinematicsScenes[y],ht)}function dt(){const y=Object.keys(Ke.kinematicsModels)[0],b=Object.keys(Ke.kinematicsScenes)[0],E=Object.keys(Ke.visualScenes)[0];if(y===void 0||b===void 0)return;const A=Ca(y),T=ft(b),$=Es(E),fe=T.bindJointAxis,Ie={};for(let Ge=0,ge=fe.length;Ge<ge;Ge++){const Be=fe[Ge],Re=Yt.querySelector('[sid="'+Be.target+'"]');if(Re){const Ye=Re.parentElement;Se(Be.jointIndex,Ye)}}function Se(Ge,ge){const Be=ge.getAttribute("name"),Re=A.joints[Ge];$.traverse(function(Ye){Ye.name===Be&&(Ie[Ge]={object:Ye,transforms:Bt(ge),joint:Re,position:Re.zeroPosition})})}const Te=new tt;tl={joints:A&&A.joints,getJointValue:function(Ge){const ge=Ie[Ge];if(ge)return ge.position;console.warn("THREE.ColladaLoader: Joint "+Ge+" doesn't exist.")},setJointValue:function(Ge,ge){const Be=Ie[Ge];if(Be){const Re=Be.joint;if(ge>Re.limits.max||ge<Re.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ge+" value "+ge+" outside of limits (min: "+Re.limits.min+", max: "+Re.limits.max+").");else if(Re.static)console.warn("THREE.ColladaLoader: Joint "+Ge+" is static.");else{const Ye=Be.object,je=Re.axis,zt=Be.transforms;Ut.identity();for(let wt=0;wt<zt.length;wt++){const _t=zt[wt];if(_t.sid&&_t.sid.indexOf(Ge)!==-1)switch(Re.type){case"revolute":Ut.multiply(Te.makeRotationAxis(je,Jr.degToRad(ge)));break;case"prismatic":Ut.multiply(Te.makeTranslation(je.x*ge,je.y*ge,je.z*ge));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Re.type);break}else switch(_t.type){case"matrix":Ut.multiply(_t.obj);break;case"translate":Ut.multiply(Te.makeTranslation(_t.obj.x,_t.obj.y,_t.obj.z));break;case"scale":Ut.scale(_t.obj);break;case"rotate":Ut.multiply(Te.makeRotationAxis(_t.obj,_t.angle));break}}Ye.matrix.copy(Ut),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ie[Ge].position=ge}}else console.log("THREE.ColladaLoader: "+Ge+" does not exist.")}}}function Bt(y){const b=[],E=Yt.querySelector('[id="'+y.id+'"]');for(let A=0;A<E.childNodes.length;A++){const T=E.childNodes[A];if(T.nodeType!==1)continue;let $,fe;switch(T.nodeName){case"matrix":$=s(T.textContent);const Ie=new tt().fromArray($).transpose();b.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:Ie});break;case"translate":case"scale":$=s(T.textContent),fe=new H().fromArray($),b.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:fe});break;case"rotate":$=s(T.textContent),fe=new H().fromArray($);const Se=Jr.degToRad($[3]);b.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:fe,angle:Se});break}}return b}function pn(y){const b=y.getElementsByTagName("node");for(let E=0;E<b.length;E++){const A=b[E];A.hasAttribute("id")===!1&&A.setAttribute("id",l())}}const Ut=new tt,Tn=new H;function Nt(y){const b={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new tt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType!==1)continue;let T;switch(A.nodeName){case"node":b.nodes.push(A.getAttribute("id")),Nt(A);break;case"instance_camera":b.instanceCameras.push(a(A.getAttribute("url")));break;case"instance_controller":b.instanceControllers.push(at(A));break;case"instance_light":b.instanceLights.push(a(A.getAttribute("url")));break;case"instance_geometry":b.instanceGeometries.push(at(A));break;case"instance_node":b.instanceNodes.push(a(A.getAttribute("url")));break;case"matrix":T=s(A.textContent),b.matrix.multiply(Ut.fromArray(T).transpose()),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"translate":T=s(A.textContent),Tn.fromArray(T),b.matrix.multiply(Ut.makeTranslation(Tn.x,Tn.y,Tn.z)),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"rotate":T=s(A.textContent);const $=Jr.degToRad(T[3]);b.matrix.multiply(Ut.makeRotationAxis(Tn.fromArray(T),$)),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"scale":T=s(A.textContent),b.matrix.scale(Tn.fromArray(T)),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"extra":break;default:console.log(A)}}return Qt(b.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",b.id):Ke.nodes[b.id]=b,b}function at(y){const b={id:a(y.getAttribute("url")),materials:{},skeletons:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];switch(A.nodeName){case"bind_material":const T=A.getElementsByTagName("instance_material");for(let $=0;$<T.length;$++){const fe=T[$],Ie=fe.getAttribute("symbol"),Se=fe.getAttribute("target");b.materials[Ie]=a(Se)}break;case"skeleton":b.skeletons.push(a(A.textContent));break}}return b}function Yr(y,b){const E=[],A=[];let T,$,fe;for(T=0;T<y.length;T++){const Te=y[T];let Ge;if(Qt(Te))Ge=Cn(Te),Vt(Ge,b,E);else if(Zr(Te)){const Be=Ke.visualScenes[Te].children;for(let Re=0;Re<Be.length;Re++){const Ye=Be[Re];if(Ye.type==="JOINT"){const je=Cn(Ye.id);Vt(je,b,E)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Te)}for(T=0;T<b.length;T++)for($=0;$<E.length;$++)if(fe=E[$],fe.bone.name===b[T].name){A[T]=fe,fe.processed=!0;break}for(T=0;T<E.length;T++)fe=E[T],fe.processed===!1&&(A.push(fe),fe.processed=!0);const Ie=[],Se=[];for(T=0;T<A.length;T++)fe=A[T],Ie.push(fe.bone),Se.push(fe.boneInverse);return new Bo(Ie,Se)}function Vt(y,b,E){y.traverse(function(A){if(A.isBone===!0){let T;for(let $=0;$<b.length;$++){const fe=b[$];if(fe.name===A.name){T=fe.boneInverse;break}}T===void 0&&(T=new tt),E.push({bone:A,boneInverse:T,processed:!1})}})}function oi(y){const b=[],E=y.matrix,A=y.nodes,T=y.type,$=y.instanceCameras,fe=y.instanceControllers,Ie=y.instanceLights,Se=y.instanceGeometries,Te=y.instanceNodes;for(let ge=0,Be=A.length;ge<Be;ge++)b.push(Cn(A[ge]));for(let ge=0,Be=$.length;ge<Be;ge++){const Re=De($[ge]);Re!==null&&b.push(Re.clone())}for(let ge=0,Be=fe.length;ge<Be;ge++){const Re=fe[ge],Ye=te(Re.id),je=zn(Ye.id),zt=ar(je,Re.materials),wt=Re.skeletons,_t=Ye.skin.joints,vt=Yr(wt,_t);for(let li=0,Ln=zt.length;li<Ln;li++){const or=zt[li];or.isSkinnedMesh&&(or.bind(vt,Ye.skin.bindMatrix),or.normalizeSkinWeights()),b.push(or)}}for(let ge=0,Be=Ie.length;ge<Be;ge++){const Re=W(Ie[ge]);Re!==null&&b.push(Re.clone())}for(let ge=0,Be=Se.length;ge<Be;ge++){const Re=Se[ge],Ye=zn(Re.id),je=ar(Ye,Re.materials);for(let zt=0,wt=je.length;zt<wt;zt++)b.push(je[zt])}for(let ge=0,Be=Te.length;ge<Be;ge++)b.push(Cn(Te[ge]).clone());let Ge;if(A.length===0&&b.length===1)Ge=b[0];else{Ge=T==="JOINT"?new ju:new ti;for(let ge=0;ge<b.length;ge++)Ge.add(b[ge])}return Ge.name=T==="JOINT"?y.sid:y.name,Ge.matrix.copy(E),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge}const As=new kr({color:16711935});function ki(y,b){const E=[];for(let A=0,T=y.length;A<T;A++){const $=b[y[A]];$===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[A]),E.push(As)):E.push(ze($))}return E}function ar(y,b){const E=[];for(const A in y){const T=y[A],$=ki(T.materialKeys,b);if($.length===0&&(A==="lines"||A==="linestrips"?$.push(new ca):$.push(new Ec)),A==="lines"||A==="linestrips")for(let Te=0,Ge=$.length;Te<Ge;Te++){const ge=$[Te];if(ge.isMeshPhongMaterial===!0||ge.isMeshLambertMaterial===!0){const Be=new ca;Be.color.copy(ge.color),Be.opacity=ge.opacity,Be.transparent=ge.transparent,$[Te]=Be}}const fe=T.data.attributes.skinIndex!==void 0,Ie=$.length===1?$[0]:$;let Se;switch(A){case"lines":Se=new Yu(T.data,Ie);break;case"linestrips":Se=new Xu(T.data,Ie);break;case"triangles":case"polylist":fe?Se=new B_(T.data,Ie):Se=new cn(T.data,Ie);break}E.push(Se)}return E}function Qt(y){return Ke.nodes[y]!==void 0}function Cn(y){return h(Ke.nodes[y],oi)}function Kr(y){const b={name:y.getAttribute("name"),children:[]};pn(y);const E=n(y,"node");for(let A=0;A<E.length;A++)b.children.push(Nt(E[A]));Ke.visualScenes[y.getAttribute("id")]=b}function an(y){const b=new ti;b.name=y.name;const E=y.children;for(let A=0;A<E.length;A++){const T=E[A];b.add(Cn(T.id))}return b}function Zr(y){return Ke.visualScenes[y]!==void 0}function Es(y){return h(Ke.visualScenes[y],an)}function Ts(y){const b=n(y,"instance_visual_scene")[0];return Es(a(b.getAttribute("url")))}function bf(){const y=Ke.clips;if(c(y)===!0){if(c(Ke.animations)===!1){const b=[];for(const E in Ke.animations){const A=w(E);for(let T=0,$=A.length;T<$;T++)b.push(A[T])}Ls.push(new Cc("default",-1,b))}}else for(const b in y)Ls.push(X(b))}function yf(y){let b="";const E=[y];for(;E.length;){const A=E.shift();A.nodeType===Node.TEXT_NODE?b+=A.textContent:(b+=`
`,E.push.apply(E,A.childNodes))}return b.trim()}if(e.length===0)return{scene:new Wu};const Qo=new DOMParser().parseFromString(e,"application/xml"),Yt=n(Qo,"COLLADA")[0],Da=Qo.getElementsByTagName("parsererror")[0];if(Da!==void 0){const y=n(Da,"div")[0];let b;return y?b=y.textContent:b=yf(Da),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,b),null}const xf=Yt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",xf);const $o=u(n(Yt,"asset")[0]),el=new To(this.manager);el.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Ra;Zc&&(Ra=new Zc(this.manager),Ra.setPath(this.resourcePath||t));const Cs=new $e,Ls=[];let tl={},Sf=0;const Ke={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Yt,"library_animations","animation",p),m(Yt,"library_animation_clips","animation_clip",B),m(Yt,"library_controllers","controller",re),m(Yt,"library_images","image",F),m(Yt,"library_effects","effect",Le),m(Yt,"library_materials","material",ye),m(Yt,"library_cameras","camera",z),m(Yt,"library_lights","light",Fe),m(Yt,"library_geometries","geometry",le),m(Yt,"library_nodes","node",Nt),m(Yt,"library_visual_scenes","visual_scene",Kr),m(Yt,"library_kinematics_models","kinematics_model",En),m(Yt,"library_physics_models","physics_model",he),m(Yt,"scene","instance_kinematics_scene",et),g(Ke.animations,S),g(Ke.clips,J),g(Ke.controllers,ie),g(Ke.images,ae),g(Ke.effects,I),g(Ke.materials,Me),g(Ke.cameras,_e),g(Ke.lights,yt),g(Ke.geometries,Xt),g(Ke.visualScenes,an),bf(),dt();const Is=Ts(n(Yt,"scene")[0]);return Is.animations=Ls,$o.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Is.rotation.set(-Math.PI/2,0,0)),Is.scale.multiplyScalar($o.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Ls},kinematics:tl,library:Ke,scene:Is}}}function Fv(r){let e,t=`<!-- include stl: ${r[0]} ${r[2]} -->`,n,i,s;return i=new en({props:{type:cn,castShadow:!0,receiveShadow:!0,geometry:r[5],scale:r[2],position:r[4],rotation:r[3],$$slots:{default:[Ov]},$$scope:{ctx:r}}}),{c(){e=new nr(!1),n=It(),Pe(i.$$.fragment),this.h()},l(o){e=ir(o,!1),n=Dt(o),Ue(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Xe(o,n,a),ke(i,o,a),s=!0},p(o,a){(!s||a&5)&&t!==(t=`<!-- include stl: ${o[0]} ${o[2]} -->`)&&e.p(t);const l={};a&4&&(l.scale=o[2]),a&16&&(l.position=o[4]),a&8&&(l.rotation=o[3]),a&2050&&(l.$$scope={dirty:a,ctx:o}),i.$set(l)},i(o){s||(pe(i.$$.fragment,o),s=!0)},o(o){me(i.$$.fragment,o),s=!1},d(o){o&&e.d(),o&&Oe(n),Ne(i,o)}}}function Ov(r){let e,t;return e=new en({props:{type:Vo,color:r[1]}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.color=n[1]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Uv(r){let e,t,n=r[5]&&Fv(r);return{c(){n&&n.c(),e=nt()},l(i){n&&n.l(i),e=nt()},m(i,s){n&&n.m(i,s),Xe(i,e,s),t=!0},p(i,[s]){i[5]&&n.p(i,s)},i(i){t||(pe(n),t=!0)},o(i){me(n),t=!1},d(i){n&&n.d(i),i&&Oe(e)}}}function zv(r,e,t){let{filename:n}=e,{color:i=new $e("pink")}=e,{scale:s=[1,1,1]}=e,{rotation:o=[1,1,1]}=e,{position:a=[1,1,1]}=e;const l=$i(),{invalidate:c}=wn(),u=Ko(Jc,()=>new Jc);let f;const d=g=>{c("Collada: model loaded"),l("load",g)},m=g=>{console.error(g),l("error")};return r.$$set=g=>{"filename"in g&&t(0,n=g.filename),"color"in g&&t(1,i=g.color),"scale"in g&&t(2,s=g.scale),"rotation"in g&&t(3,o=g.rotation),"position"in g&&t(4,a=g.position)},r.$$.update=()=>{r.$$.dirty&1&&u.load(n,d,void 0,m)},[n,i,s,o,a,f]}class Bv extends xt{constructor(e){super(),St(this,e,zv,Uv,mt,{filename:0,color:1,scale:2,rotation:3,position:4})}}class Qc extends Xr{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ho(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){function t(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let h=0;h<5;h++)if(n(g,u,h))return!1;return!0}function n(c,u,f){for(let d=0,m=c.length;d<m;d++)if(c[d]!==u.getUint8(f+d))return!1;return!0}function i(c){const u=new DataView(c),f=u.getUint32(80,!0);let d,m,g,h=!1,p,_,x,S,w;for(let L=0;L<80-10;L++)u.getUint32(L,!1)==1129270351&&u.getUint8(L+4)==82&&u.getUint8(L+5)==61&&(h=!0,p=new Float32Array(f*3*3),_=u.getUint8(L+6)/255,x=u.getUint8(L+7)/255,S=u.getUint8(L+8)/255,w=u.getUint8(L+9)/255);const M=84,C=12*4+2,G=new Pn,v=new Float32Array(f*3*3),D=new Float32Array(f*3*3);for(let L=0;L<f;L++){const j=M+L*C,K=u.getFloat32(j,!0),V=u.getFloat32(j+4,!0),U=u.getFloat32(j+8,!0);if(h){const O=u.getUint16(j+48,!0);O&32768?(d=_,m=x,g=S):(d=(O&31)/31,m=(O>>5&31)/31,g=(O>>10&31)/31)}for(let O=1;O<=3;O++){const B=j+O*12,J=L*3*3+(O-1)*3;v[J]=u.getFloat32(B,!0),v[J+1]=u.getFloat32(B+4,!0),v[J+2]=u.getFloat32(B+8,!0),D[J]=K,D[J+1]=V,D[J+2]=U,h&&(p[J]=d,p[J+1]=m,p[J+2]=g)}}return G.setAttribute("position",new Un(v,3)),G.setAttribute("normal",new Un(D,3)),h&&(G.setAttribute("color",new Un(p,3)),G.hasColors=!0,G.alpha=w),G}function s(c){const u=new Pn,f=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g;let m=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,h=new RegExp("vertex"+g+g+g,"g"),p=new RegExp("normal"+g+g+g,"g"),_=[],x=[],S=new H;let w,M=0,C=0,G=0;for(;(w=f.exec(c))!==null;){C=G;const v=w[0];for(;(w=d.exec(v))!==null;){let j=0,K=0;const V=w[0];for(;(w=p.exec(V))!==null;)S.x=parseFloat(w[1]),S.y=parseFloat(w[2]),S.z=parseFloat(w[3]),K++;for(;(w=h.exec(V))!==null;)_.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),x.push(S.x,S.y,S.z),j++,G++;K!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),j!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}const D=C,L=G-C;u.addGroup(D,L,M),M++}return u.setAttribute("position",new Pt(_,3)),u.setAttribute("normal",new Pt(x,3)),u}function o(c){return typeof c!="string"?tf.decodeText(new Uint8Array(c)):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?i(l):s(o(e))}}function $c(r){let e,t=`<!-- include stl: ${r[0]} ${r[2]} -->`,n,i,s;return i=new en({props:{type:cn,castShadow:!0,receiveShadow:!0,geometry:r[5],scale:r[2],position:r[4],rotation:r[3],$$slots:{default:[Gv]},$$scope:{ctx:r}}}),{c(){e=new nr(!1),n=It(),Pe(i.$$.fragment),this.h()},l(o){e=ir(o,!1),n=Dt(o),Ue(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Xe(o,n,a),ke(i,o,a),s=!0},p(o,a){(!s||a&5)&&t!==(t=`<!-- include stl: ${o[0]} ${o[2]} -->`)&&e.p(t);const l={};a&32&&(l.geometry=o[5]),a&4&&(l.scale=o[2]),a&16&&(l.position=o[4]),a&8&&(l.rotation=o[3]),a&2050&&(l.$$scope={dirty:a,ctx:o}),i.$set(l)},i(o){s||(pe(i.$$.fragment,o),s=!0)},o(o){me(i.$$.fragment,o),s=!1},d(o){o&&e.d(),o&&Oe(n),Ne(i,o)}}}function Gv(r){let e,t;return e=new en({props:{type:Vo,color:r[1]}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.color=n[1]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Vv(r){let e,t,n=r[5]&&$c(r);return{c(){n&&n.c(),e=nt()},l(i){n&&n.l(i),e=nt()},m(i,s){n&&n.m(i,s),Xe(i,e,s),t=!0},p(i,[s]){i[5]?n?(n.p(i,s),s&32&&pe(n,1)):(n=$c(i),n.c(),pe(n,1),n.m(e.parentNode,e)):n&&(xn(),me(n,1,1,()=>{n=null}),Sn())},i(i){t||(pe(n),t=!0)},o(i){me(n),t=!1},d(i){n&&n.d(i),i&&Oe(e)}}}function Hv(r,e,t){let{filename:n}=e,{color:i=new $e("pink")}=e,{scale:s=[1,1,1]}=e,{rotation:o=[1,1,1]}=e,{position:a=[1,1,1]}=e;const l=$i(),{invalidate:c}=wn(),u=Ko(Qc,()=>new Qc);let f;const d=g=>{f&&l("unload"),t(5,f=g),c("STL: model loaded"),l("load",g)},m=g=>{console.error(g),l("error")};return r.$$set=g=>{"filename"in g&&t(0,n=g.filename),"color"in g&&t(1,i=g.color),"scale"in g&&t(2,s=g.scale),"rotation"in g&&t(3,o=g.rotation),"position"in g&&t(4,a=g.position)},r.$$.update=()=>{r.$$.dirty&1&&u.load(n,d,void 0,m)},[n,i,s,o,a,f]}class Wv extends xt{constructor(e){super(),St(this,e,Hv,Vv,mt,{filename:0,color:1,scale:2,rotation:3,position:4})}}function jv(r){let e,t;return e=new en({props:{type:cn,castShadow:!0,receiveShadow:!0,scale:r[1],position:r[3],rotation:r[4],$$slots:{default:[Kv]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.scale=n[1]),i&65&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function qv(r){let e,t,n,i;const s=[Jv,Zv],o=[];function a(l,c){return l[2].type==="stl"?0:l[2].type==="dae"?1:-1}return~(e=a(r))&&(t=o[e]=s[e](r)),{c(){t&&t.c(),n=nt()},l(l){t&&t.l(l),n=nt()},m(l,c){~e&&o[e].m(l,c),Xe(l,n,c),i=!0},p(l,c){let u=e;e=a(l),e===u?~e&&o[e].p(l,c):(t&&(xn(),me(o[u],1,1,()=>{o[u]=null}),Sn()),~e?(t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),pe(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(pe(t),i=!0)},o(l){me(t),i=!1},d(l){~e&&o[e].d(l),l&&Oe(n)}}}function Xv(r){let e,t;return e=new en({props:{type:Vr}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p:Tt,i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Yv(r){let e,t;return e=new en({props:{type:Go}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p:Tt,i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Kv(r){let e,t,n,i,s;const o=[Yv,Xv],a=[];function l(c,u){return c[0].type==="cylinder"?0:c[0].type==="box"?1:-1}return~(e=l(r))&&(t=a[e]=o[e](r)),i=new en({props:{type:kr,color:r[5]}}),{c(){t&&t.c(),n=It(),Pe(i.$$.fragment)},l(c){t&&t.l(c),n=Dt(c),Ue(i.$$.fragment,c)},m(c,u){~e&&a[e].m(c,u),Xe(c,n,u),ke(i,c,u),s=!0},p(c,u){let f=e;e=l(c),e===f?~e&&a[e].p(c,u):(t&&(xn(),me(a[f],1,1,()=>{a[f]=null}),Sn()),~e?(t=a[e],t?t.p(c,u):(t=a[e]=o[e](c),t.c()),pe(t,1),t.m(n.parentNode,n)):t=null)},i(c){s||(pe(t),pe(i.$$.fragment,c),s=!0)},o(c){me(t),me(i.$$.fragment,c),s=!1},d(c){~e&&a[e].d(c),c&&Oe(n),Ne(i,c)}}}function Zv(r){let e,t;return e=new Bv({props:{filename:r[2].filename,position:r[3],rotation:r[4],color:r[5],scale:r[1]}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.filename=n[2].filename),i&2&&(s.scale=n[1]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Jv(r){let e,t;return e=new Wv({props:{filename:r[2].filename,position:r[3],rotation:r[4],color:r[5],scale:r[1]}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.filename=n[2].filename),i&2&&(s.scale=n[1]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Qv(r){let e,t,n,i;const s=[qv,jv],o=[];function a(l,c){return l[0].type==="mesh"?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=nt()},l(l){t.l(l),n=nt()},m(l,c){o[e].m(l,c),Xe(l,n,c),i=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(xn(),me(o[u],1,1,()=>{o[u]=null}),Sn(),t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),pe(t,1),t.m(n.parentNode,n))},i(l){i||(pe(t),i=!0)},o(l){me(t),i=!1},d(l){o[e].d(l),l&&Oe(n)}}}function $v(r,e,t){let{visual:n}=e;const i=n.origin_xyz||[0,0,0],s=n.origin_rpy||[0,0,0],o=Nv(n.color_rgba);let a=[1,1,1],l;switch(n.type){case"mesh":l=n.geometry,a=l.scale;break}return r.$$set=c=>{"visual"in c&&t(0,n=c.visual)},[n,a,l,i,s,o]}class eb extends xt{constructor(e){super(),St(this,e,$v,Qv,mt,{visual:0})}}function eu(r,e,t){const n=r.slice();return n[2]=e[t],n}function tu(r,e,t){const n=r.slice();return n[5]=e[t],n}function nu(r){let e,t;return e=new hf({props:{joint:r[5],parser:r[1]}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&3&&(s.joint=n[5]),i&2&&(s.parser=n[1]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function iu(r){let e,t,n,i;e=new eb({props:{visual:r[2]}});let s=r[1].getChildJoints(r[0].child),o=[];for(let l=0;l<s.length;l+=1)o[l]=nu(tu(r,s,l));const a=l=>me(o[l],1,1,()=>{o[l]=null});return{c(){Pe(e.$$.fragment),t=It();for(let l=0;l<o.length;l+=1)o[l].c();n=nt()},l(l){Ue(e.$$.fragment,l),t=Dt(l);for(let c=0;c<o.length;c+=1)o[c].l(l);n=nt()},m(l,c){ke(e,l,c),Xe(l,t,c);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(l,c);Xe(l,n,c),i=!0},p(l,c){const u={};if(c&1&&(u.visual=l[2]),e.$set(u),c&3){s=l[1].getChildJoints(l[0].child);let f;for(f=0;f<s.length;f+=1){const d=tu(l,s,f);o[f]?(o[f].p(d,c),pe(o[f],1)):(o[f]=nu(d),o[f].c(),pe(o[f],1),o[f].m(n.parentNode,n))}for(xn(),f=s.length;f<o.length;f+=1)a(f);Sn()}},i(l){if(!i){pe(e.$$.fragment,l);for(let c=0;c<s.length;c+=1)pe(o[c]);i=!0}},o(l){me(e.$$.fragment,l),o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)me(o[c]);i=!1},d(l){Ne(e,l),l&&Oe(t),Ro(o,l),l&&Oe(n)}}}function tb(r){let e,t,n=r[0].child.visual,i=[];for(let o=0;o<n.length;o+=1)i[o]=iu(eu(r,n,o));const s=o=>me(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=nt()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=nt()},m(o,a){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(o,a);Xe(o,e,a),t=!0},p(o,a){if(a&3){n=o[0].child.visual;let l;for(l=0;l<n.length;l+=1){const c=eu(o,n,l);i[l]?(i[l].p(c,a),pe(i[l],1)):(i[l]=iu(c),i[l].c(),pe(i[l],1),i[l].m(e.parentNode,e))}for(xn(),l=n.length;l<i.length;l+=1)s(l);Sn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)pe(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)me(i[a]);t=!1},d(o){Ro(i,o),o&&Oe(e)}}}function nb(r){let e,t=`<!-- Joint ${r[0].name} -->`,n,i,s;return i=new en({props:{type:ti,rotation:r[0].origin_rpy,position:r[0].origin_xyz,$$slots:{default:[tb]},$$scope:{ctx:r}}}),{c(){e=new nr(!1),n=It(),Pe(i.$$.fragment),this.h()},l(o){e=ir(o,!1),n=Dt(o),Ue(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Xe(o,n,a),ke(i,o,a),s=!0},p(o,[a]){(!s||a&1)&&t!==(t=`<!-- Joint ${o[0].name} -->`)&&e.p(t);const l={};a&1&&(l.rotation=o[0].origin_rpy),a&1&&(l.position=o[0].origin_xyz),a&259&&(l.$$scope={dirty:a,ctx:o}),i.$set(l)},i(o){s||(pe(i.$$.fragment,o),s=!0)},o(o){me(i.$$.fragment,o),s=!1},d(o){o&&e.d(),o&&Oe(n),Ne(i,o)}}}function ib(r,e,t){let{joint:n}=e,{parser:i}=e;return r.$$set=s=>{"joint"in s&&t(0,n=s.joint),"parser"in s&&t(1,i=s.parser)},[n,i]}class hf extends xt{constructor(e){super(),St(this,e,ib,nb,mt,{joint:0,parser:1})}}function ru(r,e,t){const n=r.slice();return n[3]=e[t],n}function su(r){let e,t;return e=new hf({props:{joint:r[3],parser:r[1]}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.joint=n[3]),i&2&&(s.parser=n[1]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function rb(r){let e,t,n=r[1].getRootJoints(),i=[];for(let o=0;o<n.length;o+=1)i[o]=su(ru(r,n,o));const s=o=>me(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=nt()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=nt()},m(o,a){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(o,a);Xe(o,e,a),t=!0},p(o,a){if(a&2){n=o[1].getRootJoints();let l;for(l=0;l<n.length;l+=1){const c=ru(o,n,l);i[l]?(i[l].p(c,a),pe(i[l],1)):(i[l]=su(c),i[l].c(),pe(i[l],1),i[l].m(e.parentNode,e))}for(xn(),l=n.length;l<i.length;l+=1)s(l);Sn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)pe(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)me(i[a]);t=!1},d(o){Ro(i,o),o&&Oe(e)}}}function sb(r){let e,t;return e=new en({props:{type:ti,position:r[2],quaternion:r[0],$$slots:{default:[rb]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,[i]){const s={};i&4&&(s.position=n[2]),i&1&&(s.quaternion=n[0]),i&66&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function ab(r,e,t){let{parser:n}=e,{position:i=[0,0,0]}=e,{quaternion:s=void 0}=e;if(!s){const o=new ri;o.setFromAxisAngle(new H(-1,0,0),Math.PI*.5),s=[o.x,o.y,o.z,o.w]}return r.$$set=o=>{"parser"in o&&t(1,n=o.parser),"position"in o&&t(2,i=o.position),"quaternion"in o&&t(0,s=o.quaternion)},[s,n,i]}class ob extends xt{constructor(e){super(),St(this,e,ab,sb,mt,{parser:1,position:2,quaternion:0})}}new H;new H;new H;const lb={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

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

		}`},cb={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

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

		}`},zi=r=>{let e=!1;const t=rn(r());return{...t,memoize:(...i)=>{if(!e){e=!0;return}t.set(r())}}};function ub(r){let e,t,n,i;return e=new hv({props:{material:r[19],geometry:r[9],renderOrder:r[7],scale:{y:-1},rotation:{x:-Math.PI/2}}}),n=new $0({props:{camera:r[18],useCamera:!1}}),{c(){Pe(e.$$.fragment),t=It(),Pe(n.$$.fragment)},l(s){Ue(e.$$.fragment,s),t=Dt(s),Ue(n.$$.fragment,s)},m(s,o){ke(e,s,o),Xe(s,t,o),ke(n,s,o),i=!0},p(s,o){const a={};o[0]&512&&(a.geometry=s[9]),o[0]&128&&(a.renderOrder=s[7]),e.$set(a)},i(s){i||(pe(e.$$.fragment,s),pe(n.$$.fragment,s),i=!0)},o(s){me(e.$$.fragment,s),me(n.$$.fragment,s),i=!1},d(s){Ne(e,s),s&&Oe(t),Ne(n,s)}}}function fb(r){let e,t,n;function i(o){r[35](o)}let s={rotation:r[10],position:r[1],lookAt:r[2],viewportAware:r[3],castShadow:r[4],receiveShadow:r[5],frustumCulled:r[6],visible:r[8],renderOrder:r[7],$$slots:{default:[ub]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new _v({props:s}),Rn.push(()=>er(e,"inViewport",i)),e.$on("viewportenter",r[36]),e.$on("viewportleave",r[37]),{c(){Pe(e.$$.fragment)},l(o){Ue(e.$$.fragment,o)},m(o,a){ke(e,o,a),n=!0},p(o,a){const l={};a[0]&1024&&(l.rotation=o[10]),a[0]&2&&(l.position=o[1]),a[0]&4&&(l.lookAt=o[2]),a[0]&8&&(l.viewportAware=o[3]),a[0]&16&&(l.castShadow=o[4]),a[0]&32&&(l.receiveShadow=o[5]),a[0]&64&&(l.frustumCulled=o[6]),a[0]&256&&(l.visible=o[8]),a[0]&128&&(l.renderOrder=o[7]),a[0]&640|a[1]&262144&&(l.$$scope={dirty:a,ctx:o}),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],tr(()=>t=!1)),e.$set(l)},i(o){n||(pe(e.$$.fragment,o),n=!0)},o(o){me(e.$$.fragment,o),n=!1},d(o){Ne(e,o)}}}function db(r,e,t){let n,i,s,o,a,l,c,{position:u=void 0}=e,{rotation:f=void 0}=e,{lookAt:d=void 0}=e,{viewportAware:m=!1}=e,{inViewport:g=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:x=void 0}=e,{visible:S=void 0}=e,{opacity:w=1}=e,{width:M=1}=e,{height:C=1}=e,{blur:G=1}=e,{far:v=10}=e,{smooth:D=!0}=e,{resolution:L=512}=e,{frames:j=1/0}=e,{scale:K=10}=e,{color:V="#000000"}=e,{depthWrite:U=!1}=e;const{scene:O,renderer:B}=wn();if(!B)throw new Error("ContactShadow: WebGLRenderer is undefined, is this component a child of <Canvas>?");const J=zi(()=>M*(Array.isArray(K)?K[0]:K||1));Rt(r,J,ee=>t(34,c=ee));const X=zi(()=>C*(Array.isArray(K)?K[1]:K||1));Rt(r,X,ee=>t(33,l=ee));const re=zi(()=>{const ee=new ii(L,L);return ee.texture.generateMipmaps=!1,ee.texture.encoding=B.outputEncoding,ee});Rt(r,re,ee=>t(44,o=ee));const ne=zi(()=>{const ee=new ii(L,L);return ee.texture.generateMipmaps=!1,ee});Rt(r,ne,ee=>t(43,s=ee));const R=zi(()=>new s0(c,l).rotateX(Math.PI/2));Rt(r,R,ee=>t(9,i=ee));const q=zi(()=>new cn(i));Rt(r,q,ee=>t(45,a=ee));const ie=zi(()=>{const ee=new Vu({depthTest:!1,depthWrite:!1});return ee.onBeforeCompile=We=>{We.uniforms={...We.uniforms,uColor:{value:new $e(V).convertSRGBToLinear()}},We.fragmentShader=`uniform vec3 uColor;
`+We.fragmentShader,We.fragmentShader=We.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),We.fragmentShader=We.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},ee});Rt(r,ie,ee=>t(42,n=ee));const Q=new Zn({...lb,depthTest:!1}),te=new Zn({...cb,depthTest:!1}),F=new xs(-c/2,c/2,l/2,-l/2,0,v);F.updateProjectionMatrix();const ae=new kr({map:o.texture,transparent:!0,opacity:w,depthWrite:U}),be=ee=>{const We=a;We.visible=!0,We.material=Q,Q.uniforms.tDiffuse.value=o.texture,Q.uniforms.h.value=ee*1/256,B.setRenderTarget(s),B.render(We,F),We.material=te,te.uniforms.tDiffuse.value=s.texture,te.uniforms.v.value=ee*1/256,B.setRenderTarget(o),B.render(We,F),We.visible=!1},Le=()=>{const ee=O.background;O.background=null;const We=O.overrideMaterial;O.overrideMaterial=n;const bt=B.getClearAlpha();B.setClearAlpha(0),B.setRenderTarget(o),B.render(O,F),O.overrideMaterial=We,be(G),D&&be(G*.4),B.setRenderTarget(null),O.background=ee,B.setClearAlpha(bt)},we=()=>{Le()};let Qe=0;Ea(()=>{(j===1/0||Qe<j)&&(Le(),Qe+=1)}),At(()=>{o.dispose(),s.dispose(),i.dispose(),n.dispose(),Q.dispose(),te.dispose(),ae.dispose()});let He={...f,x:(f==null?void 0:f.x)??0+Math.PI/2};function Ee(ee){g=ee,t(0,g)}function Lt(ee){Et.call(this,r,ee)}function de(ee){Et.call(this,r,ee)}return r.$$set=ee=>{"position"in ee&&t(1,u=ee.position),"rotation"in ee&&t(20,f=ee.rotation),"lookAt"in ee&&t(2,d=ee.lookAt),"viewportAware"in ee&&t(3,m=ee.viewportAware),"inViewport"in ee&&t(0,g=ee.inViewport),"castShadow"in ee&&t(4,h=ee.castShadow),"receiveShadow"in ee&&t(5,p=ee.receiveShadow),"frustumCulled"in ee&&t(6,_=ee.frustumCulled),"renderOrder"in ee&&t(7,x=ee.renderOrder),"visible"in ee&&t(8,S=ee.visible),"opacity"in ee&&t(21,w=ee.opacity),"width"in ee&&t(22,M=ee.width),"height"in ee&&t(23,C=ee.height),"blur"in ee&&t(24,G=ee.blur),"far"in ee&&t(25,v=ee.far),"smooth"in ee&&t(26,D=ee.smooth),"resolution"in ee&&t(27,L=ee.resolution),"frames"in ee&&t(28,j=ee.frames),"scale"in ee&&t(29,K=ee.scale),"color"in ee&&t(30,V=ee.color),"depthWrite"in ee&&t(31,U=ee.depthWrite)},r.$$.update=()=>{r.$$.dirty[0]&541065216&&J.memoize([M,K]),r.$$.dirty[0]&545259520&&X.memoize(C,K),r.$$.dirty[0]&134217728&&re.memoize(L),r.$$.dirty[0]&134217728&&ne.memoize(L),r.$$.dirty[1]&12&&R.memoize(c,l),r.$$.dirty[0]&512&&q.memoize(i),r.$$.dirty[0]&1073741824&&ie.memoize(V),r.$$.dirty[0]&1048576&&t(10,He={...f,x:(f==null?void 0:f.x)??0+Math.PI/2})},[g,u,d,m,h,p,_,x,S,i,He,J,X,re,ne,R,q,ie,F,ae,f,w,M,C,G,v,D,L,j,K,V,U,we,l,c,Ee,Lt,de]}class hb extends xt{constructor(e){super(),St(this,e,db,fb,mt,{position:1,rotation:20,lookAt:2,viewportAware:3,inViewport:0,castShadow:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,opacity:21,width:22,height:23,blur:24,far:25,smooth:26,resolution:27,frames:28,scale:29,color:30,depthWrite:31,refresh:32},null,[-1,-1])}get refresh(){return this.$$.ctx[32]}}function au(r){let e,t;return e=new hb({props:{scale:r[1]*4,far:r[1],blur:2}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.scale=n[1]*4),i&2&&(s.far=n[1]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function pb(r){let e,t,n=r[2]&&au(r);return{c(){n&&n.c(),e=nt()},l(i){n&&n.l(i),e=nt()},m(i,s){n&&n.m(i,s),Xe(i,e,s),t=!0},p(i,s){i[2]?n?(n.p(i,s),s&4&&pe(n,1)):(n=au(i),n.c(),pe(n,1),n.m(e.parentNode,e)):n&&(xn(),me(n,1,1,()=>{n=null}),Sn())},i(i){t||(pe(n),t=!0)},o(i){me(n),t=!1},d(i){n&&n.d(i),i&&Oe(e)}}}function mb(r){let e,t,n,i,s,o,a,l;return e=new en({props:{type:ef,intensity:r[0]/3}}),n=new en({props:{type:$u,penumbra:1,position:[r[8].main[0]*r[1],r[8].main[1]*r[1],r[8].main[2]*r[1]],intensity:r[0]*2,castShadow:r[2],"shadow-bias":r[3],"shadow-normalBias":r[4],"shadow-mapSize":r[5]}}),s=new en({props:{type:ds,position:[r[8].fill[0]*r[1],r[8].fill[1]*r[1],r[8].fill[2]*r[1]],intensity:r[0]}}),a=new en({props:{type:ti,position:[0,-r[6]/2-r[7]/2,0],$$slots:{default:[pb]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment),t=It(),Pe(n.$$.fragment),i=It(),Pe(s.$$.fragment),o=It(),Pe(a.$$.fragment)},l(c){Ue(e.$$.fragment,c),t=Dt(c),Ue(n.$$.fragment,c),i=Dt(c),Ue(s.$$.fragment,c),o=Dt(c),Ue(a.$$.fragment,c)},m(c,u){ke(e,c,u),Xe(c,t,u),ke(n,c,u),Xe(c,i,u),ke(s,c,u),Xe(c,o,u),ke(a,c,u),l=!0},p(c,[u]){const f={};u&1&&(f.intensity=c[0]/3),e.$set(f);const d={};u&2&&(d.position=[c[8].main[0]*c[1],c[8].main[1]*c[1],c[8].main[2]*c[1]]),u&1&&(d.intensity=c[0]*2),u&4&&(d.castShadow=c[2]),u&8&&(d["shadow-bias"]=c[3]),u&16&&(d["shadow-normalBias"]=c[4]),u&32&&(d["shadow-mapSize"]=c[5]),n.$set(d);const m={};u&2&&(m.position=[c[8].fill[0]*c[1],c[8].fill[1]*c[1],c[8].fill[2]*c[1]]),u&1&&(m.intensity=c[0]),s.$set(m);const g={};u&192&&(g.position=[0,-c[6]/2-c[7]/2,0]),u&2054&&(g.$$scope={dirty:u,ctx:c}),a.$set(g)},i(c){l||(pe(e.$$.fragment,c),pe(n.$$.fragment,c),pe(s.$$.fragment,c),pe(a.$$.fragment,c),l=!0)},o(c){me(e.$$.fragment,c),me(n.$$.fragment,c),me(s.$$.fragment,c),me(a.$$.fragment,c),l=!1},d(c){Ne(e,c),c&&Oe(t),Ne(n,c),c&&Oe(i),Ne(s,c),c&&Oe(o),Ne(a,c)}}}function gb(r,e,t){let{intensity:n=.5}=e,{radius:i=1}=e,{shadows:s=!0}=e,{preset_name:o="rembrandt"}=e,{shadowBias:a=-1e-4}=e,{normalBias:l=0}=e,{shadowSize:c=256}=e,{height:u=1}=e,{shadowOffset:f=1}=e;const m={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}}[o];return r.$$set=g=>{"intensity"in g&&t(0,n=g.intensity),"radius"in g&&t(1,i=g.radius),"shadows"in g&&t(2,s=g.shadows),"preset_name"in g&&t(9,o=g.preset_name),"shadowBias"in g&&t(3,a=g.shadowBias),"normalBias"in g&&t(4,l=g.normalBias),"shadowSize"in g&&t(5,c=g.shadowSize),"height"in g&&t(6,u=g.height),"shadowOffset"in g&&t(7,f=g.shadowOffset)},[n,i,s,a,l,c,u,f,m,o]}class _b extends xt{constructor(e){super(),St(this,e,gb,mb,mt,{intensity:0,radius:1,shadows:2,preset_name:9,shadowBias:3,normalBias:4,shadowSize:5,height:6,shadowOffset:7})}}function vb(r,e,t){let{size:n=10}=e,{divisions:i=10}=e,{position:s=[0,0,0]}=e;const{scene:o,invalidate:a}=wn(),l=new r0(n,i);return l.position.x=s[0],l.position.y=s[1],l.position.z=s[2],o.add(l),At(()=>{o.remove(l)}),r.$$set=c=>{"size"in c&&t(0,n=c.size),"divisions"in c&&t(1,i=c.divisions),"position"in c&&t(2,s=c.position)},[n,i,s]}class bb extends xt{constructor(e){super(),St(this,e,vb,null,mt,{size:0,divisions:1,position:2})}}var Lo=function(r,e){return Lo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Lo(r,e)};function Ta(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Lo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var vi=function(){return vi=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},vi.apply(this,arguments)};function Qs(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ou(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s}function yb(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,s;n<i;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return r.concat(s||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zo=function(){function r(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _o="mdc-dom-focus-sentinel",xb=function(){function r(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return r.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},r.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+_o)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},r.prototype.wrapTabFocus=function(e){var t=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",function(){var s=t.getFocusableElements(e);s.length>0&&s[s.length-1].focus()}),i.addEventListener("focus",function(){var s=t.getFocusableElements(e);s.length>0&&s[0].focus()}),e.insertBefore(n,e.children[0]),e.appendChild(i)},r.prototype.focusInitialElement=function(e,t){var n=0;t&&(n=Math.max(e.indexOf(t),0)),e[n].focus()},r.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(n){var i=n.getAttribute("aria-disabled")==="true"||n.getAttribute("disabled")!=null||n.getAttribute("hidden")!=null||n.getAttribute("aria-hidden")==="true",s=n.tabIndex>=0&&n.getBoundingClientRect().width>0&&!n.classList.contains(_o)&&!i,o=!1;if(s){var a=getComputedStyle(n);o=a.display==="none"||a.visibility==="hidden"}return s&&!o})},r.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(_o),e},r}();const Sb=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:xb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function wb(r,e){if(r.closest)return r.closest(e);for(var t=r;t;){if(pf(t,e))return t;t=t.parentElement}return null}function pf(r,e){var t=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return t.call(r,e)}function Mb(r){var e=r;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const mf=Object.freeze(Object.defineProperty({__proto__:null,closest:wb,estimateScrollWidth:Mb,matches:pf},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mi,mi,pt={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Mi={},Mi[""+pt.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Mi[""+pt.LIST_ITEM_CLASS]="mdc-list-item",Mi[""+pt.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Mi[""+pt.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Mi[""+pt.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Mi[""+pt.ROOT]="mdc-list";var Ar=(mi={},mi[""+pt.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",mi[""+pt.LIST_ITEM_CLASS]="mdc-deprecated-list-item",mi[""+pt.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",mi[""+pt.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",mi[""+pt.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",mi[""+pt.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",mi[""+pt.ROOT]="mdc-deprecated-list",mi),Ai={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+pt.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+pt.LIST_ITEM_CLASS+` a,
    .`+Ar[pt.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ar[pt.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+pt.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+pt.LIST_ITEM_CLASS+` a,
    .`+pt.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+pt.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Ar[pt.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ar[pt.LIST_ITEM_CLASS]+` a,
    .`+Ar[pt.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Ar[pt.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},Ht={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ot={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Mn=new Set;Mn.add(ot.BACKSPACE);Mn.add(ot.ENTER);Mn.add(ot.SPACEBAR);Mn.add(ot.PAGE_UP);Mn.add(ot.PAGE_DOWN);Mn.add(ot.END);Mn.add(ot.HOME);Mn.add(ot.ARROW_LEFT);Mn.add(ot.ARROW_UP);Mn.add(ot.ARROW_RIGHT);Mn.add(ot.ARROW_DOWN);Mn.add(ot.DELETE);Mn.add(ot.ESCAPE);Mn.add(ot.TAB);var kn={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},An=new Map;An.set(kn.BACKSPACE,ot.BACKSPACE);An.set(kn.ENTER,ot.ENTER);An.set(kn.SPACEBAR,ot.SPACEBAR);An.set(kn.PAGE_UP,ot.PAGE_UP);An.set(kn.PAGE_DOWN,ot.PAGE_DOWN);An.set(kn.END,ot.END);An.set(kn.HOME,ot.HOME);An.set(kn.ARROW_LEFT,ot.ARROW_LEFT);An.set(kn.ARROW_UP,ot.ARROW_UP);An.set(kn.ARROW_RIGHT,ot.ARROW_RIGHT);An.set(kn.ARROW_DOWN,ot.ARROW_DOWN);An.set(kn.DELETE,ot.DELETE);An.set(kn.ESCAPE,ot.ESCAPE);An.set(kn.TAB,ot.TAB);var Pi=new Set;Pi.add(ot.PAGE_UP);Pi.add(ot.PAGE_DOWN);Pi.add(ot.END);Pi.add(ot.HOME);Pi.add(ot.ARROW_LEFT);Pi.add(ot.ARROW_UP);Pi.add(ot.ARROW_RIGHT);Pi.add(ot.ARROW_DOWN);function ln(r){var e=r.key;if(Mn.has(e))return e;var t=An.get(r.keyCode);return t||ot.UNKNOWN}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ab=["input","button","textarea","select"],Gn=function(r){var e=r.target;if(e){var t=(""+e.tagName).toLowerCase();Ab.indexOf(t)===-1&&r.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Eb(){var r={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return r}function Tb(r,e){for(var t=new Map,n=0;n<r;n++){var i=e(n).trim();if(i){var s=i[0].toLowerCase();t.has(s)||t.set(s,[]),t.get(s).push({text:i.toLowerCase(),index:n})}}return t.forEach(function(o){o.sort(function(a,l){return a.index-l.index})}),t}function Io(r,e){var t=r.nextChar,n=r.focusItemAtIndex,i=r.sortedIndexByFirstChar,s=r.focusedItemIndex,o=r.skipFocus,a=r.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){_f(e)},Ht.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var l;return e.typeaheadBuffer.length===1?l=Cb(i,s,a,e):l=Lb(i,a,e),l!==-1&&!o&&n(l),l}function Cb(r,e,t,n){var i=n.typeaheadBuffer[0],s=r.get(i);if(!s)return-1;if(i===n.currentFirstChar&&s[n.sortedIndexCursor].index===e){n.sortedIndexCursor=(n.sortedIndexCursor+1)%s.length;var o=s[n.sortedIndexCursor].index;if(!t(o))return o}n.currentFirstChar=i;var a=-1,l;for(l=0;l<s.length;l++)if(!t(s[l].index)){a=l;break}for(;l<s.length;l++)if(s[l].index>e&&!t(s[l].index)){a=l;break}return a!==-1?(n.sortedIndexCursor=a,s[n.sortedIndexCursor].index):-1}function Lb(r,e,t){var n=t.typeaheadBuffer[0],i=r.get(n);if(!i)return-1;var s=i[t.sortedIndexCursor];if(s.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(s.index))return s.index;for(var o=(t.sortedIndexCursor+1)%i.length,a=-1;o!==t.sortedIndexCursor;){var l=i[o],c=l.text.lastIndexOf(t.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){a=o;break}o=(o+1)%i.length}return a!==-1?(t.sortedIndexCursor=a,i[t.sortedIndexCursor].index):-1}function gf(r){return r.typeaheadBuffer.length>0}function _f(r){r.typeaheadBuffer=""}function lu(r,e){var t=r.event,n=r.isTargetListItem,i=r.focusedItemIndex,s=r.focusItemAtIndex,o=r.sortedIndexByFirstChar,a=r.isItemAtIndexDisabled,l=ln(t)==="ArrowLeft",c=ln(t)==="ArrowUp",u=ln(t)==="ArrowRight",f=ln(t)==="ArrowDown",d=ln(t)==="Home",m=ln(t)==="End",g=ln(t)==="Enter",h=ln(t)==="Spacebar";if(t.altKey||t.ctrlKey||t.metaKey||l||c||u||f||d||m||g)return-1;var p=!h&&t.key.length===1;if(p){Gn(t);var _={focusItemAtIndex:s,focusedItemIndex:i,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return Io(_,e)}if(!h)return-1;n&&Gn(t);var x=n&&gf(e);if(x){var _={focusItemAtIndex:s,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return Io(_,e)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ib(r){return r instanceof Array}var Db=["Alt","Control","Meta","Shift"];function cu(r){var e=new Set(r?Db.filter(function(t){return r.getModifierState(t)}):[]);return function(t){return t.every(function(n){return e.has(n)})&&t.length===e.size}}var Rb=function(r){Ta(e,r);function e(t){var n=r.call(this,vi(vi({},e.defaultAdapter),t))||this;return n.wrapFocus=!1,n.isVertical=!0,n.isSingleSelectionList=!1,n.areDisabledItemsFocusable=!0,n.selectedIndex=Ht.UNSET_INDEX,n.focusedItemIndex=Ht.UNSET_INDEX,n.useActivatedClass=!1,n.useSelectedAttr=!1,n.ariaCurrentAttrValue=null,n.isCheckboxList=!1,n.isRadioList=!1,n.lastSelectedIndex=null,n.hasTypeahead=!1,n.typeaheadState=Eb(),n.sortedIndexByFirstChar=new Map,n}return Object.defineProperty(e,"strings",{get:function(){return Ai},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return pt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},notifySelectionChange:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.setDisabledItemsFocusable=function(t){this.areDisabledItemsFocusable=t},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==Ht.UNSET_INDEX){var n=this.adapter.listItemAtIndexHasClass(t,pt.LIST_ITEM_ACTIVATED_CLASS);n&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=Ht.UNSET_INDEX,n=this.adapter.getListItemCount(),i=0;i<n;i++){var s=this.adapter.listItemAtIndexHasClass(i,pt.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(i,pt.LIST_ITEM_ACTIVATED_CLASS);if(s||o){t=i;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&gf(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n={}),this.isIndexValid(t)&&(this.isCheckboxList?this.setCheckboxAtIndex(t,n):this.isRadioList?this.setRadioAtIndex(t,n):this.setSingleSelectionAtIndex(t,n))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var n=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.isIndexDisabled=function(t){return this.adapter.listItemAtIndexHasClass(t,pt.LIST_ITEM_DISABLED_CLASS)},e.prototype.handleKeydown=function(t,n,i){var s=this,o,a=ln(t)==="ArrowLeft",l=ln(t)==="ArrowUp",c=ln(t)==="ArrowRight",u=ln(t)==="ArrowDown",f=ln(t)==="Home",d=ln(t)==="End",m=ln(t)==="Enter",g=ln(t)==="Spacebar",h=this.isVertical&&u||!this.isVertical&&c,p=this.isVertical&&l||!this.isVertical&&a,_=t.key==="A"||t.key==="a",x=cu(t);if(this.adapter.isRootFocused()){if((p||d)&&x([]))t.preventDefault(),this.focusLastElement();else if((h||f)&&x([]))t.preventDefault(),this.focusFirstElement();else if(p&&x(["Shift"])&&this.isCheckboxList){t.preventDefault();var S=this.focusLastElement();S!==-1&&this.setSelectedIndexOnAction(S,!1)}else if(h&&x(["Shift"])&&this.isCheckboxList){t.preventDefault();var S=this.focusFirstElement();S!==-1&&this.setSelectedIndexOnAction(S,!1)}if(this.hasTypeahead){var w={event:t,focusItemAtIndex:function(G){s.focusItemAtIndex(G)},focusedItemIndex:-1,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(G){return s.isIndexDisabled(G)}};lu(w,this.typeaheadState)}return}var M=this.adapter.getFocusedElementIndex();if(!(M===-1&&(M=i,M<0))){if(h&&x([]))Gn(t),this.focusNextElement(M);else if(p&&x([]))Gn(t),this.focusPrevElement(M);else if(h&&x(["Shift"])&&this.isCheckboxList){Gn(t);var S=this.focusNextElement(M);S!==-1&&this.setSelectedIndexOnAction(S,!1)}else if(p&&x(["Shift"])&&this.isCheckboxList){Gn(t);var S=this.focusPrevElement(M);S!==-1&&this.setSelectedIndexOnAction(S,!1)}else if(f&&x([]))Gn(t),this.focusFirstElement();else if(d&&x([]))Gn(t),this.focusLastElement();else if(f&&x(["Control","Shift"])&&this.isCheckboxList){if(Gn(t),this.isIndexDisabled(M))return;this.focusFirstElement(),this.toggleCheckboxRange(0,M,M)}else if(d&&x(["Control","Shift"])&&this.isCheckboxList){if(Gn(t),this.isIndexDisabled(M))return;this.focusLastElement(),this.toggleCheckboxRange(M,this.adapter.getListItemCount()-1,M)}else if(_&&x(["Control"])&&this.isCheckboxList)t.preventDefault(),this.checkboxListToggleAll(this.selectedIndex===Ht.UNSET_INDEX?[]:this.selectedIndex,!0);else if((m||g)&&x([])){if(n){var C=t.target;if(C&&C.tagName==="A"&&m||(Gn(t),this.isIndexDisabled(M)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(M,!1),this.adapter.notifyAction(M))}}else if((m||g)&&x(["Shift"])&&this.isCheckboxList){var C=t.target;if(C&&C.tagName==="A"&&m||(Gn(t),this.isIndexDisabled(M)))return;this.isTypeaheadInProgress()||(this.toggleCheckboxRange((o=this.lastSelectedIndex)!==null&&o!==void 0?o:M,M,M),this.adapter.notifyAction(M))}if(this.hasTypeahead){var w={event:t,focusItemAtIndex:function(v){s.focusItemAtIndex(v)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(v){return s.isIndexDisabled(v)}};lu(w,this.typeaheadState)}}},e.prototype.handleClick=function(t,n,i){var s,o=cu(i);t!==Ht.UNSET_INDEX&&(this.isIndexDisabled(t)||(o([])?(this.isSelectableList()&&this.setSelectedIndexOnAction(t,n),this.adapter.notifyAction(t)):this.isCheckboxList&&o(["Shift"])&&(this.toggleCheckboxRange((s=this.lastSelectedIndex)!==null&&s!==void 0?s:t,t,t),this.adapter.notifyAction(t))))},e.prototype.focusNextElement=function(t){var n=this.adapter.getListItemCount(),i=t,s=null;do{if(i++,i>=n)if(this.wrapFocus)i=0;else return t;if(i===s)return-1;s=s??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusPrevElement=function(t){var n=this.adapter.getListItemCount(),i=t,s=null;do{if(i--,i<0)if(this.wrapFocus)i=n-1;else return t;if(i===s)return-1;s=s??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusNextElement(-1)},e.prototype.focusLastElement=function(){return this.focusPrevElement(this.adapter.getListItemCount())},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,n){this.isIndexValid(t,!1)&&(n?(this.adapter.removeClassForElementIndex(t,pt.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,Ai.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,pt.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,Ai.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,n){if(n===void 0&&(n={}),!(this.selectedIndex===t&&!n.forceUpdate)){var i=pt.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(i=pt.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Ht.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,i),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==Ht.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,i),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t])}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===Ht.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,Ai.ARIA_CURRENT));var n=this.ariaCurrentAttrValue!==null,i=n?Ai.ARIA_CURRENT:Ai.ARIA_SELECTED;if(this.selectedIndex!==Ht.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),t!==Ht.UNSET_INDEX){var s=n?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,i,s)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Ai.ARIA_SELECTED:Ai.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t,n){n===void 0&&(n={});var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),!(this.selectedIndex===t&&!n.forceUpdate)&&(this.selectedIndex!==Ht.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t]))},e.prototype.setCheckboxAtIndex=function(t,n){n===void 0&&(n={});for(var i=this.selectedIndex,s=n.isUserInteraction?new Set(i===Ht.UNSET_INDEX?[]:i):null,o=this.getSelectionAttribute(),a=[],l=0;l<this.adapter.getListItemCount();l++){var c=s==null?void 0:s.has(l),u=t.indexOf(l)>=0;u!==c&&a.push(l),this.adapter.setCheckedCheckboxOrRadioAtIndex(l,u),this.adapter.setAttributeForElementIndex(l,o,u?"true":"false")}this.selectedIndex=t,n.isUserInteraction&&a.length&&this.adapter.notifySelectionChange(a)},e.prototype.toggleCheckboxRange=function(t,n,i){this.lastSelectedIndex=i;for(var s=new Set(this.selectedIndex===Ht.UNSET_INDEX?[]:this.selectedIndex),o=!(s!=null&&s.has(i)),a=ou([t,n].sort(),2),l=a[0],c=a[1],u=this.getSelectionAttribute(),f=[],d=l;d<=c;d++)if(!this.isIndexDisabled(d)){var m=s.has(d);o!==m&&(f.push(d),this.adapter.setCheckedCheckboxOrRadioAtIndex(d,o),this.adapter.setAttributeForElementIndex(d,u,""+o),o?s.add(d):s.delete(d))}f.length&&(this.selectedIndex=yb([],ou(s)),this.adapter.notifySelectionChange(f))},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===Ht.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==Ht.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Ht.UNSET_INDEX?this.selectedIndex:Ib(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,n){return Math.min(t,n)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t,n){var i=this;if(n===void 0&&(n=!0),t instanceof Array){if(!this.isCheckboxList&&n)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(s){return i.isIndexInRange(s)})}else if(typeof t=="number"){if(this.isCheckboxList&&n)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===Ht.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var n=this.adapter.getListItemCount();return t>=0&&t<n},e.prototype.setSelectedIndexOnAction=function(t,n){this.lastSelectedIndex=t,this.isCheckboxList?(this.toggleCheckboxAtIndex(t,n),this.adapter.notifySelectionChange([t])):this.setSelectedIndex(t,{isUserInteraction:!0})},e.prototype.toggleCheckboxAtIndex=function(t,n){var i=this.getSelectionAttribute(),s=this.adapter.isCheckboxCheckedAtIndex(t),o;n?o=s:(o=!s,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,o)),this.adapter.setAttributeForElementIndex(t,i,o?"true":"false");var a=this.selectedIndex===Ht.UNSET_INDEX?[]:this.selectedIndex.slice();o?a.push(t):a=a.filter(function(l){return l!==t}),this.selectedIndex=a},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.checkboxListToggleAll=function(t,n){var i=this.adapter.getListItemCount();if(t.length===i)this.setCheckboxAtIndex([],{isUserInteraction:n});else{for(var s=[],o=0;o<i;o++)(!this.isIndexDisabled(o)||t.indexOf(o)>-1)&&s.push(o);this.setCheckboxAtIndex(s,{isUserInteraction:n})}},e.prototype.typeaheadMatchItem=function(t,n,i){var s=this;i===void 0&&(i=!1);var o={focusItemAtIndex:function(a){s.focusItemAtIndex(a)},focusedItemIndex:n||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(a){return s.isIndexDisabled(a)}};return Io(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return Tb(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){_f(this.typeaheadState)},e}(Zo);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var In={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},Pb={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vf=function(r){Ta(e,r);function e(t){var n=r.call(this,vi(vi({},e.defaultAdapter),t))||this;return n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(e,"strings",{get:function(){return Pb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return In},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(In.OPEN),this.adapter.addClass(In.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(In.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(In.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(In.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(In.OPENING)||this.adapter.hasClass(In.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(In.CLOSING)},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,s=i==="Escape"||n===27;s&&this.close()},e.prototype.handleTransitionEnd=function(t){var n=In.OPENING,i=In.CLOSING,s=In.OPEN,o=In.ANIMATE,a=In.ROOT,l=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,a);l&&(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(n),this.adapter.removeClass(i))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return!!t.classList},e}(Zo);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var kb=function(r){Ta(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(vf);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Nb(r){return r===void 0&&(r=window),Fb(r)?{passive:!0}:!1}function Fb(r){r===void 0&&(r=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};r.document.addEventListener("test",n,t),r.document.removeEventListener("test",n,t)}catch{e=!1}return e}const Ob=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Nb},Symbol.toStringTag,{value:"Module"}));function Di(r){return Object.entries(r).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function Ci(r,e,t,n={bubbles:!0},i=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!r)throw new Error("Tried to dipatch event without element.");const s=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));if(r==null||r.dispatchEvent(s),i&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:t}));r==null||r.dispatchEvent(o),o.defaultPrevented&&s.preventDefault()}return s}const uu=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Ub=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Ss(r){let e,t=[];r.$on=(i,s)=>{let o=i,a=()=>{};return e?a=e(o,s):t.push([o,s]),o.match(uu)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),()=>{a()}};function n(i){Et(r,i)}return i=>{const s=[],o={};e=(a,l)=>{let c=a,u=l,f=!1;const d=c.match(uu),m=c.match(Ub),g=d||m;if(c.match(/^SMUI:\w+:/)){const _=c.split(":");let x="";for(let S=0;S<_.length;S++)x+=S===_.length-1?":"+_[S]:_[S].split("-").map(w=>w.slice(0,1).toUpperCase()+w.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${x.split("$")[0]}.`),c=x}if(g){const _=c.split(d?":":"$");c=_[0];const x=_.slice(1).reduce((S,w)=>(S[w]=!0,S),{});x.passive&&(f=f||{},f.passive=!0),x.nonpassive&&(f=f||{},f.passive=!1),x.capture&&(f=f||{},f.capture=!0),x.once&&(f=f||{},f.once=!0),x.preventDefault&&(u=Ef(u)),x.stopPropagation&&(u=Tf(u))}const h=Vn(i,c,u,f),p=()=>{h();const _=s.indexOf(p);_>-1&&s.splice(_,1)};return s.push(p),c in o||(o[c]=Vn(i,c,n)),p};for(let a=0;a<t.length;a++)e(t[a][0],t[a][1]);return{destroy:()=>{for(let a=0;a<s.length;a++)s[a]();for(let a of Object.entries(o))a[1]()}}}}function Jo(r,e){let t=[];if(e)for(let n=0;n<e.length;n++){const i=e[n],s=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?t.push(s(r,i[1])):t.push(s(r))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let i=0;i<n.length;i++){const s=t[i];if(s&&s.update){const o=n[i];Array.isArray(o)&&o.length>1?s.update(o[1]):s.update()}}},destroy(){for(let n=0;n<t.length;n++){const i=t[n];i&&i.destroy&&i.destroy()}}}}function zb(r){let e,t,n,i,s,o;const a=r[15].default,l=un(a,r,r[14],null);let c=[{class:t=Di({[r[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":r[2]==="dismissible","mdc-drawer--modal":r[2]==="modal","smui-drawer__absolute":r[2]==="modal"&&!r[3],...r[6]})},r[8]],u={};for(let f=0;f<c.length;f+=1)u=tn(u,c[f]);return{c(){e=Zi("aside"),l&&l.c(),this.h()},l(f){e=Ji(f,"ASIDE",{class:!0});var d=Qi(e);l&&l.l(d),d.forEach(Oe),this.h()},h(){il(e,u)},m(f,d){Xe(f,e,d),l&&l.m(e,null),r[16](e),i=!0,s||(o=[Xi(n=Jo.call(null,e,r[0])),Xi(r[7].call(null,e)),Vn(e,"keydown",function(){cs(r[4]&&r[4].handleKeydown.bind(r[4]))&&(r[4]&&r[4].handleKeydown.bind(r[4])).apply(this,arguments)}),Vn(e,"transitionend",function(){cs(r[4]&&r[4].handleTransitionEnd.bind(r[4]))&&(r[4]&&r[4].handleTransitionEnd.bind(r[4])).apply(this,arguments)})],s=!0)},p(f,[d]){r=f,l&&l.p&&(!i||d&16384)&&fn(l,a,r,r[14],i?hn(a,r[14],d,null):dn(r[14]),null),il(e,u=Gr(c,[(!i||d&78&&t!==(t=Di({[r[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":r[2]==="dismissible","mdc-drawer--modal":r[2]==="modal","smui-drawer__absolute":r[2]==="modal"&&!r[3],...r[6]})))&&{class:t},d&256&&r[8]])),n&&cs(n.update)&&d&1&&n.update.call(null,r[0])},i(f){i||(pe(l,f),i=!0)},o(f){me(l,f),i=!1},d(f){f&&Oe(e),l&&l.d(f),r[16](null),s=!1,ha(o)}}}function Bb(r,e,t){const n=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let i=qn(e,n),{$$slots:s={},$$scope:o}=e;const{FocusTrap:a}=Sb,l=Ss(zr());let{use:c=[]}=e,{class:u=""}=e,{variant:f=void 0}=e,{open:d=!1}=e,{fixed:m=!0}=e,g,h,p={},_=null,x,S=!1;kt("SMUI:list:nav",!0),kt("SMUI:list:item:nav",!0),kt("SMUI:list:wrapFocus",!0);let w=f;Ur(()=>{x=new a(g,{skipInitialFocus:!0}),t(4,h=M()),h&&h.init()}),At(()=>{h&&h.destroy(),S&&S.removeEventListener("SMUIDrawerScrim:click",D)});function M(){var U,O;S&&S.removeEventListener("SMUIDrawerScrim:click",D),f==="modal"&&(S=(O=(U=g.parentNode)===null||U===void 0?void 0:U.querySelector(".mdc-drawer-scrim"))!==null&&O!==void 0?O:!1,S&&S.addEventListener("SMUIDrawerScrim:click",D));const B=f==="dismissible"?vf:f==="modal"?kb:void 0;return B?new B({addClass:G,removeClass:v,hasClass:C,elementHasClass:(J,X)=>J.classList.contains(X),saveFocus:()=>_=document.activeElement,restoreFocus:()=>{_&&"focus"in _&&g.contains(document.activeElement)&&_.focus()},focusActiveNavigationItem:()=>{const J=g.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");J&&J.focus()},notifyClose:()=>{t(9,d=!1),Ci(g,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{t(9,d=!0),Ci(g,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>x.trapFocus(),releaseFocus:()=>x.releaseFocus()}):void 0}function C(U){return U in p?p[U]:K().classList.contains(U)}function G(U){p[U]||t(6,p[U]=!0,p)}function v(U){(!(U in p)||p[U])&&t(6,p[U]=!1,p)}function D(){h&&"handleScrimClick"in h&&h.handleScrimClick()}function L(U){t(9,d=U)}function j(){return d}function K(){return g}function V(U){Rn[U?"unshift":"push"](()=>{g=U,t(5,g)})}return r.$$set=U=>{e=tn(tn({},e),Br(U)),t(8,i=qn(e,n)),"use"in U&&t(0,c=U.use),"class"in U&&t(1,u=U.class),"variant"in U&&t(2,f=U.variant),"open"in U&&t(9,d=U.open),"fixed"in U&&t(3,m=U.fixed),"$$scope"in U&&t(14,o=U.$$scope)},r.$$.update=()=>{r.$$.dirty&8212&&w!==f&&(t(13,w=f),h&&h.destroy(),t(6,p={}),t(4,h=M()),h&&h.init()),r.$$.dirty&528&&h&&h.isOpen()!==d&&(d?h.open():h.close())},[c,u,f,m,h,g,p,l,i,d,L,j,K,w,o,s,V]}class Gb extends xt{constructor(e){super(),St(this,e,Bb,zb,mt,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Vb(r){let e=r[1],t,n,i=r[1]&&vo(r);return{c(){i&&i.c(),t=nt()},l(s){i&&i.l(s),t=nt()},m(s,o){i&&i.m(s,o),Xe(s,t,o),n=!0},p(s,o){s[1]?e?mt(e,s[1])?(i.d(1),i=vo(s),e=s[1],i.c(),i.m(t.parentNode,t)):i.p(s,o):(i=vo(s),e=s[1],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=s[1])},i(s){n||(pe(i),n=!0)},o(s){me(i),n=!1},d(s){s&&Oe(t),i&&i.d(s)}}}function Hb(r){let e=r[1],t,n=r[1]&&bo(r);return{c(){n&&n.c(),t=nt()},l(i){n&&n.l(i),t=nt()},m(i,s){n&&n.m(i,s),Xe(i,t,s)},p(i,s){i[1]?e?mt(e,i[1])?(n.d(1),n=bo(i),e=i[1],n.c(),n.m(t.parentNode,t)):n.p(i,s):(n=bo(i),e=i[1],n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=i[1])},i:Tt,o:Tt,d(i){i&&Oe(t),n&&n.d(i)}}}function vo(r){let e,t,n,i,s;const o=r[8].default,a=un(o,r,r[7],null);let l=[r[5]],c={};for(let u=0;u<l.length;u+=1)c=tn(c,l[u]);return{c(){e=Zi(r[1]),a&&a.c(),this.h()},l(u){e=Ji(u,(r[1]||"null").toUpperCase(),{});var f=Qi(e);a&&a.l(f),f.forEach(Oe),this.h()},h(){ra(r[1])(e,c)},m(u,f){Xe(u,e,f),a&&a.m(e,null),r[10](e),n=!0,i||(s=[Xi(t=Jo.call(null,e,r[0])),Xi(r[4].call(null,e))],i=!0)},p(u,f){a&&a.p&&(!n||f&128)&&fn(a,o,u,u[7],n?hn(o,u[7],f,null):dn(u[7]),null),ra(u[1])(e,c=Gr(l,[f&32&&u[5]])),t&&cs(t.update)&&f&1&&t.update.call(null,u[0])},i(u){n||(pe(a,u),n=!0)},o(u){me(a,u),n=!1},d(u){u&&Oe(e),a&&a.d(u),r[10](null),i=!1,ha(s)}}}function bo(r){let e,t,n,i,s=[r[5]],o={};for(let a=0;a<s.length;a+=1)o=tn(o,s[a]);return{c(){e=Zi(r[1]),this.h()},l(a){e=Ji(a,(r[1]||"null").toUpperCase(),{}),Qi(e).forEach(Oe),this.h()},h(){ra(r[1])(e,o)},m(a,l){Xe(a,e,l),r[9](e),n||(i=[Xi(t=Jo.call(null,e,r[0])),Xi(r[4].call(null,e))],n=!0)},p(a,l){ra(a[1])(e,o=Gr(s,[l&32&&a[5]])),t&&cs(t.update)&&l&1&&t.update.call(null,a[0])},d(a){a&&Oe(e),r[9](null),n=!1,ha(i)}}}function Wb(r){let e,t,n,i;const s=[Hb,Vb],o=[];function a(l,c){return l[3]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=nt()},l(l){t.l(l),n=nt()},m(l,c){o[e].m(l,c),Xe(l,n,c),i=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(xn(),me(o[u],1,1,()=>{o[u]=null}),Sn(),t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),pe(t,1),t.m(n.parentNode,n))},i(l){i||(pe(t),i=!0)},o(l){me(t),i=!1},d(l){o[e].d(l),l&&Oe(n)}}}function jb(r,e,t){let n;const i=["use","tag","getElement"];let s=qn(e,i),{$$slots:o={},$$scope:a}=e,{use:l=[]}=e,{tag:c}=e;const u=Ss(zr());let f;function d(){return f}function m(h){Rn[h?"unshift":"push"](()=>{f=h,t(2,f)})}function g(h){Rn[h?"unshift":"push"](()=>{f=h,t(2,f)})}return r.$$set=h=>{e=tn(tn({},e),Br(h)),t(5,s=qn(e,i)),"use"in h&&t(0,l=h.use),"tag"in h&&t(1,c=h.tag),"$$scope"in h&&t(7,a=h.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&t(3,n=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(c)>-1)},[l,c,f,n,u,s,d,a,o,m,g]}class Or extends xt{constructor(e){super(),St(this,e,jb,Wb,mt,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function qb(r){let e;const t=r[11].default,n=un(t,r,r[13],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8192)&&fn(n,t,i,i[13],e?hn(t,i[13],s,null):dn(i[13]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function Xb(r){let e,t,n;const i=[{tag:r[3]},{use:[r[8],...r[0]]},{class:Di({[r[1]]:!0,[r[6]]:!0,...r[5]})},r[7],r[9]];var s=r[2];function o(a){let l={$$slots:{default:[qb]},$$scope:{ctx:a}};for(let c=0;c<i.length;c+=1)l=tn(l,i[c]);return{props:l}}return s&&(e=Ir(s,o(r)),r[12](e)),{c(){e&&Pe(e.$$.fragment),t=nt()},l(a){e&&Ue(e.$$.fragment,a),t=nt()},m(a,l){e&&ke(e,a,l),Xe(a,t,l),n=!0},p(a,[l]){const c=l&1003?Gr(i,[l&8&&{tag:a[3]},l&257&&{use:[a[8],...a[0]]},l&98&&{class:Di({[a[1]]:!0,[a[6]]:!0,...a[5]})},l&128&&Qn(a[7]),l&512&&Qn(a[9])]):{};if(l&8192&&(c.$$scope={dirty:l,ctx:a}),l&4&&s!==(s=a[2])){if(e){xn();const u=e;me(u.$$.fragment,1,0,()=>{Ne(u,1)}),Sn()}s?(e=Ir(s,o(a)),a[12](e),Pe(e.$$.fragment),pe(e.$$.fragment,1),ke(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(a){n||(e&&pe(e.$$.fragment,a),n=!0)},o(a){e&&me(e.$$.fragment,a),n=!1},d(a){r[12](null),a&&Oe(t),e&&Ne(e,a)}}}const gi={component:Or,tag:"div",class:"",classMap:{},contexts:{},props:{}};function Yb(r,e,t){const n=["use","class","component","tag","getElement"];let i=qn(e,n),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e,{class:l=""}=e,c;const u=gi.class,f={},d=[],m=gi.contexts,g=gi.props;let{component:h=gi.component}=e,{tag:p=h===Or?gi.tag:void 0}=e;Object.entries(gi.classMap).forEach(([w,M])=>{const C=qt(M);C&&"subscribe"in C&&d.push(C.subscribe(G=>{t(5,f[w]=G,f)}))});const _=Ss(zr());for(let w in m)m.hasOwnProperty(w)&&kt(w,m[w]);At(()=>{for(const w of d)w()});function x(){return c.getElement()}function S(w){Rn[w?"unshift":"push"](()=>{c=w,t(4,c)})}return r.$$set=w=>{e=tn(tn({},e),Br(w)),t(9,i=qn(e,n)),"use"in w&&t(0,a=w.use),"class"in w&&t(1,l=w.class),"component"in w&&t(2,h=w.component),"tag"in w&&t(3,p=w.tag),"$$scope"in w&&t(13,o=w.$$scope)},[a,l,h,p,c,f,u,g,_,i,x,s,S,o]}class Kb extends xt{constructor(e){super(),St(this,e,Yb,Xb,mt,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const fu=Object.assign({},gi);function Jn(r){return new Proxy(Kb,{construct:function(e,t){return Object.assign(gi,fu,r),new e(...t)},get:function(e,t){return Object.assign(gi,fu,r),e[t]}})}const Zb=Jn({class:"mdc-drawer-app-content",tag:"div"}),Jb=Jn({class:"mdc-drawer__content",tag:"div"});Jn({class:"mdc-drawer__header",tag:"div"});Jn({class:"mdc-drawer__title",tag:"h1"});Jn({class:"mdc-drawer__subtitle",tag:"h2"});function Qb(r){let e;const t=r[42].default,n=un(t,r,r[44],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&8192)&&fn(n,t,i,i[44],e?hn(t,i[44],s,null):dn(i[44]),null)},i(i){e||(pe(n,i),e=!0)},o(i){me(n,i),e=!1},d(i){n&&n.d(i)}}}function $b(r){let e,t,n;const i=[{tag:r[13]},{use:[r[16],...r[0]]},{class:Di({[r[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":r[2],"mdc-deprecated-list--dense":r[3],"mdc-deprecated-list--textual-list":r[4],"mdc-deprecated-list--avatar-list":r[5]||r[17],"mdc-deprecated-list--icon-list":r[6],"mdc-deprecated-list--image-list":r[7],"mdc-deprecated-list--thumbnail-list":r[8],"mdc-deprecated-list--video-list":r[9],"mdc-deprecated-list--two-line":r[10],"smui-list--three-line":r[11]&&!r[10]})},{role:r[15]},r[25]];var s=r[12];function o(a){let l={$$slots:{default:[Qb]},$$scope:{ctx:a}};for(let c=0;c<i.length;c+=1)l=tn(l,i[c]);return{props:l}}return s&&(e=Ir(s,o(r)),r[43](e),e.$on("keydown",r[20]),e.$on("focusin",r[21]),e.$on("focusout",r[22]),e.$on("click",r[23]),e.$on("SMUIListItem:mount",r[18]),e.$on("SMUIListItem:unmount",r[19]),e.$on("SMUI:action",r[24])),{c(){e&&Pe(e.$$.fragment),t=nt()},l(a){e&&Ue(e.$$.fragment,a),t=nt()},m(a,l){e&&ke(e,a,l),Xe(a,t,l),n=!0},p(a,l){const c=l[0]&33796095?Gr(i,[l[0]&8192&&{tag:a[13]},l[0]&65537&&{use:[a[16],...a[0]]},l[0]&135166&&{class:Di({[a[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":a[2],"mdc-deprecated-list--dense":a[3],"mdc-deprecated-list--textual-list":a[4],"mdc-deprecated-list--avatar-list":a[5]||a[17],"mdc-deprecated-list--icon-list":a[6],"mdc-deprecated-list--image-list":a[7],"mdc-deprecated-list--thumbnail-list":a[8],"mdc-deprecated-list--video-list":a[9],"mdc-deprecated-list--two-line":a[10],"smui-list--three-line":a[11]&&!a[10]})},l[0]&32768&&{role:a[15]},l[0]&33554432&&Qn(a[25])]):{};if(l[1]&8192&&(c.$$scope={dirty:l,ctx:a}),l[0]&4096&&s!==(s=a[12])){if(e){xn();const u=e;me(u.$$.fragment,1,0,()=>{Ne(u,1)}),Sn()}s?(e=Ir(s,o(a)),a[43](e),e.$on("keydown",a[20]),e.$on("focusin",a[21]),e.$on("focusout",a[22]),e.$on("click",a[23]),e.$on("SMUIListItem:mount",a[18]),e.$on("SMUIListItem:unmount",a[19]),e.$on("SMUI:action",a[24]),Pe(e.$$.fragment),pe(e.$$.fragment,1),ke(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(a){n||(e&&pe(e.$$.fragment,a),n=!0)},o(a){e&&me(e.$$.fragment,a),n=!1},d(a){r[43](null),a&&Oe(t),e&&Ne(e,a)}}}function ey(r,e,t){const n=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","disabledItemsFocusable","selectedIndex","radioList","checkList","hasTypeahead","component","tag","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","focusItemAtIndex","getElement"];let i=qn(e,n),{$$slots:s={},$$scope:o}=e;var a;const{closest:l,matches:c}=mf,u=Ss(zr());let{use:f=[]}=e,{class:d=""}=e,{nonInteractive:m=!1}=e,{dense:g=!1}=e,{textualList:h=!1}=e,{avatarList:p=!1}=e,{iconList:_=!1}=e,{imageList:x=!1}=e,{thumbnailList:S=!1}=e,{videoList:w=!1}=e,{twoLine:M=!1}=e,{threeLine:C=!1}=e,{vertical:G=!0}=e,{wrapFocus:v=(a=qt("SMUI:list:wrapFocus"))!==null&&a!==void 0?a:!1}=e,{singleSelection:D=!1}=e,{disabledItemsFocusable:L=!1}=e,{selectedIndex:j=-1}=e,{radioList:K=!1}=e,{checkList:V=!1}=e,{hasTypeahead:U=!1}=e,O,B,J=[],X=qt("SMUI:list:role"),re=qt("SMUI:list:nav");const ne=new WeakMap;let R=qt("SMUI:dialog:selection"),q=qt("SMUI:addLayoutListener"),ie,{component:Q=Or}=e,{tag:te=Q===Or?re?"nav":"ul":void 0}=e;kt("SMUI:list:nonInteractive",m),kt("SMUI:separator:context","list"),X||(D?(X="listbox",kt("SMUI:list:item:role","option")):K?(X="radiogroup",kt("SMUI:list:item:role","radio")):V?(X="group",kt("SMUI:list:item:role","checkbox")):(X="list",kt("SMUI:list:item:role",void 0))),q&&(ie=q(N)),Ur(()=>{t(41,B=new Rb({addClassForElementIndex:de,focusItemAtIndex:Me,getAttributeForElementIndex:(oe,ce)=>{var _e,De;return(De=(_e=Ee()[oe])===null||_e===void 0?void 0:_e.getAttr(ce))!==null&&De!==void 0?De:null},getFocusedElementIndex:()=>document.activeElement?Ee().map(oe=>oe.element).indexOf(document.activeElement):-1,getListItemCount:()=>J.length,getPrimaryTextAtIndex:Gt,hasCheckboxAtIndex:oe=>{var ce,_e;return(_e=(ce=Ee()[oe])===null||ce===void 0?void 0:ce.hasCheckbox)!==null&&_e!==void 0?_e:!1},hasRadioAtIndex:oe=>{var ce,_e;return(_e=(ce=Ee()[oe])===null||ce===void 0?void 0:ce.hasRadio)!==null&&_e!==void 0?_e:!1},isCheckboxCheckedAtIndex:oe=>{var ce;const _e=Ee()[oe];return(ce=(_e==null?void 0:_e.hasCheckbox)&&_e.checked)!==null&&ce!==void 0?ce:!1},isFocusInsideList:()=>O!=null&&ze()!==document.activeElement&&ze().contains(document.activeElement),isRootFocused:()=>O!=null&&document.activeElement===ze(),listItemAtIndexHasClass:Lt,notifyAction:oe=>{t(26,j=oe),O!=null&&Ci(ze(),"SMUIList:action",{index:oe},void 0,!0)},notifySelectionChange:oe=>{O!=null&&Ci(ze(),"SMUIList:selectionChange",{changedIndices:oe})},removeClassForElementIndex:ee,setAttributeForElementIndex:We,setCheckedCheckboxOrRadioAtIndex:(oe,ce)=>{Ee()[oe].checked=ce},setTabIndexForListItemChildren:(oe,ce)=>{const _e=Ee()[oe],De="button:not(:disabled), a";Array.prototype.forEach.call(_e.element.querySelectorAll(De),Fe=>{Fe.setAttribute("tabindex",ce)})}}));const k={get element(){return ze()},get items(){return J},get typeaheadInProgress(){return B.isTypeaheadInProgress()},typeaheadMatchItem(oe,ce){return B.typeaheadMatchItem(oe,ce,!0)},getOrderedList:Ee,focusItemAtIndex:Me,addClassForElementIndex:de,removeClassForElementIndex:ee,setAttributeForElementIndex:We,removeAttributeForElementIndex:bt,getAttributeFromElementIndex:lt,getPrimaryTextAtIndex:Gt};return Ci(ze(),"SMUIList:mount",k),B.init(),B.layout(),()=>{B.destroy()}}),At(()=>{ie&&ie()});function F(k){J.push(k.detail),ne.set(k.detail.element,k.detail),D&&k.detail.selected&&t(26,j=Ot(k.detail.element)),k.stopPropagation()}function ae(k){var oe;const ce=(oe=k.detail&&J.indexOf(k.detail))!==null&&oe!==void 0?oe:-1;ce!==-1&&(J.splice(ce,1),J=J,ne.delete(k.detail.element)),k.stopPropagation()}function be(k){B&&k.target&&B.handleKeydown(k,k.target.classList.contains("mdc-deprecated-list-item"),Ot(k.target))}function Le(k){B&&k.target&&B.handleFocusIn(Ot(k.target))}function we(k){B&&k.target&&B.handleFocusOut(Ot(k.target))}function Qe(k){B&&k.target&&B.handleClick(Ot(k.target),!c(k.target,'input[type="checkbox"], input[type="radio"]'),k)}function He(k){if(K||V){const oe=Ot(k.target);if(oe!==-1){const ce=Ee()[oe];ce&&(K&&!ce.checked||V)&&(c(k.detail.target,'input[type="checkbox"], input[type="radio"]')||(ce.checked=!ce.checked),ce.activateRipple(),window.requestAnimationFrame(()=>{ce.deactivateRipple()}))}}}function Ee(){return O==null?[]:[...ze().children].map(k=>ne.get(k)).filter(k=>k&&k._smui_list_item_accessor)}function Lt(k,oe){var ce;const _e=Ee()[k];return(ce=_e&&_e.hasClass(oe))!==null&&ce!==void 0?ce:!1}function de(k,oe){const ce=Ee()[k];ce&&ce.addClass(oe)}function ee(k,oe){const ce=Ee()[k];ce&&ce.removeClass(oe)}function We(k,oe,ce){const _e=Ee()[k];_e&&_e.addAttr(oe,ce)}function bt(k,oe){const ce=Ee()[k];ce&&ce.removeAttr(oe)}function lt(k,oe){const ce=Ee()[k];return ce?ce.getAttr(oe):null}function Gt(k){var oe;const ce=Ee()[k];return(oe=ce&&ce.getPrimaryText())!==null&&oe!==void 0?oe:""}function Ot(k){const oe=l(k,".mdc-deprecated-list-item, .mdc-deprecated-list");return oe&&c(oe,".mdc-deprecated-list-item")?Ee().map(ce=>ce==null?void 0:ce.element).indexOf(oe):-1}function N(){return B.layout()}function I(k,oe){return B.setEnabled(k,oe)}function se(){return B.isTypeaheadInProgress()}function ye(){return B.getSelectedIndex()}function xe(){return B.getFocusedItemIndex()}function Me(k){const oe=Ee()[k];oe&&"focus"in oe.element&&oe.element.focus()}function ze(){return O.getElement()}function z(k){Rn[k?"unshift":"push"](()=>{O=k,t(14,O)})}return r.$$set=k=>{e=tn(tn({},e),Br(k)),t(25,i=qn(e,n)),"use"in k&&t(0,f=k.use),"class"in k&&t(1,d=k.class),"nonInteractive"in k&&t(2,m=k.nonInteractive),"dense"in k&&t(3,g=k.dense),"textualList"in k&&t(4,h=k.textualList),"avatarList"in k&&t(5,p=k.avatarList),"iconList"in k&&t(6,_=k.iconList),"imageList"in k&&t(7,x=k.imageList),"thumbnailList"in k&&t(8,S=k.thumbnailList),"videoList"in k&&t(9,w=k.videoList),"twoLine"in k&&t(10,M=k.twoLine),"threeLine"in k&&t(11,C=k.threeLine),"vertical"in k&&t(27,G=k.vertical),"wrapFocus"in k&&t(28,v=k.wrapFocus),"singleSelection"in k&&t(29,D=k.singleSelection),"disabledItemsFocusable"in k&&t(30,L=k.disabledItemsFocusable),"selectedIndex"in k&&t(26,j=k.selectedIndex),"radioList"in k&&t(31,K=k.radioList),"checkList"in k&&t(32,V=k.checkList),"hasTypeahead"in k&&t(33,U=k.hasTypeahead),"component"in k&&t(12,Q=k.component),"tag"in k&&t(13,te=k.tag),"$$scope"in k&&t(44,o=k.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&134217728|r.$$.dirty[1]&1024&&B&&B.setVerticalOrientation(G),r.$$.dirty[0]&268435456|r.$$.dirty[1]&1024&&B&&B.setWrapFocus(v),r.$$.dirty[1]&1028&&B&&B.setHasTypeahead(U),r.$$.dirty[0]&536870912|r.$$.dirty[1]&1024&&B&&B.setSingleSelection(D),r.$$.dirty[0]&1073741824|r.$$.dirty[1]&1024&&B&&B.setDisabledItemsFocusable(L),r.$$.dirty[0]&603979776|r.$$.dirty[1]&1024&&B&&D&&ye()!==j&&B.setSelectedIndex(j)},[f,d,m,g,h,p,_,x,S,w,M,C,Q,te,O,X,u,R,F,ae,be,Le,we,Qe,He,i,j,G,v,D,L,K,V,U,N,I,se,ye,xe,Me,ze,B,s,z,o]}class ty extends xt{constructor(e){super(),St(this,e,ey,$b,mt,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:27,wrapFocus:28,singleSelection:29,disabledItemsFocusable:30,selectedIndex:26,radioList:31,checkList:32,hasTypeahead:33,component:12,tag:13,layout:34,setEnabled:35,getTypeaheadInProgress:36,getSelectedIndex:37,getFocusedItemIndex:38,focusItemAtIndex:39,getElement:40},null,[-1,-1])}get layout(){return this.$$.ctx[34]}get setEnabled(){return this.$$.ctx[35]}get getTypeaheadInProgress(){return this.$$.ctx[36]}get getSelectedIndex(){return this.$$.ctx[37]}get getFocusedItemIndex(){return this.$$.ctx[38]}get focusItemAtIndex(){return this.$$.ctx[39]}get getElement(){return this.$$.ctx[40]}}var $s;function ny(r,e){e===void 0&&(e=!1);var t=r.CSS,n=$s;if(typeof $s=="boolean"&&!e)return $s;var i=t&&typeof t.supports=="function";if(!i)return!1;var s=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=s||o,e||($s=n),n}function iy(r,e,t){if(!r)return{x:0,y:0};var n=e.x,i=e.y,s=n+t.left,o=i+t.top,a,l;if(r.type==="touchstart"){var c=r;a=c.changedTouches[0].pageX-s,l=c.changedTouches[0].pageY-o}else{var u=r;a=u.pageX-s,l=u.pageY-o}return{x:a,y:l}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ry={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},sy={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},du={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var hu=["touchstart","pointerdown","mousedown","keydown"],pu=["touchend","pointerup","mouseup","contextmenu"],ea=[],ay=function(r){Ta(e,r);function e(t){var n=r.call(this,vi(vi({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return ry},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return sy},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return du},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,s=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(s),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,s=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(s),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var s=Qs(hu),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=Qs(pu),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=Qs(hu),s=i.next();!s.done;s=i.next()){var o=s.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=Qs(pu),s=i.next();!s.done;s=i.next()){var o=s.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(s){s.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[s],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var s=this.previousActivationEvent,o=s&&t!==void 0&&s.type!==t.type;if(!o){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var a=t!==void 0&&ea.length>0&&ea.some(function(l){return n.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}t!==void 0&&(ea.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){ea=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,s=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",f="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),m=d.startPoint,g=d.endPoint;u=m.x+"px, "+m.y+"px",f=g.x+"px, "+g.y+"px"}this.adapter.updateCssVariable(i,u),this.adapter.updateCssVariable(s,f),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,s;i?s=iy(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,s=i.hasDeactivationUXRun,o=i.isActivated,a=s||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},du.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var i=vi({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var s=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!==0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,s=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(Zo);const{applyPassive:ta}=Ob,{matches:oy}=mf;function mu(r,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:i=!1,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u=g=>r.classList.add(g),removeClass:f=g=>r.classList.remove(g),addStyle:d=(g,h)=>r.style.setProperty(g,h),initPromise:m=Promise.resolve()}={}){let g,h=qt("SMUI:addLayoutListener"),p,_=o,x=l,S=c;function w(){t?(u("mdc-ripple-surface"),s==="primary"?(u("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):s==="secondary"?(f("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary"))):(f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),g&&_!==o&&(_=o,o?g.activate():o===!1&&g.deactivate()),e&&!g?(g=new ay({addClass:u,browserSupportsCssVars:()=>ny(window),computeBoundingRect:()=>(a||r).getBoundingClientRect(),containsEventTarget:C=>r.contains(C),deregisterDocumentInteractionHandler:(C,G)=>document.documentElement.removeEventListener(C,G,ta()),deregisterInteractionHandler:(C,G)=>(l||r).removeEventListener(C,G,ta()),deregisterResizeHandler:C=>window.removeEventListener("resize",C),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o??oy(c||r,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(C,G)=>document.documentElement.addEventListener(C,G,ta()),registerInteractionHandler:(C,G)=>(l||r).addEventListener(C,G,ta()),registerResizeHandler:C=>window.addEventListener("resize",C),removeClass:f,updateCssVariable:d}),m.then(()=>{g&&(g.init(),g.setUnbounded(n))})):g&&!e&&m.then(()=>{g&&(g.destroy(),g=void 0)}),g&&(x!==l||S!==c)&&(x=l,S=c,g.destroy(),requestAnimationFrame(()=>{g&&(g.init(),g.setUnbounded(n))})),!e&&n&&u("mdc-ripple-upgraded--unbounded")}w(),h&&(p=h(M));function M(){g&&g.layout()}return{update(C){({ripple:e,surface:t,unbounded:n,disabled:i,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u,removeClass:f,addStyle:d,initPromise:m}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:G=>r.classList.add(G),removeClass:G=>r.classList.remove(G),addStyle:(G,v)=>r.style.setProperty(G,v),initPromise:Promise.resolve()},C)),w()},destroy(){g&&(g.destroy(),g=void 0,f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),p&&p()}}}function gu(r){let e;return{c(){e=Zi("span"),this.h()},l(t){e=Ji(t,"SPAN",{class:!0}),Qi(e).forEach(Oe),this.h()},h(){da(e,"class","mdc-deprecated-list-item__ripple")},m(t,n){Xe(t,e,n)},d(t){t&&Oe(e)}}}function ly(r){let e,t,n=r[7]&&gu();const i=r[34].default,s=un(i,r,r[37],null);return{c(){n&&n.c(),e=nt(),s&&s.c()},l(o){n&&n.l(o),e=nt(),s&&s.l(o)},m(o,a){n&&n.m(o,a),Xe(o,e,a),s&&s.m(o,a),t=!0},p(o,a){o[7]?n||(n=gu(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),s&&s.p&&(!t||a[1]&64)&&fn(s,i,o,o[37],t?hn(i,o[37],a,null):dn(o[37]),null)},i(o){t||(pe(s,o),t=!0)},o(o){me(s,o),t=!1},d(o){n&&n.d(o),o&&Oe(e),s&&s.d(o)}}}function cy(r){let e,t,n;const i=[{tag:r[14]},{use:[...r[6]?[]:[[mu,{ripple:!r[16],unbounded:!1,color:(r[1]||r[0])&&r[5]==null?"primary":r[5],disabled:r[10],addClass:r[24],removeClass:r[25],addStyle:r[26]}]],r[22],...r[2]]},{class:Di({[r[3]]:!0,"mdc-deprecated-list-item":!r[8],"mdc-deprecated-list-item__wrapper":r[8],"mdc-deprecated-list-item--activated":r[1],"mdc-deprecated-list-item--selected":r[0],"mdc-deprecated-list-item--disabled":r[10],"mdc-menu-item--selected":!r[23]&&r[9]==="menuitem"&&r[0],"smui-menu-item--non-interactive":r[6],...r[18]})},{style:Object.entries(r[19]).map(_u).concat([r[4]]).join(" ")},r[23]&&r[1]?{"aria-current":"page"}:{},!r[23]||r[8]?{role:r[9]}:{},!r[23]&&r[9]==="option"?{"aria-selected":r[0]?"true":"false"}:{},!r[23]&&(r[9]==="radio"||r[9]==="checkbox")?{"aria-checked":r[16]&&r[16].checked?"true":"false"}:{},r[23]?{}:{"aria-disabled":r[10]?"true":"false"},{"data-menu-item-skip-restore-focus":r[11]||void 0},{tabindex:r[21]},{href:r[12]},r[20],r[29]];var s=r[13];function o(a){let l={$$slots:{default:[ly]},$$scope:{ctx:a}};for(let c=0;c<i.length;c+=1)l=tn(l,i[c]);return{props:l}}return s&&(e=Ir(s,o(r)),r[35](e),e.$on("click",r[15]),e.$on("keydown",r[27]),e.$on("SMUIGenericInput:mount",r[28]),e.$on("SMUIGenericInput:unmount",r[36])),{c(){e&&Pe(e.$$.fragment),t=nt()},l(a){e&&Ue(e.$$.fragment,a),t=nt()},m(a,l){e&&ke(e,a,l),Xe(a,t,l),n=!0},p(a,l){const c=l[0]&670916479?Gr(i,[l[0]&16384&&{tag:a[14]},l[0]&121701479&&{use:[...a[6]?[]:[[mu,{ripple:!a[16],unbounded:!1,color:(a[1]||a[0])&&a[5]==null?"primary":a[5],disabled:a[10],addClass:a[24],removeClass:a[25],addStyle:a[26]}]],a[22],...a[2]]},l[0]&8652619&&{class:Di({[a[3]]:!0,"mdc-deprecated-list-item":!a[8],"mdc-deprecated-list-item__wrapper":a[8],"mdc-deprecated-list-item--activated":a[1],"mdc-deprecated-list-item--selected":a[0],"mdc-deprecated-list-item--disabled":a[10],"mdc-menu-item--selected":!a[23]&&a[9]==="menuitem"&&a[0],"smui-menu-item--non-interactive":a[6],...a[18]})},l[0]&524304&&{style:Object.entries(a[19]).map(_u).concat([a[4]]).join(" ")},l[0]&8388610&&Qn(a[23]&&a[1]?{"aria-current":"page"}:{}),l[0]&8389376&&Qn(!a[23]||a[8]?{role:a[9]}:{}),l[0]&8389121&&Qn(!a[23]&&a[9]==="option"?{"aria-selected":a[0]?"true":"false"}:{}),l[0]&8454656&&Qn(!a[23]&&(a[9]==="radio"||a[9]==="checkbox")?{"aria-checked":a[16]&&a[16].checked?"true":"false"}:{}),l[0]&8389632&&Qn(a[23]?{}:{"aria-disabled":a[10]?"true":"false"}),l[0]&2048&&{"data-menu-item-skip-restore-focus":a[11]||void 0},l[0]&2097152&&{tabindex:a[21]},l[0]&4096&&{href:a[12]},l[0]&1048576&&Qn(a[20]),l[0]&536870912&&Qn(a[29])]):{};if(l[0]&128|l[1]&64&&(c.$$scope={dirty:l,ctx:a}),l[0]&8192&&s!==(s=a[13])){if(e){xn();const u=e;me(u.$$.fragment,1,0,()=>{Ne(u,1)}),Sn()}s?(e=Ir(s,o(a)),a[35](e),e.$on("click",a[15]),e.$on("keydown",a[27]),e.$on("SMUIGenericInput:mount",a[28]),e.$on("SMUIGenericInput:unmount",a[36]),Pe(e.$$.fragment),pe(e.$$.fragment,1),ke(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(a){n||(e&&pe(e.$$.fragment,a),n=!0)},o(a){e&&me(e.$$.fragment,a),n=!1},d(a){r[35](null),a&&Oe(t),e&&Ne(e,a)}}}let uy=0;const _u=([r,e])=>`${r}: ${e};`;function fy(r,e,t){let n;const i=["use","class","style","color","nonInteractive","ripple","wrapper","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","tag","action","getPrimaryText","getElement"];let s=qn(e,i),{$$slots:o={},$$scope:a}=e;var l;const c=Ss(zr());let u=()=>{};function f(de){return de===u}let{use:d=[]}=e,{class:m=""}=e,{style:g=""}=e,{color:h=void 0}=e,{nonInteractive:p=(l=qt("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;kt("SMUI:list:nonInteractive",void 0);let{ripple:_=!p}=e,{wrapper:x=!1}=e,{activated:S=!1}=e,{role:w=x?"presentation":qt("SMUI:list:item:role")}=e;kt("SMUI:list:item:role",void 0);let{selected:M=!1}=e,{disabled:C=!1}=e,{skipRestoreFocus:G=!1}=e,{tabindex:v=u}=e,{inputId:D="SMUI-form-field-list-"+uy++}=e,{href:L=void 0}=e,j,K={},V={},U={},O,B,J=qt("SMUI:list:item:nav"),{component:X=Or}=e,{tag:re=X===Or?J?L?"a":"span":"li":void 0}=e;kt("SMUI:generic:input:props",{id:D}),kt("SMUI:separator:context",void 0),Ur(()=>{if(!M&&!p){let ee=!0,We=j.getElement();for(;We.previousSibling;)if(We=We.previousSibling,We.nodeType===1&&We.classList.contains("mdc-deprecated-list-item")&&!We.classList.contains("mdc-deprecated-list-item--disabled")){ee=!1;break}ee&&(B=window.requestAnimationFrame(()=>ae(We)))}const de={_smui_list_item_accessor:!0,get element(){return He()},get selected(){return M},set selected(ee){t(0,M=ee)},hasClass:ne,addClass:R,removeClass:q,getAttr:Q,addAttr:te,removeAttr:F,getPrimaryText:Qe,get checked(){var ee;return(ee=O&&O.checked)!==null&&ee!==void 0?ee:!1},set checked(ee){O&&t(16,O.checked=!!ee,O)},get hasCheckbox(){return!!(O&&"_smui_checkbox_accessor"in O)},get hasRadio(){return!!(O&&"_smui_radio_accessor"in O)},activateRipple(){O&&O.activateRipple()},deactivateRipple(){O&&O.deactivateRipple()},getValue(){return s.value},action:we,get tabindex(){return n},set tabindex(ee){t(30,v=ee)},get disabled(){return C},get activated(){return S},set activated(ee){t(1,S=ee)}};return Ci(He(),"SMUIListItem:mount",de),()=>{Ci(He(),"SMUIListItem:unmount",de)}}),At(()=>{B&&window.cancelAnimationFrame(B)});function ne(de){return de in K?K[de]:He().classList.contains(de)}function R(de){K[de]||t(18,K[de]=!0,K)}function q(de){(!(de in K)||K[de])&&t(18,K[de]=!1,K)}function ie(de,ee){V[de]!=ee&&(ee===""||ee==null?(delete V[de],t(19,V)):t(19,V[de]=ee,V))}function Q(de){var ee;return de in U?(ee=U[de])!==null&&ee!==void 0?ee:null:He().getAttribute(de)}function te(de,ee){U[de]!==ee&&t(20,U[de]=ee,U)}function F(de){(!(de in U)||U[de]!=null)&&t(20,U[de]=void 0,U)}function ae(de){let ee=!0;for(;de.nextElementSibling;)if(de=de.nextElementSibling,de.nodeType===1&&de.classList.contains("mdc-deprecated-list-item")){const We=de.attributes.getNamedItem("tabindex");if(We&&We.value==="0"){ee=!1;break}}ee&&t(21,n=0)}function be(de){const ee=de.key==="Enter",We=de.key==="Space";(ee||We)&&we(de)}function Le(de){("_smui_checkbox_accessor"in de.detail||"_smui_radio_accessor"in de.detail)&&t(16,O=de.detail)}function we(de){C||Ci(He(),"SMUI:action",de)}function Qe(){var de,ee,We;const bt=He(),lt=bt.querySelector(".mdc-deprecated-list-item__primary-text");if(lt)return(de=lt.textContent)!==null&&de!==void 0?de:"";const Gt=bt.querySelector(".mdc-deprecated-list-item__text");return Gt?(ee=Gt.textContent)!==null&&ee!==void 0?ee:"":(We=bt.textContent)!==null&&We!==void 0?We:""}function He(){return j.getElement()}function Ee(de){Rn[de?"unshift":"push"](()=>{j=de,t(17,j)})}const Lt=()=>t(16,O=void 0);return r.$$set=de=>{e=tn(tn({},e),Br(de)),t(29,s=qn(e,i)),"use"in de&&t(2,d=de.use),"class"in de&&t(3,m=de.class),"style"in de&&t(4,g=de.style),"color"in de&&t(5,h=de.color),"nonInteractive"in de&&t(6,p=de.nonInteractive),"ripple"in de&&t(7,_=de.ripple),"wrapper"in de&&t(8,x=de.wrapper),"activated"in de&&t(1,S=de.activated),"role"in de&&t(9,w=de.role),"selected"in de&&t(0,M=de.selected),"disabled"in de&&t(10,C=de.disabled),"skipRestoreFocus"in de&&t(11,G=de.skipRestoreFocus),"tabindex"in de&&t(30,v=de.tabindex),"inputId"in de&&t(31,D=de.inputId),"href"in de&&t(12,L=de.href),"component"in de&&t(13,X=de.component),"tag"in de&&t(14,re=de.tag),"$$scope"in de&&t(37,a=de.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&1073808449&&t(21,n=f(v)?!p&&!C&&(M||O&&O.checked)?0:-1:v)},[M,S,d,m,g,h,p,_,x,w,C,G,L,X,re,we,O,j,K,V,U,n,c,J,R,q,ie,be,Le,s,v,D,Qe,He,o,Ee,Lt,a]}class dy extends xt{constructor(e){super(),St(this,e,fy,cy,mt,{use:2,class:3,style:4,color:5,nonInteractive:6,ripple:7,wrapper:8,activated:1,role:9,selected:0,disabled:10,skipRestoreFocus:11,tabindex:30,inputId:31,href:12,component:13,tag:14,action:15,getPrimaryText:32,getElement:33},null,[-1,-1])}get action(){return this.$$.ctx[15]}get getPrimaryText(){return this.$$.ctx[32]}get getElement(){return this.$$.ctx[33]}}const hy=Jn({class:"mdc-deprecated-list-item__text",tag:"span"});Jn({class:"mdc-deprecated-list-item__primary-text",tag:"span"});Jn({class:"mdc-deprecated-list-item__secondary-text",tag:"span"});Jn({class:"mdc-deprecated-list-item__meta",tag:"span"});Jn({class:"mdc-deprecated-list-group",tag:"div"});Jn({class:"mdc-deprecated-list-group__subheader",tag:"h3"});class py{constructor(e,t=""){Ni(this,"filename");Ni(this,"name");Ni(this,"colors",{});Ni(this,"links",{});Ni(this,"joints",[]);Ni(this,"prefix","");this.filename=e,this.prefix=t}async load(){return fetch(this.filename).then(e=>e.text()).then(e=>new window.DOMParser().parseFromString(e,"text/xml")).then(e=>this.parseRobotXMLNode(e.documentElement))}parseRobotXMLNode(e){const t=e.nodeName;if(t!=="robot")throw new Error(`Invalid URDF: no root node ${t}`);return this.name=e.getAttribute("name"),this.parseColorsFromRobot(e),this.parseLinks(e),this.parseJoints(e),{name:this.name,links:this.links,joints:this.joints}}parseColorsFromRobot(e){const t=e.getElementsByTagName("material");for(let n=0;n<t.length;n++){const i=t[n],s=this.colorFromMaterial(i);s&&(this.colors[s.name]=s.rgba)}}colorFromMaterial(e){if(!e.hasAttribute("name")){console.warn("Found material-tag with name without name inside robot tag!");return}const t=e.getAttribute("name"),n=e.getElementsByTagName("color");if(n.length===0)return;const i=n[0];if(!i.hasAttribute("rgba")){console.warn(`Color tag ${t} does not have expected "rgba" attribute!`);return}return{name:t,rgba:Mr(i,"rgba")}}parseLinks(e){const t=e.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n],s=i.getElementsByTagName("visual"),o={visual:[]};i.hasAttribute("name")&&(o.name=i.getAttribute("name"),this.links[o.name]=o);for(let a=0;a<s.length;a++)o.visual.push(this.parseVisual(s[a]))}}parseVisual(e){let t={};for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"geometry":this.parseGeometry(i,t);break;case"origin":let s=Mr(i);s&&(t.origin_xyz=s);let o=Mr(i,"rpy");o&&(t.origin_rpy=o);break;case"material":const a=i.getElementsByTagName("color");if(a.length>0&&a[0].hasAttribute("rgba"))t.color_rgba=Mr(a[0],"rgba");else if(i.hasAttribute("name")){let l=i.getAttribute("name");t.color_rgba=this.colors[l]}}}return t}parseGeometry(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"mesh":let s=[1,1,1],o=i.getAttribute("scale");if(o){const f=o.split(" ");for(const d in f)s[d]=parseFloat(f[d])}let a=i.getAttribute("filename");a=a.replace("package:/",this.prefix);let l="stl";switch(a.substring(a.length-3)){case"fbx":l="fbx";break;case"obj":l="obj";break;case"stl":l="stl";break;case"dae":l="dae";break;default:throw new Error("Unknown type "+a)}t.geometry={filename:a,type:l,scale:s},t.type="mesh";return;case"cylinder":const c={};i.hasAttribute("length")&&(c.length=parseFloat(i.getAttribute("length"))),i.hasAttribute("radius")&&(c.radius=parseFloat(i.getAttribute("radius"))),t.geometry=c,t.type="cylinder";return;case"box":const u={size:[1,1,1]};if(i.hasAttribute("size")){const d=i.getAttribute("size").split(" ");for(const m in d)u.size[m]=parseFloat(d[m])}t.geometry=u;return}}}parseJoints(e){const t=e.getElementsByTagName("joint");for(let n=0;n<t.length;n++){const i=t[n],s=i.getElementsByTagName("origin");let o=[0,0,0],a=[0,0,0];if(s.length===1){let d=Mr(s[0]);d&&(a=d);let m=Mr(s[0],"rpy");m&&(o=m)}let l;const c=i.getElementsByTagName("parent");if(c.length===1){const d=c[0].getAttribute("link");d&&this.links[d]?l=this.links[d]:l={name:d,visual:[]}}let u;const f=i.getElementsByTagName("child");if(f.length===1){const d=f[0].getAttribute("link");d&&this.links[d]?u=this.links[d]:u={name:d,visual:[]}}if(u&&l){const d={name:i.getAttribute("name")||void 0,origin_rpy:o,origin_xyz:a,parent:l,child:u};this.joints.push(d)}}}getRootJoints(){const e=[];for(const t of this.joints){let n=!0;for(const i of this.joints)if(t.parent.name===i.child.name){n=!1;break}n&&e.push(t)}return console.log(e),e}getChildJoints(e){const t=[];if(!this.joints)return[];for(const n of this.joints)n.parent===e&&t.push(n);return t}}function my(r){let e;return{c(){e=Cf("TODO: URDF-robot-tag based on https://svelte.dev/tutorial/svelte-self")},l(t){e=Lf(t,"TODO: URDF-robot-tag based on https://svelte.dev/tutorial/svelte-self")},m(t,n){Xe(t,e,n)},d(t){t&&Oe(e)}}}function gy(r){let e,t;return e=new hy({props:{$$slots:{default:[my]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function _y(r){let e,t;return e=new dy({props:{$$slots:{default:[gy]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,[i]){const s={};i&2&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function vy(r,e,t){let{parser:n}=e;return r.$$set=i=>{"parser"in i&&t(0,n=i.parser)},[n]}class by extends xt{constructor(e){super(),St(this,e,vy,_y,mt,{parser:0})}}function yy(r){return{c:Tt,l:Tt,m:Tt,p:Tt,i:Tt,o:Tt,d:Tt}}function xy(r){let e,t=`<!-- ${ws} -->`,n,i,s;return i=new by({props:{parser:r[4]}}),{c(){e=new nr(!1),n=It(),Pe(i.$$.fragment),this.h()},l(o){e=ir(o,!1),n=Dt(o),Ue(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Xe(o,n,a),ke(i,o,a),s=!0},p:Tt,i(o){s||(pe(i.$$.fragment,o),s=!0)},o(o){me(i.$$.fragment,o),s=!1},d(o){o&&e.d(),o&&Oe(n),Ne(i,o)}}}function Sy(r){let e,t=`<!-- loading ${ws} -->`,n;return{c(){e=new nr(!1),n=nt(),this.h()},l(i){e=ir(i,!1),n=nt(),this.h()},h(){e.a=n},m(i,s){e.m(t,i,s),Xe(i,n,s)},p:Tt,i:Tt,o:Tt,d(i){i&&Oe(n),i&&e.d()}}}function wy(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:Sy,then:xy,catch:yy,value:9,blocks:[,,,]};return sa(t=r[0],i),{c(){e=nt(),i.block.c()},l(s){e=nt(),i.block.l(s)},m(s,o){Xe(s,e,o),i.block.m(s,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(s,o){r=s,i.ctx=r,o&1&&t!==(t=r[0])&&sa(t,i)||vu(i,r,o)},i(s){n||(pe(i.block),n=!0)},o(s){for(let o=0;o<3;o+=1){const a=i.blocks[o];me(a)}n=!1},d(s){s&&Oe(e),i.block.d(s),i.token=null,i=null}}}function My(r){let e,t;return e=new ty({props:{$$slots:{default:[wy]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&2049&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Ay(r){let e,t;return e=new Jb({props:{$$slots:{default:[My]},$$scope:{ctx:r}}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p(n,i){const s={};i&2049&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Ey(r){let e,t;return e=new iv({props:{enableZoom:!0}}),{c(){Pe(e.$$.fragment)},l(n){Ue(e.$$.fragment,n)},m(n,i){ke(e,n,i),t=!0},p:Tt,i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){me(e.$$.fragment,n),t=!1},d(n){Ne(e,n)}}}function Ty(r){return{c:Tt,l:Tt,m:Tt,p:Tt,i:Tt,o:Tt,d:Tt}}function Cy(r){let e,t=`<!-- ${ws} -->`,n,i,s;return i=new ob({props:{parser:r[4]}}),{c(){e=new nr(!1),n=It(),Pe(i.$$.fragment),this.h()},l(o){e=ir(o,!1),n=Dt(o),Ue(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Xe(o,n,a),ke(i,o,a),s=!0},p:Tt,i(o){s||(pe(i.$$.fragment,o),s=!0)},o(o){me(i.$$.fragment,o),s=!1},d(o){o&&e.d(),o&&Oe(n),Ne(i,o)}}}function Ly(r){let e,t=`<!-- loading ${ws} -->`,n;return{c(){e=new nr(!1),n=nt(),this.h()},l(i){e=ir(i,!1),n=nt(),this.h()},h(){e.a=n},m(i,s){e.m(t,i,s),Xe(i,n,s)},p:Tt,i:Tt,o:Tt,d(i){i&&Oe(n),i&&e.d()}}}function Iy(r){let e,t,n,i,s,o,a,l,c,u,f,d,m,g,h;e=new en({props:{type:ds,color:"white",intensity:.2,position:[0,5,0]}}),n=new en({props:{type:ds,color:"blue",intensity:.5,position:[5,5,0]}}),s=new en({props:{type:ds,color:"yellow",intensity:.5,position:[-5,-5,0]}}),a=new en({props:{type:sn,makeDefault:!0,position:[.6,.6,.6],fov:25,$$slots:{default:[Ey,({ref:_})=>({10:_}),({ref:_})=>_?1024:0]},$$scope:{ctx:r}}}),c=new _b({props:{preset_name:"soft"}}),f=new bb({});let p={ctx:r,current:null,token:null,hasCatch:!1,pending:Ly,then:Cy,catch:Ty,value:9,blocks:[,,,]};return sa(g=r[0],p),{c(){Pe(e.$$.fragment),t=It(),Pe(n.$$.fragment),i=It(),Pe(s.$$.fragment),o=It(),Pe(a.$$.fragment),l=It(),Pe(c.$$.fragment),u=It(),Pe(f.$$.fragment),d=It(),m=nt(),p.block.c()},l(_){Ue(e.$$.fragment,_),t=Dt(_),Ue(n.$$.fragment,_),i=Dt(_),Ue(s.$$.fragment,_),o=Dt(_),Ue(a.$$.fragment,_),l=Dt(_),Ue(c.$$.fragment,_),u=Dt(_),Ue(f.$$.fragment,_),d=Dt(_),m=nt(),p.block.l(_)},m(_,x){ke(e,_,x),Xe(_,t,x),ke(n,_,x),Xe(_,i,x),ke(s,_,x),Xe(_,o,x),ke(a,_,x),Xe(_,l,x),ke(c,_,x),Xe(_,u,x),ke(f,_,x),Xe(_,d,x),Xe(_,m,x),p.block.m(_,p.anchor=x),p.mount=()=>m.parentNode,p.anchor=m,h=!0},p(_,x){r=_;const S={};x&2048&&(S.$$scope={dirty:x,ctx:r}),a.$set(S),p.ctx=r,x&1&&g!==(g=r[0])&&sa(g,p)||vu(p,r,x)},i(_){h||(pe(e.$$.fragment,_),pe(n.$$.fragment,_),pe(s.$$.fragment,_),pe(a.$$.fragment,_),pe(c.$$.fragment,_),pe(f.$$.fragment,_),pe(p.block),h=!0)},o(_){me(e.$$.fragment,_),me(n.$$.fragment,_),me(s.$$.fragment,_),me(a.$$.fragment,_),me(c.$$.fragment,_),me(f.$$.fragment,_);for(let x=0;x<3;x+=1){const S=p.blocks[x];me(S)}h=!1},d(_){Ne(e,_),_&&Oe(t),Ne(n,_),_&&Oe(i),Ne(s,_),_&&Oe(o),Ne(a,_),_&&Oe(l),Ne(c,_),_&&Oe(u),Ne(f,_),_&&Oe(d),_&&Oe(m),p.block.d(_),p.token=null,p=null}}}function Dy(r){let e,t,n;return t=new O0({props:{shadows:!0,size:{height:r[1]-2,width:r[2]-r[3]-2},rendererParameters:{logarithmicDepthBuffer:!0},$$slots:{default:[Iy]},$$scope:{ctx:r}}}),{c(){e=Zi("main"),Pe(t.$$.fragment),this.h()},l(i){e=Ji(i,"MAIN",{class:!0});var s=Qi(e);Ue(t.$$.fragment,s),s.forEach(Oe),this.h()},h(){da(e,"class","main-content svelte-1mtnv3k")},m(i,s){Xe(i,e,s),ke(t,e,null),n=!0},p(i,s){const o={};s&14&&(o.size={height:i[1]-2,width:i[2]-i[3]-2}),s&2049&&(o.$$scope={dirty:s,ctx:i}),t.$set(o)},i(i){n||(pe(t.$$.fragment,i),n=!0)},o(i){me(t.$$.fragment,i),n=!1},d(i){i&&Oe(e),Ne(t)}}}function Ry(r){let e,t,n,i,s,o,a,l;If(r[5]);function c(f){r[6](f)}let u={$$slots:{default:[Ay]},$$scope:{ctx:r}};return r[3]!==void 0&&(u.width=r[3]),t=new Gb({props:u}),Rn.push(()=>er(t,"width",c)),s=new Zb({props:{class:"app-content",$$slots:{default:[Dy]},$$scope:{ctx:r}}}),{c(){e=Zi("div"),Pe(t.$$.fragment),i=It(),Pe(s.$$.fragment),this.h()},l(f){e=Ji(f,"DIV",{class:!0});var d=Qi(e);Ue(t.$$.fragment,d),i=Dt(d),Ue(s.$$.fragment,d),d.forEach(Oe),this.h()},h(){da(e,"class","drawer-container svelte-1mtnv3k")},m(f,d){Xe(f,e,d),ke(t,e,null),Df(e,i),ke(s,e,null),o=!0,a||(l=Vn(window,"resize",r[5]),a=!0)},p(f,[d]){const m={};d&2049&&(m.$$scope={dirty:d,ctx:f}),!n&&d&8&&(n=!0,m.width=f[3],tr(()=>n=!1)),t.$set(m);const g={};d&2063&&(g.$$scope={dirty:d,ctx:f}),s.$set(g)},i(f){o||(pe(t.$$.fragment,f),pe(s.$$.fragment,f),o=!0)},o(f){me(t.$$.fragment,f),me(s.$$.fragment,f),o=!1},d(f){f&&Oe(e),Ne(t),Ne(s),a=!1,l()}}}const ws="/turtlebot3_description/turtlebot3_burger.xml";function Py(r,e,t){let n;Rt(r,kf,d=>t(7,n=d));let i=n.url.href;const s=new py(`${i}/${ws}`,i);let o;Ur(()=>{t(0,o=s.load())});let a=0,l=0,c=0;function u(){t(1,a=window.innerHeight),t(2,l=window.innerWidth)}function f(d){c=d,t(3,c)}return[o,a,l,c,s,u,f]}class Gy extends xt{constructor(e){super(),St(this,e,Py,Ry,mt,{})}}export{Gy as default};
