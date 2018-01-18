  //Traer elementos del HTML
  var $name = $("#name-input");
  var $phone = $("#phone-input");
  var $lupa = $("#lupa");
  var $delete = $("#delete");
  
  function loadPage() {
    $(".modal").modal();
    $name.keyup(validateContact); /*dispara la funcion*/
    $phone.keyup(validateContact);
  }
  // var loadPage = function () {
    
  // };

  function validateContact() {
    if($(this).val().trim().length > 0) {// this detona el evento
      $("#add-contact").removeAttr("disabled");
    } else {
      $("#add-contact").attr("disabled", true); /* lo vuelve a deshabilitar utilizams 'attr'*/
    }
    // var $nameVal = $("input[name='name'].val()");
    // if($nameVal.lenght > 0) {
    //   $("add").prop("disabled, false");
    // }
  }
  // var validateContact = function () {
  //   //En esta funcion tenemos que validar que el usuario ingrese datos y no valores vacios
  // };

  function paintContactsInHTML(contact) {

  }

  // var paintContactsInHTML = function(contact) {
   
    /* Crear elementos con DOM html al publicar contacto */
     
    
    //Asignando atributos y/o eventos
    

    /* Asignando valores a los elementos*/
    

    //Agregamos lo que creamos con el DOM a un elemento existente del HTML
    
  // };
  function addContact(e) {
    e.preventDefault();
  }

  // var addContact = function (e) {
  //   e.preventDefault();
    //Las siguientes lineas toman el valor que el usuario agrega en los inputs y los guardan en variables
    

    //Con las variables separadas que obtuvimos creamos una estructura de datos unica, un objeto por cada contacto
    

    /*Agregamos el contacto a nuestra data (arreglo declarado) para poderla filtrar y eliminar posteriormente*/
    
    //La siguiente funcion se encarga de pintar los contactos en el html
    
    /* Limpiando valores de formulario*/
    
  // };


  function filterContacts() {

  }
  // var filterContacts = function() {
  //   //Esta funcion debe de filtrar la data segun el valor que el usuario ingrese en el input de busqueda
  // };

  function removeContact() {

  }
  // var removeContact = function () {
  //   //esta funcion como primer alcance debe de poer borrar la tarjeta que se crea desde el DOM
  //   //como segundo alcance borrar el elemento de la data
  // };




  $(document).ready(loadPage);
