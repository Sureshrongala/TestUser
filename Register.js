import React from 'react';

const Register = () => {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    role: '',
  });

  const [loading, setLoading] = React.useState(false); // State to handle loading
  const [error, setError] = React.useState(''); // State to handle errors
  const [success, setSuccess] = React.useState(''); // State to handle success messages

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when the form is submitted
    setError(''); // Reset the error
    setSuccess(''); // Reset the success message

    try {
      const res = await fetch('http://localhost:8089/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to submit data');
      }

      const result = await res.json();
      setSuccess('Data Submitted Successfully!');
      setData({
        name: '',
        email: '',
        role: '',
      }); // Clear the form
    } catch (error) {
      setError('Error: ' + error.message); // Show error message if something goes wrong
    } finally {
      setLoading(false); // Set loading to false after the request is completed
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Username"
            value={data.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            value={data.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="role"
            className="form-control"
            placeholder="Enter Role"
            value={data.role}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Register'}
          </button>
        </div>
      </form>

      {/* Display Success or Error Message */}
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Register;
