(async () => {
  let blueFoxScript = new BlueFoxScript();
  await blueFoxScript.init();

  if (!(await blueFoxScript.tabs.get("https://twitter.com/xoFeulB").length)) {
    await blueFoxScript.tabs.create("https://twitter.com/xoFeulB", {
      focused: true,
      top: 0,
      left: 0,
    });
    await sleep(2000);
    await blueFoxScript.tabs.reload();
  }

  let tab = await blueFoxScript.tabs.get("https://twitter.com/xoFeulB")[0];
  let tails = tab.dispatch.tails({ dispatchEvents: [] });
  tails.target(`[data-testid="SideNav_NewTweet_Button"]`).call(`click`, null);
  await tails.run();
  await sleep(500);

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