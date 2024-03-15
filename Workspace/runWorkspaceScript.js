(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let R = await blueFoxScript.runWorkspaceScript(
    "argument.js",
    ["a", "b", "c", "d"]
  );
  console.log(R);
})();