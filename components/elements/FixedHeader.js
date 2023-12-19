import HTMLComment from "react-html-comment";

export default function FixedHeader({ children }) {
  return (
    <>
      <HTMLComment text="FIXED HEADER AND NAVIGATION" />
      <div className="fixed z-20 w-full">{children}</div>
    </>
  );
}
