const EventEmitter = require('super-event-emitter');

class Thumb {
        constructor(url) {
            EventEmitter.mixin(this);

            this.url = url;
        }

        render() {
            const $el = document.createElement('img');
            $el.setAttribute('src', this.url);

            $el.addEventListener('click', () => {
                this.trigger('click');
            });

            const $app = document.querySelector('#app');
            $app.append($el);
        }
    }

    module.exports = {
        Thumb
    };