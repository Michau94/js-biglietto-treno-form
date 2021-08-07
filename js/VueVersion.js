console.log(Vue);
const root = new Vue({

    el: '#root',
    data: {
        name: '',
        kmsValue: 10,
        age: [{
            value: 'min',
            name: 'Minorene'
        },
        {
            value: 'maj',
            name: 'Maggiorenne',
        },
        {
            value: 'over65',
            name: 'Over65'
        }],
        selectedAge: 'maj',

        price: null,
        priceRange: '',
        randomCar: 0,
        randomTrain: 0


    },
    methods: {

        calculatePrice() {

            // Var DATI inseriti
            this.kmsValue = parseInt(this.kmsValue);
            console.log('Distanza percorsa: ', this.kmsValue);


            this.price = this.kmsValue * 0.21;
            this.priceRange = 'Tariffa ordinaria';
            this.randomCar = Math.floor(Math.random() * 12) + 1;
            this.randomTrain = Math.floor(Math.random() * (100000 - 90000)) + 90000;



            // se minorenne
            if (this.selectedAge === 'min') {
                this.price *= 0.8;
                this.priceRange = 'Tariffa Minori';
            }

            // se over 65
            if (this.selectedAge === 'over65') {
                this.price *= 0.6;
                this.priceRange = 'Tariffa Senior';
                console.log(this.price);
            }

            //controllo

            this.price = this.price.toFixed(2);

        },

        resetValues() {
            this.name = 'Nome qui';
            this.selectedAge = 'maj'

        }


    }
})
