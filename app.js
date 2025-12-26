function loadSection(section) {
  const content = document.getElementById("content");

  if (section === "about") {
    content.innerHTML = `
      <h2>About Me</h2>
      <p>5+ years .NET developer. Interested in scalable systems.</p>
    `;
  }

  if (section === "system") {
    content.innerHTML = `
      <h2>System Design</h2>
      <ul>
        <li>URL Shortener</li>
        <li>Cache vs DB</li>
        <li>Key Generation</li>
      </ul>
    `;
  }

  if (section === "projects") {
    content.innerHTML = `
      <h2>Projects</h2>
      <p>GitHub links coming soon.</p>
    `;
  }

  if (section === "learning") {
    content.innerHTML = `
      <h2>Learning</h2>
      <p>AWS, DSA, Design Patterns.</p>
    `;
  }
}
