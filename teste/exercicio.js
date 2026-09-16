class ContaBancaria {
    #saldo;

    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(valor) {
        if (valor < 0) {
            throw new Error("Somente valores acima de 0");
        }
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor < 0) {
            throw new Error("Saque de valor negativo não é possivel!");
        }

        if (this.#saldo >= valor) {
            this.#saldo -= valor;
        } else {
            throw new Error("Erro: saldo insuficiente");
        }
    }

    _alterarSaldo(valor) {
        this.#saldo += valor;
    }
}

class ChequeEspecial extends ContaBancaria {
    #limiteCredito;

    constructor(titular, saldoInicial = 0, limiteCredito = 0) {
        super(titular, saldoInicial);
        this.#limiteCredito = limiteCredito;
    }

    get limiteCredito() {
        return this.#limiteCredito;
    }

    sacar(valor) {
        if (valor < 0) {
            throw new Error("Saque de valor negativo não é possivel!");
        }

        if (this.saldo + this.#limiteCredito >= valor) {
            this._alterarSaldo(-valor);
        } else {
            throw new Error("Erro: saldo e limite insuficientes");
        }
    }
}