function tesseract() {

  for (var i = 0; i < 4; i++) {
    xo1[i] = xc + (x1d[i]);
    yo1[i] = yc + (y1d[i]);
    lines[i].setAttribute("arx1", i);
    lines[i].setAttribute("ary1", i);

    if (i < 3) {
      xo2[i] = xc + (x1d[i + 1]);
      yo2[i] = yc + (y1d[i + 1]);
      lines[i].setAttribute("arx2", i + 1);
      lines[i].setAttribute("ary2", i + 1);
    } else {
      xo2[i] = xc + (x1d[i - 3]);
      yo2[i] = yc + (y1d[i - 3]);
      lines[i].setAttribute("arx2", i - 3);
      lines[i].setAttribute("ary2", i - 3);
    }

    if (!isNaN(xo1[i]) && !isNaN(yo1[i]) && !isNaN(xo2[i]) && !isNaN(yo2[i])) {
      lines[i].setAttribute("x1", xo1[i]);
      lines[i].setAttribute("y1", yo1[i]);
      lines[i].setAttribute("x2", xo2[i]);
      lines[i].setAttribute("y2", yo2[i]);
    }
  }

  for (var i = 4; i < 8; i++) {
    xo1[i] = xc + (x1d[i]);
    yo1[i] = yc + (y1d[i]);
    lines[i].setAttribute("arx1", i);
    lines[i].setAttribute("ary1", i);

    if (i < 7) {
      xo2[i] = xc + (x1d[i + 1]);
      yo2[i] = yc + (y1d[i + 1]);
      lines[i].setAttribute("arx2", i + 1);
      lines[i].setAttribute("ary2", i + 1);
    } else {
      xo2[i] = xc + (x1d[i - 3]);
      yo2[i] = yc + (y1d[i - 3]);
      lines[i].setAttribute("arx2", i - 3);
      lines[i].setAttribute("ary2", i - 3);
    }

    if (!isNaN(xo1[i]) && !isNaN(yo1[i]) && !isNaN(xo2[i]) && !isNaN(yo2[i])) {
      lines[i].setAttribute("x1", xo1[i]);
      lines[i].setAttribute("y1", yo1[i]);
      lines[i].setAttribute("x2", xo2[i]);
      lines[i].setAttribute("y2", yo2[i]);
    }
  }

  for (var i = 8; i < 12; i++) {
    xo1[i] = xc + (x1d[i]);
    yo1[i] = yc + (y1d[i]);
    lines[i].setAttribute("arx1", i);
    lines[i].setAttribute("ary1", i);

    if (i < 11) {
      xo2[i] = xc + (x1d[i + 1]);
      yo2[i] = yc + (y1d[i + 1]);
      lines[i].setAttribute("arx2", i + 1);
      lines[i].setAttribute("ary2", i + 1);
    } else {
      xo2[i] = xc + (x1d[i - 3]);
      yo2[i] = yc + (y1d[i - 3]);
      lines[i].setAttribute("arx2", i - 3);
      lines[i].setAttribute("ary2", i - 3);
    }
    if (!isNaN(xo1[i]) && !isNaN(yo1[i]) && !isNaN(xo2[i]) && !isNaN(yo2[i])) {
      lines[i].setAttribute("x1", xo1[i]);
      lines[i].setAttribute("y1", yo1[i]);
      lines[i].setAttribute("x2", xo2[i]);
      lines[i].setAttribute("y2", yo2[i]);
    }
  }

  for (var i = 12; i < 16; i++) {
    xo1[i] = xc + (x1d[i]);
    yo1[i] = yc + (y1d[i]);
    lines[i].setAttribute("arx1", i);
    lines[i].setAttribute("ary1", i);

    if (i < 15) {
      xo2[i] = xc + (x1d[i + 1]);
      yo2[i] = yc + (y1d[i + 1]);
      lines[i].setAttribute("arx2", i + 1);
      lines[i].setAttribute("ary2", i + 1);
    } else {
      xo2[i] = xc + (x1d[i - 3]);
      yo2[i] = yc + (y1d[i - 3]);
      lines[i].setAttribute("arx2", i - 3);
      lines[i].setAttribute("ary2", i - 3);
    }

    if (!isNaN(xo1[i]) && !isNaN(yo1[i]) && !isNaN(xo2[i]) && !isNaN(yo2[i])) {
      lines[i].setAttribute("x1", xo1[i]);
      lines[i].setAttribute("y1", yo1[i]);
      lines[i].setAttribute("x2", xo2[i]);
      lines[i].setAttribute("y2", yo2[i]);
    }
  }

  for (var i = 16; i < 20; i++) {
    xo1[i] = xc + (x1d[i - 16]);
    yo1[i] = yc + (y1d[i - 16]);
    lines[i].setAttribute("arx1", i - 16);
    lines[i].setAttribute("ary1", i - 16);
    xo2[i] = xc + (x1d[i - 12]);
    yo2[i] = yc + (y1d[i - 12]);
    lines[i].setAttribute("arx2", i - 12);
    lines[i].setAttribute("ary2", i - 12);

    if (!isNaN(xo1[i]) && !isNaN(yo1[i]) && !isNaN(xo2[i]) && !isNaN(yo2[i])) {
      lines[i].setAttribute("x1", xo1[i]);
      lines[i].setAttribute("y1", yo1[i]);
      lines[i].setAttribute("x2", xo2[i]);
      lines[i].setAttribute("y2", yo2[i]);
    }
  }

  for (var i = 20; i < 24; i++) {
    xo1[i] = xc + (x1d[i - 12]);
    yo1[i] = yc + (y1d[i - 12]);
    lines[i].setAttribute("arx1", i - 12);
    lines[i].setAttribute("ary1", i - 12);
    xo2[i] = xc + (x1d[i - 8]);
    yo2[i] = yc + (y1d[i - 8]);
    lines[i].setAttribute("arx2", i - 8);
    lines[i].setAttribute("ary2", i - 8);

    if (!isNaN(xo1[i]) && !isNaN(yo1[i]) && !isNaN(xo2[i]) && !isNaN(yo2[i])) {
      lines[i].setAttribute("x1", xo1[i]);
      lines[i].setAttribute("y1", yo1[i]);
      lines[i].setAttribute("x2", xo2[i]);
      lines[i].setAttribute("y2", yo2[i]);
    }
  }

  for (var i = 24; i < 28; i++) {
    xo1[i] = xc + (x1d[i - 24]);
    yo1[i] = yc + (y1d[i - 24]);
    lines[i].setAttribute("arx1", i - 24);
    lines[i].setAttribute("ary1", i - 24);
    xo2[i] = xc + (x1d[i - 16]);
    yo2[i] = yc + (y1d[i - 16]);
    lines[i].setAttribute("arx2", i - 16);
    lines[i].setAttribute("ary2", i - 16);

    if (!isNaN(xo1[i]) && !isNaN(yo1[i]) && !isNaN(xo2[i]) && !isNaN(yo2[i])) {
      lines[i].setAttribute("x1", xo1[i]);
      lines[i].setAttribute("y1", yo1[i]);
      lines[i].setAttribute("x2", xo2[i]);
      lines[i].setAttribute("y2", yo2[i]);
    }
  }

  for (var i = 28; i < 32; i++) {
    xo1[i] = xc + (x1d[i - 24]);
    yo1[i] = yc + (y1d[i - 24]);
    lines[i].setAttribute("arx1", i - 24);
    lines[i].setAttribute("ary1", i - 24);
    xo2[i] = xc + (x1d[i - 16]);
    yo2[i] = yc + (y1d[i - 16]);
    lines[i].setAttribute("arx2", i - 16);
    lines[i].setAttribute("ary2", i - 16);

    if (!isNaN(xo1[i]) && !isNaN(yo1[i]) && !isNaN(xo2[i]) && !isNaN(yo2[i])) {
      lines[i].setAttribute("x1", xo1[i]);
      lines[i].setAttribute("y1", yo1[i]);
      lines[i].setAttribute("x2", xo2[i]);
      lines[i].setAttribute("y2", yo2[i]);
    }
  }
}

tesseract();

function Creates() {
  for (var k = 0; k < DotArr; k++) {
    xo[k] = xc + (x1d[k]);
    yo[k] = yc + (y1d[k]);

    if (!isNaN(xo[k]) && !isNaN(yo[k])) {
      dots[k].setAttribute("x", xo[k]);
      dots[k].setAttribute("y", yo[k]);
    }
  }

  for (var i = 0; i < LineArr; i++) {
    xo1[i] = xc + (x1d[lines[i].getAttribute("arx1")]);
    yo1[i] = yc + (y1d[lines[i].getAttribute("arx1")]);
    xo2[i] = xc + (x1d[lines[i].getAttribute("arx2")]);
    yo2[i] = yc + (y1d[lines[i].getAttribute("arx2")]);

    if (!isNaN(xo1[i]) && !isNaN(yo1[i]) && !isNaN(xo2[i]) && !isNaN(yo2[i])) {
      lines[i].setAttribute("x1", xo1[i]);
      lines[i].setAttribute("y1", yo1[i]);
      lines[i].setAttribute("x2", xo2[i]);
      lines[i].setAttribute("y2", yo2[i]);
    }
  }
}

function WholForm() {
  if (Rotate == true) {
    for (var i = 0; i < DotArr; i++) {
      if (checkXY.checked) {
        if (plus.checked) {
          if (xyAngle[i] > 360) {
            xyAngle[i] = 0;
          }

          xyAngle[i]++;
          xy = xyAngle[i];
        } else {
          if (xyAngle[i] < -360) {
            xyAngle[i] = 0;
          }

          xyAngle[i]--;
          xy = xyAngle[i];
        }
      }

      if (checkXZ.checked) {
        if (plus.checked) {
          if (xzAngle[i] > 360) {
            xzAngle[i] = 0;
          }

          xzAngle[i]++;
          xz = xzAngle[i];
        } else {
          if (xzAngle[i] < -360) {
            xzAngle[i] = 0;
          }

          xzAngle[i]--;
          xz = xzAngle[i];
        }
      }

      if (checkYZ.checked) {
        if (plus.checked) {
          if (yzAngle[i] > 360) {
            yzAngle[i] = 0;
          }

          yzAngle[i]++;
          yz = yzAngle[i];
        } else {
          if (yzAngle[i] < -360) {
            yzAngle[i] = 0;
          }

          yzAngle[i]--;
          yz = yzAngle[i];
        }
      }

      if (checkXW.checked) {
        if (plus.checked) {
          if (xwAngle[i] > 360) {
            xwAngle[i] = 0;
          }

          xwAngle[i]++;
          xw = xwAngle[i];
        } else {
          if (xwAngle[i] < -360) {
            xwAngle[i] = 0;
          }

          xwAngle[i]--;
          xw = xwAngle[i];
        }
      }

      if (checkYW.checked) {
        if (plus.checked) {
          if (ywAngle[i] > 360) {
            ywAngle[i] = 0;
          }

          ywAngle[i]++;
          yw = ywAngle[i];
        } else {
          if (ywAngle[i] < -360) {
            ywAngle[i] = 0;
          }

          ywAngle[i]--;
          yw = ywAngle[i];
        }
      }

      if (checkZW.checked) {
        if (plus.checked) {
          if (zwAngle[i] > 360) {
            zwAngle[i] = 0;
          }

          zwAngle[i]++;
          zw = zwAngle[i];
        } else {
          if (zwAngle[i] < -360) {
            zwAngle[i] = 0;
          }

          zwAngle[i]--;
          zw = zwAngle[i];
        }
      }
    }
  }

  else if (Move == true) {
    for (var i = 0; i < DotArr; i++) {
      if (checkXY.checked) {
        if (plus.checked) {
          m[i]++;
        } else {
          m[i]--;
        }
      }

      if (checkXZ.checked) {
        if (plus.checked) {
          n[i]++;
        } else {
          n[i]--;
        }
      }

      if (checkYZ.checked) {
        if (plus.checked) {
          j[i]++;
        } else {
          j[i]--;
        }
      }

      if (checkXW.checked) {
        if (plus.checked) {
          q[i]++;
        } else {
          q[i]--;
        }
      }
    }
  } else {
    for (var i = 0; i < DotArr; i++) {
      if (checkXY.checked) {
        if (plus.checked) {
          r[i] += 0.01;
        } else {
          r[i] -= 0.01;
        }
      }

      if (checkXZ.checked) {
        if (plus.checked) {
          s[i] += 0.01;
        } else {
          s[i] -= 0.01;
        }
      }

      if (checkYZ.checked) {
        if (plus.checked) {
          t[i] += 0.01;
        } else {
          t[i] -= 0.01;
        }
      }

      if (checkXW.checked) {
        if (plus.checked) {
          u[i] += 0.01;
        } else {
          u[i] -= 0.01;
        }
      }
    }
  }
}



function Transforms() {
  if (Start == true) {
    if (DotLight == false && LineLight == false) {


      WholForm();
    }

    else if (DotLight == true) {
      if (Cam == false) {
        if (Rotate == true) {

          for (var i = 0; i < DotArr; i++) {

            if (dots[i].getAttribute("style") == "fill: red") {
              if (checkXY.checked) {


                if (plus.checked) {

                  if (xyAnglem[i] > 360) {
                    xyAnglem[i] = 0;
                  }
                  xyAnglem[i]++;
                  xypov = xyAnglem[i];
                }

                else {

                  if (xyAnglem[i] < -360) {
                    xyAnglem[i] = 0;
                  }
                  xyAnglem[i]--;
                  xypov = xyAnglem[i];
                }


              }




              if (checkXZ.checked) {

                if (plus.checked) {

                  if (xzAnglem[i] > 360) {
                    xzAnglem[i] = 0;
                  }
                  xzAnglem[i]++;
                  xzpov = xzAnglem[i];
                }

                else {

                  if (xzAnglem[i] < -360) {
                    xzAnglem[i] = 0;
                  }

                  xzAnglem[i]--;
                  xzpov = xzAnglem[i];
                }



              }




              if (checkYZ.checked) {

                if (plus.checked) {

                  if (yzAnglem[i] > 360) {
                    yzAnglem[i] = 0;
                  }

                  yzAnglem[i]++;
                  yzpov = yzAnglem[i];
                }

                else {

                  if (yzAnglem[i] < -360) {
                    yzAnglem[i] = 0;
                  }

                  yzAnglem[i]--;
                  yzpov = yzAnglem[i];
                }



              }


              if (checkXW.checked) {

                if (plus.checked) {

                  if (xwAnglem[i] > 360) {
                    xwAnglem[i] = 0;
                  }

                  xwAnglem[i]++;
                  xwpov = xwAnglem[i];
                }

                else {


                  if (xwAnglem[i] < -360) {
                    xwAnglem[i] = 0;
                  }
                  xwAnglem[i]--;
                  xwpov = xwAnglem[i];
                }



              }


              if (checkYW.checked) {

                if (plus.checked) {


                  if (ywAnglem[i] > 360) {
                    ywAnglem[i] = 0;
                  }
                  ywAnglem[i]++;
                  ywpov = ywAnglem[i];
                }

                else {


                  if (ywAnglem[i] < -360) {
                    ywAnglem[i] = 0;
                  }
                  ywAnglem[i]--;
                  ywpov = ywAnglem[i];
                }


              }


              if (checkZW.checked) {

                if (plus.checked) {


                  if (zwAnglem[i] > 360) {
                    zwAnglem[i] = 0;
                  }
                  zwAnglem[i]++;
                  zwpov = zwAnglem[i];
                }

                else {


                  if (zwAnglem[i] < -360) {
                    zwAnglem[i] = 0;
                  }
                  zwAnglem[i]--;
                  zwpov = zwAnglem[i];
                }



              }
            }

          }

        }




        else if (Move == true) {
          for (var i = 0; i < DotArr; i++) {
            if (checkXY.checked) {


              if (plus.checked) {

                if (dots[i].getAttribute("style") == "fill: red") {
                  x1dm[i]++;

                }
              }
              else {
                if (dots[i].getAttribute("style") == "fill: red") {
                  x1dm[i]--;

                }
              }
            }

            if (checkXZ.checked) {


              if (plus.checked) {

                if (dots[i].getAttribute("style") == "fill: red") {
                  y1dm[i]++;

                }
              }
              else {
                if (dots[i].getAttribute("style") == "fill: red") {
                  y1dm[i]--;

                }
              }
            }


            if (checkYZ.checked) {


              if (plus.checked) {

                if (dots[i].getAttribute("style") == "fill: red") {
                  z1dm[i]++;

                }
              }
              else {
                if (dots[i].getAttribute("style") == "fill: red") {
                  z1dm[i]--;

                }
              }
            }


            if (checkXW.checked) {


              if (plus.checked) {

                if (dots[i].getAttribute("style") == "fill: red") {
                  w1dm[i]++;

                }
              }
              else {
                if (dots[i].getAttribute("style") == "fill: red") {
                  w1dm[i]--;
                }
              }
            }

          }
        }


        else {
          for (var i = 0; i < DotArr; i++) {
            if (checkXY.checked) {


              if (plus.checked) {

                if (dots[i].getAttribute("style") == "fill: red") {
                  r[i] += 0.001;

                }
              }
              else {
                if (dots[i].getAttribute("style") == "fill: red") {
                  r[i] -= 0.001;

                }
              }
            }

            if (checkXZ.checked) {


              if (plus.checked) {

                if (dots[i].getAttribute("style") == "fill: red") {
                  s[i] += 0.001;

                }
              }
              else {
                if (dots[i].getAttribute("style") == "fill: red") {
                  s[i] -= 0.001;

                }
              }
            }


            if (checkYZ.checked) {


              if (plus.checked) {

                if (dots[i].getAttribute("style") == "fill: red") {
                  t[i] += 0.001;

                }
              }
              else {
                if (dots[i].getAttribute("style") == "fill: red") {
                  t[i] -= 0.001;

                }
              }
            }


            if (checkXW.checked) {


              if (plus.checked) {

                if (dots[i].getAttribute("style") == "fill: red") {
                  u[i] += 0.001;

                }
              }
              else {
                if (dots[i].getAttribute("style") == "fill: red") {
                  u[i] -= 0.001;
                }
              }
            }

          }
        }
      }
      else {
        WholForm();
      }
    }
    else if (LineLight == true) {
      if (Cam == false) {
        if (Rotate == true) {

          for (var i = 0; i < DotArr; i++) {

            if (dots[i].getAttribute("style") == "fill: red") {
              if (checkXY.checked) {


                if (plus.checked) {

                  if (xyAnglem[i] > 360) {
                    xyAnglem[i] = 0;
                  }

                  xyAnglem[i]++;
                  xypov = xyAnglem[i];
                }

                else {

                  if (xyAnglem[i] < -360) {
                    xyAnglem[i] = 0;
                  }
                  xyAnglem[i]--;
                  xypov = xyAnglem[i];
                }


              }




              if (checkXZ.checked) {

                if (plus.checked) {


                  if (xzAnglem[i] > 360) {
                    xzAnglem[i] = 0;
                  }
                  xzAnglem[i]++;
                  xzpov = xzAnglem[i];
                }

                else {

                  if (xzAnglem[i] < -360) {
                    xzAnglem[i] = 0;
                  }
                  xzAnglem[i]--;
                  xzpov = xzAnglem[i];
                }



              }




              if (checkYZ.checked) {

                if (plus.checked) {

                  if (yzAnglem[i] > 360) {
                    yzAnglem[i] = 0;
                  }

                  yzAnglem[i]++;
                  yzpov = yzAnglem[i];
                }

                else {

                  if (yzAnglem[i] < -360) {
                    yzAnglem[i] = 0;
                  }

                  yzAnglem[i]--;
                  yzpov = yzAnglem[i];
                }



              }


              if (checkXW.checked) {

                if (plus.checked) {


                  if (xwAnglem[i] > 360) {
                    xwAnglem[i] = 0;
                  }
                  xwAnglem[i]++;
                  xwpov = xwAnglem[i];
                }

                else {


                  if (xwAnglem[i] < -360) {
                    xwAnglem[i] = 0;
                  }
                  xwAnglem[i]--;
                  xwpov = xwAnglem[i];
                }



              }


              if (checkYW.checked) {

                if (plus.checked) {


                  if (ywAnglem[i] > 360) {
                    ywAnglem[i] = 0;
                  }
                  ywAnglem[i]++;
                  ywpov = ywAnglem[i];
                }

                else {

                  if (ywAnglem[i] < -360) {
                    ywAnglem[i] = 0;
                  }

                  ywAnglem[i]--;
                  ywpov = ywAnglem[i];
                }


              }


              if (checkZW.checked) {

                if (plus.checked) {

                  if (zwAnglem[i] > 360) {
                    zwAnglem[i] = 0;
                  }

                  zwAnglem[i]++;
                  zwpov = zwAnglem[i];
                }

                else {

                  if (zwAnglem[i] < -360) {
                    zwAnglem[i] = 0;
                  }

                  zwAnglem[i]--;
                  zwpov = zwAnglem[i];
                }



              }
            }

          }


        }


        else if (Move == true) {
          for (var i = 0; i < DotArr; i++) {
            if (checkXY.checked) {


              if (dots[i].getAttribute("style") == "fill: red") {
                if (plus.checked) {
                  x1dm[i]++;



                }
                else {
                  x1dm[i]--;

                }
              }
            }
            if (checkXZ.checked) {


              if (dots[i].getAttribute("style") == "fill: red") {
                if (plus.checked) {
                  y1dm[i]++;

                }
                else {
                  y1dm[i]--;

                }
              }
            }
            if (checkYZ.checked) {

              if (dots[i].getAttribute("style") == "fill: red") {
                if (plus.checked) {
                  z1dm[i]++;

                }
                else {
                  z1dm[i]--;

                }
              }
            }
            if (checkXW.checked) {

              if (dots[i].getAttribute("style") == "fill: red") {
                if (plus.checked) {
                  w1dm[i]++;

                }
                else {
                  w1dm[i]--;

                }
              }
            }
          }
        }

        else {
          for (var i = 0; i < DotArr; i++) {
            if (checkXY.checked) {


              if (dots[i].getAttribute("style") == "fill: red") {
                if (plus.checked) {
                  r[i] += 0.001;



                }
                else {
                  r[i] -= 0.001;

                }
              }
            }
            if (checkXZ.checked) {


              if (dots[i].getAttribute("style") == "fill: red") {
                if (plus.checked) {
                  s[i] += 0.001;

                }
                else {
                  s[i] -= 0.001;

                }
              }
            }
            if (checkYZ.checked) {

              if (dots[i].getAttribute("style") == "fill: red") {
                if (plus.checked) {
                  t[i] += 0.001;

                }
                else {
                  t[i] -= 0.001;

                }
              }
            }
            if (checkXW.checked) {

              if (dots[i].getAttribute("style") == "fill: red") {
                if (plus.checked) {
                  u[i] += 0.001;

                }
                else {
                  u[i] -= 0.001;

                }
              }
            }
          }
        }
      }
      else {
        WholForm();
      }
    }
  }
}


function matrixRealization(i) {

  if (pers.checked) {
    xyRadm = xyAnglem[i] / 180 * Math.PI;
    am = Math.cos(xyRadm);
    bm = Math.sin(xyRadm);
    xzRadm = xzAnglem[i] / 180 * Math.PI;
    cm = Math.cos(xzRadm);
    dm = Math.sin(xzRadm);
    yzRadm = yzAnglem[i] / 180 * Math.PI;
    em = Math.cos(yzRadm);
    fm = Math.sin(yzRadm);
    xwRadm = xwAnglem[i] / 180 * Math.PI;
    gm = Math.cos(xwRadm);
    hm = Math.sin(xwRadm);
    ywRadm = ywAnglem[i] / 180 * Math.PI;
    om = Math.cos(ywRadm);
    pm = Math.sin(ywRadm);
    zwRadm = zwAnglem[i] / 180 * Math.PI;
    zm = Math.cos(zwRadm);
    wm = Math.sin(zwRadm);

    x1dn[i] = x1dm[i] * (am * cm * gm) + y1dm[i] * (-bm * cm * gm)
      + z1dm[i] * (-dm * gm) + w1dm[i] * (-hm);
    y1dn[i] = x1dm[i] * (bm * em * om - am * dm * fm * om - am * cm * hm * pm)
      + y1dm[i] * (am * em * om + bm * dm * fm * om + bm * cm * hm * pm)
      + z1dm[i] * (-cm * fm * om + dm * hm * pm) + w1dm[i] * (-gm * pm);
    z1dn[i] = ((x1dm[i] * (-am * cm * hm * om * wm - bm * em
      * pm * wm + am * dm * fm * pm * wm + am * dm * em * zm + bm * fm * zm)
      + y1dm[i] * (bm * cm * hm * om * wm - am * em * pm * wm - bm * dm
        * fm * pm * wm - bm * dm * em * zm + am * fm * zm) + z1dm[i]
      * (dm * hm * om * wm + cm * fm * pm * wm + cm * em * zm) + w1dm[i] * (-gm * om * wm)));
    w1dn[i] = ((x1dm[i] * (am * dm * em * wm + bm * fm * wm + am * cm * hm * om * zm + bm * em
      * pm * zm - am * dm * fm * pm * zm) + y1dm[i] * (-bm * dm * em * wm + am * fm
        * wm - bm * cm * hm * om * zm + am * em * pm * zm + bm * dm * fm * pm * zm)
      + z1dm[i] * (cm * em * wm - dm * hm * om * zm - cm * fm * pm * zm)
      + w1dm[i] * (gm * om * zm)));

    xyRad = xyAngle[i] / 180 * Math.PI;
    a = Math.cos(xyRad);
    b = Math.sin(xyRad);
    xzRad = xzAngle[i] / 180 * Math.PI;
    c = Math.cos(xzRad);
    d = Math.sin(xzRad);
    yzRad = yzAngle[i] / 180 * Math.PI;
    e = Math.cos(yzRad);
    f = Math.sin(yzRad);
    xwRad = xwAngle[i] / 180 * Math.PI;
    g = Math.cos(xwRad);
    h = Math.sin(xwRad);
    ywRad = ywAngle[i] / 180 * Math.PI;
    o = Math.cos(ywRad);
    p = Math.sin(ywRad);
    zwRad = zwAngle[i] / 180 * Math.PI;
    z = Math.cos(zwRad);
    w = Math.sin(zwRad);

    x1d[i] = 550 * (450 * ((r[i] * x1dn[i] * (a * c * g)
      + s[i] * y1dn[i] * (-b * c * g) + t[i] * z1dn[i] * (-d * g)
      + u[i] * w1dn[i] * (-h) + m[i])) / ((r[i] * x1dn[i]
        * (-a * c * h * o * w - b * e * p * w + a * d * f * p * w + a * d * e * z + b * f * z)
        + s[i] * y1dn[i] * (b * c * h * o * w - a * e * p * w - b * d * f * p * w - b
          * d * e * z + a * f * z) + t[i] * z1dn[i] * (d * h * o * w + c * f * p * w + c * e * z)
        + u[i] * w1dn[i] * (-g * o * w) + j[i]) + 450))
      / ((r[i] * x1dn[i] * (a * d * e * w + b * f * w + a * c * h * o * z + b * e * p * z - a * d * f * p * z)
        + s[i] * y1dn[i] * (-b * d * e * w + a * f * w - b * c * h * o * z + a
          * e * p * z + b * d * f * p * z) + t[i] * z1dn[i] * (c * e * w - d * h * o * z - c * f * p * z)
        + u[i] * w1dn[i] * (g * o * z) + q[i]) + 550);
    y1d[i] = 550 * ((450 * ((r[i] * x1dn[i] * (b * e * o - a * d * f * o - a * c * h * p)
      + s[i] * y1dn[i] * (a * e * o + b * d * f * o + b * c * h * p) + t[i] * z1dn[i]
      * (-c * f * o + d * h * p) + u[i] * w1dn[i] * (-g * p) + n[i])))
      / ((r[i] * x1dn[i] * (-a * c * h * o * w - b * e * p * w + a * d * f * p * w
        + a * d * e * z + b * f * z) + s[i] * y1dn[i] * (b * c * h * o * w - a * e
          * p * w - b * d * f * p * w - b * d * e * z + a * f * z) + t[i] * z1dn[i]
        * (d * h * o * w + c * f * p * w + c * e * z) + u[i] * w1dn[i] * (-g * o * w) + j[i]) + 450))
      / ((r[i] * x1dn[i] * (a * d * e * w + b * f * w + a * c * h * o * z + b * e * p * z - a * d * f * p * z)
        + s[i] * y1dn[i] * (-b * d * e * w + a * f * w - b * c * h * o * z + a * e * p * z + b * d * f * p * z)
        + t[i] * z1dn[i] * (c * e * w - d * h * o * z - c * f * p * z)
        + u[i] * w1dn[i] * (g * o * z) + q[i]) + 550);
  } else {
    xyRadm = xyAnglem[i] / 180 * Math.PI;
    am = Math.cos(xyRadm);
    bm = Math.sin(xyRadm);
    xzRadm = xzAnglem[i] / 180 * Math.PI;
    cm = Math.cos(xzRadm);
    dm = Math.sin(xzRadm);
    yzRadm = yzAnglem[i] / 180 * Math.PI;
    em = Math.cos(yzRadm);
    fm = Math.sin(yzRadm);
    xwRadm = xwAnglem[i] / 180 * Math.PI;
    gm = Math.cos(xwRadm);
    hm = Math.sin(xwRadm);
    ywRadm = ywAnglem[i] / 180 * Math.PI;
    om = Math.cos(ywRadm);
    pm = Math.sin(ywRadm);
    zwRadm = zwAnglem[i] / 180 * Math.PI;
    zm = Math.cos(zwRadm);
    wm = Math.sin(zwRadm);

    x1dn[i] = x1dm[i] * (am * cm * gm) + y1dm[i] * (-bm * cm * gm)
      + z1dm[i] * (-dm * gm) + w1dm[i] * (-hm);
    y1dn[i] = x1dm[i] * (bm * em * om - am * dm * fm * om - am * cm * hm * pm)
      + y1dm[i] * (am * em * om + bm * dm * fm * om + bm * cm * hm * pm)
      + z1dm[i] * (-cm * fm * om + dm * hm * pm) + w1dm[i] * (-gm * pm);
    z1dn[i] = ((x1dm[i] * (-am * cm * hm * om * wm - bm * em * pm * wm + am
      * dm * fm * pm * wm + am * dm * em * zm + bm * fm * zm)
      + y1dm[i] * (bm * cm * hm * om * wm - am * em * pm * wm - bm * dm * fm
        * pm * wm - bm * dm * em * zm + am * fm * zm) + z1dm[i] * (dm * hm * om
          * wm + cm * fm * pm * wm + cm * em * zm) + w1dm[i] * (-gm * om * wm)));
    w1dn[i] = ((x1dm[i] * (am * dm * em * wm + bm * fm * wm + am * cm * hm
      * om * zm + bm * em * pm * zm - am * dm * fm * pm * zm)
      + y1dm[i] * (-bm * dm * em * wm + am * fm * wm - bm * cm * hm * om
        * zm + am * em * pm * zm + bm * dm * fm * pm * zm) + z1dm[i] * (cm *
          em * wm - dm * hm * om * zm - cm * fm * pm * zm) + w1dm[i] * (gm * om * zm)));

    xyRad = xyAngle[i] / 180 * Math.PI;
    a = Math.cos(xyRad);
    b = Math.sin(xyRad);
    xzRad = xzAngle[i] / 180 * Math.PI;
    c = Math.cos(xzRad);
    d = Math.sin(xzRad);
    yzRad = yzAngle[i] / 180 * Math.PI;
    e = Math.cos(yzRad);
    f = Math.sin(yzRad);
    xwRad = xwAngle[i] / 180 * Math.PI;
    g = Math.cos(xwRad);
    h = Math.sin(xwRad);
    ywRad = ywAngle[i] / 180 * Math.PI;
    o = Math.cos(ywRad);
    p = Math.sin(ywRad);
    zwRad = zwAngle[i] / 180 * Math.PI;
    z = Math.cos(zwRad);
    w = Math.sin(zwRad);

    x1d[i] = r[i] * x1dn[i] * (a * c * g) + s[i] * y1dn[i] * (-b * c * g)
      + t[i] * z1dn[i] * (-d * g) + u[i] * w1dn[i] * (-h) + m[i];
    y1d[i] = r[i] * x1dn[i] * (b * e * o - a * d * f * o - a * c * h * p)
      + s[i] * y1dn[i] * (a * e * o + b * d * f * o + b * c * h * p)
      + t[i] * z1dn[i] * (-c * f * o + d * h * p) + u[i] * w1dn[i] * (-g * p) + n[i];
  }
}

function matrix() {
  for (var k = 0; k < DotArr; k++) {
    matrixRealization(k);
  }
}