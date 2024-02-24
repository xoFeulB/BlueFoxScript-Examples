(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let tab = await blueFoxScript.tabs.create(
    "https://twitter.com/xoFeulB",
    msec = 2000,
    option = {
      focused: true,
      top: 0,
      left: 0,
    }
  );
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