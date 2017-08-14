	var searchInput = "";
	var appId = "&appId=462dca69";
	var appKey = "&appKey=c1f740d4609f3682d195c7a514340e0a";
	var url ="https://api.nutritionix.com/v1_1/search/" + searchInput + "?results=0%3A20&fields=item_name%2Cbrand_name%2C"	+ appId + appKey;

		//gets information from url and stores them into infobox + error checking
        $.getJSON(url, function(data) {        	
			var innerHTML = '<div>';
	        if (data.response.groups[0].items[0].venue.name) {
	            innerHTML += '<strong>' + data.response.groups[0].items[0].venue.name + '</strong>';
	        }
	        if (data.response.groups[0].items[0].venue.location.address) {
	            innerHTML += '<br>' + data.response.groups[0].items[0].venue.location.address;
	        }
	        if (data.response.groups[0].items[0].venue.location.city) {
	            innerHTML += '<br>' + data.response.groups[0].items[0].venue.location.city;
	        }
	        if (data.response.groups[0].items[0].venue.location.state) {
	            innerHTML += '<br>' + data.response.groups[0].items[0].venue.location.state;
	        }
	        if (data.response.groups[0].items[0].venue.location.postalCode) {
	            innerHTML += ' ' + data.response.groups[0].items[0].venue.location.postalCode;
	        }

	        innerHTML += '</div>';
	       
			});
	      
		}.error(function(e) {
			alert("Could not request url");
		}); 
 
