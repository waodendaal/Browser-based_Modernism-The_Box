let executedTabs = [];

function openPage(){
    const gettingCurrent = browser.tabs.getCurrent();
    if (!executedTabs.includes(gettingCurrent)){
        let executing = browser.tabs.executeScript({
            file: "blackcross.js"
          });    
    }
    fruits.push(gettingCurrent)
}

browser.browserAction.onClicked.addListener(openPage);
