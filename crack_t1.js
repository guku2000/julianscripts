function(context, args)
{
	//var s = #s.dtr.harvest_t1();
	//var r = s.split('\n')[0];
	//var x = "#s." + r
	var c=["red","purple","blue","cyan","orange","yellow","lime","green"];
	var e=["open", "release", "unlock"];
	var t = args.t
	var r = t.call({});
	var v = {};
	var i = 0;
	var k = 9;
	var to = false;
	var tf = false;
	while (r.substr() == -1){
		if (r.indexOf("EZ_21") != -1 ){
			while (r.indexOf("EZ_21") == -1 && to == false){
				v["EZ_21"]= e[i];
				r = t.call(v);
				i++;
				return "yay1"
			}
			to = true
			i = 0;
		}
		
		else if (r.indexOf("EZ_35") > -1 && tf== false){
			return "yay"
			while (r.indexOf("digit") == -1){
				v["EZ_35"]= e[i];
				r = t.call(v);
				i++;
			}
			while (r.indexOf("digit") > -1){
				v["digit"]= k;
				r= t.call(v);
				k--;
			}
			tf = true
			i=0;
			k=9;
		}
		
		
		
	}
}