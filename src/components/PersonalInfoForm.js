import './../styles/form-container.css';

export default function PersonalInfoForm({ formData, setFormData }) {
  return (
    <div className='form-container'>
      <h1 className='form-header'>Personal Information</h1>
      <div className='form-field'>
        <label htmlFor='first-name'>
          First Name:
        </label>
        <input type='text' id='first-name' 
        value={formData.firstName}
        onChange={(e)=> {
          setFormData({...formData, firstName: e.target.value})
        }}
        />
      </div>
      <div className='form-field'>
        <label htmlFor='last-name'>
          Last Name:
        </label>
        <input type='text' id='last-name' 
        value={formData.lastName}
        onChange={(e)=> {
          setFormData({...formData, lastName: e.target.value})
        }}
        />
      </div>
      <div className='form-field'>
        <label htmlFor='email'>
          Email Address:
        </label>
        <input type='email' id='email' 
        value={formData.email}
        onChange={(e)=> {
          setFormData({...formData, email: e.target.value})
        }}
        />
      </div>
      <div className='form-field'>
        <label htmlFor='phone'>
          Phone Number:
        </label>
        <input type='tel' id='phone' 
        value={formData.phone}
        onChange={(e)=> {
          setFormData({...formData, phone: e.target.value})
        }}
        />
      </div>
    </div>
  )
}