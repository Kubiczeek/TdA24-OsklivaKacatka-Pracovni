<script>
  import Tag from "$lib/components/tag.svelte";
</script>

<div class="card">
  <div class="img-profile">
    <img
      src="https://nova-ott-images-tn.ssl.cdn.cra.cz/r1200x/8391bc4b-1b3c-4803-ba80-dc37e35ab39b.jpg"
      alt="profile"
    />
  </div>
  <div class="info">
    <div class="head">
      <p class="name ff-Lalezar">Mgr. Petra Swil Plachá MBA</p>
      <p class="claim">
        Aktivní studentka / Předsedkyně spolku / Projektová manažerka
      </p>
    </div>
    <div class="changeable">
      <p class="place-text">
        Lokalita: <span class="place">Havlíčkův Brod, Online</span>
      </p>
      <p class="price-text">
        Cena: <span class="price">700</span>
        <span class="price-small">kč/h</span>
      </p>
    </div>
    <div class="tags">
      <Tag text="Matematika" click={false} />
      <Tag text="Matematika" click={false} />
      <Tag text="Matematika" click={false} />
      <Tag text="Matematika" click={false} />
      <Tag text="Matematika" click={false} />
      <Tag text="Matematika" click={false} />
      <Tag text="Matematika" click={false} />
      <Tag text="Matematika" click={false} />
      <Tag text="Matematika" click={false} />
      <Tag text="Matematika" click={false} />
    </div>
    <p class="about">
      Baví mě organizovat věci. Ať už to bylo vyvíjení mobilních aplikací ve
      Futured, pořádání konferencí, spolupráce na soutěžích Prezentiáda,
      pIšQworky, Tour de App a Středoškolák roku, nebo třeba dobrovolnictví,
      vždycky jsem skončila u projektového...
    </p>
  </div>
</div>

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
