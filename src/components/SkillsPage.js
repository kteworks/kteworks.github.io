import React from 'react'
import {Link} from "react-router-dom"

const SkillsPage = () => {
  return (
    <div className="container">Computer Skills
      <h2>スキル一覧</h2>
      <br/>
       <div class="row align-items-start">
         <div class="col">
          <h4>Programming</h4>
          <ul>
            <li>C言語</li>
            <li>Java, jsp+Servlet</li>
            <li>C# .NET Framework</li>
            <li>Unity</li>
          </ul>
          <h4>Office</h4>
          <ul>
            <li>Microsoft Excel</li>
            <li>Microsoft Word</li>
            <li>Microsoft PowerPoint</li>
          </ul>
         </div>
         <div class="col">
         <h3>触れたことがあるもの</h3>
         <h4>Languages</h4>
         <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript(React, Bootstrap)</li>
            <li>Python</li>
            <li>VB, VBA</li>
            <li>Xamarin</li>
          </ul>
          <h4>OS</h4>
          <ul>  
            <li>Windws (11, 10, 8.1, 8, 7, Vista, XP, ME, 2000, 98, MS-DOS)</li>
            <li>Linux(Ubuntu, ethOS, Fedora)</li>
          </ul>
          <h4>Platforms</h4>
            <ul>
              <li>AWS</li>
              <li>Github</li>
              <li>GCP</li>
              <li>Heroku</li>
              <li>SQL</li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default SkillsPage