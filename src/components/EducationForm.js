import downChevronIcon from './../img/icons/down-chevron-icon.png';
import trashIcon from './../img/icons/trash-icon.png';
import plusIcon from './../img/icons/plus-icon.svg';
import { useState } from 'react'

export default function EducationForm({ formData, setFormData }) {
  const [openStatus, setOpenStatus] = useState(formData.reduce((stateObject, education, index) => {
    if (index === (formData.length - 1)) {
      stateObject[education.id] = {isOpen: true,}
    } else {
      stateObject[education.id] = {isOpen: false,}
    }
    return stateObject;
  }, {}));

  return (
    
    <div className="form-container">
      <h1 className='form-header'>Education</h1>

      <ul className='form-entry-list'>
        {formData.map((education, index) => {
          return (
            <li key={education.id} className='form-entry-list-item'>
              <div className='form-entry-field'>
                <div className='form-entry-header'>
                  <div className='form-entry-summary'>
                    {(education.schoolName && education.degree) ? (
                          <h5 className='form-entry-summary-header'>{education.degree} at {education.schoolName}</h5>
                    ) : (
                      (education.schoolName) ? (
                          <h5 className='form-entry-summary-header'>{education.schoolName}</h5>
                      ) : (
                        (education.degree) ? (
                            <h5 className='form-entry-summary-header'>{education.degree}</h5>
                        ) : (
                            <h5 className='form-entry-summary-header'>(Not specified)</h5>
                        )
                      )
                    )}
                    {(education.startDate && education.endDate) ? (
                      <p className='form-entry-summary-date'>{education.startDate + ' - ' + education.endDate}</p>
                    ) : ((education.startDate) ? (
                      <p className='form-entry-summary-date'>{education.startDate}</p>
                    ) : (education.endDate ? (
                      <p className='form-entry-summary-date'>{education.endDate}</p>
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
                      if (window.confirm('Are you sure you want to remove this position?')) {
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
        <label htmlFor={'city-' + index}>
          City:
        </label>
        <input type='text' id={'city-' + index} 
        value={education.city}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === education.id) {
              return {
                ...item,
                city: e.target.value,
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
        <textarea type='text' id={'description-' + index} 
        rows='5'
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
        ></textarea>
      </div>
      </>)
      }
              </div>
            </li>
          )
        })}
      </ul>
      <button type='button' className='add-form-entry-button'
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