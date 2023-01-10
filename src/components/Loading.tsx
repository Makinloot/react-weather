import { Blocks } from "react-loader-spinner";

const Loading = (): JSX.Element => {
  return (
    <div className="Loading">
      <div className="container">
        <div className="Loading-wrapper">
          <Blocks
            visible={true}
            height="100%"
            width="100%"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        </div>
      </div>
    </div>
  )
}

export default Loading