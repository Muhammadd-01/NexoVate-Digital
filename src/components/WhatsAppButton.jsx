const WhatsAppButton = () => {
    const phoneNumber = "03128538773"
    const message = "Hello, I would like to know more about GrowHub Solutions."
  
    const handleClick = () => {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
    }
  
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-4 left-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        WhatsApp
      </button>
    )
  }
  
  export default WhatsAppButton
  
  