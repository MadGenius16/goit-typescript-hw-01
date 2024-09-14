let mixedType: string | number;
mixedType = "John"
console.log(mixedType)


function changeButton (property: "enable" | "disable") {
  if (property === "enable") {
    console.log("button enable")
      } else {
        console.log("button disable")
      }
}

changeButton("enable")