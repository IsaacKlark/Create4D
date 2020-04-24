function rotateByKeys() {
  if (event.code === 'KeyQ') {
    xyAngle = xyAngle.map(angle => angle += 1);
  }

  if (event.code === 'KeyE') {
    xyAngle = xyAngle.map(angle => angle -= 1);
  }

  if (event.code === 'KeyD') {
    xzAngle = xzAngle.map(angle => angle += 1);
  }

  if (event.code === 'KeyA') {
    xzAngle = xzAngle.map(angle => angle -= 1);
  }

  if (event.code === 'KeyW') {
    yzAngle = yzAngle.map(angle => angle += 1);
  }

  if (event.code === 'KeyS') {
    yzAngle = yzAngle.map(angle => angle -= 1);
  }

  if (event.code === 'KeyJ') {
    xwAngle = xwAngle.map(angle => angle -= 1);
  }

  if (event.code === 'KeyL') {
    xwAngle = xwAngle.map(angle => angle += 1);
  }

  if (event.code === 'KeyI') {
    ywAngle = ywAngle.map(angle => angle += 1);
  }

  if (event.code === 'KeyK') {
    ywAngle = ywAngle.map(angle => angle -= 1);
  }

  if (event.code === 'KeyU') {
    zwAngle = zwAngle.map(angle => angle += 1);
  }

  if (event.code === 'KeyO') {
    zwAngle = zwAngle.map(angle => angle -= 1);
  }

  if (event.which === 49) {
    m = m.map(side => side += 1);
  }

  if (event.which === 50) {
    m = m.map(side => side -= 1);
  }

  if (event.which === 52) {
    n = n.map(side => side += 1);
  }

  if (event.which === 51) {
    n = n.map(side => side -= 1);
  }

  if (event.which === 53) {
    j = j.map(side => side += 1);
  }

  if (event.which === 54) {
    j = j.map(side => side -= 1);
  }

  if (event.which === 55) {
    q = q.map(side => side += 1);
  }

  if (event.which === 56) {
    q = q.map(side => side -= 1);
  }
}

document.body.addEventListener('keydown', rotateByKeys);