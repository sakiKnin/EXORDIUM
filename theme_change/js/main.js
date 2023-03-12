// function to set a given theme/color-scheme
function setTheme(themeName) {
	
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme(e) {
		let theme=e.target.id;
		if(theme==="theme1"){
			setTheme("theme-1");
		}else{
			setTheme("theme-2");
		}
    
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-2') {
       setTheme('theme-2');
   } else {
       setTheme('theme-1');
   }
})();