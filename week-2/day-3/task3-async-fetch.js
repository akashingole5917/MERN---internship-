async function loadPosts() {
 try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const data = await response.json();
  console.log("Latest Posts:", data);
 } catch (error) {
  console.log("Error loading posts:", error);
 }
}
loadPosts();
