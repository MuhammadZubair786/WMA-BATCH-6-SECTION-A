var serialNo = prompt("Enter serial number")
var rollNo = prompt("Enter roll number")

document.writeln(`
    
       <div class="container mt-4">
      <div class="container container1">
        <div class="row">
          <div class="col col-lg-12 col-sm-12 col-md-12 col-12">
            <h1 style="text-align: center">
              FEDRAL BOARD OF INTERMEDIATE AND SECONDARY EDUCATION
            </h1>
            <hr />
          </div>
        </div>

        <!-- User details -->
        <div class="row">
          <div class="col col-lg-6 col-md-6 col-12 col-sm-12">
            <table class="ms-4 mt-4">
              <tr>
                <td>Serial No &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</td>
                <td>${serialNo}</td>
              </tr>
              <tr>
                <td>Roll No</td>
                <td>${rollNo}</td>
              </tr>
              <tr>
                <td>Group</td>
                <td>123</td>
              </tr>
            </table>
          </div>
          <div
            class="col col-lg-6 col-md-6 col-12 col-sm-12"
            style="text-align: right"
          >
            <img
              class="userimg"
              src="https://img.freepik.com/premium-vector/joyful-student-celebrating-academic-success-educational-concept-illustration_1263357-35243.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
            />
          </div>
        </div>

        <!-- Center Data -->
        <div class="row">
          <div class="col col-lg-12 col-md-12 col-sm-12 col-12">
            <h1>HIGHER SECONDARY SCHOOL CERTIFICATE EXAMINATION</h1>
          </div>
        </div>

        <div class="row">
          <div class="col col-lg-12 col-md-12 col-sm-12 col-12">
            <table class="ms-4 mt-4">
              <tr>
                <td>certificate &nbsp; &nbsp;</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Full name</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>fail</td>
              </tr>
              <tr>
                <td>Full marks</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Obtained Marks</td>
                <td>123</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col col-lg-12 col-md-12 col-sm-12 col-12">
            <table class="table">
              <thead>
                <tr >
                  <th scope="col" style="background-color: green !important">Subject</th>
                  <th scope="col" style="background-color: green !important">Max Marks</th>
                  <th scope="col" style="background-color: green !important">obtained</th>
                
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                 
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>John</td>
                  <td>Doe</td>
                 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    `)