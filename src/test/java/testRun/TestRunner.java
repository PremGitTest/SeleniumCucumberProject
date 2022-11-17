package testRun;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(

		// features = ".\\Features\\login.feature",
		features = ".\\Features\\",
		glue = "steps",

		monochrome = true, 
		//dryRun = true,
		plugin = { "pretty", "html:test-output" }, 
		//tags = { "@ibm_sanity" }
		tags = { "@sanity" }

)
public class TestRunner {

}
