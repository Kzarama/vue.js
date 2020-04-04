const app = new Vue({
    el:'#app',
    data:{
        titulo:'Hola mundo con Vue',
        //array
        frutas:['Manzana', 'Pera', 'Platano'],
        //objeto
        perros:[
            {nombre:'Mia', raza:'Labrador'},
            {nombre:'Toby', raza:'none'},
            {nombre:'Dante', raza:'Husky siberiano'}
        ]
    }
}) 