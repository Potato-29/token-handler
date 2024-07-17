import React, { useEffect, useState } from "react";
import { getAllTokens } from "../services/tokenServices";
import { toastOptions } from "../constants/toastOptions";
import { toast } from "react-toastify";
import Loader from "../components/Loader/Loader";
import TokenActionZone from "../components/TokenActionZone/TokenActionZone";

const Tokens = () => {
  const [tokens, setTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedToken, setSelectedToken] = useState();
  const getAllAvailableTokens = async () => {
    setIsLoading(true);
    try {
      const response = await getAllTokens();
      setTokens(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to fetch!", toastOptions);
    }
  };
  useEffect(() => {
    getAllAvailableTokens();
  }, []);
  return (
    <div class="drawer lg:drawer-open h-full ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col h-full items-center justify-center">
        {isLoading ? (
          <Loader />
        ) : (
          <TokenActionZone
            setSelectedToken={setSelectedToken}
            token={selectedToken}
          />
        )}
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side h-full shadow-md">
        <label
          for="my-drawer-2"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-56 py-4">
          {tokens &&
            tokens?.map((token) => (
              <div
                onClick={() => setSelectedToken(token)}
                className={`p-4 ${
                  selectedToken?.number === token.number
                    ? "bg-blue-400 hover:bg-blue-500"
                    : "bg-base-200 hover:bg-base-300 "
                }cursor-pointer`}
              >
                <p className="text-lg font-bold h-full">
                  {token.number} - {token.tokenType?.label}
                </p>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Tokens;
