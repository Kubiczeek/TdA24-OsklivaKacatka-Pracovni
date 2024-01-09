<script>
  import Tag from "./tag.svelte";
</script>

<div class="card">
  <div class="img-container">
    <img
      src="https://tourdeapp.cz/storage/images/2023_02_25/412ff296a291f021bbb6de10e8d0b94863fa89308843b/big.png.webp"
      alt=""
    />
    <div class="img-overlay"><span>Mgr. Petra Swil Plachá MBA</span></div>
  </div>
  <p class="claim color-darkblue">
    Aktivní studentka / Předsedkyně spolku / Projektová manažerka
  </p>
  <div class="sections">
    <div class="money">
      <p class="subheader color-black">ohodnocení</p>
      <p class="description">1200 Kč/h</p>
    </div>
    <div class="place">
      <p class="subheader">lokalita</p>
      <p class="description">Brno</p>
    </div>
  </div>
  <div class="tags">
    <Tag small={true} text="#dobrovolnictví" backgroundColor="#74C7D3" />
    <Tag small={true} text="#studentské spolky" backgroundColor="#74C7D3" />
    <Tag small={true} text="#efektivní učení" backgroundColor="#74C7D3" />
    <Tag
      small={true}
      text="#prezentační dovednosti"
      backgroundColor="#74C7D3"
    />
    <Tag small={true} text="#mimoškolní aktivity" backgroundColor="#74C7D3" />
    <Tag
      small={true}
      text="#marketing pro neziskové studentské projekty"
      backgroundColor="#74C7D3"
    />
    <Tag
      small={true}
      text="#projektový management, event management"
      backgroundColor="#74C7D3"
    />
    <Tag
      small={true}
      text="#fundraising pro neziskové studentské projekty"
      backgroundColor="#74C7D3"
    />
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
</style>
