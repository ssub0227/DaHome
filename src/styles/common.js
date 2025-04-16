import { createGlobalStyle } from 'styled-components';

const CommonCSS = createGlobalStyle`

  :root{
    --brown:#472d30;
    --pinkbrown:#723d46;
    --pink:#e26d5c;
    --yellow:#ffe1a8;
    --light-yellow:#fff5e2;
    --light-green:#c9cba3;
    --white:#fff;
  }

  .App{
    width:100%;
    height: 100%;
  }

  main{
    padding:10vh 3vh 5ch 3vh;
    background-color: var(--light-yellow);
    display: flex;
    justify-content: center;
    width: 100%;
    height: 95vh;
  }

  main>div{
    width: 100%;
  }

  .title{
    font-size: 4vh;
  }

  .titleImpact{
    font-size: 5vh;
  }

  .subTitle{
    margin-top: 1.5vh;
    font-size:2vh;
  }

  .displayNo{
    display: none;
  }

  .displayYes{
    display: block;
  }

`

export default CommonCSS;