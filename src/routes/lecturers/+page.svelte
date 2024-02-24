<script>
  import { magnifier, refresh } from "$lib/assets/images.js";
  import Search from "$lib/components/search.svelte";
  import Filter from "$lib/components/filter.svelte";
  import Lecturer from "$lib/components/lecturer.svelte";
</script>

<div class="wrapper">
  <p class="page-nav"><a href="/">Hlavní stránka</a> > Seznam lektorů</p>
  <div class="search-bar">
    <button>
      <img src={refresh} alt="refresh" />
    </button>
    <Search />
  </div>
  <Filter />
  <div class="container">
    <Lecturer />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    min-height: 90vh;
    width: min(95%, 850px);
    margin: 0 auto;
    padding: 2rem 0;
  }

  .page-nav {
    font-size: 1rem;
    align-self: flex-start;
  }

  .page-nav a {
    color: #74c7d3;
    text-decoration: underline;
  }

  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 30px;
  }

  .search-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    gap: 10px;
  }

  .search-bar > button {
    border-radius: 7px;
    padding: 0.667rem 0.667rem;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
  }
</style>
