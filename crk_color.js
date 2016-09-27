function(context, args)
{
	var c=["red","purple","blue","cyan","orange","yellow","lime","green"];
	var t = args.t
	var r = t.call({});
	var i 
	var k 
	while (r.indexOf("K_ER") != -1){
	if (r.indexOf("c001")){
		i=0
		while (r.indexOf("D c001") == -1){
			r = t.call({c001:c[i]})
			i++
		}	
	}
	if (r.indexOf("c002") == -1){
		i=0
		k=9
		while (r.indexOf("D c002") == -1){
			r = t.call({c002:c[i],c002_complement:c[k]})
			i++
			k--
		}
	}
}}
