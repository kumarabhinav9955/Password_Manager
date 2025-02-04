
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const Table = ({ passwords,deletePassword}) => {

    const copyText = (text) => {
        toast('Copied To ClipBoard!', {
            position: "top-center",
            autoClose: 200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: "Bounce"
        });
        navigator.clipboard.writeText(text);
    };
    const DeleteData = (index) => {
        if (window.confirm("Are you sure you want to delete this password?")) {
deletePassword(index)
            toast('Password deleted!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: "Bounce"
            });
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={200}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition="Bounce"
            />
            <div className="passwords">
                <h2 className="font-bold text-2xl py-4 flex justify-center">Your Passwords</h2>
                {passwords.length === 0 && <div>No Passwords Saved</div>}
                {passwords.length !== 0 && (
                    <table className="table-auto w-full ">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Site</th>
                                <th className="p-2">Username</th>
                                <th className="p-2">Password</th>
                                <th className="p-2">Actions</th>


                            </tr>
                        </thead>
                        <tbody className="bg- text-white">
                            {passwords.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="py-2 border border-white  text-center w-32"><a href={item.site} target='_blank'>{item.site}</a></td>
                                        <td className="py-2 border cursor-pointer border-white text-center w-32">
                                            <div className="cursor-pointer flex justify-center " onClick={() => { copyText(item.username) }}>{item.username}<lord-icon
                                                src="https://cdn.lordicon.com/fjvfsqea.json"
                                                trigger="hover"
                                                stroke="bold"
                                                colors="primary:#ffffff,secondary:#08a88a"
                                            >
                                            </lord-icon>
                                            </div></td>
                                        <td className="py-2 border flex justify-center border-white text-center "><div className=" flex justify-center h-12 cursor-pointer "  onClick={() => { copyText(item.password) }}>{item.password}<lord-icon
                                            src="https://cdn.lordicon.com/fjvfsqea.json"
                                            trigger="hover"
                                            stroke="bold"
                
                                            colors="primary:#ffffff,secondary:#08a88a"
                                        >
                                        </lord-icon></div></td>
                                        <td className="py border  justify-center border-white text-center" >
                                              <button onClick={() => DeleteData(index)}><lord-icon
                                                src="https://cdn.lordicon.com/hwjcdycb.json"
                                                trigger="hover"
                                                stroke="bold"
                                                colors="primary:#ffffff,secondary:#08a88a"
                                            >
                                            </lord-icon></button>
                                           </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
