import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films = [
    {
      movieId: 1,
      movieName: "The Hangover 1",
      movieDescription: "Trois jeunes hommes cherchent un ami qui a disparu au cours d\'une super fête àLas Vegas.",

    },
    // film 1

    {
      movieId: 2,
      movieName: "The Hangover 2",
      movieDescription: "Phil, Stu, Alan et Doug s'offrent un voyage exotique en Thaïlande, à l'occasion du mariage deStu."

    },
    // film 2

    {
      movieId: 3,
      movieName: "The Hangover 3",
      movieDescription: " Cela fait deux ans maintenant que Phil, tu, Alan et Doug sont revenus de Thaïlande. Tout le monde a bien négocié le retour mais Alan, qui a cessé de prendre ses médicaments, peine à trouver son équilibre.",

    }, // film 3

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
