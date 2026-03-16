(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let tab = await blueFoxScript.findTab("https://www.bluefox.tech/BlueFoxDemo/8bit.html")[0];
  log(
    await tab.sendCommand(
      "DOMSnapshot.captureSnapshot",
      {
        computedStyles: [],
      }
    )
  );
})();

https://developers.google.com/learn/pathways/get-started-text-classification-web