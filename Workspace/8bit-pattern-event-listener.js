(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let tab = await blueFoxScript.createWindow("https://ooo.bluefox.ooo/BlueFoxDemo/8bit.html");
  log(await tab.addEventListeners(
    `[data-testid]`,
    "click",
    async (object) => {
      log(object);
      UIkit.notification(
        `${object.event.type} : ${object.event.target}`
      );
    }
  ));
})();