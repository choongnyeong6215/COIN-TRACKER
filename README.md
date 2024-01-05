<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->

# COIN-TRACKER

가상화폐 시세 현황을 한눈에!

각종 가상화폐의 정보, 가격 변화, ohlc 데이터를 확인할 수 있습니다.

##  Skills

<p>
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
    <im src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
    <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)">
    <img src="https://img.shields.io/badge/recoil-DB7093?style=for-the-badge&logo=recoil&logoColor=white">
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</p>

## Library

캐시를 통해 api 요청을 줄이기 위하여 react query를 사용하였습니다.

코인 상세정보 화면 및 가격 차트 서브 페이지를 구현하기 위해 react router를 사용하였습니다.

props drilling으로 인한 props 추적의 불편함을 해결하고자 recoil을 사용했습니다.

컴포넌트 스타일 구분 및 props를 스타일에서도 사용하기 위해 styled-components를 사용했습니다.

주식, 가상화폐 거래소에서 자주 보이는 캔들차트를 구현하기 위해 ApexCharts를 사용하였습니다.

## open api
[코인파프리카](https://api.coinpaprika.com/v1/coins)

[코인 이미지](https://cryptocurrencyliveprices.com/img/coinId.png)