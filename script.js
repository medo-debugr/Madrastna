const container = document.getElementById("message-container");
const message = "تم تهكيرك يا توماس";
const repeatCount = 100;

for (let i = 0; i < repeatCount; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  container.appendChild(paragraph);
}