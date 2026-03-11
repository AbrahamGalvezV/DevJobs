import { ThreeDots } from "react-loader-spinner";

export function Spinner() {

  return (
    <>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#005cf1f3"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "20px" }}
        wrapperClass="custom-loader"
        visible={true}
      />    
    </>
  );
}
