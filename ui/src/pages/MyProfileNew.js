import React, { Component } from 'react'

export class MyProfileNew extends Component {

    onChangeHandler=event=>{

        console.log(event.target.files[0])
    
    }

    render() {
        return (
            <>
      {/* <Navbar transparent /> */}
      <main className="relative block h-100-px">
        <section className="relative py-36 h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.hipwallpaper.com/i/52/6/vFbjWA.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
        </section>
        <section className="relative py-44 bg-gray-300">
          <div className="container mx-9 px-10">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-10 shadow-xl rounded-lg -mt-56">
            
              <div className="px-6">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                        {/* <button className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button">Edit Profile</button> */}
                        <button class="h-10 px-5 text-coolGray-700 transition-colors duration-150 border border-coolGray-500 rounded-lg focus:shadow-outline hover:bg-gray-300 hover:text-coolGray-100">Edit Profile</button>
                        {/* <button className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button">Edit Financial Data</button> */}
                        <button class="h-10 px-5 text-coolGray-700 transition-colors duration-150 border border-coolGray-500 rounded-lg focus:shadow-outline hover:bg-gray-300 hover:text-coolGray-100">Add Financial Data</button>
                        
                </div>
                      
              <div className="flex flex-wrap justify-center -mt-36">
                  <img
                        alt="..."
                        // src={("https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg")}
                        src={("https://scontent.fcmb2-1.fna.fbcdn.net/v/t1.0-9/16998754_217016665439934_8147080226351143645_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=82cUc6mLSroAX-WpPjx&_nc_ht=scontent.fcmb2-1.fna&oh=06a02ec30ac75a1e23912957e669b3d6&oe=607D52A9")}
                        className="inline object-cover w-44 h-44 -mr- 6 rounded-full"
                      />
                      
                      <button  class="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200" >
                          
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path> </svg>
                            
                            
                      </button>
                      

                        
                      
                </div>
                      
                
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-gray-700 mt-2">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
        )
    }
}

export default MyProfileNew
