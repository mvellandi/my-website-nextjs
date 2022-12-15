export default function Footer() {
  return (
    <footer className="flex justify-center items-start w-full h-full py-4 border-t-5 border-t-red-shade bg-red">
      <div className="w-full max-w-screen-xl site-padding-x text-white">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} - Mario Vellandi
        </span>
        
        <div className="hidden md:block flex flex-col gap-5">
          <div className="flex gap-4 flex-initial items-center">
            {/* <div className="btn btn-xs">Hello XS</div>
            <div className="btn btn-sm">Hello SM</div>
            <div className="btn btn-md">Hello MD</div> */}
            <div className="btn btn-lg">Hello LG</div>
            <div className="btn btn-xl">Hello XL</div>
          </div>
          <div className="flex gap-4 flex-initial items-center">
            {/* <div className="btn btn-xs rounded-full">Hello XS</div>
            <div className="btn btn-sm rounded-full">Hello SM</div>
            <div className="btn btn-md rounded-full">Hello MD</div> */}
            <div className="btn btn-lg rounded-full">Hello LG</div>
            <div className="btn btn-xl rounded-full">Hello XL</div>
          </div>
          <div className="flex gap-4 flex-initial items-center">
            {/* <div className="btn btn-xs-wide rounded-full">Hello XS</div>
            <div className="btn btn-sm-wide rounded-full">Hello SM</div>
            <div className="btn btn-md-wide rounded-full">Hello MD</div> */}
            <div className="btn btn-lg-wide rounded-full">Hello LG</div>
            <div className="btn btn-xl-wide rounded-full">Hello XL</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
