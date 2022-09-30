// const defaultColors = {
//   inactive: {
//     border: "slate-700",
//     fill: "slate-200",
//     text: "slate-900",
//   },
// };

// const sizes = {
//   xs: {
//     border: 2,
//     py: 1.5,
//     px: {
//       default: 3,
//       wide: 5,
//     },
//     text: "base",
//     fontWeight: "normal",
//   },
//   sm: {
//     border: 3,
//     py: 2,
//     px: {
//       default: 4,
//       wide: 7,
//     },
//     text: "lg",
//     fontWeight: "normal",
//   },
//   md: {
//     border: 4,
//     py: 2.5,
//     px: {
//       default: 5,
//       wide: 10,
//     },
//     text: "2xl",
//     fontWeight: "normal",
//   },
//   lg: {
//     border: 5,
//     py: 3,
//     px: {
//       default: 7,
//       wide: 12,
//     },
//     text: "3xl",
//     fontWeight: "normal",
//   },
// };

// function refCheck(val, searchItem) {
//   if (val === undefined) {
//     throw ReferenceError(`${searchItem} not found`);
//   } else {
//     return true;
//   }
// }

// function getSizes(size, width = "default") {
//   ({ border, py, px, fontWeight } = sizes[size]);
//   let widthSize;
//   if (refCheck(sizes[size]))
//     return [
//       `border-${border}`,
//       `py-${py}`,
//       `px-${px[width]}`,
//       `text-${sizes[size].text}`,
//     ].join(" ");
// }

// function getWeight(size, custom) {
//   if (custom) {
//     return `font-${custom}`;
//   }
//   return `font-${sizes[size]["font-weight"]}`;
// }

// //
// const Button = ({
//   size = "sm",
//   state = "inactive",
//   colors = defaultColors,
//   width = "default",
//   className = "",
//   children,
// }) => {
//   const styles = ["flex justify-center", getSizes(size), className];
//   return <div className={styles}>{children}</div>;
// };

// export default Button;
