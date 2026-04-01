export const useDirection = () => {
  const changeDirection = (language) => {
    return language === 'fa' ? 'rtl' : 'ltr'
  }

  const changeAlign = (language) => {
    return language === 'fa' ? 'right' : 'left'
  }

  return {
    changeDirection,
    changeAlign,
  }
}
