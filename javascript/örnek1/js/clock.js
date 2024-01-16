let Name = prompt("Lütfen Adınızı Giriniz...")
Name = Name.toUpperCase()	
let userName = document.querySelector("#myName")
userName.innerHTML = Name
function showTime() {

    let now = new Date()
    let day = now.toLocaleDateString('tr-TR', { weekday: 'long' }) 
    let time = now.toLocaleTimeString('tr-TR')   
    let myClock = document.querySelector("#myClock") 
    myClock.innerHTML = time + ' ' + day    
}
setInterval(showTime, 1000)