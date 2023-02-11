import downChevronIcon from './../img/icons/down-chevron-icon.png';
import trashIcon from './../img/icons/trash-icon.png';
import plusIcon from './../img/icons/plus-icon.svg';
import { useState } from 'react'

export default function EmploymentForm({ formData, setFormData }) {
  const [openStatus, setOpenStatus] = useState(formData.reduce((stateObject, employment, index) => {
    if (index === (formData.length - 1)) {
      stateObject[employment.id] = {isOpen: true,}
    } else {
      stateObject[employment.id] = {isOpen: false,}
    }
    return stateObject;
  }, {}));

  return (
    
    <div className="form-container">
      <h1 className='form-header'>Employment History</h1>

      <ul className='form-entry-list'>
        {formData.map((employment, index) => {
          return (
            <li key={employment.id} className='form-entry-list-item'>
              <div className='form-entry-field'>
                <div className='form-entry-header'>
                  <div className='form-entry-summary'>
                    {(employment.employer && employment.jobTitle) ? (
                          <h5 className='form-entry-summary-header'>{employment.jobTitle} at {employment.employer}</h5>
                    ) : (
                      (employment.employer) ? (
                          <h5 className='form-entry-summary-header'>{employment.employer}</h5>
                      ) : (
                        (employment.jobTitle) ? (
                            <h5 className='form-entry-summary-header'>{employment.jobTitle}</h5>
                        ) : (
                            <h5 className='form-entry-summary-header'>(Not specified)</h5>
                        )
                      )
                    )}
                    {(employment.startDate && employment.endDate) ? (
                      <p className='form-entry-summary-date'>{employment.startDate + ' - ' + employment.endDate}</p>
                    ) : ((employment.startDate) ? (
                      <p className='form-entry-summary-date'>{employment.startDate}</p>
                    ) : (employment.endDate ? (
                      <p className='form-entry-summary-date'>{employment.endDate}</p>
                    ) : (null)) )}
                  </div>
                  <div className="icon-wrapper">
                    <img src={downChevronIcon} className={ (openStatus[employment.id].isOpen) ?
                    ('dropdown-icon open') : ('dropdown-icon closed')}
                    onClick={() => {
                      const nextOpenStatus = {...openStatus}
                      nextOpenStatus[employment.id].isOpen = !nextOpenStatus[employment.id].isOpen;
                      setOpenStatus(nextOpenStatus);
                    }}
                    />
                    <img src={trashIcon} className='delete-field-icon' 
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this position?')) {
                        setFormData(formData.filter(item => item.id !== employment.id))
                      }
                    }}
                    />
                  </div>
                </div>
                {openStatus[employment.id].isOpen && (

<>
                <div className='form-field'>
        <label htmlFor={'job-title-' + index}>
          Job Title:
        </label>
        <input type='text' id={'job-title-' + index} 
        value={employment.jobTitle}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === employment.id) {
              return {
                ...item,
                jobTitle: e.target.value,
              };
            } else {
              return item;
            }
          }))
        }}
        />
      </div>
      <div className='form-field'>
        <label htmlFor={'employer-' + index}>
          Employer:
        </label>
        <input type='text' id={'employer-' + index} 
        value={employment.employer}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === employment.id) {
              return {
                ...item,
                employer: e.target.value,
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
        value={employment.startDate}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === employment.id) {
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
        value={employment.endDate}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === employment.id) {
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
        value={employment.city}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === employment.id) {
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
        value={employment.description}
        onChange={(e)=> {
          setFormData(formData.map(item => {
            if (item.id === employment.id) {
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
          jobTitle: '',
          employer: '',
          startDate: '',
          endDate: '',
          city: '',
          description: '',
        id: nextId,
      }])
      
    }}
      >Add employment
      <img src={plusIcon} className='plus-icon' /></button>
    </div>
  )
}