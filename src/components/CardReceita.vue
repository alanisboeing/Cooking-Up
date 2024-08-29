<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';

export default {
    props:{
        receita: { type: Object as PropType<ICategoria>, required: true}
    }
}
</script>

<template>
    <article class="receita">
        <header class="receita__cabecalho">
            <img :src="`/public/imagens/receitas/${receita.imagem}`" 
            alt="" class="receita__imagem">

            <h2 class="paragrafo receita__nome">
                {{ receita.nome }}
            </h2>
        </header>
    </article>
</template>

<style scoped>
.receita {
  width: 260px;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 246px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.receita__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.receita__imagem {
    height: 150px;
    width: 260px;
    flex-shrink: 0;
    align-self: stretch;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
}

.receita__nome {
  text-align: center;
  padding: 2em 0em;
  font-size: 1.2rem;
}

.receita__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

</style>