package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AllGamesPage  extends Utility {
    private static final Logger log = LogManager.getLogger(AllGamesPage.class.getName());
    public AllGamesPage() {
        PageFactory.initElements(driver, this);

    }
    @CacheLookup
    @FindBy(xpath = "//span[@data-tracking='{\"label\":\"All Games\",\"section\":\"Top Nav\",\"mvtVariant\":\"\",\"mvtCampaign\":\"\"}']")
    WebElement allGamesTab;
    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Online Slots']")
    WebElement onlineSlots;

    public void clickOnAllGamesTab(){
        log.info("Click on All Games Tab" + allGamesTab.toString());
        mouseHoverToElementAndClick(allGamesTab);
    }

    public String verifyOnlineSlotsText(){
        String message = getTextFromElement(onlineSlots);
        log.info("Getting text from : " + onlineSlots.toString());
        return message;
    }
}
