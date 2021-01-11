import React from 'react'
import styled from 'styled-components';
import ReactReduxBlog from './image/React-redux blog.png';
import GoBang from './image/gobang.png';
import Todolist from './image/todolist.png';
import Form from './image/form.png';
import Restaurant from './image/restaurant.png';
import NodeJsBlog from './image/Nodejs Blog.png';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #DDDDDD;
  color: #333333;
`

const Header = styled.div`
  font-size: 48px;
  font-weight: 700;
  padding: 50px;
  color: #111111;
`

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px;
  width: 80%;
`

const PortfolioBlock = styled.div`
  width: 47%;
  margin: 0 0 60px 20px;
  & + & {
    margin-left: 20px;
  }
`

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`

const Desc = styled.div`
  margin: 20px 0;
  font-size: 20px;
  padding: 0 10px;
`

const Img = styled.div`
  & img {
    opacity: 0.4;
    width: 570px;
    height: 450px;
    font-size: 30px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px;
    transition: transform 0.1s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    &:hover {
      transform: scale(1.05);
      opacity: 1;
    }
  }
`

function Portfolio() {
  return (
    <PortfolioContainer>
      <PortfolioBlock>
        <Title>React-Redux Blog</Title>
        <Desc>以 react-redux 和 redux-thunk 實作的部落格</Desc>
        <Img>
          <a href="https://ai86109.github.io/react-redux-blog/?#/">
            <img src={ReactReduxBlog} />
          </a>
        </Img>
      </PortfolioBlock>
      <PortfolioBlock>
        <Title>GOBANG</Title>
        <Desc>以 React 寫成的五子棋遊戲</Desc>
        <Img>
          <a href="https://ai86109.github.io/react_gobang/">
            <img src={GoBang} />
          </a>
        </Img>
      </PortfolioBlock>
      <PortfolioBlock>
        <Title>Todolist</Title>
        <Desc>以 react-redux 寫成的 Todolist</Desc>
        <Img>
          <a href="https://ai86109.github.io/react-redux-todolist/">
            <img src={Todolist} />
          </a>
        </Img>
      </PortfolioBlock>
      <PortfolioBlock>
        <Title>Form</Title>
        <Desc>以 React 寫成的報名表單</Desc>
        <Img>
          <a href="https://ai86109.github.io/react_forms/">
            <img src={Form} />
          </a>
        </Img>
      </PortfolioBlock>
      <PortfolioBlock>
        <Title>餐廳網站</Title>
        <Desc>利用 Node.js 以 Express 框架，前端以 ejs 寫成，資料庫使用 MySQL 的餐廳網站</Desc>
        <Img>
          <a href="https://safe-island-06096.herokuapp.com/">
            <img src={Restaurant} />
          </a>
        </Img>
      </PortfolioBlock>
      <PortfolioBlock>
        <Title>Node.js Blog</Title>
        <Desc>利用 Node.js 以 Express 框架，前端以 ejs 寫成，資料庫使用 MySQL 的部落格</Desc>
        <Img>
          <a href="https://enigmatic-sands-03724.herokuapp.com/index">
            <img src={NodeJsBlog} />
          </a>
        </Img>
      </PortfolioBlock>
      <PortfolioBlock></PortfolioBlock>
    </PortfolioContainer>
  )
}

function App() {
  return (
    <Root>
      <Header>Derek's Portfolio</Header>
      <Portfolio />
    </Root>
  );
}

export default App;
