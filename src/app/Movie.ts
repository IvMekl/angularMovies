export class Movie {
    id: number;
    title: string;
    releaseYear: number;

    constructor(title: string, releaseYear: number) {
        this.title = title;
        this.releaseYear = releaseYear;
    }
}