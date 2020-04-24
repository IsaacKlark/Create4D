
function SelectAll() {
  document.getElementById("Group").style.color = "gray";
  GroupBut = false;
  if (AllBut == false && SetBut === false) {
    document.querySelector("#selectMode").innerText = english === false 
      ? "Режим выделения: всё" : "Highlight Mode: all";
    LightN = 0;
    LightL = 0;
    DotLight = false;
    LineLight = true;

    for (var i = 0; i < DotArr; i++) {
      if (delDot[i] == false) {
        dots[i].setAttribute("style", "fill: red");
        LightN++;
      }
    }

    for (var i = 0; i < LineArr; i++) {
      lines[i].setAttribute("style", "stroke: red");
      LightL++;
    }

    document.getElementById("Vertex").style.color = "blue";
    document.getElementById("Line").style.color = "blue";
    document.getElementById("All").style.color = "orange";
    AllBut = true;
  } else {
    document.querySelector("#selectMode").innerText = "";
    LightN = 0;
    LightL = 0;
    DotLight = false;
    LineLight = false;

    for (var i = 0; i < DotArr; i++) {
      dots[i].setAttribute("style", "fill: blue");

    }

    for (var i = 0; i < LineArr; i++) {
      lines[i].setAttribute("style", "stroke: green");

    }

    document.getElementById("All").style.color = "blue";
    AllBut = false;
  }
}

function Translate() {

  if (DotLight == false || LineLight == false) {
    if (Rotate == true && Move == false) {


      TranslateButton.value = "Move:";

      document.getElementById("yw").style.display = "none";

      document.getElementById("zw").style.display = "none";

      document.getElementById("t0").innerHTML = "x";

      document.getElementById("t1").innerHTML = "y";

      document.getElementById("t2").innerHTML = "z";

      document.getElementById("t3").innerHTML = "w";

      document.getElementById("t4").style.display = "none";

      document.getElementById("t5").style.display = "none";

      Rotate = false;

      Move = true;
    }

    else if (Move == true) {

      TranslateButton.value = "Move:";

      document.getElementById("yw").style.display = "none";

      document.getElementById("zw").style.display = "none";

      document.getElementById("t0").innerHTML = "x";

      document.getElementById("t1").innerHTML = "y";

      document.getElementById("t2").innerHTML = "z";

      document.getElementById("t3").innerHTML = "w";

      document.getElementById("t4").style.display = "none";

      document.getElementById("t5").style.display = "none";

      Rotate = false;

      Move = false;

    }
    else {


      if (RussianLanguage == true) {
        TranslateButton.value = "Вращать:";


      }
      else {
        TranslateButton.value = "Rotate:";

      }
      document.getElementById("yw").style.display = "inline";

      document.getElementById("zw").style.display = "inline";

      document.getElementById("t0").innerHTML = "xy";

      document.getElementById("t1").innerHTML = "xz";

      document.getElementById("t2").innerHTML = "yz";

      document.getElementById("t3").innerHTML = "xw";

      document.getElementById("t4").style.display = "inline";


      document.getElementById("t5").style.display = "inline";


      Move = false;

      Rotate = true;

    }
  }

  if (Move == true) {
    document.getElementById("text5").style.display = "none";
    document.getElementById("text6").style.display = "none";
    document.getElementById("t10").style.display = "none";
    document.getElementById("t11").style.display = "none";
    document.getElementById("t6").innerHTML = "x";
    document.getElementById("t7").innerHTML = "y";
    document.getElementById("t8").innerHTML = "z";
    document.getElementById("t9").innerHTML = "w";
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("text3").value = "";

    document.getElementById("text4").value = "";

  }
  else if (Rotate == true) {
    document.getElementById("text5").style.display = "inline";
    document.getElementById("text6").style.display = "inline";
    document.getElementById("t10").style.display = "inline";
    document.getElementById("t11").style.display = "inline";
    document.getElementById("t6").innerHTML = "xy";
    document.getElementById("t7").innerHTML = "xz";
    document.getElementById("t8").innerHTML = "yz";
    document.getElementById("t9").innerHTML = "xw";
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("text3").value = "";

    document.getElementById("text4").value = "";

  }
  else {
    document.getElementById("text1").value = "1";
    document.getElementById("text2").value = "1";
    document.getElementById("text3").value = "1";

    document.getElementById("text4").value = "1";


  }
}











function SelectButton() {
  if (VertexShow == false) {
    document.getElementById("selectGroup").style.display = "inline";
    VertexShow = true;
  }
  else {
    document.getElementById("selectGroup").style.display = "none";
    VertexShow = false;
  }
}

function SelectVertex() {
  document.getElementById("Group").style.color = "gray";
  GroupBut = false;
  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
  document.getElementById("text3").value = "";

  document.getElementById("text4").value = "";

  if (DotLight == false && SetBut === false) {
    AllBut = false;
    document.querySelector("#selectMode").innerText = english === false 
    ? "Режим выделения: вершины" : "Highlight Mode: vertices";

    for (var i = 0; i < DotArr; i++) {
      dots[i].setAttribute("style", "fill: blue");
    }

    for (var i = 0; i < LineArr; i++) {
      lines[i].setAttribute("style", "stroke: green");
    }

    LightN = 0;
    LightL = 0;
    document.getElementById("Line").style.color = "blue";
    document.getElementById("All").style.color = "blue";
    LineLight = false;
    document.getElementById("Vertex").style.color = "orange";
    DotLight = true;
  } else {
    document.querySelector("#selectMode").innerText = "";
    LightN = 0;
    document.getElementById("Vertex").style.color = "blue";
    DotLight = false;

    for (var i = 0; i < DotArr; i++) {
      dots[i].setAttribute("style", "fill: blue");
    }
  }
}

function SelectLine() {
  document.getElementById("Group").style.color = "gray";
  GroupBut = false;
  AllBut = false;
  DotLight = false;
  LightN = 0;
  document.getElementById("Vertex").style.color = "blue";
  document.getElementById("All").style.color = "blue";

  for (var i = 0; i < DotArr; i++) {
    dots[i].setAttribute("style", "fill: blue");
  }

  for (var i = 0; i < LineArr; i++) {
    lines[i].setAttribute("style", "stroke: green");
  }

  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
  document.getElementById("text3").value = "";
  document.getElementById("text4").value = "";

  if (LineLight == false && SetBut === false) {
    document.getElementById("Line").style.color = "orange";
    document.querySelector("#selectMode").innerText = english === false 
      ? "Режим выделения: ребра" : "Highlight Mode: edges";
    LineLight = true;
  } else {
    for (var i = 0; i < DotArr; i++) {
      dots[i].setAttribute("style", "fill: blue");
    }

    LightL = 0;
    LightN = 0;
    document.getElementById("Line").style.color = "blue";
    document.querySelector("#selectMode").innerText = "";
    LineLight = false;

    for (var i = 0; i < LineArr; i++) {
      lines[i].setAttribute("style", "fill: green");
    }
  }
}

function StartButton() {
  FirstMemoryArray();
  if (Start == false) {
    if (RussianLanguage == true) {
      document.getElementById("Start").value = "Стоп";
    }
    else {
      document.getElementById("Start").value = "Stop";
    }
    Start = true;
  }
  else {
    if (RussianLanguage == true) {
      document.getElementById("Start").value = "Старт";
    }
    else {
      document.getElementById("Start").value = "Start";
    }
    Start = false;




  }
  if (Start == true) {
    textes();
    document.getElementById("ok").style.display = "none";
  }
  else {
    document.getElementById("ok").style.display = "inline";
  }
}









function textes() {
  if (DotLight == false && LineLight == false) {
    if (Rotate == true) {
      if (checkXY.checked) {
        document.getElementById("text1").value = xy;
      }
      if (checkXZ.checked) {
        document.getElementById("text2").value = xz;
      }
      if (checkYZ.checked) {
        document.getElementById("text3").value = yz;
      }
      if (checkXW.checked) {
        document.getElementById("text4").value = xw;
      }
      if (checkYW.checked) {
        document.getElementById("text5").value = yw;
      }
      if (checkZW.checked) {
        document.getElementById("text6").value = zw;
      }
    }


    else if (Move == true) {
      if (checkXY.checked) {
        document.getElementById("text1").value = m[0];
      }
      if (checkXZ.checked) {
        document.getElementById("text2").value = n[0];
      }
      if (checkYZ.checked) {
        document.getElementById("text3").value = j[0];
      }
      if (checkXW.checked) {
        document.getElementById("text4").value = q[0];
      }
    }

    else {
      if (checkXY.checked) {
        document.getElementById("text1").value = r[0];
      }
      if (checkXZ.checked) {
        document.getElementById("text2").value = s[0];
      }
      if (checkYZ.checked) {
        document.getElementById("text3").value = t[0];
      }
      if (checkXW.checked) {
        document.getElementById("text4").value = u[0];
      }
    }
  }




  else if (DotLight == true) {
    if (Rotate == true) {
      if (checkXY.checked) {
        document.getElementById("text1").value = xypov;
      }
      if (checkXZ.checked) {
        document.getElementById("text2").value = xzpov;
      }
      if (checkYZ.checked) {
        document.getElementById("text3").value = yzpov;
      }
      if (checkXW.checked) {
        document.getElementById("text4").value = xwpov;
      }
      if (checkYW.checked) {
        document.getElementById("text5").value = ywpov;
      }
      if (checkZW.checked) {
        document.getElementById("text6").value = zwpov;
      }






    }
    else if (Move == true) {
      for (var i = 0; i < DotArr; i++) {
        if (dots[i].getAttribute("style") == "fill: red") {
          if (LightN == 1) {
            document.getElementById("text1").value = (x1dm[i] * r[i] + m[i]);
            document.getElementById("text2").value = (y1dm[i] * s[i] + n[i]);
            document.getElementById("text3").value = (z1dm[i] * t[i] + j[i]);
            document.getElementById("text4").value = (w1dm[i] * u[i] + q[i]);
          }
          else {

            document.getElementById("text1").value = "";
            document.getElementById("text2").value = "";
            document.getElementById("text3").value = "";

            document.getElementById("text4").value = "";

          }

        }
      }
    }
    else {
      document.getElementById("text1").value = "";
      document.getElementById("text2").value = "";
      document.getElementById("text3").value = "";

      document.getElementById("text4").value = "";

    }
  }






  else if (LineLight == true) {
    if (Rotate == true) {
      if (checkXY.checked) {
        document.getElementById("text1").value = xypov;
      }
      if (checkXZ.checked) {
        document.getElementById("text2").value = xzpov;
      }
      if (checkYZ.checked) {
        document.getElementById("text3").value = yzpov;
      }
      if (checkXW.checked) {
        document.getElementById("text4").value = xwpov;
      }
      if (checkYW.checked) {
        document.getElementById("text5").value = ywpov;
      }
      if (checkZW.checked) {
        document.getElementById("text6").value = zwpov;
      }

    }
    else if (Move == true) {
      for (var i = 0; i < LineArr; i++) {
        if (lines[i].getAttribute("style") == "stroke: red") {
          if (LightL == 1) {
            document.getElementById("text1").value = (x1dm[lines[i].getAttribute("arx1")] * r[lines[i].getAttribute("arx1")] + m[lines[i].getAttribute("arx1")] + x1dm[lines[i].getAttribute("arx2")] * r[lines[i].getAttribute("arx2")] + m[lines[i].getAttribute("arx2")]
            ) / 2;





            document.getElementById("text2").value = (y1dm[lines[i].getAttribute("arx1")] * s[lines[i].getAttribute("arx1")] + n[lines[i].getAttribute("arx1")] + y1dm[lines[i].getAttribute("arx2")] * s[lines[i].getAttribute("arx2")] + n[lines[i].getAttribute("arx2")]
            ) / 2;
            document.getElementById("text3").value = (z1dm[lines[i].getAttribute("arx1")] * t[lines[i].getAttribute("arx1")] + j[lines[i].getAttribute("arx1")] + z1dm[lines[i].getAttribute("arx2")] * t[lines[i].getAttribute("arx2")] + j[lines[i].getAttribute("arx2")]
            ) / 2;

            document.getElementById("text4").value = (w1dm[lines[i].getAttribute("arx1")] * u[lines[i].getAttribute("arx1")] + q[lines[i].getAttribute("arx1")] + w1dm[lines[i].getAttribute("arx2")] * u[lines[i].getAttribute("arx1")] + q[lines[i].getAttribute("arx2")]
            ) / 2;
          }

          else {

            document.getElementById("text1").value = "";
            document.getElementById("text2").value = "";
            document.getElementById("text3").value = "";

            document.getElementById("text4").value = "";

          }

        }
      }

    }

    else {
      document.getElementById("text1").value = "";
      document.getElementById("text2").value = "";
      document.getElementById("text3").value = "";

      document.getElementById("text4").value = "";


    }
  }

}










function Ok() {
  FirstMemoryArray();
  if (DotLight == false && LineLight == false) {

    if (Rotate == true) {
      for (var i = 0; i < DotArr; i++) {

        xyAngle[i] = document.getElementById("text1").value;
        xzAngle[i] = document.getElementById("text2").value;
        yzAngle[i] = document.getElementById("text3").value;
        xwAngle[i] = document.getElementById("text4").value;
        ywAngle[i] = document.getElementById("text5").value;
        zwAngle[i] = document.getElementById("text6").value;
      }

    }
    else if (Move == true) {
      for (var i = 0; i < DotArr; i++) {
        if (plus.checked) {
          m[i] += Number(document.getElementById("text1").value);
          n[i] += Number(document.getElementById("text2").value);
          j[i] += Number(document.getElementById("text3").value);
          q[i] += Number(document.getElementById("text4").value);
        }
        else {
          m[i] -= Number(document.getElementById("text1").value);
          n[i] -= Number(document.getElementById("text2").value);
          j[i] -= Number(document.getElementById("text3").value);
          q[i] -= Number(document.getElementById("text4").value);
        }
      }
    }
    else {
      for (var i = 0; i < DotArr; i++) {
        if (plus.checked) {
          r[i] *= Number(document.getElementById("text1").value);
          s[i] *= Number(document.getElementById("text2").value);
          t[i] *= Number(document.getElementById("text3").value);
          u[i] *= Number(document.getElementById("text4").value);
        }
        else {
          r[i] /= Number(document.getElementById("text1").value);
          s[i] /= Number(document.getElementById("text2").value);
          t[i] /= Number(document.getElementById("text3").value);
          u[i] /= Number(document.getElementById("text4").value);
        }
      }
    }


  }
  else if (DotLight == true) {
    if (Rotate == true) {
      for (var i = 0; i < DotArr; i++) {

        if (dots[i].getAttribute("style") == "fill: red") {
          xyAnglem[i] = document.getElementById("text1").value;
          xzAnglem[i] = document.getElementById("text2").value;
          yzAnglem[i] = document.getElementById("text3").value;
          xwAnglem[i] = document.getElementById("text4").value;
          ywAnglem[i] = document.getElementById("text5").value;
          zwAnglem[i] = document.getElementById("text6").value;
        }

      }

    }
    else if (Move == true) {
      for (var i = 0; i < DotArr; i++) {
        if (plus.checked) {
          if (dots[i].getAttribute("style") == "fill: red") {
            if (LightN == 1) {
              x1dm[i] = (Number(document.getElementById("text1").value) - m[i]) / r[i];
              y1dm[i] = (Number(document.getElementById("text2").value) - n[i]) / s[i];
              z1dm[i] = (Number(document.getElementById("text3").value) - j[i]) / t[i];
              w1dm[i] = (Number(document.getElementById("text4").value) - q[i]) / u[i];
            }
            else {

              x1dm[i] += Number(document.getElementById("text1").value);
              y1dm[i] += Number(document.getElementById("text2").value);
              z1dm[i] += Number(document.getElementById("text3").value);
              w1dm[i] += Number(document.getElementById("text4").value);
            }

          }
        }


      }
    }

    else {
      for (var i = 0; i < DotArr; i++) {
        if (dots[i].getAttribute("style") == "fill: red") {
          if (plus.checked) {
            r[i] *= Number(document.getElementById("text1").value);
            s[i] *= Number(document.getElementById("text2").value);
            t[i] *= Number(document.getElementById("text3").value);
            u[i] *= Number(document.getElementById("text4").value);
          }
          else {
            r[i] /= Number(document.getElementById("text1").value);
            s[i] /= Number(document.getElementById("text2").value);
            t[i] /= Number(document.getElementById("text3").value);
            u[i] /= Number(document.getElementById("text4").value);
          }
        }
      }
    }




  }
  else if (LineLight == true) {
    if (Rotate == true) {
      for (var i = 0; i < DotArr; i++) {

        if (dots[i].getAttribute("style") == "fill: red") {
          xyAnglem[i] = document.getElementById("text1").value;
          xzAnglem[i] = document.getElementById("text2").value;
          yzAnglem[i] = document.getElementById("text3").value;
          xwAnglem[i] = document.getElementById("text4").value;
          ywAnglem[i] = document.getElementById("text5").value;
          zwAnglem[i] = document.getElementById("text6").value;

        }

      }
    }
    else if (Move == true) {
      for (var i = 0; i < DotArr; i++) {
        if (dots[i].getAttribute("style") == "fill: red" && delDot[i] == false) {

          if (plus.checked) {
            x1dm[i] += Number(document.getElementById("text1").value);
            y1dm[i] += Number(document.getElementById("text2").value);
            z1dm[i] += Number(document.getElementById("text3").value);
            w1dm[i] += Number(document.getElementById("text4").value);
          }
          else {
            x1dm[i] -= Number(document.getElementById("text1").value);
            y1dm[i] -= Number(document.getElementById("text2").value);
            z1dm[i] -= Number(document.getElementById("text3").value);
            w1dm[i] -= Number(document.getElementById("text4").value);
          }
        }
      }
    }


    else {
      for (var i = 0; i < DotArr; i++) {

        if (dots[i].getAttribute("style") == "fill: red" && delDot[i] == false) {
          if (plus.checked) {
            r[i] *= Number(document.getElementById("text1").value);
            s[i] *= Number(document.getElementById("text2").value);
            t[i] *= Number(document.getElementById("text3").value);
            u[i] *= Number(document.getElementById("text4").value);

          }
          else {
            r[i] /= Number(document.getElementById("text1").value);
            s[i] /= Number(document.getElementById("text2").value);
            t[i] /= Number(document.getElementById("text3").value);

            u[i] /= Number(document.getElementById("text4").value);
          }
        }
      }

    }








  }




}






function Autotext() {
  if (Rotate == true) {
    if (RussianLanguage == true) {
      document.getElementById("te").innerHTML = " Углы: ";

    }
    else {
      document.getElementById("te").innerHTML = " Angles: ";

    }
  }
  else if (Move == true) {
    if (DotLight == true && LineLight == true) {
      if (RussianLanguage == true) {
        document.getElementById("te").innerHTML = " Не считается! ";

      }
      else {
        document.getElementById("te").innerHTML = " Not consideret! ";

      }
    }
    else if (DotLight == true) {
      if (Start == true) {
        if (LightN < 2) {
          if (RussianLanguage == true) {
            document.getElementById("te").innerHTML = " Координаты: ";

          }
          else {
            document.getElementById("te").innerHTML = " Coordinates: ";

          }
        }
        else {
          if (RussianLanguage == true) {
            document.getElementById("te").innerHTML = " Не считается! ";

          }
          else {
            document.getElementById("te").innerHTML = " Not consideret! ";

          }
        }
      }
      else {
        if (LightN < 2) {
          if (RussianLanguage == true) {
            document.getElementById("te").innerHTML = " Координаты: ";

          }
          else {
            document.getElementById("te").innerHTML = " Coordinates: ";

          }
        }
        else {
          document.getElementById("te").innerHTML = " +/- ";

        }
      }
    }
    else if (LineLight == true) {
      if (Start == true) {
        if (LightL < 2) {
          if (RussianLanguage == true) {
            document.getElementById("te").innerHTML = " Координаты: ";

          }
          else {
            document.getElementById("te").innerHTML = " Coordinates: ";

          }
        }
        else {
          if (RussianLanguage == true) {
            document.getElementById("te").innerHTML = " Не считается! ";

          }
          else {
            document.getElementById("te").innerHTML = " Not consideret! ";

          }
        }
      }
      else {

        document.getElementById("te").innerHTML = " +/- ";


      }
    }
    else {
      if (Start == true) {
        if (RussianLanguage == true) {
          document.getElementById("te").innerHTML = " Координаты: ";

        }
        else {
          document.getElementById("te").innerHTML = " Coordinates: ";

        }
      }
      else {
        document.getElementById("te").innerHTML = " +/- ";

      }
    }
  }
  else {
    document.getElementById("te").innerHTML = " */: ";
  }
}









function FrontButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i];
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = 0;
  yz = 0;
  xw = 0;
  yw = 0;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 0;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = 0;

  }
}






function BackButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i] + 180;
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = 180;
  yz = 0;
  xw = 0;
  yw = 0;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 180;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = 0;

  }
}






function RightButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i] - 90;
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = -90;
  yz = 0;
  xw = 0;
  yw = 0;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = -90;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = 0;

  }
}







function LeftButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i] + 90;
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = 90;
  yz = 0;
  xw = 0;
  yw = 0;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 90;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = 0;

  }
}







function TopButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i];
    yzAngle[i] -= yzAngle[i] + 90;
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = 0;
  yz = 90;
  xw = 0;
  yw = 0;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 0;
    document.getElementById("text3").value = 90;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = 0;

  }
}








function BottomButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i];
    yzAngle[i] -= yzAngle[i] - 90;
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = 0;
  yz = -90;
  xw = 0;
  yw = 0;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 0;
    document.getElementById("text3").value = -90;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = 0;

  }
}






function AnaButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i];
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i] + 90;
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = 0;
  yz = 0;
  xw = 90;
  yw = 0;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 0;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = 90;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = 0;

  }
}






function KataButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i];
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i] - 90;
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = 0;
  yz = 0;
  xw = -90;
  yw = 0;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 0;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = -90;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = 0;

  }
}







function TetrupButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i];
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i] + 90;
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = 0;
  yz = 0;
  xw = 0;
  yw = 90;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 0;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = 90;

    document.getElementById("text6").value = 0;

  }
}







function TetrotomButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i];
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i] - 90;
    zwAngle[i] -= zwAngle[i];
  }
  xy = 0;
  xz = 0;
  yz = 0;
  xw = 0;
  yw = -90;
  zw = 0;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 0;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = -90;

    document.getElementById("text6").value = 0;

  }
}






function IsideButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i];
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i] + 90;
  }
  xy = 0;
  xz = 0;
  yz = 0;
  xw = 0;
  yw = 0;
  zw = 90;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 0;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = 90;

  }
}








function OusideButton() {
  for (var i = 0; i < DotArr; i++) {
    xyAngle[i] -= xyAngle[i];
    xzAngle[i] -= xzAngle[i];
    yzAngle[i] -= yzAngle[i];
    xwAngle[i] -= xwAngle[i];
    ywAngle[i] -= ywAngle[i];
    zwAngle[i] -= zwAngle[i] - 90;
  }
  xy = 0;
  xz = 0;
  yz = 0;
  xw = 0;
  yw = 0;
  zw = -90;
  if (Rotate == true) {
    document.getElementById("text1").value = 0;
    document.getElementById("text2").value = 0;
    document.getElementById("text3").value = 0;

    document.getElementById("text4").value = 0;

    document.getElementById("text5").value = 0;

    document.getElementById("text6").value = -90;

  }
}

function ModificationsButton() {
  if (ModBut == false) {
    document.querySelector('#modificatorsWrapper').style.display = "flex";
    ModBut = true;
  } else {
    ModBut = false;
    document.querySelector('#modificatorsWrapper').style.display = "none";
  }
}

function SettingsButton() {
  if (SetBut == false) {
    document.querySelector(".openedSettingsButton").style.display = 'flex';
    document.querySelector("#selectMode").innerText = "";
    SetBut = true;
  } else {
    document.querySelector(".openedSettingsButton").style.display = 'none';
    SetBut = false;
  }
}

function FileButton() {
  if (FileBut == false) {
    document.querySelector('.openedFileButton').style.display = "block";
    FileBut = true;
  } else {
    FileBut = false;
    document.querySelector('.openedFileButton').style.display = "none";
  }
}

function OpenButton() {
  document.getElementById("fileInput").click();
}


function NewButton() {

  for (var i = 0; i < DotArr; i++) {
    svg.removeChild(dots[i]);

  }
  for (var i = 0; i < LineArr; i++) {
    lines[i].setAttribute("arx1", 0);
    lines[i].setAttribute("ary1", 0);
    lines[i].setAttribute("arx2", 0);
    lines[i].setAttribute("ary2", 0);
    svg.removeChild(lines[i]);

  }
  dots.splice(1);
  lines.splice(1);
  x1d.splice(1);
  x1dm.splice(1);
  y1d.splice(1);
  y1dm.splice(1);
  z1d.splice(1);
  z1dm.splice(1);
  w1d.splice(1);
  w1dm.splice(1);


  xyAngle.splice(1);
  xzAngle.splice(1);
  yzAngle.splice(1);
  xwAngle.splice(1);
  ywAngle.splice(1);
  zwAngle.splice(1);

  xyAnglem.splice(1);
  xzAnglem.splice(1);
  yzAnglem.splice(1);
  xwAnglem.splice(1);
  ywAnglem.splice(1);
  zwAnglem.splice(1);

  m.splice(1);
  n.splice(1);
  j.splice(1);
  q.splice(1);
  r.splice(1);
  s.splice(1);
  t.splice(1);
  u.splice(1);

  xo.splice(1);
  yo.splice(1);

  DotArr = 0;
  LineArr = 0;
  LightN = 0;
  LightL = 0;


}





function UndoButton() {
  if (indexMemory > 0) {
    indexMemory--;
  }
  ce = AllMemory[indexMemory];
  cyc = true;
  NewButton();

}



function RedoButton() {
  if (indexMemory < AllMemory.length) {
    indexMemory++;
  }
  ce = AllMemory[indexMemory];
  cyc = true;
  NewButton();

}





function ReconsiderButton() {
  for (var i = 0; i < DotArr; i++) {
    var xp = x1dn[i];
    var yp = y1dn[i];
    var zp = z1dn[i];
    var wp = w1dn[i];

    x1d[i] = xp;
    x1dm[i] = xp;
    y1d[i] = yp;
    y1dm[i] = yp;
    z1d[i] = zp;
    z1dm[i] = zp;
    w1d[i] = wp;
    w1dm[i] = wp;

    xyAnglem[i] = 0;
    xzAnglem[i] = 0;
    yzAnglem[i] = 0;
    xwAnglem[i] = 0;
    ywAnglem[i] = 0;
    zwAnglem[i] = 0;
  }
}




function ObjectsButton() {
  if (obj == false) {
    document.querySelector("#shapesWrap").style.display = "flex";
    obj = true;
  } else {
    document.querySelector("#shapesWrap").style.display = "none";
    document.querySelector("#figuresWithDimensions").style.display = "none";
    document.querySelector('.D0').style.display = "none";
    document.querySelector('.D1').style.display = "none";
    document.querySelector('.D2').style.display = "none";
    document.querySelector('.D3').style.display = "none";
    document.querySelector('.D4').style.display = "none";

    obj = false;
    d0bool = false;
    d1bool = false;
    d2bool = false;
    d3bool = false;
    d4bool = false;
  }
}




function D0Button() {
  if (d0bool == false) {
    document.querySelector('.D0').style.display = "flex";
    document.querySelector("#figuresWithDimensions").style.display = "flex";
    d0bool = true;
  }
  else {
    document.querySelector('.D0').style.display = "none";
    d0bool = false;
  }
}

function D1Button() {
  if (d1bool == false) {
    document.querySelector('.D1').style.display = "flex";
    document.querySelector("#figuresWithDimensions").style.display = "flex";
    d1bool = true;
  }
  else {
    document.querySelector('.D1').style.display = "none";
    d1bool = false;
  }
}


function D2Button() {
  if (d2bool == false) {
    document.querySelector('.D2').style.display = "flex";
    document.querySelector("#figuresWithDimensions").style.display = "flex";
    d2bool = true;
  } else {
    document.querySelector('.D2').style.display = "none";
    d2bool = false;
  }
}

function D3Button() {
  if (d3bool == false) {
    document.querySelector('.D3').style.display = "flex";
    document.querySelector("#figuresWithDimensions").style.display = "flex";
    d3bool = true;
  } else {
    document.querySelector('.D3').style.display = "none";
    d3bool = false;
  }
}


function D4Button() {
  if (d4bool == false) {
    document.querySelector('.D4').style.display = "flex";
    document.querySelector("#figuresWithDimensions").style.display = "flex";
    d4bool = true;
  } else {
    document.querySelector('.D4').style.display = "none";
    d4bool = false;
  }
}

function MirrorButton() {
  for (var i = 0; i < DotArr; i++) {
    if (dots[i].getAttribute("style") == "fill: red") {
      if (document.getElementById("xlm").checked) {
        x1d[i] *= -1;
        x1dm[i] *= -1;
      }
      if (document.getElementById("ylm").checked) {
        y1d[i] *= -1;
        y1dm[i] *= -1;
      }
      if (document.getElementById("zlm").checked) {
        z1d[i] *= -1;
        z1dm[i] *= -1;
      }
      if (document.getElementById("wlm").checked) {
        w1d[i] *= -1;
        w1dm[i] *= -1;
      }
    }
  }

}






function TogroupButton() {
  for (var i = 0; i < LineArr; i++) {
    if (lines[i].getAttribute("style") == "stroke: red") {
      lines[i].setAttribute("group", String(document.getElementById("objectName").value));
      lines[i].setAttribute("style", "stroke: gray");
    }
  }
  for (var i = 0; i < DotArr; i++) {
    if (dots[i].getAttribute("style") == "fill: red") {
      dots[i].setAttribute("group", String(document.getElementById("objectName").value));
      dots[i].setAttribute("style", "stroke: gray");
    }
  }
}

function SelectGroup() {
  if (GroupBut == false && SetBut === false) {
    document.querySelector("#selectMode").innerText = english === false 
      ? "Режим выделения: группа" : "Highlight Mode: group";
    groupName = "none";
    AllBut = false;
    LineLight = true;
    DotLight = false;
    LightN = 0;
    LightL = 0;
    document.getElementById("Vertex").style.color = "blue";
    document.getElementById("Line").style.color = "blue";
    document.getElementById("All").style.color = "blue";
    document.getElementById("Group").style.color = "orange";
    GroupBut = true;
    firstRaz = true;

    for (var i = 0; i < LineArr; i++) {
      lines[i].setAttribute("style", "stroke: green");
    }

    for (var i = 0; i < DotArr; i++) {
      dots[i].setAttribute("style", "fill: blue");
    }
  } else {
    document.querySelector("#selectMode").innerText = "";
    document.getElementById("Group").style.color = "gray";
    GroupBut = false;
    firstRaz = false;
  }
}





function RussianButton() {
  document.getElementById("selectLanguage").style.display = "none";
  document.getElementById("main").style.display = "inline";
  RussianLanguage = true;
}





function EnglishButton() {
  english = true;
  document.getElementById("selectLanguage").style.display = "none";
  document.getElementById("main").style.display = "inline";
  EnglishText();
}





function openMenu() {
  document.getElementById("info").style.display = "none";
  document.getElementById("opentext").style.display = "inline";
}



function BackFunc() {
  closeprop();
  closemods();
  closeFigures();
  document.getElementById("info").style.display = "inline";
  document.getElementById("opentext").style.display = "none";
  document.getElementById("dfor").style.display = "none";
  document.getElementById("dfigur").style.display = "none";
  document.getElementById("dinter").style.display = "none";
  show = false;
}



function whatis4DFunc() {
  closeprop();

  closemods();
  document.getElementById("dmods").style.display = "none";
  document.getElementById("dinter").style.display = "none";
  closeFigures();
  if (show == false) {
    show = true;
    document.getElementById("dfor").style.display = "inline";
  }
  else {
    show = false;
    document.getElementById("dfor").style.display = "none";
    document.getElementById("dfigur").style.display = "none";
  }
}





function figuresFunc() {
  closeprop();

  closemods();
  document.getElementById("dmods").style.display = "none";
  document.getElementById("dinter").style.display = "none";
  closeFigures();
  if (show == false) {
    show = true;
    document.getElementById("dfigur").style.display = "inline";
    document.getElementById("dfor").style.display = "none";

  }
  else {
    show = false;
    document.getElementById("dfor").style.display = "none";
    document.getElementById("dfigur").style.display = "none";
  }
}

function closeFigures() {
  for (var i = 1; i < 30; i++) {
    var slovo = "figure" + String(i);
    document.getElementById(slovo).style.display = "none";
  }
}

function figure1() {
  closeFigures();
  if (document.getElementById("figure1").style.display == "inline") {
    document.getElementById("figure1").style.display = "none";
  }
  else {
    document.getElementById("figure1").style.display = "inline";
  }
}


function figure2() {
  closeFigures();
  if (document.getElementById("figure2").style.display == "inline") {
    document.getElementById("figure2").style.display = "none";
  }
  else {
    document.getElementById("figure2").style.display = "inline";
  }
}

function figure3() {
  closeFigures();
  if (document.getElementById("figure3").style.display == "inline") {
    document.getElementById("figure3").style.display = "none";
  }
  else {
    document.getElementById("figure3").style.display = "inline";
  }
}

function figure4() {
  closeFigures();
  if (document.getElementById("figure4").style.display == "inline") {
    document.getElementById("figure4").style.display = "none";
  }
  else {
    document.getElementById("figure4").style.display = "inline";
  }
}

function figure5() {
  closeFigures();
  if (document.getElementById("figure5").style.display == "inline") {
    document.getElementById("figure5").style.display = "none";
  }
  else {
    document.getElementById("figure5").style.display = "inline";
  }
}

function figure6() {
  closeFigures();
  if (document.getElementById("figure6").style.display == "inline") {
    document.getElementById("figure6").style.display = "none";
  }
  else {
    document.getElementById("figure6").style.display = "inline";
  }
}

function figure7() {
  closeFigures();
  if (document.getElementById("figure7").style.display == "inline") {
    document.getElementById("figure7").style.display = "none";
  }
  else {
    document.getElementById("figure7").style.display = "inline";
  }
}


function figure8() {
  closeFigures();
  if (document.getElementById("figure8").style.display == "inline") {
    document.getElementById("figure8").style.display = "none";
  }
  else {
    document.getElementById("figure8").style.display = "inline";
  }
}

function figure9() {
  closeFigures();
  if (document.getElementById("figure9").style.display == "inline") {
    document.getElementById("figure9").style.display = "none";
  }
  else {
    document.getElementById("figure9").style.display = "inline";
  }
}

function figure10() {
  closeFigures();
  if (document.getElementById("figure10").style.display == "inline") {
    document.getElementById("figure10").style.display = "none";
  }
  else {
    document.getElementById("figure10").style.display = "inline";
  }
}

function figure11() {
  closeFigures();
  if (document.getElementById("figure11").style.display == "inline") {
    document.getElementById("figure11").style.display = "none";
  }
  else {
    document.getElementById("figure11").style.display = "inline";
  }
}


function figure12() {
  closeFigures();
  if (document.getElementById("figure12").style.display == "inline") {
    document.getElementById("figure12").style.display = "none";
  }
  else {
    document.getElementById("figure12").style.display = "inline";
  }
}

function figure13() {
  closeFigures();
  if (document.getElementById("figure13").style.display == "inline") {
    document.getElementById("figure13").style.display = "none";
  }
  else {
    document.getElementById("figure13").style.display = "inline";
  }
}

function figure14() {
  closeFigures();
  if (document.getElementById("figure14").style.display == "inline") {
    document.getElementById("figure14").style.display = "none";
  }
  else {
    document.getElementById("figure14").style.display = "inline";
  }
}

function figure15() {
  closeFigures();
  if (document.getElementById("figure15").style.display == "inline") {
    document.getElementById("figure15").style.display = "none";
  }
  else {
    document.getElementById("figure15").style.display = "inline";
  }
}

function figure16() {
  closeFigures();
  if (document.getElementById("figure16").style.display == "inline") {
    document.getElementById("figure16").style.display = "none";
  }
  else {
    document.getElementById("figure16").style.display = "inline";
  }
}

function figure17() {
  closeFigures();
  if (document.getElementById("figure17").style.display == "inline") {
    document.getElementById("figure17").style.display = "none";
  }
  else {
    document.getElementById("figure17").style.display = "inline";
  }
}

function figure18() {
  closeFigures();
  if (document.getElementById("figure18").style.display == "inline") {
    document.getElementById("figure18").style.display = "none";
  }
  else {
    document.getElementById("figure18").style.display = "inline";
  }
}


function figure19() {
  closeFigures();
  if (document.getElementById("figure19").style.display == "inline") {
    document.getElementById("figure19").style.display = "none";
  }
  else {
    document.getElementById("figure19").style.display = "inline";
  }
}



function figure20() {
  closeFigures();
  if (document.getElementById("figure20").style.display == "inline") {
    document.getElementById("figure20").style.display = "none";
  }
  else {
    document.getElementById("figure20").style.display = "inline";
  }
}


function figure21() {
  closeFigures();
  if (document.getElementById("figure21").style.display == "inline") {
    document.getElementById("figure21").style.display = "none";
  }
  else {
    document.getElementById("figure21").style.display = "inline";
  }
}


function figure22() {
  closeFigures();
  if (document.getElementById("figure22").style.display == "inline") {
    document.getElementById("figure22").style.display = "none";
  }
  else {
    document.getElementById("figure22").style.display = "inline";
  }
}


function figure23() {
  closeFigures();
  if (document.getElementById("figure23").style.display == "inline") {
    document.getElementById("figure23").style.display = "none";
  }
  else {
    document.getElementById("figure23").style.display = "inline";
  }
}


function figure24() {
  closeFigures();
  if (document.getElementById("figure24").style.display == "inline") {
    document.getElementById("figure24").style.display = "none";
  }
  else {
    document.getElementById("figure24").style.display = "inline";
  }
}



function figure25() {
  closeFigures();
  if (document.getElementById("figure25").style.display == "inline") {
    document.getElementById("figure25").style.display = "none";
  }
  else {
    document.getElementById("figure25").style.display = "inline";
  }
}



function figure26() {
  closeFigures();
  if (document.getElementById("figure26").style.display == "inline") {
    document.getElementById("figure26").style.display = "none";
  }
  else {
    document.getElementById("figure26").style.display = "inline";
  }
}


function figure27() {
  closeFigures();
  if (document.getElementById("figure27").style.display == "inline") {
    document.getElementById("figure27").style.display = "none";
  }
  else {
    document.getElementById("figure27").style.display = "inline";
  }
}


function figure28() {
  closeFigures();
  if (document.getElementById("figure28").style.display == "inline") {
    document.getElementById("figure28").style.display = "none";
  }
  else {
    document.getElementById("figure28").style.display = "inline";
  }
}


function figure29() {

  closeFigures();
  if (document.getElementById("figure29").style.display == "inline") {
    document.getElementById("figure29").style.display = "none";
  }
  else {
    document.getElementById("figure29").style.display = "inline";
  }
}





function interfaceFunc() {


  closemods();
  document.getElementById("dfor").style.display = "none";
  document.getElementById("dfigur").style.display = "none";
  document.getElementById("dmods").style.display = "none";
  show = false;
  closeFigures();
  if (document.getElementById("dinter").style.display == "inline") {
    document.getElementById("dinter").style.display = "none";
  }
  else {
    document.getElementById("dinter").style.display = "inline";
  }
}




function modsFunc() {
  closeprop();

  closemods();
  if (document.getElementById("dmods").style.display == "inline") {
    document.getElementById("dmods").style.display = "none";
  }
  else {
    document.getElementById("dmods").style.display = "inline";
  }
}


function closemods() {
  for (var i = 1; i < 12; i++) {
    var slovo = "modificator" + String(i);
    document.getElementById(slovo).style.display = "none";
  }
}








function modificator1() {
  closeprop();
  closeFigures();
  closemods();
  if (document.getElementById("modificator1").style.display == "inline") {
    document.getElementById("modificator1").style.display = "none";
  } else {
    document.getElementById("modificator1").style.display = "inline";
  }
}

function modificator2() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator2").style.display == "inline") {
    document.getElementById("modificator2").style.display = "none";
  } else {
    document.getElementById("modificator2").style.display = "inline";
  }
}

function modificator3() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator3").style.display == "inline") {
    document.getElementById("modificator3").style.display = "none";
  } else {
    document.getElementById("modificator3").style.display = "inline";
  }
}

function modificator4() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator4").style.display == "inline") {
    document.getElementById("modificator4").style.display = "none";
  } else {
    document.getElementById("modificator4").style.display = "inline";
  }
}


function modificator5() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator5").style.display == "inline") {
    document.getElementById("modificator5").style.display = "none";
  } else {
    document.getElementById("modificator5").style.display = "inline";
  }
}

function modificator6() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator6").style.display == "inline") {
    document.getElementById("modificator6").style.display = "none";
  } else {
    document.getElementById("modificator6").style.display = "inline";
  }
}

function modificator7() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator7").style.display == "inline") {
    document.getElementById("modificator7").style.display = "none";
  }
  else {
    document.getElementById("modificator7").style.display = "inline";
  }
}

function modificator8() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator8").style.display == "inline") {
    document.getElementById("modificator8").style.display = "none";
  }
  else {
    document.getElementById("modificator8").style.display = "inline";
  }
}

function modificator9() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator9").style.display == "inline") {
    document.getElementById("modificator9").style.display = "none";
  }
  else {
    document.getElementById("modificator9").style.display = "inline";
  }
}

function modificator10() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator10").style.display == "inline") {
    document.getElementById("modificator10").style.display = "none";
  }
  else {
    document.getElementById("modificator10").style.display = "inline";
  }
}

function modificator11() {
  closeprop();
  closemods();
  closeFigures();
  if (document.getElementById("modificator11").style.display == "inline") {
    document.getElementById("modificator11").style.display = "none";
  }
  else {
    document.getElementById("modificator11").style.display = "inline";
  }
}

function openProp() {
  closeprop();
  if (document.getElementById("propoved").style.display == "inline") {
    document.getElementById("propoved").style.display = "none";
  }
  else {
    document.getElementById("propoved").style.display = "inline";
  }
}

function OBoge() {
  closeprop();
  if (document.getElementById("prop1").style.display == "inline") {
    document.getElementById("prop1").style.display = "none";
  }
  else {
    document.getElementById("prop1").style.display = "inline";
  }
}

function OGrege() {
  closeprop();
  if (document.getElementById("prop2").style.display == "inline") {
    document.getElementById("prop2").style.display = "none";
  }
  else {
    document.getElementById("prop2").style.display = "inline";
  }
}

function OLubvi() {
  closeprop();
  if (document.getElementById("prop3").style.display == "inline") {
    document.getElementById("prop3").style.display = "none";
  }
  else {
    document.getElementById("prop3").style.display = "inline";
  }
}

function OPoste() {
  closeprop();
  if (document.getElementById("prop4").style.display == "inline") {
    document.getElementById("prop4").style.display = "none";
  }
  else {
    document.getElementById("prop4").style.display = "inline";
  }
}

function OMolitve() {
  closeprop();
  if (document.getElementById("prop5").style.display == "inline") {
    document.getElementById("prop5").style.display = "none";
  }
  else {
    document.getElementById("prop5").style.display = "inline";
  }
}

function OIconah() {
  closeprop();
  if (document.getElementById("prop6").style.display == "inline") {
    document.getElementById("prop6").style.display = "none";
  }
  else {
    document.getElementById("prop6").style.display = "inline";
  }
}

function OTcerkve() {
  closeprop();
  if (document.getElementById("prop7").style.display == "inline") {
    document.getElementById("prop7").style.display = "none";
  }
  else {
    document.getElementById("prop7").style.display = "inline";
  }
}

function closeprop() {
  for (var i = 1; i < 8; i++) {
    var slovo = "prop" + String(i);
    document.getElementById(slovo).style.display = "none";
  }
}

function donate() {
  closeprop();

  closemods();
  document.getElementById("dmods").style.display = "none";
  document.getElementById("dinter").style.display = "none";
  closeFigures();
  if (document.getElementById("donate").style.display == "none") {
    document.getElementById("donate").style.display = "none";
  }
  else {
    document.getElementById("donate").style.display = "none";
    document.getElementById("dfor").style.display = "none";
    document.getElementById("dfigur").style.display = "none";
  }
}

function Webmon() {
  closeprop();

  closemods();
  document.getElementById("dmods").style.display = "none";
  document.getElementById("dinter").style.display = "none";
  closeFigures();
  if (document.getElementById("webmondon").style.display == "none") {
    document.getElementById("webmondon").style.display = "inline";
    document.getElementById("ssil").style.display = "inline";
  }
  else {
    document.getElementById("ssil").style.display = "none";
    document.getElementById("webmondon").style.display = "none";
    document.getElementById("dfor").style.display = "none";
    document.getElementById("dfigur").style.display = "none";
  }
}

function Qiw() {
  closeprop();

  closemods();
  document.getElementById("dmods").style.display = "none";
  document.getElementById("dinter").style.display = "none";
  closeFigures();
  if (document.getElementById("qiwidon").style.display == "none") {
    document.getElementById("qiwidon").style.display = "inline";
    document.getElementById("ssil2").style.display = "inline";
  }
  else {
    document.getElementById("ssil2").style.display = "none";
    document.getElementById("qiwidon").style.display = "none";
    document.getElementById("dfor").style.display = "none";
    document.getElementById("dfigur").style.display = "none";
  }
}