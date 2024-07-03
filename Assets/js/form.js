const blogForm = document.getElementById("blog-form");
blogForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("blog-username").value.trim();
    const title = document.getElementById("blog-title").value.trim();
    const content = document.getElementById("blog-post-content-area").value.trim();
    //If user leaves input in form blank
    if (!title || !username || !content){
        alert("Please fill out the whole form!");
        return false;
    }
    blogPostData = {
        username: username,
        title: title,
        content: content
    }
    const blogPostsStr = localStorage.getItem("blog");
    console.log(blogPostsStr);
    //Set it up here for scoping reasons
    let blogPosts = null;
    if (blogPostsStr && blogPostsStr !== undefined){
        blogPosts = JSON.parse(blogPostsStr);
        console.log(blogPosts["blogItems"]);
        blogPosts["blogItems"].push(blogPostData);
        console.log(blogPosts["blogItems"]);
    } else {
        blogPosts = {
            "blogItems": [blogPostData]
        }
        console.log("Initialized Blog Posts with first item:", blogPosts);
    }
    localStorage.setItem("blog", JSON.stringify(blogPosts));
    window.location.replace("/blog.html");
})