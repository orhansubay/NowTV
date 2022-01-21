package com.nowtv.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports"},
        features = "src/test/resources/features/", //Cucumber is invoked on a root directory
        glue = "com/nowtv/step_definitions/", //package name, and the filepath of your feature file
        dryRun = false,
        tags = "@nowtv"
)
public class CukesRunner {
}
