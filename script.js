const actionLink = document.querySelectorAll(".link-card .link-action");

console.log("actionLink : ", actionLink);

actionLink.forEach(action => {
    action.addEventListener("click", e => {
        e.preventDefault();
        navigator.clipboard.writeText(
            action.parentElement.getAttribute("href")
        );
    });
});
