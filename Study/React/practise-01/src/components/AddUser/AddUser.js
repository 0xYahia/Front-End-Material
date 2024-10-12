import Form from '../Layout/From';
import Button from '../Layout/Buttons';

const AddUser = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <Form onSubmit={onSubmitHandler} >
    <Form.Controller>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' placeholder='Enter Name'/>
    </Form.Controller>
    <Form.Controller>
        <label htmlFor="age">Age</label>
        <input type="text" id='age' placeholder='Enter Age'/>
    </Form.Controller>
    <Form.Controller>
        <label htmlFor="address">Address</label>
        <input type="text" id='address' placeholder='Enter Address'/>
    </Form.Controller>
    <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input type="text" id='phone' placeholder='Enter Phone'/>
    </Form.Controller>
    <div style={{marginTop: '20px'}}>
      <Button type='submit' style={{marginRight: '20px'}}>Save</Button>
      <Button type={'reset'} >Reset</Button>
    </div>
  </Form>
  );
}

export default AddUser;