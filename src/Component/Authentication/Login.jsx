import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
  const {createUser,setUser,googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit =(e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get('name');
    const email = form.get('email');
    const password = form.get('password');

    createUser(email, password)
    .then(result => {
      console.log(result.user)
      setUser(result.user)
      navigate('/')
    })
    .catch(err => console.log(err));

  } 

  const handleGoogle = (media) =>{
    media()
    .then(res => console.log(res.user))
    .catch(err => console.log(err))
  }



    return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm md:h-full shrink-0 shadow-2xl border-2 border-b-lime-950">
      <div className="card-body">
        <h2 className="text-center font-bold text-2xl">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name"  className="input border-0 border-b-2 focus:outline-none focus:border-b-neutral  bg-transparent rounded-none placeholder:text-black" placeholder="username" />
          <input type="email" name="email"  className="input border-0 border-b-2 focus:outline-none focus:border-b-neutral  bg-transparent rounded-none placeholder:text-black" placeholder="Email" />
          <input type="password" name="password" className="input border-0 border-b-2 focus:outline-none focus:border-b-neutral  bg-transparent rounded-none placeholder:text-black" placeholder="Password" />
          <div className="flex justify-between space-y-3">
            <div className="flex gap-2 items-center">
            <input type="checkbox" defaultChecked className="checkbox" />
            <p>Remember me</p>
            </div>
            <a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-yellow-500 border-none text-black hover:bg-yellow-600 mt-4">Login</button>
          <p className="mt-2 justify-center items-center">Do you have account? <Link to='/signup'><span className="text-yellow-500">Create a account</span></Link></p>
        </form>
        <div className="divider">OR</div>
        <button className="btn bg-[#1A77F2] text-white border-[#005fd8] rounded-3xl">
  <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
  Continue with Facebook
</button>
<button onClick={() =>handleGoogle(googleSignIn)} className="btn bg-white text-black border-[#e5e5e5] rounded-3xl">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Continue with Google
</button>
      </div>
      </div>
        </div>
    );
};

export default Login;