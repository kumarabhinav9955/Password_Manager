import React, { useState, useEffect } from 'react';
import { Table } from './Table';

export const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      try {
        const parsedPasswords = JSON.parse(passwords);
        if (Array.isArray(parsedPasswords)) {
          setPasswordArray(parsedPasswords);
        }
      } catch (e) {
        console.error("Error parsing passwords from localStorage:", e);
      }
    }
  }, []);

  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
      alert("Please fill in all fields (Website URL, Username, and Password).");
      return;
    }

    const updatedPasswordArray = [...passwordArray, form];
    setPasswordArray(updatedPasswordArray); 
    localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray)); 
    console.log(updatedPasswordArray);

    setForm({ site: "", username: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const deletePassword=(index)=>{
    const updatePasswords=passwordArray.filter((_,i)=> i !==index);
    setPasswordArray(updatePasswords);
    localStorage.setItem('passwords',JSON.stringify(updatePasswords));

  };

  return (
    <div className="container mx-auto max-w-4xl bg-red">
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-60 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="mx-auto flex-col-reverse mycontainer">
        <h1 className="flex text-center bold text-black font-extrabold justify-center bg-white rounded-full">
          <lord-icon src="https://cdn.lordicon.com/iazmohzf.json" trigger="hover"></lord-icon>
          Your Password Manager
        </h1>

        <div className="text-white flex flex-col p-4 bg-black border-transparent rounded-lg shadow-lg">
          <div className="text-white w-full flex p-4 bg-white border-transparent rounded-lg shadow-lg">
            <lord-icon src="https://cdn.lordicon.com/sqhiykyz.json" trigger="hover" className="icon"></lord-icon>
            <input value={form.site} onChange={handleChange} placeholder="Enter Website URL" className="round-full border text-black p-4 py-1 w-full" type="text" name="site" />
          </div>

          <div className="flex w-full gap-3 text-black justify-between mt-4">
            <div className="flex w-full gap-3 text-black mt-4 bg-white rounded-full h-auto">
              <lord-icon src="https://cdn.lordicon.com/hrjifpbq.json" trigger="hover"></lord-icon>
              <input value={form.username} onChange={handleChange} placeholder="Enter Username" className="border-green-400 text-black p-4 py-1 w-full" type="text" name="username" />
            </div>

            <div className="flex w-full gap-3 text-black mt-4 bg-white rounded-full h-auto">
              <lord-icon src="https://cdn.lordicon.com/lomfljuq.json" trigger="hover"></lord-icon>
              <input value={form.password} onChange={handleChange}  placeholder="Enter Password" className="border-green-400 text-black p-4 py-1 w-full" type="password" name="password" />
            </div>
          </div>
          <button
  onClick={savePassword}
  className="flex justify-center items-center bg-red-500 rounded-full px-2 py-2 w-full hover:bg-red-700 mt-4"
>
  <lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover"
    className="mr-2" 
  ></lord-icon>
  <span>Save Password</span>
</button>

        
        
          <Table passwords={passwordArray} deletePassword={deletePassword}/>
        </div>
      </div>
    </div>
  );
};
