var datas = fetch('data.json').then((res) => res.json()).then((data) => {
    let name = data.name;
    let pre = data.preview;
    let brand = data.brand
    let price = data.price;
    let photos = data.photos
    let desc = data.description;
    document.body.innerHTML +=
        `
        <div class="container">
<div class="row">
    <div class="col-4 preview" id="imagePreview">
        <img src=${pre}
            id="previewed" alt="">
    </div>

    <div class="col-6">
        <h1 class="name">${name}</h1>
        <h4 class="ft-20">${brand}</h4>
        <h3 class="ft-20">Price: Rs <span class="price">${price}</span></h3>
        <div>
        <h3 class="ft-20">Description</h3>
        <p class="mute">${desc}</p>
        </div>
        <h3 class="ft-20">Product Preview</h3>
        <div class="pre-img">
            <img class="select select-img" src=${photos[0]}
                onclick="previewImage('${photos[0]}')">
            <img class="select" src=${photos[1]}
                onclick="previewImage('${photos[1]}')">
            <img class="select" src=${photos[2]}
                onclick="previewImage('${photos[2]}')">
            <img class="select" src=${photos[3]}
                onclick="previewImage('${photos[3]}')">
            <img class="select" src=${photos[4]}
                onclick="previewImage('${photos[4]}')">
        </div>
        <button class="btn-cart">Add to cart</button>
    </div>
</div>
</div>
`
})


function previewImage(imgSrc) {

    const previewed = document.getElementById('previewed');
    previewed.src = imgSrc;
    
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.style.display = 'block';
    document.getElementById('previewed').addEventListener('onload', () => {
        this.classList.add("active");
    })

    const clickableImages = document.querySelectorAll('.select');
    clickableImages.forEach(image => {
        image.addEventListener('click', function () {
            clickableImages.forEach(img => {
                img.classList.remove('clicked');
                img.classList.remove('select-img');
            });
            
            this.classList.add('clicked');
        });
    })

}