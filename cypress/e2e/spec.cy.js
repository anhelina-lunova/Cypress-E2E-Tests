describe("Module 2", () => {
  it("Тест №1", () => {
    cy.LogIn("user888@gmail.com", "1234567890");

    cy.get("#open-navigation-menu-mobile").click();
    cy.get(":nth-child(9) > .css-bve2vl").click();
  });

  it("Тест №2", () => {
    cy.LogIn("testowyqa@qa.team", "QA!automation-1");

    cy.get("#open-navigation-menu-mobile").click();
    cy.get(":nth-child(7) > .css-bve2vl").click();
  });
});
