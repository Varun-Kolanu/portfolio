function Scroll() {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hide");
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("hide");
      }
    });
  });

  const hideElmts = document.querySelectorAll(".hide");
  hideElmts.forEach((elmt) => observer.observe(elmt));
  const homebtn = document.getElementById("homebtn");
  const navbtn = document.getElementById("navbtn");
  const dropbtn = document.getElementById("dropbtn");
  const homenav = document.getElementById("homenav");
  const drophomenav = document.getElementById("drophomenav");
  const aboutnav = document.getElementById("aboutnav");
  const dropaboutnav = document.getElementById("dropaboutnav");
  const skillsnav = document.getElementById("skillsnav");
  const dropskillsnav = document.getElementById("dropskillsnav");
  const projectsnav = document.getElementById("projectsnav");
  const dropprojectsnav = document.getElementById("dropprojectsnav");

  let down = 0;
  let up = 1;
  let down2 = 0;
  let up2 = 1;
  window.addEventListener("scroll", () => {
    let scrolly = window.scrollY;
    if (window.innerWidth >= 768) {
      if (scrolly >= 350 && down === 0) {
        homebtn.classList.remove("w-[100%]", "h-9", "text-[16px]");
        homebtn.classList.add("w-0", "h-0", "text-[0px]");

        navbtn.classList.remove("w-0", "h-0", "text-[0px]");
        navbtn.classList.add("w-[100%]", "h-9", "text-[16px]");

        down = 1;
        up = 0;
      } else if (scrolly < 350 && up === 0) {
        navbtn.classList.remove("w-[100%]", "h-9", "text-[16px]");
        navbtn.classList.add("w-0", "h-0", "text-[0px]");

        homebtn.classList.remove("w-0", "h-0", "text-[0px]");
        homebtn.classList.add("w-[100%]", "h-9", "text-[16px]");
        up = 1;
        down = 0;
      }

      if (scrolly < 530) {
        homenav.classList.add("underline", "underline-offset-4");
        homenav.style.color = "#fb923c";
      } else {
        homenav.classList.remove("underline", "underline-offset-4");
        homenav.style.color = "white";
      }
      if (scrolly >= 530 && scrolly < 970) {
        aboutnav.classList.add("underline", "underline-offset-4");
        aboutnav.style.color = "#fb923c";
      } else {
        aboutnav.classList.remove("underline", "underline-offset-4");
        aboutnav.style.color = "white";
      }
      if (scrolly >= 970 && scrolly < 1670) {
        skillsnav.classList.add("underline", "underline-offset-4");
        skillsnav.style.color = "#fb923c";
      } else {
        skillsnav.classList.remove("underline", "underline-offset-4");
        skillsnav.style.color = "white";
      }
      if (scrolly >= 1670 && scrolly < 2940) {
        projectsnav.classList.add("underline", "underline-offset-4");
        projectsnav.style.color = "#fb923c";
      } else {
        projectsnav.classList.remove("underline", "underline-offset-4");
        projectsnav.style.color = "white";
      }
    }

    //In Mobiles
    else {
      if (scrolly >= 550 && down2 === 0) {
        homebtn.classList.remove("w-[100%]", "h-9", "text-[16px]");
        homebtn.classList.add("w-0", "h-0", "text-[0px]");

        dropbtn.classList.remove("w-0", "h-0", "text-[0px]");
        dropbtn.classList.add("w-[100%]", "h-9", "text-[16px]");
        down2 = 1;
        up2 = 0;
      } else if (scrolly < 550 && up2 === 0) {
        dropbtn.classList.remove("w-[100%]", "h-9", "text-[16px]");
        dropbtn.classList.add("w-0", "h-0", "text-[0px]");

        homebtn.classList.remove("w-0", "h-0", "text-[0px]");
        homebtn.classList.add("w-[100%]", "h-9", "text-[16px]");
        up2 = 1;
        down2 = 0;
      }

      if (scrolly < 575) {
        drophomenav.classList.add("underline", "underline-offset-4");
        drophomenav.style.color = "#fb923c";
      } else {
        drophomenav.classList.remove("underline", "underline-offset-4");
        drophomenav.style.color = "white";
      }
      if (scrolly >= 575 && scrolly < 1260) {
        dropaboutnav.classList.add("underline", "underline-offset-4");
        dropaboutnav.style.color = "#fb923c";
      } else {
        dropaboutnav.classList.remove("underline", "underline-offset-4");
        dropaboutnav.style.color = "white";
      }
      if (scrolly >= 1260 && scrolly < 2000) {
        dropskillsnav.classList.add("underline", "underline-offset-4");
        dropskillsnav.style.color = "#fb923c";
      } else {
        dropskillsnav.classList.remove("underline", "underline-offset-4");
        dropskillsnav.style.color = "white";
      }
      if (scrolly >= 2000 && scrolly < 4370) {
        dropprojectsnav.classList.add("underline", "underline-offset-4");
        dropprojectsnav.style.color = "#fb923c";
      } else {
        dropprojectsnav.classList.remove("underline", "underline-offset-4");
        dropprojectsnav.style.color = "white";
      }
    }
  });
}

export default Scroll;
