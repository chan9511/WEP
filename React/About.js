import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function About() {
    
    return (
        <div className="container mt-2 text-center">
            <h1 className="text-primary fw-bold">저를 소개 합니다. 😀</h1>
            <hr />
            <h4>저는 신동진이구, 제가 이 앱을 만들어써요!!</h4>
            <h4>저의 최애 걸그룹은 <span className="fw-bold text-danger">르세라핌</span>이에요</h4>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                <img src="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/05/06/2b5a4d7e-890a-4e17-8198-85c6b3a78485.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/220602_%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C_%EB%8C%80%EB%A9%B4_%ED%8C%AC%EC%82%AC%EC%9D%B8%ED%9A%8C_%EC%B9%B4%EC%A6%88%ED%95%98%2C_%EA%B9%80%EC%B1%84%EC%9B%90%2C_%EC%82%AC%EC%BF%A0%EB%9D%BC%2C_%ED%97%88%EC%9C%A4%EC%A7%84%2C_%ED%99%8D%EC%9D%80%EC%B1%84_%EB%8B%A8%EC%B2%B4_%EC%BB%B7.jpg/1200px-220602_%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C_%EB%8C%80%EB%A9%B4_%ED%8C%AC%EC%82%AC%EC%9D%B8%ED%9A%8C_%EC%B9%B4%EC%A6%88%ED%95%98%2C_%EA%B9%80%EC%B1%84%EC%9B%90%2C_%EC%82%AC%EC%BF%A0%EB%9D%BC%2C_%ED%97%88%EC%9C%A4%EC%A7%84%2C_%ED%99%8D%EC%9D%80%EC%B1%84_%EB%8B%A8%EC%B2%B4_%EC%BB%B7.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="https://ilyo.co.kr/contents/article/images/2022/0602/1654134187708171.jpg" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            <hr />
            <Link 
                to={"/"} 
                className="fw-bold text-success" 
                style={{fontSize: "20px"}}
            >
                회원 관리 하러 이동하기 😎
            </Link>
        </div>
    )
}

export default About;