<script lang="ts">
import Tag from './Tag.vue';

export default{
    components: { Tag },
    props: {
        ingrediente:{type: String, required: true}
    },
    data(){
        return {
            selecionado: false
        }
    },
    methods:{
        aoClicar(){
            this.selecionado = !this.selecionado

            if(this.selecionado) {
                //this.$emit('adicionarIngrediente', this.ingrediente)
                this.$emit('adicionar-ingrediente', this.ingrediente)
            }else{
                this.$emit('remover-ingrediente', this.ingrediente)
            }
        }
    },
    emits: ['adicionar-ingrediente', 'remover-ingrediente']
}
</script>

<template>
    <!-- v-on:click também pode ser escrito @click="" -->
    <button class="ingrediente" v-on:click="aoClicar()"
    :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>

<style scoped>
.ingrediente{
    cursor: pointer;
    font-size: 1em;
}
</style>