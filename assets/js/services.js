// const navbarNav = document.querySelector(".navbar-nav");

// document.querySelector("#hamburger-menu").onclick = () => {
//   navbarNav.classList.toggle("active");
// };

const btncard = [
  {
    id: 1,
    name: "Social media",
  },
  {
    id: 2,
    name: "Photography",
  },
  {
    id: 3,
    name: "Video production",
  },
  {
    id: 4,
    name: "Web design",
  },
];

const categories = [
  ...new Set(
    btncard.map((btn) => {
      return btn;
    })
  ),
];

document.querySelector(".list-group").innerHTML = categories
  .map((btn, index) => {
    var { name, id } = btn;
    return `<li class='list-group-item py-4 p ${index === 0 ? "active-menu" : ""}' style='cursor: pointer;' onclick='filteritem(this, ${id})'>${name}</li>`;
  })
  .join("");

const itm = [
  {
    id: 1,
    image: "assets/img/photography.jpg",
    text: "Social media has become a crucial component of modern business. With the help of TRICOM, you can effectively and economically engage with customers, create brand recognition, and boost sales.",
    button: "social-media.html",
  },
  {
    id: 2,
    image: "assets/img/photography.jpg",
    text: "Photography has become a crucial component of modern business. With the help of TRICOM, you can effectively and economically engage with customers, create brand recognition, and boost sales.",
    button: "photography.html",
  },
  {
    id: 3,
    image: "assets/img/video-production.jpg",
    text: "Video production has become a crucial component of modern business. With the help of TRICOM, you can effectively and economically engage with customers, create brand recognition, and boost sales.",
    button: "video-production.html",
  },
  {
    id: 4,
    image: "assets/img/video-production.jpg",
    text: "Web design has become a crucial component of modern business. With the help of TRICOM, you can effectively and economically engage with customers, create brand recognition, and boost sales.",
    button: "web-design.html",
  },
];

const details = [
  ...new Set(
    itm.map((item) => {
      return item;
    })
  ),
];

const filteritem = (el, id) => {
  const filterdetails = details.filter(function (value) {
    if (value.id == id) {
      return value.id;
    }
  });

  if (el) {
    const elMenu = document.querySelectorAll(".list-group-item");
    elMenu.forEach(function (val) {
      val.classList.remove("active-menu");
    });
    el.classList.add("active-menu");
  }
  displayItem(filterdetails);
};

const displayItem = (items) => {
  document.getElementById("itm").innerHTML = items
    .map((item) => {
      var { image, text, button } = item;
      return `<div class="row r-services" style="height:100%;">
                  <div class="col-md-4">
                      <img src="${image}" class="img-fluid" style="height:100%;" alt="...">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body cb-services">
                          <div class="card-text">${text}</div>
                          <br>
                          <a href="${button}" class="btn btn-primary text-white rounded-5 border-0">Learn More</a>
                      </div>
                  </div>
              </div>`;
    })
    .join("");
};
filteritem(null, 1);
