import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // confirmPassword: '',
    // fullName: ''
  });

  // const navigate = useNavigate()

  const handleInputChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (activeTab === 'login') {
     
      axios.post('http://localhost:3000/login',{
        email: formData.email,
        password: formData.password,
       
      }).then(function(response) {
 
        // if(response.status === 200){
        //   navigate('/dashboard')
        // }
      })
      .catch(function(error) {
        console.log(error);
      });
     
    } else {
      console.log('SignUp attempt:', formData);
      alert('SignUp attempt - check console');
    }
  };

  return (
    <div className="flex relative">
        <div className='absolute top-10 left-[330px]'>
        <p className='text-3xl font-semibold'><span className='text-green-800 text-5xl font-bold'>A</span>ttendo</p>
        </div>
         
      <div className="bg-[#131926] text-white h-screen w-1/2 flex items-center justify-center">
       
        <div className="w-full max-w-md px-8">
          <div role="tablist" className="tabs tabs-lift mb-8">
            <a 
              role="tab" 
              className={`tab ${activeTab === 'login' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </a>
            <a 
              role="tab" 
              className={`tab ${activeTab === 'signup' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('signup')}
            >
              SignUp
            </a>
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
              </h2>
            </div>

            {/* Full Name Field (Sign Up Only) */}
            {activeTab === 'signup' && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Full Name</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="input input-bordered w-full pl-12 bg-base-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Email Address</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input input-bordered w-full pl-12 bg-base-200"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Password</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input input-bordered w-full pl-12 pr-12 bg-base-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field (Sign Up Only) */}
            {activeTab === 'signup' && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Confirm Password</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="input input-bordered w-full pl-12 pr-12 bg-base-200"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}

            {/* Remember Me / Forgot Password (Login Only) */}
            {activeTab === 'login' && (
              <div className="flex items-center justify-between">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text ml-2 text-gray-300">Remember me</span>
                </label>
                <a href="#" className="link link-primary text-sm">Forgot password?</a>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="btn btn-primary w-full"
            >
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </button>

            {/* Footer */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
                  className="link link-primary"
                >
                  {activeTab === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-1/2 ">
                <img className='h-screen object-cover' src='/students.jpg' alt='students' />
      </div>
    </div>
  );
}