<template>
  <div class="introduction">
    <section class="portrait">
      <div class="portrait__description">Delicate Arch in Arches National Park, Moab, Utah, U.S.A.</div>
    </section>
    <header class="me">
      <div class="me__photoFrame">
        <div class="me__photo"></div>
      </div>
      <h1 class="me__name">Alec Carpenter</h1>
      <div class="me__position">Software Developer @ General Motors</div>
    </header>
    <section class="about">
      <p>I am an avid fisherman, driver, traveler, and more. On occasion I push code to <a href="https://github.com/alecgunnar">GitHub</a>.</p>
    </section>
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
    background-image: url("../assets/images/delicate_arch.jpg");
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

  .me__photoFrame,
  .me__photo {
    border-radius: 100%;
  }

  .me__photoFrame {
    background-color: #FFF;
    width: 50%;
    padding: 10px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .me__photo {
    background-image: url("../assets/images/me.jpg");
    background-repeat: no-repeat;
    background-position: -40px center;
    background-size: 135%;
    width: 100%;
    padding-bottom: 100%;
  }

  .me__name,
  .me__position {
    text-align: center;
  }

  .me__name {
    font-size: 1.75rem;
    margin: 10px 0 0;
    padding: 0;
  }

  .me__position {
    font-size: .75rem;
    margin: 0 0 20px;
  }

  .about {
    padding: 0 20px 0;

    p:first-of-type {
      margin-top: 0;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  @media only screen and (min-width: 550px) {
    body {
      background-color: darken(#FFF, 5%);
    }

    .introduction {
      background-color: #FFF;
      width: 300px;
      padding: 20px;
    }

    .about {
      padding: 0;
    }
  }
</style>
