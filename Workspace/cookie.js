(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let tab = await blueFoxScript.createWindow("https://www.google.com");

  await tab.cookie.remove({
    name: "test-name",
  });
  await tab.cookie.set({
    name: "test-name",
    value: "test-value",
  });
  log(
    await tab.cookie.get()
  );
  tab.close();
})();