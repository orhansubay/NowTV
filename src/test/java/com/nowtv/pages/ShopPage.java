package com.nowtv.pages;

import com.nowtv.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ShopPage<cinemaRemoveButtonList> {
    public ShopPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//button[contains(@aria-label,'Add Cinema')]")
    public WebElement cinemaAddButton;

    @FindBy(xpath = "//button[contains(@aria-label,'Add Cinema')]")
    public List<WebElement> cinemaAddButtonList;

    @FindBy(xpath = "//button[contains(text(),'Checkout')]")
    public WebElement checkoutButton;

}
