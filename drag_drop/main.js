var answerArr = [{"snowman":false,"skiing":false},{"blossoming":false,"flowers":false},{"sea":false,"iceCream":false},{"leafsFalling":false,"chestnut":false}];

var tempAnswersDict = {"snowman":"startContainer","skiing":"startContainer","blossoming":"startContainer","flowers":"startContainer","sea":"startContainer","iceCream":"startContainer","leafsFalling":"startContainer","chestnut":"startContainer"};

const answersDict = {"snowman":"winterContainer","skiing":"winterContainer","blossoming":"springContainer","flowers":"springContainer","sea":"summerContainer","iceCream":"summerContainer","leafsFalling":"autumnContainer","chestnut":"autumnContainer"};

var isMovedDict = {"snowman":false,"skiing":false,"blossoming":false,"flowers":false,"sea":false,"iceCream":false,"leafsFalling":false,"chestnut":false};


var isShowBtn=false;


const checkBtn = document.querySelector('.check-btn');
const resetBtn = document.querySelector('.reset-btn');
const showBtn = document.querySelector('.show-btn');

var tmpItem;

$(document).ready(function(){
			$(".start-container").sortable({connectWith:".winter-container,.spring-container,.summer-container,.autumn-container"});
			 
			$(".winter-container").sortable({connectWith:".spring-container,.summer-container,.autumn-container,.start-container"});
			$(".spring-container").sortable({connectWith:".winter-container,.summer-container,.autumn-container,.start-container"});
			$(".summer-container").sortable({connectWith:".winter-container,.spring-container,.autumn-container,.start-container"});
			$(".autumn-container").sortable({connectWith:".winter-container,.spring-container,.summer-container,.start-container"});
			
			$( "#winterContainer" ).droppable({
				drop: function( event, ui ) {
					console.log("dropped");
				 
					console.log(ui.draggable.attr('id'))
					tmpItem = ui.draggable.attr('id');
					isMovedDict[tmpItem]=true;
					if(answerArr[0][tmpItem]!==undefined){
						answerArr[0][tmpItem]=true;
					}
					tempAnswersDict[tmpItem]="winterContainer";
				}
			});
			
			$( ".spring-container" ).droppable({
				drop: function( event, ui ) {
					console.log("dropped");
				 
					console.log(ui.draggable.attr('id'))
					tmpItem = ui.draggable.attr('id');
					isMovedDict[tmpItem]=true;
					if(answerArr[1][tmpItem]!==undefined){
						answerArr[1][tmpItem]=true;
					}
					tempAnswersDict[tmpItem]="springContainer";
				}
			});
			
			$( ".summer-container" ).droppable({
				drop: function( event, ui ) {
					console.log("dropped");
				 
					console.log(ui.draggable.attr('id'))
					tmpItem = ui.draggable.attr('id');
					isMovedDict[tmpItem]=true;
					if(answerArr[2][tmpItem]!==undefined){
						answerArr[2][tmpItem]=true;
					}
					tempAnswersDict[tmpItem]="summerContainer";
				}
			});
			
			$( ".autumn-container" ).droppable({
				drop: function( event, ui ) {
					console.log("dropped");
				 
					console.log(ui.draggable.attr('id'))
					tmpItem = ui.draggable.attr('id');
					isMovedDict[tmpItem]=true;
					if(answerArr[2][tmpItem]!==undefined){
						answerArr[2][tmpItem]=true;
					}
					tempAnswersDict[tmpItem]="autumnContainer";
				}
			});
			 
});

function HandleCheck(){
	
	console.log("handle check down");
	
	let tmpElement;
	let img;
	
	let tmpWrapper;
	var parent;
	
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
					img.src="./images/green-checkmark.svg";
					img.id="imgCheckmark";
					img.appendAfter(tmpElement);
					parent=tmpElement.parentNode;
					parent.appendChild(tmpWrapper);
					tmpWrapper.appendChild(tmpElement);
					tmpWrapper.appendChild(img);
					 
					
				}else{
					tmpElement.style.backgroundColor="#FD6861";
					tmpElement.style.color="#fff"
					
					img.style.marginLeft="1rem";
					img.style.height="0.6rem";
					img.style.width="0.6rem";
					img.src="./images/red_cross.svg";
					img.id="imgCheckmark";
					img.appendAfter(tmpElement);
					tmpElement.appendChild(tmpWrapper);
					 
					parent=tmpElement.parentNode;
					parent.appendChild(tmpWrapper);
					tmpWrapper.appendChild(tmpElement);
					tmpWrapper.appendChild(img);
					 
				}
			}
		}
	}
}

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
	
	for(const obj in answersDict){
			$("#" + obj).appendTo("#" + answersDict[obj]).hide().show('slow');
	}
	 
}

function HandleShowUP(){
	
	 for(const obj in tempAnswersDict){
			 $("#" + obj).appendTo("#" + tempAnswersDict[obj]).hide().show('slow');
		}
	 
	 
}