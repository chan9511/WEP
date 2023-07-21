import Child from "./Child";
import "bootstrap/dist/css/bootstrap.min.css";
import sampleData from "./sampleData"

function App() {
  const subject = "React 파이팅!!";
  const sampleTag = <h4>틀딱이의 걸그룹 외우기</h4>;
  const girls = sampleData;
  const 소속사 = ["방시혁", "방시혁", "몰?루", "양현석","이수만"];
  const state = 151;

  return (
    <div className="container text-center">
      <h1>{subject}</h1>
      {sampleTag}
      <hr />
      {state > 150 ? <p>애들이 150보다 크네</p> : <p>애들이 150보다 작네</p>}
      <hr />
      {girls.map((item, index) => {
        return(
          <Child key={index} path={item.path} name={item.name}/>
        ) })}
        <hr/>
      {소속사.map((item, index) => {
        return (
          <p>
            {index+1}번째 그룹의 소속사는 {item}입니다.
          </p>
        );
      })}
      <hr />
      {/* <Child
        path={
          "https://pds.joongang.co.kr/news/component/joongang_sunday/202209/03/c9f999b5-d32d-4a06-bdfc-02aff4755ffb.jpg"
        }
        name={"누진세"}
      />
      <Child
        path={
          "https://image.ytn.co.kr/general/jpg/2021/0401/202104011123504858_d.jpg"
        }
        name={"joy현"}
      />
      <Child
        path={
          "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/10/04/75e7a815-bc3b-4eed-b343-bd7723eb5f9b.jpg"
        }
        name={"슬기"}
      /> */}
    </div>
  );
}

export default App;
