# vue-trello-clone

## 목차

* [프로젝트 정보](#프로젝트-정보)
  * [프로젝트 환경](#프로젝트-환경)
  * [프로젝트 구조](#프로젝트-구조)
* [시작하기](#시작하기)
  * [설치 방법](#설치-방법)
* [사용 방법](#사용-방법)


## 프로젝트 정보

<p align="center">
<img src="http://soft91.ipdisk.co.kr:80/publist/HDD1/%EB%AC%B8%EC%84%9C/Git/vue-trello-clone/vue-trello-clone(main).png" width="400" height="400"/>
<img src="http://soft91.ipdisk.co.kr:80/publist/HDD1/%EB%AC%B8%EC%84%9C/Git/vue-trello-clone/vue-trello-clone(list).png" width="500" height="400"/>
</p>

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

## 사용 방법
<https://trello.com/> 참고
