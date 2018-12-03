class Title {
    render() {
        const $el = document.createElement('h2');
        $el.textContent = 'Galeria';

        const $app = document.querySelector('#app');
        $app.append($el);
    }
}

module.exports = {
    Title
};