import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../../data/data";

const AdminSUVDetails = () => {
  const { id } = useParams();
  const suv = data.find((item) => Number(item.id) === Number(id));
  console.log(suv);

  return (
    <div className="w-full min-h-[70vh] py-10 bg-stone-900">
      <div className="px-36 text-stow text-stone-300">
        <div className="flex items-center gap-10">
          <img src={suv.image} alt="img" className="w-68" />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">{suv.title}</h1>
            <p className="text-lg">{suv.rent}</p>
          </div>
        </div>

        <h1 className="font-semibold pt-6 pb-2">{suv.title}</h1>
        <p className="text-sm">{suv.price}</p>
        <p className="text-sm">{suv.details}</p>
        <p className="text-[17px] w-[500px] text-stone-400 leading-normal py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing. incidunt ratione,
          accusamus tempore cupiditate sapiente illum, delectus totam autem in
          numquam! Quod, tenetur ex! Doloremque animi aliquid reiciendis.
        </p>
        <Link
          to=".."
          relative="path"
          className="bg-stone-600 text-white px-4 py-1 text-lg rounded-md"
        >
          Back to all SUVs
        </Link>
      </div>
    </div>
  );
};

export default AdminSUVDetails;
