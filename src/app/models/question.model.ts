class Option {
    constructor(
        public id: string,
        public desc: string,
        public linkToImage: string,
        public isCorrect: boolean,
        public isHidden?: boolean
    ) {
        this.id = id;
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
        public options: Option[],
        public correctOption: string
    ) {
        this.id = id || null;
        this.desc = desc || null;
        this.options = this.createOptions(options) || null;
        this.correctOption = this.setCorrectOption(options) || null;
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
        if (options) {
            let result = options.map(
                option =>
                    new Option(
                        option["id"],
                        option["desc"],
                        option["linkToImage"],
                        option["isCorrect"],
                        option["isHidden"]
                    )
            );
            return this.shuffleOptions(result);
        }
    }

    setCorrectOption(options: Option[]) {
        if (options) {
            let correctOption = options.find(option => option.isCorrect);
            return correctOption.id;
        }
    }
}
