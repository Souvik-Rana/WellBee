import React from 'react';

import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "../../../../components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div
      className="flex h-screen max-h-screen overflow-y-auto relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/register-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="remove-scrollbar container relative z-10 p-5">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10 text-white">
          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 WellBee</p>
        </div>
      </section>
    </div>
  );
};

export default Register;
