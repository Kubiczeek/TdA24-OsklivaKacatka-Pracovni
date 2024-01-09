<script>
  import Navigation from "$lib/components/navigation.svelte";
  import Card from "$lib/components/card.svelte";
  import { talk } from "$lib/assets/images.js";
</script>

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
<p class="page-name-rotated">Učitelé</p>

<style>
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
    background-color: rgba(116, 199, 211, 0.1);
  }

  .bg-darkblue {
    background-color: #00384d;
  }

  .color-darkblue {
    color: #00384d;
  }

  .color-lightblue {
    color: rgb(116, 199, 211);
  }

  .color-black {
    color: #333333;
  }
</style>
