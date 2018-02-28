
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

var histPlace1=objectPlace('Alhambra','imgs/hist/alhambra.jpg','Spain','https://en.wikipedia.org/wiki/Alhambra','history');
var histPlace2=objectPlace('Dar Alhajar','imgs/hist/daralhajar.jpg','Yemen','https://en.wikipedia.org/wiki/Dar_al-Hajar','history');
var histPlace3=objectPlace('Petra','imgs/hist/petra.jpg','Jordan','https://en.wikipedia.org/wiki/Petra','history');



// a function that return a list of a given category	



var naturePlace1=objectPlace('The Jungles of Borneo','imgs/nature/borneo.jpg','Malysia','https://www.telegraph.co.uk/travel/destinations/asia/malaysia/738665/The-jungles-of-Borneo.html','nature');
var naturePlace2=objectPlace('Socatra Island','imgs/nature/socatra.jpg','Yemen','https://en.wikipedia.org/wiki/Socotra','nature');
var naturePlace3=objectPlace('Bay of fundy','imgs/nature/bay-of-fundy.jpg','Canada','https://www.tourismnewbrunswick.ca/See/BayOfFundy.aspx','nature');

var modernPlace1=objectPlace('Borj khalifa','imgs/modern/burjkhalifa.png','UAE','http://www.burjkhalifa.ae/en/index.aspx','modern');
var modernPlace2=objectPlace('New York','imgs/modern/newyork.jpg','USA','https://en.wikipedia.org/wiki/New_York_City','modern');
var modernPlace3=objectPlace('Forest City','imgs/modern/forestcity.jpg','Malysia','http://www.forestcitycountrygarden.com.my/','modern');


var placesArr=[histPlace1,histPlace2,histPlace3,naturePlace1,naturePlace2,naturePlace3,modernPlace1,modernPlace2,modernPlace3];

function shuffle(){
	for(var i=0;i<placesArr.length;i++){
		var randIndex=Math.floor(Math.random() * placesArr.length);
		var temp=placesArr[i];
		placesArr[i]=placesArr[randIndex];
		placesArr[randIndex]=temp;
		}



}


