class Option {
    constructor(
        public desc: string,
        public linkToImage: string,
        public isCorrect: boolean
    ) {
        this.desc = desc;
        this.linkToImage = linkToImage;
        this.isCorrect = isCorrect;
    }
}

export class Question {
    constructor(
        public id: string,
        public desc: string,
        public options: Option[]
    ) {
        this.id = id;
        this.desc = desc;
        this.options = this.createOptions(options);
    }

    createOptions(options): Option[] {
        return options.map(
            option =>
                new Option(
                    option["desc"],
                    option["linkToImage"],
                    option["isCorrect"]
                )
        );
    }
}
