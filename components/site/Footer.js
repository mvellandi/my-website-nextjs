export default function Footer() {
  return (
    <footer className="flex justify-center items-start w-full h-full pt-4 border-t-5 border-t-red-shade bg-red">
      <div className="w-full max-w-screen-xl site-padding-x text-white">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} - Mario Vellandi
        </span>
      </div>
    </footer>
  );
}
