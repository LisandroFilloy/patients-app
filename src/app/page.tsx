
import Image from "next/image";

const TEST_PATIENTS = [
  {
    'full_name': 'Tomas Lopez',
    'email_adress': 'tomas.lopez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  },
  {
    'full_name': 'Juan Perez',
    'email_adress': 'juan.perez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  },
  {
    'full_name': 'Maria Gomez',
    'email_adress': 'maria.gomez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  },
  {
    'full_name': 'Pedro Rodriguez',
    'email_adress': 'pedro.rodriguez@gmail.com',
    'phone_number': '+5491133334444',
    'id_photo': 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  }
];

export default function Home() {

  return (
    <div className="m-8">
      <h1 className="text-4xl flex justify-center mb-8">Patients</h1>
      <div className="overflow-hidden rounded-lg">
        <table className="border-2 border-gray-200 mx-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-center">Full Name</th>
              <th className="p-2 text-center">Email Address</th>
              <th className="p-2 text-center">Phone Number</th>
              <th className="p-2 text-center">ID Photo</th>
            </tr>
          </thead>
          <tbody>
            {TEST_PATIENTS.map((patient) => {
              return (
                <tr className="hover:bg-gray-100" key={patient.email_adress}>
                  <td className="p-2 text-center">{patient.full_name}</td>
                  <td className="p-2 text-center">{patient.email_adress}</td>
                  <td className="p-2 text-center">{patient.phone_number}</td>
                  <td className="p-2">
                    <img
                      src={patient.id_photo}
                      alt="ID"
                      className="rounded-lg w-16 h-16 object-cover"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
