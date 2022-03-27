import {myList,watchAgain,trends,hits,causeYouSaw} from "./rowTemplates.js";
import {myListMovieData,watchAgainMovieData,trendsMovieData,hitsMovieData,causeYouSawMovieData} from "./movieData.js";


//we import the templates and insert them into the main page
let row_container = document.getElementById("carousel-row-container");
row_container.innerHTML += myList(myListMovieData);
row_container.innerHTML += watchAgain(watchAgainMovieData);
row_container.innerHTML += trends(trendsMovieData);
row_container.innerHTML += hits(hitsMovieData);
row_container.innerHTML += causeYouSaw(causeYouSawMovieData);
