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
const loadDarkModeState = () => {
    const darkModeState = localStorage.getItem("darkModeState");
    console.log(darkModeState)
    if (darkModeState === "dark"){
        //Add the dark classes and remove the light classes
        const body = document.getElementsByTagName("body")[0]
        body.classList.add("rootDark");
        blogForm.classList.remove("form-light");
        blogForm.classList.add("form-dark");
    } else {
        //Add the light classes and remove the dark ones
        const body = document.getElementsByTagName("body")[0]
        body.classList.remove("rootDark");
        blogForm.classList.add("form-light");
        blogForm.classList.remove("form-dark");
        location.reload();
    }
}
const setDarkModeState = (checkboxElem) => {
    //checked is dark mode ON
    if (checkboxElem.checked){
        localStorage.setItem("darkModeState", "dark");
    } else {
        localStorage.setItem("darkModeState", "light");
    }
    loadDarkModeState();
}