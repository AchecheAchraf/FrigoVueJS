<script setup>
import { onMounted,reactive } from "vue";

// -- les 2 sous composants utilisés
//import ToDoListItem from "./ToDoListItem.vue";
//import ToDoForm from "./ToDoForm.vue";

// -- la classe Chose
import Produit from "../Produit";

// -- la liste des choses --> dans le state
// --> donnée réactive = l'affichage sera actualisée
//      automatiquement à chque cght dans la liste
const listeProduits = reactive([]);
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/2/produits";

function getProduits(){
    fetch(url)
    .then((response) => {
        console.log(response.json)
      return response.json(); // -- extraire les données au format JSON
    })
    .then((dataJSON) => {
      console.log(dataJSON)
      let produits = dataJSON
      listeProduits.splice(0,listeProduits.length);
      for (let ch of produits){
        listeProduits.push(new Produit(ch.id,ch.nom,ch.qte,ch.photo))
      }
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });    
}
//onMounted(() => {getProduits()})
</script>
<template>
    <ul>
        <li v-for="(produit, index) of listeC" :key="produit.id">
          {{ getProduits() }}
        <p>{{ produit.id+" "+produit.nom+" "+ index }}</p>
        </li>
    </ul>
</template>
