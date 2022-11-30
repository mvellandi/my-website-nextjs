export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full h-12 border-t-5 border-t-red-shade bg-red lg:h-32">
      <div className="w-full max-w-screen-lg px-5 text-white">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} - Mario Vellandi
        </span>
      </div>
    </footer>
  );
}
