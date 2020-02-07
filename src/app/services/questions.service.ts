import { Injectable } from "@angular/core";
import { Question } from "../models/question.model";

const data = [
    {
        id: "1",
        desc: "1 + 1 =",
        options: [
            {
                id: "32f",
                desc: "2",
                linkToImage: "",
                isCorrect: true
            },
            {
                id: "32fjdf",
                desc: "4",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "fkd5",
                desc: "10",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "das4",
                desc: "8",
                linkToImage: "",
                isCorrect: false
            }
        ]
    },
    {
        id: "2",
        desc: "1 + 2 =",
        options: [
            {
                id: "fj4l",
                desc: "2",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "fs3244",
                desc: "4",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "slf532",
                desc: "3",
                linkToImage: "",
                isCorrect: true
            },
            {
                id: "fdklj3",
                desc: "8",
                linkToImage: "",
                isCorrect: false
            }
        ]
    },
    {
        id: "3",
        desc: "The capital of Great Britain is ...",
        options: [
            {
                id: "fdj87",
                desc: "Paris",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "ew324",
                desc: "Stockholm",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "oi7987",
                desc: "London",
                linkToImage: "",
                isCorrect: true
            },
            {
                id: "sde3",
                desc: "Capetown",
                linkToImage: "",
                isCorrect: false
            }
        ]
    },
    {
        id: "4",
        desc: "Check the wrong one",
        options: [
            {
                id: "fdsdfklj3",
                desc: "",
                linkToImage:
                    "https://upload.wikimedia.org/wikipedia/commons/6/63/Monarch_In_May.jpg",
                isCorrect: false
            },
            {
                id: "342fsz",
                desc: "",
                linkToImage:
                    "https://images.pexels.com/photos/326067/pexels-photo-326067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                isCorrect: false
            },
            {
                id: "23fs",
                desc: "",
                linkToImage:
                    "https://images.pexels.com/photos/162311/dovetail-butterfly-garden-insect-162311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                isCorrect: true
            },
            {
                id: "sf32435",
                desc: "",
                linkToImage:
                    "https://images.pexels.com/photos/54609/papilio-rumanzovia-butterfly-animal-insect-54609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                isCorrect: false
            }
        ]
    },
    {
        id: "5",
        desc: "A cat has ... lives.",
        options: [
            { id: "cdfe245a", desc: "five", linkToImage: "", isCorrect: false },
            {
                id: "fsd34534",
                desc: "nine",
                linkToImage: "",
                isCorrect: true
            },
            {
                id: "fsa23",
                desc: "thousand",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "534fvd",
                desc: "zero",
                linkToImage: "",
                isCorrect: false
            }
        ]
    },
    {
        id: "6",
        desc: "Every ... has a silver lining.",
        options: [
            {
                id: "sdf498",
                desc: "cloud",
                linkToImage: "",
                isCorrect: true
            },
            {
                id: "868jh",
                desc: "coin",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "45agjsd",
                desc: "ring",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "989gj",
                desc: "man",
                linkToImage: "",
                isCorrect: false
            }
        ]
    },
    {
        id: "7",
        desc: "Fortune favors the ...",
        options: [
            {
                id: "hj796",
                desc: "best",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "sda4654",
                desc: "fastest",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "908vhf",
                desc: "fool",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "54hhj",
                desc: "brave",
                linkToImage: "",
                isCorrect: true
            }
        ]
    },
    {
        id: "8",
        desc: "... is the best medicine.",
        options: [
            {
                id: "sd23",
                desc: "Alcohol",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "ads563",
                desc: "Work",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "08sfsdf",
                desc: "Laughter",
                linkToImage: "",
                isCorrect: true
            },
            {
                id: "5464jg",
                desc: "Paracetamol",
                linkToImage: "",
                isCorrect: false
            }
        ]
    },
    {
        id: "9",
        desc: "12 * 12 = ",
        options: [
            {
                id: "8kh7",
                desc: "124",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "57hjhg786",
                desc: "144",
                linkToImage: "",
                isCorrect: true
            },
            {
                id: "65sdhg",
                desc: "1212",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "98sfd",
                desc: "0",
                linkToImage: "",
                isCorrect: false
            }
        ]
    },
    {
        id: "10",
        desc: "Life begins at ...",
        options: [
            {
                id: "65sfav",
                desc: "fifty",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "fdkshf76",
                desc: "forty",
                linkToImage: "",
                isCorrect: true
            },
            {
                id: "08affaf",
                desc: "fifteen",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "jknbxc6",
                desc: "Twenty one",
                linkToImage: "",
                isCorrect: false
            }
        ]
    },
    {
        id: "11",
        desc: "Check the wrong one",
        options: [
            {
                id: "dfsda252",
                desc: "",
                linkToImage:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Tiger_tuzoofari2018p3.jpg/800px-Tiger_tuzoofari2018p3.jpg",
                isCorrect: false
            },
            {
                id: "sdf23432",
                desc: "",
                linkToImage:
                    "https://cdn.pixabay.com/photo/2019/12/04/19/12/tiger-4673461_960_720.jpg",
                isCorrect: false
            },
            {
                id: "fsd231",
                desc: "",
                linkToImage:
                    "https://cdn.pixabay.com/photo/2019/12/15/17/36/tiger-4697690_960_720.jpg",
                isCorrect: false
            },
            {
                id: "noi423",
                desc: "",
                linkToImage:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/F-15SG_Cope_Tiger_2012.jpg/800px-F-15SG_Cope_Tiger_2012.jpg",
                isCorrect: true
            }
        ]
    },
    {
        id: "12",
        desc: "What is leet?",
        options: [
            {
                id: "324ljlkj",
                desc: "1228",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "das2545",
                desc: "1024",
                linkToImage: "",
                isCorrect: false
            },
            {
                id: "vsdf234",
                desc: "1337",
                linkToImage: "",
                isCorrect: true
            },
            {
                id: "sdf2342",
                desc: "Elite",
                linkToImage: "",
                isCorrect: false
            }
        ]
    }
];

@Injectable({
    providedIn: "root"
})

//this service is responsible to get array with questions and create array with objects Question
//it is used by question-list component, which gets array of Question objects
export class QuestionsService {
    private selectedQuestions: Object[] = [];
    private questionsList: Question[] = [];

    //First, create array of indices, mix them and choose 10 values to select questions which have index equals chosen value
    createIndicesToSelect(data: Object[]): Number[] {
        if (data == null) {
            console.error("data is null");
            throw "data is null";
        }

        if (data.length === 0) {
            throw "data is empty";
        }

        if (data.length < 10) {
            throw "not enough questions to show";
        }

        for (var indices = [], i = 0; i < data.length; ++i) indices[i] = i;
        indices = this.shuffle(indices);
        return indices.slice(0, 10);
    }

    //select 10 questions from data array
    selectQuestions(data: Object[], indices: Number[]) {
        this.selectedQuestions = data.filter(
            (element, index) => indices.indexOf(index) !== -1
        );
        this.selectedQuestions = this.shuffle(this.selectedQuestions);
    }

    //function to mix array (with indices or questions)
    shuffle(data: Object[]): Object[] {
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        return data;
    }

    //For every element of fetched data we create Question object
    createQuestionList(items: object[]): Question[] {
        return items.map(
            item =>
                new Question(
                    item["id"],
                    item["desc"],
                    item["options"],
                    item["correctOption"]
                )
        );
    }

    //this method is used by question-list data to get 10 selected and mixed questions
    getQuestions() {
        return this.questionsList;
    }

    resetQuestions() {
        const indices = this.createIndicesToSelect(data);
        this.selectQuestions(data, indices);
        this.questionsList = this.createQuestionList(this.selectedQuestions);
    }

    constructor() {
        this.resetQuestions();
    }
}
