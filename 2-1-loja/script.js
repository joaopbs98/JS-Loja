document.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    console.log('loader')

    setTimeout(() => {
        document.body.remove(loader);
        console.log('loader')
    }, 3000); 
});

document.querySelector('.year').innerHTML = new Date().getFullYear()

document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var formData = new FormData(this);
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    const url = 'https://fakeNewsletter.com';
  
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(formData => {
        console.log('Resposta da API:', formData);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  });
  
  





