import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Question } from "../models/question.model";

const data = [
    {
        id: "1",
        desc: "1 + 1 =",
        options: [
            {
                desc: "2",
                linkToImage: "",
                isCorrect: true
            },
            {
                desc: "4",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "10",
                linkToImage: "",
                isCorrect: false
            },
            {
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
                desc: "2",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "4",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "3",
                linkToImage: "",
                isCorrect: true
            },
            {
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
                desc: "Paris",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "Stockholm",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "London",
                linkToImage: "",
                isCorrect: true
            },
            {
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
                desc: "",
                linkToImage:
                    "https://upload.wikimedia.org/wikipedia/commons/6/63/Monarch_In_May.jpg",
                isCorrect: false
            },
            {
                desc: "",
                linkToImage:
                    "https://images.pexels.com/photos/326067/pexels-photo-326067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                isCorrect: false
            },
            {
                desc: "",
                linkToImage:
                    "https://images.pexels.com/photos/162311/dovetail-butterfly-garden-insect-162311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                isCorrect: true
            },
            {
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
            {
                desc: "five",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "nine",
                linkToImage: "",
                isCorrect: true
            },
            {
                desc: "thousand",
                linkToImage: "",
                isCorrect: false
            },
            {
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
                desc: "cloud",
                linkToImage: "",
                isCorrect: true
            },
            {
                desc: "coin",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "ring",
                linkToImage: "",
                isCorrect: false
            },
            {
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
                desc: "best",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "fastest",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "fool",
                linkToImage: "",
                isCorrect: false
            },
            {
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
                desc: "Alcohol",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "Work",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "Laughter",
                linkToImage: "",
                isCorrect: true
            },
            {
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
                desc: "124",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "144",
                linkToImage: "",
                isCorrect: true
            },
            {
                desc: "1212",
                linkToImage: "",
                isCorrect: false
            },
            {
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
                desc: "fifty",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "forty",
                linkToImage: "",
                isCorrect: true
            },
            {
                desc: "fifteen",
                linkToImage: "",
                isCorrect: false
            },
            {
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
                desc: "",
                linkToImage:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Tiger_tuzoofari2018p3.jpg/800px-Tiger_tuzoofari2018p3.jpg",
                isCorrect: false
            },
            {
                desc: "",
                linkToImage:
                    "https://cdn.pixabay.com/photo/2019/12/04/19/12/tiger-4673461_960_720.jpg",
                isCorrect: false
            },
            {
                desc: "",
                linkToImage:
                    "https://cdn.pixabay.com/photo/2019/12/15/17/36/tiger-4697690_960_720.jpg",
                isCorrect: false
            },
            {
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
                desc: "1228",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "1024",
                linkToImage: "",
                isCorrect: false
            },
            {
                desc: "1337",
                linkToImage: "",
                isCorrect: true
            },
            {
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
            item => new Question(item["id"], item["desc"], item["options"])
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

    constructor(private http: HttpClient) {
        this.resetQuestions();
    }
}
