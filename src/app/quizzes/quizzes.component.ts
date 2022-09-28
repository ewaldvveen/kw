import { Component } from '@angular/core';

@Component({
  selector: 'kw-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {
  quizzes = [
    {
      id: 1,
      title: 'Editie januari 2023',
      description: '60 vragen, verdeeld over 6 rondes over allerlei onderwerpen.',
      category: 'standaard',
      releaseDate: '1 januari 2023',
      price: '1.99'
    },
    {
      id: 2,
      title: 'Speciale editie januari 2023',
      description: '60 muziekvragen, verdeeld over 6 rondes.',
      category: 'thema',
      releaseDate: '15 januari 2023',
      price: '2.99'
    },
    {
      id: 3,
      title: 'Editie februari 2023',
      description: '60 vragen, verdeeld over 6 rondes over allerlei onderwerpen.',
      category: 'standaard',
      releaseDate: '1 februari 2023',
      price: '1.99'
    },
  ];

  selectedQuiz = null;

  selectQuiz(quiz: any): void {
    this.selectedQuiz = quiz;
  }
}
