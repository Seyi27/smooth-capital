const InfoCard = ({ description }: { description: string }) => {
  return (
    <div className="relative max-w-sm p-6 bg-custom-blue text-white rounded-[30px] shadow-lg rotate -rotate-10">
      <p className="text-[15px] leading-relaxed">{description}</p>

      {/* Button */}
      <button className="mt-5 inline-block rounded-full bg-[#00E5FF] text-custom-blue font-medium px-5 py-2 text-sm hover:opacity-90 transition">
        Read more &gt;
      </button>

      {/* Small bottom "arrow" like in your screenshot */}
      <div className="absolute bottom-[-10px] left-10 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-[#2A0D8A]" />
    </div>
  );
};

export default InfoCard;
