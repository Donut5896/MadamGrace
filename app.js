// local reviews data
const reviews = [
    {
      id: 1,
      name: "influencer",
      job: "web developer",
      imgfile:
        "./image/person-1.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "customer",
      imgfile:
        "./image/person-2.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "customer",
      imgfile:
        " ./image/person-3.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "customer",
      imgfile:
      "./image/person-4.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
      id: 5,
      name: "customer",
      job: "influencer",
      imgfile:
        "./image/person-5.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    }
  ];

  
  
  // select item
  const date = document.getElementById("date");
  date.innerHTML = new Date().getFullYear();
  

  const imgfile = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector('.prev-btn');
  const randomBtn = document.querySelector('.random-btn');
  const nextBtn = document.querySelector('.next-btn');

  //select date
  
 
  // set starting item
  let currentItem = 0;
  
  //load initial item
  window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
  });
  
  // show person based on item
  
  function showPerson(person){
    const item = reviews[person];
    imgfile.src = item.imgfile;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show prev person
  prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
  // show next person
  
  nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show random person
  
  randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    if(currentItem > reviews.length - 1){
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  