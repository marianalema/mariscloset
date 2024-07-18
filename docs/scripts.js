document.addEventListener('DOMContentLoaded', function() {
    const temperature = localStorage.getItem('temperature'); // "hot", "average", "cold"
    const event = localStorage.getItem('event'); // "class", "dinner", "going_out", "pool_party"

    const albums = {
        class: {
            hot: ['images/class/hot/class_hot1.png',
            'images/class/hot/class_hot2.png',
            'images/class/hot/class_hot3.png',
            'images/class/hot/class_hot4.png',
            'images/class/hot/class_hot5.png',
            'images/class/hot/class_hot6.png',
            'images/class/hot/class_hot7.png',
            'images/class/hot/class_hot8.png',
            'images/class/hot/class_hot9.png',
            'images/class/hot/class_hot10.png',
            'images/class/hot/class_hot11.png'],
            average: ['images/class/average/class_average1.png',
            'images/class/average/class_average2.png',
            'images/class/average/class_average3.png',
            'images/class/average/class_average4.png',
            'images/class/average/class_average5.png',
            'images/class/average/class_average6.png',
            'images/class/average/class_average7.png',
            'images/class/average/class_average8.png',
            'images/class/average/class_average9.png',
            'images/class/average/class_average10.png',
            'images/class/average/class_average11.png',
            'images/class/average/class_average12.png',
            'images/class/average/class_average13.png',
            'images/class/average/class_average14.png',
            'images/class/average/class_average15.png',
            'images/class/average/class_average16.png',
            'images/class/average/class_average17.png',
            'images/class/average/class_average18.png',
            'images/class/average/class_average19.png',
            'images/class/average/class_average20.png',
            'images/class/average/class_average21.png'],
            cold: [ 'images/class/cold/class_cold1.png',
            'images/class/cold/class_cold2.png',
            'images/class/cold/class_cold3.png',
            'images/class/cold/class_cold4.png',
            'images/class/cold/class_cold5.png']
        },
        dinner: {
            hot: ['images/dinner/hot/dinner_hot1.png',
            'images/dinner/hot/dinner_hot2.png',
            'images/dinner/hot/dinner_hot3.png',
            'images/dinner/hot/dinner_hot4.png',
            'images/dinner/hot/dinner_hot5.png',
            'images/dinner/hot/dinner_hot6.png',
            'images/dinner/hot/dinner_hot7.png',
            'images/dinner/hot/dinner_hot8.png',
            'images/dinner/hot/dinner_hot9.png',
            'images/dinner/hot/dinner_hot10.png',
            'images/dinner/hot/dinner_hot11.png'],
            average: ['images/dinner/average/dinner_average1.png',
            'images/dinner/average/dinner_average2.png',
            'images/dinner/average/dinner_average3.png',
            'images/dinner/average/dinner_average4.png',
            'images/dinner/average/dinner_average5.png',
            'images/dinner/average/dinner_average6.png',
            'images/dinner/average/dinner_average7.png',
            'images/dinner/average/dinner_average8.png',
            'images/dinner/average/dinner_average9.png',
            'images/dinner/average/dinner_average10.png',
            'images/dinner/average/dinner_average11.png',
            'images/dinner/average/dinner_average12.png',
            'images/dinner/average/dinner_average13.png',
            'images/dinner/average/dinner_average14.png',
            'images/dinner/average/dinner_average15.png',
            'images/dinner/average/dinner_average16.png'],
            cold: ['images/dinner/cold/dinner_cold1.png']
        },
        going_out: {
            hot: [
                'images/going_out/hot/going_out_hot1.png',
                'images/going_out/hot/going_out_hot2.png',
                'images/going_out/hot/going_out_hot3.png',
                'images/going_out/hot/going_out_hot4.png',
                'images/going_out/hot/going_out_hot5.png',
                'images/going_out/hot/going_out_hot6.png',
                'images/going_out/hot/going_out_hot7.png',
                'images/going_out/hot/going_out_hot8.png',
                'images/going_out/hot/going_out_hot9.png',
                'images/going_out/hot/going_out_hot10.png',
                'images/going_out/hot/going_out_hot11.png',
                'images/going_out/hot/going_out_hot12.png',
                'images/going_out/hot/going_out_hot13.png',
                'images/going_out/hot/going_out_hot14.png',
                'images/going_out/hot/going_out_hot15.png',
                'images/going_out/hot/going_out_hot16.png',
                'images/going_out/hot/going_out_hot17.png',
                'images/going_out/hot/going_out_hot18.png',
                'images/going_out/hot/going_out_hot19.png'
            ],
            average: [
                'images/going_out/average/going_out_average1.png',
                'images/going_out/average/going_out_average2.png',
                'images/going_out/average/going_out_average3.png',
                'images/going_out/average/going_out_average4.png',
                'images/going_out/average/going_out_average5.png',
                'images/going_out/average/going_out_average6.png',
                'images/going_out/average/going_out_average7.png',
                'images/going_out/average/going_out_average8.png',
                'images/going_out/average/going_out_average9.png',
                'images/going_out/average/going_out_average10.png',
                'images/going_out/average/going_out_average11.png',
                'images/going_out/average/going_out_average12.png',
                'images/going_out/average/going_out_average13.png',
                'images/going_out/average/going_out_average14.png',
                'images/going_out/average/going_out_average15.png',
                'images/going_out/average/going_out_average16.png',
                'images/going_out/average/going_out_average17.png',
                'images/going_out/average/going_out_average18.png',
                'images/going_out/average/going_out_average19.png',
                'images/going_out/average/going_out_average20.png',
                'images/going_out/average/going_out_average21.png',
                'images/going_out/average/going_out_average22.png',
                'images/going_out/average/going_out_average23.png',
                'images/going_out/average/going_out_average24.png',
                'images/going_out/average/going_out_average25.png',
                'images/going_out/average/going_out_average26.png',
                'images/going_out/average/going_out_average27.png',
                'images/going_out/average/going_out_average28.png',
                'images/going_out/average/going_out_average29.png',
                'images/going_out/average/going_out_average30.png'
            ],
            cold: [
                'images/going_out/cold/going_out_cold1.png',
                'images/going_out/cold/going_out_cold2.png',
                'images/going_out/cold/going_out_cold3.png',
                'images/going_out/cold/going_out_cold4.png',
                'images/going_out/cold/going_out_cold5.png',
                'images/going_out/cold/going_out_cold6.png'
            ]
        },
        pool_party: {
            hot: [
                'images/pool_party/hot/pool_party_hot1.png',
                'images/pool_party/hot/pool_party_hot2.png',
                'images/pool_party/hot/pool_party_hot3.png',
                'images/pool_party/hot/pool_party_hot4.png',
                'images/pool_party/hot/pool_party_hot5.png',
                'images/pool_party/hot/pool_party_hot6.png',
                'images/pool_party/hot/pool_party_hot7.png',
                'images/pool_party/hot/pool_party_hot8.png',
                'images/pool_party/hot/pool_party_hot9.png'

            ]
        }
        
    };

    // Função para embaralhar array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let currentAlbum = shuffle(albums[event][temperature]);
    let currentIndex = 0;

    const outfitImage = document.getElementById('outfitImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function showImage(index) {
        outfitImage.src = currentAlbum[index];
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? currentAlbum.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === currentAlbum.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });

    // Inicializar com a primeira imagem do álbum embaralhado
    showImage(currentIndex);
});
