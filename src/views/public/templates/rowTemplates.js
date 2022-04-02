
//label templates creator
let labelsCreator = (labelValues) => {
	let cont = 0;
	let labelsTemplate = ``;
	for(cont =0; cont <= labelValues.length - 1; cont++){
		labelsTemplate +=
		`
			<li>${labelValues[cont]}</li>
		`;
	}
	return labelsTemplate;
}

//row item template creator
let rowItemCreator = (data) => {
	let cont = 0;
	let rowTemplate = ``;

	for(cont= 0; cont <= data.length - 1; cont++){
		rowTemplate += 
		`
					<!--carousel item COMPONENT START-->
					<div class="carousel-item ${data[cont].id}">
					<!--carousel preview content-->
						<div class="carousel-content carousel-content-first-item">
					<!--carousel preview component-->
							<div class="preview-container">
					<!--carousel preview component main-->
								<div class="preview-main">
									<img class="front-image" src="./public/images/movies/mini-preview-cover/${data[cont].cover}" alt="front-page-image">
									<!--<img class="preview-image" src="" alt="preview-image">-->
									<img class="mini-preview-video" src="./public/images/movies/mini-preview-videos/${data[cont].preview}">
								</div>
					<!--carousel preview component footer-->
								<div class="preview-footer">
									<input class="btn-hover" type="button">
								</div>
							</div>
						<!--carousel content controls area-->
							<div class="carousel-item-controls__container">
								<div class="carousel-controls__main">
									<input class="btn-play btn-hover" type="button">
									<input class="btn-add-to-list btn-hover" type="button">
									<input class="btn-like btn-hover" type="button">
									<input class="btn-dislike btn-hover" type="button">
								</div>
								<input class="btn-expand-preview btn-hover" type="button">
							</div>
						<!--carousel content preview details-->
							<div class="carousel-content-details">
								<h5>${data[cont].recommendedInfo}</h5>
								<h5>${data[cont].classification}</h5>
								<h5>${data[cont].duration}</h5>
							</div>
						<!--carousel content preview category-->
							<div class="carousel-content-category">
								<h4>${data[cont].category.title}</h4>
								<ul>
									${labelsCreator(data[cont].category.labels)}
								</ul>
							</div>
						</div>
					</div>
					<!--carousel item COMPONENT END-->
		`;
	}
	return rowTemplate;
}

//rows 
let myList = (myListMovieData) => {
 return `
			<!--carousel row START-->
				<div class="carousel-row">
					<h4 class="row-title">${myListMovieData.title}</h4>

						<div class="row-left">
							<button class="btn-pointer" id="btn-myList-left">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>

					${rowItemCreator(myListMovieData.data)}

						<div class="row-right">
							<button class="btn-pointer" id="btn-myList-right">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>

			</div>
				<!--carousel row END-->
`;
}

let watchAgain = (watchAgainMovieData) => {
	return `
			<!--carousel row START-->
				<div class="carousel-row">
					<h4 class="row-title">${watchAgainMovieData.title}</h4>

						<div class="row-left">
							<button class="btn-pointer" id="btn-watchAgain-left">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>
					${rowItemCreator(watchAgainMovieData.data)}
						<div class="row-right">
							<button class="btn-pointer" id="btn-watchAgain-right">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>

			</div>
				<!--carousel row END-->
	`;
}

let trends = (trendsMovieData) => {
	return `
			<!--carousel row START-->
				<div class="carousel-row">
					<h4 class="row-title">${trendsMovieData.title}</h4>

						<div class="row-left">
							<button class="btn-pointer" id="btn-trends-left">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>
					${rowItemCreator(trendsMovieData.data)}
						<div class="row-right">
							<button class="btn-pointer" id="btn-trends-right">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>

			</div>
				<!--carousel row END-->
		`;
}

let hits = (hitsMovieData) => {
	return `
			<!--carousel row START-->
				<div class="carousel-row">
					<h4 class="row-title">${hitsMovieData.title}</h4>

						<div class="row-left">
							<button class="btn-pointer" id="btn-hits-left">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>
					${rowItemCreator(hitsMovieData.data)}
						<div class="row-right">
							<button class="btn-pointer" id="btn-hits-right">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>

			</div>
				<!--carousel row END-->
	`;
}

let causeYouSaw = (causeYouSawMovieData) => {
	return `
			<!--carousel row START-->
				<div class="carousel-row">
					<h4 class="row-title">${causeYouSawMovieData.title}</h4>

						<div class="row-left">
							<button class="btn-pointer" id="btn-causeYouSaw-left">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>
					${rowItemCreator(causeYouSawMovieData.data)}
						<div class="row-right">
							<button class="btn-pointer" id="btn-causeYouSaw-right">
								<img src="./public/images/expand-preview-icon.png" alt="scroll-icon.png">
							</button>
						</div>

			</div>
				<!--carousel row END-->
	`;
}


export {myList,watchAgain,trends,hits,causeYouSaw};
