import React from 'react'
import clangImage from "../Images/c-programming-logo.png";
import javaImage from "../Images/java-logo.png";
import csharpImage from "../Images/c-sharp-logo.png";
import profileImage from "../Images/user_icon.png";

const Homepage = () => {
  return (
    <div className="container text-center">
      <h1>Kazuya Terasawa</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        職業訓練にてC言語/Java/JSP/Servlet/C#/Unityの基礎を学びました。趣味でも時々プログラミングを行っています。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-sword fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ももたろうRPG</h4>
              <p class="text-muted">
                職業訓練のグループ課題で作成したブラウザゲームです。JSP/Servletで
                作成しました。現在、SQLデータベース移行中のため動作しません。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ダミー2</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-cube fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ダミー3</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={clangImage} />
              <h4>C Programming Language</h4>
              <p>C言語がつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={javaImage} />
              <h4>Java</h4>
              <p>Java/Servletがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={csharpImage} />
              <h4>C#</h4>
              <p>.NET Frameworkがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}

export default Homepage
