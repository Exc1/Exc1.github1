const datesInfo = document.getElementById('for-select')
const select = document.getElementById('select')

select.addEventListener('input', fakeChange)

function fakeChange() {
    datesInfo.style.opacity = 0
    setTimeout(() => datesInfo.style.opacity = 1, 500)
}

function changeDota() {
    document.getElementById("welcome").style.backgroundImage = "url('../img/dota.jpg')";
    document.getElementById("btn-dota").style.display= "none";
    document.getElementById("btn-csgo").style.display = "flex";
}

function changeCs() {
    document.getElementById("welcome").style.backgroundImage = "url('../img/csgo.jpg')";
    document.getElementById("btn-dota").style.display= "flex";
    document.getElementById("btn-csgo").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
		
		el_autohide = document.querySelector('.autohide');
		
		// add padding-top to bady (if necessary)
		// navbar_height = document.querySelector('.navbar').offsetHeight;
		// document.body.style.paddingTop = navbar_height + 'px';

		if(el_autohide){
			
			var last_scroll_top = 0;
			window.addEventListener('scroll', function() {
	       		let scroll_top = window.scrollY;
		       if(scroll_top < last_scroll_top) {
		            el_autohide.classList.remove('scrolled-down');
		            el_autohide.classList.add('scrolled-up');
		        }
		        else {
		            el_autohide.classList.remove('scrolled-up');
		            el_autohide.classList.add('scrolled-down');
		        }
		        last_scroll_top = scroll_top;

			}); 
			// window.addEventListener

		}
		// if
		
	}); 
	// DOMContentLoaded  end



function openNav() {
    document.getElementById("sideNavigation").style.width = "300px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
//# sourceMappingURL=main.js.map
