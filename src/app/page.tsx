"use client"

import { useState, useRef } from "react";
import { ImSpinner8 as Spinner } from "react-icons/im";



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

interface PatientData {
  name:string,
  email:string,
  phone_number:string,
  imageURL:string,
}

export default function Home() {
  const [expanded, setExpanded] = useState<null | number>(null);
  const [newPatientModal, setNewPatientModal] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [FullNameValidationError, setFullNameValidationError] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [phoneNumberValidationError, setPhoneNumberValidationError] = useState(false);
  const [characteristicValidationError, setCharacteristicValidaitonError] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [characteristic, setCharacteristic] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');

  // Handle drag events
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // Handle file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  // Process the file
  const handleFile = (file: File) => {
    setUploadedFile(file);

    // Create a preview URL for the image
    const fileUrl = URL.createObjectURL(file);
    setPreviewUrl(fileUrl);
  };

  // Handle button click to open file dialog
  const onButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  async function handleSubmit(patientData: PatientData) {
    setSubmitLoading(true);
    try {
      const response = await fetch("/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData), // The data to send in the request
      });

      if (!response.ok) {
        // Handle server errors (like 4xx, 5xx)
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create patient");
      }

      // Parse the response JSON if request was successful
      const data = await response.json();
      console.log("Patient created:", data);
      setSubmitLoading(false);
      return data;
    } catch (error) {
      console.error("Error creating patient:", error);
      setSubmitLoading(false);
    }
  }

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
        <div className="bg-white w-[450px] pb-8 z-10 relative border-black rounded-lg flex flex-col gap-4 p-4 pt-16 items-center text-md">
          <div
            onClick={() => setNewPatientModal(false)}
            className="absolute top-5 right-5 p-1 rounded-full w-10 h-10 cursor-pointer hover:bg-gray-100 flex justify-center items-center border-1 border-gray-300 shadow-lg">
            x
          </div>
          <div>
            <h1 className="px-1">Full Name:</h1>
            <input onChange={(e) => {setName(e.target.value)}} className="shadow-lg border-1 border-gray-300 rounded-sm p-1 w-[300px]"></input>
            {FullNameValidationError && <h3 className="text-xs text-red-500 mt-1">Invalid Name</h3>}
          </div>
          <div>
            <h1 className="px-1">Email Address:</h1>
            <input onChange={(e) => {setEmail(e.target.value)}}className="shadow-lg border-1 border-gray-300 rounded-sm p-1 w-[300px]"></input>
            {emailValidationError && <h3 className="text-xs text-red-500 mt-1">Invalid Email</h3>}
          </div>
          <div>
            <h1 className="px-1">Phone Number:</h1>
            <div className="flex gap-[10px]">
              <input onChange={(e) => {setCharacteristic(e.target.value)}} className="shadow-lg border-1 border-gray-300  rounded-sm p-1 w-[60px]"></input>
              <input onChange={(e) => {setPhoneNumber(e.target.value)}} className="shadow-lg border-1 border-gray-300  rounded-sm p-1 w-[230px]"></input>
            </div>
            {phoneNumberValidationError && <h3 className="text-xs text-red-500">Invalid Phone number</h3>}
            {characteristicValidationError && <h3 className="text-xs text-red-500">Invalid Characteristic</h3>}
          </div>
          <div
            className={`relative w-[300px] h-[150px] border-2 border-dashed rounded-lg flex flex-col justify-center items-center cursor-pointer ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={onButtonClick}
          >
            {previewUrl ? (
              <div className="w-full h-full flex flex-col items-center">
                <img
                  src={previewUrl}
                  alt="ID Preview"
                  className="max-h-[100px] max-w-[250px] object-contain my-2"
                />
                <p className="text-sm text-gray-500">{uploadedFile?.name}</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-500 mt-2">Drag and drop your document here</p>
                <p className="text-xs text-gray-400">or click to select</p>
              </>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            {uploadedFile && (
              <button
                className="absolute top-1 right-1 px-3 py-1 bg-red-500 text-white rounded-md text-sm cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setUploadedFile(null);
                  setPreviewUrl(null);
                }}
              >
                X
              </button>
            )}
          </div>

          <button onClick={() => handleSubmit({
            name: name,
            phone_number: characteristic + phoneNumber,
            email: email,
            imageURL: 'test'
          })} 
            className="cursor-pointer border-2 rounded-md w-16 h-8 bg-blue-500 text-white hover:bg-blue-400 flex justify-center items-center text-sm'">{!submitLoading ? "Save" : <Spinner className="animate-spin"></Spinner>}</button>
        </div>
      </div>
    )}
  </div>
);
}
