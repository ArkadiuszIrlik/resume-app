import { useState } from 'react';
import './../styles/ResumeForm.css';
import arrowRightIcon from './../img/icons/arrow-right-icon.svg'
import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import EmploymentForm from './EmploymentForm';

export default function ResumeForm( { formData, setFormData, onNext }) {
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


  return (
    <div className='resume-form'>
      {schoolList.map(school => <h2>{school.schoolName}</h2>)}
    <PersonalInfoForm
      formData={personalInformation}
      setFormData={setPersonalInformation}
    />
    <EducationForm 
        formData={schoolList}
        setFormData={setSchoolList}
    />
    <EmploymentForm 
        formData={employmentList}
        setFormData={setEmploymentList}
    />
    <button type='button' className='summary-button'
    onClick={() => {
      setFormData({
        personalInformation: personalInformation,
        schoolList: schoolList,
        employmentList: employmentList,
      })
      onNext();
    }}
    >
      Summary<img src={arrowRightIcon} className='forward-icon'/></button>
    </div>
  )
}