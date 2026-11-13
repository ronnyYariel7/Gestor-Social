const altaNombre = document.getElementById("alta-nombre");
const altaDni = document.getElementById("alta-dni");
const altaEmail =  document.getElementById("alta-email");
const altaTelefono = document.getElementById("alta-telefono");
const altaNacimiento=document.getElementById("alta-nacimiemto");
const altaCuota=document.getElementById("alta-cuota");
const actividades=document.getElementById("actividades");

let socios=window.opener.socios;


////---------FUNCIONES-----------///

/**
 * Función para verificar el Nombre 
 */
function verificarNombre(){

    let nombre=altaNombre.value;
    myReg=new RegExp("^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$");
    if(myReg.test(nombre))altaNombre.textContent=nombre;
    else throw new Error("Nombre: Solo letras (incluidas tildes, ñ y ü) y un único espacio entre palabras ")
   
}

/**
 * 
 */
function verificarDni(){

}