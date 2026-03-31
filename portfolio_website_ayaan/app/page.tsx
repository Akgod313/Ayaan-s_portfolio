import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-[#E9E3DF] min-h-[200vh] pt-20 font-[Basic]">
      <div className="realtive w-[305px] h-[305px] flex items-center justify-center bg-gradient-to-tr from-orange-500 via-pink-500 to-yellow-400 rounded-full p-[5px]">
        <div>
          <div className="relative w-[300px] h-[300px] translate-x-[430px] translate-y-[200px] ">
            <Image
              src='/cropped_circle_image.png'    
              fill
              className="object-contain"
              alt="Image Of Ayaan"
              priority
            />
        </div>
        </div>
      </div>
    </div>
  );
}