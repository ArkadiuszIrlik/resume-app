import downChevronIcon from './../img/icons/down-chevron-icon.png';
import trashIcon from './../img/icons/trash-icon.png';
import plusIcon from './../img/icons/plus-icon.svg';
import { useState } from 'react'

export default function EducationForm({ formData, setFormData }) {
  const [openStatus, setOpenStatus] = useState(formData.reduce((stateObject, education) => {
    stateObject[education.id] = {isOpen: false,}
    return stateObject;
  }, {}));

  return (
    
    <div className="form-container">
      <h1 className='form-header'>Education</h1>

      <ul className='education-list'>
        {formData.map((education, index) => {
          return (
            <li key={education.id} className='education-list-item'>
              <div className='education-field'>
                <div className='education-header'>
                  <div className='education-summary'>
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
                  <div className="icon-wrapper">
                    <img src={downChevronIcon} className={ (openStatus[education.id].isOpen) ?
                    ('dropdown-icon open') : ('dropdown-icon closed')}
                    onClick={() => {
                      const nextOpenStatus = {...openStatus}
                      nextOpenStatus[education.id].isOpen = !nextOpenStatus[education.id].isOpen;
                      setOpenStatus(nextOpenStatus);
                    }}
                    />
                    <img src={trashIcon} className='delete-field-icon' 
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this school?')) {
                        setFormData(formData.filter(item => item.id !== education.id))
                      }
                    }}
                    />
                  </div>
                </div>
                {openStatus[education.id].isOpen && (

<>
                <div className='form-field'>
        <label htmlFor={'school-name-' + index}>
          School Name:
        </label>
        <input type='text' id={'school-name-' + index} 
        value={education.schoolName}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === education.id) {
              return {
                ...item,
                schoolName: e.target.value,
              };
            } else {
              return item;
            }
          }))
        }}
        />
      </div>
      <div className='form-field'>
        <label htmlFor={'degree-' + index}>
          Degree:
        </label>
        <input type='text' id={'degree-' + index} 
        value={education.degree}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === education.id) {
              return {
                ...item,
                degree: e.target.value,
              };
            } else {
              return item;
            }
          }))
        }}
        />
      </div>
      <div className='form-field'>
        <label htmlFor={'start-date-' + index}>
          Start Date:
        </label>
        <input type='text' id={'start-date-' + index} 
        value={education.startDate}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === education.id) {
              return {
                ...item,
                startDate: e.target.value,
              };
            } else {
              return item;
            }
          }))
        }}
        />
      </div>
      <div className='form-field'>
        <label htmlFor={'end-date-' + index}>
          End Date:
        </label>
        <input type='text' id={'end-date-' + index} 
        value={education.endDate}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === education.id) {
              return {
                ...item,
                endDate: e.target.value,
              };
            } else {
              return item;
            }
          }))
        }}
        />
      </div>
      <div className='form-field'>
        <label htmlFor={'description-' + index}>
          Description:
        </label>
        <input type='text' id={'description-' + index} 
        value={education.description}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === education.id) {
              return {
                ...item,
                description: e.target.value,
              };
            } else {
              return item;
            }
          }))
        }}
        />
      </div>
      </>)
      }
              </div>
            </li>
          )
        })}
      </ul>
      <button type='button' className='add-education-button'
      onClick={() => {
        const nextId = crypto.randomUUID(); 
        setOpenStatus({...openStatus, [nextId]: {isOpen: true,}})
        setFormData([...formData, {
        schoolName: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: '',
        id: nextId,
      }])
      
    }}
      >Add education
      <img src={plusIcon} className='plus-icon' /></button>
    </div>
  )
}