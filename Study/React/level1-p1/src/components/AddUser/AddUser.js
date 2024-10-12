import Form from '../Layout/From';
import Button from '../Layout/Buttons';
import { useState } from 'react';

const AddUser = ({addUserHandler, closeModal}) => {
  const [formData, setFormData] = useState({
    name: '',
    age:'',
    address: '',
    phone: '',
    gender: ''
  })


  const formHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setFormData((prevState) => {
      return {...prevState, [key]: value}
    })
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addUserHandler({
      id: Math.round(Math.random() * 100),
      name: formData.name,
      age: formData.age,
      address: formData.address,
      phone: formData.phone,
      gender: formData.gender
    });

    setFormData({name: '',
      age:'',
      address: '',
      phone: '',
      gender: ''}
    )
    closeModal()
  }
  return (
    <Form onSubmit={onSubmitHandler} >
    <Form.Controller>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' placeholder='Enter Name' value={formData.name} onChange={formHandler} />
    </Form.Controller>
    <Form.Controller>
        <label htmlFor="age">Age</label>
        <input type="text" id='age' placeholder='Enter Age' value={formData.age} onChange={formHandler} />
    </Form.Controller>
    <Form.Controller>
        <label htmlFor="address">Address</label>
        <input type="text" id='address' placeholder='Enter Address' value={formData.address} onChange={formHandler} />
    </Form.Controller>
    <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input type="text" id='phone' placeholder='Enter Phone' value={formData.phone} onChange={formHandler}/>
    </Form.Controller>
    <Form.Controller>
        <label htmlFor="gender">Gender</label>
        <select name='gender' id='gender' onChange={formHandler} value={formData.gender}  >
          <option>Choices gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
    </Form.Controller>
    <div style={{marginTop: '20px'}}>
      <Button type={'submit'} style={{marginRight: '20px'}}>Save</Button>
      <Button type={'reset'} >Reset</Button>
    </div>
  </Form>
  );
}

export default AddUser;