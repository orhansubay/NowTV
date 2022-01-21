package com.nowtv.step_definitions;

import com.nowtv.pages.CheckoutPage;
import com.nowtv.pages.HomePage;
import com.nowtv.pages.ShopPage;
import com.nowtv.utilities.ConfigurationReader;
import com.nowtv.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class NowTVWebStep {

    HomePage homePage = new HomePage();
    ShopPage shopPage = new ShopPage();
    CheckoutPage checkoutPage = new CheckoutPage();
    JavascriptExecutor js = (JavascriptExecutor) Driver.get();
    WebDriverWait wait = new WebDriverWait(Driver.get(), 10);


    @Given("User is on the home page")
    public void userIsOnTheHomePage() throws InterruptedException {

        //Navigates to https://www.nowtv.com/gb/watch/home
        Driver.get().get(ConfigurationReader.get("url"));

        // explicit wait - to wait for the Menu button to be click-able
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".css-pgr6hh")));

        //Switch by frame name(attribute Id)
        Driver.get().switchTo().frame("sp_message_iframe_456047");

        //Click on 'I'm OK with that
        homePage.popUpOK.click();

        //Switching back to the main window
        Driver.get().switchTo().defaultContent();
    }

    @When("User select the film")
    public void userSelectTheFilm() throws InterruptedException {

        // Click on the first film under New and Trending section
        homePage.firstNewAndTrending.click();
    }

    @And("User click start free trial")
    public void userClickStartFreeTrial() throws InterruptedException {

        //explicit wait - to wait for the Start free trial button to be click-able
        wait.until(ExpectedConditions.elementToBeClickable(homePage.startFreeTrial));

        // Click on the Start free trial button
        homePage.startFreeTrial.click();
    }

    @Then("User add cinema membership")
    public void userAddCinemaMembership() throws InterruptedException {

        //explicit wait - Wait to until seeing Checkout Button
        wait.until(ExpectedConditions.elementToBeClickable(shopPage.checkoutButton));

        //If Cinema Membership is already added, Add button is not available.
        //Instead, Remove button will be seen.
        // If Add button is available, the Array List's size is 1. And then Add button will be clicked.
        // If Add button is not available, Array List's size is ) and no need to click.
        try {
            if (shopPage.cinemaAddButtonList.size() == 1) {
                shopPage.cinemaAddButton.click();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @And("User click checkout")
    public void userClickCheckout() {
        // Click on Checkout button
        shopPage.checkoutButton.click();
    }

    @When("User continues to checkout")
    public void userContinuesToCheckout() {
        //explicit wait
        wait.until(ExpectedConditions.elementToBeClickable(checkoutPage.continueCheckoutButton));

        // Click on Continue to checkout button
        checkoutPage.continueCheckoutButton.click();
    }

    @Then("User should be on the personal details page")
    public void userShouldBeOnThePersonalDetailsPage() throws InterruptedException {
        //explicit wait
        wait.until(ExpectedConditions.elementToBeClickable(checkoutPage.personalDetailsTitle));

        // Assert that Personal Deatils Page displayed.
        Assert.assertTrue(checkoutPage.personalDetailsTitle.isDisplayed());
    }

}

