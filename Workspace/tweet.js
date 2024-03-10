(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let tab = await blueFoxScript.createWindow(
    "https://twitter.com/xoFeulB",
    max_polling = 2000,
    option = {
      focused: true,
      top: 0,
      left: 0,
    }
  );
  await tab.dispatchScriptTillTrue(() => {
    return document.querySelector(`[data-testid="SideNav_NewTweet_Button"]`)?.attributes["data-testid"].value;
  }, (max_polling = 5000));

  let tails = tab.tails({ dispatchEvents: [] });
  tails.target(`[data-testid="SideNav_NewTweet_Button"]`).call(`click`, null);
  await tails.run();

  await tab.dispatchScriptTillTrue(() => {
    return document.querySelector(`[data-testid="tweetTextarea_0RichTextInputContainer"]`)?.attributes["data-testid"].value;
  }, (max_polling = 5000));

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