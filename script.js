// console.log ("apples")
// window.addEventListener("keyup", (e)=>console.log(e.key))

const pressed = [];
const secretCode = "lolipop";



window.addEventListener("keyup", (e)=>{
    console.log(e.key);
    pressed.push(e.key)
    // console.log (pressed)
    pressed.splice(-secretCode.length-1, pressed.length-secretCode.length)
    console.log (pressed.join(""))
    if (pressed.join("")===secretCode)
    {
        console.log("Ding! Ding!");
        cornify_add();
    }
})