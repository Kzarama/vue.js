const app = new Vue({
    el:'#app',
    data:{
        titulo:'Hola mundo con Vue',
        //array
        frutas:['Manzana', 'Pera', 'Platano'],
        //objeto
        perros:[
            {nombre:'Mia', edad:1, raza:'Labrador'},
            {nombre:'Toby', edad:2, raza:'none'},
            {nombre:'Dante', edad:5, raza:'Husky siberiano'}
        ],
        nuevoPerro:'',
        nuevaRaza:'',
        edadPerro:'',
        total:0
    },
    methods:{
        agregarPerro() {
            this.perros.push({
                nombre:this.nuevoPerro,
                edad:this.edadPerro,
                raza:this.nuevaRaza
            })
            this.nuevoPerro = '';
            this.edadPerro = '';
            this.nuevaRaza = '';
        }
    },
    computed:{
        sumarEdades(){
            this.total = 0;
            for(perro of this.perros){
                this.total = this.total + perro.edad;
            }
            return this.total;
        }
    }
}) 