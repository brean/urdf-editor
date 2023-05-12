var Uf=Object.defineProperty;var zf=(r,e,t)=>e in r?Uf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var zi=(r,e,t)=>(zf(r,typeof e!="symbol"?e+"":e,t),t);import{J as Oo,K as Tt,L as kt,t as ps,M as Wt,S as gt,i as _t,s as ht,C as ln,D as cn,E as un,F as fn,g as ie,d as ce,I as Rt,y as Ie,z as Ne,A as Le,B as De,k as Pi,l as ki,m as Ni,h as Ee,n as _a,b as Fe,N as yi,O as Hn,v as Jt,f as Qt,P as ys,o as Br,Q as za,w as Rn,R as $i,T as Gr,a as Mt,c as wt,U as Vr,V as Ct,W as er,e as Ze,X as Pn,Y as jt,Z as tr,_ as nr,$ as ir,H as It,a0 as xs,a1 as Bf,a2 as Gf,a3 as la,a4 as Ir,a5 as rr,a6 as ca,x as Rr,a7 as Qn,q as Ss,r as Ms,u as va,a8 as Vf,G as Hf,a9 as ua,aa as Iu}from"../chunks/index.0766f3e4.js";import{j as Wf,w as an,r as jf}from"../chunks/singletons.1cb3536b.js";import{p as qf}from"../chunks/stores.a740d600.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="148",cr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xf=0,ll=1,Yf=2,Lu=1,Du=2,ls=3,Di=0,qn=1,ba=2,Ns=3,Ii=0,Lr=1,cl=2,ul=3,fl=4,Kf=5,Tr=100,Zf=101,Jf=102,dl=103,hl=104,Qf=200,$f=201,ed=202,td=203,Ru=204,Pu=205,nd=206,id=207,rd=208,sd=209,ad=210,od=0,ld=1,cd=2,Eo=3,ud=4,fd=5,dd=6,hd=7,ya=0,pd=1,md=2,ni=0,gd=1,_d=2,vd=3,ku=4,bd=5,Nu=300,Pr=301,kr=302,To=303,Co=304,xa=306,Xi=1e3,xn=1001,Io=1002,sn=1003,pl=1004,Ba=1005,bn=1006,yd=1007,Ji=1008,Qi=1009,xd=1010,Sd=1011,Fu=1012,Md=1013,Yi=1014,Ci=1015,ms=1016,wd=1017,Ad=1018,Dr=1020,Ed=1021,Td=1022,Wn=1023,Cd=1024,Id=1025,Ki=1026,Nr=1027,Ld=1028,Dd=1029,Rd=1030,Pd=1031,kd=1033,Ga=33776,Va=33777,Ha=33778,Wa=33779,ml=35840,gl=35841,_l=35842,vl=35843,Nd=36196,bl=37492,yl=37496,xl=37808,Sl=37809,Ml=37810,wl=37811,Al=37812,El=37813,Tl=37814,Cl=37815,Il=37816,Ll=37817,Dl=37818,Rl=37819,Pl=37820,kl=37821,Nl=36492,fa=2300,da=2301,ja=2302,Fl=2400,Ol=2401,Ul=2402,Fd=2500,Ri=3e3,Et=3001,Od=3200,Ud=3201,zo=0,zd=1,$n="srgb",gs="srgb-linear",qa=7680,Bd=519,zl=35044,Bl="300 es",Lo=1035;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const fs=Math.PI/180,_s=180/Math.PI;function Fi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function yn(r,e,t){return Math.max(e,Math.min(t,r))}function Bo(r,e){return(r%e+e)%e}function Gd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Vd(r,e,t){return r!==e?(t-r)/(e-r):0}function ds(r,e,t){return(1-t)*r+t*e}function Hd(r,e,t,n){return ds(r,e,1-Math.exp(-t*n))}function Wd(r,e=1){return e-Math.abs(Bo(r,e*2)-e)}function jd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function qd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Xd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Yd(r,e){return r+Math.random()*(e-r)}function Kd(r){return r*(.5-Math.random())}function Zd(r){r!==void 0&&(Gl=r);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jd(r){return r*fs}function Qd(r){return r*_s}function Do(r){return(r&r-1)===0&&r!==0}function Ou(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ha(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $d(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*f,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cs(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var $r=Object.freeze({__proto__:null,DEG2RAD:fs,RAD2DEG:_s,generateUUID:Fi,clamp:yn,euclideanModulo:Bo,mapLinear:Gd,inverseLerp:Vd,lerp:ds,damp:Hd,pingpong:Wd,smoothstep:jd,smootherstep:qd,randInt:Xd,randFloat:Yd,randFloatSpread:Kd,seededRandom:Zd,degToRad:Jd,radToDeg:Qd,isPowerOfTwo:Do,ceilPowerOfTwo:Ou,floorPowerOfTwo:ha,setQuaternionFromProperEuler:$d,normalize:Dn,denormalize:cs});class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(){Un.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],h=i[0],p=i[3],_=i[6],x=i[1],S=i[4],M=i[7],w=i[2],C=i[5],G=i[8];return s[0]=a*h+o*x+l*w,s[3]=a*p+o*S+l*C,s[6]=a*_+o*M+l*G,s[1]=c*h+u*x+f*w,s[4]=c*p+u*S+f*C,s[7]=c*_+u*M+f*G,s[2]=d*h+m*x+g*w,s[5]=d*p+m*S+g*C,s[8]=d*_+m*M+g*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return e[0]=f*h,e[1]=(i*c-u*n)*h,e[2]=(o*n-i*a)*h,e[3]=d*h,e[4]=(u*t-i*l)*h,e[5]=(i*s-o*t)*h,e[6]=m*h,e[7]=(n*l-c*t)*h,e[8]=(a*t-n*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Un;function Uu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function aa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ya={[$n]:{[gs]:Zi},[gs]:{[$n]:aa}},_n={legacyMode:!0,get workingColorSpace(){return gs},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ya[e]&&Ya[e][t]!==void 0){const n=Ya[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zt={r:0,g:0,b:0},Xn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Ka(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Os(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_n.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_n.workingColorSpace){return this.r=e,this.g=t,this.b=n,_n.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_n.workingColorSpace){if(e=Bo(e,1),t=yn(t,0,1),n=yn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ka(a,s,e+1/3),this.g=Ka(a,s,e),this.b=Ka(a,s,e-1/3)}return _n.toWorkingColorSpace(this,i),this}setStyle(e,t=$n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,_n.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,_n.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,_n.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,_n.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=$n){const n=zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return _n.fromWorkingColorSpace(Os(this,Zt),e),yn(Zt.r*255,0,255)<<16^yn(Zt.g*255,0,255)<<8^yn(Zt.b*255,0,255)<<0}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_n.workingColorSpace){_n.fromWorkingColorSpace(Os(this,Zt),t);const n=Zt.r,i=Zt.g,s=Zt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_n.workingColorSpace){return _n.fromWorkingColorSpace(Os(this,Zt),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=$n){return _n.fromWorkingColorSpace(Os(this,Zt),e),e!==$n?`color(${e} ${Zt.r} ${Zt.g} ${Zt.b})`:`rgb(${Zt.r*255|0},${Zt.g*255|0},${Zt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Xn),Xn.h+=e,Xn.s+=t,Xn.l+=n,this.setHSL(Xn.h,Xn.s,Xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Fs);const n=ds(Xn.h,Fs.h,t),i=ds(Xn.s,Fs.s,t),s=ds(Xn.l,Fs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=zu;let fr;class Bu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fr===void 0&&(fr=vs("canvas")),fr.width=e.width,fr.height=e.height;const n=fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Zi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gu{constructor(e=null){this.isSource=!0,this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Za(i[a].image)):s.push(Za(i[a]))}else s=Za(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Za(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eh=0;class Sn extends sr{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=xn,i=xn,s=bn,a=Ji,o=Wn,l=Qi,c=Sn.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Fi(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Un,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Nu;Sn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,i=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],h=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(m+1)/2,w=(_+1)/2,C=(u+d)/4,G=(f+h)/4,v=(g+p)/4;return S>M&&S>w?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=G/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=v/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=G/s,i=v/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-h)/x,this.z=(d-u)/x,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ii extends sr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vu extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class th extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[a+0],m=s[a+1],g=s[a+2],h=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=h;return}if(f!==h||l!==d||c!==m||u!==g){let p=1-o;const _=l*d+c*m+u*g+f*h,x=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const w=Math.sqrt(S),C=Math.atan2(w,_*x);p=Math.sin(p*C)/w,o=Math.sin(o*C)/w}const M=o*x;if(l=l*p+d*M,c=c*p+m*M,u=u*p+g*M,f=f*p+h*M,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-o*m,e[t+2]=c*g+u*m+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,f=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new H,Vl=new ri;class ws{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Bi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Bi)}else n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox),Qa.applyMatrix4(e.matrixWorld),this.union(Qa);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Us.subVectors(this.max,es),dr.subVectors(e.a,es),hr.subVectors(e.b,es),pr.subVectors(e.c,es),xi.subVectors(hr,dr),Si.subVectors(pr,hr),Gi.subVectors(dr,pr);let t=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-Gi.z,Gi.y,xi.z,0,-xi.x,Si.z,0,-Si.x,Gi.z,0,-Gi.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-Gi.y,Gi.x,0];return!$a(t,dr,hr,pr,Us)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,dr,hr,pr,Us))?!1:(zs.crossVectors(xi,Si),t=[zs.x,zs.y,zs.z],$a(t,dr,hr,pr,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new H,new H,new H,new H,new H,new H,new H,new H],Bi=new H,Qa=new ws,dr=new H,hr=new H,pr=new H,xi=new H,Si=new H,Gi=new H,es=new H,Us=new H,zs=new H,Vi=new H;function $a(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Vi.fromArray(r,s);const o=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const nh=new ws,ts=new H,eo=new H;class Sa{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(eo)),this.expandByPoint(ts.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new H,to=new H,Bs=new H,Mi=new H,no=new H,Gs=new H,io=new H;class Go{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.direction).multiplyScalar(t).add(this.origin),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){to.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(to);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Bs),o=Mi.dot(this.direction),l=-Mi.dot(Bs),c=Mi.lengthSq(),u=Math.abs(1-a*a);let f,d,m,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const h=1/u;f*=h,d*=h,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Bs).multiplyScalar(d).add(to),m}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,s){no.subVectors(t,e),Gs.subVectors(n,e),io.crossVectors(no,Gs);let a=this.direction.dot(io),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(Gs.crossVectors(Mi,Gs));if(l<0)return null;const c=o*this.direction.dot(no.cross(Mi));if(c<0||l+c>a)return null;const u=-o*Mi.dot(io);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,f,d,m,g,h,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=h,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),a=1/mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,g=o*u,h=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-h*c,t[9]=-o*l,t[2]=h-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d+h*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=h+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d-h*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=h-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,g=o*u,h=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+h,t[1]=l*f,t[5]=h*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,h=o*c;t[0]=l*u,t[4]=h-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-h*f}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,h=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+h,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ih,e,rh)}lookAt(e,t,n){const i=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),wi.crossVectors(n,Fn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),wi.crossVectors(n,Fn)),wi.normalize(),Vs.crossVectors(Fn,wi),i[0]=wi.x,i[4]=Vs.x,i[8]=Fn.x,i[1]=wi.y,i[5]=Vs.y,i[9]=Fn.y,i[2]=wi.z,i[6]=Vs.z,i[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],h=n[6],p=n[10],_=n[14],x=n[3],S=n[7],M=n[11],w=n[15],C=i[0],G=i[4],v=i[8],D=i[12],I=i[1],j=i[5],K=i[9],V=i[13],U=i[2],O=i[6],B=i[10],J=i[14],X=i[3],se=i[7],ne=i[11],R=i[15];return s[0]=a*C+o*I+l*U+c*X,s[4]=a*G+o*j+l*O+c*se,s[8]=a*v+o*K+l*B+c*ne,s[12]=a*D+o*V+l*J+c*R,s[1]=u*C+f*I+d*U+m*X,s[5]=u*G+f*j+d*O+m*se,s[9]=u*v+f*K+d*B+m*ne,s[13]=u*D+f*V+d*J+m*R,s[2]=g*C+h*I+p*U+_*X,s[6]=g*G+h*j+p*O+_*se,s[10]=g*v+h*K+p*B+_*ne,s[14]=g*D+h*V+p*J+_*R,s[3]=x*C+S*I+M*U+w*X,s[7]=x*G+S*j+M*O+w*se,s[11]=x*v+S*K+M*B+w*ne,s[15]=x*D+S*V+M*J+w*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],h=e[7],p=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*o*d+n*c*d+i*o*m-n*l*m)+h*(+t*l*m-t*c*d+s*a*d-i*a*m+i*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+n*a*m+s*o*u-n*c*u)+_*(-i*o*u-t*l*f+t*o*d+i*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],h=e[13],p=e[14],_=e[15],x=f*p*c-h*d*c+h*l*m-o*p*m-f*l*_+o*d*_,S=g*d*c-u*p*c-g*l*m+a*p*m+u*l*_-a*d*_,M=u*h*c-g*f*c+g*o*m-a*h*m-u*o*_+a*f*_,w=g*f*l-u*h*l-g*o*d+a*h*d+u*o*p-a*f*p,C=t*x+n*S+i*M+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/C;return e[0]=x*G,e[1]=(h*d*s-f*p*s-h*i*m+n*p*m+f*i*_-n*d*_)*G,e[2]=(o*p*s-h*l*s+h*i*c-n*p*c-o*i*_+n*l*_)*G,e[3]=(f*l*s-o*d*s-f*i*c+n*d*c+o*i*m-n*l*m)*G,e[4]=S*G,e[5]=(u*p*s-g*d*s+g*i*m-t*p*m-u*i*_+t*d*_)*G,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*_-t*l*_)*G,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*m+t*l*m)*G,e[8]=M*G,e[9]=(g*f*s-u*h*s-g*n*m+t*h*m+u*n*_-t*f*_)*G,e[10]=(a*h*s-g*o*s+g*n*c-t*h*c-a*n*_+t*o*_)*G,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*m-t*o*m)*G,e[12]=w*G,e[13]=(u*h*i-g*f*i+g*n*d-t*h*d-u*n*p+t*f*p)*G,e[14]=(g*o*i-a*h*i-g*n*l+t*h*l+a*n*p-t*o*p)*G,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*d+t*o*d)*G,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,g=s*f,h=a*u,p=a*f,_=o*f,x=l*c,S=l*u,M=l*f,w=n.x,C=n.y,G=n.z;return i[0]=(1-(h+_))*w,i[1]=(m+M)*w,i[2]=(g-S)*w,i[3]=0,i[4]=(m-M)*C,i[5]=(1-(d+_))*C,i[6]=(p+x)*C,i[7]=0,i[8]=(g+S)*G,i[9]=(p-x)*G,i[10]=(1-(d+h))*G,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=mr.set(i[0],i[1],i[2]).length();const a=mr.set(i[4],i[5],i[6]).length(),o=mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);const c=1/s,u=1/a,f=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),f=(t+e)*l,d=(n+i)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mr=new H,Yn=new nt,ih=new H(0,0,0),rh=new H(1,1,1),wi=new H,Vs=new H,Fn=new H,Hl=new nt,Wl=new ri;class As{constructor(e=0,t=0,n=0,i=As.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}As.DefaultOrder="XYZ";As.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sh=0;const jl=new H,gr=new ri,di=new nt,Hs=new H,ns=new H,ah=new H,oh=new ri,ql=new H(1,0,0),Xl=new H(0,1,0),Yl=new H(0,0,1),lh={type:"added"},Kl={type:"removed"};class Ft extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DefaultUp.clone();const e=new H,t=new As,n=new ri,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Un}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Ft.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ft.DefaultMatrixWorldAutoUpdate,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(Yl,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(Yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ns,Hs,this.up):di.lookAt(Hs,ns,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),gr.setFromRotationMatrix(di),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Kl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ft.DefaultUp=new H(0,1,0);Ft.DefaultMatrixAutoUpdate=!0;Ft.DefaultMatrixWorldAutoUpdate=!0;const Kn=new H,hi=new H,ro=new H,pi=new H,_r=new H,vr=new H,Zl=new H,so=new H,ao=new H,oo=new H;class vi{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Kn.subVectors(i,t),hi.subVectors(n,t),ro.subVectors(e,t);const a=Kn.dot(Kn),o=Kn.dot(hi),l=Kn.dot(ro),c=hi.dot(hi),u=hi.dot(ro),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,pi),l.set(0,0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),hi.subVectors(e,t),Kn.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Kn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return vi.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_r.subVectors(i,n),vr.subVectors(s,n),so.subVectors(e,n);const l=_r.dot(so),c=vr.dot(so);if(l<=0&&c<=0)return t.copy(n);ao.subVectors(e,i);const u=_r.dot(ao),f=vr.dot(ao);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_r,a);oo.subVectors(e,s);const m=_r.dot(oo),g=vr.dot(oo);if(g>=0&&m<=g)return t.copy(s);const h=m*c-l*g;if(h<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(vr,o);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Zl.subVectors(s,i),o=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(Zl,o);const _=1/(p+h+d);return a=h*_,o=d*_,t.copy(n).addScaledVector(_r,a).addScaledVector(vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ch=0;class ar extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Lr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ru,this.blendDst=Pu,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fr extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new H,Ws=new Je;class zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),i=Dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),i=Dn(i,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Hu extends zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wu extends zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uh=0;const Gn=new nt,lo=new Ft,br=new H,On=new ws,is=new ws,nn=new H;class kn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Wu:Hu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Un().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];is.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(On.min,is.min),On.expandByPoint(nn),nn.addVectors(On.max,is.max),On.expandByPoint(nn)):(On.expandByPoint(is.min),On.expandByPoint(is.max))}On.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(e,c),nn.add(br)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new H,u[I]=new H;const f=new H,d=new H,m=new H,g=new Je,h=new Je,p=new Je,_=new H,x=new H;function S(I,j,K){f.fromArray(i,I*3),d.fromArray(i,j*3),m.fromArray(i,K*3),g.fromArray(a,I*2),h.fromArray(a,j*2),p.fromArray(a,K*2),d.sub(f),m.sub(f),h.sub(g),p.sub(g);const V=1/(h.x*p.y-p.x*h.y);isFinite(V)&&(_.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(V),x.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(V),c[I].add(_),c[j].add(_),c[K].add(_),u[I].add(x),u[j].add(x),u[K].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let I=0,j=M.length;I<j;++I){const K=M[I],V=K.start,U=K.count;for(let O=V,B=V+U;O<B;O+=3)S(n[O+0],n[O+1],n[O+2])}const w=new H,C=new H,G=new H,v=new H;function D(I){G.fromArray(s,I*3),v.copy(G);const j=c[I];w.copy(j),w.sub(G.multiplyScalar(G.dot(j))).normalize(),C.crossVectors(v,j);const V=C.dot(u[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=V}for(let I=0,j=M.length;I<j;++I){const K=M[I],V=K.start,U=K.count;for(let O=V,B=V+U;O<B;O+=3)D(n[O+0]),D(n[O+1]),D(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,h),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,h),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(h,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let h=0,p=l.length;h<p;h++){o.isInterleavedBufferAttribute?m=l[h]*o.data.stride+o.offset:m=l[h]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new zn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new nt,yr=new Go,co=new Sa,rs=new H,ss=new H,as=new H,uo=new H,js=new H,qs=new Je,Xs=new Je,Ys=new Je,fo=new H,Ks=new H;let mn=class extends Ft{constructor(e=new kn,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(uo.fromBufferAttribute(f,e),a?js.addScaledVector(uo,u):js.addScaledVector(uo.sub(t),u))}t.add(js)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),e.ray.intersectsSphere(co)===!1)||(Jl.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Jl),n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const h=f[m],p=i[h.materialIndex],_=Math.max(h.start,d.start),x=Math.min(o.count,Math.min(h.start+h.count,d.start+d.count));for(let S=_,M=x;S<M;S+=3){const w=o.getX(S),C=o.getX(S+1),G=o.getX(S+2);a=Zs(this,p,e,yr,c,u,w,C,G),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const m=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let h=m,p=g;h<p;h+=3){const _=o.getX(h),x=o.getX(h+1),S=o.getX(h+2);a=Zs(this,i,e,yr,c,u,_,x,S),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const h=f[m],p=i[h.materialIndex],_=Math.max(h.start,d.start),x=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let S=_,M=x;S<M;S+=3){const w=S,C=S+1,G=S+2;a=Zs(this,p,e,yr,c,u,w,C,G),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let h=m,p=g;h<p;h+=3){const _=h,x=h+1,S=h+2;a=Zs(this,i,e,yr,c,u,_,x,S),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}}};function fh(r,e,t,n,i,s,a,o){let l;if(e.side===qn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Di,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:r}}function Zs(r,e,t,n,i,s,a,o,l){r.getVertexPosition(a,rs),r.getVertexPosition(o,ss),r.getVertexPosition(l,as);const c=fh(r,e,t,n,rs,ss,as,fo);if(c){i&&(qs.fromBufferAttribute(i,a),Xs.fromBufferAttribute(i,o),Ys.fromBufferAttribute(i,l),c.uv=vi.getUV(fo,rs,ss,as,qs,Xs,Ys,new Je)),s&&(qs.fromBufferAttribute(s,a),Xs.fromBufferAttribute(s,o),Ys.fromBufferAttribute(s,l),c.uv2=vi.getUV(fo,rs,ss,as,qs,Xs,Ys,new Je));const u={a,b:o,c:l,normal:new H,materialIndex:0};vi.getNormal(rs,ss,as,u.normal),c.face=u}return c}class Hr extends kn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(f,2));function g(h,p,_,x,S,M,w,C,G,v,D){const I=M/G,j=w/v,K=M/2,V=w/2,U=C/2,O=G+1,B=v+1;let J=0,X=0;const se=new H;for(let ne=0;ne<B;ne++){const R=ne*j-V;for(let q=0;q<O;q++){const re=q*I-K;se[h]=re*x,se[p]=R*S,se[_]=U,c.push(se.x,se.y,se.z),se[h]=0,se[p]=0,se[_]=C>0?1:-1,u.push(se.x,se.y,se.z),f.push(q/G),f.push(1-ne/v),J+=1}}for(let ne=0;ne<v;ne++)for(let R=0;R<G;R++){const q=d+R+O*ne,re=d+R+O*(ne+1),Q=d+(R+1)+O*(ne+1),te=d+(R+1)+O*ne;l.push(q,re,te),l.push(re,Q,te),X+=6}o.addGroup(m,X,D),m+=X,d+=J}}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vn(r){const e={};for(let t=0;t<r.length;t++){const n=Or(r[t]);for(const i in n)e[i]=n[i]}return e}function dh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ju(r){return r.getRenderTarget()===null&&r.outputEncoding===Et?$n:gs}const qu={clone:Or,merge:vn};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ho extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Ho{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,Sr=1;class mh extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new on(xr,Sr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new on(xr,Sr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new on(xr,Sr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new on(xr,Sr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new on(xr,Sr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new on(xr,Sr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=ni,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Xu extends Sn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gh extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hr(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:Ii});s.uniforms.tEquirect.value=t;const a=new mn(i,s),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=bn),new mh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ho=new H,_h=new H,vh=new Un;class Wi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ho.subVectors(n,t).cross(_h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vh.getNormalMatrix(e),i=this.coplanarPoint(ho).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Sa,Js=new H;class Ma{constructor(e=new Wi,t=new Wi,n=new Wi,i=new Wi,s=new Wi,a=new Wi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],m=n[9],g=n[10],h=n[11],p=n[12],_=n[13],x=n[14],S=n[15];return t[0].setComponents(o-i,f-l,h-d,S-p).normalize(),t[1].setComponents(o+i,f+l,h+d,S+p).normalize(),t[2].setComponents(o+s,f+c,h+m,S+_).normalize(),t[3].setComponents(o-s,f-c,h-m,S-_).normalize(),t[4].setComponents(o-a,f-u,h-g,S-x).normalize(),t[5].setComponents(o+a,f+u,h+g,S+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Js.x=i.normal.x>0?e.max.x:e.min.x,Js.y=i.normal.y>0?e.max.y:e.min.y,Js.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bh(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;r.bindBuffer(f,c),m.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class wa extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,m=[],g=[],h=[],p=[];for(let _=0;_<u;_++){const x=_*d-a;for(let S=0;S<c;S++){const M=S*f-s;g.push(M,-x,0),h.push(0,0,1),p.push(S/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<o;x++){const S=x+c*_,M=x+c*(_+1),w=x+1+c*(_+1),C=x+1+c*_;m.push(S,M,C),m.push(M,w,C)}this.setIndex(m),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2))}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh="vec3 transformed = vec3( position );",Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Ih=`#ifdef USE_IRIDESCENCE
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
#endif`,Lh=`#ifdef USE_BUMPMAP
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
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zh=`#define PI 3.141592653589793
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
}`,Bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gh=`vec3 transformedNormal = objectNormal;
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
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#endif`,cp=`#if defined( USE_ENVMAP )
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
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`struct PhysicalMaterial {
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
}`,gp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,kp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,dm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,pm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,mm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,gm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Em=`#define DISTANCE
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
}`,Tm=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lm=`uniform float scale;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,km=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,Bm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Vm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,jm=`#define TOON
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
}`,qm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Km=`uniform vec3 color;
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
}`,Zm=`uniform float rotation;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,rt={alphamap_fragment:yh,alphamap_pars_fragment:xh,alphatest_fragment:Sh,alphatest_pars_fragment:Mh,aomap_fragment:wh,aomap_pars_fragment:Ah,begin_vertex:Eh,beginnormal_vertex:Th,bsdfs:Ch,iridescence_fragment:Ih,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Rh,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:kh,color_fragment:Nh,color_pars_fragment:Fh,color_pars_vertex:Oh,color_vertex:Uh,common:zh,cube_uv_reflection_fragment:Bh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Hh,emissivemap_fragment:Wh,emissivemap_pars_fragment:jh,encodings_fragment:qh,encodings_pars_fragment:Xh,envmap_fragment:Yh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:Zh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:cp,envmap_vertex:Qh,fog_vertex:$h,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_fragment:rp,lightmap_pars_fragment:sp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:up,lights_toon_pars_fragment:fp,lights_phong_fragment:dp,lights_phong_pars_fragment:hp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:vp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:Sp,map_fragment:Mp,map_pars_fragment:wp,map_particle_fragment:Ap,map_particle_pars_fragment:Ep,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Cp,morphcolor_vertex:Ip,morphnormal_vertex:Lp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Rp,normal_fragment_begin:Pp,normal_fragment_maps:kp,normal_pars_fragment:Np,normal_pars_vertex:Fp,normal_vertex:Op,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:Gp,iridescence_pars_fragment:Vp,output_fragment:Hp,packing:Wp,premultiplied_alpha_fragment:jp,project_vertex:qp,dithering_fragment:Xp,dithering_pars_fragment:Yp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:$p,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:rm,specularmap_fragment:sm,specularmap_pars_fragment:am,tonemapping_fragment:om,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:um,uv_pars_fragment:fm,uv_pars_vertex:dm,uv_vertex:hm,uv2_pars_fragment:pm,uv2_pars_vertex:mm,uv2_vertex:gm,worldpos_vertex:_m,background_vert:vm,background_frag:bm,backgroundCube_vert:ym,backgroundCube_frag:xm,cube_vert:Sm,cube_frag:Mm,depth_vert:wm,depth_frag:Am,distanceRGBA_vert:Em,distanceRGBA_frag:Tm,equirect_vert:Cm,equirect_frag:Im,linedashed_vert:Lm,linedashed_frag:Dm,meshbasic_vert:Rm,meshbasic_frag:Pm,meshlambert_vert:km,meshlambert_frag:Nm,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Um,meshnormal_frag:zm,meshphong_vert:Bm,meshphong_frag:Gm,meshphysical_vert:Vm,meshphysical_frag:Hm,meshtoon_vert:Wm,meshtoon_frag:jm,points_vert:qm,points_frag:Xm,shadow_vert:Ym,shadow_frag:Km,sprite_vert:Zm,sprite_frag:Jm},Ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Un},uv2Transform:{value:new Un},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Un}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Un}}},ei={basic:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:vn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:vn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:vn([Ae.points,Ae.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:vn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:vn([Ae.common,Ae.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:vn([Ae.sprite,Ae.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Un},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:vn([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:vn([Ae.lights,Ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ei.physical={uniforms:vn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Je(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Qs={r:0,b:0,g:0};function Qm(r,e,t,n,i,s,a){const o=new et(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function g(p,_){let x=!1,S=_.isScene===!0?_.background:null;S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S));const M=r.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?h(o,l):S&&S.isColor&&(h(S,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===xa)?(u===void 0&&(u=new mn(new Hr(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Or(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,G,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=S.encoding!==Et,(f!==S||d!==S.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new mn(new wa(2,2),new Zn({name:"BackgroundMaterial",uniforms:Or(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=S.encoding!==Et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function h(p,_){p.getRGB(Qs,ju(r)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),l=_,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(o,l)},render:g}}function $m(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(U,O,B,J,X){let se=!1;if(a){const ne=h(J,B,O);c!==ne&&(c=ne,m(c.object)),se=_(U,J,B,X),se&&x(U,J,B,X)}else{const ne=O.wireframe===!0;(c.geometry!==J.id||c.program!==B.id||c.wireframe!==ne)&&(c.geometry=J.id,c.program=B.id,c.wireframe=ne,se=!0)}X!==null&&t.update(X,34963),(se||u)&&(u=!1,v(U,O,B,J),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function h(U,O,B){const J=B.wireframe===!0;let X=o[U.id];X===void 0&&(X={},o[U.id]=X);let se=X[O.id];se===void 0&&(se={},X[O.id]=se);let ne=se[J];return ne===void 0&&(ne=p(d()),se[J]=ne),ne}function p(U){const O=[],B=[],J=[];for(let X=0;X<i;X++)O[X]=0,B[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:J,object:U,attributes:{},index:null}}function _(U,O,B,J){const X=c.attributes,se=O.attributes;let ne=0;const R=B.getAttributes();for(const q in R)if(R[q].location>=0){const Q=X[q];let te=se[q];if(te===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),Q===void 0||Q.attribute!==te||te&&Q.data!==te.data)return!0;ne++}return c.attributesNum!==ne||c.index!==J}function x(U,O,B,J){const X={},se=O.attributes;let ne=0;const R=B.getAttributes();for(const q in R)if(R[q].location>=0){let Q=se[q];Q===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor));const te={};te.attribute=Q,Q&&Q.data&&(te.data=Q.data),X[q]=te,ne++}c.attributes=X,c.attributesNum=ne,c.index=J}function S(){const U=c.newAttributes;for(let O=0,B=U.length;O<B;O++)U[O]=0}function M(U){w(U,0)}function w(U,O){const B=c.newAttributes,J=c.enabledAttributes,X=c.attributeDivisors;B[U]=1,J[U]===0&&(r.enableVertexAttribArray(U),J[U]=1),X[U]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,O),X[U]=O)}function C(){const U=c.newAttributes,O=c.enabledAttributes;for(let B=0,J=O.length;B<J;B++)O[B]!==U[B]&&(r.disableVertexAttribArray(B),O[B]=0)}function G(U,O,B,J,X,se){n.isWebGL2===!0&&(B===5124||B===5125)?r.vertexAttribIPointer(U,O,B,X,se):r.vertexAttribPointer(U,O,B,J,X,se)}function v(U,O,B,J){if(n.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const X=J.attributes,se=B.getAttributes(),ne=O.defaultAttributeValues;for(const R in se){const q=se[R];if(q.location>=0){let re=X[R];if(re===void 0&&(R==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),R==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),re!==void 0){const Q=re.normalized,te=re.itemSize,F=t.get(re);if(F===void 0)continue;const oe=F.buffer,be=F.type,Pe=F.bytesPerElement;if(re.isInterleavedBufferAttribute){const Me=re.data,$e=Me.stride,We=re.offset;if(Me.isInstancedInterleavedBuffer){for(let Te=0;Te<q.locationSize;Te++)w(q.location+Te,Me.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Te=0;Te<q.locationSize;Te++)M(q.location+Te);r.bindBuffer(34962,oe);for(let Te=0;Te<q.locationSize;Te++)G(q.location+Te,te/q.locationSize,be,Q,$e*Pe,(We+te/q.locationSize*Te)*Pe)}else{if(re.isInstancedBufferAttribute){for(let Me=0;Me<q.locationSize;Me++)w(q.location+Me,re.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Me=0;Me<q.locationSize;Me++)M(q.location+Me);r.bindBuffer(34962,oe);for(let Me=0;Me<q.locationSize;Me++)G(q.location+Me,te/q.locationSize,be,Q,te*Pe,te/q.locationSize*Me*Pe)}}else if(ne!==void 0){const Q=ne[R];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(q.location,Q);break;case 3:r.vertexAttrib3fv(q.location,Q);break;case 4:r.vertexAttrib4fv(q.location,Q);break;default:r.vertexAttrib1fv(q.location,Q)}}}}C()}function D(){K();for(const U in o){const O=o[U];for(const B in O){const J=O[B];for(const X in J)g(J[X].object),delete J[X];delete O[B]}delete o[U]}}function I(U){if(o[U.id]===void 0)return;const O=o[U.id];for(const B in O){const J=O[B];for(const X in J)g(J[X].object),delete J[X];delete O[B]}delete o[U.id]}function j(U){for(const O in o){const B=o[O];if(B[U.id]===void 0)continue;const J=B[U.id];for(const X in J)g(J[X].object),delete J[X];delete B[U.id]}}function K(){V(),u=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:V,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfProgram:j,initAttributes:S,enableAttribute:M,disableUnusedAttributes:C}}function eg(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function tg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(G){if(G==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),h=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),x=r.getParameter(36349),S=d>0,M=a||e.has("OES_texture_float"),w=S&&M,C=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:S,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:C}}function ng(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Wi,o=new Un,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const g=f.length!==0||d||n!==0||i;return i=d,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,m){const g=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,S=x*4;let M=_.clippingState||null;l.value=M,M=u(g,d,S,m);for(let w=0;w!==S;++w)M[w]=t[w];_.clippingState=M,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,g){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,g!==!0||p===null){const _=m+h*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<_)&&(p=new Float32Array(_));for(let S=0,M=m;S!==h;++S,M+=4)a.copy(f[S]).applyMatrix4(x,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function ig(r){let e=new WeakMap;function t(a,o){return o===To?a.mapping=Pr:o===Co&&(a.mapping=kr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===To||o===Co)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gh(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Es extends Ho{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cr=4,Ql=[.125,.215,.35,.446,.526,.582],qi=20,po=new Es,$l=new et;let mo=null;const ji=(1+Math.sqrt(5))/2,wr=1/ji,ec=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,ji,wr),new H(0,ji,-wr),new H(wr,0,ji),new H(-wr,0,ji),new H(ji,wr,0),new H(-ji,wr,0)];class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mo),e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ms,format:Wn,encoding:Ri,depthBuffer:!1},i=nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(s)),this._blurMaterial=sg(s,e,t)}return i}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,n,i){const o=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor($l),u.toneMapping=ni,u.autoClear=!1;const m=new Fr({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),g=new mn(new Hr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy($l),h=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):x===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const S=this._cubeSize;$s(i,x*S,_>2?S:0,S,S),u.setRenderTarget(i),h&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Pr||e.mapping===kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ec[(i-1)%ec.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new mn(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qi-1),h=s/g,p=isFinite(s)?1+Math.floor(u*h):qi;p>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);const _=[];let x=0;for(let G=0;G<qi;++G){const v=G/h,D=Math.exp(-v*v/2);_.push(D),G===0?x+=D:G<p&&(x+=2*D)}for(let G=0;G<_.length;G++)_[G]=_[G]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const M=this._sizeLods[i],w=3*M*(i>S-Cr?i-S+Cr:0),C=4*(this._cubeSize-M);$s(t,w,C,3*M,2*M),l.setRenderTarget(t),l.render(f,po)}}function rg(r){const e=[],t=[],n=[];let i=r;const s=r-Cr+1+Ql.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Cr?l=Ql[a-r+Cr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,h=3,p=2,_=1,x=new Float32Array(h*g*m),S=new Float32Array(p*g*m),M=new Float32Array(_*g*m);for(let C=0;C<m;C++){const G=C%3*2/3-1,v=C>2?0:-1,D=[G,v,0,G+2/3,v,0,G+2/3,v+1,0,G,v,0,G+2/3,v+1,0,G,v+1,0];x.set(D,h*g*C),S.set(d,p*g*C);const I=[C,C,C,C,C,C];M.set(I,_*g*C)}const w=new kn;w.setAttribute("position",new zn(x,h)),w.setAttribute("uv",new zn(S,p)),w.setAttribute("faceIndex",new zn(M,_)),e.push(w),i>Cr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nc(r,e,t){const n=new ii(r,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function sg(r,e,t){const n=new Float32Array(qi),i=new H(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ic(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function rc(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function ag(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===To||l===Co,u=l===Pr||l===kr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new tc(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new tc(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function og(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lg(r,e,t,n){const i={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const m=f.morphAttributes;for(const g in m){const h=m[g];for(let p=0,_=h.length;p<_;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let h=0;if(m!==null){const x=m.array;h=m.version;for(let S=0,M=x.length;S<M;S+=3){const w=x[S+0],C=x[S+1],G=x[S+2];d.push(w,C,C,G,G,w)}}else{const x=g.array;h=g.version;for(let S=0,M=x.length/3-1;S<M;S+=3){const w=S+0,C=S+1,G=S+2;d.push(w,C,C,G,G,w)}}const p=new(Uu(d)?Wu:Hu)(d,1);p.version=h;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function cg(r,e,t,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,g){if(g===0)return;let h,p;if(i)h=r,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,o,d*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function ug(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fg(r,e){return r[0]-e[0]}function dg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function hg(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==h){let O=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],G=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let D=0;S===!0&&(D=1),M===!0&&(D=2),w===!0&&(D=3);let I=u.attributes.position.count*D,j=1;I>e.maxTextureSize&&(j=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const K=new Float32Array(I*j*4*h),V=new Vu(K,I,j,h);V.type=Ci,V.needsUpdate=!0;const U=D*4;for(let B=0;B<h;B++){const J=C[B],X=G[B],se=v[B],ne=I*j*4*B;for(let R=0;R<J.count;R++){const q=R*U;S===!0&&(a.fromBufferAttribute(J,R),K[ne+q+0]=a.x,K[ne+q+1]=a.y,K[ne+q+2]=a.z,K[ne+q+3]=0),M===!0&&(a.fromBufferAttribute(X,R),K[ne+q+4]=a.x,K[ne+q+5]=a.y,K[ne+q+6]=a.z,K[ne+q+7]=0),w===!0&&(a.fromBufferAttribute(se,R),K[ne+q+8]=a.x,K[ne+q+9]=a.y,K[ne+q+10]=a.z,K[ne+q+11]=se.itemSize===4?a.w:1)}}p={count:h,texture:V,size:new Je(I,j)},s.set(u,p),u.addEventListener("dispose",O)}let _=0;for(let S=0;S<m.length;S++)_+=m[S];const x=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==g){h=[];for(let M=0;M<g;M++)h[M]=[M,0];n[u.id]=h}for(let M=0;M<g;M++){const w=h[M];w[0]=M,w[1]=m[M]}h.sort(dg);for(let M=0;M<8;M++)M<g&&h[M][1]?(o[M][0]=h[M][0],o[M][1]=h[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(fg);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const w=o[M],C=w[0],G=w[1];C!==Number.MAX_SAFE_INTEGER&&G?(p&&u.getAttribute("morphTarget"+M)!==p[C]&&u.setAttribute("morphTarget"+M,p[C]),_&&u.getAttribute("morphNormal"+M)!==_[C]&&u.setAttribute("morphNormal"+M,_[C]),i[M]=G,x+=G):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),_&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const S=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function pg(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ku=new Sn,Zu=new Vu,Ju=new th,Qu=new Xu,sc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function Wr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=sc[i];if(s===void 0&&(s=new Float32Array(i),sc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Aa(r,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function _g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function bg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if($t(t,n))return;cc.set(n),r.uniformMatrix2fv(this.addr,!1,cc),en(t,n)}}function yg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if($t(t,n))return;lc.set(n),r.uniformMatrix3fv(this.addr,!1,lc),en(t,n)}}function xg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if($t(t,n))return;oc.set(n),r.uniformMatrix4fv(this.addr,!1,oc),en(t,n)}}function Sg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function wg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function Ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function Eg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Tg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function Cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function Ig(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function Lg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ku,i)}function Dg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ju,i)}function Rg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qu,i)}function Pg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zu,i)}function kg(r){switch(r){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return bg;case 35675:return yg;case 35676:return xg;case 5124:case 35670:return Sg;case 35667:case 35671:return Mg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Eg;case 36294:return Tg;case 36295:return Cg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Ng(r,e){r.uniform1fv(this.addr,e)}function Fg(r,e){const t=Wr(e,this.size,2);r.uniform2fv(this.addr,t)}function Og(r,e){const t=Wr(e,this.size,3);r.uniform3fv(this.addr,t)}function Ug(r,e){const t=Wr(e,this.size,4);r.uniform4fv(this.addr,t)}function zg(r,e){const t=Wr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Bg(r,e){const t=Wr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Gg(r,e){const t=Wr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Vg(r,e){r.uniform1iv(this.addr,e)}function Hg(r,e){r.uniform2iv(this.addr,e)}function Wg(r,e){r.uniform3iv(this.addr,e)}function jg(r,e){r.uniform4iv(this.addr,e)}function qg(r,e){r.uniform1uiv(this.addr,e)}function Xg(r,e){r.uniform2uiv(this.addr,e)}function Yg(r,e){r.uniform3uiv(this.addr,e)}function Kg(r,e){r.uniform4uiv(this.addr,e)}function Zg(r,e,t){const n=this.cache,i=e.length,s=Aa(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ku,s[a])}function Jg(r,e,t){const n=this.cache,i=e.length,s=Aa(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ju,s[a])}function Qg(r,e,t){const n=this.cache,i=e.length,s=Aa(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Qu,s[a])}function $g(r,e,t){const n=this.cache,i=e.length,s=Aa(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Zu,s[a])}function e_(r){switch(r){case 5126:return Ng;case 35664:return Fg;case 35665:return Og;case 35666:return Ug;case 35674:return zg;case 35675:return Bg;case 35676:return Gg;case 5124:case 35670:return Vg;case 35667:case 35671:return Hg;case 35668:case 35672:return Wg;case 35669:case 35673:return jg;case 5125:return qg;case 36294:return Xg;case 36295:return Yg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return $g}}class t_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=kg(t.type)}}class n_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=e_(t.type)}}class i_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const go=/(\w+)(\])?(\[|\.)?/g;function uc(r,e){r.seq.push(e),r.map[e.id]=e}function r_(r,e,t){const n=r.name,i=n.length;for(go.lastIndex=0;;){const s=go.exec(n),a=go.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){uc(t,c===void 0?new t_(o,r,e):new n_(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new i_(o),uc(t,f)),t=f}}}class oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);r_(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function fc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let s_=0;function a_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function o_(r){switch(r){case Ri:return["Linear","( value )"];case Et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function dc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+a_(r.getShaderSource(e),a)}else return i}function l_(r,e){const t=o_(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function c_(r,e){let t;switch(e){case gd:t="Linear";break;case _d:t="Reinhard";break;case vd:t="OptimizedCineon";break;case ku:t="ACESFilmic";break;case bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function u_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function f_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d_(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function us(r){return r!==""}function hc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(r){return r.replace(h_,p_)}function p_(r,e){const t=rt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ro(t)}const m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(r){return r.replace(m_,g_)}function g_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function __(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ls&&(e="SHADOWMAP_TYPE_VSM"),e}function v_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Pr:case kr:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function y_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ya:e="ENVMAP_BLENDING_MULTIPLY";break;case pd:e="ENVMAP_BLENDING_MIX";break;case md:e="ENVMAP_BLENDING_ADD";break}return e}function x_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function S_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=__(t),c=v_(t),u=b_(t),f=y_(t),d=x_(t),m=t.isWebGL2?"":u_(t),g=f_(s),h=i.createProgram();let p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(us).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(us).join(`
`),_.length>0&&(_+=`
`)):(p=[gc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),_=[m,gc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?rt.tonemapping_pars_fragment:"",t.toneMapping!==ni?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.encodings_pars_fragment,l_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),a=Ro(a),a=hc(a,t),a=pc(a,t),o=Ro(o),o=hc(o,t),o=pc(o,t),a=mc(a),o=mc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=x+p+a,M=x+_+o,w=fc(i,35633,S),C=fc(i,35632,M);if(i.attachShader(h,w),i.attachShader(h,C),t.index0AttributeName!==void 0?i.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),r.debug.checkShaderErrors){const D=i.getProgramInfoLog(h).trim(),I=i.getShaderInfoLog(w).trim(),j=i.getShaderInfoLog(C).trim();let K=!0,V=!0;if(i.getProgramParameter(h,35714)===!1){K=!1;const U=dc(i,w,"vertex"),O=dc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+D+`
`+U+`
`+O)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||j==="")&&(V=!1);V&&(this.diagnostics={runnable:K,programLog:D,vertexShader:{log:I,prefix:p},fragmentShader:{log:j,prefix:_}})}i.deleteShader(w),i.deleteShader(C);let G;this.getUniforms=function(){return G===void 0&&(G=new oa(i,h)),G};let v;return this.getAttributes=function(){return v===void 0&&(v=d_(i,h)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=s_++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=C,this}let M_=0;class w_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new A_(e),t.set(e,n)),n}}class A_{constructor(e){this.id=M_++,this.code=e,this.usedTimes=0}}function E_(r,e,t,n,i,s,a){const o=new Vo,l=new w_,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v,D,I,j,K){const V=j.fog,U=K.geometry,O=v.isMeshStandardMaterial?j.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||O),J=B&&B.mapping===xa?B.image.height:null,X=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const se=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ne=se!==void 0?se.length:0;let R=0;U.morphAttributes.position!==void 0&&(R=1),U.morphAttributes.normal!==void 0&&(R=2),U.morphAttributes.color!==void 0&&(R=3);let q,re,Q,te;if(X){const $e=ei[X];q=$e.vertexShader,re=$e.fragmentShader}else q=v.vertexShader,re=v.fragmentShader,l.update(v),Q=l.getVertexShaderID(v),te=l.getFragmentShaderID(v);const F=r.getRenderTarget(),oe=v.alphaTest>0,be=v.clearcoat>0,Pe=v.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:v.type,vertexShader:q,fragmentShader:re,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:F===null?r.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:Ri,map:!!v.map,matcap:!!v.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:J,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===zd,tangentSpaceNormalMap:v.normalMapType===zo,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Et,clearcoat:be,clearcoatMap:be&&!!v.clearcoatMap,clearcoatRoughnessMap:be&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:be&&!!v.clearcoatNormalMap,iridescence:Pe,iridescenceMap:Pe&&!!v.iridescenceMap,iridescenceThicknessMap:Pe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Lr,alphaMap:!!v.alphaMap,alphaTest:oe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!U.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!V,useFog:v.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:R,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:ni,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ba,flipSided:v.side===qn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const D=[];if(v.shaderID?D.push(v.shaderID):(D.push(v.customVertexShaderID),D.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)D.push(I),D.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(D,v),x(D,v),D.push(r.outputEncoding)),D.push(v.customProgramCacheKey),D.join()}function _(v,D){v.push(D.precision),v.push(D.outputEncoding),v.push(D.envMapMode),v.push(D.envMapCubeUVHeight),v.push(D.combine),v.push(D.vertexUvs),v.push(D.fogExp2),v.push(D.sizeAttenuation),v.push(D.morphTargetsCount),v.push(D.morphAttributeCount),v.push(D.numDirLights),v.push(D.numPointLights),v.push(D.numSpotLights),v.push(D.numSpotLightMaps),v.push(D.numHemiLights),v.push(D.numRectAreaLights),v.push(D.numDirLightShadows),v.push(D.numPointLightShadows),v.push(D.numSpotLightShadows),v.push(D.numSpotLightShadowsWithMaps),v.push(D.shadowMapType),v.push(D.toneMapping),v.push(D.numClippingPlanes),v.push(D.numClipIntersection),v.push(D.depthPacking)}function x(v,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.map&&o.enable(4),D.matcap&&o.enable(5),D.envMap&&o.enable(6),D.lightMap&&o.enable(7),D.aoMap&&o.enable(8),D.emissiveMap&&o.enable(9),D.bumpMap&&o.enable(10),D.normalMap&&o.enable(11),D.objectSpaceNormalMap&&o.enable(12),D.tangentSpaceNormalMap&&o.enable(13),D.clearcoat&&o.enable(14),D.clearcoatMap&&o.enable(15),D.clearcoatRoughnessMap&&o.enable(16),D.clearcoatNormalMap&&o.enable(17),D.iridescence&&o.enable(18),D.iridescenceMap&&o.enable(19),D.iridescenceThicknessMap&&o.enable(20),D.displacementMap&&o.enable(21),D.specularMap&&o.enable(22),D.roughnessMap&&o.enable(23),D.metalnessMap&&o.enable(24),D.gradientMap&&o.enable(25),D.alphaMap&&o.enable(26),D.alphaTest&&o.enable(27),D.vertexColors&&o.enable(28),D.vertexAlphas&&o.enable(29),D.vertexUvs&&o.enable(30),D.vertexTangents&&o.enable(31),D.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.physicallyCorrectLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.specularIntensityMap&&o.enable(15),D.specularColorMap&&o.enable(16),D.transmission&&o.enable(17),D.transmissionMap&&o.enable(18),D.thicknessMap&&o.enable(19),D.sheen&&o.enable(20),D.sheenColorMap&&o.enable(21),D.sheenRoughnessMap&&o.enable(22),D.decodeVideoTexture&&o.enable(23),D.opaque&&o.enable(24),v.push(o.mask)}function S(v){const D=g[v.type];let I;if(D){const j=ei[D];I=qu.clone(j.uniforms)}else I=v.uniforms;return I}function M(v,D){let I;for(let j=0,K=c.length;j<K;j++){const V=c[j];if(V.cacheKey===D){I=V,++I.usedTimes;break}}return I===void 0&&(I=new S_(r,D,v,s),c.push(I)),I}function w(v){if(--v.usedTimes===0){const D=c.indexOf(v);c[D]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function G(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:G}}function T_(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function C_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _c(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,m,g,h,p){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:h,group:p},r[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=h,_.group=p),e++,_}function o(f,d,m,g,h,p){const _=a(f,d,m,g,h,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,d,m,g,h,p){const _=a(f,d,m,g,h,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,d){t.length>1&&t.sort(f||C_),n.length>1&&n.sort(d||_c),i.length>1&&i.sort(d||_c)}function u(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function I_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new vc,r.set(n,[a])):i>=s.length?(a=new vc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function L_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function D_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let R_=0;function P_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function k_(r,e){const t=new L_,n=D_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new H);const s=new H,a=new nt,o=new nt;function l(u,f){let d=0,m=0,g=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let h=0,p=0,_=0,x=0,S=0,M=0,w=0,C=0,G=0,v=0;u.sort(P_);const D=f!==!0?Math.PI:1;for(let j=0,K=u.length;j<K;j++){const V=u[j],U=V.color,O=V.intensity,B=V.distance,J=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)d+=U.r*O*D,m+=U.g*O*D,g+=U.b*O*D;else if(V.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(V.sh.coefficients[X],O);else if(V.isDirectionalLight){const X=t.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity*D),V.castShadow){const se=V.shadow,ne=n.get(V);ne.shadowBias=se.bias,ne.shadowNormalBias=se.normalBias,ne.shadowRadius=se.radius,ne.shadowMapSize=se.mapSize,i.directionalShadow[h]=ne,i.directionalShadowMap[h]=J,i.directionalShadowMatrix[h]=V.shadow.matrix,M++}i.directional[h]=X,h++}else if(V.isSpotLight){const X=t.get(V);X.position.setFromMatrixPosition(V.matrixWorld),X.color.copy(U).multiplyScalar(O*D),X.distance=B,X.coneCos=Math.cos(V.angle),X.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),X.decay=V.decay,i.spot[_]=X;const se=V.shadow;if(V.map&&(i.spotLightMap[G]=V.map,G++,se.updateMatrices(V),V.castShadow&&v++),i.spotLightMatrix[_]=se.matrix,V.castShadow){const ne=n.get(V);ne.shadowBias=se.bias,ne.shadowNormalBias=se.normalBias,ne.shadowRadius=se.radius,ne.shadowMapSize=se.mapSize,i.spotShadow[_]=ne,i.spotShadowMap[_]=J,C++}_++}else if(V.isRectAreaLight){const X=t.get(V);X.color.copy(U).multiplyScalar(O),X.halfWidth.set(V.width*.5,0,0),X.halfHeight.set(0,V.height*.5,0),i.rectArea[x]=X,x++}else if(V.isPointLight){const X=t.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity*D),X.distance=V.distance,X.decay=V.decay,V.castShadow){const se=V.shadow,ne=n.get(V);ne.shadowBias=se.bias,ne.shadowNormalBias=se.normalBias,ne.shadowRadius=se.radius,ne.shadowMapSize=se.mapSize,ne.shadowCameraNear=se.camera.near,ne.shadowCameraFar=se.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=V.shadow.matrix,w++}i.point[p]=X,p++}else if(V.isHemisphereLight){const X=t.get(V);X.skyColor.copy(V.color).multiplyScalar(O*D),X.groundColor.copy(V.groundColor).multiplyScalar(O*D),i.hemi[S]=X,S++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==h||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==x||I.hemiLength!==S||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==C||I.numSpotMaps!==G)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=x,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=C+G-v,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=v,I.directionalLength=h,I.pointLength=p,I.spotLength=_,I.rectAreaLength=x,I.hemiLength=S,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=C,I.numSpotMaps=G,i.version=R_++)}function c(u,f){let d=0,m=0,g=0,h=0,p=0;const _=f.matrixWorldInverse;for(let x=0,S=u.length;x<S;x++){const M=u[x];if(M.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),d++}else if(M.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const w=i.rectArea[h];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(M.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),h++}else if(M.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function bc(r,e){const t=new k_(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function N_(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new bc(r,e),t.set(s,[l])):a>=o.length?(l=new bc(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $u extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F_ extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const O_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
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
}`;function z_(r,e,t){let n=new Ma;const i=new Je,s=new Je,a=new Lt,o=new $u({depthPacking:Ud}),l=new F_,c={},u=t.maxTextureSize,f={0:qn,1:Di,2:ba},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:O_,fragmentShader:U_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new mn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu,this.render=function(M,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const G=r.getRenderTarget(),v=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ii),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let j=0,K=M.length;j<K;j++){const V=M[j],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const O=U.getFrameExtents();if(i.multiply(O),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/O.x),i.x=s.x*O.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/O.y),i.y=s.y*O.y,U.mapSize.y=s.y)),U.map===null){const J=this.type!==ls?{minFilter:sn,magFilter:sn}:{};U.map=new ii(i.x,i.y,J),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const B=U.getViewportCount();for(let J=0;J<B;J++){const X=U.getViewport(J);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),I.viewport(a),U.updateMatrices(V,J),n=U.getFrustum(),S(w,C,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===ls&&_(U,C),U.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(G,v,D)};function _(M,w){const C=e.update(h);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ii(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,h,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,C,m,h,null)}function x(M,w,C,G,v,D){let I=null;const j=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(j!==void 0)I=j;else if(I=C.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=I.uuid,V=w.uuid;let U=c[K];U===void 0&&(U={},c[K]=U);let O=U[V];O===void 0&&(O=I.clone(),U[V]=O),I=O}return I.visible=w.visible,I.wireframe=w.wireframe,D===ls?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:f[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(C.matrixWorld),I.nearDistance=G,I.farDistance=v),I}function S(M,w,C,G,v){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===ls)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const j=e.update(M),K=M.material;if(Array.isArray(K)){const V=j.groups;for(let U=0,O=V.length;U<O;U++){const B=V[U],J=K[B.materialIndex];if(J&&J.visible){const X=x(M,J,G,C.near,C.far,v);r.renderBufferDirect(C,null,j,X,M,B)}}}else if(K.visible){const V=x(M,K,G,C.near,C.far,v);r.renderBufferDirect(C,null,j,V,M,null)}}const I=M.children;for(let j=0,K=I.length;j<K;j++)S(I[j],w,C,G,v)}}function B_(r,e,t){const n=t.isWebGL2;function i(){let W=!1;const ue=new Lt;let ve=null;const Re=new Lt(0,0,0,0);return{setMask:function(He){ve!==He&&!W&&(r.colorMask(He,He,He,He),ve=He)},setLocked:function(He){W=He},setClear:function(He,vt,qt,Yt,oi){oi===!0&&(He*=Yt,vt*=Yt,qt*=Yt),ue.set(He,vt,qt,Yt),Re.equals(ue)===!1&&(r.clearColor(He,vt,qt,Yt),Re.copy(ue))},reset:function(){W=!1,ve=null,Re.set(-1,0,0,0)}}}function s(){let W=!1,ue=null,ve=null,Re=null;return{setTest:function(He){He?oe(2929):be(2929)},setMask:function(He){ue!==He&&!W&&(r.depthMask(He),ue=He)},setFunc:function(He){if(ve!==He){switch(He){case od:r.depthFunc(512);break;case ld:r.depthFunc(519);break;case cd:r.depthFunc(513);break;case Eo:r.depthFunc(515);break;case ud:r.depthFunc(514);break;case fd:r.depthFunc(518);break;case dd:r.depthFunc(516);break;case hd:r.depthFunc(517);break;default:r.depthFunc(515)}ve=He}},setLocked:function(He){W=He},setClear:function(He){Re!==He&&(r.clearDepth(He),Re=He)},reset:function(){W=!1,ue=null,ve=null,Re=null}}}function a(){let W=!1,ue=null,ve=null,Re=null,He=null,vt=null,qt=null,Yt=null,oi=null;return{setTest:function(ut){W||(ut?oe(2960):be(2960))},setMask:function(ut){ue!==ut&&!W&&(r.stencilMask(ut),ue=ut)},setFunc:function(ut,Bn,En){(ve!==ut||Re!==Bn||He!==En)&&(r.stencilFunc(ut,Bn,En),ve=ut,Re=Bn,He=En)},setOp:function(ut,Bn,En){(vt!==ut||qt!==Bn||Yt!==En)&&(r.stencilOp(ut,Bn,En),vt=ut,qt=Bn,Yt=En)},setLocked:function(ut){W=ut},setClear:function(ut){oi!==ut&&(r.clearStencil(ut),oi=ut)},reset:function(){W=!1,ue=null,ve=null,Re=null,He=null,vt=null,qt=null,Yt=null,oi=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,h=[],p=null,_=!1,x=null,S=null,M=null,w=null,C=null,G=null,v=null,D=!1,I=null,j=null,K=null,V=null,U=null;const O=r.getParameter(35661);let B=!1,J=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=J>=2);let se=null,ne={};const R=r.getParameter(3088),q=r.getParameter(2978),re=new Lt().fromArray(R),Q=new Lt().fromArray(q);function te(W,ue,ve){const Re=new Uint8Array(4),He=r.createTexture();r.bindTexture(W,He),r.texParameteri(W,10241,9728),r.texParameteri(W,10240,9728);for(let vt=0;vt<ve;vt++)r.texImage2D(ue+vt,0,6408,1,1,0,6408,5121,Re);return He}const F={};F[3553]=te(3553,3553,1),F[34067]=te(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),oe(2929),l.setFunc(Eo),ee(!1),je(ll),oe(2884),Dt(Ii);function oe(W){d[W]!==!0&&(r.enable(W),d[W]=!0)}function be(W){d[W]!==!1&&(r.disable(W),d[W]=!1)}function Pe(W,ue){return m[W]!==ue?(r.bindFramebuffer(W,ue),m[W]=ue,n&&(W===36009&&(m[36160]=ue),W===36160&&(m[36009]=ue)),!0):!1}function Me(W,ue){let ve=h,Re=!1;if(W)if(ve=g.get(ue),ve===void 0&&(ve=[],g.set(ue,ve)),W.isWebGLMultipleRenderTargets){const He=W.texture;if(ve.length!==He.length||ve[0]!==36064){for(let vt=0,qt=He.length;vt<qt;vt++)ve[vt]=36064+vt;ve.length=He.length,Re=!0}}else ve[0]!==36064&&(ve[0]=36064,Re=!0);else ve[0]!==1029&&(ve[0]=1029,Re=!0);Re&&(t.isWebGL2?r.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function $e(W){return p!==W?(r.useProgram(W),p=W,!0):!1}const We={[Tr]:32774,[Zf]:32778,[Jf]:32779};if(n)We[dl]=32775,We[hl]=32776;else{const W=e.get("EXT_blend_minmax");W!==null&&(We[dl]=W.MIN_EXT,We[hl]=W.MAX_EXT)}const Te={[Qf]:0,[$f]:1,[ed]:768,[Ru]:770,[ad]:776,[rd]:774,[nd]:772,[td]:769,[Pu]:771,[sd]:775,[id]:773};function Dt(W,ue,ve,Re,He,vt,qt,Yt){if(W===Ii){_===!0&&(be(3042),_=!1);return}if(_===!1&&(oe(3042),_=!0),W!==Kf){if(W!==x||Yt!==D){if((S!==Tr||C!==Tr)&&(r.blendEquation(32774),S=Tr,C=Tr),Yt)switch(W){case Lr:r.blendFuncSeparate(1,771,1,771);break;case cl:r.blendFunc(1,1);break;case ul:r.blendFuncSeparate(0,769,0,1);break;case fl:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Lr:r.blendFuncSeparate(770,771,1,771);break;case cl:r.blendFunc(770,1);break;case ul:r.blendFuncSeparate(0,769,0,1);break;case fl:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}M=null,w=null,G=null,v=null,x=W,D=Yt}return}He=He||ue,vt=vt||ve,qt=qt||Re,(ue!==S||He!==C)&&(r.blendEquationSeparate(We[ue],We[He]),S=ue,C=He),(ve!==M||Re!==w||vt!==G||qt!==v)&&(r.blendFuncSeparate(Te[ve],Te[Re],Te[vt],Te[qt]),M=ve,w=Re,G=vt,v=qt),x=W,D=!1}function pe(W,ue){W.side===ba?be(2884):oe(2884);let ve=W.side===qn;ue&&(ve=!ve),ee(ve),W.blending===Lr&&W.transparent===!1?Dt(Ii):Dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),o.setMask(W.colorWrite);const Re=W.stencilWrite;c.setTest(Re),Re&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),lt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?oe(32926):be(32926)}function ee(W){I!==W&&(W?r.frontFace(2304):r.frontFace(2305),I=W)}function je(W){W!==Xf?(oe(2884),W!==j&&(W===ll?r.cullFace(1029):W===Yf?r.cullFace(1028):r.cullFace(1032))):be(2884),j=W}function xt(W){W!==K&&(B&&r.lineWidth(W),K=W)}function lt(W,ue,ve){W?(oe(32823),(V!==ue||U!==ve)&&(r.polygonOffset(ue,ve),V=ue,U=ve)):be(32823)}function Gt(W){W?oe(3089):be(3089)}function Ot(W){W===void 0&&(W=33984+O-1),se!==W&&(r.activeTexture(W),se=W)}function N(W,ue,ve){ve===void 0&&(se===null?ve=33984+O-1:ve=se);let Re=ne[ve];Re===void 0&&(Re={type:void 0,texture:void 0},ne[ve]=Re),(Re.type!==W||Re.texture!==ue)&&(se!==ve&&(r.activeTexture(ve),se=ve),r.bindTexture(W,ue||F[W]),Re.type=W,Re.texture=ue)}function L(){const W=ne[se];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function z(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function k(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(W){re.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),re.copy(W))}function ze(W){Q.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function st(W,ue){let ve=f.get(ue);ve===void 0&&(ve=new WeakMap,f.set(ue,ve));let Re=ve.get(W);Re===void 0&&(Re=r.getUniformBlockIndex(ue,W.name),ve.set(W,Re))}function ct(W,ue){const Re=f.get(ue).get(W);u.get(ue)!==Re&&(r.uniformBlockBinding(ue,Re,W.__bindingPointIndex),u.set(ue,Re))}function St(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},se=null,ne={},m={},g=new WeakMap,h=[],p=null,_=!1,x=null,S=null,M=null,w=null,C=null,G=null,v=null,D=!1,I=null,j=null,K=null,V=null,U=null,re.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:oe,disable:be,bindFramebuffer:Pe,drawBuffers:Me,useProgram:$e,setBlending:Dt,setMaterial:pe,setFlipSided:ee,setCullFace:je,setLineWidth:xt,setPolygonOffset:lt,setScissorTest:Gt,activeTexture:Ot,bindTexture:N,unbindTexture:L,compressedTexImage2D:ae,compressedTexImage3D:ye,texImage2D:fe,texImage3D:_e,updateUBOMapping:st,uniformBlockBinding:ct,texStorage2D:k,texStorage3D:le,texSubImage2D:xe,texSubImage3D:we,compressedTexSubImage2D:Be,compressedTexSubImage3D:z,scissor:Oe,viewport:ze,reset:St}}function G_(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,L){return _?new OffscreenCanvas(N,L):vs("canvas")}function S(N,L,ae,ye){let xe=1;if((N.width>ye||N.height>ye)&&(xe=ye/Math.max(N.width,N.height)),xe<1||L===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const we=L?ha:Math.floor,Be=we(xe*N.width),z=we(xe*N.height);h===void 0&&(h=x(Be,z));const k=ae?x(Be,z):h;return k.width=Be,k.height=z,k.getContext("2d").drawImage(N,0,0,Be,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Be+"x"+z+")."),k}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function M(N){return Do(N.width)&&Do(N.height)}function w(N){return o?!1:N.wrapS!==xn||N.wrapT!==xn||N.minFilter!==sn&&N.minFilter!==bn}function C(N,L){return N.generateMipmaps&&L&&N.minFilter!==sn&&N.minFilter!==bn}function G(N){r.generateMipmap(N)}function v(N,L,ae,ye,xe=!1){if(o===!1)return L;if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let we=L;return L===6403&&(ae===5126&&(we=33326),ae===5131&&(we=33325),ae===5121&&(we=33321)),L===33319&&(ae===5126&&(we=33328),ae===5131&&(we=33327),ae===5121&&(we=33323)),L===6408&&(ae===5126&&(we=34836),ae===5131&&(we=34842),ae===5121&&(we=ye===Et&&xe===!1?35907:32856),ae===32819&&(we=32854),ae===32820&&(we=32855)),(we===33325||we===33326||we===33327||we===33328||we===34842||we===34836)&&e.get("EXT_color_buffer_float"),we}function D(N,L,ae){return C(N,ae)===!0||N.isFramebufferTexture&&N.minFilter!==sn&&N.minFilter!==bn?Math.log2(Math.max(L.width,L.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?L.mipmaps.length:1}function I(N){return N===sn||N===pl||N===Ba?9728:9729}function j(N){const L=N.target;L.removeEventListener("dispose",j),V(L),L.isVideoTexture&&g.delete(L)}function K(N){const L=N.target;L.removeEventListener("dispose",K),O(L)}function V(N){const L=n.get(N);if(L.__webglInit===void 0)return;const ae=N.source,ye=p.get(ae);if(ye){const xe=ye[L.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&U(N),Object.keys(ye).length===0&&p.delete(ae)}n.remove(N)}function U(N){const L=n.get(N);r.deleteTexture(L.__webglTexture);const ae=N.source,ye=p.get(ae);delete ye[L.__cacheKey],a.memory.textures--}function O(N){const L=N.texture,ae=n.get(N),ye=n.get(L);if(ye.__webglTexture!==void 0&&(r.deleteTexture(ye.__webglTexture),a.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)r.deleteFramebuffer(ae.__webglFramebuffer[xe]),ae.__webglDepthbuffer&&r.deleteRenderbuffer(ae.__webglDepthbuffer[xe]);else{if(r.deleteFramebuffer(ae.__webglFramebuffer),ae.__webglDepthbuffer&&r.deleteRenderbuffer(ae.__webglDepthbuffer),ae.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ae.__webglMultisampledFramebuffer),ae.__webglColorRenderbuffer)for(let xe=0;xe<ae.__webglColorRenderbuffer.length;xe++)ae.__webglColorRenderbuffer[xe]&&r.deleteRenderbuffer(ae.__webglColorRenderbuffer[xe]);ae.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ae.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let xe=0,we=L.length;xe<we;xe++){const Be=n.get(L[xe]);Be.__webglTexture&&(r.deleteTexture(Be.__webglTexture),a.memory.textures--),n.remove(L[xe])}n.remove(L),n.remove(N)}let B=0;function J(){B=0}function X(){const N=B;return N>=l&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l),B+=1,N}function se(N){const L=[];return L.push(N.wrapS),L.push(N.wrapT),L.push(N.wrapR||0),L.push(N.magFilter),L.push(N.minFilter),L.push(N.anisotropy),L.push(N.internalFormat),L.push(N.format),L.push(N.type),L.push(N.generateMipmaps),L.push(N.premultiplyAlpha),L.push(N.flipY),L.push(N.unpackAlignment),L.push(N.encoding),L.join()}function ne(N,L){const ae=n.get(N);if(N.isVideoTexture&&Gt(N),N.isRenderTargetTexture===!1&&N.version>0&&ae.__version!==N.version){const ye=N.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(ae,N,L);return}}t.bindTexture(3553,ae.__webglTexture,33984+L)}function R(N,L){const ae=n.get(N);if(N.version>0&&ae.__version!==N.version){be(ae,N,L);return}t.bindTexture(35866,ae.__webglTexture,33984+L)}function q(N,L){const ae=n.get(N);if(N.version>0&&ae.__version!==N.version){be(ae,N,L);return}t.bindTexture(32879,ae.__webglTexture,33984+L)}function re(N,L){const ae=n.get(N);if(N.version>0&&ae.__version!==N.version){Pe(ae,N,L);return}t.bindTexture(34067,ae.__webglTexture,33984+L)}const Q={[Xi]:10497,[xn]:33071,[Io]:33648},te={[sn]:9728,[pl]:9984,[Ba]:9986,[bn]:9729,[yd]:9985,[Ji]:9987};function F(N,L,ae){if(ae?(r.texParameteri(N,10242,Q[L.wrapS]),r.texParameteri(N,10243,Q[L.wrapT]),(N===32879||N===35866)&&r.texParameteri(N,32882,Q[L.wrapR]),r.texParameteri(N,10240,te[L.magFilter]),r.texParameteri(N,10241,te[L.minFilter])):(r.texParameteri(N,10242,33071),r.texParameteri(N,10243,33071),(N===32879||N===35866)&&r.texParameteri(N,32882,33071),(L.wrapS!==xn||L.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(N,10240,I(L.magFilter)),r.texParameteri(N,10241,I(L.minFilter)),L.minFilter!==sn&&L.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===sn||L.minFilter!==Ba&&L.minFilter!==Ji||L.type===Ci&&e.has("OES_texture_float_linear")===!1||o===!1&&L.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(r.texParameterf(N,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function oe(N,L){let ae=!1;N.__webglInit===void 0&&(N.__webglInit=!0,L.addEventListener("dispose",j));const ye=L.source;let xe=p.get(ye);xe===void 0&&(xe={},p.set(ye,xe));const we=se(L);if(we!==N.__cacheKey){xe[we]===void 0&&(xe[we]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,ae=!0),xe[we].usedTimes++;const Be=xe[N.__cacheKey];Be!==void 0&&(xe[N.__cacheKey].usedTimes--,Be.usedTimes===0&&U(L)),N.__cacheKey=we,N.__webglTexture=xe[we].texture}return ae}function be(N,L,ae){let ye=3553;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ye=35866),L.isData3DTexture&&(ye=32879);const xe=oe(N,L),we=L.source;t.bindTexture(ye,N.__webglTexture,33984+ae);const Be=n.get(we);if(we.version!==Be.__version||xe===!0){t.activeTexture(33984+ae),r.pixelStorei(37440,L.flipY),r.pixelStorei(37441,L.premultiplyAlpha),r.pixelStorei(3317,L.unpackAlignment),r.pixelStorei(37443,0);const z=w(L)&&M(L.image)===!1;let k=S(L.image,z,!1,u);k=Ot(L,k);const le=M(k)||o,fe=s.convert(L.format,L.encoding);let _e=s.convert(L.type),Oe=v(L.internalFormat,fe,_e,L.encoding,L.isVideoTexture);F(ye,L,le);let ze;const st=L.mipmaps,ct=o&&L.isVideoTexture!==!0,St=Be.__version===void 0||xe===!0,W=D(L,k,le);if(L.isDepthTexture)Oe=6402,o?L.type===Ci?Oe=36012:L.type===Yi?Oe=33190:L.type===Dr?Oe=35056:Oe=33189:L.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Ki&&Oe===6402&&L.type!==Fu&&L.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Yi,_e=s.convert(L.type)),L.format===Nr&&Oe===6402&&(Oe=34041,L.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Dr,_e=s.convert(L.type))),St&&(ct?t.texStorage2D(3553,1,Oe,k.width,k.height):t.texImage2D(3553,0,Oe,k.width,k.height,0,fe,_e,null));else if(L.isDataTexture)if(st.length>0&&le){ct&&St&&t.texStorage2D(3553,W,Oe,st[0].width,st[0].height);for(let ue=0,ve=st.length;ue<ve;ue++)ze=st[ue],ct?t.texSubImage2D(3553,ue,0,0,ze.width,ze.height,fe,_e,ze.data):t.texImage2D(3553,ue,Oe,ze.width,ze.height,0,fe,_e,ze.data);L.generateMipmaps=!1}else ct?(St&&t.texStorage2D(3553,W,Oe,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,fe,_e,k.data)):t.texImage2D(3553,0,Oe,k.width,k.height,0,fe,_e,k.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){ct&&St&&t.texStorage3D(35866,W,Oe,st[0].width,st[0].height,k.depth);for(let ue=0,ve=st.length;ue<ve;ue++)ze=st[ue],L.format!==Wn?fe!==null?ct?t.compressedTexSubImage3D(35866,ue,0,0,0,ze.width,ze.height,k.depth,fe,ze.data,0,0):t.compressedTexImage3D(35866,ue,Oe,ze.width,ze.height,k.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(35866,ue,0,0,0,ze.width,ze.height,k.depth,fe,_e,ze.data):t.texImage3D(35866,ue,Oe,ze.width,ze.height,k.depth,0,fe,_e,ze.data)}else{ct&&St&&t.texStorage2D(3553,W,Oe,st[0].width,st[0].height);for(let ue=0,ve=st.length;ue<ve;ue++)ze=st[ue],L.format!==Wn?fe!==null?ct?t.compressedTexSubImage2D(3553,ue,0,0,ze.width,ze.height,fe,ze.data):t.compressedTexImage2D(3553,ue,Oe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(3553,ue,0,0,ze.width,ze.height,fe,_e,ze.data):t.texImage2D(3553,ue,Oe,ze.width,ze.height,0,fe,_e,ze.data)}else if(L.isDataArrayTexture)ct?(St&&t.texStorage3D(35866,W,Oe,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,fe,_e,k.data)):t.texImage3D(35866,0,Oe,k.width,k.height,k.depth,0,fe,_e,k.data);else if(L.isData3DTexture)ct?(St&&t.texStorage3D(32879,W,Oe,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,fe,_e,k.data)):t.texImage3D(32879,0,Oe,k.width,k.height,k.depth,0,fe,_e,k.data);else if(L.isFramebufferTexture){if(St)if(ct)t.texStorage2D(3553,W,Oe,k.width,k.height);else{let ue=k.width,ve=k.height;for(let Re=0;Re<W;Re++)t.texImage2D(3553,Re,Oe,ue,ve,0,fe,_e,null),ue>>=1,ve>>=1}}else if(st.length>0&&le){ct&&St&&t.texStorage2D(3553,W,Oe,st[0].width,st[0].height);for(let ue=0,ve=st.length;ue<ve;ue++)ze=st[ue],ct?t.texSubImage2D(3553,ue,0,0,fe,_e,ze):t.texImage2D(3553,ue,Oe,fe,_e,ze);L.generateMipmaps=!1}else ct?(St&&t.texStorage2D(3553,W,Oe,k.width,k.height),t.texSubImage2D(3553,0,0,0,fe,_e,k)):t.texImage2D(3553,0,Oe,fe,_e,k);C(L,le)&&G(ye),Be.__version=we.version,L.onUpdate&&L.onUpdate(L)}N.__version=L.version}function Pe(N,L,ae){if(L.image.length!==6)return;const ye=oe(N,L),xe=L.source;t.bindTexture(34067,N.__webglTexture,33984+ae);const we=n.get(xe);if(xe.version!==we.__version||ye===!0){t.activeTexture(33984+ae),r.pixelStorei(37440,L.flipY),r.pixelStorei(37441,L.premultiplyAlpha),r.pixelStorei(3317,L.unpackAlignment),r.pixelStorei(37443,0);const Be=L.isCompressedTexture||L.image[0].isCompressedTexture,z=L.image[0]&&L.image[0].isDataTexture,k=[];for(let ue=0;ue<6;ue++)!Be&&!z?k[ue]=S(L.image[ue],!1,!0,c):k[ue]=z?L.image[ue].image:L.image[ue],k[ue]=Ot(L,k[ue]);const le=k[0],fe=M(le)||o,_e=s.convert(L.format,L.encoding),Oe=s.convert(L.type),ze=v(L.internalFormat,_e,Oe,L.encoding),st=o&&L.isVideoTexture!==!0,ct=we.__version===void 0||ye===!0;let St=D(L,le,fe);F(34067,L,fe);let W;if(Be){st&&ct&&t.texStorage2D(34067,St,ze,le.width,le.height);for(let ue=0;ue<6;ue++){W=k[ue].mipmaps;for(let ve=0;ve<W.length;ve++){const Re=W[ve];L.format!==Wn?_e!==null?st?t.compressedTexSubImage2D(34069+ue,ve,0,0,Re.width,Re.height,_e,Re.data):t.compressedTexImage2D(34069+ue,ve,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(34069+ue,ve,0,0,Re.width,Re.height,_e,Oe,Re.data):t.texImage2D(34069+ue,ve,ze,Re.width,Re.height,0,_e,Oe,Re.data)}}}else{W=L.mipmaps,st&&ct&&(W.length>0&&St++,t.texStorage2D(34067,St,ze,k[0].width,k[0].height));for(let ue=0;ue<6;ue++)if(z){st?t.texSubImage2D(34069+ue,0,0,0,k[ue].width,k[ue].height,_e,Oe,k[ue].data):t.texImage2D(34069+ue,0,ze,k[ue].width,k[ue].height,0,_e,Oe,k[ue].data);for(let ve=0;ve<W.length;ve++){const He=W[ve].image[ue].image;st?t.texSubImage2D(34069+ue,ve+1,0,0,He.width,He.height,_e,Oe,He.data):t.texImage2D(34069+ue,ve+1,ze,He.width,He.height,0,_e,Oe,He.data)}}else{st?t.texSubImage2D(34069+ue,0,0,0,_e,Oe,k[ue]):t.texImage2D(34069+ue,0,ze,_e,Oe,k[ue]);for(let ve=0;ve<W.length;ve++){const Re=W[ve];st?t.texSubImage2D(34069+ue,ve+1,0,0,_e,Oe,Re.image[ue]):t.texImage2D(34069+ue,ve+1,ze,_e,Oe,Re.image[ue])}}}C(L,fe)&&G(34067),we.__version=xe.version,L.onUpdate&&L.onUpdate(L)}N.__version=L.version}function Me(N,L,ae,ye,xe){const we=s.convert(ae.format,ae.encoding),Be=s.convert(ae.type),z=v(ae.internalFormat,we,Be,ae.encoding);n.get(L).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,z,L.width,L.height,L.depth,0,we,Be,null):t.texImage2D(xe,0,z,L.width,L.height,0,we,Be,null)),t.bindFramebuffer(36160,N),lt(L)?d.framebufferTexture2DMultisampleEXT(36160,ye,xe,n.get(ae).__webglTexture,0,xt(L)):(xe===3553||xe>=34069&&xe<=34074)&&r.framebufferTexture2D(36160,ye,xe,n.get(ae).__webglTexture,0),t.bindFramebuffer(36160,null)}function $e(N,L,ae){if(r.bindRenderbuffer(36161,N),L.depthBuffer&&!L.stencilBuffer){let ye=33189;if(ae||lt(L)){const xe=L.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Ci?ye=36012:xe.type===Yi&&(ye=33190));const we=xt(L);lt(L)?d.renderbufferStorageMultisampleEXT(36161,we,ye,L.width,L.height):r.renderbufferStorageMultisample(36161,we,ye,L.width,L.height)}else r.renderbufferStorage(36161,ye,L.width,L.height);r.framebufferRenderbuffer(36160,36096,36161,N)}else if(L.depthBuffer&&L.stencilBuffer){const ye=xt(L);ae&&lt(L)===!1?r.renderbufferStorageMultisample(36161,ye,35056,L.width,L.height):lt(L)?d.renderbufferStorageMultisampleEXT(36161,ye,35056,L.width,L.height):r.renderbufferStorage(36161,34041,L.width,L.height),r.framebufferRenderbuffer(36160,33306,36161,N)}else{const ye=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let xe=0;xe<ye.length;xe++){const we=ye[xe],Be=s.convert(we.format,we.encoding),z=s.convert(we.type),k=v(we.internalFormat,Be,z,we.encoding),le=xt(L);ae&&lt(L)===!1?r.renderbufferStorageMultisample(36161,le,k,L.width,L.height):lt(L)?d.renderbufferStorageMultisampleEXT(36161,le,k,L.width,L.height):r.renderbufferStorage(36161,k,L.width,L.height)}}r.bindRenderbuffer(36161,null)}function We(N,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,N),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),ne(L.depthTexture,0);const ye=n.get(L.depthTexture).__webglTexture,xe=xt(L);if(L.depthTexture.format===Ki)lt(L)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ye,0,xe):r.framebufferTexture2D(36160,36096,3553,ye,0);else if(L.depthTexture.format===Nr)lt(L)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ye,0,xe):r.framebufferTexture2D(36160,33306,3553,ye,0);else throw new Error("Unknown depthTexture format")}function Te(N){const L=n.get(N),ae=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!L.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");We(L.__webglFramebuffer,N)}else if(ae){L.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(36160,L.__webglFramebuffer[ye]),L.__webglDepthbuffer[ye]=r.createRenderbuffer(),$e(L.__webglDepthbuffer[ye],N,!1)}else t.bindFramebuffer(36160,L.__webglFramebuffer),L.__webglDepthbuffer=r.createRenderbuffer(),$e(L.__webglDepthbuffer,N,!1);t.bindFramebuffer(36160,null)}function Dt(N,L,ae){const ye=n.get(N);L!==void 0&&Me(ye.__webglFramebuffer,N,N.texture,36064,3553),ae!==void 0&&Te(N)}function pe(N){const L=N.texture,ae=n.get(N),ye=n.get(L);N.addEventListener("dispose",K),N.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture()),ye.__version=L.version,a.memory.textures++);const xe=N.isWebGLCubeRenderTarget===!0,we=N.isWebGLMultipleRenderTargets===!0,Be=M(N)||o;if(xe){ae.__webglFramebuffer=[];for(let z=0;z<6;z++)ae.__webglFramebuffer[z]=r.createFramebuffer()}else{if(ae.__webglFramebuffer=r.createFramebuffer(),we)if(i.drawBuffers){const z=N.texture;for(let k=0,le=z.length;k<le;k++){const fe=n.get(z[k]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&N.samples>0&&lt(N)===!1){const z=we?L:[L];ae.__webglMultisampledFramebuffer=r.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer);for(let k=0;k<z.length;k++){const le=z[k];ae.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(36161,ae.__webglColorRenderbuffer[k]);const fe=s.convert(le.format,le.encoding),_e=s.convert(le.type),Oe=v(le.internalFormat,fe,_e,le.encoding,N.isXRRenderTarget===!0),ze=xt(N);r.renderbufferStorageMultisample(36161,ze,Oe,N.width,N.height),r.framebufferRenderbuffer(36160,36064+k,36161,ae.__webglColorRenderbuffer[k])}r.bindRenderbuffer(36161,null),N.depthBuffer&&(ae.__webglDepthRenderbuffer=r.createRenderbuffer(),$e(ae.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(36160,null)}}if(xe){t.bindTexture(34067,ye.__webglTexture),F(34067,L,Be);for(let z=0;z<6;z++)Me(ae.__webglFramebuffer[z],N,L,36064,34069+z);C(L,Be)&&G(34067),t.unbindTexture()}else if(we){const z=N.texture;for(let k=0,le=z.length;k<le;k++){const fe=z[k],_e=n.get(fe);t.bindTexture(3553,_e.__webglTexture),F(3553,fe,Be),Me(ae.__webglFramebuffer,N,fe,36064+k,3553),C(fe,Be)&&G(3553)}t.unbindTexture()}else{let z=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(o?z=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,ye.__webglTexture),F(z,L,Be),Me(ae.__webglFramebuffer,N,L,36064,z),C(L,Be)&&G(z),t.unbindTexture()}N.depthBuffer&&Te(N)}function ee(N){const L=M(N)||o,ae=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ye=0,xe=ae.length;ye<xe;ye++){const we=ae[ye];if(C(we,L)){const Be=N.isWebGLCubeRenderTarget?34067:3553,z=n.get(we).__webglTexture;t.bindTexture(Be,z),G(Be),t.unbindTexture()}}}function je(N){if(o&&N.samples>0&&lt(N)===!1){const L=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ae=N.width,ye=N.height;let xe=16384;const we=[],Be=N.stencilBuffer?33306:36096,z=n.get(N),k=N.isWebGLMultipleRenderTargets===!0;if(k)for(let le=0;le<L.length;le++)t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,z.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,z.__webglFramebuffer);for(let le=0;le<L.length;le++){we.push(36064+le),N.depthBuffer&&we.push(Be);const fe=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(fe===!1&&(N.depthBuffer&&(xe|=256),N.stencilBuffer&&(xe|=1024)),k&&r.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[le]),fe===!0&&(r.invalidateFramebuffer(36008,[Be]),r.invalidateFramebuffer(36009,[Be])),k){const _e=n.get(L[le]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,_e,0)}r.blitFramebuffer(0,0,ae,ye,0,0,ae,ye,xe,9728),m&&r.invalidateFramebuffer(36008,we)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let le=0;le<L.length;le++){t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,z.__webglColorRenderbuffer[le]);const fe=n.get(L[le]).__webglTexture;t.bindFramebuffer(36160,z.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,fe,0)}t.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function xt(N){return Math.min(f,N.samples)}function lt(N){const L=n.get(N);return o&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Gt(N){const L=a.render.frame;g.get(N)!==L&&(g.set(N,L),N.update())}function Ot(N,L){const ae=N.encoding,ye=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Lo||ae!==Ri&&(ae===Et?o===!1?e.has("EXT_sRGB")===!0&&ye===Wn?(N.format=Lo,N.minFilter=bn,N.generateMipmaps=!1):L=Bu.sRGBToLinear(L):(ye!==Wn||xe!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ae)),L}this.allocateTextureUnit=X,this.resetTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=R,this.setTexture3D=q,this.setTextureCube=re,this.rebindTextures=Dt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=lt}function V_(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Qi)return 5121;if(s===wd)return 32819;if(s===Ad)return 32820;if(s===xd)return 5120;if(s===Sd)return 5122;if(s===Fu)return 5123;if(s===Md)return 5124;if(s===Yi)return 5125;if(s===Ci)return 5126;if(s===ms)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ed)return 6406;if(s===Wn)return 6408;if(s===Cd)return 6409;if(s===Id)return 6410;if(s===Ki)return 6402;if(s===Nr)return 34041;if(s===Td)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Lo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ld)return 6403;if(s===Dd)return 36244;if(s===Rd)return 33319;if(s===Pd)return 33320;if(s===kd)return 36249;if(s===Ga||s===Va||s===Ha||s===Wa)if(a===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ga)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ga)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Va)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ha)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ml||s===gl||s===_l||s===vl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bl||s===yl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===bl)return a===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===yl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xl||s===Sl||s===Ml||s===wl||s===Al||s===El||s===Tl||s===Cl||s===Il||s===Ll||s===Dl||s===Rl||s===Pl||s===kl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===xl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ml)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Al)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===El)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Il)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ll)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kl)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Nl)return a===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Dr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class H_ extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let ti=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}};const W_={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,n),_=this._getHandJoint(c,h);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class j_ extends Sn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Ki,u!==Ki&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=Yi),n===void 0&&u===Nr&&(n=Dr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1}}class q_ extends sr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const g=t.getContextAttributes();let h=null,p=null;const _=[],x=[],S=new Set,M=new Map,w=new on;w.layers.enable(1),w.viewport=new Lt;const C=new on;C.layers.enable(2),C.viewport=new Lt;const G=[w,C],v=new H_;v.layers.enable(1),v.layers.enable(2);let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let q=_[R];return q===void 0&&(q=new _o,_[R]=q),q.getTargetRaySpace()},this.getControllerGrip=function(R){let q=_[R];return q===void 0&&(q=new _o,_[R]=q),q.getGripSpace()},this.getHand=function(R){let q=_[R];return q===void 0&&(q=new _o,_[R]=q),q.getHandSpace()};function j(R){const q=x.indexOf(R.inputSource);if(q===-1)return;const re=_[q];re!==void 0&&re.dispatchEvent({type:R.type,data:R.inputSource})}function K(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",V);for(let R=0;R<_.length;R++){const q=x[R];q!==null&&(x[R]=null,_[R].disconnect(q))}D=null,I=null,e.setRenderTarget(h),d=null,f=null,u=null,i=null,p=null,ne.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){o=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",K),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:d}),p=new ii(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Qi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let q=null,re=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,q=g.stencil?Nr:Ki,re=g.stencil?Dr:Yi);const te={colorFormat:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(te),i.updateRenderState({layers:[f]}),p=new ii(f.textureWidth,f.textureHeight,{format:Wn,type:Qi,depthTexture:new j_(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const F=e.properties.get(p);F.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(R){for(let q=0;q<R.removed.length;q++){const re=R.removed[q],Q=x.indexOf(re);Q>=0&&(x[Q]=null,_[Q].disconnect(re))}for(let q=0;q<R.added.length;q++){const re=R.added[q];let Q=x.indexOf(re);if(Q===-1){for(let F=0;F<_.length;F++)if(F>=x.length){x.push(re),Q=F;break}else if(x[F]===null){x[F]=re,Q=F;break}if(Q===-1)break}const te=_[Q];te&&te.connect(re)}}const U=new H,O=new H;function B(R,q,re){U.setFromMatrixPosition(q.matrixWorld),O.setFromMatrixPosition(re.matrixWorld);const Q=U.distanceTo(O),te=q.projectionMatrix.elements,F=re.projectionMatrix.elements,oe=te[14]/(te[10]-1),be=te[14]/(te[10]+1),Pe=(te[9]+1)/te[5],Me=(te[9]-1)/te[5],$e=(te[8]-1)/te[0],We=(F[8]+1)/F[0],Te=oe*$e,Dt=oe*We,pe=Q/(-$e+We),ee=pe*-$e;q.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(ee),R.translateZ(pe),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const je=oe+pe,xt=be+pe,lt=Te-ee,Gt=Dt+(Q-ee),Ot=Pe*be/xt*je,N=Me*be/xt*je;R.projectionMatrix.makePerspective(lt,Gt,Ot,N,je,xt)}function J(R,q){q===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(q.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;v.near=C.near=w.near=R.near,v.far=C.far=w.far=R.far,(D!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,I=v.far);const q=R.parent,re=v.cameras;J(v,q);for(let te=0;te<re.length;te++)J(re[te],q);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),R.matrix.copy(v.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);const Q=R.children;for(let te=0,F=Q.length;te<F;te++)Q[te].updateMatrixWorld(!0);re.length===2?B(v,w,C):v.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(R){f!==null&&(f.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)},this.getPlanes=function(){return S};let X=null;function se(R,q){if(c=q.getViewerPose(l||a),m=q,c!==null){const re=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Q=!1;re.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let te=0;te<re.length;te++){const F=re[te];let oe=null;if(d!==null)oe=d.getViewport(F);else{const Pe=u.getViewSubImage(f,F);oe=Pe.viewport,te===0&&(e.setRenderTargetTextures(p,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(p))}let be=G[te];be===void 0&&(be=new on,be.layers.enable(te),be.viewport=new Lt,G[te]=be),be.matrix.fromArray(F.transform.matrix),be.projectionMatrix.fromArray(F.projectionMatrix),be.viewport.set(oe.x,oe.y,oe.width,oe.height),te===0&&v.matrix.copy(be.matrix),Q===!0&&v.cameras.push(be)}}for(let re=0;re<_.length;re++){const Q=x[re],te=_[re];Q!==null&&te!==void 0&&te.update(Q,q,l||a)}if(X&&X(R,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let re=null;for(const Q of S)q.detectedPlanes.has(Q)||(re===null&&(re=[]),re.push(Q));if(re!==null)for(const Q of re)S.delete(Q),M.delete(Q),n.dispatchEvent({type:"planeremoved",data:Q});for(const Q of q.detectedPlanes)if(!S.has(Q))S.add(Q),M.set(Q,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Q});else{const te=M.get(Q);Q.lastChangedTime>te&&(M.set(Q,Q.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Q}))}}m=null}const ne=new Yu;ne.setAnimationLoop(se),this.setAnimationLoop=function(R){X=R},this.dispose=function(){}}}function X_(r,e){function t(h,p){p.color.getRGB(h.fogColor.value,ju(r)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function n(h,p,_,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(h,p):p.isMeshToonMaterial?(i(h,p),u(h,p)):p.isMeshPhongMaterial?(i(h,p),c(h,p)):p.isMeshStandardMaterial?(i(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,S)):p.isMeshMatcapMaterial?(i(h,p),m(h,p)):p.isMeshDepthMaterial?i(h,p):p.isMeshDistanceMaterial?(i(h,p),g(h,p)):p.isMeshNormalMaterial?i(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&a(h,p)):p.isPointsMaterial?o(h,p,_,x):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===qn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===qn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(h.envMap.value=_,h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const M=r.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),h.uv2Transform.value.copy(S.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function a(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function o(h,p,_,x){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*_,h.scale.value=x*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),h.uvTransform.value.copy(S.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,_){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===qn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function g(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Y_(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(x,S){const M=S.program;n.uniformBlockBinding(x,M)}function c(x,S){let M=i[x.id];M===void 0&&(g(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",p));const w=S.program;n.updateUBOMapping(x,w);const C=e.render.frame;s[x.id]!==C&&(d(x),s[x.id]=C)}function u(x){const S=f();x.__bindingPointIndex=S;const M=r.createBuffer(),w=x.__size,C=x.usage;return r.bindBuffer(35345,M),r.bufferData(35345,w,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,M),M}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=i[x.id],M=x.uniforms,w=x.__cache;r.bindBuffer(35345,S);for(let C=0,G=M.length;C<G;C++){const v=M[C];if(m(v,C,w)===!0){const D=v.__offset,I=Array.isArray(v.value)?v.value:[v.value];let j=0;for(let K=0;K<I.length;K++){const V=I[K],U=h(V);typeof V=="number"?(v.__data[0]=V,r.bufferSubData(35345,D+j,v.__data)):V.isMatrix3?(v.__data[0]=V.elements[0],v.__data[1]=V.elements[1],v.__data[2]=V.elements[2],v.__data[3]=V.elements[0],v.__data[4]=V.elements[3],v.__data[5]=V.elements[4],v.__data[6]=V.elements[5],v.__data[7]=V.elements[0],v.__data[8]=V.elements[6],v.__data[9]=V.elements[7],v.__data[10]=V.elements[8],v.__data[11]=V.elements[0]):(V.toArray(v.__data,j),j+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,D,v.__data)}}r.bindBuffer(35345,null)}function m(x,S,M){const w=x.value;if(M[S]===void 0){if(typeof w=="number")M[S]=w;else{const C=Array.isArray(w)?w:[w],G=[];for(let v=0;v<C.length;v++)G.push(C[v].clone());M[S]=G}return!0}else if(typeof w=="number"){if(M[S]!==w)return M[S]=w,!0}else{const C=Array.isArray(M[S])?M[S]:[M[S]],G=Array.isArray(w)?w:[w];for(let v=0;v<C.length;v++){const D=C[v];if(D.equals(G[v])===!1)return D.copy(G[v]),!0}}return!1}function g(x){const S=x.uniforms;let M=0;const w=16;let C=0;for(let G=0,v=S.length;G<v;G++){const D=S[G],I={boundary:0,storage:0},j=Array.isArray(D.value)?D.value:[D.value];for(let K=0,V=j.length;K<V;K++){const U=j[K],O=h(U);I.boundary+=O.boundary,I.storage+=O.storage}if(D.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,G>0){C=M%w;const K=w-C;C!==0&&K-I.boundary<0&&(M+=w-C,D.__offset=M)}M+=I.storage}return C=M%w,C>0&&(M+=w-C),x.__size=M,x.__cache={},this}function h(x){const S={boundary:0,storage:0};return typeof x=="number"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function p(x){const S=x.target;S.removeEventListener("dispose",p);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function _(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:_}}function K_(){const r=vs("canvas");return r.style.display="block",r}function ef(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:K_(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ri,this.physicallyCorrectLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const h=this;let p=!1,_=0,x=0,S=null,M=-1,w=null;const C=new Lt,G=new Lt;let v=null,D=e.width,I=e.height,j=1,K=null,V=null;const U=new Lt(0,0,D,I),O=new Lt(0,0,D,I);let B=!1;const J=new Ma;let X=!1,se=!1,ne=null;const R=new nt,q=new Je,re=new H,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return S===null?j:1}let F=t;function oe(P,Z){for(let de=0;de<P.length;de++){const Y=P[de],me=e.getContext(Y,Z);if(me!==null)return me}return null}try{const P={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",ze,!1),e.addEventListener("webglcontextcreationerror",st,!1),F===null){const Z=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&Z.shift(),F=oe(Z,P),F===null)throw oe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let be,Pe,Me,$e,We,Te,Dt,pe,ee,je,xt,lt,Gt,Ot,N,L,ae,ye,xe,we,Be,z,k,le;function fe(){be=new og(F),Pe=new tg(F,be,r),be.init(Pe),z=new V_(F,be,Pe),Me=new B_(F,be,Pe),$e=new ug,We=new T_,Te=new G_(F,be,Me,We,Pe,z,$e),Dt=new ig(h),pe=new ag(h),ee=new bh(F,Pe),k=new $m(F,be,ee,Pe),je=new lg(F,ee,$e,k),xt=new pg(F,je,ee,$e),xe=new hg(F,Pe,Te),L=new ng(We),lt=new E_(h,Dt,pe,be,Pe,k,L),Gt=new X_(h,We),Ot=new I_,N=new N_(be,Pe),ye=new Qm(h,Dt,pe,Me,xt,u,a),ae=new z_(h,xt,Pe),le=new Y_(F,$e,Pe,Me),we=new eg(F,be,$e,Pe),Be=new cg(F,be,$e,Pe),$e.programs=lt.programs,h.capabilities=Pe,h.extensions=be,h.properties=We,h.renderLists=Ot,h.shadowMap=ae,h.state=Me,h.info=$e}fe();const _e=new q_(h,F);this.xr=_e,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=be.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=be.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(D,I,!1))},this.getSize=function(P){return P.set(D,I)},this.setSize=function(P,Z,de){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,I=Z,e.width=Math.floor(P*j),e.height=Math.floor(Z*j),de!==!1&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(D*j,I*j).floor()},this.setDrawingBufferSize=function(P,Z,de){D=P,I=Z,j=de,e.width=Math.floor(P*de),e.height=Math.floor(Z*de),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(U)},this.setViewport=function(P,Z,de,Y){P.isVector4?U.set(P.x,P.y,P.z,P.w):U.set(P,Z,de,Y),Me.viewport(C.copy(U).multiplyScalar(j).floor())},this.getScissor=function(P){return P.copy(O)},this.setScissor=function(P,Z,de,Y){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,Z,de,Y),Me.scissor(G.copy(O).multiplyScalar(j).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(P){Me.setScissorTest(B=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(P=!0,Z=!0,de=!0){let Y=0;P&&(Y|=16384),Z&&(Y|=256),de&&(Y|=1024),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Ot.dispose(),N.dispose(),We.dispose(),Dt.dispose(),pe.dispose(),xt.dispose(),k.dispose(),le.dispose(),lt.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Re),_e.removeEventListener("sessionend",He),ne&&(ne.dispose(),ne=null),vt.stop()};function Oe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const P=$e.autoReset,Z=ae.enabled,de=ae.autoUpdate,Y=ae.needsUpdate,me=ae.type;fe(),$e.autoReset=P,ae.enabled=Z,ae.autoUpdate=de,ae.needsUpdate=Y,ae.type=me}function st(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ct(P){const Z=P.target;Z.removeEventListener("dispose",ct),St(Z)}function St(P){W(P),We.remove(P)}function W(P){const Z=We.get(P).programs;Z!==void 0&&(Z.forEach(function(de){lt.releaseProgram(de)}),P.isShaderMaterial&&lt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,de,Y,me,Xe){Z===null&&(Z=Q);const Qe=me.isMesh&&me.matrixWorld.determinant()<0,tt=ka(P,Z,de,Y,me);Me.setMaterial(Y,Qe);let it=de.index,pt=1;Y.wireframe===!0&&(it=je.getWireframeAttribute(de),pt=2);const ft=de.drawRange,dt=de.attributes.position;let Bt=ft.start*pt,gn=(ft.start+ft.count)*pt;Xe!==null&&(Bt=Math.max(Bt,Xe.start*pt),gn=Math.min(gn,(Xe.start+Xe.count)*pt)),it!==null?(Bt=Math.max(Bt,0),gn=Math.min(gn,it.count)):dt!=null&&(Bt=Math.max(Bt,0),gn=Math.min(gn,dt.count));const Ut=gn-Bt;if(Ut<0||Ut===1/0)return;k.setup(me,Y,tt,de,it);let Tn,Nt=we;if(it!==null&&(Tn=ee.get(it),Nt=Be,Nt.setIndex(Tn)),me.isMesh)Y.wireframe===!0?(Me.setLineWidth(Y.wireframeLinewidth*te()),Nt.setMode(1)):Nt.setMode(4);else if(me.isLine){let at=Y.linewidth;at===void 0&&(at=1),Me.setLineWidth(at*te()),me.isLineSegments?Nt.setMode(1):me.isLineLoop?Nt.setMode(2):Nt.setMode(3)}else me.isPoints?Nt.setMode(0):me.isSprite&&Nt.setMode(4);if(me.isInstancedMesh)Nt.renderInstances(Bt,Ut,me.count);else if(de.isInstancedBufferGeometry){const at=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Zr=Math.min(de.instanceCount,at);Nt.renderInstances(Bt,Ut,Zr)}else Nt.render(Bt,Ut)},this.compile=function(P,Z){function de(Y,me,Xe){Y.transparent===!0&&Y.side===Ns?(Y.side=qn,Y.needsUpdate=!0,En(Y,me,Xe),Y.side=Di,Y.needsUpdate=!0,En(Y,me,Xe),Y.side=Ns):En(Y,me,Xe)}d=N.get(P),d.init(),g.push(d),P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Z.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights(h.physicallyCorrectLights),P.traverse(function(Y){const me=Y.material;if(me)if(Array.isArray(me))for(let Xe=0;Xe<me.length;Xe++){const Qe=me[Xe];de(Qe,P,Y)}else de(me,P,Y)}),g.pop(),d=null};let ue=null;function ve(P){ue&&ue(P)}function Re(){vt.stop()}function He(){vt.start()}const vt=new Yu;vt.setAnimationLoop(ve),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(P){ue=P,_e.setAnimationLoop(P),P===null?vt.stop():vt.start()},_e.addEventListener("sessionstart",Re),_e.addEventListener("sessionend",He),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(Z),Z=_e.getCamera()),P.isScene===!0&&P.onBeforeRender(h,P,Z,S),d=N.get(P,g.length),d.init(),g.push(d),R.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),J.setFromProjectionMatrix(R),se=this.localClippingEnabled,X=L.init(this.clippingPlanes,se,Z),f=Ot.get(P,m.length),f.init(),m.push(f),qt(P,Z,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(K,V),X===!0&&L.beginShadows();const de=d.state.shadowsArray;if(ae.render(de,P,Z),X===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),ye.render(f,P),d.setupLights(h.physicallyCorrectLights),Z.isArrayCamera){const Y=Z.cameras;for(let me=0,Xe=Y.length;me<Xe;me++){const Qe=Y[me];Yt(f,P,Qe,Qe.viewport)}}else Yt(f,P,Z);S!==null&&(Te.updateMultisampleRenderTarget(S),Te.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(h,P,Z),k.resetDefaultState(),M=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function qt(P,Z,de,Y){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)de=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||J.intersectsSprite(P)){Y&&re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(R);const Qe=xt.update(P),tt=P.material;tt.visible&&f.push(P,Qe,tt,de,re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==$e.render.frame&&(P.skeleton.update(),P.skeleton.frame=$e.render.frame),!P.frustumCulled||J.intersectsObject(P))){Y&&re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(R);const Qe=xt.update(P),tt=P.material;if(Array.isArray(tt)){const it=Qe.groups;for(let pt=0,ft=it.length;pt<ft;pt++){const dt=it[pt],Bt=tt[dt.materialIndex];Bt&&Bt.visible&&f.push(P,Qe,Bt,de,re.z,dt)}}else tt.visible&&f.push(P,Qe,tt,de,re.z,null)}}const Xe=P.children;for(let Qe=0,tt=Xe.length;Qe<tt;Qe++)qt(Xe[Qe],Z,de,Y)}function Yt(P,Z,de,Y){const me=P.opaque,Xe=P.transmissive,Qe=P.transparent;d.setupLightsView(de),Xe.length>0&&oi(me,Z,de),Y&&Me.viewport(C.copy(Y)),me.length>0&&ut(me,Z,de),Xe.length>0&&ut(Xe,Z,de),Qe.length>0&&ut(Qe,Z,de),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function oi(P,Z,de){const Y=Pe.isWebGL2;ne===null&&(ne=new ii(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?ms:Qi,minFilter:Ji,samples:Y&&s===!0?4:0})),h.getDrawingBufferSize(q),Y?ne.setSize(q.x,q.y):ne.setSize(ha(q.x),ha(q.y));const me=h.getRenderTarget();h.setRenderTarget(ne),h.clear();const Xe=h.toneMapping;h.toneMapping=ni,ut(P,Z,de),h.toneMapping=Xe,Te.updateMultisampleRenderTarget(ne),Te.updateRenderTargetMipmap(ne),h.setRenderTarget(me)}function ut(P,Z,de){const Y=Z.isScene===!0?Z.overrideMaterial:null;for(let me=0,Xe=P.length;me<Xe;me++){const Qe=P[me],tt=Qe.object,it=Qe.geometry,pt=Y===null?Qe.material:Y,ft=Qe.group;tt.layers.test(de.layers)&&Bn(tt,Z,de,it,pt,ft)}}function Bn(P,Z,de,Y,me,Xe){P.onBeforeRender(h,Z,de,Y,me,Xe),P.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),me.onBeforeRender(h,Z,de,Y,P,Xe),me.transparent===!0&&me.side===Ns?(me.side=qn,me.needsUpdate=!0,h.renderBufferDirect(de,Z,Y,me,P,Xe),me.side=Di,me.needsUpdate=!0,h.renderBufferDirect(de,Z,Y,me,P,Xe),me.side=Ns):h.renderBufferDirect(de,Z,Y,me,P,Xe),P.onAfterRender(h,Z,de,Y,me,Xe)}function En(P,Z,de){Z.isScene!==!0&&(Z=Q);const Y=We.get(P),me=d.state.lights,Xe=d.state.shadowsArray,Qe=me.state.version,tt=lt.getParameters(P,me.state,Xe,Z,de),it=lt.getProgramCacheKey(tt);let pt=Y.programs;Y.environment=P.isMeshStandardMaterial?Z.environment:null,Y.fog=Z.fog,Y.envMap=(P.isMeshStandardMaterial?pe:Dt).get(P.envMap||Y.environment),pt===void 0&&(P.addEventListener("dispose",ct),pt=new Map,Y.programs=pt);let ft=pt.get(it);if(ft!==void 0){if(Y.currentProgram===ft&&Y.lightsStateVersion===Qe)return Cs(P,tt),ft}else tt.uniforms=lt.getUniforms(P),P.onBuild(de,tt,h),P.onBeforeCompile(tt,h),ft=lt.acquireProgram(tt,it),pt.set(it,ft),Y.uniforms=tt.uniforms;const dt=Y.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(dt.clippingPlanes=L.uniform),Cs(P,tt),Y.needsLights=Fa(P),Y.lightsStateVersion=Qe,Y.needsLights&&(dt.ambientLightColor.value=me.state.ambient,dt.lightProbe.value=me.state.probe,dt.directionalLights.value=me.state.directional,dt.directionalLightShadows.value=me.state.directionalShadow,dt.spotLights.value=me.state.spot,dt.spotLightShadows.value=me.state.spotShadow,dt.rectAreaLights.value=me.state.rectArea,dt.ltc_1.value=me.state.rectAreaLTC1,dt.ltc_2.value=me.state.rectAreaLTC2,dt.pointLights.value=me.state.point,dt.pointLightShadows.value=me.state.pointShadow,dt.hemisphereLights.value=me.state.hemi,dt.directionalShadowMap.value=me.state.directionalShadowMap,dt.directionalShadowMatrix.value=me.state.directionalShadowMatrix,dt.spotShadowMap.value=me.state.spotShadowMap,dt.spotLightMatrix.value=me.state.spotLightMatrix,dt.spotLightMap.value=me.state.spotLightMap,dt.pointShadowMap.value=me.state.pointShadowMap,dt.pointShadowMatrix.value=me.state.pointShadowMatrix);const Bt=ft.getUniforms(),gn=oa.seqWithValue(Bt.seq,dt);return Y.currentProgram=ft,Y.uniformsList=gn,ft}function Cs(P,Z){const de=We.get(P);de.outputEncoding=Z.outputEncoding,de.instancing=Z.instancing,de.skinning=Z.skinning,de.morphTargets=Z.morphTargets,de.morphNormals=Z.morphNormals,de.morphColors=Z.morphColors,de.morphTargetsCount=Z.morphTargetsCount,de.numClippingPlanes=Z.numClippingPlanes,de.numIntersection=Z.numClipIntersection,de.vertexAlphas=Z.vertexAlphas,de.vertexTangents=Z.vertexTangents,de.toneMapping=Z.toneMapping}function ka(P,Z,de,Y,me){Z.isScene!==!0&&(Z=Q),Te.resetTextureUnits();const Xe=Z.fog,Qe=Y.isMeshStandardMaterial?Z.environment:null,tt=S===null?h.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Ri,it=(Y.isMeshStandardMaterial?pe:Dt).get(Y.envMap||Qe),pt=Y.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ft=!!Y.normalMap&&!!de.attributes.tangent,dt=!!de.morphAttributes.position,Bt=!!de.morphAttributes.normal,gn=!!de.morphAttributes.color,Ut=Y.toneMapped?h.toneMapping:ni,Tn=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Nt=Tn!==void 0?Tn.length:0,at=We.get(Y),Zr=d.state.lights;if(X===!0&&(se===!0||P!==w)){const dn=P===w&&Y.id===M;L.setState(Y,P,dn)}let Vt=!1;Y.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Zr.state.version||at.outputEncoding!==tt||me.isInstancedMesh&&at.instancing===!1||!me.isInstancedMesh&&at.instancing===!0||me.isSkinnedMesh&&at.skinning===!1||!me.isSkinnedMesh&&at.skinning===!0||at.envMap!==it||Y.fog===!0&&at.fog!==Xe||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==L.numPlanes||at.numIntersection!==L.numIntersection)||at.vertexAlphas!==pt||at.vertexTangents!==ft||at.morphTargets!==dt||at.morphNormals!==Bt||at.morphColors!==gn||at.toneMapping!==Ut||Pe.isWebGL2===!0&&at.morphTargetsCount!==Nt)&&(Vt=!0):(Vt=!0,at.__version=Y.version);let li=at.currentProgram;Vt===!0&&(li=En(Y,Z,me));let Is=!1,Ui=!1,or=!1;const tn=li.getUniforms(),Cn=at.uniforms;if(Me.useProgram(li.program)&&(Is=!0,Ui=!0,or=!0),Y.id!==M&&(M=Y.id,Ui=!0),Is||w!==P){if(tn.setValue(F,"projectionMatrix",P.projectionMatrix),Pe.logarithmicDepthBuffer&&tn.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),w!==P&&(w=P,Ui=!0,or=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const dn=tn.map.cameraPosition;dn!==void 0&&dn.setValue(F,re.setFromMatrixPosition(P.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&tn.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||me.isSkinnedMesh)&&tn.setValue(F,"viewMatrix",P.matrixWorldInverse)}if(me.isSkinnedMesh){tn.setOptional(F,me,"bindMatrix"),tn.setOptional(F,me,"bindMatrixInverse");const dn=me.skeleton;dn&&(Pe.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),tn.setValue(F,"boneTexture",dn.boneTexture,Te),tn.setValue(F,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jr=de.morphAttributes;if((Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0&&Pe.isWebGL2===!0)&&xe.update(me,de,Y,li),(Ui||at.receiveShadow!==me.receiveShadow)&&(at.receiveShadow=me.receiveShadow,tn.setValue(F,"receiveShadow",me.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Cn.envMap.value=it,Cn.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),Ui&&(tn.setValue(F,"toneMappingExposure",h.toneMappingExposure),at.needsLights&&Na(Cn,or),Xe&&Y.fog===!0&&Gt.refreshFogUniforms(Cn,Xe),Gt.refreshMaterialUniforms(Cn,Y,j,I,ne),oa.upload(F,at.uniformsList,Cn,Te)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(oa.upload(F,at.uniformsList,Cn,Te),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&tn.setValue(F,"center",me.center),tn.setValue(F,"modelViewMatrix",me.modelViewMatrix),tn.setValue(F,"normalMatrix",me.normalMatrix),tn.setValue(F,"modelMatrix",me.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const dn=Y.uniformsGroups;for(let Qr=0,Ls=dn.length;Qr<Ls;Qr++)if(Pe.isWebGL2){const Ds=dn[Qr];le.update(Ds,li),le.bind(Ds,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Na(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Fa(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,Z,de){We.get(P.texture).__webglTexture=Z,We.get(P.depthTexture).__webglTexture=de;const Y=We.get(P);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=de===void 0,Y.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Z){const de=We.get(P);de.__webglFramebuffer=Z,de.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,de=0){S=P,_=Z,x=de;let Y=!0,me=null,Xe=!1,Qe=!1;if(P){const it=We.get(P);it.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(36160,null),Y=!1):it.__webglFramebuffer===void 0?Te.setupRenderTarget(P):it.__hasExternalTextures&&Te.rebindTextures(P,We.get(P.texture).__webglTexture,We.get(P.depthTexture).__webglTexture);const pt=P.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Qe=!0);const ft=We.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(me=ft[Z],Xe=!0):Pe.isWebGL2&&P.samples>0&&Te.useMultisampledRTT(P)===!1?me=We.get(P).__webglMultisampledFramebuffer:me=ft,C.copy(P.viewport),G.copy(P.scissor),v=P.scissorTest}else C.copy(U).multiplyScalar(j).floor(),G.copy(O).multiplyScalar(j).floor(),v=B;if(Me.bindFramebuffer(36160,me)&&Pe.drawBuffers&&Y&&Me.drawBuffers(P,me),Me.viewport(C),Me.scissor(G),Me.setScissorTest(v),Xe){const it=We.get(P.texture);F.framebufferTexture2D(36160,36064,34069+Z,it.__webglTexture,de)}else if(Qe){const it=We.get(P.texture),pt=Z||0;F.framebufferTextureLayer(36160,36064,it.__webglTexture,de||0,pt)}M=-1},this.readRenderTargetPixels=function(P,Z,de,Y,me,Xe,Qe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=We.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Qe!==void 0&&(tt=tt[Qe]),tt){Me.bindFramebuffer(36160,tt);try{const it=P.texture,pt=it.format,ft=it.type;if(pt!==Wn&&z.convert(pt)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const dt=ft===ms&&(be.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&be.has("EXT_color_buffer_float"));if(ft!==Qi&&z.convert(ft)!==F.getParameter(35738)&&!(ft===Ci&&(Pe.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-Y&&de>=0&&de<=P.height-me&&F.readPixels(Z,de,Y,me,z.convert(pt),z.convert(ft),Xe)}finally{const it=S!==null?We.get(S).__webglFramebuffer:null;Me.bindFramebuffer(36160,it)}}},this.copyFramebufferToTexture=function(P,Z,de=0){const Y=Math.pow(2,-de),me=Math.floor(Z.image.width*Y),Xe=Math.floor(Z.image.height*Y);Te.setTexture2D(Z,0),F.copyTexSubImage2D(3553,de,0,0,P.x,P.y,me,Xe),Me.unbindTexture()},this.copyTextureToTexture=function(P,Z,de,Y=0){const me=Z.image.width,Xe=Z.image.height,Qe=z.convert(de.format),tt=z.convert(de.type);Te.setTexture2D(de,0),F.pixelStorei(37440,de.flipY),F.pixelStorei(37441,de.premultiplyAlpha),F.pixelStorei(3317,de.unpackAlignment),Z.isDataTexture?F.texSubImage2D(3553,Y,P.x,P.y,me,Xe,Qe,tt,Z.image.data):Z.isCompressedTexture?F.compressedTexSubImage2D(3553,Y,P.x,P.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Qe,Z.mipmaps[0].data):F.texSubImage2D(3553,Y,P.x,P.y,Qe,tt,Z.image),Y===0&&de.generateMipmaps&&F.generateMipmap(3553),Me.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,de,Y,me=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Xe=P.max.x-P.min.x+1,Qe=P.max.y-P.min.y+1,tt=P.max.z-P.min.z+1,it=z.convert(Y.format),pt=z.convert(Y.type);let ft;if(Y.isData3DTexture)Te.setTexture3D(Y,0),ft=32879;else if(Y.isDataArrayTexture)Te.setTexture2DArray(Y,0),ft=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,Y.flipY),F.pixelStorei(37441,Y.premultiplyAlpha),F.pixelStorei(3317,Y.unpackAlignment);const dt=F.getParameter(3314),Bt=F.getParameter(32878),gn=F.getParameter(3316),Ut=F.getParameter(3315),Tn=F.getParameter(32877),Nt=de.isCompressedTexture?de.mipmaps[0]:de.image;F.pixelStorei(3314,Nt.width),F.pixelStorei(32878,Nt.height),F.pixelStorei(3316,P.min.x),F.pixelStorei(3315,P.min.y),F.pixelStorei(32877,P.min.z),de.isDataTexture||de.isData3DTexture?F.texSubImage3D(ft,me,Z.x,Z.y,Z.z,Xe,Qe,tt,it,pt,Nt.data):de.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ft,me,Z.x,Z.y,Z.z,Xe,Qe,tt,it,Nt.data)):F.texSubImage3D(ft,me,Z.x,Z.y,Z.z,Xe,Qe,tt,it,pt,Nt),F.pixelStorei(3314,dt),F.pixelStorei(32878,Bt),F.pixelStorei(3316,gn),F.pixelStorei(3315,Ut),F.pixelStorei(32877,Tn),me===0&&Y.generateMipmaps&&F.generateMipmap(ft),Me.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Te.setTextureCube(P,0):P.isData3DTexture?Te.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Te.setTexture2DArray(P,0):Te.setTexture2D(P,0),Me.unbindTexture()},this.resetState=function(){_=0,x=0,S=null,Me.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Z_ extends ef{}Z_.prototype.isWebGL1Renderer=!0;class tf extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const yc=new H,xc=new Lt,Sc=new Lt,J_=new H,Mc=new nt;class Q_ extends mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new nt,this.bindMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;xc.fromBufferAttribute(i.attributes.skinIndex,e),Sc.fromBufferAttribute(i.attributes.skinWeight,e),yc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Sc.getComponent(s);if(a!==0){const o=xc.getComponent(s);Mc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(J_.copy(yc).applyMatrix4(Mc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nf extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rf extends Sn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=sn,u=sn,f,d){super(null,a,o,l,c,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wc=new nt,$_=new nt;class jo{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:$_;wc.multiplyMatrices(o,t[s]),wc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ou(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rf(t,e,e,Wn,Ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new nf),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class pa extends ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ac=new H,Ec=new H,Tc=new nt,vo=new Go,ea=new Sa;class sf extends Ft{constructor(e=new kn,t=new pa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ac.fromBufferAttribute(t,i-1),Ec.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ac.distanceTo(Ec);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=s,e.ray.intersectsSphere(ea)===!1)return;Tc.copy(i).invert(),vo.copy(e.ray).applyMatrix4(Tc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new H,u=new H,f=new H,d=new H,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let S=_,M=x-1;S<M;S+=m){const w=g.getX(S),C=g.getX(S+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,C),vo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let S=_,M=x-1;S<M;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),vo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Cc=new H,Ic=new H;class af extends sf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Cc.fromBufferAttribute(t,i),Ic.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cc.distanceTo(Ic);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qo extends kn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],d=[],m=[];let g=0;const h=[],p=n/2;let _=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(m,2));function x(){const M=new H,w=new H;let C=0;const G=(t-e)/n;for(let v=0;v<=s;v++){const D=[],I=v/s,j=I*(t-e)+e;for(let K=0;K<=i;K++){const V=K/i,U=V*l+o,O=Math.sin(U),B=Math.cos(U);w.x=j*O,w.y=-I*n+p,w.z=j*B,f.push(w.x,w.y,w.z),M.set(O,G,B).normalize(),d.push(M.x,M.y,M.z),m.push(V,1-I),D.push(g++)}h.push(D)}for(let v=0;v<i;v++)for(let D=0;D<s;D++){const I=h[D][v],j=h[D+1][v],K=h[D+1][v+1],V=h[D][v+1];u.push(I,j,V),u.push(j,K,V),C+=6}c.addGroup(_,C,0),_+=C}function S(M){const w=g,C=new Je,G=new H;let v=0;const D=M===!0?e:t,I=M===!0?1:-1;for(let K=1;K<=i;K++)f.push(0,p*I,0),d.push(0,I,0),m.push(.5,.5),g++;const j=g;for(let K=0;K<=i;K++){const U=K/i*l+o,O=Math.cos(U),B=Math.sin(U);G.x=D*B,G.y=p*I,G.z=D*O,f.push(G.x,G.y,G.z),d.push(0,I,0),C.x=O*.5+.5,C.y=B*.5*I+.5,m.push(C.x,C.y),g++}for(let K=0;K<i;K++){const V=w+K,U=j+K;M===!0?u.push(U,U+1,V):u.push(U+1,U,V),v+=3}c.addGroup(_,v,M===!0?1:2),_+=v}}static fromJSON(e){return new qo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lc extends ar{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new et(16777215),this.specular=new et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xo extends ar{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ai(r,e,t){return of(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function ta(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function of(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function e0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Dc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function lf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Ea{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class t0 extends Ea{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ol:s=e,o=2*t-n;break;case Ul:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ol:a=e,l=2*n-t;break;case Ul:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),h=g*g,p=h*g,_=-d*p+2*d*h-d*g,x=(1+d)*p+(-1.5-2*d)*h+(-.5+d)*g+1,S=(-1-m)*p+(1.5+m)*h+.5*g,M=m*p-m*h;for(let w=0;w!==o;++w)s[w]=_*a[u+w]+x*a[c+w]+S*a[l+w]+M*a[f+w];return s}}class n0 extends Ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*f+a[l+d]*u;return s}}class i0 extends Ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ai{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new i0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new n0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new t0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fa:t=this.InterpolantFactoryMethodDiscrete;break;case da:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return ja}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Ai(n,s,a),this.values=Ai(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&of(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ai(this.times),t=Ai(this.values),n=this.getValueSize(),i=this.getInterpolation()===ja,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){const h=t[f+g];if(h!==t[d+g]||h!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Ai(e,0,a),this.values=Ai(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ai(this.times,0),t=Ai(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=da;class jr extends ai{}jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=fa;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class cf extends ai{}cf.prototype.ValueTypeName="color";class ma extends ai{}ma.prototype.ValueTypeName="number";class r0 extends Ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)ri.slerpFlat(s,0,a,c-o,a,c,l);return s}}class qr extends ai{InterpolantFactoryMethodLinear(e){return new r0(this.times,this.values,this.getValueSize(),e)}}qr.prototype.ValueTypeName="quaternion";qr.prototype.DefaultInterpolation=da;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends ai{}Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=fa;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends ai{}Ur.prototype.ValueTypeName="vector";class Rc{constructor(e,t=-1,n,i=Fd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(a0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(ai.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=e0(l);l=Dc(l,1,u),c=Dc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ma(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=i[f];d||(i[f]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,m,g,h){if(m.length!==0){const p=[],_=[];lf(m,p,_,g),p.length!==0&&h.push(new f(d,p,_))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let h=0;h<d[g].morphTargets.length;h++)m[d[g].morphTargets[h]]=-1;for(const h in m){const p=[],_=[];for(let x=0;x!==d[g].morphTargets.length;++x){const S=d[g];p.push(S.time),_.push(S.morphTarget===h?1:0)}i.push(new ma(".morphTargetInfluence["+h+"]",p,_))}l=m.length*a}else{const m=".bones["+t[f].name+"]";n(Ur,m+".position",d,"pos",i),n(qr,m+".quaternion",d,"rot",i),n(Ur,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function s0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ma;case"vector":case"vector2":case"vector3":case"vector4":return Ur;case"color":return cf;case"quaternion":return qr;case"bool":case"boolean":return jr;case"string":return Xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function a0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=s0(r.type);if(r.times===void 0){const t=[],n=[];lf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ga={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class o0{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const uf=new o0;class Yr{constructor(e){this.manager=e!==void 0?e:uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const mi={};class l0 extends Error{constructor(e,t){super(e),this.response=t}}class Yo extends Yr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ga.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:i});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=mi[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let h=0;const p=new ReadableStream({start(_){x();function x(){f.read().then(({done:S,value:M})=>{if(S)_.close();else{h+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:h,total:m});for(let C=0,G=u.length;C<G;C++){const v=u[C];v.onProgress&&v.onProgress(w)}_.enqueue(M),x()}})}}});return new Response(p)}else throw new l0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ga.add(e,c);const u=mi[e];delete mi[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let f=0,d=u.length;f<d;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class c0 extends Yr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ga.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=vs("img");function l(){u(),ga.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class u0 extends Yr{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new rf,o=new Yo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:xn,a.wrapT=c.wrapT!==void 0?c.wrapT:xn,a.magFilter=c.magFilter!==void 0?c.magFilter:bn,a.minFilter=c.minFilter!==void 0?c.minFilter:bn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ji),c.mipmapCount===1&&(a.minFilter=bn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class Po extends Yr{constructor(e){super(e)}load(e,t,n,i){const s=new Sn,a=new c0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ta extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const bo=new nt,Pc=new H,kc=new H;class Ko{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class f0 extends Ko{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_s*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ff extends Ta{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DefaultUp),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new f0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nc=new nt,os=new H,yo=new H;class d0 extends Ko{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),yo.copy(n.position),yo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yo),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),Nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc)}}class hs extends Ta{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new d0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class h0 extends Ko{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p0 extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DefaultUp),this.updateMatrix(),this.target=new Ft,this.shadow=new h0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class df extends Ta{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hf{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class pf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fc(){return(typeof performance>"u"?Date:performance).now()}class m0{constructor(e,t,n=0,i=1/0){this.ray=new Go(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ko(e,this,n,t),n.sort(Oc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ko(e[i],this,n,t);return n.sort(Oc),n}}function Oc(r,e){return r.distance-e.distance}function ko(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)ko(i[s],e,t,!0)}}class Uc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class g0 extends af{constructor(e=10,t=10,n=4473924,i=8947848){n=new et(n),i=new et(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,m=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const h=d===s?n:i;h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3}const u=new kn;u.setAttribute("position",new Pt(l,3)),u.setAttribute("color",new Pt(c,3));const f=new pa({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class _0 extends wa{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);const v0={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ca{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const b0=new Es(-1,1,1,-1,0,1),Zo=new kn;Zo.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3));Zo.setAttribute("uv",new Pt([0,2,0,0,2,0],2));class y0{constructor(e){this._mesh=new mn(Zo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,b0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class x0 extends Ca{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qu.clone(e.uniforms),this.material=new Zn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new y0(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zc extends Ca{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class S0 extends Ca{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class M0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Je);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new x0(v0),this.clock=new pf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zc!==void 0&&(a instanceof zc?n=!0:a instanceof S0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class mf extends Ca{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const w0=(r,e,t)=>{r.renderer=new ef({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new M0(r.renderer),r.composer.addPass(new mf(r.scene,Oo(r.camera)))},Bc=(r,e,t)=>{r.renderer&&(e?r.renderer.outputEncoding=Ri:r.renderer.outputEncoding=Et,t?r.renderer.toneMapping=ni:r.renderer.toneMapping=ku)},Gc=(r,e,t)=>{var n,i,s,a,o,l,c,u;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(a=(s=r.renderer).setPixelRatio)==null||a.call(s,t),(l=(o=r.composer).setSize)==null||l.call(o,e.width,e.height),(u=(c=r.composer).setPixelRatio)==null||u.call(c,t))},Vc=(r,e,t)=>{r.renderer&&(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},jn=r=>r.userData,A0=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},gf=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),E0=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,T0=(r,e,t)=>{let n;const i=r.camera.subscribe(c=>n=c);Tt(i);let s;const a=r.pointer.subscribe(c=>s=c);Tt(a);let o;const l=c=>{var d,m;c.preventDefault();const u=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,A0(r,c);const f=C0(e,s,n);if(u==="pointerdown"&&(o=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!I0(f,o)){o=null;return}o=null}f&&((m=(d=jn(f.object)).eventDispatcher)==null||m.call(d,u,{...f,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function C0(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=gf(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function I0(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const L0=(r,e)=>{let t;const n=r.pointerOverCanvas.subscribe(c=>t=c);Tt(n);let i;const s=r.camera.subscribe(c=>i=c);Tt(s);let a;const o=r.pointer.subscribe(c=>a=c);return Tt(o),{raycast:()=>{var f,d,m,g,h,p,_,x;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?gf(e,a,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&E0(e.lastIntersection,u)&&((p=(h=jn(e.lastIntersection.object)).eventDispatcher)==null||p.call(h,"pointerleave",e.lastIntersection),(x=(_=jn(u.object)).eventDispatcher)==null||x.call(_,"pointerenter",u)):(g=(m=jn(u.object)).eventDispatcher)==null||g.call(m,"pointerenter",u):e.lastIntersection&&((d=(f=jn(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},Ia=typeof window<"u",D0=r=>{if(!Ia)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),Tt(()=>{e&&cancelAnimationFrame(e)})},R0=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>(i.order??0)>(s.order??0)?1:-1).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},P0=r=>{r.debugFrameloop&&(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by ↴":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},k0=(r,e,t,n)=>{let i=Oo(r.camera);const s=r.camera.subscribe(o=>i=o);Tt(s);const{raycast:a}=L0(r,e);D0(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!i||!r.composer||!r.renderer||(R0(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),P0(t),t.frameInvalidated=!1,t.advance=!1))})},N0=()=>{const r=new on(75,0,.1,1e3);return jn(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},F0=r=>{const e=r.size.subscribe(t=>{jn(Oo(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});Tt(e)},O0=(r,e,t,n,i,s,a)=>{const o={audioListeners:new Map,addAudioListener:(_,x)=>{if(x=x??"default",o.audioListeners.has(x)){console.warn(`An AudioListener with the id "${x}" has already been added, aborting.`);return}o.audioListeners.set(x,_)},removeAudioListener:_=>{if(_=_??"default",!o.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}o.audioListeners.delete(_)},getAudioListener:_=>{if(_=_??"default",!o.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}return o.audioListeners.get(_)}},l={debugFrameloop:s,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Wf([n,i],([_,x])=>_||x),pointer:an(new Je),pointerOverCanvas:an(!1),clock:new pf,camera:an(N0()),scene:new tf,renderer:void 0,composer:void 0,invalidate:_=>{l.frameInvalidated=!0,l.debugFrameloop&&_&&(l.invalidations[_]=l.invalidations[_]?l.invalidations[_]+1:1)},advance:()=>{l.advance=!0}},u={flat:an(e),linear:an(r),dpr:an(t),setCamera:_=>{c.camera.set(_),c.composer&&(c.composer.passes.forEach(x=>{x instanceof mf&&(x.camera=_)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new m0,lastIntersection:null,addRaycastableObject:_=>{u.raycastableObjects.add(_)},removeRaycastableObject:_=>{u.raycastableObjects.delete(_)},addInteractiveObject:_=>{u.interactiveObjects.add(_)},removeInteractiveObject:_=>{u.interactiveObjects.delete(_)},addPass:_=>{c.composer&&(c.composer.addPass(_),c.invalidate("Canvas: adding pass"))},removePass:_=>{c.composer&&(c.composer.removePass(_),c.invalidate("Canvas: removing pass"))}},f={dispose:async(_=!1)=>{await ps(),!(!f.shouldDispose&&!_)&&(f.disposableObjects.forEach((x,S)=>{var M;(x===0||_)&&((M=S==null?void 0:S.dispose)==null||M.call(S),f.disposableObjects.delete(S))}),f.shouldDispose=!1)},collectDisposableObjects:(_,x)=>{const S=x??[];return _&&(_!=null&&_.dispose&&typeof _.dispose=="function"&&_.type!=="Scene"&&S.push(_),Object.entries(_).forEach(([M,w])=>{if(M==="parent"||M==="children"||typeof w!="object")return;const C=w;C!=null&&C.dispose&&f.collectDisposableObjects(C,S)})),S},addDisposableObjects:_=>{_.forEach(x=>{const S=f.disposableObjects.get(x);S?f.disposableObjects.set(x,S+1):f.disposableObjects.set(x,1)})},removeDisposableObjects:_=>{_.length!==0&&(_.forEach(x=>{const S=f.disposableObjects.get(x);S&&S>0&&f.disposableObjects.set(x,S-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return kt("threlte",c),kt("threlte-root",u),kt("threlte-render-context",l),kt("threlte-audio-context",o),kt("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:o,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>f}};function La(r,e){const t=an(r);let n=r;const i=t.subscribe(o=>n=o);return Tt(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Mn=()=>Wt("threlte");function U0(r){let e;const t=r[8].default,n=ln(t,r,r[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&cn(n,t,i,i[7],e?fn(t,i[7],s,null):un(i[7]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}const z0=()=>({onChildMount:Wt("threlte-hierarchical-object-on-mount"),onChildDestroy:Wt("threlte-hierarchical-object-on-destroy")}),_f=()=>Wt("threlte-hierarchical-parent-context");function B0(r,e,t){var _;let n,{$$slots:i={},$$scope:s}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=x=>{o.push(x),t(1,o),l==null||l(x)};let{onChildDestroy:u=void 0}=e;const f=x=>{const S=o.findIndex(M=>M.uuid===x.uuid);S!==-1&&o.splice(S,1),t(1,o),u==null||u(x)},{invalidate:d}=Mn(),m=_f();Rt(r,m,x=>t(6,n=x));let{parent:g=n}=e;const h=z0();a&&((_=h.onChildMount)==null||_.call(h,a),d("HierarchicalObject: object added"));const p=La(a,(x,S)=>{var M,w;S&&((M=h.onChildDestroy)==null||M.call(h,S),d("HierarchicalObject: object added")),x&&((w=h.onChildMount)==null||w.call(h,x),d("HierarchicalObject: object removed"))});return Tt(()=>{var x;a&&((x=h.onChildDestroy)==null||x.call(h,a),d("HierarchicalObject: object removed"))}),kt("threlte-hierarchical-object-on-mount",c),kt("threlte-hierarchical-object-on-destroy",f),kt("threlte-hierarchical-parent-context",p),r.$$set=x=>{"object"in x&&t(3,a=x.object),"children"in x&&t(1,o=x.children),"onChildMount"in x&&t(4,l=x.onChildMount),"onChildDestroy"in x&&t(5,u=x.onChildDestroy),"parent"in x&&t(2,g=x.parent),"$$scope"in x&&t(7,s=x.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,g=n),r.$$.dirty&8&&p.set(a)},[m,o,g,a,l,u,n,s,i]}class G0 extends gt{constructor(e){super(),_t(this,e,B0,U0,ht,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function V0(r){let e;const t=r[1].default,n=ln(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&cn(n,t,i,i[4],e?fn(t,i[4],s,null):un(i[4]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function H0(r){let e,t;return e=new G0({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[V0]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function W0(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const a=l=>s.add(l),o=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,a,o,i]}class Jo extends gt{constructor(e){super(),_t(this,e,W0,H0,ht,{object:0})}}const j0=()=>{const r=an({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(a=>e=a);Tt(t);let n;const i=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&r.set({width:o,height:l})},s=a=>{n=a,i(),window.addEventListener("resize",i)};return Ia?(Tt(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function Hc(r){let e,t;return e=new Jo({props:{object:r[0].scene,$$slots:{default:[q0]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function q0(r){let e;const t=r[29].default,n=ln(t,r,r[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&cn(n,t,i,i[33],e?fn(t,i[33],s,null):un(i[33]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function X0(r){let e,t,n,i,s=r[2]&&Hc(r);return{c(){e=Pi("canvas"),s&&s.c(),this.h()},l(a){e=ki(a,"CANVAS",{class:!0});var o=Ni(e);s&&s.l(o),o.forEach(Ee),this.h()},h(){_a(e,"class","svelte-o3oskp")},m(a,o){Fe(a,e,o),s&&s.m(e,null),r[30](e),t=!0,n||(i=[yi(r[3].call(null,e)),Hn(e,"click",r[9]),Hn(e,"contextmenu",r[10]),Hn(e,"pointerup",r[13]),Hn(e,"pointerdown",r[11]),Hn(e,"pointermove",r[12]),Hn(e,"pointerenter",r[31]),Hn(e,"pointerleave",r[32])],n=!0)},p(a,o){a[2]?s?(s.p(a,o),o[0]&4&&ie(s,1)):(s=Hc(a),s.c(),ie(s,1),s.m(e,null)):s&&(Jt(),ce(s,1,1,()=>{s=null}),Qt())},i(a){t||(ie(s),t=!0)},o(a){ce(s),t=!1},d(a){a&&Ee(e),s&&s.d(),r[30](null),n=!1,ys(i)}}}const Wc=new Set;function Y0(r,e,t){let n,i,s,a,{$$slots:o={},$$scope:l}=e,{dpr:c=Ia?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:d="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:g=!0}=e,{shadowMapType:h=Du}=e,{size:p=void 0}=e,{rendererParameters:_=void 0}=e,x,S=!1;const M=an(p),{parentSize:w,parentSizeAction:C}=j0(),G=O0(f,u,c,M,w,m,d),{getCtx:v,renderCtx:D,disposalCtx:I}=G,{ctx:j,rootCtx:K,audioCtx:V}=G;F0(j),Wc.add(j.invalidate),Tt(()=>{Wc.delete(j.invalidate)});const{size:U,scene:O}=j;Rt(r,U,oe=>t(26,i=oe));const{flat:B,linear:J,dpr:X}=K;Rt(r,B,oe=>t(27,s=oe)),Rt(r,J,oe=>t(28,a=oe)),Rt(r,X,oe=>t(25,n=oe)),kt("threlte-parent",an(O)),Br(()=>{x&&(w0(j,x,_),Bc(j,a,s),Gc(j,i,n),Vc(j,g,h),t(2,S=!0))}),k0(j,K,D,I);const{onClick:se,onContextMenu:ne,onPointerDown:R,onPointerMove:q,onPointerUp:re}=T0(j,K,D);Tt(()=>{I.dispose(!0)});function Q(oe){Rn[oe?"unshift":"push"](()=>{x=oe,t(1,x)})}const te=()=>v().pointerOverCanvas.set(!0),F=()=>v().pointerOverCanvas.set(!1);return r.$$set=oe=>{"dpr"in oe&&t(14,c=oe.dpr),"flat"in oe&&t(15,u=oe.flat),"linear"in oe&&t(16,f=oe.linear),"frameloop"in oe&&t(17,d=oe.frameloop),"debugFrameloop"in oe&&t(18,m=oe.debugFrameloop),"shadows"in oe&&t(19,g=oe.shadows),"shadowMapType"in oe&&t(20,h=oe.shadowMapType),"size"in oe&&t(21,p=oe.size),"rendererParameters"in oe&&t(22,_=oe.rendererParameters),"$$scope"in oe&&t(33,l=oe.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&M.set(p),r.$$.dirty[0]&65536&&za(J,a=f,a),r.$$.dirty[0]&32768&&za(B,s=u,s),r.$$.dirty[0]&16384&&za(X,n=c,n),r.$$.dirty[0]&402653184&&Bc(v(),a,s),r.$$.dirty[0]&100663296&&Gc(v(),i,n),r.$$.dirty[0]&1572864&&Vc(v(),g,h)},[j,x,S,C,v,U,B,J,X,se,ne,R,q,re,c,u,f,d,m,g,h,p,_,K,V,n,i,s,a,o,Q,te,F,l]}class K0 extends gt{constructor(e){super(),_t(this,e,Y0,X0,ht,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Qo=()=>Wt("threlte-root"),Z0=()=>Wt("threlte-disposal-context");function J0(r){let e;const t=r[9].default,n=ln(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&cn(n,t,i,i[8],e?fn(t,i[8],s,null):un(i[8]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}const jc="threlte-disposable-object-context";function Q0(r,e,t){let n,i,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=Z0();let{object:u=void 0}=e,f=u,{dispose:d=void 0}=e;const m=Wt(jc);Rt(r,m,p=>t(7,i=p));const g=an(d??i??!0);Rt(r,g,p=>t(6,n=p)),kt(jc,g);let h=n?o(u):[];return l(h),Tt(()=>{c(h)}),r.$$set=p=>{"object"in p&&t(2,u=p.object),"dispose"in p&&t(3,d=p.dispose),"$$scope"in p&&t(8,a=p.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&g.set(d??i??!0),r.$$.dirty&116&&u!==f&&(c(h),t(5,h=n?o(u):[]),l(h),t(4,f=u))},[m,g,u,d,f,h,n,i,a,s]}class bs extends gt{constructor(e){super(),_t(this,e,Q0,J0,ht,{object:2,dispose:3})}}function $0(r,e,t){let n,i,{object:s}=e;const a=La(s);Rt(r,a,c=>t(4,i=c));const o=Wt("threlte-layers");Rt(r,o,c=>t(3,n=c));const{invalidate:l}=Mn();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&a.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[a,o,s,n,i]}class ev extends gt{constructor(e){super(),_t(this,e,$0,null,ht,{object:2})}}const Da=(r,e)=>{if(!Ia)return{start:()=>{},stop:()=>{},started:jf(!1)};const t=Wt("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=an(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},a=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&a(),Tt(()=>{s()}),{start:a,stop:s,started:{subscribe:i.subscribe}}},vf=()=>{const r=an(!1);return(async()=>{await ps(),r.set(!0)})(),r};function tv(r,e,t){let n,i,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new H,f=$i(),{invalidate:d}=Mn(),m=vf();Rt(r,m,S=>t(8,i=S));const g=async()=>{i||await ps(),f("transform")},h=async()=>{d("TransformableObject: transformed"),await g()};jn(s).onTransform=h;const{start:p,stop:_}=Da(async()=>{c&&!l&&c instanceof Ft&&(c.getWorldPosition(u),s.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),x=La(s);return Rt(r,x,S=>t(7,n=S)),r.$$set=S=>{"object"in S&&t(2,s=S.object),"position"in S&&t(3,a=S.position),"scale"in S&&t(4,o=S.scale),"rotation"in S&&t(5,l=S.rotation),"lookAt"in S&&t(6,c=S.lookAt)},r.$$.update=()=>{r.$$.dirty&4&&x.set(s),r.$$.dirty&232&&(a&&(n.position.set(a.x??0,a.y??0,a.z??0),h()),c&&!l&&(c instanceof Ft?p():(_(),n.lookAt(c.x??0,c.y??0,c.z??0),h())),c||_()),r.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set(o.x??1,o.y??1,o.z??1),h()),r.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),h())},[m,x,s,a,o,l,c,n]}class bf extends gt{constructor(e){super(),_t(this,e,tv,null,ht,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function nv(r,e,t){let n,i,s,{object:a}=e,{viewportAware:o=!1}=e;const l=$i(),{camera:c,invalidate:u}=Mn();Rt(r,c,C=>t(8,s=C));const f=new Ma,d=new nt,m=C=>C.type==="Mesh",g=new H,h=()=>s?(d.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),f.setFromProjectionMatrix(d),m(a)?f.intersectsObject(a):(a.getWorldPosition(g),f.containsPoint(g))):!0,p=vf();Rt(r,p,C=>t(7,i=C));let{inViewport:_=h()}=e;const x=async C=>{C?(i||await ps(),l("viewportenter",a)):(i||await ps(),l("viewportleave",a))},{start:S,stop:M,started:w}=Da(()=>{const C=h();_===void 0?(t(3,_=h()),x(_)):C!==_&&(x(C),t(3,_=C))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Rt(r,w,C=>t(6,n=C)),u("ViewportAwareObject"),r.$$set=C=>{"object"in C&&t(4,a=C.object),"viewportAware"in C&&t(5,o=C.viewportAware),"inViewport"in C&&t(3,_=C.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(o&&!n?S():!o&&n&&M())},[c,p,w,_,a,o,n]}class iv extends gt{constructor(e){super(),_t(this,e,nv,null,ht,{object:4,viewportAware:5,inViewport:3})}}function rv(r){let e;const t=r[14].default,n=ln(t,r,r[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&cn(n,t,i,i[18],e?fn(t,i[18],s,null):un(i[18]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function sv(r){let e,t;return e=new Jo({props:{object:r[1],$$slots:{default:[rv]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function av(r){let e,t,n,i,s,a,o,l,c;e=new ev({props:{object:r[1]}}),n=new bf({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new bs({props:{object:r[1],dispose:r[7],$$slots:{default:[sv]},$$scope:{ctx:r}}});function u(d){r[15](d)}let f={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(f.inViewport=r[0]),o=new iv({props:f}),Rn.push(()=>Gr(o,"inViewport",u)),o.$on("viewportenter",r[16]),o.$on("viewportleave",r[17]),{c(){Ie(e.$$.fragment),t=Mt(),Ie(n.$$.fragment),i=Mt(),Ie(s.$$.fragment),a=Mt(),Ie(o.$$.fragment)},l(d){Ne(e.$$.fragment,d),t=wt(d),Ne(n.$$.fragment,d),i=wt(d),Ne(s.$$.fragment,d),a=wt(d),Ne(o.$$.fragment,d)},m(d,m){Le(e,d,m),Fe(d,t,m),Le(n,d,m),Fe(d,i,m),Le(s,d,m),Fe(d,a,m),Le(o,d,m),c=!0},p(d,[m]){const g={};m&2&&(g.object=d[1]),e.$set(g);const h={};m&2&&(h.object=d[1]),m&4&&(h.position=d[2]),m&16&&(h.rotation=d[4]),m&8&&(h.scale=d[3]),m&32&&(h.lookAt=d[5]),n.$set(h);const p={};m&2&&(p.object=d[1]),m&128&&(p.dispose=d[7]),m&262146&&(p.$$scope={dirty:m,ctx:d}),s.$set(p);const _={};m&2&&(_.object=d[1]),m&64&&(_.viewportAware=d[6]),!l&&m&1&&(l=!0,_.inViewport=d[0],Vr(()=>l=!1)),o.$set(_)},i(d){c||(ie(e.$$.fragment,d),ie(n.$$.fragment,d),ie(s.$$.fragment,d),ie(o.$$.fragment,d),c=!0)},o(d){ce(e.$$.fragment,d),ce(n.$$.fragment,d),ce(s.$$.fragment,d),ce(o.$$.fragment,d),c=!1},d(d){De(e,d),d&&Ee(t),De(n,d),d&&Ee(i),De(s,d),d&&Ee(a),De(o,d)}}}function ov(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:h=void 0}=e,{visible:p=void 0}=e,{dispose:_=void 0}=e,{userData:x=void 0}=e;const{invalidate:S}=Mn(),M=()=>s;function w(v){f=v,t(0,f)}function C(v){Ct.call(this,r,v)}function G(v){Ct.call(this,r,v)}return r.$$set=v=>{"object"in v&&t(1,s=v.object),"position"in v&&t(2,a=v.position),"scale"in v&&t(3,o=v.scale),"rotation"in v&&t(4,l=v.rotation),"lookAt"in v&&t(5,c=v.lookAt),"viewportAware"in v&&t(6,u=v.viewportAware),"inViewport"in v&&t(0,f=v.inViewport),"castShadow"in v&&t(8,d=v.castShadow),"receiveShadow"in v&&t(9,m=v.receiveShadow),"frustumCulled"in v&&t(10,g=v.frustumCulled),"renderOrder"in v&&t(11,h=v.renderOrder),"visible"in v&&t(12,p=v.visible),"dispose"in v&&t(7,_=v.dispose),"userData"in v&&t(13,x=v.userData),"$$scope"in v&&t(18,i=v.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(p!==void 0&&(M().visible=p),d!==void 0&&(M().castShadow=d),m!==void 0&&(M().receiveShadow=m),g!==void 0&&(M().frustumCulled=g),h!==void 0&&(M().renderOrder=h),x!==void 0&&(M().userData={...M().userData,...x}),S("Object3DInstance: props changed"))},[f,s,a,o,l,c,u,_,d,m,g,h,p,x,n,w,C,G,i]}class $o extends gt{constructor(e){super(),_t(this,e,ov,av,ht,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function lv(r){let e;const t=r[17].default,n=ln(t,r,r[21],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&cn(n,t,i,i[21],e?fn(t,i[21],s,null):un(i[21]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function cv(r){let e,t,n;function i(a){r[18](a)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[lv]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new $o({props:s}),Rn.push(()=>Gr(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){Ie(e.$$.fragment)},l(a){Ne(e.$$.fragment,a)},m(a,o){Le(e,a,o),n=!0},p(a,[o]){const l={};o&2&&(l.object=a[1]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&4096&&(l.userData=a[12]),o&8192&&(l.dispose=a[13]),o&2097152&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],Vr(()=>t=!1)),e.$set(l)},i(a){n||(ie(e.$$.fragment,a),n=!0)},o(a){ce(e.$$.fragment,a),n=!1},d(a){De(e,a)}}}function uv(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:_=void 0}=e,{userData:x=void 0}=e,{dispose:S=void 0}=e,{useCamera:M=!1}=e;const w=La(a);Rt(r,w,I=>t(16,n=I));const{setCamera:C}=Qo();function G(I){d=I,t(0,d)}function v(I){Ct.call(this,r,I)}function D(I){Ct.call(this,r,I)}return r.$$set=I=>{"camera"in I&&t(1,a=I.camera),"position"in I&&t(2,o=I.position),"scale"in I&&t(3,l=I.scale),"rotation"in I&&t(4,c=I.rotation),"lookAt"in I&&t(5,u=I.lookAt),"viewportAware"in I&&t(6,f=I.viewportAware),"inViewport"in I&&t(0,d=I.inViewport),"castShadow"in I&&t(7,m=I.castShadow),"receiveShadow"in I&&t(8,g=I.receiveShadow),"frustumCulled"in I&&t(9,h=I.frustumCulled),"renderOrder"in I&&t(10,p=I.renderOrder),"visible"in I&&t(11,_=I.visible),"userData"in I&&t(12,x=I.userData),"dispose"in I&&t(13,S=I.dispose),"useCamera"in I&&t(15,M=I.useCamera),"$$scope"in I&&t(21,s=I.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&w.set(a),r.$$.dirty&98304&&M&&C(n)},[d,a,o,l,c,u,f,m,g,h,p,_,x,S,w,M,n,i,G,v,D,s]}class fv extends gt{constructor(e){super(),_t(this,e,uv,cv,ht,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}const qc=[],el=(r,e)=>{const t=qc.find(i=>i instanceof r);if(t)return t;const n=e();return qc.push(n),n},Xc={type:"change"},xo={type:"start"},Yc={type:"end"};let dv=class extends sr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:ur.ROTATE,TWO:ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",Ot),this._domElementKeyEvents=z},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xc),n.update(),s=i.NONE},this.update=function(){const z=new H,k=new ri().setFromUnitVectors(e.up,new H(0,1,0)),le=k.clone().invert(),fe=new H,_e=new ri,Oe=2*Math.PI;return function(){const st=n.object.position;z.copy(st).sub(n.target),z.applyQuaternion(k),o.setFromVector3(z),n.autoRotate&&s===i.NONE&&D(G()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ct=n.minAzimuthAngle,St=n.maxAzimuthAngle;return isFinite(ct)&&isFinite(St)&&(ct<-Math.PI?ct+=Oe:ct>Math.PI&&(ct-=Oe),St<-Math.PI?St+=Oe:St>Math.PI&&(St-=Oe),ct<=St?o.theta=Math.max(ct,Math.min(St,o.theta)):o.theta=o.theta>(ct+St)/2?Math.max(ct,o.theta):Math.min(St,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),z.setFromSpherical(o),z.applyQuaternion(le),st.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||fe.distanceToSquared(n.object.position)>a||8*(1-_e.dot(n.object.quaternion))>a?(n.dispatchEvent(Xc),fe.copy(n.object.position),_e.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ae),n.domElement.removeEventListener("pointerdown",Dt),n.domElement.removeEventListener("pointercancel",je),n.domElement.removeEventListener("wheel",Gt),n.domElement.removeEventListener("pointermove",pe),n.domElement.removeEventListener("pointerup",ee),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ot)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Uc,l=new Uc;let c=1;const u=new H;let f=!1;const d=new Je,m=new Je,g=new Je,h=new Je,p=new Je,_=new Je,x=new Je,S=new Je,M=new Je,w=[],C={};function G(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function D(z){l.theta-=z}function I(z){l.phi-=z}const j=function(){const z=new H;return function(le,fe){z.setFromMatrixColumn(fe,0),z.multiplyScalar(-le),u.add(z)}}(),K=function(){const z=new H;return function(le,fe){n.screenSpacePanning===!0?z.setFromMatrixColumn(fe,1):(z.setFromMatrixColumn(fe,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(le),u.add(z)}}(),V=function(){const z=new H;return function(le,fe){const _e=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;z.copy(Oe).sub(n.target);let ze=z.length();ze*=Math.tan(n.object.fov/2*Math.PI/180),j(2*le*ze/_e.clientHeight,n.object.matrix),K(2*fe*ze/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(le*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),K(fe*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(z){n.object.isPerspectiveCamera?c/=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*z)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(z){n.object.isPerspectiveCamera?c*=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/z)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(z){d.set(z.clientX,z.clientY)}function J(z){x.set(z.clientX,z.clientY)}function X(z){h.set(z.clientX,z.clientY)}function se(z){m.set(z.clientX,z.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const k=n.domElement;D(2*Math.PI*g.x/k.clientHeight),I(2*Math.PI*g.y/k.clientHeight),d.copy(m),n.update()}function ne(z){S.set(z.clientX,z.clientY),M.subVectors(S,x),M.y>0?U(v()):M.y<0&&O(v()),x.copy(S),n.update()}function R(z){p.set(z.clientX,z.clientY),_.subVectors(p,h).multiplyScalar(n.panSpeed),V(_.x,_.y),h.copy(p),n.update()}function q(z){z.deltaY<0?O(v()):z.deltaY>0&&U(v()),n.update()}function re(z){let k=!1;switch(z.code){case n.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),k=!0;break}k&&(z.preventDefault(),n.update())}function Q(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const z=.5*(w[0].pageX+w[1].pageX),k=.5*(w[0].pageY+w[1].pageY);d.set(z,k)}}function te(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const z=.5*(w[0].pageX+w[1].pageX),k=.5*(w[0].pageY+w[1].pageY);h.set(z,k)}}function F(){const z=w[0].pageX-w[1].pageX,k=w[0].pageY-w[1].pageY,le=Math.sqrt(z*z+k*k);x.set(0,le)}function oe(){n.enableZoom&&F(),n.enablePan&&te()}function be(){n.enableZoom&&F(),n.enableRotate&&Q()}function Pe(z){if(w.length==1)m.set(z.pageX,z.pageY);else{const le=Be(z),fe=.5*(z.pageX+le.x),_e=.5*(z.pageY+le.y);m.set(fe,_e)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const k=n.domElement;D(2*Math.PI*g.x/k.clientHeight),I(2*Math.PI*g.y/k.clientHeight),d.copy(m)}function Me(z){if(w.length===1)p.set(z.pageX,z.pageY);else{const k=Be(z),le=.5*(z.pageX+k.x),fe=.5*(z.pageY+k.y);p.set(le,fe)}_.subVectors(p,h).multiplyScalar(n.panSpeed),V(_.x,_.y),h.copy(p)}function $e(z){const k=Be(z),le=z.pageX-k.x,fe=z.pageY-k.y,_e=Math.sqrt(le*le+fe*fe);S.set(0,_e),M.set(0,Math.pow(S.y/x.y,n.zoomSpeed)),U(M.y),x.copy(S)}function We(z){n.enableZoom&&$e(z),n.enablePan&&Me(z)}function Te(z){n.enableZoom&&$e(z),n.enableRotate&&Pe(z)}function Dt(z){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",pe),n.domElement.addEventListener("pointerup",ee)),ye(z),z.pointerType==="touch"?N(z):xt(z))}function pe(z){n.enabled!==!1&&(z.pointerType==="touch"?L(z):lt(z))}function ee(z){xe(z),w.length===0&&(n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",pe),n.domElement.removeEventListener("pointerup",ee)),n.dispatchEvent(Yc),s=i.NONE}function je(z){xe(z)}function xt(z){let k;switch(z.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case cr.DOLLY:if(n.enableZoom===!1)return;J(z),s=i.DOLLY;break;case cr.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;X(z),s=i.PAN}else{if(n.enableRotate===!1)return;B(z),s=i.ROTATE}break;case cr.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;B(z),s=i.ROTATE}else{if(n.enablePan===!1)return;X(z),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xo)}function lt(z){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;se(z);break;case i.DOLLY:if(n.enableZoom===!1)return;ne(z);break;case i.PAN:if(n.enablePan===!1)return;R(z);break}}function Gt(z){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(z.preventDefault(),n.dispatchEvent(xo),q(z),n.dispatchEvent(Yc))}function Ot(z){n.enabled===!1||n.enablePan===!1||re(z)}function N(z){switch(we(z),w.length){case 1:switch(n.touches.ONE){case ur.ROTATE:if(n.enableRotate===!1)return;Q(),s=i.TOUCH_ROTATE;break;case ur.PAN:if(n.enablePan===!1)return;te(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ur.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;oe(),s=i.TOUCH_DOLLY_PAN;break;case ur.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xo)}function L(z){switch(we(z),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Pe(z),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Me(z),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;We(z),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(z),n.update();break;default:s=i.NONE}}function ae(z){n.enabled!==!1&&z.preventDefault()}function ye(z){w.push(z)}function xe(z){delete C[z.pointerId];for(let k=0;k<w.length;k++)if(w[k].pointerId==z.pointerId){w.splice(k,1);return}}function we(z){let k=C[z.pointerId];k===void 0&&(k=new Je,C[z.pointerId]=k),k.set(z.pageX,z.pageY)}function Be(z){const k=z.pointerId===w[0].pointerId?w[1]:w[0];return C[k.pointerId]}n.domElement.addEventListener("contextmenu",ae),n.domElement.addEventListener("pointerdown",Dt),n.domElement.addEventListener("pointercancel",je),n.domElement.addEventListener("wheel",Gt,{passive:!1}),this.update()}};function hv(r){let e,t,n,i;return e=new bs({props:{dispose:r[2],object:r[0]}}),n=new bf({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){Ie(e.$$.fragment),t=Mt(),Ie(n.$$.fragment)},l(s){Ne(e.$$.fragment,s),t=wt(s),Ne(n.$$.fragment,s)},m(s,a){Le(e,s,a),Fe(s,t,a),Le(n,s,a),i=!0},p(s,a){const o={};a[0]&4&&(o.dispose=s[2]),a[0]&1&&(o.object=s[0]),e.$set(o);const l={};a[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){ce(e.$$.fragment,s),ce(n.$$.fragment,s),i=!1},d(s){De(e,s),s&&Ee(t),De(n,s)}}}function pv(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:a=void 0}=e,{enableDamping:o=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:d=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:h=void 0}=e,{maxPolarAngle:p=void 0}=e,{maxZoom:_=void 0}=e,{minAzimuthAngle:x=void 0}=e,{minDistance:S=void 0}=e,{minPolarAngle:M=void 0}=e,{minZoom:w=void 0}=e,{mouseButtons:C=void 0}=e,{panSpeed:G=void 0}=e,{rotateSpeed:v=void 0}=e,{screenSpacePanning:D=void 0}=e,{touches:I=void 0}=e,{zoomSpeed:j=void 0}=e,{target:K=void 0}=e,{dispose:V=void 0}=e;const U=_f();Rt(r,U,F=>t(30,n=F));const{renderer:O,invalidate:B}=Mn();if(!O)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Ho))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const J=$i(),X=()=>{B("Orbitcontrols: change event"),J("change")},se=()=>J("start"),ne=()=>J("end"),R=new dv(n,O.domElement);jn(n).orbitControls=R,R.addEventListener("change",X),R.addEventListener("start",se),R.addEventListener("end",ne),Tt(()=>{n&&delete jn(n).orbitControls,R.removeEventListener("change",X),R.removeEventListener("start",se),R.removeEventListener("end",ne)});const{start:q,stop:re}=Da(()=>R.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),Q=new Ft,te=()=>{t(0,R.target=Q.position,R),R.update(),B("OrbitControls: target changed")};return r.$$set=F=>{"autoRotate"in F&&t(6,i=F.autoRotate),"autoRotateSpeed"in F&&t(7,s=F.autoRotateSpeed),"dampingFactor"in F&&t(8,a=F.dampingFactor),"enableDamping"in F&&t(9,o=F.enableDamping),"enabled"in F&&t(10,l=F.enabled),"enablePan"in F&&t(11,c=F.enablePan),"enableRotate"in F&&t(12,u=F.enableRotate),"enableZoom"in F&&t(13,f=F.enableZoom),"keyPanSpeed"in F&&t(14,d=F.keyPanSpeed),"keys"in F&&t(15,m=F.keys),"maxAzimuthAngle"in F&&t(16,g=F.maxAzimuthAngle),"maxDistance"in F&&t(17,h=F.maxDistance),"maxPolarAngle"in F&&t(18,p=F.maxPolarAngle),"maxZoom"in F&&t(19,_=F.maxZoom),"minAzimuthAngle"in F&&t(20,x=F.minAzimuthAngle),"minDistance"in F&&t(21,S=F.minDistance),"minPolarAngle"in F&&t(22,M=F.minPolarAngle),"minZoom"in F&&t(23,w=F.minZoom),"mouseButtons"in F&&t(24,C=F.mouseButtons),"panSpeed"in F&&t(25,G=F.panSpeed),"rotateSpeed"in F&&t(26,v=F.rotateSpeed),"screenSpacePanning"in F&&t(27,D=F.screenSpacePanning),"touches"in F&&t(28,I=F.touches),"zoomSpeed"in F&&t(29,j=F.zoomSpeed),"target"in F&&t(1,K=F.target),"dispose"in F&&t(2,V=F.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,R.autoRotate=i,R),s!==void 0&&t(0,R.autoRotateSpeed=s,R),a!==void 0&&t(0,R.dampingFactor=a,R),o!==void 0&&t(0,R.enableDamping=o,R),l!==void 0&&t(0,R.enabled=l,R),c!==void 0&&t(0,R.enablePan=c,R),u!==void 0&&t(0,R.enableRotate=u,R),f!==void 0&&t(0,R.enableZoom=f,R),d!==void 0&&t(0,R.keyPanSpeed=d,R),m!==void 0&&t(0,R.keys=m,R),g!==void 0&&t(0,R.maxAzimuthAngle=g,R),h!==void 0&&t(0,R.maxDistance=h,R),p!==void 0&&t(0,R.maxPolarAngle=p,R),_!==void 0&&t(0,R.maxZoom=_,R),x!==void 0&&t(0,R.minAzimuthAngle=x,R),S!==void 0&&t(0,R.minDistance=S,R),M!==void 0&&t(0,R.minPolarAngle=M,R),w!==void 0&&t(0,R.minZoom=w,R),C!==void 0&&t(0,R.mouseButtons=C,R),G!==void 0&&t(0,R.panSpeed=G,R),v!==void 0&&t(0,R.rotateSpeed=v,R),D!==void 0&&t(0,R.screenSpacePanning=D,R),I!==void 0&&t(0,R.touches=I,R),j!==void 0&&t(0,R.zoomSpeed=j,R),R.update(),B("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||o?q():re())},[R,K,V,U,Q,te,i,s,a,o,l,c,u,f,d,m,g,h,p,_,x,S,M,w,C,G,v,D,I,j]}class mv extends gt{constructor(e){super(),_t(this,e,pv,hv,ht,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}function gv(r,e,t){let{object:n}=e,i=n,{interactive:s=!1}=e,{ignorePointer:a=!1}=e;const o=$i(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=Qo(),{invalidate:d}=Mn(),m=h=>{f(h),c(h),delete jn(h).eventDispatcher},g=(h,p,_)=>{jn(h).eventDispatcher=o,p?(f(h),c(h)):(u(h),_?l(h):c(h))};return Tt(()=>{m(n),d("InteractiveObject: object removed")}),r.$$set=h=>{"object"in h&&t(0,n=h.object),"interactive"in h&&t(1,s=h.interactive),"ignorePointer"in h&&t(2,a=h.ignorePointer)},r.$$.update=()=>{r.$$.dirty&15&&(n!==i?(m(i),g(n,a,s),d("InteractiveObject: object changed"),t(3,i=n)):n===i&&(g(n,a,s),d("InteractiveObject: props changed")))},[n,s,a,i]}class _v extends gt{constructor(e){super(),_t(this,e,gv,null,ht,{object:0,interactive:1,ignorePointer:2})}}function vv(r){let e;const t=r[16].default,n=ln(t,r,r[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&134217728)&&cn(n,t,i,i[27],e?fn(t,i[27],s,null):un(i[27]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function bv(r){let e,t,n,i,s;function a(l){r[17](l)}let o={object:r[1],lookAt:r[5],position:r[2],scale:r[3],rotation:r[4],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],visible:r[11],userData:r[12],dispose:r[13],viewportAware:r[6],$$slots:{default:[vv]},$$scope:{ctx:r}};return r[0]!==void 0&&(o.inViewport=r[0]),e=new $o({props:o}),Rn.push(()=>Gr(e,"inViewport",a)),e.$on("viewportenter",r[18]),e.$on("viewportleave",r[19]),i=new _v({props:{object:r[1],interactive:r[14],ignorePointer:r[15]}}),i.$on("click",r[20]),i.$on("contextmenu",r[21]),i.$on("pointerup",r[22]),i.$on("pointerdown",r[23]),i.$on("pointerenter",r[24]),i.$on("pointerleave",r[25]),i.$on("pointermove",r[26]),{c(){Ie(e.$$.fragment),n=Mt(),Ie(i.$$.fragment)},l(l){Ne(e.$$.fragment,l),n=wt(l),Ne(i.$$.fragment,l)},m(l,c){Le(e,l,c),Fe(l,n,c),Le(i,l,c),s=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Vr(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){s||(ie(e.$$.fragment,l),ie(i.$$.fragment,l),s=!0)},o(l){ce(e.$$.fragment,l),ce(i.$$.fragment,l),s=!1},d(l){De(e,l),l&&Ee(n),De(i,l)}}}function yv(r,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:h=void 0}=e,{visible:p=void 0}=e,{userData:_=void 0}=e,{dispose:x=void 0}=e,{interactive:S=!1}=e,{ignorePointer:M=!1}=e;function w(O){f=O,t(0,f)}function C(O){Ct.call(this,r,O)}function G(O){Ct.call(this,r,O)}function v(O){Ct.call(this,r,O)}function D(O){Ct.call(this,r,O)}function I(O){Ct.call(this,r,O)}function j(O){Ct.call(this,r,O)}function K(O){Ct.call(this,r,O)}function V(O){Ct.call(this,r,O)}function U(O){Ct.call(this,r,O)}return r.$$set=O=>{"mesh"in O&&t(1,s=O.mesh),"position"in O&&t(2,a=O.position),"scale"in O&&t(3,o=O.scale),"rotation"in O&&t(4,l=O.rotation),"lookAt"in O&&t(5,c=O.lookAt),"viewportAware"in O&&t(6,u=O.viewportAware),"inViewport"in O&&t(0,f=O.inViewport),"castShadow"in O&&t(7,d=O.castShadow),"receiveShadow"in O&&t(8,m=O.receiveShadow),"frustumCulled"in O&&t(9,g=O.frustumCulled),"renderOrder"in O&&t(10,h=O.renderOrder),"visible"in O&&t(11,p=O.visible),"userData"in O&&t(12,_=O.userData),"dispose"in O&&t(13,x=O.dispose),"interactive"in O&&t(14,S=O.interactive),"ignorePointer"in O&&t(15,M=O.ignorePointer),"$$scope"in O&&t(27,i=O.$$scope)},[f,s,a,o,l,c,u,d,m,g,h,p,_,x,S,M,n,w,C,G,v,D,I,j,K,V,U,i]}class xv extends gt{constructor(e){super(),_t(this,e,yv,bv,ht,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function Sv(r){let e;const t=r[20].default,n=ln(t,r,r[31],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&1)&&cn(n,t,i,i[31],e?fn(t,i[31],s,null):un(i[31]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function Mv(r){let e,t,n,i,s,a,o;e=new bs({props:{dispose:r[11],object:r[15]}}),n=new bs({props:{dispose:r[11],object:r[16]}});function l(u){r[21](u)}let c={mesh:r[17],position:r[1],scale:r[2],rotation:r[3],lookAt:r[14],castShadow:r[5],receiveShadow:r[6],frustumCulled:r[7],renderOrder:r[8],visible:r[9],interactive:r[12],ignorePointer:r[13],userData:r[10],dispose:r[11],viewportAware:r[4],$$slots:{default:[Sv]},$$scope:{ctx:r}};return r[0]!==void 0&&(c.inViewport=r[0]),s=new xv({props:c}),Rn.push(()=>Gr(s,"inViewport",l)),s.$on("click",r[22]),s.$on("contextmenu",r[23]),s.$on("pointerup",r[24]),s.$on("pointerdown",r[25]),s.$on("pointerenter",r[26]),s.$on("pointerleave",r[27]),s.$on("pointermove",r[28]),s.$on("viewportenter",r[29]),s.$on("viewportleave",r[30]),{c(){Ie(e.$$.fragment),t=Mt(),Ie(n.$$.fragment),i=Mt(),Ie(s.$$.fragment)},l(u){Ne(e.$$.fragment,u),t=wt(u),Ne(n.$$.fragment,u),i=wt(u),Ne(s.$$.fragment,u)},m(u,f){Le(e,u,f),Fe(u,t,f),Le(n,u,f),Fe(u,i,f),Le(s,u,f),o=!0},p(u,f){const d={};f[0]&2048&&(d.dispose=u[11]),f[0]&32768&&(d.object=u[15]),e.$set(d);const m={};f[0]&2048&&(m.dispose=u[11]),f[0]&65536&&(m.object=u[16]),n.$set(m);const g={};f[0]&2&&(g.position=u[1]),f[0]&4&&(g.scale=u[2]),f[0]&8&&(g.rotation=u[3]),f[0]&16384&&(g.lookAt=u[14]),f[0]&32&&(g.castShadow=u[5]),f[0]&64&&(g.receiveShadow=u[6]),f[0]&128&&(g.frustumCulled=u[7]),f[0]&256&&(g.renderOrder=u[8]),f[0]&512&&(g.visible=u[9]),f[0]&4096&&(g.interactive=u[12]),f[0]&8192&&(g.ignorePointer=u[13]),f[0]&1024&&(g.userData=u[10]),f[0]&2048&&(g.dispose=u[11]),f[0]&16&&(g.viewportAware=u[4]),f[1]&1&&(g.$$scope={dirty:f,ctx:u}),!a&&f[0]&1&&(a=!0,g.inViewport=u[0],Vr(()=>a=!1)),s.$set(g)},i(u){o||(ie(e.$$.fragment,u),ie(n.$$.fragment,u),ie(s.$$.fragment,u),o=!0)},o(u){ce(e.$$.fragment,u),ce(n.$$.fragment,u),ce(s.$$.fragment,u),o=!1},d(u){De(e,u),u&&Ee(t),De(n,u),u&&Ee(i),De(s,u)}}}function wv(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:h=void 0}=e,{dispose:p=void 0}=e,{interactive:_=!1}=e,{ignorePointer:x=!1}=e,{lookAt:S=void 0}=e,{geometry:M}=e,{material:w}=e,C=w,G=M;const{invalidate:v}=Mn(),D=new mn(M,w),I=()=>D;function j(R){c=R,t(0,c)}function K(R){Ct.call(this,r,R)}function V(R){Ct.call(this,r,R)}function U(R){Ct.call(this,r,R)}function O(R){Ct.call(this,r,R)}function B(R){Ct.call(this,r,R)}function J(R){Ct.call(this,r,R)}function X(R){Ct.call(this,r,R)}function se(R){Ct.call(this,r,R)}function ne(R){Ct.call(this,r,R)}return r.$$set=R=>{"position"in R&&t(1,s=R.position),"scale"in R&&t(2,a=R.scale),"rotation"in R&&t(3,o=R.rotation),"viewportAware"in R&&t(4,l=R.viewportAware),"inViewport"in R&&t(0,c=R.inViewport),"castShadow"in R&&t(5,u=R.castShadow),"receiveShadow"in R&&t(6,f=R.receiveShadow),"frustumCulled"in R&&t(7,d=R.frustumCulled),"renderOrder"in R&&t(8,m=R.renderOrder),"visible"in R&&t(9,g=R.visible),"userData"in R&&t(10,h=R.userData),"dispose"in R&&t(11,p=R.dispose),"interactive"in R&&t(12,_=R.interactive),"ignorePointer"in R&&t(13,x=R.ignorePointer),"lookAt"in R&&t(14,S=R.lookAt),"geometry"in R&&t(15,M=R.geometry),"material"in R&&t(16,w=R.material),"$$scope"in R&&t(31,i=R.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&327680&&(w!==C?(I().material=w,v("Mesh: material changed")):v("Mesh: material props changed"),t(18,C=w)),r.$$.dirty[0]&557056&&(M!==G?(I().geometry=M,v("Mesh: geometry changed")):v("Mesh: geometry props changed"),t(19,G=M))},[c,s,a,o,l,u,f,d,m,g,h,p,_,x,S,M,w,D,C,G,n,j,K,V,U,O,B,J,X,se,ne,i]}class Av extends gt{constructor(e){super(),_t(this,e,wv,Mv,ht,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const yf=new Ft;yf.scale.set(0,0,0);yf.matrix;new nt().fromArray(new Array(16).fill(0));new et(16777215);function Ev(r){let e;const t=r[14].default,n=ln(t,r,r[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&cn(n,t,i,i[18],e?fn(t,i[18],s,null):un(i[18]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function Tv(r){let e,t,n;function i(a){r[15](a)}let s={object:r[13],position:r[1],scale:r[2],rotation:r[3],lookAt:r[4],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],castShadow:r[6],receiveShadow:r[7],viewportAware:r[5],$$slots:{default:[Ev]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new $o({props:s}),Rn.push(()=>Gr(e,"inViewport",i)),e.$on("viewportenter",r[16]),e.$on("viewportleave",r[17]),{c(){Ie(e.$$.fragment)},l(a){Ne(e.$$.fragment,a)},m(a,o){Le(e,a,o),n=!0},p(a,[o]){const l={};o&2&&(l.position=a[1]),o&4&&(l.scale=a[2]),o&8&&(l.rotation=a[3]),o&16&&(l.lookAt=a[4]),o&256&&(l.frustumCulled=a[8]),o&512&&(l.renderOrder=a[9]),o&1024&&(l.visible=a[10]),o&2048&&(l.userData=a[11]),o&4096&&(l.dispose=a[12]),o&64&&(l.castShadow=a[6]),o&128&&(l.receiveShadow=a[7]),o&32&&(l.viewportAware=a[5]),o&262144&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],Vr(()=>t=!1)),e.$set(l)},i(a){n||(ie(e.$$.fragment,a),n=!0)},o(a){ce(e.$$.fragment,a),n=!1},d(a){De(e,a)}}}function Cv(r,e,t){let{$$slots:n={},$$scope:i}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{lookAt:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:m=void 0}=e,{renderOrder:g=void 0}=e,{visible:h=void 0}=e,{userData:p=void 0}=e,{dispose:_=void 0}=e;const x=new ti;function S(C){u=C,t(0,u)}function M(C){Ct.call(this,r,C)}function w(C){Ct.call(this,r,C)}return r.$$set=C=>{"position"in C&&t(1,s=C.position),"scale"in C&&t(2,a=C.scale),"rotation"in C&&t(3,o=C.rotation),"lookAt"in C&&t(4,l=C.lookAt),"viewportAware"in C&&t(5,c=C.viewportAware),"inViewport"in C&&t(0,u=C.inViewport),"castShadow"in C&&t(6,f=C.castShadow),"receiveShadow"in C&&t(7,d=C.receiveShadow),"frustumCulled"in C&&t(8,m=C.frustumCulled),"renderOrder"in C&&t(9,g=C.renderOrder),"visible"in C&&t(10,h=C.visible),"userData"in C&&t(11,p=C.userData),"dispose"in C&&t(12,_=C.dispose),"$$scope"in C&&t(18,i=C.$$scope)},[u,s,a,o,l,c,f,d,m,g,h,p,_,x,n,S,M,w,i]}class Iv extends gt{constructor(e){super(),_t(this,e,Cv,Tv,ht,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,group:13})}get group(){return this.$$.ctx[13]}}const xf=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},So=Symbol("initialValueBeforeAttach"),Lv=()=>{const{invalidate:r}=Mn();let e=!1,t=So,n,i,s;const a=(l,c,u)=>{if(o(),!u){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(c,l);else{const{target:f,key:d}=xf(c,u);t=f[d],f[d]=l,i=f,s=d}e=!0,r()}},o=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==So&&(i[s]=t,t=So,i=void 0,s=void 0),e=!1,r())};return Tt(()=>{o()}),{update:a}},Dv=r=>r&&r.isCamera,Sf=r=>r&&r.isOrthographicCamera,Mf=r=>r&&r.isPerspectiveCamera,Rv=r=>Mf(r)||Sf(r),Pv=()=>{const{invalidate:r,size:e}=Mn(),{setCamera:t}=Qo();let n,i;Tt(()=>{i==null||i()});const s=l=>{n&&(Sf(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):Mf(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!Rv(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!Dv(l)||!c||(t(l),r())}}},Kc=r=>!!(r!=null&&r.addEventListener),kv=()=>{const r=$i(),e=er(),t=d=>{d!=null&&d.type&&r(d.type,d)},n=(d,m)=>{Kc(d)&&m.forEach(g=>{d.removeEventListener(g,t)})},i=(d,m)=>{Kc(d)&&m.forEach(g=>{d.addEventListener(g,t)})};let s=[],a;const o=an([]),l=o.subscribe(d=>{n(a,s),i(a,d),s=d});Tt(l);const c=an(),u=c.subscribe(d=>{n(a,s),i(d,s),a=d});return Tt(u),Tt(()=>{n(a,s)}),Br(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:d=>{c.set(d)}}},Nv=["$$scope","$$slots","type","args","attach","instance"],Fv=["fov","aspect","near","far","left","right","top","bottom","zoom"],Ov=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Uv=()=>{const{invalidate:r}=Mn(),e=new Map,t=(i,s,a,o)=>{var u,f;if(Ov(a)){const d=e.get(s);if(d&&d.instance===i&&d.value===a)return;e.set(s,{instance:i,value:a})}const{key:l,target:c}=xf(i,s);if(!Array.isArray(a)&&typeof a=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(a);else if(typeof((f=c[l])==null?void 0:f.set)=="function")Array.isArray(a)?c[l].set(...a):c[l].set(a);else{if(c[l]=a,o.manualCamera)return;Fv.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,a)=>{for(const o in s)Nv.includes(o)||t(i,o,s[o],a),r()}}},zv=r=>({ref:r&1}),Zc=r=>({ref:r[0]}),Bv=r=>({ref:r&1}),Jc=r=>({ref:r[0]});function Qc(r){let e,t;return e=new bs({props:{object:r[0],dispose:r[1]}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Gv(r){let e;const t=r[12].default,n=ln(t,r,r[13],Zc);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&cn(n,t,i,i[13],e?fn(t,i[13],s,zv):un(i[13]),Zc)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function Vv(r){let e,t;return e=new Jo({props:{object:r[0],$$slots:{default:[Hv]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Hv(r){let e;const t=r[12].default,n=ln(t,r,r[13],Jc);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&cn(n,t,i,i[13],e?fn(t,i[13],s,Bv):un(i[13]),Jc)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function Wv(r){let e=r[4](r[0]),t,n,i,s,a,o,l=e&&Qc(r);const c=[Vv,Gv],u=[];function f(d,m){return m&1&&(n=null),n==null&&(n=!!d[3](d[0])),n?0:1}return i=f(r,-1),s=u[i]=c[i](r),{c(){l&&l.c(),t=Mt(),s.c(),a=Ze()},l(d){l&&l.l(d),t=wt(d),s.l(d),a=Ze()},m(d,m){l&&l.m(d,m),Fe(d,t,m),u[i].m(d,m),Fe(d,a,m),o=!0},p(d,[m]){m&1&&(e=d[4](d[0])),e?l?(l.p(d,m),m&1&&ie(l,1)):(l=Qc(d),l.c(),ie(l,1),l.m(t.parentNode,t)):l&&(Jt(),ce(l,1,1,()=>{l=null}),Qt());let g=i;i=f(d,m),i===g?u[i].p(d,m):(Jt(),ce(u[g],1,1,()=>{u[g]=null}),Qt(),s=u[i],s?s.p(d,m):(s=u[i]=c[i](d),s.c()),ie(s,1),s.m(a.parentNode,a))},i(d){o||(ie(l),ie(s),o=!0)},o(d){ce(l),ce(s),o=!1},d(d){l&&l.d(d),d&&Ee(t),u[i].d(d),d&&Ee(a)}}}function jv(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=Pn(e,n),s,{$$slots:a={},$$scope:o}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:f=void 0}=e,{makeDefault:d=void 0}=e,{dispose:m=void 0}=e;const g=Wt("threlte-hierarchical-parent-context");Rt(r,g,I=>t(11,s=I));const h=I=>typeof I=="function"&&/^\s*class\s+/.test(I.toString()),p=I=>Array.isArray(I);let{ref:_=h(l)&&p(c)?new l(...c):h(l)?new l:l}=e,x=!1;const S=an(_);kt("threlte-hierarchical-parent-context",S);const M=Uv(),w=Pv(),C=Lv(),G=kv(),v=I=>!!I.isObject3D,D=I=>I.dispose!==void 0;return r.$$set=I=>{e=jt(jt({},e),tr(I)),t(21,i=Pn(e,n)),"type"in I&&t(5,l=I.type),"args"in I&&t(6,c=I.args),"attach"in I&&t(7,u=I.attach),"manual"in I&&t(8,f=I.manual),"makeDefault"in I&&t(9,d=I.makeDefault),"dispose"in I&&t(1,m=I.dispose),"ref"in I&&t(0,_=I.ref),"$$scope"in I&&t(13,o=I.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(x?t(0,_=h(l)&&p(c)?new l(...c):h(l)?new l:l):t(10,x=!0)),r.$$.dirty&1&&S.set(_),M.updateProps(_,i,{manualCamera:f}),r.$$.dirty&257&&w.update(_,f),r.$$.dirty&513&&w.makeDefaultCamera(_,d),r.$$.dirty&2177&&C.update(_,s,u),r.$$.dirty&1&&G.updateRef(_)},[_,m,g,v,D,l,c,u,f,d,x,s,a,o]}class rn extends gt{constructor(e){super(),_t(this,e,jv,Wv,ht,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function qv(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class $c extends gt{constructor(e){super(),_t(this,e,qv,null,ht,{})}}new Proxy($c,{get(r,e){return r[e]||$c}});el(Po,()=>new Po(uf));function Ar(r,e="xyz"){var t;if(r.hasAttribute(e)){const n=(t=r.getAttribute(e))==null?void 0:t.split(" ");if(n){const i=[];for(const s of n)i.push(parseFloat(s));return i}}}function Xv(r){return r?new et(r[0],r[1],r[2]):new et("white")}class eu extends u0{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case d:case h:(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)&&console.error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case g:case p:case _:B.colormap_type&&console.error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case f:console.error("THREE.TGALoader: No data.");default:console.error('THREE.TGALoader: Invalid type "%s".',B.image_type)}(B.width<=0||B.height<=0)&&console.error("THREE.TGALoader: Invalid image size."),B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32&&console.error('THREE.TGALoader: Invalid pixel size "%s".',B.pixel_size)}function n(B,J,X,se,ne){let R,q;const re=X.pixel_size>>3,Q=X.width*X.height*re;if(J&&(q=ne.subarray(se,se+=X.colormap_length*(X.colormap_size>>3))),B){R=new Uint8Array(Q);let te,F,oe,be=0;const Pe=new Uint8Array(re);for(;be<Q;)if(te=ne[se++],F=(te&127)+1,te&128){for(oe=0;oe<re;++oe)Pe[oe]=ne[se++];for(oe=0;oe<F;++oe)R.set(Pe,be+oe*re);be+=re*F}else{for(F*=re,oe=0;oe<F;++oe)R[be+oe]=ne[se++];be+=F}}else R=ne.subarray(se,se+=J?X.width*X.height:Q);return{pixel_data:R,palettes:q}}function i(B,J,X,se,ne,R,q,re,Q){const te=Q;let F,oe=0,be,Pe;const Me=I.width;for(Pe=J;Pe!==se;Pe+=X)for(be=ne;be!==q;be+=R,oe++)F=re[oe],B[(be+Me*Pe)*4+3]=255,B[(be+Me*Pe)*4+2]=te[F*3+0],B[(be+Me*Pe)*4+1]=te[F*3+1],B[(be+Me*Pe)*4+0]=te[F*3+2];return B}function s(B,J,X,se,ne,R,q,re){let Q,te=0,F,oe;const be=I.width;for(oe=J;oe!==se;oe+=X)for(F=ne;F!==q;F+=R,te+=2)Q=re[te+0]+(re[te+1]<<8),B[(F+be*oe)*4+0]=(Q&31744)>>7,B[(F+be*oe)*4+1]=(Q&992)>>2,B[(F+be*oe)*4+2]=(Q&31)<<3,B[(F+be*oe)*4+3]=Q&32768?0:255;return B}function a(B,J,X,se,ne,R,q,re){let Q=0,te,F;const oe=I.width;for(F=J;F!==se;F+=X)for(te=ne;te!==q;te+=R,Q+=3)B[(te+oe*F)*4+3]=255,B[(te+oe*F)*4+2]=re[Q+0],B[(te+oe*F)*4+1]=re[Q+1],B[(te+oe*F)*4+0]=re[Q+2];return B}function o(B,J,X,se,ne,R,q,re){let Q=0,te,F;const oe=I.width;for(F=J;F!==se;F+=X)for(te=ne;te!==q;te+=R,Q+=4)B[(te+oe*F)*4+2]=re[Q+0],B[(te+oe*F)*4+1]=re[Q+1],B[(te+oe*F)*4+0]=re[Q+2],B[(te+oe*F)*4+3]=re[Q+3];return B}function l(B,J,X,se,ne,R,q,re){let Q,te=0,F,oe;const be=I.width;for(oe=J;oe!==se;oe+=X)for(F=ne;F!==q;F+=R,te++)Q=re[te],B[(F+be*oe)*4+0]=Q,B[(F+be*oe)*4+1]=Q,B[(F+be*oe)*4+2]=Q,B[(F+be*oe)*4+3]=255;return B}function c(B,J,X,se,ne,R,q,re){let Q=0,te,F;const oe=I.width;for(F=J;F!==se;F+=X)for(te=ne;te!==q;te+=R,Q+=2)B[(te+oe*F)*4+0]=re[Q+0],B[(te+oe*F)*4+1]=re[Q+0],B[(te+oe*F)*4+2]=re[Q+0],B[(te+oe*F)*4+3]=re[Q+1];return B}function u(B,J,X,se,ne){let R,q,re,Q,te,F;switch((I.flags&x)>>S){default:case C:R=0,re=1,te=J,q=0,Q=1,F=X;break;case M:R=0,re=1,te=J,q=X-1,Q=-1,F=-1;break;case G:R=J-1,re=-1,te=-1,q=0,Q=1,F=X;break;case w:R=J-1,re=-1,te=-1,q=X-1,Q=-1,F=-1;break}if(V)switch(I.pixel_size){case 8:l(B,q,Q,F,R,re,te,se);break;case 16:c(B,q,Q,F,R,re,te,se);break;default:console.error("THREE.TGALoader: Format not supported.");break}else switch(I.pixel_size){case 8:i(B,q,Q,F,R,re,te,se,ne);break;case 16:s(B,q,Q,F,R,re,te,se);break;case 24:a(B,q,Q,F,R,re,te,se);break;case 32:o(B,q,Q,F,R,re,te,se);break;default:console.error("THREE.TGALoader: Format not supported.");break}return B}const f=0,d=1,m=2,g=3,h=9,p=10,_=11,x=48,S=4,M=0,w=1,C=2,G=3;e.length<19&&console.error("THREE.TGALoader: Not enough data to contain header.");let v=0;const D=new Uint8Array(e),I={id_length:D[v++],colormap_type:D[v++],image_type:D[v++],colormap_index:D[v++]|D[v++]<<8,colormap_length:D[v++]|D[v++]<<8,colormap_size:D[v++],origin:[D[v++]|D[v++]<<8,D[v++]|D[v++]<<8],width:D[v++]|D[v++]<<8,height:D[v++]|D[v++]<<8,pixel_size:D[v++],flags:D[v++]};t(I),I.id_length+v>e.length&&console.error("THREE.TGALoader: No data."),v+=I.id_length;let j=!1,K=!1,V=!1;switch(I.image_type){case h:j=!0,K=!0;break;case d:K=!0;break;case p:j=!0;break;case m:break;case _:j=!0,V=!0;break;case g:V=!0;break}const U=new Uint8Array(I.width*I.height*4),O=n(j,K,I,v,D);return u(U,I.width,I.height,O.pixel_data,O.palettes),{data:U,width:I.width,height:I.height,flipY:!0,generateMipmaps:!0,minFilter:Ji}}}class tu extends Yr{constructor(e){super(e)}load(e,t,n,i){const s=this,a=s.path===""?hf.extractUrlBase(e):s.path,o=new Yo(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){function n(y,b){const E=[],A=y.childNodes;for(let T=0,$=A.length;T<$;T++){const he=A[T];he.nodeName===b&&E.push(he)}return E}function i(y){if(y.length===0)return[];const b=y.trim().split(/\s+/),E=new Array(b.length);for(let A=0,T=b.length;A<T;A++)E[A]=b[A];return E}function s(y){if(y.length===0)return[];const b=y.trim().split(/\s+/),E=new Array(b.length);for(let A=0,T=b.length;A<T;A++)E[A]=parseFloat(b[A]);return E}function a(y){if(y.length===0)return[];const b=y.trim().split(/\s+/),E=new Array(b.length);for(let A=0,T=b.length;A<T;A++)E[A]=parseInt(b[A]);return E}function o(y){return y.substring(1)}function l(){return"three_default_"+Ff++}function c(y){return Object.keys(y).length===0}function u(y){return{unit:f(n(y,"unit")[0]),upAxis:d(n(y,"up_axis")[0])}}function f(y){return y!==void 0&&y.hasAttribute("meter")===!0?parseFloat(y.getAttribute("meter")):1}function d(y){return y!==void 0?y.textContent:"Y_UP"}function m(y,b,E,A){const T=n(y,b)[0];if(T!==void 0){const $=n(T,E);for(let he=0;he<$.length;he++)A($[he])}}function g(y,b){for(const E in y){const A=y[E];A.build=b(y[E])}}function h(y,b){return y.build!==void 0||(y.build=b(y)),y.build}function p(y){const b={sources:{},samplers:{},channels:{}};let E=!1;for(let A=0,T=y.childNodes.length;A<T;A++){const $=y.childNodes[A];if($.nodeType!==1)continue;let he;switch($.nodeName){case"source":he=$.getAttribute("id"),b.sources[he]=ve($);break;case"sampler":he=$.getAttribute("id"),b.samplers[he]=_($);break;case"channel":he=$.getAttribute("target"),b.channels[he]=x($);break;case"animation":p($),E=!0;break;default:console.log($)}}E===!1&&(Ke.animations[y.getAttribute("id")||$r.generateUUID()]=b)}function _(y){const b={inputs:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"input":const $=o(T.getAttribute("source")),he=T.getAttribute("semantic");b.inputs[he]=$;break}}return b}function x(y){const b={};let A=y.getAttribute("target").split("/");const T=A.shift();let $=A.shift();const he=$.indexOf("(")!==-1,ke=$.indexOf(".")!==-1;if(ke)A=$.split("."),$=A.shift(),b.member=A.shift();else if(he){const Se=$.split("(");$=Se.shift();for(let Ce=0;Ce<Se.length;Ce++)Se[Ce]=parseInt(Se[Ce].replace(/\)/,""));b.indices=Se}return b.id=T,b.sid=$,b.arraySyntax=he,b.memberSyntax=ke,b.sampler=o(y.getAttribute("source")),b}function S(y){const b=[],E=y.channels,A=y.samplers,T=y.sources;for(const $ in E)if(E.hasOwnProperty($)){const he=E[$],ke=A[he.sampler],Se=ke.inputs.INPUT,Ce=ke.inputs.OUTPUT,Ve=T[Se],ge=T[Ce],Ge=w(he,Ve,ge);I(Ge,b)}return b}function M(y){return h(Ke.animations[y],S)}function w(y,b,E){const A=Ke.nodes[y.id],T=Cn(A.id),$=A.transforms[y.sid],he=A.matrix.clone().transpose();let ke,Se,Ce,Ve,ge,Ge;const Ue={};switch($){case"matrix":for(Ce=0,Ve=b.array.length;Ce<Ve;Ce++)if(ke=b.array[Ce],Se=Ce*E.stride,Ue[ke]===void 0&&(Ue[ke]={}),y.arraySyntax===!0){const zt=E.array[Se],At=y.indices[0]+4*y.indices[1];Ue[ke][At]=zt}else for(ge=0,Ge=E.stride;ge<Ge;ge++)Ue[ke][ge]=E.array[Se+ge];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break}const Ye=C(Ue,he);return{name:T.uuid,keyframes:Ye}}function C(y,b){const E=[];for(const T in y)E.push({time:parseFloat(T),value:y[T]});E.sort(A);for(let T=0;T<16;T++)j(E,T,b.elements[T]);return E;function A(T,$){return T.time-$.time}}const G=new H,v=new H,D=new ri;function I(y,b){const E=y.keyframes,A=y.name,T=[],$=[],he=[],ke=[];for(let Se=0,Ce=E.length;Se<Ce;Se++){const Ve=E[Se],ge=Ve.time,Ge=Ve.value;Ut.fromArray(Ge).transpose(),Ut.decompose(G,D,v),T.push(ge),$.push(G.x,G.y,G.z),he.push(D.x,D.y,D.z,D.w),ke.push(v.x,v.y,v.z)}return $.length>0&&b.push(new Ur(A+".position",T,$)),he.length>0&&b.push(new qr(A+".quaternion",T,he)),ke.length>0&&b.push(new Ur(A+".scale",T,ke)),b}function j(y,b,E){let A,T=!0,$,he;for($=0,he=y.length;$<he;$++)A=y[$],A.value[b]===void 0?A.value[b]=null:T=!1;if(T===!0)for($=0,he=y.length;$<he;$++)A=y[$],A.value[b]=E;else K(y,b)}function K(y,b){let E,A;for(let T=0,$=y.length;T<$;T++){const he=y[T];if(he.value[b]===null){if(E=V(y,T,b),A=U(y,T,b),E===null){he.value[b]=A.value[b];continue}if(A===null){he.value[b]=E.value[b];continue}O(he,E,A,b)}}}function V(y,b,E){for(;b>=0;){const A=y[b];if(A.value[E]!==null)return A;b--}return null}function U(y,b,E){for(;b<y.length;){const A=y[b];if(A.value[E]!==null)return A;b++}return null}function O(y,b,E,A){if(E.time-b.time===0){y.value[A]=b.value[A];return}y.value[A]=(y.time-b.time)*(E.value[A]-b.value[A])/(E.time-b.time)+b.value[A]}function B(y){const b={name:y.getAttribute("id")||"default",start:parseFloat(y.getAttribute("start")||0),end:parseFloat(y.getAttribute("end")||0),animations:[]};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"instance_animation":b.animations.push(o(T.getAttribute("url")));break}}Ke.clips[y.getAttribute("id")]=b}function J(y){const b=[],E=y.name,A=y.end-y.start||-1,T=y.animations;for(let $=0,he=T.length;$<he;$++){const ke=M(T[$]);for(let Se=0,Ce=ke.length;Se<Ce;Se++)b.push(ke[Se])}return new Rc(E,A,b)}function X(y){return h(Ke.clips[y],J)}function se(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"skin":b.id=o(T.getAttribute("source")),b.skin=ne(T);break;case"morph":b.id=o(T.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Ke.controllers[y.getAttribute("id")]=b}function ne(y){const b={sources:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"bind_shape_matrix":b.bindShapeMatrix=s(T.textContent);break;case"source":const $=T.getAttribute("id");b.sources[$]=ve(T);break;case"joints":b.joints=R(T);break;case"vertex_weights":b.vertexWeights=q(T);break}}return b}function R(y){const b={inputs:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"input":const $=T.getAttribute("semantic"),he=o(T.getAttribute("source"));b.inputs[$]=he;break}}return b}function q(y){const b={inputs:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"input":const $=T.getAttribute("semantic"),he=o(T.getAttribute("source")),ke=parseInt(T.getAttribute("offset"));b.inputs[$]={id:he,offset:ke};break;case"vcount":b.vcount=a(T.textContent);break;case"v":b.v=a(T.textContent);break}}return b}function re(y){const b={id:y.id},E=Ke.geometries[b.id];return y.skin!==void 0&&(b.skin=Q(y.skin),E.sources.skinIndices=b.skin.indices,E.sources.skinWeights=b.skin.weights),b}function Q(y){const E={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},A=y.sources,T=y.vertexWeights,$=T.vcount,he=T.v,ke=T.inputs.JOINT.offset,Se=T.inputs.WEIGHT.offset,Ce=y.sources[y.joints.inputs.JOINT],Ve=y.sources[y.joints.inputs.INV_BIND_MATRIX],ge=A[T.inputs.WEIGHT.id].array;let Ge=0,Ue,Ye,qe;for(Ue=0,qe=$.length;Ue<qe;Ue++){const At=$[Ue],bt=[];for(Ye=0;Ye<At;Ye++){const yt=he[Ge+ke],ci=he[Ge+Se],In=ge[ci];bt.push({index:yt,weight:In}),Ge+=2}for(bt.sort(zt),Ye=0;Ye<4;Ye++){const yt=bt[Ye];yt!==void 0?(E.indices.array.push(yt.index),E.weights.array.push(yt.weight)):(E.indices.array.push(0),E.weights.array.push(0))}}for(y.bindShapeMatrix?E.bindMatrix=new nt().fromArray(y.bindShapeMatrix).transpose():E.bindMatrix=new nt().identity(),Ue=0,qe=Ce.array.length;Ue<qe;Ue++){const At=Ce.array[Ue],bt=new nt().fromArray(Ve.array,Ue*Ve.stride).transpose();E.joints.push({name:At,boneInverse:bt})}return E;function zt(At,bt){return bt.weight-At.weight}}function te(y){return h(Ke.controllers[y],re)}function F(y){const b={init_from:n(y,"init_from")[0].textContent};Ke.images[y.getAttribute("id")]=b}function oe(y){return y.build!==void 0?y.build:y.init_from}function be(y){const b=Ke.images[y];return b!==void 0?h(b,oe):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",y),null)}function Pe(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"profile_COMMON":b.profile=Me(T);break}}Ke.effects[y.getAttribute("id")]=b}function Me(y){const b={surfaces:{},samplers:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"newparam":$e(T,b);break;case"technique":b.technique=Dt(T);break;case"extra":b.extra=Gt(T);break}}return b}function $e(y,b){const E=y.getAttribute("sid");for(let A=0,T=y.childNodes.length;A<T;A++){const $=y.childNodes[A];if($.nodeType===1)switch($.nodeName){case"surface":b.surfaces[E]=We($);break;case"sampler2D":b.samplers[E]=Te($);break}}}function We(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"init_from":b.init_from=T.textContent;break}}return b}function Te(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"source":b.source=T.textContent;break}}return b}function Dt(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"constant":case"lambert":case"blinn":case"phong":b.type=T.nodeName,b.parameters=pe(T);break;case"extra":b.extra=Gt(T);break}}return b}function pe(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":b[T.nodeName]=ee(T);break;case"transparent":b[T.nodeName]={opaque:T.hasAttribute("opaque")?T.getAttribute("opaque"):"A_ONE",data:ee(T)};break}}return b}function ee(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"color":b[T.nodeName]=s(T.textContent);break;case"float":b[T.nodeName]=parseFloat(T.textContent);break;case"texture":b[T.nodeName]={id:T.getAttribute("texture"),extra:je(T)};break}}return b}function je(y){const b={technique:{}};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"extra":xt(T,b);break}}return b}function xt(y,b){for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"technique":lt(T,b);break}}}function lt(y,b){for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":b.technique[T.nodeName]=parseFloat(T.textContent);break;case"wrapU":case"wrapV":T.textContent.toUpperCase()==="TRUE"?b.technique[T.nodeName]=1:T.textContent.toUpperCase()==="FALSE"?b.technique[T.nodeName]=0:b.technique[T.nodeName]=parseInt(T.textContent);break;case"bump":b[T.nodeName]=N(T);break}}}function Gt(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"technique":b.technique=Ot(T);break}}return b}function Ot(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"double_sided":b[T.nodeName]=parseInt(T.textContent);break;case"bump":b[T.nodeName]=N(T);break}}return b}function N(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"texture":b[T.nodeName]={id:T.getAttribute("texture"),texcoord:T.getAttribute("texcoord"),extra:je(T)};break}}return b}function L(y){return y}function ae(y){return h(Ke.effects[y],L)}function ye(y){const b={name:y.getAttribute("name")};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"instance_effect":b.url=o(T.getAttribute("url"));break}}Ke.materials[y.getAttribute("id")]=b}function xe(y){let b,E=y.slice((y.lastIndexOf(".")-1>>>0)+2);switch(E=E.toLowerCase(),E){case"tga":b=Ua;break;default:b=sl}return b}function we(y){const b=ae(y.url),E=b.profile.technique;let A;switch(E.type){case"phong":case"blinn":A=new Lc;break;case"lambert":A=new Xo;break;default:A=new Fr;break}A.name=y.name||"";function T(Se,Ce=null){const Ve=b.profile.samplers[Se.id];let ge=null;if(Ve!==void 0){const Ge=b.profile.surfaces[Ve.source];ge=be(Ge.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ge=be(Se.id);if(ge!==null){const Ge=xe(ge);if(Ge!==void 0){const Ue=Ge.load(ge),Ye=Se.extra;if(Ye!==void 0&&Ye.technique!==void 0&&c(Ye.technique)===!1){const qe=Ye.technique;Ue.wrapS=qe.wrapU?Xi:xn,Ue.wrapT=qe.wrapV?Xi:xn,Ue.offset.set(qe.offsetU||0,qe.offsetV||0),Ue.repeat.set(qe.repeatU||1,qe.repeatV||1)}else Ue.wrapS=Xi,Ue.wrapT=Xi;return Ce!==null&&(Ue.encoding=Ce),Ue}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ge),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Se.id),null}const $=E.parameters;for(const Se in $){const Ce=$[Se];switch(Se){case"diffuse":Ce.color&&A.color.fromArray(Ce.color),Ce.texture&&(A.map=T(Ce.texture,Et));break;case"specular":Ce.color&&A.specular&&A.specular.fromArray(Ce.color),Ce.texture&&(A.specularMap=T(Ce.texture));break;case"bump":Ce.texture&&(A.normalMap=T(Ce.texture));break;case"ambient":Ce.texture&&(A.lightMap=T(Ce.texture,Et));break;case"shininess":Ce.float&&A.shininess&&(A.shininess=Ce.float);break;case"emission":Ce.color&&A.emissive&&A.emissive.fromArray(Ce.color),Ce.texture&&(A.emissiveMap=T(Ce.texture,Et));break}}A.color.convertSRGBToLinear(),A.specular&&A.specular.convertSRGBToLinear(),A.emissive&&A.emissive.convertSRGBToLinear();let he=$.transparent,ke=$.transparency;if(ke===void 0&&he&&(ke={float:1}),he===void 0&&ke&&(he={opaque:"A_ONE",data:{color:[1,1,1,1]}}),he&&ke)if(he.data.texture)A.transparent=!0;else{const Se=he.data.color;switch(he.opaque){case"A_ONE":A.opacity=Se[3]*ke.float;break;case"RGB_ZERO":A.opacity=1-Se[0]*ke.float;break;case"A_ZERO":A.opacity=1-Se[3]*ke.float;break;case"RGB_ONE":A.opacity=Se[0]*ke.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',he.opaque)}A.opacity<1&&(A.transparent=!0)}if(E.extra!==void 0&&E.extra.technique!==void 0){const Se=E.extra.technique;for(const Ce in Se){const Ve=Se[Ce];switch(Ce){case"double_sided":A.side=Ve===1?ba:Di;break;case"bump":A.normalMap=T(Ve.texture),A.normalScale=new Je(1,1);break}}}return A}function Be(y){return h(Ke.materials[y],we)}function z(y){const b={name:y.getAttribute("name")};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"optics":b.optics=k(T);break}}Ke.cameras[y.getAttribute("id")]=b}function k(y){for(let b=0;b<y.childNodes.length;b++){const E=y.childNodes[b];switch(E.nodeName){case"technique_common":return le(E)}}return{}}function le(y){const b={};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];switch(A.nodeName){case"perspective":case"orthographic":b.technique=A.nodeName,b.parameters=fe(A);break}}return b}function fe(y){const b={};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];switch(A.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":b[A.nodeName]=parseFloat(A.textContent);break}}return b}function _e(y){let b;switch(y.optics.technique){case"perspective":b=new on(y.optics.parameters.yfov,y.optics.parameters.aspect_ratio,y.optics.parameters.znear,y.optics.parameters.zfar);break;case"orthographic":let E=y.optics.parameters.ymag,A=y.optics.parameters.xmag;const T=y.optics.parameters.aspect_ratio;A=A===void 0?E*T:A,E=E===void 0?A/T:E,A*=.5,E*=.5,b=new Es(-A,A,E,-E,y.optics.parameters.znear,y.optics.parameters.zfar);break;default:b=new on;break}return b.name=y.name||"",b}function Oe(y){const b=Ke.cameras[y];return b!==void 0?h(b,_e):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",y),null)}function ze(y){let b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"technique_common":b=st(T);break}}Ke.lights[y.getAttribute("id")]=b}function st(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"directional":case"point":case"spot":case"ambient":b.technique=T.nodeName,b.parameters=ct(T)}}return b}function ct(y){const b={};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"color":const $=s(T.textContent);b.color=new et().fromArray($).convertSRGBToLinear();break;case"falloff_angle":b.falloffAngle=parseFloat(T.textContent);break;case"quadratic_attenuation":const he=parseFloat(T.textContent);b.distance=he?Math.sqrt(1/he):0;break}}return b}function St(y){let b;switch(y.technique){case"directional":b=new p0;break;case"point":b=new hs;break;case"spot":b=new ff;break;case"ambient":b=new df;break}return y.parameters.color&&b.color.copy(y.parameters.color),y.parameters.distance&&(b.distance=y.parameters.distance),b}function W(y){const b=Ke.lights[y];return b!==void 0?h(b,St):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",y),null)}function ue(y){const b={name:y.getAttribute("name"),sources:{},vertices:{},primitives:[]},E=n(y,"mesh")[0];if(E!==void 0){for(let A=0;A<E.childNodes.length;A++){const T=E.childNodes[A];if(T.nodeType!==1)continue;const $=T.getAttribute("id");switch(T.nodeName){case"source":b.sources[$]=ve(T);break;case"vertices":b.vertices=Re(T);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",T.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":b.primitives.push(He(T));break;default:console.log(T)}}Ke.geometries[y.getAttribute("id")]=b}}function ve(y){const b={array:[],stride:3};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"float_array":b.array=s(A.textContent);break;case"Name_array":b.array=i(A.textContent);break;case"technique_common":const T=n(A,"accessor")[0];T!==void 0&&(b.stride=parseInt(T.getAttribute("stride")));break}}return b}function Re(y){const b={};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];A.nodeType===1&&(b[A.getAttribute("semantic")]=o(A.getAttribute("source")))}return b}function He(y){const b={type:y.nodeName,material:y.getAttribute("material"),count:parseInt(y.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let E=0,A=y.childNodes.length;E<A;E++){const T=y.childNodes[E];if(T.nodeType===1)switch(T.nodeName){case"input":const $=o(T.getAttribute("source")),he=T.getAttribute("semantic"),ke=parseInt(T.getAttribute("offset")),Se=parseInt(T.getAttribute("set")),Ce=Se>0?he+Se:he;b.inputs[Ce]={id:$,offset:ke},b.stride=Math.max(b.stride,ke+1),he==="TEXCOORD"&&(b.hasUV=!0);break;case"vcount":b.vcount=a(T.textContent);break;case"p":b.p=a(T.textContent);break}}return b}function vt(y){const b={};for(let E=0;E<y.length;E++){const A=y[E];b[A.type]===void 0&&(b[A.type]=[]),b[A.type].push(A)}return b}function qt(y){let b=0;for(let E=0,A=y.length;E<A;E++)y[E].hasUV===!0&&b++;b>0&&b<y.length&&(y.uvsNeedsFix=!0)}function Yt(y){const b={},E=y.sources,A=y.vertices,T=y.primitives;if(T.length===0)return{};const $=vt(T);for(const he in $){const ke=$[he];qt(ke),b[he]=oi(ke,E,A)}return b}function oi(y,b,E){const A={},T={array:[],stride:0},$={array:[],stride:0},he={array:[],stride:0},ke={array:[],stride:0},Se={array:[],stride:0},Ce={array:[],stride:4},Ve={array:[],stride:4},ge=new kn,Ge=[];let Ue=0;for(let Ye=0;Ye<y.length;Ye++){const qe=y[Ye],zt=qe.inputs;let At=0;switch(qe.type){case"lines":case"linestrips":At=qe.count*2;break;case"triangles":At=qe.count*3;break;case"polylist":for(let bt=0;bt<qe.count;bt++){const yt=qe.vcount[bt];switch(yt){case 3:At+=3;break;case 4:At+=6;break;default:At+=(yt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",qe.type)}ge.addGroup(Ue,At,Ye),Ue+=At,qe.material&&Ge.push(qe.material);for(const bt in zt){const yt=zt[bt];switch(bt){case"VERTEX":for(const ci in E){const In=E[ci];switch(ci){case"POSITION":const lr=T.array.length;if(ut(qe,b[In],yt.offset,T.array),T.stride=b[In].stride,b.skinWeights&&b.skinIndices&&(ut(qe,b.skinIndices,yt.offset,Ce.array),ut(qe,b.skinWeights,yt.offset,Ve.array)),qe.hasUV===!1&&y.uvsNeedsFix===!0){const Of=(T.array.length-lr)/T.stride;for(let ol=0;ol<Of;ol++)he.array.push(0,0)}break;case"NORMAL":ut(qe,b[In],yt.offset,$.array),$.stride=b[In].stride;break;case"COLOR":ut(qe,b[In],yt.offset,Se.array),Se.stride=b[In].stride;break;case"TEXCOORD":ut(qe,b[In],yt.offset,he.array),he.stride=b[In].stride;break;case"TEXCOORD1":ut(qe,b[In],yt.offset,ke.array),he.stride=b[In].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',ci)}}break;case"NORMAL":ut(qe,b[yt.id],yt.offset,$.array),$.stride=b[yt.id].stride;break;case"COLOR":ut(qe,b[yt.id],yt.offset,Se.array,!0),Se.stride=b[yt.id].stride;break;case"TEXCOORD":ut(qe,b[yt.id],yt.offset,he.array),he.stride=b[yt.id].stride;break;case"TEXCOORD1":ut(qe,b[yt.id],yt.offset,ke.array),ke.stride=b[yt.id].stride;break}}}return T.array.length>0&&ge.setAttribute("position",new Pt(T.array,T.stride)),$.array.length>0&&ge.setAttribute("normal",new Pt($.array,$.stride)),Se.array.length>0&&ge.setAttribute("color",new Pt(Se.array,Se.stride)),he.array.length>0&&ge.setAttribute("uv",new Pt(he.array,he.stride)),ke.array.length>0&&ge.setAttribute("uv2",new Pt(ke.array,ke.stride)),Ce.array.length>0&&ge.setAttribute("skinIndex",new Pt(Ce.array,Ce.stride)),Ve.array.length>0&&ge.setAttribute("skinWeight",new Pt(Ve.array,Ve.stride)),A.data=ge,A.type=y[0].type,A.materialKeys=Ge,A}function ut(y,b,E,A,T=!1){const $=y.p,he=y.stride,ke=y.vcount;function Se(ge){let Ge=$[ge+E]*Ve;const Ue=Ge+Ve;for(;Ge<Ue;Ge++)A.push(Ce[Ge]);if(T){const Ye=A.length-Ve-1;Rs.setRGB(A[Ye+0],A[Ye+1],A[Ye+2]).convertSRGBToLinear(),A[Ye+0]=Rs.r,A[Ye+1]=Rs.g,A[Ye+2]=Rs.b}}const Ce=b.array,Ve=b.stride;if(y.vcount!==void 0){let ge=0;for(let Ge=0,Ue=ke.length;Ge<Ue;Ge++){const Ye=ke[Ge];if(Ye===4){const qe=ge+he*0,zt=ge+he*1,At=ge+he*2,bt=ge+he*3;Se(qe),Se(zt),Se(bt),Se(zt),Se(At),Se(bt)}else if(Ye===3){const qe=ge+he*0,zt=ge+he*1,At=ge+he*2;Se(qe),Se(zt),Se(At)}else if(Ye>4)for(let qe=1,zt=Ye-2;qe<=zt;qe++){const At=ge+he*0,bt=ge+he*qe,yt=ge+he*(qe+1);Se(At),Se(bt),Se(yt)}ge+=he*Ye}}else for(let ge=0,Ge=$.length;ge<Ge;ge+=he)Se(ge)}function Bn(y){return h(Ke.geometries[y],Yt)}function En(y){const b={name:y.getAttribute("name")||"",joints:{},links:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Na(A,b);break}}Ke.kinematicsModels[y.getAttribute("id")]=b}function Cs(y){return y.build!==void 0?y.build:y}function ka(y){return h(Ke.kinematicsModels[y],Cs)}function Na(y,b){for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"joint":b.joints[A.getAttribute("sid")]=Fa(A);break;case"link":b.links.push(Z(A));break}}}function Fa(y){let b;for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"prismatic":case"revolute":b=P(A);break}}return b}function P(y){const b={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",axis:new H,limits:{min:0,max:0},type:y.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"axis":const T=s(A.textContent);b.axis.fromArray(T);break;case"limits":const $=A.getElementsByTagName("max")[0],he=A.getElementsByTagName("min")[0];b.limits.max=parseFloat($.textContent),b.limits.min=parseFloat(he.textContent);break}}return b.limits.min>=b.limits.max&&(b.static=!0),b.middlePosition=(b.limits.min+b.limits.max)/2,b}function Z(y){const b={sid:y.getAttribute("sid"),name:y.getAttribute("name")||"",attachments:[],transforms:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"attachment_full":b.attachments.push(de(A));break;case"matrix":case"translate":case"rotate":b.transforms.push(Y(A));break}}return b}function de(y){const b={joint:y.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"link":b.links.push(Z(A));break;case"matrix":case"translate":case"rotate":b.transforms.push(Y(A));break}}return b}function Y(y){const b={type:y.nodeName},E=s(y.textContent);switch(b.type){case"matrix":b.obj=new nt,b.obj.fromArray(E).transpose();break;case"translate":b.obj=new H,b.obj.fromArray(E);break;case"rotate":b.obj=new H,b.obj.fromArray(E),b.angle=$r.degToRad(E[3]);break}return b}function me(y){const b={name:y.getAttribute("name")||"",rigidBodies:{}};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"rigid_body":b.rigidBodies[A.getAttribute("name")]={},Xe(A,b.rigidBodies[A.getAttribute("name")]);break}}Ke.physicsModels[y.getAttribute("id")]=b}function Xe(y,b){for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Qe(A,b);break}}}function Qe(y,b){for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"inertia":b.inertia=s(A.textContent);break;case"mass":b.mass=s(A.textContent)[0];break}}}function tt(y){const b={bindJointAxis:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"bind_joint_axis":b.bindJointAxis.push(it(A));break}}Ke.kinematicsScenes[o(y.getAttribute("url"))]=b}function it(y){const b={target:y.getAttribute("target").split("/").pop()};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType===1)switch(A.nodeName){case"axis":const T=A.getElementsByTagName("param")[0];b.axis=T.textContent;const $=b.axis.split("inst_").pop().split("axis")[0];b.jointIndex=$.substring(0,$.length-1);break}}return b}function pt(y){return y.build!==void 0?y.build:y}function ft(y){return h(Ke.kinematicsScenes[y],pt)}function dt(){const y=Object.keys(Ke.kinematicsModels)[0],b=Object.keys(Ke.kinematicsScenes)[0],E=Object.keys(Ke.visualScenes)[0];if(y===void 0||b===void 0)return;const A=ka(y),T=ft(b),$=Ls(E),he=T.bindJointAxis,ke={};for(let Ve=0,ge=he.length;Ve<ge;Ve++){const Ge=he[Ve],Ue=Kt.querySelector('[sid="'+Ge.target+'"]');if(Ue){const Ye=Ue.parentElement;Se(Ge.jointIndex,Ye)}}function Se(Ve,ge){const Ge=ge.getAttribute("name"),Ue=A.joints[Ve];$.traverse(function(Ye){Ye.name===Ge&&(ke[Ve]={object:Ye,transforms:Bt(ge),joint:Ue,position:Ue.zeroPosition})})}const Ce=new nt;al={joints:A&&A.joints,getJointValue:function(Ve){const ge=ke[Ve];if(ge)return ge.position;console.warn("THREE.ColladaLoader: Joint "+Ve+" doesn't exist.")},setJointValue:function(Ve,ge){const Ge=ke[Ve];if(Ge){const Ue=Ge.joint;if(ge>Ue.limits.max||ge<Ue.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ve+" value "+ge+" outside of limits (min: "+Ue.limits.min+", max: "+Ue.limits.max+").");else if(Ue.static)console.warn("THREE.ColladaLoader: Joint "+Ve+" is static.");else{const Ye=Ge.object,qe=Ue.axis,zt=Ge.transforms;Ut.identity();for(let At=0;At<zt.length;At++){const bt=zt[At];if(bt.sid&&bt.sid.indexOf(Ve)!==-1)switch(Ue.type){case"revolute":Ut.multiply(Ce.makeRotationAxis(qe,$r.degToRad(ge)));break;case"prismatic":Ut.multiply(Ce.makeTranslation(qe.x*ge,qe.y*ge,qe.z*ge));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ue.type);break}else switch(bt.type){case"matrix":Ut.multiply(bt.obj);break;case"translate":Ut.multiply(Ce.makeTranslation(bt.obj.x,bt.obj.y,bt.obj.z));break;case"scale":Ut.scale(bt.obj);break;case"rotate":Ut.multiply(Ce.makeRotationAxis(bt.obj,bt.angle));break}}Ye.matrix.copy(Ut),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),ke[Ve].position=ge}}else console.log("THREE.ColladaLoader: "+Ve+" does not exist.")}}}function Bt(y){const b=[],E=Kt.querySelector('[id="'+y.id+'"]');for(let A=0;A<E.childNodes.length;A++){const T=E.childNodes[A];if(T.nodeType!==1)continue;let $,he;switch(T.nodeName){case"matrix":$=s(T.textContent);const ke=new nt().fromArray($).transpose();b.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:ke});break;case"translate":case"scale":$=s(T.textContent),he=new H().fromArray($),b.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:he});break;case"rotate":$=s(T.textContent),he=new H().fromArray($);const Se=$r.degToRad($[3]);b.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:he,angle:Se});break}}return b}function gn(y){const b=y.getElementsByTagName("node");for(let E=0;E<b.length;E++){const A=b[E];A.hasAttribute("id")===!1&&A.setAttribute("id",l())}}const Ut=new nt,Tn=new H;function Nt(y){const b={name:y.getAttribute("name")||"",type:y.getAttribute("type"),id:y.getAttribute("id"),sid:y.getAttribute("sid"),matrix:new nt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];if(A.nodeType!==1)continue;let T;switch(A.nodeName){case"node":b.nodes.push(A.getAttribute("id")),Nt(A);break;case"instance_camera":b.instanceCameras.push(o(A.getAttribute("url")));break;case"instance_controller":b.instanceControllers.push(at(A));break;case"instance_light":b.instanceLights.push(o(A.getAttribute("url")));break;case"instance_geometry":b.instanceGeometries.push(at(A));break;case"instance_node":b.instanceNodes.push(o(A.getAttribute("url")));break;case"matrix":T=s(A.textContent),b.matrix.multiply(Ut.fromArray(T).transpose()),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"translate":T=s(A.textContent),Tn.fromArray(T),b.matrix.multiply(Ut.makeTranslation(Tn.x,Tn.y,Tn.z)),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"rotate":T=s(A.textContent);const $=$r.degToRad(T[3]);b.matrix.multiply(Ut.makeRotationAxis(Tn.fromArray(T),$)),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"scale":T=s(A.textContent),b.matrix.scale(Tn.fromArray(T)),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"extra":break;default:console.log(A)}}return tn(b.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",b.id):Ke.nodes[b.id]=b,b}function at(y){const b={id:o(y.getAttribute("url")),materials:{},skeletons:[]};for(let E=0;E<y.childNodes.length;E++){const A=y.childNodes[E];switch(A.nodeName){case"bind_material":const T=A.getElementsByTagName("instance_material");for(let $=0;$<T.length;$++){const he=T[$],ke=he.getAttribute("symbol"),Se=he.getAttribute("target");b.materials[ke]=o(Se)}break;case"skeleton":b.skeletons.push(o(A.textContent));break}}return b}function Zr(y,b){const E=[],A=[];let T,$,he;for(T=0;T<y.length;T++){const Ce=y[T];let Ve;if(tn(Ce))Ve=Cn(Ce),Vt(Ve,b,E);else if(Qr(Ce)){const Ge=Ke.visualScenes[Ce].children;for(let Ue=0;Ue<Ge.length;Ue++){const Ye=Ge[Ue];if(Ye.type==="JOINT"){const qe=Cn(Ye.id);Vt(qe,b,E)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ce)}for(T=0;T<b.length;T++)for($=0;$<E.length;$++)if(he=E[$],he.bone.name===b[T].name){A[T]=he,he.processed=!0;break}for(T=0;T<E.length;T++)he=E[T],he.processed===!1&&(A.push(he),he.processed=!0);const ke=[],Se=[];for(T=0;T<A.length;T++)he=A[T],ke.push(he.bone),Se.push(he.boneInverse);return new jo(ke,Se)}function Vt(y,b,E){y.traverse(function(A){if(A.isBone===!0){let T;for(let $=0;$<b.length;$++){const he=b[$];if(he.name===A.name){T=he.boneInverse;break}}T===void 0&&(T=new nt),E.push({bone:A,boneInverse:T,processed:!1})}})}function li(y){const b=[],E=y.matrix,A=y.nodes,T=y.type,$=y.instanceCameras,he=y.instanceControllers,ke=y.instanceLights,Se=y.instanceGeometries,Ce=y.instanceNodes;for(let ge=0,Ge=A.length;ge<Ge;ge++)b.push(Cn(A[ge]));for(let ge=0,Ge=$.length;ge<Ge;ge++){const Ue=Oe($[ge]);Ue!==null&&b.push(Ue.clone())}for(let ge=0,Ge=he.length;ge<Ge;ge++){const Ue=he[ge],Ye=te(Ue.id),qe=Bn(Ye.id),zt=or(qe,Ue.materials),At=Ue.skeletons,bt=Ye.skin.joints,yt=Zr(At,bt);for(let ci=0,In=zt.length;ci<In;ci++){const lr=zt[ci];lr.isSkinnedMesh&&(lr.bind(yt,Ye.skin.bindMatrix),lr.normalizeSkinWeights()),b.push(lr)}}for(let ge=0,Ge=ke.length;ge<Ge;ge++){const Ue=W(ke[ge]);Ue!==null&&b.push(Ue.clone())}for(let ge=0,Ge=Se.length;ge<Ge;ge++){const Ue=Se[ge],Ye=Bn(Ue.id),qe=or(Ye,Ue.materials);for(let zt=0,At=qe.length;zt<At;zt++)b.push(qe[zt])}for(let ge=0,Ge=Ce.length;ge<Ge;ge++)b.push(Cn(Ce[ge]).clone());let Ve;if(A.length===0&&b.length===1)Ve=b[0];else{Ve=T==="JOINT"?new nf:new ti;for(let ge=0;ge<b.length;ge++)Ve.add(b[ge])}return Ve.name=T==="JOINT"?y.sid:y.name,Ve.matrix.copy(E),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve}const Is=new Fr({color:16711935});function Ui(y,b){const E=[];for(let A=0,T=y.length;A<T;A++){const $=b[y[A]];$===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",y[A]),E.push(Is)):E.push(Be($))}return E}function or(y,b){const E=[];for(const A in y){const T=y[A],$=Ui(T.materialKeys,b);if($.length===0&&(A==="lines"||A==="linestrips"?$.push(new pa):$.push(new Lc)),A==="lines"||A==="linestrips")for(let Ce=0,Ve=$.length;Ce<Ve;Ce++){const ge=$[Ce];if(ge.isMeshPhongMaterial===!0||ge.isMeshLambertMaterial===!0){const Ge=new pa;Ge.color.copy(ge.color),Ge.opacity=ge.opacity,Ge.transparent=ge.transparent,$[Ce]=Ge}}const he=T.data.attributes.skinIndex!==void 0,ke=$.length===1?$[0]:$;let Se;switch(A){case"lines":Se=new af(T.data,ke);break;case"linestrips":Se=new sf(T.data,ke);break;case"triangles":case"polylist":he?Se=new Q_(T.data,ke):Se=new mn(T.data,ke);break}E.push(Se)}return E}function tn(y){return Ke.nodes[y]!==void 0}function Cn(y){return h(Ke.nodes[y],li)}function Jr(y){const b={name:y.getAttribute("name"),children:[]};gn(y);const E=n(y,"node");for(let A=0;A<E.length;A++)b.children.push(Nt(E[A]));Ke.visualScenes[y.getAttribute("id")]=b}function dn(y){const b=new ti;b.name=y.name;const E=y.children;for(let A=0;A<E.length;A++){const T=E[A];b.add(Cn(T.id))}return b}function Qr(y){return Ke.visualScenes[y]!==void 0}function Ls(y){return h(Ke.visualScenes[y],dn)}function Ds(y){const b=n(y,"instance_visual_scene")[0];return Ls(o(b.getAttribute("url")))}function Pf(){const y=Ke.clips;if(c(y)===!0){if(c(Ke.animations)===!1){const b=[];for(const E in Ke.animations){const A=M(E);for(let T=0,$=A.length;T<$;T++)b.push(A[T])}Ps.push(new Rc("default",-1,b))}}else for(const b in y)Ps.push(X(b))}function kf(y){let b="";const E=[y];for(;E.length;){const A=E.shift();A.nodeType===Node.TEXT_NODE?b+=A.textContent:(b+=`
`,E.push.apply(E,A.childNodes))}return b.trim()}if(e.length===0)return{scene:new tf};const il=new DOMParser().parseFromString(e,"application/xml"),Kt=n(il,"COLLADA")[0],Oa=il.getElementsByTagName("parsererror")[0];if(Oa!==void 0){const y=n(Oa,"div")[0];let b;return y?b=y.textContent:b=kf(Oa),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,b),null}const Nf=Kt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Nf);const rl=u(n(Kt,"asset")[0]),sl=new Po(this.manager);sl.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Ua;eu&&(Ua=new eu(this.manager),Ua.setPath(this.resourcePath||t));const Rs=new et,Ps=[];let al={},Ff=0;const Ke={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Kt,"library_animations","animation",p),m(Kt,"library_animation_clips","animation_clip",B),m(Kt,"library_controllers","controller",se),m(Kt,"library_images","image",F),m(Kt,"library_effects","effect",Pe),m(Kt,"library_materials","material",ye),m(Kt,"library_cameras","camera",z),m(Kt,"library_lights","light",ze),m(Kt,"library_geometries","geometry",ue),m(Kt,"library_nodes","node",Nt),m(Kt,"library_visual_scenes","visual_scene",Jr),m(Kt,"library_kinematics_models","kinematics_model",En),m(Kt,"library_physics_models","physics_model",me),m(Kt,"scene","instance_kinematics_scene",tt),g(Ke.animations,S),g(Ke.clips,J),g(Ke.controllers,re),g(Ke.images,oe),g(Ke.effects,L),g(Ke.materials,we),g(Ke.cameras,_e),g(Ke.lights,St),g(Ke.geometries,Yt),g(Ke.visualScenes,dn),Pf(),dt();const ks=Ds(n(Kt,"scene")[0]);return ks.animations=Ps,rl.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ks.rotation.set(-Math.PI/2,0,0)),ks.scale.multiplyScalar(rl.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Ps},kinematics:al,library:Ke,scene:ks}}}function Yv(r){let e,t=`<!-- include stl: ${r[0]} ${r[2]} -->`,n,i,s;return i=new rn({props:{type:mn,castShadow:!0,receiveShadow:!0,geometry:r[5],scale:r[2],position:r[4],rotation:r[3],$$slots:{default:[Kv]},$$scope:{ctx:r}}}),{c(){e=new nr(!1),n=Mt(),Ie(i.$$.fragment),this.h()},l(a){e=ir(a,!1),n=wt(a),Ne(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),Fe(a,n,o),Le(i,a,o),s=!0},p(a,o){(!s||o&5)&&t!==(t=`<!-- include stl: ${a[0]} ${a[2]} -->`)&&e.p(t);const l={};o&4&&(l.scale=a[2]),o&16&&(l.position=a[4]),o&8&&(l.rotation=a[3]),o&2050&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){s||(ie(i.$$.fragment,a),s=!0)},o(a){ce(i.$$.fragment,a),s=!1},d(a){a&&e.d(),a&&Ee(n),De(i,a)}}}function Kv(r){let e,t;return e=new rn({props:{type:Xo,color:r[1]}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.color=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Zv(r){let e,t,n=r[5]&&Yv(r);return{c(){n&&n.c(),e=Ze()},l(i){n&&n.l(i),e=Ze()},m(i,s){n&&n.m(i,s),Fe(i,e,s),t=!0},p(i,[s]){i[5]&&n.p(i,s)},i(i){t||(ie(n),t=!0)},o(i){ce(n),t=!1},d(i){n&&n.d(i),i&&Ee(e)}}}function Jv(r,e,t){let{filename:n}=e,{color:i=new et("pink")}=e,{scale:s=[1,1,1]}=e,{rotation:a=[1,1,1]}=e,{position:o=[1,1,1]}=e;const l=$i(),{invalidate:c}=Mn(),u=el(tu,()=>new tu);let f;const d=g=>{c("Collada: model loaded"),l("load",g)},m=g=>{console.error(g),l("error")};return r.$$set=g=>{"filename"in g&&t(0,n=g.filename),"color"in g&&t(1,i=g.color),"scale"in g&&t(2,s=g.scale),"rotation"in g&&t(3,a=g.rotation),"position"in g&&t(4,o=g.position)},r.$$.update=()=>{r.$$.dirty&1&&u.load(n,d,void 0,m)},[n,i,s,a,o,f]}class Qv extends gt{constructor(e){super(),_t(this,e,Jv,Zv,ht,{filename:0,color:1,scale:2,rotation:3,position:4})}}class nu extends Yr{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Yo(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){function t(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let h=0;h<5;h++)if(n(g,u,h))return!1;return!0}function n(c,u,f){for(let d=0,m=c.length;d<m;d++)if(c[d]!==u.getUint8(f+d))return!1;return!0}function i(c){const u=new DataView(c),f=u.getUint32(80,!0);let d,m,g,h=!1,p,_,x,S,M;for(let I=0;I<80-10;I++)u.getUint32(I,!1)==1129270351&&u.getUint8(I+4)==82&&u.getUint8(I+5)==61&&(h=!0,p=new Float32Array(f*3*3),_=u.getUint8(I+6)/255,x=u.getUint8(I+7)/255,S=u.getUint8(I+8)/255,M=u.getUint8(I+9)/255);const w=84,C=12*4+2,G=new kn,v=new Float32Array(f*3*3),D=new Float32Array(f*3*3);for(let I=0;I<f;I++){const j=w+I*C,K=u.getFloat32(j,!0),V=u.getFloat32(j+4,!0),U=u.getFloat32(j+8,!0);if(h){const O=u.getUint16(j+48,!0);O&32768?(d=_,m=x,g=S):(d=(O&31)/31,m=(O>>5&31)/31,g=(O>>10&31)/31)}for(let O=1;O<=3;O++){const B=j+O*12,J=I*3*3+(O-1)*3;v[J]=u.getFloat32(B,!0),v[J+1]=u.getFloat32(B+4,!0),v[J+2]=u.getFloat32(B+8,!0),D[J]=K,D[J+1]=V,D[J+2]=U,h&&(p[J]=d,p[J+1]=m,p[J+2]=g)}}return G.setAttribute("position",new zn(v,3)),G.setAttribute("normal",new zn(D,3)),h&&(G.setAttribute("color",new zn(p,3)),G.hasColors=!0,G.alpha=M),G}function s(c){const u=new kn,f=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g;let m=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,h=new RegExp("vertex"+g+g+g,"g"),p=new RegExp("normal"+g+g+g,"g"),_=[],x=[],S=new H;let M,w=0,C=0,G=0;for(;(M=f.exec(c))!==null;){C=G;const v=M[0];for(;(M=d.exec(v))!==null;){let j=0,K=0;const V=M[0];for(;(M=p.exec(V))!==null;)S.x=parseFloat(M[1]),S.y=parseFloat(M[2]),S.z=parseFloat(M[3]),K++;for(;(M=h.exec(V))!==null;)_.push(parseFloat(M[1]),parseFloat(M[2]),parseFloat(M[3])),x.push(S.x,S.y,S.z),j++,G++;K!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),j!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}const D=C,I=G-C;u.addGroup(D,I,w),w++}return u.setAttribute("position",new Pt(_,3)),u.setAttribute("normal",new Pt(x,3)),u}function a(c){return typeof c!="string"?hf.decodeText(new Uint8Array(c)):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=o(e);return t(l)?i(l):s(a(e))}}function iu(r){let e,t=`<!-- include stl: ${r[0]} ${r[2]} -->`,n,i,s;return i=new rn({props:{type:mn,castShadow:!0,receiveShadow:!0,geometry:r[5],scale:r[2],position:r[4],rotation:r[3],$$slots:{default:[$v]},$$scope:{ctx:r}}}),{c(){e=new nr(!1),n=Mt(),Ie(i.$$.fragment),this.h()},l(a){e=ir(a,!1),n=wt(a),Ne(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),Fe(a,n,o),Le(i,a,o),s=!0},p(a,o){(!s||o&5)&&t!==(t=`<!-- include stl: ${a[0]} ${a[2]} -->`)&&e.p(t);const l={};o&32&&(l.geometry=a[5]),o&4&&(l.scale=a[2]),o&16&&(l.position=a[4]),o&8&&(l.rotation=a[3]),o&2050&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){s||(ie(i.$$.fragment,a),s=!0)},o(a){ce(i.$$.fragment,a),s=!1},d(a){a&&e.d(),a&&Ee(n),De(i,a)}}}function $v(r){let e,t;return e=new rn({props:{type:Xo,color:r[1]}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.color=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function eb(r){let e,t,n=r[5]&&iu(r);return{c(){n&&n.c(),e=Ze()},l(i){n&&n.l(i),e=Ze()},m(i,s){n&&n.m(i,s),Fe(i,e,s),t=!0},p(i,[s]){i[5]?n?(n.p(i,s),s&32&&ie(n,1)):(n=iu(i),n.c(),ie(n,1),n.m(e.parentNode,e)):n&&(Jt(),ce(n,1,1,()=>{n=null}),Qt())},i(i){t||(ie(n),t=!0)},o(i){ce(n),t=!1},d(i){n&&n.d(i),i&&Ee(e)}}}function tb(r,e,t){let{filename:n}=e,{color:i=new et("pink")}=e,{scale:s=[1,1,1]}=e,{rotation:a=[1,1,1]}=e,{position:o=[1,1,1]}=e;const l=$i(),{invalidate:c}=Mn(),u=el(nu,()=>new nu);let f;const d=g=>{f&&l("unload"),t(5,f=g),c("STL: model loaded"),l("load",g)},m=g=>{console.error(g),l("error")};return r.$$set=g=>{"filename"in g&&t(0,n=g.filename),"color"in g&&t(1,i=g.color),"scale"in g&&t(2,s=g.scale),"rotation"in g&&t(3,a=g.rotation),"position"in g&&t(4,o=g.position)},r.$$.update=()=>{r.$$.dirty&1&&u.load(n,d,void 0,m)},[n,i,s,a,o,f]}class nb extends gt{constructor(e){super(),_t(this,e,tb,eb,ht,{filename:0,color:1,scale:2,rotation:3,position:4})}}function ib(r){let e,t;return e=new rn({props:{type:mn,castShadow:!0,receiveShadow:!0,scale:r[1],position:r[3],rotation:r[4],$$slots:{default:[ob]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.scale=n[1]),i&65&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function rb(r){let e,t,n,i;const s=[cb,lb],a=[];function o(l,c){return l[2].type==="stl"?0:l[2].type==="dae"?1:-1}return~(e=o(r))&&(t=a[e]=s[e](r)),{c(){t&&t.c(),n=Ze()},l(l){t&&t.l(l),n=Ze()},m(l,c){~e&&a[e].m(l,c),Fe(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?~e&&a[e].p(l,c):(t&&(Jt(),ce(a[u],1,1,()=>{a[u]=null}),Qt()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),ie(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(ie(t),i=!0)},o(l){ce(t),i=!1},d(l){~e&&a[e].d(l),l&&Ee(n)}}}function sb(r){let e,t;return e=new rn({props:{type:Hr}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p:It,i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function ab(r){let e,t;return e=new rn({props:{type:qo}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p:It,i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function ob(r){let e,t,n,i,s;const a=[ab,sb],o=[];function l(c,u){return c[0].type==="cylinder"?0:c[0].type==="box"?1:-1}return~(e=l(r))&&(t=o[e]=a[e](r)),i=new rn({props:{type:Fr,color:r[5]}}),{c(){t&&t.c(),n=Mt(),Ie(i.$$.fragment)},l(c){t&&t.l(c),n=wt(c),Ne(i.$$.fragment,c)},m(c,u){~e&&o[e].m(c,u),Fe(c,n,u),Le(i,c,u),s=!0},p(c,u){let f=e;e=l(c),e===f?~e&&o[e].p(c,u):(t&&(Jt(),ce(o[f],1,1,()=>{o[f]=null}),Qt()),~e?(t=o[e],t?t.p(c,u):(t=o[e]=a[e](c),t.c()),ie(t,1),t.m(n.parentNode,n)):t=null)},i(c){s||(ie(t),ie(i.$$.fragment,c),s=!0)},o(c){ce(t),ce(i.$$.fragment,c),s=!1},d(c){~e&&o[e].d(c),c&&Ee(n),De(i,c)}}}function lb(r){let e,t;return e=new Qv({props:{filename:r[2].filename,position:r[3],rotation:r[4],color:r[5],scale:r[1]}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.filename=n[2].filename),i&2&&(s.scale=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function cb(r){let e,t;return e=new nb({props:{filename:r[2].filename,position:r[3],rotation:r[4],color:r[5],scale:r[1]}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.filename=n[2].filename),i&2&&(s.scale=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function ub(r){let e,t,n,i;const s=[rb,ib],a=[];function o(l,c){return l[0].type==="mesh"?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=Ze()},l(l){t.l(l),n=Ze()},m(l,c){a[e].m(l,c),Fe(l,n,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(Jt(),ce(a[u],1,1,()=>{a[u]=null}),Qt(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),ie(t,1),t.m(n.parentNode,n))},i(l){i||(ie(t),i=!0)},o(l){ce(t),i=!1},d(l){a[e].d(l),l&&Ee(n)}}}function fb(r,e,t){let{visual:n}=e;const i=n.origin_xyz||[0,0,0],s=n.origin_rpy||[0,0,0],a=Xv(n.color_rgba);let o=[1,1,1],l;switch(n.type){case"mesh":l=n.geometry,o=l.scale;break}return r.$$set=c=>{"visual"in c&&t(0,n=c.visual)},[n,o,l,i,s,a]}class db extends gt{constructor(e){super(),_t(this,e,fb,ub,ht,{visual:0})}}function ru(r,e,t){const n=r.slice();return n[2]=e[t],n}function su(r,e,t){const n=r.slice();return n[5]=e[t],n}function au(r){let e,t;return e=new wf({props:{joint:r[5],parser:r[1]}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&3&&(s.joint=n[5]),i&2&&(s.parser=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function ou(r){let e,t,n,i;e=new db({props:{visual:r[2]}});let s=r[1].getChildJoints(r[0].child),a=[];for(let l=0;l<s.length;l+=1)a[l]=au(su(r,s,l));const o=l=>ce(a[l],1,1,()=>{a[l]=null});return{c(){Ie(e.$$.fragment),t=Mt();for(let l=0;l<a.length;l+=1)a[l].c();n=Ze()},l(l){Ne(e.$$.fragment,l),t=wt(l);for(let c=0;c<a.length;c+=1)a[c].l(l);n=Ze()},m(l,c){Le(e,l,c),Fe(l,t,c);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(l,c);Fe(l,n,c),i=!0},p(l,c){const u={};if(c&1&&(u.visual=l[2]),e.$set(u),c&3){s=l[1].getChildJoints(l[0].child);let f;for(f=0;f<s.length;f+=1){const d=su(l,s,f);a[f]?(a[f].p(d,c),ie(a[f],1)):(a[f]=au(d),a[f].c(),ie(a[f],1),a[f].m(n.parentNode,n))}for(Jt(),f=s.length;f<a.length;f+=1)o(f);Qt()}},i(l){if(!i){ie(e.$$.fragment,l);for(let c=0;c<s.length;c+=1)ie(a[c]);i=!0}},o(l){ce(e.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)ce(a[c]);i=!1},d(l){De(e,l),l&&Ee(t),xs(a,l),l&&Ee(n)}}}function hb(r){let e,t,n=r[0].child.visual,i=[];for(let a=0;a<n.length;a+=1)i[a]=ou(ru(r,n,a));const s=a=>ce(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Ze()},l(a){for(let o=0;o<i.length;o+=1)i[o].l(a);e=Ze()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);Fe(a,e,o),t=!0},p(a,o){if(o&3){n=a[0].child.visual;let l;for(l=0;l<n.length;l+=1){const c=ru(a,n,l);i[l]?(i[l].p(c,o),ie(i[l],1)):(i[l]=ou(c),i[l].c(),ie(i[l],1),i[l].m(e.parentNode,e))}for(Jt(),l=n.length;l<i.length;l+=1)s(l);Qt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)ie(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)ce(i[o]);t=!1},d(a){xs(i,a),a&&Ee(e)}}}function pb(r){let e,t=`<!-- Joint ${r[0].name} -->`,n,i,s;return i=new rn({props:{type:ti,rotation:r[0].origin_rpy,position:r[0].origin_xyz,$$slots:{default:[hb]},$$scope:{ctx:r}}}),{c(){e=new nr(!1),n=Mt(),Ie(i.$$.fragment),this.h()},l(a){e=ir(a,!1),n=wt(a),Ne(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),Fe(a,n,o),Le(i,a,o),s=!0},p(a,[o]){(!s||o&1)&&t!==(t=`<!-- Joint ${a[0].name} -->`)&&e.p(t);const l={};o&1&&(l.rotation=a[0].origin_rpy),o&1&&(l.position=a[0].origin_xyz),o&259&&(l.$$scope={dirty:o,ctx:a}),i.$set(l)},i(a){s||(ie(i.$$.fragment,a),s=!0)},o(a){ce(i.$$.fragment,a),s=!1},d(a){a&&e.d(),a&&Ee(n),De(i,a)}}}function mb(r,e,t){let{joint:n}=e,{parser:i}=e;return r.$$set=s=>{"joint"in s&&t(0,n=s.joint),"parser"in s&&t(1,i=s.parser)},[n,i]}class wf extends gt{constructor(e){super(),_t(this,e,mb,pb,ht,{joint:0,parser:1})}}function lu(r,e,t){const n=r.slice();return n[3]=e[t],n}function cu(r){let e,t;return e=new wf({props:{joint:r[3],parser:r[1]}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.joint=n[3]),i&2&&(s.parser=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function gb(r){let e,t,n=r[1].getRootJoints(),i=[];for(let a=0;a<n.length;a+=1)i[a]=cu(lu(r,n,a));const s=a=>ce(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Ze()},l(a){for(let o=0;o<i.length;o+=1)i[o].l(a);e=Ze()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);Fe(a,e,o),t=!0},p(a,o){if(o&2){n=a[1].getRootJoints();let l;for(l=0;l<n.length;l+=1){const c=lu(a,n,l);i[l]?(i[l].p(c,o),ie(i[l],1)):(i[l]=cu(c),i[l].c(),ie(i[l],1),i[l].m(e.parentNode,e))}for(Jt(),l=n.length;l<i.length;l+=1)s(l);Qt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)ie(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)ce(i[o]);t=!1},d(a){xs(i,a),a&&Ee(e)}}}function _b(r){let e,t;return e=new rn({props:{type:ti,position:r[2],quaternion:r[0],$$slots:{default:[gb]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,[i]){const s={};i&4&&(s.position=n[2]),i&1&&(s.quaternion=n[0]),i&66&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function vb(r,e,t){let{parser:n}=e,{position:i=[0,0,0]}=e,{quaternion:s=void 0}=e;if(!s){const a=new ri;a.setFromAxisAngle(new H(-1,0,0),Math.PI*.5),s=[a.x,a.y,a.z,a.w]}return r.$$set=a=>{"parser"in a&&t(1,n=a.parser),"position"in a&&t(2,i=a.position),"quaternion"in a&&t(0,s=a.quaternion)},[s,n,i]}class bb extends gt{constructor(e){super(),_t(this,e,vb,_b,ht,{parser:1,position:2,quaternion:0})}}new H;new H;new H;const yb={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

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

		}`},xb={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

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

		}`},Hi=r=>{let e=!1;const t=an(r());return{...t,memoize:(...i)=>{if(!e){e=!0;return}t.set(r())}}};function Sb(r){let e,t,n,i;return e=new Av({props:{material:r[19],geometry:r[9],renderOrder:r[7],scale:{y:-1},rotation:{x:-Math.PI/2}}}),n=new fv({props:{camera:r[18],useCamera:!1}}),{c(){Ie(e.$$.fragment),t=Mt(),Ie(n.$$.fragment)},l(s){Ne(e.$$.fragment,s),t=wt(s),Ne(n.$$.fragment,s)},m(s,a){Le(e,s,a),Fe(s,t,a),Le(n,s,a),i=!0},p(s,a){const o={};a[0]&512&&(o.geometry=s[9]),a[0]&128&&(o.renderOrder=s[7]),e.$set(o)},i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){ce(e.$$.fragment,s),ce(n.$$.fragment,s),i=!1},d(s){De(e,s),s&&Ee(t),De(n,s)}}}function Mb(r){let e,t,n;function i(a){r[35](a)}let s={rotation:r[10],position:r[1],lookAt:r[2],viewportAware:r[3],castShadow:r[4],receiveShadow:r[5],frustumCulled:r[6],visible:r[8],renderOrder:r[7],$$slots:{default:[Sb]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new Iv({props:s}),Rn.push(()=>Gr(e,"inViewport",i)),e.$on("viewportenter",r[36]),e.$on("viewportleave",r[37]),{c(){Ie(e.$$.fragment)},l(a){Ne(e.$$.fragment,a)},m(a,o){Le(e,a,o),n=!0},p(a,o){const l={};o[0]&1024&&(l.rotation=a[10]),o[0]&2&&(l.position=a[1]),o[0]&4&&(l.lookAt=a[2]),o[0]&8&&(l.viewportAware=a[3]),o[0]&16&&(l.castShadow=a[4]),o[0]&32&&(l.receiveShadow=a[5]),o[0]&64&&(l.frustumCulled=a[6]),o[0]&256&&(l.visible=a[8]),o[0]&128&&(l.renderOrder=a[7]),o[0]&640|o[1]&262144&&(l.$$scope={dirty:o,ctx:a}),!t&&o[0]&1&&(t=!0,l.inViewport=a[0],Vr(()=>t=!1)),e.$set(l)},i(a){n||(ie(e.$$.fragment,a),n=!0)},o(a){ce(e.$$.fragment,a),n=!1},d(a){De(e,a)}}}function wb(r,e,t){let n,i,s,a,o,l,c,{position:u=void 0}=e,{rotation:f=void 0}=e,{lookAt:d=void 0}=e,{viewportAware:m=!1}=e,{inViewport:g=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:x=void 0}=e,{visible:S=void 0}=e,{opacity:M=1}=e,{width:w=1}=e,{height:C=1}=e,{blur:G=1}=e,{far:v=10}=e,{smooth:D=!0}=e,{resolution:I=512}=e,{frames:j=1/0}=e,{scale:K=10}=e,{color:V="#000000"}=e,{depthWrite:U=!1}=e;const{scene:O,renderer:B}=Mn();if(!B)throw new Error("ContactShadow: WebGLRenderer is undefined, is this component a child of <Canvas>?");const J=Hi(()=>w*(Array.isArray(K)?K[0]:K||1));Rt(r,J,ee=>t(34,c=ee));const X=Hi(()=>C*(Array.isArray(K)?K[1]:K||1));Rt(r,X,ee=>t(33,l=ee));const se=Hi(()=>{const ee=new ii(I,I);return ee.texture.generateMipmaps=!1,ee.texture.encoding=B.outputEncoding,ee});Rt(r,se,ee=>t(44,a=ee));const ne=Hi(()=>{const ee=new ii(I,I);return ee.texture.generateMipmaps=!1,ee});Rt(r,ne,ee=>t(43,s=ee));const R=Hi(()=>new _0(c,l).rotateX(Math.PI/2));Rt(r,R,ee=>t(9,i=ee));const q=Hi(()=>new mn(i));Rt(r,q,ee=>t(45,o=ee));const re=Hi(()=>{const ee=new $u({depthTest:!1,depthWrite:!1});return ee.onBeforeCompile=je=>{je.uniforms={...je.uniforms,uColor:{value:new et(V).convertSRGBToLinear()}},je.fragmentShader=`uniform vec3 uColor;
`+je.fragmentShader,je.fragmentShader=je.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),je.fragmentShader=je.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},ee});Rt(r,re,ee=>t(42,n=ee));const Q=new Zn({...yb,depthTest:!1}),te=new Zn({...xb,depthTest:!1}),F=new Es(-c/2,c/2,l/2,-l/2,0,v);F.updateProjectionMatrix();const oe=new Fr({map:a.texture,transparent:!0,opacity:M,depthWrite:U}),be=ee=>{const je=o;je.visible=!0,je.material=Q,Q.uniforms.tDiffuse.value=a.texture,Q.uniforms.h.value=ee*1/256,B.setRenderTarget(s),B.render(je,F),je.material=te,te.uniforms.tDiffuse.value=s.texture,te.uniforms.v.value=ee*1/256,B.setRenderTarget(a),B.render(je,F),je.visible=!1},Pe=()=>{const ee=O.background;O.background=null;const je=O.overrideMaterial;O.overrideMaterial=n;const xt=B.getClearAlpha();B.setClearAlpha(0),B.setRenderTarget(a),B.render(O,F),O.overrideMaterial=je,be(G),D&&be(G*.4),B.setRenderTarget(null),O.background=ee,B.setClearAlpha(xt)},Me=()=>{Pe()};let $e=0;Da(()=>{(j===1/0||$e<j)&&(Pe(),$e+=1)}),Tt(()=>{a.dispose(),s.dispose(),i.dispose(),n.dispose(),Q.dispose(),te.dispose(),oe.dispose()});let We={...f,x:(f==null?void 0:f.x)??0+Math.PI/2};function Te(ee){g=ee,t(0,g)}function Dt(ee){Ct.call(this,r,ee)}function pe(ee){Ct.call(this,r,ee)}return r.$$set=ee=>{"position"in ee&&t(1,u=ee.position),"rotation"in ee&&t(20,f=ee.rotation),"lookAt"in ee&&t(2,d=ee.lookAt),"viewportAware"in ee&&t(3,m=ee.viewportAware),"inViewport"in ee&&t(0,g=ee.inViewport),"castShadow"in ee&&t(4,h=ee.castShadow),"receiveShadow"in ee&&t(5,p=ee.receiveShadow),"frustumCulled"in ee&&t(6,_=ee.frustumCulled),"renderOrder"in ee&&t(7,x=ee.renderOrder),"visible"in ee&&t(8,S=ee.visible),"opacity"in ee&&t(21,M=ee.opacity),"width"in ee&&t(22,w=ee.width),"height"in ee&&t(23,C=ee.height),"blur"in ee&&t(24,G=ee.blur),"far"in ee&&t(25,v=ee.far),"smooth"in ee&&t(26,D=ee.smooth),"resolution"in ee&&t(27,I=ee.resolution),"frames"in ee&&t(28,j=ee.frames),"scale"in ee&&t(29,K=ee.scale),"color"in ee&&t(30,V=ee.color),"depthWrite"in ee&&t(31,U=ee.depthWrite)},r.$$.update=()=>{r.$$.dirty[0]&541065216&&J.memoize([w,K]),r.$$.dirty[0]&545259520&&X.memoize(C,K),r.$$.dirty[0]&134217728&&se.memoize(I),r.$$.dirty[0]&134217728&&ne.memoize(I),r.$$.dirty[1]&12&&R.memoize(c,l),r.$$.dirty[0]&512&&q.memoize(i),r.$$.dirty[0]&1073741824&&re.memoize(V),r.$$.dirty[0]&1048576&&t(10,We={...f,x:(f==null?void 0:f.x)??0+Math.PI/2})},[g,u,d,m,h,p,_,x,S,i,We,J,X,se,ne,R,q,re,F,oe,f,M,w,C,G,v,D,I,j,K,V,U,Me,l,c,Te,Dt,pe]}class Ab extends gt{constructor(e){super(),_t(this,e,wb,Mb,ht,{position:1,rotation:20,lookAt:2,viewportAware:3,inViewport:0,castShadow:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,opacity:21,width:22,height:23,blur:24,far:25,smooth:26,resolution:27,frames:28,scale:29,color:30,depthWrite:31,refresh:32},null,[-1,-1])}get refresh(){return this.$$.ctx[32]}}function uu(r){let e,t;return e=new Ab({props:{scale:r[1]*4,far:r[1],blur:2}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.scale=n[1]*4),i&2&&(s.far=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Eb(r){let e,t,n=r[2]&&uu(r);return{c(){n&&n.c(),e=Ze()},l(i){n&&n.l(i),e=Ze()},m(i,s){n&&n.m(i,s),Fe(i,e,s),t=!0},p(i,s){i[2]?n?(n.p(i,s),s&4&&ie(n,1)):(n=uu(i),n.c(),ie(n,1),n.m(e.parentNode,e)):n&&(Jt(),ce(n,1,1,()=>{n=null}),Qt())},i(i){t||(ie(n),t=!0)},o(i){ce(n),t=!1},d(i){n&&n.d(i),i&&Ee(e)}}}function Tb(r){let e,t,n,i,s,a,o,l;return e=new rn({props:{type:df,intensity:r[0]/3}}),n=new rn({props:{type:ff,penumbra:1,position:[r[8].main[0]*r[1],r[8].main[1]*r[1],r[8].main[2]*r[1]],intensity:r[0]*2,castShadow:r[2],"shadow-bias":r[3],"shadow-normalBias":r[4],"shadow-mapSize":r[5]}}),s=new rn({props:{type:hs,position:[r[8].fill[0]*r[1],r[8].fill[1]*r[1],r[8].fill[2]*r[1]],intensity:r[0]}}),o=new rn({props:{type:ti,position:[0,-r[6]/2-r[7]/2,0],$$slots:{default:[Eb]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment),t=Mt(),Ie(n.$$.fragment),i=Mt(),Ie(s.$$.fragment),a=Mt(),Ie(o.$$.fragment)},l(c){Ne(e.$$.fragment,c),t=wt(c),Ne(n.$$.fragment,c),i=wt(c),Ne(s.$$.fragment,c),a=wt(c),Ne(o.$$.fragment,c)},m(c,u){Le(e,c,u),Fe(c,t,u),Le(n,c,u),Fe(c,i,u),Le(s,c,u),Fe(c,a,u),Le(o,c,u),l=!0},p(c,[u]){const f={};u&1&&(f.intensity=c[0]/3),e.$set(f);const d={};u&2&&(d.position=[c[8].main[0]*c[1],c[8].main[1]*c[1],c[8].main[2]*c[1]]),u&1&&(d.intensity=c[0]*2),u&4&&(d.castShadow=c[2]),u&8&&(d["shadow-bias"]=c[3]),u&16&&(d["shadow-normalBias"]=c[4]),u&32&&(d["shadow-mapSize"]=c[5]),n.$set(d);const m={};u&2&&(m.position=[c[8].fill[0]*c[1],c[8].fill[1]*c[1],c[8].fill[2]*c[1]]),u&1&&(m.intensity=c[0]),s.$set(m);const g={};u&192&&(g.position=[0,-c[6]/2-c[7]/2,0]),u&2054&&(g.$$scope={dirty:u,ctx:c}),o.$set(g)},i(c){l||(ie(e.$$.fragment,c),ie(n.$$.fragment,c),ie(s.$$.fragment,c),ie(o.$$.fragment,c),l=!0)},o(c){ce(e.$$.fragment,c),ce(n.$$.fragment,c),ce(s.$$.fragment,c),ce(o.$$.fragment,c),l=!1},d(c){De(e,c),c&&Ee(t),De(n,c),c&&Ee(i),De(s,c),c&&Ee(a),De(o,c)}}}function Cb(r,e,t){let{intensity:n=.5}=e,{radius:i=1}=e,{shadows:s=!0}=e,{preset_name:a="rembrandt"}=e,{shadowBias:o=-1e-4}=e,{normalBias:l=0}=e,{shadowSize:c=256}=e,{height:u=1}=e,{shadowOffset:f=1}=e;const m={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}}[a];return r.$$set=g=>{"intensity"in g&&t(0,n=g.intensity),"radius"in g&&t(1,i=g.radius),"shadows"in g&&t(2,s=g.shadows),"preset_name"in g&&t(9,a=g.preset_name),"shadowBias"in g&&t(3,o=g.shadowBias),"normalBias"in g&&t(4,l=g.normalBias),"shadowSize"in g&&t(5,c=g.shadowSize),"height"in g&&t(6,u=g.height),"shadowOffset"in g&&t(7,f=g.shadowOffset)},[n,i,s,o,l,c,u,f,m,a]}class Ib extends gt{constructor(e){super(),_t(this,e,Cb,Tb,ht,{intensity:0,radius:1,shadows:2,preset_name:9,shadowBias:3,normalBias:4,shadowSize:5,height:6,shadowOffset:7})}}function Lb(r,e,t){let{size:n=10}=e,{divisions:i=10}=e,{position:s=[0,0,0]}=e;const{scene:a,invalidate:o}=Mn(),l=new g0(n,i);return l.position.x=s[0],l.position.y=s[1],l.position.z=s[2],a.add(l),Tt(()=>{a.remove(l)}),r.$$set=c=>{"size"in c&&t(0,n=c.size),"divisions"in c&&t(1,i=c.divisions),"position"in c&&t(2,s=c.position)},[n,i,s]}class Db extends gt{constructor(e){super(),_t(this,e,Lb,null,ht,{size:0,divisions:1,position:2})}}var No=function(r,e){return No=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},No(r,e)};function Ra(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");No(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bi=function(){return bi=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},bi.apply(this,arguments)};function na(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function fu(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),i,s=[],a;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)s.push(i.value)}catch(o){a={error:o}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return s}function Rb(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,s;n<i;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return r.concat(s||Array.prototype.slice.call(e))}/**
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
 */var tl=function(){function r(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
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
 */var Mo="mdc-dom-focus-sentinel",Pb=function(){function r(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return r.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},r.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+Mo)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},r.prototype.wrapTabFocus=function(e){var t=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",function(){var s=t.getFocusableElements(e);s.length>0&&s[s.length-1].focus()}),i.addEventListener("focus",function(){var s=t.getFocusableElements(e);s.length>0&&s[0].focus()}),e.insertBefore(n,e.children[0]),e.appendChild(i)},r.prototype.focusInitialElement=function(e,t){var n=0;t&&(n=Math.max(e.indexOf(t),0)),e[n].focus()},r.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(n){var i=n.getAttribute("aria-disabled")==="true"||n.getAttribute("disabled")!=null||n.getAttribute("hidden")!=null||n.getAttribute("aria-hidden")==="true",s=n.tabIndex>=0&&n.getBoundingClientRect().width>0&&!n.classList.contains(Mo)&&!i,a=!1;if(s){var o=getComputedStyle(n);a=o.display==="none"||o.visibility==="hidden"}return s&&!a})},r.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(Mo),e},r}();const kb=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:Pb},Symbol.toStringTag,{value:"Module"}));/**
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
 */function Nb(r,e){if(r.closest)return r.closest(e);for(var t=r;t;){if(Af(t,e))return t;t=t.parentElement}return null}function Af(r,e){var t=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return t.call(r,e)}function Fb(r){var e=r;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const Ef=Object.freeze(Object.defineProperty({__proto__:null,closest:Nb,estimateScrollWidth:Fb,matches:Af},Symbol.toStringTag,{value:"Module"}));/**
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
 */var Ei,gi,mt={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Ei={},Ei[""+mt.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Ei[""+mt.LIST_ITEM_CLASS]="mdc-list-item",Ei[""+mt.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Ei[""+mt.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Ei[""+mt.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Ei[""+mt.ROOT]="mdc-list";var Er=(gi={},gi[""+mt.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",gi[""+mt.LIST_ITEM_CLASS]="mdc-deprecated-list-item",gi[""+mt.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",gi[""+mt.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",gi[""+mt.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",gi[""+mt.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",gi[""+mt.ROOT]="mdc-deprecated-list",gi),Ti={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+mt.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+mt.LIST_ITEM_CLASS+` a,
    .`+Er[mt.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Er[mt.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+mt.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+mt.LIST_ITEM_CLASS+` a,
    .`+mt.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+mt.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Er[mt.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Er[mt.LIST_ITEM_CLASS]+` a,
    .`+Er[mt.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Er[mt.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
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
 */var ot={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},wn=new Set;wn.add(ot.BACKSPACE);wn.add(ot.ENTER);wn.add(ot.SPACEBAR);wn.add(ot.PAGE_UP);wn.add(ot.PAGE_DOWN);wn.add(ot.END);wn.add(ot.HOME);wn.add(ot.ARROW_LEFT);wn.add(ot.ARROW_UP);wn.add(ot.ARROW_RIGHT);wn.add(ot.ARROW_DOWN);wn.add(ot.DELETE);wn.add(ot.ESCAPE);wn.add(ot.TAB);var Nn={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},An=new Map;An.set(Nn.BACKSPACE,ot.BACKSPACE);An.set(Nn.ENTER,ot.ENTER);An.set(Nn.SPACEBAR,ot.SPACEBAR);An.set(Nn.PAGE_UP,ot.PAGE_UP);An.set(Nn.PAGE_DOWN,ot.PAGE_DOWN);An.set(Nn.END,ot.END);An.set(Nn.HOME,ot.HOME);An.set(Nn.ARROW_LEFT,ot.ARROW_LEFT);An.set(Nn.ARROW_UP,ot.ARROW_UP);An.set(Nn.ARROW_RIGHT,ot.ARROW_RIGHT);An.set(Nn.ARROW_DOWN,ot.ARROW_DOWN);An.set(Nn.DELETE,ot.DELETE);An.set(Nn.ESCAPE,ot.ESCAPE);An.set(Nn.TAB,ot.TAB);var Oi=new Set;Oi.add(ot.PAGE_UP);Oi.add(ot.PAGE_DOWN);Oi.add(ot.END);Oi.add(ot.HOME);Oi.add(ot.ARROW_LEFT);Oi.add(ot.ARROW_UP);Oi.add(ot.ARROW_RIGHT);Oi.add(ot.ARROW_DOWN);function pn(r){var e=r.key;if(wn.has(e))return e;var t=An.get(r.keyCode);return t||ot.UNKNOWN}/**
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
 */var Ob=["input","button","textarea","select"],Vn=function(r){var e=r.target;if(e){var t=(""+e.tagName).toLowerCase();Ob.indexOf(t)===-1&&r.preventDefault()}};/**
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
 */function Ub(){var r={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return r}function zb(r,e){for(var t=new Map,n=0;n<r;n++){var i=e(n).trim();if(i){var s=i[0].toLowerCase();t.has(s)||t.set(s,[]),t.get(s).push({text:i.toLowerCase(),index:n})}}return t.forEach(function(a){a.sort(function(o,l){return o.index-l.index})}),t}function Fo(r,e){var t=r.nextChar,n=r.focusItemAtIndex,i=r.sortedIndexByFirstChar,s=r.focusedItemIndex,a=r.skipFocus,o=r.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Cf(e)},Ht.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var l;return e.typeaheadBuffer.length===1?l=Bb(i,s,o,e):l=Gb(i,o,e),l!==-1&&!a&&n(l),l}function Bb(r,e,t,n){var i=n.typeaheadBuffer[0],s=r.get(i);if(!s)return-1;if(i===n.currentFirstChar&&s[n.sortedIndexCursor].index===e){n.sortedIndexCursor=(n.sortedIndexCursor+1)%s.length;var a=s[n.sortedIndexCursor].index;if(!t(a))return a}n.currentFirstChar=i;var o=-1,l;for(l=0;l<s.length;l++)if(!t(s[l].index)){o=l;break}for(;l<s.length;l++)if(s[l].index>e&&!t(s[l].index)){o=l;break}return o!==-1?(n.sortedIndexCursor=o,s[n.sortedIndexCursor].index):-1}function Gb(r,e,t){var n=t.typeaheadBuffer[0],i=r.get(n);if(!i)return-1;var s=i[t.sortedIndexCursor];if(s.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(s.index))return s.index;for(var a=(t.sortedIndexCursor+1)%i.length,o=-1;a!==t.sortedIndexCursor;){var l=i[a],c=l.text.lastIndexOf(t.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){o=a;break}a=(a+1)%i.length}return o!==-1?(t.sortedIndexCursor=o,i[t.sortedIndexCursor].index):-1}function Tf(r){return r.typeaheadBuffer.length>0}function Cf(r){r.typeaheadBuffer=""}function du(r,e){var t=r.event,n=r.isTargetListItem,i=r.focusedItemIndex,s=r.focusItemAtIndex,a=r.sortedIndexByFirstChar,o=r.isItemAtIndexDisabled,l=pn(t)==="ArrowLeft",c=pn(t)==="ArrowUp",u=pn(t)==="ArrowRight",f=pn(t)==="ArrowDown",d=pn(t)==="Home",m=pn(t)==="End",g=pn(t)==="Enter",h=pn(t)==="Spacebar";if(t.altKey||t.ctrlKey||t.metaKey||l||c||u||f||d||m||g)return-1;var p=!h&&t.key.length===1;if(p){Vn(t);var _={focusItemAtIndex:s,focusedItemIndex:i,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return Fo(_,e)}if(!h)return-1;n&&Vn(t);var x=n&&Tf(e);if(x){var _={focusItemAtIndex:s,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return Fo(_,e)}return-1}/**
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
 */function Vb(r){return r instanceof Array}var Hb=["Alt","Control","Meta","Shift"];function hu(r){var e=new Set(r?Hb.filter(function(t){return r.getModifierState(t)}):[]);return function(t){return t.every(function(n){return e.has(n)})&&t.length===e.size}}var Wb=function(r){Ra(e,r);function e(t){var n=r.call(this,bi(bi({},e.defaultAdapter),t))||this;return n.wrapFocus=!1,n.isVertical=!0,n.isSingleSelectionList=!1,n.areDisabledItemsFocusable=!0,n.selectedIndex=Ht.UNSET_INDEX,n.focusedItemIndex=Ht.UNSET_INDEX,n.useActivatedClass=!1,n.useSelectedAttr=!1,n.ariaCurrentAttrValue=null,n.isCheckboxList=!1,n.isRadioList=!1,n.lastSelectedIndex=null,n.hasTypeahead=!1,n.typeaheadState=Ub(),n.sortedIndexByFirstChar=new Map,n}return Object.defineProperty(e,"strings",{get:function(){return Ti},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return mt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},notifySelectionChange:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.setDisabledItemsFocusable=function(t){this.areDisabledItemsFocusable=t},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==Ht.UNSET_INDEX){var n=this.adapter.listItemAtIndexHasClass(t,mt.LIST_ITEM_ACTIVATED_CLASS);n&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=Ht.UNSET_INDEX,n=this.adapter.getListItemCount(),i=0;i<n;i++){var s=this.adapter.listItemAtIndexHasClass(i,mt.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(i,mt.LIST_ITEM_ACTIVATED_CLASS);if(s||a){t=i;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Tf(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,n){n===void 0&&(n={}),this.isIndexValid(t)&&(this.isCheckboxList?this.setCheckboxAtIndex(t,n):this.isRadioList?this.setRadioAtIndex(t,n):this.setSingleSelectionAtIndex(t,n))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var n=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.isIndexDisabled=function(t){return this.adapter.listItemAtIndexHasClass(t,mt.LIST_ITEM_DISABLED_CLASS)},e.prototype.handleKeydown=function(t,n,i){var s=this,a,o=pn(t)==="ArrowLeft",l=pn(t)==="ArrowUp",c=pn(t)==="ArrowRight",u=pn(t)==="ArrowDown",f=pn(t)==="Home",d=pn(t)==="End",m=pn(t)==="Enter",g=pn(t)==="Spacebar",h=this.isVertical&&u||!this.isVertical&&c,p=this.isVertical&&l||!this.isVertical&&o,_=t.key==="A"||t.key==="a",x=hu(t);if(this.adapter.isRootFocused()){if((p||d)&&x([]))t.preventDefault(),this.focusLastElement();else if((h||f)&&x([]))t.preventDefault(),this.focusFirstElement();else if(p&&x(["Shift"])&&this.isCheckboxList){t.preventDefault();var S=this.focusLastElement();S!==-1&&this.setSelectedIndexOnAction(S,!1)}else if(h&&x(["Shift"])&&this.isCheckboxList){t.preventDefault();var S=this.focusFirstElement();S!==-1&&this.setSelectedIndexOnAction(S,!1)}if(this.hasTypeahead){var M={event:t,focusItemAtIndex:function(G){s.focusItemAtIndex(G)},focusedItemIndex:-1,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(G){return s.isIndexDisabled(G)}};du(M,this.typeaheadState)}return}var w=this.adapter.getFocusedElementIndex();if(!(w===-1&&(w=i,w<0))){if(h&&x([]))Vn(t),this.focusNextElement(w);else if(p&&x([]))Vn(t),this.focusPrevElement(w);else if(h&&x(["Shift"])&&this.isCheckboxList){Vn(t);var S=this.focusNextElement(w);S!==-1&&this.setSelectedIndexOnAction(S,!1)}else if(p&&x(["Shift"])&&this.isCheckboxList){Vn(t);var S=this.focusPrevElement(w);S!==-1&&this.setSelectedIndexOnAction(S,!1)}else if(f&&x([]))Vn(t),this.focusFirstElement();else if(d&&x([]))Vn(t),this.focusLastElement();else if(f&&x(["Control","Shift"])&&this.isCheckboxList){if(Vn(t),this.isIndexDisabled(w))return;this.focusFirstElement(),this.toggleCheckboxRange(0,w,w)}else if(d&&x(["Control","Shift"])&&this.isCheckboxList){if(Vn(t),this.isIndexDisabled(w))return;this.focusLastElement(),this.toggleCheckboxRange(w,this.adapter.getListItemCount()-1,w)}else if(_&&x(["Control"])&&this.isCheckboxList)t.preventDefault(),this.checkboxListToggleAll(this.selectedIndex===Ht.UNSET_INDEX?[]:this.selectedIndex,!0);else if((m||g)&&x([])){if(n){var C=t.target;if(C&&C.tagName==="A"&&m||(Vn(t),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(w,!1),this.adapter.notifyAction(w))}}else if((m||g)&&x(["Shift"])&&this.isCheckboxList){var C=t.target;if(C&&C.tagName==="A"&&m||(Vn(t),this.isIndexDisabled(w)))return;this.isTypeaheadInProgress()||(this.toggleCheckboxRange((a=this.lastSelectedIndex)!==null&&a!==void 0?a:w,w,w),this.adapter.notifyAction(w))}if(this.hasTypeahead){var M={event:t,focusItemAtIndex:function(v){s.focusItemAtIndex(v)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(v){return s.isIndexDisabled(v)}};du(M,this.typeaheadState)}}},e.prototype.handleClick=function(t,n,i){var s,a=hu(i);t!==Ht.UNSET_INDEX&&(this.isIndexDisabled(t)||(a([])?(this.isSelectableList()&&this.setSelectedIndexOnAction(t,n),this.adapter.notifyAction(t)):this.isCheckboxList&&a(["Shift"])&&(this.toggleCheckboxRange((s=this.lastSelectedIndex)!==null&&s!==void 0?s:t,t,t),this.adapter.notifyAction(t))))},e.prototype.focusNextElement=function(t){var n=this.adapter.getListItemCount(),i=t,s=null;do{if(i++,i>=n)if(this.wrapFocus)i=0;else return t;if(i===s)return-1;s=s??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusPrevElement=function(t){var n=this.adapter.getListItemCount(),i=t,s=null;do{if(i--,i<0)if(this.wrapFocus)i=n-1;else return t;if(i===s)return-1;s=s??i}while(!this.areDisabledItemsFocusable&&this.isIndexDisabled(i));return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusNextElement(-1)},e.prototype.focusLastElement=function(){return this.focusPrevElement(this.adapter.getListItemCount())},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,n){this.isIndexValid(t,!1)&&(n?(this.adapter.removeClassForElementIndex(t,mt.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,Ti.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,mt.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,Ti.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,n){if(n===void 0&&(n={}),!(this.selectedIndex===t&&!n.forceUpdate)){var i=mt.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(i=mt.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Ht.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,i),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==Ht.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,i),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t])}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===Ht.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,Ti.ARIA_CURRENT));var n=this.ariaCurrentAttrValue!==null,i=n?Ti.ARIA_CURRENT:Ti.ARIA_SELECTED;if(this.selectedIndex!==Ht.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),t!==Ht.UNSET_INDEX){var s=n?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,i,s)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Ti.ARIA_SELECTED:Ti.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t,n){n===void 0&&(n={});var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),!(this.selectedIndex===t&&!n.forceUpdate)&&(this.selectedIndex!==Ht.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex=t,n.isUserInteraction&&!n.forceUpdate&&this.adapter.notifySelectionChange([t]))},e.prototype.setCheckboxAtIndex=function(t,n){n===void 0&&(n={});for(var i=this.selectedIndex,s=n.isUserInteraction?new Set(i===Ht.UNSET_INDEX?[]:i):null,a=this.getSelectionAttribute(),o=[],l=0;l<this.adapter.getListItemCount();l++){var c=s==null?void 0:s.has(l),u=t.indexOf(l)>=0;u!==c&&o.push(l),this.adapter.setCheckedCheckboxOrRadioAtIndex(l,u),this.adapter.setAttributeForElementIndex(l,a,u?"true":"false")}this.selectedIndex=t,n.isUserInteraction&&o.length&&this.adapter.notifySelectionChange(o)},e.prototype.toggleCheckboxRange=function(t,n,i){this.lastSelectedIndex=i;for(var s=new Set(this.selectedIndex===Ht.UNSET_INDEX?[]:this.selectedIndex),a=!(s!=null&&s.has(i)),o=fu([t,n].sort(),2),l=o[0],c=o[1],u=this.getSelectionAttribute(),f=[],d=l;d<=c;d++)if(!this.isIndexDisabled(d)){var m=s.has(d);a!==m&&(f.push(d),this.adapter.setCheckedCheckboxOrRadioAtIndex(d,a),this.adapter.setAttributeForElementIndex(d,u,""+a),a?s.add(d):s.delete(d))}f.length&&(this.selectedIndex=Rb([],fu(s)),this.adapter.notifySelectionChange(f))},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===Ht.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==Ht.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Ht.UNSET_INDEX?this.selectedIndex:Vb(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,n){return Math.min(t,n)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t,n){var i=this;if(n===void 0&&(n=!0),t instanceof Array){if(!this.isCheckboxList&&n)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(s){return i.isIndexInRange(s)})}else if(typeof t=="number"){if(this.isCheckboxList&&n)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===Ht.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var n=this.adapter.getListItemCount();return t>=0&&t<n},e.prototype.setSelectedIndexOnAction=function(t,n){this.lastSelectedIndex=t,this.isCheckboxList?(this.toggleCheckboxAtIndex(t,n),this.adapter.notifySelectionChange([t])):this.setSelectedIndex(t,{isUserInteraction:!0})},e.prototype.toggleCheckboxAtIndex=function(t,n){var i=this.getSelectionAttribute(),s=this.adapter.isCheckboxCheckedAtIndex(t),a;n?a=s:(a=!s,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,a)),this.adapter.setAttributeForElementIndex(t,i,a?"true":"false");var o=this.selectedIndex===Ht.UNSET_INDEX?[]:this.selectedIndex.slice();a?o.push(t):o=o.filter(function(l){return l!==t}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.checkboxListToggleAll=function(t,n){var i=this.adapter.getListItemCount();if(t.length===i)this.setCheckboxAtIndex([],{isUserInteraction:n});else{for(var s=[],a=0;a<i;a++)(!this.isIndexDisabled(a)||t.indexOf(a)>-1)&&s.push(a);this.setCheckboxAtIndex(s,{isUserInteraction:n})}},e.prototype.typeaheadMatchItem=function(t,n,i){var s=this;i===void 0&&(i=!1);var a={focusItemAtIndex:function(o){s.focusItemAtIndex(o)},focusedItemIndex:n||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(o){return s.isIndexDisabled(o)}};return Fo(a,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return zb(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Cf(this.typeaheadState)},e}(tl);/**
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
 */var Ln={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},jb={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var If=function(r){Ra(e,r);function e(t){var n=r.call(this,bi(bi({},e.defaultAdapter),t))||this;return n.animationFrame=0,n.animationTimer=0,n}return Object.defineProperty(e,"strings",{get:function(){return jb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ln},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(Ln.OPEN),this.adapter.addClass(Ln.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(Ln.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(Ln.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(Ln.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(Ln.OPENING)||this.adapter.hasClass(Ln.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(Ln.CLOSING)},e.prototype.handleKeydown=function(t){var n=t.keyCode,i=t.key,s=i==="Escape"||n===27;s&&this.close()},e.prototype.handleTransitionEnd=function(t){var n=Ln.OPENING,i=Ln.CLOSING,s=Ln.OPEN,a=Ln.ANIMATE,o=Ln.ROOT,l=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,o);l&&(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(a),this.adapter.removeClass(n),this.adapter.removeClass(i))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var n=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){n.animationFrame=0,clearTimeout(n.animationTimer),n.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return!!t.classList},e}(tl);/**
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
 */var qb=function(r){Ra(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(If);/**
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
 */function Xb(r){return r===void 0&&(r=window),Yb(r)?{passive:!0}:!1}function Yb(r){r===void 0&&(r=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};r.document.addEventListener("test",n,t),r.document.removeEventListener("test",n,t)}catch{e=!1}return e}const Kb=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Xb},Symbol.toStringTag,{value:"Module"}));function si(r){return Object.entries(r).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function Li(r,e,t,n={bubbles:!0},i=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!r)throw new Error("Tried to dipatch event without element.");const s=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));if(r==null||r.dispatchEvent(s),i&&e.startsWith("SMUI")){const a=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:t}));r==null||r.dispatchEvent(a),a.defaultPrevented&&s.preventDefault()}return s}const pu=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Zb=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Kr(r){let e,t=[];r.$on=(i,s)=>{let a=i,o=()=>{};return e?o=e(a,s):t.push([a,s]),a.match(pu)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',a),()=>{o()}};function n(i){Ct(r,i)}return i=>{const s=[],a={};e=(o,l)=>{let c=o,u=l,f=!1;const d=c.match(pu),m=c.match(Zb),g=d||m;if(c.match(/^SMUI:\w+:/)){const _=c.split(":");let x="";for(let S=0;S<_.length;S++)x+=S===_.length-1?":"+_[S]:_[S].split("-").map(M=>M.slice(0,1).toUpperCase()+M.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${x.split("$")[0]}.`),c=x}if(g){const _=c.split(d?":":"$");c=_[0];const x=_.slice(1).reduce((S,M)=>(S[M]=!0,S),{});x.passive&&(f=f||{},f.passive=!0),x.nonpassive&&(f=f||{},f.passive=!1),x.capture&&(f=f||{},f.capture=!0),x.once&&(f=f||{},f.once=!0),x.preventDefault&&(u=Bf(u)),x.stopPropagation&&(u=Gf(u))}const h=Hn(i,c,u,f),p=()=>{h();const _=s.indexOf(p);_>-1&&s.splice(_,1)};return s.push(p),c in a||(a[c]=Hn(i,c,n)),p};for(let o=0;o<t.length;o++)e(t[o][0],t[o][1]);return{destroy:()=>{for(let o=0;o<s.length;o++)s[o]();for(let o of Object.entries(a))o[1]()}}}}function Pa(r,e){let t=[];if(e)for(let n=0;n<e.length;n++){const i=e[n],s=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?t.push(s(r,i[1])):t.push(s(r))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let i=0;i<n.length;i++){const s=t[i];if(s&&s.update){const a=n[i];Array.isArray(a)&&a.length>1?s.update(a[1]):s.update()}}},destroy(){for(let n=0;n<t.length;n++){const i=t[n];i&&i.destroy&&i.destroy()}}}}function Jb(r){let e,t,n,i,s,a;const o=r[15].default,l=ln(o,r,r[14],null);let c=[{class:t=si({[r[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":r[2]==="dismissible","mdc-drawer--modal":r[2]==="modal","smui-drawer__absolute":r[2]==="modal"&&!r[3],...r[6]})},r[8]],u={};for(let f=0;f<c.length;f+=1)u=jt(u,c[f]);return{c(){e=Pi("aside"),l&&l.c(),this.h()},l(f){e=ki(f,"ASIDE",{class:!0});var d=Ni(e);l&&l.l(d),d.forEach(Ee),this.h()},h(){la(e,u)},m(f,d){Fe(f,e,d),l&&l.m(e,null),r[16](e),i=!0,s||(a=[yi(n=Pa.call(null,e,r[0])),yi(r[7].call(null,e)),Hn(e,"keydown",function(){Ir(r[4]&&r[4].handleKeydown.bind(r[4]))&&(r[4]&&r[4].handleKeydown.bind(r[4])).apply(this,arguments)}),Hn(e,"transitionend",function(){Ir(r[4]&&r[4].handleTransitionEnd.bind(r[4]))&&(r[4]&&r[4].handleTransitionEnd.bind(r[4])).apply(this,arguments)})],s=!0)},p(f,[d]){r=f,l&&l.p&&(!i||d&16384)&&cn(l,o,r,r[14],i?fn(o,r[14],d,null):un(r[14]),null),la(e,u=rr(c,[(!i||d&78&&t!==(t=si({[r[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":r[2]==="dismissible","mdc-drawer--modal":r[2]==="modal","smui-drawer__absolute":r[2]==="modal"&&!r[3],...r[6]})))&&{class:t},d&256&&r[8]])),n&&Ir(n.update)&&d&1&&n.update.call(null,r[0])},i(f){i||(ie(l,f),i=!0)},o(f){ce(l,f),i=!1},d(f){f&&Ee(e),l&&l.d(f),r[16](null),s=!1,ys(a)}}}function Qb(r,e,t){const n=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let i=Pn(e,n),{$$slots:s={},$$scope:a}=e;const{FocusTrap:o}=kb,l=Kr(er());let{use:c=[]}=e,{class:u=""}=e,{variant:f=void 0}=e,{open:d=!1}=e,{fixed:m=!0}=e,g,h,p={},_=null,x,S=!1;kt("SMUI:list:nav",!0),kt("SMUI:list:item:nav",!0),kt("SMUI:list:wrapFocus",!0);let M=f;Br(()=>{x=new o(g,{skipInitialFocus:!0}),t(4,h=w()),h&&h.init()}),Tt(()=>{h&&h.destroy(),S&&S.removeEventListener("SMUIDrawerScrim:click",D)});function w(){var U,O;S&&S.removeEventListener("SMUIDrawerScrim:click",D),f==="modal"&&(S=(O=(U=g.parentNode)===null||U===void 0?void 0:U.querySelector(".mdc-drawer-scrim"))!==null&&O!==void 0?O:!1,S&&S.addEventListener("SMUIDrawerScrim:click",D));const B=f==="dismissible"?If:f==="modal"?qb:void 0;return B?new B({addClass:G,removeClass:v,hasClass:C,elementHasClass:(J,X)=>J.classList.contains(X),saveFocus:()=>_=document.activeElement,restoreFocus:()=>{_&&"focus"in _&&g.contains(document.activeElement)&&_.focus()},focusActiveNavigationItem:()=>{const J=g.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");J&&J.focus()},notifyClose:()=>{t(9,d=!1),Li(g,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{t(9,d=!0),Li(g,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>x.trapFocus(),releaseFocus:()=>x.releaseFocus()}):void 0}function C(U){return U in p?p[U]:K().classList.contains(U)}function G(U){p[U]||t(6,p[U]=!0,p)}function v(U){(!(U in p)||p[U])&&t(6,p[U]=!1,p)}function D(){h&&"handleScrimClick"in h&&h.handleScrimClick()}function I(U){t(9,d=U)}function j(){return d}function K(){return g}function V(U){Rn[U?"unshift":"push"](()=>{g=U,t(5,g)})}return r.$$set=U=>{e=jt(jt({},e),tr(U)),t(8,i=Pn(e,n)),"use"in U&&t(0,c=U.use),"class"in U&&t(1,u=U.class),"variant"in U&&t(2,f=U.variant),"open"in U&&t(9,d=U.open),"fixed"in U&&t(3,m=U.fixed),"$$scope"in U&&t(14,a=U.$$scope)},r.$$.update=()=>{r.$$.dirty&8212&&M!==f&&(t(13,M=f),h&&h.destroy(),t(6,p={}),t(4,h=w()),h&&h.init()),r.$$.dirty&528&&h&&h.isOpen()!==d&&(d?h.open():h.close())},[c,u,f,m,h,g,p,l,i,d,I,j,K,M,a,s,V]}class $b extends gt{constructor(e){super(),_t(this,e,Qb,Jb,ht,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function ey(r){let e=r[1],t,n,i=r[1]&&wo(r);return{c(){i&&i.c(),t=Ze()},l(s){i&&i.l(s),t=Ze()},m(s,a){i&&i.m(s,a),Fe(s,t,a),n=!0},p(s,a){s[1]?e?ht(e,s[1])?(i.d(1),i=wo(s),e=s[1],i.c(),i.m(t.parentNode,t)):i.p(s,a):(i=wo(s),e=s[1],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=s[1])},i(s){n||(ie(i),n=!0)},o(s){ce(i),n=!1},d(s){s&&Ee(t),i&&i.d(s)}}}function ty(r){let e=r[1],t,n=r[1]&&Ao(r);return{c(){n&&n.c(),t=Ze()},l(i){n&&n.l(i),t=Ze()},m(i,s){n&&n.m(i,s),Fe(i,t,s)},p(i,s){i[1]?e?ht(e,i[1])?(n.d(1),n=Ao(i),e=i[1],n.c(),n.m(t.parentNode,t)):n.p(i,s):(n=Ao(i),e=i[1],n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=i[1])},i:It,o:It,d(i){i&&Ee(t),n&&n.d(i)}}}function wo(r){let e,t,n,i,s;const a=r[8].default,o=ln(a,r,r[7],null);let l=[r[5]],c={};for(let u=0;u<l.length;u+=1)c=jt(c,l[u]);return{c(){e=Pi(r[1]),o&&o.c(),this.h()},l(u){e=ki(u,(r[1]||"null").toUpperCase(),{});var f=Ni(e);o&&o.l(f),f.forEach(Ee),this.h()},h(){ca(r[1])(e,c)},m(u,f){Fe(u,e,f),o&&o.m(e,null),r[10](e),n=!0,i||(s=[yi(t=Pa.call(null,e,r[0])),yi(r[4].call(null,e))],i=!0)},p(u,f){o&&o.p&&(!n||f&128)&&cn(o,a,u,u[7],n?fn(a,u[7],f,null):un(u[7]),null),ca(u[1])(e,c=rr(l,[f&32&&u[5]])),t&&Ir(t.update)&&f&1&&t.update.call(null,u[0])},i(u){n||(ie(o,u),n=!0)},o(u){ce(o,u),n=!1},d(u){u&&Ee(e),o&&o.d(u),r[10](null),i=!1,ys(s)}}}function Ao(r){let e,t,n,i,s=[r[5]],a={};for(let o=0;o<s.length;o+=1)a=jt(a,s[o]);return{c(){e=Pi(r[1]),this.h()},l(o){e=ki(o,(r[1]||"null").toUpperCase(),{}),Ni(e).forEach(Ee),this.h()},h(){ca(r[1])(e,a)},m(o,l){Fe(o,e,l),r[9](e),n||(i=[yi(t=Pa.call(null,e,r[0])),yi(r[4].call(null,e))],n=!0)},p(o,l){ca(o[1])(e,a=rr(s,[l&32&&o[5]])),t&&Ir(t.update)&&l&1&&t.update.call(null,o[0])},d(o){o&&Ee(e),r[9](null),n=!1,ys(i)}}}function ny(r){let e,t,n,i;const s=[ty,ey],a=[];function o(l,c){return l[3]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=Ze()},l(l){t.l(l),n=Ze()},m(l,c){a[e].m(l,c),Fe(l,n,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(Jt(),ce(a[u],1,1,()=>{a[u]=null}),Qt(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),ie(t,1),t.m(n.parentNode,n))},i(l){i||(ie(t),i=!0)},o(l){ce(t),i=!1},d(l){a[e].d(l),l&&Ee(n)}}}function iy(r,e,t){let n;const i=["use","tag","getElement"];let s=Pn(e,i),{$$slots:a={},$$scope:o}=e,{use:l=[]}=e,{tag:c}=e;const u=Kr(er());let f;function d(){return f}function m(h){Rn[h?"unshift":"push"](()=>{f=h,t(2,f)})}function g(h){Rn[h?"unshift":"push"](()=>{f=h,t(2,f)})}return r.$$set=h=>{e=jt(jt({},e),tr(h)),t(5,s=Pn(e,i)),"use"in h&&t(0,l=h.use),"tag"in h&&t(1,c=h.tag),"$$scope"in h&&t(7,o=h.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&t(3,n=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(c)>-1)},[l,c,f,n,u,s,d,o,a,m,g]}class zr extends gt{constructor(e){super(),_t(this,e,iy,ny,ht,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function ry(r){let e;const t=r[11].default,n=ln(t,r,r[13],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8192)&&cn(n,t,i,i[13],e?fn(t,i[13],s,null):un(i[13]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function sy(r){let e,t,n;const i=[{tag:r[3]},{use:[r[8],...r[0]]},{class:si({[r[1]]:!0,[r[6]]:!0,...r[5]})},r[7],r[9]];var s=r[2];function a(o){let l={$$slots:{default:[ry]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=jt(l,i[c]);return{props:l}}return s&&(e=Rr(s,a(r)),r[12](e)),{c(){e&&Ie(e.$$.fragment),t=Ze()},l(o){e&&Ne(e.$$.fragment,o),t=Ze()},m(o,l){e&&Le(e,o,l),Fe(o,t,l),n=!0},p(o,[l]){const c=l&1003?rr(i,[l&8&&{tag:o[3]},l&257&&{use:[o[8],...o[0]]},l&98&&{class:si({[o[1]]:!0,[o[6]]:!0,...o[5]})},l&128&&Qn(o[7]),l&512&&Qn(o[9])]):{};if(l&8192&&(c.$$scope={dirty:l,ctx:o}),l&4&&s!==(s=o[2])){if(e){Jt();const u=e;ce(u.$$.fragment,1,0,()=>{De(u,1)}),Qt()}s?(e=Rr(s,a(o)),o[12](e),Ie(e.$$.fragment),ie(e.$$.fragment,1),Le(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(o){n||(e&&ie(e.$$.fragment,o),n=!0)},o(o){e&&ce(e.$$.fragment,o),n=!1},d(o){r[12](null),o&&Ee(t),e&&De(e,o)}}}const _i={component:zr,tag:"div",class:"",classMap:{},contexts:{},props:{}};function ay(r,e,t){const n=["use","class","component","tag","getElement"];let i=Pn(e,n),{$$slots:s={},$$scope:a}=e,{use:o=[]}=e,{class:l=""}=e,c;const u=_i.class,f={},d=[],m=_i.contexts,g=_i.props;let{component:h=_i.component}=e,{tag:p=h===zr?_i.tag:void 0}=e;Object.entries(_i.classMap).forEach(([M,w])=>{const C=Wt(w);C&&"subscribe"in C&&d.push(C.subscribe(G=>{t(5,f[M]=G,f)}))});const _=Kr(er());for(let M in m)m.hasOwnProperty(M)&&kt(M,m[M]);Tt(()=>{for(const M of d)M()});function x(){return c.getElement()}function S(M){Rn[M?"unshift":"push"](()=>{c=M,t(4,c)})}return r.$$set=M=>{e=jt(jt({},e),tr(M)),t(9,i=Pn(e,n)),"use"in M&&t(0,o=M.use),"class"in M&&t(1,l=M.class),"component"in M&&t(2,h=M.component),"tag"in M&&t(3,p=M.tag),"$$scope"in M&&t(13,a=M.$$scope)},[o,l,h,p,c,f,u,g,_,i,x,s,S,a]}class oy extends gt{constructor(e){super(),_t(this,e,ay,sy,ht,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const mu=Object.assign({},_i);function Jn(r){return new Proxy(oy,{construct:function(e,t){return Object.assign(_i,mu,r),new e(...t)},get:function(e,t){return Object.assign(_i,mu,r),e[t]}})}const ly=Jn({class:"mdc-drawer-app-content",tag:"div"}),cy=Jn({class:"mdc-drawer__content",tag:"div"});Jn({class:"mdc-drawer__header",tag:"div"});Jn({class:"mdc-drawer__title",tag:"h1"});Jn({class:"mdc-drawer__subtitle",tag:"h2"});function uy(r){let e;const t=r[42].default,n=ln(t,r,r[44],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&8192)&&cn(n,t,i,i[44],e?fn(t,i[44],s,null):un(i[44]),null)},i(i){e||(ie(n,i),e=!0)},o(i){ce(n,i),e=!1},d(i){n&&n.d(i)}}}function fy(r){let e,t,n;const i=[{tag:r[13]},{use:[r[16],...r[0]]},{class:si({[r[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":r[2],"mdc-deprecated-list--dense":r[3],"mdc-deprecated-list--textual-list":r[4],"mdc-deprecated-list--avatar-list":r[5]||r[17],"mdc-deprecated-list--icon-list":r[6],"mdc-deprecated-list--image-list":r[7],"mdc-deprecated-list--thumbnail-list":r[8],"mdc-deprecated-list--video-list":r[9],"mdc-deprecated-list--two-line":r[10],"smui-list--three-line":r[11]&&!r[10]})},{role:r[15]},r[25]];var s=r[12];function a(o){let l={$$slots:{default:[uy]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=jt(l,i[c]);return{props:l}}return s&&(e=Rr(s,a(r)),r[43](e),e.$on("keydown",r[20]),e.$on("focusin",r[21]),e.$on("focusout",r[22]),e.$on("click",r[23]),e.$on("SMUIListItem:mount",r[18]),e.$on("SMUIListItem:unmount",r[19]),e.$on("SMUI:action",r[24])),{c(){e&&Ie(e.$$.fragment),t=Ze()},l(o){e&&Ne(e.$$.fragment,o),t=Ze()},m(o,l){e&&Le(e,o,l),Fe(o,t,l),n=!0},p(o,l){const c=l[0]&33796095?rr(i,[l[0]&8192&&{tag:o[13]},l[0]&65537&&{use:[o[16],...o[0]]},l[0]&135166&&{class:si({[o[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":o[2],"mdc-deprecated-list--dense":o[3],"mdc-deprecated-list--textual-list":o[4],"mdc-deprecated-list--avatar-list":o[5]||o[17],"mdc-deprecated-list--icon-list":o[6],"mdc-deprecated-list--image-list":o[7],"mdc-deprecated-list--thumbnail-list":o[8],"mdc-deprecated-list--video-list":o[9],"mdc-deprecated-list--two-line":o[10],"smui-list--three-line":o[11]&&!o[10]})},l[0]&32768&&{role:o[15]},l[0]&33554432&&Qn(o[25])]):{};if(l[1]&8192&&(c.$$scope={dirty:l,ctx:o}),l[0]&4096&&s!==(s=o[12])){if(e){Jt();const u=e;ce(u.$$.fragment,1,0,()=>{De(u,1)}),Qt()}s?(e=Rr(s,a(o)),o[43](e),e.$on("keydown",o[20]),e.$on("focusin",o[21]),e.$on("focusout",o[22]),e.$on("click",o[23]),e.$on("SMUIListItem:mount",o[18]),e.$on("SMUIListItem:unmount",o[19]),e.$on("SMUI:action",o[24]),Ie(e.$$.fragment),ie(e.$$.fragment,1),Le(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(o){n||(e&&ie(e.$$.fragment,o),n=!0)},o(o){e&&ce(e.$$.fragment,o),n=!1},d(o){r[43](null),o&&Ee(t),e&&De(e,o)}}}function dy(r,e,t){const n=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","disabledItemsFocusable","selectedIndex","radioList","checkList","hasTypeahead","component","tag","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","focusItemAtIndex","getElement"];let i=Pn(e,n),{$$slots:s={},$$scope:a}=e;var o;const{closest:l,matches:c}=Ef,u=Kr(er());let{use:f=[]}=e,{class:d=""}=e,{nonInteractive:m=!1}=e,{dense:g=!1}=e,{textualList:h=!1}=e,{avatarList:p=!1}=e,{iconList:_=!1}=e,{imageList:x=!1}=e,{thumbnailList:S=!1}=e,{videoList:M=!1}=e,{twoLine:w=!1}=e,{threeLine:C=!1}=e,{vertical:G=!0}=e,{wrapFocus:v=(o=Wt("SMUI:list:wrapFocus"))!==null&&o!==void 0?o:!1}=e,{singleSelection:D=!1}=e,{disabledItemsFocusable:I=!1}=e,{selectedIndex:j=-1}=e,{radioList:K=!1}=e,{checkList:V=!1}=e,{hasTypeahead:U=!1}=e,O,B,J=[],X=Wt("SMUI:list:role"),se=Wt("SMUI:list:nav");const ne=new WeakMap;let R=Wt("SMUI:dialog:selection"),q=Wt("SMUI:addLayoutListener"),re,{component:Q=zr}=e,{tag:te=Q===zr?se?"nav":"ul":void 0}=e;kt("SMUI:list:nonInteractive",m),kt("SMUI:separator:context","list"),X||(D?(X="listbox",kt("SMUI:list:item:role","option")):K?(X="radiogroup",kt("SMUI:list:item:role","radio")):V?(X="group",kt("SMUI:list:item:role","checkbox")):(X="list",kt("SMUI:list:item:role",void 0))),q&&(re=q(N)),Br(()=>{t(41,B=new Wb({addClassForElementIndex:pe,focusItemAtIndex:we,getAttributeForElementIndex:(le,fe)=>{var _e,Oe;return(Oe=(_e=Te()[le])===null||_e===void 0?void 0:_e.getAttr(fe))!==null&&Oe!==void 0?Oe:null},getFocusedElementIndex:()=>document.activeElement?Te().map(le=>le.element).indexOf(document.activeElement):-1,getListItemCount:()=>J.length,getPrimaryTextAtIndex:Gt,hasCheckboxAtIndex:le=>{var fe,_e;return(_e=(fe=Te()[le])===null||fe===void 0?void 0:fe.hasCheckbox)!==null&&_e!==void 0?_e:!1},hasRadioAtIndex:le=>{var fe,_e;return(_e=(fe=Te()[le])===null||fe===void 0?void 0:fe.hasRadio)!==null&&_e!==void 0?_e:!1},isCheckboxCheckedAtIndex:le=>{var fe;const _e=Te()[le];return(fe=(_e==null?void 0:_e.hasCheckbox)&&_e.checked)!==null&&fe!==void 0?fe:!1},isFocusInsideList:()=>O!=null&&Be()!==document.activeElement&&Be().contains(document.activeElement),isRootFocused:()=>O!=null&&document.activeElement===Be(),listItemAtIndexHasClass:Dt,notifyAction:le=>{t(26,j=le),O!=null&&Li(Be(),"SMUIList:action",{index:le},void 0,!0)},notifySelectionChange:le=>{O!=null&&Li(Be(),"SMUIList:selectionChange",{changedIndices:le})},removeClassForElementIndex:ee,setAttributeForElementIndex:je,setCheckedCheckboxOrRadioAtIndex:(le,fe)=>{Te()[le].checked=fe},setTabIndexForListItemChildren:(le,fe)=>{const _e=Te()[le],Oe="button:not(:disabled), a";Array.prototype.forEach.call(_e.element.querySelectorAll(Oe),ze=>{ze.setAttribute("tabindex",fe)})}}));const k={get element(){return Be()},get items(){return J},get typeaheadInProgress(){return B.isTypeaheadInProgress()},typeaheadMatchItem(le,fe){return B.typeaheadMatchItem(le,fe,!0)},getOrderedList:Te,focusItemAtIndex:we,addClassForElementIndex:pe,removeClassForElementIndex:ee,setAttributeForElementIndex:je,removeAttributeForElementIndex:xt,getAttributeFromElementIndex:lt,getPrimaryTextAtIndex:Gt};return Li(Be(),"SMUIList:mount",k),B.init(),B.layout(),()=>{B.destroy()}}),Tt(()=>{re&&re()});function F(k){J.push(k.detail),ne.set(k.detail.element,k.detail),D&&k.detail.selected&&t(26,j=Ot(k.detail.element)),k.stopPropagation()}function oe(k){var le;const fe=(le=k.detail&&J.indexOf(k.detail))!==null&&le!==void 0?le:-1;fe!==-1&&(J.splice(fe,1),J=J,ne.delete(k.detail.element)),k.stopPropagation()}function be(k){B&&k.target&&B.handleKeydown(k,k.target.classList.contains("mdc-deprecated-list-item"),Ot(k.target))}function Pe(k){B&&k.target&&B.handleFocusIn(Ot(k.target))}function Me(k){B&&k.target&&B.handleFocusOut(Ot(k.target))}function $e(k){B&&k.target&&B.handleClick(Ot(k.target),!c(k.target,'input[type="checkbox"], input[type="radio"]'),k)}function We(k){if(K||V){const le=Ot(k.target);if(le!==-1){const fe=Te()[le];fe&&(K&&!fe.checked||V)&&(c(k.detail.target,'input[type="checkbox"], input[type="radio"]')||(fe.checked=!fe.checked),fe.activateRipple(),window.requestAnimationFrame(()=>{fe.deactivateRipple()}))}}}function Te(){return O==null?[]:[...Be().children].map(k=>ne.get(k)).filter(k=>k&&k._smui_list_item_accessor)}function Dt(k,le){var fe;const _e=Te()[k];return(fe=_e&&_e.hasClass(le))!==null&&fe!==void 0?fe:!1}function pe(k,le){const fe=Te()[k];fe&&fe.addClass(le)}function ee(k,le){const fe=Te()[k];fe&&fe.removeClass(le)}function je(k,le,fe){const _e=Te()[k];_e&&_e.addAttr(le,fe)}function xt(k,le){const fe=Te()[k];fe&&fe.removeAttr(le)}function lt(k,le){const fe=Te()[k];return fe?fe.getAttr(le):null}function Gt(k){var le;const fe=Te()[k];return(le=fe&&fe.getPrimaryText())!==null&&le!==void 0?le:""}function Ot(k){const le=l(k,".mdc-deprecated-list-item, .mdc-deprecated-list");return le&&c(le,".mdc-deprecated-list-item")?Te().map(fe=>fe==null?void 0:fe.element).indexOf(le):-1}function N(){return B.layout()}function L(k,le){return B.setEnabled(k,le)}function ae(){return B.isTypeaheadInProgress()}function ye(){return B.getSelectedIndex()}function xe(){return B.getFocusedItemIndex()}function we(k){const le=Te()[k];le&&"focus"in le.element&&le.element.focus()}function Be(){return O.getElement()}function z(k){Rn[k?"unshift":"push"](()=>{O=k,t(14,O)})}return r.$$set=k=>{e=jt(jt({},e),tr(k)),t(25,i=Pn(e,n)),"use"in k&&t(0,f=k.use),"class"in k&&t(1,d=k.class),"nonInteractive"in k&&t(2,m=k.nonInteractive),"dense"in k&&t(3,g=k.dense),"textualList"in k&&t(4,h=k.textualList),"avatarList"in k&&t(5,p=k.avatarList),"iconList"in k&&t(6,_=k.iconList),"imageList"in k&&t(7,x=k.imageList),"thumbnailList"in k&&t(8,S=k.thumbnailList),"videoList"in k&&t(9,M=k.videoList),"twoLine"in k&&t(10,w=k.twoLine),"threeLine"in k&&t(11,C=k.threeLine),"vertical"in k&&t(27,G=k.vertical),"wrapFocus"in k&&t(28,v=k.wrapFocus),"singleSelection"in k&&t(29,D=k.singleSelection),"disabledItemsFocusable"in k&&t(30,I=k.disabledItemsFocusable),"selectedIndex"in k&&t(26,j=k.selectedIndex),"radioList"in k&&t(31,K=k.radioList),"checkList"in k&&t(32,V=k.checkList),"hasTypeahead"in k&&t(33,U=k.hasTypeahead),"component"in k&&t(12,Q=k.component),"tag"in k&&t(13,te=k.tag),"$$scope"in k&&t(44,a=k.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&134217728|r.$$.dirty[1]&1024&&B&&B.setVerticalOrientation(G),r.$$.dirty[0]&268435456|r.$$.dirty[1]&1024&&B&&B.setWrapFocus(v),r.$$.dirty[1]&1028&&B&&B.setHasTypeahead(U),r.$$.dirty[0]&536870912|r.$$.dirty[1]&1024&&B&&B.setSingleSelection(D),r.$$.dirty[0]&1073741824|r.$$.dirty[1]&1024&&B&&B.setDisabledItemsFocusable(I),r.$$.dirty[0]&603979776|r.$$.dirty[1]&1024&&B&&D&&ye()!==j&&B.setSelectedIndex(j)},[f,d,m,g,h,p,_,x,S,M,w,C,Q,te,O,X,u,R,F,oe,be,Pe,Me,$e,We,i,j,G,v,D,I,K,V,U,N,L,ae,ye,xe,we,Be,B,s,z,a]}class hy extends gt{constructor(e){super(),_t(this,e,dy,fy,ht,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:27,wrapFocus:28,singleSelection:29,disabledItemsFocusable:30,selectedIndex:26,radioList:31,checkList:32,hasTypeahead:33,component:12,tag:13,layout:34,setEnabled:35,getTypeaheadInProgress:36,getSelectedIndex:37,getFocusedItemIndex:38,focusItemAtIndex:39,getElement:40},null,[-1,-1])}get layout(){return this.$$.ctx[34]}get setEnabled(){return this.$$.ctx[35]}get getTypeaheadInProgress(){return this.$$.ctx[36]}get getSelectedIndex(){return this.$$.ctx[37]}get getFocusedItemIndex(){return this.$$.ctx[38]}get focusItemAtIndex(){return this.$$.ctx[39]}get getElement(){return this.$$.ctx[40]}}var ia;function py(r,e){e===void 0&&(e=!1);var t=r.CSS,n=ia;if(typeof ia=="boolean"&&!e)return ia;var i=t&&typeof t.supports=="function";if(!i)return!1;var s=t.supports("--css-vars","yes"),a=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=s||a,e||(ia=n),n}function my(r,e,t){if(!r)return{x:0,y:0};var n=e.x,i=e.y,s=n+t.left,a=i+t.top,o,l;if(r.type==="touchstart"){var c=r;o=c.changedTouches[0].pageX-s,l=c.changedTouches[0].pageY-a}else{var u=r;o=u.pageX-s,l=u.pageY-a}return{x:o,y:l}}/**
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
 */var gy={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},_y={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},gu={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var _u=["touchstart","pointerdown","mousedown","keydown"],vu=["touchend","pointerup","mouseup","contextmenu"],ra=[],vy=function(r){Ra(e,r);function e(t){var n=r.call(this,bi(bi({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return gy},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return _y},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return gu},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,s=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(s),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,s=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(s),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var s=na(_u),a=s.next();!a.done;a=s.next()){var o=a.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=na(vu),a=s.next();!a.done;a=s.next()){var o=a.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=na(_u),s=i.next();!s.done;s=i.next()){var a=s.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(o){t={error:o}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=na(vu),s=i.next();!s.done;s=i.next()){var a=s.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(o){t={error:o}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(s){s.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[s],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var s=this.previousActivationEvent,a=s&&t!==void 0&&s.type!==t.type;if(!a){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var o=t!==void 0&&ra.length>0&&ra.some(function(l){return n.adapter.containsEventTarget(l)});if(o){this.resetActivationState();return}t!==void 0&&(ra.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){ra=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,s=n.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,l=a.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",f="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),m=d.startPoint,g=d.endPoint;u=m.x+"px, "+m.y+"px",f=g.x+"px, "+g.y+"px"}this.adapter.updateCssVariable(i,u),this.adapter.updateCssVariable(s,f),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,s;i?s=my(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:a}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,s=i.hasDeactivationUXRun,a=i.isActivated,o=s||!a;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},gu.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var i=bi({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var a=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return a+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var s=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!==0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,s=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(tl);const{applyPassive:sa}=Kb,{matches:by}=Ef;function bu(r,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:i=!1,color:s,active:a,rippleElement:o,eventTarget:l,activeTarget:c,addClass:u=g=>r.classList.add(g),removeClass:f=g=>r.classList.remove(g),addStyle:d=(g,h)=>r.style.setProperty(g,h),initPromise:m=Promise.resolve()}={}){let g,h=Wt("SMUI:addLayoutListener"),p,_=a,x=l,S=c;function M(){t?(u("mdc-ripple-surface"),s==="primary"?(u("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):s==="secondary"?(f("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary"))):(f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),g&&_!==a&&(_=a,a?g.activate():a===!1&&g.deactivate()),e&&!g?(g=new vy({addClass:u,browserSupportsCssVars:()=>py(window),computeBoundingRect:()=>(o||r).getBoundingClientRect(),containsEventTarget:C=>r.contains(C),deregisterDocumentInteractionHandler:(C,G)=>document.documentElement.removeEventListener(C,G,sa()),deregisterInteractionHandler:(C,G)=>(l||r).removeEventListener(C,G,sa()),deregisterResizeHandler:C=>window.removeEventListener("resize",C),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>a??by(c||r,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(C,G)=>document.documentElement.addEventListener(C,G,sa()),registerInteractionHandler:(C,G)=>(l||r).addEventListener(C,G,sa()),registerResizeHandler:C=>window.addEventListener("resize",C),removeClass:f,updateCssVariable:d}),m.then(()=>{g&&(g.init(),g.setUnbounded(n))})):g&&!e&&m.then(()=>{g&&(g.destroy(),g=void 0)}),g&&(x!==l||S!==c)&&(x=l,S=c,g.destroy(),requestAnimationFrame(()=>{g&&(g.init(),g.setUnbounded(n))})),!e&&n&&u("mdc-ripple-upgraded--unbounded")}M(),h&&(p=h(w));function w(){g&&g.layout()}return{update(C){({ripple:e,surface:t,unbounded:n,disabled:i,color:s,active:a,rippleElement:o,eventTarget:l,activeTarget:c,addClass:u,removeClass:f,addStyle:d,initPromise:m}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:G=>r.classList.add(G),removeClass:G=>r.classList.remove(G),addStyle:(G,v)=>r.style.setProperty(G,v),initPromise:Promise.resolve()},C)),M()},destroy(){g&&(g.destroy(),g=void 0,f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),p&&p()}}}function yu(r){let e;return{c(){e=Pi("span"),this.h()},l(t){e=ki(t,"SPAN",{class:!0}),Ni(e).forEach(Ee),this.h()},h(){_a(e,"class","mdc-deprecated-list-item__ripple")},m(t,n){Fe(t,e,n)},d(t){t&&Ee(e)}}}function yy(r){let e,t,n=r[7]&&yu();const i=r[34].default,s=ln(i,r,r[37],null);return{c(){n&&n.c(),e=Ze(),s&&s.c()},l(a){n&&n.l(a),e=Ze(),s&&s.l(a)},m(a,o){n&&n.m(a,o),Fe(a,e,o),s&&s.m(a,o),t=!0},p(a,o){a[7]?n||(n=yu(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),s&&s.p&&(!t||o[1]&64)&&cn(s,i,a,a[37],t?fn(i,a[37],o,null):un(a[37]),null)},i(a){t||(ie(s,a),t=!0)},o(a){ce(s,a),t=!1},d(a){n&&n.d(a),a&&Ee(e),s&&s.d(a)}}}function xy(r){let e,t,n;const i=[{tag:r[14]},{use:[...r[6]?[]:[[bu,{ripple:!r[16],unbounded:!1,color:(r[1]||r[0])&&r[5]==null?"primary":r[5],disabled:r[10],addClass:r[24],removeClass:r[25],addStyle:r[26]}]],r[22],...r[2]]},{class:si({[r[3]]:!0,"mdc-deprecated-list-item":!r[8],"mdc-deprecated-list-item__wrapper":r[8],"mdc-deprecated-list-item--activated":r[1],"mdc-deprecated-list-item--selected":r[0],"mdc-deprecated-list-item--disabled":r[10],"mdc-menu-item--selected":!r[23]&&r[9]==="menuitem"&&r[0],"smui-menu-item--non-interactive":r[6],...r[18]})},{style:Object.entries(r[19]).map(xu).concat([r[4]]).join(" ")},r[23]&&r[1]?{"aria-current":"page"}:{},!r[23]||r[8]?{role:r[9]}:{},!r[23]&&r[9]==="option"?{"aria-selected":r[0]?"true":"false"}:{},!r[23]&&(r[9]==="radio"||r[9]==="checkbox")?{"aria-checked":r[16]&&r[16].checked?"true":"false"}:{},r[23]?{}:{"aria-disabled":r[10]?"true":"false"},{"data-menu-item-skip-restore-focus":r[11]||void 0},{tabindex:r[21]},{href:r[12]},r[20],r[29]];var s=r[13];function a(o){let l={$$slots:{default:[yy]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=jt(l,i[c]);return{props:l}}return s&&(e=Rr(s,a(r)),r[35](e),e.$on("click",r[15]),e.$on("keydown",r[27]),e.$on("SMUIGenericInput:mount",r[28]),e.$on("SMUIGenericInput:unmount",r[36])),{c(){e&&Ie(e.$$.fragment),t=Ze()},l(o){e&&Ne(e.$$.fragment,o),t=Ze()},m(o,l){e&&Le(e,o,l),Fe(o,t,l),n=!0},p(o,l){const c=l[0]&670916479?rr(i,[l[0]&16384&&{tag:o[14]},l[0]&121701479&&{use:[...o[6]?[]:[[bu,{ripple:!o[16],unbounded:!1,color:(o[1]||o[0])&&o[5]==null?"primary":o[5],disabled:o[10],addClass:o[24],removeClass:o[25],addStyle:o[26]}]],o[22],...o[2]]},l[0]&8652619&&{class:si({[o[3]]:!0,"mdc-deprecated-list-item":!o[8],"mdc-deprecated-list-item__wrapper":o[8],"mdc-deprecated-list-item--activated":o[1],"mdc-deprecated-list-item--selected":o[0],"mdc-deprecated-list-item--disabled":o[10],"mdc-menu-item--selected":!o[23]&&o[9]==="menuitem"&&o[0],"smui-menu-item--non-interactive":o[6],...o[18]})},l[0]&524304&&{style:Object.entries(o[19]).map(xu).concat([o[4]]).join(" ")},l[0]&8388610&&Qn(o[23]&&o[1]?{"aria-current":"page"}:{}),l[0]&8389376&&Qn(!o[23]||o[8]?{role:o[9]}:{}),l[0]&8389121&&Qn(!o[23]&&o[9]==="option"?{"aria-selected":o[0]?"true":"false"}:{}),l[0]&8454656&&Qn(!o[23]&&(o[9]==="radio"||o[9]==="checkbox")?{"aria-checked":o[16]&&o[16].checked?"true":"false"}:{}),l[0]&8389632&&Qn(o[23]?{}:{"aria-disabled":o[10]?"true":"false"}),l[0]&2048&&{"data-menu-item-skip-restore-focus":o[11]||void 0},l[0]&2097152&&{tabindex:o[21]},l[0]&4096&&{href:o[12]},l[0]&1048576&&Qn(o[20]),l[0]&536870912&&Qn(o[29])]):{};if(l[0]&128|l[1]&64&&(c.$$scope={dirty:l,ctx:o}),l[0]&8192&&s!==(s=o[13])){if(e){Jt();const u=e;ce(u.$$.fragment,1,0,()=>{De(u,1)}),Qt()}s?(e=Rr(s,a(o)),o[35](e),e.$on("click",o[15]),e.$on("keydown",o[27]),e.$on("SMUIGenericInput:mount",o[28]),e.$on("SMUIGenericInput:unmount",o[36]),Ie(e.$$.fragment),ie(e.$$.fragment,1),Le(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(o){n||(e&&ie(e.$$.fragment,o),n=!0)},o(o){e&&ce(e.$$.fragment,o),n=!1},d(o){r[35](null),o&&Ee(t),e&&De(e,o)}}}let Sy=0;const xu=([r,e])=>`${r}: ${e};`;function My(r,e,t){let n;const i=["use","class","style","color","nonInteractive","ripple","wrapper","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","tag","action","getPrimaryText","getElement"];let s=Pn(e,i),{$$slots:a={},$$scope:o}=e;var l;const c=Kr(er());let u=()=>{};function f(pe){return pe===u}let{use:d=[]}=e,{class:m=""}=e,{style:g=""}=e,{color:h=void 0}=e,{nonInteractive:p=(l=Wt("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;kt("SMUI:list:nonInteractive",void 0);let{ripple:_=!p}=e,{wrapper:x=!1}=e,{activated:S=!1}=e,{role:M=x?"presentation":Wt("SMUI:list:item:role")}=e;kt("SMUI:list:item:role",void 0);let{selected:w=!1}=e,{disabled:C=!1}=e,{skipRestoreFocus:G=!1}=e,{tabindex:v=u}=e,{inputId:D="SMUI-form-field-list-"+Sy++}=e,{href:I=void 0}=e,j,K={},V={},U={},O,B,J=Wt("SMUI:list:item:nav"),{component:X=zr}=e,{tag:se=X===zr?J?I?"a":"span":"li":void 0}=e;kt("SMUI:generic:input:props",{id:D}),kt("SMUI:separator:context",void 0),Br(()=>{if(!w&&!p){let ee=!0,je=j.getElement();for(;je.previousSibling;)if(je=je.previousSibling,je.nodeType===1&&je.classList.contains("mdc-deprecated-list-item")&&!je.classList.contains("mdc-deprecated-list-item--disabled")){ee=!1;break}ee&&(B=window.requestAnimationFrame(()=>oe(je)))}const pe={_smui_list_item_accessor:!0,get element(){return We()},get selected(){return w},set selected(ee){t(0,w=ee)},hasClass:ne,addClass:R,removeClass:q,getAttr:Q,addAttr:te,removeAttr:F,getPrimaryText:$e,get checked(){var ee;return(ee=O&&O.checked)!==null&&ee!==void 0?ee:!1},set checked(ee){O&&t(16,O.checked=!!ee,O)},get hasCheckbox(){return!!(O&&"_smui_checkbox_accessor"in O)},get hasRadio(){return!!(O&&"_smui_radio_accessor"in O)},activateRipple(){O&&O.activateRipple()},deactivateRipple(){O&&O.deactivateRipple()},getValue(){return s.value},action:Me,get tabindex(){return n},set tabindex(ee){t(30,v=ee)},get disabled(){return C},get activated(){return S},set activated(ee){t(1,S=ee)}};return Li(We(),"SMUIListItem:mount",pe),()=>{Li(We(),"SMUIListItem:unmount",pe)}}),Tt(()=>{B&&window.cancelAnimationFrame(B)});function ne(pe){return pe in K?K[pe]:We().classList.contains(pe)}function R(pe){K[pe]||t(18,K[pe]=!0,K)}function q(pe){(!(pe in K)||K[pe])&&t(18,K[pe]=!1,K)}function re(pe,ee){V[pe]!=ee&&(ee===""||ee==null?(delete V[pe],t(19,V)):t(19,V[pe]=ee,V))}function Q(pe){var ee;return pe in U?(ee=U[pe])!==null&&ee!==void 0?ee:null:We().getAttribute(pe)}function te(pe,ee){U[pe]!==ee&&t(20,U[pe]=ee,U)}function F(pe){(!(pe in U)||U[pe]!=null)&&t(20,U[pe]=void 0,U)}function oe(pe){let ee=!0;for(;pe.nextElementSibling;)if(pe=pe.nextElementSibling,pe.nodeType===1&&pe.classList.contains("mdc-deprecated-list-item")){const je=pe.attributes.getNamedItem("tabindex");if(je&&je.value==="0"){ee=!1;break}}ee&&t(21,n=0)}function be(pe){const ee=pe.key==="Enter",je=pe.key==="Space";(ee||je)&&Me(pe)}function Pe(pe){("_smui_checkbox_accessor"in pe.detail||"_smui_radio_accessor"in pe.detail)&&t(16,O=pe.detail)}function Me(pe){C||Li(We(),"SMUI:action",pe)}function $e(){var pe,ee,je;const xt=We(),lt=xt.querySelector(".mdc-deprecated-list-item__primary-text");if(lt)return(pe=lt.textContent)!==null&&pe!==void 0?pe:"";const Gt=xt.querySelector(".mdc-deprecated-list-item__text");return Gt?(ee=Gt.textContent)!==null&&ee!==void 0?ee:"":(je=xt.textContent)!==null&&je!==void 0?je:""}function We(){return j.getElement()}function Te(pe){Rn[pe?"unshift":"push"](()=>{j=pe,t(17,j)})}const Dt=()=>t(16,O=void 0);return r.$$set=pe=>{e=jt(jt({},e),tr(pe)),t(29,s=Pn(e,i)),"use"in pe&&t(2,d=pe.use),"class"in pe&&t(3,m=pe.class),"style"in pe&&t(4,g=pe.style),"color"in pe&&t(5,h=pe.color),"nonInteractive"in pe&&t(6,p=pe.nonInteractive),"ripple"in pe&&t(7,_=pe.ripple),"wrapper"in pe&&t(8,x=pe.wrapper),"activated"in pe&&t(1,S=pe.activated),"role"in pe&&t(9,M=pe.role),"selected"in pe&&t(0,w=pe.selected),"disabled"in pe&&t(10,C=pe.disabled),"skipRestoreFocus"in pe&&t(11,G=pe.skipRestoreFocus),"tabindex"in pe&&t(30,v=pe.tabindex),"inputId"in pe&&t(31,D=pe.inputId),"href"in pe&&t(12,I=pe.href),"component"in pe&&t(13,X=pe.component),"tag"in pe&&t(14,se=pe.tag),"$$scope"in pe&&t(37,o=pe.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&1073808449&&t(21,n=f(v)?!p&&!C&&(w||O&&O.checked)?0:-1:v)},[w,S,d,m,g,h,p,_,x,M,C,G,I,X,se,Me,O,j,K,V,U,n,c,J,R,q,re,be,Pe,s,v,D,$e,We,a,Te,Dt,o]}class Lf extends gt{constructor(e){super(),_t(this,e,My,xy,ht,{use:2,class:3,style:4,color:5,nonInteractive:6,ripple:7,wrapper:8,activated:1,role:9,selected:0,disabled:10,skipRestoreFocus:11,tabindex:30,inputId:31,href:12,component:13,tag:14,action:15,getPrimaryText:32,getElement:33},null,[-1,-1])}get action(){return this.$$.ctx[15]}get getPrimaryText(){return this.$$.ctx[32]}get getElement(){return this.$$.ctx[33]}}const Df=Jn({class:"mdc-deprecated-list-item__text",tag:"span"});Jn({class:"mdc-deprecated-list-item__primary-text",tag:"span"});Jn({class:"mdc-deprecated-list-item__secondary-text",tag:"span"});function wy(r){let e,t,n,i,s,a;const o=r[8].default,l=ln(o,r,r[7],null);let c=[{class:t=si({[r[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":r[4]})},r[5]],u={};for(let f=0;f<c.length;f+=1)u=jt(u,c[f]);return{c(){e=Pi("span"),l&&l.c(),this.h()},l(f){e=ki(f,"SPAN",{class:!0});var d=Ni(e);l&&l.l(d),d.forEach(Ee),this.h()},h(){la(e,u)},m(f,d){Fe(f,e,d),l&&l.m(e,null),r[9](e),i=!0,s||(a=[yi(n=Pa.call(null,e,r[0])),yi(r[3].call(null,e))],s=!0)},p(f,[d]){l&&l.p&&(!i||d&128)&&cn(l,o,f,f[7],i?fn(o,f[7],d,null):un(f[7]),null),la(e,u=rr(c,[(!i||d&2&&t!==(t=si({[f[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":f[4]})))&&{class:t},d&32&&f[5]])),n&&Ir(n.update)&&d&1&&n.update.call(null,f[0])},i(f){i||(ie(l,f),i=!0)},o(f){ce(l,f),i=!1},d(f){f&&Ee(e),l&&l.d(f),r[9](null),s=!1,ys(a)}}}function Ay(r,e,t){const n=["use","class","getElement"];let i=Pn(e,n),{$$slots:s={},$$scope:a}=e;const o=Kr(er());let{use:l=[]}=e,{class:c=""}=e,u,f=Wt("SMUI:list:graphic:menu-selection-group");function d(){return u}function m(g){Rn[g?"unshift":"push"](()=>{u=g,t(2,u)})}return r.$$set=g=>{e=jt(jt({},e),tr(g)),t(5,i=Pn(e,n)),"use"in g&&t(0,l=g.use),"class"in g&&t(1,c=g.class),"$$scope"in g&&t(7,a=g.$$scope)},[l,c,u,o,f,i,d,a,s,m]}class nl extends gt{constructor(e){super(),_t(this,e,Ay,wy,ht,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}Jn({class:"mdc-deprecated-list-item__meta",tag:"span"});Jn({class:"mdc-deprecated-list-group",tag:"div"});Jn({class:"mdc-deprecated-list-group__subheader",tag:"h3"});class Ey{constructor(e,t=""){zi(this,"filename");zi(this,"name");zi(this,"colors",{});zi(this,"links",{});zi(this,"joints",[]);zi(this,"prefix","");this.filename=e,this.prefix=t}async load(){return fetch(this.filename).then(e=>e.text()).then(e=>new window.DOMParser().parseFromString(e,"text/xml")).then(e=>this.parseRobotXMLNode(e.documentElement))}parseRobotXMLNode(e){const t=e.nodeName;if(t!=="robot")throw new Error(`Invalid URDF: no root node ${t}`);return this.name=e.getAttribute("name"),this.parseColorsFromRobot(e),this.parseLinks(e),this.parseJoints(e),{name:this.name,links:this.links,joints:this.joints}}parseColorsFromRobot(e){const t=e.getElementsByTagName("material");for(let n=0;n<t.length;n++){const i=t[n],s=this.colorFromMaterial(i);s&&(this.colors[s.name]=s.rgba)}}colorFromMaterial(e){if(!e.hasAttribute("name")){console.warn("Found material-tag with name without name inside robot tag!");return}const t=e.getAttribute("name"),n=e.getElementsByTagName("color");if(n.length===0)return;const i=n[0];if(!i.hasAttribute("rgba")){console.warn(`Color tag ${t} does not have expected "rgba" attribute!`);return}return{name:t,rgba:Ar(i,"rgba")}}parseLinks(e){const t=e.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n],s=i.getElementsByTagName("visual"),a={visual:[]};i.hasAttribute("name")&&(a.name=i.getAttribute("name"),this.links[a.name]=a);for(let o=0;o<s.length;o++)a.visual.push(this.parseVisual(s[o]))}}parseVisual(e){let t={};for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"geometry":this.parseGeometry(i,t);break;case"origin":let s=Ar(i);s&&(t.origin_xyz=s);let a=Ar(i,"rpy");a&&(t.origin_rpy=a);break;case"material":const o=i.getElementsByTagName("color");if(o.length>0&&o[0].hasAttribute("rgba"))t.color_rgba=Ar(o[0],"rgba");else if(i.hasAttribute("name")){let l=i.getAttribute("name");t.color_rgba=this.colors[l]}}}return t}parseGeometry(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"mesh":let s=[1,1,1],a=i.getAttribute("scale");if(a){const f=a.split(" ");for(const d in f)s[d]=parseFloat(f[d])}let o=i.getAttribute("filename");o=o.replace("package:/",this.prefix);let l="stl";switch(o.substring(o.length-3)){case"fbx":l="fbx";break;case"obj":l="obj";break;case"stl":l="stl";break;case"dae":l="dae";break;default:throw new Error("Unknown type "+o)}t.geometry={filename:o,type:l,scale:s},t.type="mesh";return;case"cylinder":const c={};i.hasAttribute("length")&&(c.length=parseFloat(i.getAttribute("length"))),i.hasAttribute("radius")&&(c.radius=parseFloat(i.getAttribute("radius"))),t.geometry=c,t.type="cylinder";return;case"box":const u={size:[1,1,1]};if(i.hasAttribute("size")){const d=i.getAttribute("size").split(" ");for(const m in d)u.size[m]=parseFloat(d[m])}t.geometry=u;return}}}parseJoints(e){const t=e.getElementsByTagName("joint");for(let n=0;n<t.length;n++){const i=t[n],s=i.getElementsByTagName("origin");let a=[0,0,0],o=[0,0,0];if(s.length===1){let d=Ar(s[0]);d&&(o=d);let m=Ar(s[0],"rpy");m&&(a=m)}let l;const c=i.getElementsByTagName("parent");if(c.length===1){const d=c[0].getAttribute("link");d&&this.links[d]?l=this.links[d]:l={name:d,visual:[]}}let u;const f=i.getElementsByTagName("child");if(f.length===1){const d=f[0].getAttribute("link");d&&this.links[d]?u=this.links[d]:u={name:d,visual:[]}}if(u&&l){const d={name:i.getAttribute("name")||void 0,origin_rpy:a,origin_xyz:o,parent:l,child:u};this.joints.push(d)}}}getRootJoints(){const e=[];for(const t of this.joints){let n=!0;for(const i of this.joints)if(t.parent.name===i.child.name){n=!1;break}n&&e.push(t)}return console.log(e),e}getChildJoints(e){const t=[];if(!this.joints)return[];for(const n of this.joints)n.parent===e&&t.push(n);return t}}function Su(r,e,t){const n=r.slice();return n[5]=e[t],n}function Ty(r){let e,t;return e=new nl({props:{class:"material-icons",$$slots:{default:[Iy]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&256&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Cy(r){let e,t;return e=new nl({props:{class:"material-icons",$$slots:{default:[Ly]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&257&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Iy(r){let e;return{c(){e=Ss("circle")},l(t){e=Ms(t,"circle")},m(t,n){Fe(t,e,n)},d(t){t&&Ee(e)}}}function Ly(r){let e=r[0]?"folder_open":"folder",t;return{c(){t=Ss(e)},l(n){t=Ms(n,e)},m(n,i){Fe(n,t,i)},p(n,i){i&1&&e!==(e=n[0]?"folder_open":"folder")&&va(t,e)},d(n){n&&Ee(t)}}}function Dy(r){let e=r[2].name+"",t;return{c(){t=Ss(e)},l(n){t=Ms(n,e)},m(n,i){Fe(n,t,i)},p(n,i){i&4&&e!==(e=n[2].name+"")&&va(t,e)},d(n){n&&Ee(t)}}}function Ry(r){let e,t,n,i,s;const a=[Cy,Ty],o=[];function l(c,u){return c[3].length>0?0:1}return e=l(r),t=o[e]=a[e](r),i=new Df({props:{$$slots:{default:[Dy]},$$scope:{ctx:r}}}),{c(){t.c(),n=Mt(),Ie(i.$$.fragment)},l(c){t.l(c),n=wt(c),Ne(i.$$.fragment,c)},m(c,u){o[e].m(c,u),Fe(c,n,u),Le(i,c,u),s=!0},p(c,u){t.p(c,u);const f={};u&260&&(f.$$scope={dirty:u,ctx:c}),i.$set(f)},i(c){s||(ie(t),ie(i.$$.fragment,c),s=!0)},o(c){ce(t),ce(i.$$.fragment,c),s=!1},d(c){o[e].d(c),c&&Ee(n),De(i,c)}}}function Mu(r){let e,t,n=r[3],i=[];for(let a=0;a<n.length;a+=1)i[a]=wu(Su(r,n,a));const s=a=>ce(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Ze()},l(a){for(let o=0;o<i.length;o+=1)i[o].l(a);e=Ze()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);Fe(a,e,o),t=!0},p(a,o){if(o&10){n=a[3];let l;for(l=0;l<n.length;l+=1){const c=Su(a,n,l);i[l]?(i[l].p(c,o),ie(i[l],1)):(i[l]=wu(c),i[l].c(),ie(i[l],1),i[l].m(e.parentNode,e))}for(Jt(),l=n.length;l<i.length;l+=1)s(l);Qt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)ie(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)ce(i[o]);t=!1},d(a){xs(i,a),a&&Ee(e)}}}function wu(r){let e,t;return e=new Rf({props:{joint:r[5],parser:r[1]}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.parser=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Py(r){let e,t,n,i;e=new Lf({props:{$$slots:{default:[Ry]},$$scope:{ctx:r}}}),e.$on("SMUI:action",r[4]);let s=r[0]&&Mu(r);return{c(){Ie(e.$$.fragment),t=Mt(),s&&s.c(),n=Ze()},l(a){Ne(e.$$.fragment,a),t=wt(a),s&&s.l(a),n=Ze()},m(a,o){Le(e,a,o),Fe(a,t,o),s&&s.m(a,o),Fe(a,n,o),i=!0},p(a,[o]){const l={};o&261&&(l.$$scope={dirty:o,ctx:a}),e.$set(l),a[0]?s?(s.p(a,o),o&1&&ie(s,1)):(s=Mu(a),s.c(),ie(s,1),s.m(n.parentNode,n)):s&&(Jt(),ce(s,1,1,()=>{s=null}),Qt())},i(a){i||(ie(e.$$.fragment,a),ie(s),i=!0)},o(a){ce(e.$$.fragment,a),ce(s),i=!1},d(a){De(e,a),a&&Ee(t),s&&s.d(a),a&&Ee(n)}}}function ky(r,e,t){let{parser:n}=e,{joint:i}=e,{expanded:s=!0}=e;const a=n.getChildJoints(i.child),o=()=>{t(0,s=!s)};return r.$$set=l=>{"parser"in l&&t(1,n=l.parser),"joint"in l&&t(2,i=l.joint),"expanded"in l&&t(0,s=l.expanded)},[s,n,i,a,o]}class Rf extends gt{constructor(e){super(),_t(this,e,ky,Py,ht,{parser:1,joint:2,expanded:0})}}function Au(r,e,t){const n=r.slice();return n[3]=e[t],n}function Ny(r){let e=r[0]?"folder_open":"folder",t;return{c(){t=Ss(e)},l(n){t=Ms(n,e)},m(n,i){Fe(n,t,i)},p(n,i){i&1&&e!==(e=n[0]?"folder_open":"folder")&&va(t,e)},d(n){n&&Ee(t)}}}function Fy(r){let e=r[1].name+"",t;return{c(){t=Ss(e)},l(n){t=Ms(n,e)},m(n,i){Fe(n,t,i)},p(n,i){i&2&&e!==(e=n[1].name+"")&&va(t,e)},d(n){n&&Ee(t)}}}function Oy(r){let e,t,n,i;return e=new nl({props:{class:"material-icons",$$slots:{default:[Ny]},$$scope:{ctx:r}}}),n=new Df({props:{$$slots:{default:[Fy]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment),t=Mt(),Ie(n.$$.fragment)},l(s){Ne(e.$$.fragment,s),t=wt(s),Ne(n.$$.fragment,s)},m(s,a){Le(e,s,a),Fe(s,t,a),Le(n,s,a),i=!0},p(s,a){const o={};a&65&&(o.$$scope={dirty:a,ctx:s}),e.$set(o);const l={};a&66&&(l.$$scope={dirty:a,ctx:s}),n.$set(l)},i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){ce(e.$$.fragment,s),ce(n.$$.fragment,s),i=!1},d(s){De(e,s),s&&Ee(t),De(n,s)}}}function Eu(r){let e,t,n=r[1].getRootJoints(),i=[];for(let a=0;a<n.length;a+=1)i[a]=Tu(Au(r,n,a));const s=a=>ce(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Ze()},l(a){for(let o=0;o<i.length;o+=1)i[o].l(a);e=Ze()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);Fe(a,e,o),t=!0},p(a,o){if(o&2){n=a[1].getRootJoints();let l;for(l=0;l<n.length;l+=1){const c=Au(a,n,l);i[l]?(i[l].p(c,o),ie(i[l],1)):(i[l]=Tu(c),i[l].c(),ie(i[l],1),i[l].m(e.parentNode,e))}for(Jt(),l=n.length;l<i.length;l+=1)s(l);Qt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)ie(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)ce(i[o]);t=!1},d(a){xs(i,a),a&&Ee(e)}}}function Tu(r){let e,t;return e=new Rf({props:{joint:r[3],parser:r[1]}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.joint=n[3]),i&2&&(s.parser=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Uy(r){let e,t,n,i;e=new Lf({props:{$$slots:{default:[Oy]},$$scope:{ctx:r}}}),e.$on("SMUI:action",r[2]);let s=r[0]&&Eu(r);return{c(){Ie(e.$$.fragment),t=Mt(),s&&s.c(),n=Ze()},l(a){Ne(e.$$.fragment,a),t=wt(a),s&&s.l(a),n=Ze()},m(a,o){Le(e,a,o),Fe(a,t,o),s&&s.m(a,o),Fe(a,n,o),i=!0},p(a,[o]){const l={};o&67&&(l.$$scope={dirty:o,ctx:a}),e.$set(l),a[0]?s?(s.p(a,o),o&1&&ie(s,1)):(s=Eu(a),s.c(),ie(s,1),s.m(n.parentNode,n)):s&&(Jt(),ce(s,1,1,()=>{s=null}),Qt())},i(a){i||(ie(e.$$.fragment,a),ie(s),i=!0)},o(a){ce(e.$$.fragment,a),ce(s),i=!1},d(a){De(e,a),a&&Ee(t),s&&s.d(a),a&&Ee(n)}}}function zy(r,e,t){let{parser:n}=e,{expanded:i=!0}=e;const s=()=>{t(0,i=!i)};return r.$$set=a=>{"parser"in a&&t(1,n=a.parser),"expanded"in a&&t(0,i=a.expanded)},[i,n,s]}class By extends gt{constructor(e){super(),_t(this,e,zy,Uy,ht,{parser:1,expanded:0})}}function Gy(r){return{c:It,l:It,m:It,p:It,i:It,o:It,d:It}}function Vy(r){let e,t=`<!-- ${Ts} -->`,n,i,s;return i=new By({props:{parser:r[3]}}),{c(){e=new nr(!1),n=Mt(),Ie(i.$$.fragment),this.h()},l(a){e=ir(a,!1),n=wt(a),Ne(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),Fe(a,n,o),Le(i,a,o),s=!0},p:It,i(a){s||(ie(i.$$.fragment,a),s=!0)},o(a){ce(i.$$.fragment,a),s=!1},d(a){a&&e.d(),a&&Ee(n),De(i,a)}}}function Hy(r){let e,t=`<!-- loading ${Ts} -->`,n;return{c(){e=new nr(!1),n=Ze(),this.h()},l(i){e=ir(i,!1),n=Ze(),this.h()},h(){e.a=n},m(i,s){e.m(t,i,s),Fe(i,n,s)},p:It,i:It,o:It,d(i){i&&Ee(n),i&&e.d()}}}function Wy(r){let e,t,n,i={ctx:r,current:null,token:null,hasCatch:!1,pending:Hy,then:Vy,catch:Gy,value:7,blocks:[,,,]};return ua(t=r[0],i),{c(){e=Ze(),i.block.c()},l(s){e=Ze(),i.block.l(s)},m(s,a){Fe(s,e,a),i.block.m(s,i.anchor=a),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(s,a){r=s,i.ctx=r,a&1&&t!==(t=r[0])&&ua(t,i)||Iu(i,r,a)},i(s){n||(ie(i.block),n=!0)},o(s){for(let a=0;a<3;a+=1){const o=i.blocks[a];ce(o)}n=!1},d(s){s&&Ee(e),i.block.d(s),i.token=null,i=null}}}function jy(r){let e,t;return e=new hy({props:{$$slots:{default:[Wy]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&513&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function qy(r){let e,t;return e=new cy({props:{$$slots:{default:[jy]},$$scope:{ctx:r}}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p(n,i){const s={};i&513&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Xy(r){let e,t;return e=new mv({props:{enableZoom:!0}}),{c(){Ie(e.$$.fragment)},l(n){Ne(e.$$.fragment,n)},m(n,i){Le(e,n,i),t=!0},p:It,i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){ce(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Yy(r){return{c:It,l:It,m:It,p:It,i:It,o:It,d:It}}function Ky(r){let e,t=`<!-- ${Ts} -->`,n,i,s;return i=new bb({props:{parser:r[3]}}),{c(){e=new nr(!1),n=Mt(),Ie(i.$$.fragment),this.h()},l(a){e=ir(a,!1),n=wt(a),Ne(i.$$.fragment,a),this.h()},h(){e.a=n},m(a,o){e.m(t,a,o),Fe(a,n,o),Le(i,a,o),s=!0},p:It,i(a){s||(ie(i.$$.fragment,a),s=!0)},o(a){ce(i.$$.fragment,a),s=!1},d(a){a&&e.d(),a&&Ee(n),De(i,a)}}}function Zy(r){let e,t=`<!-- loading ${Ts} -->`,n;return{c(){e=new nr(!1),n=Ze(),this.h()},l(i){e=ir(i,!1),n=Ze(),this.h()},h(){e.a=n},m(i,s){e.m(t,i,s),Fe(i,n,s)},p:It,i:It,o:It,d(i){i&&Ee(n),i&&e.d()}}}function Jy(r){let e,t,n,i,s,a,o,l,c,u,f,d,m,g,h;e=new rn({props:{type:hs,color:"white",intensity:.2,position:[0,5,0]}}),n=new rn({props:{type:hs,color:"blue",intensity:.5,position:[5,5,0]}}),s=new rn({props:{type:hs,color:"yellow",intensity:.5,position:[-5,-5,0]}}),o=new rn({props:{type:on,makeDefault:!0,position:[.6,.6,.6],fov:25,$$slots:{default:[Xy,({ref:_})=>({8:_}),({ref:_})=>_?256:0]},$$scope:{ctx:r}}}),c=new Ib({props:{preset_name:"soft"}}),f=new Db({});let p={ctx:r,current:null,token:null,hasCatch:!1,pending:Zy,then:Ky,catch:Yy,value:7,blocks:[,,,]};return ua(g=r[0],p),{c(){Ie(e.$$.fragment),t=Mt(),Ie(n.$$.fragment),i=Mt(),Ie(s.$$.fragment),a=Mt(),Ie(o.$$.fragment),l=Mt(),Ie(c.$$.fragment),u=Mt(),Ie(f.$$.fragment),d=Mt(),m=Ze(),p.block.c()},l(_){Ne(e.$$.fragment,_),t=wt(_),Ne(n.$$.fragment,_),i=wt(_),Ne(s.$$.fragment,_),a=wt(_),Ne(o.$$.fragment,_),l=wt(_),Ne(c.$$.fragment,_),u=wt(_),Ne(f.$$.fragment,_),d=wt(_),m=Ze(),p.block.l(_)},m(_,x){Le(e,_,x),Fe(_,t,x),Le(n,_,x),Fe(_,i,x),Le(s,_,x),Fe(_,a,x),Le(o,_,x),Fe(_,l,x),Le(c,_,x),Fe(_,u,x),Le(f,_,x),Fe(_,d,x),Fe(_,m,x),p.block.m(_,p.anchor=x),p.mount=()=>m.parentNode,p.anchor=m,h=!0},p(_,x){r=_;const S={};x&512&&(S.$$scope={dirty:x,ctx:r}),o.$set(S),p.ctx=r,x&1&&g!==(g=r[0])&&ua(g,p)||Iu(p,r,x)},i(_){h||(ie(e.$$.fragment,_),ie(n.$$.fragment,_),ie(s.$$.fragment,_),ie(o.$$.fragment,_),ie(c.$$.fragment,_),ie(f.$$.fragment,_),ie(p.block),h=!0)},o(_){ce(e.$$.fragment,_),ce(n.$$.fragment,_),ce(s.$$.fragment,_),ce(o.$$.fragment,_),ce(c.$$.fragment,_),ce(f.$$.fragment,_);for(let x=0;x<3;x+=1){const S=p.blocks[x];ce(S)}h=!1},d(_){De(e,_),_&&Ee(t),De(n,_),_&&Ee(i),De(s,_),_&&Ee(a),De(o,_),_&&Ee(l),De(c,_),_&&Ee(u),De(f,_),_&&Ee(d),_&&Ee(m),p.block.d(_),p.token=null,p=null}}}function Qy(r){let e,t,n;return t=new K0({props:{shadows:!0,size:{height:r[1]-2,width:r[2]-Cu-2},rendererParameters:{logarithmicDepthBuffer:!0},$$slots:{default:[Jy]},$$scope:{ctx:r}}}),{c(){e=Pi("main"),Ie(t.$$.fragment),this.h()},l(i){e=ki(i,"MAIN",{class:!0});var s=Ni(e);Ne(t.$$.fragment,s),s.forEach(Ee),this.h()},h(){_a(e,"class","main-content svelte-1mtnv3k")},m(i,s){Fe(i,e,s),Le(t,e,null),n=!0},p(i,s){const a={};s&6&&(a.size={height:i[1]-2,width:i[2]-Cu-2}),s&513&&(a.$$scope={dirty:s,ctx:i}),t.$set(a)},i(i){n||(ie(t.$$.fragment,i),n=!0)},o(i){ce(t.$$.fragment,i),n=!1},d(i){i&&Ee(e),De(t)}}}function $y(r){let e,t,n,i,s,a,o;return Vf(r[4]),t=new $b({props:{$$slots:{default:[qy]},$$scope:{ctx:r}}}),i=new ly({props:{class:"app-content",$$slots:{default:[Qy]},$$scope:{ctx:r}}}),{c(){e=Pi("div"),Ie(t.$$.fragment),n=Mt(),Ie(i.$$.fragment),this.h()},l(l){e=ki(l,"DIV",{class:!0});var c=Ni(e);Ne(t.$$.fragment,c),n=wt(c),Ne(i.$$.fragment,c),c.forEach(Ee),this.h()},h(){_a(e,"class","drawer-container svelte-1mtnv3k")},m(l,c){Fe(l,e,c),Le(t,e,null),Hf(e,n),Le(i,e,null),s=!0,a||(o=Hn(window,"resize",r[4]),a=!0)},p(l,[c]){const u={};c&513&&(u.$$scope={dirty:c,ctx:l}),t.$set(u);const f={};c&519&&(f.$$scope={dirty:c,ctx:l}),i.$set(f)},i(l){s||(ie(t.$$.fragment,l),ie(i.$$.fragment,l),s=!0)},o(l){ce(t.$$.fragment,l),ce(i.$$.fragment,l),s=!1},d(l){l&&Ee(e),De(t),De(i),a=!1,o()}}}const Ts="/turtlebot3_description/turtlebot3_burger.xml",Cu=256;function ex(r,e,t){let n;Rt(r,qf,u=>t(5,n=u));let i=n.url.href;const s=new Ey(`${i}/${Ts}`,i);let a;Br(()=>{t(0,a=s.load())});let o=0,l=0;function c(){t(1,o=window.innerHeight),t(2,l=window.innerWidth)}return[a,o,l,s,c]}class lx extends gt{constructor(e){super(),_t(this,e,ex,$y,ht,{})}}export{lx as default};
