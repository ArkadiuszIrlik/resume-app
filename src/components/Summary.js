import './../styles/Summary.css';

export default function Summary({ formData, onBack }) {
  return (
    <>
    <div className='summary-container'>
      <h1 className='summary-title'>Summary</h1>
      <div className='summary-section'>
        <h2 className='summary-subheader'>Personal Information</h2>
        <p>Full name: {formData.personalInformation.firstName} {
          formData.personalInformation.lastName
        }</p>
        <p>Email address: {formData.personalInformation.email}</p>
        <p>Phone number: {formData.personalInformation.phone}</p>
      </div>
      <div className='summary-section'>
        <h2 className='summary-subheader'>Education</h2>
        <ul className='data-entry-list'>
          {formData.schoolList.map(education => {
            return (
              <li key={education.id}>
                <div className='data-entry'>
                {(education.schoolName && education.degree) ? (
                          <h5>{education.degree} at {education.schoolName}</h5>
                    ) : (
                      (education.schoolName) ? (
                          <h5>{education.schoolName}</h5>
                      ) : (
                        (education.degree) ? (
                            <h5>{education.degree}</h5>
                        ) : (
                            <h5>(Not specified)</h5>
                        )
                      )
                    )}
                    {(education.startDate && education.endDate) ? (
                      <p>{education.startDate + ' - ' + education.endDate}</p>
                    ) : ((education.startDate) ? (
                      <p>{education.startDate}</p>
                    ) : (education.endDate ? (
                      <p>{education.endDate}</p>
                    ) : (null)) )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <h2 className='summary-subheader'>Employment History</h2>

    </div>
    <button type='button' onClick={onBack}>Go Back</button>
    </>
  )
}