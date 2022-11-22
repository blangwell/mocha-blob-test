const getBlobURL = (code, type) => {
  const blob = new Blob([code], { type });
  return URL.createObjectURL(blob);
};

const source = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Mocha Tests</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://unpkg.com/mocha/mocha.css" />
  </head>
  <body>
    <div id="mocha"></div>

    <script src="https://unpkg.com/chai/chai.js"></script>
    <script src="https://unpkg.com/mocha/mocha.js"></script>

    <script class="mocha-init">
      mocha.setup('bdd');
      mocha.checkLeaks();
    </script>
    <script src="script.js"></script>
    <script>
    describe("add(a,b)", () => {
      it("Should return the value of two args added together", () => {
        chai.assert.equal(add(10, 10), 20);
      });
    });
    
    describe("subtract(a,b)", () => {
      it("Should return the result of subracting b from a", () => {
        chai.assert.equal(subtract(50, 10), 40);
      });
    });
    </script>
    <script class="mocha-exec">
      mocha.run();
    </script>
  </body>
</html>
`;

const url = getBlobURL(source, "text/html");

parent.document.querySelector("#test-widget").src = url;
