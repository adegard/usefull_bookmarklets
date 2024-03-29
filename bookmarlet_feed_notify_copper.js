async function fetchData() {
    const res=await fetch('https://app.copper.com/api/v1/companies/190749/feed/?activity_type_id=-1&version=2&view=slim&limit=11&offset=0', {
					  "headers": {
						"accept": "application/json, text/javascript",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
						 "mode": "no-cors",
						  "Access-Control-Allow-Origin": "*"
					},
					  "body": null,
					  "method": "GET"
				}
		)

   const record =await res.json();
	
	if(record.logs[0].target ==null){
		var subject = undefined;
		}else{
		var subject = record.logs[0].target.subject;
	}
	
	if(localStorage.getItem('lastfeedCopper')==undefined || subject==undefined){
			localStorage.setItem('lastfeedCopper', subject);
			console.log("not an email");
		}else{
		if(localStorage.getItem('lastfeedCopper')==subject){
			console.log("same one");
			}else{
				localStorage.setItem('lastfeedCopper', subject)
				console.log("updated");
				alert(subject);
				//add sound
 					var audio = new Audio('https://adegard.github.io/markdown-cv/media/mixkit-cooking-stopwatch-alert-1792.wav');
					audio.addEventListener('canplay', () =>{
						audio.play();
					}); 
				//change tab title
				window.document.title= record.logs[0].source.name;
			}
	}
}

fetchData(); setInterval(fetchData, 180000);
