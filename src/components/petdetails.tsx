'use client';
import { usePetContext } from "@/lib/hooks"
import Image from "next/image"
import PetButton from "./pet-button";
import { Pet } from "@prisma/client";

const PetDetails = () => {
  const { selectedPet } = usePetContext();

  return (
    <section className='flex flex-col h-full w-full'>
      {
        !selectedPet ?
          <EmptyView />
          : (
            <>
              <TopBar pet={selectedPet} />
              <OtherInfo pet={selectedPet} />
              <Notes pet={selectedPet} />
            </>
          )
      }
    </section>
  )
}

export default PetDetails

function EmptyView() {
  return (
    <p className="h-full flex justify-center items-center text-2xl font-medium">
      No pet selected
    </p>
  );
}

function TopBar({ pet }: { pet: Pet }) {
  const { handleCheckoutPet } = usePetContext();

  return (
    <div className="
    flex 
    items-center 
    bg-white
    px-8
    py-5 
    border-b
    border-light
  ">
      <Image
        src={pet?.imageUrl || ''}
        alt=""
        height={75}
        width={75}
        className="h-[75px] w-[75px] rounded-full object-cover"
      />

      <h2 className="ml-5 text-3xl font-semibold leading-7">
        {pet.name}
      </h2>

      <div className="ml-auto space-x-2">
        <PetButton actionType='edit'>
          Edit
        </PetButton>
        <PetButton
          actionType='checkout'
          onClick={async () => await handleCheckoutPet(pet.id)
          }>
          Checkout
        </PetButton>
      </div>
    </div>
  )
}

function OtherInfo({ pet }: { pet: Pet }) {
  return (
    <div className="
        flex 
        justify-around 
        py-10 
        px-5
        text-center
      ">
      <div>
        <h3 className="
            text-[13px]
            font-medium
            uppercase
            text-zinc-700
          ">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">
          {pet?.ownerName}
        </p>
      </div>

      <div>
        <h3 className="
            text-[13px]
            font-medium
            uppercase
            text-zinc-700
          ">
          Age
        </h3>
        <p className="mt-1 text-lg text-zinc-800">
          {pet?.age}
        </p>
      </div>
    </div>
  )
}

function Notes({ pet }: { pet: Pet }) {
  return (
    <section className="bg-white border border-light mb-9 mx-8 px-7 py-5 rounded-md flex-1">
      {pet?.notes}
    </section>
  )
}