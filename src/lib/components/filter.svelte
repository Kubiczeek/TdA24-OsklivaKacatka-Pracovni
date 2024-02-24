<script>
  import Tag from "$lib/components/tag.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  export let MINIMUM = 0;
  export let MAXIMUM = 4900;

  const query = $page.url.searchParams;

  let minText, maxText, minSlide, maxSlide, city, region;

  function roundToLower(num, step = 10) {
    return Math.floor(num / step) * step;
  }

  function roundToHigher(num, step = 10) {
    return Math.ceil(num / step) * step;
  }

  export let tagsArray = [
    "Matematika",
    "Dobrovolnictví",
    "Výtvarná výchova",
    "Angličtina",
    "Čeština",
    "Biologie",
    "Chemie",
    "Ekonomie",
    "Geografie",
    "Dějepis",
    "Zeměpis",
  ];

  MINIMUM = roundToLower(MINIMUM, 100);
  MAXIMUM = roundToHigher(MAXIMUM, 100);

  function clearUrlParams() {
    minText.value = MINIMUM;
    maxText.value = MAXIMUM;
    minSlide.value = MINIMUM;
    maxSlide.value = MAXIMUM;
    city.value = "-1";
    region.value = "-1";
    goto(`${$page.url.pathname.toString()}`);
  }

  function updatePriceLimit() {
    const text = `${minText.value == MINIMUM ? "-1" : minText.value}--${
      maxText.value == MAXIMUM ? "-1" : maxText.value
    }`;
    if (text !== "-1---1") {
      query.set("limit", text);
    } else {
      query.delete("limit");
    }
    goto(`${$page.url.pathname.toString()}?${query.toString()}`);
  }

  function updateCity() {
    if (city.value !== "-1") {
      query.set("city", city.value);
    } else {
      query.delete("city");
    }
    goto(`${$page.url.pathname.toString()}?${query.toString()}`);
  }

  function updateTags(index) {
    let tags = query.get("tags")?.split(",") || [];
    if (tags.includes(index.toString())) {
      tags = tags.filter((item) => item !== index.toString());
    } else {
      tags.push(index);
    }
    if (tags.length > 0) {
      query.set("tags", tags.join(","));
    } else {
      query.delete("tags");
    }
    goto(`${$page.url.pathname.toString()}?${query.toString()}`);
  }

  onMount(() => {
    minText.value = query.get("min") || MINIMUM;
    maxText.value = query.get("max") || MAXIMUM;
    minSlide.value = query.get("min") || MINIMUM;
    maxSlide.value = query.get("max") || MAXIMUM;
  });
</script>

<div class="filter">
  <div class="filter-top">
    <span>
      <span class="ff-Lalezar header">Filtry</span>
      <span class="showed">Zobrazeno 8 lektorů</span>
    </span>
    <button class="remove-filter" on:click={() => clearUrlParams()}
      >Zrušit aktivní filtry</button
    >
  </div>
  <div class="filter-bottom">
    <div class="price">
      <div class="low-price">
        <div class="text-input">
          <span class="ff-Lalezar">Min. cena:</span>
          <input
            type="text"
            on:change={() => {
              minSlide.value = minText.value;
              if (parseInt(minSlide.value) > parseInt(maxSlide.value)) {
                maxSlide.value = minSlide.value;
                maxText.value = minText.value;
              }
              updatePriceLimit();
            }}
            bind:this={minText}
            value={MINIMUM}
            min={MINIMUM}
            max={MAXIMUM}
          />
        </div>
        <input
          type="range"
          bind:this={minSlide}
          on:input={() => {
            minText.value = minSlide.value;
            if (parseInt(minSlide.value) > parseInt(maxSlide.value)) {
              maxSlide.value = minSlide.value;
              maxText.value = minText.value;
            }
          }}
          on:change={() => updatePriceLimit()}
          min={MINIMUM}
          max={MAXIMUM}
          value={MINIMUM}
          step="10"
        />
      </div>
      <div class="high-price">
        <div class="text-input">
          <span class="ff-Lalezar">Max. cena:</span>
          <input
            type="text"
            on:change={() => {
              maxSlide.value = maxText.value;
              if (parseInt(maxSlide.value) < parseInt(minSlide.value)) {
                minSlide.value = maxSlide.value;
                minText.value = maxText.value;
              }
              updatePriceLimit();
            }}
            bind:this={maxText}
            min={MINIMUM}
            max={MAXIMUM}
            value={MAXIMUM}
          />
        </div>
        <input
          type="range"
          bind:this={maxSlide}
          on:input={() => {
            maxText.value = maxSlide.value;
            if (parseInt(maxSlide.value) < parseInt(minSlide.value)) {
              minSlide.value = maxSlide.value;
              minText.value = maxText.value;
            }
          }}
          on:change={() => updatePriceLimit()}
          min={MINIMUM}
          max={MAXIMUM}
          value={MAXIMUM}
          step="10"
        />
      </div>
    </div>
    <div class="place">
      <div class="city">
        <span class="ff-Lalezar">Město:</span>
        <select
          name="city"
          on:change={() => updateCity()}
          bind:this={city}
          id=""
        >
          <option value="-1" selected>Žádné</option>
          <option value="1">Online</option>
          <option value="2">Havlíčkův Brod</option>
          <option value="3">Praha</option>
          <option value="4">České Budějovice</option>
          <option value="5">Plzeň</option>
          <option value="6">Karlovy Vary</option>
          <option value="7">Ústí nad Labem</option>
          <option value="8">Liberec</option>
          <option value="9">Hradec Králové</option>
        </select>
      </div>
    </div>
  </div>

  <div class="tags">
    <p class="ff-Lalezar">Dovednosti</p>
    <div class="tags-container">
      {#each tagsArray as item, i}
        <button on:click={() => updateTags(i)} style="padding: 0; margin: 0;">
          <Tag text={item} index={i} />
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="text"] {
    max-width: 60px;
    text-align: center;
  }

  select {
    appearance: none;
    font-family: "Open Sans", sans-serif;
    border: 2px solid #74c7d3;
    border-radius: 4px;
    font-size: 1rem;
    padding: 0.25rem 0.667rem;
    width: max(70%, 200px);
  }

  select:focus,
  select:active {
    outline: none;
  }

  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
  }

  .filter {
    border-radius: 7px;
    padding: 0.667rem 0.667rem;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .filter-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .filter-top > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .filter-top .header {
    font-size: 1.667rem;
  }

  .filter-top .showed {
    font-size: 1rem;
    color: #b8b8b8;
  }

  .filter-top button {
    color: #b8b8b8;
    font-size: 1rem;
    text-decoration: underline;
  }

  .filter-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .place {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 45%;
    gap: 5px;
  }

  .city {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 5px;
    width: 100%;
  }

  .city > span {
    font-size: 1.2rem;
  }

  .price {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: max(45%, 200px);
  }

  .low-price,
  .high-price {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;
  }

  input[type="range"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    height: auto;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background-color: #74c7d3;
    height: 0.25rem;
    border-radius: 150px;
  }

  input[type="range"]::-moz-range-track {
    background-color: #74c7d3;
    height: 0.4rem;
    border-radius: 150px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: none;
    border: 3px solid #74c7d3;
    border-radius: 50%;
    background-color: #fff;
    margin-top: -6px;
    height: 1rem;
    width: 1rem;
  }

  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: none;
    border: none;
    border-radius: 50%;
    background-color: #74c7d3;
    margin-top: -7px;
    height: 20px;
    width: 20px;
  }

  .text-input {
    display: flex;
    align-items: flex-end;
    align-self: flex-start;
    padding-left: 3px;
    gap: 5px;
  }

  .text-input span {
    font-size: 1.2rem;
    min-width: fit-content;
  }

  .text-input input {
    width: min-content;
    font-size: 1rem;
    border: 2px solid #74c7d3;
    border-radius: 4px;
    font-family: "Open Sans", sans-serif;
    padding: 0.25rem 0.667rem;
  }

  .tags {
    margin-top: 1rem;
  }

  .tags > p {
    font-size: 1.2rem;
  }

  .tags-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
  }

  @media screen and (max-width: 760px) {
    .filter-bottom {
      flex-direction: column;
      gap: 15px;
    }

    .price {
      width: 100%;
    }

    .place {
      width: 100%;
    }

    .city {
      flex-direction: column;
      align-items: flex-start;
    }

    .filter {
      gap: 1rem;
    }
  }
</style>
