package steps;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import pages.LoginPage;
import utility.ConfigRead;

public class BaseClass {

	public WebDriver driver;

	public Logger log;

	public ConfigRead conf;

	// Pages

	public LoginPage lp;

	public LoginPage addCust;

	public LoginPage searchCust;

	public LoginPage menu;

	public void anyMethod() {

	}

}