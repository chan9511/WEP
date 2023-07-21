import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [beforeName, setBeforeName] = useState("");
  const [beforeAge, setBeforeAge] = useState("");
  const [beforeAddr, setBeforeAddr] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(
          `http://localhost:4000/information/${params.id}`
        );
        setBeforeName(result.data.name);
        setBeforeAge(result.data.age);
        setBeforeAddr(result.data.addr);
        console.log(result.data.name);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  function modifyName(e) {
    setBeforeName(e.target.value);
  }

  function modifyAge(e) {
    setBeforeAge(e.target.value);
  }

  function modifyAddr(e) {
    setBeforeAddr(e.target.value);
  }

  // 링크로 돌아가면 되는데 버튼으로 이동시키는 방법
  function onBack() {
    navigate("/");
  }

  async function onUpdate(event) {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:4000/information/${params.id}`, {
        name: beforeName,
        age: beforeAge,
        addr: beforeAddr,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-3 text-center">
      <h1>회원 정보 수정 페이지</h1>
      <hr />
      <form>
        <label className="form-label">이름</label>
        <input
          onChange={modifyName}
          className="form-control mb-2"
          value={beforeName}
        />

        <label className="form-label">나이</label>
        <input
          onChange={modifyAge}
          className="form-control mb-2"
          value={beforeAge}
        />

        <label className="form-label">주소</label>
        <input
          onChange={modifyAddr}
          className="form-control mb-2"
          value={beforeAddr}
        />

        <hr />
        <button onClick={onUpdate} className="btn btn-primary me-2">
          수정하기
        </button>
        <button onClick={onBack} className="btn btn-warning">
          돌아가기
        </button>
      </form>
    </div>
  );
}

export default Update;
