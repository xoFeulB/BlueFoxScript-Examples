(async () => {
  let blueFoxScript = await new BlueFoxScript();

  if (!(await blueFoxScript.tabs.get("https://dmauro.github.io/Keypress/").length)) {
    await blueFoxScript.tabs.create("https://dmauro.github.io/Keypress/");
    await sleep(1000);
    await blueFoxScript.tabs.reload();
  }

  let tab = await blueFoxScript.tabs.get("https://dmauro.github.io/Keypress/")[0];
  let tails = tab.dispatch.tails({ dispatchEvents: [] });
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