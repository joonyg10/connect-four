# Outline

- TicTacToc의 디자인을 따 만든 simple한 사목게임을 구현
- typescript, styled-components를 통해 구현하였으며, 애니메이션 효과는 framer-motion을 styled-components와 함꼐 사용하여 구현

  <br />
  <br />

## To Start

> 1. clone this repository
> 2. npm install
> 3. npm run start

<br />
<br />

## Used Library

[![React](https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)](https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642) [![Styled Components](https://camo.githubusercontent.com/41326de293d3848e2ab0f29bf1680427128757fe6b586ceddf1097cb4eeb5ff7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c65642d2d636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c65642d636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/41326de293d3848e2ab0f29bf1680427128757fe6b586ceddf1097cb4eeb5ff7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c65642d2d636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c65642d636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465)
<img src="https://img.shields.io/badge/framer-0055FF?style=for-the-badge&logo=framer&logoColor=white&size=big" alt="framer-motion" />
<br />
<br />

## File Structure

- [Types/](./src/Types)
  - [index.d.ts](./src/Types/index.d.ts)
- [components/](./src/components)
  - [Board/](./src/components/Board)
  - [Button/](./src/components/Button)
  - [Cell/](./src/components/Cell)
  - [Modal/](./src/components/Modal)
  - [StartPage/](./src/components/StartPage)
  - [index.ts](./src/components/index.ts)
- [constant/](./src/constant)
  - [variants.ts](./src/constant/variants.ts)
- [styles/](./src/styles)
  - [globalStyle.ts](./src/styles/globalStyle.ts)
  - [style.d.ts](./src/styles/style.d.ts)
  - [theme.ts](./src/styles/theme.ts)
- [utils/](./src/utils)
  - [checkGameEnd.ts](./src/utils/checkGameEnd.ts)
- [App.tsx](./src/App.tsx)
- [index.tsx](./src/index.tsx)
- [react-app-env.d.ts](./src/react-app-env.d.ts)
- [reportWebVitals.ts](./src/reportWebVitals.ts)
- [setupTests.ts](./src/setupTests.ts)

<br />
<br/ >

# 구현사항

## 1) 시작 페이지

![](https://media.giphy.com/media/HwE8IqeJzu6Ml5nkZE/giphy.gif)

- 시작 플레이어오 O, X를 선택하는 창 생성
- 선택후 Start 클릭 시 GIF처럼 페이지가 빨려 들어가며, 게임보드가 Pop되도록 애니메이션 추가

<br />

## 2) 게임 페이지

<img src="./public/README_img/GameBoard.png" alt="gamebaord" />

- TicTacToc의 디자인과 사목의 게임룰을 접목시켜 구현
- 칸에 커서를 hover시킨 경우, 현재 차례에 해당하는 색상이 보이도록 함
- 클릭 시, 게임보드처럼 Pop되는 애니메이션 추가
- 이 때, Cell이 Pop되는 경우 턴이 바뀌어 다른 색상이 보이는 현상이 발생하지 않도록 처리 _(styled components)_

<br />

## 3) 종료

![](https://media.giphy.com/media/dfcl36y7eU7ThRqhUJ/giphy.gif)

- 상하좌우, 또는 대각선으로 4개의 같은 모양이 생겼을 경우 게임이 종료되며 위와 같이 모달이 생성
