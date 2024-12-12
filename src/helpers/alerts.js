import Swal from "sweetalert2"

export const alertInfo = (text = "Este campo es obligatorio", timer = 2000) => {
  
  Swal.fire({
    icon: 'info',
    html: `<b>${text}</b>`,
    timer: timer,
    confirmButtonColor: "#444444",
    iconColor: "#c77dff",
  })
}