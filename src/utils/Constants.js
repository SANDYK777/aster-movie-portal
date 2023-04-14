
export const base_url=`https://api.themoviedb.org/3`;
export const authentication_url=`https://www.themoviedb.org/authenticate`;
export const api_key="5bcee520e4f9337750189ad05cc32fe5";
export const token_url =`${base_url}/authentication/token/new?api_key=${api_key}`;
export const session_key_url =`${base_url}/authentication/session/new?api_key=${api_key}`;
export const yearly_release_url=`${base_url}/discover/movie?primary_release_year=`+Date().getFullYear+`&sort_by=vote_average.desc`
export const logo="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
export const bearer_token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmNlZTUyMGU0ZjkzMzc3NTAxODlhZDA1Y2MzMmZlNSIsInN1YiI6IjY0MzgyZjE4NGE1MmY4MDA3N2I4ZWNjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PF1iHydXYLZcFRjNG9OJd1ztdEiJun6PYHFHqX7FhkU";
