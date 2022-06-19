import {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <label htmlFor="name">First Name:</label>
            <input type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />            
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </form>
    );
};

export default Form;