<script lang="ts">
import { obterReceitas } from '@/http';
import type ICategoria from '@/interfaces/ICategoria';
import CardReceita from './CardReceita.vue';
import BotaoPrincipal from './BotaoPrincipal.vue'
import type { PropType } from 'vue';
import { lista2IncluiLista1 } from '@/operacoes/listas';

export default{
    props: {
    ingredientes: {type: Array as PropType<string[]>, required: true}
    },
    data() {
        return {
            receitasEncontradas: [] as ICategoria[],
        };
    },
    async created() {
        const receitas = await obterReceitas();

        this.receitasEncontradas = receitas.filter((receita)=>{

        
        const possoFazerReceita = lista2IncluiLista1(receita.ingredientes, this.ingredientes);
        return possoFazerReceita
    })
        
    },
    emits:['selecionar-ingredientes'],
    components: { CardReceita, BotaoPrincipal }
}
</script>

<template>
    <section class="mostrar-receitas">
        <h1 class="cabecalho titulo-receitas">Receitas</h1>

        <p class="paragrafo-lg resultado-receitas">Resultados encontrados: {{ receitasEncontradas.length }}</p>
        <p v-if="receitasEncontradas.length" class="paragrafo-lg opcoes-receitas">Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>

        <ul v-if="receitasEncontradas.length" class="receitas">
            <li v-for="receita in receitasEncontradas" :key="receita.nome">
                <CardReceita :receita="receita"/>
            </li>
        </ul>

        <p v-else class="paragrafo sem-receitas">
            <img class="imagem-sem-receita" src="../assets/images/sem-receitas.png" alt="Ícone de pesquisa">
            Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
        </p>

        <BotaoPrincipal class="botao" texto="Editar lista" @click="$emit('selecionar-ingredientes')"/>
    </section>
</template>

<style scoped>
.imagem-sem-receita{
    width: 300px;
    align-self: center;
}
.botao{
    margin-top: 3.5rem;
}
.sem-receitas{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.receitas{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
    justify-content: center;
    margin-top: 2rem;
}
.mostrar-receitas{
    justify-content: center;
    text-align: center;
}
.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}
.resultado-receitas {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 0.5rem;
}

</style>