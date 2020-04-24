function literate() {
  saveMemory = "a";
  saveMemory += String(DotArr);
  saveMemory += "b";
  saveMemory += String(LineArr);
  for (var i = 0; i < DotArr; i++) {
    saveMemory += String("X");
    saveMemory += String(dots[i].getAttribute("group"));
    saveMemory += String("$");
    saveMemory += String("c");
    saveMemory += String(i);
    saveMemory += String("d");
    saveMemory += String(x1d[i]);
    saveMemory += String("W");
    saveMemory += String(x1dm[i]);
    saveMemory += String("f");
    saveMemory += String(y1d[i]);
    saveMemory += String("g");
    saveMemory += String(y1dm[i]);
    saveMemory += String("h");
    saveMemory += String(z1dm[i]);
    saveMemory += String("o");
    saveMemory += String(w1dm[i]);
    saveMemory += String("p");
    saveMemory += String(xyAngle[i]);
    saveMemory += String("q");
    saveMemory += String(
      xzAngle[i]);
    saveMemory += String("r");
    saveMemory += String(
      yzAngle[i]);
    saveMemory += String("s");
    saveMemory += String(
      xwAngle[i]);
    saveMemory += String("t");
    saveMemory += String(ywAngle[i]);
    saveMemory += String("j");
    saveMemory += String(
      zwAngle[i]);
    saveMemory += String("u");
    saveMemory += String(xyAnglem[i]);
    saveMemory += String("x");
    saveMemory += String(
      xzAnglem[i]);
    saveMemory += String("y");
    saveMemory += String(
      yzAnglem[i]);
    saveMemory += String("z");
    saveMemory += String(xwAnglem[i]);
    saveMemory += String("w");
    saveMemory += String(
      ywAnglem[i]);
    saveMemory += String("A");
    saveMemory += String(
      zwAnglem[i]);
    saveMemory += String("B");
    saveMemory += String(
      m[i]);
    saveMemory += String("C");
    saveMemory += String(
      n[i]);
    saveMemory += String("D");
    saveMemory += String(
      j[i]);
    saveMemory += String("E");
    saveMemory += String(
      q[i]);
    saveMemory += String("F");
    saveMemory += String(
      r[i]);
    saveMemory += String("G");
    saveMemory += String(s[i]);
    saveMemory += String("H");
    saveMemory += String(
      t[i]);
    saveMemory += String("O");
    saveMemory += String(
      u[i]);
    saveMemory += String("J");
    if (delDot[i] == false) {
      saveMemory += String("0");
    }
    else {
      saveMemory += String("1");
    }
    
    saveMemory += String("Q");
  }
  for (var i = 0; i < LineArr; i++) {
    saveMemory += String("X");
    saveMemory += String(lines[i].getAttribute("group"));
    saveMemory += String("$");
    saveMemory += String("P");
    saveMemory += String(i);
    saveMemory += String("R");
    saveMemory += String(lines[i].getAttribute("arx1"));
    saveMemory += String("S");
    saveMemory += String(lines[i].getAttribute("arx2"));
    saveMemory += String("T");
    saveMemory += String(lines[i].getAttribute("ary1"));
    saveMemory += String("U");
    saveMemory += String(lines[i].getAttribute("ary2"));
    saveMemory += String("Y");

  }
  nowMemory = saveMemory;
}

function SaveFile(text, name, type) {
  literate();
  var save = document.getElementById("save");
  var file = new Blob([text], { type: type });
  save.href = URL.createObjectURL(file);
  const fileName = document.getElementById("objectName").value || 'object';
  save.download = fileName + ".4do";
}

function processFiles(event) {
  ce = "";
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (event) {
    ce = event.target.result;
  };
  reader.readAsText(file);
  cyc = true;
  createFilelines = true;
  ce = "";
}

function decode() {
  var DotArrMem = DotArr;
  var LineArrMem = LineArr;
  var arx1Mem = new Array();
  var ary1Mem = new Array();
  var arx2Mem = new Array();
  var ary2Mem = new Array();
  var massivearr = 0;
  if (cyc == true) {
    for (var i = 0; i < ce.length; i++) {
      if (ce[i] == 'a' && Xbool == false) {
        Xbool = false; Jbool = false; abool = true; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'b' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = true; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'c' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = true; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'd' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = true; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'W' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = true; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'f' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = true; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'g' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = true; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'h' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = true; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'o' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = true; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'p' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = true; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'q' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = true; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'r' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = true; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 's' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = true; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 't' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = true; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'j' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = true; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'u' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = true; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'x' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = true; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'y' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = true; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'z' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = true; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'w' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = true; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'A' && Xbool == false) {
        Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = true; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'B' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = true; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'C' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = true; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'D' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = true; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'E' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = true; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'F' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = true; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'G' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = true; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'H' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = true; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'O' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = true; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'P' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = true; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'R' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = true; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'S' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = true; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'T' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = true; Ubool = false;
        continue;
      }
      if (ce[i] == 'U' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = true;
        continue;
      }
      if (ce[i] == 'J' && Xbool == false) {
        Xbool = false; Jbool = true; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == 'X' && Xbool == false) {
        Xbool = true; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }
      if (ce[i] == '$') {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;
        continue;
      }


      if (ce[i] == 'Q' && Xbool == false) {
        Xbool = false; Jbool = false; abool = false; bbool = false; cbool = false; dbool = false; ebool = false; fbool = false; gbool = false; hbool = false; obool = false; pbool = false; qbool = false; rbool = false; sbool = false; tbool = false; jbool = false; ubool = false; xbool = false; ybool = false; zbool = false; wbool = false; Abool = false; Bbool = false; Cbool = false; Dbool = false; Ebool = false; Fbool = false; Gbool = false; Hbool = false; Obool = false; Pbool = false; Rbool = false; Sbool = false; Tbool = false; Ubool = false;

        dots[DotArr] = document.getElementById("dotsvg").cloneNode();
        dots[DotArr].setAttribute("style", "display: inline");


        x1d[DotArr] = Number(dreed);
        x1dm[DotArr] = Number(ereed);
        y1d[DotArr] = Number(freed);
        y1dm[DotArr] = Number(greed);
        z1d[DotArr] = 0;
        z1dm[DotArr] = Number(hreed);
        w1d[DotArr] = 0;
        w1dm[DotArr] = Number(oreed);


        xyAngle[DotArr] = Number(preed);
        xzAngle[DotArr] = Number(qreed);
        yzAngle[DotArr] = Number(rreed);
        xwAngle[DotArr] = Number(sreed);
        ywAngle[DotArr] = Number(treed);
        zwAngle[DotArr] = Number(jreed);


        xyAnglem[DotArr] = Number(ureed);
        xzAnglem[DotArr] = Number(xreed);
        yzAnglem[DotArr] = Number(yreed);
        xwAnglem[DotArr] = Number(zreed);
        ywAnglem[DotArr] = Number(wreed);
        zwAnglem[DotArr] = Number(Areed);

        m[DotArr] = Number(Breed);
        n[DotArr] = Number(Creed);
        j[DotArr] = Number(Dreed);
        q[DotArr] = Number(Ereed);
        r[DotArr] = Number(Freed);
        s[DotArr] = Number(Greed);
        t[DotArr] = Number(Hreed);
        u[DotArr] = Number(Oreed);
        if (Jreed == 0) {
          delDot[DotArr] = false;
        }
        else {
          delDot[DotArr] = true;
        }
        xo[DotArr] = xc + (x1d[DotArr]);

        yo[DotArr] = yc + (y1d[DotArr]);

        dots[DotArr].setAttribute("group", String(Xreed));
        if (Jreed == 0) {


          svg.appendChild(dots[DotArr]);

        }
        dots[DotArr].setAttribute("x", xo[DotArr]);

        dots[DotArr].setAttribute("y", yo[DotArr]);
        dots[DotArr].setAttribute("style", "fill: red");




        DotArr++;
        Xreed = ""; jreed = ""; creed = ""; dreed = ""; ereed = ""; freed = ""; greed = ""; hreed = ""; oreed = ""; preed = ""; qreed = ""; rreed = ""; sreed = ""; treed = ""; jreed = ""; ureed = ""; xreed = ""; yreed = ""; zreed = ""; wreed = ""; Areed = ""; Breed = ""; Creed = ""; Dreed = ""; Ereed = ""; Freed = ""; Greed = ""; Hreed = ""; Oreed = ""; Preed = ""; Rreed = ""; Sreed = ""; Treed = ""; Ureed = "";
        continue;
      }
      if (ce[i] == 'Y') {





        lines[LineArr] = document.getElementById("li1").cloneNode();

        svg.appendChild(lines[LineArr]);

        lines[LineArr].setAttribute("style", "display: inline");
        lines[LineArr].setAttribute("arx1", Number(Rreed) + DotArrMem);

        lines[LineArr].setAttribute("ary1", Number(Treed) + DotArrMem);

        lines[LineArr].setAttribute("arx2", Number(Sreed) + DotArrMem);

        lines[LineArr].setAttribute("ary2", Number(Ureed) + DotArrMem);

        lines[LineArr].setAttribute("style", "stroke: red");
        lines[LineArr].setAttribute("group", String(Xreed));
        LineArr++;
        LightN = 0;
        LightL++;
        LineLight = true;
        DotLight = false;
        AllBut = false;


        document.getElementById("Line").style.color = ("orange");

        document.getElementById("All").style.color = ("blue");

        document.getElementById("Vertex").style.color = ("blue");


        Xreed = ""; jreed = ""; creed = ""; dreed = ""; ereed = ""; freed = ""; greed = ""; hreed = ""; oreed = ""; preed = ""; qreed = ""; rreed = ""; sreed = ""; treed = ""; jreed = ""; ureed = ""; xreed = ""; yreed = ""; zreed = ""; wreed = ""; Areed = ""; Breed = ""; Creed = ""; Dreed = ""; Ereed = ""; Freed = ""; Greed = ""; Hreed = ""; Oreed = ""; Preed = ""; Rreed = ""; Sreed = ""; Treed = ""; Ureed = "";
        continue;
      }
      if (abool == true) {
        areed += ce[i];
      }
      if (bbool == true) {
        breed += ce[i];
      }
      if (cbool == true) {
        creed += ce[i];
      }
      if (dbool == true) {
        dreed += ce[i];
      }
      if (ebool == true) {
        ereed += ce[i];
      }
      if (fbool == true) {
        freed += ce[i];
      }
      if (gbool == true) {
        greed += ce[i];
      }
      if (hbool == true) {
        hreed += ce[i];
      }
      if (obool == true) {
        oreed += ce[i];
      }
      if (pbool == true) {
        preed += ce[i];
      }
      if (qbool == true) {
        qreed += ce[i];
      }
      if (rbool == true) {
        rreed += ce[i];
      }
      if (sbool == true) {
        sreed += ce[i];
      }
      if (tbool == true) {
        treed += ce[i];
      }
      if (jbool == true) {
        jreed += ce[i];
      }
      if (ubool == true) {
        ureed += ce[i];
      }
      if (xbool == true) {
        xreed += ce[i];
      }
      if (ybool == true) {
        yreed += ce[i];
      }
      if (zbool == true) {
        zreed += ce[i];
      }
      if (wbool == true) {
        wreed += ce[i];
      }
      if (Abool == true) {
        Areed += ce[i];
      }
      if (Bbool == true) {
        Breed += ce[i];
      }
      if (Cbool == true) {
        Creed += ce[i];
      }
      if (Dbool == true) {
        Dreed += ce[i];
      }
      if (Ebool == true) {
        Ereed += ce[i];
      }
      if (Fbool == true) {
        Freed += ce[i];
      }
      if (Gbool == true) {
        Greed += ce[i];
      }
      if (Hbool == true) {
        Hreed += ce[i];
      }
      if (Obool == true) {
        Oreed += ce[i];
      }
      if (Jbool == true) {
        Jreed += ce[i];
      }
      if (Pbool == true) {
        Preed += ce[i];
      }
      if (Rbool == true) {
        Rreed += ce[i];
      }
      if (Sbool == true) {
        Sreed += ce[i];
      }
      if (Tbool == true) {
        Treed += ce[i];
      }
      if (Xbool == true) {
        Xreed += ce[i];
      }
      if (Ubool == true) {
        Ureed += ce[i];
      }
    }

    cyc = false;
  }

}