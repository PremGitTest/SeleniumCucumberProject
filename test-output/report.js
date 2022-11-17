$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/login.feature");
formatter.feature({
  "name": "login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "validate login and logout functionality with valid user credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ibm_sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDescription.launchApp()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user open app \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDescription.user_open_app(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.user_click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDescription.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Logout link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDescription.user_click_on_Logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDescription.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validate login and logout functionality with more user credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ibm_sanity"
    }
  ]
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user open app \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter email as \"\u003cemail\u003e\" and password as \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "name": "page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "pass"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin123123@yourstore.com",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate login and logout functionality with more user credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ibm_sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDescription.launchApp()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user open app \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDescription.user_open_app(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.user_click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDescription.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Logout link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDescription.user_click_on_Logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDescription.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate login and logout functionality with more user credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ibm_sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDescription.launchApp()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user open app \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDescription.user_open_app(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"admin123123@yourstore.com\" and password as \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.user_click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDescription.page_Title_should_be(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard / nopCommerce administratio]n\u003e but was:\u003c[Your store. Logi]n\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat pages.LoginPage.verifyApplicationTitle(LoginPage.java:109)\r\n\tat steps.StepDescription.page_Title_should_be(StepDescription.java:141)\r\n\tat ✽.page Title should be \"Dashboard / nopCommerce administration\"(file:Features/login.feature:22)\r\n",
  "status": "failed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Logout link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDescription.user_click_on_Logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDescription.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:Features/login_tags.feature");
formatter.feature({
  "name": "login_tags functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "validate login and logout functionality with valid user credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ibm_sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDescription.launchApp()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user open app \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDescription.user_open_app(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.user_click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDescription.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Logout link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDescription.user_click_on_Logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDescription.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDescription.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});