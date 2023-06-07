const sizes = ["iphone-6", "ipad-2", "macbook-13"];

describe("test what users first see when navigating to web page", () => {
  sizes.forEach((size) => {
    // make assertions on the web page using
    // an array of different viewports
    it(`Should display search bar, pokemon list and pokemon cards on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("http://localhost:5173/");
      //search bar
      cy.get("#search-bar-container").should("be.visible");

      //pokemon list
      cy.get("#pokemon-list-container").should("be.visible");

      //pokemon cards
      cy.get(".pokemon-card").should("be.visible");

      //only display pokemon info on desktop
      if (size == "macbook-13") {
        cy.get("#current-pokemon-empty").should("be.visible");
      } else {
        cy.get("#current-pokemon-empty").should("not.be.visible");
      }
    });
  });
});

describe("test search pokemon name feature", () => {
  sizes.forEach((size) => {
    // make assertions on the web page using
    // an array of different viewports
    it(`Should allow search and display search results on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("http://localhost:5173/");

      //search bar
      cy.get("#search-bar-container").should("be.visible");

      //pokemon list
      cy.get("#pokemon-list-container").should("be.visible");

      //pokemon cards
      cy.get(".pokemon-card").should("be.visible");

      //input search values
      cy.get("#search-input").type("charm");

      //search results
      cy.get(".pokemon-card").contains("charmander");
      cy.get(".pokemon-card").contains("charmeleon");
    });
  });
});

describe("test display pokemon info on clicking pokemon cards", () => {
  sizes.forEach((size) => {
    // make assertions on the web page using
    // an array of different viewports
    it(`Should display pokemon info on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("http://localhost:5173/");

      //pokemon list
      cy.get("#pokemon-list-container").should("be.visible");

      //pokemon cards
      cy.get(".pokemon-card").should("be.visible");

      //click first card
      cy.get('.pokemon-card').first().click()

      //check if pokemon info container is visible
      if(size == "ipad-2"){
        cy.get("#current-pokemon-container").should("not.be.visible");
      }else{
        cy.get("#current-pokemon-container").should("be.visible");
      }
     
      //check if pokemon info container displays data
      cy.get('#current-pokemon-name').contains("bulbasaur");
    });
  });
});
