function chgtoPic12(j){
	pic11.width="0";pic12.width="90";pic13.width="0";
    pic11.height="0";pic12.height="90";pic13.height="0";
    pic11.style.borderWidth="0px";
	pic12.style.borderWidth=j+"px";
    pic13.style.borderWidth="0px";
}

function chgtoPic13(){
	pic11.width="0";pic12.width="0";pic13.width="90";
    pic11.height="0";pic12.height="0";pic13.height="90";
    pic11.style.borderWidth="0px";pic12.style.borderWidth="0px;"
    pic13.style.borderWidth="5px";
}

function chgtoPic22(j){
	pic21.width="0";pic22.width="90";pic23.width="0";
    pic21.height="0";pic22.height="90";pic23.height="0";
    pic21.style.borderWidth="0px";
	pic22.style.borderWidth=j+"px";
    pic23.style.borderWidth="0px";
}

function chgtoPic23(){
	pic21.width="0";pic22.width="0";pic23.width="90";
    pic21.height="0";pic22.height="0";pic23.height="90";
    pic21.style.borderWidth="0px";pic22.style.borderWidth="0px;"
    pic23.style.borderWidth="5px";
}

function chgtoPic32(j){
	pic31.width="0";pic32.width="90";pic33.width="0";
    pic31.height="0";pic32.height="90";pic33.height="0";
    pic31.style.borderWidth="0px";
	pic32.style.borderWidth=j+"px";
    pic33.style.borderWidth="0px";
}

function chgtoPic33(){
	pic31.width="0";pic32.width="0";pic33.width="90";
    pic31.height="0";pic32.height="0";pic33.height="90";
    pic31.style.borderWidth="0px";pic32.style.borderWidth="0px;"
    pic33.style.borderWidth="5px";
}

function checking(){
if(event.key=='a'){chgtoPic12(2);document.getElementById("par1").value="testing";}	
	
}