const fs = require("fs");
const child_process = require('child_process');
class DATA {
    constructor() {
        this.load();
    }

    load() {
        const data = fs.readFileSync("assets/data/start.json");
        const json = JSON.parse(data);
        if(!json || !Array.isArray(json)) return;

        for(let i = 0; i < json.length; i++) {
            this.create(json[i], i+1);
        }
    }

    create(data, index) {
        const path = document.querySelector("#table #list");
        const element = document.createElement("div");
        element.id = "item";
        element.innerHTML =
        `
            <div>${index}</div>
            <div>${data.username}</div>
            <div>${data.startedAt}</div>
            <div>${data.pc}</div>
            <div class="ip-link ${(data.IP == "undefined") ? "inactive" : "active"}" data-correctIP="${(data.IP == "undefined") ? false : true}">${(data.IP == "undefined") ? "N/A" : data.IP}</div>
        `
        path.prepend(element)
    }
}


const data = new DATA();

const list = document.querySelector("#list");
list.addEventListener("click", function(event) {
    event.preventDefault();
    let t = event.target;
    if(t.className == "ip-link active") {
        child_process.exec(`start https://whatismyipaddress.com/ip/${t.innerText.trim()}`);
    }
});
