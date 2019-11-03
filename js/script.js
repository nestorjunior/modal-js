(function() {
    let modal = document.querySelector('#modal-promocao');
    let btn = document.querySelector('.btn-success');

    function iniciaModal() {
        modal.classList.add('mostrar');
        modal.addEventListener('click', function(e) {
            if (e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        })
    }

    btn.addEventListener('click', iniciaModal);

})();