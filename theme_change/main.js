// function to set a given theme/color-scheme
function setTheme(themeName) {
	
    localStorage.setItem('theme', themeName);
    document.documentElement.id = themeName;
}
// function to toggle between light and dark theme
function toggleTheme(e) {
		let theme=e.target.id;
		 
		if(localStorage.getItem('theme')==theme){
			return;
		}else{
			setTheme(theme);
		}
		 	 
}
// Immediately invoked function to set the theme on initial load
(function () {
   
       setTheme('theme1');
   
})();