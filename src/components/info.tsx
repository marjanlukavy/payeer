import usePaymentStore from "../store/store";

const Info = () => {
  const {
    currency,
    depositAmount,
    customPaymentType,
    walletNumber,
    redText1,
    icon,
    hideRedText1,
    systemEnter,
    walletNumberBK,
    customCommentField,
    commentFieldPayment,
    paymentStatus,
    redText2,
    rotateIcon,
  } = usePaymentStore();
  console.log(rotateIcon);
  const changeImage = icon === "Payeer";
  const hideWallet = systemEnter === "Payeer" || systemEnter === "Tether";
  return (
    <section className="max-w-[950px] w-full mx-auto p-[2px] container-bg mt-8 rounded-[32px] ">
      <div className="flex w-full h-full bg-gradient py-6 items-center justify-center text-center rounded-[32px]">
        <div className="flex flex-col gap-[21px]">
          {/* Header Section */}
          <div className="max-w-[672px] w-full flex flex-col gap-4">
            <h1 className="font-inter font-bold text-[32px] leading-[40px] tracking-[-1.2px] text-white">
              {customPaymentType}
            </h1>
            <div className="">
              <p className="text-[#FA4750] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.8px]">
                {!hideRedText1 ? redText1 : null}
              </p>
              <p className="text-[#FA4750] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.8px]">
                {redText2} {systemEnter}
                {hideWallet ? " wallet" : null}
                {walletNumber.length === 0 ? null : " " + walletNumber}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mx-auto">
            <img
              src={changeImage ? "/payeer.png" : "/tether.png"}
              alt="Payeer Logo"
            />
          </div>
          {/* Info Section */}
          <div className="grid grid-cols-2 gap-2 text-white min-w-[404px]  mx-auto w-full">
            <div className="flex flex-col items-end gap-2">
              <span className="font-inter font-medium text-[16px] leading-[24px] text-[#9D9DA1]">
                Amount of Payeer:
              </span>
              <span className="font-inter font-medium text-[16px] leading-[24px] text-[#9D9DA1]">
                Payeer wallet address:
              </span>{" "}
              <span className="font-inter font-medium text-[16px] leading-[24px] text-[#9D9DA1]">
                {customCommentField}
              </span>{" "}
              <span className="font-inter font-medium text-[16px] leading-[24px] text-[#9D9DA1]">
                Status:
              </span>
            </div>

            <div className="flex flex-col items-start  gap-2">
              <span className="font-inter text-[16px] leading-[24px] text-[#fff]">
                {depositAmount} {currency}
              </span>{" "}
              <span className="font-inter text-[16px] leading-[24px] text-[#fff]">
                {walletNumberBK.length === 0 ? "‎ " : walletNumberBK}
              </span>{" "}
              <span className="font-inter text-[16px] leading-[24px] text-[#fff]">
                {commentFieldPayment.length === 0 ? "‎ " : commentFieldPayment}
              </span>{" "}
              <span className="font-inter text-[16px] leading-[24px] text-[#fff]">
                {paymentStatus}
              </span>
            </div>
          </div>

          <div className="mt-2 flex justify-center">
            {paymentStatus === "Waiting for payment" && (
              <div className="loader">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            )}
            {paymentStatus === "Accepted" && (
              <img src="/check.svg" alt="Accepted" className="size-10" />
            )}
            {paymentStatus === "Declined" && (
              <img src="/declined.svg" alt="Declined" className="size-10" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
