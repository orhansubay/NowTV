
**NOWTV WEB AUTOMATION**

# REQUIREMENTS

The project requires the following to run:
 - Java 8 and higher for the build and usage is required.
 - Maven 3.6 and higher.
 - IDE Support
    * Gherkin (IntelliJ Plugin)
    * Cucumber for Java (IntelliJ Plugin)
    
# RUNNING TEST LOCALLY

 To run test with the default configuration, use the **mvn clean verify** command in the terminal. 

 **mvn clean verify -Dtest.environment=qa -Dcucumber.options="--tags @nowtv"**
 
# BROWSER 

We can specify the browser for the tests to run on with the option **-Dbrowser**. 
Accepted values can be found in the Driver class, and are as follows:
~~~~
chrome-headless
chrome
firefox
firefox-headless
ie
edge
safari
~~~~

# REPORTING AND SCREENSHOTS

This framework generates test execution report in HTML file and takes screenshot if get any error.

Once your regression ends "target/cucumber-html-reports/overview-features" folder has been populated 
and right click the html folder then select open browser.

For view embedded images "target/cucumber-html-reports/embeddings"






