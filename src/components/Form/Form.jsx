import { useState } from "react"
import validate from '../utils/validate'

export default function Form() {
    const [userData, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log('AAAAAAAAAAAAAAAAAAA')
        e.preventDefault();
        const validationErrors = validate(userData);
        setErrors(validationErrors);
    
        // If there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
          
        }
      };

    return (
        <div>
            <form onSubmit={() => handleChange}>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} value={userData.email} name='email' type="email" id="email" />
                {errors.email && <span className="error">{errors.email}</span>}

                <label htmlFor="password">Password</label>
                <input onChange={handleChange} value={userData.password} name='password' type="password" id="password" />
                {errors.password && <span className="error">{errors.password}</span>}

                <button type="submit" >Submit</button>
            </form>
        </div>
    )
} 