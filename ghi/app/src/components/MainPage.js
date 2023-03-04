import "../index"


function MainPage() {
  // const myImage =
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">WARDROBIFY!</h1>
        <div className="container col-lg-6 mx-auto"></div>
        <p className="lead mb-4">
          Need to keep track of your shoes and hats? We have the solution for
          you!
        </p>
      </div>
      <div className="main-image"></div>
      <footer className="text-white py-4 footer">
        <div className="container-fluid bg-secondary py-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="footer"> 2023, All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainPage;
