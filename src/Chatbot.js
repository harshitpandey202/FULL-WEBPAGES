import { Component } from "react";

export class chat extends Component(){
    componentDidMount(){
       
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"1830cab27a40845de18c01f3de9228a93","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});


    }
    render(){
    return(
        <></>
    )
    }
}