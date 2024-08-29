export function lista2IncluiLista1(lista1: unknown[], lista2:unknown[]){
    const receitas= lista1.every((itemLista1)=> lista2.includes(itemLista1));
    return receitas
}