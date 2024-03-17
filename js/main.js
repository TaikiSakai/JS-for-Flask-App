
document.addEventListener('DOMContentLoaded', function() {
    let cobj = cropCanvas.addCanvas('#crop-canvas', 1280, 1024);

    let image = new Image();
    image.src = './images/image008.bmp'
    image.onload = function() {
        cobj.context.drawImage(image, 0, 0, 576, 460);
    }; 

})