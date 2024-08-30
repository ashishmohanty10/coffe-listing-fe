import { Coffee } from "@/types";
import Image from "next/image";
import StarFill from "/public/Star_fill.svg";
import StarNoFill from "/public/Star.svg";

export const Card = ({ data }: { data: Coffee[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-[290px] h-fit md:w-fit   items-center justify-center ">
      {data.map((coffee, idx) => (
        <div key={idx}>
          <div className="relative">
            <Image
              src={coffee.image}
              alt="coffee type"
              width={150}
              height={150}
              className="w-full rounded-xl mb-2 object-cover"
            />

            {coffee.popular && (
              <div className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold bg-[#F6C768] rounded-3xl">
                Popular
              </div>
            )}
          </div>

          {/* name and price */}
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-base font-semibold text-[#FEF7EE]">
                {coffee.name}
              </p>
            </div>
            <div className="p-1 text-xs font-semibold bg-[#BEE3CC] rounded-md">
              {coffee.price}
            </div>
          </div>

          {/* rating and available  */}
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center gap-1">
              <div className="flex items-center ">
                {coffee.rating ? (
                  <Image src={StarFill} alt="Star with fill" />
                ) : (
                  <Image src={StarNoFill} alt="Star no fill" />
                )}

                <span className="text-sm font-semibold text-[#FEF7EE]">
                  {coffee.rating}
                </span>
              </div>

              <span className="text-[#6F757C] font-semibold text-sm">
                ({coffee.votes} votes)
              </span>
            </div>

            <p>
              {!coffee.available && (
                <p className="text-xs font-semibold text-[#ED735D]">Sold Out</p>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
