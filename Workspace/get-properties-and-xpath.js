(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let tab = await blueFoxScript.tabs.create("https://ooo.bluefox.ooo/BlueFoxDemo/8bit.html");

  // XPath
  let properties = await tab.dispatch.tails().getProperties(`/html/body/div/h1`);
  window.alert(properties.textContent);

  // CSS selectors
  properties = await tab.dispatch.tails().getProperties(`h1`);
  window.alert(properties.outerHTML);
})();