const assert = require("assert")
const { Builder, By } = require("selenium-webdriver")

const baseUrl = "https://www.polimbing.dev"

// Example test case
describe("My Website", function () {
  let driver

  // Set up the WebDriver instance before running the tests
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build()
  })

  // Test case
  it("should navigate to the homepage", async function () {
    await driver.get(baseUrl)
    assert.strictEqual(
      await driver.getTitle(),
      "Pol Imbing",
      "Title does not match"
    )
  })

  it("should click on contact link", async function () {
    // Navigate to a specific page
    await driver.get(baseUrl)

    const linkElement = await driver.findElement(By.css(`a[href="#contact"]`))
    // Perform actions with the <span> element if needed
    // Example: Click the <span> element
    await linkElement.click()

    // Example: Assert that the page URL has changed
    const newUrl = (await driver.getCurrentUrl()).trim()
    const expectedUrl = `${baseUrl}/#contact`.trim()
    console.log("Actual URL:", newUrl)
    console.log("Expected URL:", expectedUrl)

    assert.strictEqual(newUrl, expectedUrl, "Url does not match")
  })

  after(async function () {
    // Close the WebDriver instance
    // await driver.quit()
  })
})
