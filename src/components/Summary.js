import './../styles/Summary.css';
import arrowLeftIcon from './../img/icons/arrow-left-icon.svg';
import PageNavButton from './PageNavButton';

export default function Summary({ 
  employmentList, setEmploymentList, schoolList, setSchoolList,
   personalInformation, setPersonalInformation, onBack }) {
  return (
    <div className='summary'>
    <div className='summary-container'>
      <h1 className='summary-title'>Summary</h1>
      <div className='summary-section'>
        <h2 className='summary-subheader'>Personal Information</h2>
        <p>Full name: {personalInformation.firstName} {
          personalInformation.lastName
        }</p>
        <p>Email address: {personalInformation.email}</p>
        <p>Phone number: {personalInformation.phone}</p>
      </div>
      <div className='summary-section'>
        <h2 className='summary-subheader'>Education</h2>
        <ul className='data-entry-list'>
          {schoolList.map(education => {
            return (
              <li key={education.id}>
                <div className='data-entry'>
                {(education.schoolName && education.degree) ? (
                          <h5 className='data-entry-header'>{education.degree} at {education.schoolName}</h5>
                    ) : (
                      (education.schoolName) ? (
                          <h5 className='data-entry-header'>{education.schoolName}</h5>
                      ) : (
                        (education.degree) ? (
                            <h5 className='data-entry-header'>{education.degree}</h5>
                        ) : (
                            <h5 className='data-entry-header'>(Not specified)</h5>
                        )
                      )
                    )}
                    {(education.startDate && education.endDate) ? (
                      <p className='data-entry-date'>{education.startDate + ' - ' + education.endDate}</p>
                    ) : ((education.startDate) ? (
                      <p className='data-entry-date'>{education.startDate}</p>
                    ) : (education.endDate ? (
                      <p className='data-entry-date'>{education.endDate}</p>
                    ) : (null)) )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='summary-section'>
        <h2 className='summary-subheader'>Employment History</h2>
        <ul className='data-entry-list'>
          {employmentList.map(employment => {
            return (
              <li key={employment.id}>
                <div className='data-entry'>
                {(employment.employer && employment.jobTitle) ? (
                          <h5 className='data-entry-header'>{employment.jobTitle} at {employment.employer}</h5>
                    ) : (
                      (employment.employer) ? (
                          <h5 className='data-entry-header'>{employment.employer}</h5>
                      ) : (
                        (employment.jobTitle) ? (
                            <h5 className='data-entry-header'>{employment.jobTitle}</h5>
                        ) : (
                            <h5 className='data-entry-header'>(Not specified)</h5>
                        )
                      )
                    )}
                    {(employment.startDate && employment.endDate) ? (
                      <p className='data-entry-date'>{employment.startDate + ' - ' + employment.endDate}</p>
                    ) : ((employment.startDate) ? (
                      <p className='data-entry-date'>{employment.startDate}</p>
                    ) : (employment.endDate ? (
                      <p className='data-entry-date'>{employment.endDate}</p>
                    ) : (null)) )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    <PageNavButton onClick={onBack} className='align-left'><img src={arrowLeftIcon} className='forward-icon'/>Go Back</PageNavButton>
    </div>
  )
}