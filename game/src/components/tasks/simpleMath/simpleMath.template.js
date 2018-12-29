export default `
<section id="taskSimpleMath" class="tasks-dialog simple-math">
  <form class="tasks-dialog-form">
  <h1>Solve this simple task</h1>
  <div class="task-simple-math-wrapper">
    <label class="expression">
      <p class="simple-math-oper operand1"></p>
      <p class="simple-math-oper operator"></p>
      <p class="simple-math-oper operand2"></p>
      <p class="simple-math-oper equals">=</p>
      <input type="text" class="tasks-dialog-answer" required="" maxlength="15" pattern="[0-9]+">
    </label>
    <input type="submit" class="submit-button" value="->">
  </div>
  </form>
</section>
`;
