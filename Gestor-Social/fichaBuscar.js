const btnBuscarFicha =document.getElementById("btn-buscar-ficha");
const intDni=document.getElementById("ficha-dni");
const  fichaError = document.getElementById("ficha-error");
const sociosTabla = window.opener.socios;
//Constantes donde pondremos datos del socio
const fichaNombreId = document.getElementById("ficha-nombre-id");
const fichaDniVal= document.getElementById("ficha-dni-val");
const fichaEmail= document.getElementById("ficha-email");
const fichaDominio = document.getElementById("ficha-dominio");
const fichaTelefono= document.getElementById("ficha-telefono");
const fichaNacimiento= document.getElementById("ficha-nacimiento");
const fichaAlta= document.getElementById("ficha-alta");
const fichaCumple= document.getElementById("ficha-cumple");
const fichaCuota= document.getElementById("ficha-cuota");
const fichaActividades= document.getElementById("ficha-actividades");
let socio=null;

btnBuscarFicha.addEventListener("click",()=>{
    debugger;
        window.opener.removeNodes(fichaError);
         let dni=intDni.value;
        socio= sociosTabla.find(elem => elem.dni==dni)
    try {
         
     if(!socio)
        throw new Error("  El DNI introducido no corresponde a ningún socio registrado.");
  



        fichaNombreId.textContent=socio.nombre+" "+socio.apellidos+" "+socio.id;
       // fichaNombreId.textContent = `${socio.nombre} ${socio.apellidos} (${socio.id})`;
        fichaDniVal.textContent   = socio.dni;
        fichaEmail.textContent    = socio.email+"| Dominio: "+dominioCorreo(socio.email);
        fichaTelefono.textContent = telefonoFormato(socio.telefono);
        fichaNacimiento.textContent = formatoFechaNacimiento(socio.fechaNacimiento);
        fichaAlta.textContent     = antiguedadDelSocio(socio.fechaAlta);
        fichaCumple.textContent =  proximoCumpleaños(socio.fechaNacimiento);
        fichaCuota.textContent    = `${socio.cuota} €`;
    

        
    } catch (error) {
        
        fichaError.appendChild(window.opener.createNode("p",error.message,"","error"));
    }
   
})

/**
 * Extrae el dominio del correo
 * @param {*} email 
 * @returns 
 */
function dominioCorreo(email){

    return email.split("@")[1];

}




/**
 * Deja el Número de télefono en formato
 * 666 111 111
 *
 * @param {*} tel 
 */
function telefonoFormato(tel){
    let telefono=tel.split("");
    let i=0;
    let telformato="";
    for(let elem of telefono){
        if(i<3){
            telformato+=elem;
            i++;
        }
        else {
            telformato+=" "+elem;
            i=1;
        }

    }
    return telformato;

}

/**
 *  Formato fecha de nacimiento  martes, 14 de marzo de 1995 · 31 años.
 * @param {string} nacimiento 
 */
function formatoFechaNacimiento(nacimiento){
    let fecha=new Date(nacimiento);

    let meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"];

    let edad = window.opener.calcularEdad(nacimiento);
   
    return `${dias[fecha.getDay()]}, ${fecha.getDate()} de 
        ${meses[fecha.getMonth()]} de ${fecha.getFullYear()} - ${edad} años`;
}

/**
 * Función que devuelve la antiguedad del 
 * socio en formato  dd/mm/aaaa y días
 * @param {string} fecha 
 * @returns 
 */
function antiguedadDelSocio(fecha){
    let cadena= fecha.replaceAll("-","/");
    let dias=window.opener.calcularEdad(fecha)*365;
    cadena+=" con "+dias+" dias"; 

    return cadena;
}

function proximoCumpleaños(nacimiemto){
    let milisegundosPorDias=1000*60*60*24;
    let fecha=new Date(nacimiemto);
    let fechaActual=new Date();
    let cadena="Faltan ";

    //Cambiar el año de nacimiento al año actual
       fecha.setFullYear(fechaActual.getFullYear());

    if(fecha<fechaActual){fecha.setFullYear(fechaActual.getFullYear()+1)};

    //Al restar fechas lo devuelve en milisegundos
    cadena+=Math.ceil((fecha-fechaActual)/ milisegundosPorDias)+" dias";

    return cadena;

}