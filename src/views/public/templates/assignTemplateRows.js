import {myList,watchAgain,trends,hits,causeYouSaw} from "./rowTemplates.js";
import {mainCoverData,myListMovieData,watchAgainMovieData,trendsMovieData,hitsMovieData,causeYouSawMovieData} from "./movieData.js";
import {overflowFn,myListRowAnimationFn,watchAgainRowAnimationFn,trendsRowAnimationFn,hitsRowAnimationFn,causeYouSawRowAnimationFn} from "./rowAnimation.js";

//set the main cover 
let mainCover = document.getElementById("main-cover");
let bigPreviewCaption = document.getElementById("big-preview-caption");
let bigPreviewLogo = document.getElementById("big-preview-logo");
let bigPreviewCategory = document.getElementById("big-preview-category");
mainCover.src = `./public/images/movies/main-cover-assets/${mainCoverData.video}`;
bigPreviewLogo.src = `./public/images/movies/main-cover-assets/${mainCoverData.logo}`;
bigPreviewCaption.innerHTML = `${mainCoverData.description}`;
bigPreviewCategory.innerHTML = `${mainCoverData.category}`;

//we import the templates and insert them into the main page
let row_container = document.getElementById("carousel-row-container");
row_container.innerHTML += myList(myListMovieData);
row_container.innerHTML += watchAgain(watchAgainMovieData);
row_container.innerHTML += trends(trendsMovieData);
row_container.innerHTML += hits(hitsMovieData);
row_container.innerHTML += causeYouSaw(causeYouSawMovieData);

myListRowAnimationFn();
watchAgainRowAnimationFn();
trendsRowAnimationFn();
hitsRowAnimationFn();
causeYouSawRowAnimationFn();
overflowFn();
