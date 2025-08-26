
const Testimonial = ({ body, author, time }: any) => {
  return (
    <div className="flex justify-center">
      <div className="w-full h-60 p-5 sm:w-200 sm:p-10 bg-white flex flex-col items-center justify-center rounded-lg">
        <div>
          <p className="text-[16px] text-custom-dark pb-3 italic">"{body}"</p>
          <p className="text-[14px] font-bold">{author}</p>
          <p className="text-[12px] text-custom-grey">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
