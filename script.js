(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        answer.innerHTML = "";
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  function showLoading() {
    document.getElementById("loadingModal").style.display = 'block';
  }
  
  function hideLoading() {
    // Simulate loading time by adding a delay (e.g., 3 seconds)
    setTimeout(() => {
      document.getElementById("loadingModal").style.display = 'none';
    }, 1000); // 3000 milliseconds = 3 seconds
  }
  

  document.getElementById("getPosts").addEventListener("click", function () {
    showLoading(); // Pokaż okno "Loading..."
  
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        hideLoading(); // Ukryj okno "Loading..."
        document.getElementById("answer").innerHTML = '';
        console.log(posts);
  
        posts.forEach((post) => {
          const postContainer = document.createElement("div");
          postContainer.classList.add("post");
  
          const title = document.createElement("h3");
          title.textContent = post.title;
  
          const body = document.createElement("p");
          body.textContent = post.body;
  
          postContainer.appendChild(title);
          postContainer.appendChild(body);
  
          document.getElementById("answer").appendChild(postContainer);
        });
      })
      .catch((error) => {
        hideLoading(); // Ukryj okno w przypadku błędu
        document.getElementById("answer").innerHTML = 'Error loading posts. Please try again later.';
        console.error("Error fetching posts:", error);
      });
  });
  

  document.getElementById("getSinglePost").addEventListener("click", function () {
    showLoading(); // Pokaż okno "Loading..."
  
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((post) => {
        hideLoading(); // Ukryj okno "Loading..."
        document.getElementById("answer").innerHTML = '';
        console.log(post);
  
        const postContainer = document.createElement("div");
        postContainer.classList.add("post");
  
        const title = document.createElement("h3");
        title.textContent = post.title;
  
        const body = document.createElement("p");
        body.textContent = post.body;
  
        postContainer.appendChild(title);
        postContainer.appendChild(body);
  
        document.getElementById("answer").appendChild(postContainer);
      })
      .catch((error) => {
        hideLoading(); // Ukryj okno w przypadku błędu
        document.getElementById("answer").innerHTML = 'Error loading post. Please try again later.';
        console.error("Error fetching post:", error);
      });
  });
  

  document.getElementById("createPost").addEventListener("click", function () {
    showLoading(); // Pokaż okno "Loading..."
  
    const newPost = {
      title: 'Nowy post',
      body: 'To jest treść nowego postu',
      userId: 1
    };
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        hideLoading(); // Ukryj okno "Loading..."
        document.getElementById("answer").innerHTML = `Dodano nowy post o ID = ${data.id}`;
        console.log(data);
      })
      .catch((error) => {
        hideLoading(); // Ukryj okno w przypadku błędu
        document.getElementById("answer").innerHTML = 'Wystąpił błąd podczas dodawania posta. Spróbuj ponownie później.';
        console.error("Error creating post:", error);
      });
  })}());
