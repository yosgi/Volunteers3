import{a as t}from"./chunk-74GQJJ7R.js";import{a as e}from"./chunk-FMRIJYNG.js";import{a as r}from"./chunk-T7ERZ2CJ.js";import{b as i,c as o,d as n}from"./chunk-GSNDLQ4C.js";import{b as a,d as s}from"./chunk-BKSIEBAA.js";import{a as f,b as h,f as u}from"./chunk-YWRPWWKI.js";import{a as p}from"./chunk-VTVHUB7E.js";import{a as l,e as c}from"./chunk-JMSSU44E.js";import{a as m}from"./chunk-4UYSGV57.js";import{a as w}from"./chunk-VLPNAR64.js";import{a as d,b as _}from"./chunk-GE5NEIZC.js";import{e as g}from"./chunk-35CVRQTC.js";function y(t){this.planes=w(t,[])}var v=[new l,new l,new l];l.clone(l.UNIT_X,v[0]),l.clone(l.UNIT_Y,v[1]),l.clone(l.UNIT_Z,v[2]);var b=new l,x=new l,E=new e(new l(1,0,0),0);function O(t){t=w(t,w.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=w(t.near,1),this._near=this.near,this.far=w(t.far,5e8),this._far=this.far,this._cullingVolume=new y,this._orthographicMatrix=new h}function R(t){if(!g(t.right)||!g(t.left)||!g(t.top)||!g(t.bottom)||!g(t.near)||!g(t.far))throw new d("right, left, top, bottom, near, or far parameters are not set.");if(t.top!==t._top||t.bottom!==t._bottom||t.left!==t._left||t.right!==t._right||t.near!==t._near||t.far!==t._far){if(t.left>t.right)throw new d("right must be greater than left.");if(t.bottom>t.top)throw new d("top must be greater than bottom.");if(t.near<=0||t.near>t.far)throw new d("near must be greater than zero and less than far.");t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=h.computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix)}}y.fromBoundingSphere=function(t,e){if(!g(t))throw new d("boundingSphere is required.");g(e)||(e=new y);let r=v.length,i=e.planes;i.length=2*r;let o=t.center,n=t.radius,a=0;for(let t=0;t<r;++t){let e=v[t],r=i[a],s=i[a+1];g(r)||(r=i[a]=new f),g(s)||(s=i[a+1]=new f),l.multiplyByScalar(e,-n,b),l.add(o,b,b),r.x=e.x,r.y=e.y,r.z=e.z,r.w=-l.dot(e,b),l.multiplyByScalar(e,n,b),l.add(o,b,b),s.x=-e.x,s.y=-e.y,s.z=-e.z,s.w=-l.dot(l.negate(e,x),b),a+=2}return e},y.prototype.computeVisibility=function(t){if(!g(t))throw new d("boundingVolume is required.");let r=this.planes,i=!1;for(let o=0,n=r.length;o<n;++o){let n=t.intersectPlane(e.fromCartesian4(r[o],E));if(n===a.OUTSIDE)return a.OUTSIDE;n===a.INTERSECTING&&(i=!0)}return i?a.INTERSECTING:a.INSIDE},y.prototype.computeVisibilityWithPlaneMask=function(t,r){if(!g(t))throw new d("boundingVolume is required.");if(!g(r))throw new d("parentPlaneMask is required.");if(r===y.MASK_OUTSIDE||r===y.MASK_INSIDE)return r;let i=y.MASK_INSIDE,o=this.planes;for(let n=0,s=o.length;n<s;++n){let s=n<31?1<<n:0;if(n<31&&(r&s)==0)continue;let f=t.intersectPlane(e.fromCartesian4(o[n],E));if(f===a.OUTSIDE)return y.MASK_OUTSIDE;f===a.INTERSECTING&&(i|=s)}return i},y.MASK_OUTSIDE=0xffffffff,y.MASK_INSIDE=0,y.MASK_INDETERMINATE=0x7fffffff,Object.defineProperties(O.prototype,{projectionMatrix:{get:function(){return R(this),this._orthographicMatrix}}});var C=new l,z=new l,k=new l,q=new l;function F(t){t=w(t,w.EMPTY_OBJECT),this._offCenterFrustum=new O,this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=w(t.near,1),this._near=this.near,this.far=w(t.far,5e8),this._far=this.far}function S(t){if(!g(t.width)||!g(t.aspectRatio)||!g(t.near)||!g(t.far))throw new d("width, aspectRatio, near, or far parameters are not set.");let e=t._offCenterFrustum;if(t.width!==t._width||t.aspectRatio!==t._aspectRatio||t.near!==t._near||t.far!==t._far){if(t.aspectRatio<0)throw new d("aspectRatio must be positive.");if(t.near<0||t.near>t.far)throw new d("near must be greater than zero and less than far.");t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far;let r=1/t.aspectRatio;e.right=.5*t.width,e.left=-e.right,e.top=r*e.right,e.bottom=-e.top,e.near=t.near,e.far=t.far}}O.prototype.computeCullingVolume=function(t,e,r){if(!g(t))throw new d("position is required.");if(!g(e))throw new d("direction is required.");if(!g(r))throw new d("up is required.");let i=this._cullingVolume.planes,o=this.top,n=this.bottom,a=this.right,s=this.left,h=this.near,u=this.far,p=l.cross(e,r,C);l.normalize(p,p),l.multiplyByScalar(e,h,z),l.add(t,z,z),l.multiplyByScalar(p,s,k),l.add(z,k,k);let c=i[0];return g(c)||(c=i[0]=new f),c.x=p.x,c.y=p.y,c.z=p.z,c.w=-l.dot(p,k),l.multiplyByScalar(p,a,k),l.add(z,k,k),g(c=i[1])||(c=i[1]=new f),c.x=-p.x,c.y=-p.y,c.z=-p.z,c.w=-l.dot(l.negate(p,q),k),l.multiplyByScalar(r,n,k),l.add(z,k,k),g(c=i[2])||(c=i[2]=new f),c.x=r.x,c.y=r.y,c.z=r.z,c.w=-l.dot(r,k),l.multiplyByScalar(r,o,k),l.add(z,k,k),g(c=i[3])||(c=i[3]=new f),c.x=-r.x,c.y=-r.y,c.z=-r.z,c.w=-l.dot(l.negate(r,q),k),g(c=i[4])||(c=i[4]=new f),c.x=e.x,c.y=e.y,c.z=e.z,c.w=-l.dot(e,z),l.multiplyByScalar(e,u,k),l.add(t,k,k),g(c=i[5])||(c=i[5]=new f),c.x=-e.x,c.y=-e.y,c.z=-e.z,c.w=-l.dot(l.negate(e,q),k),this._cullingVolume},O.prototype.getPixelDimensions=function(t,e,r,i,o){if(R(this),!g(t)||!g(e))throw new d("Both drawingBufferWidth and drawingBufferHeight are required.");if(t<=0)throw new d("drawingBufferWidth must be greater than zero.");if(e<=0)throw new d("drawingBufferHeight must be greater than zero.");if(!g(r))throw new d("distance is required.");if(!g(i))throw new d("pixelRatio is required.");if(i<=0)throw new d("pixelRatio must be greater than zero.");if(!g(o))throw new d("A result object is required.");let n=this.right-this.left,a=i*(this.top-this.bottom)/e;return o.x=i*n/t,o.y=a,o},O.prototype.clone=function(t){return g(t)||(t=new O),t.left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},O.prototype.equals=function(t){return g(t)&&t instanceof O&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},O.prototype.equalsEpsilon=function(t,e,r){return t===this||g(t)&&t instanceof O&&m.equalsEpsilon(this.right,t.right,e,r)&&m.equalsEpsilon(this.left,t.left,e,r)&&m.equalsEpsilon(this.top,t.top,e,r)&&m.equalsEpsilon(this.bottom,t.bottom,e,r)&&m.equalsEpsilon(this.near,t.near,e,r)&&m.equalsEpsilon(this.far,t.far,e,r)},F.packedLength=4,F.pack=function(t,e,r){return _.typeOf.object("value",t),_.defined("array",e),r=w(r,0),e[r++]=t.width,e[r++]=t.aspectRatio,e[r++]=t.near,e[r]=t.far,e},F.unpack=function(t,e,r){return _.defined("array",t),e=w(e,0),g(r)||(r=new F),r.width=t[e++],r.aspectRatio=t[e++],r.near=t[e++],r.far=t[e],r},Object.defineProperties(F.prototype,{projectionMatrix:{get:function(){return S(this),this._offCenterFrustum.projectionMatrix}},offCenterFrustum:{get:function(){return S(this),this._offCenterFrustum}}}),F.prototype.computeCullingVolume=function(t,e,r){return S(this),this._offCenterFrustum.computeCullingVolume(t,e,r)},F.prototype.getPixelDimensions=function(t,e,r,i,o){return S(this),this._offCenterFrustum.getPixelDimensions(t,e,r,i,o)},F.prototype.clone=function(t){return g(t)||(t=new F),t.aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},F.prototype.equals=function(t){return!!g(t)&&t instanceof F&&(S(this),S(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},F.prototype.equalsEpsilon=function(t,e,r){return!!g(t)&&t instanceof F&&(S(this),S(t),m.equalsEpsilon(this.width,t.width,e,r)&&m.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,r)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,r))};var T=F;function P(t){t=w(t,w.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=w(t.near,1),this._near=this.near,this.far=w(t.far,5e8),this._far=this.far,this._cullingVolume=new y,this._perspectiveMatrix=new h,this._infinitePerspective=new h}function M(t){if(!g(t.right)||!g(t.left)||!g(t.top)||!g(t.bottom)||!g(t.near)||!g(t.far))throw new d("right, left, top, bottom, near, or far parameters are not set.");let{top:e,bottom:r,right:i,left:o,near:n,far:a}=t;if(e!==t._top||r!==t._bottom||o!==t._left||i!==t._right||n!==t._near||a!==t._far){if(t.near<=0||t.near>t.far)throw new d("near must be greater than zero and less than far.");t._left=o,t._right=i,t._top=e,t._bottom=r,t._near=n,t._far=a,t._perspectiveMatrix=h.computePerspectiveOffCenter(o,i,r,e,n,a,t._perspectiveMatrix),t._infinitePerspective=h.computeInfinitePerspectiveOffCenter(o,i,r,e,n,t._infinitePerspective)}}Object.defineProperties(P.prototype,{projectionMatrix:{get:function(){return M(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return M(this),this._infinitePerspective}}});var B=new l,j=new l,I=new l,A=new l;function D(t){t=w(t,w.EMPTY_OBJECT),this._offCenterFrustum=new P,this.fov=t.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=w(t.near,1),this._near=this.near,this.far=w(t.far,5e8),this._far=this.far,this.xOffset=w(t.xOffset,0),this._xOffset=this.xOffset,this.yOffset=w(t.yOffset,0),this._yOffset=this.yOffset}function N(t){if(!g(t.fov)||!g(t.aspectRatio)||!g(t.near)||!g(t.far))throw new d("fov, aspectRatio, near, or far parameters are not set.");if(t.fov===t._fov&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far&&t.xOffset===t._xOffset&&t.yOffset===t._yOffset)return;if(_.typeOf.number.greaterThanOrEquals("fov",t.fov,0),_.typeOf.number.lessThan("fov",t.fov,Math.PI),_.typeOf.number.greaterThanOrEquals("aspectRatio",t.aspectRatio,0),_.typeOf.number.greaterThanOrEquals("near",t.near,0),t.near>t.far)throw new d("near must be less than far.");t._aspectRatio=t.aspectRatio,t._fov=t.fov,t._fovy=t.aspectRatio<=1?t.fov:2*Math.atan(Math.tan(.5*t.fov)/t.aspectRatio),t._near=t.near,t._far=t.far,t._sseDenominator=2*Math.tan(.5*t._fovy),t._xOffset=t.xOffset,t._yOffset=t.yOffset;let e=t._offCenterFrustum;e.top=t.near*Math.tan(.5*t._fovy),e.bottom=-e.top,e.right=t.aspectRatio*e.top,e.left=-e.right,e.near=t.near,e.far=t.far,e.right+=t.xOffset,e.left+=t.xOffset,e.top+=t.yOffset,e.bottom+=t.yOffset}P.prototype.computeCullingVolume=function(t,e,r){if(!g(t))throw new d("position is required.");if(!g(e))throw new d("direction is required.");if(!g(r))throw new d("up is required.");let i=this._cullingVolume.planes,o=this.top,n=this.bottom,a=this.right,s=this.left,h=this.near,u=this.far,p=l.cross(e,r,B);l.multiplyByScalar(e,h,j),l.add(t,j,j),l.multiplyByScalar(e,u,I),l.add(t,I,I),l.multiplyByScalar(p,s,A),l.add(j,A,A),l.subtract(A,t,A),l.normalize(A,A),l.cross(A,r,A),l.normalize(A,A);let c=i[0];return g(c)||(c=i[0]=new f),c.x=A.x,c.y=A.y,c.z=A.z,c.w=-l.dot(A,t),l.multiplyByScalar(p,a,A),l.add(j,A,A),l.subtract(A,t,A),l.cross(r,A,A),l.normalize(A,A),g(c=i[1])||(c=i[1]=new f),c.x=A.x,c.y=A.y,c.z=A.z,c.w=-l.dot(A,t),l.multiplyByScalar(r,n,A),l.add(j,A,A),l.subtract(A,t,A),l.cross(p,A,A),l.normalize(A,A),g(c=i[2])||(c=i[2]=new f),c.x=A.x,c.y=A.y,c.z=A.z,c.w=-l.dot(A,t),l.multiplyByScalar(r,o,A),l.add(j,A,A),l.subtract(A,t,A),l.cross(A,p,A),l.normalize(A,A),g(c=i[3])||(c=i[3]=new f),c.x=A.x,c.y=A.y,c.z=A.z,c.w=-l.dot(A,t),g(c=i[4])||(c=i[4]=new f),c.x=e.x,c.y=e.y,c.z=e.z,c.w=-l.dot(e,j),l.negate(e,A),g(c=i[5])||(c=i[5]=new f),c.x=A.x,c.y=A.y,c.z=A.z,c.w=-l.dot(A,I),this._cullingVolume},P.prototype.getPixelDimensions=function(t,e,r,i,o){if(M(this),!g(t)||!g(e))throw new d("Both drawingBufferWidth and drawingBufferHeight are required.");if(t<=0)throw new d("drawingBufferWidth must be greater than zero.");if(e<=0)throw new d("drawingBufferHeight must be greater than zero.");if(!g(r))throw new d("distance is required.");if(!g(i))throw new d("pixelRatio is required");if(i<=0)throw new d("pixelRatio must be greater than zero.");if(!g(o))throw new d("A result object is required.");let n=1/this.near,a=this.top*n,s=2*i*r*a/e;return o.x=2*i*r*(a=this.right*n)/t,o.y=s,o},P.prototype.clone=function(t){return g(t)||(t=new P),t.right=this.right,t.left=this.left,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},P.prototype.equals=function(t){return g(t)&&t instanceof P&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},P.prototype.equalsEpsilon=function(t,e,r){return t===this||g(t)&&t instanceof P&&m.equalsEpsilon(this.right,t.right,e,r)&&m.equalsEpsilon(this.left,t.left,e,r)&&m.equalsEpsilon(this.top,t.top,e,r)&&m.equalsEpsilon(this.bottom,t.bottom,e,r)&&m.equalsEpsilon(this.near,t.near,e,r)&&m.equalsEpsilon(this.far,t.far,e,r)},D.packedLength=6,D.pack=function(t,e,r){return _.typeOf.object("value",t),_.defined("array",e),r=w(r,0),e[r++]=t.fov,e[r++]=t.aspectRatio,e[r++]=t.near,e[r++]=t.far,e[r++]=t.xOffset,e[r]=t.yOffset,e},D.unpack=function(t,e,r){return _.defined("array",t),e=w(e,0),g(r)||(r=new D),r.fov=t[e++],r.aspectRatio=t[e++],r.near=t[e++],r.far=t[e++],r.xOffset=t[e++],r.yOffset=t[e],r},Object.defineProperties(D.prototype,{projectionMatrix:{get:function(){return N(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return N(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return N(this),this._fovy}},sseDenominator:{get:function(){return N(this),this._sseDenominator}},offCenterFrustum:{get:function(){return N(this),this._offCenterFrustum}}}),D.prototype.computeCullingVolume=function(t,e,r){return N(this),this._offCenterFrustum.computeCullingVolume(t,e,r)},D.prototype.getPixelDimensions=function(t,e,r,i,o){return N(this),this._offCenterFrustum.getPixelDimensions(t,e,r,i,o)},D.prototype.clone=function(t){return g(t)||(t=new D),t.aspectRatio=this.aspectRatio,t.fov=this.fov,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._fov=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},D.prototype.equals=function(t){return!!g(t)&&t instanceof D&&(N(this),N(t),this.fov===t.fov&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},D.prototype.equalsEpsilon=function(t,e,r){return!!g(t)&&t instanceof D&&(N(this),N(t),m.equalsEpsilon(this.fov,t.fov,e,r)&&m.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,r)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,r))};var L=D;function V(e){_.typeOf.object("options",e),_.typeOf.object("options.frustum",e.frustum),_.typeOf.object("options.origin",e.origin),_.typeOf.object("options.orientation",e.orientation);let r=e.frustum,i=e.orientation,o=e.origin,n=w(e.vertexFormat,t.DEFAULT),a=w(e._drawNearPlane,!0),s,f;r instanceof L?(s=0,f=L.packedLength):r instanceof T&&(s=1,f=T.packedLength),this._frustumType=s,this._frustum=r.clone(),this._origin=l.clone(o),this._orientation=u.clone(i),this._drawNearPlane=a,this._vertexFormat=n,this._workerName="createFrustumGeometry",this.packedLength=2+f+l.packedLength+u.packedLength+t.packedLength}V.pack=function(e,r,i){_.typeOf.object("value",e),_.defined("array",r),i=w(i,0);let o=e._frustumType,n=e._frustum;return r[i++]=o,0===o?(L.pack(n,r,i),i+=L.packedLength):(T.pack(n,r,i),i+=T.packedLength),l.pack(e._origin,r,i),i+=l.packedLength,u.pack(e._orientation,r,i),i+=u.packedLength,t.pack(e._vertexFormat,r,i),r[i+=t.packedLength]=+!!e._drawNearPlane,r};var U=new L,G=new T,J=new u,K=new l,W=new t;function Y(t,e,r,i,o,n,a,s){let f=t/3*2;for(let o=0;o<4;++o)g(e)&&(e[t]=n.x,e[t+1]=n.y,e[t+2]=n.z),g(r)&&(r[t]=a.x,r[t+1]=a.y,r[t+2]=a.z),g(i)&&(i[t]=s.x,i[t+1]=s.y,i[t+2]=s.z),t+=3;o[f]=0,o[f+1]=0,o[f+2]=1,o[f+3]=0,o[f+4]=1,o[f+5]=1,o[f+6]=0,o[f+7]=1}V.unpack=function(e,r,i){_.defined("array",e),r=w(r,0);let o=e[r++],n;0===o?(n=L.unpack(e,r,U),r+=L.packedLength):(n=T.unpack(e,r,G),r+=T.packedLength);let a=l.unpack(e,r,K);r+=l.packedLength;let s=u.unpack(e,r,J);r+=u.packedLength;let f=t.unpack(e,r,W),h=1===e[r+=t.packedLength];if(!g(i))return new V({frustum:n,origin:a,orientation:s,vertexFormat:f,_drawNearPlane:h});let p=o===i._frustumType?i._frustum:void 0;return i._frustum=n.clone(p),i._frustumType=o,i._origin=l.clone(a,i._origin),i._orientation=u.clone(s,i._orientation),i._vertexFormat=t.clone(f,i._vertexFormat),i._drawNearPlane=h,i};var H=new c,Q=new h,Z=new h,X=new l,$=new l,tt=new l,te=new l,tr=new l,ti=new l,to=[,,,],tn=[,,,,];tn[0]=new f(-1,-1,1,1),tn[1]=new f(1,-1,1,1),tn[2]=new f(1,1,1,1),tn[3]=new f(-1,1,1,1);var ta=[,,,,];for(let t=0;t<4;++t)ta[t]=new f;V._computeNearFarPlanes=function(t,e,r,i,o,n,a,s){let u=c.fromQuaternion(e,H),p=w(n,X),m=w(a,$),d=w(s,tt);p=c.getColumn(u,0,p),m=c.getColumn(u,1,m),d=c.getColumn(u,2,d),l.normalize(p,p),l.normalize(m,m),l.normalize(d,d),l.negate(p,p);let _=h.computeView(t,d,m,p,Q),y,v,b=i.projectionMatrix;if(0===r){let t=h.multiply(b,_,Z);v=h.inverse(t,Z)}else y=h.inverseTransformation(_,Z);g(v)?(to[0]=i.near,to[1]=i.far):(to[0]=0,to[1]=i.near,to[2]=i.far);for(let e=0;e<2;++e)for(let r=0;r<4;++r){let n=f.clone(tn[r],ta[r]);if(g(v)){let r=1/(n=h.multiplyByVector(v,n,n)).w;l.multiplyByScalar(n,r,n),l.subtract(n,t,n),l.normalize(n,n);let i=l.dot(d,n);l.multiplyByScalar(n,to[e]/i,n),l.add(n,t,n)}else{let t=i.offCenterFrustum;g(t)&&(i=t);let r=to[e],o=to[e+1];n.x=(n.x*(i.right-i.left)+i.left+i.right)*.5,n.y=(n.y*(i.top-i.bottom)+i.bottom+i.top)*.5,n.z=(n.z*(r-o)-r-o)*.5,n.w=1,h.multiplyByVector(y,n,n)}o[12*e+3*r]=n.x,o[12*e+3*r+1]=n.y,o[12*e+3*r+2]=n.z}},V.createGeometry=function(t){let e=t._frustumType,a=t._frustum,f=t._origin,h=t._orientation,u=t._drawNearPlane,c=t._vertexFormat,m=u?6:5,w=new Float64Array(72);V._computeNearFarPlanes(f,h,e,a,w);let d=24;w[24]=w[12],w[d+1]=w[13],w[d+2]=w[14],w[d+3]=w[0],w[d+4]=w[1],w[d+5]=w[2],w[d+6]=w[9],w[d+7]=w[10],w[d+8]=w[11],w[d+9]=w[21],w[d+10]=w[22],w[d+11]=w[23],w[d+=12]=w[15],w[d+1]=w[16],w[d+2]=w[17],w[d+3]=w[3],w[d+4]=w[4],w[d+5]=w[5],w[d+6]=w[0],w[d+7]=w[1],w[d+8]=w[2],w[d+9]=w[12],w[d+10]=w[13],w[d+11]=w[14],w[d+=12]=w[3],w[d+1]=w[4],w[d+2]=w[5],w[d+3]=w[15],w[d+4]=w[16],w[d+5]=w[17],w[d+6]=w[18],w[d+7]=w[19],w[d+8]=w[20],w[d+9]=w[6],w[d+10]=w[7],w[d+11]=w[8],w[d+=12]=w[6],w[d+1]=w[7],w[d+2]=w[8],w[d+3]=w[18],w[d+4]=w[19],w[d+5]=w[20],w[d+6]=w[21],w[d+7]=w[22],w[d+8]=w[23],w[d+9]=w[9],w[d+10]=w[10],w[d+11]=w[11],u||(w=w.subarray(12));let _=new r({position:new n({componentDatatype:p.DOUBLE,componentsPerAttribute:3,values:w})});if(g(c.normal)||g(c.tangent)||g(c.bitangent)||g(c.st)){let t=g(c.normal)?new Float32Array(12*m):void 0,e=g(c.tangent)?new Float32Array(12*m):void 0,r=g(c.bitangent)?new Float32Array(12*m):void 0,i=g(c.st)?new Float32Array(8*m):void 0,o=l.negate(X,te),a=l.negate($,tr),s=l.negate(tt,ti);d=0,u&&(Y(d,t,e,r,i,s,X,$),d+=12),Y(d,t,e,r,i,tt,o,$),Y(d+=12,t,e,r,i,o,s,$),Y(d+=12,t,e,r,i,a,s,o),Y(d+=12,t,e,r,i,X,tt,$),Y(d+=12,t,e,r,i,$,tt,o),g(t)&&(_.normal=new n({componentDatatype:p.FLOAT,componentsPerAttribute:3,values:t})),g(e)&&(_.tangent=new n({componentDatatype:p.FLOAT,componentsPerAttribute:3,values:e})),g(r)&&(_.bitangent=new n({componentDatatype:p.FLOAT,componentsPerAttribute:3,values:r})),g(i)&&(_.st=new n({componentDatatype:p.FLOAT,componentsPerAttribute:2,values:i}))}let y=new Uint16Array(6*m);for(let t=0;t<m;++t){let e=6*t,r=4*t;y[e]=r,y[e+1]=r+1,y[e+2]=r+2,y[e+3]=r,y[e+4]=r+2,y[e+5]=r+3}return new o({attributes:_,indices:y,primitiveType:i.TRIANGLES,boundingSphere:s.fromVertices(w)})};var ts=V;export{T as a,L as b,ts as c};