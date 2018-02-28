
function objectPlaces(places,images,info)
{
	var obj={};
	obj.places=places;
	obj.images=images;
	obj.info=info;

	return obj
	

}

var arrPlaces_hist=['alhamra mosque-Spain','Dar Alhajar-Yemen','Petra-Jordan']
var arrImages_hist=['https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/1280px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg','http://lh4.ggpht.com/-KoTc8s1M2w0/ULom7S8AQ4I/AAAAAAAAhG8/ceNqVeX_tu0/Dar-al-Hajar-4%25255B6%25255D.jpg?imgmax=800',
'https://www.amazingplacesonearth.com/wp-content/uploads/2012/10/The_Monastery.jpg']
var arrInfo_hist=['https://en.wikipedia.org/wiki/Alhambra','https://en.wikipedia.org/wiki/Dar_al-Hajar','https://en.wikipedia.org/wiki/Petra']



var arrPlaces_Nature=['The Jungles of Borneo-Malysia','Soctra Island-Yemen','Bay of Fundy, New Brunswick'];
var arrImages_Nature=['https://cdn.stridetravel.com/cdn/778595/media/wysiwyg/borneo-monkeys-1351743_1920_processed.jpg','http://www.youngpioneertours.com/wp-content/uploads/2017/08/Socotra-Island-in-Yemen-5.jpg','https://media.cntraveler.com/photos/56cb76d2b19e7d9b785202a0/master/w_1440,c_limit/bay-of-fundy-nova-scotia-cr-getty.jpg'];
var arrInfo_Nature=['https://www.telegraph.co.uk/travel/destinations/asia/malaysia/738665/The-jungles-of-Borneo.html','https://en.wikipedia.org/wiki/Socotra','https://www.tourismnewbrunswick.ca/See/BayOfFundy.aspx'];

var arrPlaces_modern=['Borj khalifa-Dubai','New york','Malysia tower'];
var arrImages_modern=['https://aws-tiqets-cdn.imgix.net/images/content/570dfb6f179a4371b418927ec7a03f41.jpg?auto=format&fit=crop&h=320&ixlib=python-1.1.2&q=70&w=320&s=9c4fd6700054c17fce123cd7e152ae7d','http://www.iese.edu/system/images/ucm/A.6.3.5.1.8_entA4.1_imagen1_general.jpeg_20120511134749.jpg','https://images.locanto.net/Best-Malaysia-Tour-Packages-From-Mumbai/vap_1735543242.jpg'];
var arrInfo_modern=['http://www.burjkhalifa.ae/en/index.aspx','https://en.wikipedia.org/wiki/New_York_City','https://en.wikipedia.org/wiki/Petronas_Towers'];

var historical=objectPlaces(arrPlaces_hist,arrImages_hist,arrInfo_hist);
var nature=objectPlaces(arrPlaces_Nature,arrImages_Nature,arrInfo_Nature);
var modern=objectPlaces(arrPlaces_modern,arrImages_modern,arrInfo_modern);