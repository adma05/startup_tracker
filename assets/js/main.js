const fs = require("fs");

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
            <div>${data.IP}</div>
        `
        path.append(element)
    }
}


const data = new DATA();