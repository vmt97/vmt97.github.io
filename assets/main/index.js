System.register("chunks:///_virtual/Debug.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MapManager.ts","./Moving.ts","./MummySpawner.ts"],(function(e){"use strict";var t,n,i,a,u,s,l,o,r,m,d,p,c,h,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){u=e.cclegacy,s=e._decorator,l=e.Node,o=e.assetManager,r=e.sp,m=e.Texture2D,d=e.ImageAsset,p=e.Component},function(e){c=e.MapManager},function(e){h=e.Moving},function(e){g=e.MummySpawner}],execute:function(){var M,_,y,f,w,v,b,S,k;u._RF.push({},"40946zEf61Nd67fUS7bCEiG","Debug",void 0);var F=s.ccclass,V=s.property;e("Debug",(M=F("Debug"),_=V({type:l}),y=V({type:c}),f=V({type:g}),M((b=t((v=function(e){function t(){for(var t,n=arguments.length,u=new Array(n),s=0;s<n;s++)u[s]=arguments[s];return t=e.call.apply(e,[this].concat(u))||this,i(t,"gridRenderer",b,a(t)),i(t,"mapManager",S,a(t)),i(t,"mummySpawner",k,a(t)),t._selectedMenu=null,t.selectedMummy={anim:"",skin:"",speed:50,direction:"",x:"",y:"",z:"",col:"",row:"",zoneIndex:"",autoMove:!1,angle:""},t._debugMenu=null,t._debugFlags={drawGrid:!0},t._mapMenu=null,t._mapMenuOption={totalMummy:0},t._gui=null,t._inputFile=null,t._animView=null,t._skinView=null,t._minSpeed=50,t._maxSpeed=100,t.skeletonDataUpLoad=[],t}n(t,e);var u=t.prototype;return u.onLoad=function(){globalThis.dat&&globalThis.dat.gui&&this._loadMenu(),document.body.childNodes[document.body.childNodes.length-1].style.zIndex=999},u._loadMenu=function(){var e=this;this._gui=new globalThis.dat.gui.GUI,this._debugMenu=this._gui.addFolder("Debug Zone"),this._debugMenu.add(this._debugFlags,"drawGrid",!0).onChange((function(t){e.gridRenderer.active=t})),this._debugMenu.open(),this._selectedMenu=this._gui.addFolder("Selected Mummy"),this._animView=this._selectedMenu.add(this.selectedMummy,"anim",[""]),this._skinView=this._selectedMenu.add(this.selectedMummy,"skin",[""]),this._selectedMenu.add(this.selectedMummy,"autoMove",!1).onChange((function(t){var n=e.mapManager.getSelectedMummy();n&&n.getComponent(h).setAutoMove(t)})),this._selectedMenu.add(this.selectedMummy,"speed",1,100).onChange((function(t){var n=e.mapManager.getSelectedMummy();n&&n.getComponent(h).setSpeed(Number(t))})),this._selectedMenu.open(),this._mapMenu=this._gui.addFolder("Map"),this._mapMenuOption.loadMummy=function(){},this._inputFile=document.createElement("input"),this._inputFile.setAttribute("type","FILE"),this._inputFile.setAttribute("webkitdirectory",""),this._inputFile.setAttribute("multiple",""),this._inputFile.onchange=function(t){var n=t.target.files;e._loadFileInput(n),e._mapMenu.updateDisplay()},this._mapMenuOption.importSpine=function(){e._inputFile.click()},this._mapMenuOption.removeMummy=function(){e.mummySpawner.removeRandomOne(),e._mapMenuOption.totalMummy-=1,e._mapMenu.updateDisplay()},this._mapMenu.add(this._mapMenuOption,"importSpine"),this._mapMenu.add(this._mapMenuOption,"removeMummy"),this._mapMenu.open()},u._updateSelectedMummy=function(){var e=this.mapManager.getSelectedMummy();if(e){var t=e.getComponent(h);this.selectedMummy.speed=t.getSpeed(),this.selectedMummy.direction=t.getDirection(),this.selectedMummy.autoMove=t.isAutoMove(),this.selectedMummy.zoneIndex=this.mapManager.getDrawIndex(e.position),this.selectedMummy.angle=e.angle.toFixed(2),this._skinView&&this._skinView.setValue(t.getCurrentSkin()),this._selectedMenu.updateDisplay()}},u.update=function(e){this._updateSelectedMummy()},u._loadFileInput=function(e){for(var t=null,n=[],i=null,a=[],u=0;u<e.length;u++){var s=e[u],l=/\.[^.]*$/.exec(s.name);".json"===l[0]?t=s:".png"===l[0]?(n.push(s),a.push(s.name)):".atlas"===l[0]&&(i=s)}for(var o=this.getFileUrl(t),r=[],m=0;m<n.length;m++){var d=this.getFileUrl(n[m]);r.push(d)}var p=this.getFileUrl(i);this._loadSpine({urlSkeleton:o,urlTexture:r,urlAtlas:p},a)},u._loadSpine=function(e,t){var n=this,i=e.urlSkeleton,a=e.urlTexture,u=e.urlAtlas,s=[],l=[];a.forEach((function(e){l.push({url:e,ext:".png"})})),o.loadAny([{url:u,ext:".txt"},{url:i,ext:".txt"}],(function(e,i){o.loadAny(l,(function(e,a){var u=new r.SkeletonData;if(u.skeletonJson=i[1],u.atlasText=i[0],Array.isArray(a))a.forEach((function(e){var t=new m;t.image=new d(e),s.push(t)}));else{var l=new m;l.image=new d(a),s.push(l)}u.textures=s,u.textureNames=t,n.mummySpawner.spawnMummy(u),n.loadAnimView(),n._inputFile.value=""}))}))},u.loadAnimView=function(){var e=this;this._animView&&this._selectedMenu.remove(this._animView),this._skinView&&this._selectedMenu.remove(this._skinView);var t=this.mapManager.getSelectedMummy();if(t){var n=t.getComponent(h),i=n.getAnimationsName(),a=n.getSkinsName();this._animView=this._selectedMenu.add(this.selectedMummy,"anim",i),this._animView.setValue(n.getSpine()._animationName),this._animView.onChange((function(i){t&&e.mummySpawner.changeAnimByName(n,i)})),this._skinView=this._selectedMenu.add(this.selectedMummy,"skin",a),this._skinView.setValue(n.getCurrentSkin()),this._skinView.onChange((function(i){t&&e.mummySpawner.changeSkin(n,i)}))}},u.getFileUrl=function(e){return(window.URL||window.webkitURL).createObjectURL(e)},t}(p)).prototype,"gridRenderer",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(v.prototype,"mapManager",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(v.prototype,"mummySpawner",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=v))||w));u._RF.pop()}}}));

System.register("chunks:///_virtual/DragAndDrop.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,o,r,n,s,a,h,d,l,g,p,c,u,f,v,y;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){n=t.cclegacy,s=t._decorator,a=t.Node,h=t.CCInteger,d=t.UITransform,l=t.view,g=t.sys,p=t.Vec3,c=t.Event,u=t.tween,f=t.v3,v=t.UIOpacity,y=t.Component}],execute:function(){var T,H,b,D,O,E,w,m,C,X,z;n._RF.push({},"b45efPGuT5Lb5dYd+h06SUQ","DragAndDrop",void 0);var U=s.ccclass,S=s.property;t("DraggAndDrop",(T=U("DraggAndDrop"),H=S(a),b=S(a),D=S(h),T((w=i((E=function(t){function i(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).deltaX=0,i.deltaY=0,i.originalY=0,i.originalX=0,o(i,"dragHolder",w,r(i)),o(i,"overlay",m,r(i)),o(i,"opacity",C,r(i)),o(i,"stickToBorder",X,r(i)),o(i,"borderOffsetX",z,r(i)),i.moveTween=null,i.dragging=!1,i.borderLeftX=0,i.borderRightX=0,i.startPosition=null,i}e(i,t);var n=i.prototype;return n.onLoad=function(){this.dragHolder&&(this.dragHolder.on(a.EventType.TOUCH_START,this._onDragStart,this),this.dragHolder.on(a.EventType.TOUCH_MOVE,this._onDragMove,this),this.dragHolder.on(a.EventType.TOUCH_END,this._onDragEnd,this),this.overlay&&this.overlay.on(a.EventType.TOUCH_END,this._onOverlayTouchEnd,this),this.dragHolder.getComponent(d)||this.dragHolder.addComponent(d),this.calculateBorder(),globalThis.multislot=this)},n.calculateBorder=function(){var t=l.getDesignResolutionSize().width;g.isNative&&(t=l.getVisibleSize().width),this.borderLeftX=-t/2+this.borderOffsetX,this.borderRightX=t/2-this.borderOffsetX},n._onDragStart=function(t){this.startPosition=new p(this.node.position.x,this.node.position.y,this.node.position.z),this.dragging=!0,this.overlay&&(this.overlay.active=!0),this.originalX=this.dragHolder.position.x,this.originalY=this.dragHolder.position.y,this.deltaX=t.getLocationX()-this.dragHolder.position.x,this.deltaY=t.getLocationY()-this.dragHolder.position.y,this.setOpacity(this.dragHolder,100)},n._onDragMove=function(t){if(this.dragging){this.dragging=!0;var i=t.getUIDelta(),e=l.getVisibleSize().width,o=l.getVisibleSize().height,r=this.dragHolder.getComponent(d),n=r.width,s=r.height,a=-e/2+n/2,h=e/2-n/2,g=-o/2+s/2,p=o/2-s/2,c=this.dragHolder.position.x+i.x,u=this.dragHolder.position.y+i.y;c<a?c=a:c>h&&(c=h),u<g?u=g:u>p&&(u=p),this.dragHolder.setPosition(c,u)}},n._onDragEnd=function(t){Math.sqrt(Math.pow(this.dragHolder.position.x-this.originalX,2)+Math.pow(this.dragHolder.position.y-this.originalY,2))<10&&this.node.dispatchEvent(new c("BACK_TO_MULTI",!0)),this.dragging=!1;var i=new c("REQUEST_POSITION",!0);i.startPosition=this.startPosition,this.node.dispatchEvent(i),this.setOpacity(this.dragHolder,255)},n.easeOutBack=function(t){var i=1.70158;return 1+2.70158*Math.pow(t-1,3)+i*Math.pow(t-1,2)},n.moveToLeft=function(t){var i=this,e=_.clamp(t,.8,1.2);this.moveTween=u(this.node).to(e,{position:f(this.borderLeftX,this.node.position.y,this.node.position.z)},{easing:function(t){return i.easeOutBack(t)}}).start()},n.moveToRight=function(t){var i=this,e=_.clamp(t,.8,1.2);this.moveTween=u(this.node).to(e,{position:f(this.borderRightX,this.node.position.y,this.node.position.z)},{easing:function(t){return i.easeOutBack(t)}}).start()},n._onOverlayTouchEnd=function(t){this.overlay&&(this.overlay.active=!1),this.setOpacity(this.dragHolder,this.opacity)},n.onDestroy=function(){this.moveTween&&this.moveTween.stop(),this.dragHolder&&(this.dragHolder.off(a.EventType.TOUCH_START,this._onDragStart,this),this.dragHolder.off(a.EventType.TOUCH_MOVE,this._onDragMove,this),this.dragHolder.off(a.EventType.TOUCH_END,this._onDragEnd,this)),this.overlay&&this.overlay.off(a.EventType.TOUCH_END,this._onDragEnd,this)},n.setOpacity=function(t,i){var e=t.getComponent(v);null===e&&(e=t.addComponent(v)),e.opacity=i},i}(y)).prototype,"dragHolder",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=i(E.prototype,"overlay",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=i(E.prototype,"opacity",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 180}}),X=i(E.prototype,"stickToBorder",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),z=i(E.prototype,"borderOffsetX",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 30}}),O=E))||O));n._RF.pop()}}}));

System.register("chunks:///_virtual/DummyData.ts",["cc"],(function(c){"use strict";var r;return{setters:[function(c){r=c.cclegacy}],execute:function(){r._RF.push({},"81bc4J+5GlL/abiTddM4Eq8","DummyData",void 0);c("default",[{id:1,speed:50,path:[{r:23,c:10},{r:23,c:11},{r:23,c:12},{r:23,c:13},{r:22,c:13},{r:22,c:14},{r:22,c:15},{r:22,c:16},{r:22,c:17},{r:22,c:18},{r:22,c:19},{r:23,c:19},{r:24,c:19},{r:25,c:19},{r:26,c:19}]},{id:2,speed:30,path:[{r:23,c:10},{r:23,c:11},{r:23,c:12},{r:23,c:13},{r:22,c:13},{r:22,c:14},{r:22,c:15},{r:22,c:16},{r:22,c:17},{r:22,c:18},{r:22,c:19},{r:23,c:19},{r:24,c:19},{r:25,c:19},{r:26,c:19}]}]);r._RF.pop()}}}));

System.register("chunks:///_virtual/GridRenderer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MapManager.ts"],(function(i){"use strict";var t,e,r,n,o,a,s,h,d,l,g,p,c;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,r=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){o=i.cclegacy,a=i._decorator,s=i.Camera,h=i.Node,d=i.Graphics,l=i.Vec3,g=i.UITransform,p=i.Component},function(i){c=i.MapManager}],execute:function(){var _,u,m,f,v,y,G,T,C;o._RF.push({},"0514axyXDRAm5f6Dy+KbVFk","GridRenderer",void 0);var H=a.ccclass,M=a.property;i("GridRenderer",(_=H("GridRenderer"),u=M({type:s}),m=M({type:h}),f=M({type:h}),_((G=t((y=function(i){function t(){for(var t,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return t=i.call.apply(i,[this].concat(o))||this,r(t,"camera",G,n(t)),r(t,"gridHolder",T,n(t)),r(t,"pathLineHolder",C,n(t)),t._selectedGrid=[],t._selectedPath=[],t._gridGraphic=null,t._pathLineGraphic=null,t._mapManager=null,t._gridColumn=0,t._gridRow=0,t._gridWidth=0,t._gridHeight=0,t._startY=0,t._startX=0,t._mapData=null,t}e(t,i);var o=t.prototype;return o.start=function(){this._mapManager=this.node.parent.getComponent(c);var i=this._mapManager.getConfig();this._gridColumn=i.gridColumn,this._gridRow=i.gridRow,this._gridWidth=i.gridWidth,this._gridHeight=i.gridHeight,this._startX=i.startX,this._startY=i.startY,this._mapData=i.mapData,this._gridGraphic=this.gridHolder.getComponent(d),this._pathLineGraphic=this.pathLineHolder.getComponent(d),this.node.on(h.EventType.MOUSE_DOWN,this.onMouseDown,this),this.node.on(h.EventType.MOUSE_UP,this.onMouseUp,this),this.renderGrid(this._gridGraphic)},o.onMouseDown=function(i){var t=i.getLocation(new l),e=this.camera.screenToWorld(t,new l),r=this.node.getComponent(g).convertToNodeSpaceAR(e);console.log(r);var n=this.node.parent.getComponent(c).positionToGrid(r);console.log(n);var o=this.node.parent.getComponent(c).gridToPosition(n.row,n.col);console.log(o)},o.onMouseUp=function(i){this._selectedGrid.length>0&&console.log(this._selectedPath)},o.renderBlock=function(i,t,e){var r=this._mapManager.gridCenterToPosition(t,e),n=this._mapManager.getConfig();i.moveTo(r.x-n.gridWidth/2,r.y),i.lineTo(r.x,r.y+n.gridHeight/2),i.lineTo(r.x+n.gridWidth/2,r.y),i.lineTo(r.x,r.y-n.gridHeight/2),i.stroke(),i.fill()},o.renderGrid=function(i){i.clear(),i.lineWidth=4,i.fillColor.fromHEX("#ff0000");for(var t=0;t<=this._gridColumn;t++){var e=this._startX+t*this._gridWidth/2,r=this._startY-t*this._gridHeight/2;i.moveTo(e,r),i.lineTo(e-this._gridWidth/2*this._gridRow,r-this._gridHeight/2*this._gridRow)}for(var n=0;n<=this._gridRow;n++){var o=this._startX-n*this._gridWidth/2,a=this._startY-n*this._gridHeight/2;i.moveTo(o,a),i.lineTo(o+this._gridWidth/2*this._gridColumn,a-this._gridHeight/2*this._gridColumn)}i.stroke()},o.renderPathLine=function(i){if(this._pathLineGraphic){this._pathLineGraphic.moveTo(i[0].x,i[0].y);for(var t=1;t<i.length;t++)this._pathLineGraphic.lineTo(i[t].x,i[t].y);this._pathLineGraphic.stroke()}},t}(p)).prototype,"camera",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(y.prototype,"gridHolder",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(y.prototype,"pathLineHolder",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=y))||v));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Debug.ts","./MapConfig.ts","./DragAndDrop.ts","./DummyData.ts","./GridRenderer.ts","./MapManager.ts","./Moving.ts","./MummySpawner.ts","./MapGenerator.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MapConfig.ts",["cc"],(function(i){"use strict";var t;return{setters:[function(i){t=i.cclegacy}],execute:function(){t._RF.push({},"caab6Gh+JNLMZTfVVw67Hzw","MapConfig",void 0);i("MapConfig",function(){function i(i){this.gridSizeX=void 0,this.gridSizeY=void 0,this.gridWidth=void 0,this.gridHeight=void 0,this.startX=void 0,this.startY=void 0,this.gridSize=void 0;var t=i.gridSizeX,r=i.gridSizeY,h=i.gridWidth,s=i.gridHeight;this.gridSizeX=t,this.gridSizeY=r,this.gridWidth=h,this.gridHeight=s,this.startX=(r-t)/2*(h/2),this.startY=(t+r)/2*(s/2),this.gridSize=Math.sqrt(Math.pow(this.gridWidth/2,2)+Math.pow(this.gridHeight/2,2))}var t=i.prototype;return t.positionToGrid=function(i,t){return{X:Math.floor((this.startY-t)/this.gridHeight-(i-this.startX)/this.gridWidth),Y:Math.floor((i-this.startX)/this.gridWidth+(this.startY-t)/this.gridHeight)}},t.gridToPosition=function(i,t){return{x:this.startX+(t-i)*this.gridWidth/2,y:this.startY-(i+t)*this.gridHeight/2}},t.gridCenterToPosition=function(i,t){return{x:this.startX+(t-i)*this.gridWidth/2,y:this.startY-(i+t+1)*this.gridHeight/2}},t.gridIdToGrid=function(i){return{X:i%44,Y:Math.floor(i/44)}},i}());t._RF.pop()}}}));

System.register("chunks:///_virtual/MapGenerator.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MapConfig.ts"],(function(i){"use strict";var t,r,e,n,a,o,h,s,c,l,p,d,u,g,f,_;return{setters:[function(i){t=i.applyDecoratedDescriptor,r=i.inheritsLoose,e=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){a=i.cclegacy,o=i._decorator,h=i.Camera,s=i.Graphics,c=i.Node,l=i.Vec3,p=i.UITransform,d=i.Label,u=i.Color,g=i.UIOpacity,f=i.Component},function(i){_=i.MapConfig}],execute:function(){var G,m,v,T,C,y,b,P,E,M,L,w,A;a._RF.push({},"225877gc1tOx4tvhlJyiHvN","MapGenerator",void 0);var X,R=o.ccclass,H=o.property;!function(i){i[i.NONE=0]="NONE",i[i.CREATE_PATH=1]="CREATE_PATH",i[i.CREATE_OBSTACLE=2]="CREATE_OBSTACLE",i[i.CREATE_MUMMY=3]="CREATE_MUMMY"}(X||(X={}));i("MapGenerator",(G=R("MapGenerator"),m=H({type:h}),v=H(s),T=H(s),C=H(s),y=H(c),G((E=t((P=function(i){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=i.call.apply(i,[this].concat(a))||this,e(t,"camera",E,n(t)),e(t,"gridGraphic",M,n(t)),e(t,"pathGraphic",L,n(t)),e(t,"pathLineGraphic",w,n(t)),e(t,"labelHolder",A,n(t)),t.mapData=null,t._mapConfig=null,t._mapManager=null,t._labels={},t._currentLabel=null,t._allPaths=[],t._currentPath=null,t._action=X.CREATE_PATH,t}r(t,i);var a=t.prototype;return a.onLoad=function(){this._mapConfig=new _({gridSizeX:44,gridSizeY:44,gridWidth:72,gridHeight:36}),this.node.on(c.EventType.MOUSE_DOWN,this.onMouseDown,this,!1),this.node.on(c.EventType.MOUSE_MOVE,this.onMouseMove,this,!1),window.test=this},a.onMouseDown=function(i){var t=i.getLocation(new l),r=this.camera.screenToWorld(t,new l),e=this.node.getComponent(p).convertToNodeSpaceAR(r),n=this._mapConfig.positionToGrid(e.x,e.y);switch(console.log(n),this._action){case X.CREATE_PATH:return this._genPath(n)}},a._genPath=function(i){if(!this._currentPath)return this._currentPath=[],this.renderBlock(i.X,i.Y),void this._currentPath.push(i);var t=this._currentPath[this._currentPath.length-1];this._genRect(t,i),console.log(this._currentPath)},a._addPoint=function(i){var t=this._currentPath[this._currentPath.length-1],r=this._createLabel(i.X,i.Y);this.renderBlock(i.X,i.Y),this._drawLine(t,i),this._currentPath.push(i),this.pathGraphic.node.addChild(r),r._uiProps.colorDirty=!0,r&&this.setOpacity(r,255)},a._genRect=function(i,t){var r=this.randIntRange(-5,5),e={X:i.X,Y:i.Y+r},n={X:t.X,Y:i.Y+r};this._addPoint(e),this._addPoint(n),this._addPoint(t)},a._drawLine=function(i,t){var r=this._mapConfig.gridCenterToPosition(i.X,i.Y),e=this._mapConfig.gridCenterToPosition(t.X,t.Y);this.pathGraphic.lineWidth=2,this.pathGraphic.strokeColor.fromHEX("#00ffff"),this.pathGraphic.moveTo(r.x,r.y),this.pathGraphic.lineTo(e.x,e.y),this.pathGraphic.stroke()},a.onMouseMove=function(i){this._currentLabel&&this.setOpacity(this._currentLabel,1),this._currentLabel=null;var t=i.getLocation(new l),r=this.camera.screenToWorld(t,new l),e=this.node.getComponent(p).convertToNodeSpaceAR(r),n=this._mapConfig.positionToGrid(e.x,e.y),a=n.X,o=n.Y;this._currentLabel=this._labels[a+"-"+o],this._currentLabel&&this.setOpacity(this._currentLabel,255)},a.addPath=function(){this._allPaths.push(this._currentPath)},a.clear=function(){this._currentPath=null,this.pathGraphic.clear(),this.pathGraphic.node.removeAllChildren()},a.export=function(){var i=JSON.stringify(this._allPaths),t="data:application/json;charset=utf-8,"+encodeURIComponent(i),r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("download","paths.json"),r.click()},a.start=function(){this._renderGrid();for(var i=this._mapConfig,t=i.gridSizeX,r=i.gridSizeY,e=0;e<t;e++)for(var n=0;n<r;n++){var a=this._createLabel(e,n);this._labels[e+"-"+n]=a}},a._createLabel=function(i,t){var r=new c;this.labelHolder.addChild(r),r.active=!0,r._uiProps.colorDirty=!0;var e=r.addComponent(d);e.string=i+"-"+t;var n=this._mapConfig.gridCenterToPosition(i,t);return r.setPosition(n.x,n.y),e.fontSize=16,this.setOpacity(r,1),r},a.renderBlock=function(i,t){this.pathGraphic.fillColor.fromHEX("#00ff00");var r=this._mapConfig.gridCenterToPosition(i,t),e=this._mapConfig,n=e.gridWidth,a=e.gridHeight;this.pathGraphic.moveTo(r.x-n/2,r.y),this.pathGraphic.lineTo(r.x,r.y+a/2),this.pathGraphic.lineTo(r.x+n/2,r.y),this.pathGraphic.lineTo(r.x,r.y-a/2),this.pathGraphic.stroke(),this.pathGraphic.fill()},a._renderGrid=function(){var i=this._mapConfig,t=i.gridSizeX,r=i.gridSizeY,e=i.gridWidth,n=i.gridHeight,a=i.startX,o=i.startY;this.gridGraphic.clear(),this.gridGraphic.lineWidth=1,this.gridGraphic.strokeColor.fromHEX("#00ff00"),this.gridGraphic.moveTo(0,360),this.gridGraphic.lineTo(0,-360),this.gridGraphic.moveTo(-780,0),this.gridGraphic.lineTo(780,0),this.gridGraphic.stroke(),this.gridGraphic.fillColor=new u(180,180,180,80),this.gridGraphic.fillRect(-780,-360,1560,720),this.gridGraphic.lineWidth=1,this.gridGraphic.strokeColor.fromHEX("#ff0000");for(var h=0;h<=t;h++){var s=a+h*e/2,c=o-h*n/2;this.gridGraphic.moveTo(s,c),this.gridGraphic.lineTo(s-e/2*r,c-n/2*r)}for(var l=0;l<=r;l++){var p=a-l*e/2,d=o-l*n/2;this.gridGraphic.moveTo(p,d),this.gridGraphic.lineTo(p+e/2*t,d-n/2*t)}this.gridGraphic.stroke(),this.gridGraphic.lineWidth=2,this.gridGraphic.strokeColor.fromHEX("#00ff00");var g=a+22*e/2,f=o-22*n/2;this.gridGraphic.moveTo(g,f),this.gridGraphic.lineTo(g-e/2*r,f-n/2*r),g=a-22*e/2,f=o-22*n/2,this.gridGraphic.moveTo(g,f),this.gridGraphic.lineTo(g+e/2*t,f-n/2*t),this.gridGraphic.stroke()},a.gridIdToGrid=function(i){return{X:i%44,Y:Math.floor(i/44)}},a.randomElement=function(i){return i[Math.floor(Math.random()*i.length)]},a.randIntRange=function(i,t){return i+Math.round(Math.random()*(t-i))},a.setOpacity=function(i,t){var r=i.getComponent(g);null===r&&(r=i.addComponent(g)),r.opacity=t},t}(f)).prototype,"camera",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(P.prototype,"gridGraphic",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(P.prototype,"pathGraphic",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(P.prototype,"pathLineGraphic",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=t(P.prototype,"labelHolder",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=P))||b));a._RF.pop()}}}));

System.register("chunks:///_virtual/MapManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Moving.ts","./Debug.ts"],(function(t){"use strict";var i,e,r,n,a,o,s,u,h,l,d,c,p,g,m;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,s=t.JsonAsset,u=t.SpriteFrame,h=t.Sprite,l=t.Node,d=t.input,c=t.Input,p=t.Component},function(t){g=t.Moving},function(t){m=t.Debug}],execute:function(){var _,M,f,y,b,w,D,z,S,v,C,T,W,E,I,Y,x,k,H;a._RF.push({},"78c18IfTUtJ4bW0qS/lN6KT","MapManager",void 0);var N=o.ccclass,P=o.property;t("MapManager",(_=N("MapManager"),M=P({type:s}),f=P({type:u}),y=P({type:h}),b=P({type:Number}),w=P({type:Number}),D=P({type:Number}),z=P({type:Number}),S=P(l),_((T=i((C=function(t){function i(){for(var i,e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return i=t.call.apply(t,[this].concat(a))||this,r(i,"mapData",T,n(i)),r(i,"mapBackground",W,n(i)),r(i,"background",E,n(i)),r(i,"gridColumn",I,n(i)),r(i,"gridRow",Y,n(i)),r(i,"gridWidth",x,n(i)),r(i,"gridHeight",k,n(i)),r(i,"debugSpine",H,n(i)),i._currentMapData=null,i._startX=0,i._startY=0,i._mapIndex=0,i._selectedMummy=null,i._objectIndex=[],i}e(i,t);var a=i.prototype;return a.onLoad=function(){this.loadMap(0),this.node.on("REQUEST_POSITION",this._onDropMummy,this),this.node.on("MUMMY_SELECT",this._onMummySelect,this),d.on(c.EventType.KEY_DOWN,this._onKeyDown,this),d.on(c.EventType.KEY_UP,this._onKeyUp,this)},a._onKeyDown=function(t){this._selectedMummy&&this._selectedMummy.emit("ON_KEY_DOWN",t)},a._onKeyUp=function(t){this._selectedMummy&&this._selectedMummy.emit("ON_KEY_UP",t)},a.loadMap=function(t){this._mapIndex=t,this._currentMapData=this.mapData[this._mapIndex].json;var i=this._currentMapData.mapSize;this.gridWidth=i.tilewidth,this.gridHeight=i.tileheight,this.gridColumn=i.width,this.gridRow=i.height,this._startX=(this.gridRow-this.gridColumn)/2*this.gridWidth/2,this._startY=(this.gridColumn+this.gridRow)/2*this.gridHeight/2,this._loadMapBackground()},a._loadMapBackground=function(){this.background.spriteFrame=this.mapBackground[this._mapIndex]},a.getConfig=function(){return{gridColumn:this.gridColumn,gridRow:this.gridRow,gridWidth:this.gridWidth,gridHeight:this.gridHeight,startX:this._startX,startY:this._startY,mapData:this._currentMapData}},a.positionToGrid=function(t,i){var e=t.x,r=t.y;void 0===i&&(i=!1);var n=(e-this._startX)/this.gridWidth+(this._startY-r)/this.gridHeight,a=(this._startY-r)/this.gridHeight-(e-this._startX)/this.gridWidth;return i&&(n=Math.floor(n),a=Math.floor(a)),{col:n,row:a}},a.gridToPosition=function(t,i){var e=this._startX+(i-t)*this.gridWidth/2,r=this._startY-(t+i)*this.gridHeight/2,n=Math.floor(t)*this._currentMapData.mapSize.width+Math.floor(i);return{x:e,y:r,z:this._currentMapData.zIndex[n]}},a.gridCenterToPosition=function(t,i){var e=this._startX+(i-t)*this.gridWidth/2,r=this._startY-(t+i+1)*this.gridHeight/2,n=Math.floor(t)*this._currentMapData.mapSize.width+Math.floor(i);return{x:e,y:r,z:-this._currentMapData.zIndex[n]}},a.isWalkable=function(t,i){return 0===this._currentMapData.collider[t*this._currentMapData.mapSize.width+i]},a.getDrawIndex=function(t){var i=this.positionToGrid(t),e=i.row,r=i.col,n=Math.floor(e)*this._currentMapData.mapSize.width+Math.floor(r);return this._currentMapData.zones[n]},a._onDropMummy=function(t){var i=this.positionToGrid(t.target.position,!0);this.isWalkable(i.row,i.col)?t.target.getComponent(g).setPosition(this.gridCenterToPosition(i.row,i.col)):t.target.setPosition(t.startPosition)},a._onMummySelect=function(t){this._selectedMummy&&this._selectedMummy!=t.target&&this._selectedMummy.emit("DESELECT"),this._selectedMummy=t.target,this.debugSpine.getComponent(m).loadAnimView()},a.getSelectedMummy=function(){return this._selectedMummy},a.resetMummySelected=function(){this._selectedMummy=null},i}(p)).prototype,"mapData",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),W=i(C.prototype,"mapBackground",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),E=i(C.prototype,"background",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=i(C.prototype,"gridColumn",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),Y=i(C.prototype,"gridRow",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),x=i(C.prototype,"gridWidth",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 30}}),k=i(C.prototype,"gridHeight",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),H=i(C.prototype,"debugSpine",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=C))||v));a._RF.pop()}}}));

System.register("chunks:///_virtual/Moving.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,n,o,s,a,h,r,_,c,u,l,d,p,v,f,g,k;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,a=t._decorator,h=t.Graphics,r=t.Node,_=t.sp,c=t.UITransform,u=t.Event,l=t.KeyCode,d=t.log,p=t.Vec2,v=t.Vec3,f=t.tween,g=t.lerp,k=t.Component}],execute:function(){var y,m,M,P,x,S,w,D,R,b,C;s._RF.push({},"e27619y3NNFAaFt4AX8phws","Moving",void 0);var T=a.ccclass,O=a.property,I=0,N=1,z=2,A=3,E=[{row:1,col:0},{row:0,col:-1},{row:-1,col:0},{row:0,col:1}],L=0,W=1;t("Moving",(y=T("Moving"),m=O({type:h}),M=O(),P=O(),x=O({type:r}),y((D=i((w=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];return i=t.call.apply(t,[this].concat(s))||this,n(i,"selectLine",D,o(i)),n(i,"autoMove",R,o(i)),n(i,"autoMovePath",b,o(i)),n(i,"zControl",C,o(i)),i._direction=I,i._speed=0,i._path=null,i._anim=null,i._startPosition=null,i._nextPosition=null,i._movingVector=null,i._uiTransform=null,i._distance=0,i._pathIndex=0,i._state=L,i._keyQueue=[],i._keyMoving=null,i._lastKeyCode=null,i._movingByPath=!1,i._mapManager=null,i._animScale=new v(1,1,1),i._targetRotation=new v(0,0,0),i._gridPosition=null,i._currentSkin="",i}e(i,t);var s=i.prototype;return s.onLoad=function(){this.node.on(r.EventType.MOUSE_DOWN,this.onSelect,this),this.node.on("DESELECT",this.onDeselect,this),this.node.on("ON_KEY_DOWN",this.onKeyDown,this),this.node.on("ON_KEY_UP",this.onKeyUp,this),this._anim=this.node.getComponentInChildren(_.Skeleton),this._uiTransform=this.node.parent.getComponent(c),this.selectLine.clear(),this.selectLine.ellipse(0,0,30,15),this.selectLine.stroke()},s.start=function(){if(this.autoMove){var t=this._autoPickDir();this._moveDir(t)}},s.onSelect=function(){this.selectLine.node.active=!0,this.node.dispatchEvent(new u("MUMMY_SELECT",!0))},s.onDeselect=function(){this.selectLine.node.active=!1},s.onKeyDown=function(t){t.keyCode!=l.ARROW_DOWN&&t.keyCode!=l.ARROW_UP&&t.keyCode!=l.ARROW_RIGHT&&t.keyCode!=l.ARROW_LEFT||this._keyQueue.unshift(t.keyCode),this._state==L&&this.checkIfMovingKey()},s.onKeyUp=function(t){this._keyQueue=this._keyQueue.filter((function(i){return i!=t.keyCode}))},s.checkIfMovingKey=function(){var t=this._keyQueue[0];switch(this._keyMoving=null,this._state=L,t){case l.ARROW_UP:this._keyMoving=z;break;case l.ARROW_DOWN:this._keyMoving=I;break;case l.ARROW_LEFT:this._keyMoving=N;break;case l.ARROW_RIGHT:this._keyMoving=A}this._nextPosition||(this._nextPosition=this.node.position),this._moveDir(this._keyMoving)},s._moveDir=function(t){d("move dir "+t);var i=this._mapManager.positionToGrid(this._nextPosition||this.node.position),e=i.col,n=i.row;switch(e=Math.floor(e),n=Math.floor(n),t){case I:n+=1;break;case N:e-=1;break;case A:e+=1;break;case z:n-=1}this._startPosition=this.node.position,this._nextPosition=this._mapManager.gridCenterToPosition(n,e),d("Move to next "+JSON.stringify(this._nextPosition)),this._distance=p.distance(this._startPosition,this._nextPosition),this._state=W,this._updateDirection(),this._moveToNext()},s.setMapManager=function(t){this._mapManager=t},s.setSpeed=function(t){this._speed=t},s.getSpine=function(){return this._anim},s.getSpeed=function(){return this._speed},s.getGridPosition=function(){return this._gridPosition},s.getDirection=function(){return this._direction},s.setState=function(t){this._state=t},s.setPath=function(t){this._path=t,this.autoMovePath&&this.moveByPath()},s.setPosition=function(t){this.node.position=new v(t.x,t.y,t.z||0),this._gridPosition=this._mapManager.positionToGrid(this.node.position),this._nextPosition=null},s.moveByPath=function(){this._state=W,this.node.setPosition(new v(this._path[0].x,this._path[0].y,0)),this._pathIndex=0,this._updateMovingPosition(),this._moveToNext(),this._updateDirection()},s.setAutoMove=function(t){if(this.autoMove=t,this.autoMove&&this._state==L){var i=this._autoPickDir();this._moveDir(i)}},s.isAutoMove=function(){return this.autoMove},s._moveToNext=function(){var t=this,i=this._distance/this._speed,e=this._nextPosition;f(this.node).to(i,{position:e}).call((function(){t._onFinishMove()})).start()},s._autoPickDir=function(){var t=this._mapManager.positionToGrid(this._nextPosition||this.node.position),i=t.col,e=t.row;i=Math.floor(i),e=Math.floor(e);for(var n=[],o=0;o<4;o++)this._mapManager.isWalkable(e+E[o].row,i+E[o].col)&&n.push(o);return console.log("available dir "+n),n[Math.floor(Math.random()*n.length)]},s._onFinishMove=function(){if(this._movingByPath)this._pathIndex+=1,this._pathIndex<this._path.length?(this._updateMovingPosition(),this._moveToNext(),this._updateDirection()):this._state=L;else if(null!=this._keyMoving)this.checkIfMovingKey();else if(this.autoMove){var t=this._autoPickDir();this._moveDir(t)}else this._state=L;console.log(this._mapManager.getDrawIndex(this.node.position))},s._updateMovingPosition=function(){this._pathIndex<this._path.length-1&&(this._startPosition=this._path[this._pathIndex],this._nextPosition=this._path[this._pathIndex+1],this._distance=p.distance(this._startPosition,this._nextPosition))},s._updateDirection=function(){var t=this._direction;this._nextPosition.x<this.node.position.x&&this._nextPosition.y<this.node.position.y?(this._direction=I,this._anim.setSkin("Front"),this.setCurrentSkin("Front"),this._animScale=new v(1,1,1)):this._nextPosition.x<this.node.position.x&&this._nextPosition.y>this.node.position.y?(this._direction=N,this._anim.setSkin("Back"),this.setCurrentSkin("Back"),this._animScale=new v(-1,1,1)):this._nextPosition.x>this.node.position.x&&this._nextPosition.y>this.node.position.y?(this._direction=z,this._anim.setSkin("Back"),this.setCurrentSkin("Back"),this._animScale=new v(1,1,1)):this._nextPosition.x>this.node.position.x&&this._nextPosition.y<this.node.position.y&&(this._direction=A,this._anim.setSkin("Front"),this.setCurrentSkin("Front"),this._animScale=new v(-1,1,1)),this.node.setScale(this._animScale),t!=this._direction&&d("update direction "+this._direction)},s.lateUpdate=function(t){this._state==W&&(this._gridPosition=this._mapManager.positionToGrid(this.node.position||this._startPosition))},s._checkRotate=function(t){var i=this.node.scale.x/Math.abs(this.node.scale.x);switch(t){case I:this._targetRotation=new v(0,0,15*i);break;case z:this._targetRotation=new v(0,0,-15*i);break;case A:this._targetRotation=new v(0,0,15*i);break;case N:this._targetRotation=new v(0,0,-15*i);break;default:this._targetRotation=new v(0,0,0)}this.node.angle=g(this.node.angle,this._targetRotation.z,.05)},s._updateZEffect=function(){var t=1+.06*this.node.position.z;this.node.setScale(new v(t*this._animScale.x,t*this._animScale.y,t*this._animScale.z));var i=9*this.node.position.z;this.zControl.position=new v(0,i,0)},s.setCurrentSkin=function(t){this._currentSkin=t},s.getCurrentSkin=function(){return this._currentSkin},s.getAnimationsName=function(){return Object.keys(this._anim.skeletonData._skeletonJson.animations)},s.getSkinsName=function(){for(var t=this._anim.skeletonData._skeletonJson.skins,i=[],e=0;e<t.length;e++){var n=t[e];i.push(n.name)}return i},i}(k)).prototype,"selectLine",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=i(w.prototype,"autoMove",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=i(w.prototype,"autoMovePath",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),C=i(w.prototype,"zControl",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=w))||S));s._RF.pop()}}}));

System.register("chunks:///_virtual/MummySpawner.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Moving.ts","./MapManager.ts"],(function(e){"use strict";var n,t,i,o,r,a,m,c,u,s,l,p;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,m=e.Prefab,c=e.Node,u=e.instantiate,s=e.Component},function(e){l=e.Moving},function(e){p=e.MapManager}],execute:function(){var f,d,g,b,y,h,M;r._RF.push({},"481a533LYFF1Y1SIIbJtZPt","MummySpawner",void 0);var x=a.ccclass,_=a.property,j={Object_2:{index:0},Object_3:{index:1},Object_1:{index:2},mummyPrefab1:{index:3,pos:{x:-156.15904322416378,y:191.9204783879181,z:0}},"Object_4.2":{index:4},"Object_4.7":{index:5},"Object_4.8":{index:6},"Object_4.1":{index:7},"Object_4.4":{index:8},"Object_4.5":{index:9},"Object_4.3":{index:10},mummyPrefab2:{index:11,pos:{x:400.47660809068805,y:105.76169595465599,z:0}},Object_5:{index:12},mummyPrefab3:{index:13,pos:{x:448.0102467188985,y:81.99487664055076,z:0}},mummyPrefab4:{index:14,pos:{x:319.6493061533321,y:74.17534692333395,z:0}},Object_6:{index:15},"Object_4.6":{index:16},mummyPrefab5:{index:17,pos:{x:696.1590432241638,y:-29.920478387918102,z:0}},mummyPrefab6:{index:18,pos:{x:637.2042638046977,y:-84.60213190234883,z:0}}};e("MummySpawner",(f=x("MummySpawner"),d=_({type:m}),g=_({type:c}),f((h=n((y=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n=e.call.apply(e,[this].concat(r))||this,i(n,"mummyPrefab",h,o(n)),i(n,"objectHolder",M,o(n)),n._mapManager=null,n}t(n,e);var r=n.prototype;return r.onLoad=function(){this._mapManager=this.node.getComponent(p)},r.sortObjectDebug=function(){var e=this;Object.keys(j).forEach((function(n,t){var i=e.getObject(n);i&&i.setSiblingIndex(t)}))},r.getObject=function(e){return this.objectHolder.children.filter((function(n){return n.name==e}))[0]},r.pathGridToPosition=function(e){var n=this;return e.map((function(e){return n._mapManager.gridCenterToPosition(e.r,e.c)}))},r.getSkeleton=function(e){var n=null;return this._mapManager.getSelectedMummy().getComponent(l).getAnimationsName().forEach((function(t){t.name==e&&(n=t)})),n},r.changeAnimByName=function(e,n){e.getComponent(l).getSpine().setAnimation(0,n,!0)},r.changeSkin=function(e,n){e.getComponent(l).getSpine().setSkin(n),e.getComponent(l).setCurrentSkin(n)},r.changeAnim=function(e,n){var t=e.getComponent(l).getSpine();t.skeletonData=n;var i="Walk";i=t.findAnimation("Fly")?"Fly":t.findAnimation("Walk")?"Walk":"walk",t.setAnimation(0,i,!0),t.setSkin("Front"),e.getComponent(l).setCurrentSkin("Front")},r.spawnMummy=function(e){if(void 0===e&&(e=null),e){var n=15+Math.floor(3*Math.random()),t=15+Math.floor(3*Math.random()),i=e,o=u(this.mummyPrefab);o.setParent(this.objectHolder),o.isMummy=!0;var r=o.getComponent(l);this.changeAnim(r,i),r.setMapManager(this._mapManager),r.setPosition(this._mapManager.gridCenterToPosition(t,n)),r.setSpeed(50),r.onSelect(),setTimeout((function(){r.setAutoMove(!0)}),1e3)}},r.removeRandomOne=function(){var e=this.objectHolder.children.filter((function(e){return e.isMummy}));e[Math.floor(Math.random()*e.length)].destroy(),this._mapManager.resetMummySelected()},n}(s)).prototype,"mummyPrefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=n(y.prototype,"objectHolder",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=y))||b));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});