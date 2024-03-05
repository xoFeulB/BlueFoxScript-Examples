(async () => {
    let blueFoxScript = await new BlueFoxScript();

    let tab = await blueFoxScript.tabs.create("https://ooo.bluefox.ooo/BlueFoxDemo/8bit.html");
    let result = await tab.dispatch.tillScriptTrue(
        () => {
            if (document.querySelector("[out]").textContent == "#80") {
                return [...document.querySelectorAll("input")].map((_) => {
                    return {
                        testid: _.attributes["data-testid"].value,
                        checked: _.checked,
                    }
                });
            } else {
                return false;
            }
        },
        (max_polling = 5000)
    );
    alert(JSON.stringify(result.result.value, null, 4));
    return result.result.value;
})();