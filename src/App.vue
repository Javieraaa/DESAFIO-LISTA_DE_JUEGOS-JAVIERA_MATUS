<template>
  <div class="container">
    <h1>Tienda 32 Bits</h1>
    <p>Lista de videojuegos</p>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in allGames" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ juego.precio }}</td>
          <td>
            <button @click="decrementGamesStock(juego.codigo)"> - </button>
            <button @click="incrementGamesStock(juego.codigo)"> + </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allGames'])
  },
  methods: {
    ...mapActions(['fetchGames', 'incrementGamesStock', 'decrementGamesStock']),
    
    loadGames(){
      this.fetchGames();
    }
  },
  mounted() {
    this.loadGames()
  }
}
</script>

<style>
  #app {
    background: linear-gradient(135deg, #fa5bbd, #dfc2d0);
    display: flex;
    flex-direction: column;
    align-items: center; 
    border-radius: 15px;
    font-family: 'Roboto';
  }

  .container {
    padding: 10rem;
    margin: 5rem;
}

  
  h1, p {
    text-align: center;
  }
  
  table {
    width: 80%; 
    border-collapse: collapse; 
    margin-top: 20px; 
    border: 2px solid #ccc; 
  }
  
  th, td {
    border: 1px solid #ccc; 
    padding: 8px; 
    text-align: center; 
  }
  
  th {
    background-color: #916791; 
  }
  
  tbody tr:nth-child(even) {
    background-color: #ac6998; 
  }
  
  tbody tr:hover {
    background-color: #eca5d1; 
  }
  
  button{
    margin: .1rem;
    width: 1.5rem;
    border: none;
    border-radius: 7px;
    background-color: rgb(255, 199, 243);
  }

</style>
