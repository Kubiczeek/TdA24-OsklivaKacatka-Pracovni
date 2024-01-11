<script>
  import { page } from "$app/stores";
  import { pushState } from "$app/navigation";
  import Navigation from "$lib/components/navigation.svelte";
  import Card from "$lib/components/card.svelte";
  import Filter from "$lib/components/filter.svelte";
  import { talk } from "$lib/assets/images.js";

  function showFilter() {
    pushState("", {
      showFilter: true,
    });
  }
</script>

{#if $page.state.showFilter}
  <Filter />
{/if}
<Filter />
<Navigation
  icon={talk}
  pageName="Naši učitelé"
  color="#00384d"
  ref="lightblue"
  czechSymbols={true}
/>
<div class="main">
  <div class="container">
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </div>
</div>
<button class="pos-fixed bg-lightblue btn-filter" on:click={showFilter}
  >Filtr vyhledávání</button
>
<p class="page-name-rotated">Učitelé</p>

<style>
  .btn-filter {
    width: 270px;
    height: 48px;
    border-radius: 14px;
    border: none;
    outline: none;
    color: white;
    font-family: "Lalezar", sans-serif;
    font-size: 2rem;
    padding-top: 2px;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: background-color 0.25s ease-in-out;
    box-shadow: 0px 0px 40px 0px rgba(0, 56, 77, 0.2);
    z-index: 10;
  }

  .page-name-rotated {
    font-family: "Lalezar", sans-serif;
    font-size: 13.333rem;
    color: rgba(116, 199, 211, 0.1);
    transform: rotate(-90deg);
    position: fixed;
    bottom: 110px;
    right: -250px;
    z-index: -1;
    transition: opacity 0.25s ease-in-out;
    line-height: 0;
  }

  @media (max-width: 1540px) {
    .page-name-rotated {
      opacity: 0;
    }
  }

  .main {
    margin-top: 5rem;
    display: grid;
    width: 100%;
    height: calc(100vh - 5rem);
    align-items: center;
    justify-items: center;
    font-family: "Open Sans", sans-serif;
    overflow-y: auto;
    padding-bottom: 100px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 2rem;
    width: min(95%, 1200px);
  }

  @media (max-width: 910px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      width: min(95%, 700px);
    }
  }

  @media (max-width: 600px) {
    .main {
      margin-top: 4rem;
    }

    .container {
      display: flex;
      flex-direction: row;
      width: min(95%, 320px);
      min-height: 550px;
      overflow-x: auto;
    }
  }

  .bg-lightblue {
    background-color: #74c7d3;
  }

  .color-lightblue {
    color: rgb(116, 199, 211);
  }

  .color-black {
    color: #333333;
  }

  .pos-fixed {
    position: fixed;
  }
</style>
