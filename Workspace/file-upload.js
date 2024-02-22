(async () => {
  let blueFoxScript = new BlueFoxScript();
  await blueFoxScript.init();

  if (!(await blueFoxScript.tabs.get("https://johndatserakis.github.io/file-upload-with-preview/").length)) {
    await blueFoxScript.tabs.create("https://johndatserakis.github.io/file-upload-with-preview/");
    await sleep(1000);
    await blueFoxScript.tabs.reload();
  }

  let tab = await blueFoxScript.tabs.get("https://johndatserakis.github.io/file-upload-with-preview/")[0];
  await tab.dispatch
    .tails({ dispatchEvents: [] })
    .target("#file-upload-with-preview-myFirstImage")
    .file(
      [await blueFoxScript.getRemoteFile("/img/BlueFox.png")]
    )
    .event({
      eventObject: "Event",
      eventType: "change",
      eventArgs: {
        bubbles: true
      }
    })
    .target("#file-upload-with-preview-mySecondImage")
    .file(
      [
        await blueFoxScript.getRemoteFile("/img/BlueFox.png"),
        await blueFoxScript.getRemoteFile("/img/tail.png"),
      ]
    )
    .event({
      eventObject: "Event",
      eventType: "change",
      eventArgs: {
        bubbles: true
      }
    })
    .run({ sleep: 100 });
})();