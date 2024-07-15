import CL_IOperador from "./CL_IOperador.js";
import CL_Operador from "./CL_Operador.js";

let Iopera = new CL_IOperador(),
    c = Iopera.leerCedula(),
    t = Iopera.leerTipoOperador(),
    h = Iopera.leerHorasTrabajadas(),
    p = Iopera.leerPrecioHoras(),
    opera = new CL_Operador(c, t, h, p),

    salida = document.getElementById("salida");
salida.innerHTML = Iopera.reporteOperador(opera.cedula, opera.tipo, opera.horasTrabajadas, opera.preciohoras, opera.bonoHorasExtras(), opera.totalCobrar());