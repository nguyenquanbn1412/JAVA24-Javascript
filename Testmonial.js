let users = [
    {
        name: "John Doe",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        color: "#ff0000"
    },
    {
        name: "Jane Smith",
        quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        color: "#326969"
    },
    {
        name: "Alice Johnson",
        quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        color: "#29302c"
    },
    {
        name: "Bob Williams",
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://randomuser.me/api/portraits/women/76.jpg",
        color: "#ff00ff"
    },
    {
        name: "Mike Brown",
        quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        color: "#4a4a0b"
    }
];

let testimonialsContainer = document.querySelector(".testimonials-container");
let authors = testimonialsContainer.querySelectorAll(".author");

authors.forEach(function (author, index) {
    author.addEventListener("click", function () {
        authors.forEach(function (author) {
            author.classList.remove("selected");
        });
        author.classList.add("selected");
        let selectedUser = users[index];
        testimonialsContainer.style.background = selectedUser.color;
        document.querySelector(".text").textContent = selectedUser.quote;
        document.querySelector(".name").textContent = selectedUser.name;
    });
});
