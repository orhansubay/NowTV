package com.nowtv.pages;

import com.nowtv.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckoutPage<cinemaRemoveButtonList> {
    public CheckoutPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//a[contains(text(),'Continue to checkout')]")
    public WebElement continueCheckoutButton;

    @FindBy(xpath = " //h2[contains(text(),'Personal details')]")
    public WebElement personalDetailsTitle;

}
