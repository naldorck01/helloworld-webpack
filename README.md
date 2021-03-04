<main>

  <section>
    <article>
      <p align="center"> 
        <img alt="Tech" src="docs/assets/img/tech.jpg" title="Tech" width="400" />      
      </p>
    </article>
  </section>

  <br />

  <section>
    <article>
      <h1>
        <img src="docs/assets/img/javascript.png" alt="Javascript" title="Javascript" /> 
        helloworld:<a href="https://webpack.js.org/" rel="external" title="Webpack">webpack</a>
      </h1>
      <p>
        At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
      </p>
    </article>
  </section>

  <br />

  <section>
    <article>
      <h2>Preview</h2> 
      <p align="center"> 
        <img alt="Theme preview" src="docs/assets/img/theme-preview.png" title="Theme preview" width="400" />      
      </p>
    </article>
  </section>
  
  <br />

  <section>
    <article>
      <h2>Installation</h2> 
      <p>Using NPM:</p>
      <table>
        <thead>
          <tr>
            <td><strong>Command</strong></td>
            <td><strong>Description</strong></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>npm install -D webpack webpack-cli</code></td>
            <td>Basic webpack dependencies</td>
          </tr>
          <tr>
            <td><code>npm install -D babel-loader @babel/core</code></td>
            <td>Work babel with webpack. Ensure javascript compatibility between browsers.</td>
          </tr>
          <tr>
            <td><code>npm install -D @babel/preset-env</code></td>
            <td>Use the latest ecmascript features</td>
          </tr>
          <tr>
            <td><code>npm install -D html-webpack-plugin</code></td>
            <td>Work with .html files</td>
          </tr>
          <tr>
            <td><code>npm install -D css-loader</code></td>
            <td>The css-loader interprets @import and url() like import/require() and will resolve them.</td>
          </tr>
          <tr>
            <td><code>npm install -D html-webpack-plugin</code></td>
            <td>This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.</td>
          </tr>
          <tr>
            <td><code>npm install -D node-sass sass-loader</code></td>
            <td>Work with  sass</td>
          </tr>
        </tbody>
      </table>      
    </article>
  </section>

  <br />

  <section>
    <article>
      <h2>Core files</h2> 
      <table>
        <thead>
          <tr>
            <td><strong>File</strong></td>
            <td><strong>Description</strong></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>./webpack.config.js</code></td>
            <td>Default file that contains all the webpack configuration for the current project</td>
          </tr>
          <tr>
            <td><code>./.babelrc</code></td>
            <td>Settings to work with babel in the current project</td>
          </tr>
        </tbody>
      </table> 
    </article>
  </section>

  <br />

  <section>
    <article>
      <h2>Scripts</h2>
      <table>
        <thead>
          <tr>
            <td><strong>Command</strong></td>
            <td><strong>Description</strong></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>npx webpack</code></td>
            <td>Compile the files within "src" folder and create a folder called "dist"</code>
          </tr>
          <tr>
            <td><code>webpack --mode development</code></td>
            <td>Compile in development mode</code>
          </tr>
          <tr>
            <td><code>webpack --mode production</code></td>
            <td>Compile in production mode. This is the default mode.</code>
          </tr>
          <tr>
            <td><code>webpack --mode production --config webpack.config.js</code></td>
            <td>Compile in production mode and custom webpack config file</code>
          </tr>
        </tbody>
      </table>
    </article>
  </section>

  <hr />

  <section>
    <article>
      <p>
        Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        <br />
        <a href='https://www.freepik.com/vectors/technology'>Technology vector created by vectorjuice - www.freepik.com</a>
      </p>      
    </article>
  </section>

</main>
