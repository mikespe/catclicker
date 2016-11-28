var json = {
  "cats":[
    {"name":"Fluffy", "pic":"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg", "clicks":"0"},
    {"name":"Sprinkles", "pic":"https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg", "clicks":"0"},
    {"name":"Snuffles", "pic":"http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg", "clicks":"0"},
    {"name":"Poofy", "pic":"http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg", "clicks":"0"},
    {"name":"Sneaky", "pic":"https://files.graphiq.com/stories/t2/tiny_cat_12573_8950.jpg", "clicks":"0"}
]}

var jso = json.cats;

for(i=0; i<json.cats.length; i++) {
  $('body').append('<div><h2 id="name'+i+'">'+jso[i].name+'<h2 id="count">'+jso[i].clicks+'</h2><img src="'+jso[i].pic+'">');
  $('ul').append('<li><a href="#name'+i+'">'+jso[i].name+'</a></li>');
}


function addnumber(e) {
  var el = $(this)[0].previousSibling;
  var num = parseInt(el.innerHTML);
  var newnum = num + 1;
  el.innerHTML = newnum;
}

var img = $('img');
img.on("click", addnumber);
