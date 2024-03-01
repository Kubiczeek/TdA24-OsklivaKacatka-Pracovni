<script>
  import { place, phone, money, email } from "$lib/assets/images.js";
  import { showModal } from "$lib/stores.js";
  import { Toaster } from "svelte-french-toast";
  import Tag from "$lib/components/tag.svelte";
  import Modal from "$lib/components/modal.svelte";

  export let data;

  let reservation = data.reservation;

  function handleError() {
    picture_url =
      "https://i.ibb.co/cvPZj86/depositphotos-247872612-stock-illustration-no-image-available-icon-vector.png";
  }
</script>

{#if $showModal}
  <Modal {data} {reservation} />
{/if}
<Toaster />
<div class="wrapper">
  <p class="page-nav">
    <a href="/">Hlavní stránka</a> &gt; <a href="/lecturers">Seznam lektorů</a>
    &gt;&MediumSpace;{data.data.title_before || ""}&MediumSpace;{data.data
      .first_name}&MediumSpace;{data.data.middle_name || ""}&MediumSpace;{data
      .data.last_name}&MediumSpace;{data.data.title_after || ""}
  </p>
  <div class="container">
    <div class="top-info">
      <div class="user-img">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={data.data.picture_url ||
            "https://i.ibb.co/cvPZj86/depositphotos-247872612-stock-illustration-no-image-available-icon-vector.png"}
          on:error={handleError}
          alt="Profile picture or placeholder should be here, weird they are not displayed right? Maybe some ghosts are spooking around here 👻👻👻🫣🫣"
        />
      </div>
      <div class="info">
        <p class="ff-Lalezar name">
          {data.data.title_before || ""}
          {data.data.first_name}
          {data.data.middle_name || ""}
          {data.data.last_name}
          {data.data.title_after || ""}
        </p>
        <p class="claim">
          {data.data.claim || ""}
        </p>
        <div class="place-money">
          <div class="place">
            <img src={place} alt="" />
            <span
              >{data.data.location || "Dohodou"}{data.data.online
                ? ", Online"
                : ""}</span
            >
          </div>
          <div class="money">
            <img src={money} alt="" />
            <span>{data.data.price_per_hour || "Dohodou"}</span>
            <span class="small-text">kč/h</span>
          </div>
        </div>
        <div class="phone">
          <img src={phone} alt="" />
          {#each data.data.contact.telephone_numbers as phone_number}
            <span
              ><span class="small-text">{phone_number.split(" ")[0]}</span>
              <span>{phone_number.split(" ").slice(1).join(" ")}</span></span
            >
          {/each}
        </div>
        <div class="email">
          <div class="email-img"><img src={email} alt="" /></div>
          <div class="email-list">
            {#each data.data.contact.emails as email}
              <a href={`mailto:${email}`} class="email-address">{email}</a>
            {/each}
          </div>
        </div>
      </div>
    </div>
    <div class="bio-tags">
      <div class="bio-container">
        <p class="ff-Lalezar header small-text">Autobiografie</p>
        <p class="bio">
          {@html data.data.bio || "Tato osoba zatím nemá vyplněnou biografii."}
        </p>
      </div>
      <div class="tags">
        {#each data.data.tags as tag}
          <Tag text={tag.name} click={false} />
        {/each}
      </div>
    </div>
  </div>
  {#if data.data.active}
    <button class="reserve" on:click={showModal.show}>Rezervovat termín</button>
  {:else}
    <button class="reserve" style="background-color: #FFE8A1" disabled
      >Nelze rezervovat termín</button
    >
  {/if}
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
    margin-top: 3rem;
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
    border-radius: 7px;
    width: 100%;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
  }

  .top-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
  }

  .user-img {
    width: 280px;
  }

  .user-img > img {
    border-radius: 7px;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
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

    .email-list {
      display: flex;
      flex-direction: column;
    }
  }

  img {
    font-family: "Open Sans", sans-serif;
  }
</style>
