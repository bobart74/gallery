(function () {

    class Thumb {
        constructor(url) {
            this.url = url;
        }

        render() {
            const $el = document.createElement('img');
            $el.setAttribute('src', this.url);
            //document.body.append($app);

            const $app = document.querySelector('#app');
            $app.append($el);
        }
    }
    
    window.gallery = window.gallery || {};
    window.gallery.Thumb = Thumb;
    
})();