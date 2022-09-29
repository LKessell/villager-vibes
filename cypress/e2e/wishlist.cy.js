describe("Wishlist user flows", () => {
  beforeEach(() => {
    cy.fixture("sampleVillagers").then((villagersData) => {
      cy.intercept("https://acnhapi.com/v1a/villagers/", villagersData);
    });
    cy.visit("http://localhost:3000/");
  });

  it("Should show a message if the wishlist is empty", () => {
    cy.get(".nav-wishlist").click();
    cy.contains("You haven't added any villagers yet!");
  });

  it("Should be able to add multiple villagers to the wishlist", () => {
    cy.get("#155").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#140").click();
    cy.get(".add-wishlist-btn").click();
    cy.contains("The Top 10");
    cy.get("#155").should("be.visible");
    cy.get("#140").should("be.visible");
    cy.get("#384").should("not.exist");
  });

  it("Cannot add duplicate villagers", () => {
    cy.get("#155").click();
    cy.get(".add-wishlist-btn").click();
    cy.get("#155").should("be.visible");
    cy.get(".nav-home").click();
    cy.get("#155").click();
    cy.get(".add-wishlist-btn").should("have.class", "add-disabled");
    cy.get("p").contains("already on your wishlist");
  });

  it("Should save the current wishlist to localStorage", () => {
    expect(localStorage.getItem("villager-wishlist")).to.equal("[]");
    cy.get("#384").click();
    cy.get(".add-wishlist-btn")
      .click()
      .then(() => {
        expect(localStorage.getItem("villager-wishlist")).to.equal(
          '[{"id":384,"file-name":"wol03","name":{"name-USen":"Whitney","name-EUen":"Whitney","name-EUde":"Lupa","name-EUes":"Lupe","name-USes":"Lupe","name-EUfr":"Blanche","name-USfr":"Blanche","name-EUit":"Bianca","name-EUnl":"Whitney","name-CNzh":"毕安卡","name-TWzh":"畢安卡","name-JPja":"ビアンカ","name-KRko":"비앙카","name-EUru":"Уитни"},"personality":"Snooty","birthday-string":"September 17th","birthday":"17/9","species":"Wolf","gender":"Female","subtype":"B","hobby":"Fashion","catch-phrase":"snappy","icon_uri":"https://acnhapi.com/v1/icons/villagers/384","image_uri":"https://acnhapi.com/v1/images/villagers/384","bubble-color":"#bff2ff","text-color":"#85a2af","saying":"Don\'t cry wolf unless you mean it.","catch-translations":{"catch-USen":"snappy","catch-EUen":"snappy","catch-EUde":"jaulll","catch-EUes":"auf-auf","catch-USes":"auf-auf","catch-EUfr":"sbam","catch-USfr":"bing bang","catch-EUit":"snappy","catch-EUnl":"hap","catch-CNzh":"漂亮","catch-TWzh":"漂亮","catch-JPja":"ステキね","catch-KRko":"멋져","catch-EUru":"цап"}}]'
        );
      });
  });

  it("Wishlist nav link is active", () => {
    cy.get("#155").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-wishlist").should("have.class", "active");
  });

  it("Wishlist nav link is functional", () => {
    cy.get(".wishlist-title").should("not.exist");
    cy.get(".nav-wishlist").click();
    cy.get(".wishlist-title").should("be.visible");
  });

  // Note: Cypress currently does not support CSS :hover states
  // The remove button is only visible when hovering over a villager icon
  // https://github.com/cypress-io/cypress/issues/3222

  // it("Should have a remove button for villagers on the wishlist", () => {
  //   cy.get("#140").click();
  //   cy.get(".add-wishlist-btn").click();
  //   cy.get("#rem-140").should("be.visible");
  // });

  it("Can remove a villager from the wishlist by clicking the remove button", () => {
    cy.get("#155").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#140").click();
    cy.get(".add-wishlist-btn").click();
    cy.get("#155").should("be.visible");
    cy.get("#rem-155").click({ force: true });
    cy.get("#155").should("not.exist");
  });

  it("Cannot add more than 10 villagers to the wishlist", () => {
    cy.get("#155").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#162").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#384").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#386").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#140").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#42").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#43").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#45").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#46").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#47").click();
    cy.get(".add-wishlist-btn").click();
    cy.get(".nav-home").click();
    cy.get("#48").click();
    cy.get(".add-wishlist-btn").should("have.class", "add-disabled");
    cy.get("p").contains("Your wishlist is full!");
  });
});
