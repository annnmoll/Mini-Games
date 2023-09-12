import React, { createContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const specials = "!@#$%&*_-";

  const [range, setRange] = useState(5);
  const [string, setString] = useState('Generate a password');
  const [isVisible , setIsVisible] = useState(true) ; 
  const [eye , setEye]  = useState('https://w7.pngwing.com/pngs/355/665/png-transparent-ui-eye-hide-view-look-privacy-user-interface-icon-thumbnail.png')
  const [formData, setFormData] = useState({ alphabets: true, numerics: false, specials: false })

  const copyHandler = async () => {
    if (string === 'Generate a password') {
      toast.warn('Generate a password first', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    await navigator.clipboard.writeText(string);
    toast.success('Copied', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  const checkStrength = () => {
    const strength = document.querySelector('.strength');
    strength.classList.remove('weak');
    strength.classList.remove('moderate');
    strength.classList.remove('strong');

    if (range <= 5) { strength.classList.add('weak') }
    else if ((!formData.numerics && !formData.specials) && range < 8) { strength.classList.add('moderate') }
    else { strength.classList.add('strong') }


}

const visibilityHandler = () => {
  if (string === 'Generate a password') { return }
  if (!isVisible) {
      setIsVisible(true);
      setEye('https://w7.pngwing.com/pngs/355/665/png-transparent-ui-eye-hide-view-look-privacy-user-interface-icon-thumbnail.png');
  }
  else {
      setIsVisible(false);
      setEye('https://w7.pngwing.com/pngs/103/462/png-transparent-closed-eye-hide-sleep-tidee-health-icon-thumbnail.png');

  }
}

  const value = { range, setRange, string, setString, copyHandler  , alphabets , specials , checkStrength , formData , setFormData , isVisible , setIsVisible , eye , setEye , visibilityHandler};
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider