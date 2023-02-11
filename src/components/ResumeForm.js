import { useState } from 'react';
import './../styles/ResumeForm.css';
import arrowRightIcon from './../img/icons/arrow-right-icon.svg'
import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import EmploymentForm from './EmploymentForm';
import PageNavButton from './PageNavButton';

export default function ResumeForm( { 
  employmentList, setEmploymentList, schoolList, setSchoolList,
   personalInformation, setPersonalInformation, onNext }) {



  return (
    <div className='resume-form'>
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
    <PageNavButton className='right-align'
    onClick={onNext}
    >
      Summary<img src={arrowRightIcon} className='forward-icon'/></PageNavButton>
    </div>
  )
}