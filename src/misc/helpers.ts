export const setItemToLocalStorage = (
  key: string,
  value: string | number | object
) => {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
};

export const getItemFromLocalStorage = (key: string) => {
  const json = localStorage.getItem(key);

  if (!json) return false;

  return JSON.parse(json);
};

export const highlightActiveLink = (navLinks: HTMLAnchorElement[]) => {
  const halfViewport = window.innerHeight / 2;
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("section")
  );

  sections.forEach((section) => {
    const { top, bottom } = section.getBoundingClientRect();
    const isHalfVisible = top <= halfViewport && bottom >= halfViewport;

    if (isHalfVisible) {
      const id = section.id;
      const activeLinkElement = document.querySelector<HTMLAnchorElement>(
        `nav a[href="#${id}"]`
      );

      if (activeLinkElement) {
        navLinks.forEach((link) => link.classList.remove("active"));
        activeLinkElement.classList.add("active");
        return;
      }
    }
  });
};

export const setAnimation = () => {
  const reveals = document.querySelectorAll<HTMLElement>("*[data-ani]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const revealElement = entry.target as HTMLElement;
        const animation = revealElement.getAttribute("data-ani");
        let delay: string | null = revealElement.getAttribute("data-delay");
        let duration: string | null =
          revealElement.getAttribute("data-duration");

        if (!delay || isNaN(parseFloat(delay))) delay = ".3";
        if (!duration || isNaN(parseFloat(duration))) duration = "1";

        revealElement.style.animation = `${animation} ${duration}s ${delay}s linear forwards`;
        setTimeout(() => {
          revealElement.removeAttribute("data-ani");
        }, Number(duration) * 1000 + Number(delay) * 1000);

        observer.unobserve(revealElement);
      }
    });
  });

  reveals.forEach((revealElement) => {
    observer.observe(revealElement);
  });
};
