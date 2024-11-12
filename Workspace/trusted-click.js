(async () => {
    let blueFoxScript = await new BlueFoxScript();

    let tab = await blueFoxScript.findTab("https://ooo.bluefox.ooo/BlueFoxDemo/8bit.html")[0];

    await tab.sendCommand(
        "Input.dispatchMouseEvent",
        {
            type: "mousePressed",
            button: "left",
            x: 27,
            y: 104,
            clickCount: 1,
        }
    );
    await sleep(100);
    await tab.sendCommand(
        "Input.dispatchMouseEvent",
        {
            type: "mouseReleased",
            button: "left",
            x: 27,
            y: 104,
            clickCount: 1,
        }
    );
})();