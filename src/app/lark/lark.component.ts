import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lark',
  templateUrl: './lark.component.html',
  styleUrls: ['./lark.component.css', './lark.component.scss']
})
export class LarkComponent implements OnInit {

  private correctAnswers;
  private answers;
  private currentQuestion;
  private numQuestions;

  constructor() { }

  ngOnInit(): void {
    this.answers = ['', '', '', '', ''];
    this.currentQuestion = 1;
    this.correctAnswers = ['ABD', 'B', 'C', 'C', 'D'];
    this.numQuestions = 5;
    document.getElementById('prev').setAttribute('disabled', 'true');
  }

  beginTest() {
    document.getElementById('test').classList.remove('d-none');
    document.getElementById('landing').classList.add('d-none');
    document.getElementById('test').classList.add('animate__slideInLeft');
  }

  prevQuestion() {
    this.removeCurrentSpy();
    this.hideCurrentQuestion();

    this.currentQuestion -= 1;

    this.showCurrentQuestion();
    this.updateButtons();
  }

  nextQuestion() {
    if(this.currentQuestion == this.numQuestions) {
      if(this.answers.includes('')) {
        alert(`You are missing an answer for qeustion ${this.answers.indexOf('') + 1}`);
        this.removeCurrentSpy();
        this.hideCurrentQuestion();
        this.currentQuestion = this.answers.indexOf('') + 1;
        this.showCurrentQuestion();
        this.updateButtons();
        return;
      } else {
        console.log('Done');
        let score = this.calculateScore();
        document.getElementById('complete-window').classList.remove('d-none');
        document.getElementById('completed').classList.add('animate__bounceIn');
        if(score == 100) {
          document.getElementById('completed-success').classList.remove('d-none');
        } else {
          document.getElementById('completed-failure').classList.remove('d-none');
        }
        document.getElementById('score').innerText = `${score}%`;
        document.getElementById('prev').setAttribute('disabled', 'true');
        document.getElementById('next').setAttribute('disabled', 'true');
        return;
      }
    }

    //TODO Save current answer
    this.removeCurrentSpy();
    this.hideCurrentQuestion();

    this.currentQuestion += 1;

    this.showCurrentQuestion();
    this.updateButtons();
  }

  reload() {
    location.reload();
  }

  answer(input) {
    console.log(input);
    this.answers[this.currentQuestion-1] = `${input}`;
  }

  updateButtons() {
    if(this.currentQuestion == 1) {
      document.getElementById('prev').setAttribute('disabled', 'true');
    } else {
      document.getElementById('prev').removeAttribute('disabled');
    }
    if(this.currentQuestion == this.numQuestions) {
      document.getElementById('next').innerText = 'Done';
    } else {
      document.getElementById('next').innerText = 'Next';
    }
  }

  showCurrentQuestion() {
    document.getElementById(`spy-${this.currentQuestion}`).classList.add('active');
    document.getElementById(`question-${this.currentQuestion}`).classList.remove('d-none');
    document.getElementById(`question-${this.currentQuestion}`).classList.add('animate__backInUp');
  }

  removeCurrentSpy() {
      document.getElementById(`spy-${this.currentQuestion}`).classList.remove('active');
  }

  hideCurrentQuestion() {
      document.getElementById(`question-${this.currentQuestion}`).classList.add('d-none');
      document.getElementById(`question-${this.currentQuestion}`).classList.remove('animate__backInUp');
  }

  calculateScore() {
    let score = 0;
    for (let i = 0; i < this.numQuestions; i++) {
      if(this.correctAnswers[i].includes(this.answers[i])) {
        score += 100;
      }
    }
    return score / this.numQuestions;
  }

}
