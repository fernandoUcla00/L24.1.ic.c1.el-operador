export default class CL_Operador {

    constructor(cedula, tipo, horasTrabajadas, preciohoras) {
        this.cedula = cedula;
        this.tipo = tipo;
        this.horasTrabajadas = horasTrabajadas;
        this.preciohoras = preciohoras;
    }

    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set tipo(tipo){
        this._tipo = +tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set horasTrabajadas(horasTrabajadas) {
        this._horasTrabajadas = +horasTrabajadas;
    }
    get horasTrabajadas() {
        return this._horasTrabajadas;
    }
    set preciohoras(preciohoras) {
        this._preciohoras = +preciohoras;
    }
    get preciohoras() {
        return this._preciohoras;
    }

    bonoHorasExtras() {
        if (this.horasTrabajadas > 40) {
            switch (this.tipo) {
                case 1: return this.preciohoras * (this.horasTrabajadas-40)* 0.32;
                    break;
                case 2: return this.preciohoras * (this.horasTrabajadas-40) * 0.23;
                    break;
                case 3: return this.preciohoras * (this.horasTrabajadas-40) * 0.17;
                    break;
                case 4: return this.preciohoras * (this.horasTrabajadas-40) * 0.07;
                    break;
                case 5: return this.preciohoras * (this.horasTrabajadas-40) * 0.05;
                    break;
                default: return 0;

            }
        }
        else {
            return 0;
        }
    }

    totalCobrar() {
        return this.horasTrabajadas * this.preciohoras + this.bonoHorasExtras();
    }
}
