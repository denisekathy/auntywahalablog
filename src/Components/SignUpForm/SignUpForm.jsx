import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			confirm: '',
			error: '',
		};
	}

	// const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	// const [confirm, setConfirm] = useState('')
	// const [error, setError] = useState('')
	handleChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value,
			error: '',
		});
	};

	handleSubmit = async evt => {
		evt.preventDefault();
		try {
			const formData = { ...this.state };
			delete formData.error;
			delete formData.confirm;
			// The promise returned by the signUp service method
			// will resolve to the user object included in the payload of the JSON Web Token (JWT)
			const user = await signUp(formData);
			this.props.setUser(user);
			console.log(user);
		} catch {
			// An error occurred
			this.setState({ error: 'Sign Up Failed - Try Again' });
		}
		// this.setState({
		//   name: '',
		//   email: '',
		//   password: '',
		//   confirm: '',
		//   error: '',
		// })
	};

	render() {
		const disable = this.state.password !== this.state.confirm;
		
		return (
			<div>
				<h3> Sign Up!</h3>
				<br/>
				<div className='form-container '>
					<form autoComplete='off' onSubmit={this.handleSubmit}>
						<label>Name :</label>
						&nbsp;  &nbsp;
						<input
							type='text'
							name='name'
							value={this.state.name}
							onChange={this.handleChange}
							required
						/>
						<br/>
						<br/>
						<label>Email :</label>
						&nbsp; &nbsp;
						<input
							type='text'
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
						<br/>
						<br/>
						<label>Password : </label>
						&nbsp; 
						<input
							type='text'
							name='password'
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
						<br/>
						<br/>
						<label>Confirm : </label>
						&nbsp; &nbsp;
						<input
							type='text'
							name='confirm'
							value={this.state.confirm}
							onChange={this.handleChange}
							required
						/>
						<br/> <br/>
						<button className= "btn btn-success btn-lg"type='submit' disabled={disable}>
							SIGN UP
						</button>
					</form>
				</div>
				<p className='error-message'>&nbsp;{this.state.error}</p>
			</div>
		);
	}
}
