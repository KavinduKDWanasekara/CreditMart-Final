// import Navbar from './../components/Navbar';
import './WelcomePage.css';

export default function Home() {
  return (
    <div id='mainBox'>
            {/* <Navbar/> */}

      <img src="logo.png" alt="CREDIT MART" id="logo"/>
      <div className="leftBox">

        <p className="appName"><span>C</span>REDIT-<span>M</span>ART</p>
        <div id="leftInner">
        <img src="homePg.png" alt="Credit performances" id="HomePageImage"/>

        <p className="description">
          Credit Mart is an application which encourages in credit businesses.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. 
          </p>
      </div>
      </div>
      <div className="rightBox">
      {/* <form onSubmit={this.handleSubmit}> */}
      <div id="formDiv">
      <form id="loginForm">
      <h1 className="loginHead">Welcome !</h1>

            <div className="field">
              <p className="control">
                <input className="input" type="text" className="inpForm" id="username" placeholder="Username or Email" />
              </p>
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" className="inpForm" id="password" placeholder="Password"/>
              </p>
            </div>

            <div className="field">
              <p className="control">
                <a href="/forgotpassword" className="link">Forgot password?</a>
              </p>
            </div>

            <div className="bottom_buttons">
              <div className="field">
                <p className="control">
                  <button className="button is-success-1">
                    Sign Up
                  </button>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-success">
                    Login
                  </button>
                </p>
              </div>
            </div>
          </form>
      </div>
      </div>
     

    </div>

  )
}
