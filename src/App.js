import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MONISHA</h1>
        <h1>Deploying React to GitHub Pages</h1>
        <p>
          Deploying a React app to GitHub Pages is straightforward. Follow these steps to get your app live:
        </p>
        <ol>
          <li>
            <strong>Prepare Your React App:</strong> Ensure your React app is working correctly and is ready for deployment.
          </li>
          <li>
            <strong>Install the GitHub Pages Package:</strong> Run <code>npm install --save-dev gh-pages</code> to install the package.
          </li>
          <li>
            <strong>Update <code>package.json</code>:</strong> Add a <code>"homepage"</code> field and update the <code>"scripts"</code> section in your <code>package.json</code> file:
            <pre>
              <code>
                {`{
  "homepage": "https://<username>.github.io/<repository-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Initialize a Git Repository:</strong> Run <code>git init</code>, <code>git add .</code>, and <code>git commit -m "Initial commit"</code>.
          </li>
          <li>
            <strong>Create a GitHub Repository:</strong> Go to GitHub and create a new repository for your project.
          </li>
          <li>
            <strong>Push Your Code to GitHub:</strong> Add the remote repository with <code>git remote add origin https://github.com/&lt;username&gt;/&lt;repository-name&gt;.git</code> and push your code.
          </li>
          <li>
            <strong>Deploy Your App:</strong> Run <code>npm run deploy</code> to build and deploy your app.
          </li>
          <li>
            <strong>Access Your Deployed App:</strong> Your app will be available at <code>https://&lt;username&gt;.github.io/&lt;repository-name&gt;</code>.
          </li>
        </ol>
        <footer>
          <p>
            For more detailed instructions, refer to the <a href="https://create-react-app.dev/docs/deployment/#github-pages" target="_blank" rel="noopener noreferrer">Create React App documentation</a>.
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;

