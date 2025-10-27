"use client"

import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, Lock, ArrowLeft } from 'lucide-react';

export default function SignUpPage() {
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    pin: '',
    confirmPin: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted', formData);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
              <p className="text-white text-4xl font-bold">P</p>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Create an Account
            </h2>
            <p className="text-slate-500 text-sm">
              Join us today! Fill in your details to get started
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Name Fields - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* PIN Fields - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Create PIN */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Create PIN
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type={showPin ? "text" : "password"}
                    placeholder="Enter 4-6 digit PIN"
                    value={formData.pin}
                    onChange={(e) => handleChange('pin', e.target.value)}
                    maxLength="6"
                    className="w-full pl-11 pr-12 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm PIN */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Confirm PIN
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type={showConfirmPin ? "text" : "password"}
                    placeholder="Re-enter your PIN"
                    value={formData.confirmPin}
                    onChange={(e) => handleChange('confirmPin', e.target.value)}
                    maxLength="6"
                    className="w-full pl-11 pr-12 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPin(!showConfirmPin)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showConfirmPin ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Create Account Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 active:scale-95 transition-all shadow-lg hover:shadow-xl mt-6"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">or</span>
              </div>
            </div>

            {/* Back to Login Link */}
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 text-slate-600 hover:text-green-600 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Back to Login
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-6">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-green-600 hover:underline">Terms</a>
          {' '}and{' '}
          <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}