import briefcaseIcon from './img/icons/briefcase-icon.png';
import userIcon from './img/icons/user-icon.png'
import dropdownIcon from './img/icons/down-arrow-icon.png'
import './App.css';
import ResumeForm from './components/ResumeForm';
import Summary from './components/Summary';
import { useState } from 'react';


function App() {
  const [resumeData, setResumeData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const [personalInformation, setPersonalInformation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [schoolList, setSchoolList] = useState([{
    schoolName: '',
    degree: '',
    startDate: '',
    endDate: '',
    city: '',
    description: '',
    id: crypto.randomUUID(),
  }]);
  const [employmentList, setEmploymentList] = useState([{
    jobTitle: '',
    employer: '',
    startDate: '',
    endDate: '',
    city: '',
    description: '',
    id: crypto.randomUUID(),
  }]);

  function goToPreviousPage() {
    setCurrentPage(currentPage - 1);
  }


  function goToNextPage() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <div className="ultrawide-container">
        <div className='header'>
          <div className='logo'>
            <img src={briefcaseIcon} alt='Briefcase Logo'/>
            <h1>Resumify</h1>
          </div>
          <div className='user-tab'>
            <p>John Doe</p>
            <img className='user-icon' src={userIcon} alt='User Profile Icon'/>
            <img className='dropdown-icon' src={dropdownIcon} alt='More' />
          </div>
        </div>
        {currentPage === 0 && <ResumeForm 
        employmentList={employmentList}
        setEmploymentList={setEmploymentList}
        personalInformation={personalInformation}
        setPersonalInformation={setPersonalInformation}
        schoolList={schoolList}
        setSchoolList={setSchoolList}
        onNext={goToNextPage}
        />}
        {currentPage === 1 && <Summary 
        employmentList={employmentList}
        setEmploymentList={setEmploymentList}
        personalInformation={personalInformation}
        setPersonalInformation={setPersonalInformation}
        schoolList={schoolList}
        setSchoolList={setSchoolList}
        onBack={goToPreviousPage}
        />}
      </div>
    </>
  );
}

export default App;
