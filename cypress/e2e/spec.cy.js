describe("Module 2", () => {
  it("Тест №1", () => {
    // cy.visit("https://www.edu.goit.global/account/login");
    // cy.get("#user_email").type("user888@gmail.com");
    // cy.get("#user_password").type("1234567890");
    // cy.get("[type=submit]").click();

    // cy.get("#open-navigation-menu-mobile").click();
    // cy.get(":nth-child(9) > .css-bve2vl").click();
    cy.LogIn_Out(
      "user888@gmail.com",
      "1234567890",
      ":nth-child(9) > .css-bve2vl"
    );
  });

  it("Тест №2", () => {
    // cy.visit("https://www.edu.goit.global/account/login");
    // cy.get("#user_email").type("testowyqa@qa.team");
    // cy.get("#user_password").type("QA!automation-1");
    // cy.get("[type=submit]").click();

    // cy.get("#open-navigation-menu-mobile").click();
    // cy.get(":nth-child(7) > .css-bve2vl").click();
    cy.LogIn_Out(
      "testowyqa@qa.team",
      "QA!automation-1",
      ":nth-child(7) > .css-bve2vl"
    );
  });
});
