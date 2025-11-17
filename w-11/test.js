const { Builder, By, until } = require('selenium-webdriver');
const path = require('path');

(async () => {
  const d = await new Builder().forBrowser('chrome').build();
  try {
    await d.get('file://' + path.join(__dirname, 'index.html').replace(/\\/g, '/'));
    const res = await d.findElement(By.id('result'));
    await d.wait(async () => {
      const text = await res.getText();
      return text !== '0';
    }, 30000);  
    const text = await res.getText();
    console.log(`Validation successful — Result shown: ${text}`);
  } catch (e) {
    console.error('Validation failed:', e);
  } finally {
    setTimeout(() => d.quit(), 2000);
  }  
})();
