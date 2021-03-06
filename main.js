window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
    function toggleMenu(){
      var menuToggle = document.querySelector('.toggle');
      var menu = document.querySelector('.menu');
      menuToggle.classList.toggle('active');
      menu.classList.toggle('active');
    } 


    document.querySelector("form").addEventListener("submit", handleSubmit);

    const handleSubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
    //   let myForm = document.getElementById('name');
      let formData = new FormData(name,email,message)
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))
    }
