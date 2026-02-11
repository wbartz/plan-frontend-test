# Teste Frontend Plan Marketing

Deploy disponível no link: **[plan-frontend-test](https://plan-frontend-test-mocha.vercel.app/)**

## Como executar local

```
npm install
npm run dev
```

## Bibliotecas

* **[class-variance-authority](https://cva.style/docs)** - Usado para definir variações para os componentes de forma mais organizada
* **[clsx](https://www.npmjs.com/package/clsx)** - Para facilitar o uso condicional de classes nos componentes
* **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)** - Facilita o merge entre classes tailwind e evitar conflitos entre elas.
* **[base-ui](https://base-ui.com/)** - Facilita a criação de componentes.
* **[@yusifaliyevpro/countries](https://github.com/yusifaliyevpro/countries)** - Wrapper da API restcountries com tipagem para Typescript
* **[nuqs](https://nuqs.dev/)** - Para gerenciar o estado através da URL, isso permite que ao atualizar a página seja mantido exatamente o estado atual da busca
* **[zustand](https://zustand-demo.pmnd.rs/)** - Para gerenciar o estado global, como a API não tem a opção de paginação, optei por buscar os dados apenas uma vez e realizar todos filtros no store do zustand.
