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

  document.getElementById("getPosts").addEventListener("click", function () {
    // Wyświetl tekst "Loading..." podczas pobierania
    document.getElementById("answer").innerHTML = "Loading...";

    // Pobranie wszystkich postów metodą GET
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        // Wyczyść zawartość po zakończeniu ładowania
        document.getElementById("answer").innerHTML = "";

        console.log(posts);

        // Iteracja po każdym poście
        posts.forEach((post) => {
          // Tworzenie elementów HTML dla tytułu i treści posta
          const postContainer = document.createElement("div");
          postContainer.classList.add("post");

          const title = document.createElement("h3");
          title.textContent = post.title;

          const body = document.createElement("p");
          body.textContent = post.body;

          // Dodanie tytułu i treści do kontenera
          postContainer.appendChild(title);
          postContainer.appendChild(body);

          // Dodanie kontenera do głównego elementu "answer"
          document.getElementById("answer").appendChild(postContainer);
        });
      })
      .catch((error) => {
        document.getElementById("answer").innerHTML =
          "Error loading posts. Please try again later.";
        console.error("Error fetching posts:", error);
      });
  });

  document
    .getElementById("getSinglePost")
    .addEventListener("click", function () {
      // Wyświetl tekst "Loading..." podczas pobierania
      document.getElementById("answer").innerHTML = "Loading...";

      // Pobranie pojedynczego posta o ID 1 metodą GET
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((post) => {
          // Wyczyść zawartość po zakończeniu ładowania
          document.getElementById("answer").innerHTML = "";

          console.log(post);

          // Tworzenie elementów HTML dla tytułu i treści posta
          const postContainer = document.createElement("div");
          postContainer.classList.add("post");

          const title = document.createElement("h3");
          title.textContent = post.title;

          const body = document.createElement("p");
          body.textContent = post.body;

          // Dodanie tytułu i treści do kontenera
          postContainer.appendChild(title);
          postContainer.appendChild(body);

          // Dodanie kontenera do głównego elementu "answer"
          document.getElementById("answer").appendChild(postContainer);
        })
        .catch((error) => {
          document.getElementById("answer").innerHTML =
            "Error loading post. Please try again later.";
          console.error("Error fetching post:", error);
        });
    });

  document.getElementById("createPost").addEventListener("click", function () {
    // Wyświetl tekst "Processing..." podczas wysyłania
    document.getElementById("answer").innerHTML = "Processing...";

    // Dane nowego posta
    const newPost = {
      title: "Nowy post",
      body: "To jest treść nowego postu",
      userId: 1,
    };

    // Wysłanie nowego posta metodą POST
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        // Po zakończeniu, wyświetl komunikat z ID nowego posta
        document.getElementById("answer").innerHTML =
          `Dodano nowy post o ID = ${data.id}`;
        console.log(data);
      })
      .catch((error) => {
        document.getElementById("answer").innerHTML =
          "Wystąpił błąd podczas dodawania posta. Spróbuj ponownie później.";
        console.error("Error creating post:", error);
      });
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
