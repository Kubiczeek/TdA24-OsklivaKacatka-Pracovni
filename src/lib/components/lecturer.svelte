<script>
  import Tag from "$lib/components/tag.svelte";
  export let data;
  let {
    bio,
    claim,
    first_name,
    last_name,
    location,
    middle_name,
    picture_url,
    price_per_hour,
    tags,
    uuid,
    title_after,
    title_before,
  } = data;

  function handleError() {
    picture_url =
      "https://i.ibb.co/cvPZj86/depositphotos-247872612-stock-illustration-no-image-available-icon-vector.png";
  }
  picture_url = picture_url
    ? picture_url
    : "https://i.ibb.co/cvPZj86/depositphotos-247872612-stock-illustration-no-image-available-icon-vector.png";
  title_before = title_before ? title_before : "";
  title_after = title_after ? title_after : "";
  price_per_hour = price_per_hour ? price_per_hour : "Dohodou";
  location = location ? location : "Dohodou";
  bio = bio ? bio : "U lektora není uveden žádný popis.";
</script>

<a href={`/lecturer/${uuid}`} class="card">
  <div class="img-profile">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src={picture_url}
      style="font-family: 'Open Sans', sans-serif;"
      alt="Profile picture or placeholder should be here, weird they are not displayed right? Maybe some ghosts are spooking around here 👻👻👻🫣🫣"
      on:error={handleError}
    />
  </div>
  <div class="info">
    <div class="head">
      <p class="name ff-Lalezar">
        {title_before}
        {first_name}
        {middle_name || ""}
        {last_name}
        {title_after}
      </p>
      <p class="claim">
        {claim ? claim : ""}
      </p>
    </div>
    <div class="changeable">
      <p class="place-text">
        Lokalita: <span class="place"
          >{location}{data.online ? ", Online" : ""}</span
        >
      </p>
      <p class="price-text">
        Cena: <span class="price">{price_per_hour}</span>
        <span class="price-small">kč/h</span>
      </p>
    </div>
    <div class="tags">
      {#each tags as tag}
        <Tag text={tag.name} click={false} />
      {/each}
    </div>
    <p class="about">
      {@html bio.length > 258 ? bio.slice(0, 258) + "..." : bio}
    </p>
  </div>
</a>

<style>
  .ff-Lalezar {
    font-family: "Lalezar", sans-serif;
  }

  .card {
    display: flex;
    flex-direction: row;
    gap: 1.667rem;
    width: 100%;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    padding: 1rem;
    border-radius: 7px;
  }

  .img-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    width: 70%;
    height: auto;
  }

  .img-profile > img {
    border-radius: 7px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .name {
    font-size: 2.4rem;
    line-height: 30px;
  }

  .head {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .claim {
    font-size: 1.0667rem;
    color: #74c7d3;
    font-weight: 700;
  }

  .place-text,
  .price-text {
    font-size: 1.2rem;
  }

  .place,
  .price {
    font-weight: 700;
  }

  .price-small {
    font-size: 0.9rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 800px) {
    .about {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .name {
      font-size: 2rem;
      text-align: center;
    }

    .claim {
      font-size: 1rem;
      text-align: center;
    }

    .place-text,
    .price-text {
      font-size: 1rem;
    }

    .card {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    .info {
      flex: 1 0 50%;
    }
  }
</style>
