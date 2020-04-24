function InsertButton() {

  FirstMemoryArray();
  var xyA = xyAngle[0];

  var xzA = xzAngle[0];

  var yzA = yzAngle[0];

  var xwA = xwAngle[0];

  var ywA = ywAngle[0];

  var zwA = zwAngle[0];

  FrontButton();

  for (var i = 0; i < LineArr; i++) {
    if (lines[i].getAttribute("style") == "stroke: red") {
      delDot[DotArr] = false;
      dots[DotArr] = document.getElementById("dotsvg").cloneNode();
      dots[DotArr].setAttribute("style", "display: inline");

      x1d[DotArr] = (x1d[lines[i].getAttribute("arx1")] + x1d[lines[i].getAttribute("arx2")]) / 2;
      x1dm[DotArr] = (x1dm[lines[i].getAttribute("arx1")] + x1dm[lines[i].getAttribute("arx2")]) / 2;
      y1d[DotArr] = (y1d[lines[i].getAttribute("arx1")] + y1d[lines[i].getAttribute("arx2")]) / 2;
      y1dm[DotArr] = (y1dm[lines[i].getAttribute("arx1")] + y1dm[lines[i].getAttribute("arx2")]) / 2;
      z1d[DotArr] = (z1d[lines[i].getAttribute("arx1")] + z1d[lines[i].getAttribute("arx2")]) / 2;
      z1dm[DotArr] = (z1dm[lines[i].getAttribute("arx1")] + z1dm[lines[i].getAttribute("arx2")]) / 2;
      w1d[DotArr] = (w1d[lines[i].getAttribute("arx1")] + w1d[lines[i].getAttribute("arx2")]) / 2;
      w1dm[DotArr] = (w1dm[lines[i].getAttribute("arx1")] + w1dm[lines[i].getAttribute("arx2")]) / 2;


      xyAngle[DotArr] = 0;

      xzAngle[DotArr] = 0;

      yzAngle[DotArr] = 0;

      xwAngle[DotArr] = 0;

      ywAngle[DotArr] = 0;

      zwAngle[DotArr] = 0;


      xyAnglem[DotArr] = xyAnglem[lines[i].getAttribute("arx1")];
      xzAnglem[DotArr] = xzAnglem[lines[i].getAttribute("arx1")];
      yzAnglem[DotArr] = yzAnglem[lines[i].getAttribute("arx1")];
      xwAnglem[DotArr] = xwAnglem[lines[i].getAttribute("arx1")];
      ywAnglem[DotArr] = ywAnglem[lines[i].getAttribute("arx1")];
      zwAnglem[DotArr] = zwAnglem[lines[i].getAttribute("arx1")];
      m[DotArr] = (m[lines[i].getAttribute("arx1")] + m[lines[i].getAttribute("arx2")]) / 2;
      n[DotArr] = (n[lines[i].getAttribute("arx1")] + n[lines[i].getAttribute("arx2")]) / 2;
      j[DotArr] = (j[lines[i].getAttribute("arx1")] + j[lines[i].getAttribute("arx2")]) / 2;
      q[DotArr] = (q[lines[i].getAttribute("arx1")] + q[lines[i].getAttribute("arx2")]) / 2;
      r[DotArr] = (r[lines[i].getAttribute("arx1")] + r[lines[i].getAttribute("arx2")]) / 2;
      s[DotArr] = (s[lines[i].getAttribute("arx1")] + s[lines[i].getAttribute("arx2")]) / 2;
      t[DotArr] = (t[lines[i].getAttribute("arx1")] + t[lines[i].getAttribute("arx2")]) / 2;
      u[DotArr] = (u[lines[i].getAttribute("arx1")] + u[lines[i].getAttribute("arx2")]) / 2;
      dots[lines[i].getAttribute("arx1")].setAttribute("style", "fill: blue");
      dots[lines[i].getAttribute("arx2")].setAttribute("style", "fill: blue");
      xo[DotArr] = xc + (x1d[DotArr]);

      yo[DotArr] = yc + (y1d[DotArr]);


      svg.appendChild(dots[DotArr]);



      dots[DotArr].setAttribute("x", xo[DotArr]);

      dots[DotArr].setAttribute("y", yo[DotArr]);
      lines[LineArr] = document.getElementById("li1").cloneNode();

      svg.appendChild(lines[LineArr]);

      xo1[LineArr] = xc + (x1d[lines[i].getAttribute("arx1")]);

      yo1[LineArr] = yc + (y1d[lines[i].getAttribute("arx1")]);

      xo2[LineArr] = xc + (x1d[DotArr]);

      yo2[LineArr] = yc + (y1d[DotArr]);

      lines[LineArr].setAttribute("arx1", lines[i].getAttribute("arx1"));

      lines[LineArr].setAttribute("ary1", lines[i].getAttribute("arx1"));

      lines[LineArr].setAttribute("arx2", DotArr);

      lines[LineArr].setAttribute("ary2", DotArr);

      lines[i].setAttribute("arx1", DotArr);

      lines[i].setAttribute("ary1", DotArr);
      dots[DotArr].setAttribute("style", "fill: red");


      lines[i].setAttribute("style", "stroke: green");


      LightL = 0;

      LightN++;

      LineLight = false;

      AllBut = false;
      DotLight = true;


      document.getElementById("Line").style.color = ("blue");

      document.getElementById("All").style.color = ("blue");

      document.getElementById("Vertex").style.color = ("orange");

      DotArr++;




      LineArr++;

    }

  }

  for (var i = 0; i < DotArr; i++) {

    xyAngle[i] += xyA;

    xzAngle[i] += xzA;

    yzAngle[i] += yzA;

    xwAngle[i] += xwA;

    ywAngle[i] += ywA;

    zwAngle[i] += zwA;

  }


}












function RemoveButton() {
  var minus = 0;
  function RemoveLines() {
    var deletedLines = new Array();
    var delLineIndex = 0;
    for (var i = 0; i < LineArr; i++) {
      if (lines[i].getAttribute("style") == "stroke: red") {
        dots[lines[i].getAttribute("arx1")].setAttribute("style", "fill: blue");
        dots[lines[i].getAttribute("arx2")].setAttribute("style", "fill: blue");
        deletedLines[delLineIndex] = i;
        delLineIndex++;
        LightL--;
      }
    }
    for (var i = 0; i < delLineIndex; i++) {
      deletedLines[i] -= minus;
      svg.removeChild(lines[deletedLines[i]]);
      lines.splice(deletedLines[i], 1);
      minus++;
      LineArr--;
    }
    minus = 0;
  }






  function RemoveDots() {
    FirstMemoryArray();
    var deletedDot = new Array();
    var delDotIndex = 0;
    var minus2 = 0;
    for (var i = 0; i < DotArr; i++) {
      if (dots[i].getAttribute("style") == "fill: red") {
        var deletedLines2 = new Array();
        var delLineIndex2 = 0;
        var minus2 = 0;
        var deletedLines2 = new Array();
        var delLineIndex2 = 0;
        for (var ii = 0; ii < LineArr; ii++) {
          if (lines[ii].getAttribute("arx1") == i || lines[ii].getAttribute("arx2") == i) {
            deletedLines2[delLineIndex2] = ii;
            delLineIndex2++;
          }

        }
        for (var ii = 0; ii < delLineIndex2; ii++) {
          deletedLines2[ii] -= minus2;
          svg.removeChild(lines[deletedLines2[ii]]);
          lines.splice(deletedLines2[ii], 1);
          minus2++;
          LineArr--;
        }

        deletedDot[delDotIndex] = i;
        delDotIndex++;
        LightN--;
      }
    }
    for (var i = 0; i < delDotIndex; i++) {
      deletedDot[i] -= minus;
      for (var ii = 0; ii < LineArr; ii++) {
        if (lines[ii].getAttribute("arx1") > deletedDot[i]) {
          var ccc = lines[ii].getAttribute("arx1");
          ccc--;
          lines[ii].setAttribute("arx1", ccc);
        }
        if (lines[ii].getAttribute("arx2") > deletedDot[i]) {
          var cccc = lines[ii].getAttribute("arx2");
          cccc--;
          lines[ii].setAttribute("arx2", cccc);
        }
      }
      svg.removeChild(dots[deletedDot[i]]);
      dots.splice(deletedDot[i], 1);
      delDot.splice(deletedDot[i], 1);
      x1d.splice(deletedDot[i], 1);
      x1dm.splice(deletedDot[i], 1);
      y1d.splice(deletedDot[i], 1);
      y1dm.splice(deletedDot[i], 1);

      z1dm.splice(deletedDot[i], 1);

      w1dm.splice(deletedDot[i], 1);


      xyAngle.splice(deletedDot[i], 1);
      xzAngle.splice(deletedDot[i], 1);
      yzAngle.splice(deletedDot[i], 1);
      xwAngle.splice(deletedDot[i], 1);
      ywAngle.splice(deletedDot[i], 1);
      zwAngle.splice(deletedDot[i], 1);


      xyAnglem.splice(deletedDot[i], 1);
      xzAnglem.splice(deletedDot[i], 1);
      yzAnglem.splice(deletedDot[i], 1);
      xwAnglem.splice(deletedDot[i], 1);
      ywAnglem.splice(deletedDot[i], 1);
      zwAnglem.splice(deletedDot[i], 1);
      m.splice(deletedDot[i], 1);

      n.splice(deletedDot[i], 1);

      j.splice(deletedDot[i], 1);
      q.splice(deletedDot[i], 1);

      r.splice(deletedDot[i], 1);

      s.splice(deletedDot[i], 1);

      t.splice(deletedDot[i], 1);

      u.splice(deletedDot[i], 1);
      minus++;
      DotArr--;
    }
    minus = 0;
  }
  if (AllBut == true) {
    RemoveLines();
    for (var i = 0; i < DotArr; i++) {
      dots[i].setAttribute("style", "fill: red");
    }
    RemoveDots();
  }
  else if (LineLight == true) {
    RemoveLines();
  }
  else if (DotLight == true) {
    RemoveDots();
  }

}













function ConnectButton() {
  FirstMemoryArray();
  if (DotLight == true) {
    var NumberLight = LightN;
    var NumberLine = 0;
    for (var i = 0; i < LightN - 1; i++) {
      lines[LineArr] = document.getElementById("li1").cloneNode();

      svg.appendChild(lines[LineArr]);

      lines[LineArr].setAttribute("style", "display: inline");
      LineArr++;
    }
    for (var i = 0; i < DotArr; i++) {
      if (dots[i].getAttribute("style") == "fill: red") {
        if (NumberLight == LightN) {
          lines[LineArr - 1].setAttribute("arx1", i);

          lines[LineArr - 1].setAttribute("ary1", i);

          NumberLight--;
        }
        else if (NumberLight > 1) {
          lines[LineArr - 1 - NumberLine].setAttribute("arx2", i);

          lines[LineArr - 1 - NumberLine].setAttribute("ary2", i);

          lines[LineArr - 1 - NumberLine].setAttribute("style", "fill: red");

          NumberLine++;
          lines[LineArr - 1 - NumberLine].setAttribute("arx1", i);

          lines[LineArr - 1 - NumberLine].setAttribute("ary1", i);

          lines[LineArr - 1 - NumberLine].setAttribute("style", "fill: red");

          NumberLight--;
        }
        else {
          lines[LineArr - 1 - NumberLine].setAttribute("arx2", i);

          lines[LineArr - 1 - NumberLine].setAttribute("ary2", i);

          lines[LineArr - 1 - NumberLine].setAttribute("style", "fill: red");

        }
      }
    }
  }
  else {
    InsertButton();
    ConnectButton();
  }

}














function ExtrudeButton() {
  FirstMemoryArray();
  var xyA = xyAngle[0];

  var xzA = xzAngle[0];

  var yzA = yzAngle[0];

  var xwA = xwAngle[0];

  var ywA = ywAngle[0];

  var zwA = zwAngle[0];

  var redDots = 0;
  var redDots2 = 0;
  var redDotsL = 0;
  var newDots = 0;
  var newLines = 0;
  var LinesP = 0;
  FrontButton();

  for (var i = 0; i < DotArr; i++) {
    if (dots[i].getAttribute("style") == "fill: red" && delDot[i] == false) {
      dots[DotArr] = document.getElementById("dotsvg").cloneNode();
      svg.appendChild(dots[DotArr]);

      dots[DotArr].setAttribute("style", "display: inline");

      delDot[DotArr] = false;
      x1d[DotArr] = x1d[i];
      x1dm[DotArr] = x1dm[i];
      y1d[DotArr] = y1d[i];
      y1dm[DotArr] = y1dm[i];

      z1dm[DotArr] = z1dm[i];

      w1dm[DotArr] = w1dm[i];



      xyAngle[DotArr] = 0;

      xzAngle[DotArr] = 0;

      yzAngle[DotArr] = 0;

      xwAngle[DotArr] = 0;

      ywAngle[DotArr] = 0;

      zwAngle[DotArr] = 0;


      xyAnglem[DotArr] = xyAnglem[i];
      xzAnglem[DotArr] = xzAnglem[i];
      yzAnglem[DotArr] = yzAnglem[i];
      xwAnglem[DotArr] = xwAnglem[i];
      ywAnglem[DotArr] = ywAnglem[i];
      zwAnglem[DotArr] = zwAnglem[i];
      m[DotArr] = m[i];

      n[DotArr] = n[i];

      j[DotArr] = j[i];
      q[DotArr] = q[i];

      r[DotArr] = r[i];

      s[DotArr] = s[i];

      t[DotArr] = t[i];

      u[DotArr] = u[i];

      lines[LineArr] = document.getElementById("li1").cloneNode();

      svg.appendChild(lines[LineArr]);

      lines[LineArr].setAttribute("style", "display: inline");
      lines[LineArr].setAttribute("arx1", i);

      lines[LineArr].setAttribute("ary1", i);

      lines[LineArr].setAttribute("arx2", DotArr);

      lines[LineArr].setAttribute("ary2", DotArr);

      DotArr++;
      LineArr++;
      redDotsL++;
      redDots++;

      dots[i].setAttribute("style", "fill: blue");
    }
  }

  for (var i = 0; i < DotArr; i++) {

    xyAngle[i] += xyA;

    xzAngle[i] += xzA;

    yzAngle[i] += yzA;

    xwAngle[i] += xwA;

    ywAngle[i] += ywA;

    zwAngle[i] += zwA;

  }

  newLines = 0;
  for (var i = 0; i < LightN; i++) {
    dots[DotArr - 1 - newLines].setAttribute("style", "fill: red");
    newLines++;
  }
}

function CenterButton() {
  FirstMemoryArray();
  var MaxX = 0;
  var MaxY = 0;
  var MaxZ = 0;
  var MaxW = 0;
  var MinX = 0;
  var MinY = 0;
  var MinZ = 0;
  var MinW = 0;
  var first = true;
  for (var i = 0; i < DotArr; i++) {
    if (dots[i].getAttribute("style") == "fill: red") {
      if (first == true) {
        MaxX = x1dm[i];
        MaxY = y1dm[i];
        MaxZ = z1dm[i];
        MaxW = w1dm[i];

        MinX = x1dm[i];
        MinY = y1dm[i];
        MinZ = z1dm[i];
        MinW = w1dm[i];
        first = false;
      }
      else {
        if (x1dm[i] > MaxX) {
          MaxX = x1dm[i];
        }
        if (y1dm[i] > MaxY) {
          MaxY = y1dm[i];
        }
        if (z1dm[i] > MaxZ) {
          MaxZ = z1dm[i];
        }
        if (w1dm[i] > MaxW) {
          MaxW = w1dm[i];
        }
        if (x1dm[i] < MinX) {
          MinX = x1dm[i];
        }
        if (y1dm[i] < MinY) {
          MinY = y1dm[i];
        }
        if (z1dm[i] < MinZ) {
          MinZ = z1dm[i];
        }
        if (w1dm[i] < MinW) {
          MinW = w1dm[i];
        }
      }
    }
  }
  var centerX = (MaxX + MinX) / 2;
  var centerY = (MaxY + MinY) / 2;
  var centerZ = (MaxZ + MinZ) / 2;
  var centerW = (MaxW + MinW) / 2;
  for (var i = 0; i < DotArr; i++) {
    x1dm[i] -= centerX;
    y1dm[i] -= centerY;
    z1dm[i] -= centerZ;
    w1dm[i] -= centerW;
  }

}








function CopyButton() {
  FirstMemoryArray();
  var deleteTrash = new Array();
  var TrashIndex = 0;
  var doti = DotArr;
  for (var i = 0; i < doti; i++) {
    delDot[DotArr] = false;
    x1d[DotArr] = x1d[i];
    x1dm[DotArr] = x1dm[i];
    y1d[DotArr] = y1d[i];
    y1dm[DotArr] = y1dm[i];
    z1d[DotArr] = z1d[i];
    z1dm[DotArr] = z1dm[i];
    w1d[DotArr] = w1d[i];
    w1dm[DotArr] = w1dm[i];

    xyAngle[DotArr] =
      xyAngle[i];

    xzAngle[DotArr] = xzAngle[i];

    yzAngle[DotArr] = yzAngle[i];

    xwAngle[DotArr] = xwAngle[i];

    ywAngle[DotArr] = ywAngle[i];

    zwAngle[DotArr] = zwAngle[i];



    xyAnglem[DotArr] =
      xyAnglem[i];
    xzAnglem[DotArr] = xzAnglem[i];
    yzAnglem[DotArr] = yzAnglem[i];
    xwAnglem[DotArr] = xwAnglem[i];
    ywAnglem[DotArr] = ywAnglem[i];
    zwAnglem[DotArr] = zwAnglem[i];
    m[DotArr] = m[i];
    n[DotArr] = n[i];
    j[DotArr] = j[i];
    q[DotArr] = q[i];
    r[DotArr] = r[i];
    s[DotArr] = s[i];
    t[DotArr] = t[i];
    u[DotArr] = u[i];
    xo[DotArr] = xo[i];

    yo[DotArr] = yo[i];

    dots[DotArr] = document.getElementById("dotsvg").cloneNode();
    if (dots[i].getAttribute("style") == "fill: red") {

      svg.appendChild(dots[DotArr]);

      dots[DotArr].setAttribute("x", xo[DotArr]);

      dots[DotArr].setAttribute("y", yo[DotArr]);
      dots[DotArr].setAttribute("style", "display: inline");
      dots[DotArr].setAttribute("style", "fill: red");


      dots[DotArr].setAttribute("group", dots[i].getAttribute("group") + String(CopyNumber));

    }

    else {
      deleteTrash[TrashIndex] = DotArr;
      TrashIndex++;
    }
    dots[i].setAttribute("style", "fill: blue");

    DotArr++;
  }
  var Lini = LineArr;
  for (var i = 0; i < Lini; i++) {
    if (lines[i].getAttribute("style") == "stroke: red") {
      lines[LineArr] = document.getElementById("li1").cloneNode();

      svg.appendChild(lines[LineArr]);

      lines[LineArr].setAttribute("style", "display: inline");
      lines[LineArr].setAttribute("arx1", Number(lines[i].getAttribute("arx1")) + doti);

      lines[LineArr].setAttribute("ary1", Number(lines[i].getAttribute("ary1")) + doti);

      lines[LineArr].setAttribute("arx2", Number(lines[i].getAttribute("arx2")) + doti);

      lines[LineArr].setAttribute("ary2", Number(lines[i].getAttribute("ary2")) + doti);

      lines[LineArr].setAttribute("style", "stroke: red");
      lines[LineArr].setAttribute("group", lines[i].getAttribute("group") + String(CopyNumber));

      lines[i].setAttribute("style", "stroke: green");
      LineArr++;
    }
  }
  var minus = 0;
  for (var i = 0; i < deleteTrash.length; i++) {
    deleteTrash[i] -= minus;
    for (var ii = Lini; ii < LineArr; ii++) {
      if (lines[ii].getAttribute("arx1") > deleteTrash[i] || lines[ii].getAttribute("ary1") > deleteTrash[i]) {
        var cccc = lines[ii].getAttribute("arx1");
        cccc--;
        lines[ii].setAttribute("arx1", cccc);
        lines[ii].setAttribute("ary1", cccc);
      }
      if (lines[ii].getAttribute("arx2") > deleteTrash[i] || lines[ii].getAttribute("ary2") > deleteTrash[i]) {
        var ccccc = lines[ii].getAttribute("arx2");
        ccccc--;
        lines[ii].setAttribute("arx2", ccccc);
        lines[ii].setAttribute("ary2", ccccc);
      }
    }
    dots.splice(deleteTrash[i], 1);
    delDot.splice(deleteTrash[i], 1);
    x1d.splice(deleteTrash[i], 1);
    x1dm.splice(deleteTrash[i], 1);
    y1d.splice(deleteTrash[i], 1);
    y1dm.splice(deleteTrash[i], 1);

    z1dm.splice(deleteTrash[i], 1);

    w1dm.splice(deleteTrash[i], 1);


    xyAngle.splice(deleteTrash[i], 1);
    xzAngle.splice(deleteTrash[i], 1);
    yzAngle.splice(deleteTrash[i], 1);
    xwAngle.splice(deleteTrash[i], 1);
    ywAngle.splice(deleteTrash[i], 1);
    zwAngle.splice(deleteTrash[i], 1);


    xyAnglem.splice(deleteTrash[i], 1);
    xzAnglem.splice(deleteTrash[i], 1);
    yzAnglem.splice(deleteTrash[i], 1);
    xwAnglem.splice(deleteTrash[i], 1);
    ywAnglem.splice(deleteTrash[i], 1);
    zwAnglem.splice(deleteTrash[i], 1);
    m.splice(deleteTrash[i], 1);

    n.splice(deleteTrash[i], 1);

    j.splice(deleteTrash[i], 1);
    q.splice(deleteTrash[i], 1);

    r.splice(deleteTrash[i], 1);

    s.splice(deleteTrash[i], 1);

    t.splice(deleteTrash[i], 1);

    u.splice(deleteTrash[i], 1);
    minus++;
    DotArr--;
  }
  LightN = 0;
  CopyNumber++;
  LineLight = true;
  DotLight = false;
  AllBut = false;

  document.getElementById("Line").style.color = ("orange");

  document.getElementById("All").style.color = ("blue");

  document.getElementById("Vertex").style.color = ("blue");


}











function LatheButton() {
  FirstMemoryArray();

  var doti = DotArr;
  var segment = Number(document.getElementById("segments1").value);
  var Angle = Number(360 / segment);
  var nowAngle = 0;
  var Indoti = 0;
  var Lini = LineArr;
  var InLini = 0;
  for (var ii = 0; ii < segment; ii++) {
    nowAngle += Angle;
    for (var i = 0; i < doti; i++) {
      delDot[DotArr] = false;
      dots[DotArr] = document.getElementById("dotsvg").cloneNode();
      dots[DotArr].setAttribute("style", "display: inline");

      x1d[DotArr] = x1d[i];
      x1dm[DotArr] = x1dm[i];
      y1d[DotArr] = y1d[i];
      y1dm[DotArr] = y1dm[i];
      z1d[DotArr] = z1d[i];
      z1dm[DotArr] = z1dm[i];
      w1d[DotArr] = w1d[i];
      w1dm[DotArr] = w1dm[i];

      xyAngle[DotArr] =
        xyAngle[i];

      xzAngle[DotArr] = xzAngle[i];

      yzAngle[DotArr] = yzAngle[i];

      xwAngle[DotArr] = xwAngle[i];

      ywAngle[DotArr] = ywAngle[i];

      zwAngle[DotArr] = zwAngle[i];


      if (document.getElementById("xyl").checked) {

        xyAnglem[DotArr] =
          xyAnglem[i] + nowAngle;
      }
      else {

        xyAnglem[DotArr] =
          xyAnglem[i];
      }
      if (document.getElementById("xzl").checked) {
        xzAnglem[DotArr] = xzAnglem[i] + nowAngle;
      }
      else {
        xzAnglem[DotArr] = xzAnglem[i];
      }
      if (document.getElementById("yzl").checked) {
        yzAnglem[DotArr] = yzAnglem[i] + nowAngle;
      }
      else {
        yzAnglem[DotArr] = yzAnglem[i];
      }
      if (document.getElementById("xwl").checked) {
        xwAnglem[DotArr] = xwAnglem[i] + nowAngle;
      }
      else {
        xwAnglem[DotArr] = xwAnglem[i];
      }
      if (document.getElementById("ywl").checked) {
        ywAnglem[DotArr] = ywAnglem[i] + nowAngle;
      }
      else {
        ywAnglem[DotArr] = ywAnglem[i];
      }
      if (document.getElementById("zwl").checked) {
        zwAnglem[DotArr] = zwAnglem[i] + nowAngle;
      }
      else {
        zwAnglem[DotArr] = zwAnglem[i];
      }
      m[DotArr] = m[i];
      n[DotArr] = n[i];
      j[DotArr] = j[i];
      q[DotArr] = q[i];
      r[DotArr] = r[i];
      s[DotArr] = s[i];
      t[DotArr] = t[i];
      u[DotArr] = u[i];
      xo[DotArr] = xo[i];

      yo[DotArr] = yo[i];

      if (delDot[i] == false) {

        svg.appendChild(dots[DotArr]);

      }

      dots[DotArr].setAttribute("x", xo[DotArr]);

      dots[DotArr].setAttribute("y", yo[DotArr]);
      dots[i].setAttribute("style", "fill: red");

      dots[DotArr].setAttribute("style", "fill: red");

      DotArr++;
    }
    for (var i = Indoti; i < doti + Indoti; i++) {
      lines[LineArr] = document.getElementById("li1").cloneNode();

      svg.appendChild(lines[LineArr]);

      lines[LineArr].setAttribute("style", "display: inline");
      lines[LineArr].setAttribute("arx1", i);

      lines[LineArr].setAttribute("ary1", i);

      lines[LineArr].setAttribute("arx2", i + doti);

      lines[LineArr].setAttribute("ary2", i + doti);

      lines[LineArr].setAttribute("style", "stroke: red");
      LineArr++;
    }
    for (var i = 0; i < Lini; i++) {
      lines[LineArr] = document.getElementById("li1").cloneNode();

      svg.appendChild(lines[LineArr]);

      lines[LineArr].setAttribute("style", "display: inline");
      lines[LineArr].setAttribute("arx1", Number(lines[i].getAttribute("arx1")) + DotArr);

      lines[LineArr].setAttribute("ary1", Number(lines[i].getAttribute("ary1")) + DotArr);

      lines[LineArr].setAttribute("arx2", Number(lines[i].getAttribute("arx2")) + DotArr);

      lines[LineArr].setAttribute("ary2", Number(lines[i].getAttribute("ary2")) + DotArr);

      lines[LineArr].setAttribute("style", "stroke: red");
      LineArr++;
    }
    Indoti += doti;
    InLini += Lini;
  }
  LineLight = true;
  DotLight = false;
  AllBut = false;

  document.getElementById("Line").style.color = ("orange");

  document.getElementById("All").style.color = ("blue");

  document.getElementById("Vertex").style.color = ("blue");


}











function SqweezeButton() {
  FirstMemoryArray();
  var znak = document.getElementById("side").value;
  var deleteTrash = new Array();
  var TrashIndex = 0;
  var doti = DotArr;
  for (var i = 0; i < doti; i++) {
    delDot[DotArr] = false;
    if (document.getElementById("xl").checked) {
      x1d[DotArr] = x1d[i] + Number(znak);
      x1dm[DotArr] = x1dm[i] + Number(znak);
    }
    else {
      x1d[DotArr] = x1d[i];
      x1dm[DotArr] = x1dm[i];
    }
    if (document.getElementById("yl").checked) {
      y1d[DotArr] = y1d[i] + Number(znak);
      y1dm[DotArr] = y1dm[i] + Number(znak);
    }
    else {
      y1d[DotArr] = y1d[i];
      y1dm[DotArr] = y1dm[i];
    }
    if (document.getElementById("zl").checked) {
      z1d[DotArr] = z1d[i] + Number(znak);
      z1dm[DotArr] = z1dm[i] + Number(znak);
    }
    else {
      z1d[DotArr] = z1d[i];
      z1dm[DotArr] = z1dm[i];
    }
    if (document.getElementById("wl").checked) {
      w1d[DotArr] = w1d[i] + Number(znak);
      w1dm[DotArr] = w1dm[i] + Number(znak);
    }
    else {
      w1d[DotArr] = w1d[i];
      w1dm[DotArr] = w1dm[i];
    }

    xyAngle[DotArr] =
      xyAngle[i];

    xzAngle[DotArr] = xzAngle[i];

    yzAngle[DotArr] = yzAngle[i];

    xwAngle[DotArr] = xwAngle[i];

    ywAngle[DotArr] = ywAngle[i];

    zwAngle[DotArr] = zwAngle[i];



    xyAnglem[DotArr] =
      xyAnglem[i];
    xzAnglem[DotArr] = xzAnglem[i];
    yzAnglem[DotArr] = yzAnglem[i];
    xwAnglem[DotArr] = xwAnglem[i];
    ywAnglem[DotArr] = ywAnglem[i];
    zwAnglem[DotArr] = zwAnglem[i];
    m[DotArr] = m[i];
    n[DotArr] = n[i];
    j[DotArr] = j[i];
    q[DotArr] = q[i];
    r[DotArr] = r[i];
    s[DotArr] = s[i];
    t[DotArr] = t[i];
    u[DotArr] = u[i];
    xo[DotArr] = xo[i];

    yo[DotArr] = yo[i];

    dots[DotArr] = document.getElementById("dotsvg").cloneNode();
    if (dots[i].getAttribute("style") == "fill: red") {

      svg.appendChild(dots[DotArr]);

      dots[DotArr].setAttribute("x", xo[DotArr]);

      dots[DotArr].setAttribute("y", yo[DotArr]);
      dots[DotArr].setAttribute("style", "display: inline");
      dots[DotArr].setAttribute("style", "fill: red");


      dots[DotArr].setAttribute("group", dots[i].getAttribute("group"));

      lines[LineArr] = document.getElementById("li1").cloneNode();
      svg.appendChild(lines[LineArr]);
      lines[LineArr].setAttribute("style", "display: inline");
      lines[LineArr].setAttribute("arx1", DotArr);

      lines[LineArr].setAttribute("ary1", DotArr);

      lines[LineArr].setAttribute("arx2", i);

      lines[LineArr].setAttribute("ary2", i);

      lines[LineArr].setAttribute("style", "stroke: green");
      lines[LineArr].setAttribute("group", lines[i].getAttribute("group"));

      LineArr++;
    }

    else {
      deleteTrash[TrashIndex] = DotArr;
      TrashIndex++;
    }
    dots[i].setAttribute("style", "fill: blue");

    DotArr++;
  }
  var Lini = LineArr;
  for (var i = 0; i < Lini; i++) {
    if (lines[i].getAttribute("style") == "stroke: red") {
      lines[LineArr] = document.getElementById("li1").cloneNode();
      svg.appendChild(lines[LineArr]);
      lines[LineArr].setAttribute("style", "display: inline");
      lines[LineArr].setAttribute("arx1", Number(lines[i].getAttribute("arx1")) + doti);

      lines[LineArr].setAttribute("ary1", Number(lines[i].getAttribute("ary1")) + doti);

      lines[LineArr].setAttribute("arx2", Number(lines[i].getAttribute("arx2")) + doti);

      lines[LineArr].setAttribute("ary2", Number(lines[i].getAttribute("ary2")) + doti);

      lines[LineArr].setAttribute("style", "stroke: red");
      lines[LineArr].setAttribute("group", lines[i].getAttribute("group"));

      lines[i].setAttribute("style", "stroke: green");
      LineArr++;
    }
  }
  var minus = 0;
  for (var i = 0; i < deleteTrash.length; i++) {
    deleteTrash[i] -= minus;
    for (var ii = 0; ii < LineArr; ii++) {
      if (lines[ii].getAttribute("arx1") > deleteTrash[i] || lines[ii].getAttribute("ary1") > deleteTrash[i]) {
        var cccc = lines[ii].getAttribute("arx1");
        cccc--;
        lines[ii].setAttribute("arx1", cccc);
        lines[ii].setAttribute("ary1", cccc);
      }
      if (lines[ii].getAttribute("arx2") > deleteTrash[i] || lines[ii].getAttribute("ary2") > deleteTrash[i]) {
        var ccccc = lines[ii].getAttribute("arx2");
        ccccc--;
        lines[ii].setAttribute("arx2", ccccc);
        lines[ii].setAttribute("ary2", ccccc);
      }
    }
    dots.splice(deleteTrash[i], 1);
    delDot.splice(deleteTrash[i], 1);
    x1d.splice(deleteTrash[i], 1);
    x1dm.splice(deleteTrash[i], 1);
    y1d.splice(deleteTrash[i], 1);
    y1dm.splice(deleteTrash[i], 1);

    z1dm.splice(deleteTrash[i], 1);

    w1dm.splice(deleteTrash[i], 1);


    xyAngle.splice(deleteTrash[i], 1);
    xzAngle.splice(deleteTrash[i], 1);
    yzAngle.splice(deleteTrash[i], 1);
    xwAngle.splice(deleteTrash[i], 1);
    ywAngle.splice(deleteTrash[i], 1);
    zwAngle.splice(deleteTrash[i], 1);


    xyAnglem.splice(deleteTrash[i], 1);
    xzAnglem.splice(deleteTrash[i], 1);
    yzAnglem.splice(deleteTrash[i], 1);
    xwAnglem.splice(deleteTrash[i], 1);
    ywAnglem.splice(deleteTrash[i], 1);
    zwAnglem.splice(deleteTrash[i], 1);
    m.splice(deleteTrash[i], 1);

    n.splice(deleteTrash[i], 1);

    j.splice(deleteTrash[i], 1);
    q.splice(deleteTrash[i], 1);

    r.splice(deleteTrash[i], 1);

    s.splice(deleteTrash[i], 1);

    t.splice(deleteTrash[i], 1);

    u.splice(deleteTrash[i], 1);
    minus++;
    DotArr--;
  }
  LightN = 0;
  CopyNumber++;
  LineLight = true;
  DotLight = false;
  AllBut = false;

  document.getElementById("Line").style.color = ("orange");

  document.getElementById("All").style.color = ("blue");

  document.getElementById("Vertex").style.color = ("blue");


}









function CollectButton() {
  FirstMemoryArray();
  var xdm = 0;
  var ydm = 0;
  var zdm = 0;
  var wdm = 0;
  var
    xyAng =
      0;

  var xzAng = 0;

  var yzAng = 0;

  var xwAng = 0;

  var ywAng = 0;

  var zwAng = 0;


  var xyAngm = 0;

  var xzAngm = 0;

  var yzAngm = 0;

  var xwAngm = 0;

  var ywAngm = 0;

  var zwAngm = 0;

  var m2 = 0;

  var n2 = 0;

  var j2 = 0;

  var q2 = 0;

  var r2 = 0;

  var s2 = 0;

  var t2 = 0;

  var u2 = 0;

  var TransformDots = new Array;
  var TransformDotsIndex = 0;
  var nameOfDot = "";

  for (var i = 0; i < DotArr; i++) {
    if (dots[i].getAttribute("style") == "fill: red") {
      xdm += x1dm[i];
      ydm += y1dm[i];
      zdm += z1dm[i];
      wdm += w1dm[i];

      xyAng +=
        xyAngle[i];

      xzAng += xzAngle[i];

      yzAng += yzAngle[i];

      xwAng += xwAngle[i];

      ywAng += ywAngle[i];

      zwAng += zwAngle[i];



      xyAngm +=
        xyAnglem[i];
      xzAngm += xzAnglem[i];
      yzAngm += yzAnglem[i];
      xwAngm += xwAnglem[i];
      ywAngm += ywAnglem[i];
      zwAngm += zwAnglem[i];
      m2 += m[i];
      n2 += n[i];
      j2 += j[i];
      q2 += q[i];
      r2 += r[i];
      s2 += s[i];
      t2 += t[i];
      u2 += u[i];
      dots[i].setAttribute("style", "fill: blue");
      TransformDots[TransformDotsIndex] = i;
      TransformDotsIndex++;
      nameOfDot = dots[i].getAttribute("group");
    }
  }
  xdm /= LightN;
  ydm /= LightN;
  zdm /= LightN;
  wdm /= LightN;

  xyAng /= LightN;
  xzAng /= LightN;
  yzAng /= LightN;
  xwAng /= LightN;
  ywAng /= LightN;
  zwAng /= LightN;

  xyAngm /= LightN;
  xzAngm /= LightN;
  yzAngm /= LightN;
  xwAngm /= LightN;
  ywAngm /= LightN;
  zwAngm /= LightN;
  m2 /= LightN;
  n2 /= LightN;
  j2 /= LightN;
  q2 /= LightN;
  r2 /= LightN;
  s2 /= LightN;
  t2 /= LightN;
  u2 /= LightN;


  delDot[DotArr] = false;

  dots[DotArr] = document.getElementById("dotsvg").cloneNode();
  dots[DotArr].setAttribute("style", "display: inline");

  dots[DotArr].setAttribute("group", nameOfDot);
  x1d[DotArr] = xdm;
  x1dm[DotArr] = xdm;
  y1d[DotArr] = ydm;
  y1dm[DotArr] = ydm;
  z1d[DotArr] = zdm;
  z1dm[DotArr] = zdm;
  w1d[DotArr] = wdm;
  w1dm[DotArr] = wdm;

  xyAngle[DotArr] =
    xyAng;

  xzAngle[DotArr] =
    xzAng;

  yzAngle[DotArr] =
    yzAng;

  xwAngle[DotArr] =
    xwAng;

  ywAngle[DotArr] =
    ywAng;

  zwAngle[DotArr] =
    zwAng;


  xyAnglem[DotArr] =
    xyAngm;
  xzAnglem[DotArr] = xzAngm;
  yzAnglem[DotArr] = yzAngm;
  xwAnglem[DotArr] = xwAngm;
  ywAnglem[DotArr] = ywAngm;
  zwAnglem[DotArr] = zwAngm;
  m[DotArr] = m2;
  n[DotArr] = n2;
  j[DotArr] = j2;
  q[DotArr] = q2;
  r[DotArr] = r2;
  s[DotArr] = s2;
  t[DotArr] = t2;
  u[DotArr] = u2;

  svg.appendChild(dots[DotArr]);

  xo[DotArr] = xc + (x1d[DotArr]);

  yo[DotArr] = yc + (y1d[DotArr]);



  dots[DotArr].setAttribute("x", xo[DotArr]);

  dots[DotArr].setAttribute("y", yo[DotArr]);
  dots[DotArr].setAttribute("style", "fill: red");

  LightN = 1;


  for (var i = 0; i < TransformDots.length; i++) {
    for (var ii = 0; ii < LineArr; ii++) {
      if (lines[ii].getAttribute("arx1") == TransformDots[i]) {
        lines[ii].setAttribute("arx1", DotArr);
        lines[ii].setAttribute("ary1", DotArr);
      }
      if (lines[ii].getAttribute("arx2") == TransformDots[i]) {
        lines[ii].setAttribute("arx2", DotArr);
        lines[ii].setAttribute("ary2", DotArr);
      }
    }
  }
  DotArr++;
  for (var i = 0; i < LineArr; i++) {
    if (lines[i].getAttribute("arx1") == lines[i].getAttribute("arx2")) {
      svg.removeChild(lines[i]);
      lines.splice(i, 1);
      LineArr--;
      i--;
    }
  }
  var minus = 0;
  for (var i = 0; i < TransformDots.length; i++) {
    TransformDots[i] -= minus;
    svg.removeChild(dots[TransformDots[i]]);
    for (var ii = 0; ii < LineArr; ii++) {
      if (lines[ii].getAttribute("arx1") > TransformDots[i] || lines[ii].getAttribute("ary1") > TransformDots[i]) {
        var cccc = lines[ii].getAttribute("arx1");
        cccc--;
        lines[ii].setAttribute("arx1", cccc);
        lines[ii].setAttribute("ary1", cccc);
      }
      if (lines[ii].getAttribute("arx2") > TransformDots[i] || lines[ii].getAttribute("ary2") > TransformDots[i]) {
        var ccccc = lines[ii].getAttribute("arx2");
        ccccc--;
        lines[ii].setAttribute("arx2", ccccc);
        lines[ii].setAttribute("ary2", ccccc);
      }
    }
    dots.splice(TransformDots[i], 1);
    delDot.splice(TransformDots[i], 1);
    x1d.splice(TransformDots[i], 1);
    x1dm.splice(TransformDots[i], 1);
    y1d.splice(TransformDots[i], 1);
    y1dm.splice(TransformDots[i], 1);

    z1dm.splice(TransformDots[i], 1);

    w1dm.splice(TransformDots[i], 1);


    xyAngle.splice(TransformDots[i], 1);
    xzAngle.splice(TransformDots[i], 1);
    yzAngle.splice(TransformDots[i], 1);
    xwAngle.splice(TransformDots[i], 1);
    ywAngle.splice(TransformDots[i], 1);
    zwAngle.splice(TransformDots[i], 1);


    xyAnglem.splice(TransformDots[i], 1);
    xzAnglem.splice(TransformDots[i], 1);
    yzAnglem.splice(TransformDots[i], 1);
    xwAnglem.splice(TransformDots[i], 1);
    ywAnglem.splice(TransformDots[i], 1);
    zwAnglem.splice(TransformDots[i], 1);
    m.splice(TransformDots[i], 1);

    n.splice(TransformDots[i], 1);

    j.splice(TransformDots[i], 1);
    q.splice(TransformDots[i], 1);

    r.splice(TransformDots[i], 1);

    s.splice(TransformDots[i], 1);

    t.splice(TransformDots[i], 1);

    u.splice(TransformDots[i], 1);
    minus++;
    DotArr--;
  }
}