(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Raptors Vs Huskies_atlas_", frames: [[986,0,35,32],[943,724,46,41],[0,771,383,769],[0,0,383,769],[385,0,383,769],[770,0,214,223],[670,1335,125,167],[783,1622,59,140],[605,1619,58,143],[385,1195,171,176],[770,568,171,176],[943,535,79,187],[945,1334,79,187],[558,1195,86,46],[0,1542,115,153],[385,1373,116,155],[770,360,153,206],[820,1129,152,203],[665,1129,153,204],[820,1334,123,207],[272,1542,83,155],[558,1335,110,204],[665,771,318,177],[986,66,26,30],[945,1523,79,182],[925,360,93,173],[677,1504,104,176],[117,1542,77,178],[196,1542,74,174],[783,1543,155,77],[385,771,278,422],[558,1243,89,34],[481,1619,122,73],[357,1619,122,73],[665,950,318,177],[385,1541,290,76],[770,225,240,133],[986,34,26,30]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.ballaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.balllargeaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bballhomescreenai = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bballsecondstageaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bballthirdstageaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.defender1aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.defender2aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.defender3aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.defender4aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.defenderdownaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.defenderfallingaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.defenderhandsaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.defenderupaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.demoaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.JV1aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.JV2aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.JVcele1aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.JVcele2aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.JVdunkaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.JVjumpaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.JVshootaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.JVshoot2aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.mainmenuaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.oneaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.pass1 = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.pass2aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.pass3aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.pass4aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.pass5aiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.playaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.rulesrevisedaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.rulesaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.shotmeteraiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.shotstickaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.tryagainaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.vsaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.wtnaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.zeroaiAssets = function() {
	this.spriteSheet = ss["Raptors Vs Huskies_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zeroai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zeroaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,30);


(lib.wtnai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wtnaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,133);


(lib.vsai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vsaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,76);


(lib.tryagain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tryagainaiAssets();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApNiQIScAAIAAEhIycAAg");
	this.shape.setTransform(163,30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApOCRIAAkhISdAAIAAEhg");
	this.shape_1.setTransform(163,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,177);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shotstickaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,122,73), null);


(lib.shotmeterai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shotmeteraiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,73);


(lib.rulesai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rulesaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,34);


(lib.rulesrevisedai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rulesrevisedaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,422);


(lib.ruleboxai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.playai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,77);


(lib.pass5ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pass5aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,174);


(lib.pass4ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pass4aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,178);


(lib.pass3ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pass3aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,176);


(lib.pass2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pass2aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,173);


(lib.pass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pass1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,182);


(lib.oneai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.oneaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,30);


(lib.mainmenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mainmenuaiAssets();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApXiGISvAAIAAENIyvAAg");
	this.shape.setTransform(159,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApXCHIAAkNISvAAIAAENg");
	this.shape_1.setTransform(159,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,177);


(lib.JVshoot2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JVshoot2aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,204);


(lib.JVshootai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JVshootaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,155);


(lib.JVjumpai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JVjumpaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,207);


(lib.JVdunkai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JVdunkaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,204);


(lib.JVcele2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JVcele2aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,203);


(lib.JV2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JV2aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,155);


(lib.demoai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Layer 1
	this.instance = new lib.demoaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},11).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,46);


(lib.defenderupai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.defenderupaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,187);


(lib.defenderhandsai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.defenderhandsaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,187);


(lib.defenderfallingai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.defenderfallingaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,176);


(lib.defenderdownai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.defenderdownaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,176);


(lib.defender4ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.defender4aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,143);


(lib.defender2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.defender2aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,167);


(lib.bballthirdstageai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bballthirdstageaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383,769);


(lib.bballsecondstageai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bballsecondstageaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383,769);


(lib.balllargeai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.balllargeaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,41);


(lib.ballai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ballaiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,32);


(lib.tryagainai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tryagain();
	this.instance.parent = this;
	this.instance.setTransform(159,88.5,1,1,0,0,0,159,88.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.tryagain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,177);


(lib.shotstickai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(61,36.5,1,1,0,0,0,61,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:56},0).wait(1).to({x:50.9},0).wait(1).to({x:45.8},0).wait(1).to({x:40.7},0).wait(1).to({x:35.6},0).wait(1).to({x:30.5},0).wait(1).to({x:25.4},0).wait(1).to({x:20.3},0).wait(1).to({x:15.2},0).wait(1).to({x:10.1},0).wait(1).to({x:5},0).wait(1).to({x:0.4},0).wait(1).to({x:-4.2},0).wait(1).to({x:-8.8},0).wait(1).to({x:-13.4},0).wait(1).to({x:-18},0).wait(1).to({x:-22.7},0).wait(1).to({x:-27.3},0).wait(1).to({x:-31.9},0).wait(1).to({x:-36.5},0).wait(1).to({x:-41.1},0).wait(1).to({x:-45.7},0).wait(1).to({x:-50.4},0).wait(2).to({x:-45.7},0).wait(1).to({x:-41.1},0).wait(1).to({x:-36.5},0).wait(1).to({x:-31.9},0).wait(1).to({x:-27.3},0).wait(1).to({x:-22.7},0).wait(1).to({x:-18},0).wait(1).to({x:-13.4},0).wait(1).to({x:-8.8},0).wait(1).to({x:-4.2},0).wait(1).to({x:0.4},0).wait(1).to({x:5},0).wait(1).to({x:10.1},0).wait(1).to({x:15.2},0).wait(1).to({x:20.3},0).wait(1).to({x:25.4},0).wait(1).to({x:30.5},0).wait(1).to({x:35.6},0).wait(1).to({x:40.7},0).wait(1).to({x:45.8},0).wait(1).to({x:50.9},0).wait(1).to({x:56},0).wait(1).to({x:61},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,73);


(lib.rulesbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rulesai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.5,17,1,1,0,0,0,44.5,17);

	this.instance_1 = new lib.rulesrevisedai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(52,-160.9,1,1,0,0,0,139,211);

	this.instance_2 = new lib.ruleboxai("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(168.5,-103,1,1,0,0,0,-31,211);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Am8ipIN5AAIAAFTIt5AAg");
	this.shape.setTransform(44.5,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Am8CqIAAlTIN5AAIAAFTg");
	this.shape_1.setTransform(44.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:44.5}}]}).to({state:[{t:this.instance,p:{x:-11.5}},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{x:44.5}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,34);


(lib.Play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.5,38.5,1,1,0,0,0,77.5,38.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApqkWITVAAIAAItIzVAAg");
	this.shape.setTransform(75.9,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApqEXIAAotITVAAIAAItg");
	this.shape_1.setTransform(75.9,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,77);


(lib.pass1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pass();
	this.instance.parent = this;
	this.instance.setTransform(39.5,91,1,1,0,0,0,39.5,91);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,182);


(lib.mainmenuai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mainmenu();
	this.instance.parent = this;
	this.instance.setTransform(159,88.5,1,1,0,0,0,159,88.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.mainmenu(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,177);


(lib.JVcele1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer 1
	this.instance = new lib.JVcele1aiAssets();
	this.instance.parent = this;

	this.instance_1 = new lib.JVcele2ai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(77,101.4,1,1,0,0,0,76,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,206);


(lib.JV1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Layer 1
	this.instance = new lib.JV1aiAssets();
	this.instance.parent = this;

	this.instance_1 = new lib.JV2ai();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.4,78,1,1,0,0,0,58,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,153);


(lib.defender3ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_70 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(70).call(this.frame_70).wait(1));

	// Layer 1
	this.instance = new lib.defender3aiAssets();
	this.instance.parent = this;

	this.instance_1 = new lib.defender4ai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,71.5,1,1,0,0,0,29,71.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},37).to({state:[{t:this.instance_1}]},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,140);


(lib.defender1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.instance = new lib.defender1aiAssets();
	this.instance.parent = this;

	this.instance_1 = new lib.defender2ai();
	this.instance_1.parent = this;
	this.instance_1.setTransform(91.6,106.3,1,1,0,0,0,62.5,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{y:106.3}}]},11).to({state:[{t:this.instance_1,p:{y:105.8}}]},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214,223);


// stage content:
(lib.RaptorsVsHuskies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		playSound("Explosion2wav");
	}
	this.frame_35 = function() {
		playSound("Explosion2wav");
	}
	this.frame_60 = function() {
		playSound("Explosion2wav");
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.start.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(75);
		}
		playSound("OneDance8BitRemixCoverVersionTributetoDrakeftWizkidKyla8BitUniverse");
	}
	this.frame_73 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(74);
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(74);
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(74);
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(74);
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(74);
	}
	this.frame_75 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.passer.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(77);
		}
	}
	this.frame_109 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.meter.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(111);
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(110);
	}
	this.frame_160 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.menu.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(72);
		}
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.again.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(75);
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(161);
	}
	this.frame_170 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(161);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(24).call(this.frame_35).wait(25).call(this.frame_60).wait(13).call(this.frame_73).wait(2).call(this.frame_75).wait(34).call(this.frame_109).wait(51).call(this.frame_160).wait(10).call(this.frame_170).wait(1));

	// main menu
	this.menu = new lib.mainmenuai();
	this.menu.parent = this;
	this.menu.setTransform(327.5,719,1,1,0,0,0,159,88.5);
	this.menu._off = true;
	new cjs.ButtonHelper(this.menu, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.menu).wait(160).to({_off:false},0).wait(11));

	// Try again
	this.again = new lib.tryagainai();
	this.again.parent = this;
	this.again.setTransform(322.5,683,1,1,0,0,0,159,88.5);
	this.again._off = true;
	new cjs.ButtonHelper(this.again, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.again).wait(160).to({_off:false},0).wait(11));

	// JV2
	this.instance = new lib.JVshoot2ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(298.9,544.9,1,1,0,0,0,55,102);

	this.instance_1 = new lib.JVjumpai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(323.3,539.2,1,1,0,0,0,61.5,103.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.JVdunkai("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(188.4,423.2,1,1,0,0,0,76.5,102);
	this.instance_2._off = true;

	this.instance_3 = new lib.JVcele1ai();
	this.instance_3.parent = this;
	this.instance_3.setTransform(186.6,550.1,1,1,0,0,0,76.5,103);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},109).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(111).to({_off:false},0).wait(1).to({x:316.9,y:529.1},0).wait(1).to({x:310.6,y:519.1},0).wait(1).to({x:304.2,y:509.1},0).wait(1).to({x:297.8,y:499.1},0).wait(1).to({x:291.4,y:489.1},0).wait(1).to({x:285.1,y:479},0).wait(1).to({x:278.7,y:469},0).wait(1).to({x:272.3,y:459},0).wait(1).to({x:265.9,y:449},0).wait(1).to({x:259.6,y:439},0).wait(1).to({x:253.2,y:429},0).wait(1).to({x:246.8,y:418.9},0).wait(1).to({x:240.4,y:408.9},0).wait(1).to({x:234.1,y:398.9},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(126).to({_off:false},0).wait(1).to({y:428},0).wait(1).to({y:432.9},0).wait(1).to({y:438},0).wait(1).to({y:443.2},0).wait(1).to({y:441.2},0).wait(1).to({y:438.7},0).wait(1).to({y:436.1},0).wait(1).to({y:433.4},0).wait(1).to({y:431.5},0).wait(1).to({y:449.3},0).wait(1).to({y:467.5},0).wait(1).to({y:486.1},0).wait(1).to({y:505},0).wait(1).to({y:524.3},0).wait(1).to({y:543.9},0).wait(1).to({y:564},0).wait(1).to({y:584.4},0).wait(1).to({y:594},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(11));

	// ball lg
	this.instance_4 = new lib.balllargeai("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(183,322,1,1,0,0,0,23,20.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).wait(1).to({y:329.5},0).wait(1).to({y:337},0).wait(1).to({y:344.5},0).wait(1).to({y:352},0).wait(1).to({y:368.6},0).wait(1).to({y:385.3},0).wait(1).to({y:402},0).wait(1).to({y:430},0).wait(1).to({y:458},0).wait(1).to({y:486},0).wait(1).to({y:514},0).wait(1).to({y:542},0).wait(1).to({y:557},0).wait(1).to({y:572},0).wait(1).to({y:587},0).wait(1).to({y:602},0).wait(1).to({x:189.2,y:596.1},0).wait(1).to({x:195.3,y:590.2},0).wait(1).to({x:201.5,y:584.4},0).wait(1).to({x:207.6,y:578.5},0).wait(1).to({x:213.8,y:572.7},0).wait(1).to({x:219.9,y:566.8},0).wait(1).to({x:226.1,y:561},0).wait(1).to({x:237.6,y:567.5},0).wait(1).to({x:249.1,y:574},0).wait(1).to({x:260.6,y:580.5},0).wait(1).to({x:272.1,y:587},0).wait(1).to({x:275.8,y:583.6},0).wait(1).to({x:279.4,y:580.3},0).wait(1).to({x:283.1,y:577},0).wait(1).to({x:300.1,y:582},0).wait(1).to({x:317.1,y:587},0).wait(1).to({x:335.1},0).wait(1).to({startPosition:0},0).wait(1).to({x:337.6},0).wait(1).to({x:340.1},0).wait(1).to({x:342.6},0).wait(1).to({x:345.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// D3
	this.instance_5 = new lib.defenderupai("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(212.4,536.1,1,1,0,0,0,39.5,93.5);

	this.instance_6 = new lib.defenderhandsai("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(203.6,536,1,1,0,0,0,39.5,93.5);

	this.instance_7 = new lib.defenderfallingai("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(191.4,542.9,1,1,0,0,0,85.5,88);

	this.instance_8 = new lib.defenderdownai("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(179.4,600.5,1,1,0,0,0,85.5,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},109).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},8).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},32).to({state:[{t:this.instance_8}]},10).wait(1));

	// shot stick
	this.instance_9 = new lib.shotstickai();
	this.instance_9.parent = this;
	this.instance_9.setTransform(381.5,654.5,1,1,0,0,0,61,36.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(109).to({_off:false},0).to({_off:true},1).wait(61));

	// shot meter
	this.meter = new lib.shotmeterai();
	this.meter.parent = this;
	this.meter.setTransform(325.9,654.3,1,1,0,0,0,61,36.5);
	this.meter._off = true;
	new cjs.ButtonHelper(this.meter, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.meter).wait(109).to({_off:false},0).to({_off:true},1).wait(61));

	// Score2
	this.instance_10 = new lib.zeroai("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(251.9,237.8,1,1,0,0,0,13,15);

	this.instance_11 = new lib.zeroai("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(236.1,237.8,1,1,0,0,0,13,15);

	this.instance_12 = new lib.oneai("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(252.4,237.8,1,1,0,0,0,13,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10,p:{x:251.9}}]},109).to({state:[{t:this.instance_10,p:{x:236.1}},{t:this.instance_12}]},19).to({state:[{t:this.instance_11},{t:this.instance_10,p:{x:251.9}}]},42).wait(1));

	// Demo2
	this.demo = new lib.demoai();
	this.demo.parent = this;
	this.demo.setTransform(374.4,245.8,1,1,0,0,0,43,23);
	this.demo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.demo).wait(109).to({_off:false},0).wait(62));

	// Third Stage
	this.third = new lib.bballthirdstageai();
	this.third.parent = this;
	this.third.setTransform(251.3,479.5,1,1,0,0,0,191.5,384.5);
	this.third._off = true;

	this.timeline.addTween(cjs.Tween.get(this.third).wait(109).to({_off:false},0).wait(62));

	// Passer
	this.passer = new lib.pass1ai();
	this.passer.parent = this;
	this.passer.setTransform(152.9,643.3,1,1,0,0,0,39.5,91);
	new cjs.ButtonHelper(this.passer, 0, 1, 1);

	this.instance_13 = new lib.pass2ai("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(177.5,648.4,1,1,0,0,0,46.5,86.5);

	this.instance_14 = new lib.pass3ai("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(190.4,644.9,1,1,0,0,0,52,88);

	this.instance_15 = new lib.pass4ai("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(179.7,643.6,1,1,0,0,0,38.5,89);

	this.instance_16 = new lib.pass5ai("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(175.6,647,1,1,0,0,0,37,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.passer,p:{mode:"independent",startPosition:undefined}}]},75).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},11).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},9).to({state:[{t:this.passer,p:{mode:"synched",startPosition:0}}]},11).to({state:[]},1).to({state:[]},20).wait(42));

	// Ball
	this.instance_17 = new lib.ballai("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(226.9,570.6,1,1,0,0,0,17.5,16);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(88).to({_off:false},0).wait(1).to({x:233.9,y:558.9},0).wait(1).to({x:240.9,y:547.3},0).wait(1).to({x:247.9,y:535.6},0).wait(1).to({x:254.8,y:523.9},0).wait(1).to({x:261.8,y:512.2},0).wait(1).to({x:268.8,y:500.6},0).wait(1).to({x:275.8,y:488.9},0).wait(1).to({x:282.8,y:477.2},0).wait(1).to({x:289.8,y:465.6},0).wait(1).to({x:296.7,y:453.9},0).wait(1).to({x:303.7,y:442.2},0).wait(1).to({x:310.7,y:430.5},0).wait(1).to({x:317.7,y:418.9},0).wait(1).to({x:324.7,y:407.2},0).wait(1).to({x:331.7,y:395.5},0).wait(1).to({x:338.7,y:383.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(63));

	// D2
	this.instance_18 = new lib.defender3ai();
	this.instance_18.parent = this;
	this.instance_18.setTransform(268.4,445.9,1,1,0,0,0,29.5,70);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(75).to({_off:false},0).wait(34).to({_off:true},1).wait(61));

	// JV1
	this.instance_19 = new lib.JV1ai();
	this.instance_19.parent = this;
	this.instance_19.setTransform(342.4,452.4,1,1,0,0,0,57.5,76.5);

	this.instance_20 = new lib.JVshootai("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(328.4,454.2,1,1,0,0,0,41.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19,p:{regX:57.5,regY:76.5,x:342.4,y:452.4,mode:"independent",startPosition:undefined}}]},75).to({state:[{t:this.instance_19,p:{regX:57.4,regY:77.7,x:342.5,y:453.5,mode:"single",startPosition:0}}]},1).to({state:[{t:this.instance_20}]},32).to({state:[{t:this.instance_19,p:{regX:57.4,regY:77.7,x:342.5,y:453.5,mode:"single",startPosition:0}}]},1).to({state:[]},1).to({state:[]},20).wait(41));

	// D1
	this.instance_21 = new lib.defender1ai();
	this.instance_21.parent = this;
	this.instance_21.setTransform(208.4,618.3,1,1,0,0,0,107,111.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(75).to({_off:false},0).wait(34).to({_off:true},1).wait(61));

	// Score
	this.instance_22 = new lib.zeroai("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(251.9,237.8,1,1,0,0,0,13,15);

	this.instance_23 = new lib.zeroai("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(236.1,237.8,1,1,0,0,0,13,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23},{t:this.instance_22}]},75).to({state:[{t:this.instance_23},{t:this.instance_22}]},26).to({state:[{t:this.instance_23},{t:this.instance_22}]},8).to({state:[]},1).to({state:[]},20).wait(41));

	// Demo
	this.demo_1 = new lib.demoai();
	this.demo_1.parent = this;
	this.demo_1.setTransform(374.4,245.8,1,1,0,0,0,43,23);
	this.demo_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.demo_1).wait(75).to({_off:false},0).to({_off:true},34).wait(62));

	// Second Stage
	this.onedance = new lib.bballsecondstageai();
	this.onedance.parent = this;
	this.onedance.setTransform(251.5,479.5,1,1,0,0,0,191.5,384.5);
	this.onedance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.onedance).wait(75).to({_off:false},0).wait(34).to({mode:"synched",startPosition:0},0).to({_off:true},1).wait(61));

	// Rules
	this.instance_24 = new lib.rulesbutton();
	this.instance_24.parent = this;
	this.instance_24.setTransform(245.7,658.4,1,1,0,0,0,44.5,17);
	this.instance_24._off = true;
	new cjs.ButtonHelper(this.instance_24, 0, 1, 2, false, new lib.rulesbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(60).to({_off:false},0).wait(13).to({_off:true},2).wait(96));

	// Play
	this.start = new lib.Play();
	this.start.parent = this;
	this.start.setTransform(246.9,602.9,1,1,0,0,0,77.5,38.5);
	this.start._off = true;
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(60).to({_off:false},0).wait(13).to({_off:true},2).wait(96));

	// VS
	this.instance_25 = new lib.vsai("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(244.3,500.1,1,1,0,0,0,145,38);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(35).to({_off:false},0).wait(37).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},2).wait(96));

	// WTN
	this.instance_26 = new lib.wtnai("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(253.2,365.4,1,1,0,0,0,120,66.5);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(11).to({_off:false},0).wait(61).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},2).wait(96));

	// First stage
	this.instance_27 = new lib.bballhomescreenai();
	this.instance_27.parent = this;
	this.instance_27.setTransform(60,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(73).to({_off:true},2).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310,570,383,769);
// library properties:
lib.properties = {
	width: 500,
	height: 950,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Raptors Vs Huskies_atlas_.png", id:"Raptors Vs Huskies_atlas_"},
		{src:"sounds/Explosion2wav.mp3", id:"Explosion2wav"},
		{src:"sounds/OneDance8BitRemixCoverVersionTributetoDrakeftWizkidKyla8BitUniverse.mp3", id:"OneDance8BitRemixCoverVersionTributetoDrakeftWizkidKyla8BitUniverse"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;