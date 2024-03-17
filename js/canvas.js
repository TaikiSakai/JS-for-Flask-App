const cropCanvas = {}

cropCanvas.genCanvas = function(w, h) {
    const canvas = document.createElement('canvas');
    canvas.width = w * 0.45;
    canvas.height = h * 0.45;
    w *= 0.45
    h *= 0.45
    const context = canvas.getContext('2d');
    return {canvas, context, w, h};
}


//  cobj == canvas object;
cropCanvas.addCanvas = function(selector, w, h) { 
    const cobj = this.genCanvas(w, h);
    const element = document.querySelector(selector);
    element.append(cobj.canvas);
    return cobj;
}
