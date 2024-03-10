(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let tab = await blueFoxScript.createWindow("https://ooo.bluefox.ooo/BlueFoxDemo/8bit.html");

  // XPath
  let properties = await tab.tails().getProperties(`/html/body/div/h1`);
  window.alert(properties.textContent);

  // CSS selectors
  properties = await tab.tails().getProperties(`h1`);
  window.alert(properties.outerHTML);
})();