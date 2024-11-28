import usePaymentStore from "../store/store";

const PaymentForm = () => {
  const {
    blockedBalance,
    activeBalance,
    username,
    depositAmount,
    currency,
    paymentType,
    walletNumber,
    walletNumberBK,
    redText1,
    redText2,
    outputSystem,
    commentField,
    commentFieldPayment,
    paymentStatus,
    customCommentField,
    hideRedText1,
    rotateIcon,
    customPaymentType,
    setBlockedBalance,
    setActiveBalance,
    setUsername,
    setDepositAmount,
    setCurrency,
    setPaymentType,
    setWalletNumber,
    setWalletNumberBK,
    setRedText1,
    setRedText2,
    setOutputSystem,
    setCustomCommentField,
    setCommentField,
    setCommentFieldPayment,
    setPaymentStatus,
    setHideRedText1,
    setRotateIcon,
    setCustomPaymentType,
  } = usePaymentStore();

  const tags = ["Payeer", "Advcash", "Qiwi", "Webmoney"];
  const paymentTypeOptions = [
    "Payment of Commission",
    "Deposit payment",
    "Verification Payment",
    "Private Services",
  ];
  const commentFieldOptions = ["Comment to payment:", "Personal ID:"];
  const paymentStatusOptions = ["Waiting for payment", "Accepted", "Declined"];
  const currencyOptions = ["RUB", "USD", "EUR"];

  return (
    <form className="p-6 bg-gray-900 text-white max-w-[1240px] my-20 mx-auto rounded-lg space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 justify-between">
          {/* Blocked Balance */}
          <div>
            <label className="block text-sm mb-1">Заблокированный баланс</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800"
              value={blockedBalance}
              onChange={(e) => setBlockedBalance(e.target.value)}
            />
          </div>

          {/* Active Balance */}
          <div>
            <label className="block text-sm mb-1">Активный баланс</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800"
              value={activeBalance}
              onChange={(e) => setActiveBalance(e.target.value)}
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm mb-1">Имя пользователя</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Deposit Amount */}
          <div>
            <label className="block text-sm mb-1">Сумма пополнения</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="w-full p-2 border border-gray-700 rounded bg-gray-800"
                placeholder="Enter amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="p-2 border border-gray-700 rounded bg-gray-800 text-white"
              >
                {currencyOptions.map((currencyOption) => (
                  <option
                    key={currencyOption}
                    value={currencyOption}
                    className="bg-gray-800 text-white"
                  >
                    {currencyOption}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Payment Type */}
          <div className="flex items-end gap-2">
            <div className="w-full max-w-[340px]">
              <label className="block text-sm mb-1">Тип оплаты</label>
              <select
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
              >
                {paymentTypeOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="bg-gray-800 text-white"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              className="w-32 p-2 border border-gray-700 rounded bg-gray-800 w-full"
              value={customPaymentType}
              onChange={(e) => setCustomPaymentType(e.target.value)}
            />
          </div>

          {/* Wallet Number */}
          <div>
            <label className="block text-sm mb-1">Номер кошелька клиента</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800"
              value={walletNumber}
              onChange={(e) => setWalletNumber(e.target.value)}
              placeholder="Enter wallet number"
            />
          </div>

          {/* Red Text 1 */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Красный текст 1
            </label>
            <div className="flex items-center gap-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={redText1}
                onChange={(e) => setRedText1(e.target.value)}
                placeholder="Введите текст"
              />
            </div>
            <div className="absolute top-0 right-0 flex items-center">
              <input
                type="checkbox"
                checked={hideRedText1}
                onChange={() => setHideRedText1(!hideRedText1)}
                className="w-5 h-5 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-offset-gray-800"
              />
              <span className="ml-2 text-sm text-gray-300">
                Не показывать текст
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-between">
          {/* Output System */}
          <div className="flex justify-between items-center">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Система вывода
              </label>
              <div className="flex items-center gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setOutputSystem(tag)}
                    className={`px-3 py-1 text-sm rounded-lg border border-gray-700 transition-all duration-200 ${
                      outputSystem === tag
                        ? "bg-white text-black shadow-md"
                        : "bg-gray-800 text-white hover:bg-gray-500"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <input
              type="text"
              className="w-40 px-3 py-2 border border-gray-700 rounded bg-gray-800 outline-none"
              value={outputSystem}
              readOnly
            />
          </div>

          {/* Wallet Number BK */}
          <div>
            <label className="block text-sm mb-1">Номер кошелька БК</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800"
              placeholder="Enter wallet number"
              value={walletNumberBK}
              onChange={(e) => setWalletNumberBK(e.target.value)}
            />
          </div>

          {/* Comment Field Name */}
          <div className="flex items-end gap-2">
            <div className="w-full max-w-[340px]">
              <label className="block text-sm mb-1">
                Название поля комментария
              </label>
              <select
                value={commentField}
                onChange={(e) => setCommentField(e.target.value)}
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
              >
                {commentFieldOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="bg-gray-800 text-white"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              className="w-32 p-2 border border-gray-700 rounded bg-gray-800 w-full"
              value={customCommentField}
              onChange={(e) => setCustomCommentField(e.target.value)}
            />
          </div>

          {/* Comment to Payment */}
          <div>
            <label className="block text-sm mb-1">Комментарий к платежу</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800"
              placeholder="Enter comment"
              value={commentFieldPayment}
              onChange={(e) => setCommentFieldPayment(e.target.value)}
            />
          </div>

          {/* Payment Status */}
          <div>
            <label className="block text-sm mb-1">Статус платежа</label>
            <select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            >
              {paymentStatusOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-gray-800 text-white"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Red Text 2 */}
          <div>
            <label className="block text-sm mb-1">Повернуть иконку</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800"
              value={rotateIcon}
              onChange={(e) => setRotateIcon(+e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Красный текст 2</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-700 rounded bg-gray-800"
              value={redText2}
              onChange={(e) => setRedText2(e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
