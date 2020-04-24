var show = false;
var RussianLanguage = false;
var ButtonClick = false;
var CopyNumber = 0;
var groupName = "cv";
var firstRaz = false;
var GroupBut = false;
var d0bool = false;
var d1bool = false;
var d2bool = false;
var d3bool = false;
var d4bool = false;
var obj = false;
var saveMemory = "";
var FileBut = false;
var SetBut = false;
var DotAngle = false;
var InsertShow = false;
var DotArr = 16;
var LineArr = 32;
var LightN = 0;


var LightL = 0;

var Start = false;
var DotLight = false;
var LineLight = false;
var xc = 400;

var yc = 300;

var x1d = new Array();
var y1d = new Array();
var z1d = new Array();

var w1d = new Array();


var x1dn = new Array();
var y1dn = new Array();
var z1dn = new Array();

var w1dn = new Array();



var x1dm = [-100, 100, 100, -100, -100, 100, 100, -100, -100, 100, 100, -100, -100, 100, 100, -100];


var y1dm = [-100, -100, 100, 100, -100, -100, 100, 100, -100, -100, 100, 100, -100, -100, 100, 100];


var z1dm = [100, 100, 100, 100, -100, -100, -100, -100, 100, 100, 100, 100, -100, -100, -100, -100];


var w1dm = [100, 100, 100, 100, 100, 100, 100, 100, -100, -100, -100, -100, -100, -100, -100, -100];

var xr = new Array();
var yr = new Array();
var dots = new Array(DotArr);

var lines = new Array(LineArr);


var svg = document.getElementById("f3");


for (var k = 0; k < DotArr; k++) {

  dots[k] = document.getElementById("dotsvg").cloneNode();
  dots[k].setAttribute("style", "display: inline");


  svg.appendChild(dots[k]);
}


for (var i = 0; i < LineArr; i++) {

  lines[i] = document.getElementById("li1").cloneNode();

  svg.appendChild(lines[i]);
}


var xo = new Array(DotArr);

var yo = new Array(DotArr);


var xo1 = new Array();

var yo1 = new Array();

var xo2 = new Array();

var yo2 = new Array();


var timerDraw;

var checkXY = document.getElementById("xy");

var xyAngle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var xyRad;


var xyAnglem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var xyRadm;


var checkXZ = document.getElementById("xz");



var xzAngle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var xzRad;




var xzAnglem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var xzRadm;

var yzAngle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var yzRad;

var checkYZ = document.getElementById("yz");

var checkXW = document.getElementById("xw");

var checkYW = document.getElementById("yw");

var checkZW = document.getElementById("zw");


var xwAngle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var xwRad;

var ywAngle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var ywRad;

var zwAngle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var zwRad;


var yzAnglem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var yzRadm;

var xwAnglem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var xwRadm;

var ywAnglem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var ywRadm;

var zwAnglem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var zwRadm;


var a;

var b;

var c;

var d;

var e;

var f;

var g;

var h;

var o;

var p;

var z;

var w;


var am;

var bm;

var cm;

var dm;

var em;

var fm;

var gm;

var hm;

var om;

var pm;

var zm;

var wm;



var m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var j = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];




var r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


var s = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


var t = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


var u = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var perspective = document.getElementById("pers");
var Rotate = true;
var TranslateButton = document.getElementById("translate");
var VertexShow = false;
var plus = document.getElementById("Plus");
var minus = document.getElementById("Minus");
var xn = -x1dm[0];
var yn = -y1dm[0];
var zn = -z1dm[0];
var wn = -w1dm[0];
var xy = 0;
var xz = 0;
var yz = 0;
var xw = 0;
var yw = 0;
var zw = 0;
var xypov = 0;
var xzpov = 0;
var yzpov = 0;
var xwpov = 0;
var ywpov = 0;
var zwpov = 0;
var Move = false;
var AllBut = false;
var RemoveShow = false;
var ModBut = false;
var Cam = false;
var cyc = false;
var createFilelines = false;
var ce = "";
var Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
var Xreed = ""; Jreed = ""; areed = ""; breed = ""; creed = ""; dreed = ""; ereed = ""; freed = ""; greed = ""; hreed = ""; oreed = ""; preed = ""; qreed = ""; rreed = ""; sreed = ""; treed = ""; jreed = ""; ureed = ""; xreed = ""; yreed = ""; zreed = ""; wreed = ""; Areed = ""; Breed = ""; Creed = ""; Dreed = ""; Ereed = ""; Freed = ""; Greed = ""; Hreed = ""; Oreed = ""; Preed = ""; Rreed = ""; Sreed = ""; Treed = ""; Ureed = "";
var output = document.getElementById("suda");
var delDot = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var nowMemory;
var AllMemory = new Array();
AllMemory[0] = "q";
var indexMemory = 0;
var english = false;
