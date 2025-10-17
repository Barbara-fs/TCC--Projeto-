


function irParaInicio() {
  window.location.href = 'inicio.html';


function irParaOpções() {
  window.location.href = 'Opções.html';
}

function irParaVendas() {
  window.location.href = 'Vendas.html';
}


function irParaCashback() {
  window.location.href = 'cashback.html';
}

function irParaCadastro() {
  window.location.href = 'cadastro.html';
}

function irParaLeads() {
  window.location.href = 'leads.html';
}


function irParaPag() {
  window.location.href = 'pag.html';
}

function irParaPortifolio() {
  window.location.href = 'portifolio.html';
}

function irParaStatusDaVenda() {
  window.location.href = 'statusdavenda.html';
}









const Cadastro = document.getElementById('Cadastro.HTML');
  Cadastro.innerHTML = 'output cadastro de clientes';



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