const queue = {holder: [],}

// queue.loadImage = function(input) {
//     console.log(input);
//     let image = new Image();
//     image.src = input.files[0];

//     document.body.append(image);
//     // const elem = document.getElementById('test-img')

//     for (let i = 0; i < input.files.length; i ++) {
//         this.holder.push(input.files[i]); 
//     }
// }


// オブジェクトURL削除 
// https://lab.syncer.jp/Web/API_Interface/Reference/IDL/URL/revokeObjectURL/
// window.URL.revokeObjectURL()
window.addEventListener('load', () => {
    const f = document.getElementById('images');
    f.addEventListener('change', evt => {
        let inputs = evt.target;
        if (inputs.files.length == 0) {
            console.log('No file selected');
            return;
        }

        const file = inputs.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            queue.holder.push(reader.result);
        }
        // base64 imageになるので注意
        reader.readAsDataURL(file);
    })
})