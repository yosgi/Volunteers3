import{f as e}from"./chunk-YWRPWWKI.js";import{a as t,e as r}from"./chunk-JMSSU44E.js";import{a as a}from"./chunk-4UYSGV57.js";var o={},i=new t,l=new t,n=new e,s=new r;function y(a,o,y,c,m,u,x,h,f,z){let _=a+o;t.multiplyByScalar(c,Math.cos(_),i),t.multiplyByScalar(y,Math.sin(_),l),t.add(i,l,i);let p=Math.cos(a);p*=p;let O=Math.sin(a);O*=O;let P=u/Math.sqrt(x*p+m*O)/h;return e.fromAxisAngle(i,P,n),r.fromQuaternion(n,s),r.multiplyByVector(s,f,z),t.normalize(z,z),t.multiplyByScalar(z,h,z),z}var c=new t,m=new t,u=new t,x=new t;o.raisePositionsToHeight=function(e,r,a){let o=r.ellipsoid,i=r.height,l=r.extrudedHeight,n=new Float64Array(3*(a?e.length/3*2:e.length/3)),s=e.length,y=a?s:0;for(let r=0;r<s;r+=3){let s=r+1,h=r+2,f=t.fromArray(e,r,c);o.scaleToGeodeticSurface(f,f);let z=t.clone(f,m),_=o.geodeticSurfaceNormal(f,x),p=t.multiplyByScalar(_,i,u);t.add(f,p,f),a&&(t.multiplyByScalar(_,l,p),t.add(z,p,z),n[r+y]=z.x,n[s+y]=z.y,n[h+y]=z.z),n[r]=f.x,n[s]=f.y,n[h]=f.z}return n};var h=new t,f=new t,z=new t;o.computeEllipsePositions=function(e,r,o){let i=e.semiMinorAxis,l=e.semiMajorAxis,n=e.rotation,s=e.center,x=8*e.granularity,_=i*i,p=l*l,O=l*i,P=t.magnitude(s),d=t.normalize(s,h),M=t.cross(t.UNIT_Z,s,f);M=t.normalize(M,M);let w=t.cross(d,M,z),I=1+Math.ceil(a.PI_OVER_TWO/x),T=a.PI_OVER_TWO/(I-1),W=a.PI_OVER_TWO-I*T;W<0&&(I-=Math.ceil(Math.abs(W)/T));let g=I*(I+2)*2,E=r?Array(3*g):void 0,S=0,V=c,R=m,A=12*I,v=A-1,B=0,j=o?Array(A):void 0,k,U,G,H,N;for(V=y(W=a.PI_OVER_TWO,n,w,M,_,O,p,P,d,V),r&&(E[S++]=V.x,E[S++]=V.y,E[S++]=V.z),o&&(j[v--]=V.z,j[v--]=V.y,j[v--]=V.x),W=a.PI_OVER_TWO-T,k=1;k<I+1;++k){if(V=y(W,n,w,M,_,O,p,P,d,V),R=y(Math.PI-W,n,w,M,_,O,p,P,d,R),r){for(E[S++]=V.x,E[S++]=V.y,E[S++]=V.z,G=2*k+2,U=1;U<G-1;++U)H=U/(G-1),N=t.lerp(V,R,H,u),E[S++]=N.x,E[S++]=N.y,E[S++]=N.z;E[S++]=R.x,E[S++]=R.y,E[S++]=R.z}o&&(j[v--]=V.z,j[v--]=V.y,j[v--]=V.x,j[B++]=R.x,j[B++]=R.y,j[B++]=R.z),W=a.PI_OVER_TWO-(k+1)*T}for(k=I;k>1;--k){if(V=y(-(W=a.PI_OVER_TWO-(k-1)*T),n,w,M,_,O,p,P,d,V),R=y(W+Math.PI,n,w,M,_,O,p,P,d,R),r){for(E[S++]=V.x,E[S++]=V.y,E[S++]=V.z,G=2*(k-1)+2,U=1;U<G-1;++U)H=U/(G-1),N=t.lerp(V,R,H,u),E[S++]=N.x,E[S++]=N.y,E[S++]=N.z;E[S++]=R.x,E[S++]=R.y,E[S++]=R.z}o&&(j[v--]=V.z,j[v--]=V.y,j[v--]=V.x,j[B++]=R.x,j[B++]=R.y,j[B++]=R.z)}V=y(-(W=a.PI_OVER_TWO),n,w,M,_,O,p,P,d,V);let Y={};return r&&(E[S++]=V.x,E[S++]=V.y,E[S++]=V.z,Y.positions=E,Y.numPts=I),o&&(j[v--]=V.z,j[v--]=V.y,j[v--]=V.x,Y.outerPositions=j),Y};var _=o;export{_ as a};