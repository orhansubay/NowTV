$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/NowTVWeb.feature");
formatter.feature({
  "name": "Picking the membership",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User can successfully add Cinema Membership and checkout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@nowtv"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "NowTVWebStep.userIsOnTheHomePage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d95.0.4638.54)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Gulizars-MacBook-Pro.local\u0027, ip: \u00272a01:4b00:9d46:1c00:f59c:1a11:81aa:cd9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 95.0.4638.54 (d31a821ec901f..., userDataDir: /var/folders/9q/17ycs00d79b...}, goog:chromeOptions: {debuggerAddress: localhost:53399}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 28734c2ab0ebd3e867b9ab75911f84be\n*** Element info: {Using\u003dcss selector, value\u003dframe#sp_message_iframe_456047,iframe#sp_message_iframe_456047}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:881)\n\tat com.nowtv.step_definitions.NowTVWebStep.userIsOnTheHomePage(NowTVWebStep.java:38)\n\tat ✽.User is on the home page(file:src/test/resources/features/NowTVWeb.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "User select the film",
  "keyword": "When "
});
formatter.match({
  "location": "NowTVWebStep.userSelectTheFilm()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click start free trial",
  "keyword": "And "
});
formatter.match({
  "location": "NowTVWebStep.userClickStartFreeTrial()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User add cinema membership",
  "keyword": "Then "
});
formatter.match({
  "location": "NowTVWebStep.userAddCinemaMembership()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click checkout",
  "keyword": "And "
});
formatter.match({
  "location": "NowTVWebStep.userClickCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User continues to checkout",
  "keyword": "When "
});
formatter.match({
  "location": "NowTVWebStep.userContinuesToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be on the personal details page",
  "keyword": "Then "
});
formatter.match({
  "location": "NowTVWebStep.userShouldBeOnThePersonalDetailsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d95.0.4638.54)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Gulizars-MacBook-Pro.local\u0027, ip: \u00272a01:4b00:9d46:1c00:f59c:1a11:81aa:cd9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 95.0.4638.54 (d31a821ec901f..., userDataDir: /var/folders/9q/17ycs00d79b...}, goog:chromeOptions: {debuggerAddress: localhost:53399}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 28734c2ab0ebd3e867b9ab75911f84be\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.nowtv.step_definitions.Hooks.tearDown(Hooks.java:32)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\n",
  "status": "failed"
});
});