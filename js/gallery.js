const images = [
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg>",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg>",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg>",
    description: "Aerial Beach View",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg>",
    description: "Flower Blooms",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg>",
    description: "Alpine Mountains",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg>",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg>",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg>",
    description: "Nature Landscape",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg>",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");

const galleryMarkup = images.map(
  ({ preview, original, description }) =>
      `<li class="gallery-item">
          <a class="gallery-link" href="${original.substring(
            1,
            original.length - 1
          )}">
            <img
              class="gallery-image"
              src="${preview.substring(1, preview.length - 1)}"
              data-source="${original.substring(1, original.length - 1)}"
              alt="${description}"
            />
          </a>
        </li>`
  ).join("");

gallery.innerHTML = galleryMarkup;

const img = document.getElementsByTagName("IMG");
for (var i = 0; i < img.length; i++) {
  // adding event listener to the 'img' to make the size bigger when hovered
  img[i].addEventListener("mouseenter", (event) => {
    event.target.style.transform = "scale(1.04)";
  });
  //  adding event listener to the 'img' to remove the changes of the size
  img[i].addEventListener("mouseleave", (event) => {
    event.target.style.transform = "scale(1)"; // Reset scale
  });
}


gallery.addEventListener("click", imageClick);

function imageClick(event) {
  event.preventDefault();
  const imageData = event.target;
  if (imageData.tagName !== "IMG") return;

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${imageData.dataset.source}">`
  );

  instance.show();
  
  function handleKeydown(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleKeydown);
    }
  }
  document.addEventListener("keydown", handleKeydown);
}