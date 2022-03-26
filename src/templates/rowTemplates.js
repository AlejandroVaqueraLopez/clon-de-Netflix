//rows 
let myList = () => {
 return `
			<!--carousel row START-->
				<div class="carousel-row">
					<h4 class="row-title">Mi lista</h4>
					<!--carousel item COMPONENT START-->
					<div class="carousel-item">
					<!--carousel preview content-->
						<div class="carousel-content carousel-content-first-item">
					<!--carousel preview component-->
							<div class="preview-container">
					<!--carousel preview component main-->
								<div class="preview-main">
									<img class="front-image" src="./src/images/movies/mini-preview-cover/silent-hill.jpg" alt="front-page-image">
									<!--<img class="preview-image" src="" alt="preview-image">-->
									<video class="mini-preview-video" autoplay muted loop>
										<source src="./src/images/movies/mini-preview-videos/silent-hill.mp4" type="video/mp4">
									</video>
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
								<h5>95% para ti</h5>
								<h5>TV-MA</h5>
								<h5>2hrs</h5>
							</div>
						<!--carousel content preview category-->
							<div class="carousel-content-category">
								<h4>Drama</h4>
								<ul>
									<li>Emotiva</li>
									<li>Suspenso</li>
								</ul>
							</div>
						</div>
					</div>
					<!--carousel item COMPONENT END-->
`;
}

export default myList;
