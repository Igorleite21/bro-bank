let saldo = 0;

function atualizarSaldo() {
    document.getElementById('saldo').innerText = `R$ ${saldo.toFixed(2)}`;
}

function depositar() {
    const valorDeposito = parseFloat(document.getElementById('valor-deposito').value);
    if (valorDeposito > 0) {
        saldo += valorDeposito;
        atualizarSaldo();
    } else {
        alert('Valor inválido para depósito.');
    }
    document.getElementById('valor-deposito').value = '';
}

function sacar() {
    const valorSaque = parseFloat(document.getElementById('valor-saque').value);
    if (valorSaque > 0) {
        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            atualizarSaldo();
        } else {
            alert('Saldo insuficiente. Deseja solicitar um empréstimo?');
        }
    } else {
        alert('Valor inválido para saque.');
    }
    document.getElementById('valor-saque').value = '';
}

function transferir() {
    const valorTransferencia = parseFloat(document.getElementById('valor-transferencia').value);
    if (valorTransferencia > 0) {
        if (valorTransferencia <= saldo) {
            saldo -= valorTransferencia;
            atualizarSaldo();
        } else {
            if (alert('Saldo insuficiente.')) {
                
            }
        }
    } else {
        alert('Valor inválido para transferência.');
    }
    document.getElementById('valor-transferencia').value = '';
}

atualizarSaldo();