/**
 * Un array que contine un Objeto de tipo Socio 
 */

var socios = [
  {
    id: "SOC-0001",
    nombre: "Lucía",
    apellidos: "Martín Ruiz",
    dni: "12345678Z",
    email: "lucia.martin@correo.es",
    telefono: "612345678",
    fechaNacimiento: "1995-03-14",
    fechaAlta: "2019-09-02",
    actividades: ["natación", "yoga"],
    cuota: 35
  },
  {
    id: "SOC-0002",
    nombre: "Álvaro",
    apellidos: "Gómez Pérez",
    dni: "87654321X",
    email: "alvaro.gomez@gmail.com",
    telefono: "699887766",
    fechaNacimiento: "1988-11-20",
    fechaAlta: "2018-01-15",
    actividades: ["pádel", "musculación"],
    cuota: 40
  },
  {
    id: "SOC-0003",
    nombre: "Sofía",
    apellidos: "López Sanz",
    dni: "11223344F",
    email: "sofia.lopez@outlook.es",
    telefono: "611223344",
    fechaNacimiento: "2005-06-10",
    fechaAlta: "2021-05-10",
    actividades: ["yoga", "pilates"],
    cuota: 30
  },
  {
    id: "SOC-0004",
    nombre: "Carlos",
    apellidos: "Fernández Gil",
    dni: "55667788K",
    email: "carlos.fg@correo.es",
    telefono: "655443322",
    fechaNacimiento: "1975-12-01",
    fechaAlta: "2015-11-20",
    actividades: ["spinning", "musculación"],
    cuota: 45
  },
  {
    id: "SOC-0005",
    nombre: "Marta",
    apellidos: "Ruiz Navarro",
    dni: "99887766L",
    email: "marta.rn@domain.com",
    telefono: "677889900",
    fechaNacimiento: "1992-04-25",
    fechaAlta: "2020-03-05",
    actividades: ["natación", "pilates"],
    cuota: 35
  },
  {
    id: "SOC-0006",
    nombre: "Jorge",
    apellidos: "Blanco Romero",
    dni: "33445566T",
    email: "jorge.blanco@correo.es",
    telefono: "633221100",
    fechaNacimiento: "1980-08-19",
    fechaAlta: "2017-07-12",
    actividades: ["pádel", "spinning"],
    cuota: 38
  },
  {
    id: "SOC-0007",
    nombre: "Elena",
    apellidos: "Torres Marín",
    dni: "22334455Y",
    email: "elena.tm@gmail.com",
    telefono: "688990011",
    fechaNacimiento: "2000-01-30",
    fechaAlta: "2022-02-14",
    actividades: ["yoga", "natación"],
    cuota: 35
  },
  {
    id: "SOC-0008",
    nombre: "David",
    apellidos: "Moreno Cano",
    dni: "66778899R",
    email: "david.moreno@correo.es",
    telefono: "644556677",
    fechaNacimiento: "1998-09-05",
    fechaAlta: "2019-10-10",
    actividades: ["musculación", "pilates"],
    cuota: 32
  },
  {
    id: "SOC-0009",
    nombre: "Ana",
    apellidos: "Jiménez Vega",
    dni: "44556677W",
    email: "ana.jv@outlook.com",
    telefono: "622114433",
    fechaNacimiento: "1990-07-22",
    fechaAlta: "2016-04-18",
    actividades: ["spinning", "yoga"],
    cuota: 35
  },
  {
    id: "SOC-0010",
    nombre: "Pablo",
    apellidos: "Sánchez León",
    dni: "77889900H",
    email: "pablo.sl@correo.es",
    telefono: "600112233",
    fechaNacimiento: "1985-10-15",
    fechaAlta: "2023-01-08",
    actividades: ["pádel", "natación"],
    cuota: 40
  },
  {
    id: "SOC-0011",
    nombre: "María José",
    apellidos: "Ramos Díaz",
    dni: "31415926Q",
    email: "mariajose.ramos@correo.es",
    telefono: "671234567",
    fechaNacimiento: "1996-05-12",
    fechaAlta: "2020-06-01",
    actividades: ["natación", "pilates", "yoga"],
    cuota: 50
  },
  {
    id: "SOC-0012",
    nombre: "Francisco Javier",
    apellidos: "Soto Blázquez",
    dni: "53589793J",
    email: "francisco.soto@gmail.com",
    telefono: "672345678",
    fechaNacimiento: "1982-12-03",
    fechaAlta: "2018-09-15",
    actividades: ["musculación", "spinning"],
    cuota: 38
  },
  {
    id: "SOC-0013",
    nombre: "Carmen Rosa",
    apellidos: "Gil Montero",
    dni: "23846264B",
    email: "carmen.gil@outlook.com",
    telefono: "673456789",
    fechaNacimiento: "2004-03-22",
    fechaAlta: "2022-11-20",
    actividades: ["yoga", "pádel"],
    cuota: 35
  },
  {
    id: "SOC-0014",
    nombre: "Luis Miguel",
    apellidos: "Vega Santos",
    dni: "16180339P",
    email: "luis.vega@correo.es",
    telefono: "674567890",
    fechaNacimiento: "1979-08-11",
    fechaAlta: "2014-05-10",
    actividades: ["spinning", "natación", "musculación"],
    cuota: 55
  },
  {
    id: "SOC-0015",
    nombre: "Beatriz",
    apellidos: "Sanz Gómez",
    dni: "57721566V",
    email: "beatriz.sanz@domain.net",
    telefono: "675678901",
    fechaNacimiento: "1999-02-18",
    fechaAlta: "2021-08-30",
    actividades: ["pilates", "yoga"],
    cuota: 30
  }
];


var usersWindows=null;
const FECHA_ACTUAL=new Date();// Constatnte que contiene la fecha Actual

const ruta =location.href;
const fechaActual=document.getElementById("fechaActual");// Fecha Actula
const tiempoActual=document.getElementById("tiempoActual"); // constante donde mostraremos el Tiempo
const sociosTabla=document.getElementById("sociosTabla"); // constante para obtener la tabla donde estaran los socios
const inpBuscar = document.getElementById("inpBuscar"); // Input del Buscador de Socios 
const selecActividad = document.getElementById("selecActividad"); // Select de las Opciones actividades
const selecOrdenar = document.getElementById("selecOrdenar"); // Seleciona como se ordenan los socios
const btnPantallaCompleta = document.getElementById("btnFullscreen"); // botón de Pantalla Completa
const ventanasOpciones =document.getElementById("ventanasOpciones"); //sección donde podremos abrir ventanas 

//Poner en Pantalla completa los socios 
btnPantallaCompleta.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    sociosTabla.requestFullscreen(); // Entrar en pantalla completa
  } else {
    document.exitFullscreen(); // Salir de pantalla completa
  }
});



//Agregamos la fecha Actual a la Cabecera
fechaActual.innerHTML=formatoFecha();


//Cargamos Los socios a la tabla simulando una Base de Datos
cargarSocios();

// setInterval para que el tiempo cambien constantemente  
setInterval(()=>{
  let fecha=new Date();
  tiempoActual.innerHTML=fecha.toLocaleTimeString();
},1000)

//Buscador de Socios , agregamos un evento para saber que el usuario ha escrito más de 2 caracteres
inpBuscar.addEventListener("input",() =>{
  let caracteres=inpBuscar.value.trim(); // recogemos caracter por caracter 
  if(caracteres.length>=2){
    filtrarSocios(caracteres);
  }
  else cargarSocios();
})

//Buscar Socios por ACTIVIDADES
selecActividad.addEventListener("input",()=>{filtrarSocios();})
//Evento Ordenar 
selecOrdenar.addEventListener("input", function (){filtrarSocios();})

//Creamos un Nodo para abrir una nueva Ventana
let btnAbrirBuscarFicha = createNode("button","Buscar Ficha","btnAbrirBuscarFicha","btnDefecto");
ventanasOpciones.appendChild(btnAbrirBuscarFicha);
btnAbrirBuscarFicha.addEventListener("click",()=>{

  let anchoVentana=500;
  let altoVentana=400;

  let propiedades = propiedadesVentana(anchoVentana,altoVentana,(screen.availWidth-anchoVentana)/2,(screen.availHeight-altoVentana)/2);
  usersWindows=window.open("./fichaBuscar.html","ficha Buscar",propiedades);



  
  
})

//Creamos el Botón del Formulario 
let btnAltaSocio =createNode("button","Alta de Socio","btnAltaSocio","btnDefecto");
ventanasOpciones.appendChild(btnAltaSocio);
btnAltaSocio.addEventListener("click",()=>{

  let anchoVentana=1000;
  let altoVentana=600;

  let propiedades = propiedadesVentana(anchoVentana,altoVentana,(screen.availWidth-anchoVentana)/2,(screen.availHeight-altoVentana)/2);
  usersWindows=window.open("./AltaSocio.html","Alta Socio",propiedades)
})


/**
 * -------FUNCIONES-----------
 */


/**
 * función para agregarle las propiedades a una Ventana
 * 
 * @param {number} anchoVentana 
 * @param {number} altoVentana 
 * @param {number} posicionY 
 * @param {number} posicionX 
 * @returns 
 */

function propiedadesVentana(anchoVentana,altoVentana,posicionY,posicionX){

  return `width=${anchoVentana},height=${altoVentana},left=${posicionY},top=${posicionX*0.7}`;
  
}
/**
 * 
 * Funcion para poder agregar el formato de fila con los datos
 * de los socios
 * @param {*} id 
 * @param {*} nombre 
 * @param {*} email 
 * @param {*} actividades 
 * @param {*} edad 
 * @param {*} cuota 
 * @returns 
 */
function agregarSocioTabla(id, nombre,apellidos, email, actividades, edad, cuota) {
   
   let idFormato=idSocio(nombre,apellidos,id);
    email = ocultarCorreo(email);

    let fila = createNode('tr', '', '', ''); // creamos el Nodo en formato tabala   
    let divRadio = createNode('div', String(idFormato), '', 'radio'); //creamos el id con sus estilos 

    let thId = createNode('th', '', '', ''); // creamos las columnas 
    thId.appendChild(divRadio);

    let thNombre = createNode('th', String(nombre), '', '');
    let thEmail = createNode('th', String(email), '', '');
    
    let thActividades = createNode('th', actividadesSocioString(actividades), '', '');

    let thEdad = createNode('th', String(edad), '', '');
    let thCuota = createNode('th', String(cuota), '', '');

    // Agregamos a Fila
    fila.appendChild(thId);
    fila.appendChild(thNombre);
    fila.appendChild(thEmail);
    fila.appendChild(thActividades);
    fila.appendChild(thEdad);
    fila.appendChild(thCuota);

    return fila;
}

/**
 * Función que usamos para cargar los socios 
 */
function cargarSocios() {

  // Para evitar duplicaciones de Socios en sociosTabla 
    removeNodes(sociosTabla);

  socios.forEach((elem)=>{

  sociosTabla.appendChild(agregarSocioTabla(elem.id,elem.nombre,elem.apellidos,
                                            elem.email,elem.actividades,calcularEdad(elem.fechaNacimiento),elem.cuota))
})
  
}


/**
 * Funcio que se le pasa nombre y id de un socio
 * para darle el formato Letra Del Nombre+Letra Apellido + ID
 * Ejemplo: LM0001
 *
 * @param {string} nombre 
 * @param {string} apellido
 * @param {string} id 
 * @returns {string} 
 */
function idSocio(nombre,apellido,id){
     let idSocio=nombre.split("")[0]+apellido.split("")[0]+id.split("-")[1];
     return idSocio;
}


/**
 * Devuelve las actividades de un Socio 
 * en un formato String
 *
 * @param {array} actividades 
 * @returns {string} 
 */
function actividadesSocioString(actividades){
    let actividadesSocio="";
  for(let valor of actividades)actividadesSocio+=valor+" | ";
  return actividadesSocio;

}

/**
 * 
 * Función que nos permite calcular la edad de 
 * cada socio
 * @param {*} nacimiento 
 * @returns 
 */
function calcularEdad(nacimiento){
  let fechaNacimiento=new Date(nacimiento);
  let edad=FECHA_ACTUAL.getFullYear()-fechaNacimiento.getFullYear();
  let mesNacimiento= fechaNacimiento.getMonth();
  let mesActual= FECHA_ACTUAL.getMonth();

  if(mesNacimiento>mesActual ||mesNacimiento==mesActual  && fechaNacimiento>FECHA_ACTUAL)edad--;

return edad;
  
}

/**
 * Función que utilizamos para ocultar el correo 
 * con formato lu**********@correo.es
 * 
 * @param {String} email 
 * @returns 
 */

function ocultarCorreo(email){

   let dominio=email.split("@")[1];
  email=email.split("");
  let emaNuevo=email[0];
  emaNuevo+=email[1];

  for(let i=0;i<email.length;i++){
    if(i>1 && email[i]!="@")emaNuevo+=email[i].replace(/[\w.]/g,"*");
    else if(email[i]=="@"){
      emaNuevo+=email[i];
      break;
    }
  }

  emaNuevo+=dominio;

  return emaNuevo;

}

/**
 * Función que formatea la fecha actual 
 * ejemplo:  Miércoles, 28 de octubre de 2026. 
 * @returns string 
 */
function formatoFecha(){
  let cadena="";
  let meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  let dia=["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"];

  cadena=dia[FECHA_ACTUAL.getDay()];
  cadena+=", "+FECHA_ACTUAL.getDate()+" de "+meses[FECHA_ACTUAL.getMonth()]+" de "+FECHA_ACTUAL.getFullYear();

  return cadena;

}



/** 
 * Función que cambia las tildes de la Vocales
 * para una correcta busqueda del socio
 * 
 * @param {string} nombre 
 * @returns string
 */
function cambiarTildesVocales(nombre){
  let nombreSocio="";
      nombre.toLocaleLowerCase().split("").forEach(carac =>{
        switch(carac){
          case "á":carac="a";break;
          case "é":carac="e";break;
          case "í":carac="i";break;
          case "ó":carac="o";break;
          case "ú":carac="u";break;
          default :break;
        }
        nombreSocio+=carac;
      })
    return nombreSocio;
}

/**
 * Función Para crear Nodos
 * 
 * @param {string} tipo
 * @param {string} texto
 * @param {string} id 
 * @param {string} styles
 * 
 * @returns Node   
 * 
 */
function createNode(tipo,texto,id,clase){
    let elemento=null;

     if((tipo)|| (typeof tipo ==="string"))
         elemento=document.createElement(tipo);
    else
        return null; 

    
    if((texto!="")&& (typeof texto === "string")){
        let elementoText=document.createTextNode(texto);
        elemento.appendChild(elementoText);
    }

    if(id!= "")
        elemento.id=id;

    if((clase) && (typeof clase==="string") && (clase !=""))
        elemento.className=clase;

    return elemento;
}

/**
 * Función que limpia la Tabla socioTabla 
 */

function limpiarTablaSocios(sociosEncontrados){
   if(sociosEncontrados.length==0)sociosTabla.innerHTML="No se han Encontrado Socios";
    else {
      sociosTabla.innerHTML="";}
}

/**
 * Función que filtra los socios por busqueda,
 * actividades y ordenar por nombre
 */
function filtrarSocios(){

  //Tomamos los valores del Buscador y de las Actividades 
  caracteres=inpBuscar.value.trim();
  let valor = selecActividad.value;
  let selectOrdenarSocios=selecOrdenar.value;
  var myRegActividades = new RegExp(`${valor}`);
  let sociosEncontrados=[];


  if(caracteres){
    caracteres=cambiarTildesVocales(caracteres).toLowerCase();

    // creamos la expreción regular
    var myReg = new RegExp(`^${caracteres}`,"i") 
     
   
  sociosEncontrados= socios.filter(elem => {
    let nombreSocio=cambiarTildesVocales(elem.nombre.toLowerCase());
    let apellidoSocio=cambiarTildesVocales(elem.apellidos.toLowerCase());

      if(myReg.test(nombreSocio)|| myReg.test(apellidoSocio))
        return elem;
    })
  }

  
  //Bloque para Ordenar por Nombre ,Apellidos y Edad
  if(valor!="todas" && sociosEncontrados.length!=0){
    sociosActividaes(sociosEncontrados,myRegActividades);

  }else if(valor!="todas" && sociosEncontrados.length==0) {
    for(let i=0;i<socios.length;i++){
      let actividades =actividadesSocioString(socios[i].actividades);

      if(myRegActividades.test(actividades))sociosEncontrados.push(socios[i]);

    }
  }  
  


  if(sociosEncontrados.length!=0){
    ordenarSocios(selectOrdenarSocios,sociosEncontrados);
      visualizarSocios(sociosEncontrados);
  }
  else {
    let socioOrdenado=socios;
    ordenarSocios(selectOrdenarSocios,socioOrdenado);
    visualizarSocios(socioOrdenado);
  } 



}

/**
 * Buscar Socios por sus Actividades 
 * 
 * @param {Array} sociosEncontrados
 * @param {String} myReg
 * 
 */
function sociosActividaes(sociosEncontrados,myReg){
   for(let i=0;i<sociosEncontrados.length;i++){
      let actividades =actividadesSocioString(sociosEncontrados[i].actividades);

      if(!(myReg.test(actividades)))sociosEncontrados.splice(i,1);
  
    }

}

/**
 *  Función a la que se le pasan socios y una cadena
 * indicando como quiere que los ordene
 * 
 * @param {String} selectOrdenarSocios 
 * @param {Array} sociosEncontrados 
 */
function ordenarSocios(selectOrdenarSocios,sociosEncontrados){
    switch(selectOrdenarSocios){
    case "nombre":sociosEncontrados.sort((a,b)=>a.nombre.localeCompare(b.nombre));break;
    case "apellidos":sociosEncontrados.sort((a,b)=>a.apellidos.localeCompare(b.apellidos));break;
    case "jovenes":sociosEncontrados.sort((a,b)=> calcularEdad(a.fechaNacimiento)-calcularEdad(b.fechaNacimiento));break;
    case "antiguo":sociosEncontrados.sort((a,b)=> calcularEdad(b.fechaNacimiento)-calcularEdad(a.fechaNacimiento));break;

  }
}

/**
 * Visualiza los socios Filtrados en la Tabla
 * 
 * @param {*} sociosEncontrados
 */

function visualizarSocios(sociosEncontrados){
   limpiarTablaSocios(sociosEncontrados);
       for(let elem of sociosEncontrados){
     
         sociosTabla.appendChild(agregarSocioTabla(elem.id,elem.nombre,elem.apellidos,
                                            elem.email,elem.actividades,calcularEdad(elem.fechaNacimiento),elem.cuota))
         }

}

/**
 * Función que te permite borrar todos los Nodos
 * que Contiene un Elemento
 * @param {*} elemento 
 */

function removeNodes(elemento){

    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild)
    }

}