(async () => {
  let blueFoxScript = new BlueFoxScript();
  await blueFoxScript.init();

  if (!(await blueFoxScript.tabs.get("https://twitter.com/compose/post").length)) {
    await blueFoxScript.tabs.create("https://twitter.com/compose/post", {
      focused: true,
      top: 0,
      left: 0,
    });
    await sleep(2000);
    await blueFoxScript.tabs.reload();
  }

  let tab = await blueFoxScript.tabs.get("https://twitter.com/compose/post")[0];
  let tails = tab.dispatch.tails({ dispatchEvents: [] });
  tails.init({ dispatchEvents: [] });
  tails.target(`[data-testid="tweetTextarea_0RichTextInputContainer"]`);
  [..."^.,.^ BlueFox\nあおいろきつね"].forEach((_) => {
    if (_ == "\n") {
      tails.key(
        {
          type: "keyDown",
          windowsVirtualKeyCode: 13,
        }
      );
      tails.key(
        {
          type: "keyUp",
          windowsVirtualKeyCode: 13,
        }
      );
    } else {
      tails.key(
        {
          type: "keyDown",
          text: _,
        }
      );
    }
  });
  await tails.run({ sleep: 10 });
})();