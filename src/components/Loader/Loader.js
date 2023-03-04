import { Blocks } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{margin: "0 auto"}}
      wrapperClass="blocks-wrapper"
    />
  );
};
