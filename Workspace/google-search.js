(async () => {
  let blueFoxScript = await new BlueFoxScript();

  let tab = await blueFoxScript.tabs.create("https://www.google.com");
  await tab.dispatch
    .tails()
    .target("textarea")
    .setProperty({ value: "^.,.^ BlueFox" })
    .target("[name='btnK'][tabindex='0']")
    .call("click", null)
    .run({ sleep: 50 });
  await sleep(1000);

  let search_result = await tab.dispatch.script(
    () => {
      return [...document.querySelectorAll("#search :is(a[data-jsarwt='1'],a[jsname])")]
        .filter((_) => {
          return _.querySelector("h3");
        })
        .map((_) => {
          return {
            href: _.href,
            title: _.querySelector("h3").textContent,
          }
        });
    }
  );
  window.alert(JSON.stringify(search_result.result.value, null, 4));
})();