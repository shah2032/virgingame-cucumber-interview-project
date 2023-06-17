package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class OnlineSlotsPage extends Utility {

    private static final Logger log = LogManager.getLogger(OnlineSlotsPage.class.getName());

    public OnlineSlotsPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//span[@data-tracking='{\"label\":\"Online Slots\",\"section\":\"Top Nav\",\"mvtVariant\":\"\",\"mvtCampaign\":\"\"}']")
    WebElement onlineSlotsTab;

    public void clickOnOnlineSlotsTab(){
        log.info("Click On Online Slots Tab" + onlineSlotsTab.toString());
        mouseHoverToElementAndClick(onlineSlotsTab);
    }
}
