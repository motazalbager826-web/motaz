document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
  
      const subject = encodeURIComponent(`رسالة من ${name}`);
      const body = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\n${message}`);
      window.location.href = `mailto:motazalbager826@gmail.com?subject=${subject}&body=${body}`;
    });
  });
  