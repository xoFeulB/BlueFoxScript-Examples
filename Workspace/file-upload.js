(async () => {
  let blueFoxScript = await new BlueFoxScript();

  if (!(await blueFoxScript.findTab("https://johndatserakis.github.io/file-upload-with-preview/").length)) {
    await blueFoxScript.createWindow("https://johndatserakis.github.io/file-upload-with-preview/");
  }

  let tab = await blueFoxScript.findTab("https://johndatserakis.github.io/file-upload-with-preview/")[0];
  await tab
    .tails({ dispatchEvents: [] })
    .target("#file-upload-with-preview-myFirstImage")
    .file(
      [await blueFoxScript.getWorkspaceFile("/img/BlueFox.png")]
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
        await blueFoxScript.getWorkspaceFile("/img/BlueFox.png"),
        await blueFoxScript.getWorkspaceFile("/img/tail.png"),
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