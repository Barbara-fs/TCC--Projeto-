function irParaOpções() {
  window.location.href = 'Opções.html';
}

function irParaAcessoVendas() {
  window.location.href = 'PaginaInicial.html';
}

const Cadastro = document.getElementById('Cadastro');
  Cadastro.innerHTML = '';



    document.getElementById('excelFile').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const data = e.target.result;
                    document.getElementById('output').textContent = data;
                };
                reader.readAsText(file);
            }
        });