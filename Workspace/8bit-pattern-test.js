(async () => {
    let blueFoxScript = await new BlueFoxScript().init();

    let tab = await blueFoxScript.tabs.create("https://ooo.bluefox.ooo/BlueFoxDemo/8bit.html");
    let tails = tab.dispatch.tails();
    for (let n = 0; n <= 0xff; n++) {
        n.toString(2).split("").reverse().forEach((value, index) => {
            if (value == "1") {
                tails.defined(`bit-${index + 1}`).call("click", null);
            }
        });
        tails.target(`[out]`).push({ property: { "textContent": null } })
            .sleep(5);
        // clear checked state: Commented out for test failure
        // if (n != 0xff) {
        //     n.toString(2).split("").reverse().forEach((value, index) => {
        //         if (value == "1") {
        //             tails.defined(`${index + 1}`).call("click", null);
        //         }
        //     });
        // }
    }
    let result = await tails.run({ sleep: 0 });
    log(result);

    {
        let test_case = 0;
        let Passed = 0;
        let Failed = 0;
        for (test_case = 0; test_case <= 0xff; test_case++) {
            let test = parseInt(result.stack[test_case].option.property.textContent.slice(1), 16) == test_case;
            assert(test, `${test_case}'th test`);
            test ? Passed++ : Failed++;
        }
        log(`${Passed} / ${test_case} Test Passed`);
        log(`${Failed} / ${test_case} Test Failed`);
        if (test_case == 0xff + 1) {
            UIkit.notification({ message: "Test Passed", status: "success" });
        } else {
            UIkit.notification({ message: "Test Failed", status: "danger" });
        }
    }

})();