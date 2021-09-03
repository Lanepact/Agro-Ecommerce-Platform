
window.addEventListener('DOMContentLoaded', function(e){
    const orderButtons = document.querySelectorAll('button[data-order]');
    

    orderButtons.forEach( button =>{

        button.addEventListener('click', (e) => {
            const button = e.currentTarget;
            const container = button.parentNode;
            // console.log('button is clicked')

            const order ={
                id: button.getAttribute('data-order'),
                title: container.querySelector('.title').innerText,
                price: container.querySelector('.price').innerText,
                desc: container.querySelector('.desc').innerText
            };

          localStorage.setItem('order', JSON.stringify(order));

          const url = window.location.href.replace('Products.html', 'order.html');
          window.location.href = url;

        });

    });
});