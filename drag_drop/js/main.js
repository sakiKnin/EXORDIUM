const checkBtn = document.querySelector('.check-btn');
const resetBtn = document.querySelector('.reset-btn');
const showBtn = document.querySelector('.show-btn');

 
var answerArr = [{"snowman":false,"skiing":false},{"blossoming":false,"flowers":false},{"sea":false,"iceCream":false},{"leafsFalling":false,"chestnut":false}];

var tempAnswersDict = {"snowman":"startContainer","skiing":"startContainer","blossoming":"startContainer","flowers":"startContainer","sea":"startContainer","iceCream":"startContainer","leafsFalling":"startContainer","chestnut":"startContainer"};

const answersDict = {"snowman":"winterContainer","skiing":"winterContainer","blossoming":"springContainer","flowers":"springContainer","sea":"summerContainer","iceCream":"summerContainer","leafsFalling":"autumnContainer","chestnut":"autumnContainer"};

var isMovedDict = {"snowman":false,"skiing":false,"blossoming":false,"flowers":false,"sea":false,"iceCream":false,"leafsFalling":false,"chestnut":false};

var tmpSeason;

var isShowBtn=false;

function HandleCheck(){
	
	console.log("handle check down");
	
	tmpSeason = document.querySelector(".winter-container");
	console.log(tmpSeason.childElementCount)
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			console.log(child.id);
			isMovedDict[child.id]=true;
			if(answerArr[0][child.id]!==undefined){
				answerArr[0][child.id]=true;
			}
		}
	}
	
	tmpSeason = document.querySelector(".spring-container");
	console.log(tmpSeason.childElementCount)
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			console.log(child.id);
			isMovedDict[child.id]=true;
			if(answerArr[1][child.id]!==undefined){
				answerArr[1][child.id]=true;
			}
		}
	}
	
	tmpSeason = document.querySelector(".summer-container");
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			console.log(child.id);
			isMovedDict[child.id]=true;
			if(answerArr[2][child.id]!==undefined){
				answerArr[2][child.id]=true;
			}
		}
	}
	
	tmpSeason = document.querySelector(".autumn-container");
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			console.log(child.id);
			isMovedDict[child.id]=true;
			if(answerArr[3][child.id]!==undefined){
				answerArr[3][child.id]=true;
			}
		}
	}
	
	let tmpElement;
	let img;
	
	let tmpWrapper;
	
	for(let i = 0; i<answerArr.length; i++){
		for(const obj in answerArr[i]){
			if(isMovedDict[obj]){
				tmpElement = document.getElementById(obj);
				img = document.createElement("img");
				tmpWrapper = document.createElement("div");
				
				if(answerArr[i][obj]){
					tmpElement.style.backgroundColor="#77dd77";
					tmpElement.style.color="#fff"
					
					img.style.marginLeft="1rem";
					img.style.height="0.6rem";
					img.style.width="0.6rem";
					img.src="../images/green-checkmark.svg";
					img.id="imgCheckmark";
					img.appendAfter(tmpElement);
					var parent=tmpElement.parentNode;
					parent.appendChild(tmpWrapper);
					tmpWrapper.appendChild(tmpElement);
					tmpWrapper.appendChild(img);
					 
					
				}else{
					tmpElement.style.backgroundColor="#FD6861";
					tmpElement.style.color="#fff"
					
					img.style.marginLeft="1rem";
					img.style.height="0.6rem";
					img.style.width="0.6rem";
					img.src="../images/red_cross.svg";
					img.id="imgCheckmark";
					img.appendAfter(tmpElement);
					tmpElement.appendChild(tmpWrapper);
					 
					var parent=tmpElement.parentNode;
					parent.appendChild(tmpWrapper);
					tmpWrapper.appendChild(tmpElement);
					tmpWrapper.appendChild(img);
					 
				}
			}
		}
	}
}

Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling);
}, false;

function HandleCheckUP(){
	
	let tmpImg;
	let tmpElement;
	let wrapper;
	
	for(let i = 0; i<answerArr.length; i++){
		for(const obj in answerArr[i]){
			if(isMovedDict[obj]){
				 
				tmpElement = document.getElementById(obj);
				wrapper=tmpElement.parentNode;
				wrapper.outerHTML=wrapper.innerHTML;
				 
				tmpElement = document.getElementById(obj);
				tmpElement.style.backgroundColor="rgb(230,172,89)";
				tmpElement.style.color="#333";
				tmpImg = document.getElementById("imgCheckmark");
				tmpImg.remove();
				  
			}
		}
	}
 
}

function HandleReset(){
	
	console.log("handle reset");
	
	
	tmpSeason = document.querySelector(".winter-container");
	console.log(tmpSeason.childElementCount)
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			isMovedDict[child.id]=true; 
		}
	}
	
	tmpSeason = document.querySelector(".spring-container");
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			isMovedDict[child.id]=true; 
		}
	}
	
	tmpSeason = document.querySelector(".summer-container");
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			isMovedDict[child.id]=true;
		}
	}
	
	tmpSeason = document.querySelector(".autumn-container");
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			isMovedDict[child.id]=true;
		}
	}
 
	for(const obj in isMovedDict){
		if(isMovedDict[obj]){
				 console.log(obj)
				 $("#" + obj).appendTo(".start-container").hide().show('slow');
				 isMovedDict[obj]=false;
		}
	} 
	
	tempAnswersDict = {"snowman":"startContainer","skiing":"startContainer","blossoming":"startContainer","flowers":"startContainer","sea":"startContainer","iceCream":"startContainer","leafsFalling":"startContainer","chestnut":"startContainer"};
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
	
	tmpSeason = document.querySelector(".winter-container");
	console.log(tmpSeason.childElementCount)
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			console.log(child.id);
			isMovedDict[child.id]=true;
			tempAnswersDict[child.id]="winterContainer";
		}
	}
	
	tmpSeason = document.querySelector(".spring-container");
	console.log(tmpSeason.childElementCount)
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			console.log(child.id);
			isMovedDict[child.id]=true;
			tempAnswersDict[child.id]="springContainer";
		}
	}
	
	tmpSeason = document.querySelector(".summer-container");
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			console.log(child.id);
			isMovedDict[child.id]=true;
			tempAnswersDict[child.id]="summerContainer";
		}
	}
	
	tmpSeason = document.querySelector(".autumn-container");
	
	if(tmpSeason.childElementCount>0){
		for (const child of tmpSeason.children){
			console.log(child.id);
			isMovedDict[child.id]=true;
			tempAnswersDict[child.id]="autumnContainer";
		}
	}
	 
	for(const obj in answersDict){
			$("#" + obj).appendTo("#" + answersDict[obj]).hide().show('slow');
	}
	 
}

function HandleShowUP(){
	
	 for(const obj in tempAnswersDict){
			 $("#" + obj).appendTo("#" + tempAnswersDict[obj]).hide().show('slow');
		}
	 
	 
}

