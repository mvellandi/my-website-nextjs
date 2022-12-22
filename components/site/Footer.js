export default function Footer() {
  return (
    <footer className="flex justify-center items-start w-full h-full py-16 border-t-5 border-t-red-shade bg-red">
      <div className="w-full max-w-screen-xl site-padding-x text-white">
        <span className="text-sm xl:text-base">
          &copy; {new Date().getFullYear()} - Mario Vellandi
        </span>
        
      </div>
    </footer>
  );
}
