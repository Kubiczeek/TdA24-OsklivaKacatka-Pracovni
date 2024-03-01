<script>
  import { page } from "$app/stores";
  import { pushState, replaceState } from "$app/navigation";
  import { refresh } from "$lib/assets/images.js";
  import Search from "$lib/components/search.svelte";
  import Filter from "$lib/components/filter.svelte";
  import Lecturer from "$lib/components/lecturer.svelte";
  import { onMount } from "svelte";

  export let data; // data fetched from api, data.data and data.tags
  const tags = data.tags.map((tag) => tag.name);
  const fujCities = [...new Set(data.data.map((item) => item.location))];
  const uniqueCities = [
    ...new Set(
      [...fujCities].filter((item) => item !== null && item !== undefined)
    ),
  ];

  const minimum = Math.min(
    ...data.data
      .map((item) => {
        if (!item.price_per_hour) return null;
        return item.price_per_hour;
      })
      .filter((x) => x !== null)
  );

  const maximum = Math.max(
    ...data.data
      .map((item) => {
        if (!item.price_per_hour) return null;
        return item.price_per_hour;
      })
      .filter((x) => x !== null)
  );

  let showedFilters = [];
  $: pageNum = Number($page.url.searchParams.get("page")) || 1;

  function reset() {
    showedFilters = [];
    data.data.forEach((item) => {
      showedFilters = [...showedFilters, item];
    });
  }

  function onRefresh() {
    $page.url.searchParams.delete("search");
    pushState($page.url);
  }

  function onFilter() {
    reset();
    let [min, max] = (
      $page.url.searchParams.get("limit")?.split("--") || [minimum, maximum]
    ).map((x) => parseInt(x));
    if (min === -1) min = minimum;
    if (max === -1) max = maximum;
    const city = uniqueCities[$page.url.searchParams.get("city")] || null;
    const tagIndex = $page.url.searchParams.get("tags")?.split(",") || [];
    const pageNum = $page.url.searchParams.get("page") || 1;
    const tagsFiltered = tagIndex.map((index) => tags[index]);
    const search = $page.url.searchParams.get("search") || null;
    showedFilters = showedFilters.filter((item) => {
      if (min > item.price_per_hour || max < item.price_per_hour) return false;
      if (city && city !== item.location) return false;
      if (tagsFiltered.length > 0) {
        const newTags = item.tags.map((tag) => tag.name);
        const allTagsExist = tagsFiltered.every((tag) => newTags.includes(tag));
        if (!allTagsExist) return false;
      }
      if (search) {
        const searchIn =
          item.title_before +
          " " +
          item.first_name +
          " " +
          item.middle_name +
          " " +
          item.last_name +
          " " +
          item.title_after +
          " " +
          item.tags.map((tag) => tag.name).join(" ") +
          " " +
          item.location +
          " " +
          item.description +
          " " +
          item.price_per_hour;
        return searchIn.toLowerCase().includes(search.toLowerCase());
      }
      return true;
    });
  }

  function increasePage() {
    const pageNum = $page.url.searchParams.get("page") || 1;
    if (pageNum >= Math.ceil(showedFilters.length / 5)) return;
    $page.url.searchParams.set("page", parseInt(pageNum) + 1);
    pushState($page.url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function decreasePage() {
    const pageNum = $page.url.searchParams.get("page") || 1;
    if (pageNum <= 1) return;
    $page.url.searchParams.set("page", parseInt(pageNum) - 1);
    pushState($page.url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setPage(pageNum) {
    if (pageNum >= 1 && pageNum <= Math.ceil(showedFilters.length / 5)) {
      $page.url.searchParams.set("page", pageNum);
      pushState($page.url);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  $: page.subscribe(onFilter);
  onFilter();
</script>

<div class="wrapper">
  <p class="page-nav"><a href="/">Hlavní stránka</a> > Seznam lektorů</p>
  <div class="search-bar">
    <button on:click={() => onRefresh()}>
      <img src={refresh} alt="refresh" />
    </button>
    <Search />
  </div>
  <Filter
    MINIMUM={minimum}
    MAXIMUM={maximum}
    tagsArray={tags}
    cities={uniqueCities}
    length={showedFilters.length}
  />
  <div class="container">
    {#each showedFilters.slice((pageNum - 1) * 5, pageNum * 5) as item (item.uuid)}
      <Lecturer data={item} />
    {/each}
  </div>
  <div class="pagination">
    <button class="left-arrow" on:click={() => decreasePage()}>&lt;</button>
    {#each Array(Math.ceil(showedFilters.length / 5)) as _, i}
      <button
        on:click={() => setPage(i + 1)}
        class={i + 1 == ($page.url.searchParams.get("page") || 1)
          ? "active"
          : ""}>{i + 1}</button
      >
    {/each}
    <button class="right-arrow" on:click={() => increasePage()}>&gt;</button>
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
    margin-bottom: 10rem;
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

  .pagination {
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .pagination button {
    font-size: 1.2rem;
    font-weight: 400;
    transition: color 0.3s;
  }

  .pagination .active {
    color: #fecb2e;
    font-size: 1.25rem;
    text-decoration: underline;
  }

  .pagination .right-arrow,
  .pagination .left-arrow {
    border-radius: 4px;
    background-color: #fecb2e;
    width: 30px;
    height: 30px;
    font-weight: 400;
    text-align: center;
  }
</style>
