import { Component, OnInit } from "@angular/core";
import { QuestionService} from "src/app/services/question.service";
@Component ({
    selector: "question-component",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.css"]
})

export class Question implements OnInit {

    questionList: any[] = []
    numberOfQuestions:number = 0;
    currentQuestion:number = 0;
    correctAnswer: number = 0;
    inCorrectAnswer: number = 0;
    isQuizCompleted:boolean = false;
    selectedOptionIndex: number = 0;

    constructor(private questionsService: QuestionService) {}

    getAllQuestions() {
        this.questionsService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
        console.log(res.questions);
      })
  }

  nextQuestion() {
    if (this.currentQuestion > this.questionList.length) {
      this.isQuizCompleted = true;
    }
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }


  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
    }
    if (option.correct) {
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
      }, 500)

    } else {
      setTimeout(() => {
        console.log(option);
        this.currentQuestion++;
        this.inCorrectAnswer++;
      }, 500)

    }
    this.selectedOptionIndex = -1; 
  }

 

        ngOnInit(): void {
            this.getAllQuestions();
            console.log(`this question list ${this.questionList}`);
            
        }
}