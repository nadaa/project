
function objectPlace(place,image,country,info,category)
{
	var obj={};
	//properties
	obj.place=place;
	obj.image=image;
	obj.country=country;
	obj.info=info;
	obj.category=category;

	// methods

	return obj
	
}


function getCategoryList(cat){
	var catList=[];
	for(var i=0;i<placesArr.length;i++)
	{	if(placesArr[i].category===cat)
			catList.push(placesArr[i])
	}
	return catList;
}





var categories=['History','Nature','Modern'];

// add a new category 



// define instances

var allPlaces=[]  // array of objects

var histPlace1=objectPlace('Alhambra','imgs/hist/alhambra.jpg','Spain','is a palace and fortress complex located in Granada, Andalusia, Spain. It was originally constructed as a small fortress in AD 889 on the remains of Roman fortifications, and then largely ignored until its ruins were renovated and rebuilt in the mid-13th century by the Nasrid emir Mohammed ben Al-Ahmar of the Emirate of Granada, who built its current palace and walls. It was converted into a royal palace in 1333 by Yusuf I, Sultan of Granada";','history');
var histPlace2=objectPlace('Dar Alhajar','imgs/hist/daralhajar.jpg','Yemen','is a royal palace located in Wadi Dhar near Sanaa, Yemen.It was the residence of Imam Yahya Muhammad Hamid ed-Din, ruler of Yemen. The building on top of a rock was built as a summer retreat.','history');
var histPlace3=objectPlace('Petra','imgs/hist/petra.jpg','Jordan','Petra is a famous archaeological site in Jordans southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the Rose City.','history');



// a function that return a list of a given category	



var naturePlace1=objectPlace('The Jungles of Borneo','imgs/nature/borneo.jpg','Malysia','Borneo is home to one of the oldest and most biodiverse jungle in the world at around 140 million years old it stands proudly even over the mighty amazon rainforest. It is host to some of the most weird and wonderful wildlife in the world and countless endemic species of flora and fauna. If you are a nature lover then you are in the right place','nature');
var naturePlace2=objectPlace('Socatra Island','imgs/nature/socatra.jpg','Yemen','Socotra, also spelled Soqotra, is an archipelago of four islands located in the Arabian Sea, the largest island of which is also known as Socotra.','nature');
var naturePlace3=objectPlace('Bay of fundy','imgs/nature/bay-of-fundy.jpg','Canada','The Bay of Fundy [or Fundy Bay] is a bay between the Canadian provinces of New Brunswick and Nova Scotia, with a small portion touching the state of Maine. It has the highest tidal range in the world. The Guinness Book of World Records (1975) declared that Burntcoat Head, Nova Scotia has the highest tides in the world.','nature');

var modernPlace1=objectPlace('Borj khalifa','imgs/modern/burjkhalifa.png','UAE','known as the Burj Dubai before its inauguration, is a megatall skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m (2,722 ft) and a roof height (excluding antenna) of 828 m (2,717 ft), the Burj Khalifa has been the tallest structure in the world since its topping out in late 2008.[4][9]￼Pertiently it is also called Burj Al Arab for being the tallest building in United Arab Emirates. It was later named Burj Khalifa on the 3rd anniversary in 2011.','modern');
var modernPlace2=objectPlace('New York','imgs/modern/newyork.jpg','USA','New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.','modern');
var modernPlace3=objectPlace('Forest City','imgs/modern/forestcity.jpg','Malysia','FOREST CITY at Malaysia consists of four man-made islands, total land area of 1,386ha - about three times the size of Singapore Sentosa island.','modern');


var placesArr=[histPlace1,histPlace2,histPlace3,naturePlace1,naturePlace2,naturePlace3,modernPlace1,modernPlace2,modernPlace3];

function shuffle(){
	for(var i=0;i<placesArr.length;i++){
		var randIndex=Math.floor(Math.random() * placesArr.length);
		var temp=placesArr[i];
		placesArr[i]=placesArr[randIndex];
		placesArr[randIndex]=temp;
		}



}


