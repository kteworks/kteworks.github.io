import React from 'react'
import clangImage from "../Images/c-programming-logo.png";
import javaImage from "../Images/java-logo.png";
import csharpImage from "../Images/c-sharp-logo.png";
import profileImage from "../Images/user_icon.png";
import {Link} from "react-router-dom"

const Homepage = () => {
  return (
    <div className="container text-center">
      <h1>Kazuya Terasawa</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        職業訓練にてC言語/Java/JSP/Servlet/C#/Unityの基礎を学びました。
<<<<<<< HEAD
        あらゆることに好奇心旺盛で深く広く学びたいです。気づいたらブラウザのタブが増えています。
        こちらのページはReactで作成しています。
=======
        このポートフォリオはReactで作成しています。
>>>>>>> 05eb392c51d00789b44627c6ddf65189f133ac56
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
            <a href="https://momotarorpg.herokuapp.com" target="_blank" rel="noopener noreferrer">
              <span class="fa-stack fa-4x">
                
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-gamepad fa-stack-1x fa-inverse"></i>
                
              </span>
              <h4 class="my-3">ももたろうRPG</h4>
              </a>
              <p class="text-muted">
                職業訓練のグループ課題で作成したブラウザゲームです。JSP/Servletで
                作成しました。<br />現在、SQLデータベース移行中のため動作しません。
              </p>
            </div>
            <div class="col-md-4">
              <a href="https://github.com/kteworks/H2DB-to-SQL" target="_blank" rel="noopener noreferrer">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">H2DB-to-SQL</h4>
              </a>
              <p class="text-muted">
                現在制作途中。自分用にH2データベースからPostgreSQLに移行するためのアプリケーションを
                制作しています。自分用なので今後の更新、他のデータベースへの対応、例外処理等を行うかは
                未定です。
              </p>
            </div>
            <div class="col-md-4">
            <a href="https://github.com/kteworks/Breakout-Game" target="_blank" rel="noopener noreferrer">
              <span class="fa-stack fa-4x">
              
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-cube fa-stack-1x fa-inverse"></i>
                
              </span>
              <h4 class="my-3">Breakout</h4>
              </a>
              <p class="text-muted">
                Unityで制作した単純なブロックくずしゲームです。不具合のような仕様も楽しめてもらえるかと思います。
                ドット絵画像を読み込んでブロック生成できたりするのが特徴です。Windows専用。<a href="https://github.com/kteworks/Breakout-Game/releases/"  target="_blank" rel="noopener noreferrer">最新リリース</a>
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
            スキル一覧(工事中)
          </button>
        </div>
      </section>
    </div>
  )
}

export default Homepage
