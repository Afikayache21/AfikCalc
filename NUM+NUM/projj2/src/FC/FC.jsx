import React from "react"
 GernarateHeaderLabael = function (props) {
    ChangeColor=()=>{
        let btn=document.getElementById('ColorChanger');
    btn.style.color="blue";

    }
    return (
        <div>
            <button onClick={ChangeColor} id="ColorChanger" >Click me</button>;
        </div>
    )
}
export default GernarateHeaderLabael;
