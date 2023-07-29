import { useState } from "react"
import validate from '../utils/validate'

export default function Form({login}) {
    const [userData, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...userData, [name]: value });
        // Validate the field and update errors state
        const validationErrors = validate({ ...userData, [name]: value });
        setErrors(validationErrors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(userData);
        setErrors(validationErrors);
    
        // If there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
          login(userData);
        }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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