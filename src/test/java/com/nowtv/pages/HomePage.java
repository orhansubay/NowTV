package com.nowtv.pages;

import com.nowtv.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage<cinemaRemoveButtonList> {
    public HomePage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//button[contains(text(), \"I'm OK with that\")]")
    public WebElement popUpOK;

    @FindBy(xpath = "(//div[@data-test-id=\"slider__lazy\"])[2]")
    public WebElement firstNewAndTrending;

    @FindBy(css = ".css-efpe29")
    public WebElement startFreeTrial;

}
