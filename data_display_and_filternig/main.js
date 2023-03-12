const endpoint = {"dataset1":"https://exordiumgames.com/jobs/frontend/dataset_1.json", "dataset2":"https://exordiumgames.com/jobs/frontend/dataset_2.json"};
const imgUrl = "https://exordiumgames.com/jobs/frontend/";

var result = document.getElementById("resultContainer");

var table;
var inputName;
var resetBtn;
var resultSet;
var dropDownWrapper;
var dataset="dataset1";
var uniqueGenreArr=[];
var uniqueStyleArr=[];
var tmpGenre = "";
var tmpStyle = "";
var searchStr="";

async function GetData(dataset){
	  const resp = await fetch(endpoint[dataset]);
	  return resp.json();
 }
 
 const CreateHeader = (table) => {
      table.id="tableContent"
     // table.style.position="absolute";
	  
      table.style.width="100%";
	  
	  table.style.borderCollapse="collapse";
      table.style.border="1px solid black";
      table.style.margin=0;
	  table.style.marginTop="1rem";
      table.style.padding=0;
 
      let trHeader=document.createElement("tr")

      let thHeader1=document.createElement("th")
      thHeader1.innerText="Name"
      thHeader1.style.border="1px solid black"
      thHeader1.style.width="40%"
      thHeader1.style.textAlign="left"
	 
      let thHeader2=document.createElement("th")
      thHeader2.innerText="Image"
      thHeader2.style.border="1px solid black"
      thHeader2.style.width="20%"

      let thHeader3=document.createElement("th")
      thHeader3.innerText="Genre"
      thHeader3.style.border="1px solid black"
      thHeader3.style.width="30%"

      let thHeader4=document.createElement("th")
      thHeader4.innerText="Style"
      thHeader4.style.border="1px solid black"
      thHeader4.style.width="10%"
 
      trHeader.appendChild(thHeader1)
      trHeader.appendChild(thHeader2)
      trHeader.appendChild(thHeader3)
      trHeader.appendChild(thHeader4)
    
      return trHeader
}

const CreateBody = (gameName,details) =>{
		 
      let trBody=document.createElement("tr")

      let tdBody1=document.createElement("td")
      tdBody1.innerText=gameName;
      tdBody1.style.border="1px solid black"
       
      let tdBody2=document.createElement("td")
	  let img = document.createElement("img");
	  img.style.width="2rem";
	  img.style.height="2rem";
	  img.src = imgUrl + details.url;
      tdBody2.style.textAlign="center";
      tdBody2.style.border="1px solid black";
	  tdBody2.append(img);
		
      let tdBody3=document.createElement("td")
      tdBody3.innerText=details.genre;
      tdBody3.style.textAlign="center"
      tdBody3.style.border="1px solid black"
     
      let tdBody4=document.createElement("td")
      tdBody4.innerText=details.style;
      tdBody4.style.textAlign="center"
      tdBody4.style.border="1px solid black"
      
      trBody.appendChild(tdBody1)
      trBody.appendChild(tdBody2)
      trBody.appendChild(tdBody3)
      trBody.appendChild(tdBody4)
      
      return trBody
}

function HandleResetAllFilters(){
		console.log("handle reset all filters");
		tableContent.remove();
		
		table = document.createElement("table");
		table.appendChild(CreateHeader(table));
		
		GetData(dataset)
		.then(res=>{
			 
			for(const obj in res){
				 
				table.appendChild(CreateBody(obj,res[obj]))
			}
			inputName=document.getElementById("inputName");
			inputName.value="";
			tmpGenre = "";
			tmpStyle = "";
			searchStr="";
		})
		
		result.append(table);
}

function HandleNameReset(){
		console.log("handle name reset");
		tableContent.remove();
		
		table = document.createElement("table");
		table.appendChild(CreateHeader(table));
		inputName=document.getElementById("inputName");
		inputName.value="";
		searchStr="";
		
		GetData(dataset)
		.then(res=>{
			for(const obj in res){
				if(tmpGenre!==""&&tmpStyle!==""){
					if(obj.toUpperCase().includes(searchStr.toUpperCase())&&resultSet[obj].genre===tmpGenre&&resultSet[obj].style===tmpStyle){
						table.appendChild(CreateBody(obj,resultSet[obj]))
					}
				}else if(tmpGenre!==""){
					if(obj.toUpperCase().includes(searchStr.toUpperCase())&&resultSet[obj].genre===tmpGenre){
						table.appendChild(CreateBody(obj,resultSet[obj]))
					}
				}else if(tmpStyle!==""){
					if(obj.toUpperCase().includes(searchStr.toUpperCase())&&resultSet[obj].style===tmpStyle){
						table.appendChild(CreateBody(obj,resultSet[obj]))
					}
				}else{
					if(obj.toUpperCase().includes(searchStr.toUpperCase())){
						table.appendChild(CreateBody(obj,resultSet[obj]))
					}
				}
			}
			
		})
		
		result.append(table);
}

function HandleGenreDropdown(e){
	 
	tableContent.remove();
	
	table = document.createElement("table");
	table.appendChild(CreateHeader(table));
	
	tmpGenre=uniqueGenreArr[e.target.value-1];
				
	for(const obj in resultSet){
			if(tmpStyle!==""&&searchStr!==""){
				if(resultSet[obj].genre===tmpGenre&&obj.toUpperCase().includes(searchStr.toUpperCase())&&resultSet[obj].style===tmpStyle){
					table.appendChild(CreateBody(obj,resultSet[obj]))
				}
			}else if(tmpStyle!==""){
				if(resultSet[obj].genre===tmpGenre&&resultSet[obj].style===tmpStyle){
					table.appendChild(CreateBody(obj,resultSet[obj]))
				}
			}else if(searchStr!==""){
				if(resultSet[obj].genre===tmpGenre&&obj.toUpperCase().includes(searchStr.toUpperCase())){
					table.appendChild(CreateBody(obj,resultSet[obj]))
				}
			}else{
				if(resultSet[obj].genre===tmpGenre){
					table.appendChild(CreateBody(obj,resultSet[obj]))
				}
			}
	}
	
	result.append(table);
	 
}

function HandleStyleDropdown(e){
	 
	tableContent.remove();
	
	table = document.createElement("table");
	table.appendChild(CreateHeader(table));
	
	tmpStyle = uniqueStyleArr[e.target.value-1];
				
	for(const obj in resultSet){
			if(tmpGenre!==""&&searchStr!==""){
				if(resultSet[obj].style===tmpStyle&&obj.toUpperCase().includes(searchStr.toUpperCase())&&resultSet[obj].genre===tmpGenre){
					table.appendChild(CreateBody(obj,resultSet[obj]))
				}
			}else if(tmpGenre!==""){
				if(resultSet[obj].style===tmpStyle&&resultSet[obj].genre===tmpGenre){
					table.appendChild(CreateBody(obj,resultSet[obj]))
				}
			}else if(searchStr!==""){
				if(resultSet[obj].genre===tmpStyle&&obj.toUpperCase().includes(searchStr.toUpperCase())){
					table.appendChild(CreateBody(obj,resultSet[obj]))
				}
			}else{
				if(resultSet[obj].style===tmpStyle){
					table.appendChild(CreateBody(obj,resultSet[obj]))
				}
			}
	}
	
	result.append(table);
	 
}

function SetDataset(dataset) {
	console.log(dataset);
    
	GetData(dataset)
	.then(res=>{
			
			resultSet=res;
			
			let allResetBtn = document.createElement("button");
			allResetBtn.style.color = "#333";
			allResetBtn.style.background = "#FD6861";
			allResetBtn.style.border="none";
			allResetBtn.id = "resetAllBtn";
			allResetBtn.style.width="8rem";
			allResetBtn.style.height="1.5rem";
			allResetBtn.innerHTML="Reset all filters";
			allResetBtn.style.cursor="pointer";
			allResetBtn.style.marginTop="1rem";
			allResetBtn.onclick="HandleResetAllFilters(event)"
			
			allResetBtn.addEventListener('click',HandleResetAllFilters);
			
			result.append(allResetBtn);
			
			let filterNameWrapper = document.createElement("div");
			filterNameWrapper.id="filterNameWrapper";
			filterNameWrapper.style.width="100%";
			filterNameWrapper.style.float="left";
			filterNameWrapper.style.padding="1rem";
			
			let label = document.createElement("label");
			
			label.innerHTML = "Filter games by name:";
			label.id="label"
			label.style.color="#333";
			label.style.marginRight="0.5rem";
			
			
			inputName = document.createElement("input");
			inputName.id = "inputName";
			inputName.addEventListener('keyup',FilterGamesByName);
			
			result.append(label);
			
			result.append(inputName);
			
			resetBtn = document.createElement("button");
			resetBtn.style.color = "#333";
			resetBtn.style.background = "#77dd77";
			resetBtn.style.border="none";
			resetBtn.id = "resetBtn";
			resetBtn.style.width="3rem";
			resetBtn.style.height="1.5rem";
			resetBtn.innerHTML="Reset";
			resetBtn.style.cursor="pointer";
			resetBtn.style.marginLeft="1rem";
			resetBtn.onclick="HandleNameReset(event)"
			
			resetBtn.addEventListener('click',HandleNameReset);
			
			filterNameWrapper.append(label);
			filterNameWrapper.append(inputName);
			filterNameWrapper.append(resetBtn);
			
			result.append(filterNameWrapper);
			
			table = document.createElement("table");
			table.appendChild(CreateHeader(table));
				
			for(const obj in res){
				if(!uniqueGenreArr.includes(res[obj].genre)){
						uniqueGenreArr.push(res[obj].genre);
				}
				
				if(!uniqueStyleArr.includes(res[obj].style)){
						uniqueStyleArr.push(res[obj].style);
				}
				
				table.appendChild(CreateBody(obj,res[obj]))
			}
			
			dropDownWrapper = document.createElement("div");
			dropDownWrapper.id="dropDownWrapper";
			dropDownWrapper.style.padding="1rem";
			
			let genreDropDown = document.createElement("select");
			genreDropDown.id="genreDropDown";
			genreDropDown.style.overflowY="scroll";
			 
			
			let i=1;
			uniqueGenreArr.map(item=>{
				
				let option = document.createElement("option");
				option.setAttribute('value', i);
				i+=1;

				let optionText = document.createTextNode(item);
				option.appendChild(optionText);

				genreDropDown.appendChild(option);
					
			})
			
			genreDropDown.addEventListener("change",(event) => HandleGenreDropdown(event));
					
			dropDownWrapper.append(genreDropDown);
			
			let styleDropDown = document.createElement("select");
			styleDropDown.id="styleDropDown";
			styleDropDown.style.marginLeft="1rem";
			styleDropDown.style.overflowY="scroll";
			 
			
			i=1;
			uniqueStyleArr.map(item=>{
				
				let option = document.createElement("option");
				option.setAttribute('value', i);
				i+=1;

				let optionText = document.createTextNode(item);
				option.appendChild(optionText);

				styleDropDown.appendChild(option);
					
			})
			
			styleDropDown.addEventListener("change",(event) => HandleStyleDropdown(event));
			
			dropDownWrapper.append(styleDropDown);
			 
			result.append(dropDownWrapper);
			 
			result.append(table);
			
	});	 
}

function LoadDataset(e) {
		dataset=e.target.id;
		uniqueGenreArr=[];
		uniqueStyleArr=[];
		tableContent.remove();
		 
		document.getElementById("resetAllBtn").remove();
		document.getElementById("filterNameWrapper").remove();
		document.getElementById("dropDownWrapper").remove();
		
		SetDataset(dataset);
}

function FilterGamesByName(e) {
		searchStr=e.target.value;
		
		table.remove();
		table = document.createElement("table");
		table.appendChild(CreateHeader(table));
		
		for(const obj in resultSet){
				if(tmpGenre!==""&&tmpStyle!==""){
					if(obj.toUpperCase().includes(searchStr.toUpperCase())&&resultSet[obj].genre===tmpGenre&&resultSet[obj].style===tmpStyle){
						table.appendChild(CreateBody(obj,resultSet[obj]))
					}
				}else if(tmpGenre!==""){
					if(obj.toUpperCase().includes(searchStr.toUpperCase())&&resultSet[obj].genre===tmpGenre){
						table.appendChild(CreateBody(obj,resultSet[obj]))
					}
				}else if(tmpStyle!==""){
					if(obj.toUpperCase().includes(searchStr.toUpperCase())&&resultSet[obj].style===tmpStyle){
						table.appendChild(CreateBody(obj,resultSet[obj]))
					}
				}else{
					if(obj.toUpperCase().includes(searchStr.toUpperCase())){
						table.appendChild(CreateBody(obj,resultSet[obj]))
					}
				}
		}
		
		result.append(table);
}

// Immediately invoked function to set the dataset on initial load
(function () {
       SetDataset(dataset);
})();


 