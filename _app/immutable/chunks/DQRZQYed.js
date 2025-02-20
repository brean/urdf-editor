var Gg=Object.defineProperty;var Wg=(s,e,t)=>e in s?Gg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ot=(s,e,t)=>Wg(s,typeof e!="symbol"?e+"":e,t);import{l as Xg,w as qg}from"./DNC1q9-q.js";import{b as gd,e as Yg,c as Tt,a as lt,t as Pi}from"./BOSsOkNa.js";import{n as Zg,C as _d,M as vd,v as jg,R as xd,T as Jg,a8 as Kg,a7 as Qg,P as $g,U as e0,H as t0,m as wi,aJ as wp,i as le,at as n0,g as Ep,aj as Tp,B as i0,aD as Qn,aE as Vn,u as an,d as hs,k as _t,p as hi,f as ht,a as ui,l as Gi,c as yd,_ as kr,r as bd,s as ci}from"./Det59TYN.js";import{r as Wr,i as In,b as Md,s as Io,a as Ke,c as en,p as Fn,d as uu,e as du}from"./UELp4PM_.js";import{s as ds}from"./yDUw9eTs.js";import{g as Wh,w as Dn,d as tl,a as Ii,o as fu,r as Ap}from"./D0x9s8TS.js";import"./Crtflxrk.js";import{e as vo,i as xo}from"./C5DKojRE.js";function pu(s,e,t,n,i){var r=s,o="",a;Zg(()=>{if(o===(o=e()??"")){_d&&vd();return}a!==void 0&&(t0(a),a=void 0),o!==""&&(a=jg(()=>{if(_d){xd.data;for(var c=vd(),l=c;c!==null&&(c.nodeType!==8||c.data!=="");)l=c,c=Jg(c);if(c===null)throw Kg(),Qg;gd(xd,l),r=$g(c);return}var h=o+"",u=Yg(h);gd(e0(u),u.lastChild),r.before(u)}))})}function NT(s,e,t,n){var i=s.__styles??(s.__styles={});i[e]!==t&&(i[e]=t,t==null?s.style.removeProperty(e):s.style.setProperty(e,t,""))}function UT(s,e){Xg(window,["resize"],()=>qg(()=>e(window[s])))}function s0(s){wi(s,s.v+1)}function r0(s){let e=0,t=i0(0),n;return()=>{wp()&&(le(t),n0(()=>(e===0&&(n=Ep(()=>s(()=>s0(t)))),e+=1,()=>{Tp().then(()=>{e-=1,e===0&&(n==null||n(),n=void 0)})})))}}function o0(s){let e;const t=r0(i=>{let r=!1;const o=s.subscribe(a=>{e=a,r&&i()});return r=!0,o});function n(){return wp()?(t(),e):Wh(s)}return"set"in s?{get current(){return n()},set current(i){s.set(i)}}:{get current(){return n()}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="173",qs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cp=0,Xh=1,Rp=2,a0=3,c0=0,mu=1,yo=2,Si=3,Ci=0,zn=1,ai=2,Ji=0,Ys=1,qh=2,Yh=3,Zh=4,Pp=5,us=100,Ip=101,Dp=102,Lp=103,Np=104,Up=200,Op=201,Fp=202,Bp=203,uc=204,dc=205,kp=206,zp=207,Vp=208,Hp=209,Gp=210,Wp=211,Xp=212,qp=213,Yp=214,fc=0,pc=1,mc=2,Ks=3,gc=4,_c=5,vc=6,xc=7,Jo=0,Zp=1,jp=2,Ki=0,Jp=1,Kp=2,Qp=3,$p=4,em=5,yc=6,tm=7,jh="attached",nm="detached",il=300,$i=301,fs=302,Do=303,Lo=304,Xr=306,Yi=1e3,jn=1001,No=1002,Sn=1003,gu=1004,l0=1004,Lr=1005,h0=1005,dn=1006,bo=1007,u0=1007,gi=1008,d0=1008,Ri=1009,_u=1010,vu=1011,zr=1012,sl=1013,es=1014,Jn=1015,qr=1016,rl=1017,ol=1018,Qs=1020,xu=35902,yu=1021,bu=1022,kn=1023,Mu=1024,Su=1025,Zs=1026,$s=1027,al=1028,Ko=1029,wu=1030,cl=1031,f0=1032,ll=1033,Mo=33776,So=33777,wo=33778,Eo=33779,bc=35840,Mc=35841,Sc=35842,wc=35843,Ec=36196,Tc=37492,Ac=37496,Cc=37808,Rc=37809,Pc=37810,Ic=37811,Dc=37812,Lc=37813,Nc=37814,Uc=37815,Oc=37816,Fc=37817,Bc=37818,kc=37819,zc=37820,Vc=37821,To=36492,Hc=36494,Gc=36495,Eu=36283,Wc=36284,Xc=36285,qc=36286,im=2200,sm=2201,rm=2202,Uo=2300,Yc=2301,ac=2302,Hs=2400,Gs=2401,Oo=2402,hl=2500,Tu=2501,p0=0,m0=1,g0=2,om=3200,am=3201,_0=3202,v0=3203,ps=0,cm=1,Wi="",Zt="srgb",er="srgb-linear",Fo="linear",Ut="srgb",x0=0,Os=7680,y0=7681,b0=7682,M0=7683,S0=34055,w0=34056,E0=5386,T0=512,A0=513,C0=514,R0=515,P0=516,I0=517,D0=518,Jh=519,lm=512,hm=513,um=514,Au=515,dm=516,fm=517,pm=518,mm=519,Bo=35044,L0=35048,N0=35040,U0=35045,O0=35049,F0=35041,B0=35046,k0=35050,z0=35042,V0="100",Kh="300 es",_i=2e3,ko=2001,H0={COMPUTE:"compute",RENDER:"render"};class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sd=1234567;const js=Math.PI/180,Vr=180/Math.PI;function ni(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function ut(s,e,t){return Math.max(e,Math.min(t,s))}function Cu(s,e){return(s%e+e)%e}function G0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function W0(s,e,t){return s!==e?(t-s)/(e-s):0}function Ao(s,e,t){return(1-t)*s+t*e}function X0(s,e,t,n){return Ao(s,e,1-Math.exp(-t*n))}function q0(s,e=1){return e-Math.abs(Cu(s,e*2)-e)}function Y0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Z0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function j0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function J0(s,e){return s+Math.random()*(e-s)}function K0(s){return s*(.5-Math.random())}function Q0(s){s!==void 0&&(Sd=s);let e=Sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $0(s){return s*js}function e_(s){return s*Vr}function t_(s){return(s&s-1)===0&&s!==0}function n_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function i_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function s_(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ks={DEG2RAD:js,RAD2DEG:Vr,generateUUID:ni,clamp:ut,euclideanModulo:Cu,mapLinear:G0,inverseLerp:W0,lerp:Ao,damp:X0,pingpong:q0,smoothstep:Y0,smootherstep:Z0,randInt:j0,randFloat:J0,randFloatSpread:K0,seededRandom:Q0,degToRad:$0,radToDeg:e_,isPowerOfTwo:t_,ceilPowerOfTwo:n_,floorPowerOfTwo:i_,setQuaternionFromProperEuler:s_,normalize:mt,denormalize:Bn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,i,r,o,a,c,l){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],y=i[1],x=i[4],v=i[7],N=i[2],E=i[5],I=i[8];return r[0]=o*_+a*y+c*N,r[3]=o*g+a*x+c*E,r[6]=o*m+a*v+c*I,r[1]=l*_+h*y+u*N,r[4]=l*g+h*x+u*E,r[7]=l*m+h*v+u*I,r[2]=d*_+f*y+p*N,r[5]=d*g+f*x+p*E,r[8]=d*m+f*v+p*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zl=new ft;function gm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const r_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Nr(s,e){return new r_[s](e)}function zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _m(){const s=zo("canvas");return s.style.display="block",s}const wd={};function Dr(s){s in wd||(wd[s]=!0,console.warn(s))}function o_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function a_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function c_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ed=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l_(){const s={enabled:!0,workingColorSpace:er,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ut&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(i.r=Br(i.r),i.g=Br(i.g),i.b=Br(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wi?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[er]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:Ut,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),s}const xt=l_();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Br(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let pr;class vm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=zo("canvas")),pr.width=e.width,pr.height=e.height;const n=pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pr}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h_=0;class Ws{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(jl(i[o].image)):r.push(jl(i[o]))}else r=jl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u_=0;class tn extends Di{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=jn,i=jn,r=dn,o=gi,a=kn,c=Ri,l=tn.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=ni(),this.name="",this.source=new Ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=il;tn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,N=(m+1)/2,E=(h+d)/4,I=(u+_)/4,L=(p+g)/4;return x>v&&x>N?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=I/n):v>N?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=L/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=I/r,i=L/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ul extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ws(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qo extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d_ extends li{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Qo(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class dl extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class f_ extends li{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new dl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Bt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==p){let g=1-a;const m=c*d+l*f+h*p+u*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const N=Math.sqrt(x),E=Math.atan2(N,m*y);g=Math.sin(g*E)/N,a=Math.sin(a*E)/N}const v=a*y;if(c=c*g+d*v,l=l*g+f*v,h=h*g+p*v,u=u*g+_*v,g===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=N,l*=N,h*=N,u*=N}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jl=new C,Ad=new Bt;class _n{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(r,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),ua.subVectors(this.max,$r),mr.subVectors(e.a,$r),gr.subVectors(e.b,$r),_r.subVectors(e.c,$r),ts.subVectors(gr,mr),ns.subVectors(_r,gr),bs.subVectors(mr,_r);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-bs.z,bs.y,ts.z,0,-ts.x,ns.z,0,-ns.x,bs.z,0,-bs.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-bs.y,bs.x,0];return!Kl(t,mr,gr,_r,ua)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,mr,gr,_r,ua))?!1:(da.crossVectors(ts,ns),t=[da.x,da.y,da.z],Kl(t,mr,gr,_r,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new C,new C,new C,new C,new C,new C,new C,new C],fi=new C,ha=new _n,mr=new C,gr=new C,_r=new C,ts=new C,ns=new C,bs=new C,$r=new C,ua=new C,da=new C,Ms=new C;function Kl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ms.fromArray(s,r);const a=i.x*Math.abs(Ms.x)+i.y*Math.abs(Ms.y)+i.z*Math.abs(Ms.z),c=e.dot(Ms),l=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const p_=new _n,eo=new C,Ql=new C;class vn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):p_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Ql)),this.expandByPoint(eo.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new C,$l=new C,fa=new C,is=new C,eh=new C,pa=new C,th=new C;class ms{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$l.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),is.copy(this.origin).sub($l);const r=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=is.dot(this.direction),c=-is.dot(fa),l=is.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($l).addScaledVector(fa,d),f}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const n=Fi.dot(this.direction),i=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,i,r){eh.subVectors(t,e),pa.subVectors(n,e),th.crossVectors(eh,pa);let o=this.direction.dot(th),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);const c=a*this.direction.dot(pa.crossVectors(is,pa));if(c<0)return null;const l=a*this.direction.dot(eh.cross(is));if(l<0||c+l>o)return null;const h=-a*is.dot(th);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,p,_,g){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,p,_,g)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m_,e,g_)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ss.crossVectors(n,$n),ss.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ss.crossVectors(n,$n)),ss.normalize(),ma.crossVectors($n,ss),i[0]=ss.x,i[4]=ma.x,i[8]=$n.x,i[1]=ss.y,i[5]=ma.y,i[9]=$n.y,i[2]=ss.z,i[6]=ma.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],x=n[7],v=n[11],N=n[15],E=i[0],I=i[4],L=i[8],w=i[12],S=i[1],F=i[5],k=i[9],H=i[13],W=i[2],K=i[6],B=i[10],$=i[14],V=i[3],j=i[7],ce=i[11],ue=i[15];return r[0]=o*E+a*S+c*W+l*V,r[4]=o*I+a*F+c*K+l*j,r[8]=o*L+a*k+c*B+l*ce,r[12]=o*w+a*H+c*$+l*ue,r[1]=h*E+u*S+d*W+f*V,r[5]=h*I+u*F+d*K+f*j,r[9]=h*L+u*k+d*B+f*ce,r[13]=h*w+u*H+d*$+f*ue,r[2]=p*E+_*S+g*W+m*V,r[6]=p*I+_*F+g*K+m*j,r[10]=p*L+_*k+g*B+m*ce,r[14]=p*w+_*H+g*$+m*ue,r[3]=y*E+x*S+v*W+N*V,r[7]=y*I+x*F+v*K+N*j,r[11]=y*L+x*k+v*B+N*ce,r[15]=y*w+x*H+v*$+N*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],y=u*g*l-_*d*l+_*c*f-a*g*f-u*c*m+a*d*m,x=p*d*l-h*g*l-p*c*f+o*g*f+h*c*m-o*d*m,v=h*_*l-p*u*l+p*a*f-o*_*f-h*a*m+o*u*m,N=p*u*c-h*_*c-p*a*d+o*_*d+h*a*g-o*u*g,E=t*y+n*x+i*v+r*N;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/E;return e[0]=y*I,e[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*m-n*d*m)*I,e[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*m+n*c*m)*I,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*I,e[4]=x*I,e[5]=(h*g*r-p*d*r+p*i*f-t*g*f-h*i*m+t*d*m)*I,e[6]=(p*c*r-o*g*r-p*i*l+t*g*l+o*i*m-t*c*m)*I,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*I,e[8]=v*I,e[9]=(p*u*r-h*_*r-p*n*f+t*_*f+h*n*m-t*u*m)*I,e[10]=(o*_*r-p*a*r+p*n*l-t*_*l-o*n*m+t*a*m)*I,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*I,e[12]=N*I,e[13]=(h*_*i-p*u*i+p*n*d-t*_*d-h*n*g+t*u*g)*I,e[14]=(p*a*i-o*_*i-p*n*c+t*_*c+o*n*g-t*a*g)*I,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,p=r*u,_=o*h,g=o*u,m=a*u,y=c*l,x=c*h,v=c*u,N=n.x,E=n.y,I=n.z;return i[0]=(1-(_+m))*N,i[1]=(f+v)*N,i[2]=(p-x)*N,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+m))*E,i[6]=(g+y)*E,i[7]=0,i[8]=(p+x)*I,i[9]=(g-y)*I,i[10]=(1-(d+_))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=vr.set(i[0],i[1],i[2]).length();const o=vr.set(i[4],i[5],i[6]).length(),a=vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);const l=1/r,h=1/o,u=1/a;return pi.elements[0]*=l,pi.elements[1]*=l,pi.elements[2]*=l,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,t.setFromRotationMatrix(pi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=_i){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,p;if(a===_i)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ko)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=_i){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let p,_;if(a===_i)p=(o+r)*u,_=-2*u;else if(a===ko)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vr=new C,pi=new We,m_=new C(0,0,0),g_=new C(1,1,1),ss=new C,ma=new C,$n=new C,Cd=new We,Rd=new Bt;class Kn{constructor(e=0,t=0,n=0,i=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let __=0;const Pd=new C,xr=new Bt,Bi=new We,ga=new C,to=new C,v_=new C,x_=new Bt,Id=new C(1,0,0),Dd=new C(0,1,0),Ld=new C(0,0,1),Nd={type:"added"},y_={type:"removed"},yr={type:"childadded",child:null},nh={type:"childremoved",child:null};class St extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new C,t=new Kn,n=new Bt,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new ft}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Id,e)}rotateY(e){return this.rotateOnAxis(Dd,e)}rotateZ(e){return this.rotateOnAxis(Ld,e)}translateOnAxis(e,t){return Pd.copy(e).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Id,e)}translateY(e){return this.translateOnAxis(Dd,e)}translateZ(e){return this.translateOnAxis(Ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(to,ga,this.up):Bi.lookAt(ga,to,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),xr.setFromRotationMatrix(Bi),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nd),yr.child=e,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y_),nh.child=e,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nd),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,v_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,x_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}St.DEFAULT_UP=new C(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new C,ki=new C,ih=new C,zi=new C,br=new C,Mr=new C,Ud=new C,sh=new C,rh=new C,oh=new C,ah=new bt,ch=new bt,lh=new bt;class Zn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mi.subVectors(i,t),ki.subVectors(n,t),ih.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(ki),c=mi.dot(ih),l=ki.dot(ki),h=ki.dot(ih),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zi.x),c.addScaledVector(o,zi.y),c.addScaledVector(a,zi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return ah.setScalar(0),ch.setScalar(0),lh.setScalar(0),ah.fromBufferAttribute(e,t),ch.fromBufferAttribute(e,n),lh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ah,r.x),o.addScaledVector(ch,r.y),o.addScaledVector(lh,r.z),o}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),ki.subVectors(e,t),mi.cross(ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),mi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;br.subVectors(i,n),Mr.subVectors(r,n),sh.subVectors(e,n);const c=br.dot(sh),l=Mr.dot(sh);if(c<=0&&l<=0)return t.copy(n);rh.subVectors(e,i);const h=br.dot(rh),u=Mr.dot(rh);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(br,o);oh.subVectors(e,r);const f=br.dot(oh),p=Mr.dot(oh);if(p>=0&&f<=p)return t.copy(r);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Mr,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Ud.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(Ud,a);const m=1/(g+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(br,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},_a={h:0,s:0,l:0};function hh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=Cu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=hh(o,r,e+1/3),this.g=hh(o,r,e),this.b=hh(o,r,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=xm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return xt.fromWorkingColorSpace(An.copy(this),e),Math.round(ut(An.r*255,0,255))*65536+Math.round(ut(An.g*255,0,255))*256+Math.round(ut(An.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(An.copy(this),t);const n=An.r,i=An.g,r=An.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Zt){xt.fromWorkingColorSpace(An.copy(this),e);const t=An.r,n=An.g,i=An.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(_a);const n=Ao(rs.h,_a.h,t),i=Ao(rs.s,_a.s,t),r=Ao(rs.l,_a.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Te;Te.NAMES=xm;let b_=0;class Ln extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Ys,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ii extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xi=M_();function M_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Yn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ut(s,-65504,65504),Xi.floatView[0]=s;const e=Xi.uint32View[0],t=e>>23&511;return Xi.baseTable[t]+((e&8388607)>>Xi.shiftTable[t])}function po(s){const e=s>>10;return Xi.uint32View[0]=Xi.mantissaTable[Xi.offsetTable[e]+(s&1023)]+Xi.exponentTable[e],Xi.floatView[0]}const S_={toHalfFloat:Yn,fromHalfFloat:po},rn=new C,va=new se;let w_=0;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bo,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bo&&(e.usage=this.usage),e}}class E_ extends Dt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class T_ extends Dt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class A_ extends Dt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class C_ extends Dt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Ru extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class R_ extends Dt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Pu extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class P_ extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=po(this.array[e*this.itemSize]);return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=Yn(t),this}getY(e){let t=po(this.array[e*this.itemSize+1]);return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=Yn(t),this}getZ(e){let t=po(this.array[e*this.itemSize+2]);return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=Yn(t),this}getW(e){let t=po(this.array[e*this.itemSize+3]);return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=Yn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this.array[e+2]=Yn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=Yn(t),this.array[e+1]=Yn(n),this.array[e+2]=Yn(i),this.array[e+3]=Yn(r),this}}class Pe extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let I_=0;const ri=new We,uh=new St,Sr=new C,ei=new _n,no=new _n,gn=new C;class ct extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gm(e)?Pu:Ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(ei.min,no.min),ei.expandByPoint(gn),gn.addVectors(ei.max,no.max),ei.expandByPoint(gn)):(ei.expandByPoint(no.min),ei.expandByPoint(no.max))}ei.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)gn.fromBufferAttribute(a,l),c&&(Sr.fromBufferAttribute(e,l),gn.add(Sr)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new C,c[L]=new C;const l=new C,h=new C,u=new C,d=new se,f=new se,p=new se,_=new C,g=new C;function m(L,w,S){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),p.sub(d);const F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(F),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(F),a[L].add(_),a[w].add(_),a[S].add(_),c[L].add(g),c[w].add(g),c[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,w=y.length;L<w;++L){const S=y[L],F=S.start,k=S.count;for(let H=F,W=F+k;H<W;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new C,v=new C,N=new C,E=new C;function I(L){N.fromBufferAttribute(i,L),E.copy(N);const w=a[L];x.copy(w),x.sub(N.multiplyScalar(N.dot(w))).normalize(),v.crossVectors(E,w);const F=v.dot(c[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,F)}for(let L=0,w=y.length;L<w;++L){const S=y[L],F=S.start,k=S.count;for(let H=F,W=F+k;H<W;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new Dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ct,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Od=new We,Ss=new ms,xa=new vn,Fd=new C,ya=new C,ba=new C,Ma=new C,dh=new C,Sa=new C,Bd=new C,wa=new C;class Se extends St{constructor(e=new ct,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(dh.fromBufferAttribute(u,e),o?Sa.addScaledVector(dh,h):Sa.addScaledVector(dh.sub(t),h))}t.add(Sa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(xa.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(xa,Fd)===null||Ss.origin.distanceToSquared(Fd)>(e.far-e.near)**2))&&(Od.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Od),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,N=x;v<N;v+=3){const E=a.getX(v),I=a.getX(v+1),L=a.getX(v+2);i=Ea(this,m,e,n,l,h,u,E,I,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);i=Ea(this,o,e,n,l,h,u,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=y,N=x;v<N;v+=3){const E=v,I=v+1,L=v+2;i=Ea(this,m,e,n,l,h,u,E,I,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=g,x=g+1,v=g+2;i=Ea(this,o,e,n,l,h,u,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function D_(s,e,t,n,i,r,o,a){let c;if(e.side===zn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Ci,a),c===null)return null;wa.copy(a),wa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(wa);return l<t.near||l>t.far?null:{distance:l,point:wa.clone(),object:s}}function Ea(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ya),s.getVertexPosition(c,ba),s.getVertexPosition(l,Ma);const h=D_(s,e,t,n,ya,ba,Ma,Bd);if(h){const u=new C;Zn.getBarycoord(Bd,ya,ba,Ma,u),i&&(h.uv=Zn.getInterpolatedAttribute(i,a,c,l,u,new se)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,a,c,l,u,new se)),o&&(h.normal=Zn.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};Zn.getNormal(ya,ba,Ma,d.normal),h.face=d,h.barycoord=u}return h}class $t extends ct{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function p(_,g,m,y,x,v,N,E,I,L,w){const S=v/I,F=N/L,k=v/2,H=N/2,W=E/2,K=I+1,B=L+1;let $=0,V=0;const j=new C;for(let ce=0;ce<B;ce++){const ue=ce*F-H;for(let Me=0;Me<K;Me++){const xe=Me*S-k;j[_]=xe*y,j[g]=ue*x,j[m]=W,l.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[m]=E>0?1:-1,h.push(j.x,j.y,j.z),u.push(Me/I),u.push(1-ce/L),$+=1}}for(let ce=0;ce<L;ce++)for(let ue=0;ue<I;ue++){const Me=d+ue+K*ce,xe=d+ue+K*(ce+1),q=d+(ue+1)+K*(ce+1),ee=d+(ue+1)+K*ce;c.push(Me,xe,ee),c.push(xe,q,ee),V+=6}a.addGroup(f,V,w),f+=V,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const n=Hr(s[t]);for(const i in n)e[i]=n[i]}return e}function L_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ym(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Iu={clone:Hr,merge:On};var N_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N_,this.fragmentShader=U_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pl extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const os=new C,kd=new se,zd=new se;class cn extends pl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,kd,zd),t.subVectors(zd,kd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wr=-90,Er=1;class bm extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(wr,Er,e,t);i.layers=this.layers,this.add(i);const r=new cn(wr,Er,e,t);r.layers=this.layers,this.add(r);const o=new cn(wr,Er,e,t);o.layers=this.layers,this.add(o);const a=new cn(wr,Er,e,t);a.layers=this.layers,this.add(a);const c=new cn(wr,Er,e,t);c.layers=this.layers,this.add(c);const l=new cn(wr,Er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class $o extends tn{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:$i,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mm extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $o(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $t(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Ji});r.uniforms.tEquirect.value=t;const o=new Se(i,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=dn),new bm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ei extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ml{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new gl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _l extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bo,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new C;class tr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Du extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Tr;const io=new C,Ar=new C,Cr=new C,Rr=new se,so=new se,Sm=new We,Ta=new C,ro=new C,Aa=new C,Vd=new se,fh=new se,Hd=new se;class wm extends St{constructor(e=new Du){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vl(t,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new tr(n,3,0,!1)),Tr.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),Sm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Cr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Ca(Ta.set(-.5,-.5,0),Cr,o,Ar,i,r),Ca(ro.set(.5,-.5,0),Cr,o,Ar,i,r),Ca(Aa.set(.5,.5,0),Cr,o,Ar,i,r),Vd.set(0,0),fh.set(1,0),Hd.set(1,1);let a=e.ray.intersectTriangle(Ta,ro,Aa,!1,io);if(a===null&&(Ca(ro.set(-.5,.5,0),Cr,o,Ar,i,r),fh.set(0,1),a=e.ray.intersectTriangle(Ta,Aa,ro,!1,io),a===null))return;const c=e.ray.origin.distanceTo(io);c<e.near||c>e.far||t.push({distance:c,point:io.clone(),uv:Zn.getInterpolation(io,Ta,ro,Aa,Vd,fh,Hd,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ca(s,e,t,n,i,r){Rr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(so.x=r*Rr.x-i*Rr.y,so.y=i*Rr.x+r*Rr.y):so.copy(Rr),s.copy(e),s.x+=so.x,s.y+=so.y,s.applyMatrix4(Sm)}const Ra=new C,Gd=new C;class Em extends St{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ra.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ra);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ra.setFromMatrixPosition(e.matrixWorld),Gd.setFromMatrixPosition(this.matrixWorld);const n=Ra.distanceTo(Gd)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Wd=new C,Xd=new bt,qd=new bt,F_=new C,Yd=new We,Pa=new C,ph=new vn,Zd=new We,mh=new ms;class Lu extends Se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jh,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ph.copy(this.boundingSphere),ph.applyMatrix4(i),e.ray.intersectsSphere(ph)!==!1&&(Zd.copy(i).invert(),mh.copy(e.ray).applyMatrix4(Zd),!(this.boundingBox!==null&&mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Xd.fromBufferAttribute(i.attributes.skinIndex,e),qd.fromBufferAttribute(i.attributes.skinWeight,e),Wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=qd.getComponent(r);if(o!==0){const a=Xd.getComponent(r);Yd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(F_.copy(Wd).applyMatrix4(Yd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xl extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ti extends tn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Sn,h=Sn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new We,B_=new We;class ea{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:B_;jd.multiplyMatrices(a,t[r]),jd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ea(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ti(t,e,e,kn,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new xl),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Gr extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pr=new We,Jd=new We,Ia=[],Kd=new _n,k_=new We,oo=new Se,ao=new vn;class Tm extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,k_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),Kd.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(Kd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),ao.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Pr),Jd.multiplyMatrices(n,Pr),oo.matrixWorld=Jd,oo.raycast(e,Ia);for(let o=0,a=Ia.length;o<a;o++){const c=Ia[o];c.instanceId=r,c.object=this,t.push(c)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(i*this.count),i,this.count,al,Jn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const gh=new C,z_=new C,V_=new ft;class Hi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gh.subVectors(n,t).cross(z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||V_.getNormalMatrix(e),i=this.coplanarPoint(gh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new vn,Da=new C;class ta{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,r=new Hi,o=new Hi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],_=i[10],g=i[11],m=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(c-r,d-l,g-f,v-m).normalize(),n[1].setComponents(c+r,d+l,g+f,v+m).normalize(),n[2].setComponents(c+o,d+h,g+p,v+y).normalize(),n[3].setComponents(c-o,d-h,g-p,v-y).normalize(),n[4].setComponents(c-a,d-u,g-_,v-x).normalize(),t===_i)n[5].setComponents(c+a,d+u,g+_,v+x).normalize();else if(t===ko)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Da.x=i.normal.x>0?e.max.x:e.min.x,Da.y=i.normal.y>0?e.max.y:e.min.y,Da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _h(s,e){return s-e}function H_(s,e){return s.z-e.z}function G_(s,e){return e.z-s.z}class W_{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Xn=new We,X_=new Te(1,1,1),vh=new ta,La=new _n,Es=new vn,co=new C,Qd=new C,q_=new C,xh=new W_,Cn=new Se,Na=[];function Y_(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ts(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class Am extends Se{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,i){super(new ct,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ti(t,e,e,kn,Jn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Ti(t,e,e,Ko,es);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Ti(t,e,e,kn,Jn);n.colorSpace=xt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new Dt(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Dt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Xn),this.getBoundingBoxAt(r,La).applyMatrix4(Xn),e.union(La)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Xn),this.getBoundingSphereAt(r,Es).applyMatrix4(Xn),e.union(Es)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(_h),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Xn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(X_.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(_h),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);Y_(u,d,c);const f=u.itemSize;for(let p=u.count,_=l;p<_;p++){const g=c+p;for(let m=0;m<f;m++)d.setComponent(g,m,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){const h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,c+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=r.index,p=f.array,_=e-u;for(let g=h;g<h+d;g++)p[g]=p[g]+_;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=l,d=r.attributes;for(const f in d){const p=d[f],{array:_,itemSize:g}=p;_.copyWithin(e*g,h*g,(h+u)*g),p.addUpdateRange(e*g,u*g)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new _n,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(co.fromBufferAttribute(a,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new vn;this.getBoundingBoxAt(e,La),La.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=i.start,h=i.start+i.count;l<h;l++){let u=l;o&&(u=o.getX(u)),co.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(co))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(_h);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);Ts(this._multiDrawCounts,i),Ts(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ts(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ts(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Ts(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ct,this._initializeGeometry(r));const o=this.geometry;r.index&&Ts(r.index.array,o.index.array);for(const a in r.attributes)Ts(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Cn.material=this.material,Cn.geometry.index=o.index,Cn.geometry.attributes=o.attributes,Cn.geometry.boundingBox===null&&(Cn.geometry.boundingBox=new _n),Cn.geometry.boundingSphere===null&&(Cn.geometry.boundingSphere=new vn);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,h=i[l];Cn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Cn.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Cn.geometry.boundingBox),this.getBoundingSphereAt(l,Cn.geometry.boundingSphere),Cn.raycast(e,Na);for(let u=0,d=Na.length;u<d;u++){const f=Na[u];f.object=this,f.batchId=a,t.push(f)}Na.length=0}Cn.material=null,Cn.geometry.index=null,Cn.geometry.attributes={},Cn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;d&&(Xn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),vh.setFromProjectionMatrix(Xn,e.coordinateSystem));let _=0;if(this.sortObjects){Xn.copy(this.matrixWorld).invert(),co.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Xn),Qd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Xn);for(let y=0,x=c.length;y<x;y++)if(c[y].visible&&c[y].active){const v=c[y].geometryIndex;this.getMatrixAt(y,Xn),this.getBoundingSphereAt(v,Es).applyMatrix4(Xn);let N=!1;if(d&&(N=!vh.intersectsSphere(Es)),!N){const E=u[v],I=q_.subVectors(Es.center,co).dot(Qd);xh.push(E.start,E.count,I,y)}}const g=xh.list,m=this.customSort;m===null?g.sort(r.transparent?G_:H_):m.call(this,g,n);for(let y=0,x=g.length;y<x;y++){const v=g[y];l[_]=v.start*a,h[_]=v.count,p[_]=v.index,_++}xh.reset()}else for(let g=0,m=c.length;g<m;g++)if(c[g].visible&&c[g].active){const y=c[g].geometryIndex;let x=!1;if(d&&(this.getMatrixAt(g,Xn),this.getBoundingSphereAt(y,Es).applyMatrix4(Xn),x=!vh.intersectsSphere(Es)),!x){const v=u[y];l[_]=v.start*a,h[_]=v.count,p[_]=g,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,o){this.onBeforeRender(e,null,i,r,o)}}class xn extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zc=new C,jc=new C,$d=new We,lo=new ms,Ua=new vn,yh=new C,ef=new C;class Mn extends St{constructor(e=new ct,t=new xn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Zc.fromBufferAttribute(t,i-1),jc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zc.distanceTo(jc);e.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;$d.copy(i).invert(),lo.copy(e.ray).applyMatrix4($d);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=l){const m=h.getX(_),y=h.getX(_+1),x=Oa(this,e,lo,c,m,y,_);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=Oa(this,e,lo,c,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=l){const m=Oa(this,e,lo,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Oa(this,e,lo,c,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oa(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Zc.fromBufferAttribute(a,i),jc.fromBufferAttribute(a,r),t.distanceSqToSegment(Zc,jc,yh,ef)>n)return;yh.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(yh);if(!(l<e.near||l>e.far))return{distance:l,point:ef.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const tf=new C,nf=new C;class xi extends Mn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)tf.fromBufferAttribute(t,i),nf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tf.distanceTo(nf);e.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cm extends Mn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nu extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sf=new We,Qh=new ms,Fa=new vn,Ba=new C;class Rm extends St{constructor(e=new ct,t=new Nu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;sf.copy(i).invert(),Qh.copy(e.ray).applyMatrix4(sf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const g=l.getX(p);Ba.fromBufferAttribute(u,g),rf(Ba,g,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Ba.fromBufferAttribute(u,p),rf(Ba,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rf(s,e,t,n,i,r,o){const a=Qh.distanceSqToPoint(s);if(a<t){const c=new C;Qh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Pm extends tn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:dn,this.magFilter=r!==void 0?r:dn,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Z_ extends Pm{constructor(e,t,n,i,r,o,a,c){super({},e,t,n,i,r,o,a,c),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class j_ extends tn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Sn,this.minFilter=Sn,this.generateMipmaps=!1,this.needsUpdate=!0}}class yl extends tn{constructor(e,t,n,i,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class J_ extends yl{constructor(e,t,n,i,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=jn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class K_ extends yl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,$i),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Q_ extends tn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uu extends tn{constructor(e,t,n,i,r,o,a,c,l,h=Zs){if(h!==Zs&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zs&&(n=es),n===void 0&&h===$s&&(n=Qs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new se:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],o=[],a=new C,c=new We;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ut(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bl extends yi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Im extends bl{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ou(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const ka=new C,bh=new Ou,Mh=new Ou,Sh=new Ou;class Dm extends yi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(ka.subVectors(i[0],i[1]).add(i[0]),l=ka);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ka.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ka),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),bh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,_,g),Mh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,_,g),Sh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Mh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Sh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(bh.calc(c),Mh.calc(c),Sh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function of(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function $_(s,e){const t=1-s;return t*t*e}function ev(s,e){return 2*(1-s)*s*e}function tv(s,e){return s*s*e}function Co(s,e,t,n){return $_(s,e)+ev(s,t)+tv(s,n)}function nv(s,e){const t=1-s;return t*t*t*e}function iv(s,e){const t=1-s;return 3*t*t*s*e}function sv(s,e){return 3*(1-s)*s*s*e}function rv(s,e){return s*s*s*e}function Ro(s,e,t,n,i){return nv(s,e)+iv(s,t)+sv(s,n)+rv(s,i)}class Fu extends yi{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ro(e,i.x,r.x,o.x,a.x),Ro(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lm extends yi{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ro(e,i.x,r.x,o.x,a.x),Ro(e,i.y,r.y,o.y,a.y),Ro(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bu extends yi{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nm extends yi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ku extends yi{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Co(e,i.x,r.x,o.x),Co(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zu extends yi{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Co(e,i.x,r.x,o.x),Co(e,i.y,r.y,o.y),Co(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vu extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(of(a,c.x,l.x,h.x,u.x),of(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var Jc=Object.freeze({__proto__:null,ArcCurve:Im,CatmullRomCurve3:Dm,CubicBezierCurve:Fu,CubicBezierCurve3:Lm,EllipseCurve:bl,LineCurve:Bu,LineCurve3:Nm,QuadraticBezierCurve:ku,QuadraticBezierCurve3:zu,SplineCurve:Vu});class Um extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Jc[i.type]().fromJSON(i))}return this}}class Vo extends Um{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Bu(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ku(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Fu(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new bl(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class na extends ct{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ut(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new C,d=new se,f=new C,p=new C,_=new C;let g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let y=0;y<=t;y++){const x=n+y*h*i,v=Math.sin(x),N=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*v,u.y=e[E].y,u.z=e[E].x*N,o.push(u.x,u.y,u.z),d.x=y/t,d.y=E/(e.length-1),a.push(d.x,d.y);const I=c[3*E+0]*v,L=c[3*E+1],w=c[3*E+0]*N;l.push(I,L,w)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const v=x+y*e.length,N=v,E=v+e.length,I=v+e.length+1,L=v+1;r.push(N,E,L),r.push(I,L,E)}this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("uv",new Pe(a,2)),this.setAttribute("normal",new Pe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.points,e.segments,e.phiStart,e.phiLength)}}class Ml extends na{constructor(e=1,t=1,n=4,i=8){const r=new Vo;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ml(e.radius,e.length,e.capSegments,e.radialSegments)}}class Sl extends ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new C,h=new se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class on extends ct{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function y(){const v=new C,N=new C;let E=0;const I=(t-e)/n;for(let L=0;L<=r;L++){const w=[],S=L/r,F=S*(t-e)+e;for(let k=0;k<=i;k++){const H=k/i,W=H*c+a,K=Math.sin(W),B=Math.cos(W);N.x=F*K,N.y=-S*n+g,N.z=F*B,u.push(N.x,N.y,N.z),v.set(K,I,B).normalize(),d.push(v.x,v.y,v.z),f.push(H,1-S),w.push(p++)}_.push(w)}for(let L=0;L<i;L++)for(let w=0;w<r;w++){const S=_[w][L],F=_[w+1][L],k=_[w+1][L+1],H=_[w][L+1];(e>0||w!==0)&&(h.push(S,F,H),E+=3),(t>0||w!==r-1)&&(h.push(F,k,H),E+=3)}l.addGroup(m,E,0),m+=E}function x(v){const N=p,E=new se,I=new C;let L=0;const w=v===!0?e:t,S=v===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),p++;const F=p;for(let k=0;k<=i;k++){const W=k/i*c+a,K=Math.cos(W),B=Math.sin(W);I.x=w*B,I.y=g*S,I.z=w*K,u.push(I.x,I.y,I.z),d.push(0,S,0),E.x=K*.5+.5,E.y=B*.5*S+.5,f.push(E.x,E.y),p++}for(let k=0;k<i;k++){const H=N+k,W=F+k;v===!0?h.push(W,W+1,H):h.push(W+1,W,H),L+=3}l.addGroup(m,L,v===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wl extends on{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new wl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gs extends ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new C,v=new C,N=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],v),f(t[E+2],N),c(x,v,N,y)}function c(y,x,v,N){const E=N+1,I=[];for(let L=0;L<=E;L++){I[L]=[];const w=y.clone().lerp(v,L/E),S=x.clone().lerp(v,L/E),F=E-L;for(let k=0;k<=F;k++)k===0&&L===E?I[L][k]=w:I[L][k]=w.clone().lerp(S,k/F)}for(let L=0;L<E;L++)for(let w=0;w<2*(E-L)-1;w++){const S=Math.floor(w/2);w%2===0?(d(I[L][S+1]),d(I[L+1][S]),d(I[L][S])):(d(I[L][S+1]),d(I[L+1][S+1]),d(I[L+1][S]))}}function l(y){const x=new C;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const y=new C;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=g(y)/2/Math.PI+.5,N=m(y)/Math.PI+.5;o.push(v,1-N)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],N=o[y+4],E=Math.max(x,v,N),I=Math.min(x,v,N);E>.9&&I<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),N<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function p(){const y=new C,x=new C,v=new C,N=new C,E=new se,I=new se,L=new se;for(let w=0,S=0;w<r.length;w+=9,S+=6){y.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(o[S+0],o[S+1]),I.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),N.copy(y).add(x).add(v).divideScalar(3);const F=g(N);_(E,S+0,y,F),_(I,S+2,x,F),_(L,S+4,v,F)}}function _(y,x,v,N){N<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=N/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.vertices,e.indices,e.radius,e.details)}}class El extends gs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new El(e.radius,e.detail)}}const za=new C,Va=new C,wh=new C,Ha=new Zn;class Om extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(js*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:g,c:m}=Ha;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Ha.getNormal(wh),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=u[y],N=u[x],E=Ha[h[y]],I=Ha[h[x]],L=`${v}_${N}`,w=`${N}_${v}`;w in d&&d[w]?(wh.dot(d[w].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(I.x,I.y,I.z)),d[w]=null):L in d||(d[L]={index0:l[y],index1:l[x],normal:wh.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];za.fromBufferAttribute(a,_),Va.fromBufferAttribute(a,g),f.push(za.x,za.y,za.z),f.push(Va.x,Va.y,Va.z)}this.setAttribute("position",new Pe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Js extends Vo{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Vo().fromJSON(i))}return this}}const ov={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Fm(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=uv(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let p=t;p<i;p+=t)u=s[p],d=s[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ho(r,o,t,a,c,f,0),o}};function Fm(s,e,t,n,i){let r,o;if(i===Mv(s,e,t,n)>0)for(r=e;r<t;r+=n)o=af(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=af(r,s[r],s[r+1],o);return o&&Tl(o,o.next)&&(Wo(o),o=o.next),o}function nr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Tl(t,t.next)||jt(t.prev,t,t.next)===0)){if(Wo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ho(s,e,t,n,i,r,o){if(!s)return;!o&&r&&gv(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?cv(s,n,i,r):av(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Wo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=lv(nr(s),e,t),Ho(s,e,t,n,i,r,2)):o===2&&hv(s,e,t,n,i,r):Ho(nr(s),e,t,n,i,r,1);break}}}function av(s){const e=s.prev,t=s,n=s.next;if(jt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Ur(i,a,r,c,o,l,p.x,p.y)&&jt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cv(s,e,t,n){const i=s.prev,r=s,o=s.next;if(jt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,p=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,m=$h(f,p,e,t,n),y=$h(_,g,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=m&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Ur(a,h,c,u,l,d,x.x,x.y)&&jt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Ur(a,h,c,u,l,d,v.x,v.y)&&jt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Ur(a,h,c,u,l,d,x.x,x.y)&&jt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Ur(a,h,c,u,l,d,v.x,v.y)&&jt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function lv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Tl(i,r)&&Bm(i,n,n.next,r)&&Go(i,r)&&Go(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Wo(n),Wo(n.next),n=s=r),n=n.next}while(n!==s);return nr(n)}function hv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xv(o,a)){let c=km(o,a);o=nr(o,o.next),c=nr(c,c.next),Ho(o,e,t,n,i,r,0),Ho(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function uv(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Fm(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(vv(l));for(i.sort(dv),r=0;r<i.length;r++)t=fv(i[r],t);return t}function dv(s,e){return s.x-e.x}function fv(s,e){const t=pv(s,e);if(!t)return e;const n=km(t,s);return nr(n,n.next),nr(t,t.next)}function pv(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ur(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Go(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&mv(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function mv(s,e){return jt(s.prev,s,e.prev)<0&&jt(e.next,s,s.next)<0}function gv(s,e,t,n){let i=s;do i.z===0&&(i.z=$h(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,_v(i)}function _v(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function $h(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function vv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ur(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function xv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!yv(s,e)&&(Go(s,e)&&Go(e,s)&&bv(s,e)&&(jt(s.prev,s,e.prev)||jt(s,e.prev,e))||Tl(s,e)&&jt(s.prev,s,s.next)>0&&jt(e.prev,e,e.next)>0)}function jt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Tl(s,e){return s.x===e.x&&s.y===e.y}function Bm(s,e,t,n){const i=Wa(jt(s,e,t)),r=Wa(jt(s,e,n)),o=Wa(jt(t,n,s)),a=Wa(jt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ga(s,t,e)||r===0&&Ga(s,n,e)||o===0&&Ga(t,s,n)||a===0&&Ga(t,e,n))}function Ga(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Wa(s){return s>0?1:s<0?-1:0}function yv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Bm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Go(s,e){return jt(s.prev,s,s.next)<0?jt(s,e,s.next)>=0&&jt(s,s.prev,e)>=0:jt(s,e,s.prev)<0||jt(s,s.next,e)<0}function bv(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function km(s,e){const t=new eu(s.i,s.x,s.y),n=new eu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function af(s,e,t,n){const i=new eu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Wo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function eu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ai{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ai.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];cf(e),lf(n,e);let o=e.length;t.forEach(cf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,lf(n,t[c]);const a=ov.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function cf(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function lf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Al extends ct{constructor(e=new Js([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Pe(i,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Sv;let x,v=!1,N,E,I,L;m&&(x=m.getSpacedPoints(h),v=!0,d=!1,N=m.computeFrenetFrames(h,!1),E=new C,I=new C,L=new C),d||(g=0,f=0,p=0,_=0);const w=a.extractPoints(l);let S=w.shape;const F=w.holes;if(!Ai.isClockWise(S)){S=S.reverse();for(let pe=0,fe=F.length;pe<fe;pe++){const O=F[pe];Ai.isClockWise(O)&&(F[pe]=O.reverse())}}const H=Ai.triangulateShape(S,F),W=S;for(let pe=0,fe=F.length;pe<fe;pe++){const O=F[pe];S=S.concat(O)}function K(pe,fe,O){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(fe,O)}const B=S.length,$=H.length;function V(pe,fe,O){let qe,ge,Ue;const be=pe.x-fe.x,it=pe.y-fe.y,Ie=O.x-pe.x,U=O.y-pe.y,T=be*be+it*it,Y=be*U-it*Ie;if(Math.abs(Y)>Number.EPSILON){const oe=Math.sqrt(T),de=Math.sqrt(Ie*Ie+U*U),ae=fe.x-it/oe,Xe=fe.y+be/oe,Ae=O.x-U/de,Oe=O.y+Ie/de,yt=((Ae-ae)*U-(Oe-Xe)*Ie)/(be*U-it*Ie);qe=ae+be*yt-pe.x,ge=Xe+it*yt-pe.y;const ve=qe*qe+ge*ge;if(ve<=2)return new se(qe,ge);Ue=Math.sqrt(ve/2)}else{let oe=!1;be>Number.EPSILON?Ie>Number.EPSILON&&(oe=!0):be<-Number.EPSILON?Ie<-Number.EPSILON&&(oe=!0):Math.sign(it)===Math.sign(U)&&(oe=!0),oe?(qe=-it,ge=be,Ue=Math.sqrt(T)):(qe=be,ge=it,Ue=Math.sqrt(T/2))}return new se(qe/Ue,ge/Ue)}const j=[];for(let pe=0,fe=W.length,O=fe-1,qe=pe+1;pe<fe;pe++,O++,qe++)O===fe&&(O=0),qe===fe&&(qe=0),j[pe]=V(W[pe],W[O],W[qe]);const ce=[];let ue,Me=j.concat();for(let pe=0,fe=F.length;pe<fe;pe++){const O=F[pe];ue=[];for(let qe=0,ge=O.length,Ue=ge-1,be=qe+1;qe<ge;qe++,Ue++,be++)Ue===ge&&(Ue=0),be===ge&&(be=0),ue[qe]=V(O[qe],O[Ue],O[be]);ce.push(ue),Me=Me.concat(ue)}for(let pe=0;pe<g;pe++){const fe=pe/g,O=f*Math.cos(fe*Math.PI/2),qe=p*Math.sin(fe*Math.PI/2)+_;for(let ge=0,Ue=W.length;ge<Ue;ge++){const be=K(W[ge],j[ge],qe);te(be.x,be.y,-O)}for(let ge=0,Ue=F.length;ge<Ue;ge++){const be=F[ge];ue=ce[ge];for(let it=0,Ie=be.length;it<Ie;it++){const U=K(be[it],ue[it],qe);te(U.x,U.y,-O)}}}const xe=p+_;for(let pe=0;pe<B;pe++){const fe=d?K(S[pe],Me[pe],xe):S[pe];v?(I.copy(N.normals[0]).multiplyScalar(fe.x),E.copy(N.binormals[0]).multiplyScalar(fe.y),L.copy(x[0]).add(I).add(E),te(L.x,L.y,L.z)):te(fe.x,fe.y,0)}for(let pe=1;pe<=h;pe++)for(let fe=0;fe<B;fe++){const O=d?K(S[fe],Me[fe],xe):S[fe];v?(I.copy(N.normals[pe]).multiplyScalar(O.x),E.copy(N.binormals[pe]).multiplyScalar(O.y),L.copy(x[pe]).add(I).add(E),te(L.x,L.y,L.z)):te(O.x,O.y,u/h*pe)}for(let pe=g-1;pe>=0;pe--){const fe=pe/g,O=f*Math.cos(fe*Math.PI/2),qe=p*Math.sin(fe*Math.PI/2)+_;for(let ge=0,Ue=W.length;ge<Ue;ge++){const be=K(W[ge],j[ge],qe);te(be.x,be.y,u+O)}for(let ge=0,Ue=F.length;ge<Ue;ge++){const be=F[ge];ue=ce[ge];for(let it=0,Ie=be.length;it<Ie;it++){const U=K(be[it],ue[it],qe);v?te(U.x,U.y+x[h-1].y,x[h-1].x+O):te(U.x,U.y,u+O)}}}q(),ee();function q(){const pe=i.length/3;if(d){let fe=0,O=B*fe;for(let qe=0;qe<$;qe++){const ge=H[qe];ye(ge[2]+O,ge[1]+O,ge[0]+O)}fe=h+g*2,O=B*fe;for(let qe=0;qe<$;qe++){const ge=H[qe];ye(ge[0]+O,ge[1]+O,ge[2]+O)}}else{for(let fe=0;fe<$;fe++){const O=H[fe];ye(O[2],O[1],O[0])}for(let fe=0;fe<$;fe++){const O=H[fe];ye(O[0]+B*h,O[1]+B*h,O[2]+B*h)}}n.addGroup(pe,i.length/3-pe,0)}function ee(){const pe=i.length/3;let fe=0;ne(W,fe),fe+=W.length;for(let O=0,qe=F.length;O<qe;O++){const ge=F[O];ne(ge,fe),fe+=ge.length}n.addGroup(pe,i.length/3-pe,1)}function ne(pe,fe){let O=pe.length;for(;--O>=0;){const qe=O;let ge=O-1;ge<0&&(ge=pe.length-1);for(let Ue=0,be=h+g*2;Ue<be;Ue++){const it=B*Ue,Ie=B*(Ue+1),U=fe+qe+it,T=fe+ge+it,Y=fe+ge+Ie,oe=fe+qe+Ie;tt(U,T,Y,oe)}}}function te(pe,fe,O){c.push(pe),c.push(fe),c.push(O)}function ye(pe,fe,O){ke(pe),ke(fe),ke(O);const qe=i.length/3,ge=y.generateTopUV(n,i,qe-3,qe-2,qe-1);wt(ge[0]),wt(ge[1]),wt(ge[2])}function tt(pe,fe,O,qe){ke(pe),ke(fe),ke(qe),ke(fe),ke(O),ke(qe);const ge=i.length/3,Ue=y.generateSideWallUV(n,i,ge-6,ge-3,ge-2,ge-1);wt(Ue[0]),wt(Ue[1]),wt(Ue[3]),wt(Ue[1]),wt(Ue[2]),wt(Ue[3])}function ke(pe){i.push(c[pe*3+0]),i.push(c[pe*3+1]),i.push(c[pe*3+2])}function wt(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Jc[i.type]().fromJSON(i)),new Al(n,e.options)}}const Sv={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new se(r,o),new se(a,c),new se(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-u),new se(d,1-p),new se(_,1-m)]:[new se(a,1-c),new se(h,1-u),new se(f,1-p),new se(g,1-m)]}};function wv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cl extends gs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cl(e.radius,e.detail)}}class Zi extends gs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zi(e.radius,e.detail)}}class _s extends ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const y=m*d-o;for(let x=0;x<l;x++){const v=x*u-r;p.push(v,-y,0),_.push(0,0,1),g.push(x/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const x=y+l*m,v=y+l*(m+1),N=y+1+l*(m+1),E=y+1+l*m;f.push(x,v,E),f.push(v,N,E)}this.setIndex(f),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rl extends ct{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new C,p=new se;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,x=y,v=y+n+1,N=y+n+2,E=y+1;a.push(x,v,E),a.push(v,N,E)}}this.setIndex(a),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Pl extends ct{constructor(e=new Js([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Pe(i,3)),this.setAttribute("normal",new Pe(r,3)),this.setAttribute("uv",new Pe(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;Ai.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];Ai.isClockWise(y)===!0&&(p[g]=y.reverse())}const _=Ai.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){const y=_[g],x=y[0]+u,v=y[1]+u,N=y[2]+u;n.push(x,v,N),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ev(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Pl(n,e.curveSegments)}}function Ev(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Yr extends ct{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new C,d=new C,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let N=0;N<=t;N++){const E=N/t;u.x=-e*Math.cos(i+E*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+E*r)*Math.sin(o+x*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(E+v,1-x),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const x=h[m][y+1],v=h[m][y],N=h[m+1][y],E=h[m+1][y+1];(m!==0||o>0)&&f.push(x,v,E),(m!==n-1||c<Math.PI)&&f.push(v,N,E)}this.setIndex(f),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Il extends gs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Il(e.radius,e.detail)}}class qi extends ct{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const _=p/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const _=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,y=(i+1)*f+p;o.push(_,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dl extends ct{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],h=[],u=new C,d=new C,f=new C,p=new C,_=new C,g=new C,m=new C;for(let x=0;x<=n;++x){const v=x/n*r*Math.PI*2;y(v,r,o,e,f),y(v+.01,r,o,e,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let N=0;N<=i;++N){const E=N/i*Math.PI*2,I=-t*Math.cos(E),L=t*Math.sin(E);u.x=f.x+(I*m.x+L*_.x),u.y=f.y+(I*m.y+L*_.y),u.z=f.z+(I*m.z+L*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(x/n),h.push(N/i)}}for(let x=1;x<=n;x++)for(let v=1;v<=i;v++){const N=(i+1)*(x-1)+(v-1),E=(i+1)*x+(v-1),I=(i+1)*x+v,L=(i+1)*(x-1)+v;a.push(N,E,L),a.push(E,I,L)}this.setIndex(a),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2));function y(x,v,N,E,I){const L=Math.cos(x),w=Math.sin(x),S=N/v*x,F=Math.cos(S);I.x=E*(2+F)*.5*L,I.y=E*(2+F)*w*.5,I.z=E*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ll extends ct{constructor(e=new zu(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,c=new C,l=new se;let h=new C;const u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function _(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),y(),m()}function g(x){h=e.getPointAt(x/t,h);const v=o.normals[x],N=o.binormals[x];for(let E=0;E<=i;E++){const I=E/i*Math.PI*2,L=Math.sin(I),w=-Math.cos(I);c.x=w*v.x+L*N.x,c.y=w*v.y+L*N.y,c.z=w*v.z+L*N.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=t;x++)for(let v=1;v<=i;v++){const N=(i+1)*(x-1)+(v-1),E=(i+1)*x+(v-1),I=(i+1)*x+v,L=(i+1)*(x-1)+v;p.push(N,E,L),p.push(E,I,L)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=i;v++)l.x=x/t,l.y=v/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ll(new Jc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class zm extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new C,r=new C;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),y=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),hf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,u=3*a+(l+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),hf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Pe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function hf(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var uf=Object.freeze({__proto__:null,BoxGeometry:$t,CapsuleGeometry:Ml,CircleGeometry:Sl,ConeGeometry:wl,CylinderGeometry:on,DodecahedronGeometry:El,EdgesGeometry:Om,ExtrudeGeometry:Al,IcosahedronGeometry:Cl,LatheGeometry:na,OctahedronGeometry:Zi,PlaneGeometry:_s,PolyhedronGeometry:gs,RingGeometry:Rl,ShapeGeometry:Pl,SphereGeometry:Yr,TetrahedronGeometry:Il,TorusGeometry:qi,TorusKnotGeometry:Dl,TubeGeometry:Ll,WireframeGeometry:zm});class Vm extends Ln{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Te(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Hm extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hu extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gm extends Hu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Kc extends Ln{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wm extends Ln{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Xm extends Ln{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Gu extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nl extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wu extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qm extends Ln{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Te(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ym extends xn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Xs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Zm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function jm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function tu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Xu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function Tv(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(!(p<t||p>=n)){u.push(l.times[f]);for(let _=0;_<h;++_)d.push(l.values[f*h+_])}}u.length!==0&&(l.times=Xs(u,l.times.constructor),l.values=Xs(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function Av(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let _;if(r<=a.times[0]){const m=h,y=u-h;_=a.values.slice(m,y)}else if(r>=a.times[p]){const m=p*u+h,y=m+u-h;_=a.values.slice(m,y)}else{const m=a.createInterpolant(),y=h,x=u-h;m.evaluate(r),_=m.resultBuffer.slice(y,x)}c==="quaternion"&&new Bt().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let m=0;m<g;++m){const y=m*f+d;if(c==="quaternion")Bt.multiplyQuaternionsFlat(l.values,y,_,0,l.values,y);else{const x=f-d*2;for(let v=0;v<x;++v)l.values[y+v]-=_[v]}}}return s.blendMode=Tu,s}const Cv={convertArray:Xs,isTypedArray:Zm,getKeyframeOrder:jm,sortedArray:tu,flattenJSON:Xu,subclip:Tv,makeClipAdditive:Av};class ia{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jm extends ia{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hs,endingEnd:Hs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gs:r=e,a=2*t-n;break;case Oo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gs:o=e,c=2*n-t;break;case Oo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*_+.5*p,v=f*g-f*_;for(let N=0;N!==a;++N)r[N]=m*o[h+N]+y*o[l+N]+x*o[c+N]+v*o[u+N];return r}}class qu extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Km extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Km(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case Yc:t=this.InterpolantFactoryMethodLinear;break;case ac:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Yc;case this.InterpolantFactoryMethodSmooth:return ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Zm(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ac,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Yc;class or extends bi{constructor(e,t,n){super(e,t,n)}}or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Uo;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class Yu extends bi{}Yu.prototype.ValueTypeName="color";class Xo extends bi{}Xo.prototype.ValueTypeName="number";class Qm extends ia{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Bt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Zr extends bi{InterpolantFactoryMethodLinear(e){return new Qm(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends bi{constructor(e,t,n){super(e,t,n)}}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Uo;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends bi{}ir.prototype.ValueTypeName="vector";class sr{constructor(e="",t=-1,n=[],i=hl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Pv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(bi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=jm(c);c=tu(c,1,h),l=tu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Xo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const g=[],m=[];Xu(f,g,m,p),g.length!==0&&_.push(new u(d,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){const x=d[p];g.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new Xo(".morphTargetInfluence["+_+"]",g,m))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(ir,f+".position",d,"pos",i),n(Zr,f+".quaternion",d,"rot",i),n(ir,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xo;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return Yu;case"quaternion":return Zr;case"bool":case"boolean":return or;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Pv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rv(s.type);if(s.times===void 0){const t=[],n=[];Xu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ji={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Zu{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const cr=new Zu;class wn{constructor(e){this.manager=e!==void 0?e:cr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class Iv extends Error{constructor(e,t){super(e),this.response=t}}class vi extends wn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ji.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:i});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Vi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){y();function y(){u.read().then(({done:x,value:v})=>{if(x)m.close();else{_+=v.byteLength;const N=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let E=0,I=h.length;E<I;E++){const L=h[E];L.onProgress&&L.onProgress(N)}m.enqueue(v),y()}},x=>{m.error(x)})}}});return new Response(g)}else throw new Iv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{ji.add(e,l);const h=Vi[e];delete Vi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Vi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Vi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dv extends wn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new vi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=sr.parse(e[n]);t.push(i)}return t}}class Lv extends wn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=[],a=new yl,c=new vi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(e[u],function(d){const f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=dn),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else c.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+_]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=dn),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class qo extends wn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ji.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=zo("img");function c(){h(),ji.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Nv extends wn{constructor(e){super(e)}load(e,t,n,i){const r=new $o;r.colorSpace=Zt;const o=new qo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class $m extends wn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Ti,a=new vi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:jn,o.wrapT=l.wrapT!==void 0?l.wrapT:jn,o.magFilter=l.magFilter!==void 0?l.magFilter:dn,o.minFilter=l.minFilter!==void 0?l.minFilter:dn,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=gi),l.mipmapCount===1&&(o.minFilter=dn),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class eg extends wn{constructor(e){super(e)}load(e,t,n,i){const r=new tn,o=new qo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class vs extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class tg extends vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Eh=new We,df=new C,ff=new C;class ju{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ff),t.updateMatrixWorld(),Eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Uv extends ju{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Vr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ju extends vs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Uv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pf=new We,ho=new C,Th=new C;class Ov extends ju{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(ho),Th.copy(n.position),Th.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Th),n.updateMatrixWorld(),i.makeTranslation(-ho.x,-ho.y,-ho.z),pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf)}}class Ku extends vs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ov}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lr extends pl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fv extends ju{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qu extends vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Fv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $u extends vs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ng extends vs{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ig{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class sg extends vs{constructor(e=new ig,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ul extends wn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,o=new vi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Te().setHex(o.value);break;case"v2":i.uniforms[r].value=new se().fromArray(o.value);break;case"v3":i.uniforms[r].value=new C().fromArray(o.value);break;case"v4":i.uniforms[r].value=new bt().fromArray(o.value);break;case"m3":i.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":i.uniforms[r].value=new We().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new se().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Ul.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Vm,SpriteMaterial:Du,RawShaderMaterial:Hm,ShaderMaterial:si,PointsMaterial:Nu,MeshPhysicalMaterial:Gm,MeshStandardMaterial:Hu,MeshPhongMaterial:Kc,MeshToonMaterial:Wm,MeshNormalMaterial:Xm,MeshLambertMaterial:Gu,MeshDepthMaterial:Nl,MeshDistanceMaterial:Wu,MeshBasicMaterial:ii,MeshMatcapMaterial:qm,LineDashedMaterial:Ym,LineBasicMaterial:xn,Material:Ln};return new t[e]}}class Qc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class rg extends ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class og extends wn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new vi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),y=Nr(g.type,m),x=new vl(y,g.stride);return x.uuid=g.uuid,t[p]=x,x}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=e.isInstancedBufferGeometry?new rg:new ct,a=e.data.index;if(a!==void 0){const f=Nr(a.type,a.array);o.setIndex(new Dt(f,1))}const c=e.data.attributes;for(const f in c){const p=c[f];let _;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);_=new tr(g,p.itemSize,p.offset,p.normalized)}else{const g=Nr(p.type,p.array),m=p.isInstancedBufferAttribute?Gr:Dt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(f,_)}const l=e.data.morphAttributes;if(l)for(const f in l){const p=l[f],_=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let x;if(y.isInterleavedBufferAttribute){const v=i(e.data,y.data);x=new tr(v,y.itemSize,y.offset,y.normalized)}else{const v=Nr(y.type,y.array);x=new Dt(v,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),_.push(x)}o.morphAttributes[f]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const _=u[f];o.addGroup(_.start,_.count,_.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new C;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new vn(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class Bv extends wn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?Qc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new vi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Qc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new vi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,c,a,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),t!==void 0){let u=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Js().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new ea().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new og;for(let r=0,o=e.length;r<o;r++){let a;const c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in uf?a=uf[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Ul;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=sr.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(h)}else return c.data?{data:Nr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Zu(t);r=new qo(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Ti(m.data,m.width,m.height)))}i[u.uuid]=new Ws(f)}else{const f=a(u.url);i[u.uuid]=new Ws(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:Nr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new qo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Ti(p.data,p.width,p.height)))}n[c.uuid]=new Ws(h)}else{const h=await r(c.url);n[c.uuid]=new Ws(h)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let h;Array.isArray(l)?(h=new $o,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new Ti:h=new tn,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,kv)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],mf),h.wrapT=n(a.wrap[1],mf)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,gf)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,gf)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,r){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":o=new _l,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Te(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new gl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new ml(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new cn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new lr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new $u(e.color,e.intensity);break;case"DirectionalLight":o=new Qu(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Ku(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new ng(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Ju(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new tg(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new sg().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=c(e.material),o=new Lu(h,u),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=c(e.material),o=new Se(h,u);break;case"InstancedMesh":h=a(e.geometry),u=c(e.material);const d=e.count,f=e.instanceMatrix,p=e.instanceColor;o=new Tm(h,u,d),o.instanceMatrix=new Gr(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new Gr(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=a(e.geometry),u=c(e.material),o=new Am(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{const g=new _n;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new vn;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=l(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=l(e.colorsTexture.uuid));break;case"LOD":o=new Em;break;case"Line":o=new Mn(a(e.geometry),c(e.material));break;case"LineLoop":o=new Cm(a(e.geometry),c(e.material));break;case"LineSegments":o=new xi(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new Rm(a(e.geometry),c(e.material));break;case"Sprite":o=new wm(c(e.material));break;case"Group":o=new Ei;break;case"Bone":o=new xl;break;default:o=new St}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new St}})}}const kv={UVMapping:il,CubeReflectionMapping:$i,CubeRefractionMapping:fs,EquirectangularReflectionMapping:Do,EquirectangularRefractionMapping:Lo,CubeUVReflectionMapping:Xr},mf={RepeatWrapping:Yi,ClampToEdgeWrapping:jn,MirroredRepeatWrapping:No},gf={NearestFilter:Sn,NearestMipmapNearestFilter:gu,NearestMipmapLinearFilter:Lr,LinearFilter:dn,LinearMipmapNearestFilter:bo,LinearMipmapLinearFilter:gi};class zv extends wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ji.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ji.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ji.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ji.add(e,c),r.manager.itemStart(e)}}let Xa;class ed{static getContext(){return Xa===void 0&&(Xa=new(window.AudioContext||window.webkitAudioContext)),Xa}static setContext(e){Xa=e}}class Vv extends wn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new vi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);ed.getContext().decodeAudioData(l,function(u){t(u)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(e)}}}const _f=new We,vf=new We,As=new We;class Hv{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new cn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new cn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,As.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,o=t.near*Math.tan(js*t.fov*.5)/t.zoom;let a,c;vf.elements[12]=-i,_f.elements[12]=i,a=-o*t.aspect+r,c=o*t.aspect+r,As.elements[0]=2*t.near/(c-a),As.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(As),a=-o*t.aspect-r,c=o*t.aspect-r,As.elements[0]=2*t.near/(c-a),As.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(As)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(vf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(_f)}}class ag extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class cg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xf(){return performance.now()}const Cs=new C,yf=new Bt,Gv=new C,Rs=new C;class Wv extends St{constructor(){super(),this.type="AudioListener",this.context=ed.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new cg}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Cs,yf,Gv),Rs.set(0,0,-1).applyQuaternion(yf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Cs.x,i),t.positionY.linearRampToValueAtTime(Cs.y,i),t.positionZ.linearRampToValueAtTime(Cs.z,i),t.forwardX.linearRampToValueAtTime(Rs.x,i),t.forwardY.linearRampToValueAtTime(Rs.y,i),t.forwardZ.linearRampToValueAtTime(Rs.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Cs.x,Cs.y,Cs.z),t.setOrientation(Rs.x,Rs.y,Rs.z,n.x,n.y,n.z)}}class lg extends St{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Ps=new C,bf=new Bt,Xv=new C,Is=new C;class qv extends lg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ps,bf,Xv),Is.set(0,0,1).applyQuaternion(bf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ps.x,n),t.positionY.linearRampToValueAtTime(Ps.y,n),t.positionZ.linearRampToValueAtTime(Ps.z,n),t.orientationX.linearRampToValueAtTime(Is.x,n),t.orientationY.linearRampToValueAtTime(Is.y,n),t.orientationZ.linearRampToValueAtTime(Is.z,n)}else t.setPosition(Ps.x,Ps.y,Ps.z),t.setOrientation(Is.x,Is.y,Is.z)}}class Yv{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class hg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Bt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Bt.multiplyQuaternionsFlat(e,o,e,t,e,n),Bt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const td="\\[\\]\\.:\\/",Zv=new RegExp("["+td+"]","g"),nd="[^"+td+"]",jv="[^"+td.replace("\\.","")+"]",Jv=/((?:WC+[\/:])*)/.source.replace("WC",nd),Kv=/(WCOD+)?/.source.replace("WCOD",jv),Qv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nd),$v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nd),ex=new RegExp("^"+Jv+Kv+Qv+$v+"$"),tx=["material","materials","bones","map"];class nx{constructor(e,t,n){const i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zv,"")}static parseTrackName(e){const t=ex.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=nx;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ix{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ni(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=t[f];if(p===void 0){p=c++,t[f]=p,e.push(d);for(let _=0,g=o;_!==g;++_)r[_].push(new At(d,n[_],i[_]))}else if(p<l){a=e[p];const _=--l,g=e[_];t[g.uuid]=p,e[p]=g,t[f]=_,e[_]=d;for(let m=0,y=o;m!==y;++m){const x=r[m],v=x[_];let N=x[p];x[p]=v,N===void 0&&(N=new At(d,n[m],i[m])),x[_]=N}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,h=t[l];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,p=i;f!==p;++f){const _=n[f],g=_[u],m=_[h];_[h]=g,_[u]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],p=--o,_=e[p];t[f.uuid]=u,e[u]=f,t[_.uuid]=d,e[d]=_,e.pop();for(let g=0,m=i;g!==m;++g){const y=n[g],x=y[d],v=y[p];y[u]=x,y[d]=v,y.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(u);for(let d=h,f=c.length;d!==f;++d){const p=c[d];u[d]=new At(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class ug{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Hs,endingEnd:Hs};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Tu:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case hl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===rm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===im){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Gs,i.endingEnd=Gs):(e?i.endingStart=this.zeroSlopeAtStart?Gs:Hs:i.endingStart=Oo,t?i.endingEnd=this.zeroSlopeAtEnd?Gs:Hs:i.endingEnd=Oo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const sx=new Float32Array(1);class rx extends Di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new hg(At.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new qu(new Float32Array(2),new Float32Array(2),1,sx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?sr.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=hl),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new ug(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?sr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ox extends ul{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new dl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ax extends ul{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTargetArray=!0,this.depth=n,this.texture=new Qo(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class id{constructor(e){this.value=e}clone(){return new id(this.value.clone===void 0?this.value:this.value.clone())}}let cx=0;class lx extends Di{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:cx++}),this.name="",this.usage=Bo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class hx extends vl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class ux{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Mf=new We;class sd{constructor(e,t,n=0,i=1/0){this.ray=new ms(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mf),this}intersectObject(e,t=!0,n=[]){return nu(e,this,n,t),n.sort(Sf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)nu(e[i],this,n,t);return n.sort(Sf),n}}function Sf(s,e){return s.distance-e.distance}function nu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)nu(r[o],e,t,!0)}}class iu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dx{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class rd{constructor(e,t,n,i){rd.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const wf=new se;class fx{constructor(e=new se(1/0,1/0),t=new se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ef=new C,qa=new C;class dg{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ef.subVectors(e,this.start),qa.subVectors(this.end,this.start);const n=qa.dot(qa);let r=qa.dot(Ef)/n;return t&&(r=ut(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Tf=new C;class px extends St{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ct,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,h=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Pe(i,3));const r=new xn({fog:!1,toneMapped:!1});this.cone=new xi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Tf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Tf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const as=new C,Ya=new We,Ah=new We;class mx extends xi{constructor(e){const t=fg(e),n=new ct,i=[],r=[],o=new Te(0,0,1),a=new Te(0,1,0);for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Pe(i,3)),n.setAttribute("color",new Pe(r,3));const c=new xn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ah.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(Ya.multiplyMatrices(Ah,a.matrixWorld),as.setFromMatrixPosition(Ya),i.setXYZ(o,as.x,as.y,as.z),Ya.multiplyMatrices(Ah,a.parent.matrixWorld),as.setFromMatrixPosition(Ya),i.setXYZ(o+1,as.x,as.y,as.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function fg(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,fg(s.children[t]));return e}class gx extends Se{constructor(e,t,n){const i=new Yr(t,4,2),r=new ii({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const _x=new C,Af=new Te,Cf=new Te;class vx extends St{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Zi(t);i.rotateY(Math.PI*.5),this.material=new ii({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Dt(o,3)),this.add(new Se(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Af.copy(this.light.color),Cf.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Af:Cf;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(_x.setFromMatrixPosition(this.light.matrixWorld).negate())}}class pg extends xi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Te(n),i=new Te(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const _=d===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new ct;h.setAttribute("position",new Pe(c,3)),h.setAttribute("color",new Pe(l,3));const u=new xn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xx extends xi{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new Te(r),o=new Te(o);const a=[],c=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const _=u&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?r:o,f=e-e/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;a.push(g,0,m),c.push(d.r,d.g,d.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,a.push(g,0,m),c.push(d.r,d.g,d.b)}}const l=new ct;l.setAttribute("position",new Pe(a,3)),l.setAttribute("color",new Pe(c,3));const h=new xn({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Rf=new C,Za=new C,Pf=new C;class yx extends St{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new ct;i.setAttribute("position",new Pe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new xn({fog:!1,toneMapped:!1});this.lightPlane=new Mn(i,r),this.add(this.lightPlane),i=new ct,i.setAttribute("position",new Pe([0,0,0,0,0,1],3)),this.targetLine=new Mn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Rf.setFromMatrixPosition(this.light.matrixWorld),Za.setFromMatrixPosition(this.light.target.matrixWorld),Pf.subVectors(Za,Rf),this.lightPlane.lookAt(Za),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Za),this.targetLine.scale.z=Pf.length()}}const ja=new C,Qt=new pl;class bx extends xi{constructor(e){const t=new ct,n=new xn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new Pe(i,3)),t.setAttribute("color",new Pe(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Te(16755200),h=new Te(16711680),u=new Te(43775),d=new Te(16777215),f=new Te(3355443);this.setColors(l,h,u,d,f)}setColors(e,t,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Qt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);const r=this.camera.coordinateSystem===_i?-1:0;nn("c",t,e,Qt,0,0,r),nn("t",t,e,Qt,0,0,1),nn("n1",t,e,Qt,-1,-1,r),nn("n2",t,e,Qt,n,-1,r),nn("n3",t,e,Qt,-1,i,r),nn("n4",t,e,Qt,n,i,r),nn("f1",t,e,Qt,-1,-1,1),nn("f2",t,e,Qt,n,-1,1),nn("f3",t,e,Qt,-1,i,1),nn("f4",t,e,Qt,n,i,1),nn("u1",t,e,Qt,n*.7,i*1.1,r),nn("u2",t,e,Qt,-1*.7,i*1.1,r),nn("u3",t,e,Qt,0,i*2,r),nn("cf1",t,e,Qt,-1,0,1),nn("cf2",t,e,Qt,n,0,1),nn("cf3",t,e,Qt,0,-1,1),nn("cf4",t,e,Qt,0,i,1),nn("cn1",t,e,Qt,-1,0,r),nn("cn2",t,e,Qt,n,0,r),nn("cn3",t,e,Qt,0,-1,r),nn("cn4",t,e,Qt,0,i,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function nn(s,e,t,n,i,r,o){ja.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],ja.x,ja.y,ja.z)}}const Ja=new _n;class Mx extends xi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new ct;r.setIndex(new Dt(n,1)),r.setAttribute("position",new Dt(i,3)),super(r,new xn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ja.setFromObject(this.object),Ja.isEmpty())return;const t=Ja.min,n=Ja.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sx extends xi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ct;r.setIndex(new Dt(n,1)),r.setAttribute("position",new Pe(i,3)),super(r,new xn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class wx extends Mn{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new ct;o.setAttribute("position",new Pe(r,3)),o.computeBoundingSphere(),super(o,new xn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new ct;c.setAttribute("position",new Pe(a,3)),c.computeBoundingSphere(),this.add(new Se(c,new ii({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const If=new C;let Ka,Ch;class Ex extends St{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Ka===void 0&&(Ka=new ct,Ka.setAttribute("position",new Pe([0,0,0,0,1,0],3)),Ch=new on(0,.5,1,5,1),Ch.translate(0,-.5,0)),this.position.copy(t),this.line=new Mn(Ka,new xn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Se(Ch,new ii({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{If.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(If,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Tx extends xi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ct;i.setAttribute("position",new Pe(t,3)),i.setAttribute("color",new Pe(n,3));const r=new xn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Te,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ax{constructor(){this.type="ShapePath",this.color=new Te,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Vo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const y=[];for(let x=0,v=m.length;x<v;x++){const N=m[x],E=new Js;E.curves=N.curves,y.push(E)}return y}function n(m,y){const x=y.length;let v=!1;for(let N=x-1,E=0;E<x;N=E++){let I=y[N],L=y[E],w=L.x-I.x,S=L.y-I.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(I=y[E],w=-w,L=y[N],S=-S),m.y<I.y||m.y>L.y)continue;if(m.y===I.y){if(m.x===I.x)return!0}else{const F=S*(m.x-I.x)-w*(m.y-I.y);if(F===0)return!0;if(F<0)continue;v=!v}}else{if(m.y!==I.y)continue;if(L.x<=m.x&&m.x<=I.x||I.x<=m.x&&m.x<=L.x)return!0}}return v}const i=Ai.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Js,c.curves=a.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],p=0,_;d[p]=void 0,f[p]=[];for(let m=0,y=r.length;m<y;m++)a=r[m],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!h&&d[p]&&p++,d[p]={s:new Js,p:_},d[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:_[0]});if(!d[0])return t(r);if(d.length>1){let m=!1,y=0;for(let x=0,v=d.length;x<v;x++)u[x]=[];for(let x=0,v=d.length;x<v;x++){const N=f[x];for(let E=0;E<N.length;E++){const I=N[E];let L=!0;for(let w=0;w<d.length;w++)n(I.p,d[w].p)&&(x!==w&&y++,L?(L=!1,u[w].push(I)):m=!0);L&&u[x].push(I)}}y>0&&m===!1&&(f=u)}let g;for(let m=0,y=d.length;m<y;m++){c=d[m].s,l.push(c),g=f[m];for(let x=0,v=g.length;x<v;x++)c.holes.push(g[x].h)}return l}}class od extends Di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Cx(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Rx(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Px(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function su(s,e,t,n){const i=Ix(n);switch(t){case yu:return s*e;case Mu:return s*e;case Su:return s*e*2;case al:return s*e/i.components*i.byteLength;case Ko:return s*e/i.components*i.byteLength;case wu:return s*e*2/i.components*i.byteLength;case cl:return s*e*2/i.components*i.byteLength;case bu:return s*e*3/i.components*i.byteLength;case kn:return s*e*4/i.components*i.byteLength;case ll:return s*e*4/i.components*i.byteLength;case Mo:case So:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wo:case Eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mc:case wc:return Math.max(s,16)*Math.max(e,8)/4;case bc:case Sc:return Math.max(s,8)*Math.max(e,8)/2;case Ec:case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case To:case Hc:case Gc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Eu:case Wc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xc:case qc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ix(s){switch(s){case Ri:case _u:return{byteLength:1,components:1};case zr:case vu:case qr:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case es:case sl:case Jn:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const Dx={contain:Cx,cover:Rx,fill:Px,getByteLength:su};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lx(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ux=`#ifdef USE_ALPHAHASH
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
#endif`,Ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
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
#endif`,Vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yx=`#ifdef USE_IRIDESCENCE
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
#endif`,Zx=`#ifdef USE_BUMPMAP
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iy=`#define PI 3.141592653589793
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
} // validated`,sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ry=`vec3 transformedNormal = objectNormal;
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
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,by=`#ifdef USE_GRADIENTMAP
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
}`,My=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ey=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iy=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Dy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Ly=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gy=`#if defined( USE_POINTS_UV )
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
#endif`,Wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nb=`#ifdef USE_NORMALMAP
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
#endif`,ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yb=`#ifdef USE_SKINNING
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
#endif`,bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,Sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nb=`uniform sampler2D t2D;
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`#include <common>
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
}`,zb=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vb=`#define DISTANCE
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
}`,Hb=`#define DISTANCE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`uniform float scale;
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
}`,qb=`uniform vec3 diffuse;
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
}`,Yb=`#include <common>
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
}`,Zb=`uniform vec3 diffuse;
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
}`,jb=`#define LAMBERT
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
}`,Jb=`#define LAMBERT
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
}`,Kb=`#define MATCAP
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
}`,Qb=`#define MATCAP
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
}`,$b=`#define NORMAL
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
}`,eM=`#define NORMAL
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
}`,tM=`#define PHONG
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
}`,nM=`#define PHONG
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
}`,iM=`#define STANDARD
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
}`,sM=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,rM=`#define TOON
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
}`,oM=`#define TOON
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
}`,aM=`uniform float size;
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
}`,cM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,hM=`uniform vec3 color;
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
}`,uM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,dM=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Nx,alphahash_pars_fragment:Ux,alphamap_fragment:Ox,alphamap_pars_fragment:Fx,alphatest_fragment:Bx,alphatest_pars_fragment:kx,aomap_fragment:zx,aomap_pars_fragment:Vx,batching_pars_vertex:Hx,batching_vertex:Gx,begin_vertex:Wx,beginnormal_vertex:Xx,bsdfs:qx,iridescence_fragment:Yx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:jx,clipping_planes_pars_fragment:Jx,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:Qx,color_fragment:$x,color_pars_fragment:ey,color_pars_vertex:ty,color_vertex:ny,common:iy,cube_uv_reflection_fragment:sy,defaultnormal_vertex:ry,displacementmap_pars_vertex:oy,displacementmap_vertex:ay,emissivemap_fragment:cy,emissivemap_pars_fragment:ly,colorspace_fragment:hy,colorspace_pars_fragment:uy,envmap_fragment:dy,envmap_common_pars_fragment:fy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ty,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:vy,fog_fragment:xy,fog_pars_fragment:yy,gradientmap_pars_fragment:by,lightmap_pars_fragment:My,lights_lambert_fragment:Sy,lights_lambert_pars_fragment:wy,lights_pars_begin:Ey,lights_toon_fragment:Ay,lights_toon_pars_fragment:Cy,lights_phong_fragment:Ry,lights_phong_pars_fragment:Py,lights_physical_fragment:Iy,lights_physical_pars_fragment:Dy,lights_fragment_begin:Ly,lights_fragment_maps:Ny,lights_fragment_end:Uy,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:By,logdepthbuf_vertex:ky,map_fragment:zy,map_pars_fragment:Vy,map_particle_fragment:Hy,map_particle_pars_fragment:Gy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:Xy,morphinstance_vertex:qy,morphcolor_vertex:Yy,morphnormal_vertex:Zy,morphtarget_pars_vertex:jy,morphtarget_vertex:Jy,normal_fragment_begin:Ky,normal_fragment_maps:Qy,normal_pars_fragment:$y,normal_pars_vertex:eb,normal_vertex:tb,normalmap_pars_fragment:nb,clearcoat_normal_fragment_begin:ib,clearcoat_normal_fragment_maps:sb,clearcoat_pars_fragment:rb,iridescence_pars_fragment:ob,opaque_fragment:ab,packing:cb,premultiplied_alpha_fragment:lb,project_vertex:hb,dithering_fragment:ub,dithering_pars_fragment:db,roughnessmap_fragment:fb,roughnessmap_pars_fragment:pb,shadowmap_pars_fragment:mb,shadowmap_pars_vertex:gb,shadowmap_vertex:_b,shadowmask_pars_fragment:vb,skinbase_vertex:xb,skinning_pars_vertex:yb,skinning_vertex:bb,skinnormal_vertex:Mb,specularmap_fragment:Sb,specularmap_pars_fragment:wb,tonemapping_fragment:Eb,tonemapping_pars_fragment:Tb,transmission_fragment:Ab,transmission_pars_fragment:Cb,uv_pars_fragment:Rb,uv_pars_vertex:Pb,uv_vertex:Ib,worldpos_vertex:Db,background_vert:Lb,background_frag:Nb,backgroundCube_vert:Ub,backgroundCube_frag:Ob,cube_vert:Fb,cube_frag:Bb,depth_vert:kb,depth_frag:zb,distanceRGBA_vert:Vb,distanceRGBA_frag:Hb,equirect_vert:Gb,equirect_frag:Wb,linedashed_vert:Xb,linedashed_frag:qb,meshbasic_vert:Yb,meshbasic_frag:Zb,meshlambert_vert:jb,meshlambert_frag:Jb,meshmatcap_vert:Kb,meshmatcap_frag:Qb,meshnormal_vert:$b,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:sM,meshtoon_vert:rM,meshtoon_frag:oM,points_vert:aM,points_frag:cM,shadow_vert:lM,shadow_frag:hM,sprite_vert:uM,sprite_frag:dM},Ee={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},oi={basic:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Te(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:On([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:On([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Te(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:On([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:On([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:On([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:On([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:On([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:On([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:On([Ee.common,Ee.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:On([Ee.lights,Ee.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};oi.physical={uniforms:On([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Qa={r:0,b:0,g:0},Ds=new Kn,fM=new We;function pM(s,e,t,n,i,r,o){const a=new Te(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function p(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const N=p(x);N===null?m(a,c):N&&N.isColor&&(m(N,1),v=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,v){const N=p(v);N&&(N.isCubeTexture||N.mapping===Xr)?(h===void 0&&(h=new Se(new $t(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Hr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ds.copy(v.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(Ds)),h.material.toneMapped=xt.getTransfer(N.colorSpace)!==Ut,(u!==N||d!==N.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=N,d=N.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new Se(new _s(2,2),new si({name:"BackgroundMaterial",uniforms:Hr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=xt.getTransfer(N.colorSpace)!==Ut,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(u!==N||d!==N.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=N,d=N.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(Qa,ym(s)),n.buffers.color.setClear(Qa.r,Qa.g,Qa.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(a,c)},render:_,addToRenderList:g,dispose:y}}function mM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,F,k,H,W){let K=!1;const B=u(H,k,F);r!==B&&(r=B,l(r.object)),K=f(S,H,k,W),K&&p(S,H,k,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(S,F,k,H),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,F,k){const H=k.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let K=W[F.id];K===void 0&&(K={},W[F.id]=K);let B=K[H];return B===void 0&&(B=d(c()),K[H]=B),B}function d(S){const F=[],k=[],H=[];for(let W=0;W<t;W++)F[W]=0,k[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:H,object:S,attributes:{},index:null}}function f(S,F,k,H){const W=r.attributes,K=F.attributes;let B=0;const $=k.getAttributes();for(const V in $)if($[V].location>=0){const ce=W[V];let ue=K[V];if(ue===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ce===void 0||ce.attribute!==ue||ue&&ce.data!==ue.data)return!0;B++}return r.attributesNum!==B||r.index!==H}function p(S,F,k,H){const W={},K=F.attributes;let B=0;const $=k.getAttributes();for(const V in $)if($[V].location>=0){let ce=K[V];ce===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const ue={};ue.attribute=ce,ce&&ce.data&&(ue.data=ce.data),W[V]=ue,B++}r.attributes=W,r.attributesNum=B,r.index=H}function _(){const S=r.newAttributes;for(let F=0,k=S.length;F<k;F++)S[F]=0}function g(S){m(S,0)}function m(S,F){const k=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;k[S]=1,H[S]===0&&(s.enableVertexAttribArray(S),H[S]=1),W[S]!==F&&(s.vertexAttribDivisor(S,F),W[S]=F)}function y(){const S=r.newAttributes,F=r.enabledAttributes;for(let k=0,H=F.length;k<H;k++)F[k]!==S[k]&&(s.disableVertexAttribArray(k),F[k]=0)}function x(S,F,k,H,W,K,B){B===!0?s.vertexAttribIPointer(S,F,k,W,K):s.vertexAttribPointer(S,F,k,H,W,K)}function v(S,F,k,H){_();const W=H.attributes,K=k.getAttributes(),B=F.defaultAttributeValues;for(const $ in K){const V=K[$];if(V.location>=0){let j=W[$];if(j===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const ce=j.normalized,ue=j.itemSize,Me=e.get(j);if(Me===void 0)continue;const xe=Me.buffer,q=Me.type,ee=Me.bytesPerElement,ne=q===s.INT||q===s.UNSIGNED_INT||j.gpuType===sl;if(j.isInterleavedBufferAttribute){const te=j.data,ye=te.stride,tt=j.offset;if(te.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)m(V.location+ke,te.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ke=0;ke<V.locationSize;ke++)g(V.location+ke);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let ke=0;ke<V.locationSize;ke++)x(V.location+ke,ue/V.locationSize,q,ce,ye*ee,(tt+ue/V.locationSize*ke)*ee,ne)}else{if(j.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)m(V.location+te,j.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let te=0;te<V.locationSize;te++)g(V.location+te);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let te=0;te<V.locationSize;te++)x(V.location+te,ue/V.locationSize,q,ce,ue*ee,ue/V.locationSize*te*ee,ne)}}else if(B!==void 0){const ce=B[$];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(V.location,ce);break;case 3:s.vertexAttrib3fv(V.location,ce);break;case 4:s.vertexAttrib4fv(V.location,ce);break;default:s.vertexAttrib1fv(V.location,ce)}}}}y()}function N(){L();for(const S in n){const F=n[S];for(const k in F){const H=F[k];for(const W in H)h(H[W].object),delete H[W];delete F[k]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const F=n[S.id];for(const k in F){const H=F[k];for(const W in H)h(H[W].object),delete H[W];delete F[k]}delete n[S.id]}function I(S){for(const F in n){const k=n[F];if(k[S.id]===void 0)continue;const H=k[S.id];for(const W in H)h(H[W].object),delete H[W];delete k[S.id]}}function L(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function gM(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function _M(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==kn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const L=I===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ri&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Jn&&!L)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=p>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:N,maxSamples:E}}function vM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Hi,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{const y=r?0:n,x=y*4;let v=m.clippingState||null;c.value=v,v=h(p,d,x,f);for(let N=0;N!==x;++N)v[N]=t[N];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function xM(s){let e=new WeakMap;function t(o,a){return a===Do?o.mapping=$i:a===Lo&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Do||a===Lo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Mm(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Or=4,Df=[.125,.215,.35,.446,.526,.582],zs=20,Rh=new lr,Lf=new Te;let Ph=null,Ih=0,Dh=0,Lh=!1;const Fs=(1+Math.sqrt(5))/2,Ir=1/Fs,Nf=[new C(-Fs,Ir,0),new C(Fs,Ir,0),new C(-Ir,0,Fs),new C(Ir,0,Fs),new C(0,Fs,-Ir),new C(0,Fs,Ir),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,Ih,Dh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:qr,format:kn,colorSpace:er,depthBuffer:!1},i=Uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yM(r)),this._blurMaterial=bM(r,e,t)}return i}_compileMaterial(e){const t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,Rh)}_sceneToCubeUV(e,t,n,i){const a=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Lf),h.toneMapping=Ki,h.autoClear=!1;const f=new ii({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),p=new Se(new $t,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Lf),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;$a(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$i||e.mapping===fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;$a(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Rh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nf[(i-r-1)%Nf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Se(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zs-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):zs;g>zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zs}`);const m=[];let y=0;for(let I=0;I<zs;++I){const L=I/_,w=Math.exp(-L*L/2);m.push(w),I===0?y+=w:I<g&&(y+=2*w)}for(let I=0;I<m.length;I++)m[I]=m[I]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const v=this._sizeLods[i],N=3*v*(i>x-Or?i-x+Or:0),E=4*(this._cubeSize-v);$a(t,N,E,3*v,2*v),c.setRenderTarget(t),c.render(u,Rh)}}function yM(s){const e=[],t=[],n=[];let i=s;const r=s-Or+1+Df.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Or?c=Df[o-s+Or-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*f),x=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let E=0;E<f;E++){const I=E%3*2/3-1,L=E>2?0:-1,w=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];y.set(w,_*p*E),x.set(d,g*p*E);const S=[E,E,E,E,E,E];v.set(S,m*p*E)}const N=new ct;N.setAttribute("position",new Dt(y,_)),N.setAttribute("uv",new Dt(x,g)),N.setAttribute("faceIndex",new Dt(v,m)),e.push(N),i>Or&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uf(s,e,t){const n=new li(s,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function bM(s,e,t){const n=new Float32Array(zs),i=new C(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ad(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Of(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Ff(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function ad(){return`

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
	`}function MM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Do||c===Lo,h=c===$i||c===fs;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ru(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new ru(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function SM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wM(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const N=y[x+0],E=y[x+1],I=y[x+2];d.push(N,E,E,I,I,N)}}else if(p!==void 0){const y=p.array;_=p.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const N=x+0,E=x+1,I=x+2;d.push(N,E,E,I,I,N)}}else return;const g=new(gm(d)?Pu:Ru)(d,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function EM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y]*_[y];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function TM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function AM(s,e,t){const n=new WeakMap,i=new bt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,N=1;v>e.maxTextureSize&&(N=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*N*4*u),I=new Qo(E,v,N,u);I.type=Jn,I.needsUpdate=!0;const L=x*4;for(let S=0;S<u;S++){const F=g[S],k=m[S],H=y[S],W=v*N*4*S;for(let K=0;K<F.count;K++){const B=K*L;f===!0&&(i.fromBufferAttribute(F,K),E[W+B+0]=i.x,E[W+B+1]=i.y,E[W+B+2]=i.z,E[W+B+3]=0),p===!0&&(i.fromBufferAttribute(k,K),E[W+B+4]=i.x,E[W+B+5]=i.y,E[W+B+6]=i.z,E[W+B+7]=0),_===!0&&(i.fromBufferAttribute(H,K),E[W+B+8]=i.x,E[W+B+9]=i.y,E[W+B+10]=i.z,E[W+B+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new se(v,N)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function CM(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const gg=new tn,Bf=new Uu(1,1),_g=new Qo,vg=new dl,xg=new $o,kf=[],zf=[],Vf=new Float32Array(16),Hf=new Float32Array(9),Gf=new Float32Array(4);function jr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=kf[i];if(r===void 0&&(r=new Float32Array(i),kf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function fn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ol(s,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function RM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2fv(this.addr,e),pn(t,e)}}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;s.uniform3fv(this.addr,e),pn(t,e)}}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4fv(this.addr,e),pn(t,e)}}function LM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Gf.set(n),s.uniformMatrix2fv(this.addr,!1,Gf),pn(t,n)}}function NM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Hf.set(n),s.uniformMatrix3fv(this.addr,!1,Hf),pn(t,n)}}function UM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Vf.set(n),s.uniformMatrix4fv(this.addr,!1,Vf),pn(t,n)}}function OM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2iv(this.addr,e),pn(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3iv(this.addr,e),pn(t,e)}}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4iv(this.addr,e),pn(t,e)}}function zM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2uiv(this.addr,e),pn(t,e)}}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3uiv(this.addr,e),pn(t,e)}}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4uiv(this.addr,e),pn(t,e)}}function WM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Bf.compareFunction=Au,r=Bf):r=gg,t.setTexture2D(e||r,i)}function XM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vg,i)}function qM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xg,i)}function YM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_g,i)}function ZM(s){switch(s){case 5126:return RM;case 35664:return PM;case 35665:return IM;case 35666:return DM;case 35674:return LM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return OM;case 35667:case 35671:return FM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return zM;case 36294:return VM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}function jM(s,e){s.uniform1fv(this.addr,e)}function JM(s,e){const t=jr(e,this.size,2);s.uniform2fv(this.addr,t)}function KM(s,e){const t=jr(e,this.size,3);s.uniform3fv(this.addr,t)}function QM(s,e){const t=jr(e,this.size,4);s.uniform4fv(this.addr,t)}function $M(s,e){const t=jr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function eS(s,e){const t=jr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tS(s,e){const t=jr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function nS(s,e){s.uniform1iv(this.addr,e)}function iS(s,e){s.uniform2iv(this.addr,e)}function sS(s,e){s.uniform3iv(this.addr,e)}function rS(s,e){s.uniform4iv(this.addr,e)}function oS(s,e){s.uniform1uiv(this.addr,e)}function aS(s,e){s.uniform2uiv(this.addr,e)}function cS(s,e){s.uniform3uiv(this.addr,e)}function lS(s,e){s.uniform4uiv(this.addr,e)}function hS(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||gg,r[o])}function uS(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vg,r[o])}function dS(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||xg,r[o])}function fS(s,e,t){const n=this.cache,i=e.length,r=Ol(t,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_g,r[o])}function pS(s){switch(s){case 5126:return jM;case 35664:return JM;case 35665:return KM;case 35666:return QM;case 35674:return $M;case 35675:return eS;case 35676:return tS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return sS;case 35669:case 35673:return rS;case 5125:return oS;case 36294:return aS;case 36295:return cS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return fS}}class mS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ZM(t.type)}}class gS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pS(t.type)}}class _S{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function Wf(s,e){s.seq.push(e),s.map[e.id]=e}function vS(s,e,t){const n=s.name,i=n.length;for(Nh.lastIndex=0;;){const r=Nh.exec(n),o=Nh.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Wf(t,l===void 0?new mS(a,s,e):new gS(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new _S(a),Wf(t,u)),t=u}}}class lc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);vS(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const xS=37297;let yS=0;function bS(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const qf=new ft;function MS(s){xt._getMatrix(qf,xt.workingColorSpace,s);const e=`mat3( ${qf.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(s)){case Fo:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Yf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+bS(s.getShaderSource(e),o)}else return i}function SS(s,e){const t=MS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wS(s,e){let t;switch(e){case Jp:t="Linear";break;case Kp:t="Reinhard";break;case Qp:t="Cineon";break;case $p:t="ACESFilmic";break;case yc:t="AgX";break;case tm:t="Neutral";break;case em:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ec=new C;function ES(){xt.getLuminanceCoefficients(ec);const s=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function AS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function mo(s){return s!==""}function Zf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(s){return s.replace(RS,IS)}const PS=new Map;function IS(s,e){let t=nt[e];if(t===void 0){const n=PS.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ou(t)}const DS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(s){return s.replace(DS,LS)}function LS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function NS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function US(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case fs:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function FS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Zp:e="ENVMAP_BLENDING_MIX";break;case jp:e="ENVMAP_BLENDING_ADD";break}return e}function BS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kS(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=NS(t),l=US(t),h=OS(t),u=FS(t),d=BS(t),f=TS(t),p=AS(r),_=i.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mo).join(`
`),m.length>0&&(m+=`
`)):(g=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),m=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?wS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,SS("linearToOutputTexel",t.outputColorSpace),ES(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),o=ou(o),o=Zf(o,t),o=jf(o,t),a=ou(a),a=Zf(a,t),a=jf(a,t),o=Jf(o),a=Jf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+g+o,v=y+m+a,N=Xf(i,i.VERTEX_SHADER,x),E=Xf(i,i.FRAGMENT_SHADER,v);i.attachShader(_,N),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function I(F){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(N).trim(),W=i.getShaderInfoLog(E).trim();let K=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,N,E);else{const $=Yf(i,N,"vertex"),V=Yf(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+$+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||W==="")&&(B=!1);B&&(F.diagnostics={runnable:K,programLog:k,vertexShader:{log:H,prefix:g},fragmentShader:{log:W,prefix:m}})}i.deleteShader(N),i.deleteShader(E),L=new lc(i,_),w=CS(i,_)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,xS)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=E,this}let zS=0;class VS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new HS(e),t.set(e,n)),n}}class HS{constructor(e){this.id=zS++,this.code=e,this.usedTimes=0}}function GS(s,e,t,n,i,r,o){const a=new fl,c=new VS,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,S,F,k,H){const W=k.fog,K=H.geometry,B=w.isMeshStandardMaterial?k.environment:null,$=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),V=$&&$.mapping===Xr?$.image.height:null,j=p[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ue=ce!==void 0?ce.length:0;let Me=0;K.morphAttributes.position!==void 0&&(Me=1),K.morphAttributes.normal!==void 0&&(Me=2),K.morphAttributes.color!==void 0&&(Me=3);let xe,q,ee,ne;if(j){const gt=oi[j];xe=gt.vertexShader,q=gt.fragmentShader}else xe=w.vertexShader,q=w.fragmentShader,c.update(w),ee=c.getVertexShaderID(w),ne=c.getFragmentShaderID(w);const te=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),tt=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,wt=!!w.map,pe=!!w.matcap,fe=!!$,O=!!w.aoMap,qe=!!w.lightMap,ge=!!w.bumpMap,Ue=!!w.normalMap,be=!!w.displacementMap,it=!!w.emissiveMap,Ie=!!w.metalnessMap,U=!!w.roughnessMap,T=w.anisotropy>0,Y=w.clearcoat>0,oe=w.dispersion>0,de=w.iridescence>0,ae=w.sheen>0,Xe=w.transmission>0,Ae=T&&!!w.anisotropyMap,Oe=Y&&!!w.clearcoatMap,yt=Y&&!!w.clearcoatNormalMap,ve=Y&&!!w.clearcoatRoughnessMap,ze=de&&!!w.iridescenceMap,$e=de&&!!w.iridescenceThicknessMap,rt=ae&&!!w.sheenColorMap,Ve=ae&&!!w.sheenRoughnessMap,Mt=!!w.specularMap,pt=!!w.specularColorMap,Lt=!!w.specularIntensityMap,G=Xe&&!!w.transmissionMap,Re=Xe&&!!w.thicknessMap,ie=!!w.gradientMap,he=!!w.alphaMap,Ne=w.alphaTest>0,De=!!w.alphaHash,dt=!!w.extensions;let Gt=Ki;w.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Gt=s.toneMapping);const mn={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:xe,fragmentShader:q,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:tt,instancingColor:tt&&H.instanceColor!==null,instancingMorph:tt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:er,alphaToCoverage:!!w.alphaToCoverage,map:wt,matcap:pe,envMap:fe,envMapMode:fe&&$.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:qe,bumpMap:ge,normalMap:Ue,displacementMap:d&&be,emissiveMap:it,normalMapObjectSpace:Ue&&w.normalMapType===cm,normalMapTangentSpace:Ue&&w.normalMapType===ps,metalnessMap:Ie,roughnessMap:U,anisotropy:T,anisotropyMap:Ae,clearcoat:Y,clearcoatMap:Oe,clearcoatNormalMap:yt,clearcoatRoughnessMap:ve,dispersion:oe,iridescence:de,iridescenceMap:ze,iridescenceThicknessMap:$e,sheen:ae,sheenColorMap:rt,sheenRoughnessMap:Ve,specularMap:Mt,specularColorMap:pt,specularIntensityMap:Lt,transmission:Xe,transmissionMap:G,thicknessMap:Re,gradientMap:ie,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:he,alphaTest:Ne,alphaHash:De,combine:w.combine,mapUv:wt&&_(w.map.channel),aoMapUv:O&&_(w.aoMap.channel),lightMapUv:qe&&_(w.lightMap.channel),bumpMapUv:ge&&_(w.bumpMap.channel),normalMapUv:Ue&&_(w.normalMap.channel),displacementMapUv:be&&_(w.displacementMap.channel),emissiveMapUv:it&&_(w.emissiveMap.channel),metalnessMapUv:Ie&&_(w.metalnessMap.channel),roughnessMapUv:U&&_(w.roughnessMap.channel),anisotropyMapUv:Ae&&_(w.anisotropyMap.channel),clearcoatMapUv:Oe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:yt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(w.sheenRoughnessMap.channel),specularMapUv:Mt&&_(w.specularMap.channel),specularColorMapUv:pt&&_(w.specularColorMap.channel),specularIntensityMapUv:Lt&&_(w.specularIntensityMap.channel),transmissionMapUv:G&&_(w.transmissionMap.channel),thicknessMapUv:Re&&_(w.thicknessMap.channel),alphaMapUv:he&&_(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ue||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(wt||he),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ye,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Gt,decodeVideoTexture:wt&&w.map.isVideoTexture===!0&&xt.getTransfer(w.map.colorSpace)===Ut,decodeVideoTextureEmissive:it&&w.emissiveMap.isVideoTexture===!0&&xt.getTransfer(w.emissiveMap.colorSpace)===Ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ai,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:dt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&w.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return mn.vertexUv1s=l.has(1),mn.vertexUv2s=l.has(2),mn.vertexUv3s=l.has(3),l.clear(),mn}function m(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)S.push(F),S.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(y(S,w),x(S,w),S.push(s.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function y(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function x(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const S=p[w.type];let F;if(S){const k=oi[S];F=Iu.clone(k.uniforms)}else F=w.uniforms;return F}function N(w,S){let F;for(let k=0,H=h.length;k<H;k++){const W=h[k];if(W.cacheKey===S){F=W,++F.usedTimes;break}}return F===void 0&&(F=new kS(s,S,w,r),h.push(F)),F}function E(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function I(w){c.remove(w)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:N,releaseProgram:E,releaseShaderCache:I,programs:h,dispose:L}}function WS(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function XS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $f(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,p,_,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function a(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||XS),n.length>1&&n.sort(d||Qf),i.length>1&&i.sort(d||Qf)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function qS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new $f,s.set(n,[o])):i>=r.length?(o=new $f,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function YS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Te};break;case"SpotLight":t={position:new C,direction:new C,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function ZS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jS=0;function JS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KS(s){const e=new YS,t=ZS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,r=new We,o=new We;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,y=0,x=0,v=0,N=0,E=0,I=0;l.sort(JS);for(let w=0,S=l.length;w<S;w++){const F=l[w],k=F.color,H=F.intensity,W=F.distance,K=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=k.r*H,u+=k.g*H,d+=k.b*H;else if(F.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(F.sh.coefficients[B],H);I++}else if(F.isDirectionalLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,V=t.get(F);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=F.shadow.matrix,y++}n.directional[f]=B,f++}else if(F.isSpotLight){const B=e.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(k).multiplyScalar(H),B.distance=W,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,n.spot[_]=B;const $=F.shadow;if(F.map&&(n.spotLightMap[N]=F.map,N++,$.updateMatrices(F),F.castShadow&&E++),n.spotLightMatrix[_]=$.matrix,F.castShadow){const V=t.get(F);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=K,v++}_++}else if(F.isRectAreaLight){const B=e.get(F);B.color.copy(k).multiplyScalar(H),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),n.rectArea[g]=B,g++}else if(F.isPointLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity),B.distance=F.distance,B.decay=F.decay,F.castShadow){const $=F.shadow,V=t.get(F);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=F.shadow.matrix,x++}n.point[p]=B,p++}else if(F.isHemisphereLight){const B=e.get(F);B.skyColor.copy(F.color).multiplyScalar(H),B.groundColor.copy(F.groundColor).multiplyScalar(H),n.hemi[m]=B,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==y||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==N||L.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+N-E,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,L.directionalLength=f,L.pointLength=p,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=y,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=N,L.numLightProbes=I,n.version=jS++)}function c(l,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const x=l[m];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function ep(s){const e=new KS(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function QS(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ep(s),e.set(i,[a])):r>=o.length?(a=new ep(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
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
}`;function tw(s,e,t){let n=new ta;const i=new se,r=new se,o=new bt,a=new Nl({depthPacking:am}),c=new Wu,l={},h=t.maxTextureSize,u={[Ci]:zn,[zn]:Ci,[ai]:ai},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:$S,fragmentShader:ew}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new ct;p.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Se(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let m=this.type;this.render=function(E,I,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const w=s.getRenderTarget(),S=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Ji),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=m!==Si&&this.type===Si,W=m===Si&&this.type!==Si;for(let K=0,B=E.length;K<B;K++){const $=E[K],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const j=V.getFrameExtents();if(i.multiply(j),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||H===!0||W===!0){const ue=this.type!==Si?{minFilter:Sn,magFilter:Sn}:{};V.map!==null&&V.map.dispose(),V.map=new li(i.x,i.y,ue),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ce=V.getViewportCount();for(let ue=0;ue<ce;ue++){const Me=V.getViewport(ue);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),k.viewport(o),V.updateMatrices($,ue),n=V.getFrustum(),v(I,L,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Si&&y(V,L),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,S,F)};function y(E,I){const L=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new li(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(I,null,L,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(I,null,L,f,_,null)}function x(E,I,L,w){let S=null;const F=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)S=F;else if(S=L.isPointLight===!0?c:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const k=S.uuid,H=I.uuid;let W=l[k];W===void 0&&(W={},l[k]=W);let K=W[H];K===void 0&&(K=S.clone(),W[H]=K,I.addEventListener("dispose",N)),S=K}if(S.visible=I.visible,S.wireframe=I.wireframe,w===Si?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:u[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=s.properties.get(S);k.light=L}return S}function v(E,I,L,w,S){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const H=e.update(E),W=E.material;if(Array.isArray(W)){const K=H.groups;for(let B=0,$=K.length;B<$;B++){const V=K[B],j=W[V.materialIndex];if(j&&j.visible){const ce=x(E,j,w,S);E.onBeforeShadow(s,E,I,L,H,ce,V),s.renderBufferDirect(L,null,H,ce,E,V),E.onAfterShadow(s,E,I,L,H,ce,V)}}}else if(W.visible){const K=x(E,W,w,S);E.onBeforeShadow(s,E,I,L,H,K,null),s.renderBufferDirect(L,null,H,K,E,null),E.onAfterShadow(s,E,I,L,H,K,null)}}const k=E.children;for(let H=0,W=k.length;H<W;H++)v(k[H],I,L,w,S)}function N(E){E.target.removeEventListener("dispose",N);for(const L in l){const w=l[L],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const nw={[fc]:pc,[mc]:vc,[gc]:xc,[Ks]:_c,[pc]:fc,[vc]:mc,[xc]:gc,[_c]:Ks};function iw(s,e){function t(){let G=!1;const Re=new bt;let ie=null;const he=new bt(0,0,0,0);return{setMask:function(Ne){ie!==Ne&&!G&&(s.colorMask(Ne,Ne,Ne,Ne),ie=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,De,dt,Gt,mn){mn===!0&&(Ne*=Gt,De*=Gt,dt*=Gt),Re.set(Ne,De,dt,Gt),he.equals(Re)===!1&&(s.clearColor(Ne,De,dt,Gt),he.copy(Re))},reset:function(){G=!1,ie=null,he.set(-1,0,0,0)}}}function n(){let G=!1,Re=!1,ie=null,he=null,Ne=null;return{setReversed:function(De){if(Re!==De){const dt=e.get("EXT_clip_control");Re?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Gt=Ne;Ne=null,this.setClear(Gt)}Re=De},getReversed:function(){return Re},setTest:function(De){De?te(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(De){ie!==De&&!G&&(s.depthMask(De),ie=De)},setFunc:function(De){if(Re&&(De=nw[De]),he!==De){switch(De){case fc:s.depthFunc(s.NEVER);break;case pc:s.depthFunc(s.ALWAYS);break;case mc:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case gc:s.depthFunc(s.EQUAL);break;case _c:s.depthFunc(s.GEQUAL);break;case vc:s.depthFunc(s.GREATER);break;case xc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=De}},setLocked:function(De){G=De},setClear:function(De){Ne!==De&&(Re&&(De=1-De),s.clearDepth(De),Ne=De)},reset:function(){G=!1,ie=null,he=null,Ne=null,Re=!1}}}function i(){let G=!1,Re=null,ie=null,he=null,Ne=null,De=null,dt=null,Gt=null,mn=null;return{setTest:function(gt){G||(gt?te(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(gt){Re!==gt&&!G&&(s.stencilMask(gt),Re=gt)},setFunc:function(gt,Hn,di){(ie!==gt||he!==Hn||Ne!==di)&&(s.stencilFunc(gt,Hn,di),ie=gt,he=Hn,Ne=di)},setOp:function(gt,Hn,di){(De!==gt||dt!==Hn||Gt!==di)&&(s.stencilOp(gt,Hn,di),De=gt,dt=Hn,Gt=di)},setLocked:function(gt){G=gt},setClear:function(gt){mn!==gt&&(s.clearStencil(gt),mn=gt)},reset:function(){G=!1,Re=null,ie=null,he=null,Ne=null,De=null,dt=null,Gt=null,mn=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,y=null,x=null,v=null,N=null,E=null,I=new Te(0,0,0),L=0,w=!1,S=null,F=null,k=null,H=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=$>=2);let j=null,ce={};const ue=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),xe=new bt().fromArray(ue),q=new bt().fromArray(Me);function ee(G,Re,ie,he){const Ne=new Uint8Array(4),De=s.createTexture();s.bindTexture(G,De),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<ie;dt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Re+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return De}const ne={};ne[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(s.DEPTH_TEST),o.setFunc(Ks),ge(!1),Ue(Xh),te(s.CULL_FACE),O(Ji);function te(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function ye(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function tt(G,Re){return u[G]!==Re?(s.bindFramebuffer(G,Re),u[G]=Re,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Re),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function ke(G,Re){let ie=f,he=!1;if(G){ie=d.get(Re),ie===void 0&&(ie=[],d.set(Re,ie));const Ne=G.textures;if(ie.length!==Ne.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let De=0,dt=Ne.length;De<dt;De++)ie[De]=s.COLOR_ATTACHMENT0+De;ie.length=Ne.length,he=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,he=!0);he&&s.drawBuffers(ie)}function wt(G){return p!==G?(s.useProgram(G),p=G,!0):!1}const pe={[us]:s.FUNC_ADD,[Ip]:s.FUNC_SUBTRACT,[Dp]:s.FUNC_REVERSE_SUBTRACT};pe[Lp]=s.MIN,pe[Np]=s.MAX;const fe={[Up]:s.ZERO,[Op]:s.ONE,[Fp]:s.SRC_COLOR,[uc]:s.SRC_ALPHA,[Gp]:s.SRC_ALPHA_SATURATE,[Vp]:s.DST_COLOR,[kp]:s.DST_ALPHA,[Bp]:s.ONE_MINUS_SRC_COLOR,[dc]:s.ONE_MINUS_SRC_ALPHA,[Hp]:s.ONE_MINUS_DST_COLOR,[zp]:s.ONE_MINUS_DST_ALPHA,[Wp]:s.CONSTANT_COLOR,[Xp]:s.ONE_MINUS_CONSTANT_COLOR,[qp]:s.CONSTANT_ALPHA,[Yp]:s.ONE_MINUS_CONSTANT_ALPHA};function O(G,Re,ie,he,Ne,De,dt,Gt,mn,gt){if(G===Ji){_===!0&&(ye(s.BLEND),_=!1);return}if(_===!1&&(te(s.BLEND),_=!0),G!==Pp){if(G!==g||gt!==w){if((m!==us||v!==us)&&(s.blendEquation(s.FUNC_ADD),m=us,v=us),gt)switch(G){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFunc(s.ONE,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,x=null,N=null,E=null,I.set(0,0,0),L=0,g=G,w=gt}return}Ne=Ne||Re,De=De||ie,dt=dt||he,(Re!==m||Ne!==v)&&(s.blendEquationSeparate(pe[Re],pe[Ne]),m=Re,v=Ne),(ie!==y||he!==x||De!==N||dt!==E)&&(s.blendFuncSeparate(fe[ie],fe[he],fe[De],fe[dt]),y=ie,x=he,N=De,E=dt),(Gt.equals(I)===!1||mn!==L)&&(s.blendColor(Gt.r,Gt.g,Gt.b,mn),I.copy(Gt),L=mn),g=G,w=!1}function qe(G,Re){G.side===ai?ye(s.CULL_FACE):te(s.CULL_FACE);let ie=G.side===zn;Re&&(ie=!ie),ge(ie),G.blending===Ys&&G.transparent===!1?O(Ji):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const he=G.stencilWrite;a.setTest(he),he&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),it(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(G){S!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),S=G)}function Ue(G){G!==Cp?(te(s.CULL_FACE),G!==F&&(G===Xh?s.cullFace(s.BACK):G===Rp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),F=G}function be(G){G!==k&&(B&&s.lineWidth(G),k=G)}function it(G,Re,ie){G?(te(s.POLYGON_OFFSET_FILL),(H!==Re||W!==ie)&&(s.polygonOffset(Re,ie),H=Re,W=ie)):ye(s.POLYGON_OFFSET_FILL)}function Ie(G){G?te(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function U(G){G===void 0&&(G=s.TEXTURE0+K-1),j!==G&&(s.activeTexture(G),j=G)}function T(G,Re,ie){ie===void 0&&(j===null?ie=s.TEXTURE0+K-1:ie=j);let he=ce[ie];he===void 0&&(he={type:void 0,texture:void 0},ce[ie]=he),(he.type!==G||he.texture!==Re)&&(j!==ie&&(s.activeTexture(ie),j=ie),s.bindTexture(G,Re||ne[G]),he.type=G,he.texture=Re)}function Y(){const G=ce[j];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(G){xe.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),xe.copy(G))}function Ve(G){q.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function Mt(G,Re){let ie=l.get(Re);ie===void 0&&(ie=new WeakMap,l.set(Re,ie));let he=ie.get(G);he===void 0&&(he=s.getUniformBlockIndex(Re,G.name),ie.set(G,he))}function pt(G,Re){const he=l.get(Re).get(G);c.get(Re)!==he&&(s.uniformBlockBinding(Re,he,G.__bindingPointIndex),c.set(Re,he))}function Lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,ce={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,y=null,x=null,v=null,N=null,E=null,I=new Te(0,0,0),L=0,w=!1,S=null,F=null,k=null,H=null,W=null,xe.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:ye,bindFramebuffer:tt,drawBuffers:ke,useProgram:wt,setBlending:O,setMaterial:qe,setFlipSided:ge,setCullFace:Ue,setLineWidth:be,setPolygonOffset:it,setScissorTest:Ie,activeTexture:U,bindTexture:T,unbindTexture:Y,compressedTexImage2D:oe,compressedTexImage3D:de,texImage2D:ze,texImage3D:$e,updateUBOMapping:Mt,uniformBlockBinding:pt,texStorage2D:yt,texStorage3D:ve,texSubImage2D:ae,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Oe,scissor:rt,viewport:Ve,reset:Lt}}function sw(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(U,T){return f?new OffscreenCanvas(U,T):zo("canvas")}function _(U,T,Y){let oe=1;const de=Ie(U);if((de.width>Y||de.height>Y)&&(oe=Y/Math.max(de.width,de.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ae=Math.floor(oe*de.width),Xe=Math.floor(oe*de.height);u===void 0&&(u=p(ae,Xe));const Ae=T?p(ae,Xe):u;return Ae.width=ae,Ae.height=Xe,Ae.getContext("2d").drawImage(U,0,0,ae,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ae+"x"+Xe+")."),Ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),U;return U}function g(U){return U.generateMipmaps}function m(U){s.generateMipmap(U)}function y(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(U,T,Y,oe,de=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ae=T;if(T===s.RED&&(Y===s.FLOAT&&(ae=s.R32F),Y===s.HALF_FLOAT&&(ae=s.R16F),Y===s.UNSIGNED_BYTE&&(ae=s.R8)),T===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ae=s.R8UI),Y===s.UNSIGNED_SHORT&&(ae=s.R16UI),Y===s.UNSIGNED_INT&&(ae=s.R32UI),Y===s.BYTE&&(ae=s.R8I),Y===s.SHORT&&(ae=s.R16I),Y===s.INT&&(ae=s.R32I)),T===s.RG&&(Y===s.FLOAT&&(ae=s.RG32F),Y===s.HALF_FLOAT&&(ae=s.RG16F),Y===s.UNSIGNED_BYTE&&(ae=s.RG8)),T===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ae=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ae=s.RG16UI),Y===s.UNSIGNED_INT&&(ae=s.RG32UI),Y===s.BYTE&&(ae=s.RG8I),Y===s.SHORT&&(ae=s.RG16I),Y===s.INT&&(ae=s.RG32I)),T===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),Y===s.UNSIGNED_INT&&(ae=s.RGB32UI),Y===s.BYTE&&(ae=s.RGB8I),Y===s.SHORT&&(ae=s.RGB16I),Y===s.INT&&(ae=s.RGB32I)),T===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ae=s.RGBA32UI),Y===s.BYTE&&(ae=s.RGBA8I),Y===s.SHORT&&(ae=s.RGBA16I),Y===s.INT&&(ae=s.RGBA32I)),T===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),T===s.RGBA){const Xe=de?Fo:xt.getTransfer(oe);Y===s.FLOAT&&(ae=s.RGBA32F),Y===s.HALF_FLOAT&&(ae=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ae=Xe===Ut?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(U,T){let Y;return U?T===null||T===es||T===Qs?Y=s.DEPTH24_STENCIL8:T===Jn?Y=s.DEPTH32F_STENCIL8:T===zr&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===es||T===Qs?Y=s.DEPTH_COMPONENT24:T===Jn?Y=s.DEPTH_COMPONENT32F:T===zr&&(Y=s.DEPTH_COMPONENT16),Y}function N(U,T){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Sn&&U.minFilter!==dn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function E(U){const T=U.target;T.removeEventListener("dispose",E),L(T),T.isVideoTexture&&h.delete(T)}function I(U){const T=U.target;T.removeEventListener("dispose",I),S(T)}function L(U){const T=n.get(U);if(T.__webglInit===void 0)return;const Y=U.source,oe=d.get(Y);if(oe){const de=oe[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&w(U),Object.keys(oe).length===0&&d.delete(Y)}n.remove(U)}function w(U){const T=n.get(U);s.deleteTexture(T.__webglTexture);const Y=U.source,oe=d.get(Y);delete oe[T.__cacheKey],o.memory.textures--}function S(U){const T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(T.__webglFramebuffer[oe]))for(let de=0;de<T.__webglFramebuffer[oe].length;de++)s.deleteFramebuffer(T.__webglFramebuffer[oe][de]);else s.deleteFramebuffer(T.__webglFramebuffer[oe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[oe])}else{if(Array.isArray(T.__webglFramebuffer))for(let oe=0;oe<T.__webglFramebuffer.length;oe++)s.deleteFramebuffer(T.__webglFramebuffer[oe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let oe=0;oe<T.__webglColorRenderbuffer.length;oe++)T.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[oe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=U.textures;for(let oe=0,de=Y.length;oe<de;oe++){const ae=n.get(Y[oe]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(Y[oe])}n.remove(U)}let F=0;function k(){F=0}function H(){const U=F;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),F+=1,U}function W(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function K(U,T){const Y=n.get(U);if(U.isVideoTexture&&be(U),U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){const oe=U.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Y,U,T);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+T)}function B(U,T){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){q(Y,U,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+T)}function $(U,T){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){q(Y,U,T);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+T)}function V(U,T){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){ee(Y,U,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+T)}const j={[Yi]:s.REPEAT,[jn]:s.CLAMP_TO_EDGE,[No]:s.MIRRORED_REPEAT},ce={[Sn]:s.NEAREST,[gu]:s.NEAREST_MIPMAP_NEAREST,[Lr]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[bo]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},ue={[lm]:s.NEVER,[mm]:s.ALWAYS,[hm]:s.LESS,[Au]:s.LEQUAL,[um]:s.EQUAL,[pm]:s.GEQUAL,[dm]:s.GREATER,[fm]:s.NOTEQUAL};function Me(U,T){if(T.type===Jn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===dn||T.magFilter===bo||T.magFilter===Lr||T.magFilter===gi||T.minFilter===dn||T.minFilter===bo||T.minFilter===Lr||T.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,j[T.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,j[T.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,j[T.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ce[T.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ce[T.minFilter]),T.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Sn||T.minFilter!==Lr&&T.minFilter!==gi||T.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function xe(U,T){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",E));const oe=T.source;let de=d.get(oe);de===void 0&&(de={},d.set(oe,de));const ae=W(T);if(ae!==U.__cacheKey){de[ae]===void 0&&(de[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),de[ae].usedTimes++;const Xe=de[U.__cacheKey];Xe!==void 0&&(de[U.__cacheKey].usedTimes--,Xe.usedTimes===0&&w(T)),U.__cacheKey=ae,U.__webglTexture=de[ae].texture}return Y}function q(U,T,Y){let oe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(oe=s.TEXTURE_3D);const de=xe(U,T),ae=T.source;t.bindTexture(oe,U.__webglTexture,s.TEXTURE0+Y);const Xe=n.get(ae);if(ae.version!==Xe.__version||de===!0){t.activeTexture(s.TEXTURE0+Y);const Ae=xt.getPrimaries(xt.workingColorSpace),Oe=T.colorSpace===Wi?null:xt.getPrimaries(T.colorSpace),yt=T.colorSpace===Wi||Ae===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let ve=_(T.image,!1,i.maxTextureSize);ve=it(T,ve);const ze=r.convert(T.format,T.colorSpace),$e=r.convert(T.type);let rt=x(T.internalFormat,ze,$e,T.colorSpace,T.isVideoTexture);Me(oe,T);let Ve;const Mt=T.mipmaps,pt=T.isVideoTexture!==!0,Lt=Xe.__version===void 0||de===!0,G=ae.dataReady,Re=N(T,ve);if(T.isDepthTexture)rt=v(T.format===$s,T.type),Lt&&(pt?t.texStorage2D(s.TEXTURE_2D,1,rt,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,rt,ve.width,ve.height,0,ze,$e,null));else if(T.isDataTexture)if(Mt.length>0){pt&&Lt&&t.texStorage2D(s.TEXTURE_2D,Re,rt,Mt[0].width,Mt[0].height);for(let ie=0,he=Mt.length;ie<he;ie++)Ve=Mt[ie],pt?G&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Ve.width,Ve.height,ze,$e,Ve.data):t.texImage2D(s.TEXTURE_2D,ie,rt,Ve.width,Ve.height,0,ze,$e,Ve.data);T.generateMipmaps=!1}else pt?(Lt&&t.texStorage2D(s.TEXTURE_2D,Re,rt,ve.width,ve.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve.width,ve.height,ze,$e,ve.data)):t.texImage2D(s.TEXTURE_2D,0,rt,ve.width,ve.height,0,ze,$e,ve.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){pt&&Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,rt,Mt[0].width,Mt[0].height,ve.depth);for(let ie=0,he=Mt.length;ie<he;ie++)if(Ve=Mt[ie],T.format!==kn)if(ze!==null)if(pt){if(G)if(T.layerUpdates.size>0){const Ne=su(Ve.width,Ve.height,T.format,T.type);for(const De of T.layerUpdates){const dt=Ve.data.subarray(De*Ne/Ve.data.BYTES_PER_ELEMENT,(De+1)*Ne/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,De,Ve.width,Ve.height,1,ze,dt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Ve.width,Ve.height,ve.depth,ze,Ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,rt,Ve.width,Ve.height,ve.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Ve.width,Ve.height,ve.depth,ze,$e,Ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,rt,Ve.width,Ve.height,ve.depth,0,ze,$e,Ve.data)}else{pt&&Lt&&t.texStorage2D(s.TEXTURE_2D,Re,rt,Mt[0].width,Mt[0].height);for(let ie=0,he=Mt.length;ie<he;ie++)Ve=Mt[ie],T.format!==kn?ze!==null?pt?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Ve.width,Ve.height,ze,Ve.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,rt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?G&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Ve.width,Ve.height,ze,$e,Ve.data):t.texImage2D(s.TEXTURE_2D,ie,rt,Ve.width,Ve.height,0,ze,$e,Ve.data)}else if(T.isDataArrayTexture)if(pt){if(Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,rt,ve.width,ve.height,ve.depth),G)if(T.layerUpdates.size>0){const ie=su(ve.width,ve.height,T.format,T.type);for(const he of T.layerUpdates){const Ne=ve.data.subarray(he*ie/ve.data.BYTES_PER_ELEMENT,(he+1)*ie/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ve.width,ve.height,1,ze,$e,Ne)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ze,$e,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,ve.width,ve.height,ve.depth,0,ze,$e,ve.data);else if(T.isData3DTexture)pt?(Lt&&t.texStorage3D(s.TEXTURE_3D,Re,rt,ve.width,ve.height,ve.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ze,$e,ve.data)):t.texImage3D(s.TEXTURE_3D,0,rt,ve.width,ve.height,ve.depth,0,ze,$e,ve.data);else if(T.isFramebufferTexture){if(Lt)if(pt)t.texStorage2D(s.TEXTURE_2D,Re,rt,ve.width,ve.height);else{let ie=ve.width,he=ve.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,rt,ie,he,0,ze,$e,null),ie>>=1,he>>=1}}else if(Mt.length>0){if(pt&&Lt){const ie=Ie(Mt[0]);t.texStorage2D(s.TEXTURE_2D,Re,rt,ie.width,ie.height)}for(let ie=0,he=Mt.length;ie<he;ie++)Ve=Mt[ie],pt?G&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze,$e,Ve):t.texImage2D(s.TEXTURE_2D,ie,rt,ze,$e,Ve);T.generateMipmaps=!1}else if(pt){if(Lt){const ie=Ie(ve);t.texStorage2D(s.TEXTURE_2D,Re,rt,ie.width,ie.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,$e,ve)}else t.texImage2D(s.TEXTURE_2D,0,rt,ze,$e,ve);g(T)&&m(oe),Xe.__version=ae.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ee(U,T,Y){if(T.image.length!==6)return;const oe=xe(U,T),de=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+Y);const ae=n.get(de);if(de.version!==ae.__version||oe===!0){t.activeTexture(s.TEXTURE0+Y);const Xe=xt.getPrimaries(xt.workingColorSpace),Ae=T.colorSpace===Wi?null:xt.getPrimaries(T.colorSpace),Oe=T.colorSpace===Wi||Xe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const yt=T.isCompressedTexture||T.image[0].isCompressedTexture,ve=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let he=0;he<6;he++)!yt&&!ve?ze[he]=_(T.image[he],!0,i.maxCubemapSize):ze[he]=ve?T.image[he].image:T.image[he],ze[he]=it(T,ze[he]);const $e=ze[0],rt=r.convert(T.format,T.colorSpace),Ve=r.convert(T.type),Mt=x(T.internalFormat,rt,Ve,T.colorSpace),pt=T.isVideoTexture!==!0,Lt=ae.__version===void 0||oe===!0,G=de.dataReady;let Re=N(T,$e);Me(s.TEXTURE_CUBE_MAP,T);let ie;if(yt){pt&&Lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,Mt,$e.width,$e.height);for(let he=0;he<6;he++){ie=ze[he].mipmaps;for(let Ne=0;Ne<ie.length;Ne++){const De=ie[Ne];T.format!==kn?rt!==null?pt?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,De.width,De.height,rt,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,Mt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,De.width,De.height,rt,Ve,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,Mt,De.width,De.height,0,rt,Ve,De.data)}}}else{if(ie=T.mipmaps,pt&&Lt){ie.length>0&&Re++;const he=Ie(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,Mt,he.width,he.height)}for(let he=0;he<6;he++)if(ve){pt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze[he].width,ze[he].height,rt,Ve,ze[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Mt,ze[he].width,ze[he].height,0,rt,Ve,ze[he].data);for(let Ne=0;Ne<ie.length;Ne++){const dt=ie[Ne].image[he].image;pt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,dt.width,dt.height,rt,Ve,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,Mt,dt.width,dt.height,0,rt,Ve,dt.data)}}else{pt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,rt,Ve,ze[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Mt,rt,Ve,ze[he]);for(let Ne=0;Ne<ie.length;Ne++){const De=ie[Ne];pt?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,rt,Ve,De.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,Mt,rt,Ve,De.image[he])}}}g(T)&&m(s.TEXTURE_CUBE_MAP),ae.__version=de.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ne(U,T,Y,oe,de,ae){const Xe=r.convert(Y.format,Y.colorSpace),Ae=r.convert(Y.type),Oe=x(Y.internalFormat,Xe,Ae,Y.colorSpace),yt=n.get(T),ve=n.get(Y);if(ve.__renderTarget=T,!yt.__hasExternalTextures){const ze=Math.max(1,T.width>>ae),$e=Math.max(1,T.height>>ae);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,ae,Oe,ze,$e,T.depth,0,Xe,Ae,null):t.texImage2D(de,ae,Oe,ze,$e,0,Xe,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Ue(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,de,ve.__webglTexture,0,ge(T)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,de,ve.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(U,T,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,U),T.depthBuffer){const oe=T.depthTexture,de=oe&&oe.isDepthTexture?oe.type:null,ae=v(T.stencilBuffer,de),Xe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ge(T);Ue(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ae,T.width,T.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ae,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ae,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,U)}else{const oe=T.textures;for(let de=0;de<oe.length;de++){const ae=oe[de],Xe=r.convert(ae.format,ae.colorSpace),Ae=r.convert(ae.type),Oe=x(ae.internalFormat,Xe,Ae,ae.colorSpace),yt=ge(T);Y&&Ue(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,Oe,T.width,T.height):Ue(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,Oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(T.depthTexture);oe.__renderTarget=T,(!oe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const de=oe.__webglTexture,ae=ge(T);if(T.depthTexture.format===Zs)Ue(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(T.depthTexture.format===$s)Ue(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function tt(U){const T=n.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),oe){const de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,oe.removeEventListener("dispose",de)};oe.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=oe}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,U)}else if(Y){T.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[oe]),T.__webglDepthbuffer[oe]===void 0)T.__webglDepthbuffer[oe]=s.createRenderbuffer(),te(T.__webglDepthbuffer[oe],U,!1);else{const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),te(T.__webglDepthbuffer,U,!1);else{const oe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,de)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(U,T,Y){const oe=n.get(U);T!==void 0&&ne(oe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&tt(U)}function wt(U){const T=U.texture,Y=n.get(U),oe=n.get(T);U.addEventListener("dispose",I);const de=U.textures,ae=U.isWebGLCubeRenderTarget===!0,Xe=de.length>1;if(Xe||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=T.version,o.memory.textures++),ae){Y.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Ae]=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)Y.__webglFramebuffer[Ae][Oe]=s.createFramebuffer()}else Y.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Y.__webglFramebuffer[Ae]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ae=0,Oe=de.length;Ae<Oe;Ae++){const yt=n.get(de[Ae]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(U.samples>0&&Ue(U)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ae=0;Ae<de.length;Ae++){const Oe=de[Ae];Y.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ae]);const yt=r.convert(Oe.format,Oe.colorSpace),ve=r.convert(Oe.type),ze=x(Oe.internalFormat,yt,ve,Oe.colorSpace,U.isXRRenderTarget===!0),$e=ge(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ze,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),te(Y.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),Me(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)ne(Y.__webglFramebuffer[Ae][Oe],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Oe);else ne(Y.__webglFramebuffer[Ae],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);g(T)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ae=0,Oe=de.length;Ae<Oe;Ae++){const yt=de[Ae],ve=n.get(yt);t.bindTexture(s.TEXTURE_2D,ve.__webglTexture),Me(s.TEXTURE_2D,yt),ne(Y.__webglFramebuffer,U,yt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),g(yt)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,oe.__webglTexture),Me(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)ne(Y.__webglFramebuffer[Oe],U,T,s.COLOR_ATTACHMENT0,Ae,Oe);else ne(Y.__webglFramebuffer,U,T,s.COLOR_ATTACHMENT0,Ae,0);g(T)&&m(Ae),t.unbindTexture()}U.depthBuffer&&tt(U)}function pe(U){const T=U.textures;for(let Y=0,oe=T.length;Y<oe;Y++){const de=T[Y];if(g(de)){const ae=y(U),Xe=n.get(de).__webglTexture;t.bindTexture(ae,Xe),m(ae),t.unbindTexture()}}}const fe=[],O=[];function qe(U){if(U.samples>0){if(Ue(U)===!1){const T=U.textures,Y=U.width,oe=U.height;let de=s.COLOR_BUFFER_BIT;const ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=n.get(U),Ae=T.length>1;if(Ae)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const yt=n.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,yt,0)}s.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,de,s.NEAREST),c===!0&&(fe.length=0,O.length=0,fe.push(s.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(fe.push(ae),O.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const yt=n.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,yt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const T=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ge(U){return Math.min(i.maxSamples,U.samples)}function Ue(U){const T=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(U){const T=o.render.frame;h.get(U)!==T&&(h.set(U,T),U.update())}function it(U,T){const Y=U.colorSpace,oe=U.format,de=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==er&&Y!==Wi&&(xt.getTransfer(Y)===Ut?(oe!==kn||de!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Ie(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=ke,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ue}function yg(s,e){function t(n,i=Wi){let r;const o=xt.getTransfer(i);if(n===Ri)return s.UNSIGNED_BYTE;if(n===rl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_u)return s.BYTE;if(n===vu)return s.SHORT;if(n===zr)return s.UNSIGNED_SHORT;if(n===sl)return s.INT;if(n===es)return s.UNSIGNED_INT;if(n===Jn)return s.FLOAT;if(n===qr)return s.HALF_FLOAT;if(n===yu)return s.ALPHA;if(n===bu)return s.RGB;if(n===kn)return s.RGBA;if(n===Mu)return s.LUMINANCE;if(n===Su)return s.LUMINANCE_ALPHA;if(n===Zs)return s.DEPTH_COMPONENT;if(n===$s)return s.DEPTH_STENCIL;if(n===al)return s.RED;if(n===Ko)return s.RED_INTEGER;if(n===wu)return s.RG;if(n===cl)return s.RG_INTEGER;if(n===ll)return s.RGBA_INTEGER;if(n===Mo||n===So||n===wo||n===Eo)if(o===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Mc||n===Sc||n===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===Tc||n===Ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===Tc)return o===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ac)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cc||n===Rc||n===Pc||n===Ic||n===Dc||n===Lc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===kc||n===zc||n===Vc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ic)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===Hc||n===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===To)return o===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Wc||n===Xc||n===qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===To)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const rw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ow=`
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

}`;class aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new tn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new si({vertexShader:rw,fragmentShader:ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new _s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cw extends Di{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const _=new aw,g=t.getContextAttributes();let m=null,y=null;const x=[],v=[],N=new se;let E=null;const I=new cn;I.viewport=new bt;const L=new cn;L.viewport=new bt;const w=[I,L],S=new ag;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=x[q];return ee===void 0&&(ee=new cc,x[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=x[q];return ee===void 0&&(ee=new cc,x[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=x[q];return ee===void 0&&(ee=new cc,x[q]=ee),ee.getHandSpace()};function H(q){const ee=v.indexOf(q.inputSource);if(ee===-1)return;const ne=x[ee];ne!==void 0&&(ne.update(q.inputSource,q.frame,l||o),ne.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let q=0;q<x.length;q++){const ee=v[q];ee!==null&&(v[q]=null,x[q].disconnect(ee))}F=null,k=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,te=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?$s:Zs,te=g.stencil?Qs:es);const tt={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(tt),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new li(d.textureWidth,d.textureHeight,{format:kn,type:Ri,depthTexture:new Uu(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new li(f.framebufferWidth,f.framebufferHeight,{format:kn,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),xe.setContext(i),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let ee=0;ee<q.removed.length;ee++){const ne=q.removed[ee],te=v.indexOf(ne);te>=0&&(v[te]=null,x[te].disconnect(ne))}for(let ee=0;ee<q.added.length;ee++){const ne=q.added[ee];let te=v.indexOf(ne);if(te===-1){for(let tt=0;tt<x.length;tt++)if(tt>=v.length){v.push(ne),te=tt;break}else if(v[tt]===null){v[tt]=ne,te=tt;break}if(te===-1)break}const ye=x[te];ye&&ye.connect(ne)}}const B=new C,$=new C;function V(q,ee,ne){B.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const te=B.distanceTo($),ye=ee.projectionMatrix.elements,tt=ne.projectionMatrix.elements,ke=ye[14]/(ye[10]-1),wt=ye[14]/(ye[10]+1),pe=(ye[9]+1)/ye[5],fe=(ye[9]-1)/ye[5],O=(ye[8]-1)/ye[0],qe=(tt[8]+1)/tt[0],ge=ke*O,Ue=ke*qe,be=te/(-O+qe),it=be*-O;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(it),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ie=ke+be,U=wt+be,T=ge-it,Y=Ue+(te-it),oe=pe*wt/U*Ie,de=fe*wt/U*Ie;q.projectionMatrix.makePerspective(T,Y,oe,de,Ie,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,ne=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),S.near=L.near=I.near=ee,S.far=L.far=I.far=ne,(F!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,k=S.far),I.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,S.layers.mask=I.layers.mask|L.layers.mask;const te=q.parent,ye=S.cameras;j(S,te);for(let tt=0;tt<ye.length;tt++)j(ye[tt],te);ye.length===2?V(S,I,L):S.projectionMatrix.copy(I.projectionMatrix),ce(q,S,te)};function ce(q,ee,ne){ne===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ne.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Vr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ue=null;function Me(q,ee){if(h=ee.getViewerPose(l||o),p=ee,h!==null){const ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let te=!1;ne.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let ke=0;ke<ne.length;ke++){const wt=ne[ke];let pe=null;if(f!==null)pe=f.getViewport(wt);else{const O=u.getViewSubImage(d,wt);pe=O.viewport,ke===0&&(e.setRenderTargetTextures(y,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(y))}let fe=w[ke];fe===void 0&&(fe=new cn,fe.layers.enable(ke),fe.viewport=new bt,w[ke]=fe),fe.matrix.fromArray(wt.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(wt.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(pe.x,pe.y,pe.width,pe.height),ke===0&&(S.matrix.copy(fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),te===!0&&S.cameras.push(fe)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const ke=u.getDepthInformation(ne[0]);ke&&ke.isValid&&ke.texture&&_.init(e,ke,i.renderState)}}for(let ne=0;ne<x.length;ne++){const te=v[ne],ye=x[ne];te!==null&&ye!==void 0&&ye.update(te,ee,l||o)}ue&&ue(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}const xe=new mg;xe.setAnimationLoop(Me),this.setAnimationLoop=function(q){ue=q},this.dispose=function(){}}}const Ls=new Kn,lw=new We;function hw(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ym(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,y,x):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===zn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===zn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,v=y.envMapRotation;x&&(g.envMap.value=x,Ls.copy(v),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),g.envMapRotation.value.setFromMatrix4(lw.makeRotationFromEuler(Ls)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uw(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=i[y.id];v===void 0&&(p(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",g));const N=x.program;n.updateUBOMapping(y,N);const E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){const x=u();y.__bindingPointIndex=x;const v=s.createBuffer(),N=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,N,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],v=y.uniforms,N=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,I=v.length;E<I;E++){const L=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,S=L.length;w<S;w++){const F=L[w];if(f(F,E,w,N)===!0){const k=F.__offset,H=Array.isArray(F.value)?F.value:[F.value];let W=0;for(let K=0;K<H.length;K++){const B=H[K],$=_(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,k+W,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,v,N){const E=y.value,I=x+"_"+v;if(N[I]===void 0)return typeof E=="number"||typeof E=="boolean"?N[I]=E:N[I]=E.clone(),!0;{const L=N[I];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return N[I]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function p(y){const x=y.uniforms;let v=0;const N=16;for(let I=0,L=x.length;I<L;I++){const w=Array.isArray(x[I])?x[I]:[x[I]];for(let S=0,F=w.length;S<F;S++){const k=w[S],H=Array.isArray(k.value)?k.value:[k.value];for(let W=0,K=H.length;W<K;W++){const B=H[W],$=_(B),V=v%N,j=V%$.boundary,ce=V+j;v+=j,ce!==0&&N-ce<$.storage&&(v+=N-ce),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=$.storage}}}const E=v%N;return E>0&&(v+=N-E),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class bg{constructor(e={}){const{canvas:t=_m(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=Ki,this.toneMappingExposure=1;const v=this;let N=!1,E=0,I=0,L=null,w=-1,S=null;const F=new bt,k=new bt;let H=null;const W=new Te(0);let K=0,B=t.width,$=t.height,V=1,j=null,ce=null;const ue=new bt(0,0,B,$),Me=new bt(0,0,B,$);let xe=!1;const q=new ta;let ee=!1,ne=!1;this.transmissionResolutionScale=1;const te=new We,ye=new We,tt=new C,ke=new bt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function fe(){return L===null?V:1}let O=n;function qe(R,z){return t.getContext(R,z)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),O===null){const z="webgl2";if(O=qe(z,R),O===null)throw qe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ge,Ue,be,it,Ie,U,T,Y,oe,de,ae,Xe,Ae,Oe,yt,ve,ze,$e,rt,Ve,Mt,pt,Lt,G;function Re(){ge=new SM(O),ge.init(),pt=new yg(O,ge),Ue=new _M(O,ge,e,pt),be=new iw(O,ge),Ue.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),it=new TM(O),Ie=new WS,U=new sw(O,ge,be,Ie,Ue,pt,it),T=new xM(v),Y=new MM(v),oe=new Lx(O),Lt=new mM(O,oe),de=new wM(O,oe,it,Lt),ae=new CM(O,de,oe,it),rt=new AM(O,Ue,U),ve=new vM(Ie),Xe=new GS(v,T,Y,ge,Ue,Lt,ve),Ae=new hw(v,Ie),Oe=new qS,yt=new QS(ge),$e=new pM(v,T,Y,be,ae,f,c),ze=new tw(v,ae,Ue),G=new uw(O,it,Ue,be),Ve=new gM(O,ge,it),Mt=new EM(O,ge,it),it.programs=Xe.programs,v.capabilities=Ue,v.extensions=ge,v.properties=Ie,v.renderLists=Oe,v.shadowMap=ze,v.state=be,v.info=it}Re();const ie=new cw(v,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(B,$,!1))},this.getSize=function(R){return R.set(B,$)},this.setSize=function(R,z,Z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,$=z,t.width=Math.floor(R*V),t.height=Math.floor(z*V),Z===!0&&(t.style.width=R+"px",t.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(B*V,$*V).floor()},this.setDrawingBufferSize=function(R,z,Z){B=R,$=z,V=Z,t.width=Math.floor(R*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(ue)},this.setViewport=function(R,z,Z,J){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,z,Z,J),be.viewport(F.copy(ue).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(Me)},this.setScissor=function(R,z,Z,J){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,z,Z,J),be.scissor(k.copy(Me).multiplyScalar(V).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){be.setScissorTest(xe=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(R=!0,z=!0,Z=!0){let J=0;if(R){let X=!1;if(L!==null){const _e=L.texture.format;X=_e===ll||_e===cl||_e===Ko}if(X){const _e=L.texture.type,Ce=_e===Ri||_e===es||_e===zr||_e===Qs||_e===rl||_e===ol,Fe=$e.getClearColor(),He=$e.getClearAlpha(),ot=Fe.r,at=Fe.g,je=Fe.b;Ce?(p[0]=ot,p[1]=at,p[2]=je,p[3]=He,O.clearBufferuiv(O.COLOR,0,p)):(_[0]=ot,_[1]=at,_[2]=je,_[3]=He,O.clearBufferiv(O.COLOR,0,_))}else J|=O.COLOR_BUFFER_BIT}z&&(J|=O.DEPTH_BUFFER_BIT),Z&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),$e.dispose(),Oe.dispose(),yt.dispose(),Ie.dispose(),T.dispose(),Y.dispose(),ae.dispose(),Lt.dispose(),G.dispose(),Xe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",sa),ie.removeEventListener("sessionend",ra),Li.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=it.autoReset,z=ze.enabled,Z=ze.autoUpdate,J=ze.needsUpdate,X=ze.type;Re(),it.autoReset=R,ze.enabled=z,ze.autoUpdate=Z,ze.needsUpdate=J,ze.type=X}function De(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function dt(R){const z=R.target;z.removeEventListener("dispose",dt),Gt(z)}function Gt(R){mn(R),Ie.remove(R)}function mn(R){const z=Ie.get(R).programs;z!==void 0&&(z.forEach(function(Z){Xe.releaseProgram(Z)}),R.isShaderMaterial&&Xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,Z,J,X,_e){z===null&&(z=wt);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,Fe=Hl(R,z,Z,J,X);be.setMaterial(J,Ce);let He=Z.index,ot=1;if(J.wireframe===!0){if(He=de.getWireframeAttribute(Z),He===void 0)return;ot=2}const at=Z.drawRange,je=Z.attributes.position;let vt=at.start*ot,Ct=(at.start+at.count)*ot;_e!==null&&(vt=Math.max(vt,_e.start*ot),Ct=Math.min(Ct,(_e.start+_e.count)*ot)),He!==null?(vt=Math.max(vt,0),Ct=Math.min(Ct,He.count)):je!=null&&(vt=Math.max(vt,0),Ct=Math.min(Ct,je.count));const qt=Ct-vt;if(qt<0||qt===1/0)return;Lt.setup(X,J,Fe,Z,He);let Wt,Et=Ve;if(He!==null&&(Wt=oe.get(He),Et=Mt,Et.setIndex(Wt)),X.isMesh)J.wireframe===!0?(be.setLineWidth(J.wireframeLinewidth*fe()),Et.setMode(O.LINES)):Et.setMode(O.TRIANGLES);else if(X.isLine){let Qe=J.linewidth;Qe===void 0&&(Qe=1),be.setLineWidth(Qe*fe()),X.isLineSegments?Et.setMode(O.LINES):X.isLineLoop?Et.setMode(O.LINE_LOOP):Et.setMode(O.LINE_STRIP)}else X.isPoints?Et.setMode(O.POINTS):X.isSprite&&Et.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Et.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qe=X._multiDrawStarts,ln=X._multiDrawCounts,Rt=X._multiDrawCount,Gn=He?oe.get(He).bytesPerElement:1,Ht=Ie.get(J).currentProgram.getUniforms();for(let yn=0;yn<Rt;yn++)Ht.setValue(O,"_gl_DrawID",yn),Et.render(Qe[yn]/Gn,ln[yn])}else if(X.isInstancedMesh)Et.renderInstances(vt,qt,X.count);else if(Z.isInstancedBufferGeometry){const Qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ln=Math.min(Z.instanceCount,Qe);Et.renderInstances(vt,qt,ln)}else Et.render(vt,qt)};function gt(R,z,Z){R.transparent===!0&&R.side===ai&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,ur(R,z,Z),R.side=Ci,R.needsUpdate=!0,ur(R,z,Z),R.side=ai):ur(R,z,Z)}this.compile=function(R,z,Z=null){Z===null&&(Z=R),m=yt.get(Z),m.init(z),x.push(m),Z.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),R!==Z&&R.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const J=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _e=X.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){const Fe=_e[Ce];gt(Fe,Z,X),J.add(Fe)}else gt(_e,Z,X),J.add(_e)}),x.pop(),m=null,J},this.compileAsync=function(R,z,Z=null){const J=this.compile(R,z,Z);return new Promise(X=>{function _e(){if(J.forEach(function(Ce){Ie.get(Ce).currentProgram.isReady()&&J.delete(Ce)}),J.size===0){X(R);return}setTimeout(_e,10)}ge.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Hn=null;function di(R){Hn&&Hn(R)}function sa(){Li.stop()}function ra(){Li.start()}const Li=new mg;Li.setAnimationLoop(di),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){Hn=R,ie.setAnimationLoop(R),R===null?Li.stop():Li.start()},ie.addEventListener("sessionstart",sa),ie.addEventListener("sessionend",ra),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(z),z=ie.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,z,L),m=yt.get(R,x.length),m.init(z),x.push(m),ye.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(ye),ne=this.localClippingEnabled,ee=ve.init(this.clippingPlanes,ne),g=Oe.get(R,y.length),g.init(),y.push(g),ie.enabled===!0&&ie.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&Jr(_e,z,-1/0,v.sortObjects)}Jr(R,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(j,ce),pe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,pe&&$e.addToRenderList(g,R),this.info.render.frame++,ee===!0&&ve.beginShadows();const Z=m.state.shadowsArray;ze.render(Z,R,z),ee===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,X=g.transmissive;if(m.setupLights(),z.isArrayCamera){const _e=z.cameras;if(X.length>0)for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const He=_e[Ce];Kr(J,X,R,He)}pe&&$e.render(R);for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const He=_e[Ce];oa(g,R,He,He.viewport)}}else X.length>0&&Kr(J,X,R,z),pe&&$e.render(R),oa(g,R,z);L!==null&&I===0&&(U.updateMultisampleRenderTarget(L),U.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(v,R,z),Lt.resetDefaultState(),w=-1,S=null,x.pop(),x.length>0?(m=x[x.length-1],ee===!0&&ve.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Jr(R,z,Z,J){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){J&&ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const Ce=ae.update(R),Fe=R.material;Fe.visible&&g.push(R,Ce,Fe,Z,ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const Ce=ae.update(R),Fe=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ke.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ke.copy(Ce.boundingSphere.center)),ke.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(Fe)){const He=Ce.groups;for(let ot=0,at=He.length;ot<at;ot++){const je=He[ot],vt=Fe[je.materialIndex];vt&&vt.visible&&g.push(R,Ce,vt,Z,ke.z,je)}}else Fe.visible&&g.push(R,Ce,Fe,Z,ke.z,null)}}const _e=R.children;for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++)Jr(_e[Ce],z,Z,J)}function oa(R,z,Z,J){const X=R.opaque,_e=R.transmissive,Ce=R.transparent;m.setupLightsView(Z),ee===!0&&ve.setGlobalState(v.clippingPlanes,Z),J&&be.viewport(F.copy(J)),X.length>0&&hr(X,z,Z),_e.length>0&&hr(_e,z,Z),Ce.length>0&&hr(Ce,z,Z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Kr(R,z,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new li(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?qr:Ri,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const _e=m.state.transmissionRenderTarget[J.id],Ce=J.viewport||F;_e.setSize(Ce.z*v.transmissionResolutionScale,Ce.w*v.transmissionResolutionScale);const Fe=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(W),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),pe&&$e.render(Z);const He=v.toneMapping;v.toneMapping=Ki;const ot=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),ee===!0&&ve.setGlobalState(v.clippingPlanes,J),hr(R,Z,J),U.updateMultisampleRenderTarget(_e),U.updateRenderTargetMipmap(_e),ge.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let je=0,vt=z.length;je<vt;je++){const Ct=z[je],qt=Ct.object,Wt=Ct.geometry,Et=Ct.material,Qe=Ct.group;if(Et.side===ai&&qt.layers.test(J.layers)){const ln=Et.side;Et.side=zn,Et.needsUpdate=!0,Qr(qt,Z,J,Wt,Et,Qe),Et.side=ln,Et.needsUpdate=!0,at=!0}}at===!0&&(U.updateMultisampleRenderTarget(_e),U.updateRenderTargetMipmap(_e))}v.setRenderTarget(Fe),v.setClearColor(W,K),ot!==void 0&&(J.viewport=ot),v.toneMapping=He}function hr(R,z,Z){const J=z.isScene===!0?z.overrideMaterial:null;for(let X=0,_e=R.length;X<_e;X++){const Ce=R[X],Fe=Ce.object,He=Ce.geometry,ot=J===null?Ce.material:J,at=Ce.group;Fe.layers.test(Z.layers)&&Qr(Fe,z,Z,He,ot,at)}}function Qr(R,z,Z,J,X,_e){R.onBeforeRender(v,z,Z,J,X,_e),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(v,z,Z,J,R,_e),X.transparent===!0&&X.side===ai&&X.forceSinglePass===!1?(X.side=zn,X.needsUpdate=!0,v.renderBufferDirect(Z,z,J,X,R,_e),X.side=Ci,X.needsUpdate=!0,v.renderBufferDirect(Z,z,J,X,R,_e),X.side=ai):v.renderBufferDirect(Z,z,J,X,R,_e),R.onAfterRender(v,z,Z,J,X,_e)}function ur(R,z,Z){z.isScene!==!0&&(z=wt);const J=Ie.get(R),X=m.state.lights,_e=m.state.shadowsArray,Ce=X.state.version,Fe=Xe.getParameters(R,X.state,_e,z,Z),He=Xe.getProgramCacheKey(Fe);let ot=J.programs;J.environment=R.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(R.isMeshStandardMaterial?Y:T).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,ot===void 0&&(R.addEventListener("dispose",dt),ot=new Map,J.programs=ot);let at=ot.get(He);if(at!==void 0){if(J.currentProgram===at&&J.lightsStateVersion===Ce)return ca(R,Fe),at}else Fe.uniforms=Xe.getUniforms(R),R.onBeforeCompile(Fe,v),at=Xe.acquireProgram(Fe,He),ot.set(He,at),J.uniforms=Fe.uniforms;const je=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=ve.uniform),ca(R,Fe),J.needsLights=Wl(R),J.lightsStateVersion=Ce,J.needsLights&&(je.ambientLightColor.value=X.state.ambient,je.lightProbe.value=X.state.probe,je.directionalLights.value=X.state.directional,je.directionalLightShadows.value=X.state.directionalShadow,je.spotLights.value=X.state.spot,je.spotLightShadows.value=X.state.spotShadow,je.rectAreaLights.value=X.state.rectArea,je.ltc_1.value=X.state.rectAreaLTC1,je.ltc_2.value=X.state.rectAreaLTC2,je.pointLights.value=X.state.point,je.pointLightShadows.value=X.state.pointShadow,je.hemisphereLights.value=X.state.hemi,je.directionalShadowMap.value=X.state.directionalShadowMap,je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,je.spotShadowMap.value=X.state.spotShadowMap,je.spotLightMatrix.value=X.state.spotLightMatrix,je.spotLightMap.value=X.state.spotLightMap,je.pointShadowMap.value=X.state.pointShadowMap,je.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=at,J.uniformsList=null,at}function aa(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=lc.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function ca(R,z){const Z=Ie.get(R);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Hl(R,z,Z,J,X){z.isScene!==!0&&(z=wt),U.resetTextureUnits();const _e=z.fog,Ce=J.isMeshStandardMaterial?z.environment:null,Fe=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:er,He=(J.isMeshStandardMaterial?Y:T).get(J.envMap||Ce),ot=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,at=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),je=!!Z.morphAttributes.position,vt=!!Z.morphAttributes.normal,Ct=!!Z.morphAttributes.color;let qt=Ki;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(qt=v.toneMapping);const Wt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=Wt!==void 0?Wt.length:0,Qe=Ie.get(J),ln=m.state.lights;if(ee===!0&&(ne===!0||R!==S)){const sn=R===S&&J.id===w;ve.setState(J,R,sn)}let Rt=!1;J.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ln.state.version||Qe.outputColorSpace!==Fe||X.isBatchedMesh&&Qe.batching===!1||!X.isBatchedMesh&&Qe.batching===!0||X.isBatchedMesh&&Qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Qe.instancing===!1||!X.isInstancedMesh&&Qe.instancing===!0||X.isSkinnedMesh&&Qe.skinning===!1||!X.isSkinnedMesh&&Qe.skinning===!0||X.isInstancedMesh&&Qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Qe.instancingMorph===!1&&X.morphTexture!==null||Qe.envMap!==He||J.fog===!0&&Qe.fog!==_e||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ve.numPlanes||Qe.numIntersection!==ve.numIntersection)||Qe.vertexAlphas!==ot||Qe.vertexTangents!==at||Qe.morphTargets!==je||Qe.morphNormals!==vt||Qe.morphColors!==Ct||Qe.toneMapping!==qt||Qe.morphTargetsCount!==Et)&&(Rt=!0):(Rt=!0,Qe.__version=J.version);let Gn=Qe.currentProgram;Rt===!0&&(Gn=ur(J,z,X));let Ht=!1,yn=!1,ys=!1;const kt=Gn.getUniforms(),Nn=Qe.uniforms;if(be.useProgram(Gn.program)&&(Ht=!0,yn=!0,ys=!0),J.id!==w&&(w=J.id,yn=!0),Ht||S!==R){be.buffers.depth.getReversed()?(te.copy(R.projectionMatrix),a_(te),c_(te),kt.setValue(O,"projectionMatrix",te)):kt.setValue(O,"projectionMatrix",R.projectionMatrix),kt.setValue(O,"viewMatrix",R.matrixWorldInverse);const hn=kt.map.cameraPosition;hn!==void 0&&hn.setValue(O,tt.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&kt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&kt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,yn=!0,ys=!0)}if(X.isSkinnedMesh){kt.setOptional(O,X,"bindMatrix"),kt.setOptional(O,X,"bindMatrixInverse");const sn=X.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),kt.setValue(O,"boneTexture",sn.boneTexture,U))}X.isBatchedMesh&&(kt.setOptional(O,X,"batchingTexture"),kt.setValue(O,"batchingTexture",X._matricesTexture,U),kt.setOptional(O,X,"batchingIdTexture"),kt.setValue(O,"batchingIdTexture",X._indirectTexture,U),kt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&kt.setValue(O,"batchingColorTexture",X._colorsTexture,U));const En=Z.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&rt.update(X,Z,Gn),(yn||Qe.receiveShadow!==X.receiveShadow)&&(Qe.receiveShadow=X.receiveShadow,kt.setValue(O,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Nn.envMap.value=He,Nn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(Nn.envMapIntensity.value=z.environmentIntensity),yn&&(kt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&Gl(Nn,ys),_e&&J.fog===!0&&Ae.refreshFogUniforms(Nn,_e),Ae.refreshMaterialUniforms(Nn,J,V,$,m.state.transmissionRenderTarget[R.id]),lc.upload(O,aa(Qe),Nn,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(lc.upload(O,aa(Qe),Nn,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&kt.setValue(O,"center",X.center),kt.setValue(O,"modelViewMatrix",X.modelViewMatrix),kt.setValue(O,"normalMatrix",X.normalMatrix),kt.setValue(O,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const sn=J.uniformsGroups;for(let hn=0,dr=sn.length;hn<dr;hn++){const Ni=sn[hn];G.update(Ni,Gn),G.bind(Ni,Gn)}}return Gn}function Gl(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Wl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,z,Z){Ie.get(R.texture).__webglTexture=z,Ie.get(R.depthTexture).__webglTexture=Z;const J=Ie.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const Z=Ie.get(R);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};const Xl=O.createFramebuffer();this.setRenderTarget=function(R,z=0,Z=0){L=R,E=z,I=Z;let J=!0,X=null,_e=!1,Ce=!1;if(R){const He=Ie.get(R);if(He.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(He.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(He.__hasExternalTextures)U.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(He.__boundDepthTexture!==je){if(je!==null&&Ie.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const ot=R.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ce=!0);const at=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[z])?X=at[z][Z]:X=at[z],_e=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?X=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?X=at[Z]:X=at,F.copy(R.viewport),k.copy(R.scissor),H=R.scissorTest}else F.copy(ue).multiplyScalar(V).floor(),k.copy(Me).multiplyScalar(V).floor(),H=xe;if(Z!==0&&(X=Xl),be.bindFramebuffer(O.FRAMEBUFFER,X)&&J&&be.drawBuffers(R,X),be.viewport(F),be.scissor(k),be.setScissorTest(H),_e){const He=Ie.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,He.__webglTexture,Z)}else if(Ce){const He=Ie.get(R.texture),ot=z;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.__webglTexture,Z,ot)}else if(R!==null&&Z!==0){const He=Ie.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,He.__webglTexture,Z)}w=-1},this.readRenderTargetPixels=function(R,z,Z,J,X,_e,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){be.bindFramebuffer(O.FRAMEBUFFER,Fe);try{const He=R.texture,ot=He.format,at=He.type;if(!Ue.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-J&&Z>=0&&Z<=R.height-X&&O.readPixels(z,Z,J,X,pt.convert(ot),pt.convert(at),_e)}finally{const He=L!==null?Ie.get(L).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,z,Z,J,X,_e,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){const He=R.texture,ot=He.format,at=He.type;if(!Ue.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-J&&Z>=0&&Z<=R.height-X){be.bindFramebuffer(O.FRAMEBUFFER,Fe);const je=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.bufferData(O.PIXEL_PACK_BUFFER,_e.byteLength,O.STREAM_READ),O.readPixels(z,Z,J,X,pt.convert(ot),pt.convert(at),0);const vt=L!==null?Ie.get(L).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,vt);const Ct=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await o_(O,Ct,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_e),O.deleteBuffer(je),O.deleteSync(Ct),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,Z=0){R.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const J=Math.pow(2,-Z),X=Math.floor(R.image.width*J),_e=Math.floor(R.image.height*J),Ce=z!==null?z.x:0,Fe=z!==null?z.y:0;U.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ce,Fe,X,_e),be.unbindTexture()};const ql=O.createFramebuffer(),Yl=O.createFramebuffer();this.copyTextureToTexture=function(R,z,Z=null,J=null,X=0,_e=null){R.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1],z=arguments[2],_e=arguments[3]||0,Z=null),_e===null&&(X!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=X,X=0):_e=0);let Ce,Fe,He,ot,at,je,vt,Ct,qt;const Wt=R.isCompressedTexture?R.mipmaps[_e]:R.image;if(Z!==null)Ce=Z.max.x-Z.min.x,Fe=Z.max.y-Z.min.y,He=Z.isBox3?Z.max.z-Z.min.z:1,ot=Z.min.x,at=Z.min.y,je=Z.isBox3?Z.min.z:0;else{const En=Math.pow(2,-X);Ce=Math.floor(Wt.width*En),Fe=Math.floor(Wt.height*En),R.isDataArrayTexture?He=Wt.depth:R.isData3DTexture?He=Math.floor(Wt.depth*En):He=1,ot=0,at=0,je=0}J!==null?(vt=J.x,Ct=J.y,qt=J.z):(vt=0,Ct=0,qt=0);const Et=pt.convert(z.format),Qe=pt.convert(z.type);let ln;z.isData3DTexture?(U.setTexture3D(z,0),ln=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(U.setTexture2DArray(z,0),ln=O.TEXTURE_2D_ARRAY):(U.setTexture2D(z,0),ln=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Rt=O.getParameter(O.UNPACK_ROW_LENGTH),Gn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ht=O.getParameter(O.UNPACK_SKIP_PIXELS),yn=O.getParameter(O.UNPACK_SKIP_ROWS),ys=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,at),O.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const kt=R.isDataArrayTexture||R.isData3DTexture,Nn=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const En=Ie.get(R),sn=Ie.get(z),hn=Ie.get(En.__renderTarget),dr=Ie.get(sn.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,hn.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let Ni=0;Ni<He;Ni++)kt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(R).__webglTexture,X,je+Ni),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(z).__webglTexture,_e,qt+Ni)),O.blitFramebuffer(ot,at,Ce,Fe,vt,Ct,Ce,Fe,O.DEPTH_BUFFER_BIT,O.NEAREST);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||Ie.has(R)){const En=Ie.get(R),sn=Ie.get(z);be.bindFramebuffer(O.READ_FRAMEBUFFER,ql),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,Yl);for(let hn=0;hn<He;hn++)kt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,En.__webglTexture,X,je+hn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,En.__webglTexture,X),Nn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,sn.__webglTexture,_e,qt+hn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,sn.__webglTexture,_e),X!==0?O.blitFramebuffer(ot,at,Ce,Fe,vt,Ct,Ce,Fe,O.COLOR_BUFFER_BIT,O.NEAREST):Nn?O.copyTexSubImage3D(ln,_e,vt,Ct,qt+hn,ot,at,Ce,Fe):O.copyTexSubImage2D(ln,_e,vt,Ct,ot,at,Ce,Fe);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(ln,_e,vt,Ct,qt,Ce,Fe,He,Et,Qe,Wt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(ln,_e,vt,Ct,qt,Ce,Fe,He,Et,Wt.data):O.texSubImage3D(ln,_e,vt,Ct,qt,Ce,Fe,He,Et,Qe,Wt):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_e,vt,Ct,Ce,Fe,Et,Qe,Wt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_e,vt,Ct,Wt.width,Wt.height,Et,Wt.data):O.texSubImage2D(O.TEXTURE_2D,_e,vt,Ct,Ce,Fe,Et,Qe,Wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Rt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Gn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ht),O.pixelStorei(O.UNPACK_SKIP_ROWS,yn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ys),_e===0&&z.generateMipmaps&&O.generateMipmap(ln),be.unbindTexture()},this.copyTextureToTexture3D=function(R,z,Z=null,J=null,X=0){return R.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,R=arguments[2],z=arguments[3],X=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,Z,J,X)},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),be.unbindTexture()},this.resetState=function(){E=0,I=0,L=null,be.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const dw=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:$p,AddEquation:us,AddOperation:jp,AdditiveAnimationBlendMode:Tu,AdditiveBlending:qh,AgXToneMapping:yc,AlphaFormat:yu,AlwaysCompare:mm,AlwaysDepth:pc,AlwaysStencilFunc:Jh,AmbientLight:$u,AnimationAction:ug,AnimationClip:sr,AnimationLoader:Dv,AnimationMixer:rx,AnimationObjectGroup:ix,AnimationUtils:Cv,ArcCurve:Im,ArrayCamera:ag,ArrowHelper:Ex,AttachedBindMode:jh,Audio:lg,AudioAnalyser:Yv,AudioContext:ed,AudioListener:Wv,AudioLoader:Vv,AxesHelper:Tx,BackSide:zn,BasicDepthPacking:om,BasicShadowMap:c0,BatchedMesh:Am,Bone:xl,BooleanKeyframeTrack:or,Box2:fx,Box3:_n,Box3Helper:Sx,BoxGeometry:$t,BoxHelper:Mx,BufferAttribute:Dt,BufferGeometry:ct,BufferGeometryLoader:og,ByteType:_u,Cache:ji,Camera:pl,CameraHelper:bx,CanvasTexture:Q_,CapsuleGeometry:Ml,CatmullRomCurve3:Dm,CineonToneMapping:Qp,CircleGeometry:Sl,ClampToEdgeWrapping:jn,Clock:cg,Color:Te,ColorKeyframeTrack:Yu,ColorManagement:xt,CompressedArrayTexture:J_,CompressedCubeTexture:K_,CompressedTexture:yl,CompressedTextureLoader:Lv,ConeGeometry:wl,ConstantAlphaFactor:qp,ConstantColorFactor:Wp,Controls:od,CubeCamera:bm,CubeReflectionMapping:$i,CubeRefractionMapping:fs,CubeTexture:$o,CubeTextureLoader:Nv,CubeUVReflectionMapping:Xr,CubicBezierCurve:Fu,CubicBezierCurve3:Lm,CubicInterpolant:Jm,CullFaceBack:Xh,CullFaceFront:Rp,CullFaceFrontBack:a0,CullFaceNone:Cp,Curve:yi,CurvePath:Um,CustomBlending:Pp,CustomToneMapping:em,CylinderGeometry:on,Cylindrical:dx,Data3DTexture:dl,DataArrayTexture:Qo,DataTexture:Ti,DataTextureLoader:$m,DataUtils:S_,DecrementStencilOp:M0,DecrementWrapStencilOp:w0,DefaultLoadingManager:cr,DepthFormat:Zs,DepthStencilFormat:$s,DepthTexture:Uu,DetachedBindMode:nm,DirectionalLight:Qu,DirectionalLightHelper:yx,DiscreteInterpolant:Km,DodecahedronGeometry:El,DoubleSide:ai,DstAlphaFactor:kp,DstColorFactor:Vp,DynamicCopyUsage:k0,DynamicDrawUsage:L0,DynamicReadUsage:O0,EdgesGeometry:Om,EllipseCurve:bl,EqualCompare:um,EqualDepth:gc,EqualStencilFunc:C0,EquirectangularReflectionMapping:Do,EquirectangularRefractionMapping:Lo,Euler:Kn,EventDispatcher:Di,ExtrudeGeometry:Al,FileLoader:vi,Float16BufferAttribute:P_,Float32BufferAttribute:Pe,FloatType:Jn,Fog:gl,FogExp2:ml,FramebufferTexture:j_,FrontSide:Ci,Frustum:ta,GLBufferAttribute:ux,GLSL1:V0,GLSL3:Kh,GreaterCompare:dm,GreaterDepth:vc,GreaterEqualCompare:pm,GreaterEqualDepth:_c,GreaterEqualStencilFunc:D0,GreaterStencilFunc:P0,GridHelper:pg,Group:Ei,HalfFloatType:qr,HemisphereLight:tg,HemisphereLightHelper:vx,IcosahedronGeometry:Cl,ImageBitmapLoader:zv,ImageLoader:qo,ImageUtils:vm,IncrementStencilOp:b0,IncrementWrapStencilOp:S0,InstancedBufferAttribute:Gr,InstancedBufferGeometry:rg,InstancedInterleavedBuffer:hx,InstancedMesh:Tm,Int16BufferAttribute:C_,Int32BufferAttribute:R_,Int8BufferAttribute:E_,IntType:sl,InterleavedBuffer:vl,InterleavedBufferAttribute:tr,Interpolant:ia,InterpolateDiscrete:Uo,InterpolateLinear:Yc,InterpolateSmooth:ac,InvertStencilOp:E0,KeepStencilOp:Os,KeyframeTrack:bi,LOD:Em,LatheGeometry:na,Layers:fl,LessCompare:hm,LessDepth:mc,LessEqualCompare:Au,LessEqualDepth:Ks,LessEqualStencilFunc:R0,LessStencilFunc:A0,Light:vs,LightProbe:sg,Line:Mn,Line3:dg,LineBasicMaterial:xn,LineCurve:Bu,LineCurve3:Nm,LineDashedMaterial:Ym,LineLoop:Cm,LineSegments:xi,LinearFilter:dn,LinearInterpolant:qu,LinearMipMapLinearFilter:d0,LinearMipMapNearestFilter:u0,LinearMipmapLinearFilter:gi,LinearMipmapNearestFilter:bo,LinearSRGBColorSpace:er,LinearToneMapping:Jp,LinearTransfer:Fo,Loader:wn,LoaderUtils:Qc,LoadingManager:Zu,LoopOnce:im,LoopPingPong:rm,LoopRepeat:sm,LuminanceAlphaFormat:Su,LuminanceFormat:Mu,MOUSE:qs,Material:Ln,MaterialLoader:Ul,MathUtils:ks,Matrix2:rd,Matrix3:ft,Matrix4:We,MaxEquation:Np,Mesh:Se,MeshBasicMaterial:ii,MeshDepthMaterial:Nl,MeshDistanceMaterial:Wu,MeshLambertMaterial:Gu,MeshMatcapMaterial:qm,MeshNormalMaterial:Xm,MeshPhongMaterial:Kc,MeshPhysicalMaterial:Gm,MeshStandardMaterial:Hu,MeshToonMaterial:Wm,MinEquation:Lp,MirroredRepeatWrapping:No,MixOperation:Zp,MultiplyBlending:Zh,MultiplyOperation:Jo,NearestFilter:Sn,NearestMipMapLinearFilter:h0,NearestMipMapNearestFilter:l0,NearestMipmapLinearFilter:Lr,NearestMipmapNearestFilter:gu,NeutralToneMapping:tm,NeverCompare:lm,NeverDepth:fc,NeverStencilFunc:T0,NoBlending:Ji,NoColorSpace:Wi,NoToneMapping:Ki,NormalAnimationBlendMode:hl,NormalBlending:Ys,NotEqualCompare:fm,NotEqualDepth:xc,NotEqualStencilFunc:I0,NumberKeyframeTrack:Xo,Object3D:St,ObjectLoader:Bv,ObjectSpaceNormalMap:cm,OctahedronGeometry:Zi,OneFactor:Op,OneMinusConstantAlphaFactor:Yp,OneMinusConstantColorFactor:Xp,OneMinusDstAlphaFactor:zp,OneMinusDstColorFactor:Hp,OneMinusSrcAlphaFactor:dc,OneMinusSrcColorFactor:Bp,OrthographicCamera:lr,PCFShadowMap:mu,PCFSoftShadowMap:yo,PMREMGenerator:ru,Path:Vo,PerspectiveCamera:cn,Plane:Hi,PlaneGeometry:_s,PlaneHelper:wx,PointLight:Ku,PointLightHelper:gx,Points:Rm,PointsMaterial:Nu,PolarGridHelper:xx,PolyhedronGeometry:gs,PositionalAudio:qv,PropertyBinding:At,PropertyMixer:hg,QuadraticBezierCurve:ku,QuadraticBezierCurve3:zu,Quaternion:Bt,QuaternionKeyframeTrack:Zr,QuaternionLinearInterpolant:Qm,RED_GREEN_RGTC2_Format:Xc,RED_RGTC1_Format:Eu,REVISION:nl,RGBADepthPacking:am,RGBAFormat:kn,RGBAIntegerFormat:ll,RGBA_ASTC_10x10_Format:kc,RGBA_ASTC_10x5_Format:Oc,RGBA_ASTC_10x6_Format:Fc,RGBA_ASTC_10x8_Format:Bc,RGBA_ASTC_12x10_Format:zc,RGBA_ASTC_12x12_Format:Vc,RGBA_ASTC_4x4_Format:Cc,RGBA_ASTC_5x4_Format:Rc,RGBA_ASTC_5x5_Format:Pc,RGBA_ASTC_6x5_Format:Ic,RGBA_ASTC_6x6_Format:Dc,RGBA_ASTC_8x5_Format:Lc,RGBA_ASTC_8x6_Format:Nc,RGBA_ASTC_8x8_Format:Uc,RGBA_BPTC_Format:To,RGBA_ETC2_EAC_Format:Ac,RGBA_PVRTC_2BPPV1_Format:wc,RGBA_PVRTC_4BPPV1_Format:Sc,RGBA_S3TC_DXT1_Format:So,RGBA_S3TC_DXT3_Format:wo,RGBA_S3TC_DXT5_Format:Eo,RGBDepthPacking:_0,RGBFormat:bu,RGBIntegerFormat:f0,RGB_BPTC_SIGNED_Format:Hc,RGB_BPTC_UNSIGNED_Format:Gc,RGB_ETC1_Format:Ec,RGB_ETC2_Format:Tc,RGB_PVRTC_2BPPV1_Format:Mc,RGB_PVRTC_4BPPV1_Format:bc,RGB_S3TC_DXT1_Format:Mo,RGDepthPacking:v0,RGFormat:wu,RGIntegerFormat:cl,RawShaderMaterial:Hm,Ray:ms,Raycaster:sd,RectAreaLight:ng,RedFormat:al,RedIntegerFormat:Ko,ReinhardToneMapping:Kp,RenderTarget:ul,RenderTarget3D:ox,RenderTargetArray:ax,RepeatWrapping:Yi,ReplaceStencilOp:y0,ReverseSubtractEquation:Dp,RingGeometry:Rl,SIGNED_RED_GREEN_RGTC2_Format:qc,SIGNED_RED_RGTC1_Format:Wc,SRGBColorSpace:Zt,SRGBTransfer:Ut,Scene:_l,ShaderChunk:nt,ShaderLib:oi,ShaderMaterial:si,ShadowMaterial:Vm,Shape:Js,ShapeGeometry:Pl,ShapePath:Ax,ShapeUtils:Ai,ShortType:vu,Skeleton:ea,SkeletonHelper:mx,SkinnedMesh:Lu,Source:Ws,Sphere:vn,SphereGeometry:Yr,Spherical:iu,SphericalHarmonics3:ig,SplineCurve:Vu,SpotLight:Ju,SpotLightHelper:px,Sprite:wm,SpriteMaterial:Du,SrcAlphaFactor:uc,SrcAlphaSaturateFactor:Gp,SrcColorFactor:Fp,StaticCopyUsage:B0,StaticDrawUsage:Bo,StaticReadUsage:U0,StereoCamera:Hv,StreamCopyUsage:z0,StreamDrawUsage:N0,StreamReadUsage:F0,StringKeyframeTrack:ar,SubtractEquation:Ip,SubtractiveBlending:Yh,TOUCH:Vs,TangentSpaceNormalMap:ps,TetrahedronGeometry:Il,Texture:tn,TextureLoader:eg,TextureUtils:Dx,TimestampQuery:H0,TorusGeometry:qi,TorusKnotGeometry:Dl,Triangle:Zn,TriangleFanDrawMode:g0,TriangleStripDrawMode:m0,TrianglesDrawMode:p0,TubeGeometry:Ll,UVMapping:il,Uint16BufferAttribute:Ru,Uint32BufferAttribute:Pu,Uint8BufferAttribute:T_,Uint8ClampedBufferAttribute:A_,Uniform:id,UniformsGroup:lx,UniformsLib:Ee,UniformsUtils:Iu,UnsignedByteType:Ri,UnsignedInt248Type:Qs,UnsignedInt5999Type:xu,UnsignedIntType:es,UnsignedShort4444Type:rl,UnsignedShort5551Type:ol,UnsignedShortType:zr,VSMShadowMap:Si,Vector2:se,Vector3:C,Vector4:bt,VectorKeyframeTrack:ir,VideoFrameTexture:Z_,VideoTexture:Pm,WebGL3DRenderTarget:f_,WebGLArrayRenderTarget:d_,WebGLCoordinateSystem:_i,WebGLCubeRenderTarget:Mm,WebGLRenderTarget:li,WebGLRenderer:bg,WebGLUtils:yg,WebGPUCoordinateSystem:ko,WebXRController:cc,WireframeGeometry:zm,WrapAroundEnding:Oo,ZeroCurvatureEnding:Hs,ZeroFactor:Up,ZeroSlopeEnding:Gs,ZeroStencilOp:x0,createCanvasElement:_m},Symbol.toStringTag,{value:"Module"})),tp=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(s[n]!==e[n])return!1;return!0},fw=()=>{const s=[],n={items:s,remember:(i,r)=>{for(let a=0;a<s.length;a++){const c=s[a];if(tp(r,c.keys)&&c.promise)return c.promise}const o={promise:i(),keys:r};return s.push(o),o.promise},clear:i=>{for(let r=0;r<s.length;r++){const o=s[r];if(tp(i,o.keys)){s.splice(r,1);return}}}};return Qn("threlte-cache",n),n},pw=()=>{const s=Vn("threlte-cache");if(!s)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return s},np=Symbol(),mw=s=>typeof(s==null?void 0:s.subscribe)=="function",Mg=(s,e,t)=>{const n=s().map(o=>mw(o)?o0(o):np),i=_t(()=>s().map((o,a)=>n[a]===np?o:n[a].current)),r=()=>{le(i);let o;return Ep(()=>{o=e(le(i))}),o};t?an(r):hs(r)},gw=(s,e)=>Mg(s,e,!1),_w=(s,e)=>Mg(s,e,!0),vw=Object.assign(gw,{pre:_w}),ti=(s,e)=>(s==null?void 0:s[`is${e}`])===!0,Uh=s=>{const e=Dn(void 0),t=Dn(void 0);return s.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(s,e),{error:t,promise:s})},xw=typeof window<"u",Pn=(s,e)=>{const t=tl(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const o=await e(r);o&&(n=o)});Ii(()=>{i(),n&&n()})},Jt=s=>{const e=Dn(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},yw=s=>({subscribe:s.subscribe,get current(){return s.current}}),Sg=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},bw=s=>{const{dom:e,canvas:t}=s,n=Jt({width:e.offsetWidth,height:e.offsetHeight});fu(()=>{const r=new ResizeObserver(()=>{const{offsetWidth:o,offsetHeight:a}=e;(n.current.width!==o||n.current.height!==a)&&n.set({width:o,height:a})});return r.observe(e),()=>{r.disconnect()}});const i={dom:e,canvas:t,size:yw(n)};return Qn("threlte-dom-context",i),i},Fl=()=>{const s=Vn("threlte-dom-context");if(!s)throw new Error("useDOM can only be used in a child component to <Canvas>.");return s};function Mw(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class ls{constructor(){Ot(this,"allVertices",{});Ot(this,"isolatedVertices",{});Ot(this,"connectedVertices",{});Ot(this,"sortedConnectedValues",[]);Ot(this,"needsSort",!1);Ot(this,"emitter",Mw());Ot(this,"emit",this.emitter.emit.bind(this.emitter));Ot(this,"on",this.emitter.on.bind(this.emitter));Ot(this,"off",this.emitter.off.bind(this.emitter));Ot(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n!=null&&n.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const o=this.connectedVertices[r];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const o=this.connectedVertices[r];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var o;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,c)=>{a===0&&t.push(c)});t.length>0;){const a=t.shift();n.push(a);const c=i.find(l=>l===a);c&&((o=this.connectedVertices[c])==null||o.next.forEach(l=>{const h=(e.get(l)||0)-1;e.set(l,h),h===0&&t.push(l)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class Sw{constructor(e,t,n){Ot(this,"key");Ot(this,"stage");Ot(this,"callback");Ot(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class ww extends ls{constructor(t,n,i){super();Ot(this,"key");Ot(this,"scheduler");Ot(this,"runTask",!0);Ot(this,"callback",(t,n)=>n());Ot(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,this.start=this.start.bind(this),this.stop=this.stop.bind(this),i&&(this.callback=i.bind(this))}stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}createTask(t,n,i){const r=new Sw(this,t,n);return this.add(t,r,i),r}getTask(t){return this.getValueByKey(t)}run(t){this.runTask&&this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){if(!this.runTask)return{};const n={};return this.callback(t,i=>{this.forEachNode(r=>{const o=performance.now();r.run(i??t);const a=performance.now()-o;n[r.key]=a})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class Ew extends ls{constructor(t){super();Ot(this,"lastTime",performance.now());Ot(this,"clampDeltaTo",.1);Ot(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new ww(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},r=performance.now();return this.forEachNode(o=>{const a=performance.now(),c=o.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),l=performance.now()-a;i[o.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-r,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const Tw=s=>{const e=new Ew,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:Jt(s.autoRender??!0),renderMode:Jt(s.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,r){n.shouldRender()&&r()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return hs(()=>{n.autoRender.set(s.autoRender??!0)}),hs(()=>{n.renderMode.set(s.renderMode??"on-demand")}),Ii(()=>{n.scheduler.dispose()}),Qn("threlte-scheduler-context",n),n},Bl=()=>{const s=Vn("threlte-scheduler-context");if(!s)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return s},Aw=()=>{const{size:s}=Fl(),{invalidate:e}=Bl(),t=new cn(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=Jt(t);Pn(s,r=>{if(n.current===t){const o=n.current;o.aspect=r.width/r.height,o.updateProjectionMatrix(),e()}});const i={camera:n};return Qn("threlte-camera-context",i),i},wg=()=>{const s=Vn("threlte-camera-context");if(!s)throw new Error("useCamera can only be used in a child component to <Canvas>.");return s},Cw=()=>{const s={removeObjectFromDisposal:e=>{s.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=s.disposableObjects.get(e);t?s.disposableObjects.set(e,t+1):s.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=s.disposableObjects.get(e);t&&t>0&&(s.disposableObjects.set(e,t-1),t-1<=0&&(s.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await Tp(),!(!s.shouldDispose&&!e)&&(s.disposableObjects.forEach((t,n)=>{var i;(t===0||e)&&((i=n==null?void 0:n.dispose)==null||i.call(n),s.disposableObjects.delete(n))}),s.shouldDispose=!1)}};return Ii(()=>{s.dispose(!0)}),Qn("threlte-disposal-context",s),s},Eg=()=>{const s=Vn("threlte-disposal-context");if(!s)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return s},Tg=Symbol("threlte-parent-context"),Ag=s=>{const e=Jt(s);return Qn(Tg,e),e},Cg=()=>Vn(Tg),$c=Symbol("threlte-parent-object3d-context"),Rw=s=>{const e=Ap(s);return Qn($c,e),e},Pw=s=>{const e=Vn($c),t=Dn(s),n=tl([t,e],([i,r])=>i??r);return Qn($c,n),t},Iw=()=>Vn($c);function el(s,e,t){if(!xw)return{task:void 0,start:()=>{},stop:()=>{},started:Ap(!1)};let n,i,r;ls.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const o=Bl();let a=o.mainStage;if(r){if(r.stage)if(ls.isValue(r.stage))a=r.stage;else{const d=o.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);a=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const f=r.after[d];if(ls.isValue(f)){a=f.stage;break}}else ls.isValue(r.after)&&(a=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const f=r.before[d];if(ls.isValue(f)){a=f.stage;break}}else ls.isValue(r.before)&&(a=r.before.stage)}const c=Dn(!1),l=a.createTask(n,i,r),h=()=>{c.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&o.autoInvalidations.add(i),l.start()},u=()=>{c.set(!1),((r==null?void 0:r.autoInvalidate)??!0)&&o.autoInvalidations.delete(i),l.stop()};return(r==null?void 0:r.autoStart)??!0?h():u(),Ii(()=>{u(),a.removeTask(n)}),{task:l,start:h,stop:u,started:{subscribe:c.subscribe}}}const Dw=s=>{const e={scene:new _l};return Qn("threlte-scene-context",e),e},Rg=()=>{const s=Vn("threlte-scene-context");if(!s)throw new Error("useScene can only be used in a child component to <Canvas>.");return s},Lw=s=>{const{dispose:e}=Eg(),{camera:t}=wg(),{scene:n}=Rg(),{invalidate:i,renderStage:r,autoRender:o,scheduler:a,resetFrameInvalidation:c}=Bl(),{size:l,canvas:h}=Fl(),u=s.createRenderer?s.createRenderer(h):new bg({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),d=r.createTask(Symbol("threlte-auto-render-task"),()=>{u.render(n,t.current)}),f={renderer:u,colorManagementEnabled:Jt(s.colorManagementEnabled??!0),colorSpace:Jt(s.colorSpace??"srgb"),dpr:Jt(s.dpr??window.devicePixelRatio),shadows:Jt(s.shadows??yo),toneMapping:Jt(s.toneMapping??yc),autoRenderTask:d};Qn("threlte-renderer-context",f),Pn([f.colorManagementEnabled],([g])=>{xt.enabled=g}),Pn([f.colorSpace],([g])=>{"outputColorSpace"in u&&(u.outputColorSpace=g)}),Pn([f.dpr],([g])=>{"setPixelRatio"in u&&u.setPixelRatio(g)});const{start:p,stop:_}=el(()=>{var g;!("xr"in u)||(g=u.xr)!=null&&g.isPresenting||(u.setSize(l.current.width,l.current.height),i(),_())},{before:d,autoStart:!1,autoInvalidate:!1});return Pn([l],()=>{p()}),Pn([f.shadows],([g])=>{"shadowMap"in u&&(u.shadowMap.enabled=!!g,g&&g!==!0?u.shadowMap.type=g:g===!0&&(u.shadowMap.type=yo))}),Pn([f.toneMapping],([g])=>{"toneMapping"in u&&(u.toneMapping=g)}),Pn([o],([g])=>(g?f.autoRenderTask.start():f.autoRenderTask.stop(),()=>{f.autoRenderTask.stop()})),"setAnimationLoop"in f.renderer&&f.renderer.setAnimationLoop(m=>{e(),a.run(m),c()}),Ii(()=>{if("dispose"in f.renderer){const g=f.renderer.dispose;g()}}),hs(()=>{f.colorManagementEnabled.set(s.colorManagementEnabled??!0)}),hs(()=>{f.colorSpace.set(s.colorSpace??"srgb")}),hs(()=>{f.toneMapping.set(s.toneMapping??yc)}),hs(()=>{f.shadows.set(s.shadows??yo)}),hs(()=>{f.dpr.set(s.dpr??window.devicePixelRatio)}),f},Nw=()=>{const s=Vn("threlte-renderer-context");if(!s)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return s},Uw=()=>{const s=Jt({});return Qn("threlte-user-context",s),s},Ow=()=>{const s=Vn("threlte-user-context");if(!s)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return s},Fw=s=>{const{scene:e}=Dw();return{scene:e,...bw(s),...fw(),...Ag(e),...Rw(e),...Cw(),...Tw(s),...Aw(),...Lw(s),...Uw()}};function Bw(s,e){hi(e,!0);let t=Wr(e,["$$slots","$$events","$$legacy","children"]);Fw(t);var n=Tt(),i=ht(n);ds(i,()=>e.children),lt(s,n),ui()}var kw=Pi('<div class="svelte-1osucwe"><canvas class="svelte-1osucwe"><!></canvas></div>');function OT(s,e){let t=Wr(e,["$$slots","$$events","$$legacy","children"]),n=Gi(void 0),i=Gi(void 0);var r=kw(),o=yd(r),a=yd(o);{var c=l=>{Bw(l,Io({get dom(){return le(i)},get canvas(){return le(n)}},()=>t,{children:(h,u)=>{var d=Tt(),f=ht(d);ds(f,()=>e.children??kr),lt(h,d)},$$slots:{default:!0}}))};In(a,l=>{le(n)&&le(i)&&l(c)})}bd(o),Md(o,l=>wi(n,l),()=>le(n)),bd(r),Md(r,l=>wi(i,l),()=>le(i)),lt(s,r)}const xs=()=>{const s=Bl(),e=Nw(),t=wg(),n=Rg(),i=Fl();return{advance:s.advance,autoRender:s.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:s.invalidate,mainStage:s.mainStage,renderer:e.renderer,renderMode:s.renderMode,renderStage:s.renderStage,scheduler:s.scheduler,shadows:e.shadows,shouldRender:s.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(o){n.scene=o}}},zw=s=>typeof s=="object"&&s!==null,Vw=()=>{const{invalidate:s}=xs();let e;const t=Dn(),n=Cg(),i=Iw(),r=Ag(),o=Pw();Pn([t,r,n,i],([l,h,u,d])=>{if(e==null||e(),e=void 0,!h){s();return}if(l!==void 0){if(l){if(typeof l=="function")e=l({ref:h,parent:u,parentObject3D:d});else if(ti(l,"Object3D")&&ti(h,"Object3D"))e=()=>l==null?void 0:l.remove(h),l==null||l.add(h);else if(typeof l=="string"){const{target:f,key:p}=Sg(u,l),_=f[p];e=()=>f[p]=_,f[p]=h}}}else ti(h,"Object3D")?(e=()=>d==null?void 0:d.remove(h),d==null||d.add(h)):zw(u)&&(ti(h,"Material")?u.material=h:ti(h,"BufferGeometry")&&(u.geometry=h));s()});const a=l=>{t.set(l)},c=l=>{r.set(l),ti(l,"Object3D")&&o.set(l)};return Ii(()=>{e==null||e(),s()}),{updateRef:c,updateAttach:a}},Hw=s=>ti(s,"PerspectiveCamera")||ti(s,"OrthographicCamera"),Gw=()=>{const{invalidate:s,size:e,camera:t}=xs(),n=Dn(),i=Dn(!0),r=Dn(!1);return Pn([n,r],([l,h])=>{!l||!h||(t.set(l),s())}),Pn([n,i,e],([l,h,u])=>{!l||h||(ti(l,"OrthographicCamera")?(l.left=u.width/-2,l.right=u.width/2,l.top=u.height/2,l.bottom=u.height/-2,l.updateProjectionMatrix(),l.updateMatrixWorld(),s()):ti(l,"PerspectiveCamera")&&(l.aspect=u.width/u.height,l.updateProjectionMatrix(),l.updateMatrixWorld(),s()))}),{updateRef:l=>{Hw(l)&&n.set(l)},updateManual:l=>{i.set(l)},updateMakeDefault:l=>{r.set(l)}}},Ww=s=>{let e,t,n=!1;const i=()=>{e==null||e(),e=s==null?void 0:s(t)},r=o=>{t=o,n&&i()};return fu(()=>{i(),n=!0}),Ii(()=>e==null?void 0:e()),{updateRef:r}},ip=Symbol("threlte-disposable-object-context"),Xw=s=>typeof(s==null?void 0:s.dispose)=="function"&&!ti(s,"Scene"),qw=s=>{let e;const t=Dn(void 0),n=Dn(s),{disposableObjectMounted:i,disposableObjectUnmounted:r,removeObjectFromDisposal:o}=Eg(),a=Vn(ip),c=tl([n,a??Dn(!0)],([u,d])=>u??d??!0);return Qn(ip,c),Pn([t,c],([u,d])=>{u===e?d?e&&i(e):e&&o(e):d&&(e&&r(e),u&&i(u)),e=u}),Ii(()=>{if(!Wh(c))return;const u=Wh(t);u&&r(u)}),{updateRef:u=>{Xw(u)&&t.set(u)},updateDispose:u=>{n.set(u)}}},Yw=s=>s!==null&&typeof s=="object"&&"addEventListener"in s&&"removeEventListener"in s,Zw=(s={})=>{const e=i=>{var r;i!=null&&i.type&&((r=s[`on${i.type}`])==null||r.call(s,i))},t=(i,r)=>{const o=[];for(const a of Object.keys(r))a.startsWith("on")&&(i.addEventListener(a.slice(2),e),o.push(a));return()=>{for(let a=0;a<o.length;a++)i.removeEventListener(o[a],e)}};return{updateRef:i=>{if(Yw(i))return t(i,s)}}};let au;const jw=s=>{au=s},Jw=()=>{const s=au;return au=void 0,s},Kw=s=>{const t=Vn("threlte-plugin-context");if(!t)return;const n=[],i=Object.values(t);if(i.length){const r=s();for(let o=0;o<i.length;o++){const a=i[o],c=a(r);c&&c.pluginProps&&n.push(...c.pluginProps)}}return{pluginsProps:n}},Qw=new Set(["$$scope","$$slots","type","args","attach","instance"]),$w=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),eE=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,sp=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(o,a,c)=>{o[a].setScalar(c)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(o,a,c)=>{o[a].set(...c)}:(o,a,c)=>{o[a].set(c)}:(o,a,c)=>{o[a]=c}},tE=()=>{const{invalidate:s}=xs(),e=new Map,t=new Map,n=(r,o,a,c)=>{if(eE(a)){const u=e.get(o);if(u&&u.instance===r&&u.value===a)return;e.set(o,{instance:r,value:a})}const{key:l,target:h}=Sg(r,o);if(a!=null){const u=t.get(o);if(u)u(h,l,a);else{const d=sp(h,l,a);t.set(o,d),d(h,l,a)}}else sp(h,l,a)(h,l,a);c.manualCamera||$w.has(l)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProp:(r,o,a,c)=>{var l;!Qw.has(o)&&!((l=c.pluginsProps)!=null&&l.includes(o))&&n(r,o,a,c),s()}}},nE=/^\s*class\s+/,iE=s=>typeof s!="function"?!1:nE.test(s.toString()),sE=s=>Array.isArray(s),rE=(s,e)=>iE(s)?sE(e)?new s(...e):new s:s;function Oh(s,e){hi(e,!0);let t=Ke(e,"is",19,Jw),n=Ke(e,"manual",3,!1),i=Ke(e,"makeDefault",3,!1),r=Ke(e,"ref",15),o=Wr(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]),a=_t(()=>rE(t(),e.args));const c=Ww(e.oncreate);an(()=>{r()!==le(a)&&(r(le(a)),c.updateRef(le(a)))});const l=Kw(()=>({get ref(){return le(a)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return o}})),{updateProp:h}=tE();Object.keys(o).forEach(m=>{an(()=>{h(le(a),m,o[m],{manualCamera:n(),pluginsProps:l==null?void 0:l.pluginsProps})})});const u=Vw();an(()=>u.updateAttach(e.attach)),an(()=>u.updateRef(le(a)));const d=Gw();an(()=>d.updateRef(le(a))),an(()=>d.updateManual(n())),an(()=>d.updateMakeDefault(i()));const f=qw(e.dispose);an(()=>f.updateRef(le(a))),an(()=>f.updateDispose(e.dispose));const p=Zw(o);an(()=>p.updateRef(le(a)));var _=Tt(),g=ht(_);ds(g,()=>e.children??kr,()=>({ref:le(a)})),lt(s,_),ui()}const oE={},Vt=new Proxy(function(){},{apply(s,e,t){return Oh(...t)},get(s,e){if(typeof e!="string")return Oh;const t=oE[e]||dw[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return jw(t),Oh}});function aE(s,e){const t="threlte-plugin-context";e&&Qn(t,{...Vn(t),[s]:e})}function cE(s,e,t){const n=Ow();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>{if(s in i)return i;const r=typeof e=="function"?e():e;return i[s]=r,i}),n.current[s]):tl(n,i=>i[s])}function Pg(s,e){const{remember:t,clear:n}=pw();let i;const r=()=>new s;return{load:(c,l)=>{const h=async u=>{var d;if(i||(i=r()),"loadAsync"in i){const f=await i.loadAsync(u,l==null?void 0:l.onProgress);return((d=l==null?void 0:l.transform)==null?void 0:d.call(l,f))??f}else return new Promise((f,p)=>{i.load(u,_=>{var g;return f(((g=l==null?void 0:l.transform)==null?void 0:g.call(l,_))??_)},_=>{var g;return(g=l==null?void 0:l.onProgress)==null?void 0:g.call(l,_)},p)})};if(Array.isArray(c)){const u=c.map(f=>t(()=>h(f),[s,f]));return Uh(Promise.all(u))}else if(typeof c=="string"){const u=t(()=>h(c),[s,c]);return Uh(u)}else{const u=Object.values(c).map(f=>t(()=>h(f),[s,f]));return Uh(Promise.all(u).then(f=>Object.fromEntries(Object.entries(c).map(([p],_)=>[p,f[_]]))))}},clear:c=>{Array.isArray(c)?c.forEach(l=>{n([s,l])}):typeof c=="string"?n([s,c]):Object.entries(c).forEach(([l,h])=>{n([s,l,h])})},loader:i}}const Ns=s=>({subscribe:s.subscribe,get current(){return s.current}});let Po=0;const cd=Jt(!1),kl=Jt(!1),ld=Jt(void 0),hd=Jt(0),ud=Jt(0),Ig=Jt([]),dd=Jt(0),{onStart:Fh,onLoad:Bh,onError:kh}=cr;cr.onStart=(s,e,t)=>{Fh==null||Fh(s,e,t),kl.set(!0),ld.set(s),hd.set(e),ud.set(t);const n=(e-Po)/(t-Po);dd.set(n),n===1&&cd.set(!0)};cr.onLoad=()=>{Bh==null||Bh(),kl.set(!1)};cr.onError=s=>{kh==null||kh(s),Ig.update(e=>[...e,s])};cr.onProgress=(s,e,t)=>{e===t&&(Po=t),kl.set(!0),ld.set(s),hd.set(e),ud.set(t);const n=(e-Po)/(t-Po)||1;dd.set(n),n===1&&cd.set(!0)};Ns(kl),Ns(ld),Ns(hd),Ns(ud),Ns(Ig),Ns(dd),Ns(cd);new C;new C;new C;new vn;new We;new ms;new C;new C;new C;new C;new se;new _n;new C;Ee.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new se(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};oi.line={uniforms:Iu.merge([Ee.common,Ee.fog,Ee.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new C;new C;new bt;new bt;new bt;new C;new We;new dg;new C;new _n;new vn;new bt;const rp={type:"change"},fd={type:"start"},Dg={type:"end"},tc=new ms,op=new Hi,lE=Math.cos(70*ks.DEG2RAD),un=new C,qn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zh=1e-6;let hE=class extends od{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Bt,this._lastTargetPosition=new C,this._quat=new Bt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new iu,this._sphericalDelta=new iu,this._scale=1,this._panOffset=new C,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new C,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dE.bind(this),this._onPointerDown=uE.bind(this),this._onPointerUp=fE.bind(this),this._onContextMenu=yE.bind(this),this._onMouseWheel=gE.bind(this),this._onKeyDown=_E.bind(this),this._onTouchStart=vE.bind(this),this._onTouchMove=xE.bind(this),this._onMouseDown=pE.bind(this),this._onMouseMove=mE.bind(this),this._interceptControlDown=bE.bind(this),this._interceptControlUp=ME.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rp),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=qn:n>Math.PI&&(n-=qn),i<-Math.PI?i+=qn:i>Math.PI&&(i-=qn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=un.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(tc.origin.copy(this.object.position),tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tc.direction))<lE?this.object.lookAt(this.target):(op.setFromNormalAndCoplanarPoint(this.object.up,this.target),tc.intersectPlane(op,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zh||this._lastTargetPosition.distanceToSquared(this.target)>zh?(this.dispatchEvent(rp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;un.copy(i).sub(this.target);let r=un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function uE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function dE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function fE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dg),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ft.DOLLY;break;case qs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}break;case qs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(fd)}function mE(s){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function gE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(s.preventDefault(),this.dispatchEvent(fd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Dg))}function _E(s){this.enabled!==!1&&this._handleKeyDown(s)}function vE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ft.TOUCH_ROTATE;break;case Vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case Vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ft.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(fd)}function xE(s){switch(this._trackPointer(s),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ft.NONE}}function yE(s){this.enabled!==!1&&s.preventDefault()}function bE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ME(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const SE={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

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

		}`},wE={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

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

		}`};var EE=Pi("<!> <!> <!>",1);function TE(s,e){hi(e,!0);let t=Ke(e,"opacity",3,1),n=Ke(e,"width",3,1),i=Ke(e,"height",3,1),r=Ke(e,"blur",3,1),o=Ke(e,"far",3,10),a=Ke(e,"smooth",3,!0),c=Ke(e,"resolution",3,512),l=Ke(e,"frames",3,1/0),h=Ke(e,"scale",3,10),u=Ke(e,"color",3,"#000000"),d=Ke(e,"depthWrite",3,!1),f=Ke(e,"ref",15),p=Wr(e,["$$slots","$$events","$$legacy","opacity","width","height","blur","far","smooth","resolution","frames","scale","color","depthWrite","ref","children"]);const{scene:_,renderer:g}=xs(),m=new Ei,y=_t(()=>n()*(Array.isArray(h())?h()[0]:h()||1)),x=_t(()=>i()*(Array.isArray(h())?h()[1]:h()||1)),v=_t(()=>{const j=new li(c(),c());return j.texture.generateMipmaps=!1,j.texture.colorSpace=g.outputColorSpace,j}),N=_t(()=>{const j=new li(c(),c());return j.texture.generateMipmaps=!1,j}),E=_t(()=>new _s(le(y),le(x)).rotateX(Math.PI/2)),I=_t(()=>new Se(le(E))),L=_t(()=>{const j=new Nl({depthTest:!1,depthWrite:!1});return j.onBeforeCompile=ce=>{ce.uniforms={...ce.uniforms,uColor:{value:new Te(u()).convertSRGBToLinear()}},ce.fragmentShader=`uniform vec3 uColor;
${ce.fragmentShader}`,ce.fragmentShader=ce.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),ce.fragmentShader=ce.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},j}),w=new si({...SE,depthTest:!1}),S=new si({...wE,depthTest:!1}),F=_t(()=>new lr(-le(y)/2,le(y)/2,le(x)/2,-le(x)/2,0,o()));an(()=>le(F).updateProjectionMatrix());const k=_t(()=>new ii({map:le(v).texture,transparent:!0,opacity:t(),depthWrite:d()})),H=j=>{le(I).visible=!0,le(I).material=w,w.uniforms.tDiffuse.value=le(v).texture,w.uniforms.h.value=j*1/256,g.setRenderTarget(le(N)),g.render(le(I),le(F)),le(I).material=S,S.uniforms.tDiffuse.value=le(N).texture,S.uniforms.v.value=j*1/256,g.setRenderTarget(le(v)),g.render(le(I),le(F)),le(I).visible=!1},W=()=>{const j=_.background;_.background=null;const ce=_.overrideMaterial;_.overrideMaterial=le(L);const ue=g.getClearAlpha();g.setClearAlpha(0),g.setRenderTarget(le(v)),g.render(_,le(F)),_.overrideMaterial=ce,H(r()),a()&&H(r()*.4),g.setRenderTarget(null),_.background=j,g.setClearAlpha(ue)},K=()=>{W()},B=el(()=>{W()},{autoStart:!1});let $=0;const V=el(()=>{W(),$+=1,$>=l()&&V.stop()},{autoStart:!1});return an(()=>{l()===Number.POSITIVE_INFINITY?B.start():$<l()&&V.start()}),Ii(()=>{le(v).dispose(),le(N).dispose(),le(E).dispose(),le(L).dispose(),w.dispose(),S.dispose(),le(k).dispose()}),Vt(s,Io({is:m},()=>p,{get ref(){return f()},set ref(j){f(j)},children:(j,ce)=>{var ue=Tt(),Me=ht(ue);en(Me,()=>Vt.Group,(xe,q)=>{q(xe,{"rotation.x":Math.PI/2,children:(ee,ne)=>{var te=EE(),ye=ht(te);en(ye,()=>Vt.Mesh,(wt,pe)=>{pe(wt,{"scale.y":-1,"rotation.x":-Math.PI/2,get material(){return le(k)},get geometry(){return le(E)}})});var tt=ci(ye,2);Vt(tt,{get is(){return le(F)},manual:!0});var ke=ci(tt,2);ds(ke,()=>e.children??kr,()=>({ref:m})),lt(ee,te)},$$slots:{default:!0}})}),lt(j,ue)},$$slots:{default:!0}})),ui({refresh:K})}const Us=new sd,Rn=new C,cs=new C,Xt=new Bt,ap={X:new C(1,0,0),Y:new C(0,1,0),Z:new C(0,0,1)},Vh={type:"change"},cp={type:"mouseDown",mode:null},lp={type:"mouseUp",mode:null},hp={type:"objectChange"};class AE extends od{constructor(e,t=null){super(void 0,t);const n=new LE(this);this._root=n;const i=new NE;this._gizmo=i,n.add(i);const r=new UE;this._plane=r,n.add(r);const o=this;function a(x,v){let N=v;Object.defineProperty(o,x,{get:function(){return N!==void 0?N:v},set:function(E){N!==E&&(N=E,r[x]=E,i[x]=E,o.dispatchEvent({type:x+"-changed",value:E}),o.dispatchEvent(Vh))}}),o[x]=v,r[x]=v,i[x]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new C,l=new C,h=new Bt,u=new Bt,d=new C,f=new Bt,p=new C,_=new C,g=new C,m=0,y=new C;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",p),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",m),a("eye",y),this._offset=new C,this._startNorm=new C,this._endNorm=new C,this._cameraScale=new C,this._parentPosition=new C,this._parentQuaternion=new Bt,this._parentQuaternionInv=new Bt,this._parentScale=new C,this._worldScaleStart=new C,this._worldQuaternionInv=new Bt,this._worldScale=new C,this._positionStart=new C,this._quaternionStart=new Bt,this._scaleStart=new C,this._getPointer=CE.bind(this),this._onPointerDown=PE.bind(this),this._onPointerHover=RE.bind(this),this._onPointerMove=IE.bind(this),this._onPointerUp=DE.bind(this),t!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Us.setFromCamera(e,this.camera);const t=Hh(this._gizmo.picker[this.mode],Us);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Us.setFromCamera(e,this.camera);const t=Hh(this._plane,Us,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,cp.mode=this.mode,this.dispatchEvent(cp)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),i===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Us.setFromCamera(e,this.camera);const o=Hh(this._plane,Us,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(Xt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(Rn.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Rn.setFromMatrixPosition(i.parent.matrixWorld)))),i.position.x=Math.max(this.minX,Math.min(this.maxX,i.position.x)),i.position.y=Math.max(this.minY,Math.min(this.maxY,i.position.y)),i.position.z=Math.max(this.minZ,Math.min(this.maxZ,i.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),cs.set(a,a,a)}else Rn.copy(this.pointStart),cs.copy(this.pointEnd),Rn.applyQuaternion(this._worldQuaternionInv),cs.applyQuaternion(this._worldQuaternionInv),cs.divide(Rn),t.search("X")===-1&&(cs.x=1),t.search("Y")===-1&&(cs.y=1),t.search("Z")===-1&&(cs.z=1);i.scale.copy(this._scaleStart).multiply(cs),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Rn.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Rn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(ap[t]),Rn.copy(ap[t]),r==="local"&&Rn.applyQuaternion(this.worldQuaternion),Rn.cross(this.eye),Rn.length()===0?c=!0:this.rotationAngle=this._offset.dot(Rn.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(Xt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(Xt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Vh),this.dispatchEvent(hp)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(lp.mode=this.mode,this.dispatchEvent(lp)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Vh),this.dispatchEvent(hp),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Us}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function CE(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function RE(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function PE(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function IE(s){this.enabled&&this.pointerMove(this._getPointer(s))}function DE(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Hh(s,e,t){const n=e.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const nc=new Kn,zt=new C(0,1,0),up=new C(0,0,0),dp=new We,ic=new Bt,hc=new Bt,Mi=new C,fp=new We,go=new C(1,0,0),Bs=new C(0,1,0),_o=new C(0,0,1),sc=new C,uo=new C,fo=new C;class LE extends St{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class NE extends St{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ii({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new xn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const r=e.clone();r.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const u=e.clone();u.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const p=e.clone();p.color.setHex(7895160);const _=new on(0,.04,.1,12);_.translate(0,.05,0);const g=new $t(.08,.08,.08);g.translate(0,.04,0);const m=new ct;m.setAttribute("position",new Pe([0,0,0,1,0,0],3));const y=new on(.0075,.0075,.5,3);y.translate(0,.25,0);function x(K,B){const $=new qi(K,.0075,3,64,B*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function v(){const K=new ct;return K.setAttribute("position",new Pe([0,0,0,1,1,1],3)),K}const N={X:[[new Se(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new Se(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new Se(y,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Se(_,o),[0,.5,0]],[new Se(_,o),[0,-.5,0],[Math.PI,0,0]],[new Se(y,o)]],Z:[[new Se(_,a),[0,0,.5],[Math.PI/2,0,0]],[new Se(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Se(y,a),null,[Math.PI/2,0,0]]],XYZ:[[new Se(new Zi(.1,0),u.clone()),[0,0,0]]],XY:[[new Se(new $t(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new Se(new $t(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Se(new $t(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new Se(new on(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Se(new on(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Se(new on(.2,0,.6,4),n),[0,.3,0]],[new Se(new on(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Se(new on(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Se(new on(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Se(new Zi(.2,0),n)]],XY:[[new Se(new $t(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Se(new $t(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Se(new $t(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},I={START:[[new Se(new Zi(.01,2),i),null,null,null,"helper"]],END:[[new Se(new Zi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Mn(v(),i),null,null,null,"helper"]],X:[[new Mn(m,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Mn(m,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Mn(m,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},L={XYZE:[[new Se(x(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new Se(x(.5,.5),r)]],Y:[[new Se(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Se(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Se(x(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new Mn(m,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new Se(new Yr(.25,10,8),n)]],X:[[new Se(new qi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Se(new qi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Se(new qi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Se(new qi(.75,.1,2,24),n)]]},F={X:[[new Se(g,r),[.5,0,0],[0,0,-Math.PI/2]],[new Se(y,r),[0,0,0],[0,0,-Math.PI/2]],[new Se(g,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Se(g,o),[0,.5,0]],[new Se(y,o)],[new Se(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Se(g,a),[0,0,.5],[Math.PI/2,0,0]],[new Se(y,a),[0,0,0],[Math.PI/2,0,0]],[new Se(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Se(new $t(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new Se(new $t(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Se(new $t(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Se(new $t(.1,.1,.1),u.clone())]]},k={X:[[new Se(new on(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Se(new on(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Se(new on(.2,0,.6,4),n),[0,.3,0]],[new Se(new on(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Se(new on(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Se(new on(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Se(new $t(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Se(new $t(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Se(new $t(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Se(new $t(.2,.2,.2),n),[0,0,0]]]},H={X:[[new Mn(m,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Mn(m,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Mn(m,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function W(K){const B=new St;for(const $ in K)for(let V=K[$].length;V--;){const j=K[$][V][0].clone(),ce=K[$][V][1],ue=K[$][V][2],Me=K[$][V][3],xe=K[$][V][4];j.name=$,j.tag=xe,ce&&j.position.set(ce[0],ce[1],ce[2]),ue&&j.rotation.set(ue[0],ue[1],ue[2]),Me&&j.scale.set(Me[0],Me[1],Me[2]),j.updateMatrix();const q=j.geometry.clone();q.applyMatrix4(j.matrix),j.geometry=q,j.renderOrder=1/0,j.position.set(0,0,0),j.rotation.set(0,0,0),j.scale.set(1,1,1),B.add(j)}return B}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=W(N)),this.add(this.gizmo.rotate=W(L)),this.add(this.gizmo.scale=W(F)),this.add(this.picker.translate=W(E)),this.add(this.picker.rotate=W(S)),this.add(this.picker.scale=W(k)),this.add(this.helper.translate=W(I)),this.add(this.helper.rotate=W(w)),this.add(this.helper.scale=W(H)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:hc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){const o=i[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Xt.setFromEuler(nc.set(0,0,0)),o.quaternion.copy(n).multiply(Xt),Math.abs(zt.copy(go).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Xt.setFromEuler(nc.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Xt),Math.abs(zt.copy(Bs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Xt.setFromEuler(nc.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Xt),Math.abs(zt.copy(_o).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Xt.setFromEuler(nc.set(0,Math.PI/2,0)),zt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(dp.lookAt(up,zt,Bs)),o.quaternion.multiply(Xt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Rn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Rn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Rn),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(zt.copy(go).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(zt.copy(Bs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(zt.copy(_o).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(zt.copy(_o).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(zt.copy(go).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(zt.copy(Bs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(ic.copy(n),zt.copy(this.eye).applyQuaternion(Xt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(dp.lookAt(this.eye,up,Bs)),o.name==="X"&&(Xt.setFromAxisAngle(go,Math.atan2(-zt.y,zt.z)),Xt.multiplyQuaternions(ic,Xt),o.quaternion.copy(Xt)),o.name==="Y"&&(Xt.setFromAxisAngle(Bs,Math.atan2(zt.x,zt.z)),Xt.multiplyQuaternions(ic,Xt),o.quaternion.copy(Xt)),o.name==="Z"&&(Xt.setFromAxisAngle(_o,Math.atan2(zt.y,zt.x)),Xt.multiplyQuaternions(ic,Xt),o.quaternion.copy(Xt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class UE extends Se{constructor(){super(new _s(1e5,1e5,2,2),new ii({visible:!1,wireframe:!0,side:ai,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),sc.copy(go).applyQuaternion(t==="local"?this.worldQuaternion:hc),uo.copy(Bs).applyQuaternion(t==="local"?this.worldQuaternion:hc),fo.copy(_o).applyQuaternion(t==="local"?this.worldQuaternion:hc),zt.copy(uo),this.mode){case"translate":case"scale":switch(this.axis){case"X":zt.copy(this.eye).cross(sc),Mi.copy(sc).cross(zt);break;case"Y":zt.copy(this.eye).cross(uo),Mi.copy(uo).cross(zt);break;case"Z":zt.copy(this.eye).cross(fo),Mi.copy(fo).cross(zt);break;case"XY":Mi.copy(fo);break;case"YZ":Mi.copy(sc);break;case"XZ":zt.copy(fo),Mi.copy(uo);break;case"XYZ":case"E":Mi.set(0,0,0);break}break;case"rotate":default:Mi.set(0,0,0)}Mi.length()===0?this.quaternion.copy(this.cameraQuaternion):(fp.lookAt(Rn.set(0,0,0),Mi,zt),this.quaternion.setFromRotationMatrix(fp)),super.updateMatrixWorld(e)}}const Lg=()=>cE("threlte-controls",{orbitControls:Dn(void 0),trackballControls:Dn(void 0)});var OE=Pi("<!> <!>",1);function FE(s,e){hi(e,!0);const[t,n]=uu(),i=()=>du(h,"$camera",t);let r=Ke(e,"autoPauseOrbitControls",3,!0),o=Ke(e,"autoPauseTrackballControls",3,!0),a=Ke(e,"controls",15),c=Ke(e,"group",15),l=Wr(e,["$$slots","$$events","$$legacy","autoPauseOrbitControls","autoPauseTrackballControls","object","controls","group","children"]);const{camera:h,dom:u,invalidate:d,scene:f}=xs(),{orbitControls:p,trackballControls:_}=Lg(),g=Jt(!1),m=Dn(r()??!0);an(()=>m.set(r()??!0));const y=Dn(o()??!0);an(()=>y.set(o()??!0)),Pn([p,g,m],([k,H,W])=>{if(!(!k||!k.enabled&&H))return k.enabled=!(H&&W),()=>{k.enabled=!0}}),Pn([_,g,y],([k,H,W])=>{if(!(!k||!k.enabled&&H))return k.enabled=!(H&&W),()=>{k.enabled=!0}});const x=new Ei;let v=_t(()=>new AE(i(),u));an(()=>{var k;return(k=le(v))==null||k.attach(e.object??x),()=>{var H;return(H=le(v))==null?void 0:H.detach()}});const N=["enabled","axis","mode","translationSnap","rotationSnap","scaleSnap","space","size","showX","showY","showZ","visible","onmouseDown","onmouseUp","onobjectChange"];let E=Gi(Fn({})),I=Gi(Fn({}));an(()=>{wi(E,Fn({})),wi(I,Fn({})),Object.keys(l).forEach(k=>{an(()=>{N.includes(k)?le(E)[k]=l[k]:le(I)[k]=l[k]})})});const L=k=>{var H;d(),le(v).dragging&&!g.current?g.set(!0):!le(v).dragging&&g.current&&g.set(!1),(H=e.onchange)==null||H.call(e,k)};var w=OE(),S=ht(w);Vt(S,Io({get is(){return le(v)},onchange:L},()=>le(E),{attach:({ref:k})=>{const H=k.getHelper();return f.add(H),()=>{f.remove(H)}},dispose:!1,oncreate:k=>()=>k.dispose(),get ref(){return a()},set ref(k){a(k)}}));var F=ci(S,2);Vt(F,Io({is:x},()=>le(I),{get ref(){return c()},set ref(k){c(k)},children:(k,H)=>{var W=Tt(),K=ht(W);{var B=$=>{var V=Tt(),j=ht(V);ds(j,()=>e.children,()=>({ref:x})),lt($,V)};In(K,$=>{e.children&&$(B)})}lt(k,W)},$$slots:{default:!0}})),lt(s,w),ui(),n()}function BT(s,e){hi(e,!0);const[t,n]=uu(),i=()=>du(a,"$parent",t);let r=Ke(e,"ref",15),o=Wr(e,["$$slots","$$events","$$legacy","ref","children"]);const a=Cg(),{dom:c,invalidate:l}=xs();if(!ti(i(),"Camera"))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const h=new hE(i(),c),{orbitControls:u}=Lg(),{start:d,stop:f}=el(()=>{h.update()},{autoStart:!1,autoInvalidate:!1});an(()=>{e.autoRotate||e.enableDamping?d():f()}),an(()=>{const p=_=>{var g;l(),(g=e.onchange)==null||g.call(e,_)};return u.set(h),h.addEventListener("change",p),()=>{u.set(void 0),h.removeEventListener("change",p)}}),Vt(s,Io({is:h},()=>o,{get ref(){return r()},set ref(p){r(p)},children:(p,_)=>{var g=Tt(),m=ht(g);ds(m,()=>e.children??kr,()=>({ref:h})),lt(p,g)},$$slots:{default:!0}})),ui(),n()}new We;new We;new Se;`${nt.logdepthbuf_pars_vertex}${nt.fog_pars_vertex}${nt.logdepthbuf_vertex}${nt.fog_vertex}`;`${nt.tonemapping_fragment}${nt.colorspace_fragment}`;`${nt.tonemapping_fragment}${nt.colorspace_fragment}`;const BE=`

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
`,kE=`

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
`,zE=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,VE=zE,HE=`
	${BE}
	${kE}
`;`${VE}${HE}${nt.tonemapping_fragment}${nt.colorspace_fragment}`;new _n;new Te;typeof window<"u"&&document.createElement("div");const GE=s=>{const{camera:e}=xs();let t=s.current.clientWidth,n=s.current.clientHeight;const i=new ResizeObserver(([r])=>{t=r.contentRect.width,n=r.contentRect.height});return Pn(s,r=>(r&&i.observe(r),()=>{r&&i.unobserve(r)})),(r,o)=>{o.pointer.update(a=>(a.set(r.offsetX/t*2-1,-(r.offsetY/n)*2+1),a)),o.raycaster.setFromCamera(o.pointer.current,e.current)}},Ng=Symbol("interactivity-context"),WE=()=>Vn(Ng),XE=s=>{const e=Jt(Fl().dom),t={enabled:Jt(!0),pointer:Jt(new se),pointerOverTarget:Jt(!1),lastEvent:void 0,raycaster:new sd,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:e,handlers:new WeakMap,compute:GE(e),filter:s==null?void 0:s.filter,addInteractiveObject:(n,i)=>{t.interactiveObjects.indexOf(n)>-1||(t.handlers.set(n,i),t.interactiveObjects.push(n))},removeInteractiveObject:n=>{const i=t.interactiveObjects.indexOf(n);t.interactiveObjects.splice(i,1),t.handlers.delete(n)}};return Qn(Ng,t),t},Ug=()=>{const s=WE();if(!s)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");return s},pp=["onclick","oncontextmenu","ondblclick","onwheel","onpointerup","onpointerdown","onpointerover","onpointerout","onpointerenter","onpointerleave","onpointermove","onpointermissed"],qE=()=>{aE("interactivity",s=>{if(!ti(s.ref,"Object3D")||!Object.entries(s.props).some(([i,r])=>r!==void 0&&pp.includes(i)))return;const{addInteractiveObject:t,removeInteractiveObject:n}=Ug();return vw.pre(()=>[s.ref],([i])=>(t(i,s.props),()=>{n(i)})),{pluginProps:pp}})};function mp(s){return`${(s.eventObject||s.object).uuid}/${s.index}${s.instanceId}`}const gp=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],YE=s=>{const{handlers:e}=Ug(),t=l=>{const h=l.offsetX-s.initialClick[0],u=l.offsetY-s.initialClick[1];return Math.round(Math.hypot(h,u))},n=l=>{var h,u;for(const d of s.hovered.values())if(l.length===0||!l.some(f=>f.object===d.object&&f.index===d.index&&f.instanceId===d.instanceId)){const{eventObject:f}=d;s.hovered.delete(mp(d));const p=e.get(f);if(p){const _={...d,intersections:l};(h=p.onpointerout)==null||h.call(p,_),(u=p.onpointerleave)==null||u.call(p,_)}}},i=()=>{if(!s.enabled.current)return[];const l=[],h=s.raycaster.intersectObjects(s.interactiveObjects,!0),u=s.filter===void 0?h:s.filter(h,s);for(const d of u){let f=d.object;for(;f;)e.has(f)&&l.push({...d,eventObject:f}),f=f.parent}return l},r=(l,h)=>{var u,d;for(const f of h)(d=(u=e.get(f))==null?void 0:u.onpointermissed)==null||d.call(u,l)},o=l=>l==="pointerleave"||l==="pointercancel"?()=>{s.pointerOverTarget.set(!1),n([])}:l==="pointerenter"?()=>{s.pointerOverTarget.set(!0)}:h=>{var g,m,y,x;const u=l==="pointermove",d=l==="click"||l==="contextmenu"||l==="dblclick";s.compute(h,s);const f=i(),p=d?t(h):0;l==="pointerdown"&&(s.initialClick=[h.offsetX,h.offsetY],s.initialHits=f.map(v=>v.eventObject)),d&&f.length===0&&p<=2&&r(h,s.interactiveObjects),u&&n(f);let _=!1;e:for(const v of f){const N={stopped:_,...v,intersections:f,stopPropagation(){if(_=!0,N.stopped=!0,s.hovered.size>0&&Array.from(s.hovered.values()).some(I=>I.eventObject===v.eventObject)){const I=f.slice(0,f.indexOf(v));n([...I,v])}},camera:s.raycaster.camera,delta:p,nativeEvent:h,pointer:s.pointer.current,ray:s.raycaster.ray},E=e.get(v.eventObject);if(!E)return;if(u){if(E.onpointerover||E.onpointerenter||E.onpointerout||E.onpointerleave){const I=mp(N),L=s.hovered.get(I);L?L.stopped&&N.stopPropagation():(s.hovered.set(I,N),(g=E.onpointerover)==null||g.call(E,N),(m=E.onpointerenter)==null||m.call(E,N))}(y=E.onpointermove)==null||y.call(E,N)}else E[`on${l}`]?(!d||s.initialHits.includes(v.eventObject))&&(r(h,s.interactiveObjects.filter(I=>!s.initialHits.includes(I))),(x=E[`on${l}`])==null||x.call(E,N)):d&&s.initialHits.includes(v.eventObject)&&r(h,s.interactiveObjects.filter(I=>!s.initialHits.includes(I)));if(_)break e}},a=l=>{gp.forEach(([h])=>{l.removeEventListener(h,o(h))})},c=l=>{gp.forEach(([h,u])=>{l.addEventListener(h,o(h),{passive:u})})};Pn(s.target,l=>(l&&c(l),()=>{l&&a(l)}))},Og=s=>{const e=XE(s);return qE(),YE(e),e};for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);new lr(-1,1,1,-1,0,1);class ZE extends ct{constructor(){super(),this.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pe([0,2,0,0,2,0],2))}}new ZE;var Fg={exports:{}};Fg.exports=zl;Fg.exports.default=zl;function zl(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=Bg(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,h,u,d,f;if(n&&(r=$E(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(var p=t;p<i;p+=t)u=s[p],d=s[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Yo(r,o,t,a,c,f,0),o}function Bg(s,e,t,n,i){var r,o;if(i===hu(s,e,t,n)>0)for(r=e;r<t;r+=n)o=_p(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=_p(r,s[r],s[r+1],o);return o&&Vl(o,o.next)&&(jo(o),o=o.next),o}function rr(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Vl(t,t.next)||Kt(t.prev,t,t.next)===0)){if(jo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yo(s,e,t,n,i,r,o){if(s){!o&&r&&sT(s,n,i,r);for(var a=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?JE(s,n,i,r):jE(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),jo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=KE(rr(s),e,t),Yo(s,e,t,n,i,r,2)):o===2&&QE(s,e,t,n,i,r):Yo(rr(s),e,t,n,i,r,1);break}}}}function jE(s){var e=s.prev,t=s,n=s.next;if(Kt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Fr(i,a,r,c,o,l,p.x,p.y)&&Kt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function JE(s,e,t,n){var i=s.prev,r=s,o=s.next;if(Kt(i,r,o)>=0)return!1;for(var a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,p=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,m=cu(f,p,e,t,n),y=cu(_,g,e,t,n),x=s.prevZ,v=s.nextZ;x&&x.z>=m&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Fr(a,h,c,u,l,d,x.x,x.y)&&Kt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Fr(a,h,c,u,l,d,v.x,v.y)&&Kt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Fr(a,h,c,u,l,d,x.x,x.y)&&Kt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Fr(a,h,c,u,l,d,v.x,v.y)&&Kt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function KE(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Vl(i,r)&&kg(i,n,n.next,r)&&Zo(i,r)&&Zo(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),jo(n),jo(n.next),n=s=r),n=n.next}while(n!==s);return rr(n)}function QE(s,e,t,n,i,r){var o=s;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&aT(o,a)){var c=zg(o,a);o=rr(o,o.next),c=rr(c,c.next),Yo(o,e,t,n,i,r,0),Yo(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function $E(s,e,t,n){var i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Bg(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(oT(l));for(i.sort(eT),r=0;r<i.length;r++)t=tT(i[r],t);return t}function eT(s,e){return s.x-e.x}function tT(s,e){var t=nT(s,e);if(!t)return e;var n=zg(t,s);return rr(n,n.next),rr(t,t.next)}function nT(s,e){var t=e,n=s.x,i=s.y,r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>r&&(r=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,h=o.y,u=1/0,d;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Fr(i<h?n:r,i,l,h,i<h?r:n,i,t.x,t.y)&&(d=Math.abs(i-t.y)/(n-t.x),Zo(t,s)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&iT(o,t)))&&(o=t,u=d)),t=t.next;while(t!==c);return o}function iT(s,e){return Kt(s.prev,s,e.prev)<0&&Kt(e.next,s,s.next)<0}function sT(s,e,t,n){var i=s;do i.z===0&&(i.z=cu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rT(i)}function rT(s){var e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function cu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function oT(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Fr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function aT(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!cT(s,e)&&(Zo(s,e)&&Zo(e,s)&&lT(s,e)&&(Kt(s.prev,s,e.prev)||Kt(s,e.prev,e))||Vl(s,e)&&Kt(s.prev,s,s.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Vl(s,e){return s.x===e.x&&s.y===e.y}function kg(s,e,t,n){var i=oc(Kt(s,e,t)),r=oc(Kt(s,e,n)),o=oc(Kt(t,n,s)),a=oc(Kt(t,n,e));return!!(i!==r&&o!==a||i===0&&rc(s,t,e)||r===0&&rc(s,n,e)||o===0&&rc(t,s,n)||a===0&&rc(t,e,n))}function rc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function oc(s){return s>0?1:s<0?-1:0}function cT(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&kg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Zo(s,e){return Kt(s.prev,s,s.next)<0?Kt(s,e,s.next)>=0&&Kt(s,s.prev,e)>=0:Kt(s,e,s.prev)<0||Kt(s,s.next,e)<0}function lT(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function zg(s,e){var t=new lu(s.i,s.x,s.y),n=new lu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function _p(s,e,t,n){var i=new lu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function jo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function lu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}zl.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,o=Math.abs(hu(s,0,r,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,h=a<c-1?e[a+1]*t:s.length;o-=Math.abs(hu(s,l,h,t))}var u=0;for(a=0;a<n.length;a+=3){var d=n[a]*t,f=n[a+1]*t,p=n[a+2]*t;u+=Math.abs((s[d]-s[p])*(s[f+1]-s[d+1])-(s[d]-s[f])*(s[p+1]-s[d+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function hu(s,e,t,n){for(var i=0,r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}zl.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var o=0;o<e;o++)t.vertices.push(s[i][r][o]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new se;new se;var vp;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let a=0;a<i.length;a++){const c=i[a];for(;r.length>=2;){const l=r[r.length-1],h=r[r.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))r.pop();else break}r.push(c)}r.pop();let o=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],h=o[o.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))o.pop();else break}o.push(c)}return o.pop(),r.length==1&&o.length==1&&r[0].x==o[0].x&&r[0].y==o[0].y?r:r.concat(o)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(vp||(vp={}));class xp extends $m{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case d:case _:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case p:case g:case m:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function n(B,$,V,j,ce){let ue,Me;const xe=V.pixel_size>>3,q=V.width*V.height*xe;if($&&(Me=ce.subarray(j,j+=V.colormap_length*(V.colormap_size>>3))),B){ue=new Uint8Array(q);let ee,ne,te,ye=0;const tt=new Uint8Array(xe);for(;ye<q;)if(ee=ce[j++],ne=(ee&127)+1,ee&128){for(te=0;te<xe;++te)tt[te]=ce[j++];for(te=0;te<ne;++te)ue.set(tt,ye+te*xe);ye+=xe*ne}else{for(ne*=xe,te=0;te<ne;++te)ue[ye+te]=ce[j++];ye+=ne}}else ue=ce.subarray(j,j+=$?V.width*V.height:q);return{pixel_data:ue,palettes:Me}}function i(B,$,V,j,ce,ue,Me,xe,q){const ee=q;let ne,te=0,ye,tt;const ke=S.width;for(tt=$;tt!==j;tt+=V)for(ye=ce;ye!==Me;ye+=ue,te++)ne=xe[te],B[(ye+ke*tt)*4+3]=255,B[(ye+ke*tt)*4+2]=ee[ne*3+0],B[(ye+ke*tt)*4+1]=ee[ne*3+1],B[(ye+ke*tt)*4+0]=ee[ne*3+2];return B}function r(B,$,V,j,ce,ue,Me,xe){let q,ee=0,ne,te;const ye=S.width;for(te=$;te!==j;te+=V)for(ne=ce;ne!==Me;ne+=ue,ee+=2)q=xe[ee+0]+(xe[ee+1]<<8),B[(ne+ye*te)*4+0]=(q&31744)>>7,B[(ne+ye*te)*4+1]=(q&992)>>2,B[(ne+ye*te)*4+2]=(q&31)<<3,B[(ne+ye*te)*4+3]=q&32768?0:255;return B}function o(B,$,V,j,ce,ue,Me,xe){let q=0,ee,ne;const te=S.width;for(ne=$;ne!==j;ne+=V)for(ee=ce;ee!==Me;ee+=ue,q+=3)B[(ee+te*ne)*4+3]=255,B[(ee+te*ne)*4+2]=xe[q+0],B[(ee+te*ne)*4+1]=xe[q+1],B[(ee+te*ne)*4+0]=xe[q+2];return B}function a(B,$,V,j,ce,ue,Me,xe){let q=0,ee,ne;const te=S.width;for(ne=$;ne!==j;ne+=V)for(ee=ce;ee!==Me;ee+=ue,q+=4)B[(ee+te*ne)*4+2]=xe[q+0],B[(ee+te*ne)*4+1]=xe[q+1],B[(ee+te*ne)*4+0]=xe[q+2],B[(ee+te*ne)*4+3]=xe[q+3];return B}function c(B,$,V,j,ce,ue,Me,xe){let q,ee=0,ne,te;const ye=S.width;for(te=$;te!==j;te+=V)for(ne=ce;ne!==Me;ne+=ue,ee++)q=xe[ee],B[(ne+ye*te)*4+0]=q,B[(ne+ye*te)*4+1]=q,B[(ne+ye*te)*4+2]=q,B[(ne+ye*te)*4+3]=255;return B}function l(B,$,V,j,ce,ue,Me,xe){let q=0,ee,ne;const te=S.width;for(ne=$;ne!==j;ne+=V)for(ee=ce;ee!==Me;ee+=ue,q+=2)B[(ee+te*ne)*4+0]=xe[q+0],B[(ee+te*ne)*4+1]=xe[q+0],B[(ee+te*ne)*4+2]=xe[q+0],B[(ee+te*ne)*4+3]=xe[q+1];return B}function h(B,$,V,j,ce){let ue,Me,xe,q,ee,ne;switch((S.flags&y)>>x){default:case E:ue=0,xe=1,ee=$,Me=0,q=1,ne=V;break;case v:ue=0,xe=1,ee=$,Me=V-1,q=-1,ne=-1;break;case I:ue=$-1,xe=-1,ee=-1,Me=0,q=1,ne=V;break;case N:ue=$-1,xe=-1,ee=-1,Me=V-1,q=-1,ne=-1;break}if(H)switch(S.pixel_size){case 8:c(B,Me,q,ne,ue,xe,ee,j);break;case 16:l(B,Me,q,ne,ue,xe,ee,j);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(S.pixel_size){case 8:i(B,Me,q,ne,ue,xe,ee,j,ce);break;case 16:r(B,Me,q,ne,ue,xe,ee,j);break;case 24:o(B,Me,q,ne,ue,xe,ee,j);break;case 32:a(B,Me,q,ne,ue,xe,ee,j);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}const u=0,d=1,f=2,p=3,_=9,g=10,m=11,y=48,x=4,v=0,N=1,E=2,I=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let L=0;const w=new Uint8Array(e),S={id_length:w[L++],colormap_type:w[L++],image_type:w[L++],colormap_index:w[L++]|w[L++]<<8,colormap_length:w[L++]|w[L++]<<8,colormap_size:w[L++],origin:[w[L++]|w[L++]<<8,w[L++]|w[L++]<<8],width:w[L++]|w[L++]<<8,height:w[L++]|w[L++]<<8,pixel_size:w[L++],flags:w[L++]};if(t(S),S.id_length+L>e.length)throw new Error("THREE.TGALoader: No data.");L+=S.id_length;let F=!1,k=!1,H=!1;switch(S.image_type){case _:F=!0,k=!0;break;case d:k=!0;break;case g:F=!0;break;case f:break;case m:F=!0,H=!0;break;case p:H=!0;break}const W=new Uint8Array(S.width*S.height*4),K=n(F,k,S,L,w);return h(W,S.width,S.height,K.pixel_data,K.palettes),{data:W,width:S.width,height:S.height,flipY:!0,generateMipmaps:!0,minFilter:gi}}}class hT extends wn{load(e,t,n,i){const r=this,o=r.path===""?Qc.extractUrlBase(e):r.path,a=new vi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){function n(M,b){const P=[],A=M.childNodes;for(let D=0,Q=A.length;D<Q;D++){const re=A[D];re.nodeName===b&&P.push(re)}return P}function i(M){if(M.length===0)return[];const b=M.trim().split(/\s+/),P=new Array(b.length);for(let A=0,D=b.length;A<D;A++)P[A]=b[A];return P}function r(M){if(M.length===0)return[];const b=M.trim().split(/\s+/),P=new Array(b.length);for(let A=0,D=b.length;A<D;A++)P[A]=parseFloat(b[A]);return P}function o(M){if(M.length===0)return[];const b=M.trim().split(/\s+/),P=new Array(b.length);for(let A=0,D=b.length;A<D;A++)P[A]=parseInt(b[A]);return P}function a(M){return M.substring(1)}function c(){return"three_default_"+Ni++}function l(M){return Object.keys(M).length===0}function h(M){return{unit:u(n(M,"unit")[0]),upAxis:d(n(M,"up_axis")[0])}}function u(M){return M!==void 0&&M.hasAttribute("meter")===!0?parseFloat(M.getAttribute("meter")):1}function d(M){return M!==void 0?M.textContent:"Y_UP"}function f(M,b,P,A){const D=n(M,b)[0];if(D!==void 0){const Q=n(D,P);for(let re=0;re<Q.length;re++)A(Q[re])}}function p(M,b){for(const P in M){const A=M[P];A.build=b(M[P])}}function _(M,b){return M.build!==void 0||(M.build=b(M)),M.build}function g(M){const b={sources:{},samplers:{},channels:{}};let P=!1;for(let A=0,D=M.childNodes.length;A<D;A++){const Q=M.childNodes[A];if(Q.nodeType!==1)continue;let re;switch(Q.nodeName){case"source":re=Q.getAttribute("id"),b.sources[re]=ie(Q);break;case"sampler":re=Q.getAttribute("id"),b.samplers[re]=m(Q);break;case"channel":re=Q.getAttribute("target"),b.channels[re]=y(Q);break;case"animation":g(Q),P=!0;break;default:console.log(Q)}}P===!1&&(st.animations[M.getAttribute("id")||ks.generateUUID()]=b)}function m(M){const b={inputs:{}};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"input":const Q=a(D.getAttribute("source")),re=D.getAttribute("semantic");b.inputs[re]=Q;break}}return b}function y(M){const b={};let A=M.getAttribute("target").split("/");const D=A.shift();let Q=A.shift();const re=Q.indexOf("(")!==-1,Be=Q.indexOf(".")!==-1;if(Be)A=Q.split("."),Q=A.shift(),b.member=A.shift();else if(re){const we=Q.split("(");Q=we.shift();for(let Le=0;Le<we.length;Le++)we[Le]=parseInt(we[Le].replace(/\)/,""));b.indices=we}return b.id=D,b.sid=Q,b.arraySyntax=re,b.memberSyntax=Be,b.sampler=a(M.getAttribute("source")),b}function x(M){const b=[],P=M.channels,A=M.samplers,D=M.sources;for(const Q in P)if(P.hasOwnProperty(Q)){const re=P[Q],Be=A[re.sampler],we=Be.inputs.INPUT,Le=Be.inputs.OUTPUT,Ze=D[we],me=D[Le],Ye=N(re,Ze,me);S(Ye,b)}return b}function v(M){return _(st.animations[M],x)}function N(M,b,P){const A=st.nodes[M.id],D=vt(A.id),Q=A.transforms[M.sid],re=A.matrix.clone().transpose();let Be,we,Le,Ze,me,Ye;const Ge={};switch(Q){case"matrix":for(Le=0,Ze=b.array.length;Le<Ze;Le++)if(Be=b.array[Le],we=Le*P.stride,Ge[Be]===void 0&&(Ge[Be]={}),M.arraySyntax===!0){const Yt=P.array[we],Nt=M.indices[0]+4*M.indices[1];Ge[Be][Nt]=Yt}else for(me=0,Ye=P.stride;me<Ye;me++)Ge[Be][me]=P.array[we+me];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break}const et=E(Ge,re);return{name:D.uuid,keyframes:et}}function E(M,b){const P=[];for(const D in M)P.push({time:parseFloat(D),value:M[D]});P.sort(A);for(let D=0;D<16;D++)F(P,D,b.elements[D]);return P;function A(D,Q){return D.time-Q.time}}const I=new C,L=new C,w=new Bt;function S(M,b){const P=M.keyframes,A=M.name,D=[],Q=[],re=[],Be=[];for(let we=0,Le=P.length;we<Le;we++){const Ze=P[we],me=Ze.time,Ye=Ze.value;z.fromArray(Ye).transpose(),z.decompose(I,w,L),D.push(me),Q.push(I.x,I.y,I.z),re.push(w.x,w.y,w.z,w.w),Be.push(L.x,L.y,L.z)}return Q.length>0&&b.push(new ir(A+".position",D,Q)),re.length>0&&b.push(new Zr(A+".quaternion",D,re)),Be.length>0&&b.push(new ir(A+".scale",D,Be)),b}function F(M,b,P){let A,D=!0,Q,re;for(Q=0,re=M.length;Q<re;Q++)A=M[Q],A.value[b]===void 0?A.value[b]=null:D=!1;if(D===!0)for(Q=0,re=M.length;Q<re;Q++)A=M[Q],A.value[b]=P;else k(M,b)}function k(M,b){let P,A;for(let D=0,Q=M.length;D<Q;D++){const re=M[D];if(re.value[b]===null){if(P=H(M,D,b),A=W(M,D,b),P===null){re.value[b]=A.value[b];continue}if(A===null){re.value[b]=P.value[b];continue}K(re,P,A,b)}}}function H(M,b,P){for(;b>=0;){const A=M[b];if(A.value[P]!==null)return A;b--}return null}function W(M,b,P){for(;b<M.length;){const A=M[b];if(A.value[P]!==null)return A;b++}return null}function K(M,b,P,A){if(P.time-b.time===0){M.value[A]=b.value[A];return}M.value[A]=(M.time-b.time)*(P.value[A]-b.value[A])/(P.time-b.time)+b.value[A]}function B(M){const b={name:M.getAttribute("id")||"default",start:parseFloat(M.getAttribute("start")||0),end:parseFloat(M.getAttribute("end")||0),animations:[]};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"instance_animation":b.animations.push(a(D.getAttribute("url")));break}}st.clips[M.getAttribute("id")]=b}function $(M){const b=[],P=M.name,A=M.end-M.start||-1,D=M.animations;for(let Q=0,re=D.length;Q<re;Q++){const Be=v(D[Q]);for(let we=0,Le=Be.length;we<Le;we++)b.push(Be[we])}return new sr(P,A,b)}function V(M){return _(st.clips[M],$)}function j(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"skin":b.id=a(D.getAttribute("source")),b.skin=ce(D);break;case"morph":b.id=a(D.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}st.controllers[M.getAttribute("id")]=b}function ce(M){const b={sources:{}};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"bind_shape_matrix":b.bindShapeMatrix=r(D.textContent);break;case"source":const Q=D.getAttribute("id");b.sources[Q]=ie(D);break;case"joints":b.joints=ue(D);break;case"vertex_weights":b.vertexWeights=Me(D);break}}return b}function ue(M){const b={inputs:{}};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"input":const Q=D.getAttribute("semantic"),re=a(D.getAttribute("source"));b.inputs[Q]=re;break}}return b}function Me(M){const b={inputs:{}};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"input":const Q=D.getAttribute("semantic"),re=a(D.getAttribute("source")),Be=parseInt(D.getAttribute("offset"));b.inputs[Q]={id:re,offset:Be};break;case"vcount":b.vcount=o(D.textContent);break;case"v":b.v=o(D.textContent);break}}return b}function xe(M){const b={id:M.id},P=st.geometries[b.id];return M.skin!==void 0&&(b.skin=q(M.skin),P.sources.skinIndices=b.skin.indices,P.sources.skinWeights=b.skin.weights),b}function q(M){const P={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},A=M.sources,D=M.vertexWeights,Q=D.vcount,re=D.v,Be=D.inputs.JOINT.offset,we=D.inputs.WEIGHT.offset,Le=M.sources[M.joints.inputs.JOINT],Ze=M.sources[M.joints.inputs.INV_BIND_MATRIX],me=A[D.inputs.WEIGHT.id].array;let Ye=0,Ge,et,Je;for(Ge=0,Je=Q.length;Ge<Je;Ge++){const Nt=Q[Ge],Pt=[];for(et=0;et<Nt;et++){const It=re[Ye+Be],Ui=re[Ye+we],Wn=me[Ui];Pt.push({index:It,weight:Wn}),Ye+=2}for(Pt.sort(Yt),et=0;et<4;et++){const It=Pt[et];It!==void 0?(P.indices.array.push(It.index),P.weights.array.push(It.weight)):(P.indices.array.push(0),P.weights.array.push(0))}}for(M.bindShapeMatrix?P.bindMatrix=new We().fromArray(M.bindShapeMatrix).transpose():P.bindMatrix=new We().identity(),Ge=0,Je=Le.array.length;Ge<Je;Ge++){const Nt=Le.array[Ge],Pt=new We().fromArray(Ze.array,Ge*Ze.stride).transpose();P.joints.push({name:Nt,boneInverse:Pt})}return P;function Yt(Nt,Pt){return Pt.weight-Nt.weight}}function ee(M){return _(st.controllers[M],xe)}function ne(M){const b={init_from:n(M,"init_from")[0].textContent};st.images[M.getAttribute("id")]=b}function te(M){return M.build!==void 0?M.build:M.init_from}function ye(M){const b=st.images[M];return b!==void 0?_(b,te):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",M),null)}function tt(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"profile_COMMON":b.profile=ke(D);break}}st.effects[M.getAttribute("id")]=b}function ke(M){const b={surfaces:{},samplers:{}};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"newparam":wt(D,b);break;case"technique":b.technique=O(D);break;case"extra":b.extra=Ie(D);break}}return b}function wt(M,b){const P=M.getAttribute("sid");for(let A=0,D=M.childNodes.length;A<D;A++){const Q=M.childNodes[A];if(Q.nodeType===1)switch(Q.nodeName){case"surface":b.surfaces[P]=pe(Q);break;case"sampler2D":b.samplers[P]=fe(Q);break}}}function pe(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"init_from":b.init_from=D.textContent;break}}return b}function fe(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"source":b.source=D.textContent;break}}return b}function O(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"constant":case"lambert":case"blinn":case"phong":b.type=D.nodeName,b.parameters=qe(D);break;case"extra":b.extra=Ie(D);break}}return b}function qe(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":b[D.nodeName]=ge(D);break;case"transparent":b[D.nodeName]={opaque:D.hasAttribute("opaque")?D.getAttribute("opaque"):"A_ONE",data:ge(D)};break}}return b}function ge(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"color":b[D.nodeName]=r(D.textContent);break;case"float":b[D.nodeName]=parseFloat(D.textContent);break;case"texture":b[D.nodeName]={id:D.getAttribute("texture"),extra:Ue(D)};break}}return b}function Ue(M){const b={technique:{}};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"extra":be(D,b);break}}return b}function be(M,b){for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"technique":it(D,b);break}}}function it(M,b){for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":b.technique[D.nodeName]=parseFloat(D.textContent);break;case"wrapU":case"wrapV":D.textContent.toUpperCase()==="TRUE"?b.technique[D.nodeName]=1:D.textContent.toUpperCase()==="FALSE"?b.technique[D.nodeName]=0:b.technique[D.nodeName]=parseInt(D.textContent);break;case"bump":b[D.nodeName]=T(D);break}}}function Ie(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"technique":b.technique=U(D);break}}return b}function U(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"double_sided":b[D.nodeName]=parseInt(D.textContent);break;case"bump":b[D.nodeName]=T(D);break}}return b}function T(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"texture":b[D.nodeName]={id:D.getAttribute("texture"),texcoord:D.getAttribute("texcoord"),extra:Ue(D)};break}}return b}function Y(M){return M}function oe(M){return _(st.effects[M],Y)}function de(M){const b={name:M.getAttribute("name")};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"instance_effect":b.url=a(D.getAttribute("url"));break}}st.materials[M.getAttribute("id")]=b}function ae(M){let b,P=M.slice((M.lastIndexOf(".")-1>>>0)+2);switch(P=P.toLowerCase(),P){case"tga":b=En;break;default:b=Nn}return b}function Xe(M){const b=oe(M.url),P=b.profile.technique;let A;switch(P.type){case"phong":case"blinn":A=new Kc;break;case"lambert":A=new Gu;break;default:A=new ii;break}A.name=M.name||"";function D(we,Le=null){const Ze=b.profile.samplers[we.id];let me=null;if(Ze!==void 0){const Ye=b.profile.surfaces[Ze.source];me=ye(Ye.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),me=ye(we.id);if(me!==null){const Ye=ae(me);if(Ye!==void 0){const Ge=Ye.load(me),et=we.extra;if(et!==void 0&&et.technique!==void 0&&l(et.technique)===!1){const Je=et.technique;Ge.wrapS=Je.wrapU?Yi:jn,Ge.wrapT=Je.wrapV?Yi:jn,Ge.offset.set(Je.offsetU||0,Je.offsetV||0),Ge.repeat.set(Je.repeatU||1,Je.repeatV||1)}else Ge.wrapS=Yi,Ge.wrapT=Yi;return Le!==null&&(Ge.colorSpace=Le),Ge}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",me),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",we.id),null}const Q=P.parameters;for(const we in Q){const Le=Q[we];switch(we){case"diffuse":Le.color&&A.color.fromArray(Le.color),Le.texture&&(A.map=D(Le.texture,Zt));break;case"specular":Le.color&&A.specular&&A.specular.fromArray(Le.color),Le.texture&&(A.specularMap=D(Le.texture));break;case"bump":Le.texture&&(A.normalMap=D(Le.texture));break;case"ambient":Le.texture&&(A.lightMap=D(Le.texture,Zt));break;case"shininess":Le.float&&A.shininess&&(A.shininess=Le.float);break;case"emission":Le.color&&A.emissive&&A.emissive.fromArray(Le.color),Le.texture&&(A.emissiveMap=D(Le.texture,Zt));break}}xt.toWorkingColorSpace(A.color,Zt),A.specular&&xt.toWorkingColorSpace(A.specular,Zt),A.emissive&&xt.toWorkingColorSpace(A.emissive,Zt);let re=Q.transparent,Be=Q.transparency;if(Be===void 0&&re&&(Be={float:1}),re===void 0&&Be&&(re={opaque:"A_ONE",data:{color:[1,1,1,1]}}),re&&Be)if(re.data.texture)A.transparent=!0;else{const we=re.data.color;switch(re.opaque){case"A_ONE":A.opacity=we[3]*Be.float;break;case"RGB_ZERO":A.opacity=1-we[0]*Be.float;break;case"A_ZERO":A.opacity=1-we[3]*Be.float;break;case"RGB_ONE":A.opacity=we[0]*Be.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',re.opaque)}A.opacity<1&&(A.transparent=!0)}if(P.extra!==void 0&&P.extra.technique!==void 0){const we=P.extra.technique;for(const Le in we){const Ze=we[Le];switch(Le){case"double_sided":A.side=Ze===1?ai:Ci;break;case"bump":A.normalMap=D(Ze.texture),A.normalScale=new se(1,1);break}}}return A}function Ae(M){return _(st.materials[M],Xe)}function Oe(M){const b={name:M.getAttribute("name")};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"optics":b.optics=yt(D);break}}st.cameras[M.getAttribute("id")]=b}function yt(M){for(let b=0;b<M.childNodes.length;b++){const P=M.childNodes[b];switch(P.nodeName){case"technique_common":return ve(P)}}return{}}function ve(M){const b={};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];switch(A.nodeName){case"perspective":case"orthographic":b.technique=A.nodeName,b.parameters=ze(A);break}}return b}function ze(M){const b={};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];switch(A.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":b[A.nodeName]=parseFloat(A.textContent);break}}return b}function $e(M){let b;switch(M.optics.technique){case"perspective":b=new cn(M.optics.parameters.yfov,M.optics.parameters.aspect_ratio,M.optics.parameters.znear,M.optics.parameters.zfar);break;case"orthographic":let P=M.optics.parameters.ymag,A=M.optics.parameters.xmag;const D=M.optics.parameters.aspect_ratio;A=A===void 0?P*D:A,P=P===void 0?A/D:P,A*=.5,P*=.5,b=new lr(-A,A,P,-P,M.optics.parameters.znear,M.optics.parameters.zfar);break;default:b=new cn;break}return b.name=M.name||"",b}function rt(M){const b=st.cameras[M];return b!==void 0?_(b,$e):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",M),null)}function Ve(M){let b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"technique_common":b=Mt(D);break}}st.lights[M.getAttribute("id")]=b}function Mt(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"directional":case"point":case"spot":case"ambient":b.technique=D.nodeName,b.parameters=pt(D)}}return b}function pt(M){const b={};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"color":const Q=r(D.textContent);b.color=new Te().fromArray(Q),xt.toWorkingColorSpace(b.color,Zt);break;case"falloff_angle":b.falloffAngle=parseFloat(D.textContent);break;case"quadratic_attenuation":const re=parseFloat(D.textContent);b.distance=re?Math.sqrt(1/re):0;break}}return b}function Lt(M){let b;switch(M.technique){case"directional":b=new Qu;break;case"point":b=new Ku;break;case"spot":b=new Ju;break;case"ambient":b=new $u;break}return M.parameters.color&&b.color.copy(M.parameters.color),M.parameters.distance&&(b.distance=M.parameters.distance),b}function G(M){const b=st.lights[M];return b!==void 0?_(b,Lt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",M),null)}function Re(M){const b={name:M.getAttribute("name"),sources:{},vertices:{},primitives:[]},P=n(M,"mesh")[0];if(P!==void 0){for(let A=0;A<P.childNodes.length;A++){const D=P.childNodes[A];if(D.nodeType!==1)continue;const Q=D.getAttribute("id");switch(D.nodeName){case"source":b.sources[Q]=ie(D);break;case"vertices":b.vertices=he(D);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",D.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":b.primitives.push(Ne(D));break;default:console.log(D)}}st.geometries[M.getAttribute("id")]=b}}function ie(M){const b={array:[],stride:3};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"float_array":b.array=r(A.textContent);break;case"Name_array":b.array=i(A.textContent);break;case"technique_common":const D=n(A,"accessor")[0];D!==void 0&&(b.stride=parseInt(D.getAttribute("stride")));break}}return b}function he(M){const b={};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];A.nodeType===1&&(b[A.getAttribute("semantic")]=a(A.getAttribute("source")))}return b}function Ne(M){const b={type:M.nodeName,material:M.getAttribute("material"),count:parseInt(M.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let P=0,A=M.childNodes.length;P<A;P++){const D=M.childNodes[P];if(D.nodeType===1)switch(D.nodeName){case"input":const Q=a(D.getAttribute("source")),re=D.getAttribute("semantic"),Be=parseInt(D.getAttribute("offset")),we=parseInt(D.getAttribute("set")),Le=we>0?re+we:re;b.inputs[Le]={id:Q,offset:Be},b.stride=Math.max(b.stride,Be+1),re==="TEXCOORD"&&(b.hasUV=!0);break;case"vcount":b.vcount=o(D.textContent);break;case"p":b.p=o(D.textContent);break}}return b}function De(M){const b={};for(let P=0;P<M.length;P++){const A=M[P];b[A.type]===void 0&&(b[A.type]=[]),b[A.type].push(A)}return b}function dt(M){let b=0;for(let P=0,A=M.length;P<A;P++)M[P].hasUV===!0&&b++;b>0&&b<M.length&&(M.uvsNeedsFix=!0)}function Gt(M){const b={},P=M.sources,A=M.vertices,D=M.primitives;if(D.length===0)return{};const Q=De(D);for(const re in Q){const Be=Q[re];dt(Be),b[re]=mn(Be,P,A)}return b}function mn(M,b,P){const A={},D={array:[],stride:0},Q={array:[],stride:0},re={array:[],stride:0},Be={array:[],stride:0},we={array:[],stride:0},Le={array:[],stride:4},Ze={array:[],stride:4},me=new ct,Ye=[];let Ge=0;for(let et=0;et<M.length;et++){const Je=M[et],Yt=Je.inputs;let Nt=0;switch(Je.type){case"lines":case"linestrips":Nt=Je.count*2;break;case"triangles":Nt=Je.count*3;break;case"polylist":for(let Pt=0;Pt<Je.count;Pt++){const It=Je.vcount[Pt];switch(It){case 3:Nt+=3;break;case 4:Nt+=6;break;default:Nt+=(It-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",Je.type)}me.addGroup(Ge,Nt,et),Ge+=Nt,Je.material&&Ye.push(Je.material);for(const Pt in Yt){const It=Yt[Pt];switch(Pt){case"VERTEX":for(const Ui in P){const Wn=P[Ui];switch(Ui){case"POSITION":const fr=D.array.length;if(gt(Je,b[Wn],It.offset,D.array),D.stride=b[Wn].stride,b.skinWeights&&b.skinIndices&&(gt(Je,b.skinIndices,It.offset,Le.array),gt(Je,b.skinWeights,It.offset,Ze.array)),Je.hasUV===!1&&M.uvsNeedsFix===!0){const Hg=(D.array.length-fr)/D.stride;for(let md=0;md<Hg;md++)re.array.push(0,0)}break;case"NORMAL":gt(Je,b[Wn],It.offset,Q.array),Q.stride=b[Wn].stride;break;case"COLOR":gt(Je,b[Wn],It.offset,we.array),we.stride=b[Wn].stride;break;case"TEXCOORD":gt(Je,b[Wn],It.offset,re.array),re.stride=b[Wn].stride;break;case"TEXCOORD1":gt(Je,b[Wn],It.offset,Be.array),re.stride=b[Wn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ui)}}break;case"NORMAL":gt(Je,b[It.id],It.offset,Q.array),Q.stride=b[It.id].stride;break;case"COLOR":gt(Je,b[It.id],It.offset,we.array,!0),we.stride=b[It.id].stride;break;case"TEXCOORD":gt(Je,b[It.id],It.offset,re.array),re.stride=b[It.id].stride;break;case"TEXCOORD1":gt(Je,b[It.id],It.offset,Be.array),Be.stride=b[It.id].stride;break}}}return D.array.length>0&&me.setAttribute("position",new Pe(D.array,D.stride)),Q.array.length>0&&me.setAttribute("normal",new Pe(Q.array,Q.stride)),we.array.length>0&&me.setAttribute("color",new Pe(we.array,we.stride)),re.array.length>0&&me.setAttribute("uv",new Pe(re.array,re.stride)),Be.array.length>0&&me.setAttribute("uv1",new Pe(Be.array,Be.stride)),Le.array.length>0&&me.setAttribute("skinIndex",new Pe(Le.array,Le.stride)),Ze.array.length>0&&me.setAttribute("skinWeight",new Pe(Ze.array,Ze.stride)),A.data=me,A.type=M[0].type,A.materialKeys=Ye,A}function gt(M,b,P,A,D=!1){const Q=M.p,re=M.stride,Be=M.vcount;function we(me){let Ye=Q[me+P]*Ze;const Ge=Ye+Ze;for(;Ye<Ge;Ye++)A.push(Le[Ye]);if(D){const et=A.length-Ze-1;sn.setRGB(A[et+0],A[et+1],A[et+2],Zt),A[et+0]=sn.r,A[et+1]=sn.g,A[et+2]=sn.b}}const Le=b.array,Ze=b.stride;if(M.vcount!==void 0){let me=0;for(let Ye=0,Ge=Be.length;Ye<Ge;Ye++){const et=Be[Ye];if(et===4){const Je=me+re*0,Yt=me+re*1,Nt=me+re*2,Pt=me+re*3;we(Je),we(Yt),we(Pt),we(Yt),we(Nt),we(Pt)}else if(et===3){const Je=me+re*0,Yt=me+re*1,Nt=me+re*2;we(Je),we(Yt),we(Nt)}else if(et>4)for(let Je=1,Yt=et-2;Je<=Yt;Je++){const Nt=me+re*0,Pt=me+re*Je,It=me+re*(Je+1);we(Nt),we(Pt),we(It)}me+=re*et}}else for(let me=0,Ye=Q.length;me<Ye;me+=re)we(me)}function Hn(M){return _(st.geometries[M],Gt)}function di(M){const b={name:M.getAttribute("name")||"",joints:{},links:[]};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Li(A,b);break}}st.kinematicsModels[M.getAttribute("id")]=b}function sa(M){return M.build!==void 0?M.build:M}function ra(M){return _(st.kinematicsModels[M],sa)}function Li(M,b){for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"joint":b.joints[A.getAttribute("sid")]=Jr(A);break;case"link":b.links.push(Kr(A));break}}}function Jr(M){let b;for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"prismatic":case"revolute":b=oa(A);break}}return b}function oa(M){const b={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",axis:new C,limits:{min:0,max:0},type:M.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"axis":const D=r(A.textContent);b.axis.fromArray(D);break;case"limits":const Q=A.getElementsByTagName("max")[0],re=A.getElementsByTagName("min")[0];b.limits.max=parseFloat(Q.textContent),b.limits.min=parseFloat(re.textContent);break}}return b.limits.min>=b.limits.max&&(b.static=!0),b.middlePosition=(b.limits.min+b.limits.max)/2,b}function Kr(M){const b={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",attachments:[],transforms:[]};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"attachment_full":b.attachments.push(hr(A));break;case"matrix":case"translate":case"rotate":b.transforms.push(Qr(A));break}}return b}function hr(M){const b={joint:M.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"link":b.links.push(Kr(A));break;case"matrix":case"translate":case"rotate":b.transforms.push(Qr(A));break}}return b}function Qr(M){const b={type:M.nodeName},P=r(M.textContent);switch(b.type){case"matrix":b.obj=new We,b.obj.fromArray(P).transpose();break;case"translate":b.obj=new C,b.obj.fromArray(P);break;case"rotate":b.obj=new C,b.obj.fromArray(P),b.angle=ks.degToRad(P[3]);break}return b}function ur(M){const b={name:M.getAttribute("name")||"",rigidBodies:{}};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"rigid_body":b.rigidBodies[A.getAttribute("name")]={},aa(A,b.rigidBodies[A.getAttribute("name")]);break}}st.physicsModels[M.getAttribute("id")]=b}function aa(M,b){for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"technique_common":ca(A,b);break}}}function ca(M,b){for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"inertia":b.inertia=r(A.textContent);break;case"mass":b.mass=r(A.textContent)[0];break}}}function Hl(M){const b={bindJointAxis:[]};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"bind_joint_axis":b.bindJointAxis.push(Gl(A));break}}st.kinematicsScenes[a(M.getAttribute("url"))]=b}function Gl(M){const b={target:M.getAttribute("target").split("/").pop()};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType===1)switch(A.nodeName){case"axis":const D=A.getElementsByTagName("param")[0];b.axis=D.textContent;const Q=b.axis.split("inst_").pop().split("axis")[0];b.jointIndex=Q.substring(0,Q.length-1);break}}return b}function Wl(M){return M.build!==void 0?M.build:M}function Xl(M){return _(st.kinematicsScenes[M],Wl)}function ql(){const M=Object.keys(st.kinematicsModels)[0],b=Object.keys(st.kinematicsScenes)[0],P=Object.keys(st.visualScenes)[0];if(M===void 0||b===void 0)return;const A=ra(M),D=Xl(b),Q=Et(P),re=D.bindJointAxis,Be={};for(let Ze=0,me=re.length;Ze<me;Ze++){const Ye=re[Ze],Ge=Ht.querySelector('[sid="'+Ye.target+'"]');if(Ge){const et=Ge.parentElement;we(Ye.jointIndex,et)}}function we(Ze,me){const Ye=me.getAttribute("name"),Ge=A.joints[Ze];Q.traverse(function(et){et.name===Ye&&(Be[Ze]={object:et,transforms:Yl(me),joint:Ge,position:Ge.zeroPosition})})}const Le=new We;dr={joints:A&&A.joints,getJointValue:function(Ze){const me=Be[Ze];if(me)return me.position;console.warn("THREE.ColladaLoader: Joint "+Ze+" doesn't exist.")},setJointValue:function(Ze,me){const Ye=Be[Ze];if(Ye){const Ge=Ye.joint;if(me>Ge.limits.max||me<Ge.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ze+" value "+me+" outside of limits (min: "+Ge.limits.min+", max: "+Ge.limits.max+").");else if(Ge.static)console.warn("THREE.ColladaLoader: Joint "+Ze+" is static.");else{const et=Ye.object,Je=Ge.axis,Yt=Ye.transforms;z.identity();for(let Nt=0;Nt<Yt.length;Nt++){const Pt=Yt[Nt];if(Pt.sid&&Pt.sid.indexOf(Ze)!==-1)switch(Ge.type){case"revolute":z.multiply(Le.makeRotationAxis(Je,ks.degToRad(me)));break;case"prismatic":z.multiply(Le.makeTranslation(Je.x*me,Je.y*me,Je.z*me));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ge.type);break}else switch(Pt.type){case"matrix":z.multiply(Pt.obj);break;case"translate":z.multiply(Le.makeTranslation(Pt.obj.x,Pt.obj.y,Pt.obj.z));break;case"scale":z.scale(Pt.obj);break;case"rotate":z.multiply(Le.makeRotationAxis(Pt.obj,Pt.angle));break}}et.matrix.copy(z),et.matrix.decompose(et.position,et.quaternion,et.scale),Be[Ze].position=me}}else console.log("THREE.ColladaLoader: "+Ze+" does not exist.")}}}function Yl(M){const b=[],P=Ht.querySelector('[id="'+M.id+'"]');for(let A=0;A<P.childNodes.length;A++){const D=P.childNodes[A];if(D.nodeType!==1)continue;let Q,re;switch(D.nodeName){case"matrix":Q=r(D.textContent);const Be=new We().fromArray(Q).transpose();b.push({sid:D.getAttribute("sid"),type:D.nodeName,obj:Be});break;case"translate":case"scale":Q=r(D.textContent),re=new C().fromArray(Q),b.push({sid:D.getAttribute("sid"),type:D.nodeName,obj:re});break;case"rotate":Q=r(D.textContent),re=new C().fromArray(Q);const we=ks.degToRad(Q[3]);b.push({sid:D.getAttribute("sid"),type:D.nodeName,obj:re,angle:we});break}}return b}function R(M){const b=M.getElementsByTagName("node");for(let P=0;P<b.length;P++){const A=b[P];A.hasAttribute("id")===!1&&A.setAttribute("id",c())}}const z=new We,Z=new C;function J(M){const b={name:M.getAttribute("name")||"",type:M.getAttribute("type"),id:M.getAttribute("id"),sid:M.getAttribute("sid"),matrix:new We,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];if(A.nodeType!==1)continue;let D;switch(A.nodeName){case"node":b.nodes.push(A.getAttribute("id")),J(A);break;case"instance_camera":b.instanceCameras.push(a(A.getAttribute("url")));break;case"instance_controller":b.instanceControllers.push(X(A));break;case"instance_light":b.instanceLights.push(a(A.getAttribute("url")));break;case"instance_geometry":b.instanceGeometries.push(X(A));break;case"instance_node":b.instanceNodes.push(a(A.getAttribute("url")));break;case"matrix":D=r(A.textContent),b.matrix.multiply(z.fromArray(D).transpose()),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"translate":D=r(A.textContent),Z.fromArray(D),b.matrix.multiply(z.makeTranslation(Z.x,Z.y,Z.z)),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"rotate":D=r(A.textContent);const Q=ks.degToRad(D[3]);b.matrix.multiply(z.makeRotationAxis(Z.fromArray(D),Q)),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"scale":D=r(A.textContent),b.matrix.scale(Z.fromArray(D)),b.transforms[A.getAttribute("sid")]=A.nodeName;break;case"extra":break;default:console.log(A)}}return je(b.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",b.id):st.nodes[b.id]=b,b}function X(M){const b={id:a(M.getAttribute("url")),materials:{},skeletons:[]};for(let P=0;P<M.childNodes.length;P++){const A=M.childNodes[P];switch(A.nodeName){case"bind_material":const D=A.getElementsByTagName("instance_material");for(let Q=0;Q<D.length;Q++){const re=D[Q],Be=re.getAttribute("symbol"),we=re.getAttribute("target");b.materials[Be]=a(we)}break;case"skeleton":b.skeletons.push(a(A.textContent));break}}return b}function _e(M,b){const P=[],A=[];let D,Q,re;for(D=0;D<M.length;D++){const Le=M[D];let Ze;if(je(Le))Ze=vt(Le),Ce(Ze,b,P);else if(Wt(Le)){const Ye=st.visualScenes[Le].children;for(let Ge=0;Ge<Ye.length;Ge++){const et=Ye[Ge];if(et.type==="JOINT"){const Je=vt(et.id);Ce(Je,b,P)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Le)}for(D=0;D<b.length;D++)for(Q=0;Q<P.length;Q++)if(re=P[Q],re.bone.name===b[D].name){A[D]=re,re.processed=!0;break}for(D=0;D<P.length;D++)re=P[D],re.processed===!1&&(A.push(re),re.processed=!0);const Be=[],we=[];for(D=0;D<A.length;D++)re=A[D],Be.push(re.bone),we.push(re.boneInverse);return new ea(Be,we)}function Ce(M,b,P){M.traverse(function(A){if(A.isBone===!0){let D;for(let Q=0;Q<b.length;Q++){const re=b[Q];if(re.name===A.name){D=re.boneInverse;break}}D===void 0&&(D=new We),P.push({bone:A,boneInverse:D,processed:!1})}})}function Fe(M){const b=[],P=M.matrix,A=M.nodes,D=M.type,Q=M.instanceCameras,re=M.instanceControllers,Be=M.instanceLights,we=M.instanceGeometries,Le=M.instanceNodes;for(let me=0,Ye=A.length;me<Ye;me++)b.push(vt(A[me]));for(let me=0,Ye=Q.length;me<Ye;me++){const Ge=rt(Q[me]);Ge!==null&&b.push(Ge.clone())}for(let me=0,Ye=re.length;me<Ye;me++){const Ge=re[me],et=ee(Ge.id),Je=Hn(et.id),Yt=at(Je,Ge.materials),Nt=Ge.skeletons,Pt=et.skin.joints,It=_e(Nt,Pt);for(let Ui=0,Wn=Yt.length;Ui<Wn;Ui++){const fr=Yt[Ui];fr.isSkinnedMesh&&(fr.bind(It,et.skin.bindMatrix),fr.normalizeSkinWeights()),b.push(fr)}}for(let me=0,Ye=Be.length;me<Ye;me++){const Ge=G(Be[me]);Ge!==null&&b.push(Ge.clone())}for(let me=0,Ye=we.length;me<Ye;me++){const Ge=we[me],et=Hn(Ge.id),Je=at(et,Ge.materials);for(let Yt=0,Nt=Je.length;Yt<Nt;Yt++)b.push(Je[Yt])}for(let me=0,Ye=Le.length;me<Ye;me++)b.push(vt(Le[me]).clone());let Ze;if(A.length===0&&b.length===1)Ze=b[0];else{Ze=D==="JOINT"?new xl:new Ei;for(let me=0;me<b.length;me++)Ze.add(b[me])}return Ze.name=D==="JOINT"?M.sid:M.name,Ze.matrix.copy(P),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze}const He=new ii({name:wn.DEFAULT_MATERIAL_NAME,color:16711935});function ot(M,b){const P=[];for(let A=0,D=M.length;A<D;A++){const Q=b[M[A]];Q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",M[A]),P.push(He)):P.push(Ae(Q))}return P}function at(M,b){const P=[];for(const A in M){const D=M[A],Q=ot(D.materialKeys,b);if(Q.length===0&&(A==="lines"||A==="linestrips"?Q.push(new xn):Q.push(new Kc)),A==="lines"||A==="linestrips")for(let Le=0,Ze=Q.length;Le<Ze;Le++){const me=Q[Le];if(me.isMeshPhongMaterial===!0||me.isMeshLambertMaterial===!0){const Ye=new xn;Ye.color.copy(me.color),Ye.opacity=me.opacity,Ye.transparent=me.transparent,Q[Le]=Ye}}const re=D.data.attributes.skinIndex!==void 0,Be=Q.length===1?Q[0]:Q;let we;switch(A){case"lines":we=new xi(D.data,Be);break;case"linestrips":we=new Mn(D.data,Be);break;case"triangles":case"polylist":re?we=new Lu(D.data,Be):we=new Se(D.data,Be);break}P.push(we)}return P}function je(M){return st.nodes[M]!==void 0}function vt(M){return _(st.nodes[M],Fe)}function Ct(M){const b={name:M.getAttribute("name"),children:[]};R(M);const P=n(M,"node");for(let A=0;A<P.length;A++)b.children.push(J(P[A]));st.visualScenes[M.getAttribute("id")]=b}function qt(M){const b=new Ei;b.name=M.name;const P=M.children;for(let A=0;A<P.length;A++){const D=P[A];b.add(vt(D.id))}return b}function Wt(M){return st.visualScenes[M]!==void 0}function Et(M){return _(st.visualScenes[M],qt)}function Qe(M){const b=n(M,"instance_visual_scene")[0];return Et(a(b.getAttribute("url")))}function ln(){const M=st.clips;if(l(M)===!0){if(l(st.animations)===!1){const b=[];for(const P in st.animations){const A=v(P);for(let D=0,Q=A.length;D<Q;D++)b.push(A[D])}hn.push(new sr("default",-1,b))}}else for(const b in M)hn.push(V(b))}function Rt(M){let b="";const P=[M];for(;P.length;){const A=P.shift();A.nodeType===Node.TEXT_NODE?b+=A.textContent:(b+=`
`,P.push.apply(P,A.childNodes))}return b.trim()}if(e.length===0)return{scene:new _l};const Gn=new DOMParser().parseFromString(e,"application/xml"),Ht=n(Gn,"COLLADA")[0],yn=Gn.getElementsByTagName("parsererror")[0];if(yn!==void 0){const M=n(yn,"div")[0];let b;return M?b=M.textContent:b=Rt(yn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,b),null}const ys=Ht.getAttribute("version");console.debug("THREE.ColladaLoader: File version",ys);const kt=h(n(Ht,"asset")[0]),Nn=new eg(this.manager);Nn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let En;xp&&(En=new xp(this.manager),En.setPath(this.resourcePath||t));const sn=new Te,hn=[];let dr={},Ni=0;const st={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(Ht,"library_animations","animation",g),f(Ht,"library_animation_clips","animation_clip",B),f(Ht,"library_controllers","controller",j),f(Ht,"library_images","image",ne),f(Ht,"library_effects","effect",tt),f(Ht,"library_materials","material",de),f(Ht,"library_cameras","camera",Oe),f(Ht,"library_lights","light",Ve),f(Ht,"library_geometries","geometry",Re),f(Ht,"library_nodes","node",J),f(Ht,"library_visual_scenes","visual_scene",Ct),f(Ht,"library_kinematics_models","kinematics_model",di),f(Ht,"library_physics_models","physics_model",ur),f(Ht,"scene","instance_kinematics_scene",Hl),p(st.animations,x),p(st.clips,$),p(st.controllers,xe),p(st.images,te),p(st.effects,Y),p(st.materials,Xe),p(st.cameras,$e),p(st.lights,Lt),p(st.geometries,Gt),p(st.visualScenes,qt),ln(),ql();const la=Qe(n(Ht,"scene")[0]);return la.animations=hn,kt.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),la.rotation.set(-Math.PI/2,0,0)),la.scale.multiplyScalar(kt.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),hn},kinematics:dr,library:st,scene:la}}}var uT=Pi("<!> <!>",1);function dT(s,e){hi(e,!0),Ke(e,"color",19,()=>new Te("pink"));let t=Ke(e,"scale",19,()=>[1,1,1]),n=Ke(e,"rotation",19,()=>[0,0,0]),i=Ke(e,"position",19,()=>[0,0,0]),r=Ke(e,"onclick",3,()=>{}),o=Gi(Fn([1,1,1])),a=Gi(Fn([0,0,0])),c=Gi(Fn([0,0,0])),l=Gi(Fn([0,0,0])),h=Gi(Fn([]));Pg(hT).load(e.filename).subscribe(g=>{if(!g)return;let m=g.scene;wi(o,Fn(m.scale.toArray())),wi(a,Fn(m.position.toArray())),wi(c,Fn(m.rotation?m.rotation.toArray():le(c))),wi(l,Fn(m.up.toArray())),le(l)[0]*=Math.PI/2,le(l)[1]*=Math.PI/2,le(l)[2]*=Math.PI/2;let y=[];g.scene.traverse(x=>{x.type==="Mesh"&&y.push(x)}),wi(h,Fn(y))});var f=Tt(),p=ht(f);{var _=g=>{var m=uT(),y=ht(m);pu(y,()=>`<!-- include dae: ${e.filename} ${t()} -->`);var x=ci(y,2);en(x,()=>Vt.Group,(v,N)=>{N(v,{get scale(){return t()},get position(){return i()},get rotation(){return n()},children:(E,I)=>{var L=Tt(),w=ht(L);en(w,()=>Vt.Group,(S,F)=>{F(S,{get rotation(){return le(l)},children:(k,H)=>{var W=Tt(),K=ht(W);en(K,()=>Vt.Group,(B,$)=>{$(B,{get scale(){return le(o)},get position(){return le(a)},get rotation(){return le(c)},children:(V,j)=>{var ce=Tt(),ue=ht(ce);vo(ue,17,()=>le(h),xo,(Me,xe)=>{var q=Tt(),ee=ht(q);const ne=_t(()=>le(xe).scale?le(xe).scale.toArray():[1,1,1]),te=_t(()=>le(xe).position?le(xe).position.toArray():[0,0,0]);en(ee,()=>Vt.Mesh,(ye,tt)=>{tt(ye,{castShadow:!0,receiveShadow:!0,get geometry(){return le(xe).geometry},get scale(){return le(ne)},get position(){return le(te)},get material(){return le(xe).material},get onclick(){return r()}})}),lt(Me,q)}),lt(V,ce)},$$slots:{default:!0}})}),lt(k,W)},$$slots:{default:!0}})}),lt(E,L)},$$slots:{default:!0}})}),lt(g,m)};In(p,g=>{le(h).length>0&&g(_)})}lt(s,f),ui()}function kT(s,e){hi(e,!0);let t=Ke(e,"position",19,()=>[0,0,0]),n=Ke(e,"size",3,10),i=Ke(e,"divisions",3,10);const{scene:r}=xs(),o=new pg(n(),i());o.position.x=t()[0],o.position.y=t()[1],o.position.z=t()[2],r.add(o),Ii(()=>{r.remove(o)}),ui()}class fT extends wn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new vi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){function t(l){const h=new DataView(l),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;const p=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(p,h,_))return!1;return!0}function n(l,h,u){for(let d=0,f=l.length;d<f;d++)if(l[d]!==h.getUint8(u+d))return!1;return!0}function i(l){const h=new DataView(l),u=h.getUint32(80,!0);let d,f,p,_=!1,g,m,y,x,v;for(let F=0;F<70;F++)h.getUint32(F,!1)==1129270351&&h.getUint8(F+4)==82&&h.getUint8(F+5)==61&&(_=!0,g=new Float32Array(u*3*3),m=h.getUint8(F+6)/255,y=h.getUint8(F+7)/255,x=h.getUint8(F+8)/255,v=h.getUint8(F+9)/255);const N=84,E=12*4+2,I=new ct,L=new Float32Array(u*3*3),w=new Float32Array(u*3*3),S=new Te;for(let F=0;F<u;F++){const k=N+F*E,H=h.getFloat32(k,!0),W=h.getFloat32(k+4,!0),K=h.getFloat32(k+8,!0);if(_){const B=h.getUint16(k+48,!0);B&32768?(d=m,f=y,p=x):(d=(B&31)/31,f=(B>>5&31)/31,p=(B>>10&31)/31)}for(let B=1;B<=3;B++){const $=k+B*12,V=F*3*3+(B-1)*3;L[V]=h.getFloat32($,!0),L[V+1]=h.getFloat32($+4,!0),L[V+2]=h.getFloat32($+8,!0),w[V]=H,w[V+1]=W,w[V+2]=K,_&&(S.setRGB(d,f,p,Zt),g[V]=S.r,g[V+1]=S.g,g[V+2]=S.b)}}return I.setAttribute("position",new Dt(L,3)),I.setAttribute("normal",new Dt(w,3)),_&&(I.setAttribute("color",new Dt(g,3)),I.hasColors=!0,I.alpha=v),I}function r(l){const h=new ct,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let p=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,g=new RegExp("vertex"+_+_+_,"g"),m=new RegExp("normal"+_+_+_,"g"),y=[],x=[],v=[],N=new C;let E,I=0,L=0,w=0;for(;(E=u.exec(l))!==null;){L=w;const S=E[0],F=(E=f.exec(S))!==null?E[1]:"";for(v.push(F);(E=d.exec(S))!==null;){let W=0,K=0;const B=E[0];for(;(E=m.exec(B))!==null;)N.x=parseFloat(E[1]),N.y=parseFloat(E[2]),N.z=parseFloat(E[3]),K++;for(;(E=g.exec(B))!==null;)y.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),x.push(N.x,N.y,N.z),W++,w++;K!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),W!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const k=L,H=w-L;h.userData.groupNames=v,h.addGroup(k,H,I),I++}return h.setAttribute("position",new Pe(y,3)),h.setAttribute("normal",new Pe(x,3)),h}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}const c=a(e);return t(c)?i(c):r(o(e))}}var pT=Pi("<!> <!>",1);function mT(s,e){hi(e,!0);const[t,n]=uu(),i=()=>du(le(d),"$stl",t);let r=Ke(e,"color",19,()=>new Te("pink")),o=Ke(e,"scale",19,()=>[1,1,1]),a=Ke(e,"rotation",19,()=>[0,0,0]),c=Ke(e,"position",19,()=>[0,0,0]),l=Ke(e,"onclick",3,()=>{}),h=Ke(e,"opacity",3,1);const u=Pg(fT);let d=_t(()=>u.load(e.filename));var f=Tt(),p=ht(f);{var _=g=>{var m=pT(),y=ht(m);pu(y,()=>`<!-- include stl: ${e.filename} ${o()} -->`);var x=ci(y,2);en(x,()=>Vt.Mesh,(v,N)=>{N(v,{castShadow:!0,receiveShadow:!0,get geometry(){return i()},get scale(){return o()},get onclick(){return l()},get position(){return c()},get rotation(){return a()},children:(E,I)=>{var L=Tt(),w=ht(L);const S=_t(()=>h()<1);en(w,()=>Vt.MeshLambertMaterial,(F,k)=>{k(F,{get color(){return r()},get opacity(){return h()},get transparent(){return le(S)}})}),lt(E,L)},$$slots:{default:!0}})}),lt(g,m)};In(p,g=>{i()&&g(_)})}lt(s,f),ui(),n()}const bn=Fn({edit:!0,editMode:"translate",selection:void 0,robot:void 0,continuousJoints:{},revoluteJoints:{},display:"visual",highlightColor:new Te(2,.5,.5),visualOpacity:1,collisionOpacity:.7});function Gh(s){const e=pd(s,"xyz");if(!(!e||e.length!=3))return e}function yp(s){const e=pd(s,"rpy");if(!(!e||e.length!=3))return e}function bp(s){const e=pd(s,"rgba");if(!(!e||e.length!=4))return e}function pd(s,e="xyz"){var t;if(s.hasAttribute(e)){const n=(t=s.getAttribute(e))==null?void 0:t.split(" ");if(n){const i=[];for(const r of n)i.push(parseFloat(r));return i}}}function gT(s){return s?new Te(s[0],s[1],s[2]):new Te("white")}function _T(s){const e=s.joints,t=[];for(const n of e){let i=!0;for(const r of e)if(n.parent.name===r.child.name){i=!1;break}i&&t.push(n)}return t}function vT(s,e){const t=[],n=s.joints;if(!n)return[];for(const i of n)i.parent.name==e.name&&t.push(i);return t}function xT(s){const e=s.elem.getElementsByTagName("origin")[0];e.setAttribute("xyz",s.origin_xyz.join(" ")),e.setAttribute("rpy",s.origin_rpy.join(" "))}class zT{constructor(e,t=""){Ot(this,"filename");Ot(this,"colors",{});Ot(this,"robot",{name:"",links:{},joints:[]});Ot(this,"prefix","");Ot(this,"xmlRobotNode");this.filename=e,this.prefix=t}async load(){return fetch(this.filename).then(e=>e.text())}reset(){this.robot={name:"",links:{},joints:[]}}fromString(e){this.reset();let t=new window.DOMParser().parseFromString(e,"text/xml");return this.xmlRobotNode=t.documentElement,this.parseRobotXMLNode(t.documentElement)}parseRobotXMLNode(e){const t=e.nodeName;if(t!=="robot")throw new Error(`Invalid URDF: no root node ${t}`);return this.robot.name=e.getAttribute("name"),this.parseColorsFromRobot(e),this.parseLinks(e),this.parseJoints(e),this.robot}parseColorsFromRobot(e){const t=e.getElementsByTagName("material");for(let n=0;n<t.length;n++){const i=t[n],r=this.colorFromMaterial(i);r&&(this.colors[r.name]=r.rgba)}}colorFromMaterial(e){if(!e.hasAttribute("name")){console.warn("Found material-tag with name without name inside robot tag!");return}const t=e.getAttribute("name"),n=e.getElementsByTagName("color");if(n.length===0)return;const i=n[0];if(!i.hasAttribute("rgba")){console.warn(`Color tag ${t} does not have expected "rgba" attribute!`);return}return{name:t,rgba:bp(i)||[0,0,0,1]}}getLinkByName(e){if(!this.xmlRobotNode)return;const t=this.xmlRobotNode.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n];if(i.hasAttribute("name")){const r=i.getAttribute("name");if(e==r)return i}}}parseLinks(e){const t=e.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n],r={visual:[],collision:[],highlight:!1,name:"",elem:i};i.hasAttribute("name")&&(r.name=i.getAttribute("name"),this.robot.links[r.name]=r);const o=i.getElementsByTagName("visual");for(let c=0;c<o.length;c++)r.visual.push(this.parseVisual(o[c]));const a=i.getElementsByTagName("collision");for(let c=0;c<a.length;c++)r.collision.push(this.parseVisual(a[c]))}}parseVisual(e){let t,n,i,r="pink";const o={elem:e};for(let a=0;a<e.childNodes.length;a++){const c=e.childNodes[a];switch(c.nodeName){case"geometry":this.parseGeometry(c,o);break;case"origin":t=Gh(c),t&&(o.origin_xyz=t),n=yp(c),n&&(o.origin_rpy=n);break;case"material":i=c.getElementsByTagName("color"),i.length>0&&i[0].hasAttribute("rgba")?o.color_rgba=bp(i[0]):c.hasAttribute("name")&&(r=c.getAttribute("name"),o.color_rgba=this.colors[r])}}return o}parseGeometry(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"mesh":let r=[1,1,1],o=i.getAttribute("scale");if(o){const u=o.split(" ");for(const d in u)r[d]=parseFloat(u[d])}let a=i.getAttribute("filename");a=a.replace("package:/",this.prefix);let c="stl";switch(a.substring(a.length-3).toLocaleLowerCase()){case"fbx":c="fbx";break;case"obj":c="obj";break;case"stl":c="stl";break;case"dae":c="dae";break;default:throw new Error("Unknown type "+a)}t.geometry={filename:a,type:c,scale:r},t.type="mesh";return;case"cylinder":const l={};i.hasAttribute("length")&&(l.length=parseFloat(i.getAttribute("length"))),i.hasAttribute("radius")&&(l.radius=parseFloat(i.getAttribute("radius"))),t.geometry=l,t.type="cylinder";return;case"box":const h={size:[1,1,1]};if(i.hasAttribute("size")){const d=i.getAttribute("size").split(" ");for(const f in d)h.size[f]=parseFloat(d[f])}t.geometry=h,t.type="box";return}}}parseJoints(e){const t=this.robot.links,n=this.robot.joints,i=e.getElementsByTagName("joint");for(let r=0;r<i.length;r++){const o=i[r],a=o.getElementsByTagName("origin");let c=[0,0,0],l=[0,0,0];if(a.length===1){let y=Gh(a[0]);y&&(l=y);let x=yp(a[0]);x&&(c=x)}let h;const u=o.getElementsByTagName("parent");if(u.length===1){const y=u[0].getAttribute("link");if(!y)throw Error("Name not set for link");const x=this.getLinkByName(y);if(!x)throw Error(`Link with name ${y} not found!`);y&&t[y]?h=t[y]:h={name:y,visual:[],collision:[],elem:x,highlight:!1}}let d;const f=o.getElementsByTagName("child");if(f.length===1){const y=f[0].getAttribute("link");if(y&&t[y])d=t[y];else if(y){const x=this.getLinkByName(y);d={name:y,visual:[],collision:[],elem:x,highlight:!1}}}let p,_=[0,0,1];const g=o.getElementsByTagName("axis");g.length===1&&(_=Gh(g[0])||_);const m=o.getElementsByTagName("limit");if(m.length===1){p={lower:0,upper:0,effort:0,velocity:0};const y=m[0].getAttribute("lower");y&&(p.lower=parseInt(y));const x=m[0].getAttribute("upper");x&&(p.upper=parseInt(x));const v=m[0].getAttribute("effort");v&&(p.effort=parseInt(v));const N=m[0].getAttribute("velocity");N&&(p.velocity=parseInt(N))}d&&h&&n.push({name:o.getAttribute("name")||void 0,type:o.getAttribute("type")||void 0,origin_rpy:c,origin_xyz:l,rotation:Object.assign([],c),axis_xyz:_,parent:h,child:d,limit:p,elem:o})}}getURDFXML(){return this.xmlRobotNode?`<?xml version="1.0" ?>
`+this.xmlRobotNode.outerHTML:""}}function Mp(s,e){hi(e,!0);let t=Ke(e,"joint",15),n=Ke(e,"selected",3,!1),i=Ke(e,"onchange",3,void 0);const r=()=>[-t().origin_rpy[0]+t().rotation[0],-t().origin_rpy[1]+t().rotation[1],-t().origin_rpy[2]+t().rotation[2]],o=d=>{t(t().origin_xyz=d.position.toArray(),!0),t(t().origin_rpy=[d.rotation.x,d.rotation.y,d.rotation.z],!0),xT(t())},a=d=>{if(!d.target)return;const f=d.target.object;o(f),i()&&i()(t())};Og();var c=Tt(),l=ht(c);{var h=d=>{FE(d,{get position(){return t().origin_xyz},get rotation(){return t().origin_rpy},get mode(){return bn.editMode},onobjectChange:a,children:(f,p)=>{var _=Tt(),g=ht(_);const m=_t(r);en(g,()=>Vt.Group,(y,x)=>{x(y,{get rotation(){return le(m)},children:(v,N)=>{var E=Tt(),I=ht(E);ds(I,()=>e.children??kr),lt(v,E)},$$slots:{default:!0}})}),lt(f,_)},$$slots:{default:!0}})},u=d=>{var f=Tt(),p=ht(f);en(p,()=>Vt.Group,(_,g)=>{g(_,{get position(){return t().origin_xyz},get rotation(){return t().origin_rpy},children:(m,y)=>{var x=Tt(),v=ht(x);const N=_t(r);en(v,()=>Vt.Group,(E,I)=>{I(E,{get rotation(){return le(N)},children:(L,w)=>{var S=Tt(),F=ht(S);ds(F,()=>e.children??kr),lt(L,S)},$$slots:{default:!0}})}),lt(m,x)},$$slots:{default:!0}})}),lt(d,f)};In(l,d=>{n()&&bn.edit?d(h):d(u,!1)})}lt(s,c),ui()}var yT=Pi("<!> <!> <!> <!>",1);function VT(s,e){let t=Ke(e,"intensity",3,.5),n=Ke(e,"radius",3,1),i=Ke(e,"shadows",3,!0),r=Ke(e,"preset_name",3,"rembrandt"),o=Ke(e,"shadowBias",19,()=>-1e-4),a=Ke(e,"normalBias",3,0),c=Ke(e,"shadowSize",3,256),l=Ke(e,"height",3,1),h=Ke(e,"shadowOffset",3,1);const d={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}}[r()];var f=yT(),p=ht(f);const _=_t(()=>t()/3);en(p,()=>Vt.AmbientLight,(I,L)=>{L(I,{get intensity(){return le(_)}})});var g=ci(p,2);const m=_t(()=>[d.main[0]*n(),d.main[1]*n(),d.main[2]*n()]),y=_t(()=>t()*2);en(g,()=>Vt.SpotLight,(I,L)=>{L(I,{penumbra:1,get position(){return le(m)},get intensity(){return le(y)},get castShadow(){return i()},get"shadow-bias"(){return o()},get"shadow-normalBias"(){return a()},get"shadow-mapSize"(){return c()}})});var x=ci(g,2);const v=_t(()=>[d.fill[0]*n(),d.fill[1]*n(),d.fill[2]*n()]);en(x,()=>Vt.PointLight,(I,L)=>{L(I,{get position(){return le(v)},get intensity(){return t()}})});var N=ci(x,2);const E=_t(()=>[0,-l()/2-h()/2,0]);en(N,()=>Vt.Group,(I,L)=>{L(I,{get position(){return le(E)},children:(w,S)=>{var F=Tt(),k=ht(F);{var H=W=>{const K=_t(()=>n()*4);TE(W,{get scale(){return le(K)},get far(){return n()},blur:2})};In(k,W=>{i()&&W(H)})}lt(w,F)},$$slots:{default:!0}})}),lt(s,f)}var bT=Pi("<!> <!>",1),MT=Pi("<!> <!>",1);function Sp(s,e){hi(e,!0);let t=Ke(e,"onselectionchange",3,void 0),n=Ke(e,"opacity",3,1);const i=_t(()=>{var h;return(h=e.link)!=null&&h.highlight?bn.highlightColor:gT(e.visual?e.visual.color_rgba:void 0)}),r=h=>{h.stopPropagation(),t()&&t()(bn.selection,e.link),bn.selection=e.link};Og();const o=h=>[h[0]+Math.PI/2,h[1],h[2]];var a=Tt(),c=ht(a);{var l=h=>{var u=Tt(),d=ht(u);{var f=_=>{var g=Tt(),m=ht(g);{var y=v=>{const N=_t(()=>e.visual.origin_xyz||[0,0,0]),E=_t(()=>e.visual.origin_rpy||[0,0,0]),I=_t(()=>e.visual.geometry.scale||[1,1,1]);mT(v,{onclick:r,get filename(){return e.visual.geometry.filename},get position(){return le(N)},get rotation(){return le(E)},get color(){return le(i)},get opacity(){return n()},get scale(){return le(I)}})},x=v=>{var N=Tt(),E=ht(N);{var I=L=>{const w=_t(()=>e.visual.origin_xyz||[0,0,0]),S=_t(()=>e.visual.origin_rpy||[0,0,0]),F=_t(()=>e.visual.geometry.scale||[1,1,1]);dT(L,{onclick:r,get filename(){return e.visual.geometry.filename},get position(){return le(w)},get rotation(){return le(S)},get color(){return le(i)},get scale(){return le(F)}})};In(E,L=>{e.visual.geometry.type==="dae"&&L(I)},!0)}lt(v,N)};In(m,v=>{e.visual.geometry.type==="stl"?v(y):v(x,!1)})}lt(_,g)},p=_=>{var g=Tt(),m=ht(g);{var y=v=>{var N=Tt(),E=ht(N);const I=_t(()=>e.visual.origin_xyz||[0,0,0]),L=_t(()=>o(e.visual.origin_rpy||[0,0,0]));en(E,()=>Vt.Mesh,(w,S)=>{S(w,{castShadow:!0,receiveShadow:!0,onclick:r,get position(){return le(I)},get rotation(){return le(L)},children:(F,k)=>{var H=bT(),W=ht(H);const K=_t(()=>[e.visual.geometry.radius,e.visual.geometry.radius,e.visual.geometry.length]);en(W,()=>Vt.CylinderGeometry,(V,j)=>{j(V,{get args(){return le(K)}})});var B=ci(W,2);const $=_t(()=>n()<1);en(B,()=>Vt.MeshBasicMaterial,(V,j)=>{j(V,{get color(){return le(i)},get opacity(){return n()},get transparent(){return le($)}})}),lt(F,H)},$$slots:{default:!0}})}),lt(v,N)},x=v=>{var N=Tt(),E=ht(N);{var I=L=>{var w=Tt(),S=ht(w);const F=_t(()=>e.visual.geometry.size||[1,1,1]),k=_t(()=>e.visual.origin_xyz||[0,0,0]),H=_t(()=>e.visual.origin_rpy||[0,0,0]);en(S,()=>Vt.Mesh,(W,K)=>{K(W,{castShadow:!0,receiveShadow:!0,get scale(){return le(F)},onclick:r,get position(){return le(k)},get rotation(){return le(H)},children:(B,$)=>{var V=MT(),j=ht(V);en(j,()=>Vt.BoxGeometry,(Me,xe)=>{xe(Me,{})});var ce=ci(j,2);const ue=_t(()=>n()<1);en(ce,()=>Vt.MeshBasicMaterial,(Me,xe)=>{xe(Me,{get color(){return le(i)},get opacity(){return n()},get transparent(){return le(ue)}})}),lt(B,V)},$$slots:{default:!0}})}),lt(L,w)};In(E,L=>{e.visual.type==="box"&&L(I)},!0)}lt(v,N)};In(m,v=>{e.visual.type==="cylinder"?v(y):v(x,!1)})}lt(_,g)};In(d,_=>{e.visual.type==="mesh"&&e.visual.geometry?_(f):_(p,!1)})}lt(h,u)};In(c,h=>{e.visual&&h(l)})}lt(s,a),ui()}var ST=Pi("<!> <!>",1),wT=Pi("<!> <!>",1);function Vg(s,e){hi(e,!0);let t=Ke(e,"onselectionchange",3,void 0),n=Ke(e,"onchange",3,void 0);fu(()=>{e.joint.type=="continuous"&&e.joint.name?bn.continuousJoints[e.joint.name]=e.joint:e.joint.type=="revolute"&&e.joint.name&&(bn.revoluteJoints[e.joint.name]=e.joint)});var i=wT(),r=ht(i);pu(r,()=>`<!-- Joint ${e.joint.name} (${e.joint.type}) -->`);var o=ci(r,2);{var a=c=>{var l=ST(),h=ht(l);{var u=p=>{var _=Tt(),g=ht(_);vo(g,17,()=>e.joint.child.visual,xo,(m,y)=>{const x=_t(()=>bn.selection==e.joint.child);Mp(m,{get onchange(){return n()},get joint(){return e.joint},get selected(){return le(x)},children:(v,N)=>{Sp(v,{get opacity(){return bn.visualOpacity},get visual(){return le(y)},get link(){return e.joint.child},get onselectionchange(){return t()}})},$$slots:{default:!0}})}),lt(p,_)},d=p=>{var _=Tt(),g=ht(_);{var m=y=>{var x=Tt(),v=ht(x);vo(v,17,()=>e.joint.child.collision,xo,(N,E)=>{const I=_t(()=>bn.selection==e.joint.child);Mp(N,{get onchange(){return n()},get joint(){return e.joint},get selected(){return le(I)},children:(L,w)=>{Sp(L,{get opacity(){return bn.collisionOpacity},get visual(){return le(E)},get link(){return e.joint.child},get onselectionchange(){return t()}})},$$slots:{default:!0}})}),lt(y,x)};In(g,y=>{bn.display=="collision"&&y(m)},!0)}lt(p,_)};In(h,p=>{bn.display=="visual"?p(u):p(d,!1)})}var f=ci(h,2);vo(f,17,()=>vT(bn.robot,e.joint.child),xo,(p,_)=>{Vg(p,{get onchange(){return n()},get onselectionchange(){return t()},get joint(){return le(_)}})}),lt(c,l)};In(o,c=>{bn.robot&&c(a)})}lt(s,i),ui()}function HT(s,e){hi(e,!0);let t=Ke(e,"position",19,()=>[0,0,0]),n=Ke(e,"quaternion",7),i=Ke(e,"onselectionchange",3,void 0),r=Ke(e,"onchange",3,void 0);if(!n()){const l=new Bt;l.setFromAxisAngle(new C(-1,0,0),Math.PI*.5),n([l.x,l.y,l.z,l.w])}var o=Tt(),a=ht(o);{var c=l=>{var h=Tt(),u=ht(h);en(u,()=>Vt.Group,(d,f)=>{f(d,{get position(){return t()},get quaternion(){return n()},children:(p,_)=>{var g=Tt(),m=ht(g);vo(m,17,()=>_T(bn.robot),xo,(y,x)=>{Vg(y,{get joint(){return le(x)},get onchange(){return r()},get onselectionchange(){return i()}})}),lt(p,g)},$$slots:{default:!0}})}),lt(l,h)};In(a,l=>{bn.robot&&l(c)})}lt(s,o),ui()}export{OT as C,kT as G,BT as O,Vt as T,zT as U,bg as W,VT as a,UT as b,HT as c,_T as d,vT as g,NT as s,bn as u};
