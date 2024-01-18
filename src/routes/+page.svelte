<script>
  import { page } from "$app/stores";
  import { showModal } from "$lib/stores.js";
  import Navigation from "$lib/components/navigation.svelte";
  import Card from "$lib/components/card.svelte";
  import Filter from "$lib/components/filter.svelte";
  import { talk } from "$lib/assets/images.js";

  export let data;

  let showedFilters = [];

  function reset() {
    showedFilters = [];
    data.data.forEach((item) => {
      showedFilters = [...showedFilters, item];
    });
  }

  function onFilter(p) {
    const min = $page.url.searchParams.get("min");
    const max = $page.url.searchParams.get("max");
    const place = $page.url.searchParams.get("place");
    let tags = $page.url.searchParams.get("tags");
    if (tags) {
      tags = tags.split(";!;");
    }
    reset();
    showedFilters = showedFilters.filter((item) => {
      if (min) {
        if (item.price_per_hour < parseInt(min)) {
          return false;
        }
      }

      if (max) {
        if (item.price_per_hour > parseInt(max)) {
          return false;
        }
      }

      if (place) {
        if (item.location !== place) {
          return false;
        }
      }

      if (tags) {
        const newTags = item.tags.map((tag) => tag.name);
        let allTagsExist = tags.every((tag) => newTags.includes(tag));

        if (!allTagsExist) {
          return false;
        }
      }

      return true;
    });
  }

  const minimum = Math.min(
    ...data.data.map((item) => {
      return item.price_per_hour;
    })
  );
  const maximum = Math.max(
    ...data.data.map((item) => {
      return item.price_per_hour;
    })
  );
  const tags = data.tags.map((tag) => {
    return tag.name;
  });
  const allPlacesUnique = [
    ...new Set(
      data.data.map((item) => {
        return item.location;
      })
    ),
  ];

  reset();

  $: onFilter($page.url.searchParams);
</script>

{#if $showModal}
  <Filter
    MINIMUM={minimum}
    MAXIMUM={maximum}
    cities={allPlacesUnique}
    complexItems={tags}
  />
{/if}

<Navigation
  icon={talk}
  pageName="Naši učitelé"
  color="#00384d"
  ref="lightblue"
  czechSymbols={true}
/>
<div class="main">
  <div class="container">
    {#each showedFilters as item}
      <span>
        <Card
          title_before={item.title_before}
          title_after={item.title_after}
          first_name={item.first_name}
          middle_name={item.middle_name}
          last_name={item.last_name}
          picture_url={item.picture_url}
          money={item.price_per_hour}
          place={item.location}
          claim={item.claim}
          tags={item.tags}
          uuid={item.uuid}
        />
      </span>
    {/each}
  </div>
</div>
<button class="pos-fixed bg-lightblue btn-filter" on:click={showModal.show}
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
    margin-top: 4rem;
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
    padding-top: 1rem;
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
      margin-top: 3rem;
      width: 95%;
      min-height: 550px;
      overflow-x: auto;
    }
  }

  .bg-lightblue {
    background-color: #74c7d3;
  }

  .pos-fixed {
    position: fixed;
  }
</style>
