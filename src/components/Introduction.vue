<template>
  <div class="introduction">
    <section class="portrait">
      <div class="portrait__description">Zion National Park, Utah, U.S.A.</div>
    </section>
    <header class="me">
      <div class="me__photo"></div>
      <h1 class="me__name">Alec Carpenter</h1>
      <div class="me__position"><a href="https://en.wikipedia.org/wiki/Software_engineer">Software Engineer</a> @ <a href="https://www.ford.com/">Ford Motor Company</a></div>
    </header>
    <section class="about">
      <p>I am an avid programmer, driver, traveler, and more&hellip; On occasion I push code to <a href="https://github.com/alecgunnar">GitHub</a> or go <a href="https://www.nps.gov/zion/index.htm">somewhere interesting</a>.</p>
    </section>
    <footer>
      <a href="https://www.linkedin.com/in/aleccarpenter">LinkedIn Profile &rarr;</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style lang="scss">
  .portrait {
    background-color: #000;
    background-image: url("../assets/images/zion_river.png");
    background-repeat: no-repeat;
    background-size: contain;
    padding-bottom: 75%;
  }

  .portrait__description {
    display: none;
  }

  .me {
    margin: -25% 0 0;
  }

  .me__photo {
    background-image: url("../assets/images/me.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100%;
    border: 10px solid darken(#FFF, 5%);
    border-radius: 100%;
    width: 50%;
    padding-bottom: 50%;
    margin: 0 auto;
  }

  .me__name,
  .me__position {
    text-align: center;
  }

  .me__name {
    font-size: 1.75rem;
    margin: 20px 0 0;
    padding: 0;
  }

  .me__position {
    font-size: .75rem;
    margin: 0 0 20px;
  }

  .about,
  footer {
    padding: 0 20px 0;
  }

  .about {
    text-align: justify;

    p:first-of-type {
      margin-top: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  footer {
    text-align: right;
    margin: 20px 0 0;
  }

  @media only screen and (min-width: 550px) {
    body {
      background-color: darken(#FFF, 5%);
    }

    .introduction {
      background-color: #FFF;
      width: 300px;
      margin: 100px auto 0;
      padding: 20px;
    }

    .about,
    footer {
      padding: 0;
    }
  }
</style>
