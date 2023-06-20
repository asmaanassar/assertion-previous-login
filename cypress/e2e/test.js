///<reference types="Cypress"/>
describe('test css selector', () => {
    it('test1', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("ul[id='customer_menu_top'] li a").click()
        cy.get('#accountFrm > fieldset > .btn').click()
        cy.get("button[title='Continue']").click()
        cy.get('#AccountFrm_firstname').type("Asma")
        cy.get('#AccountFrm_lastname').type("Nassar")
        cy.get('#AccountFrm_email').type("aahss2008@yahoo.com")
        cy.get('#AccountFrm_telephone').type("+962788969971")
        cy.get('#AccountFrm_fax').type("0000")
        cy.get('#AccountFrm_company').type("LTUC")
        cy.get('#AccountFrm_address_1').type("Jordan/Amman")
        cy.get('#AccountFrm_address_2').type("Jordan/Irbid")
        cy.get('#AccountFrm_city').type("Irbid")
        cy.get('#AccountFrm_zone_id').then($country => {$country.val("3514")})
        cy.get('#AccountFrm_postcode').type("0000")
        cy.get('#AccountFrm_country_id').then($state => {$state.val("114")})
        cy.get('#AccountFrm_loginname').type("AsmaNassar")
        cy.get('#AccountFrm_password').type("Besan1234")
        cy.get('#AccountFrm_confirm').type("Besan1234")
        cy.get("label[for='AccountFrm_newsletter1']").click()
        cy.get('#AccountFrm_agree').click()
        cy.get('.col-md-2 > .btn').click()
        cy.get("button[data-dismiss='alert']").should("have.text","×")


    });


});