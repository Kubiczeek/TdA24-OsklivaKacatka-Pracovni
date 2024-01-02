<script>
  export let redirect;
  export let text;
</script>

<a href={redirect}>{text}</a>

<style>
  a {
    text-decoration: none;
    background: #fecb2e;
    border: none;
    border-radius: 14px;
    color: #333333;
    padding: 0.5rem 2.5rem 0rem 2.5rem;
    width: 100%;
    font-size: 2.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-family: "Lalezar", sans-serif;
    text-align: center;
  }

  a:hover {
    transform: scale(1.01);
  }
</style>
