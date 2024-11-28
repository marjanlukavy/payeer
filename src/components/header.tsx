import usePaymentStore from "../store/store";

const Header = () => {
  const { blockedBalance, activeBalance, username } = usePaymentStore();
  return (
    <header className="bg-[#101329] backdrop-blur-[15px] px-6 py-4 max-w-[1240px] mx-auto w-full flex items-center justify-between mt-6 rounded-2xl">
      <img src="/logo.svg" alt="Logo" />

      <div className="flex items-center justify-between max-w-[55%] w-full">
        <div className="flex items-center gap-2">
          <img src="/icons/lock.svg" alt="" />
          <div className="flex items-center gap-1">
            <span className="font-inter text-white font-medium text-[16px] leading-[20px]">
              Blocked balance:
            </span>
            <span className="text-[#9D9DA1] font-inter font-semibold tracking-[-0.8px] text-[16px] leading-[20px]">
              {blockedBalance} $
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src="/icons/dollar.svg" alt="" />
          <div className="flex items-center gap-1">
            <span className="font-inter text-white font-medium text-[16px] leading-[20px]">
              Active Balance:
            </span>
            <span className="text-[#9D9DA1] font-inter font-semibold tracking-[-0.8px] text-[16px] leading-[20px]">
              {activeBalance} $
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src="/icons/user.svg" alt="" />
          <div className="flex items-center gap-1">
            <span className="text-[#9D9DA1] font-inter font-semibold tracking-[-0.8px] text-[16px] leading-[20px]">
              {username ? username : "-"}
            </span>
          </div>
        </div>
      </div>

      <button className="bg-[#1A56DB] rounded-[12px] py-4 px-8">
        <span className="font-inter font-bold text-[16px] leading-[20px] text-white">
          Sattellites
        </span>
      </button>
    </header>
  );
};

export default Header;
