import firebase from "firebase";
chrome.runtime.onInstalled.addListener(function(){


    console.log("Background page running...");

    var provider = new firebase.auth.GoogleAuthProvider();
    var credential;
    var data;
    chrome.storage.sync.get("cred", function(res){
        if(chrome.runtime.error){
            console.error("Whoa there! We found a chrome runtime error in storage.get!");
            data = null;
        }else{
            data = res.cred;
        }
        
            
        if(data == null || data == undefined){ //if there is no storage
            //else get cred from chrome
                chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
                
                chrome.storage.sync.set({"cred": token}, function() {
                    if(chrome.runtime.error){
                        console.error("Whoa there! We found a chrome runtime error in storage.set!");
                    }
                    
                });
            });
        }else{
            //there is storage, no need to go through this again...

        }
        
    });
});
