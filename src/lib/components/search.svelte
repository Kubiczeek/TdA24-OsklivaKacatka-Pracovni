<script>
  import { magnifier } from "$lib/assets/images.js";
</script>

<div class="search">
  <input type="text" placeholder="Vyhledat" />
  <button><img src={magnifier} alt="magnifier" /></button>
</div>

<style>
  .search {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0.75rem 0;
    font-size: 1.2rem;
    padding: 0.667rem 0.667rem;
    border-radius: 7px;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    -moz-box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(51, 51, 51, 0.06);
  }

  .search > input {
    font-size: 1.1rem;
    width: 100%;
    color: #333;
  }

  .search > input::placeholder {
    font-size: 1.1rem;
    color: rgba(51, 51, 51, 0.41);
  }
</style>
