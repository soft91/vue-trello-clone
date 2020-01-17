# vue-trello-clone

## 목차

* [프로젝트 정보](#about-the-project)
  * [프로젝트 환경](#project-1)
  * [프로젝트 구조](#project-2)
* [시작하기](#getting-started)
  * [설치 방법](#installation)
* [사용 방법](#usage)


## 프로젝트 정보

### 프로젝트 환경

1. Vue.js (@vue/cli 4.1.1)
2. Typescript
3. Node.js Express
4. Mysql
5. Element-UI

### 프로젝트 구조

```
$ vue-trello-clone
trello-clone/
├── src
│   ├── components
│   │   ├── card
│   │   │   ├── Card.vue                           # Card의 리스트 및 추가
│   │   │── list
│   │   │    ├── List.vue                          # 추가된 List의 Layout (Child: Card)
│   │   │    └── ListContainer.vue                 # List의 추가 및 생성된 List의 Wrapper
│   ├── router
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
└── trello-server
    ├── router
    │   ├── board.js
    │   ├── card.js
    │   ├── list.js
    └── server.js
```

## 시작하기

### 설치 방법

1. Clone the repo
```sh
git clone https://github.com/soft91/vue-trello-clone.git
```
2. Install NPM packages
```sh
npm install
```

## 사용 방법(#usage)
<https://trello.com/> 참고
