<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { replaceState } from "$app/navigation";
  import { close, cog } from "$lib/assets/images.js";
  import { fade, scale } from "svelte/transition";
  import { showModal } from "$lib/stores.js";
  import Select from "svelte-select";

  export let MINIMUM = 0;
  export let MAXIMUM = 1000;
  export let cities;
  export let complexItems;

  const query = $page.url.searchParams;
  /*
    query.get("color");
    query.set("color", "blue");
    console.log($page.url.pathname + $page.url.search);
  */
  let minText, maxText, minSlide, maxSlide, place, tags;

  onMount(() => {
    minText.value = query.get("min") || MINIMUM;
    maxText.value = query.get("max") || MAXIMUM;
    minSlide.value = query.get("min") || MINIMUM;
    maxSlide.value = query.get("max") || MAXIMUM;
  });

  function roundToLower(num, step = 10) {
    return Math.floor(num / step) * step;
  }

  function roundToHigher(num, step = 10) {
    return Math.ceil(num / step) * step;
  }

  MINIMUM = roundToLower(MINIMUM, 100);
  MAXIMUM = roundToHigher(MAXIMUM, 100);

  function filterSubmit() {
    if (minSlide.value != MINIMUM) {
      query.set("min", minSlide.value);
    } else {
      query.delete("min");
    }
    if (maxSlide.value != MAXIMUM) {
      query.set("max", maxSlide.value);
    } else {
      query.delete("max");
    }
    if (place) {
      query.set("place", place.value);
    } else {
      query.delete("place");
    }
    if (tags) {
      const tempTags = [...tags.map((tag) => tag.value)];
      query.set("tags", tempTags.join(","));
    } else {
      query.delete("tags");
    }
    replaceState($page.url.pathname + $page.url.search);
  }
</script>

<div class="overlay" transition:fade={{ duration: 250 }} />
<div class="pos-fixed modal" transition:scale={{ duration: 250, start: 0.5 }}>
  <div class="head">
    <span class="color-lightblue fnt-Lalezar">Filtr vyhledávání</span>
    <button on:click={showModal.hide}>
      <img src={close} alt="close" />
    </button>
  </div>
  <div class="specification">
    <div class="money">
      <div class="left-text">
        <span class="fnt-Lalezar color-black">finanční ohodnocení</span>
        <div class="money-inputs-text">
          <span>
            <span class="fnt-OpenSans color-black">minimální cena</span>
            <input
              on:change={() => {
                minSlide.value = minText.value;
                if (parseInt(minSlide.value) > parseInt(maxSlide.value)) {
                  maxSlide.value = minSlide.value;
                  maxText.value = minText.value;
                }
              }}
              bind:this={minText}
              class="bg-lightblue fnt-OpenSans"
              style="color: white;"
              type="text"
              min={MINIMUM}
              max={MAXIMUM}
              value="500"
            />
          </span>
          <span>
            <span class="fnt-OpenSans color-black">maximální cena</span>
            <input
              on:change={() => {
                maxSlide.value = maxText.value;
                if (parseInt(maxSlide.value) < parseInt(minSlide.value)) {
                  minSlide.value = maxSlide.value;
                  minText.value = maxText.value;
                }
              }}
              bind:this={maxText}
              class="bg-lightblue fnt-OpenSans"
              style="color: white;"
              type="text"
              value="2200"
              min={MINIMUM}
              max={MAXIMUM}
            />
          </span>
        </div>
      </div>
      <div class="right-slide">
        <span class="fnt-Lalezar color-black desktopView"
          >za hodinu v českých korunách</span
        >
        <div class="money-inputs-slide">
          <input
            on:input={() => {
              minText.value = minSlide.value;
              if (parseInt(minSlide.value) > parseInt(maxSlide.value)) {
                maxSlide.value = minSlide.value;
                maxText.value = minText.value;
              }
            }}
            type="range"
            min={MINIMUM}
            max={MAXIMUM}
            step="10"
            value="500"
            bind:this={minSlide}
          />
          <input
            on:input={() => {
              maxText.value = maxSlide.value;
              if (parseInt(maxSlide.value) < parseInt(minSlide.value)) {
                minSlide.value = maxSlide.value;
                minText.value = maxText.value;
              }
            }}
            type="range"
            min={MINIMUM}
            max={MAXIMUM}
            step="10"
            value="2200"
            bind:this={maxSlide}
          />
        </div>
        <span class="fnt-Lalezar color-black mobileView"
          >za hodinu v českých korunách</span
        >
      </div>
    </div>
    <div class="grid">
      <div class="place">
        <span class="fnt-Lalezar color-black">lokalita výuky</span>
        <Select
          items={cities}
          placeholder="Vyberte"
          showChevron={true}
          {place}
          on:change={(e) => (place = e.detail)}
        />
      </div>
      <div class="tags">
        <span class="fnt-Lalezar color-black">aktivity a dosažené pozice</span>
        <Select
          items={complexItems}
          placeholder="Vyberte"
          multiple={true}
          showChevron={true}
          {tags}
          on:change={(e) => (tags = e.detail)}
        />
      </div>
      <div class="cog-wheel">
        <img src={cog} alt="" />
      </div>
    </div>
  </div>
  <button
    class="bg-lightblue btn-filter fnt-Lalezar"
    on:click={() => {
      filterSubmit();
      showModal.hide();
    }}>Filtrovat</button
  >
</div>

<style>
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  button > img {
    max-width: 100%;
  }

  .btn-filter {
    width: min(100%, 270px);
    height: 48px;
    font-size: 1.9rem;
    border-radius: 14px;
    color: white;
    padding-top: 2px;
    cursor: pointer;
    margin-top: 1rem;
    align-self: center;
  }

  .right-slide,
  .left-text {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .grid {
    display: grid;
    grid-template-areas: "place cog-wheel" "tags cog-wheel";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 0.5rem;
    padding-top: 1rem;
  }

  .place {
    grid-area: place;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .tags {
    grid-area: tags;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .place > span,
  .tags > span {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .cog-wheel {
    grid-area: cog-wheel;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cog-wheel > img {
    max-width: 100%;
  }

  .money {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    gap: 0;
    column-gap: 1rem;
  }

  .money-inputs-slide {
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    gap: 0.5rem;
  }

  .money-inputs-slide input[type="range"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
  }

  .money-inputs-slide input[type="range"]::-webkit-slider-runnable-track {
    background-color: rgba(51, 51, 51, 0.1);
    height: 0.4rem;
    border-radius: 150px;
  }

  .money-inputs-slide input[type="range"]::-moz-range-track {
    background-color: rgba(51, 51, 51, 0.1);
    height: 0.4rem;
    border-radius: 150px;
  }

  .money-inputs-slide input[type="range"]::-webkit-slider-thumb {
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

  .money-inputs-slide input[type="range"]::-moz-range-thumb {
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

  .money-inputs-text {
    display: grid;
    font-size: 0.9rem;
    font-weight: 500;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    gap: 0.5rem;
    justify-items: end;
  }

  .money-inputs-text input[type="text"] {
    border: none;
    outline: none;
    border-radius: 7px;
    font-weight: 700;
    width: 4rem;
    font-size: 1rem;
    text-align: center;
  }

  .overlay {
    position: absolute;
    background-color: rgba(116, 198, 211, 0.2);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 50;
  }

  .modal {
    background-color: white;
    z-index: 999;
    border-radius: 14px;
    width: min(90%, 650px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem 1.466rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .head > span {
    font-size: 2rem;
    line-height: 1;
  }

  .head > button {
    align-self: flex-start;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .fnt-Lalezar {
    font-family: "Lalezar", sans-serif;
  }

  .fnt-OpenSans {
    font-family: "Open Sans", sans-serif;
  }

  .mobileView {
    display: none;
  }

  @media (max-width: 500px) {
    .grid {
      grid-template-areas: "place" "tags";
      grid-template-columns: 1fr;
    }
    .cog-wheel {
      display: none;
    }
  }

  @media (max-width: 435px) {
    .money {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 1rem;
    }

    .money-inputs-text {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }

    .money-inputs-slide {
      gap: 2rem;
    }

    .right-slide {
      gap: 1rem;
    }

    .place > span,
    .tags > span {
      font-size: 1rem;
    }

    .specification {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .desktopView {
      display: none;
    }

    .mobileView {
      display: contents;
    }
  }
</style>
