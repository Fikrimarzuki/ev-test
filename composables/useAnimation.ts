export default () => {
  const fromToAnimation = (element: Element | null, newClass: string) => {
    if (element) {
      const animaClass = [
        "anima-left",
        "anima-right",
        "anima-show"
      ]
      for (let i = 0; i < animaClass.length; i++) {
        element.classList.remove(animaClass[i])
      }
      setTimeout(() => {
        element.classList.add(newClass)
      }, 1)
    }
  }
  return {
    fromToAnimation
  };
};