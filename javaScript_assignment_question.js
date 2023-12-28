let height = document.getElementById("s_height")
let width = document.getElementById("s_width")

let radius = document.getElementById("radius")
let volume = document.getElementById("volume")

let protcol = document.getElementById("protcol")
let hostName = document.getElementById("HostName") 

let counting_value = document.getElementById("counting_value")

let imageScreen = document.getElementById("img_screen")
let imageButton = document.getElementById("img_btn")

let dropDownValue = document.getElementById("colorSelect")
let sampleText = document.getElementById("sample_text")

let form = document.getElementById("form1")

let DdownList = document.getElementById("colorSelectDelete")

let imgCount =1

const deleteSelected = () =>{

    let selectedValue = DdownList.value

    DdownList.remove(selectedValue)

}


imageButton.addEventListener('click', function() {

    if(img==2){
        imageScreen.src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg"
    }

    if(img==3){
        imageScreen.src="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
    }

   imgCount ++;

});

const changeColor=()=>{

    let value = dropDownValue.value

    if(value=="red"){
        sampleText.style.color='red'
    }
    if(value=="green"){
        sampleText.style.color='green'
    }
    if(value=="white"){
        sampleText.style.color='white'
    }
    if(value=="black"){
        sampleText.style.color='black'
    }
}

const getDetails = () =>{
    let f_name= form.elements["fname"].value
    let l_name= form.elements["lname"].value
    console.log("f_name",f_name)
    console.log("l_name",l_name)
    return false;
}

const getSphereVolume=()=>{
    let calculate = (4/3)*3.14159265359*radius.value**3;
    volume.value = calculate;
}

const openSpecificUrl = ()=>{
    window.open('https://webapp.entri.app/home','_blank')
}

const reLoad = () =>{
    window.location.reload();
}

const redirect = () =>{
    window.location.href='https://docs.google.com/document/d/1H5aRoGI3cwNIMYH0JWvudtVA0VXHfPjnz46zy-zMCTg/edit'
}

const getUrl=()=>{
    protcol.innerText = window.location.protocol
    hostName.innerText = window.location.hostname
}

const getScreenSize=()=>{
    height.innerText=screen.height
    width.innerText=screen.width
}

const clearScreenSize=()=>{
    height.innerText=0
    width.innerText=0
}

const counter=()=>{

    let counter =10;

    let interval = setInterval(counting,1000)

    function counting(){
        if(counter==0){
        clearInterval(interval);
          alert("counter ends")
        }else{
            counter--;
            counting_value.innerText = counter;
        }
        

    }
   
}