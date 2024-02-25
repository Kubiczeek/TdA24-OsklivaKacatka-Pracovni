<script>
  import { place, phone, money, email } from "$lib/assets/images.js";
  import Tag from "$lib/components/Tag.svelte";
</script>

<div class="wrapper">
  <p class="page-nav">
    <a href="/">Hlavní stránka</a> &gt; <a href="/">Seznam lektorů</a> &gt; Jakub
  </p>
  <div class="container">
    <div class="top-info">
      <div class="user-img">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="https://via.placeholder.com/300" alt="Profile picture" />
      </div>
      <div class="info">
        <p class="ff-Lalezar name">Mgr. Petra Swil Plachá MBA</p>
        <p class="claim">
          Aktivní studentka / Předsedkyně spolku / Projektová manažerka
        </p>
        <div class="place-money">
          <div class="place">
            <img src={place} alt="" />
            <span>Havlíčkův Brod</span>
          </div>
          <div class="money">
            <img src={money} alt="" />
            <span>700</span> <span class="small-text">kč/h</span>
          </div>
        </div>
        <div class="phone">
          <img src={phone} alt="" />
          <span
            ><span class="small-text">+420</span> <span>730 815 832</span></span
          >
        </div>
        <div class="email">
          <div class="email-img"><img src={email} alt="" /></div>
          <div class="email-list">
            <a href="mailto:" class="email-address">placha@scg.cz</a>
            <a href="mailto:" class="email-address">predseda@scg.cz</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bio-tags">
      <div class="bio-container">
        <p class="ff-Lalezar header small-text">Autobiografie</p>
        <p class="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          facilis eaque id velit veritatis, aspernatur reiciendis officia
          aliquam optio earum dolorum fuga ex, porro quis ab. Cumque quidem unde
          nesciunt, cum excepturi voluptates optio corrupti magni dolorum ullam.
        </p>
      </div>
      <div class="tags">
        <Tag text="Předsedkyně" click={false} />
        <Tag text="Předsedkyně" click={false} />
        <Tag text="Předsedkyně" click={false} />
        <Tag text="Předsedkyně" click={false} />
        <Tag text="Předsedkyně" click={false} />
        <Tag text="Předsedkyně" click={false} />
        <Tag text="Předsedkyně" click={false} />
        <Tag text="Předsedkyně" click={false} />
        <Tag text="Předsedkyně" click={false} />
        <Tag text="Předsedkyně" click={false} />
      </div>
    </div>
  </div>
  <button class="reserve">Rezervovat termín</button>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    min-height: 90vh;
    width: min(95%, 800px);
    margin: 0 auto;
    padding: 2rem 0;
  }

  .page-nav {
    font-size: 1rem;
    align-self: flex-start;
    margin: 2rem 0;
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
    align-items: center;
    gap: 10px;
    padding: 1rem;
    width: 100%;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
  }

  .top-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }

  .user-img {
    width: 280px;
  }

  .user-img > img {
    border-radius: 7px;
    width: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: auto;
  }

  .name {
    font-size: 2.4rem;
    line-height: 30px;
  }

  .claim {
    font-size: 1.066rem;
    color: #74c7d3;
    font-weight: 700;
  }

  .place-money {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }

  .place,
  .money {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    width: 100%;
  }

  .place span,
  .money span {
    font-size: 1.133rem;
    font-weight: 700;
  }

  .money > .small-text,
  .small-text {
    font-size: 0.933rem;
    font-weight: 400;
  }

  .phone {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    font-size: 1.133rem;
    font-weight: 700;
  }

  .email {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .email-img > img {
    width: 18px;
  }

  .email-list {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto;
    grid-auto-flow: column;
    width: 100%;
    column-gap: 1rem;
  }

  .email-list a {
    font-size: 1.133rem;
    font-weight: 700;
  }

  .bio-tags {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .bio {
    font-size: 0.95rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    width: 100%;
    justify-content: flex-start;
  }

  .reserve {
    background-color: #fecb2e;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    padding: 0.5rem;
    align-self: flex-start;
    width: fit-content;
  }

  @media screen and (max-width: 650px) {
    .top-info {
      flex-direction: column;
      gap: 20px;
    }
    .place-money {
      flex-direction: column;
      gap: 10px;
    }

    .user-img {
      align-self: center;
    }
  }
</style>
