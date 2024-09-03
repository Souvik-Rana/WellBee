import React from 'react';

import Image from "next/image";
import Link from "next/link";

import { Button } from '../../../../../components/ui/button';
import { Doctors } from '../../../../../constants';
import { getAppointment } from '../../../../../lib/actions/appointment.actions';
import { formatDateTime } from '../../../../../lib/utils';

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  return (
    <div className="flex h-screen max-h-screen px-[5%] items-center justify-center">
      <div className="success-img">
        <section className="space-y-4 flex items-center">
          <Image src="/logo.png" width={120} height={40} alt="WellBee Logo" />
          <h1 className="header ml-4">WellBee</h1>
        </section>

        {/* Success GIF Section */}
        <section className="flex justify-center mb-6">
          <Image
            src="/assets/gifs/success.gif" // Update this path if necessary
            width={150}
            height={150}
            alt="Success"
            className="w-auto h-auto"
          />
        </section>

        <section className="space-y-4 flex items-center">
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
        </section>

        <section className="space-y-4 flex items-center">
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details mb-8">
          <p>Requested appointment details: </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <div className="flex gap-4 mb-8">
          <Button variant="outline" className="shad-primary-btn" asChild>
            <Link href={`/patients/${userId}/new-appointment`}>
              New Appointment
            </Link>
          </Button>
          <Button variant="outline" className="shad-primary-btn" asChild>
            <Link href="/">
              Home
            </Link>
          </Button>
        </div>

        <p className="copyright">© 2024 WellBee</p>
      </div>
    </div>
  );
};

export default RequestSuccess;
