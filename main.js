function draw() {


  Creates();

  Transforms();
  matrix();
  Autotext();
  if (Start == true) {
    textes();
  }

  document.querySelector('#donatName').style.display = "none";

  if (LineLight < 1) {
    document.getElementById("Insert").style.display = "none";
  }
  if (Rotate == false && Move == true) {
    if (RussianLanguage == true) {
      TranslateButton.value = "Перемещать:";
    } else {
      TranslateButton.value = "Move:";
    }

    document.getElementById("yw").style.display = "none";
    document.getElementById("zw").style.display = "none";
    document.getElementById("t0").innerHTML = "x";
    document.getElementById("t1").innerHTML = "y";
    document.getElementById("t2").innerHTML = "z";
    document.getElementById("t3").innerHTML = "w";
    document.getElementById("t4").style.display = "none";
    document.getElementById("t5").style.display = "none";
  } else if (Rotate == false && Move == false) {

    if (RussianLanguage == true) {
      TranslateButton.value = "Масштабировать:";


    }
    else {
      TranslateButton.value = "Scale:";

    }
    document.getElementById("yw").style.display = "none";

    document.getElementById("zw").style.display = "none";

    document.getElementById("t0").innerHTML = "x";

    document.getElementById("t1").innerHTML = "y";

    document.getElementById("t2").innerHTML = "z";

    document.getElementById("t3").innerHTML = "w";

    document.getElementById("t4").style.display = "none";

    document.getElementById("t5").style.display = "none";

  }


  if (ModBut == true) {
    document.getElementById("Reconsider").style.display = "inline";
    if (DotLight == true) {

      document.getElementById("Remove").style.display = "inline";
      document.getElementById("Collect").style.display = "inline";
      document.getElementById("Connect").style.display = "inline";
      document.getElementById("Extrude").style.display = "inline";
      document.getElementById("Center").style.display = "inline";
      document.getElementById("Copy").style.display = "none";
      document.getElementById("kmo").style.display = "none";
      document.getElementById("sqw").style.display = "none";
      document.getElementById("mir").style.display = "none";
    }
    else if (LineLight == true) {
      document.getElementById("Collect").style.display = "none";
      document.getElementById("Remove").style.display = "inline";
      document.getElementById("Insert").style.display = "inline";
      document.getElementById("Connect").style.display = "inline";
      document.getElementById("Extrude").style.display = "none";
      document.getElementById("Copy").style.display = "none";
      document.getElementById("kmo").style.display = "none";
      document.getElementById("sqw").style.display = "none";
      document.getElementById("mir").style.display = "none";
      if (AllBut == false) {
        document.getElementById("Center").style.display = "inline";
        document.getElementById("Copy").style.display = "inline";
        document.getElementById("kmo").style.display = "none";
        document.getElementById("sqw").style.display = "inline";
        document.getElementById("mir").style.display = "inline";
      }
      else {
        document.getElementById("Center").style.display = "inline";
        document.getElementById("Copy").style.display = "inline";
        document.getElementById("kmo").style.display = "inline";
        document.getElementById("sqw").style.display = "inline";
        document.getElementById("mir").style.display = "inline";
      }
    }
    else {
      document.getElementById("Collect").style.display = "none";
      document.getElementById("Remove").style.display = "none";
      document.getElementById("Insert").style.display = "none";
      document.getElementById("Connect").style.display = "none";
      document.getElementById("Extrude").style.display = "none";
      document.getElementById("Center").style.display = "none";
      document.getElementById("Copy").style.display = "none";
      document.getElementById("kmo").style.display = "none";
      document.getElementById("sqw").style.display = "none";
      document.getElementById("mir").style.display = "none";
    }
  }
  else {
    document.getElementById("Collect").style.display = "none";
    document.getElementById("Remove").style.display = "none";
    document.getElementById("Insert").style.display = "none";
    document.getElementById("Connect").style.display = "none";
    document.getElementById("Extrude").style.display = "none";
    document.getElementById("Center").style.display = "none";
    document.getElementById("Copy").style.display = "none";
    document.getElementById("kmo").style.display = "none";
    document.getElementById("sqw").style.display = "none";
    document.getElementById("Reconsider").style.display = "none";
    document.getElementById("mir").style.display = "none";
  }

  if (document.getElementById("Camera").checked) {
    Cam = true;
  }
  else {
    Cam = false;
  }

  if (SetBut == true) {
    LightN = 0;
    LightL = 0;
    LineLight = false;
    Dotlight = false;
    AllBut = false;
    GroupBut = false;
    firstRaz = false;
    document.getElementById("Vertex").style.color = "blue";
    document.getElementById("Line").style.color = "blue";
    document.getElementById("All").style.color = "blue";
    document.getElementById("Group").style.color = "gray";




    for (var i = 0; i < LineArr; i++) {
      lines[i].setAttribute("stroke-width", document.getElementById("LineWidth").value);
    }
    if (document.getElementById("piv").checked) {
      document.getElementById("poly").setAttribute("style", "display: inline");
    } else {
      document.getElementById("poly").setAttribute("style", "display: none");
    }
    
    if (document.getElementById("dot").checked) {
      for (var i = 0; i < DotArr; i++) {
        dots[i].setAttribute("style", "display: inline");
      }
    } else {
      for (var i = 0; i < DotArr; i++) {
        dots[i].setAttribute("style", "display: none");
      }
    }
    if (document.getElementById("line").checked) {
      for (var i = 0; i < LineArr; i++) {
        lines[i].setAttribute("style", "display: inline");
      }
    }
    else {
      for (var i = 0; i < LineArr; i++) {
        lines[i].setAttribute("style", "display: none");
      }
    }

  }




  if (GroupBut == true) {
    if (firstRaz == true) {
      for (var i = 0; i < LineArr; i++) {
        if (lines[i].getAttribute("style") == "stroke: red") {
          groupName = lines[i].getAttribute("group");
          document.getElementById("Group").style.color = "gray";
          document.getElementById("Line").style.color = "orange";
          GroupBut = false;
          firstRaz = false;
          break;
        }
      }
      for (var i = 0; i < DotArr; i++) {
        if (dots[i].getAttribute("style") == "fill: red") {
          groupName = dots[i].getAttribute("group");
          document.getElementById("Group").style.color = "gray";
          document.getElementById("Line").style.color = "orange";
          GroupBut = false;
          firstRaz = false;
          break;
        }
      }
    }
    for (var i = 0; i < LineArr; i++) {
      if (lines[i].getAttribute("group") == groupName) {
        lines[i].setAttribute("style", "stroke: red");

        LightL++;
      }
    }
    for (var i = 0; i < DotArr; i++) {
      if (dots[i].getAttribute("group") == groupName) {
        dots[i].setAttribute("style", "fill: red");
      }
    }
    if (document.getElementById("centerGroup").checked) {
      CenterButton();
    }
  }




  timerDraw = setTimeout("draw()", document.getElementById("Speed").value);

  decode();
  setTimeout("SaveFile(saveMemory,'new.4do','text/plain')", 100);
}






draw();

function FirstMemoryArray() {
  literate();
  AllMemory[indexMemory] = nowMemory;
  indexMemory++;
}
FirstMemoryArray();





