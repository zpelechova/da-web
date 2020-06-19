<template>
    <div class="strom">
            {{ rod }} <br>
            {{ druh }} <br>
            vysoký {{ vyska }} m
            <button v-on:click="stromRoste">Strom roste</button>
    </div>
</template>

<script>
    export default {
        name: "Strom",
        props: [ "druh", "rod", "vyska", "idx"],
        methods: {
            stromRoste() {
                this.$emit("vyrust", this.idx);
            }
        }
    } 
</script>

<style scoped>
    .strom {
        font-size: .8em;
        padding: 5px;
        margin: 8px;
        width: 70px;
        border: 3px solid brown;
        background-color: green;
    }

    button {
        font-size: .8em;
        margin-top: 5px;
        border: 2px solid darkslategrey;
        background-color: goldenrod;
    }
</style>