import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() nom: any;
  @Input() description: any;
  @Input() annee: number;

  films = [
    {
      filmName: "The Hangover 1",
      filmImage: "assets/films/hangover1.png",
      likeNbr: 15,
      dislikeNbr: 3,
      available: true,
    },
    // film 1

    {
      filmName: "The Hangover 2",
      filmImage: "assets/films/hangover2.png",
      likeNbr: 15,
      dislikeNbr: 30,
      available: true,


    },
    // film 2

    {

      filmName: "The Hangover 3",
      filmImage: "assets/films/hangover3.png",
      likeNbr: 20,
      dislikeNbr: 20,
      available: true,


    }, // film 3

  ];

  like() {
    console.log('j\'aime ce film');
  }
  dislike() {
    console.log('j\'aime pas ce film');
  }
  constructor() {

  }

  ngOnInit(): void {
  }

  determinerCouleur(likeNbr: number, dislikeNbr: number) {
    if (likeNbr == dislikeNbr) {
      return 'white';
    } else if (likeNbr > dislikeNbr) {
      return 'green';
    } else {
      return 'red';
    }

  }
}
