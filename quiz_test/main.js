var questionArr = [{"answerOne":false,"answerTwo":false,"answerThree":false,"answerFour":false},{"answerOne":false,"answerTwo":false,"answerThree":false,"answerFour":false},{"answerOne":false,"answerTwo":false,"answerThree":false,"answerFour":false}];
const answerArr = [{"answerOne":false,"answerTwo":false,"answerThree":true,"answerFour":true},{"answerOne":true,"answerTwo":false,"answerThree":false,"answerFour":true},{"answerOne":true,"answerTwo":false,"answerThree":true,"answerFour":false}];
const colorDict = {true:'rgb(248,243,199)',false:'#fff'}

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

function HandleShowBtn(){
	 
	if(!isShowBtn){
		showBtn.removeAttribute("hidden");
		isShowBtn=true;
	}else{
		showBtn.setAttribute("hidden","hidden");
		isShowBtn=false;
	}
}

function HandleBtn(e,isPressed){
	
	let answerWrapper;
	let img;
	let tmpStr;
	
	for(let i=0;i<questionArr.length;i++){
		for(const obj in questionArr[i]){
			
			tmpStr = (i+1) + obj.charAt(0).toUpperCase() + obj.slice(1);
			tmpLabel = document.getElementById(statusLabel + tmpStr);
			if(e.target.value==='check'){
				answerWrapper = document.getElementById(answerWrapperPrefix + tmpStr);
				if(isPressed){
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
				}else{
					tmpLabel.style.backgroundColor='#fff';
			
					if(questionArr[i][obj]===answerArr[i][obj]){
						img = document.getElementById("img-checkmark");
						img.remove();	
					}else{
						img = document.getElementById("img-cross");
						img.remove();
					} 	
				}
			}else if(e.target.value==='show'){
				if(answerArr[i][obj]){
					tmpLabel.style.backgroundColor=colorDict[isPressed];
				} 
			}else if(e.target.value==='reset'){
				if(questionArr[i][obj]){
					questionArr[i][obj]=false;
					tmpCheckbox = document.getElementById(obj+(i+1));
					tmpCheckbox.checked=false;
				}
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

