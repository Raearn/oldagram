const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.querySelector(".main-body")

function renderBody(arr) {

    let text = ""
    
    for (let i = 0; i < posts.length; i++) {

        text += `<section class="user-post" data-postid="${i}">

        <div class="user-header">
            <img src="${posts[i]["avatar"]}" alt="" class="user-avatar">
            <div class="user-header-text">
                <h2 class="username">${posts[i]["name"]}</h2>
                <p class="location">${posts[i]["location"]}</p>
            </div>
        </div>

        <img src="${posts[i]["post"]}" alt="van gogh picture">

        <article class="post-section">

            <div class="action-section">
                <img src="./images/like.svg" alt="" class="action-btn heart">
                <img src="./images/comment.svg" alt="" class="action-btn comment">
                <img src="./images/share.svg" alt="" class="action-btn dm">
            </div>

            <div class="likes-section">
                <h2><span class="like-count">${posts[i]["likes"]}</span> likes</h2>
            </div>

            <div class="comment-section">
                <p>
                <span class="username-comment">${posts[i]["username"]}</span> ${posts[i]["comment"]}
                </p>
            </div>

        </article>

    </section>`
    }
    main.innerHTML += text
}

renderBody()


const likeButtons = document.querySelectorAll('.heart');
let liked = false;

likeButtons.forEach(image => {
  image.addEventListener('click', () => {

    const post = image.closest('.user-post');

    if (!liked) {

        const postId = post.dataset.postid;

        const likeCount = post.querySelector('.like-count');

        let currentLikes = parseInt(likeCount.textContent);
        currentLikes++;
        likeCount.textContent = currentLikes;
        liked = true
        image.classList.add("clicked")

    } else {

        const postId = post.dataset.postid;

        const likeCount = post.querySelector('.like-count');
            
        let currentLikes = parseInt(likeCount.textContent);
        currentLikes--;
        likeCount.textContent = currentLikes;
        liked = false
        image.classList.remove("clicked")
    }
    

  });
});

