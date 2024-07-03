const main = document.getElementsByTagName("main")[0];

const loadBlogPosts = () => {
    blogPosts = JSON.parse(localStorage.getItem("blog"));
    blogItems = blogPosts["blogItems"].reverse();
    const darkModeState = localStorage.getItem("darkModeState");
    for (blogPost of blogItems){
        const blogPostEl = document.createElement("article");
        blogPostEl.innerHTML = `
        <h3>Username: ${blogPost.username}</h3>
        <h3>Title: ${blogPost.title}</h3>
        <br>
        <p>${blogPost.content}</p>
        `
        blogPostEl.classList.add("blog-post");
        blogPostEl.classList.add(darkModeState === "dark" ? "blog-post-dark" : "blog-post-dark")
        main.appendChild(blogPostEl);
    }
}
loadBlogPosts();