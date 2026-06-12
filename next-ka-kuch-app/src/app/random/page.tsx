import Vehicle from "@/components/Vehicle";
import Image from "next/image";

export default function RandomPage() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-800 gap-4">
      <Vehicle name="Car" color="bg-blue-500" wheels={4} />

      <Vehicle name="Motorcycle" color="bg-red-500" wheels={2} />

      <Vehicle name="Truck" color="bg-green-500" wheels={6} />

      <Image
        src="/globe.svg"
        alt="Random"
        width={256}
        height={256}
        className="w-64 h-64 object-cover rounded-lg"
      />
    </div>
  );
}
