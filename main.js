const click_anywhere_btn = document.getElementsByTagName("h1");
function random_num(){
    return Math.floor(Math.random()  * 255);
}
document.addEventListener("click", ()=>{
console.log(random_num());
document.body.style.backgroundColor ='rgba('+random_num()+','+random_num()+','+random_num()+'\)';
click_anywhere_btn.style.backgroundColor ='rgba('+random_num()+','+random_num()+','+random_num()+'\)';


});

