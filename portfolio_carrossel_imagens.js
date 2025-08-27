document.addEventListener('DOMContentLoaded', function() {
    console.log('Carregado!')

    const carrosseis = document.querySelectorAll('.container_do_carrossel')
    console.log('Encontrados', carrosseis.length, 'carrosséis.')

    carrosseis.forEach((container, index) => {
        console.log('Iniciando carrossel', index + 1);
        iniciar_carrossel(container);
    });
});

function iniciar_carrossel(container) {
    const carrossel = container.querySelector('.carrossel');
    const itens = carrossel.querySelectorAll('.carrossel_item');
    const bt_proximo = container.querySelector('.proximo');
    const bt_anterior = container.querySelector('.anterior');
    const indicadores = container.querySelectorAll('.indicador');

    console.log('Carrossel com', itens.length, 'itens.');

    let indice_atual = 0;
    const total_itens = itens.length;

    function atualizar_indicadores() {
        indicadores.forEach((indicador, index) => {
            if (index === indice_atual) {
                indicador.classList.add('ativo');
            } else {
                indicador.classList.remove('ativo');
            }
        });
    }

    function atualizar_carrossel() {
        carrossel.style.transform = `translateX(-${indice_atual * 100}%)`;
        atualizar_indicadores();
    }

    function proximo_item() {
        if (indice_atual < total_itens - 1) {
            indice_atual++;
        } else {
            indice_atual = 0;
        }
        atualizar_carrossel();
    }

    function anterior_item() {
        if (indice_atual > 0) {
            indice_atual--;
        } else {
            indice_atual = total_itens - 1;
        }
        atualizar_carrossel();
    }

    function ir_para_item(indice) {
        indice_atual = indice;
        atualizar_carrossel();
    }

    if(bt_proximo) {
        bt_proximo.addEventListener('click', proximo_item);
    }

    if(bt_anterior) {
        bt_anterior.addEventListener('click', anterior_item);
    }

    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            ir_para_item(index);
        });
    });

    atualizar_carrossel();
}