(function() {

    const db = {
        photos: [
            {
                thumb: 'https://picsum.photos/60/30?image=0',
                image: 'https://picsum.photos/300/150?image=0',
            },
            {
                thumb: 'https://picsum.photos/60/30?image=1',
                image: 'https://picsum.photos/300/150?image=1',
            },
            {
                thumb: 'https://picsum.photos/60/30?image=2',
                image: 'https://picsum.photos/300/150?image=2',
            }
        ]
    };

    window.gallery = window.gallery || {};
    window.gallery.db = db;
}

)();