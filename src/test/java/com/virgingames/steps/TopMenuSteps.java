package com.virgingames.steps;

import com.virgingames.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TopMenuSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @And("^I accept cookies$")
    public void iAcceptCookies() {
        new HomePage().iAcceptCookies();

    }


    @When("^I click on any menu from \"([^\"]*)\"$")
    public void iClickOnAnyMenuFrom(String TopMenuTab) {
        new HomePage().clickOnMenuTab(TopMenuTab);
    }

    @Then("^I navigate to selected menu page \"([^\"]*)\"$")
    public void iNavigateToSelectedMenuPage(String verifyMenu) {
        new HomePage().verifyLiveBlackjackGames(verifyMenu);

    }
}
