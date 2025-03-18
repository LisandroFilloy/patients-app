"use client"

import Image from "next/image";
import { useState } from "react";

let TEST_PATIENTS = [
  {
    'id': 1,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
  {
    'id': 2,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
  {
    'id': 3,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
  {
    'id': 4,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
  {
    'id': 5,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
  {
    'id': 6,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
  {
    'id': 7,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
  {
    'id': 8,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
  {
    'id': 9,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
  {
    'id': 10,
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'DNI-prueba.jpg'
  },
];

export default function Home() {
  const [expanded, setExpanded] = useState<null | number>(null);
  const [newPatientModal, setNewPatientModal] = useState(false);

  return (
    <div className="m-8">
      <h1 className="text-4xl flex justify-center mb-8">Patients</h1>
      <div className="flex flex-col gap-4 mx-[30%] min-w-96">
        <div
          onClick={() => { setNewPatientModal(true) }}
          className="hover:bg-green-100 border-1 border-gray-200 rounded-md shadow-lg flex items-center p-4 flex justify-center items-center cursor-pointer">
          <span className="text-8xl text-green-500">+</span>
        </div>
        {TEST_PATIENTS.map((patient) => {
          return (
            <div onClick={() => setExpanded(expanded === patient.id ? null : patient.id)}
              className={`hover:scale-102 border-1 border-gray-200 rounded-md shadow-lg flex flex-col items-center p-4 cursor-pointer"
                }`}
              key={patient.id}>

              <div>
                <img
                  src={patient.id_photo}
                  alt="ID"
                  className="rounded-lg w-[214px] h-[135px] object-cover mb-2"
                />
              </div>
              <div className="text-center text-3xl">{patient.full_name}</div>

              {expanded === patient.id && (
                <div className="text-start text-gray-500">
                  <p>{patient.email_adress}</p>
                  <p>{patient.phone_number}</p>
                </div>
              )}
            </div>

          );
        })}
      </div>
      {newPatientModal && (
        <div className="w-screen h-screen z-100 fixed top-0 left-0 flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-80" onClick={() => setNewPatientModal(false)}></div>
          <div className="bg-white w-[450px] h-[600px] z-10 relative border-black rounded-lg flex flex-col gap-4 p-4 pt-16 items-center text-xl">
            <div
              onClick={() => setNewPatientModal(false)}
              className="absolute top-5 right-5 bg-gray-200 p-1 rounded-full cursor-pointer">
              X
            </div>
            <div>
              <h1 className="px-1">Full Name:</h1>
              <input className="border-2 rounded-sm p-1 w-[300px]"></input>
            </div>
            <div>
              <h1 className="px-1">Email Address:</h1>
              <input className="border-2 rounded-sm p-1 w-[300px]"></input>
            </div>
            <div>
              <h1 className="px-1">Phone Number:</h1>
              <input className="border-2 rounded-sm p-1 w-[300px]"></input>
            </div>
            <div>
              <h1 className="px-1 mt-4">Drag and drop Document</h1>
            </div>
            {/* Modal Content */}
          </div>
        </div>
      )}
    </div>
  );
}
