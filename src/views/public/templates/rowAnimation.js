var itemWidth = 240;

let overflowFn = () => {
	let rowArray = document.querySelectorAll(".carousel-row");
	let rowLeftArray = document.querySelectorAll(".row-left");
	let rowRightArray = document.querySelectorAll(".row-right");
	//if breakpoint, show overflow instead of buttons
	if(window.innerWidth >= 900){
		let cont = 0;
		for(cont = 0; cont <= rowArray.length - 1; cont ++){
			rowArray[cont].style.overflow = `hidden`;
		}
		cont = 0;
		for(cont = 0;cont <= rowLeftArray.length - 1;cont ++){
			rowLeftArray[cont].style.display = "block";
		}
		cont = 0;
		for(cont = 0;cont <= rowRightArray.length - 1;cont ++){
			rowRightArray[cont].style.display = "block";
		}
	}else{
		let cont = 0;
		for(cont = 0; cont <= rowArray.length - 1; cont ++){
			rowArray[cont].style.overflow = `auto`;
		}
		cont = 0;
		for(cont = 0;cont <= rowLeftArray.length - 1;cont ++){
			rowLeftArray[cont].style.display = "none";
		}
		cont = 0;
		for(cont = 0;cont <= rowRightArray.length - 1;cont ++){
			rowRightArray[cont].style.display = "none";
		}
	}
}

let myListRowAnimationFn = () => {
	let move = 0;
	let maxMoveSize = 0; 
	let itemCount = 0;
	let scrolled = 0
	let unScrolled = 0
	let scrollBlock = false;
	let btnMyListLeft = document.getElementById("btn-myList-left");
	let btnMyListRight = document.getElementById("btn-myList-right");
	let myListItemArray = document.querySelectorAll(".myListItem");

	btnMyListLeft.addEventListener("click",() => {
		if(move === 0){
			itemCount = 0;
		}else{
			itemCount --;
			scrollBlock = false;
			move += itemWidth;
			for(var cont = 0; cont <= myListItemArray.length - 1; cont ++){
				myListItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})

	btnMyListRight.addEventListener("click",() => {
		scrolled = Math.floor(window.innerWidth / itemWidth);//this give the traveled scroll
		maxMoveSize = (myListItemArray.length * itemWidth);
		unScrolled = maxMoveSize - (scrolled * itemWidth);
		if(scrollBlock !== true){
			itemCount++;
		}
		if((itemCount * itemWidth) >= (unScrolled + 1)){
			scrollBlock = true;
		}else{
			move -= itemWidth;
			for(var cont = 0; cont <= myListItemArray.length - 1; cont ++){
				myListItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})
}

let watchAgainRowAnimationFn = () => {
	let move = 0;
	let maxMoveSize = 0; 
	let itemCount = 0;
	let scrolled = 0
	let unScrolled = 0
	let scrollBlock = false;
	let btnWatchAgainLeft = document.getElementById("btn-watchAgain-left");
	let btnWatchAgainRight = document.getElementById("btn-watchAgain-right");
	let watchAgainItemArray = document.querySelectorAll(".watchAgainItem");
	
	btnWatchAgainLeft.addEventListener("click",() => {
		if(move === 0){
			itemCount = 0;
		}else{
			itemCount --;
			scrollBlock = false;
			move += itemWidth;
			for(var cont = 0; cont <= watchAgainItemArray.length - 1; cont ++){
				watchAgainItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})

	btnWatchAgainRight.addEventListener("click",() => {
		scrolled = Math.floor(window.innerWidth / itemWidth);//this give the traveled scroll
		maxMoveSize = (watchAgainItemArray.length * itemWidth);
		unScrolled = maxMoveSize - (scrolled * itemWidth);
		if(scrollBlock !== true){
			itemCount++;
		}
		if((itemCount * itemWidth) >= (unScrolled + 1)){
			scrollBlock = true;
		}else{
			move -= itemWidth;
			for(var cont = 0; cont <= watchAgainItemArray.length - 1; cont ++){
				watchAgainItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})
}

let trendsRowAnimationFn = () => {
	let move = 0;
	let maxMoveSize = 0; 
	let itemCount = 0;
	let scrolled = 0
	let unScrolled = 0
	let scrollBlock = false;
	let btnTrendsLeft = document.getElementById("btn-trends-left");
	let btnTrendsRight = document.getElementById("btn-trends-right");
	let trendsItemArray = document.querySelectorAll(".trendsItem");
	
	btnTrendsLeft.addEventListener("click",() => {
		if(move === 0){
			itemCount = 0;
		}else{
			itemCount --;
			scrollBlock = false;
			move += itemWidth;
			for(var cont = 0; cont <= trendsItemArray.length - 1; cont ++){
				trendsItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})

	btnTrendsRight.addEventListener("click",() => {
		scrolled = Math.floor(window.innerWidth / itemWidth);//this give the traveled scroll
		maxMoveSize = (trendsItemArray.length * itemWidth);
		unScrolled = maxMoveSize - (scrolled * itemWidth);
		if(scrollBlock !== true){
			itemCount++;
		}
		if((itemCount * itemWidth) >= (unScrolled + 1)){
			scrollBlock = true;
		}else{
			move -= itemWidth;
			for(var cont = 0; cont <= trendsItemArray.length - 1; cont ++){
				trendsItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})
}

let hitsRowAnimationFn = () => {
	let move = 0;
	let maxMoveSize = 0; 
	let itemCount = 0;
	let scrolled = 0
	let unScrolled = 0
	let scrollBlock = false;
	let btnHitsLeft = document.getElementById("btn-hits-left");
	let btnHitsRight = document.getElementById("btn-hits-right");
	let hitsItemArray = document.querySelectorAll(".hitsItem");
	
	btnHitsLeft.addEventListener("click",() => {
		if(move === 0){
			itemCount = 0;
		}else{
			itemCount --;
			scrollBlock = false;
			move += itemWidth;
			for(var cont = 0; cont <= hitsItemArray.length - 1; cont ++){
				hitsItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})

	btnHitsRight.addEventListener("click",() => {
		scrolled = Math.floor(window.innerWidth / itemWidth);//this give the traveled scroll
		maxMoveSize = (hitsItemArray.length * itemWidth);
		unScrolled = maxMoveSize - (scrolled * itemWidth);
		if(scrollBlock !== true){
			itemCount++;
		}
		if((itemCount * itemWidth) >= (unScrolled + 1)){
			scrollBlock = true;
		}else{
			move -= itemWidth;
			for(var cont = 0; cont <= hitsItemArray.length - 1; cont ++){
				hitsItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})
}

let causeYouSawRowAnimationFn = () => {
	let move = 0;
	let maxMoveSize = 0; 
	let itemCount = 0;
	let scrolled = 0
	let unScrolled = 0
	let scrollBlock = false;
	let btnCauseYouSawLeft = document.getElementById("btn-causeYouSaw-left");
	let btnCauseYouSawRight = document.getElementById("btn-causeYouSaw-right");
	let causeYouSawItemArray = document.querySelectorAll(".causeYouSawItem");
	
	btnCauseYouSawLeft.addEventListener("click",() => {
		if(move === 0){
			itemCount = 0;
		}else{
			itemCount --;
			scrollBlock = false;
			move += itemWidth;
			for(var cont = 0; cont <= causeYouSawItemArray.length - 1; cont ++){
				causeYouSawItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})

	btnCauseYouSawRight.addEventListener("click",() => {
		scrolled = Math.floor(window.innerWidth / itemWidth);//this give the traveled scroll
		maxMoveSize = (causeYouSawItemArray.length * itemWidth);
		unScrolled = maxMoveSize - (scrolled * itemWidth);
		if(scrollBlock !== true){
			itemCount++;
		}
		if((itemCount * itemWidth) >= (unScrolled + 1)){
			scrollBlock = true;
		}else{
			move -= itemWidth;
			for(var cont = 0; cont <= causeYouSawItemArray.length - 1; cont ++){
				causeYouSawItemArray[cont].style.transform = `translateX(${move}px)`;
			}
		}
	})
}

export {overflowFn,myListRowAnimationFn,watchAgainRowAnimationFn,trendsRowAnimationFn,hitsRowAnimationFn,causeYouSawRowAnimationFn};
