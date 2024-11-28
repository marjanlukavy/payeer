import usePaymentStore from "../store/store";

const Info = () => {
  const {
    currency,
    depositAmount,
    customPaymentType,
    walletNumber,
    redText1,
    hideRedText1,
    outputSystem,
    walletNumberBK,
    customCommentField,
    commentFieldPayment,
    paymentStatus,
    redText2,
    rotateIcon,
  } = usePaymentStore();
  console.log(rotateIcon);

  return (
    <section className="max-w-[1000px] w-full mx-auto p-[2px] bg-gradient-to-r to-[#869AFA] from-[#869AFA0D] mt-8 rounded-[32px]">
      <div className="flex w-full h-full bg-gradient-to-r from-[#1A2032] to-[#0F101D] pt-[48px] pb-[58px] items-center justify-center text-center rounded-[32px]">
        <div className="flex flex-col gap-[21px]">
          {/* Header Section */}
          <div className="max-w-[672px] w-full flex flex-col gap-4">
            <h1 className="font-inter font-bold text-[32px] leading-[40px] tracking-[-1.2px] text-white">
              {customPaymentType}
            </h1>
            <div>
              <p className="text-[#FA4750] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.8px]">
                {!hideRedText1 ? redText1 : null}
              </p>
              <p className="text-[#FA4750] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.8px]">
                {redText2} {outputSystem} wallet {walletNumber}.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="mx-auto"
            style={{ transform: `rotate(${rotateIcon}deg)` }}
          >
            <img src="/tether.png" alt="Payeer Logo" />
          </div>
          {/* Info Section */}
          <div className="flex flex-col gap-4 text-left text-white max-w-[304px] mx-auto w-full">
            <div className="flex items-center gap-2">
              <span className="font-inter font-medium text-[16px] leading-[24px] text-[#9D9DA1]">
                Amount of Payeer:
              </span>
              <span className="font-inter text-[16px] leading-[24px] text-[#fff]">
                {depositAmount} {currency}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-inter font-medium text-[16px] leading-[24px] text-[#9D9DA1]">
                Payeer wallet address:
              </span>
              <span className="font-inter text-[16px] leading-[24px] text-[#fff]">
                {walletNumberBK}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-inter font-medium text-[16px] leading-[24px] text-[#9D9DA1]">
                {customCommentField}
              </span>
              <span className="font-inter text-[16px] leading-[24px] text-[#fff]">
                {commentFieldPayment}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-inter font-medium text-[16px] leading-[24px] text-[#9D9DA1]">
                Status:
              </span>
              <span className="font-inter text-[16px] leading-[24px] text-[#fff]">
                {paymentStatus}
              </span>
            </div>
          </div>

          <div className="mt-[35px] flex justify-center">
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