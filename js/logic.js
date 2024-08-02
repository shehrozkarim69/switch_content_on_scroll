document.querySelectorAll(".home-scroll_section").forEach((section) => {
    let childTriggers = section.querySelectorAll(".home-scroll_text-item");
    let childTargets = section.querySelectorAll(".home-scroll_img-item");
  
    // switch active class
    function makeItemActive(index) {
      childTriggers.forEach(trigger => trigger.classList.remove("is-active"));
      childTargets.forEach(target => target.classList.remove("is-active"));
      childTriggers[index].classList.add("is-active");
      childTargets[index].classList.add("is-active");
    }
    makeItemActive(0);
  
    // create triggers
    childTriggers.forEach((trigger, index) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top center",
        end: "bottom center",
        onToggle: ({isActive}) => {
          if (isActive) {
            makeItemActive(index);
          }
        }
      });
    });
  });