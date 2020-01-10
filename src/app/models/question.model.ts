class Option {
    constructor(
        public desc: string,
        public linkToImage: string,
        public isCorrect: boolean,
        public isHidden?: boolean
    ) {
        this.desc = desc;
        this.linkToImage = linkToImage;
        this.isCorrect = isCorrect;
        this.isHidden = isHidden;
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

    //mix options to put them in another order
    shuffleOptions(data: Option[]) {
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        return data;
    }

    //create options objects according to Option model to use their properties further
    createOptions(options): Option[] {
        let result = options.map(
            option =>
                new Option(
                    option["desc"],
                    option["linkToImage"],
                    option["isCorrect"],
                    option["isHidden"]
                )
        );
        return this.shuffleOptions(result);
    }
}
