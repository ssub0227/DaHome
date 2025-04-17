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
    --light-green-shadow:#677e6b;
  }

  .App{
    width:100%;
    height: 100%;
  }

  main{
    padding-top:10vh;
    background-color: var(--light-yellow);
    display: flex;
    justify-content: center;
    width: 100%;
  }

  main>div{
    width: 100%;
    max-width:768px;
    margin:5% 0;
    padding:5%;
    background-color:var(--light-green);
    border-radius: 30px;
    box-shadow: 1px 1px 10px 1px var(--light-green-shadow);
  }

  .titleImpact{
    font-size: 5vh;
  }

  .displayNo{
    display: none;
  }

  .displayYes{
    display: block;
  }

`

export default CommonCSS;