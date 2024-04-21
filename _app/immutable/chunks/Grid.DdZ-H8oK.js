var Wg=Object.defineProperty;var Xg=(s,e,t)=>e in s?Wg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Lt=(s,e,t)=>(Xg(s,typeof e!="symbol"?e+"":e,t),t);import{S as Vn,T as Wn,P as Hn,s as Dn,c as qi,u as Yi,g as Zi,a as ji,o as en,B as qg,e as Yg,d as Zg,f as jg,i as kt,v as Jg,k as Ht,Z as Kg,r as uc,z as hc,R as dc,b as ii,w as Kt,j as si,Q as hs,U as ri,V as go,a5 as ip,F as sp,a3 as Lu,a4 as Nu,n as Du,a6 as rp,a0 as Uu}from"./scheduler.CriFGAoC.js";import{S as Un,i as On,t as Me,a as Ie,c as mt,b as gt,m as _t,d as yt,g as Ln,e as Nn}from"./index.D7HwFdPe.js";import{d as fc,w as Vt,r as $g}from"./entry.DmhzghHB.js";import{g as pc,a as mc,e as Ur}from"./Subtitle.CyXf_pn9.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="163",Ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},op=0,Gl=1,ap=2,Qg=3,e0=0,Ou=1,gc=2,bi=3,wi=0,Pn=1,ti=2,Hi=0,Ws=1,Wl=2,Xl=3,ql=4,cp=5,ls=100,lp=101,up=102,hp=103,dp=104,fp=200,pp=201,mp=202,gp=203,rc=204,oc=205,_p=206,yp=207,vp=208,xp=209,bp=210,Mp=211,Sp=212,wp=213,Ep=214,Ap=0,Tp=1,Cp=2,_o=3,Rp=4,Pp=5,Ip=6,Lp=7,Vo=0,Np=1,Dp=2,Gi=0,Up=1,Op=2,Fp=3,Fu=4,kp=5,Bp=6,zp=7,Yl="attached",Vp="detached",_c=300,Xi=301,ds=302,yo=303,vo=304,zr=306,ki=1e3,zn=1001,xo=1002,fn=1003,ku=1004,t0=1004,Rr=1005,n0=1005,an=1006,ho=1007,i0=1007,hi=1008,s0=1008,Wi=1009,Hp=1010,Gp=1011,Bu=1012,zu=1013,Zs=1014,ni=1015,bo=1016,Vu=1017,Hu=1018,Vr=1020,Wp=35902,Xp=1021,qp=1022,Zn=1023,Yp=1024,Zp=1025,Xs=1026,Or=1027,Gu=1028,Wu=1029,jp=1030,Xu=1031,qu=1033,Ka=33776,$a=33777,Qa=33778,ec=33779,Zl=35840,jl=35841,Jl=35842,Kl=35843,Yu=36196,$l=37492,Ql=37496,eu=37808,tu=37809,nu=37810,iu=37811,su=37812,ru=37813,ou=37814,au=37815,cu=37816,lu=37817,uu=37818,hu=37819,du=37820,fu=37821,tc=36492,pu=36494,mu=36495,Jp=36283,gu=36284,_u=36285,yu=36286,Kp=2200,$p=2201,Qp=2202,Mo=2300,So=2301,nc=2302,zs=2400,Vs=2401,wo=2402,yc=2500,Zu=2501,r0=0,o0=1,a0=2,em=3200,tm=3201,fs=0,nm=1,Ui="",Cn="srgb",Ji="srgb-linear",vc="display-p3",Ho="display-p3-linear",Eo="linear",Ft="srgb",Ao="rec709",To="p3",c0=0,Us=7680,l0=7681,u0=7682,h0=7683,d0=34055,f0=34056,p0=5386,m0=512,g0=513,_0=514,y0=515,v0=516,x0=517,b0=518,vu=519,im=512,sm=513,rm=514,ju=515,om=516,am=517,cm=518,lm=519,Co=35044,M0=35048,S0=35040,w0=35045,E0=35049,A0=35041,T0=35046,C0=35050,R0=35042,P0="100",xu="300 es",Mi=2e3,Ro=2001;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oh=1234567;const qs=Math.PI/180,Fr=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function jt(s,e,t){return Math.max(e,Math.min(t,s))}function Ju(s,e){return(s%e+e)%e}function I0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function L0(s,e,t){return s!==e?(t-s)/(e-s):0}function fo(s,e,t){return(1-t)*s+t*e}function N0(s,e,t,n){return fo(s,e,1-Math.exp(-t*n))}function D0(s,e=1){return e-Math.abs(Ju(s,e*2)-e)}function U0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function O0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function F0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function k0(s,e){return s+Math.random()*(e-s)}function B0(s){return s*(.5-Math.random())}function z0(s){s!==void 0&&(Oh=s);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(s){return s*qs}function H0(s){return s*Fr}function G0(s){return(s&s-1)===0&&s!==0}function W0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function X0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function q0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*d,c*h,a*l);break;case"YZY":s.set(c*h,a*u,c*d,a*l);break;case"ZXZ":s.set(c*d,c*h,a*u,a*l);break;case"XZX":s.set(a*u,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ks={DEG2RAD:qs,RAD2DEG:Fr,generateUUID:jn,clamp:jt,euclideanModulo:Ju,mapLinear:I0,inverseLerp:L0,lerp:fo,damp:N0,pingpong:D0,smoothstep:U0,smootherstep:O0,randInt:F0,randFloat:k0,randFloatSpread:B0,seededRandom:z0,degToRad:V0,radToDeg:H0,isPowerOfTwo:G0,ceilPowerOfTwo:W0,floorPowerOfTwo:X0,setQuaternionFromProperEuler:q0,normalize:ct,denormalize:Rn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,i,r,o,a,c,l){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],v=i[1],y=i[4],b=i[7],D=i[2],T=i[5],L=i[8];return r[0]=o*_+a*v+c*D,r[3]=o*g+a*y+c*T,r[6]=o*m+a*b+c*L,r[1]=l*_+u*v+d*D,r[4]=l*g+u*y+d*T,r[7]=l*m+u*b+d*L,r[2]=h*_+f*v+p*D,r[5]=h*g+f*y+p*T,r[8]=h*m+f*b+p*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,p=t*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qc.makeScale(e,t)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new at;function um(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const Y0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Pr(s,e){return new Y0[s](e)}function Po(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hm(){const s=Po("canvas");return s.style.display="block",s}const Fh={};function dm(s){s in Fh||(Fh[s]=!0,console.warn(s))}const kh=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bh=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[Ji]:{transfer:Eo,primaries:Ao,toReference:s=>s,fromReference:s=>s},[Cn]:{transfer:Ft,primaries:Ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ho]:{transfer:Eo,primaries:To,toReference:s=>s.applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(kh)},[vc]:{transfer:Ft,primaries:To,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(kh).convertLinearToSRGB()}},Z0=new Set([Ji,Ho]),Ct={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Z0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ea[e].toReference,i=ea[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ea[s].primaries},getTransfer:function(s){return s===Ui?Eo:ea[s].transfer}};function Dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function el(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let or;class fm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Po("canvas")),or.width=e.width,or.height=e.height;const n=or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Dr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dr(t[n]/255)*255):t[n]=Dr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j0=0;class Hs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tl(i[o].image)):r.push(tl(i[o]))}else r=tl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function tl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J0=0;class Jt extends Ei{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=zn,i=zn,r=an,o=hi,a=Zn,c=Wi,l=Jt.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=jn(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=_c;Jt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,i=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(f+1)/2,D=(m+1)/2,T=(u+h)/4,L=(d+_)/4,F=(p+g)/4;return y>b&&y>D?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=L/n):b>D?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=T/i,r=F/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=L/r,i=F/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pm extends Ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends pm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xc extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K0 extends Jn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new xc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ku extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $0 extends Jn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ku(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class It{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const h=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(d!==_||c!==h||l!==f||u!==p){let g=1-a;const m=c*h+l*f+u*p+d*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const D=Math.sqrt(y),T=Math.atan2(D,m*v);g=Math.sin(g*T)/D,a=Math.sin(a*T)/D}const b=a*v;if(c=c*g+h*b,l=l*g+f*b,u=u*g+p*b,d=d*g+_*b,g===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+c*f-l*h,e[t+1]=c*p+u*h+l*d-a*f,e[t+2]=l*p+u*f+a*h-c*d,e[t+3]=u*p-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(r/2),h=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"YZX":this._x=h*u*d+l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d-h*f*p;break;case"XZY":this._x=h*u*d-l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=i+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new R,zh=new It;class In{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),na.subVectors(this.max,Zr),ar.subVectors(e.a,Zr),cr.subVectors(e.b,Zr),lr.subVectors(e.c,Zr),Qi.subVectors(cr,ar),es.subVectors(lr,cr),vs.subVectors(ar,lr);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-vs.z,vs.y,Qi.z,0,-Qi.x,es.z,0,-es.x,vs.z,0,-vs.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-vs.y,vs.x,0];return!il(t,ar,cr,lr,na)||(t=[1,0,0,0,1,0,0,0,1],!il(t,ar,cr,lr,na))?!1:(ia.crossVectors(Qi,es),t=[ia.x,ia.y,ia.z],il(t,ar,cr,lr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new R,new R,new R,new R,new R,new R,new R,new R],ai=new R,ta=new In,ar=new R,cr=new R,lr=new R,Qi=new R,es=new R,vs=new R,Zr=new R,na=new R,ia=new R,xs=new R;function il(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){xs.fromArray(s,r);const a=i.x*Math.abs(xs.x)+i.y*Math.abs(xs.y)+i.z*Math.abs(xs.z),c=e.dot(xs),l=t.dot(xs),u=n.dot(xs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Q0=new In,jr=new R,sl=new R;class bn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Q0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(jr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(sl)),this.expandByPoint(jr.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new R,rl=new R,sa=new R,ts=new R,ol=new R,ra=new R,al=new R;class er{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(rl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=ts.dot(this.direction),c=-ts.dot(sa),l=ts.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*c-a,h=o*a-c,p=r*u,d>=0)if(h>=-p)if(h<=p){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=p?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(rl).addScaledVector(sa,h),f}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),i=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,i,r){ol.subVectors(t,e),ra.subVectors(n,e),al.crossVectors(ol,ra);let o=this.direction.dot(al),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);const c=a*this.direction.dot(ra.crossVectors(ts,ra));if(c<0)return null;const l=a*this.direction.dot(ol.cross(ts));if(l<0||c+l>o)return null;const u=-a*ts.dot(al);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,r,o,a,c,l,u,d,h,f,p,_,g){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,d,h,f,p,_,g)}set(e,t,n,i,r,o,a,c,l,u,d,h,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,p=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,p=l*u,_=l*d;t[0]=h+_*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,p=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,p=a*u,_=a*d;t[0]=c*u,t[4]=p*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+p,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,t,n){const i=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),ns.crossVectors(n,Xn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),ns.crossVectors(n,Xn)),ns.normalize(),oa.crossVectors(Xn,ns),i[0]=ns.x,i[4]=oa.x,i[8]=Xn.x,i[1]=ns.y,i[5]=oa.y,i[9]=Xn.y,i[2]=ns.z,i[6]=oa.z,i[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],y=n[7],b=n[11],D=n[15],T=i[0],L=i[4],F=i[8],E=i[12],S=i[1],U=i[5],H=i[9],k=i[13],W=i[2],Z=i[6],B=i[10],G=i[14],z=i[3],K=i[7],oe=i[11],fe=i[15];return r[0]=o*T+a*S+c*W+l*z,r[4]=o*L+a*U+c*Z+l*K,r[8]=o*F+a*H+c*B+l*oe,r[12]=o*E+a*k+c*G+l*fe,r[1]=u*T+d*S+h*W+f*z,r[5]=u*L+d*U+h*Z+f*K,r[9]=u*F+d*H+h*B+f*oe,r[13]=u*E+d*k+h*G+f*fe,r[2]=p*T+_*S+g*W+m*z,r[6]=p*L+_*U+g*Z+m*K,r[10]=p*F+_*H+g*B+m*oe,r[14]=p*E+_*k+g*G+m*fe,r[3]=v*T+y*S+b*W+D*z,r[7]=v*L+y*U+b*Z+D*K,r[11]=v*F+y*H+b*B+D*oe,r[15]=v*E+y*k+b*G+D*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+r*c*d-i*l*d-r*a*h+n*l*h+i*a*f-n*c*f)+_*(+t*c*f-t*l*h+r*o*h-i*o*f+i*l*u-r*c*u)+g*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*u-n*l*u)+m*(-i*a*u-t*c*d+t*a*h+i*o*d-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=d*g*l-_*h*l+_*c*f-a*g*f-d*c*m+a*h*m,y=p*h*l-u*g*l-p*c*f+o*g*f+u*c*m-o*h*m,b=u*_*l-p*d*l+p*a*f-o*_*f-u*a*m+o*d*m,D=p*d*c-u*_*c-p*a*h+o*_*h+u*a*g-o*d*g,T=t*v+n*y+i*b+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=v*L,e[1]=(_*h*r-d*g*r-_*i*f+n*g*f+d*i*m-n*h*m)*L,e[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*m+n*c*m)*L,e[3]=(d*c*r-a*h*r-d*i*l+n*h*l+a*i*f-n*c*f)*L,e[4]=y*L,e[5]=(u*g*r-p*h*r+p*i*f-t*g*f-u*i*m+t*h*m)*L,e[6]=(p*c*r-o*g*r-p*i*l+t*g*l+o*i*m-t*c*m)*L,e[7]=(o*h*r-u*c*r+u*i*l-t*h*l-o*i*f+t*c*f)*L,e[8]=b*L,e[9]=(p*d*r-u*_*r-p*n*f+t*_*f+u*n*m-t*d*m)*L,e[10]=(o*_*r-p*a*r+p*n*l-t*_*l-o*n*m+t*a*m)*L,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*f-t*a*f)*L,e[12]=D*L,e[13]=(u*_*i-p*d*i+p*n*h-t*_*h-u*n*g+t*d*g)*L,e[14]=(p*a*i-o*_*i-p*n*c+t*_*c+o*n*g-t*a*g)*L,e[15]=(o*d*i-u*a*i+u*n*c-t*d*c-o*n*h+t*a*h)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,p=r*d,_=o*u,g=o*d,m=a*d,v=c*l,y=c*u,b=c*d,D=n.x,T=n.y,L=n.z;return i[0]=(1-(_+m))*D,i[1]=(f+b)*D,i[2]=(p-y)*D,i[3]=0,i[4]=(f-b)*T,i[5]=(1-(h+m))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(p+y)*L,i[9]=(g-v)*L,i[10]=(1-(h+_))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ur.set(i[0],i[1],i[2]).length();const o=ur.set(i[4],i[5],i[6]).length(),a=ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);const l=1/r,u=1/o,d=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Mi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let f,p;if(a===Mi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Ro)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Mi){const c=this.elements,l=1/(t-e),u=1/(n-i),d=1/(o-r),h=(t+e)*l,f=(n+i)*u;let p,_;if(a===Mi)p=(o+r)*d,_=-2*d;else if(a===Ro)p=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ur=new R,ci=new Ve,e_=new R(0,0,0),t_=new R(1,1,1),ns=new R,oa=new R,Xn=new R,Vh=new Ve,Hh=new It;class Gn{constructor(e=0,t=0,n=0,i=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const Gh=new R,hr=new It,Pi=new Ve,aa=new R,Jr=new R,i_=new R,s_=new It,Wh=new R(1,0,0),Xh=new R(0,1,0),qh=new R(0,0,1),Yh={type:"added"},r_={type:"removed"},dr={type:"childadded",child:null},cl={type:"childremoved",child:null};class pt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new R,t=new Gn,n=new It,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new at}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Jr,aa,this.up):Pi.lookAt(aa,Jr,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Pi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r_),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new R(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new R,Ii=new R,ll=new R,Li=new R,fr=new R,pr=new R,Zh=new R,ul=new R,hl=new R,dl=new R;class Yn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),li.subVectors(e,t),i.cross(li);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){li.subVectors(i,t),Ii.subVectors(n,t),ll.subVectors(e,t);const o=li.dot(li),a=li.dot(Ii),c=li.dot(ll),l=Ii.dot(Ii),u=Ii.dot(ll),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,p=(o*u-a*c)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Li.x),c.addScaledVector(o,Li.y),c.addScaledVector(a,Li.z),c)}static isFrontFacing(e,t,n,i){return li.subVectors(n,t),Ii.subVectors(e,t),li.cross(Ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),li.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;fr.subVectors(i,n),pr.subVectors(r,n),ul.subVectors(e,n);const c=fr.dot(ul),l=pr.dot(ul);if(c<=0&&l<=0)return t.copy(n);hl.subVectors(e,i);const u=fr.dot(hl),d=pr.dot(hl);if(u>=0&&d<=u)return t.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(fr,o);dl.subVectors(e,r);const f=fr.dot(dl),p=pr.dot(dl);if(p>=0&&f<=p)return t.copy(r);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(pr,a);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return Zh.subVectors(r,i),a=(d-u)/(d-u+(f-p)),t.copy(i).addScaledVector(Zh,a);const m=1/(g+_+h);return o=_*m,a=h*m,t.copy(n).addScaledVector(fr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},ca={h:0,s:0,l:0};function fl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ct.workingColorSpace){if(e=Ju(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fl(o,r,e+1/3),this.g=fl(o,r,e),this.b=fl(o,r,e-1/3)}return Ct.toWorkingColorSpace(this,i),this}setStyle(e,t=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const n=mm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=el(e.r),this.g=el(e.g),this.b=el(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Ct.fromWorkingColorSpace(yn.copy(this),e),Math.round(jt(yn.r*255,0,255))*65536+Math.round(jt(yn.g*255,0,255))*256+Math.round(jt(yn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,i=yn.g,r=yn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Cn){Ct.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,i=yn.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(ca);const n=fo(is.h,ca.h,t),i=fo(is.s,ca.s,t),r=fo(is.l,ca.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Re;Re.NAMES=mm;let o_=0;class Mn extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ws,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=oc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rc&&(n.blendSrc=this.blendSrc),this.blendDst!==oc&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kn extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Oi=a_();function a_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Bn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=jt(s,-65504,65504),Oi.floatView[0]=s;const e=Oi.uint32View[0],t=e>>23&511;return Oi.baseTable[t]+((e&8388607)>>Oi.shiftTable[t])}function ao(s){const e=s>>10;return Oi.uint32View[0]=Oi.mantissaTable[Oi.offsetTable[e]+(s&1023)]+Oi.exponentTable[e],Oi.floatView[0]}const c_={toHalfFloat:Bn,fromHalfFloat:ao},sn=new R,la=new re;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Co&&(e.usage=this.usage),e}}class l_ extends At{constructor(e,t,n){super(new Int8Array(e),t,n)}}class u_ extends At{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class h_ extends At{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class d_ extends At{constructor(e,t,n){super(new Int16Array(e),t,n)}}class $u extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class f_ extends At{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Qu extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class p_ extends At{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ao(this.array[e*this.itemSize]);return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=Bn(t),this}getY(e){let t=ao(this.array[e*this.itemSize+1]);return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=Bn(t),this}getZ(e){let t=ao(this.array[e*this.itemSize+2]);return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=Bn(t),this}getW(e){let t=ao(this.array[e*this.itemSize+3]);return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=Bn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=Bn(t),this.array[e+1]=Bn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=Bn(t),this.array[e+1]=Bn(n),this.array[e+2]=Bn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=Bn(t),this.array[e+1]=Bn(n),this.array[e+2]=Bn(i),this.array[e+3]=Bn(r),this}}class Ne extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let m_=0;const ei=new Ve,pl=new pt,mr=new R,qn=new In,Kr=new In,hn=new R;class st extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?Qu:$u)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ne(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(qn.min,Kr.min),qn.expandByPoint(hn),hn.addVectors(qn.max,Kr.max),qn.expandByPoint(hn)):(qn.expandByPoint(Kr.min),qn.expandByPoint(Kr.max))}qn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)hn.fromBufferAttribute(a,l),c&&(mr.fromBufferAttribute(e,l),hn.add(mr)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new R,c[F]=new R;const l=new R,u=new R,d=new R,h=new re,f=new re,p=new re,_=new R,g=new R;function m(F,E,S){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,S),h.fromBufferAttribute(r,F),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),u.sub(l),d.sub(l),f.sub(h),p.sub(h);const U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(U),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(U),a[F].add(_),a[E].add(_),a[S].add(_),c[F].add(g),c[E].add(g),c[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,E=v.length;F<E;++F){const S=v[F],U=S.start,H=S.count;for(let k=U,W=U+H;k<W;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new R,b=new R,D=new R,T=new R;function L(F){D.fromBufferAttribute(i,F),T.copy(D);const E=a[F];y.copy(E),y.sub(D.multiplyScalar(D.dot(E))).normalize(),b.crossVectors(T,E);const U=b.dot(c[F])<0?-1:1;o.setXYZW(F,y.x,y.y,y.z,U)}for(let F=0,E=v.length;F<E;++F){const S=v[F],U=S.start,H=S.count;for(let k=U,W=U+H;k<W;k+=3)L(e.getX(k+0)),L(e.getX(k+1)),L(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)h[p++]=l[f++]}return new At(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new st,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new Ve,bs=new er,ua=new bn,Jh=new R,gr=new R,_r=new R,yr=new R,ml=new R,ha=new R,da=new re,fa=new re,pa=new re,Kh=new R,$h=new R,Qh=new R,ma=new R,ga=new R;class Se extends pt{constructor(e=new st,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(ml.fromBufferAttribute(d,e),o?ha.addScaledVector(ml,u):ha.addScaledVector(ml.sub(t),u))}t.add(ha)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(ua.containsPoint(bs.origin)===!1&&(bs.intersectSphere(ua,Jh)===null||bs.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(jh.copy(r).invert(),bs.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,D=y;b<D;b+=3){const T=a.getX(b),L=a.getX(b+1),F=a.getX(b+2);i=_a(this,m,e,n,l,u,d,T,L,F),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);i=_a(this,o,e,n,l,u,d,v,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,D=y;b<D;b+=3){const T=b,L=b+1,F=b+2;i=_a(this,m,e,n,l,u,d,T,L,F),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,y=g+1,b=g+2;i=_a(this,o,e,n,l,u,d,v,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function g_(s,e,t,n,i,r,o,a){let c;if(e.side===Pn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===wi,a),c===null)return null;ga.copy(a),ga.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ga);return l<t.near||l>t.far?null:{distance:l,point:ga.clone(),object:s}}function _a(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,gr),s.getVertexPosition(c,_r),s.getVertexPosition(l,yr);const u=g_(s,e,t,n,gr,_r,yr,ma);if(u){i&&(da.fromBufferAttribute(i,a),fa.fromBufferAttribute(i,c),pa.fromBufferAttribute(i,l),u.uv=Yn.getInterpolation(ma,gr,_r,yr,da,fa,pa,new re)),r&&(da.fromBufferAttribute(r,a),fa.fromBufferAttribute(r,c),pa.fromBufferAttribute(r,l),u.uv1=Yn.getInterpolation(ma,gr,_r,yr,da,fa,pa,new re)),o&&(Kh.fromBufferAttribute(o,a),$h.fromBufferAttribute(o,c),Qh.fromBufferAttribute(o,l),u.normal=Yn.getInterpolation(ma,gr,_r,yr,Kh,$h,Qh,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};Yn.getNormal(gr,_r,yr,d.normal),u.face=d}return u}class Zt extends st{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(d,2));function p(_,g,m,v,y,b,D,T,L,F,E){const S=b/L,U=D/F,H=b/2,k=D/2,W=T/2,Z=L+1,B=F+1;let G=0,z=0;const K=new R;for(let oe=0;oe<B;oe++){const fe=oe*U-k;for(let Ae=0;Ae<Z;Ae++){const Ee=Ae*S-H;K[_]=Ee*v,K[g]=fe*y,K[m]=W,l.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[m]=T>0?1:-1,u.push(K.x,K.y,K.z),d.push(Ae/L),d.push(1-oe/F),G+=1}}for(let oe=0;oe<F;oe++)for(let fe=0;fe<L;fe++){const Ae=h+fe+Z*oe,Ee=h+fe+Z*(oe+1),V=h+(fe+1)+Z*(oe+1),ee=h+(fe+1)+Z*oe;c.push(Ae,Ee,ee),c.push(Ee,V,ee),z+=6}a.addGroup(f,z,E),f+=z,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(s){const e={};for(let t=0;t<s.length;t++){const n=kr(s[t]);for(const i in n)e[i]=n[i]}return e}function __(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const _m={clone:kr,merge:An};var y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y_,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=__(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new R,ed=new re,td=new re;class on extends Mc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,ed,td),t.subVectors(td,ed)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=-90,xr=1;class ym extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(vr,xr,e,t);i.layers=this.layers,this.add(i);const r=new on(vr,xr,e,t);r.layers=this.layers,this.add(r);const o=new on(vr,xr,e,t);o.layers=this.layers,this.add(o);const a=new on(vr,xr,e,t);a.layers=this.layers,this.add(a);const c=new on(vr,xr,e,t);c.layers=this.layers,this.add(c);const l=new on(vr,xr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Go extends Jt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vm extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Go(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zt(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Hi});r.uniforms.tEquirect.value=t;const o=new Se(i,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=an),new ym(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const gl=new R,x_=new R,b_=new at;class Di{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gl.subVectors(n,t).cross(x_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||b_.getNormalMatrix(e),i=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new bn,ya=new R;class Wo{constructor(e=new Di,t=new Di,n=new Di,i=new Di,r=new Di,o=new Di){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],d=i[6],h=i[7],f=i[8],p=i[9],_=i[10],g=i[11],m=i[12],v=i[13],y=i[14],b=i[15];if(n[0].setComponents(c-r,h-l,g-f,b-m).normalize(),n[1].setComponents(c+r,h+l,g+f,b+m).normalize(),n[2].setComponents(c+o,h+u,g+p,b+v).normalize(),n[3].setComponents(c-o,h-u,g-p,b-v).normalize(),n[4].setComponents(c-a,h-d,g-_,b-y).normalize(),t===Mi)n[5].setComponents(c+a,h+d,g+_,b+y).normalize();else if(t===Ro)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ya.x=i.normal.x>0?e.max.x:e.min.x,ya.y=i.normal.y>0?e.max.y:e.min.y,ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function M_(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c._updateRange,h=c.updateRanges;if(s.bindBuffer(l,a),d.count===-1&&h.length===0&&s.bufferSubData(l,0,u),h.length!==0){for(let f=0,p=h.length;f<p;f++){const _=h[f];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class ps extends st{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=e/a,h=t/c,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const v=m*h-o;for(let y=0;y<l;y++){const b=y*d-r;p.push(b,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const y=v+l*m,b=v+l*(m+1),D=v+1+l*(m+1),T=v+1+l*m;f.push(y,b,T),f.push(b,D,T)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O_=`#ifdef USE_IRIDESCENCE
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
#endif`,F_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,q_=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,Y_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ty=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
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
}`,hy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,my=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,gy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,by=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,My=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Sy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ny=`#if defined( USE_POINTS_UV )
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
#endif`,Dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ky=`#ifdef USE_MORPHNORMALS
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
#endif`,By=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,zy=`#ifdef USE_MORPHTARGETS
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
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cv=`float getShadowMask() {
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
}`,lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dv=`#ifdef USE_SKINNING
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
#endif`,fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_v=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yv=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,Mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wv=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Pv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Iv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Lv=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kv=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zv=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hv=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Wv=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,qv=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Zv=`#define STANDARD
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Jv=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ex=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tx=`uniform float rotation;
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
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:S_,alphahash_pars_fragment:w_,alphamap_fragment:E_,alphamap_pars_fragment:A_,alphatest_fragment:T_,alphatest_pars_fragment:C_,aomap_fragment:R_,aomap_pars_fragment:P_,batching_pars_vertex:I_,batching_vertex:L_,begin_vertex:N_,beginnormal_vertex:D_,bsdfs:U_,iridescence_fragment:O_,bumpmap_pars_fragment:F_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:V_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:W_,color_vertex:X_,common:q_,cube_uv_reflection_fragment:Y_,defaultnormal_vertex:Z_,displacementmap_pars_vertex:j_,displacementmap_vertex:J_,emissivemap_fragment:K_,emissivemap_pars_fragment:$_,colorspace_fragment:Q_,colorspace_pars_fragment:ey,envmap_fragment:ty,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:sy,envmap_physical_pars_fragment:gy,envmap_vertex:ry,fog_vertex:oy,fog_pars_vertex:ay,fog_fragment:cy,fog_pars_fragment:ly,gradientmap_pars_fragment:uy,lightmap_fragment:hy,lightmap_pars_fragment:dy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:py,lights_pars_begin:my,lights_toon_fragment:_y,lights_toon_pars_fragment:yy,lights_phong_fragment:vy,lights_phong_pars_fragment:xy,lights_physical_fragment:by,lights_physical_pars_fragment:My,lights_fragment_begin:Sy,lights_fragment_maps:wy,lights_fragment_end:Ey,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Ry,map_fragment:Py,map_pars_fragment:Iy,map_particle_fragment:Ly,map_particle_pars_fragment:Ny,metalnessmap_fragment:Dy,metalnessmap_pars_fragment:Uy,morphinstance_vertex:Oy,morphcolor_vertex:Fy,morphnormal_vertex:ky,morphtarget_pars_vertex:By,morphtarget_vertex:zy,normal_fragment_begin:Vy,normal_fragment_maps:Hy,normal_pars_fragment:Gy,normal_pars_vertex:Wy,normal_vertex:Xy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:Jy,opaque_fragment:Ky,packing:$y,premultiplied_alpha_fragment:Qy,project_vertex:ev,dithering_fragment:tv,dithering_pars_fragment:nv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:rv,shadowmap_pars_vertex:ov,shadowmap_vertex:av,shadowmask_pars_fragment:cv,skinbase_vertex:lv,skinning_pars_vertex:uv,skinning_vertex:hv,skinnormal_vertex:dv,specularmap_fragment:fv,specularmap_pars_fragment:pv,tonemapping_fragment:mv,tonemapping_pars_fragment:gv,transmission_fragment:_v,transmission_pars_fragment:yv,uv_pars_fragment:vv,uv_pars_vertex:xv,uv_vertex:bv,worldpos_vertex:Mv,background_vert:Sv,background_frag:wv,backgroundCube_vert:Ev,backgroundCube_frag:Av,cube_vert:Tv,cube_frag:Cv,depth_vert:Rv,depth_frag:Pv,distanceRGBA_vert:Iv,distanceRGBA_frag:Lv,equirect_vert:Nv,equirect_frag:Dv,linedashed_vert:Uv,linedashed_frag:Ov,meshbasic_vert:Fv,meshbasic_frag:kv,meshlambert_vert:Bv,meshlambert_frag:zv,meshmatcap_vert:Vv,meshmatcap_frag:Hv,meshnormal_vert:Gv,meshnormal_frag:Wv,meshphong_vert:Xv,meshphong_frag:qv,meshphysical_vert:Yv,meshphysical_frag:Zv,meshtoon_vert:jv,meshtoon_frag:Jv,points_vert:Kv,points_frag:$v,shadow_vert:Qv,shadow_frag:ex,sprite_vert:tx,sprite_frag:nx},Ce={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ui={basic:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Re(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:An([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:An([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Re(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:An([Ce.points,Ce.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:An([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:An([Ce.common,Ce.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:An([Ce.sprite,Ce.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:An([Ce.common,Ce.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:An([Ce.lights,Ce.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ui.physical={uniforms:An([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const va={r:0,b:0,g:0},Ss=new Gn,ix=new Ve;function sx(s,e,t,n,i,r,o){const a=new Re(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function p(g,m){let v=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,c):y&&y.isColor&&(_(y,1),v=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===zr)?(u===void 0&&(u=new Se(new Zt(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:kr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ss.copy(m.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Ss)),u.material.toneMapped=Ct.getTransfer(y.colorSpace)!==Ft,(d!==y||h!==y.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,f=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Se(new ps(2,2),new $n({name:"BackgroundMaterial",uniforms:kr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Ct.getTransfer(y.colorSpace)!==Ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,m){g.getRGB(va,gm(s)),n.buffers.color.setClear(va.r,va.g,va.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),c=m,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:p}}function rx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(S,U,H,k,W){let Z=!1;const B=d(k,H,U);r!==B&&(r=B,l(r.object)),Z=f(S,k,H,W),Z&&p(S,k,H,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(S,U,H,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function d(S,U,H){const k=H.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let Z=W[U.id];Z===void 0&&(Z={},W[U.id]=Z);let B=Z[k];return B===void 0&&(B=h(c()),Z[k]=B),B}function h(S){const U=[],H=[],k=[];for(let W=0;W<t;W++)U[W]=0,H[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,U,H,k){const W=r.attributes,Z=U.attributes;let B=0;const G=H.getAttributes();for(const z in G)if(G[z].location>=0){const oe=W[z];let fe=Z[z];if(fe===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),oe===void 0||oe.attribute!==fe||fe&&oe.data!==fe.data)return!0;B++}return r.attributesNum!==B||r.index!==k}function p(S,U,H,k){const W={},Z=U.attributes;let B=0;const G=H.getAttributes();for(const z in G)if(G[z].location>=0){let oe=Z[z];oe===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));const fe={};fe.attribute=oe,oe&&oe.data&&(fe.data=oe.data),W[z]=fe,B++}r.attributes=W,r.attributesNum=B,r.index=k}function _(){const S=r.newAttributes;for(let U=0,H=S.length;U<H;U++)S[U]=0}function g(S){m(S,0)}function m(S,U){const H=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;H[S]=1,k[S]===0&&(s.enableVertexAttribArray(S),k[S]=1),W[S]!==U&&(s.vertexAttribDivisor(S,U),W[S]=U)}function v(){const S=r.newAttributes,U=r.enabledAttributes;for(let H=0,k=U.length;H<k;H++)U[H]!==S[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function y(S,U,H,k,W,Z,B){B===!0?s.vertexAttribIPointer(S,U,H,W,Z):s.vertexAttribPointer(S,U,H,k,W,Z)}function b(S,U,H,k){_();const W=k.attributes,Z=H.getAttributes(),B=U.defaultAttributeValues;for(const G in Z){const z=Z[G];if(z.location>=0){let K=W[G];if(K===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const oe=K.normalized,fe=K.itemSize,Ae=e.get(K);if(Ae===void 0)continue;const Ee=Ae.buffer,V=Ae.type,ee=Ae.bytesPerElement,ie=V===s.INT||V===s.UNSIGNED_INT||K.gpuType===zu;if(K.isInterleavedBufferAttribute){const ne=K.data,Te=ne.stride,ue=K.offset;if(ne.isInstancedInterleavedBuffer){for(let De=0;De<z.locationSize;De++)m(z.location+De,ne.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let De=0;De<z.locationSize;De++)g(z.location+De);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let De=0;De<z.locationSize;De++)y(z.location+De,fe/z.locationSize,V,oe,Te*ee,(ue+fe/z.locationSize*De)*ee,ie)}else{if(K.isInstancedBufferAttribute){for(let ne=0;ne<z.locationSize;ne++)m(z.location+ne,K.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ne=0;ne<z.locationSize;ne++)g(z.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ne=0;ne<z.locationSize;ne++)y(z.location+ne,fe/z.locationSize,V,oe,fe*ee,fe/z.locationSize*ne*ee,ie)}}else if(B!==void 0){const oe=B[G];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(z.location,oe);break;case 3:s.vertexAttrib3fv(z.location,oe);break;case 4:s.vertexAttrib4fv(z.location,oe);break;default:s.vertexAttrib1fv(z.location,oe)}}}}v()}function D(){F();for(const S in n){const U=n[S];for(const H in U){const k=U[H];for(const W in k)u(k[W].object),delete k[W];delete U[H]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const H in U){const k=U[H];for(const W in k)u(k[W].object),delete k[W];delete U[H]}delete n[S.id]}function L(S){for(const U in n){const H=n[U];if(H[S.id]===void 0)continue;const k=H[S.id];for(const W in k)u(k[W].object),delete k[W];delete H[S.id]}}function F(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function ox(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<u;h++)this.render(c[h],l[h]);else{d.multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ax(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=t.logarithmicDepthBuffer===!0,l=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),h=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),g=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,v=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:m,maxSamples:v}}function cx(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Di,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?u(null):l();else{const v=r?0:n,y=v*4;let b=m.clippingState||null;c.value=b,b=u(p,h,y,f);for(let D=0;D!==y;++D)b[D]=t[D];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,b=f;y!==_;++y,b+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(g,b),g[b+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function lx(s){let e=new WeakMap;function t(o,a){return a===yo?o.mapping=Xi:a===vo&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yo||a===vo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vm(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Hr extends Mc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ir=4,nd=[.125,.215,.35,.446,.526,.582],Bs=20,_l=new Hr,id=new Re;let yl=null,vl=0,xl=0,bl=!1;const Os=(1+Math.sqrt(5))/2,br=1/Os,sd=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Os,br),new R(0,Os,-br),new R(br,0,Os),new R(-br,0,Os),new R(Os,br,0),new R(-Os,br,0)];class bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,vl,xl),this._renderer.xr.enabled=bl,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:bo,format:Zn,colorSpace:Ji,depthBuffer:!1},i=rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ux(r)),this._blurMaterial=hx(r,e,t)}return i}_compileMaterial(e){const t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,n,i){const a=new on(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(id),u.toneMapping=Gi,u.autoClear=!1;const f=new Kn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),p=new Se(new Zt,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(id),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;xa(i,v*y,m>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xi||e.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;xa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_l)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=sd[(i-1)%sd.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Se(this._lodPlanes[i],l),h=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bs-1),_=r/p,g=isFinite(r)?1+Math.floor(u*_):Bs;g>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bs}`);const m=[];let v=0;for(let L=0;L<Bs;++L){const F=L/_,E=Math.exp(-F*F/2);m.push(E),L===0?v+=E:L<g&&(v+=2*E)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=p,h.mipInt.value=y-n;const b=this._sizeLods[i],D=3*b*(i>y-Ir?i-y+Ir:0),T=4*(this._cubeSize-b);xa(t,D,T,3*b,2*b),c.setRenderTarget(t),c.render(d,_l)}}function ux(s){const e=[],t=[],n=[];let i=s;const r=s-Ir+1+nd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ir?c=nd[o-s+Ir-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),y=new Float32Array(g*p*f),b=new Float32Array(m*p*f);for(let T=0;T<f;T++){const L=T%3*2/3-1,F=T>2?0:-1,E=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];v.set(E,_*p*T),y.set(h,g*p*T);const S=[T,T,T,T,T,T];b.set(S,m*p*T)}const D=new st;D.setAttribute("position",new At(v,_)),D.setAttribute("uv",new At(y,g)),D.setAttribute("faceIndex",new At(b,m)),e.push(D),i>Ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rd(s,e,t){const n=new Jn(s,e,t);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function hx(s,e,t){const n=new Float32Array(Bs),i=new R(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function od(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function ad(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function dx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===yo||c===vo,u=c===Xi||c===ds;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new bu(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new bu(s)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function px(s,e,t,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);for(const p in h.morphAttributes){const _=h.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}h.removeEventListener("dispose",o),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)e.update(_[g],s.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,p=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,b=v.length;y<b;y+=3){const D=v[y+0],T=v[y+1],L=v[y+2];h.push(D,T,T,L,L,D)}}else if(p!==void 0){const v=p.array;_=p.version;for(let y=0,b=v.length/3-1;y<b;y+=3){const D=y+0,T=y+1,L=y+2;h.push(D,T,T,L,L,D)}}else return;const g=new(um(h)?Qu:$u)(h,1);g.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function mx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){s.drawElements(n,h,r,d*o),t.update(h,n,1)}function l(d,h,f){f!==0&&(s.drawElementsInstanced(n,h,r,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(d[_]/o,h[_]);else{p.multiDrawElementsWEBGL(n,h,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function gx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _x(s,e,t){const n=new WeakMap,i=new Pt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let E=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let b=a.attributes.position.count*y,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*D*4*d),L=new xc(T,b,D,d);L.type=ni,L.needsUpdate=!0;const F=y*4;for(let S=0;S<d;S++){const U=g[S],H=m[S],k=v[S],W=b*D*4*S;for(let Z=0;Z<U.count;Z++){const B=Z*F;f===!0&&(i.fromBufferAttribute(U,Z),T[W+B+0]=i.x,T[W+B+1]=i.y,T[W+B+2]=i.z,T[W+B+3]=0),p===!0&&(i.fromBufferAttribute(H,Z),T[W+B+4]=i.x,T[W+B+5]=i.y,T[W+B+6]=i.z,T[W+B+7]=0),_===!0&&(i.fromBufferAttribute(k,Z),T[W+B+8]=i.x,T[W+B+9]=i.y,T[W+B+10]=i.z,T[W+B+11]=k.itemSize===4?i.w:1)}}h={count:d,texture:L,size:new re(b,D)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function yx(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class th extends Jt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:Xs,u!==Xs&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xs&&(n=Zs),n===void 0&&u===Or&&(n=Vr),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bm=new Jt,Mm=new th(1,1);Mm.compareFunction=ju;const Sm=new xc,wm=new Ku,Em=new Go,cd=[],ld=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function Gr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=cd[i];if(r===void 0&&(r=new Float32Array(i),cd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Sc(s,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function Mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function Sx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;dd.set(n),s.uniformMatrix2fv(this.addr,!1,dd),ln(t,n)}}function wx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;hd.set(n),s.uniformMatrix3fv(this.addr,!1,hd),ln(t,n)}}function Ex(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;ud.set(n),s.uniformMatrix4fv(this.addr,!1,ud),ln(t,n)}}function Ax(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function Cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function Rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function Px(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function Lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function Nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function Dx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Mm:bm;t.setTexture2D(e||r,i)}function Ux(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wm,i)}function Ox(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Em,i)}function Fx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sm,i)}function kx(s){switch(s){case 5126:return vx;case 35664:return xx;case 35665:return bx;case 35666:return Mx;case 35674:return Sx;case 35675:return wx;case 35676:return Ex;case 5124:case 35670:return Ax;case 35667:case 35671:return Tx;case 35668:case 35672:return Cx;case 35669:case 35673:return Rx;case 5125:return Px;case 36294:return Ix;case 36295:return Lx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Fx}}function Bx(s,e){s.uniform1fv(this.addr,e)}function zx(s,e){const t=Gr(e,this.size,2);s.uniform2fv(this.addr,t)}function Vx(s,e){const t=Gr(e,this.size,3);s.uniform3fv(this.addr,t)}function Hx(s,e){const t=Gr(e,this.size,4);s.uniform4fv(this.addr,t)}function Gx(s,e){const t=Gr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wx(s,e){const t=Gr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xx(s,e){const t=Gr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qx(s,e){s.uniform1iv(this.addr,e)}function Yx(s,e){s.uniform2iv(this.addr,e)}function Zx(s,e){s.uniform3iv(this.addr,e)}function jx(s,e){s.uniform4iv(this.addr,e)}function Jx(s,e){s.uniform1uiv(this.addr,e)}function Kx(s,e){s.uniform2uiv(this.addr,e)}function $x(s,e){s.uniform3uiv(this.addr,e)}function Qx(s,e){s.uniform4uiv(this.addr,e)}function eb(s,e,t){const n=this.cache,i=e.length,r=Sc(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||bm,r[o])}function tb(s,e,t){const n=this.cache,i=e.length,r=Sc(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||wm,r[o])}function nb(s,e,t){const n=this.cache,i=e.length,r=Sc(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Em,r[o])}function ib(s,e,t){const n=this.cache,i=e.length,r=Sc(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sm,r[o])}function sb(s){switch(s){case 5126:return Bx;case 35664:return zx;case 35665:return Vx;case 35666:return Hx;case 35674:return Gx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Zx;case 35669:case 35673:return jx;case 5125:return Jx;case 36294:return Kx;case 36295:return $x;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}class rb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}}class ob{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sb(t.type)}}class ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function fd(s,e){s.seq.push(e),s.map[e.id]=e}function cb(s,e,t){const n=s.name,i=n.length;for(Ml.lastIndex=0;;){const r=Ml.exec(n),o=Ml.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){fd(t,l===void 0?new rb(a,s,e):new ob(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new ab(a),fd(t,d)),t=d}}}class ic{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);cb(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function pd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const lb=37297;let ub=0;function hb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function db(s){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(s);let n;switch(e===t?n="":e===To&&t===Ao?n="LinearDisplayP3ToLinearSRGB":e===Ao&&t===To&&(n="LinearSRGBToLinearDisplayP3"),s){case Ji:case Ho:return[n,"LinearTransferOETF"];case Cn:case vc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function md(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+hb(s.getShaderSource(e),o)}else return i}function fb(s,e){const t=db(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pb(s,e){let t;switch(e){case Up:t="Linear";break;case Op:t="Reinhard";break;case Fp:t="OptimizedCineon";break;case Fu:t="ACESFilmic";break;case Bp:t="AgX";break;case zp:t="Neutral";break;case kp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function gb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _b(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function co(s){return s!==""}function gd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(s){return s.replace(yb,xb)}const vb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xb(s,e){let t=Qe[e];if(t===void 0){const n=vb.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mu(t)}const bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(s){return s.replace(bb,Mb)}function Mb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function wb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xi:case ds:e="ENVMAP_TYPE_CUBE";break;case zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Ab(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vo:e="ENVMAP_BLENDING_MULTIPLY";break;case Np:e="ENVMAP_BLENDING_MIX";break;case Dp:e="ENVMAP_BLENDING_ADD";break}return e}function Tb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cb(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Sb(t),l=wb(t),u=Eb(t),d=Ab(t),h=Tb(t),f=mb(t),p=gb(r),_=i.createProgram();let g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(co).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(co).join(`
`),m.length>0&&(m+=`
`)):(g=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),m=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Gi?pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,fb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=Mu(o),o=gd(o,t),o=_d(o,t),a=Mu(a),a=gd(a,t),a=_d(a,t),o=yd(o),a=yd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+g+o,b=v+m+a,D=pd(i,i.VERTEX_SHADER,y),T=pd(i,i.FRAGMENT_SHADER,b);i.attachShader(_,D),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function L(U){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(D).trim(),W=i.getShaderInfoLog(T).trim();let Z=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,T);else{const G=md(i,D,"vertex"),z=md(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+G+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||W==="")&&(B=!1);B&&(U.diagnostics={runnable:Z,programLog:H,vertexShader:{log:k,prefix:g},fragmentShader:{log:W,prefix:m}})}i.deleteShader(D),i.deleteShader(T),F=new ic(i,_),E=_b(i,_)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,lb)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ub++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let Rb=0;class Pb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ib(e),t.set(e,n)),n}}class Ib{constructor(e){this.id=Rb++,this.code=e,this.usedTimes=0}}function Lb(s,e,t,n,i,r,o){const a=new bc,c=new Pb,l=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,S,U,H,k){const W=H.fog,Z=k.geometry,B=E.isMeshStandardMaterial?H.environment:null,G=(E.isMeshStandardMaterial?t:e).get(E.envMap||B),z=G&&G.mapping===zr?G.image.height:null,K=p[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const oe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=oe!==void 0?oe.length:0;let Ae=0;Z.morphAttributes.position!==void 0&&(Ae=1),Z.morphAttributes.normal!==void 0&&(Ae=2),Z.morphAttributes.color!==void 0&&(Ae=3);let Ee,V,ee,ie;if(K){const $t=ui[K];Ee=$t.vertexShader,V=$t.fragmentShader}else Ee=E.vertexShader,V=E.fragmentShader,c.update(E),ee=c.getVertexShaderID(E),ie=c.getFragmentShaderID(E);const ne=s.getRenderTarget(),Te=k.isInstancedMesh===!0,ue=k.isBatchedMesh===!0,De=!!E.map,q=!!E.matcap,de=!!G,he=!!E.aoMap,ve=!!E.lightMap,_e=!!E.bumpMap,ye=!!E.normalMap,O=!!E.displacementMap,A=!!E.emissiveMap,Y=!!E.metalnessMap,se=!!E.roughnessMap,ce=E.anisotropy>0,pe=E.clearcoat>0,Ze=E.iridescence>0,me=E.sheen>0,Ge=E.transmission>0,Je=ce&&!!E.anisotropyMap,xe=pe&&!!E.clearcoatMap,Ue=pe&&!!E.clearcoatNormalMap,et=pe&&!!E.clearcoatRoughnessMap,ke=Ze&&!!E.iridescenceMap,Be=Ze&&!!E.iridescenceThicknessMap,ut=me&&!!E.sheenColorMap,ht=me&&!!E.sheenRoughnessMap,vt=!!E.specularMap,ft=!!E.specularColorMap,xt=!!E.specularIntensityMap,qe=Ge&&!!E.transmissionMap,x=Ge&&!!E.thicknessMap,j=!!E.gradientMap,le=!!E.alphaMap,be=E.alphaTest>0,Oe=!!E.alphaHash,dt=!!E.extensions;let lt=Gi;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Dt={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:Ee,fragmentShader:V,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ie,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ue,instancing:Te,instancingColor:Te&&k.instanceColor!==null,instancingMorph:Te&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ji,alphaToCoverage:!!E.alphaToCoverage,map:De,matcap:q,envMap:de,envMapMode:de&&G.mapping,envMapCubeUVHeight:z,aoMap:he,lightMap:ve,bumpMap:_e,normalMap:ye,displacementMap:h&&O,emissiveMap:A,normalMapObjectSpace:ye&&E.normalMapType===nm,normalMapTangentSpace:ye&&E.normalMapType===fs,metalnessMap:Y,roughnessMap:se,anisotropy:ce,anisotropyMap:Je,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:et,iridescence:Ze,iridescenceMap:ke,iridescenceThicknessMap:Be,sheen:me,sheenColorMap:ut,sheenRoughnessMap:ht,specularMap:vt,specularColorMap:ft,specularIntensityMap:xt,transmission:Ge,transmissionMap:qe,thicknessMap:x,gradientMap:j,opaque:E.transparent===!1&&E.blending===Ws&&E.alphaToCoverage===!1,alphaMap:le,alphaTest:be,alphaHash:Oe,combine:E.combine,mapUv:De&&_(E.map.channel),aoMapUv:he&&_(E.aoMap.channel),lightMapUv:ve&&_(E.lightMap.channel),bumpMapUv:_e&&_(E.bumpMap.channel),normalMapUv:ye&&_(E.normalMap.channel),displacementMapUv:O&&_(E.displacementMap.channel),emissiveMapUv:A&&_(E.emissiveMap.channel),metalnessMapUv:Y&&_(E.metalnessMap.channel),roughnessMapUv:se&&_(E.roughnessMap.channel),anisotropyMapUv:Je&&_(E.anisotropyMap.channel),clearcoatMapUv:xe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(E.sheenRoughnessMap.channel),specularMapUv:vt&&_(E.specularMap.channel),specularColorMapUv:ft&&_(E.specularColorMap.channel),specularIntensityMapUv:xt&&_(E.specularIntensityMap.channel),transmissionMapUv:qe&&_(E.transmissionMap.channel),thicknessMapUv:x&&_(E.thicknessMap.channel),alphaMapUv:le&&_(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ye||ce),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(De||le),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ti,flipSided:E.side===Pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:dt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:dt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function m(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)S.push(U),S.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(s.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),E.push(a.mask)}function b(E){const S=p[E.type];let U;if(S){const H=ui[S];U=_m.clone(H.uniforms)}else U=E.uniforms;return U}function D(E,S){let U;for(let H=0,k=u.length;H<k;H++){const W=u[H];if(W.cacheKey===S){U=W,++U.usedTimes;break}}return U===void 0&&(U=new Cb(s,S,E,r),u.push(U)),U}function T(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function L(E){c.remove(E)}function F(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:D,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:F}}function Nb(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Db(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,f,p,_,g){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:_,group:g},s[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=_,m.group=g),e++,m}function a(d,h,f,p,_,g){const m=o(d,h,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(d,h,f,p,_,g){const m=o(d,h,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(d,h){t.length>1&&t.sort(d||Db),n.length>1&&n.sort(h||xd),i.length>1&&i.sort(h||xd)}function u(){for(let d=e,h=s.length;d<h;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Ub(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new bd,s.set(n,[o])):i>=r.length?(o=new bd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ob(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Fb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kb=0;function Bb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zb(s){const e=new Ob,t=Fb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new Ve,o=new Ve;function a(l,u){let d=0,h=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,_=0,g=0,m=0,v=0,y=0,b=0,D=0,T=0,L=0,F=0;l.sort(Bb);const E=u===!0?Math.PI:1;for(let U=0,H=l.length;U<H;U++){const k=l[U],W=k.color,Z=k.intensity,B=k.distance,G=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=W.r*Z*E,h+=W.g*Z*E,f+=W.b*Z*E;else if(k.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(k.sh.coefficients[z],Z);F++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*E),k.castShadow){const K=k.shadow,oe=t.get(k);oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,n.directionalShadow[p]=oe,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=k.shadow.matrix,y++}n.directional[p]=z,p++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(W).multiplyScalar(Z*E),z.distance=B,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,n.spot[g]=z;const K=k.shadow;if(k.map&&(n.spotLightMap[T]=k.map,T++,K.updateMatrices(k),k.castShadow&&L++),n.spotLightMatrix[g]=K.matrix,k.castShadow){const oe=t.get(k);oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,n.spotShadow[g]=oe,n.spotShadowMap[g]=G,D++}g++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(W).multiplyScalar(Z),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=z,m++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*E),z.distance=k.distance,z.decay=k.decay,k.castShadow){const K=k.shadow,oe=t.get(k);oe.shadowBias=K.bias,oe.shadowNormalBias=K.normalBias,oe.shadowRadius=K.radius,oe.shadowMapSize=K.mapSize,oe.shadowCameraNear=K.camera.near,oe.shadowCameraFar=K.camera.far,n.pointShadow[_]=oe,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=k.shadow.matrix,b++}n.point[_]=z,_++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(Z*E),z.groundColor.copy(k.groundColor).multiplyScalar(Z*E),n.hemi[v]=z,v++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==p||S.pointLength!==_||S.spotLength!==g||S.rectAreaLength!==m||S.hemiLength!==v||S.numDirectionalShadows!==y||S.numPointShadows!==b||S.numSpotShadows!==D||S.numSpotMaps!==T||S.numLightProbes!==F)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=D+T-L,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=F,S.directionalLength=p,S.pointLength=_,S.spotLength=g,S.rectAreaLength=m,S.hemiLength=v,S.numDirectionalShadows=y,S.numPointShadows=b,S.numSpotShadows=D,S.numSpotMaps=T,S.numLightProbes=F,n.version=kb++)}function c(l,u){let d=0,h=0,f=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const y=l[m];if(y.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(y.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Md(s){const e=new zb(s),t=[],n=[];function i(){t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Vb(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Md(s),e.set(i,[a])):r>=o.length?(a=new Md(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class wc extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nh extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gb=`uniform sampler2D shadow_pass;
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
}`;function Wb(s,e,t){let n=new Wo;const i=new re,r=new re,o=new Pt,a=new wc({depthPacking:tm}),c=new nh,l={},u=t.maxTextureSize,d={[wi]:Pn,[Pn]:wi,[ti]:ti},h=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Hb,fragmentShader:Gb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new st;p.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Se(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let m=this.type;this.render=function(T,L,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const E=s.getRenderTarget(),S=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=m!==bi&&this.type===bi,W=m===bi&&this.type!==bi;for(let Z=0,B=T.length;Z<B;Z++){const G=T[Z],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const K=z.getFrameExtents();if(i.multiply(K),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/K.x),i.x=r.x*K.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/K.y),i.y=r.y*K.y,z.mapSize.y=r.y)),z.map===null||k===!0||W===!0){const fe=this.type!==bi?{minFilter:fn,magFilter:fn}:{};z.map!==null&&z.map.dispose(),z.map=new Jn(i.x,i.y,fe),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const oe=z.getViewportCount();for(let fe=0;fe<oe;fe++){const Ae=z.getViewport(fe);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),H.viewport(o),z.updateMatrices(G,fe),n=z.getFrustum(),b(L,F,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===bi&&v(z,F),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,S,U)};function v(T,L){const F=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(L,null,F,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(L,null,F,f,_,null)}function y(T,L,F,E){let S=null;const U=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)S=U;else if(S=F.isPointLight===!0?c:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const H=S.uuid,k=L.uuid;let W=l[H];W===void 0&&(W={},l[H]=W);let Z=W[k];Z===void 0&&(Z=S.clone(),W[k]=Z,L.addEventListener("dispose",D)),S=Z}if(S.visible=L.visible,S.wireframe=L.wireframe,E===bi?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:d[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=s.properties.get(S);H.light=F}return S}function b(T,L,F,E,S){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===bi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const k=e.update(T),W=T.material;if(Array.isArray(W)){const Z=k.groups;for(let B=0,G=Z.length;B<G;B++){const z=Z[B],K=W[z.materialIndex];if(K&&K.visible){const oe=y(T,K,E,S);T.onBeforeShadow(s,T,L,F,k,oe,z),s.renderBufferDirect(F,null,k,oe,T,z),T.onAfterShadow(s,T,L,F,k,oe,z)}}}else if(W.visible){const Z=y(T,W,E,S);T.onBeforeShadow(s,T,L,F,k,Z,null),s.renderBufferDirect(F,null,k,Z,T,null),T.onAfterShadow(s,T,L,F,k,Z,null)}}const H=T.children;for(let k=0,W=H.length;k<W;k++)b(H[k],L,F,E,S)}function D(T){T.target.removeEventListener("dispose",D);for(const F in l){const E=l[F],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function Xb(s){function e(){let x=!1;const j=new Pt;let le=null;const be=new Pt(0,0,0,0);return{setMask:function(Oe){le!==Oe&&!x&&(s.colorMask(Oe,Oe,Oe,Oe),le=Oe)},setLocked:function(Oe){x=Oe},setClear:function(Oe,dt,lt,Dt,$t){$t===!0&&(Oe*=Dt,dt*=Dt,lt*=Dt),j.set(Oe,dt,lt,Dt),be.equals(j)===!1&&(s.clearColor(Oe,dt,lt,Dt),be.copy(j))},reset:function(){x=!1,le=null,be.set(-1,0,0,0)}}}function t(){let x=!1,j=null,le=null,be=null;return{setTest:function(Oe){Oe?ie(s.DEPTH_TEST):ne(s.DEPTH_TEST)},setMask:function(Oe){j!==Oe&&!x&&(s.depthMask(Oe),j=Oe)},setFunc:function(Oe){if(le!==Oe){switch(Oe){case Ap:s.depthFunc(s.NEVER);break;case Tp:s.depthFunc(s.ALWAYS);break;case Cp:s.depthFunc(s.LESS);break;case _o:s.depthFunc(s.LEQUAL);break;case Rp:s.depthFunc(s.EQUAL);break;case Pp:s.depthFunc(s.GEQUAL);break;case Ip:s.depthFunc(s.GREATER);break;case Lp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Oe}},setLocked:function(Oe){x=Oe},setClear:function(Oe){be!==Oe&&(s.clearDepth(Oe),be=Oe)},reset:function(){x=!1,j=null,le=null,be=null}}}function n(){let x=!1,j=null,le=null,be=null,Oe=null,dt=null,lt=null,Dt=null,$t=null;return{setTest:function(Tt){x||(Tt?ie(s.STENCIL_TEST):ne(s.STENCIL_TEST))},setMask:function(Tt){j!==Tt&&!x&&(s.stencilMask(Tt),j=Tt)},setFunc:function(Tt,Mt,Gt){(le!==Tt||be!==Mt||Oe!==Gt)&&(s.stencilFunc(Tt,Mt,Gt),le=Tt,be=Mt,Oe=Gt)},setOp:function(Tt,Mt,Gt){(dt!==Tt||lt!==Mt||Dt!==Gt)&&(s.stencilOp(Tt,Mt,Gt),dt=Tt,lt=Mt,Dt=Gt)},setLocked:function(Tt){x=Tt},setClear:function(Tt){$t!==Tt&&(s.clearStencil(Tt),$t=Tt)},reset:function(){x=!1,j=null,le=null,be=null,Oe=null,dt=null,lt=null,Dt=null,$t=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,h=[],f=null,p=!1,_=null,g=null,m=null,v=null,y=null,b=null,D=null,T=new Re(0,0,0),L=0,F=!1,E=null,S=null,U=null,H=null,k=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,B=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),Z=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Z=B>=2);let z=null,K={};const oe=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),Ae=new Pt().fromArray(oe),Ee=new Pt().fromArray(fe);function V(x,j,le,be){const Oe=new Uint8Array(4),dt=s.createTexture();s.bindTexture(x,dt),s.texParameteri(x,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(x,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<le;lt++)x===s.TEXTURE_3D||x===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(j+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return dt}const ee={};ee[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(s.DEPTH_TEST),r.setFunc(_o),_e(!1),ye(Gl),ie(s.CULL_FACE),he(Hi);function ie(x){l[x]!==!0&&(s.enable(x),l[x]=!0)}function ne(x){l[x]!==!1&&(s.disable(x),l[x]=!1)}function Te(x,j){return u[x]!==j?(s.bindFramebuffer(x,j),u[x]=j,x===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),x===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function ue(x,j){let le=h,be=!1;if(x){le=d.get(j),le===void 0&&(le=[],d.set(j,le));const Oe=x.textures;if(le.length!==Oe.length||le[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,lt=Oe.length;dt<lt;dt++)le[dt]=s.COLOR_ATTACHMENT0+dt;le.length=Oe.length,be=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,be=!0);be&&s.drawBuffers(le)}function De(x){return f!==x?(s.useProgram(x),f=x,!0):!1}const q={[ls]:s.FUNC_ADD,[lp]:s.FUNC_SUBTRACT,[up]:s.FUNC_REVERSE_SUBTRACT};q[hp]=s.MIN,q[dp]=s.MAX;const de={[fp]:s.ZERO,[pp]:s.ONE,[mp]:s.SRC_COLOR,[rc]:s.SRC_ALPHA,[bp]:s.SRC_ALPHA_SATURATE,[vp]:s.DST_COLOR,[_p]:s.DST_ALPHA,[gp]:s.ONE_MINUS_SRC_COLOR,[oc]:s.ONE_MINUS_SRC_ALPHA,[xp]:s.ONE_MINUS_DST_COLOR,[yp]:s.ONE_MINUS_DST_ALPHA,[Mp]:s.CONSTANT_COLOR,[Sp]:s.ONE_MINUS_CONSTANT_COLOR,[wp]:s.CONSTANT_ALPHA,[Ep]:s.ONE_MINUS_CONSTANT_ALPHA};function he(x,j,le,be,Oe,dt,lt,Dt,$t,Tt){if(x===Hi){p===!0&&(ne(s.BLEND),p=!1);return}if(p===!1&&(ie(s.BLEND),p=!0),x!==cp){if(x!==_||Tt!==F){if((g!==ls||y!==ls)&&(s.blendEquation(s.FUNC_ADD),g=ls,y=ls),Tt)switch(x){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wl:s.blendFunc(s.ONE,s.ONE);break;case Xl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ql:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ql:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}m=null,v=null,b=null,D=null,T.set(0,0,0),L=0,_=x,F=Tt}return}Oe=Oe||j,dt=dt||le,lt=lt||be,(j!==g||Oe!==y)&&(s.blendEquationSeparate(q[j],q[Oe]),g=j,y=Oe),(le!==m||be!==v||dt!==b||lt!==D)&&(s.blendFuncSeparate(de[le],de[be],de[dt],de[lt]),m=le,v=be,b=dt,D=lt),(Dt.equals(T)===!1||$t!==L)&&(s.blendColor(Dt.r,Dt.g,Dt.b,$t),T.copy(Dt),L=$t),_=x,F=!1}function ve(x,j){x.side===ti?ne(s.CULL_FACE):ie(s.CULL_FACE);let le=x.side===Pn;j&&(le=!le),_e(le),x.blending===Ws&&x.transparent===!1?he(Hi):he(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),r.setFunc(x.depthFunc),r.setTest(x.depthTest),r.setMask(x.depthWrite),i.setMask(x.colorWrite);const be=x.stencilWrite;o.setTest(be),be&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),A(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(x){E!==x&&(x?s.frontFace(s.CW):s.frontFace(s.CCW),E=x)}function ye(x){x!==op?(ie(s.CULL_FACE),x!==S&&(x===Gl?s.cullFace(s.BACK):x===ap?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ne(s.CULL_FACE),S=x}function O(x){x!==U&&(Z&&s.lineWidth(x),U=x)}function A(x,j,le){x?(ie(s.POLYGON_OFFSET_FILL),(H!==j||k!==le)&&(s.polygonOffset(j,le),H=j,k=le)):ne(s.POLYGON_OFFSET_FILL)}function Y(x){x?ie(s.SCISSOR_TEST):ne(s.SCISSOR_TEST)}function se(x){x===void 0&&(x=s.TEXTURE0+W-1),z!==x&&(s.activeTexture(x),z=x)}function ce(x,j,le){le===void 0&&(z===null?le=s.TEXTURE0+W-1:le=z);let be=K[le];be===void 0&&(be={type:void 0,texture:void 0},K[le]=be),(be.type!==x||be.texture!==j)&&(z!==le&&(s.activeTexture(le),z=le),s.bindTexture(x,j||ee[x]),be.type=x,be.texture=j)}function pe(){const x=K[z];x!==void 0&&x.type!==void 0&&(s.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function Ze(){try{s.compressedTexImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ge(){try{s.texSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Je(){try{s.texSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function et(){try{s.texStorage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ke(){try{s.texStorage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ut(){try{s.texImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ht(x){Ae.equals(x)===!1&&(s.scissor(x.x,x.y,x.z,x.w),Ae.copy(x))}function vt(x){Ee.equals(x)===!1&&(s.viewport(x.x,x.y,x.z,x.w),Ee.copy(x))}function ft(x,j){let le=c.get(j);le===void 0&&(le=new WeakMap,c.set(j,le));let be=le.get(x);be===void 0&&(be=s.getUniformBlockIndex(j,x.name),le.set(x,be))}function xt(x,j){const be=c.get(j).get(x);a.get(j)!==be&&(s.uniformBlockBinding(j,be,x.__bindingPointIndex),a.set(j,be))}function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},z=null,K={},u={},d=new WeakMap,h=[],f=null,p=!1,_=null,g=null,m=null,v=null,y=null,b=null,D=null,T=new Re(0,0,0),L=0,F=!1,E=null,S=null,U=null,H=null,k=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ie,disable:ne,bindFramebuffer:Te,drawBuffers:ue,useProgram:De,setBlending:he,setMaterial:ve,setFlipSided:_e,setCullFace:ye,setLineWidth:O,setPolygonOffset:A,setScissorTest:Y,activeTexture:se,bindTexture:ce,unbindTexture:pe,compressedTexImage2D:Ze,compressedTexImage3D:me,texImage2D:Be,texImage3D:ut,updateUBOMapping:ft,uniformBlockBinding:xt,texStorage2D:et,texStorage3D:ke,texSubImage2D:Ge,texSubImage3D:Je,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ue,scissor:ht,viewport:vt,reset:qe}}function qb(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(O,A){return f?new OffscreenCanvas(O,A):Po("canvas")}function _(O,A,Y){let se=1;const ce=ye(O);if((ce.width>Y||ce.height>Y)&&(se=Y/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pe=Math.floor(se*ce.width),Ze=Math.floor(se*ce.height);d===void 0&&(d=p(pe,Ze));const me=A?p(pe,Ze):d;return me.width=pe,me.height=Ze,me.getContext("2d").drawImage(O,0,0,pe,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+pe+"x"+Ze+")."),me}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),O;return O}function g(O){return O.generateMipmaps&&O.minFilter!==fn&&O.minFilter!==an}function m(O){s.generateMipmap(O)}function v(O,A,Y,se,ce=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pe=A;if(A===s.RED&&(Y===s.FLOAT&&(pe=s.R32F),Y===s.HALF_FLOAT&&(pe=s.R16F),Y===s.UNSIGNED_BYTE&&(pe=s.R8)),A===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(pe=s.R8UI),Y===s.UNSIGNED_SHORT&&(pe=s.R16UI),Y===s.UNSIGNED_INT&&(pe=s.R32UI),Y===s.BYTE&&(pe=s.R8I),Y===s.SHORT&&(pe=s.R16I),Y===s.INT&&(pe=s.R32I)),A===s.RG&&(Y===s.FLOAT&&(pe=s.RG32F),Y===s.HALF_FLOAT&&(pe=s.RG16F),Y===s.UNSIGNED_BYTE&&(pe=s.RG8)),A===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Y===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Y===s.UNSIGNED_INT&&(pe=s.RG32UI),Y===s.BYTE&&(pe=s.RG8I),Y===s.SHORT&&(pe=s.RG16I),Y===s.INT&&(pe=s.RG32I)),A===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),A===s.RGBA){const Ze=ce?Eo:Ct.getTransfer(se);Y===s.FLOAT&&(pe=s.RGBA32F),Y===s.HALF_FLOAT&&(pe=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(pe=Ze===Ft?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function y(O,A){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==fn&&O.minFilter!==an?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function b(O){const A=O.target;A.removeEventListener("dispose",b),T(A),A.isVideoTexture&&u.delete(A)}function D(O){const A=O.target;A.removeEventListener("dispose",D),F(A)}function T(O){const A=n.get(O);if(A.__webglInit===void 0)return;const Y=O.source,se=h.get(Y);if(se){const ce=se[A.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&L(O),Object.keys(se).length===0&&h.delete(Y)}n.remove(O)}function L(O){const A=n.get(O);s.deleteTexture(A.__webglTexture);const Y=O.source,se=h.get(Y);delete se[A.__cacheKey],o.memory.textures--}function F(O){const A=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(A.__webglFramebuffer[se]))for(let ce=0;ce<A.__webglFramebuffer[se].length;ce++)s.deleteFramebuffer(A.__webglFramebuffer[se][ce]);else s.deleteFramebuffer(A.__webglFramebuffer[se]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[se])}else{if(Array.isArray(A.__webglFramebuffer))for(let se=0;se<A.__webglFramebuffer.length;se++)s.deleteFramebuffer(A.__webglFramebuffer[se]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let se=0;se<A.__webglColorRenderbuffer.length;se++)A.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[se]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=O.textures;for(let se=0,ce=Y.length;se<ce;se++){const pe=n.get(Y[se]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(Y[se])}n.remove(O)}let E=0;function S(){E=0}function U(){const O=E;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),E+=1,O}function H(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function k(O,A){const Y=n.get(O);if(O.isVideoTexture&&ve(O),O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){const se=O.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(Y,O,A);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+A)}function W(O,A){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){Ae(Y,O,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+A)}function Z(O,A){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){Ae(Y,O,A);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+A)}function B(O,A){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){Ee(Y,O,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+A)}const G={[ki]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[xo]:s.MIRRORED_REPEAT},z={[fn]:s.NEAREST,[ku]:s.NEAREST_MIPMAP_NEAREST,[Rr]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[ho]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},K={[im]:s.NEVER,[lm]:s.ALWAYS,[sm]:s.LESS,[ju]:s.LEQUAL,[rm]:s.EQUAL,[cm]:s.GEQUAL,[om]:s.GREATER,[am]:s.NOTEQUAL};function oe(O,A){if(A.type===ni&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===an||A.magFilter===ho||A.magFilter===Rr||A.magFilter===hi||A.minFilter===an||A.minFilter===ho||A.minFilter===Rr||A.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,G[A.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,G[A.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,G[A.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,z[A.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,z[A.minFilter]),A.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,K[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===fn||A.minFilter!==Rr&&A.minFilter!==hi||A.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function fe(O,A){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",b));const se=A.source;let ce=h.get(se);ce===void 0&&(ce={},h.set(se,ce));const pe=H(A);if(pe!==O.__cacheKey){ce[pe]===void 0&&(ce[pe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ce[pe].usedTimes++;const Ze=ce[O.__cacheKey];Ze!==void 0&&(ce[O.__cacheKey].usedTimes--,Ze.usedTimes===0&&L(A)),O.__cacheKey=pe,O.__webglTexture=ce[pe].texture}return Y}function Ae(O,A,Y){let se=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=s.TEXTURE_3D);const ce=fe(O,A),pe=A.source;t.bindTexture(se,O.__webglTexture,s.TEXTURE0+Y);const Ze=n.get(pe);if(pe.version!==Ze.__version||ce===!0){t.activeTexture(s.TEXTURE0+Y);const me=Ct.getPrimaries(Ct.workingColorSpace),Ge=A.colorSpace===Ui?null:Ct.getPrimaries(A.colorSpace),Je=A.colorSpace===Ui||me===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let xe=_(A.image,!1,i.maxTextureSize);xe=_e(A,xe);const Ue=r.convert(A.format,A.colorSpace),et=r.convert(A.type);let ke=v(A.internalFormat,Ue,et,A.colorSpace,A.isVideoTexture);oe(se,A);let Be;const ut=A.mipmaps,ht=A.isVideoTexture!==!0&&ke!==Yu,vt=Ze.__version===void 0||ce===!0,ft=pe.dataReady,xt=y(A,xe);if(A.isDepthTexture)ke=s.DEPTH_COMPONENT16,A.type===ni?ke=s.DEPTH_COMPONENT32F:A.type===Zs?ke=s.DEPTH_COMPONENT24:A.type===Vr&&(ke=s.DEPTH24_STENCIL8),vt&&(ht?t.texStorage2D(s.TEXTURE_2D,1,ke,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,ke,xe.width,xe.height,0,Ue,et,null));else if(A.isDataTexture)if(ut.length>0){ht&&vt&&t.texStorage2D(s.TEXTURE_2D,xt,ke,ut[0].width,ut[0].height);for(let qe=0,x=ut.length;qe<x;qe++)Be=ut[qe],ht?ft&&t.texSubImage2D(s.TEXTURE_2D,qe,0,0,Be.width,Be.height,Ue,et,Be.data):t.texImage2D(s.TEXTURE_2D,qe,ke,Be.width,Be.height,0,Ue,et,Be.data);A.generateMipmaps=!1}else ht?(vt&&t.texStorage2D(s.TEXTURE_2D,xt,ke,xe.width,xe.height),ft&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe.width,xe.height,Ue,et,xe.data)):t.texImage2D(s.TEXTURE_2D,0,ke,xe.width,xe.height,0,Ue,et,xe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ht&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xt,ke,ut[0].width,ut[0].height,xe.depth);for(let qe=0,x=ut.length;qe<x;qe++)Be=ut[qe],A.format!==Zn?Ue!==null?ht?ft&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,qe,0,0,0,Be.width,Be.height,xe.depth,Ue,Be.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,qe,ke,Be.width,Be.height,xe.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?ft&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,qe,0,0,0,Be.width,Be.height,xe.depth,Ue,et,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,qe,ke,Be.width,Be.height,xe.depth,0,Ue,et,Be.data)}else{ht&&vt&&t.texStorage2D(s.TEXTURE_2D,xt,ke,ut[0].width,ut[0].height);for(let qe=0,x=ut.length;qe<x;qe++)Be=ut[qe],A.format!==Zn?Ue!==null?ht?ft&&t.compressedTexSubImage2D(s.TEXTURE_2D,qe,0,0,Be.width,Be.height,Ue,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,qe,ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?ft&&t.texSubImage2D(s.TEXTURE_2D,qe,0,0,Be.width,Be.height,Ue,et,Be.data):t.texImage2D(s.TEXTURE_2D,qe,ke,Be.width,Be.height,0,Ue,et,Be.data)}else if(A.isDataArrayTexture)ht?(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xt,ke,xe.width,xe.height,xe.depth),ft&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ue,et,xe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,xe.width,xe.height,xe.depth,0,Ue,et,xe.data);else if(A.isData3DTexture)ht?(vt&&t.texStorage3D(s.TEXTURE_3D,xt,ke,xe.width,xe.height,xe.depth),ft&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ue,et,xe.data)):t.texImage3D(s.TEXTURE_3D,0,ke,xe.width,xe.height,xe.depth,0,Ue,et,xe.data);else if(A.isFramebufferTexture){if(vt)if(ht)t.texStorage2D(s.TEXTURE_2D,xt,ke,xe.width,xe.height);else{let qe=xe.width,x=xe.height;for(let j=0;j<xt;j++)t.texImage2D(s.TEXTURE_2D,j,ke,qe,x,0,Ue,et,null),qe>>=1,x>>=1}}else if(ut.length>0){if(ht&&vt){const qe=ye(ut[0]);t.texStorage2D(s.TEXTURE_2D,xt,ke,qe.width,qe.height)}for(let qe=0,x=ut.length;qe<x;qe++)Be=ut[qe],ht?ft&&t.texSubImage2D(s.TEXTURE_2D,qe,0,0,Ue,et,Be):t.texImage2D(s.TEXTURE_2D,qe,ke,Ue,et,Be);A.generateMipmaps=!1}else if(ht){if(vt){const qe=ye(xe);t.texStorage2D(s.TEXTURE_2D,xt,ke,qe.width,qe.height)}ft&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,et,xe)}else t.texImage2D(s.TEXTURE_2D,0,ke,Ue,et,xe);g(A)&&m(se),Ze.__version=pe.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Ee(O,A,Y){if(A.image.length!==6)return;const se=fe(O,A),ce=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+Y);const pe=n.get(ce);if(ce.version!==pe.__version||se===!0){t.activeTexture(s.TEXTURE0+Y);const Ze=Ct.getPrimaries(Ct.workingColorSpace),me=A.colorSpace===Ui?null:Ct.getPrimaries(A.colorSpace),Ge=A.colorSpace===Ui||Ze===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Je=A.isCompressedTexture||A.image[0].isCompressedTexture,xe=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let x=0;x<6;x++)!Je&&!xe?Ue[x]=_(A.image[x],!0,i.maxCubemapSize):Ue[x]=xe?A.image[x].image:A.image[x],Ue[x]=_e(A,Ue[x]);const et=Ue[0],ke=r.convert(A.format,A.colorSpace),Be=r.convert(A.type),ut=v(A.internalFormat,ke,Be,A.colorSpace),ht=A.isVideoTexture!==!0,vt=pe.__version===void 0||se===!0,ft=ce.dataReady;let xt=y(A,et);oe(s.TEXTURE_CUBE_MAP,A);let qe;if(Je){ht&&vt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xt,ut,et.width,et.height);for(let x=0;x<6;x++){qe=Ue[x].mipmaps;for(let j=0;j<qe.length;j++){const le=qe[j];A.format!==Zn?ke!==null?ht?ft&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,j,0,0,le.width,le.height,ke,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,j,ut,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,j,0,0,le.width,le.height,ke,Be,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,j,ut,le.width,le.height,0,ke,Be,le.data)}}}else{if(qe=A.mipmaps,ht&&vt){qe.length>0&&xt++;const x=ye(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xt,ut,x.width,x.height)}for(let x=0;x<6;x++)if(xe){ht?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,Ue[x].width,Ue[x].height,ke,Be,Ue[x].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,ut,Ue[x].width,Ue[x].height,0,ke,Be,Ue[x].data);for(let j=0;j<qe.length;j++){const be=qe[j].image[x].image;ht?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,j+1,0,0,be.width,be.height,ke,Be,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,j+1,ut,be.width,be.height,0,ke,Be,be.data)}}else{ht?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,ke,Be,Ue[x]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,ut,ke,Be,Ue[x]);for(let j=0;j<qe.length;j++){const le=qe[j];ht?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,j+1,0,0,ke,Be,le.image[x]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+x,j+1,ut,ke,Be,le.image[x])}}}g(A)&&m(s.TEXTURE_CUBE_MAP),pe.__version=ce.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function V(O,A,Y,se,ce,pe){const Ze=r.convert(Y.format,Y.colorSpace),me=r.convert(Y.type),Ge=v(Y.internalFormat,Ze,me,Y.colorSpace);if(!n.get(A).__hasExternalTextures){const xe=Math.max(1,A.width>>pe),Ue=Math.max(1,A.height>>pe);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,pe,Ge,xe,Ue,A.depth,0,Ze,me,null):t.texImage2D(ce,pe,Ge,xe,Ue,0,Ze,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),he(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ce,n.get(Y).__webglTexture,0,de(A)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,ce,n.get(Y).__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(O,A,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,O),A.depthBuffer&&!A.stencilBuffer){let se=s.DEPTH_COMPONENT24;if(Y||he(A)){const ce=A.depthTexture;ce&&ce.isDepthTexture&&(ce.type===ni?se=s.DEPTH_COMPONENT32F:ce.type===Zs&&(se=s.DEPTH_COMPONENT24));const pe=de(A);he(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,se,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,se,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,se,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,O)}else if(A.depthBuffer&&A.stencilBuffer){const se=de(A);Y&&he(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,A.width,A.height):he(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,O)}else{const se=A.textures;for(let ce=0;ce<se.length;ce++){const pe=se[ce],Ze=r.convert(pe.format,pe.colorSpace),me=r.convert(pe.type),Ge=v(pe.internalFormat,Ze,me,pe.colorSpace),Je=de(A);Y&&he(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Ge,A.width,A.height):he(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,Ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const se=n.get(A.depthTexture).__webglTexture,ce=de(A);if(A.depthTexture.format===Xs)he(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(A.depthTexture.format===Or)he(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ne(O){const A=n.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ie(A.__webglFramebuffer,O)}else if(Y){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]=s.createRenderbuffer(),ee(A.__webglDepthbuffer[se],O,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),ee(A.__webglDepthbuffer,O,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(O,A,Y){const se=n.get(O);A!==void 0&&V(se.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&ne(O)}function ue(O){const A=O.texture,Y=n.get(O),se=n.get(A);O.addEventListener("dispose",D);const ce=O.textures,pe=O.isWebGLCubeRenderTarget===!0,Ze=ce.length>1;if(Ze||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=A.version,o.memory.textures++),pe){Y.__webglFramebuffer=[];for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[me]=[];for(let Ge=0;Ge<A.mipmaps.length;Ge++)Y.__webglFramebuffer[me][Ge]=s.createFramebuffer()}else Y.__webglFramebuffer[me]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)Y.__webglFramebuffer[me]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let me=0,Ge=ce.length;me<Ge;me++){const Je=n.get(ce[me]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(O.samples>0&&he(O)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const Ge=ce[me];Y.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[me]);const Je=r.convert(Ge.format,Ge.colorSpace),xe=r.convert(Ge.type),Ue=v(Ge.internalFormat,Je,xe,Ge.colorSpace,O.isXRRenderTarget===!0),et=de(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Ue,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Y.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(Y.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),oe(s.TEXTURE_CUBE_MAP,A);for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)V(Y.__webglFramebuffer[me][Ge],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge);else V(Y.__webglFramebuffer[me],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(A)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let me=0,Ge=ce.length;me<Ge;me++){const Je=ce[me],xe=n.get(Je);t.bindTexture(s.TEXTURE_2D,xe.__webglTexture),oe(s.TEXTURE_2D,Je),V(Y.__webglFramebuffer,O,Je,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),g(Je)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(me=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),oe(me,A),A.mipmaps&&A.mipmaps.length>0)for(let Ge=0;Ge<A.mipmaps.length;Ge++)V(Y.__webglFramebuffer[Ge],O,A,s.COLOR_ATTACHMENT0,me,Ge);else V(Y.__webglFramebuffer,O,A,s.COLOR_ATTACHMENT0,me,0);g(A)&&m(me),t.unbindTexture()}O.depthBuffer&&ne(O)}function De(O){const A=O.textures;for(let Y=0,se=A.length;Y<se;Y++){const ce=A[Y];if(g(ce)){const pe=O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ze=n.get(ce).__webglTexture;t.bindTexture(pe,Ze),m(pe),t.unbindTexture()}}}function q(O){if(O.samples>0&&he(O)===!1){const A=O.textures,Y=O.width,se=O.height;let ce=s.COLOR_BUFFER_BIT;const pe=[],Ze=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(O),Ge=A.length>1;if(Ge)for(let Je=0;Je<A.length;Je++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Je=0;Je<A.length;Je++){pe.push(s.COLOR_ATTACHMENT0+Je),O.depthBuffer&&pe.push(Ze);const xe=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(xe===!1&&(O.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&me.__isTransmissionRenderTarget!==!0&&(ce|=s.STENCIL_BUFFER_BIT)),Ge&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[Je]),xe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ze]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ze])),Ge){const Ue=n.get(A[Je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ue,0)}s.blitFramebuffer(0,0,Y,se,0,0,Y,se,ce,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ge)for(let Je=0;Je<A.length;Je++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.RENDERBUFFER,me.__webglColorRenderbuffer[Je]);const xe=n.get(A[Je]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.TEXTURE_2D,xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function de(O){return Math.min(i.maxSamples,O.samples)}function he(O){const A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ve(O){const A=o.render.frame;u.get(O)!==A&&(u.set(O,A),O.update())}function _e(O,A){const Y=O.colorSpace,se=O.format,ce=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==Ji&&Y!==Ui&&(Ct.getTransfer(Y)===Ft?(se!==Zn||ce!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),A}function ye(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=S,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=B,this.rebindTextures=Te,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=V,this.useMultisampledRTT=he}function Am(s,e){function t(n,i=Ui){let r;const o=Ct.getTransfer(i);if(n===Wi)return s.UNSIGNED_BYTE;if(n===Vu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hp)return s.BYTE;if(n===Gp)return s.SHORT;if(n===Bu)return s.UNSIGNED_SHORT;if(n===zu)return s.INT;if(n===Zs)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===bo)return s.HALF_FLOAT;if(n===Xp)return s.ALPHA;if(n===qp)return s.RGB;if(n===Zn)return s.RGBA;if(n===Yp)return s.LUMINANCE;if(n===Zp)return s.LUMINANCE_ALPHA;if(n===Xs)return s.DEPTH_COMPONENT;if(n===Or)return s.DEPTH_STENCIL;if(n===Gu)return s.RED;if(n===Wu)return s.RED_INTEGER;if(n===jp)return s.RG;if(n===Xu)return s.RG_INTEGER;if(n===qu)return s.RGBA_INTEGER;if(n===Ka||n===$a||n===Qa||n===ec)if(o===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ec)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zl||n===jl||n===Jl||n===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yu)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===$l||n===Ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l)return o===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===cu||n===lu||n===uu||n===hu||n===du||n===fu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===iu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===su)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ru)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ou)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===au)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===du)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fu)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===pu||n===mu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tc)return o===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jp||n===gu||n===_u||n===yu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_u)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Tm extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yb={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yb)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new $n({vertexShader:Zb,fragmentShader:jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Se(new ps(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Kb extends Ei{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,p=null;const _=new Jb,g=t.getContextAttributes();let m=null,v=null;const y=[],b=[],D=new re;let T=null;const L=new on;L.layers.enable(1),L.viewport=new Pt;const F=new on;F.layers.enable(2),F.viewport=new Pt;const E=[L,F],S=new Tm;S.layers.enable(1),S.layers.enable(2);let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ee=y[V];return ee===void 0&&(ee=new Sl,y[V]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(V){let ee=y[V];return ee===void 0&&(ee=new Sl,y[V]=ee),ee.getGripSpace()},this.getHand=function(V){let ee=y[V];return ee===void 0&&(ee=new Sl,y[V]=ee),ee.getHandSpace()};function k(V){const ee=b.indexOf(V.inputSource);if(ee===-1)return;const ie=y[ee];ie!==void 0&&(ie.update(V.inputSource,V.frame,l||o),ie.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Z);for(let V=0;V<y.length;V++){const ee=b[V];ee!==null&&(b[V]=null,y[V].disconnect(ee))}U=null,H=null,_.reset(),e.setRenderTarget(m),f=null,h=null,d=null,i=null,v=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,ie=null,ne=null;g.depth&&(ne=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?Or:Xs,ie=g.stencil?Vr:Zs);const Te={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(Te),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Jn(h.textureWidth,h.textureHeight,{format:Zn,type:Wi,depthTexture:new th(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ue=e.properties.get(v);ue.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Z(V){for(let ee=0;ee<V.removed.length;ee++){const ie=V.removed[ee],ne=b.indexOf(ie);ne>=0&&(b[ne]=null,y[ne].disconnect(ie))}for(let ee=0;ee<V.added.length;ee++){const ie=V.added[ee];let ne=b.indexOf(ie);if(ne===-1){for(let ue=0;ue<y.length;ue++)if(ue>=b.length){b.push(ie),ne=ue;break}else if(b[ue]===null){b[ue]=ie,ne=ue;break}if(ne===-1)break}const Te=y[ne];Te&&Te.connect(ie)}}const B=new R,G=new R;function z(V,ee,ie){B.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(ie.matrixWorld);const ne=B.distanceTo(G),Te=ee.projectionMatrix.elements,ue=ie.projectionMatrix.elements,De=Te[14]/(Te[10]-1),q=Te[14]/(Te[10]+1),de=(Te[9]+1)/Te[5],he=(Te[9]-1)/Te[5],ve=(Te[8]-1)/Te[0],_e=(ue[8]+1)/ue[0],ye=De*ve,O=De*_e,A=ne/(-ve+_e),Y=A*-ve;ee.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Y),V.translateZ(A),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const se=De+A,ce=q+A,pe=ye-Y,Ze=O+(ne-Y),me=de*q/ce*se,Ge=he*q/ce*se;V.projectionMatrix.makePerspective(pe,Ze,me,Ge,se,ce),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function K(V,ee){ee===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ee.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),S.near=F.near=L.near=V.near,S.far=F.far=L.far=V.far,(U!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,H=S.far,L.near=U,L.far=H,F.near=U,F.far=H,L.updateProjectionMatrix(),F.updateProjectionMatrix(),V.updateProjectionMatrix());const ee=V.parent,ie=S.cameras;K(S,ee);for(let ne=0;ne<ie.length;ne++)K(ie[ne],ee);ie.length===2?z(S,L,F):S.projectionMatrix.copy(L.projectionMatrix),oe(V,S,ee)};function oe(V,ee,ie){ie===null?V.matrix.copy(ee.matrixWorld):(V.matrix.copy(ie.matrixWorld),V.matrix.invert(),V.matrix.multiply(ee.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Fr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(V){c=V,h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let fe=null;function Ae(V,ee){if(u=ee.getViewerPose(l||o),p=ee,u!==null){const ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ne=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,ne=!0);for(let ue=0;ue<ie.length;ue++){const De=ie[ue];let q=null;if(f!==null)q=f.getViewport(De);else{const he=d.getViewSubImage(h,De);q=he.viewport,ue===0&&(e.setRenderTargetTextures(v,he.colorTexture,h.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(v))}let de=E[ue];de===void 0&&(de=new on,de.layers.enable(ue),de.viewport=new Pt,E[ue]=de),de.matrix.fromArray(De.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(De.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(q.x,q.y,q.width,q.height),ue===0&&(S.matrix.copy(de.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ne===!0&&S.cameras.push(de)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const ue=d.getDepthInformation(ie[0]);ue&&ue.isValid&&ue.texture&&_.init(e,ue,i.renderState)}}for(let ie=0;ie<y.length;ie++){const ne=b[ie],Te=y[ie];ne!==null&&Te!==void 0&&Te.update(ne,ee,l||o)}_.render(e,S),fe&&fe(V,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const Ee=new xm;Ee.setAnimationLoop(Ae),this.setAnimationLoop=function(V){fe=V},this.dispose=function(){}}}const ws=new Gn,$b=new Ve;function Qb(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,gm(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),y=v.envMap,b=v.envMapRotation;if(y&&(g.envMap.value=y,ws.copy(b),ws.x*=-1,ws.y*=-1,ws.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),g.envMapRotation.value.setFromMatrix4($b.makeRotationFromEuler(ws)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const D=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*D,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function eM(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function l(v,y){let b=i[v.id];b===void 0&&(p(v),b=u(v),i[v.id]=b,v.addEventListener("dispose",g));const D=y.program;n.updateUBOMapping(v,D);const T=e.render.frame;r[v.id]!==T&&(h(v),r[v.id]=T)}function u(v){const y=d();v.__bindingPointIndex=y;const b=s.createBuffer(),D=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,D,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],b=v.uniforms,D=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,L=b.length;T<L;T++){const F=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,S=F.length;E<S;E++){const U=F[E];if(f(U,T,E,D)===!0){const H=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let Z=0;Z<k.length;Z++){const B=k[Z],G=_(B);typeof B=="number"||typeof B=="boolean"?(U.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,H+W,U.__data)):B.isMatrix3?(U.__data[0]=B.elements[0],U.__data[1]=B.elements[1],U.__data[2]=B.elements[2],U.__data[3]=0,U.__data[4]=B.elements[3],U.__data[5]=B.elements[4],U.__data[6]=B.elements[5],U.__data[7]=0,U.__data[8]=B.elements[6],U.__data[9]=B.elements[7],U.__data[10]=B.elements[8],U.__data[11]=0):(B.toArray(U.__data,W),W+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,b,D){const T=v.value,L=y+"_"+b;if(D[L]===void 0)return typeof T=="number"||typeof T=="boolean"?D[L]=T:D[L]=T.clone(),!0;{const F=D[L];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return D[L]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function p(v){const y=v.uniforms;let b=0;const D=16;for(let L=0,F=y.length;L<F;L++){const E=Array.isArray(y[L])?y[L]:[y[L]];for(let S=0,U=E.length;S<U;S++){const H=E[S],k=Array.isArray(H.value)?H.value:[H.value];for(let W=0,Z=k.length;W<Z;W++){const B=k[W],G=_(B),z=b%D;z!==0&&D-z<G.boundary&&(b+=D-z),H.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=G.storage}}}const T=b%D;return T>0&&(b+=D-T),v.__size=b,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class Cm{constructor(e={}){const{canvas:t=hm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const y=this;let b=!1,D=0,T=0,L=null,F=-1,E=null;const S=new Pt,U=new Pt;let H=null;const k=new Re(0);let W=0,Z=t.width,B=t.height,G=1,z=null,K=null;const oe=new Pt(0,0,Z,B),fe=new Pt(0,0,Z,B);let Ae=!1;const Ee=new Wo;let V=!1,ee=!1;const ie=new Ve,ne=new re,Te=new R,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return L===null?G:1}let q=n;function de(N,X){const Q=t.getContext(N,X);return Q!==null?Q:null}try{const N={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",be,!1),q===null){const X="webgl2";if(q=de(X,N),q===null)throw de(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let he,ve,_e,ye,O,A,Y,se,ce,pe,Ze,me,Ge,Je,xe,Ue,et,ke,Be,ut,ht,vt,ft,xt;function qe(){he=new fx(q),he.init(),ve=new ax(q,he,e),vt=new Am(q,he),_e=new Xb(q),ye=new gx(q),O=new Nb,A=new qb(q,he,_e,O,ve,vt,ye),Y=new lx(y),se=new dx(y),ce=new M_(q),ft=new rx(q,ce),pe=new px(q,ce,ye,ft),Ze=new yx(q,pe,ce,ye),Be=new _x(q,ve,A),Ue=new cx(O),me=new Lb(y,Y,se,he,ve,ft,Ue),Ge=new Qb(y,O),Je=new Ub,xe=new Vb(he),ke=new sx(y,Y,se,_e,Ze,h,c),et=new Wb(y,Ze,ve),xt=new eM(q,ye,ve,_e),ut=new ox(q,he,ye),ht=new mx(q,he,ye),ye.programs=me.programs,y.capabilities=ve,y.extensions=he,y.properties=O,y.renderLists=Je,y.shadowMap=et,y.state=_e,y.info=ye}qe();const x=new Kb(y,q);this.xr=x,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const N=he.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=he.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(N){N!==void 0&&(G=N,this.setSize(Z,B,!1))},this.getSize=function(N){return N.set(Z,B)},this.setSize=function(N,X,Q=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=N,B=X,t.width=Math.floor(N*G),t.height=Math.floor(X*G),Q===!0&&(t.style.width=N+"px",t.style.height=X+"px"),this.setViewport(0,0,N,X)},this.getDrawingBufferSize=function(N){return N.set(Z*G,B*G).floor()},this.setDrawingBufferSize=function(N,X,Q){Z=N,B=X,G=Q,t.width=Math.floor(N*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,N,X)},this.getCurrentViewport=function(N){return N.copy(S)},this.getViewport=function(N){return N.copy(oe)},this.setViewport=function(N,X,Q,te){N.isVector4?oe.set(N.x,N.y,N.z,N.w):oe.set(N,X,Q,te),_e.viewport(S.copy(oe).multiplyScalar(G).round())},this.getScissor=function(N){return N.copy(fe)},this.setScissor=function(N,X,Q,te){N.isVector4?fe.set(N.x,N.y,N.z,N.w):fe.set(N,X,Q,te),_e.scissor(U.copy(fe).multiplyScalar(G).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(N){_e.setScissorTest(Ae=N)},this.setOpaqueSort=function(N){z=N},this.setTransparentSort=function(N){K=N},this.getClearColor=function(N){return N.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(N=!0,X=!0,Q=!0){let te=0;if(N){let J=!1;if(L!==null){const Pe=L.texture.format;J=Pe===qu||Pe===Xu||Pe===Wu}if(J){const Pe=L.texture.type,Ye=Pe===Wi||Pe===Zs||Pe===Bu||Pe===Vr||Pe===Vu||Pe===Hu,He=ke.getClearColor(),Ke=ke.getClearAlpha(),nt=He.r,it=He.g,rt=He.b;Ye?(f[0]=nt,f[1]=it,f[2]=rt,f[3]=Ke,q.clearBufferuiv(q.COLOR,0,f)):(p[0]=nt,p[1]=it,p[2]=rt,p[3]=Ke,q.clearBufferiv(q.COLOR,0,p))}else te|=q.COLOR_BUFFER_BIT}X&&(te|=q.DEPTH_BUFFER_BIT),Q&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Je.dispose(),xe.dispose(),O.dispose(),Y.dispose(),se.dispose(),Ze.dispose(),ft.dispose(),xt.dispose(),me.dispose(),x.dispose(),x.removeEventListener("sessionstart",Mt),x.removeEventListener("sessionend",Gt),Sn.stop()};function j(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const N=ye.autoReset,X=et.enabled,Q=et.autoUpdate,te=et.needsUpdate,J=et.type;qe(),ye.autoReset=N,et.enabled=X,et.autoUpdate=Q,et.needsUpdate=te,et.type=J}function be(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Oe(N){const X=N.target;X.removeEventListener("dispose",Oe),dt(X)}function dt(N){lt(N),O.remove(N)}function lt(N){const X=O.get(N).programs;X!==void 0&&(X.forEach(function(Q){me.releaseProgram(Q)}),N.isShaderMaterial&&me.releaseShaderCache(N))}this.renderBufferDirect=function(N,X,Q,te,J,Pe){X===null&&(X=ue);const Ye=J.isMesh&&J.matrixWorld.determinant()<0,He=Zc(N,X,Q,te,J);_e.setMaterial(te,Ye);let Ke=Q.index,nt=1;if(te.wireframe===!0){if(Ke=pe.getWireframeAttribute(Q),Ke===void 0)return;nt=2}const it=Q.drawRange,rt=Q.attributes.position;let Bt=it.start*nt,wn=(it.start+it.count)*nt;Pe!==null&&(Bt=Math.max(Bt,Pe.start*nt),wn=Math.min(wn,(Pe.start+Pe.count)*nt)),Ke!==null?(Bt=Math.max(Bt,0),wn=Math.min(wn,Ke.count)):rt!=null&&(Bt=Math.max(Bt,0),wn=Math.min(wn,rt.count));const nn=wn-Bt;if(nn<0||nn===1/0)return;ft.setup(J,te,He,Q,Ke);let oi,Ut=ut;if(Ke!==null&&(oi=ce.get(Ke),Ut=ht,Ut.setIndex(oi)),J.isMesh)te.wireframe===!0?(_e.setLineWidth(te.wireframeLinewidth*De()),Ut.setMode(q.LINES)):Ut.setMode(q.TRIANGLES);else if(J.isLine){let ot=te.linewidth;ot===void 0&&(ot=1),_e.setLineWidth(ot*De()),J.isLineSegments?Ut.setMode(q.LINES):J.isLineLoop?Ut.setMode(q.LINE_LOOP):Ut.setMode(q.LINE_STRIP)}else J.isPoints?Ut.setMode(q.POINTS):J.isSprite&&Ut.setMode(q.TRIANGLES);if(J.isBatchedMesh)Ut.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Ut.renderInstances(Bt,nn,J.count);else if(Q.isInstancedBufferGeometry){const ot=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,_i=Math.min(Q.instanceCount,ot);Ut.renderInstances(Bt,nn,_i)}else Ut.render(Bt,nn)};function Dt(N,X,Q){N.transparent===!0&&N.side===ti&&N.forceSinglePass===!1?(N.side=Pn,N.needsUpdate=!0,_s(N,X,Q),N.side=wi,N.needsUpdate=!0,_s(N,X,Q),N.side=ti):_s(N,X,Q)}this.compile=function(N,X,Q=null){Q===null&&(Q=N),g=xe.get(Q),g.init(),v.push(g),Q.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),N!==Q&&N.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights(y._useLegacyLights);const te=new Set;return N.traverse(function(J){const Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let Ye=0;Ye<Pe.length;Ye++){const He=Pe[Ye];Dt(He,Q,J),te.add(He)}else Dt(Pe,Q,J),te.add(Pe)}),v.pop(),g=null,te},this.compileAsync=function(N,X,Q=null){const te=this.compile(N,X,Q);return new Promise(J=>{function Pe(){if(te.forEach(function(Ye){O.get(Ye).currentProgram.isReady()&&te.delete(Ye)}),te.size===0){J(N);return}setTimeout(Pe,10)}he.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let $t=null;function Tt(N){$t&&$t(N)}function Mt(){Sn.stop()}function Gt(){Sn.start()}const Sn=new xm;Sn.setAnimationLoop(Tt),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(N){$t=N,x.setAnimationLoop(N),N===null?Sn.stop():Sn.start()},x.addEventListener("sessionstart",Mt),x.addEventListener("sessionend",Gt),this.render=function(N,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(X),X=x.getCamera()),N.isScene===!0&&N.onBeforeRender(y,N,X,L),g=xe.get(N,v.length),g.init(),v.push(g),ie.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ee.setFromProjectionMatrix(ie),ee=this.localClippingEnabled,V=Ue.init(this.clippingPlanes,ee),_=Je.get(N,m.length),_.init(),m.push(_),Fn(N,X,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(z,K),this.info.render.frame++,V===!0&&Ue.beginShadows();const Q=g.state.shadowsArray;if(et.render(Q,N,X),V===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1)&&ke.render(_,N),g.setupLights(y._useLegacyLights),X.isArrayCamera){const te=X.cameras;for(let J=0,Pe=te.length;J<Pe;J++){const Ye=te[J];gi(_,N,Ye,Ye.viewport)}}else gi(_,N,X);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),N.isScene===!0&&N.onAfterRender(y,N,X),ft.resetDefaultState(),F=-1,E=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Fn(N,X,Q,te){if(N.visible===!1)return;if(N.layers.test(X.layers)){if(N.isGroup)Q=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(X);else if(N.isLight)g.pushLight(N),N.castShadow&&g.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ee.intersectsSprite(N)){te&&Te.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ie);const Ye=Ze.update(N),He=N.material;He.visible&&_.push(N,Ye,He,Q,Te.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ee.intersectsObject(N))){const Ye=Ze.update(N),He=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Te.copy(N.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Te.copy(Ye.boundingSphere.center)),Te.applyMatrix4(N.matrixWorld).applyMatrix4(ie)),Array.isArray(He)){const Ke=Ye.groups;for(let nt=0,it=Ke.length;nt<it;nt++){const rt=Ke[nt],Bt=He[rt.materialIndex];Bt&&Bt.visible&&_.push(N,Ye,Bt,Q,Te.z,rt)}}else He.visible&&_.push(N,Ye,He,Q,Te.z,null)}}const Pe=N.children;for(let Ye=0,He=Pe.length;Ye<He;Ye++)Fn(Pe[Ye],X,Q,te)}function gi(N,X,Q,te){const J=N.opaque,Pe=N.transmissive,Ye=N.transparent;g.setupLightsView(Q),V===!0&&Ue.setGlobalState(y.clippingPlanes,Q),Pe.length>0&&Ki(J,Pe,X,Q),te&&_e.viewport(S.copy(te)),J.length>0&&Ai(J,X,Q),Pe.length>0&&Ai(Pe,X,Q),Ye.length>0&&Ai(Ye,X,Q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ki(N,X,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(g.state.transmissionRenderTarget===null){g.state.transmissionRenderTarget=new Jn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?bo:Wi,minFilter:hi,samples:4,stencilBuffer:r});const nt=O.get(g.state.transmissionRenderTarget);nt.__isTransmissionRenderTarget=!0}const Pe=g.state.transmissionRenderTarget;y.getDrawingBufferSize(ne),Pe.setSize(ne.x,ne.y);const Ye=y.getRenderTarget();y.setRenderTarget(Pe),y.getClearColor(k),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear();const He=y.toneMapping;y.toneMapping=Gi,Ai(N,Q,te),A.updateMultisampleRenderTarget(Pe),A.updateRenderTargetMipmap(Pe);let Ke=!1;for(let nt=0,it=X.length;nt<it;nt++){const rt=X[nt],Bt=rt.object,wn=rt.geometry,nn=rt.material,oi=rt.group;if(nn.side===ti&&Bt.layers.test(te.layers)){const Ut=nn.side;nn.side=Pn,nn.needsUpdate=!0,Zo(Bt,Q,te,wn,nn,oi),nn.side=Ut,nn.needsUpdate=!0,Ke=!0}}Ke===!0&&(A.updateMultisampleRenderTarget(Pe),A.updateRenderTargetMipmap(Pe)),y.setRenderTarget(Ye),y.setClearColor(k,W),y.toneMapping=He}function Ai(N,X,Q){const te=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Pe=N.length;J<Pe;J++){const Ye=N[J],He=Ye.object,Ke=Ye.geometry,nt=te===null?Ye.material:te,it=Ye.group;He.layers.test(Q.layers)&&Zo(He,X,Q,Ke,nt,it)}}function Zo(N,X,Q,te,J,Pe){N.onBeforeRender(y,X,Q,te,J,Pe),N.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(y,X,Q,te,N,Pe),J.transparent===!0&&J.side===ti&&J.forceSinglePass===!1?(J.side=Pn,J.needsUpdate=!0,y.renderBufferDirect(Q,X,te,J,N,Pe),J.side=wi,J.needsUpdate=!0,y.renderBufferDirect(Q,X,te,J,N,Pe),J.side=ti):y.renderBufferDirect(Q,X,te,J,N,Pe),N.onAfterRender(y,X,Q,te,J,Pe)}function _s(N,X,Q){X.isScene!==!0&&(X=ue);const te=O.get(N),J=g.state.lights,Pe=g.state.shadowsArray,Ye=J.state.version,He=me.getParameters(N,J.state,Pe,X,Q),Ke=me.getProgramCacheKey(He);let nt=te.programs;te.environment=N.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(N.isMeshStandardMaterial?se:Y).get(N.envMap||te.environment),te.envMapRotation=te.environment!==null&&N.envMap===null?X.environmentRotation:N.envMapRotation,nt===void 0&&(N.addEventListener("dispose",Oe),nt=new Map,te.programs=nt);let it=nt.get(Ke);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Ye)return Xr(N,He),it}else He.uniforms=me.getUniforms(N),N.onBuild(Q,He,y),N.onBeforeCompile(He,y),it=me.acquireProgram(He,Ke),nt.set(Ke,it),te.uniforms=He.uniforms;const rt=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(rt.clippingPlanes=Ue.uniform),Xr(N,He),te.needsLights=Jc(N),te.lightsStateVersion=Ye,te.needsLights&&(rt.ambientLightColor.value=J.state.ambient,rt.lightProbe.value=J.state.probe,rt.directionalLights.value=J.state.directional,rt.directionalLightShadows.value=J.state.directionalShadow,rt.spotLights.value=J.state.spot,rt.spotLightShadows.value=J.state.spotShadow,rt.rectAreaLights.value=J.state.rectArea,rt.ltc_1.value=J.state.rectAreaLTC1,rt.ltc_2.value=J.state.rectAreaLTC2,rt.pointLights.value=J.state.point,rt.pointLightShadows.value=J.state.pointShadow,rt.hemisphereLights.value=J.state.hemi,rt.directionalShadowMap.value=J.state.directionalShadowMap,rt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,rt.spotShadowMap.value=J.state.spotShadowMap,rt.spotLightMatrix.value=J.state.spotLightMatrix,rt.spotLightMap.value=J.state.spotLightMap,rt.pointShadowMap.value=J.state.pointShadowMap,rt.pointShadowMatrix.value=J.state.pointShadowMatrix),te.currentProgram=it,te.uniformsList=null,it}function jo(N){if(N.uniformsList===null){const X=N.currentProgram.getUniforms();N.uniformsList=ic.seqWithValue(X.seq,N.uniforms)}return N.uniformsList}function Xr(N,X){const Q=O.get(N);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function Zc(N,X,Q,te,J){X.isScene!==!0&&(X=ue),A.resetTextureUnits();const Pe=X.fog,Ye=te.isMeshStandardMaterial?X.environment:null,He=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ji,Ke=(te.isMeshStandardMaterial?se:Y).get(te.envMap||Ye),nt=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,it=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),rt=!!Q.morphAttributes.position,Bt=!!Q.morphAttributes.normal,wn=!!Q.morphAttributes.color;let nn=Gi;te.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(nn=y.toneMapping);const oi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ut=oi!==void 0?oi.length:0,ot=O.get(te),_i=g.state.lights;if(V===!0&&(ee===!0||N!==E)){const St=N===E&&te.id===F;Ue.setState(te,N,St)}let Ot=!1;te.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==_i.state.version||ot.outputColorSpace!==He||J.isBatchedMesh&&ot.batching===!1||!J.isBatchedMesh&&ot.batching===!0||J.isInstancedMesh&&ot.instancing===!1||!J.isInstancedMesh&&ot.instancing===!0||J.isSkinnedMesh&&ot.skinning===!1||!J.isSkinnedMesh&&ot.skinning===!0||J.isInstancedMesh&&ot.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ot.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ot.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ot.instancingMorph===!1&&J.morphTexture!==null||ot.envMap!==Ke||te.fog===!0&&ot.fog!==Pe||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Ue.numPlanes||ot.numIntersection!==Ue.numIntersection)||ot.vertexAlphas!==nt||ot.vertexTangents!==it||ot.morphTargets!==rt||ot.morphNormals!==Bt||ot.morphColors!==wn||ot.toneMapping!==nn||ot.morphTargetsCount!==Ut)&&(Ot=!0):(Ot=!0,ot.__version=te.version);let yi=ot.currentProgram;Ot===!0&&(yi=_s(te,X,J));let Jo=!1,$i=!1,qr=!1;const un=yi.getUniforms(),vi=ot.uniforms;if(_e.useProgram(yi.program)&&(Jo=!0,$i=!0,qr=!0),te.id!==F&&(F=te.id,$i=!0),Jo||E!==N){un.setValue(q,"projectionMatrix",N.projectionMatrix),un.setValue(q,"viewMatrix",N.matrixWorldInverse);const St=un.map.cameraPosition;St!==void 0&&St.setValue(q,Te.setFromMatrixPosition(N.matrixWorld)),ve.logarithmicDepthBuffer&&un.setValue(q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&un.setValue(q,"isOrthographic",N.isOrthographicCamera===!0),E!==N&&(E=N,$i=!0,qr=!0)}if(J.isSkinnedMesh){un.setOptional(q,J,"bindMatrix"),un.setOptional(q,J,"bindMatrixInverse");const St=J.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),un.setValue(q,"boneTexture",St.boneTexture,A))}J.isBatchedMesh&&(un.setOptional(q,J,"batchingTexture"),un.setValue(q,"batchingTexture",J._matricesTexture,A));const sr=Q.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Be.update(J,Q,yi),($i||ot.receiveShadow!==J.receiveShadow)&&(ot.receiveShadow=J.receiveShadow,un.setValue(q,"receiveShadow",J.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(vi.envMap.value=Ke,vi.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&X.environment!==null&&(vi.envMapIntensity.value=X.environmentIntensity),$i&&(un.setValue(q,"toneMappingExposure",y.toneMappingExposure),ot.needsLights&&jc(vi,qr),Pe&&te.fog===!0&&Ge.refreshFogUniforms(vi,Pe),Ge.refreshMaterialUniforms(vi,te,G,B,g.state.transmissionRenderTarget),ic.upload(q,jo(ot),vi,A)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ic.upload(q,jo(ot),vi,A),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&un.setValue(q,"center",J.center),un.setValue(q,"modelViewMatrix",J.modelViewMatrix),un.setValue(q,"normalMatrix",J.normalMatrix),un.setValue(q,"modelMatrix",J.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const St=te.uniformsGroups;for(let ys=0,Kc=St.length;ys<Kc;ys++){const Yr=St[ys];xt.update(Yr,yi),xt.bind(Yr,yi)}}return yi}function jc(N,X){N.ambientLightColor.needsUpdate=X,N.lightProbe.needsUpdate=X,N.directionalLights.needsUpdate=X,N.directionalLightShadows.needsUpdate=X,N.pointLights.needsUpdate=X,N.pointLightShadows.needsUpdate=X,N.spotLights.needsUpdate=X,N.spotLightShadows.needsUpdate=X,N.rectAreaLights.needsUpdate=X,N.hemisphereLights.needsUpdate=X}function Jc(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(N,X,Q){O.get(N.texture).__webglTexture=X,O.get(N.depthTexture).__webglTexture=Q;const te=O.get(N);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,X){const Q=O.get(N);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(N,X=0,Q=0){L=N,D=X,T=Q;let te=!0,J=null,Pe=!1,Ye=!1;if(N){const Ke=O.get(N);Ke.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(q.FRAMEBUFFER,null),te=!1):Ke.__webglFramebuffer===void 0?A.setupRenderTarget(N):Ke.__hasExternalTextures&&A.rebindTextures(N,O.get(N.texture).__webglTexture,O.get(N.depthTexture).__webglTexture);const nt=N.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ye=!0);const it=O.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(it[X])?J=it[X][Q]:J=it[X],Pe=!0):N.samples>0&&A.useMultisampledRTT(N)===!1?J=O.get(N).__webglMultisampledFramebuffer:Array.isArray(it)?J=it[Q]:J=it,S.copy(N.viewport),U.copy(N.scissor),H=N.scissorTest}else S.copy(oe).multiplyScalar(G).floor(),U.copy(fe).multiplyScalar(G).floor(),H=Ae;if(_e.bindFramebuffer(q.FRAMEBUFFER,J)&&te&&_e.drawBuffers(N,J),_e.viewport(S),_e.scissor(U),_e.setScissorTest(H),Pe){const Ke=O.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ke.__webglTexture,Q)}else if(Ye){const Ke=O.get(N.texture),nt=X||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ke.__webglTexture,Q||0,nt)}F=-1},this.readRenderTargetPixels=function(N,X,Q,te,J,Pe,Ye){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=O.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(He=He[Ye]),He){_e.bindFramebuffer(q.FRAMEBUFFER,He);try{const Ke=N.texture,nt=Ke.format,it=Ke.type;if(nt!==Zn&&vt.convert(nt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=it===bo&&(he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float"));if(it!==Wi&&vt.convert(it)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&it!==ni&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=N.width-te&&Q>=0&&Q<=N.height-J&&q.readPixels(X,Q,te,J,vt.convert(nt),vt.convert(it),Pe)}finally{const Ke=L!==null?O.get(L).__webglFramebuffer:null;_e.bindFramebuffer(q.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(N,X,Q=0){const te=Math.pow(2,-Q),J=Math.floor(X.image.width*te),Pe=Math.floor(X.image.height*te);A.setTexture2D(X,0),q.copyTexSubImage2D(q.TEXTURE_2D,Q,0,0,N.x,N.y,J,Pe),_e.unbindTexture()},this.copyTextureToTexture=function(N,X,Q,te=0){const J=X.image.width,Pe=X.image.height,Ye=vt.convert(Q.format),He=vt.convert(Q.type);A.setTexture2D(Q,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment),X.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,te,N.x,N.y,J,Pe,Ye,He,X.image.data):X.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,te,N.x,N.y,X.mipmaps[0].width,X.mipmaps[0].height,Ye,X.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,te,N.x,N.y,Ye,He,X.image),te===0&&Q.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(N,X,Q,te,J=0){const Pe=Math.round(N.max.x-N.min.x),Ye=Math.round(N.max.y-N.min.y),He=N.max.z-N.min.z+1,Ke=vt.convert(te.format),nt=vt.convert(te.type);let it;if(te.isData3DTexture)A.setTexture3D(te,0),it=q.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)A.setTexture2DArray(te,0),it=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);const rt=q.getParameter(q.UNPACK_ROW_LENGTH),Bt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),wn=q.getParameter(q.UNPACK_SKIP_PIXELS),nn=q.getParameter(q.UNPACK_SKIP_ROWS),oi=q.getParameter(q.UNPACK_SKIP_IMAGES),Ut=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ut.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ut.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,N.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,N.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,N.min.z),Q.isDataTexture||Q.isData3DTexture?q.texSubImage3D(it,J,X.x,X.y,X.z,Pe,Ye,He,Ke,nt,Ut.data):te.isCompressedArrayTexture?q.compressedTexSubImage3D(it,J,X.x,X.y,X.z,Pe,Ye,He,Ke,Ut.data):q.texSubImage3D(it,J,X.x,X.y,X.z,Pe,Ye,He,Ke,nt,Ut),q.pixelStorei(q.UNPACK_ROW_LENGTH,rt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Bt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,wn),q.pixelStorei(q.UNPACK_SKIP_ROWS,nn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,oi),J===0&&te.generateMipmaps&&q.generateMipmap(it),_e.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?A.setTextureCube(N,0):N.isData3DTexture?A.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?A.setTexture2DArray(N,0):A.setTexture2D(N,0),_e.unbindTexture()},this.resetState=function(){D=0,T=0,L=null,_e.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vc?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===Ho?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ec{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new Ec(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ac{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new Ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tc extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dm("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new R;class js{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ih extends Mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Mr;const $r=new R,Sr=new R,wr=new R,Er=new re,Qr=new re,Rm=new Ve,ba=new R,eo=new R,Ma=new R,Sd=new re,wl=new re,wd=new re;class Pm extends pt{constructor(e=new ih){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new st;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cc(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new js(n,3,0,!1)),Mr.setAttribute("uv",new js(n,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Rm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-wr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Sa(ba.set(-.5,-.5,0),wr,o,Sr,i,r),Sa(eo.set(.5,-.5,0),wr,o,Sr,i,r),Sa(Ma.set(.5,.5,0),wr,o,Sr,i,r),Sd.set(0,0),wl.set(1,0),wd.set(1,1);let a=e.ray.intersectTriangle(ba,eo,Ma,!1,$r);if(a===null&&(Sa(eo.set(-.5,.5,0),wr,o,Sr,i,r),wl.set(0,1),a=e.ray.intersectTriangle(ba,Ma,eo,!1,$r),a===null))return;const c=e.ray.origin.distanceTo($r);c<e.near||c>e.far||t.push({distance:c,point:$r.clone(),uv:Yn.getInterpolation($r,ba,eo,Ma,Sd,wl,wd,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sa(s,e,t,n,i,r){Er.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Qr.x=r*Er.x-i*Er.y,Qr.y=i*Er.x+r*Er.y):Qr.copy(Er),s.copy(e),s.x+=Qr.x,s.y+=Qr.y,s.applyMatrix4(Rm)}const wa=new R,Ed=new R;class Im extends pt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){wa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(wa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){wa.setFromMatrixPosition(e.matrixWorld),Ed.setFromMatrixPosition(this.matrixWorld);const n=wa.distanceTo(Ed)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Ad=new R,Td=new Pt,Cd=new Pt,tM=new R,Rd=new Ve,Ea=new R,El=new bn,Pd=new Ve,Al=new er;class sh extends Se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingBox.expandByPoint(Ea)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingSphere.expandByPoint(Ea)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),El.copy(this.boundingSphere),El.applyMatrix4(i),e.ray.intersectsSphere(El)!==!1&&(Pd.copy(i).invert(),Al.copy(e.ray).applyMatrix4(Pd),!(this.boundingBox!==null&&Al.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Al)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Td.fromBufferAttribute(i.attributes.skinIndex,e),Cd.fromBufferAttribute(i.attributes.skinWeight,e),Ad.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Cd.getComponent(r);if(o!==0){const a=Td.getComponent(r);Rd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(tM.copy(Ad).applyMatrix4(Rd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rc extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class us extends Jt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=fn,u=fn,d,h){super(null,o,a,c,l,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Id=new Ve,nM=new Ve;class Xo{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:nM;Id.multiplyMatrices(a,t[r]),Id.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new us(t,e,e,Zn,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Rc),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Br extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ar=new Ve,Ld=new Ve,Aa=[],Nd=new In,iM=new Ve,to=new Se,no=new bn;class Lm extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,iM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),Nd.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(Nd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ar),no.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(no)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),e.ray.intersectsSphere(no)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ar),Ld.multiplyMatrices(n,Ar),to.matrixWorld=Ld,to.raycast(e,Aa);for(let o=0,a=Aa.length;o<a;o++){const c=Aa[o];c.instanceId=r,c.object=this,t.push(c)}Aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new us(new Float32Array(i*this.count),i,this.count,Gu,ni));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function sM(s,e){return s.z-e.z}function rM(s,e){return e.z-s.z}class oM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const r=n[this.index];i.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}}const Tr="batchId",rs=new Ve,Dd=new Ve,aM=new Ve,Ud=new Ve,Tl=new Wo,Ta=new In,Es=new bn,io=new R,Cl=new oM,vn=new Se,Ca=[];function cM(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class Nm extends Se{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new st,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new us(t,e,e,Zn,ni);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const c=e.getAttribute(a),{array:l,itemSize:u,normalized:d}=c,h=new l.constructor(n*u),f=new At(h,u,d);t.setAttribute(a,f)}if(e.getIndex()!==null){const a=n>65536?new Uint32Array(r):new Uint16Array(r);t.setIndex(new At(a,1))}const o=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Tr,new At(o,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Tr))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Tr}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Tr)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,rs),this.getBoundingBoxAt(i,Ta).applyMatrix4(rs),t.union(Ta))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,rs),this.getBoundingSphereAt(i,Es).applyMatrix4(rs),t.union(Es))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const l=e.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const d=this._visibility,h=this._active,f=this._matricesTexture,p=this._matricesTexture.image.data;d.push(!0),h.push(!0);const _=this._geometryCount;this._geometryCount++,aM.toArray(p,_*16),f.needsUpdate=!0,o.push(i),a.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new In,sphereInitialized:!1,sphere:new bn});const g=this.geometry.getAttribute(Tr);for(let m=0;m<i.vertexCount;m++)g.setX(i.vertexStart+m,_);return g.needsUpdate=!0,this.setGeometryAt(_,e),_}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(i&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.vertexCount;for(const f in n.attributes){if(f===Tr)continue;const p=t.getAttribute(f),_=n.getAttribute(f);cM(p,_,c);const g=p.itemSize;for(let m=p.count,v=l;m<v;m++){const y=c+m;for(let b=0;b<g;b++)_.setComponent(y,b,0)}_.needsUpdate=!0,_.addUpdateRange(c*g,l*g)}if(i){const f=a.indexStart;for(let p=0;p<o.count;p++)r.setX(f+p,c+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)r.setX(f+p,c);r.needsUpdate=!0,r.addUpdateRange(f,a.indexCount)}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const d=this._drawRanges[e],h=t.getAttribute("position");return d.count=i?o.count:h.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],r=i.box,o=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const a=o.index,c=o.attributes.position,l=this._drawRanges[e];for(let u=l.start,d=l.start+l.count;u<d;u++){let h=u;a&&(h=a.getX(h)),r.expandByPoint(io.fromBufferAttribute(c,h))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],r=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Ta),Ta.getCenter(r.center);const a=o.index,c=o.attributes.position,l=this._drawRanges[e];let u=0;for(let d=l.start,h=l.start+l.count;d<h;d++){let f=d;a&&(f=a.getX(f)),io.fromBufferAttribute(c,f),u=Math.max(u,r.center.distanceToSquared(io))}r.radius=Math.sqrt(u),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return e>=r||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,r=this._geometryCount;return e>=r||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,r=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,c=this.geometry;vn.material=this.material,vn.geometry.index=c.index,vn.geometry.attributes=c.attributes,vn.geometry.boundingBox===null&&(vn.geometry.boundingBox=new In),vn.geometry.boundingSphere===null&&(vn.geometry.boundingSphere=new bn);for(let l=0;l<o;l++){if(!n[l]||!i[l])continue;const u=r[l];vn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,vn.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,vn.geometry.boundingBox),this.getBoundingSphereAt(l,vn.geometry.boundingSphere),vn.raycast(e,Ca);for(let d=0,h=Ca.length;d<h;d++){const f=Ca[d];f.object=this,f.batchId=l,t.push(f)}Ca.length=0}vn.material=null,vn.geometry.index=null,vn.geometry.attributes={},vn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._active,l=this._visibility,u=this._multiDrawStarts,d=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled;f&&(Ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Tl.setFromProjectionMatrix(Ud,e.coordinateSystem));let p=0;if(this.sortObjects){Dd.copy(this.matrixWorld).invert(),io.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Dd);for(let m=0,v=l.length;m<v;m++)if(l[m]&&c[m]){this.getMatrixAt(m,rs),this.getBoundingSphereAt(m,Es).applyMatrix4(rs);let y=!1;if(f&&(y=!Tl.intersectsSphere(Es)),!y){const b=io.distanceTo(Es.center);Cl.push(h[m],b)}}const _=Cl.list,g=this.customSort;g===null?_.sort(r.transparent?rM:sM):g.call(this,_,n);for(let m=0,v=_.length;m<v;m++){const y=_[m];u[p]=y.start*a,d[p]=y.count,p++}Cl.reset()}else for(let _=0,g=l.length;_<g;_++)if(l[_]&&c[_]){let m=!1;if(f&&(this.getMatrixAt(_,rs),this.getBoundingSphereAt(_,Es).applyMatrix4(rs),m=!Tl.intersectsSphere(Es)),!m){const v=h[_];u[p]=v.start*a,d[p]=v.count,p++}}this._multiDrawCount=p,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,o){this.onBeforeRender(e,null,i,r,o)}}class pn extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Od=new R,Fd=new R,kd=new Ve,Rl=new er,Ra=new bn;class mn extends pt{constructor(e=new st,t=new pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Od.fromBufferAttribute(t,i-1),Fd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Od.distanceTo(Fd);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;kd.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(kd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,u=new R,d=new R,h=new R,f=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let y=m,b=v-1;y<b;y+=f){const D=p.getX(y),T=p.getX(y+1);if(l.fromBufferAttribute(g,D),u.fromBufferAttribute(g,T),Rl.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||t.push({distance:F,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let y=m,b=v-1;y<b;y+=f){if(l.fromBufferAttribute(g,y),u.fromBufferAttribute(g,y+1),Rl.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Bd=new R,zd=new R;class fi extends mn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bd.fromBufferAttribute(t,i),zd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bd.distanceTo(zd);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dm extends mn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rh extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vd=new Ve,Su=new er,Pa=new bn,Ia=new R;class Um extends pt{constructor(e=new st,t=new rh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;Vd.copy(i).invert(),Su.copy(e.ray).applyMatrix4(Vd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=h,_=f;p<_;p++){const g=l.getX(p);Ia.fromBufferAttribute(d,g),Hd(Ia,g,c,i,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=h,_=f;p<_;p++)Ia.fromBufferAttribute(d,p),Hd(Ia,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hd(s,e,t,n,i,r,o){const a=Su.distanceSqToPoint(s);if(a<t){const c=new R;Su.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class lM extends Jt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:an,this.magFilter=r!==void 0?r:an,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class uM extends Jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=fn,this.minFilter=fn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Pc extends Jt{constructor(e,t,n,i,r,o,a,c,l,u,d,h){super(null,o,a,c,l,u,i,r,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class hM extends Pc{constructor(e,t,n,i,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=zn}}class dM extends Pc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Xi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class fM extends Jt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new re:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],o=[],a=new R,c=new Ve;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(jt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(jt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ic extends pi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Om extends Ic{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const La=new R,Pl=new oh,Il=new oh,Ll=new oh;class Fm extends pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(La.subVectors(i[0],i[1]).add(i[0]),l=La);const d=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(La.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=La),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Pl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,p,_,g),Il.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,p,_,g),Ll.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Il.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Ll.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Pl.calc(c),Il.calc(c),Ll.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gd(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function pM(s,e){const t=1-s;return t*t*e}function mM(s,e){return 2*(1-s)*s*e}function gM(s,e){return s*s*e}function po(s,e,t,n){return pM(s,e)+mM(s,t)+gM(s,n)}function _M(s,e){const t=1-s;return t*t*t*e}function yM(s,e){const t=1-s;return 3*t*t*s*e}function vM(s,e){return 3*(1-s)*s*s*e}function xM(s,e){return s*s*s*e}function mo(s,e,t,n,i){return _M(s,e)+yM(s,t)+vM(s,n)+xM(s,i)}class ah extends pi{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,i.x,r.x,o.x,a.x),mo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class km extends pi{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,i.x,r.x,o.x,a.x),mo(e,i.y,r.y,o.y,a.y),mo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ch extends pi{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bm extends pi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lh extends pi{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(po(e,i.x,r.x,o.x),po(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uh extends pi{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(po(e,i.x,r.x,o.x),po(e,i.y,r.y,o.y),po(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Gd(a,c.x,l.x,u.x,d.x),Gd(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new re().fromArray(i))}return this}}var ac=Object.freeze({__proto__:null,ArcCurve:Om,CatmullRomCurve3:Fm,CubicBezierCurve:ah,CubicBezierCurve3:km,EllipseCurve:Ic,LineCurve:ch,LineCurve3:Bm,QuadraticBezierCurve:lh,QuadraticBezierCurve3:uh,SplineCurve:hh});class zm extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ac[i.type]().fromJSON(i))}return this}}class Io extends zm{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ch(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new lh(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new ah(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new hh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Ic(e,t,n,i,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qo extends st{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=jt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,d=new R,h=new re,f=new R,p=new R,_=new R;let g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=t;v++){const y=n+v*u*i,b=Math.sin(y),D=Math.cos(y);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*b,d.y=e[T].y,d.z=e[T].x*D,o.push(d.x,d.y,d.z),h.x=v/t,h.y=T/(e.length-1),a.push(h.x,h.y);const L=c[3*T+0]*b,F=c[3*T+1],E=c[3*T+0]*D;l.push(L,F,E)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const b=y+v*e.length,D=b,T=b+e.length,L=b+e.length+1,F=b+1;r.push(D,T,F),r.push(L,F,T)}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("uv",new Ne(a,2)),this.setAttribute("normal",new Ne(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.points,e.segments,e.phiStart,e.phiLength)}}class Lc extends qo{constructor(e=1,t=1,n=4,i=8){const r=new Io;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Lc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Nc extends st{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,u=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(a,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rn extends st{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const _=[],g=n/2;let m=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ne(d,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(f,2));function v(){const b=new R,D=new R;let T=0;const L=(t-e)/n;for(let F=0;F<=r;F++){const E=[],S=F/r,U=S*(t-e)+e;for(let H=0;H<=i;H++){const k=H/i,W=k*c+a,Z=Math.sin(W),B=Math.cos(W);D.x=U*Z,D.y=-S*n+g,D.z=U*B,d.push(D.x,D.y,D.z),b.set(Z,L,B).normalize(),h.push(b.x,b.y,b.z),f.push(k,1-S),E.push(p++)}_.push(E)}for(let F=0;F<i;F++)for(let E=0;E<r;E++){const S=_[E][F],U=_[E+1][F],H=_[E+1][F+1],k=_[E][F+1];u.push(S,U,k),u.push(U,H,k),T+=6}l.addGroup(m,T,0),m+=T}function y(b){const D=p,T=new re,L=new R;let F=0;const E=b===!0?e:t,S=b===!0?1:-1;for(let H=1;H<=i;H++)d.push(0,g*S,0),h.push(0,S,0),f.push(.5,.5),p++;const U=p;for(let H=0;H<=i;H++){const W=H/i*c+a,Z=Math.cos(W),B=Math.sin(W);L.x=E*B,L.y=g*S,L.z=E*Z,d.push(L.x,L.y,L.z),h.push(0,S,0),T.x=Z*.5+.5,T.y=B*.5*S+.5,f.push(T.x,T.y),p++}for(let H=0;H<i;H++){const k=D+H,W=U+H;b===!0?u.push(W,W+1,k):u.push(W+1,W,k),F+=3}l.addGroup(m,F,b===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dc extends rn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Dc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ms extends st{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new R,b=new R,D=new R;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],b),f(t[T+2],D),c(y,b,D,v)}function c(v,y,b,D){const T=D+1,L=[];for(let F=0;F<=T;F++){L[F]=[];const E=v.clone().lerp(b,F/T),S=y.clone().lerp(b,F/T),U=T-F;for(let H=0;H<=U;H++)H===0&&F===T?L[F][H]=E:L[F][H]=E.clone().lerp(S,H/U)}for(let F=0;F<T;F++)for(let E=0;E<2*(T-F)-1;E++){const S=Math.floor(E/2);E%2===0?(h(L[F][S+1]),h(L[F+1][S]),h(L[F][S])):(h(L[F][S+1]),h(L[F+1][S+1]),h(L[F+1][S]))}}function l(v){const y=new R;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(v),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function u(){const v=new R;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const b=g(v)/2/Math.PI+.5,D=m(v)/Math.PI+.5;o.push(b,1-D)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){const y=o[v+0],b=o[v+2],D=o[v+4],T=Math.max(y,b,D),L=Math.min(y,b,D);T>.9&&L<.1&&(y<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),D<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,y){const b=v*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function p(){const v=new R,y=new R,b=new R,D=new R,T=new re,L=new re,F=new re;for(let E=0,S=0;E<r.length;E+=9,S+=6){v.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),T.set(o[S+0],o[S+1]),L.set(o[S+2],o[S+3]),F.set(o[S+4],o[S+5]),D.copy(v).add(y).add(b).divideScalar(3);const U=g(D);_(T,S+0,v,U),_(L,S+2,y,U),_(F,S+4,b,U)}}function _(v,y,b,D){D<0&&v.x===1&&(o[y]=v.x-1),b.x===0&&b.z===0&&(o[y]=D/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.vertices,e.indices,e.radius,e.details)}}class Uc extends ms{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uc(e.radius,e.detail)}}const Na=new R,Da=new R,Nl=new R,Ua=new Yn;class Vm extends st{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(qs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:g,c:m}=Ua;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Ua.getNormal(Nl),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const y=(v+1)%3,b=d[v],D=d[y],T=Ua[u[v]],L=Ua[u[y]],F=`${b}_${D}`,E=`${D}_${b}`;E in h&&h[E]?(Nl.dot(h[E].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(L.x,L.y,L.z)),h[E]=null):F in h||(h[F]={index0:l[v],index1:l[y],normal:Nl.clone()})}}for(const p in h)if(h[p]){const{index0:_,index1:g}=h[p];Na.fromBufferAttribute(a,_),Da.fromBufferAttribute(a,g),f.push(Na.x,Na.y,Na.z),f.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new Ne(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ys extends Io{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Io().fromJSON(i))}return this}}const bM={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Hm(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,d,h,f;if(n&&(r=AM(s,e,r,t)),s.length>80*t){a=l=s[0],c=u=s[1];for(let p=t;p<i;p+=t)d=s[p],h=s[p+1],d<a&&(a=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Lo(r,o,t,a,c,f,0),o}};function Hm(s,e,t,n,i){let r,o;if(i===FM(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Wd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Wd(r,s[r],s[r+1],o);return o&&Oc(o,o.next)&&(Do(o),o=o.next),o}function Js(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Oc(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Do(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&IM(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?SM(s,n,i,r):MM(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Do(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=wM(Js(s),e,t),Lo(s,e,t,n,i,r,2)):o===2&&EM(s,e,t,n,i,r):Lo(Js(s),e,t,n,i,r,1);break}}}function MM(s){const e=s.prev,t=s,n=s.next;if(Xt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,h=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Lr(i,a,r,c,o,l,p.x,p.y)&&Xt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function SM(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Xt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,d=r.y,h=o.y,f=a<c?a<l?a:l:c<l?c:l,p=u<d?u<h?u:h:d<h?d:h,_=a>c?a>l?a:l:c>l?c:l,g=u>d?u>h?u:h:d>h?d:h,m=wu(f,p,e,t,n),v=wu(_,g,e,t,n);let y=s.prevZ,b=s.nextZ;for(;y&&y.z>=m&&b&&b.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Lr(a,u,c,d,l,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Lr(a,u,c,d,l,h,b.x,b.y)&&Xt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Lr(a,u,c,d,l,h,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Lr(a,u,c,d,l,h,b.x,b.y)&&Xt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function wM(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Oc(i,r)&&Gm(i,n,n.next,r)&&No(i,r)&&No(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Do(n),Do(n.next),n=s=r),n=n.next}while(n!==s);return Js(n)}function EM(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&DM(o,a)){let c=Wm(o,a);o=Js(o,o.next),c=Js(c,c.next),Lo(o,e,t,n,i,r,0),Lo(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function AM(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Hm(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(NM(l));for(i.sort(TM),r=0;r<i.length;r++)t=CM(i[r],t);return t}function TM(s,e){return s.x-e.x}function CM(s,e){const t=RM(s,e);if(!t)return e;const n=Wm(t,s);return Js(n,n.next),Js(t,t.next)}function RM(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,i=t.x<t.next.x?t:t.next,h===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,d;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Lr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),No(t,s)&&(d<u||d===u&&(t.x>i.x||t.x===i.x&&PM(i,t)))&&(i=t,u=d)),t=t.next;while(t!==a);return i}function PM(s,e){return Xt(s.prev,s,e.prev)<0&&Xt(e.next,s,s.next)<0}function IM(s,e,t,n){let i=s;do i.z===0&&(i.z=wu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,LM(i)}function LM(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function wu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function NM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Lr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function DM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!UM(s,e)&&(No(s,e)&&No(e,s)&&OM(s,e)&&(Xt(s.prev,s,e.prev)||Xt(s,e.prev,e))||Oc(s,e)&&Xt(s.prev,s,s.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Oc(s,e){return s.x===e.x&&s.y===e.y}function Gm(s,e,t,n){const i=Fa(Xt(s,e,t)),r=Fa(Xt(s,e,n)),o=Fa(Xt(t,n,s)),a=Fa(Xt(t,n,e));return!!(i!==r&&o!==a||i===0&&Oa(s,t,e)||r===0&&Oa(s,n,e)||o===0&&Oa(t,s,n)||a===0&&Oa(t,e,n))}function Oa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Fa(s){return s>0?1:s<0?-1:0}function UM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Gm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function No(s,e){return Xt(s.prev,s,s.next)<0?Xt(s,e,s.next)>=0&&Xt(s,s.prev,e)>=0:Xt(s,e,s.prev)<0||Xt(s,s.next,e)<0}function OM(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Wm(s,e){const t=new Eu(s.i,s.x,s.y),n=new Eu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wd(s,e,t,n){const i=new Eu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Do(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Eu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function FM(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Si{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Si.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Xd(e),qd(n,e);let o=e.length;t.forEach(Xd);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,qd(n,t[c]);const a=bM.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Xd(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function qd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Fc extends st{constructor(e=new Ys([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ne(i,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:kM;let y,b=!1,D,T,L,F;m&&(y=m.getSpacedPoints(u),b=!0,h=!1,D=m.computeFrenetFrames(u,!1),T=new R,L=new R,F=new R),h||(g=0,f=0,p=0,_=0);const E=a.extractPoints(l);let S=E.shape;const U=E.holes;if(!Si.isClockWise(S)){S=S.reverse();for(let de=0,he=U.length;de<he;de++){const ve=U[de];Si.isClockWise(ve)&&(U[de]=ve.reverse())}}const k=Si.triangulateShape(S,U),W=S;for(let de=0,he=U.length;de<he;de++){const ve=U[de];S=S.concat(ve)}function Z(de,he,ve){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(he,ve)}const B=S.length,G=k.length;function z(de,he,ve){let _e,ye,O;const A=de.x-he.x,Y=de.y-he.y,se=ve.x-de.x,ce=ve.y-de.y,pe=A*A+Y*Y,Ze=A*ce-Y*se;if(Math.abs(Ze)>Number.EPSILON){const me=Math.sqrt(pe),Ge=Math.sqrt(se*se+ce*ce),Je=he.x-Y/me,xe=he.y+A/me,Ue=ve.x-ce/Ge,et=ve.y+se/Ge,ke=((Ue-Je)*ce-(et-xe)*se)/(A*ce-Y*se);_e=Je+A*ke-de.x,ye=xe+Y*ke-de.y;const Be=_e*_e+ye*ye;if(Be<=2)return new re(_e,ye);O=Math.sqrt(Be/2)}else{let me=!1;A>Number.EPSILON?se>Number.EPSILON&&(me=!0):A<-Number.EPSILON?se<-Number.EPSILON&&(me=!0):Math.sign(Y)===Math.sign(ce)&&(me=!0),me?(_e=-Y,ye=A,O=Math.sqrt(pe)):(_e=A,ye=Y,O=Math.sqrt(pe/2))}return new re(_e/O,ye/O)}const K=[];for(let de=0,he=W.length,ve=he-1,_e=de+1;de<he;de++,ve++,_e++)ve===he&&(ve=0),_e===he&&(_e=0),K[de]=z(W[de],W[ve],W[_e]);const oe=[];let fe,Ae=K.concat();for(let de=0,he=U.length;de<he;de++){const ve=U[de];fe=[];for(let _e=0,ye=ve.length,O=ye-1,A=_e+1;_e<ye;_e++,O++,A++)O===ye&&(O=0),A===ye&&(A=0),fe[_e]=z(ve[_e],ve[O],ve[A]);oe.push(fe),Ae=Ae.concat(fe)}for(let de=0;de<g;de++){const he=de/g,ve=f*Math.cos(he*Math.PI/2),_e=p*Math.sin(he*Math.PI/2)+_;for(let ye=0,O=W.length;ye<O;ye++){const A=Z(W[ye],K[ye],_e);ne(A.x,A.y,-ve)}for(let ye=0,O=U.length;ye<O;ye++){const A=U[ye];fe=oe[ye];for(let Y=0,se=A.length;Y<se;Y++){const ce=Z(A[Y],fe[Y],_e);ne(ce.x,ce.y,-ve)}}}const Ee=p+_;for(let de=0;de<B;de++){const he=h?Z(S[de],Ae[de],Ee):S[de];b?(L.copy(D.normals[0]).multiplyScalar(he.x),T.copy(D.binormals[0]).multiplyScalar(he.y),F.copy(y[0]).add(L).add(T),ne(F.x,F.y,F.z)):ne(he.x,he.y,0)}for(let de=1;de<=u;de++)for(let he=0;he<B;he++){const ve=h?Z(S[he],Ae[he],Ee):S[he];b?(L.copy(D.normals[de]).multiplyScalar(ve.x),T.copy(D.binormals[de]).multiplyScalar(ve.y),F.copy(y[de]).add(L).add(T),ne(F.x,F.y,F.z)):ne(ve.x,ve.y,d/u*de)}for(let de=g-1;de>=0;de--){const he=de/g,ve=f*Math.cos(he*Math.PI/2),_e=p*Math.sin(he*Math.PI/2)+_;for(let ye=0,O=W.length;ye<O;ye++){const A=Z(W[ye],K[ye],_e);ne(A.x,A.y,d+ve)}for(let ye=0,O=U.length;ye<O;ye++){const A=U[ye];fe=oe[ye];for(let Y=0,se=A.length;Y<se;Y++){const ce=Z(A[Y],fe[Y],_e);b?ne(ce.x,ce.y+y[u-1].y,y[u-1].x+ve):ne(ce.x,ce.y,d+ve)}}}V(),ee();function V(){const de=i.length/3;if(h){let he=0,ve=B*he;for(let _e=0;_e<G;_e++){const ye=k[_e];Te(ye[2]+ve,ye[1]+ve,ye[0]+ve)}he=u+g*2,ve=B*he;for(let _e=0;_e<G;_e++){const ye=k[_e];Te(ye[0]+ve,ye[1]+ve,ye[2]+ve)}}else{for(let he=0;he<G;he++){const ve=k[he];Te(ve[2],ve[1],ve[0])}for(let he=0;he<G;he++){const ve=k[he];Te(ve[0]+B*u,ve[1]+B*u,ve[2]+B*u)}}n.addGroup(de,i.length/3-de,0)}function ee(){const de=i.length/3;let he=0;ie(W,he),he+=W.length;for(let ve=0,_e=U.length;ve<_e;ve++){const ye=U[ve];ie(ye,he),he+=ye.length}n.addGroup(de,i.length/3-de,1)}function ie(de,he){let ve=de.length;for(;--ve>=0;){const _e=ve;let ye=ve-1;ye<0&&(ye=de.length-1);for(let O=0,A=u+g*2;O<A;O++){const Y=B*O,se=B*(O+1),ce=he+_e+Y,pe=he+ye+Y,Ze=he+ye+se,me=he+_e+se;ue(ce,pe,Ze,me)}}}function ne(de,he,ve){c.push(de),c.push(he),c.push(ve)}function Te(de,he,ve){De(de),De(he),De(ve);const _e=i.length/3,ye=v.generateTopUV(n,i,_e-3,_e-2,_e-1);q(ye[0]),q(ye[1]),q(ye[2])}function ue(de,he,ve,_e){De(de),De(he),De(_e),De(he),De(ve),De(_e);const ye=i.length/3,O=v.generateSideWallUV(n,i,ye-6,ye-3,ye-2,ye-1);q(O[0]),q(O[1]),q(O[3]),q(O[1]),q(O[2]),q(O[3])}function De(de){i.push(c[de*3+0]),i.push(c[de*3+1]),i.push(c[de*3+2])}function q(de){r.push(de.x),r.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return BM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ac[i.type]().fromJSON(i)),new Fc(n,e.options)}}const kM={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new re(r,o),new re(a,c),new re(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-d),new re(h,1-p),new re(_,1-m)]:[new re(a,1-c),new re(u,1-d),new re(f,1-p),new re(g,1-m)]}};function BM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class kc extends ms{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kc(e.radius,e.detail)}}class zi extends ms{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zi(e.radius,e.detail)}}class Bc extends st{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let d=e;const h=(t-e)/i,f=new R,p=new re;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,y=v,b=v+n+1,D=v+n+2,T=v+1;a.push(y,b,T),a.push(b,D,T)}}this.setIndex(a),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zc extends st{constructor(e=new Ys([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ne(i,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(o,2));function l(u){const d=i.length/3,h=u.extractPoints(t);let f=h.shape;const p=h.holes;Si.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];Si.isClockWise(v)===!0&&(p[g]=v.reverse())}const _=Si.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){const v=f[g];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){const v=_[g],y=v[0]+d,b=v[1]+d,D=v[2]+d;n.push(y,b,D),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return zM(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new zc(n,e.curveSegments)}}function zM(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Wr extends st{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new R,h=new R,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],y=m/n;let b=0;m===0&&o===0?b=.5/t:m===n&&c===Math.PI&&(b=-.5/t);for(let D=0;D<=t;D++){const T=D/t;d.x=-e*Math.cos(i+T*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(i+T*r)*Math.sin(o+y*a),p.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(T+b,1-y),v.push(l++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const y=u[m][v+1],b=u[m][v],D=u[m+1][v],T=u[m+1][v+1];(m!==0||o>0)&&f.push(y,b,T),(m!==n-1||c<Math.PI)&&f.push(b,D,T)}this.setIndex(f),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vc extends ms{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vc(e.radius,e.detail)}}class Fi extends st{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new R,d=new R,h=new R;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const _=p/i*r,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const _=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,v=(i+1)*f+p;o.push(_,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Hc extends st{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],d=new R,h=new R,f=new R,p=new R,_=new R,g=new R,m=new R;for(let y=0;y<=n;++y){const b=y/n*r*Math.PI*2;v(b,r,o,e,f),v(b+.01,r,o,e,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let D=0;D<=i;++D){const T=D/i*Math.PI*2,L=-t*Math.cos(T),F=t*Math.sin(T);d.x=f.x+(L*m.x+F*_.x),d.y=f.y+(L*m.y+F*_.y),d.z=f.z+(L*m.z+F*_.z),c.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),u.push(y/n),u.push(D/i)}}for(let y=1;y<=n;y++)for(let b=1;b<=i;b++){const D=(i+1)*(y-1)+(b-1),T=(i+1)*y+(b-1),L=(i+1)*y+b,F=(i+1)*(y-1)+b;a.push(D,T,F),a.push(T,L,F)}this.setIndex(a),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(u,2));function v(y,b,D,T,L){const F=Math.cos(y),E=Math.sin(y),S=D/b*y,U=Math.cos(S);L.x=T*(2+U)*.5*F,L.y=T*(2+U)*E*.5,L.z=T*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Gc extends st{constructor(e=new uh(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new re;let u=new R;const d=[],h=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ne(d,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(f,2));function _(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),v(),m()}function g(y){u=e.getPointAt(y/t,u);const b=o.normals[y],D=o.binormals[y];for(let T=0;T<=i;T++){const L=T/i*Math.PI*2,F=Math.sin(L),E=-Math.cos(L);c.x=E*b.x+F*D.x,c.y=E*b.y+F*D.y,c.z=E*b.z+F*D.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let b=1;b<=i;b++){const D=(i+1)*(y-1)+(b-1),T=(i+1)*y+(b-1),L=(i+1)*y+b,F=(i+1)*(y-1)+b;p.push(D,T,F),p.push(T,L,F)}}function v(){for(let y=0;y<=t;y++)for(let b=0;b<=i;b++)l.x=y/t,l.y=b/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gc(new ac[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Xm extends st{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new R,r=new R;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const d=c[l],h=d.start,f=d.count;for(let p=h,_=h+f;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),v=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,v),Yd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,d=3*a+(l+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),Yd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Yd(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Zd=Object.freeze({__proto__:null,BoxGeometry:Zt,CapsuleGeometry:Lc,CircleGeometry:Nc,ConeGeometry:Dc,CylinderGeometry:rn,DodecahedronGeometry:Uc,EdgesGeometry:Vm,ExtrudeGeometry:Fc,IcosahedronGeometry:kc,LatheGeometry:qo,OctahedronGeometry:zi,PlaneGeometry:ps,PolyhedronGeometry:ms,RingGeometry:Bc,ShapeGeometry:zc,SphereGeometry:Wr,TetrahedronGeometry:Vc,TorusGeometry:Fi,TorusKnotGeometry:Hc,TubeGeometry:Gc,WireframeGeometry:Xm});class qm extends Mn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ym extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dh extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zm extends dh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cc extends Mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jm extends Mn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Jm extends Mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class fh extends Mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Km extends Mn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $m extends pn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Gs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Qm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function eg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Au(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function ph(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function VM(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),d=[],h=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(!(p<t||p>=n)){d.push(l.times[f]);for(let _=0;_<u;++_)h.push(l.values[f*u+_])}}d.length!==0&&(l.times=Gs(d,l.times.constructor),l.values=Gs(h,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function HM(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let u=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const p=a.times.length-1;let _;if(r<=a.times[0]){const m=u,v=d-u;_=a.values.slice(m,v)}else if(r>=a.times[p]){const m=p*d+u,v=m+d-u;_=a.values.slice(m,v)}else{const m=a.createInterpolant(),v=u,y=d-u;m.evaluate(r),_=m.resultBuffer.slice(v,y)}c==="quaternion"&&new It().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let m=0;m<g;++m){const v=m*f+h;if(c==="quaternion")It.multiplyQuaternionsFlat(l.values,v,_,0,l.values,v);else{const y=f-h*2;for(let b=0;b<y;++b)l.values[v+b]-=_[b]}}}return s.blendMode=Zu,s}const GM={convertArray:Gs,isTypedArray:Qm,getKeyframeOrder:eg,sortedArray:Au,flattenJSON:ph,subclip:VM,makeClipAdditive:HM};class Yo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tg extends Yo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zs,endingEnd:zs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vs:r=e,a=2*t-n;break;case wo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vs:o=e,c=2*n-t;break;case wo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-h*g+2*h*_-h*p,v=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*p+1,y=(-1-f)*g+(1.5+f)*_+.5*p,b=f*g-f*_;for(let D=0;D!==a;++D)r[D]=m*o[u+D]+v*o[l+D]+y*o[c+D]+b*o[d+D];return r}}class mh extends Yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*d+o[c+h]*u;return r}}class ng extends Yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gs(t,this.TimeBufferType),this.values=Gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gs(e.times,Array),values:Gs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Qm(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===nc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const _=t[d+p];if(_!==t[h+p]||_!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=So;class tr extends mi{}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Mo;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class gh extends mi{}gh.prototype.ValueTypeName="color";class Uo extends mi{}Uo.prototype.ValueTypeName="number";class ig extends Yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)It.slerpFlat(r,0,o,l-a,o,l,c);return r}}class nr extends mi{InterpolantFactoryMethodLinear(e){return new ig(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.DefaultInterpolation=So;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends mi{}ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Mo;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends mi{}Ks.prototype.ValueTypeName="vector";class $s{constructor(e="",t=-1,n=[],i=yc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(XM(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(mi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=eg(c);c=Au(c,1,u),l=Au(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Uo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,p,_){if(f.length!==0){const g=[],m=[];ph(f,g,m,p),g.length!==0&&_.push(new d(h,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let _=0;_<h[p].morphTargets.length;_++)f[h[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let v=0;v!==h[p].morphTargets.length;++v){const y=h[p];g.push(y.time),m.push(y.morphTarget===_?1:0)}i.push(new Uo(".morphTargetInfluence["+_+"]",g,m))}c=f.length*o}else{const f=".bones["+t[d].name+"]";n(Ks,f+".position",h,"pos",i),n(nr,f+".quaternion",h,"rot",i),n(Ks,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function WM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Uo;case"vector":case"vector2":case"vector3":case"vector4":return Ks;case"color":return gh;case"quaternion":return nr;case"bool":case"boolean":return tr;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function XM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=WM(s.type);if(s.times===void 0){const t=[],n=[];ph(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _h{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const sg=new _h;class gn{constructor(e){this.manager=e!==void 0?e:sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class qM extends Error{constructor(e,t){super(e),this.response=t}}class di extends gn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:i});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ni[e],d=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=h?parseInt(h):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){d.read().then(({done:y,value:b})=>{if(y)m.close();else{_+=b.byteLength;const D=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,L=u.length;T<L;T++){const F=u[T];F.onProgress&&F.onProgress(D)}m.enqueue(b),v()}})}}});return new Response(g)}else throw new qM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Vi.add(e,l);const u=Ni[e];delete Ni[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ni[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class YM extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new di(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=$s.parse(e[n]);t.push(i)}return t}}class ZM extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=[],a=new Pc,c=new di(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function u(d){c.load(e[d],function(h){const f=r.parse(h,!0);o[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=an),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else c.load(e,function(d){const h=r.parse(d,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let _=0;_<h.mipmapCount;_++)o[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+_]),o[p].format=h.format,o[p].width=h.width,o[p].height=h.height}a.image=o}else a.image.width=h.width,a.image.height=h.height,a.mipmaps=h.mipmaps;h.mipmapCount===1&&(a.minFilter=an),a.format=h.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class Oo extends gn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Po("img");function c(){u(),Vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class jM extends gn{constructor(e){super(e)}load(e,t,n,i){const r=new Go;r.colorSpace=Cn;const o=new Oo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){r.images[l]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class rg extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new us,a=new di(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:zn,o.wrapT=l.wrapT!==void 0?l.wrapT:zn,o.magFilter=l.magFilter!==void 0?l.magFilter:an,o.minFilter=l.minFilter!==void 0?l.minFilter:an,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=hi),l.mipmapCount===1&&(o.minFilter=an),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class og extends gn{constructor(e){super(e)}load(e,t,n,i){const r=new Jt,o=new Oo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class gs extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class ag extends gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Dl=new Ve,jd=new R,Jd=new R;class yh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(jd),Jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jd),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JM extends yh{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vh extends gs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new JM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Kd=new Ve,so=new R,Ul=new R;class KM extends yh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),so.setFromMatrixPosition(e.matrixWorld),n.position.copy(so),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),i.makeTranslation(-so.x,-so.y,-so.z),Kd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd)}}class xh extends gs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new KM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $M extends yh{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bh extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new $M}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mh extends gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cg extends gs{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class lg{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class ug extends gs{constructor(e=new lg,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Wc extends gn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,o=new di(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=Wc.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Re().setHex(o.value);break;case"v2":i.uniforms[r].value=new re().fromArray(o.value);break;case"v3":i.uniforms[r].value=new R().fromArray(o.value);break;case"v4":i.uniforms[r].value=new Pt().fromArray(o.value);break;case"m3":i.uniforms[r].value=new at().fromArray(o.value);break;case"m4":i.uniforms[r].value=new Ve().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new re().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:qm,SpriteMaterial:ih,RawShaderMaterial:Ym,ShaderMaterial:$n,PointsMaterial:rh,MeshPhysicalMaterial:Zm,MeshStandardMaterial:dh,MeshPhongMaterial:cc,MeshToonMaterial:jm,MeshNormalMaterial:Jm,MeshLambertMaterial:fh,MeshDepthMaterial:wc,MeshDistanceMaterial:nh,MeshBasicMaterial:Kn,MeshMatcapMaterial:Km,LineDashedMaterial:$m,LineBasicMaterial:pn,Material:Mn};return new t[e]}}class lc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hg extends st{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class dg extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new di(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),v=Pr(g.type,m),y=new Cc(v,g.stride);return y.uuid=g.uuid,t[p]=y,y}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=e.isInstancedBufferGeometry?new hg:new st,a=e.data.index;if(a!==void 0){const f=Pr(a.type,a.array);o.setIndex(new At(f,1))}const c=e.data.attributes;for(const f in c){const p=c[f];let _;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);_=new js(g,p.itemSize,p.offset,p.normalized)}else{const g=Pr(p.type,p.array),m=p.isInstancedBufferAttribute?Br:At;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(f,_)}const l=e.data.morphAttributes;if(l)for(const f in l){const p=l[f],_=[];for(let g=0,m=p.length;g<m;g++){const v=p[g];let y;if(v.isInterleavedBufferAttribute){const b=i(e.data,v.data);y=new js(b,v.itemSize,v.offset,v.normalized)}else{const b=Pr(v.type,v.array);y=new At(b,v.itemSize,v.normalized)}v.name!==void 0&&(y.name=v.name),_.push(y)}o.morphAttributes[f]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const _=d[f];o.addGroup(_.start,_.count,_.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const f=new R;h.center!==void 0&&f.fromArray(h.center),o.boundingSphere=new bn(f,h.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class QM extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?lc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new di(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(d){i!==void 0&&i(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?lc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new di(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,c,a,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let d=!1;for(const h in o)if(o[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Ys().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new Xo().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new dg;for(let r=0,o=e.length;r<o;r++){let a;const c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in Zd?a=Zd[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Wc;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=$s.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:Pr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new _h(t);r=new Oo(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const d=e[l],h=d.url;if(Array.isArray(h)){const f=[];for(let p=0,_=h.length;p<_;p++){const g=h[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new us(m.data,m.width,m.height)))}i[d.uuid]=new Hs(f)}else{const f=a(d.url);i[d.uuid]=new Hs(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:Pr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new Oo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new us(p.data,p.width,p.height)))}n[c.uuid]=new Hs(u)}else{const u=await r(c.url);n[c.uuid]=new Hs(u)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let u;Array.isArray(l)?(u=new Go,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new us:u=new Jt,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,eS)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],$d),u.wrapT=n(a.wrap[1],$d)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Qd)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Qd)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,r){let o;function a(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function c(h){if(h!==void 0){if(Array.isArray(h)){const f=[];for(let p=0,_=h.length;p<_;p++){const g=h[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}function l(h){return i[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),i[h]}let u,d;switch(e.type){case"Scene":o=new Tc,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Re(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Ac(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Ec(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new on(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Hr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Mh(e.color,e.intensity);break;case"DirectionalLight":o=new bh(e.color,e.intensity);break;case"PointLight":o=new xh(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new cg(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new vh(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new ag(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new ug().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),d=c(e.material),o=new sh(u,d),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),d=c(e.material),o=new Se(u,d);break;case"InstancedMesh":u=a(e.geometry),d=c(e.material);const h=e.count,f=e.instanceMatrix,p=e.instanceColor;o=new Lm(u,d,h),o.instanceMatrix=new Br(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new Br(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=a(e.geometry),d=c(e.material),o=new Nm(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,d),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{const g=new In;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new bn;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),o._maxGeometryCount=e.maxGeometryCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=l(e.matricesTexture.uuid);break;case"LOD":o=new Im;break;case"Line":o=new mn(a(e.geometry),c(e.material));break;case"LineLoop":o=new Dm(a(e.geometry),c(e.material));break;case"LineSegments":o=new fi(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new Um(a(e.geometry),c(e.material));break;case"Sprite":o=new Pm(c(e.material));break;case"Group":o=new Bi;break;case"Bone":o=new Rc;break;default:o=new pt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let f=0;f<h.length;f++)o.add(this.parseObject(h[f],t,n,i,r))}if(e.animations!==void 0){const h=e.animations;for(let f=0;f<h.length;f++){const p=h[f];o.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const h=e.levels;for(let f=0;f<h.length;f++){const p=h[f],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const eS={UVMapping:_c,CubeReflectionMapping:Xi,CubeRefractionMapping:ds,EquirectangularReflectionMapping:yo,EquirectangularRefractionMapping:vo,CubeUVReflectionMapping:zr},$d={RepeatWrapping:ki,ClampToEdgeWrapping:zn,MirroredRepeatWrapping:xo},Qd={NearestFilter:fn,NearestMipmapNearestFilter:ku,NearestMipmapLinearFilter:Rr,LinearFilter:an,LinearMipmapNearestFilter:ho,LinearMipmapLinearFilter:hi};class tS extends gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Vi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(e,c),r.manager.itemStart(e)}}let ka;class Sh{static getContext(){return ka===void 0&&(ka=new(window.AudioContext||window.webkitAudioContext)),ka}static setContext(e){ka=e}}class nS extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new di(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);Sh.getContext().decodeAudioData(l,function(d){t(d)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(e)}}}const ef=new Ve,tf=new Ve,As=new Ve;class iS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new on,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new on,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,As.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,o=t.near*Math.tan(qs*t.fov*.5)/t.zoom;let a,c;tf.elements[12]=-i,ef.elements[12]=i,a=-o*t.aspect+r,c=o*t.aspect+r,As.elements[0]=2*t.near/(c-a),As.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(As),a=-o*t.aspect-r,c=o*t.aspect-r,As.elements[0]=2*t.near/(c-a),As.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(As)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(tf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ef)}}class fg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nf(){return(typeof performance>"u"?Date:performance).now()}const Ts=new R,sf=new It,sS=new R,Cs=new R;class rS extends pt{constructor(){super(),this.type="AudioListener",this.context=Sh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new fg}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ts,sf,sS),Cs.set(0,0,-1).applyQuaternion(sf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ts.x,i),t.positionY.linearRampToValueAtTime(Ts.y,i),t.positionZ.linearRampToValueAtTime(Ts.z,i),t.forwardX.linearRampToValueAtTime(Cs.x,i),t.forwardY.linearRampToValueAtTime(Cs.y,i),t.forwardZ.linearRampToValueAtTime(Cs.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Ts.x,Ts.y,Ts.z),t.setOrientation(Cs.x,Cs.y,Cs.z,n.x,n.y,n.z)}}class pg extends pt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Rs=new R,rf=new It,oS=new R,Ps=new R;class aS extends pg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Rs,rf,oS),Ps.set(0,0,1).applyQuaternion(rf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Rs.x,n),t.positionY.linearRampToValueAtTime(Rs.y,n),t.positionZ.linearRampToValueAtTime(Rs.z,n),t.orientationX.linearRampToValueAtTime(Ps.x,n),t.orientationY.linearRampToValueAtTime(Ps.y,n),t.orientationZ.linearRampToValueAtTime(Ps.z,n)}else t.setPosition(Rs.x,Rs.y,Rs.z),t.setOrientation(Ps.x,Ps.y,Ps.z)}}class cS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class mg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){It.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;It.multiplyQuaternionsFlat(e,o,e,t,e,n),It.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const wh="\\[\\]\\.:\\/",lS=new RegExp("["+wh+"]","g"),Eh="[^"+wh+"]",uS="[^"+wh.replace("\\.","")+"]",hS=/((?:WC+[\/:])*)/.source.replace("WC",Eh),dS=/(WCOD+)?/.source.replace("WCOD",uS),fS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),pS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),mS=new RegExp("^"+hS+dS+fS+pS+"$"),gS=["material","materials","bones","map"];class _S{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lS,"")}static parseTrackName(e){const t=mS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);gS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=_S;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yS{constructor(){this.isAnimationObjectGroup=!0,this.uuid=jn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,c=e.length,l=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const h=arguments[u],f=h.uuid;let p=t[f];if(p===void 0){p=c++,t[f]=p,e.push(h);for(let _=0,g=o;_!==g;++_)r[_].push(new bt(h,n[_],i[_]))}else if(p<l){a=e[p];const _=--l,g=e[_];t[g.uuid]=p,e[p]=g,t[f]=_,e[_]=h;for(let m=0,v=o;m!==v;++m){const y=r[m],b=y[_];let D=y[p];y[p]=b,D===void 0&&(D=new bt(h,n[m],i[m])),y[_]=D}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=r){const d=r++,h=e[d];t[h.uuid]=u,e[u]=h,t[l]=d,e[d]=c;for(let f=0,p=i;f!==p;++f){const _=n[f],g=_[d],m=_[u];_[u]=g,_[d]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<r){const h=--r,f=e[h],p=--o,_=e[p];t[f.uuid]=d,e[d]=f,t[_.uuid]=h,e[h]=_,e.pop();for(let g=0,m=i;g!==m;++g){const v=n[g],y=v[h],b=v[p];v[d]=y,v[h]=b,v.pop()}}else{const h=--o,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[d]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,d=new Array(l);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(d);for(let h=u,f=c.length;h!==f;++h){const p=c[h];d[h]=new bt(p,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class gg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:zs,endingEnd:zs};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=$p,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Zu:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case yc:default:for(let u=0,d=c.length;u!==d;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Qp;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Kp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Vs,i.endingEnd=Vs):(e?i.endingStart=this.zeroSlopeAtStart?Vs:zs:i.endingStart=wo,t?i.endingEnd=this.zeroSlopeAtEnd?Vs:zs:i.endingEnd=wo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const vS=new Float32Array(1);class xS extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let d=0;d!==r;++d){const h=i[d],f=h.name;let p=u[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;p=new mg(bt.create(n,f,_),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new mh(new Float32Array(2),new Float32Array(2),1,vS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?$s.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=yc),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new gg(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?$s.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ah{constructor(e){this.value=e}clone(){return new Ah(this.value.clone===void 0?this.value:this.value.clone())}}let bS=0;class MS extends Ei{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:bS++}),this.name="",this.usage=Co,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class SS extends Cc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class wS{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const of=new Ve;class Th{constructor(e,t,n=0,i=1/0){this.ray=new er(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return of.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(e,t=!0,n=[]){return Tu(e,this,n,t),n.sort(af),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Tu(e[i],this,n,t);return n.sort(af),n}}function af(s,e){return s.distance-e.distance}function Tu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Tu(i[r],e,t,!0)}}class Cu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ES{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const cf=new re;class AS{constructor(e=new re(1/0,1/0),t=new re(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const lf=new R,Ba=new R;class TS{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){lf.subVectors(e,this.start),Ba.subVectors(this.end,this.start);const n=Ba.dot(Ba);let r=Ba.dot(lf)/n;return t&&(r=jt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const uf=new R;class CS extends pt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new st,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ne(i,3));const r=new pn({fog:!1,toneMapped:!1});this.cone=new fi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),uf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(uf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const os=new R,za=new Ve,Ol=new Ve;class RS extends fi{constructor(e){const t=_g(e),n=new st,i=[],r=[],o=new Re(0,0,1),a=new Re(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Ne(i,3)),n.setAttribute("color",new Ne(r,3));const c=new pn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ol.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(za.multiplyMatrices(Ol,a.matrixWorld),os.setFromMatrixPosition(za),i.setXYZ(o,os.x,os.y,os.z),za.multiplyMatrices(Ol,a.parent.matrixWorld),os.setFromMatrixPosition(za),i.setXYZ(o+1,os.x,os.y,os.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function _g(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,_g(s.children[t]));return e}class PS extends Se{constructor(e,t,n){const i=new Wr(t,4,2),r=new Kn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const IS=new R,hf=new Re,df=new Re;class LS extends pt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new zi(t);i.rotateY(Math.PI*.5),this.material=new Kn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new At(o,3)),this.add(new Se(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");hf.copy(this.light.color),df.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?hf:df;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(IS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class yg extends fi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Re(n),i=new Re(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let h=0,f=0,p=-a;h<=t;h++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const _=h===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new st;u.setAttribute("position",new Ne(c,3)),u.setAttribute("color",new Ne(l,3));const d=new pn({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class NS extends fi{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new Re(r),o=new Re(o);const a=[],c=[];if(t>1)for(let d=0;d<t;d++){const h=d/t*(Math.PI*2),f=Math.sin(h)*e,p=Math.cos(h)*e;a.push(0,0,0),a.push(f,0,p);const _=d&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const h=d&1?r:o,f=e-e/n*d;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;a.push(g,0,m),c.push(h.r,h.g,h.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,a.push(g,0,m),c.push(h.r,h.g,h.b)}}const l=new st;l.setAttribute("position",new Ne(a,3)),l.setAttribute("color",new Ne(c,3));const u=new pn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const ff=new R,Va=new R,pf=new R;class DS extends pt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new st;i.setAttribute("position",new Ne([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new pn({fog:!1,toneMapped:!1});this.lightPlane=new mn(i,r),this.add(this.lightPlane),i=new st,i.setAttribute("position",new Ne([0,0,0,0,0,1],3)),this.targetLine=new mn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),ff.setFromMatrixPosition(this.light.matrixWorld),Va.setFromMatrixPosition(this.light.target.matrixWorld),pf.subVectors(Va,ff),this.lightPlane.lookAt(Va),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Va),this.targetLine.scale.z=pf.length()}}const Ha=new R,Yt=new Mc;class US extends fi{constructor(e){const t=new st,n=new pn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new Ne(i,3)),t.setAttribute("color",new Ne(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Re(16755200),u=new Re(16711680),d=new Re(43775),h=new Re(16777215),f=new Re(3355443);this.setColors(l,u,d,h,f)}setColors(e,t,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Yt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Qt("c",t,e,Yt,0,0,-1),Qt("t",t,e,Yt,0,0,1),Qt("n1",t,e,Yt,-n,-i,-1),Qt("n2",t,e,Yt,n,-i,-1),Qt("n3",t,e,Yt,-n,i,-1),Qt("n4",t,e,Yt,n,i,-1),Qt("f1",t,e,Yt,-n,-i,1),Qt("f2",t,e,Yt,n,-i,1),Qt("f3",t,e,Yt,-n,i,1),Qt("f4",t,e,Yt,n,i,1),Qt("u1",t,e,Yt,n*.7,i*1.1,-1),Qt("u2",t,e,Yt,-n*.7,i*1.1,-1),Qt("u3",t,e,Yt,0,i*2,-1),Qt("cf1",t,e,Yt,-n,0,1),Qt("cf2",t,e,Yt,n,0,1),Qt("cf3",t,e,Yt,0,-i,1),Qt("cf4",t,e,Yt,0,i,1),Qt("cn1",t,e,Yt,-n,0,-1),Qt("cn2",t,e,Yt,n,0,-1),Qt("cn3",t,e,Yt,0,-i,-1),Qt("cn4",t,e,Yt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qt(s,e,t,n,i,r,o){Ha.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Ha.x,Ha.y,Ha.z)}}const Ga=new In;class OS extends fi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new st;r.setIndex(new At(n,1)),r.setAttribute("position",new At(i,3)),super(r,new pn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ga.setFromObject(this.object),Ga.isEmpty())return;const t=Ga.min,n=Ga.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class FS extends fi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new st;r.setIndex(new At(n,1)),r.setAttribute("position",new Ne(i,3)),super(r,new pn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class kS extends mn{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new st;o.setAttribute("position",new Ne(r,3)),o.computeBoundingSphere(),super(o,new pn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new st;c.setAttribute("position",new Ne(a,3)),c.computeBoundingSphere(),this.add(new Se(c,new Kn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const mf=new R;let Wa,Fl;class BS extends pt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Wa===void 0&&(Wa=new st,Wa.setAttribute("position",new Ne([0,0,0,0,1,0],3)),Fl=new rn(0,.5,1,5,1),Fl.translate(0,-.5,0)),this.position.copy(t),this.line=new mn(Wa,new pn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Se(Fl,new Kn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{mf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(mf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class zS extends fi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new st;i.setAttribute("position",new Ne(t,3)),i.setAttribute("color",new Ne(n,3));const r=new pn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Re,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class VS{constructor(){this.type="ShapePath",this.color=new Re,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Io,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const v=[];for(let y=0,b=m.length;y<b;y++){const D=m[y],T=new Ys;T.curves=D.curves,v.push(T)}return v}function n(m,v){const y=v.length;let b=!1;for(let D=y-1,T=0;T<y;D=T++){let L=v[D],F=v[T],E=F.x-L.x,S=F.y-L.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(L=v[T],E=-E,F=v[D],S=-S),m.y<L.y||m.y>F.y)continue;if(m.y===L.y){if(m.x===L.x)return!0}else{const U=S*(m.x-L.x)-E*(m.y-L.y);if(U===0)return!0;if(U<0)continue;b=!b}}else{if(m.y!==L.y)continue;if(F.x<=m.x&&m.x<=L.x||L.x<=m.x&&m.x<=F.x)return!0}}return b}const i=Si.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Ys,c.curves=a.curves,l.push(c),l;let u=!i(r[0].getPoints());u=e?!u:u;const d=[],h=[];let f=[],p=0,_;h[p]=void 0,f[p]=[];for(let m=0,v=r.length;m<v;m++)a=r[m],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&h[p]&&p++,h[p]={s:new Ys,p:_},h[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:_[0]});if(!h[0])return t(r);if(h.length>1){let m=!1,v=0;for(let y=0,b=h.length;y<b;y++)d[y]=[];for(let y=0,b=h.length;y<b;y++){const D=f[y];for(let T=0;T<D.length;T++){const L=D[T];let F=!0;for(let E=0;E<h.length;E++)n(L.p,h[E].p)&&(y!==E&&v++,F?(F=!1,d[E].push(L)):m=!0);F&&d[y].push(L)}}v>0&&m===!1&&(f=d)}let g;for(let m=0,v=h.length;m<v;m++){c=h[m].s,l.push(c),g=f[m];for(let y=0,b=g.length;y<b;y++)c.holes.push(g[y].h)}return l}}class HS extends Jn{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);const GS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Fu,AddEquation:ls,AddOperation:Dp,AdditiveAnimationBlendMode:Zu,AdditiveBlending:Wl,AgXToneMapping:Bp,AlphaFormat:Xp,AlwaysCompare:lm,AlwaysDepth:Tp,AlwaysStencilFunc:vu,AmbientLight:Mh,AnimationAction:gg,AnimationClip:$s,AnimationLoader:YM,AnimationMixer:xS,AnimationObjectGroup:yS,AnimationUtils:GM,ArcCurve:Om,ArrayCamera:Tm,ArrowHelper:BS,AttachedBindMode:Yl,Audio:pg,AudioAnalyser:cS,AudioContext:Sh,AudioListener:rS,AudioLoader:nS,AxesHelper:zS,BackSide:Pn,BasicDepthPacking:em,BasicShadowMap:e0,BatchedMesh:Nm,Bone:Rc,BooleanKeyframeTrack:tr,Box2:AS,Box3:In,Box3Helper:FS,BoxGeometry:Zt,BoxHelper:OS,BufferAttribute:At,BufferGeometry:st,BufferGeometryLoader:dg,ByteType:Hp,Cache:Vi,Camera:Mc,CameraHelper:US,CanvasTexture:fM,CapsuleGeometry:Lc,CatmullRomCurve3:Fm,CineonToneMapping:Fp,CircleGeometry:Nc,ClampToEdgeWrapping:zn,Clock:fg,Color:Re,ColorKeyframeTrack:gh,ColorManagement:Ct,CompressedArrayTexture:hM,CompressedCubeTexture:dM,CompressedTexture:Pc,CompressedTextureLoader:ZM,ConeGeometry:Dc,ConstantAlphaFactor:wp,ConstantColorFactor:Mp,CubeCamera:ym,CubeReflectionMapping:Xi,CubeRefractionMapping:ds,CubeTexture:Go,CubeTextureLoader:jM,CubeUVReflectionMapping:zr,CubicBezierCurve:ah,CubicBezierCurve3:km,CubicInterpolant:tg,CullFaceBack:Gl,CullFaceFront:ap,CullFaceFrontBack:Qg,CullFaceNone:op,Curve:pi,CurvePath:zm,CustomBlending:cp,CustomToneMapping:kp,CylinderGeometry:rn,Cylindrical:ES,Data3DTexture:Ku,DataArrayTexture:xc,DataTexture:us,DataTextureLoader:rg,DataUtils:c_,DecrementStencilOp:h0,DecrementWrapStencilOp:f0,DefaultLoadingManager:sg,DepthFormat:Xs,DepthStencilFormat:Or,DepthTexture:th,DetachedBindMode:Vp,DirectionalLight:bh,DirectionalLightHelper:DS,DiscreteInterpolant:ng,DisplayP3ColorSpace:vc,DodecahedronGeometry:Uc,DoubleSide:ti,DstAlphaFactor:_p,DstColorFactor:vp,DynamicCopyUsage:C0,DynamicDrawUsage:M0,DynamicReadUsage:E0,EdgesGeometry:Vm,EllipseCurve:Ic,EqualCompare:rm,EqualDepth:Rp,EqualStencilFunc:_0,EquirectangularReflectionMapping:yo,EquirectangularRefractionMapping:vo,Euler:Gn,EventDispatcher:Ei,ExtrudeGeometry:Fc,FileLoader:di,Float16BufferAttribute:p_,Float32BufferAttribute:Ne,FloatType:ni,Fog:Ac,FogExp2:Ec,FramebufferTexture:uM,FrontSide:wi,Frustum:Wo,GLBufferAttribute:wS,GLSL1:P0,GLSL3:xu,GreaterCompare:om,GreaterDepth:Ip,GreaterEqualCompare:cm,GreaterEqualDepth:Pp,GreaterEqualStencilFunc:b0,GreaterStencilFunc:v0,GridHelper:yg,Group:Bi,HalfFloatType:bo,HemisphereLight:ag,HemisphereLightHelper:LS,IcosahedronGeometry:kc,ImageBitmapLoader:tS,ImageLoader:Oo,ImageUtils:fm,IncrementStencilOp:u0,IncrementWrapStencilOp:d0,InstancedBufferAttribute:Br,InstancedBufferGeometry:hg,InstancedInterleavedBuffer:SS,InstancedMesh:Lm,Int16BufferAttribute:d_,Int32BufferAttribute:f_,Int8BufferAttribute:l_,IntType:zu,InterleavedBuffer:Cc,InterleavedBufferAttribute:js,Interpolant:Yo,InterpolateDiscrete:Mo,InterpolateLinear:So,InterpolateSmooth:nc,InvertStencilOp:p0,KeepStencilOp:Us,KeyframeTrack:mi,LOD:Im,LatheGeometry:qo,Layers:bc,LessCompare:sm,LessDepth:Cp,LessEqualCompare:ju,LessEqualDepth:_o,LessEqualStencilFunc:y0,LessStencilFunc:g0,Light:gs,LightProbe:ug,Line:mn,Line3:TS,LineBasicMaterial:pn,LineCurve:ch,LineCurve3:Bm,LineDashedMaterial:$m,LineLoop:Dm,LineSegments:fi,LinearDisplayP3ColorSpace:Ho,LinearFilter:an,LinearInterpolant:mh,LinearMipMapLinearFilter:s0,LinearMipMapNearestFilter:i0,LinearMipmapLinearFilter:hi,LinearMipmapNearestFilter:ho,LinearSRGBColorSpace:Ji,LinearToneMapping:Up,LinearTransfer:Eo,Loader:gn,LoaderUtils:lc,LoadingManager:_h,LoopOnce:Kp,LoopPingPong:Qp,LoopRepeat:$p,LuminanceAlphaFormat:Zp,LuminanceFormat:Yp,MOUSE:Ns,Material:Mn,MaterialLoader:Wc,MathUtils:ks,Matrix3:at,Matrix4:Ve,MaxEquation:dp,Mesh:Se,MeshBasicMaterial:Kn,MeshDepthMaterial:wc,MeshDistanceMaterial:nh,MeshLambertMaterial:fh,MeshMatcapMaterial:Km,MeshNormalMaterial:Jm,MeshPhongMaterial:cc,MeshPhysicalMaterial:Zm,MeshStandardMaterial:dh,MeshToonMaterial:jm,MinEquation:hp,MirroredRepeatWrapping:xo,MixOperation:Np,MultiplyBlending:ql,MultiplyOperation:Vo,NearestFilter:fn,NearestMipMapLinearFilter:n0,NearestMipMapNearestFilter:t0,NearestMipmapLinearFilter:Rr,NearestMipmapNearestFilter:ku,NeutralToneMapping:zp,NeverCompare:im,NeverDepth:Ap,NeverStencilFunc:m0,NoBlending:Hi,NoColorSpace:Ui,NoToneMapping:Gi,NormalAnimationBlendMode:yc,NormalBlending:Ws,NotEqualCompare:am,NotEqualDepth:Lp,NotEqualStencilFunc:x0,NumberKeyframeTrack:Uo,Object3D:pt,ObjectLoader:QM,ObjectSpaceNormalMap:nm,OctahedronGeometry:zi,OneFactor:pp,OneMinusConstantAlphaFactor:Ep,OneMinusConstantColorFactor:Sp,OneMinusDstAlphaFactor:yp,OneMinusDstColorFactor:xp,OneMinusSrcAlphaFactor:oc,OneMinusSrcColorFactor:gp,OrthographicCamera:Hr,P3Primaries:To,PCFShadowMap:Ou,PCFSoftShadowMap:gc,PMREMGenerator:bu,Path:Io,PerspectiveCamera:on,Plane:Di,PlaneGeometry:ps,PlaneHelper:kS,PointLight:xh,PointLightHelper:PS,Points:Um,PointsMaterial:rh,PolarGridHelper:NS,PolyhedronGeometry:ms,PositionalAudio:aS,PropertyBinding:bt,PropertyMixer:mg,QuadraticBezierCurve:lh,QuadraticBezierCurve3:uh,Quaternion:It,QuaternionKeyframeTrack:nr,QuaternionLinearInterpolant:ig,RED_GREEN_RGTC2_Format:_u,RED_RGTC1_Format:Jp,REVISION:zo,RGBADepthPacking:tm,RGBAFormat:Zn,RGBAIntegerFormat:qu,RGBA_ASTC_10x10_Format:hu,RGBA_ASTC_10x5_Format:cu,RGBA_ASTC_10x6_Format:lu,RGBA_ASTC_10x8_Format:uu,RGBA_ASTC_12x10_Format:du,RGBA_ASTC_12x12_Format:fu,RGBA_ASTC_4x4_Format:eu,RGBA_ASTC_5x4_Format:tu,RGBA_ASTC_5x5_Format:nu,RGBA_ASTC_6x5_Format:iu,RGBA_ASTC_6x6_Format:su,RGBA_ASTC_8x5_Format:ru,RGBA_ASTC_8x6_Format:ou,RGBA_ASTC_8x8_Format:au,RGBA_BPTC_Format:tc,RGBA_ETC2_EAC_Format:Ql,RGBA_PVRTC_2BPPV1_Format:Kl,RGBA_PVRTC_4BPPV1_Format:Jl,RGBA_S3TC_DXT1_Format:$a,RGBA_S3TC_DXT3_Format:Qa,RGBA_S3TC_DXT5_Format:ec,RGBFormat:qp,RGB_BPTC_SIGNED_Format:pu,RGB_BPTC_UNSIGNED_Format:mu,RGB_ETC1_Format:Yu,RGB_ETC2_Format:$l,RGB_PVRTC_2BPPV1_Format:jl,RGB_PVRTC_4BPPV1_Format:Zl,RGB_S3TC_DXT1_Format:Ka,RGFormat:jp,RGIntegerFormat:Xu,RawShaderMaterial:Ym,Ray:er,Raycaster:Th,Rec709Primaries:Ao,RectAreaLight:cg,RedFormat:Gu,RedIntegerFormat:Wu,ReinhardToneMapping:Op,RenderTarget:pm,RepeatWrapping:ki,ReplaceStencilOp:l0,ReverseSubtractEquation:up,RingGeometry:Bc,SIGNED_RED_GREEN_RGTC2_Format:yu,SIGNED_RED_RGTC1_Format:gu,SRGBColorSpace:Cn,SRGBTransfer:Ft,Scene:Tc,ShaderChunk:Qe,ShaderLib:ui,ShaderMaterial:$n,ShadowMaterial:qm,Shape:Ys,ShapeGeometry:zc,ShapePath:VS,ShapeUtils:Si,ShortType:Gp,Skeleton:Xo,SkeletonHelper:RS,SkinnedMesh:sh,Source:Hs,Sphere:bn,SphereGeometry:Wr,Spherical:Cu,SphericalHarmonics3:lg,SplineCurve:hh,SpotLight:vh,SpotLightHelper:CS,Sprite:Pm,SpriteMaterial:ih,SrcAlphaFactor:rc,SrcAlphaSaturateFactor:bp,SrcColorFactor:mp,StaticCopyUsage:T0,StaticDrawUsage:Co,StaticReadUsage:w0,StereoCamera:iS,StreamCopyUsage:R0,StreamDrawUsage:S0,StreamReadUsage:A0,StringKeyframeTrack:ir,SubtractEquation:lp,SubtractiveBlending:Xl,TOUCH:Ds,TangentSpaceNormalMap:fs,TetrahedronGeometry:Vc,Texture:Jt,TextureLoader:og,TorusGeometry:Fi,TorusKnotGeometry:Hc,Triangle:Yn,TriangleFanDrawMode:a0,TriangleStripDrawMode:o0,TrianglesDrawMode:r0,TubeGeometry:Gc,UVMapping:_c,Uint16BufferAttribute:$u,Uint32BufferAttribute:Qu,Uint8BufferAttribute:u_,Uint8ClampedBufferAttribute:h_,Uniform:Ah,UniformsGroup:MS,UniformsLib:Ce,UniformsUtils:_m,UnsignedByteType:Wi,UnsignedInt248Type:Vr,UnsignedInt5999Type:Wp,UnsignedIntType:Zs,UnsignedShort4444Type:Vu,UnsignedShort5551Type:Hu,UnsignedShortType:Bu,VSMShadowMap:bi,Vector2:re,Vector3:R,Vector4:Pt,VectorKeyframeTrack:Ks,VideoTexture:lM,WebGL3DRenderTarget:$0,WebGLArrayRenderTarget:K0,WebGLCoordinateSystem:Mi,WebGLCubeRenderTarget:vm,WebGLMultipleRenderTargets:HS,WebGLRenderTarget:Jn,WebGLRenderer:Cm,WebGLUtils:Am,WebGPUCoordinateSystem:Ro,WireframeGeometry:Xm,WrapAroundEnding:wo,ZeroCurvatureEnding:zs,ZeroFactor:fp,ZeroSlopeEnding:Vs,ZeroStencilOp:c0,createCanvasElement:hm},Symbol.toStringTag,{value:"Module"}));function WS(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class cs{constructor(){Lt(this,"allVertices",{});Lt(this,"isolatedVertices",{});Lt(this,"connectedVertices",{});Lt(this,"sortedConnectedValues",[]);Lt(this,"needsSort",!1);Lt(this,"emitter",WS());Lt(this,"emit",this.emitter.emit.bind(this.emitter));Lt(this,"on",this.emitter.on.bind(this.emitter));Lt(this,"off",this.emitter.off.bind(this.emitter));Lt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n!=null&&n.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const o=this.connectedVertices[r];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const o=this.connectedVertices[r];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var o;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,c)=>{a===0&&t.push(c)});t.length>0;){const a=t.shift();n.push(a);const c=i.find(l=>l===a);c&&((o=this.connectedVertices[c])==null||o.next.forEach(l=>{const u=(e.get(l)||0)-1;e.set(l,u),u===0&&t.push(l)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class XS{constructor(e,t,n){Lt(this,"key");Lt(this,"stage");Lt(this,"callback");Lt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class qS extends cs{constructor(t,n,i){super();Lt(this,"key");Lt(this,"scheduler");Lt(this,"callback",(t,n)=>n());Lt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const r=new XS(this,t,n);return this.add(t,r,i),r}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(r=>{const o=performance.now();r.run(i??t);const a=performance.now()-o;n[r.key]=a})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class YS extends cs{constructor(t){super();Lt(this,"lastTime",performance.now());Lt(this,"clampDeltaTo",.1);Lt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new qS(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},r=performance.now();return this.forEachNode(o=>{const a=performance.now(),c=o.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),l=performance.now()-a;i[o.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-r,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const ZS=Symbol("use-legacy-frame-compatibility-context"),jS=()=>{const s={useFrameOrders:[],useRenderOrders:[]};return Vn(ZS,s),s},dn=(s,e)=>{const t=fc(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const o=await e(r);o&&(n=o)});Wn(()=>{i(),n&&n()})};function JS(s,e){const t={current:void 0};return dn(s,n=>{t.current=e?e(n):n}),t}const Tn=s=>{const e=Vt(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},Ch=typeof window<"u",KS=()=>{const s=Tn({width:0,height:0});if(!Ch)return{parentSize:s,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=a=>{i.disconnect(),r.disconnect(),i.observe(a),r.observe(a,e)},i=new ResizeObserver(([a])=>{const{width:c,height:l}=a.contentRect;c===s.current.width&&l===s.current.height||s.set({width:c,height:l})}),r=new MutationObserver(a=>{for(const c of a)for(const l of c.removedNodes)if(t===l&&t.parentElement){n(t.parentElement);return}}),o=a=>{t=a;const c=t.parentElement;c&&(s.set({width:c.clientWidth,height:c.clientHeight}),n(c))};return Wn(()=>{i.disconnect(),r.disconnect()}),{parentSize:s,parentSizeAction:o}};function vg(s,e){const t=Vt(s);let n=s;const i=t.subscribe(a=>n=a);return Wn(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(a),e==null||e(a,c)},update:a=>{const c=a(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const Qn=()=>{const s=Hn("threlte");if(s===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return s},Rh=Symbol("threlte-hierarchical-parent-context"),Ph=()=>Hn(Rh),$S=s=>Vn(Rh,s),QS=s=>{const e=vg(s);return Vn(Rh,e),e};function ew(s){let e;const t=s[7].default,n=qi(t,s,s[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&64)&&Yi(n,t,i,i[6],e?ji(t,i[6],r,null):Zi(i[6]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Ie(n,i),e=!1},d(i){n&&n.d(i)}}}const tw=()=>({onChildMount:Hn("threlte-hierarchical-object-on-mount"),onChildDestroy:Hn("threlte-hierarchical-object-on-destroy")});function nw(s,e,t){var g;let n,{$$slots:i={},$$scope:r}=e,{object:o=void 0}=e,{onChildMount:a=void 0}=e;const c=m=>{a==null||a(m)};let{onChildDestroy:l=void 0}=e;const u=m=>{l==null||l(m)},{invalidate:d}=Qn(),h=Ph();en(s,h,m=>t(5,n=m));let{parent:f=n}=e;const p=tw();o&&((g=p.onChildMount)==null||g.call(p,o),d());const _=vg(o,(m,v)=>{var y,b;v&&((y=p.onChildDestroy)==null||y.call(p,v),d()),m&&((b=p.onChildMount)==null||b.call(p,m),d())});return Wn(()=>{var m;o&&((m=p.onChildDestroy)==null||m.call(p,o),d())}),Vn("threlte-hierarchical-object-on-mount",c),Vn("threlte-hierarchical-object-on-destroy",u),$S(_),s.$$set=m=>{"object"in m&&t(2,o=m.object),"onChildMount"in m&&t(3,a=m.onChildMount),"onChildDestroy"in m&&t(4,l=m.onChildDestroy),"parent"in m&&t(1,f=m.parent),"$$scope"in m&&t(6,r=m.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(1,f=n),s.$$.dirty&4&&_.set(o)},[h,f,o,a,l,n,r,i]}class xg extends Un{constructor(e){super(),On(this,e,nw,ew,Dn,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function iw(s){let e;const t=s[1].default,n=qi(t,s,s[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&Yi(n,t,i,i[4],e?ji(t,i[4],r,null):Zi(i[4]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Ie(n,i),e=!1},d(i){n&&n.d(i)}}}function sw(s){let e,t;return e=new xg({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[iw]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function rw(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const o=c=>r.add(c),a=c=>r.remove(c);return s.$$set=c=>{"object"in c&&t(0,r=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[r,n,o,a,i]}class bg extends Un{constructor(e){super(),On(this,e,rw,sw,Dn,{object:0})}}const gf=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(s[n]!==e[n])return!1;return!0},ow=()=>{Vn("threlte-cache",[])},aw=()=>{const s=Hn("threlte-cache");if(!s)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return{remember:(n,i)=>{for(const o of s)if(gf(i,o.keys)){if(o.error)throw o.error;if(o.promise)return o.promise}const r={promise:n(),keys:i,value:void 0};return s.push(r),r.promise.catch(o=>{r.error=o}),r.promise},clear:n=>{const i=s.findIndex(r=>gf(n,r.keys));i!==-1&&s.splice(i,1)}}},Xc=new on(75,0,.1,1e3);Xc.position.z=5;Xc.lookAt(0,0,0);const cw=()=>Xc,lw=s=>{dn(s.size,e=>{if(s.camera.current===Xc){const t=s.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),s.invalidate()}})},uw=s=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(o=!1)=>{await qg(),!(!e.shouldDispose&&!o)&&(e.disposableObjects.forEach((a,c)=>{var l;(a===0||o)&&((l=c==null?void 0:c.dispose)==null||l.call(c),e.disposableObjects.delete(c))}),e.shouldDispose=!1)},collectDisposableObjects:(o,a)=>{const c=a??[];return o&&(o!=null&&o.dispose&&typeof o.dispose=="function"&&o.type!=="Scene"&&c.push(o),Object.entries(o).forEach(([l,u])=>{if(l==="parent"||l==="children"||typeof u!="object")return;const d=u;d!=null&&d.dispose&&e.collectDisposableObjects(d,c)})),c},addDisposableObjects:o=>{o.forEach(a=>{const c=e.disposableObjects.get(a);c?e.disposableObjects.set(a,c+1):e.disposableObjects.set(a,1)})},removeDisposableObjects:o=>{o.length!==0&&(o.forEach(a=>{const c=e.disposableObjects.get(a);c&&c>0&&e.disposableObjects.set(a,c-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},t={size:fc([s.userSize,s.parentSize],([o,a])=>o||a),camera:Tn(cw()),scene:new Tc,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:Tn(s.colorSpace),toneMapping:Tn(s.toneMapping),dpr:Tn(s.dpr),useLegacyLights:Tn(s.useLegacyLights),shadows:Tn(s.shadows),colorManagementEnabled:Tn(s.colorManagementEnabled),renderMode:Tn(s.renderMode),autoRender:Tn(s.autoRender),scheduler:void 0,mainStage:void 0,renderStage:void 0,autoRenderTask:void 0,shouldRender:()=>t.renderMode.current==="always"||t.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||t.renderMode.current==="manual"&&e.advance},n=Tn({});return Vn("threlte",t),Vn("threlte-internal-context",e),Vn("threlte-user-context",n),{ctx:t,internalCtx:e,getCtx:()=>t,getInternalCtx:()=>e}},hw=zo.replace("dev",""),dw=Number.parseInt(hw),fw=s=>{const e=Vt(void 0),t=(n,i)=>{s.renderer=new Cm({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(s.renderer)};return dn([s.colorManagementEnabled],([n])=>{Ct.enabled=n}),dn([e,s.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),dn([e,s.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),dn([e,s.size],([n,i])=>{var r;(r=n==null?void 0:n.xr)!=null&&r.isPresenting||n==null||n.setSize(i.width,i.height)}),dn([e,s.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=gc))}),dn([e,s.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),dn([e,s.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}};function _f(s){let e,t;return e=new bg({props:{object:s[4].ctx.scene,$$slots:{default:[pw]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function pw(s){let e;const t=s[16].default,n=qi(t,s,s[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&262144)&&Yi(n,t,i,i[18],e?ji(t,i[18],r,null):Zi(i[18]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Ie(n,i),e=!1},d(i){n&&n.d(i)}}}function mw(s){let e,t,n,i,r=s[1]&&_f(s);return{c(){e=Yg("canvas"),r&&r.c(),this.h()},l(o){e=Zg(o,"CANVAS",{class:!0});var a=jg(e);r&&r.l(a),a.forEach(kt),this.h()},h(){Jg(e,"class","svelte-o3oskp")},m(o,a){Ht(o,e,a),r&&r.m(e,null),s[17](e),t=!0,n||(i=Kg(s[3].call(null,e)),n=!0)},p(o,[a]){o[1]?r?(r.p(o,a),a&2&&Me(r,1)):(r=_f(o),r.c(),Me(r,1),r.m(e,null)):r&&(Ln(),Ie(r,1,1,()=>{r=null}),Nn())},i(o){t||(Me(r),t=!0)},o(o){Ie(r),t=!1},d(o){o&&kt(e),r&&r.d(),s[17](null),n=!1,i()}}}function gw(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{colorManagementEnabled:o=!0}=e,{colorSpace:a="srgb"}=e,{dpr:c=Ch?window.devicePixelRatio:1}=e,{renderMode:l="on-demand"}=e,{rendererParameters:u=void 0}=e,{shadows:d=gc}=e,{size:h=void 0}=e,{toneMapping:f=Fu}=e,{useLegacyLights:p=!(dw>=155)}=e,{autoRender:_=!0}=e,g,m=Vt(!1);en(s,m,U=>t(1,n=U));const v=Vt(h),{parentSize:y,parentSizeAction:b}=KS(),{useRenderOrders:D}=jS(),T=uw({colorManagementEnabled:o,colorSpace:a,dpr:c,renderMode:l,parentSize:y,autoRender:_,shadows:d,toneMapping:f,useLegacyLights:p,userSize:v}),L=new YS;T.getCtx().mainStage=L.createStage(Symbol("threlte-main-stage")),T.getCtx().renderStage=L.createStage(Symbol("threlte-render-stage"),{after:T.ctx.mainStage,callback(U,H){T.ctx.shouldRender()&&H()}}),T.getCtx().autoRenderTask=T.ctx.renderStage.createTask(Symbol("threlte-auto-render-task"),U=>{D.length>0||T.ctx.renderer.render(F.scene,F.camera.current)}),dn([m,T.ctx.autoRender],([U,H])=>(U&&H?T.getCtx().autoRenderTask.start():T.getCtx().autoRenderTask.stop(),()=>{T.getCtx().autoRenderTask.stop()})),T.getCtx().scheduler=L,ow();const F=T.ctx;lw(F);const{createRenderer:E}=fw(F);uc(()=>{E(g,u),T.getCtx().renderer.setAnimationLoop(U=>{T.getInternalCtx().dispose(),L.run(U),T.getInternalCtx().resetFrameInvalidation()}),m.set(!0)}),Wn(()=>{var U;T.internalCtx.dispose(!0),T.ctx.scheduler.dispose(),(U=T.ctx.renderer)==null||U.dispose()});function S(U){hc[U?"unshift":"push"](()=>{g=U,t(0,g)})}return s.$$set=U=>{"colorManagementEnabled"in U&&t(5,o=U.colorManagementEnabled),"colorSpace"in U&&t(6,a=U.colorSpace),"dpr"in U&&t(7,c=U.dpr),"renderMode"in U&&t(8,l=U.renderMode),"rendererParameters"in U&&t(9,u=U.rendererParameters),"shadows"in U&&t(10,d=U.shadows),"size"in U&&t(11,h=U.size),"toneMapping"in U&&t(12,f=U.toneMapping),"useLegacyLights"in U&&t(13,p=U.useLegacyLights),"autoRender"in U&&t(14,_=U.autoRender),"$$scope"in U&&t(18,r=U.$$scope)},s.$$.update=()=>{s.$$.dirty&2048&&v.set(h),s.$$.dirty&64&&T.ctx.colorSpace.set(a),s.$$.dirty&128&&T.ctx.dpr.set(c),s.$$.dirty&256&&T.ctx.renderMode.set(l),s.$$.dirty&16384&&T.ctx.autoRender.set(_),s.$$.dirty&1024&&T.ctx.shadows.set(d),s.$$.dirty&4096&&T.ctx.toneMapping.set(f)},[g,n,m,b,T,o,a,c,l,u,d,h,f,p,_,F,i,S,r]}class qE extends Un{constructor(e){super(),On(this,e,gw,mw,Dn,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:15})}get ctx(){return this.$$.ctx[15]}}const _w=()=>Hn("threlte-internal-context");function yw(s){let e;const t=s[9].default,n=qi(t,s,s[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&Yi(n,t,i,i[8],e?ji(t,i[8],r,null):Zi(i[8]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Ie(n,i),e=!1},d(i){n&&n.d(i)}}}const yf="threlte-disposable-object-context";function vw(s,e,t){let n,i,{$$slots:r={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:l}=_w();let{object:u=void 0}=e,d=u,{dispose:h=void 0}=e;const f=Hn(yf);en(s,f,g=>t(7,i=g));const p=Vt(h??i??!0);en(s,p,g=>t(6,n=g)),Vn(yf,p);let _=n?a(u):[];return c(_),Wn(()=>{l(_)}),s.$$set=g=>{"object"in g&&t(2,u=g.object),"dispose"in g&&t(3,h=g.dispose),"$$scope"in g&&t(8,o=g.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&p.set(h??i??!0),s.$$.dirty&116&&u!==d&&(l(_),t(5,_=n?a(u):[]),c(_),t(4,d=u))},[f,p,u,h,d,_,n,i,o,r]}class xw extends Un{constructor(e){super(),On(this,e,vw,yw,Dn,{object:2,dispose:3})}}const bw=/^\s*class\s+/,Mw=s=>typeof s!="function"?!1:bw.test(s.toString()),Sw=s=>Array.isArray(s),vf=(s,e)=>Mw(s)?Sw(e)?new s(...e):new s:s,ww=s=>"isObject3D"in s,xf=s=>"dispose"in s,Mg=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},kl=Symbol("initialValueBeforeAttach"),Ew=()=>{const{invalidate:s}=Qn();let e=!1,t=kl,n,i,r;const o=(c,l,u)=>{if(a(),!u){const d=c;((d==null?void 0:d.isMaterial)||!1)&&(u="material"),((d==null?void 0:d.isBufferGeometry)||(d==null?void 0:d.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(l,c);else{const{target:d,key:h}=Mg(l,u);t=d[h],d[h]=c,i=d,r=h}e=!0,s()}},a=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==kl&&(i[r]=t,t=kl,i=void 0,r=void 0),e=!1,s())};return Wn(()=>{a()}),{update:o}},Aw=s=>s&&s.isCamera,Sg=s=>s&&s.isOrthographicCamera,wg=s=>s&&s.isPerspectiveCamera,Tw=s=>wg(s)||Sg(s),Cw=()=>{const{invalidate:s,size:e,camera:t}=Qn();let n,i;Wn(()=>{i==null||i()});const r=c=>{n&&(Sg(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):wg(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(c,l)=>{if(i==null||i(),l||!Tw(c)){n=void 0;return}n=c,i=e.subscribe(r)},makeDefaultCamera:(c,l)=>{!Aw(c)||!l||(t.set(c),s())}}},Ih=()=>{const s=dc(),e=(n,i)=>{const r=s.$$.callbacks[n];r&&r.forEach(o=>{o(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!s.$$.callbacks[n],enumerable:!0}),e},Rw=()=>{const s=Ih(),e=[];let t,n=!1;const i=()=>{e.forEach(a=>a()),e.length=0,s("create",{ref:t,cleanup:a=>{e.push(a)}})},r=o=>{t=o,n&&i()};return uc(()=>{i(),n=!0}),Wn(()=>{e.forEach(o=>o())}),{updateRef:r}},bf=s=>!!(s!=null&&s.addEventListener),Pw=()=>{const s=Ih(),e=dc(),t=c=>{c!=null&&c.type&&s(c.type,c)},n=(c,l)=>{bf(c)&&l.forEach(u=>{c.removeEventListener(u,t)})},i=(c,l)=>{bf(c)&&l.forEach(u=>{c.addEventListener(u,t)})},r=Vt(),o=Vt([]);return dn([r,o],([c,l])=>(i(c,l),()=>n(c,l))),uc(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{r.set(c)}}},Iw=s=>{const t=Hn("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(l=>l(s)).filter(Boolean),i=n.flatMap(l=>l.pluginProps??[]);let r=[];return Wn(()=>{r.forEach(l=>l())}),{updateRef:l=>{r.forEach(u=>u()),r=[],n.forEach(u=>{var h;const d=(h=u.onRefChange)==null?void 0:h.call(u,l);d&&r.push(d)})},updateProps:l=>{n.forEach(u=>{var d;(d=u.onPropsChange)==null||d.call(u,l)})},updateRestProps:l=>{n.forEach(u=>{var d;(d=u.onRestPropsChange)==null||d.call(u,l)})},pluginsProps:i}},Lw=new Set(["$$scope","$$slots","type","args","attach","instance"]),Nw=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),Dw=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,Mf=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(o,a,c)=>{o[a].setScalar(c)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(o,a,c)=>{o[a].set(...c)}:(o,a,c)=>{o[a].set(c)}:(o,a,c)=>{o[a]=c}},Uw=()=>{const{invalidate:s}=Qn(),e=new Map,t=new Map,n=(r,o,a,c)=>{if(Dw(a)){const d=e.get(o);if(d&&d.instance===r&&d.value===a)return;e.set(o,{instance:r,value:a})}const{key:l,target:u}=Mg(r,o);if(a!=null){const d=t.get(o);if(d)d(u,l,a);else{const h=Mf(u,l,a);t.set(o,h),h(u,l,a)}}else Mf(u,l,a)(u,l,a);c.manualCamera||Nw.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(r,o,a)=>{var c;for(const l in o)!Lw.has(l)&&!((c=a.pluginsProps)!=null&&c.includes(l))&&n(r,l,o[l],a),s()}}},Ow=s=>({ref:s&2}),Sf=s=>({ref:s[1]}),Fw=s=>({ref:s&2}),wf=s=>({ref:s[1]});function Ef(s){let e,t;return e=new xw({props:{object:s[1],dispose:s[0]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&1&&(r.dispose=n[0]),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function kw(s){let e;const t=s[10].default,n=qi(t,s,s[11],Sf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&Yi(n,t,i,i[11],e?ji(t,i[11],r,Ow):Zi(i[11]),Sf)},i(i){e||(Me(n,i),e=!0)},o(i){Ie(n,i),e=!1},d(i){n&&n.d(i)}}}function Bw(s){let e,t;return e=new bg({props:{object:s[1],$$slots:{default:[zw]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&2050&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function zw(s){let e;const t=s[10].default,n=qi(t,s,s[11],wf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&Yi(n,t,i,i[11],e?ji(t,i[11],r,Fw):Zi(i[11]),wf)},i(i){e||(Me(n,i),e=!0)},o(i){Ie(n,i),e=!1},d(i){n&&n.d(i)}}}function Vw(s){let e=xf(s[1]),t,n,i,r,o,a,c=e&&Ef(s);const l=[Bw,kw],u=[];function d(h,f){return f&2&&(n=null),n==null&&(n=!!ww(h[1])),n?0:1}return i=d(s,-1),r=u[i]=l[i](s),{c(){c&&c.c(),t=ii(),r.c(),o=Kt()},l(h){c&&c.l(h),t=si(h),r.l(h),o=Kt()},m(h,f){c&&c.m(h,f),Ht(h,t,f),u[i].m(h,f),Ht(h,o,f),a=!0},p(h,[f]){f&2&&(e=xf(h[1])),e?c?(c.p(h,f),f&2&&Me(c,1)):(c=Ef(h),c.c(),Me(c,1),c.m(t.parentNode,t)):c&&(Ln(),Ie(c,1,1,()=>{c=null}),Nn());let p=i;i=d(h,f),i===p?u[i].p(h,f):(Ln(),Ie(u[p],1,1,()=>{u[p]=null}),Nn(),r=u[i],r?r.p(h,f):(r=u[i]=l[i](h),r.c()),Me(r,1),r.m(o.parentNode,o))},i(h){a||(Me(c),Me(r),a=!0)},o(h){Ie(c),Ie(r),a=!1},d(h){h&&(kt(t),kt(o)),c&&c.d(h),u[i].d(h)}}}function Hw(s,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=hs(e,n),r,{$$slots:o={},$$scope:a}=e,{is:c}=e,{args:l=void 0}=e,{attach:u=void 0}=e,{manual:d=void 0}=e,{makeDefault:h=void 0}=e,{dispose:f=void 0}=e;const p=Ph();en(s,p,U=>t(9,r=U));const _=Rw();let g=vf(c,l);_.updateRef(g);let m=!1;const v=()=>{if(!m){m=!0;return}t(1,g=vf(c,l)),_.updateRef(g)};let{ref:y=g}=e;const b=QS(g),D=Iw({ref:g,props:e}),T=(D==null?void 0:D.pluginsProps)??[],L=Uw(),F=Cw(),E=Ew(),S=Pw();return s.$$set=U=>{t(23,e=ri(ri({},e),go(U))),t(22,i=hs(e,n)),"is"in U&&t(4,c=U.is),"args"in U&&t(5,l=U.args),"attach"in U&&t(6,u=U.attach),"manual"in U&&t(7,d=U.manual),"makeDefault"in U&&t(8,h=U.makeDefault),"dispose"in U&&t(0,f=U.dispose),"ref"in U&&t(3,y=U.ref),"$$scope"in U&&t(11,a=U.$$scope)},s.$$.update=()=>{s.$$.dirty&48&&v(),s.$$.dirty&2&&t(3,y=g),s.$$.dirty&2&&b.set(g),L.updateProps(g,i,{manualCamera:d,pluginsProps:T}),s.$$.dirty&130&&F.update(g,d),s.$$.dirty&258&&F.makeDefaultCamera(g,h),s.$$.dirty&578&&E.update(g,r,u),s.$$.dirty&2&&S.updateRef(g),s.$$.dirty&2&&(D==null||D.updateRef(g)),D==null||D.updateProps(e),D==null||D.updateRestProps(i)},e=go(e),[f,g,p,y,c,l,u,d,h,r,o,a]}let Eg=class extends Un{constructor(e){super(),On(this,e,Hw,Vw,Dn,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const Gw={},Ww=(s,e)=>{const t=Gw[e]||GS[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...s,props:{...s.props,is:t}}},Xw=s=>new Proxy(class{},{construct(e,[t]){const n=t;return new Eg(Ww(n,s))}}),tn=new Proxy(class{},{construct(s,[e]){const t=e;return new Eg(t)},get(s,e){return Xw(e)}});function qw(s,e){const t="threlte-plugin-context";if(Array.isArray(s)){const[n,i]=s;Vn(t,{...Hn(t),[n]:i})}else{const n=s,i=e;if(!i)return;Vn(t,{...Hn(t),[n]:i})}}function Ag(s,e,t){if(!Ch)return{task:void 0,start:()=>{},stop:()=>{},started:$g(!1)};let n,i,r;cs.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const o=Qn();let a=o.mainStage;if(r){if(r.stage)if(cs.isValue(r.stage))a=r.stage;else{const f=o.scheduler.getStage(r.stage);if(!f)throw new Error(`No stage found with key ${r.stage.toString()}`);a=f}else if(r.after)if(Array.isArray(r.after))for(let f=0;f<r.after.length;f++){const p=r.after[f];if(cs.isValue(p)){a=p.stage;break}}else cs.isValue(r.after)&&(a=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let f=0;f<r.before.length;f++){const p=r.before[f];if(cs.isValue(p)){a=p.stage;break}}else cs.isValue(r.before)&&(a=r.before.stage)}const{autoInvalidations:c}=Hn("threlte-internal-context"),l=Vt(!1),u=a.createTask(n,i,r),d=()=>{l.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&c.add(i),u.start()},h=()=>{l.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&c.delete(i),u.stop()};return(r==null?void 0:r.autoStart)??!0?d():h(),Wn(()=>{a&&a.removeTask(n)}),{task:u,start:d,stop:h,started:{subscribe:l.subscribe}}}function Yw(s,e,t){const n=Hn("threlte-user-context");if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return s?s&&!e?fc(n,i=>i[s]):(n.update(i=>{if(s in i){if(!t||t.existing==="skip")return i;if(t.existing==="merge")return Object.assign(i[s],e),i}return i[s]=e,i}),n.current[s]):{subscribe:n.subscribe}}const Bl=s=>{const e=Vt(void 0),t=Vt(void 0);return s.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(s,e),{error:t,promise:s})};function Tg(s,e){const{remember:t,clear:n}=aw();let i;const r=()=>{var l;const c=new s(...(e==null?void 0:e.args)??[]);return(l=e==null?void 0:e.extend)==null||l.call(e,c),c};return{load:(c,l)=>{const u=async d=>{var h;if(i||(i=r()),"loadAsync"in i){const f=await i.loadAsync(d,l==null?void 0:l.onProgress);return((h=l==null?void 0:l.transform)==null?void 0:h.call(l,f))??f}else return new Promise((f,p)=>{i.load(d,_=>{var g;return f(((g=l==null?void 0:l.transform)==null?void 0:g.call(l,_))??_)},_=>{var g;return(g=l==null?void 0:l.onProgress)==null?void 0:g.call(l,_)},p)})};if(Array.isArray(c)){const d=c.map(f=>t(()=>u(f),[s,f]));return Bl(Promise.all(d))}else if(typeof c=="string"){const d=t(()=>u(c),[s,c]);return Bl(d)}else{const d=Object.values(c).map(f=>t(()=>u(f),[s,f]));return Bl(Promise.all(d).then(f=>Object.fromEntries(Object.entries(c).map(([p],_)=>[p,f[_]]))))}},clear:c=>{Array.isArray(c)?c.forEach(l=>{n([s,l])}):typeof c=="string"?n([s,c]):Object.entries(c).forEach(([l,u])=>{n([s,l,u])})},loader:i}}const Lh=()=>{const s=dc(),e=Vt(void 0);return dn(e,t=>{t&&Object.entries(s.$$.callbacks).forEach(n=>{const[i,r]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...r):t.$$.callbacks[i]=r})}),e};new R;new R;new R;const Zw={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

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

		}`},jw={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

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

		}`},Is=s=>{let e=!1;const t=Vt(s());return{...t,memoize:(...i)=>{if(!e){e=!0;return}t.set(s())}}},Jw=s=>({ref:s[1]&1024}),Af=s=>({ref:s[41]});function Kw(s){let e,t,n,i,r;e=new tn.Mesh({props:{"scale.y":-1,"rotation.x":-Math.PI/2,material:s[10],geometry:s[0]}}),n=new tn({props:{is:s[9],manual:!0}});const o=s[27].default,a=qi(o,s,s[29],Af);return{c(){mt(e.$$.fragment),t=ii(),mt(n.$$.fragment),i=ii(),a&&a.c()},l(c){gt(e.$$.fragment,c),t=si(c),gt(n.$$.fragment,c),i=si(c),a&&a.l(c)},m(c,l){_t(e,c,l),Ht(c,t,l),_t(n,c,l),Ht(c,i,l),a&&a.m(c,l),r=!0},p(c,l){const u={};l[0]&1&&(u.geometry=c[0]),e.$set(u),a&&a.p&&(!r||l[0]&536870912|l[1]&1024)&&Yi(a,o,c,c[29],r?ji(o,c[29],l,Jw):Zi(c[29]),Af)},i(c){r||(Me(e.$$.fragment,c),Me(n.$$.fragment,c),Me(a,c),r=!0)},o(c){Ie(e.$$.fragment,c),Ie(n.$$.fragment,c),Ie(a,c),r=!1},d(c){c&&(kt(t),kt(i)),yt(e,c),yt(n,c),a&&a.d(c)}}}function $w(s){let e,t;return e=new tn.Group({props:{"rotation.x":Math.PI/2,$$slots:{default:[Kw]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i[0]&536870913|i[1]&1024&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function Qw(s){let e,t;const n=[s[12]];let i={$$slots:{default:[$w,({ref:r})=>({41:r}),({ref:r})=>[0,r?1024:0]]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=ri(i,n[r]);return e=new tn.Group({props:i}),s[28](e),{c(){mt(e.$$.fragment)},l(r){gt(e.$$.fragment,r)},m(r,o){_t(e,r,o),t=!0},p(r,o){const a=o[0]&4096?pc(n,[mc(r[12])]):{};o[0]&536870913|o[1]&1024&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(Me(e.$$.fragment,r),t=!0)},o(r){Ie(e.$$.fragment,r),t=!1},d(r){s[28](null),yt(e,r)}}}function e1(s,e,t){const n=["opacity","width","height","blur","far","smooth","resolution","frames","scale","color","depthWrite","refresh"];let i=hs(e,n),r,o,a,c,l,u,d,h,{$$slots:f={},$$scope:p}=e,{opacity:_=1}=e,{width:g=1}=e,{height:m=1}=e,{blur:v=1}=e,{far:y=10}=e,{smooth:b=!0}=e,{resolution:D=512}=e,{frames:T=1/0}=e,{scale:L=10}=e,{color:F="#000000"}=e,{depthWrite:E=!1}=e;const{scene:S,renderer:U}=Qn(),H=Is(()=>g*(Array.isArray(L)?L[0]:L||1));en(s,H,ue=>t(26,d=ue));const k=Is(()=>m*(Array.isArray(L)?L[1]:L||1));en(s,k,ue=>t(25,u=ue));const W=Is(()=>{const ue=new Jn(D,D);return ue.texture.generateMipmaps=!1,ue.texture.colorSpace=U.outputColorSpace,ue});en(s,W,ue=>t(36,c=ue));const Z=Is(()=>{const ue=new Jn(D,D);return ue.texture.generateMipmaps=!1,ue});en(s,Z,ue=>t(35,a=ue));const B=Is(()=>new ps(d,u).rotateX(Math.PI/2));en(s,B,ue=>t(0,o=ue));const G=Is(()=>new Se(o));en(s,G,ue=>t(37,l=ue));const z=Is(()=>{const ue=new wc({depthTest:!1,depthWrite:!1});return ue.onBeforeCompile=De=>{De.uniforms={...De.uniforms,uColor:{value:new Re(F).convertSRGBToLinear()}},De.fragmentShader=`uniform vec3 uColor;
`+De.fragmentShader,De.fragmentShader=De.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),De.fragmentShader=De.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},ue});en(s,z,ue=>t(34,r=ue));const K=new $n({...Zw,depthTest:!1}),oe=new $n({...jw,depthTest:!1}),fe=new Hr(-d/2,d/2,u/2,-u/2,0,y);fe.updateProjectionMatrix();const Ae=new Kn({map:c.texture,transparent:!0,opacity:_,depthWrite:E}),Ee=ue=>{const De=l;De.visible=!0,De.material=K,K.uniforms.tDiffuse.value=c.texture,K.uniforms.h.value=ue*1/256,U.setRenderTarget(a),U.render(De,fe),De.material=oe,oe.uniforms.tDiffuse.value=a.texture,oe.uniforms.v.value=ue*1/256,U.setRenderTarget(c),U.render(De,fe),De.visible=!1},V=()=>{const ue=S.background;S.background=null;const De=S.overrideMaterial;S.overrideMaterial=r;const q=U.getClearAlpha();U.setClearAlpha(0),U.setRenderTarget(c),U.render(S,fe),S.overrideMaterial=De,Ee(v),b&&Ee(v*.4),U.setRenderTarget(null),S.background=ue,U.setClearAlpha(q)},ee=()=>{V()};let ie=0;Ag(()=>{(T===1/0||ie<T)&&(V(),ie+=1)}),Wn(()=>{c.dispose(),a.dispose(),o.dispose(),r.dispose(),K.dispose(),oe.dispose(),Ae.dispose()});const ne=Lh();en(s,ne,ue=>t(1,h=ue));function Te(ue){hc[ue?"unshift":"push"](()=>{h=ue,ne.set(h)})}return s.$$set=ue=>{e=ri(ri({},e),go(ue)),t(12,i=hs(e,n)),"opacity"in ue&&t(13,_=ue.opacity),"width"in ue&&t(14,g=ue.width),"height"in ue&&t(15,m=ue.height),"blur"in ue&&t(16,v=ue.blur),"far"in ue&&t(17,y=ue.far),"smooth"in ue&&t(18,b=ue.smooth),"resolution"in ue&&t(19,D=ue.resolution),"frames"in ue&&t(20,T=ue.frames),"scale"in ue&&t(21,L=ue.scale),"color"in ue&&t(22,F=ue.color),"depthWrite"in ue&&t(23,E=ue.depthWrite),"$$scope"in ue&&t(29,p=ue.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&2113536&&H.memoize([g,L]),s.$$.dirty[0]&2129920&&k.memoize(m,L),s.$$.dirty[0]&524288&&W.memoize(D),s.$$.dirty[0]&524288&&Z.memoize(D),s.$$.dirty[0]&100663296&&B.memoize(d,u),s.$$.dirty[0]&1&&G.memoize(o),s.$$.dirty[0]&4194304&&z.memoize(F)},[o,h,H,k,W,Z,B,G,z,fe,Ae,ne,i,_,g,m,v,y,b,D,T,L,F,E,ee,u,d,f,Te,p]}class t1 extends Un{constructor(e){super(),On(this,e,e1,Qw,Dn,{opacity:13,width:14,height:15,blur:16,far:17,smooth:18,resolution:19,frames:20,scale:21,color:22,depthWrite:23,refresh:24},null,[-1,-1])}get refresh(){return this.$$.ctx[24]}}const Ls=new Th,xn=new R,as=new R,zt=new It,Tf={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},zl={type:"change"},Cf={type:"mouseDown"},Rf={type:"mouseUp",mode:null},Pf={type:"objectChange"};class n1 extends pt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new c1;this._gizmo=n,this.add(n);const i=new l1;this._plane=i,this.add(i);const r=this;function o(v,y){let b=y;Object.defineProperty(r,v,{get:function(){return b!==void 0?b:y},set:function(D){b!==D&&(b=D,i[v]=D,n[v]=D,r.dispatchEvent({type:v+"-changed",value:D}),r.dispatchEvent(zl))}}),r[v]=y,i[v]=y,n[v]=y}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new R,c=new R,l=new It,u=new It,d=new R,h=new It,f=new R,p=new R,_=new R,g=0,m=new R;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",l),o("worldQuaternionStart",u),o("cameraPosition",d),o("cameraQuaternion",h),o("pointStart",f),o("pointEnd",p),o("rotationAxis",_),o("rotationAngle",g),o("eye",m),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new It,this._parentQuaternionInv=new It,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new It,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new It,this._scaleStart=new R,this._getPointer=i1.bind(this),this._onPointerDown=r1.bind(this),this._onPointerHover=s1.bind(this),this._onPointerMove=o1.bind(this),this._onPointerUp=a1.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(e){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(e)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Ls.setFromCamera(e,this.camera);const t=Vl(this._gizmo.picker[this.mode],Ls);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Ls.setFromCamera(e,this.camera);const t=Vl(this._plane,Ls,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Cf.mode=this.mode,this.dispatchEvent(Cf)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),i===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Ls.setFromCamera(e,this.camera);const o=Vl(this._plane,Ls,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(zt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(xn.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(xn.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),as.set(a,a,a)}else xn.copy(this.pointStart),as.copy(this.pointEnd),xn.applyQuaternion(this._worldQuaternionInv),as.applyQuaternion(this._worldQuaternionInv),as.divide(xn),t.search("X")===-1&&(as.x=1),t.search("Y")===-1&&(as.y=1),t.search("Z")===-1&&(as.z=1);i.scale.copy(this._scaleStart).multiply(as),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(xn.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(xn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Tf[t]),xn.copy(Tf[t]),r==="local"&&xn.applyQuaternion(this.worldQuaternion),xn.cross(this.eye),xn.length()===0?c=!0:this.rotationAngle=this._offset.dot(xn.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(zt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(zt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(zl),this.dispatchEvent(Pf)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Rf.mode=this.mode,this.dispatchEvent(Rf)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(zl),this.dispatchEvent(Pf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ls}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function i1(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function s1(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function r1(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function o1(s){this.enabled&&this.pointerMove(this._getPointer(s))}function a1(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Vl(s,e,t){const n=e.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Xa=new Gn,Nt=new R(0,1,0),If=new R(0,0,0),Lf=new Ve,qa=new It,sc=new It,xi=new R,Nf=new Ve,lo=new R(1,0,0),Fs=new R(0,1,0),uo=new R(0,0,1),Ya=new R,ro=new R,oo=new R;class c1 extends pt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Kn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new pn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const d=e.clone();d.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25,e.clone().color.setHex(16776960);const p=e.clone();p.color.setHex(7895160);const _=new rn(0,.04,.1,12);_.translate(0,.05,0);const g=new Zt(.08,.08,.08);g.translate(0,.04,0);const m=new st;m.setAttribute("position",new Ne([0,0,0,1,0,0],3));const v=new rn(.0075,.0075,.5,3);v.translate(0,.25,0);function y(Z,B){const G=new Fi(Z,.0075,3,64,B*Math.PI*2);return G.rotateY(Math.PI/2),G.rotateX(Math.PI/2),G}function b(){const Z=new st;return Z.setAttribute("position",new Ne([0,0,0,1,1,1],3)),Z}const D={X:[[new Se(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new Se(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new Se(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Se(_,o),[0,.5,0]],[new Se(_,o),[0,-.5,0],[Math.PI,0,0]],[new Se(v,o)]],Z:[[new Se(_,a),[0,0,.5],[Math.PI/2,0,0]],[new Se(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Se(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new Se(new zi(.1,0),d.clone()),[0,0,0]]],XY:[[new Se(new Zt(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new Se(new Zt(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Se(new Zt(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new Se(new rn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Se(new rn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Se(new rn(.2,0,.6,4),n),[0,.3,0]],[new Se(new rn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Se(new rn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Se(new rn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Se(new zi(.2,0),n)]],XY:[[new Se(new Zt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Se(new Zt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Se(new Zt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new Se(new zi(.01,2),i),null,null,null,"helper"]],END:[[new Se(new zi(.01,2),i),null,null,null,"helper"]],DELTA:[[new mn(b(),i),null,null,null,"helper"]],X:[[new mn(m,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new mn(m,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new mn(m,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},F={XYZE:[[new Se(y(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new Se(y(.5,.5),r)]],Y:[[new Se(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Se(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Se(y(.75,1),h),null,[0,Math.PI/2,0]]]},E={AXIS:[[new mn(m,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new Se(new Wr(.25,10,8),n)]],X:[[new Se(new Fi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Se(new Fi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Se(new Fi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Se(new Fi(.75,.1,2,24),n)]]},U={X:[[new Se(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new Se(v,r),[0,0,0],[0,0,-Math.PI/2]],[new Se(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Se(g,o),[0,.5,0]],[new Se(v,o)],[new Se(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Se(g,a),[0,0,.5],[Math.PI/2,0,0]],[new Se(v,a),[0,0,0],[Math.PI/2,0,0]],[new Se(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Se(new Zt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new Se(new Zt(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Se(new Zt(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Se(new Zt(.1,.1,.1),d.clone())]]},H={X:[[new Se(new rn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Se(new rn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Se(new rn(.2,0,.6,4),n),[0,.3,0]],[new Se(new rn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Se(new rn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Se(new rn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Se(new Zt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Se(new Zt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Se(new Zt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Se(new Zt(.2,.2,.2),n),[0,0,0]]]},k={X:[[new mn(m,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new mn(m,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new mn(m,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function W(Z){const B=new pt;for(const G in Z)for(let z=Z[G].length;z--;){const K=Z[G][z][0].clone(),oe=Z[G][z][1],fe=Z[G][z][2],Ae=Z[G][z][3],Ee=Z[G][z][4];K.name=G,K.tag=Ee,oe&&K.position.set(oe[0],oe[1],oe[2]),fe&&K.rotation.set(fe[0],fe[1],fe[2]),Ae&&K.scale.set(Ae[0],Ae[1],Ae[2]),K.updateMatrix();const V=K.geometry.clone();V.applyMatrix4(K.matrix),K.geometry=V,K.renderOrder=1/0,K.position.set(0,0,0),K.rotation.set(0,0,0),K.scale.set(1,1,1),B.add(K)}return B}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=W(D)),this.add(this.gizmo.rotate=W(F)),this.add(this.gizmo.scale=W(U)),this.add(this.picker.translate=W(T)),this.add(this.picker.rotate=W(S)),this.add(this.picker.scale=W(H)),this.add(this.helper.translate=W(L)),this.add(this.helper.rotate=W(E)),this.add(this.helper.scale=W(k)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:sc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){const o=i[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(zt.setFromEuler(Xa.set(0,0,0)),o.quaternion.copy(n).multiply(zt),Math.abs(Nt.copy(lo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(zt.setFromEuler(Xa.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(zt),Math.abs(Nt.copy(Fs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(zt.setFromEuler(Xa.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(zt),Math.abs(Nt.copy(uo).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(zt.setFromEuler(Xa.set(0,Math.PI/2,0)),Nt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Lf.lookAt(If,Nt,Fs)),o.quaternion.multiply(zt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),xn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),xn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(xn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Nt.copy(lo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Nt.copy(Fs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Nt.copy(uo).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Nt.copy(uo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Nt.copy(lo).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Nt.copy(Fs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(qa.copy(n),Nt.copy(this.eye).applyQuaternion(zt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Lf.lookAt(this.eye,If,Fs)),o.name==="X"&&(zt.setFromAxisAngle(lo,Math.atan2(-Nt.y,Nt.z)),zt.multiplyQuaternions(qa,zt),o.quaternion.copy(zt)),o.name==="Y"&&(zt.setFromAxisAngle(Fs,Math.atan2(Nt.x,Nt.z)),zt.multiplyQuaternions(qa,zt),o.quaternion.copy(zt)),o.name==="Z"&&(zt.setFromAxisAngle(uo,Math.atan2(Nt.y,Nt.x)),zt.multiplyQuaternions(qa,zt),o.quaternion.copy(zt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class l1 extends Se{constructor(){super(new ps(1e5,1e5,2,2),new Kn({visible:!1,wireframe:!0,side:ti,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ya.copy(lo).applyQuaternion(t==="local"?this.worldQuaternion:sc),ro.copy(Fs).applyQuaternion(t==="local"?this.worldQuaternion:sc),oo.copy(uo).applyQuaternion(t==="local"?this.worldQuaternion:sc),Nt.copy(ro),this.mode){case"translate":case"scale":switch(this.axis){case"X":Nt.copy(this.eye).cross(Ya),xi.copy(Ya).cross(Nt);break;case"Y":Nt.copy(this.eye).cross(ro),xi.copy(ro).cross(Nt);break;case"Z":Nt.copy(this.eye).cross(oo),xi.copy(oo).cross(Nt);break;case"XY":xi.copy(oo);break;case"YZ":xi.copy(Ya);break;case"XZ":Nt.copy(oo),xi.copy(ro);break;case"XYZ":case"E":xi.set(0,0,0);break}break;case"rotate":default:xi.set(0,0,0)}xi.length()===0?this.quaternion.copy(this.cameraQuaternion):(Nf.lookAt(xn.set(0,0,0),xi,Nt),this.quaternion.setFromRotationMatrix(Nf)),super.updateMatrixWorld(e)}}const Cg=()=>Yw("threlte-controls",{orbitControls:Vt(void 0),trackballControls:Vt(void 0)}),u1=s=>({ref:s&536870912}),Df=s=>({ref:s[29]});function h1(s){let e,t;const n=[{is:s[1]},s[2]];let i={};for(let r=0;r<n.length;r+=1)i=ri(i,n[r]);return e=new tn({props:i}),s[15](e),e.$on("dragging-changed",s[7]),e.$on("change",s[5]),{c(){mt(e.$$.fragment)},l(r){gt(e.$$.fragment,r)},m(r,o){_t(e,r,o),t=!0},p(r,o){const a=o&6?pc(n,[o&2&&{is:r[1]},o&4&&mc(r[2])]):{};e.$set(a)},i(r){t||(Me(e.$$.fragment,r),t=!0)},o(r){Ie(e.$$.fragment,r),t=!1},d(r){s[15](null),yt(e,r)}}}function d1(s){let e;const t=s[14].default,n=qi(t,s,s[18],Df);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&537133056)&&Yi(n,t,i,i[18],e?ji(t,i[18],r,u1):Zi(i[18]),Df)},i(i){e||(Me(n,i),e=!0)},o(i){Ie(n,i),e=!1},d(i){n&&n.d(i)}}}function f1(s){let e,t,n,i;e=new xg({props:{onChildMount:s[16],onChildDestroy:s[17],$$slots:{default:[h1]},$$scope:{ctx:s}}});const r=[{is:s[0]},s[3]];let o={$$slots:{default:[d1,({ref:a})=>({29:a}),({ref:a})=>a?536870912:0]},$$scope:{ctx:s}};for(let a=0;a<r.length;a+=1)o=ri(o,r[a]);return n=new tn({props:o}),{c(){mt(e.$$.fragment),t=ii(),mt(n.$$.fragment)},l(a){gt(e.$$.fragment,a),t=si(a),gt(n.$$.fragment,a)},m(a,c){_t(e,a,c),Ht(a,t,c),_t(n,a,c),i=!0},p(a,[c]){const l={};c&262166&&(l.$$scope={dirty:c,ctx:a}),e.$set(l);const u=c&9?pc(r,[c&1&&{is:a[0]},c&8&&mc(a[3])]):{};c&537133056&&(u.$$scope={dirty:c,ctx:a}),n.$set(u)},i(a){i||(Me(e.$$.fragment,a),Me(n.$$.fragment,a),i=!0)},o(a){Ie(e.$$.fragment,a),Ie(n.$$.fragment,a),i=!1},d(a){a&&kt(t),yt(e,a),yt(n,a)}}}function p1(s,e,t){const n=["autoPauseOrbitControls","autoPauseTrackballControls","object","group","controls"];let i=hs(e,n),r,o,{$$slots:a={},$$scope:c}=e,{autoPauseOrbitControls:l=!0}=e,{autoPauseTrackballControls:u=!0}=e,{object:d=void 0}=e;const{camera:h,renderer:f,invalidate:p,scene:_}=Qn(),{orbitControls:g,trackballControls:m}=Cg(),v=Vt(!1),y=Vt(l??!0),b=Vt(u??!0),D=G=>{v.set(G.value)};dn([g,v,y],([G,z,K])=>{if(!(!G||!G.enabled&&z))return G.enabled=!(z&&K),()=>{G.enabled=!0}}),dn([m,v,b],([G,z,K])=>{if(!(!G||!G.enabled&&z))return G.enabled=!(z&&K),()=>{G.enabled=!0}});const T=new Bi,L=fc(h,G=>new n1(G,f.domElement));en(s,L,G=>t(1,r=G));let{controls:F=r}=e;const E=Vt(d??T);dn([L,E],([G,z])=>(G.attach(z),()=>{G.detach()}));const S=["enabled","axis","mode","translationSnap","rotationSnap","scaleSnap","space","size","showX","showY","showZ","visible"];let U={},H={};const k=Lh();en(s,k,G=>t(4,o=G));function W(G){hc[G?"unshift":"push"](()=>{o=G,k.set(o)})}const Z=G=>{_.add(G)},B=G=>{_.remove(G)};return s.$$set=G=>{e=ri(ri({},e),go(G)),t(28,i=hs(e,n)),"autoPauseOrbitControls"in G&&t(11,l=G.autoPauseOrbitControls),"autoPauseTrackballControls"in G&&t(12,u=G.autoPauseTrackballControls),"object"in G&&t(13,d=G.object),"controls"in G&&t(10,F=G.controls),"$$scope"in G&&t(18,c=G.$$scope)},s.$$.update=()=>{s.$$.dirty&2048&&y.set(l??!0),s.$$.dirty&4096&&b.set(u??!0),s.$$.dirty&2&&t(10,F=r);{t(2,U={}),t(3,H={});for(let[G,z]of Object.entries(i))S.includes(G)?t(2,U[G]=z,U):t(3,H[G]=z,H)}},[T,r,U,H,o,p,_,D,L,k,F,l,u,d,a,W,Z,B,c]}class m1 extends Un{constructor(e){super(),On(this,e,p1,f1,Dn,{autoPauseOrbitControls:11,autoPauseTrackballControls:12,object:13,group:0,controls:10})}get group(){return this.$$.ctx[0]}}const Uf={type:"change"},Hl={type:"start"},Of={type:"end"},Za=new er,Ff=new Di,g1=Math.cos(70*ks.DEG2RAD);let _1=class extends Ei{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:Ds.ROTATE,TWO:Ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",Ue),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Uf),n.update(),r=i.NONE},this.update=function(){const x=new R,j=new It().setFromUnitVectors(e.up,new R(0,1,0)),le=j.clone().invert(),be=new R,Oe=new It,dt=new R,lt=2*Math.PI;return function($t=null){const Tt=n.object.position;x.copy(Tt).sub(n.target),x.applyQuaternion(j),a.setFromVector3(x),n.autoRotate&&r===i.NONE&&H(S($t)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Mt=n.minAzimuthAngle,Gt=n.maxAzimuthAngle;isFinite(Mt)&&isFinite(Gt)&&(Mt<-Math.PI?Mt+=lt:Mt>Math.PI&&(Mt-=lt),Gt<-Math.PI?Gt+=lt:Gt>Math.PI&&(Gt-=lt),Mt<=Gt?a.theta=Math.max(Mt,Math.min(Gt,a.theta)):a.theta=a.theta>(Mt+Gt)/2?Math.max(Mt,a.theta):Math.min(Gt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Sn=!1;if(n.zoomToCursor&&T||n.object.isOrthographicCamera)a.radius=oe(a.radius);else{const Fn=a.radius;a.radius=oe(a.radius*l),Sn=Fn!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(le),Tt.copy(n.target).add(x),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&T){let Fn=null;if(n.object.isPerspectiveCamera){const gi=x.length();Fn=oe(gi*l);const Ki=gi-Fn;n.object.position.addScaledVector(b,Ki),n.object.updateMatrixWorld(),Sn=!!Ki}else if(n.object.isOrthographicCamera){const gi=new R(D.x,D.y,0);gi.unproject(n.object);const Ki=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Sn=Ki!==n.object.zoom;const Ai=new R(D.x,D.y,0);Ai.unproject(n.object),n.object.position.sub(Ai).add(gi),n.object.updateMatrixWorld(),Fn=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Fn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Fn).add(n.object.position):(Za.origin.copy(n.object.position),Za.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Za.direction))<g1?e.lookAt(n.target):(Ff.setFromNormalAndCoplanarPoint(n.object.up,n.target),Za.intersectPlane(Ff,n.target))))}else if(n.object.isOrthographicCamera){const Fn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Fn!==n.object.zoom&&(n.object.updateProjectionMatrix(),Sn=!0)}return l=1,T=!1,Sn||be.distanceToSquared(n.object.position)>o||8*(1-Oe.dot(n.object.quaternion))>o||dt.distanceToSquared(n.target)>o?(n.dispatchEvent(Uf),be.copy(n.object.position),Oe.copy(n.object.quaternion),dt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Be),n.domElement.removeEventListener("pointerdown",Y),n.domElement.removeEventListener("pointercancel",ce),n.domElement.removeEventListener("wheel",me),n.domElement.removeEventListener("pointermove",se),n.domElement.removeEventListener("pointerup",ce),n.domElement.getRootNode().removeEventListener("keydown",Je,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ue),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Cu,c=new Cu;let l=1;const u=new R,d=new re,h=new re,f=new re,p=new re,_=new re,g=new re,m=new re,v=new re,y=new re,b=new R,D=new re;let T=!1;const L=[],F={};let E=!1;function S(x){return x!==null?2*Math.PI/60*n.autoRotateSpeed*x:2*Math.PI/60/60*n.autoRotateSpeed}function U(x){const j=Math.abs(x*.01);return Math.pow(.95,n.zoomSpeed*j)}function H(x){c.theta-=x}function k(x){c.phi-=x}const W=function(){const x=new R;return function(le,be){x.setFromMatrixColumn(be,0),x.multiplyScalar(-le),u.add(x)}}(),Z=function(){const x=new R;return function(le,be){n.screenSpacePanning===!0?x.setFromMatrixColumn(be,1):(x.setFromMatrixColumn(be,0),x.crossVectors(n.object.up,x)),x.multiplyScalar(le),u.add(x)}}(),B=function(){const x=new R;return function(le,be){const Oe=n.domElement;if(n.object.isPerspectiveCamera){const dt=n.object.position;x.copy(dt).sub(n.target);let lt=x.length();lt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*le*lt/Oe.clientHeight,n.object.matrix),Z(2*be*lt/Oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(le*(n.object.right-n.object.left)/n.object.zoom/Oe.clientWidth,n.object.matrix),Z(be*(n.object.top-n.object.bottom)/n.object.zoom/Oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(x,j){if(!n.zoomToCursor)return;T=!0;const le=n.domElement.getBoundingClientRect(),be=x-le.left,Oe=j-le.top,dt=le.width,lt=le.height;D.x=be/dt*2-1,D.y=-(Oe/lt)*2+1,b.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function oe(x){return Math.max(n.minDistance,Math.min(n.maxDistance,x))}function fe(x){d.set(x.clientX,x.clientY)}function Ae(x){K(x.clientX,x.clientX),m.set(x.clientX,x.clientY)}function Ee(x){p.set(x.clientX,x.clientY)}function V(x){h.set(x.clientX,x.clientY),f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;H(2*Math.PI*f.x/j.clientHeight),k(2*Math.PI*f.y/j.clientHeight),d.copy(h),n.update()}function ee(x){v.set(x.clientX,x.clientY),y.subVectors(v,m),y.y>0?G(U(y.y)):y.y<0&&z(U(y.y)),m.copy(v),n.update()}function ie(x){_.set(x.clientX,x.clientY),g.subVectors(_,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(_),n.update()}function ne(x){K(x.clientX,x.clientY),x.deltaY<0?z(U(x.deltaY)):x.deltaY>0&&G(U(x.deltaY)),n.update()}function Te(x){let j=!1;switch(x.code){case n.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),j=!0;break}j&&(x.preventDefault(),n.update())}function ue(x){if(L.length===1)d.set(x.pageX,x.pageY);else{const j=xt(x),le=.5*(x.pageX+j.x),be=.5*(x.pageY+j.y);d.set(le,be)}}function De(x){if(L.length===1)p.set(x.pageX,x.pageY);else{const j=xt(x),le=.5*(x.pageX+j.x),be=.5*(x.pageY+j.y);p.set(le,be)}}function q(x){const j=xt(x),le=x.pageX-j.x,be=x.pageY-j.y,Oe=Math.sqrt(le*le+be*be);m.set(0,Oe)}function de(x){n.enableZoom&&q(x),n.enablePan&&De(x)}function he(x){n.enableZoom&&q(x),n.enableRotate&&ue(x)}function ve(x){if(L.length==1)h.set(x.pageX,x.pageY);else{const le=xt(x),be=.5*(x.pageX+le.x),Oe=.5*(x.pageY+le.y);h.set(be,Oe)}f.subVectors(h,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;H(2*Math.PI*f.x/j.clientHeight),k(2*Math.PI*f.y/j.clientHeight),d.copy(h)}function _e(x){if(L.length===1)_.set(x.pageX,x.pageY);else{const j=xt(x),le=.5*(x.pageX+j.x),be=.5*(x.pageY+j.y);_.set(le,be)}g.subVectors(_,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(_)}function ye(x){const j=xt(x),le=x.pageX-j.x,be=x.pageY-j.y,Oe=Math.sqrt(le*le+be*be);v.set(0,Oe),y.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),G(y.y),m.copy(v);const dt=(x.pageX+j.x)*.5,lt=(x.pageY+j.y)*.5;K(dt,lt)}function O(x){n.enableZoom&&ye(x),n.enablePan&&_e(x)}function A(x){n.enableZoom&&ye(x),n.enableRotate&&ve(x)}function Y(x){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(x.pointerId),n.domElement.addEventListener("pointermove",se),n.domElement.addEventListener("pointerup",ce)),!vt(x)&&(ut(x),x.pointerType==="touch"?et(x):pe(x)))}function se(x){n.enabled!==!1&&(x.pointerType==="touch"?ke(x):Ze(x))}function ce(x){switch(ht(x),L.length){case 0:n.domElement.releasePointerCapture(x.pointerId),n.domElement.removeEventListener("pointermove",se),n.domElement.removeEventListener("pointerup",ce),n.dispatchEvent(Of),r=i.NONE;break;case 1:const j=L[0],le=F[j];et({pointerId:j,pageX:le.x,pageY:le.y});break}}function pe(x){let j;switch(x.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Ns.DOLLY:if(n.enableZoom===!1)return;Ae(x),r=i.DOLLY;break;case Ns.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enablePan===!1)return;Ee(x),r=i.PAN}else{if(n.enableRotate===!1)return;fe(x),r=i.ROTATE}break;case Ns.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enableRotate===!1)return;fe(x),r=i.ROTATE}else{if(n.enablePan===!1)return;Ee(x),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Hl)}function Ze(x){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;V(x);break;case i.DOLLY:if(n.enableZoom===!1)return;ee(x);break;case i.PAN:if(n.enablePan===!1)return;ie(x);break}}function me(x){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(x.preventDefault(),n.dispatchEvent(Hl),ne(Ge(x)),n.dispatchEvent(Of))}function Ge(x){const j=x.deltaMode,le={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(j){case 1:le.deltaY*=16;break;case 2:le.deltaY*=100;break}return x.ctrlKey&&!E&&(le.deltaY*=10),le}function Je(x){x.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(x){x.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Ue(x){n.enabled===!1||n.enablePan===!1||Te(x)}function et(x){switch(ft(x),L.length){case 1:switch(n.touches.ONE){case Ds.ROTATE:if(n.enableRotate===!1)return;ue(x),r=i.TOUCH_ROTATE;break;case Ds.PAN:if(n.enablePan===!1)return;De(x),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ds.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;de(x),r=i.TOUCH_DOLLY_PAN;break;case Ds.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(x),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Hl)}function ke(x){switch(ft(x),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(x),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;_e(x),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(x),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;A(x),n.update();break;default:r=i.NONE}}function Be(x){n.enabled!==!1&&x.preventDefault()}function ut(x){L.push(x.pointerId)}function ht(x){delete F[x.pointerId];for(let j=0;j<L.length;j++)if(L[j]==x.pointerId){L.splice(j,1);return}}function vt(x){for(let j=0;j<L.length;j++)if(L[j]==x.pointerId)return!0;return!1}function ft(x){let j=F[x.pointerId];j===void 0&&(j=new re,F[x.pointerId]=j),j.set(x.pageX,x.pageY)}function xt(x){const j=x.pointerId===L[0]?L[1]:L[0];return F[j]}n.domElement.addEventListener("contextmenu",Be),n.domElement.addEventListener("pointerdown",Y),n.domElement.addEventListener("pointercancel",ce),n.domElement.addEventListener("wheel",me,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Je,{passive:!0,capture:!0}),this.update()}};const y1=s=>({ref:s&1}),kf=s=>({ref:s[0]});function v1(s){let e;const t=s[6].default,n=qi(t,s,s[8],kf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&257)&&Yi(n,t,i,i[8],e?ji(t,i[8],r,y1):Zi(i[8]),kf)},i(i){e||(Me(n,i),e=!0)},o(i){Ie(n,i),e=!1},d(i){n&&n.d(i)}}}function x1(s){let e,t;const n=[{is:s[0]},s[5]];let i={$$slots:{default:[v1,({ref:r})=>({0:r}),({ref:r})=>r?1:0]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=ri(i,n[r]);return e=new tn({props:i}),s[7](e),e.$on("change",s[3]),{c(){mt(e.$$.fragment)},l(r){gt(e.$$.fragment,r)},m(r,o){_t(e,r,o),t=!0},p(r,[o]){const a=o&33?pc(n,[o&1&&{is:r[0]},o&32&&mc(r[5])]):{};o&257&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(Me(e.$$.fragment,r),t=!0)},o(r){Ie(e.$$.fragment,r),t=!1},d(r){s[7](null),yt(e,r)}}}function b1(s,e,t){const n=["ref"];let i=hs(e,n),r,o,{$$slots:a={},$$scope:c}=e;const l=Ph();en(s,l,y=>t(9,r=y));const u=y=>y.isCamera,{renderer:d,invalidate:h}=Qn();if(!u(r))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const f=new _1(r,d.domElement),{start:p,stop:_}=Ag(f.update,{autoStart:!1,autoInvalidate:!1}),g=Lh();en(s,g,y=>t(1,o=y));const{orbitControls:m}=Cg();m.set(f),Wn(()=>m.set(void 0));function v(y){hc[y?"unshift":"push"](()=>{o=y,g.set(o)})}return s.$$set=y=>{e=ri(ri({},e),go(y)),t(5,i=hs(e,n)),"$$scope"in y&&t(8,c=y.$$scope)},s.$$.update=()=>{i.autoRotate||i.enableDamping?p():_()},[f,o,l,h,g,i,a,v,c]}class jE extends Un{constructor(e){super(),On(this,e,b1,x1,Dn,{ref:0})}get ref(){return this.$$.ctx[0]}}new Ve;new Ve;new Se;`${Qe.logdepthbuf_pars_vertex}${Qe.fog_pars_vertex}${Qe.logdepthbuf_vertex}${Qe.fog_vertex}`;`${Qe.tonemapping_fragment}${Qe.colorspace_fragment}`;`${Qe.tonemapping_fragment}${Qe.colorspace_fragment}`;const M1=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,S1=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,w1=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,E1=w1,A1=`
	${M1}
	${S1}
`;`${E1}${A1}${Qe.tonemapping_fragment}${Qe.colorspace_fragment}`;const T1=s=>{const{camera:e}=Qn();let t=0,n=0;const i=new ResizeObserver(r=>{for(const o of r)t=o.contentRect.width,n=o.contentRect.height});return dn(s,r=>(r&&i.observe(r),()=>{r&&i.unobserve(r)})),(r,o)=>{o.pointer.update(a=>(a.set(r.offsetX/t*2-1,-(r.offsetY/n)*2+1),a)),o.raycaster.setFromCamera(o.pointer.current,e.current)}},Rg=Symbol("interactivity-context"),C1=()=>Hn(Rg),R1=s=>{const e=Tn((s==null?void 0:s.target)??Qn().renderer.domElement),t={enabled:Tn((s==null?void 0:s.enabled)??!0),pointer:Tn(new re),pointerOverTarget:Tn(!1),lastEvent:void 0,raycaster:new Th,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:e,compute:(s==null?void 0:s.compute)??T1(e),filter:s==null?void 0:s.filter};return Vn(Rg,t),t},Pg=Symbol("interactivity-handler-context"),Ig=()=>Hn(Pg),P1=()=>{Vn(Pg,{dispatchers:new WeakMap})},I1=()=>{const s=C1(),{dispatchers:e}=Ig();if(!s)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");const t=Ih();return{...s,addInteractiveObject:r=>{s.interactiveObjects.indexOf(r)>-1||(e.set(r,t),s.interactiveObjects.push(r))},removeInteractiveObject:r=>{const o=s.interactiveObjects.indexOf(r);s.interactiveObjects.splice(o,1),e.delete(r)}}},L1=s=>{const e=dc(),t=Vt(!1);return uc(()=>{t.set(Object.keys(e.$$.callbacks).some(n=>s.includes(n)))}),{hasEventHandlers:t}},N1=["click","contextmenu","dblclick","wheel","pointerup","pointerdown","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointermissed"],D1=()=>{qw("interactivity",({ref:s})=>{if(!s.isObject3D)return;const{addInteractiveObject:e,removeInteractiveObject:t}=I1(),n=Vt(s),{hasEventHandlers:i}=L1(N1);return dn([i,n],([r,o])=>{if(r)return e(o),()=>t(o)}),{onRefChange(r){n.set(r)}}})};function Bf(s){return`${(s.eventObject||s.object).uuid}/${s.index}${s.instanceId}`}const zf=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],U1=s=>{const{dispatchers:e}=Ig(),t=u=>{const d=u.offsetX-s.initialClick[0],h=u.offsetY-s.initialClick[1];return Math.round(Math.hypot(d,h))},n=u=>{for(const d of s.hovered.values())if(u.length===0||!u.some(h=>h.object===d.object&&h.index===d.index&&h.instanceId===d.instanceId)){const{eventObject:h}=d;s.hovered.delete(Bf(d));const f=e.get(h);if(f){const p={...d,intersections:u};f("pointerout",p),f("pointerleave",p)}}},i=JS(s.enabled),r=()=>{if(!i.current)return[];const u=[],d=s.raycaster.intersectObjects(s.interactiveObjects,!0),h=s.filter===void 0?d:s.filter(d,s);for(const f of h){let p=f.object;for(;p;)e.has(p)&&u.push({...f,eventObject:p}),p=p.parent}return u},o=(u,d)=>{var h;for(const f of d)(h=e.get(f))==null||h("pointermissed",u)},a=u=>u==="pointerleave"||u==="pointercancel"?()=>{s.pointerOverTarget.set(!1),n([])}:u==="pointerenter"?()=>{s.pointerOverTarget.set(!0)}:d=>{const h=u==="pointermove",f=u==="click"||u==="contextmenu"||u==="dblclick";s.compute(d,s);const p=r(),_=f?t(d):0;u==="pointerdown"&&(s.initialClick=[d.offsetX,d.offsetY],s.initialHits=p.map(m=>m.eventObject)),f&&p.length===0&&_<=2&&o(d,s.interactiveObjects),h&&n(p);let g=!1;e:for(const m of p){const v={stopped:g,...m,intersections:p,stopPropagation(){if(g=!0,v.stopped=!0,s.hovered.size>0&&Array.from(s.hovered.values()).some(b=>b.eventObject===m.eventObject)){const b=p.slice(0,p.indexOf(m));n([...b,m])}},camera:s.raycaster.camera,delta:_,nativeEvent:d,pointer:s.pointer.current,ray:s.raycaster.ray},y=e.get(m.eventObject);if(!y)return;if(h){if(y.hasEventListener("pointerover")||y.hasEventListener("pointerenter")||y.hasEventListener("pointerout")||y.hasEventListener("pointerleave")){const b=Bf(v),D=s.hovered.get(b);D?D.stopped&&v.stopPropagation():(s.hovered.set(b,v),y("pointerover",v),y("pointerenter",v))}y("pointermove",v)}else y.hasEventListener(u)?(!f||s.initialHits.includes(m.eventObject))&&(o(d,s.interactiveObjects.filter(D=>!s.initialHits.includes(D))),y(u,v)):f&&s.initialHits.includes(m.eventObject)&&o(d,s.interactiveObjects.filter(D=>!s.initialHits.includes(D)));if(g)break e}},c=u=>{zf.forEach(([d])=>{u.removeEventListener(d,a(d))})},l=u=>{zf.forEach(([d,h])=>{u.addEventListener(d,a(d),{passive:h})})};dn(s.target,u=>(u&&l(u),()=>{u&&c(u)}))},O1=s=>{P1();const e=R1(s);return D1(),U1(e),e};for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);var Lg={exports:{}};Lg.exports=qc;Lg.exports.default=qc;function qc(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=Ng(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,u,d,h,f;if(n&&(r=V1(s,e,r,t)),s.length>80*t){a=l=s[0],c=u=s[1];for(var p=t;p<i;p+=t)d=s[p],h=s[p+1],d<a&&(a=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Fo(r,o,t,a,c,f,0),o}function Ng(s,e,t,n,i){var r,o;if(i===Iu(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Vf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Vf(r,s[r],s[r+1],o);return o&&Yc(o,o.next)&&(Bo(o),o=o.next),o}function Qs(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Yc(t,t.next)||qt(t.prev,t,t.next)===0)){if(Bo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fo(s,e,t,n,i,r,o){if(s){!o&&r&&q1(s,n,i,r);for(var a=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?k1(s,n,i,r):F1(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Bo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=B1(Qs(s),e,t),Fo(s,e,t,n,i,r,2)):o===2&&z1(s,e,t,n,i,r):Fo(Qs(s),e,t,n,i,r,1);break}}}}function F1(s){var e=s.prev,t=s,n=s.next;if(qt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,h=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Nr(i,a,r,c,o,l,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function k1(s,e,t,n){var i=s.prev,r=s,o=s.next;if(qt(i,r,o)>=0)return!1;for(var a=i.x,c=r.x,l=o.x,u=i.y,d=r.y,h=o.y,f=a<c?a<l?a:l:c<l?c:l,p=u<d?u<h?u:h:d<h?d:h,_=a>c?a>l?a:l:c>l?c:l,g=u>d?u>h?u:h:d>h?d:h,m=Ru(f,p,e,t,n),v=Ru(_,g,e,t,n),y=s.prevZ,b=s.nextZ;y&&y.z>=m&&b&&b.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Nr(a,u,c,d,l,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Nr(a,u,c,d,l,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&Nr(a,u,c,d,l,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==o&&Nr(a,u,c,d,l,h,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function B1(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Yc(i,r)&&Dg(i,n,n.next,r)&&ko(i,r)&&ko(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Bo(n),Bo(n.next),n=s=r),n=n.next}while(n!==s);return Qs(n)}function z1(s,e,t,n,i,r){var o=s;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&j1(o,a)){var c=Ug(o,a);o=Qs(o,o.next),c=Qs(c,c.next),Fo(o,e,t,n,i,r,0),Fo(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function V1(s,e,t,n){var i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Ng(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Z1(l));for(i.sort(H1),r=0;r<i.length;r++)t=G1(i[r],t);return t}function H1(s,e){return s.x-e.x}function G1(s,e){var t=W1(s,e);if(!t)return e;var n=Ug(t,s);return Qs(n,n.next),Qs(t,t.next)}function W1(s,e){var t=e,n=s.x,i=s.y,r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>r&&(r=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,u=o.y,d=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Nr(i<u?n:r,i,l,u,i<u?r:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),ko(t,s)&&(h<d||h===d&&(t.x>o.x||t.x===o.x&&X1(o,t)))&&(o=t,d=h)),t=t.next;while(t!==c);return o}function X1(s,e){return qt(s.prev,s,e.prev)<0&&qt(e.next,s,s.next)<0}function q1(s,e,t,n){var i=s;do i.z===0&&(i.z=Ru(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Y1(i)}function Y1(s){var e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Ru(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Z1(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Nr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function j1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!J1(s,e)&&(ko(s,e)&&ko(e,s)&&K1(s,e)&&(qt(s.prev,s,e.prev)||qt(s,e.prev,e))||Yc(s,e)&&qt(s.prev,s,s.next)>0&&qt(e.prev,e,e.next)>0)}function qt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Yc(s,e){return s.x===e.x&&s.y===e.y}function Dg(s,e,t,n){var i=Ja(qt(s,e,t)),r=Ja(qt(s,e,n)),o=Ja(qt(t,n,s)),a=Ja(qt(t,n,e));return!!(i!==r&&o!==a||i===0&&ja(s,t,e)||r===0&&ja(s,n,e)||o===0&&ja(t,s,n)||a===0&&ja(t,e,n))}function ja(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ja(s){return s>0?1:s<0?-1:0}function J1(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Dg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ko(s,e){return qt(s.prev,s,s.next)<0?qt(s,e,s.next)>=0&&qt(s,s.prev,e)>=0:qt(s,e,s.prev)<0||qt(s,s.next,e)<0}function K1(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ug(s,e){var t=new Pu(s.i,s.x,s.y),n=new Pu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vf(s,e,t,n){var i=new Pu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Bo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Pu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}qc.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,o=Math.abs(Iu(s,0,r,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,u=a<c-1?e[a+1]*t:s.length;o-=Math.abs(Iu(s,l,u,t))}var d=0;for(a=0;a<n.length;a+=3){var h=n[a]*t,f=n[a+1]*t,p=n[a+2]*t;d+=Math.abs((s[h]-s[p])*(s[f+1]-s[h+1])-(s[h]-s[f])*(s[p+1]-s[h+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function Iu(s,e,t,n){for(var i=0,r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}qc.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var o=0;o<e;o++)t.vertices.push(s[i][r][o]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new re;new re;var Hf;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let a=0;a<i.length;a++){const c=i[a];for(;r.length>=2;){const l=r[r.length-1],u=r[r.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))r.pop();else break}r.push(c)}r.pop();let o=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],u=o[o.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))o.pop();else break}o.push(c)}return o.pop(),r.length==1&&o.length==1&&r[0].x==o[0].x&&r[0].y==o[0].y?r:r.concat(o)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(Hf||(Hf={}));const{subscribe:$1,set:Og,update:Q1}=Vt(void 0),eE=()=>{Og(void 0)},Fg={subscribe:$1,set:Og,update:Q1,reset:eE};function Cr(s,e="xyz"){var t;if(s.hasAttribute(e)){const n=(t=s.getAttribute(e))==null?void 0:t.split(" ");if(n){const i=[];for(const r of n)i.push(parseFloat(r));return i}}}function tE(s){return s?new Re(s[0],s[1],s[2]):new Re("white")}class Gf extends rg{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case h:case _:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case p:case g:case m:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case d:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function n(B,G,z,K,oe){let fe,Ae;const Ee=z.pixel_size>>3,V=z.width*z.height*Ee;if(G&&(Ae=oe.subarray(K,K+=z.colormap_length*(z.colormap_size>>3))),B){fe=new Uint8Array(V);let ee,ie,ne,Te=0;const ue=new Uint8Array(Ee);for(;Te<V;)if(ee=oe[K++],ie=(ee&127)+1,ee&128){for(ne=0;ne<Ee;++ne)ue[ne]=oe[K++];for(ne=0;ne<ie;++ne)fe.set(ue,Te+ne*Ee);Te+=Ee*ie}else{for(ie*=Ee,ne=0;ne<ie;++ne)fe[Te+ne]=oe[K++];Te+=ie}}else fe=oe.subarray(K,K+=G?z.width*z.height:V);return{pixel_data:fe,palettes:Ae}}function i(B,G,z,K,oe,fe,Ae,Ee,V){const ee=V;let ie,ne=0,Te,ue;const De=S.width;for(ue=G;ue!==K;ue+=z)for(Te=oe;Te!==Ae;Te+=fe,ne++)ie=Ee[ne],B[(Te+De*ue)*4+3]=255,B[(Te+De*ue)*4+2]=ee[ie*3+0],B[(Te+De*ue)*4+1]=ee[ie*3+1],B[(Te+De*ue)*4+0]=ee[ie*3+2];return B}function r(B,G,z,K,oe,fe,Ae,Ee){let V,ee=0,ie,ne;const Te=S.width;for(ne=G;ne!==K;ne+=z)for(ie=oe;ie!==Ae;ie+=fe,ee+=2)V=Ee[ee+0]+(Ee[ee+1]<<8),B[(ie+Te*ne)*4+0]=(V&31744)>>7,B[(ie+Te*ne)*4+1]=(V&992)>>2,B[(ie+Te*ne)*4+2]=(V&31)<<3,B[(ie+Te*ne)*4+3]=V&32768?0:255;return B}function o(B,G,z,K,oe,fe,Ae,Ee){let V=0,ee,ie;const ne=S.width;for(ie=G;ie!==K;ie+=z)for(ee=oe;ee!==Ae;ee+=fe,V+=3)B[(ee+ne*ie)*4+3]=255,B[(ee+ne*ie)*4+2]=Ee[V+0],B[(ee+ne*ie)*4+1]=Ee[V+1],B[(ee+ne*ie)*4+0]=Ee[V+2];return B}function a(B,G,z,K,oe,fe,Ae,Ee){let V=0,ee,ie;const ne=S.width;for(ie=G;ie!==K;ie+=z)for(ee=oe;ee!==Ae;ee+=fe,V+=4)B[(ee+ne*ie)*4+2]=Ee[V+0],B[(ee+ne*ie)*4+1]=Ee[V+1],B[(ee+ne*ie)*4+0]=Ee[V+2],B[(ee+ne*ie)*4+3]=Ee[V+3];return B}function c(B,G,z,K,oe,fe,Ae,Ee){let V,ee=0,ie,ne;const Te=S.width;for(ne=G;ne!==K;ne+=z)for(ie=oe;ie!==Ae;ie+=fe,ee++)V=Ee[ee],B[(ie+Te*ne)*4+0]=V,B[(ie+Te*ne)*4+1]=V,B[(ie+Te*ne)*4+2]=V,B[(ie+Te*ne)*4+3]=255;return B}function l(B,G,z,K,oe,fe,Ae,Ee){let V=0,ee,ie;const ne=S.width;for(ie=G;ie!==K;ie+=z)for(ee=oe;ee!==Ae;ee+=fe,V+=2)B[(ee+ne*ie)*4+0]=Ee[V+0],B[(ee+ne*ie)*4+1]=Ee[V+0],B[(ee+ne*ie)*4+2]=Ee[V+0],B[(ee+ne*ie)*4+3]=Ee[V+1];return B}function u(B,G,z,K,oe){let fe,Ae,Ee,V,ee,ie;switch((S.flags&v)>>y){default:case T:fe=0,Ee=1,ee=G,Ae=0,V=1,ie=z;break;case b:fe=0,Ee=1,ee=G,Ae=z-1,V=-1,ie=-1;break;case L:fe=G-1,Ee=-1,ee=-1,Ae=0,V=1,ie=z;break;case D:fe=G-1,Ee=-1,ee=-1,Ae=z-1,V=-1,ie=-1;break}if(k)switch(S.pixel_size){case 8:c(B,Ae,V,ie,fe,Ee,ee,K);break;case 16:l(B,Ae,V,ie,fe,Ee,ee,K);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:i(B,Ae,V,ie,fe,Ee,ee,K,oe);break;case 16:r(B,Ae,V,ie,fe,Ee,ee,K);break;case 24:o(B,Ae,V,ie,fe,Ee,ee,K);break;case 32:a(B,Ae,V,ie,fe,Ee,ee,K);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}const d=0,h=1,f=2,p=3,_=9,g=10,m=11,v=48,y=4,b=0,D=1,T=2,L=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let F=0;const E=new Uint8Array(e),S={id_length:E[F++],colormap_type:E[F++],image_type:E[F++],colormap_index:E[F++]|E[F++]<<8,colormap_length:E[F++]|E[F++]<<8,colormap_size:E[F++],origin:[E[F++]|E[F++]<<8,E[F++]|E[F++]<<8],width:E[F++]|E[F++]<<8,height:E[F++]|E[F++]<<8,pixel_size:E[F++],flags:E[F++]};if(t(S),S.id_length+F>e.length)throw new Error("THREE.TGALoader: No data.");F+=S.id_length;let U=!1,H=!1,k=!1;switch(S.image_type){case _:U=!0,H=!0;break;case h:H=!0;break;case g:U=!0;break;case f:break;case m:U=!0,k=!0;break;case p:k=!0;break}const W=new Uint8Array(S.width*S.height*4),Z=n(U,H,S,F,E);return u(W,S.width,S.height,Z.pixel_data,Z.palettes),{data:W,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:hi}}}class nE extends gn{load(e,t,n,i){const r=this,o=r.path===""?lc.extractUrlBase(e):r.path,a=new di(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){function n(w,M){const P=[],C=w.childNodes;for(let I=0,$=C.length;I<$;I++){const ae=C[I];ae.nodeName===M&&P.push(ae)}return P}function i(w){if(w.length===0)return[];const M=w.trim().split(/\s+/),P=new Array(M.length);for(let C=0,I=M.length;C<I;C++)P[C]=M[C];return P}function r(w){if(w.length===0)return[];const M=w.trim().split(/\s+/),P=new Array(M.length);for(let C=0,I=M.length;C<I;C++)P[C]=parseFloat(M[C]);return P}function o(w){if(w.length===0)return[];const M=w.trim().split(/\s+/),P=new Array(M.length);for(let C=0,I=M.length;C<I;C++)P[C]=parseInt(M[C]);return P}function a(w){return w.substring(1)}function c(){return"three_default_"+Hg++}function l(w){return Object.keys(w).length===0}function u(w){return{unit:d(n(w,"unit")[0]),upAxis:h(n(w,"up_axis")[0])}}function d(w){return w!==void 0&&w.hasAttribute("meter")===!0?parseFloat(w.getAttribute("meter")):1}function h(w){return w!==void 0?w.textContent:"Y_UP"}function f(w,M,P,C){const I=n(w,M)[0];if(I!==void 0){const $=n(I,P);for(let ae=0;ae<$.length;ae++)C($[ae])}}function p(w,M){for(const P in w){const C=w[P];C.build=M(w[P])}}function _(w,M){return w.build!==void 0||(w.build=M(w)),w.build}function g(w){const M={sources:{},samplers:{},channels:{}};let P=!1;for(let C=0,I=w.childNodes.length;C<I;C++){const $=w.childNodes[C];if($.nodeType!==1)continue;let ae;switch($.nodeName){case"source":ae=$.getAttribute("id"),M.sources[ae]=be($);break;case"sampler":ae=$.getAttribute("id"),M.samplers[ae]=m($);break;case"channel":ae=$.getAttribute("target"),M.channels[ae]=v($);break;case"animation":g($),P=!0;break;default:console.log($)}}P===!1&&(tt.animations[w.getAttribute("id")||ks.generateUUID()]=M)}function m(w){const M={inputs:{}};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"input":const $=a(I.getAttribute("source")),ae=I.getAttribute("semantic");M.inputs[ae]=$;break}}return M}function v(w){const M={};let C=w.getAttribute("target").split("/");const I=C.shift();let $=C.shift();const ae=$.indexOf("(")!==-1,Fe=$.indexOf(".")!==-1;if(Fe)C=$.split("."),$=C.shift(),M.member=C.shift();else if(ae){const we=$.split("(");$=we.shift();for(let Le=0;Le<we.length;Le++)we[Le]=parseInt(we[Le].replace(/\)/,""));M.indices=we}return M.id=I,M.sid=$,M.arraySyntax=ae,M.memberSyntax=Fe,M.sampler=a(w.getAttribute("source")),M}function y(w){const M=[],P=w.channels,C=w.samplers,I=w.sources;for(const $ in P)if(P.hasOwnProperty($)){const ae=P[$],Fe=C[ae.sampler],we=Fe.inputs.INPUT,Le=Fe.inputs.OUTPUT,Xe=I[we],ge=I[Le],We=D(ae,Xe,ge);S(We,M)}return M}function b(w){return _(tt.animations[w],y)}function D(w,M,P){const C=tt.nodes[w.id],I=_i(C.id),$=C.transforms[w.sid],ae=C.matrix.clone().transpose();let Fe,we,Le,Xe,ge,We;const ze={};switch($){case"matrix":for(Le=0,Xe=M.array.length;Le<Xe;Le++)if(Fe=M.array[Le],we=Le*P.stride,ze[Fe]===void 0&&(ze[Fe]={}),w.arraySyntax===!0){const Wt=P.array[we],Rt=w.indices[0]+4*w.indices[1];ze[Fe][Rt]=Wt}else for(ge=0,We=P.stride;ge<We;ge++)ze[Fe][ge]=P.array[we+ge];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break}const $e=T(ze,ae);return{name:I.uuid,keyframes:$e}}function T(w,M){const P=[];for(const I in w)P.push({time:parseFloat(I),value:w[I]});P.sort(C);for(let I=0;I<16;I++)U(P,I,M.elements[I]);return P;function C(I,$){return I.time-$.time}}const L=new R,F=new R,E=new It;function S(w,M){const P=w.keyframes,C=w.name,I=[],$=[],ae=[],Fe=[];for(let we=0,Le=P.length;we<Le;we++){const Xe=P[we],ge=Xe.time,We=Xe.value;He.fromArray(We).transpose(),He.decompose(L,E,F),I.push(ge),$.push(L.x,L.y,L.z),ae.push(E.x,E.y,E.z,E.w),Fe.push(F.x,F.y,F.z)}return $.length>0&&M.push(new Ks(C+".position",I,$)),ae.length>0&&M.push(new nr(C+".quaternion",I,ae)),Fe.length>0&&M.push(new Ks(C+".scale",I,Fe)),M}function U(w,M,P){let C,I=!0,$,ae;for($=0,ae=w.length;$<ae;$++)C=w[$],C.value[M]===void 0?C.value[M]=null:I=!1;if(I===!0)for($=0,ae=w.length;$<ae;$++)C=w[$],C.value[M]=P;else H(w,M)}function H(w,M){let P,C;for(let I=0,$=w.length;I<$;I++){const ae=w[I];if(ae.value[M]===null){if(P=k(w,I,M),C=W(w,I,M),P===null){ae.value[M]=C.value[M];continue}if(C===null){ae.value[M]=P.value[M];continue}Z(ae,P,C,M)}}}function k(w,M,P){for(;M>=0;){const C=w[M];if(C.value[P]!==null)return C;M--}return null}function W(w,M,P){for(;M<w.length;){const C=w[M];if(C.value[P]!==null)return C;M++}return null}function Z(w,M,P,C){if(P.time-M.time===0){w.value[C]=M.value[C];return}w.value[C]=(w.time-M.time)*(P.value[C]-M.value[C])/(P.time-M.time)+M.value[C]}function B(w){const M={name:w.getAttribute("id")||"default",start:parseFloat(w.getAttribute("start")||0),end:parseFloat(w.getAttribute("end")||0),animations:[]};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"instance_animation":M.animations.push(a(I.getAttribute("url")));break}}tt.clips[w.getAttribute("id")]=M}function G(w){const M=[],P=w.name,C=w.end-w.start||-1,I=w.animations;for(let $=0,ae=I.length;$<ae;$++){const Fe=b(I[$]);for(let we=0,Le=Fe.length;we<Le;we++)M.push(Fe[we])}return new $s(P,C,M)}function z(w){return _(tt.clips[w],G)}function K(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"skin":M.id=a(I.getAttribute("source")),M.skin=oe(I);break;case"morph":M.id=a(I.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}tt.controllers[w.getAttribute("id")]=M}function oe(w){const M={sources:{}};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"bind_shape_matrix":M.bindShapeMatrix=r(I.textContent);break;case"source":const $=I.getAttribute("id");M.sources[$]=be(I);break;case"joints":M.joints=fe(I);break;case"vertex_weights":M.vertexWeights=Ae(I);break}}return M}function fe(w){const M={inputs:{}};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"input":const $=I.getAttribute("semantic"),ae=a(I.getAttribute("source"));M.inputs[$]=ae;break}}return M}function Ae(w){const M={inputs:{}};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"input":const $=I.getAttribute("semantic"),ae=a(I.getAttribute("source")),Fe=parseInt(I.getAttribute("offset"));M.inputs[$]={id:ae,offset:Fe};break;case"vcount":M.vcount=o(I.textContent);break;case"v":M.v=o(I.textContent);break}}return M}function Ee(w){const M={id:w.id},P=tt.geometries[M.id];return w.skin!==void 0&&(M.skin=V(w.skin),P.sources.skinIndices=M.skin.indices,P.sources.skinWeights=M.skin.weights),M}function V(w){const P={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},C=w.sources,I=w.vertexWeights,$=I.vcount,ae=I.v,Fe=I.inputs.JOINT.offset,we=I.inputs.WEIGHT.offset,Le=w.sources[w.joints.inputs.JOINT],Xe=w.sources[w.joints.inputs.INV_BIND_MATRIX],ge=C[I.inputs.WEIGHT.id].array;let We=0,ze,$e,je;for(ze=0,je=$.length;ze<je;ze++){const Rt=$[ze],wt=[];for($e=0;$e<Rt;$e++){const Et=ae[We+Fe],Ti=ae[We+we],kn=ge[Ti];wt.push({index:Et,weight:kn}),We+=2}for(wt.sort(Wt),$e=0;$e<4;$e++){const Et=wt[$e];Et!==void 0?(P.indices.array.push(Et.index),P.weights.array.push(Et.weight)):(P.indices.array.push(0),P.weights.array.push(0))}}for(w.bindShapeMatrix?P.bindMatrix=new Ve().fromArray(w.bindShapeMatrix).transpose():P.bindMatrix=new Ve().identity(),ze=0,je=Le.array.length;ze<je;ze++){const Rt=Le.array[ze],wt=new Ve().fromArray(Xe.array,ze*Xe.stride).transpose();P.joints.push({name:Rt,boneInverse:wt})}return P;function Wt(Rt,wt){return wt.weight-Rt.weight}}function ee(w){return _(tt.controllers[w],Ee)}function ie(w){const M={init_from:n(w,"init_from")[0].textContent};tt.images[w.getAttribute("id")]=M}function ne(w){return w.build!==void 0?w.build:w.init_from}function Te(w){const M=tt.images[w];return M!==void 0?_(M,ne):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",w),null)}function ue(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"profile_COMMON":M.profile=De(I);break}}tt.effects[w.getAttribute("id")]=M}function De(w){const M={surfaces:{},samplers:{}};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"newparam":q(I,M);break;case"technique":M.technique=ve(I);break;case"extra":M.extra=se(I);break}}return M}function q(w,M){const P=w.getAttribute("sid");for(let C=0,I=w.childNodes.length;C<I;C++){const $=w.childNodes[C];if($.nodeType===1)switch($.nodeName){case"surface":M.surfaces[P]=de($);break;case"sampler2D":M.samplers[P]=he($);break}}}function de(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"init_from":M.init_from=I.textContent;break}}return M}function he(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"source":M.source=I.textContent;break}}return M}function ve(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"constant":case"lambert":case"blinn":case"phong":M.type=I.nodeName,M.parameters=_e(I);break;case"extra":M.extra=se(I);break}}return M}function _e(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":M[I.nodeName]=ye(I);break;case"transparent":M[I.nodeName]={opaque:I.hasAttribute("opaque")?I.getAttribute("opaque"):"A_ONE",data:ye(I)};break}}return M}function ye(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"color":M[I.nodeName]=r(I.textContent);break;case"float":M[I.nodeName]=parseFloat(I.textContent);break;case"texture":M[I.nodeName]={id:I.getAttribute("texture"),extra:O(I)};break}}return M}function O(w){const M={technique:{}};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"extra":A(I,M);break}}return M}function A(w,M){for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"technique":Y(I,M);break}}}function Y(w,M){for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":M.technique[I.nodeName]=parseFloat(I.textContent);break;case"wrapU":case"wrapV":I.textContent.toUpperCase()==="TRUE"?M.technique[I.nodeName]=1:I.textContent.toUpperCase()==="FALSE"?M.technique[I.nodeName]=0:M.technique[I.nodeName]=parseInt(I.textContent);break;case"bump":M[I.nodeName]=pe(I);break}}}function se(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"technique":M.technique=ce(I);break}}return M}function ce(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"double_sided":M[I.nodeName]=parseInt(I.textContent);break;case"bump":M[I.nodeName]=pe(I);break}}return M}function pe(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"texture":M[I.nodeName]={id:I.getAttribute("texture"),texcoord:I.getAttribute("texcoord"),extra:O(I)};break}}return M}function Ze(w){return w}function me(w){return _(tt.effects[w],Ze)}function Ge(w){const M={name:w.getAttribute("name")};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"instance_effect":M.url=a(I.getAttribute("url"));break}}tt.materials[w.getAttribute("id")]=M}function Je(w){let M,P=w.slice((w.lastIndexOf(".")-1>>>0)+2);switch(P=P.toLowerCase(),P){case"tga":M=$c;break;default:M=Nh}return M}function xe(w){const M=me(w.url),P=M.profile.technique;let C;switch(P.type){case"phong":case"blinn":C=new cc;break;case"lambert":C=new fh;break;default:C=new Kn;break}C.name=w.name||"";function I(we,Le=null){const Xe=M.profile.samplers[we.id];let ge=null;if(Xe!==void 0){const We=M.profile.surfaces[Xe.source];ge=Te(We.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ge=Te(we.id);if(ge!==null){const We=Je(ge);if(We!==void 0){const ze=We.load(ge),$e=we.extra;if($e!==void 0&&$e.technique!==void 0&&l($e.technique)===!1){const je=$e.technique;ze.wrapS=je.wrapU?ki:zn,ze.wrapT=je.wrapV?ki:zn,ze.offset.set(je.offsetU||0,je.offsetV||0),ze.repeat.set(je.repeatU||1,je.repeatV||1)}else ze.wrapS=ki,ze.wrapT=ki;return Le!==null&&(ze.colorSpace=Le),ze}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ge),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",we.id),null}const $=P.parameters;for(const we in $){const Le=$[we];switch(we){case"diffuse":Le.color&&C.color.fromArray(Le.color),Le.texture&&(C.map=I(Le.texture,Cn));break;case"specular":Le.color&&C.specular&&C.specular.fromArray(Le.color),Le.texture&&(C.specularMap=I(Le.texture));break;case"bump":Le.texture&&(C.normalMap=I(Le.texture));break;case"ambient":Le.texture&&(C.lightMap=I(Le.texture,Cn));break;case"shininess":Le.float&&C.shininess&&(C.shininess=Le.float);break;case"emission":Le.color&&C.emissive&&C.emissive.fromArray(Le.color),Le.texture&&(C.emissiveMap=I(Le.texture,Cn));break}}C.color.convertSRGBToLinear(),C.specular&&C.specular.convertSRGBToLinear(),C.emissive&&C.emissive.convertSRGBToLinear();let ae=$.transparent,Fe=$.transparency;if(Fe===void 0&&ae&&(Fe={float:1}),ae===void 0&&Fe&&(ae={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ae&&Fe)if(ae.data.texture)C.transparent=!0;else{const we=ae.data.color;switch(ae.opaque){case"A_ONE":C.opacity=we[3]*Fe.float;break;case"RGB_ZERO":C.opacity=1-we[0]*Fe.float;break;case"A_ZERO":C.opacity=1-we[3]*Fe.float;break;case"RGB_ONE":C.opacity=we[0]*Fe.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ae.opaque)}C.opacity<1&&(C.transparent=!0)}if(P.extra!==void 0&&P.extra.technique!==void 0){const we=P.extra.technique;for(const Le in we){const Xe=we[Le];switch(Le){case"double_sided":C.side=Xe===1?ti:wi;break;case"bump":C.normalMap=I(Xe.texture),C.normalScale=new re(1,1);break}}}return C}function Ue(w){return _(tt.materials[w],xe)}function et(w){const M={name:w.getAttribute("name")};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"optics":M.optics=ke(I);break}}tt.cameras[w.getAttribute("id")]=M}function ke(w){for(let M=0;M<w.childNodes.length;M++){const P=w.childNodes[M];switch(P.nodeName){case"technique_common":return Be(P)}}return{}}function Be(w){const M={};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];switch(C.nodeName){case"perspective":case"orthographic":M.technique=C.nodeName,M.parameters=ut(C);break}}return M}function ut(w){const M={};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];switch(C.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":M[C.nodeName]=parseFloat(C.textContent);break}}return M}function ht(w){let M;switch(w.optics.technique){case"perspective":M=new on(w.optics.parameters.yfov,w.optics.parameters.aspect_ratio,w.optics.parameters.znear,w.optics.parameters.zfar);break;case"orthographic":let P=w.optics.parameters.ymag,C=w.optics.parameters.xmag;const I=w.optics.parameters.aspect_ratio;C=C===void 0?P*I:C,P=P===void 0?C/I:P,C*=.5,P*=.5,M=new Hr(-C,C,P,-P,w.optics.parameters.znear,w.optics.parameters.zfar);break;default:M=new on;break}return M.name=w.name||"",M}function vt(w){const M=tt.cameras[w];return M!==void 0?_(M,ht):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",w),null)}function ft(w){let M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"technique_common":M=xt(I);break}}tt.lights[w.getAttribute("id")]=M}function xt(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"directional":case"point":case"spot":case"ambient":M.technique=I.nodeName,M.parameters=qe(I)}}return M}function qe(w){const M={};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"color":const $=r(I.textContent);M.color=new Re().fromArray($).convertSRGBToLinear();break;case"falloff_angle":M.falloffAngle=parseFloat(I.textContent);break;case"quadratic_attenuation":const ae=parseFloat(I.textContent);M.distance=ae?Math.sqrt(1/ae):0;break}}return M}function x(w){let M;switch(w.technique){case"directional":M=new bh;break;case"point":M=new xh;break;case"spot":M=new vh;break;case"ambient":M=new Mh;break}return w.parameters.color&&M.color.copy(w.parameters.color),w.parameters.distance&&(M.distance=w.parameters.distance),M}function j(w){const M=tt.lights[w];return M!==void 0?_(M,x):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",w),null)}function le(w){const M={name:w.getAttribute("name"),sources:{},vertices:{},primitives:[]},P=n(w,"mesh")[0];if(P!==void 0){for(let C=0;C<P.childNodes.length;C++){const I=P.childNodes[C];if(I.nodeType!==1)continue;const $=I.getAttribute("id");switch(I.nodeName){case"source":M.sources[$]=be(I);break;case"vertices":M.vertices=Oe(I);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",I.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":M.primitives.push(dt(I));break;default:console.log(I)}}tt.geometries[w.getAttribute("id")]=M}}function be(w){const M={array:[],stride:3};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"float_array":M.array=r(C.textContent);break;case"Name_array":M.array=i(C.textContent);break;case"technique_common":const I=n(C,"accessor")[0];I!==void 0&&(M.stride=parseInt(I.getAttribute("stride")));break}}return M}function Oe(w){const M={};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];C.nodeType===1&&(M[C.getAttribute("semantic")]=a(C.getAttribute("source")))}return M}function dt(w){const M={type:w.nodeName,material:w.getAttribute("material"),count:parseInt(w.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let P=0,C=w.childNodes.length;P<C;P++){const I=w.childNodes[P];if(I.nodeType===1)switch(I.nodeName){case"input":const $=a(I.getAttribute("source")),ae=I.getAttribute("semantic"),Fe=parseInt(I.getAttribute("offset")),we=parseInt(I.getAttribute("set")),Le=we>0?ae+we:ae;M.inputs[Le]={id:$,offset:Fe},M.stride=Math.max(M.stride,Fe+1),ae==="TEXCOORD"&&(M.hasUV=!0);break;case"vcount":M.vcount=o(I.textContent);break;case"p":M.p=o(I.textContent);break}}return M}function lt(w){const M={};for(let P=0;P<w.length;P++){const C=w[P];M[C.type]===void 0&&(M[C.type]=[]),M[C.type].push(C)}return M}function Dt(w){let M=0;for(let P=0,C=w.length;P<C;P++)w[P].hasUV===!0&&M++;M>0&&M<w.length&&(w.uvsNeedsFix=!0)}function $t(w){const M={},P=w.sources,C=w.vertices,I=w.primitives;if(I.length===0)return{};const $=lt(I);for(const ae in $){const Fe=$[ae];Dt(Fe),M[ae]=Tt(Fe,P,C)}return M}function Tt(w,M,P){const C={},I={array:[],stride:0},$={array:[],stride:0},ae={array:[],stride:0},Fe={array:[],stride:0},we={array:[],stride:0},Le={array:[],stride:4},Xe={array:[],stride:4},ge=new st,We=[];let ze=0;for(let $e=0;$e<w.length;$e++){const je=w[$e],Wt=je.inputs;let Rt=0;switch(je.type){case"lines":case"linestrips":Rt=je.count*2;break;case"triangles":Rt=je.count*3;break;case"polylist":for(let wt=0;wt<je.count;wt++){const Et=je.vcount[wt];switch(Et){case 3:Rt+=3;break;case 4:Rt+=6;break;default:Rt+=(Et-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",je.type)}ge.addGroup(ze,Rt,$e),ze+=Rt,je.material&&We.push(je.material);for(const wt in Wt){const Et=Wt[wt];switch(wt){case"VERTEX":for(const Ti in P){const kn=P[Ti];switch(Ti){case"POSITION":const rr=I.array.length;if(Mt(je,M[kn],Et.offset,I.array),I.stride=M[kn].stride,M.skinWeights&&M.skinIndices&&(Mt(je,M.skinIndices,Et.offset,Le.array),Mt(je,M.skinWeights,Et.offset,Xe.array)),je.hasUV===!1&&w.uvsNeedsFix===!0){const Gg=(I.array.length-rr)/I.stride;for(let Uh=0;Uh<Gg;Uh++)ae.array.push(0,0)}break;case"NORMAL":Mt(je,M[kn],Et.offset,$.array),$.stride=M[kn].stride;break;case"COLOR":Mt(je,M[kn],Et.offset,we.array),we.stride=M[kn].stride;break;case"TEXCOORD":Mt(je,M[kn],Et.offset,ae.array),ae.stride=M[kn].stride;break;case"TEXCOORD1":Mt(je,M[kn],Et.offset,Fe.array),ae.stride=M[kn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ti)}}break;case"NORMAL":Mt(je,M[Et.id],Et.offset,$.array),$.stride=M[Et.id].stride;break;case"COLOR":Mt(je,M[Et.id],Et.offset,we.array,!0),we.stride=M[Et.id].stride;break;case"TEXCOORD":Mt(je,M[Et.id],Et.offset,ae.array),ae.stride=M[Et.id].stride;break;case"TEXCOORD1":Mt(je,M[Et.id],Et.offset,Fe.array),Fe.stride=M[Et.id].stride;break}}}return I.array.length>0&&ge.setAttribute("position",new Ne(I.array,I.stride)),$.array.length>0&&ge.setAttribute("normal",new Ne($.array,$.stride)),we.array.length>0&&ge.setAttribute("color",new Ne(we.array,we.stride)),ae.array.length>0&&ge.setAttribute("uv",new Ne(ae.array,ae.stride)),Fe.array.length>0&&ge.setAttribute("uv1",new Ne(Fe.array,Fe.stride)),Le.array.length>0&&ge.setAttribute("skinIndex",new Ne(Le.array,Le.stride)),Xe.array.length>0&&ge.setAttribute("skinWeight",new Ne(Xe.array,Xe.stride)),C.data=ge,C.type=w[0].type,C.materialKeys=We,C}function Mt(w,M,P,C,I=!1){const $=w.p,ae=w.stride,Fe=w.vcount;function we(ge){let We=$[ge+P]*Xe;const ze=We+Xe;for(;We<ze;We++)C.push(Le[We]);if(I){const $e=C.length-Xe-1;Ko.setRGB(C[$e+0],C[$e+1],C[$e+2]).convertSRGBToLinear(),C[$e+0]=Ko.r,C[$e+1]=Ko.g,C[$e+2]=Ko.b}}const Le=M.array,Xe=M.stride;if(w.vcount!==void 0){let ge=0;for(let We=0,ze=Fe.length;We<ze;We++){const $e=Fe[We];if($e===4){const je=ge+ae*0,Wt=ge+ae*1,Rt=ge+ae*2,wt=ge+ae*3;we(je),we(Wt),we(wt),we(Wt),we(Rt),we(wt)}else if($e===3){const je=ge+ae*0,Wt=ge+ae*1,Rt=ge+ae*2;we(je),we(Wt),we(Rt)}else if($e>4)for(let je=1,Wt=$e-2;je<=Wt;je++){const Rt=ge+ae*0,wt=ge+ae*je,Et=ge+ae*(je+1);we(Rt),we(wt),we(Et)}ge+=ae*$e}}else for(let ge=0,We=$.length;ge<We;ge+=ae)we(ge)}function Gt(w){return _(tt.geometries[w],$t)}function Sn(w){const M={name:w.getAttribute("name")||"",joints:{},links:[]};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"technique_common":Ki(C,M);break}}tt.kinematicsModels[w.getAttribute("id")]=M}function Fn(w){return w.build!==void 0?w.build:w}function gi(w){return _(tt.kinematicsModels[w],Fn)}function Ki(w,M){for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"joint":M.joints[C.getAttribute("sid")]=Ai(C);break;case"link":M.links.push(_s(C));break}}}function Ai(w){let M;for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"prismatic":case"revolute":M=Zo(C);break}}return M}function Zo(w){const M={sid:w.getAttribute("sid"),name:w.getAttribute("name")||"",axis:new R,limits:{min:0,max:0},type:w.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"axis":const I=r(C.textContent);M.axis.fromArray(I);break;case"limits":const $=C.getElementsByTagName("max")[0],ae=C.getElementsByTagName("min")[0];M.limits.max=parseFloat($.textContent),M.limits.min=parseFloat(ae.textContent);break}}return M.limits.min>=M.limits.max&&(M.static=!0),M.middlePosition=(M.limits.min+M.limits.max)/2,M}function _s(w){const M={sid:w.getAttribute("sid"),name:w.getAttribute("name")||"",attachments:[],transforms:[]};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"attachment_full":M.attachments.push(jo(C));break;case"matrix":case"translate":case"rotate":M.transforms.push(Xr(C));break}}return M}function jo(w){const M={joint:w.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"link":M.links.push(_s(C));break;case"matrix":case"translate":case"rotate":M.transforms.push(Xr(C));break}}return M}function Xr(w){const M={type:w.nodeName},P=r(w.textContent);switch(M.type){case"matrix":M.obj=new Ve,M.obj.fromArray(P).transpose();break;case"translate":M.obj=new R,M.obj.fromArray(P);break;case"rotate":M.obj=new R,M.obj.fromArray(P),M.angle=ks.degToRad(P[3]);break}return M}function Zc(w){const M={name:w.getAttribute("name")||"",rigidBodies:{}};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"rigid_body":M.rigidBodies[C.getAttribute("name")]={},jc(C,M.rigidBodies[C.getAttribute("name")]);break}}tt.physicsModels[w.getAttribute("id")]=M}function jc(w,M){for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"technique_common":Jc(C,M);break}}}function Jc(w,M){for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"inertia":M.inertia=r(C.textContent);break;case"mass":M.mass=r(C.textContent)[0];break}}}function N(w){const M={bindJointAxis:[]};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"bind_joint_axis":M.bindJointAxis.push(X(C));break}}tt.kinematicsScenes[a(w.getAttribute("url"))]=M}function X(w){const M={target:w.getAttribute("target").split("/").pop()};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"axis":const I=C.getElementsByTagName("param")[0];M.axis=I.textContent;const $=M.axis.split("inst_").pop().split("axis")[0];M.jointIndex=$.substring(0,$.length-1);break}}return M}function Q(w){return w.build!==void 0?w.build:w}function te(w){return _(tt.kinematicsScenes[w],Q)}function J(){const w=Object.keys(tt.kinematicsModels)[0],M=Object.keys(tt.kinematicsScenes)[0],P=Object.keys(tt.visualScenes)[0];if(w===void 0||M===void 0)return;const C=gi(w),I=te(M),$=$i(P),ae=I.bindJointAxis,Fe={};for(let Xe=0,ge=ae.length;Xe<ge;Xe++){const We=ae[Xe],ze=St.querySelector('[sid="'+We.target+'"]');if(ze){const $e=ze.parentElement;we(We.jointIndex,$e)}}function we(Xe,ge){const We=ge.getAttribute("name"),ze=C.joints[Xe];$.traverse(function($e){$e.name===We&&(Fe[Xe]={object:$e,transforms:Pe(ge),joint:ze,position:ze.zeroPosition})})}const Le=new Ve;Dh={joints:C&&C.joints,getJointValue:function(Xe){const ge=Fe[Xe];if(ge)return ge.position;console.warn("THREE.ColladaLoader: Joint "+Xe+" doesn't exist.")},setJointValue:function(Xe,ge){const We=Fe[Xe];if(We){const ze=We.joint;if(ge>ze.limits.max||ge<ze.limits.min)console.warn("THREE.ColladaLoader: Joint "+Xe+" value "+ge+" outside of limits (min: "+ze.limits.min+", max: "+ze.limits.max+").");else if(ze.static)console.warn("THREE.ColladaLoader: Joint "+Xe+" is static.");else{const $e=We.object,je=ze.axis,Wt=We.transforms;He.identity();for(let Rt=0;Rt<Wt.length;Rt++){const wt=Wt[Rt];if(wt.sid&&wt.sid.indexOf(Xe)!==-1)switch(ze.type){case"revolute":He.multiply(Le.makeRotationAxis(je,ks.degToRad(ge)));break;case"prismatic":He.multiply(Le.makeTranslation(je.x*ge,je.y*ge,je.z*ge));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+ze.type);break}else switch(wt.type){case"matrix":He.multiply(wt.obj);break;case"translate":He.multiply(Le.makeTranslation(wt.obj.x,wt.obj.y,wt.obj.z));break;case"scale":He.scale(wt.obj);break;case"rotate":He.multiply(Le.makeRotationAxis(wt.obj,wt.angle));break}}$e.matrix.copy(He),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),Fe[Xe].position=ge}}else console.log("THREE.ColladaLoader: "+Xe+" does not exist.")}}}function Pe(w){const M=[],P=St.querySelector('[id="'+w.id+'"]');for(let C=0;C<P.childNodes.length;C++){const I=P.childNodes[C];if(I.nodeType!==1)continue;let $,ae;switch(I.nodeName){case"matrix":$=r(I.textContent);const Fe=new Ve().fromArray($).transpose();M.push({sid:I.getAttribute("sid"),type:I.nodeName,obj:Fe});break;case"translate":case"scale":$=r(I.textContent),ae=new R().fromArray($),M.push({sid:I.getAttribute("sid"),type:I.nodeName,obj:ae});break;case"rotate":$=r(I.textContent),ae=new R().fromArray($);const we=ks.degToRad($[3]);M.push({sid:I.getAttribute("sid"),type:I.nodeName,obj:ae,angle:we});break}}return M}function Ye(w){const M=w.getElementsByTagName("node");for(let P=0;P<M.length;P++){const C=M[P];C.hasAttribute("id")===!1&&C.setAttribute("id",c())}}const He=new Ve,Ke=new R;function nt(w){const M={name:w.getAttribute("name")||"",type:w.getAttribute("type"),id:w.getAttribute("id"),sid:w.getAttribute("sid"),matrix:new Ve,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];if(C.nodeType!==1)continue;let I;switch(C.nodeName){case"node":M.nodes.push(C.getAttribute("id")),nt(C);break;case"instance_camera":M.instanceCameras.push(a(C.getAttribute("url")));break;case"instance_controller":M.instanceControllers.push(it(C));break;case"instance_light":M.instanceLights.push(a(C.getAttribute("url")));break;case"instance_geometry":M.instanceGeometries.push(it(C));break;case"instance_node":M.instanceNodes.push(a(C.getAttribute("url")));break;case"matrix":I=r(C.textContent),M.matrix.multiply(He.fromArray(I).transpose()),M.transforms[C.getAttribute("sid")]=C.nodeName;break;case"translate":I=r(C.textContent),Ke.fromArray(I),M.matrix.multiply(He.makeTranslation(Ke.x,Ke.y,Ke.z)),M.transforms[C.getAttribute("sid")]=C.nodeName;break;case"rotate":I=r(C.textContent);const $=ks.degToRad(I[3]);M.matrix.multiply(He.makeRotationAxis(Ke.fromArray(I),$)),M.transforms[C.getAttribute("sid")]=C.nodeName;break;case"scale":I=r(C.textContent),M.matrix.scale(Ke.fromArray(I)),M.transforms[C.getAttribute("sid")]=C.nodeName;break;case"extra":break;default:console.log(C)}}return ot(M.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",M.id):tt.nodes[M.id]=M,M}function it(w){const M={id:a(w.getAttribute("url")),materials:{},skeletons:[]};for(let P=0;P<w.childNodes.length;P++){const C=w.childNodes[P];switch(C.nodeName){case"bind_material":const I=C.getElementsByTagName("instance_material");for(let $=0;$<I.length;$++){const ae=I[$],Fe=ae.getAttribute("symbol"),we=ae.getAttribute("target");M.materials[Fe]=a(we)}break;case"skeleton":M.skeletons.push(a(C.textContent));break}}return M}function rt(w,M){const P=[],C=[];let I,$,ae;for(I=0;I<w.length;I++){const Le=w[I];let Xe;if(ot(Le))Xe=_i(Le),Bt(Xe,M,P);else if(Jo(Le)){const We=tt.visualScenes[Le].children;for(let ze=0;ze<We.length;ze++){const $e=We[ze];if($e.type==="JOINT"){const je=_i($e.id);Bt(je,M,P)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Le)}for(I=0;I<M.length;I++)for($=0;$<P.length;$++)if(ae=P[$],ae.bone.name===M[I].name){C[I]=ae,ae.processed=!0;break}for(I=0;I<P.length;I++)ae=P[I],ae.processed===!1&&(C.push(ae),ae.processed=!0);const Fe=[],we=[];for(I=0;I<C.length;I++)ae=C[I],Fe.push(ae.bone),we.push(ae.boneInverse);return new Xo(Fe,we)}function Bt(w,M,P){w.traverse(function(C){if(C.isBone===!0){let I;for(let $=0;$<M.length;$++){const ae=M[$];if(ae.name===C.name){I=ae.boneInverse;break}}I===void 0&&(I=new Ve),P.push({bone:C,boneInverse:I,processed:!1})}})}function wn(w){const M=[],P=w.matrix,C=w.nodes,I=w.type,$=w.instanceCameras,ae=w.instanceControllers,Fe=w.instanceLights,we=w.instanceGeometries,Le=w.instanceNodes;for(let ge=0,We=C.length;ge<We;ge++)M.push(_i(C[ge]));for(let ge=0,We=$.length;ge<We;ge++){const ze=vt($[ge]);ze!==null&&M.push(ze.clone())}for(let ge=0,We=ae.length;ge<We;ge++){const ze=ae[ge],$e=ee(ze.id),je=Gt($e.id),Wt=Ut(je,ze.materials),Rt=ze.skeletons,wt=$e.skin.joints,Et=rt(Rt,wt);for(let Ti=0,kn=Wt.length;Ti<kn;Ti++){const rr=Wt[Ti];rr.isSkinnedMesh&&(rr.bind(Et,$e.skin.bindMatrix),rr.normalizeSkinWeights()),M.push(rr)}}for(let ge=0,We=Fe.length;ge<We;ge++){const ze=j(Fe[ge]);ze!==null&&M.push(ze.clone())}for(let ge=0,We=we.length;ge<We;ge++){const ze=we[ge],$e=Gt(ze.id),je=Ut($e,ze.materials);for(let Wt=0,Rt=je.length;Wt<Rt;Wt++)M.push(je[Wt])}for(let ge=0,We=Le.length;ge<We;ge++)M.push(_i(Le[ge]).clone());let Xe;if(C.length===0&&M.length===1)Xe=M[0];else{Xe=I==="JOINT"?new Rc:new Bi;for(let ge=0;ge<M.length;ge++)Xe.add(M[ge])}return Xe.name=I==="JOINT"?w.sid:w.name,Xe.matrix.copy(P),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe}const nn=new Kn({name:gn.DEFAULT_MATERIAL_NAME,color:16711935});function oi(w,M){const P=[];for(let C=0,I=w.length;C<I;C++){const $=M[w[C]];$===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",w[C]),P.push(nn)):P.push(Ue($))}return P}function Ut(w,M){const P=[];for(const C in w){const I=w[C],$=oi(I.materialKeys,M);if($.length===0&&(C==="lines"||C==="linestrips"?$.push(new pn):$.push(new cc)),C==="lines"||C==="linestrips")for(let Le=0,Xe=$.length;Le<Xe;Le++){const ge=$[Le];if(ge.isMeshPhongMaterial===!0||ge.isMeshLambertMaterial===!0){const We=new pn;We.color.copy(ge.color),We.opacity=ge.opacity,We.transparent=ge.transparent,$[Le]=We}}const ae=I.data.attributes.skinIndex!==void 0,Fe=$.length===1?$[0]:$;let we;switch(C){case"lines":we=new fi(I.data,Fe);break;case"linestrips":we=new mn(I.data,Fe);break;case"triangles":case"polylist":ae?we=new sh(I.data,Fe):we=new Se(I.data,Fe);break}P.push(we)}return P}function ot(w){return tt.nodes[w]!==void 0}function _i(w){return _(tt.nodes[w],wn)}function Ot(w){const M={name:w.getAttribute("name"),children:[]};Ye(w);const P=n(w,"node");for(let C=0;C<P.length;C++)M.children.push(nt(P[C]));tt.visualScenes[w.getAttribute("id")]=M}function yi(w){const M=new Bi;M.name=w.name;const P=w.children;for(let C=0;C<P.length;C++){const I=P[C];M.add(_i(I.id))}return M}function Jo(w){return tt.visualScenes[w]!==void 0}function $i(w){return _(tt.visualScenes[w],yi)}function qr(w){const M=n(w,"instance_visual_scene")[0];return $i(a(M.getAttribute("url")))}function un(){const w=tt.clips;if(l(w)===!0){if(l(tt.animations)===!1){const M=[];for(const P in tt.animations){const C=b(P);for(let I=0,$=C.length;I<$;I++)M.push(C[I])}$o.push(new $s("default",-1,M))}}else for(const M in w)$o.push(z(M))}function vi(w){let M="";const P=[w];for(;P.length;){const C=P.shift();C.nodeType===Node.TEXT_NODE?M+=C.textContent:(M+=`
`,P.push.apply(P,C.childNodes))}return M.trim()}if(e.length===0)return{scene:new Tc};const sr=new DOMParser().parseFromString(e,"application/xml"),St=n(sr,"COLLADA")[0],ys=sr.getElementsByTagName("parsererror")[0];if(ys!==void 0){const w=n(ys,"div")[0];let M;return w?M=w.textContent:M=vi(ys),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,M),null}const Kc=St.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Kc);const Yr=u(n(St,"asset")[0]),Nh=new og(this.manager);Nh.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let $c;Gf&&($c=new Gf(this.manager),$c.setPath(this.resourcePath||t));const Ko=new Re,$o=[];let Dh={},Hg=0;const tt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(St,"library_animations","animation",g),f(St,"library_animation_clips","animation_clip",B),f(St,"library_controllers","controller",K),f(St,"library_images","image",ie),f(St,"library_effects","effect",ue),f(St,"library_materials","material",Ge),f(St,"library_cameras","camera",et),f(St,"library_lights","light",ft),f(St,"library_geometries","geometry",le),f(St,"library_nodes","node",nt),f(St,"library_visual_scenes","visual_scene",Ot),f(St,"library_kinematics_models","kinematics_model",Sn),f(St,"library_physics_models","physics_model",Zc),f(St,"scene","instance_kinematics_scene",N),p(tt.animations,y),p(tt.clips,G),p(tt.controllers,Ee),p(tt.images,ne),p(tt.effects,Ze),p(tt.materials,xe),p(tt.cameras,ht),p(tt.lights,x),p(tt.geometries,$t),p(tt.visualScenes,yi),un(),J();const Qo=qr(n(St,"scene")[0]);return Qo.animations=$o,Yr.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Qo.rotation.set(-Math.PI/2,0,0)),Qo.scale.multiplyScalar(Yr.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),$o},kinematics:Dh,library:tt,scene:Qo}}}function Wf(s){let e,t=`<!-- include stl: ${s[0]} ${s[2]} -->`,n,i,r;return i=new tn.Mesh({props:{castShadow:!0,receiveShadow:!0,geometry:s[7],scale:s[2],position:s[4],rotation:s[3],$$slots:{default:[iE]},$$scope:{ctx:s}}}),i.$on("click",function(){sp(s[5])&&s[5].apply(this,arguments)}),{c(){e=new Lu(!1),n=ii(),mt(i.$$.fragment),this.h()},l(o){e=Nu(o,!1),n=si(o),gt(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Ht(o,n,a),_t(i,o,a),r=!0},p(o,a){s=o,(!r||a&5)&&t!==(t=`<!-- include stl: ${s[0]} ${s[2]} -->`)&&e.p(t);const c={};a&128&&(c.geometry=s[7]),a&4&&(c.scale=s[2]),a&16&&(c.position=s[4]),a&8&&(c.rotation=s[3]),a&2050&&(c.$$scope={dirty:a,ctx:s}),i.$set(c)},i(o){r||(Me(i.$$.fragment,o),r=!0)},o(o){Ie(i.$$.fragment,o),r=!1},d(o){o&&(e.d(),kt(n)),yt(i,o)}}}function iE(s){let e,t;return e=new tn.MeshLambertMaterial({props:{color:s[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.color=n[1]),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function sE(s){let e,t,n=s[7]&&Wf(s);return{c(){n&&n.c(),e=Kt()},l(i){n&&n.l(i),e=Kt()},m(i,r){n&&n.m(i,r),Ht(i,e,r),t=!0},p(i,[r]){i[7]?n?(n.p(i,r),r&128&&Me(n,1)):(n=Wf(i),n.c(),Me(n,1),n.m(e.parentNode,e)):n&&(Ln(),Ie(n,1,1,()=>{n=null}),Nn())},i(i){t||(Me(n),t=!0)},o(i){Ie(n),t=!1},d(i){i&&kt(e),n&&n.d(i)}}}function rE(s,e,t){let n,i=Du,r=()=>(i(),i=rp(f,p=>t(7,n=p)),f);s.$$.on_destroy.push(()=>i());let{filename:o}=e,{color:a=new Re("pink")}=e,{scale:c=[1,1,1]}=e,{rotation:l=[1,1,1]}=e,{position:u=[1,1,1]}=e,{onclick:d}=e;ip(),Qn();const h=Tg(nE);let f;return s.$$set=p=>{"filename"in p&&t(0,o=p.filename),"color"in p&&t(1,a=p.color),"scale"in p&&t(2,c=p.scale),"rotation"in p&&t(3,l=p.rotation),"position"in p&&t(4,u=p.position),"onclick"in p&&t(5,d=p.onclick)},s.$$.update=()=>{s.$$.dirty&1&&r(t(6,f=h.load(o)))},[o,a,c,l,u,d,f,n]}class oE extends Un{constructor(e){super(),On(this,e,rE,sE,Dn,{filename:0,color:1,scale:2,rotation:3,position:4,onclick:5})}}class aE extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new di(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){function t(l){const u=new DataView(l),d=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*d===u.byteLength)return!0;const p=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(p,u,_))return!1;return!0}function n(l,u,d){for(let h=0,f=l.length;h<f;h++)if(l[h]!==u.getUint8(d+h))return!1;return!0}function i(l){const u=new DataView(l),d=u.getUint32(80,!0);let h,f,p,_=!1,g,m,v,y,b;for(let U=0;U<70;U++)u.getUint32(U,!1)==1129270351&&u.getUint8(U+4)==82&&u.getUint8(U+5)==61&&(_=!0,g=new Float32Array(d*3*3),m=u.getUint8(U+6)/255,v=u.getUint8(U+7)/255,y=u.getUint8(U+8)/255,b=u.getUint8(U+9)/255);const D=84,T=12*4+2,L=new st,F=new Float32Array(d*3*3),E=new Float32Array(d*3*3),S=new Re;for(let U=0;U<d;U++){const H=D+U*T,k=u.getFloat32(H,!0),W=u.getFloat32(H+4,!0),Z=u.getFloat32(H+8,!0);if(_){const B=u.getUint16(H+48,!0);B&32768?(h=m,f=v,p=y):(h=(B&31)/31,f=(B>>5&31)/31,p=(B>>10&31)/31)}for(let B=1;B<=3;B++){const G=H+B*12,z=U*3*3+(B-1)*3;F[z]=u.getFloat32(G,!0),F[z+1]=u.getFloat32(G+4,!0),F[z+2]=u.getFloat32(G+8,!0),E[z]=k,E[z+1]=W,E[z+2]=Z,_&&(S.set(h,f,p).convertSRGBToLinear(),g[z]=S.r,g[z+1]=S.g,g[z+2]=S.b)}}return L.setAttribute("position",new At(F,3)),L.setAttribute("normal",new At(E,3)),_&&(L.setAttribute("color",new At(g,3)),L.hasColors=!0,L.alpha=b),L}function r(l){const u=new st,d=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let p=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),v=[],y=[],b=[],D=new R;let T,L=0,F=0,E=0;for(;(T=d.exec(l))!==null;){F=E;const S=T[0],U=(T=f.exec(S))!==null?T[1]:"";for(b.push(U);(T=h.exec(S))!==null;){let W=0,Z=0;const B=T[0];for(;(T=m.exec(B))!==null;)D.x=parseFloat(T[1]),D.y=parseFloat(T[2]),D.z=parseFloat(T[3]),Z++;for(;(T=g.exec(B))!==null;)v.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),y.push(D.x,D.y,D.z),W++,E++;Z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),W!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const H=F,k=E-F;u.userData.groupNames=b,u.addGroup(H,k,L),L++}return u.setAttribute("position",new Ne(v,3)),u.setAttribute("normal",new Ne(y,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let d=0;d<l.length;d++)u[d]=l.charCodeAt(d)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?i(c):r(o(e))}}function Xf(s){let e,t=`<!-- include stl: ${s[0]} ${s[2]} -->`,n,i,r;return i=new tn.Mesh({props:{castShadow:!0,receiveShadow:!0,geometry:s[7],scale:s[2],position:s[4],rotation:s[3],$$slots:{default:[cE]},$$scope:{ctx:s}}}),i.$on("click",function(){sp(s[5])&&s[5].apply(this,arguments)}),{c(){e=new Lu(!1),n=ii(),mt(i.$$.fragment),this.h()},l(o){e=Nu(o,!1),n=si(o),gt(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Ht(o,n,a),_t(i,o,a),r=!0},p(o,a){s=o,(!r||a&5)&&t!==(t=`<!-- include stl: ${s[0]} ${s[2]} -->`)&&e.p(t);const c={};a&128&&(c.geometry=s[7]),a&4&&(c.scale=s[2]),a&16&&(c.position=s[4]),a&8&&(c.rotation=s[3]),a&2050&&(c.$$scope={dirty:a,ctx:s}),i.$set(c)},i(o){r||(Me(i.$$.fragment,o),r=!0)},o(o){Ie(i.$$.fragment,o),r=!1},d(o){o&&(e.d(),kt(n)),yt(i,o)}}}function cE(s){let e,t;return e=new tn.MeshLambertMaterial({props:{color:s[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.color=n[1]),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function lE(s){let e,t,n=s[7]&&Xf(s);return{c(){n&&n.c(),e=Kt()},l(i){n&&n.l(i),e=Kt()},m(i,r){n&&n.m(i,r),Ht(i,e,r),t=!0},p(i,[r]){i[7]?n?(n.p(i,r),r&128&&Me(n,1)):(n=Xf(i),n.c(),Me(n,1),n.m(e.parentNode,e)):n&&(Ln(),Ie(n,1,1,()=>{n=null}),Nn())},i(i){t||(Me(n),t=!0)},o(i){Ie(n),t=!1},d(i){i&&kt(e),n&&n.d(i)}}}function uE(s,e,t){let n,i=Du,r=()=>(i(),i=rp(f,p=>t(7,n=p)),f);s.$$.on_destroy.push(()=>i());let{filename:o}=e,{color:a=new Re("pink")}=e,{scale:c=[1,1,1]}=e,{rotation:l=[1,1,1]}=e,{position:u=[1,1,1]}=e,{onclick:d}=e;ip(),Qn();const h=Tg(aE);let f;return s.$$set=p=>{"filename"in p&&t(0,o=p.filename),"color"in p&&t(1,a=p.color),"scale"in p&&t(2,c=p.scale),"rotation"in p&&t(3,l=p.rotation),"position"in p&&t(4,u=p.position),"onclick"in p&&t(5,d=p.onclick)},s.$$.update=()=>{s.$$.dirty&1&&r(t(6,f=h.load(o)))},[o,a,c,l,u,d,f,n]}class hE extends Un{constructor(e){super(),On(this,e,uE,lE,Dn,{filename:0,color:1,scale:2,rotation:3,position:4,onclick:5})}}const{subscribe:dE,set:kg}=Vt(void 0),fE=kg,pE=()=>{kg(void 0)},Bg={subscribe:dE,select:fE,unselect:pE};function mE(s){let e,t;return e=new tn.Mesh({props:{castShadow:!0,receiveShadow:!0,scale:s[2],position:s[4],rotation:s[5],$$slots:{default:[vE]},$$scope:{ctx:s}}}),e.$on("click",s[7]),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&4&&(r.scale=n[2]),i&1027&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function gE(s){let e,t,n,i;const r=[bE,xE],o=[];function a(c,l){return c[3].type==="stl"?0:c[3].type==="dae"?1:-1}return~(e=a(s))&&(t=o[e]=r[e](s)),{c(){t&&t.c(),n=Kt()},l(c){t&&t.l(c),n=Kt()},m(c,l){~e&&o[e].m(c,l),Ht(c,n,l),i=!0},p(c,l){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(t&&(Ln(),Ie(o[u],1,1,()=>{o[u]=null}),Nn()),~e?(t=o[e],t?t.p(c,l):(t=o[e]=r[e](c),t.c()),Me(t,1),t.m(n.parentNode,n)):t=null)},i(c){i||(Me(t),i=!0)},o(c){Ie(t),i=!1},d(c){c&&kt(n),~e&&o[e].d(c)}}}function _E(s){let e,t;return e=new tn.BoxGeometry({}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p:Du,i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function yE(s){let e,t;return e=new tn.CylinderGeometry({props:{args:[s[1].radius,s[1].radius,s[1].length]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.args=[n[1].radius,n[1].radius,n[1].length]),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function vE(s){let e,t,n,i,r;const o=[yE,_E],a=[];function c(l,u){return l[0].type==="cylinder"?0:l[0].type==="box"?1:-1}return~(e=c(s))&&(t=a[e]=o[e](s)),i=new tn.MeshBasicMaterial({props:{color:s[6]}}),{c(){t&&t.c(),n=ii(),mt(i.$$.fragment)},l(l){t&&t.l(l),n=si(l),gt(i.$$.fragment,l)},m(l,u){~e&&a[e].m(l,u),Ht(l,n,u),_t(i,l,u),r=!0},p(l,u){let d=e;e=c(l),e===d?~e&&a[e].p(l,u):(t&&(Ln(),Ie(a[d],1,1,()=>{a[d]=null}),Nn()),~e?(t=a[e],t?t.p(l,u):(t=a[e]=o[e](l),t.c()),Me(t,1),t.m(n.parentNode,n)):t=null)},i(l){r||(Me(t),Me(i.$$.fragment,l),r=!0)},o(l){Ie(t),Ie(i.$$.fragment,l),r=!1},d(l){l&&kt(n),~e&&a[e].d(l),yt(i,l)}}}function xE(s){let e,t;return e=new oE({props:{onclick:s[7],filename:s[3].filename,position:s[4],rotation:s[5],color:s[6],scale:s[2]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&8&&(r.filename=n[3].filename),i&4&&(r.scale=n[2]),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function bE(s){let e,t;return e=new hE({props:{onclick:s[7],filename:s[3].filename,position:s[4],rotation:s[5],color:s[6],scale:s[2]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&8&&(r.filename=n[3].filename),i&4&&(r.scale=n[2]),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function ME(s){let e,t,n,i;const r=[gE,mE],o=[];function a(c,l){return c[0].type==="mesh"&&c[3]?0:1}return e=a(s),t=o[e]=r[e](s),{c(){t.c(),n=Kt()},l(c){t.l(c),n=Kt()},m(c,l){o[e].m(c,l),Ht(c,n,l),i=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Ln(),Ie(o[u],1,1,()=>{o[u]=null}),Nn(),t=o[e],t?t.p(c,l):(t=o[e]=r[e](c),t.c()),Me(t,1),t.m(n.parentNode,n))},i(c){i||(Me(t),i=!0)},o(c){Ie(t),i=!1},d(c){c&&kt(n),o[e].d(c)}}}function SE(s,e,t){let{visual:n}=e,{link:i}=e,r;const o=n.origin_xyz||[0,0,0],a=n.origin_rpy||[0,0,0],c=tE(n.color_rgba);let l=[1,1,1],u;switch(n.type){case"mesh":u=n.geometry,l=u.scale;break;case"box":n.geometry;break;case"cylinder":r=n.geometry;break}const d=()=>{Bg.select(i)};return O1(),s.$$set=h=>{"visual"in h&&t(0,n=h.visual),"link"in h&&t(8,i=h.link)},[n,r,l,u,o,a,c,d,i]}class zg extends Un{constructor(e){super(),On(this,e,SE,ME,Dn,{visual:0,link:8})}}const{subscribe:wE,set:EE,update:AE}=Vt("translate"),TE={subscribe:wE,set:EE,update:AE};function qf(s){const e=s.joints,t=[];for(const n of e){let i=!0;for(const r of e)if(n.parent.name===r.child.name){i=!1;break}i&&t.push(n)}return t}function Yf(s,e){const t=[],n=s.joints;if(!n)return[];for(const i of n)i.parent===e&&t.push(i);return t}class JE{constructor(e,t=""){Lt(this,"filename");Lt(this,"colors",{});Lt(this,"robot",{name:"",links:{},joints:[]});Lt(this,"prefix","");Lt(this,"xmlRobotNode");this.filename=e,this.prefix=t}async load(){return fetch(this.filename).then(e=>e.text())}reset(){this.robot={name:"",links:{},joints:[]}}fromString(e){this.reset();let t=new window.DOMParser().parseFromString(e,"text/xml");return this.xmlRobotNode=t.documentElement,this.parseRobotXMLNode(t.documentElement)}parseRobotXMLNode(e){const t=e.nodeName;if(t!=="robot")throw new Error(`Invalid URDF: no root node ${t}`);return this.robot.name=e.getAttribute("name"),this.parseColorsFromRobot(e),this.parseLinks(e),this.parseJoints(e),this.robot}parseColorsFromRobot(e){const t=e.getElementsByTagName("material");for(let n=0;n<t.length;n++){const i=t[n],r=this.colorFromMaterial(i);r&&(this.colors[r.name]=r.rgba)}}colorFromMaterial(e){if(!e.hasAttribute("name")){console.warn("Found material-tag with name without name inside robot tag!");return}const t=e.getAttribute("name"),n=e.getElementsByTagName("color");if(n.length===0)return;const i=n[0];if(!i.hasAttribute("rgba")){console.warn(`Color tag ${t} does not have expected "rgba" attribute!`);return}return{name:t,rgba:Cr(i,"rgba")}}parseLinks(e){const t=e.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n],r=i.getElementsByTagName("visual"),o={visual:[]};i.hasAttribute("name")&&(o.name=i.getAttribute("name"),this.robot.links[o.name]=o);for(let a=0;a<r.length;a++)o.visual.push(this.parseVisual(r[a]))}}parseVisual(e){let t={};for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"geometry":this.parseGeometry(i,t);break;case"origin":let r=Cr(i);r&&(t.origin_xyz=r);let o=Cr(i,"rpy");o&&(t.origin_rpy=o);break;case"material":const a=i.getElementsByTagName("color");if(a.length>0&&a[0].hasAttribute("rgba"))t.color_rgba=Cr(a[0],"rgba");else if(i.hasAttribute("name")){let c=i.getAttribute("name");t.color_rgba=this.colors[c]}}}return t}parseGeometry(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"mesh":let r=[1,1,1],o=i.getAttribute("scale");if(o){const d=o.split(" ");for(const h in d)r[h]=parseFloat(d[h])}let a=i.getAttribute("filename");a=a.replace("package:/",this.prefix);let c="stl";switch(a.substring(a.length-3)){case"fbx":c="fbx";break;case"obj":c="obj";break;case"stl":c="stl";break;case"dae":c="dae";break;default:throw new Error("Unknown type "+a)}t.geometry={filename:a,type:c,scale:r},t.type="mesh";return;case"cylinder":const l={};i.hasAttribute("length")&&(l.length=parseFloat(i.getAttribute("length"))),i.hasAttribute("radius")&&(l.radius=parseFloat(i.getAttribute("radius"))),t.geometry=l,t.type="cylinder";return;case"box":const u={size:[1,1,1]};if(i.hasAttribute("size")){const h=i.getAttribute("size").split(" ");for(const f in h)u.size[f]=parseFloat(h[f])}t.geometry=u;return}}}parseJoints(e){const t=this.robot.links,n=this.robot.joints,i=e.getElementsByTagName("joint");for(let r=0;r<i.length;r++){const o=i[r],a=o.getElementsByTagName("origin");let c=[0,0,0],l=[0,0,0];if(a.length===1){let p=Cr(a[0]);p&&(l=p);let _=Cr(a[0],"rpy");_&&(c=_)}let u;const d=o.getElementsByTagName("parent");if(d.length===1){const p=d[0].getAttribute("link");p&&t[p]?u=t[p]:u={name:p,visual:[]}}let h;const f=o.getElementsByTagName("child");if(f.length===1){const p=f[0].getAttribute("link");p&&t[p]?h=t[p]:h={name:p,visual:[]}}if(h&&u){const p={name:o.getAttribute("name")||void 0,origin_rpy:c,origin_xyz:l,parent:u,child:h};n.push(p)}}}getURDFXML(){return this.xmlRobotNode?`<?xml version="1.0" ?>
`+this.xmlRobotNode.outerHTML:""}}function Zf(s,e,t){const n=s.slice();return n[5]=e[t],n}function jf(s,e,t){const n=s.slice();return n[8]=e[t],n}function Jf(s){let e,t;return e=new tn.Group({props:{rotation:s[0].origin_rpy,position:s[0].origin_xyz,$$slots:{default:[IE]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.rotation=n[0].origin_rpy),i&1&&(r.position=n[0].origin_xyz),i&2079&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function CE(s){let e,t;return e=new zg({props:{visual:s[5],link:s[0].child}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.visual=n[5]),i&1&&(r.link=n[0].child),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function RE(s){let e,t;return e=new m1({props:{mode:s[4],$$slots:{default:[PE]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&16&&(r.mode=n[4]),i&2049&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function PE(s){let e,t;return e=new zg({props:{visual:s[5],link:s[0].child}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.visual=n[5]),i&1&&(r.link=n[0].child),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function Kf(s){let e,t;return e=new Vg({props:{joint:s[8],selectable:s[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&5&&(r.joint=n[8]),i&2&&(r.selectable=n[1]),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function $f(s){let e,t,n,i,r;const o=[RE,CE],a=[];function c(h,f){return h[1]&&h[3]==h[0].child?0:1}e=c(s),t=a[e]=o[e](s);let l=Ur(Yf(s[2],s[0].child)),u=[];for(let h=0;h<l.length;h+=1)u[h]=Kf(jf(s,l,h));const d=h=>Ie(u[h],1,1,()=>{u[h]=null});return{c(){t.c(),n=ii();for(let h=0;h<u.length;h+=1)u[h].c();i=Kt()},l(h){t.l(h),n=si(h);for(let f=0;f<u.length;f+=1)u[f].l(h);i=Kt()},m(h,f){a[e].m(h,f),Ht(h,n,f);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(h,f);Ht(h,i,f),r=!0},p(h,f){let p=e;if(e=c(h),e===p?a[e].p(h,f):(Ln(),Ie(a[p],1,1,()=>{a[p]=null}),Nn(),t=a[e],t?t.p(h,f):(t=a[e]=o[e](h),t.c()),Me(t,1),t.m(n.parentNode,n)),f&7){l=Ur(Yf(h[2],h[0].child));let _;for(_=0;_<l.length;_+=1){const g=jf(h,l,_);u[_]?(u[_].p(g,f),Me(u[_],1)):(u[_]=Kf(g),u[_].c(),Me(u[_],1),u[_].m(i.parentNode,i))}for(Ln(),_=l.length;_<u.length;_+=1)d(_);Nn()}},i(h){if(!r){Me(t);for(let f=0;f<l.length;f+=1)Me(u[f]);r=!0}},o(h){Ie(t),u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)Ie(u[f]);r=!1},d(h){h&&(kt(n),kt(i)),a[e].d(h),Uu(u,h)}}}function IE(s){let e,t,n=Ur(s[0].child.visual),i=[];for(let o=0;o<n.length;o+=1)i[o]=$f(Zf(s,n,o));const r=o=>Ie(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Kt()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Kt()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);Ht(o,e,a),t=!0},p(o,a){if(a&31){n=Ur(o[0].child.visual);let c;for(c=0;c<n.length;c+=1){const l=Zf(o,n,c);i[c]?(i[c].p(l,a),Me(i[c],1)):(i[c]=$f(l),i[c].c(),Me(i[c],1),i[c].m(e.parentNode,e))}for(Ln(),c=n.length;c<i.length;c+=1)r(c);Nn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)Me(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)Ie(i[a]);t=!1},d(o){o&&kt(e),Uu(i,o)}}}function LE(s){let e,t=`<!-- Joint ${s[0].name} -->`,n,i,r,o=s[2]&&Jf(s);return{c(){e=new Lu(!1),n=ii(),o&&o.c(),i=Kt(),this.h()},l(a){e=Nu(a,!1),n=si(a),o&&o.l(a),i=Kt(),this.h()},h(){e.a=n},m(a,c){e.m(t,a,c),Ht(a,n,c),o&&o.m(a,c),Ht(a,i,c),r=!0},p(a,[c]){(!r||c&1)&&t!==(t=`<!-- Joint ${a[0].name} -->`)&&e.p(t),a[2]?o?(o.p(a,c),c&4&&Me(o,1)):(o=Jf(a),o.c(),Me(o,1),o.m(i.parentNode,i)):o&&(Ln(),Ie(o,1,1,()=>{o=null}),Nn())},i(a){r||(Me(o),r=!0)},o(a){Ie(o),r=!1},d(a){a&&(e.d(),kt(n),kt(i)),o&&o.d(a)}}}function NE(s,e,t){let n,i,r;en(s,Fg,c=>t(2,n=c)),en(s,Bg,c=>t(3,i=c)),en(s,TE,c=>t(4,r=c));let{joint:o}=e,{selectable:a}=e;return s.$$set=c=>{"joint"in c&&t(0,o=c.joint),"selectable"in c&&t(1,a=c.selectable)},[o,a,n,i,r]}class Vg extends Un{constructor(e){super(),On(this,e,NE,LE,Dn,{joint:0,selectable:1})}}function Qf(s,e,t){const n=s.slice();return n[4]=e[t],n}function ep(s){let e,t;return e=new tn.Group({props:{position:s[1],quaternion:s[0],$$slots:{default:[DE]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.position=n[1]),i&1&&(r.quaternion=n[0]),i&140&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function tp(s){let e,t;return e=new Vg({props:{joint:s[4],selectable:s[2]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&8&&(r.joint=n[4]),i&4&&(r.selectable=n[2]),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function DE(s){let e,t,n=Ur(qf(s[3])),i=[];for(let o=0;o<n.length;o+=1)i[o]=tp(Qf(s,n,o));const r=o=>Ie(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Kt()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Kt()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);Ht(o,e,a),t=!0},p(o,a){if(a&12){n=Ur(qf(o[3]));let c;for(c=0;c<n.length;c+=1){const l=Qf(o,n,c);i[c]?(i[c].p(l,a),Me(i[c],1)):(i[c]=tp(l),i[c].c(),Me(i[c],1),i[c].m(e.parentNode,e))}for(Ln(),c=n.length;c<i.length;c+=1)r(c);Nn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)Me(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)Ie(i[a]);t=!1},d(o){o&&kt(e),Uu(i,o)}}}function UE(s){let e,t,n=s[3]&&ep(s);return{c(){n&&n.c(),e=Kt()},l(i){n&&n.l(i),e=Kt()},m(i,r){n&&n.m(i,r),Ht(i,e,r),t=!0},p(i,[r]){i[3]?n?(n.p(i,r),r&8&&Me(n,1)):(n=ep(i),n.c(),Me(n,1),n.m(e.parentNode,e)):n&&(Ln(),Ie(n,1,1,()=>{n=null}),Nn())},i(i){t||(Me(n),t=!0)},o(i){Ie(n),t=!1},d(i){i&&kt(e),n&&n.d(i)}}}function OE(s,e,t){let n;en(s,Fg,a=>t(3,n=a));let{position:i=[0,0,0]}=e,{quaternion:r=void 0}=e,{selectable:o=!1}=e;if(!r){const a=new It;a.setFromAxisAngle(new R(-1,0,0),Math.PI*.5),r=[a.x,a.y,a.z,a.w]}return s.$$set=a=>{"position"in a&&t(1,i=a.position),"quaternion"in a&&t(0,r=a.quaternion),"selectable"in a&&t(2,o=a.selectable)},[r,i,o,n]}class KE extends Un{constructor(e){super(),On(this,e,OE,UE,Dn,{position:1,quaternion:0,selectable:2})}}function np(s){let e,t;return e=new t1({props:{scale:s[1]*4,far:s[1],blur:2}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.scale=n[1]*4),i&2&&(r.far=n[1]),e.$set(r)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Ie(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function FE(s){let e,t,n=s[2]&&np(s);return{c(){n&&n.c(),e=Kt()},l(i){n&&n.l(i),e=Kt()},m(i,r){n&&n.m(i,r),Ht(i,e,r),t=!0},p(i,r){i[2]?n?(n.p(i,r),r&4&&Me(n,1)):(n=np(i),n.c(),Me(n,1),n.m(e.parentNode,e)):n&&(Ln(),Ie(n,1,1,()=>{n=null}),Nn())},i(i){t||(Me(n),t=!0)},o(i){Ie(n),t=!1},d(i){i&&kt(e),n&&n.d(i)}}}function kE(s){let e,t,n,i,r,o,a,c;return e=new tn.AmbientLight({props:{intensity:s[0]*.75}}),n=new tn.SpotLight({props:{penumbra:1,position:[s[8].main[0]*s[1],s[8].main[1]*s[1],s[8].main[2]*s[1]],intensity:s[0]*2,castShadow:s[2],"shadow-bias":s[3],"shadow-normalBias":s[4],"shadow-mapSize":s[5]}}),r=new tn.PointLight({props:{position:[s[8].fill[0]*s[1],s[8].fill[1]*s[1],s[8].fill[2]*s[1]],intensity:s[0]}}),a=new tn.Group({props:{position:[0,-s[6]/2-s[7]/2,0],$$slots:{default:[FE]},$$scope:{ctx:s}}}),{c(){mt(e.$$.fragment),t=ii(),mt(n.$$.fragment),i=ii(),mt(r.$$.fragment),o=ii(),mt(a.$$.fragment)},l(l){gt(e.$$.fragment,l),t=si(l),gt(n.$$.fragment,l),i=si(l),gt(r.$$.fragment,l),o=si(l),gt(a.$$.fragment,l)},m(l,u){_t(e,l,u),Ht(l,t,u),_t(n,l,u),Ht(l,i,u),_t(r,l,u),Ht(l,o,u),_t(a,l,u),c=!0},p(l,[u]){const d={};u&1&&(d.intensity=l[0]*.75),e.$set(d);const h={};u&2&&(h.position=[l[8].main[0]*l[1],l[8].main[1]*l[1],l[8].main[2]*l[1]]),u&1&&(h.intensity=l[0]*2),u&4&&(h.castShadow=l[2]),u&8&&(h["shadow-bias"]=l[3]),u&16&&(h["shadow-normalBias"]=l[4]),u&32&&(h["shadow-mapSize"]=l[5]),n.$set(h);const f={};u&2&&(f.position=[l[8].fill[0]*l[1],l[8].fill[1]*l[1],l[8].fill[2]*l[1]]),u&1&&(f.intensity=l[0]),r.$set(f);const p={};u&192&&(p.position=[0,-l[6]/2-l[7]/2,0]),u&2054&&(p.$$scope={dirty:u,ctx:l}),a.$set(p)},i(l){c||(Me(e.$$.fragment,l),Me(n.$$.fragment,l),Me(r.$$.fragment,l),Me(a.$$.fragment,l),c=!0)},o(l){Ie(e.$$.fragment,l),Ie(n.$$.fragment,l),Ie(r.$$.fragment,l),Ie(a.$$.fragment,l),c=!1},d(l){l&&(kt(t),kt(i),kt(o)),yt(e,l),yt(n,l),yt(r,l),yt(a,l)}}}function BE(s,e,t){let{intensity:n=.5}=e,{radius:i=1}=e,{shadows:r=!0}=e,{preset_name:o="rembrandt"}=e,{shadowBias:a=-1e-4}=e,{normalBias:c=0}=e,{shadowSize:l=256}=e,{height:u=1}=e,{shadowOffset:d=1}=e;const f={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}}[o];return s.$$set=p=>{"intensity"in p&&t(0,n=p.intensity),"radius"in p&&t(1,i=p.radius),"shadows"in p&&t(2,r=p.shadows),"preset_name"in p&&t(9,o=p.preset_name),"shadowBias"in p&&t(3,a=p.shadowBias),"normalBias"in p&&t(4,c=p.normalBias),"shadowSize"in p&&t(5,l=p.shadowSize),"height"in p&&t(6,u=p.height),"shadowOffset"in p&&t(7,d=p.shadowOffset)},[n,i,r,a,c,l,u,d,f,o]}class $E extends Un{constructor(e){super(),On(this,e,BE,kE,Dn,{intensity:0,radius:1,shadows:2,preset_name:9,shadowBias:3,normalBias:4,shadowSize:5,height:6,shadowOffset:7})}}function zE(s,e,t){let{size:n=10}=e,{divisions:i=10}=e,{position:r=[0,0,0]}=e;const{scene:o,invalidate:a}=Qn(),c=new yg(n,i);return c.position.x=r[0],c.position.y=r[1],c.position.z=r[2],o.add(c),Wn(()=>{o.remove(c)}),s.$$set=l=>{"size"in l&&t(0,n=l.size),"divisions"in l&&t(1,i=l.divisions),"position"in l&&t(2,r=l.position)},[n,i,r]}class QE extends Un{constructor(e){super(),On(this,e,zE,null,Dn,{size:0,divisions:1,position:2})}}export{qE as C,QE as G,jE as O,tn as T,JE as U,$E as a,KE as b,qf as c,Yf as g,Fg as r,Bg as s,TE as t};
