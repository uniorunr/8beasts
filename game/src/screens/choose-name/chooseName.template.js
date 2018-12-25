export default `
<section id="choosePlayerName" class="choose-player-name">
  <form class="choose-name-form">
  <h1>Hey kid, choose your magic name!</h1>
  <label>magic name:<input type="text" class="player-name" required="" maxlength="15" pattern="[a-zA-Z0-9]+"></label>
  <input type="submit" class="submit-button" value="->"></form>
  <p class="only-english">(only english letters allowed)</p>
  <input type="button" class="close" value="x">
</section>
`;
