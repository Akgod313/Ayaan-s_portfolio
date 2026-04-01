import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-[#E9E3DF] min-h-[100vh] pt-20 flex-col items-center">

  
      <div className="relative flex items-center justify-center w-[500px] h-[500px] bg-[radial-gradient(circle,_#FF7A30_0%,_#FF7A30_20%,_#E9E3DF_45%)] mt-[50px] ml-[-600px]">
  
        <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-2xl">
          <Image 
            src='/cropped_circle_image.png'
            alt="Image Of Ayaan"
            fill
            className="object-cover z-20" // Added z-20 here
            priority
          />
        </div>

      </div>

</div>
  );
}