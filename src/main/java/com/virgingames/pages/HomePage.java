package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//div[@class='option'][2]")
    WebElement acceptCookies;
     @CacheLookup
     @FindBy(xpath = "//body/div[@id='app']/div[@id='styledApp']/div[1]/div[1]/ul[1]/li")
   List<WebElement>   topMenuList;


//    @CacheLookup
//    @FindBy(linkText = "Join Now")
//    WebElement joinNowLink;

    public void iAcceptCookies(){
        log.info("Click On Accept cookies" + acceptCookies.toString());
        clickOnElement(acceptCookies);
    }
    public void clickOnMenuTab(String tab) {
        for (WebElement menu : topMenuList) {
            if (menu.getText().contains(tab)) {
                clickOnElement(menu);
                break;
            }
        }
    }
    public void verifyLiveBlackjackGames(String menu) {
        List<WebElement> list = topMenuList;
        for (WebElement e : list) {
            System.out.println(e.getText());
            if (e.getText().equals(menu)) {
                break;
            }
        }
    }

    }






