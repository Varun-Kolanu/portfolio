function DropdownScript() {
  const hamburger = document.getElementById("hamburger");
  const dropdown = document.querySelector("#dropdown");
  const dropbtn = document.getElementById("dropbtn");
  let top = document.getElementById("top");
  let middle = document.getElementById("middle");
  let bottom = document.getElementById("bottom");

  hamburger.addEventListener("click", () => {
    if (dropdown.classList.contains("w-0")) {
      top.classList.add("rotate-45");
      bottom.classList.add("-rotate-45", "translate-y-[9px]");
      middle.classList.remove("w-[40px]");
      middle.classList.add("w-0");
      dropdown.classList.remove("w-0", "h-0", "text-[0px]");
      dropdown.classList.add("w-[250px]", "h-[300px]", "text-[1rem]");
      dropbtn.classList.remove("hidden");
      dropbtn.classList.add("inline-block");
    } else {
      top.classList.remove("rotate-45");
      bottom.classList.remove("-rotate-45", "translate-y-[9px]");
      middle.classList.remove("w-0");
      middle.classList.add("w-[40px]");
      dropdown.classList.remove("w-[250px]", "h-[300px]", "text-[1rem]");
      dropdown.classList.add("w-0", "h-0", "text-[0px]");
      dropbtn.classList.add("hidden");
    }
  });
}

export default DropdownScript;
