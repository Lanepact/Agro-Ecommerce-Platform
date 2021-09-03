window.addEventListener("DOMContentLoaded", (e) => {

    let locationBox = document.querySelector("#location");
    let location ={
        latitude: "unknown",
        longitude:"unknown",
    };

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            location ={
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            locationBox.value = JSON.stringify(Location);

        },
        (error) => {
            locationBox.value = JSON.stringify(location);

        }
    );

const order = localStorage.getItem("order");


if (order) {
    const pieOrder = JSON.parse(order);

    const orderInput = document.querySelector("#pie-order");
    orderInput.value = order;


    const pie = document.querySelector(".pie");

    const title = pie.querySelector(".title");
    const price = pie.querySelector(".price");
    const desc = pie.querySelector(".desc");

    title.innerHTML = pieOrder.title;
    price.innerHTML = pieOrder.price;
    desc.innerHTML = pieOrder.desc;

    const img = pie.querySelector("img");
    img.setAttribute("src", `images\${pieOrder.id}.png`);
    img.setAttribute("alt", pieOrder.title);
}
})