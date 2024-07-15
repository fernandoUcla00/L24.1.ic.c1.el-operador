export default class CL_IOperador {


    leerCedula() {

        return prompt("Ingrese la cedula");
    }
    leerTipoOperador() {
        return prompt("Ingrese el tipo de operador \n 1.Supervisor \n 2.Diseñador \n3.Costurera \n4.Bordador \n 5.Empacador");
    }
    leerHorasTrabajadas() {
        return prompt("Ingrese las horas trabajadas");
    }
    leerPrecioHoras() {
        return prompt("Ingrese el precio de la hora base ");
    }

    reporteOperador(c, t, h, p, b, to) {
        return `
      <br>
      Cedula: ${c}
      <br>
      Tipo de operador: ${t}
      <br>
      Horas trabajadas: ${h}
      <br>
      Precio por hora: ${p}
      <br>
      Bono por horas extras: ${b}
      <br>
      Total a cobrar: ${to}
      `
    }
}