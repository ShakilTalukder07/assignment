import { useState } from 'react';
import './App.css';


function App() {

  const [show, setShow] = useState([]);

  const handleClick = (total) => {
    setShow(total);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const studentName = form.name.value;
    const status = form.status.value;
    const info = [studentName, status];
    setShow(info)
    console.log(studentName, status);
  }

  console.log(show);

  return (
    <div className="">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className='text-center text-uppercase mb-5'>Solve-1</h4>
          <div className="col-6 ">
            <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
              <div className="col-auto">
                <input name='name' type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-auto">
                <input name='status' type="text" className="form-control" placeholder="Status" />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-8">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
              </li>
            </ul>
            <div className="tab-content"></div>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <>
                  <th>{show[0]}</th>
                  <th>{show[1]}</th>
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
