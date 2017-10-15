import firebase from "firebase";
chrome.runtime.onInstalled.addListener(function(){


    console.log("Background page running...");

    var provider = new firebase.auth.GoogleAuthProvider();
    var credential;
    var data;
    chrome.storage.sync.get("cred", function(res){
        console.log("TRYING to get cred from chrome storage...")
        if(chrome.runtime.error){
            console.error("Whoa there! We found a chrome runtime error in storage.get!");
            data = null;
        }else{
            console.log("Res:");
            console.log(res);
            console.log("Data (get .idToken to get raw string):");
            data = res.cred;
            console.log(data);
            console.log("Data get success. It still may be null at this point.");
        }
        
            
        if(data == null || data == undefined){ //if there is no storage
            //else get cred from chrome
            console.log("Data is null. Now getting auth token from chrome identity...");
            chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
                console.log("Successfully retrieved chrome auth token. Token:");
                console.log(token);
                credential = firebase.auth.GoogleAuthProvider.credential(token);
                chrome.storage.sync.set({"cred": credential}, function() {
                    console.log("Extracted firebase cred, now saving the cred in chrome storage");
                    if(chrome.runtime.error){
                        console.error("Whoa there! We found a chrome runtime error in storage.set!");
                    }
                    
                });
            });
        }else{
            console.log("There is storage!!");
        }
        
    });
});
