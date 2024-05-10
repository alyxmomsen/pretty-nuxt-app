export default function MyUtils() {


  /**
   *  
   * @param str
   * @see http://www.hello.world
   */

  function prettyText(str: string) {
    return str
      .split(" ")
      .map((elem) =>
        elem
          .split("")
          .map((elem, i) => (i == 0 ? elem.toUpperCase() : elem))
          .join(""),
      )
      .join(".");
  }

  return {
    prettyText,
  };
}
