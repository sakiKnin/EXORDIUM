var questionArr = [{"answerOne":false,"answerTwo":false,"answerThree":false,"answerFour":false},{"answerOne":false,"answerTwo":false,"answerThree":false,"answerFour":false},{"answerOne":false,"answerTwo":false,"answerThree":false,"answerFour":false}];
const answerArr = [{"answerOne":false,"answerTwo":false,"answerThree":true,"answerFour":true},{"answerOne":true,"answerTwo":false,"answerThree":false,"answerFour":true},{"answerOne":true,"answerTwo":false,"answerThree":true,"answerFour":false}];

const checkBtn = document.querySelector('.check-btn');
const resetBtn = document.querySelector('.reset-btn');
const showBtn = document.querySelector('.show-btn');

var tmpCheckbox;
var tmpLabel;

var isShowBtn=false;
const statusLabel="statusLabel";
const answerWrapperPrefix="answerWrapper";

function HandleCheckbox(e,questionNum){
			questionArr[questionNum-1][e.target.name]=!questionArr[questionNum-1][e.target.name];
}

function HandleCheck(){
	
	let answerWrapper;
	let img;
	let tmpStr;
	
	for(let i=0;i<questionArr.length;i++){
		for(const obj in questionArr[i]){
			tmpStr=(i+1) +obj.charAt(0).toUpperCase() + obj.slice(1);
			tmpLabel = document.getElementById(statusLabel + tmpStr);
			answerWrapper = document.getElementById(answerWrapperPrefix + tmpStr);
			img = document.createElement("img");
			
			if(questionArr[i][obj]===answerArr[i][obj]){
			
				tmpLabel.style.backgroundColor='#77dd77';
				img.style.marginLeft="1rem";
				img.style.height="0.6rem";
				img.style.width="0.6rem";
				img.src="./images/green-checkmark.svg";
				img.id="img-checkmark";
				answerWrapper.appendChild(img);
			
			}else{
				tmpLabel.style.backgroundColor='#FD6861';
				img.id="img-cross";
				img.style.marginLeft="1rem";
				img.style.height="0.8rem";
				img.style.width="0.8rem";
				img.src="./images/red_cross.svg";
				answerWrapper.appendChild(img);
			}
		} 
	}
}

function HandleCheckUP(){
	
	let answerWrapper;
	let img_2;
	let img_1;
	let tmpStr;
	
	for(let i=0;i<questionArr.length;i++){
		for(const obj in questionArr[i]){
			tmpStr=(i+1) +obj.charAt(0).toUpperCase() + obj.slice(1);
			tmpLabel = document.getElementById(statusLabel + tmpStr);
			answerWrapper = document.getElementById(answerWrapperPrefix + tmpStr);
			tmpLabel.style.backgroundColor='#fff';
			
			if(questionArr[i][obj]===answerArr[i][obj]){
			  img_1 = document.getElementById("img-checkmark");
			  img_1.remove();	
			}else{
			  img_2 = document.getElementById("img-cross");
			  img_2.remove();
			} 
		} 
	}
}

function HandleReset(){
	
	console.log("handle reset")
	
	for(let i=0;i<questionArr.length;i++){
		
		for(const obj in questionArr[i]){
			if(questionArr[i][obj]){
				questionArr[i][obj]=false;
				tmpCheckbox = document.getElementById(obj+(i+1));
				tmpCheckbox.checked=false;
			}
		}
	}
}

function HandleShowBtn(){
	 
	if(!isShowBtn){
		showBtn.removeAttribute("hidden");
		isShowBtn=true;
	}else{
		showBtn.setAttribute("hidden","hidden");
		isShowBtn=false;
		
	}
}

function HandleShow(){
	for(let i=0;i<questionArr.length;i++){
		for(const obj in questionArr[i]){
			tmpLabel = document.getElementById(statusLabel + (i+1) + obj.charAt(0).toUpperCase() + obj.slice(1));
			if(answerArr[i][obj]){
				tmpLabel.style.backgroundColor='rgb(248,243,199)';
			} 
		}
	}
}

function HandleShowUP(){
	for(let i=0;i<questionArr.length;i++){
		for(const obj in questionArr[i]){
			tmpLabel = document.getElementById(statusLabel + (i+1) + obj.charAt(0).toUpperCase() + obj.slice(1));
			if(answerArr[i][obj]){
				tmpLabel.style.backgroundColor='#fff';
			
			} 
		}
	}
	 
}

