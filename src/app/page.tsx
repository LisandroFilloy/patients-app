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

  return (
    <div className="m-8">
      <h1 className="text-4xl flex justify-center mb-8">Patients</h1>
      <div className="flex flex-col gap-4 mx-[30%] min-w-96">
        <div className="hover:bg-green-100 border-1 border-gray-200 rounded-md shadow-lg flex items-center p-4 flex justify-center items-center cursor-pointer">
          <span className="text-8xl text-green-500">+</span>
        </div>
        {TEST_PATIENTS.map((patient) => {
          return (
            <div onClick={() => setExpanded(expanded === patient.id ? null : patient.id)}
              className={`hover:scale-102 border-1 border-gray-200 rounded-md shadow-lg flex flex-col gap-4 items-center p-4 cursor-pointer"
                }`}
              key={patient.email_adress}>

              <div className="text-center text-xl">{patient.full_name}</div>

              <div>
                <img
                  src={patient.id_photo}
                  alt="ID"
                  className="rounded-lg w-[214px] h-[135px] object-cover"
                />
              </div>

              {expanded === patient.id && (
                <div className="mt-2 text-start">
                  <p><span className="font-bold">email:</span> {patient.email_adress}</p>
                  <p><span className="font-bold">Phone:</span> {patient.phone_number}</p>
                </div>
              )}
            </div>

          );
        })}
      </div>
    </div>
  );
}
