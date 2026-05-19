import React, { createContext} from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {

    const sendEmail = async (formData) => {

        try {
    
            const response = await fetch("https://backend-coreven.onrender.com/email", {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                const text = await response.text();
                throw new Error(text);
            }
    
            const datos = await response.json();
    
            console.log("Correo enviado", datos);
    
        } catch (err) {
            console.error("Error", err);
        }
    }

 

  return (

    <ContactContext.Provider value={{ sendEmail}}>
      {children}
    </ContactContext.Provider>
  );
};