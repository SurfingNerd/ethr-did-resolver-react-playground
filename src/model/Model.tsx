import { observable } from 'mobx';


export class Lab {
    
    public constructor(
        public name: string,
        public country: string,
        public webSite: string,
        public ethAddress: string,
        public entryIssued: Date) {

        }
}

class Model {
    @observable name = 'Noah';

    labs = new Array<Lab>();

    constructor() {
        this.labs.push(
            new Lab("COVID-19 Test Lab", "Austria", "http://operator-dashboard.dev.lab10.io/index.html", "0xc143430BCB607b726f60eDB21d219C54953116f2", new Date(2020, 3, 29)),
            new Lab("Lab2", "Austria", "www.lab2.io", "0x84bD34596E7d9c93eca58247BA21CF63090460A7", new Date(2020, 3, 29)),
            new Lab("Lab10", "Austria", "www.lab10.io", "0x3851ae6499871A31946E806f7268a454c89b5541", new Date(2020, 3, 29))
            
        );
    }
}

export default Model;
