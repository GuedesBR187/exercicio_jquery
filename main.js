$(document).ready(function() {
    var number = 1
    $('form').on('submit', function(e){
        e.preventDefault();
        const descritivoTarefa = $('#descricao-tarefa').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`
            <div class="Atividades">
                <input type="checkbox" style="display: none" id="tarefa${number}" name="tarefa">
                <label for="tarefa${number}">
                    ${descritivoTarefa}
                </label>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(800);
        $('#descricao-tarefa').val('');
        number++
    })
})