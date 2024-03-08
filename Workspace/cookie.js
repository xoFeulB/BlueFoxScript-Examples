(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let tab = await blueFoxScript.tabs.create("https://www.google.com");

  await tab.removeCookie({
    name: "test-name",
  });
  await tab.setCookie({
    name: "test-name",
    value: "test-value",
  });
  log(
    await tab.getCookies()
  );
  tab.close();
})();