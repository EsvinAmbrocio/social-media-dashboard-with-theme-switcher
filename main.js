import './src/scss/style.scss'
import './src/js/index'

document.querySelector('#app').innerHTML = `
  <header class="header container">
    <div class="header__title">
      <h1>Social Media Dashboard</h1>
      <span class="header__subtitle">Total Followers: 23,004</span>
    </div>
    <fieldset aria-label= "theme toggle" role="radiogroup" class="header__toggle toggle">
      <label for="switch-dark">Dark Mode</label>
      <label for="switch-system">System</label>
      <label for="switch-light">Light</label>

      <div class="toggle__wrapper">
        <input type="radio" name="theme" id="switch-dark">
        <input type="radio" name="theme" id="switch-system">
        <input type="radio" name="theme" id="switch-light">

        <span aria-hidden="true" class="toggle__background"></span>
        <span aria-hidden="true" class="toggle__switcher"></span>
      </div>

    </fieldset>
  </header>
  <main>
    <section>
    </section>
    @nathanf
    1987
    Followers
    12 Today

    @nathanf
    1044
    Followers
    99 Today

    @realnathanf
    11k
    Followers
    1099 Today

    Nathan F.
    8239
    Subscribers
    144 Today



    Overview - Today

    Page Views
    87
    3%

    Likes
    52
    2%

    Likes
    5462
    2257%

    Profile Views
    52k
    1375%

    Retweets
    117
    303%

    Likes
    507
    553%

    Likes
    107
    19%

    Total Views
    1407
    12%
  </main>





  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="#">Edach</a>.
  </div>
`
