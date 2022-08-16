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

      <img src={profileImage} alt="" className="profileImage" />

      <p>
        職業訓練にてC言語/Java/JSP/Servlet/C#/Unityの基礎を学びました。
        あらゆることに好奇心旺盛で深く広く学びたいです。気づいたらブラウザのタブが増えています。<br/>
        こちらのポートフォリオはReactで作成しています。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
            <a href="https://github.com/kteworks/momotarorpg#readme" target="_blank" rel="noopener noreferrer">
              <span class="fa-stack fa-4x">
                
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-gamepad fa-stack-1x fa-inverse"></i>
                
              </span>
              <h4 class="my-3">ももたろうRPG</h4>
              </a>
              <p class="text-muted">
                職業訓練のグループ課題で作成したブラウザゲームです。Java(JSP/Servlet),SQLで
                制作しました。プレイできます。
              </p>
            </div>
            <div class="col-md-4">
              <a href="https://github.com/kteworks/TetrisStyle-Csharp#readme" target="_blank" rel="noopener noreferrer">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-cubes fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">TetrisStyle</h4>
              </a>
              <p class="text-muted">
                C#で作成したテトリス風ゲームです。UnityでBreakoutを製作後に簡単なゲームでWindowsのみ対応であればC#で良いのではないかと思い製作してみたものです。出来としては一番まともかもしれません。
                プレイする場合はこちらからダウンロードできます。<a href="https://github.com/kteworks/Tetris-Csharp/releases/latest" target="_blank" rel="noopener noreferrer">最新リリース</a>
              </p>
            </div>
            <div class="col-md-4">
            <a href="https://github.com/kteworks/Breakout-Game#readme" target="_blank" rel="noopener noreferrer">
              <span class="fa-stack fa-4x">
              
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-dice-d6 fa-stack-1x fa-inverse"></i>
                
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
              <img src={clangImage} alt="" />
              <h4>C Programming Language</h4>
              <p>C言語がつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={javaImage} alt="" />
              <h4>Java</h4>
              <p>Javaがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={csharpImage} alt="" />
              <h4>C#</h4>
              <p>.NET Frameworkがつかえます</p>
            </div>
          </div>
          <Link to="/Skills">
            <button type="button" class="btn btn-primary">
               スキル一覧
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Homepage
