# PLAY_DATA_MINI_PROJECT3


<h2>기여자 (Contributors) ✨</h2>
<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/Hoonscucci">
        <img src="https://avatars.githubusercontent.com/u/132039559?v=4"width="145px;" alt=""/>
        <br />
        <sub>
          <b>이상훈</b>
        </sub>
      </a>
      <br />
      <a href="https://github.com/Hoonscucci" title="Code">🏠</a>
    </td>
    <td align="center">
      <a href="https://github.com/chan9511">
        <img src=https://avatars.githubusercontent.com/u/131934006?v=4"width="100px;" alt=""/>
        <br />
        <sub>
          <b>김찬동</b>
        </sub>
      </a>
      <br />
      <a href="https://github.com/chan9511" title="Code">🏠</a>
    </td>
  </tr>
</table>

## 리그오브 레전드 계정 검색 시스템 (그래서 님 티어가?)

![메인화면](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/0ddcda8a-0ef1-4289-b085-092666c0151b)


### 주제 탐색
##### 1. 리그오브 레전드 소환사 전적 그래프, 소환사 정보, 게임정보, 전적 로그 한눈에 보기
> 필요스킬
>  > React.js
>  >
>  > Riot API
##### 2. 리그오브 레전드 아이템 및 챔피언간 조합 분석 및 확률 통계 한눈에 보기
> 필요스킬
>  > Django(MVC패턴)
>  >
>  > Numpy,Pandas... 등 분석 기법


### 주제선정
> 프로젝트 기간이 3일인점을 고려하여 2번 주제보다는 1번 주제가 더 적합하다 생각되어 1번으로 진행 했습니다.
> 
> 프로젝트 제출 후 더 디벨롭 시켜서 2번까지 확장, 적용 해볼수 있을것 같습니다.


### 사용 라이엇 API 정리
![라이엇 api 홈페이지](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/a11b707b-9172-45d6-be3a-3986c077332c)
##### 1. SUMMONER-V4 - username 으로 검색하여 나오는 id와 puuid를 사용하여 다른 테이블에 사용
> 필요 검색 키워드 - username
> 
> 해당 유저의 정보를 반환
> 
> Riot API 에서 매치 내용이나 랭크를 보려면 account id, puuid가 필요한데 여기서 확인 가능

##### 2. LEAGUE-V4 - username으로 검색하여 나오는 id사용 하여 검색
> 필요 검색 키워드 - SUMMONERID
>
> 티어 확인가능 ex> 플래티넘
>
> 해당 티어에서의 점수 확인가능 ex> 43
>
> 랭크 통한 승, 패 확인가능


##### 3. MATCH-V5 - username에서 나오는 puuid를 사용하여 검색
> 필요 검색 키워드 - puuid
>
> puuid를 사용하여 해당 계정의 최근 매치의 matchid를 받아온다
>
> matchid를 입력하여 matchid 마다의 내용 확인 가능
>
> 같은팀, 상대팀 총 10명의 플레이어들의 해당 경기에서의 내용이 들어 있음
>
> 그중 우리가 검색하려는 계정의 정보만 추출 하여 사용하는 코드를 작성

##### 4. 챔피언 이미지 불러오기 
> 라이엇 API에는 챔피언 이미지가 없어서 따로 이미지 맵핑을 시켜서 반환했다.
>  >  https://ddragon.leagueoflegends.com/cdn/13.15.1/img/champion/ (이부분에 챔피언명.PNG를 입력)
>  >  해당코드로 검색결과 플레이한 챔프명을 받아 이미지를 동시에 띄울수 있게 하였다.


![일자별 진행플로우](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/6a4b9d55-d323-432b-9976-8c84058cda92)


![8-9 todo](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/ad71c4ab-2045-4199-b95f-43a7b0f95d8e)
![8-10 todo](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/e9795e34-a183-46e1-bf8c-7a369b127a63)
![8-11 todo](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/326ea2b3-7643-45e3-80af-3899d8189cbb)
---

### 최종 결과

![메인화면](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/0ddcda8a-0ef1-4289-b085-092666c0151b)
![검색화면_hoonscucci](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/bbec2f8c-5347-43e6-8863-63524dfb58b7)
![검색화면_타비잭스_티어볼수있음](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/9e2158ba-f7b2-4c3f-afb3-8334c7a75d8e)
![존재하지 않는 계정](https://github.com/Hoonscucci/play_data_mini_project3/assets/132039559/1810e5d2-9b04-4d6e-8a80-60b0e65d657d)

---

### 회고
# 미니 프로젝트 회고

## 1. 프로젝트 소개

- 프로젝트 주제 : 리그오브 레전드 계정 조회 서비스
- 프로젝트 기간 : 2023.08.09 ~ 2023.08.11

## 2. 프로젝트 과정

- 주제선정 : 평소 리그 오브 레전드 라는 게임에 관심이 많았고 아이템과 챔피언조합 등으로 분석 서비스를 만드려고 생각 했다는 동료의 말에 함께 하게 되었으며 기간상의 문제로 일단은 계정 조회 서비스 부터 시작하게 되었다.
             
- 라이엇 API 확인 : 라이엇 API를 통해 계정에대한 정보 및 매치 로그 확인이 가능하였다.

- 유의미하게 사용할 부분 정리 : 유의미하게 데이터를 뽑아낼수 있는 테이블(?)을 따로 정리 해두고 사용 하였다.

- 진행 FLOW와 매일 TO DO LIST 작성 : 전체적인 흐름을 보면서 그날 해야할 일들에 대해 정리하고 수행하였다. 중간 중간 회의를 통해 발전시켜야할 방안과 지금 상황에서 당장에 실현 시킬수 없는 부분을 확이하면서 프로젝트를 진행하였다. 

- 표현해야할 정보들 정리 : 계정 검색시 표현할 내용들, 전적 , kda, 게임타입, 레벨, 플레이 타임 등등

- 챔피언 이미지 맵핑 : 라이엇 API에는 챔피언 이미지가 없어서 https://ddragon.leagueoflegends.com/cdn/13.15.1/img/champion/을 사용하여 
검색한 플에이어가 플레이한 챔피언의 이미지를 맵핑 시켰다.

- 검색한 계정 최근 10게임 정보 표현 : 검색한 계정의 최근 10게임에 대한 정보를 표현하고 보기쉽게 커럼명 수정 하여 표현

- 존재하지 않는 계정 요청시 : 존재하지 않는 계정임을 나타내는 alert 창 표현 

## 3. 아쉬운점

- 코드를 좀 더 간편하고 가독성있게 작성하지 못한 부분
- 시간 문제로 아이템과 상세 매치로그를 만들지 못한 점
- 메인 페이지와 검색 페이지를 따로 분리시켜서 만들지 못한 점
- 결과물의 디테일

## 4. 느낀점

- 확실히 평소 즐겨하던 게임이기에 더 흥미롭고 데이터를 이해하는데 있어서 무리가 없었다.
- 프로젝트를 실행함에 있어 노션이나 회의록 작성등이 얼마나 유의미 한지 깨닫게 되었다.
- 아직 프로그램을 다루는 데에 있어 부족함을 많이 느꼈다. 코드를 이해하고 프로우를 알아가는데 힘써야겠음을 느꼈다.

## 5. 개선점

- 메인 페이지와 검색 페이지 분리
- 아이템과 스펠, 매치 상세로그 까지 메이킹
- 이 페이지와 데이터를 토대로 조합분석 까지 생각
- 보여지는 화면 더 예쁘게 꾸며보기
- 코드 진행에 대해 공부하고 다시 작성해보기
