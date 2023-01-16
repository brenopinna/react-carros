import carImage from './images/bg.jpg'

export const database = [
   {
      name: 'Quase "O Opala"',
      description: 'Podia ser o carro do Sam e Dean, mas não é.',
      price: 20000,
      image: carImage
   },
   {
      name: 'Van do Scooby Doo',
      description:'Claramente não é uma van.',
      price: 50000,
      image: carImage
   },
   {
      name: 'Barraca de Dogão',
      description: 'Já perdi a criatividade',
      price: 20000,
      image: carImage
   },
   {
      name: 'Canetazulmóvel',
      description: 'Olha se você não me ama então não me compre',
      price: 60000,
      image: carImage
   },
   {
      name: 'Impala do Marshall',
      description: 'SEM COMIDA NO IMPALA.',
      price: 60000,
      image: carImage
   },
   {
      name: 'Freddie o Fusca',
      description: "Carro massa 1982",
      price: 60000,
      image: carImage
   },
   {
      name: 'Linkinpala',
      description: "Um bem irado dos 2000",
      price: 50000,
      image: carImage
   },
   {
      name: 'Carro do Sherek',
      description: "Maneirin anos 90",
      price: 30000,
      image: carImage
   }
]

export const randomCar = () => {
   const index = Math.floor(Math.random() * database.length)
   return database[index];
}

export const allCars = () => {
   return database;
}