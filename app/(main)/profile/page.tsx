import Image from "next/image";
import Banner from "../../../assets/images/profile/banner-img.png";
import ProfileImg from "../../../assets/images/profile/profile-img.png";
import Button from "@/ui/Button";
import { AiOutlineMail } from "react-icons/ai";
import Tick from "../../../assets/images/blue-tick.png";
import { HiOutlineMapPin } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import UserCollections from "../../../components/profile/user-collections";

function Profile() {
  return (
    <section className="w-9/10 mx-auto max-w-7xl flex flex-col pb-14 gap-4">
      {/*banner */}
      <div className="">
        {/*banner image */}
        <div className="rounded-2xl h-40 sm:h-60 md:h-72 relative">
          <Image
            src={Banner}
            alt="banner-img"
            fill
            placeholder="blur"
            className="object-cover rounded-2xl"
          />
          {/*profile image */}
          <div className="size-24 md:size-40 rounded-full absolute bottom-0 translate-y-[65%] left-4">
            <Image
              src={ProfileImg}
              alt="profile-img"
              fill
              placeholder="blur"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      {/* follow and message */}
      <div className="flex justify-end gap-4">
        <button className="w-11 rounded-full flex-center border border-gray-400 hover:bg-primary hover:text-white duration-300 focus:scale-[0.98] focus:outline-none">
          <AiOutlineMail size={20} />
        </button>
        <Button
          variant="primary"
          size="regular"
          config={{
            className:
              "text-nowrap rounded-md! font-medium! w-[30%]! md:w-[20%]!",
          }}
        >
          Edit Profile
        </Button>
      </div>
      {/*user details */}
      <div className="mt-8 sm:mt-10 md:mt-12 space-y-2">
        <p className="flex items-center gap-2 font-semibold text-xl">
          Jays Closet
          <Image src={Tick} alt="verified-tick" width={25} height={25} />
        </p>
        <p className="font-medium text-gray-500 flex items-center gap-3 text-sm">
          <span>@Jayscloset</span>
          <span className="rounded-lg flex-center text-[11px] bg-gray-200 p-1.5">
            Follows you
          </span>
        </p>
      </div>

      <p>
        Faucibus neque sed hendrerit nibh lectus tincidunt augue elementum
        viverra.
      </p>

      <div className="text-gray-600 space-y-1">
        <div className="flex items-center gap-4">
          <div className="gap-1.5 flex items-end">
            <HiOutlineMapPin size={25} />
            Lagos, Nigeria
          </div>
          <div className="gap-1.5 flex items-end">
            <CiCalendar size={25} />
            Joined December 2025
          </div>
        </div>
        <p className="flex gap-4">
          <span>
            <span className="text-lg font-medium">55</span>&nbsp;&nbsp;Following
          </span>
          <span>
            <span className="text-lg font-medium">2,884</span>
            &nbsp;&nbsp;Following
          </span>
          <span>
            <span className="text-lg font-medium">284</span>&nbsp;&nbsp;Items
          </span>
        </p>
      </div>
      {/* collections and tabs */}
      <div className="mt-10">
        <UserCollections />
      </div>
    </section>
  );
}

export default Profile;
