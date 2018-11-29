(function() {

    const db = {
        photos: [
            {
                thumb: 'https://picsum.photos/60/30?image0',
                image: 'https://picsum.photos/300/150?image0',
            },
            {
                thumb: 'https://picsum.photos/60/30?image1',
                image: 'https://picsum.photos/300/150?image1',
            },
            {
                thumb: 'https://picsum.photos/60/30?image2',
                image: 'https://picsum.photos/300/150?image02',
            }
        ]
    };

    window.gallery = window.gallery || {};
    window.gallery.db = db;
}

)();