function(context, args)
{
	//var s = #s.dtr.harvest_t1();
	//var r = s.split('\n')[0];
	//var x = "#s." + r
	var c=["red","purple","blue","cyan","orange","yellow","lime","green"];
	var e=["open", "release", "unlock"];
	var t = args.t
	var r = t.call({});
	var ld = 0;
	var rs = r.split("\n")[ld];
	var rd = r.split("\n")[ld+1];
	var v = {};
	var i = 0;
	var k = 9;
	while (rs.substr(1,10)== "LOCK_ERROR"){

		if (rd.indexOf("EZ_21") != -1 ){
			while (rs.substr (6,19) != "UNLOCKED EZ_21" || r.substr (16,35) != "Connection terminated"){
				v["EZ_21"]= e[i];
				r = t.call(v);
				rs = r.split("\n")[ld];
				i++;
			}
		}
		
		else if (rd.indexOf("EZ_35") != -1){
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
		}
		
		ld++;
		rs = r.split("\n")[ld];
		rd = r.split("\n")[ld+1];
		i=0;
		k=9;
		
	}
return r
}