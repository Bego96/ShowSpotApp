export interface Movie {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    overview:string,
}

export interface TVShow {
    id: number,
    original_title: string,
    original_name:string,
    poster_path: string,
    first_air_date: string,
    overview: string
}