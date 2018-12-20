class Canvas {
  static draw() {
    const cs = document.createElement('canvas');
    cs.setAttribute('id', 'canvas');
    document.querySelector('.content').appendChild(cs);
  }
}

export default Canvas;
