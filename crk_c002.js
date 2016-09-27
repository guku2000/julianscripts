function (context, args){
    var target = args.t;                // target = #s.loc
	var c=["red", "orange", "yellow", "green", "blue","cyan","lime","purple"];
    var response = target.call({});     // response = #s.loc{}.call({})
    var i = 0;                          // counter for array
   
    // response.indexOf(substring) searches for substring within response and reports back
    // an int higher than -1 if it is found, otherwise it is -1
    if ( response.indexOf("c002")!=-1 ){               // check for lock type
		for (var k = 0; k<10; k++){
			for (var i = 0;i<10;i++){
				var response = target.call ({c002: c[k] ,c002_complement: c[i]});
				if (response.indexOf("!LOCK_UNLOCKED") != -1){
					return c[i],c[k];
					break
					
				}
			}
		}
	}
	else{
		return "didnt work"
	}
   
    return response;
   
}