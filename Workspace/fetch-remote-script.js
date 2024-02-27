(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let script = await (await fetch("https://ooo.bluefox.ooo/BlueFoxDemo/js/confirm.js")).text();
  window.alert(`Confirmed: ${(await blueFoxScript.runScript(script)).result.value}`);
})();