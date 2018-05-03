

class DeodoLibrary {

    constructor(name) {
        this.name = name || "deodo-default";

        this.debug = false;

        this.stored = [];
        this.variables = [];
    }



    addVar(value, isStored) {
        if (typeof value === 'undefined') {
            console.error("Cannot add variable with value of undefined");
            return;
        }

        if (typeof isStored !== 'undefined') {
            if (isStored) {
                this.stored.push({ value: value, type: typeof value });
                this.variables.push({ value: value, type: typeof value });
            }else {
                this.variables.push({ value: value, type: typeof value });
            }
        }

        if (this.debug) {
            console.log("New variable created");
        }
    }


    store() {
        localStorage.setItem(this.name, JSON.stringify(this.stored));
    }


    restore() {
        var nameWorking = false;
        var defaultWorking = false;
        var retrieved;

        if (localStorage.getItem(this.name) === null) {
            nameWorking = false;
        }else  {
            nameWorking = true;
        }

        if (localStorage.getItem("deodo-default") === null) {
            defaultWorking = false;
        }else {
            defaultWorking = true;
        }

        if (nameWorking === false && defaultWorking === false) {
            console.warn("Nothing was restored");
            return;
        }



        if (nameWorking) {
            retrieved = JSON.parse(localStorage.getItem(this.name));
        }else if (defaultWorking) {
            retrieved = JSON.parse(localStorage.getItem('deodo-default'));
        }

        this.variables.concat(JSON.parse(localStorage.getItem(this.name)));
        this.stored.concat(JSON.parse(localStorage.getItem(this.name)));
    }
}
