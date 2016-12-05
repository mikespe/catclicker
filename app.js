var model = {
  currentcat: null,
  "cats":[
    {"name":"Fluffy", "pic":"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg", "clicks":"0"},
    {"name":"Sprinkles", "pic":"https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg", "clicks":"0"},
    {"name":"Snuffles", "pic":"http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg", "clicks":"0"},
    {"name":"Poofy", "pic":"http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg", "clicks":"0"},
    {"name":"Sneaky", "pic":"https://files.graphiq.com/stories/t2/tiny_cat_12573_8950.jpg", "clicks":"0"}
]}

var octupus = {
  init: function() {
    //set curttent cat to first
    model.currentcat = model.cats[0];
    //init the views
    catlist.init();
    catview.init();
    admin.init();
  },
  getcurrentcat: function() {
    //returns whatever the current cat is
    return model.currentcat;
  },
  getcats: function() {
    //gets all the cats
    return model.cats;
  },
  incrementclick: function() {
    //increase click property of cats object
    model.currentcat.clicks++;
    catview.render();
  },
  setcurrentcat: function(cat) {
    //current cat is now cat
    model.currentcat = cat;
  }
};

var catview = {
  init: function() {
    //stores dom elements for later
    this.catcontainer = document.getElementById('catcontainer');
    this.catname = document.getElementById('name');
    this.catcount = document.getElementById('count');
    this.catimg = document.getElementById('catpic');
    //adds event listener on img to increment clicks
    this.catimg.addEventListener('click', function() {
      octupus.incrementclick();
    })
    //renders the page
    this.render();
  },
  render: function() {
    //calls getcurrentcat from octupus to change current cat
    var currentcat = octupus.getcurrentcat();
    //changes textcontent of name and clicks
    this.catname.textContent = currentcat.name;
    this.catcount.textContent = currentcat.clicks;
    //sets catimg src to the objects url
    this.catimg.src = currentcat.pic;
  }
};

var catlist = {
  init: function() {
    //selects nav element and appends all that happens in render function to it
    this.list = document.getElementById('catnav');
    this.render();
  },
  render: function() {
    //initialize 3 variables
    var cats, elem, i;
    //get list of cats
    var cats = octupus.getcats();
    //clear text
    this.list.innerHTML = '';
    //loop over cats objects
    for(i=0; i<cats.length;i++) {
      //get current looped over cat object
      cat = cats[i];
      //create li
      elem = document.createElement('li');
      //text inside li is cats name
      elem.textContent = cat.name
      //adds click listener for each li element
      elem.addEventListener('click', (function(catCopy) {
        return function() {
          //sets current cat to clicked cat
          octupus.setcurrentcat(catCopy);
          //renders after setting current cat to clicked cat
          catview.render();
        };
      })(cat));
      //appends list for each cat to list elem
      this.list.appendChild(elem);
    }
  }
};

var admin = {
  init: function() {
    this.form = document.getElementById('form1');
    this.admin1 = document.getElementById('button1');
    this.submit = document.getElementById('button2');
    this.cancel = document.getElementById('button3');
    this.nameinput = document.getElementsByName('catname')[0];
    this.caturlinput = document.getElementsByName('caturl')[0];
    this.catcountinput = document.getElementsByName('catcount')[0];

    this.admin1.addEventListener('click', function(){
      admin.admin1.className = 'hide';
      admin.form.className = 'show';
    })

    this.submit.addEventListener('click', function() {
      cat = octupus.getcurrentcat();
      cat.name = admin.nameinput.value;
      cat.pic = admin.caturlinput.value;
      admin.form.className = 'hide';
      admin.admin1.className = 'show';
      catview.render();
      catlist.render();
    })

    this.cancel.addEventListener('click', function() {
      admin.nameinput.value = '';
      admin.caturlinput.val = '';
      admin.form.className = 'hide';
      admin.admin1.className = 'show';
    })
  },
}

//initialize octupus init, which sets default cat and view inits
octupus.init();
