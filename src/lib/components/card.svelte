<script>
  import Tag from "./tag.svelte";

  export let title_before;
  export let title_after;
  export let first_name;
  export let middle_name;
  export let last_name;
  export let picture_url;
  export let money;
  export let place;
  export let claim;
  export let tags;
  export let uuid;
</script>

<div class="card">
  <a href={"/lecturer/" + uuid} class="img-container">
    <img src={picture_url} alt="" />
    <div class="img-overlay">
      <span
        >{title_before}
        {first_name}
        {middle_name}
        {last_name}
        {title_after}</span
      >
    </div>
  </a>
  <p class="claim color-darkblue">
    {claim}
  </p>
  <div class="sections">
    <div class="money">
      <p class="subheader color-black">ohodnocení</p>
      <p class="description">{money} Kč/h</p>
    </div>
    <div class="place">
      <p class="subheader">lokalita</p>
      <p class="description">{place}</p>
    </div>
  </div>
  <div class="tags">
    {#each tags as tag}
      <Tag
        small={true}
        text={"#" + tag.name.toLowerCase()}
        backgroundColor="#74C7D3"
      />
    {/each}
  </div>
</div>

<style>
  p {
    margin: 0;
    padding: 0;
  }

  .claim {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 700;
  }

  .subheader {
    font-family: "Lalezar", sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1;
  }

  .place,
  .money {
    display: flex;
    flex-direction: column;
  }

  .color-darkblue {
    color: #00384d;
  }

  .color-black {
    color: #333;
  }

  .sections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .card {
    width: 100%;
    height: auto;
    box-shadow: 0px 4px 250px 0px rgba(116, 199, 211, 0.15);
    padding: 1rem;
    border-radius: 1rem;
    display: grid;
    gap: 0.5rem;
    flex: 0 0 auto;
  }

  .img-container {
    position: relative;
    width: 100%;
    height: auto;
  }

  .img-container > img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 7px;
  }

  .img-overlay {
    font-family: "Lalezar", sans-serif;
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.3rem 1rem 0 1rem;
    line-height: 1.3;
    background-color: #333;
    mix-blend-mode: hard-light;
    border-radius: 0 0 7px 7px;
  }

  .img-overlay > span {
    word-wrap: break-word;
    font-size: 2rem;
    mix-blend-mode: normal;
    color: #fff;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
  }

  @media (max-width: 600px) {
    .img-overlay > span {
      font-size: 1.5rem;
    }
    .img-container {
      min-width: 280px;
    }
  }
</style>
