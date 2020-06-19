<template>
    <div class="les">
        <button v-on:click="pridejStrom">Přidej strom</button>
        <ul>
            <li 
            v-for="strom in mojeStromy"
            v-bind:key="strom.druhStromu"
            > 
            {{ strom.vyskaStromu }} 
            </li>
        </ul>

        <MujStrom v-for="(drevina, index) in mojeStromy"
        v-bind:rod="drevina.rodStromu" 
        v-bind:druh="drevina.druhStromu" 
        v-bind:vyska="drevina.vyskaStromu"
        v-bind:idx="index"
        v-on:vyrust="vyrustOJedna($event)"
        v-bind:key="index"
        /> 
    </div>
</template>

<script>
    import Strom from "./Strom.vue"

    export default {
        name: "Les",
        components: {
            MujStrom: Strom
        },
        methods: {
            pridejStrom() {
                this.mojeStromy.push({
                        rodStromu: "smrk",
                        druhStromu: "ztepilý",
                        vyskaStromu: 6
                    });
            },
            vyrustOJedna(index) {

                this.mojeStromy[index].vyskaStromu++;
            }
        },
        data() {
            return {
                mojeStromy: [
                    {
                        rodStromu: "modřín",
                        druhStromu: "opadavý",
                        vyskaStromu: 8
                    },
                    {
                        rodStromu: "dub",
                        druhStromu: "letní",
                        vyskaStromu: 9
                    },
                    {
                        rodStromu: "lipa",
                        druhStromu: "srdčitá",
                        vyskaStromu: 9
                    }
                ]
            }
        }
       
      
    }
</script>

<style scoped>
    .les {
        display: flex;
        border: 3px solid darkgreen;
        background-color: lightgreen;
        margin: 10px;
    }
</style>