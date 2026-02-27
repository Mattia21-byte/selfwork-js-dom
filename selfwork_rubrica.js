//Crea una rubrica contenente una lista di contatti e con le seguenti funzionalita':
// Mostrare o nascondere la lista dei contatti
// Popolare la tabella con i contatti presenti nell’array di partenza
// Aggiungere un nuovo contatto
// Eliminare un contatto in rubrica
// Modificare un contatto presente in rubrica


//catturo il contacts wrapper
let contactsWrapper = document.querySelector('#contactsWrapper');
//catturo i bottoni
let showContactsBtn = document.querySelector('#showContactsBtn');
let addContactsBtn = document.querySelector('#addContactsBtn');
let removeContactsbtn = document.querySelector('#removeContactsBtn');

//catturo gli input
let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');



//variabile d'appoggio
let check = false;


//Creo la Rubrica:

const Rubrica = {
    contactsList : [
        {contact_name : 'Pierpaolo', phone_number : 3666333003 },
        {contact_name : 'Luigi', phone_number : 3555553351},
        {contact_name : 'Paola', phone_number : 3584533584},
        {contact_name : 'Fernando', phone_number : 3333366363},
        
    ],
    
    //creo metodo mostra contatti
    
    showContacts : function(){
        //pulisco il wrapper
        contactsWrapper.innerHTML = '';
        //faccio il forEach dei contatti
        this.contactsList.forEach((contact, index)=>{
            // creo il mio div
            const div = document.createElement('div');

            //creo il div
            div.classList.add('card-custom');
            
            //inserisco il contenuto della contactList nel div
            div.innerHTML = `
        
          <p class="name">
    <strong>Nome:</strong> ${contact.contact_name}
  </p>

  <p class="phone">
    <strong>Numero:</strong> ${contact.phone_number}
  </p>

  <div class="contact-right">
    <span class="remove-text">Rimuovi</span>
    <i class="fa-solid fa-trash icon" data-index="${index}"></i>
  </div>


    `;
            
            //appendo il div a contactsWrapper
            contactsWrapper.appendChild(div);
        });
          
        //ora mi occupo delle icone
        
        let icons = document.querySelectorAll('.icon');

        icons.forEach((icon) => {

       icon.addEventListener('click', (e) => {

       let index = Number(e.target.dataset.index);

       this.contactsList.splice(index, 1);

       this.showContacts();

  });

});
     


        
    },
    
    //creo metodo nascondi contatti
    hideContacts : function(){
        
        contactsWrapper.innerHTML = '';
        
    },
    
    //creo metodo addContact
    addContact : function(contact, number){
        
        this.contactsList.push({
            contact_name : contact,
            phone_number : number
        });
        
    },
     

    //creo metodo modifica contatto
    modifyContact : function(name, number){

        let index = this.contactsList.findIndex((contact)=>{

            return contact.contact_name === name;

        });

        if(index !== -1){
            this.contactsList[index].phone_number = number;
        }

    },
    
    
    
    
    
    
    
    
};


//evento showcontacts/hide: creata la variabile d'appoggio imposto una condizione al click.

showContactsBtn.addEventListener( 'click', ()=>{
    if(check === false){
        Rubrica.showContacts();
        check = true;
    }else{
        Rubrica.hideContacts();
        check = false;
    }
});

//evento addContact
addContactsBtn.addEventListener( 'click', ()=>{
    
    Rubrica.addContact(nameInput.value, numberInput.value);
    Rubrica.showContacts();
    nameInput.value = '';
    numberInput.value = '';
});

//evento removeContact
removeContactsbtn.addEventListener( 'click', ()=>{
    let name = nameInput.value;
    let index = Rubrica.contactsList.findIndex((contact)=>{
        return contact.contact_name === name;
    });

    if(index !== -1){
        Rubrica.contactsList.splice(index, 1);
        Rubrica.showContacts();
    }
});


//evento modifyContact
let modifyContactBtn = document.querySelector('#modifyContactsBtn');
modifyContactBtn.addEventListener( 'click', ()=>{
    Rubrica.modifyContact(nameInput.value, numberInput.value);

    Rubrica.showContacts();

    nameInput.value = '';
    numberInput.value = '';
});
