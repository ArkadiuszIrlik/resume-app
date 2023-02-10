import { useState } from 'react';
import './../styles/ResumeForm.css';

export default function ResumeForm() {
  const [personalInformation, setPersonalInformation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [schoolList, setSchoolList] = useState([]);
  const [employmentList, setEmploymentList] = useState([]);


  return (
    <>
    <PersonalInfoForm className='form-container' 
      formData={personalInformation}
      setFormData={setPersonalInformation}
    />
    <EducationForm className='form-container' 
        formData={schoolList}
        setFormData={setSchoolList}
    />
    <EmploymentForm className='form-container' 
        formData={employmentList}
        setFormData={setEmploymentList}
    />
    </>
  )
}