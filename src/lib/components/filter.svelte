<script>
  import Tag from "$lib/components/tag.svelte";
</script>

<div class="filter">
  <div class="filter-top">
    <span>
      <span class="ff-Lalezar header">Filtry</span>
      <span class="showed">Zobrazeno 8 lektorů</span>
    </span>
    <button class="remove-filter">Zrušit aktivní filtry</button>
  </div>
  <div class="filter-bottom">
    <div class="price">
      <div class="low-price">
        <div class="text-input">
          <span class="ff-Lalezar">Min. cena:</span>
          <input type="text" maxlength="4" value="0" />
        </div>
        <input
          type="range"
          value="0"
          min="0"
          max="1000"
          step="100"
          name=""
          id=""
        />
      </div>
      <div class="high-price">
        <div class="text-input">
          <span class="ff-Lalezar">Max. cena:</span>
          <input type="text" maxlength="4" value="5000" />
        </div>
        <input
          type="range"
          min="0"
          value="5000"
          max="10000"
          step="100"
          name=""
          id=""
        />
      </div>
    </div>
    <div class="place">
      <div class="region">
        <span class="ff-Lalezar">Kraj:</span>
        <select name="region" id="">
          <option value="" selected>Žádné</option>
          <option value="">Vysočina</option>
          <option value="">Středočeský</option>
          <option value="">Jihočeský</option>
          <option value="">Plzeňský</option>
          <option value="">Karlovarský</option>
          <option value="">Ústecký</option>
          <option value="">Liberecký</option>
          <option value="">Královéhradecký</option>
        </select>
      </div>
      <div class="city">
        <span class="ff-Lalezar">Město:</span>
        <select name="region" id="">
          <option value="" selected>Žádné</option>
          <option value="">Online</option>
          <option value="">Havlíčkův Brod</option>
          <option value="">Praha</option>
          <option value="">České Budějovice</option>
          <option value="">Plzeň</option>
          <option value="">Karlovy Vary</option>
          <option value="">Ústí nad Labem</option>
          <option value="">Liberec</option>
          <option value="">Hradec Králové</option>
        </select>
      </div>
    </div>
  </div>

  <div class="tags">
    <p class="ff-Lalezar">Dovednosti</p>
    <div class="tags-container">
      <Tag text="Matematika" />
      <Tag text="Matematika" />
      <Tag text="Matematika" />
      <Tag text="Matematika" />
      <Tag text="Matematika" />
      <Tag text="Matematika" />
      <Tag text="Matematika" />
      <Tag text="Matematika" />
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

  .city,
  .region {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 5px;
    width: 100%;
  }

  .city > span,
  .region > span {
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

    .region,
    .city {
      flex-direction: column;
      align-items: flex-start;
    }

    .filter {
      gap: 1rem;
    }
  }
</style>
