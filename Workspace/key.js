(async () => {
  let blueFoxScript = await new BlueFoxScript();

  if (!(await blueFoxScript.findTab("https://dmauro.github.io/Keypress/").length)) {
    await blueFoxScript.createWindow("https://dmauro.github.io/Keypress/");
  }

  let tab = await blueFoxScript.findTab("https://dmauro.github.io/Keypress/")[0];
  let tails = tab.tails({ dispatchEvents: [] });
  tails.target("body");
  for (let keyCode = "A".charCodeAt(); keyCode <= "Z".charCodeAt(); keyCode++) {
    tails.key(
      {
        type: "keyDown",
        windowsVirtualKeyCode: keyCode,
      }
    );
  }
  for (let keyCode = "A".charCodeAt(); keyCode <= "Z".charCodeAt(); keyCode++) {
    tails.key(
      {
        type: "keyUp",
        windowsVirtualKeyCode: keyCode,
      }
    );
  }
  await tails.run({ sleep: 10 });
})();