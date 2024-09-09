import React from 'react';

import Image from "next/image";
import { AppointmentForm } from "../../../../components/forms/AppointmentForm";
import { getPatient } from "../../../../lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="relative flex flex-col h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/register-img.jpg')`,
          opacity: 0.4,
          zIndex: -1,
        }}
      />

      {/* Main Content Section */}
      <section className="relative flex flex-col items-center justify-center flex-1 p-4">
        <div className="max-w-[860px] w-full">
          {/* Logo and Heading */}
          <section className="flex items-center mb-8">
            <Image src="/logo.png" width={120} height={40} alt="WellBee Logo" />
            <h1 className="text-3xl font-bold ml-4">WellBee</h1>
          </section>

          {/* Appointment Form */}
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          {/* Footer */}
          <p className="text-center mt-10 py-12 text-gray-600">© 2024 WellBee</p>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
