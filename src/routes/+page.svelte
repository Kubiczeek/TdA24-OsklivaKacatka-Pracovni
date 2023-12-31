<script>
  import { onMount, afterUpdate } from "svelte";

  let cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let container;
  let center;
  let GAP = 50;

  function handleScroll() {
    setTimeout(resetCardSizes, 10);

    const firstCard = container.firstChild;
    const lastCard = container.lastChild;

    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      container.scrollLeft -= firstCard.offsetWidth + GAP;
      container.appendChild(firstCard);
    } else if (container.scrollLeft === 0) {
      container.scrollLeft += lastCard.offsetWidth + GAP;
      container.insertBefore(lastCard, firstCard);
    }
  }

  function adjustCardSizes() {
    const cards = container.children;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardCenter =
        card.offsetLeft - container.scrollLeft + card.offsetWidth / 2;
      const distanceFromCenter = Math.abs(center - cardCenter);
      const scale = Math.max(0.9, 1.4 - distanceFromCenter / 1000);
      card.style.transform = `scale(${scale})`;
      card.style.zIndex = `${Math.round(scale * 1)}`;
    }
  }

  function resetCardSizes() {
    const cards = container.children;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      card.style.transform = `scale(1)`;
    }
  }

  onMount(() => {
    container.addEventListener("scroll", handleScroll);
    container.addEventListener("scrollend", adjustCardSizes);
    window.addEventListener("resize", () => {
      center = window.innerWidth / 2;
      adjustCardSizes();
    });
    center = window.innerWidth / 2;
    setTimeout(adjustCardSizes, 100);
  });

  afterUpdate(() => {
    handleScroll();
  });
</script>

<div class="container" bind:this={container}>
  {#each cards as card}
    <div class="card">{card}</div>
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
    white-space: nowrap;
    gap: 50px;
    height: 100vh;
  }

  .card {
    display: inline-block;
    background-color: #fff;
    border-radius: 5px;
    border: solid 1px #ccc;
    padding: 30px;
    min-width: 80px;
    height: 80px;
    text-align: center;
    transition: transform 0.5s;
  }
</style>
