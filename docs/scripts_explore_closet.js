document.addEventListener('DOMContentLoaded', function() {
    const albums = {
        top: [
            'images/top/top1.png',
            'images/top/top2.png',
            'images/top/top3.png',
            'images/top/top4.png',
            'images/top/top5.png',
            'images/top/top6.png',
            'images/top/top7.png',
            'images/top/top8.png',
            'images/top/top9.png',
            'images/top/top10.png',
            'images/top/top11.png',
            'images/top/top12.png'
            // Add more top images here
        ],
        bottom: [
            'images/bottom/bottom1.png',
            'images/bottom/bottom2.png',
            'images/bottom/bottom3.png',
            'images/bottom/bottom4.png',
            'images/bottom/bottom5.png',
            'images/bottom/bottom6.png',
            'images/bottom/bottom7.png',
            'images/bottom/bottom8.png',
            'images/bottom/bottom9.png',
            'images/bottom/bottom10.png',
            'images/bottom/bottom11.png',
            'images/bottom/bottom12.png',
            'images/bottom/bottom13.png',
            'images/bottom/bottom14.png',
            'images/bottom/bottom15.png',
            'images/bottom/bottom16.png',
            'images/bottom/bottom17.png'
            // Add more bottom images here
        ],
        shoe: [
            'images/shoe/shoe1.png',
            'images/shoe/shoe2.png',
            'images/shoe/shoe3.png',
            'images/shoe/shoe4.png',
            'images/shoe/shoe5.png',
            'images/shoe/shoe6.png',
            'images/shoe/shoe7.png',
            'images/shoe/shoe8.png',
            'images/shoe/shoe9.png',
            'images/shoe/shoe10.png',
            'images/shoe/shoe11.png',
            // Add more shoe images here
        ]
    };

    // Function to shuffle array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let topAlbum = shuffle(albums.top);
    let bottomAlbum = shuffle(albums.bottom);
    let shoeAlbum = shuffle(albums.shoe);

    let topIndex = 0;
    let bottomIndex = 0;
    let shoeIndex = 0;

    const topImage = document.getElementById('topImage');
    const prevTopBtn = document.getElementById('prevTopBtn');
    const nextTopBtn = document.getElementById('nextTopBtn');

    const bottomImage = document.getElementById('bottomImage');
    const prevBottomBtn = document.getElementById('prevBottomBtn');
    const nextBottomBtn = document.getElementById('nextBottomBtn');

    const shoeImage = document.getElementById('shoeImage');
    const prevShoeBtn = document.getElementById('prevShoeBtn');
    const nextShoeBtn = document.getElementById('nextShoeBtn');

    function showImage(imageElement, album, index) {
        imageElement.src = album[index];
    }

    prevTopBtn.addEventListener('click', () => {
        topIndex = (topIndex === 0) ? topAlbum.length - 1 : topIndex - 1;
        showImage(topImage, topAlbum, topIndex);
    });

    nextTopBtn.addEventListener('click', () => {
        topIndex = (topIndex === topAlbum.length - 1) ? 0 : topIndex + 1;
        showImage(topImage, topAlbum, topIndex);
    });

    prevBottomBtn.addEventListener('click', () => {
        bottomIndex = (bottomIndex === 0) ? bottomAlbum.length - 1 : bottomIndex - 1;
        showImage(bottomImage, bottomAlbum, bottomIndex);
    });

    nextBottomBtn.addEventListener('click', () => {
        bottomIndex = (bottomIndex === bottomAlbum.length - 1) ? 0 : bottomIndex + 1;
        showImage(bottomImage, bottomAlbum, bottomIndex);
    });

    prevShoeBtn.addEventListener('click', () => {
        shoeIndex = (shoeIndex === 0) ? shoeAlbum.length - 1 : shoeIndex - 1;
        showImage(shoeImage, shoeAlbum, shoeIndex);
    });

    nextShoeBtn.addEventListener('click', () => {
        shoeIndex = (shoeIndex === shoeAlbum.length - 1) ? 0 : shoeIndex + 1;
        showImage(shoeImage, shoeAlbum, shoeIndex);
    });

    // Initialize with the first image of each shuffled album
    showImage(topImage, topAlbum, topIndex);
    showImage(bottomImage, bottomAlbum, bottomIndex);
    showImage(shoeImage, shoeAlbum, shoeIndex);
});
