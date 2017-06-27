<template>
  <div>
    <h1 class="title">work experience.</h1>

    <h2>Open source projects</h2>

    <article>
      <h3>Rakun.js ( beta )</h3>
      <p>While everyone’s got tired of the current state of javascript, I’ve decided to develop my very own, minimalistic front-end framework with old-school approach (zero dependency and no fancy solutions not widely supported by common browsers).</p>
      <p>It can be easily integrated with existing solutions e.g. jQuery and jQuery plugins without any dedicated library modifications.</p>
      <p>Currently development is switched to standby mode - I've found Vue.js very similar to how I've imagined Rakun.js to be like and totally fell in love with it <3 .</p>
    </article>

    <article>    
      <h3>Inku.js ( early alpha )</h3>
      <p>A Node.js-based static site generator with web interface. FTP deployments, markdown editor with inline image uploader and json-based search feature (on generated static website) will be included.</p>
      <p>I've planned to completely rewrite it using Rakun.js, but in the end I decided to choose Vue.js as a front-end framework</p>
    </article>

    <article>    
      <h3>Scaffolder ( beta )</h3>
      <p>Inspired by Ruby on Rails scaffolding generator I’ve decided to build my own one, for <a href="http://meteor.com" target="_blank" rel="external">Meteor.js</a> in 1.0.2 version at the time of writing it. To achieve such objective, I’ve decided to use bash and write it as a straighforward function.<br>It was a double-goal project for me, because I’ve learned some basics of writing bash shell scripts.</p>
      <p>&nbsp;</p>
      <p>Due to the current state of the projects, feel free to <a href="http://twitter.com/lukaszkups" target="_blank" rel="external">ask</a> or create suitable <a href="http://github.com/lukaszkups" target="_blank" rel="external">issue</a>.</p>
    </article>

    <h2>Commercial / Freelance Projects</h2>

    <article>          
      <h3>WTP website development</h3>
      <p>WTP is the leading company in Greater Poland that specializes in cleaning lacquered steel surfaces.</p>
      <p>My task was to create web experience based on photoshop projects. To complete this task I had to create couple plugins (e.g. before/after slider).</p>
      <p>This website was created with HTML5, CSS3, JavaScript/jQuery and some simple PHP code.</p>
      <p><a href="http://wtp.net.pl" target="_blank" class="underlined">see it online</a></p>
    </article>

    <article>
      <h3>Law firm Torbé &amp; partners website development</h3>
      <p>My task was to create the Wordpress-powered website, based on photoshop documents, prepared by graphic designer.</p>
      <p>Technologies used in this project: HTML5, CSS3, JavaScript, jQuery and some simple PHP code.</p>
      <p><a href="http://kancelariaprawopracy.com/" target="_blank" class="underlined">see it online</a></p>
    </article>

    <h2>Employment history</h2>

    <article>
      <h3>2017 - now: Front-end developer at Influenster</h3>
      <p>Developing new and maintaining existing product functionalities.</p>
      <p>Optimizing development processes.</p>
      <p>Improving structure and performance of existing code.</p>
      <p>Remote work (CEST / EDT Timezones)</p>
    </article>

    <article>
      <h3>2015 - 2017: JavaScript developer at ITM Business Sp. z o.o.</h3>
      <p>Creating modular, reusable front-end for Django-based ERP application.</p>
      <p>Creating mobile apps, using Apache Cordova, Phonegap, Intel XDK and npm.</p>
      <p>Creating dedicated Single Page Applications using npm and pure JavaScript (framework free) or Angular.js / React.js + Redux.</p>
      <p>Development based on SCRUM (2 weeks sprint iteration)</p>
    </article>

    <article>
      <h3>2013 - 2015: Web developer at ITM Business Sp. z o.o. Sp. k.</h3>
      <p>Creating websites based on Wordpress and/or dedicated CMS system.</p>
      <p>Creating web applications using JavaScript and provided REST APIs.</p>
      <p>Development based on SCRUM (2 weeks sprint iteration)</p>
    </article>

    <article>
      <h3>2012 - now: Freelancer at lukaszkups.net</h3>
      <p>Creating dedicated mobile and web apps for clients from all around the globe:</p>
      <p>- Single Page Applications (SPA) based on Vue.js, Node.js, Express.js, npm and Mongodb,</p>
      <p>- Mobile applications (Andorid, iOS), made with Phonegap Cordova, npm and Intel XDK,</p>
      <p>- Wordpress or other CMS based websites,</p>
      <p>- Side projects, built with Vue.js / Cordova + Phonegap / Node.js + Express.js,</p>
      <p>- Tech blogging,</p>
      <p>- Webdesign,</p>
      <p>- Branding/Identity design</p>
    </article>
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/stylesheets/variables.scss';

$box-height: 500px;

h1.title {
  font-family: $passion-font-family;
  font-size: $font-size-100;
  color: $dark-blue;
  margin-bottom: 50px;
}

h2 {
  font-size: $font-size-3;
  font-family: $monospace-font-family;
  color: #fff;
  background: $dark-blue;
  margin: 30px 0;
  display: inline-block;
  clear: both;
  padding: 10px;
}

article + h2, h1 + h2 {
  margin-top: 10px;
  margin-bottom: 50px;
}

article {
  display: block;
  width: 100%;
  margin: 0 0 30px 0;
  clear: both;
}

article h3 {
  font-family: $monospace-font-family;
  margin-bottom: 15px;
  font-size: $font-size-2;
  color: #fff;
  background: $red;
  font-weight: 300;
  display: inline-block;
  clear: both;
  padding: 4px 5px 2px 5px;
}

article p {
  font-size: $font-size-1;
  line-height: 1.5em;
  font-family: $monospace-font-family;
  margin-bottom: 10px;
  font-weight: 300;
}

article p a {
  color: $red;
  text-decoration: none;
}

article p a.underlined {
  text-decoration: underline;
}

article p a:hover {
  text-decoration: underline;
}
  
</style>
