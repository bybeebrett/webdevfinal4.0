const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    revealElements.forEach((element) => observer.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}
